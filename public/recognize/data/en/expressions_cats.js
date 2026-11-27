/* ENGLISH · Expressions categories (Idioms, Everyday Phrases). Sections and category names: GT.EXP_SECTIONS
 * in js/core.js. Cards are named by slug; the full id is looked up among the catalogue (en:<slug>:chunk:main)
 * and the later batches (en:x2:…, en:x3:…, en:x4:…). This file must load after all English expression files. */
(function () {
  'use strict';
  var P = GT.packs.en;
  function id(slug) {
    var c = ['en:' + slug + ':chunk:main', 'en:x2:' + slug, 'en:x3:' + slug, 'en:x4:' + slug];
    for (var i = 0; i < c.length; i++) if (P.byId[c[i]]) return c[i];
    return 'en:?' + slug;   // reported as unknown in Settings → Data
  }
  function ids(list) { return list.map(id); }
  GT.classifyExpressions({
    'idioms-people': ids(['house-on-fire', 'see-eye-to-eye', 'pain-neck', 'on-the-same-page', 'break-the-ice', 'fifth-wheel', 'on-cloud-nine', 'fingers-crossed', 'under-the-weather', "it's-not-my-cup-of-tea", 'bend-over-backwards']),
    'idioms-talk': ids(['spill-the-beans', 'pull-leg', 'hit-the-nail-on-the-head', 'all-greek', 'put-two-cents', 'beat-around-bush', 'call-spade', 'read-between-lines', 'pinch-of-salt']),
    'idioms-work': ids(['get-the-ball-rolling', 'learn-the-ropes', 'cut-corners', 'call-it-a-day', 'go-the-extra-mile', 'have-hands-full', 'jump-deep-end', 'roll-up-sleeves', 'reinvent-wheel', 'think-outside-box', 'take-reins', 'kill-two-birds', 'keep-an-eye-on', 'a-piece-of-cake', 'hit-road']),
    'idioms-situations': ids(['a-blessing-in-disguise', 'the-last-straw', 'out-of-the-blue', 'the-tip-of-the-iceberg', 'back-to-square-one', 'hot-water', 'stones-throw', 'sweep-under-carpet', 'wood-for-trees', 'keep-head-above', 'add-fuel-fire', 'once-in-a-blue-moon', 'bark-wrong-tree', 'move-goalposts']),
    'idioms-decisions': ids(['on-the-fence', 'bite-the-bullet', 'miss-the-boat', 'in-the-long-run', 'ball-court', 'sleep-on-it', 'play-by-ear', 'jump-gun', 'bite-off', 'play-with-fire', 'pig-in-poke', 'cool-head', 'better-late-than-never', 'cost-an-arm-and-a-leg', 'stand-own-feet']),

    'everyday-respond': ids(['how-come', 'same-here', 'i-guess-so', 'not-really', 'search-me', 'guess-what', 'i-see-what-you-mean', 'i-wish', 'you-never-know']),
    'everyday-opinion': ids(['it-depends', 'fair-enough', "i-don't-mind", "it's-up-to-you", 'what-do-you-reckon', 'why-not', 'out-of-question', 'be-that-as-it-may', 'goes-without-saying', 'matter-of-taste', 'fine-by-me', "it-doesn't-matter"]),
    'everyday-arrange': ids(['sounds-good', 'go-ahead', 'let-me-know', 'that-works-for-me', "i'll-get-back-to-you", 'give-me-a-moment', "i'm-on-my-way", "i'll-be-right-back", 'are-you-free', 'count-me-in', 'ill-pass', 'see-you-then', 'be-in-touch', 'keep-in-touch']),
    'everyday-comfort': ids(["we'll-figure-it-out", 'no-worries', 'take-your-time', 'never-mind', 'dont-sweat-it', 'so-far-so-good', 'no-offence', 'weight-off-mind', 'oh-well']),
    'everyday-social': ids(["that's-a-shame", 'good-for-you', 'what-a-pity', 'youre-welcome', 'bless-you', 'have-fun', 'long-time-no-see', 'help-yourself'])
  }, {
    slang: {
      desc: 'American street slang, much of it from African American English and hip-hop: what’s good, no cap, bet, bussin’.',
      scenario: {
        ru: 'вечер в Бруклине: мы встречаемся с друзьями у баскетбольной площадки и болтаем на уличном сленге. Ты — местный парень, говоришь «what’s good», «no cap», «bet», но объясняешь, если я не понял.',
        de: 'ein Abend in Brooklyn: wir treffen Freunde am Basketballplatz und reden in Straßenslang. Du bist ein Typ von hier, der „what’s good“, „no cap“, „bet“ sagt, aber erklärt, wenn ich etwas nicht verstehe.'
      }
    }
  });
})();

/* === Content expansion 2026-11-27 === */
(function () {
  'use strict';
  function ids(prefix, list) { return list.map(function (s) { return prefix + s; }); }
  var I = 'en:x27:idiom:', D = 'en:x27:ev:';
  GT.classifyExpressions({
    'idioms-people': ids(I, ['two-peas-in-a-pod', 'thick-skin', 'wrong-side-of-bed', 'have-someones-back', 'fly-off-handle']),
    'idioms-talk': ids(I, ['cut-to-chase', 'tip-of-tongue', 'talk-turkey', 'blue-in-face', 'word-of-mouth']),
    'idioms-work': ids(I, ['burn-midnight-oil', 'in-full-swing', 'pull-weight', 'get-off-ground', 'drop-the-ball']),
    'idioms-situations': ids(I, ['in-the-dark', 'silver-lining', 'knife-edge', 'tight-spot', 'up-in-the-air']),
    'idioms-decisions': ids(I, ['play-it-safe', 'think-twice', 'cross-that-bridge', 'draw-the-line', 'turn-blind-eye']),

    'everyday-respond': ids(D, ['tell-me-about-it', 'hard-to-believe', 'i-thought-as-much', 'hang-on', 'youre-kidding']),
    'everyday-opinion': ids(D, ['in-my-view', 'couldn-t-agree-more', 'im-not-sure-about-that', 'makes-sense-to-me', 'if-you-ask-me']),
    'everyday-arrange': ids(D, ['deal', 'what-time-suits-you', 'running-late', 'keep-me-posted', 'see-you-tomorrow']),
    'everyday-comfort': ids(D, ['could-be-worse', 'itll-turn-out-fine', 'nothing-to-worry-about', 'hang-in-there', 'better-luck-next-time']),
    'everyday-social': ids(D, ['congratulations', 'have-a-nice-weekend', 'enjoy-your-meal', 'take-care', 'get-well-soon'])
  });
})();
