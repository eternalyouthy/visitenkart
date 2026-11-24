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
    theme: 'dark',
    speechRate: 0.9,
    speechVoice: 'auto',       // German voice (legacy name); other languages: speechVoice_<lang>
    knowLang: 'ru',            // "I know"
    learnLang: 'de'            // "I learn"
  };
  function keyFor(lang) { return KEYS[lang] || ('etrnl.progress.' + lang + '.v1'); }

  function fresh(lang) {
    return {
      version: SCHEMA_VERSION,
      language: lang,
      created: Date.now(),
      cards: {},          // <id>#rec / <id>#prod (or <id> for drills) -> FSRS card
      later: {},          // item id -> timestamp ("Later" in learn sessions)
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

  /* ---- non-destructive merge across devices ----
   * Rules (handoff_3.md §2):
   *  - Per card: "known" is never lost; otherwise the fresher card (last, then reps, then due) wins; earliest added kept.
   *  - later: union (max timestamp), minus any item that already has a card in cards.
   *  - log: per-day max of reviews and learned (idempotent across repeated syncs). */
  function mergeCard(a, b) {
    if (!a || typeof a !== 'object') return Object.assign({}, b);
    if (!b || typeof b !== 'object') return Object.assign({}, a);
    var added = Math.min(a.added || Infinity, b.added || Infinity);
    var hasAdded = Number.isFinite(added);
    if (a.state === 'known' || b.state === 'known') {
      var kTs = Math.max(a.known || 0, b.known || 0, a.last || 0, b.last || 0, hasAdded ? added : 0) || Date.now();
      return { state: 'known', known: kTs, last: kTs, added: hasAdded ? added : kTs };
    }
    var ta = a.last || a.known || a.added || 0;
    var tb = b.last || b.known || b.added || 0;
    var win;
    if (tb !== ta) win = tb > ta ? b : a;
    else if ((b.reps || 0) !== (a.reps || 0)) win = (b.reps || 0) > (a.reps || 0) ? b : a;
    else win = (b.due || 0) >= (a.due || 0) ? b : a;
    var out = Object.assign({}, win);
    if (hasAdded) out.added = added;
    return out;
  }

  function mergeLangData(localD, incD, lang) {
    var a = normalize(localD, lang).data;
    var b = normalize(incD, lang).data;
    var cards = {};
    Object.keys(a.cards).forEach(function (k) { cards[k] = Object.assign({}, a.cards[k]); });
    Object.keys(b.cards).forEach(function (k) {
      cards[k] = cards[k] ? mergeCard(cards[k], b.cards[k]) : Object.assign({}, b.cards[k]);
    });
    var later = {};
    Object.keys(a.later).forEach(function (id) { later[id] = a.later[id]; });
    Object.keys(b.later).forEach(function (id) { later[id] = Math.max(later[id] || 0, b.later[id] || 0); });
    Object.keys(cards).forEach(function (k) { delete later[baseId(k)]; });
    var log = {};
    Object.keys(a.log).forEach(function (day) {
      log[day] = { reviews: (a.log[day] && a.log[day].reviews) || 0, learned: (a.log[day] && a.log[day].learned) || 0 };
    });
    Object.keys(b.log).forEach(function (day) {
      var prev = log[day] || { reviews: 0, learned: 0 };
      var cur = b.log[day] || {};
      log[day] = {
        reviews: Math.max(prev.reviews, cur.reviews || 0),
        learned: Math.max(prev.learned, cur.learned || 0)
      };
    });
    return {
      version: SCHEMA_VERSION,
      language: lang,
      created: Math.min(a.created || Date.now(), b.created || Date.now()),
      cards: cards,
      later: later,
      log: log,
      lastPractice: Math.max(a.lastPractice || 0, b.lastPractice || 0) || null,
      lastExport: Math.max(a.lastExport || 0, b.lastExport || 0) || null
    };
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
    removeCard: function (key) { delete D().cards[key]; store.save(); },
    removeItem: function (id) {
      var c = D().cards;
      delete c[id]; delete c[id + '#rec']; delete c[id + '#prod'];
      store.save();
    },
    markLater: function (id) { D().later[id] = Date.now(); store.save(); },
    setSetting: function (k, v) { settings[k] = v; store.save(); },
    dayKey: dayKey,
    logActivity: function (kind, n) {
      var d = D(), k = dayKey();
      var e = d.log[k] || (d.log[k] = { reviews: 0, learned: 0 });
      e[kind] = (e[kind] || 0) + (n || 1);
      store.save();
    },
    markPracticed: function () { D().lastPractice = Date.now(); store.save(); },

    buildPayload: function (markExport) {
      var now = Date.now(), progress = {};
      Object.keys(Object.assign({}, KEYS, datas)).forEach(function (lang) {
        var d = loadLang(lang);
        if (markExport && lang === active) d.lastExport = now;
        if (Object.keys(d.cards).length || Object.keys(d.later).length || Object.keys(d.log).length || lang === active) {
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
    reset: function () { datas[active] = fresh(active); store.save(); }
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

  /* ---- Google Drive appDataFolder sync via Google Identity Services (OAuth in browser) ----
   * Token is kept strictly in memory (never in URL, localStorage, or logs).
   * Works on http://localhost and HTTPS static hosts (e.g. Netlify). */
  var GD_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
  var GD_FILE = 'etrnl-progress.json';
  var gdToken = null, gdTokenExp = 0, gdFileId = null, gsiLoadPromise = null;
  var gdState = {
    isHttp: typeof location !== 'undefined' && /^https?:$/.test(location.protocol),
    connected: false,
    busy: false,
    lastSync: null,
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
      s.onerror = function () { gsiLoadPromise = null; reject(new Error('Could not load Google Identity Services script.')); };
      document.head.appendChild(s);
    });
    return gsiLoadPromise;
  }

  function ensureGdToken(interactive) {
    if (gdToken && Date.now() < gdTokenExp - 30000) return Promise.resolve(gdToken);
    if (!gdState.isHttp) return Promise.reject(new Error('Google OAuth requires http://localhost or an https:// domain (not file://).'));
    var cid = String(settings.gdriveClientId || '').trim();
    if (!cid) return Promise.reject(new Error('Enter your Google OAuth Client ID first.'));
    if (!interactive) return Promise.reject(new Error('Google Drive session expired — click Sync with Google Drive.'));
    return loadGSI().then(function () {
      return new Promise(function (resolve, reject) {
        var client = window.google.accounts.oauth2.initTokenClient({
          client_id: cid,
          scope: GD_SCOPE,
          callback: function (resp) {
            if (!resp || resp.error || !resp.access_token) {
              reject(new Error((resp && (resp.error_description || resp.error)) || 'Google sign-in was cancelled.'));
              return;
            }
            gdToken = resp.access_token;
            gdTokenExp = Date.now() + (Number(resp.expires_in) || 3500) * 1000;
            gdState.connected = true;
            resolve(gdToken);
          },
          error_callback: function (err) {
            reject(new Error((err && err.message) || 'Google OAuth popup failed.'));
          }
        });
        client.requestAccessToken({ prompt: '' });
      });
    });
  }

  function gdFetch(url, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ Authorization: 'Bearer ' + gdToken }, opts.headers || {});
    return fetch(url, opts).then(function (res) {
      if (res.status === 401) { gdToken = null; gdTokenExp = 0; gdState.connected = false; }
      if (!res.ok) throw new Error('Google Drive API error (' + res.status + ').');
      return res;
    });
  }

  function gdSyncNow(opts) {
    opts = opts || {};
    if (gdState.busy) return Promise.resolve(null);
    gdState.busy = true;
    gdState.error = null;
    notifySync(false);
    var summary = '';
    return ensureGdToken(!opts.silent).then(function () {
      var q = encodeURIComponent("name='" + GD_FILE + "' and trashed=false");
      return gdFetch('https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&pageSize=1&fields=files(id,name,modifiedTime)&q=' + q);
    }).then(function (res) {
      return res.json();
    }).then(function (list) {
      var f = list && list.files && list.files[0];
      gdFileId = f ? f.id : null;
      if (!gdFileId) return '';
      return gdFetch('https://www.googleapis.com/drive/v3/files/' + encodeURIComponent(gdFileId) + '?alt=media').then(function (r) { return r.text(); });
    }).then(function (remoteText) {
      var trimmed = String(remoteText || '').trim();
      if (trimmed) {
        summary = store.importJSON(trimmed, { replace: false, keepSettings: true, fromSync: true });
      }
      var payload = store.buildPayload(true);
      var jsonStr = JSON.stringify(payload, null, 1);
      suppressAutoSync = true;
      try { store.save(); } finally { suppressAutoSync = false; }
      if (gdFileId) {
        return gdFetch('https://www.googleapis.com/upload/drive/v3/files/' + encodeURIComponent(gdFileId) + '?uploadType=media', {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          body: jsonStr
        });
      }
      var boundary = 'etrnl_gd_' + Date.now();
      var meta = JSON.stringify({ name: GD_FILE, parents: ['appDataFolder'] });
      var body = '--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + meta +
        '\r\n--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + jsonStr +
        '\r\n--' + boundary + '--';
      return gdFetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/related; boundary=' + boundary },
        body: body
      }).then(function (r) { return r.json(); }).then(function (created) {
        if (created && created.id) gdFileId = created.id;
      });
    }).then(function () {
      if (!summary) {
        var p = store.buildPayload(false).progress;
        summary = Object.keys(p).map(function (l) { return Object.keys(p[l].cards).length + ' ' + l.toUpperCase() + ' cards'; }).join(' · ') + ' synced';
      }
      gdState.busy = false;
      gdState.connected = true;
      gdState.lastSync = Date.now();
      gdState.error = null;
      notifySync(true);
      return summary;
    }).catch(function (err) {
      gdState.busy = false;
      gdState.error = err && err.message ? err.message : String(err);
      notifySync(false);
      if (!opts.silent) throw err;
      return null;
    });
  }

  scheduleGdAutoSync = function () {
    if (!gdToken || Date.now() >= gdTokenExp - 30000) return;
    clearTimeout(gdAutoTimer);
    gdAutoTimer = setTimeout(function () { gdSyncNow({ silent: true }); }, 1500);
  };

  store.gdrive = {
    get state() { return gdState; },
    syncNow: function (opts) { return gdSyncNow(opts); },
    disconnect: function () {
      clearTimeout(gdAutoTimer);
      var tok = gdToken;
      gdToken = null; gdTokenExp = 0; gdFileId = null;
      gdState.connected = false; gdState.busy = false; gdState.error = null;
      if (tok && typeof window !== 'undefined' && window.google && window.google.accounts && window.google.accounts.oauth2) {
        try { window.google.accounts.oauth2.revoke(tok, function () {}); } catch (e) {}
      }
      notifySync(false);
    }
  };

  if (typeof document !== 'undefined' && syncSupported) {
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && syncHandle && syncState.permission === 'granted') {
        scheduleAutoSync();
      }
    });
  }

  GT.store = store;
})();
