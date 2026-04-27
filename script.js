/* ═══════════════════════════════════════════════════════════
   Pocket Thoughts — script.js
   Clean, structured Vanilla JS. No frameworks.
═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Analytics Hook (disabled by default) ────────────────── */
window.POCKET_THOUGHTS_ANALYTICS_ENABLED = false;

function trackEvent(eventName, payload) {
  if (!window.POCKET_THOUGHTS_ANALYTICS_ENABLED) return;
  console.log('Analytics event:', eventName, payload);
}

/* ── Translations ────────────────────────────────────────── */
const translations = {
  en: {
    homeSubtitle:      'Harvest a thought. Let it grow gently.',
    harvestBtn:        'Harvest a thought',
    gardenBtn:         'My Garden',
    harvestEyebrow:    'Three thoughts from the tree',
    backBtn:           '← Back',
    gardenTitle:       'My Garden',
    gardenMeta:        'A quiet space for your chosen thoughts.',
    plantBtn:          'Plant this thought',
    passBtn:           'Let it pass',
    removeBtn:         'Let this thought go',
    menuBackLink:      'Back to Smart Struggle',
    passedMsg:         'Some thoughts are only passing through.',
    plantedMsg:        'Gently planted.',
    gardenFullMsg:     'Your garden is full. Let one thought go to make space.',
    removedMsg:        'The thought is free to drift.',
    emptyGardenMsg:    'Your garden is still waiting.',
    noMoreThoughts:    'All thoughts have been planted. Come back later.',
    menuLabel:         'Open menu',
    langLabel:         'Language selection',
  },
  de: {
    homeSubtitle:      'Ernte einen Gedanken. Lass ihn leise wachsen.',
    harvestBtn:        'Gedanken ernten',
    gardenBtn:         'Mein Garten',
    harvestEyebrow:    'Drei Gedanken vom Baum',
    backBtn:           '← Zurück',
    gardenTitle:       'Mein Garten',
    gardenMeta:        'Ein stiller Ort für deine gewählten Gedanken.',
    plantBtn:          'Diesen Gedanken einpflanzen',
    passBtn:           'Weiterziehen lassen',
    removeBtn:         'Diesen Gedanken ziehen lassen',
    menuBackLink:      'Zurück zu Smart Struggle',
    passedMsg:         'Manche Gedanken ziehen einfach weiter.',
    plantedMsg:        'Sanft eingepflanzt.',
    gardenFullMsg:     'Dein Garten ist voll. Lass einen Gedanken ziehen, um Platz zu schaffen.',
    removedMsg:        'Der Gedanke darf weiterziehen.',
    emptyGardenMsg:    'Dein Garten wartet noch.',
    noMoreThoughts:    'Alle Gedanken sind eingepflanzt. Komm später wieder.',
    menuLabel:         'Menü öffnen',
    langLabel:         'Sprachauswahl',
  }
};

