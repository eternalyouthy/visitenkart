/* ENGLISH verb families, batch 2: make, keep, run, break, carry, hold, pick, call, fall, let.
 * Also: particles "through" and "around", extra particle verbs for batch-1 families, and every particle page
 * collects its verbs automatically. Same conventions as data/en/verbs_families.js. Original examples.
 *   through: 0 from start to end · 1 get past a barrier / succeed
 *   around:  0 turning, circling · 1 moving about, without a fixed goal */
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
    words = words.filter(function (w) { return w && w.examples && w.examples.length; });
    GT.registerRoot({ id: id, verb: verb, t: verb, label: verb.toUpperCase(), ru: ru, de: de, note: { ru: note[0], de: note[1] },
      words: words, group: 'Verbs + particles', mapVerbs: true });
    ORDER.push(id);
  }
  /** Add words to a family registered earlier (batch 1). */
  function extend(id, words) {
    var r = P.roots[id];
    if (!r) return;
    words.forEach(function (w) {
      if (!w || !w.examples || !w.examples.length) return;
      if (!P.byId[w.id]) { w.type = 'word'; w.tab = 'roots'; w.topic = id; P.items.push(w); P.byId[w.id] = w; }
      w.rootId = w.rootId || id;
      GT.addMember(w.id, 'roots', id);
      if (r.ids.indexOf(w.id) < 0) r.ids.push(w.id);
    });
  }

  /* ---------------- new particles ---------------- */
  function M(ru, de, ruPrefix, dePrefix, examples) { return { ru: ru, de: de, ruPrefix: ruPrefix, dePrefix: dePrefix, examples: examples }; }
  function particle(id, label, ru, de, meanings, match) {
    GT.registerPrefix({ id: 'pv-' + id, label: '… ' + label, kind: 'particle', ru: ru, de: de, meanings: meanings, match: match });
    var plan = P.config.PREFIX_PLAN, at = plan.indexOf('pv-in');
    if (plan.indexOf('pv-' + id) < 0) plan.splice(at >= 0 ? at + 1 : plan.length, 0, 'pv-' + id);
  }
  particle('around', 'around', 'вокруг; по сторонам; без цели', 'herum, umher', [
    M('поворот, по кругу', 'Drehung, im Kreis', 'О-, ПО-', 'um-', []),
    M('туда-сюда, без определённой цели', 'umher, ohne festes Ziel', 'ПО-, О-', 'herum-', [])
  ], { ru: '<p><b>around</b> (брит. часто <b>round</b>) ≈ русское <b>о-</b> / <b>по-</b>: look around — осмотреться, оглядеться.</p>', de: '<p><b>around</b> (brit. oft <b>round</b>) ≈ deutsch <b>um-/herum-</b>: turn around — sich umdrehen, look around — sich umsehen.</p>' });
  particle('through', 'through', 'насквозь; от начала до конца', 'durch', [
    M('от начала до конца, полностью', 'von Anfang bis Ende', 'ПРО-, ПЕРЕ-', 'durch-', []),
    M('пройти препятствие, добиться', 'ein Hindernis überwinden, durchkommen', 'ПРО-, ПРОБ-', 'durch-', [])
  ], { ru: '<p><b>through</b> = русское <b>про-</b> в значении «насквозь»: go through — пройти, просмотреть; break through — прорваться.</p>', de: '<p><b>through</b> entspricht fast immer deutsch <b>durch-</b>: go through — durchgehen, break through — durchbrechen, get through — durchkommen.</p>' });

  /* ---------------- MAKE ---------------- */
  family('make', 'делать, производить', 'machen, herstellen', [
    'Make — «создавать, производить» (make a cake, make money), do — «выполнять» (do homework). Частицы: make up — придумать / помириться / составлять, make out — разобрать. Неправильный: make — made — made.',
    'Make heißt „herstellen, erschaffen“ (make a cake, make money), do heißt „erledigen“ (do homework). Partikeln: make up — erfinden / sich versöhnen / ausmachen, make out — erkennen. Unregelmäßig: make — made — made.'
  ], [
    base('make', ['makes', 'made', 'made'], 'A1', 'делать, производить; заставлять', 'machen, herstellen; bringen zu', [
      ex('This jacket is [[made]] from recycled bottles.', 'Эта куртка сделана из переработанных бутылок.', 'Diese Jacke ist aus recycelten Flaschen hergestellt.')
    ], ['Make someone do something — заставить: She made me laugh.', 'Make someone do something — jemanden zu etwas bringen: She made me laugh.']),
    pv('make up', 'up', 2, 'B1', 'выдумать; помириться (with); составлять (часть)', 'sich ausdenken; sich versöhnen; ausmachen (Anteil)', [
      ex('He [[made up]] an excuse about a broken alarm.', 'Он придумал отговорку про сломанный будильник.', 'Er hat sich eine Ausrede mit einem kaputten Wecker ausgedacht.'),
      ex('Women [[make up]] half of the team.', 'Женщины составляют половину команды.', 'Frauen machen die Hälfte des Teams aus.')
    ], ['ПРИдумать; помириться; СОставлять', 'sich AUSdenken; sich versöhnen; AUSmachen'], ['up = создать что-то: придумать историю.', 'up = etwas erschaffen: eine Geschichte erfinden.']),
    pv('make out', 'out', 1, 'B2', 'разобрать, различить; понять', 'erkennen, entziffern', [
      ex('I couldn’t [[make out]] the number in the dark.', 'В темноте я не смог разобрать номер.', 'Im Dunkeln konnte ich die Nummer nicht erkennen.')
    ], ['РАЗобрать, РАЗличить', 'erkennen, entziffern'], ['out = сделать видимым, понятным.', 'out = sichtbar, erkennbar machen.']),
    pv('make up for', 'up', null, 'B2', 'возмещать, компенсировать', 'wiedergutmachen, ausgleichen', [
      ex('I’ll work on Saturday to [[make up for]] the lost time.', 'Я поработаю в субботу, чтобы наверстать потерянное время.', 'Ich arbeite am Samstag, um die verlorene Zeit aufzuholen.')
    ], ['ВОЗместить, НАверстать', 'AUSgleichen, aufholen'], null, { tr: 'opaque' }),
    noun('makeup', 'A2', 'макияж, косметика', 'Make-up, Schminke', [
      ex('She never wears [[makeup]] at work.', 'На работе она никогда не красится.', 'Bei der Arbeit trägt sie nie Make-up.')
    ]),
    noun('makeover', 'B2', 'преображение, обновление (внешности, помещения)', 'Umgestaltung, Typveränderung', [
      ex('The old station got a complete [[makeover]].', 'Старый вокзал полностью преобразился.', 'Der alte Bahnhof wurde komplett umgestaltet.')
    ])
  ]);

  /* ---------------- KEEP ---------------- */
  family('keep', 'держать, хранить; продолжать', 'behalten, halten; weitermachen', [
    'Keep = «сохранять состояние». Keep + -ing = продолжать (keep trying). С частицами: keep on — продолжать, keep out — не пускать, keep away — держаться подальше. Неправильный: keep — kept — kept.',
    'Keep heißt „einen Zustand erhalten“. Keep + -ing = weiter tun (keep trying). Mit Partikeln: keep on — weitermachen, keep out — fernhalten, keep away — sich fernhalten. Unregelmäßig: keep — kept — kept.'
  ], [
    base('keep', ['keeps', 'kept', 'kept'], 'A2', 'держать, хранить, оставлять себе', 'behalten, aufbewahren', [
      ex('You can [[keep]] the book — I’ve got another copy.', 'Книгу можешь оставить себе — у меня есть ещё одна.', 'Du kannst das Buch behalten — ich habe noch ein Exemplar.')
    ]),
    pv('keep on', 'on', 1, 'B1', 'продолжать (делать)', 'weitermachen, immer wieder tun', [
      ex('The printer [[keeps on]] jamming.', 'Принтер постоянно зажёвывает бумагу.', 'Der Drucker hat ständig Papierstau.')
    ], ['ПРОдолжать', 'WEITERmachen'], ['on = продолжение действия.', 'on = Fortsetzung.'], { note: ['После keep on — форма на -ing.', 'Nach keep on folgt die -ing-Form.'] }),
    pv('keep up with', 'up', null, 'B1', 'успевать, не отставать', 'Schritt halten mit', [], ['не отставать', 'Schritt halten'], null),
    pv('keep out', 'out', 0, 'B1', 'не пускать; не входить', 'draußen bleiben; fernhalten', [
      ex('Danger! [[Keep out]]!', 'Опасно! Вход запрещён!', 'Gefahr! Betreten verboten!')
    ], ['не входить; не впускать', 'DRAUSSEN bleiben'], ['out = снаружи.', 'out = draußen.']),
    pv('keep away', 'away', 0, 'B1', 'держаться подальше; не подпускать', 'sich fernhalten; fernhalten', [
      ex('[[Keep]] the medicine [[away]] from children.', 'Храните лекарство в недоступном для детей месте.', 'Bewahren Sie das Medikament für Kinder unzugänglich auf.')
    ], ['держать в стороне', 'FERNhalten'], ['away = на расстоянии.', 'away = fern, auf Abstand.']),
    pv('keep down', 'down', 0, 'B2', 'сдерживать, не давать расти (о ценах, шуме)', 'niedrig halten', [
      ex('Please [[keep]] the noise [[down]] after ten.', 'Пожалуйста, не шумите после десяти.', 'Bitte seid nach zehn leise.')
    ], ['сдерживать, ПРИглушить', 'niedrig halten'], ['down = на низком уровне.', 'down = auf niedrigem Niveau.'])
  ]);

  /* ---------------- RUN ---------------- */
  family('run', 'бежать; управлять; работать (о машине)', 'laufen, rennen; leiten; laufen (Gerät)', [
    'Run — не только «бегать»: run a business — управлять делом, the app runs — приложение работает. Run out of — закончиться, run into — случайно встретить. Неправильный: run — ran — run.',
    'Run heißt nicht nur „rennen“: run a business — ein Geschäft führen, the app runs — die App läuft. Run out of — ausgehen, run into — zufällig treffen. Unregelmäßig: run — ran — run.'
  ], [
    base('run', ['runs', 'ran', 'run'], 'A1', 'бежать; управлять; работать (о программе)', 'rennen; leiten; laufen (Programm)', [
      ex('She [[runs]] a small bakery in the old town.', 'Она держит небольшую пекарню в старом городе.', 'Sie führt eine kleine Bäckerei in der Altstadt.')
    ]),
    pv('run out of', 'out', 2, 'B1', 'закончиться (о запасе)', 'ausgehen, knapp werden', [], ['ЗАкончиться', 'AUSgehen'], ['out = до конца, ничего не осталось.', 'out = bis zum Ende, nichts mehr übrig.']),
    pv('run into', null, null, 'B1', 'случайно встретить; столкнуться (с проблемой)', 'zufällig treffen; stoßen auf', [
      ex('I [[ran into]] my old teacher at the supermarket.', 'Я случайно встретил своего старого учителя в супермаркете.', 'Ich bin im Supermarkt zufällig meinem alten Lehrer begegnet.')
    ], ['наТКНУТЬся, встретить', 'zufällig treffen, stoßen auf'], null),
    pv('run away', 'away', 0, 'B1', 'убегать', 'weglaufen', [
      ex('The dog [[ran away]] when it heard the fireworks.', 'Собака убежала, услышав салют.', 'Der Hund ist weggelaufen, als er das Feuerwerk hörte.')
    ], ['У-бежать', 'WEGlaufen'], ['away = прочь.', 'away = weg.']),
    pv('run over', 'over', 0, 'B2', 'сбить, переехать (машиной)', 'überfahren', [
      ex('A cyclist was almost [[run over]] by a bus.', 'Велосипедиста чуть не сбил автобус.', 'Ein Radfahrer wurde fast von einem Bus überfahren.')
    ], ['ПЕРЕехать, сбить', 'ÜBERfahren'], ['over = через, поверх.', 'over = über etwas hinweg.']),
    pv('run up', 'up', 0, 'B2', 'накопить (долги, счёт)', 'auflaufen lassen (Schulden)', [
      ex('He [[ran up]] huge debts on his credit card.', 'Он набрал огромные долги по кредитной карте.', 'Er hat auf seiner Kreditkarte riesige Schulden angehäuft.')
    ], ['НАкопить', 'anhäufen'], ['up = рост, увеличение.', 'up = Anstieg.']),
    pv('run down', 'down', 0, 'B2', 'разряжаться, садиться (о батарее); измотать', 'leer werden (Akku); erschöpfen', [
      ex('The cold weather [[runs down]] the battery quickly.', 'В холод батарея быстро садится.', 'Bei Kälte wird der Akku schnell leer.')
    ], ['РАЗрядиться, С-адиться', 'LEER werden'], ['down = уменьшение до нуля.', 'down = Abnahme bis auf null.'])
  ]);

  /* ---------------- BREAK ---------------- */
  family('break', 'ломать, разбивать', 'brechen, kaputt machen', [
    'Break + частица описывает резкое изменение: break down — сломаться, break up — расстаться, break out — вспыхнуть, break through — прорваться. Существительные: breakdown, breakthrough, outbreak. Неправильный: break — broke — broken.',
    'Break + Partikel beschreibt eine plötzliche Veränderung: break down — kaputtgehen, break up — sich trennen, break out — ausbrechen, break through — durchbrechen. Nomen: breakdown, breakthrough, outbreak. Unregelmäßig: break — broke — broken.'
  ], [
    base('break', ['breaks', 'broke', 'broken'], 'A2', 'ломать, разбивать; нарушать', 'brechen, kaputt machen', [
      ex('Be careful not to [[break]] the glasses.', 'Осторожно, не разбей бокалы.', 'Pass auf, dass du die Gläser nicht zerbrichst.')
    ], ['Break a rule / a promise / a record — нарушить правило, не сдержать обещание, побить рекорд.', 'Break a rule / a promise / a record — eine Regel brechen, ein Versprechen brechen, einen Rekord brechen.']),
    pv('break down', 'down', null, 'B1', 'сломаться; не выдержать (эмоционально)', 'kaputtgehen; zusammenbrechen', [], ['С-ломаться', 'ZUSAMMENbrechen, kaputtgehen'], null),
    pv('break up', 'up', 3, 'B1', 'расстаться; распасться', 'sich trennen; auseinandergehen', [
      ex('They [[broke up]] after three years together.', 'Они расстались после трёх лет вместе.', 'Sie haben sich nach drei Jahren getrennt.')
    ], ['РАЗойтись, РАСстаться', 'sich trennen'], ['up = до конца: отношения закончились совсем.', 'up = endgültig: die Beziehung ist vorbei.']),
    pv('break into', null, null, 'B1', 'вломиться, взломать', 'einbrechen in', [
      ex('Someone [[broke into]] our car last night.', 'Прошлой ночью кто-то вскрыл нашу машину.', 'Letzte Nacht ist jemand in unser Auto eingebrochen.')
    ], ['ВЛОМиться, ВЗломать', 'EINbrechen'], null),
    pv('break out', 'out', 1, 'B2', 'вспыхнуть, разразиться (пожар, война, эпидемия); сбежать', 'ausbrechen', [
      ex('A fire [[broke out]] in the kitchen.', 'На кухне вспыхнул пожар.', 'In der Küche ist ein Feuer ausgebrochen.')
    ], ['ВСПЫХнуть; ВЫрваться', 'AUSbrechen'], ['out = внезапно появиться, вырваться наружу.', 'out = plötzlich herauskommen.']),
    pv('break off', 'off', 2, 'B2', 'прервать (переговоры, отношения); отломить', 'abbrechen', [
      ex('The two sides [[broke off]] the talks.', 'Стороны прервали переговоры.', 'Die beiden Seiten haben die Gespräche abgebrochen.')
    ], ['ПРЕрвать, ОТломить', 'ABbrechen'], ['off = прекратить, отделить.', 'off = beenden, abtrennen.']),
    pv('break through', 'through', 1, 'B2', 'прорваться, пробиться', 'durchbrechen', [
      ex('The sun finally [[broke through]] the clouds.', 'Солнце наконец пробилось сквозь облака.', 'Die Sonne brach endlich durch die Wolken.')
    ], ['ПРОрваться', 'DURCHbrechen'], ['through = сквозь препятствие.', 'through = durch ein Hindernis hindurch.']),
    noun('breakdown', 'B2', 'поломка; нервный срыв; разбивка (по пунктам)', 'Panne; Zusammenbruch; Aufschlüsselung', [
      ex('We had a [[breakdown]] on the motorway.', 'У нас сломалась машина на трассе.', 'Wir hatten eine Panne auf der Autobahn.')
    ]),
    noun('breakthrough', 'B2', 'прорыв', 'Durchbruch', [
      ex('The talks ended without a [[breakthrough]].', 'Переговоры закончились без прорыва.', 'Die Gespräche endeten ohne Durchbruch.')
    ]),
    noun('outbreak', 'B2', 'вспышка (болезни, насилия)', 'Ausbruch', [
      ex('There has been an [[outbreak]] of flu at the school.', 'В школе вспышка гриппа.', 'An der Schule gibt es einen Grippeausbruch.')
    ], ['Обратный порядок: break out → outbreak.', 'Umgekehrte Reihenfolge: break out → outbreak.'])
  ]);

  /* ---------------- CARRY ---------------- */
  family('carry', 'нести, носить', 'tragen', [
    'Carry — «нести с собой». Carry on — продолжать (брит.), carry out — выполнять. Неправильные формы нет: carried.',
    'Carry heißt „tragen, mit sich führen“. Carry on — weitermachen (brit.), carry out — durchführen. Regelmäßig: carried.'
  ], [
    base('carry', ['carries', 'carried', 'carried'], 'A2', 'нести, носить с собой', 'tragen, dabeihaben', [
      ex('I always [[carry]] an umbrella in my bag.', 'Я всегда ношу зонт в сумке.', 'Ich habe immer einen Schirm in der Tasche.')
    ]),
    pv('carry on', 'on', 1, 'B1', 'продолжать', 'weitermachen', [
      ex('[[Carry on]] — I didn’t mean to interrupt.', 'Продолжайте — я не хотел перебивать.', 'Machen Sie weiter — ich wollte nicht unterbrechen.')
    ], ['ПРОдолжать', 'WEITERmachen'], ['on = дальше.', 'on = weiter.']),
    pv('carry out', 'out', null, 'B1', 'выполнять, проводить', 'durchführen', [], ['ВЫполнить, ПРОвести', 'DURCHführen'], null),
    pv('carry away', 'away', 0, 'B2', 'увлечь, вскружить голову (be / get carried away)', 'mitreißen; sich hinreißen lassen', [
      ex('I got [[carried away]] and bought far too much.', 'Я увлёкся и накупил слишком много.', 'Ich habe mich hinreißen lassen und viel zu viel gekauft.')
    ], ['УВлечься', 'sich HINREISSEN lassen'], ['away = унести прочь (о чувствах).', 'away = (von Gefühlen) weggetragen werden.'], { tr: 'figurative' }),
    noun('carry-on', 'B2', 'ручная кладь', 'Handgepäck', [
      ex('Is this bag small enough for [[carry-on]]?', 'Эта сумка подходит для ручной клади?', 'Ist diese Tasche klein genug fürs Handgepäck?')
    ])
  ]);

  /* ---------------- HOLD ---------------- */
  family('hold', 'держать', 'halten', [
    'Hold — «держать». Hold on — подождать (по телефону), hold up — задержать, hold back — сдерживать. Неправильный: hold — held — held.',
    'Hold heißt „halten“. Hold on — warten (am Telefon), hold up — aufhalten, hold back — zurückhalten. Unregelmäßig: hold — held — held.'
  ], [
    base('hold', ['holds', 'held', 'held'], 'A2', 'держать; проводить (встречу)', 'halten; abhalten (Sitzung)', [
      ex('Could you [[hold]] my coffee for a second?', 'Подержишь мой кофе секундочку?', 'Kannst du kurz meinen Kaffee halten?')
    ], ['Hold a meeting — провести встречу.', 'Hold a meeting — eine Besprechung abhalten.']),
    pv('hold on', 'on', 1, 'B1', 'подождать; держаться', 'warten; sich festhalten', [
      ex('[[Hold on]], I’ll check if she’s in.', 'Подождите, я проверю, на месте ли она.', 'Bleiben Sie dran, ich schaue, ob sie da ist.')
    ], ['ПОдождать', 'DRANbleiben, warten'], ['on = продолжать (линию, ожидание).', 'on = weiter (am Apparat) bleiben.']),
    pv('hold up', 'up', null, 'B2', 'задерживать; (о деле) держаться', 'aufhalten; standhalten', [
      ex('Sorry I’m late — I was [[held up]] at work.', 'Прости за опоздание — задержался на работе.', 'Entschuldige die Verspätung — ich wurde bei der Arbeit aufgehalten.')
    ], ['ЗАдержать', 'AUFhalten'], null),
    pv('hold back', 'back', 1, 'B2', 'сдерживать; утаивать', 'zurückhalten', [
      ex('She couldn’t [[hold back]] her tears.', 'Она не смогла сдержать слёз.', 'Sie konnte ihre Tränen nicht zurückhalten.')
    ], ['С-держать', 'ZURÜCKhalten'], ['back = удержать позади, не пустить.', 'back = zurück, nicht herauslassen.']),
    pv('hold off', 'off', 2, 'B2', 'откладывать, повременить', 'abwarten, aufschieben', [
      ex('Let’s [[hold off]] on the decision until Monday.', 'Давайте отложим решение до понедельника.', 'Lass uns mit der Entscheidung bis Montag warten.')
    ], ['ОТложить, повременить', 'AUFschieben'], ['off = отодвинуть во времени.', 'off = zeitlich wegschieben.'])
  ]);

  /* ---------------- PICK ---------------- */
  family('pick', 'выбирать; собирать', 'aussuchen; pflücken', [
    'Pick up — одна из самых частых английских связок: поднять, забрать, подцепить (язык, привычку), ответить по телефону.',
    'Pick up gehört zu den häufigsten Verbindungen: aufheben, abholen, aufschnappen (Sprache), ans Telefon gehen.'
  ], [
    base('pick', ['picks', 'picked', 'picked'], 'A2', 'выбирать; собирать (ягоды, цветы)', 'aussuchen; pflücken', [
      ex('[[Pick]] a card, any card.', 'Выбери карту, любую.', 'Zieh eine Karte, egal welche.')
    ]),
    pv('pick up', 'up', 0, 'A2', 'поднять; забрать; подхватить (язык); ответить (по телефону)', 'aufheben; abholen; aufschnappen', [
      ex('Can you [[pick]] me [[up]] from the station?', 'Заберёшь меня с вокзала?', 'Kannst du mich vom Bahnhof abholen?'),
      ex('I [[picked up]] some Spanish while travelling.', 'Я нахватался испанского, пока путешествовал.', 'Ich habe beim Reisen etwas Spanisch aufgeschnappt.')
    ], ['ПОДнять; ЗАбрать', 'AUFheben; ABholen'], ['up = вверх: поднять с земли.', 'up = nach oben: vom Boden aufheben.']),
    pv('pick out', 'out', 0, 'B1', 'выбрать, отобрать', 'aussuchen, heraussuchen', [
      ex('She [[picked out]] a dress for the wedding.', 'Она выбрала платье на свадьбу.', 'Sie hat ein Kleid für die Hochzeit ausgesucht.')
    ], ['ВЫбрать', 'AUSsuchen'], ['out = вынуть одно из многих.', 'out = eins aus vielen herausnehmen.']),
    pv('pick on', null, null, 'B2', 'придираться, задирать', 'herumhacken auf, schikanieren', [
      ex('Stop [[picking on]] your little brother!', 'Хватит задирать младшего брата!', 'Hör auf, auf deinem kleinen Bruder herumzuhacken!')
    ], ['ПРИдираться', 'herumhacken auf'], null, { tr: 'opaque' })
  ]);

  /* ---------------- CALL ---------------- */
  family('call', 'звать; звонить', 'rufen; anrufen', [
    'Call + частица: call back — перезвонить, call off — отменить, call in — вызвать (специалиста), call out — выкрикнуть / открыто критиковать.',
    'Call + Partikel: call back — zurückrufen, call off — absagen, call in — hinzuziehen, call out — ausrufen / öffentlich kritisieren.'
  ], [
    base('call', ['calls', 'called', 'called'], 'A1', 'звонить; звать; называть', 'anrufen; rufen; nennen', [
      ex('I’ll [[call]] you when I land.', 'Позвоню, когда приземлюсь.', 'Ich rufe dich an, wenn ich gelandet bin.')
    ]),
    pv('call back', 'back', 0, 'A2', 'перезвонить', 'zurückrufen', [
      ex('She’s in a meeting — can she [[call]] you [[back]]?', 'Она на встрече — может она вам перезвонить?', 'Sie ist in einer Besprechung — kann sie Sie zurückrufen?')
    ], ['ПЕРЕзвонить', 'ZURÜCKrufen'], ['back = в ответ, обратно.', 'back = zurück, als Antwort.']),
    pv('call off', 'off', 2, 'B1', 'отменить', 'absagen', [
      ex('The match was [[called off]] because of the storm.', 'Матч отменили из-за шторма.', 'Das Spiel wurde wegen des Sturms abgesagt.')
    ], ['ОТменить', 'ABsagen'], ['off = отмена.', 'off = Absage.']),
    pv('call in', 'in', 1, 'B2', 'вызвать (специалиста); позвонить (сказать, что болен — call in sick)', 'hinzuziehen; sich krankmelden', [
      ex('The company [[called in]] an expert to check the system.', 'Компания пригласила эксперта, чтобы проверить систему.', 'Die Firma hat einen Experten hinzugezogen, um das System zu prüfen.')
    ], ['ВЫзвать, приГЛАСить', 'HINZUziehen'], ['in = привлечь внутрь, в дело.', 'in = in eine Sache hineinholen.']),
    pv('call out', 'out', 1, 'B2', 'выкрикнуть; публично указать на (ошибку, поведение)', 'ausrufen; öffentlich anprangern', [
      ex('She [[called out]] the mistake in the meeting.', 'Она открыто указала на ошибку на встрече.', 'Sie hat den Fehler in der Besprechung offen angesprochen.')
    ], ['ВЫкрикнуть; указать', 'AUSrufen; ansprechen'], ['out = вслух, открыто.', 'out = laut, öffentlich.'])
  ]);

  /* ---------------- FALL ---------------- */
  family('fall', 'падать', 'fallen', [
    'Fall + частица: fall down — упасть, fall behind — отстать, fall apart — развалиться, fall out (with) — поссориться, fall through — сорваться (о планах). Неправильный: fall — fell — fallen.',
    'Fall + Partikel: fall down — hinfallen, fall behind — zurückfallen, fall apart — auseinanderfallen, fall out (with) — sich zerstreiten, fall through — platzen (Pläne). Unregelmäßig: fall — fell — fallen.'
  ], [
    base('fall', ['falls', 'fell', 'fallen'], 'A2', 'падать; снижаться', 'fallen; sinken', [
      ex('Prices [[fell]] by five per cent.', 'Цены упали на пять процентов.', 'Die Preise sind um fünf Prozent gefallen.')
    ]),
    pv('fall down', 'down', 0, 'A2', 'упасть', 'hinfallen, umfallen', [
      ex('He slipped on the ice and [[fell down]].', 'Он поскользнулся на льду и упал.', 'Er ist auf dem Eis ausgerutscht und hingefallen.')
    ], ['У-пасть', 'HINfallen'], ['down = вниз.', 'down = nach unten.']),
    pv('fall behind', null, null, 'B1', 'отставать', 'zurückfallen, in Rückstand geraten', [
      ex('I [[fell behind]] with my rent when I lost my job.', 'Когда я потерял работу, я задолжал за квартиру.', 'Als ich meinen Job verlor, geriet ich mit der Miete in Rückstand.')
    ], ['ОТстать', 'zurückfallen'], null),
    pv('fall apart', null, null, 'B1', 'развалиться', 'auseinanderfallen', [
      ex('My old shoes are [[falling apart]].', 'Мои старые ботинки разваливаются.', 'Meine alten Schuhe fallen auseinander.')
    ], ['РАЗвалиться', 'AUSEINANDERfallen'], null),
    pv('fall out', 'out', 0, 'B2', 'поссориться (with); выпадать (о волосах, зубах)', 'sich zerstreiten; ausfallen (Haare)', [
      ex('He [[fell out]] with his brother over money.', 'Он поссорился с братом из-за денег.', 'Er hat sich mit seinem Bruder wegen Geld zerstritten.')
    ], ['РАЗругаться; ВЫпадать', 'sich ZERstreiten; AUSfallen'], ['out = выпасть из круга, из отношений.', 'out = aus einer Beziehung herausfallen.'], { tr: 'figurative' }),
    pv('fall through', 'through', null, 'B2', 'сорваться, не состояться (о планах, сделке)', 'platzen, scheitern', [
      ex('The deal [[fell through]] at the last minute.', 'Сделка сорвалась в последнюю минуту.', 'Der Deal ist in letzter Minute geplatzt.')
    ], ['СОРваться', 'PLATZEN'], null, { tr: 'opaque' }),
    noun('downfall', 'B2', 'падение, крах; причина краха', 'Untergang, Sturz', [
      ex('Greed was his [[downfall]].', 'Жадность его и погубила.', 'Die Gier war sein Untergang.')
    ])
  ]);

  /* ---------------- LET ---------------- */
  family('let', 'позволять, пускать', 'lassen', [
    'Let = немецкое lassen: let me know — дай знать (lass mich wissen). Let down — подвести, let in — впустить, let out — выпустить. Неправильный: let — let — let.',
    'Let entspricht deutsch lassen: let me know — lass mich wissen. Let down — enttäuschen, im Stich lassen, let in — hereinlassen, let out — herauslassen. Unregelmäßig: let — let — let.'
  ], [
    base('let', ['lets', 'let', 'let'], 'A2', 'позволять, разрешать; сдавать (жильё, брит.)', 'lassen, erlauben; vermieten (brit.)', [
      ex('My parents didn’t [[let]] me go to the festival.', 'Родители не пустили меня на фестиваль.', 'Meine Eltern haben mich nicht aufs Festival gelassen.')
    ], ['После let — инфинитив без to: let me go.', 'Nach let folgt der Infinitiv ohne to: let me go.']),
    pv('let down', 'down', 1, 'B1', 'подвести, разочаровать', 'enttäuschen, im Stich lassen', [
      ex('I promised to help, and I won’t [[let]] you [[down]].', 'Я обещал помочь и не подведу тебя.', 'Ich habe versprochen zu helfen, und ich lasse dich nicht im Stich.')
    ], ['ПОДвести', 'im Stich lassen, ENTtäuschen'], ['down = «опустить» ожидания — разочаровать.', 'down = Erwartungen „sinken lassen“.'], { tr: 'figurative' }),
    pv('let in', 'in', 0, 'B1', 'впустить', 'hereinlassen', [
      ex('Could you [[let]] the cat [[in]]?', 'Впусти, пожалуйста, кошку.', 'Kannst du die Katze reinlassen?')
    ], ['ВПУстить', 'HEREINlassen'], ['in = внутрь.', 'in = hinein.']),
    pv('let out', 'out', 0, 'B1', 'выпустить', 'herauslassen', [
      ex('Don’t [[let]] the dog [[out]] without a lead.', 'Не выпускай собаку без поводка.', 'Lass den Hund nicht ohne Leine raus.')
    ], ['ВЫпустить', 'HERAUSlassen'], ['out = наружу.', 'out = hinaus.']),
    pv('let off', 'off', null, 'B2', 'отпустить без наказания; запустить (фейерверк)', 'davonkommen lassen; abfeuern', [
      ex('The police [[let]] him [[off]] with a warning.', 'Полиция отпустила его с предупреждением.', 'Die Polizei ließ ihn mit einer Verwarnung davonkommen.')
    ], ['ОТпустить', 'davonkommen lassen'], null, { tr: 'opaque' }),
    noun('letdown', 'B2', 'разочарование', 'Enttäuschung', [
      ex('After all the hype, the film was a real [[letdown]].', 'После всей шумихи фильм оказался настоящим разочарованием.', 'Nach dem ganzen Hype war der Film eine echte Enttäuschung.')
    ])
  ]);

  /* ---------------- extra particle verbs for batch-1 families ---------------- */
  extend('vf-go', [
    pv('go through', 'through', 0, 'B1', 'пройти через; просмотреть; пережить (трудное)', 'durchgehen; durchmachen', [
      ex('Let’s [[go through]] the contract line by line.', 'Давайте пройдёмся по договору построчно.', 'Lass uns den Vertrag Zeile für Zeile durchgehen.'),
      ex('She [[went through]] a difficult time last year.', 'В прошлом году ей пришлось нелегко.', 'Sie hat letztes Jahr eine schwere Zeit durchgemacht.')
    ], ['ПРОйти; ПЕРЕжить', 'DURCHgehen; DURCHmachen'], ['through = от начала до конца.', 'through = von Anfang bis Ende.'])
  ]);
  extend('vf-look', [
    pv('look around', 'around', 1, 'A2', 'осматриваться, оглядеться; посмотреть (в магазине)', 'sich umsehen', [
      ex('We’re just [[looking around]], thanks.', 'Мы просто смотрим, спасибо.', 'Wir sehen uns nur um, danke.')
    ], ['ОСмотреться, О-глядеться', 'sich UMsehen'], ['around = по сторонам, без конкретной цели.', 'around = ringsum, ohne festes Ziel.']),
    pv('look through', 'through', 0, 'B1', 'просмотреть, пролистать', 'durchsehen, durchblättern', [
      ex('I [[looked through]] my notes before the exam.', 'Я просмотрел конспекты перед экзаменом.', 'Ich habe vor der Prüfung meine Notizen durchgesehen.')
    ], ['ПРОсмотреть', 'DURCHsehen'], ['through = от начала до конца.', 'through = von Anfang bis Ende.'])
  ]);
  extend('vf-get', [
    pv('get through', 'through', 1, 'B1', 'дозвониться; пережить, справиться', 'durchkommen; überstehen', [
      ex('I tried to call the bank but couldn’t [[get through]].', 'Я пытался позвонить в банк, но не смог дозвониться.', 'Ich habe versucht, die Bank anzurufen, bin aber nicht durchgekommen.')
    ], ['ДОзвониться; ПЕРЕжить', 'DURCHkommen'], ['through = пробиться через препятствие.', 'through = durch ein Hindernis kommen.'])
  ]);
  extend('vf-turn', [
    pv('turn around', 'around', 0, 'A2', 'обернуться, развернуться', 'sich umdrehen, umkehren', [
      ex('When I called her name, she [[turned around]].', 'Когда я её окликнул, она обернулась.', 'Als ich ihren Namen rief, drehte sie sich um.')
    ], ['О-бернуться, РАЗвернуться', 'sich UMdrehen'], ['around = поворот на 180°.', 'around = Drehung um 180°.'])
  ]);
  extend('vf-come', [
    pv('come around', 'around', 0, 'B2', 'прийти в себя; передумать (в итоге согласиться); зайти в гости', 'zu sich kommen; umdenken; vorbeikommen', [
      ex('He didn’t like the idea at first, but he’ll [[come around]].', 'Сначала идея ему не понравилась, но он передумает.', 'Anfangs gefiel ihm die Idee nicht, aber er wird schon umdenken.')
    ], ['ПЕРЕдумать', 'UMdenken'], ['around = развернуться (мнением) в другую сторону.', 'around = (die Meinung) umdrehen.'], { tr: 'figurative' })
  ]);

  extend('vf-set', [
    pv("set aside", null, null, "B1", "откладывать для определённой цели", "für einen bestimmten Zweck zurücklegen", [
      ex("We [[set aside]] a little money each month for repairs.", "Мы каждый месяц откладываем немного денег на ремонт.", "Wir legen jeden Monat etwas Geld für Reparaturen zurück.")
    ], null, null, { tr: 'figurative' })
  ]);

  extend('vf-keep', [
    pv("keep back", "back", null, "B1", "держаться на расстоянии", "Abstand halten", [
      ex("Please [[keep back]] from the platform edge.", "Пожалуйста, отойдите от края платформы.", "Bitte halten Sie Abstand von der Bahnsteigkante.")
    ], null, null, { tr: 'transparent' })
  ]);

  extend('vf-hold', [
    pv("hold out", "out", null, "B1", "протягивать что-либо", "etwas hinhalten", [
      ex("She [[held out]] her hand so I could see the ring.", "Она протянула руку, чтобы я мог рассмотреть кольцо.", "Sie hielt mir die Hand hin, damit ich den Ring sehen konnte.")
    ], null, null, { tr: 'transparent' }),
    pv("hold together", null, null, "B1", "скреплять, удерживать части вместе", "zusammenhalten", [
      ex("These two screws [[hold]] the frame [[together]].", "Эти два винта скрепляют раму.", "Diese beiden Schrauben halten den Rahmen zusammen.")
    ], null, null, { tr: 'transparent' })
  ]);

  extend('vf-call', [
    pv("call up", "up", null, "B1", "вызывать на экран", "auf dem Bildschirm aufrufen", [
      ex("Can you [[call up]] the timetable on your phone?", "Можешь открыть расписание на телефоне?", "Kannst du den Fahrplan auf deinem Handy aufrufen?")
    ], null, null, { tr: 'figurative' }),
    pv("call for", null, null, "B2", "требовать, делать необходимым", "erfordern", [
      ex("A change this big [[calls for]] a new timetable.", "Такая серьёзная перемена требует нового расписания.", "Eine so große Änderung erfordert einen neuen Zeitplan.")
    ], null, null, { tr: 'figurative' })
  ]);

  extend('vf-fall', [
    pv("fall over", "over", null, "A2", "падать, опрокидываться", "umfallen", [
      ex("The empty bin [[fell over]] in the wind.", "Пустой мусорный бак опрокинулся от ветра.", "Die leere Mülltonne fiel im Wind um.")
    ], null, null, { tr: 'transparent' })
  ]);

  extend('vf-carry', [
    pv("carry over", "over", null, "B2", "переносить остаток на следующий период", "auf den nächsten Zeitraum übertragen", [
      ex("We can [[carry over]] five days of leave to next year.", "Мы можем перенести пять дней отпуска на следующий год.", "Wir können fünf Urlaubstage ins nächste Jahr übertragen.")
    ], null, null, { tr: 'figurative' }),
    pv("carry through", "through", null, "B2", "доводить задуманное до конца", "ein Vorhaben zu Ende führen", [
      ex("She had a good plan and [[carried]] it [[through]].", "У неё был хороший план, и она довела его до конца.", "Sie hatte einen guten Plan und führte ihn zu Ende.")
    ], null, null, { tr: 'figurative' }),
    pv("carry around", "around", null, "A2", "носить с собой", "mit sich herumtragen", [
      ex("I used to [[carry]] this notebook [[around]] everywhere.", "Раньше я повсюду носил с собой этот блокнот.", "Früher trug ich dieses Notizbuch überall mit mir herum.")
    ], null, null, { tr: 'transparent' })
  ]);

  extend('vf-let', [
    pv("let up", "up", null, "B2", "ослабевать, стихать", "nachlassen", [
      ex("The rain finally [[let up]], so we walked home.", "Дождь наконец ослаб, и мы пошли домой пешком.", "Der Regen ließ endlich nach, also gingen wir zu Fuß nach Hause.")
    ], null, null, { tr: 'figurative' }),
    pv("let through", "through", null, "B1", "пропускать, давать пройти", "durchlassen", [
      ex("The steward checked our tickets and [[let]] us [[through]].", "Контролёр проверил наши билеты и пропустил нас.", "Der Ordner prüfte unsere Karten und ließ uns durch.")
    ], null, null, { tr: 'transparent' })
  ]);
  /* ---------------- every particle page lists its verbs ---------------- */
  P.items.forEach(function (w) {
    if (!w.particle || !w.prefixDrill || !P.prefixes[w.prefix]) return;
    var m = P.prefixes[w.prefix].meanings[w.prefixDrill.meaning];
    if (!m || m.examples.some(function (e) { return e.t === w.t; })) return;
    var first = function (s) { return String(s || '').split(';')[0].trim(); };
    m.examples.push(ex(w.t, first(w.ru), first(w.de)));
  });

  P.config.ROOT_PLAN = P.config.ROOT_PLAN.filter(function (id) { return /^vf-/.test(id) && ORDER.indexOf(id) < 0; })
    .concat(ORDER, P.config.ROOT_PLAN.filter(function (id) { return !/^vf-/.test(id); }));
})();

