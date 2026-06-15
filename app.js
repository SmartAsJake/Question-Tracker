// Default chapters list for JEE Main syllabus
const DEFAULT_CHAPTERS = [
  // Physics
  { id: 'p1', name: 'Physics and Measurement', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p2', name: 'Kinematics', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p3', name: 'Laws of Motion', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p4', name: 'Work, Energy and Power', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p5', name: 'Rotational Motion', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p6', name: 'Gravitation', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p7', name: 'Properties of Solids and Liquids', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p8', name: 'Thermodynamics', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p9', name: 'Kinetic Theory of Gases', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p10', name: 'Oscillations and Waves', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p11', name: 'Electrostatics', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p12', name: 'Current Electricity', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p13', name: 'Magnetic Effects of Current and Magnetism', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p14', name: 'Electromagnetic Induction and AC', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p15', name: 'Electromagnetic Waves', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p16', name: 'Optics', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p17', name: 'Dual Nature of Matter and Radiation', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p18', name: 'Atoms and Nuclei', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p19', name: 'Electronic Devices', subject: 'Physics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'p20', name: 'Experimental Skills', subject: 'Physics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },

  // Chemistry
  { id: 'c1', name: 'Some Basic Concepts in Chemistry', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c2', name: 'Atomic Structure', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c3', name: 'Chemical Bonding & Molecular Structure', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c4', name: 'Chemical Thermodynamics', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c5', name: 'Solutions', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c6', name: 'Equilibrium', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c7', name: 'Redox Reactions & Electrochemistry', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c8', name: 'Chemical Kinetics', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c9', name: 'Classification of Elements & Periodicity', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c10', name: 'p-Block Elements', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c11', name: 'd- and f-Block Elements', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c12', name: 'Coordination Compounds', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c13', name: 'Organic Chemistry Principles & Techniques', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c14', name: 'Hydrocarbons', subject: 'Chemistry', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c15', name: 'Organic Compounds Containing Halogens', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c16', name: 'Organic Compounds Containing Oxygen', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c17', name: 'Organic Compounds Containing Nitrogen', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c18', name: 'Biomolecules', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'c19', name: 'Principles Related to Practical Chemistry', subject: 'Chemistry', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },

  // Mathematics
  { id: 'm1', name: 'Sets, Relations and Functions', subject: 'Mathematics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm2', name: 'Complex Numbers & Quadratic Equations', subject: 'Mathematics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm3', name: 'Matrices and Determinants', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm4', name: 'Permutations and Combinations', subject: 'Mathematics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm5', name: 'Sequences and Series', subject: 'Mathematics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm6', name: 'Limits, Continuity & Differentiability', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm7', name: 'Integral Calculus', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm8', name: 'Differential Equations', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm9', name: 'Coordinate Geometry', subject: 'Mathematics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm10', name: 'Three Dimensional Geometry', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm11', name: 'Vector Algebra', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm12', name: 'Statistics and Probability', subject: 'Mathematics', classYear: 12, solved: 0, goal: 250, unlockedMilestones: [] },
  { id: 'm13', name: 'Trigonometry', subject: 'Mathematics', classYear: 11, solved: 0, goal: 250, unlockedMilestones: [] }
];

// ===== MULTI-USER PROFILE SYSTEM (Dual-mode: Server + localStorage fallback) =====
let currentUser = null; // 'user1' or 'user2'
let saveDebounceTimer = null;
let useServerStorage = false; // auto-detected on boot

// Detect if the Python server API is available
async function detectStorageMode() {
  try {
    const res = await fetch('/api/users', { method: 'GET' });
    if (res.ok) {
      const data = await res.json();
      if (data && typeof data === 'object') {
        useServerStorage = true;
        console.log('📡 Storage mode: Server (shared across browsers)');
        return;
      }
    }
  } catch (e) {
    // Server not available
  }
  useServerStorage = false;
  console.log('💾 Storage mode: localStorage (per-browser)');
}

// Get localStorage key scoped to a user
function getStorageKey(userId) {
  return `questpulse_${userId || currentUser}_state`;
}

// Populate user selection popup with preview data
async function populateUserSelectPopup() {
  for (const [idx, userId] of ['user1', 'user2'].entries()) {
    const nameEl = document.getElementById(`${userId}-name`);
    const metaEl = document.getElementById(`${userId}-meta`);
    nameEl.textContent = `Profile ${idx + 1}`;

    try {
      let data = null;

      if (useServerStorage) {
        const res = await fetch(`/api/data/${userId}`);
        data = await res.json();
      } else {
        const saved = localStorage.getItem(getStorageKey(userId));
        if (saved) data = JSON.parse(saved);
      }

      if (data && data.totalCount !== undefined) {
        const total = data.totalCount || 0;
        const streak = data.streak || 0;
        const chaptersCount = (data.chapters || []).length;
        metaEl.textContent = `${total} Qs solved • ${streak}d streak • ${chaptersCount} chapters`;
      } else {
        metaEl.textContent = 'New — no data yet';
      }
    } catch (e) {
      metaEl.textContent = 'New — no data yet';
    }
  }
}

// Show user selection overlay
async function showUserSelectPopup() {
  await populateUserSelectPopup();
  const overlay = document.getElementById('user-select-overlay');
  overlay.classList.add('open');
}

// Hide user selection overlay
function hideUserSelectPopup() {
  const overlay = document.getElementById('user-select-overlay');
  overlay.classList.remove('open');
}

// Handle user selection — loads their data and boots the app
async function selectUser(userId) {
  currentUser = userId;
  hideUserSelectPopup();
  await loadUserData();
  populateChapterDropdown();
  updateUI();
}

// State initialization
let state = {
  totalCount: 0,
  dailyCount: 0,
  dailyGoal: 10,
  streak: 0,
  lastActiveDate: '',
  history: [],
  todayLog: {},
  badges: [],
  chapters: [...DEFAULT_CHAPTERS],
  activeChapterId: 'p1',
  settings: {
    sound: true,
    sparks: true,
    haptics: true
  }
};

// Web Audio API context placeholder
let audioCtx = null;

// Global Achievements configuration
const MILESTONES = [
  { id: 'first_click', name: 'First Spark', desc: 'Complete your first question', icon: '⚡', target: 1, type: 'total' },
  { id: 'bronze_solver', name: 'Bronze Solver', desc: 'Complete 10 questions total', icon: '🥉', target: 10, type: 'total' },
  { id: 'silver_solver', name: 'Silver Solver', desc: 'Complete 50 questions total', icon: '🥈', target: 50, type: 'total' },
  { id: 'gold_solver', name: 'Gold Solver', desc: 'Complete 150 questions total', icon: '🥇', target: 150, type: 'total' },
  { id: 'daily_five', name: 'High Five', desc: 'Complete 5 questions in one day', icon: '✋', target: 5, type: 'daily' },
  { id: 'daily_goal', name: 'Goal Crusher', desc: 'Reach your daily goal', icon: '🎯', target: 1, type: 'goal_met' },
  { id: 'streak_three', name: 'Fire Starter', desc: 'Maintain a 3-day streak', icon: '🌱', target: 3, type: 'streak' },
  { id: 'streak_seven', name: 'Unstoppable', desc: 'Maintain a 7-day streak', icon: '🔥', target: 7, type: 'streak' }
];

// Mastery Milestones definitions for chapters (percentage of the goal)
const MASTERY_MILESTONE_DEFINITIONS = [
  { key: 'm10', name: 'Initiate (10%)', desc: 'First steps into the chapter', icon: '💡', pct: 0.1 },
  { key: 'm25', name: 'Challenger (25%)', desc: 'Building conceptual confidence', icon: '📈', pct: 0.25 },
  { key: 'm50', name: 'Advanced (50%)', desc: 'Halfway to deep understanding', icon: '🚀', pct: 0.5 },
  { key: 'm80', name: 'Elite (80%)', desc: 'Mastering the tough variations', icon: '🏆', pct: 0.8 },
  { key: 'm100', name: 'Master (100%)', desc: 'Full curriculum mastery achieved', icon: '👑', pct: 1.0 }
];

// Elements selection
const pulseBtn = document.getElementById('pulse-btn');
const decrementBtn = document.getElementById('decrement-btn');
const streakCountEl = document.getElementById('streak-count');
const streakBadgeEl = document.getElementById('streak-badge');
const progressBarEl = document.getElementById('progress-bar');
const historyList = document.getElementById('history-list');
const historyEmpty = document.getElementById('history-empty');
const calendarContainer = document.getElementById('calendar-container');
const calendarDayModal = document.getElementById('calendar-day-modal');
const calendarModalClose = document.getElementById('calendar-modal-close');
const calendarModalTitle = document.getElementById('calendar-modal-title');
const calendarModalTotal = document.getElementById('calendar-modal-total');
const calendarModalList = document.getElementById('calendar-modal-list');
const masteryContainer = document.getElementById('mastery-container');
const badgesContainer = document.getElementById('badges-container');
const chapterDropdown = document.getElementById('chapter-dropdown');
const chapterDropdownSelected = document.getElementById('chapter-dropdown-selected');
const chapterDropdownList = document.getElementById('chapter-dropdown-list');
const selectedChapterNameEl = document.getElementById('selected-chapter-name');
const selectedChapterMetaEl = document.getElementById('selected-chapter-meta');
const dropdownOptionsContainer = document.getElementById('dropdown-options-container');
const dropdownTabBtns = document.querySelectorAll('#dropdown-tabs .dropdown-tab-btn');
const dropdownClassBtns = document.querySelectorAll('#dropdown-class-select .dropdown-class-btn');
const newChapterClassSelect = document.getElementById('new-chapter-class');
const editChapterClassSelect = document.getElementById('edit-chapter-class');
let activeDropdownSubject = 'Physics';
let activeDropdownClass = '11';

// Settings Elements
const settingsTrigger = document.getElementById('settings-trigger');
const settingsClose = document.getElementById('settings-close');
const settingsModal = document.getElementById('settings-modal');
const goalValEl = document.getElementById('goal-val');
const goalDecBtn = document.getElementById('goal-dec');
const goalIncBtn = document.getElementById('goal-inc');
const toggleSound = document.getElementById('toggle-sound');
const toggleSparks = document.getElementById('toggle-sparks');
const toggleHaptics = document.getElementById('toggle-haptics');
const resetDataBtn = document.getElementById('reset-data-btn');

// Manage Chapters Elements
const manageChaptersBtn = document.getElementById('manage-chapters-btn');
const manageChaptersClose = document.getElementById('manage-chapters-close');
const manageChaptersModal = document.getElementById('manage-chapters-modal');
const addChapterForm = document.getElementById('add-chapter-form');
const newChapterNameInput = document.getElementById('new-chapter-name');
const newChapterSubjectSelect = document.getElementById('new-chapter-subject');
const newChapterGoalInput = document.getElementById('new-chapter-goal');
const editChapterSection = document.getElementById('edit-chapter-section');
const editChapterForm = document.getElementById('edit-chapter-form');
const editChapterIdInput = document.getElementById('edit-chapter-id');
const editChapterNameInput = document.getElementById('edit-chapter-name');
const editChapterSubjectSelect = document.getElementById('edit-chapter-subject');
const editChapterGoalInput = document.getElementById('edit-chapter-goal');
const editChapterCancelBtn = document.getElementById('edit-chapter-cancel');
const manageChaptersList = document.getElementById('manage-chapters-list');
const filterTabBtns = document.querySelectorAll('.subject-filter-tabs .tab-btn');

let activeSubjectFilter = 'All';

// Canvas Setup
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Initialize Audio Context on user click
function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// SYNTHESIZER: Satisfying audio feedback triggers using Web Audio API
function playClickSound() {
  if (!state.settings.sound) return;
  initAudio();
  const now = audioCtx.currentTime;

  // Primary juicy bubble-pop sound
  const osc = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc.type = 'sine';
  // Fast frequency slide upwards makes it sound positive and clicky
  osc.frequency.setValueAtTime(160, now);
  osc.frequency.exponentialRampToValueAtTime(750, now + 0.06);

  // Fast decay envelope
  gainNode.gain.setValueAtTime(0.001, now);
  gainNode.gain.linearRampToValueAtTime(0.35, now + 0.008);
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

  osc.start(now);
  osc.stop(now + 0.1);

  // Secondary high-frequency transient click for extra tactile detail
  const clickOsc = audioCtx.createOscillator();
  const clickGain = audioCtx.createGain();
  clickOsc.connect(clickGain);
  clickGain.connect(audioCtx.destination);

  clickOsc.type = 'triangle';
  clickOsc.frequency.setValueAtTime(1400, now);

  clickGain.gain.setValueAtTime(0.001, now);
  clickGain.gain.linearRampToValueAtTime(0.08, now + 0.002);
  clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);

  clickOsc.start(now);
  clickOsc.stop(now + 0.02);
}

