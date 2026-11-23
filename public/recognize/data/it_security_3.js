/* Cybersecurity, batch 3: attacks, accounts & access. Curated (no official list for IT). */
GT.register({ tab: 'it', topic: 'security', items: [
{
  id: 'it-sec-erpressung', pos: 'noun',
  de: 'Erpressung', article: 'die', plural: 'die Erpressungen',
  ru: 'вымогательство, шантаж',
  usage: { says: 'both', note: 'В новостях и у полиции — «Erpressung», «Cybererpressung». В SOC про само вредоносное ПО говорят «Ransomware», «Extortion» — редко.' },
  examples: [
    { de: 'Nach dem Angriff kam eine [[Erpressung]]: Die Täter wollten Geld für die Daten.', ru: 'После атаки последовало вымогательство: преступники требовали деньги за данные.' },
    { de: 'Wir zeigen die [[Erpressung]] bei der Polizei an.', ru: 'Мы заявим о вымогательстве в полицию.' }
  ],
  morph: 'Er-press-ung', root: 'pressen',
  parts: [['er-', 'достижение результата'], ['press', 'основа pressen — давить, жать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['erpressen', 'der Erpresser', 'pressen', 'die Presse', 'erpresserisch'],
  note: 'Глагол: «jdn. erpressen» — шантажировать кого-то (+ Akk.). «Die doppelte Erpressung» — двойное вымогательство: данные шифруют и угрожают опубликовать. «Anzeige erstatten» / «anzeigen» — подать заявление в полицию.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола erpressen (er- + pressen «давить, выжимать») + -ung.\nПроисхождение: pressen заимствовано из латинского pressāre («сильно давить»); erpressen буквально значило «выжать, выдавить силой (деньги, признание)» — отсюда с XVI–XVII вв. юридическое значение «вымогательство».\nПрозрачность: переносная, метафора «выжимания» хорошо заметна.',
    source: 'DWDS (Pfeifer), s.v. erpressen / pressen',
    evidence: 'er- + pressen (< лат. pressāre «давить»): буквально «выдавить силой» → «вымогать».'
  },
  ru_link: null
},
{
  id: 'it-sec-loesegeld', pos: 'noun',
  de: 'Lösegeld', article: 'das', plural: 'die Lösegelder',
  ru: 'выкуп',
  usage: { says: 'german', note: '«Lösegeld» — обычное слово, в том числе в официальных рекомендациях BSI. «Ransom» почти не говорят.' },
  examples: [
    { de: 'Die Angreifer fordern ein [[Lösegeld]] in Bitcoin.', ru: 'Злоумышленники требуют выкуп в биткоинах.' },
    { de: 'Wir zahlen kein [[Lösegeld]], wir stellen die Daten aus dem Backup wieder her.', ru: 'Мы не платим выкуп, мы восстанавливаем данные из бэкапа.' }
  ],
  morph: 'Löse-geld', root: 'lösen',
  parts: [['Löse-', 'основа lösen — освобождать, выкупать'], ['Geld', 'das Geld — деньги']],
  transparency: 'figurative',
  family: ['lösen', 'auslösen', 'die Lösung', 'das Geld', 'erlösen'],
  note: '«Lösegeld fordern / zahlen» — требовать / платить выкуп. Средний род из-за «das Geld». «Lösen» здесь в старом значении «освободить» (заложника).',
  ru_link: null,
  why: {
    confidence: 'high',
    text: 'Состав: основа глагола lösen («освобождать, развязывать») + das Geld («деньги»).\nПроисхождение: сложение засвидетельствовано с XVI в. (в переводе Библии Лютера) со значением «деньги за освобождение пленника или заложника». В IT перешло на выкуп при атаках шифровальщиков.\nПрозрачность: переносная — в современном языке lösen чаще значит «решать задачу», а не «освобождать».',
    source: 'DWDS (Pfeifer), s.v. Lösegeld / lösen',
    evidence: 'Сложение XVI в. от lösen («освобождать, выкупать») + Geld («деньги») для выкупа пленника.'
  }
},
{
  id: 'it-sec-trojaner', pos: 'noun',
  de: 'Trojaner', article: 'der', plural: 'die Trojaner',
  ru: 'троян (вредоносная программа)',
  usage: { says: 'german', note: '«Der Trojaner» — немецкая форма, её используют все. Официально полнее: «das Trojanische Pferd».' },
  examples: [
    { de: 'Der [[Trojaner]] war in einer gefälschten Rechnung versteckt.', ru: 'Троян был спрятан в поддельном счёте.' },
    { de: 'Über den [[Trojaner]] hatten die Angreifer Fernzugriff auf den Rechner.', ru: 'Через троян у злоумышленников был удалённый доступ к компьютеру.' }
  ],
  morph: 'Trojaner',
  family: ['das Trojanische Pferd', 'die Schadsoftware', 'die Malware', 'der Banking-Trojaner'],
  note: 'Мн. ч. не меняется: die Trojaner. Изначально «Trojaner» — житель Трои. «Banking-Trojaner» — банковский троян.',
  ru_link: { type: 'internationalism', text: 'троян: оба названия идут от «троянского коня» из греческого мифа.' },
  why: {
    confidence: 'high',
    text: 'Состав: существительное Trojaner (изначально «житель Трои»).\nПроисхождение: сокращение компьютерного термина Trojanisches Pferd (калька англ. Trojan horse, известного в IT с 1970–1980-х гг.), отсылающего к античному мифу о троянском коне, внутри которого прятались враги. Русское «троян» сокращено из того же выражения.\nПрозрачность: метафорический термин, прозрачный через миф о троянском коне.',
    source: 'DWDS, s.v. Trojaner; OED: Trojan horse',
    evidence: 'Сокращение от Trojanisches Pferd (с англ. Trojan horse, компьютерный термин с 1970-х гг.), по античному мифу.'
  }
},
{
  id: 'it-sec-botnetz', pos: 'noun',
  de: 'Botnetz', article: 'das', plural: 'die Botnetze',
  ru: 'ботнет',
  usage: { says: 'both', note: 'Пишут «Botnetz», говорят и «Botnet». Заражённый компьютер в нём — «der Bot».' },
  examples: [
    { de: 'Die DDoS-Attacke kam aus einem [[Botnetz]] mit tausenden Geräten.', ru: 'DDoS-атака шла из ботнета с тысячами устройств.' },
    { de: 'Viele Router sind ungewollt Teil eines [[Botnetzes]].', ru: 'Многие роутеры невольно стали частью ботнета.' }
  ],
  morph: 'Bot-netz', root: 'Netz',
  parts: [['Bot-', 'сокращение от Roboter — робот'], ['Netz', 'das Netz — сеть']],
  transparency: 'transparent',
  family: ['das Netz', 'der Bot', 'das Netzwerk', 'die DDoS-Attacke'],
  note: 'Средний род из-за «das Netz»; родительный: des Botnetzes. «Die DDoS-Attacke / der DDoS-Angriff» — DDoS-атака.',
  why: {
    confidence: 'high',
    text: 'Состав: Bot (сокращение от Roboter) + das Netz («сеть»).\nПроисхождение: слово Robot ввели братья Карел и Йозеф Чапеки в пьесе R.U.R. (1920) от чешского robota («подневольный труд, барщина» — родственного русскому «работа»). В IT-английском его сократили до bot, а в немецком соединили с Netz.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Roboter; OED: bot',
    evidence: 'Bot < Robot (К. и Й. Чапеки, 1920, от чеш. robota «подневольный труд») + нем. Netz.'
  },
  ru_link: null
},
{
  id: 'it-sec-datenabfluss', pos: 'noun',
  de: 'Datenabfluss', article: 'der', plural: 'die Datenabflüsse',
  ru: 'утечка (вывод) данных, эксфильтрация',
  usage: { says: 'both', note: 'В отчётах — «Datenabfluss». В SOC — «Exfiltration», «Daten wurden exfiltriert».' },
  examples: [
    { de: 'Bisher gibt es keine Hinweise auf einen [[Datenabfluss]].', ru: 'Пока нет признаков утечки данных.' },
    { de: 'Den [[Datenabfluss]] haben wir über ungewöhnlich große Uploads entdeckt.', ru: 'Вывод данных мы обнаружили по необычно большим выгрузкам.' }
  ],
  morph: 'Daten-abfluss', root: 'fließen',
  parts: [['Daten-', 'die Daten — данные'], ['Abfluss', 'der Abfluss — отток (от abfließen — утекать)']],
  transparency: 'figurative',
  family: ['fließen', 'der Fluss', 'abfließen', 'die Daten', 'das Datenleck'],
  meaningType: 'figurative',
  meaningExplanation: 'Слово строится на образе утекающей жидкости (der Abfluss — сток, отток воды), перенесённом на несанкционированный вывод данных из сети.',
  meaningExamples: [{ de: 'einen Datenabfluss verhindern', ru: 'предотвратить утечку (отток) данных' }],
  note: 'Образ «данные утекают»: «Daten sind abgeflossen» — данные утекли (Perfekt с sein). Важная формулировка для руководства: «Ein Datenabfluss kann nicht ausgeschlossen werden» — утечку нельзя исключить.',
  why: {
    confidence: 'high',
    text: 'Состав: die Daten («данные», мн. ч. от лат. datum «данное») + der Abfluss («отток», от abfließen «утекать»).\nПроисхождение: метафора жидкости — данные «утекают» наружу, как вода (ср. русское «утечка данных»).\nПрозрачность: переносная, образ «оттока данных» полностью читается.',
    source: 'DWDS, s.v. Daten / Abfluss',
    evidence: 'Daten (< лат. data «данные») + Abfluss (от abfließen «утекать, стекать»).'
  },
  ru_link: null
},
{
  id: 'it-sec-datenleck', pos: 'noun',
  de: 'Datenleck', article: 'das', plural: 'die Datenlecks',
  ru: 'утечка данных',
  usage: { says: 'both', note: 'В новостях — «Datenleck», «Datenpanne». Юридически по DSGVO — «Verletzung des Schutzes personenbezogener Daten». В IT также «Data Breach».' },
  examples: [
    { de: 'Durch das [[Datenleck]] sind Kundendaten im Internet gelandet.', ru: 'Из-за утечки данные клиентов оказались в интернете.' },
    { de: 'Jedes [[Datenleck]] muss innerhalb von 72 Stunden gemeldet werden.', ru: 'О каждой утечке данных нужно сообщить в течение 72 часов.' }
  ],
  morph: 'Daten-leck', root: 'Leck',
  parts: [['Daten-', 'die Daten — данные'], ['Leck', 'das Leck — течь, пробоина']],
  transparency: 'figurative',
  family: ['das Leck', 'lecken', 'die Datenpanne', 'der Datenabfluss', 'leaken'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально das Leck — пробоина или течь в корпусе судна/трубе; в IT этот образ перенесли на брешь, через которую утекают данные.',
  meaningExamples: [{ de: 'ein Leck im Schiff', ru: 'пробоина в судне (буквально)' }, { de: 'ein großes Datenleck melden', ru: 'сообщить о крупной утечке данных (образно)' }],
  note: 'Средний род из-за «das Leck» (течь в корабле). «Die Datenpanne» — менее драматичное слово (ошибка, а не атака). Разговорно: «Die Daten wurden geleakt».',
  why: {
    confidence: 'high',
    text: 'Состав: die Daten («данные») + das Leck («течь, пробоина»).\nПроисхождение: das Leck пришло в литературный немецкий из нижненемецкого и нидерландского морского языка (lek «пробоина в корпусе судна», родственно английскому leak). В IT перенесено для утечки данных.\nПрозрачность: переносная, морская метафора пробоины легко считывается.',
    source: 'DWDS (Pfeifer), s.v. Leck',
    evidence: 'Daten + das Leck (< нижненем./нидерл. lek «течь в судне», родственно англ. leak).'
  },
  ru_link: null
},
{
  id: 'it-sec-hintertuer', pos: 'noun',
  de: 'Hintertür', article: 'die', plural: 'die Hintertüren',
  ru: 'бэкдор, «чёрный ход»',
  usage: { says: 'both', note: 'В новостях и с руководством — «Hintertür». В техкоманде — «Backdoor» (die Backdoor).' },
  examples: [
    { de: 'Die Angreifer haben sich eine [[Hintertür]] eingebaut, um später zurückzukommen.', ru: 'Злоумышленники оставили себе бэкдор, чтобы вернуться позже.' },
    { de: 'In der Software wurde eine versteckte [[Hintertür]] gefunden.', ru: 'В программе нашли скрытый бэкдор.' }
  ],
  morph: 'Hinter-tür', root: 'Tür',
  parts: [['Hinter-', 'hinter — сзади'], ['Tür', 'die Tür — дверь']],
  transparency: 'figurative',
  family: ['die Tür', 'hinter', 'die Haustür', 'die Backdoor'],
  meaningType: 'figurative',
  meaningExplanation: 'Буквально «задняя дверь, чёрный ход»; в кибербезопасности используется метафорически для скрытого обходного входа в систему (бэкдора).',
  meaningExamples: [{ de: 'durch die Hintertür ins Haus gehen', ru: 'войти в дом с чёрного хода (буквально)' }, { de: 'eine Hintertür im Code finden', ru: 'найти бэкдор в коде (образно)' }],
  note: 'Переносно и вне IT: «sich eine Hintertür offenhalten» — оставить себе запасной выход (лазейку).',
  why: {
    confidence: 'high',
    text: 'Состав: hinter («сзади») + die Tür («дверь»).\nПроисхождение: бытовое слово «задняя дверь, чёрный ход» давно имело переносное значение «лазейка, запасной выход»; в IT закрепилось как точный эквивалент английского backdoor.\nПрозрачность: переносная, образ «чёрного хода» полностью прозрачен.',
    source: 'DWDS, s.v. Hintertür',
    evidence: 'hinter + Tür («чёрный ход, лазейка»); в IT соответствует англ. backdoor.'
  },
  ru_link: null
},
{
  id: 'it-sec-social-engineering', pos: 'noun',
  de: 'Social Engineering', article: 'das',
  ru: 'социальная инженерия',
  usage: { says: 'english', note: 'Только английский термин. Объясняя коллегам, говорят: «Manipulation von Menschen», «Täuschung».' },
  examples: [
    { de: 'Der Anruf vom „IT-Support“ war klassisches [[Social Engineering]].', ru: 'Звонок от «IT-поддержки» был классической социальной инженерией.' },
    { de: 'Gegen [[Social Engineering]] hilft vor allem eine gute Schulung.', ru: 'Против социальной инженерии лучше всего помогает хорошее обучение.' }
  ],
  morph: 'Social Engineering',
  family: ['das Phishing', 'der CEO-Fraud', 'täuschen', 'manipulieren'],
  note: 'Средний род, без мн. ч. «Der CEO-Fraud» — мошенничество от имени директора (срочный перевод денег). Для офиса понятнее: «Jemand versucht, Sie zu täuschen».',
  why: {
    confidence: 'high',
    text: 'Состав: заимствованное английское словосочетание (social + engineering).\nПроисхождение: изначально термин политологии и социологии XX в. («переустройство общества»). В 1990-х гг. в сфере компьютерной безопасности (во многом благодаря Кевину Митнику) получил специальное значение «манипуляция людьми для обхода технических защит».\nПрозрачность: международный IT-термин.',
    source: 'OED / Wiktionary, s.v. social engineering',
    evidence: 'Англ. термин из социологии, в 1990-х гг. переосмыслен в кибербезопасности как психологическая манипуляция.'
  },
  ru_link: null
},
{
  id: 'it-sec-taeuschen', pos: 'verb',
  de: 'täuschen', forms: { praes: 'täuscht', praet: 'täuschte', perf: 'hat getäuscht' }, gov: '+ Akk.',
  ru: 'обманывать, вводить в заблуждение; (sich täuschen) ошибаться',
  usage: { says: 'german', note: 'Обычный немецкий глагол; удобен, чтобы объяснить фишинг нетехническим коллегам.' },
  examples: [
    { sense: 'обманывать, вводить в заблуждение', de: 'Die Mail sollte die Mitarbeiter [[täuschen]]: Sie sah aus wie vom Chef.', ru: 'Письмо должно было обмануть сотрудников: оно выглядело как от шефа.' },
    { sense: 'ошибаться (sich täuschen)', de: 'Ich glaube, du [[täuschst]] dich, das war kein Angriff.', ru: 'Думаю, ты ошибаешься, это была не атака.' }
  ],
  morph: 'täusch-en',
  family: ['die Täuschung', 'enttäuschen', 'die Enttäuschung', 'täuschend echt'],
  meaningType: 'polysemous',
  meaningExplanation: 'Переходное täuschen значит «обманывать, вводить кого-то в заблуждение», а возвратное sich täuschen — «ошибаться самому».',
  meaningExamples: [{ de: 'Phishing-Mails täuschen die Nutzer.', ru: 'Фишинговые письма обманывают пользователей.' }, { de: 'Da habe ich mich getäuscht.', ru: 'Тут я ошибся.' }],
  note: '«Sich täuschen» — ошибаться. «Täuschend echt» — обманчиво настоящий («Die Seite sieht täuschend echt aus»). «Enttäuschen» — разочаровать (буквально «вывести из заблуждения»).',
  ru_link: null
},
{
  id: 'it-sec-gefaelscht', pos: 'adjective',
  de: 'gefälscht',
  ru: 'поддельный, подделанный',
  usage: { says: 'both', note: '«Gefälscht» — стандарт. В SOC об адресе отправителя — ещё «gespooft» («Der Absender ist gespooft»).' },
  examples: [
    { de: 'Der Absender war [[gefälscht]], die Mail kam nicht von unserer Bank.', ru: 'Отправитель был подделан, письмо пришло не из нашего банка.' },
    { de: 'Auf der [[gefälschten]] Login-Seite haben drei Kollegen ihr Passwort eingegeben.', ru: 'На поддельной странице входа трое коллег ввели пароль.' }
  ],
  morph: 'ge-fälsch-t', root: 'falsch',
  parts: [['ge-', 'приставка причастия II'], ['fälsch', 'основа fälschen — подделывать (от falsch)'], ['-t', 'окончание причастия II']],
  transparency: 'transparent',
  family: ['falsch', 'fälschen', 'die Fälschung', 'der Fälscher', 'verfälschen'],
  note: 'Причастие от «fälschen». «Die Fälschung» — подделка. Не путать: «falsch» — неправильный («die falsche Adresse»), «gefälscht» — специально подделанный («die gefälschte Adresse»).',
  why: {
    confidence: 'high',
    text: 'Состав: причастие II от глагола fälschen («подделывать», к falsch с умлаутом).\nПроисхождение: прилагательное falsch заимствовано в средневерхненемецком из латинского falsus («ложный, обманчивый», через старофранцузское fals); от него образован глагол fälschen («делать подложным»).\nПрозрачность: полностью прозрачная связь с falsch.',
    source: 'DWDS (Pfeifer), s.v. falsch / fälschen',
    evidence: 'От fälschen < falsch (< ст.-фр. fals < лат. falsus «ложный, обманчивый»).'
  },
  ru_link: null
},
{
  id: 'it-sec-anhang', pos: 'noun',
  de: 'Anhang', article: 'der', plural: 'die Anhänge',
  ru: 'вложение (в письме); приложение (к документу)',
  usage: { says: 'german', note: '«Der Anhang» — обычное слово. «Attachment» почти не говорят.' },
  examples: [
    { sense: 'вложение в письме', de: 'Öffnen Sie keine [[Anhänge]] von unbekannten Absendern.', ru: 'Не открывайте вложения от неизвестных отправителей.' },
    { sense: 'приложение к документу', de: 'Im [[Anhang]] des Vertrags stehen alle technischen Details.', ru: 'В приложении к договору указаны все технические детали.' }
  ],
  morph: 'An-hang', root: 'hängen',
  parts: [['An-', 'к, на'], ['hang', 'основа hängen — висеть, прикреплять']],
  transparency: 'figurative',
  family: ['anhängen', 'hängen', 'der Anhänger', 'die Abhängigkeit'],
  meaningType: 'polysemous',
  meaningExplanation: 'В электронной почте der Anhang — прикреплённый файл (вложение), а в документах и книгах — приложение в конце текста.',
  meaningExamples: [{ de: 'Bitte öffnen Sie keinen verdächtigen Anhang.', ru: 'Не открывайте подозрительные вложения.' }, { de: 'die Details im Anhang des Vertrags', ru: 'детали в приложении к договору' }],
  note: 'Мн. ч. с умлаутом: die Anhänge. Стандартная фраза в письме: «Im Anhang finden Sie …» / «Anbei sende ich Ihnen …». «Der Anhänger» — прицеп; брелок; сторонник.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола anhängen (an- «к» + hängen «вешать, прикреплять»).\nПроисхождение: первоначально «то, что привешено или присоединено» (в книгопечатании — «приложение в конце книги»); с появлением электронной почты слово естественно перешло на прикреплённые файлы (аналог английского attachment).\nПрозрачность: переносная, образ «прикреплённого к письму» понятен.',
    source: 'DWDS (Pfeifer), s.v. Anhang / anhängen',
    evidence: 'От anhängen («привешивать, присоединять»): сначала книжное приложение, затем вложение e-mail.'
  },
  ru_link: null
},
{
  id: 'it-sec-absender', pos: 'noun',
  de: 'Absender', article: 'der', plural: 'die Absender',
  ru: 'отправитель',
  usage: { says: 'german', note: '«Absender», «Absenderadresse» — стандарт. В заголовках писем техники говорят и «Sender».' },
  examples: [
    { de: 'Prüfen Sie immer den [[Absender]], bevor Sie auf einen Link klicken.', ru: 'Всегда проверяйте отправителя, прежде чем нажать на ссылку.' },
    { de: 'Der [[Absender]] sieht echt aus, aber die Domain ist falsch geschrieben.', ru: 'Отправитель выглядит настоящим, но домен написан с ошибкой.' }
  ],
  morph: 'Ab-send-er', root: 'senden',
  parts: [['ab-', 'от, прочь'], ['send', 'основа senden — посылать'], ['-er', 'тот, кто делает']],
  transparency: 'transparent',
  family: ['senden', 'absenden', 'der Empfänger', 'die Sendung', 'versenden'],
  note: 'Противоположность — «der Empfänger» (получатель). Мн. ч. не меняется: die Absender. «Absenden» — отправить (письмо, форму).',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола absenden (ab- «от, прочь» + senden «посылать») + суффикс деятеля -er.\nПроисхождение: senden (др.-в.-нем. senten, англ. send) исторически каузатив «отправлять в путь»; с ab- — «отсылать от себя» (как русское «от-правитель»).\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. senden / Absender',
    evidence: 'От absenden (ab- + senden «посылать», англ. send) + суффикс -er.'
  },
  ru_link: null
},
{
  id: 'it-sec-passwort', pos: 'noun',
  de: 'Passwort', article: 'das', plural: 'die Passwörter',
  ru: 'пароль',
  usage: { says: 'german', note: '«Das Passwort» — обычное слово (в старых интерфейсах ещё «das Kennwort»). «PIN» — «die PIN».' },
  examples: [
    { de: 'Bitte ändern Sie Ihr [[Passwort]] sofort.', ru: 'Пожалуйста, немедленно смените пароль.' },
    { de: 'Viele Kollegen benutzen dasselbe [[Passwort]] für mehrere Dienste.', ru: 'Многие коллеги используют один и тот же пароль для нескольких сервисов.' }
  ],
  morph: 'Pass-wort', root: 'Wort',
  parts: [['Pass-', 'проход, пропуск'], ['Wort', 'das Wort — слово']],
  transparency: 'transparent',
  family: ['das Wort', 'das Kennwort', 'der Passwortmanager', 'die Passphrase'],
  note: 'Средний род из-за «das Wort»; мн. ч. «Passwörter». «Ein sicheres / schwaches Passwort», «das Passwort zurücksetzen» — сбросить пароль. «Der Passwortmanager» — менеджер паролей.',
  why: {
    confidence: 'high',
    text: 'Состав: der Pass («проход, пропуск») + das Wort («слово»).\nПроисхождение: немецкое сложение XX в., обычно объясняемое как полукалька английского password (изначально военный «пропускной пароль» — слово для прохода мимо часового). Русское «пароль» пришло из французского parole («слово»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Passwort / Pass',
    evidence: 'Pass («проход», через фр. passe < лат. passus) + Wort; в IT закрепилось по образцу англ. password.'
  },
  ru_link: null
},
{
  id: 'it-sec-zugangsdaten', pos: 'noun',
  de: 'Zugangsdaten', article: 'die', plural: 'die Zugangsdaten',
  ru: 'учётные данные, логин и пароль',
  usage: { says: 'both', note: 'С коллегами и в политиках — «Zugangsdaten» (или «Anmeldedaten»). В SOC — «Credentials», «Creds».' },
  examples: [
    { de: 'Geben Sie Ihre [[Zugangsdaten]] niemals am Telefon weiter.', ru: 'Никогда не сообщайте свои учётные данные по телефону.' },
    { de: 'Die [[Zugangsdaten]] wurden in einem Forum veröffentlicht.', ru: 'Учётные данные опубликовали на форуме.' }
  ],
  morph: 'Zugang-s-daten', root: 'gehen',
  parts: [['Zugang', 'der Zugang — доступ, вход (от gehen)'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Daten', 'die Daten — данные']],
  transparency: 'transparent',
  family: ['der Zugang', 'die Daten', 'die Anmeldedaten', 'der Zugriff'],
  note: 'Только мн. ч. (Pluraletantum): die Zugangsdaten. «Zugangsdaten abgreifen» — перехватить учётные данные (о фишинге).',
  why: {
    confidence: 'high',
    text: 'Состав: der Zugang («вход, доступ», от zu- + Gang/gehen) + соединительное -s- + die Daten («данные»).\nПроисхождение: современное IT-сложение — буквально «данные для входа». die Daten — множественное число латинского datum («данное»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Zugangsdaten / Zugang / Datum',
    evidence: 'Zugang (от gehen «вход, доступ») + Fugen-s + Daten (< лат. data).'
  },
  ru_link: null
},
{
  id: 'it-sec-benutzerkonto', pos: 'noun',
  de: 'Benutzerkonto', article: 'das', plural: 'die Benutzerkonten',
  ru: 'учётная запись, аккаунт',
  usage: { says: 'both', note: 'Официально — «Benutzerkonto», «Konto». В разговоре — «Account» (der Account). Технически — «Benutzer», «User».' },
  examples: [
    { de: 'Das [[Benutzerkonto]] wurde nach fünf Fehlversuchen gesperrt.', ru: 'Учётная запись заблокирована после пяти неудачных попыток.' },
    { de: 'Für Admin-Aufgaben brauchst du ein separates [[Benutzerkonto]].', ru: 'Для админских задач тебе нужна отдельная учётная запись.' }
  ],
  morph: 'Benutzer-konto', root: 'nutzen',
  parts: [['Benutzer-', 'der Benutzer — пользователь (от benutzen)'], ['Konto', 'das Konto — счёт, учётная запись']],
  transparency: 'transparent',
  family: ['der Benutzer', 'benutzen', 'das Konto', 'der Account', 'das Dienstkonto'],
  note: 'Мн. ч.: die Benutzerkonten (а не «Kontos»). «Das Dienstkonto» / «der Service-Account» — сервисная учётка. «Ein Konto sperren / entsperren / anlegen / löschen».',
  why: {
    confidence: 'high',
    text: 'Состав: der Benutzer («пользователь», от benutzen) + das Konto («счёт»).\nПроисхождение: das Konto пришло в XV–XVI вв. из итальянского банковского языка (conto «счёт» < лат. computus «подсчёт» — того же корня, что и Computer). В IT перенесено по аналогии с английским user account.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Konto',
    evidence: 'Benutzer + Konto (< итал. conto «счёт» < лат. computus, XV–XVI вв.).'
  },
  ru_link: null
},
{
  id: 'it-sec-identitaet', pos: 'noun',
  de: 'Identität', article: 'die', plural: 'die Identitäten',
  ru: 'личность; идентичность (учётная запись в IAM)',
  usage: { says: 'both', note: '«Identität», «Identitätsmanagement» — стандарт. Сокращения английские: «IAM», «Identity Provider».' },
  examples: [
    { de: 'Der Anrufer konnte seine [[Identität]] nicht nachweisen.', ru: 'Звонивший не смог подтвердить свою личность.' },
    { de: 'Die Angreifer haben die [[Identität]] eines Mitarbeiters übernommen.', ru: 'Злоумышленники завладели учётной записью (личностью) сотрудника.' }
  ],
  morph: 'Identität',
  family: ['identifizieren', 'der Identitätsdiebstahl', 'der Ausweis', 'die Authentifizierung'],
  note: '«Der Identitätsdiebstahl» — кража личности. «Die Identität prüfen / nachweisen» — проверить / подтвердить личность. Слова на -tät всегда женского рода.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (суффикс -tät всегда даёт женский род die).\nПроисхождение: из позднелатинского identitās («тождественность», от idem «тот же самый»). В управлении доступом (IAM) так называют цифровую сущность, подтверждающую, что перед системой именно этот пользователь.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Identität',
    evidence: 'Из позднелат. identitās («тождество», к лат. idem «тот же самый»).'
  },
  ru_link: { type: 'internationalism', text: 'идентичность: оба от позднелатинского identitas.' }
},
{
  id: 'it-sec-anmelden', pos: 'verb',
  de: 'sich anmelden', forms: { praes: 'meldet sich an', praet: 'meldete sich an', perf: 'hat sich angemeldet' }, gov: 'bei + Dat. / an + Dat.',
  ru: 'войти в систему, залогиниться; записаться, зарегистрироваться',
  usage: { says: 'both', note: 'Норма — «sich anmelden», «die Anmeldung». Среди айтишников — «sich einloggen», «der Login».' },
  examples: [
    { sense: 'войти в систему (IT)', de: 'Um 3 Uhr nachts hat sich jemand mit deinem Konto [[angemeldet]].', ru: 'В 3 часа ночи кто-то вошёл под твоей учётной записью.' },
    { sense: 'записаться, зарегистрироваться', de: 'Nach dem Umzug muss ich mich beim Bürgeramt [[anmelden]].', ru: 'После переезда мне нужно зарегистрироваться в Бюргерамте.' }
  ],
  morph: 'an-meld-en', root: 'melden',
  parts: [['an-', 'к, на (отделяемая)'], ['meld', 'основа melden — сообщать'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['melden', 'die Anmeldung', 'sich abmelden', 'die Anmeldedaten', 'einloggen'],
  meaningType: 'polysemous',
  meaningExplanation: 'sich anmelden в IT значит «войти в учётную запись (залогиниться)», а в быту — «записаться на курс/приём» или «прописаться по месту жительства».',
  meaningExamples: [{ de: 'sich mit Passwort und 2FA anmelden', ru: 'войти в систему с паролем и 2FA' }, { de: 'sich im Bürgeramt anmelden', ru: 'зарегистрироваться (прописаться) в ведомстве' }],
  note: 'Отделяемый и возвратный: «Ich melde mich an». Выйти — «sich abmelden». В быту: «sich beim Bürgeramt anmelden» — прописаться, «sich zum Kurs anmelden» — записаться на курс.',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка an- + глагол melden («сообщать»).\nПроисхождение: др.-в.-нем. meldōn значило «сообщать, объявлять». sich anmelden — буквально «объявить о своём прибытии», откуда сначала регистрация у врача / в ведомстве, а затем вход в компьютерную систему.\nПрозрачность: переносная, связь с melden легко прослеживается.',
    source: 'DWDS (Pfeifer), s.v. melden / anmelden',
    evidence: 'an- + melden (< др.-в.-нем. meldōn «объявлять, сообщать»): «заявить о себе» → регистрация и вход в систему.'
  },
  ru_link: null
},
{
  id: 'it-sec-sperren', pos: 'verb',
  de: 'sperren', forms: { praes: 'sperrt', praet: 'sperrte', perf: 'hat gesperrt' }, gov: '+ Akk.',
  ru: 'заблокировать, закрыть (доступ)',
  usage: { says: 'both', note: '«Sperren» — обычное слово для аккаунтов, карт, портов. «Blockieren» — чаще о трафике, IP, отправителях.' },
  examples: [
    { de: 'Wir haben das Konto vorsorglich [[gesperrt]].', ru: 'Мы на всякий случай заблокировали учётную запись.' },
    { de: 'Bitte [[sperren]] Sie Ihren Bildschirm, wenn Sie den Platz verlassen.', ru: 'Пожалуйста, блокируйте экран, когда отходите от рабочего места.' }
  ],
  morph: 'sperr-en',
  family: ['die Sperre', 'entsperren', 'gesperrt', 'die Kontosperre', 'freischalten'],
  note: 'Противоположность — «entsperren» / «freischalten». «Die Karte sperren lassen» — заблокировать банковскую карту. «Vorsorglich» — на всякий случай, превентивно (полезно в отчётах).',
  why: {
    confidence: 'high',
    text: 'Состав: корневой глагол sperr- + -en (рядом die Sperre «заграждение, блокировка»).\nПроисхождение: др.-в.-нем. sperren образовано от существительного der Sparren («брус, стропило»): первоначально «перегородить проход балкой, запереть», откуда современное «заблокировать» (дорогу, карту, аккаунт).\nПрозрачность: базовый корень (sperren ↔ entsperren).',
    source: 'DWDS (Pfeifer), s.v. sperren / Sparren',
    evidence: 'Др.-в.-нем. sperren (от Sparren «брус, балка»): «загородить брусом» → «закрыть, заблокировать».'
  },
  ru_link: null
},
{
  id: 'it-sec-freischalten', pos: 'verb',
  de: 'freischalten', forms: { praes: 'schaltet frei', praet: 'schaltete frei', perf: 'hat freigeschaltet' }, gov: '+ Akk.',
  ru: 'разблокировать, открыть доступ, активировать',
  usage: { says: 'german', note: '«Freischalten» — обычное слово в тикетах: порт, аккаунт, функцию. Английского аналога в речи нет.' },
  examples: [
    { de: 'Kannst du mir den Zugang zum Wiki [[freischalten]]?', ru: 'Можешь открыть мне доступ к вики?' },
    { de: 'Der Port 443 ist jetzt [[freigeschaltet]].', ru: 'Порт 443 теперь открыт.' }
  ],
  morph: 'frei-schalt-en', root: 'schalten',
  parts: [['frei-', 'свободный (отделяемая часть)'], ['schalt', 'основа schalten — переключать'], ['-en', 'окончание инфинитива']],
  transparency: 'transparent',
  family: ['schalten', 'frei', 'einschalten', 'ausschalten', 'die Freischaltung', 'sperren'],
  note: 'Отделяемый: «Ich schalte den Zugang frei». Противоположность — «sperren». «Die Freischaltung» — активация (например, нового аккаунта или SIM-карты).',
  why: {
    confidence: 'high',
    text: 'Состав: frei- («свободный») + глагол schalten («переключать»).\nПроисхождение: schalten в др.-в.-нем. (scaltan) значило «толкать (лодку шестом)», в XIX в. закрепилось в электротехнике для переключения цепей (einschalten / ausschalten). В телефонии и IT freischalten стало означать «включить доступ, активировать».\nПрозрачность: прозрачно для современного носителя (frei + schalten).',
    source: 'DWDS (Pfeifer), s.v. schalten',
    evidence: 'frei + schalten (< др.-в.-нем. scaltan «толкать», с XIX в. электротехническое «переключать»).'
  },
  ru_link: null
},
{
  id: 'it-sec-zuruecksetzen', pos: 'verb',
  de: 'zurücksetzen', forms: { praes: 'setzt zurück', praet: 'setzte zurück', perf: 'hat zurückgesetzt' }, gov: '+ Akk.',
  ru: 'сбросить (пароль, настройки)',
  usage: { says: 'both', note: '«Zurücksetzen» — стандарт в интерфейсах и речи. Разговорно — «resetten».' },
  examples: [
    { de: 'Ich habe dein Passwort [[zurückgesetzt]], du bekommst gleich eine SMS.', ru: 'Я сбросил тебе пароль, сейчас придёт SMS.' },
    { de: 'Wenn nichts hilft, [[setz]] das Gerät auf Werkseinstellungen [[zurück]].', ru: 'Если ничего не помогает, сбрось устройство до заводских настроек.' }
  ],
  morph: 'zurück-setz-en', root: 'setzen',
  parts: [['zurück-', 'назад (отделяемая)'], ['setz', 'основа setzen — ставить, сажать'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['setzen', 'zurück', 'die Zurücksetzung', 'die Werkseinstellungen', 'einsetzen'],
  note: 'Отделяемый: «Ich setze das Passwort zurück». «Auf Werkseinstellungen zurücksetzen» — сбросить до заводских настроек.',
  why: {
    confidence: 'high',
    root: 'setzen',
    text: 'Состав: отделяемая часть zurück- («назад») + setzen («ставить»).\nПроисхождение: буквально «поставить обратно на прежнее место»; в интерфейсах и технике закрепилось как немецкий эквивалент английского reset («вернуть к исходному состоянию»).\nПрозрачность: переносная, но структура «назад + поставить» полностью понятна.',
    source: 'DWDS, s.v. zurücksetzen / setzen',
    evidence: 'zurück («назад») + setzen («ставить»): «вернуть в исходное положение» (эквивалент англ. reset).'
  },
  ru_link: null
},
{
  id: 'it-sec-quarantaene', pos: 'noun',
  de: 'Quarantäne', article: 'die', plural: 'die Quarantänen',
  ru: 'карантин',
  usage: { says: 'german', note: '«Quarantäne» — в антивирусах, почтовых фильтрах и в медицине одинаково.' },
  examples: [
    { de: 'Die Mail liegt in der [[Quarantäne]], ich gebe sie gleich frei.', ru: 'Письмо в карантине, сейчас я его выпущу.' },
    { de: 'Der Virenscanner hat die Datei in [[Quarantäne]] verschoben.', ru: 'Антивирус переместил файл в карантин.' }
  ],
  morph: 'Quarantäne',
  family: ['unter Quarantäne stellen', 'freigeben', 'der Virenscanner'],
  note: '«In Quarantäne verschieben» — поместить в карантин; «aus der Quarantäne freigeben» — выпустить. Произношение: «ка-ран-ТЕ-не».',
  ru_link: { type: 'internationalism', text: 'карантин: оба слова восходят к итальянскому quarantena / quaranta («сорок»).' },
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Quarantänen).\nПроисхождение: заимствовано в XVII в. через французское quarantaine из итальянского quarantena (от quaranta «сорок»): в Венеции XIV–XV вв. суда из чумных портов выдерживали в изоляции сорок дней. В IT перенесли тот же образ — изоляцию подозрительных файлов и писем.\nПрозрачность: историческая связь с числом 40 в современном языке скрыта.',
    source: 'DWDS (Pfeifer), s.v. Quarantäne; Vasmer: карантин',
    evidence: 'В немецкий через фр. quarantaine (XVII в.) < итал. quarantena < quaranta «сорок» (40-дневная изоляция судов в Венеции).'
  }
},
{
  id: 'it-sec-virenscanner', pos: 'noun',
  de: 'Virenscanner', article: 'der', plural: 'die Virenscanner',
  ru: 'антивирус, антивирусный сканер',
  usage: { says: 'both', note: 'В офисе говорят «Virenscanner» или «Virenschutz». В компаниях всё чаще — «EDR», «Endpoint Protection».' },
  examples: [
    { de: 'Der [[Virenscanner]] hat beim Download sofort Alarm geschlagen.', ru: 'Антивирус поднял тревогу сразу при скачивании.' },
    { de: 'Ein [[Virenscanner]] allein reicht heute nicht mehr aus.', ru: 'Одного антивируса сегодня уже недостаточно.' }
  ],
  morph: 'Viren-scanner', root: 'Virus',
  parts: [['Viren-', 'die Viren — вирусы'], ['Scanner', 'der Scanner — сканер']],
  transparency: 'transparent',
  family: ['das Virus', 'der Virenschutz', 'das Antivirenprogramm', 'scannen'],
  note: '«Alarm schlagen» — поднять тревогу. «Der Virenschutz» — антивирусная защита. Мн. ч. не меняется.',
  why: {
    confidence: 'high',
    text: 'Состав: die Viren (мн. ч. от Virus) + der Scanner (от англ. to scan).\nПроисхождение: английское scan восходит к позднелатинскому scandere («подниматься, скандировать стих по стопам»), откуда развилось значение «просматривать строку за строкой, просвечивать». В немецком соединилось с Viren.\nПрозрачность: полностью прозрачное гибридное сложение.',
    source: 'DWDS / OED, s.v. scannen / scan',
    evidence: 'Viren (< лат. vīrus) + англ. scanner (< to scan < лат. scandere «разбирать по стопам → просматривать»).'
  },
  ru_link: null
},
{
  id: 'it-sec-endgeraet', pos: 'noun',
  de: 'Endgerät', article: 'das', plural: 'die Endgeräte',
  ru: 'конечное устройство (ноутбук, телефон), эндпоинт',
  usage: { says: 'both', note: 'Официально — «Endgerät», «mobile Endgeräte». В SOC — «Endpoint», «Client».' },
  examples: [
    { de: 'Auf allen [[Endgeräten]] läuft jetzt der neue EDR-Agent.', ru: 'На всех конечных устройствах теперь работает новый EDR-агент.' },
    { de: 'Private [[Endgeräte]] dürfen nicht ins Firmennetz.', ru: 'Личным устройствам нельзя подключаться к корпоративной сети.' }
  ],
  morph: 'End-gerät', root: 'Gerät',
  parts: [['End-', 'das Ende — конец'], ['Gerät', 'das Gerät — прибор, устройство']],
  transparency: 'transparent',
  family: ['das Gerät', 'das Ende', 'das Mobilgerät', 'der Endpoint'],
  note: 'Средний род из-за «das Gerät». «Mobile Endgeräte» — мобильные устройства (типичная формулировка в политиках). «BYOD» говорят по-английски.',
  why: {
    confidence: 'high',
    text: 'Состав: основа End- (от das Ende «конец») + das Gerät («устройство, прибор»).\nПроисхождение: das Gerät (ср.-в.-нем. geræte) изначально значило «снаряжение, утварь, запас» (от старого значения слова Rat — «запас, средства», сохранившегося также в Hausrat «домашнее имущество» и Vorrat «запас»). В сетях Endgerät — устройство на краю («конце») сети.\nПрозрачность: прозрачно для современного носителя.',
    source: 'DWDS (Pfeifer), s.v. Gerät',
    evidence: 'End- + Gerät (< ср.-в.-нем. geræte «снаряжение, утварь», к Rat в значении «запас, средства»).'
  },
  ru_link: null
},
{
  id: 'it-sec-fernzugriff', pos: 'noun',
  de: 'Fernzugriff', article: 'der', plural: 'die Fernzugriffe',
  ru: 'удалённый доступ',
  usage: { says: 'both', note: 'Официально — «Fernzugriff», «Fernwartung» (удалённое обслуживание). В IT часто «Remote Access», «Remote-Zugriff».' },
  examples: [
    { de: 'Der Dienstleister hat über [[Fernzugriff]] das Update installiert.', ru: 'Подрядчик установил обновление через удалённый доступ.' },
    { de: 'Den [[Fernzugriff]] erlauben wir nur über VPN.', ru: 'Удалённый доступ мы разрешаем только через VPN.' }
  ],
  morph: 'Fern-zugriff', root: 'greifen',
  parts: [['Fern-', 'fern — далёкий, дистанционный'], ['Zugriff', 'der Zugriff — доступ']],
  transparency: 'transparent',
  family: ['der Zugriff', 'fern', 'die Fernwartung', 'das Fernsehen', 'der Remote-Zugriff'],
  note: '«Fern-» = теле-/дистанционный: Fernsehen (телевидение), Fernbedienung (пульт), Fernwartung. «Per Fernzugriff» — удалённо.',
  ru_link: null,
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное fern («далёкий») + существительное der Zugriff («доступ»).\nПроисхождение: в немецкой технической терминологии XIX–XX вв. элемент Fern- продуктивно передавал греческое tele- («далеко»): Fernsprecher («телефон»), Fernsehen («телевидение»), Fernwartung («удалённое обслуживание»). Fernzugriff построено по той же модели.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. fern / Fernsehen',
    evidence: 'Продуктивная техническая модель Fern- как немецкий эквивалент греч. tele- (Fernsprecher, Fernsehen, Fernwartung).'
  }
},
{
  id: 'it-sec-blockieren', pos: 'verb',
  de: 'blockieren', forms: { praes: 'blockiert', praet: 'blockierte', perf: 'hat blockiert' }, gov: '+ Akk.',
  ru: 'блокировать',
  usage: { says: 'both', note: '«Blockieren» — о трафике, IP-адресах, отправителях, сайтах. Об аккаунтах чаще «sperren».' },
  examples: [
    { de: 'Wir haben die IP-Adresse an der Firewall [[blockiert]].', ru: 'Мы заблокировали IP-адрес на файрволе.' },
    { de: 'Der Proxy [[blockiert]] den Zugriff auf diese Seite.', ru: 'Прокси блокирует доступ к этому сайту.' }
  ],
  morph: 'block-ier-en',
  family: ['der Block', 'die Blockade', 'die Blockierung', 'sperren', 'die Blocklist'],
  note: 'Глагол на -ieren: Partizip без ge- (blockiert). «Auf die Blocklist setzen» — добавить в блок-лист.',
  why: {
    confidence: 'high',
    text: 'Состав: основа Block + суффикс -ieren.\nПроисхождение: заимствовано в XVII в. из французского bloquer («окружать крепость, перекрывать подступы»), которое само восходит к германскому Block («колода, бревно» — «перегородить дорогу брёвнами»).\nПрозрачность: международный глагол, совпадает с русским.',
    source: 'DWDS (Pfeifer), s.v. blockieren / Block',
    evidence: 'В XVII в. из фр. bloquer («перекрывать доступ», обратно из герм. Block «колода, брус»).'
  },
  ru_link: { type: 'internationalism', text: 'блокировать: общее происхождение (французское bloquer).' }
}
]});
