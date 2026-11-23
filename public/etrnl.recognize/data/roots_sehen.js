/* ROOT: sehen. Learning content in Russian. Fields: base, prefix, sep, stress, parallel, transparency, core, drill, prefixDrill, meaningType, why. */
GT.registerRoot({
  id: 'sehen', verb: 'sehen', ru: 'видеть, смотреть',
  words: [
    {
      id: 'r-sehen-sehen', base: true, pos: 'verb',
      de: 'sehen', forms: { praes: 'sieht', praet: 'sah', perf: 'hat gesehen' }, gov: '+ Akk.',
      ru: 'видеть, смотреть; считать, рассматривать (как-то)',
      examples: [
        { sense: 'видеть (глазами)', de: 'In den Firewall-Logs [[sieht]] man sofort die verdächtige IP-Adresse.', ru: 'В логах файрвола сразу видно подозрительный IP-адрес.' },
        { sense: 'смотреть на вопрос, оценивать', de: 'Ich [[sehe]] das genauso wie du.', ru: 'Я смотрю на это точно так же, как ты.' }
      ],
      morph: 'seh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'sehen значит и физическое «видеть», и выражение мнения «рассматривать, оценивать» («Ich sehe das anders» — я смотрю на это иначе).',
      meaningExamples: [{ de: 'Hast du meine Nachricht gesehen?', ru: 'Ты видел моё сообщение?' }, { de: 'Ich sehe das ein bisschen anders.', ru: 'Я смотрю на это немного иначе.' }],
      note: 'Сильный глагол с e→ie: du siehst, er sieht; sah, hat gesehen. «Mal sehen!» — «Посмотрим!».',
      why: {
        confidence: 'high',
        root: 'sehen',
        text: 'Состав: корневой сильный глагол seh- + -en.\nПроисхождение: общегерманский глагол (др.-в.-нем. sehan «видеть», родственно английскому see). От него и основы -sicht- (через древнее отглагольное образование) возникло огромное семейство: Sicht, Ansicht, Übersicht, vorsichtig, Absicht.\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. sehen / Sicht',
        evidence: 'Др.-в.-нем. sehan < герм. *sehwan- «видеть» (родств. англ. see); отглагольная основа Sicht.'
      }
    },
    {
      id: 'r-sehen-ansehen', prefix: 'an', sep: 'trennbar', stress: 'ánsehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'ansehen', forms: { praes: 'sieht an', praet: 'sah an', perf: 'hat angesehen' }, gov: '(sich Dat.) etw. (Akk.) · jdn./etw. als',
      ru: 'смотреть, осматривать, проверять (sich Dat. etw. ansehen); считать кем-то/чем-то (als)',
      parallel: 'ПОсмотреть на / ОСмотреть',
      drill: { ru: 'посмотреть, проверить (логи, документ)', de: 'Ich sehe mir die Logs ___' },
      prefixDrill: { ex: 0, meaning: 3, explain: 'an- направляет взгляд на конкретный объект — «посмотреть на, внимательно изучить логи».' },
      examples: [
        { sense: 'посмотреть, изучить (sich Dat. etw. ansehen)', de: 'Ich [[sehe]] mir das Ticket gleich nach dem Meeting [[an]].', ru: 'Я посмотрю этот тикет сразу после встречи.' },
        { sense: 'считать, расценивать (als)', de: 'Wir [[sehen]] diese Lücke als kritisches Risiko [[an]].', ru: 'Мы расцениваем эту дыру как критический риск.' }
      ],
      morph: 'an-seh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'sich (Dat.) etw. ansehen — стандартное «посмотреть, проверить» (логи, фильм, квартиру), а jdn./etw. als … ansehen — «считать, расценивать как…».',
      meaningExamples: [{ de: 'sich einen Film / ein Ticket ansehen', ru: 'посмотреть фильм / тикет' }, { de: 'etw. als Erfolg ansehen', ru: 'считать что-то успехом' }],
      note: 'В Германии чуть разговорнее и на юге чаще говорят «anschauen» («Ich schaue mir das an») — смысл тот же.'
    },
    {
      id: 'r-sehen-aussehen', prefix: 'aus', sep: 'trennbar', stress: 'áussehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'aussehen', forms: { praes: 'sieht aus', praet: 'sah aus', perf: 'hat ausgesehen' }, gov: '+ Adj. / wie + Nom.',
      ru: 'выглядеть',
      parallel: 'ВЫглядеть',
      drill: { ru: 'выглядеть (подозрительно, хорошо)', de: 'Die Mail sieht verdächtig ___' },
      prefixDrill: { ex: 0, meaning: 0, explain: 'aus- здесь указывает на внешний вид, обращённый наружу — как объект «выглядит» (ср. рус. вы-глядеть).' },
      examples: [
        { de: 'Die E-Mail [[sieht]] auf den ersten Blick echt [[aus]], ist aber Phishing.', ru: 'На первый взгляд письмо выглядит настоящим, но это фишинг.' },
        { de: 'Wie [[sieht]] es bei dir nächste Woche mit dem Urlaub [[aus]]?', ru: 'Как у тебя обстоят дела с отпуском на следующей неделе?' }
      ],
      morph: 'aus-seh-en',
      note: '«Wie sieht es aus (mit …)?» — очень живой офисный вопрос «Как дела с …? / Что там по …?». «Das Aussehen» — внешность.'
    },
    {
      id: 'r-sehen-uebersehen', prefix: 'über', sep: 'untrennbar', stress: 'überséhen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'übersehen', forms: { praes: 'übersieht', praet: 'übersah', perf: 'hat übersehen' }, gov: '+ Akk.',
      ru: 'не заметить, просмотреть, упустить из виду',
      parallel: 'ПРОсмотреть / не заметить',
      drill: { ru: 'не заметить, упустить из виду (деталь, алерт)', de: 'einen wichtigen Hinweis ___sehen' },
      prefixDrill: { ex: 0, meaning: 2, explain: 'Безударная неотделяемая über- (взгляд поверх/мимо) даёт значение «просмотреть, не заметить».' },
      examples: [
        { de: 'In der Hektik haben wir leider einen wichtigen Hinweis in den Logs [[übersehen]].', ru: 'В спешке мы, к сожалению, просмотрели важный признак в логах.' },
        { de: 'Sorry, deine Nachricht habe ich völlig [[übersehen]]!', ru: 'Извини, твоё сообщение я совершенно не заметил!' }
      ],
      morph: 'über-seh-en',
      note: 'Неотделяемый (hat übersehen — без ge-!). Отличная честная фраза, когда пропустил письмо или баг: «Das habe ich leider übersehen».'
    },
    {
      id: 'r-sehen-einsehen', prefix: 'ein', sep: 'trennbar', stress: 'éinsehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einsehen', forms: { praes: 'sieht ein', praet: 'sah ein', perf: 'hat eingesehen' }, gov: '+ Akk.',
      ru: 'понять, осознать, признать (ошибку, необходимость); заглянуть в, просмотреть (документ, акты)',
      drill: { ru: 'просмотреть (документы); осознать (ошибку)', de: 'seinen Fehler ___sehen' },
      prefixDrill: { ex: 1, meaning: 0, explain: 'ein- означает взгляд внутрь — «заглянуть в документы/логи и просмотреть их».' },
      examples: [
        { sense: 'осознать, признать (ошибку, необходимость)', de: 'Nach dem Vorfall haben alle [[eingesehen]], dass 2FA Pflicht sein muss.', ru: 'После инцидента все осознали, что 2FA должна быть обязательной.' },
        { sense: 'просмотреть, иметь доступ к просмотру (документов)', de: 'Nur befugte Mitarbeiter dürfen diese Personalakten [[einsehen]].', ru: 'Только уполномоченные сотрудники имеют право просматривать эти личные дела.' }
      ],
      morph: 'ein-seh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'einsehen значит «осознать, признать свою неправоту/необходимость» и официально-правовое «просматривать документы, иметь доступ на чтение».',
      meaningExamples: [{ de: 'Ich sehe ein, dass das ein Fehler war.', ru: 'Я признаю, что это была ошибка.' }, { de: 'Daten im System einsehen', ru: 'просматривать данные в системе' }],
      note: '«Die Einsicht» — 1) осознание, понимание; 2) право ознакомления с документами («Akteneinsicht»).'
    },
    {
      id: 'r-sehen-nachsehen', prefix: 'nach', sep: 'trennbar', stress: 'náchsehen', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'nachsehen', forms: { praes: 'sieht nach', praet: 'sah nach', perf: 'hat nachgesehen' }, gov: 'in + Dat. / ob',
      ru: 'проверить, посмотреть (в системе, календаре, списке)',
      parallel: 'ПЕРЕпроверить / заглянуть',
      drill: { ru: 'проверить, заглянуть (в календарь, логи)', de: 'Ich sehe kurz im Kalender ___' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'nach- здесь означает «проверить ещё раз, уточнить» — заглянуть в календарь или логи.' },
      examples: [
        { de: 'Moment, ich [[sehe]] kurz im Kalender [[nach]], wann ich Zeit habe.', ru: 'Секунду, я быстро проверю в календаре, когда у меня есть время.' },
        { de: 'Kannst du bitte [[nachsehen]], ob der Server wieder online ist?', ru: 'Можешь, пожалуйста, посмотреть, вернулся ли сервер в сеть?' }
      ],
      morph: 'nach-seh-en',
      note: 'Разговорный синоним — «nachschauen / nachgucken» («Ich schaue kurz nach»).'
    },
    {
      id: 'r-sehen-vorsehen', prefix: 'vor', sep: 'trennbar', stress: 'vórsehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vorsehen', forms: { praes: 'sieht vor', praet: 'sah vor', perf: 'hat vorgesehen' }, gov: '+ Akk. · sich vorsehen (vor + Dat.)',
      ru: 'предусматривать (планом, законом, бюджетом); (sich vorsehen) остерегаться, быть осторожным',
      parallel: 'ПРЕДусматривать',
      drill: { ru: 'предусматривать (по плану, по политике)', de: 'Der Plan sieht Tests ___' },
      prefixDrill: { ex: 0, meaning: 1, explain: 'vor- означает «заранее, наперёд» — политика заранее предусматривает регулярные тесты.' },
      examples: [
        { sense: 'предусматривать (планом, политикой)', de: 'Unsere Sicherheitsrichtlinie [[sieht]] regelmäßige Backups [[vor]].', ru: 'Наша политика безопасности предусматривает регулярные бэкапы.' },
        { sense: 'остерегаться (sich vorsehen)', de: 'Bei solchen E-Mails muss man [[sich]] wirklich [[vorsehen]].', ru: 'С такими письмами нужно быть действительно осторожным.' }
      ],
      morph: 'vor-seh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Переходное vorsehen — деловое «предусматривать (по плану/закону)», а возвратное sich vorsehen — «остерегаться, быть начеку».',
      meaningExamples: [{ de: 'Das Budget sieht zwei neue Stellen vor.', ru: 'Бюджет предусматривает две новые ставки.' }, { de: 'Sieh dich vor!', ru: 'Берегись / будь осторожен!' }],
      note: 'Очень часто в пассиве состояния: «Das ist im Vertrag nicht vorgesehen» — это договором не предусмотрено. Отсюда же «die Vorsicht» (осторожность) и «vorsichtig»!'
    },
    {
      id: 'r-sehen-absehen', prefix: 'ab', sep: 'trennbar', stress: 'ábsehen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'absehen', forms: { praes: 'sieht ab', praet: 'sah ab', perf: 'hat abgesehen' }, gov: 'von + Dat. / + Akk.',
      ru: '(von + Dat.) воздержаться от; (abgesehen von) помимо, не считая; предвидеть (последствия)',
      examples: [
        { sense: 'помимо, не считая (abgesehen von + Dat.)', de: '[[Abgesehen]] von ein paar Fehlalarmen war die Nachtschicht ruhig.', ru: 'Не считая пары ложных срабатываний, ночная смена была спокойной.' },
        { sense: 'предвидеть, оценить масштаб', de: 'Die Folgen des Datenlecks sind noch nicht [[abzusehen]].', ru: 'Последствия утечки данных пока невозможно оценить до конца.' }
      ],
      morph: 'ab-seh-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Чаще всего встречается в обороте abgesehen von + Dat. («не считая, помимо»), но также значит «воздержаться от» (von einer Maßnahme absehen) и «предвидеть конец/масштаб».',
      meaningExamples: [{ de: 'Abgesehen davon stimmt alles.', ru: 'Помимо этого всё верно.' }, { de: 'Das Ende ist noch nicht abzusehen.', ru: 'Конца пока не видно.' }],
      note: '«Abgesehen davon, dass …» — отличная связка уровня B2 («не говоря уже о том, что…»).'
    },
    {
      id: 'r-sehen-zusehen', prefix: 'zu', sep: 'trennbar', stress: 'zúsehen', pos: 'verb',
      transparency: 'transparent',
      de: 'zusehen', forms: { praes: 'sieht zu', praet: 'sah zu', perf: 'hat zugesehen' }, gov: '+ Dat.',
      ru: 'наблюдать со стороны, смотреть (как кто-то что-то делает)',
      parallel: 'наблюдать ЗА',
      prefixDrill: { ex: 0, meaning: 1, explain: 'zu- направляет внимание к объекту (Dativ) — «наблюдать за тем, как кто-то работает».' },
      examples: [
        { de: 'Am ersten Tag habe ich einem erfahrenen Kollegen bei der Analyse [[zugesehen]].', ru: 'В первый день я наблюдал, как опытный коллега проводит анализ.' }
      ],
      morph: 'zu-seh-en',
      note: 'Требует Dativ лица («einem Kollegen zusehen»). Разговорно также: «Sieh zu, dass du pünktlich bist!» — «Постарайся не опоздать!».'
    },
    {
      id: 'r-sehen-fernsehen', prefix: 'fern', sep: 'trennbar', stress: 'férnsehen', pos: 'verb',
      transparency: 'transparent',
      de: 'fernsehen', forms: { praes: 'sieht fern', praet: 'sah fern', perf: 'hat ferngesehen' },
      ru: 'смотреть телевизор',
      examples: [
        { de: 'Abends [[sehe]] ich selten [[fern]], ich lese lieber.', ru: 'По вечерам я редко смотрю телевизор, предпочитаю читать.' }
      ],
      morph: 'fern-seh-en',
      note: 'Калька с греч.-лат. television (tele «далеко» → fern + vision → sehen). «Der Fernseher» — сам телевизор, «das Fernsehen» — телевидение.'
    },
    {
      id: 'r-sehen-wiedersehen', prefix: 'wieder', sep: 'trennbar', stress: 'wíedersehen', pos: 'verb',
      transparency: 'transparent',
      de: 'wiedersehen', forms: { praes: 'sieht wieder', praet: 'sah wieder', perf: 'hat wiedergesehen' }, gov: '+ Akk.',
      ru: 'увидеться снова',
      examples: [
        { de: 'Es war schön, die alten Kollegen auf der Konferenz [[wiederzusehen]].', ru: 'Было приятно снова увидеть старых коллег на конференции.' }
      ],
      morph: 'wieder-seh-en',
      note: 'Отсюда «Auf Wiedersehen!» (буквально «до нового свидания!»). Пишется wieder- с ie («снова»), в отличие от wider- («против»).'
    },
    {
      id: 'r-sehen-sicht', pos: 'noun',
      de: 'Sicht', article: 'die',
      transparency: 'transparent',
      ru: 'видимость (на дороге); точка зрения, взгляд («aus meiner Sicht»)',
      examples: [
        { sense: 'точка зрения, взгляд', de: 'Aus meiner [[Sicht]] sollten wir die Firewall-Regel sofort anpassen.', ru: 'С моей точки зрения, нам стоит сразу скорректировать правило файрвола.' },
        { sense: 'видимость (погода)', de: 'Wegen des Nebels war die [[Sicht]] auf der Autobahn sehr schlecht.', ru: 'Из-за тумана видимость на автобане была очень плохой.' }
      ],
      morph: 'Sicht',
      meaningType: 'polysemous',
      meaningExplanation: 'die Sicht — это и физическая видимость (на дороге, из окна), и деловая «точка зрения» («aus meiner Sicht», «aus Sicht der IT-Sicherheit»).',
      meaningExamples: [{ de: 'aus meiner Sicht', ru: 'с моей точки зрения' }, { de: 'schlechte Sicht bei Nebel', ru: 'плохая видимость в тумане' }],
      note: '«Aus meiner Sicht» — один из лучших профессиональных вариантов для «по-моему». Обычно без мн. ч.'
    },
    {
      id: 'r-sehen-uebersicht', pos: 'noun',
      de: 'Übersicht', article: 'die', plural: 'die Übersichten',
      transparency: 'transparent',
      ru: 'обзор, сводка, общая картина',
      examples: [
        { de: 'Das Dashboard gibt uns eine gute [[Übersicht]] über alle offenen Alerts.', ru: 'Дашборд даёт нам хороший обзор всех открытых алертов.' }
      ],
      morph: 'Über-sicht',
      note: '«Die Übersicht behalten / verlieren» — сохранять / потерять общую картину. Прилагательное «übersichtlich» — наглядный, понятный («eine übersichtliche Tabelle»).'
    },
    {
      id: 'r-sehen-ansicht', pos: 'noun',
      de: 'Ansicht', article: 'die', plural: 'die Ansichten',
      transparency: 'figurative',
      ru: 'мнение, взгляд; вид (в интерфейсе, на открытке)',
      examples: [
        { sense: 'мнение, точка зрения', de: 'Ich bin der [[Ansicht]], dass wir erst testen sollten.', ru: 'Я придерживаюсь мнения, что нам сначала стоит протестировать.' },
        { sense: 'вид / режим отображения (UI)', de: 'Du kannst oben rechts zur Tabellen-[[Ansicht]] wechseln.', ru: 'Справа сверху можно переключиться на табличный вид.' }
      ],
      morph: 'An-sicht',
      meaningType: 'polysemous',
      meaningExplanation: 'die Ansicht значит «мнение, убеждение» («meiner Ansicht nach») и «вид / режим отображения» (в программе, окне или на фотографии).',
      meaningExamples: [{ de: 'Meiner Ansicht nach ist das sinnvoll.', ru: 'На мой взгляд, это разумно.' }, { de: 'die mobile Ansicht der Webseite', ru: 'мобильный вид сайта' }],
      note: '«Meiner Ansicht nach» — чуть более книжный синоним «Meiner Meinung nach».'
    },
    {
      id: 'r-sehen-absicht', pos: 'noun',
      de: 'Absicht', article: 'die', plural: 'die Absichten',
      transparency: 'opaque',
      ru: 'намерение, умысел («mit Absicht» — нарочно)',
      examples: [
        { de: 'Keine Sorge, ich habe die Datei nicht mit [[Absicht]] gelöscht.', ru: 'Не переживай, я удалил файл не нарочно.' }
      ],
      morph: 'Ab-sicht',
      note: '«Mit Absicht» = «absichtlich» (нарочно, специально); «ohne Absicht» = «unabsichtlich» / «aus Versehen» (случайно).',
      why: {
        confidence: 'high',
        root: 'sehen',
        text: 'Состав: ab- + die Sicht («зрение, взгляд», от sehen).\nПроисхождение: в XVII в. слово Absicht означало «нацеленный взгляд, прицел» (от глагола absehen «высматривать цель»), откуда быстро закрепилось в значении «цель, намерение, умысел».\nПрозрачность: непрозрачное — современное sehen само по себе не подсказывает смысл «намерение».',
        source: 'DWDS (Pfeifer), s.v. Absicht',
        evidence: 'С XVII в. от absehen («высматривать, нацеливаться») + Sicht → «цель, намерение».'
      }
    }
  ]
});
