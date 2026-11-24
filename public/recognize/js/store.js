/* Progress + settings in localStorage.
 *  - Settings (incl. the language pair) are global:            etrnl.settings.v1
 *  - Progress is per LEARNED language (FSRS cards, log, later): gt.progress.v1 (German, unchanged legacy key),
 *                                                               etrnl.progress.en.v1, etrnl.progress.ru.v1
 *  - The "I know" language never changes progress: a German card is the same card whether its gloss is RU or EN.
 *  - The old standalone English app (etrnl.english.progress.v1, simple interval scheduler) is converted once
 *    into FSRS cards on first use of the English pack. The legacy key itself is never modified.
 * JSON export contains every language; import accepts the unified file, old German and old English exports. */
(function () {
  'use strict';
  var SETTINGS_KEY = 'etrnl.settings.v1';
  var KEYS = { de: 'gt.progress.v1', en: 'etrnl.progress.en.v1', ru: 'etrnl.progress.ru.v1' };
  var LEGACY_EN_KEY = 'etrnl.english.progress.v1';
  var SCHEMA_VERSION = 2;
  var DAY = 86400000;
  var DEFAULT_SETTINGS = {
    newPerSession: 10,
    typing: false,
    showRu: true,
    reviewModes: 'mix',        // 'mix' | 'meaning' | 'cloze' (for #prod cards)
    reviewDirection: 'both',   // 'both' | 'rec' | 'prod'
    retention: 0.9,
    showMediumWhy: true,       // show WHY? notes with confidence 'medium'
    hideSidePractice: false,   // hide the "Practice now" box in the sidebar
    theme: 'orbit',            // see THEMES in app.js
    speechRate: 0.9,
    speechVoice: 'auto',       // German voice (legacy name); other languages: speechVoice_<lang>
    knowLang: 'ru',            // "I know"
    learnLang: 'de'            // "I learn"
  };
  function keyFor(lang) { return KEYS[lang] || ('etrnl.progress.' + lang + '.v1'); }

  /* ---- unified clock ----
   * Every sync-relevant timestamp is UTC epoch ms (timezone-independent). Device clocks can still drift,
   * so after each Google Drive write we measure the offset to Google's server clock (file modifiedTime)
   * and GT.now() = Date.now() + offset. All devices then stamp reviews/deletions on the same timeline. */
  var CLOCK_KEY = 'etrnl.clock.v1';
  var clockOffset = 0;
  try { clockOffset = Number(JSON.parse(localStorage.getItem(CLOCK_KEY) || '{}').offset) || 0; } catch (e) {}
  if (Math.abs(clockOffset) > 7 * DAY) clockOffset = 0;
  function now() { return Date.now() + clockOffset; }
  GT.now = now;
  function setClockOffset(off) {
    if (!Number.isFinite(off) || Math.abs(off) > 7 * DAY) return;
    clockOffset = Math.abs(off) < 1500 ? 0 : Math.round(off);   // ignore network jitter
    try { localStorage.setItem(CLOCK_KEY, JSON.stringify({ offset: clockOffset, at: Date.now() })); } catch (e) {}
  }

  function fresh(lang) {
    return {
      version: SCHEMA_VERSION,
      language: lang,
      created: Date.now(),
      cards: {},          // <id>#rec / <id>#prod (or <id> for drills) -> FSRS card
      later: {},          // item id -> timestamp ("Later" in learn sessions)
      deleted: {},        // card key -> timestamp of removal (tombstone, so other devices don't resurrect it)
      resetAt: 0,         // timestamp of the last "reset progress" (older cards from other devices are dropped)
      log: {},            // 'YYYY-MM-DD' -> { reviews, learned }
      lastPractice: null,
      lastExport: null
    };
  }

  function isDrillKey(k) {
    var it = self.GT && GT.byId && GT.byId[k];
    if (it) return it.type === 'drill';
    return /^(g-|grammar:|affix:|ru-g-|ru-sf-)/.test(k);
  }

  /** Migrate v1 cards (plain item id) -> v2 (<id>#rec + <id>#prod for known, <id>#prod for active). */
  function migrateCards(rawCards) {
    var out = {}, changed = false;
    Object.keys(rawCards || {}).forEach(function (k) {
      var c = rawCards[k];
      if (!c || typeof c !== 'object') return;
      if (/#(rec|prod)$/.test(k) || isDrillKey(k)) { out[k] = c; return; }
      changed = true;
      if (c.state === 'known') {
        if (!out[k + '#rec']) out[k + '#rec'] = Object.assign({}, c);
        if (!out[k + '#prod']) out[k + '#prod'] = Object.assign({}, c);
      } else if (!out[k + '#prod']) out[k + '#prod'] = Object.assign({}, c);
    });
    return { cards: out, changed: changed };
  }

  function normalize(d, lang) {
    var f = fresh(lang);
    if (!d || typeof d !== 'object') return { data: f, migrated: false, settings: null };
    var rawCards = d.cards && typeof d.cards === 'object' ? d.cards : {};
    var needsMig = (d.version || 1) < SCHEMA_VERSION || Object.keys(rawCards).some(function (k) {
      return !/#(rec|prod)$/.test(k) && !isDrillKey(k);
    });
    var mig = needsMig ? migrateCards(rawCards) : { cards: rawCards, changed: false };
    return {
      migrated: (d.version || 1) < SCHEMA_VERSION || mig.changed,
      settings: d.settings && typeof d.settings === 'object' ? d.settings : null,
      data: {
        version: SCHEMA_VERSION,
        language: lang,
        created: d.created || f.created,
        cards: mig.cards,
        later: d.later && typeof d.later === 'object' ? d.later : {},
        deleted: d.deleted && typeof d.deleted === 'object' ? d.deleted : {},
        resetAt: Number(d.resetAt) || 0,
        log: d.log && typeof d.log === 'object' ? d.log : {},
        lastPractice: d.lastPractice || null,
        lastExport: d.lastExport || null
      }
    };
  }

  /* ---- legacy English (interval scheduler) -> FSRS ---- */
  function legacyEnKey(k) {
    var m = /^(.+)#(rec|prod)$/.exec(k);
    if (!m) return null;
    if (/^grammar:/.test(m[1])) return m[2] === 'rec' ? m[1] : m[1] + '~prod';
    if (/^affix:/.test(m[1])) return m[2] === 'rec' ? m[1] : null;
    return k;
  }
  function legacyEnCard(c, now) {
    if (!c || typeof c !== 'object') return null;
    var due = Number(c.due) || now;
    if (c.known) return { state: 'known', known: now, last: now, added: now };
    if (!c.reps) { var n = GT.fsrs.newCard(now); n.due = due; n.added = now; return n; }
    var ivl = Math.max(0, Number(c.interval) || 0);
    return {
      state: ivl >= 1 ? 'review' : 'learning',
      s: Math.max(0.5, ivl), d: c.grade >= 4 ? 4 : c.grade === 1 ? 7 : 5,
      due: due, last: Math.max(0, due - ivl * DAY), reps: c.reps || 0, lapses: c.lapses || 0, added: now
    };
  }
  function convertLegacyEnglish(v) {
    if (!v || v.schemaVersion !== 1 || v.language !== 'en' || !v.cards) throw new Error('Not an English progress export.');
    var d = fresh('en'), now = Date.now();
    Object.keys(v.cards).forEach(function (k) {
      var nk = legacyEnKey(k), nc = nk && legacyEnCard(v.cards[k], now);
      if (nk && nc) d.cards[nk] = nc;
    });
    if (v.later && typeof v.later === 'object') Object.keys(v.later).forEach(function (id) { if (Number.isFinite(v.later[id])) d.later[id] = v.later[id]; });
    d.importedFrom = LEGACY_EN_KEY;
    return d;
  }

  var storageOk = true;
  function readJSON(key) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; }
    catch (e) { storageOk = false; return null; }
  }
  function writeJSON(key, v) {
    try { localStorage.setItem(key, JSON.stringify(v)); return true; }
    catch (e) { storageOk = false; return false; }
  }

  /* ---- settings (global) ---- */
  var settings = (function () {
    var s = readJSON(SETTINGS_KEY) || {};
    var de = readJSON(KEYS.de);   // settings of the former German-only app sit underneath (first run, partial files)
    return Object.assign({}, DEFAULT_SETTINGS, de && de.settings ? de.settings : {}, s);
  })();

  var datas = {};      // lang -> progress data
  var active = settings.learnLang || 'de';

  function loadLang(lang) {
    if (datas[lang]) return datas[lang];
    var raw = readJSON(keyFor(lang)), res;
    if (!raw && lang === 'en') {
      var legacy = readJSON(LEGACY_EN_KEY);
      if (legacy) {
        try { datas.en = convertLegacyEnglish(legacy); writeJSON(keyFor('en'), datas.en); return datas.en; }
        catch (e) { /* unreadable legacy file: start fresh, legacy key untouched */ }
      }
    }
    res = normalize(raw, lang);
    datas[lang] = res.data;
    if (res.migrated) writeJSON(keyFor(lang), res.data);
    return datas[lang];
  }

  function dayKey(ts) {
    var d = ts ? new Date(ts) : new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function baseId(key) { return String(key || '').replace(/#(rec|prod)$/, ''); }
  function D() { return loadLang(active); }

  /* ---- merge across devices (last-writer-wins on the unified clock) ----
   *  - Per card: the card touched most recently (max of last / known / added) wins. A tie prefers Known,
   *    then more reps. Earliest `added` is kept.
   *  - deleted (tombstones): a card is dropped when its removal is newer than its last change.
   *  - resetAt: cards / later / log older than the latest reset are dropped.
   *  - later: union (max timestamp), minus any item that already has a card.
   *  - log: per-day max of reviews and learned (idempotent across repeated syncs). */
  function cardTs(c) { return Math.max(Number(c && c.last) || 0, Number(c && c.known) || 0, Number(c && c.added) || 0); }
  function mergeCard(a, b) {
    if (!a || typeof a !== 'object') return Object.assign({}, b);
    if (!b || typeof b !== 'object') return Object.assign({}, a);
    var added = Math.min(a.added || Infinity, b.added || Infinity);
    var ta = cardTs(a), tb = cardTs(b), win;
    if (ta !== tb) win = tb > ta ? b : a;
    else if ((a.state === 'known') !== (b.state === 'known')) win = b.state === 'known' ? b : a;
    else if ((b.reps || 0) !== (a.reps || 0)) win = (b.reps || 0) > (a.reps || 0) ? b : a;
    else win = (b.due || 0) >= (a.due || 0) ? b : a;
    var out = Object.assign({}, win);
    if (Number.isFinite(added)) out.added = added;
    return out;
  }

  function mergeLangData(localD, incD, lang) {
    var a = normalize(localD, lang).data;
    var b = normalize(incD, lang).data;
    var resetAt = Math.max(a.resetAt || 0, b.resetAt || 0);
    var deleted = {};
    [a.deleted, b.deleted].forEach(function (src) {
      Object.keys(src).forEach(function (k) { var t = Number(src[k]) || 0; if (t > resetAt && t > (deleted[k] || 0)) deleted[k] = t; });
    });
    var cards = {};
    Object.keys(a.cards).forEach(function (k) { cards[k] = Object.assign({}, a.cards[k]); });
    Object.keys(b.cards).forEach(function (k) {
      cards[k] = cards[k] ? mergeCard(cards[k], b.cards[k]) : Object.assign({}, b.cards[k]);
    });
    Object.keys(cards).forEach(function (k) {
      var t = cardTs(cards[k]);
      if ((resetAt && t < resetAt) || (deleted[k] && t <= deleted[k])) delete cards[k];
      else delete deleted[k];
    });
    var later = {};
    Object.keys(a.later).forEach(function (id) { later[id] = a.later[id]; });
    Object.keys(b.later).forEach(function (id) { later[id] = Math.max(later[id] || 0, b.later[id] || 0); });
    Object.keys(later).forEach(function (id) { if (resetAt && later[id] < resetAt) delete later[id]; });
    Object.keys(cards).forEach(function (k) { delete later[baseId(k)]; });
    var resetDay = resetAt ? dayKey(resetAt) : '';
    var log = {};
    [a.log, b.log].forEach(function (src) {
      Object.keys(src).forEach(function (day) {
        if (resetDay && day < resetDay) return;
        var prev = log[day] || { reviews: 0, learned: 0 }, cur = src[day] || {};
        log[day] = { reviews: Math.max(prev.reviews, cur.reviews || 0), learned: Math.max(prev.learned, cur.learned || 0) };
      });
    });
    var lp = Math.max(a.lastPractice || 0, b.lastPractice || 0);
    return {
      version: SCHEMA_VERSION,
      language: lang,
      created: Math.min(a.created || Date.now(), b.created || Date.now()),
      cards: cards,
      later: later,
      deleted: deleted,
      resetAt: resetAt,
      log: log,
      lastPractice: lp && lp >= resetAt ? lp : null,
      lastExport: Math.max(a.lastExport || 0, b.lastExport || 0) || null
    };
  }

  /** Order-independent fingerprint of progress: tells whether the local merge has anything the remote file lacks. */
  function stableStr(v) {
    if (v === null || typeof v !== 'object') return JSON.stringify(v === undefined ? null : v);
    if (Array.isArray(v)) return '[' + v.map(stableStr).join(',') + ']';
    return '{' + Object.keys(v).sort().filter(function (k) { return v[k] !== undefined; }).map(function (k) { return JSON.stringify(k) + ':' + stableStr(v[k]); }).join(',') + '}';
  }
  function progressPrint(progress) {
    var out = {};
    Object.keys(progress || {}).sort().forEach(function (lang) {
      var d = normalize(progress[lang], lang).data;
      if (!Object.keys(d.cards).length && !Object.keys(d.later).length && !Object.keys(d.log).length &&
          !Object.keys(d.deleted).length && !d.resetAt) return;
      out[lang] = { cards: d.cards, later: d.later, deleted: d.deleted, resetAt: d.resetAt, log: d.log };
    });
    return stableStr(out);
  }

  function parseImportText(text) {
    if (typeof text !== 'string' || text.length > 20000000) throw new Error('File is too large.');
    var parsed = JSON.parse(text), next = {}, newSettings = null;
    if (parsed && parsed.app === 'etrnl' && parsed.progress && typeof parsed.progress === 'object') {
      Object.keys(parsed.progress).forEach(function (lang) {
        if (!/^[a-z]{2}$/.test(lang)) throw new Error('Unknown language in file: ' + lang);
        var p = parsed.progress[lang];
        if (!p || typeof p !== 'object' || !p.cards || typeof p.cards !== 'object') throw new Error('Invalid progress for ' + lang + '.');
        next[lang] = normalize(p, lang).data;
      });
      if (parsed.settings && typeof parsed.settings === 'object') newSettings = parsed.settings;
    } else if (parsed && parsed.schemaVersion === 1 && parsed.language === 'en') {
      next.en = convertLegacyEnglish(parsed);
    } else {
      var p2 = parsed && parsed.progress ? parsed.progress : parsed;
      if (!p2 || typeof p2 !== 'object' || !p2.cards || typeof p2.cards !== 'object') {
        throw new Error('This file does not look like an ETRNL progress export.');
      }
      var res = normalize(p2, 'de');   // old ETRNL / DEUTSCH export
      next.de = res.data;
      newSettings = res.settings;
    }
    return { next: next, settings: newSettings };
  }

  var suppressAutoSync = false;
  var scheduleAutoSync = function () {};

  var store = {
    get data() { return D(); },
    get settings() { return settings; },
    get lang() { return active; },
    /** Switch the active learned language (progress). Never touches other languages. */
    use: function (lang) { active = lang; loadLang(lang); },
    dataFor: function (lang) { return loadLang(lang); },
    storageOk: function () { return storageOk; },
    save: function () {
      var d = D(), ok = true;
      var out = d;
      // Keep the legacy German shape (settings inside) so old tooling / exports keep working.
      if (active === 'de') out = Object.assign({}, d, { settings: settings });
      ok = writeJSON(keyFor(active), out) && ok;
      ok = writeJSON(SETTINGS_KEY, settings) && ok;
      try { localStorage.setItem('gt.theme', settings.theme); } catch (e) { ok = false; }
      if (!ok && GT.toast) GT.toast('Could not save progress. Storage is blocked or full. Export your progress.');
      if (!suppressAutoSync) scheduleAutoSync();
    },
    saveSettings: function () {
      writeJSON(SETTINGS_KEY, settings);
      try { localStorage.setItem('gt.theme', settings.theme); } catch (e) {}
    },
    card: function (key) { return D().cards[key] || null; },
    cardsForItem: function (id) {
      var c = D().cards;
      return { rec: c[id + '#rec'] || null, prod: c[id + '#prod'] || null };
    },
    hasAnyCard: function (id) {
      var it = GT.byId[id], c = D().cards;
      if (it && it.type === 'drill') return !!c[id];
      return !!(c[id + '#rec'] || c[id + '#prod'] || c[id]);
    },
    setCard: function (key, card) {
      var d = D();
      d.cards[key] = card;
      delete d.deleted[key];
      delete d.later[baseId(key)];
      store.save();
    },
    setItemKnown: function (id, now) {
      var d = D(), c = { state: 'known', known: now, last: now, added: now };
      d.cards[id + '#rec'] = Object.assign({}, c);
      d.cards[id + '#prod'] = Object.assign({}, c);
      delete d.later[id];
      store.save();
    },
    addItemToReview: function (id, now, dirs) {
      var d = D();
      (dirs || ['rec', 'prod']).forEach(function (dir) {
        var nc = GT.fsrs.newCard(now);
        nc.added = now;
        d.cards[id + '#' + dir] = nc;
      });
      delete d.later[id];
      store.save();
    },
    removeCard: function (key) {
      var d = D();
      if (d.cards[key]) d.deleted[key] = Math.max(now(), cardTs(d.cards[key]) + 1);
      delete d.cards[key];
      store.save();
    },
    removeItem: function (id) {
      var d = D(), t = now();
      [id, id + '#rec', id + '#prod'].forEach(function (k) {
        if (d.cards[k]) d.deleted[k] = Math.max(t, cardTs(d.cards[k]) + 1);
        delete d.cards[k];
      });
      store.save();
    },
    markLater: function (id) { D().later[id] = now(); store.save(); },
    setSetting: function (k, v) { settings[k] = v; store.save(); },
    dayKey: dayKey,
    logActivity: function (kind, n) {
      var d = D(), k = dayKey();
      var e = d.log[k] || (d.log[k] = { reviews: 0, learned: 0 });
      e[kind] = (e[kind] || 0) + (n || 1);
      store.save();
    },
    markPracticed: function () { D().lastPractice = now(); store.save(); },

    buildPayload: function (markExport) {
      var now = Date.now(), progress = {};
      Object.keys(Object.assign({}, KEYS, datas)).forEach(function (lang) {
        var d = loadLang(lang);
        if (markExport && lang === active) d.lastExport = now;
        if (Object.keys(d.cards).length || Object.keys(d.later).length || Object.keys(d.log).length ||
            Object.keys(d.deleted || {}).length || d.resetAt || lang === active) {
          progress[lang] = d;
        }
      });
      return { app: 'etrnl', format: 3, exportedAt: new Date(now).toISOString(), settings: settings, progress: progress };
    },

    exportJSON: function () {
      var payload = store.buildPayload(true);
      store.save();
      var blob = new Blob([JSON.stringify(payload, null, 1)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'etrnl-progress-' + dayKey() + '.json';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    },

    /**
     * Imports a JSON export string. By default (`!opts.replace`), MERGES incoming cards, later and log
     * with local progress so no cards or Known markers are lost. Pass `{ replace: true }` to overwrite.
     * Validates everything before changing data.
     */
    importJSON: function (text, opts) {
      opts = opts || {};
      var parsed = parseImportText(text), next = parsed.next, newSettings = parsed.settings;
      var langs = Object.keys(next);
      if (!langs.length) throw new Error('The file contains no progress.');
      var replace = !!opts.replace;
      langs.forEach(function (lang) {
        var merged = replace ? next[lang] : mergeLangData(loadLang(lang), next[lang], lang);
        datas[lang] = merged;
        writeJSON(keyFor(lang), lang === 'de' ? Object.assign({}, merged, { settings: settings }) : merged);
      });
      if (newSettings && !opts.keepSettings) {
        var keepPair = { knowLang: settings.knowLang, learnLang: settings.learnLang };
        Object.assign(settings, DEFAULT_SETTINGS, newSettings, newSettings.knowLang ? {} : keepPair);
      }
      suppressAutoSync = !!opts.fromSync;
      try { store.save(); } finally { suppressAutoSync = false; }
      var verb = replace ? 'replaced' : 'merged';
      return langs.map(function (l) { return Object.keys(datas[l].cards).length + ' ' + l.toUpperCase() + ' cards'; }).join(' · ') + ' ' + verb;
    },
    mergeCard: mergeCard,
    mergeLangData: mergeLangData,
    /** Reset progress of the ACTIVE language only. */
    reset: function () { var f = fresh(active); f.resetAt = now(); datas[active] = f; store.save(); },
    progressPrint: progressPrint
  };

  /* ---- Sync folder / file via File System Access API (OneDrive / Google Drive Desktop / local folder) ----
   * Stores only the FileSystemFileHandle + lastSync timestamp in IndexedDB ('etrnl.fs.v1');
   * never touches localStorage and never sends user data over the network. */
  var FS_DB = 'etrnl.fs.v1', FS_STORE = 'handles', FS_KEY = 'syncFile';
  var syncHandle = null, autoSyncTimer = null;
  var syncSupported = typeof window !== 'undefined' &&
    typeof window.showSaveFilePicker === 'function' &&
    typeof window.showOpenFilePicker === 'function' &&
    typeof window.indexedDB !== 'undefined';

  var syncState = {
    supported: syncSupported,
    connected: false,
    permission: 'none',   // 'granted' | 'prompt' | 'denied' | 'none'
    fileName: '',
    lastSync: null,
    busy: false,
    error: null
  };
  var syncListeners = [];
  function notifySync(dataChanged) {
    syncListeners.forEach(function (fn) { try { fn(syncState, !!dataChanged); } catch (e) {} });
  }

  function idbOpen() {
    return new Promise(function (resolve, reject) {
      if (!syncSupported) return reject(new Error('Not supported'));
      var req = indexedDB.open(FS_DB, 1);
      req.onupgradeneeded = function () {
        var db = req.result;
        if (!db.objectStoreNames.contains(FS_STORE)) db.createObjectStore(FS_STORE);
      };
      req.onsuccess = function () { resolve(req.result); };
      req.onerror = function () { reject(req.error || new Error('IndexedDB unavailable')); };
    });
  }
  function idbGet() {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(FS_STORE, 'readonly');
        var r = tx.objectStore(FS_STORE).get(FS_KEY);
        r.onsuccess = function () { db.close(); resolve(r.result || null); };
        r.onerror = function () { db.close(); reject(r.error); };
      });
    });
  }
  function idbSet(val) {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(FS_STORE, 'readwrite');
        tx.objectStore(FS_STORE).put(val, FS_KEY);
        tx.oncomplete = function () { db.close(); resolve(); };
        tx.onerror = function () { db.close(); reject(tx.error); };
      });
    });
  }
  function idbDel() {
    return idbOpen().then(function (db) {
      return new Promise(function (resolve, reject) {
        var tx = db.transaction(FS_STORE, 'readwrite');
        tx.objectStore(FS_STORE).delete(FS_KEY);
        tx.oncomplete = function () { db.close(); resolve(); };
        tx.onerror = function () { db.close(); reject(tx.error); };
      });
    });
  }

  function queryPerm(handle, request) {
    if (!handle) return Promise.resolve('none');
    var opts = { mode: 'readwrite' };
    var p = handle.queryPermission ? handle.queryPermission(opts) : Promise.resolve('granted');
    return p.then(function (st) {
      if (st === 'granted' || !request || !handle.requestPermission) return st;
      return handle.requestPermission(opts);
    }).catch(function () { return 'denied'; });
  }

  function syncNow(opts) {
    opts = opts || {};
    if (!syncHandle) return Promise.reject(new Error('No sync file connected.'));
    if (syncState.busy) return Promise.resolve(null);
    syncState.busy = true;
    syncState.error = null;
    notifySync(false);
    var summary = '';
    return queryPerm(syncHandle, !opts.silent).then(function (perm) {
      syncState.permission = perm;
      if (perm !== 'granted') {
        throw new Error(opts.silent ? 'Permission needed — click Sync now to resume.' : 'File write permission was not granted.');
      }
      return syncHandle.getFile();
    }).then(function (file) {
      return file.text();
    }).then(function (text) {
      var trimmed = String(text || '').trim();
      if (trimmed) {
        summary = store.importJSON(trimmed, { replace: false, keepSettings: true, fromSync: true });
      }
      var payload = store.buildPayload(true);
      suppressAutoSync = true;
      try { store.save(); } finally { suppressAutoSync = false; }
      return syncHandle.createWritable().then(function (writable) {
        return writable.write(JSON.stringify(payload, null, 1)).then(function () {
          return writable.close();
        });
      }).then(function () {
        if (!summary) {
          var langs = Object.keys(payload.progress);
          summary = langs.map(function (l) { return Object.keys(payload.progress[l].cards).length + ' ' + l.toUpperCase() + ' cards'; }).join(' · ') + ' synced';
        }
      });
    }).then(function () {
      syncState.busy = false;
      syncState.lastSync = Date.now();
      syncState.error = null;
      return idbSet({ handle: syncHandle, fileName: syncState.fileName, lastSync: syncState.lastSync }).catch(function () {}).then(function () {
        notifySync(true);
        return summary;
      });
    }).catch(function (err) {
      syncState.busy = false;
      syncState.error = err && err.message ? err.message : String(err);
      notifySync(false);
      if (!opts.silent) throw err;
      return null;
    });
  }

  function attachHandle(handle) {
    syncHandle = handle;
    syncState.connected = !!handle;
    syncState.fileName = handle ? (handle.name || 'etrnl-sync.json') : '';
    syncState.error = null;
    return idbSet({ handle: handle, fileName: syncState.fileName, lastSync: syncState.lastSync }).catch(function () {}).then(function () {
      return syncNow({ silent: false });
    });
  }

  var gdAutoTimer = null;
  var scheduleGdAutoSync = function () {};
  scheduleAutoSync = function () {
    if (syncHandle && syncState.permission === 'granted') {
      clearTimeout(autoSyncTimer);
      autoSyncTimer = setTimeout(function () { syncNow({ silent: true }); }, 1000);
    }
    scheduleGdAutoSync();
  };

  store.sync = {
    get state() { return syncState; },
    onChange: function (fn) { syncListeners.push(fn); },
    init: function () {
      if (!syncSupported) return Promise.resolve(syncState);
      return idbGet().then(function (rec) {
        if (!rec || !rec.handle) return syncState;
        syncHandle = rec.handle;
        syncState.connected = true;
        syncState.fileName = rec.handle.name || rec.fileName || 'etrnl-sync.json';
        syncState.lastSync = rec.lastSync || null;
        return queryPerm(syncHandle, false).then(function (perm) {
          syncState.permission = perm;
          notifySync(false);
          if (perm === 'granted') return syncNow({ silent: true }).then(function () { return syncState; });
          return syncState;
        });
      }).catch(function () { return syncState; });
    },
    pickExisting: function () {
      if (!syncSupported) return Promise.reject(new Error('File System Access API is not supported in this browser.'));
      return window.showOpenFilePicker({
        id: 'etrnl-sync',
        multiple: false,
        types: [{ description: 'ETRNL Progress JSON', accept: { 'application/json': ['.json'] } }]
      }).then(function (list) {
        if (!list || !list[0]) return null;
        return attachHandle(list[0]);
      });
    },
    createNew: function () {
      if (!syncSupported) return Promise.reject(new Error('File System Access API is not supported in this browser.'));
      return window.showSaveFilePicker({
        id: 'etrnl-sync',
        suggestedName: 'etrnl-sync.json',
        types: [{ description: 'ETRNL Progress JSON', accept: { 'application/json': ['.json'] } }]
      }).then(function (handle) {
        if (!handle) return null;
        return attachHandle(handle);
      });
    },
    syncNow: function (opts) { return syncNow(opts); },
    disconnect: function () {
      clearTimeout(autoSyncTimer);
      syncHandle = null;
      syncState.connected = false;
      syncState.permission = 'none';
      syncState.fileName = '';
      syncState.lastSync = null;
      syncState.busy = false;
      syncState.error = null;
      return idbDel().catch(function () {}).then(function () { notifySync(false); });
    }
  };

  /* ---- Google Drive appDataFolder sync via Google Identity Services (OAuth in the browser, no backend) ----
   * Storage is the user's own Google Drive (hidden appDataFolder, file etrnl-progress.json). Nothing else is stored anywhere.
   * - Connect = 2 clicks: "Connect Google Drive" → pick the Google account / Allow.
   * - Afterwards it syncs by itself: ~2 s after every change, when the tab becomes visible, and every 2 min while open.
   * - Browser-only OAuth gives 1-hour tokens and no refresh token, so a new tab (or after 1 h) re-authorises silently
   *   on the first tap anywhere (Google's popup opens and closes on its own).
   * - Merge is last-writer-wins per card on the unified clock (GT.now), with tombstones for removals and resets,
   *   so an older state on another device can never overwrite a newer review.
   * The access token lives only in memory (never in URL, localStorage or logs). */

  // App owner: paste the OAuth "Web application" Client ID here once (it is public, not a secret).
  // Then nobody has to enter anything: users only click Connect. Leave empty to enter it in the User tab instead.
  var GD_CLIENT_ID = '';

  var GD_DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
  var GD_SCOPE = GD_DRIVE_SCOPE + ' email';
  var GD_FILE = 'etrnl-progress.json';
  var GD_META_KEY = 'etrnl.gdrive.v1';
  var GD_API = 'https://www.googleapis.com/drive/v3/files';
  var GD_UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';
  var GD_POLL_MS = 120000;

  var gdToken = null, gdTokenExp = 0, gsiLoadPromise = null, gdClient = null, gdClientCid = '', gdPending = null;
  var gdAutoTimer = null, gdPollTimer = null, gdAgain = false, gdTapArmed = false, gdEditSeq = 0, gdInitDone = false;
  var gdMeta = readJSON(GD_META_KEY) || {};   // { enabled, email, fileId, remoteModified, lastSync, dirty }
  function saveGdMeta() { writeJSON(GD_META_KEY, gdMeta); }
  function gdClientId() { return String(GD_CLIENT_ID || settings.gdriveClientId || '').trim(); }
  function gdTokenValid() { return !!gdToken && Date.now() < gdTokenExp - 60000; }

  var gdState = {
    isHttp: typeof location !== 'undefined' && /^https?:$/.test(location.protocol),
    builtInClientId: !!GD_CLIENT_ID,
    get hasClientId() { return !!gdClientId(); },
    get enabled() { return !!gdMeta.enabled; },
    get connected() { return !!gdMeta.enabled && gdTokenValid(); },
    get email() { return gdMeta.email || ''; },
    get lastSync() { return gdMeta.lastSync || null; },
    get pending() { return !!gdMeta.dirty; },
    needsTap: false,
    busy: false,
    error: null
  };

  function loadGSI() {
    if (typeof window !== 'undefined' && window.google && window.google.accounts && window.google.accounts.oauth2) {
      return Promise.resolve();
    }
    if (gsiLoadPromise) return gsiLoadPromise;
    gsiLoadPromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client';
      s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { gsiLoadPromise = null; reject(new Error('Could not reach Google (offline?).')); };
      document.head.appendChild(s);
    });
    return gsiLoadPromise;
  }

  /** Opens Google's token popup. Must start from a user gesture (click / tap), otherwise the browser blocks it. */
  function requestToken() {
    if (!gdState.isHttp) return Promise.reject(new Error('Google sign-in needs the hosted app (https://…) or http://localhost, not file://.'));
    var cid = gdClientId();
    if (!cid) return Promise.reject(new Error('Google OAuth Client ID is missing (see Setup below).'));
    return loadGSI().then(function () {
      return new Promise(function (resolve, reject) {
        var oauth2 = window.google.accounts.oauth2;
        if (!gdClient || gdClientCid !== cid) {
          gdClientCid = cid;
          gdClient = oauth2.initTokenClient({
            client_id: cid,
            scope: GD_SCOPE,
            include_granted_scopes: true,
            callback: function (resp) {
              var p = gdPending; gdPending = null;
              if (!p) return;
              if (!resp || resp.error || !resp.access_token) {
                return p.reject(new Error((resp && (resp.error_description || resp.error)) || 'Google sign-in was cancelled.'));
              }
              if (oauth2.hasGrantedAllScopes && !oauth2.hasGrantedAllScopes(resp, GD_DRIVE_SCOPE)) {
                return p.reject(new Error('Please tick “See, create and delete its own configuration data in your Google Drive”.'));
              }
              gdToken = resp.access_token;
              gdTokenExp = Date.now() + (Number(resp.expires_in) || 3599) * 1000;
              p.resolve(gdToken);
            },
            error_callback: function (err) {
              var p = gdPending; gdPending = null;
              if (!p) return;
              var t = err && err.type;
              p.reject(new Error(t === 'popup_closed' ? 'Google sign-in was closed.' :
                t === 'popup_failed_to_open' ? 'The browser blocked Google’s popup. Tap again or allow popups for this site.' :
                (err && err.message) || 'Google sign-in failed.'));
            }
          });
        }
        if (gdPending) gdPending.reject(new Error('superseded'));
        gdPending = { resolve: resolve, reject: reject };
        var o = { prompt: '' };
        if (gdMeta.email) o.login_hint = gdMeta.email;
        gdClient.requestAccessToken(o);
      });
    });
  }

  function gdFetch(url, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ Authorization: 'Bearer ' + gdToken }, opts.headers || {});
    return fetch(url, opts).catch(function () {
      throw new Error('Offline — will sync when the connection is back.');
    }).then(function (res) {
      if (res.status === 401) { gdToken = null; gdTokenExp = 0; throw new Error('Google session expired — tap anywhere to resume.'); }
      if (!res.ok) throw new Error('Google Drive error (' + res.status + ').');
      return res;
    });
  }

  function gdFetchEmail() {
    if (gdMeta.email) return Promise.resolve();
    return gdFetch('https://www.googleapis.com/oauth2/v3/userinfo').then(function (r) { return r.json(); }).then(function (u) {
      if (u && u.email) { gdMeta.email = u.email; saveGdMeta(); }
    }).catch(function () {});
  }

  function localPrint() { return progressPrint(store.buildPayload(false).progress); }

  function uploadPayload(fileId) {
    var jsonStr = JSON.stringify(store.buildPayload(false));
    var t0 = Date.now(), req;
    if (fileId) {
      req = gdFetch(GD_UPLOAD + '/' + encodeURIComponent(fileId) + '?uploadType=media&fields=id,modifiedTime', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: jsonStr
      });
    } else {
      var boundary = 'etrnl_gd_' + Date.now();
      var meta = JSON.stringify({ name: GD_FILE, parents: ['appDataFolder'] });
      req = gdFetch(GD_UPLOAD + '?uploadType=multipart&fields=id,modifiedTime', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/related; boundary=' + boundary },
        body: '--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + meta +
          '\r\n--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + jsonStr +
          '\r\n--' + boundary + '--'
      });
    }
    return req.then(function (r) { return r.json(); }).then(function (f) {
      // Google's modifiedTime is the server clock at write time → offset of this device's clock.
      var server = Date.parse(f && f.modifiedTime);
      if (Number.isFinite(server)) setClockOffset(server - (t0 + Date.now()) / 2);
      return f;
    });
  }

  /** One sync round: pull (only if the Drive file changed) → merge → push (only if Drive lacks something). */
  function gdSyncNow(opts) {
    opts = opts || {};
    if (gdState.busy) { gdAgain = true; return Promise.resolve(null); }
    if (!gdTokenValid()) {
      if (!opts.interactive) { armTapResume(); return Promise.resolve(null); }
    }
    gdState.busy = true;
    gdState.error = null;
    notifySync(false);
    var seq = gdEditSeq, dataChanged = false, summary = '';
    var tokenStep = gdTokenValid() ? Promise.resolve() : requestToken();
    return tokenStep.then(function () {
      gdState.needsTap = false;
      if (!gdMeta.enabled) { gdMeta.enabled = true; gdMeta.dirty = true; saveGdMeta(); }
      return gdFetchEmail();
    }).then(function () {
      var q = encodeURIComponent("name='" + GD_FILE + "' and trashed=false");
      return gdFetch(GD_API + '?spaces=appDataFolder&pageSize=10&orderBy=modifiedTime%20desc&fields=files(id,modifiedTime)&q=' + q);
    }).then(function (r) { return r.json(); }).then(function (list) {
      var files = (list && list.files) || [];
      var main = files[0] || null;
      var extras = files.slice(1);   // two devices created the file at the same moment: merge all, keep one
      var remoteChanged = !!main && (main.id !== gdMeta.fileId || main.modifiedTime !== gdMeta.remoteModified || extras.length > 0);
      var before = localPrint(), remotePrint = null;
      var pull = Promise.resolve();
      if (remoteChanged) {
        files.forEach(function (f) {
          pull = pull.then(function () {
            return gdFetch(GD_API + '/' + encodeURIComponent(f.id) + '?alt=media').then(function (r) { return r.text(); }).then(function (text) {
              var trimmed = String(text || '').trim();
              if (!trimmed) return;
              var parsed = null;
              try { parsed = JSON.parse(trimmed); } catch (e) { return; }   // corrupt file → overwritten below
              if (f === main && parsed && parsed.app === 'etrnl' && parsed.progress) remotePrint = progressPrint(parsed.progress);
              store.importJSON(trimmed, { replace: false, keepSettings: true, fromSync: true });
            });
          });
        });
      }
      return pull.then(function () {
        var after = localPrint();
        dataChanged = after !== before;
        var mustPush = !main || extras.length > 0 ||
          (remoteChanged ? after !== remotePrint : (!!gdMeta.dirty || gdEditSeq !== seq));
        var step = mustPush ? uploadPayload(main && main.id).then(function (f) {
          gdMeta.fileId = (f && f.id) || (main && main.id) || gdMeta.fileId;
          gdMeta.remoteModified = (f && f.modifiedTime) || null;
          summary = 'saved to Drive';
        }) : Promise.resolve().then(function () {
          gdMeta.fileId = main.id;
          gdMeta.remoteModified = main.modifiedTime;
          summary = dataChanged ? 'updated from Drive' : 'up to date';
        });
        return step.then(function () {
          var del = Promise.resolve();
          extras.forEach(function (f) {
            del = del.then(function () { return gdFetch(GD_API + '/' + encodeURIComponent(f.id), { method: 'DELETE' }).catch(function () {}); });
          });
          return del;
        });
      });
    }).then(function () {
      if (gdEditSeq === seq) gdMeta.dirty = false;
      gdMeta.lastSync = Date.now();
      saveGdMeta();
      gdState.busy = false;
      gdState.error = null;
      startPoll();
      notifySync(dataChanged);
      if (gdAgain || gdEditSeq !== seq) { gdAgain = false; scheduleGdSoon(800); }
      return summary;
    }).catch(function (err) {
      gdState.busy = false;
      gdAgain = false;
      var msg = err && err.message ? err.message : String(err);
      if (msg !== 'superseded') gdState.error = msg;
      if (!gdTokenValid() && gdMeta.enabled) armTapResume();
      notifySync(false);
      if (opts.interactive) throw err;
      return null;
    });
  }

  function scheduleGdSoon(ms) {
    clearTimeout(gdAutoTimer);
    gdAutoTimer = setTimeout(function () { gdSyncNow({}); }, ms);
  }
  function startPoll() {
    clearInterval(gdPollTimer);
    gdPollTimer = setInterval(function () {
      if (gdMeta.enabled && gdTokenValid() && document.visibilityState === 'visible') gdSyncNow({});
    }, GD_POLL_MS);
  }

  /** New tab or expired token: the first tap anywhere silently re-authorises (popups need a user gesture). */
  function onFirstTap(e) {
    var t = e && e.target;
    if (t && t.closest && t.closest('[data-act^="gdrive-"]')) return;   // the Drive buttons handle it themselves
    disarmTap();
    if (!gdMeta.enabled || gdTokenValid()) return;
    gdSyncNow({ interactive: true }).catch(function () {});
  }
  function armTapResume() {
    if (!gdMeta.enabled || !gdState.isHttp || !gdClientId() || typeof document === 'undefined') return;
    if (!gdState.needsTap) { gdState.needsTap = true; notifySync(false); }
    if (gdTapArmed) return;
    gdTapArmed = true;
    loadGSI().catch(function () {});
    document.addEventListener('pointerdown', onFirstTap, true);
    document.addEventListener('keydown', onFirstTap, true);
  }
  function disarmTap() {
    gdTapArmed = false;
    document.removeEventListener('pointerdown', onFirstTap, true);
    document.removeEventListener('keydown', onFirstTap, true);
  }

  scheduleGdAutoSync = function () {
    if (!gdMeta.enabled) return;
    gdEditSeq++;
    if (!gdMeta.dirty) { gdMeta.dirty = true; saveGdMeta(); }
    if (gdTokenValid()) scheduleGdSoon(2000);
    else armTapResume();
  };

  store.gdrive = {
    get state() { return gdState; },
    /** Click 1 of 2: opens Google's popup (click 2 = choose account / Allow), then syncs. */
    connect: function () { disarmTap(); return gdSyncNow({ interactive: true }); },
    syncNow: function () { disarmTap(); return gdSyncNow({ interactive: true }); },
    init: function () {
      if (!gdMeta.enabled || !gdState.isHttp || !gdClientId()) return;
      if (!gdTokenValid()) armTapResume();
      if (gdInitDone) return;
      gdInitDone = true;
      document.addEventListener('visibilitychange', function () {
        if (!gdMeta.enabled) return;
        if (document.visibilityState === 'visible') {
          if (gdTokenValid()) gdSyncNow({}); else armTapResume();
        } else if (gdMeta.dirty && gdTokenValid()) {
          gdSyncNow({});   // best effort: push before the tab is backgrounded / closed
        }
      });
    },
    disconnect: function () {
      clearTimeout(gdAutoTimer);
      clearInterval(gdPollTimer);
      disarmTap();
      var tok = gdToken;
      gdToken = null; gdTokenExp = 0;
      gdMeta = {};
      saveGdMeta();
      gdState.busy = false; gdState.error = null; gdState.needsTap = false;
      if (tok && window.google && window.google.accounts && window.google.accounts.oauth2) {
        try { window.google.accounts.oauth2.revoke(tok, function () {}); } catch (e) {}
      }
      notifySync(false);
    }
  };

  if (typeof document !== 'undefined' && syncSupported) {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && syncHandle && syncState.permission === 'granted') {
        clearTimeout(autoSyncTimer);
        autoSyncTimer = setTimeout(function () { syncNow({ silent: true }); }, 1000);
      }
    });
  }

  GT.store = store;
})();
