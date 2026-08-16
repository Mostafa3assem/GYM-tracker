/**
 * تمريني – Gym Workout Tracker (PWA Edition)
 */

const EXERCISES = [
  // صدر
  { id:'bench-press',         name:'بنش بريس مستوي',   category:'chest',     muscle:'صدر',    icon:'🏋️' },
  { id:'incline-bench',       name:'بنش مائل عالي',    category:'chest',     muscle:'صدر',    icon:'🏋️' },
  { id:'decline-bench',       name:'بنش مائل هابط',    category:'chest',     muscle:'صدر',    icon:'🏋️' },
  { id:'chest-fly',           name:'تفتيح دامبلز (فلاي)', category:'chest',  muscle:'صدر',    icon:'🦋' },
  { id:'cable-crossover',     name:'كروس أوفر كيبل',   category:'chest',     muscle:'صدر',    icon:'💪' },
  { id:'chest-press-machine', name:'جهاز ضغط الصدر',   category:'chest',     muscle:'صدر',    icon:'🤖' },
  { id:'pec-deck',            name:'بيك ديك (فراشة)',  category:'chest',     muscle:'صدر',    icon:'🦋' },
  // ظهر
  { id:'lat-pulldown',   name:'سحب ظهر عريض',      category:'back', muscle:'ظهر', icon:'🔽' },
  { id:'seated-row',     name:'سحب أرضي ضيق',      category:'back', muscle:'ظهر', icon:'🚣' },
  { id:'barbell-row',    name:'تجديف بالبار (رو)', category:'back', muscle:'ظهر', icon:'🏋️' },
  { id:'t-bar-row',      name:'تي بار رو',         category:'back', muscle:'ظهر', icon:'🏋️' },
  { id:'cable-row',      name:'سحب كيبل فردي',     category:'back', muscle:'ظهر', icon:'💪' },
  { id:'back-extension', name:'قطنية (فيبر)',      category:'back', muscle:'ظهر', icon:'🔙' },
  { id:'pullup',         name:'عقلة',              category:'back', muscle:'ظهر', icon:'🧗' },
  // أكتاف
  { id:'shoulder-press',         name:'ضغط كتف دامبلز',   category:'shoulders', muscle:'أكتاف', icon:'🏋️' },
  { id:'lateral-raise',          name:'رفرفة جانبي',      category:'shoulders', muscle:'أكتاف', icon:'🦅' },
  { id:'front-raise',            name:'رفرفة أمامي',      category:'shoulders', muscle:'أكتاف', icon:'💪' },
  { id:'rear-delt-fly',          name:'رفرفة خلفي',       category:'shoulders', muscle:'أكتاف', icon:'🦋' },
  { id:'upright-row',            name:'سحب بار للذقن',    category:'shoulders', muscle:'أكتاف', icon:'🏋️' },
  { id:'shoulder-press-machine', name:'جهاز ضغط أكتاف',   category:'shoulders', muscle:'أكتاف', icon:'🤖' },
  // ذراع
  { id:'bicep-curl',      name:'بايسبس كيرل بار',     category:'arms', muscle:'ذراع', icon:'💪' },
  { id:'hammer-curl',     name:'هامر كيرل',           category:'arms', muscle:'ذراع', icon:'🔨' },
  { id:'preacher-curl',   name:'بريتشر (لاري سكوت)',  category:'arms', muscle:'ذراع', icon:'💪' },
  { id:'tricep-pushdown', name:'تراي بوش داون حبل',   category:'arms', muscle:'ذراع', icon:'⬇️' },
  { id:'overhead-tricep', name:'تراي فوق الرأس',      category:'arms', muscle:'ذراع', icon:'⬆️' },
  { id:'cable-curl',      name:'كيرل كيبل مزدوج',     category:'arms', muscle:'ذراع', icon:'💪' },
  { id:'dips',            name:'متوازي (ديبس)',       category:'arms', muscle:'ذراع', icon:'🤸' },
  // أرجل
  { id:'squat',         name:'سكوات بار حر',   category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'leg-press',     name:'مكبس أرجل (بريس)', category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'leg-extension', name:'رفرفة أرجل أمامي', category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'leg-curl',      name:'رفرفة أرجل خلفي', category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'calf-raise',    name:'سمانة واقف',      category:'legs', muscle:'أرجل', icon:'🦵' },
  { id:'lunges',        name:'لانجز طعن',      category:'legs', muscle:'أرجل', icon:'🚶' },
  { id:'hack-squat',    name:'هاك سكوات',      category:'legs', muscle:'أرجل', icon:'🤖' },
  // بطن
  { id:'crunch',        name:'كرانش بطن',     category:'core', muscle:'بطن', icon:'🍫' },
  { id:'plank',         name:'بلانك',          category:'core', muscle:'بطن', icon:'📏' },
  { id:'cable-crunch',  name:'طحن كيبل بطن',   category:'core', muscle:'بطن', icon:'💪' },
  { id:'leg-raise',     name:'رفع أرجل للبطن', category:'core', muscle:'بطن', icon:'🦵' },
  // كارديو
  { id:'treadmill',       name:'مشاية سير',    category:'cardio', muscle:'كارديو', icon:'🏃' },
  { id:'stationary-bike', name:'عجلة تمارين',  category:'cardio', muscle:'كارديو', icon:'🚴' },
  { id:'stairmaster',     name:'درج الكارديو', category:'cardio', muscle:'كارديو', icon:'🧗' }
];

