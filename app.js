/**
 * تمريني – Gym Tracker Ultimate (Multi-User, Multilingual, 50+ Exercises, Repeat Alert)
 */

const I18N = {
  ar: {
    app_title: 'تمريني',
    exercises_label: 'تمرين',
    sets_label: 'مجموعة',
    time_label: 'الوقت',
    rest_title: '⏱️ وقت الراحة المتبقي',
    stop_btn: 'إنهاء',
    cat_all: 'الكل',
    cat_chest: 'صدر',
    cat_back: 'ظهر',
    cat_shoulders: 'أكتاف',
    cat_arms: 'ذراع',
    cat_legs: 'أرجل',
    cat_core: 'بطن',
    cat_cardio: 'كارديو',
    export_btn: '📥 نسخ احتياطي',
    import_btn: '📤 استرجاع',
    nav_today: 'اليوم',
    nav_exercises: 'التمارين',
    nav_history: 'السجل',
    tbl_set: 'المجموعة',
    tbl_wt: 'الوزن (كجم)',
    tbl_reps: 'العدات',
    tbl_del: 'حذف',
    add_set_btn: '+ إضافة مجموعة',
    rest_after_label: '⏱️ راحة بعد الحفظ:',
    chip_none: 'بدون',
    notes_label: 'ملاحظات',
    cancel_btn: 'إلغاء',
    save_btn: 'حفظ وبدء الراحة ⏱️',
    manage_users_title: 'إدارة المتدربين',
    add_user_btn: 'إضافة',
    close_btn: 'إغلاق',
    edit_name: 'تعديل',
    delete_user: 'حذف',
    rest_done_alert: '🔔 انتهى وقت الراحة! ابدأ مجموعتك التالية 💪',
    welcome_empty: 'مرحباً {user}! لم تسجل تمارين اليوم بعد.<br>اضغط على <strong>+</strong> وابدأ تمرينك الآن!',
    first_time_ex: 'أول مرة تلعب هذا التمرين! 💪',
    last_time_ex: 'آخر تمرين ({date}):<br><strong>{sets}</strong>',
    search_placeholder: 'ابحث عن تمرين...'
  },
  en: {
    app_title: 'Tamriny',
    exercises_label: 'Exercises',
    sets_label: 'Sets',
    time_label: 'Time',
    rest_title: '⏱️ Rest Time Remaining',
    stop_btn: 'Stop',
    cat_all: 'All',
    cat_chest: 'Chest',
    cat_back: 'Back',
    cat_shoulders: 'Shoulders',
    cat_arms: 'Arms',
    cat_legs: 'Legs',
    cat_core: 'Core',
    cat_cardio: 'Cardio',
    export_btn: '📥 Backup',
    import_btn: '📤 Restore',
    nav_today: 'Today',
    nav_exercises: 'Exercises',
    nav_history: 'History',
    tbl_set: 'Set',
    tbl_wt: 'Weight (kg)',
    tbl_reps: 'Reps',
    tbl_del: 'Del',
    add_set_btn: '+ Add Set',
    rest_after_label: '⏱️ Rest after saving:',
    chip_none: 'None',
    notes_label: 'Notes',
    cancel_btn: 'Cancel',
    save_btn: 'Save & Start Rest ⏱️',
    manage_users_title: 'Manage Athletes',
    add_user_btn: 'Add',
    close_btn: 'Close',
    edit_name: 'Edit',
    delete_user: 'Delete',
    rest_done_alert: '🔔 Rest Time Over! Start your next set 💪',
    welcome_empty: 'Welcome {user}! No workouts logged today.<br>Tap <strong>+</strong> to start lifting!',
    first_time_ex: 'First time doing this exercise! 💪',
    last_time_ex: 'Last Session ({date}):<br><strong>{sets}</strong>',
    search_placeholder: 'Search exercise...'
  }
};

