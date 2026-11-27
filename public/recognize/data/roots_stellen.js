/* ROOT: stellen. Learning content in Russian. */
GT.registerRoot({
  id: 'stellen', verb: 'stellen', ru: 'ставить (вертикально)',
  words: [
    {
      id: 'r-stellen-stellen', base: true, pos: 'verb',
      de: 'stellen', forms: { praes: 'stellt', praet: 'stellte', perf: 'hat gestellt' }, gov: '+ Akk.; wohin? (Akk.)',
      ru: 'ставить (вертикально); задавать (вопрос), ставить (задачу, условие)',
      examples: [
        { sense: 'ставить вертикально', de: '[[Stell]] die Flaschen bitte in den Kühlschrank.', ru: 'Поставь, пожалуйста, бутылки в холодильник.' },
        { sense: 'задавать (вопрос), подавать (заявление)', de: 'Darf ich noch eine Frage [[stellen]]?', ru: 'Можно задать ещё один вопрос?' }
      ],
      morph: 'stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Помимо физического «ставить вертикально», stellen образует множество устойчивых деловых сочетаний: eine Frage / einen Antrag / Bedingungen stellen.',
      meaningExamples: [{ de: 'die Tasse auf den Tisch stellen', ru: 'поставить чашку на стол' }, { de: 'eine Frage / einen Antrag stellen', ru: 'задать вопрос / подать заявление' }],
      note: 'stellen — ставить вертикально, legen — класть горизонтально, setzen — сажать / ставить «садя». Куда? → Akkusativ: «in den Kühlschrank stellen». Устойчиво: eine Frage / einen Antrag / eine Bedingung stellen.',
      why: {
        confidence: 'high',
        root: 'stellen',
        text: 'Состав: корневой глагол stell- + -en.\nПроисхождение: древневерхненемецкое stellen образовано от существительного der Stall в его старом широком значении «место, стоянка, положение» — буквально «помещать на место». Из того же корня происходит die Stelle («место», а позже «должность»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. stellen / Stelle / Stall',
        evidence: 'Др.-в.-нем. stellen «помещать на место», производное от Stall («место, стоянка»); отсюда же die Stelle.'
      }
    },
    {
      id: 'r-stellen-vorstellen', prefix: 'vor', sep: 'trennbar', stress: 'vórstellen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'vorstellen', forms: { praes: 'stellt vor', praet: 'stellte vor', perf: 'hat vorgestellt' }, gov: 'jdm. jdn./etw.; sich (Dat.) etw.',
      ru: 'представлять (кого-то, проект); (sich etw. vorstellen) представлять себе',
      parallel: 'ПРЕДставлять',
      prefixDrill: { ex: 0, meaning: 0, explain: 'vor- здесь означает «перед кем-то, предъявление» — представить коллегу (рус. пред-ставить).' },
      examples: [
        { sense: 'представлять кого-то (Akk.)', de: 'Darf ich Ihnen meine Kollegin [[vorstellen]]?', ru: 'Разрешите представить вам мою коллегу?' },
        { sense: 'представлять себе, воображать (sich Dat.)', de: 'Ich kann mir gut [[vorstellen]], im Ausland zu arbeiten.', ru: 'Я вполне могу представить себе работу за границей.' },
        { sense: 'представиться (sich Akk.)', de: 'Ich [[stelle]] mich kurz [[vor]]: Ich bin neu im SOC-Team.', ru: 'Коротко представлюсь: я новый сотрудник в команде SOC.' }
      ],
      morph: 'vor-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Значение зависит от sich и падежа: jdn./etw. vorstellen — «представить кого-то/проект», sich (Akk.) vorstellen — «представиться», sich (Dat.) vorstellen — «вообразить».',
      meaningExamples: [{ de: 'Ich stelle das Konzept vor.', ru: 'Я представляю концепцию.' }, { de: 'Darf ich mich vorstellen?', ru: 'Разрешите представиться.' }, { de: 'Ich kann mir das gut vorstellen.', ru: 'Я легко могу себе это представить.' }],
      note: 'Падеж решает смысл: «sich (Akk.) vorstellen» — представиться («Ich stelle mich kurz vor»); «sich (Dat.) etw. vorstellen» — вообразить («Stell dir vor!» — представь себе!). Существительное: die Vorstellung.',
      why: {
        confidence: 'high',
        root: 'stellen',
        text: 'Состав: отделяемая приставка vor- («перед») + stellen («ставить»).\nПроисхождение: буквальное «поставить перед кем-то» перешло в «представить человека/проект» и с XVII–XVIII вв. в «поставить образ перед мысленным взором → вообразить» (sich Dat. vorstellen). Русское «пред-ставлять» устроено по той же модели.\nПрозрачность: переносная, внутренняя форма легко читается.',
        source: 'DWDS (Pfeifer), s.v. vorstellen',
        evidence: 'vor- + stellen «поставить перед кем-то» → «представить» и (с XVII–XVIII вв.) «вообразить».'
      }
    },
    {
      id: 'r-stellen-ausstellen', prefix: 'aus', sep: 'trennbar', stress: 'áusstellen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'ausstellen', forms: { praes: 'stellt aus', praet: 'stellte aus', perf: 'hat ausgestellt' }, gov: '+ Akk.',
      ru: 'выдавать, выписывать (документ, справку, счёт); выставлять (экспонаты); (разг.) выключать (прибор)',
      parallel: 'ВЫставлять (на выставке; счёт)',
      prefixDrill: { ex: 1, meaning: 3, explain: 'aus- здесь означает «выставление, оформление» — картины выставлены в музее (рус. вы-ставлять).' },
      examples: [
        { sense: 'выдавать, выписывать (документ, счёт)', de: 'Das Bürgeramt hat mir einen neuen Pass [[ausgestellt]].', ru: 'Бюргерамт выдал мне новый паспорт.' },
        { sense: 'выставлять (экспонаты)', de: 'Im Museum werden gerade Bilder von Klimt [[ausgestellt]].', ru: 'Сейчас в музее выставлены картины Климта.' }
      ],
      morph: 'aus-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ausstellen значит «выписывать, выдавать» (документ, счёт, справку), «выставлять экспонаты» и в разговорной речи — «выключать прибор».',
      meaningExamples: [{ de: 'eine Rechnung / Bescheinigung ausstellen', ru: 'выписать счёт / справку' }, { de: 'Bilder im Museum ausstellen', ru: 'выставлять картины в музее' }],
      note: '«Eine Rechnung ausstellen» — выставить счёт, точно как по-русски. «Ein Zertifikat ausstellen» — выпустить сертификат (в IT!). Существительное: die Ausstellung — выставка.'
    },
    {
      id: 'r-stellen-einstellen', prefix: 'ein', sep: 'trennbar', stress: 'éinstellen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'einstellen', forms: { praes: 'stellt ein', praet: 'stellte ein', perf: 'hat eingestellt' }, gov: '+ Akk.',
      ru: 'нанимать (на работу); настраивать; прекращать',
      parallel: 'НАстраивать (параметры)',
      prefixDrill: { ex: 1, meaning: 2, explain: 'ein- здесь означает «настройка, запуск» — настроить язык интерфейса.' },
      examples: [
        { sense: 'нанимать (в штат)', de: 'Die Firma hat dieses Jahr zehn neue Leute [[eingestellt]].', ru: 'В этом году фирма наняла десять новых людей.' },
        { sense: 'настраивать (параметры)', de: 'Wo kann ich die Sprache [[einstellen]]?', ru: 'Где можно настроить язык?' },
        { sense: 'прекращать (работу, деятельность)', de: 'Der Support für das alte Betriebssystem wurde [[eingestellt]].', ru: 'Поддержку старой операционной системы прекратили.' }
      ],
      morph: 'ein-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Три совершенно разных словарных значения: «нанять в штат», «настроить параметры» и «прекратить деятельность/поддержку».',
      meaningExamples: [{ de: 'zwei neue Analysten einstellen', ru: 'нанять двух новых аналитиков' }, { de: 'die Sprache in den Einstellungen einstellen', ru: 'настроить язык' }, { de: 'Der Support wird eingestellt.', ru: 'Поддержка прекращается.' }],
      note: 'Три частых значения: нанять, настроить, прекратить («Der Betrieb wurde eingestellt» — работу прекратили). «Die Einstellungen» (мн. ч.) — настройки; «die Einstellung zu + Dat.» — отношение к чему-то. Также очень частое возвратное «sich auf + Akk. einstellen» — настроиться, подготовиться к чему-то («Wir müssen uns auf längere Wartezeiten einstellen»).'
    },
    {
      id: 'r-stellen-abstellen', prefix: 'ab', sep: 'trennbar', stress: 'ábstellen', pos: 'verb',
      transparency: 'figurative',
      de: 'abstellen', forms: { praes: 'stellt ab', praet: 'stellte ab', perf: 'hat abgestellt' }, gov: '+ Akk.',
      ru: 'ставить (оставлять где-то); отключать (воду, газ); устранять (недостаток)',
      prefixDrill: { ex: 1, meaning: 3, explain: 'ab- здесь означает «отключение, прекращение подачи» (отключить воду; ср. abschalten).' },
      examples: [
        { sense: 'оставлять, парковать (велосипед, чемодан)', de: 'Du kannst dein Fahrrad im Hof [[abstellen]].', ru: 'Можешь оставить велосипед во дворе.' },
        { sense: 'отключать (воду, газ, прибор)', de: 'Morgen wird von 8 bis 12 Uhr das Wasser [[abgestellt]].', ru: 'Завтра с 8 до 12 отключат воду.' },
        { sense: 'устранять (недостаток, ошибку)', de: 'Wir müssen diesen Fehler so schnell wie möglich [[abstellen]].', ru: 'Нам нужно устранить эту ошибку как можно скорее.' }
      ],
      morph: 'ab-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'abstellen значит «припарковать/оставить вещь», «перекрыть/отключить (воду, газ, прибор)» и «устранить недостаток».',
      meaningExamples: [{ de: 'das Fahrrad im Hof abstellen', ru: 'оставить велосипед во дворе' }, { de: 'das Wasser abstellen', ru: 'перекрыть воду' }, { de: 'einen Fehler abstellen', ru: 'устранить ошибку' }],
      note: '«Den Koffer abstellen» — поставить чемодан (и отпустить). «Der Abstellraum» — кладовка. Официально: «Mängel abstellen» — устранить недостатки.'
    },
    {
      id: 'r-stellen-anstellen', prefix: 'an', sep: 'trennbar', stress: 'ánstellen', pos: 'verb',
      transparency: 'figurative',
      de: 'anstellen', forms: { praes: 'stellt an', praet: 'stellte an', perf: 'hat angestellt' }, gov: '+ Akk.',
      ru: '(sich anstellen) вставать в очередь; нанимать (на работу, в штат); (разг.) натворить, устроить; включать (прибор, воду)',
      prefixDrill: { ex: 3, meaning: 2, explain: 'an- здесь означает «включение прибора» (как anmachen, anschalten; по-русски приставка другая — в-ключать).' },
      examples: [
        { sense: 'вставать в очередь (sich anstellen)', de: 'An der Kasse musste ich mich eine halbe Stunde [[anstellen]].', ru: 'На кассе мне пришлось полчаса стоять в очереди.' },
        { sense: 'нанимать на работу (в штат)', de: 'Die Behörde hat zwei neue IT-Experten fest [[angestellt]].', ru: 'Ведомство взяло в штат двух новых IT-специалистов.' },
        { sense: 'натворить (разг.)', de: 'Was hast du denn da wieder [[angestellt]]?', ru: 'Ну и что ты там опять натворил?' },
        { sense: 'включать (прибор)', de: '[[Stell]] bitte mal den Fernseher [[an]].', ru: 'Включи-ка, пожалуйста, телевизор.' }
      ],
      morph: 'an-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'sich anstellen значит «вставать в очередь», anstellen — «нанимать на работу», разговорное was anstellen — «натворить что-то», а также «включать прибор/воду» (в быту чаще anmachen/einschalten).',
      meaningExamples: [{ de: 'sich an der Kasse anstellen', ru: 'встать в очередь на кассу' }, { de: 'Was hast du angestellt?', ru: 'Что ты натворил? (разг.)' }, { de: 'die Heizung anstellen', ru: 'включить отопление' }],
      note: '«Angestellt sein» — работать по найму (der/die Angestellte — служащий). «Was hast du wieder angestellt?» — что ты опять натворил? Это значение уже не выводится из «ставить» — просто запомните.'
    },
    {
      id: 'r-stellen-aufstellen', prefix: 'auf', sep: 'trennbar', stress: 'áufstellen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'aufstellen', forms: { praes: 'stellt auf', praet: 'stellte auf', perf: 'hat aufgestellt' }, gov: '+ Akk.',
      ru: 'составлять, устанавливать (правила, план, список); ставить, устанавливать (физически); выдвигать (кандидата)',
      prefixDrill: { ex: 1, meaning: 0, explain: 'auf- здесь означает «вверх, поставить вертикально» (установить стенд / оборудование).' },
      examples: [
        { sense: 'составлять (правила, план)', de: 'Wir müssen neue Regeln für Passwörter [[aufstellen]].', ru: 'Нам нужно составить новые правила для паролей.' },
        { sense: 'ставить, устанавливать (физически)', de: 'Am Eingang wurde ein neuer Monitor [[aufgestellt]].', ru: 'У входа установили новый монитор.' },
        { sense: 'выдвигать (кандидата)', de: 'Die Partei hat eine junge Kandidatin [[aufgestellt]].', ru: 'Партия выдвинула молодую кандидатку.' }
      ],
      morph: 'auf-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufstellen значит «составлять план/правила», «устанавливать физически» и «выдвигать кандидата или устанавливать рекорд».',
      meaningExamples: [{ de: 'klare Regeln aufstellen', ru: 'установить чёткие правила' }, { de: 'einen neuen Tisch aufstellen', ru: 'поставить новый стол' }],
      note: '«Einen Plan / eine Liste / eine Regel aufstellen» — по-русски здесь «составлять» (тоже от «ставить», но приставка другая). «Gut aufgestellt sein» — быть хорошо подготовленным (о фирме, команде).'
    },
    {
      id: 'r-stellen-darstellen', prefix: 'dar', sep: 'trennbar', stress: 'dárstellen', pos: 'verb',
      transparency: 'figurative',
      de: 'darstellen', forms: { praes: 'stellt dar', praet: 'stellte dar', perf: 'hat dargestellt' }, gov: '+ Akk.',
      ru: 'изображать, показывать; являться, представлять собой',
      examples: [
        { sense: 'изображать, показывать (данные)', de: 'Die Grafik [[stellt]] die Angriffe pro Monat [[dar]].', ru: 'График показывает число атак в месяц.' },
        { sense: 'представлять собой (риск, проблему)', de: 'Das veraltete System [[stellt]] ein großes Risiko [[dar]].', ru: 'Устаревшая система представляет собой большой риск.' }
      ],
      morph: 'dar-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'darstellen значит «изображать, визуализировать» (на графике, схеме) и «представлять собой» (риск, проблему).',
      meaningExamples: [{ de: 'die Daten in einer Grafik darstellen', ru: 'отобразить данные на графике' }, { de: 'Das stellt ein hohes Risiko dar.', ru: 'Это представляет собой высокий риск.' }],
      note: 'Книжное, частое в отчётах: «X stellt ein Risiko dar» = «X ist ein Risiko». «Die Darstellung» — изображение, представление (данных). «Der Darsteller» — актёр.'
    },
    {
      id: 'r-stellen-feststellen', prefix: 'fest', sep: 'trennbar', stress: 'féststellen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'feststellen', forms: { praes: 'stellt fest', praet: 'stellte fest', perf: 'hat festgestellt' }, gov: '+ Akk.; dass …',
      ru: 'установить (факт), обнаружить, констатировать',
      examples: [
        { de: 'Bei der Analyse haben wir [[festgestellt]], dass zwei Konten kompromittiert sind.', ru: 'При анализе мы установили, что две учётные записи скомпрометированы.' },
        { de: 'Der Arzt hat nichts Ernstes [[festgestellt]].', ru: 'Врач не обнаружил ничего серьёзного.' }
      ],
      morph: 'fest-stell-en',
      note: 'fest = твёрдо: «твёрдо поставить» → установить факт. Очень частое слово в отчётах: «Es wurde festgestellt, dass …». Существительное: die Feststellung.'
    },
    {
      id: 'r-stellen-herstellen', prefix: 'her', sep: 'trennbar', stress: 'hérstellen', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'herstellen', forms: { praes: 'stellt her', praet: 'stellte her', perf: 'hat hergestellt' }, gov: '+ Akk.',
      ru: 'производить, изготавливать; устанавливать (связь, контакт)',
      examples: [
        { sense: 'производить, изготавливать', de: 'Die Firma [[stellt]] Sensoren für Autos [[her]].', ru: 'Фирма производит датчики для автомобилей.' },
        { sense: 'устанавливать (связь, соединение)', de: 'Ich kann keine Verbindung zum Server [[herstellen]].', ru: 'Не получается установить соединение с сервером.' }
      ],
      morph: 'her-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'herstellen обозначает и «производить, изготавливать товары», и «устанавливать связь или соединение».',
      meaningExamples: [{ de: 'Autos in Deutschland herstellen', ru: 'производить автомобили в Германии' }, { de: 'eine VPN-Verbindung herstellen', ru: 'установить VPN-соединение' }],
      note: '«Der Hersteller» — производитель (Herstellerangaben — данные производителя). В IT: «eine Verbindung herstellen» — установить соединение; «wiederherstellen» — восстановить (данные).'
    },
    {
      id: 'r-stellen-zustellen', prefix: 'zu', sep: 'trennbar', stress: 'zústellen', pos: 'verb',
      transparency: 'figurative',
      de: 'zustellen', forms: { praes: 'stellt zu', praet: 'stellte zu', perf: 'hat zugestellt' }, gov: 'jdm. etw.',
      ru: 'доставлять (почту, посылку); загромождать',
      parallel: 'ДОставлять',
      prefixDrill: [
        { ex: 0, meaning: 1, explain: 'zu- здесь означает «направление к цели, доставка» — доставить посылку адресату (рус. до-ставлять).' },
        { ex: 1, meaning: 0, explain: 'zu- здесь означает «закрытие, заслон» — загородить проезд вещами.' }
      ],
      examples: [
        { sense: 'доставлять (посылку, почту)', de: 'Das Paket wird morgen zwischen 10 und 14 Uhr [[zugestellt]].', ru: 'Посылку доставят завтра с 10 до 14.' },
        { sense: 'загромождать, загораживать', de: 'Bitte die Feuerwehrzufahrt nicht [[zustellen]]!', ru: 'Пожалуйста, не загораживайте проезд для пожарных!' }
      ],
      morph: 'zu-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В почтовой службе zustellen значит «доставлять посылку/письмо», а в быту — «загромождать проход».',
      meaningExamples: [{ de: 'Das Paket wurde heute zugestellt.', ru: 'Посылку сегодня доставили.' }, { de: 'Bitte den Notausgang nicht zustellen.', ru: 'Пожалуйста, не загромождайте аварийный выход.' }],
      note: 'Официальное слово почты: «die Zustellung» — доставка, «der Zusteller» — курьер, почтальон. Второе значение: zu = «закрыть» → загородить вещами.'
    },
    {
      id: 'r-stellen-umstellen', prefix: 'um', sep: 'trennbar', stress: 'úmstellen', pos: 'verb',
      transparency: 'figurative',
      de: 'umstellen', forms: { praes: 'stellt um', praet: 'stellte um', perf: 'hat umgestellt' }, gov: '+ Akk.; auf + Akk.',
      ru: 'переводить (на другую систему), перестраивать; (sich umstellen) перестраиваться, привыкать; переставлять, переводить (часы)',
      parallel: 'ПЕРЕставлять',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ударная отделяемая um- означает «переделка, переход» — перейти на новую тикет-систему.' },
      examples: [
        { sense: 'переводить / переходить на другую систему', de: 'Nächsten Monat [[stellen]] wir auf ein neues Ticketsystem [[um]].', ru: 'В следующем месяце мы переходим на новую тикет-систему.' },
        { sense: 'переводить (часы), переставлять', de: 'Im Herbst werden die Uhren [[umgestellt]].', ru: 'Осенью переводят часы.' }
      ],
      morph: 'um-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'umstellen значит «переводить на новую систему», «переставлять предметы / переводить часы», а sich umstellen — «перестраиваться, привыкать к новому».',
      meaningExamples: [{ de: 'auf Cloud-Dienste umstellen', ru: 'перевести на облачные сервисы' }, { de: 'die Uhr auf Sommerzeit umstellen', ru: 'перевести часы на летнее время' }],
      note: '«Auf + Akk. umstellen» — перевести на: «auf Homeoffice / auf eine neue Software umstellen». «Die Umstellung» — переход. Есть неотделяемая пара umstéllen — окружать (см. ниже).'
    },
    {
      id: 'r-stellen-bestellen', prefix: 'be', sep: 'untrennbar', stress: 'bestéllen', pos: 'verb',
      alsoIn: [['words', 'food']], // Wortliste p. 26
      core: true, transparency: 'opaque',
      de: 'bestellen', forms: { praes: 'bestellt', praet: 'bestellte', perf: 'hat bestellt' }, gov: '+ Akk.',
      ru: 'заказывать; передавать (привет)',
      examples: [
        { sense: 'заказывать', de: 'Ich habe die neuen Laptops gestern online [[bestellt]].', ru: 'Вчера я заказал новые ноутбуки онлайн.' },
        { sense: 'передавать (привет, поручение)', de: '[[Bestell]] deiner Mutter schöne Grüße von mir!', ru: 'Передай маме от меня привет!' }
      ],
      morph: 'be-stell-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Основное значение bestellen — «заказывать (товар, еду)», но также есть устойчивое значение «передавать привет» (schöne Grüße bestellen).',
      meaningExamples: [{ de: 'neue Hardware bestellen', ru: 'заказать новое железо' }, { de: 'Bestell ihr bitte schöne Grüße!', ru: 'Передай ей, пожалуйста, привет!' }],
      note: 'Связь со «ставить» в современном языке не видна — учите как отдельное слово: «bestellen» = заказывать. «Die Bestellung» — заказ; «Grüße bestellen» — передать привет.',
      why: {
        confidence: 'high',
        root: 'stellen',
        text: 'Состав: неотделяемая приставка be- + stellen.\nПроисхождение: исторически связано с stellen — в средневерхненемецком bestellen значило «расставить, устроить, распорядиться, поручить» (отсюда и «обрабатывать поле» — ein Feld bestellen). Из «распорядиться, поручить доставку» выросло современное «заказывать».\nПрозрачность: непрозрачное — этимологическая связь с stellen существует, но из современного значения «ставить» смысл «заказывать» уже не выводится.',
        source: 'DWDS (Pfeifer), s.v. bestellen',
        evidence: 'Ср.-в.-нем. bestellen «устроить, распорядиться, поручить» (к stellen) → «заказать».'
      }
    },
    {
      id: 'r-stellen-stelle', pos: 'noun',
      alsoIn: [['words', 'work']], // Wortliste p. 83
      de: 'Stelle', article: 'die', plural: 'die Stellen',
      ru: 'место; должность, вакансия',
      examples: [
        { sense: 'место (в тексте, коде, пространстве)', de: 'An dieser [[Stelle]] im Code tritt der Fehler auf.', ru: 'Ошибка возникает в этом месте кода.' },
        { sense: 'должность, рабочее место', de: 'Ich habe eine neue [[Stelle]] als Security Analyst gefunden.', ru: 'Я нашёл новую должность security-аналитика.' }
      ],
      morph: 'Stelle',
      meaningType: 'polysemous',
      meaningExplanation: 'die Stelle — это и конкретное «место» (в городе, тексте, коде), и «должность, рабочее место, вакансия».',
      meaningExamples: [{ de: 'an dieser Stelle im Code', ru: 'в этом месте в коде' }, { de: 'sich auf eine Stelle bewerben', ru: 'податься на вакансию' }],
      note: '«Die Stelle» — и место, и рабочее место: «sich um eine Stelle bewerben», «die Stellenanzeige» — вакансия. «An deiner Stelle …» — на твоём месте. «Auf der Stelle» — немедленно.'
    },
    {
      id: 'r-stellen-vorstellung', pos: 'noun', transparency: 'figurative',
      de: 'Vorstellung', article: 'die', plural: 'die Vorstellungen',
      ru: 'представление, идея, воображение; спектакль, сеанс; представление (знакомство, презентация)',
      examples: [
        { sense: 'представление, идея', de: 'Ich habe noch keine klare [[Vorstellung]], wie das funktionieren soll.', ru: 'У меня пока нет чёткого представления, как это должно работать.' },
        { sense: 'спектакль, сеанс', de: 'Die [[Vorstellung]] beginnt um 20 Uhr.', ru: 'Спектакль начинается в 20:00.' }
      ],
      morph: 'Vor-stell-ung',
      meaningType: 'polysemous',
      meaningExplanation: 'die Vorstellung означает «представление/идея», «знакомство/презентация» и «спектакль или сеанс в кино».',
      meaningExamples: [{ de: 'keine Vorstellung davon haben', ru: 'не иметь представления об этом' }, { de: 'die letzte Vorstellung im Kino', ru: 'последний сеанс в кино' }],
      note: '«Das Vorstellungsgespräch» — собеседование (буквально «разговор-знакомство»). «Gehaltsvorstellung» — ожидания по зарплате (в вакансиях!).'
    },
    {
      id: 'r-stellen-einstellung', pos: 'noun', transparency: 'figurative',
      de: 'Einstellung', article: 'die', plural: 'die Einstellungen',
      ru: 'настройка; отношение, установка; приём на работу',
      examples: [
        { sense: 'настройки (в программе)', de: 'Die [[Einstellungen]] findest du oben rechts im Menü.', ru: 'Настройки найдёшь в меню справа вверху.' },
        { sense: 'отношение, установка', de: 'Er hat eine sehr positive [[Einstellung]] zur Arbeit.', ru: 'У него очень позитивное отношение к работе.' }
      ],
      morph: 'Ein-stell-ung',
      meaningType: 'polysemous',
      meaningExplanation: 'Как и глагол einstellen, существительное Einstellung имеет три значения: «настройки» (в программе), «личное отношение/установка» и «приём на работу».',
      meaningExamples: [{ de: 'die Sicherheitseinstellungen ändern', ru: 'изменить настройки безопасности' }, { de: 'eine positive Einstellung zur Arbeit', ru: 'позитивный настрой на работу' }],
      note: 'Мн. ч. «Einstellungen» в интерфейсах = Settings. «Die Einstellung zu + Dat.» — отношение к. В HR: «die Einstellung neuer Mitarbeiter» — наём.'
    },
    {
      id: 'r-stellen-angestellte', pos: 'noun', transparency: 'figurative',
      de: 'Angestellte', article: 'der', plural: 'die Angestellten',
      ru: 'служащий, сотрудник (по найму)',
      examples: [
        { de: 'Alle [[Angestellten]] müssen die Schulung bis Ende März machen.', ru: 'Все сотрудники должны пройти обучение до конца марта.' },
        { de: 'Sie ist [[Angestellte]] bei einer Versicherung.', ru: 'Она служащая в страховой компании.' }
      ],
      morph: 'An-ge-stell-t-e',
      note: 'Субстантивированное прилагательное — склоняется как прилагательное: der Angestellte, ein Angestellter, die Angestellte (она). От «anstellen» — нанимать.'
    }
  ],
  pairs: [
    {
      a: { stress: 'úmstellen', sep: 'trennbar', ru: 'переставлять; переходить (на что-то)', ex: { de: 'Wir haben die Möbel [[umgestellt]].', ru: 'Мы переставили мебель.' } },
      b: { stress: 'umstéllen', sep: 'untrennbar', ru: 'окружать, оцеплять', ex: { de: 'Die Polizei hat das Haus [[umstellt]].', ru: 'Полиция оцепила дом.' } }
    }
  ]
});
