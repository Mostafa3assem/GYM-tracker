/**
 * تمريني – Gym Workout Tracker
 * Mobile-first, localStorage-backed, Arabic UI
 */

// ── Exercise Library ──────────────────────────────────────────────
const EXERCISES = [
  // صدر (Chest)
  { id:'bench-press',          name:'بنش بريس',         category:'chest',     muscle:'صدر',    icon:'🏋️' },
  { id:'incline-bench',        name:'بنش مائل',         category:'chest',     muscle:'صدر',    icon:'🏋️' },
  { id:'decline-bench',        name:'بنش منحدر',        category:'chest',     muscle:'صدر',    icon:'🏋️' },
  { id:'chest-fly',            name:'فلاي صدر',         category:'chest',     muscle:'صدر',    icon:'🦋' },
  { id:'cable-crossover',      name:'كروس أوفر',        category:'chest',     muscle:'صدر',    icon:'💪' },
  { id:'chest-press-machine',  name:'جهاز ضغط صدر',     category:'chest',     muscle:'صدر',    icon:'🤖' },
  { id:'pec-deck',             name:'بيك ديك',          category:'chest',     muscle:'صدر',    icon:'🦋' },
  // ظهر (Back)
  { id:'lat-pulldown',   name:'سحب علوي',        category:'back', muscle:'ظهر', icon:'🔽' },
  { id:'seated-row',     name:'سحب أفقي',        category:'back', muscle:'ظهر', icon:'🚣' },
  { id:'barbell-row',    name:'تجديف بالبار',     category:'back', muscle:'ظهر', icon:'🏋️' },
  { id:'t-bar-row',      name:'تي بار رو',       category:'back', muscle:'ظهر', icon:'🏋️' },
  { id:'cable-row',      name:'سحب كيبل',        category:'back', muscle:'ظهر', icon:'💪' },
  { id:'back-extension', name:'ظهر خلفي',        category:'back', muscle:'ظهر', icon:'🔙' },
  { id:'pullup',         name:'عقلة',            category:'back', muscle:'ظهر', icon:'🧗' },
  // أكتاف (Shoulders)
  { id:'shoulder-press',         name:'ضغط أكتاف',        category:'shoulders', muscle:'أكتاف', icon:'🏋️' },
  { id:'lateral-raise',          name:'رفع جانبي',        category:'shoulders', muscle:'أكتاف', icon:'🦅' },
  { id:'front-raise',            name:'رفع أمامي',        category:'shoulders', muscle:'أكتاف', icon:'💪' },
  { id:'rear-delt-fly',          name:'خلفي أكتاف',       category:'shoulders', muscle:'أكتاف', icon:'🦋' },
  { id:'upright-row',            name:'سحب عالي',         category:'shoulders', muscle:'أكتاف', icon:'🏋️' },
  { id:'shoulder-press-machine', name:'جهاز ضغط أكتاف',   category:'shoulders', muscle:'أكتاف', icon:'🤖' },
  // ذراع (Arms)
  { id:'bicep-curl',       name:'بايسبس كيرل',      category:'arms', muscle:'ذراع', icon:'💪' },
  { id:'hammer-curl',      name:'هامر كيرل',        category:'arms', muscle:'ذراع', icon:'🔨' },
  { id:'preacher-curl',    name:'بريتشر كيرل',      category:'arms', muscle:'ذراع', icon:'💪' },
  { id:'tricep-pushdown',  name:'تراي بوش داون',    category:'arms', muscle:'ذراع', icon:'⬇️' },
  { id:'overhead-tricep',  name:'تراي فوق الرأس',   category:'arms', muscle:'ذراع', icon:'⬆️' },
  { id:'cable-curl',       name:'كيرل كيبل',        category:'arms', muscle:'ذراع', icon:'💪' },
  { id:'dips',             name:'ديبس',             category:'arms', muscle:'ذراع', icon:'🤸' },
  // أرجل (Legs)
  { id:'squat',          name:'سكوات',           category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'leg-press',      name:'ليج بريس',        category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'leg-extension',  name:'ليج اكستنشن',     category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'leg-curl',       name:'ليج كيرل',        category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'calf-raise',     name:'سمانة',           category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'lunges',         name:'لانجز',           category:'legs', muscle:'أرجل', icon:'🚶' },
  { id:'hack-squat',     name:'هاك سكوات',       category:'legs', muscle:'أرجل', icon:'🤖' },
  // بطن (Core)
  { id:'crunch',         name:'كرانش',       category:'core', muscle:'بطن', icon:'🍫' },
  { id:'plank',          name:'بلانك',       category:'core', muscle:'بطن', icon:'📏' },
  { id:'cable-crunch',   name:'كرانش كيبل',  category:'core', muscle:'بطن', icon:'💪' },
  { id:'leg-raise',      name:'رفع أرجل',    category:'core', muscle:'بطن', icon:'🦵' },
  { id:'russian-twist',  name:'رشن تويست',   category:'core', muscle:'بطن', icon:'🔄' },
  // كارديو (Cardio)
  { id:'treadmill',       name:'مشاية',        category:'cardio', muscle:'كارديو', icon:'🏃' },
  { id:'elliptical',      name:'اليبتيكال',    category:'cardio', muscle:'كارديو', icon:'⛷️' },
  { id:'stationary-bike', name:'عجلة ثابتة',   category:'cardio', muscle:'كارديو', icon:'🚴' },
  { id:'stairmaster',     name:'درج',          category:'cardio', muscle:'كارديو', icon:'🧗' },
];