const EXERCISES = [
  // ───────── صدر (Chest) ─────────
  { id:'bench-press',         name_ar:'بنش بريس مستوي بالبار',     name_en:'Barbell Flat Bench Press',      category:'chest', icon:'🏋️' },
  { id:'incline-barbell',     name_ar:'بنش مائل عالي بالبار',       name_en:'Incline Barbell Bench Press',   category:'chest', icon:'🏋️' },
  { id:'decline-barbell',     name_ar:'بنش مائل هابط بالبار',       name_en:'Decline Barbell Bench Press',   category:'chest', icon:'🏋️' },
  { id:'db-flat-press',       name_ar:'تجميع بالدامبلز مستوي',     name_en:'Flat Dumbbell Press',           category:'chest', icon:'🏋️' },
  { id:'db-incline-press',    name_ar:'تجميع بالدامبلز مائل عالي',   name_en:'Incline Dumbbell Press',        category:'chest', icon:'🏋️' },
  { id:'chest-fly-db',        name_ar:'تفتيح دامبلز مستوي (فلاي)',  name_en:'Flat Dumbbell Fly',             category:'chest', icon:'🦋' },
  { id:'chest-fly-incline',   name_ar:'تفتيح دامبلز مائل عالي',     name_en:'Incline Dumbbell Fly',          category:'chest', icon:'🦋' },
  { id:'pec-deck',            name_ar:'فراشة جهاز (بيك ديك)',      name_en:'Pec Deck Machine Fly',          category:'chest', icon:'🦋' },
  { id:'cable-crossover-high',name_ar:'كروس أوفر كيبل من أعلى',     name_en:'High-to-Low Cable Fly',         category:'chest', icon:'💪' },
  { id:'cable-crossover-low', name_ar:'كروس أوفر كيبل من أسفل',    name_en:'Low-to-High Cable Fly',         category:'chest', icon:'💪' },
  { id:'chest-press-machine', name_ar:'جهاز ضغط الصدر جالساً',     name_en:'Seated Machine Chest Press',    category:'chest', icon:'🤖' },
  { id:'dips-chest',          name_ar:'متوازي بالتركيز على الصدر',  name_en:'Chest Focused Dips',            category:'chest', icon:'🤸' },
  { id:'pushups',             name_ar:'ضغط أرضي حر (بوش اب)',      name_en:'Standard Push-Ups',             category:'chest', icon:'🤸' },

  // ───────── ظهر (Back) ─────────
  { id:'deadlift',            name_ar:'ديدليفت بار حر',            name_en:'Conventional Deadlift',         category:'back', icon:'🏋️' },
  { id:'lat-pulldown-wide',   name_ar:'سحب علوي أمامي عريض',       name_en:'Wide-Grip Lat Pulldown',        category:'back', icon:'🔽' },
  { id:'lat-pulldown-close',  name_ar:'سحب علوي قبضة ضيقة (V-Bar)',name_en:'Close-Grip V-Bar Pulldown',     category:'back', icon:'🔽' },
  { id:'barbell-row',         name_ar:'تجديف بالبار (بنت أوفر رو)', name_en:'Bent-Over Barbell Row',         category:'back', icon:'🏋️' },
  { id:'db-single-row',       name_ar:'سحب دمبل فردي (منشار)',      name_en:'One-Arm Dumbbell Row',          category:'back', icon:'💪' },
  { id:'seated-cable-row',    name_ar:'سحب أرضي كيبل (سيتد رو)',    name_en:'Seated Cable Row',              category:'back', icon:'🚣' },
  { id:'t-bar-row',           name_ar:'تي بار رو حر',              name_en:'T-Bar Row',                     category:'back', icon:'🏋️' },
  { id:'pullup-weighted',     name_ar:'عقلة حرة / بوزن',           name_en:'Pull-Ups / Chin-Ups',           category:'back', icon:'🧗' },
  { id:'back-extension',      name_ar:'قطنية على الدكة (فيبر)',     name_en:'Hyperextensions (Lower Back)',  category:'back', icon:'🔙' },
  { id:'straight-arm-pulldown',name_ar:'سحب كيبل ذراع مفرود',      name_en:'Straight-Arm Cable Pulldown',   category:'back', icon:'💪' },
  { id:'shrugs-barbell',      name_ar:'ترابيس بالبار (شراجز)',     name_en:'Barbell Shrugs',                category:'back', icon:'🏋️' },
  { id:'shrugs-dumbbell',     name_ar:'ترابيس بالدامبلز',          name_en:'Dumbbell Shrugs',               category:'back', icon:'🏋️' },

  // ───────── أكتاف (Shoulders) ─────────
  { id:'overhead-press-bar',  name_ar:'ضغط كتف بار واقف (OHP)',    name_en:'Overhead Barbell Press',        category:'shoulders', icon:'🏋️' },
  { id:'db-shoulder-press',   name_ar:'ضغط كتف بالدامبلز جالساً',   name_en:'Seated Dumbbell Shoulder Press',category:'shoulders', icon:'🏋️' },
  { id:'arnold-press',        name_ar:'أرنولد بريس دامبلز',        name_en:'Arnold Press',                  category:'shoulders', icon:'🏋️' },
  { id:'lateral-raise-db',    name_ar:'رفرفة جانبي بالدامبلز',     name_en:'Dumbbell Lateral Raise',        category:'shoulders', icon:'🦅' },
  { id:'lateral-raise-cable', name_ar:'رفرفة جانبي بالكيبل',       name_en:'Cable Lateral Raise',           category:'shoulders', icon:'🦅' },
  { id:'front-raise-db',      name_ar:'رفرفة أمامي بالدامبلز',     name_en:'Front Dumbbell Raise',          category:'shoulders', icon:'💪' },
  { id:'front-raise-barbell', name_ar:'رفرفة أمامي بالبار / الطارة',name_en:'Barbell / Plate Front Raise',   category:'shoulders', icon:'💪' },
  { id:'rear-delt-fly-db',    name_ar:'رفرفة خلفي بالدامبلز منحني', name_en:'Bent-Over Rear Delt Fly',      category:'shoulders', icon:'🦋' },
  { id:'face-pull',           name_ar:'فيس بول بالحبل على الكيبل',  name_en:'Cable Face Pulls',              category:'shoulders', icon:'🎯' },
  { id:'upright-row-ez',      name_ar:'سحب بار زجزاج للذقن',       name_en:'EZ-Bar Upright Row',            category:'shoulders', icon:'🏋️' },

  // ───────── ذراع (Arms: Biceps, Triceps, Forearms) ─────────
  { id:'barbell-curl',        name_ar:'بايسبس بار مستقيم واقف',    name_en:'Standing Barbell Curl',         category:'arms', icon:'💪' },
  { id:'ez-bar-curl',         name_ar:'بايسبس بار زجزاج (EZ)',     name_en:'EZ-Bar Bicep Curl',             category:'arms', icon:'💪' },
  { id:'db-alternate-curl',   name_ar:'بايسبس تبادل بالدامبلز',    name_en:'Incline / Standing DB Curl',    category:'arms', icon:'💪' },
  { id:'hammer-curl',         name_ar:'هامر كيرل بالدامبلز',       name_en:'Dumbbell Hammer Curl',          category:'arms', icon:'🔨' },
  { id:'preacher-curl',       name_ar:'لاري سكوت (بريتشر كيرل)',   name_en:'Preacher Curl Bench',           category:'arms', icon:'💪' },
  { id:'cable-bicep-curl',    name_ar:'كيرل بايسبس بالكيبل مسطرة', name_en:'Straight Bar Cable Curl',       category:'arms', icon:'💪' },
  { id:'concentration-curl',  name_ar:'تركيز فردي دامبلز (كونسنتريشن)',name_en:'Concentration Curl',        category:'arms', icon:'💪' },
  { id:'tricep-pushdown-rope',name_ar:'ترايسبس حبل على الكيبل',    name_en:'Tricep Rope Pushdown',          category:'arms', icon:'⬇️' },
  { id:'tricep-pushdown-bar', name_ar:'ترايسبس مسطرة V-Bar كيبل',  name_en:'Tricep Straight/V-Bar Pushdown',category:'arms', icon:'⬇️' },
  { id:'skull-crushers',      name_ar:'تكسير جمجمة بار زجزاج (فرنساوي)',name_en:'EZ-Bar Skull Crushers',     category:'arms', icon:'💀' },
  { id:'overhead-db-tricep',  name_ar:'ترايسبس دامبلز خلف الرأس',  name_en:'Overhead Dumbbell Extension',   category:'arms', icon:'⬆️' },
  { id:'dips-parallel',       name_ar:'متوازي بالتركيز على التراي',name_en:'Tricep Dips on Parallel Bars', category:'arms', icon:'🤸' },
  { id:'close-grip-bench',    name_ar:'بنش قبضة ضيقة للتراي',      name_en:'Close-Grip Bench Press',        category:'arms', icon:'🏋️' },
  { id:'wrist-curls',         name_ar:'سواعد ريست بالبار جالساً',   name_en:'Barbell Wrist Curls (Forearms)',category:'arms', icon:'✊' },

  // ───────── أرجل (Legs & Calves) ─────────
  { id:'barbell-squat',       name_ar:'سكوات خلفي بار حر',         name_en:'Barbell Back Squat',            category:'legs', icon:'🦵' },
  { id:'front-squat',         name_ar:'سكوات أمامي بالبار',        name_en:'Barbell Front Squat',           category:'legs', icon:'🦵' },
  { id:'leg-press',           name_ar:'مكبس أرجل (ليج بريس 45°)',  name_en:'45° Leg Press Machine',         category:'legs', icon:'🦵' },
  { id:'hack-squat',          name_ar:'هاك سكوات بالجهاز',         name_en:'Hack Squat Machine',            category:'legs', icon:'🤖' },
  { id:'bulgarian-split-squat',name_ar:'بلغاريان سبليت سكوات دامبلز',name_en:'Bulgarian Split Squat',       category:'legs', icon:'🚶' },
  { id:'walking-lunges',      name_ar:'طعنات مشي بالدامبلز (لانجز)',name_en:'Walking Dumbbell Lunges',       category:'legs', icon:'🚶' },
  { id:'leg-extension',       name_ar:'جهاز رفرفة أرجل أمامي',     name_en:'Seated Leg Extension (Quads)',  category:'legs', icon:'🦵' },
  { id:'lying-leg-curl',      name_ar:'جهاز نوم خلفيات أرجل (ليج كيرل)',name_en:'Lying Leg Curl (Hamstrings)',category:'legs', icon:'🦵' },
  { id:'seated-leg-curl',     name_ar:'جهاز جلوس خلفيات أرجل',     name_en:'Seated Leg Curl',               category:'legs', icon:'🦵' },
  { id:'romanian-deadlift',   name_ar:'رومانيان ديدليفت دامبلز/بار',name_en:'Romanian Deadlift (RDL)',       category:'legs', icon:'🏋️' },
  { id:'standing-calf-raise', name_ar:'سمانة واقف بالجهاز أو البار',name_en:'Standing Calf Raise',          category:'legs', icon:'🦵' },
  { id:'seated-calf-raise',   name_ar:'سمانة جالس بالجهاز',        name_en:'Seated Calf Raise',             category:'legs', icon:'🦵' },

  // ───────── بطن وكور (Core) ─────────
  { id:'cable-crunch',        name_ar:'طحن كيبل للبطن بحبل',       name_en:'Kneeling Cable Crunch',         category:'core', icon:'💪' },
  { id:'hanging-leg-raise',   name_ar:'رفع أرجل متعلق على العقلة', name_en:'Hanging Leg/Knee Raise',        category:'core', icon:'🦵' },
  { id:'incline-leg-raise',   name_ar:'رفع أرجل على دكة مائلة',    name_en:'Incline Bench Leg Raise',       category:'core', icon:'🍫' },
  { id:'plank',               name_ar:'بلانك ثبات',                name_en:'Plank Hold',                    category:'core', icon:'📏' },
  { id:'russian-twists',      name_ar:'رشن تويست بالوزن للجوانب',  name_en:'Weighted Russian Twists',       category:'core', icon:'🔄' },
  { id:'ab-wheel-rollout',    name_ar:'عجلة البطن (آب رولر)',      name_en:'Ab Wheel Rollout',              category:'core', icon:'🎡' },

  // ───────── كارديو (Cardio) ─────────
  { id:'treadmill',           name_ar:'مشاية كهربائية (سير)',      name_en:'Treadmill Running / Incline',   category:'cardio', icon:'🏃' },
  { id:'stationary-bike',     name_ar:'عجلة تمارين ثابتة',         name_en:'Stationary Upright Bike',       category:'cardio', icon:'🚴' },
  { id:'stairmaster',         name_ar:'سلم الكارديو (ستير ماستر)', name_en:'StairMaster Climber',           category:'cardio', icon:'🧗' },
  { id:'rowing-machine',      name_ar:'جهاز التجديف الهوائي',      name_en:'Rowing Machine (Ergometer)',    category:'cardio', icon:'🚣' }
];

