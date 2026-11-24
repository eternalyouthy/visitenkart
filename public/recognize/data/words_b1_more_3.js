/* German B1 vocabulary from the Goethe-Zertifikat B1 Wortliste. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function withNote(o, note) { if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; } return o; }
  function N(id, article, de, plural, ru, en, e, note) {
    return withNote({ id: 'b1-m3-' + id, pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note);
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('everyday', [
    // Goethe-Zertifikat B1 Wortliste, S. 28
    N('briefumschlag', 'der', 'Briefumschlag', 'die Briefumschläge', 'конверт', 'envelope',
      ex('Auf dem [[Briefumschlag]] fehlte die Hausnummer, deshalb kam der Brief zurück.', 'На конверте не было номера дома, поэтому письмо вернулось.', 'The house number was missing from the envelope, so the letter came back.')),
    // Goethe-Zertifikat B1 Wortliste, S. 84
    N('streichholz', 'das', 'Streichholz', 'die Streichhölzer', 'спичка', 'match',
      ex('Mit einem einzigen [[Streichholz]] zündete sie alle Kerzen auf dem Tisch an.', 'Одной-единственной спичкой она зажгла все свечи на столе.', 'She lit all the candles on the table with a single match.')),
    // Goethe-Zertifikat B1 Wortliste, S. 76
    N('schere', 'die', 'Schere', 'die Scheren', 'ножницы', 'pair of scissors',
      ex('Für diesen dicken Karton brauche ich eine größere [[Schere]].', 'Для такого плотного картона мне нужны ножницы побольше.', 'I need a bigger pair of scissors to cut this thick cardboard.')),
    // Goethe-Zertifikat B1 Wortliste, S. 96
    N('wecker', 'der', 'Wecker', 'die Wecker', 'будильник', 'alarm clock',
      ex('Heute hat mein [[Wecker]] nicht geklingelt, deshalb bin ich zu spät gekommen.', 'Сегодня мой будильник не зазвонил, поэтому я опоздал.', 'My alarm clock didn’t go off today, so I was late.')),
    // Goethe-Zertifikat B1 Wortliste, S. 42
    N('fundbuero', 'das', 'Fundbüro', 'die Fundbüros', 'бюро находок', 'lost property office',
      ex('Im [[Fundbüro]] konnte ich meinen Schirm an dem roten Griff erkennen.', 'В бюро находок я узнал свой зонт по красной ручке.', 'At the lost property office, I recognised my umbrella by its red handle.')),
    // Goethe-Zertifikat B1 Wortliste, S. 53
    N('kalender', 'der', 'Kalender', 'die Kalender', 'календарь', 'calendar',
      ex('Im [[Kalender]] an der Wand sind unsere gemeinsamen Termine grün markiert.', 'В настенном календаре наши общие встречи отмечены зелёным цветом.', 'Our shared appointments are marked in green on the wall calendar.'))
  ]);

  reg('people', [
    // Goethe-Zertifikat B1 Wortliste, S. 45
    N('geschlecht', 'das', 'Geschlecht', 'die Geschlechter', 'пол', 'gender',
      ex('Bei dieser Umfrage dürfen Sie die Frage zum [[Geschlecht]] auslassen.', 'В этом опросе можно пропустить вопрос о поле.', 'You can skip the question about gender in this survey.')),
    // Goethe-Zertifikat B1 Wortliste, S. 33
    N('ehepaar', 'das', 'Ehepaar', 'die Ehepaare', 'супруги', 'married couple',
      ex('Das [[Ehepaar]] aus dem dritten Stock betreut manchmal unseren Sohn.', 'Супруги с третьего этажа иногда присматривают за нашим сыном.', 'The married couple on the third floor sometimes look after our son.')),
    // Goethe-Zertifikat B1 Wortliste, S. 49
    N('heimat', 'die', 'Heimat', '', 'родина', 'homeland',
      ex('Wenn mein Vater von seiner [[Heimat]] erzählt, spricht er oft vom Meer.', 'Когда мой отец рассказывает о родине, он часто вспоминает море.', 'When my father talks about his homeland, he often mentions the sea.')),
    // Goethe-Zertifikat B1 Wortliste, S. 49
    N('herkunft', 'die', 'Herkunft', '', 'происхождение', 'background',
      ex('In unserer Gruppe sprechen wir offen über unsere unterschiedliche [[Herkunft]].', 'В нашей группе мы открыто говорим о том, кто откуда родом.', 'In our group, we talk openly about our different backgrounds.')),
    // Goethe-Zertifikat B1 Wortliste, S. 43
    N('geduld', 'die', 'Geduld', '', 'терпение', 'patience',
      ex('Beim gemeinsamen Kochen mit kleinen Kindern braucht man viel [[Geduld]].', 'Чтобы готовить вместе с маленькими детьми, нужно много терпения.', 'Cooking with young children takes quite a bit of patience.')),
    // Goethe-Zertifikat B1 Wortliste, S. 51
    N('humor', 'der', 'Humor', '', 'чувство юмора', 'sense of humour',
      ex('Selbst nach einem langen Arbeitstag verliert meine Schwester ihren [[Humor]] selten.', 'Даже после долгого рабочего дня сестра редко теряет чувство юмора.', 'Even after a long day at work, my sister rarely loses her sense of humour.'))
  ]);

  reg('home', [
    // Goethe-Zertifikat B1 Wortliste, S. 55
    N('klingel', 'die', 'Klingel', 'die Klingeln', 'звонок', 'doorbell',
      ex('Unsere [[Klingel]] ist kaputt, ruf einfach kurz an, wenn du vor der Tür stehst.', 'Наш дверной звонок сломался, так что просто позвони, когда будешь у двери.', 'Our doorbell is broken, so just give me a call when you’re at the door.')),
    // Goethe-Zertifikat B1 Wortliste, S. 23
    N('badewanne', 'die', 'Badewanne', 'die Badewannen', 'ванна', 'bathtub',
      ex('Nach dem Training lege ich mich gern eine halbe Stunde in die heiße [[Badewanne]].', 'После тренировки я люблю полчаса полежать в горячей ванне.', 'After training, I like to lie in a hot bath for half an hour.')),
    // Goethe-Zertifikat B1 Wortliste, S. 28
    N('briefkasten', 'der', 'Briefkasten', 'die Briefkästen', 'почтовый ящик', 'letterbox',
      ex('Nach dem Umzug stand unser alter Name noch am [[Briefkasten]].', 'После переезда на почтовом ящике всё ещё стояла наша прежняя фамилия.', 'After the move, our old name was still on the letterbox.')),
    // Goethe-Zertifikat B1 Wortliste, S. 60
    N('leitung', 'die', 'Leitung', 'die Leitungen', 'труба, (водопроводная) линия', 'pipe, supply line',
      ex('Unter dem Waschbecken tropft seit gestern Wasser aus einer alten [[Leitung]].', 'Со вчерашнего дня под раковиной из старой трубы капает вода.', 'Since yesterday, water has been dripping from an old pipe under the washbasin.'),
      ['Leitung многозначно: также «руководство» (die Leitung der Firma) и «линия связи» (Die Leitung ist besetzt — линия занята).', 'Leitung has several meanings: also “management” (die Leitung der Firma) and “phone line” (Die Leitung ist besetzt — the line is busy).']),
    // Goethe-Zertifikat B1 Wortliste, S. 77
    N('schloss', 'das', 'Schloss', 'die Schlösser', 'замок', 'door lock',
      ex('Nach dem Einbruch ließ der Vermieter ein neues [[Schloss]] einbauen.', 'После взлома хозяин квартиры велел установить новый дверной замок.', 'After the break-in, the landlord had a new door lock fitted.')),
    // Goethe-Zertifikat B1 Wortliste, S. 65
    N('muelltonne', 'die', 'Mülltonne', 'die Mülltonnen', 'мусорный контейнер', 'wheelie bin',
      ex('Stell die [[Mülltonne]] bitte heute Abend an den Straßenrand.', 'Пожалуйста, сегодня вечером подкати мусорный контейнер к краю дороги.', 'Please put the wheelie bin out by the road this evening.'))
  ]);

  reg('food', [
    // Goethe-Zertifikat B1 Wortliste, S. 53
    N('kanne', 'die', 'Kanne', 'die Kannen', 'кувшин', 'jug',
      ex('Für die Gäste stellte ich eine [[Kanne]] Wasser auf jeden Tisch.', 'Для гостей я поставил на каждый стол по кувшину воды.', 'I put a jug of water on each table for the guests.')),
    // Goethe-Zertifikat B1 Wortliste, S. 46
    N('gewuerz', 'das', 'Gewürz', 'die Gewürze', 'пряность', 'spice',
      ex('Welches [[Gewürz]] gibt deiner Suppe diesen leicht süßlichen Geschmack?', 'Какая пряность придаёт твоему супу этот слегка сладковатый вкус?', 'Which spice gives your soup that slightly sweet taste?')),
    // Goethe-Zertifikat B1 Wortliste, S. 76
    N('scheibe', 'die', 'Scheibe', 'die Scheiben', 'ломтик', 'slice',
      ex('Für jedes belegte Brot reicht eine dünne [[Scheibe]] Käse.', 'Для каждого бутерброда хватит одного тонкого ломтика сыра.', 'One thin slice of cheese is enough for each open sandwich.')),
    // Goethe-Zertifikat B1 Wortliste, S. 51
    N('imbiss', 'der', 'Imbiss', 'die Imbisse', 'закусочная', 'snack bar',
      ex('Nach der Spätschicht essen wir oft im [[Imbiss]] gegenüber.', 'После поздней смены мы часто едим в закусочной напротив.', 'After the late shift, we often eat at the snack bar opposite.')),
    // Goethe-Zertifikat B1 Wortliste, S. 28
    N('braten', 'der', 'Braten', 'die Braten', 'жаркое', 'roast',
      ex('Für den [[Braten]] am Sonntag kaufe ich das Fleisch schon heute.', 'Для воскресного жаркого я уже сегодня покупаю мясо.', 'I am buying the meat today for the roast on Sunday.')),
    // Goethe-Zertifikat B1 Wortliste, S. 66
    N('nahrungsmittel', 'das', 'Nahrungsmittel', 'die Nahrungsmittel', 'продукт питания', 'food product',
      ex('Auf der Packung steht, wie lange dieses [[Nahrungsmittel]] gekühlt haltbar ist.', 'На упаковке указано, сколько этот продукт питания хранится в холодильнике.', 'The packaging says how long this food product keeps in the fridge.'))
  ]);

  reg('health', [
    // Goethe-Zertifikat B1 Wortliste, S. 93
    N('verletzung', 'die', 'Verletzung', 'die Verletzungen', 'травма', 'injury',
      ex('Wegen einer [[Verletzung]] am Knie konnte sie mehrere Wochen nicht tanzen.', 'Из-за травмы колена она несколько недель не могла танцевать.', 'A knee injury kept her from dancing for several weeks.')),
    // Goethe-Zertifikat B1 Wortliste, S. 67
    N('notruf', 'der', 'Notruf', 'die Notrufe', 'экстренный вызов', 'emergency call',
      ex('Beim [[Notruf]] beschrieb die Zeugin zuerst den genauen Unfallort.', 'Во время экстренного вызова свидетельница сначала точно описала место аварии.', 'During the emergency call, the witness first described exactly where the accident happened.')),
    // Goethe-Zertifikat B1 Wortliste, S. 47
    N('gymnastik', 'die', 'Gymnastik', '', 'гимнастика, зарядка', 'exercises, gymnastics',
      ex('Nach der [[Gymnastik]] im Park trinkt unsere Gruppe gemeinsam Tee.', 'После гимнастики в парке наша группа вместе пьёт чай.', 'After our exercise session in the park, we have tea together.')),
    // Goethe-Zertifikat B1 Wortliste, S. 41
    N('fluessigkeit', 'die', 'Flüssigkeit', 'die Flüssigkeiten', 'жидкость', 'fluid',
      ex('Die Ärztin fragte, wie viel [[Flüssigkeit]] ich gestern zu mir genommen hatte.', 'Врач спросила, сколько жидкости я выпил за вчерашний день.', 'The doctor asked how much fluid I had drunk yesterday.')),
    // Goethe-Zertifikat B1 Wortliste, S. 70
    N('pfleger', 'der', 'Pfleger', 'die Pfleger', 'медбрат, сиделка (мужчина)', 'nurse, carer',
      ex('Der [[Pfleger]] nahm sich Zeit für die Fragen meines Vaters.', 'Медбрат нашёл время ответить на вопросы моего отца.', 'The nurse took time to answer my father’s questions.'))
  ]);

  reg('work', [
    // Goethe-Zertifikat B1 Wortliste, S. 97
    N('werkstatt', 'die', 'Werkstatt', 'die Werkstätten', 'мастерская', 'workshop',
      ex('Unsere [[Werkstatt]] nimmt im August nur kleine Reparaturen an.', 'В августе наша мастерская берёт только заказы на мелкий ремонт.', 'Our workshop is taking on only minor repairs in August.')),
    // Goethe-Zertifikat B1 Wortliste, S. 53
    N('kantine', 'die', 'Kantine', 'die Kantinen', 'столовая', 'canteen',
      ex('In der [[Kantine]] gibt es freitags auch ein warmes Essen ohne Fleisch.', 'По пятницам в столовой подают и горячее блюдо без мяса.', 'On Fridays, the canteen also serves a hot meal without meat.')),
    // Goethe-Zertifikat B1 Wortliste, S. 25
    N('beschaeftigung', 'die', 'Beschäftigung', 'die Beschäftigungen', 'занятость', 'employment',
      ex('Nach der Ausbildung sucht sie eine feste [[Beschäftigung]] in ihrer Region.', 'После обучения она ищет постоянную занятость в своём регионе.', 'After her training, she is looking for stable employment in her region.')),
    // Goethe-Zertifikat B1 Wortliste, S. 48
    N('handwerker', 'der', 'Handwerker', 'die Handwerker', 'мастер, ремесленник', 'tradesman, craftsman',
      ex('Der [[Handwerker]] brachte sein eigenes Werkzeug für die Reparatur mit.', 'Для ремонта мастер принёс с собой собственные инструменты.', 'The tradesman brought his own tools to carry out the repair.')),
    // Goethe-Zertifikat B1 Wortliste, S. 58
    N('lager', 'das', 'Lager', 'die Lager', 'склад', 'warehouse',
      ex('Vor der Frühschicht holen wir die bestellten Teile aus dem [[Lager]].', 'Перед утренней сменой мы забираем заказанные детали со склада.', 'Before the early shift, we collect the parts we ordered from the warehouse.')),
    // Goethe-Zertifikat B1 Wortliste, S. 58
    N('landwirtschaft', 'die', 'Landwirtschaft', '', 'сельское хозяйство', 'agriculture',
      ex('In der [[Landwirtschaft]] beginnt der Arbeitstag im Sommer oft vor Sonnenaufgang.', 'В сельском хозяйстве летом рабочий день часто начинается до рассвета.', 'In agriculture, the working day often starts before sunrise in summer.'))
  ]);

  reg('authorities', [
    // Goethe-Zertifikat B1 Wortliste, S. 91
    N('urkunde', 'die', 'Urkunde', 'die Urkunden', 'свидетельство, официальный документ', 'certificate (official document)',
      ex('Nach der Trauung stellte uns das Standesamt sofort die [[Urkunde]] aus.', 'После регистрации брака ЗАГС сразу выдал нам свидетельство.', 'After the wedding ceremony, the registry office issued our certificate straight away.')),
    // Goethe-Zertifikat B1 Wortliste, S. 28
    N('botschaft', 'die', 'Botschaft', 'die Botschaften', 'посольство', 'embassy',
      ex('Vor meinem Besuch in der [[Botschaft]] vereinbarte ich online einen Termin.', 'Перед визитом в посольство я записался на приём через интернет.', 'Before visiting the embassy, I booked an appointment online.'),
      ['Второе значение Botschaft — «послание, сообщение» (eine Botschaft hinterlassen — оставить сообщение).', 'Botschaft also means “message” (eine Botschaft hinterlassen — to leave a message).']),
    // Goethe-Zertifikat B1 Wortliste, S. 69
    N('wohnort', 'der', 'Wohnort', 'die Wohnorte', 'место жительства', 'place of residence',
      ex('Im Formular müssen Sie Ihren aktuellen [[Wohnort]] deutlich angeben.', 'В анкете нужно чётко указать ваше нынешнее место жительства.', 'Please clearly state your current place of residence on the form.')),
    // Goethe-Zertifikat B1 Wortliste, S. 56
    N('konsulat', 'das', 'Konsulat', 'die Konsulate', 'консульство', 'consulate',
      ex('Das [[Konsulat]] schickte mir die Liste der fehlenden Unterlagen per E-Mail.', 'Консульство прислало мне по почте список недостающих документов.', 'The consulate emailed me the list of documents that were missing.')),
    // Goethe-Zertifikat B1 Wortliste, S. 100
    N('zoll', 'der', 'Zoll', '', 'таможня', 'customs',
      ex('Beim [[Zoll]] mussten wir den Inhalt beider Pakete genau beschreiben.', 'На таможне нам пришлось подробно описать содержимое обеих посылок.', 'At customs, we had to describe the contents of both parcels in detail.')),
    // Goethe-Zertifikat B1 Wortliste, S. 94
    N('visum', 'das', 'Visum', 'die Visa', 'виза', 'visa',
      ex('Mein [[Visum]] läuft eine Woche nach der geplanten Rückreise ab.', 'Моя виза истекает через неделю после запланированного возвращения.', 'My visa expires a week after my planned return trip.'))
  ]);

  reg('travel', [
    // Goethe-Zertifikat B1 Wortliste, S. 21
    N('ausfahrt', 'die', 'Ausfahrt', 'die Ausfahrten', 'съезд', 'motorway exit',
      ex('Wegen der Baustelle mussten wir die nächste [[Ausfahrt]] nehmen.', 'Из-за дорожных работ нам пришлось выбрать следующий съезд с трассы.', 'Due to roadworks, we had to take the next motorway exit.')),
    // Goethe-Zertifikat B1 Wortliste, S. 38
    N('faehre', 'die', 'Fähre', 'die Fähren', 'паром', 'ferry',
      ex('Bei starkem Wind fährt die letzte [[Fähre]] manchmal früher zurück.', 'При сильном ветре последний паром иногда возвращается раньше обычного.', 'In strong winds, the last ferry sometimes returns earlier than usual.')),
    // Goethe-Zertifikat B1 Wortliste, S. 57
    N('kreuzung', 'die', 'Kreuzung', 'die Kreuzungen', 'перекрёсток', 'junction',
      ex('An der zweiten [[Kreuzung]] biegen Sie links in eine schmale Gasse ab.', 'На втором перекрёстке поверните налево в узкий переулок.', 'At the second junction, turn left into a narrow lane.')),
    // Goethe-Zertifikat B1 Wortliste, S. 39
    N('fahrbahn', 'die', 'Fahrbahn', 'die Fahrbahnen', 'проезжая часть', 'carriageway',
      ex('Wegen eines umgestürzten Baums ist die [[Fahrbahn]] Richtung Innenstadt vorübergehend gesperrt.', 'Из-за упавшего дерева проезжая часть в сторону центра временно закрыта.', 'The carriageway towards the city centre is temporarily closed because of a fallen tree.')),
    // Goethe-Zertifikat B1 Wortliste, S. 54
    N('kennzeichen', 'das', 'Kennzeichen', 'die Kennzeichen', 'номерной знак', 'number plate',
      ex('Am [[Kennzeichen]] erkannte ich unseren Mietwagen sofort auf dem Parkplatz.', 'На стоянке я сразу узнал арендованную машину по номерному знаку.', 'I immediately recognised our hire car in the car park by its number plate.')),
    // Goethe-Zertifikat B1 Wortliste, S. 58
    N('kurve', 'die', 'Kurve', 'die Kurven', 'поворот', 'bend',
      ex('Hinter der scharfen [[Kurve]] beginnt der schmale Weg zum Aussichtspunkt.', 'За крутым поворотом начинается узкая тропа к смотровой площадке.', 'The narrow path to the viewpoint starts beyond the sharp bend.'))
  ]);

  reg('leisure', [
    // Goethe-Zertifikat B1 Wortliste, S. 68
    N('orchester', 'das', 'Orchester', 'die Orchester', 'оркестр', 'orchestra',
      ex('Unser [[Orchester]] probt jeden Donnerstag in der Aula einer alten Schule.', 'Наш оркестр репетирует каждый четверг в зале старой школы.', 'Our orchestra rehearses every Thursday in the hall of an old school.')),
    // Goethe-Zertifikat B1 Wortliste, S. 65
    N('musiker', 'der', 'Musiker', 'die Musiker', 'музыкант', 'musician',
      ex('Nach dem Konzert erzählte ein [[Musiker]] von seiner ersten Tournee.', 'После концерта музыкант рассказал нам о своих первых гастролях.', 'After the concert, a musician told us about his first tour.')),
    // Goethe-Zertifikat B1 Wortliste, S. 76
    N('saenger', 'der', 'Sänger', 'die Sänger', 'певец', 'singer',
      ex('Kurz vor dem Auftritt bat der [[Sänger]] um ein Glas Wasser.', 'Перед самым выступлением певец попросил стакан воды.', 'Just before going on stage, the singer asked for a glass of water.')),
    // Goethe-Zertifikat B1 Wortliste, S. 100
    N('zeichnung', 'die', 'Zeichnung', 'die Zeichnungen', 'рисунок', 'drawing',
      ex('Eine [[Zeichnung]] aus ihrem Skizzenbuch hängt jetzt im Stadtmuseum.', 'Рисунок из её альбома теперь висит в городском музее.', 'A drawing from her sketchbook is now hanging in the town museum.')),
    // Goethe-Zertifikat B1 Wortliste, S. 43
    N('gedicht', 'das', 'Gedicht', 'die Gedichte', 'стихотворение', 'poem',
      ex('Bei der offenen Lesung trug sie zum ersten Mal ein eigenes [[Gedicht]] vor.', 'На чтениях она впервые прочитала публике собственное стихотворение.', 'At the public reading, she read out her own poem for the first time.'))
  ]);

  reg('society', [
    // Goethe-Zertifikat B1 Wortliste, S. 93
    N('versammlung', 'die', 'Versammlung', 'die Versammlungen', 'собрание', 'public meeting',
      ex('Bei der [[Versammlung]] im Rathaus ging es um den neuen Spielplatz.', 'На собрании в ратуше обсуждали новую детскую площадку.', 'The new playground was discussed at the public meeting in the town hall.')),
    // Goethe-Zertifikat B1 Wortliste, S. 27
    N('bewohner', 'der', 'Bewohner', 'die Bewohner', 'жилец', 'resident',
      ex('Jeder [[Bewohner]] kann Vorschläge für den gemeinsamen Innenhof einreichen.', 'Каждый жилец может предложить идеи для общего двора.', 'Each resident can submit ideas for the shared courtyard.')),
    // Goethe-Zertifikat B1 Wortliste, S. 68
    N('oeffentlichkeit', 'die', 'Öffentlichkeit', '', 'общественность', 'general public',
      ex('Ab Montag kann die [[Öffentlichkeit]] die Pläne im Rathaus einsehen.', 'С понедельника общественность сможет ознакомиться с планами в ратуше.', 'From Monday, the general public can view the plans at the town hall.')),
    // Goethe-Zertifikat B1 Wortliste, S. 64
    N('mitglied', 'das', 'Mitglied', 'die Mitglieder', 'член', 'member',
      ex('Jedes [[Mitglied]] darf bei der nächsten Sitzung eine Frage stellen.', 'Каждый член объединения может задать вопрос на следующем собрании.', 'Every member can ask a question at the next meeting.')),
    // Goethe-Zertifikat B1 Wortliste, S. 46
    N('gewerkschaft', 'die', 'Gewerkschaft', 'die Gewerkschaften', 'профсоюз', 'trade union',
      ex('Die [[Gewerkschaft]] lädt alle Beschäftigten zu einem offenen Gespräch ein.', 'Профсоюз приглашает всех сотрудников на открытое обсуждение.', 'The trade union is inviting all employees to an open discussion.')),
    // Goethe-Zertifikat B1 Wortliste, S. 71
    N('presse', 'die', 'Presse', '', 'пресса', 'press',
      ex('Auch die lokale [[Presse]] berichtete über die Wahl im Stadtteil.', 'Местная пресса тоже рассказала о выборах в нашем районе.', 'The local press also covered the election in the district.'))
  ]);
})();
