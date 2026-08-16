/**
 * تمريني – Smart Gym Tracker Pro (Guided Flow, Rest Controls & Form Contrast)
 */

const I18N = {
  ar: {
    app_title: 'تمريني', exercises_label: 'تمرين', sets_label: 'مجموعة', time_label: 'الوقت',
    cat_all: 'الكل', cat_chest: 'صدر', cat_back: 'ظهر', cat_shoulders: 'أكتاف', cat_arms: 'ذراع', cat_legs: 'أرجل', cat_core: 'بطن', cat_cardio: 'كارديو',
    nav_today: 'اليوم', nav_plan: 'المدرب الذكي', nav_exercises: 'التمارين', nav_history: 'السجل',
    edit_name: 'تعديل', delete_user: 'حذف',
    welcome_empty: 'مرحباً {user}! لم تسجل تمارين اليوم بعد.<br>اضغط على <strong>+</strong> أو افتح <strong>المدرب الذكي</strong> لتحميل جدولك!',
    search_placeholder: 'ابحث عن تمرين...'
  },
  en: {
    app_title: 'Tamriny', exercises_label: 'Exercises', sets_label: 'Sets', time_label: 'Time',
    cat_all: 'All', cat_chest: 'Chest', cat_back: 'Back', cat_shoulders: 'Shoulders', cat_arms: 'Arms', cat_legs: 'Legs', cat_core: 'Core', cat_cardio: 'Cardio',
    nav_today: 'Today', nav_plan: 'Smart Coach', nav_exercises: 'Exercises', nav_history: 'History',
    edit_name: 'Edit', delete_user: 'Delete',
    welcome_empty: 'Welcome {user}! No workouts logged today.<br>Tap <strong>+</strong> or open <strong>Smart Coach</strong> to load your plan!',
    search_placeholder: 'Search exercise...'
  }
};