const STORAGE_KEY_PREFIX = 'gymTracker_v3_';

// ── State ─────────────────────────────────────────────────────────
let lang           = localStorage.getItem('gymTrackerLang') || 'ar';
let users          = ['مصطفى', 'أحمد'];
let currentUser    = 'مصطفى';
let currentData    = { workouts: [] };
let category       = 'all';
let query          = '';
let modalExId      = null;
let modalSets      = [];
let selectedRestSec= 60;
let restRef        = null;
let restRemaining  = 0;

// ── Audio Multi-Beep (iOS Compatible) ─────────────────────────────
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
    if (beepsPlayed < count) {
      setTimeout(playSingle, 600);
    }
  };
  playSingle();
};

const sendBackgroundNotification = (title, body) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      body: body,
      icon: './icon-512.jpg',
      badge: './icon-512.jpg',
      vibrate: [200, 100, 200, 100, 200]
    });
  }
};

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
  if (!ms || ms < 0) return lang === 'ar' ? '0 دقيقة' : '0 min';
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (lang === 'ar') return h > 0 ? `${h} ساعة و ${m} دقيقة` : `${m} دقيقة`;
  return h > 0 ? `${h}h ${m}m` : `${m} min`;
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
    currentData = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + currentUser)) || { workouts: [] };
  } catch {
    currentData = { workouts: [] };
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

// ── Localization ──────────────────────────────────────────────────
const applyLanguage = () => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('btn-lang-toggle').textContent = lang === 'ar' ? 'EN' : 'عربي';
  $('search-input').placeholder = I18N[lang].search_placeholder;

  $$('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  const dateEl = $('current-date');
  if (dateEl) dateEl.textContent = fmtDate(todayISO());

  renderUserSelect();
  renderToday();
  renderLibrary();
  renderHistory();
};

const toggleLanguage = () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('gymTrackerLang', lang);
  applyLanguage();
};

