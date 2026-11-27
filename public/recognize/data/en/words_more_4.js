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

/* === Content expansion 2026-11-27 (EN B1, B2, C1 Words) === */
(function () {
  'use strict';
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, plural) {
    var o = { id: 'en:x27:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true };
    if (plural) o.plural = plural;
    return o;
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('everyday', [
    W('matchstick', 'noun', 'matchstick', 'B1', 'спичка', 'das Streichholz',
      ex('She lit the candle on the table with a single [[matchstick]].', 'Она зажгла свечу на столе одной-единственной спичкой.', 'Sie zündete die Kerze auf dem Tisch mit einem einzigen Streichholz an.'), 'matchsticks'),
    W('keyring', 'noun', 'keyring', 'B1', 'брелок, связка ключей', 'der Schlüsselbund, Schlüsselanhänger',
      ex('I found my [[keyring]] at the bottom of my backpack.', 'Я нашёл свою связку ключей на самом дне рюкзака.', 'Ich fand meinen Schlüsselbund ganz unten im Rucksack.'), 'keyrings'),
    W('mishap', 'noun', 'mishap', 'B2', 'неприятная случайность, мелкий конфуз', 'das Missgeschick',
      ex('Despite a minor [[mishap]] with the projector, the talk went well.', 'Несмотря на небольшую накладку с проектором, выступление прошло хорошо.', 'Trotz eines kleinen Missgeschicks mit dem Beamer lief der Vortrag gut.'), 'mishaps'),
    W('spontaneous', 'adj', 'spontaneous', 'B1', 'спонтанный', 'spontan',
      ex('We made a [[spontaneous]] decision to take the evening train to the coast.', 'Мы приняли спонтанное решение поехать вечерним поездом к морю.', 'Wir trafen eine spontane Entscheidung, mit dem Abendzug an die Küste zu fahren.')),
    W('handy', 'adj', 'handy', 'B1', 'удобный, полезный под рукой', 'praktisch, griffbereit',
      ex('Keep a small notebook [[handy]] during the inspection.', 'Держи под рукой небольшой блокнот во время осмотра.', 'Halte während der Besichtigung ein kleines Notizbuch griffbereit.'))
  ]);

  reg('people', [
    W('role-model', 'noun', 'role model', 'B1', 'пример для подражания', 'das Vorbild',
      ex('Her older brother has always been a [[role model]] for her.', 'Её старший брат всегда был для неё примером для подражания.', 'Ihr älterer Bruder war für sie schon immer ein Vorbild.'), 'role models'),
    W('patience', 'noun', 'patience', 'B1', 'терпение', 'die Geduld',
      ex('Teaching beginners takes plenty of [[patience]] and clear examples.', 'Обучение новичков требует большого терпения и ясных примеров.', 'Anfänger zu unterrichten erfordert viel Geduld und klare Beispiele.')),
    W('trustworthy', 'adj', 'trustworthy', 'B2', 'надёжный, заслуживающий доверия', 'vertrauenswürdig',
      ex('Clients stay with advisers who prove to be [[trustworthy]] over time.', 'Клиенты остаются с консультантами, которые со временем доказывают свою надёжность.', 'Kunden bleiben bei Beratern, die sich auf Dauer als vertrauenswürdig erweisen.')),
    W('polite', 'adj', 'polite', 'B1', 'вежливый', 'höflich',
      ex('Even a [[polite]] refusal sounds better when you explain the reason.', 'Даже вежливый отказ звучит лучше, если объяснить причину.', 'Selbst eine höfliche Absage klingt besser, wenn man den Grund nennt.')),
    W('grateful', 'adj', 'grateful', 'B1', 'благодарный', 'dankbar',
      ex('We are truly [[grateful]] for your quick help yesterday.', 'Мы искренне благодарны за вашу быструю помощь вчера.', 'Wir sind wirklich dankbar für Ihre schnelle Hilfe gestern.')),
    W('honest', 'adj', 'honest', 'B1', 'честный, откровенный', 'ehrlich',
      ex('Give me an [[honest]] answer before we send the proposal out.', 'Дай мне честный ответ, прежде чем мы отправим предложение.', 'Gib mir eine ehrliche Antwort, bevor wir das Angebot abschicken.'))
  ]);

  reg('home', [
    W('towel', 'noun', 'towel', 'B1', 'полотенце', 'das Handtuch',
      ex('Clean [[towels]] are stacked on the top shelf in the bathroom.', 'Чистые полотенца сложены на верхней полке в ванной.', 'Frische Handtücher liegen auf dem obersten Regal im Bad.'), 'towels'),
    W('remote-control', 'noun', 'remote control', 'B1', 'пульт дистанционного управления', 'die Fernbedienung',
      ex('The batteries in the [[remote control]] need replacing again.', 'Батарейки в пульте снова нужно заменить.', 'Die Batterien in der Fernbedienung müssen schon wieder gewechselt werden.'), 'remote controls'),
    W('renovation', 'noun', 'renovation', 'B2', 'ремонт, обновление помещения', 'die Renovierung',
      ex('The flat needs a light [[renovation]] before the new tenants move in.', 'Квартире нужен лёгкий ремонт до заезда новых жильцов.', 'Die Wohnung braucht vor dem Einzug der neuen Mieter eine leichte Renovierung.'), 'renovations'),
    W('viewing', 'noun', 'viewing', 'B1', 'осмотр (недвижимости)', 'die Besichtigung',
      ex('Four applicants came to the afternoon [[viewing]] of the flat.', 'Четыре претендента пришли на дневной осмотр квартиры.', 'Vier Bewerber kamen zur Besichtigung der Wohnung am Nachmittag.'), 'viewings'),
    W('messy', 'adj', 'messy', 'B1', 'беспорядочный, захламлённый', 'unordentlich, chaotisch',
      ex('The hallway stayed [[messy]] for days while we unpacked the boxes.', 'В прихожей несколько дней царил беспорядок, пока мы разбирали коробки.', 'Der Flur blieb tagelang unordentlich, während wir die Kisten auspackten.')),
    W('tidy', 'adj', 'tidy', 'B1', 'аккуратный, прибранный', 'ordentlich',
      ex('She likes to keep her desk [[tidy]] before leaving the office.', 'Она любит оставлять свой стол аккуратно убранным перед уходом из офиса.', 'Sie hält ihren Schreibtisch gern ordentlich, bevor sie das Büro verlässt.'))
  ]);

  reg('food', [
    W('shelf-life', 'noun', 'shelf life', 'B2', 'срок годности / хранения', 'die Haltbarkeit',
      ex('Always check the [[shelf life]] on dairy products before buying.', 'Всегда проверяйте срок годности на молочных продуктах перед покупкой.', 'Prüfen Sie vor dem Kauf immer die Haltbarkeit von Milchprodukten.')),
    W('tap-water', 'noun', 'tap water', 'B1', 'водопроводная вода', 'das Leitungswasser',
      ex('In this city, [[tap water]] is completely safe to drink.', 'В этом городе водопроводную воду совершенно безопасно пить.', 'In dieser Stadt kann man Leitungswasser bedenkenlos trinken.')),
    W('kettle', 'noun', 'kettle', 'B1', 'чайник (для кипячения)', 'der Wasserkocher',
      ex('Put the [[kettle]] on while I fetch two clean mugs.', 'Поставь чайник, пока я принесу две чистые кружки.', 'Stell den Wasserkocher an, während ich zwei saubere Tassen hole.'), 'kettles'),
    W('tasty', 'adj', 'tasty', 'B1', 'вкусный, аппетитный', 'lecker, schmackhaft',
      ex('The soup looked simple, yet it turned out surprisingly [[tasty]].', 'Суп выглядел просто, но оказался удивительно вкусным.', 'Die Suppe sah schlicht aus, war aber überraschend lecker.')),
    W('complimentary', 'adj', 'complimentary', 'B2', 'бесплатный (в подарок от заведения)', 'kostenlos, gratis',
      ex('The hotel offered [[complimentary]] coffee in the lobby all morning.', 'Отель предлагал гостям бесплатный кофе в лобби всё утро.', 'Das Hotel bot den ganzen Morgen kostenlosen Kaffee in der Lobby an.'))
  ]);

  reg('health', [
    W('chemist', 'noun', 'chemist', 'B1', 'аптека; фармацевт', 'die Apotheke; der Apotheker',
      ex('The local [[chemist]] stays open until eight on weekdays.', 'Местная аптека по будням открыта до восьми вечера.', 'Die Apotheke vor Ort hat werktags bis zwanzig Uhr geöffnet.'), 'chemists'),
    W('nausea', 'noun', 'nausea', 'B2', 'тошнота', 'die Übelkeit',
      ex('Rest and small sips of water usually ease mild [[nausea]].', 'Отдых и маленькие глотки воды обычно облегчают лёгкую тошноту.', 'Ruhe und kleine Schlucke Wasser lindern leichte Übelkeit meist.')),
    W('ambulance', 'noun', 'ambulance', 'B1', 'машина скорой помощи', 'der Rettungswagen, Krankenwagen',
      ex('Someone called an [[ambulance]] immediately after the cyclist fell.', 'Сразу после падения велосипедиста кто-то вызвал скорую помощь.', 'Sofort nach dem Sturz des Radfahrers rief jemand einen Rettungswagen.'), 'ambulances'),
    W('bandage', 'noun', 'bandage', 'B1', 'бинт, повязка', 'der Verband',
      ex('The nurse wrapped a clean [[bandage]] firmly around his wrist.', 'Медсестра плотно наложила чистый бинт на его запястье.', 'Die Pflegekraft legte ihm fest einen sauberen Verband um das Handgelenk.'), 'bandages'),
    W('painkiller', 'noun', 'painkiller', 'B1', 'обезболивающее', 'das Schmerzmittel',
      ex('Do not take a [[painkiller]] on an empty stomach.', 'Не принимайте обезболивающее на голодный желудок.', 'Nehmen Sie Schmerzmittel nicht auf nüchternen Magen ein.'), 'painkillers'),
    W('dizzy', 'adj', 'dizzy', 'B1', 'испытывающий головокружение', 'schwindelig',
      ex('Stand up slowly if you still feel [[dizzy]] after standing.', 'Вставайте медленно, если у вас всё ещё кружится голова.', 'Stehen Sie langsam auf, wenn Ihnen noch schwindelig ist.'))
  ]);

  reg('work', [
    W('public-holiday', 'noun', 'public holiday', 'B1', 'официальный праздничный день', 'der gesetzliche Feiertag',
      ex('All banks are closed on Monday because of the [[public holiday]].', 'Все банки закрыты в понедельник из-за государственного праздника.', 'Alle Banken bleiben am Montag wegen des gesetzlichen Feiertags geschlossen.'), 'public holidays'),
    W('exhausting', 'adj', 'exhausting', 'B1', 'изнурительный, утомительный', 'anstrengend, erschöpfend',
      ex('Working a twelve-hour trade fair shift on your feet is [[exhausting]].', 'Отработать двенадцатичасовую смену на выставке на ногах очень утомительно.', 'Eine Zwölf-Stunden-Schicht auf der Messe im Stehen ist sehr anstrengend.')),
    W('fulfilling', 'adj', 'fulfilling', 'B2', 'приносящий глубокое удовлетворение', 'erfüllend',
      ex('She finds mentoring junior developers genuinely [[fulfilling]].', 'Наставничество для младших разработчиков приносит ей настоящее удовлетворение.', 'Jüngere Entwickler anzuleiten empfindet sie als wirklich erfüllend.')),
    W('capable', 'adj', 'capable', 'B1', 'способный, компетентный', 'fähig, kompetent',
      ex('He is fully [[capable]] of leading the audit on his own.', 'Он вполне способен провести аудит самостоятельно.', 'Er ist durchaus fähig, das Audit selbstständig zu leiten.'))
  ]);

  reg('authorities', [
    W('ban', 'noun', 'ban', 'B1', 'запрет', 'das Verbot',
      ex('The council introduced a [[ban]] on loud construction work after eight p.m.', 'Муниципалитет ввёл запрет на шумные строительные работы после восьми вечера.', 'Die Gemeinde führte ein Verbot für laute Bauarbeiten nach zwanzig Uhr ein.'), 'bans'),
    W('submission', 'noun', 'submission', 'B2', 'подача (документов, заявки)', 'die Einreichung',
      ex('Keep the email confirmation after the online [[submission]] of your forms.', 'Сохраните письмо-подтверждение после онлайн-подачи ваших форм.', 'Bewahren Sie die E-Mail-Bestätigung nach der Online-Einreichung Ihrer Formulare auf.'), 'submissions'),
    W('valid', 'adj', 'valid', 'B1', 'действительный, имеющий силу', 'gültig',
      ex('Your passport must remain [[valid]] for at least six months.', 'Ваш паспорт должен оставаться действительным ещё минимум шесть месяцев.', 'Ihr Reisepass muss noch mindestens sechs Monate gültig sein.')),
    W('expired', 'adj', 'expired', 'B1', 'просроченный, истёкший', 'abgelaufen',
      ex('The office could not process the request with an [[expired]] residence card.', 'Ведомство не смогло обработать запрос с просроченным видом на жительство.', 'Das Amt konnte den Antrag mit einem abgelaufenen Aufenthaltstitel nicht bearbeiten.'))
  ]);

  reg('travel', [
    W('passenger', 'noun', 'passenger', 'B1', 'пассажир', 'der Passagier',
      ex('Every [[passenger]] received a message about the gate change.', 'Каждый пассажир получил сообщение о смене выхода на посадку.', 'Jeder Passagier erhielt eine Nachricht über den Gate-Wechsel.'), 'passengers'),
    W('layover', 'noun', 'layover', 'B2', 'пересадка, ожидание между рейсами', 'der Aufenthalt (Zwischenstopp)',
      ex('We had a three-hour [[layover]] in Frankfurt before the final flight.', 'Перед последним рейсом у нас была трёхчасовая пересадка во Франкфурте.', 'Vor dem letzten Flug hatten wir einen dreistündigen Aufenthalt in Frankfurt.'), 'layovers'),
    W('luggage-rack', 'noun', 'luggage rack', 'B1', 'багажная полка', 'die Gepäckablage',
      ex('Please lift heavy suitcases carefully onto the overhead [[luggage rack]].', 'Пожалуйста, осторожно поднимайте тяжёлые чемоданы на верхнюю багажную полку.', 'Bitte heben Sie schwere Koffer vorsichtig auf die Gepäckablage.'), 'luggage racks'),
    W('commuter', 'noun', 'commuter', 'B2', 'человек, ежедневно ездящий на работу в другой город/район', 'der Pendler',
      ex('Many [[commuters]] rely on the regional train every morning.', 'Многие пригородные пассажиры каждое утро полагаются на региональный поезд.', 'Viele Pendler sind jeden Morgen auf den Regionalzug angewiesen.'), 'commuters'),
    W('rebook', 'verb', 'rebook', 'B1', 'перебронировать (билет, отель)', 'umbuchen',
      ex('The agent helped us [[rebook]] onto the next available train.', 'Сотрудник помог нам перебронировать билеты на следующий свободный поезд.', 'Der Mitarbeiter half uns, auf den nächsten freien Zug umzubuchen.'))
  ]);

  reg('leisure', [
    W('lecture', 'noun', 'lecture', 'B1', 'лекция', 'der Vortrag, die Vorlesung',
      ex('The evening [[lecture]] on urban architecture drew a full hall.', 'Вечерняя лекция о городской архитектуре собрала полный зал.', 'Der Abendvortrag über Stadtarchitektur füllte den ganzen Saal.'), 'lectures'),
    W('trade-fair', 'noun', 'trade fair', 'B2', 'отраслевая выставка, ярмарка', 'die Fachmesse',
      ex('Our team met three new suppliers at the annual [[trade fair]].', 'На ежегодной выставке наша команда познакомилась с тремя новыми поставщиками.', 'Auf der jährlichen Fachmesse lernte unser Team drei neue Lieferanten kennen.'), 'trade fairs'),
    W('pastime', 'noun', 'pastime', 'B2', 'хобби, любимое занятие в свободное время', 'der Zeitvertreib, das Hobby',
      ex('Gardening has become his favourite weekend [[pastime]].', 'Садоводство стало его любимым занятием на выходных.', 'Gartenarbeit ist zu seinem liebsten Zeitvertreib am Wochenende geworden.'), 'pastimes'),
    W('thrilling', 'adj', 'thrilling', 'B1', 'захватывающий, волнующий', 'packend, spannend',
      ex('The final ten minutes of the match were genuinely [[thrilling]].', 'Последние десять минут матча были по-настоящему захватывающими.', 'Die letzten zehn Minuten des Spiels waren wirklich packend.'))
  ]);

  reg('society', [
    W('primary-school', 'noun', 'primary school', 'B1', 'начальная школа', 'die Grundschule',
      ex('Children usually start [[primary school]] at the age of five or six.', 'Дети обычно начинают учиться в начальной школе в пять или шесть лет.', 'Kinder kommen meist mit fünf oder sechs Jahren in die Grundschule.'), 'primary schools'),
    W('grammar-school', 'noun', 'grammar school', 'B2', 'гимназия (академическая средняя школа)', 'das Gymnasium',
      ex('She attended a local [[grammar school]] before studying engineering.', 'Она училась в местной гимназии до поступления на инженерный факультет.', 'Sie besuchte ein örtliches Gymnasium, bevor sie Ingenieurwesen studierte.'), 'grammar schools'),
    W('scholarship', 'noun', 'scholarship', 'B2', 'стипендия (учебная, грант)', 'das Stipendium',
      ex('He won a [[scholarship]] that covered his tuition for two semesters.', 'Он получил стипендию, которая покрыла обучение за два семестра.', 'Er erhielt ein Stipendium, das die Studiengebühren für zwei Semester deckte.'), 'scholarships'),
    W('literacy', 'noun', 'literacy', 'B2', 'грамотность', 'die Lese- und Schreibfähigkeit',
      ex('Digital [[literacy]] helps citizens spot manipulated news reports.', 'Цифровая грамотность помогает гражданам распознавать искажённые новости.', 'Digitale Kompetenz hilft Bürgern, manipulierte Meldungen zu erkennen.'))
  ]);

  reg('wellbeing', [
    W('disappointment', 'noun', 'disappointment', 'B1', 'разочарование', 'die Enttäuschung',
      ex('Not getting the grant was a sharp [[disappointment]], yet she tried again.', 'Отказ в гранте стал болезненным разочарованием, но она попробовала снова.', 'Die Absage für das Stipendium war eine herbe Enttäuschung, doch sie versuchte es erneut.'), 'disappointments'),
    W('self-esteem', 'noun', 'self-esteem', 'B2', 'самооценка, самоуважение', 'das Selbstwertgefühl',
      ex('Constant comparison online can quietly wear down a teenager’s [[self-esteem]].', 'Постоянное сравнение себя с другими в сети способно незаметно подорвать самооценку подростка.', 'Ständiger Vergleich im Netz kann das Selbstwertgefühl Jugendlicher schleichend schwächen.')),
    W('empathetic', 'adj', 'empathetic', 'B2', 'чуткий, эмпатичный', 'empathisch, einfühlsam',
      ex('An [[empathetic]] listener lets the other person finish without interrupting.', 'Чуткий собеседник даёт другому человеку выговориться, не перебивая.', 'Ein einfühlsamer Zuhörer lässt das Gegenüber ohne Unterbrechung ausreden.')),
    W('open-minded', 'adj', 'open-minded', 'B2', 'широких взглядов, открытый новому', 'aufgeschlossen',
      ex('Staying [[open-minded]] makes it easier to learn from unfamiliar methods.', 'Открытость новому помогает легче учиться непривычным подходам.', 'Aufgeschlossen zu bleiben erleichtert es, aus ungewohnten Methoden zu lernen.'))
  ]);

  reg('digital-life', [
    W('newsletter', 'noun', 'newsletter', 'B1', 'информационная рассылка', 'der Newsletter',
      ex('I unsubscribed from every promotional [[newsletter]] that cluttered my inbox.', 'Я отписался от всех рекламных рассылок, которые засоряли почту.', 'Ich habe jeden Werbe-Newsletter abbestellt, der mein Postfach füllte.'), 'newsletters'),
    W('rumour', 'noun', 'rumour', 'B2', 'слух, непроверенная молва', 'das Gerücht',
      ex('Do not repeat an unverified [[rumour]] as if it were a confirmed fact.', 'Не повторяйте непроверенный слух так, словно это подтверждённый факт.', 'Geben Sie kein ungeprüftes Gerücht so weiter, als wäre es eine bestätigte Tatsache.'), 'rumours'),
    W('fact-check', 'verb', 'fact-check', 'B2', 'проверять факты', 'Fakten prüfen',
      ex('Editors should [[fact-check]] every statistic before publishing the chart.', 'Редакторам следует проверять каждую цифру перед публикацией графика.', 'Redaktionen sollten jede Zahl vor der Veröffentlichung einer Grafik prüfen.')),
    W('misleading', 'adj', 'misleading', 'B2', 'вводящий в заблуждение', 'irreführend',
      ex('The headline was technically true yet still deeply [[misleading]].', 'Заголовок формально был верным, но всё равно глубоко вводил в заблуждение.', 'Die Schlagzeile war formal korrekt und dennoch stark irreführend.'))
  ]);

  reg('environment', [
    W('landfill', 'noun', 'landfill', 'B2', 'свалка, полигон отходов', 'die Mülldeponie',
      ex('Repairing electronics keeps usable metals out of [[landfill]].', 'Ремонт техники не даёт пригодным металлам оказаться на свалке.', 'Die Reparatur von Geräten hält nutzbare Metalle von der Mülldeponie fern.'), 'landfills'),
    W('emissions', 'noun', 'emissions', 'B2', 'выбросы (в атмосферу)', 'die Emissionen',
      ex('Cleaner freight rail can cut regional transport [[emissions]] sharply.', 'Более экологичные грузовые поезда способны резко сократить выбросы транспорта.', 'Sauberer Güterverkehr auf der Schiene kann regionale Verkehrsemissionen deutlich senken.')),
    W('dispose', 'verb', 'dispose', 'B2', 'избавляться, утилизировать (dispose of)', 'entsorgen',
      ex('Check local rules before you [[dispose]] of old paint tins.', 'Проверьте местные правила, прежде чем утилизировать старые банки с краской.', 'Prüfen Sie die örtlichen Regeln, bevor Sie alte Farbdosen entsorgen.')),
    W('scarce', 'adj', 'scarce', 'B2', 'дефицитный, скудный, редкий', 'knapp',
      ex('Fresh water becomes [[scarce]] during a prolonged summer drought.', 'Во время затяжной летней засухи пресная вода становится дефицитной.', 'Während einer langen Sommerdürre wird Frischwasser knapp.'))
  ]);

  reg('economy', [
    W('retailer', 'noun', 'retailer', 'B2', 'розничный продавец, ритейлер', 'der Einzelhändler',
      ex('The online [[retailer]] offers a thirty-day return window on clothes.', 'Онлайн-ритейлер предлагает тридцатидневный срок возврата одежды.', 'Der Online-Einzelhändler bietet ein dreißigtägiges Rückgaberecht für Kleidung.'), 'retailers'),
    W('affordable', 'adj', 'affordable', 'B2', 'доступный по цене', 'erschwinglich, bezahlbar',
      ex('Reliable public transport keeps commuting [[affordable]] for students.', 'Надёжный общественный транспорт делает поездки доступными для студентов.', 'Zuverlässiger Nahverkehr hält das Pendeln für Studierende bezahlbar.')),
    W('bankrupt', 'adj', 'bankrupt', 'B2', 'банкрот, неплатёжеспособный', 'bankrott, insolvent',
      ex('After two slow winters, the regional supplier went [[bankrupt]].', 'После двух слабых зимних сезонов региональный поставщик обанкротился.', 'Nach zwei schwachen Wintern ging der regionale Zulieferer bankrott.'))
  ]);

  reg('society-politics', [
    W('bureaucracy', 'noun', 'bureaucracy', 'B2', 'бюрократия', 'die Bürokratie',
      ex('Digital forms helped cut down routine [[bureaucracy]] at the town hall.', 'Цифровые формы помогли сократить рутинную бюрократию в ратуше.', 'Digitale Formulare halfen, routinemäßige Bürokratie im Rathaus abzubauen.')),
    W('fairness', 'noun', 'fairness', 'B2', 'справедливость, беспристрастность', 'die Fairness, Gerechtigkeit',
      ex('In [[fairness]], both teams met the deadline under tough conditions.', 'По справедливости, обе команды уложились в срок в сложных условиях.', 'Fairerweise muss man sagen, dass beide Teams die Frist unter harten Bedingungen einhielten.')),
    W('solidarity', 'noun', 'solidarity', 'B2', 'солидарность', 'die Solidarität',
      ex('Neighbours showed real [[solidarity]] when the basement flooded.', 'Соседи проявили настоящую солидарность, когда затопило подвал.', 'Die Nachbarn zeigten echte Solidarität, als der Keller überflutet war.'))
  ]);

  reg('education', [
    W('apprenticeship', 'noun', 'apprenticeship', 'B2', 'производственное обучение, ученичество (Ausbildung)', 'die Berufsausbildung, Lehre',
      ex('He completed a three-year [[apprenticeship]] as an industrial electrician.', 'Он прошёл трёхлетнее производственное обучение на промышленного электрика.', 'Er absolvierte eine dreijährige Berufsausbildung zum Industrieelektriker.'), 'apprenticeships'),
    W('competence', 'noun', 'competence', 'B2', 'компетентность, квалификация', 'die Kompetenz',
      ex('Practical [[competence]] often weighs as much as formal grades.', 'Практическая компетентность часто значит не меньше, чем формальные оценки.', 'Praktische Kompetenz wiegt oft ebenso viel wie formale Noten.'), 'competences'),
    W('fluent', 'adj', 'fluent', 'B1', 'свободно владеющий языком, беглый', 'fließend',
      ex('She became [[fluent]] in German after working two years in Munich.', 'Она стала свободно говорить по-немецки, проработав два года в Мюнхене.', 'Sie sprach fließend Deutsch, nachdem sie zwei Jahre in München gearbeitet hatte.'))
  ]);

  reg('c1_argumentation', [
    W('implication', 'noun', 'implication', 'C1', 'скрытое следствие, последствие, подтекст', 'die Tragweite, Auswirkung',
      ex('Few realised the full [[implication]] of that clause until the audit.', 'Мало кто осознавал все последствия этого пункта договора до самого аудита.', 'Nur wenige erkannten die volle Tragweite dieser Klausel bis zum Audit.'), 'implications'),
    W('plausibility', 'noun', 'plausibility', 'C1', 'правдоподобие, убедительность', 'die Plausibilität',
      ex('Reviewers first test the [[plausibility]] of the model’s baseline figures.', 'Рецензенты сначала проверяют правдоподобие базовых цифр модели.', 'Prüfer testen zunächst die Plausibilität der Ausgangszahlen des Modells.')),
    W('fallacy', 'noun', 'fallacy', 'C1', 'логическая ошибка, заблуждение', 'der Trugschluss',
      ex('Assuming that correlation proves cause is a classic [[fallacy]].', 'Считать, что корреляция доказывает причину, — классическая логическая ошибка.', 'Anzunehmen, Korrelation beweise Kausalität, ist ein klassischer Trugschluss.'), 'fallacies'),
    W('discrepancy', 'noun', 'discrepancy', 'C1', 'расхождение, несоответствие', 'die Diskrepanz',
      ex('There is a sharp [[discrepancy]] between the two quarterly totals.', 'Между двумя квартальными итогами есть резкое расхождение.', 'Zwischen beiden Quartalssummen besteht eine deutliche Diskrepanz.'), 'discrepancies'),
    W('corroborate', 'verb', 'corroborate', 'C1', 'подкреплять, подтверждать (независимыми данными)', 'untermauern, bestätigen',
      ex('Two independent logs [[corroborate]] the engineer’s timeline of the outage.', 'Два независимых журнала подтверждают хронологию сбоя, описанную инженером.', 'Zwei unabhängige Protokolle untermauern den Zeitablauf des Ingenieurs.')),
    W('refute', 'verb', 'refute', 'C1', 'опровергать (доказательно)', 'widerlegen',
      ex('New test data [[refutes]] the claim that the delay was unavoidable.', 'Новые тестовые данные опровергают утверждение о неизбежности задержки.', 'Neue Testdaten widerlegen die Behauptung, die Verzögerung sei unvermeidlich gewesen.')),
    W('nuanced', 'adj', 'nuanced', 'C1', 'тонкий, нюансированный, взвешенный', 'differenziert, nuanciert',
      ex('The report offers a [[nuanced]] view rather than easy slogans.', 'Отчёт предлагает взвешенный взгляд вместо простых лозунгов.', 'Der Bericht bietet eine differenzierte Sicht statt einfacher Parolen.')),
    W('untenable', 'adj', 'untenable', 'C1', 'несостоятельный (об аргументе, позиции)', 'unhaltbar',
      ex('Once the figures were corrected, that position became [[untenable]].', 'После исправления цифр эта позиция стала несостоятельной.', 'Nach der Korrektur der Zahlen wurde diese Position unhaltbar.'))
  ]);
})();

/* === Content expansion Wave 2 (2026-11-27): +65 EN Words (c1_argumentation + 5 thinnest topics) === */
(function () {
  'use strict';
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, plural) {
    var o = { id: 'en:w2:' + id, pos: pos, t: t, level: level, learnable: true, ru: ru, de: de, examples: [e] };
    if (plural) o.plural = plural;
    return o;
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('c1_argumentation', [
    W('counterargument', 'noun', 'counterargument', 'C1', 'контраргумент, возражение', 'das Gegenargument',
      ex('A strong essay anticipates every obvious [[counterargument]] in advance.', 'Сильное эссе заранее учитывает каждое очевидное возражение.', 'Ein starker Aufsatz greift jedes naheliegende Gegenargument vorab auf.'), 'counterarguments'),
    W('crux', 'noun', 'crux', 'C1', 'суть вопроса, ключевой узел проблемы', 'der Kernpunkt',
      ex('The [[crux]] of the disagreement lies in how risk is measured.', 'Суть разногласий кроется в том, как именно измеряют риск.', 'Der Kernpunkt der Meinungsverschiedenheit liegt in der Risikomessung.')),
    W('trade-off', 'noun', 'deadlock', 'C1', 'тупик, безвыходная ситуация на переговорах', 'die Sackgasse, Pattsituation',
      ex('Both sides reached a [[deadlock]] over freight rates until an independent mediator stepped in.', 'Обе стороны зашли в тупик по тарифам на перевозки, пока не вмешался посредник.', 'Beide Seiten gerieten bei den Frachttarifen in eine Sackgasse, bis ein Vermittler half.'), 'deadlocks'),
    W('caveat', 'noun', 'corollary', 'C1', 'логическое следствие, естественный вывод', 'die logische Folge, Konsequenz',
      ex('Greater transparency is a natural [[corollary]] of publishing quarterly audits.', 'Большая прозрачность — естественное следствие публикации квартальных аудитов.', 'Mehr Transparenz ist eine logische Folge der Veröffentlichung von Quartalsaudits.'), 'corollaries'),
    W('baseline', 'noun', 'baseline', 'C1', 'исходный уровень, базовая точка сравнения', 'die Ausgangsbasis, Richtlinie',
      ex('Without a clean [[baseline]], quarterly growth percentages mislead readers.', 'Без чистой базовой линии квартальные проценты роста вводят читателей в заблуждение.', 'Ohne verlässliche Ausgangsbasis führen Quartalsprozente in die Irre.'), 'baselines'),
    W('concede', 'verb', 'concede', 'C1', 'признавать (слабость довода, правоту оппонента)', 'einräumen, zugestehen',
      ex('Even critics [[concede]] that the updated guide is easier to scan.', 'Даже критики признают, что обновлённое руководство читать проще.', 'Selbst Kritiker räumen ein, dass der aktualisierte Leitfaden leichter lesbar ist.')),
    W('substantiate', 'verb', 'substantiate', 'C1', 'подкреплять фактами, обосновывать доказательно', 'belegen, untermauern',
      ex('The auditor asked the team to [[substantiate]] each expense claim with receipts.', 'Аудитор попросил команду подтвердить каждую статью расходов чеками.', 'Der Prüfer bat das Team, jede Ausgabenforderung mit Belegen zu untermauern.')),
    W('dispel', 'verb', 'dispel', 'C1', 'рассеивать, снимать (сомнения, миф)', 'zerstreuen, entkräften',
      ex('Open Q&A sessions help [[dispel]] rumours during reorganisations.', 'Открытые сессии вопросов помогают рассеивать слухи при реорганизации.', 'Offene Fragerunden helfen, Gerüchte während Umstrukturierungen zu zerstreuen.')),
    W('overstate', 'verb', 'overstate', 'C1', 'преувеличивать (значение, эффект)', 'überbewerten, übertreiben',
      ex('Headline summaries often [[overstate]] tiny differences between test groups.', 'Заголовки часто преувеличивают крошечные различия между тестовыми группами.', 'Schlagzeilen übertreiben oft winzige Unterschiede zwischen Testgruppen.')),
    W('qualify', 'verb', 'qualify', 'C1', 'оговаривать, уточнять границы утверждения', 'einschränken, relativieren',
      ex('Let me [[qualify]] that statement: it holds only for urban routes.', 'Позвольте уточнить это утверждение: оно верно только для городских маршрутов.', 'Lassen Sie mich diese Aussage relativieren: Sie gilt nur für Stadtstrecken.')),
    W('cogent', 'adj', 'cogent', 'C1', 'убедительный, веский, логичный', 'stichhaltig, schlüssig',
      ex('She presented a brief yet [[cogent]] case for keeping local backups.', 'Она изложила краткий, но веский довод в пользу локальных копий.', 'Sie legte ein kurzes, aber stichhaltiges Argument für lokale Backups vor.')),
    W('indispensable', 'adj', 'indispensable', 'C1', 'незаменимый, абсолютно необходимый', 'unabdingbar, unverzichtbar',
      ex('Clear version control is [[indispensable]] once five developers share a repo.', 'Чёткий контроль версий незаменим, когда в одном репозитории работают пятеро.', 'Klare Versionskontrolle ist unverzichtbar, sobald fünf Entwickler zusammenarbeiten.')),
    W('arbitrary', 'noun', 'conjecture', 'C1', 'догадка, предположение без твёрдых фактов', 'die Vermutung, Mutmaßung',
      ex('Without raw measurements, the cause of the slowdown remains mere [[conjecture]].', 'Без исходных замеров причина замедления остаётся голой догадкой.', 'Ohne Rohdaten bleibt die Ursache der Verlangsamung bloße Mutmaßung.'), 'conjectures'),
    W('tentative', 'adj', 'tentative', 'C1', 'предварительный, осторожный, ориентировочный', 'vorläufig, vorsichtig',
      ex('Until lab samples return, every conclusion remains strictly [[tentative]].', 'Пока не вернулись анализы, любой вывод остаётся сугубо предварительным.', 'Bis die Laborproben vorliegen, bleibt jedes Fazit strikt vorläufig.')),
    W('conducive', 'adj', 'conducive', 'C1', 'способствующий, благоприятный (для чего-л.)', 'förderlich',
      ex('Quiet study booths are far more [[conducive]] to reading than open lounges.', 'Тихие кабинки намного лучше способствуют чтению, чем открытый холл.', 'Ruhige Lernkabinen sind für das Lesen deutlich förderlicher als offene Lounges.')),
    W('inadvertently', 'adv', 'inadvertently', 'C1', 'непреднамеренно, по невнимательности', 'unbeabsichtigt, versehentlich',
      ex('Changing the default filter [[inadvertently]] hid older client records.', 'Смена фильтра по умолчанию непреднамеренно скрыла старые записи клиентов.', 'Das Ändern des Standardfilters verbarg unbeabsichtigt ältere Kundendaten.'))
  ]);

  reg('environment', [
    W('renewable-energy', 'noun', 'renewable energy', 'B1', 'возобновляемая энергия', 'erneuerbare Energie',
      ex('Half the town’s electricity now comes from [[renewable energy]].', 'Половина электричества города теперь поступает из возобновляемых источников.', 'Die Hälfte des Stadtstroms stammt nun aus erneuerbarer Energie.')),
    W('biodiversity', 'noun', 'biodiversity', 'B2', 'биоразнообразие', 'die Artenvielfalt',
      ex('Restoring wetlands quickly boosts local [[biodiversity]].', 'Восстановление болот быстро повышает местное биоразнообразие.', 'Die Wiederherstellung von Feuchtgebieten stärkt rasch die Artenvielfalt.')),
    W('soil-erosion', 'noun', 'erosion', 'B2', 'эрозия (почвы, берега)', 'die Erosion',
      ex('Planting hedgerows helps slow wind [[erosion]] across open fields.', 'Посадка живых изгородей замедляет ветровую эрозию на открытых полях.', 'Hecken zu pflanzen bremst die Winderosion auf offenen Feldern.')),
    W('drought-tolerant', 'noun', 'deforestation', 'B2', 'вырубка лесов', 'die Entwaldung, Abholzung',
      ex('Satellite maps track illegal [[deforestation]] in near real time.', 'Спутниковые карты отслеживают незаконную вырубку лесов почти в реальном времени.', 'Satellitenkarten verfolgen illegale Abholzung fast in Echtzeit.')),
    W('insulation', 'noun', 'insulation', 'B2', 'утепление, теплоизоляция', 'die Wärmedämmung',
      ex('Better roof [[insulation]] cuts winter heating bills noticeably.', 'Качественное утепление крыши заметно снижает зимние счета за отопление.', 'Bessere Dachdämmung senkt die Heizkosten im Winter spürbar.')),
    W('conserve', 'verb', 'conserve', 'B2', 'беречь, экономить (ресурсы)', 'schonen, einsparen',
      ex('Drip irrigation allows farms to [[conserve]] groundwater during dry summers.', 'Капельный полив позволяет хозяйствам экономить грунтовые воды в засушливое лето.', 'Tröpfchenbewässerung hilft Betrieben, im trockenen Sommer Grundwasser zu sparen.')),
    W('contaminate', 'verb', 'contaminate', 'B2', 'загрязнять, заражать (воду, почву)', 'verunreinigen, kontaminieren',
      ex('Leaking storage tanks can [[contaminate]] nearby wells for years.', 'Протекающие резервуары могут на годы загрязнить ближайшие колодцы.', 'Undichte Tanks können nahe Brunnen jahrelang verunreinigen.')),
    W('replenish', 'verb', 'replenish', 'C1', 'восполнять, пополнять (запасы, водоносные слои)', 'wieder auffüllen, erneuern',
      ex('Steady autumn rain finally helped [[replenish]] the dry reservoirs.', 'Затяжные осенние дожди наконец помогли восполнить пересохшие водохранилища.', 'Anhaltender Herbstregen füllte die leeren Stauseen endlich wieder auf.')),
    W('sustainable', 'adj', 'emissions-free', 'B2', 'без выбросов, с нулевыми выбросами', 'emissionsfrei',
      ex('Two electric delivery vans make local parcel routes [[emissions-free]].', 'Два электрических фургона делают местную доставку посылок безвыбросной.', 'Zwei elektrische Lieferwagen machen lokale Paketzustellungen emissionsfrei.')),
    W('biodegradable', 'adj', 'biodegradable', 'B2', 'биоразлагаемый', 'biologisch abbaubar',
      ex('The café switched to [[biodegradable]] cups for takeaway drinks.', 'Кафе перешло на биоразлагаемые стаканчики для напитков на вынос.', 'Das Café stellte für Getränke zum Mitnehmen auf biologisch abbaubare Becher um.'))
  ]);

  reg('society-politics', [
    W('referendum', 'noun', 'referendum', 'B2', 'референдум', 'der Volksentscheid, das Referendum',
      ex('Voters decided the transport expansion in a local [[referendum]].', 'Жители решили вопрос о расширении транспорта на местном референдуме.', 'Die Wähler entschieden über den Verkehrsausbau in einem lokalen Referendum.'), 'referendums'),
    W('voter-turnout', 'noun', 'ballot box', 'B2', 'избирательная урна', 'die Wahlurne',
      ex('Inspectors sealed each [[ballot box]] before polling stations opened at eight.', 'Наблюдатели опечатали каждую избирательную урну до открытия участков в восемь.', 'Wahlhelfer versiegelten jede Wahlurne vor Öffnung der Wahllokale um acht Uhr.'), 'ballot boxes'),
    W('consensus', 'noun', 'unanimity', 'C1', 'единогласие, полное согласие', 'die Einstimmigkeit',
      ex('Budget rules require [[unanimity]] among all regional members.', 'Бюджетные правила требуют единогласия среди всех региональных участников.', 'Haushaltsregeln verlangen Einstimmigkeit unter allen regionalen Mitgliedern.')),
    W('accountability', 'noun', 'accountability', 'C1', 'подотчётность, ответственность перед обществом', 'die Rechenschaftspflicht',
      ex('Public spending requires strict financial [[accountability]].', 'Государственные расходы требуют строгой финансовой подотчётности.', 'Öffentliche Ausgaben verlangen eine strikte finanzielle Rechenschaftspflicht.')),
    W('legislation', 'noun', 'legislation', 'B2', 'законодательство, принятый закон', 'die Gesetzgebung',
      ex('Updated consumer [[legislation]] guarantees two years of warranty.', 'Обновлённое законодательство о правах потребителей гарантирует два года гарантии.', 'Neue Verbraucherschutzgesetze garantieren zwei Jahre Gewährleistung.')),
    W('subsidy', 'noun', 'subsidy', 'B2', 'субсидия, дотация', 'die Subvention, Förderung',
      ex('Small farms received a state [[subsidy]] to install solar panels.', 'Малые фермы получили государственную субсидию на солнечные панели.', 'Kleine Höfe erhielten eine staatliche Förderung für Solaranlagen.'), 'subsidies'),
    W('advocate', 'verb', 'advocate', 'C1', 'выступать в поддержку, отстаивать (идею)', 'befürworten, sich einsetzen für',
      ex('Several urban planners [[advocate]] wider cycle lanes near schools.', 'Несколько урбанистов выступают за более широкие велодорожки у школ.', 'Mehrere Stadtplaner setzen sich für breitere Radwege an Schulen ein.')),
    W('enforce', 'verb', 'enforce', 'B2', 'обеспечивать соблюдение (правил, закона)', 'durchsetzen',
      ex('Inspectors will strictly [[enforce]] the new noise curfew after ten p.m.', 'Инспекторы будут строго следить за соблюдением режима тишины после десяти вечера.', 'Inspektoren werden das neue Lärmverbot ab 22 Uhr strikt durchsetzen.')),
    W('transparent', 'adj', 'impartial', 'C1', 'беспристрастный, непредвзятый', 'unparteiisch, objektiv',
      ex('An [[impartial]] mediator helped both sides settle the boundary dispute.', 'Беспристрастный посредник помог обеим сторонам урегулировать спор.', 'Ein unparteiischer Vermittler half beiden Seiten bei der Streitbeilegung.')),
    W('polarised', 'adj', 'polarised', 'C1', 'поляризованный, расколотый на противоположные лагеря', 'polarisiert',
      ex('On social platforms, public debate often sounds sharply [[polarised]].', 'В соцсетях общественные споры нередко звучат резко поляризованно.', 'In sozialen Medien wirkt die öffentliche Debatte oft stark polarisiert.'))
  ]);

  reg('authorities', [
    W('certificate-of-good-conduct', 'noun', 'criminal record check', 'B2', 'справка об отсутствии судимости', 'das polizeiliche Führungszeugnis',
      ex('Teachers submit a fresh [[criminal record check]] before starting work.', 'Учителя подают свежую справку об отсутствии судимости перед началом работы.', 'Lehrkräfte reichen vor Arbeitsbeginn ein aktuelles Führungszeugnis ein.'), 'criminal record checks'),
    W('residence-registration', 'noun', 'address registration', 'B1', 'регистрация по месту жительства', 'die Anmeldung (Wohnsitz)',
      ex('Take your rental contract to complete [[address registration]] within two weeks.', 'Возьмите договор аренды для регистрации по месту жительства в течение двух недель.', 'Nehmen Sie den Mietvertrag mit, um die Wohnsitzanmeldung binnen zwei Wochen zu erledigen.'), 'address registrations'),
    W('official-stamp', 'noun', 'apostille', 'C1', 'апостиль, штамп легализации документа', 'die Apostille',
      ex('Foreign marriage certificates need an [[apostille]] before local registration.', 'Иностранные свидетельства о браке требуют апостиля перед местной регистрацией.', 'Ausländische Heiratsurkunden brauchen vor der Anmeldung eine Apostille.'), 'apostilles'),
    W('ombudsman', 'noun', 'eligibility', 'B2', 'право на получение (льготы, допуска)', 'die Berechtigung, Anspruchsberechtigung',
      ex('The portal checks your [[eligibility]] for housing support in two steps.', 'Портал проверяет ваше право на жилищную поддержку за два шага.', 'Das Portal prüft Ihre Berechtigung für Wohngeld in zwei Schritten.')),
    W('municipality', 'noun', 'municipality', 'B2', 'муниципалитет, городская управа', 'die Gemeinde, Stadtverwaltung',
      ex('Each [[municipality]] sets its own opening hours for citizen offices.', 'Каждый муниципалитет сам устанавливает часы приёма граждан.', 'Jede Gemeinde legt eigene Öffnungszeiten für Bürgerämter fest.'), 'municipalities'),
    W('counter-clerk', 'noun', 'caseworker', 'B2', 'ведущий специалист ведомства, инспектор по делу', 'der Sachbearbeiter',
      ex('My [[caseworker]] emailed to ask for one missing bank page.', 'Мой специалист в ведомстве написал и попросил одну недостающую выписку.', 'Mein Sachbearbeiter fragte per Mail nach einem fehlenden Kontoauszug.'), 'caseworkers'),
    W('certify', 'verb', 'certify', 'B2', 'заверять (подпись, копию), удостоверять', 'beglaubigen',
      ex('A town clerk can [[certify]] translations and passport copies for a small fee.', 'Секретарь мэрии может заверить переводы и копии паспорта за небольшую пошлину.', 'Ein Standesbeamter kann Übersetzungen und Passkopien gegen geringe Gebühr beglaubigen.')),
    W('exempt', 'adj', 'exempt', 'C1', 'освобождённый (от налога, пошлины, правила)', 'befreit',
      ex('Full-time students are [[exempt]] from the local registration fee.', 'Студенты очного отделения освобождены от местного регистрационного сбора.', 'Vollzeitstudierende sind von der örtlichen Anmeldegebühr befreit.')),
    W('mandatory', 'adj', 'mandatory', 'B2', 'обязательный (по закону или регламенту)', 'verpflichtend, vorgeschrieben',
      ex('In-person ID verification remains [[mandatory]] when opening this account.', 'Личное подтверждение личности остаётся обязательным при открытии этого счёта.', 'Die persönliche Ausweisprüfung bleibt für dieses Konto verpflichtend.')),
    W('pending', 'adj', 'pending', 'B2', 'на рассмотрении, ожидающий решения', 'ausstehend, schwebend',
      ex('Your permit renewal is still [[pending]] final verification.', 'Ваше продление разрешения всё ещё ожидает итоговой проверки.', 'Ihre Verlängerung befindet sich noch in der abschließenden Prüfung.'))
  ]);

  reg('home', [
    W('circuit-breaker', 'noun', 'fuse box', 'B1', 'электрощиток с предохранителями', 'der Sicherungskasten',
      ex('When the kettle tripped the power, I checked the [[fuse box]] in the hall.', 'Когда чайник выбил пробки, я проверил электрощиток в прихожей.', 'Als der Wasserkocher den Strom abschaltete, prüfte ich den Sicherungskasten im Flur.'), 'fuse boxes'),
    W('radiator', 'noun', 'thermostat', 'B1', 'термостат, регулятор температуры', 'der Thermostat',
      ex('Lower the hallway [[thermostat]] by two degrees overnight to save heating fuel.', 'Убавь термостат в прихожей на два градуса на ночь, чтобы сэкономить тепло.', 'Dreh den Thermostat im Flur nachts zwei Grad herunter, um Heizkosten zu sparen.'), 'thermostats'),
    W('shutters', 'noun', 'blinds', 'B1', 'жалюзи, рулонные шторы', 'die Jalousie, das Rollo',
      ex('Lower the [[blinds]] in the afternoon to keep the living room cool.', 'Опусти жалюзи днём, чтобы в гостиной оставалось прохладно.', 'Lass nachmittags die Jalousien herunter, damit das Wohnzimmer kühl bleibt.')),
    W('stairwell', 'noun', 'stairwell', 'B2', 'лестничная клетка, подъезд', 'das Treppenhaus',
      ex('Keep prams and bikes out of the narrow [[stairwell]] for fire safety.', 'Не ставьте коляски и велосипеды в узком подъезде ради пожарной безопасности.', 'Lass Kinderwagen und Räder aus Brandschutzgründen nicht im Treppenhaus.'), 'stairwells'),
    W('tenant-association', 'noun', 'leasehold', 'B2', 'долгосрочная аренда недвижимости', 'die Pacht, Erbpacht',
      ex('The commercial space is sold on a ninety-year [[leasehold]] rather than freehold.', 'Коммерческое помещение продаётся на правах долгосрочной аренды на девяносто лет.', 'Die Gewerbefläche wird in neunzigjähriger Erbpacht statt Volleigentum vergeben.')),
    W('drain-pipe', 'noun', 'clogged drain', 'B2', 'засорившийся слив / труба', 'der verstopfte Abfluss',
      ex('A [[clogged drain]] under the kitchen sink took the plumber ten minutes to clear.', 'Засорившийся слив под кухонной раковиной сантехник прочистил за десять минут.', 'Den verstopften Abfluss unter der Spüle reinigte der Klempner in zehn Minuten.'), 'clogged drains'),
    W('ventilate', 'verb', 'ventilate', 'B2', 'проветривать (помещение)', 'lüften',
      ex('Always [[ventilate]] the bathroom briefly after a hot shower to stop mould.', 'Всегда ненадолго проветривайте ванную после горячего душа, чтобы не появилась плесень.', 'Lüften Sie das Bad nach einer heißen Dusche kurz, um Schimmel zu vermeiden.')),
    W('evict', 'verb', 'evict', 'C1', 'выселять (арендатора в установленном порядке)', 'räumen lassen, kündigen',
      ex('A landlord cannot [[evict]] a tenant without proper legal notice.', 'Арендодатель не может выселить жильца без законного уведомления.', 'Ein Vermieter kann einen Mieter nicht ohne wirksame Kündigung räumen lassen.')),
    W('spacious', 'adj', 'spacious', 'B1', 'просторный', 'geräumig',
      ex('The top-floor studio has a surprisingly [[spacious]] kitchen.', 'В студии на верхнем этаже неожиданно просторная кухня.', 'Das Studio unterm Dach hat eine überraschend geräumige Küche.')),
    W('soundproof', 'adj', 'soundproof', 'B2', 'звуконепроницаемый, с хорошей шумоизоляцией', 'schalldicht, schallisoliert',
      ex('Triple-glazed windows make the street-facing bedroom practically [[soundproof]].', 'Тройные стеклопакеты делают спальню окнами на улицу почти бесшумной.', 'Dreifachverglasung macht das Schlafzimmer zur Straße hin nahezu schalldicht.'))
  ]);

  reg('work', [
    W('workload', 'noun', 'pay grade', 'B2', 'тарифный разряд, категория оплаты', 'die Entgeltgruppe, Gehaltsstufe',
      ex('Moving up a [[pay grade]] requires an annual performance review and new duties.', 'Переход на следующий тарифный разряд требует ежегодной оценки и новых обязанностей.', 'Der Aufstieg in eine höhere Entgeltgruppe erfordert ein Jahresgespräch und neue Aufgaben.'), 'pay grades'),
    W('internship', 'noun', 'shift allowance', 'B2', 'доплата / надбавка за сменную работу', 'die Schichtzulage',
      ex('Nurses working night rotations receive a twenty-percent [[shift allowance]].', 'Медсёстры на ночных сменах получают двадцатипроцентную надбавку за сменность.', 'Pflegekräfte im Nachtdienst erhalten eine zwanzigprozentige Schichtzulage.'), 'shift allowances'),
    W('bonus', 'noun', 'annual bonus', 'B2', 'годовая премия, бонус по итогам года', 'der Jahresbonus',
      ex('Staff meeting annual targets receive an [[annual bonus]] in December.', 'Сотрудники, выполнившие годовой план, получают годовую премию в декабре.', 'Mitarbeitende mit erfüllten Jahreszielen erhalten im Dezember einen Jahresbonus.'), 'annual bonuses'),
    W('sick-note', 'noun', 'sick note', 'B1', 'больничный лист, справка о болезни', 'die Krankschreibung, das Attest',
      ex('From day three of illness, HR requires an electronic [[sick note]].', 'С третьего дня болезни отдел кадров просит электронный больничный лист.', 'Ab dem dritten Krankheitstag verlangt die Personalabteilung eine elektronische Krankschreibung.'), 'sick notes'),
    W('payslip', 'noun', 'job rotation', 'B2', 'ротация должностей внутри компании', 'die Jobrotation',
      ex('Structured [[job rotation]] helps junior staff understand every department.', 'Плановая ротация должностей помогает новичкам разобраться в работе каждого отдела.', 'Gezielte Jobrotation hilft Nachwuchskräften, jede Abteilung kennenzulernen.')),
    W('reassign', 'noun', 'mentoring', 'B2', 'наставничество, менторинг', 'das Mentoring',
      ex('Formal [[mentoring]] pairs new engineers with senior specialists for six months.', 'Программа наставничества закрепляет за новыми инженерами старших специалистов на полгода.', 'Strukturiertes Mentoring verbindet neue Ingenieure sechs Monate lang mit Erfahrenen.')),
    W('resign', 'noun', 'redundancy pay', 'C1', 'выходное пособие при сокращении штата', 'die Entlassungsabfindung',
      ex('Long-serving staff laid off during restructuring received statutory [[redundancy pay]].', 'Сотрудники со стажем при сокращении получили положенное по закону пособие.', 'Langjährige Mitarbeitende erhielten bei der Umstrukturierung eine gesetzliche Abfindung.')),
    W('entitled', 'adj', 'entitled', 'B2', 'имеющий право (на отпуск, компенсацию)', 'berechtigt, anspruchsberechtigt',
      ex('Part-time staff are equally [[entitled]] to paid annual leave.', 'Сотрудники на неполной ставке так же имеют право на оплачиваемый отпуск.', 'Teilzeitkräfte sind gleichermaßen zu bezahltem Jahresurlaub berechtigt.')),
    W('flexible', 'adj', 'monotonous', 'B2', 'однообразный, монотонный', 'eintönig, monoton',
      ex('Automated templates eliminated the most [[monotonous]] copy-paste steps.', 'Автоматические шаблоны убрали самую монотонную ручную рутину.', 'Automatisierte Vorlagen beseitigten die monotonsten manuellen Schritte.'))
  ]);
})();
