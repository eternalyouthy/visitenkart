/* RUSSIAN roots — learner-facing layout. Loaded after all roots_*.js and affixes.js.
 *  1. Families are titled by their verbs (ХОДИТЬ / ИДТИ), the root morpheme is a subtitle.
 *  2. Every prefixed verb shows its aspect partner (приходить → прийти) on the map and in the card,
 *     taken from forms.perf ("pf. прийт+и (…)" / "one direction: идт+и (…)").
 *  3. One-direction verbs (вести, везти, нести) move from the map to the chips: the base node already shows them.
 *  4. Prefixes that the families use but that had no page: до-, с-, раз-, о-, про-, по-, пред-.
 *     Meaning indices (prefixDrill.meaning):
 *       до: 0 reaching a point      с: 0 together · 1 down/off, handing over
 *       раз: 0 apart, to many · 1 thoroughly        о: 0 all around, all over
 *       про: 0 through, past · 1 missing, overlooking    по: 0 setting off · 1 a little, for a while
 *       пред: 0 before, in front */
(function () {
  'use strict';
  var P = GT.packs.ru;
  function plain(s) { return String(s || '').replace(/[+́]/g, ''); }
  function byPlain(t) { return P.items.filter(function (x) { return plain(x.t) === t; })[0] || null; }
  function ex(t, en, de) { return { t: t, en: en, de: de }; }

  /* 1. titles */
  var TITLES = {
    'ход': ['ХОДИТЬ / ИДТИ', 'root -ход- / -й-'], 'пис': ['ПИСАТЬ', 'root -пис-'], 'вод': ['ВОДИТЬ / ВЕСТИ', 'root -вод- / -вед-'],
    'став': ['СТАВИТЬ', 'root -став-'], 'воз': ['ВОЗИТЬ / ВЕЗТИ', 'root -воз- / -вез-'], 'нос': ['НОСИТЬ / НЕСТИ', 'root -нос- / -нес-'],
    'да': ['ДАВАТЬ / ДАТЬ', 'root -да-'], 'зна': ['ЗНАТЬ', 'root -зна-'], 'бр': ['БРАТЬ / ВЗЯТЬ', 'root -бр- / -бер- / -бир-']
  };
  Object.keys(TITLES).forEach(function (id) {
    var r = P.roots[id];
    if (r) { r.label = TITLES[id][0]; r.sub = TITLES[id][1]; }
  });
  ['езд', 'смотр', 'лож', 'говор', 'дел', 'прос', 'жив', 'би'].forEach(function (id) { if (P.config.ROOT_PLAN.indexOf(id) < 0 && P.roots[id]) P.config.ROOT_PLAN.push(id); });

  /* 2. aspect partners */
  P.items.forEach(function (w) {
    if (!w.rootId || w.pos !== 'verb' || !w.forms || w.pair) return;
    var m = /^(pf\.|impf\.|one direction:)\s*([^\s(,]+)/.exec(String(w.forms.perf || ''));
    if (!m) return;
    w.pair = m[2];
    w.pairLabel = m[1] === 'one direction:' ? 'One direction' : m[1] === 'impf.' ? 'Imperfective' : 'Perfective';
  });

  /* 3. one-direction verbs as chips */
  ['вести', 'везти', 'нести'].forEach(function (t) { var w = byPlain(t); if (w && !w.base) w.mapAs = 'chip'; });

  /* 4. prefixes */
  var ASPECT = P.prefixes['при'] && P.prefixes['при'].grammar;
  function prefix(id, label, en, de, meanings, match) {
    if (P.prefixes[id]) return;
    GT.registerPrefix({ id: id, label: label, en: en, de: de, meanings: meanings, match: match, grammar: ASPECT });
    if (P.config.PREFIX_PLAN.indexOf(id) < 0) P.config.PREFIX_PLAN.push(id);
  }
  function M(en, de, examples) { return { en: en, de: de, examples: examples }; }
  prefix('до', 'до-', 'up to, reaching a point', 'bis zu, ein Ziel erreichen', [
    M('reaching a point or limit', 'bis zu einem Punkt, ans Ziel', [ex('дойт+и', 'to reach (on foot)', 'hingelangen'), ex('до+ехать', 'to get to (by vehicle)', 'hinfahren, ankommen'), ex('дост+авить', 'to deliver', 'liefern'), ex('доход+ить', 'to reach; to dawn on', 'ankommen; klar werden')])
  ], { en: '<p>Usually with the preposition <b>до</b>: дойти <b>до</b> дома — to get as far as the house.</p>', de: '<p>Meist mit der Präposition <b>до</b>: дойти <b>до</b> дома — bis zum Haus kommen. Deutsch oft <b>hin-</b> / <b>an-</b> + bis: bis nach Hause kommen.</p>' });
  prefix('с', 'с- (со-)', 'together; down, off; handing over', 'zusammen; herunter, ab; abgeben', [
    M('together, into one place', 'zusammen, an einen Ort', [ex('собр+ать', 'to gather, to collect', 'sammeln'), ex('сост+авить', 'to put together, to compile', 'zusammenstellen'), ex('съ+ехаться', 'to gather (arriving)', 'zusammenkommen')]),
    M('down, off; handing over', 'herunter, ab; abgeben', [ex('сдать', 'to hand in; to rent out', 'abgeben; vermieten'), ex('снять', 'to take off; to rent', 'abnehmen; mieten'), ex('съ+ехать', 'to move out; to drive down', 'ausziehen; herunterfahren')])
  ], { en: '<p>Two opposite pictures: <b>together</b> (собрать — collect) and <b>down / away</b> (снять — take off). Before a vowel or a cluster it becomes <b>со-</b> / <b>съ-</b>: собрать, съехать.</p>', de: '<p>Zwei Bilder: <b>zusammen</b> (собрать — sammeln, wie zusammen-) und <b>herunter / ab</b> (снять — abnehmen, wie ab-). Vor Konsonantengruppen <b>со-</b>, vor е <b>съ-</b>: собрать, съехать.</p>' });
  prefix('раз', 'раз- (рас-)', 'apart, in all directions; thoroughly', 'auseinander, verteilen; gründlich', [
    M('apart, to many people or places', 'auseinander, an viele verteilen', [ex('разд+ать', 'to hand out', 'austeilen'), ex('разъ+ехаться', 'to go separate ways', 'auseinanderfahren'), ex('разобр+ать', 'to take apart', 'auseinandernehmen')]),
    M('thoroughly, in detail', 'gründlich, im Detail', [ex('рассмотр+еть', 'to examine', 'prüfen, betrachten'), ex('распозн+ать', 'to recognise, to identify', 'erkennen'), ex('разобр+аться', 'to figure out', 'durchblicken')])
  ], { en: '<p>Spelled <b>рас-</b> before a voiceless consonant: <b>рас</b>смотреть, <b>рас</b>писание. English often has <b>dis-</b> or a particle: distribute, hand <i>out</i>, take <i>apart</i>.</p>', de: '<p>Vor stimmlosen Konsonanten <b>рас-</b>: <b>рас</b>смотреть. Deutsch meist <b>aus-</b>, <b>ver-</b> oder <b>auseinander-</b>: austeilen (раздать), verteilen, auseinandernehmen (разобрать).</p>' });
  prefix('о', 'о- (об-)', 'around, all over', 'um, rundherum', [
    M('around, covering the whole object', 'rundherum, das ganze Objekt', [ex('осмотр+еть', 'to examine, to look round', 'untersuchen, besichtigen'), ex('опис+ать', 'to describe', 'beschreiben'), ex('объ+ехать', 'to drive around', 'umfahren')])
  ], { en: '<p>Before a vowel <b>об-</b>: объехать — to drive around. Many о-verbs are idiomatic (оставить — to leave), so learn them with the example.</p>', de: '<p>Vor Vokal <b>об-</b>: объехать — umfahren. Deutsch oft <b>be-</b> oder <b>um-</b>: beschreiben (описать), besichtigen (осмотреть), umfahren (объехать).</p>' });
  prefix('про', 'про-', 'through, past; missing', 'durch, vorbei; verpassen', [
    M('through, past', 'durch, vorbei', [ex('про+ехать', 'to drive through / past', 'durchfahren, vorbeifahren'), ex('просмотр+еть', 'to look through', 'durchsehen'), ex('пройт+и', 'to go through; to pass', 'durchgehen; vergehen')]),
    M('missing, overlooking', 'verpassen, übersehen', [ex('про+ехать остан+овку', 'to miss one’s stop', 'die Haltestelle verpassen'), ex('просп+ать', 'to oversleep', 'verschlafen'), ex('пропуст+ить', 'to miss, to skip', 'verpassen, auslassen')])
  ], { en: '<p>English <b>through / past</b> and <b>over-</b> (oversleep — проспать). продать “to sell” is an old, opaque formation: learn it as a word.</p>', de: '<p>Deutsch <b>durch-</b> und <b>ver-</b>: durchsehen (просмотреть), verschlafen (проспать), verpassen (пропустить). продать „verkaufen“ ist alt und undurchsichtig.</p>' });
  prefix('по', 'по-', 'setting off; a little, for a while', 'losgehen; ein wenig, eine Weile', [
    M('setting off (motion verbs)', 'Aufbruch (Bewegungsverben)', [ex('пойт+и', 'to set off (on foot)', 'losgehen'), ex('по+ехать', 'to set off (by vehicle)', 'losfahren')]),
    M('a little, for a while', 'ein wenig, eine Weile', [ex('поговор+ить', 'to have a talk', 'sich kurz unterhalten'), ex('посид+еть', 'to sit for a while', 'eine Weile sitzen'), ex('посмотр+еть', 'to have a look', 'kurz anschauen')])
  ], { en: '<p>по- is the most common way to make a perfective with little change of meaning: смотреть → посмотреть.</p>', de: '<p>по- ist der häufigste Weg zum Perfektiv fast ohne Bedeutungsänderung: смотреть → посмотреть.</p>' });
  prefix('на', 'на-', 'onto; a large amount', 'auf; eine Menge', [
    M('onto, on the surface', 'auf, an die Oberfläche', [ex('над+еть', 'to put on (clothes)', 'anziehen'), ex('нап+исать', 'to write (down)', 'aufschreiben')]),
    M('a large amount, plenty', 'eine große Menge', [ex('над+елать ош+ибок', 'to make lots of mistakes', 'viele Fehler machen'), ex('накуп+ить', 'to buy a lot', 'viel einkaufen'), ex('наговор+ить', 'to say a lot (of things)', 'viel daherreden')])
  ], { en: '<p>English often uses <b>on</b> (put on) or a quantity word: наделать ошибок — make <i>loads</i> of mistakes.</p>', de: '<p>Deutsch oft <b>auf-/an-</b> (anziehen — надеть) oder ein Mengenwort: наделать ошибок — <i>jede Menge</i> Fehler machen.</p>' });
  prefix('пред', 'пред-', 'before, in front of', 'vor', [
    M('before, in front of', 'vor, voraus', [ex('предст+авить', 'to present, to introduce; to imagine', 'vorstellen'), ex('предупред+ить', 'to warn', 'vorwarnen'), ex('предсказ+ать', 'to predict', 'vorhersagen')])
  ], { en: '<p>Like Latin <b>pre-</b> / English <b>fore-</b>: предсказать — foretell, predict.</p>', de: '<p>Wie deutsch <b>vor-</b>: представить — vorstellen, предсказать — vorhersagen. Fast eine wörtliche Entsprechung.</p>' });

  /* 5. prefix + drill for family members that lacked them (only where the meaning is transparent) */
  function drill(t, pfx, meaning, en, de, tr) {
    var w = byPlain(t);
    if (!w) return;
    w.prefix = pfx;
    if (meaning != null && !w.prefixDrill && w.examples && w.examples.length) w.prefixDrill = { ex: 0, meaning: meaning, explain: { en: en, de: de } };
    if (tr) w.transparency = tr;
  }
  drill('доходить', 'до', 0, 'до- = reaching the destination: the letter got as far as the recipient (or didn’t).', 'до- = das Ziel erreichen: der Brief ist (nicht) bis zum Empfänger gekommen.');
  drill('доставлять', 'до', 0, 'до- = all the way to the customer: the order is delivered.', 'до- = bis zum Kunden: die Bestellung wird geliefert.');
  drill('собирать', 'с', 0, 'с(о)- = together: things are gathered into one suitcase.', 'с(о)- = zusammen: die Sachen kommen in einen Koffer.');
  drill('составлять', 'с', 0, 'с(о)- = together: parts are put together into a whole.', 'с(о)- = zusammen: Teile werden zu einem Ganzen zusammengestellt.');
  drill('сдавать', 'с', 1, 'с- = handing over: the flat is handed over to tenants.', 'с- = abgeben: die Wohnung wird an Mieter abgegeben.', 'figurative');
  drill('разбирать', 'раз', 1, 'раз- = in detail: we take the cause apart, piece by piece.', 'раз- = im Detail: wir nehmen die Ursache Stück für Stück auseinander.', 'figurative');
  drill('раздавать', 'раз', 0, 'раз- = to many people: each student gets a sheet.', 'раз- = an viele: jeder bekommt ein Blatt.');
  drill('распознавать', 'раз', 1, 'рас- = in detail: the program tells sounds apart and recognises words.', 'рас- = genau: das Programm unterscheidet Laute und erkennt Wörter.', 'figurative');
  drill('описывать', 'о', 0, 'о- = all over: the description covers the whole problem.', 'о- = rundherum: die Beschreibung erfasst das ganze Problem.', 'figurative');
  drill('продавать', 'про', null, '', '', 'opaque');
  drill('оставлять', 'о', null, '', '', 'opaque');
  drill('представлять', 'пред', 0, 'пред- = in front of: you present something before an audience.', 'пред- = vor: man stellt etwas vor Publikum vor.', 'figurative');
  drill('выдавать', 'вы', 0, 'вы- = out: the document is handed out to you.', 'вы- = heraus: das Dokument wird herausgegeben.');
  drill('выбирать', 'вы', 0, 'вы- = out of many: you pick one out.', 'вы- = aus vielen heraus: man nimmt eins heraus.');
  drill('забирать', 'за', 0, 'за- = a stop on the way: you call in and collect something.', 'за- = ein kurzer Halt: man kommt vorbei und holt etwas ab.');
  // со- before a consonant cluster: blank the whole prefix so the pattern stays readable.
  [['собирать', '___бирать'], ['составлять', '___ставлять']].forEach(function (x) { var w = byPlain(x[0]); if (w) w.drill = { t: x[1] }; });
})();