const EXERCISES = [
  // صدر
  { id:'bench-press',         name_ar:'بنش بريس مستوي بالبار',     name_en:'Barbell Flat Bench Press',      category:'chest', icon:'🏋️', alts:['db-flat-press', 'chest-press-machine', 'dips-chest'] },
  { id:'incline-barbell',     name_ar:'بنش مائل عالي بالبار',       name_en:'Incline Barbell Bench Press',   category:'chest', icon:'🏋️', alts:['db-incline-press', 'chest-fly-incline'] },
  { id:'decline-barbell',     name_ar:'بنش مائل هابط بالبار',       name_en:'Decline Barbell Bench Press',   category:'chest', icon:'🏋️', alts:['dips-chest', 'cable-crossover-low'] },
  { id:'db-flat-press',       name_ar:'تجميع بالدامبلز مستوي',     name_en:'Flat Dumbbell Press',           category:'chest', icon:'🏋️', alts:['bench-press', 'chest-press-machine'] },
  { id:'db-incline-press',    name_ar:'تجميع بالدامبلز مائل عالي',   name_en:'Incline Dumbbell Press',        category:'chest', icon:'🏋️', alts:['incline-barbell', 'chest-fly-incline'] },
  { id:'chest-fly-db',        name_ar:'تفتيح دامبلز مستوي (فلاي)',  name_en:'Flat Dumbbell Fly',             category:'chest', icon:'🦋', alts:['pec-deck', 'cable-crossover-high'] },
  { id:'chest-fly-incline',   name_ar:'تفتيح دامبلز مائل عالي',     name_en:'Incline Dumbbell Fly',          category:'chest', icon:'🦋', alts:['db-incline-press', 'pec-deck'] },
  { id:'pec-deck',            name_ar:'فراشة جهاز (بيك ديك)',      name_en:'Pec Deck Machine Fly',          category:'chest', icon:'🦋', alts:['chest-fly-db', 'cable-crossover-high'] },
  { id:'cable-crossover-high',name_ar:'كروس أوفر كيبل من أعلى',     name_en:'High-to-Low Cable Fly',         category:'chest', icon:'💪', alts:['pec-deck', 'chest-fly-db'] },
  { id:'cable-crossover-low', name_ar:'كروس أوفر كيبل من أسفل',    name_en:'Low-to-High Cable Fly',         category:'chest', icon:'💪', alts:['decline-barbell', 'dips-chest'] },
  { id:'chest-press-machine', name_ar:'جهاز ضغط الصدر جالساً',     name_en:'Seated Machine Chest Press',    category:'chest', icon:'🤖', alts:['bench-press', 'db-flat-press'] },
  { id:'dips-chest',          name_ar:'متوازي بالتركيز على الصدر',  name_en:'Chest Focused Dips',            category:'chest', icon:'🤸', alts:['decline-barbell', 'cable-crossover-low'] },
  // ظهر
  { id:'deadlift',            name_ar:'ديدليفت بار حر',            name_en:'Conventional Deadlift',         category:'back', icon:'🏋️', alts:['back-extension', 'barbell-row'] },
  { id:'lat-pulldown-wide',   name_ar:'سحب علوي أمامي عريض',       name_en:'Wide-Grip Lat Pulldown',        category:'back', icon:'🔽', alts:['pullup-weighted', 'lat-pulldown-close'] },
  { id:'lat-pulldown-close',  name_ar:'سحب علوي قبضة ضيقة (V-Bar)',name_en:'Close-Grip V-Bar Pulldown',     category:'back', icon:'🔽', alts:['seated-cable-row', 'lat-pulldown-wide'] },
  { id:'barbell-row',         name_ar:'تجديف بالبار (بنت أوفر رو)', name_en:'Bent-Over Barbell Row',         category:'back', icon:'🏋️', alts:['t-bar-row', 'db-single-row', 'seated-cable-row'] },
  { id:'db-single-row',       name_ar:'سحب دمبل فردي (منشار)',      name_en:'One-Arm Dumbbell Row',          category:'back', icon:'💪', alts:['barbell-row', 't-bar-row'] },
  { id:'seated-cable-row',    name_ar:'سحب أرضي كيبل (سيتد رو)',    name_en:'Seated Cable Row',              category:'back', icon:'🚣', alts:['t-bar-row', 'barbell-row'] },
  { id:'t-bar-row',           name_ar:'تي بار رو حر',              name_en:'T-Bar Row',                     category:'back', icon:'🏋️', alts:['barbell-row', 'seated-cable-row'] },
  { id:'pullup-weighted',     name_ar:'عقلة حرة / بوزن',           name_en:'Pull-Ups / Chin-Ups',           category:'back', icon:'🧗', alts:['lat-pulldown-wide', 'lat-pulldown-close'] },
  { id:'back-extension',      name_ar:'قطنية على الدكة (فيبر)',     name_en:'Hyperextensions (Lower Back)',  category:'back', icon:'🔙', alts:['deadlift'] },
  { id:'shrugs-barbell',      name_ar:'ترابيس بالبار (شراجز)',     name_en:'Barbell Shrugs',                category:'back', icon:'🏋️', alts:['shrugs-dumbbell'] },
  // أكتاف
  { id:'overhead-press-bar',  name_ar:'ضغط كتف بار واقف (OHP)',    name_en:'Overhead Barbell Press',        category:'shoulders', icon:'🏋️', alts:['db-shoulder-press', 'arnold-press'] },
  { id:'db-shoulder-press',   name_ar:'ضغط كتف بالدامبلز جالساً',   name_en:'Seated Dumbbell Shoulder Press',category:'shoulders', icon:'🏋️', alts:['overhead-press-bar'] },
  { id:'lateral-raise-db',    name_ar:'رفرفة جانبي بالدامبلز',     name_en:'Dumbbell Lateral Raise',        category:'shoulders', icon:'🦅', alts:['lateral-raise-cable'] },
  { id:'front-raise-db',      name_ar:'رفرفة أمامي بالدامبلز',     name_en:'Front Dumbbell Raise',          category:'shoulders', icon:'💪', alts:['overhead-press-bar'] },
  { id:'rear-delt-fly-db',    name_ar:'رفرفة خلفي بالدامبلز منحني', name_en:'Bent-Over Rear Delt Fly',      category:'shoulders', icon:'🦋', alts:['face-pull'] },
  { id:'face-pull',           name_ar:'فيس بول بالحبل على الكيبل',  name_en:'Cable Face Pulls',              category:'shoulders', icon:'🎯', alts:['rear-delt-fly-db'] },
  // ذراع
  { id:'barbell-curl',        name_ar:'بايسبس بار مستقيم واقف',    name_en:'Standing Barbell Curl',         category:'arms', icon:'💪', alts:['ez-bar-curl', 'hammer-curl', 'preacher-curl'] },
  { id:'hammer-curl',         name_ar:'هامر كيرل بالدامبلز',       name_en:'Dumbbell Hammer Curl',          category:'arms', icon:'🔨', alts:['barbell-curl', 'preacher-curl'] },
  { id:'preacher-curl',       name_ar:'لاري سكوت (بريتشر كيرل)',   name_en:'Preacher Curl Bench',           category:'arms', icon:'💪', alts:['barbell-curl', 'hammer-curl'] },
  { id:'tricep-pushdown-rope',name_ar:'ترايسبس حبل على الكيبل',    name_en:'Tricep Rope Pushdown',          category:'arms', icon:'⬇️', alts:['skull-crushers', 'overhead-db-tricep'] },
  { id:'skull-crushers',      name_ar:'تكسير جمجمة بار زجزاج',     name_en:'EZ-Bar Skull Crushers',         category:'arms', icon:'💀', alts:['tricep-pushdown-rope', 'overhead-db-tricep'] },
  { id:'overhead-db-tricep',  name_ar:'ترايسبس دامبلز خلف الرأس',  name_en:'Overhead Dumbbell Extension',   category:'arms', icon:'⬆️', alts:['tricep-pushdown-rope', 'skull-crushers'] },
  // أرجل
  { id:'barbell-squat',       name_ar:'سكوات خلفي بار حر',         name_en:'Barbell Back Squat',            category:'legs', icon:'🦵', alts:['leg-press', 'hack-squat'] },
  { id:'leg-press',           name_ar:'مكبس أرجل (ليج بريس 45°)',  name_en:'45° Leg Press Machine',         category:'legs', icon:'🦵', alts:['barbell-squat', 'hack-squat'] },
  { id:'leg-extension',       name_ar:'جهاز رفرفة أرجل أمامي',     name_en:'Seated Leg Extension (Quads)',  category:'legs', icon:'🦵', alts:['barbell-squat'] },
  { id:'lying-leg-curl',      name_ar:'جهاز نوم خلفيات أرجل',      name_en:'Lying Leg Curl (Hamstrings)',   category:'legs', icon:'🦵', alts:['deadlift'] },
  { id:'standing-calf-raise', name_ar:'سمانة واقف بالجهاز أو البار',name_en:'Standing Calf Raise',          category:'legs', icon:'🦵', alts:['leg-press'] },
  // بطن وكارديو
  { id:'cable-crunch',        name_ar:'طحن كيبل للبطن بحبل',       name_en:'Kneeling Cable Crunch',         category:'core', icon:'💪', alts:['hanging-leg-raise', 'plank'] },
  { id:'hanging-leg-raise',   name_ar:'رفع أرجل متعلق على العقلة', name_en:'Hanging Leg/Knee Raise',        category:'core', icon:'🦵', alts:['cable-crunch'] },
  { id:'plank',               name_ar:'بلانك ثبات',                name_en:'Plank Hold',                    category:'core', icon:'📏', alts:['cable-crunch'] },
  { id:'treadmill',           name_ar:'مشاية كهربائية (سير)',      name_en:'Treadmill Running / Incline',   category:'cardio', icon:'🏃', alts:['stationary-bike'] }
];

const STORAGE_KEY_PREFIX = 'gymTracker_v7_';

// ── State ─────────────────────────────────────────────────────────
let lang           = localStorage.getItem('gymTrackerLang') || 'ar';
let theme          = localStorage.getItem('gymTrackerTheme') || 'dark';
let users          = ['مصطفى', 'أحمد'];
let currentUser    = 'مصطفى';
let currentData    = { workouts: [], plan: null, userProfile: {}, notifications: [], water: 0 };
let category       = 'all';
let query          = '';

// Interactive Session Modal State
let modalExId       = null;
let modalSets       = [];
let currentSetIdx   = 0;
let isResting       = false;
let selectedRestSec = 60;
let restRef         = null;
let restRemaining   = 0;
let swapTargetExId  = null;
let pendingPlan     = null;

// ── Helpers ───────────────────────────────────────────────────────
const $ = (sel) => document.getElementById(sel) || document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const todayISO = () => {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
};

const fmtDate = (iso) => {
  const d = new Date(iso + 'T00:00:00');
  const locale = lang === 'ar' ? 'ar-EG' : 'en-US';
  return new Intl.DateTimeFormat(locale, { weekday:'long', day:'numeric', month:'short' }).format(d);
};

const fmtTimer = (ms) => {
  if (!ms || ms < 0) return '00:00';
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
};

const fmtDuration = (ms) => {
  if (!ms || ms < 0) return '0 دقيقة';
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  return h > 0 ? `${h} ساعة و ${m} دقيقة` : `${m} دقيقة`;
};

