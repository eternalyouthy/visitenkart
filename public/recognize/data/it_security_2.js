/* Cybersecurity, batch 2: SOC, detection & incident response. Curated (no official list for IT). */
GT.register({ tab: 'it', topic: 'security', items: [
{
  id: 'it-sec-erkennung', pos: 'noun',
  de: 'Erkennung', article: 'die', plural: 'die Erkennungen',
  ru: 'обнаружение, детектирование',
  usage: { says: 'both', note: 'В отчётах и с руководством — «Erkennung» («Angriffserkennung»). В SOC часто «Detection», «Detection Rule», «Use Case».' },
  examples: [
    { de: 'Die [[Erkennung]] von Phishing-Mails funktioniert inzwischen ziemlich gut.', ru: 'Обнаружение фишинговых писем теперь работает довольно хорошо.' },
    { de: 'Für diese Technik haben wir noch keine [[Erkennung]] im SIEM.', ru: 'Для этой техники у нас в SIEM пока нет детекта.' }
  ],
  morph: 'Er-kenn-ung', root: 'kennen',
  parts: [['er-', 'достижение результата'], ['kenn', 'основа kennen — знать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['erkennen', 'kennen', 'die Angriffserkennung', 'die Kenntnis', 'anerkennen'],
  note: '«Angriffserkennung» (Intrusion Detection) встречается в законах и у BSI. «Die Erkennungsrate» — процент обнаружения. Глагол: erkennen.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола erkennen (er- + kennen «знать») + суффикс -ung.\nПроисхождение: др.-в.-нем. irkennen значило «познать, узнать, распознать»; в технике и безопасности отглагольное Erkennung закрепилось как «распознавание, детектирование».\nПрозрачность: переносная — корень kennen легко виден.',
    source: 'DWDS (Pfeifer), s.v. erkennen',
    evidence: 'От erkennen (др.-в.-нем. irkennen «познать, распознать», к kennen) + -ung.'
  },
  ru_link: null
},
{
  id: 'it-sec-erkennen', pos: 'verb',
  de: 'erkennen', forms: { praes: 'erkennt', praet: 'erkannte', perf: 'hat erkannt' }, gov: '+ Akk.',
  ru: 'обнаружить, распознать, узнать',
  usage: { says: 'german', note: 'Обычный глагол: «Der Angriff wurde früh erkannt». «Detecten» звучит как сленг.' },
  examples: [
    { de: 'Der EDR hat die Schadsoftware sofort [[erkannt]].', ru: 'EDR сразу распознал вредоносное ПО.' },
    { de: 'Wir müssen solche Angriffe schneller [[erkennen]].', ru: 'Нам нужно быстрее обнаруживать такие атаки.' }
  ],
  morph: 'er-kenn-en', root: 'kennen',
  parts: [['er-', 'достижение результата'], ['kenn', 'основа kennen — знать'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['kennen', 'die Erkennung', 'die Erkenntnis', 'unerkannt', 'anerkennen'],
  note: 'Смешанное спряжение: erkannte, erkannt (как kennen). «Die Erkenntnis» — вывод, понимание («neue Erkenntnisse aus der Analyse»). «Unerkannt bleiben» — остаться незамеченным.',
  why: {
    confidence: 'high',
    text: 'Состав: неотделяемая приставка er- (достижение результата) + kennen («знать»).\nПроисхождение: др.-в.-нем. irkennen («познать, распознать»); kennen исторически каузатив к können («знать, уметь»), родственный русскому «знать» через и.-е. корень *ǵneh₃-.\nПрозрачность: переносная — «довести до знания» → «распознать, обнаружить».',
    source: 'DWDS (Pfeifer), s.v. erkennen / kennen',
    evidence: 'Др.-в.-нем. irkennen (er- + kennen < и.-е. *ǵneh₃- «знать»).'
  },
  ru_link: null
},
{
  id: 'it-sec-fehlalarm', pos: 'noun',
  de: 'Fehlalarm', article: 'der', plural: 'die Fehlalarme',
  ru: 'ложное срабатывание, ложная тревога',
  usage: { says: 'both', note: 'В SOC — «False Positive» (der False Positive, мн. ч. die False Positives). С нетехническими коллегами — «Fehlalarm».' },
  examples: [
    { de: 'Zum Glück war es nur ein [[Fehlalarm]]: Der Admin hat das Skript selbst gestartet.', ru: 'К счастью, это было ложное срабатывание: админ сам запустил скрипт.' },
    { de: 'Zu viele [[Fehlalarme]] machen das Team müde.', ru: 'Слишком много ложных срабатываний выматывают команду.' }
  ],
  morph: 'Fehl-alarm', root: 'Alarm',
  parts: [['Fehl-', 'ошибочный, мимо'], ['Alarm', 'der Alarm — тревога']],
  transparency: 'transparent',
  family: ['der Alarm', 'fehlen', 'der Fehler', 'die Fehlbedienung', 'der False Positive'],
  note: 'Приставка «Fehl-» = ошибочно: die Fehlkonfiguration, die Fehlbedienung (ошибка оператора). «Ein Fehlalarm wird ausgelöst» — срабатывает ложная тревога. Обратное: «ein echter Treffer» — реальное срабатывание.',
  why: {
    confidence: 'high',
    text: 'Состав: элемент Fehl- («ошибочный», к fehlen/Fehler) + der Alarm («тревога»).\nПроисхождение: Alarm вошло в немецкий в XV–XVI вв. из итальянского военного окрика all’arme! («к оружию!»). Первая часть Fehl- указывает на ложность или ошибку (ср. Fehlkonfiguration, Fehlschlag).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Alarm / fehl-',
    evidence: 'Fehl- («ошибочный») + Alarm (< итал. all’arme! «к оружию!», XV–XVI вв.).'
  },
  ru_link: null
},
{
  id: 'it-sec-bedrohung', pos: 'noun',
  de: 'Bedrohung', article: 'die', plural: 'die Bedrohungen',
  ru: 'угроза',
  usage: { says: 'both', note: '«Bedrohung» — обычное слово («die Bedrohungslage» у BSI). В устойчивых терминах — английский: «Threat Intelligence», «Threat Hunting», «Threat Actor».' },
  examples: [
    { de: 'Ransomware ist zurzeit die größte [[Bedrohung]] für mittelständische Firmen.', ru: 'Шифровальщики сейчас — главная угроза для средних компаний.' },
    { de: 'Wir bewerten jede neue [[Bedrohung]] nach ihrem Risiko für uns.', ru: 'Каждую новую угрозу мы оцениваем по её риску для нас.' }
  ],
  morph: 'Be-droh-ung', root: 'drohen',
  parts: [['be-', 'неотделяемая приставка (делает переходным)'], ['droh', 'основа drohen — угрожать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['drohen', 'bedrohen', 'bedrohlich', 'die Bedrohungslage', 'die Drohung'],
  note: '«Drohen» + Dativ (jdm. drohen), но «bedrohen» + Akk. (jdn. bedrohen). «Die Bedrohungslage» — ситуация с угрозами (типичное слово отчётов BSI).',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола bedrohen (be- + drohen «угрожать») + -ung.\nПроисхождение: drohen восходит к др.-в.-нем. drewen («угрожать, стращать»). Приставка be- делает глагол переходным (jdn. bedrohen вместо jdm. drohen), а Bedrohung обозначает угрозу как явление.\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. drohen / bedrohen',
    evidence: 'be- + drohen (< др.-в.-нем. drewen «угрожать») + -ung.'
  },
  ru_link: null
},
{
  id: 'it-sec-angreifer', pos: 'noun',
  de: 'Angreifer', article: 'der', plural: 'die Angreifer',
  ru: 'злоумышленник, атакующий',
  usage: { says: 'both', note: '«Angreifer» / «Täter» в отчётах и новостях. В SOC — ещё «Threat Actor», «APT-Gruppe».' },
  examples: [
    { de: 'Die [[Angreifer]] waren schon drei Wochen im Netzwerk, bevor wir sie bemerkt haben.', ru: 'Злоумышленники были в сети уже три недели, прежде чем мы их заметили.' },
    { de: 'Der [[Angreifer]] hat sich mit gestohlenen Zugangsdaten angemeldet.', ru: 'Атакующий вошёл с украденными учётными данными.' }
  ],
  morph: 'An-greif-er', root: 'greifen',
  parts: [['an-', 'на, к (angreifen — нападать)'], ['greif', 'основа greifen — хватать'], ['-er', 'тот, кто делает']],
  transparency: 'figurative',
  family: ['angreifen', 'der Angriff', 'greifen', 'der Täter', 'die Angreiferin'],
  note: 'Мн. ч. не меняется: die Angreifer. «Der Täter» — преступник (уголовный контекст). «Sich Zugang verschaffen» — получить доступ (о злоумышленнике).',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола angreifen («нападать», an- + greifen «хватать») + суффикс деятеля -er.\nПроисхождение: angreifen перешло от «схватить, взяться за» к «напасть»; Angreifer — стандартное обозначение атакующего (и в военном деле, и в спорте, и в кибербезопасности).\nПрозрачность: прозрачно относительно глагола angreifen (переносно относительно greifen).',
    source: 'DWDS (Pfeifer), s.v. angreifen',
    evidence: 'От глагола angreifen (an- + greifen) + суффикс деятеля -er.'
  },
  ru_link: null
},
{
  id: 'it-sec-log', pos: 'noun',
  de: 'Log', article: 'das', plural: 'die Logs',
  ru: 'лог, журнал событий',
  usage: { says: 'both', note: 'Айтишники говорят «das Log», «die Logs», «Logdatei». Официально и в документах — «das Protokoll», «die Protokolldatei», «protokollieren».' },
  examples: [
    { de: 'In den [[Logs]] sieht man viele fehlgeschlagene Anmeldungen.', ru: 'В логах видно много неудачных попыток входа.' },
    { de: 'Wie lange bewahren wir die [[Logs]] auf?', ru: 'Сколько времени мы храним логи?' }
  ],
  morph: 'Log',
  family: ['die Logdatei', 'loggen', 'das Protokoll', 'protokollieren', 'die Protokollierung'],
  note: 'Род плавает: чаще «das Log», иногда «der Log». «Logs auswerten / durchsuchen / weiterleiten» — анализировать / искать / пересылать (в SIEM). «Aufbewahren» — хранить.',
  why: {
    confidence: 'high',
    text: 'Состав: заимствование из английского IT-языка (сокращение от logbook / logfile).\nПроисхождение: английское log («бревно») в морском деле стало названием деревянного лага на верёвке для измерения скорости судна; записи показаний вели в logbook («судовой журнал»). Оттуда термин перешёл в компьютеры как хронологический журнал событий.\nПрозрачность: историческая морская метафора (судовой журнал) в IT обычно не осознаётся.',
    source: 'OED / Wiktionary, s.v. log',
    evidence: 'Англ. log («бревно → морской лаг») → logbook («судовой журнал», XVII в.) → компьютерный журнал событий.'
  },
  ru_link: null
},
{
  id: 'it-sec-protokollieren', pos: 'verb',
  de: 'protokollieren', forms: { praes: 'protokolliert', praet: 'protokollierte', perf: 'hat protokolliert' }, gov: '+ Akk.',
  ru: 'протоколировать, логировать; вести протокол (встречи)',
  usage: { says: 'both', note: 'Официально — «protokollieren», «die Protokollierung». В разговоре — «loggen» («Wird das geloggt?»).' },
  examples: [
    { sense: 'логировать события (IT)', de: 'Alle Admin-Zugriffe werden [[protokolliert]].', ru: 'Все действия администраторов протоколируются.' },
    { sense: 'вести протокол встречи', de: 'Wer [[protokolliert]] heute das Meeting?', ru: 'Кто сегодня ведёт протокол встречи?' }
  ],
  morph: 'protokoll-ier-en', root: 'Protokoll',
  parts: [['Protokoll', 'das Protokoll — протокол, журнал'], ['-ier', 'суффикс глаголов из иностранных слов'], ['-en', 'окончание инфинитива']],
  transparency: 'transparent',
  family: ['das Protokoll', 'die Protokollierung', 'die Protokolldatei', 'loggen'],
  meaningType: 'polysemous',
  meaningExplanation: 'В IT protokollieren значит «логировать события системы», а в офисе — «вести протокол совещания».',
  meaningExamples: [{ de: 'Alle Zugriffe werden protokolliert.', ru: 'Все доступы логируются.' }, { de: 'Wer protokolliert das Meeting?', ru: 'Кто ведёт протокол встречи?' }],
  note: 'Глаголы на -ieren образуют Partizip без ge-: protokolliert. «Das Protokoll» — это и журнал событий, и протокол совещания, и сетевой протокол (HTTP).',
  why: {
    confidence: 'high',
    text: 'Состав: существительное das Protokoll + суффикс -ieren.\nПроисхождение: Protokoll восходит через средневековую латынь к греческому prōtókollon — буквально «первый приклеенный лист» (prôtos «первый» + kólla «клей»), который подклеивали в начало папирусного свитка с датой и оглавлением. Позже так стали называть официальную запись хода событий.\nПрозрачность: глагол прозрачно образован от Protokoll.',
    source: 'DWDS (Pfeifer), s.v. Protokoll',
    evidence: 'От Protokoll < ср.-лат. prōtocollum < греч. prōtókollon («первый приклеенный лист свитка»).'
  },
  ru_link: { type: 'internationalism', text: 'протокол / протоколировать: тот же греческий корень. Но в русском IT лог обычно — «лог», а немцы официально говорят Protokoll.' }
},
{
  id: 'it-sec-auffaellig', pos: 'adjective',
  de: 'auffällig',
  ru: 'подозрительный, бросающийся в глаза, аномальный',
  usage: { says: 'german', note: '«Auffällig», «die Auffälligkeit» — стандарт в отчётах и разговоре. «Anomalie» тоже встречается.' },
  examples: [
    { de: 'Gestern Nacht gab es [[auffälligen]] Traffic zu einer Adresse in Osteuropa.', ru: 'Прошлой ночью был подозрительный трафик на адрес в Восточной Европе.' },
    { de: 'Ist dir in den Logs etwas [[Auffälliges]] aufgefallen?', ru: 'Ты заметил что-нибудь необычное в логах?' }
  ],
  morph: 'auf-fäll-ig', root: 'fallen',
  parts: [['auf-', 'приставка (auffallen — бросаться в глаза)'], ['fäll', 'основа fallen — падать (с умлаутом)'], ['-ig', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['auffallen', 'die Auffälligkeit', 'unauffällig', 'fallen', 'der Fall'],
  meaningType: 'figurative',
  meaningExplanation: 'От глагола auffallen («падать на глаза / бросаться в глаза»): образно описывает то, что резко выделяется из нормы (аномальный трафик, поведение).',
  meaningExamples: [{ de: 'auffälliger Netzwerk-Traffic', ru: 'аномальный, «бросающийся в глаза» сетевой трафик' }],
  note: '«Auffallen» + Dativ: «Mir ist etwas aufgefallen» — я кое-что заметил. «Unauffällig» — незаметный (злоумышленник ведёт себя unauffällig). «Die Auffälligkeit» — аномалия, находка.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола auffallen (auf- + fallen «падать») + суффикс -ig с умлаутом.\nПроисхождение: auffallen развило значение «падать на глаза / бросаться в глаза» (XVIII в.), откуда прилагательное auffällig — «приметный, отклоняющийся от нормы».\nПрозрачность: переносная — в паре с глаголом auffallen смысл легко держится в памяти.',
    source: 'DWDS (Pfeifer), s.v. auffallen / auffällig',
    evidence: 'От auffallen («бросаться в глаза», XVIII в.) + -ig.'
  },
  ru_link: null
},
{
  id: 'it-sec-verdaechtig', pos: 'adjective',
  de: 'verdächtig',
  ru: 'подозрительный',
  usage: { says: 'german', note: 'Всегда по-немецки: «verdächtige E-Mail», «verdächtige Aktivität». Ключевое слово для общения с офисом.' },
  examples: [
    { de: 'Bitte leiten Sie [[verdächtige]] E-Mails an security@ weiter.', ru: 'Пожалуйста, пересылайте подозрительные письма на security@.' },
    { de: 'Der Login aus Brasilien um drei Uhr nachts ist sehr [[verdächtig]].', ru: 'Вход из Бразилии в три часа ночи очень подозрителен.' }
  ],
  morph: 'ver-dächt-ig', root: 'Verdacht',
  parts: [['Verdacht', 'der Verdacht — подозрение (с умлаутом, от denken)'], ['-ig', 'суффикс прилагательного']],
  transparency: 'transparent',
  family: ['der Verdacht', 'verdächtigen', 'der/die Verdächtige', 'unverdächtig', 'denken'],
  note: '«Auffällig» — «необычный», «verdächtig» — «возможно, вредоносный». «Jdn. verdächtigen» — подозревать кого-то. «Der/die Verdächtige» — подозреваемый.',
  why: {
    confidence: 'high',
    text: 'Состав: существительное der Verdacht («подозрение» с умлаутом) + суффикс -ig.\nПроисхождение: образовано в ранненововерхненемецком от Verdacht (который исторически связан с глаголом denken «думать»).\nПрозрачность: прозрачно относительно der Verdacht.',
    source: 'DWDS (Pfeifer), s.v. Verdacht / verdächtig',
    evidence: 'Производное от der Verdacht (к denken/dachte) + -ig.'
  },
  ru_link: null
},
{
  id: 'it-sec-verdacht', pos: 'noun',
  de: 'Verdacht', article: 'der', plural: 'die Verdachte',
  ru: 'подозрение',
  usage: { says: 'german', note: '«Verdacht auf + Akk.» — стандарт и в медицине, и в безопасности: «Verdacht auf einen Sicherheitsvorfall».' },
  examples: [
    { de: 'Wir haben den [[Verdacht]], dass ein Konto kompromittiert ist.', ru: 'У нас есть подозрение, что учётная запись скомпрометирована.' },
    { de: 'Bei [[Verdacht]] auf Phishing bitte sofort die IT anrufen.', ru: 'При подозрении на фишинг сразу звоните в IT.' }
  ],
  morph: 'Ver-dacht', root: 'denken',
  parts: [['Ver-', 'неотделяемая приставка'], ['dacht', 'от denken — думать (dachte)']],
  transparency: 'opaque',
  family: ['verdächtig', 'verdächtigen', 'denken', 'der Gedanke', 'die Andacht'],
  note: '«Verdacht auf + Akk.»: Verdacht auf Grippe (у врача), Verdacht auf Datenabfluss. «Unter Verdacht stehen» — быть под подозрением. Мн. ч. почти не используется.',
  why: {
    confidence: 'high',
    text: 'Состав: приставка Ver- + основа -dacht (от глагола denken «думать», ср. dachte).\nПроисхождение: средневерхненемецкое verdāht образовано от глагола verdenken («думать о ком-то дурное, ставить в вину»), откуда «подозрение».\nПрозрачность: непрозрачное — по современному denken значение «подозрение» само не выводится, но основа dacht помогает запомнить форму.',
    source: 'DWDS (Pfeifer), s.v. Verdacht',
    evidence: 'Ср.-в.-нем. verdāht, к verdenken («думать дурное о ком-то», от denken/dachte).'
  },
  ru_link: null
},
{
  id: 'it-sec-eindaemmen', pos: 'verb',
  de: 'eindämmen', forms: { praes: 'dämmt ein', praet: 'dämmte ein', perf: 'hat eingedämmt' }, gov: '+ Akk.',
  ru: 'сдержать, локализовать (распространение)',
  usage: { says: 'both', note: 'В плане реагирования — «Eindämmung». В SOC часто говорят «Containment».' },
  examples: [
    { de: 'Zuerst müssen wir den Angriff [[eindämmen]], dann analysieren wir.', ru: 'Сначала нужно локализовать атаку, потом будем анализировать.' },
    { de: 'Durch die schnelle Isolation konnten wir den Schaden [[eindämmen]].', ru: 'Благодаря быстрой изоляции мы смогли ограничить ущерб.' }
  ],
  morph: 'ein-dämm-en', root: 'Damm',
  parts: [['ein-', 'внутрь, в границы (отделяемая)'], ['dämm', 'der Damm — дамба (с умлаутом)'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['der Damm', 'die Eindämmung', 'dämmen', 'die Dämmung'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «огородить воду дамбой» (der Damm): в кибербезопасности и новостях образ дамбы используют для локализации атаки, пожара или ущерба.',
  meaningExamples: [{ de: 'Hochwasser eindämmen', ru: 'сдержать наводнение дамбой (буквально)' }, { de: 'einen Cyberangriff eindämmen', ru: 'локализовать кибератаку (образно)' }],
  note: 'Образ: «окружить дамбой». Классика из новостей: «ein Feuer / eine Pandemie eindämmen». Фазы реагирования по-немецки: Erkennung → Eindämmung → Beseitigung → Wiederherstellung.',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка ein- («в границы») + dämmen (от der Damm «дамба, плотина»).\nПроисхождение: буквально «огородить дамбой (воду, наводнение)»; переносное значение «удержать в рамках, локализовать» распространилось на пожары, эпидемии и кибератаки.\nПрозрачность: переносная, зрительный образ дамбы очень чёткий.',
    source: 'DWDS (Pfeifer), s.v. Damm / eindämmen',
    evidence: 'ein- + dämmen (от der Damm «дамба»): «огородить плотиной» → «локализовать, сдержать».'
  },
  ru_link: null
},
{
  id: 'it-sec-isolieren', pos: 'verb',
  de: 'isolieren', forms: { praes: 'isoliert', praet: 'isolierte', perf: 'hat isoliert' }, gov: '+ Akk.',
  ru: 'изолировать',
  usage: { says: 'both', note: '«Den Rechner isolieren» — стандарт. Также «vom Netz nehmen» — отключить от сети.' },
  examples: [
    { de: 'Wir haben den infizierten Laptop sofort [[isoliert]].', ru: 'Мы сразу изолировали заражённый ноутбук.' },
    { de: 'Kannst du den Server vom Netz nehmen oder zumindest [[isolieren]]?', ru: 'Можешь отключить сервер от сети или хотя бы изолировать?' }
  ],
  morph: 'isol-ier-en',
  family: ['die Isolation', 'die Isolierung', 'isoliert', 'vom Netz nehmen'],
  note: 'Partizip без ge-: isoliert. «Den Rechner vom Netz nehmen» — понятная фраза для нетехнических коллег. В быту «isolieren» — ещё и утеплять (Haus isolieren).',
  why: {
    confidence: 'high',
    text: 'Состав: заимствованная основа isol- + суффикс -ieren.\nПроисхождение: вошло в немецкий в XVIII в. из французского isoler (< итал. isolare «сделать островом», от isola < лат. īnsula «остров»). Отделить заражённый хост от сети — буквально «сделать его островом».\nПрозрачность: международный глагол.',
    source: 'DWDS (Pfeifer), s.v. isolieren',
    evidence: 'В XVIII в. из фр. isoler < итал. isolare («сделать островом», от isola < лат. īnsula).'
  },
  ru_link: { type: 'internationalism', text: 'изолировать: оба от итальянского/французского isolare / isoler («сделать островом»).' }
},
{
  id: 'it-sec-eskalieren', pos: 'verb',
  de: 'eskalieren', forms: { praes: 'eskaliert', praet: 'eskalierte', perf: 'hat / ist eskaliert' },
  ru: 'эскалировать (передать выше); обостриться',
  usage: { says: 'both', note: 'Тот же глагол, что в английском: «ein Ticket an Level 2 eskalieren». «Die Eskalationsstufe» — уровень эскалации.' },
  examples: [
    { sense: 'эскалировать, передать выше (haben)', de: 'Ich habe den Vorfall an das Incident-Response-Team [[eskaliert]].', ru: 'Я эскалировал инцидент команде реагирования.' },
    { sense: 'обостриться само по себе (sein)', de: 'Die Situation ist schnell [[eskaliert]].', ru: 'Ситуация быстро обострилась.' }
  ],
  morph: 'eskal-ier-en',
  family: ['die Eskalation', 'die Eskalationsstufe', 'der Eskalationsweg', 'deeskalieren'],
  meaningType: 'polysemous',
  meaningExplanation: 'С haben глагол переходный — «передать инцидент на уровень выше»; с sein непереходный — «ситуация/конфликт обострились сами по себе».',
  meaningExamples: [{ de: 'Ich habe das Ticket eskaliert.', ru: 'Я эскалировал тикет выше (haben).' }, { de: 'Der Streit ist eskaliert.', ru: 'Спор обострился (sein).' }],
  note: 'Переходный (передать дальше) → haben: «Ich habe das Ticket eskaliert». Непереходный (обострилось само) → sein: «Der Streit ist eskaliert». «Der Eskalationsweg» — порядок эскалации.',
  why: {
    confidence: 'high',
    text: 'Состав: заимствованная основа eskal- + суффикс -ieren.\nПроисхождение: заимствовано во второй половине XX в. из английского escalate («подниматься по ступеням, нарастать»), которое само образовано от слова escalator («эскалатор», от латинского scāla «лестница»).\nПрозрачность: международный термин (образ подъёма на ступень выше).',
    source: 'DWDS / OED, s.v. eskalieren / escalate',
    evidence: 'Из англ. escalate (XX в., обратное образование от escalator < лат. scāla «лестница»).'
  },
  ru_link: { type: 'internationalism', text: 'эскалация: общее происхождение (через английский escalate). Значения совпадают.' }
},
{
  id: 'it-sec-bereitschaft', pos: 'noun',
  de: 'Bereitschaft', article: 'die', plural: 'die Bereitschaften',
  ru: 'дежурство, готовность; on-call',
  usage: { says: 'both', note: '«Rufbereitschaft» / «Bereitschaftsdienst» — официально и в договоре. В командах — «On-Call», «Ich habe diese Woche On-Call».' },
  examples: [
    { de: 'Wer hat am Wochenende [[Bereitschaft]]?', ru: 'Кто дежурит на выходных?' },
    { de: 'Die [[Bereitschaft]] wird extra bezahlt.', ru: 'Дежурство оплачивается отдельно.' }
  ],
  morph: 'Bereit-schaft', root: 'bereit',
  parts: [['bereit', 'готовый'], ['-schaft', 'суффикс существительного, всегда die']],
  transparency: 'transparent',
  family: ['bereit', 'die Rufbereitschaft', 'der Bereitschaftsdienst', 'vorbereiten', 'bereitstellen'],
  note: '«Bereitschaft haben» — дежурить. «Rufbereitschaft» — дежурство на телефоне (можно быть дома). Также «готовность»: «Bereitschaft zur Zusammenarbeit».',
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное bereit («готовый») + суффикс -schaft.\nПроисхождение: bereit (ср.-в.-нем. bereit, родственно английскому ready) восходит к тому же германскому корню, что и reiten («ехать верхом»): первоначально «готовый к выезду/походу». В службах и IT — состояние готовности к вызову (дежурство).\nПрозрачность: прозрачно относительно bereit.',
    source: 'DWDS (Pfeifer), s.v. bereit / Bereitschaft',
    evidence: 'bereit (к герм. корню reiten «готовый к выезду», англ. ready) + суффикс -schaft.'
  },
  ru_link: null
},
{
  id: 'it-sec-schicht', pos: 'noun',
  de: 'Schicht', article: 'die', plural: 'die Schichten',
  ru: 'смена (рабочая); слой',
  usage: { says: 'german', note: 'В SOC — «Schicht», «Schichtbetrieb», «Nachtschicht». «Shift» почти не говорят.' },
  examples: [
    { de: 'Diese Woche habe ich [[Spätschicht]] von 14 bis 22 Uhr.', ru: 'На этой неделе у меня вечерняя смена с 14 до 22.' },
    { de: 'Der SOC arbeitet im Drei-[[Schicht]]-Betrieb.', ru: 'SOC работает в три смены.' }
  ],
  morph: 'Schicht',
  family: ['die Frühschicht', 'die Spätschicht', 'die Nachtschicht', 'der Schichtbetrieb', 'die Schichtübergabe'],
  meaningType: 'polysemous',
  meaningExplanation: 'Слово die Schicht имеет два самостоятельных значения (оба пришли из горного дела): рабочая смена и слой (в сети, атмосфере, материале).',
  meaningExamples: [{ de: 'Ich habe heute Spätschicht.', ru: 'У меня сегодня вечерняя смена.' }, { de: 'die Schicht im OSI-Modell', ru: 'уровень/слой в модели OSI' }],
  note: 'Früh-, Spät-, Nachtschicht — утренняя, вечерняя, ночная. «Im Schichtbetrieb arbeiten». Второе значение — слой («die Schicht im Netzwerkmodell», «die Ozonschicht»).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное существительное (мн. ч. die Schichten).\nПроисхождение: средневерхненемецкое schiht значило «ряд, порядок, распределение». В горном деле слово закрепилось сразу в двух смыслах: геологический «слой, пласт» и «рабочий отрезок времени одной бригады» — отсюда и сетевой слой (OSI-Schicht), и рабочая смена в SOC.\nПрозрачность: оба современных значения объединены историей горного термина.',
    source: 'DWDS (Pfeifer), s.v. Schicht',
    evidence: 'Ср.-в.-нем. schiht «порядок, ряд»; в горном деле развились значения «пласт/слой» и «рабочая смена».'
  },
  ru_link: null
},
{
  id: 'it-sec-uebergabe', pos: 'noun',
  de: 'Übergabe', article: 'die', plural: 'die Übergaben',
  ru: 'передача (смены, дел, проекта)',
  usage: { says: 'german', note: '«Schichtübergabe» — передача смены. «Handover» иногда говорят в международных командах.' },
  examples: [
    { sense: 'передача смены', de: 'Bei der [[Übergabe]] habe ich die offenen Tickets erklärt.', ru: 'При передаче смены я объяснил открытые тикеты.' },
    { sense: 'передача дел перед отпуском', de: 'Vor meinem Urlaub mache ich noch eine [[Übergabe]] an Lisa.', ru: 'Перед отпуском я ещё передам дела Лизе.' }
  ],
  morph: 'Über-gabe', root: 'geben',
  parts: [['Über-', 'через, «передать»'], ['Gabe', 'от geben — давать (die Gabe — дар, передача)']],
  transparency: 'transparent',
  family: ['übergeben', 'geben', 'die Schichtübergabe', 'die Übergabedokumentation'],
  note: 'Глагол «übergeben» — передать (неотделяемый: übergab, hat übergeben). Внимание: «sich übergeben» — это «стошнить»!',
  why: {
    confidence: 'high',
    root: 'geben',
    text: 'Состав: от глагола übergeben (über- «через» + geben «давать»).\nПроисхождение: отглагольное имя от übergeben («передать из рук в руки»); ср. русское «пере-дача» (пере- + дать), построенное по той же модели.\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. übergeben / Gabe',
    evidence: 'От übergeben (über- + geben) по продуктивной модели -gabe (ср. Aufgabe, Angabe, Ausgabe).'
  },
  ru_link: null
},
{
  id: 'it-sec-zeitstempel', pos: 'noun',
  de: 'Zeitstempel', article: 'der', plural: 'die Zeitstempel',
  ru: 'метка времени, таймстемп',
  usage: { says: 'both', note: 'В документах — «Zeitstempel». В разговоре часто «Timestamp» (der Timestamp).' },
  examples: [
    { de: 'Laut [[Zeitstempel]] kam die Mail um 03:12 Uhr an.', ru: 'Судя по метке времени, письмо пришло в 03:12.' },
    { de: 'Die [[Zeitstempel]] auf den beiden Servern passen nicht zusammen.', ru: 'Метки времени на двух серверах не совпадают.' }
  ],
  morph: 'Zeit-stempel', root: 'Zeit · Stempel',
  parts: [['Zeit-', 'die Zeit — время'], ['Stempel', 'der Stempel — штамп, печать']],
  transparency: 'transparent',
  family: ['die Zeit', 'der Stempel', 'stempeln', 'die Zeitzone', 'die Zeitleiste'],
  note: '«Die Zeitleiste» — таймлайн (хронология инцидента). «Die Zeitzone» — часовой пояс (частая причина путаницы в логах: UTC vs MEZ).',
  why: {
    confidence: 'high',
    text: 'Состав: die Zeit («время») + der Stempel («штамп, печать»).\nПроисхождение: der Stempel восходит к глаголу stampfen («ударять, теснить» — инструмент для нанесения оттиска); в IT сложение Zeitstempel стало немецким эквивалентом английского timestamp.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Stempel; DWDS: Zeitstempel',
    evidence: 'Zeit + Stempel (к stampfen); в информатике — эквивалент англ. timestamp.'
  },
  ru_link: null
},
{
  id: 'it-sec-ursache', pos: 'noun',
  de: 'Ursache', article: 'die', plural: 'die Ursachen',
  ru: 'причина',
  usage: { says: 'both', note: '«Ursache», «Ursachenanalyse» — стандарт. В техкомандах — «Root Cause», «Root-Cause-Analyse».' },
  examples: [
    { de: 'Die [[Ursache]] war ein falsch konfigurierter Server.', ru: 'Причиной был неправильно настроенный сервер.' },
    { de: 'Wir kennen die [[Ursache]] noch nicht, wir sind noch dran.', ru: 'Мы пока не знаем причину, ещё разбираемся.' }
  ],
  morph: 'Ur-sache', root: 'Sache',
  parts: [['Ur-', 'перво-, изначальный'], ['Sache', 'die Sache — дело, вещь']],
  transparency: 'figurative',
  family: ['die Sache', 'verursachen', 'ursächlich', 'die Ursachenanalyse'],
  note: '«Die Ursache für + Akk.»: die Ursache für den Ausfall. «Verursachen» — вызвать, стать причиной. «Keine Ursache!» — не за что (ответ на «Danke»)!',
  why: {
    confidence: 'high',
    text: 'Состав: приставка ur- («перво-, изначальный») + die Sache («дело, предмет»).\nПроисхождение: др.-в.-нем. sahha первоначально значило «судебный спор, дело, основание спора»; в XIV–XV вв. сложение ursache закрепилось как «первоначальное основание → причина» (ср. Urwald «первобытный лес», Ursprung «источник»).\nПрозрачность: переносная — обе части узнаваемы.',
    source: 'DWDS (Pfeifer), s.v. Ursache / Sache',
    evidence: 'Ср.-в.-нем. ursache из ur- («изначальный») + Sache («дело, основание судебного иска»).'
  },
  ru_link: null
},
{
  id: 'it-sec-bericht', pos: 'noun',
  de: 'Bericht', article: 'der', plural: 'die Berichte',
  ru: 'отчёт, доклад',
  usage: { says: 'both', note: '«Bericht», «Abschlussbericht» — стандарт. «Report» тоже говорят («der Report»).' },
  examples: [
    { de: 'Bis Freitag brauche ich einen kurzen [[Bericht]] zum Vorfall.', ru: 'До пятницы мне нужен короткий отчёт по инциденту.' },
    { de: 'Im [[Bericht]] stehen alle Maßnahmen, die wir getroffen haben.', ru: 'В отчёте перечислены все принятые нами меры.' }
  ],
  morph: 'Be-richt', root: 'richten',
  parts: [['Be-', 'неотделяемая приставка'], ['richt', 'основа richten — направлять (berichten — сообщать)']],
  transparency: 'opaque',
  family: ['berichten', 'die Berichterstattung', 'der Abschlussbericht', 'richten'],
  note: '«Über etw. (Akk.) berichten» — сообщать о чём-то. «Der Abschlussbericht» — итоговый отчёт. «Laut Bericht» — согласно отчёту.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола berichten (be- + richten «выпрямлять, наводить порядок»).\nПроисхождение: средневерхненемецкое berihten значило «привести в порядок, уладить, разъяснить, осведомить», откуда в деловой речи XV–XVI вв. развилось значение «доложить, сообщить» и существительное der Bericht («отчёт»).\nПрозрачность: непрозрачное — современное richten («направлять, судить») не подсказывает смысл «отчёт».',
    source: 'DWDS (Pfeifer), s.v. berichten / Bericht',
    evidence: 'От ср.-в.-нем. berihten («привести в порядок, разъяснить» → «сообщить, доложить», к richten).'
  },
  ru_link: null
},
{
  id: 'it-sec-forensik', pos: 'noun',
  de: 'Forensik', article: 'die',
  ru: 'форензика, компьютерная криминалистика',
  usage: { says: 'german', note: '«IT-Forensik», «forensische Analyse» — стандарт. «Forensics» — редко.' },
  examples: [
    { de: 'Den Laptop schicken wir zur [[Forensik]].', ru: 'Ноутбук отправим на форензику.' },
    { de: 'Für die [[Forensik]] dürfen wir den Rechner nicht neu starten.', ru: 'Ради форензики нельзя перезагружать компьютер.' }
  ],
  morph: 'Forensik',
  family: ['forensisch', 'der Forensiker', 'die IT-Forensik', 'die Beweissicherung'],
  note: '«Die Beweissicherung» — сохранение доказательств (важно до перезагрузки!). «Ein forensisches Image ziehen» — снять образ диска.',
  why: {
    confidence: 'high',
    text: 'Состав: заимствование (от прилагательного forensisch).\nПроисхождение: от латинского forēnsis («относящийся к форуму», от forum — римской площади, где проходили публичные судебные разбирательства). Поэтому forensisch буквально значит «судебный» — сначала в судебной медицине, а теперь и в IT-криминалистике.\nПрозрачность: объясняет связь термина с судом и сбором доказательств.',
    source: 'DWDS / OED, s.v. Forensik / forensic',
    evidence: 'От лат. forēnsis («относящийся к форуму / суду», от forum).'
  },
  ru_link: { type: 'internationalism', text: 'форензика: от латинского forensis («относящийся к форуму, суду»). По-русски чаще «компьютерная криминалистика».' }
},
{
  id: 'it-sec-spur', pos: 'noun',
  de: 'Spur', article: 'die', plural: 'die Spuren',
  ru: 'след',
  usage: { says: 'german', note: '«Spuren» — обычное слово. Техтермин «Artefakte» тоже распространён.' },
  examples: [
    { de: 'Die Angreifer haben versucht, ihre [[Spuren]] zu verwischen.', ru: 'Злоумышленники пытались замести следы.' },
    { de: 'Auf dem Server haben wir keine [[Spuren]] gefunden.', ru: 'На сервере мы не нашли никаких следов.' }
  ],
  morph: 'Spur',
  family: ['spüren', 'aufspüren', 'die Spurensicherung', 'die Fahrspur'],
  note: '«Spuren verwischen» — заметать следы. «Aufspüren» — выследить. «Die Spurensicherung» — сбор улик. Также полоса движения: «die Spur wechseln».',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное существительное (мн. ч. die Spuren).\nПроисхождение: общегерманское слово (др.-в.-нем. spor «след, отпечаток ноги»). От него образован глагол spüren («идти по следу → выследить, почувствовать»).\nПрозрачность: базовый корень (Spur ↔ spüren ↔ aufspüren).',
    source: 'DWDS (Pfeifer), s.v. Spur / spüren',
    evidence: 'Др.-в.-нем. spor < герм. *spura- «след»; от него производны spüren и aufspüren.'
  },
  ru_link: null
},
{
  id: 'it-sec-hinweis', pos: 'noun',
  de: 'Hinweis', article: 'der', plural: 'die Hinweise',
  ru: 'указание, признак; подсказка, замечание',
  usage: { says: 'both', note: '«Hinweis auf eine Kompromittierung» — признак компрометации. Технически — «IoC» (Indicator of Compromise), говорят «I-O-C» или «IOCs».' },
  examples: [
    { sense: 'признак, указание (на что-то)', de: 'Es gibt keine [[Hinweise]] darauf, dass Daten abgeflossen sind.', ru: 'Нет признаков того, что данные утекли.' },
    { sense: 'подсказка, замечание', de: 'Danke für den [[Hinweis]], ich schaue mir das an.', ru: 'Спасибо за подсказку, я посмотрю.' }
  ],
  morph: 'Hin-weis', root: 'weisen',
  parts: [['Hin-', 'туда, в направлении'], ['weis', 'основа weisen — указывать']],
  transparency: 'figurative',
  family: ['hinweisen auf', 'weisen', 'der Ausweis', 'die Überweisung', 'der Beweis'],
  meaningType: 'polysemous',
  meaningExplanation: 'Hinweis обозначает и косвенный признак/индикатор (напр. компрометации), и практическую подсказку или замечание коллеги.',
  meaningExamples: [{ de: 'Hinweise auf eine Kompromittierung', ru: 'признаки компрометации' }, { de: 'Danke für den hilfreichen Hinweis!', ru: 'Спасибо за полезную подсказку!' }],
  note: '«Hinweis auf + Akk.»; «Es gibt Hinweise darauf, dass …» — есть признаки того, что … Типичная осторожная формулировка для руководства. «Jdn. auf etw. hinweisen» — обратить чьё-то внимание.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола hinweisen (hin- «туда, в сторону» + weisen «указывать»).\nПроисхождение: буквально «указание направления» — слово закрепилось в XVIII–XIX вв. для подсказки, замечания и косвенного признака (того, что «указывает» на факт).\nПрозрачность: переносная, но корень weisen (ср. Ausweis, Beweis, Nachweis) хорошо читается.',
    source: 'DWDS (Pfeifer), s.v. hinweisen / weisen',
    evidence: 'Отглагольное имя от hinweisen (hin- + weisen «указывать на что-то»).'
  },
  ru_link: null
},
{
  id: 'it-sec-ueberwachen', pos: 'verb',
  de: 'überwachen', forms: { praes: 'überwacht', praet: 'überwachte', perf: 'hat überwacht' }, gov: '+ Akk.',
  ru: 'мониторить, отслеживать, наблюдать',
  usage: { says: 'both', note: '«Überwachen», «die Überwachung» — официально. В IT очень часто «Monitoring» (das Monitoring) и «monitoren».' },
  examples: [
    { sense: 'мониторить системы (IT)', de: 'Wir [[überwachen]] alle Server rund um die Uhr.', ru: 'Мы мониторим все серверы круглосуточно.' },
    { sense: 'наблюдать, контролировать', de: 'Dieser Bereich wird per Video [[überwacht]].', ru: 'Эта зона находится под видеонаблюдением.' }
  ],
  morph: 'über-wach-en', root: 'wach',
  parts: [['über-', 'над (неотделяемая)'], ['wach', 'wach — бодрствующий'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['die Überwachung', 'wach', 'bewachen', 'das Monitoring'],
  meaningType: 'polysemous',
  meaningExplanation: 'überwachen означает и технический мониторинг серверов/сетей, и наблюдение/контроль за территорией или людьми (в офисе может звучать как «слежка»).',
  meaningExamples: [{ de: 'alle Server rund um die Uhr überwachen', ru: 'круглосуточно мониторить серверы' }, { de: 'Dieser Bereich wird per Video überwacht.', ru: 'Эта зона под видеонаблюдением.' }],
  note: 'Неотделяемый: überwachte, hat überwacht (без ge-). Осторожно со словом в разговоре с коллегами: «Überwachung» звучит как «слежка за сотрудниками» (тема для Betriebsrat). Нейтральнее — «Monitoring».',
  why: {
    confidence: 'high',
    text: 'Состав: неотделяемая приставка über- («над») + wachen («бодрствовать», к прилагательному wach).\nПроисхождение: буквально «бодрствовать над чем-то, не спускать глаз» — с XIX в. закрепилось в административном и техническом значении «контролировать, наблюдать, мониторить».\nПрозрачность: переносная, корень wach («бодрствующий») виден сразу.',
    source: 'DWDS (Pfeifer), s.v. wachen / überwachen',
    evidence: 'über- («над») + wachen («бодрствовать»): «вести надзор, контролировать» (с XIX в.).'
  },
  ru_link: null
},
{
  id: 'it-sec-abwehren', pos: 'verb',
  de: 'abwehren', forms: { praes: 'wehrt ab', praet: 'wehrte ab', perf: 'hat abgewehrt' }, gov: '+ Akk.',
  ru: 'отразить, отбить (атаку)',
  usage: { says: 'german', note: '«Einen Angriff abwehren», «die Abwehr» — стандарт. Английского аналога в речи нет.' },
  examples: [
    { de: 'Der Angriff konnte rechtzeitig [[abgewehrt]] werden.', ru: 'Атаку удалось вовремя отразить.' },
    { de: 'Die Firewall [[wehrt]] die meisten Scans automatisch [[ab]].', ru: 'Файрвол автоматически отбивает большинство сканирований.' }
  ],
  morph: 'ab-wehr-en', root: 'wehren',
  parts: [['ab-', 'прочь (отделяемая)'], ['wehr', 'основа sich wehren — защищаться'], ['-en', 'окончание инфинитива']],
  transparency: 'transparent',
  family: ['sich wehren', 'die Abwehr', 'die Feuerwehr', 'die Bundeswehr', 'die Gegenwehr'],
  note: '«Die Abwehr» — оборона, защита. Тот же корень в «die Feuerwehr» (пожарная команда) и «die Bundeswehr». «Sich wehren» — сопротивляться.',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка ab- («прочь») + глагол wehren («защищать, преграждать»).\nПроисхождение: др.-в.-нем. werien значило «защищать, удерживать врага»; тот же корень входит в die Feuerwehr («пожарная охрана») и die Bundeswehr («вооружённые силы»). С ab- — «отбить прочь, отразить».\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. wehren / abwehren',
    evidence: 'ab- («прочь») + wehren (< др.-в.-нем. werien «защищать, преграждать путь»).'
  },
  ru_link: null
},
{
  id: 'it-sec-kompromittiert', pos: 'adjective',
  de: 'kompromittiert',
  ru: 'скомпрометированный',
  usage: { says: 'both', note: '«Kompromittiert» — стандарт в отчётах. Разговорно — «gehackt», «übernommen» (захвачен).' },
  examples: [
    { de: 'Das Konto von Herrn Wagner ist [[kompromittiert]], bitte sofort sperren.', ru: 'Учётная запись господина Вагнера скомпрометирована, пожалуйста, сразу заблокируйте.' },
    { de: 'Wir gehen davon aus, dass mindestens zwei Server [[kompromittiert]] wurden.', ru: 'Мы исходим из того, что скомпрометированы как минимум два сервера.' }
  ],
  morph: 'kompromittiert',
  family: ['kompromittieren', 'die Kompromittierung', 'gehackt', 'übernommen'],
  note: 'Причастие от «kompromittieren». «Die Kompromittierung» — компрометация. Для нетехнических коллег проще: «Ihr Konto wurde gehackt / missbraucht».',
  why: {
    confidence: 'high',
    text: 'Состав: причастие II от глагола kompromittieren.\nПроисхождение: заимствовано в XVIII в. из французского compromettre (< лат. comprōmittere «взаимно обещать, передавать спор третейскому судье»); позже развилось значение «поставить под удар репутацию или безопасность».\nПрозрачность: международный термин, совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. kompromittieren',
    evidence: 'В XVIII в. из фр. compromettre < лат. comprōmittere; значение «поставить под удар, подорвать безопасность».'
  },
  ru_link: { type: 'internationalism', text: 'скомпрометированный: тот же французский источник (compromettre). Значения совпадают.' }
}
]});
