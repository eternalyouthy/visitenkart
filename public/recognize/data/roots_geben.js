/* ROOT: geben. Learning content in Russian. */
GT.registerRoot({
  id: 'geben', verb: 'geben', ru: 'давать',
  words: [
    {
      id: 'r-geben-geben', base: true, pos: 'verb',
      de: 'geben', forms: { praes: 'gibt', praet: 'gab', perf: 'hat gegeben' }, gov: 'jdm. (Dat.) etw. (Akk.)',
      ru: 'давать; (es gibt) есть, имеется',
      examples: [
        { sense: 'давать (Dat. + Akk.)', de: 'Kannst du mir bitte kurz Bescheid [[geben]], wenn der Server wieder läuft?', ru: 'Можешь дать мне знать, когда сервер снова заработает?' },
        { sense: 'имеется, есть (es gibt + Akk.)', de: 'In dieser Version [[gibt]] es noch einen kleinen Fehler.', ru: 'В этой версии всё ещё есть небольшая ошибка.' }
      ],
      morph: 'geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Личное geben значит «давать», а безличный оборот es gibt (+ Akk.) — базовый способ сказать «есть, имеется».',
      meaningExamples: [{ de: 'Gib mir bitte kurz Bescheid.', ru: 'Дай мне, пожалуйста, знать.' }, { de: 'Es gibt ein Problem mit dem VPN.', ru: 'Есть проблема с VPN.' }],
      note: 'Сильный глагол e→i: du gibst, er gibt, gab, hat gegeben. После «es gibt» всегда Akkusativ: «Es gibt einen neuen Alert».',
      why: {
        confidence: 'high',
        root: 'geben',
        text: 'Состав: корневой глагол geb- + -en.\nПроисхождение: общегерманский глагол (др.-в.-нем. geban, родственно английскому give «давать»).\nПрозрачность: базовый корень семейства.',
        source: 'DWDS (Pfeifer), s.v. geben',
        evidence: 'Др.-в.-нем. geban < герм. *gebaną «давать» (родственно англ. give).'
      }
    },
    {
      id: 'r-geben-abgeben', prefix: 'ab', sep: 'trennbar', stress: 'ábgeben', pos: 'verb',
      alsoIn: [['words', 'authorities']], // Wortliste p. 16
      core: true, transparency: 'transparent',
      de: 'abgeben', forms: { praes: 'gibt ab', praet: 'gab ab', perf: 'hat abgegeben' }, gov: '+ Akk.',
      ru: 'сдавать (документы, работу, посылку); отдавать, передавать (задачу)',
      parallel: 'ОТдавать / Сдавать',
      prefixDrill: { ex: 0, meaning: 0, explain: 'ab- здесь означает «прочь, отделение» — сдать документ или отдать задачу от себя (рус. от-давать).' },
      examples: [
        { sense: 'сдавать (документ, отчёт, работу)', de: 'Bis wann müssen wir den Bericht [[abgeben]]?', ru: 'До какого срока нам нужно сдать отчёт?' },
        { sense: 'отдавать, передавать задачу другому', de: 'Ich habe zu viel zu tun und muss zwei Tickets [[abgeben]].', ru: 'У меня слишком много дел, и мне нужно передать два тикета.' }
      ],
      morph: 'ab-geb-en',
      note: '«Die Abgabe» — сдача («die Abgabefrist» — дедлайн сдачи); во мн. ч. «Abgaben» — налоги и сборы.'
    },
    {
      id: 'r-geben-aufgeben', prefix: 'auf', sep: 'trennbar', stress: 'áufgeben', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'aufgeben', forms: { praes: 'gibt auf', praet: 'gab auf', perf: 'hat aufgegeben' }, gov: '(+ Akk.)',
      ru: 'сдаваться; бросать (привычку, попытки); сдавать в багаж / отправлять (посылку, заказ)',
      examples: [
        { sense: 'сдаваться, опускать руки', de: 'Deutsch ist manchmal schwer, aber ich [[gebe]] nicht [[auf]].', ru: 'Немецкий бывает сложным, но я не сдаюсь.' },
        { sense: 'бросать, отказываться от (привычки, работы)', de: 'Nach dem Unfall musste er seinen Job [[aufgeben]].', ru: 'После аварии ему пришлось оставить свою работу.' },
        { sense: 'сдавать (багаж) / оформлять (заказ, посылку)', de: 'Am Flughafen muss ich noch meinen Koffer [[aufgeben]].', ru: 'В аэропорту мне ещё нужно сдать чемодан в багаж.' }
      ],
      morph: 'auf-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'aufgeben объединяет три несвязанных на вид значения: «сдаваться», «бросать привычку/работу» и «сдавать багаж / оформлять заказ».',
      meaningExamples: [{ de: 'Gib nicht so schnell auf!', ru: 'Не сдавайся так быстро!' }, { de: 'einen Koffer am Schalter aufgeben', ru: 'сдать чемодан в багаж' }],
      note: 'Не путать с «die Aufgabe» (задача — от старого значения «задать задание»). «Gib nicht auf!» — не сдавайся!',
      why: {
        confidence: 'high',
        root: 'geben',
        text: 'Состав: отделяемая приставка auf- + geben («давать»).\nПроисхождение: в средневерхненемецком ūfgeben значило «передать наверх (сеньору / в чужие руки), отказаться от владения», откуда развились значения «сдаться, бросить» и «сдать посылку/багаж».\nПрозрачность: непрозрачное — современное auf- («вверх, открыть») + geben («давать») не подсказывает смысл «сдаваться».',
        source: 'DWDS (Pfeifer), s.v. aufgeben',
        evidence: 'Ср.-в.-нем. ūfgeben «передать, отказаться от владения» → «сдаться, бросить; сдать (багаж/посылку)».'
      }
    },
    {
      id: 'r-geben-ausgeben', prefix: 'aus', sep: 'trennbar', stress: 'áusgeben', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'ausgeben', forms: { praes: 'gibt aus', praet: 'gab aus', perf: 'hat ausgegeben' }, gov: '+ Akk.; für + Akk.',
      ru: 'тратить (деньги); выдавать (пропуск, вывод программы); угощать (einen ausgeben)',
      prefixDrill: { ex: 0, meaning: 0, explain: 'aus- здесь означает «наружу, выдача» — отдавать, тратить деньги.' },
      examples: [
        { sense: 'тратить (деньги на что-то)', de: 'Diesen Monat habe ich viel zu viel Geld für Essen [[ausgegeben]].', ru: 'В этом месяце я потратил слишком много денег на еду.' },
        { sense: 'выдавать (результат, ошибку — IT)', de: 'Das Skript [[gibt]] eine Fehlermeldung [[aus]], wenn der Token abgelaufen ist.', ru: 'Скрипт выводит сообщение об ошибке, если токен истёк.' }
      ],
      morph: 'aus-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В быту ausgeben чаще значит «тратить деньги» (или «угощать»), а в IT и организациях — «выдавать» (ошибку, вывод программы, пропуск).',
      meaningExamples: [{ de: 'viel Geld für Miete ausgeben', ru: 'тратить много денег на аренду' }, { de: 'Das Skript gibt eine Fehlermeldung aus.', ru: 'Скрипт выдаёт сообщение об ошибке.' }],
      note: '«Die Ausgaben» (мн. ч.) — расходы. Разговорно: «Ich gebe heute einen aus!» — сегодня я угощаю (в баре/кафе).'
    },
    {
      id: 'r-geben-angeben', prefix: 'an', sep: 'trennbar', stress: 'ángeben', pos: 'verb',
      core: true, transparency: 'figurative',
      de: 'angeben', forms: { praes: 'gibt an', praet: 'gab an', perf: 'hat angegeben' }, gov: '+ Akk.',
      ru: 'указывать (данные в анкете, причину); (разг.) хвастаться',
      examples: [
        { sense: 'указывать (данные, адрес, причину)', de: 'Bitte [[geben]] Sie im Formular Ihre aktuelle Adresse [[an]].', ru: 'Пожалуйста, укажите в формуляре ваш текущий адрес.' },
        { sense: 'хвастаться, выпендриваться (разг.)', de: 'Er [[gibt]] ständig mit seinem neuen Firmenwagen [[an]].', ru: 'Он постоянно хвастается своей новой служебной машиной.' }
      ],
      morph: 'an-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В документах и анкетах angeben — нейтральное «указывать данные», а в разговорной речи без дополнения значит «хвастаться, выпендриваться».',
      meaningExamples: [{ de: 'Bitte geben Sie Ihre Adresse an.', ru: 'Укажите, пожалуйста, ваш адрес.' }, { de: 'Er gibt gern mit seinem Auto an.', ru: 'Он любит хвастаться своей машиной (разг.).' }],
      note: 'Существительное «die Angabe» — данные, сведения («ohne Gewähr / alle Angaben ohne Gewähr» — без гарантии точности).'
    },
    {
      id: 'r-geben-zugeben', prefix: 'zu', sep: 'trennbar', stress: 'zúgeben', pos: 'verb',
      core: true, transparency: 'opaque',
      de: 'zugeben', forms: { praes: 'gibt zu', praet: 'gab zu', perf: 'hat zugegeben' }, gov: '+ Akk.; dass …',
      ru: 'признавать (ошибку, факт); добавлять (ингредиент)',
      examples: [
        { sense: 'признавать (ошибку, факт)', de: 'Ich muss [[zugeben]], dass ich die Mail zuerst für echt gehalten habe.', ru: 'Должен признать, что сначала я принял это письмо за настоящее.' },
        { sense: 'добавлять (в кулинарии)', de: 'Zum Schluss ein bisschen Salz und Pfeffer [[zugeben]].', ru: 'В конце добавить немного соли и перца.' }
      ],
      morph: 'zu-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Чаще всего zugeben значит «признавать ошибку или факт», а в рецептах — «добавлять ингредиент».',
      meaningExamples: [{ de: 'Ich muss zugeben, dass ich mich geirrt habe.', ru: 'Должен признать, что я ошибся.' }, { de: 'etwas Salz zugeben', ru: 'добавить немного соли' }],
      note: 'Очень полезная фраза в разговоре: «Ich muss zugeben, dass …» — честно говоря / должен признать, что…',
      why: {
        confidence: 'high',
        root: 'geben',
        text: 'Состав: отделяемая приставка zu- + geben («давать»).\nПроисхождение: от буквального «дать в придачу, добавить» в ранненововерхненемецком развилось переносное «уступить в споре, согласиться с доводом, признать».\nПрозрачность: в значении «признать ошибку» связь с «давать» непрозрачна.',
        source: 'DWDS (Pfeifer), s.v. zugeben',
        evidence: 'Из «дать в придачу, добавить» → «уступить, согласиться, признать».'
      }
    },
    {
      id: 'r-geben-uebergeben', prefix: 'über', sep: 'untrennbar', stress: 'übergében', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'übergeben', forms: { praes: 'übergibt', praet: 'übergab', perf: 'hat übergeben' }, gov: 'jdm. (Dat.) etw. (Akk.)',
      ru: 'передавать (смену, тикет, посылку); (sich übergeben) стошнить',
      parallel: 'ПЕРЕдавать',
      prefixDrill: { ex: 0, meaning: 0, explain: 'неотделяемая über- здесь означает «передача на другую сторону» — передать открытые инциденты следующей смене (рус. пере-дать).' },
      examples: [
        { sense: 'передавать (смену, дела, предмет)', de: 'Um 18 Uhr [[übergebe]] ich die offenen Incidents an die Spätschicht.', ru: 'В 18:00 я передам открытые инциденты вечерней смене.' },
        { sense: 'стошнить (sich übergeben)', de: 'Mir war gestern so schlecht, dass ich mich [[übergeben]] musste.', ru: 'Вчера мне было так плохо, что меня стошнило.' }
      ],
      morph: 'über-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'Осторожно с возвратным sich: übergeben значит «передать (смену, дела, предмет)», а sich übergeben — «стошнить».',
      meaningExamples: [{ de: 'die Schicht an den Kollegen übergeben', ru: 'передать смену коллеге' }, { de: 'Er musste sich übergeben.', ru: 'Его стошнило.' }],
      note: 'Неотделяемый: übergab, hat übergeben (без ge-). Осторожно с «sich» — без него «передать», с ним «стошнить»!'
    },
    {
      id: 'r-geben-weitergeben', prefix: 'weiter', sep: 'trennbar', stress: 'wéitergeben', pos: 'verb',
      core: true, transparency: 'transparent',
      de: 'weitergeben', forms: { praes: 'gibt weiter', praet: 'gab weiter', perf: 'hat weitergegeben' }, gov: '+ Akk.; an + Akk.',
      ru: 'передавать дальше (информацию, данные, задачу)',
      examples: [
        { de: 'Bitte [[geben]] Sie Ihr Passwort niemals an Kollegen [[weiter]].', ru: 'Пожалуйста, никогда не передавайте свой пароль коллегам.' },
        { de: 'Ich [[gebe]] Ihre Anfrage direkt an die Fachabteilung [[weiter]].', ru: 'Я передам ваш запрос напрямую в профильный отдел.' }
      ],
      morph: 'weiter-geb-en',
      note: 'Ключевой глагол для политик безопасности и клиентского сервиса («Daten an Dritte weitergeben» — передавать данные третьим лицам).'
    },
    {
      id: 'r-geben-vergeben', prefix: 'ver', sep: 'untrennbar', stress: 'vergében', pos: 'verb',
      transparency: 'figurative',
      de: 'vergeben', forms: { praes: 'vergibt', praet: 'vergab', perf: 'hat vergeben' }, gov: '+ Akk. / jdm. (Dat.)',
      ru: 'выдавать, назначать (права, заказы, термины); прощать (jdm. Dat.)',
      examples: [
        { sense: 'выдавать, назначать (права, термины, заказы)', de: 'Admin-Rechte werden bei uns nur nach Prüfung [[vergeben]].', ru: 'Админские права у нас выдаются только после проверки.' },
        { sense: 'прощать (jdm. Dat.)', de: 'Das war ein blöder Fehler, aber ich habe ihm längst [[vergeben]].', ru: 'Это была глупая ошибка, но я давно его простил.' }
      ],
      morph: 'ver-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'vergeben имеет два разных значения: «выдавать, назначать» (права доступа, термины, заказы) и «прощать» (jdm. Dat.).',
      meaningExamples: [{ de: 'Admin-Rechte sparsam vergeben', ru: 'выдавать админ-права экономно' }, { de: 'Ich kann ihm das nicht vergeben.', ru: 'Я не могу ему этого простить.' }],
      note: 'В IT-безопасности: «Berechtigungen vergeben» (выдать права); в быту: «Dieser Benutzername ist schon vergeben» (это имя пользователя уже занято).'
    },
    {
      id: 'r-geben-freigeben', prefix: 'frei', sep: 'trennbar', stress: 'fréigeben', pos: 'verb',
      transparency: 'transparent',
      de: 'freigeben', forms: { praes: 'gibt frei', praet: 'gab frei', perf: 'hat freigegeben' }, gov: '+ Akk.',
      ru: 'открывать доступ, расшаривать; выпускать (из карантина); одобрять (релиз, бюджет)',
      examples: [
        { sense: 'расшарить, открыть доступ (IT)', de: 'Kannst du den Ordner im SharePoint für unser Team [[freigeben]]?', ru: 'Можешь открыть доступ к папке в SharePoint для нашей команды?' },
        { sense: 'выпустить (из карантина), одобрить', de: 'Nach der Prüfung habe ich die E-Mail aus der Quarantäne [[freigegeben]].', ru: 'После проверки я выпустил письмо из карантина.' }
      ],
      morph: 'frei-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'В IT freigeben — «открыть доступ, расшарить» или «выпустить из карантина», а в бизнесе — «утвердить, одобрить» (бюджет, релиз).',
      meaningExamples: [{ de: 'einen Ordner für das Team freigeben', ru: 'открыть доступ к папке для команды' }, { de: 'das Budget freigeben', ru: 'одобрить бюджет' }],
      note: 'Существительное «die Freigabe» — одобрение / расшаренный доступ («auf die Freigabe warten»).'
    },
    {
      id: 'r-geben-vorgeben', prefix: 'vor', sep: 'trennbar', stress: 'vórgeben', pos: 'verb',
      transparency: 'figurative',
      de: 'vorgeben', forms: { praes: 'gibt vor', praet: 'gab vor', perf: 'hat vorgegeben' }, gov: '+ Akk.',
      ru: 'задавать (правила, рамки, темп); притворяться, выдавать себя за',
      prefixDrill: { ex: 0, meaning: 1, explain: 'vor- здесь означает «заранее, наперёд» — политика заранее задаёт минимальную длину пароля.' },
      examples: [
        { sense: 'задавать (рамки, требования)', de: 'Die Richtlinie [[gibt]] eine Mindestlänge von 12 Zeichen [[vor]].', ru: 'Политика задаёт минимальную длину в 12 символов.' },
        { sense: 'притворяться, выдавать себя за (+ zu)', de: 'Der Anrufer [[gab vor]], vom internen IT-Support zu sein.', ru: 'Звонивший притворился сотрудником внутренней IT-поддержки.' }
      ],
      morph: 'vor-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'vorgeben значит «задавать рамки, требования, темп», а с оборотом zu + инфинитив — «притворяться, выдавать себя за».',
      meaningExamples: [{ de: 'klare Sicherheitsstandards vorgeben', ru: 'задавать чёткие стандарты безопасности' }, { de: 'Er gab vor, vom Support zu sein.', ru: 'Он притворился сотрудником поддержки.' }],
      note: 'Второе значение («притворяться») постоянно встречается при описании социальной инженерии! Существительное: die Vorgabe.'
    },
    {
      id: 'r-geben-ergeben', prefix: 'er', sep: 'untrennbar', stress: 'ergében', pos: 'verb',
      transparency: 'figurative',
      de: 'ergeben', forms: { praes: 'ergibt', praet: 'ergab', perf: 'hat ergeben' }, gov: '+ Akk.; sich aus + Dat.',
      ru: 'давать (результат); (sich ergeben) получаться, вытекать; сдаваться (в плен)',
      prefixDrill: { ex: 0, meaning: 1, explain: 'er- здесь выражает выработку результата — проверка «выдала/дала результат».' },
      examples: [
        { sense: 'давать результат, показывать', de: 'Die Untersuchung hat keine Hinweise auf einen Angriff [[ergeben]].', ru: 'Расследование не выявило признаков атаки.' },
        { sense: 'получаться, вытекать (sich ergeben)', de: 'Aus den Logs [[ergibt]] sich ein klares Bild.', ru: 'Из логов складывается ясная картина.' }
      ],
      morph: 'er-geb-en',
      meaningType: 'polysemous',
      meaningExplanation: 'ergeben значит «давать результат, показывать», а sich ergeben — «получаться, вытекать из обстоятельств» (а также «сдаваться в плен»).',
      meaningExamples: [{ de: 'Die Prüfung ergab keine Fehler.', ru: 'Проверка не выявила ошибок.' }, { de: 'Daraus ergibt sich eine neue Frage.', ru: 'Из этого вытекает новый вопрос.' }],
      note: '«Das ergibt Sinn» — в этом есть смысл (очень часто в речи!). Отсюда же «das Ergebnis» — результат.'
    },
    {
      id: 'r-geben-aufgabe', pos: 'noun', transparency: 'figurative',
      alsoIn: [['words', 'work']], // Wortliste p. 20
      de: 'Aufgabe', article: 'die', plural: 'die Aufgaben',
      ru: 'задача, задание; обязанность',
      examples: [
        { de: 'Zu meinen [[Aufgaben]] im SOC gehört die Analyse von Alerts.', ru: 'В мои задачи в SOC входит анализ алертов.' },
        { de: 'Diese [[Aufgabe]] müssen wir noch vor dem Wochenende abschließen.', ru: 'Эту задачу нам нужно закрыть ещё до выходных.' }
      ],
      morph: 'Auf-gabe',
      note: '«Die Hausaufgaben» — домашнее задание. «Eine Aufgabe übernehmen / erledigen» — взять на себя / выполнить задачу.'
    },
    {
      id: 'r-geben-angabe', pos: 'noun', transparency: 'figurative',
      de: 'Angabe', article: 'die', plural: 'die Angaben',
      ru: 'сведения, данные, указание',
      examples: [
        { de: 'Bitte prüfen Sie Ihre persönlichen [[Angaben]] vor dem Absenden.', ru: 'Пожалуйста, проверьте ваши личные данные перед отправкой.' },
        { de: 'Laut [[Angaben]] des Herstellers ist die Lücke bereits geschlossen.', ru: 'По данным производителя, уязвимость уже закрыта.' }
      ],
      morph: 'An-gabe',
      note: 'Чаще во мн. ч.: «persönliche Angaben», «Angaben machen» (сообщить сведения).'
    },
    {
      id: 'r-geben-ausgabe', pos: 'noun', transparency: 'figurative',
      de: 'Ausgabe', article: 'die', plural: 'die Ausgaben',
      ru: 'расход, трата; выпуск, издание; (IT) вывод (данных)',
      examples: [
        { sense: 'расходы, траты (мн. ч.)', de: 'Die monatlichen [[Ausgaben]] für Strom und Heizung sind gestiegen.', ru: 'Ежемесячные расходы на электричество и отопление выросли.' },
        { sense: 'вывод программы (IT)', de: 'Schick mir bitte die komplette [[Ausgabe]] des Befehls.', ru: 'Пришли мне, пожалуйста, полный вывод этой команды.' }
      ],
      morph: 'Aus-gabe',
      meaningType: 'polysemous',
      meaningExplanation: 'die Ausgabe — это финансовые расходы (обычно мн. ч. die Ausgaben), издание/выпуск (газеты) и вывод программы в IT.',
      meaningExamples: [{ de: 'monatliche Ausgaben', ru: 'ежемесячные расходы' }, { de: 'die Ausgabe des Befehls prüfen', ru: 'проверить вывод команды (IT)' }],
      note: 'Пара: «Einnahmen und Ausgaben» — доходы и расходы; «Ein- und Ausgabe» — ввод и вывод (I/O).'
    },
    {
      id: 'r-geben-arbeitgeber', pos: 'noun', transparency: 'transparent',
      de: 'Arbeitgeber', article: 'der', plural: 'die Arbeitgeber',
      ru: 'работодатель',
      examples: [
        { de: 'Mein [[Arbeitgeber]] bezahlt das Deutschlandticket und die Weiterbildung.', ru: 'Мой работодатель оплачивает Deutschlandticket и повышение квалификации.' },
        { de: 'Bei Krankheit muss man den [[Arbeitgeber]] am ersten Tag informieren.', ru: 'В случае болезни нужно сообщить работодателю в первый же день.' }
      ],
      morph: 'Arbeit-geb-er',
      parts: [['Arbeit-', 'die Arbeit — работа'], ['geb', 'основа geben — давать'], ['-er', 'тот, кто делает']],
      note: 'Пара: «der Arbeitgeber» (работодатель — кто даёт работу) и «der Arbeitnehmer» (работник — кто берёт работу). Очень прозрачная пара!'
    },
    {
      id: "r-geben-zurueckgeben", de: "zurückgeben", pos: 'verb', core: true,
      prefix: "zurück", sep: 'trennbar', forms: { praes: "gibt zurück", praet: "gab zurück", perf: "hat zurückgegeben" },
      ru: "возвращать взятую вещь", en: "to give something back",
      examples: [{ de: "Wann musst du das Buch [[zurückgeben]]?", ru: "Когда тебе нужно вернуть книгу?", en: "When do you have to return the book?" }]
    },
    {
      id: "r-geben-durchgeben", de: "durchgeben", pos: 'verb', core: false,
      prefix: "durch", sep: 'trennbar', forms: { praes: "gibt durch", praet: "gab durch", perf: "hat durchgegeben" },
      ru: "передавать сведения по телефону или по связи", en: "to pass on information by phone or radio",
      examples: [{ de: "Können Sie mir die Auftragsnummer am Telefon [[durchgeben]]?", ru: "Можете продиктовать мне номер заказа по телефону?", en: "Could you give me the order number over the phone?" }]
    },
    {
      id: "r-geben-hergeben", de: "hergeben", pos: 'verb', core: false,
      prefix: "her", sep: 'trennbar', forms: { praes: "gibt her", praet: "gab her", perf: "hat hergegeben" },
      ru: "отдавать, расставаться с вещью", en: "to part with something",
      examples: [{ de: "Diese Gitarre würde ich nie [[hergeben]].", ru: "Я бы ни за что не расстался с этой гитарой.", en: "I'd never part with this guitar." }]
    }
  ],
  pairs: []
});
