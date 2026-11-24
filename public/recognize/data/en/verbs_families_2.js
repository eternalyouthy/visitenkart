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