// ── Audio Beep ────────────────────────────────────────────────────
const playMultipleBeeps = (count = 5) => {
  let beepsPlayed = 0;
  const playSingle = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(950, ctx.currentTime);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}

    if ('vibrate' in navigator) navigator.vibrate([180, 100, 180]);
    beepsPlayed++;
    if (beepsPlayed < count) setTimeout(playSingle, 600);
  };
  playSingle();
};

// ── Storage & User Switch ─────────────────────────────────────────
const loadUsers = () => {
  try {
    const savedUsers = JSON.parse(localStorage.getItem('gymTrackerUsers'));
    if (savedUsers && savedUsers.length) users = savedUsers;
    currentUser = localStorage.getItem('gymTrackerActiveUser') || users[0];
  } catch {
    users = ['مصطفى', 'أحمد'];
    currentUser = 'مصطفى';
  }
};

const saveUsers = () => {
  localStorage.setItem('gymTrackerUsers', JSON.stringify(users));
  localStorage.setItem('gymTrackerActiveUser', currentUser);
};

const loadUserData = () => {
  try {
    currentData = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + currentUser)) || {
      workouts: [], plan: null, userProfile: {}, notifications: [], water: 0
    };
    if (!currentData.notifications) currentData.notifications = [];
  } catch {
    currentData = { workouts: [], plan: null, userProfile: {}, notifications: [], water: 0 };
  }
};

const saveUserData = () => {
  localStorage.setItem(STORAGE_KEY_PREFIX + currentUser, JSON.stringify(currentData));
};

const todayWorkout = () => {
  const iso = todayISO();
  let w = currentData.workouts.find(x => x.date === iso);
  if (!w) {
    w = { id: crypto.randomUUID?.() || Math.random().toString(36).slice(2), date: iso, start: null, end: null, exercises: [] };
    currentData.workouts.push(w);
    saveUserData();
  }
  return w;
};

const lastSession = (exId) => {
  const iso = todayISO();
  for (let i = currentData.workouts.length - 1; i >= 0; i--) {
    const w = currentData.workouts[i];
    if (w.date >= iso) continue;
    const ex = w.exercises.find(e => e.id === exId);
    if (ex) return { ...ex, date: w.date };
  }
  return null;
};

// ── Theme Management ──────────────────────────────────────────────
const applyTheme = () => {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  const themeBtn = $('btn-theme-toggle');
  if (themeBtn) themeBtn.textContent = isLight ? '🌙' : '☀️';

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', isLight ? '#f4f5fa' : '#09090e');
};

const toggleTheme = () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('gymTrackerTheme', theme);
  applyTheme();
};

// ── Water Hydration Tracker ───────────────────────────────────────
const renderWaterDisplay = () => {
  const w = currentData.water || 0;
  const liters = (w * 0.25).toFixed(2);
  $('water-count-display').textContent = `${liters} لتر (${w} أكواب)`;
};

const addWater = (delta) => {
  currentData.water = Math.max(0, (currentData.water || 0) + delta);
  saveUserData();
  renderWaterDisplay();
  if (delta > 0) toast('عاش! كوب ماء إضافي للترطيب 💧');
};

// ── Enhanced Smart Coach (5/6 Days & Injury Safe) ─────────────────
const generateSmartPlan = (weight, height, goal, level, days, injury, focus) => {
  let planTitle = '';
  let daysRoutines = [];
  const repScheme = goal === 'bulk' ? '8-12' : (goal === 'cut' ? '12-15' : '5-8');
  const setsCount = level === 'beginner' ? 3 : 4;

  if (days === '3') {
    planTitle = 'Full Body 3x (شامل الجسم 3 أيام)';
    daysRoutines = [
      { dayName: 'يوم 1: شامل أ (Full Body A)', exercises: ['barbell-squat', 'bench-press', 'lat-pulldown-wide', 'overhead-press-bar', 'barbell-curl', 'cable-crunch'] },
      { dayName: 'يوم 2: شامل ب (Full Body B)', exercises: ['deadlift', 'db-incline-press', 'seated-cable-row', 'lateral-raise-db', 'tricep-pushdown-rope', 'plank'] },
      { dayName: 'يوم 3: شامل ج (Full Body C)', exercises: ['leg-press', 'chest-fly-db', 'pullup-weighted', 'face-pull', 'hammer-curl', 'treadmill'] }
    ];
  } else if (days === '4') {
    planTitle = 'Upper / Lower 4x (علوي / سفلي 4 أيام)';
    daysRoutines = [
      { dayName: 'يوم 1: جزء علوي أ (Upper A)', exercises: ['bench-press', 'barbell-row', 'overhead-press-bar', 'lat-pulldown-close', 'barbell-curl', 'tricep-pushdown-rope'] },
      { dayName: 'يوم 2: جزء سفلي أ (Lower A)', exercises: ['barbell-squat', 'lying-leg-curl', 'leg-extension', 'standing-calf-raise', 'hanging-leg-raise'] },
      { dayName: 'يوم 3: جزء علوي ب (Upper B)', exercises: ['incline-barbell', 'pullup-weighted', 'db-shoulder-press', 'seated-cable-row', 'preacher-curl', 'skull-crushers'] },
      { dayName: 'يوم 4: جزء سفلي ب (Lower B)', exercises: ['leg-press', 'deadlift', 'leg-extension', 'standing-calf-raise', 'cable-crunch'] }
    ];
  } else if (days === '5') {
    planTitle = 'PPL + Upper/Lower 5x (جدول 5 أيام احترافي)';
    daysRoutines = [
      { dayName: 'يوم 1: دفع (Push - صدر وأكتاف وتراي)', exercises: ['bench-press', 'incline-barbell', 'db-shoulder-press', 'lateral-raise-db', 'tricep-pushdown-rope', 'overhead-db-tricep'] },
      { dayName: 'يوم 2: سحب (Pull - ظهر وبايسبس وترابيس)', exercises: ['lat-pulldown-wide', 'barbell-row', 'seated-cable-row', 'shrugs-barbell', 'barbell-curl', 'hammer-curl'] },
      { dayName: 'يوم 3: أرجل وبطن (Legs & Core)', exercises: ['barbell-squat', 'leg-press', 'lying-leg-curl', 'leg-extension', 'standing-calf-raise', 'cable-crunch'] },
      { dayName: 'يوم 4: علوي شامل (Upper Power)', exercises: ['db-incline-press', 'pullup-weighted', 'overhead-press-bar', 'face-pull', 'preacher-curl', 'skull-crushers'] },
      { dayName: 'يوم 5: سفلي وبطن (Lower & Abs)', exercises: ['deadlift', 'leg-press', 'lying-leg-curl', 'standing-calf-raise', 'hanging-leg-raise', 'treadmill'] }
    ];
  } else {
    planTitle = 'Push / Pull / Legs 6x (جدول 6 أيام المتقدم)';
    daysRoutines = [
      { dayName: 'يوم 1: دفع أ (Push A)', exercises: ['bench-press', 'incline-barbell', 'lateral-raise-db', 'tricep-pushdown-rope'] },
      { dayName: 'يوم 2: سحب أ (Pull A)', exercises: ['lat-pulldown-wide', 'barbell-row', 'shrugs-barbell', 'barbell-curl'] },
      { dayName: 'يوم 3: أرجل أ (Legs A)', exercises: ['barbell-squat', 'leg-extension', 'standing-calf-raise', 'cable-crunch'] },
      { dayName: 'يوم 4: دفع ب (Push B)', exercises: ['db-incline-press', 'chest-fly-db', 'overhead-press-bar', 'skull-crushers'] },
      { dayName: 'يوم 5: سحب ب (Pull B)', exercises: ['pullup-weighted', 'seated-cable-row', 'face-pull', 'hammer-curl'] },
      { dayName: 'يوم 6: أرجل ب (Legs B)', exercises: ['leg-press', 'lying-leg-curl', 'standing-calf-raise', 'plank'] }
    ];
  }

  daysRoutines.forEach(routine => {
    if (injury === 'lower_back') {
      routine.exercises = routine.exercises.map(e => e === 'deadlift' ? 'back-extension' : (e === 'barbell-squat' ? 'leg-press' : e));
    } else if (injury === 'shoulder') {
      routine.exercises = routine.exercises.map(e => e === 'overhead-press-bar' ? 'lateral-raise-db' : (e === 'incline-barbell' ? 'chest-fly-incline' : e));
    } else if (injury === 'knee') {
      routine.exercises = routine.exercises.map(e => e === 'barbell-squat' ? 'lying-leg-curl' : e);
    }
  });

  return {
    createdAt: Date.now(),
    weight, height, goal, level, days, injury, focus,
    title: planTitle,
    repScheme,
    setsCount,
    routines: daysRoutines
  };
};

