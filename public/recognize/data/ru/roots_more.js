/* Additional high-frequency Russian root families (Roots tab):
 *   Verb families: бег (бегать/бежать), лет (летать/лететь), плат (платить), звон (звонить),
 *                  стро (строить), счит (считать)
 *   Word-building families: след (след/следовать), мер (мера/мерить)
 * Loaded after roots_layout.js so all words/pro/prefixes are registered and existing cards are reused cleanly.
 * Stress marked with "+" before stressed vowel (never before ё); converted on load by data/ru/config.js. */
(function () {
  'use strict';
  var P = GT.packs.ru;
  if (!P) return;

  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function plain(s) { return String(s || '').replace(/[+́]/g, '').trim().toLowerCase(); }
  function samePos(a, b) {
    if (!a || !b) return true;
    var va = a === 'verb' || a === 'phrasal verb';
    var vb = b === 'verb' || b === 'phrasal verb';
    if (va || vb) return va && vb;
    return a === b;
  }
  function existing(t, pos) {
    var k = plain(t);
    for (var i = 0; i < P.items.length; i++) {
      var x = P.items[i];
      if (samePos(x.pos, pos) && plain(x.t) === k) return x;
    }
    return null;
  }
  function enrich(exst, opts) {
    if (opts.base && !exst.rootId) exst.base = true;
    if (opts.core) exst.core = true;
    if (opts.prefix && !exst.prefix) exst.prefix = opts.prefix;
    if (opts.pair && !exst.pair) exst.pair = opts.pair;
    if (opts.pairLabel && !exst.pairLabel) exst.pairLabel = opts.pairLabel;
    if (opts.tr && !exst.transparency) exst.transparency = opts.tr;
    if (opts.pd && !exst.prefixDrill && exst.examples && exst.examples[opts.pd.ex]) {
      exst.prefixDrill = opts.pd;
    }
    return exst;
  }
  function v(id, t, aspect, forms, en, de, e, opts) {
    opts = opts || {};
    var exst = existing(t, 'verb');
    if (exst) return enrich(exst, opts);
    var o = {
      id: 'ru-r29-' + id, pos: 'verb', t: t, aspect: aspect,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] },
      en: en, de: de, examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B1'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.prefix) o.prefix = opts.prefix;
    if (opts.pair) o.pair = opts.pair;
    if (opts.pairLabel) o.pairLabel = opts.pairLabel;
    if (opts.tr) o.transparency = opts.tr;
    if (opts.pd) o.prefixDrill = opts.pd;
    if (opts.note) o.note = { en: opts.note[0], de: opts.note[1] };
    return o;
  }
  function n(id, t, gender, plural, en, de, e, opts) {
    opts = opts || {};
    var exst = existing(t, 'noun');
    if (exst) return enrich(exst, opts);
    var o = {
      id: 'ru-r29-' + id, pos: 'noun', t: t, gender: gender,
      plural: plural || undefined, en: en, de: de,
      examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B1'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.note) o.note = { en: opts.note[0], de: opts.note[1] };
    return o;
  }
  function adj(id, t, en, de, e, opts) {
    opts = opts || {};
    var exst = existing(t, 'adj');
    if (exst) return enrich(exst, opts);
    var o = {
      id: 'ru-r29-' + id, pos: 'adj', t: t, en: en, de: de,
      examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B1'
    };
    if (opts.core) o.core = true;
    return o;
  }
  function addRoot(id, t, label, sub, en, de, note, words, extra) {
    if (P.roots[id]) return;
    extra = extra || {};
    GT.registerRoot(Object.assign({
      id: id, verb: t, t: t, label: label, sub: sub, en: en, de: de,
      note: { en: note[0], de: note[1] },
      words: words
    }, extra));
    if (P.config.ROOT_PLAN.indexOf(id) < 0) P.config.ROOT_PLAN.push(id);
  }

  /* 1. бег / бегать — бежать */
  addRoot('бег', 'б+егать / беж+ать', 'БЕГАТЬ / БЕЖАТЬ', 'root -бег- / -беж-', 'to run', 'laufen, rennen',
    ['Motion pair: б+егать (multi-directional, habitual) vs беж+ать (one direction: бег+у, беж+ишь, бег+ут). Prefixed verbs pair -беж+ать (pf.) with -бег+ать (impf.): прибеж+ать (run up), убеж+ать (run away), избежать (avoid — literally “run out of”).',
     'Bewegungspaar: б+егать (mehrfach/allgemein) vs. беж+ать (eine Richtung: бег+у, беж+ишь, бег+ут). Präfixverben paaren -беж+ать (pf.) mit -бег+ать (impf.): прибеж+ать (angelaufen kommen), убеж+ать (weglaufen), избеж+ать (vermeiden).'], [
    v('beg-begat', 'б+егать', 'impf', ['б+егаю, б+егаешь', 'б+егал', 'one direction: беж+ать (бег+у, беж+ишь)'], 'to run, jog (habitually / around)', 'laufen, joggen',
      ex('По утр+ам он+а ч+асто [[б+егает]] в п+арке перед раб+отой.', 'In the morning she often goes jogging in the park before work.', 'Morgens joggt sie vor der Arbeit oft im Park.'),
      { base: true, pair: 'беж+ать', pairLabel: 'One direction', level: 'A2' }),
    v('beg-pribezhat', 'прибеж+ать', 'pf', ['прибег+у, прибеж+ишь', 'прибеж+ал', 'impf. прибег+ать'], 'to come running, run up', 'herbeigelaufen kommen',
      ex('Мы [[прибеж+али]] на перр+он за мин+уту до отправл+ения п+оезда.', 'We ran onto the platform a minute before the train departed.', 'Wir kamen eine Minute vor Abfahrt des Zuges auf den Bahnsteig gelaufen.'),
      { core: true, prefix: 'при', pair: 'прибег+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'при- = arrival at the destination (running up to the platform).', de: 'при- = Ankunft am Ziel (zum Bahnsteig gelaufen kommen).' } } }),
    v('beg-ubezhat', 'убеж+ать', 'pf', ['убег+у, убеж+ишь', 'убеж+ал', 'impf. убег+ать'], 'to run away, escape; to boil over (milk)', 'weglaufen, fliehen; überkochen (Milch)',
      ex('Щен+ок испуг+ался гр+ома и [[убеж+ал]] в сос+едний двор.', 'The puppy got scared of the thunder and ran away into the next yard.', 'Der Welpe erschrak vor dem Donner und lief in den Nachbarhof weg.'),
      { core: true, prefix: 'у', pair: 'убег+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'у- = movement away from a place.', de: 'у- = Bewegung weg von einem Ort.' } } }),
    v('beg-vybezhat', 'в+ыбежать', 'pf', ['в+ыбегу, в+ыбежишь', 'в+ыбежал', 'impf. выбег+ать'], 'to run out (of a building/room)', 'hinauslaufen, herausrennen',
      ex('Усл+ышав звон+ок курь+ера, он б+ыстро [[в+ыбежал]] к подъ+езду.', 'Hearing the courier ring, he quickly ran out to the entrance.', 'Als er den Kurier klingeln hörte, rannte er schnell zum Hauseingang hinaus.'),
      { core: true, prefix: 'вы', pair: 'выбег+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'вы- = running out of an enclosed space.', de: 'вы- = aus einem Raum hinauslaufen.' } } }),
    v('beg-perebezhat', 'перебеж+ать', 'pf', ['перебег+у, перебеж+ишь', 'перебеж+ал', 'impf. перебег+ать'], 'to run across (a street)', 'überqueren (rennend)',
      ex('Не ст+оит [[перебег+ать]] дор+огу на кр+асный свет.', 'You should not run across the road on a red light.', 'Man sollte nicht bei Rot über die Straße rennen.'),
      { core: true, prefix: 'пере', pair: 'перебег+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'пере- = crossing from one side to the other.', de: 'пере- = von einer Seite zur anderen hinüberlaufen.' } } }),
    v('beg-izbezhat', 'избеж+ать', 'pf', ['избег+у, избеж+ишь', 'избеж+ал', 'impf. избег+ать'], 'to avoid, escape (+ Gen.)', 'vermeiden, entgehen (+ Gen.)',
      ex('Ранняя пров+ерка помогл+а [[избеж+ать]] серьёзного сб+оя.', 'An early check helped avoid a serious outage.', 'Eine frühe Prüfung half, einen schweren Ausfall zu vermeiden.'),
      { core: true, prefix: 'из', pair: 'избег+ать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: { en: 'из- = literally “run out of” danger → avoid.', de: 'из- = wörtlich aus der Gefahr herauslaufen → vermeiden.' } } }),
    v('beg-zabezhat', 'забеж+ать', 'pf', ['забег+у, забеж+ишь', 'забеж+ал', 'impf. забег+ать'], 'to pop in briefly, drop by', 'kurz vorbeispringen',
      ex('По дор+оге дом+ой я [[забег+у]] в апт+еку на пять мин+ут.', 'On the way home I’ll pop into the pharmacy for five minutes.', 'Auf dem Heimweg springe ich kurz fünf Minuten in die Apotheke.'),
      { core: true, prefix: 'за', pair: 'забег+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'за- = a brief stop on the way somewhere.', de: 'за- = ein kurzer Abstecher unterwegs.' } } }),
    n('beg-probezhka', 'проб+ежка', 'f', 'проб+ежки', 'jog, morning run', 'das Joggen, der Lauf',
      ex('К+ороткая [[проб+ежка]] помог+ает просн+уться д+аже в п+асмурное +утро.', 'A short jog helps wake up even on an overcast morning.', 'Eine kurze Joggingrunde hilft sogar an einem grauen Morgen wach zu werden.')),
    n('beg-pobeg', 'поб+ег', 'm', 'поб+еги', 'escape, flight; plant shoot', 'die Flucht; der Trieb (Pflanze)',
      ex('В детективном ром+ане гл+авный гер+ой план+ирует дерзкий [[поб+ег]].', 'In the crime novel, the protagonist plans a daring escape.', 'Im Kriminalroman plant die Hauptfigur eine gewagte Flucht.'),
      { level: 'B2' })
  ]);

  /* 2. лет / летать — лететь */
  addRoot('лет', 'лет+ать / лет+еть', 'ЛЕТАТЬ / ЛЕТЕТЬ', 'root -лет- / -лёт-', 'to fly', 'fliegen',
    ['Motion pair for flying: лет+ать (habitual / round trip) vs лет+еть (one direction: леч+у, лет+ишь). Prefixed verbs pair -лет+еть (pf.) with -лет+ать (impf.). Nouns often show -лёт: полёт (flight), перелёт (long flight), вылет (departure).',
     'Bewegungspaar fürs Fliegen: лет+ать (regelmäßig / hin und zurück) vs. лет+еть (eine Richtung: леч+у, лет+ишь). Präfixverben paaren -лет+еть (pf.) mit -лет+ать (impf.). Nomen zeigen oft -лёт: полёт (Flug), перелёт, вылет (Abflug).'], [
    v('let-letat', 'лет+ать', 'impf', ['лет+аю, лет+аешь', 'лет+ал', 'one direction: лет+еть (леч+у, лет+ишь)'], 'to fly (regularly / in general)', 'fliegen',
      ex('По раб+оте ему прих+одится [[лет+ать]] в командир+овки дв+ажды в м+есяц.', 'For work he has to fly on business trips twice a month.', 'Beruflich muss er zweimal im Monat auf Geschäftsreise fliegen.'),
      { base: true, pair: 'лет+еть', pairLabel: 'One direction', level: 'A2' }),
    v('let-priletet', 'прилет+еть', 'pf', ['прилеч+у, прилет+ишь', 'прилет+ел', 'impf. прилет+ать'], 'to arrive by air, fly in', 'anfliegen, ankommen (per Flugzeug)',
      ex('Наш рейс [[прилет+ел]] в М+юнхен на д+есять мин+ут р+аньше гр+афика.', 'Our flight arrived in Munich ten minutes ahead of schedule.', 'Unser Flug kam zehn Minuten vor Plan in München an.'),
      { core: true, prefix: 'при', pair: 'прилет+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'при- = arriving at the destination by plane.', de: 'при- = Ankunft am Zielort mit dem Flugzeug.' } } }),
    v('let-uletet', 'улет+еть', 'pf', ['улеч+у, улет+ишь', 'улет+ел', 'impf. улет+ать'], 'to fly away, depart by air', 'wegfliegen, abfliegen',
      ex('Осенью перелётные пт+ицы [[улет+ают]] на юг.', 'In autumn, migratory birds fly away to the south.', 'Im Herbst fliegen Zugvögel nach Süden weg.'),
      { core: true, prefix: 'у', pair: 'улет+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'у- = departing away from a place.', de: 'у- = wegfliegen.' } } }),
    v('let-vyletet', 'в+ылететь', 'pf', ['в+ылечу, в+ылетишь', 'в+ылетел', 'impf. вылет+ать'], 'to take off, depart (flight); to crash (app, coll.)', 'abfliegen, starten; abstürzen (App, ugs.)',
      ex('Самолёт [[в+ылетел]] без зад+ержки, несмотря на с+ильный в+етер.', 'The plane took off without delay despite the strong wind.', 'Das Flugzeug hob trotz des starken Windes ohne Verspätung ab.'),
      { core: true, prefix: 'вы', pair: 'вылет+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'вы- = leaving the departure airport.', de: 'вы- = vom Startflughafen abfliegen.' } } }),
    v('let-pereletet', 'перелет+еть', 'pf', ['перелеч+у, перелет+ишь', 'перелет+ел', 'impf. перелет+ать'], 'to fly across (an ocean, border)', 'überfliegen, hinüberfliegen',
      ex('За один день мы [[перелет+ели]] через весь контин+ент.', 'In one day we flew across the entire continent.', 'An einem Tag flogen wir über den gesamten Kontinent hinweg.'),
      { core: true, prefix: 'пере', pair: 'перелет+ать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'пере- = crossing from one side to the other by air.', de: 'пере- = von einer Seite zur anderen fliegen.' } } }),
    v('let-proletet', 'пролет+еть', 'pf', ['пролеч+у, пролет+ишь', 'пролет+ел', 'impf. пролет+ать'], 'to fly past / over; to fly by (of time)', 'vorbeifliegen; verfliegen (Zeit)',
      ex('Нед+еля в г+орах [[пролет+ела]] соверш+енно незам+етно.', 'The week in the mountains flew by completely unnoticed.', 'Die Woche in den Bergen verflog völlig unbemerkt.'),
      { core: true, prefix: 'про', pair: 'пролет+ать', pairLabel: 'Imperfective', tr: 'figurative',
        pd: { ex: 0, meaning: 0, explain: { en: 'про- = passing swiftly past (literally or of time).', de: 'про- = schnell vorbeiziehen (auch zeitlich).' } } }),
    n('let-polyot', 'полёт', 'm', 'полёты', 'flight', 'der Flug',
      ex('Прям+ой [[полёт]] до В+ены заним+ает м+еньше двух час+ов.', 'A direct flight to Vienna takes under two hours.', 'Ein Direktflug nach Wien dauert weniger als zwei Stunden.')),
    n('let-vylet', 'в+ылет', 'm', 'в+ылеты', 'flight departure', 'der Abflug',
      ex('Регистр+ация закр+ывается за сорок мин+ут до [[в+ылета]].', 'Check-in closes forty minutes before departure.', 'Der Check-in schließt vierzig Minuten vor Abflug.')),
    n('let-perelyot', 'перелёт', 'm', 'перелёты', 'flight, air journey (especially long-haul)', 'der Flug, Langstreckenflug',
      ex('П+осле д+олгого [[перелёта]] х+очется т+олько в+ыспаться.', 'After a long flight, all you want is a good sleep.', 'Nach einem langen Flug möchte man einfach nur ausschlafen.'),
      { level: 'B2' })
  ]);

  /* 3. плат / платить */
  addRoot('плат', 'плат+ить', 'ПЛАТИТЬ', 'root -плат-', 'to pay', 'bezahlen, zahlen',
    ['Note the consonant alternation т/ч in 1st person singular (плат+ить → плач+у, пл+атишь). Prefixes give exact payment types: заплат+ить (pay), оплат+ить (pay for a bill/item + Acc.), переплат+ить (overpay), доплат+ить (pay the extra difference), выпл+ачивать (pay out in instalments/salaries).',
     'Beachte den Wechsel т/ч in der 1. Person Singular (плат+ить → плач+у, пл+атишь). Präfixe unterscheiden Zahlungsarten genau: заплат+ить (bezahlen), оплат+ить (eine Rechnung begleichen), переплат+ить (zu viel zahlen), доплат+ить (nachzahlen), выпл+ачивать (auszahlen).'], [
    v('plat-platit', 'плат+ить', 'impf', ['плач+у, пл+атишь', 'плат+ил', 'pf. заплат+ить'], 'to pay', 'bezahlen, zahlen',
      ex('Зд+есь м+ожно [[плат+ить]] к+артой или телефоном.', 'You can pay here by card or phone.', 'Hier kann man mit Karte oder Handy bezahlen.'),
      { base: true, pair: 'заплат+ить', pairLabel: 'Perfective', level: 'A2' }),
    v('plat-zaplatit', 'заплат+ить', 'pf', ['заплач+у, запл+атишь', 'заплат+ил', 'impf. плат+ить'], 'to pay (for something — за + Acc.)', 'bezahlen (für + Akk.)',
      ex('Мы уже [[заплат+или]] за ужин и можем идти.', 'We have already paid for dinner and can go.', 'Wir haben das Abendessen schon bezahlt und können gehen.'),
      { core: true, prefix: 'за', pair: 'плат+ить', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('plat-oplatit', 'оплат+ить', 'pf', ['оплач+у, опл+атишь', 'оплат+ил', 'impf. опл+ачивать'], 'to pay for (a bill, fare, order — direct Acc., no за!)', 'begleichen, bezahlen (ohne Präposition)',
      ex('Н+ужно [[оплат+ить]] счёт до пятн+адцатого числ+а.', 'The invoice must be paid by the fifteenth.', 'Die Rechnung muss bis zum fünfzehnten bezahlt werden.'),
      { core: true, prefix: 'о', pair: 'опл+ачивать', pairLabel: 'Imperfective', tr: 'transparent',
        note: { en: 'Use direct accusative without «за»: оплатить счёт / билет (not *оплатить за счёт).', de: 'Direkter Akkusativ ohne «за»: оплатить счёт / билет (nicht *оплатить за счёт).' } }),
    v('plat-pereplatit', 'переплат+ить', 'pf', ['переплач+у, перепл+атишь', 'переплат+ил', 'impf. перепл+ачивать'], 'to overpay', 'zu viel bezahlen, überzahlen',
      ex('Если не сравн+ить тарифы зар+анее, легк+о [[переплат+ить]] вдв+ое.', 'If you don’t compare tariffs in advance, it’s easy to pay twice as much.', 'Wenn man Tarife nicht vorher vergleicht, zahlt man leicht das Doppelte.'),
      { core: true, prefix: 'пере', pair: 'перепл+ачивать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: { en: 'пере- = excess, paying too much.', de: 'пере- = Übermaß, zu viel bezahlen.' } } }),
    v('plat-doplatit', 'доплат+ить', 'pf', ['доплач+у, допл+атишь', 'доплат+ил', 'impf. допл+ачивать'], 'to pay extra, pay the remaining balance', 'nachzahlen, draufzahlen',
      ex('За дополнительный багаж пришл+ось [[доплат+ить]] на ст+ойке.', 'We had to pay extra at the desk for the additional luggage.', 'Für das zusätzliche Gepäck mussten wir am Schalter nachzahlen.'),
      { core: true, prefix: 'до', pair: 'допл+ачивать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'до- = topping up the payment to the full amount.', de: 'до- = den fehlenden Betrag bis zur vollen Summe nachzahlen.' } } }),
    v('plat-vyplachivat', 'выпл+ачивать', 'impf', ['выпл+ачиваю, выпл+ачиваешь', 'выпл+ачивал', 'pf. в+ыплатить'], 'to pay out (salary, benefit); to pay off (a loan)', 'auszahlen; abbezahlen (Kredit)',
      ex('Комп+ания стабильно [[выпл+ачивает]] пр+емии по ит+огам г+ода.', 'The company reliably pays out year-end bonuses.', 'Das Unternehmen zahlt zuverlässig Jahresendprämien aus.'),
      { core: true, prefix: 'вы', pair: 'в+ыплатить', pairLabel: 'Perfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: { en: 'вы- = paying money out from an account or budget.', de: 'вы- = Geld aus einem Budget auszahlen.' } } }),
    n('plat-oplata', 'опл+ата', 'f', '', 'payment', 'die Bezahlung, Zahlung',
      ex('П+осле [[опл+аты]] билет ср+азу придёт на п+очту.', 'After payment, the ticket will arrive by email right away.', 'Nach der Bezahlung kommt das Ticket sofort per E-Mail.')),
    n('plat-zarplata', 'зарпл+ата', 'f', 'зарпл+аты', 'salary, wages', 'das Gehalt, der Lohn',
      ex('[[Зарпл+ату]] перечисляют дв+ажды в м+есяц.', 'Salary is transferred twice a month.', 'Das Gehalt wird zweimal im Monat überwiesen.')),
    n('plat-platyozh', 'платёж', 'm', 'платеж+и', 'payment (transaction, instalment)', 'die Zahlung, Rate',
      ex('Банк подтвердил [[платёж]] через н+есколько сек+унд.', 'The bank confirmed the payment within a few seconds.', 'Die Bank bestätigte die Zahlung binnen weniger Sekunden.'),
      { level: 'B2' })
  ]);

  /* 4. звон / звонить */
  addRoot('звон', 'звон+ить', 'ЗВОНИТЬ', 'root -звон-', 'to ring; to call (by phone)', 'klingeln; anrufen',
    ['Watch the stress in Russian: the ending stays stressed — звон+ит, позвон+ишь, перезвон+им! Key daily and office verbs: позвон+ить (call), перезвон+ить (call back), дозвон+иться (get through), созвон+иться (jump on a call together), обзвон+ить (call around a list).',
     'Achte auf die Betonung: die Endung bleibt betont — звон+ит, позвон+ишь, перезвон+им! Wichtige Alltags- und Büroverben: позвон+ить (anrufen), перезвон+ить (zurückrufen), дозвон+иться (durchkommen), созвон+иться (zusammen telefonieren), обзвон+ить (abtelefonieren).'], [
    v('zvon-zvonit', 'звон+ить', 'impf', ['звон+ю, звон+ишь', 'звон+ил', 'pf. позвон+ить'], 'to phone, call; to ring (bell, alarm)', 'anrufen; klingeln',
      ex('Если б+удут вопр+осы, [[звон+и]] мне в люб+ое вр+емя.', 'If you have any questions, call me anytime.', 'Wenn es Fragen gibt, ruf mich jederzeit an.'),
      { base: true, pair: 'позвон+ить', pairLabel: 'Perfective', level: 'A2' }),
    v('zvon-pozvonit', 'позвон+ить', 'pf', ['позвон+ю, позвон+ишь', 'позвон+ил', 'impf. звон+ить'], 'to give a call, phone (+ Dat.)', 'anrufen (+ Dat.)',
      ex('Я [[позвон+ю]] теб+е, как т+олько выйду из вокз+ала.', 'I’ll call you as soon as I leave the station.', 'Ich rufe dich an, sobald ich aus dem Bahnhof komme.'),
      { core: true, prefix: 'по', pair: 'звон+ить', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('zvon-perezvonit', 'перезвон+ить', 'pf', ['перезвон+ю, перезвон+ишь', 'перезвон+ил', 'impf. перезв+анивать'], 'to call back', 'zurückrufen',
      ex('Сейчас я на совещ+ании — м+ожно я [[перезвон+ю]] через полчас+а?', 'I’m in a meeting right now — may I call back in half an hour?', 'Ich bin gerade in einer Besprechung — darf ich in einer halben Stunde zurückrufen?'),
      { core: true, prefix: 'пере', pair: 'перезв+анивать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 1, explain: { en: 'пере- = calling again / back in return.', de: 'пере- = erneut bzw. zurückrufen.' } } }),
    v('zvon-dozvonitsya', 'дозвон+иться', 'pf', ['дозвон+юсь, дозвон+ишься', 'дозвон+ился', 'impf. дозв+аниваться'], 'to get through (by phone — до + Gen.)', 'jemanden telefonisch erreichen, durchkommen',
      ex('Утром я полчас+а пытался [[дозвон+иться]] до регистр+атуры.', 'In the morning I tried for half an hour to get through to the clinic desk.', 'Am Morgen versuchte ich eine halbe Stunde lang, die Anmeldung telefonisch zu erreichen.'),
      { core: true, prefix: 'до', pair: 'дозв+аниваться', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'до- = reaching the other person on the line.', de: 'до- = das Ziel erreichen, durchkommen.' } } }),
    v('zvon-sozvonitsya', 'созвон+иться', 'pf', ['созвон+юсь, созвон+ишься', 'созвон+ился', 'impf. созв+аниваться'], 'to have a call together, arrange a call', 'miteinander telefonieren, einen Call vereinbaren',
      ex('Дав+ай [[созвон+имся]] в ч+етверг утром и обсудим мак+ет.', 'Let’s jump on a call on Thursday morning and discuss the mockup.', 'Lass uns am Donnerstagmorgen telefonieren und das Mockup besprechen.'),
      { core: true, prefix: 'с', pair: 'созв+аниваться', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 0, explain: { en: 'со- + -ся = connecting together on a call.', de: 'со- + -ся = sich telefonisch zusammenschalten.' } } }),
    v('zvon-obzvonit', 'обзвон+ить', 'pf', ['обзвон+ю, обзвон+ишь', 'обзвон+ил', 'impf. обзв+анивать'], 'to phone round (a whole list of people/places)', 'der Reihe nach anrufen, abtelefonieren',
      ex('Администр+атор [[обзвон+ил]] всех уч+астников, чтобы уточнить вр+емя.', 'The coordinator called all participants to confirm the time.', 'Die Koordinatorin telefonierte alle Teilnehmenden ab, um die Uhrzeit zu bestätigen.'),
      { core: true, prefix: 'о', pair: 'обзв+анивать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: { en: 'об- = going all the way around a list of contacts.', de: 'об- = rundherum alle Kontakte abtelefonieren.' } } }),
    n('zvon-zvonok', 'звон+ок', 'm', 'звонк+и', 'phone call; bell, doorbell', 'der Anruf; die Klingel',
      ex('Спас+ибо за быстрый [[звон+ок]], теп+ерь всё пон+ятно.', 'Thanks for the quick call, everything is clear now.', 'Danke für den schnellen Anruf, jetzt ist alles klar.')),
    n('zvon-sozvon', 'созв+он', 'm', 'созв+оны', 'team call, online meeting (workplace Russian)', 'der Call, das Online-Meeting',
      ex('У нас в д+есять кор+откий [[созв+он]] с ком+андой разраб+отки.', 'At ten we have a short call with the development team.', 'Um zehn haben wir einen kurzen Call mit dem Entwicklerteam.'),
      { level: 'B1' })
  ]);

  /* 5. стро / строить */
  addRoot('стро', 'стр+оить', 'СТРОИТЬ', 'root -стро-', 'to build, construct; to set up', 'bauen; einrichten',
    ['The stem стр+оить (“to build”) goes far beyond construction — in IT and everyday life it produces настр+оить (configure/tune), устр+оить (arrange/suit), встр+оить (embed/build in), перестр+оить (rebuild/restructure) and устр+ойство (device).',
     'Der Stamm стр+оить („bauen“) reicht weit über den Bau hinaus — in Alltag und IT entstehen настр+оить (einrichten/konfigurieren), устр+оить (organisieren/passen), встр+оить (einbauen), перестр+оить (umbauen) und устр+ойство (Gerät).'], [
    v('stro-stroit', 'стр+оить', 'impf', ['стр+ою, стр+оишь', 'стр+оил', 'pf. постр+оить'], 'to build, construct; to make (plans)', 'bauen; schmieden (Pläne)',
      ex('Р+ядом со ст+анцией сейч+ас [[стр+оят]] н+овую велодор+ожку.', 'Right next to the station they are building a new cycle path.', 'Direkt neben der Station baut man gerade einen neuen Radweg.'),
      { base: true, pair: 'постр+оить', pairLabel: 'Perfective', level: 'A2' }),
    v('stro-postroit', 'постр+оить', 'pf', ['постр+ою, постр+оишь', 'постр+оил', 'impf. стр+оить'], 'to build (to completion)', 'fertigbauen, errichten',
      ex('За два г+ода в рай+оне [[постр+оили]] шк+олу и спорт+ивный центр.', 'In two years they built a school and a sports centre in the district.', 'In zwei Jahren wurden im Viertel eine Schule und ein Sportzentrum gebaut.'),
      { core: true, prefix: 'по', pair: 'стр+оить', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('stro-nastroit', 'настр+оить', 'pf', ['настр+ою, настр+оишь', 'настр+оил', 'impf. настр+аивать'], 'to configure, set up (software/device); to tune (instrument)', 'einrichten, konfigurieren; stimmen',
      ex('Айтишник помог [[настр+оить]] двухф+акторную защиту на телефоне.', 'The IT specialist helped configure two-factor protection on the phone.', 'Der IT-Fachmann half, den Zwei-Faktor-Schutz auf dem Handy einzurichten.'),
      { core: true, prefix: 'на', pair: 'настр+аивать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B1' }),
    v('stro-ustroit', 'устр+оить', 'pf', ['устр+ою, устр+оишь', 'устр+оил', 'impf. устр+аивать'], 'to arrange, organise; to suit someone (Меня это устраивает)', 'organisieren, veranstalten; jemandem passen',
      ex('Предл+оженный гр+афик полн+остью [[устр+оил]] всю ком+анду.', 'The proposed schedule suited the entire team completely.', 'Der vorgeschlagene Zeitplan passte dem ganzen Team vollkommen.'),
      { core: true, prefix: 'у', pair: 'устр+аивать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B1',
        note: { en: 'Устр+оиться на раб+оту = to get a job.', de: 'Устр+оиться на раб+оту = eine Arbeit bekommen.' } }),
    v('stro-perestroit', 'перестр+оить', 'pf', ['перестр+ою, перестр+оишь', 'перестр+оил', 'impf. перестр+аивать'], 'to rebuild, remodel; to restructure (a workflow)', 'umbauen; umstrukturieren',
      ex('П+осле пере+езда в н+овый +офис мы [[перестр+оили]] пр+авила деж+урств.', 'After moving into the new office, we restructured the on-call rules.', 'Nach dem Umzug ins neue Büro haben wir die Bereitschaftsregeln umgebaut.'),
      { core: true, prefix: 'пере', pair: 'перестр+аивать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: { en: 'пере- = building anew in a different way.', de: 'пере- = neu und anders aufbauen.' } } }),
    v('stro-vstroit', 'встр+оить', 'pf', ['встр+ою, встр+оишь', 'встр+оил', 'impf. встр+аивать'], 'to build in, embed, integrate', 'einbauen, integrieren',
      ex('В кухню решили [[встр+оить]] посудом+оечную маш+ину под стол+ешницу.', 'They decided to build a dishwasher into the kitchen under the worktop.', 'Man beschloss, eine Spülmaschine unter der Arbeitsplatte einzubauen.'),
      { core: true, prefix: 'в', pair: 'встр+аивать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: { en: 'в- = building something inside a structure.', de: 'в- = etwas hineinbauen.' } } }),
    v('stro-zastroit', 'застр+оить', 'pf', ['застр+ою, застр+оишь', 'застр+оил', 'impf. застр+аивать'], 'to build over, develop (land with buildings)', 'bebauen, zubauen',
      ex('Пуст+ырь у реки быстро [[застр+оили]] жилыми дом+ами.', 'The empty lot by the river was quickly built over with apartment blocks.', 'Das Brachland am Fluss wurde schnell mit Wohnhäusern bebaut.'),
      { prefix: 'за', pair: 'застр+аивать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: { en: 'за- = covering an area completely with buildings.', de: 'за- = eine Fläche vollständig bebauen.' } } }),
    n('stro-nastroyka', 'настр+ойка', 'f', 'настр+ойки', 'setting, configuration (usually pl. настройки)', 'die Einstellung, Konfiguration',
      ex('Проверьте [[настр+ойки]] уведомл+ений в л+ичном кабин+ете.', 'Check your notification settings in your account.', 'Prüfen Sie die Benachrichtigungseinstellungen in Ihrem Konto.')),
    n('stro-ustroystvo', 'устр+ойство', 'n', 'устр+ойства', 'device, gadget; layout/structure', 'das Gerät; der Aufbau',
      ex('Это [[устр+ойство]] работает до дв+ух суток без подзар+ядки.', 'This device runs up to two days without recharging.', 'Dieses Gerät läuft bis zu zwei Tage ohne Aufladen.')),
    n('stro-stroyka', 'стр+ойка', 'f', 'стр+ойки', 'construction site, building work', 'die Baustelle, der Bau',
      ex('Из-за [[стр+ойки]] на сос+едней +улице перекр+ыли троту+ар.', 'Because of construction on the next street, the pavement is closed.', 'Wegen der Baustelle in der Nachbarstraße ist der Gehweg gesperrt.')),
  ]);

  /* 6. счит / считать */
  addRoot('счит', 'счит+ать', 'СЧИТАТЬ', 'root -счит- / -чёт-', 'to count; to consider, think', 'zählen, rechnen; meinen, halten für',
    ['Счит+ать means both “to count” (pf. посчит+ать) and “to consider / hold an opinion” (Я счит+аю, что…). Prefixes produce the core financial and planning verbs: рассчит+ать (calculate / count on), пересчит+ать (recount), подсчит+ать (tally up), просчит+ать (calculate ahead). Nouns show -чёт: счёт (bill/account), расчёт (calculation), отчёт (report).',
     'Счит+ать heißt sowohl „zählen“ (pf. посчит+ать) als auch „meinen, der Ansicht sein“ (Я счит+аю, что …). Präfixe bilden zentrale Finanz- und Planungsverben: рассчит+ать (berechnen / rechnen mit), пересчит+ать (nachzählen), подсчит+ать (zusammenzählen), просчит+ать (durchkalkulieren). Nomen mit -чёт: счёт (Rechnung/Konto), расчёт, отчёт (Bericht).'], [
    v('schit-schitat', 'счит+ать', 'impf', ['счит+аю, счит+аешь', 'счит+ал', 'pf. посчит+ать'], 'to count; to consider, think (Я считаю, что…)', 'zählen; meinen, finden',
      ex('Я [[счит+аю]], что нам н+ужно обсудить риски до з+апуска.', 'I think we need to discuss the risks before launch.', 'Ich bin der Meinung, dass wir die Risiken vor dem Start besprechen sollten.'),
      { base: true, pair: 'посчит+ать', pairLabel: 'Perfective', level: 'A2' }),
    v('schit-poschitat', 'посчит+ать', 'pf', ['посчит+аю, посчит+аешь', 'посчит+ал', 'impf. счит+ать'], 'to count up, calculate; to deem', 'zählen, ausrechnen; halten für',
      ex('Дав+ай [[посчит+аем]], во ск+олько обойдётся по+ездка на по+езде.', 'Let’s calculate how much the train trip will cost.', 'Lass uns ausrechnen, wie viel die Zugfahrt kostet.'),
      { core: true, prefix: 'по', pair: 'счит+ать', pairLabel: 'Imperfective', tr: 'transparent' }),
    v('schit-rasschitat', 'рассчит+ать', 'pf', ['рассчит+аю, рассчит+аешь', 'рассчит+ал', 'impf. рассч+итывать'], 'to calculate (precisely); (impf. на + Acc.) to count on, expect', 'berechnen, kalkulieren; (impf. auf) rechnen mit',
      ex('Инжен+еры [[рассчит+али]] нагр+узку на мост с больш+им зап+асом.', 'The engineers calculated the load on the bridge with a wide safety margin.', 'Die Ingenieure berechneten die Belastung der Brücke mit großem Spielraum.'),
      { core: true, prefix: 'раз', pair: 'рассч+итывать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: { en: 'рас- = calculating thoroughly in detail.', de: 'рас- = gründlich und genau durchrechnen.' } } }),
    v('schit-pereschitat', 'пересчит+ать', 'pf', ['пересчит+аю, пересчит+аешь', 'пересчит+ал', 'impf. пересч+итывать'], 'to recount, recalculate; to convert (currency)', 'nachzählen; umrechnen',
      ex('Касс+ир аккуратно [[пересчит+ал]] сдачу перед в+ыдачей.', 'The cashier carefully recounted the change before handing it over.', 'Der Kassierer zählte das Wechselgeld vor dem Herausgeben sorgfältig nach.'),
      { core: true, prefix: 'пере', pair: 'пересч+итывать', pairLabel: 'Imperfective', tr: 'transparent',
        pd: { ex: 0, meaning: 1, explain: { en: 'пере- = counting again to verify.', de: 'пере- = noch einmal nachzählen.' } } }),
    v('schit-podschitat', 'подсчит+ать', 'pf', ['подсчит+аю, подсчит+аешь', 'подсчит+ал', 'impf. подсч+итывать'], 'to tally up, total up (votes, costs)', 'zusammenzählen, auswerten',
      ex('К в+ечеру ком+иссия [[подсчит+ала]] все голос+а.', 'By evening the committee had tallied all the votes.', 'Bis zum Abend hatte die Kommission alle Stimmen ausgezählt.'),
      { core: true, prefix: 'под', pair: 'подсч+итывать', pairLabel: 'Imperfective', tr: 'transparent', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: { en: 'под- = drawing a sum under the column.', de: 'под- = die Summe unter dem Strich zusammenzählen.' } } }),
    v('schit-proschitat', 'просчит+ать', 'pf', ['просчит+аю, просчит+аешь', 'просчит+ал', 'impf. просч+итывать'], 'to calculate ahead, think through (moves, risks)', 'durchkalkulieren, vorausberechnen',
      ex('Важно зар+анее [[просчит+ать]] все возможные расх+оды.', 'It is important to calculate all possible expenses in advance.', 'Es ist wichtig, alle möglichen Kosten im Voraus durchzukalkulieren.'),
      { core: true, prefix: 'про', pair: 'просч+итывать', pairLabel: 'Imperfective', tr: 'figurative', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: { en: 'про- = working through the numbers from start to finish.', de: 'про- = von Anfang bis Ende durchrechnen.' } } }),
    n('schit-schyot', 'счёт', 'm', 'счет+а', 'bill, invoice; bank account; score', 'die Rechnung; das Konto; der Spielstand',
      ex('Принес+ите, пож+алуйста, [[счёт]].', 'Please bring the bill.', 'Bringen Sie bitte die Rechnung.')),
    n('schit-raschyot', 'расчёт', 'm', 'расчёты', 'calculation, estimate; settlement', 'die Berechnung, Kalkulation; die Abrechnung',
      ex('В [[расчёт]] включил+и и стоимость дост+авки.', 'The estimate also included the delivery cost.', 'In die Berechnung wurden auch die Lieferkosten einbezogen.'),
      { level: 'B2' }),
    n('schit-otchyot', 'отчёт', 'm', 'отчёты', 'report', 'der Bericht',
      ex('Еженед+ельный [[отчёт]] гот+ов к отпр+авке.', 'The weekly report is ready to send.', 'Der Wochenbericht ist versandfertig.')),
  ]);

  /* 7. след (Word-building family) */
  addRoot('след', 'след / сл+едовать', 'СЛЕД / СЛЕДОВАТЬ', 'root -след-', 'trace, track; to follow, research', 'Spur; folgen, forschen',
    ['One of Russian’s most productive word-building stems: след (trace/footprint), сл+едовать (follow), сл+едующий (next), иссл+едовать (research/investigate), посл+едствие (consequence), насл+едство (inheritance).',
     'Eine der produktivsten russischen Wortfamilien: след (Spur), сл+едовать (folgen), сл+едующий (nächster), иссл+едовать (erforschen/untersuchen), посл+едствие (Folge/Konsequenz), насл+едство (Erbe).'], [
    n('sled-sled', 'след', 'm', 'след+ы', 'trace, track, footprint', 'die Spur',
      ex('На св+ежем снег+у был+и видн+ы [[след+ы]] лис+ы.', 'Tracks of a fox were visible in the fresh snow.', 'Im frischen Schnee waren Spuren eines Fuchses zu sehen.'),
      { base: true }),
    v('sled-sledovat', 'сл+едовать', 'impf', ['сл+едую, сл+едуешь', 'сл+едовал', 'pf. посл+едовать'], 'to follow (advice, rules — + Dat.); to follow logically', 'folgen (+ Dat.); sich ergeben',
      ex('Во вр+емя эваку+ации н+ужно чётко [[сл+едовать]] инстр+укциям.', 'During an evacuation you must follow instructions clearly.', 'Während einer Evakuierung muss man den Anweisungen genau folgen.'),
      { core: true, pair: 'посл+едовать', pairLabel: 'Perfective' }),
    v('sled-issledovat', 'иссл+едовать', 'impf', ['иссл+едую, иссл+едуешь', 'иссл+едовал', '—'], 'to research, study, investigate', 'erforschen, untersuchen',
      ex('Учёные [[иссл+едуют]] влиян+ие шум+а на к+ачество сна.', 'Scientists are studying the effect of noise on sleep quality.', 'Wissenschaftler untersuchen den Einfluss von Lärm auf die Schlafqualität.'),
      { core: true, level: 'B2' }),
    v('sled-presledovat', 'пресл+едовать', 'impf', ['пресл+едую, пресл+едуешь', 'пресл+едовал', '—'], 'to pursue (a goal); to chase, persecute', 'verfolgen (ein Ziel / jemanden)',
      ex('Этот про+ект [[пресл+едует]] прост+ую цель — сэкономить вр+емя кли+ентов.', 'This project pursues a simple goal — to save clients time.', 'Dieses Projekt verfolgt ein einfaches Ziel — Kunden Zeit zu sparen.'),
      { core: true, level: 'B2' }),
    adj('sled-sleduyushchiy', 'сл+едующий', 'next, following', 'nächster, folgend',
      ex('[[Сл+едующий]] п+оезд отправляется через пятн+адцать мин+ут.', 'The next train departs in fifteen minutes.', 'Der nächste Zug fährt in fünfzehn Minuten ab.'),
      { core: true, level: 'A2' }),
    n('sled-posledstvie', 'посл+едствие', 'n', 'посл+едствия', 'consequence, aftermath', 'die Folge, Konsequenz',
      ex('Важно заранее оц+енить все [[посл+едствия]] такого реш+ения.', 'It is important to assess all consequences of such a decision in advance.', 'Es ist wichtig, alle Folgen einer solchen Entscheidung im Voraus abzuschätzen.'),
      { core: true, level: 'B2' }),
    n('sled-issledovanie', 'иссл+едование', 'n', 'иссл+едования', 'study, research, investigation', 'die Studie, Forschung, Untersuchung',
      ex('Н+овое [[иссл+едование]] подтверд+ило наши расчёты.', 'The new study confirmed our calculations.', 'Die neue Studie bestätigte unsere Berechnungen.'),
      { level: 'B2' }),
    n('sled-nasledstvo', 'насл+едство', 'n', 'насл+едства', 'inheritance, legacy', 'das Erbe, die Erbschaft',
      ex('Дом в дер+евне дост+ался им в [[насл+едство]] от д+едушки.', 'The house in the village came to them as an inheritance from their grandfather.', 'Das Haus auf dem Land erhielten sie als Erbschaft vom Großvater.'),
      { level: 'B2' })
  ], { mapVerbs: false, group: 'Word-building families' });

  /* 8. мер (Word-building family) */
  addRoot('мер', 'м+ера / м+ерить', 'МЕРА / МЕРИТЬ', 'root -мер-', 'measure; to measure', 'Maß; messen',
    ['The stem -мер- links measuring, size and proportion: м+ера (measure), изм+ерить (measure), прим+ерить (try on), разм+ер (size), прим+ер (example), нам+ерение (intention), ум+еренный (moderate).',
     'Der Stamm -мер- verbindet Messen, Größe und Maß: м+ера (Maß/Maßnahme), изм+ерить (messen), прим+ерить (anprobieren), разм+ер (Größe), прим+ер (Beispiel), нам+ерение (Absicht), ум+еренный (mäßig).'], [
    n('mer-mera', 'м+ера', 'f', 'м+еры', 'measure (step taken); extent, limit', 'die Maßnahme; das Maß',
      ex('В к+ачестве временной [[м+еры]] доступ огр+аничили по распис+анию.', 'As a temporary measure, access was restricted by schedule.', 'Als vorübergehende Maßnahme wurde der Zugang zeitlich begrenzt.'),
      { base: true }),
    v('mer-izmerit', 'изм+ерить', 'pf', ['изм+ерю, изм+еришь', 'изм+ерил', 'impf. измер+ять'], 'to measure (temperature, length, speed)', 'messen',
      ex('Медсестр+а [[изм+ерила]] давл+ение и запис+ала результ+ат в к+арту.', 'The nurse measured the blood pressure and wrote the result in the chart.', 'Die Krankenschwester maß den Blutdruck und trug das Ergebnis in die Akte ein.'),
      { core: true, pair: 'измер+ять', pairLabel: 'Imperfective' }),
    v('mer-primerit', 'прим+ерить', 'pf', ['прим+ерю, прим+еришь', 'прим+ерил', 'impf. пример+ять'], 'to try on (clothes, shoes)', 'anprobieren',
      ex('М+ожно [[прим+ерить]] +эту к+уртку на разм+ер б+ольше?', 'May I try on this jacket one size larger?', 'Kann ich diese Jacke eine Nummer größer anprobieren?'),
      { core: true, pair: 'пример+ять', pairLabel: 'Imperfective' }),
    n('mer-razmer', 'разм+ер', 'm', 'разм+еры', 'size, dimension', 'die Größe, das Maß',
      ex('Перед зак+азом пров+ерьте [[разм+ер]] по табл+ице на с+айте.', 'Before ordering, check the size in the chart on the site.', 'Prüfen Sie vor der Bestellung die Größe in der Tabelle auf der Website.'),
      { core: true, level: 'A2' }),
    n('mer-primer', 'прим+ер', 'm', 'прим+еры', 'example', 'das Beispiel',
      ex('Прав+ило легч+е запомнить на живом [[прим+ере]].', 'A rule is easier to remember with a vivid example.', 'Eine Regel merkt man sich an einem lebendigen Beispiel leichter.'),
      { core: true, level: 'A2' }),
    n('mer-namerenie', 'нам+ерение', 'n', 'нам+ерения', 'intention', 'die Absicht',
      ex('Он ср+азу объясн+ил свои [[нам+ерения]] честно и откр+ыто.', 'He immediately explained his intentions honestly and openly.', 'Er erklärte seine Absichten sofort ehrlich und offen.'),
      { core: true, level: 'B2' }),
    adj('mer-umerennyy', 'ум+еренный', 'moderate, reasonable (price, climate, pace)', 'mäßig, moderat',
      ex('В м+ае здесь обычно [[ум+еренная]] темпер+атура и мало дожд+ей.', 'In May there is usually a moderate temperature and little rain here.', 'Im Mai herrscht hier meist eine gemäßigte Temperatur mit wenig Regen.'),
      { core: true, level: 'B2' }),
    n('mer-izmerenie', 'измер+ение', 'n', 'измер+ения', 'measurement; dimension', 'die Messung; die Dimension',
      ex('Точное [[измер+ение]] показало небольш+ое отклон+ение от н+ормы.', 'An exact measurement showed a slight deviation from the norm.', 'Eine genaue Messung zeigte eine kleine Abweichung von der Norm.'),
      { level: 'B2' })
  ], { mapVerbs: false, group: 'Word-building families' });
})();
