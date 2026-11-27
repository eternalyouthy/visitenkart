/* Service worker: offline support for the language trainer.
 * Strategy: precache the app shell + data files; network-first for app files
 * (fresh when online, cached copy when offline); cache-first for Google Fonts.
 * Bump VERSION when you want to force a clean cache. */
var CACHE_PREFIX = 'etrnl-recognize-';
var VERSION = CACHE_PREFIX + '178';
importScripts('data/manifest.js');

var SHELL = [
  './', 'css/app.css',
  'js/core.js', 'js/i18n.js', 'js/topics.js', 'js/loader.js', 'js/validate.js', 'js/fsrs.js', 'js/store.js', 'js/whichform.js', 'js/roulette.js', 'js/forms/de.js', 'js/forms/en.js', 'js/forms/ru.js', 'js/app.js',
  'js/progress-key.js', 'data/about.js', 'data/manifest.js', 'manifest.webmanifest',
  'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'
];
// Every language pack (German, English, Russian …) and cross-language link files are precached for offline use.
(self.GT_LINK_FILES || []).forEach(function (f) { SHELL.push(f); });
Object.keys(self.GT_PACKS || {}).forEach(function (lang) {
  var p = self.GT_PACKS[lang];
  (p.files || []).forEach(function (f) { SHELL.push((p.dir || '') + f); });
});

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) {
    // add individually so one missing file doesn't break the install
    return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) {
      return k.startsWith(CACHE_PREFIX) && k !== VERSION && k !== VERSION + '-fonts';
    }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  // Google Fonts: cache-first so the design fonts also work offline after the first visit.
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(VERSION + '-fonts').then(function (cache) {
      return cache.match(req).then(function (hit) {
        return hit || fetch(req).then(function (res) { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; });
      });
    }));
    return;
  }
  if (!url.href.startsWith(self.registration.scope)) return;
  // App files: network first (so updates show up immediately), cache as offline fallback.
  // cache: 'no-cache' revalidates with the server, so a new deploy is never hidden by the HTTP cache.
  e.respondWith(fetch(req, { cache: 'no-cache' }).then(function (res) {
    if (res && res.status === 200) { var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(req, copy); }).catch(function () {}); }
    return res;
  }).catch(function () {
    return caches.open(VERSION).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (hit) {
        if (hit) return hit;
        // cache.match() is a promise (always truthy): resolve it before falling back to a network error.
        return (req.mode === 'navigate' ? cache.match('./') : Promise.resolve(null)).then(function (r) { return r || Response.error(); });
      });
    });
  }));
});