function playGoalSound() {
  if (!state.settings.sound) return;
  initAudio();
  const now = audioCtx.currentTime;

  // Play an uplifting, dreamy major chord arpeggio (C major 7th / 9th vibe)
  const notes = [
    261.63, // C4
    329.63, // E4
    392.00, // G4
    523.25, // C5
    659.25, // E5
    783.99  // G5
  ];

  notes.forEach((freq, index) => {
    const timeOffset = index * 0.09;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + timeOffset);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1200, now + timeOffset);
    filter.frequency.exponentialRampToValueAtTime(300, now + timeOffset + 0.5);

    gainNode.gain.setValueAtTime(0.001, now + timeOffset);
    gainNode.gain.linearRampToValueAtTime(0.25, now + timeOffset + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + timeOffset + 0.6);

    osc.start(now + timeOffset);
    osc.stop(now + timeOffset + 0.7);
  });
}

function playBadgeSound() {
  if (!state.settings.sound) return;
  initAudio();
  const now = audioCtx.currentTime;

  // Quick double chime (E5 -> A5)
  const chord = [587.33, 880.00]; // D5 -> A5
  chord.forEach((freq, idx) => {
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + (idx * 0.08));

    gainNode.gain.setValueAtTime(0.001, now + (idx * 0.08));
    gainNode.gain.linearRampToValueAtTime(0.2, now + (idx * 0.08) + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + (idx * 0.08) + 0.8);

    osc.start(now + (idx * 0.08));
    osc.stop(now + (idx * 0.08) + 0.9);
  });
}

