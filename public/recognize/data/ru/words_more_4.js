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