// ── Interactive Live Set-by-Set Logger ────────────────────────────
const openModal = (exId) => {
  const def = EXERCISES.find(e => e.id === exId);
  if (!def) return;

  modalExId = exId;
  const existing = todayWorkout().exercises.find(e => e.id === exId);
  const last = lastSession(exId);

  $('modal-title').textContent = lang === 'ar' ? def.name_ar : def.name_en;

  if (last && last.sets && last.sets.length) {
    const lastSetsStr = last.sets.map((s, i) => `م${i+1}: ${s.weight}kg×${s.reps}`).join(' | ');
    $('last-session-text').innerHTML = `آخر تمرين (${fmtDate(last.date)}):<br><strong>${lastSetsStr}</strong>`;
  } else {
    $('last-session-text').textContent = 'أول مرة تلعب هذا التمرين! 💪';
  }

  if (existing && existing.sets && existing.sets.length) {
    modalSets = JSON.parse(JSON.stringify(existing.sets));
  } else if (last && last.sets && last.sets.length) {
    modalSets = JSON.parse(JSON.stringify(last.sets));
  } else {
    const defaultReps = currentData.plan ? parseInt(currentData.plan.repScheme.split('-')[0], 10) || 10 : 10;
    const defaultSetsCount = currentData.plan ? currentData.plan.setsCount : 4;
    modalSets = [];
    for (let i = 0; i < defaultSetsCount; i++) {
      modalSets.push({ weight: 20, reps: defaultReps });
    }
  }

  currentSetIdx = 0;
  isResting = false;
  cancelLiveRestTimer();
  populateActiveSetInputs();
  renderSetsTable();

  $('notes-input').value = existing?.notes || '';
  $('exercise-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const populateActiveSetInputs = () => {
  const currentSet = modalSets[currentSetIdx] || modalSets[modalSets.length - 1] || { weight: 20, reps: 10 };
  $('active-set-weight').value = currentSet.weight;
  $('active-set-reps').value = currentSet.reps;
  $('live-set-status').textContent = `المجموعة ${currentSetIdx + 1} من ${modalSets.length}`;
};

window.stepActiveWeight = (delta) => {
  const el = $('active-set-weight');
  el.value = Math.max(0, (parseFloat(el.value) || 0) + delta);
};

window.stepActiveReps = (delta) => {
  const el = $('active-set-reps');
  el.value = Math.max(1, (parseInt(el.value, 10) || 0) + delta);
};

const handleFinishSetClick = () => {
  const wt = parseFloat($('active-set-weight').value) || 0;
  const rp = parseInt($('active-set-reps').value, 10) || 0;

  if (modalSets[currentSetIdx]) {
    modalSets[currentSetIdx] = { weight: wt, reps: rp };
  } else {
    modalSets.push({ weight: wt, reps: rp });
  }
  renderSetsTable();

  // If user clicked "Start Next Set" during rest
  if (isResting) {
    cancelLiveRestTimer();
    currentSetIdx++;
    if (currentSetIdx >= modalSets.length) {
      modalSets.push({ weight: wt, reps: rp });
    }
    isResting = false;
    populateActiveSetInputs();
    const btn = $('btn-finish-set');
    btn.textContent = '✅ أنهيت المجموعة وبدء الراحة ⏱️';
    btn.classList.remove('start-next');
    return;
  }

  // If selected rest is 0 (None)
  if (selectedRestSec === 0) {
    currentSetIdx++;
    if (currentSetIdx >= modalSets.length) {
      modalSets.push({ weight: wt, reps: rp });
    }
    populateActiveSetInputs();
    toast('تم تسجيل المجموعة والانتقال للمجموعة التالية ⚡');
    return;
  }

  // Start Rest Timer
  startLiveRestTimer(selectedRestSec);
};

const startLiveRestTimer = (seconds) => {
  if (seconds <= 0) return;
  if (restRef) clearInterval(restRef);
  restRemaining = seconds;
  isResting = true;

  const counterEl = $('live-rest-counter');
  counterEl.style.display = 'inline-block';
  counterEl.textContent = `⏱️ ${String(Math.floor(restRemaining / 60)).padStart(2,'0')}:${String(restRemaining % 60).padStart(2,'0')}`;

  const btn = $('btn-finish-set');
  btn.textContent = '⚡ ابدأ المجموعة التالية';
  btn.classList.add('start-next');

  restRef = setInterval(() => {
    restRemaining--;
    if (restRemaining <= 0) {
      clearInterval(restRef);
      counterEl.textContent = '🔔 انتهى وقت الراحة!';
      playMultipleBeeps(5);
      toast('انتهى وقت الراحة! ابدأ مجموعتك القادمة 💪');
    } else {
      const m = Math.floor(restRemaining / 60);
      const s = restRemaining % 60;
      counterEl.textContent = `⏱️ ${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
  }, 1000);
};

const cancelLiveRestTimer = () => {
  if (restRef) clearInterval(restRef);
  $('live-rest-counter').style.display = 'none';
  const btn = $('btn-finish-set');
  btn.textContent = '✅ أنهيت المجموعة وبدء الراحة ⏱️';
  btn.classList.remove('start-next');
  isResting = false;
};

const renderSetsTable = () => {
  const container = $('sets-container');
  container.innerHTML = modalSets.map((s, idx) => `
    <div class="set-row">
      <div class="set-index">${idx + 1}</div>
      <div class="set-input-box">
        <input type="number" step="0.5" class="set-input" value="${s.weight}" onchange="updateSetValue(${idx}, 'weight', this.value)">
      </div>
      <div class="set-input-box">
        <input type="number" class="set-input" value="${s.reps}" onchange="updateSetValue(${idx}, 'reps', this.value)">
      </div>
      <button type="button" class="btn-remove-set" onclick="removeSetRow(${idx})">✕</button>
    </div>
  `).join('');
};

window.updateSetValue = (idx, field, val) => {
  modalSets[idx][field] = Math.max(0, parseFloat(val) || 0);
};

window.removeSetRow = (idx) => {
  if (modalSets.length <= 1) return;
  modalSets.splice(idx, 1);
  if (currentSetIdx >= modalSets.length) currentSetIdx = modalSets.length - 1;
  populateActiveSetInputs();
  renderSetsTable();
};

const saveExerciseModal = () => {
  if (!modalExId) return;
  const w = todayWorkout();
  if (!w.start) w.start = Date.now();

  const entry = {
    id: modalExId,
    sets: modalSets,
    notes: $('notes-input').value.trim(),
    time: Date.now()
  };

  const idx = w.exercises.findIndex(e => e.id === modalExId);
  if (idx >= 0) w.exercises[idx] = entry;
  else w.exercises.push(entry);

  w.end = Date.now();
  saveUserData();
  const finishedExId = modalExId;
  closeModal();
  toast('تم حفظ التمرين ✅');

  if ($('today-view').classList.contains('active')) renderToday();
  if ($('library-view').classList.contains('active')) renderLibrary();

  // Check for Next Exercise in Flow
  promptNextExerciseFlow(finishedExId);
};

const promptNextExerciseFlow = (currentFinishedId) => {
  const w = todayWorkout();
  const currentIndex = w.exercises.findIndex(e => e.id === currentFinishedId);
  if (currentIndex >= 0 && currentIndex < w.exercises.length - 1) {
    const nextEx = w.exercises[currentIndex + 1];
    const nextDef = EXERCISES.find(e => e.id === nextEx.id);
    if (nextDef) {
      setTimeout(() => {
        if (confirm(`عاش يا بطل! هل ترغب في بدء التمرين التالي مباشرة (${nextDef.name_ar})؟`)) {
          openModal(nextEx.id);
        }
      }, 500);
    }
  } else if (currentIndex === w.exercises.length - 1 && w.exercises.length > 1) {
    setTimeout(() => {
      toast('🎉 عاش جداً! أنهيت جميع تمارين جدول اليوم بنجاح!');
    }, 500);
  }
};

const closeModal = () => {
  cancelLiveRestTimer();
  $('exercise-modal').classList.remove('open');
  document.body.style.overflow = '';
  modalExId = null;
};

// ── PDF Export Report ─────────────────────────────────────────────
const exportPDFReport = () => {
  const p = currentData.plan;
  const prof = currentData.userProfile || {};
  const pastWorkouts = currentData.workouts || [];

  let html = `
    <div class="pdf-header">
      <div>
        <div class="pdf-title">💪 تقرير وخطة تمريني (Tamriny Pro)</div>
        <div>تاريخ التقرير: ${fmtDate(todayISO())}</div>
      </div>
      <div style="font-weight:900;font-size:20px;color:#ff6b35;">SEC ASSEM</div>
    </div>

    <div class="pdf-meta-box">
      <strong>بيانات المتدرب:</strong> ${currentUser} | 
      <strong>الوزن:</strong> ${prof.weight || p?.weight || '—'} كجم | 
      <strong>الطول:</strong> ${prof.height || p?.height || '—'} سم | 
      <strong>الهدف:</strong> ${p?.goal === 'bulk' ? 'تضخيم وبناء عضل' : (p?.goal === 'cut' ? 'تنشيف وحرق دهون' : 'لياقة وقوة')} | 
      <strong>الإصابات:</strong> ${p?.injury || 'لا توجد'}
    </div>
  `;

  if (p && p.routines) {
    html += `<h3 style="margin-bottom:10px;color:#00a884;">📋 جدول التمارين المخصص (${p.title})</h3>`;
    p.routines.forEach(r => {
      html += `
        <div class="pdf-day-block">
          <div class="pdf-day-title">${r.dayName}</div>
          ${r.exercises.map(exId => {
            const def = EXERCISES.find(e => e.id === exId);
            return `<div class="pdf-ex-row"><span>${def ? def.name_ar : exId}</span><span>${p.setsCount} مجموعات × ${p.repScheme} عدات</span></div>`;
          }).join('')}
        </div>
      `;
    });
  }

  if (pastWorkouts.length > 0) {
    html += `<h3 style="margin-top:20px;margin-bottom:10px;color:#00a884;">📊 سجل آخر الأوزان المسجلة</h3>`;
    pastWorkouts.slice(-5).reverse().forEach(w => {
      html += `
        <div class="pdf-day-block">
          <div class="pdf-day-title">${fmtDate(w.date)}</div>
          ${w.exercises.map(ex => {
            const def = EXERCISES.find(e => e.id === ex.id);
            const setsStr = (ex.sets || []).map((s, i) => `[م${i+1}: ${s.weight}كجم × ${s.reps}]`).join(' ');
            return `<div class="pdf-ex-row"><span>${def ? def.name_ar : ex.id}</span><span>${setsStr}</span></div>`;
          }).join('')}
        </div>
      `;
    });
  }

  $('printable-pdf').innerHTML = html;
  window.print();
};

// ── Swapper Modal ─────────────────────────────────────────────────
const openSwapperModal = (currentExId) => {
  swapTargetExId = currentExId;
  const def = EXERCISES.find(e => e.id === currentExId);
  if (!def) return;

  $('swap-current-name').innerHTML = `بدائل تمرين: <strong>${lang === 'ar' ? def.name_ar : def.name_en}</strong>`;
  const container = $('swap-alternatives-list');
  const alts = def.alts || [];

  if (alts.length === 0) {
    container.innerHTML = `<p style="text-align:center;color:var(--text3);font-size:.85rem;">لا توجد بدائل مسجلة لهذا التمرين.</p>`;
  } else {
    container.innerHTML = alts.map(altId => {
      const altDef = EXERCISES.find(e => e.id === altId);
      if (!altDef) return '';
      const name = lang === 'ar' ? altDef.name_ar : altDef.name_en;
      return `
        <div class="swap-item" onclick="confirmExerciseSwap('${altId}')">
          <div class="swap-item-info">
            <h5>${altDef.icon} ${name}</h5>
            <span>بديل فعال لنفس الزاوية العضلية</span>
          </div>
          <span style="color:var(--accent);font-weight:800;font-size:.9rem;">اختيار ⚡</span>
        </div>`;
    }).join('');
  }

  $('swap-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeSwapperModal = () => {
  $('swap-modal').classList.remove('open');
  document.body.style.overflow = '';
  swapTargetExId = null;
};

window.confirmExerciseSwap = (newExId) => {
  if (!swapTargetExId) return;
  const w = todayWorkout();
  const targetIdx = w.exercises.findIndex(e => e.id === swapTargetExId);

  if (targetIdx >= 0) {
    const last = lastSession(newExId);
    const prevSets = w.exercises[targetIdx].sets || [];
    const newSets = prevSets.map((s, i) => ({
      weight: last?.sets?.[i]?.weight || last?.sets?.[0]?.weight || s.weight,
      reps: s.reps
    }));

    w.exercises[targetIdx] = { id: newExId, sets: newSets, notes: 'بديل للجهاز المشغول', time: Date.now() };
    saveUserData();
    closeSwapperModal();
    renderToday();
    toast('تم استبدال التمرين بنجاح 🔄');
  } else {
    closeSwapperModal();
    openModal(newExId);
  }
};

// ── Smart Plan Quiz & Approval ────────────────────────────────────
const openPlanQuizModal = () => {
  closeNotifModal();
  $('plan-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closePlanQuizModal = () => {
  $('plan-modal').classList.remove('open');
  document.body.style.overflow = '';
};

const handleQuizSubmit = (e) => {
  e.preventDefault();
  const weight  = $('quiz-weight').value;
  const height  = $('quiz-height').value;
  const goal    = $('quiz-goal').value;
  const level   = $('quiz-level').value;
  const days    = $('quiz-days').value;
  const injury  = $('quiz-injury').value;
  const focus   = $('quiz-focus').value;

  pendingPlan = {
    profile: { weight, height, goal, level, days, injury, focus },
    plan: generateSmartPlan(weight, height, goal, level, days, injury, focus)
  };

  closePlanQuizModal();
  showPlanApprovalModal();
};

const showPlanApprovalModal = () => {
  if (!pendingPlan) return;
  const p = pendingPlan.plan;
  const container = $('approval-plan-content');
  container.innerHTML = `
    <h3 style="color:var(--accent);margin-bottom:6px;">${p.title}</h3>
    <p style="margin-bottom:10px;color:var(--text2);">النظام: <strong>${p.setsCount} مجموعات × ${p.repScheme} عدات</strong> لكل تمرين.</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${p.routines.map(r => `
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:10px;padding:8px 12px;">
          <strong style="color:var(--text);font-size:.9rem;">${r.dayName}</strong>
          <div style="color:var(--text2);font-size:.78rem;margin-top:4px;">${r.exercises.length} تمارين مخصصة</div>
        </div>
      `).join('')}
    </div>
  `;

  $('approval-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const acceptGeneratedPlan = () => {
  if (!pendingPlan) return;
  currentData.userProfile = pendingPlan.profile;
  currentData.plan = pendingPlan.plan;
  saveUserData();

  $('approval-modal').classList.remove('open');
  document.body.style.overflow = '';
  pendingPlan = null;

  // Apply Day 1 automatically and start today's workout flow
  applyPlanDayToToday(0);
  toast('تم اعتماد الخطة وبدء تمرين اليوم 🚀');
};

// ── Render Views ──────────────────────────────────────────────────
const renderToday = () => {
  const w = todayWorkout();
  const exCount = w.exercises.length;
  const setCount = w.exercises.reduce((s, e) => s + (e.sets ? e.sets.length : 0), 0);

  $('summary-exercises').textContent = exCount;
  $('summary-sets').textContent = setCount;
  updateTimer();
  renderWaterDisplay();

  const banner = $('plan-banner');
  if (currentData.plan && exCount === 0) {
    banner.style.display = 'flex';
    $('plan-banner-title').textContent = currentData.plan.title;
  } else {
    banner.style.display = 'none';
  }

  const list = $('today-list');
  if (exCount === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🏋️</div>
        <p>${I18N[lang].welcome_empty.replace('{user}', currentUser)}</p>
      </div>`;
    return;
  }

  list.innerHTML = w.exercises.map(ex => {
    const def = EXERCISES.find(e => e.id === ex.id);
    if (!def) return '';
    const exName = lang === 'ar' ? def.name_ar : def.name_en;
    const setsChips = (ex.sets || []).map((s, idx) => `
      <span class="set-chip">م${idx+1}: <strong>${s.weight}kg</strong> × ${s.reps}</span>
    `).join('');

    return `
      <div class="today-card">
        <div class="today-card-top">
          <div class="icon">${def.icon}</div>
          <div class="info">
            <h4>${exName}</h4>
          </div>
          <div class="card-actions">
            <button class="swap-btn" onclick="openSwapperModal('${ex.id}')" title="بديل التمرين">🔄</button>
            <button class="edit-btn" onclick="openModal('${ex.id}')">تمرين</button>
            <button class="remove-btn" onclick="removeExercise('${ex.id}')">✕</button>
          </div>
        </div>
        <div class="today-sets-chips">${setsChips}</div>
      </div>`;
  }).join('');
};

const updateTimer = () => {
  const w = todayWorkout();
  const el = $('summary-timer');
  if (!w.start) { el.textContent = '00:00'; return; }
  el.textContent = fmtTimer(Date.now() - w.start);
};

const removeExercise = (exId) => {
  if (!confirm('حذف التمرين من جلسة اليوم؟')) return;
  const w = todayWorkout();
  w.exercises = w.exercises.filter(e => e.id !== exId);
  if (w.exercises.length === 0) w.start = null;
  saveUserData();
  renderToday();
  toast('🗑️', 'error');
};

const renderLibrary = () => {
  $$('.pill').forEach(p => p.classList.toggle('active', p.dataset.category === category));

  let list = EXERCISES;
  if (category !== 'all') list = list.filter(e => e.category === category);
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(e => e.name_ar.toLowerCase().includes(q) || e.name_en.toLowerCase().includes(q) || e.id.includes(q));
  }

  const grid = $('exercise-grid');
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>لا توجد نتائج مطابقة 🤷</p></div>`;
    return;
  }

  grid.innerHTML = list.map(ex => {
    const exName = lang === 'ar' ? ex.name_ar : ex.name_en;
    return `
      <div class="ex-card" onclick="openModal('${ex.id}')">
        <div class="card-icon">${ex.icon}</div>
        <h4>${exName}</h4>
        <div class="ex-card-actions">
          <span class="muscle-tag">${ex.category}</span>
          <button type="button" class="btn-alt-badge" onclick="event.stopPropagation(); openSwapperModal('${ex.id}')">بدائل 🔄</button>
        </div>
      </div>`;
  }).join('');
};

const renderPlanView = () => {
  const container = $('plan-display-container');
  if (!currentData.plan) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎯</div>
        <p>لا توجد خطة مخصصة لـ <strong>${currentUser}</strong> بعد.</p>
        <button type="button" class="btn-save" style="margin-top:14px;" onclick="openPlanQuizModal()">ابدأ مع المدرب الذكي 🚀</button>
      </div>`;
    return;
  }

  const p = currentData.plan;
  container.innerHTML = `
    <div class="coach-header-card">
      <span class="coach-badge">${p.goal === 'bulk' ? 'تضخيم وبناء عضل' : (p.goal === 'cut' ? 'تنشيف وحرق دهون' : 'قوة ولياقة')}</span>
      <h3>${p.title}</h3>
      <p>نظام التكرارات: <strong>${p.repScheme} عدات</strong> | المجموعات: <strong>${p.setsCount} مجاميع</strong></p>
      <button type="button" class="btn-user-action" style="margin-top:10px;" onclick="openPlanQuizModal()">تعديل الخطة ⚙️</button>
    </div>
    <div class="plan-routines-list">
      ${p.routines.map((r, rIdx) => `
        <div class="plan-day-card">
          <div class="plan-day-header">
            <h4>${r.dayName}</h4>
            <button type="button" class="btn-user-action" onclick="applyPlanDayToToday(${rIdx})">بدء تمرين هذا اليوم ⚡</button>
          </div>
          <div class="plan-ex-list">
            ${r.exercises.map(exId => {
              const def = EXERCISES.find(e => e.id === exId);
              const exName = def ? (lang === 'ar' ? def.name_ar : def.name_en) : exId;
              return `
                <div class="plan-ex-item">
                  <span class="plan-ex-name">${def ? def.icon : '🏋️'} ${exName}</span>
                  <span class="plan-ex-meta">${p.setsCount}×${p.repScheme}</span>
                </div>`;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

const applyPlanDayToToday = (routineIdx) => {
  const p = currentData.plan;
  if (!p || !p.routines[routineIdx]) return;
  const routine = p.routines[routineIdx];
  const w = todayWorkout();

  routine.exercises.forEach(exId => {
    if (!w.exercises.some(e => e.id === exId)) {
      const last = lastSession(exId);
      const defaultSets = [];
      for (let i = 0; i < p.setsCount; i++) {
        defaultSets.push({
          weight: last?.sets?.[i]?.weight || last?.sets?.[0]?.weight || 20,
          reps: parseInt(p.repScheme.split('-')[0], 10) || 10
        });
      }
      w.exercises.push({ id: exId, sets: defaultSets, notes: '', time: Date.now() });
    }
  });

  saveUserData();
  switchView('today-view');
  toast(`تم تجهيز جدول: ${routine.dayName} ✅`);

  if (routine.exercises.length > 0) {
    setTimeout(() => {
      openModal(routine.exercises[0]);
    }, 400);
  }
};

const renderHistory = () => {
  const container = $('history-list');
  const past = [...currentData.workouts]
    .filter(w => w.exercises && w.exercises.length > 0)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (past.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><p>لا يوجد سجل تمارين بعد لـ <strong>${currentUser}</strong>.</p></div>`;
    return;
  }

  container.innerHTML = past.map(w => {
    const dur = w.start && w.end ? fmtDuration(w.end - w.start) : '';
    return `
      <div class="history-card" id="hw-${w.id}">
        <div class="history-header" onclick="toggleHistory('${w.id}')">
          <div>
            <h4>${fmtDate(w.date)}</h4>
            <span class="meta">${w.exercises.length} تمرين${dur ? ' • ' + dur : ''}</span>
          </div>
          <span class="chevron">▾</span>
        </div>
        <div class="history-details">
          ${w.exercises.map(ex => {
            const def = EXERCISES.find(e => e.id === ex.id);
            const exName = def ? (lang === 'ar' ? def.name_ar : def.name_en) : ex.id;
            const setsTxt = (ex.sets || []).map((s, i) => `[م${i+1}: ${s.weight}kg × ${s.reps}]`).join(' ');
            return `
              <div class="history-ex-row">
                <div class="ex-title">${exName}</div>
                <div class="history-sets-view">${setsTxt}</div>
              </div>`;
          }).join('')}
          <div class="history-delete" onclick="deleteWorkout('${w.id}')">حذف هذا اليوم من السجل</div>
        </div>
      </div>`;
  }).join('');
};

const toggleHistory = (wId) => {
  const card = document.getElementById(`hw-${wId}`);
  if (card) card.classList.toggle('open');
};

const deleteWorkout = (wId) => {
  if (!confirm('حذف تمارين هذا اليوم؟')) return;
  currentData.workouts = currentData.workouts.filter(w => w.id !== wId);
  saveUserData();
  renderHistory();
  toast('🗑️', 'error');
};

// ── Notifications Modal ───────────────────────────────────────────
const openNotifModal = () => {
  const container = $('notif-content-box');
  if (!currentData.notifications || currentData.notifications.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding:20px 0;"><p>لا توجد تنبيهات جديدة 🎉</p></div>`;
  } else {
    container.innerHTML = currentData.notifications.map(n => `
      <div class="notif-card">
        <button type="button" class="btn-del-notif" onclick="dismissNotification('${n.id}')">✕</button>
        <h4>${n.title}</h4>
        <p>${n.body}</p>
      </div>
    `).join('');
  }

  $('notif-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeNotifModal = () => {
  $('notif-modal').classList.remove('open');
  document.body.style.overflow = '';
};

window.dismissNotification = (notifId) => {
  currentData.notifications = currentData.notifications.filter(n => n.id !== notifId);
  saveUserData();
  openNotifModal();
  $('notif-badge').classList.toggle('active', currentData.notifications.length > 0);
};

const clearAllNotifications = () => {
  currentData.notifications = [];
  saveUserData();
  openNotifModal();
  $('notif-badge').classList.remove('active');
  toast('تم مسح جميع الإشعارات 🗑️');
};

// ── Users Management ──────────────────────────────────────────────
const renderUserSelect = () => {
  const sel = $('user-select');
  sel.innerHTML = users.map(u => `<option value="${u}" ${u === currentUser ? 'selected' : ''}>${u}</option>`).join('');
};

const openUsersModal = () => {
  const container = $('users-list-container');
  container.innerHTML = users.map((u, idx) => `
    <div class="user-item-row">
      <span class="user-item-name">${u} ${u === currentUser ? '⭐' : ''}</span>
      <div class="user-item-actions">
        <button type="button" class="btn-user-action" onclick="editUserName(${idx})">تعديل</button>
        ${users.length > 1 ? `<button type="button" class="btn-user-action delete" onclick="deleteUser(${idx})">حذف</button>` : ''}
      </div>
    </div>
  `).join('');
  $('users-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeUsersModal = () => {
  $('users-modal').classList.remove('open');
  document.body.style.overflow = '';
};

window.editUserName = (idx) => {
  const oldName = users[idx];
  const newName = prompt('تعديل اسم المتدرب:', oldName);
  if (!newName || !newName.trim() || newName.trim() === oldName) return;
  const cleanName = newName.trim();

  const oldData = localStorage.getItem(STORAGE_KEY_PREFIX + oldName);
  if (oldData) {
    localStorage.setItem(STORAGE_KEY_PREFIX + cleanName, oldData);
    localStorage.removeItem(STORAGE_KEY_PREFIX + oldName);
  }

  users[idx] = cleanName;
  if (currentUser === oldName) currentUser = cleanName;

  saveUsers();
  loadUserData();
  renderUserSelect();
  openUsersModal();
  renderToday();
  toast('✅');
};

window.deleteUser = (idx) => {
  const target = users[idx];
  if (!confirm(`حذف المتدرب ${target} وجميع سجلاته؟`)) return;

  localStorage.removeItem(STORAGE_KEY_PREFIX + target);
  users.splice(idx, 1);
  if (currentUser === target) currentUser = users[0];

  saveUsers();
  loadUserData();
  renderUserSelect();
  openUsersModal();
  renderToday();
  toast('🗑️', 'error');
};

const createNewUser = () => {
  const input = $('new-user-name-input');
  const name = input.value.trim();
  if (!name) return;
  if (!users.includes(name)) {
    users.push(name);
    currentUser = name;
    saveUsers();
    loadUserData();
    renderUserSelect();
    openUsersModal();
    renderToday();
    input.value = '';
    toast('🎉');
  }
};

const handleUserSelectChange = (e) => {
  currentUser = e.target.value;
  saveUsers();
  loadUserData();
  renderToday();
  renderPlanView();
  toast(`👤 ${currentUser}`);
};

// ── Views & Nav ───────────────────────────────────────────────────
const switchView = (viewId) => {
  $$('.view').forEach(v => v.classList.remove('active'));
  const target = $(viewId);
  if (target) target.classList.add('active');

  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === viewId));
  const fab = $('fab-btn');
  if (fab) fab.style.display = viewId === 'today-view' ? 'flex' : 'none';

  if (viewId === 'today-view')   renderToday();
  if (viewId === 'library-view') renderLibrary();
  if (viewId === 'history-view') renderHistory();
  if (viewId === 'plan-view')    renderPlanView();
};

const toast = (msg, type = 'success') => {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.classList.remove('show'), 2600);
};

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
  loadUserData();
  applyTheme();

  const dateEl = $('current-date');
  if (dateEl) dateEl.textContent = fmtDate(todayISO());

  renderUserSelect();

  $('btn-theme-toggle').addEventListener('click', toggleTheme);
  $('user-select').addEventListener('change', handleUserSelectChange);
  $('btn-manage-users').addEventListener('click', openUsersModal);
  $('btn-close-users').addEventListener('click', closeUsersModal);
  $('users-modal-backdrop').addEventListener('click', closeUsersModal);
  $('btn-create-user').addEventListener('click', createNewUser);

  $('btn-notifications').addEventListener('click', openNotifModal);
  $('btn-close-notif').addEventListener('click', closeNotifModal);
  $('notif-modal-backdrop').addEventListener('click', closeNotifModal);
  $('btn-clear-all-notifs').addEventListener('click', clearAllNotifications);

  $('btn-close-swap').addEventListener('click', closeSwapperModal);
  $('swap-modal-backdrop').addEventListener('click', closeSwapperModal);
  $('btn-modal-swap-alt').addEventListener('click', () => {
    const ex = modalExId;
    closeModal();
    openSwapperModal(ex);
  });

  $('btn-water-plus').addEventListener('click', () => addWater(1));
  $('btn-water-minus').addEventListener('click', () => addWater(-1));

  $('quiz-form').addEventListener('submit', handleQuizSubmit);
  $('btn-cancel-quiz').addEventListener('click', closePlanQuizModal);
  $('plan-modal-backdrop').addEventListener('click', closePlanQuizModal);

  $('btn-accept-plan').addEventListener('click', acceptGeneratedPlan);
  $('btn-reject-plan').addEventListener('click', () => {
    $('approval-modal').classList.remove('open');
    openPlanQuizModal();
  });
  $('approval-modal-backdrop').addEventListener('click', () => {
    $('approval-modal').classList.remove('open');
  });

  const bannerBtn = $('btn-load-plan-day');
  if (bannerBtn) bannerBtn.addEventListener('click', () => applyPlanDayToToday(0));

  $$('.nav-btn').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
  $('fab-btn').addEventListener('click', () => switchView('library-view'));
  $$('.pill').forEach(p => p.addEventListener('click', () => { category = p.dataset.category; renderLibrary(); }));
  $('search-input').addEventListener('input', e => { query = e.target.value; renderLibrary(); });

  $('btn-finish-set').addEventListener('click', handleFinishSetClick);
  $('btn-save').addEventListener('click', saveExerciseModal);
  $('btn-cancel').addEventListener('click', closeModal);
  $('modal-backdrop').addEventListener('click', closeModal);

  $$('.chip-rest').forEach(chip => chip.addEventListener('click', () => {
    $$('.chip-rest').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedRestSec = parseInt(chip.dataset.sec, 10);
    toast(`تم ضبط الراحة: ${chip.textContent}`);
  }));

  $('btn-export-pdf').addEventListener('click', exportPDFReport);
  $('btn-export-json').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ users, activeUser: currentUser, data: currentData }, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tamriny-backup-${todayISO()}.json`;
    a.click();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeUsersModal();
      closePlanQuizModal();
      closeNotifModal();
      closeSwapperModal();
      $('approval-modal').classList.remove('open');
    }
  });

  switchView('today-view');
  setInterval(updateTimer, 1000);
});