const STORAGE_KEY = 'gymTrackerData';

// ── State ─────────────────────────────────────────────────────────
let data     = { workouts: [] };
let category = 'all';
let query    = '';
let modalExId = null;
let modal     = { weight: 0, sets: 3, reps: 10, notes: '' };
let timerRef  = null;

// ── Helpers ───────────────────────────────────────────────────────
const $ = (sel) => document.getElementById(sel) || document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const ar = (n) => {
  const d = '٠١٢٣٤٥٦٧٨٩';
  return String(n).replace(/\d/g, c => d[+c]);
};

const todayISO = () => {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
};

const fmtDate = (iso) => {
  const d = new Date(iso + 'T00:00:00');
  return new Intl.DateTimeFormat('ar-EG',{weekday:'long',day:'numeric',month:'long'}).format(d);
};

const fmtTimer = (ms) => {
  if (!ms || ms < 0) return '٠٠:٠٠';
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return ar(String(m).padStart(2,'0')) + ':' + ar(String(s).padStart(2,'0'));
};

const fmtDuration = (ms) => {
  if (!ms || ms < 0) return '٠ دقيقة';
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  if (h > 0) return `${ar(h)} ساعة و ${ar(m)} دقيقة`;
  return `${ar(m)} دقيقة`;
};

// ── Data ──────────────────────────────────────────────────────────
const load = () => {
  try { data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { workouts: [] }; }
  catch { data = { workouts: [] }; }
};
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

const todayWorkout = () => {
  const iso = todayISO();
  let w = data.workouts.find(x => x.date === iso);
  if (!w) {
    w = { id: crypto.randomUUID?.() || Math.random().toString(36).slice(2), date: iso, start: null, end: null, exercises: [] };
    data.workouts.push(w);
    save();
  }
  return w;
};

/** Get the last session for an exercise (before today) */
const lastSession = (exId) => {
  const iso = todayISO();
  for (let i = data.workouts.length - 1; i >= 0; i--) {
    const w = data.workouts[i];
    if (w.date >= iso) continue;
    const ex = w.exercises.find(e => e.id === exId);
    if (ex) return { ...ex, date: w.date };
  }
  return null;
};

// ── Toast ─────────────────────────────────────────────────────────
const toast = (msg, type = 'success') => {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  setTimeout(() => el.classList.remove('show'), 2800);
};