/* ── Thought Pool ────────────────────────────────────────── */
const thoughtPool = [
  /* ── English ── */
  { id: 'en-001', text: "You don't have to solve everything today.", lang: 'en' },
  { id: 'en-002', text: "A thought can visit without staying.", lang: 'en' },
  { id: 'en-003', text: "Your pace is still a pace.", lang: 'en' },
  { id: 'en-004', text: "Softness can be a form of strength.", lang: 'en' },
  { id: 'en-005', text: "A small pause can change the whole day.", lang: 'en' },
  { id: 'en-006', text: "Not everything unfinished is a failure.", lang: 'en' },
  { id: 'en-007', text: "You are allowed to need time.", lang: 'en' },
  { id: 'en-008', text: "Some roots grow before anything is visible.", lang: 'en' },
  { id: 'en-009', text: "Quiet is not the same as empty.", lang: 'en' },
  { id: 'en-010', text: "Rest is not something you earn. It simply belongs to you.", lang: 'en' },
  { id: 'en-011', text: "It's fine to carry less today.", lang: 'en' },
  { id: 'en-012', text: "Not every question needs an answer right now.", lang: 'en' },
  { id: 'en-013', text: "Being gentle with yourself is not giving up.", lang: 'en' },
  { id: 'en-014', text: "Small things add up quietly.", lang: 'en' },
  { id: 'en-015', text: "You don't have to explain your stillness.", lang: 'en' },
  { id: 'en-016', text: "Something is growing, even when you can't see it.", lang: 'en' },
  { id: 'en-017', text: "The day doesn't have to be perfect to be good.", lang: 'en' },
  { id: 'en-018', text: "Presence is its own kind of progress.", lang: 'en' },
  { id: 'en-019', text: "You don't have to be ready. You can begin anyway.", lang: 'en' },
  { id: 'en-020', text: "Letting go is also a way of moving forward.", lang: 'en' },
  { id: 'en-021', text: "A breath taken slowly costs nothing and changes everything.", lang: 'en' },
  { id: 'en-022', text: "Not all growth feels like growth while it's happening.", lang: 'en' },
  { id: 'en-023', text: "You are more than what you produce.", lang: 'en' },
  { id: 'en-024', text: "Some days are for planting. Others are for waiting.", lang: 'en' },
  { id: 'en-025', text: "Uncertainty doesn't mean you're lost.", lang: 'en' },
  { id: 'en-026', text: "It's okay if today was smaller than you hoped.", lang: 'en' },
  { id: 'en-027', text: "Kindness toward yourself is not a luxury.", lang: 'en' },
  { id: 'en-028', text: "You don't have to earn your own care.", lang: 'en' },
  { id: 'en-029', text: "A quiet moment is never wasted.", lang: 'en' },
  { id: 'en-030', text: "Sometimes the bravest thing is simply to stay.", lang: 'en' },
  { id: 'en-031', text: "You don't have to have it figured out yet.", lang: 'en' },
  { id: 'en-032', text: "There is room for you, exactly as you are.", lang: 'en' },
  { id: 'en-033', text: "Slowness is not a sign of failure.", lang: 'en' },
  { id: 'en-034', text: "The work you do on yourself counts too.", lang: 'en' },
  { id: 'en-035', text: "A single honest moment is worth more than a perfect performance.", lang: 'en' },
  { id: 'en-036', text: "You are allowed to change your mind.", lang: 'en' },
  { id: 'en-037', text: "Imperfection is where most real things live.", lang: 'en' },
  { id: 'en-038', text: "You don't need permission to slow down.", lang: 'en' },
  { id: 'en-039', text: "What you tend to quietly still matters.", lang: 'en' },
  { id: 'en-040', text: "Your effort doesn't have to be visible to be real.", lang: 'en' },
  { id: 'en-041', text: "Something ordinary can hold something beautiful.", lang: 'en' },
  { id: 'en-042', text: "You are not behind. You are where you are.", lang: 'en' },
  { id: 'en-043', text: "Even a cloudy day has its own kind of light.", lang: 'en' },
  { id: 'en-044', text: "You don't have to perform your healing.", lang: 'en' },
  { id: 'en-045', text: "It's enough to simply notice how you feel.", lang: 'en' },
  { id: 'en-046', text: "The small decision made with care is still a good decision.", lang: 'en' },
  { id: 'en-047', text: "You can begin again at any point.", lang: 'en' },
  { id: 'en-048', text: "What you carry doesn't have to be carried alone.", lang: 'en' },
  { id: 'en-049', text: "Doing less sometimes means receiving more.", lang: 'en' },
  { id: 'en-050', text: "This moment, right here, is enough.", lang: 'en' },

  /* ── Deutsch ── */
  { id: 'de-001', text: "Du musst heute nicht alles lösen.", lang: 'de' },
  { id: 'de-002', text: "Nicht jeder Gedanke braucht eine Antwort.", lang: 'de' },
  { id: 'de-003', text: "Dein Tempo ist trotzdem ein Tempo.", lang: 'de' },
  { id: 'de-004', text: "Sanftheit kann auch eine Form von Stärke sein.", lang: 'de' },
  { id: 'de-005', text: "Eine kleine Pause kann den ganzen Tag verändern.", lang: 'de' },
  { id: 'de-006', text: "Nicht alles Unfertige ist ein Scheitern.", lang: 'de' },
  { id: 'de-007', text: "Du darfst Zeit brauchen.", lang: 'de' },
  { id: 'de-008', text: "Manche Wurzeln wachsen, bevor irgendetwas sichtbar wird.", lang: 'de' },
  { id: 'de-009', text: "Stille ist nicht dasselbe wie Leere.", lang: 'de' },
  { id: 'de-010', text: "Ruhe ist nichts, das du verdienen musst. Sie gehört dir.", lang: 'de' },
  { id: 'de-011', text: "Es ist in Ordnung, heute weniger zu tragen.", lang: 'de' },
  { id: 'de-012', text: "Nicht jede Frage braucht jetzt eine Antwort.", lang: 'de' },
  { id: 'de-013', text: "Sanft mit dir selbst zu sein ist kein Aufgeben.", lang: 'de' },
  { id: 'de-014', text: "Kleine Dinge summieren sich leise.", lang: 'de' },
  { id: 'de-015', text: "Du musst deine Stille niemandem erklären.", lang: 'de' },
  { id: 'de-016', text: "Etwas wächst, auch wenn du es gerade nicht siehst.", lang: 'de' },
  { id: 'de-017', text: "Der Tag muss nicht perfekt sein, um gut zu sein.", lang: 'de' },
  { id: 'de-018', text: "Dasein ist auch eine Form des Fortschritts.", lang: 'de' },
  { id: 'de-019', text: "Du musst nicht bereit sein. Du kannst trotzdem anfangen.", lang: 'de' },
  { id: 'de-020', text: "Loslassen ist auch eine Art, weiterzugehen.", lang: 'de' },
  { id: 'de-021', text: "Ein langsamer Atemzug kostet nichts und verändert alles.", lang: 'de' },
  { id: 'de-022', text: "Nicht jedes Wachstum fühlt sich nach Wachstum an.", lang: 'de' },
  { id: 'de-023', text: "Du bist mehr als das, was du leistest.", lang: 'de' },
  { id: 'de-024', text: "Manche Tage sind zum Säen. Andere zum Warten.", lang: 'de' },
  { id: 'de-025', text: "Unsicherheit bedeutet nicht, dass du dich verloren hast.", lang: 'de' },
  { id: 'de-026', text: "Es ist in Ordnung, wenn heute kleiner war als erhofft.", lang: 'de' },
  { id: 'de-027', text: "Freundlichkeit dir selbst gegenüber ist kein Luxus.", lang: 'de' },
  { id: 'de-028', text: "Du musst deine eigene Fürsorge nicht verdienen.", lang: 'de' },
  { id: 'de-029', text: "Ein stiller Moment ist nie verschwendet.", lang: 'de' },
  { id: 'de-030', text: "Manchmal ist das Mutigste einfach: bleiben.", lang: 'de' },
  { id: 'de-031', text: "Du musst noch nicht alles verstanden haben.", lang: 'de' },
  { id: 'de-032', text: "Es gibt Raum für dich, genau so wie du bist.", lang: 'de' },
  { id: 'de-033', text: "Langsamkeit ist kein Zeichen von Versagen.", lang: 'de' },
  { id: 'de-034', text: "Auch die Arbeit an dir selbst zählt.", lang: 'de' },
  { id: 'de-035', text: "Ein ehrlicher Moment ist mehr wert als eine perfekte Darstellung.", lang: 'de' },
  { id: 'de-036', text: "Du darfst deine Meinung ändern.", lang: 'de' },
  { id: 'de-037', text: "Im Unvollkommenen lebt das meiste Echte.", lang: 'de' },
  { id: 'de-038', text: "Du brauchst keine Erlaubnis, um langsamer zu werden.", lang: 'de' },
  { id: 'de-039', text: "Was du still pflegst, hat trotzdem Bedeutung.", lang: 'de' },
  { id: 'de-040', text: "Deine Mühe muss nicht sichtbar sein, um wirklich zu sein.", lang: 'de' },
  { id: 'de-041', text: "Im Gewöhnlichen kann etwas Schönes wohnen.", lang: 'de' },
  { id: 'de-042', text: "Du bist nicht hinter. Du bist, wo du bist.", lang: 'de' },
  { id: 'de-043', text: "Auch ein bewölkter Tag hat sein eigenes Licht.", lang: 'de' },
  { id: 'de-044', text: "Du musst dein Heilen nicht zur Schau stellen.", lang: 'de' },
  { id: 'de-045', text: "Es reicht, einfach wahrzunehmen, wie es dir geht.", lang: 'de' },
  { id: 'de-046', text: "Eine kleine Entscheidung mit Sorgfalt ist trotzdem eine gute.", lang: 'de' },
  { id: 'de-047', text: "Du kannst jederzeit neu beginnen.", lang: 'de' },
  { id: 'de-048', text: "Was du trägst, muss nicht allein getragen werden.", lang: 'de' },
  { id: 'de-049', text: "Weniger tun bedeutet manchmal mehr empfangen.", lang: 'de' },
  { id: 'de-050', text: "Dieser Moment, genau hier, ist genug.", lang: 'de' },
];

