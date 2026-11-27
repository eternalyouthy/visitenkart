/* GERMAN · Expressions categories (Idioms, Everyday Phrases). Sections and category names are defined once in
 * js/core.js (GT.EXP_SECTIONS); this file only says which card goes where. Slang cards carry their category as topic. */
(function () {
  'use strict';
  function ids(prefix, list) { return list.map(function (s) { return prefix + s; }); }
  var I = 'exp-idiom-', D = 'exp-day-';
  GT.classifyExpressions({
    'idioms-people': ids(I, ['daumen-druecken', 'eis-brechen', 'vier-augen', 'nerven-gehen', 'selben-boot', 'nase-voll', 'wolke-sieben', 'loch-bauch', 'fuenfte-rad']),
    'idioms-talk': ids(I, ['bahnhof', 'nagel-kopf', 'schlauch-stehen', 'tomaten', 'baer', 'brei', 'fettnaepfchen', 'faden', 'reinen-wein', 'blatt-mund', 'senf-dazugeben', 'kind-beim-namen', 'ins-schwarze', 'zwischen-zeilen']),
    'idioms-work': ids(I, ['uhren-anders', 'kaltes-wasser', 'tellerrand', 'gruenes-licht', 'lange-bank', 'zwei-fliegen', 'haende-voll', 'schlange-stehen', 'eigenen-fuessen', 'aermel-hochkrempeln', 'rad-neu-erfinden', 'heft-in-hand']),
    'idioms-situations': ids(I, ['nicht-mein-bier', 'schwein', 'katzensprung', 'kopf-sand', 'teppich', 'hund-begraben', 'alles-in-butter', 'wald-baeume', 'kopf-ueber-wasser', 'steine-in-weg', 'holzweg-sein', 'oel-ins-feuer']),
    'idioms-decisions': ids(I, ['eine-karte', 'kirche-im-dorf', 'sauer-apfel', 'leichte-schulter', 'ueber-schatten', 'katze-im-sack', 'mit-feuer-spielen', 'kuehlen-kopf']),

    'everyday-respond': ids(D, ['echt-jetzt', 'ach-so', 'genau', 'stimmt', 'na-ja', 'schade', 'wie-bitte', 'keine-ahnung', 'bin-ueberfragt', 'was-ist-los', 'na-klar']),
    'everyday-opinion': ids(D, ['kommt-drauf-an', 'macht-sinn', 'von-mir-aus', 'mir-egal', 'warum-nicht', 'kommt-nicht-infrage', 'geschmackssache', 'ehrlich-gesagt', 'so-oder-so', 'wie-dem-auch-sei', 'versteht-sich', 'lohnt-sich', 'hauptsache']),
    'everyday-arrange': ids(D, ['mal-sehen', 'geht-klar', 'klingt-gut', 'gleich-wieder-da', 'bis-gleich', 'melde-mich', 'lass-es-mich-wissen', 'passt-mir-gut', 'schauen-wir-mal', 'nur-zur-info', 'das-waers']),
    'everyday-comfort': ids(D, ['macht-nichts', 'kriegen-wir-hin', 'kein-ding', 'schon-gut', 'keinen-kopf', 'nichts-fuer-ungut', 'soweit-alles-gut', 'stein-vom-herzen', 'was-solls']),
    'everyday-social': ids(D, ['gute-besserung', 'viel-erfolg', 'viel-spass', 'gern-geschehen', 'keine-ursache', 'tut-mir-leid'])
  }, {
    slang: {
      desc: 'Berlin street and youth slang: Digga, krass, Ehrenmann, Späti — what you hear on the U8 and in the Kiez.',
      scenario: {
        ru: 'вечер в Берлине: мы встречаемся у Späti в Нойкёльне и болтаем с друзьями на уличном сленге. Ты — местный парень из Кица, говоришь с «Digga», «krass», «wallah», но объясняешь, если я не понял.',
        en: 'an evening in Berlin: we meet at a Späti in Neukölln and chat with friends in street slang. You are a local from the Kiez who says “Digga”, “krass”, “wallah”, but explains when I don’t get it.'
      }
    }
  });
})();

/* === Content expansion 2026-11-27 === */
(function () {
  'use strict';
  function ids(prefix, list) { return list.map(function (s) { return prefix + s; }); }
  var I = 'exp-idiom-x27-', D = 'exp-day-x27-';
  GT.classifyExpressions({
    'idioms-people': ids(I, ['ein-herz-und-eine-seele', 'aus-der-haut-fahren', 'jemandem-den-ruecken-staerken', 'mit-dem-linken-fuss', 'ein-dickes-fell', 'jemanden-um-den-finger']),
    'idioms-talk': ids(I, ['tacheles-reden', 'den-mund-fusselig', 'auf-der-zunge', 'kein-geheimnis-machen', 'klartext-sprechen', 'um-den-heissen-kern']),
    'idioms-work': ids(I, ['ins-rollen-bringen', 'ueber-stunden-klagen', 'hand-in-hand', 'seinen-mann-stehen', 'schritt-fuer-schritt', 'eine-extra-meile']),
    'idioms-situations': ids(I, ['aus-allen-wolken', 'in-der-klemme', 'glueck-im-unglueck', 'auf-messers-schneide', 'kein-blatt-zwischen', 'im-dunkeln-tappen']),
    'idioms-decisions': ids(I, ['die-notbremse-ziehen', 'auf-nummer-sicher', 'zwei-mal-ueberlegen', 'naegel-mit-koepfen', 'ins-gewissen-reden', 'ein-auge-zudruecken']),

    'everyday-respond': ids(D, ['echt-gesagt', 'kaum-zu-glauben', 'mach-sachen', 'hab-ich-mir-gedacht', 'moment-mal']),
    'everyday-opinion': ids(D, ['meiner-ansicht-nach', 'bin-ganz-deiner-meinung', 'kann-man-so-sehen', 'da-bin-ich-skeptisch', 'auf-keinen-fall']),
    'everyday-arrange': ids(D, ['abgemacht', 'ich-gebe-bescheid', 'verschieben-wir-das', 'ich-bin-unterwegs', 'bis-morgen']),
    'everyday-comfort': ids(D, ['halb-so-schlimm', 'alles-wird-gut', 'kein-grund-zur-sorge', 'nimm-dir-zeit', 'ich-druecke-dir-die-daumen']),
    'everyday-social': ids(D, ['herzlichen-glueckwunsch', 'schoenes-wochenende', 'gesundheit', 'guten-appetit', 'auf-wiedersehen'])
  });
})();