/* === Content expansion 2026-11-27 (6 EN phrasal verb families + 4 word-building families) === */
(function () {
  'use strict';
  var P = GT.packs.en, NEW_ORDER = [];
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function existing(t) { return P.items.filter(function (x) { return x.t === t; })[0] || null; }
  function base(verb, forms, level, ru, de, examples, note) {
    var exst = existing(verb);
    if (exst) return exst;
    return { id: 'en:x27:vf:' + verb, base: true, core: true, pos: 'verb', t: verb, level: level, learnable: true,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, de: de, examples: examples,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function pv(t, pfx, m, level, ru, de, examples, par, expl, opts) {
    opts = opts || {};
    var exst = existing(t);
    if (exst) return exst;
    var w = { id: 'en:x27:vf:' + t.replace(/ /g, '-'), t: t, pos: 'phrasal verb', level: level, ru: ru, de: de, examples: examples, learnable: true };
    if (pfx) { w.prefix = 'pv-' + pfx; w.particle = true; }
    w.core = opts.core !== false;
    w.transparency = opts.tr || (pfx ? 'transparent' : 'figurative');
    if (par) w.parallel = { ru: par[0], de: par[1] };
    if (pfx && expl && m != null) w.prefixDrill = { ex: 0, meaning: m, explain: { ru: expl[0], de: expl[1] } };
    if (opts.note) w.note = { ru: opts.note[0], de: opts.note[1] };
    return w;
  }
  function word(id, pos, t, level, ru, de, examples, opts) {
    var exst = existing(t);
    if (exst) return exst;
    opts = opts || {};
    var o = { id: 'en:x27:fam:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: examples, learnable: true };
    if (opts.base) o.base = true;
    if (opts.core !== false) o.core = true;
    if (opts.plural) o.plural = opts.plural;
    return o;
  }
  function family(verb, ru, de, note, words) {
    var id = 'vf-' + verb;
    words = words.filter(Boolean);
    GT.registerRoot({ id: id, verb: verb, t: verb, label: verb.toUpperCase(), ru: ru, de: de, note: { ru: note[0], de: note[1] },
      words: words, group: 'Verbs + particles', mapVerbs: true });
    NEW_ORDER.push(id);
  }
  function wbFamily(id, baseWord, ru, de, note, words) {
    words = words.filter(Boolean);
    GT.registerRoot({ id: id, verb: baseWord, t: baseWord, label: baseWord.toUpperCase(), ru: ru, de: de, note: { ru: note[0], de: note[1] },
      words: words, group: 'Word-building families', mapVerbs: false });
    NEW_ORDER.push(id);
  }

  /* 1. WORK */
  family('work', 'работать', 'arbeiten', [
    'Правильный глагол: work — worked — worked. С частицами охватывает тренировки, налаживание и постепенную проработку: work out, work on, work through, work up.',
    'Regelmäßiges Verb: work — worked — worked. Mit Partikeln für Training, Feinschliff und Durcharbeiten: work out, work on, work through, work up.'
  ], [
    base('work', ['works', 'worked', 'worked'], 'A1', 'работать; функционировать', 'arbeiten; funktionieren', [
      ex('Does the new card reader [[work]] offline as well?', 'Новый считыватель карт работает и без сети?', 'Funktioniert das neue Kartenlesegerät auch offline?')
    ]),
    pv('work on', 'on', null, 'B1', 'работать над (улучшением), дорабатывать', 'arbeiten an, feilen an', [
      ex('We are still [[working on]] a clearer onboarding checklist.', 'Мы всё ещё работаем над более понятным чек-листом адаптации.', 'Wir arbeiten noch an einer klareren Einarbeitungs-Checkliste.')
    ], ['работать НАД', 'arbeiten AN']),
    pv('work through', 'through', 0, 'B2', 'последовательно проработать, разобрать до конца', 'durcharbeiten, bewältigen', [
      ex('Let’s [[work through]] the audit comments item by item.', 'Давай последовательно разберём замечания аудита пункт за пунктом.', 'Lass uns die Audit-Hinweise Punkt für Punkt durcharbeiten.')
    ], ['ПРОработать насквозь', 'DURCHarbeiten']),
    pv('work off', 'off', null, 'B2', 'сбросить (стресс, лишнее), отработать', 'abarbeiten, abbauen (Stress)', [
      ex('She went for a brisk walk to [[work off]] the stress after the call.', 'Она вышла на быструю прогулку, чтобы сбросить стресс после звонка.', 'Sie ging zügig spazieren, um den Stress nach dem Anruf abzubauen.')
    ], ['Сбросить', 'ABbauen']),
    pv('work up', 'up', null, 'B2', 'наработать (аппетит), подготовить; (get worked up) разволноваться', 'aufbauen (Appetit); sich aufregen', [
      ex('The team [[worked up]] three rough prototypes in two days.', 'Команда подготовила три черновых прототипа за два дня.', 'Das Team erarbeitete in zwei Tagen drei grobe Prototypen.')
    ], ['НАработать', 'er-arbeiten'], null, { tr: 'figurative' }),
    pv('work around', 'around', null, 'B2', 'обойти (ограничение, проблему)', 'umgehen (ein Hindernis)', [
      ex('Until the patch arrives, we can [[work around]] the limit manually.', 'Пока не вышел патч, мы можем обойти это ограничение вручную.', 'Bis der Patch eintrifft, können wir die Begrenzung manuell umgehen.')
    ], ['Обойти', 'UMgehen']),
    existing('work out'),
    word('workout', 'noun', 'workout', 'B1', 'тренировка', 'das Training, Workout', [
      ex('A short morning [[workout]] helps him focus during long meetings.', 'Короткая утренняя тренировка помогает ему сосредоточиться на долгих встречах.', 'Ein kurzes Morgen-Training hilft ihm, sich in langen Meetings zu konzentrieren.')
    ], { plural: 'workouts' })
  ]);

  /* 2. CUT */
  family('cut', 'резать; сокращать', 'schneiden; kürzen', [
    'Неправильный глагол: cut — cut — cut. Очень продуктивен для деловой и бытовой речи: cut down (сократить), cut off (отрезать/прервать), cut out (вырезать/убрать), cut back (урезать бюджет).',
    'Unregelmäßiges Verb: cut — cut — cut. Häufig in Alltag und Beruf: cut down (reduzieren), cut off (abschneiden), cut out (streichen), cut back (kürzen).'
  ], [
    base('cut', ['cuts', 'cut', 'cut'], 'A1', 'резать; сокращать', 'schneiden; kürzen', [
      ex('Please [[cut]] the tape carefully so you don’t scratch the frame.', 'Пожалуйста, аккуратно разрежь скотч, чтобы не поцарапать раму.', 'Bitte schneide das Klebeband vorsichtig auf, um den Rahmen nicht zu zerkratzen.')
    ]),
    pv('cut off', 'off', 0, 'B1', 'отрезать, отключать (связь, воду); прерывать собеседника', 'abschneiden, unterbrechen, abstellen', [
      ex('Sorry, the tunnel [[cut]] us [[off]] — could you repeat that last sentence?', 'Извини, в тоннеле прервалась связь — повтори последнюю фразу?', 'Entschuldigung, der Tunnel hat uns unterbrochen — kannst du den letzten Satz wiederholen?')
    ], ['ОТрезать', 'ABschneiden']),
    pv('cut down', 'down', 0, 'B2', 'сокращать, урезать (расходы, потребление)', 'reduzieren, senken', [
      ex('Switching to LED bulbs helped [[cut down]] electricity bills.', 'Переход на светодиодные лампы помог сократить счета за электричество.', 'Der Umstieg auf LED-Lampen half, die Stromrechnung zu senken.')
    ], ['Урезать', 'herunterkürzen']),
    pv('cut out', 'out', 0, 'B1', 'вырезать; исключить, убрать (из рациона, текста)', 'ausschneiden; weglassen, streichen', [
      ex('Let’s [[cut out]] the repetition in the second paragraph.', 'Давай уберём повтор во втором абзаце.', 'Lass uns die Wiederholung im zweiten Absatz streichen.')
    ], ['ВЫрезать', 'AUSschneiden']),
    pv('cut back', 'back', null, 'B2', 'сокращать (бюджет, штат, расходы)', 'kürzen, zurückfahren', [
      ex('During the winter slump, the café had to [[cut back]] on evening shifts.', 'Во время зимнего спада кафе пришлось сократить вечерние смены.', 'In der Winterflaute musste das Café die Abendschichten zurückfahren.')
    ], ['урезать', 'zurückfahren']),
    pv('cut in', 'in', null, 'B2', 'вклиниваться, перебивать (в разговоре или на дороге)', 'unterbrechen; einscheren', [
      ex('A delivery van [[cut in]] sharply right in front of the bus.', 'Фургон доставки резко подрезал прямо перед автобусом.', 'Ein Lieferwagen scherte scharf direkt vor dem Bus ein.')
    ], ['Вклиниться', 'dazwischengehen'], null, { tr: 'figurative' }),
    pv('cut across', null, null, 'C1', 'сокращать путь напрямую; затрагивать разные группы', 'abkürzen; übergreifen auf', [
      ex('Data protection rules [[cut across]] almost every department.', 'Правила защиты данных затрагивают почти каждый отдел.', 'Datenschutzregeln betreffen fast jede Abteilung.')
    ], null, null, { core: false, tr: 'figurative' }),
    word('cutback', 'noun', 'cutback', 'B2', 'сокращение, урезание (расходов)', 'die Kürzung, Einsparung', [
      ex('Budget [[cutbacks]] delayed the office renovation until autumn.', 'Урезание бюджета отложило ремонт офиса до осени.', 'Budgetkürzungen verschoben die Bürorenovierung bis zum Herbst.')
    ], { plural: 'cutbacks' })
  ]);

  /* 3. PULL */
  family('pull', 'тянуть', 'ziehen', [
    'Правильный глагол: pull — pulled — pulled. С частицами: pull off (провернуть/справиться), pull out (выйти из сделки/вытащить), pull over (прижаться к обочине), pull through (выкарабкаться).',
    'Regelmäßiges Verb: pull — pulled — pulled. Mit Partikeln: pull off (schaffen), pull out (aussteigen), pull over (rechts ranfahren), pull through (durchkommen).'
  ], [
    base('pull', ['pulls', 'pulled', 'pulled'], 'A1', 'тянуть, тащить', 'ziehen', [
      ex('[[Pull]] the handle firmly towards you to open the side door.', 'Потяни ручку уверенно на себя, чтобы открыть боковую дверь.', 'Ziehe den Griff fest zu dir, um die Seitentür zu öffnen.')
    ]),
    pv('pull off', 'off', null, 'B2', 'провернуть, успешно справиться с трудным делом', 'etwas Schwieriges schaffen', [
      ex('I didn’t think we could migrate the database overnight, yet the team [[pulled]] it [[off]].', 'Я не думал, что мы перенесём базу за ночь, но команда справилась.', 'Ich hätte nicht gedacht, dass wir die Datenbank über Nacht umziehen, aber das Team hat es geschafft.')
    ], null, null, { tr: 'figurative' }),
    pv('pull out', 'out', 0, 'B2', 'вытащить; выйти из проекта/сделки', 'herausziehen; aussteigen', [
      ex('One investor decided to [[pull out]] two days before signing.', 'Один инвестор решил выйти из сделки за два дня до подписания.', 'Ein Investor entschied sich zwei Tage vor der Unterschrift auszusteigen.')
    ], ['ВЫтянуть; выйти', 'herausziehen; aussteigen']),
    pv('pull over', 'over', null, 'B1', 'съехать на обочину, припарковаться у края дороги', 'rechts ranfahren', [
      ex('When a warning light flashed, the driver [[pulled over]] safely.', 'Когда замигал предупреждающий сигнал, водитель аккуратно съехал на обочину.', 'Als eine Warnleuchte blinkte, fuhr der Fahrer sicher rechts ran.')
    ], null, null, { tr: 'figurative' }),
    pv('pull through', 'through', null, 'B2', 'выкарабкаться, пережить трудный период/болезнь', 'durchkommen, überstehen', [
      ex('With careful rehab after the accident, he [[pulled through]] well.', 'Благодаря аккуратной реабилитации после аварии он хорошо поправился.', 'Mit sorgfältiger Reha nach dem Unfall kam er gut durch.')
    ], ['ПРОтянуть/выстоять', 'durchkommen'], null, { tr: 'figurative' }),
    pv('pull back', 'back', 0, 'B2', 'отступить, оттянуть назад; свернуть планы', 'zurückziehen; zurückweichen', [
      ex('The firm [[pulled back]] from the new market after high customs fees.', 'Фирма отступила с нового рынка из-за высоких таможенных пошлин.', 'Die Firma zog sich nach hohen Zollgebühren aus dem neuen Markt zurück.')
    ], ['ОТтянуть назад', 'ZURÜCKziehen']),
    pv('pull up', 'up', null, 'B1', 'подъехать и остановиться; подтянуть вверх', 'vorfahren und anhalten; hochziehen', [
      ex('A taxi [[pulled up]] outside the station entrance right on time.', 'Такси подъехало ко входу на вокзал ровно вовремя.', 'Ein Taxi fuhr pünktlich vor dem Bahnhofseingang vor.')
    ], ['ПОДъехать', 'vorfahren']),
    pv('pull together', null, null, 'B2', 'собраться с силами; сработать слаженно', 'sich zusammenreißen; zusammenhalten', [
      ex('Everyone [[pulled together]] to ship the release before Friday.', 'Все сплотились, чтобы выпустить релиз до пятницы.', 'Alle hielten zusammen, um das Release vor Freitag auszuliefern.')
    ], null, null, { core: false, tr: 'figurative' })
  ]);

  /* 4. STAND */
  family('stand', 'стоять; терпеть', 'stehen; aushalten', [
    'Неправильный глагол: stand — stood — stood. Частые пары: stand out (выделяться), stand by (быть наготове / поддерживать), stand up for (отстаивать), stand in for (подменять).',
    'Unregelmäßiges Verb: stand — stood — stood. Häufig: stand out (herausragen), stand by (bereitstehen/unterstützen), stand down (zurücktreten), stand in (vertreten).'
  ], [
    base('stand', ['stands', 'stood', 'stood'], 'A1', 'стоять; выносить, терпеть', 'stehen; ertragen', [
      ex('Please [[stand]] clear of the closing doors.', 'Пожалуйста, не стойте в проёме закрывающихся дверей.', 'Bitte bleiben Sie von den schließenden Türen zurück.')
    ]),
    pv('stand up', 'up', 0, 'B1', 'встать (со стула); (stand up for) отстаивать', 'aufstehen; (für etw.) einstehen', [
      ex('Please [[stand up]] slowly if you felt dizzy earlier.', 'Пожалуйста, вставайте медленно, если у вас раньше кружилась голова.', 'Bitte stehen Sie langsam auf, wenn Ihnen vorhin schwindelig war.')
    ], ['Встать', 'AUFstehen']),
    pv('stand out', 'out', 0, 'B2', 'выделяться, бросаться в глаза', 'herausragen, auffallen', [
      ex('Her clear summary made her application [[stand out]] immediately.', 'Чёткое резюме сразу выделило её заявку среди остальных.', 'Ihre klare Zusammenfassung ließ ihre Bewerbung sofort herausstechen.')
    ], ['ВЫделяться', 'HERAUSstechen']),
    pv('stand by', null, null, 'B2', 'поддерживать; быть в режиме готовности', 'beistehen; bereitstehen', [
      ex('Two technicians will [[stand by]] during the overnight server switch.', 'Два техника будут дежурить в готовности во время ночного переключения сервера.', 'Zwei Techniker stehen während der nächtlichen Serverumstellung bereit.')
    ], null, null, { core: false, tr: 'figurative' }),
    pv('stand down', 'down', null, 'C1', 'уйти с поста, сложить полномочия; отступить', 'zurücktreten, abtreten', [
      ex('The committee chair decided to [[stand down]] after six years.', 'Председатель комитета решил сложить полномочия после шести лет работы.', 'Die Ausschussvorsitzende beschloss, nach sechs Jahren zurückzutreten.')
    ], ['сойти вниз (с поста)', 'zurücktreten'], null, { tr: 'figurative' }),
    pv('stand in', 'in', null, 'B2', 'подменять, временно заменять (for someone)', 'einspringen, vertreten', [
      ex('Can you [[stand in]] for me at tomorrow’s stand-up?', 'Можешь подменить меня завтра на стендапе?', 'Kannst du morgen beim Stand-up für mich einspringen?')
    ], ['подменить', 'EINSPRINGEN'], null, { tr: 'figurative' }),
    pv('stand for', null, null, 'B1', 'означать (аббревиатура); отстаивать, мириться с', 'stehen für; bedeuten', [
      ex('What does the abbreviation VAT [[stand for]] on this invoice?', 'Что означает аббревиатура VAT в этом счёте?', 'Wofür steht die Abkürzung VAT auf dieser Rechnung?')
    ], null, null, { core: false, tr: 'figurative' }),
    word('standoff', 'noun', 'standoff', 'C1', 'тупиковая ситуация, противостояние', 'die Pattsituation', [
      ex('Neither side blinked during the two-hour [[standoff]] over pricing.', 'Ни одна сторона не уступила за два часа жёсткого противостояния из-за цены.', 'Keine Seite gab während der zweistündigen Pattsituation beim Preis nach.')
    ], { plural: 'standoffs' })
  ]);

  /* 5. CHECK */
  family('check', 'проверять', 'prüfen, kontrollieren', [
    'Правильный глагол: check — checked — checked. В быту и поездках незаменимы check in (зарегистрироваться), check out (выехать из отеля / посмотреть), check up on (проверить состояние), check over (бегло перепроверить).',
    'Regelmäßiges Verb: check — checked — checked. Im Alltag und auf Reisen: check in (einchecken), check out (auschecken/prüfen), check over (gegenprüfen), check off (abhaken).'
  ], [
    base('check', ['checks', 'checked', 'checked'], 'A2', 'проверять, сверять', 'prüfen, nachsehen', [
      ex('Always [[check]] the attachment before hitting send.', 'Всегда проверяйте вложение перед отправкой письма.', 'Prüfen Sie immer den Anhang, bevor Sie auf Senden klicken.')
    ]),
    pv('check on', 'on', null, 'B1', 'проверить, заглянуть проверить (состояние)', 'nachsehen, prüfen', [
      ex('The supervisor walked by to [[check on]] the new team during training.', 'Руководитель заглянул проверить, как дела у новой команды на обучении.', 'Die Vorgesetzte schaute vorbei, um nach dem neuen Team in der Schulung zu sehen.')
    ], ['ПРОВЕРИТЬ', 'nachsehen']),
    pv('check out', 'out', 0, 'B1', 'выписаться (из отеля); проверить, заглянуть', 'auschecken; sich ansehen', [
      ex('Guests must [[check out]] before eleven unless they book a late departure.', 'Гости должны выписаться до одиннадцати, если не заказали поздний выезд.', 'Gäste müssen vor elf Uhr auschecken, sofern sie keinen späten Check-out buchen.')
    ], ['ВЫписаться', 'AUSchecken']),
    pv('check up', 'up', null, 'B2', 'навестить / проверить состояние (check up on)', 'nach dem Rechten sehen, prüfen', [
      ex('The nurse came by to [[check up]] on the patient after the procedure.', 'Медсестра зашла проверить состояние пациента после процедуры.', 'Die Pflegekraft sah nach dem Eingriff nach dem Patienten.')
    ], null, null, { tr: 'figurative' }),
    pv('check over', 'over', 0, 'B2', 'бегло просмотреть, перепроверить целиком', 'durchsehen, gegenprüfen', [
      ex('Could you [[check over]] the figures on slide four before the pitch?', 'Можешь перепроверить цифры на четвёртом слайде перед питчем?', 'Könntest du die Zahlen auf Folie vier vor dem Pitch noch einmal durchsehen?')
    ], ['ПЕРЕпроверить', 'ÜBERprüfen']),
    pv('check off', 'off', null, 'B2', 'отметить галочкой (в списке), вычеркнуть выполненное', 'abhaken', [
      ex('We [[checked off]] every item on the safety list before opening.', 'Мы отметили галочкой каждый пункт списка безопасности перед открытием.', 'Wir hakten jeden Punkt auf der Sicherheitsliste vor der Öffnung ab.')
    ], ['отметить', 'ABhaken']),
    word('checkout', 'noun', 'checkout', 'B1', 'касса; выезд из отеля', 'die Kasse; der Check-out', [
      ex('Enter the voucher code at [[checkout]] before confirming payment.', 'Введите промокод на кассе перед подтверждением оплаты.', 'Geben Sie den Gutscheincode an der Kasse vor der Zahlungsbestätigung ein.')
    ], { plural: 'checkouts' })
  ]);

  /* 6. HAND */
  family('hand', 'передавать; рука', 'übergeben, reichen; Hand', [
    'Существительное и глагол hand: hand in (сдать документ/заявление), hand out (раздать), hand over (передать дела/власть), hand back (вернуть), hand down (передать по наследству / огласить решение).',
    'Substantiv und Verb hand: hand in (einreichen), hand out (austeilen), hand over (übergeben), hand back (zurückgeben), hand down (weitergeben/verkünden).'
  ], [
    base('hand', ['hands', 'handed', 'handed'], 'B1', 'вручать, передавать рукой', 'reichen, übergeben', [
      ex('Please [[hand]] your passport to the officer at the desk.', 'Пожалуйста, передайте ваш паспорт сотруднику за стойкой.', 'Bitte reichen Sie Ihren Pass dem Beamten am Schalter.')
    ]),
    pv('hand in', 'in', 0, 'B1', 'сдавать (работу, отчёт, заявление)', 'einreichen, abgeben', [
      ex('Remember to [[hand in]] your travel receipts by Friday.', 'Не забудьте сдать чеки по командировке до пятницы.', 'Denken Sie daran, Ihre Reisebelege bis Freitag einzureichen.')
    ], ['Сдать (в инстанцию)', 'EINreichen']),
    pv('hand out', 'out', 0, 'B1', 'раздавать (материалы, листовки)', 'austeilen, verteilen', [
      ex('Trainers [[handed out]] safety leaflets at the start of the shift.', 'Инструкторы раздали памятки по безопасности в начале смены.', 'Die Ausbilder teilten zu Schichtbeginn Sicherheitsmerkblätter aus.')
    ], ['РАЗдать', 'AUSteilen']),
    existing('hand over'),
    pv('hand back', 'back', 0, 'B1', 'отдавать обратно, возвращать', 'zurückgeben', [
      ex('The clerk checked the signature and [[handed]] the card [[back]].', 'Сотрудник проверил подпись и вернул карту обратно.', 'Der Sachbearbeiter prüfte die Unterschrift und gab die Karte zurück.')
    ], ['отдать НАЗАД', 'ZURÜCKgeben']),
    pv('hand down', 'down', null, 'C1', 'передавать следующим поколениям; выносить (приговор)', 'weitergeben; (Urteil) verkünden', [
      ex('The court will [[hand down]] its written ruling next Tuesday.', 'Суд огласит письменное решение в следующий вторник.', 'Das Gericht wird sein schriftliches Urteil am nächsten Dienstag verkünden.')
    ], null, null, { tr: 'figurative' }),
    word('handbook', 'noun', 'handbook', 'B1', 'справочник, руководство', 'das Handbuch', [
      ex('Every new hire receives the staff [[handbook]] on day one.', 'Каждый новый сотрудник получает справочник персонала в первый день.', 'Jeder neue Mitarbeiter erhält am ersten Tag das Mitarbeiterhandbuch.')
    ], { plural: 'handbooks' }),
    existing('handover')
  ]);

  /* 7. SENSE (Word-building family, mapVerbs: false) */
  wbFamily('sense', 'sense', 'смысл; чувство', 'Sinn, Gefühl', [
    'Как в немецком der Sinn: одно слово даёт целый пучок прилагательных с разными оттенками: sensible (разумный!), sensitive (чувствительный — ложный друг!), senseless (бессмысленный), nonsense (чепуха).',
    'Wie deutsch Sinn: sensible = vernünftig (nicht „sensibel“!), sensitive = empfindlich/sensibel, senseless = sinnlos, nonsense = Unsinn.'
  ], [
    word('sense', 'noun', 'sense', 'B1', 'смысл; чувство', 'der Sinn; das Gefühl', [
      ex('That short summary makes much more [[sense]] now.', 'Теперь это короткое резюме имеет гораздо больше смысла.', 'Diese kurze Zusammenfassung ergibt jetzt viel mehr Sinn.')
    ], { base: true, plural: 'senses' }),
    word('sensible', 'adj', 'sensible', 'B1', 'разумный, благоразумный (НЕ «чувствительный»!)', 'vernünftig, sinnvoll', [
      ex('Keeping a backup copy on an external drive is a [[sensible]] precaution.', 'Хранить резервную копию на внешнем диске — разумная мера предосторожности.', 'Eine Sicherungskopie auf einer externen Festplatte ist eine vernünftige Vorsichtsmaßnahme.')
    ]),
    word('sensitive', 'adj', 'sensitive', 'B2', 'чувствительный; конфиденциальный (о данных)', 'empfindlich; sensibel', [
      ex('Never send [[sensitive]] payroll files in an unencrypted email.', 'Никогда не отправляйте конфиденциальные зарплатные файлы незашифрованным письмом.', 'Senden Sie sensible Gehaltsdateien niemals in einer unverschlüsselten E-Mail.')
    ]),
    word('senseless', 'adj', 'senseless', 'B2', 'бессмысленный', 'sinnlos', [
      ex('Arguing over minor formatting details felt completely [[senseless]].', 'Спорить о мелких деталях оформления казалось совершенно бессмысленным.', 'Über winzige Formatierungsdetails zu streiten erschien völlig sinnlos.')
    ]),
    word('nonsense', 'noun', 'nonsense', 'B1', 'вздор, бессмыслица, чепуха', 'der Unsinn', [
      ex('Don’t repeat unverified [[nonsense]] from random posts.', 'Не повторяйте непроверенную чепуху из случайных постов.', 'Wiederholen Sie keinen ungeprüften Unsinn aus beliebigen Posts.')
    ]),
    word('sensation', 'noun', 'sensation', 'B2', 'ощущение; сенсация', 'das Gefühl, Empfinden; die Sensation', [
      ex('A tingling [[sensation]] in the fingers can be a sign of nerve strain.', 'Ощущение покалывания в пальцах может быть признаком нагрузки на нерв.', 'Ein Kribbeln in den Fingern kann auf eine Nervenreizung hindeuten.')
    ], { plural: 'sensations' }),
    word('sensational', 'adj', 'sensational', 'B2', 'сенсационный, потрясающий', 'sensationell', [
      ex('Critics praised the ensemble’s [[sensational]] opening performance.', 'Критики высоко оценили потрясающую премьерную постановку труппы.', 'Kritiker lobten die sensationelle Eröffnungsvorstellung des Ensembles.')
    ])
  ]);

  /* 8. SIGN (Word-building family, mapVerbs: false) */
  wbFamily('sign', 'sign', 'знак; подписывать', 'Zeichen; unterschreiben', [
    'Латинский корень signum («знак») даёт sign (знак/подписывать), signal (сигнал), signature (подпись), significant (значительный), design (дизайн/проект), resign (уволиться по собственному желанию).',
    'Die lateinische Wurzel signum („Zeichen“) ergibt sign, signal, signature (Unterschrift), significant (bedeutend), design, resign (kündigen).'
  ], [
    word('sign', 'noun', 'sign', 'B1', 'знак, табличка; признак', 'das Zeichen, Schild; Anzeichen', [
      ex('Follow the green [[signs]] towards the emergency assembly point.', 'Идите по зелёным указателям к точке сбора при эвакуации.', 'Folgen Sie den grünen Schildern zum Sammelplatz.')
    ], { base: true, plural: 'signs' }),
    word('signal', 'noun', 'signal', 'B1', 'сигнал, знак', 'das Signal', [
      ex('A sudden drop in pressure is an early warning [[signal]].', 'Резкое падение давления — ранний предупреждающий сигнал.', 'Ein plötzlicher Druckabfall ist ein frühes Warnsignal.')
    ], { plural: 'signals' }),
    existing('signature'),
    word('significant', 'adj', 'significant', 'B2', 'значительный, существенный', 'bedeutend, wesentlich', [
      ex('There was a [[significant]] improvement in response times after the update.', 'После обновления время отклика существенно улучшилось.', 'Nach dem Update gab es eine deutliche Verbesserung der Reaktionszeiten.')
    ]),
    word('significance', 'noun', 'significance', 'C1', 'значимость, важность, смысл', 'die Bedeutung, Tragweite', [
      ex('Few noticed the wider [[significance]] of that short footnote.', 'Мало кто заметил более широкую значимость этого короткого примечания.', 'Nur wenige bemerkten die größere Tragweite dieser kurzen Fußnote.')
    ]),
    word('signpost', 'noun', 'signpost', 'B1', 'дорожный указатель; ориентир', 'der Wegweiser', [
      ex('Follow the wooden [[signpost]] past the pond to reach the station.', 'Идите по деревянному указателю мимо пруда, чтобы дойти до станции.', 'Folgen Sie dem hölzernen Wegweiser am Teich vorbei bis zum Bahnhof.')
    ], { plural: 'signposts' }),
    word('signify', 'verb', 'signify', 'C1', 'означать, знаменовать', 'bedeuten, anzeigen', [
      ex('A red status light may [[signify]] a loose power cable.', 'Красный индикатор может означать неплотный кабель питания.', 'Eine rote Statusleuchte kann auf ein loses Netzkabel hinweisen.')
    ])
  ]);

  /* 9. CLEAR (Word-building family, mapVerbs: false) */
  wbFamily('clear', 'clear', 'ясный, чёткий; очищать', 'klar; klären', [
    'База clear даёт наречие clearly, существительное clarity (ясность), глагол clarify (прояснять), clearance (таможенная очистка / допуск), unclear (неясный) и фразовый глагол clear up.',
    'Die Basis clear bildet clearly, clarity (Klarheit), clarify (klären), clearance (Freigabe/Zollabfertigung), unclear (unklar) und clear up (aufklären).'
  ], [
    word('clear', 'adj', 'clear', 'A2', 'ясный, чёткий; свободный (о пути)', 'klar, deutlich; frei', [
      ex('Keep the fire exit corridor [[clear]] at all times.', 'Держите проход к запасному выходу всегда свободным.', 'Halten Sie den Fluchtweg jederzeit frei.')
    ], { base: true }),
    word('clearly', 'adv', 'clearly', 'B1', 'ясно, отчётливо; очевидно', 'klar, deutlich; offensichtlich', [
      ex('State the deadline [[clearly]] at the top of the email.', 'Чётко укажите срок в самом начале письма.', 'Nennen Sie die Frist klar ganz oben in der E-Mail.')
    ]),
    word('clarity', 'noun', 'clarity', 'C1', 'ясность, чёткость', 'die Klarheit, Deutlichkeit', [
      ex('Thank you for the [[clarity]] of your step-by-step instructions.', 'Спасибо за ясность ваших пошаговых инструкций.', 'Vielen Dank für die Klarheit Ihrer Schritt-für-Schritt-Anleitung.')
    ]),
    existing('clarify'),
    word('clear-away', 'phrasal verb', 'clear away', 'B1', 'убирать (со стола, лишние вещи)', 'abräumen, wegräumen', [
      ex('Let’s [[clear away]] the empty boxes before the guests arrive.', 'Давай уберём пустые коробки до прихода гостей.', 'Räumen wir die leeren Kartons weg, bevor die Gäste kommen.')
    ]),
    word('unclear', 'adj', 'unclear', 'B1', 'неясный, неопределённый', 'unklar', [
      ex('Several points in the draft contract remain [[unclear]].', 'Несколько пунктов в проекте договора остаются неясными.', 'Mehrere Punkte im Vertragsentwurf bleiben unklar.')
    ]),
    word('clear-up', 'phrasal verb', 'clear up', 'B1', 'прояснить (недоразумение); прибраться', 'klären; aufräumen', [
      ex('A quick phone call helped [[clear up]] the billing misunderstanding.', 'Короткий звонок помог прояснить недоразумение со счётом.', 'Ein kurzes Telefonat half, das Missverständnis bei der Abrechnung zu klären.')
    ])
  ]);

  /* 10. TRUST (Word-building family, mapVerbs: false) */
  wbFamily('trust', 'trust', 'доверие; доверять', 'Vertrauen; vertrauen', [
    'Вокруг trust собираются антонимы и оттенки доверия: trustworthy (надёжный), untrustworthy (ненадёжный), distrust (недоверие), mistrust (подозрительность), entrust (доверить кому-л.).',
    'Rund um trust sammeln sich Wörter zu Vertrauen und Misstrauen: trustworthy (vertrauenswürdig), distrust (Misstrauen), entrust (anvertrauen).'
  ], [
    existing('trust'),
    word('trustful', 'adj', 'trustful', 'B2', 'доверчивый, исполненный доверия', 'vertrauensvoll', [
      ex('A [[trustful]] working relationship makes honest feedback much easier.', 'Доверительные рабочие отношения делают честную обратную связь намного проще.', 'Ein vertrauensvolles Arbeitsverhältnis macht ehrliches Feedback viel leichter.')
    ]),
    word('untrustworthy', 'adj', 'untrustworthy', 'B2', 'ненадёжный, не заслуживающий доверия', 'unzuverlässig, nicht vertrauenswürdig', [
      ex('Never rely on [[untrustworthy]] third-party browser extensions.', 'Никогда не полагайтесь на ненадёжные сторонние расширения для браузера.', 'Verlassen Sie sich nie auf nicht vertrauenswürdige Browser-Erweiterungen.')
    ]),
    word('distrust', 'noun', 'distrust', 'B2', 'недоверие (обычно обоснованное)', 'das Misstrauen', [
      ex('Repeated delays created growing [[distrust]] among long-term clients.', 'Повторяющиеся задержки вызвали растущее недоверие среди постоянных клиентов.', 'Wiederholte Verzögerungen führten bei Stammkunden zu wachsendem Misstrauen.')
    ]),
    word('mistrust', 'noun', 'mistrust', 'C1', 'недоверие, подозрительность', 'das Misstrauen, Argwohn', [
      ex('Unclear pricing often breeds [[mistrust]] before talks even begin.', 'Непрозрачные цены часто порождают подозрительность ещё до начала переговоров.', 'Unklare Preise erzeugen oft Misstrauen, noch bevor Gespräche beginnen.')
    ]),
    word('entrust', 'verb', 'entrust', 'C1', 'доверять, поручать (ответственное дело)', 'anvertrauen', [
      ex('They [[entrusted]] the new lead with the most sensitive client account.', 'Новому руководителю доверили самого важного клиента.', 'Sie vertrauten der neuen Teamleiterin den sensibelsten Kunden an.')
    ]),
    word('trusting', 'adj', 'trusting', 'B2', 'доверчивый', 'vertrauensselig, gutgläubig', [
      ex('Phishing emails exploit people who are overly [[trusting]] under time pressure.', 'Фишинговые письма используют людей, слишком доверчивых в спешке.', 'Phishing-Mails nutzen Menschen aus, die unter Zeitdruck zu gutgläubig sind.')
    ])
  ]);

  /* Register new particle examples into P.prefixes and update ROOT_PLAN */
  P.items.forEach(function (w) {
    if (!w.particle || !w.prefixDrill || !P.prefixes[w.prefix]) return;
    var m = P.prefixes[w.prefix].meanings[w.prefixDrill.meaning];
    if (!m || m.examples.some(function (e) { return e.t === w.t; })) return;
    var first = function (s) { return String(s || '').split(';')[0].trim(); };
    m.examples.push(ex(w.t, first(w.ru), first(w.de)));
  });

  P.config.ROOT_PLAN = P.config.ROOT_PLAN.filter(function (id) { return /^vf-/.test(id) && NEW_ORDER.indexOf(id) < 0; })
    .concat(NEW_ORDER.filter(function (id) { return /^vf-/.test(id); }),
      P.config.ROOT_PLAN.filter(function (id) { return !/^vf-/.test(id); }),
      NEW_ORDER.filter(function (id) { return !/^vf-/.test(id); }));
})();