/* ── Plant Icons ─────────────────────────────────────────── */
const plantIcons = ['🌱', '🌿', '☘️', '🍃', '🌾', '🪴', '🌳', '🌲', '🍀'];

/* ── State ───────────────────────────────────────────────── */
const STATE_KEY = 'pocketThoughtsState';

let state = {
  language:         'en',
  garden:           [],   // [{ id, text, plantedAt, iconIndex }]
  plantedIds:       [],
  recentlyShownIds: [],
  currentHarvest:   [],
  selectedThoughtId: null,
};

/* ── LocalStorage ────────────────────────────────────────── */
function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = Object.assign({}, state, parsed);
    }
  } catch (e) {
    console.warn('Pocket Thoughts: Could not load state.', e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Pocket Thoughts: Could not save state.', e);
  }
}

/* ── Language ────────────────────────────────────────────── */
function detectInitialLanguage() {
  if (state.language) return state.language;
  const nav = (navigator




function detectInitialLanguage() {
  if (state.language) return state.language;
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return nav.startsWith('de') ? 'de' : 'en';
}

function setLanguage(lang) {
  state.language = lang;
  saveState();

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const pressed = btn.getAttribute('data-lang') === lang;
    btn.setAttribute('aria-pressed', String(pressed));
    btn.classList.toggle('active', pressed);
  });

  // Update menu aria-labels
  const menuTrigger = document.getElementById('menu-trigger');
  if (menuTrigger) menuTrigger.setAttribute('aria-label', translations[lang].menuLabel);

  const langGroup = document.querySelector('.lang-toggle');
  if (langGroup) langGroup.setAttribute('aria-label', translations[lang].langLabel);

  // Update garden count badge
  updateGardenBadge();

  // If we're on the harvest screen and there are cards, re-render isn't needed
  // but if garden screen is active, re-render it
  const gardenScreen = document.getElementById('screen-garden');
  if (gardenScreen && gardenScreen.classList.contains('active')) {
    renderGarden();
  }
}

