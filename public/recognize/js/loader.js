/* Language-pack loader. Packs are plain <script> files (no fetch), so this works from file:// and static hosting.
 * GT.loadPack(lang) loads the files listed in data/manifest.js (GT_PACKS[lang]) in order, with the pack set as
 * the registration target, and resolves when all have executed. Packs load one at a time; a missing file is
 * recorded in pack.loadErrors (and GT.loadErrors) but never stops the app. */
(function () {
  'use strict';
  var chain = Promise.resolve();
  GT.packFiles = function (lang) {
    var p = (self.GT_PACKS || {})[lang];
    return p ? p.files.map(function (f) { return (p.dir || '') + f; }) : [];
  };
  GT.loadPack = function (lang) {
    var pack = GT.packs[lang] || GT.definePack(lang, {});
    if (pack.loaded) return Promise.resolve(pack);
    if (pack.loading) return pack.loading;
    pack.loading = chain = chain.then(function () {
      return new Promise(function (resolve) {
        var files = GT.packFiles(lang), left = files.length;
        GT._target = pack;
        function finish() {
          GT._target = null;
          pack.loaded = true;
          if (GT.setupExpressions) { try { GT.setupExpressions(pack); } catch (e) { pack.loadErrors.push('expressions: ' + e.message); } }
          if (GT.validatePack) { try { GT.validatePack(pack); } catch (e) { pack.loadErrors.push('validate: ' + e.message); } }
          (pack.config.afterLoad || []).forEach(function (fn) {
            try { fn(pack); } catch (e) { pack.loadErrors.push('afterLoad: ' + e.message); }
          });
          resolve(pack);
        }
        function done() { if (--left === 0) finish(); }
        if (!left) return finish();
        files.forEach(function (src) {
          var s = document.createElement('script');
          s.src = src;
          s.async = false;   // keep execution order
          s.onload = done;
          s.onerror = function () { pack.loadErrors.push(src); GT.loadErrors.push(src); done(); };
          document.body.appendChild(s);
        });
      });
    });
    return pack.loading;
  };
})();
