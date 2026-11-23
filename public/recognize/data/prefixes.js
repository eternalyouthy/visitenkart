/* PREFIXES. Learning content in Russian. meanings[].examples: {de, ru} — verbs from different roots. */
GT.registerPrefix({
  id: 'ab', label: 'ab-', sep: 'trennbar', stress: 'ударная: ÁBbauen',
  ru: 'от-, с-, раз-, вы-: прочь, вниз, отделение, уменьшение, завершение',
  meanings: [
    { ru: 'прочь, отделение', ruPrefix: 'ОТ-', examples: [
      { de: 'abfahren', ru: 'отъезжать, уезжать' }, { de: 'abschneiden', ru: 'отрезать' }, { de: 'abgeben', ru: 'отдавать, сдавать' }, { de: 'abreißen', ru: 'отрывать; сносить (здание)' } ] },
    { ru: 'вниз, с поверхности', ruPrefix: 'С-', examples: [
      { de: 'abstürzen', ru: 'разбиться, упасть (в т. ч. о программе)' }, { de: 'abnehmen', ru: 'снимать; худеть' }, { de: 'absteigen', ru: 'сходить (с велосипеда)' } ] },
    { ru: 'уменьшение, сокращение', ruPrefix: 'С-, СО-', examples: [
      { de: 'abbauen', ru: 'сокращать (места); разбирать' }, { de: 'abkühlen', ru: 'остывать, охлаждаться' }, { de: 'abnehmen', ru: 'уменьшаться, худеть' } ] },
    { ru: 'отключение, отмена', ruPrefix: 'ОТ-, РАЗ-', examples: [
      { de: 'abstellen', ru: 'отключать (воду, газ)' }, { de: 'abschalten', ru: 'отключать, выключать' }, { de: 'abmelden', ru: 'отписаться, сняться с учёта' }, { de: 'absagen', ru: 'отменять' } ] },
    { ru: 'копирование по образцу', ruPrefix: 'С-', examples: [
      { de: 'abschreiben', ru: 'списывать' }, { de: 'abmalen', ru: 'срисовывать' } ] },
    { ru: 'завершение, до конца', ruPrefix: 'ОТ-', examples: [
      { de: 'abarbeiten', ru: 'отработать (список задач)' }, { de: 'abschließen', ru: 'завершать; запирать' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> ab- ≈ <em>от-</em> (abfahren — отъехать, abschneiden — отрезать, abarbeiten — отработать) и ≈ <em>с-</em> (abschreiben — списать, abmalen — срисовать).</p>' +
    '<p><b>Не совпадает:</b> <em>absagen</em> — «отменить», а не «отсказать»; <em>abhängen von</em> — «зависеть от» (переносное); <em>abnehmen</em> — и «снимать», и «худеть», и «брать трубку». Здесь логика приставки уже не помогает — учите значение.</p>',
  grammar:
    '<p><b>Отделяемая и ударная:</b> ÁBbauen. В главном предложении приставка уходит в конец: <em>Die Firma baut Stellen ab.</em></p>' +
    '<p><b>Perfekt:</b> ge- встаёт между приставкой и корнем: <em>ab·ge·baut</em>, <em>ab·ge·fahren</em>.</p>' +
    '<p><b>zu-инфинитив:</b> zu внутри: <em>Es ist schwer, Überstunden abzubauen.</em></p>' +
    '<p><b>Придаточное:</b> глагол снова слитно и в конце: <em>…, weil die Firma Stellen abbaut.</em></p>'
});

GT.registerPrefix({
  id: 'auf', label: 'auf-', sep: 'trennbar', stress: 'ударная: ÁUFbauen',
  ru: 'вверх; открытие; начало действия; «до конца»; на поверхность',
  meanings: [
    { ru: 'вверх', ruPrefix: 'ВОС-, ВЗ-, ПОД-', examples: [
      { de: 'aufstehen', ru: 'вставать' }, { de: 'aufsteigen', ru: 'подниматься (по службе)' }, { de: 'aufheben', ru: 'поднимать; хранить; отменять' } ] },
    { ru: 'открытие', ruPrefix: 'ОТ-, РАС-', examples: [
      { de: 'aufmachen', ru: 'открывать' }, { de: 'aufschließen', ru: 'отпирать' }, { de: 'aufklappen', ru: 'раскрывать (ноутбук)' } ] },
    { ru: 'на поверхность, сверху', ruPrefix: 'НА-, ЗА-', examples: [
      { de: 'aufkleben', ru: 'наклеивать' }, { de: 'aufsetzen', ru: 'надевать (шапку); составлять (текст)' }, { de: 'aufschreiben', ru: 'записывать' } ] },
    { ru: 'полностью, до конца', ruPrefix: 'С-, У-, ИЗ-', examples: [
      { de: 'aufessen', ru: 'съесть всё' }, { de: 'aufräumen', ru: 'убирать (комнату)' }, { de: 'aufbrauchen', ru: 'израсходовать' } ] },
    { ru: 'внезапное начало', ruPrefix: 'ВЗ-, ПРО-', examples: [
      { de: 'aufwachen', ru: 'проснуться' }, { de: 'aufleuchten', ru: 'вспыхнуть, загореться' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> auf- ≈ <em>на-</em> (aufkleben — наклеить), иногда ≈ <em>вз- / вос-</em> (aufsteigen — взойти, подняться).</p>' +
    '<p><b>СМЫСЛ УШЁЛ (непрозрачные):</b> <em>aufhören</em> — «прекращать» (исторически от hören «прислушаться и замереть», но сегодня смысл со «слушать» уже не связан); <em>aufgeben</em> — «сдаваться; отправлять (посылку)»; <em>auffallen</em> — «бросаться в глаза». Не выводите их из буквального значения — учите как отдельные слова.</p>',
  grammar:
    '<p><b>Отделяемая и ударная:</b> <em>Ich stehe um sieben auf.</em></p>' +
    '<p><b>Perfekt:</b> <em>auf·ge·standen</em> (с sein), <em>auf·ge·baut</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>Ich habe keine Lust, früh aufzustehen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, weil ich früh aufstehe.</em></p>'
});

GT.registerPrefix({
  id: 'an', label: 'an-', sep: 'trennbar', stress: 'ударная: ÁNbauen',
  ru: 'при-, на-: приближение, контакт, прикрепление, включение, начало действия',
  meanings: [
    { ru: 'приближение, прибытие', ruPrefix: 'ПРИ-', examples: [
      { de: 'ankommen', ru: 'прибывать, приезжать' }, { de: 'anbauen', ru: 'пристраивать' }, { de: 'anreisen', ru: 'приезжать (на мероприятие)' } ] },
    { ru: 'контакт, прикрепление', ruPrefix: 'ПРИ-', examples: [
      { de: 'ankleben', ru: 'приклеивать' }, { de: 'anbinden', ru: 'привязывать; подключать (систему)' }, { de: 'anlehnen', ru: 'прислонять' } ] },
    { ru: 'включение', ruPrefix: '—', note: 'по-русски «в-ключать», приставки не совпадают', examples: [
      { de: 'anmachen', ru: 'включать (свет)' }, { de: 'anschalten', ru: 'включать' }, { de: 'anstellen', ru: 'включать (прибор)' } ] },
    { ru: 'направленность на кого-то', ruPrefix: 'НА-, ЗА-', examples: [
      { de: 'anschreien', ru: 'накричать' }, { de: 'ansprechen', ru: 'заговорить (с кем-то), обратиться' }, { de: 'anrufen', ru: 'позвонить' } ] },
    { ru: 'надевание, начало', ruPrefix: 'НА-, ПРИ-', examples: [
      { de: 'anziehen', ru: 'надевать' }, { de: 'anfangen', ru: 'начинать' }, { de: 'anbrennen', ru: 'пригорать' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> an- ≈ <em>при-</em> (ankommen — прибыть, anbauen — пристроить, ankleben — приклеить, anbrennen — пригореть) и ≈ <em>на-</em> (anschreien — накричать, anziehen — надеть).</p>' +
    '<p><b>Не совпадает / СМЫСЛ УШЁЛ:</b> <em>es kommt darauf an</em> — «это зависит от»; <em>anstellen</em> — «натворить»; <em>annehmen</em> — «принимать» и «предполагать».</p>',
  grammar:
    '<p><b>Отделяемая и ударная:</b> <em>Der Zug kommt um 9 Uhr an.</em></p>' +
    '<p><b>Perfekt:</b> <em>an·ge·kommen</em> (с sein), <em>an·ge·rufen</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>Vergiss nicht, mich anzurufen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, wenn der Zug pünktlich ankommt.</em></p>'
});

GT.registerPrefix({
  id: 'ver', label: 'ver-', sep: 'untrennbar', stress: 'безударная: verSTEHen',
  ru: 'неотделяемая; много значений: ошибка, расход и исчезновение, изменение состояния, закрытие',
  meanings: [
    { ru: 'ошибка (с sich)', ruPrefix: 'О-, ОБ-, ПРО-', examples: [
      { de: 'sich verschreiben', ru: 'описаться, опечататься' }, { de: 'sich versprechen', ru: 'оговориться' }, { de: 'sich verhören', ru: 'ослышаться' }, { de: 'sich verlaufen', ru: 'заблудиться' } ] },
    { ru: 'расход, исчезновение, «про-»', ruPrefix: 'ПРО-, ИС-, РАС-', examples: [
      { de: 'verschlafen', ru: 'проспать' }, { de: 'verspielen', ru: 'проиграть (деньги, шанс)' }, { de: 'verbrauchen', ru: 'расходовать' }, { de: 'verschwinden', ru: 'исчезать' } ] },
    { ru: 'изменение состояния (от прилагательных)', ruPrefix: 'У-', examples: [
      { de: 'verbessern', ru: 'улучшать' }, { de: 'verlängern', ru: 'удлинять, продлевать' }, { de: 'verkleinern', ru: 'уменьшать' } ] },
    { ru: 'закрытие, соединение', ruPrefix: 'ЗА-, С-', examples: [
      { de: 'verschließen', ru: 'запирать' }, { de: 'verbinden', ru: 'соединять, связывать' }, { de: 'verbauen', ru: 'застраивать, загораживать' } ] },
    { ru: 'перемещение прочь / в другое место', ruPrefix: 'ПЕРЕ-, РАЗ-', examples: [
      { de: 'versetzen', ru: 'переводить (сотрудника), переставлять' }, { de: 'verschicken', ru: 'рассылать' }, { de: 'verreisen', ru: 'уехать (в поездку)' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> «ошибочное» ver- ≈ <em>о-</em> (sich versprechen — оговориться, sich verhören — ослышаться, sich verschreiben — описаться); ver- ≈ <em>про-</em> (verschlafen — проспать, verspielen — проиграть); ver- от прилагательных ≈ <em>у-</em> (verbessern — улучшить).</p>' +
    '<p><b>СМЫСЛ УШЁЛ (непрозрачные):</b> <em>verstehen</em> — «понимать» (исторически родственно stehen, но современное значение из «стоять» не выводится); <em>vergessen</em> — «забывать» (другой корень, к essen «есть» отношения не имеет); <em>verlieren</em>, <em>verdienen</em> (зарабатывать) — учите как цельные слова.</p>',
  grammar:
    '<p><b>Неотделяемая и безударная:</b> приставка никогда не отрывается: <em>Ich verstehe das nicht.</em></p>' +
    '<p><b>Perfekt без ge-:</b> <em>verstanden</em>, <em>verbaut</em>, <em>verschlafen</em> (не «vergestanden»).</p>' +
    '<p><b>zu-инфинитив:</b> zu перед глаголом: <em>Es ist schwer, das zu verstehen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, dass er es nicht versteht.</em></p>'
});

GT.registerPrefix({
  id: 'aus', label: 'aus-', sep: 'trennbar', stress: 'ударная: ÁUSziehen',
  ru: 'вы-, из-, раз-: наружу, изнутри; выключение; до конца; расширение; выбор',
  meanings: [
    { ru: 'наружу, изнутри (движение, извлечение)', ruPrefix: 'ВЫ-, ИЗ-', examples: [
      { de: 'ausziehen', ru: 'снимать одежду; выезжать из квартиры' }, { de: 'aussteigen', ru: 'выходить (из транспорта)' }, { de: 'ausbauen', ru: 'вынимать, демонтировать (деталь)' }, { de: 'ausgeben', ru: 'тратить; выдавать (результат)' } ] },
    { ru: 'выключение, выход из строя', ruPrefix: 'ВЫ-', examples: [
      { de: 'ausmachen', ru: 'выключать (свет, прибор)' }, { de: 'ausschalten', ru: 'выключать' }, { de: 'ausfallen', ru: 'выходить из строя; отменяться' } ] },
    { ru: 'до конца, полностью, исчерпание', ruPrefix: 'ВЫ-, ИЗ-', examples: [
      { de: 'aushalten', ru: 'выдерживать, терпеть' }, { de: 'ausnutzen', ru: 'эксплуатировать, использовать до конца' }, { de: 'sich ausruhen', ru: 'хорошо отдохнуть' }, { de: 'auswerten', ru: 'анализировать (данные, логи)' } ] },
    { ru: 'расширение, оформление, выставление', ruPrefix: 'РАЗ-, ВЫ-', examples: [
      { de: 'ausbauen', ru: 'расширять, развивать (сеть)' }, { de: 'ausstellen', ru: 'выставлять; выдавать (документ, счёт)' }, { de: 'auslegen', ru: 'раскладывать; толковать' } ] },
    { ru: 'выбор, исключение', ruPrefix: 'ВЫ-, ИС-', examples: [
      { de: 'auswählen', ru: 'выбирать' }, { de: 'aussuchen', ru: 'подбирать' }, { de: 'ausschließen', ru: 'исключать' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> aus- ≈ <em>вы-</em> (ausziehen — выезжать, aussteigen — выходить, aushalten — выдерживать, ausstellen — выставлять, auswählen — выбирать) и ≈ <em>из- / ис-</em> (ausschließen — исключать).</p>' +
    '<p><b>Не совпадает / СМЫСЛ УШЁЛ:</b> <em>aussehen</em> — «выглядеть»; <em>auskommen mit</em> — «ладить, обходиться»; <em>ausmachen</em> — не только «выключать», но и «договориться» и «иметь значение» («Das macht nichts aus»).</p>',
  grammar:
    '<p><b>Отделяемая и ударная:</b> ÁUSziehen. В главном предложении приставка уходит в конец: <em>Der Server fällt oft aus.</em></p>' +
    '<p><b>Perfekt:</b> ge- внутри: <em>aus·ge·zogen</em>, <em>aus·ge·fallen</em> (с sein), <em>aus·ge·baut</em>.</p>' +
    '<p><b>zu-инфинитив:</b> zu внутри: <em>Wir planen, das Netz weiter auszubauen.</em></p>' +
    '<p><b>Придаточное:</b> слитно в конце: <em>…, weil der Mailserver ausfällt.</em></p>'
});

GT.registerPrefix({
  id: 'ein', label: 'ein-', sep: 'trennbar', stress: 'ударная: ÉINbauen',
  ru: 'в-, въ-, за-: внутрь, вход; встраивание; включение; погружение в состояние; удержание в рамках',
  meanings: [
    { ru: 'внутрь, вход, проникновение', ruPrefix: 'В-, ВЪ-', examples: [
      { de: 'einziehen', ru: 'въезжать, вселяться' }, { de: 'einsteigen', ru: 'садиться (в транспорт)' }, { de: 'einnehmen', ru: 'принимать внутрь (лекарство)' }, { de: 'einbrechen', ru: 'вламываться' } ] },
    { ru: 'встраивание, установка, ввод', ruPrefix: 'В-, ВСТ-', examples: [
      { de: 'einbauen', ru: 'встраивать, устанавливать' }, { de: 'einsetzen', ru: 'вставлять; применять (инструмент)' }, { de: 'eingeben', ru: 'вводить (пароль, данные)' }, { de: 'einspielen', ru: 'устанавливать (патч, бэкап)' } ] },
    { ru: 'включение, настройка, запуск', ruPrefix: 'В-, НА-', examples: [
      { de: 'einschalten', ru: 'включать (прибор)' }, { de: 'einrichten', ru: 'настраивать, обустраивать' }, { de: 'einstellen', ru: 'настраивать (параметры)' } ] },
    { ru: 'погружение в состояние, привыкание', ruPrefix: 'ЗА-, В-', examples: [
      { de: 'einschlafen', ru: 'засыпать' }, { de: 'sich einarbeiten', ru: 'вработаться, войти в курс дела' }, { de: 'sich eingewöhnen', ru: 'привыкнуть к новому месту' } ] },
    { ru: 'соблюдение рамок, сдерживание, сбор', ruPrefix: 'С-, У-', examples: [
      { de: 'einhalten', ru: 'соблюдать (правила, сроки)' }, { de: 'eindämmen', ru: 'сдерживать, локализовать (атаку)' }, { de: 'einziehen', ru: 'списывать, взимать (деньги)' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> ein- ≈ <em>в- / въ-</em> (einziehen — въезжать, einbauen — встраивать, eingeben — вводить, einbrechen — вламываться).</p>' +
    '<p><b>Не совпадает / многозначные:</b> <em>einstellen</em> — сразу «нанимать», «настраивать» и «прекращать»; <em>einkaufen</em> — «делать покупки»; <em>Mir fällt etwas ein</em> — «мне пришло в голову». Учите в контексте.</p>',
  grammar:
    '<p><b>Отделяемая и ударная:</b> ÉINbauen. <em>Wir spielen den Patch heute Nacht ein.</em></p>' +
    '<p><b>Perfekt:</b> <em>ein·ge·baut</em>, <em>ein·ge·zogen</em> (с sein — въехать; с haben — списать деньги).</p>' +
    '<p><b>zu-инфинитив:</b> <em>Es ist Pflicht, die Frist einzuhalten.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, weil die Firma neue Leute einstellt.</em></p>'
});

GT.registerPrefix({
  id: 'um', label: 'um-', sep: 'trennbar / untrennbar', stress: 'ударная → отд. ÚMbauen · безударная → неотд. umBÁUen',
  ru: 'пере- (отделяемая: переделка, смена, опрокидывание) и об-/о- (неотделяемая: вокруг, окружение)',
  meanings: [
    { ru: 'переделка, смена, переход (отделяемая)', ruPrefix: 'ПЕРЕ-', examples: [
      { de: 'umbauen', ru: 'перестраивать' }, { de: 'umziehen', ru: 'переезжать; переодеваться' }, { de: 'umstellen', ru: 'переставлять; переходить на другую систему' }, { de: 'umsetzen', ru: 'реализовать, внедрять; пересаживать' } ] },
    { ru: 'опрокидывание, сбивание (отделяемая)', ruPrefix: 'С-, ОПРО-', examples: [
      { de: 'umfallen', ru: 'упасть, опрокинуться' }, { de: 'umwerfen', ru: 'опрокинуть' }, { de: 'úmfahren', ru: 'сбить (машиной)' } ] },
    { ru: 'поворот назад или в сторону (отделяемая)', ruPrefix: 'ПОВЕР-, ОБО-', examples: [
      { de: 'umdrehen', ru: 'поворачивать, переворачивать' }, { de: 'umkehren', ru: 'повернуть обратно' }, { de: 'sich umsehen', ru: 'оглядываться' } ] },
    { ru: 'вокруг, окружение, обход (неотделяемая!)', ruPrefix: 'ОБ-, О-', examples: [
      { de: 'umfáhren', ru: 'объезжать' }, { de: 'umstéllen', ru: 'окружать, оцеплять' }, { de: 'umbáuen', ru: 'обстраивать со всех сторон' }, { de: 'umgéhen', ru: 'обходить (правило, защиту)' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> ударная отделяемая <em>úm-</em> ≈ <em>пере-</em> (umbauen — перестраивать, umziehen — переезжать / переодеваться, umstellen — переставлять); безударная неотделяемая <em>um-</em> ≈ <em>об- / о-</em> (umfáhren — объехать, umstéllen — оцепить, umgéhen — обойти защиту).</p>' +
    '<p><b>Ловушка:</b> ударение меняет смысл на противоположный: <em>úmfahren</em> (сбить) vs <em>umfáhren</em> (объехать); <em>úmgehen mit</em> (обращаться с, отд.) vs <em>umgéhen</em> (обходить правило, неотд.).</p>',
  grammar:
    '<p><b>Двойная приставка — решает ударение:</b></p>' +
    '<p><b>Ударная → отделяемая:</b> <em>Wir stellen das System um.</em> Perfekt с ge-: <em>um·ge·stellt</em>. zu внутри: <em>umzustellen</em>.</p>' +
    '<p><b>Безударная → неотделяемая:</b> <em>Die Angreifer umgehen die Firewall.</em> Perfekt без ge-: <em>umgangen</em>. zu перед глаголом: <em>zu umgehen</em>.</p>'
});

GT.registerPrefix({
  id: 'über', label: 'über-', sep: 'trennbar / untrennbar', stress: 'чаще безударная неотд. überSÉTZen · реже ударная отд. ǘberziehen',
  ru: 'пере-, сверх-, над-: перенос на другую сторону, превышение меры, контроль сверху; реже отделяемая «поверх»',
  meanings: [
    { ru: 'перенос, передача на другую сторону (неотделяемая)', ruPrefix: 'ПЕРЕ-', examples: [
      { de: 'übersetzen', ru: 'переводить (на другой язык)' }, { de: 'übergeben', ru: 'передавать (смену, дела)' }, { de: 'überweisen', ru: 'переводить (деньги); направлять (к врачу)' }, { de: 'übernehmen', ru: 'перенимать, брать на себя' } ] },
    { ru: 'превышение нормы, лимита, меры (неотделяемая)', ruPrefix: 'ПЕРЕ-', examples: [
      { de: 'überziehen', ru: 'превышать (лимит счёта, время)' }, { de: 'übertreiben', ru: 'преувеличивать' }, { de: 'überfordern', ru: 'перегружать требованиями' }, { de: 'überlasten', ru: 'перегружать (сервер, сеть)' } ] },
    { ru: 'контроль сверху, проверка, обзор (неотделяемая)', ruPrefix: 'НАД-, ПРО-', examples: [
      { de: 'überwachen', ru: 'мониторить, наблюдать' }, { de: 'überprüfen', ru: 'проверять, перепроверять' }, { de: 'übersehen', ru: 'просмотреть, не заметить' } ] },
    { ru: 'физически поверх или через край (отделяемая!)', ruPrefix: 'НА-, ПЕРЕ-', examples: [
      { de: 'ǘberziehen', ru: 'надевать поверх (свитер)' }, { de: 'ǘbersetzen', ru: 'переправлять(ся) через реку' }, { de: 'ǘberlaufen', ru: 'переливаться через край' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> в большинстве частых глаголов <em>über-</em> ≈ <em>пере-</em> (übersetzen — переводить, übergeben — передавать, übernehmen — перенимать, überlasten — перегружать).</p>' +
    '<p><b>СМЫСЛ УШЁЛ (непрозрачные, неотд.):</b> <em>überlegen</em> — «обдумывать» (исторически от legen, но сегодня из «класть» не выводится); <em>überraschen</em> — «удивлять»; <em>überzeugen</em> — «убеждать».</p>',
  grammar:
    '<p><b>В большинстве B1-глаголов — неотделяемая и безударная</b> (переносные значения): <em>Ich übernehme das Ticket.</em> Perfekt без ge-: <em>übernommen</em>, <em>übersetzt</em>, <em>überlegt</em>.</p>' +
    '<p><b>В буквальных физических значениях — отделяемая и ударная:</b> <em>Zieh dir noch eine Jacke über.</em> Perfekt с ge-: <em>über·ge·zogen</em>.</p>'
});

GT.registerPrefix({
  id: 'vor', label: 'vor-', sep: 'trennbar', stress: 'ударная: VÓRstellen',
  ru: 'пред-, вперёд, заранее: перед кем-то, предъявление, заблаговременно, показ образца',
  meanings: [
    { ru: 'перед кем-то, предъявление, показ', ruPrefix: 'ПРЕД-', examples: [
      { de: 'vorstellen', ru: 'представлять (кого-то); представлять себе' }, { de: 'vorlegen', ru: 'предъявлять (документ, отчёт)' }, { de: 'vorzeigen', ru: 'показывать (билет, паспорт)' }, { de: 'vorschlagen', ru: 'предлагать' } ] },
    { ru: 'заранее, наперёд, перенос на раньше', ruPrefix: 'ПРЕД-, ЗА-', examples: [
      { de: 'vorbereiten', ru: 'подготавливать заранее' }, { de: 'vorziehen', ru: 'переносить на раньше; предпочитать' }, { de: 'vorgeben', ru: 'задавать (правила, требования) заранее' }, { de: 'vorbeugen', ru: 'предотвращать (проблему)' } ] },
    { ru: 'показ как образца (вслух / на примере)', ruPrefix: 'ПО-', examples: [
      { de: 'vorlesen', ru: 'читать вслух' }, { de: 'vormachen', ru: 'показывать на примере' }, { de: 'vorspielen', ru: 'сыграть (кому-то)' } ] },
    { ru: 'движение вперёд, план действий', ruPrefix: 'В-, ПРО-', examples: [
      { de: 'vorgehen', ru: 'действовать, продвигаться' }, { de: 'vorankommen', ru: 'продвигаться вперёд' }, { de: 'vorhaben', ru: 'планировать, намереваться' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> vor- ≈ <em>пред-</em> (vorstellen — представлять, vorlegen — предъявлять, vorschlagen — предлагать, vorziehen — предпочитать).</p>' +
    '<p><b>Не совпадает / переносные:</b> <em>vorkommen</em> — «встречаться, случаться» («Das kommt oft vor»); <em>vorwerfen</em> — «упрекать»; <em>etw. vorhaben</em> — «иметь планы» («Was hast du heute vor?»); <em>vorgeben</em> — ещё и «притворяться».</p>',
  grammar:
    '<p><b>Всегда отделяемая и ударная:</b> VÓRstellen. <em>Ich stelle das Projekt kurz vor.</em></p>' +
    '<p><b>Perfekt:</b> ge- внутри: <em>vor·ge·stellt</em>, <em>vor·ge·legt</em>, <em>vor·ge·zogen</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>Ich bitte Sie, den Pass vorzulegen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, weil wir den Termin vorziehen.</em></p>'
});

GT.registerPrefix({
  id: 'zu', label: 'zu-', sep: 'trennbar', stress: 'ударная: ZÚmachen',
  ru: 'за-, до-, при-, к: закрытие; направление к адресату; рост и добавление; согласие',
  meanings: [
    { ru: 'закрытие, заслон', ruPrefix: 'ЗА-', examples: [
      { de: 'zumachen', ru: 'закрывать (окно, дверь)' }, { de: 'zuziehen', ru: 'задёргивать (шторы)' }, { de: 'zustellen', ru: 'загораживать (проезд)' }, { de: 'zuschließen', ru: 'запирать на ключ' } ] },
    { ru: 'направление к цели, доставка, адресация', ruPrefix: 'ДО-, ПРИ-, К', examples: [
      { de: 'zustellen', ru: 'доставлять (посылку, почту)' }, { de: 'zugreifen', ru: 'получать доступ к (auf + Akk.)' }, { de: 'zuweisen', ru: 'назначать (тикет кому-то)' }, { de: 'zuhören', ru: 'внимательно слушать (Dat.)' } ] },
    { ru: 'прибавление, рост, увеличение', ruPrefix: 'ПРИ-, У-', examples: [
      { de: 'zunehmen', ru: 'увеличиваться, набирать вес' }, { de: 'sich zulegen', ru: 'обзавестись, купить себе; прибавить' }, { de: 'zugeben', ru: 'добавлять (ингредиент)' } ] },
    { ru: 'согласие, допуск, подтверждение', ruPrefix: 'СО-, ДО-', examples: [
      { de: 'zustimmen', ru: 'соглашаться (Dat.)' }, { de: 'zusagen', ru: 'подтверждать участие, обещать' }, { de: 'zulassen', ru: 'допускать, разрешать' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> zu- ≈ <em>за-</em> (zumachen — закрыть, zuziehen — задёрнуть шторы), ≈ <em>до-</em> (zustellen — доставить, zulassen — допустить), ≈ <em>при-</em> (zunehmen — прибавить в весе).</p>' +
    '<p><b>СМЫСЛ УШЁЛ / идиомы:</b> <em>zugeben</em> — «признавать ошибку» (исторически от «дать в придачу → уступить»); <em>sich etw. zuziehen</em> — «получить травму / подхватить простуду»; <em>zurechtkommen</em> — «справляться».</p>',
  grammar:
    '<p><b>Всегда отделяемая и ударная:</b> ZÚmachen. <em>Die Zahl der Angriffe nimmt zu.</em></p>' +
    '<p><b>Perfekt:</b> <em>zu·ge·macht</em>, <em>zu·ge·nommen</em>, <em>zu·ge·stellt</em>.</p>' +
    '<p><b>zu-инфинитив (двойное zu!):</b> <em>Vergiss nicht, die Tür zuzumachen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, weil die Zahl der Vorfälle zunimmt.</em></p>'
});


GT.registerPrefix({
  id: 'mit', label: 'mit-', sep: 'trennbar', stress: 'ударная: MÍTnehmen',
  ru: 'с-, со-, вместе: совместное действие, участие, взятие с собой, передача',
  meanings: [
    { ru: 'совместное действие, участие наравне с другими', ruPrefix: 'СО-, С-', examples: [
      { de: 'mitarbeiten', ru: 'участвовать в работе, сотрудничать' }, { de: 'mitmachen', ru: 'участвовать, присоединяться' }, { de: 'mitkommen', ru: 'пойти/поехать вместе; успевать (за объяснением)' }, { de: 'mitreden', ru: 'участвовать в обсуждении, иметь право голоса' } ] },
    { ru: 'брать, нести, везти с собой', ruPrefix: 'С СОБОЙ', examples: [
      { de: 'mitnehmen', ru: 'брать с собой; подвезти' }, { de: 'mitbringen', ru: 'приносить с собой' }, { de: 'mitführen', ru: 'иметь при себе (документы)' } ] },
    { ru: 'передача информации, доведение до сведения', ruPrefix: 'СООБЩ-', examples: [
      { de: 'mitteilen', ru: 'сообщать (официально)' }, { de: 'mitschreiben', ru: 'записывать за кем-то, конспектировать' }, { de: 'mithören', ru: 'подслушивать, слушать параллельно' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> почти всегда переводится «вместе / с собой / со-» (mitarbeiten — сотрудничать, mitnehmen — взять с собой, mitkommen — пойти вместе).</p>' +
    '<p><b>Частые ловушки:</b> <em>mitteilen</em> — официально «сообщить» (буквально «поделиться информацией с кем-то»); <em>mitbekommen / mitkriegen</em> (разг.) — «заметить, уловить, узнать»; <em>Ich komme nicht mehr mit</em> — «я уже не поспеваю за мыслью».</p>',
  grammar:
    '<p><b>Всегда отделяемая и ударная:</b> MÍTnehmen. <em>Ich nehme meinen Laptop mit.</em></p>' +
    '<p><b>Perfekt:</b> ge- внутри: <em>mit·ge·nommen</em>, <em>mit·ge·bracht</em>, <em>mit·ge·teilt</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>Vergiss nicht, den Ausweis mitzunehmen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, weil er den ganzen Tag im Projekt mitarbeitet.</em></p>'
});

GT.registerPrefix({
  id: 'nach', label: 'nach-', sep: 'trennbar', stress: 'ударная: NÁCHbauen',
  ru: 'пере-, до-, вслед: копирование по образцу, повторная проверка, вдогонку, восполнение позже',
  meanings: [
    { ru: 'по образцу, повторение, копирование', ruPrefix: 'ПЕРЕ-, С-', examples: [
      { de: 'nachbauen', ru: 'строить копию, воспроизводить по образцу' }, { de: 'nachmachen', ru: 'повторять за кем-то, подражать' }, { de: 'nachsprechen', ru: 'повторять вслух за кем-то' } ] },
    { ru: 'проверка ещё раз, уточнение, размышление', ruPrefix: 'ПЕРЕ-, ДО-', examples: [
      { de: 'nachfragen', ru: 'переспросить, уточнить' }, { de: 'nachschauen', ru: 'проверить, заглянуть (в логи, в список)' }, { de: 'nachprüfen', ru: 'перепроверить' }, { de: 'nachdenken', ru: 'размышлять, обдумывать (über + Akk.)' } ] },
    { ru: 'сделать позже, наверстать, дослать', ruPrefix: 'ДО-', examples: [
      { de: 'nachholen', ru: 'наверстать (пропущенное)' }, { de: 'nachreichen', ru: 'дослать (недостающие документы)' }, { de: 'nachbessern', ru: 'доработать, исправить недочёты' } ] },
    { ru: 'вдогонку, следом; уступка', ruPrefix: 'ВСЛЕД, У-', examples: [
      { de: 'nachlaufen', ru: 'бежать вслед' }, { de: 'nachgeben', ru: 'уступать, сдаваться (под давлением)' }, { de: 'nachlassen', ru: 'ослабевать, спадать (о боли, дожде)' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> nach- ≈ <em>пере- / до-</em> (nachfragen — переспросить, nachprüfen — перепроверить, nachreichen — дослать, nachholen — наверстать/добрать).</p>' +
    '<p><b>Важно запомнить:</b> <em>nachweisen</em> — «доказать документально» (der Nachweis); <em>nachdenken über + Akk.</em> — «думать, размышлять»; <em>nachvollziehen</em> — «понять ход мысли / воспроизвести» (очень часто в IT и офисе: «Das kann ich gut nachvollziehen»).</p>',
  grammar:
    '<p><b>Всегда отделяемая и ударная:</b> NÁCHschauen. <em>Ich schaue kurz in den Logs nach.</em></p>' +
    '<p><b>Perfekt:</b> ge- внутри: <em>nach·ge·fragt</em>, <em>nach·ge·dacht</em>, <em>nach·ge·baut</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>Wir müssen das erst nachprüfen / es ist wichtig, nachzufragen.</em></p>' +
    '<p><b>Придаточное:</b> <em>…, weil wir den Vorfall noch genau nachprüfen.</em></p>'
});

GT.registerPrefix({
  id: 'durch', label: 'durch-', sep: 'trennbar / untrennbar', stress: 'чаще ударная отд. DÚRCHführen · реже безударная неотд. durchSÚChen',
  ru: 'про-, сквозь-, до конца: движение насквозь, выполнение от начала до конца, сплошной поиск/проверка',
  meanings: [
    { ru: 'проведение до конца, выполнение полностью (отделяемая)', ruPrefix: 'ПРО-, ДО-', examples: [
      { de: 'durchführen', ru: 'проводить (тест, аудит, операцию)' }, { de: 'durchziehen', ru: 'довести до конца (разг.); протягивать насквозь' }, { de: 'durchsetzen', ru: 'провести, отстоять (решение); утвердиться' }, { de: 'durchlesen', ru: 'прочитать от начала до конца' } ] },
    { ru: 'движение сквозь, пересечение, проход (отделяемая)', ruPrefix: 'ПРО-, СКВОЗЬ', examples: [
      { de: 'durchkommen', ru: 'пройти, пробиться; дозвониться' }, { de: 'durchfahren', ru: 'проезжать без остановки' }, { de: 'durchfallen', ru: 'провалиться (на экзамене)' } ] },
    { ru: 'сплошной охват объекта, поиск внутри (неотделяемая!)', ruPrefix: 'ПРО-, ОБ-', examples: [
      { de: 'durchsuchen', ru: 'обыскивать; искать по всему объёму (Logs durchsuchen)' }, { de: 'durchdenken', ru: 'тщательно продумать' }, { de: 'durchdringen', ru: 'проникать насквозь' } ] }
  ],
  match:
    '<p><b>Совпадает:</b> durch- ≈ <em>про-</em> (durchführen — провести, durchlesen — прочитать полностью, durchsuchen — проискать/обыскать, durchkommen — пройти/пробиться).</p>' +
    '<p><b>СМЫСЛ УШЁЛ / идиомы:</b> <em>durchfallen</em> — «провалиться на экзамене» (буквально «провалиться насквозь»); <em>durchdrehen</em> (разг.) — «сойти с ума, сорваться»; <em>durchhalten</em> — «выстоять, продержаться до конца».</p>',
  grammar:
    '<p><b>Двойная приставка — решает ударение:</b></p>' +
    '<p><b>Ударная → отделяемая (большинство B1-глаголов):</b> <em>Wir führen heute ein Audit durch.</em> Perfekt с ge-: <em>durch·ge·führt</em>, <em>durch·ge·setzt</em>. zu внутри: <em>durchzuführen</em>.</p>' +
    '<p><b>Безударная → неотделяемая:</b> <em>Ich durchsuche die Firewall-Logs.</em> Perfekt без ge-: <em>durchsucht</em>, <em>durchdacht</em>. zu перед глаголом: <em>zu durchsuchen</em>.</p>'
});

GT.registerPrefix({
  id: 'be', label: 'be-', sep: 'untrennbar', stress: 'всегда безударная: beHÁNDeln',
  ru: 'переходность (+ Akk.), охват объекта, снабжение: превращает «думать о / отвечать на» в прямой винительный падеж',
  meanings: [
    { ru: 'делает глагол переходным (убирает предлог, даёт + Akk.)', ruPrefix: 'О-, ОТ-, ПО-', examples: [
      { de: 'beantworten', ru: 'отвечать НА вопрос (eine Frage beantworten)' }, { de: 'besprechen', ru: 'обсуждать (ein Thema besprechen)' }, { de: 'bedrohen', ru: 'угрожать кому-то (jdn. bedrohen)' }, { de: 'bewerben', ru: 'подавать заявку (sich bewerben)' } ] },
    { ru: 'охват поверхности или пространства целиком', ruPrefix: 'ЗА-, ОБ-', examples: [
      { de: 'bebauen', ru: 'застраивать (участок)' }, { de: 'besetzen', ru: 'занимать (место, должность)' }, { de: 'belegen', ru: 'занимать (место, память); подтверждать' }, { de: 'betreten', ru: 'входить в (помещение)' } ] },
    { ru: 'воздействие на объект, обработка, работа с ним', ruPrefix: 'ОБ-, ПО-', examples: [
      { de: 'bearbeiten', ru: 'обрабатывать (тикет, заявку)' }, { de: 'behandeln', ru: 'лечить; обращаться с; рассматривать тему' }, { de: 'beheben', ru: 'устранять (ошибку, проблему)' }, { de: 'behalten', ru: 'оставлять себе, сохранять' } ] }
  ],
  match:
    '<p><b>Главная фишка для русскоязычных:</b> <em>be-</em> часто «съедает» предлог и требует прямого Akkusativ: <em>auf eine Frage antworten → eine Frage beantworten</em>; <em>über ein Problem sprechen → ein Problem besprechen</em>; <em>jdm. drohen → jdn. bedrohen</em>.</p>' +
    '<p><b>СМЫСЛ УШЁЛ (непрозрачные):</b> <em>bekommen</em> («получать», не «приходить»), <em>bestellen</em> («заказывать», не «ставить»), <em>sich benehmen</em> («вести себя», не «брать»), <em>berichten</em> («докладывать»).</p>',
  grammar:
    '<p><b>Всегда неотделяемая и безударная:</b> <em>Ich bearbeite das Ticket.</em></p>' +
    '<p><b>Perfekt ВСЕГДА без ge-:</b> <em>bearbeitet</em>, <em>beantwortet</em>, <em>behoben</em>, <em>bestellt</em>, <em>behalten</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>zu bearbeiten</em>, <em>zu beheben</em>.</p>'
});

GT.registerPrefix({
  id: 'er', label: 'er-', sep: 'untrennbar', stress: 'всегда безударная: erKÉNNen',
  ru: 'до-, вы-, рас-, результат: достижение цели, получение, доведение до конца, переход в новое состояние',
  meanings: [
    { ru: 'достижение результата, цели, успешное завершение', ruPrefix: 'ДО-, У-, ВЫ-', examples: [
      { de: 'erreichen', ru: 'достигать; дозвониться до' }, { de: 'erkennen', ru: 'распознать, обнаружить' }, { de: 'erledigen', ru: 'выполнить, уладить (дело)' }, { de: 'erfüllen', ru: 'выполнять (требование, условие)' } ] },
    { ru: 'получение, выработка результата, замена', ruPrefix: 'ПО-, ВЫ-, ЗА-', examples: [
      { de: 'erhalten', ru: 'получать (официально); сохранять' }, { de: 'ergeben', ru: 'давать результат; получаться' }, { de: 'ersetzen', ru: 'заменять; возмещать' }, { de: 'erstellen', ru: 'создавать (отчёт, тикет, файл)' } ] },
    { ru: 'интенсивный переход в состояние (вплоть до предела)', ruPrefix: 'ЗА-, РАС-, С-', examples: [
      { de: 'erkranken', ru: 'заболеть (официально)' }, { de: 'erschöpfen', ru: 'истощить, выжать силы' }, { de: 'erklären', ru: 'объяснять (делать ясным — klar)' }, { de: 'erleichtern', ru: 'облегчать (делать лёгким — leicht)' } ] }
  ],
  match:
    '<p><b>Полезная модель:</b> <em>er- + прилагательное</em> часто значит «сделать таким» или «стать таким»: <em>klar → erklären</em> (сделать ясным → объяснить), <em>leicht → erleichtern</em> (облегчить), <em>möglich → ermöglichen</em> (сделать возможным), <em>krank → erkranken</em> (заболеть).</p>' +
    '<p><b>Непрозрачные:</b> <em>sich erholen</em> («восстанавливаться, отдыхать»), <em>erzählen</em> («рассказывать», не «считать»), <em>erfahren</em> («узнавать», не «ехать»).</p>',
  grammar:
    '<p><b>Всегда неотделяемая и безударная:</b> <em>Der Scanner erkennt die Bedrohung sofort.</em></p>' +
    '<p><b>Perfekt ВСЕГДА без ge-:</b> <em>erkannt</em>, <em>erhalten</em>, <em>erstellt</em>, <em>erledigt</em>, <em>ersetzt</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>zu erkennen</em>, <em>zu erledigen</em>.</p>'
});

GT.registerPrefix({
  id: 'ent', label: 'ent-', sep: 'untrennbar', stress: 'всегда безударная: entFÉRNen',
  ru: 'от-, раз-, де-, лишение: удаление, отмена обратного действия, лишение, а также возникновение/развитие',
  meanings: [
    { ru: 'удаление, лишение, отмена (антоним к ver-/be-)', ruPrefix: 'РАЗ-, ДЕ-, ОТ-', examples: [
      { de: 'entschlüsseln', ru: 'расшифровывать (антоним к verschlüsseln)' }, { de: 'entfernen', ru: 'удалять, убирать' }, { de: 'entziehen', ru: 'лишать, отзывать (права доступа)' }, { de: 'entlassen', ru: 'увольнять; выписывать (из больницы)' } ] },
    { ru: 'освобождение от нагрузки, облегчение', ruPrefix: 'РАЗ-, ОСВОБОД-', examples: [
      { de: 'entlasten', ru: 'разгружать (сервер, команду)' }, { de: 'entspannen', ru: 'расслаблять(ся)' }, { de: 'entsorgen', ru: 'утилизировать (мусор, технику)' } ] },
    { ru: 'возникновение, начало процесса, раскрытие', ruPrefix: 'ВОЗ-, РАЗ-, ОТ-', examples: [
      { de: 'entstehen', ru: 'возникать, появляться' }, { de: 'entwickeln', ru: 'разрабатывать, развивать' }, { de: 'entdecken', ru: 'обнаруживать, открывать' }, { de: 'entscheiden', ru: 'решать, принимать решение' } ] }
  ],
  match:
    '<p><b>Идеальная пара антонимов:</b> <em>verschlüsseln</em> (зашифровать) ↔ <em>entschlüsseln</em> (расшифровать); <em>belasten</em> (нагружать) ↔ <em>entlasten</em> (разгружать); <em>anspannen</em> (напрячь) ↔ <em>entspannen</em> (расслабить); <em>vergeben</em> (выдать права) ↔ <em>entziehen</em> (отозвать права).</p>' +
    '<p><b>Непрозрачные:</b> <em>enthalten</em> («содержать в себе» — исторически от «удерживать внутри»), <em>entsprechen</em> («соответствовать»), <em>enttäuschen</em> («разочаровывать»).</p>',
  grammar:
    '<p><b>Всегда неотделяемая и безударная:</b> <em>Wir entziehen dem Konto sofort alle Rechte.</em></p>' +
    '<p><b>Perfekt ВСЕГДА без ge-:</b> <em>entschlüsselt</em>, <em>entfernt</em>, <em>entwickelt</em>, <em>entschieden</em>, <em>entstanden</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>zu entschlüsseln</em>, <em>zu entfernen</em>.</p>'
});

GT.registerPrefix({
  id: 'zer', label: 'zer-', sep: 'untrennbar', stress: 'всегда безударная: zerSTӦRen',
  ru: 'раз-, рас-, вдребезги: разрушение на куски, распад, порча (почти всегда негативное / деструктивное действие)',
  meanings: [
    { ru: 'разрушение, уничтожение на части', ruPrefix: 'РАЗ-, РАС-', examples: [
      { de: 'zerstören', ru: 'разрушать, уничтожать' }, { de: 'zerbrechen', ru: 'разбивать(ся), ломать(ся) на куски' }, { de: 'zerreißen', ru: 'разрывать (бумагу, одежду)' }, { de: 'zerschneiden', ru: 'разрезать на куски' } ] },
    { ru: 'разделение на части, распад (в т. ч. технич.)', ruPrefix: 'РАЗ-, РАС-', examples: [
      { de: 'zerlegen', ru: 'разбирать на части, раскладывать (проблему, устройство)' }, { de: 'zerfallen', ru: 'распадаться' }, { de: 'zerkratzen', ru: 'исцарапать' } ] }
  ],
  match:
    '<p><b>Почти 100% прозрачность:</b> <em>zer-</em> — одна из самых предсказуемых немецких приставок. Почти всегда это русское <em>раз- / рас-</em> в смысле «сломать, разорвать, разбить на части».</p>' +
    '<p><b>Удобный контраст:</b> <em>brechen</em> (сломать) → <em>zerbrechen</em> (разбить вдребезги); <em>legen</em> (класть) → <em>zerlegen</em> (разобрать на составные части); <em>stören</em> (мешать) → <em>zerstören</em> (уничтожить).</p>',
  grammar:
    '<p><b>Всегда неотделяемая и безударная:</b> <em>Die Malware zerstört wichtige Systemdateien.</em></p>' +
    '<p><b>Perfekt ВСЕГДА без ge-:</b> <em>zerstört</em>, <em>zerbrochen</em>, <em>zerrissen</em>, <em>zerlegt</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>zu zerstören</em>, <em>zu zerlegen</em>.</p>'
});

GT.registerPrefix({
  id: 'ge', label: 'ge-', sep: 'untrennbar', stress: 'всегда безударная: geHӦRen',
  ru: 'историческая непродуктивная приставка: в глаголах слова учатся целиком (gehören, gefallen, gelingen), а в существительных часто даёт собирательное значение (das Gebäude)',
  meanings: [
    { ru: 'частые B1-глаголы с неотделяемой ge- (учатся целиком)', ruPrefix: '—', examples: [
      { de: 'gehören', ru: 'принадлежать (Dat.)' }, { de: 'gefallen', ru: 'нравиться (Dat.)' }, { de: 'gelingen', ru: 'удаваться (sein + Dat.)' }, { de: 'gewinnen', ru: 'выигрывать, получать' } ] },
    { ru: 'собирательные и отглагольные существительные (обычно среднего рода das!)', ruPrefix: 'СОБИР.', examples: [
      { de: 'das Gebäude', ru: 'здание (от bauen)' }, { de: 'das Gespräch', ru: 'разговор, беседа (от sprechen)' }, { de: 'das Gesetz', ru: 'закон (от setzen)' }, { de: 'das Gepäck', ru: 'багаж (от packen)' } ] }
  ],
  match:
    '<p><b>Не путать с Partizip II!</b> В глаголах <em>gehören, gefallen, gelingen, geschehen, genießen, gewöhnen</em> приставка <em>ge-</em> — часть самого инфинитива, а не показатель прошедшего времени.</p>' +
    '<p><b>Лайфхак с родом существительных:</b> подавляющее большинство существительных с приставкой <em>Ge-</em> — среднего рода (<b>das</b>): <em>das Gebäude, das Gespräch, das Gesetz, das Gerät, das Gewicht, das Gefühl, das Gehalt</em> (исключения редкие, напр. <em>die Geschichte, die Gesundheit, die Gefahr, der Gedanke</em>).</p>',
  grammar:
    '<p><b>Всегда неотделяемая и безударная:</b> <em>Das Gerät gehört zur Firma.</em></p>' +
    '<p><b>Perfekt БЕЗ второго ge-!</b> Не «gegehört», а <em>gehört</em>, <em>gefallen</em>, <em>gelungen</em>, <em>gewonnen</em>, <em>geschehen</em>.</p>' +
    '<p><b>zu-инфинитив:</b> <em>zu gehören</em>, <em>zu gewinnen</em>.</p>'
});

GT.registerPrefix({
  id: 'miss', label: 'miss-', sep: 'untrennbar', stress: 'в глаголах безударная: missVERSTÉHen · в существительных ударная: MÍSSverständnis',
  ru: 'не-, неверно-, зло-: ошибка, неудача, противоположное или злонамеренное действие',
  meanings: [
    { ru: 'ошибка, неверное действие, неудача', ruPrefix: 'НЕ-, НЕПРАВИЛЬНО', examples: [
      { de: 'missverstehen', ru: 'неправильно понять' }, { de: 'misslingen', ru: 'не удаться, провалиться (sein)' }, { de: 'das Missverständnis', ru: 'недоразумение' } ] },
    { ru: 'противоположность, отсутствие, злоупотребление', ruPrefix: 'НЕДО-, ЗЛО-', examples: [
      { de: 'missbrauchen', ru: 'злоупотреблять (правами, данными, доверием)' }, { de: 'misstrauen', ru: 'не доверять (Dat.)' }, { de: 'der Missbrauch', ru: 'злоупотребление (Datenmissbrauch)' } ] }
  ],
  match:
    '<p><b>Почти полное совпадение с англ. mis-:</b> <em>missverstehen</em> (misunderstand), <em>missbrauchen</em> (misuse/abuse), <em>misstrauen</em> (mistrust). В кибербезопасности регулярно встречаются <em>der Datenmissbrauch</em> (злоупотребление данными) и <em>ein Konto missbrauchen</em>.</p>' +
    '<p><b>Ударение меняется в существительных:</b> <em>missVERSTÉHen</em> (глагол, безударная miss-), но <em>MÍSSverständnis</em> и <em>MÍSSbrauch</em> (существительные, ударная miss-).</p>',
  grammar:
    '<p><b>Всегда неотделяемая в глаголах:</b> <em>Du hast mich missverstanden.</em> <em>Die Angreifer missbrauchen gestohlene Konten.</em></p>' +
    '<p><b>Perfekt без ge- впереди:</b> <em>missbraucht</em>, <em>misstraut</em>, <em>misslungen</em>, <em>missverstanden</em> (внимание: двойная приставка <em>miss-ver-</em>).</p>' +
    '<p><b>zu-инфинитив:</b> <em>zu missbrauchen</em>, <em>misszuverstehen</em> (редко — чаще перефразируют).</p>'
});