/* ── Thought Selection Logic ─────────────────────────────── */
function getAvailableThoughts() {
  const lang = state.language;
  const pool = thoughtPool.filter(t => t.lang === lang);

  // Always exclude planted thoughts
  const notPlanted = pool.filter(t => !state.plantedIds.includes(t.id));

  // Try excluding recently shown thoughts too
  const COOLDOWN = 18;
  const recent = state.recentlyShownIds.slice(-COOLDOWN);
  const withCooldown = notPlanted.filter(t => !recent.includes(t.id));

  // If enough thoughts with cooldown respected, use those
  if (withCooldown.length >= 3) return withCooldown;

  // Loosen cooldown: use notPlanted (still exclude planted)
  if (notPlanted.length >= 3) return notPlanted;

  // Absolute fallback: only exclude planted
  return notPlanted;
}

function pickRandom(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

/* ── Harvest ─────────────────────────────────────────────── */
function harvestThoughts() {
  const available = getAvailableThoughts();

  if (available.length === 0) {
    showMessage('noMoreThoughts');
    return;
  }

  const count = Math.min(3, available.length);
  const picked = pickRandom(available, count);

  state.currentHarvest = picked.map(t => t.id);
  state.selectedThoughtId = null;
  saveState();

  trackEvent('thought_harvested', {
    thoughtId: state.currentHarvest.join(','),
    language: state.language,
    eventName: 'thought_harvested',
  });

  showScreen('screen-harvest');
  renderHarvestOptions(picked);
}

function renderHarvestOptions(thoughts) {
  const container = document.getElementById('thought-cards');
  const actionsEl = document.getElementById('harvest-actions');

  container.innerHTML = '';
  actionsEl.innerHTML = '';
  actionsEl.classList.remove('visible');

  thoughts.forEach((thought, i) => {
    const card = document.createElement('button');
    card.className = 'thought-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('data-id', thought.id);
    card.setAttribute('aria-pressed', 'false');
    card.textContent = thought.text;

    card.addEventListener('click', () => selectThought(thought.id));

    container.appendChild(card);

    // Staggered entrance
    requestAnimationFrame(() => {
      setTimeout(() => {
        card.classList.add('visible');
      }, 40 + i * 100);
    });
  });
}

function selectThought(thoughtId) {
  state.selectedThoughtId = thoughtId;
  saveState();

  // Highlight selected, dim others
  document.querySelectorAll('.thought-card').forEach(card => {
    const id = card.getAttribute('data-id');
    card.classList.toggle('selected', id === thoughtId);
    card.classList.toggle('dimmed', id !== thoughtId);
    card.setAttribute('aria-pressed', id === thoughtId ? 'true' : 'false');
  });

  renderHarvestActions();
}

function renderHarvestActions() {
  const lang = state.language;
  const t = translations[lang];
  const actionsEl = document.getElementById('harvest-actions');

  actionsEl.innerHTML = '';

  const plantBtn = document.createElement('button');
  plantBtn.className = 'btn btn-sage';
  plantBtn.setAttribute('data-i18n', 'plantBtn');
  plantBtn.textContent = t.plantBtn;
  plantBtn.addEventListener('click', plantSelectedThought);

  const passBtn = document.createElement('button');
  passBtn.className = 'btn btn-ghost';
  passBtn.setAttribute('data-i18n', 'passBtn');
  passBtn.textContent = t.passBtn;
  passBtn.addEventListener('click', letSelectedThoughtPass);

  actionsEl.appendChild(plantBtn);
  actionsEl.appendChild(passBtn);

  requestAnimationFrame(() => {
    actionsEl.classList.add('visible');
  });
}

/* ── Plant ───────────────────────────────────────────────── */
function plantSelectedThought() {
  const id = state.selectedThoughtId;
  if (!id) return;

  if (state.garden.length >= 9) {
    showMessage('gardenFullMsg');
    return;
  }

  const thought = thoughtPool.find(t => t.id === id);
  if (!thought) return;

  // Seed animation
  playSeedAnimation(() => {
    // Add to garden
    const iconIndex = state.garden.length % plantIcons.length;
    state.garden.push({
      id: thought.id,
      text: thought.text,
      plantedAt: Date.now(),
      iconIndex,
    });

    // Mark as planted (permanent exclusion)
    if (!state.plantedIds.includes(id)) {
      state.plantedIds.push(id);
    }

    // Add all 3 harvest IDs to recently shown
    updateRecentlyShown(state.currentHarvest);

    state.currentHarvest = [];
    state.selectedThoughtId = null;
    saveState();

    trackEvent('thought_planted', {
      thoughtId: id,
      language: state.language,
      eventName: 'thought_planted',
    });

    updateGardenBadge();
    showMessage('plantedMsg');
    showScreen('screen-home');
  });
}

function playSeedAnimation(callback) {
  const overlay = document.getElementById('seed-overlay');
  const particle = overlay.querySelector('.seed-particle');

  overlay.removeAttribute('hidden');
  // Reset animation
  particle.style.animation = 'none';
  void particle.offsetWidth; // reflow
  particle.style.animation = '';

  setTimeout(() => {
    overlay.setAttribute('hidden', '');
    if (callback) callback();
  }, 1200);
}

/* ── Let Pass ────────────────────────────────────────────── */
function letSelectedThoughtPass() {
  const id = state.selectedThoughtId;

  // Add all 3 harvest IDs to recently shown (cooldown, not permanent)
  updateRecentlyShown(state.currentHarvest);

  state.currentHarvest = [];
  state.selectedThoughtId = null;
  saveState();

  if (id) {
    trackEvent('thought_passed', {
      thoughtId: id,
      language: state.language,
      eventName: 'thought_passed',
    });
  }

  // Fade out cards
  document.querySelectorAll('.thought-card').forEach(card => {
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';
  });

  setTimeout(() => {
    showMessage('passedMsg');
    showScreen('screen-home');
  }, 480);
}

/* ── Garden ──────────────────────────────────────────────── */
function renderGarden() {
  const grid = document.getElementById('garden-grid');
  const msgEl = document.getElementById('garden-message');
  const lang = state.language;
  const t = translations[lang];

  grid.innerHTML = '';

  const SLOTS = 9;

  for (let i = 0; i < SLOTS; i++) {
    const entry = state.garden[i];
    const slot = document.createElement('div');
    slot.className = 'garden-slot';
    slot.setAttribute('role', 'listitem');

    if (entry) {
      slot.classList.add('planted');
      slot.setAttribute('aria-label', entry.text);
      slot.setAttribute('tabindex', '0');

      const icon = document.createElement('span');
      icon.className = 'plant-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = plantIcons[entry.iconIndex % plantIcons.length];

      slot.appendChild(icon);
      slot.addEventListener('click', () => openGardenThought(entry.id));
      slot.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openGardenThought(entry.id);
        }
      });

      // Animate in with slight delay per slot
      setTimeout(() => {
        slot.classList.add('sprouted');
      }, 60 + i * 60);

    } else {
      slot.classList.add('empty');
      slot.setAttribute('aria-hidden', 'true');

      const emptyIcon = document.createElement('span');
      emptyIcon.className = 'empty-icon';
      emptyIcon.setAttribute('aria-hidden', 'true');
      emptyIcon.textContent = '·';
      slot.appendChild(emptyIcon);
    }

    grid.appendChild(slot);
  }

  // Garden message
  if (state.garden.length === 0) {
    msgEl.textContent = t.emptyGardenMsg;
    msgEl.removeAttribute('hidden');
  } else if (state.garden.length >= 9) {
    msgEl.textContent = t.gardenFullMsg;
    msgEl.removeAttribute('hidden');
  } else {
    msgEl.setAttribute('hidden', '');
  }
}

