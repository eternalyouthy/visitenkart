/* ROOT: führen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'führen', verb: 'führen', ru: 'вести, руководить',
  words: [
    {
      id: 'r-fuehren-fuehren', base: true, pos: 'verb',
      de: 'führen', forms: { praes: 'führt', praet: 'führte', perf: 'hat geführt' }, gov: '+ Akk. · zu + Dat.',
      ru: 'вести (дорогу, беседу, протокол); руководить (командой); приводить к (zu + Dat.)',
      examples: [
        { sense: 'приводить к результату / последствию (zu + Dat.)', de: 'Eine einzige Phishing-Mail kann zu einem schweren Sicherheitsvorfall [[führen]].', ru: 'Одно-единственное фишинговое письмо может привести к серьёзному инциденту безопасности.' },
        { sense: 'вести (переговоры, беседу, протокол) / руководить', de: 'Sie [[führt]] seit zwei Jahren ein Team aus acht Analysten.', ru: 'Она уже два года руководит командой из восьми аналитиков.' }
      ],
      morph: 'führ-en',
      meaningType: 'polysemous',
      meaningExplanation: 'führen имеет три ключевых значения: «приводить к» (zu + Dat.), «руководить командой/компанией» и «вести» (ein Gespräch / Protokoll / Buch führen).',
      meaningExamples: [{ de: 'zu einem Fehler führen', ru: 'привести к ошибке' }, { de: 'ein Gespräch / Protokoll führen', ru: 'вести беседу / протокол' }, { de: 'eine Abteilung führen', ru: 'руководить отделом' }],
      note: 'Слабый глагол: führte, hat geführt. Образован исторически как каузатив к fahren («заставлять ехать/двигаться → вести»).',
      why: {
        confidence: 'high',
        root: 'führen',
        text: 'Состав: корневой слабый глагол führ- + -en.\nПроисхождение: др.-в.-нем. fuoren — исторический каузатив к глаголу fahren («ехать, передвигаться»), то есть буквально «заставлять двигаться, сопровождать, вести». Дало целый блок деловых глаголов: durchführen, einführen, ausführen, aufführen, die Führung.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. führen',
        evidence: 'Др.-в.-нем. fuoren < герм. *fōrjan- — каузатив к fahren («вести, направлять»).'
      }
    },
    {
      id: 'r-fuehren-durchfuehren', prefix: 'durch', sep: 'trennbar', stress: 'dúrchführen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'durchführen', forms: { praes: 'führt durch', praet: 'führte durch', perf: 'hat durchgeführt' }, gov: '+ Akk.',
      ru: 'проводить, выполнять (тест, аудит, обновление, опрос, операцию)',
      parallel: 'ПРОводить (от начала до конца)',
      drill: { ru: 'проводить (аудит, тест, обновление)', de: 'ein Sicherheitsaudit ___führen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'Отделяемая durch- означает «довести от начала до конца» — полностью провести аудит или тест.' },
      examples: [
        { de: 'Einmal im Jahr [[führen]] wir einen externen Penetrationstest [[durch]].', ru: 'Раз в год мы проводим внешний пентест.' },
        { de: 'Das Update wurde am Sonntag ohne Ausfall [[durchgeführt]].', ru: 'Обновление было проведено в воскресенье без простоя.' }
      ],
      morph: 'durch-führ-en',
      note: 'Один из самых частотных деловых и IT-глаголов! Сочетается с: Test, Audit, Update, Migration, Schulung, Analyse, Wartung. Существительное: «die Durchführung».'
    },
    {
      id: 'r-fuehren-einfuehren', prefix: 'ein', sep: 'trennbar', stress: 'éinführen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'einführen', forms: { praes: 'führt ein', praet: 'führte ein', perf: 'hat eingeführt' }, gov: '+ Akk.',
      ru: 'внедрять, вводить (систему, правило, процесс); импортировать (товар)',
      parallel: 'ВВодить / внедрять',
      drill: { ru: 'внедрять, вводить (2FA, новую систему)', de: 'eine neue Regel ___führen' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'ein- означает «внутрь организации/процесса» — ввести, внедрить двухфакторную аутентификацию.' },
      examples: [
        { sense: 'внедрять, вводить (систему, правило)', de: 'Letztes Jahr haben wir im gesamten Unternehmen 2FA [[eingeführt]].', ru: 'В прошлом году мы внедрили 2FA по всей компании.' },
        { sense: 'вводить в тему / импортировать', de: 'Anna [[führt]] den neuen Kollegen diese Woche in unser SIEM [[ein]].', ru: 'Анна на этой неделе вводит нового коллегу в работу с нашим SIEM.' }
      ],
      morph: 'ein-führ-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einführen значит «внедрять, вводить» (систему, правило, налог), «вводить новичка в курс дела» (in + Akk.) и «импортировать товары» (антоним к ausführen).',
      meaningExamples: [{ de: 'ein neues Tool einführen', ru: 'внедрить новый инструмент' }, { de: 'Waren aus dem Ausland einführen', ru: 'импортировать товары из-за границы' }],
      note: 'Существительное: «die Einführung» (внедрение; вводный курс, введение).'
    },
    {
      id: 'r-fuehren-ausfuehren', prefix: 'aus', sep: 'trennbar', stress: 'áusführen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'ausführen', forms: { praes: 'führt aus', praet: 'führte aus', perf: 'hat ausgeführt' }, gov: '+ Akk.',
      ru: 'выполнять, запускать (код, скрипт, команду — IT); подробно излагать; экспортировать',
      parallel: 'ВЫполнять / ВЫвозить',
      drill: { ru: 'запускать, выполнять (скрипт, команду)', de: 'ein Skript auf dem Server ___führen' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'aus- здесь означает «довести до исполнения» — выполнить скрипт или команду на сервере.' },
      examples: [
        { sense: 'выполнять, запускать (код, скрипт — IT)', de: 'Bitte [[führen]] Sie keine unbekannten Skripte mit Admin-Rechten [[aus]].', ru: 'Пожалуйста, не запускайте неизвестные скрипты с правами администратора.' },
        { sense: 'подробно объяснять / экспортировать', de: 'Könnten Sie diesen Punkt im Bericht noch etwas genauer [[ausführen]]?', ru: 'Не могли бы вы раскрыть этот пункт в отчёте чуть подробнее?' }
      ],
      morph: 'aus-führ-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В IT ausführen — стандартный эквивалент «execute / run» (запускать код/команду); также значит «подробно излагать мысль» (отсюда «ausführlich» — подробный!) и «экспортировать».',
      meaningExamples: [{ de: 'einen Befehl ausführen', ru: 'выполнить команду (IT)' }, { de: 'etwas ausführlich ausführen', ru: 'подробно изложить что-то' }],
      note: 'В немецких интерфейсах «Als Administrator ausführen» = «Run as administrator»! Прилагательное «ausführlich» — подробный.'
    },
    {
      id: 'r-fuehren-anfuehren', prefix: 'an', sep: 'trennbar', stress: 'ánführen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'anführen', forms: { praes: 'führt an', praet: 'führte an', perf: 'hat angeführt' }, gov: '+ Akk.',
      ru: 'приводить (пример, аргумент, причину); возглавлять (группу, список)',
      examples: [
        { sense: 'приводить (аргумент, пример)', de: 'Er hat mehrere gute Argumente für die Migration [[angeführt]].', ru: 'Он привёл несколько весомых аргументов в пользу миграции.' },
        { sense: 'возглавлять (список, группу)', de: 'Ransomware [[führt]] die Liste der größten Bedrohungen [[an]].', ru: 'Шифровальщики возглавляют список главных угроз.' }
      ],
      morph: 'an-führ-en',
      meaningType: 'polysemous',
      meaningExplanation: 'anführen значит «приводить в подтверждение» (аргументы, примеры, причины) и «возглавлять, идти во главе» (списка, команды).',
      meaningExamples: [{ de: 'ein Beispiel anführen', ru: 'привести пример' }, { de: 'die Tabelle anführen', ru: 'возглавлять таблицу' }],
      note: 'Родственное: «die Anführungszeichen» — кавычки („…“)!'
    },
    {
      id: 'r-fuehren-zurueckfuehren', prefix: 'zurück', sep: 'trennbar', stress: 'zurǘckführen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'zurückführen', forms: { praes: 'führt zurück', praet: 'führte zurück', perf: 'hat zurückgeführt' }, gov: 'etw. (Akk.) auf + Akk.',
      ru: 'объяснять причиной, сводить к (auf + Akk.)',
      examples: [
        { de: 'Wir [[führen]] den Ausfall auf ein fehlerhaftes Firmware-Update [[zurück]].', ru: 'Мы объясняем этот сбой ошибочным обновлением прошивки.' },
        { de: 'Der Vorfall ist auf gestohlene Zugangsdaten [[zurückzuführen]].', ru: 'Причина инцидента кроется в украденных учётных данных.' }
      ],
      morph: 'zurück-führ-en',
      note: 'Блестящий оборот уровня B2 для отчётов и RCA (Root Cause Analysis): «ist auf + Akk. zurückzuführen» = «вызвано тем-то / восходит к причине…».'
    },
    {
      id: 'r-fuehren-weiterfuehren', prefix: 'weiter', sep: 'trennbar', stress: 'wéiterführen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'weiterführen', forms: { praes: 'führt weiter', praet: 'führte weiter', perf: 'hat weitergeführt' }, gov: '+ Akk.',
      ru: 'продолжать вести (проект, дело, работу другого человека)',
      parallel: 'вести ДАЛЬШЕ',
      examples: [
        { de: 'Während meines Urlaubs [[führt]] Lukas meine offenen Tickets [[weiter]].', ru: 'Во время моего отпуска Лукас продолжит вести мои открытые тикеты.' }
      ],
      morph: 'weiter-führ-en',
      note: 'Также: «weiterführende Informationen / Links» — дополнительные материалы / ссылки по теме.'
    },
    {
      id: 'r-fuehren-auffuehren', prefix: 'auf', sep: 'trennbar', stress: 'áufführen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'aufführen', forms: { praes: 'führt auf', praet: 'führte auf', perf: 'hat aufgeführt' }, gov: '+ Akk.',
      ru: 'перечислять, указывать (в списке, отчёте, счёте); ставить (спектакль на сцене)',
      examples: [
        { sense: 'перечислять, указывать в списке/отчёте', de: 'Im Abschlussbericht sind alle betroffenen Systeme einzeln [[aufgeführt]].', ru: 'В итоговом отчёте все затронутые системы перечислены по отдельности.' },
        { sense: 'ставить спектакль (театр)', de: 'Das Theater [[führt]] nächste Woche ein neues Stück [[auf]].', ru: 'Театр на следующей неделе ставит новую пьесу.' }
      ],
      morph: 'auf-führ-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В деловых документах aufführen значит «указать/перечислить в списке или таблице» («wie oben aufgeführt»), а в культуре — «ставить пьесу/оперу на сцене».',
      meaningExamples: [{ de: 'alle Punkte in der Liste aufführen', ru: 'перечислить все пункты в списке' }, { de: 'eine Oper aufführen', ru: 'поставить оперу' }],
      note: 'Частая канцелярская ссылка в письмах и отчётах: «wie unten aufgeführt» — как указано ниже.'
    },
    {
      id: 'r-fuehren-vorfuehren', prefix: 'vor', sep: 'trennbar', stress: 'vórführen', pos: 'verb',
      transparency: 'transparent',
      de: 'vorführen', forms: { praes: 'führt vor', praet: 'führte vor', perf: 'hat vorgeführt' }, gov: '+ Akk.',
      ru: 'демонстрировать в действии (продукт, софт, демо)',
      parallel: 'показывать (демо)',
      prefixDrill: { ex: 0, meaning: 2, explain: 'vor- здесь означает «показать наглядно, как образец» — продемонстрировать инструмент команде.' },
      examples: [
        { de: 'Der Anbieter [[führt]] uns morgen das neue EDR-System live [[vor]].', ru: 'Завтра вендор продемонстрирует нам новую систему EDR вживую.' }
      ],
      morph: 'vor-führ-en',
      note: 'Существительное «die Vorführung» — демонстрация, показ (демо или кинопоказ).'
    },
    {
      id: 'r-fuehren-mitfuehren', prefix: 'mit', sep: 'trennbar', stress: 'mítführen', pos: 'verb',
      transparency: 'transparent',
      de: 'mitführen', forms: { praes: 'führt mit', praet: 'führte mit', perf: 'hat mitgeführt' }, gov: '+ Akk.',
      ru: 'иметь при себе, возить с собой (документы, права, аптечку — офиц.)',
      parallel: 'иметь ПРИ СЕБЕ',
      prefixDrill: { ex: 0, meaning: 1, explain: 'mit- здесь означает «при себе, с собой» — официально «иметь при себе документ».' },
      examples: [
        { de: 'Beim Autofahren muss man den Führerschein immer [[mitführen]].', ru: 'За рулём всегда нужно иметь при себе водительские права.' }
      ],
      morph: 'mit-führ-en',
      note: 'Официальный синоним «dabeihaben / mitnehmen» — часто в законах, правилах авиакомпаний и ПДД.'
    },
    {
      id: 'r-fuehren-fuehrung', pos: 'noun',
      alsoIn: [['words', 'leisure']], // Wortliste p. 42
      de: 'Führung', article: 'die', plural: 'die Führungen',
      transparency: 'transparent',
      ru: 'руководство, менеджмент; экскурсия (с гидом); лидерство (в счёте)',
      examples: [
        { sense: 'руководство, управление', de: 'Unter der neuen [[Führung]] arbeitet die IT-Abteilung deutlich transparenter.', ru: 'Под новым руководством IT-отдел работает заметно прозрачнее.' },
        { sense: 'экскурсия', de: 'Am Samstag machen wir eine [[Führung]] durch das Museum.', ru: 'В субботу мы идём на экскурсию по музею.' }
      ],
      morph: 'Führ-ung',
      meaningType: 'polysemous',
      meaningExplanation: 'die Führung — это «руководство/менеджмент» (die Geschäftsführung, die Führungskraft), «экскурсия с гидом» и «лидерство» (в спорте: in Führung gehen).',
      meaningExamples: [{ de: 'die Geschäftsführung', ru: 'руководство компании' }, { de: 'eine Stadtführung buchen', ru: 'забронировать экскурсию по городу' }],
      note: '«Die Führungskraft» — руководитель, менеджер; «die Geschäftsführung» — руководство компании (C-level).'
    },
    {
      id: 'r-fuehren-fuehrerschein', pos: 'noun',
      de: 'Führerschein', article: 'der', plural: 'die Führerscheine',
      transparency: 'transparent',
      ru: 'водительские права',
      examples: [
        { de: 'Nach dem Umzug nach Deutschland musste ich meinen [[Führerschein]] umschreiben lassen.', ru: 'После переезда в Германию мне пришлось переделать (обменять) водительские права.' }
      ],
      morph: 'Führ-er-schein',
      note: '«Den Führerschein machen» — получить права; «umschreiben lassen» — обменять иностранные права на немецкие.'
    },
    {
      id: 'r-fuehren-einfuehrung', pos: 'noun',
      de: 'Einführung', article: 'die', plural: 'die Einführungen',
      transparency: 'transparent',
      ru: 'внедрение (системы, правила); введение, вводный курс',
      examples: [
        { de: 'Die [[Einführung]] des neuen Ticketsystems hat zwei Monate gedauert.', ru: 'Внедрение новой тикет-системы заняло два месяца.' }
      ],
      morph: 'Ein-führ-ung',
      note: 'От einführen: «eine kurze Einführung geben» — провести краткий вводный инструктаж.'
    },
    {
      id: 'r-fuehren-durchfuehrung', pos: 'noun',
      de: 'Durchführung', article: 'die', plural: 'die Durchführungen',
      transparency: 'transparent',
      ru: 'проведение, реализация, выполнение (проекта, теста, аудита)',
      examples: [
        { de: 'Für die [[Durchführung]] der Wartung brauchen wir ein Zeitfenster am Wochenende.', ru: 'Для проведения техработ нам нужно временное окно на выходных.' }
      ],
      morph: 'Durch-führ-ung',
      note: 'От durchführen. Очень часто в проектной документации и переписке с заказчиками.'
    }
  ]
});