// PHYSICS PARTICLE SYSTEM (Canvas Confetti / Sparks)
class Particle {
  constructor(x, y, isBigBurst = false) {
    this.x = x;
    this.y = y;
    this.isBigBurst = isBigBurst;

    const angle = Math.random() * Math.PI * 2;
    const speed = isBigBurst
      ? (Math.random() * 8 + 3) // Faster burst for goals
      : (Math.random() * 5 + 1.5); // Standard click explosion

    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - (isBigBurst ? 3 : 1); // Upward bias

    this.radius = Math.random() * 4 + 2;
    if (isBigBurst && Math.random() > 0.6) {
      this.radius += Math.random() * 4;
    }

    // Aesthetic color theme (pinks, purples, golds, emeralds, cyans)
    const colors = [
      '#a78bfa', // violet
      '#60a5fa', // blue
      '#34d399', // emerald
      '#f59e0b', // gold
      '#ec4899', // pink
      '#22d3ee'  // cyan
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];

    this.alpha = 1;
    this.decay = Math.random() * 0.015 + (isBigBurst ? 0.008 : 0.018);
    this.gravity = 0.12;
    this.drag = 0.96;

    this.shape = Math.random() > 0.4 ? 'circle' : 'rect';
    this.rotation = Math.random() * Math.PI;
    this.rotationSpeed = (Math.random() - 0.5) * 0.2;
  }

  update() {
    this.vx *= this.drag;
    this.vy *= this.drag;
    this.vy += this.gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.rotationSpeed;
    this.alpha -= this.decay;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.color;

    // Add glow effect to big celebrations
    if (this.isBigBurst) {
      ctx.shadowBlur = 6;
      ctx.shadowColor = this.color;
    }

    if (this.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-this.radius, -this.radius, this.radius * 2, this.radius * 1.5);
    }
    ctx.restore();
  }
}

function spawnParticles(x, y, isBigBurst = false) {
  if (!state.settings.sparks) return;
  const count = isBigBurst ? 120 : 18;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(x, y, isBigBurst));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.update();
    p.draw();
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  }
  requestAnimationFrame(animateParticles);
}
requestAnimationFrame(animateParticles);