function openGardenThought(thoughtId) {
  const entry = state.garden.find(g => g.id === thoughtId);
  if (!entry) return;

  const lang = state.language;
  const t = translations[lang];

  const quoteEl = document.getElementById('detail-quote');
  quoteEl.textContent = entry.text;

  const removeBtn = document.getElementById('remove-btn');
  removeBtn.textContent = t.removeBtn;

  // Store current thought for removal
  removeBtn.setAttribute('data-remove-id', thoughtId);

  showScreen('screen-detail');
}

function removeThought(thoughtId) {
  const idx = state.garden.findIndex(g => g.id === thoughtId);
  if (idx === -1) return;

  // Animate removal in garden grid if visible
  const slots = document.querySelectorAll('.garden-slot.planted');
  if (slots[idx]) {
    slots[idx].classList.add('removing');
  }

  setTimeout(() => {
    // Remove from garden
    state.garden.splice(idx, 1);

    // Remove from plantedIds so it can re-enter the pool
    state.plantedIds = state.plantedIds.filter(id => id !== thoughtId);

    // Add to recently shown so it doesn't appear immediately
    updateRecentlyShown([thoughtId]);

    saveState();

    trackEvent('thought_removed', {
      thoughtId,
      language: state.language,
      eventName: 'thought_removed',
    });

    updateGardenBadge();
    showMessage('removedMsg');
    showScreen('screen-garden');
    renderGarden();
  }, 400);
}

