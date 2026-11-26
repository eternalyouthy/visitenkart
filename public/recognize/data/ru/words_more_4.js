/* Russian B1 and B2 vocabulary. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) {
    return { id: 'ru-w4-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function V(id, t, aspect, level, forms, en, de, e, note) {
    return { id: 'ru-w4-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: nt(note) };
  }
  function A(id, pos, t, level, en, de, e, note) {
    return { id: 'ru-w4-' + id, pos: pos, t: t, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('everyday', [
    N('spichka', 'сп+ичка', 'f', 'B1', 'matchstick', 'Streichholz',
      ex('Он+а разожгл+а ог+онь в печ+и всег+о одн+ой [[сп+ичкой]].', 'She lit the fire in the stove with a single matchstick.', 'Mit einem einzigen Streichholz bekam sie das Feuer im Ofen an.')),
    N('byuro-nakhodok', 'бюр+о нах+одок', 'n', 'B1', 'lost property office', 'Fundbüro',
      ex('В [[бюр+о нах+одок]] я узн+ал свой зонт по кр+асной р+учке.', 'At the lost property office, I recognised my umbrella by its red handle.', 'Im Fundbüro konnte ich meinen Schirm an dem roten Griff erkennen.')),
    N('svyazka-klyuchey', 'св+язка ключ+ей', 'f', 'B1', 'bunch of keys', 'Schlüsselbund',
      ex('Св+ою [[св+язку ключ+ей]] я нашёл на с+амом дне с+умки с пок+упками.', 'I found my bunch of keys at the very bottom of my shopping bag.', 'Meinen Schlüsselbund fand ich ganz unten in der Einkaufstasche.'))
  ]);

  reg('people', [
    N('pol', 'пол', 'm', 'B1', 'sex, gender', 'Geschlecht',
      ex('В +этом опр+осе м+ожно пропуст+ить вопр+ос о [[п+оле]].', 'You can skip the question about gender in this survey.', 'Bei dieser Umfrage dürfen Sie die Frage zum Geschlecht auslassen.'),
      ['Homonym: пол also means “floor” (на пол+у). Here “sex, gender” (о п+оле).', 'Homonym: пол heißt auch „Fußboden“ (на пол+у). Hier „Geschlecht“ (о п+оле).']),
    N('suprugi', 'супр+уги', 'pl', 'B1', 'married couple', 'Ehepaar',
      ex('[[Супр+уги]] с тр+етьего этаж+а иногд+а присм+атривают за н+ашим с+ыном.', 'The married couple on the third floor sometimes look after our son.', 'Das Ehepaar aus dem dritten Stock betreut manchmal unseren Sohn.')),
    N('rodina', 'р+одина', 'f', 'B1', 'homeland', 'Heimat',
      ex('Когд+а мой от+ец расск+азывает о [[р+одине]], он ч+асто вспомин+ает м+оре.', 'When my father talks about his homeland, he often mentions the sea.', 'Wenn mein Vater von seiner Heimat erzählt, spricht er oft vom Meer.')),
    N('proiskhozhdenie', 'происхожд+ение', 'n', 'B1', 'origin, background', 'Herkunft',
      ex('В н+ашей гр+уппе к+аждый м+ожет откр+ыто говор+ить о своём [[происхожд+ении]].', 'Everyone in our group feels free to talk about their own background.', 'In unserer Gruppe sprechen wir offen über unsere unterschiedliche Herkunft.')),
    N('terpenie', 'терп+ение', 'n', 'B1', 'patience', 'Geduld',
      ex('Чт+обы гот+овить вм+есте с м+аленькими детьм+и, н+ужно мн+ого [[терп+ения]].', 'Cooking with young children takes quite a bit of patience.', 'Beim gemeinsamen Kochen mit kleinen Kindern braucht man viel Geduld.')),
    N('chuvstvo-yumora', 'ч+увство +юмора', 'n', 'B1', 'sense of humour', 'Humor',
      ex('Д+аже п+осле д+олгого раб+очего дня сестр+а р+едко тер+яет [[ч+увство +юмора]].', 'Even after a long day at work, my sister rarely loses her sense of humour.', 'Selbst nach einem langen Arbeitstag verliert meine Schwester ihren Humor selten.'))
  ]);

  reg('home', [
    N('zvonok', 'звон+ок', 'm', 'B1', 'doorbell', 'Klingel',
      ex('Наш дверн+ой [[звон+ок]] слом+ался, так что пр+осто позвон+и, когд+а б+удешь у дв+ери.', 'Our doorbell is broken, so just give me a call when you’re at the door.', 'Unsere Klingel ist kaputt, ruf einfach kurz an, wenn du vor der Tür stehst.'),
      ['Also “phone call” (звон+ок д+ругу); verb звон+ить.', 'Auch „Anruf“ (звон+ок д+ругу); Verb звон+ить.']),
    N('pochtovyy-yashchik', 'почт+овый +ящик', 'm', 'B1', 'letterbox', 'Briefkasten',
      ex('П+осле пере+езда на [[почт+овом +ящике]] всё ещё сто+яла н+аша пр+ежняя фам+илия.', 'After the move, our old name was still on the letterbox.', 'Nach dem Umzug stand unser alter Name noch am Briefkasten.')),
    N('truba', 'труб+а', 'f', 'B1', 'pipe', 'Leitung',
      ex('Со вчер+ашнего дня под р+аковиной из ст+арой [[труб+ы]] к+апает вод+а.', 'Since yesterday, water has been dripping from an old pipe under the washbasin.', 'Unter dem Waschbecken tropft seit gestern Wasser aus einer alten Leitung.')),
    N('zamok', 'зам+ок', 'm', 'B1', 'lock', 'Schloss (Tür)',
      ex('П+осле взл+ома хоз+яин кварт+иры вел+ел установ+ить н+овый дверн+ой [[зам+ок]].', 'After the break-in, the landlord had a new door lock fitted.', 'Nach dem Einbruch ließ der Vermieter ein neues Schloss einbauen.'),
      ['Stress matters: зам+ок “lock” vs з+амок “castle”.', 'Betonung beachten: зам+ок „Türschloss“, з+амок „Burg, Schloss“.']),
    N('musornyy-konteyner', 'м+усорный конт+ейнер', 'm', 'B1', 'wheelie bin', 'Mülltonne',
      ex('Пож+алуйста, сег+одня в+ечером подкат+и [[м+усорный конт+ейнер]] к кр+аю дор+оги.', 'Please put the wheelie bin out by the road this evening.', 'Stell die Mülltonne bitte heute Abend an den Straßenrand.'))
  ]);

  reg('food', [
    N('kuvshin', 'кувш+ин', 'm', 'B1', 'jug', 'Kanne',
      ex('Для гост+ей я пост+авил на к+аждый стол по [[кувш+ину]] вод+ы.', 'I put a jug of water on each table for the guests.', 'Für die Gäste stellte ich eine Kanne Wasser auf jeden Tisch.')),
    N('pryanost', 'пр+яность', 'f', 'B1', 'spice', 'Gewürz',
      ex('Как+ая [[пр+яность]] придаёт твоем+у с+упу +этот слегк+а сладков+атый вкус?', 'Which spice gives your soup that slightly sweet taste?', 'Welches Gewürz gibt deiner Suppe diesen leicht süßlichen Geschmack?')),
    N('lomtik', 'л+омтик', 'm', 'B1', 'slice', 'Scheibe',
      ex('Для к+аждого бутербр+ода хв+атит одног+о т+онкого [[л+омтика]] с+ыра.', 'One thin slice of cheese is enough for each open sandwich.', 'Für jedes belegte Brot reicht eine dünne Scheibe Käse.')),
    N('zakusochnaya', 'зак+усочная', 'f', 'B1', 'snack bar', 'Imbiss',
      ex('П+осле п+оздней см+ены мы ч+асто ед+им в [[зак+усочной]] напр+отив.', 'After the late shift, we often eat at the snack bar opposite.', 'Nach der Spätschicht essen wir oft im Imbiss gegenüber.')),
    N('zharkoe', 'жарк+ое', 'n', 'B1', 'roast', 'Braten',
      ex('Для воскр+есного [[жарк+ого]] я уж+е сег+одня покуп+аю м+ясо.', 'I am buying the meat today for the roast on Sunday.', 'Für den Braten am Sonntag kaufe ich das Fleisch schon heute.'))
  ]);

  reg('health', [
    N('gimnastika', 'гимн+астика', 'f', 'B1', 'exercises, gymnastics', 'Gymnastik',
      ex('П+осле [[гимн+астики]] в п+арке н+аша гр+уппа вм+есте пьёт чай.', 'After our exercise session in the park, we have tea together.', 'Nach der Gymnastik im Park trinkt unsere Gruppe gemeinsam Tee.')),
    N('zhidkost', 'ж+идкость', 'f', 'B1', 'fluid', 'Flüssigkeit',
      ex('Врач спрос+ила, ск+олько [[ж+идкости]] я в+ыпил за вчер+ашний день.', 'The doctor asked how much fluid I had drunk yesterday.', 'Die Ärztin fragte, wie viel Flüssigkeit ich gestern zu mir genommen hatte.')),
    N('sidelka', 'сид+елка', 'f', 'B1', 'carer (for a sick person)', 'Pflegerin, Betreuerin',
      ex('[[Сид+елка]] нашл+а вр+емя отв+етить на вопр+осы моег+о отц+а.', 'The carer took time to answer my father’s questions.', 'Die Pflegerin nahm sich Zeit für die Fragen meines Vaters.'),
      ['From сид+еть (“to sit”): someone who sits with a sick person.', 'Von сид+еть („sitzen“): jemand, der bei einem Kranken sitzt.']),
    N('patsient', 'паци+ент', 'm', 'B1', 'patient', 'Patient',
      ex('[[Паци+ент]] запис+ался на сл+едующий приём пр+ямо в регистрат+уре.', 'The patient booked his next appointment directly at the reception desk.', 'Der Patient vereinbarte seinen nächsten Termin direkt am Empfang der Praxis.'),
      ['Feminine: паци+ентка.', 'Femininum: паци+ентка.'])
  ]);

  reg('work', [
    N('masterskaya', 'мастерск+ая', 'f', 'B1', 'workshop', 'Werkstatt',
      ex('В +августе н+аша [[мастерск+ая]] берёт т+олько зак+азы на м+елкий рем+онт.', 'Our workshop is taking on only minor repairs in August.', 'Unsere Werkstatt nimmt im August nur kleine Reparaturen an.')),
    N('stolovaya', 'стол+овая', 'f', 'B1', 'canteen', 'Kantine',
      ex('По п+ятницам в [[стол+овой]] пода+ют и гор+ячее бл+юдо без м+яса.', 'On Fridays, the canteen also serves a hot meal without meat.', 'In der Kantine gibt es freitags auch ein warmes Essen ohne Fleisch.')),
    N('zanyatost', 'з+анятость', 'f', 'B1', 'employment', 'Beschäftigung',
      ex('П+осле обуч+ения он+а +ищет посто+янную [[з+анятость]] в своём реги+оне.', 'After her training, she is looking for stable employment in her region.', 'Nach der Ausbildung sucht sie eine feste Beschäftigung in ihrer Region.')),
    N('master', 'м+астер', 'm', 'B1', 'tradesman', 'Handwerker',
      ex('Для рем+онта [[м+астер]] принёс с соб+ой с+обственные инструм+енты.', 'The tradesman brought his own tools to carry out the repair.', 'Der Handwerker brachte sein eigenes Werkzeug für die Reparatur mit.')),
    N('selskoe-khozyaystvo', 'с+ельское хоз+яйство', 'n', 'B1', 'agriculture', 'Landwirtschaft',
      ex('В [[с+ельском хоз+яйстве]] л+етом раб+очий день ч+асто начин+ается до рассв+ета.', 'In agriculture, the working day often starts before sunrise in summer.', 'In der Landwirtschaft beginnt der Arbeitstag im Sommer oft vor Sonnenaufgang.')),
    N('grafik-smen', 'гр+афик смен', 'm', 'B1', 'shift rota', 'Schichtplan',
      ex('Наш н+овый [[гр+афик смен]] со сред+ы б+удет вис+еть р+ядом с дв+ерью.', 'Our new shift rota will be on the noticeboard by the door from Wednesday.', 'Unser neuer Schichtplan hängt ab Mittwoch neben der Tür.'))
  ]);

  reg('authorities', [
    N('posolstvo', 'пос+ольство', 'n', 'B1', 'embassy', 'Botschaft',
      ex('П+еред виз+итом в [[пос+ольство]] я запис+ался на приём ч+ерез интерн+ет.', 'Before visiting the embassy, I booked an appointment online.', 'Vor meinem Besuch in der Botschaft vereinbarte ich online einen Termin.')),
    N('mesto-zhitelstva', 'м+есто ж+ительства', 'n', 'B1', 'place of residence', 'Wohnort',
      ex('В анк+ете н+ужно чётко указ+ать в+аше н+ынешнее [[м+есто ж+ительства]].', 'Please clearly state your current place of residence on the form.', 'Im Formular müssen Sie Ihren aktuellen Wohnort deutlich angeben.')),
    N('konsulstvo', 'к+онсульство', 'n', 'B1', 'consulate', 'Konsulat',
      ex('[[К+онсульство]] присл+ало мне по почт+е сп+исок недоста+ющих докум+ентов.', 'The consulate emailed me the list of documents that were missing.', 'Das Konsulat schickte mir die Liste der fehlenden Unterlagen per E-Mail.')),
    N('semeynoe-polozhenie', 'сем+ейное полож+ение', 'n', 'B1', 'marital status', 'Familienstand',
      ex('В +этой анк+ете указ+ывать своё [[сем+ейное полож+ение]] совс+ем необяз+ательно.', 'Giving your marital status on this form is entirely optional.', 'Das Feld für den Familienstand ist auf diesem Formular freiwillig.')),
    N('srok-rassmotreniya', 'срок рассмотр+ения', 'm', 'B1', 'processing time', 'Bearbeitungszeit',
      ex('По слов+ам сотр+удницы, об+ычный [[срок рассмотр+ения]] составл+яет две нед+ели.', 'The clerk said the usual processing time was two weeks.', 'Die übliche Bearbeitungszeit beträgt laut Auskunft der Mitarbeiterin zwei Wochen.')),
    N('zaverennaya-kopiya', 'зав+еренная к+опия', 'f', 'B1', 'certified copy', 'beglaubigte Kopie',
      ex('В+едомство тр+ебует [[зав+еренную к+опию]] моег+о посл+еднего докум+ента об образов+ании.', 'The office requires a certified copy of my latest education certificate.', 'Das Amt verlangt eine beglaubigte Kopie meines letzten Zeugnisses.'))
  ]);

  reg('travel', [
    N('sezd', 'съезд', 'm', 'B1', 'exit (from a motorway)', 'Ausfahrt',
      ex('Из-за дор+ожных раб+от нам пришл+ось в+ыбрать сл+едующий [[съезд]] с тр+ассы.', 'Due to roadworks, we had to take the next motorway exit.', 'Wegen der Baustelle mussten wir die nächste Ausfahrt nehmen.'),
      ['Also “congress” (съезд п+артии). Verb: съ+ехать (с дор+оги).', 'Auch „Kongress, Parteitag“. Verb: съ+ехать (с дор+оги) „abfahren“.']),
    N('parom', 'пар+ом', 'm', 'B1', 'ferry', 'Fähre',
      ex('При с+ильном в+етре посл+едний [[пар+ом]] иногд+а возвращ+ается р+аньше об+ычного.', 'In strong winds, the last ferry sometimes returns earlier than usual.', 'Bei starkem Wind fährt die letzte Fähre manchmal früher zurück.')),
    N('perekryostok', 'перекрёсток', 'm', 'B1', 'junction', 'Kreuzung',
      ex('На втор+ом [[перекрёстке]] поверн+ите нал+ево в +узкий пере+улок.', 'At the second junction, turn left into a narrow lane.', 'An der zweiten Kreuzung biegen Sie links in eine schmale Gasse ab.')),
    N('proezzhaya-chast', 'про+езжая часть', 'f', 'B1', 'carriageway', 'Fahrbahn',
      ex('Из-за уп+авшего д+ерева [[про+езжая часть]] в ст+орону ц+ентра вр+еменно закр+ыта.', 'The carriageway towards the city centre is temporarily closed because of a fallen tree.', 'Wegen eines umgestürzten Baums ist die Fahrbahn Richtung Innenstadt vorübergehend gesperrt.')),
    N('nomernoy-znak', 'номерн+ой знак', 'm', 'B1', 'number plate', 'Kennzeichen',
      ex('На сто+янке я ср+азу узн+ал аренд+ованную маш+ину по [[номерн+ому зн+аку]].', 'I immediately recognised our hire car in the car park by its number plate.', 'Am Kennzeichen erkannte ich unseren Mietwagen sofort auf dem Parkplatz.')),
    N('povorot', 'повор+от', 'm', 'B1', 'bend', 'Kurve',
      ex('За кр+утым [[повор+отом]] начин+ается +узкая троп+а к смотров+ой площ+адке.', 'The narrow path to the viewpoint starts beyond the sharp bend.', 'Hinter der scharfen Kurve beginnt der schmale Weg zum Aussichtspunkt.'))
  ]);

  reg('b2_media', [
    N('oproverzhenie', 'опроверж+ение', 'n', 'B2', 'denial, retraction', 'Dementi, Gegendarstellung',
      ex('На сл+едующий день ред+акция опубликов+ала [[опроверж+ение]] пострад+авшей сторон+ы.', 'The editors published a rebuttal from those affected the following day.', 'Die Redaktion veröffentlichte am nächsten Tag eine Gegendarstellung der Betroffenen.')),
    N('okhvat', 'охв+ат', 'm', 'B2', 'reach (audience)', 'Reichweite',
      ex('Благодар+я перев+оду [[охв+ат]] подк+аста в+ырос и за гран+ицей.', 'Translation also increased the podcast’s audience reach in other countries.', 'Durch die Übersetzung wuchs die Reichweite des Podcasts auch im Ausland.')),
    N('ssylka-na-istochnik', 'сс+ылка на ист+очник', 'f', 'B2', 'source reference', 'Quellenangabe',
      ex('Без [[сс+ылки на ист+очник]] ц+ифру в стать+е тр+удно пров+ерить.', 'Without a source reference, the figure in the article is difficult to verify.', 'Ohne Quellenangabe lässt sich die Zahl im Beitrag schwer überprüfen.')),
    N('osveshchenie', 'освещ+ение', 'n', 'B2', 'coverage (in the media)', 'Berichterstattung',
      ex('Мн+огие ж+ители сочл+и [[освещ+ение]] с+обытий в своём рай+оне одностор+онним.', 'Many residents felt the news coverage of their neighbourhood was too one-sided.', 'Viele Anwohner fanden die Berichterstattung über ihren Stadtteil zu einseitig.')),
    N('chitatelskaya-auditoriya', 'чит+ательская аудит+ория', 'f', 'B2', 'readership', 'Leserschaft',
      ex('Ред+акция хот+ела л+учше пон+ять ожид+ания сво+ей [[чит+ательской аудит+ории]].', 'The editors wanted to learn more about what their readership expected.', 'Die Redaktion wollte mehr über die Erwartungen ihrer Leserschaft erfahren.'))
  ]);

  reg('b2_society', [
    N('yavka', '+явка', 'f', 'B2', 'voter turnout', 'Wahlbeteiligung',
      ex('[[+Явка]] в +этом рай+оне был+а зам+етно в+ыше, чем чет+ыре г+ода наз+ад.', 'Voter turnout in this district was much higher than four years ago.', 'Die Wahlbeteiligung lag in diesem Stadtteil deutlich höher als vor vier Jahren.')),
    N('pravo-golosa', 'пр+аво г+олоса', 'n', 'B2', 'right to a say', 'Mitspracherecht',
      ex('Подр+остки тр+ебуют [[пр+ава г+олоса]] при обсужд+ении про+екта н+ового молодёжного ц+ентра.', 'Young people are demanding the right to a say in designing the new youth centre.', 'Die Jugendlichen fordern ein Mitspracherecht bei der Gestaltung des neuen Jugendzentrums.')),
    N('ravenstvo-vozmozhnostey', 'р+авенство возм+ожностей', 'n', 'B2', 'equal opportunity', 'Chancengleichheit',
      ex('Беспл+атные подготов+ительные к+урсы должн+ы обесп+ечить [[р+авенство возм+ожностей]] при поступл+ении в вуз.', 'Free preparation courses aim to promote equal opportunity in university admissions.', 'Kostenlose Vorbereitungskurse sollen die Chancengleichheit beim Zugang zur Hochschule verbessern.')),
    N('initsiativnaya-gruppa', 'инициат+ивная гр+уппа', 'f', 'B2', 'citizens’ group', 'Bürgerinitiative',
      ex('[[Инициат+ивная гр+уппа]] собир+ает п+одписи за сохран+ение ст+арого откр+ытого басс+ейна.', 'A citizens’ group is collecting signatures to save the old outdoor pool.', 'Eine Bürgerinitiative sammelt Unterschriften für den Erhalt des alten Freibads.')),
    N('konflikt-interesov', 'конфл+икт интер+есов', 'm', 'B2', 'conflict of interest', 'Interessenkonflikt',
      ex('Из-за возм+ожного [[конфл+икта интер+есов]] он+а отказ+алась уч+аствовать в голосов+ании.', 'She withdrew from the vote because of a possible conflict of interest.', 'Wegen eines möglichen Interessenkonflikts nahm sie an der Abstimmung nicht teil.'))
  ]);

  reg('b2_housing', [
    N('akt-priyoma-peredachi', 'акт приёма-перед+ачи', 'm', 'B2', 'handover report', 'Übergabeprotokoll',
      ex('П+еред въ+ездом цар+апины на парк+ете зафикс+ировали в [[+акте приёма-перед+ачи]].', 'The scratches on the parquet floor were recorded in the handover report before the move.', 'Die Kratzer im Parkett wurden vor dem Einzug im Übergabeprotokoll festgehalten.')),
    N('soderzhanie', 'содерж+ание', 'n', 'B2', 'upkeep, maintenance', 'Instandhaltung, Unterhalt',
      ex('На [[содерж+ание]] д+ома с+обственники к+аждый м+есяц откл+адывают часть ср+едств.', 'The owners set money aside each month for the upkeep of the building.', 'Für die Instandhaltung des Hauses legt die Eigentümergemeinschaft jeden Monat Geld zurück.'),
      ['Polysemous: also “content(s)” (содерж+ание кн+иги).', 'Mehrdeutig: auch „Inhalt“ (содерж+ание кн+иги).']),
    N('zadolzhennost-po-arende', 'зад+олженность по ар+енде', 'f', 'B2', 'rent arrears', 'Mietrückstand',
      ex('Из-за ош+ибки б+анка в+озникла [[зад+олженность по ар+енде]], кот+орую мы ср+азу погас+или.', 'A banking error left us in rent arrears, which we settled immediately.', 'Wegen eines Bankfehlers entstand ein Mietrückstand, den wir sofort ausglichen.'))
  ]);

  reg('b2_relations', [
    N('otkrovennyy-razgovor', 'откров+енный разгов+ор', 'm', 'B2', 'heart-to-heart', 'Aussprache',
      ex('П+осле д+олгого [[откров+енного разгов+ора]] +оба п+оняли, что об+идело друг др+уга.', 'After a long heart-to-heart, both understood better what had hurt the other.', 'Nach einer langen Aussprache verstanden beide besser, was den anderen verletzt hatte.')),
    N('uvazhenie', 'уваж+ение', 'n', 'B1', 'respect', 'Respekt, Achtung',
      ex('Для неё [[уваж+ение]] проявл+яется пр+ежде всег+о в ум+ении вним+ательно сл+ушать.', 'For her, respect shows above all in the ability to listen carefully.', 'Für sie zeigt sich Respekt vor allem darin, dass jemand aufmerksam zuhört.')),
    N('gotovnost-k-dialogu', 'гот+овность к диал+огу', 'f', 'B2', 'willingness to talk', 'Gesprächsbereitschaft',
      ex('Ег+о спок+ойный отв+ет вперв+ые показ+ал искр+еннюю [[гот+овность к диал+огу]].', 'For the first time, his calm reply showed real willingness to talk.', 'Seine ruhige Antwort zeigte zum ersten Mal echte Gesprächsbereitschaft.')),
    N('ustupchivost', 'уст+упчивость', 'f', 'B2', 'willingness to compromise', 'Entgegenkommen',
      ex('Без её [[уст+упчивости]] мы едв+а ли смогл+и бы разреш+ить спор.', 'Without her willingness to compromise, we would hardly have settled the dispute.', 'Ohne ihr Entgegenkommen hätten wir den Streit kaum beilegen können.'))
  ]);

  reg('b2_health', [
    N('posleduyushchee-nablyudenie', 'посл+едующее наблюд+ение', 'n', 'B2', 'follow-up care', 'Nachsorge',
      ex('П+осле леч+ения кл+иника назн+ачила н+есколько виз+итов для [[посл+едующего наблюд+ения]].', 'After the treatment, the clinic arranged several appointments for follow-up care.', 'Nach der Behandlung vereinbarte die Klinik mehrere Termine zur Nachsorge.')),
    N('neperenosimost', 'неперенос+имость', 'f', 'B2', 'intolerance', 'Unverträglichkeit',
      ex('П+еред осм+отром врач спрос+ила, есть ли у мен+я [[неперенос+имость]] как+их-л+ибо вещ+еств.', 'Before the examination, the doctor asked whether I had an intolerance to any substances.', 'Vor der Untersuchung fragte die Ärztin, ob ich irgendwelche Stoffe nicht vertrage.')),
    N('potrebnost-v-ukhode', 'потр+ебность в ух+оде', 'f', 'B2', 'care needs', 'Pflegebedarf',
      ex('Во вр+емя виз+ита на дом обсужд+али д+едушкину [[потр+ебность в ух+оде]].', 'My grandfather’s current care needs were discussed during the home visit.', 'Beim Hausbesuch wurde der aktuelle Pflegebedarf meines Großvaters besprochen.')),
    N('vtoroe-mnenie', 'втор+ое мн+ение', 'n', 'B2', 'second opinion', 'Zweitmeinung',
      ex('Пр+ежде чем реш+иться на опер+ацию, он+а захот+ела получ+ить [[втор+ое мн+ение]].', 'She wanted a second opinion before deciding whether to have the procedure.', 'Vor der Entscheidung über den Eingriff wollte sie eine Zweitmeinung einholen.'))
  ]);

  reg('b2_travel', [
    N('uchastok-puti', 'уч+асток пут+и', 'm', 'B2', 'leg of the journey', 'Teilstrecke',
      ex('На посл+едний [[уч+асток пут+и]] нам пришл+ось куп+ить отд+ельный бил+ет.', 'We needed a separate ticket for the final leg of the journey.', 'Für die letzte Teilstrecke mussten wir ein eigenes Ticket kaufen.')),
    N('sbor-za-perebronirovanie', 'сбор за перебронир+ование', 'm', 'B2', 'rebooking fee', 'Umbuchungsgebühr',
      ex('[[Сбор за перебронир+ование]] оказ+ался в+ыше р+азницы в цен+е м+ежду р+ейсами.', 'The rebooking fee was higher than the price difference between the flights.', 'Die Umbuchungsgebühr fiel höher aus als der Preisunterschied zwischen den Flügen.')),
    N('kamera-khraneniya', 'к+амера хран+ения', 'f', 'B1', 'left luggage facility', 'Gepäckaufbewahrung',
      ex('До отправл+ения мы ост+авили тяжёлые с+умки в [[к+амере хран+ения]].', 'We left our heavy bags at the left luggage facility until departure.', 'Bis zur Abfahrt ließen wir unsere schweren Taschen in der Gepäckaufbewahrung.'))
  ]);

  reg('b2_society', [
    A('competitive', 'adj', 'конкурентоспос+обный', 'B2', 'competitive', 'wettbewerbsfähig',
      ex('Д+аже небольш+ие поставщик+и оста+ются [[конкурентоспос+обными]] благодар+я консульт+ациям и б+ыстрой дост+авке.', 'Even small suppliers remain competitive by offering personal advice and short delivery times.', 'Auch kleinere Anbieter bleiben durch persönliche Beratung und kurze Lieferzeiten wettbewerbsfähig.')),
    V('retain', 'удерж+ать', 'pf', 'B2', ['удерж+у, уд+ержишь', 'удерж+ал', 'impf. уд+ерживать'], 'retain', 'einbehalten',
      ex('По усл+овиям догов+ора поставщ+ик м+ожет [[удерж+ать]] часть предопл+аты.', 'Under the contract, the supplier may retain part of the deposit.', 'Der Anbieter darf laut Vertrag einen Teil der Anzahlung einbehalten.'), ['Imperfective counterpart: уд+ерживать.', 'Imperfektiver Aspektpartner: уд+ерживать.']),
    N('wholesale-trade', 'опт+овая торг+овля', 'f', 'B2', 'wholesale trade', 'Großhandel',
      ex('Ц+ены в [[опт+овой торг+овле]] р+езко в+ыросли, и магаз+ины переложил+и подорож+ание на покуп+ателей.', 'Prices in the wholesale trade rose sharply, and shops passed the increase on to customers.', 'Die Preise im Großhandel stiegen stark, und die Geschäfte gaben die Erhöhung an die Kunden weiter.'))
  ]);

  reg('b2_relations', [
    A('disrespectful', 'adj', 'неуваж+ительный', 'B2', 'disrespectful', 'respektlos',
      ex('Мн+огим ег+о тон показ+ался [[неуваж+ительным]], хот+я кр+итика был+а обосн+ованной.', 'Many found his tone disrespectful, even though his criticism was justified.', 'Viele empfanden seinen Ton als respektlos, obwohl seine Kritik sachlich begründet war.')),
    V('be-on-first-name-terms', 'обращ+аться на ты', 'impf', 'B2', ['обращ+аюсь, обращ+аешься', 'обращ+ался', 'pf. перейт+и на ты'], 'address someone informally (as ты)', 'duzen',
      ex('В х+оре мы [[обращ+аемся на ты]] д+аже к тем, кто пришёл т+олько вчер+а.', 'In our choir, we use the informal ты even with people who only joined yesterday.', 'Im Chor duzen wir auch die Mitglieder, die erst seit gestern dabei sind.'), ['To switch to ты: перейт+и на ты (pf.). Informally also: быть на ты с кем-то.', 'Zum Du übergehen: перейт+и на ты (pf.). Umgangssprachlich: быть на ты с кем-то.']),
    V('address-formally', 'обращ+аться на вы', 'impf', 'B2', ['обращ+аюсь, обращ+аешься', 'обращ+ался', '—'], 'address someone formally (as вы)', 'siezen',
      ex('Д+аже сп+устя мн+ого лет н+аши сос+еди [[обращ+аются]] друг к др+угу [[на вы]].', 'Even after many years, our two neighbours still use the formal вы with each other.', 'Auch nach vielen Jahren siezen sich unsere beiden Nachbarn noch immer.'), ['вы is also the normal plural “you”. Switching back from ты to вы is rare and sounds cold.', 'вы ist auch das normale „ihr“. Vom ты zurück zum вы zu wechseln ist selten und klingt kühl.']),
    V('impress', 'впечатл+ить', 'pf', 'B2', ['впечатл+ю, впечатл+ишь', 'впечатл+ил', 'impf. впечатл+ять'], 'impress', 'beeindrucken',
      ex('+Искренними отв+етами он+а смогл+а [[впечатл+ить]] д+аже с+амых крит+ичных сл+ушателей.', 'Her honest answers managed to impress even the most critical listeners.', 'Mit ehrlichen Antworten konnte sie selbst ihre kritischsten Zuhörer beeindrucken.'), ['Imperfective counterpart: впечатл+ять.', 'Imperfektiver Aspektpartner: впечатл+ять.']),
    N('heated-debate', 'пол+емика', 'f', 'B2', 'polemic, heated debate', 'Polemik, Streitgespräch',
      ex('Кор+откий уточн+яющий вопр+ос перер+ос в [[пол+емику]] о вза+имном уваж+ении.', 'The brief follow-up question led to a heated debate about mutual respect.', 'Aus der kurzen Nachfrage entwickelte sich ein Streitgespräch über gegenseitigen Respekt.'))
  ]);

  reg('b2_media', [
    V('download', 'скач+ать', 'pf', 'B1', ['скач+аю, скач+аешь', 'скач+ал', 'impf. ск+ачивать'], 'download', 'herunterladen',
      ex('Те, кто х+очет [[скач+ать]] отчёт, найд+ут сс+ылку под диагр+аммой.', 'Readers who want to download the report will find the link below the chart.', 'Wer den Bericht herunterladen möchte, findet den Link unter der Grafik.'), ['Imperfective counterpart: ск+ачивать.', 'Imperfektiver Aspektpartner: ск+ачивать.']),
    V('navigate', 'ориент+ироваться', 'impf', 'B2', ['ориент+ируюсь, ориент+ируешься', 'ориент+ировался', 'pf. сориент+ироваться'], 'find one’s way; navigate', 'sich zurechtfinden, navigieren',
      ex('Кл+авиши со стр+елками помог+ают [[ориент+ироваться]] в цифр+овом арх+иве.', 'You can use the arrow keys to navigate the digital archive.', 'Mit den Pfeiltasten können Sie bequem durch das digitale Archiv navigieren.')),
    N('advance-notice', 'ан+онс', 'm', 'B2', 'announcement, trailer (of a programme)', 'Ankündigung, Vorschau',
      ex('[[Ан+онс]] н+ового ц+икла перед+ач вперв+ые появ+ился в расс+ылке муз+ея.', 'The announcement of the new series first appeared in the museum newsletter.', 'Die Ankündigung der neuen Sendereihe erschien zuerst im Newsletter des Museums.'))
  ]);

  reg('b2_health', [
    N('anaesthetic-injection', 'обезб+оливающий ук+ол', 'm', 'B2', 'anaesthetic injection', 'Betäubungsspritze',
      ex('П+еред леч+ением стомат+олог объясн+ил, почем+у рекоменд+ует сд+елать [[обезб+оливающий ук+ол]].', 'Before treatment, the dentist explained why he recommended an anaesthetic injection.', 'Vor der Behandlung erklärte der Zahnarzt, weshalb er eine Betäubungsspritze empfahl.'))
  ]);

  reg('work', [
    N('berufsabschluss', 'профессион+альная квалифик+ация', 'f', 'B2', 'vocational qualification', 'Berufsabschluss',
      ex('Для +этой вак+ансии призн+анная [[профессион+альная квалифик+ация]] важн+ее ит+оговой оц+енки.', 'For this position, a recognised vocational qualification matters more than the final grade.', 'Für diese Stelle zählt ein anerkannter Berufsabschluss mehr als die Abschlussnote.')),
    N('berufspraktikum', 'произв+одственная пр+актика', 'f', 'B1', 'work placement', 'Berufspraktikum',
      ex('Во вр+емя [[произв+одственной пр+актики]] он+а вперв+ые самосто+ятельно консульт+ировала кли+ентов.', 'During her work placement, she advised customers independently for the first time.', 'Während ihres Berufspraktikums durfte sie zum ersten Mal selbst Kunden beraten.')),
    N('spezialisierung', 'специализ+ация', 'f', 'B2', 'specialisation', 'Spezialisierung',
      ex('Т+олько п+осле втор+ого сем+естра он+а в+ыбрала себ+е [[специализ+ацию]].', 'She only chose a specialisation after completing her second semester.', 'Erst nach dem zweiten Semester entschied sie sich für eine Spezialisierung.')),
    N('familienbetrieb', 'сем+ейное предпри+ятие', 'n', 'B2', 'family-run business', 'Familienbetrieb',
      ex('Уж+е три покол+ения [[сем+ейное предпри+ятие]] гот+овит ученик+ов из своег+о реги+она.', 'The small family-run business has trained local apprentices for three generations.', 'Der kleine Familienbetrieb bildet seit drei Generationen Lehrlinge aus der Region aus.')),
    N('belegschaft', 'трудов+ой коллект+ив', 'm', 'B2', 'staff, workforce', 'Belegschaft',
      ex('Весь [[трудов+ой коллект+ив]] мог высказ+аться при обсужд+ении н+ового распис+ания перер+ывов.', 'The entire workforce had a say in planning the new break times.', 'Die gesamte Belegschaft durfte bei der Planung der neuen Pausenzeiten mitreden.')),
    N('verguetung', 'вознагражд+ение', 'n', 'B2', 'remuneration, reward', 'Vergütung',
      ex('До нач+ала раб+оты +обе ст+ороны согласов+али фикс+ированное [[вознагражд+ение]] за зак+аз.', 'Before work began, both parties agreed on a fixed amount of remuneration.', 'Vor Beginn des Auftrags vereinbarten beide Seiten eine feste Vergütung.')),
    A('eigeninitiativ', 'adj', 'инициат+ивный', 'B1', 'proactive, showing initiative', 'initiativ, engagiert',
      ex('Для совм+естного про+екта ос+обенно [[инициат+ивные]] уч+астники с+ами +ищут подход+ящие ф+ирмы.', 'For the group project, particularly proactive participants look for suitable companies themselves.', 'Beim gemeinsamen Projekt suchen besonders engagierte Teilnehmer selbst nach passenden Betrieben.'))
  ]);

  reg('everyday', [
    N('zahlungsempfaenger', 'получ+атель платеж+а', 'm', 'B2', 'payee, recipient of a payment', 'Zahlungsempfänger',
      ex('Пров+ерьте, пож+алуйста, совпад+ает ли +имя [[получ+ателя платеж+а]] с +именем в счёте.', 'Please check whether the payee matches the name on the invoice.', 'Prüfen Sie bitte, ob der Zahlungsempfänger mit dem Namen auf der Rechnung übereinstimmt.'))
  ]);

  reg('b2_society', [
    N('hilfsorganisation', 'гуманит+арная организ+ация', 'f', 'B2', 'aid organisation', 'Hilfsorganisation',
      ex('П+осле наводн+ения м+естная [[гуманит+арная организ+ация]] раздаёт гор+ячие об+еды пострад+авшим с+емьям.', 'After the floods, a local aid organisation is distributing hot meals to affected families.', 'Eine örtliche Hilfsorganisation verteilt nach dem Hochwasser warme Mahlzeiten an betroffene Familien.')),
    N('arbeitslosenversicherung', 'страхов+ание от безраб+отицы', 'n', 'B2', 'unemployment insurance', 'Arbeitslosenversicherung',
      ex('На зан+ятии мы сравн+ивали [[страхов+ание от безраб+отицы]] в н+ескольких европ+ейских стр+анах.', 'In class, we compared unemployment insurance systems in several European countries.', 'Im Kurs verglichen wir die Arbeitslosenversicherung in mehreren europäischen Ländern.'))
  ]);

  reg('b2_health', [
    N('arbeitsunfaehigkeit', 'нетрудоспос+обность', 'f', 'B2', 'incapacity for work', 'Arbeitsunfähigkeit',
      ex('Врач обсуд+ила с ним, ск+олько предполож+ительно продл+ится ег+о [[нетрудоспос+обность]].', 'The doctor discussed with him how long his incapacity for work was likely to last.', 'Die Ärztin besprach mit ihm die voraussichtliche Dauer seiner Arbeitsunfähigkeit.')),
    N('platzwunde', 'рв+аная р+ана', 'f', 'B2', 'laceration', 'Platzwunde',
      ex('П+осле пад+ения он+а попрос+ила врач+а осмотр+еть [[рв+аную р+ану]] на лбу.', 'After the fall, she had the laceration on her forehead examined.', 'Nach dem Sturz ließ sie die Platzwunde an der Stirn untersuchen.'))
  ]);

  reg('b2_travel', [
    N('flugverbindung', 'авиасообщ+ение', 'n', 'B2', 'flight connection', 'Flugverbindung',
      ex('С м+арта м+ежду дв+умя город+ами сн+ова +есть прям+ое [[авиасообщ+ение]].', 'There has been a direct flight connection between the two cities again since March.', 'Seit März gibt es wieder eine direkte Flugverbindung zwischen den beiden Städten.')),
    A('reibungslos', 'phrase', 'без зам+инок', 'B2', 'smoothly', 'reibungslos',
      ex('Благодар+я пон+ятным указ+ателям перес+адка в н+овом аэропорт+у прошл+а [[без зам+инок]].', 'Thanks to the clear signs, our transfer at the new airport went smoothly.', 'Dank der klaren Beschilderung verlief der Umstieg am neuen Flughafen völlig reibungslos.'))
  ]);
})();

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.packs.ru.config.TOPICS.words.push({
  "id": "leisure",
  "name": "Leisure, Media & Culture",
  "level": "b1",
  "group": "B1 topics",
  "desc": "Hobbies, events, reading and making plans.",
  "scenario": {
    "en": "We plan an evening out and compare a concert, a museum and a film. You are a friend.",
    "de": "Wir planen einen Abend und vergleichen Konzert, Museum und Film. Du bist ein Freund."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "society",
  "name": "Society, Nature & Education",
  "level": "b1",
  "group": "B1 topics",
  "desc": "Community, the environment and everyday learning.",
  "scenario": {
    "en": "We discuss a neighbourhood clean-up and a local evening course. You are a neighbour.",
    "de": "Wir sprechen über eine Aufräumaktion im Viertel und einen Abendkurs. Du bist ein Nachbar."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "b2_education",
  "name": "Learning & Education",
  "level": "b2",
  "group": "B2 topics",
  "desc": "Study choices, qualifications, feedback and learning strategies.",
  "scenario": {
    "en": "We compare two training courses and their admission requirements. You are a course adviser.",
    "de": "Wir vergleichen zwei Weiterbildungen und ihre Zugangsvoraussetzungen. Du bist Kursberater."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "b2_economy",
  "name": "Economy & Consumption",
  "level": "b2",
  "group": "B2 topics",
  "desc": "Prices, household budgets, markets and consumer choices.",
  "scenario": {
    "en": "We compare household expenses and discuss a recent price increase. You are a friend.",
    "de": "Wir vergleichen Haushaltsausgaben und sprechen über gestiegene Preise. Du bist ein Freund."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "b2_science",
  "name": "Science & Technology",
  "level": "b2",
  "group": "B2 topics",
  "desc": "Evidence, experiments, results and uncertainty.",
  "scenario": {
    "en": "We discuss a research summary and distinguish findings from assumptions. You are a colleague.",
    "de": "Wir besprechen eine Studie und unterscheiden Ergebnisse von Annahmen. Du bist ein Kollege."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "b2_psyche",
  "name": "Wellbeing & Psychology",
  "level": "b2",
  "group": "B2 topics",
  "desc": "Motivation, emotions, boundaries and recovery.",
  "scenario": {
    "en": "We discuss workload, rest and realistic personal boundaries. You are a friend.",
    "de": "Wir sprechen über Belastung, Erholung und persönliche Grenzen. Du bist ein Freund."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "b2_culture",
  "name": "Culture & Public Life",
  "level": "b2",
  "group": "B2 topics",
  "desc": "Creative work, heritage, criticism and public events.",
  "scenario": {
    "en": "We discuss a cultural festival and how public funding should be used. You are a friend.",
    "de": "Wir sprechen über ein Kulturfestival und die Verwendung öffentlicher Fördermittel. Du bist ein Freund."
  }
});
GT.packs.ru.config.TOPICS.words.push({
  "id": "c1_argumentation",
  "name": "Evidence & Nuance",
  "level": "c1",
  "group": "C1 topics",
  "desc": "Precise language for assumptions, scope, evidence and qualified conclusions.",
  "scenario": {
    "en": "We review a proposal, challenge its assumptions and qualify our conclusions. You are a colleague.",
    "de": "Wir prüfen einen Vorschlag, hinterfragen seine Annahmen und wägen Schlussfolgerungen ab. Du bist ein Kollege."
  }
});

GT.register({
  "tab": "words",
  "topic": "leisure",
  "items": [
    {
      "id": "ru-content26-leisure-uvlechenie",
      "t": "увлеч+ение",
      "level": "B1",
      "pos": "noun",
      "en": "hobby",
      "de": "das Hobby",
      "examples": [
        {
          "t": "Моё н+овое [[увлеч+ение]] — фотогр+афия.",
          "en": "My new hobby is photography.",
          "de": "Mein neues Hobby ist Fotografie."
        }
      ],
      "gender": "n",
      "plural": "увлеч+ения"
    },
    {
      "id": "ru-content26-leisure-dosug",
      "t": "дос+уг",
      "level": "B1",
      "pos": "noun",
      "en": "leisure",
      "de": "die Freizeit",
      "examples": [
        {
          "t": "В своб+одное вр+емя я предпочит+аю акт+ивный [[дос+уг]].",
          "en": "In my free time I prefer active leisure.",
          "de": "In meiner Freizeit bin ich lieber aktiv."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-leisure-koncert",
      "t": "конц+ерт",
      "level": "B1",
      "pos": "noun",
      "en": "concert",
      "de": "das Konzert",
      "examples": [
        {
          "t": "На [[конц+ерт]] ещё есть бил+еты.",
          "en": "There are still tickets for the concert.",
          "de": "Für das Konzert gibt es noch Karten."
        }
      ],
      "gender": "m",
      "plural": "конц+ерты"
    },
    {
      "id": "ru-content26-leisure-spektakl",
      "t": "спект+акль",
      "level": "B1",
      "pos": "noun",
      "en": "theatre performance",
      "de": "die Theateraufführung",
      "examples": [
        {
          "t": "[[Спект+акль]] началс+я без опозд+ания.",
          "en": "The theatre performance started on time.",
          "de": "Die Theateraufführung begann pünktlich."
        }
      ],
      "gender": "m",
      "plural": "спект+акли"
    },
    {
      "id": "ru-content26-leisure-zritel",
      "t": "зр+итель",
      "level": "B1",
      "pos": "noun",
      "en": "spectator",
      "de": "der Zuschauer",
      "examples": [
        {
          "t": "К+аждый [[зр+итель]] получ+ил прогр+амму.",
          "en": "Every spectator received a programme.",
          "de": "Jeder Zuschauer bekam ein Programmheft."
        }
      ],
      "gender": "m",
      "plural": "зр+ители"
    },
    {
      "id": "ru-content26-leisure-vpechatlenie",
      "t": "впечатл+ение",
      "level": "B1",
      "pos": "noun",
      "en": "impression",
      "de": "der Eindruck",
      "examples": [
        {
          "t": "По+ездка произвел+а на мен+я с+ильное [[впечатл+ение]].",
          "en": "The trip made a strong impression on me.",
          "de": "Die Reise hat einen starken Eindruck auf mich gemacht."
        }
      ],
      "gender": "n",
      "plural": "впечатл+ения"
    },
    {
      "id": "ru-content26-leisure-biblioteka",
      "t": "библиот+ека",
      "level": "B1",
      "pos": "noun",
      "en": "library",
      "de": "die Bibliothek",
      "examples": [
        {
          "t": "Н+аша [[библиот+ека]] раб+отает и по субб+отам.",
          "en": "Our library is also open on Saturdays.",
          "de": "Unsere Bibliothek ist auch samstags geöffnet."
        }
      ],
      "gender": "f",
      "plural": "библиот+еки"
    },
    {
      "id": "ru-content26-leisure-roman",
      "t": "ром+ан",
      "level": "B1",
      "pos": "noun",
      "en": "novel",
      "de": "der Roman",
      "examples": [
        {
          "t": "+Этот [[ром+ан]] я прочит+ал за нед+елю.",
          "en": "I read this novel in a week.",
          "de": "Diesen Roman habe ich in einer Woche gelesen."
        }
      ],
      "gender": "m",
      "plural": "ром+аны"
    },
    {
      "id": "ru-content26-leisure-syuzhet",
      "t": "сюж+ет",
      "level": "B1",
      "pos": "noun",
      "en": "plot",
      "de": "die Handlung",
      "examples": [
        {
          "t": "[[Сюж+ет]] ф+ильма +очень прост+ой.",
          "en": "The plot of the film is very simple.",
          "de": "Die Handlung des Films ist sehr einfach."
        }
      ],
      "gender": "m",
      "plural": "сюж+еты"
    },
    {
      "id": "ru-content26-leisure-orchestra",
      "t": "орк+естр",
      "level": "B1",
      "pos": "noun",
      "en": "orchestra",
      "de": "das Orchester",
      "examples": [
        {
          "t": "П+еред нач+алом [[орк+естр]] настр+аивал инструм+енты.",
          "en": "The orchestra tuned its instruments before the start.",
          "de": "Vor Beginn stimmte das Orchester seine Instrumente."
        }
      ],
      "gender": "m",
      "plural": "орк+естры"
    },
    {
      "id": "ru-content26-leisure-poem",
      "t": "стихотвор+ение",
      "level": "B1",
      "pos": "noun",
      "en": "poem",
      "de": "das Gedicht",
      "examples": [
        {
          "t": "На ур+оке мы прочит+али кор+откое [[стихотвор+ение]].",
          "en": "We read a short poem in class.",
          "de": "Im Unterricht haben wir ein kurzes Gedicht gelesen."
        }
      ],
      "gender": "n",
      "plural": "стихотвор+ения"
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "society",
  "items": [
    {
      "id": "ru-content26-society-priroda",
      "t": "прир+ода",
      "level": "B1",
      "pos": "noun",
      "en": "nature",
      "de": "die Natur",
      "examples": [
        {
          "t": "П+осле раб+оты мне х+очется поб+ыть на [[прир+оде]].",
          "en": "After work I want to spend some time in nature.",
          "de": "Nach der Arbeit möchte ich etwas Zeit in der Natur verbringen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-society-musor",
      "t": "бытов+ой м+усор",
      "level": "B1",
      "pos": "noun",
      "en": "household waste",
      "de": "der Hausmüll",
      "examples": [
        {
          "t": "[[Бытов+ой м+усор]] н+ужно сортиров+ать по м+естным пр+авилам.",
          "en": "Household waste should be sorted according to local rules.",
          "de": "Hausmüll sollte nach den örtlichen Regeln getrennt werden."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-society-uchastie",
      "t": "уч+астие",
      "level": "B1",
      "pos": "noun",
      "en": "participation",
      "de": "die Teilnahme",
      "examples": [
        {
          "t": "[[Уч+астие]] в про+екте беспл+атное.",
          "en": "Participation in the project is free.",
          "de": "Die Teilnahme am Projekt ist kostenlos."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-society-sosedstvo",
      "t": "сос+едство",
      "level": "B1",
      "pos": "noun",
      "en": "neighbourhood relations",
      "de": "die Nachbarschaft",
      "examples": [
        {
          "t": "Хор+ошее [[сос+едство]] начин+ается с уваж+ения.",
          "en": "Good neighbourhood relations begin with respect.",
          "de": "Eine gute Nachbarschaft beginnt mit Respekt."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-society-pravilo",
      "t": "пр+авило",
      "level": "B1",
      "pos": "noun",
      "en": "rule",
      "de": "die Regel",
      "examples": [
        {
          "t": "+Это [[пр+авило]] д+ействует для всех уч+астников.",
          "en": "This rule applies to all participants.",
          "de": "Diese Regel gilt für alle Teilnehmenden."
        }
      ],
      "gender": "n",
      "plural": "пр+авила"
    },
    {
      "id": "ru-content26-society-obrazovanie",
      "t": "образов+ание",
      "level": "B1",
      "pos": "noun",
      "en": "education",
      "de": "die Bildung",
      "examples": [
        {
          "t": "Он+а получ+ила [[образов+ание]] в друг+ом г+ороде.",
          "en": "She received her education in another city.",
          "de": "Sie hat ihre Ausbildung in einer anderen Stadt erhalten."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-society-urok",
      "t": "ур+ок",
      "level": "B1",
      "pos": "noun",
      "en": "lesson",
      "de": "die Unterrichtsstunde",
      "examples": [
        {
          "t": "Сег+одня [[ур+ок]] зак+ончится р+аньше.",
          "en": "The lesson will finish earlier today.",
          "de": "Heute endet die Unterrichtsstunde früher."
        }
      ],
      "gender": "m",
      "plural": "ур+оки"
    },
    {
      "id": "ru-content26-society-uchebnik",
      "t": "уч+ебник",
      "level": "B1",
      "pos": "noun",
      "en": "textbook",
      "de": "das Lehrbuch",
      "examples": [
        {
          "t": "+Этот [[уч+ебник]] м+ожно взять в библиот+еке.",
          "en": "You can borrow this textbook from the library.",
          "de": "Dieses Lehrbuch kann man in der Bibliothek ausleihen."
        }
      ],
      "gender": "m",
      "plural": "уч+ебники"
    },
    {
      "id": "ru-content26-society-ekzamen",
      "t": "экз+амен",
      "level": "B1",
      "pos": "noun",
      "en": "exam",
      "de": "die Prüfung",
      "examples": [
        {
          "t": "Я сдал [[экз+амен]] со втор+ой поп+ытки.",
          "en": "I passed the exam on my second attempt.",
          "de": "Ich habe die Prüfung beim zweiten Versuch bestanden."
        }
      ],
      "gender": "m",
      "plural": "экз+амены"
    },
    {
      "id": "ru-content26-society-uslovie",
      "t": "усл+овие",
      "level": "B1",
      "pos": "noun",
      "en": "condition",
      "de": "die Bedingung",
      "examples": [
        {
          "t": "Гл+авное [[усл+овие]] — прийт+и в+овремя.",
          "en": "The main condition is to arrive on time.",
          "de": "Die wichtigste Bedingung ist, pünktlich zu kommen."
        }
      ],
      "gender": "n",
      "plural": "усл+овия"
    },
    {
      "id": "ru-content26-society-iniciativa",
      "t": "инициат+ива",
      "level": "B1",
      "pos": "noun",
      "en": "initiative",
      "de": "die Initiative",
      "examples": [
        {
          "t": "[[Инициат+ива]] сос+едей помогл+а сохран+ить сад.",
          "en": "The neighbours' initiative helped save the garden.",
          "de": "Die Initiative der Nachbarn half, den Garten zu erhalten."
        }
      ],
      "gender": "f",
      "plural": "инициат+ивы"
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_education",
  "items": [
    {
      "id": "ru-content26-edu-uspevaemost",
      "t": "успев+аемость",
      "level": "B2",
      "pos": "noun",
      "en": "academic performance",
      "de": "die schulischen Leistungen",
      "examples": [
        {
          "t": "За полг+ода её [[успев+аемость]] зам+етно ул+учшилась.",
          "en": "Her academic performance improved noticeably over six months.",
          "de": "Ihre schulischen Leistungen haben sich innerhalb eines halben Jahres deutlich verbessert."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-edu-stipendiya",
      "t": "стип+ендия",
      "level": "B2",
      "pos": "noun",
      "en": "scholarship",
      "de": "das Stipendium",
      "examples": [
        {
          "t": "[[Стип+ендия]] покр+оет часть расх+одов на учёбу.",
          "en": "The scholarship will cover part of the study costs.",
          "de": "Das Stipendium deckt einen Teil der Studienkosten."
        }
      ],
      "gender": "f",
      "plural": "стип+ендии"
    },
    {
      "id": "ru-content26-edu-postuplenie",
      "t": "поступл+ение",
      "level": "B2",
      "pos": "noun",
      "en": "university admission",
      "de": "die Hochschulzulassung",
      "examples": [
        {
          "t": "Для [[поступл+ения]] н+ужен языков+ой сертифик+ат.",
          "en": "A language certificate is required for university admission.",
          "de": "Für die Hochschulzulassung ist ein Sprachzertifikat erforderlich."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-edu-uchebny-plan",
      "t": "уч+ебный план",
      "level": "B2",
      "pos": "noun",
      "en": "curriculum",
      "de": "der Lehrplan",
      "examples": [
        {
          "t": "В [[уч+ебный план]] доб+авили пр+актику.",
          "en": "Practical training has been added to the curriculum.",
          "de": "Der Lehrplan wurde um ein Praktikum ergänzt."
        }
      ],
      "gender": "m",
      "plural": "уч+ебные пл+аны"
    },
    {
      "id": "ru-content26-edu-specialnost",
      "t": "специ+альность",
      "level": "B2",
      "pos": "noun",
      "en": "field of study",
      "de": "das Studienfach",
      "examples": [
        {
          "t": "Я в+ыбрал [[специ+альность]], кот+орая мне интер+есна.",
          "en": "I chose a field of study that interests me.",
          "de": "Ich habe ein Studienfach gewählt, das mich interessiert."
        }
      ],
      "gender": "f",
      "plural": "специ+альности"
    },
    {
      "id": "ru-content26-edu-kvalifikaciya",
      "t": "квалифик+ация",
      "level": "B2",
      "pos": "noun",
      "en": "qualification",
      "de": "die Qualifikation",
      "examples": [
        {
          "t": "Для +этой раб+оты нужн+а дополн+ительная [[квалифик+ация]].",
          "en": "This job requires an additional qualification.",
          "de": "Für diese Arbeit ist eine zusätzliche Qualifikation nötig."
        }
      ],
      "gender": "f",
      "plural": "квалифик+ации"
    },
    {
      "id": "ru-content26-edu-samoobrazovanie",
      "t": "самообразов+ание",
      "level": "B2",
      "pos": "noun",
      "en": "self-directed learning",
      "de": "das Selbststudium",
      "examples": [
        {
          "t": "[[Самообразов+ание]] тр+ебует регул+ярной пр+актики.",
          "en": "Self-directed learning requires regular practice.",
          "de": "Selbststudium erfordert regelmäßige Übung."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-edu-usvoenie",
      "t": "усво+ение",
      "level": "B2",
      "pos": "noun",
      "en": "assimilation of knowledge",
      "de": "die Aneignung von Wissen",
      "examples": [
        {
          "t": "Для [[усво+ения]] матери+ала пол+езно повтор+ение.",
          "en": "Revision helps with the assimilation of knowledge.",
          "de": "Wiederholung hilft bei der Aneignung von Wissen."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-edu-otsenka",
      "t": "оц+енка",
      "level": "B2",
      "pos": "noun",
      "en": "grade",
      "de": "die Note",
      "examples": [
        {
          "t": "Ит+оговая [[оц+енка]] уч+итывает и +устный отв+ет.",
          "en": "The final grade also takes the oral answer into account.",
          "de": "Die Endnote berücksichtigt auch die mündliche Antwort."
        }
      ],
      "gender": "f",
      "plural": "оц+енки"
    },
    {
      "id": "ru-content26-edu-nagruzka",
      "t": "уч+ебная нагр+узка",
      "level": "B2",
      "pos": "noun",
      "en": "academic workload",
      "de": "die Studienbelastung",
      "examples": [
        {
          "t": "К конц+у сем+естра [[уч+ебная нагр+узка]] возросл+а.",
          "en": "The academic workload increased towards the end of the semester.",
          "de": "Gegen Semesterende stieg die Studienbelastung."
        }
      ],
      "gender": "f",
      "plural": "уч+ебные нагр+узки"
    },
    {
      "id": "ru-content26-edu-poseshchaemost",
      "t": "посещ+аемость",
      "level": "B2",
      "pos": "noun",
      "en": "attendance",
      "de": "die Anwesenheit",
      "examples": [
        {
          "t": "Преподав+атель отмеч+ает [[посещ+аемость]] к+аждую нед+елю.",
          "en": "The teacher records attendance every week.",
          "de": "Die Lehrkraft erfasst jede Woche die Anwesenheit."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_economy",
  "items": [
    {
      "id": "ru-content26-econ-inflyaciya",
      "t": "инфл+яция",
      "level": "B2",
      "pos": "noun",
      "en": "inflation",
      "de": "die Inflation",
      "examples": [
        {
          "t": "Из-за [[инфл+яции]] на ту же с+умму м+ожно куп+ить м+еньше.",
          "en": "Because of inflation, the same amount buys less.",
          "de": "Wegen der Inflation kann man für denselben Betrag weniger kaufen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-econ-pokupatelnaya",
      "t": "покуп+ательная спос+обность",
      "level": "B2",
      "pos": "noun",
      "en": "purchasing power",
      "de": "die Kaufkraft",
      "examples": [
        {
          "t": "Рост цен сн+изил [[покуп+ательную спос+обность]] семь+и.",
          "en": "Rising prices reduced the family's purchasing power.",
          "de": "Steigende Preise verringerten die Kaufkraft der Familie."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-econ-spros",
      "t": "спрос",
      "level": "B2",
      "pos": "noun",
      "en": "demand",
      "de": "die Nachfrage",
      "examples": [
        {
          "t": "Л+етом [[спрос]] на велосип+еды об+ычно растёт.",
          "en": "Demand for bicycles usually rises in summer.",
          "de": "Im Sommer steigt gewöhnlich die Nachfrage nach Fahrrädern."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-econ-predlozhenie",
      "t": "р+ыночное предлож+ение",
      "level": "B2",
      "pos": "noun",
      "en": "market supply",
      "de": "das Marktangebot",
      "examples": [
        {
          "t": "При р+осте цен [[р+ыночное предлож+ение]] об+ычно растёт.",
          "en": "When prices rise, market supply usually increases.",
          "de": "Bei steigenden Preisen wächst das Marktangebot gewöhnlich."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-econ-konkurenciya",
      "t": "конкур+енция",
      "level": "B2",
      "pos": "noun",
      "en": "competition",
      "de": "der Wettbewerb",
      "examples": [
        {
          "t": "[[Конкур+енция]] заставл+яет ф+ирмы улучш+ать с+ервис.",
          "en": "Competition pushes companies to improve their service.",
          "de": "Wettbewerb zwingt Firmen, ihren Service zu verbessern."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-econ-potrebitel",
      "t": "потреб+итель",
      "level": "B2",
      "pos": "noun",
      "en": "consumer",
      "de": "der Verbraucher",
      "examples": [
        {
          "t": "[[Потреб+итель]] м+ожет сравн+ить ц+ены п+еред пок+упкой.",
          "en": "The consumer can compare prices before buying.",
          "de": "Der Verbraucher kann vor dem Kauf Preise vergleichen."
        }
      ],
      "gender": "m",
      "plural": "потреб+ители"
    },
    {
      "id": "ru-content26-econ-sberezheniya",
      "t": "сбереж+ения",
      "level": "B2",
      "pos": "noun",
      "en": "savings",
      "de": "die Ersparnisse",
      "examples": [
        {
          "t": "Мы потр+атили часть [[сбереж+ений]] на рем+онт.",
          "en": "We spent part of our savings on repairs.",
          "de": "Wir haben einen Teil unserer Ersparnisse für Reparaturen ausgegeben."
        }
      ],
      "gender": "pl",
      "plural": "сбереж+ения",
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      }
    },
    {
      "id": "ru-content26-econ-rassrochka",
      "t": "расср+очка",
      "level": "B2",
      "pos": "noun",
      "en": "payment by instalments",
      "de": "die Ratenzahlung",
      "examples": [
        {
          "t": "[[Расср+очка]] позв+олит распредел+ить платёж на полг+ода.",
          "en": "Payment by instalments will spread the payment over six months.",
          "de": "Mit Ratenzahlung lässt sich der Betrag auf sechs Monate verteilen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-econ-procentnaya",
      "t": "проц+ентная ст+авка",
      "level": "B2",
      "pos": "noun",
      "en": "interest rate",
      "de": "der Zinssatz",
      "examples": [
        {
          "t": "Н+овая [[проц+ентная ст+авка]] ук+азана в догов+оре.",
          "en": "The new interest rate is stated in the contract.",
          "de": "Der neue Zinssatz steht im Vertrag."
        }
      ],
      "gender": "f",
      "plural": "проц+ентные ст+авки"
    },
    {
      "id": "ru-content26-econ-ubytok",
      "t": "уб+ыток",
      "level": "B2",
      "pos": "noun",
      "en": "loss",
      "de": "der Verlust",
      "examples": [
        {
          "t": "В +этом м+есяце магаз+ин понёс [[уб+ыток]].",
          "en": "The shop made a loss this month.",
          "de": "Das Geschäft hat diesen Monat einen Verlust gemacht."
        }
      ],
      "gender": "m",
      "plural": "уб+ытки"
    },
    {
      "id": "ru-content26-econ-pribyl",
      "t": "пр+ибыль",
      "level": "B2",
      "pos": "noun",
      "en": "profit",
      "de": "der Gewinn",
      "examples": [
        {
          "t": "[[Пр+ибыль]] — +это не то же с+амое, что в+ыручка.",
          "en": "Profit is not the same as revenue.",
          "de": "Gewinn ist nicht dasselbe wie Umsatz."
        }
      ],
      "gender": "f",
      "plural": "пр+ибыли"
    },
    {
      "id": "ru-content26-econ-byudzhet",
      "t": "бюдж+ет",
      "level": "B2",
      "pos": "noun",
      "en": "budget",
      "de": "das Budget",
      "examples": [
        {
          "t": "Мы зар+анее расплан+ировали сем+ейный [[бюдж+ет]].",
          "en": "We planned the household budget in advance.",
          "de": "Wir haben das Haushaltsbudget im Voraus geplant."
        }
      ],
      "gender": "m",
      "plural": "бюдж+еты"
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_science",
  "items": [
    {
      "id": "ru-content26-sci-issledovanie",
      "t": "иссл+едование",
      "level": "B2",
      "pos": "noun",
      "en": "research",
      "de": "die Forschung",
      "examples": [
        {
          "t": "[[Иссл+едование]] продолж+алось два г+ода.",
          "en": "The research lasted two years.",
          "de": "Die Forschung dauerte zwei Jahre."
        }
      ],
      "gender": "n",
      "plural": "иссл+едования"
    },
    {
      "id": "ru-content26-sci-eksperiment",
      "t": "эксперим+ент",
      "level": "B2",
      "pos": "noun",
      "en": "experiment",
      "de": "das Experiment",
      "examples": [
        {
          "t": "Учёные повтор+или [[эксперим+ент]] в друг+ой лаборат+ории.",
          "en": "The scientists repeated the experiment in another laboratory.",
          "de": "Die Forschenden wiederholten das Experiment in einem anderen Labor."
        }
      ],
      "gender": "m",
      "plural": "эксперим+енты"
    },
    {
      "id": "ru-content26-sci-nablyudenie",
      "t": "наблюд+ение",
      "level": "B2",
      "pos": "noun",
      "en": "observation",
      "de": "die Beobachtung",
      "examples": [
        {
          "t": "+Это [[наблюд+ение]] пок+а не подтвержд+ает гип+отезу.",
          "en": "This observation does not yet confirm the hypothesis.",
          "de": "Diese Beobachtung bestätigt die Hypothese noch nicht."
        }
      ],
      "gender": "n",
      "plural": "наблюд+ения"
    },
    {
      "id": "ru-content26-sci-dokazatelstvo",
      "t": "доказ+ательство",
      "level": "B2",
      "pos": "noun",
      "en": "evidence",
      "de": "der Beleg",
      "examples": [
        {
          "t": "Одног+о прим+ера недост+аточно в к+ачестве [[доказ+ательства]].",
          "en": "A single example is not enough as evidence.",
          "de": "Ein einzelnes Beispiel reicht als Beleg nicht aus."
        }
      ],
      "gender": "n",
      "plural": "доказ+ательства"
    },
    {
      "id": "ru-content26-sci-prichina",
      "t": "прич+ина",
      "level": "B2",
      "pos": "noun",
      "en": "cause",
      "de": "die Ursache",
      "examples": [
        {
          "t": "Т+очная [[прич+ина]] сб+оя пок+а неизв+естна.",
          "en": "The exact cause of the failure is still unknown.",
          "de": "Die genaue Ursache des Ausfalls ist noch unbekannt."
        }
      ],
      "gender": "f",
      "plural": "прич+ины"
    },
    {
      "id": "ru-content26-sci-sledstvie",
      "t": "сл+едствие",
      "level": "B2",
      "pos": "noun",
      "en": "consequence",
      "de": "die Folge",
      "examples": [
        {
          "t": "Рост расх+одов — [[сл+едствие]] +этого реш+ения.",
          "en": "The increase in costs is a consequence of this decision.",
          "de": "Der Kostenanstieg ist eine Folge dieser Entscheidung."
        }
      ],
      "gender": "n",
      "plural": "сл+едствия"
    },
    {
      "id": "ru-content26-sci-veroyatnost",
      "t": "веро+ятность",
      "level": "B2",
      "pos": "noun",
      "en": "probability",
      "de": "die Wahrscheinlichkeit",
      "examples": [
        {
          "t": "[[Веро+ятность]] ош+ибки здесь невелик+а.",
          "en": "The probability of an error is low here.",
          "de": "Die Wahrscheinlichkeit eines Fehlers ist hier gering."
        }
      ],
      "gender": "f",
      "plural": "веро+ятности"
    },
    {
      "id": "ru-content26-sci-izmerenie",
      "t": "измер+ение",
      "level": "B2",
      "pos": "noun",
      "en": "measurement",
      "de": "die Messung",
      "examples": [
        {
          "t": "П+еред н+овым т+естом повтор+ите [[измер+ение]].",
          "en": "Repeat the measurement before the new test.",
          "de": "Wiederholen Sie die Messung vor dem neuen Test."
        }
      ],
      "gender": "n",
      "plural": "измер+ения"
    },
    {
      "id": "ru-content26-sci-vosproizvodimost",
      "t": "воспроизвод+имость",
      "level": "B2",
      "pos": "noun",
      "en": "reproducibility",
      "de": "die Reproduzierbarkeit",
      "examples": [
        {
          "t": "Для пров+ерки результ+ата важн+а [[воспроизвод+имость]].",
          "en": "Reproducibility matters when verifying a result.",
          "de": "Bei der Überprüfung eines Ergebnisses ist Reproduzierbarkeit wichtig."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-sci-izobretenie",
      "t": "изобрет+ение",
      "level": "B2",
      "pos": "noun",
      "en": "invention",
      "de": "die Erfindung",
      "examples": [
        {
          "t": "+Это [[изобрет+ение]] упрост+ило раб+оту инжен+еров.",
          "en": "This invention made engineers' work easier.",
          "de": "Diese Erfindung erleichterte die Arbeit der Ingenieure."
        }
      ],
      "gender": "n",
      "plural": "изобрет+ения"
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_psyche",
  "items": [
    {
      "id": "ru-content26-psy-trevozhnost",
      "t": "трев+ожность",
      "level": "B2",
      "pos": "noun",
      "en": "anxiety",
      "de": "die Ängstlichkeit",
      "examples": [
        {
          "t": "П+еред экз+аменом ег+о [[трев+ожность]] ус+илилась.",
          "en": "His anxiety increased before the exam.",
          "de": "Vor der Prüfung nahm seine Ängstlichkeit zu."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-napryazhenie",
      "t": "напряж+ение",
      "level": "B2",
      "pos": "noun",
      "en": "tension",
      "de": "die Anspannung",
      "examples": [
        {
          "t": "П+осле прог+улки [[напряж+ение]] немн+ого сп+ало.",
          "en": "The tension eased a little after the walk.",
          "de": "Nach dem Spaziergang ließ die Anspannung etwas nach."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-samoocenka",
      "t": "самооц+енка",
      "level": "B2",
      "pos": "noun",
      "en": "self-esteem",
      "de": "das Selbstwertgefühl",
      "examples": [
        {
          "t": "Её [[самооц+енка]] не зав+исит от чуж+их коммент+ариев.",
          "en": "Her self-esteem does not depend on other people's comments.",
          "de": "Ihr Selbstwertgefühl hängt nicht von fremden Kommentaren ab."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-motivaciya",
      "t": "мотив+ация",
      "level": "B2",
      "pos": "noun",
      "en": "motivation",
      "de": "die Motivation",
      "examples": [
        {
          "t": "М+аленькие усп+ехи помог+ают сохран+ить [[мотив+ацию]].",
          "en": "Small successes help maintain motivation.",
          "de": "Kleine Erfolge helfen, die Motivation zu erhalten."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-privychka",
      "t": "прив+ычка",
      "level": "B2",
      "pos": "noun",
      "en": "habit",
      "de": "die Gewohnheit",
      "examples": [
        {
          "t": "У мен+я появ+илась [[прив+ычка]] чит+ать п+еред сном.",
          "en": "I have developed a habit of reading before bed.",
          "de": "Ich habe mir angewöhnt, vor dem Schlafen zu lesen."
        }
      ],
      "gender": "f",
      "plural": "прив+ычки"
    },
    {
      "id": "ru-content26-psy-osoznannost",
      "t": "ос+ознанность",
      "level": "B2",
      "pos": "noun",
      "en": "awareness",
      "de": "die Bewusstheit",
      "examples": [
        {
          "t": "[[Ос+ознанность]] помог+ает зам+етить сво+и ре+акции.",
          "en": "Awareness helps you notice your own reactions.",
          "de": "Bewusstheit hilft dabei, die eigenen Reaktionen wahrzunehmen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-sostoyanie",
      "t": "состо+яние",
      "level": "B2",
      "pos": "noun",
      "en": "state",
      "de": "der Zustand",
      "examples": [
        {
          "t": "Моё эмоцион+альное [[состо+яние]] постеп+енно улучш+ается.",
          "en": "My emotional state is gradually improving.",
          "de": "Mein emotionaler Zustand verbessert sich allmählich."
        }
      ],
      "gender": "n",
      "plural": "состо+яния"
    },
    {
      "id": "ru-content26-psy-vosstanovlenie",
      "t": "восстановл+ение",
      "level": "B2",
      "pos": "noun",
      "en": "recovery",
      "de": "die Erholung",
      "examples": [
        {
          "t": "П+осле напряжённой нед+ели мне н+ужно [[восстановл+ение]].",
          "en": "After an intense week I need time for recovery.",
          "de": "Nach einer anstrengenden Woche brauche ich Zeit zur Erholung."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-soperezhivanie",
      "t": "сопережив+ание",
      "level": "B2",
      "pos": "noun",
      "en": "empathy",
      "de": "das Mitgefühl",
      "examples": [
        {
          "t": "Он прояв+ил [[сопережив+ание]] и в+ыслушал подр+угу.",
          "en": "He showed empathy and listened to his friend.",
          "de": "Er zeigte Mitgefühl und hörte seiner Freundin zu."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-granicy",
      "t": "л+ичные гран+ицы",
      "level": "B2",
      "pos": "noun",
      "en": "personal boundaries",
      "de": "die persönlichen Grenzen",
      "examples": [
        {
          "t": "В др+ужбе т+оже в+ажно уваж+ать [[л+ичные гран+ицы]].",
          "en": "It is important to respect personal boundaries in friendships too.",
          "de": "Auch in Freundschaften ist es wichtig, persönliche Grenzen zu respektieren."
        }
      ],
      "gender": "pl",
      "plural": "л+ичные гран+ицы",
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      }
    },
    {
      "id": "ru-content26-psy-ustoichivost",
      "t": "уст+ойчивость",
      "level": "B2",
      "pos": "noun",
      "en": "resilience",
      "de": "die Widerstandsfähigkeit",
      "examples": [
        {
          "t": "Подд+ержка бл+изких помогл+а ей сохран+ить [[уст+ойчивость]].",
          "en": "Support from loved ones helped her maintain resilience.",
          "de": "Die Unterstützung nahestehender Menschen half ihr, widerstandsfähig zu bleiben."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-psy-razocharovanie",
      "t": "разочаров+ание",
      "level": "B2",
      "pos": "noun",
      "en": "disappointment",
      "de": "die Enttäuschung",
      "examples": [
        {
          "t": "Отм+ена по+ездки в+ызвала [[разочаров+ание]].",
          "en": "The cancellation of the trip caused disappointment.",
          "de": "Die Absage der Reise sorgte für Enttäuschung."
        }
      ],
      "gender": "n",
      "plural": "разочаров+ания"
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_culture",
  "items": [
    {
      "id": "ru-content26-culture-nasledie",
      "t": "культ+урное насл+едие",
      "level": "B2",
      "pos": "noun",
      "en": "cultural heritage",
      "de": "das Kulturerbe",
      "examples": [
        {
          "t": "Реставр+ация помог+ает сохран+ить [[культ+урное насл+едие]].",
          "en": "Restoration helps preserve cultural heritage.",
          "de": "Restaurierung hilft, das Kulturerbe zu bewahren."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-culture-tvorchestvo",
      "t": "тв+орчество",
      "level": "B2",
      "pos": "noun",
      "en": "creative work",
      "de": "das künstlerische Schaffen",
      "examples": [
        {
          "t": "На в+ыставке предст+авлено р+аннее [[тв+орчество]] худ+ожницы.",
          "en": "The exhibition presents the artist's early creative work.",
          "de": "Die Ausstellung zeigt das frühe künstlerische Schaffen der Künstlerin."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-culture-proizvedenie",
      "t": "произвед+ение",
      "level": "B2",
      "pos": "noun",
      "en": "work of art",
      "de": "das Kunstwerk",
      "examples": [
        {
          "t": "+Это [[произвед+ение]] хран+ится в городск+ом муз+ее.",
          "en": "This work of art is kept in the city museum.",
          "de": "Dieses Kunstwerk wird im Stadtmuseum aufbewahrt."
        }
      ],
      "gender": "n",
      "plural": "произвед+ения"
    },
    {
      "id": "ru-content26-culture-zamysel",
      "t": "з+амысел",
      "level": "B2",
      "pos": "noun",
      "en": "artistic intention",
      "de": "die künstlerische Absicht",
      "examples": [
        {
          "t": "Режиссёр объясн+ил [[з+амысел]] ф+ильма.",
          "en": "The director explained the artistic intention behind the film.",
          "de": "Der Regisseur erläuterte die künstlerische Absicht hinter dem Film."
        }
      ],
      "gender": "m",
      "plural": "з+амыслы"
    },
    {
      "id": "ru-content26-culture-interpretaciya",
      "t": "интерпрет+ация",
      "level": "B2",
      "pos": "noun",
      "en": "interpretation",
      "de": "die Interpretation",
      "examples": [
        {
          "t": "Её [[интерпрет+ация]] р+оли мне показ+алась необ+ычной.",
          "en": "Her interpretation of the role seemed unusual to me.",
          "de": "Ihre Interpretation der Rolle erschien mir ungewöhnlich."
        }
      ],
      "gender": "f",
      "plural": "интерпрет+ации"
    },
    {
      "id": "ru-content26-culture-recenziya",
      "t": "рец+ензия",
      "level": "B2",
      "pos": "noun",
      "en": "review",
      "de": "die Rezension",
      "examples": [
        {
          "t": "Я прочит+ал подр+обную [[рец+ензию]] на +эту кн+игу.",
          "en": "I read a detailed review of this book.",
          "de": "Ich habe eine ausführliche Rezension zu diesem Buch gelesen."
        }
      ],
      "gender": "f",
      "plural": "рец+ензии"
    },
    {
      "id": "ru-content26-culture-postanovka",
      "t": "постан+овка",
      "level": "B2",
      "pos": "noun",
      "en": "stage production",
      "de": "die Inszenierung",
      "examples": [
        {
          "t": "Н+овая [[постан+овка]] в+ызвала мн+ого сп+оров.",
          "en": "The new stage production sparked much debate.",
          "de": "Die neue Inszenierung löste viele Diskussionen aus."
        }
      ],
      "gender": "f",
      "plural": "постан+овки"
    },
    {
      "id": "ru-content26-culture-preemstvennost",
      "t": "пре+емственность",
      "level": "C1",
      "pos": "noun",
      "en": "continuity",
      "de": "die Kontinuität",
      "examples": [
        {
          "t": "Фестив+аль сохран+яет [[пре+емственность]] покол+ений.",
          "en": "The festival preserves continuity between generations.",
          "de": "Das Festival bewahrt die Kontinuität zwischen den Generationen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-culture-samobytnost",
      "t": "самоб+ытность",
      "level": "C1",
      "pos": "noun",
      "en": "cultural distinctiveness",
      "de": "die kulturelle Eigenständigkeit",
      "examples": [
        {
          "t": "М+естные трад+иции сохран+яют сво+ю [[самоб+ытность]].",
          "en": "Local traditions retain their cultural distinctiveness.",
          "de": "Die örtlichen Traditionen bewahren ihre kulturelle Eigenständigkeit."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-culture-obshchestvenny",
      "t": "общ+ественный",
      "level": "B2",
      "pos": "adj",
      "en": "public",
      "de": "öffentlich",
      "examples": [
        {
          "t": "Библиот+ека — в+ажное [[общ+ественное]] простр+анство.",
          "en": "A library is an important public space.",
          "de": "Eine Bibliothek ist ein wichtiger öffentlicher Raum."
        }
      ]
    },
    {
      "id": "ru-content26-culture-dostupny",
      "t": "дост+упный",
      "level": "B2",
      "pos": "adj",
      "en": "accessible",
      "de": "zugänglich",
      "examples": [
        {
          "t": "Муз+ей д+олжен быть [[дост+упным]] для всех посет+ителей.",
          "en": "The museum should be accessible to all visitors.",
          "de": "Das Museum sollte für alle Besucher zugänglich sein."
        }
      ]
    },
    {
      "id": "ru-content26-culture-mnogoobrazie",
      "t": "многообр+азие",
      "level": "B2",
      "pos": "noun",
      "en": "diversity",
      "de": "die Vielfalt",
      "examples": [
        {
          "t": "Прогр+амма отраж+ает культ+урное [[многообр+азие]] г+орода.",
          "en": "The programme reflects the city's cultural diversity.",
          "de": "Das Programm spiegelt die kulturelle Vielfalt der Stadt wider."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "c1_argumentation",
  "items": [
    {
      "id": "ru-content26-c1-predposylka",
      "t": "предпос+ылка",
      "level": "C1",
      "pos": "noun",
      "en": "premise",
      "de": "die Prämisse",
      "examples": [
        {
          "t": "Исх+одная [[предпос+ылка]] оказ+алась нев+ерной.",
          "en": "The initial premise turned out to be wrong.",
          "de": "Die ursprüngliche Prämisse erwies sich als falsch."
        }
      ],
      "gender": "f",
      "plural": "предпос+ылки"
    },
    {
      "id": "ru-content26-c1-dopushchenie",
      "t": "допущ+ение",
      "level": "C1",
      "pos": "noun",
      "en": "assumption",
      "de": "die Annahme",
      "examples": [
        {
          "t": "+Это [[допущ+ение]] н+ужно пров+ерить отд+ельно.",
          "en": "This assumption needs to be checked separately.",
          "de": "Diese Annahme muss gesondert überprüft werden."
        }
      ],
      "gender": "n",
      "plural": "допущ+ения"
    },
    {
      "id": "ru-content26-c1-obosnovanie",
      "t": "обоснов+ание",
      "level": "C1",
      "pos": "noun",
      "en": "justification",
      "de": "die Begründung",
      "examples": [
        {
          "t": "В докум+енте н+ужно привест+и [[обоснов+ание]] реш+ения.",
          "en": "The document needs to include a justification for the decision.",
          "de": "Das Dokument muss eine Begründung für die Entscheidung enthalten."
        }
      ],
      "gender": "n",
      "plural": "обоснов+ания"
    },
    {
      "id": "ru-content26-c1-dvusmyslennost",
      "t": "двусм+ысленность",
      "level": "C1",
      "pos": "noun",
      "en": "ambiguity",
      "de": "die Mehrdeutigkeit",
      "examples": [
        {
          "t": "В +этом предлож+ении есть [[двусм+ысленность]].",
          "en": "There is an ambiguity in this sentence.",
          "de": "In diesem Satz liegt eine Mehrdeutigkeit vor."
        }
      ],
      "gender": "f",
      "plural": "двусм+ысленности"
    },
    {
      "id": "ru-content26-c1-protivorechie",
      "t": "противор+ечие",
      "level": "C1",
      "pos": "noun",
      "en": "contradiction",
      "de": "der Widerspruch",
      "examples": [
        {
          "t": "М+ежду двум+я утвержд+ениями есть [[противор+ечие]].",
          "en": "There is a contradiction between the two statements.",
          "de": "Zwischen den beiden Aussagen besteht ein Widerspruch."
        }
      ],
      "gender": "n",
      "plural": "противор+ечия"
    },
    {
      "id": "ru-content26-c1-soglasovannost",
      "t": "соглас+ованность",
      "level": "C1",
      "pos": "noun",
      "en": "consistency",
      "de": "die Konsistenz",
      "examples": [
        {
          "t": "Ред+актор пров+ерил [[соглас+ованность]] терминол+огии.",
          "en": "The editor checked the consistency of the terminology.",
          "de": "Der Redakteur prüfte die Konsistenz der Terminologie."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-c1-ogovorka",
      "t": "огов+орка",
      "level": "C1",
      "pos": "noun",
      "en": "caveat",
      "de": "der Vorbehalt",
      "examples": [
        {
          "t": "Я подд+ерживаю предлож+ение с одн+ой [[огов+оркой]].",
          "en": "I support the proposal with one caveat.",
          "de": "Ich unterstütze den Vorschlag mit einem Vorbehalt."
        }
      ],
      "gender": "f",
      "plural": "огов+орки"
    },
    {
      "id": "ru-content26-c1-oblast-primeneniya",
      "t": "+область примен+ения",
      "level": "C1",
      "pos": "noun",
      "en": "scope of application",
      "de": "der Anwendungsbereich",
      "examples": [
        {
          "t": "[[+Область примен+ения]] пр+авила огран+ичена.",
          "en": "The rule's scope of application is limited.",
          "de": "Der Anwendungsbereich der Regel ist begrenzt."
        }
      ],
      "gender": "f",
      "plural": "+области примен+ения"
    },
    {
      "id": "ru-content26-c1-nyuans",
      "t": "ню+анс",
      "level": "C1",
      "pos": "noun",
      "en": "nuance",
      "de": "die Nuance",
      "examples": [
        {
          "t": "Здесь есть в+ажный [[ню+анс]], кот+орый мы упуст+или.",
          "en": "There is an important nuance here that we missed.",
          "de": "Hier gibt es eine wichtige Nuance, die wir übersehen haben."
        }
      ],
      "gender": "m",
      "plural": "ню+ансы"
    },
    {
      "id": "ru-content26-c1-obobshchenie",
      "t": "обобщ+ение",
      "level": "C1",
      "pos": "noun",
      "en": "generalisation",
      "de": "die Verallgemeinerung",
      "examples": [
        {
          "t": "+Это сл+ишком шир+окое [[обобщ+ение]] по одном+у прим+еру.",
          "en": "This is too broad a generalisation from a single example.",
          "de": "Das ist eine zu weitgehende Verallgemeinerung anhand eines einzelnen Beispiels."
        }
      ],
      "gender": "n",
      "plural": "обобщ+ения"
    },
    {
      "id": "ru-content26-c1-obosnovanny",
      "t": "обосн+ованный",
      "level": "C1",
      "pos": "adj",
      "en": "justified",
      "de": "begründet",
      "examples": [
        {
          "t": "+Это [[обосн+ованное]] опас+ение, а не пр+осто слух.",
          "en": "This is a justified concern, not just a rumour.",
          "de": "Das ist eine begründete Sorge und nicht bloß ein Gerücht."
        }
      ]
    },
    {
      "id": "ru-content26-c1-posledovatelny",
      "t": "посл+едовательный",
      "level": "C1",
      "pos": "adj",
      "en": "consistent, coherent",
      "de": "folgerichtig, schlüssig",
      "examples": [
        {
          "t": "+Автор излож+ил [[посл+едовательную]] поз+ицию.",
          "en": "The author set out a coherent position.",
          "de": "Der Autor legte eine schlüssige Position dar."
        }
      ]
    },
    {
      "id": "ru-content26-c1-proizvolny",
      "t": "произв+ольный",
      "level": "C1",
      "pos": "adj",
      "en": "arbitrary",
      "de": "willkürlich",
      "examples": [
        {
          "t": "Пор+ог не д+олжен быть [[произв+ольным]].",
          "en": "The threshold should not be arbitrary.",
          "de": "Der Schwellenwert sollte nicht willkürlich sein."
        }
      ]
    },
    {
      "id": "ru-content26-c1-kosvenny",
      "t": "к+освенный",
      "level": "C1",
      "pos": "adj",
      "en": "indirect",
      "de": "indirekt",
      "examples": [
        {
          "t": "+Это лишь [[к+освенное]] подтвержд+ение гип+отезы.",
          "en": "This is only indirect support for the hypothesis.",
          "de": "Das ist nur eine indirekte Bestätigung der Hypothese."
        }
      ]
    },
    {
      "id": "ru-content26-c1-sootnoshenie",
      "t": "соотнош+ение",
      "level": "C1",
      "pos": "noun",
      "en": "ratio",
      "de": "das Verhältnis",
      "examples": [
        {
          "t": "Н+ужно уч+есть [[соотнош+ение]] затр+ат и п+ользы.",
          "en": "We need to consider the ratio of cost to benefit.",
          "de": "Wir müssen das Verhältnis von Kosten und Nutzen berücksichtigen."
        }
      ],
      "gender": "n",
      "plural": "соотнош+ения"
    }
  ]
});

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "words",
  "topic": "b2_education",
  "items": [
    {
      "id": "ru-telc26-lehrgang",
      "t": "уч+ебный курс",
      "pos": "noun",
      "gender": "m",
      "plural": "уч+ебные к+урсы",
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
      "en": "training course",
      "de": "der Lehrgang",
      "examples": [
        {
          "t": "[[Уч+ебный курс]] зак+анчивается практ+ическим экз+аменом.",
          "de": "Der Lehrgang endet mit einer praktischen Prüfung.",
          "en": "The training course ends with a practical examination.",
          "sense": {
            "en": "training course",
            "de": "der Lehrgang"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-vorkenntnisse",
      "t": "предвар+ительные зн+ания",
      "pos": "noun",
      "gender": "pl",
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
      "en": "prior knowledge",
      "de": "die Vorkenntnisse",
      "examples": [
        {
          "t": "Для +этого к+урса не н+ужны [[предвар+ительные зн+ания]].",
          "de": "Für diesen Kurs brauchen Sie keine Vorkenntnisse.",
          "en": "You do not need any prior knowledge for this course.",
          "sense": {
            "en": "prior knowledge",
            "de": "die Vorkenntnisse"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "предвар+ительные зн+ания"
    },
    {
      "id": "ru-telc26-zulassung",
      "t": "д+опуск к обуч+ению",
      "pos": "noun",
      "gender": "m",
      "plural": "д+опуски к обуч+ению",
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
      "en": "admission",
      "de": "die Zulassung",
      "examples": [
        {
          "t": "[[Д+опуск к обуч+ению]] на к+урсе подтверд+или п+исьменно.",
          "de": "Die Zulassung zum Lehrgang wurde schriftlich bestätigt.",
          "en": "Admission to the training course was confirmed in writing.",
          "sense": {
            "en": "admission",
            "de": "die Zulassung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-fachwortschatz",
      "t": "профессион+альная л+ексика",
      "pos": "noun",
      "gender": "f",
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
      "en": "specialist vocabulary",
      "de": "der Fachwortschatz",
      "examples": [
        {
          "t": "Во вр+емя пр+актики она расшир+яет сво+ю [[профессион+альную л+ексику]].",
          "de": "Im Praktikum erweitert sie ihren Fachwortschatz.",
          "en": "She is expanding her specialist vocabulary during the placement.",
          "sense": {
            "en": "specialist vocabulary",
            "de": "der Fachwortschatz"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-handwerklich",
      "t": "рем+есленный",
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
      "en": "manual",
      "de": "handwerklich",
      "examples": [
        {
          "t": "Для +этой зад+ачи н+ужны [[рем+есленные]] нав+ыки.",
          "de": "Diese Aufgabe erfordert handwerkliche Fähigkeiten.",
          "en": "This task requires manual skills.",
          "sense": {
            "en": "manual",
            "de": "handwerklich"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-lernbereit",
      "t": "гот+овый уч+иться",
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
      "en": "willing to learn",
      "de": "lernbereit",
      "examples": [
        {
          "t": "Мы +ищем люд+ей, кот+орые любозн+ательны и [[гот+овы уч+иться]].",
          "de": "Wir suchen Menschen, die neugierig und lernbereit sind.",
          "en": "We are looking for people who are curious and willing to learn.",
          "sense": {
            "en": "willing to learn",
            "de": "lernbereit"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-absolvieren",
      "t": "пройт+и",
      "pos": "verb",
      "aspect": "pf",
      "forms": {
        "praes": "пройд+у, пройдёшь",
        "praet": "прошёл",
        "perf": "impf. проход+ить"
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
      "en": "complete",
      "de": "absolvieren",
      "examples": [
        {
          "t": "Она [[прошл+а]] курс по бухг+алтерскому учёту.",
          "de": "Sie hat einen Lehrgang zur Buchhaltung absolviert.",
          "en": "She has completed a bookkeeping course.",
          "sense": {
            "en": "complete",
            "de": "absolvieren"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_travel",
  "items": [
    {
      "id": "ru-telc26-buchungsbestaetigung",
      "t": "подтвержд+ение брон+ирования",
      "pos": "noun",
      "gender": "n",
      "plural": "подтвержд+ения брон+ирования",
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
      "en": "booking confirmation",
      "de": "die Buchungsbestätigung",
      "examples": [
        {
          "t": "[[Подтвержд+ение брон+ирования]] содерж+ит +адрес гост+иницы для конфер+енции.",
          "de": "Die Buchungsbestätigung enthält die Adresse des Tagungshotels.",
          "en": "The booking confirmation contains the conference hotel’s address.",
          "sense": {
            "en": "booking confirmation",
            "de": "die Buchungsbestätigung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-fahrgemeinschaft",
      "t": "совм+естные по+ездки на маш+ине",
      "pos": "noun",
      "gender": "pl",
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
      "en": "carpool",
      "de": "die Fahrgemeinschaft",
      "examples": [
        {
          "t": "Для по+ездки на в+ыставку мы организ+уем [[совм+естные по+ездки на маш+ине]].",
          "de": "Für die Fahrt zur Messe bilden wir eine Fahrgemeinschaft.",
          "en": "We are forming a carpool for the trip to the trade fair.",
          "sense": {
            "en": "carpool",
            "de": "die Fahrgemeinschaft"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "совм+естные по+ездки на маш+ине"
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_psyche",
  "items": [
    {
      "id": "ru-telc26-belastbar",
      "t": "стрессоуст+ойчивый",
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
      "en": "resilient",
      "de": "belastbar",
      "examples": [
        {
          "t": "Д+аже в напр+яжённые пери+оды она остаётся [[стрессоуст+ойчивой]].",
          "de": "Auch in hektischen Phasen bleibt sie belastbar.",
          "en": "She remains resilient even during hectic periods.",
          "sense": {
            "en": "resilient",
            "de": "belastbar"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_relations",
  "items": [
    {
      "id": "ru-telc26-angemessen",
      "t": "ум+естный",
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
      "en": "appropriate",
      "de": "angemessen",
      "examples": [
        {
          "t": "В +этой ситу+ации спок+ойный отв+ет [[ум+естен]].",
          "de": "In dieser Situation ist eine ruhige Antwort angemessen.",
          "en": "In this situation, a calm reply is appropriate.",
          "sense": {
            "en": "appropriate",
            "de": "angemessen"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "words",
  "topic": "b2_science",
  "items": [
    {
      "id": "ru-telc26-verallgemeinern",
      "t": "обобщ+ать",
      "pos": "verb",
      "aspect": "impf",
      "forms": {
        "praes": "обобщ+аю, обобщ+аешь",
        "praet": "обобщ+ал",
        "perf": "pf. обобщ+ить"
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
      "en": "generalise",
      "de": "verallgemeinern",
      "examples": [
        {
          "t": "Не ст+оит ср+азу [[обобщ+ать]] отд+ельные сл+учаи.",
          "de": "Wir sollten einzelne Erfahrungen nicht sofort verallgemeinern.",
          "en": "We should not immediately generalise from individual experiences.",
          "sense": {
            "en": "generalise",
            "de": "verallgemeinern"
          }
        }
      ]
    }
  ]
});