// Date Validation: Checking for Streak & Resetting daily stats
function checkNewDay() {
  const todayStr = getTodayString();

  if (state.lastActiveDate !== todayStr) {
    if (state.lastActiveDate !== '') {
      // Check if they met yesterday's goal
      const yesterdayGoalMet = state.dailyCount >= state.dailyGoal;

      // Store yesterday's work in history
      const historyEntry = {
        date: state.lastActiveDate,
        count: state.dailyCount,
        goalCompleted: yesterdayGoalMet,
        chapters: state.todayLog || {}
      };

      // Keep only last 30 entries in history
      state.history.unshift(historyEntry);
      if (state.history.length > 30) {
        state.history.pop();
      }

      // Reset todayLog for the new day
      state.todayLog = {};

      // Check if streak survives:
      const dateDiff = getDateDifferenceInDays(state.lastActiveDate, todayStr);
      if (dateDiff === 1 && yesterdayGoalMet) {
        // Streak stays active
      } else {
        // Streak is broken
        state.streak = 0;
        showToast('🔥 Streak broken! Start fresh today!', 'ℹ️');
      }
    }

    // Reset daily counters
    state.dailyCount = 0;
    state.lastActiveDate = todayStr;
    saveToLocalStorage();
  }
}

function getTodayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getDateDifferenceInDays(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1 + 'T00:00:00');
  const d2 = new Date(dateStr2 + 'T00:00:00');
  const timeDiff = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
}

// ===== DUAL-MODE PERSISTENCE =====
// saveToLocalStorage is called throughout the app — it auto-routes to the right storage
function saveToLocalStorage() {
  if (!currentUser) return;
  clearTimeout(saveDebounceTimer);
  saveDebounceTimer = setTimeout(() => {
    if (useServerStorage) {
      saveToServer();
    } else {
      saveToLocal();
    }
  }, 300);
}