/* ── Recently Shown / Cooldown ───────────────────────────── */
function updateRecentlyShown(ids) {
  const LIMIT = 18;
  state.recentlyShownIds = [...state.recentlyShownIds, ...ids].slice(-LIMIT);
  saveState();
}

/* ── Garden Badge ────────────────────────────────────────── */
function updateGardenBadge() {
  const badge = document.getElementById('garden-count-badge');
  if (badge) {
    badge.textContent = state.garden.length;
    badge.style.background = state.garden.length >= 9
      ? 'var(--color-brown)'
      : 'var(--color-sage)';
  }
}

/* ── Screen Transitions ──────────────────────────────────── */
function showScreen(screenId) {
  const allScreens = document.querySelectorAll('.screen');

  allScreens.forEach(screen => {
    if (screen.id === screenId) {
      screen.removeAttribute('hidden');
      screen.classList.add('active');
      screen.removeAttribute('aria-hidden');
      // Scroll to top of the new screen
      screen.scrollTop = 0;
    } else {
      screen.classList.remove('active');
      screen.setAttribute('aria-hidden', 'true');
      // Delay hiding so fade-out plays
      setTimeout(() => {
        if (!screen.classList.contains('active')) {
          screen.setAttribute('hidden', '');
        }
      }, 400);
    }
  });
}

