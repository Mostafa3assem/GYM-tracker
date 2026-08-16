/**
 * تمريني – Multi-User & Set-by-Set Workout Tracker Pro
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

const STORAGE_KEY_PREFIX = 'gymTracker_v2_';

// ── State ─────────────────────────────────────────────────────────
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

// ── Audio Beep for iOS ────────────────────────────────────────────
const playBeep = () => {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime); // 880Hz Beep
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
};

// ── Storage & User Switching ──────────────────────────────────────
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

// ── Toast & Haptic ────────────────────────────────────────────────
const toast = (msg, type = 'success') => {
  const el = $('toast');
  el.textContent = msg;
  el.className = `toast ${type} show`;
  if ('vibrate' in navigator) navigator.vibrate(40);
  setTimeout(() => el.classList.remove('show'), 2600);
};

// ── Rest Timer ────────────────────────────────────────────────────
const startRestTimer = (seconds) => {
  if (seconds <= 0) return;
  if (restRef) clearInterval(restRef);
  restRemaining = seconds;
  const box = $('rest-timer-box');
  const countEl = $('rest-countdown');

  box.classList.add('active');
  updateRestDisplay();

  restRef = setInterval(() => {
    restRemaining--;
    if (restRemaining <= 0) {
      clearInterval(restRef);
      box.classList.remove('active');
      playBeep();
      if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
      toast('🔔 انتهى وقت الراحة! ابدأ مجموعتك التالية 💪');
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
        <p>مرحباً <strong>${currentUser}</strong>! لم تسجل تمارين اليوم بعد.<br>اضغط على <strong>+</strong> وابدأ تمرينك الآن!</p>
      </div>`;
    return;
  }

  list.innerHTML = w.exercises.map(ex => {
    const def = EXERCISES.find(e => e.id === ex.id);
    if (!def) return '';
    const setsChips = (ex.sets || []).map((s, idx) => `
      <span class="set-chip">م${idx+1}: <strong>${s.weight}كجم</strong> × ${s.reps}</span>
    `).join('');

    return `
      <div class="today-card">
        <div class="today-card-top">
          <div class="icon">${def.icon}</div>
          <div class="info">
            <h4>${def.name}</h4>
          </div>
          <button class="edit-btn" onclick="openModal('${ex.id}')">تعديل</button>
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
  if (!confirm('حذف هذا التمرين من تمرين اليوم؟')) return;
  const w = todayWorkout();
  w.exercises = w.exercises.filter(e => e.id !== exId);
  if (w.exercises.length === 0) w.start = null;
  saveUserData();
  renderToday();
  toast('تم حذف التمرين 🗑️', 'error');
};

// ── Render: Library ───────────────────────────────────────────────
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
    grid.innerHTML = '<div class="empty-state"><p>لا توجد نتائج مطابقة 🤷</p></div>';
    return;
  }

  grid.innerHTML = list.map(ex => {
    const last = lastSession(ex.id);
    const done = todayIds.includes(ex.id);
    let lastSummary = '—';
    if (last && last.sets && last.sets.length) {
      const maxWt = Math.max(...last.sets.map(s => s.weight));
      lastSummary = `آخر مرة: ${maxWt} كجم`;
    }

    return `
      <div class="ex-card" onclick="openModal('${ex.id}')">
        ${done ? '<div class="done-badge">✓</div>' : ''}
        <div class="card-icon">${ex.icon}</div>
        <h4>${ex.name}</h4>
        <span class="muscle-tag">${ex.muscle}</span>
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
            const setsTxt = (ex.sets || []).map((s, i) => `[م${i+1}: ${s.weight}كجم × ${s.reps}]`).join(' ');
            return `
              <div class="history-ex-row">
                <div class="ex-title">${def ? def.name : ex.id}</div>
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
  toast('تم الحذف', 'error');
};

// ── Sets Modal Logic ──────────────────────────────────────────────
const openModal = (exId) => {
  const def = EXERCISES.find(e => e.id === exId);
  if (!def) return;

  modalExId = exId;
  const existing = todayWorkout().exercises.find(e => e.id === exId);
  const last = lastSession(exId);

  $('modal-title').textContent = def.name;

  if (last && last.sets && last.sets.length) {
    const lastSetsStr = last.sets.map((s, i) => `م${i+1}: ${s.weight}كجم×${s.reps}`).join(' | ');
    $('last-session-text').innerHTML = `آخر تمرين (${fmtDate(last.date)}):<br><strong>${lastSetsStr}</strong>`;
  } else {
    $('last-session-text').textContent = 'أول مرة تلعب هذا التمرين! 💪';
  }

  // Populate Sets
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
    <div class="set-row" data-index="${idx}">
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
  toast('تم حفظ التمرين ✅');

  if ($('today-view').classList.contains('active'))   renderToday();
  if ($('library-view').classList.contains('active')) renderLibrary();

  startRestTimer(selectedRestSec);
};

// ── Multi-User Management ─────────────────────────────────────────
const renderUserSelect = () => {
  const sel = $('user-select');
  sel.innerHTML = users.map(u => `<option value="${u}" ${u === currentUser ? 'selected' : ''}>${u}</option>`).join('');
};

const handleUserChange = (e) => {
  currentUser = e.target.value;
  saveUsers();
  loadUserData();
  renderToday();
  toast(`تم التبديل إلى المتدرب: ${currentUser} 👤`);
};

const handleAddUser = () => {
  const name = prompt('أدخل اسم المتدرب الجديد:');
  if (!name || !name.trim()) return;
  const cleanName = name.trim();
  if (!users.includes(cleanName)) {
    users.push(cleanName);
    currentUser = cleanName;
    saveUsers();
    loadUserData();
    renderUserSelect();
    renderToday();
    toast(`تمت إضافة ${cleanName} بنجاح 🎉`);
  }
};

// ── Backup / Restore ──────────────────────────────────────────────
const exportData = () => {
  const allBackup = {
    users: users,
    activeUser: currentUser,
    data: {}
  };
  users.forEach(u => {
    allBackup.data[u] = JSON.parse(localStorage.getItem(STORAGE_KEY_PREFIX + u)) || { workouts: [] };
  });

  const blob = new Blob([JSON.stringify(allBackup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `tamriny-all-users-${todayISO()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('تم تصدير نسخة احتياطية لجميع المتدربين 📥');
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
        toast('تم استرجاع بيانات جميع المتدربين بنجاح ✅');
      } else {
        alert('ملف غير صالح');
      }
    } catch {
      alert('خطأ أثناء قراءة الملف');
    }
  };
  reader.readAsText(file);
};

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadUsers();
  loadUserData();

  const dateEl = $('current-date');
  if (dateEl) dateEl.textContent = fmtDate(todayISO());

  renderUserSelect();
  $('user-select').addEventListener('change', handleUserChange);
  $('btn-add-user').addEventListener('click', handleAddUser);

  $$('.nav-btn').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));
  $('fab-btn').addEventListener('click', () => switchView('library-view'));
  $$('.pill').forEach(p => p.addEventListener('click', () => { category = p.dataset.category; renderLibrary(); }));
  $('search-input').addEventListener('input', e => { query = e.target.value; renderLibrary(); });

  $('btn-add-set').addEventListener('click', addSetRow);
  $('btn-save').addEventListener('click', saveExerciseModal);
  $('btn-cancel').addEventListener('click', closeModal);
  $('modal-backdrop').addEventListener('click', closeModal);

  // Rest Timer selection
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

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  switchView('today-view');
  setInterval(updateTimer, 1000);
});