// ── Toast ─────────────────────────────────────────────────────────
const toast = (msg, type = 'success') => {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.classList.remove('show'), 2600);
};

// ── Rest Timer ────────────────────────────────────────────────────
const startRestTimer = (seconds) => {
  if (seconds <= 0) return;
  if (restRef) clearInterval(restRef);
  restRemaining = seconds;
  const box = $('rest-timer-box');

  box.classList.add('active');
  updateRestDisplay();

  restRef = setInterval(() => {
    restRemaining--;
    if (restRemaining <= 0) {
      clearInterval(restRef);
      box.classList.remove('active');
      playMultipleBeeps(5);
      sendBackgroundNotification(I18N[lang].app_title, I18N[lang].rest_done_alert);
      toast(I18N[lang].rest_done_alert);
    } else {
      updateRestDisplay();
    }
  }, 1000);
};

const updateRestDisplay = () => {
  const m = Math.floor(restRemaining / 60);
  const s = restRemaining % 60;
  $('rest-countdown').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
};

const cancelRestTimer = () => {
  if (restRef) clearInterval(restRef);
  $('rest-timer-box').classList.remove('active');
};

// ── Navigation ────────────────────────────────────────────────────
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
};

// ── Render: Today ─────────────────────────────────────────────────
const renderToday = () => {
  const w = todayWorkout();
  const exCount = w.exercises.length;
  const setCount = w.exercises.reduce((s, e) => s + (e.sets ? e.sets.length : 0), 0);

  $('summary-exercises').textContent = exCount;
  $('summary-sets').textContent = setCount;
  updateTimer();

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
      <span class="set-chip">${lang === 'ar' ? 'م' : 'S'}${idx+1}: <strong>${s.weight}kg</strong> × ${s.reps}</span>
    `).join('');

    return `
      <div class="today-card">
        <div class="today-card-top">
          <div class="icon">${def.icon}</div>
          <div class="info">
            <h4>${exName}</h4>
          </div>
          <button class="edit-btn" onclick="openModal('${ex.id}')">${I18N[lang].edit_name}</button>
          <button class="remove-btn" onclick="removeExercise('${ex.id}')">✕</button>
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
  if (!confirm(lang === 'ar' ? 'حذف التمرين من جلسة اليوم؟' : 'Remove exercise from today?')) return;
  const w = todayWorkout();
  w.exercises = w.exercises.filter(e => e.id !== exId);
  if (w.exercises.length === 0) w.start = null;
  saveUserData();
  renderToday();
  toast('🗑️', 'error');
};

