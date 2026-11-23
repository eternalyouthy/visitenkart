/* ENGLISH verb families (Roots → Verbs + particles). Same method as the German roots: a base verb in the centre,
 * verb + particle around it (take → take up, take off …), nouns from the same pair as chips (takeover, setback).
 * Phrasal verbs that already exist in the catalogue are reused (one card, shared progress), not duplicated.
 * Glosses ru / de; examples in English with [[…]] around every part of the phrasal verb. Original examples. */
(function () {
  'use strict';
  var P = GT.packs.en, ORDER = [];
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function existing(t) { return P.items.filter(function (x) { return x.t === t; })[0] || null; }
  function base(verb, forms, level, ru, de, examples, note) {
    return { id: 'en:vf:' + verb, base: true, core: true, pos: 'verb', t: verb, level: level,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, de: de, examples: examples,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  /** pv(t, particle, meaningIndex, level, ru, de, examples, [ruParallel, deParallel], [explainRu, explainDe], opts) */
  function pv(t, pfx, m, level, ru, de, examples, par, expl, opts) {
    opts = opts || {};
    var w = existing(t) || { id: 'en:vf:' + t.replace(/ /g, '-'), t: t, pos: 'phrasal verb', level: level, ru: ru, de: de, examples: examples };
    if (pfx) { w.prefix = 'pv-' + pfx; w.particle = true; }
    w.core = opts.core !== false;
    w.transparency = opts.tr || (pfx ? 'transparent' : 'figurative');
    if (par) w.parallel = { ru: par[0], de: par[1] };
    if (pfx && expl && m != null) w.prefixDrill = { ex: 0, meaning: m, explain: { ru: expl[0], de: expl[1] } };
    if (opts.note && !w.note) w.note = { ru: opts.note[0], de: opts.note[1] };
    return w;
  }
  function noun(t, level, ru, de, examples, note) {
    return existing(t) || { id: 'en:vf:n:' + t.replace(/ /g, '-'), t: t, pos: 'noun', level: level, ru: ru, de: de, examples: examples,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function family(verb, ru, de, note, words) {
    var id = 'vf-' + verb;
    // A reused entry that was not found (and has no own examples) is skipped rather than shown empty.
    words = words.filter(function (w) { return w && w.examples && w.examples.length; });
    GT.registerRoot({ id: id, verb: verb, t: verb, label: verb.toUpperCase(), ru: ru, de: de, note: { ru: note[0], de: note[1] },
      words: words, group: 'Verbs + particles', mapVerbs: true });
    ORDER.push(id);
  }

  /* ---------------- TAKE ---------------- */
  family('take', 'брать', 'nehmen', [
    'Как немецкое nehmen: одна основа — много значений через частицы. Take up ≈ aufnehmen, take over ≈ übernehmen, take off ≈ abnehmen/ausziehen. Неправильный глагол: take — took — taken.',
    'Wie deutsch nehmen: ein Verb, viele Bedeutungen über Partikeln. Take up ≈ aufnehmen, take over ≈ übernehmen, take off ≈ ausziehen/abheben. Unregelmäßig: take — took — taken.'
  ], [
    base('take', ['takes', 'took', 'taken'], 'A1', 'брать; занимать (время); ехать (на транспорте)', 'nehmen; dauern; (Verkehrsmittel) nehmen', [
      ex('It [[takes]] me twenty minutes to get to work.', 'Дорога до работы занимает у меня двадцать минут.', 'Ich brauche zwanzig Minuten zur Arbeit.')
    ], ['It takes + время + to do — «требуется столько-то времени».', 'It takes + Zeit + to do — „man braucht so viel Zeit“.']),
    pv('take up', 'up', 2, 'B1', 'начать заниматься (хобби); занимать (место, время)', 'anfangen mit (Hobby); einnehmen (Platz, Zeit)', [
      ex('She [[took up]] running after she moved to the coast.', 'После переезда на побережье она начала бегать.', 'Nach dem Umzug an die Küste hat sie mit dem Laufen angefangen.')
    ], ['ЗАняться', 'anfangen mit; (Platz) einnehmen'], ['up = начать что-то новое: заняться бегом.', 'up = etwas Neues beginnen: mit dem Laufen anfangen.']),
    pv('take off', 'off', 0, 'B1', 'взлетать; снимать (одежду); резко пойти в гору (о деле)', 'abheben (Flugzeug); ausziehen (Kleidung); durchstarten', [
      ex('The plane [[took off]] an hour late.', 'Самолёт взлетел с опозданием на час.', 'Das Flugzeug ist mit einer Stunde Verspätung abgehoben.'),
      ex('Please [[take]] your shoes [[off]] at the door.', 'Пожалуйста, снимите обувь у двери.', 'Bitte zieh die Schuhe an der Tür aus.')
    ], ['ВЗлетать; СНять', 'abheben; ausziehen'], ['off = оторваться от поверхности: самолёт взлетел.', 'off = sich von der Oberfläche lösen: das Flugzeug hebt ab.'],
      { note: ['Разделяемый: take your shoes off / take off your shoes. С местоимением только take them off.', 'Trennbar: take your shoes off / take off your shoes. Mit Pronomen nur take them off.'] }),
    pv('take over', 'over', 1, 'B2', 'брать на себя, перенимать (дела, компанию)', 'übernehmen', [
      ex('Anna will [[take over]] the project while I’m on leave.', 'Пока я в отпуске, проект возьмёт на себя Анна.', 'Anna übernimmt das Projekt, während ich im Urlaub bin.')
    ], ['ПЕРЕнять', 'ÜBERnehmen'], ['over = передача контроля от одного к другому.', 'over = Kontrolle geht von einer Person zur anderen über.']),
    pv('take on', 'on', 3, 'B2', 'браться за (работу); нанимать', 'übernehmen (Aufgabe); einstellen', [
      ex('I can’t [[take on]] any more work this month.', 'В этом месяце я не могу взять на себя больше работы.', 'Diesen Monat kann ich keine weitere Arbeit übernehmen.')
    ], ['взять НА себя', 'auf sich nehmen; einstellen'], ['on = взять на себя (ответственность, работу).', 'on = etwas auf sich nehmen (Arbeit, Verantwortung).']),
    pv('take back', 'back', 0, 'B1', 'вернуть (в магазин); забрать назад (свои слова)', 'zurückbringen; zurücknehmen', [
      ex('If the jacket doesn’t fit, you can [[take]] it [[back]].', 'Если куртка не подойдёт, её можно вернуть.', 'Wenn die Jacke nicht passt, kannst du sie zurückbringen.')
    ], ['ВЕРнуть; взять назад', 'zurückbringen; zurücknehmen'], ['back = обратно в исходное место: вернуть в магазин.', 'back = zurück zum Ausgangspunkt: in den Laden zurückbringen.']),
    pv('take out', 'out', 0, 'B1', 'вынуть, достать; сводить (куда-то); оформить (кредит, страховку)', 'herausnehmen; ausführen; abschließen (Kredit)', [
      ex('He [[took out]] his phone and checked the time.', 'Он достал телефон и посмотрел время.', 'Er nahm sein Handy heraus und sah auf die Uhr.')
    ], ['ВЫнуть', 'HERAUSnehmen'], ['out = изнутри наружу: достать из кармана.', 'out = von innen nach außen: aus der Tasche nehmen.']),
    pv('take in', 'in', 0, 'B2', 'воспринимать, усваивать; обманывать', 'aufnehmen, verarbeiten; hereinlegen', [
      ex('There was too much information to [[take in]] at once.', 'Информации было слишком много, чтобы усвоить её сразу.', 'Es waren zu viele Informationen, um sie auf einmal aufzunehmen.')
    ], ['Воспринять', 'AUFnehmen'], ['in = внутрь: «вобрать» информацию.', 'in = hinein: Informationen in sich aufnehmen.']),
    noun('takeover', 'B2', 'поглощение (компании)', 'Übernahme (einer Firma)', [
      ex('After the [[takeover]], half of the managers left.', 'После поглощения половина менеджеров ушла.', 'Nach der Übernahme ging die Hälfte der Führungskräfte.')
    ], ['Существительное из take over пишется слитно: a takeover.', 'Das Nomen aus take over wird zusammengeschrieben: a takeover.']),
    noun('takeaway', 'B1', 'еда навынос (брит.)', 'Essen zum Mitnehmen', [
      ex('Let’s just get a [[takeaway]] tonight.', 'Давай сегодня просто возьмём еду навынос.', 'Lass uns heute einfach Essen zum Mitnehmen holen.')
    ], ['Брит. takeaway = амер. takeout.', 'Brit. takeaway = amerik. takeout.'])
  ]);

  /* ---------------- GET ---------------- */
  family('get', 'получать; становиться; добираться', 'bekommen; werden; gelangen', [
    'Get — самый «пустой» глагол английского: смысл почти целиком несёт частица. Get up — встать, get over — пережить, get away — сбежать.',
    'Get ist das „leerste“ Verb des Englischen: die Bedeutung trägt fast ganz die Partikel. Get up — aufstehen, get over — überwinden, get away — entkommen.'
  ], [
    base('get', ['gets', 'got', 'got / gotten (US)'], 'A1', 'получать; становиться; добираться', 'bekommen; werden; ankommen', [
      ex('It’s [[getting]] dark — let’s go home.', 'Темнеет — пойдём домой.', 'Es wird dunkel — lass uns nach Hause gehen.')
    ], ['Get + прилагательное = «становиться»: get tired, get angry.', 'Get + Adjektiv = „werden“: get tired, get angry.']),
    pv('get up', 'up', 0, 'A1', 'вставать (с кровати)', 'aufstehen', [
      ex('I [[get up]] at six on weekdays.', 'По будням я встаю в шесть.', 'Unter der Woche stehe ich um sechs auf.')
    ], ['ВСтавать', 'AUFstehen'], ['up = вверх: из лежачего положения.', 'up = nach oben: aus dem Liegen.']),
    pv('get on', 'on', 0, 'A2', 'садиться (в автобус, поезд); ладить (with)', 'einsteigen; sich verstehen (with)', [
      ex('We [[got on]] the wrong bus.', 'Мы сели не в тот автобус.', 'Wir sind in den falschen Bus eingestiegen.')
    ], ['сесть НА автобус', 'EINsteigen'], ['on = на поверхность: «на» транспорт.', 'on = auf etwas: in den Bus „hinauf“.'],
      { note: ['Get on / off — автобус, поезд, самолёт; get in / out of — машина, такси. Get on with someone — ладить.', 'Get on / off — Bus, Zug, Flugzeug; get in / out of — Auto, Taxi. Get on with someone — sich gut verstehen.'] }),
    pv('get off', 'off', 0, 'A2', 'выходить (из автобуса, поезда)', 'aussteigen', [
      ex('[[Get off]] at the third stop.', 'Выходите на третьей остановке.', 'Steig an der dritten Haltestelle aus.')
    ], ['СОЙти, ВЫйти', 'AUSsteigen'], ['off = прочь от транспорта.', 'off = weg vom Verkehrsmittel.']),
    pv('get over', 'over', 3, 'B1', 'оправиться (от болезни), пережить (неудачу, расставание)', 'überwinden, hinwegkommen über', [
      ex('It took her months to [[get over]] the breakup.', 'Ей понадобились месяцы, чтобы пережить расставание.', 'Sie brauchte Monate, um über die Trennung hinwegzukommen.')
    ], ['ПЕРЕжить', 'ÜBERwinden, hinwegkommen'], ['over = преодолеть препятствие.', 'over = ein Hindernis überwinden.'],
      { note: ['Неразделяемый: get over it, не get it over.', 'Nicht trennbar: get over it, nicht get it over.'] }),
    pv('get back', 'back', 0, 'A2', 'вернуться; получить обратно', 'zurückkommen; zurückbekommen', [
      ex('When did you [[get back]] from Spain?', 'Когда ты вернулся из Испании?', 'Wann bist du aus Spanien zurückgekommen?')
    ], ['ВЕРнуться', 'ZURÜCKkommen'], ['back = обратно.', 'back = zurück.']),
    pv('get away', 'away', 0, 'B1', 'сбежать; вырваться (в отпуск)', 'entkommen; wegfahren (Urlaub)', [
      ex('We’re hoping to [[get away]] for a few days in May.', 'Мы надеемся вырваться на несколько дней в мае.', 'Wir hoffen, im Mai für ein paar Tage wegzukommen.')
    ], ['У-ехать, вырваться', 'WEGkommen'], ['away = прочь: уехать подальше от дел.', 'away = weg: Abstand vom Alltag.']),
    pv('get out', 'out', 0, 'A2', 'выходить, выбираться; выходить (из машины)', 'rausgehen; aussteigen (Auto)', [
      ex('[[Get out]] of the car carefully — there’s a cyclist.', 'Выходи из машины осторожно — там велосипедист.', 'Steig vorsichtig aus dem Auto — da ist ein Radfahrer.')
    ], ['ВЫйти', 'RAUSgehen, aussteigen'], ['out = изнутри наружу.', 'out = von innen nach außen.']),
    noun('getaway', 'B2', 'короткая поездка, побег от рутины; побег (преступника)', 'Kurzurlaub; Flucht', [
      ex('We booked a weekend [[getaway]] in the mountains.', 'Мы забронировали поездку на выходные в горы.', 'Wir haben einen Wochenendtrip in die Berge gebucht.')
    ])
  ]);

  /* ---------------- PUT ---------------- */
  family('put', 'класть, ставить', 'legen, stellen, setzen', [
    'Put не различает «класть», «ставить» и «вешать» — это делают частицы и предлоги. Неправильный: put — put — put.',
    'Put unterscheidet nicht zwischen legen, stellen und setzen — das übernehmen Partikeln und Präpositionen. Unregelmäßig: put — put — put.'
  ], [
    base('put', ['puts', 'put', 'put'], 'A1', 'класть, ставить, помещать', 'legen, stellen, tun', [
      ex('Where did you [[put]] the keys?', 'Куда ты положил ключи?', 'Wo hast du die Schlüssel hingelegt?')
    ]),
    pv('put on', 'on', 0, 'A2', 'надевать; включать; набирать (вес)', 'anziehen; anmachen; zunehmen', [
      ex('[[Put on]] a warm jacket — it’s freezing outside.', 'Надень тёплую куртку — на улице мороз.', 'Zieh eine warme Jacke an — draußen ist es eiskalt.')
    ], ['НАдеть', 'ANziehen'], ['on = на тело.', 'on = an den Körper.']),
    pv('put off', 'off', 2, 'B1', 'откладывать', 'aufschieben, verschieben', [], ['ОТложить', 'AUFschieben'], ['off = отодвинуть во времени.', 'off = zeitlich wegschieben.']),
    pv('put away', 'away', 1, 'A2', 'убирать на место', 'wegräumen', [
      ex('Please [[put]] your toys [[away]] before dinner.', 'Пожалуйста, убери игрушки перед ужином.', 'Räum bitte deine Spielsachen vor dem Abendessen weg.')
    ], ['У-брать', 'WEGräumen'], ['away = прочь, на своё место.', 'away = weg, an seinen Platz.']),
    pv('put down', 'down', 2, 'B1', 'записать; положить; (о ком-то) унижать', 'aufschreiben; hinlegen; herabsetzen', [
      ex('[[Put down]] your name and phone number here.', 'Запишите здесь своё имя и номер телефона.', 'Schreiben Sie hier Ihren Namen und Ihre Telefonnummer auf.')
    ], ['ЗАписать', 'AUFschreiben'], ['down = «вниз на бумагу», записать.', 'down = „aufs Papier“: aufschreiben.']),
    pv('put out', 'out', 2, 'B1', 'тушить (огонь, сигарету)', 'löschen, ausmachen', [
      ex('The firefighters [[put out]] the fire within an hour.', 'Пожарные потушили огонь за час.', 'Die Feuerwehr hat den Brand innerhalb einer Stunde gelöscht.')
    ], ['ПОтушить', 'AUSmachen, löschen'], ['out = прекращение: огонь «погас».', 'out = Ende: das Feuer geht aus.']),
    pv('put back', 'back', 0, 'B1', 'вернуть на место; перенести (на более поздний срок)', 'zurücklegen; verschieben', [
      ex('[[Put]] the milk [[back]] in the fridge, please.', 'Поставь, пожалуйста, молоко обратно в холодильник.', 'Stell die Milch bitte zurück in den Kühlschrank.')
    ], ['ПОставить обратно', 'ZURÜCKlegen'], ['back = обратно на место.', 'back = zurück an den Platz.']),
    pv('put up with', 'up', null, 'B2', 'терпеть, мириться с', 'sich abfinden mit, ertragen', [
      ex('I can’t [[put up with]] the noise any longer.', 'Я больше не могу терпеть этот шум.', 'Ich kann den Lärm nicht länger ertragen.')
    ], ['ТЕРПЕТЬ, мириться', 'ertragen, sich abfinden'], null, { tr: 'opaque', note: ['Значение не выводится из частей — учите целиком. Неразделяемый: put up with it.', 'Die Bedeutung lässt sich nicht aus den Teilen ableiten — als Ganzes lernen. Nicht trennbar: put up with it.'] }),
    noun('input', 'B2', 'вклад, мнение; ввод (данных)', 'Beitrag, Input; Eingabe', [
      ex('Thanks for your [[input]] on the design.', 'Спасибо за ваши идеи по дизайну.', 'Danke für deinen Input zum Design.')
    ], ['Обратный порядок: put in → input, put out → output.', 'Umgekehrte Reihenfolge: put in → input, put out → output.']),
    noun('output', 'B2', 'выпуск, производительность; вывод (данных)', 'Leistung, Produktion; Ausgabe', [
      ex('The factory doubled its [[output]] last year.', 'В прошлом году завод удвоил выпуск продукции.', 'Die Fabrik hat ihre Produktion im letzten Jahr verdoppelt.')
    ])
  ]);

  /* ---------------- COME ---------------- */
  family('come', 'приходить', 'kommen', [
    'Come + частица описывает движение к говорящему или появление чего-то: come up (возникнуть), come out (выйти, стать известным). Неправильный: come — came — come.',
    'Come + Partikel beschreibt Bewegung zum Sprecher oder das Erscheinen von etwas: come up (aufkommen), come out (erscheinen). Unregelmäßig: come — came — come.'
  ], [
    base('come', ['comes', 'came', 'come'], 'A1', 'приходить, приезжать', 'kommen', [
      ex('Are you [[coming]] to the party on Saturday?', 'Ты придёшь на вечеринку в субботу?', 'Kommst du am Samstag zur Party?')
    ]),
    pv('come up', 'up', 1, 'B1', 'возникать (о вопросе, проблеме); приближаться', 'aufkommen, auftauchen; bevorstehen', [
      ex('A few problems [[came up]] during the test.', 'Во время теста возникло несколько проблем.', 'Beim Test sind ein paar Probleme aufgetaucht.')
    ], ['ВОЗникнуть', 'AUFkommen, auftauchen'], ['up = появиться на поверхности, всплыть.', 'up = an die Oberfläche kommen, auftauchen.']),
    pv('come up with', 'up', 1, 'B1', 'придумать, предложить', 'sich ausdenken, vorschlagen', [], ['ПРИдумать', 'sich AUSdenken'], ['up = идея «всплыла».', 'up = eine Idee taucht auf.']),
    pv('come back', 'back', 0, 'A1', 'возвращаться', 'zurückkommen', [
      ex('I’ll [[come back]] in ten minutes.', 'Я вернусь через десять минут.', 'Ich komme in zehn Minuten zurück.')
    ], ['ВЕРнуться', 'ZURÜCKkommen'], ['back = обратно.', 'back = zurück.']),
    pv('come in', 'in', 0, 'A1', 'входить', 'hereinkommen', [
      ex('The door’s open — [[come in]]!', 'Дверь открыта — заходи!', 'Die Tür ist offen — komm rein!')
    ], ['ВОЙти', 'HEREINkommen'], ['in = внутрь.', 'in = hinein.']),
    pv('come out', 'out', 1, 'B1', 'выходить (о книге, фильме); становиться известным; получаться (о фото)', 'erscheinen; herauskommen', [
      ex('Her new album [[comes out]] next month.', 'Её новый альбом выйдет в следующем месяце.', 'Ihr neues Album erscheint nächsten Monat.')
    ], ['ВЫйти', 'ERSCHEINEN, herauskommen'], ['out = выйти в свет, стать доступным.', 'out = an die Öffentlichkeit kommen.']),
    pv('come over', 'over', 0, 'A2', 'заходить (в гости)', 'vorbeikommen', [
      ex('Why don’t you [[come over]] for dinner on Friday?', 'Почему бы тебе не зайти на ужин в пятницу?', 'Komm doch am Freitag zum Abendessen vorbei!')
    ], ['ЗАйти, заглянуть', 'VORBEIkommen, rüberkommen'], ['over = преодолеть расстояние до чужого дома.', 'over = die Strecke zu jemandem hinüber.']),
    noun('outcome', 'B2', 'результат, исход', 'Ergebnis, Ausgang', []),
    noun('income', 'B1', 'доход', 'Einkommen', [
      ex('Rent takes almost half of my [[income]].', 'Аренда съедает почти половину моего дохода.', 'Die Miete frisst fast die Hälfte meines Einkommens.')
    ], ['Обратный порядок: come in → income, come out → outcome.', 'Umgekehrte Reihenfolge: come in → income, come out → outcome.'])
  ]);

  /* ---------------- GO ---------------- */
  family('go', 'идти, ехать', 'gehen, fahren', [
    'Go + частица: go on (продолжать), go off (сработать), go over (просмотреть). Неправильный: go — went — gone.',
    'Go + Partikel: go on (weitermachen), go off (losgehen), go over (durchgehen). Unregelmäßig: go — went — gone.'
  ], [
    base('go', ['goes', 'went', 'gone'], 'A1', 'идти, ехать', 'gehen, fahren', [
      ex('We [[went]] to Lisbon for a week.', 'Мы съездили на неделю в Лиссабон.', 'Wir sind für eine Woche nach Lissabon gefahren.')
    ]),
    pv('go on', 'on', 1, 'B1', 'продолжать(ся); происходить', 'weitermachen; los sein', [
      ex('Sorry I interrupted — please [[go on]].', 'Простите, я перебил — продолжайте, пожалуйста.', 'Entschuldigung, ich habe unterbrochen — machen Sie bitte weiter.'),
      ex('What’s [[going on]] here?', 'Что здесь происходит?', 'Was ist hier los?')
    ], ['ПРОдолжать', 'WEITERmachen'], ['on = продолжение движения.', 'on = Fortsetzung.']),
    pv('go out', 'out', 0, 'A2', 'выходить (развлечься); встречаться (with); гаснуть', 'ausgehen; zusammen sein (with)', [
      ex('Do you want to [[go out]] tonight?', 'Хочешь сегодня куда-нибудь сходить?', 'Willst du heute Abend ausgehen?')
    ], ['ВЫйти (в свет)', 'AUSgehen'], ['out = из дома наружу.', 'out = aus dem Haus.']),
    pv('go off', 'off', 3, 'B1', 'срабатывать (о будильнике, сигнализации); портиться (о еде)', 'losgehen, klingeln; schlecht werden', [
      ex('My alarm [[went off]] at five.', 'Мой будильник зазвонил в пять.', 'Mein Wecker hat um fünf geklingelt.')
    ], ['ЗАзвонить, сработать', 'LOSgehen'], ['off = резкий старт, срабатывание.', 'off = plötzlich losgehen.']),
    pv('go over', 'over', 2, 'B1', 'просмотреть, разобрать (ещё раз)', 'durchgehen', [
      ex('Let’s [[go over]] the plan one more time.', 'Давайте ещё раз пройдёмся по плану.', 'Lass uns den Plan noch einmal durchgehen.')
    ], ['ПРОйтись по', 'DURCHgehen'], ['over = пройтись по всему, проверить.', 'over = alles durchgehen, prüfen.']),
    pv('go back', 'back', 0, 'A2', 'возвращаться', 'zurückgehen', [
      ex('I’d love to [[go back]] to Japan one day.', 'Я бы с удовольствием когда-нибудь вернулся в Японию.', 'Ich würde gern eines Tages nach Japan zurückfahren.')
    ], ['ВЕРнуться', 'ZURÜCKgehen'], ['back = обратно.', 'back = zurück.']),
    pv('go up', 'up', 0, 'B1', 'расти (о ценах, числах); подниматься', 'steigen', [
      ex('Rents have [[gone up]] again this year.', 'В этом году аренда снова выросла.', 'Die Mieten sind dieses Jahr wieder gestiegen.')
    ], ['ВЫрасти, ПОДняться', 'STEIGEN'], ['up = вверх.', 'up = nach oben.']),
    pv('go down', 'down', 0, 'B1', 'снижаться, падать', 'sinken, zurückgehen', [
      ex('The number of complaints has [[gone down]].', 'Количество жалоб снизилось.', 'Die Zahl der Beschwerden ist zurückgegangen.')
    ], ['С-низиться, У-пасть', 'SINKEN'], ['down = вниз.', 'down = nach unten.']),
    pv('go away', 'away', 0, 'A2', 'уходить; проходить (о боли); уезжать', 'weggehen; vergehen; verreisen', [
      ex('The headache [[went away]] after a short walk.', 'Головная боль прошла после короткой прогулки.', 'Die Kopfschmerzen sind nach einem kurzen Spaziergang vergangen.')
    ], ['У-йти, ПРОйти', 'WEGgehen, vergehen'], ['away = прочь, исчезнуть.', 'away = weg, verschwinden.'])
  ]);

  /* ---------------- LOOK ---------------- */
  family('look', 'смотреть', 'schauen, sehen', [
    'Look + частица или предлог: look up (найти в словаре), look after (присматривать), look forward to (ждать с нетерпением). Многие из них неразделяемые.',
    'Look + Partikel oder Präposition: look up (nachschlagen), look after (aufpassen auf), look forward to (sich freuen auf). Viele sind nicht trennbar.'
  ], [
    base('look', ['looks', 'looked', 'looked'], 'A1', 'смотреть; выглядеть', 'schauen; aussehen', [
      ex('You [[look]] tired — are you OK?', 'Ты выглядишь усталым — всё в порядке?', 'Du siehst müde aus — alles okay?')
    ], ['Look at — смотреть на; look + прилагательное — выглядеть.', 'Look at — ansehen; look + Adjektiv — aussehen.']),
    pv('look up', 'up', 1, 'B1', 'найти (в словаре, в интернете)', 'nachschlagen', [
      ex('If you don’t know a word, [[look]] it [[up]].', 'Если не знаешь слово, посмотри его в словаре.', 'Wenn du ein Wort nicht kennst, schlag es nach.')
    ], ['НАйти, ПОсмотреть', 'NACHschlagen'], ['up = найти, «вытащить» на поверхность.', 'up = etwas finden, hervorholen.']),
    pv('look after', null, null, 'A2', 'присматривать, заботиться', 'aufpassen auf, sich kümmern um', [], ['ПРИсматривать', 'aufpassen auf, sich kümmern um'], null),
    pv('look forward to', null, null, 'B1', 'ждать с нетерпением', 'sich freuen auf', [
      ex('I’m [[looking forward to]] seeing you.', 'С нетерпением жду встречи с тобой.', 'Ich freue mich darauf, dich zu sehen.')
    ], ['ждать с нетерпением', 'sich freuen auf'], null, { note: ['После to — форма на -ing: look forward to meeting you.', 'Nach to folgt die -ing-Form: look forward to meeting you.'] }),
    pv('look into', null, null, 'B2', 'изучить, разобраться', 'untersuchen, prüfen', [], ['РАЗобраться', 'UNTERsuchen'], null),
    pv('look out', 'out', 0, 'B1', 'быть осторожным (look out!); высматривать (for)', 'aufpassen, Vorsicht!; Ausschau halten', [
      ex('[[Look out]]! There’s a car coming.', 'Осторожно! Едет машина.', 'Pass auf! Da kommt ein Auto.')
    ], ['Осторожно!', 'Pass auf! Vorsicht!'], ['out = смотреть наружу, быть начеку.', 'out = nach draußen schauen, wachsam sein.']),
    pv('look back', 'back', 2, 'B2', 'оглядываться назад, вспоминать (on)', 'zurückblicken (auf)', [
      ex('When I [[look back]] on my school years, I mostly remember the friends.', 'Вспоминая школьные годы, я в основном помню друзей.', 'Wenn ich auf meine Schulzeit zurückblicke, erinnere ich mich vor allem an die Freunde.')
    ], ['ОГЛЯдываться назад', 'ZURÜCKblicken'], ['back = в прошлое.', 'back = in die Vergangenheit.']),
    pv('look over', 'over', 2, 'B2', 'бегло просмотреть, проверить', 'durchsehen, überfliegen', [
      ex('Could you [[look over]] my cover letter?', 'Не могли бы вы просмотреть моё сопроводительное письмо?', 'Könntest du mein Anschreiben durchsehen?')
    ], ['ПРОсмотреть', 'DURCHsehen'], ['over = пробежать глазами по всему тексту.', 'over = über alles hinweg schauen.']),
    noun('outlook', 'B2', 'перспективы, прогноз; взгляд на жизнь', 'Aussichten; Einstellung', [
      ex('The economic [[outlook]] for next year is uncertain.', 'Экономические перспективы на следующий год неясны.', 'Die wirtschaftlichen Aussichten für nächstes Jahr sind unsicher.')
    ])
  ]);

  /* ---------------- TURN ---------------- */
  family('turn', 'поворачивать', 'drehen, wenden', [
    'Turn + частица — от «повернуть ручку»: turn on / off (включить / выключить), turn up / down (громче / тише).',
    'Turn + Partikel kommt vom „Drehen am Knopf“: turn on / off (ein-/ausschalten), turn up / down (lauter / leiser).'
  ], [
    base('turn', ['turns', 'turned', 'turned'], 'A2', 'поворачивать(ся); становиться', 'abbiegen, drehen; werden', [
      ex('[[Turn]] left at the traffic lights.', 'На светофоре поверните налево.', 'Biegen Sie an der Ampel links ab.')
    ]),
    pv('turn on', 'on', 2, 'A2', 'включать', 'einschalten, anmachen', [
      ex('Can you [[turn on]] the light?', 'Можешь включить свет?', 'Kannst du das Licht anmachen?')
    ], ['ВКЛючить', 'EINschalten, ANmachen'], ['on = включённое состояние.', 'on = eingeschalteter Zustand.']),
    pv('turn off', 'off', 1, 'A2', 'выключать', 'ausschalten, ausmachen', [
      ex('Don’t forget to [[turn off]] the oven.', 'Не забудь выключить духовку.', 'Vergiss nicht, den Ofen auszuschalten.')
    ], ['ВЫКлючить', 'AUSschalten'], ['off = прекратить работу устройства.', 'off = das Gerät abschalten.']),
    pv('turn up', 'up', 0, 'B1', 'сделать громче; появиться, прийти', 'lauter stellen; auftauchen', [
      ex('Could you [[turn up]] the radio a bit?', 'Сделай радио чуть громче.', 'Kannst du das Radio etwas lauter stellen?'),
      ex('He [[turned up]] an hour late.', 'Он явился на час позже.', 'Er ist eine Stunde zu spät aufgetaucht.')
    ], ['сделать громче; ПОявиться', 'lauter stellen; AUFtauchen'], ['up = больше, выше (громкость).', 'up = mehr, höher (Lautstärke).']),
    pv('turn down', 'down', 1, 'B1', 'отклонять (предложение); делать тише', 'ablehnen; leiser stellen', [], ['ОТклонить', 'ABlehnen'], ['down = «вниз», отказ.', 'down = Ablehnung.']),
    pv('turn out', 'out', 1, 'B1', 'оказаться (что…)', 'sich herausstellen', [
      ex('It [[turned out]] that the shop was closed on Mondays.', 'Оказалось, что по понедельникам магазин закрыт.', 'Es stellte sich heraus, dass der Laden montags geschlossen war.')
    ], ['ОКАзаться', 'sich HERAUSstellen'], ['out = выясниться, стать известным.', 'out = herauskommen, bekannt werden.']),
    pv('turn back', 'back', 0, 'B1', 'повернуть назад', 'umkehren', [
      ex('The road was closed, so we had to [[turn back]].', 'Дорога была перекрыта, и нам пришлось повернуть назад.', 'Die Straße war gesperrt, also mussten wir umkehren.')
    ], ['ПОвернуть назад', 'UMkehren'], ['back = обратно.', 'back = zurück.']),
    pv('turn into', null, null, 'B1', 'превращаться в', 'sich verwandeln in, werden zu', [
      ex('The small café [[turned into]] a popular restaurant.', 'Маленькое кафе превратилось в популярный ресторан.', 'Das kleine Café wurde zu einem beliebten Restaurant.')
    ], ['ПРЕвратиться', 'sich VERwandeln'], null),
    noun('turnout', 'B2', 'явка (на выборы, мероприятие)', 'Beteiligung', [
      ex('The [[turnout]] at the meeting was surprisingly high.', 'Явка на собрание оказалась на удивление высокой.', 'Die Beteiligung an der Versammlung war überraschend hoch.')
    ])
  ]);

  /* ---------------- GIVE ---------------- */
  family('give', 'давать', 'geben', [
    'Give + частица почти зеркально совпадает с немецким geben + приставка: give up = aufgeben, give back = zurückgeben, give away = weggeben. Неправильный: give — gave — given.',
    'Give + Partikel spiegelt fast genau geben + Präfix: give up = aufgeben, give back = zurückgeben, give away = weggeben. Unregelmäßig: give — gave — given.'
  ], [
    base('give', ['gives', 'gave', 'given'], 'A1', 'давать', 'geben', [
      ex('Can you [[give]] me a hand with these boxes?', 'Поможешь мне с этими коробками?', 'Kannst du mir mit den Kisten helfen?')
    ]),
    pv('give up', 'up', 3, 'B1', 'бросить (привычку); сдаться', 'aufgeben', [
      ex('He [[gave up]] smoking last year.', 'В прошлом году он бросил курить.', 'Er hat letztes Jahr mit dem Rauchen aufgehört.'),
      ex('Don’t [[give up]] — you’re almost there!', 'Не сдавайся — ты почти у цели!', 'Gib nicht auf — du hast es fast geschafft!')
    ], ['БРОСИТЬ; С-даться', 'AUFgeben'], ['up = до конца, прекратить совсем.', 'up = ganz, endgültig aufhören.'], { note: ['После give up — форма на -ing: give up smoking.', 'Nach give up folgt -ing: give up smoking.'] }),
    pv('give back', 'back', 0, 'A2', 'возвращать, отдавать обратно', 'zurückgeben', [
      ex('I’ll [[give]] you your charger [[back]] tomorrow.', 'Завтра верну тебе зарядку.', 'Ich gebe dir morgen dein Ladegerät zurück.')
    ], ['ВЕРнуть, ОТдать', 'ZURÜCKgeben'], ['back = обратно владельцу.', 'back = zurück zum Besitzer.']),
    pv('give away', 'away', 2, 'B1', 'отдать даром; выдать (секрет)', 'verschenken; verraten', [
      ex('We [[gave away]] most of our furniture before moving.', 'Перед переездом мы раздали большую часть мебели.', 'Vor dem Umzug haben wir die meisten Möbel verschenkt.')
    ], ['ОТдать, РАЗдать', 'VERschenken, weggeben'], ['away = отдать другим, расстаться с вещью.', 'away = an andere weggeben.']),
    pv('give in', 'in', 2, 'B2', 'уступить, сдаться', 'nachgeben', [
      ex('The kids kept asking, and in the end I [[gave in]].', 'Дети всё просили, и в конце концов я уступил.', 'Die Kinder haben immer wieder gefragt, und am Ende habe ich nachgegeben.')
    ], ['У-ступить, С-даться', 'NACHgeben'], ['in = перестать сопротивляться.', 'in = den Widerstand aufgeben.']),
    pv('give out', 'out', 3, 'B1', 'раздавать; выйти из строя', 'austeilen; versagen', [
      ex('Volunteers were [[giving out]] water at the finish line.', 'Волонтёры раздавали воду на финише.', 'Freiwillige teilten im Ziel Wasser aus.')
    ], ['РАЗдавать', 'AUSteilen'], ['out = раздать многим.', 'out = an viele austeilen.']),
    pv('give off', 'off', 3, 'B2', 'испускать (запах, тепло, свет)', 'abgeben, verströmen', [
      ex('The old fridge [[gives off]] a strange smell.', 'Старый холодильник издаёт странный запах.', 'Der alte Kühlschrank verströmt einen seltsamen Geruch.')
    ], ['ИСпускать, ИЗдавать', 'ABgeben, verströmen'], ['off = выделять от себя наружу.', 'off = von sich abgeben.']),
    noun('giveaway', 'B2', 'бесплатная раздача, подарок; явный признак', 'Werbegeschenk; verräterisches Zeichen', [
      ex('His smile was a dead [[giveaway]].', 'Его улыбка всё выдала.', 'Sein Lächeln hat ihn verraten.')
    ])
  ]);

  /* ---------------- BRING ---------------- */
  family('bring', 'приносить', 'bringen', [
    'Bring — движение к говорящему (сравните take — от говорящего). Bring up = поднять тему, вырастить; bring back = вернуть, напомнить. Неправильный: bring — brought — brought.',
    'Bring bedeutet Bewegung zum Sprecher hin (take: weg vom Sprecher). Bring up = ansprechen, großziehen; bring back = zurückbringen, wachrufen. Unregelmäßig: bring — brought — brought.'
  ], [
    base('bring', ['brings', 'brought', 'brought'], 'A1', 'приносить, приводить', 'bringen, mitbringen', [
      ex('Can I [[bring]] a friend to the party?', 'Можно я приведу друга на вечеринку?', 'Kann ich einen Freund zur Party mitbringen?')
    ]),
    pv('bring up', 'up', 1, 'B1', 'поднять (тему); вырастить (ребёнка)', 'ansprechen; großziehen', [], ['ПОДнять (тему); вырастить', 'ANsprechen; großziehen'], ['up = вывести на поверхность, сделать заметным.', 'up = an die Oberfläche bringen, ansprechen.']),
    pv('bring back', 'back', 0, 'B1', 'вернуть; напоминать (о прошлом)', 'zurückbringen; wachrufen', [
      ex('This song [[brings back]] so many memories.', 'Эта песня пробуждает столько воспоминаний.', 'Dieses Lied ruft so viele Erinnerungen wach.')
    ], ['ВЕРнуть, напомнить', 'ZURÜCKbringen, wachrufen'], ['back = обратно (в настоящее).', 'back = zurück (in die Gegenwart).']),
    pv('bring in', 'in', 1, 'B2', 'вводить (правило, закон); привлекать (специалиста)', 'einführen; hinzuziehen', [
      ex('The city [[brought in]] new parking rules.', 'Город ввёл новые правила парковки.', 'Die Stadt hat neue Parkregeln eingeführt.')
    ], ['ВВести', 'EINführen'], ['in = внести внутрь системы.', 'in = in ein System hineinbringen.']),
    pv('bring out', 'out', 1, 'B2', 'выпускать (продукт); раскрывать (качества)', 'herausbringen; zum Vorschein bringen', [
      ex('The company [[brings out]] a new model every year.', 'Компания каждый год выпускает новую модель.', 'Die Firma bringt jedes Jahr ein neues Modell heraus.')
    ], ['ВЫпустить', 'HERAUSbringen'], ['out = вывести в свет.', 'out = an die Öffentlichkeit bringen.']),
    pv('bring down', 'down', 0, 'B2', 'снижать (цены); свергать', 'senken; stürzen', [
      ex('Competition has [[brought down]] the price of flights.', 'Конкуренция снизила цены на авиабилеты.', 'Der Wettbewerb hat die Flugpreise gesenkt.')
    ], ['С-низить', 'SENKEN'], ['down = вниз.', 'down = nach unten.']),
    pv('bring about', null, null, 'B2', 'вызывать, приводить к', 'herbeiführen, bewirken', [
      ex('The new manager [[brought about]] real change.', 'Новый руководитель добился настоящих перемен.', 'Die neue Chefin hat echte Veränderungen bewirkt.')
    ], ['вызвать, привести к', 'BEWIRKEN, herbeiführen'], null, { tr: 'opaque' })
  ]);

  /* ---------------- SET ---------------- */
  family('set', 'ставить, устанавливать', 'setzen, stellen, festlegen', [
    'Set — «привести в определённое положение»: set up (создать, настроить), set off (отправиться; запустить), set back (задержать). Неправильный: set — set — set.',
    'Set heißt „in eine Lage bringen“: set up (einrichten), set off (aufbrechen; auslösen), set back (zurückwerfen). Unregelmäßig: set — set — set.'
  ], [
    base('set', ['sets', 'set', 'set'], 'A2', 'ставить; устанавливать (цель, будильник)', 'stellen; festlegen', [
      ex('I [[set]] my alarm for six.', 'Я поставил будильник на шесть.', 'Ich habe den Wecker auf sechs gestellt.')
    ], ['Set a goal / a date / an alarm — поставить цель, назначить дату, завести будильник.', 'Set a goal / a date / an alarm — ein Ziel setzen, ein Datum festlegen, den Wecker stellen.']),
    pv('set up', 'up', 2, 'B1', 'настроить; основать; организовать', 'einrichten; gründen', [], ['НАстроить, ОСНОВать', 'EINrichten, gründen'], ['up = создать, привести в рабочее состояние.', 'up = etwas einrichten, startklar machen.']),
    pv('set off', 'off', 0, 'B1', 'отправиться в путь; запустить (сигнализацию)', 'aufbrechen; auslösen', [
      ex('We [[set off]] early to avoid the traffic.', 'Мы выехали рано, чтобы не попасть в пробки.', 'Wir sind früh aufgebrochen, um dem Verkehr zu entgehen.')
    ], ['ОТправиться', 'AUFbrechen, losfahren'], ['off = старт, отправление.', 'off = Start, Abfahrt.']),
    pv('set out', 'out', 0, 'B2', 'отправиться; изложить (чётко); намереваться (to do)', 'aufbrechen; darlegen; sich vornehmen', [
      ex('The report [[sets out]] three possible solutions.', 'В отчёте изложены три возможных решения.', 'Der Bericht legt drei mögliche Lösungen dar.')
    ], ['ИЗложить; ОТправиться', 'DARlegen; aufbrechen'], ['out = вынести наружу, разложить по пунктам.', 'out = nach außen legen, Punkt für Punkt darlegen.']),
    pv('set back', 'back', 1, 'B2', 'задерживать, отбрасывать назад', 'zurückwerfen, verzögern', [
      ex('The storm [[set]] the project [[back]] by two weeks.', 'Шторм задержал проект на две недели.', 'Der Sturm hat das Projekt um zwei Wochen zurückgeworfen.')
    ], ['ОТбросить назад, задержать', 'ZURÜCKwerfen'], ['back = отбросить назад во времени.', 'back = zeitlich zurückwerfen.']),
    pv('set in', 'in', 1, 'B2', 'наступать, начинаться (о плохой погоде, болезни, усталости)', 'einsetzen', [
      ex('Panic [[set in]] when the lights went out.', 'Когда погас свет, началась паника.', 'Als das Licht ausging, brach Panik aus.')
    ], ['НАступить', 'EINsetzen'], ['in = прийти и остаться.', 'in = hereinkommen und bleiben.']),
    noun('setback', 'B2', 'неудача, препятствие, задержка', 'Rückschlag', [
      ex('Losing the client was a serious [[setback]].', 'Потеря клиента стала серьёзным ударом.', 'Der Verlust des Kunden war ein schwerer Rückschlag.')
    ], ['Из set back. Немецкий Rückschlag — тот же образ «отбросить назад».', 'Aus set back. Deutsch Rückschlag — dasselbe Bild.'])
  ]);

  // Verb families come first in the Roots tab, before the word-building families.
  P.config.ROOT_PLAN = ORDER.concat(P.config.ROOT_PLAN.filter(function (id) { return ORDER.indexOf(id) < 0; }));
})();