// ── Navigation ────────────────────────────────────────────────────
const switchView = (viewId) => {
  $$('.view').forEach(v => v.classList.remove('active'));
  const target = $(viewId);
  if (target) {
    target.classList.remove('active');
    // Force reflow for animation
    void target.offsetWidth;
    target.classList.add('active');
  }

  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === viewId));

  // Show/hide FAB only on today view
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
  const setCount = w.exercises.reduce((s, e) => s + (e.sets || 0), 0);

  $('summary-exercises').textContent = ar(exCount);
  $('summary-sets').textContent = ar(setCount);
  updateTimer();

  const list = $('today-list');
  if (exCount === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🏋️</div>
        <p>لسه مضفتش تمارين النهارده.<br>اضغط <strong>+</strong> وابدأ تمرينك!</p>
      </div>`;
    return;
  }

  list.innerHTML = w.exercises.map(ex => {
    const def = EXERCISES.find(e => e.id === ex.id);
    if (!def) return '';
    return `
      <div class="today-card">
        <div class="icon">${def.icon}</div>
        <div class="info">
          <h4>${def.name}</h4>
          <p><strong>${ar(ex.weight)} كجم</strong> × ${ar(ex.sets)} مجموعات × ${ar(ex.reps)} تكرار</p>
        </div>
        <button class="remove-btn" onclick="removeExercise('${ex.id}')" aria-label="حذف">✕</button>
      </div>`;
  }).join('');
};

const updateTimer = () => {
  const w = todayWorkout();
  const el = $('summary-timer');
  if (!w.start) { el.textContent = '٠٠:٠٠'; return; }
  el.textContent = fmtTimer(Date.now() - w.start);
};

const startTimerLoop = () => {
  if (timerRef) clearInterval(timerRef);
  timerRef = setInterval(updateTimer, 1000);
};

const removeExercise = (exId) => {
  if (!confirm('حذف التمرين ده؟')) return;
  const w = todayWorkout();
  w.exercises = w.exercises.filter(e => e.id !== exId);
  if (w.exercises.length === 0) w.start = null;
  save();
  renderToday();
  toast('تم الحذف 🗑️', 'error');
};

// ── Render: Library ───────────────────────────────────────────────
const renderLibrary = () => {
  // pills
  $$('.pill').forEach(p => p.classList.toggle('active', p.dataset.category === category));

  let list = EXERCISES;
  if (category !== 'all') list = list.filter(e => e.category === category);
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(e => e.name.includes(q) || e.id.includes(q));
  }

  const todayIds = todayWorkout().exercises.map(e => e.id);
  const grid = $('exercise-grid');

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>مفيش تمارين بالبحث ده 🤷</p></div>';
    return;
  }

  grid.innerHTML = list.map(ex => {
    const last = lastSession(ex.id);
    const done = todayIds.includes(ex.id);
    return `
      <div class="ex-card" onclick="openModal('${ex.id}')">
        ${done ? '<div class="done-badge">✓</div>' : ''}
        <div class="card-icon">${ex.icon}</div>
        <h4>${ex.name}</h4>
        <span class="muscle-tag">${ex.muscle}</span>
        ${last ? `<div class="last-wt">${ar(last.weight)} <small>كجم</small></div>` : '<div class="last-wt" style="color:var(--text3);font-size:.75rem">—</div>'}
      </div>`;
  }).join('');
};

// ── Render: History ───────────────────────────────────────────────
const renderHistory = () => {
  const container = $('history-list');
  const past = [...data.workouts]
    .filter(w => w.exercises.length > 0)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (past.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><p>مفيش سجل تمارين لسه.<br>ابدأ سجّل وراقب تقدمك!</p></div>';
    return;
  }

  container.innerHTML = past.map(w => {
    const dur = w.start && w.end ? fmtDuration(w.end - w.start) : '';
    return `
      <div class="history-card" id="hw-${w.id}">
        <div class="history-header" onclick="toggleHistory('${w.id}')">
          <div>
            <h4>${fmtDate(w.date)}</h4>
            <span class="meta">${ar(w.exercises.length)} تمرين${dur ? ' • ' + dur : ''}</span>
          </div>
          <span class="chevron">▾</span>
        </div>
        <div class="history-details">
          ${w.exercises.map(ex => {
            const def = EXERCISES.find(e => e.id === ex.id);
            return `<div class="history-ex-row">
              <span class="name">${def ? def.name : ex.id}</span>
              <span class="stats"><strong>${ar(ex.weight)}</strong> كجم × ${ar(ex.sets)}×${ar(ex.reps)}</span>
            </div>`;
          }).join('')}
          <div class="history-delete" onclick="deleteWorkout('${w.id}')">حذف هذا اليوم</div>
        </div>
      </div>`;
  }).join('');
};

const toggleHistory = (wId) => {
  const card = document.getElementById(`hw-${wId}`);
  if (card) card.classList.toggle('open');
};

const deleteWorkout = (wId) => {
  if (!confirm('حذف تمارين اليوم ده بالكامل؟')) return;
  data.workouts = data.workouts.filter(w => w.id !== wId);
  save();
  renderHistory();
  toast('تم الحذف', 'error');
};

// ── Modal ─────────────────────────────────────────────────────────
const openModal = (exId) => {
  const def = EXERCISES.find(e => e.id === exId);
  if (!def) return;

  modalExId = exId;
  const last = lastSession(exId);
  const existing = todayWorkout().exercises.find(e => e.id === exId);

  // Populate modal state
  modal.weight = existing?.weight ?? last?.weight ?? 0;
  modal.sets   = existing?.sets   ?? last?.sets   ?? 3;
  modal.reps   = existing?.reps   ?? last?.reps   ?? 10;
  modal.notes  = existing?.notes  ?? '';

  // Update UI
  $('modal-title').textContent = def.name;

  const box = $('last-session-box');
  const txt = $('last-session-text');
  if (last) {
    txt.innerHTML = `آخر مرة: <strong>${ar(last.weight)} كجم</strong> × ${ar(last.reps)} تكرار — ${fmtDate(last.date)}`;
    box.classList.remove('first-time');
  } else {
    txt.textContent = 'أول مرة تلعب التمرين ده! 💪';
    box.classList.add('first-time');
  }

  $('notes-input').value = modal.notes;
  syncModalValues();

  $('exercise-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  $('exercise-modal').classList.remove('open');
  document.body.style.overflow = '';
  modalExId = null;
};

const syncModalValues = () => {
  $('val-weight').textContent = ar(modal.weight);
  $('val-sets').textContent   = ar(modal.sets);
  $('val-reps').textContent   = ar(modal.reps);

  // Weight diff indicator
  const diffEl = $('weight-diff');
  if (!diffEl) return;
  const last = modalExId ? lastSession(modalExId) : null;
  if (last) {
    const diff = modal.weight - last.weight;
    if (diff > 0)      { diffEl.textContent = `↑ +${ar(diff)}`; diffEl.className = 'weight-diff up'; }
    else if (diff < 0) { diffEl.textContent = `↓ ${ar(diff)}`; diffEl.className = 'weight-diff down'; }
    else               { diffEl.textContent = ''; diffEl.className = 'weight-diff'; }
  } else {
    diffEl.textContent = ''; diffEl.className = 'weight-diff';
  }
};

const adjust = (field, delta) => {
  modal[field] = Math.max(field === 'weight' ? 0 : 1, modal[field] + delta);
  syncModalValues();
};

const saveExercise = () => {
  if (!modalExId) return;
  const w = todayWorkout();

  if (!w.start) w.start = Date.now();

  const entry = { id: modalExId, weight: modal.weight, sets: modal.sets, reps: modal.reps, notes: $('notes-input').value.trim(), time: Date.now() };
  const idx = w.exercises.findIndex(e => e.id === modalExId);
  if (idx >= 0) w.exercises[idx] = entry;
  else w.exercises.push(entry);

  w.end = Date.now();
  save();
  closeModal();
  toast('تم حفظ التمرين ✅');

  // Refresh whichever view is visible
  if ($('today-view').classList.contains('active'))   renderToday();
  if ($('library-view').classList.contains('active')) renderLibrary();
};

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  load();

  // Set current date
  const dateEl = $('current-date');
  if (dateEl) dateEl.textContent = fmtDate(todayISO());

  // Nav
  $$('.nav-btn').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));

  // FAB
  $('fab-btn').addEventListener('click', () => switchView('library-view'));

  // Category pills
  $$('.pill').forEach(p => p.addEventListener('click', () => { category = p.dataset.category; renderLibrary(); }));

  // Search
  $('search-input').addEventListener('input', e => { query = e.target.value; renderLibrary(); });

  // Modal stepper buttons
  $$('.stepper-btn').forEach(btn => btn.addEventListener('click', () => {
    adjust(btn.dataset.field, parseFloat(btn.dataset.delta));
  }));

  // Modal save / cancel / backdrop
  $('btn-save').addEventListener('click', saveExercise);
  $('btn-cancel').addEventListener('click', closeModal);
  $('modal-backdrop').addEventListener('click', closeModal);

  // Keyboard escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Start
  switchView('today-view');
  startTimerLoop();
});