const STORAGE_KEY = 'gymTrackerData';

// ── State ─────────────────────────────────────────────────────────
let data       = { workouts: [] };
let category   = 'all';
let query      = '';
let modalExId  = null;
let modal      = { weight: 0, sets: 3, reps: 10, notes: '' };
let timerRef   = null;
let restRef    = null;
let restTimeRemaining = 0;

// ── Helpers ───────────────────────────────────────────────────────
const $ = (sel) => document.getElementById(sel) || document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const todayISO = () => {
  const t = new Date();
  return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
};

const fmtDate = (iso) => {
  const d = new Date(iso + 'T00:00:00');
  return new Intl.DateTimeFormat('ar-EG', { weekday:'long', day:'numeric', month:'long' }).format(d);
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

// ── Storage ───────────────────────────────────────────────────────
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

// ── Toast & Haptic ────────────────────────────────────────────────
const toast = (msg, type = 'success') => {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  if ('vibrate' in navigator) navigator.vibrate(40);
  setTimeout(() => el.classList.remove('show'), 2600);
};

// ── Rest Timer ────────────────────────────────────────────────────
const startRestTimer = (seconds = 60) => {
  if (restRef) clearInterval(restRef);
  restTimeRemaining = seconds;
  const box = $('rest-timer-box');
  const countEl = $('rest-countdown');
  
  box.classList.add('active');
  countEl.textContent = `00:${String(restTimeRemaining).padStart(2,'0')}`;

  restRef = setInterval(() => {
    restTimeRemaining--;
    if (restTimeRemaining <= 0) {
      clearInterval(restRef);
      box.classList.remove('active');
      if ('vibrate' in navigator) navigator.vibrate([150, 80, 150]);
      toast('انتهى وقت الراحة! ابدأ المجموعة القادمة 💪');
    } else {
      const m = Math.floor(restTimeRemaining / 60);
      const s = restTimeRemaining % 60;
      countEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    }
  }, 1000);
};

const cancelRestTimer = () => {
  if (restRef) clearInterval(restRef);
  $('rest-timer-box').classList.remove('active');
};

// ── Views ─────────────────────────────────────────────────────────
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

// ── Render Views ──────────────────────────────────────────────────
const renderToday = () => {
  const w = todayWorkout();
  const exCount = w.exercises.length;
  const setCount = w.exercises.reduce((s, e) => s + (e.sets || 0), 0);

  $('summary-exercises').textContent = exCount;
  $('summary-sets').textContent = setCount;
  updateTimer();

  const list = $('today-list');
  if (exCount === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🏋️</div>
        <p>لم تُضف أي تمارين اليوم.<br>اضغط على <strong>+</strong> وابدأ تمرينك!</p>
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
          <p><strong>${ex.weight} كجم</strong> × ${ex.sets} مجموعات × ${ex.reps} تكرار</p>
        </div>
        <button class="remove-btn" onclick="removeExercise('${ex.id}')" aria-label="حذف">✕</button>
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
  if (!confirm('حذف هذا التمرين من تمرين اليوم؟')) return;
  const w = todayWorkout();
  w.exercises = w.exercises.filter(e => e.id !== exId);
  if (w.exercises.length === 0) w.start = null;
  save();
  renderToday();
  toast('تم حذف التمرين 🗑️', 'error');
};

const renderLibrary = () => {
  $$('.pill').forEach(p => p.classList.toggle('active', p.dataset.category === category));

  let list = EXERCISES;
  if (category !== 'all') list = list.filter(e => e.category === category);
  if (query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(e => e.name.toLowerCase().includes(q) || e.id.includes(q));
  }

  const todayIds = todayWorkout().exercises.map(e => e.id);
  const grid = $('exercise-grid');

  if (list.length === 0) {
    grid.innerHTML = '<div class="empty-state"><p>لا توجد نتائج مطابقة للبحث 🤷</p></div>';
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
        ${last ? `<div class="last-wt">${last.weight} <small>كجم</small></div>` : '<div class="last-wt" style="color:var(--text3);font-size:.8rem">—</div>'}
      </div>`;
  }).join('');
};

const renderHistory = () => {
  const container = $('history-list');
  const past = [...data.workouts]
    .filter(w => w.exercises.length > 0)
    .sort((a, b) => b.date.localeCompare(a.date));

  if (past.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><p>لا يوجد سجل تمارين بعد.<br>ابدأ وسجل بياناتك الآن!</p></div>';
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
            return `<div class="history-ex-row">
              <span class="name">${def ? def.name : ex.id}</span>
              <span class="stats"><strong>${ex.weight}</strong> كجم × ${ex.sets} × ${ex.reps}</span>
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
  if (!confirm('هل أنت متأكد من حذف تمارين هذا اليوم؟')) return;
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

  modal.weight = existing?.weight ?? last?.weight ?? 0;
  modal.sets   = existing?.sets   ?? last?.sets   ?? 3;
  modal.reps   = existing?.reps   ?? last?.reps   ?? 10;
  modal.notes  = existing?.notes  ?? '';

  $('modal-title').textContent = def.name;
  const box = $('last-session-box');
  const txt = $('last-session-text');
  if (last) {
    txt.innerHTML = `آخر مرة: <strong>${last.weight} كجم</strong> × ${last.reps} تكرار (${fmtDate(last.date)})`;
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
  $('val-weight').textContent = modal.weight;
  $('val-sets').textContent   = modal.sets;
  $('val-reps').textContent   = modal.reps;

  const diffEl = $('weight-diff');
  if (!diffEl) return;
  const last = modalExId ? lastSession(modalExId) : null;
  if (last) {
    const diff = modal.weight - last.weight;
    if (diff > 0)      { diffEl.textContent = `↑ +${diff}`; diffEl.className = 'weight-diff up'; }
    else if (diff < 0) { diffEl.textContent = `↓ ${diff}`; diffEl.className = 'weight-diff down'; }
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
  
  if ($('today-view').classList.contains('active'))   renderToday();
  if ($('library-view').classList.contains('active')) renderLibrary();

  startRestTimer(60);
};

// ── Export / Import ───────────────────────────────────────────────
const exportData = () => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tamriny-backup-${todayISO()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('تم تنزيل النسخة الاحتياطية 📥');
};

const importData = (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const imported = JSON.parse(event.target.result);
      if (imported && Array.isArray(imported.workouts)) {
        data = imported;
        save();
        renderHistory();
        renderToday();
        toast('تم استرجاع البيانات بنجاح ✅');
      } else {
        alert('ملف غير صالح');
      }
    } catch {
      alert('خطأ أثناء قراءة الملف');
    }
  };
  reader.readAsText(file);
};

// ── Initialization ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  load();

  const dateEl = $('current-date');
  if (dateEl) dateEl.textContent = fmtDate(todayISO());

  $$('.nav-btn').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
  $('fab-btn').addEventListener('click', () => switchView('library-view'));
  $$('.pill').forEach(p => p.addEventListener('click', () => { category = p.dataset.category; renderLibrary(); }));
  $('search-input').addEventListener('input', e => { query = e.target.value; renderLibrary(); });

  $$('.stepper-btn').forEach(btn => btn.addEventListener('click', () => {
    adjust(btn.dataset.field, parseFloat(btn.dataset.delta));
  }));

  $('btn-save').addEventListener('click', saveExercise);
  $('btn-cancel').addEventListener('click', closeModal);
  $('modal-backdrop').addEventListener('click', closeModal);

  // Rest Timer Controls
  $$('.rest-btn:not(.cancel)').forEach(btn => btn.addEventListener('click', () => {
    startRestTimer(parseInt(btn.dataset.time, 10));
  }));
  $('rest-cancel-btn').addEventListener('click', cancelRestTimer);

  // Backup Controls
  $('btn-export').addEventListener('click', exportData);
  $('import-file-input').addEventListener('change', importData);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  switchView('today-view');
  setInterval(updateTimer, 1000);
});
