/**
 * تمريني – Smart Gym Tracker & Coach (Offline-Ready PWA)
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
    nav_plan: 'المدرب الذكي',
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
    quiz_title: '🎯 إعداد خطتك التدريبية الذكية',
    quiz_goal: '1. ما هو هدفك الأساسي؟',
    quiz_level: '2. مستواك التدريبي في الجيم:',
    quiz_days: '3. كم يوماً تستطيع التمرين أسبوعياً؟',
    quiz_focus: '4. عضلة ترغب في التركيز عليها:',
    generate_plan_btn: 'توليد الخطة الذكية 🚀',
    rest_done_alert: '🔔 انتهى وقت الراحة! ابدأ مجموعتك التالية 💪',
    welcome_empty: 'مرحباً {user}! لم تسجل تمارين اليوم بعد.<br>اضغط على <strong>+</strong> أو افتح تبويب <strong>المدرب الذكي</strong> لتحميل جدولك!',
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
    nav_plan: 'Smart Coach',
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
    quiz_title: '🎯 Smart Workout Coach Setup',
    quiz_goal: '1. What is your primary goal?',
    quiz_level: '2. Your training experience:',
    quiz_days: '3. Workout days per week:',
    quiz_focus: '4. Weak point focus muscle:',
    generate_plan_btn: 'Generate Smart Plan 🚀',
    rest_done_alert: '🔔 Rest Time Over! Start your next set 💪',
    welcome_empty: 'Welcome {user}! No workouts logged today.<br>Tap <strong>+</strong> or open <strong>Smart Coach</strong> to load your plan!',
    first_time_ex: 'First time doing this exercise! 💪',
    last_time_ex: 'Last Session ({date}):<br><strong>{sets}</strong>',
    search_placeholder: 'Search exercise...'
  }
};

const EXERCISES = [
  // صدر
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
  // ظهر
  { id:'deadlift',            name_ar:'ديدليفت بار حر',            name_en:'Conventional Deadlift',         category:'back', icon:'🏋️' },
  { id:'lat-pulldown-wide',   name_ar:'سحب علوي أمامي عريض',       name_en:'Wide-Grip Lat Pulldown',        category:'back', icon:'🔽' },
  { id:'lat-pulldown-close',  name_ar:'سحب علوي قبضة ضيقة (V-Bar)',name_en:'Close-Grip V-Bar Pulldown',     category:'back', icon:'🔽' },
  { id:'barbell-row',         name_ar:'تجديف بالبار (بنت أوفر رو)', name_en:'Bent-Over Barbell Row',         category:'back', icon:'🏋️' },
  { id:'db-single-row',       name_ar:'سحب دمبل فردي (منشار)',      name_en:'One-Arm Dumbbell Row',          category:'back', icon:'💪' },
  { id:'seated-cable-row',    name_ar:'سحب أرضي كيبل (سيتد رو)',    name_en:'Seated Cable Row',              category:'back', icon:'🚣' },
  { id:'t-bar-row',           name_ar:'تي بار رو حر',              name_en:'T-Bar Row',                     category:'back', icon:'🏋️' },
  { id:'pullup-weighted',     name_ar:'عقلة حرة / بوزن',           name_en:'Pull-Ups / Chin-Ups',           category:'back', icon:'🧗' },
  { id:'back-extension',      name_ar:'قطنية على الدكة (فيبر)',     name_en:'Hyperextensions (Lower Back)',  category:'back', icon:'🔙' },
  { id:'shrugs-barbell',      name_ar:'ترابيس بالبار (شراجز)',     name_en:'Barbell Shrugs',                category:'back', icon:'🏋️' },
  // أكتاف
  { id:'overhead-press-bar',  name_ar:'ضغط كتف بار واقف (OHP)',    name_en:'Overhead Barbell Press',        category:'shoulders', icon:'🏋️' },
  { id:'db-shoulder-press',   name_ar:'ضغط كتف بالدامبلز جالساً',   name_en:'Seated Dumbbell Shoulder Press',category:'shoulders', icon:'🏋️' },
  { id:'lateral-raise-db',    name_ar:'رفرفة جانبي بالدامبلز',     name_en:'Dumbbell Lateral Raise',        category:'shoulders', icon:'🦅' },
  { id:'front-raise-db',      name_ar:'رفرفة أمامي بالدامبلز',     name_en:'Front Dumbbell Raise',          category:'shoulders', icon:'💪' },
  { id:'rear-delt-fly-db',    name_ar:'رفرفة خلفي بالدامبلز منحني', name_en:'Bent-Over Rear Delt Fly',      category:'shoulders', icon:'🦋' },
  { id:'face-pull',           name_ar:'فيس بول بالحبل على الكيبل',  name_en:'Cable Face Pulls',              category:'shoulders', icon:'🎯' },
  // ذراع
  { id:'barbell-curl',        name_ar:'بايسبس بار مستقيم واقف',    name_en:'Standing Barbell Curl',         category:'arms', icon:'💪' },
  { id:'hammer-curl',         name_ar:'هامر كيرل بالدامبلز',       name_en:'Dumbbell Hammer Curl',          category:'arms', icon:'🔨' },
  { id:'preacher-curl',       name_ar:'لاري سكوت (بريتشر كيرل)',   name_en:'Preacher Curl Bench',           category:'arms', icon:'💪' },
  { id:'tricep-pushdown-rope',name_ar:'ترايسبس حبل على الكيبل',    name_en:'Tricep Rope Pushdown',          category:'arms', icon:'⬇️' },
  { id:'skull-crushers',      name_ar:'تكسير جمجمة بار زجزاج',     name_en:'EZ-Bar Skull Crushers',         category:'arms', icon:'💀' },
  { id:'overhead-db-tricep',  name_ar:'ترايسبس دامبلز خلف الرأس',  name_en:'Overhead Dumbbell Extension',   category:'arms', icon:'⬆️' },
  // أرجل
  { id:'barbell-squat',       name_ar:'سكوات خلفي بار حر',         name_en:'Barbell Back Squat',            category:'legs', icon:'🦵' },
  { id:'leg-press',           name_ar:'مكبس أرجل (ليج بريس 45°)',  name_en:'45° Leg Press Machine',         category:'legs', icon:'🦵' },
  { id:'leg-extension',       name_ar:'جهاز رفرفة أرجل أمامي',     name_en:'Seated Leg Extension (Quads)',  category:'legs', icon:'🦵' },
  { id:'lying-leg-curl',      name_ar:'جهاز نوم خلفيات أرجل',      name_en:'Lying Leg Curl (Hamstrings)',   category:'legs', icon:'🦵' },
  { id:'standing-calf-raise', name_ar:'سمانة واقف بالجهاز أو البار',name_en:'Standing Calf Raise',          category:'legs', icon:'🦵' },
  // بطن وكارديو
  { id:'cable-crunch',        name_ar:'طحن كيبل للبطن بحبل',       name_en:'Kneeling Cable Crunch',         category:'core', icon:'💪' },
  { id:'hanging-leg-raise',   name_ar:'رفع أرجل متعلق على العقلة', name_en:'Hanging Leg/Knee Raise',        category:'core', icon:'🦵' },
  { id:'plank',               name_ar:'بلانك ثبات',                name_en:'Plank Hold',                    category:'core', icon:'📏' },
  { id:'treadmill',           name_ar:'مشاية كهربائية (سير)',      name_en:'Treadmill Running / Incline',   category:'cardio', icon:'🏃' }
];

const STORAGE_KEY_PREFIX = 'gymTracker_v4_';

// ── State ─────────────────────────────────────────────────────────
let lang           = localStorage.getItem('gymTrackerLang') || 'ar';
let users          = ['مصطفى', 'أحمد'];
let currentUser    = 'مصطفى';
let currentData    = { workouts: [], plan: null, lastCheckIn: Date.now() };
let category       = 'all';
let query          = '';
let modalExId      = null;
let modalSets      = [];
let selectedRestSec= 60;
let restRef        = null;
let restRemaining  = 0;

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

const sendBackgroundNotification = (title, body) => {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: './icon-512.png', badge: './icon-512.png' });
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

// ── Storage ───────────────────────────────────────────────────────
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
    currentData = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + currentUser)) || { workouts: [], plan: null, lastCheckIn: Date.now() };
  } catch {
    currentData = { workouts: [], plan: null, lastCheckIn: Date.now() };
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

// ── Plan Algorithm (Smart Coach) ──────────────────────────────────
const generateSmartPlan = (goal, level, days, focus) => {
  let planTitle = '';
  let daysRoutines = [];
  const repScheme = goal === 'bulk' ? '8-12' : (goal === 'cut' ? '12-15' : '5-8');
  const setsCount = level === 'beginner' ? 3 : 4;

  if (days === '3') {
    planTitle = 'Full Body 3x (شامل الجسم 3 أيام)';
    daysRoutines = [
      {
        dayName: 'يوم 1: شامل أ (Full Body A)',
        exercises: ['barbell-squat', 'bench-press', 'lat-pulldown-wide', 'overhead-press-bar', 'barbell-curl', 'cable-crunch']
      },
      {
        dayName: 'يوم 2: شامل ب (Full Body B)',
        exercises: ['deadlift', 'db-incline-press', 'seated-cable-row', 'lateral-raise-db', 'tricep-pushdown-rope', 'plank']
      },
      {
        dayName: 'يوم 3: شامل ج (Full Body C)',
        exercises: ['leg-press', 'chest-fly-db', 'pullup-weighted', 'face-pull', 'hammer-curl', 'treadmill']
      }
    ];
  } else if (days === '4') {
    planTitle = 'Upper / Lower 4x (علوي / سفلي 4 أيام)';
    daysRoutines = [
      {
        dayName: 'يوم 1: جزء علوي أ (Upper A)',
        exercises: ['bench-press', 'barbell-row', 'overhead-press-bar', 'lat-pulldown-close', 'barbell-curl', 'tricep-pushdown-rope']
      },
      {
        dayName: 'يوم 2: جزء سفلي أ (Lower A)',
        exercises: ['barbell-squat', 'lying-leg-curl', 'leg-extension', 'standing-calf-raise', 'hanging-leg-raise']
      },
      {
        dayName: 'يوم 3: جزء علوي ب (Upper B)',
        exercises: ['incline-barbell', 'pullup-weighted', 'db-shoulder-press', 'seated-cable-row', 'preacher-curl', 'skull-crushers']
      },
      {
        dayName: 'يوم 4: جزء سفلي ب (Lower B)',
        exercises: ['leg-press', 'deadlift', 'leg-extension', 'standing-calf-raise', 'cable-crunch']
      }
    ];
  } else {
    planTitle = 'Push / Pull / Legs (PPL Split)';
    daysRoutines = [
      {
        dayName: 'يوم 1: دفع (Push - صدر وأكتاف وتراي)',
        exercises: ['bench-press', 'incline-barbell', 'lateral-raise-db', 'chest-fly-db', 'tricep-pushdown-rope', 'overhead-db-tricep']
      },
      {
        dayName: 'يوم 2: سحب (Pull - ظهر وبايسبس وترابيس)',
        exercises: ['lat-pulldown-wide', 'barbell-row', 'seated-cable-row', 'shrugs-barbell', 'barbell-curl', 'hammer-curl']
      },
      {
        dayName: 'يوم 3: أرجل وبطن (Legs & Abs)',
        exercises: ['barbell-squat', 'leg-press', 'lying-leg-curl', 'leg-extension', 'standing-calf-raise', 'cable-crunch']
      },
      {
        dayName: 'يوم 4: علوي / تركيز ضعف (Upper Focus)',
        exercises: ['db-incline-press', 'pullup-weighted', 'db-shoulder-press', 'face-pull', 'preacher-curl', 'skull-crushers']
      }
    ];
  }

  // Adjust for weak point focus
  if (focus === 'arms') {
    daysRoutines.forEach(d => { if (!d.exercises.includes('hammer-curl')) d.exercises.push('hammer-curl'); });
  } else if (focus === 'chest') {
    daysRoutines.forEach(d => { if (!d.exercises.includes('pec-deck')) d.exercises.push('pec-deck'); });
  }

  return {
    createdAt: Date.now(),
    goal,
    level,
    days,
    focus,
    title: planTitle,
    repScheme,
    setsCount,
    routines: daysRoutines
  };
};

// ── Check-in & Notifications ──────────────────────────────────────
const checkPlanNotifications = () => {
  const badge = $('notif-badge');
  const now = Date.now();
  const daysSinceCheckIn = (now - (currentData.lastCheckIn || 0)) / (1000 * 60 * 60 * 24);

  if (!currentData.plan || daysSinceCheckIn >= 14) {
    badge.classList.add('active');
  } else {
    badge.classList.remove('active');
  }
};

const openNotifModal = () => {
  const container = $('notif-content-box');
  const now = Date.now();
  const daysSinceCheckIn = Math.floor((now - (currentData.lastCheckIn || 0)) / (1000 * 60 * 60 * 24));

  if (!currentData.plan) {
    container.innerHTML = `
      <div class="notif-card">
        <h4>🚀 ابدأ مع المدرب الذكي!</h4>
        <p>لم تقم بإعداد خطتك التدريبية بعد. أجب عن 4 أسئلة وسيقوم النظام بتصميم جدول متكامل يناسب هدفك وجسمك.</p>
        <button type="button" class="btn-notif-act" onclick="openPlanQuizModal()">إعداد الخطة الآن</button>
      </div>`;
  } else {
    container.innerHTML = `
      <div class="notif-card">
        <h4>📊 متابعة الخطة والأداء (Check-in)</h4>
        <p>لقد مر <strong>${daysSinceCheckIn}</strong> يوماً على خطتك الحالية (${currentData.plan.title}). هل تشعر أن الأوزان أصبحت خفيفة أم تحتاج لتعديل الجدول؟</p>
        <button type="button" class="btn-notif-act" onclick="openPlanQuizModal()">تحديث وتعديل الخطة</button>
      </div>
      <div class="notif-card">
        <h4>⚡ نصيحة المدرب لهذا الأسبوع</h4>
        <p>${currentData.plan.goal === 'bulk' ? 'ركز على زيادة نصف كجم إلى كجم في مجموعاتك الأساسية هذا الأسبوع (Progressive Overload) مع تناول بروتين كافٍ.' : 'حافظ على وتيرة راحة قصيرة (45-60 ثانية) لزيادة حرق السعرات أثناء التمرين.'}</p>
      </div>`;
  }

  currentData.lastCheckIn = Date.now();
  saveUserData();
  checkPlanNotifications();

  $('notif-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeNotifModal = () => {
  $('notif-modal').classList.remove('open');
  document.body.style.overflow = '';
};

// ── Render: Plan View ─────────────────────────────────────────────
const renderPlanView = () => {
  const container = $('plan-display-container');
  if (!currentData.plan) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎯</div>
        <p>لا توجد خطة تدريبية مخصصة لـ <strong>${currentUser}</strong> بعد.</p>
        <button type="button" class="btn-save" style="margin-top:14px;" onclick="openPlanQuizModal()">ابدأ مع المدرب الذكي 🚀</button>
      </div>`;
    return;
  }

  const p = currentData.plan;
  container.innerHTML = `
    <div class="coach-header-card">
      <span class="coach-badge">${p.goal === 'bulk' ? 'تضخيم وبناء عضل' : (p.goal === 'cut' ? 'تنشيف وحرق دهون' : 'قوة ولياقة')}</span>
      <h3>${p.title}</h3>
      <p>نظام التكرارات: <strong>${p.repScheme} عدات</strong> لكل مجموعة | المجموعات: <strong>${p.setsCount} مجاميع</strong></p>
      <button type="button" class="btn-user-action" style="margin-top:10px;" onclick="openPlanQuizModal()">تعديل الخطة ⚙️</button>
    </div>
    <div class="plan-routines-list">
      ${p.routines.map((r, rIdx) => `
        <div class="plan-day-card">
          <div class="plan-day-header">
            <h4>${r.dayName}</h4>
            <button type="button" class="btn-user-action" onclick="applyPlanDayToToday(${rIdx})">تمرّن هذا اليوم ⚡</button>
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
  toast(`تم تجهيز تمارين: ${routine.dayName} ✅`);
};

// ── Views & Localization ──────────────────────────────────────────
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
  renderPlanView();
};

const toggleLanguage = () => {
  lang = lang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('gymTrackerLang', lang);
  applyLanguage();
};

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

// ── Render: Today ─────────────────────────────────────────────────
const renderToday = () => {
  const w = todayWorkout();
  const exCount = w.exercises.length;
  const setCount = w.exercises.reduce((s, e) => s + (e.sets ? e.sets.length : 0), 0);

  $('summary-exercises').textContent = exCount;
  $('summary-sets').textContent = setCount;
  updateTimer();

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
    const exName = lang === 'ar' ? ex.name_ar : ex.name_en;
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

// ── Modal Exercise Logger ─────────────────────────────────────────
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

// ── Plan Quiz Modal ───────────────────────────────────────────────
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
  const goal  = $('quiz-goal').value;
  const level = $('quiz-level').value;
  const days  = $('quiz-days').value;
  const focus = $('quiz-focus').value;

  currentData.plan = generateSmartPlan(goal, level, days, focus);
  currentData.lastCheckIn = Date.now();
  saveUserData();

  closePlanQuizModal();
  checkPlanNotifications();
  switchView('plan-view');
  toast('تم توليد الخطة التدريبية بنجاح 🎯');
};

// ── User Management Modal ─────────────────────────────────────────
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
  renderPlanView();
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
  renderPlanView();
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
    renderPlanView();
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
  checkPlanNotifications();
  toast(`👤 ${currentUser}`);
};

// ── Export / Import ───────────────────────────────────────────────
const exportData = () => {
  const allBackup = { users, activeUser: currentUser, data: {} };
  users.forEach(u => {
    allBackup.data[u] = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + u)) || { workouts: [], plan: null };
  });

  const blob = new Blob([JSON.stringify(allBackup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tamriny-backup-${todayISO()}.json`;
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
          localStorage.setItem(STORAGE_KEY_PREFIX + u, JSON.stringify(imported.data[u] || { workouts: [], plan: null }));
        });
        loadUserData();
        renderUserSelect();
        renderHistory();
        renderToday();
        renderPlanView();
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

const toast = (msg, type = 'success') => {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.classList.remove('show'), 2600);
};

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if ('Notification' in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  loadUsers();
  loadUserData();
  applyLanguage();
  checkPlanNotifications();

  $('btn-lang-toggle').addEventListener('click', toggleLanguage);
  $('user-select').addEventListener('change', handleUserSelectChange);
  $('btn-manage-users').addEventListener('click', openUsersModal);
  $('btn-close-users').addEventListener('click', closeUsersModal);
  $('users-modal-backdrop').addEventListener('click', closeUsersModal);
  $('btn-create-user').addEventListener('click', createNewUser);

  $('btn-notifications').addEventListener('click', openNotifModal);
  $('btn-close-notif').addEventListener('click', closeNotifModal);
  $('notif-modal-backdrop').addEventListener('click', closeNotifModal);

  $('quiz-form').addEventListener('submit', handleQuizSubmit);
  $('btn-cancel-quiz').addEventListener('click', closePlanQuizModal);
  $('plan-modal-backdrop').addEventListener('click', closePlanQuizModal);

  const bannerBtn = $('btn-load-plan-day');
  if (bannerBtn) bannerBtn.addEventListener('click', () => applyPlanDayToToday(0));

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
      closePlanQuizModal();
      closeNotifModal();
    }
  });

  switchView('today-view');
  setInterval(updateTimer, 1000);
});
