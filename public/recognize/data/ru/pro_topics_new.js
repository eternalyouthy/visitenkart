/* RUSSIAN Professional · 5 new cross-discipline & modern tech topics (12 per topic × 5 topics = 60 cards; B1, B2 and C1).
 * Topics: design, ai_data, product, clients, presentations.
 * Stress marked with "+" before the stressed vowel (never before ё). Checked against inventory for zero duplicates.
 * Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) {
    return { id: 'ru-pro4-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function V(id, t, aspect, level, forms, en, de, e, note) {
    return { id: 'ru-pro4-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: nt(note) };
  }
  function A(id, pos, t, level, en, de, e, note) {
    return { id: 'ru-pro4-' + id, pos: pos, t: t, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  /* ── 05 · Дизайн, UX и визуал ────────────────────────────────────────────── */
  reg('design', [
    N('tipografika', 'типогр+афика', 'f', 'B2', 'typography', 'die Typografie',
      ex('Аккур+атная [[типогр+афика]] д+елает д+аже сл+ожный дашб+орд спок+ойным и чит+аемым.', 'Clean typography makes even a complex dashboard calm and easy to scan.', 'Saubere Typografie macht selbst ein komplexes Dashboard ruhig und lesbar.'),
      ['Stress on -а- (типогра́фика); uncountable feminine noun.', 'Betonung auf a (типогра́фика); unzählbares Femininum.']),
    N('palitra', 'пал+итра', 'f', 'B1', 'colour palette', 'die Farbpalette',
      ex('Для б+азовой [[пал+итры]] мы в+ыбрали дв+а нейтр+альных т+она и од+ин акц+ентный цвет.', 'For the base palette we picked two neutral tones and one accent colour.', 'Für die Grundpalette haben wir zwei neutrale Töne und eine Akzentfarbe gewählt.'),
      ['Covers both painting palettes and UI brand colour systems.', 'Steht für Farbpaletten beim Malen ebenso wie für Farbschemata im UI-Design.']),
    N('kontrast', 'контр+аст', 'm', 'B1', 'contrast', 'der Kontrast',
      ex('Пров+ерь [[контр+аст]] м+ежду т+екстом и ф+оном на кн+опках.', 'Check the contrast between text and background on the buttons.', 'Prüfe den Kontrast zwischen Text und Hintergrund auf den Buttons.'),
      ['Adjective: контр+астный (high-contrast); contrast between A and B = между + Instr.', 'Adjektiv: контр+астный; Konstruktion: контр+аст м+ежду + Instrumental.']),
    N('maket', 'мак+ет', 'm', 'B1', 'layout, mockup', 'das Layout, der Entwurf',
      ex('Обновлённый [[мак+ет]] гл+авной стран+ицы уж+е ждёт одобр+ения.', 'The updated homepage mockup is already waiting for approval.', 'Das aktualisierte Layout der Startseite wartet schon auf Freigabe.'),
      ['Universal Russian design word for UI mockups, page layouts, and print dummies.', 'Zentrales Wort für UI-Entwürfe, Seitenlayouts und Druckmodelle.']),
    N('otstup', '+отступ', 'm', 'B2', 'margin, padding, spacing, whitespace', 'der Abstand, der Weißraum',
      ex('Ед+иные [[+отступы]] вокр+уг к+арточек ср+азу нав+одят пор+ядок на экр+ане.', 'Consistent spacing around cards immediately brings order to the screen.', 'Einheitliche Abstände rund um Karten schaffen sofort Ordnung auf dem Bildschirm.'),
      ['Stress falls on the prefix (+отступ, plural +отступы); covers both margins and padding.', 'Betonung auf o (о́тступ, Pl. о́тступы); umfasst Margin und Padding.']),
    N('setka', 'с+етка', 'f', 'B2', 'grid, layout grid', 'das Raster, das Grid',
      ex('Все бл+оки выр+авниваются по двенадцатикол+оночной [[с+етке]].', 'All blocks align to a twelve-column grid.', 'Alle Blöcke richten sich an einem Zwölf-Spalten-Raster aus.'),
      ['Also means “mesh/net”; modular design grid = м+одульная с+етка.', 'Bedeutet auch Netz/Gitter; im Design meist м+одульная с+етка (= Gestaltungsraster).']),
    N('prototip', 'протот+ип', 'm', 'B2', 'prototype', 'der Prototyp',
      ex('П+еред разраб+откой мы тест+ируем клик+абельный [[протот+ип]] с п+ользователями.', 'Before engineering starts, we test a clickable prototype with users.', 'Vor der Entwicklung testen wir einen klickbaren Prototyp mit Nutzern.'),
      ['Regular masculine declension in Russian (unlike German weak noun des Prototypen).', 'Normale maskuline Deklination (anders als dt. schwach dekliniertes Prototypen).']),
    N('chitaemost', 'чит+аемость', 'f', 'B2', 'readability, legibility', 'die Lesbarkeit',
      ex('Сл+ишком м+елкий кегль с+ильно сниж+ает [[чит+аемость]] на телеф+оне.', 'Font sizes that are too small heavily reduce readability on phones.', 'Eine zu kleine Schriftgröße senkt die Lesbarkeit auf dem Handy stark.'),
      ['From чит+ать (“to read”) + -емость (“-ability”); covers both legibility and scanability.', 'Zu чит+ать („lesen“); im UI sowohl Leserlichkeit als auch Textverständlichkeit.']),
    N('uznavaemost', 'узнав+аемость', 'f', 'C1', 'recognition, brand recall', 'der Wiedererkennungswert',
      ex('Лакон+ичный знак созд+ал выс+окую [[узнав+аемость]] бр+енда.', 'The minimalist emblem created strong brand recognition.', 'Das schlichte Zeichen schuf einen hohen Wiedererkennungswert der Marke.'),
      ['From узнав+ать (“to recognise”), literally “recognisability”; key brand KPI.', 'Zu узнав+ать („wiedererkennen“); entspricht dt. Wiedererkennungswert.']),
    V('verstat', 'верст+ать', 'impf', 'B2', ['верст+аю, верст+аешь', 'верст+ал', 'pf. сверст+ать'], 'to lay out (pages/UI), build front-end HTML/CSS', 'layouten, setzen, umsetzen (HTML/CSS)',
      ex('Он+а ум+еет не т+олько рисов+ать в Figma, но и аккур+атно [[верст+ать]] адапт+ив.', 'She can not only design in Figma but also build clean responsive layouts.', 'Sie kann nicht nur in Figma gestalten, sondern auch sauber responsiv umsetzen.'),
      ['Classic publishing term now used for coding HTML/CSS layouts; noun: вёрстка.', 'Klassischer Satzbegriff, heute Standard für HTML/CSS-Umsetzung; Nomen: вёрстка.']),
    V('proektirovat', 'проект+ировать', 'impf', 'B2', ['проект+ирую, проект+ируешь', 'проект+ировал', 'pf. спроект+ировать'], 'to design (architecture, UX flows), engineer', 'entwerfen, konzipieren',
      ex('Мы нач+инаем [[проект+ировать]] н+овый интерф+ейс от ре+альных сцен+ариев.', 'We start designing the new interface around real user scenarios.', 'Wir beginnen, die neue Oberfläche ausgehend von echten Szenarien zu konzipieren.'),
      ['Means structural/UX engineering rather than styling; UX designer is often проект+ировщик.', 'Betont Konzeption/Struktur statt reiner Deko; UX-Architekt heißt проект+ировщик.']),
    A('intuitivny', 'adj', 'интуит+ивный', 'B1', 'intuitive', 'intuitiv',
      ex('П+осле перераб+отки навиг+ация ст+ала по-насто+ящему [[интуит+ивной]].', 'After the rework, navigation became genuinely intuitive.', 'Nach der Überarbeitung wurde die Navigation wirklich intuitiv.'),
      ['Frequently paired as интуит+ивно пон+ятный (“self-explanatory / intuitive to use”).', 'Oft verstärkt als интуит+ивно пон+ятный („selbsterklärend, sofort verständlich“).'])
  ]);

  /* ── 06 · ИИ, данные и аналитика ─────────────────────────────────────────── */
  reg('ai_data', [
    N('neyroset', 'нейрос+еть', 'f', 'B2', 'neural network', 'das neuronale Netz',
      ex('Комп+актная [[нейрос+еть]] распознаёт счет+а за сек+унды прям+о в бр+аузере.', 'A compact neural network recognises invoices in seconds right in the browser.', 'Ein kompaktes neuronales Netz erkennt Rechnungen in Sekunden direkt im Browser.'),
      ['Everyday Russian shorthand for искусственная нейронная сеть (feminine, ends in -ь).', 'Alltagsübliche Kurzform von нейронная сеть (Femininum, Genitiv нейрос+ети).']),
    N('vyborka', 'в+ыборка', 'f', 'B2', 'sample, dataset', 'die Stichprobe, der Datensatz',
      ex('Т+естовая [[в+ыборка]] должн+а отраж+ать ре+альных кли+ентов комп+ании.', 'The test dataset should reflect the company’s real customers.', 'Der Testdatensatz muss die echten Kunden des Unternehmens abbilden.'),
      ['From выбир+ать (“to select”); stress on prefix вы-: обучающая vs тестовая в+ыборка.', 'Zu выбир+ать („auswählen“); in Statistik und ML für Trainings-/Testdaten.']),
    N('metrika', 'м+етрика', 'f', 'B2', 'metric', 'die Metrik, die Kennzahl',
      ex('Гл+авная [[м+етрика]] +этого кварт+ала — вр+емя отв+ета подд+ержки.', 'This quarter’s primary metric is support response time.', 'Die Hauptmetrik dieses Quartals ist die Antwortzeit des Supports.'),
      ['Russian prefers м+етрика or показ+атель over KPI in spoken product discussions.', 'Im Produktalltag neben показ+атель („Kennzahl“) völlig eingebürgert.']),
    N('tochnost', 'т+очность', 'f', 'B2', 'accuracy, precision', 'die Genauigkeit',
      ex('Н+овая в+ерсия классифик+атора показ+ала [[т+очность]] в+ыше девян+оста проц+ентов.', 'The new version of the classifier achieved accuracy above ninety percent.', 'Die neue Version des Klassifikators erreichte eine Genauigkeit über neunzig Prozent.'),
      ['Used for both ML precision/accuracy and everyday punctuality.', 'Steht in ML für Genauigkeit/Präzision und im Alltag für Pünktlichkeit.']),
    N('predvzyatost', 'предвз+ятость', 'f', 'C1', 'bias, prejudice', 'die Voreingenommenheit, der Bias',
      ex('Перек+ос в арх+ивных отчётах в+ызвал [[предвз+ятость]] рекоменд+аций.', 'Skew in historical reports caused bias in the recommendations.', 'Eine Schieflage in historischen Berichten führte zu Voreingenommenheit in den Empfehlungen.'),
      ['Formal Russian equivalent of AI “bias”; adjective: предвз+ятый (biased).', 'Standardsprachliches Pendant zu „Bias“; Adjektiv: предвз+ятый (= voreingenommen).']),
    N('gallyutsinatsiya', 'галлюцин+ация', 'f', 'C1', 'hallucination (AI fabricated fact)', 'die Halluzination',
      ex('Пров+ерка по б+азе ср+азу л+овит [[галлюцин+ации]] языков+ой мод+ели.', 'Checking against the database catches language-model hallucinations immediately.', 'Der Abgleich mit der Datenbank fängt Halluzinationen des Sprachmodells sofort ab.'),
      ['Mostly used in plural for LLMs: борьб+а с галлюцинациями мод+ели.', 'Bei KI-Modellen meist im Plural gebraucht; Verb: галлюцин+ировать.']),
    N('prognoz', 'прогн+оз', 'm', 'B2', 'forecast, prediction', 'die Vorhersage, die Prognose',
      ex('Еженед+ельный [[прогн+оз]] спр+оса помог+ает не перезаполн+ять склад.', 'Weekly demand forecasting helps avoid overstocking the warehouse.', 'Die wöchentliche Nachfrageprognose hilft, das Lager nicht zu überfüllen.'),
      ['From Greek prognōsis (same root as German die Prognose); used in weather, finance, and ML.', 'Griechisches Lehnwort (wie dt. die Prognose); in Wetterbericht, Finanzwesen und ML.']),
    N('porog', 'пор+ог', 'm', 'C1', 'threshold', 'der Schwellenwert',
      ex('Мы сн+изили [[пор+ог]] сраб+атывания трев+оги, чт+обы не пропуст+ить сбой.', 'We lowered the alert threshold so we wouldn’t miss an outage.', 'Wir haben den Schwellenwert gesenkt, um keinen Ausfall zu verpassen.'),
      ['Literally “doorstep/threshold”; figuratively limit/cutoff (болевой пор+ог = pain threshold).', 'Wörtlich „Türschwelle“; übertragen Schwellenwert (auch болев+ой пор+ог = Schmerzgrenze).']),
    N('vybros', 'в+ыброс', 'm', 'C1', 'outlier (anomaly in data)', 'der Ausreißer',
      ex('Од+ин сб+ойный имп+орт дал р+езкий [[в+ыброс]] на гр+афике прод+аж.', 'One faulty import created a sharp outlier on the sales chart.', 'Ein fehlerhafter Import erzeugte einen scharfen Ausreißer im Verkaufsdiagramm.'),
      ['In statistics = outlier; plural в+ыбросы in ecology = emissions.', 'In Statistik „Ausreißer“, im Plural в+ыбросы oft auch „Emissionen / Ausstoß“.']),
    V('obuchat', 'обуч+ать', 'impf', 'B1', ['обуч+аю, обуч+аешь', 'обуч+ал', 'pf. обуч+ить'], 'to train (a model / staff)', 'trainieren, schulen',
      ex('Запрещен+о [[обуч+ать]] вн+ешние с+ервисы на закр+ытых докум+ентах кли+ентов.', 'It is forbidden to train external services on confidential client documents.', 'Es ist verboten, externe Dienste mit vertraulichen Kundendokumenten zu trainieren.'),
      ['Reflexive: обуч+аться (to learn / be trained); pre-trained = предобученная мод+ель.', 'Reflexiv: обуч+аться (= lernen / geschult werden); vortrainiert = предобученная.']),
    V('generirovat', 'генер+ировать', 'impf', 'B2', ['генер+ирую, генер+ируешь', 'генер+ировал', 'pf. сгенер+ировать'], 'to generate', 'generieren',
      ex('Скрипт ум+еет [[генер+ировать]] св+одку ош+ибок к+аждое +утро.', 'The script can generate an error digest every morning.', 'Das Skript kann jeden Morgen eine Fehlerzusammenfassung generieren.'),
      ['Biaspectual verb in Russian (-ировать), though сгенер+ировать often marks completion.', 'Typisches Verb auf -ировать; für abgeschlossene Handlung oft сгенер+ировать.']),
    A('vosproizvodimy', 'adj', 'воспроизвод+имый', 'C1', 'reproducible', 'reproduzierbar',
      ex('Надёжный бенчм+арк всегд+а даёт [[воспроизвод+имый]] результ+ат.', 'A reliable benchmark always produces a reproducible result.', 'Ein verlässlicher Benchmark liefert stets ein reproduzierbares Ergebnis.'),
      ['From воспроизвест+и (“to reproduce/play back”); noun: воспроизвод+имость.', 'Zu воспроизвод+ить („wiedergeben / reproduzieren“); Nomen: воспроизвод+имость.'])
  ]);

  /* ── 07 · Продукт и Agile ────────────────────────────────────────────────── */
  reg('product', [
    N('videnie', 'в+идение', 'n', 'B2', 'vision (product/strategic vision)', 'die Vision, die Produktvision',
      ex('+Общее [[в+идение]] прод+укта д+ержит все ком+анды на одн+ом к+урсе.', 'A shared product vision keeps all teams aligned in one direction.', 'Eine gemeinsame Produktvision hält alle Teams auf demselben Kurs.'),
      ['Watch the stress: в+идение (vision, concept) vs вид+ение (apparition).', 'Betonung auf der ersten Silbe: ви́дение (Konzept/Vision).']),
    N('auditoriya', 'аудит+ория', 'f', 'B1', 'audience, target audience', 'das Publikum, die Zielgruppe',
      ex('Целев+ая [[аудит+ория]] н+ашего с+ервиса — небольш+ие диз+айн-ст+удии.', 'The target audience of our service is small design studios.', 'Die Zielgruppe unseres Dienstes sind kleine Designstudios.'),
      ['False friend at universities: аудит+ория also means “lecture hall / classroom”.', 'Achtung an der Uni: аудит+ория bedeutet dort auch „Hörsaal / Seminarraum“!']),
    N('tsennost', 'ц+енность', 'f', 'B2', 'value (for the user / business)', 'der Mehrwert, der Nutzen',
      ex('К+аждая ф+ича должн+а нест+и пон+ятную [[ц+енность]] кон+ечному п+ользователю.', 'Every feature must deliver clear value to the end user.', 'Jedes Feature muss dem Endnutzer einen klaren Mehrwert bieten.'),
      ['From цен+а (“price”); ценностное предлож+ение translates “value proposition”.', 'Zu цен+а („Preis“); Produktbegriff ценностное предлож+ение = Wertversprechen.']),
    N('potrebnost', 'потр+ебность', 'f', 'B2', 'need, user need', 'das Bedürfnis, der Bedarf',
      ex('Интервь+ю помогл+и в+ыявить ре+альную [[потр+ебность]] в офл+айн-реж+име.', 'Interviews helped uncover a real need for offline mode.', 'Interviews halfen, einen echten Bedarf an einem Offline-Modus aufzudecken.'),
      ['Followed by в + Prepositional: потребность в + чём (need for something).', 'Präposition в + Präpositiv: потр+ебность в п+омощи (= Bedarf an Hilfe).']),
    N('konversiya', 'конв+ерсия', 'f', 'B2', 'conversion, conversion rate', 'die Konversion, die Konversionsrate',
      ex('Упрощённая анк+ета пов+ысила [[конв+ерсию]] регистр+ации на дв+адцать проц+ентов.', 'The simplified form boosted sign-up conversion by twenty percent.', 'Das vereinfachte Formular steigerte die Anmelde-Konversion um zwanzig Prozent.'),
      ['Product and marketing metric for turning visitors into users/buyers.', 'Produkt- und Marketingkennzahl für Umwandlungsraten (Anmeldung, Kauf).']),
    N('ottok', 'отт+ок', 'm', 'C1', 'churn, outflow (of users)', 'die Abwanderung, der Churn',
      ex('Б+ыстрый онб+ординг сн+изил [[отт+ок]] п+ользователей в п+ервую нед+елю.', 'Fast onboarding reduced user churn during the first week.', 'Schnelles Onboarding senkte die Nutzerabwanderung in der ersten Woche.'),
      ['Literally “outflow” (от- + течь); opposite of прит+ок (“inflow”).', 'Wörtlich „Abfluss“ (Gegenteil: прит+ок); üblich: отт+ок клиент+ов / капит+ала.']),
    N('uderzhanie', 'удерж+ание', 'n', 'B2', 'retention (of users/clients)', 'die Kundenbindung, die Retention',
      ex('Нам в+ажно не т+олько привлеч+ение, но и д+олгое [[удерж+ание]] кли+ентов.', 'Not only acquisition matters to us, but also long-term customer retention.', 'Uns ist nicht nur Neukundengewinnung wichtig, sondern auch langfristige Bindung.'),
      ['Standard pair in growth: привлеч+ение и удерж+ание (acquisition and retention).', 'Zu держ+ать („halten“); klassisches Paar: привлеч+ение und удерж+ание.']),
    N('prioritet', 'приорит+ет', 'm', 'B2', 'priority', 'die Priorität',
      ex('Без чёткого [[приорит+ета]] ком+анда хват+ается за всё ср+азу.', 'Without a clear priority, the team grabs everything at once.', 'Ohne klare Priorität stürzt sich das Team auf alles gleichzeitig.'),
      ['Masculine in Russian (unlike German die Priorität); set priorities = расст+авить приорит+еты.', 'Maskulinum (anders als dt. Femininum die Priorität); Verb: расст+авить приорит+еты.']),
    N('preimushchestvo', 'преим+ущество', 'n', 'B2', 'advantage, edge', 'der Vorteil, der Wettbewerbsvorteil',
      ex('Ск+орость раб+оты без интерн+ета — н+аше гл+авное [[преим+ущество]].', 'Speed without an internet connection is our main competitive advantage.', 'Geschwindigkeit ohne Internetverbindung ist unser größter Vorteil.'),
      ['Competitive advantage = конкур+ентное преимущество; adverb: преимущ+ественно (“mainly”).', 'Wettbewerbsvorteil = конкур+ентное преимущество; Adverb: преимущ+ественно.']),
    N('iteratsiya', 'итер+ация', 'f', 'C1', 'iteration', 'die Iteration',
      ex('К+аждая [[итер+ация]] заним+ает две нед+ели и зак+анчивается д+емо.', 'Each iteration lasts two weeks and ends with a demo.', 'Jede Iteration dauert zwei Wochen und endet mit einer Demo.'),
      ['Used for both Agile sprint cycles and programming loops.', 'Sowohl für agile Entwicklungszyklen als auch für Schleifen im Code.']),
    A('gibky', 'adj', 'г+ибкий', 'B1', 'agile, flexible', 'flexibel, agil',
      ex('[[Г+ибкий]] план позвол+яет б+ыстро мен+ять курс при н+овых д+анных.', 'An agile plan makes it easy to change course when new data arrives.', 'Ein agiler Plan erlaubt es, bei neuen Daten schnell umzusteuern.'),
      ['Describes both physical bendability and Agile schedules/methodology (г+ибкий график).', 'Sowohl physisch „biegsam“ als auch übertragen für flexible Arbeitszeiten und Agile.'])
  ]);

  /* ── 08 · Клиенты и фриланс ──────────────────────────────────────────────── */
  reg('clients', [
    N('zakazchik', 'зак+азчик', 'm', 'B1', 'client, customer (commissioning work)', 'der Auftraggeber',
      ex('[[Зак+азчик]] прос+ил присыл+ать промеж+уточный результ+ат к+аждую п+ятницу.', 'The client asked us to send interim progress every Friday.', 'Der Auftraggeber bat darum, jeden Freitag Zwischenstände zu schicken.'),
      ['Built from зак+аз (“order”); counterpart to подр+ядчик (“contractor”).', 'Zu зак+аз („Auftrag“); direktes Gegenstück zu подр+ядчик (= Auftragnehmer).']),
    N('smeta', 'см+ета', 'f', 'B2', 'cost estimate, budget breakdown', 'der Kostenvoranschlag',
      ex('Подр+обная [[см+ета]] пок+азывает кли+енту, за что он пл+атит.', 'A detailed cost estimate shows the client what they are paying for.', 'Ein detaillierter Kostenvoranschlag zeigt dem Kunden, wofür er bezahlt.'),
      ['Typical verb: сост+авить см+ету (“prepare a quote/budget estimate”).', 'Typisches Verb: сост+авить см+ету (einen Kostenvoranschlag aufstellen).']),
    N('pravka', 'пр+авка', 'f', 'B2', 'revision, edit, correction', 'die Korrektur, die Änderung',
      ex('В ст+оимость зал+ожены два кр+уга [[пр+авок]] п+осле п+ервого д+емо.', 'The fee covers two rounds of revisions after the first demo.', 'Im Preis sind zwei Korrekturschleifen nach der ersten Demo enthalten.'),
      ['Design/freelance keyword; usually plural: внест+и пр+авки (“apply revisions”).', 'Design- und Agenturwort; meist Plural: внест+и пр+авки (= Korrekturen einarbeiten).']),
    N('predoplata', 'предопл+ата', 'f', 'B1', 'advance payment, upfront deposit', 'die Vorauszahlung, die Anzahlung',
      ex('С н+овыми кли+ентами ст+удия раб+отает по [[предопл+ате]] тр+идцать проц+ентов.', 'With new clients the studio works on a thirty-percent upfront deposit.', 'Bei Neukunden arbeitet das Studio mit dreißig Prozent Vorauszahlung.'),
      ['From пред- (“before”) + опл+ата (“payment”); take Dative after по: по предопл+ате.', 'Aus пред- („vor“) + опл+ата („Zahlung“); meist mit по + Dat.: по предопл+ате.']),
    N('stavka', 'ст+авка', 'f', 'B1', 'rate (hourly/day rate)', 'der Satz, der Stundensatz',
      ex('Часов+ая [[ст+авка]] растёт вм+есте с +опытом и портф+олио.', 'Your hourly rate grows along with your experience and portfolio.', 'Der Stundensatz steigt mit der Erfahrung und dem Portfolio.'),
      ['Also means “bank interest rate” or “bet”; part-time = раб+ота на полст+авки.', 'Bedeutet auch „Zinssatz / Wette“; Teilzeit = на полст+авки („auf halbe Stelle“).']),
    N('podryadchik', 'подр+ядчик', 'm', 'B2', 'contractor, vendor', 'der Auftragnehmer, der Dienstleister',
      ex('Надёжный [[подр+ядчик]] предупрежд+ает о сдв+иге ср+оков заран+ее.', 'A reliable contractor warns about schedule shifts in advance.', 'Ein zuverlässiger Auftragnehmer warnt vor Terminverschiebungen rechtzeitig.'),
      ['From подр+яд (“contracted job”); external agency/freelancer hired by a зак+азчик.', 'Zu подр+яд („Werkvertrag“); Gegenpart zu зак+азчик („Auftraggeber“).']),
    N('otsrochka', 'отср+очка', 'f', 'B2', 'deferral, payment grace period', 'der Zahlungsaufschub, die Fristverlängerung',
      ex('Кр+упные комп+ании ч+асто пр+осят [[отср+очку]] опл+аты на тр+идцать дней.', 'Large companies often ask for thirty-day payment terms.', 'Große Unternehmen bitten oft um dreißig Tage Zahlungsaufschub.'),
      ['From от- + срок (“deadline”); literally “pushing a due date further back”.', 'Aus от- + срок („Frist“); im Geschäftsleben meist „Zahlungsziel / Zahlungsaufschub“.']),
    N('gonorar', 'гонор+ар', 'm', 'B2', 'fee, honorarium (freelance payment)', 'das Honorar',
      ex('+Авторский [[гонор+ар]] обсужд+ается до подпис+ания техн+ического зад+ания.', 'The creator’s fee is agreed before signing the brief.', 'Das Honorar wird vor Unterzeichnung des Briefings vereinbart.'),
      ['End-stressed (-а́р) like German Honorar; standard for authors, designers, speakers.', 'Endbetonung wie dt. das Honorar (im Russ. Maskulinum); üblich für Kreative.']),
    N('tender', 'т+ендер', 'm', 'B2', 'tender, competitive bid', 'die Ausschreibung',
      ex('Аг+ентство в+ыиграло кр+упный [[т+ендер]] на редиз+айн порт+ала.', 'The agency won a major tender to redesign the portal.', 'Die Agentur gewann eine große Ausschreibung für den Portal-Relaunch.'),
      ['Pronounced with hard т [tɛ]; verbs: объяв+ить / в+ыиграть т+ендер.', 'Aussprache mit hartem [tɛ]; Verben: объяв+ить (= ausschreiben) / в+ыиграть.']),
    V('otsenivat', 'оц+енивать', 'impf', 'B1', ['оц+ениваю, оц+ениваешь', 'оц+енивал', 'pf. оцен+ить'], 'to estimate, evaluate, price', 'schätzen, kalkulieren, bewerten',
      ex('В+ажно тр+езво [[оц+енивать]] трудозатр+аты до ст+арта про+екта.', 'It is important to estimate effort realistically before the project starts.', 'Es ist wichtig, den Aufwand vor Projektstart realistisch zu kalkulieren.'),
      ['From цен+а (“price/worth”); covers scoping time/cost and grading performance.', 'Zu цен+а („Preis/Wert“); bedeutet Aufwand kalkulieren sowie Leistung bewerten.']),
    A('obyazatelny', 'adj', 'обяз+ательный', 'B2', 'mandatory, binding', 'verbindlich, verpflichtend',
      ex('Подп+исанный догов+ор им+еет [[обяз+ательную]] юрид+ическую с+илу.', 'A signed contract has binding legal force.', 'Ein unterzeichneter Vertrag hat verbindliche Rechtskraft.'),
      ['For people also means “dependable/always keeps promises”; opposite: необязательный.', 'Auf Personen bezogen auch „zuverlässig, verbindlich“; Gegenteil: необязательный.']),
    A('prozrachny', 'adj', 'прозр+ачный', 'B1', 'transparent', 'transparent',
      ex('[[Прозр+ачная]] ст+оимость усл+уг ср+азу сниж+ает числ+о сп+оров.', 'Transparent service pricing immediately reduces disputes.', 'Transparente Preise reduzieren Rückfragen und Streitpunkte sofort.'),
      ['Used both literally (glass/PNG background) and figuratively (clear pricing & processes).', 'Sowohl wörtlich (Glas) als auch übertragen für transparente Preise und Abläufe.']),
  ]);

  /* ── 09 · Презентации и питчинг ──────────────────────────────────────────── */
  reg('presentations', [
    N('slayd', 'слайд', 'm', 'B1', 'slide (presentation)', 'die Folie',
      ex('Ост+авь на [[сл+айде]] одн+у ц+ифру и одн+у гл+авную мысль.', 'Leave one number and one core takeaway on the slide.', 'Lass auf der Folie nur eine Zahl und eine klare Kernaussage stehen.'),
      ['Single syllable word: no stress mark in base form (слайд); plural: сл+айды.', 'Einsilbig (слайд); im Plural betont auf a: сла́йды.']),
    N('tezis', 'т+езис', 'm', 'B2', 'thesis, talking point', 'die These, der Kernpunkt',
      ex('Сформул+ируй гл+авный [[т+езис]] выступл+ения в двух предлож+ениях.', 'Formulate the main talking point of your talk in two sentences.', 'Formuliere den Hauptpunkt deines Vortrags in zwei Sätzen.'),
      ['Stress on first vowel (те́зис); plural т+езисы also means conference abstracts.', 'Erstbetonung (те́зис); im Plural т+езисы oft auch „Thesenpapier / Abstract“.']),
    N('vystuplenie', 'выступл+ение', 'n', 'B1', 'talk, speech, presentation', 'der Vortrag, der Auftritt',
      ex('Репет+иция помог+ает улож+ить [[выступл+ение]] в жёсткий т+айминг.', 'Rehearsing helps fit your talk into a tight schedule.', 'Proben hilft, den Vortrag in den engen Zeitplan zu packen.'),
      ['Broad term covering speeches, stage performances, and tech talks; verb: выступ+ать.', 'Umfasst Vorträge, Bühnenauftritte und Konferenz-Talks; Verb: выступ+ать.']),
    N('vozrazhenie', 'возраж+ение', 'n', 'B2', 'objection, counter-argument', 'der Einwand',
      ex('Спок+ойно в+ыслушай [[возраж+ение]] инв+естора, пр+ежде чем сп+орить.', 'Listen calmly to the investor’s objection before arguing back.', 'Höre dir den Einwand des Investors ruhig an, bevor du antwortest.'),
      ['Common sales phrase: отраб+отка возраж+ений (handling objections); verb: возраж+ать.', 'Vertriebsbegriff: отраб+отка возраж+ений (= Einwandbehandlung); Verb: возраж+ать.']),
    N('volnenie', 'волн+ение', 'n', 'B2', 'nervousness, stage fright', 'die Aufregung, das Lampenfieber',
      ex('Глуб+окий вдох п+еред нач+алом сним+ает [[волн+ение]] за п+ару сек+унд.', 'A deep breath before starting relieves nervousness in a couple of seconds.', 'Ein tiefer Atemzug vor dem Start nimmt das Lampenfieber in Sekunden.'),
      ['From волн+а (“wave”), literally “inner turbulence”; overcome nerves = справ+иться с волн+ением.', 'Zu волн+а („Welle“), wörtlich „innere Bewegung“; Typisch: справ+иться с волн+ением.']),
    N('prizyv', 'приз+ыв', 'm', 'B2', 'call (e.g. call to action)', 'der Aufruf, die Aufforderung',
      ex('Зак+анчивай питч чётким [[приз+ывом]] к сл+едующему ш+агу.', 'Finish your pitch with a clear call to the next step.', 'Beende den Pitch mit einem klaren Aufruf zum nächsten Schritt.'),
      ['Product/UX term: приз+ыв к д+ействию (CTA); in civic life also means conscription.', 'In Marketing/UX: приз+ыв к д+ействию (= Handlungsaufforderung).']),
    N('diagramma', 'диагр+амма', 'f', 'B1', 'chart, diagram', 'das Diagramm, das Schaubild',
      ex('+Эта [[диагр+амма]] нагл+ядно пок+азывает рост ежем+есячной в+ыручки.', 'This chart visually shows monthly revenue growth.', 'Dieses Diagramm zeigt anschaulich das monatliche Umsatzwachstum.'),
      ['Feminine in Russian (-а), whereas German das Diagramm is neuter.', 'Im Russischen Femininum (она), anders als deutsches Neutrum das Diagramm.']),
    N('reglament', 'регл+амент', 'm', 'B2', 'time limit, rules of procedure', 'die Zeitvorgabe, die Geschäftsordnung',
      ex('У нас жёсткий [[регл+амент]]: пять мин+ут на докл+ад и три на вопр+осы.', 'We have a strict time limit: five minutes for the pitch and three for Q&A.', 'Wir haben eine strenge Zeitvorgabe: fünf Minuten Vortrag und drei für Fragen.'),
      ['Stay within time limit = улож+иться в регл+амент / соблюд+ать регл+амент.', 'Zeitrahmen einhalten = улож+иться в регл+амент / соблюд+ать регл+амент.']),
    V('illyustrirovat', 'иллюстр+ировать', 'impf', 'B2', ['иллюстр+ирую, иллюстр+ируешь', 'иллюстр+ировал', 'pf. проиллюстр+ировать'], 'to illustrate (with examples/visuals)', 'veranschaulichen, illustrieren',
      ex('Пол+езно [[иллюстр+ировать]] к+аждую ц+ифру кор+отким к+ейсом кли+ента.', 'It helps to illustrate each number with a short client case.', 'Es hilft, jede Zahl mit einem kurzen Kundenbeispiel zu veranschaulichen.'),
      ['Object in Accusative + example in Instrumental (иллюстрировать мысль примером).', 'Akkusativ + Instrumental: иллюстрировать что чем (= etwas mit etwas veranschaulichen).']),
    V('podytozhit', 'подыт+ожить', 'pf', 'B1', ['подыт+ожу, подыт+ожишь', 'подыт+ожил', 'impf. подыт+оживать'], 'to summarise, wrap up', 'zusammenfassen',
      ex('В конц+е остаётся к+оротко [[подыт+ожить]] три гл+авных аргум+ента.', 'At the end, all that remains is to briefly summarise the three main arguments.', 'Am Ende bleibt nur, die drei Hauptargumente kurz zusammenzufassen.'),
      ['From под + ит+ог (“under the total”); notice spelling change и → ы after hard под-!', 'Aus под + ит+ог („unterm Strich“); nach Konsonantenpräfix wird и zu ы: подыт+ожить.']),
    A('yomky', 'adj', 'ёмкий', 'C1', 'concise and rich in meaning, punchy', 'prägnant, gehaltvoll',
      ex('[[Ёмкий]] загол+овок ср+азу объясн+яет смысл всей с+ессии.', 'A punchy headline immediately explains the point of the whole session.', 'Eine prägnante Überschrift erklärt sofort den Sinn der gesamten Sitzung.'),
      ['Also means “high-capacity” for memory/batteries alongside “concise & punchy” for text.', 'Bedeutet „prägnant/aussagekräftig“ bei Texten und „kapazitätsstark“ in der Technik.']),
    A('ubeditelny', 'adj', 'убед+ительный', 'B2', 'persuasive, convincing', 'überzeugend',
      ex('Жив+ая демонстр+ация прод+укта в+ыглядит гор+аздо [[убед+ительнее]] сух+их обещ+аний.', 'A live product demo looks far more convincing than dry promises.', 'Eine Live-Demo wirkt deutlich überzeugender als trockene Versprechen.'),
      ['From убед+ить (“to convince”); noun: убед+ительность (persuasiveness).', 'Zu убед+ить („überzeugen“); Substantiv: убед+ительность (= Überzeugungskraft).'])
  ]);
})();