// Save to localStorage (per-user key)
function saveToLocal() {
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

// Save to server JSON file
async function saveToServer() {
  if (!currentUser) return;
  try {
    await fetch(`/api/data/${currentUser}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(state)
    });
  } catch (e) {
    console.error('Failed to save to server, falling back to localStorage:', e);
    saveToLocal(); // fallback
  }
}

// Load user data (auto-selects server or localStorage)
async function loadUserData() {
  if (!currentUser) return;

  let parsed = null;

  if (useServerStorage) {
    try {
      const res = await fetch(`/api/data/${currentUser}`);
      parsed = await res.json();
    } catch (e) {
      console.error('Server load failed, trying localStorage:', e);
    }
  }

  // Fallback to localStorage if server didn't return data
  if (!parsed) {
    const saved = localStorage.getItem(getStorageKey());
    if (saved) {
      try { parsed = JSON.parse(saved); } catch (e) { /* ignore */ }
    }
  }

  if (parsed) {
    state = {
      totalCount: parsed.totalCount || 0,
      dailyCount: parsed.dailyCount || 0,
      dailyGoal: parsed.dailyGoal || 10,
      streak: parsed.streak || 0,
      lastActiveDate: parsed.lastActiveDate || '',
      history: parsed.history || [],
      todayLog: parsed.todayLog || {},
      badges: parsed.badges || [],
      chapters: (parsed.chapters && parsed.chapters.length > 0) ? parsed.chapters : [...DEFAULT_CHAPTERS],
      activeChapterId: parsed.activeChapterId || 'p1',
      settings: {
        sound: parsed.settings?.sound ?? true,
        sparks: parsed.settings?.sparks ?? true,
        haptics: parsed.settings?.haptics ?? true
      }
    };

    state.chapters.forEach(c => {
      if (!c.unlockedMilestones) c.unlockedMilestones = [];
      if (!c.classYear) {
        const defaultCh = DEFAULT_CHAPTERS.find(dc => dc.id === c.id);
        c.classYear = defaultCh ? defaultCh.classYear : 11;
      }
    });
  }

  checkNewDay();
}

// Legacy alias
function loadFromLocalStorage() {
  // No-op: loading now happens via loadUserData in selectUser
}

// Populate Custom Chapter Dropdown filtered by Subject and Class Year (+1/+2)
function populateChapterDropdown() {
  if (!dropdownOptionsContainer) return;
  const currentSelectedId = state.activeChapterId;
  const currentCh = state.chapters.find(c => c.id === currentSelectedId);

  // Update selected display
  if (currentCh && selectedChapterNameEl && selectedChapterMetaEl) {
    selectedChapterNameEl.textContent = currentCh.name;
    selectedChapterMetaEl.textContent = `${currentCh.solved} / ${currentCh.goal} Qs`;
  }

  dropdownOptionsContainer.innerHTML = '';

  // Filter chapters by active subject and class (+1/+2)
  const filteredChapters = state.chapters.filter(ch =>
    ch.subject === activeDropdownSubject &&
    (ch.classYear === parseInt(activeDropdownClass) || !ch.classYear)
  );

  filteredChapters.forEach(ch => {
    const progressPct = Math.min(100, Math.round((ch.solved / ch.goal) * 100));
    const opt = document.createElement('div');
    opt.className = `dropdown-option ${ch.id === currentSelectedId ? 'active' : ''}`;
    opt.innerHTML = `
      <div class="dropdown-option-header">
        <span class="dropdown-option-name" title="${ch.name}">${ch.name}</span>
        <span class="dropdown-option-count">${ch.solved}/${ch.goal}</span>
      </div>
      <div class="dropdown-option-progress-track">
        <div class="dropdown-option-progress-fill" style="width: ${progressPct}%"></div>
      </div>
    `;
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      state.activeChapterId = ch.id;
      saveToLocalStorage();
      updateUI();
      populateChapterDropdown();
      chapterDropdown.classList.remove('open');
    });
    dropdownOptionsContainer.appendChild(opt);
  });
}


// UI Refresh
function updateUI() {
  const ch = state.chapters.find(c => c.id === state.activeChapterId);
  if (!ch) return;

  // Update progress circle metrics for the active chapter
  const chapterSolvedCountEl = document.getElementById('chapter-solved-count');
  const chapterGoalLabelEl = document.getElementById('chapter-goal-label');
  const progressChapterSubjectEl = document.getElementById('progress-chapter-subject');

  if (chapterSolvedCountEl) chapterSolvedCountEl.textContent = ch.solved;
  if (chapterGoalLabelEl) chapterGoalLabelEl.textContent = `Goal: ${ch.goal}`;
  if (progressChapterSubjectEl) progressChapterSubjectEl.textContent = ch.subject.toUpperCase();

  // Calculate Active Chapter progress ratio
  const progressRatio = ch.solved / ch.goal;

  // Draw progress bar circle (596.902 is stroke-dasharray for radius 95)
  const circ = 596.9;
  const offset = progressRatio >= 1 ? 0 : circ - (progressRatio * circ);
  progressBarEl.style.strokeDashoffset = offset;

  // Streak update
  streakCountEl.textContent = state.streak;
  if (state.streak > 0) {
    streakBadgeEl.classList.add('active');
  } else {
    streakBadgeEl.classList.remove('active');
  }

  // Update Stats Cards
  const statTotalEl = document.getElementById('stat-total');
  const statTodayEl = document.getElementById('stat-today');

  if (statTotalEl) statTotalEl.textContent = state.totalCount;
  if (statTodayEl) statTodayEl.textContent = `${state.dailyCount}/${state.dailyGoal}`;

  // Update Settings Inputs
  goalValEl.textContent = state.dailyGoal;
  toggleSound.checked = state.settings.sound;
  toggleSparks.checked = state.settings.sparks;
  toggleHaptics.checked = state.settings.haptics;

  // Render list components
  renderMasteryMilestones();
  renderBadges();
  renderCalendar();
  renderHistory();
}

// Render Chapter-Specific Mastery Milestones
function renderMasteryMilestones() {
  if (!masteryContainer) return;
  masteryContainer.innerHTML = '';

  const ch = state.chapters.find(c => c.id === state.activeChapterId);
  if (!ch) {
    masteryContainer.innerHTML = '<div class="history-empty">Select or add a chapter to begin.</div>';
    return;
  }

  const solved = ch.solved;
  const goal = ch.goal;
  let prevThreshold = 0;

  MASTERY_MILESTONE_DEFINITIONS.forEach(def => {
    const threshold = Math.max(1, Math.round(goal * def.pct));
    const isUnlocked = solved >= threshold;

    // Auto-award chapter milestones when crossed
    if (isUnlocked && !ch.unlockedMilestones.includes(def.key)) {
      ch.unlockedMilestones.push(def.key);
      saveToLocalStorage();

      // Visual feedback timing offset
      setTimeout(() => {
        playBadgeSound();
        showToast(`${ch.name}: Unlocked ${def.name}! ${def.icon}`, '🏆');

        // Spawn radial confetti around the plus button
        const rect = pulseBtn.getBoundingClientRect();
        spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
      }, 350);
    }

    // Relock milestones if progress drops below threshold (due to decrement)
    if (!isUnlocked && ch.unlockedMilestones.includes(def.key)) {
      ch.unlockedMilestones = ch.unlockedMilestones.filter(k => k !== def.key);
      saveToLocalStorage();
    }

    // Calculate milestone local progress percentage
    let localProgress = 0;
    if (isUnlocked) {
      localProgress = 100;
    } else {
      const range = threshold - prevThreshold;
      const progressInRange = solved - prevThreshold;
      localProgress = Math.max(0, Math.min(100, Math.round((progressInRange / range) * 100)));
    }

    const card = document.createElement('div');
    card.className = `mastery-milestone-card ${isUnlocked ? 'unlocked' : 'locked'}`;
    card.title = def.desc;
    card.innerHTML = `
      <div class="milestone-icon">${isUnlocked ? def.icon : '🔒'}</div>
      <div class="milestone-info">
        <div class="milestone-header">
          <span class="milestone-name">${def.name}</span>
          <span class="milestone-status">${isUnlocked ? 'Completed' : `${solved}/${threshold} Qs`}</span>
        </div>
        <div class="milestone-progress-bar">
          <div class="milestone-progress-fill" style="width: ${localProgress}%"></div>
        </div>
      </div>
    `;

    masteryContainer.appendChild(card);
    prevThreshold = threshold;
  });
}

// Render Global Achievements
function renderBadges() {
  if (!badgesContainer) return;
  badgesContainer.innerHTML = '';

  MILESTONES.forEach(badge => {
    let isUnlocked = false;

    // Evaluate milestone logic
    if (badge.type === 'total' && state.totalCount >= badge.target) {
      isUnlocked = true;
    } else if (badge.type === 'daily' && state.dailyCount >= badge.target) {
      isUnlocked = true;
    } else if (badge.type === 'streak' && state.streak >= badge.target) {
      isUnlocked = true;
    } else if (badge.type === 'goal_met') {
      const metToday = state.dailyCount >= state.dailyGoal;
      const metInHistory = state.history.some(h => h.goalCompleted);
      isUnlocked = metToday || metInHistory;
    }

    // Unlock state in memory & trigger notification
    if (isUnlocked && !state.badges.includes(badge.id)) {
      state.badges.push(badge.id);
      saveToLocalStorage();
      setTimeout(() => {
        playBadgeSound();
        showToast(`Unlocked Achievement: ${badge.name}! ${badge.icon}`, '🏆');
        const rect = pulseBtn.getBoundingClientRect();
        spawnParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, true);
      }, 600);
    }

    const card = document.createElement('div');
    card.className = `badge-item ${isUnlocked ? 'unlocked' : ''}`;
    card.title = badge.desc;
    card.innerHTML = `
      <div class="badge-icon-wrapper">${isUnlocked ? badge.icon : '🔒'}</div>
      <span class="badge-name">${badge.name}</span>
    `;
    badgesContainer.appendChild(card);
  });
}

// Render Calendar Tab / Grid
function renderCalendar() {
  if (!calendarContainer) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const headerHtml = `
    <div class="calendar-header">
      <span>${monthNames[month]} ${year}</span>
    </div>
  `;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let gridHtml = '<div class="calendar-grid">';
  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  dayNames.forEach(d => {
    gridHtml += `<div class="calendar-day-header">${d}</div>`;
  });

  for (let i = 0; i < firstDay; i++) {
    gridHtml += `<div class="calendar-day empty"></div>`;
  }

  const activityMap = {};
  state.history.forEach(h => {
    activityMap[h.date] = h;
  });

  const todayStr = getTodayString();
  activityMap[todayStr] = {
    date: todayStr,
    count: state.dailyCount,
    chapters: state.todayLog || {}
  };

  for (let i = 1; i <= daysInMonth; i++) {
    const dStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const activity = activityMap[dStr];
    const count = activity ? activity.count : 0;
    const hasAct = count > 0;
    const isToday = dStr === todayStr;

    gridHtml += `
      <div class="calendar-day ${hasAct ? 'has-activity' : ''} ${isToday ? 'today' : ''}" data-date="${dStr}">
        <span class="calendar-date">${i}</span>
        <span class="calendar-score ${hasAct ? '' : 'zero'}">${count > 0 ? count : '-'}</span>
      </div>
    `;
  }

  gridHtml += '</div>';
  calendarContainer.innerHTML = headerHtml + gridHtml;

  const days = calendarContainer.querySelectorAll('.calendar-day');
  days.forEach(day => {
    day.addEventListener('click', () => {
      const dStr = day.getAttribute('data-date');
      const activity = activityMap[dStr];
      if (!activity || activity.count <= 0) return;

      if (calendarDayModal) {
        calendarModalTitle.textContent = `Activity on ${dStr}`;
        calendarModalTotal.textContent = `${activity.count} Qs`;
        calendarModalList.innerHTML = '';

        if (!activity.chapters || Object.keys(activity.chapters).length === 0) {
          // Fallback for legacy activity before chapter-level tracking was added
          calendarModalList.innerHTML = `
            <div class="calendar-detail-item">
              <span class="cal-detail-name">General Practice</span>
              <span class="cal-detail-score">${activity.count} Qs</span>
            </div>
          `;
        } else {
          Object.keys(activity.chapters).forEach(chId => {
            const cnt = activity.chapters[chId];
            if (cnt <= 0) return;
            const chap = state.chapters.find(c => c.id === chId);
            const name = chap ? chap.name : 'Unknown';
            calendarModalList.innerHTML += `
              <div class="calendar-detail-item">
                <span class="cal-detail-name">${name}</span>
                <span class="cal-detail-score">${cnt} Qs</span>
              </div>
            `;
          });
        }

        calendarDayModal.classList.add('open');
      }
    });
  });
}

// Render History
function renderHistory() {
  if (!historyList) return;

  const items = historyList.querySelectorAll('.history-item');
  items.forEach(el => el.remove());

  if (state.history.length === 0) {
    historyEmpty.style.display = 'block';
    return;
  }
  historyEmpty.style.display = 'none';

  state.history.forEach(item => {
    const entry = document.createElement('div');
    entry.className = `history-item ${item.goalCompleted ? 'goal-completed' : ''}`;

    const dateObj = new Date(item.date + 'T00:00:00');
    const formattedDate = dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric', weekday: 'short' });

    entry.innerHTML = `
      <span class="history-date">${formattedDate}</span>
      <div class="history-count-badge">
        <span>${item.count}</span>
        ${item.goalCompleted ? '<span>✓</span>' : ''}
      </div>
    `;
    historyList.appendChild(entry);
  });
}

// Toast Notification System
function showToast(message, icon = '✨') {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const toastIcon = toast.querySelector('.toast-icon');

  toastIcon.textContent = icon;
  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Satisfying floating +1 animator
function createFloatingPlus(x, y) {
  const floating = document.createElement('span');
  floating.className = 'floating-plus';
  floating.textContent = '+1';
  floating.style.left = `${x}px`;
  floating.style.top = `${y}px`;

  const randomDriftX = (Math.random() - 0.5) * 30;
  floating.style.setProperty('--drift-x', `${randomDriftX}px`);

  document.body.appendChild(floating);

  setTimeout(() => {
    floating.remove();
  }, 850);
}

// Trigger study progress increment on click
function handleIncrement(e) {
  let clickX = e.clientX;
  let clickY = e.clientY;

  if (!clickX || !clickY) {
    const rect = pulseBtn.getBoundingClientRect();
    clickX = rect.left + rect.width / 2;
    clickY = rect.top + rect.height / 2;
  }

  // Active auditory feedback (synthetic bubble pop)
  playClickSound();

  // Active visual feedback (confetti particles)
  spawnParticles(clickX, clickY, false);

  // Floating text +1
  createFloatingPlus(clickX - 15, clickY - 20);

  // Active CSS button rebound animation
  pulseBtn.classList.remove('click-trigger', 'bounce');
  void pulseBtn.offsetWidth; // Trigger reflow
  pulseBtn.classList.add('click-trigger', 'bounce');

  // Active Haptic Simulation
  if (state.settings.haptics) {
    const container = document.querySelector('.app-container');
    container.classList.remove('haptic-shake', 'haptic-flash');
    void container.offsetWidth; // Trigger reflow
    container.classList.add('haptic-shake', 'haptic-flash');
    if (navigator.vibrate) {
      navigator.vibrate(18);
    }
  }

  // Update State counters
  state.totalCount++;
  state.dailyCount++;

  // Update Active Chapter count
  const ch = state.chapters.find(c => c.id === state.activeChapterId);
  if (ch) {
    ch.solved++;
  }

  // Update today's calendar log
  if (!state.todayLog) state.todayLog = {};
  state.todayLog[state.activeChapterId] = (state.todayLog[state.activeChapterId] || 0) + 1;

  // If user reaches daily goal for the first time today
  if (state.dailyCount === state.dailyGoal) {
    state.streak++;
    saveToLocalStorage();

    // Celebration effects
    setTimeout(() => {
      playGoalSound();
      spawnParticles(clickX, clickY - 50, true);
      showToast(`Daily Goal Hit! 🔥 Streak: ${state.streak} Days!`, '🎯');
      updateUI();
      populateChapterDropdown();
    }, 280);
  } else {
    saveToLocalStorage();
    updateUI();
    populateChapterDropdown();
  }
}

// Trigger study progress decrement on click (revert accidental clicks)
function handleDecrement(e) {
  e.stopPropagation();

  const ch = state.chapters.find(c => c.id === state.activeChapterId);
  if (!ch) return;

  // Do not decrement below 0
  if (ch.solved <= 0) {
    showToast("Progress is already at 0!", "⚠️");
    return;
  }

  // Update counters
  ch.solved = Math.max(0, ch.solved - 1);
  state.totalCount = Math.max(0, state.totalCount - 1);
  state.dailyCount = Math.max(0, state.dailyCount - 1);

  // Update today's calendar log
  if (state.todayLog && state.todayLog[state.activeChapterId] > 0) {
    state.todayLog[state.activeChapterId]--;
  }

  // Play bubble pop click sound
  playClickSound();

  // CSS bounce feedback on decrement button
  const decBtn = document.getElementById('decrement-btn');
  if (decBtn) {
    decBtn.classList.remove('click-trigger');
    void decBtn.offsetWidth; // Trigger reflow
    decBtn.classList.add('click-trigger');
  }

  saveToLocalStorage();
  updateUI();
  populateChapterDropdown();

  showToast("Reverted: Solved count decreased.", "➖");
}

// Render Chapters List inside Management Modal
function renderManageChaptersList() {
  if (!manageChaptersList) return;
  manageChaptersList.innerHTML = '';

  let filtered = state.chapters;
  if (activeSubjectFilter !== 'All') {
    filtered = state.chapters.filter(ch => ch.subject === activeSubjectFilter);
  }

  if (filtered.length === 0) {
    manageChaptersList.innerHTML = '<div class="history-empty">No chapters found under this subject.</div>';
    return;
  }

  filtered.forEach(ch => {
    const item = document.createElement('div');
    item.className = 'manage-chapter-item';
    item.innerHTML = `
      <div class="manage-chapter-info">
        <span class="manage-chapter-name">${ch.name}</span>
        <span class="manage-chapter-meta">${ch.subject} • Target: ${ch.goal} Qs • Solved: ${ch.solved}</span>
      </div>
      <div class="manage-chapter-actions">
        <button class="action-icon-btn edit" data-id="${ch.id}" title="Edit Chapter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="action-icon-btn delete" data-id="${ch.id}" title="Delete Chapter">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
      </div>
    `;

    // Add item click actions
    item.querySelector('.edit').addEventListener('click', () => startEditChapter(ch.id));
    item.querySelector('.delete').addEventListener('click', () => deleteChapter(ch.id));

    manageChaptersList.appendChild(item);
  });
}

// Begin Edit Chapter Mode
function startEditChapter(id) {
  const ch = state.chapters.find(c => c.id === id);
  if (!ch) return;

  editChapterIdInput.value = ch.id;
  editChapterNameInput.value = ch.name;
  editChapterSubjectSelect.value = ch.subject;
  if (editChapterClassSelect) {
    editChapterClassSelect.value = ch.classYear || 11;
  }
  editChapterGoalInput.value = ch.goal;

  editChapterSection.style.display = 'block';
  editChapterSection.scrollIntoView({ behavior: 'smooth' });
}

// Delete Chapter Action
function deleteChapter(id) {
  const ch = state.chapters.find(c => c.id === id);
  if (!ch) return;

  // Enforce at least one chapter remaining
  if (state.chapters.length <= 1) {
    alert('Syllabus must have at least one chapter.');
    return;
  }

  if (confirm(`Are you sure you want to delete the chapter "${ch.name}"? This will clear all its solved progress data.`)) {
    state.chapters = state.chapters.filter(c => c.id !== id);

    // Re-assign active chapter if we deleted it
    if (state.activeChapterId === id) {
      state.activeChapterId = state.chapters[0].id;
    }

    saveToLocalStorage();
    populateChapterDropdown();
    renderManageChaptersList();

    if (editChapterIdInput.value === id) {
      editChapterSection.style.display = 'none';
    }

    updateUI();
    showToast('Chapter deleted.', '🗑️');
  }
}

// Setup Event Listeners
pulseBtn.addEventListener('click', handleIncrement);
if (decrementBtn) {
  decrementBtn.addEventListener('click', handleDecrement);
}

// Custom Dropdown Open/Close Event
chapterDropdownSelected.addEventListener('click', (e) => {
  e.stopPropagation();
  chapterDropdown.classList.toggle('open');
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
  if (!chapterDropdown.contains(e.target)) {
    chapterDropdown.classList.remove('open');
  }
});

if (calendarModalClose) {
  calendarModalClose.addEventListener('click', () => {
    calendarDayModal.classList.remove('open');
  });
  calendarDayModal.addEventListener('click', (e) => {
    if (e.target === calendarDayModal) calendarDayModal.classList.remove('open');
  });
}

// Dropdown Tabs click events
dropdownTabBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownTabBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeDropdownSubject = e.target.getAttribute('data-subject');
    populateChapterDropdown();
    playClickSound(); // optional small satisfying sound
  });
});

// Dropdown Class click events (+1 vs +2)
dropdownClassBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownClassBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeDropdownClass = e.target.getAttribute('data-class');
    populateChapterDropdown();
    playClickSound();
  });
});

// Settings Modals Handlers
settingsTrigger.addEventListener('click', () => {
  initAudio();
  settingsModal.classList.add('open');
});

settingsClose.addEventListener('click', () => {
  settingsModal.classList.remove('open');
});

settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) {
    settingsModal.classList.remove('open');
  }
});

// Goal adjustment controls
goalDecBtn.addEventListener('click', () => {
  if (state.dailyGoal > 1) {
    state.dailyGoal--;
    saveToLocalStorage();
    updateUI();
    playClickSound();
  }
});

goalIncBtn.addEventListener('click', () => {
  if (state.dailyGoal < 100) {
    state.dailyGoal++;
    saveToLocalStorage();
    updateUI();
    playClickSound();
  }
});

// Settings Toggles
toggleSound.addEventListener('change', (e) => {
  state.settings.sound = e.target.checked;
  saveToLocalStorage();
  if (state.settings.sound) playClickSound();
});

toggleSparks.addEventListener('change', (e) => {
  state.settings.sparks = e.target.checked;
  saveToLocalStorage();
});

toggleHaptics.addEventListener('change', (e) => {
  state.settings.haptics = e.target.checked;
  saveToLocalStorage();
  if (state.settings.haptics && navigator.vibrate) navigator.vibrate([30]);
});

// Reset progress data
resetDataBtn.addEventListener('click', () => {
  if (confirm('Are you absolutely sure you want to delete all daily targets, streaks, history, and achievements? All chapters will have progress reset back to 0.')) {
    state = {
      totalCount: 0,
      dailyCount: 0,
      dailyGoal: 10,
      streak: 0,
      lastActiveDate: getTodayString(),
      history: [],
      badges: [],
      chapters: DEFAULT_CHAPTERS.map(ch => ({
        ...ch,
        solved: 0,
        goal: 250,
        unlockedMilestones: []
      })),
      activeChapterId: DEFAULT_CHAPTERS[0].id,
      settings: {
        sound: true,
        sparks: true,
        haptics: true
      }
    };
    saveToLocalStorage();
    populateChapterDropdown();
    updateUI();
    settingsModal.classList.remove('open');
    showToast('All progress reset.', '🗑️');
  }
});

// Manage Chapters Modal Actions
manageChaptersBtn.addEventListener('click', () => {
  initAudio();
  manageChaptersModal.classList.add('open');
  activeSubjectFilter = 'All';
  filterTabBtns.forEach(btn => {
    if (btn.getAttribute('data-subject') === 'All') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderManageChaptersList();
});

manageChaptersClose.addEventListener('click', () => {
  manageChaptersModal.classList.remove('open');
  editChapterSection.style.display = 'none';
});

manageChaptersModal.addEventListener('click', (e) => {
  if (e.target === manageChaptersModal) {
    manageChaptersModal.classList.remove('open');
    editChapterSection.style.display = 'none';
  }
});

// Tab filters clicks
filterTabBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterTabBtns.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeSubjectFilter = e.target.getAttribute('data-subject');
    renderManageChaptersList();
    playClickSound();
  });
});

// Add Chapter Form Submit
addChapterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = newChapterNameInput.value.trim();
  const subject = newChapterSubjectSelect.value;
  const classYearVal = newChapterClassSelect ? parseInt(newChapterClassSelect.value) : 11;
  const goal = parseInt(newChapterGoalInput.value) || 250;

  if (!name) return;

  const newId = 'ch_' + Date.now();
  state.chapters.push({
    id: newId,
    name,
    subject,
    classYear: classYearVal,
    solved: 0,
    goal,
    unlockedMilestones: []
  });

  saveToLocalStorage();

  // Auto-activate the newly added chapter
  state.activeChapterId = newId;
  saveToLocalStorage();

  newChapterNameInput.value = '';
  newChapterGoalInput.value = '250';

  populateChapterDropdown();
  renderManageChaptersList();
  updateUI();

  showToast('Chapter added successfully!', '➕');
});

// Edit Chapter Form Submit
editChapterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const id = editChapterIdInput.value;
  const ch = state.chapters.find(c => c.id === id);
  if (!ch) return;

  ch.name = editChapterNameInput.value.trim();
  ch.subject = editChapterSubjectSelect.value;
  if (editChapterClassSelect) {
    ch.classYear = parseInt(editChapterClassSelect.value);
  }
  const oldGoal = ch.goal;
  ch.goal = parseInt(editChapterGoalInput.value) || 250;

  // Re-verify milestones if goal was reduced
  if (ch.goal !== oldGoal) {
    ch.unlockedMilestones = []; // will be recalculated on render
  }

  saveToLocalStorage();
  populateChapterDropdown();
  renderManageChaptersList();
  updateUI();

  editChapterSection.style.display = 'none';
  showToast('Chapter updated successfully!', '✏️');
});

// Edit Chapter Cancel
editChapterCancelBtn.addEventListener('click', () => {
  editChapterSection.style.display = 'none';
});

// ===== USER SELECTION POPUP EVENT HANDLERS =====
document.getElementById('user-btn-1').addEventListener('click', () => selectUser('user1'));
document.getElementById('user-btn-2').addEventListener('click', () => selectUser('user2'));

// Switch User button in header
document.getElementById('switch-user-btn').addEventListener('click', () => {
  showUserSelectPopup();
});

// ===== INITIAL BOOT =====
// Detect storage mode first, then show user selection
(async function boot() {
  await detectStorageMode();
  showUserSelectPopup();
})();
