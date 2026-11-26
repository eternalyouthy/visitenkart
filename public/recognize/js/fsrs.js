/* FSRS-5 scheduler (default parameters), simplified learning steps.
 * Card shape: { state: 'new'|'learning'|'review'|'relearning'|'known', s, d, due, last, reps, lapses }
 * Grades: 1 Again, 2 Hard, 3 Good, 4 Easy.
 */
(function () {
  'use strict';
  var W = [0.40255, 1.18385, 3.173, 15.69105, 7.1949, 0.5345, 1.4604, 0.0046, 1.54575, 0.1192,
           1.01925, 1.9395, 0.11, 0.29605, 2.2698, 0.2315, 2.9898, 0.51655, 0.6621];
  var DECAY = -0.5, FACTOR = 19 / 81;
  var MIN = 60 * 1000, DAY = 24 * 60 * MIN;
  var MAX_IVL = 36500;

  function clampD(d) { return Math.min(10, Math.max(1, d)); }
  function retrievability(elapsedDays, s) { return Math.pow(1 + FACTOR * elapsedDays / s, DECAY); }
  function intervalDays(s, retention) { return (s / FACTOR) * (Math.pow(retention, 1 / DECAY) - 1); }
  function initS(g) { return Math.max(W[g - 1], 0.1); }
  function initD(g) { return clampD(W[4] - Math.exp(W[5] * (g - 1)) + 1); }
  function nextD(d, g) {
    var dp = d - W[6] * (g - 3) * (10 - d) / 9;          // linear damping
    return clampD(W[7] * initD(4) + (1 - W[7]) * dp);    // mean reversion
  }
  function recallS(d, s, r, g) {
    var hard = g === 2 ? W[15] : 1, easy = g === 4 ? W[16] : 1;
    return s * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) * (Math.exp(W[10] * (1 - r)) - 1) * hard * easy);
  }
  function forgetS(d, s, r) {
    var f = W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) * Math.exp(W[14] * (1 - r));
    return Math.min(f, s);
  }
  function shortTermS(s, g) { return s * Math.exp(W[17] * (g - 3 + W[18])); }
  function days(n) { return Math.min(MAX_IVL, Math.max(1, Math.round(n))); }

  /** Compute the next card for one grade (no interval ordering fix-up). */
  function step(card, g, now, retention) {
    var c = Object.assign({ reps: 0, lapses: 0 }, card || {});
    c.reps = Number.isFinite(Number(c.reps)) && Number(c.reps) >= 0 ? Math.floor(Number(c.reps)) : 0;
    c.lapses = Number.isFinite(Number(c.lapses)) && Number(c.lapses) >= 0 ? Math.floor(Number(c.lapses)) : 0;
    var isNew = !card || !c.state || c.state === 'new' || c.state === 'known' || !(typeof c.s === 'number' && Number.isFinite(c.s) && c.s > 0);
    delete c.known;
    var ivl = 0; // days; 0 = minutes-level step
    if (isNew) {
      c.s = initS(g); c.d = initD(g);
      if (g === 4) { c.state = 'review'; ivl = days(intervalDays(c.s, retention)); }
      else { c.state = 'learning'; c.due = now + (g === 1 ? 1 : g === 2 ? 5 : 10) * MIN; }
    } else {
      var lastTs = typeof c.last === 'number' && Number.isFinite(c.last) ? c.last : now;
      var elapsed = Math.max(0, (now - lastTs) / DAY);
      var r = retrievability(elapsed, c.s);
      var sameDay = elapsed < 0.5;
      c.d = nextD(typeof c.d === 'number' && Number.isFinite(c.d) ? clampD(c.d) : initD(3), g);
      if (c.state === 'learning' || c.state === 'relearning') {
        c.s = sameDay ? shortTermS(c.s, g) : (g === 1 ? forgetS(c.d, c.s, r) : recallS(c.d, c.s, r, g));
        if (!(Number.isFinite(c.s) && c.s > 0)) c.s = 0.1;
        if (g === 1) { c.due = now + 5 * MIN; }
        else if (g === 2) { c.due = now + 10 * MIN; }
        else { c.state = 'review'; ivl = days(intervalDays(c.s, retention)); }
      } else { // review
        if (g === 1) {
          c.lapses += 1;
          c.s = sameDay ? shortTermS(c.s, g) : forgetS(c.d, c.s, r);
          if (!(Number.isFinite(c.s) && c.s > 0)) c.s = 0.1;
          c.state = 'relearning';
          c.due = now + 10 * MIN;
        } else {
          c.s = sameDay ? shortTermS(c.s, g) : recallS(c.d, c.s, r, g);
          if (!(Number.isFinite(c.s) && c.s > 0)) c.s = 0.1;
          ivl = days(intervalDays(c.s, retention));
        }
      }
    }
    c.reps += 1;
    c.last = now;
    return { card: c, ivl: ivl };
  }

  /** Results for all four grades, with intervals kept in order Hard <= Good < Easy. */
  function preview(card, now, retention) {
    retention = typeof retention === 'number' && Number.isFinite(retention) ? Math.max(0.7, Math.min(0.99, retention)) : 0.9;
    var res = {};
    for (var g = 1; g <= 4; g++) res[g] = step(card, g, now, retention);
    var h = res[2], gd = res[3], e = res[4];
    if (gd.ivl && h.ivl && h.ivl > gd.ivl) h.ivl = gd.ivl;
    if (gd.ivl && e.ivl && e.ivl <= gd.ivl) e.ivl = gd.ivl + 1;
    if (e.ivl && !gd.ivl && e.ivl < 1) e.ivl = 1;
    for (g = 1; g <= 4; g++) {
      if (res[g].ivl) res[g].card.due = now + res[g].ivl * DAY;
      res[g].label = label(res[g].card.due - now);
    }
    return res;
  }

  function label(ms) {
    var m = Math.round(ms / MIN);
    if (m < 60) return Math.max(1, m) + 'm';
    var h = Math.round(m / 60);
    if (h < 24) return h + 'h';
    var d = Math.round(ms / DAY);
    if (d < 31) return d + 'd';
    if (d < 365) return (Math.round(d / 30.4 * 10) / 10).toString().replace(/\.0$/, '') + 'mo';
    return (Math.round(d / 365 * 10) / 10).toString().replace(/\.0$/, '') + 'y';
  }

  GT.fsrs = {
    preview: preview,
    rate: function (card, g, now, retention) { return preview(card, now, retention)[g].card; },
    label: label,
    newCard: function (now) { return { state: 'new', due: now, reps: 0, lapses: 0 }; },
    DAY: DAY
  };
})();
