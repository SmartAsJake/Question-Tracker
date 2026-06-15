#!/usr/bin/env python3
"""
QuestPulse Server — serves the app and stores per-user data in JSON files.
No dependencies beyond Python 3 standard library.

Usage: python3 server.py
"""

import http.server
import json
import os
import sys

import pymongo

PORT = int(os.environ.get('PORT', 8080))
VALID_USERS = ['user1', 'user2']

# Configure MongoDB Connection from Env Variable
# Fallback to local files if MONGODB_URI is not set (useful for local development)
MONGODB_URI = os.environ.get('MONGODB_URI')
mongo_client = None
db = None
users_collection = None

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

if MONGODB_URI:
    try:
        # Connect to MongoDB Atlas
        mongo_client = pymongo.MongoClient(MONGODB_URI, serverSelectionTimeoutMS=5000)
        # Test connection
        mongo_client.admin.command('ping')
        db = mongo_client['questpulse']
        users_collection = db['users']
        print("🔌 Successfully connected to MongoDB Atlas!")
    except Exception as e:
        print(f"❌ Failed to connect to MongoDB Atlas: {e}")
        print("⚠️  Falling back to local disk storage.")
        mongo_client = None
        os.makedirs(DATA_DIR, exist_ok=True)
else:
    print("ℹ️  MONGODB_URI environment variable not set. Using local disk storage.")
    os.makedirs(DATA_DIR, exist_ok=True)


def get_local_filepath(user_id):
    return os.path.join(DATA_DIR, f"{user_id}.json")


def read_user_data(user_id):
    if mongo_client and users_collection is not None:
        try:
            # Query MongoDB
            doc = users_collection.find_one({"_id": user_id})
            if doc:
                # Remove MongoDB's internal ID object for JSON serialization
                doc.pop('_id', None)
                return doc
            return None
        except Exception as e:
            print(f"Error reading {user_id} from MongoDB: {e}")
            return None
    else:
        # Fallback to local disk
        filepath = get_local_filepath(user_id)
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                print(f"Error reading local file {filepath}: {e}")
        return None


def write_user_data(user_id, data):
    if mongo_client and users_collection is not None:
        try:
            # Upsert document in MongoDB (insert if new, update if existing)
            users_collection.replace_one(
                {"_id": user_id},
                data,
                upsert=True
            )
            return True
        except Exception as e:
            print(f"Error writing {user_id} to MongoDB: {e}")
            return False
    else:
        # Fallback to local disk
        filepath = get_local_filepath(user_id)
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            return True
        except Exception as e:
            print(f"Error writing local file {filepath}: {e}")
            return False


# MIME types for static file serving
MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))


class QuestPulseHandler(http.server.BaseHTTPRequestHandler):
    """Handles both API routes and static file serving."""

    def log_message(self, format, *args):
        # Cleaner log output
        sys.stderr.write(f'  [{self.log_date_time_string()}] {format % args}\n')

    def _send_json(self, data, status=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        path = self.path.split('?')[0]  # strip query params

        # --- API ROUTES ---

        # GET /api/users — summary of all users for the selection popup
        if path == '/api/users':
            summaries = {}
            for uid in VALID_USERS:
                data = read_user_data(uid)
                if data:
                    summaries[uid] = {
                        'totalCount': data.get('totalCount', 0),
                        'streak': data.get('streak', 0),
                        'chaptersCount': len(data.get('chapters', [])),
                        'dailyCount': data.get('dailyCount', 0),
                        'hasData': True
                    }
                else:
                    summaries[uid] = {'hasData': False}
            self._send_json(summaries)
            return

        # GET /api/data/<userId> — load a user's full state
        if path.startswith('/api/data/'):
            user_id = path.split('/')[-1]
            if user_id not in VALID_USERS:
                self._send_json({'error': 'Invalid user ID'}, 400)
                return
            data = read_user_data(user_id)
            self._send_json(data)  # None becomes JSON null
            return

        # --- STATIC FILE SERVING ---
        if path == '/':
            path = '/index.html'

        filepath = os.path.join(BASE_DIR, path.lstrip('/'))
        filepath = os.path.realpath(filepath)

        # Security: prevent directory traversal
        if not filepath.startswith(BASE_DIR):
            self.send_response(403)
            self.end_headers()
            return

        if not os.path.isfile(filepath):
            self.send_response(404)
            self.send_header('Content-Type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'Not Found')
            return

        ext = os.path.splitext(filepath)[1].lower()
        content_type = MIME_TYPES.get(ext, 'application/octet-stream')

        with open(filepath, 'rb') as f:
            content = f.read()

        self.send_response(200)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        self.wfile.write(content)

    def do_POST(self):
        path = self.path.split('?')[0]

        # POST /api/data/<userId> — save a user's full state
        if path.startswith('/api/data/'):
            user_id = path.split('/')[-1]
            if user_id not in VALID_USERS:
                self._send_json({'error': 'Invalid user ID'}, 400)
                return

            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)

            try:
                data = json.loads(body)
            except json.JSONDecodeError:
                self._send_json({'error': 'Invalid JSON body'}, 400)
                return

            if write_user_data(user_id, data):
                self._send_json({'status': 'saved'})
            else:
                self._send_json({'error': 'Failed to write data'}, 500)
            return

        self.send_response(404)
        self.end_headers()


def main():
    server = http.server.HTTPServer(('0.0.0.0', PORT), QuestPulseHandler)
    print(f'\n  ✨ QuestPulse Server running at http://localhost:{PORT}\n')
    if MONGODB_URI:
        print(f'  ☁️  Database: MongoDB Atlas (questpulse.users)')
    else:
        print(f'  📁 Database: Local Storage fallback ({DATA_DIR}/)')
    print(f'  👤 Supported profiles: {", ".join(VALID_USERS)}\n')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n  Server stopped.')
    server.server_close()


if __name__ == '__main__':
    main()
