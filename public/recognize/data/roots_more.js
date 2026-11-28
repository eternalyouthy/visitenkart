/* Additional high-frequency German verb root families (Roots tab).
 * Loaded after data/memberships.js so every existing card in words/it/roots is already registered and reused
 * (zero duplicate headwords, permanent IDs, shared progress). Glosses & notes in Russian (ru) and English (en). */
(function () {
  'use strict';
  var P = GT.packs.de;
  if (!P) return;

  function normHead(s) {
    return String(s || '').replace(/^(der|die|das|sich)\s+/i, '').trim().toLowerCase();
  }
  function samePos(a, b) {
    if (!a || !b) return true;
    var va = a === 'verb' || a === 'phrasal verb';
    var vb = b === 'verb' || b === 'phrasal verb';
    if (va || vb) return va && vb;
    return a === b;
  }
  function byHead(de, pos) {
    var k = normHead(de);
    for (var i = 0; i < P.items.length; i++) {
      var x = P.items[i];
      if (samePos(x.pos, pos) && normHead(x.t || x.de) === k) return x;
    }
    return null;
  }
  function ex(de, ru, en, sense) {
    var o = { de: de, ru: ru, en: en };
    if (sense) o.sense = sense;
    return o;
  }
  function enrich(exst, opts) {
    if (opts.base && !exst.rootId) exst.base = true;
    if (opts.core) exst.core = true;
    if (opts.prefix && !exst.prefix) exst.prefix = opts.prefix;
    if (opts.sep && !exst.sep) exst.sep = opts.sep;
    if (opts.stress && !exst.stress) exst.stress = opts.stress;
    if (opts.tr && !exst.transparency) exst.transparency = opts.tr;
    if (opts.morph && !exst.morph) exst.morph = opts.morph;
    if (opts.pd && !exst.prefixDrill && exst.examples && exst.examples[opts.pd.ex]) {
      exst.prefixDrill = opts.pd;
    }
    return exst;
  }
  function v(id, de, forms, ru, en, e, opts) {
    opts = opts || {};
    var exst = byHead(de, 'verb');
    if (exst) return enrich(exst, opts);
    var o = {
      id: 'r3-' + id, pos: 'verb', de: de,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] },
      ru: ru, en: en, examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.base) o.base = true;
    if (opts.core) o.core = true;
    if (opts.prefix) o.prefix = opts.prefix;
    if (opts.sep) o.sep = opts.sep;
    if (opts.stress) o.stress = opts.stress;
    if (opts.tr) o.transparency = opts.tr;
    if (opts.morph) o.morph = opts.morph;
    if (opts.gov) o.gov = opts.gov;
    if (opts.pd) o.prefixDrill = opts.pd;
    if (opts.note) { o.note = opts.note[0]; o.i18n = { en: { note: opts.note[1] } }; }
    return o;
  }
  function n(id, article, de, plural, ru, en, e, opts) {
    opts = opts || {};
    var exst = byHead(de, 'noun');
    if (exst) return exst;
    var o = {
      id: 'r3-' + id, pos: 'noun', article: article, de: de,
      plural: plural || undefined, ru: ru, en: en,
      examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.morph) o.morph = opts.morph;
    if (opts.note) { o.note = opts.note[0]; o.i18n = { en: { note: opts.note[1] } }; }
    return o;
  }
  function adj(id, de, ru, en, e, opts) {
    opts = opts || {};
    var exst = byHead(de, 'adj');
    if (exst) return exst;
    var o = {
      id: 'r3-' + id, pos: 'adj', de: de, ru: ru, en: en,
      examples: Array.isArray(e) ? e : [e],
      level: opts.level || 'B2'
    };
    if (opts.morph) o.morph = opts.morph;
    return o;
  }
  function regRoot(id, verb, ru, en, note, words, extra) {
    if (P.roots[id]) return;
    extra = extra || {};
    GT.registerRoot(Object.assign({
      id: id, verb: verb, t: verb, ru: ru, en: en,
      note: { ru: note[0], en: note[1] },
      words: words
    }, extra));
    if (P.config.ROOT_PLAN.indexOf(id) < 0) P.config.ROOT_PLAN.push(id);
  }

  /* 1. melden */
  regRoot('melden', 'melden', 'сообщать, докладывать; выходить на связь', 'to report, notify; to get in touch',
    ['Слабый глагол: meldet — meldete — hat gemeldet. Одна из самых частых немецких основ в быту, бюрократии и IT: anmelden (регистрировать / входить в систему), abmelden (снимать с регистрации / выходить), ummelden (перерегистрироваться по новому адресу), sich krankmelden (сообщить о болезни) и die Rückmeldung (обратная связь).',
     'Weak verb: meldet — meldete — hat gemeldet. Central in German daily life, administration and IT: anmelden (register / log in), abmelden (deregister / log out), ummelden (re-register an address), sich krankmelden (call in sick) and Rückmeldung (feedback/response).'], [
    v('melden-base', 'melden', ['meldet', 'meldete', 'hat gemeldet'], 'сообщать, докладывать; (sich) выходить на связь', 'to report, notify; (sich) to get in touch',
      ex('Bitte [[melden]] Sie verdächtige Vorfälle sofort.', 'Пожалуйста, сразу сообщайте о подозрительных инцидентах.', 'Please report suspicious incidents immediately.'),
      { base: true, level: 'B1', morph: 'meld-en' }),
    v('melden-anmelden', 'anmelden', ['meldet an', 'meldete an', 'hat angemeldet'], 'регистрировать(ся), записывать(ся); входить в аккаунт', 'to register, sign up; to log in',
      ex('Nach dem Umzug müssen Sie sich innerhalb von zwei Wochen beim Bürgeramt [[anmelden]].', 'После переезда нужно в течение двух недель зарегистрироваться в бюргерамте.', 'After moving, you have to register at the citizens’ office within two weeks.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánmelden', tr: 'transparent', morph: 'an-meld-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'an- = прибытие/подключение: заявить о себе на месте или войти в систему.' } }),
    v('melden-abmelden', 'abmelden', ['meldet ab', 'meldete ab', 'hat abgemeldet'], 'снимать(ся) с регистрации; отписывать(ся); выходить из аккаунта', 'to deregister; to unsubscribe; to log out',
      [ex('Vor dem Umzug ins Ausland muss man seinen Wohnsitz beim Amt [[abmelden]].', 'Перед переездом за границу нужно сняться с регистрации по месту жительства в ведомстве.', 'Before moving abroad, you have to deregister your residence at the office.', 'сниматься с регистрации'),
       ex('Vergiss nicht, dich am geteilten Rechner wieder [[abzumelden]].', 'Не забудь выйти из учётной записи на общем компьютере.', 'Don’t forget to log out again on the shared computer.', 'выходить из системы')],
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábmelden', tr: 'transparent', morph: 'ab-meld-en', level: 'B1',
        pd: { ex: 0, meaning: 3, explain: 'ab- = отмена/отключение: снять регистрацию, отписаться, выйти из сеанса.' },
        note: ['Антоним к anmelden. Существительное: die Abmeldung (снятие с учёта / выход из системы).', 'Antonym of anmelden. Noun: die Abmeldung (deregistration / logout).'] }),
    v('melden-ummelden', 'ummelden', ['meldet um', 'meldete um', 'hat umgemeldet'], 'перерегистрировать(ся) (по новому адресу, на нового владельца)', 'to re-register (a new address or owner)',
      ex('Nach dem Umzug müssen Sie sich beim Bürgeramt [[ummelden]].', 'После переезда нужно перерегистрироваться в бюргерамте.', 'After moving, you must re-register at the citizens’ office.'),
      { core: true, prefix: 'um', sep: 'trennbar', stress: 'úmmelden', tr: 'transparent', morph: 'um-meld-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'Отделяемое um- = смена: поменять регистрационные данные на новые.' } }),
    v('melden-vermelden', 'vermelden', ['vermeldet', 'vermeldete', 'hat vermeldet'], 'официально сообщать, объявлять, фиксировать (результат, рекорд)', 'to announce officially, record, report',
      ex('Das Unternehmen konnte im zweiten Quartal deutliche Zuwächse [[vermelden]].', 'Во втором квартале компания смогла сообщить о заметном росте.', 'The company was able to report clear growth in the second quarter.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'vermélden', tr: 'transparent', morph: 'ver-meld-en', level: 'C1' }),
    v('melden-zurueckmelden', 'sich zurückmelden', ['meldet sich zurück', 'meldete sich zurück', 'hat sich zurückgemeldet'], 'ответить, отписаться/перезвонить в ответ; подтвердить возвращение (или продолжение учёбы)', 'to get back to someone, reply; to re-enrol / check back in',
      ex('Ich prüfe die Unterlagen und [[melde]] mich heute Nachmittag [[zurück]].', 'Я проверю документы и свяжусь с вами сегодня после обеда.', 'I will check the documents and get back to you this afternoon.'),
      { core: true, sep: 'trennbar', stress: 'zurǘckmelden', tr: 'transparent', morph: 'zurück-meld-en', level: 'B2',
        note: ['В вузе «sich zurückmelden» — продлить регистрацию на следующий семестр.', 'At university, “sich zurückmelden” means to re-register for the next semester.'] }),
    v('melden-krankmelden', 'sich krankmelden', ['meldet sich krank', 'meldete sich krank', 'hat sich krankgemeldet'], 'сообщить на работу/учёбу о болезни', 'to call in sick',
      ex('Ich habe mich heute Morgen bei meiner Chefin [[krankgemeldet]].', 'Сегодня утром я сообщил начальнице, что заболел.', 'I called in sick to my manager this morning.'),
      { core: true, sep: 'trennbar', stress: 'kránkmelden', tr: 'transparent', morph: 'krank-meld-en', level: 'B2' }),
    v('melden-weitermelden', 'weitermelden', ['meldet weiter', 'meldete weiter', 'hat weitergemeldet'], 'передавать сообщение дальше (по инстанции)', 'to pass a report on, escalate',
      ex('Der Support hat die Störung sofort an das zuständige Team [[weitergemeldet]].', 'Поддержка сразу передала сообщение о сбое в профильную команду.', 'Support immediately escalated the outage to the responsible team.'),
      { sep: 'trennbar', stress: 'wéitermelden', tr: 'transparent', morph: 'weiter-meld-en', level: 'B2' }),
    n('melden-anmeldung', 'die', 'Anmeldung', 'die Anmeldungen', 'регистрация; запись; вход в систему', 'registration; sign-up; login',
      ex('Für die [[Anmeldung]] beim Bürgeramt brauchen Sie einen Termin.', 'Для регистрации в бюргерамте нужна запись.', 'You need an appointment for registration at the citizens’ office.'),
      { morph: 'An-meld-ung', level: 'B1' }),
    n('melden-abmeldung', 'die', 'Abmeldung', 'die Abmeldungen', 'снятие с регистрации; отписка; выход из системы', 'deregistration; cancellation; logout',
      ex('Die schriftliche [[Abmeldung]] vom Sprachkurs muss vor Monatsende eingehen.', 'Письменное снятие с регистрации на языковой курс должно поступить до конца месяца.', 'Written cancellation from the language course must arrive before month-end.'),
      { morph: 'Ab-meld-ung', level: 'B1' }),
    n('melden-meldung', 'die', 'Meldung', 'die Meldungen', 'сообщение, уведомление, сводка новостей', 'report, notice, message, alert',
      ex('Kurz nach dem Neustart erschien keine neue [[Meldung]] mehr auf dem Bildschirm.', 'Вскоре после перезапуска на экране больше не появлялось новых уведомлений.', 'Shortly after the restart, no new message appeared on the screen.'),
      { morph: 'Meld-ung', level: 'B1' }),
    n('melden-rueckmeldung', 'die', 'Rückmeldung', 'die Rückmeldungen', 'обратная связь, ответное сообщение', 'feedback, response, reply',
      ex('Danke für die schnelle [[Rückmeldung]]!', 'Спасибо за быстрый ответ!', 'Thanks for the quick response!'),
      { morph: 'Rück-meld-ung', level: 'B1' }),
    n('melden-krankmeldung', 'die', 'Krankmeldung', 'die Krankmeldungen', 'уведомление о болезни, больничный', 'sick note, sick report',
      ex('Schicken Sie Ihre [[Krankmeldung]] bitte an die Personalabteilung.', 'Отправьте уведомление о болезни в отдел кадров.', 'Please send your sick note to HR.'),
      { morph: 'Krank-meld-ung', level: 'B1' }),
    n('melden-falschmeldung', 'die', 'Falschmeldung', 'die Falschmeldungen', 'ложное сообщение, фейковая новость', 'false report, hoax',
      ex('Die angebliche Schließung erwies sich als [[Falschmeldung]].', 'Слух о закрытии оказался ложным сообщением.', 'The alleged closure turned out to be a false report.'),
      { morph: 'Falsch-meld-ung', level: 'B2' })
  ]);

  /* 2. fahren */
  regRoot('fahren', 'fahren', 'ехать; вести транспорт', 'to drive, travel, ride',
    ['Сильный глагол с умлаутом: fährt — fuhr — ist gefahren (перемещение) / hat gefahren (вести машину). В семье рядом буквальные транспортные глаголы (abfahren, einfahren) и важный переносный erfahren («узнавать / испытывать», отсюда die Erfahrung — опыт).',
     'Strong verb with umlaut: fährt — fuhr — ist gefahren (travel) / hat gefahren (drive a vehicle). Combines literal transport verbs (abfahren, einfahren) with the key figurative erfahren (“to learn / experience”, hence Erfahrung).'], [
    v('fahren-base', 'fahren', ['fährt', 'fuhr', 'ist/hat gefahren'], 'ехать; водить транспорт', 'to drive, travel, go (by vehicle)',
      ex('Morgens [[fahre]] ich meistens mit der S-Bahn ins Büro.', 'По утрам я обычно езжу в офис на городской электричке.', 'In the morning I usually take the suburban train to the office.'),
      { base: true, level: 'B1', morph: 'fahr-en' }),
    v('fahren-abfahren', 'abfahren', ['fährt ab', 'fuhr ab', 'ist abgefahren'], 'отъезжать, отправляться (о поезде, автобусе)', 'to depart, set off',
      ex('Der Zug nach Hamburg [[fährt]] pünktlich um acht Uhr [[ab]].', 'Поезд в Гамбург отправляется ровно в восемь часов.', 'The train to Hamburg departs punctually at eight o’clock.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábfahren', tr: 'transparent', morph: 'ab-fahr-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'ab- = прочь, отправление от исходной точки.' } }),
    v('fahren-erfahren', 'erfahren', ['erfährt', 'erfuhr', 'hat erfahren'], 'узнавать (новость); испытывать, переживать (поддержку, опыт)', 'to find out, learn; to experience',
      ex('Erst aus der E-Mail haben wir von dem neuen Termin [[erfahren]].', 'Лишь из электронного письма мы узнали о новой дате.', 'We only found out about the new date from the email.'),
      { core: true, prefix: 'er', sep: 'untrennbar', stress: 'erfáhren', tr: 'opaque', morph: 'er-fahr-en', level: 'B1',
        note: ['Perfekt всегда с haben (hat erfahren)! Отсюда прилагательное «erfahren» (опытный) и «die Erfahrung» (опыт).', 'Perfekt always uses haben (hat erfahren)! Gives the adjective “erfahren” (experienced) and “die Erfahrung” (experience).'] }),
    v('fahren-anfahren', 'anfahren', ['fährt an', 'fuhr an', 'ist/hat angefahren'], 'трогаться с места; заезжать (на станцию); слегка сбить (машиной)', 'to pull away, start moving; to call at (a stop); to hit (with a vehicle)',
      ex('Bei Glatteis sollte man besonders vorsichtig [[anfahren]].', 'В гололёд нужно трогаться с места особенно осторожно.', 'In icy conditions, you should pull away particularly carefully.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánfahren', tr: 'transparent', morph: 'an-fahr-en', level: 'B2',
        pd: { ex: 0, meaning: 4, explain: 'an- = начало движения: автомобиль начинает движение с места.' } }),
    v('fahren-einfahren', 'einfahren', ['fährt ein', 'fuhr ein', 'ist eingefahren'], 'въезжать (на станцию, в гараж); обкатывать (двигатель)', 'to pull in (train); to drive in; to run in (an engine)',
      ex('Der Regionalzug [[fährt]] gerade auf Gleis drei [[ein]].', 'Региональный поезд как раз прибывает на третий путь.', 'The regional train is just pulling in at platform three.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éinfahren', tr: 'transparent', morph: 'ein-fahr-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'ein- = внутрь: поезд въезжает на станцию.' } }),
    v('fahren-ausfahren', 'ausfahren', ['fährt aus', 'fuhr aus', 'ist/hat ausgefahren'], 'выезжать; развозить (посылки); выдвигать (шасси, тент)', 'to drive out; to deliver (parcels); to extend (retractable gear)',
      ex('Die Kuriere [[fahren]] die Pakete ab sieben Uhr morgens [[aus]].', 'Курьеры развозят посылки с семи утра.', 'The couriers deliver the parcels starting at seven in the morning.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áusfahren', tr: 'transparent', morph: 'aus-fahr-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'aus- = наружу, со склада к адресатам.' } }),
    v('fahren-verfahren', 'sich verfahren', ['verfährt sich', 'verfuhr sich', 'hat sich verfahren'], 'заблудиться (в дороге на транспорте); (verfahren) поступать, действовать по процедуре', 'to lose one’s way while driving; (verfahren) to proceed',
      ex('Ohne Navi hätten wir uns in der Altstadt garantiert [[verfahren]].', 'Без навигатора мы бы точно заблудились в старом городе.', 'Without sat-nav we would definitely have lost our way in the old town.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verfáhren', tr: 'figurative', morph: 'ver-fahr-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'ver- с sich = ошибка: поехать не туда и сбиться с пути.' } }),
    v('fahren-umfahren', 'umfahren', ['umfährt', 'umfuhr', 'hat umfahren'], 'объезжать (пробку, стройку — неотд.); сбивать машиной (úmfahren — отд.)', 'to drive around, bypass (insep.); to knock down (sep.)',
      ex('Über die Landstraße können wir den Stau komplett [[umfahren]].', 'По загородной дороге мы можем полностью объехать пробку.', 'Via the country road we can bypass the traffic jam completely.'),
      { core: true, prefix: 'um', sep: 'untrennbar', stress: 'umfáhren', tr: 'transparent', morph: 'um-fahr-en', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: 'Неотделяемое um- = вокруг, в обход препятствия.' } }),
    v('fahren-mitfahren', 'mitfahren', ['fährt mit', 'fuhr mit', 'ist mitgefahren'], 'ехать вместе, подсесть попутчиком', 'to ride along, get a lift',
      ex('Ich fahre morgen nach Köln — willst du [[mitfahren]]?', 'Я завтра еду в Кёльн — хочешь поехать со мной?', 'I’m driving to Cologne tomorrow — do you want a lift?'),
      { prefix: 'mit', sep: 'trennbar', stress: 'mítfahren', tr: 'transparent', morph: 'mit-fahr-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'mit- = совместное действие: ехать вместе с кем-то.' } }),
    n('fahren-fahrt', 'die', 'Fahrt', 'die Fahrten', 'поездка, путь, рейс', 'journey, ride, drive',
      ex('Die [[Fahrt]] zum Flughafen dauert mit dem Bus etwa dreißig Minuten.', 'Поездка в аэропорт на автобусе занимает около тридцати минут.', 'The ride to the airport takes about thirty minutes by bus.'),
      { morph: 'Fahr-t', level: 'B1' }),
    n('fahren-abfahrt', 'die', 'Abfahrt', 'die Abfahrten', 'отправление, отъезд; съезд с автобана', 'departure; motorway exit',
      ex('Die genaue [[Abfahrt]] steht auf der Anzeigetafel.', 'Точное время отправления указано на табло.', 'The exact departure is shown on the display board.'),
      { morph: 'Ab-fahrt', level: 'B1' }),
    n('fahren-erfahrung', 'die', 'Erfahrung', 'die Erfahrungen', 'опыт (жизненный, профессиональный)', 'experience',
      ex('Sie bringt fünf Jahre [[Erfahrung]] im Projektmanagement mit.', 'У неё пять лет опыта в управлении проектами.', 'She brings five years of experience in project management.'),
      { morph: 'Er-fahr-ung', level: 'B1' }),
    n('fahren-verfahren', 'das', 'Verfahren', 'die Verfahren', 'процедура, способ, процесс; судебное разбирательство', 'procedure, process; legal proceedings',
      ex('Das neue [[Verfahren]] verkürzt die Bearbeitungszeit um die Hälfte.', 'Новая процедура сокращает время обработки вдвое.', 'The new procedure cuts processing time in half.'),
      { morph: 'Ver-fahr-en', level: 'B2' })
  ], {
    pairs: [
      {
        a: { stress: 'úmfahren', sep: 'trennbar · hat umgefahren', ru: 'сбить, переехать (знак, столб, препятствие)', en: 'to knock down, run over (a sign, post)',
          ex: { de: 'Beim Rückwärtsfahren hat er fast das Schild [[umgefahren]].', ru: 'Сдавая назад, он чуть не сбил знак.', en: 'While reversing, he almost knocked down the sign.' } },
        b: { stress: 'umfáhren', sep: 'untrennbar · hat umfahren', ru: 'объехать вокруг (пробку, центр города)', en: 'to drive around, bypass (a traffic jam, city centre)',
          ex: { de: 'Wir [[umfahren]] die Baustelle über die Nebenstraße.', ru: 'Мы объезжаем стройку по боковой улице.', en: 'We bypass the roadworks via the side street.' } }
      }
    ]
  });

  /* 3. rufen */
  regRoot('rufen', 'rufen', 'звать, кричать; звонить', 'to call, shout',
    ['Сильный глагол: ruft — rief — hat gerufen. Охватывает телефонную связь (anrufen, zurückrufen), IT и работу с данными (abrufen — запрашивать данные, aufrufen — открывать страницу/функцию) и официальную речь (sich berufen auf — ссылаться, widerrufen — отзывать согласие).',
     'Strong verb: ruft — rief — hat gerufen. Covers phone calls (anrufen, zurückrufen), IT/data (abrufen — fetch/retrieve, aufrufen — open/invoke) and formal/legal speech (sich berufen auf — cite, widerrufen — revoke).'], [
    v('rufen-base', 'rufen', ['ruft', 'rief', 'hat gerufen'], 'звать, кричать; вызывать (такси, врача)', 'to call, shout; to summon',
      ex('Wenn sich die Lage verschlechtert, müssen wir sofort den Notarzt [[rufen]].', 'Если ситуация ухудшится, нужно сразу вызвать скорую.', 'If the situation worsens, we must call an ambulance immediately.'),
      { base: true, level: 'B1', morph: 'ruf-en' }),
    v('rufen-anrufen', 'anrufen', ['ruft an', 'rief an', 'hat angerufen'], 'звонить по телефону (jdn. — Akk.!)', 'to phone, call (someone)',
      ex('Ich [[rufe]] dich morgen früh kurz vor dem Termin [[an]].', 'Я позвоню тебе завтра утром незадолго до встречи.', 'I will call you tomorrow morning shortly before the appointment.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánrufen', tr: 'transparent', morph: 'an-ruf-en', gov: 'jdn. (Akk.)', level: 'B1',
        pd: { ex: 0, meaning: 3, explain: 'an- = обращение к адресату: позвонить конкретному человеку.' },
        note: ['Всегда с Akkusativ: ich rufe dich an (не «dir»!).', 'Always takes Akkusativ: ich rufe dich an (never “dir”!).'] }),
    v('rufen-abrufen', 'abrufen', ['ruft ab', 'rief ab', 'hat abgerufen'], 'запрашивать, получать (почту, данные, средства); проверять', 'to retrieve, fetch (emails, data); to draw down (funds)',
      ex('Im Urlaub habe ich meine geschäftlichen E-Mails bewusst nicht [[abgerufen]].', 'В отпуске я сознательно не проверял рабочую почту.', 'On holiday I deliberately did not check my work emails.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábrufen', tr: 'figurative', morph: 'ab-ruf-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'ab- = забрать с сервера/источника: получить почту или данные.' } }),
    v('rufen-aufrufen', 'aufrufen', ['ruft auf', 'rief auf', 'hat aufgerufen'], 'вызывать (пациента); открывать (веб-страницу, файл); призывать (к действию)', 'to call up (a patient/webpage); to call upon (people)',
      ex('Über diesen Link können Sie das aktuelle Formular direkt [[aufrufen]].', 'По этой ссылке вы можете напрямую открыть актуальную форму.', 'Via this link you can open the current form directly.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áufrufen', tr: 'figurative', morph: 'auf-ruf-en', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'auf- = открытие: «вызвать и открыть» страницу или документ.' } }),
    v('rufen-berufen', 'sich berufen', ['beruft sich', 'berief sich', 'hat sich berufen'], 'ссылаться на (auf + Akk.); (berufen) назначать на должность', 'to cite, appeal to (auf + Akk.); to appoint',
      ex('In ihrem Einspruch [[berief]] sie sich auf den schriftlichen Vertrag.', 'В своём возражении она сослалась на письменный договор.', 'In her objection she cited the written contract.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'berúfen', tr: 'figurative', morph: 'be-ruf-en', gov: 'auf + Akk.', level: 'C1' }),
    v('rufen-ausrufen', 'ausrufen', ['ruft aus', 'rief aus', 'hat ausgerufen'], 'восклицать; объявлять, провозглашать (чрезвычайное положение, забастовку)', 'to exclaim; to proclaim, call (a strike)',
      ex('Die Gewerkschaft hat für Donnerstag einen ganztägigen Warnstreik [[ausgerufen]].', 'Профсоюз объявил на четверг однодневную предупредительную забастовку.', 'The union has called a full-day warning strike for Thursday.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áusrufen', tr: 'transparent', morph: 'aus-ruf-en', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: 'aus- = публичное объявление наружу, на всю аудиторию.' } }),
    v('rufen-zurueckrufen', 'zurückrufen', ['ruft zurück', 'rief zurück', 'hat zurückgerufen'], 'перезванивать; отзывать (товар)', 'to call back; to recall (a product)',
      ex('Frau Weber ist gerade im Gespräch — sie [[ruft]] Sie in einer Stunde [[zurück]].', 'Фрау Вебер сейчас на встрече — она перезвонит вам через час.', 'Ms Weber is currently in a meeting — she will call you back in an hour.'),
      { core: true, sep: 'trennbar', stress: 'zurǘckrufen', tr: 'transparent', morph: 'zurück-ruf-en', level: 'B1' }),
    v('rufen-widerrufen', 'widerrufen', ['widerruft', 'widerrief', 'hat widerrufen'], 'отзывать (заказ, согласие, доверенность); аннулировать', 'to revoke, cancel, withdraw (consent/order)',
      ex('Online-Bestellungen können Verbraucher in der Regel innerhalb von vierzehn Tagen [[widerrufen]].', 'Онлайн-заказы потребители, как правило, могут отозвать в течение четырнадцати дней.', 'Consumers can generally revoke online orders within fourteen days.'),
      { sep: 'untrennbar', stress: 'widerrúfen', tr: 'transparent', morph: 'wider-ruf-en', level: 'C1' }),
    n('rufen-anruf', 'der', 'Anruf', 'die Anrufe', 'телефонный звонок', 'phone call',
      ex('Vielen Dank für Ihren [[Anruf]] und die schnelle Klärung.', 'Большое спасибо за ваш звонок и быстрое прояснение вопроса.', 'Thank you very much for your call and the quick clarification.'),
      { morph: 'An-ruf', level: 'B1' }),
    n('rufen-beruf', 'der', 'Beruf', 'die Berufe', 'профессия, специальность', 'profession, occupation',
      ex('In ihrem [[Beruf]] arbeitet sie täglich mit internationalen Kunden.', 'В своей профессии она ежедневно работает с международными клиентами.', 'In her profession she works with international clients every day.'),
      { morph: 'Be-ruf', level: 'B1' }),
    n('rufen-ruf', 'der', 'Ruf', 'die Rufe', 'репутация; зов, крик', 'reputation; call, cry',
      ex('Die Werkstatt hat in der ganzen Region einen ausgezeichneten [[Ruf]].', 'У этой мастерской отличная репутация во всём регионе.', 'The workshop has an excellent reputation throughout the region.'),
      { morph: 'Ruf', level: 'B2' }),
    n('rufen-aufruf', 'der', 'Aufruf', 'die Aufrufe', 'призыв; просмотр / обращение (к странице, API)', 'appeal, call; page view / invocation',
      ex('Der Artikel erreichte innerhalb eines Tages zehntausend [[Aufrufe]].', 'Статья набрала десять тысяч просмотров за один день.', 'The article reached ten thousand views within one day.'),
      { morph: 'Auf-ruf', level: 'B2' })
  ]);

  /* 4. treten */
  regRoot('treten', 'treten', 'ступать, наступать; пинать', 'to step, tread; to kick',
    ['Сильный глагол: tritt — trat — ist getreten (шагнуть) / hat getreten (пнуть). Ключевая основа делового и технического немецкого: auftreten (возникать — о сбое/проблеме; выступать), eintreten (вступать / наступать), betreten (входить в помещение), vertreten (представлять / заменять), zurücktreten (уходить в отставку).',
     'Strong verb: tritt — trat — ist getreten (step) / hat getreten (kick). Essential for work and IT: auftreten (occur / appear), eintreten (enter / join / occur), betreten (enter a room), vertreten (represent / cover for), zurücktreten (resign / withdraw).'], [
    v('treten-base', 'treten', ['tritt', 'trat', 'ist/hat getreten'], 'ступать, наступать; входить; нажимать (педаль)', 'to step, tread; to press (a pedal)',
      ex('Das neue Gesetz [[tritt]] am ersten Januar in Kraft.', 'Новый закон вступает в силу первого января.', 'The new law comes into force on January first.'),
      { base: true, level: 'B1', morph: 'tret-en' }),
    v('treten-auftreten', 'auftreten', ['tritt auf', 'trat auf', 'ist aufgetreten'], 'возникать, проявляться (о проблеме, ошибке, симптоме); выступать (на сцене)', 'to occur, arise (a bug, symptom); to perform, appear',
      [ex('Der Fehler [[tritt]] nur auf, wenn man eine sehr große Datei hochlädt.', 'Ошибка возникает, только когда загружаешь очень большой файл.', 'The error only occurs when you upload a very large file.', 'возникать (об ошибке)'),
       ex('Die Band [[tritt]] am Samstagabend im Stadtpark [[auf]].', 'Группа выступает в субботу вечером в городском парке.', 'The band is performing in the city park on Saturday evening.', 'выступать')],
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áuftreten', tr: 'figurative', morph: 'auf-tret-en', level: 'B1',
        pd: { ex: 0, meaning: 4, explain: 'auf- = появление, внезапное возникновение ошибки или выход на сцену.' } }),
    v('treten-eintreten', 'eintreten', ['tritt ein', 'trat ein', 'ist eingetreten'], 'входить; вступать (в партию, клуб); наступать (о событии, случае)', 'to enter; to join (an organisation); to occur, set in',
      ex('Falls dieser Ausnahmefall [[eintritt]], greift unsere Notfallregelung.', 'Если наступит этот исключительный случай, сработает наш аварийный регламент.', 'If this exceptional case occurs, our contingency rule takes effect.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éintreten', tr: 'transparent', morph: 'ein-tret-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'ein- = вход внутрь: войти в помещение, вступить в организацию или наступить.' } }),
    v('treten-betreten', 'betreten', ['betritt', 'betrat', 'hat betreten'], 'входить в, ступать на (помещение, территорию — + Akk.)', 'to enter, step into (a room/premises)',
      ex('Unbefugte dürfen den Serverraum nicht [[betreten]].', 'Посторонним запрещено входить в серверную.', 'Unauthorised persons may not enter the server room.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'betréten', tr: 'transparent', morph: 'be-tret-en', level: 'B1',
        pd: { ex: 0, meaning: 1, explain: 'be- = прямой Akkusativ без предлога: das Gebäude betreten (войти в здание).' } }),
    v('treten-vertreten', 'vertreten', ['vertritt', 'vertrat', 'hat vertreten'], 'представлять (интересы, мнение); заменять (коллегу в отпуске)', 'to represent (interests, a view); to stand in for (a colleague)',
      ex('Während meines Urlaubs [[vertritt]] mich mein Kollege Lukas.', 'Во время моего отпуска меня замещает мой коллега Лукас.', 'During my holiday, my colleague Lukas covers for me.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'vertréten', tr: 'figurative', morph: 'ver-tret-en', level: 'B1' }),
    v('treten-austreten', 'austreten', ['tritt aus', 'trat aus', 'ist ausgetreten'], 'выходить (из организации, клуба); вытекать, просачиваться (газ, жидкость)', 'to leave, withdraw from (a club/union); to leak out (gas/liquid)',
      ex('Er ist letztes Jahr aus dem Sportverein [[ausgetreten]], weil er umgezogen ist.', 'В прошлом году он вышел из спортивного клуба, потому что переехал.', 'He left the sports club last year because he moved away.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áustreten', tr: 'transparent', morph: 'aus-tret-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'aus- = выход наружу (из организации или утечка вещества).' } }),
    v('treten-zuruecktreten', 'zurücktreten', ['tritt zurück', 'trat zurück', 'ist zurückgetreten'], 'уходить в отставку; отказываться (от договора, сделки — von + Dat.)', 'to resign, step down; to withdraw from (a contract)',
      ex('Wegen anhaltender Kritik ist der Vorsitzende von seinem Amt [[zurückgetreten]].', 'Из-за продолжающейся критики председатель ушёл со своего поста.', 'Due to ongoing criticism, the chairman stepped down from his office.'),
      { core: true, sep: 'trennbar', stress: 'zurǘcktreten', tr: 'figurative', morph: 'zurück-tret-en', gov: 'von + Dat.', level: 'B2' }),
    v('treten-uebertreten', 'übertreten', ['übertritt', 'übertrat', 'hat übertreten'], 'нарушать (правило, закон — неотд.); переходить (на другую сторону — отд.)', 'to violate, break (a rule — insep.); to cross over (sep.)',
      ex('Wer Sicherheitsvorschriften absichtlich [[übertritt]], riskiert eine Abmahnung.', 'Тот, кто намеренно нарушает правила безопасности, рискует получить выговор.', 'Anyone who intentionally violates safety rules risks a formal warning.'),
      { prefix: 'über', sep: 'untrennbar', stress: 'übertréten', tr: 'figurative', morph: 'über-tret-en', level: 'C1',
        pd: { ex: 0, meaning: 1, explain: 'Неотделяемое über- = переступить границу, нарушить норму.' } }),
    n('treten-eintritt', 'der', 'Eintritt', 'die Eintritte', 'вход, плата за вход; вступление', 'admission, entry; joining',
      ex('Am ersten Sonntag im Monat ist der [[Eintritt]] ins Museum frei.', 'В первое воскресенье месяца вход в музей бесплатный.', 'On the first Sunday of the month, admission to the museum is free.'),
      { morph: 'Ein-tritt', level: 'B1' }),
    n('treten-auftritt', 'der', 'Auftritt', 'die Auftritte', 'выступление; появление; презентация (бренда)', 'performance, appearance',
      ex('Ihr souveräner [[Auftritt]] auf der Konferenz beeindruckte alle Gäste.', 'Её уверенное выступление на конференции впечатлило всех гостей.', 'Her confident appearance at the conference impressed all the guests.'),
      { morph: 'Auf-tritt', level: 'B2' }),
    n('treten-vertretung', 'die', 'Vertretung', 'die Vertretungen', 'замена, замещение; представительство', 'cover, substitute; representation',
      ex('Vor dem Urlaub regle ich rechtzeitig meine [[Vertretung]].', 'Перед отпуском я заранее договариваюсь о своей замене.', 'Before going on leave, I arrange my cover in good time.'),
      { morph: 'Ver-tret-ung', level: 'B2' }),
    n('treten-ruecktritt', 'der', 'Rücktritt', 'die Rücktritte', 'отставка; отказ от договора', 'resignation; withdrawal from a contract',
      ex('Der [[Rücktritt]] vom Kaufvertrag erfolgte fristgerecht.', 'Отказ от договора купли-продажи состоялся в срок.', 'The withdrawal from the sales contract took place on time.'),
      { morph: 'Rück-tritt', level: 'B2' })
  ]);

  /* 5. kaufen */
  regRoot('kaufen', 'kaufen', 'покупать', 'to buy, purchase',
    ['Слабый глагол: kauft — kaufte — hat gekauft. Разница приставок предельно прозрачна: einkaufen (ходить за покупками / закупать), verkaufen (продавать), abkaufen (выкупить у кого-то; разг. «поверить»), aufkaufen (скупать целиком), ausverkaufen (распродавать всё до остатка).',
     'Weak verb: kauft — kaufte — hat gekauft. Very transparent prefix contrast: einkaufen (shop / procure), verkaufen (sell), abkaufen (buy from someone / colloquially “buy a story”), aufkaufen (buy up), ausverkaufen (sell out).'], [
    v('kaufen-base', 'kaufen', ['kauft', 'kaufte', 'hat gekauft'], 'покупать', 'to buy, purchase',
      ex('Für die neue Wohnung müssen wir noch eine Schreibtischlampe [[kaufen]].', 'Для новой квартиры нам ещё нужно купить настольную лампу.', 'We still need to buy a desk lamp for the new flat.'),
      { base: true, level: 'B1', morph: 'kauf-en' }),
    v('kaufen-einkaufen', 'einkaufen', ['kauft ein', 'kaufte ein', 'hat eingekauft'], 'делать покупки, закупаться (продуктами, материалами)', 'to go shopping, buy supplies',
      ex('Nach der Arbeit gehe ich noch kurz im Supermarkt [[einkaufen]].', 'После работы я ещё ненадолго зайду за продуктами в супермаркет.', 'After work I will pop into the supermarket to do some shopping.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éinkaufen', tr: 'transparent', morph: 'ein-kauf-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'ein- = «в дом / на склад»: закупать товары впрок.' } }),
    v('kaufen-verkaufen', 'verkaufen', ['verkauft', 'verkaufte', 'hat verkauft'], 'продавать', 'to sell',
      ex('Er hat sein altes Fahrrad über ein Kleinanzeigenportal [[verkauft]].', 'Он продал свой старый велосипед через портал объявлений.', 'He sold his old bicycle via a classifieds portal.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verkáufen', tr: 'transparent', morph: 'ver-kauf-en', level: 'B1',
        pd: { ex: 0, meaning: 4, explain: 'ver- = перемещение прочь от владельца: отдать товар за деньги.' } }),
    v('kaufen-abkaufen', 'abkaufen', ['kauft ab', 'kaufte ab', 'hat abgekauft'], 'выкупать у кого-то; (разг.) поверить (jmdm. eine Ausrede abkaufen)', 'to buy from someone; (coll.) to buy/believe an excuse',
      ex('Diese Ausrede [[kauft]] ihm nach der dritten Verspätung niemand mehr [[ab]].', 'После третьего опоздания в эту отговорку ему уже никто не верит.', 'After being late three times, nobody buys that excuse from him anymore.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábkaufen', tr: 'figurative', morph: 'ab-kauf-en', gov: 'jmdm. etw.', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'ab- = забрать от кого-то: купить прямо с рук или «купиться» на историю.' } }),
    v('kaufen-aufkaufen', 'aufkaufen', ['kauft auf', 'kaufte auf', 'hat aufgekauft'], 'скупать целиком (фирму, акции, весь запас)', 'to buy up, acquire completely',
      ex('Ein großer Konzern hat gleich mehrere kleine Lieferanten [[aufgekauft]].', 'Крупный концерн скупил сразу нескольких небольших поставщиков.', 'A major corporation bought up several small suppliers at once.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áufkaufen', tr: 'transparent', morph: 'auf-kauf-en', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: 'auf- = полностью, подчистую: выкупить всё.' } }),
    v('kaufen-ankaufen', 'ankaufen', ['kauft an', 'kaufte an', 'hat angekauft'], 'закупать, скупать (подержанные вещи, сырьё, искусство)', 'to purchase, buy in (second-hand goods, assets)',
      ex('Das Antiquariat [[kauft]] gut erhaltene Fachbücher aus Nachlässen [[an]].', 'Букинистический магазин скупает хорошо сохранившиеся научные книги из частных библиотек.', 'The second-hand bookshop buys in well-preserved specialist books from estates.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánkaufen', tr: 'transparent', morph: 'an-kauf-en', level: 'C1' }),
    v('kaufen-ausverkaufen', 'ausverkaufen', ['verkauft aus', 'verkaufte aus', 'hat ausverkauft'], 'распродавать полностью (чаще в причастии ausverkauft — распродано)', 'to sell out (usually participle ausverkauft — sold out)',
      ex('Die Tickets für das Konzert waren schon nach einer Stunde [[ausverkauft]].', 'Билеты на концерт были распроданы уже через час.', 'Tickets for the concert were sold out after just one hour.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áusverkaufen', tr: 'transparent', morph: 'aus-ver-kauf-en', level: 'B1',
        pd: { ex: 0, meaning: 2, explain: 'aus- = до конца, до полного исчерпания запаса.' } }),
    n('kaufen-kauf', 'der', 'Kauf', 'die Käufe', 'покупка, приобретение', 'purchase, buy',
      ex('Vor dem [[Kauf]] sollte man die Garantiebedingungen genau lesen.', 'Перед покупкой стоит внимательно прочитать условия гарантии.', 'Before making a purchase, you should read the warranty terms carefully.'),
      { morph: 'Kauf', level: 'B1' }),
    n('kaufen-einkauf', 'der', 'Einkauf', 'die Einkäufe', 'покупка (в магазине); отдел закупок', 'shopping; purchasing department',
      ex('Der [[Einkauf]] prüft derzeit Angebote von drei neuen Herstellern.', 'Отдел закупок сейчас проверяет предложения трёх новых производителей.', 'Purchasing is currently reviewing quotes from three new manufacturers.'),
      { morph: 'Ein-kauf', level: 'B1' }),
    n('kaufen-verkauf', 'der', 'Verkauf', 'die Verkäufe', 'продажа, сбыт', 'sale, sales',
      ex('Der [[Verkauf]] der neuen Serie startet am kommenden Montag.', 'Продажи новой серии стартуют в ближайший понедельник.', 'Sales of the new series begin next Monday.'),
      { morph: 'Ver-kauf', level: 'B1' }),
    n('kaufen-kaeufer', 'der', 'Käufer', 'die Käufer', 'покупатель', 'buyer, purchaser',
      ex('Für die Wohnung meldeten sich schon am ersten Tag mehrere [[Käufer]].', 'На квартиру уже в первый день откликнулись несколько покупателей.', 'Several buyers came forward for the flat on the very first day.'),
      { morph: 'Käuf-er', level: 'B1' })
  ]);

  /* 6. schalten */
  regRoot('schalten', 'schalten', 'переключать, включать (прибор, передачу)', 'to switch, shift (gears)',
    ['Слабый глагол: schaltet — schaltete — hat geschaltet. Незаменим в быту, технике и IT: einschalten (включить), ausschalten (выключить), abschalten (отключить / расслабиться после работы!), umschalten (переключить режим), freischalten (активировать доступ/карту).',
     'Weak verb: schaltet — schaltete — hat geschaltet. Indispensable in everyday life, tech and IT: einschalten (switch on), ausschalten (switch off), abschalten (shut off / unwind after work!), umschalten (switch over), freischalten (activate/unlock access).'], [
    v('schalten-base', 'schalten', ['schaltet', 'schaltete', 'hat geschaltet'], 'переключать (передачу); давать (рекламу); (разг.) быстро соображать', 'to shift gears; to run (an ad); (coll.) to catch on',
      ex('Die Firma [[schaltet]] nächste Woche eine neue Stellenanzeige.', 'На следующей неделе компания разместит новое объявление о вакансии.', 'The company is running a new job advert next week.'),
      { base: true, level: 'B1', morph: 'schalt-en' }),
    v('schalten-einschalten', 'einschalten', ['schaltet ein', 'schaltete ein', 'hat eingeschaltet'], 'включать (прибор, устройство); подключать (полицию, адвоката)', 'to switch on (a device); to involve, call in (police, a lawyer)',
      ex('Bitte [[schalten]] Sie vor dem Abflug den Flugmodus [[ein]].', 'Пожалуйста, включите авиарежим перед вылетом.', 'Please switch on flight mode before take-off.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éinschalten', tr: 'transparent', morph: 'ein-schalt-en', level: 'B1',
        pd: { ex: 0, meaning: 2, explain: 'ein- = включение прибора или режима.' } }),
    v('schalten-ausschalten', 'ausschalten', ['schaltet aus', 'schaltete aus', 'hat ausgeschaltet'], 'выключать (прибор, свет); устранять (риск, источник ошибки)', 'to switch off, turn off; to eliminate (a risk)',
      ex('Vergessen Sie abends nicht, alle Monitore vollständig [[auszuschalten]].', 'Не забывайте вечером полностью выключать все мониторы.', 'Do not forget to switch off all monitors completely in the evening.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áusschalten', tr: 'transparent', morph: 'aus-schalt-en', level: 'B1',
        pd: { ex: 0, meaning: 1, explain: 'aus- = выключение устройства.' } }),
    v('schalten-abschalten', 'abschalten', ['schaltet ab', 'schaltete ab', 'hat abgeschaltet'], 'отключать (сервер, систему); отключаться мыслями, отдыхать после работы', 'to shut down, disconnect; to switch off mentally, unwind',
      [ex('Nach einem langen Arbeitstag hilft mir ein Spaziergang beim [[Abschalten]].', 'После долгого рабочего дня прогулка помогает мне переключиться и отдохнуть.', 'After a long workday, a walk helps me switch off and unwind.', 'отдохнуть головой'),
       ex('Wegen der Wartung müssen wir den alten Server um Mitternacht [[abschalten]].', 'Из-за обслуживания нам придётся отключить старый сервер в полночь.', 'Because of maintenance, we have to shut down the old server at midnight.', 'отключить систему')],
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábschalten', tr: 'figurative', morph: 'ab-schalt-en', level: 'B1',
        pd: { ex: 1, meaning: 3, explain: 'ab- = полное отключение (сервера или собственных мыслей от работы).' } }),
    v('schalten-umschalten', 'umschalten', ['schaltet um', 'schaltete um', 'hat umgeschaltet'], 'переключать(ся) (канал, язык, режим)', 'to switch over (channel, language, mode)',
      ex('Mit dieser Taste können Sie direkt auf Englisch [[umschalten]].', 'Этой кнопкой вы можете сразу переключиться на английский.', 'With this key you can switch straight over to English.'),
      { core: true, prefix: 'um', sep: 'trennbar', stress: 'úmschalten', tr: 'transparent', morph: 'um-schalt-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'Отделяемое um- = смена режима или канала.' } }),
    v('schalten-anschalten', 'anschalten', ['schaltet an', 'schaltete an', 'hat angeschaltet'], 'включать (свет, прибор — синоним einschalten в быту)', 'to turn on, switch on (light, appliance)',
      ex('Es wird schon dunkel — ich [[schalte]] mal die Lampe [[an]].', 'Уже темнеет — включу-ка я лампу.', 'It’s getting dark already — I’ll switch on the lamp.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánschalten', tr: 'transparent', morph: 'an-schalt-en', level: 'B1',
        pd: { ex: 0, meaning: 2, explain: 'an- = включение электроприбора или света.' } }),
    v('schalten-zuschalten', 'zuschalten', ['schaltet zu', 'schaltete zu', 'hat zugeschaltet'], 'подключать (к видеозвонку, к эфиру, дополнительную мощность)', 'to connect into (a call/broadcast); to switch in',
      ex('Die Kollegin aus München wird per Video zum Gespräch [[zugeschaltet]].', 'Коллегу из Мюнхена подключат к беседе по видеосвязи.', 'The colleague from Munich will be brought into the discussion by video.'),
      { core: true, prefix: 'zu', sep: 'trennbar', stress: 'zúschalten', tr: 'transparent', morph: 'zu-schalt-en', level: 'B2',
        pd: { ex: 0, meaning: 2, explain: 'zu- = добавление, подключение участника или канала.' } }),
    v('schalten-freischalten', 'freischalten', ['schaltet frei', 'schaltete frei', 'hat freigeschaltet'], 'активировать, открывать доступ (к аккаунту, карте, функции)', 'to activate, unlock, enable access',
      ex('Nach der Bestätigung wird Ihr Zugang innerhalb von fünf Minuten [[freigeschaltet]].', 'После подтверждения ваш доступ будет активирован в течение пяти минут.', 'After confirmation, your access will be activated within five minutes.'),
      { core: true, sep: 'trennbar', stress: 'fréischalten', tr: 'transparent', morph: 'frei-schalt-en', level: 'B2' }),
    n('schalten-schalter', 'der', 'Schalter', 'die Schalter', 'выключатель; окошко (на вокзале, в банке, на почте)', 'switch; counter, ticket window',
      ex('Bitte holen Sie das Paket am [[Schalter]] zwei ab.', 'Пожалуйста, заберите посылку во втором окошке.', 'Please collect the parcel at counter two.'),
      { morph: 'Schalt-er', level: 'B1' }),
    n('schalten-schaltung', 'die', 'Schaltung', 'die Schaltungen', 'коробка передач, переключение; электрическая схема', 'gearshift; electrical circuit',
      ex('Das neue Fahrrad hat eine zuverlässige [[Schaltung]] mit zwölf Gängen.', 'У нового велосипеда надёжный переключатель на двенадцать скоростей.', 'The new bicycle has a reliable twelve-speed gear system.'),
      { morph: 'Schalt-ung', level: 'B2' })
  ]);

  /* 7. laden */
  regRoot('laden', 'laden', 'грузить, заряжать; приглашать', 'to load, charge; to invite',
    ['Сильный глагол: lädt — lud — hat geladen. Исторически в laden слились два глагола — «грузить» и «звать» (отсюда einladen — приглашать!). Сегодня это ещё и основа цифрового словаря: aufladen (заряжать), herunterladen (скачивать), hochladen (загружать в сеть).',
     'Strong verb: lädt — lud — hat geladen. Historically merges two verbs — “to load” and “to summon” (hence einladen — to invite!). Today it also anchors digital vocabulary: aufladen (charge), herunterladen (download), hochladen (upload).'], [
    v('laden-base', 'laden', ['lädt', 'lud', 'hat geladen'], 'грузить; заряжать; загружать (страницу, файл)', 'to load; to charge; to summon',
      ex('Die Seite [[lädt]] wegen der schwachen Verbindung sehr langsam.', 'Страница загружается очень медленно из-за слабой связи.', 'The page is loading very slowly because of the weak connection.'),
      { base: true, level: 'B1', morph: 'lad-en' }),
    v('laden-einladen', 'einladen', ['lädt ein', 'lud ein', 'hat eingeladen'], 'приглашать (на встречу, ужин); загружать (вещи в машину)', 'to invite; to load (into a vehicle)',
      ex('Wir möchten das gesamte Team zum Sommerfest [[einladen]].', 'Мы хотим пригласить всю команду на летний праздник.', 'We would like to invite the whole team to the summer party.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éinladen', tr: 'figurative', morph: 'ein-lad-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'ein- = «звать внутрь»: пригласить к себе или на мероприятие.' } }),
    v('laden-aufladen', 'aufladen', ['lädt auf', 'lud auf', 'hat aufgeladen'], 'заряжать (аккумулятор); пополнять (счёт, карту)', 'to charge (a battery); to top up (credit)',
      ex('Ich muss mein Handy vor der Abreise noch schnell [[aufladen]].', 'Перед отъездом мне ещё нужно быстро зарядить телефон.', 'I still need to quickly charge my phone before leaving.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áufladen', tr: 'transparent', morph: 'auf-lad-en', level: 'B1',
        pd: { ex: 0, meaning: 3, explain: 'auf- = наполнить доверху, полностью зарядить.' } }),
    v('laden-abladen', 'abladen', ['lädt ab', 'lud ab', 'hat abgeladen'], 'разгружать, сгружать; (разг.) сваливать (задачи/проблемы на кого-то)', 'to unload; (coll.) to dump (tasks/problems on someone)',
      ex('Der Lkw darf die Paletten nur im hinteren Hof [[abladen]].', 'Грузовику разрешено сгружать палеты только на заднем дворе.', 'The lorry is only allowed to unload the pallets in the rear courtyard.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábladen', tr: 'transparent', morph: 'ab-lad-en', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'ab- = снять вниз, сгрузить с транспорта.' } }),
    v('laden-ausladen', 'ausladen', ['lädt aus', 'lud aus', 'hat ausgeladen'], 'выгружать (из машины); отменять приглашение (jdn. ausladen)', 'to unload (from a vehicle); to uninvite',
      ex('Nach der Messe halfen alle beim [[Ausladen]] der Kisten.', 'После выставки все помогли выгружать ящики.', 'After the trade fair, everyone helped unload the boxes.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áusladen', tr: 'transparent', morph: 'aus-lad-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'aus- = вынуть наружу (из багажника или фургона).' } }),
    v('laden-beladen', 'beladen', ['belädt', 'belud', 'hat beladen'], 'нагружать, загружать (машину, судно)', 'to load (a vehicle, ship)',
      ex('Am frühen Morgen wurden drei Transporter für die Lieferung [[beladen]].', 'Ранним утром загрузили три фургона для доставки.', 'Early in the morning, three vans were loaded for delivery.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'beláden', tr: 'transparent', morph: 'be-lad-en', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'be- = заполнить грузом (прямой Akkusativ: den Transporter beladen).' } }),
    v('laden-ueberladen', 'überladen', ['überlädt', 'überlud', 'hat überladen'], 'перегружать (транспорт, дизайн, слайд деталями)', 'to overload; to overcrowd (a design/slide)',
      ex('Bitte [[überladen]] Sie die Präsentationsfolien nicht mit zu viel Text.', 'Пожалуйста, не перегружайте слайды презентации слишком большим объёмом текста.', 'Please do not overload the presentation slides with too much text.'),
      { core: true, prefix: 'über', sep: 'untrennbar', stress: 'überláden', tr: 'transparent', morph: 'über-lad-en', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'Неотделяемое über- = превышение нормы, чрезмерная нагрузка.' } }),
    v('laden-herunterladen', 'herunterladen', ['lädt herunter', 'lud herunter', 'hat heruntergeladen'], 'скачивать (файл, приложение)', 'to download',
      ex('Die Rechnung können Sie als PDF im Kundenportal [[herunterladen]].', 'Счёт вы можете скачать в формате PDF в клиентском портале.', 'You can download the invoice as a PDF in the customer portal.'),
      { sep: 'trennbar', stress: 'herúnterladen', tr: 'transparent', morph: 'herunter-lad-en', level: 'B1' }),
    v('laden-hochladen', 'hochladen', ['lädt hoch', 'lud hoch', 'hat hochgeladen'], 'загружать в сеть / на сервер (файл, документ)', 'to upload',
      ex('Bitte [[laden]] Sie Ihren Lebenslauf direkt im Bewerbungsformular [[hoch]].', 'Пожалуйста, загрузите ваше резюме прямо в форме заявки.', 'Please upload your CV directly in the application form.'),
      { sep: 'trennbar', stress: 'hóchladen', tr: 'transparent', morph: 'hoch-lad-en', level: 'B1' }),
    n('laden-einladung', 'die', 'Einladung', 'die Einladungen', 'приглашение', 'invitation',
      ex('Herzlichen Dank für die freundliche [[Einladung]] zum Workshop.', 'Сердечное спасибо за любезное приглашение на воркшоп.', 'Many thanks for the kind invitation to the workshop.'),
      { morph: 'Ein-lad-ung', level: 'B1' }),
    n('laden-ladung', 'die', 'Ladung', 'die Ladungen', 'груз; заряд; повестка в суд', 'load, cargo; charge; summons',
      ex('Der Fahrer prüfte vor der Abfahrt die Sicherung der [[Ladung]].', 'Перед выездом водитель проверил крепление груза.', 'Before departure, the driver checked that the load was secured.'),
      { morph: 'Lad-ung', level: 'B2' }),
    n('laden-ladegeraet', 'das', 'Ladegerät', 'die Ladegeräte', 'зарядное устройство', 'charger',
      ex('Hast du zufällig ein USB-C-[[Ladegerät]] im Rucksack?', 'У тебя случайно нет в рюкзаке зарядного устройства USB-C?', 'Do you happen to have a USB-C charger in your backpack?'),
      { morph: 'Lade-gerät', level: 'B1' })
  ]);

  /* 8. kennen */
  regRoot('kennen', 'kennen', 'знать, быть знакомым (с кем/чем-л.)', 'to know, be familiar with',
    ['Смешанный глагол: kennt — kannte — hat gekannt. Даёт фундамент интеллектуальной и деловой лексики: erkennen (узнать / распознать), anerkennen (признать диплом, заслуги), sich auskennen (хорошо разбираться), bekennen (признаваться / заявить о позиции), verkennen (недооценить).',
     'Mixed verb: kennt — kannte — hat gekannt. Forms core cognitive and workplace vocabulary: erkennen (recognise/detect), anerkennen (recognise formally), sich auskennen (know one’s way around), bekennen (confess/commit), verkennen (misjudge).'], [
    v('kennen-base', 'kennen', ['kennt', 'kannte', 'hat gekannt'], 'знать (человека, место, книгу), быть знакомым', 'to know, be acquainted with',
      ex('Ich [[kenne]] diese Gegend gut, weil ich dort früher gewohnt habe.', 'Я хорошо знаю этот район, потому что раньше там жил.', 'I know this area well because I used to live there.'),
      { base: true, level: 'B1', morph: 'kenn-en' }),
    v('kennen-erkennen', 'erkennen', ['erkennt', 'erkannte', 'hat erkannt'], 'узнавать; распознавать, обнаруживать (ошибку, угрозу)', 'to recognise; to detect, realise',
      ex('Das System konnte den fehlerhaften Zugriff sofort [[erkennen]].', 'Система смогла сразу распознать ошибочный доступ.', 'The system was able to detect the faulty access immediately.'),
      { core: true, prefix: 'er', sep: 'untrennbar', stress: 'erkénnen', tr: 'transparent', morph: 'er-kenn-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'er- = достижение результата: разглядеть и точно распознать.' } }),
    v('kennen-anerkennen', 'anerkennen', ['erkennt an', 'erkannte an', 'hat anerkannt'], 'официально признавать (диплом, квалификацию, заслуги)', 'to recognise officially (a degree, achievement)',
      ex('Wird mein ausländischer Abschluss in Deutschland [[anerkannt]]?', 'Признаётся ли мой иностранный диплом в Германии?', 'Is my foreign degree officially recognised in Germany?'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánerkennen', tr: 'figurative', morph: 'an-er-kenn-en', level: 'B2',
        note: ['В главном предложении чаще отделяется: «Sie erkennt das an», но в инфинитиве и придаточном пишется слитно: anzuerkennen / anerkennt.', 'Usually separable in main clauses (“Sie erkennt das an”), written as one word in subordinate clauses.'] }),
    v('kennen-auskennen', 'sich auskennen', ['kennt sich aus', 'kannte sich aus', 'hat sich ausgekannt'], 'хорошо разбираться (in/mit + Dat.), ориентироваться на местности', 'to know one’s way around, be well versed in',
      ex('Frag am besten Jonas — er [[kennt]] sich mit Steuerrecht richtig gut [[aus]].', 'Спроси лучше Йонаса — он отлично разбирается в налоговом праве.', 'Best ask Jonas — he really knows his way around tax law.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áuskennen', tr: 'figurative', morph: 'aus-kenn-en', gov: 'in/mit + Dat.', level: 'B1',
        pd: { ex: 0, meaning: 2, explain: 'aus- = до конца, досконально знать предмет.' } }),
    v('kennen-bekennen', 'bekennen', ['bekennt', 'bekannte', 'hat bekannt'], 'признаваться (в вине); (sich zu + Dat.) открыто заявлять о приверженности', 'to confess, admit; (sich zu) to commit to, profess',
      ex('Das Unternehmen [[bekennt]] sich klar zu transparenten Lieferketten.', 'Компания открыто заявляет о приверженности прозрачным цепочкам поставок.', 'The company clearly commits to transparent supply chains.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'bekénnen', tr: 'figurative', morph: 'be-kenn-en', level: 'C1' }),
    v('kennen-verkennen', 'verkennen', ['verkennt', 'verkannte', 'hat verkannt'], 'недооценивать, ошибочно оценивать (опасность, значение)', 'to misjudge, underestimate, fail to appreciate',
      ex('Man sollte das Risiko kleiner Sicherheitslücken niemals [[verkennen]].', 'Никогда не стоит недооценивать риск небольших уязвимостей безопасности.', 'One should never underestimate the risk of small security flaws.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verkénnen', tr: 'figurative', morph: 'ver-kenn-en', level: 'C1',
        pd: { ex: 0, meaning: 0, explain: 'ver- = ошибка: неверно оценить, принять за что-то другое.' } }),
    n('kennen-kenntnis', 'die', 'Kenntnis', 'die Kenntnisse', 'знание, познания (обычно мн. ч. Kenntnisse); сведение (zur Kenntnis nehmen)', 'knowledge, skills (usually pl.); notice',
      ex('Gute Englisch[[kenntnisse]] sind für diese Stelle von Vorteil.', 'Хорошее знание английского является преимуществом для этой должности.', 'Good English skills are an advantage for this position.'),
      { morph: 'Kennt-nis', level: 'B1' }),
    n('kennen-erkenntnis', 'die', 'Erkenntnis', 'die Erkenntnisse', 'вывод, осознание, научное знание', 'insight, finding, realisation',
      ex('Die Studie liefert neue [[Erkenntnisse]] über Schlafgewohnheiten.', 'Исследование даёт новые научные выводы о привычках сна.', 'The study provides new findings about sleep habits.'),
      { morph: 'Er-kennt-nis', level: 'B2' }),
    n('kennen-anerkennung', 'die', 'Anerkennung', 'die Anerkennungen', 'признание (диплома, заслуг)', 'recognition, appreciation',
      ex('Die [[Anerkennung]] seines Berufsabschlusses dauerte drei Monate.', 'Признание его профессионального диплома заняло три месяца.', 'The recognition of his vocational qualification took three months.'),
      { morph: 'An-er-kenn-ung', level: 'B2' }),
    adj('kennen-bekannt', 'bekannt', 'известный, знакомый', 'well-known, familiar',
      ex('Dieser Fehler ist dem Entwicklerteam bereits [[bekannt]].', 'Эта ошибка уже известна команде разработчиков.', 'This bug is already known to the development team.'),
      { morph: 'be-kann-t', level: 'B1' })
  ]);

  /* 9. suchen */
  regRoot('suchen', 'suchen', 'искать', 'to search, look for',
    ['Слабый глагол: sucht — suchte — hat gesucht. От «искать» образуются самые частые слова: besuchen (посещать), versuchen (пытаться), aussuchen (выбирать), durchsuchen (обыскивать / искать по всему массиву), untersuchen (обследовать / расследовать), aufsuchen (обращаться к врачу/ведомству).',
     'Weak verb: sucht — suchte — hat gesucht. Yields everyday essentials: besuchen (visit), versuchen (try), aussuchen (pick out), durchsuchen (search through), untersuchen (examine/investigate), aufsuchen (go to see a doctor/office).'], [
    v('suchen-base', 'suchen', ['sucht', 'suchte', 'hat gesucht'], 'искать (etw. или nach + Dat.)', 'to look for, search for',
      ex('Wir [[suchen]] dringend eine bezahlbare Dreizimmerwohnung in der Nähe.', 'Мы срочно ищем доступную трёхкомнатную квартиру поблизости.', 'We are urgently looking for an affordable three-room flat nearby.'),
      { base: true, level: 'B1', morph: 'such-en' }),
    v('suchen-besuchen', 'besuchen', ['besucht', 'besuchte', 'hat besucht'], 'посещать (людей, курс, мероприятие)', 'to visit; to attend (a course/event)',
      ex('Nächstes Wochenende [[besuchen]] wir unsere Freunde in Freiburg.', 'На следующих выходных мы навестим наших друзей во Фрайбурге.', 'Next weekend we are visiting our friends in Freiburg.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'besúchen', tr: 'figurative', morph: 'be-such-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'be- = прямой Akkusativ: besuchen кого-либо или курс.' } }),
    v('suchen-versuchen', 'versuchen', ['versucht', 'versuchte', 'hat versucht'], 'пытаться, пробовать', 'to try, attempt',
      ex('Ich [[versuche]], das Problem noch vor dem Mittagessen zu lösen.', 'Я постараюсь решить проблему ещё до обеда.', 'I will try to solve the problem before lunch.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'versúchen', tr: 'figurative', morph: 'ver-such-en', level: 'B1' }),
    v('suchen-aussuchen', 'aussuchen', ['sucht aus', 'suchte aus', 'hat ausgesucht'], 'выбирать, подбирать (из нескольких вариантов)', 'to choose, pick out',
      ex('Jedes Teammitglied darf sich seinen Arbeitsplatz selbst [[aussuchen]].', 'Каждый участник команды может сам выбрать себе рабочее место.', 'Each team member may pick out their own workspace.'),
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áussuchen', tr: 'transparent', morph: 'aus-such-en', level: 'B1',
        pd: { ex: 0, meaning: 4, explain: 'aus- = выбор одного варианта из многих.' } }),
    v('suchen-durchsuchen', 'durchsuchen', ['durchsucht', 'durchsuchte', 'hat durchsucht'], 'обыскивать; искать по всему объёму (файлов, логов)', 'to search thoroughly (a room, logs, files)',
      ex('Die Analystin [[durchsucht]] die Protokolle nach verdächtigen Anmeldungen.', 'Аналитик просматривает логи в поисках подозрительных входов.', 'The analyst is searching the logs for suspicious logins.'),
      { core: true, prefix: 'durch', sep: 'untrennbar', stress: 'durchsúchen', tr: 'transparent', morph: 'durch-such-en', level: 'B2',
        pd: { ex: 0, meaning: 2, explain: 'Неотделяемое durch- = сплошной поиск по всему объёму.' } }),
    v('suchen-untersuchen', 'untersuchen', ['untersucht', 'untersuchte', 'hat untersucht'], 'обследовать (пациента); исследовать, расследовать (причину)', 'to examine (a patient); to investigate, study',
      ex('Die Ärztin hat mein Knie gründlich [[untersucht]] und Entwarnung gegeben.', 'Врач тщательно обследовала моё колено и успокоила меня.', 'The doctor examined my knee thoroughly and gave the all-clear.'),
      { core: true, sep: 'untrennbar', stress: 'untersúchen', tr: 'transparent', morph: 'unter-such-en', level: 'B1' }),
    v('suchen-aufsuchen', 'aufsuchen', ['sucht auf', 'suchte auf', 'hat aufgesucht'], 'обращаться к, посещать (врача, адвоката, ведомство)', 'to go to see, consult (a doctor, office)',
      ex('Bei anhaltendem Fieber sollten Sie unbedingt eine Praxis [[aufsuchen]].', 'При сохраняющейся температуре вам обязательно следует обратиться в клинику.', 'If a fever persists, you should definitely go to see a doctor.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áufsuchen', tr: 'figurative', morph: 'auf-such-en', level: 'B2' }),
    v('suchen-ersuchen', 'ersuchen', ['ersucht', 'ersuchte', 'hat ersucht'], 'официально просить, ходатайствовать (um + Akk.)', 'to request formally',
      ex('Die Behörde [[ersucht]] alle Antragsteller um vollständige Unterlagen.', 'Ведомство официально просит всех заявителей предоставить полный пакет документов.', 'The authority formally requests complete documentation from all applicants.'),
      { prefix: 'er', sep: 'untrennbar', stress: 'ersúchen', tr: 'figurative', morph: 'er-such-en', level: 'C1' }),
    n('suchen-suche', 'die', 'Suche', 'die Suchen', 'поиск, поиски (auf der Suche nach)', 'search, quest',
      ex('Die [[Suche]] nach einer ruhigen Wohnung dauert oft mehrere Monate.', 'Поиск тихой квартиры часто занимает несколько месяцев.', 'The search for a quiet flat often takes several months.'),
      { morph: 'Such-e', level: 'B1' }),
    n('suchen-besuch', 'der', 'Besuch', 'die Besuche', 'визит, посещение; гости', 'visit; visitors, company',
      ex('Am Sonntag bekommen wir [[Besuch]] aus Österreich.', 'В воскресенье к нам приедут гости из Австрии.', 'On Sunday we are having visitors from Austria.'),
      { morph: 'Be-such', level: 'B1' }),
    n('suchen-versuch', 'der', 'Versuch', 'die Versuche', 'попытка; эксперимент, опыт', 'attempt, try; experiment',
      ex('Beim zweiten [[Versuch]] funktionierte die Einrichtung ohne Probleme.', 'Со второй попытки настройка прошла без проблем.', 'On the second attempt, the setup worked without any issues.'),
      { morph: 'Ver-such', level: 'B1' }),
    n('suchen-untersuchung', 'die', 'Untersuchung', 'die Untersuchungen', 'обследование; расследование, исследование', 'examination; investigation',
      ex('Das Ergebnis der [[Untersuchung]] liegt am Montag vor.', 'Результат обследования будет готов в понедельник.', 'The result of the examination will be available on Monday.'),
      { morph: 'Unter-such-ung', level: 'B1' })
  ]);

  /* 10. stimmen */
  regRoot('stimmen', 'stimmen', 'быть верным; голосовать; настраивать', 'to be right; to vote; to tune',
    ['Слабый глагол: stimmt — stimmte — hat gestimmt (от die Stimme — голос). Объединяет повседневное «Das stimmt!» (Верно!), согласие (zustimmen), согласование и голосование (abstimmen), определение (bestimmen) и совпадение (übereinstimmen).',
     'Weak verb: stimmt — stimmte — hat gestimmt (from die Stimme — voice). Links everyday “Das stimmt!” (That’s right!), agreeing (zustimmen), voting/coordinating (abstimmen), determining (bestimmen) and matching (übereinstimmen).'], [
    v('stimmen-base', 'stimmen', ['stimmt', 'stimmte', 'hat gestimmt'], 'быть верным, сходиться; голосовать (für/gegen); настраивать (инструмент)', 'to be correct/true; to vote; to tune',
      ex('Die Endsumme auf dieser Rechnung [[stimmt]] leider nicht — hier fehlt der Rabatt.', 'Итоговая сумма в этом счёте, к сожалению, не сходится — здесь не учтена скидка.', 'The final total on this invoice is not right — the discount is missing here.'),
      { base: true, level: 'B1', morph: 'stimm-en' }),
    v('stimmen-zustimmen', 'zustimmen', ['stimmt zu', 'stimmte zu', 'hat zugestimmt'], 'соглашаться, одобрять (Dat.)', 'to agree with, approve (Dat.)',
      ex('Die Mehrheit des Teams hat dem neuen Zeitplan [[zugestimmt]].', 'Большинство команды согласилось с новым графиком.', 'The majority of the team agreed to the new schedule.'),
      { core: true, prefix: 'zu', sep: 'trennbar', stress: 'zústimmen', tr: 'transparent', morph: 'zu-stimm-en', gov: 'Dat.', level: 'B1',
        pd: { ex: 0, meaning: 3, explain: 'zu- = согласие, одобрение (отдать свой голос «за»).' } }),
    v('stimmen-abstimmen', 'abstimmen', ['stimmt ab', 'stimmte ab', 'hat abgestimmt'], 'голосовать (über + Akk.); согласовывать, увязывать (sich abstimmen mit)', 'to vote (on); to coordinate, align (with)',
      ex('Wir müssen die Termine noch mit der Marketingabteilung [[abstimmen]].', 'Нам ещё нужно согласовать даты с отделом маркетинга.', 'We still need to coordinate the dates with the marketing department.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábstimmen', tr: 'figurative', morph: 'ab-stimm-en', level: 'B2' }),
    v('stimmen-bestimmen', 'bestimmen', ['bestimmt', 'bestimmte', 'hat bestimmt'], 'определять, устанавливать, назначать; распоряжаться', 'to determine, define, decide',
      ex('Angebot und Nachfrage [[bestimmen]] den Preis auf dem Wohnungsmarkt.', 'Спрос и предложение определяют цену на рынке жилья.', 'Supply and demand determine the price on the housing market.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'bestímmen', tr: 'figurative', morph: 'be-stimm-en', level: 'B1' }),
    v('stimmen-umstimmen', 'umstimmen', ['stimmt um', 'stimmte um', 'hat umgestimmt'], 'переубеждать (jdn.)', 'to change someone’s mind, persuade',
      ex('Auch gute Argumente konnten ihn an diesem Abend nicht [[umstimmen]].', 'Даже веские аргументы в тот вечер не смогли его переубедить.', 'Even good arguments could not change his mind that evening.'),
      { core: true, prefix: 'um', sep: 'trennbar', stress: 'úmstimmen', tr: 'transparent', morph: 'um-stimm-en', level: 'C1',
        pd: { ex: 0, meaning: 0, explain: 'Отделяемое um- = перемена: изменить чьё-то мнение/настрой.' } }),
    v('stimmen-verstimmen', 'verstimmen', ['verstimmt', 'verstimmte', 'hat verstimmt'], 'расстраивать (инструмент или человека, настроение)', 'to put out of tune; to upset, put in a bad mood',
      ex('Der schroffe Ton in der E-Mail hat einige Partner deutlich [[verstimmt]].', 'Резкий тон письма заметно расстроил нескольких партнёров.', 'The abrupt tone in the email clearly upset several partners.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verstímmen', tr: 'figurative', morph: 'ver-stimm-en', level: 'C1' }),
    v('stimmen-uebereinstimmen', 'übereinstimmen', ['stimmt überein', 'stimmte überein', 'hat übereingestimmt'], 'совпадать, соответствовать, сходиться во мнении (mit + Dat.)', 'to match, agree, correspond (with)',
      ex('Die gelieferte Menge [[stimmt]] genau mit dem Lieferschein [[überein]].', 'Поставленное количество в точности совпадает с накладной.', 'The delivered quantity matches the delivery note exactly.'),
      { core: true, sep: 'trennbar', stress: 'überéinstimmen', tr: 'transparent', morph: 'über-ein-stimm-en', gov: 'mit + Dat.', level: 'B2' }),
    n('stimmen-stimme', 'die', 'Stimme', 'die Stimmen', 'голос (речь и на выборах)', 'voice; vote',
      ex('Bei der Wahl zählt jede einzelne [[Stimme]].', 'На выборах важен каждый отдельный голос.', 'In the election, every single vote counts.'),
      { morph: 'Stimm-e', level: 'B1' }),
    n('stimmen-zustimmung', 'die', 'Zustimmung', 'die Zustimmungen', 'согласие, одобрение', 'consent, approval',
      ex('Ohne schriftliche [[Zustimmung]] dürfen die Fotos nicht veröffentlicht werden.', 'Без письменного согласия фотографии нельзя публиковать.', 'The photos may not be published without written consent.'),
      { morph: 'Zu-stimm-ung', level: 'B2' }),
    n('stimmen-abstimmung', 'die', 'Abstimmung', 'die Abstimmungen', 'голосование; согласование', 'vote, ballot; coordination',
      ex('Die enge [[Abstimmung]] zwischen den Teams verhinderte Verzögerungen.', 'Тесное согласование между командами предотвратило задержки.', 'Close coordination between the teams prevented delays.'),
      { morph: 'Ab-stimm-ung', level: 'B2' }),
    n('stimmen-bestimmung', 'die', 'Bestimmung', 'die Bestimmungen', 'предписание, положение (правил); назначение', 'regulation, provision; purpose',
      ex('Alle geltenden [[Bestimmungen]] zum Datenschutz finden Sie im Anhang.', 'Все действующие положения о защите данных вы найдёте в приложении.', 'You will find all applicable data protection provisions in the appendix.'),
      { morph: 'Be-stimm-ung', level: 'B2' }),
    adj('stimmen-bestimmt', 'bestimmt', 'определённый, конкретный; (adv.) наверняка', 'specific, certain; (adv.) definitely',
      ex('Für diesen Bereich gelten [[bestimmte]] Sicherheitsregeln.', 'Для этой зоны действуют определённые правила безопасности.', 'Specific safety rules apply to this area.'),
      { morph: 'be-stimm-t', level: 'B1' })
  ]);

  /* 11. fordern */
  regRoot('fordern', 'fordern', 'требовать, предъявлять высокие требования', 'to demand, require, challenge',
    ['Слабый глагол: fordert — forderte — hat gefordert (не путать с fördern с умлаутом — «поощрять, поддерживать»!). В работе и экзаменах B2 встречаются на каждом шагу: anfordern (запросить документ), auffordern (призвать/предложить сделать), erfordern (требовать усилий/времени), überfordern (перегрузить требованиями), herausfordern (бросать вызов).',
     'Weak verb: fordert — forderte — hat gefordert (do not confuse with fördern “to promote/support”!). Crucial in work and B2 exams: anfordern (request), auffordern (urge/ask to), erfordern (require), überfordern (overwhelm), herausfordern (challenge).'], [
    v('fordern-base', 'fordern', ['fordert', 'forderte', 'hat gefordert'], 'требовать; предъявлять высокие требования (к кому-л.)', 'to demand; to stretch, demand a lot from',
      ex('Die Mitarbeitenden [[fordern]] klarere Regeln für mobile Arbeit.', 'Сотрудники требуют более чётких правил для удалённой работы.', 'Employees are demanding clearer rules for remote work.'),
      { base: true, level: 'B1', morph: 'forder-n' }),
    v('fordern-anfordern', 'anfordern', ['fordert an', 'forderte an', 'hat angefordert'], 'запрашивать (документ, справку, предложение, данные)', 'to request (a document, quote, data)',
      ex('Sie können das neue Passwort jederzeit per E-Mail [[anfordern]].', 'Вы можете запросить новый пароль по электронной почте в любое время.', 'You can request the new password by email at any time.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánfordern', tr: 'transparent', morph: 'an-forder-n', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: 'an- = запрос, обращённый к кому-то или к системе.' } }),
    v('fordern-auffordern', 'auffordern', ['fordert auf', 'forderte auf', 'hat aufgefordert'], 'предлагать, призывать, требовать (сделать что-то — zu + Dat. / zu + Inf.)', 'to ask, urge, instruct (someone to do something)',
      ex('Das System [[fordert]] mich alle drei Monate [[auf]], das Passwort zu ändern.', 'Система каждые три месяца предлагает мне сменить пароль.', 'The system prompts me every three months to change my password.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áuffordern', tr: 'transparent', morph: 'auf-forder-n', level: 'B2' }),
    v('fordern-erfordern', 'erfordern', ['erfordert', 'erforderte', 'hat erfordert'], 'требовать (времени, знаний, усилий — о задаче)', 'to require, call for (time, skill, effort)',
      ex('Die Umstellung der Datenbank [[erfordert]] eine genaue Vorbereitung.', 'Перенос базы данных требует тщательной подготовки.', 'Migrating the database requires careful preparation.'),
      { core: true, prefix: 'er', sep: 'untrennbar', stress: 'erfórdern', tr: 'transparent', morph: 'er-forder-n', level: 'B2',
        note: ['Подлежащее у erfordern — почти всегда дело/задача, а не человек: «Das Projekt erfordert Geduld».', 'The subject of erfordern is almost always a task/thing, not a person: “Das Projekt erfordert Geduld”.'] }),
    v('fordern-ueberfordern', 'überfordern', ['überfordert', 'überforderte', 'hat überfordert'], 'перегружать требованиями, ставить в тупик (ср. überfordert sein)', 'to overwhelm, overtax (cf. überfordert sein)',
      ex('Zu viele parallele Projekte können selbst ein erfahrenes Team [[überfordern]].', 'Слишком много параллельных проектов могут перегрузить даже опытную команду.', 'Too many parallel projects can overwhelm even an experienced team.'),
      { core: true, prefix: 'über', sep: 'untrennbar', stress: 'überfórdern', tr: 'transparent', morph: 'über-forder-n', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'Неотделяемое über- = превышение меры: требовать больше, чем по силам.' } }),
    v('fordern-herausfordern', 'herausfordern', ['fordert heraus', 'forderte heraus', 'hat herausgefordert'], 'бросать вызов, испытывать (способности, терпение)', 'to challenge, provoke',
      ex('Die neue Aufgabe [[fordert]] mich fachlich stark [[heraus]], macht aber Spaß.', 'Новая задача — серьёзный профессиональный вызов для меня, но она приносит удовольствие.', 'The new task challenges me professionally, yet it is enjoyable.'),
      { core: true, sep: 'trennbar', stress: 'heráusfordern', tr: 'figurative', morph: 'heraus-forder-n', level: 'B2' }),
    v('fordern-abfordern', 'abfordern', ['fordert ab', 'forderte ab', 'hat abgefordert'], 'требовать от кого-то (усилий, показателей — jmdm. etw.)', 'to demand from someone (effort, performance)',
      ex('Die Endphase des Projekts hat allen Beteiligten viel Energie [[abgefordert]].', 'Финальный этап проекта потребовал от всех участников много энергии.', 'The final phase of the project demanded a lot of energy from everyone involved.'),
      { prefix: 'ab', sep: 'trennbar', stress: 'ábfordern', tr: 'transparent', morph: 'ab-forder-n', level: 'C1' }),
    n('fordern-forderung', 'die', 'Forderung', 'die Forderungen', 'требование; (фин.) дебиторская задолженность', 'demand, claim; receivable',
      ex('Die [[Forderung]] nach flexibleren Arbeitszeiten stößt auf breite Zustimmung.', 'Требование более гибкого графика встречает широкую поддержку.', 'The demand for more flexible working hours meets with broad support.'),
      { morph: 'Forder-ung', level: 'B2' }),
    n('fordern-anforderung', 'die', 'Anforderung', 'die Anforderungen', 'требование (к продукту, кандидату, системе)', 'requirement, specification',
      ex('Die Software erfüllt alle rechtlichen [[Anforderungen]].', 'Программное обеспечение выполняет все юридические требования.', 'The software meets all legal requirements.'),
      { morph: 'An-forder-ung', level: 'B2' }),
    n('fordern-herausforderung', 'die', 'Herausforderung', 'die Herausforderungen', 'вызов, сложная задача', 'challenge',
      ex('Der Fachkräftemangel bleibt eine große [[Herausforderung]].', 'Нехватка квалифицированных кадров остаётся большим вызовом.', 'The skills shortage remains a major challenge.'),
      { morph: 'Heraus-forder-ung', level: 'B2' }),
    n('fordern-ueberforderung', 'die', 'Überforderung', 'die Überforderungen', 'перегрузка, чрезмерная нагрузка', 'overwhelm, excessive demands',
      ex('Dauerhafter Zeitdruck führt schnell zu [[Überforderung]].', 'Постоянный цейтнот быстро приводит к перегрузке.', 'Constant time pressure quickly leads to overwhelm.'),
      { morph: 'Über-forder-ung', level: 'B2' })
  ]);

  /* 12. passen */
  regRoot('passen', 'passen', 'подходить, быть впору / удобным', 'to fit, suit, match',
    ['Слабый глагол: passt — passte — hat gepasst. В ежедневной речи базовое «Das passt mir gut» («Мне это удобно») дополняется тремя хитами с приставками: aufpassen (быть внимательным / присматривать), verpassen (опоздать на поезд / упустить шанс) и anpassen (адаптировать, подстраивать).',
     'Weak verb: passt — passte — hat gepasst. Everyday “Das passt mir gut” (“That suits me”) pairs with three indispensable prefixed verbs: aufpassen (pay attention / look after), verpassen (miss a train/chance) and anpassen (adapt, adjust).'], [
    v('passen-base', 'passen', ['passt', 'passte', 'hat gepasst'], 'подходить (по размеру, времени, стилю — Dat. / zu + Dat.)', 'to fit (size); to suit (time); to match (zu)',
      ex('[[Passt]] dir Donnerstag um vierzehn Uhr für das Gespräch?', 'Тебе подходит четверг в четырнадцать часов для разговора?', 'Does Thursday at two p.m. suit you for the talk?'),
      { base: true, level: 'B1', morph: 'pass-en' }),
    v('passen-aufpassen', 'aufpassen', ['passt auf', 'passte auf', 'hat aufgepasst'], 'быть внимательным, осторожным; присматривать (auf + Akk.)', 'to pay attention, watch out; to look after (auf)',
      [ex('[[Pass]] an der Baustelle gut [[auf]], der Weg ist sehr uneben.', 'Будь внимателен возле стройки, дорога очень неровная.', 'Watch out carefully by the building site, the path is very uneven.', 'быть осторожным'),
       ex('Am Wochenende [[passe]] ich auf den Hund meiner Schwester [[auf]].', 'На выходных я присматриваю за собакой моей сестры.', 'At the weekend I am looking after my sister’s dog.', 'присматривать')],
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áufpassen', tr: 'figurative', morph: 'auf-pass-en', level: 'B1' }),
    v('passen-verpassen', 'verpassen', ['verpasst', 'verpasste', 'hat verpasst'], 'пропустить, опоздать на (поезд, встречу, шанс)', 'to miss (a train, appointment, opportunity)',
      ex('Durch den Stau haben wir leider unseren Anschlusszug [[verpasst]].', 'Из-за пробки мы, к сожалению, пропустили наш пересадочный поезд.', 'Because of the traffic jam, we unfortunately missed our connecting train.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verpássen', tr: 'figurative', morph: 'ver-pass-en', level: 'B1',
        pd: { ex: 0, meaning: 1, explain: 'ver- = упущение, «про-»: пропустить поезд или момент.' } }),
    v('passen-anpassen', 'anpassen', ['passt an', 'passte an', 'hat angepasst'], 'адаптировать, подгонять, корректировать; (sich) приспосабливаться', 'to adapt, adjust, tailor; (sich) to adjust',
      ex('Wir müssen den Projektplan an das neue Budget [[anpassen]].', 'Нам нужно адаптировать план проекта под новый бюджет.', 'We have to adjust the project plan to the new budget.'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánpassen', tr: 'transparent', morph: 'an-pass-en', gov: 'an + Akk.', level: 'B1',
        pd: { ex: 0, meaning: 1, explain: 'an- = подгонка вплотную к новым условиям.' } }),
    v('passen-einpassen', 'einpassen', ['passt ein', 'passte ein', 'hat eingepasst'], 'встраивать точно по размеру, вписывать (в проём, график)', 'to fit in precisely (into a space or schedule)',
      ex('Der Schreiner hat das Regal millimetergenau in die Nische [[eingepasst]].', 'Столяр с точностью до миллиметра вписал полку в нишу.', 'The carpenter fitted the shelf into the alcove to the exact millimetre.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éinpassen', tr: 'transparent', morph: 'ein-pass-en', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'ein- = точно встроить внутрь пространства.' } }),
    v('passen-abpassen', 'abpassen', ['passt ab', 'passte ab', 'hat abgepasst'], 'выждать и поймать нужный момент / человека', 'to catch at the right moment, intercept',
      ex('Ich konnte die Teamleiterin kurz nach der Sitzung im Flur [[abpassen]].', 'Мне удалось перехватить тимлида в коридоре сразу после совещания.', 'I managed to catch the team lead in the corridor right after the meeting.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábpassen', tr: 'figurative', morph: 'ab-pass-en', level: 'C1' }),
    n('passen-anpassung', 'die', 'Anpassung', 'die Anpassungen', 'адаптация, корректировка, подстройка', 'adjustment, adaptation',
      ex('Nach dem Feedback nehmen wir noch zwei kleine [[Anpassungen]] am Entwurf vor.', 'После отзывов мы внесём ещё две небольшие правки в макет.', 'Following the feedback, we will make two small adjustments to the draft.'),
      { morph: 'An-pass-ung', level: 'B2' }),
    adj('passen-passend', 'passend', 'подходящий, уместный; без сдачи (о сумме)', 'suitable, fitting; exact (money)',
      ex('Haben Sie die fünf Euro vielleicht [[passend]]?', 'У вас случайно нет пяти евро без сдачи?', 'Do you happen to have the exact five euros?'),
      { morph: 'pass-end', level: 'B1' }),
    adj('passen-unpassend', 'unpassend', 'неуместный, неподходящий', 'inappropriate, unsuitable',
      ex('Seine spöttische Bemerkung war in dieser Runde völlig [[unpassend]].', 'Его насмешливое замечание в этой компании было совершенно неуместным.', 'His mocking remark was completely inappropriate in that setting.'),
      { morph: 'un-pass-end', level: 'B2' })
  ]);

  /* 13. zahlen */
  regRoot('zahlen', 'zahlen', 'платить', 'to pay',
    ['Слабый глагол: zahlt — zahlte — hat gezahlt. Вся финансовая и бытовая практика платежей: bezahlen (оплачивать конкретный счёт/вещь), einzahlen (вносить на счёт), auszahlen (выплачивать; sich auszahlen — окупаться!), abzahlen (выплачивать в рассрочку), nachzahlen (доплачивать).',
     'Weak verb: zahlt — zahlte — hat gezahlt. Covers everyday and financial payments: bezahlen (pay for an item/bill), einzahlen (deposit), auszahlen (pay out; sich auszahlen — pay off!), abzahlen (pay off in instalments), nachzahlen (pay extra/arrears).'], [
    v('zahlen-base', 'zahlen', ['zahlt', 'zahlte', 'hat gezahlt'], 'платить (в ресторане, картой, налоги)', 'to pay (in a restaurant, by card, taxes)',
      ex('Entschuldigung, wir möchten bitte getrennt [[zahlen]].', 'Извините, мы хотели бы заплатить раздельно.', 'Excuse me, we would like to pay separately, please.'),
      { base: true, level: 'B1', morph: 'zahl-en' }),
    v('zahlen-bezahlen', 'bezahlen', ['bezahlt', 'bezahlte', 'hat bezahlt'], 'оплачивать (счёт, товар, услугу — + Akk.)', 'to pay for (a bill, goods, service)',
      ex('Ich habe die Rechnung gestern per Überweisung [[bezahlt]].', 'Я оплатил счёт вчера банковским переводом.', 'I paid the invoice yesterday by bank transfer.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'bezáhlen', tr: 'transparent', morph: 'be-zahl-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'be- = прямой Akkusativ: die Rechnung / den Kaffee bezahlen.' } }),
    v('zahlen-einzahlen', 'einzahlen', ['zahlt ein', 'zahlte ein', 'hat eingezahlt'], 'вносить деньги на счёт, делать взнос', 'to pay in, deposit (into an account)',
      ex('Am Automaten können Sie Bargeld direkt auf Ihr Konto [[einzahlen]].', 'В банкомате вы можете внести наличные напрямую на свой счёт.', 'At the machine you can deposit cash directly into your account.'),
      { core: true, prefix: 'ein', sep: 'trennbar', stress: 'éinzahlen', tr: 'transparent', morph: 'ein-zahl-en', level: 'B1',
        pd: { ex: 0, meaning: 0, explain: 'ein- = внутрь (на счёт в банке).' } }),
    v('zahlen-auszahlen', 'auszahlen', ['zahlt aus', 'zahlte aus', 'hat ausgezahlt'], 'выплачивать (зарплату, премию); (sich) окупаться, приносить плоды', 'to pay out; (sich) to pay off, be worthwhile',
      [ex('Das Gehalt wird immer am letzten Werktag des Monats [[ausgezahlt]].', 'Зарплата всегда выплачивается в последний рабочий день месяца.', 'Salaries are always paid out on the last working day of the month.', 'выплачивать'),
       ex('Das tägliche Üben hat sich bei der Prüfung wirklich [[ausgezahlt]].', 'Ежедневная практика на экзамене действительно окупилась.', 'Practising every day really paid off in the exam.', 'окупаться (sich)')],
      { core: true, prefix: 'aus', sep: 'trennbar', stress: 'áuszahlen', tr: 'figurative', morph: 'aus-zahl-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'aus- = выдача наружу (со счёта получателю).' } }),
    v('zahlen-abzahlen', 'abzahlen', ['zahlt ab', 'zahlte ab', 'hat abgezahlt'], 'выплачивать по частям, погашать (кредит, долг)', 'to pay off (a loan in instalments)',
      ex('In fünf Jahren haben sie den Kredit für die Wohnung komplett [[abgezahlt]].', 'Через пять лет они полностью выплатят кредит за квартиру.', 'In five years they will have completely paid off the loan for the flat.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábzahlen', tr: 'transparent', morph: 'ab-zahl-en', level: 'B2',
        pd: { ex: 0, meaning: 2, explain: 'ab- = постепенное уменьшение долга до нуля.' } }),
    v('zahlen-nachzahlen', 'nachzahlen', ['zahlt nach', 'zahlte nach', 'hat nachgezahlt'], 'доплачивать (по перерасчёту коммуналки, налогов)', 'to pay arrears, pay extra afterwards',
      ex('Wegen der hohen Heizkosten mussten wir dreihundert Euro [[nachzahlen]].', 'Из-за высоких расходов на отопление нам пришлось доплатить триста евро.', 'Because of the high heating costs, we had to pay an extra three hundred euros.'),
      { core: true, prefix: 'nach', sep: 'trennbar', stress: 'náchzahlen', tr: 'transparent', morph: 'nach-zahl-en', level: 'B2',
        pd: { ex: 0, meaning: 2, explain: 'nach- = доплатить позже недостающую разницу.' } }),
    v('zahlen-zurueckzahlen', 'zurückzahlen', ['zahlt zurück', 'zahlte zurück', 'hat zurückgezahlt'], 'возвращать деньги, отдавать долг', 'to pay back, refund',
      ex('Der Händler hat den Kaufpreis innerhalb einer Woche [[zurückgezahlt]].', 'Продавец вернул стоимость покупки в течение недели.', 'The retailer refunded the purchase price within a week.'),
      { sep: 'trennbar', stress: 'zurǘckzahlen', tr: 'transparent', morph: 'zurück-zahl-en', level: 'B1' }),
    n('zahlen-zahlung', 'die', 'Zahlung', 'die Zahlungen', 'платёж, оплата', 'payment',
      ex('Nach Eingang Ihrer [[Zahlung]] versenden wir die Ware sofort.', 'После поступления вашего платежа мы сразу отправим товар.', 'Upon receipt of your payment, we will dispatch the goods immediately.'),
      { morph: 'Zahl-ung', level: 'B1' }),
    n('zahlen-bezahlung', 'die', 'Bezahlung', 'die Bezahlungen', 'оплата (труда, счёта), вознаграждение', 'payment, pay, remuneration',
      ex('Neben dem Teamklima spielt auch eine faire [[Bezahlung]] eine große Rolle.', 'Помимо атмосферы в команде, большую роль играет и справедливая оплата труда.', 'Alongside team atmosphere, fair pay also plays a major role.'),
      { morph: 'Be-zahl-ung', level: 'B1' }),
    n('zahlen-einzahlung', 'die', 'Einzahlung', 'die Einzahlungen', 'внесение денег на счёт, взнос', 'deposit, payment in',
      ex('Die [[Einzahlung]] erschien noch am selben Nachmittag auf dem Konto.', 'Взнос отобразился на счёте в тот же день после обеда.', 'The deposit appeared in the account that same afternoon.'),
      { morph: 'Ein-zahl-ung', level: 'B1' }),
    n('zahlen-auszahlung', 'die', 'Auszahlung', 'die Auszahlungen', 'выплата (денег, пособия)', 'payout, disbursement',
      ex('Die [[Auszahlung]] der Prämie erfolgt mit dem Dezembergehalt.', 'Выплата премии происходит вместе с декабрьской зарплатой.', 'The bonus is paid out with the December salary.'),
      { morph: 'Aus-zahl-ung', level: 'B1' })
  ]);

  /* 14. fassen */
  regRoot('fassen', 'fassen', 'хватать, схватывать; вмещать; формулировать', 'to grasp, hold; to formulate',
    ['Слабый глагол: fasst — fasste — hat gefasst. Один из самых важных B2–C1 глаголов в аналитике, праве и офисе: zusammenfassen (резюмировать), erfassen (фиксировать/учитывать данные), verfassen (составлять текст), umfassen (охватывать), sich befassen mit (заниматься темой), auffassen (воспринимать).',
     'Weak verb: fasst — fasste — hat gefasst. A workhorse of B2–C1 academic, legal and office German: zusammenfassen (summarise), erfassen (record/capture data), verfassen (draft a text), umfassen (comprise), sich befassen mit (deal with), auffassen (interpret).'], [
    v('fassen-base', 'fassen', ['fasst', 'fasste', 'hat gefasst'], 'хватать; принимать (решение — einen Entschluss fassen); вмещать; (не) укладываться в голове', 'to grasp; to make (a decision); to hold (capacity)',
      ex('Nach langem Überlegen hat sie den Entschluss [[gefasst]], die Branche zu wechseln.', 'После долгих раздумий она приняла решение сменить сферу деятельности.', 'After long consideration, she made the decision to change industries.'),
      { base: true, level: 'B2', morph: 'fass-en' }),
    v('fassen-erfassen', 'erfassen', ['erfasst', 'erfasste', 'hat erfasst'], 'фиксировать, регистрировать, учитывать (данные, рабочее время); постигать', 'to record, capture (data, hours); to grasp',
      ex('Alle Arbeitsstunden werden digital in unserer Zeiterfassung [[erfasst]].', 'Все рабочие часы фиксируются в цифровом виде в нашей системе учёта времени.', 'All working hours are recorded digitally in our time-tracking system.'),
      { core: true, prefix: 'er', sep: 'untrennbar', stress: 'erfássen', tr: 'figurative', morph: 'er-fass-en', level: 'B2',
        pd: { ex: 0, meaning: 0, explain: 'er- = охватить и точно зафиксировать (данные, смысл).' } }),
    v('fassen-verfassen', 'verfassen', ['verfasst', 'verfasste', 'hat verfasst'], 'составлять, писать (официальный текст, статью, доклад)', 'to compose, author, draft (a text/report)',
      ex('Die Rechtsabteilung hat eine klare Stellungnahme zu dem Vorfall [[verfasst]].', 'Юридический отдел составил чёткое заключение по инциденту.', 'The legal department drafted a clear statement on the incident.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verfássen', tr: 'figurative', morph: 'ver-fass-en', level: 'B2' }),
    v('fassen-umfassen', 'umfassen', ['umfasst', 'umfasste', 'hat umfasst'], 'охватывать, включать в себя (пункты, услуги, разделы)', 'to comprise, encompass, cover',
      ex('Das Paket [[umfasst]] sowohl die Installation als auch zwei Jahre Support.', 'Пакет включает в себя как установку, так и два года поддержки.', 'The package covers both installation and two years of support.'),
      { core: true, prefix: 'um', sep: 'untrennbar', stress: 'umfássen', tr: 'transparent', morph: 'um-fass-en', level: 'B2',
        pd: { ex: 0, meaning: 3, explain: 'Неотделяемое um- = охват со всех сторон, включение в состав.' } }),
    v('fassen-befassen', 'sich befassen', ['befasst sich', 'befasste sich', 'hat sich befasst'], 'заниматься, подробно изучать (mit + Dat.)', 'to deal with, look into (mit + Dat.)',
      ex('Der Ausschuss [[befasst]] sich nächste Woche mit dem neuen Energiegesetz.', 'Комитет на следующей неделе займётся новым законом об энергетике.', 'The committee will deal with the new energy act next week.'),
      { core: true, prefix: 'be', sep: 'untrennbar', stress: 'befássen', tr: 'figurative', morph: 'be-fass-en', gov: 'mit + Dat.', level: 'B2' }),
    v('fassen-auffassen', 'auffassen', ['fasst auf', 'fasste auf', 'hat aufgefasst'], 'воспринимать, толковать, понимать (как критику, шутку)', 'to interpret, take (as criticism, a joke)',
      ex('Bitte [[fassen]] Sie meinen Hinweis nicht als Vorwurf [[auf]].', 'Пожалуйста, не воспринимайте моё замечание как упрёк.', 'Please do not take my remark as a reproach.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áuffassen', tr: 'figurative', morph: 'auf-fass-en', level: 'C1' }),
    v('fassen-anfassen', 'anfassen', ['fasst an', 'fasste an', 'hat angefasst'], 'трогать, прикасаться; браться за дело', 'to touch, handle',
      ex('Die frisch lackierte Tür bitte noch nicht [[anfassen]]!', 'Пожалуйста, пока не трогайте свежеокрашенную дверь!', 'Please do not touch the freshly painted door yet!'),
      { core: true, prefix: 'an', sep: 'trennbar', stress: 'ánfassen', tr: 'transparent', morph: 'an-fass-en', level: 'B1',
        pd: { ex: 0, meaning: 1, explain: 'an- = физический контакт, прикосновение рукой.' } }),
    v('fassen-zusammenfassen', 'zusammenfassen', ['fasst zusammen', 'fasste zusammen', 'hat zusammengefasst'], 'подводить итог, резюмировать, обобщать', 'to summarise, sum up',
      ex('Am Ende des Meetings [[fasse]] ich die wichtigsten Entscheidungen kurz [[zusammen]].', 'В конце встречи я кратко резюмирую важнейшие решения.', 'At the end of the meeting I will briefly summarise the key decisions.'),
      { core: true, sep: 'trennbar', stress: 'zusámmenfassen', tr: 'transparent', morph: 'zusammen-fass-en', level: 'B1' }),
    n('fassen-zusammenfassung', 'die', 'Zusammenfassung', 'die Zusammenfassungen', 'краткое содержание, резюме, сводка', 'summary',
      ex('Vielen Dank für die übersichtliche [[Zusammenfassung]] unseres Gesprächs.', 'Большое спасибо за наглядное резюме нашего разговора.', 'Thank you very much for the clear summary of our conversation.'),
      { morph: 'Zusammen-fass-ung', level: 'B1' }),
    n('fassen-verfassung', 'die', 'Verfassung', 'die Verfassungen', 'конституция; состояние (физическое/моральное)', 'constitution; condition, state',
      ex('Die Meinungsfreiheit ist in der [[Verfassung]] geschützt.', 'Свобода мнений защищена конституцией.', 'Freedom of expression is protected by the constitution.'),
      { morph: 'Ver-fass-ung', level: 'B2' }),
    n('fassen-fassung', 'die', 'Fassung', 'die Fassungen', 'редакция/версия (текста, закона); самообладание; оправа/патрон', 'version, draft; composure; frame/socket',
      ex('Bitte prüfen Sie, ob Sie die aktuelle [[Fassung]] des Vertrags vorliegen haben.', 'Пожалуйста, проверьте, актуальная ли редакция договора у вас на руках.', 'Please check whether you have the current version of the contract.'),
      { morph: 'Fass-ung', level: 'B2' }),
    n('fassen-auffassung', 'die', 'Auffassung', 'die Auffassungen', 'мнение, взгляд, понимание (meiner Auffassung nach)', 'view, opinion, interpretation',
      ex('Meiner [[Auffassung]] nach sollten wir zuerst die Ursache klären.', 'На мой взгляд, нам следует сначала выяснить причину.', 'In my view, we should clarify the cause first.'),
      { morph: 'Auf-fass-ung', level: 'C1' })
  ]);

  /* 15. klären */
  regRoot('klären', 'klären', 'прояснять, выяснять, улаживать', 'to clarify, clear up, settle',
    ['Слабый глагол: klärt — klärte — hat geklärt (от прилагательного klar — ясный). Даёт очень точные оттенки в деловом и повседневном языке: erklären (объяснять / официально заявлять), abklären (предварительно уточнить, согласовать), aufklären (разъяснить / раскрыть преступление или заблуждение), verklären (идеализировать прошлое).',
     'Weak verb: klärt — klärte — hat geklärt (from klar — clear). Yields precise everyday and workplace distinctions: erklären (explain / declare), abklären (check and clarify in advance), aufklären (enlighten / solve a mystery or misconception), verklären (idealise).'], [
    v('klaeren-base', 'klären', ['klärt', 'klärte', 'hat geklärt'], 'прояснять, выяснять, улаживать (вопрос, недоразумение)', 'to clarify, settle, resolve (a question/issue)',
      ex('Offene Fragen zum Vertrag sollten wir noch vor der Unterschrift [[klären]].', 'Открытые вопросы по договору нам стоит прояснить ещё до подписания.', 'We should clarify open questions about the contract before signing.'),
      { base: true, level: 'B1', morph: 'klär-en' }),
    v('klaeren-erklaeren', 'erklären', ['erklärt', 'erklärte', 'hat erklärt'], 'объяснять; официально заявлять (sich bereit erklären)', 'to explain; to declare, state',
      ex('Könnten Sie mir kurz [[erklären]], wie das neue Buchungssystem funktioniert?', 'Не могли бы вы кратко объяснить мне, как работает новая система бронирования?', 'Could you briefly explain to me how the new booking system works?'),
      { core: true, prefix: 'er', sep: 'untrennbar', stress: 'erklären', tr: 'transparent', morph: 'er-klär-en', level: 'B1',
        pd: { ex: 0, meaning: 2, explain: 'er- + прилагательное klar = «сделать ясным» → объяснить.' } }),
    v('klaeren-abklaeren', 'abklären', ['klärt ab', 'klärte ab', 'hat abgeklärt'], 'предварительно уточнять, проверять (у врача, в отделе, юридически)', 'to check out, clarify in advance (medically/legally)',
      ex('Bevor wir zusagen, muss ich den Termin kurz mit meinem Team [[abklären]].', 'Прежде чем дать согласие, мне нужно уточнить дату со своей командой.', 'Before we confirm, I need to check the date with my team.'),
      { core: true, prefix: 'ab', sep: 'trennbar', stress: 'ábklären', tr: 'transparent', morph: 'ab-klär-en', level: 'B2',
        pd: { ex: 0, meaning: 5, explain: 'ab- = довести выяснение до полной ясности заранее.' } }),
    v('klaeren-aufklaeren', 'aufklären', ['klärt auf', 'klärte auf', 'hat aufgeklärt'], 'разъяснять, информировать (о рисках); раскрывать (дело, недоразумение)', 'to inform, educate (about risks); to clear up, solve (a case)',
      ex('Vor der Operation muss die Ärztin den Patienten über mögliche Risiken [[aufklären]].', 'Перед операцией врач обязана проинформировать пациента о возможных рисках.', 'Before the operation, the doctor must inform the patient about possible risks.'),
      { core: true, prefix: 'auf', sep: 'trennbar', stress: 'áufklären', tr: 'transparent', morph: 'auf-klär-en', level: 'B2',
        pd: { ex: 0, meaning: 1, explain: 'auf- = раскрыть картину, сделать скрытое понятным.' } }),
    v('klaeren-verklaeren', 'verklären', ['verklärt', 'verklärte', 'hat verklärt'], 'идеализировать, приукрашивать (прошлое в памяти)', 'to idealise, romanticise (the past)',
      ex('Im Rückblick neigen Menschen oft dazu, alte Zeiten zu [[verklären]].', 'Оглядываясь назад, люди часто склонны идеализировать прежние времена.', 'In hindsight, people often tend to romanticise old times.'),
      { core: true, prefix: 'ver', sep: 'untrennbar', stress: 'verklären', tr: 'figurative', morph: 'ver-klär-en', level: 'C1' }),
    n('klaeren-erklaerung', 'die', 'Erklärung', 'die Erklärungen', 'объяснение; официальное заявление (Steuererklärung)', 'explanation; official declaration',
      ex('Dank Ihrer klaren [[Erklärung]] ist der Ablauf jetzt für alle verständlich.', 'Благодаря вашему понятному объяснению порядок действий теперь ясен всем.', 'Thanks to your clear explanation, the process is now clear to everyone.'),
      { morph: 'Er-klär-ung', level: 'B1' }),
    n('klaeren-aufklaerung', 'die', 'Aufklärung', 'die Aufklärungen', 'разъяснение, просвещение; раскрытие (дела)', 'enlightenment, clarification; solving (a case)',
      ex('Sachliche [[Aufklärung]] hilft wirksamer gegen Gerüchte als Verbote.', 'Спокойное разъяснение помогает против слухов эффективнее, чем запреты.', 'Factual clarification helps against rumours more effectively than bans.'),
      { morph: 'Auf-klär-ung', level: 'B2' }),
    n('klaeren-klaerung', 'die', 'Klärung', 'die Klärungen', 'выяснение, урегулирование (вопроса)', 'clarification, resolution',
      ex('Zur [[Klärung]] der offenen Punkte treffen wir uns am Dienstag.', 'Для прояснения открытых вопросов мы встретимся во вторник.', 'To clarify the open points, we are meeting on Tuesday.'),
      { morph: 'Klär-ung', level: 'B2' }),
    adj('klaeren-klar', 'klar', 'ясный, понятный, чёткий', 'clear, plain, obvious',
      ex('Wir brauchen eine [[klare]] Absprache, wer für welchen Schritt zuständig ist.', 'Нам нужна чёткая договорённость о том, кто отвечает за какой шаг.', 'We need a clear agreement on who is responsible for which step.'),
      { morph: 'klar', level: 'B1' })
  ]);
})();