// ── Render: Library ───────────────────────────────────────────────
const renderLibrary = () => {
  $$('.pill').forEach(p => p.classList.toggle('active', p.dataset.category === category));

  let list = EXERCISES;
  if (category !== 'all') list = list.filter(e => e.category === category);
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(e => e.name_ar.toLowerCase().includes(q) || e.name_en.toLowerCase().includes(q) || e.id.includes(q));
  }

  const todayIds = todayWorkout().exercises.map(e => e.id);
  const grid = $('exercise-grid');

  if (list.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>${lang === 'ar' ? 'لا توجد تمارين تطابق البحث 🤷' : 'No exercises found 🤷'}</p></div>`;
    return;
  }

  grid.innerHTML = list.map(ex => {
    const last = lastSession(ex.id);
    const done = todayIds.includes(ex.id);
    const exName = lang === 'ar' ? defName(ex.name_ar) : ex.name_en;
    let lastSummary = '—';
    if (last && last.sets && last.sets.length) {
      const maxWt = Math.max(...last.sets.map(s => s.weight));
      lastSummary = `${lang === 'ar' ? 'آخر مرة' : 'Last'}: ${maxWt} kg`;
    }

    return `
      <div class="ex-card" onclick="openModal('${ex.id}')">
        ${done ? '<div class="done-badge">✓</div>' : ''}
        <div class="card-icon">${ex.icon}</div>
        <h4>${exName}</h4>
        <div class="last-wt">${lastSummary}</div>
      </div>`;
  }).join('');
};

const defName = (name) => name;

// ── Render: History ───────────────────────────────────────────────
const renderHistory = () => {
  const container = $('history-list');
  const past = [...currentData.workouts]
    .filter(w => w.exercises && w.exercises.length > 0)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (past.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><p>${lang === 'ar' ? 'لا يوجد سجل تمارين بعد لـ ' : 'No history yet for '}<strong>${currentUser}</strong>.</p></div>`;
    return;
  }

  container.innerHTML = past.map(w => {
    const dur = w.start && w.end ? fmtDuration(w.end - w.start) : '';
    return `
      <div class="history-card" id="hw-${w.id}">
        <div class="history-header" onclick="toggleHistory('${w.id}')">
          <div>
            <h4>${fmtDate(w.date)}</h4>
            <span class="meta">${w.exercises.length} ${I18N[lang].exercises_label}${dur ? ' • ' + dur : ''}</span>
          </div>
          <span class="chevron">▾</span>
        </div>
        <div class="history-details">
          ${w.exercises.map(ex => {
            const def = EXERCISES.find(e => e.id === ex.id);
            const exName = def ? (lang === 'ar' ? def.name_ar : def.name_en) : ex.id;
            const setsTxt = (ex.sets || []).map((s, i) => `[${lang==='ar'?'م':'S'}${i+1}: ${s.weight}kg × ${s.reps}]`).join(' ');
            return `
              <div class="history-ex-row">
                <div class="ex-title">${exName}</div>
                <div class="history-sets-view">${setsTxt}</div>
              </div>`;
          }).join('')}
          <div class="history-delete" onclick="deleteWorkout('${w.id}')">${lang === 'ar' ? 'حذف هذا اليوم من السجل' : 'Delete this day'}</div>
        </div>
      </div>`;
  }).join('');
};

