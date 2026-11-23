/* Expressions -> Idioms (15 useful B1–B2 German idioms). Learning content in Russian.
 * Uses chunk schema (type: 'chunk') so cards reuse examples, variations, pronunciation, tooltips and WHY?. */
GT.register({ tab: 'expressions', topic: 'idioms', type: 'chunk', items: [
{
  id: 'exp-idiom-uhren-anders', topic: 'idioms', topics: ['everyday', 'work', 'workcomm'],
  de: 'Hier ticken die Uhren anders.', register: 'informal',
  ru: 'Здесь всё устроено иначе; здесь другие правила и ритм.',
  examples: [
    { de: 'In einem Konzern [[ticken die Uhren anders]] als in einem kleinen Startup.', ru: 'В крупной корпорации всё устроено иначе, чем в маленьком стартапе.' },
    { de: 'In Bayern [[ticken die Uhren]] manchmal wirklich [[anders]].', ru: 'В Баварии порой действительно совсем другие порядки.' }
  ],
  variations: ['Bei uns ticken die Uhren etwas anders.', 'In dieser Abteilung ticken die Uhren anders.'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «здесь часы тикают иначе» — метафора иного внутреннего ритма, правил и привычек в компании, регионе или стране.',
  meaningExamples: [{ de: 'Im öffentlichen Dienst ticken die Uhren anders.', ru: 'На госслужбе всё идёт по другим правилам.' }],
  note: 'Очень популярная и доброжелательно-ироничная формулировка, когда объясняют особенности другой компании, отдела или региона. Глагол ticken (тикать) в настоящем времени: die Uhren ticken.',
  why: {
    confidence: 'high',
    text: 'Состав: ticken («тикать») + die Uhren («часы») + anders («иначе»).\nПроисхождение: образ часов с другим ходом закрепился в современном немецком как метафора особого уклада и темпа жизни (часто цитируется слоган «In Bayern gehen die Uhren anders», популяризированный в XX в.).\nПрозрачность: переносная — образ «другого хода часов» интуитивно понятен.',
    source: 'DWDS / Duden Redewendungen, s.v. Uhr',
    evidence: 'Образное выражение «die Uhren gehen/ticken anders» — «иной ритм, иные порядки».'
  }
},
{
  id: 'exp-idiom-bahnhof', topic: 'idioms', topics: ['everyday', 'workcomm'],
  de: 'Ich verstehe nur Bahnhof.', register: 'informal',
  ru: 'Я вообще ничего не понимаю (для меня это китайская грамота).',
  examples: [
    { de: 'Wenn die Netzwerker über BGP reden, [[verstehe]] ich manchmal [[nur Bahnhof]].', ru: 'Когда сетевики говорят про BGP, я порой вообще ничего не понимаю.' },
    { de: 'Kannst du das einfacher erklären? Ich [[verstehe]] gerade [[nur Bahnhof]].', ru: 'Можешь объяснить проще? Я сейчас вообще ничего не понимаю.' }
  ],
  variations: ['Ich verstehe kein Wort.', 'Das ist für mich ein Buch mit sieben Siegeln.'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «я понимаю только [слово] вокзал» — разговорная идиома, означающая полное непонимание сложного или невнятного объяснения.',
  meaningExamples: [{ de: 'Bei dem Juristendeutsch verstehe ich nur Bahnhof.', ru: 'В этом юридическом немецком я вообще ничего не понимаю.' }],
  note: 'Звучит живо и дружелюбно в разговоре с коллегами, когда просишь перевести с жаргона на нормальный язык. В официальных письмах не используется.',
  why: {
    confidence: 'medium',
    text: 'Состав: verstehen («понимать») + nur («только») + der Bahnhof («вокзал»).\nПроисхождение: идиома распространилась в немецком в 1920-е гг.; популярная версия связывает её с солдатами Первой мировой, уставшими от войны и мечтавшими лишь о слове «вокзал» (дорога домой), но документально точный источник не подтверждён.\nПрозрачность: непрозрачная идиома — учится целиком.',
    source: 'DWDS / Duden Redewendungen, s.v. Bahnhof',
    evidence: 'Зафиксировано с 1920-х гг.; связь с солдатским жаргоном Первой мировой — распространённая, но не строго доказанная версия.'
  }
},
{
  id: 'exp-idiom-nicht-mein-bier', topic: 'idioms', topics: ['everyday', 'workcomm'],
  de: 'Das ist nicht mein Bier.', register: 'informal',
  ru: 'Это не моё дело / не моя забота.',
  examples: [
    { de: 'Wie die Marketing-Abteilung das Budget verteilt, [[ist nicht mein Bier]].', ru: 'Как отдел маркетинга распределяет бюджет — это не моё дело.' },
    { de: 'Das [[ist]] ehrlich gesagt [[nicht mein Bier]], frag lieber den Teamleiter.', ru: 'Честно говоря, это не моя зона ответственности, спроси лучше тимлида.' }
  ],
  variations: ['Das ist nicht meine Baustelle.', 'Das geht mich nichts an.', 'Dafür bin ich nicht zuständig. (нейтрально)'],
  meaningType: 'colloquial',
  meaningExplanation: 'Ярко-разговорная идиома (букв. «это не моё пиво»): используется только среди своих или на «ты». С начальством и клиентами лучше нейтральное «Dafür bin ich nicht zuständig».',
  meaningExamples: [{ de: 'Ob er zu spät kommt, ist nicht mein Bier.', ru: 'Опоздает он или нет — не моё дело.' }],
  note: 'Родственный офисный разговорный вариант — «Das ist nicht meine Baustelle» («это не моя стройка / не моя задача»).',
  why: {
    confidence: 'high',
    text: 'Состав: das ist nicht mein Bier (букв. «это не моё пиво»).\nПроисхождение: разговорное выражение XX века, восходящее к бытовой ситуации в трактире («чужое пиво меня не касается»).\nПрозрачность: образная разговорная идиома.',
    source: 'DWDS / Duden Redewendungen, s.v. Bier',
    evidence: 'Разговорное выражение XX в.: «чужое пиво» → «чужое дело, не моя забота».'
  }
},
{
  id: 'exp-idiom-nagel-kopf', topic: 'idioms', topics: ['work', 'workcomm', 'everyday'],
  de: 'Den Nagel auf den Kopf treffen.', register: 'neutral',
  ru: 'Попасть в самую точку; сформулировать предельно точно.',
  examples: [
    { de: 'Mit dieser Analyse hast du [[den Nagel auf den Kopf getroffen]].', ru: 'Этим анализом ты попал в самую точку.' },
    { de: 'Dein Kommentar [[trifft den Nagel auf den Kopf]].', ru: 'Твой комментарий бьёт прямо в цель.' }
  ],
  variations: ['Genau auf den Punkt!', 'Du bringst es auf den Punkt.'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «попасть по шляпке гвоздя» — точный удар молотком перенесён на предельно точное замечание или диагноз проблемы.',
  meaningExamples: [{ de: 'Sie hat mit ihrer Frage den Nagel auf den Kopf getroffen.', ru: 'Своим вопросом она попала точно в цель.' }],
  note: 'Подходит и для офисных совещаний, и для повседневной речи. Сильный глагол treffen: trifft, traf, hat getroffen.',
  why: {
    confidence: 'high',
    text: 'Состав: der Nagel («гвоздь») + auf den Kopf («по шляпке») + treffen («попасть»).\nПроисхождение: ремесленная метафора, известная в немецком с XVI века (удар точно в шляпку гвоздя, а не мимо, по пальцам).\nПрозрачность: переносная — образ полностью понятен.',
    source: 'DWDS (Pfeifer) / Duden Redewendungen, s.v. Nagel',
    evidence: 'Засвидетельствовано с XVI в.; метафора точного удара по шляпке гвоздя.'
  }
},
{
  id: 'exp-idiom-kaltes-wasser', topic: 'idioms', topics: ['work', 'workcomm', 'everyday'],
  de: 'Ins kalte Wasser springen.', register: 'neutral',
  ru: 'Броситься с головой в новое дело (без долгой подготовки).',
  examples: [
    { de: 'Am ersten Tag im SOC musste ich sofort [[ins kalte Wasser springen]].', ru: 'В первый же день в SOC мне пришлось сразу включиться в боевую работу без раскачки.' },
    { de: 'Manchmal muss man einfach [[ins kalte Wasser springen]] und loslegen.', ru: 'Иногда нужно просто решиться и начать без долгой подготовки.' }
  ],
  variations: ['jemanden ins kalte Wasser werfen (бросить кого-то сразу в бой)'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «прыгнуть в холодную воду» — образ резкого старта в незнакомой задаче или роли, когда учишься уже на ходу.',
  meaningExamples: [{ de: 'Er wurde im neuen Projekt ins kalte Wasser geworfen.', ru: 'В новом проекте его сразу бросили на передовую.' }],
  note: 'Очень частая идиома в разговорах о новой работе, онбординге и переезде. Глагол springen с sein: ist gesprungen.',
  why: {
    confidence: 'high',
    text: 'Состав: in das (ins) kalte Wasser («в холодную воду») + springen («прыгать»).\nПроисхождение: прозрачная метафора купания в холодной воде без привыкания — вместо долгого входа по ступенькам сразу прыгнуть в дело.\nПрозрачность: образная, легко читается.',
    source: 'DWDS / Duden Redewendungen, s.v. Wasser',
    evidence: 'Устойчивый образный оборот: резкое погружение в холодную воду → начало незнакомого дела без подготовки.'
  }
},
{
  id: 'exp-idiom-daumen-druecken', topic: 'idioms', topics: ['everyday', 'work', 'workcomm'],
  de: 'Jemandem die Daumen drücken.', register: 'neutral',
  ru: 'Держать за кого-то кулаки (желать удачи).',
  examples: [
    { de: 'Viel Erfolg beim Vorstellungsgespräch — ich [[drücke]] dir [[die Daumen]]!', ru: 'Удачи на собеседовании — держу за тебя кулаки!' },
    { de: 'Wir [[drücken die Daumen]], dass das Deployment ohne Fehler durchläuft.', ru: 'Держим кулаки, чтобы деплой прошёл без ошибок.' }
  ],
  variations: ['Ich drücke beide Daumen!', 'Daumen sind gedrückt!'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «сжимать большие пальцы» (в кулаке) — главный немецкий способ пожелать удачи перед экзаменом, собеседованием или релизом.',
  meaningExamples: [{ de: 'Ich drücke dir für morgen fest die Daumen.', ru: 'Крепко держу за тебя кулаки на завтра.' }],
  note: 'Употребляется с Dativ (dir, Ihnen, dem Team). Слово der Daumen — большой палец руки.',
  why: {
    confidence: 'high',
    text: 'Состав: der Daumen («большой палец») + drücken («сжимать, давить»).\nПроисхождение: жест зажимания большого пальца внутри кулака известен в европейской традиции с античности (у Плиния Старшего упоминается как знак благосклонности и оберега) и закрепился в немецком как пожелание удачи.\nПрозрачность: образный жест.',
    source: 'DWDS / Duden Redewendungen, s.v. Daumen',
    evidence: 'Традиционный жест «держать большой палец в кулаке» как пожелание удачи.'
  }
},
{
  id: 'exp-idiom-schlauch-stehen', topic: 'idioms', topics: ['everyday', 'workcomm'],
  de: 'Auf dem Schlauch stehen.', register: 'informal',
  ru: 'Тупить, заклинило (временно не соображать).',
  examples: [
    { de: 'Sorry, ich [[stehe]] gerade total [[auf dem Schlauch]] — wie heißt der Befehl noch mal?', ru: 'Извини, меня сейчас совсем заклинило — как там эта команда называется?' },
    { de: 'Manchmal [[steht]] man bei einem einfachen Fehler einfach [[auf dem Schlauch]].', ru: 'Иногда на простейшей ошибке просто заклинивает.' }
  ],
  variations: ['Ich habe gerade ein Brett vor dem Kopf.', 'Ich komme gerade nicht drauf.'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «стоять на шланге» — если наступить на садовый шланг, вода перестаёт течь; так же «перекрывается» поток мыслей.',
  meaningExamples: [{ de: 'Hilf mir kurz, ich stehe auf dem Schlauch.', ru: 'Подскажи, меня что-то заклинило.' }],
  note: 'Прекрасно подходит для самоиронии на работе (про себя — естественно, про другого — только в шутку среди близких коллег).',
  why: {
    confidence: 'high',
    text: 'Состав: auf dem Schlauch («на шланге») + stehen («стоять»).\nПроисхождение: разговорная метафора XX века — стоя на шланге, человек сам перекрывает подачу воды, то есть «тормозит» собственную мысль.\nПрозрачность: яркий и понятный образ.',
    source: 'DWDS / Duden Redewendungen, s.v. Schlauch',
    evidence: 'Образная разговорная идиома XX в.: перекрыть поток воды в шланге → «застопориться в мыслях».'
  }
},
{
  id: 'exp-idiom-tellerrand', topic: 'idioms', topics: ['work', 'workcomm', 'society'],
  de: 'Über den Tellerrand schauen.', register: 'neutral',
  ru: 'Смотреть шире, выходить за рамки своей узкой области.',
  examples: [
    { de: 'Gute Security-Analysten [[schauen]] regelmäßig [[über den Tellerrand]].', ru: 'Хорошие аналитики безопасности регулярно смотрят шире своей узкой задачи.' },
    { de: 'Es hilft, mal [[über den Tellerrand]] der eigenen Abteilung [[zu schauen]].', ru: 'Полезно иногда заглянуть за пределы собственного отдела.' }
  ],
  variations: ['über den eigenen Tellerrand hinausblicken'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «выглянуть за край тарелки» — образ человека, который видит не только то, что лежит прямо перед ним, но и картину вокруг.',
  meaningExamples: [{ de: 'Wir müssen über den Tellerrand schauen.', ru: 'Нам нужно смотреть шире рамок.' }],
  note: 'Очень часто звучит на собеседованиях, в описаниях вакансий и рабочих ретроспективах. Глагол можно менять на blicken / gucken.',
  why: {
    confidence: 'high',
    text: 'Состав: der Tellerrand («край тарелки»: Teller + Rand) + über … schauen («смотреть поверх/за»).\nПроисхождение: современная образная идиома второй половины XX в.: кругозор, ограниченный краем собственной тарелки, противопоставляется широкому взгляду.\nПрозрачность: полностью читаемая метафора.',
    source: 'DWDS / Duden Redewendungen, s.v. Tellerrand',
    evidence: 'Современная метафора ограниченного vs широкого кругозора (край собственной тарелки).'
  }
},
{
  id: 'exp-idiom-eis-brechen', topic: 'idioms', topics: ['everyday', 'workcomm'],
  de: 'Das Eis brechen.', register: 'neutral',
  ru: 'Сломать лёд (разрядить неловкость, наладить контакт).',
  examples: [
    { de: 'Ein kurzer Witz am Anfang des Meetings hat sofort [[das Eis gebrochen]].', ru: 'Короткая шутка в начале встречи сразу разрядила обстановку.' },
    { de: 'Nach dem ersten gemeinsamen Projekt war [[das Eis gebrochen]].', ru: 'После первого совместного проекта лёд тронулся (напряжение ушло).' }
  ],
  variations: ['Das Eis ist gebrochen. (Лёд тронулся / напряжение ушло.)'],
  meaningType: 'figurative',
  meaningExplanation: 'Слово используется не в буквальном смысле про замёрзшую воду, а образно — чтобы описать исчезновение скованности и холодка в общении.',
  meaningExamples: [{ de: 'Das Eis ist gebrochen.', ru: 'Лёд тронулся (напряжённость в общении исчезла).' }],
  note: 'Совпадает с русским «растопить/сломать лёд» и английским «break the ice». Глагол brechen: bricht, brach, hat gebrochen.',
  why: {
    confidence: 'high',
    text: 'Состав: das Eis («лёд») + brechen («ломать»).\nПроисхождение: общеевропейская метафора, восходящая к ледоколу / прокладыванию пути во льду (встречается уже в ранненововерхненемецком и в гуманистической латыни — glaciem scindere).\nПрозрачность: образная, совпадает с русской метафорой.',
    source: 'DWDS / Duden Redewendungen, s.v. Eis',
    evidence: 'Общеевропейская метафора преодоления «ледяного» барьера (с XVI–XVII вв.).'
  }
},
{
  id: 'exp-idiom-vier-augen', topic: 'idioms', topics: ['work', 'workcomm', 'everyday'],
  de: 'Unter vier Augen sprechen.', register: 'neutral',
  ru: 'Поговорить с глазу на глаз (наедине).',
  examples: [
    { de: 'Können wir das kurz [[unter vier Augen besprechen]]?', ru: 'Можем обсудить это коротко с глазу на глаз?' },
    { de: 'Solches Feedback gebe ich lieber [[unter vier Augen]].', ru: 'Такую обратную связь я предпочитаю давать наедине.' }
  ],
  variations: ['ein Gespräch unter vier Augen', 'das Vier-Augen-Prinzip (принцип двойного контроля в IT/финансах!)'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «под четырьмя глазами» (двое собеседников = четыре глаза, без посторонних свидетелей). Внимание: в безопасности «Vier-Augen-Prinzip» — это другое, принцип «двух пар глаз» (проверка вторым человеком)!',
  meaningExamples: [{ de: 'Ich möchte mit dir unter vier Augen sprechen.', ru: 'Я хочу поговорить с тобой наедине.' }],
  note: 'Не путайте с «das Vier-Augen-Prinzip» в аудите и безопасности (критическое изменение должны одобрить двое).',
  why: {
    confidence: 'high',
    text: 'Состав: unter vier Augen («под четырьмя глазами»).\nПроисхождение: выражение известно с XVIII в. — четыре глаза принадлежат ровно двум собеседникам, без третьих лиц.\nПрозрачность: образный счёт «две пары глаз = вдвоём».',
    source: 'DWDS / Duden Redewendungen, s.v. Auge',
    evidence: 'Засвидетельствовано с XVIII в.: «четыре глаза» = двое участников разговора без свидетелей.'
  }
},
{
  id: 'exp-idiom-nerven-gehen', topic: 'idioms', topics: ['everyday', 'workcomm'],
  de: 'Jemandem auf die Nerven gehen.', register: 'informal',
  ru: 'Действовать кому-то на нервы, раздражать.',
  examples: [
    { de: 'Die ständigen Fehlalarme [[gehen]] dem ganzen Team [[auf die Nerven]].', ru: 'Постоянные ложные срабатывания действуют на нервы всей команде.' },
    { de: 'Es [[geht]] mir langsam [[auf die Nerven]], dass der Drucker nie funktioniert.', ru: 'Меня уже начинает бесить, что принтер никогда не работает.' }
  ],
  variations: ['Das nervt mich. (короче)', 'Das geht mir auf den Wecker. (разг.)'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «ходить кому-то по нервам» — образная идиома для сильного раздражения; в нейтральном/деловом контексте лучше «Das ist störend / lästig».',
  meaningExamples: [{ de: 'Der Lärm geht mir auf die Nerven.', ru: 'Этот шум действует мне на нервы.' }],
  note: 'Требует Dativ лица (mir, ihm, dem Team) + auf die Nerven (Akk.). В Perfekt с sein: ist auf die Nerven gegangen.',
  why: {
    confidence: 'high',
    text: 'Состав: auf die Nerven («на нервы») + gehen («идти»).\nПроисхождение: выражение закрепилось в XIX–XX вв., когда слово Nerv вошло в обиход как обозначение психического напряжения (параллельно русскому «действовать на нервы»).\nПрозрачность: образная идиома, полностью понятная носителям русского.',
    source: 'DWDS / Duden Redewendungen, s.v. Nerv',
    evidence: 'Оборот XIX–XX вв. со значением «сильно раздражать, утомлять психику».'
  }
},
{
  id: 'exp-idiom-selben-boot', topic: 'idioms', topics: ['work', 'workcomm', 'everyday'],
  de: 'Im selben Boot sitzen.', register: 'neutral',
  ru: 'Быть в одной лодке (в одинаковом положении, с общей задачей).',
  examples: [
    { de: 'Security und Entwicklung [[sitzen im selben Boot]]: Wir wollen ein stabiles Produkt.', ru: 'Безопасность и разработка в одной лодке: мы все хотим стабильный продукт.' },
    { de: 'Keine Sorge, wir [[sitzen]] alle [[im selben Boot]].', ru: 'Не переживай, мы все в одной лодке.' }
  ],
  variations: ['Wir sitzen alle in einem Boot.'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «сидеть в одной и той же лодке» — метафора общей судьбы и зависимости друг от друга, отлично снимает конфликт между отделами.',
  meaningExamples: [{ de: 'Bei diesem Release sitzen wir im selben Boot.', ru: 'С этим релизом мы в одной лодке.' }],
  note: 'Полное совпадение с русским «в одной лодке» и английским «in the same boat». Сильный глагол sitzen: saß, hat gesessen.',
  why: {
    confidence: 'high',
    text: 'Состав: in dem (im) selben Boot («в той же лодке») + sitzen («сидеть»).\nПроисхождение: международная морская метафора (восходит к античному образу спутников на одном судне — в частности, у Цицерона «in eadem navi esse»).\nПрозрачность: полностью понятная метафора.',
    source: 'DWDS / Duden Redewendungen, s.v. Boot',
    evidence: 'Общеевропейская метафора общей участи пассажиров одного судна (ср. лат. in eadem navi).'
  }
},
{
  id: 'exp-idiom-eine-karte', topic: 'idioms', topics: ['work', 'everyday'],
  de: 'Alles auf eine Karte setzen.', register: 'neutral',
  ru: 'Поставить всё на одну карту (рискнуть всем ради одного варианта).',
  examples: [
    { de: 'Bei den Backups sollte man nie [[alles auf eine Karte setzen]].', ru: 'С бэкапами никогда нельзя ставить всё на одну карту.' },
    { de: 'Er hat gekündigt und [[alles auf eine Karte gesetzt]].', ru: 'Он уволился и пошёл ва-банк.' }
  ],
  variations: ['nicht alles auf eine Karte setzen'],
  meaningType: 'figurative',
  meaningExplanation: 'Образ из карточной игры (поставить всю ставку на одну карту), перенесённый на рискованные решения в карьере, бизнесе и архитектуре систем.',
  meaningExamples: [{ de: 'Wir setzen nicht alles auf eine Karte.', ru: 'Мы не делаем ставку только на один вариант.' }],
  note: 'Отличный пример переносного значения корня setzen («делать ставку»).',
  why: {
    confidence: 'high',
    text: 'Состав: alles («всё») + auf eine Karte («на одну карту») + setzen («ставить ставку»).\nПроисхождение: выражение из азартных карточных игр (известно в немецком с XVIII в., параллельно французскому «mettre tout sur une carte»).\nПрозрачность: прозрачная игровая метафора.',
    source: 'DWDS / Duden Redewendungen, s.v. Karte',
    evidence: 'Из языка карточных игр (XVIII в.): рискнуть всей суммой на одной карте.'
  }
},
{
  id: 'exp-idiom-gruenes-licht', topic: 'idioms', topics: ['work', 'workcomm', 'dev'],
  de: 'Grünes Licht geben.', register: 'neutral',
  ru: 'Дать зелёный свет (одобрить запуск, разрешить).',
  examples: [
    { de: 'Der Datenschutzbeauftragte hat für das neue Tool [[grünes Licht gegeben]].', ru: 'Ответственный за защиту данных дал зелёный свет новому инструменту.' },
    { de: 'Sobald wir [[grünes Licht]] bekommen, starten wir die Migration.', ru: 'Как только получим добро, запускаем миграцию.' }
  ],
  variations: ['grünes Licht bekommen / erhalten (получить одобрение)'],
  meaningType: 'figurative',
  meaningExplanation: 'Метафора зелёного сигнала светофора/семафора — в офисе и IT стандартно означает официальное одобрение запуска проекта или изменения.',
  meaningExamples: [{ de: 'Das Management hat grünes Licht gegeben.', ru: 'Руководство дало добро.' }],
  note: 'Очень частотно в рабочих письмах и на митингах. Используется с geben (дать) и bekommen / erhalten (получить).',
  why: {
    confidence: 'high',
    text: 'Состав: grünes Licht («зелёный свет») + geben («давать»).\nПроисхождение: техническая метафора XX века из железнодорожной и уличной сигнализации (зелёный сигнал = путь свободен), перенесённая на разрешение начинать проект.\nПрозрачность: полностью прозрачный образ.',
    source: 'DWDS / Duden Redewendungen, s.v. Licht',
    evidence: 'Метафора светофорного/железнодорожного сигнала XX в., перенесённая на одобрение действий.'
  }
},
{
  id: 'exp-idiom-kirche-im-dorf', topic: 'idioms', topics: ['everyday', 'workcomm'],
  de: 'Die Kirche im Dorf lassen.', register: 'informal',
  ru: 'Не преувеличивать; знать меру; не делать из мухи слона.',
  examples: [
    { de: 'Jetzt [[lass]] mal [[die Kirche im Dorf]] — das war nur ein kleiner Tippfehler.', ru: 'Да ладно, не преувеличивай — это была просто маленькая опечатка.' },
    { de: 'Bei aller Sicherheit müssen wir [[die Kirche im Dorf lassen]], damit die Leute noch arbeiten können.', ru: 'При всей заботе о безопасности нужно знать меру, чтобы люди вообще могли работать.' }
  ],
  variations: ['Bleib mal auf dem Teppich! (не заносись / будь реалистом)', 'Man muss es nicht übertreiben. (нейтрально)'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «оставить церковь в деревне» — очень немецкая идиома, призывающая не впадать в крайности и сохранять здравый смысл.',
  meaningExamples: [{ de: 'Lass die Kirche im Dorf, so schlimm ist es nicht.', ru: 'Не драматизируй, всё не так страшно.' }],
  note: 'Звучит по-настоящему аутентично — немцы очень любят эту фразу на работе, когда кто-то предлагает чересчур жёсткие меры.',
  why: {
    confidence: 'high',
    text: 'Состав: die Kirche («церковь») + im Dorf («в деревне») + lassen («оставлять»).\nПроисхождение: образно описывает здравый порядок вещей — церковь стоит на своём месте в деревне, её не нужно тащить куда-то ещё; поговорка известна с XIX в. (сначала в южнонемецких диалектах) в значении «не заходить слишком далеко, не преувеличивать».\nПрозрачность: культурно-образная идиома.',
    source: 'DWDS / Duden Redewendungen, s.v. Kirche',
    evidence: 'Засвидетельствовано с XIX в. в значении «сохранять чувство меры, не преувеличивать».'
  }
}
]});