/* ── Toast Messages ──────────────────────────────────────── */
let toastTimer = null;

function showMessage(messageKey) {
  const lang = state.language;
  const t = translations[lang];
  const text = t[messageKey] || messageKey;

  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.classList.add('visible');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3000);
}

/* ── Menu ────────────────────────────────────────────────── */
function initMenu() {
  const trigger = document.getElementById('menu-trigger');
  const menu = document.getElementById('main-menu');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    trigger.setAttribute('aria-expanded', String(!isOpen));
    menu.hidden = isOpen;
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      trigger.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
      trigger.setAttribute('aria-expanded', 'false');
      menu.hidden = true;
      trigger.focus();
    }
  });
}

/* ── Event Listeners ─────────────────────────────────────── */
function initEventListeners() {
  // Harvest button
  document.getElementById('harvest-btn').addEventListener('click', harvestThoughts);

  // Garden button
  document.getElementById('garden-btn').addEventListener('click', () => {
    renderGarden();
    showScreen('screen-garden');
  });

  // Language toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
    });
  });

  // Back buttons
  document.getElementById('back-btn-harvest').addEventListener('click', () => {
    updateRecentlyShown(state.currentHarvest);
    state.currentHarvest = [];
    state.selectedThoughtId = null;
    saveState();
    showScreen('screen-home');
  });

  document.getElementById('back-btn-garden').addEventListener('click', () => {
    showScreen('screen-home');
  });

  document.getElementById('back-btn-detail').addEventListener('click', () => {
    showScreen('screen-garden');
    renderGarden();
  });

  // Remove thought button
  document.getElementById('remove-btn').addEventListener('click', (e) => {
    const id = e.currentTarget.getAttribute('data-remove-id');
    if (id) removeThought(id);
  });
}

/* ── Init ────────────────────────────────────────────────── */
function init() {
  loadState();

  // Detect or restore language
  if (!state.language) {
    state.language = detectInitialLanguage();
    saveState();
  }

  // Apply language (translations + toggle state)
  setLanguage(state.language);

  // Set up menu
  initMenu();

  // Bind all UI events
  initEventListeners();

  // Update garden badge
  updateGardenBadge();

  // Show home screen
  showScreen('screen-home');
}

/* ── Boot ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', init);