const toggleHistory = (wId) => {
  const card = document.getElementById(`hw-${wId}`);
  if (card) card.classList.toggle('open');
};

const deleteWorkout = (wId) => {
  if (!confirm(lang === 'ar' ? 'حذف تمارين هذا اليوم؟' : 'Delete all workouts for this day?')) return;
  currentData.workouts = currentData.workouts.filter(w => w.id !== wId);
  saveUserData();
  renderHistory();
  toast('🗑️', 'error');
};

// ── Sets Modal Logic ──────────────────────────────────────────────
const openModal = (exId) => {
  const def = EXERCISES.find(e => e.id === exId);
  if (!def) return;

  modalExId = exId;
  const existing = todayWorkout().exercises.find(e => e.id === exId);
  const last = lastSession(exId);

  $('modal-title').textContent = lang === 'ar' ? def.name_ar : def.name_en;

  if (last && last.sets && last.sets.length) {
    const lastSetsStr = last.sets.map((s, i) => `${lang==='ar'?'م':'S'}${i+1}: ${s.weight}kg×${s.reps}`).join(' | ');
    $('last-session-text').innerHTML = I18N[lang].last_time_ex.replace('{date}', fmtDate(last.date)).replace('{sets}', lastSetsStr);
  } else {
    $('last-session-text').textContent = I18N[lang].first_time_ex;
  }

  if (existing && existing.sets && existing.sets.length) {
    modalSets = JSON.parse(JSON.stringify(existing.sets));
  } else if (last && last.sets && last.sets.length) {
    modalSets = JSON.parse(JSON.stringify(last.sets));
  } else {
    modalSets = [
      { weight: 20, reps: 10 },
      { weight: 20, reps: 10 },
      { weight: 20, reps: 10 }
    ];
  }

  $('notes-input').value = existing?.notes || '';
  renderSetsTable();

  $('exercise-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const renderSetsTable = () => {
  const container = $('sets-container');
  container.innerHTML = modalSets.map((s, idx) => `
    <div class="set-row">
      <div class="set-index">${idx + 1}</div>
      <div class="set-input-box">
        <button type="button" class="btn-step" onclick="stepSet(${idx}, 'weight', -2.5)">−</button>
        <input type="number" step="0.5" class="set-input" value="${s.weight}" onchange="updateSetValue(${idx}, 'weight', this.value)">
        <button type="button" class="btn-step" onclick="stepSet(${idx}, 'weight', 2.5)">+</button>
      </div>
      <div class="set-input-box">
        <button type="button" class="btn-step" onclick="stepSet(${idx}, 'reps', -1)">−</button>
        <input type="number" class="set-input" value="${s.reps}" onchange="updateSetValue(${idx}, 'reps', this.value)">
        <button type="button" class="btn-step" onclick="stepSet(${idx}, 'reps', 1)">+</button>
      </div>
      <button type="button" class="btn-remove-set" onclick="removeSetRow(${idx})">✕</button>
    </div>
  `).join('');
};

window.stepSet = (idx, field, delta) => {
  modalSets[idx][field] = Math.max(field === 'weight' ? 0 : 1, (parseFloat(modalSets[idx][field]) || 0) + delta);
  renderSetsTable();
};

window.updateSetValue = (idx, field, val) => {
  modalSets[idx][field] = Math.max(0, parseFloat(val) || 0);
};

window.removeSetRow = (idx) => {
  if (modalSets.length <= 1) return;
  modalSets.splice(idx, 1);
  renderSetsTable();
};

const addSetRow = () => {
  const lastSet = modalSets[modalSets.length - 1] || { weight: 20, reps: 10 };
  modalSets.push({ weight: lastSet.weight, reps: lastSet.reps });
  renderSetsTable();
};

const closeModal = () => {
  $('exercise-modal').classList.remove('open');
  document.body.style.overflow = '';
  modalExId = null;
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
  closeModal();
  toast(lang === 'ar' ? 'تم حفظ التمرين ✅' : 'Workout Saved ✅');

  if ($('today-view').classList.contains('active'))   renderToday();
  if ($('library-view').classList.contains('active')) renderLibrary();

  startRestTimer(selectedRestSec);
};

// ── Multi-User Management Modal ───────────────────────────────────
const renderUserSelect = () => {
  const sel = $('user-select');
  sel.innerHTML = users.map(u => `<option value="${u}" ${u === currentUser ? 'selected' : ''}>${u}</option>`).join('');
};

const openUsersModal = () => {
  renderUsersListModal();
  $('users-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeUsersModal = () => {
  $('users-modal').classList.remove('open');
  document.body.style.overflow = '';
};

const renderUsersListModal = () => {
  const container = $('users-list-container');
  container.innerHTML = users.map((u, idx) => `
    <div class="user-item-row">
      <span class="user-item-name">${u} ${u === currentUser ? '⭐' : ''}</span>
      <div class="user-item-actions">
        <button type="button" class="btn-user-action" onclick="editUserName(${idx})">${I18N[lang].edit_name}</button>
        ${users.length > 1 ? `<button type="button" class="btn-user-action delete" onclick="deleteUser(${idx})">${I18N[lang].delete_user}</button>` : ''}
      </div>
    </div>
  `).join('');
};

window.editUserName = (idx) => {
  const oldName = users[idx];
  const newName = prompt(lang === 'ar' ? 'تعديل اسم المتدرب:' : 'Edit athlete name:', oldName);
  if (!newName || !newName.trim() || newName.trim() === oldName) return;
  const cleanName = newName.trim();

  // Rename data
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
  renderUsersListModal();
  renderToday();
  toast('✅');
};

window.deleteUser = (idx) => {
  const target = users[idx];
  if (!confirm(lang === 'ar' ? `حذف المتدرب ${target} وجميع سجلاته؟` : `Delete ${target} and all data?`)) return;

  localStorage.removeItem(STORAGE_KEY_PREFIX + target);
  users.splice(idx, 1);
  if (currentUser === target) currentUser = users[0];

  saveUsers();
  loadUserData();
  renderUserSelect();
  renderUsersListModal();
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
    renderUsersListModal();
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
  toast(`👤 ${currentUser}`);
};

// ── Export / Import ───────────────────────────────────────────────
const exportData = () => {
  const allBackup = { users, activeUser: currentUser, data: {} };
  users.forEach(u => {
    allBackup.data[u] = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + u)) || { workouts: [] };
  });

  const blob = new Blob([JSON.stringify(allBackup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tamriny-pro-backup-${todayISO()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('📥');
};

const importData = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported && imported.users && imported.data) {
        users = imported.users;
        currentUser = imported.activeUser || users[0];
        saveUsers();
        users.forEach(u => {
          localStorage.setItem(STORAGE_KEY_PREFIX + u, JSON.stringify(imported.data[u] || { workouts: [] }));
        });
        loadUserData();
        renderUserSelect();
        renderHistory();
        renderToday();
        toast('✅');
      } else {
        alert('Invalid file');
      }
    } catch {
      alert('Error parsing file');
    }
  };
  reader.readAsText(file);
};

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  loadUsers();
  loadUserData();
  applyLanguage();

  $('btn-lang-toggle').addEventListener('click', toggleLanguage);
  $('user-select').addEventListener('change', handleUserSelectChange);
  $('btn-manage-users').addEventListener('click', openUsersModal);
  $('btn-close-users').addEventListener('click', closeUsersModal);
  $('users-modal-backdrop').addEventListener('click', closeUsersModal);
  $('btn-create-user').addEventListener('click', createNewUser);

  $$('.nav-btn').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
  $('fab-btn').addEventListener('click', () => switchView('library-view'));
  $$('.pill').forEach(p => p.addEventListener('click', () => { category = p.dataset.category; renderLibrary(); }));
  $('search-input').addEventListener('input', e => { query = e.target.value; renderLibrary(); });

  $('btn-add-set').addEventListener('click', addSetRow);
  $('btn-save').addEventListener('click', saveExerciseModal);
  $('btn-cancel').addEventListener('click', closeModal);
  $('modal-backdrop').addEventListener('click', closeModal);

  $$('.chip-time').forEach(chip => chip.addEventListener('click', () => {
    $$('.chip-time').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    selectedRestSec = parseInt(chip.dataset.sec, 10);
  }));

  $('rest-cancel-btn').addEventListener('click', cancelRestTimer);
  $$('.rest-btn:not(.cancel)').forEach(btn => btn.addEventListener('click', () => {
    restRemaining += parseInt(btn.dataset.add, 10);
    updateRestDisplay();
  }));

  $('btn-export').addEventListener('click', exportData);
  $('import-file-input').addEventListener('change', importData);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
      closeUsersModal();
    }
  });

  switchView('today-view');
  setInterval(updateTimer, 1000);
});
