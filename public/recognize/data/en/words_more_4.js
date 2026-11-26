/* English B1 and B2 vocabulary. */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };
    return { id: 'en:m4:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'words', topic); });
    GT.register({ tab: 'words', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  reg('everyday', [
    W('lost-property-office', 'noun', 'lost property office', 'B1', 'бюро находок', 'Fundbüro',
      ex('At the [[lost property office]], I recognised my umbrella by its red handle.', 'В бюро находок я узнал свой зонт по красной ручке.', 'Im Fundbüro konnte ich meinen Schirm an dem roten Griff erkennen.'))
  ]);

  reg('people', [
    W('gender', 'noun', 'gender', 'B1', 'пол', 'Geschlecht',
      ex('You can skip the question about [[gender]] in this survey.', 'В этом опросе можно пропустить вопрос о поле.', 'Bei dieser Umfrage dürfen Sie die Frage zum Geschlecht auslassen.')),
    W('homeland', 'noun', 'homeland', 'B1', 'родина', 'Heimat',
      ex('When my father talks about his [[homeland]], he often mentions the sea.', 'Когда мой отец рассказывает о родине, он часто вспоминает море.', 'Wenn mein Vater von seiner Heimat erzählt, spricht er oft vom Meer.')),
    W('background', 'noun', 'background', 'B1', 'происхождение, (жизненный) опыт', 'Herkunft, Hintergrund',
      ex('Everyone in our group feels free to talk about their own [[background]].', 'В нашей группе каждый может открыто говорить о своём происхождении.', 'In unserer Gruppe kann jeder offen über seine Herkunft sprechen.')),
    W('sense-of-humour', 'noun', 'sense of humour', 'B1', 'чувство юмора', 'Humor',
      ex('Even after a long day at work, my sister rarely loses her [[sense of humour]].', 'Даже после долгого рабочего дня сестра редко теряет чувство юмора.', 'Selbst nach einem langen Arbeitstag verliert meine Schwester ihren Humor selten.')),
    W('flatmate', 'noun', 'flatmate', 'B1', 'сосед по квартире', 'Mitbewohner',
      ex('My [[flatmate]] helped me put together the new furniture yesterday.', 'Мой сосед по квартире вчера помог мне собрать новую мебель.', 'Mein Mitbewohner hat mir beim Aufbau der neuen Möbel geholfen.'))
  ]);

  reg('home', [
    W('doorbell', 'noun', 'doorbell', 'B1', 'звонок', 'Klingel',
      ex('Our [[doorbell]] is broken, so just give me a call when you’re at the door.', 'Наш дверной звонок сломался, так что просто позвони, когда будешь у двери.', 'Unsere Klingel ist kaputt, ruf einfach kurz an, wenn du vor der Tür stehst.')),
    W('letterbox', 'noun', 'letterbox', 'B1', 'почтовый ящик', 'Briefkasten',
      ex('After the move, our old name was still on the [[letterbox]].', 'После переезда на почтовом ящике всё ещё стояла наша прежняя фамилия.', 'Nach dem Umzug stand unser alter Name noch am Briefkasten.')),
    W('pipe', 'noun', 'pipe', 'B1', 'труба', 'Leitung',
      ex('Since yesterday, water has been dripping from an old [[pipe]] under the washbasin.', 'Со вчерашнего дня под раковиной из старой трубы капает вода.', 'Unter dem Waschbecken tropft seit gestern Wasser aus einer alten Leitung.')),
    W('wheelie-bin', 'noun', 'wheelie bin', 'B1', 'мусорный контейнер', 'Mülltonne',
      ex('Please put the [[wheelie bin]] out by the road this evening.', 'Пожалуйста, сегодня вечером подкати мусорный контейнер к краю дороги.', 'Stell die Mülltonne bitte heute Abend an den Straßenrand.'))
  ]);

  reg('food', [
    W('jug', 'noun', 'jug', 'B1', 'кувшин', 'Kanne',
      ex('I put a [[jug]] of water on each table for the guests.', 'Для гостей я поставил на каждый стол по кувшину воды.', 'Für die Gäste stellte ich eine Kanne Wasser auf jeden Tisch.')),
    W('spice', 'noun', 'spice', 'B1', 'пряность', 'Gewürz',
      ex('Which [[spice]] gives your soup that slightly sweet taste?', 'Какая пряность придаёт твоему супу этот слегка сладковатый вкус?', 'Welches Gewürz gibt deiner Suppe diesen leicht süßlichen Geschmack?')),
    W('slice', 'noun', 'slice', 'B1', 'ломтик', 'Scheibe',
      ex('One thin [[slice]] of cheese is enough for each open sandwich.', 'Для каждого бутерброда хватит одного тонкого ломтика сыра.', 'Für jedes belegte Brot reicht eine dünne Scheibe Käse.')),
    W('snack-bar', 'noun', 'snack bar', 'B1', 'закусочная', 'Imbiss',
      ex('After the late shift, we often eat at the [[snack bar]] opposite.', 'После поздней смены мы часто едим в закусочной напротив.', 'Nach der Spätschicht essen wir oft im Imbiss gegenüber.')),
    W('roast', 'noun', 'roast', 'B1', 'жаркое', 'Braten',
      ex('I am buying the meat today for the [[roast]] on Sunday.', 'Для воскресного жаркого я уже сегодня покупаю мясо.', 'Für den Braten am Sonntag kaufe ich das Fleisch schon heute.'))
  ]);

  reg('health', [
    W('injury', 'noun', 'injury', 'B1', 'травма', 'Verletzung',
      ex('A knee [[injury]] kept her from dancing for several weeks.', 'Из-за травмы колена она несколько недель не могла танцевать.', 'Wegen einer Verletzung am Knie konnte sie mehrere Wochen nicht tanzen.')),
    W('fluid', 'noun', 'fluid', 'B1', 'жидкость', 'Flüssigkeit',
      ex('The doctor asked how much [[fluid]] I had drunk yesterday.', 'Врач спросила, сколько жидкости я выпил за вчерашний день.', 'Die Ärztin fragte, wie viel Flüssigkeit ich gestern zu mir genommen hatte.')),
    W('care-worker', 'noun', 'care worker', 'B1', 'сиделка, социальный работник по уходу', 'Pflegekraft, Betreuer',
      ex('The [[care worker]] took time to answer my father’s questions.', 'Сиделка нашла время ответить на вопросы моего отца.', 'Der Pfleger nahm sich Zeit für die Fragen meines Vaters.')),
    W('follow-up-appointment', 'noun', 'follow-up appointment', 'B1', 'повторный приём', 'Folgetermin',
      ex('The patient booked her [[follow-up appointment]] directly at the reception desk.', 'Пациентка записалась на повторный приём прямо в регистратуре.', 'Die Patientin vereinbarte ihren Folgetermin direkt am Empfang der Praxis.'))
  ]);

  reg('work', [
    W('workshop', 'noun', 'workshop', 'B1', 'мастерская', 'Werkstatt',
      ex('Our [[workshop]] is taking on only minor repairs in August.', 'В августе наша мастерская берёт только заказы на мелкий ремонт.', 'Unsere Werkstatt nimmt im August nur kleine Reparaturen an.')),
    W('canteen', 'noun', 'canteen', 'B1', 'столовая', 'Kantine',
      ex('On Fridays, the [[canteen]] also serves a hot meal without meat.', 'По пятницам в столовой подают и горячее блюдо без мяса.', 'In der Kantine gibt es freitags auch ein warmes Essen ohne Fleisch.')),
    W('tradesman', 'noun', 'tradesman', 'B1', 'мастер', 'Handwerker',
      ex('The [[tradesman]] brought his own tools to carry out the repair.', 'Для ремонта мастер принёс с собой собственные инструменты.', 'Der Handwerker brachte sein eigenes Werkzeug für die Reparatur mit.')),
    W('warehouse', 'noun', 'warehouse', 'B1', 'склад', 'Lager',
      ex('Before the early shift, we collect the parts we ordered from the [[warehouse]].', 'Перед утренней сменой мы забираем заказанные детали со склада.', 'Vor der Frühschicht holen wir die bestellten Teile aus dem Lager.')),
    W('agriculture', 'noun', 'agriculture', 'B1', 'сельское хозяйство', 'Landwirtschaft',
      ex('In [[agriculture]], the working day often starts before sunrise in summer.', 'В сельском хозяйстве летом рабочий день часто начинается до рассвета.', 'In der Landwirtschaft beginnt der Arbeitstag im Sommer oft vor Sonnenaufgang.')),
    W('shift-rota', 'noun', 'shift rota', 'B1', 'график смен', 'Schichtplan',
      ex('Our new [[shift rota]] will be on the noticeboard by the door from Wednesday.', 'Наш новый график смен со среды будет висеть рядом с дверью.', 'Unser neuer Schichtplan hängt ab Mittwoch neben der Tür.'))
  ]);

  reg('authorities', [
    W('embassy', 'noun', 'embassy', 'B1', 'посольство', 'Botschaft',
      ex('Before visiting the [[embassy]], I booked an appointment online.', 'Перед визитом в посольство я записался на приём через интернет.', 'Vor meinem Besuch in der Botschaft vereinbarte ich online einen Termin.')),
    W('place-of-residence', 'noun', 'place of residence', 'B1', 'место жительства', 'Wohnort',
      ex('Please clearly state your current [[place of residence]] on the form.', 'В анкете нужно чётко указать ваше нынешнее место жительства.', 'Im Formular müssen Sie Ihren aktuellen Wohnort deutlich angeben.')),
    W('consulate', 'noun', 'consulate', 'B1', 'консульство', 'Konsulat',
      ex('The [[consulate]] emailed me the list of documents that were missing.', 'Консульство прислало мне по почте список недостающих документов.', 'Das Konsulat schickte mir die Liste der fehlenden Unterlagen per E-Mail.')),
    W('marital-status', 'noun', 'marital status', 'B1', 'семейное положение', 'Familienstand',
      ex('Giving your [[marital status]] on this form is entirely optional.', 'В этой анкете указывать своё семейное положение совсем необязательно.', 'Das Feld für den Familienstand ist auf diesem Formular freiwillig.')),
    W('processing-time', 'noun', 'processing time', 'B1', 'срок рассмотрения', 'Bearbeitungszeit',
      ex('The clerk said the usual [[processing time]] was two weeks.', 'По словам сотрудницы, обычный срок рассмотрения составляет две недели.', 'Die übliche Bearbeitungszeit beträgt laut Auskunft der Mitarbeiterin zwei Wochen.'))
  ]);

  reg('travel', [
    W('ferry', 'noun', 'ferry', 'B1', 'паром', 'Fähre',
      ex('In strong winds, the last [[ferry]] sometimes returns earlier than usual.', 'При сильном ветре последний паром иногда возвращается раньше обычного.', 'Bei starkem Wind fährt die letzte Fähre manchmal früher zurück.')),
    W('junction', 'noun', 'junction', 'B1', 'перекрёсток', 'Kreuzung',
      ex('At the second [[junction]], turn left into a narrow lane.', 'На втором перекрёстке поверните налево в узкий переулок.', 'An der zweiten Kreuzung biegen Sie links in eine schmale Gasse ab.')),
    W('carriageway', 'noun', 'carriageway', 'B1', 'проезжая часть', 'Fahrbahn',
      ex('The northbound [[carriageway]] is closed after an accident, so expect long delays.', 'Проезжая часть в северном направлении перекрыта после аварии, так что возможны большие задержки.', 'Die Fahrbahn Richtung Norden ist nach einem Unfall gesperrt, rechnen Sie mit langen Verzögerungen.')),
    W('number-plate', 'noun', 'number plate', 'B1', 'номерной знак', 'Kennzeichen',
      ex('I immediately recognised our hire car in the car park by its [[number plate]].', 'На стоянке я сразу узнал арендованную машину по номерному знаку.', 'Am Kennzeichen erkannte ich unseren Mietwagen sofort auf dem Parkplatz.')),
    W('bend', 'noun', 'bend', 'B1', 'поворот', 'Kurve',
      ex('The narrow path to the viewpoint starts beyond the sharp [[bend]].', 'За крутым поворотом начинается узкая тропа к смотровой площадке.', 'Hinter der scharfen Kurve beginnt der schmale Weg zum Aussichtspunkt.'))
  ]);

  reg('leisure', [
    W('orchestra', 'noun', 'orchestra', 'B1', 'оркестр', 'Orchester',
      ex('Our [[orchestra]] rehearses every Thursday in the hall of an old school.', 'Наш оркестр репетирует каждый четверг в зале старой школы.', 'Unser Orchester probt jeden Donnerstag in der Aula einer alten Schule.')),
    W('poem', 'noun', 'poem', 'B1', 'стихотворение', 'Gedicht',
      ex('At the public reading, she read out her own [[poem]] for the first time.', 'На чтениях она впервые прочитала публике собственное стихотворение.', 'Bei der offenen Lesung trug sie zum ersten Mal ein eigenes Gedicht vor.'))
  ]);

  reg('society', [
    W('resident', 'noun', 'resident', 'B1', 'жилец', 'Bewohner',
      ex('Each [[resident]] can submit ideas for the shared courtyard.', 'Каждый жилец может предложить идеи для общего двора.', 'Jeder Bewohner kann Vorschläge für den gemeinsamen Innenhof einreichen.')),
    W('general-public', 'noun', 'general public', 'B1', 'общественность', 'Öffentlichkeit',
      ex('From Monday, the [[general public]] can view the plans at the town hall.', 'С понедельника общественность сможет ознакомиться с планами в ратуше.', 'Ab Montag kann die Öffentlichkeit die Pläne im Rathaus einsehen.')),
    W('trade-union', 'noun', 'trade union', 'B1', 'профсоюз', 'Gewerkschaft',
      ex('The [[trade union]] is inviting all employees to an open discussion.', 'Профсоюз приглашает всех сотрудников на открытое обсуждение.', 'Die Gewerkschaft lädt alle Beschäftigten zu einem offenen Gespräch ein.')),
    W('press', 'noun', 'press', 'B1', 'пресса', 'Presse',
      ex('The local [[press]] also covered the election in the district.', 'Местная пресса тоже рассказала о выборах в нашем районе.', 'Auch die lokale Presse berichtete über die Wahl im Stadtteil.'))
  ]);

  reg('wellbeing', [
    W('self-respect', 'noun', 'self-respect', 'B2', 'самоуважение', 'Selbstachtung',
      ex('Saying no clearly can help you keep your [[self-respect]].', 'Умение чётко отказать помогает сохранить самоуважение.', 'Ein klares Nein kann helfen, die eigene Selbstachtung zu bewahren.')),
    W('emotional-support', 'noun', 'emotional support', 'B2', 'поддержка', 'Rückhalt',
      ex('Her friends’ [[emotional support]] helped her through those difficult weeks.', 'Поддержка друзей помогла ей пережить те трудные недели.', 'Der Rückhalt ihrer Freunde half ihr durch die schwierigen Wochen.')),
    W('composure', 'noun', 'composure', 'B2', 'самообладание', 'Fassung, Selbstbeherrschung',
      ex('Despite the harsh criticism, the presenter managed to keep her [[composure]].', 'Несмотря на резкую критику, ведущая сумела сохранить самообладание.', 'Trotz der heftigen Kritik behielt die Moderatorin ihre Fassung.')),
    W('tension', 'noun', 'tension', 'B2', 'напряжение', 'Anspannung',
      ex('Only after the final exam did the inner [[tension]] gradually ease.', 'Только после последнего экзамена внутреннее напряжение стало постепенно спадать.', 'Erst nach der letzten Prüfung ließ die innere Anspannung langsam nach.'))
  ]);

  reg('digital-life', [
    W('rebuttal', 'noun', 'rebuttal', 'B2', 'опровержение, контраргумент', 'Widerlegung, Erwiderung',
      ex('The following day, the minister’s spokesperson issued a firm [[rebuttal]] of the claims.', 'На следующий день пресс-секретарь министра решительно опроверг эти утверждения.', 'Am nächsten Tag wies der Sprecher des Ministers die Vorwürfe entschieden zurück.')),
    W('headline', 'noun', 'headline', 'B1', 'заголовок', 'Schlagzeile',
      ex('The [[headline]] promised a solution that the article barely explained.', 'Заголовок обещал решение, которое в статье почти не объяснили.', 'Die Schlagzeile versprach eine Lösung, die im Artikel kaum erklärt wurde.')),
    W('news-coverage', 'noun', 'news coverage', 'B2', 'освещение в СМИ', 'Berichterstattung',
      ex('Many residents felt the [[news coverage]] of their neighbourhood was too one-sided.', 'Многие жители сочли освещение событий в своём районе односторонним.', 'Viele Anwohner fanden die Berichterstattung über ihren Stadtteil zu einseitig.'))
  ]);

  reg('environment', [
    W('wastage', 'noun', 'wastage', 'B2', 'потери, расточительство', 'Verschwendung, Schwund',
      ex('Smaller portions could help reduce food [[wastage]] in the staff canteen.', 'Порции поменьше могли бы сократить потери продуктов в столовой.', 'Kleinere Portionen könnten die Verschwendung von Lebensmitteln in der Kantine verringern.')),
    W('habitat', 'noun', 'habitat', 'B2', 'среда обитания', 'Lebensraum',
      ex('The new road would split the [[habitat]] of many animals in two.', 'Новая дорога разделила бы среду обитания многих животных надвое.', 'Die neue Straße würde den Lebensraum vieler Tiere in zwei Teile schneiden.')),
    W('repurposing', 'noun', 'repurposing', 'B2', 'использование по-новому, перепрофилирование', 'Umnutzung, Wiederverwendung',
      ex('[[Repurposing]] old curtains as bags saves both fabric and money.', 'Если шить сумки из старых штор, это экономит и ткань, и деньги.', 'Aus alten Vorhängen Taschen zu nähen spart Stoff und Geld.'))
  ]);

  reg('economy', [
    W('sales-volume', 'noun', 'sales volume', 'B2', 'объём продаж', 'Absatz, Absatzmenge',
      ex('Despite lower prices, [[sales volume]] fell in the last quarter.', 'Несмотря на снижение цен, объём продаж в последнем квартале упал.', 'Trotz niedrigerer Preise ging der Absatz im letzten Quartal zurück.')),
    W('purchasing-power', 'noun', 'purchasing power', 'B2', 'покупательная способность', 'Kaufkraft',
      ex('Rising rents reduce the [[purchasing power]] of many households in the city.', 'Рост арендной платы снижает покупательную способность многих городских семей.', 'Steigende Mieten verringern die Kaufkraft vieler Haushalte in der Stadt.'))
  ]);

  reg('society-politics', [
    W('voter-turnout', 'noun', 'voter turnout', 'B2', 'явка', 'Wahlbeteiligung',
      ex('[[Voter turnout]] in this district was much higher than four years ago.', 'Явка в этом районе была заметно выше, чем четыре года назад.', 'Die Wahlbeteiligung lag in diesem Stadtteil deutlich höher als vor vier Jahren.')),
    W('have-a-say', 'phrase', 'have a say', 'B2', 'иметь право голоса, участвовать в решении', 'mitreden, ein Mitspracherecht haben',
      ex('Young people want to [[have a say]] in the design of the new youth centre.', 'Подростки хотят иметь право голоса при проектировании нового молодёжного центра.', 'Die Jugendlichen wollen bei der Gestaltung des neuen Jugendzentrums mitreden.')),
    W('equal-opportunity', 'noun', 'equal opportunity', 'B2', 'равенство возможностей', 'Chancengleichheit',
      ex('Free preparation courses aim to promote [[equal opportunity]] in university admissions.', 'Бесплатные подготовительные курсы должны обеспечить равенство возможностей при поступлении в вуз.', 'Kostenlose Vorbereitungskurse sollen die Chancengleichheit beim Zugang zur Hochschule verbessern.')),
    W('constituency', 'noun', 'constituency', 'B2', 'избирательный округ', 'Wahlkreis',
      ex('Several candidates from our [[constituency]] answered young people’s questions yesterday.', 'Вчера несколько кандидаток из нашего избирательного округа ответили на вопросы молодёжи.', 'Mehrere Kandidatinnen aus unserem Wahlkreis stellten sich gestern den Fragen der Jugendlichen.'))
  ]);

  reg('education', [
    W('knowledge-gap', 'noun', 'knowledge gap', 'B2', 'пробел в знаниях', 'Wissenslücke',
      ex('While explaining the task, I noticed a [[knowledge gap]] of my own.', 'Объясняя задание, я заметил у себя пробел в знаниях.', 'Beim Erklären der Aufgabe bemerkte ich eine eigene Wissenslücke.')),
    W('entry-requirement', 'noun', 'entry requirement', 'B2', 'условие приёма', 'Zulassungsvoraussetzung',
      ex('Work experience is an important [[entry requirement]] for this part-time degree course.', 'Опыт работы служит важным условием приёма на эту программу.', 'Berufserfahrung ist eine wichtige Zulassungsvoraussetzung für diesen berufsbegleitenden Studiengang.')),
    W('optional-subject', 'noun', 'optional subject', 'B2', 'предмет по выбору', 'Wahlfach',
      ex('From the second semester, students can take photography as an [[optional subject]].', 'Со второго семестра студенты могут изучать фотографию как предмет по выбору.', 'Ab dem zweiten Semester können Studierende Fotografie als Wahlfach belegen.')),
    W('compulsory-attendance', 'noun', 'compulsory attendance', 'B2', 'обязательное посещение', 'Anwesenheitspflicht',
      ex('This practical course requires [[compulsory attendance]] from everyone who enrols.', 'В этом практическом курсе для всех участников предусмотрено обязательное посещение.', 'In diesem praktischen Kurs gilt Anwesenheitspflicht für alle Teilnehmenden.'))
  ]);

  reg('economy', [
    W('competitive', 'adj', 'competitive', 'B2', 'конкурентоспособный', 'wettbewerbsfähig',
      ex('Even small suppliers remain [[competitive]] by offering personal advice and short delivery times.', 'Даже небольшие поставщики остаются конкурентоспособными благодаря консультациям и быстрой доставке.', 'Auch kleinere Anbieter bleiben durch persönliche Beratung und kurze Lieferzeiten wettbewerbsfähig.')),
    W('family-friendly', 'adj', 'family-friendly', 'B2', 'удобный для семей', 'familienfreundlich',
      ex('Many guests find the hotel particularly [[family-friendly]] because of its flexible mealtimes.', 'Гости считают отель удобным для семей благодаря гибкому расписанию обедов.', 'Viele Gäste finden das Hotel wegen der flexiblen Essenszeiten besonders familienfreundlich.')),
    W('retain', 'verb', 'retain', 'B2', 'удержать', 'einbehalten',
      ex('Under the contract, the supplier may [[retain]] part of the deposit.', 'По условиям договора поставщик может удержать часть предоплаты.', 'Der Anbieter darf laut Vertrag einen Teil der Anzahlung einbehalten.')),
    W('wholesale-trade', 'noun', 'wholesale trade', 'B2', 'оптовая торговля', 'Großhandel',
      ex('Prices in the [[wholesale trade]] rose sharply, and shops passed the increase on to customers.', 'Цены в оптовой торговле резко выросли, и магазины переложили подорожание на покупателей.', 'Die Preise im Großhandel stiegen stark, und die Geschäfte gaben die Erhöhung an die Kunden weiter.')),
    W('mail-order', 'noun', 'mail order', 'B2', 'торговля по почте', 'Versandhandel',
      ex('Through [[mail order]], even small publishers reach readers outside the major cities.', 'Благодаря торговле по почте небольшие издательства находят читателей за пределами крупных городов.', 'Im Versandhandel erreichen auch kleine Verlage Leser außerhalb der großen Städte.'))
  ]);

  reg('education', [
    W('vocational-college', 'noun', 'vocational college', 'B2', 'профессиональное училище', 'Fachschule',
      ex('At [[vocational college]], she built on the knowledge gained during her initial training.', 'В профессиональном училище она углубила знания, полученные во время первого обучения.', 'An der Fachschule vertiefte sie ihre Kenntnisse aus der ersten Ausbildung.'))
  ]);

  reg('people', [
    W('be-on-first-name-terms', 'phrase', 'be on first-name terms', 'B2', 'обращаться друг к другу по имени (≈ быть на «ты»)', 'sich beim Vornamen nennen (≈ sich duzen)',
      ex('After a week on the project, the whole team [[was on first-name terms]].', 'Через неделю работы над проектом вся команда уже обращалась друг к другу по имени.', 'Nach einer Woche im Projekt nannte sich das ganze Team beim Vornamen.'),
      ['В английском нет различия «ты/вы»: близость выражают обращением по имени вместо Mr/Ms + фамилия.', 'Im Englischen gibt es kein du/Sie: Nähe zeigt sich daran, dass man sich mit Vornamen statt mit Mr/Ms + Nachname anredet.']),
    W('impress', 'verb', 'impress', 'B2', 'впечатлить', 'beeindrucken',
      ex('Her honest answers managed to [[impress]] even the most critical listeners.', 'Искренними ответами она смогла впечатлить даже самых критичных слушателей.', 'Mit ehrlichen Antworten konnte sie selbst ihre kritischsten Zuhörer beeindrucken.'))
  ]);

  reg('digital-life', [
    W('navigate', 'verb', 'navigate', 'B2', 'ориентироваться, перемещаться (по сайту, меню)', 'navigieren, sich zurechtfinden',
      ex('You can use the arrow keys to [[navigate]] the digital archive.', 'Клавиши со стрелками помогают ориентироваться в цифровом архиве.', 'Mit den Pfeiltasten können Sie bequem durch das digitale Archiv navigieren.')),
    W('innovative', 'adj', 'innovative', 'B2', 'инновационный', 'innovativ',
      ex('The most [[innovative]] feature of this device is its simple gesture control.', 'Самое инновационное в этом устройстве — простое управление жестами.', 'An diesem Gerät ist vor allem die einfache Steuerung mit Gesten innovativ.'))
  ]);

  reg('education', [
    W('vocational-qualification', 'noun', 'vocational qualification', 'B2', 'профессиональная квалификация', 'Berufsabschluss',
      ex('For this position, a recognised [[vocational qualification]] matters more than the final grade.', 'Для этой вакансии признанная профессиональная квалификация важнее итоговой оценки.', 'Für diese Stelle zählt ein anerkannter Berufsabschluss mehr als die Abschlussnote.')),
    W('work-placement', 'noun', 'work placement', 'B2', 'производственная практика', 'Berufspraktikum',
      ex('During her [[work placement]], she advised customers independently for the first time.', 'Во время производственной практики она впервые самостоятельно консультировала клиентов.', 'Während ihres Berufspraktikums durfte sie zum ersten Mal selbst Kunden beraten.')),
    W('specialisation', 'noun', 'specialisation', 'B2', 'специализация', 'Spezialisierung',
      ex('She only chose a [[specialisation]] after completing her second semester.', 'Только после второго семестра она выбрала себе специализацию.', 'Erst nach dem zweiten Semester entschied sie sich für eine Spezialisierung.')),
    W('self-motivated', 'adj', 'self-motivated', 'B2', 'инициативный, мотивированный', 'selbstmotiviert, mit Eigeninitiative',
      ex('Particularly [[self-motivated]] participants contact suitable companies themselves for the group project.', 'Для совместного проекта особенно инициативные участники сами ищут подходящие фирмы.', 'Beim gemeinsamen Projekt suchen Teilnehmer mit viel Eigeninitiative selbst nach passenden Betrieben.'))
  ]);

  reg('economy', [
    W('family-run-business', 'noun', 'family-run business', 'B2', 'семейное предприятие', 'Familienbetrieb',
      ex('The small [[family-run business]] has trained local apprentices for three generations.', 'Уже три поколения семейное предприятие готовит учеников из своего региона.', 'Der kleine Familienbetrieb bildet seit drei Generationen Lehrlinge aus der Region aus.')),
    W('agency-work', 'noun', 'agency work', 'B2', 'работа через кадровое агентство', 'Zeitarbeit, Leiharbeit',
      ex('Through [[agency work]], he got to know several companies before accepting a permanent job.', 'Благодаря работе через агентство он поработал в разных фирмах до перехода на постоянную работу.', 'Durch Zeitarbeit lernte er mehrere Betriebe kennen, bevor er eine feste Stelle annahm.')),
    W('workforce', 'noun', 'workforce', 'B2', 'персонал, трудовой коллектив', 'Belegschaft, Arbeitskräfte',
      ex('The entire [[workforce]] had a say in planning the new break times.', 'Весь трудовой коллектив мог высказаться при обсуждении нового расписания перерывов.', 'Die gesamte Belegschaft durfte bei der Planung der neuen Pausenzeiten mitreden.')),
    W('remuneration', 'noun', 'remuneration', 'B2', 'вознаграждение', 'Vergütung',
      ex('Before work began, both parties agreed on a fixed amount of [[remuneration]].', 'До начала работы обе стороны согласовали фиксированное вознаграждение за заказ.', 'Vor Beginn des Auftrags vereinbarten beide Seiten eine feste Vergütung.')),
    W('bulk-discount', 'noun', 'bulk discount', 'B2', 'скидка за объём', 'Mengenrabatt',
      ex('The printer gives our club a [[bulk discount]] on orders of fifty copies or more.', 'Типография даёт нашему клубу скидку за объём при заказе от пятидесяти экземпляров.', 'Ab fünfzig Exemplaren gewährt die Druckerei unserem Verein einen Mengenrabatt.')),
    W('payee', 'noun', 'payee', 'B2', 'получатель платежа', 'Zahlungsempfänger',
      ex('Please check whether the [[payee]] matches the name on the invoice.', 'Проверьте, пожалуйста, совпадает ли имя получателя платежа с именем в счёте.', 'Prüfen Sie bitte, ob der Zahlungsempfänger mit dem Namen auf der Rechnung übereinstimmt.')),
    W('order-reference', 'noun', 'order reference', 'B2', 'номер заказа', 'Bestellnummer',
      ex('I can find the missing parcel faster if you give me your [[order reference]].', 'По вашему номеру заказа я быстрее найду пропавшую посылку в системе.', 'Mit Ihrer Bestellnummer finde ich das fehlende Paket schneller im System.')),
    W('forward-looking', 'adj', 'forward-looking', 'B2', 'ориентированный на будущее', 'zukunftsorientiert',
      ex('The council considers the new transport plan [[forward-looking]] because of its proposed cycle paths.', 'Городской совет считает транспортный план перспективным благодаря проекту велодорожек.', 'Der Stadtrat hält das neue Verkehrskonzept wegen der geplanten Radwege für zukunftsorientiert.'))
  ]);

  reg('society-politics', [
    W('aid-organisation', 'noun', 'aid organisation', 'B2', 'гуманитарная организация', 'Hilfsorganisation',
      ex('After the floods, a local [[aid organisation]] is distributing hot meals to affected families.', 'После наводнения местная гуманитарная организация раздаёт горячие обеды пострадавшим семьям.', 'Eine örtliche Hilfsorganisation verteilt nach dem Hochwasser warme Mahlzeiten an betroffene Familien.')),
    W('childcare-provision', 'noun', 'childcare provision', 'B2', 'услуги по присмотру за детьми', 'Betreuungsangebot',
      ex('Many parents would like affordable [[childcare provision]] during the school holidays.', 'Многие родители хотят, чтобы на каникулах были доступны недорогие услуги по присмотру за детьми.', 'Viele Eltern wünschen sich ein bezahlbares Betreuungsangebot während der Schulferien.')),
    W('unemployment-insurance', 'noun', 'unemployment insurance', 'B2', 'страхование от безработицы', 'Arbeitslosenversicherung',
      ex('In class, we compared [[unemployment insurance]] systems in several European countries.', 'На занятии мы сравнивали страхование от безработицы в нескольких европейских странах.', 'Im Kurs verglichen wir die Arbeitslosenversicherung in mehreren europäischen Ländern.'))
  ]);

  reg('health', [
    W('laceration', 'noun', 'laceration', 'B2', 'рваная рана', 'Platzwunde',
      ex('After the fall, she had the [[laceration]] on her forehead examined.', 'После падения она попросила врача осмотреть рваную рану на лбу.', 'Nach dem Sturz ließ sie die Platzwunde an der Stirn untersuchen.'))
  ]);
})();

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.packs.en.config.TOPICS.words.push({
  "id": "c1_argumentation",
  "name": "Evidence & Nuance",
  "level": "c1",
  "group": "C1 topics",
  "desc": "Precise language for assumptions, qualifications and reasoned conclusions.",
  "scenario": {
    "ru": "Мы проверяем предложение, обсуждаем исходные допущения и уточняем выводы. Ты мой коллега.",
    "de": "Wir prüfen einen Vorschlag, hinterfragen die Annahmen und präzisieren Schlussfolgerungen. Du bist ein Kollege."
  }
});

GT.register({
  "tab": "words",
  "topic": "c1_argumentation",
  "items": [
    {
      "id": "en:content26:c1-premise",
      "t": "premise",
      "level": "C1",
      "pos": "noun",
      "ru": "предпосылка",
      "de": "die Prämisse",
      "examples": [
        {
          "t": "The argument rests on a false [[premise]].",
          "ru": "Рассуждение основано на ложной предпосылке.",
          "de": "Die Argumentation beruht auf einer falschen Prämisse."
        }
      ],
      "plural": "premises"
    },
    {
      "id": "en:content26:c1-assumption",
      "t": "assumption",
      "level": "C1",
      "pos": "noun",
      "ru": "допущение, предположение",
      "de": "die Annahme",
      "examples": [
        {
          "t": "We should test this [[assumption]] before proceeding.",
          "ru": "Нам следует проверить это допущение, прежде чем продолжать.",
          "de": "Wir sollten diese Annahme prüfen, bevor wir fortfahren."
        }
      ],
      "plural": "assumptions"
    },
    {
      "id": "en:content26:c1-justification",
      "t": "justification",
      "level": "C1",
      "pos": "noun",
      "ru": "обоснование",
      "de": "die Begründung",
      "examples": [
        {
          "t": "The proposal needs a clearer [[justification]].",
          "ru": "Предложению нужно более чёткое обоснование.",
          "de": "Der Vorschlag braucht eine klarere Begründung."
        }
      ],
      "plural": "justifications"
    },
    {
      "id": "en:content26:c1-ambiguity",
      "t": "ambiguity",
      "level": "C1",
      "pos": "noun",
      "ru": "двусмысленность, неоднозначность",
      "de": "die Mehrdeutigkeit",
      "examples": [
        {
          "t": "This wording introduces an unnecessary [[ambiguity]].",
          "ru": "Эта формулировка создаёт ненужную двусмысленность.",
          "de": "Diese Formulierung erzeugt eine unnötige Mehrdeutigkeit."
        }
      ],
      "plural": "ambiguities"
    },
    {
      "id": "en:content26:c1-contradiction",
      "t": "contradiction",
      "level": "C1",
      "pos": "noun",
      "ru": "противоречие",
      "de": "der Widerspruch",
      "examples": [
        {
          "t": "There is a [[contradiction]] between the summary and the data.",
          "ru": "Между резюме и данными есть противоречие.",
          "de": "Zwischen der Zusammenfassung und den Daten besteht ein Widerspruch."
        }
      ],
      "plural": "contradictions"
    },
    {
      "id": "en:content26:c1-consistency",
      "t": "consistency",
      "level": "C1",
      "pos": "noun",
      "ru": "согласованность, непротиворечивость",
      "de": "die Konsistenz",
      "examples": [
        {
          "t": "We checked the [[consistency]] of the terminology.",
          "ru": "Мы проверили согласованность терминологии.",
          "de": "Wir haben die Konsistenz der Terminologie geprüft."
        }
      ]
    },
    {
      "id": "en:content26:c1-caveat",
      "t": "caveat",
      "level": "C1",
      "pos": "noun",
      "ru": "оговорка, существенное уточнение",
      "de": "der Vorbehalt",
      "examples": [
        {
          "t": "I support the plan with one important [[caveat]].",
          "ru": "Я поддерживаю план с одной важной оговоркой.",
          "de": "Ich unterstütze den Plan mit einem wichtigen Vorbehalt."
        }
      ],
      "plural": "caveats"
    },
    {
      "id": "en:content26:c1-scope",
      "t": "scope of application",
      "level": "C1",
      "pos": "noun",
      "ru": "область применения",
      "de": "der Anwendungsbereich",
      "examples": [
        {
          "t": "The rule has a limited [[scope of application]].",
          "ru": "У правила ограниченная область применения.",
          "de": "Die Regel hat einen begrenzten Anwendungsbereich."
        }
      ],
      "plural": "scopes of application"
    },
    {
      "id": "en:content26:c1-nuance",
      "t": "nuance",
      "level": "C1",
      "pos": "noun",
      "ru": "нюанс",
      "de": "die Nuance",
      "examples": [
        {
          "t": "The translation misses a subtle [[nuance]].",
          "ru": "В переводе потерян тонкий нюанс.",
          "de": "In der Übersetzung geht eine feine Nuance verloren."
        }
      ],
      "plural": "nuances"
    },
    {
      "id": "en:content26:c1-generalisation",
      "t": "generalisation",
      "level": "C1",
      "pos": "noun",
      "ru": "обобщение",
      "de": "die Verallgemeinerung",
      "examples": [
        {
          "t": "That is a broad [[generalisation]] based on one case.",
          "ru": "Это широкое обобщение на основании одного случая.",
          "de": "Das ist eine weitreichende Verallgemeinerung anhand eines einzigen Falls."
        }
      ],
      "plural": "generalisations"
    },
    {
      "id": "en:content26:c1-justified",
      "t": "justified",
      "level": "C1",
      "pos": "adj",
      "ru": "обоснованный",
      "de": "begründet",
      "examples": [
        {
          "t": "Her concern about the missing evidence was [[justified]].",
          "ru": "Её беспокойство из-за отсутствующих доказательств было обоснованным.",
          "de": "Ihre Sorge wegen der fehlenden Belege war begründet."
        }
      ]
    },
    {
      "id": "en:content26:c1-coherent",
      "t": "coherent",
      "level": "C1",
      "pos": "adj",
      "ru": "последовательный, связный",
      "de": "schlüssig",
      "examples": [
        {
          "t": "The report presents a [[coherent]] argument.",
          "ru": "В отчёте представлена последовательная аргументация.",
          "de": "Der Bericht enthält eine schlüssige Argumentation."
        }
      ]
    },
    {
      "id": "en:content26:c1-convincing",
      "t": "convincing",
      "level": "C1",
      "pos": "adj",
      "ru": "убедительный",
      "de": "überzeugend",
      "examples": [
        {
          "t": "The explanation was clear but not entirely [[convincing]].",
          "ru": "Объяснение было ясным, но не вполне убедительным.",
          "de": "Die Erklärung war klar, aber nicht ganz überzeugend."
        }
      ]
    },
    {
      "id": "en:content26:c1-arbitrary",
      "t": "arbitrary",
      "level": "C1",
      "pos": "adj",
      "ru": "произвольный",
      "de": "willkürlich",
      "examples": [
        {
          "t": "The threshold should be evidence-based rather than [[arbitrary]].",
          "ru": "Порог должен опираться на данные, а не быть произвольным.",
          "de": "Der Schwellenwert sollte auf Belegen beruhen, statt willkürlich zu sein."
        }
      ]
    },
    {
      "id": "en:content26:c1-indirect",
      "t": "indirect",
      "level": "C1",
      "pos": "adj",
      "ru": "косвенный",
      "de": "indirekt",
      "examples": [
        {
          "t": "This is only [[indirect]] evidence of a connection.",
          "ru": "Это лишь косвенное свидетельство связи.",
          "de": "Das ist nur ein indirekter Beleg für einen Zusammenhang."
        }
      ]
    },
    {
      "id": "en:content26:c1-ratio",
      "t": "ratio",
      "level": "C1",
      "pos": "noun",
      "ru": "соотношение",
      "de": "das Verhältnis",
      "examples": [
        {
          "t": "We need a better [[ratio]] of benefit to cost.",
          "ru": "Нам нужно лучшее соотношение пользы и затрат.",
          "de": "Wir brauchen ein besseres Verhältnis von Nutzen zu Kosten."
        }
      ],
      "plural": "ratios"
    }
  ]
});

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "words",
  "topic": "education",
  "items": [
    {
      "id": "en:telc26:lehrgang",
      "t": "training course",
      "pos": "noun",
      "plural": "training courses",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 5,
          "headword": "Lehrgang",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "учебный курс",
      "de": "der Lehrgang",
      "examples": [
        {
          "t": "The [[training course]] ends with a practical examination.",
          "de": "Der Lehrgang endet mit einer praktischen Prüfung.",
          "ru": "Учебный курс заканчивается практическим экзаменом.",
          "sense": {
            "ru": "учебный курс",
            "de": "der Lehrgang"
          }
        }
      ]
    },
    {
      "id": "en:telc26:vorkenntnisse",
      "t": "prior knowledge",
      "pos": "noun",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 5,
          "headword": "Vorkenntnisse",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "предварительные знания",
      "de": "die Vorkenntnisse",
      "examples": [
        {
          "t": "You do not need any [[prior knowledge]] for this course.",
          "de": "Für diesen Kurs brauchen Sie keine Vorkenntnisse.",
          "ru": "Для этого курса не нужны предварительные знания.",
          "sense": {
            "ru": "предварительные знания",
            "de": "die Vorkenntnisse"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:zulassung",
      "t": "admission",
      "pos": "noun",
      "plural": "admissions",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 5,
          "headword": "Zulassung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "допуск к обучению",
      "de": "die Zulassung",
      "examples": [
        {
          "t": "[[Admission]] to the training course was confirmed in writing.",
          "de": "Die Zulassung zum Lehrgang wurde schriftlich bestätigt.",
          "ru": "Допуск к обучению на курсе подтвердили письменно.",
          "sense": {
            "ru": "допуск к обучению",
            "de": "die Zulassung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:fachwortschatz",
      "t": "specialist vocabulary",
      "pos": "noun",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 5,
          "headword": "Fachwortschatz",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "профессиональная лексика",
      "de": "der Fachwortschatz",
      "examples": [
        {
          "t": "She is expanding her [[specialist vocabulary]] during the placement.",
          "de": "Im Praktikum erweitert sie ihren Fachwortschatz.",
          "ru": "Во время практики она расширяет свою профессиональную лексику.",
          "sense": {
            "ru": "профессиональная лексика",
            "de": "der Fachwortschatz"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:handwerklich",
      "t": "manual",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 1,
          "headword": "handwerklich",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "ремесленный",
      "de": "handwerklich",
      "examples": [
        {
          "t": "This task requires [[manual]] skills.",
          "de": "Diese Aufgabe erfordert handwerkliche Fähigkeiten.",
          "ru": "Для этой задачи нужны ремесленные навыки.",
          "sense": {
            "ru": "ремесленный",
            "de": "handwerklich"
          }
        }
      ]
    },
    {
      "id": "en:telc26:lernbereit",
      "t": "willing to learn",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 4,
          "headword": "lernbereit",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "готовый учиться",
      "de": "lernbereit",
      "examples": [
        {
          "t": "We are looking for people who are curious and [[willing to learn]].",
          "de": "Wir suchen Menschen, die neugierig und lernbereit sind.",
          "ru": "Мы ищем людей, которые любознательны и готовы учиться.",
          "sense": {
            "ru": "готовый учиться",
            "de": "lernbereit"
          }
        }
      ]
    },
    {
      "id": "en:telc26:absolvieren",
      "t": "complete",
      "pos": "verb",
      "forms": {
        "praes": "completes",
        "praet": "completed",
        "perf": "has completed"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 15,
          "headword": "absolvieren",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "пройти",
      "de": "absolvieren",
      "examples": [
        {
          "t": "She has [[completed]] a bookkeeping course.",
          "de": "Sie hat einen Lehrgang zur Buchhaltung absolviert.",
          "ru": "Она прошла курс по бухгалтерскому учёту.",
          "sense": {
            "ru": "пройти",
            "de": "absolvieren"
          }
        }
      ]
    },
    {
      "id": "en:telc26:verallgemeinern",
      "t": "generalise",
      "pos": "verb",
      "forms": {
        "praes": "generalises",
        "praet": "generalised",
        "perf": "has generalised"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 28,
          "headword": "verallgemeinern",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "обобщать",
      "de": "verallgemeinern",
      "examples": [
        {
          "t": "We should not immediately [[generalise]] from individual experiences.",
          "de": "Wir sollten einzelne Erfahrungen nicht sofort verallgemeinern.",
          "ru": "Не стоит сразу обобщать отдельные случаи.",
          "sense": {
            "ru": "обобщать",
            "de": "verallgemeinern"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "travel",
  "items": [
    {
      "id": "en:telc26:buchungsbestaetigung",
      "t": "booking confirmation",
      "pos": "noun",
      "plural": "booking confirmations",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 19,
          "headword": "Buchungsbestätigung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "подтверждение бронирования",
      "de": "die Buchungsbestätigung",
      "examples": [
        {
          "t": "The [[booking confirmation]] contains the conference hotel’s address.",
          "de": "Die Buchungsbestätigung enthält die Adresse des Tagungshotels.",
          "ru": "Подтверждение бронирования содержит адрес гостиницы для конференции.",
          "sense": {
            "ru": "подтверждение бронирования",
            "de": "die Buchungsbestätigung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:fahrgemeinschaft",
      "t": "carpool",
      "pos": "noun",
      "plural": "carpools",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 19,
          "headword": "Fahrgemeinschaft",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "совместные поездки на машине",
      "de": "die Fahrgemeinschaft",
      "examples": [
        {
          "t": "We are forming a [[carpool]] for the trip to the trade fair.",
          "de": "Für die Fahrt zur Messe bilden wir eine Fahrgemeinschaft.",
          "ru": "Для поездки на выставку мы организуем совместные поездки на машине.",
          "sense": {
            "ru": "совместные поездки на машине",
            "de": "die Fahrgemeinschaft"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "wellbeing",
  "items": [
    {
      "id": "en:telc26:belastbar",
      "t": "resilient",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 4,
          "headword": "belastbar",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "стрессоустойчивый",
      "de": "belastbar",
      "examples": [
        {
          "t": "She remains [[resilient]] even during hectic periods.",
          "de": "Auch in hektischen Phasen bleibt sie belastbar.",
          "ru": "Даже в напряжённые периоды она остаётся стрессоустойчивой.",
          "sense": {
            "ru": "стрессоустойчивый",
            "de": "belastbar"
          }
        }
      ]
    },
    {
      "id": "en:telc26:angemessen",
      "t": "appropriate",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 15,
          "headword": "angemessen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "уместный",
      "de": "angemessen",
      "examples": [
        {
          "t": "In this situation, a calm reply is [[appropriate]].",
          "de": "In dieser Situation ist eine ruhige Antwort angemessen.",
          "ru": "В этой ситуации спокойный ответ уместен.",
          "sense": {
            "ru": "уместный",
            "de": "angemessen"
          }
        }
      ]
    }
  ]
});
