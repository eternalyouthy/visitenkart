/* RUSSIAN Professional · fourth batch (70 new cards + 2 reused memberships across all 10 Pro topics; B1, B2 and C1).
 * Stress marked with "+" before the stressed vowel (never before ё; one-syllable words unmarked).
 * Checked against full Russian pack inventory for zero duplicates. Glosses & notes: en + de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) {
    return { id: 'ru-pro5-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function V(id, t, aspect, level, forms, en, de, e, note) {
    return { id: 'ru-pro5-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: nt(note) };
  }
  function A(id, pos, t, level, en, de, e, note) {
    return { id: 'ru-pro5-' + id, pos: pos, t: t, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  /* ── 01 · Дизайн, UX и визуал (8 new) ────────────────────────────────────── */
  reg('design', [
    N('interfeys', 'интерф+ейс', 'm', 'B1', 'user interface (UI)', 'die Benutzeroberfläche, das Interface',
      ex('Прост+ой [[интерф+ейс]] сократ+ил числ+о вопр+осов в подд+ержку вдв+ое.', 'A simple interface cut support questions in half.', 'Eine einfache Oberfläche halbierte die Supportanfragen.'),
      ['Everyday IT and UX term; user interface = п+ользовательский интерф+ейс.', 'Alltagsbegriff in IT und UX; Benutzeroberfläche = п+ользовательский интерф+ейс.']),
    N('shrift', 'шрифт', 'm', 'B1', 'font, typeface', 'die Schriftart, die Schrift',
      ex('Для табл+иц л+учше в+ыбрать [[шрифт]] с р+овными ц+ифрами.', 'For tables it is better to choose a font with aligned figures.', 'Für Tabellen wählt man besser eine Schriftart mit gleich breiten Ziffern.'),
      ['One-syllable masculine noun; the stress stays on the stem: шр+ифты, шр+ифтов.', 'Einsilbiges Maskulinum; die Betonung bleibt auf dem Stamm: шр+ифты, шр+ифтов.']),
    N('ierarhiya', 'иер+архия', 'f', 'B2', 'hierarchy (visual hierarchy)', 'die Hierarchie (visuelle Hierarchie)',
      ex('Чёткая визу+альная [[иер+архия]] ср+азу ведёт взгляд к гл+авной кн+опке.', 'Clear visual hierarchy immediately guides the eye to the main button.', 'Eine klare visuelle Hierarchie lenkt den Blick sofort zum Hauptbutton.'),
      ['Stress on -а- (иера́рхия); used for both layouts and company structure.', 'Betonung auf a (иера́рхия); gilt für Layouts wie für Firmenstrukturen.']),
    N('komponent', 'компон+ент', 'm', 'B2', 'component (UI component)', 'die Komponente',
      ex('Обнов+или +этот [[компон+ент]] в библиот+еке, и он измен+ился на всех экр+анах.', 'We updated this component in the library and it changed across every screen.', 'Wir aktualisierten diese Komponente in der Bibliothek, und sie änderte sich überall.'),
      ['Masculine in Russian (unlike German feminine die Komponente); plural: компон+енты.', 'Im Russischen Maskulinum (anders als dt. die Komponente); Plural: компон+енты.']),
    N('vyravnivanie', 'выр+авнивание', 'n', 'B2', 'alignment', 'die Ausrichtung',
      ex('Пров+ерь [[выр+авнивание]] загол+овков по л+евому кр+аю с+етки.', 'Check the alignment of headings to the left edge of the grid.', 'Prüfe die Ausrichtung der Überschriften am linken Rand des Rasters.'),
      ['From выр+авнивать (“to align”); left-aligned = выр+авнивание по л+евому кр+аю.', 'Zu выр+авнивать („ausrichten“); linksbündig = выр+авнивание по л+евому кр+аю.']),
    N('adaptivnost', 'адапт+ивность', 'f', 'B2', 'responsiveness (responsive design)', 'die Anpassungsfähigkeit, responsives Design',
      ex('Мы пров+ерили [[адапт+ивность]] к+арточек на +узком экр+ане телеф+она.', 'We checked the cards’ responsiveness on a narrow phone screen.', 'Wir prüften das responsive Verhalten der Karten auf einem schmalen Handybildschirm.'),
      ['In web design teams, responsive layout is often informally called адапт+ив.', 'In Webteams oft kurz адапт+ив für responsives Layout.']),
    N('navigatsiya', 'навиг+ация', 'f', 'B1', 'navigation (UI flow)', 'die Navigation, die Nutzerführung',
      ex('П+осле редиз+айна [[навиг+ация]] в прилож+ении ст+ала кор+оче на два ш+ага.', 'After the redesign, navigation in the app became two steps shorter.', 'Nach dem Redesign wurde die Navigation in der App zwei Schritte kürzer.'),
      ['Covers both app menus and GPS navigation.', 'Gilt für App-Menüs ebenso wie für GPS-Navigation.']),
    A('peregruzhenny', 'adj', 'перегр+уженный', 'B2', 'cluttered, overloaded (UI)', 'überladen, unübersichtlich',
      ex('Из-за л+ишних б+аннеров гл+авный экр+ан к+ажется [[перегр+уженным]].', 'Because of extra banners the home screen looks cluttered.', 'Wegen unnötiger Banner wirkt der Startbildschirm überladen.'),
      ['From перегруз+ить (“to overload”); describes both cluttered screens and busy schedules.', 'Zu перегруз+ить („überlasten“); für überladene Oberflächen wie für volle Zeitpläne.'])
  ]);

  /* ── 02 · ИИ, данные и аналитика (8 new + 1 reused) ──────────────────────── */
  GT.addMember('ru-w3-algoritm', 'it', 'ai_data');
  reg('ai_data', [
    N('dataset', 'датас+ет', 'm', 'B2', 'dataset', 'der Datensatz',
      ex('П+еред обуч+ением н+ужно оч+истить [[датас+ет]] от дублик+атов.', 'Before training we need to clean the dataset of duplicates.', 'Vor dem Training müssen wir den Datensatz von Duplikaten bereinigen.'),
      ['Standard ML loanword alongside наб+ор д+анных; masculine, plural датас+еты.', 'Gängiger ML-Begriff neben наб+ор д+анных; Maskulinum, Plural датас+еты.']),
    N('razmetka', 'разм+етка', 'f', 'B2', 'data labelling, annotation; markup', 'die Datenkennzeichnung, das Markup',
      ex('К+ачественная [[разм+етка]] д+анных занял+а две нед+ели.', 'High-quality data labelling took two weeks.', 'Die hochwertige Datenkennzeichnung dauerte zwei Wochen.'),
      ['Also means HTML/Markdown markup (яз+ык разм+етки); verb: разм+етить.', 'Bedeutet auch Auszeichnungssprache (HTML-Markup); Verb: разм+етить.']),
    N('zakonomernost', 'законом+ерность', 'f', 'B2', 'pattern, regularity', 'das Muster, die Gesetzmäßigkeit',
      ex('Мод+ель нашл+а скр+ытую [[законом+ерность]] в повед+ении покуп+ателей.', 'The model found a hidden pattern in customer behaviour.', 'Das Modell fand ein verstecktes Muster im Kaufverhalten.'),
      ['Compound of зак+он (“law”) + м+ера (“measure”); natural Russian equivalent of “pattern”.', 'Aus зак+он („Gesetz“) + м+ера („Maß“); natürliches russisches Pendant zu „Pattern“.']),
    N('pogreshnost', 'погр+ешность', 'f', 'C1', 'margin of error, inaccuracy', 'die Messabweichung, die Fehlertoleranz',
      ex('При так+ой м+алой в+ыборке [[погр+ешность]] расчёта сл+ишком велик+а.', 'With such a small sample, the margin of error is too large.', 'Bei einer so kleinen Stichprobe ist die Messabweichung zu groß.'),
      ['Standard statistical and engineering word for tolerable measurement error.', 'Fachbegriff in Statistik und Technik für statistische Abweichung / Fehlerbreite.']),
    N('dashbord', 'дашб+орд', 'm', 'B2', 'dashboard (analytics)', 'das Dashboard',
      ex('+Утром ком+анда открыв+ает [[дашб+орд]] с ключев+ыми м+етриками.', 'In the morning the team opens the dashboard with key metrics.', 'Morgens öffnet das Team das Dashboard mit den wichtigsten Kennzahlen.'),
      ['Everyday analytics term; formal Russian equivalent: пан+ель монит+оринга.', 'Alltagsüblicher Analytics-Begriff; formeller: пан+ель монит+оринга.']),
    N('analitika', 'анал+итика', 'f', 'B1', 'analytics', 'die Analytik, die Datenanalyse',
      ex('Продукт+овая [[анал+итика]] показ+ала, на как+ом ш+аге ух+одят п+ользователи.', 'Product analytics showed at which step users drop off.', 'Die Produktanalytik zeigte, bei welchem Schritt Nutzer abspringen.'),
      ['Uncountable feminine noun; an analyst is анал+итик (m.).', 'Unzählbares Femininum; der Analyst heißt анал+итик.']),
    V('obezlichivat', 'обезл+ичивать', 'impf', 'B2', ['обезл+ичиваю, обезл+ичиваешь', 'обезл+ичивал', 'pf. обезл+ичить'], 'to anonymise (data)', 'anonymisieren',
      ex('П+еред перед+ачей в тест мы обяз+ательно [[обезл+ичиваем]] б+азу кли+ентов.', 'Before handing it over to testing we always anonymise the customer database.', 'Vor der Übergabe an den Test anonymisieren wir stets die Kundendatenbank.'),
      ['Literally “remove the face/identity” (без + лиц+о); noun: обезл+ичивание.', 'Wörtlich „entpersönlichen“ (без + лиц+о); Substantiv: обезл+ичивание.']),
    V('klassifitsirovat', 'классифиц+ировать', 'impf', 'B2', ['классифиц+ирую, классифиц+ируешь', 'классифиц+ировал', 'pf. классифиц+ировать'], 'to classify', 'klassifizieren',
      ex('Нейрос+еть ум+еет [[классифиц+ировать]] обращ+ения по т+еме и ср+очности.', 'The neural network can classify requests by topic and urgency.', 'Das neuronale Netz kann Anfragen nach Thema und Dringlichkeit klassifizieren.'),
      ['Biaspectual verb (-ировать); often paired with по + Dative (по т+еме).', 'Zweiaspektiges Verb auf -ировать; häufig mit по + Dativ (по т+еме).'])
  ]);

  /* ── 03 · Продукт и Agile (8 new + 1 reused) ─────────────────────────────── */
  GT.addMember('ru-w3-kompromiss', 'it', 'product');
  reg('product', [
    N('dorozhnaya-karta', 'дор+ожная к+арта', 'f', 'B2', 'roadmap', 'die Roadmap, der Fahrplan',
      ex('Мы обнов+или [[дор+ожную к+арту]] прод+укта на сл+едующее полуг+одие.', 'We updated the product roadmap for the next half-year.', 'Wir haben die Produkt-Roadmap fürs nächste Halbjahr aktualisiert.'),
      ['Calque of “roadmap”; in IT teams people also say роудм+ап.', 'Lehnübersetzung von „Roadmap“; in IT-Teams hört man auch роудм+ап.']),
    N('beklog', 'бэкл+ог', 'm', 'B2', 'backlog', 'das Backlog, der Arbeitsvorrat',
      ex('К+аждую п+ятницу мы разбир+аем [[бэкл+ог]] и убир+аем устар+евшие зад+ачи.', 'Every Friday we groom the backlog and remove outdated tasks.', 'Jeden Freitag pflegen wir das Backlog und entfernen veraltete Aufgaben.'),
      ['Masculine Agile loanword; plural: бэкл+оги.', 'Maskuliner Agile-Anglizismus (im Unterschied zu dt. das Backlog).']),
    N('retrospektiva', 'ретроспект+ива', 'f', 'B2', 'retrospective (sprint retro)', 'die Retrospektive',
      ex('На [[ретроспект+иве]] мы договор+ились сократ+ить числ+о созв+онов.', 'At the retrospective we agreed to cut the number of calls.', 'In der Retrospektive einigten wir uns darauf, weniger Calls zu machen.'),
      ['In daily Agile speech often shortened to р+етро.', 'Im Agile-Alltag meist kurz р+етро genannt.']),
    N('gipoteza', 'гип+отеза', 'f', 'B2', 'hypothesis', 'die Hypothese',
      ex('П+еред разраб+откой мы провер+яем [[гип+отезу]] на прост+ом протот+ипе.', 'Before building, we test the hypothesis on a simple prototype.', 'Vor der Entwicklung prüfen wir die Hypothese an einem einfachen Prototyp.'),
      ['Typical verbs: выдв+инуть / пров+ерить / подтверд+ить гип+отезу.', 'Typische Verben: выдв+инуть (= aufstellen) / пров+ерить (= prüfen) гип+отезу.']),
    N('funktsional', 'функцион+ал', 'm', 'B2', 'functionality, feature set', 'der Funktionsumfang',
      ex('Б+азовый [[функцион+ал]] уж+е гот+ов, ост+ались т+олько настр+ойки +экспорта.', 'The core functionality is ready; only export settings remain.', 'Der Grundfunktionsumfang ist fertig, es fehlen nur noch Exporteinstellungen.'),
      ['Very common in Russian IT speech for “set of features”; formal written alternative: функцион+альность.', 'In der russischen IT-Sprache Standard für „Funktionsumfang“; förmlicher: функцион+альность.']),
    N('zapusk', 'з+апуск', 'm', 'B1', 'launch, rollout', 'der Start, die Markteinführung',
      ex('[[З+апуск]] н+ового тар+ифа заплан+ирован на нач+ало +осени.', 'The launch of the new plan is scheduled for early autumn.', 'Der Start des neuen Tarifs ist für Anfang Herbst geplant.'),
      ['Stress on first syllable (за́пуск); verb: запуск+ать / запуст+ить.', 'Erstbetonung (за́пуск); Verb: запуск+ать / запуст+ить (= starten / launchen).']),
    N('vovlechennost', 'вовлечённость', 'f', 'B2', 'engagement (user/employee engagement)', 'die Einbindung, das Engagement',
      ex('Кор+откие подск+азки пов+ысили [[вовлечённость]] н+овых п+ользователей.', 'Short tips increased new-user engagement.', 'Kurze Tipps steigerten das Engagement neuer Nutzer.'),
      ['Written with ё (always stressed); measures active participation in a product or team.', 'Mit stets betontem ё; misst aktive Nutzung oder Mitarbeiterbindung.']),
    V('vnedryat', 'внедр+ять', 'impf', 'B2', ['внедр+яю, внедр+яешь', 'внедр+ял', 'pf. внедр+ить'], 'to implement, roll out, adopt', 'einführen, umsetzen',
      ex('Мы начин+аем [[внедр+ять]] н+овую сист+ему учёта по одн+ому отд+елу в м+есяц.', 'We are rolling out the new tracking system one department per month.', 'Wir führen das neue Erfassungssystem Abteilung für Abteilung ein.'),
      ['Key business/IT verb for introducing new software or processes; noun: внедр+ение.', 'Zentrales IT-/Business-Verb für das Einführen neuer Systeme; Substantiv: внедр+ение.'])
  ]);

  /* ── 04 · Клиенты и фриланс (8 new) ──────────────────────────────────────── */
  reg('clients', [
    N('brif', 'бриф', 'm', 'B2', 'brief, project brief', 'das Briefing',
      ex('П+еред оц+енкой про+екта кли+ент заполн+яет кор+откий [[бриф]].', 'Before we quote the project, the client fills out a short brief.', 'Vor der Schätzung füllt der Kunde ein kurzes Briefing aus.'),
      ['One-syllable loanword (no stress mark in nominative singular); plural: бр+ифы.', 'Einsilbiges Lehnwort (ohne Akzentzeichen im Nom. Sg.); Plural: бр+ифы.']),
    N('tz', 'техн+ическое зад+ание', 'n', 'B2', 'specification, statement of work (SOW)', 'das Lastenheft, die Spezifikation',
      ex('Все тр+ебования к диз+айну и ср+окам мы фикс+ируем в [[техн+ическом зад+ании]].', 'We lock in all design and timeline requirements in the specification.', 'Alle Anforderungen an Design und Fristen halten wir im Lastenheft fest.'),
      ['Almost always abbreviated to ТЗ (тэ-з+э) in Russian workplace speech.', 'Im russischen Arbeitsalltag fast immer als ТЗ (тэ-зэ) abgekürzt.']),
    N('nda', 'соглаш+ение о неразглаш+ении', 'n', 'C1', 'non-disclosure agreement (NDA)', 'die Geheimhaltungsvereinbarung (NDA)',
      ex('До получ+ения д+оступа к к+оду мы подп+исываем [[соглаш+ение о неразглаш+ении]].', 'Before getting access to the code we sign a non-disclosure agreement.', 'Vor dem Zugriff auf den Code unterschreiben wir eine Geheimhaltungsvereinbarung.'),
      ['Formal Russian legal term; in IT teams people also say NDA (эн-ди-+эй).', 'Förmlicher Rechtsbegriff; in IT-Teams sagt man auch einfach NDA.']),
    N('akt-priyomki', 'акт приёмки', 'm', 'B2', 'acceptance certificate, sign-off report', 'das Abnahmeprotokoll',
      ex('П+осле подпис+ания [[+акта приёмки]] бухгалт+ерия опл+ачивает счёт.', 'After signing the acceptance report, accounting pays the invoice.', 'Nach Unterzeichnung des Abnahmeprotokolls begleicht die Buchhaltung die Rechnung.'),
      ['Key freelance/agency document confirming the client accepts delivered work.', 'Wichtiges Abrechnungsdokument, mit dem der Kunde die Leistung abnimmt.']),
    N('dorabotka', 'дораб+отка', 'f', 'B2', 'rework, refinement, follow-up edit', 'die Nachbesserung, die Überarbeitung',
      ex('Отпр+авили мак+ет на небольш+ую [[дораб+отку]] п+осле коммент+ариев кли+ента.', 'We sent the mockup back for minor rework after the client’s comments.', 'Wir gaben das Layout nach dem Kundenfeedback zur kleinen Nachbesserung zurück.'),
      ['From дораб+отать; very common phrase: отпр+авить на дораб+отку.', 'Zu дораб+отать; häufige Wendung: отпр+авить на дораб+отку (= zur Nachbesserung schicken).']),
    N('prosrochka', 'проср+очка', 'f', 'B2', 'overdue period, late payment/delivery', 'der Verzug, die Fristüberschreitung',
      ex('За [[проср+очку]] опл+аты б+олее м+есяца в догов+оре предусм+отрен штраф.', 'The contract sets a penalty for payment overdue by more than a month.', 'Für Zahlungsverzug von über einem Monat sieht der Vertrag eine Gebühr vor.'),
      ['From про- + срок (“past the deadline”); also colloquial for expired food.', 'Aus про- + срок („über die Frist“); umgangssprachlich auch abgelaufene Lebensmittel.']),
    A('fiksirovanny', 'adj', 'фикс+ированный', 'B2', 'fixed (flat fee, fixed rate)', 'fest, pauschal',
      ex('Мы договор+ились о [[фикс+ированной]] с+умме за весь ауд+ит.', 'We agreed on a fixed flat fee for the entire audit.', 'Wir einigten uns auf eine feste Pauschale für das gesamte Audit.'),
      ['Fixed flat fee = фикс+ированная опл+ата / с+умма; opposite: почасов+ая опл+ата.', 'Pauschalbetrag = фикс+ированная с+умма; Gegenteil: почасов+ая опл+ата.']),
    A('orientirovochny', 'adj', 'ориентир+овочный', 'B2', 'approximate, non-binding (estimate)', 'unverbindlich, voraussichtlich',
      ex('Пок+а +это т+олько [[ориентир+овочная]] оц+енка — т+очную ц+ену назовём п+осле бр+ифа.', 'For now this is only a non-binding estimate — we’ll give the exact price after the brief.', 'Das ist erst eine unverbindliche Schätzung — den genauen Preis nennen wir nach dem Briefing.'),
      ['Adverb: ориентир+овочно (“roughly / around”); very common in client quotes.', 'Adverb: ориентир+овочно („ungefähr / voraussichtlich“); sehr häufig in Angeboten.'])
  ]);

  /* ── 05 · Презентации и питчинг (8 new) ────────────────────────────────── */
  reg('presentations', [
    N('struktura', 'структ+ура', 'f', 'B1', 'outline, structure (of a talk or document)', 'die Gliederung, die Struktur',
      ex('На втор+ом сл+айде я к+оротко пок+азываю [[структ+уру]] докл+ада.', 'On the second slide I briefly show the outline of the talk.', 'Auf der zweiten Folie zeige ich kurz die Gliederung des Vortrags.'),
      ['Used for slide outlines, documents, and code/company hierarchy.', 'Steht für Vortragsgliederung, Dokumentaufbau und Organisationsstruktur.']),
    N('zritelny-kontakt', 'зр+ительный конт+акт', 'm', 'B2', 'eye contact', 'der Blickkontakt',
      ex('Держ+и [[зр+ительный конт+акт]] с з+алом, а не чит+ай текст со сл+айдов.', 'Keep eye contact with the audience instead of reading text off the slides.', 'Halte Blickkontakt mit dem Publikum, statt den Text von den Folien abzulesen.'),
      ['Typical verb: держ+ать / подд+ерживать зр+ительный конт+акт.', 'Typische Verben: держ+ать / подд+ерживать зр+ительный конт+акт (= Blickkontakt halten).']),
    N('yazyk-tela', 'яз+ык т+ела', 'm', 'B2', 'body language', 'die Körpersprache',
      ex('Спок+ойный [[яз+ык т+ела]] помог+ает держ+аться ув+еренно во вр+емя сл+ожных вопр+осов.', 'Calm body language helps you stay confident during tough questions.', 'Ruhige Körpersprache hilft, bei schwierigen Fragen souverän zu bleiben.'),
      ['Literally “language of the body”; singular only.', 'Wörtlich „Sprache des Körpers“ (Genitiv т+ела zu т+ело).']),
    N('repetitsiya', 'репет+иция', 'f', 'B2', 'rehearsal', 'die Probe, die Generalprobe',
      ex('Одн+а [[репет+иция]] с т+аймером ср+азу пок+азывает л+ишние сл+айды.', 'One rehearsal with a timer immediately reveals unnecessary slides.', 'Eine Probe mit Timer zeigt sofort überflüssige Folien.'),
      ['Verb: репет+ировать; dress rehearsal = генер+альная репет+иция.', 'Verb: репет+ировать; Generalprobe = генер+альная репет+иция.']),
    N('argument', 'аргум+ент', 'm', 'B2', 'argument, supporting point', 'das Argument',
      ex('Гл+авный [[аргум+ент]] в п+ользу н+ового реш+ения — экон+омия вр+емени.', 'The main argument in favour of the new solution is saving time.', 'Das Hauptargument für die neue Lösung ist die Zeitersparnis.'),
      ['Always means a logical reason/point, NOT a quarrel (quarrel = сс+ора / спор).', 'Meint immer einen Sachgrund (wie dt. Argument), nicht „Streit“ (спор / сс+ора).']),
    N('vstuplenie', 'вступл+ение', 'n', 'B1', 'opening, introduction', 'der Einstieg, die Einleitung',
      ex('Сд+елай [[вступл+ение]] кор+отким и ср+азу обозн+ачь гл+авную пробл+ему.', 'Keep the opening short and state the main problem right away.', 'Halte den Einstieg kurz und benenne sofort das Hauptproblem.'),
      ['Opposite: заключ+ение (closing/conclusion); verb: вступ+ать.', 'Gegenteil: заключ+ение (= Schluss); auch „Beitritt“ (вступл+ение в клуб).']),
    V('podchyorkivat', 'подчёркивать', 'impf', 'B2', ['подчёркиваю, подчёркиваешь', 'подчёркивал', 'pf. подчеркн+уть'], 'to highlight, emphasise; to underline', 'hervorheben, betonen; unterstreichen',
      ex('В фин+але сп+икер всегд+а [[подчёркивает]] гл+авный результ+ат для б+изнеса.', 'At the end the speaker always highlights the main business result.', 'Zum Schluss hebt der Redner immer das wichtigste Geschäftsergebnis hervor.'),
      ['Literally “draw a line under” (под + черт+а); written with ё (no + mark needed).', 'Wörtlich „unterstreichen“ (под + черт+а); im Vortrag meist „hervorheben“.']),
    A('naglyadny', 'adj', 'нагл+ядный', 'B2', 'vivid, illustrative, visual', 'anschaulich',
      ex('[[Нагл+ядный]] прим+ер объясн+яет ид+ею быстр+ее дл+инной табл+ицы.', 'A vivid example explains the idea faster than a long table.', 'Ein anschauliches Beispiel erklärt die Idee schneller als eine lange Tabelle.'),
      ['Literally “right before the eyes”; adverb: нагл+ядно (“clearly / visually”).', 'Wörtlich „vor Augen“; entspricht genau dt. anschaulich.'])
  ]);

  /* ── 06 · Работа и офис (6 new) ──────────────────────────────────────────── */
  reg('workcomm', [
    N('rassylka', 'расс+ылка', 'f', 'B1', 'mailing list, newsletter, mass email', 'der Verteiler, der Newsletter',
      ex('Доб+авь мен+я, пож+алуйста, в [[расс+ылку]] с еженед+ельными отчётами.', 'Please add me to the mailing list for weekly reports.', 'Nimm mich bitte in den Verteiler für die Wochenberichte auf.'),
      ['From рассыл+ать (“send out to many”); covers mailing lists and marketing emails.', 'Zu рассыл+ать („versenden“); steht für E-Mail-Verteiler wie für Newsletter.']),
    N('nakladka', 'накл+адка', 'f', 'B2', 'scheduling clash, hiccup, overlap', 'die Terminkollision, die Panne',
      ex('Извин+и, в+ышла [[накл+адка]] в календар+е — дав+ай перенесём созв+он на час.', 'Sorry, there’s a calendar clash — let’s move the call by an hour.', 'Entschuldigung, es gab eine Terminkollision — lass uns den Call um eine Stunde schieben.'),
      ['Natural office word for double-booked slots or minor organizational mix-ups.', 'Sehr natürliches Bürowort für Terminüberschneidungen oder kleine Organisationspannen.']),
    N('poruchenie', 'поруч+ение', 'n', 'B2', 'assignment, delegated task, instruction', 'der Auftrag, die Anweisung',
      ex('Руковод+итель дал [[поруч+ение]] подгот+овить св+одку до четверг+а.', 'The manager gave an assignment to prepare a summary by Thursday.', 'Die Leitung erteilte den Auftrag, bis Donnerstag eine Übersicht vorzubereiten.'),
      ['More formal than зад+ача; verb: поруч+ить (to entrust/assign).', 'Förmlicher als зад+ача; Verb: поруч+ить (= beauftragen / anvertrauen).']),
    N('perepiska', 'переп+иска', 'f', 'B1', 'correspondence, email/chat thread', 'der Schriftverkehr, der Nachrichtenverlauf',
      ex('Подним+и [[переп+иску]] с кли+ентом — там б+ыли все соглас+ованные ср+оки.', 'Pull up the email thread with the client — all agreed deadlines were there.', 'Schau im Nachrichtenverlauf mit dem Kunden nach — dort standen alle vereinbarten Fristen.'),
      ['From переп+исываться (“correspond/message back and forth”); uncountable.', 'Zu переп+исываться („hin- und herschreiben“); meist Singular.']),
    V('delegirovat', 'делег+ировать', 'impf', 'B2', ['делег+ирую, делег+ируешь', 'делег+ировал', 'pf. делег+ировать'], 'to delegate', 'delegieren',
      ex('Когд+а ком+анда в+ыросла, н+ужно б+ыло науч+иться [[делег+ировать]] рут+ину.', 'When the team grew, it was necessary to learn to delegate routine work.', 'Als das Team wuchs, musste man lernen, Routineaufgaben zu delegieren.'),
      ['Biaspectual verb (-ировать); recipient takes Dative (делег+ировать колл+еге).', 'Zweiaspektiges Verb; Empfänger steht im Dativ (делег+ировать колл+еге).']),
    V('peresylat', 'пересыл+ать', 'impf', 'B1', ['пересыл+аю, пересыл+аешь', 'пересыл+ал', 'pf. пересл+ать (перешл+ю)'], 'to forward (an email, message, file)', 'weiterleiten',
      ex('Я сейч+ас [[перешл+ю]] теб+е письм+о от юр+истов.', 'I’ll forward you the email from legal right now.', 'Ich leite dir die E-Mail der Rechtsabteilung gleich weiter.'),
      ['Prefix пере- (“over/across”) + слать (“send”); also used for mailing parcels.', 'Präfix пере- + слать („senden“); für E-Mails, Chatnachrichten und Pakete.'])
  ]);

  /* ── 07 · Разработка (6 new) ─────────────────────────────────────────────── */
  reg('dev', [
    N('sborka', 'сб+орка', 'f', 'B2', 'build (software build); assembly', 'der Build, die Erstellung; die Montage',
      ex('П+осле посл+еднего комм+ита [[сб+орка]] уп+ала на т+естах.', 'After the latest commit the build failed on the tests.', 'Nach dem letzten Commit schlug der Build bei den Tests fehl.'),
      ['From собр+ать (“assemble/build”); covers CI builds and furniture/hardware assembly.', 'Zu собр+ать („zusammenbauen“); steht für Software-Builds und physische Montage.']),
    N('otladka', 'отл+адка', 'f', 'B2', 'debugging', 'das Debugging, die Fehlersuche',
      ex('Подр+обные л+оги ускор+яют [[отл+адку]] в н+есколько раз.', 'Detailed logs speed up debugging several times over.', 'Ausführliche Logs beschleunigen das Debugging um ein Vielfaches.'),
      ['From лад (“order/harmony”); verb: отл+аживать / отл+адить; debugger = отл+адчик.', 'Zu лад („Ordnung“); Verb: отл+аживать; Debugger = отл+адчик.']),
    N('otkat', 'отк+ат', 'm', 'B2', 'rollback (reverting a release)', 'der Rollback, das Zurücksetzen',
      ex('П+еред кр+упным рел+изом мы всегд+а гот+овим план [[отк+ата]].', 'Before a major release we always prepare a rollback plan.', 'Vor einem großen Release bereiten wir immer einen Rollback-Plan vor.'),
      ['Literally “rolling back” (от- + кат+ать); verb: откат+ить в+ерсию. (In business slang can also mean a kickback.)', 'Wörtlich „Zurückrollen“ (Verb: откат+ить); im Wirtschaftsjargon auch „Schmiergeld“.']),
    N('konfiguratsiya', 'конфигур+ация', 'f', 'B2', 'configuration, config', 'die Konfiguration',
      ex('Секр+етные ключ+и нельз+я хран+ить в ф+айле [[конфигур+ации]] в Git.', 'Secret keys must not be stored in a config file in Git.', 'Geheime Schlüssel dürfen nicht in einer Konfigurationsdatei in Git liegen.'),
      ['In developer speech often shortened to конф+иг (m.).', 'In Entwicklerteams oft abgekürzt als конф+иг (Maskulinum).']),
    N('dokumentatsiya', 'документ+ация', 'f', 'B1', 'documentation', 'die Dokumentation',
      ex('Акту+альная [[документ+ация]] экон+омит новичк+ам ц+елую нед+елю.', 'Up-to-date documentation saves newcomers a whole week.', 'Aktuelle Dokumentation spart neuen Teammitgliedern eine ganze Woche.'),
      ['Uncountable collective noun (feminine); informal IT shorthand: д+ока / д+оки.', 'Unzählbares Femininum; im IT-Jargon oft kurz д+ока / д+оки.']),
    V('kompilirovat', 'компил+ировать', 'impf', 'B2', ['компил+ирую, компил+ируешь', 'компил+ировал', 'pf. скомпил+ировать'], 'to compile', 'kompilieren',
      ex('П+осле обновл+ения библиот+еки про+ект перест+ал [[компил+ироваться]].', 'After updating the library the project stopped compiling.', 'Nach dem Bibliotheksupdate ließ sich das Projekt nicht mehr kompilieren.'),
      ['Reflexive компил+ироваться = “to compile (intransitive)”; compiler = компил+ятор.', 'Reflexiv компил+ироваться („sich kompilieren lassen“); Compiler = компил+ятор.'])
  ]);

  /* ── 08 · Инфраструктура (6 new) ─────────────────────────────────────────── */
  reg('infra', [
    N('peregruzka', 'перегр+узка', 'f', 'B2', 'overload (system, network, or work)', 'die Überlastung',
      ex('Из-за [[перегр+узки]] с+ервер перест+ал приним+ать н+овые запр+осы.', 'Because of overload the server stopped accepting new requests.', 'Wegen Überlastung nahm der Server keine neuen Anfragen mehr an.'),
      ['Applies to servers, power grids, and people at work; do not confuse with перезагр+узка (“reboot”).', 'Nicht verwechseln mit перезагр+узка („Neustart“)! Перегр+узка = Überlastung.']),
    N('poterya-dannyh', 'пот+еря д+анных', 'f', 'B2', 'data loss', 'der Datenverlust',
      ex('Регул+ярные рез+ервные к+опии защищ+ают от [[пот+ери д+анных]].', 'Regular backups protect against data loss.', 'Regelmäßige Backups schützen vor Datenverlust.'),
      ['From потер+ять (“to lose”) + д+анные (pl. Genitive: д+анных).', 'Aus пот+еря („Verlust“) + Genitiv Plural д+анных.']),
    N('kesh', 'кэш', 'm', 'B2', 'cache', 'der Cache, der Zwischenspeicher',
      ex('П+осле оч+истки [[к+эша]] стран+ица ст+ала открыв+аться мгнов+енно.', 'After clearing the cache the page started opening instantly.', 'Nach dem Leeren des Caches öffnete sich die Seite sofort.'),
      ['One-syllable masculine loanword (no + in base form); verb: кэш+ировать (to cache).', 'Einsilbiges Maskulinum; gebräuchlich: оч+истить кэш (= Cache leeren).']),
    N('uzel', '+узел', 'm', 'B2', 'node (cluster/network); knot', 'der Knoten (Cluster/Netzwerk); der Knoten (Seil)',
      ex('+Если од+ин [[+узел]] кл+астера вых+одит из стр+оя, нагр+узку бер+ут сос+едние.', 'If one cluster node fails, neighbouring nodes take the load.', 'Fällt ein Knoten im Cluster aus, übernehmen die Nachbarknoten die Last.'),
      ['Fleeting vowel -е- disappears in inflected forms: Gen. узл+а, Pl. узл+ы.', 'Flüchtiges e fällt aus: Genitiv узл+а, Plural узл+ы.']),
    N('trafik', 'тр+афик', 'm', 'B1', 'traffic (network/web traffic)', 'der Datenverkehr, der Traffic',
      ex('Балансир+овщик равном+ерно распредел+яет [[тр+афик]] по трём с+ерверам.', 'The load balancer distributes traffic evenly across three servers.', 'Der Loadbalancer verteilt den Datenverkehr gleichmäßig auf drei Server.'),
      ['Used for internet/network data and website visitors (not usually street traffic — that is движ+ение / пр+обки).', 'Für Netz- und Webverkehr (Straßenverkehr heißt движ+ение, Stau = пр+обка).']),
    V('perenapravlyat', 'перенаправл+ять', 'impf', 'B2', ['перенаправл+яю, перенаправл+яешь', 'перенаправл+ял', 'pf. перенапр+авить'], 'to reroute, redirect (traffic, requests)', 'umleiten',
      ex('При сб+ое сист+ема автомат+ически [[перенаправл+яет]] тр+афик в рез+ервный д+ата-центр.', 'During an outage the system automatically reroutes traffic to the backup data centre.', 'Bei einem Ausfall leitet das System den Verkehr automatisch ins Backup-Rechenzentrum um.'),
      ['Used for network redirects, HTTP routing, and forwarding calls/tickets.', 'Für Netzwerk-Routing, HTTP-Redirects sowie das Weiterleiten von Anfragen.'])
  ]);

  /* ── 09 · Безопасность (6 new) ───────────────────────────────────────────── */
  reg('security', [
    N('ugroza', 'угр+оза', 'f', 'B2', 'threat', 'die Bedrohung',
      ex('Ком+анда оцен+ила [[угр+озу]] и закр+ыла вн+ешний порт за д+есять мин+ут.', 'The team assessed the threat and closed the external port in ten minutes.', 'Das Team bewertete die Bedrohung und schloss den offenen Port in zehn Minuten.'),
      ['Used both in cybersecurity (мод+ель угр+оз = threat model) and everyday speech.', 'Sowohl in der IT-Sicherheit (мод+ель угр+оз = Bedrohungsmodell) als auch im Alltag.']),
    N('lozhnoe-srabatyvanie', 'л+ожное сраб+атывание', 'n', 'B2', 'false positive (security alert)', 'der Fehlalarm, das Falsch-Positiv',
      ex('Н+овые пр+авила сн+изили числ+о [[л+ожных сраб+атываний]] вдв+ое.', 'The new rules cut the number of false positives in half.', 'Die neuen Regeln halbierten die Zahl der Fehlalarme.'),
      ['Standard Russian SOC phrase for a false-positive alert.', 'Standardbegriff im russischen SOC für Fehlalarme / False Positives.']),
    N('povyshenie-privilegiy', 'повыш+ение привил+егий', 'n', 'C1', 'privilege escalation', 'die Rechteausweitung',
      ex('Уязв+имость позвол+яла [[повыш+ение привил+егий]] до прав администр+атора.', 'The vulnerability allowed privilege escalation to administrator rights.', 'Die Schwachstelle ermöglichte eine Rechteausweitung bis zu Adminrechten.'),
      ['Exact Russian AppSec/SOC equivalent of “privilege escalation”.', 'Genauer russischer Sicherheitsbegriff für Privilege Escalation / Rechteausweitung.']),
    N('vzlom', 'взлом', 'm', 'B1', 'hack, break-in, breach', 'der Hack, der Einbruch',
      ex('П+осле [[взл+ома]] почт+ового +ящика мы сбр+осили все пар+оли.', 'After the email account hack we reset all passwords.', 'Nach dem Hack des Postfachs setzten wir alle Passwörter zurück.'),
      ['One-syllable noun (no + mark in base form); verb: взл+амывать / взлом+ать.', 'Einsilbig (ohne Akzent im Nom. Sg.); Verb: взл+амывать / взлом+ать (= hacken / aufbrechen).']),
    N('programma-vymogatel', 'прогр+амма-вымог+атель', 'f', 'C1', 'ransomware', 'der Erpressungstrojaner, Ransomware',
      ex('[[Прогр+амма-вымог+атель]] зашифров+ала ф+айлы и потр+ебовала в+ыкуп.', 'Ransomware encrypted the files and demanded a ransom.', 'Ein Erpressungstrojaner verschlüsselte die Dateien und forderte Lösegeld.'),
      ['Feminine because the head noun is прогр+амма; informal IT shorthand: шифров+альщик.', 'Femininum nach прогр+амма; im IT-Alltag auch kurz шифров+альщик („Verschlüsseler“).']),
    V('blokirovat', 'блок+ировать', 'impf', 'B1', ['блок+ирую, блок+ируешь', 'блок+ировал', 'pf. заблок+ировать'], 'to block, lock (an account, IP, card)', 'blockieren, sperren',
      ex('При подозр+ительном вх+оде сист+ема ср+азу [[блок+ирует]] акк+аунт.', 'On a suspicious login the system immediately locks the account.', 'Bei einer verdächtigen Anmeldung sperrt das System das Konto sofort.'),
      ['Noun: блокир+овка (notice stress shift to -о-!); opposite: разблок+ировать.', 'Substantiv: блокир+овка (Betonung auf o!); Gegenteil: разблок+ировать (= entsperren).'])
  ]);

  /* ── 10 · B2 Мир работы (6 new) ──────────────────────────────────────────── */
  reg('b2_work', [
    N('stazhirovka', 'стажир+овка', 'f', 'B1', 'internship, traineeship', 'das Praktikum, das Traineeprogramm',
      ex('П+осле л+етней [[стажир+овки]] ег+о приглас+или в штат.', 'After the summer internship he was offered a permanent staff role.', 'Nach dem Sommerpraktikum wurde er fest angestellt.'),
      ['An intern is стажёр (m., written with ё); verb: стажиров+аться.', 'Praktikant / Trainee heißt стажёр; Verb: стажиров+аться.']),
    N('soprovoditelnoe', 'сопровод+ительное письм+о', 'n', 'B2', 'cover letter', 'das Anschreiben, das Bewerbungsschreiben',
      ex('В [[сопровод+ительном письм+е]] к+оротко объясн+и, почем+у теб+е интер+есна +эта роль.', 'In your cover letter briefly explain why this role interests you.', 'Erkläre im Anschreiben kurz, warum dich diese Stelle interessiert.'),
      ['Literally “accompanying letter” (submitted alongside a резюм+е).', 'Wörtlich „Begleitschreiben“; ergänzt den Lebenslauf (резюм+е).']),
    N('sverhurochnye', 'сверхур+очные', 'pl', 'B2', 'overtime (hours or pay)', 'die Überstunden',
      ex('По трудов+ому догов+ору [[сверхур+очные]] опл+ачиваются по двойн+ой ст+авке.', 'Under the employment contract, overtime is paid at double rate.', 'Laut Arbeitsvertrag werden Überstunden zum doppelten Satz bezahlt.'),
      ['Plural-only substantivised adjective (short for сверхур+очные час+ы).', 'Substantiviertes Adjektiv im Plural (kurz für сверхур+очные час+ы).']),
    N('otgul', 'отг+ул', 'm', 'B2', 'day off in lieu (comp time)', 'der Freizeitausgleich, der Ausgleichstag',
      ex('За раб+оту в субб+оту я взял [[отг+ул]] в п+ятницу.', 'For working on Saturday I took a day off in lieu on Friday.', 'Für die Samstagsarbeit nahm ich mir am Freitag einen Ausgleichstag.'),
      ['Everyday Russian HR/office term: взять отг+ул (take time off in lieu of overtime).', 'Alltagsüblicher Büro- und HR-Begriff: взять отг+ул (= Überstunden abfeiern).']),
    N('uchyot-vremeni', 'учёт раб+очего вр+емени', 'm', 'B2', 'time tracking, working-time recording', 'die Zeiterfassung',
      ex('В комп+ании ввел+и электр+онный [[учёт раб+очего вр+емени]].', 'The company introduced electronic time tracking.', 'Das Unternehmen führte eine elektronische Zeiterfassung ein.'),
      ['Masculine after учёт (written with ё, always stressed); formal HR & agency phrase.', 'Maskulinum nach учёт (stets betontes ё); Standardbegriff für Zeiterfassung.']),
    N('samozanyatost', 'самоз+анятость', 'f', 'B2', 'self-employment, freelance status', 'die Selbstständigkeit',
      ex('Он оф+ормил [[самоз+анятость]], чт+обы лег+ально раб+отать с зак+азчиками.', 'He registered for self-employment to work legally with clients.', 'Er meldete Selbstständigkeit an, um legal für Auftraggeber zu arbeiten.'),
      ['A self-employed freelancer is самоз+анятый (adj./noun); very common tax status in Russia.', 'Selbstständige Person = самоз+анятый; verbreiteter Freelancer-Status.'])
  ]);
})();

/* RECGZ content expansion 2026-11-26 — content only.
 * Editorial learning targets; original examples; permanent IDs. */
GT.register({
  "tab": "it",
  "topic": "bureau_offices",
  "items": [
    {
      "id": "ru-content26-office-razreshenie",
      "t": "разреш+ение",
      "level": "B2",
      "pos": "noun",
      "en": "permit",
      "de": "die Genehmigung",
      "examples": [
        {
          "t": "Для +этих раб+от тр+ебуется [[разреш+ение]].",
          "en": "A permit is required for this work.",
          "de": "Für diese Arbeiten ist eine Genehmigung erforderlich."
        }
      ],
      "gender": "n",
      "plural": "разреш+ения"
    },
    {
      "id": "ru-content26-office-vedomstvo",
      "t": "в+едомство",
      "level": "B2",
      "pos": "noun",
      "en": "public authority",
      "de": "die Behörde",
      "examples": [
        {
          "t": "+Это [[в+едомство]] отвеч+ает за в+ыдачу разреш+ений.",
          "en": "This public authority is responsible for issuing permits.",
          "de": "Diese Behörde ist für die Erteilung von Genehmigungen zuständig."
        }
      ],
      "gender": "n",
      "plural": "в+едомства"
    },
    {
      "id": "ru-content26-office-zayavitel",
      "t": "заяв+итель",
      "level": "B2",
      "pos": "noun",
      "en": "applicant",
      "de": "der Antragsteller",
      "examples": [
        {
          "t": "[[Заяв+итель]] д+олжен подпис+ать ф+орму л+ично.",
          "en": "The applicant must sign the form in person.",
          "de": "Der Antragsteller muss das Formular persönlich unterschreiben."
        }
      ],
      "gender": "m",
      "plural": "заяв+ители"
    },
    {
      "id": "ru-content26-office-polnomochie",
      "t": "полном+очие",
      "level": "C1",
      "pos": "noun",
      "en": "authority to act",
      "de": "die Befugnis",
      "examples": [
        {
          "t": "У +этого отд+ела есть [[полном+очие]] приним+ать реш+ение.",
          "en": "This department has the authority to make the decision.",
          "de": "Diese Abteilung hat die Befugnis, die Entscheidung zu treffen."
        }
      ],
      "gender": "n",
      "plural": "полном+очия"
    },
    {
      "id": "ru-content26-office-reshenie",
      "t": "администрат+ивное реш+ение",
      "level": "B2",
      "pos": "noun",
      "en": "administrative decision",
      "de": "der Verwaltungsakt",
      "examples": [
        {
          "t": "[[Администрат+ивное реш+ение]] напр+авили заяв+ителю п+очтой.",
          "en": "The administrative decision was sent to the applicant by post.",
          "de": "Der Verwaltungsakt wurde dem Antragsteller per Post zugestellt."
        }
      ],
      "gender": "n",
      "plural": "администрат+ивные реш+ения"
    },
    {
      "id": "ru-content26-office-obzhalovanie",
      "t": "обж+алование",
      "level": "C1",
      "pos": "noun",
      "en": "administrative appeal",
      "de": "der Widerspruch",
      "examples": [
        {
          "t": "Срок для [[обж+алования]] ук+азан в докум+енте.",
          "en": "The deadline for an administrative appeal is stated in the document.",
          "de": "Die Frist für den Widerspruch steht im Dokument."
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
  "tab": "it",
  "topic": "bureau_tax",
  "items": [
    {
      "id": "ru-content26-tax-deklaraciya",
      "t": "нал+оговая деклар+ация",
      "level": "B2",
      "pos": "noun",
      "en": "tax return",
      "de": "die Steuererklärung",
      "examples": [
        {
          "t": "Мо+я [[нал+оговая деклар+ация]] уж+е гот+ова.",
          "en": "My tax return is ready.",
          "de": "Meine Steuererklärung ist bereits fertig."
        }
      ],
      "gender": "f",
      "plural": "нал+оговые деклар+ации"
    },
    {
      "id": "ru-content26-tax-vychet",
      "t": "нал+оговый в+ычет",
      "level": "B2",
      "pos": "noun",
      "en": "tax deduction",
      "de": "der Steuerabzug",
      "examples": [
        {
          "t": "Бухг+алтер пров+ерит, примен+им ли +этот [[нал+оговый в+ычет]].",
          "en": "The accountant will check whether this tax deduction applies.",
          "de": "Der Buchhalter prüft, ob dieser Steuerabzug anwendbar ist."
        }
      ],
      "gender": "m",
      "plural": "нал+оговые в+ычеты"
    },
    {
      "id": "ru-content26-tax-baza",
      "t": "нал+оговая б+аза",
      "level": "B2",
      "pos": "noun",
      "en": "tax base",
      "de": "die Bemessungsgrundlage",
      "examples": [
        {
          "t": "[[Нал+оговая б+аза]] ук+азана в расчёте.",
          "en": "The tax base is stated in the calculation.",
          "de": "Die Bemessungsgrundlage ist in der Berechnung angegeben."
        }
      ],
      "gender": "f",
      "plural": "нал+оговые б+азы"
    },
    {
      "id": "ru-content26-tax-podohodny",
      "t": "подох+одный нал+ог",
      "level": "B2",
      "pos": "noun",
      "en": "income tax",
      "de": "die Einkommensteuer",
      "examples": [
        {
          "t": "В расчёте отд+ельно ук+азан [[подох+одный нал+ог]].",
          "en": "Income tax is shown separately in the calculation.",
          "de": "Die Einkommensteuer ist in der Berechnung gesondert ausgewiesen."
        }
      ],
      "gender": "m",
      "plural": "подох+одные нал+оги"
    },
    {
      "id": "ru-content26-tax-vznos",
      "t": "страхов+ой взнос",
      "level": "B2",
      "pos": "noun",
      "en": "social security contribution",
      "de": "der Sozialversicherungsbeitrag",
      "examples": [
        {
          "t": "[[Страхов+ой взнос]] отражён в расчётном листк+е.",
          "en": "The social security contribution is shown on the payslip.",
          "de": "Der Sozialversicherungsbeitrag steht auf der Gehaltsabrechnung."
        }
      ],
      "gender": "m",
      "plural": "страхов+ые взн+осы"
    },
    {
      "id": "ru-content26-tax-period",
      "t": "нал+оговый пер+иод",
      "level": "B2",
      "pos": "noun",
      "en": "tax period",
      "de": "der Besteuerungszeitraum",
      "examples": [
        {
          "t": "Для расчёта в+ажно пр+авильно указ+ать [[нал+оговый пер+иод]].",
          "en": "It is important to state the correct tax period for the calculation.",
          "de": "Für die Berechnung muss der richtige Besteuerungszeitraum angegeben werden."
        }
      ],
      "gender": "m",
      "plural": "нал+оговые пер+иоды"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "bureau_docs",
  "items": [
    {
      "id": "ru-content26-docs-pismo",
      "t": "заказн+ое письм+о",
      "level": "B2",
      "pos": "noun",
      "en": "registered letter",
      "de": "das Einschreiben",
      "examples": [
        {
          "t": "Мы отпр+авили [[заказн+ое письм+о]] и сохран+или квит+анцию.",
          "en": "We sent a registered letter and kept the receipt.",
          "de": "Wir haben ein Einschreiben verschickt und den Beleg aufbewahrt."
        }
      ],
      "gender": "n",
      "plural": "заказн+ые п+исьма"
    },
    {
      "id": "ru-content26-docs-uvedomlenie",
      "t": "уведомл+ение о вруч+ении",
      "level": "B2",
      "pos": "noun",
      "en": "acknowledgement of receipt",
      "de": "die Empfangsbestätigung",
      "examples": [
        {
          "t": "[[Уведомл+ение о вруч+ении]] подтвержд+ает получ+ение письм+а.",
          "en": "The acknowledgement of receipt confirms that the letter was received.",
          "de": "Die Empfangsbestätigung bestätigt den Erhalt des Briefes."
        }
      ],
      "gender": "n",
      "plural": "уведомл+ения о вруч+ении"
    },
    {
      "id": "ru-content26-docs-hranenie",
      "t": "срок хран+ения",
      "level": "B2",
      "pos": "noun",
      "en": "retention period",
      "de": "die Aufbewahrungsfrist",
      "examples": [
        {
          "t": "Для докум+ентов устан+овлен [[срок хран+ения]].",
          "en": "A retention period has been set for the documents.",
          "de": "Für die Dokumente ist eine Aufbewahrungsfrist festgelegt."
        }
      ],
      "gender": "m",
      "plural": "ср+оки хран+ения"
    },
    {
      "id": "ru-content26-docs-nomer",
      "t": "регистраци+онный н+омер",
      "level": "B2",
      "pos": "noun",
      "en": "reference number",
      "de": "das Aktenzeichen",
      "examples": [
        {
          "t": "Укаж+ите [[регистраци+онный н+омер]] в отв+ете.",
          "en": "Please quote the reference number in your reply.",
          "de": "Bitte geben Sie in Ihrer Antwort das Aktenzeichen an."
        }
      ],
      "gender": "m",
      "plural": "регистраци+онные номер+а"
    },
    {
      "id": "ru-content26-docs-vypiska",
      "t": "в+ыписка из ре+естра",
      "level": "B2",
      "pos": "noun",
      "en": "register extract",
      "de": "der Registerauszug",
      "examples": [
        {
          "t": "К заявл+ению прилож+или [[в+ыписку из ре+естра]].",
          "en": "A register extract was attached to the application.",
          "de": "Dem Antrag wurde ein Registerauszug beigefügt."
        }
      ],
      "gender": "f",
      "plural": "в+ыписки из ре+естра"
    },
    {
      "id": "ru-content26-docs-zaverenie",
      "t": "нотари+альное завер+ение",
      "level": "B2",
      "pos": "noun",
      "en": "notarisation",
      "de": "die notarielle Beglaubigung",
      "examples": [
        {
          "t": "Для к+опии потр+ебовалось [[нотари+альное завер+ение]].",
          "en": "The copy required notarisation.",
          "de": "Für die Kopie war eine notarielle Beglaubigung erforderlich."
        }
      ],
      "gender": "n",
      "plural": "нотари+альные завер+ения"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_contracts",
  "items": [
    {
      "id": "ru-content26-contract-uslovie",
      "t": "усл+овие догов+ора",
      "level": "B2",
      "pos": "noun",
      "en": "contractual clause",
      "de": "die Vertragsklausel",
      "examples": [
        {
          "t": "+Это [[усл+овие догов+ора]] н+ужно обсуд+ить до подпис+ания.",
          "en": "This contractual clause needs to be discussed before signing.",
          "de": "Diese Vertragsklausel muss vor der Unterschrift besprochen werden."
        }
      ],
      "gender": "n",
      "plural": "усл+овия догов+ора"
    },
    {
      "id": "ru-content26-contract-narushenie",
      "t": "наруш+ение догов+ора",
      "level": "B2",
      "pos": "noun",
      "en": "breach of contract",
      "de": "die Vertragsverletzung",
      "examples": [
        {
          "t": "В письм+е оп+исано предполаг+аемое [[наруш+ение догов+ора]].",
          "en": "The letter describes an alleged breach of contract.",
          "de": "Im Brief wird eine mutmaßliche Vertragsverletzung beschrieben."
        }
      ],
      "gender": "n",
      "plural": "наруш+ения догов+ора"
    },
    {
      "id": "ru-content26-contract-otvetstvennost",
      "t": "отв+етственность",
      "level": "B2",
      "pos": "noun",
      "en": "liability",
      "de": "die Haftung",
      "examples": [
        {
          "t": "В догов+оре отд+ельно оговорен+а [[отв+етственность]] стор+он.",
          "en": "The parties' liability is addressed separately in the contract.",
          "de": "Die Haftung der Parteien ist im Vertrag gesondert geregelt."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-contract-neustoyka",
      "t": "неуст+ойка",
      "level": "C1",
      "pos": "noun",
      "en": "contractual penalty",
      "de": "die Vertragsstrafe",
      "examples": [
        {
          "t": "За проср+очку в догов+оре предусм+отрена [[неуст+ойка]].",
          "en": "The contract provides for a contractual penalty for delay.",
          "de": "Der Vertrag sieht bei Verzug eine Vertragsstrafe vor."
        }
      ],
      "gender": "f",
      "plural": "неуст+ойки"
    },
    {
      "id": "ru-content26-contract-ushcherb",
      "t": "возмещ+ение ущ+ерба",
      "level": "B2",
      "pos": "noun",
      "en": "damages",
      "de": "der Schadensersatz",
      "examples": [
        {
          "t": "Стор+оны обсужд+ают [[возмещ+ение ущ+ерба]].",
          "en": "The parties are discussing damages.",
          "de": "Die Parteien besprechen den Schadensersatz."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-contract-davnost",
      "t": "срок исков+ой д+авности",
      "level": "C1",
      "pos": "noun",
      "en": "limitation period",
      "de": "die Verjährungsfrist",
      "examples": [
        {
          "t": "Юр+ист пров+ерит примен+имый [[срок исков+ой д+авности]].",
          "en": "The lawyer will check the applicable limitation period.",
          "de": "Der Anwalt prüft die anwendbare Verjährungsfrist."
        }
      ],
      "gender": "m",
      "plural": "ср+оки исков+ой д+авности"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_ip",
  "items": [
    {
      "id": "ru-content26-ip-copyright",
      "t": "+авторское пр+аво",
      "level": "B2",
      "pos": "noun",
      "en": "copyright",
      "de": "das Urheberrecht",
      "examples": [
        {
          "t": "В лиц+ензии уточн+яется, ком+у принадлеж+ит [[+авторское пр+аво]].",
          "en": "The licence clarifies who owns the copyright.",
          "de": "In der Lizenz wird geklärt, wem das Urheberrecht zusteht."
        }
      ],
      "gender": "n",
      "plural": "+авторские прав+а"
    },
    {
      "id": "ru-content26-ip-trademark",
      "t": "тов+арный знак",
      "level": "B2",
      "pos": "noun",
      "en": "trademark",
      "de": "die Marke",
      "examples": [
        {
          "t": "[[Тов+арный знак]] зарегистр+ирован на комп+анию.",
          "en": "The trademark is registered to the company.",
          "de": "Die Marke ist auf das Unternehmen eingetragen."
        }
      ],
      "gender": "m",
      "plural": "тов+арные зн+аки"
    },
    {
      "id": "ru-content26-ip-patent",
      "t": "пат+ент",
      "level": "B2",
      "pos": "noun",
      "en": "patent",
      "de": "das Patent",
      "examples": [
        {
          "t": "Инжен+еры п+одали за+явку на [[пат+ент]].",
          "en": "The engineers filed a patent application.",
          "de": "Die Ingenieure haben ein Patent angemeldet."
        }
      ],
      "gender": "m",
      "plural": "пат+енты"
    },
    {
      "id": "ru-content26-ip-royalty",
      "t": "лицензи+онный сбор",
      "level": "B2",
      "pos": "noun",
      "en": "licence fee",
      "de": "die Lizenzgebühr",
      "examples": [
        {
          "t": "[[Лицензи+онный сбор]] опл+ачивается ежег+одно.",
          "en": "The licence fee is paid annually.",
          "de": "Die Lizenzgebühr wird jährlich bezahlt."
        }
      ],
      "gender": "m",
      "plural": "лицензи+онные сб+оры"
    },
    {
      "id": "ru-content26-ip-secret",
      "t": "комм+ерческая т+айна",
      "level": "B2",
      "pos": "noun",
      "en": "trade secret",
      "de": "das Geschäftsgeheimnis",
      "examples": [
        {
          "t": "Технол+огия защищен+а как [[комм+ерческая т+айна]].",
          "en": "The technology is protected as a trade secret.",
          "de": "Die Technologie ist als Geschäftsgeheimnis geschützt."
        }
      ],
      "gender": "f",
      "plural": "комм+ерческие т+айны"
    },
    {
      "id": "ru-content26-ip-plagiarism",
      "t": "плаги+ат",
      "level": "B2",
      "pos": "noun",
      "en": "plagiarism",
      "de": "das Plagiat",
      "examples": [
        {
          "t": "Ком+иссия провер+яет раб+оту на [[плаги+ат]].",
          "en": "The committee is checking the work for plagiarism.",
          "de": "Die Kommission prüft die Arbeit auf Plagiate."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-ip-domain",
      "t": "общ+ественное досто+яние",
      "level": "C1",
      "pos": "noun",
      "en": "public domain",
      "de": "die Gemeinfreiheit",
      "examples": [
        {
          "t": "Ст+атус [[общ+ественного досто+яния]] н+ужно пров+ерить для +этой стран+ы.",
          "en": "Public-domain status needs to be checked for this country.",
          "de": "Der Status der Gemeinfreiheit muss für dieses Land geprüft werden."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-ip-usage",
      "t": "пр+аво исп+ользования",
      "level": "B2",
      "pos": "noun",
      "en": "usage rights",
      "de": "das Nutzungsrecht",
      "examples": [
        {
          "t": "[[Пр+аво исп+ользования]] не означ+ает перед+ачу +авторства.",
          "en": "Usage rights do not mean transfer of authorship.",
          "de": "Ein Nutzungsrecht bedeutet keine Übertragung der Urheberschaft."
        }
      ],
      "gender": "n",
      "plural": "прав+а исп+ользования"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_criminal",
  "items": [
    {
      "id": "ru-content26-crime-obvinenie",
      "t": "обвин+ительное заключ+ение",
      "level": "B2",
      "pos": "noun",
      "en": "indictment",
      "de": "die Anklageschrift",
      "examples": [
        {
          "t": "В суд поступ+ило [[обвин+ительное заключ+ение]] по д+елу о мош+енничестве.",
          "en": "An indictment in the fraud case was submitted to the court.",
          "de": "Dem Gericht wurde eine Anklageschrift im Betrugsfall vorgelegt."
        }
      ],
      "gender": "n",
      "plural": "обвин+ительные заключ+ения"
    },
    {
      "id": "ru-content26-crime-prokuratura",
      "t": "прокурат+ура",
      "level": "B2",
      "pos": "noun",
      "en": "prosecution",
      "de": "die Staatsanwaltschaft",
      "examples": [
        {
          "t": "[[Прокурат+ура]] запрос+ила дополн+ительные докум+енты.",
          "en": "The prosecution requested additional documents.",
          "de": "Die Staatsanwaltschaft forderte zusätzliche Dokumente an."
        }
      ],
      "gender": "f",
      "plural": "прокурат+уры"
    },
    {
      "id": "ru-content26-crime-presumption",
      "t": "през+умпция невин+овности",
      "level": "C1",
      "pos": "noun",
      "en": "presumption of innocence",
      "de": "die Unschuldsvermutung",
      "examples": [
        {
          "t": "В обсужд+ении д+ела нельз+я забыв+ать о [[през+умпции невин+овности]].",
          "en": "The presumption of innocence must not be forgotten when discussing the case.",
          "de": "Bei der Diskussion des Falls darf die Unschuldsvermutung nicht vergessen werden."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-crime-acquittal",
      "t": "оправд+ательный пригов+ор",
      "level": "C1",
      "pos": "noun",
      "en": "acquittal",
      "de": "der Freispruch",
      "examples": [
        {
          "t": "Суд в+ынес [[оправд+ательный пригов+ор]].",
          "en": "The court delivered an acquittal.",
          "de": "Das Gericht sprach einen Freispruch aus."
        }
      ],
      "gender": "m",
      "plural": "оправд+ательные пригов+оры"
    },
    {
      "id": "ru-content26-crime-testimony",
      "t": "свид+етельские показ+ания",
      "level": "B2",
      "pos": "noun",
      "en": "witness testimony",
      "de": "die Zeugenaussage",
      "examples": [
        {
          "t": "[[Свид+етельские показ+ания]] зап+исаны в проток+оле.",
          "en": "The witness testimony is recorded in the minutes.",
          "de": "Die Zeugenaussage ist im Protokoll festgehalten."
        }
      ],
      "gender": "pl",
      "plural": "свид+етельские показ+ания",
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      }
    },
    {
      "id": "ru-content26-crime-appeal",
      "t": "апелл+яция",
      "level": "C1",
      "pos": "noun",
      "en": "appeal",
      "de": "die Berufung",
      "examples": [
        {
          "t": "Адвок+ат сообщ+ил, что [[апелл+яция]] п+одана.",
          "en": "The lawyer said that the appeal had been filed.",
          "de": "Der Anwalt teilte mit, dass die Berufung eingelegt wurde."
        }
      ],
      "gender": "f",
      "plural": "апелл+яции"
    },
    {
      "id": "ru-content26-crime-fraud",
      "t": "мош+енничество",
      "level": "B2",
      "pos": "noun",
      "en": "fraud",
      "de": "der Betrug",
      "examples": [
        {
          "t": "Пол+иция рассл+едует предполаг+аемое [[мош+енничество]].",
          "en": "The police are investigating suspected fraud.",
          "de": "Die Polizei ermittelt wegen mutmaßlichen Betrugs."
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
  "tab": "it",
  "topic": "legal_labour",
  "items": [
    {
      "id": "ru-content26-labour-contract",
      "t": "трудов+ой догов+ор",
      "level": "B2",
      "pos": "noun",
      "en": "employment contract",
      "de": "der Arbeitsvertrag",
      "examples": [
        {
          "t": "Я получ+ил [[трудов+ой догов+ор]] по электр+онной п+очте.",
          "en": "I received the employment contract by email.",
          "de": "Ich habe den Arbeitsvertrag per E-Mail erhalten."
        }
      ],
      "gender": "m",
      "plural": "трудов+ые догов+оры"
    },
    {
      "id": "ru-content26-labour-collective",
      "t": "коллект+ивный догов+ор",
      "level": "B2",
      "pos": "noun",
      "en": "collective agreement",
      "de": "die Kollektivvereinbarung",
      "examples": [
        {
          "t": "[[Коллект+ивный догов+ор]] регул+ирует усл+овия труд+а.",
          "en": "The collective agreement regulates working conditions.",
          "de": "Die Kollektivvereinbarung regelt die Arbeitsbedingungen."
        }
      ],
      "gender": "m",
      "plural": "коллект+ивные догов+оры"
    },
    {
      "id": "ru-content26-labour-notice",
      "t": "срок уведомл+ения об увольн+ении",
      "level": "B2",
      "pos": "noun",
      "en": "notice period",
      "de": "die Kündigungsfrist",
      "examples": [
        {
          "t": "В догов+оре ук+азан [[срок уведомл+ения об увольн+ении]].",
          "en": "The notice period is stated in the contract.",
          "de": "Die Kündigungsfrist steht im Vertrag."
        }
      ],
      "gender": "m",
      "plural": "ср+оки уведомл+ения об увольн+ении"
    },
    {
      "id": "ru-content26-labour-termination",
      "t": "соглаш+ение о расторж+ении",
      "level": "C1",
      "pos": "noun",
      "en": "mutual termination agreement",
      "de": "der Aufhebungsvertrag",
      "examples": [
        {
          "t": "Стор+оны обсужд+ают [[соглаш+ение о расторж+ении]] догов+ора.",
          "en": "The parties are discussing a mutual termination agreement.",
          "de": "Die Parteien besprechen einen Aufhebungsvertrag."
        }
      ],
      "gender": "n",
      "plural": "соглаш+ения о расторж+ении"
    },
    {
      "id": "ru-content26-labour-dispute",
      "t": "трудов+ой спор",
      "level": "B2",
      "pos": "noun",
      "en": "labour dispute",
      "de": "der Arbeitskonflikt",
      "examples": [
        {
          "t": "[[Трудов+ой спор]] п+ередали на рассмотр+ение.",
          "en": "The labour dispute was referred for consideration.",
          "de": "Der Arbeitskonflikt wurde zur Prüfung weitergeleitet."
        }
      ],
      "gender": "m",
      "plural": "трудов+ые сп+оры"
    },
    {
      "id": "ru-content26-labour-parental",
      "t": "+отпуск по ух+оду за ребёнком",
      "level": "B2",
      "pos": "noun",
      "en": "parental leave",
      "de": "die Elternzeit",
      "examples": [
        {
          "t": "Он план+ирует взять [[+отпуск по ух+оду за ребёнком]].",
          "en": "He plans to take parental leave.",
          "de": "Er plant, Elternzeit zu nehmen."
        }
      ],
      "gender": "m",
      "plural": "отпуск+а по ух+оду за ребёнком"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_corporate",
  "items": [
    {
      "id": "ru-content26-corp-ustav",
      "t": "уст+ав",
      "level": "C1",
      "pos": "noun",
      "en": "articles of association",
      "de": "die Satzung",
      "examples": [
        {
          "t": "Н+овая ред+акция [[уст+ава]] утвержден+а учред+ителями.",
          "en": "The founders approved the new version of the articles of association.",
          "de": "Die Gründer genehmigten die neue Fassung der Satzung."
        }
      ],
      "gender": "m",
      "plural": "уст+авы"
    },
    {
      "id": "ru-content26-corp-diligence",
      "t": "к+омплексная пров+ерка",
      "level": "C1",
      "pos": "noun",
      "en": "due diligence",
      "de": "die Due-Diligence-Prüfung",
      "examples": [
        {
          "t": "П+еред сд+елкой провод+илась [[к+омплексная пров+ерка]] комп+ании.",
          "en": "Due diligence was carried out on the company before the transaction.",
          "de": "Vor der Transaktion wurde eine Due-Diligence-Prüfung des Unternehmens durchgeführt."
        }
      ],
      "gender": "f",
      "plural": "к+омплексные пров+ерки"
    },
    {
      "id": "ru-content26-corp-compliance",
      "t": "соблюд+ение тр+ебований",
      "level": "B2",
      "pos": "noun",
      "en": "compliance",
      "de": "die Compliance",
      "examples": [
        {
          "t": "За [[соблюд+ение тр+ебований]] отвеч+ает отд+ельная ком+анда.",
          "en": "A separate team is responsible for compliance.",
          "de": "Für die Compliance ist ein eigenes Team zuständig."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-corp-privacy",
      "t": "защ+ита персон+альных д+анных",
      "level": "B2",
      "pos": "noun",
      "en": "data protection",
      "de": "der Datenschutz",
      "examples": [
        {
          "t": "В прогр+амме обуч+ения есть разд+ел «[[Защ+ита персон+альных д+анных]]».",
          "en": "The training programme includes a data protection section.",
          "de": "Das Schulungsprogramm enthält einen Abschnitt zum Datenschutz."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-corp-insolvency",
      "t": "неплатёжеспос+обность",
      "level": "C1",
      "pos": "noun",
      "en": "insolvency",
      "de": "die Zahlungsunfähigkeit",
      "examples": [
        {
          "t": "В отчёте отм+ечен риск [[неплатёжеспос+обности]].",
          "en": "The report notes a risk of insolvency.",
          "de": "Der Bericht weist auf ein Risiko der Zahlungsunfähigkeit hin."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-corp-governance",
      "t": "корпорат+ивное управл+ение",
      "level": "C1",
      "pos": "noun",
      "en": "corporate governance",
      "de": "die Unternehmensführung",
      "examples": [
        {
          "t": "[[Корпорат+ивное управл+ение]] включ+ает контр+оль за реш+ениями руков+одства.",
          "en": "Corporate governance includes oversight of management decisions.",
          "de": "Unternehmensführung umfasst die Kontrolle von Entscheidungen der Geschäftsleitung."
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
  "tab": "it",
  "topic": "svc_hotel",
  "items": [
    {
      "id": "ru-content26-hotel-reception",
      "t": "ст+ойка регистр+ации",
      "level": "B1",
      "pos": "noun",
      "en": "reception desk",
      "de": "die Rezeption",
      "examples": [
        {
          "t": "[[Ст+ойка регистр+ации]] нах+одится спр+ава от вх+ода.",
          "en": "The reception desk is to the right of the entrance.",
          "de": "Die Rezeption befindet sich rechts vom Eingang."
        }
      ],
      "gender": "f",
      "plural": "ст+ойки регистр+ации"
    },
    {
      "id": "ru-content26-hotel-occupancy",
      "t": "загр+узка гост+иницы",
      "level": "B2",
      "pos": "noun",
      "en": "occupancy rate",
      "de": "die Belegungsquote",
      "examples": [
        {
          "t": "В +этом м+есяце [[загр+узка гост+иницы]] н+иже, чем л+етом.",
          "en": "The hotel's occupancy rate is lower this month than in summer.",
          "de": "Die Belegungsquote des Hotels ist diesen Monat niedriger als im Sommer."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-hotel-checkout",
      "t": "п+оздний в+ыезд",
      "level": "B2",
      "pos": "noun",
      "en": "late checkout",
      "de": "die Spätabreise",
      "examples": [
        {
          "t": "Мы зар+анее согласов+али [[п+оздний в+ыезд]].",
          "en": "We arranged late checkout in advance.",
          "de": "Wir haben eine Spätabreise im Voraus vereinbart."
        }
      ],
      "gender": "m",
      "plural": "п+оздние в+ыезды"
    },
    {
      "id": "ru-content26-hotel-housekeeping",
      "t": "уб+орка н+омера",
      "level": "B1",
      "pos": "noun",
      "en": "housekeeping",
      "de": "die Zimmerreinigung",
      "examples": [
        {
          "t": "[[Уб+орка н+омера]] м+ожет быть перенесен+а на в+ечер.",
          "en": "Housekeeping can be moved to the evening.",
          "de": "Die Zimmerreinigung kann auf den Abend verschoben werden."
        }
      ],
      "gender": "f",
      "plural": "уб+орки н+омера"
    },
    {
      "id": "ru-content26-hotel-noshow",
      "t": "неза+езд",
      "level": "B2",
      "pos": "noun",
      "en": "no-show",
      "de": "die Nichtanreise",
      "examples": [
        {
          "t": "Пор+ядок опл+аты при [[неза+езде]] ук+азан в усл+овиях брон+ирования.",
          "en": "The payment policy for a no-show is stated in the booking conditions.",
          "de": "Die Zahlungsbedingungen bei Nichtanreise stehen in den Buchungsbedingungen."
        }
      ],
      "gender": "m",
      "plural": "неза+езды"
    },
    {
      "id": "ru-content26-hotel-deposit",
      "t": "зал+ог",
      "level": "B2",
      "pos": "noun",
      "en": "deposit",
      "de": "die Kaution",
      "examples": [
        {
          "t": "При засел+ении гост+иница попрос+ила [[зал+ог]].",
          "en": "The hotel asked for a deposit at check-in.",
          "de": "Beim Einchecken verlangte das Hotel eine Kaution."
        }
      ],
      "gender": "m",
      "plural": "зал+оги"
    },
    {
      "id": "ru-content26-hotel-bronirovanie",
      "t": "брон+ирование",
      "level": "B1",
      "pos": "noun",
      "en": "reservation",
      "de": "die Reservierung",
      "examples": [
        {
          "t": "[[Брон+ирование]] подтвержден+о по электр+онной п+очте.",
          "en": "The reservation has been confirmed by email.",
          "de": "Die Reservierung wurde per E-Mail bestätigt."
        }
      ],
      "gender": "n",
      "plural": "брон+ирования"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "svc_gastro",
  "items": [
    {
      "id": "ru-content26-gastro-hygiene",
      "t": "пищев+ая гиги+ена",
      "level": "B2",
      "pos": "noun",
      "en": "food hygiene",
      "de": "die Lebensmittelhygiene",
      "examples": [
        {
          "t": "[[Пищев+ая гиги+ена]] вх+одит в прогр+амму обуч+ения персон+ала.",
          "en": "Food hygiene is part of the staff training programme.",
          "de": "Lebensmittelhygiene gehört zum Schulungsprogramm des Personals."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-gastro-allergens",
      "t": "маркир+овка аллерг+енов",
      "level": "B2",
      "pos": "noun",
      "en": "allergen labelling",
      "de": "die Allergenkennzeichnung",
      "examples": [
        {
          "t": "В мен+ю обновлен+а [[маркир+овка аллерг+енов]].",
          "en": "The allergen labelling in the menu has been updated.",
          "de": "Die Allergenkennzeichnung auf der Speisekarte wurde aktualisiert."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-gastro-table",
      "t": "брон+ирование ст+олика",
      "level": "B1",
      "pos": "noun",
      "en": "table reservation",
      "de": "die Tischreservierung",
      "examples": [
        {
          "t": "[[Брон+ирование ст+олика]] возм+ожно по телеф+ону.",
          "en": "A table reservation can be made by phone.",
          "de": "Eine Tischreservierung ist telefonisch möglich."
        }
      ],
      "gender": "n",
      "plural": "брон+ирования ст+оликов"
    },
    {
      "id": "ru-content26-gastro-dish",
      "t": "бл+юдо дня",
      "level": "B1",
      "pos": "noun",
      "en": "dish of the day",
      "de": "das Tagesgericht",
      "examples": [
        {
          "t": "Сег+одня [[бл+юдо дня]] — суп с овощ+ами.",
          "en": "Today's dish of the day is vegetable soup.",
          "de": "Das heutige Tagesgericht ist Gemüsesuppe."
        }
      ],
      "gender": "n",
      "plural": "бл+юда дня"
    },
    {
      "id": "ru-content26-gastro-service",
      "t": "с+ервисный сбор",
      "level": "B2",
      "pos": "noun",
      "en": "service charge",
      "de": "die Servicegebühr",
      "examples": [
        {
          "t": "В счёт уж+е включён [[с+ервисный сбор]].",
          "en": "A service charge is already included in the bill.",
          "de": "Im Rechnungsbetrag ist bereits eine Servicegebühr enthalten."
        }
      ],
      "gender": "m",
      "plural": "с+ервисные сб+оры"
    },
    {
      "id": "ru-content26-gastro-perishable",
      "t": "скороп+ортящийся",
      "level": "B2",
      "pos": "adj",
      "en": "perishable",
      "de": "verderblich",
      "examples": [
        {
          "t": "Молок+о — [[скороп+ортящийся]] прод+укт.",
          "en": "Milk is a perishable product.",
          "de": "Milch ist ein verderbliches Lebensmittel."
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "svc_retail",
  "items": [
    {
      "id": "ru-content26-retail-stocktake",
      "t": "инвентариз+ация",
      "level": "B2",
      "pos": "noun",
      "en": "stocktake",
      "de": "die Inventur",
      "examples": [
        {
          "t": "В понед+ельник в магаз+ине пройдёт [[инвентариз+ация]].",
          "en": "The shop will carry out a stocktake on Monday.",
          "de": "Am Montag findet im Geschäft eine Inventur statt."
        }
      ],
      "gender": "f",
      "plural": "инвентариз+ации"
    },
    {
      "id": "ru-content26-retail-warranty",
      "t": "гарант+ийная прет+ензия",
      "level": "B2",
      "pos": "noun",
      "en": "warranty claim",
      "de": "der Gewährleistungsanspruch",
      "examples": [
        {
          "t": "[[Гарант+ийная прет+ензия]] передан+а в с+ервисный отд+ел.",
          "en": "The warranty claim has been forwarded to the service department.",
          "de": "Der Gewährleistungsanspruch wurde an die Serviceabteilung weitergeleitet."
        }
      ],
      "gender": "f",
      "plural": "гарант+ийные прет+ензии"
    },
    {
      "id": "ru-content26-retail-exchange",
      "t": "обм+ен тов+ара",
      "level": "B1",
      "pos": "noun",
      "en": "exchange of goods",
      "de": "der Umtausch",
      "examples": [
        {
          "t": "Для [[обм+ена тов+ара]] сохран+ите чек.",
          "en": "Keep the receipt for an exchange of goods.",
          "de": "Bewahren Sie den Kassenbon für den Umtausch auf."
        }
      ],
      "gender": "m",
      "plural": "обм+ены тов+ара"
    },
    {
      "id": "ru-content26-retail-support",
      "t": "обсл+уживание кли+ентов",
      "level": "B2",
      "pos": "noun",
      "en": "customer service",
      "de": "der Kundenservice",
      "examples": [
        {
          "t": "За [[обсл+уживание кли+ентов]] отвеч+ает н+овая ком+анда.",
          "en": "A new team is responsible for customer service.",
          "de": "Ein neues Team ist für den Kundenservice zuständig."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-retail-stock",
      "t": "тов+арный зап+ас",
      "level": "B2",
      "pos": "noun",
      "en": "stock",
      "de": "der Warenbestand",
      "examples": [
        {
          "t": "К конц+у нед+ели [[тов+арный зап+ас]] ум+еньшился.",
          "en": "Stock decreased by the end of the week.",
          "de": "Bis Ende der Woche hat sich der Warenbestand verringert."
        }
      ],
      "gender": "m",
      "plural": "тов+арные зап+асы"
    },
    {
      "id": "ru-content26-retail-shortage",
      "t": "недост+ача",
      "level": "B2",
      "pos": "noun",
      "en": "stock shortage",
      "de": "der Fehlbestand",
      "examples": [
        {
          "t": "При пров+ерке обнар+ужилась [[недост+ача]] двух един+иц.",
          "en": "The check revealed a stock shortage of two units.",
          "de": "Bei der Kontrolle wurde ein Fehlbestand von zwei Stück festgestellt."
        }
      ],
      "gender": "f",
      "plural": "недост+ачи"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "fin_accounting",
  "items": [
    {
      "id": "ru-content26-account-balance",
      "t": "бухг+алтерский бал+анс",
      "level": "B2",
      "pos": "noun",
      "en": "balance sheet",
      "de": "die Bilanz",
      "examples": [
        {
          "t": "[[Бухг+алтерский бал+анс]] отраж+ает акт+ивы и обяз+ательства.",
          "en": "The balance sheet shows assets and liabilities.",
          "de": "Die Bilanz zeigt Vermögenswerte und Verbindlichkeiten."
        }
      ],
      "gender": "m",
      "plural": "бухг+алтерские бал+ансы"
    },
    {
      "id": "ru-content26-account-receivable",
      "t": "дебит+орская зад+олженность",
      "level": "C1",
      "pos": "noun",
      "en": "accounts receivable",
      "de": "die Forderungen",
      "examples": [
        {
          "t": "Проср+оченная [[дебит+орская зад+олженность]] возросл+а.",
          "en": "Overdue accounts receivable have increased.",
          "de": "Die überfälligen Forderungen sind gestiegen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-account-payable",
      "t": "кредит+орская зад+олженность",
      "level": "C1",
      "pos": "noun",
      "en": "accounts payable",
      "de": "die Verbindlichkeiten",
      "examples": [
        {
          "t": "[[Кредит+орская зад+олженность]] включ+ает долг поставщик+ам.",
          "en": "Accounts payable include amounts owed to suppliers.",
          "de": "Die Verbindlichkeiten umfassen Schulden gegenüber Lieferanten."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-account-depreciation",
      "t": "амортиз+ация",
      "level": "B2",
      "pos": "noun",
      "en": "depreciation",
      "de": "die Abschreibung",
      "examples": [
        {
          "t": "[[Амортиз+ация]] обор+удования учтен+а в расх+одах.",
          "en": "Equipment depreciation has been included in expenses.",
          "de": "Die Abschreibung der Geräte ist in den Aufwendungen berücksichtigt."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-account-liquidity",
      "t": "ликв+идность",
      "level": "C1",
      "pos": "noun",
      "en": "liquidity",
      "de": "die Liquidität",
      "examples": [
        {
          "t": "Зад+ержки платеж+ей вли+яют на [[ликв+идность]] комп+ании.",
          "en": "Payment delays affect the company's liquidity.",
          "de": "Zahlungsverzögerungen beeinflussen die Liquidität des Unternehmens."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-account-cashflow",
      "t": "д+енежный пот+ок",
      "level": "B2",
      "pos": "noun",
      "en": "cash flow",
      "de": "der Cashflow",
      "examples": [
        {
          "t": "Операци+онный [[д+енежный пот+ок]] ост+ался полож+ительным.",
          "en": "Operating cash flow remained positive.",
          "de": "Der operative Cashflow blieb positiv."
        }
      ],
      "gender": "m",
      "plural": "д+енежные пот+оки"
    },
    {
      "id": "ru-content26-account-audit",
      "t": "бухг+алтерский ауд+ит",
      "level": "B2",
      "pos": "noun",
      "en": "financial audit",
      "de": "die Buchprüfung",
      "examples": [
        {
          "t": "Вн+ешний [[бухг+алтерский ауд+ит]] начнётся в сл+едующем м+есяце.",
          "en": "The external financial audit will begin next month.",
          "de": "Die externe Buchprüfung beginnt nächsten Monat."
        }
      ],
      "gender": "m",
      "plural": "бухг+алтерские ауд+иты"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "fin_marketing",
  "items": [
    {
      "id": "ru-content26-market-funnel",
      "t": "вор+онка прод+аж",
      "level": "B2",
      "pos": "noun",
      "en": "sales funnel",
      "de": "der Verkaufstrichter",
      "examples": [
        {
          "t": "Н+овая [[вор+онка прод+аж]] включ+ает пр+обный пер+иод.",
          "en": "The new sales funnel includes a trial period.",
          "de": "Der neue Verkaufstrichter enthält eine Testphase."
        }
      ],
      "gender": "f",
      "plural": "вор+онки прод+аж"
    },
    {
      "id": "ru-content26-market-release",
      "t": "пресс-рел+из",
      "level": "B2",
      "pos": "noun",
      "en": "press release",
      "de": "die Pressemitteilung",
      "examples": [
        {
          "t": "[[Пресс-рел+из]] отпр+авили в ред+акции сег+одня +утром.",
          "en": "The press release was sent to newsrooms this morning.",
          "de": "Die Pressemitteilung wurde heute Morgen an die Redaktionen verschickt."
        }
      ],
      "gender": "m",
      "plural": "пресс-рел+изы"
    },
    {
      "id": "ru-content26-market-positioning",
      "t": "позицион+ирование бр+енда",
      "level": "C1",
      "pos": "noun",
      "en": "brand positioning",
      "de": "die Markenpositionierung",
      "examples": [
        {
          "t": "[[Позицион+ирование бр+енда]] измен+илось п+осле иссл+едования.",
          "en": "Brand positioning changed after the research.",
          "de": "Die Markenpositionierung änderte sich nach der Untersuchung."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-market-share",
      "t": "д+оля р+ынка",
      "level": "B2",
      "pos": "noun",
      "en": "market share",
      "de": "der Marktanteil",
      "examples": [
        {
          "t": "За год [[д+оля р+ынка]] комп+ании увел+ичилась.",
          "en": "The company's market share increased over the year.",
          "de": "Der Marktanteil des Unternehmens ist im Laufe des Jahres gestiegen."
        }
      ],
      "gender": "f",
      "plural": "д+оли р+ынка"
    },
    {
      "id": "ru-content26-market-campaign",
      "t": "рекл+амная камп+ания",
      "level": "B2",
      "pos": "noun",
      "en": "advertising campaign",
      "de": "die Werbekampagne",
      "examples": [
        {
          "t": "[[Рекл+амная камп+ания]] начнётся в сл+едующий понед+ельник.",
          "en": "The advertising campaign will start next Monday.",
          "de": "Die Werbekampagne beginnt nächsten Montag."
        }
      ],
      "gender": "f",
      "plural": "рекл+амные камп+ании"
    },
    {
      "id": "ru-content26-market-acquisition",
      "t": "привлеч+ение кли+ентов",
      "level": "B2",
      "pos": "noun",
      "en": "customer acquisition",
      "de": "die Kundengewinnung",
      "examples": [
        {
          "t": "Расх+оды на [[привлеч+ение кли+ентов]] сн+изились.",
          "en": "Customer acquisition costs have fallen.",
          "de": "Die Kosten für die Kundengewinnung sind gesunken."
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
  "tab": "it",
  "topic": "fin_hr",
  "items": [
    {
      "id": "ru-content26-hr-recruitment",
      "t": "подб+ор персон+ала",
      "level": "B2",
      "pos": "noun",
      "en": "recruitment",
      "de": "die Personalbeschaffung",
      "examples": [
        {
          "t": "[[Подб+ор персон+ала]] займёт н+есколько нед+ель.",
          "en": "Recruitment will take several weeks.",
          "de": "Die Personalbeschaffung wird einige Wochen dauern."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-hr-screening",
      "t": "отб+ор кандид+атов",
      "level": "B2",
      "pos": "noun",
      "en": "candidate screening",
      "de": "die Bewerberauswahl",
      "examples": [
        {
          "t": "Перв+ичный [[отб+ор кандид+атов]] уж+е завершён.",
          "en": "Initial candidate screening has already been completed.",
          "de": "Die erste Bewerberauswahl ist bereits abgeschlossen."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-hr-succession",
      "t": "к+адровый рез+ерв",
      "level": "C1",
      "pos": "noun",
      "en": "talent pool",
      "de": "der Nachwuchspool",
      "examples": [
        {
          "t": "Сотр+удницу включ+или в [[к+адровый рез+ерв]].",
          "en": "The employee was added to the talent pool.",
          "de": "Die Mitarbeiterin wurde in den Nachwuchspool aufgenommen."
        }
      ],
      "gender": "m",
      "plural": "к+адровые рез+ервы"
    },
    {
      "id": "ru-content26-hr-appraisal",
      "t": "оц+енка результ+атов раб+оты",
      "level": "B2",
      "pos": "noun",
      "en": "performance appraisal",
      "de": "die Leistungsbeurteilung",
      "examples": [
        {
          "t": "Ежег+одная [[оц+енка результ+атов раб+оты]] состо+ится в декабр+е.",
          "en": "The annual performance appraisal will take place in December.",
          "de": "Die jährliche Leistungsbeurteilung findet im Dezember statt."
        }
      ],
      "gender": "f",
      "plural": "оц+енки результ+атов раб+оты"
    },
    {
      "id": "ru-content26-hr-file",
      "t": "л+ичное д+ело",
      "level": "B2",
      "pos": "noun",
      "en": "personnel file",
      "de": "die Personalakte",
      "examples": [
        {
          "t": "Д+оступ к [[л+ичному д+елу]] сотр+удника огран+ичен.",
          "en": "Access to the employee's personnel file is restricted.",
          "de": "Der Zugriff auf die Personalakte des Mitarbeiters ist beschränkt."
        }
      ],
      "gender": "n",
      "plural": "л+ичные дел+а"
    },
    {
      "id": "ru-content26-hr-package",
      "t": "компенсаци+онный пак+ет",
      "level": "C1",
      "pos": "noun",
      "en": "compensation package",
      "de": "das Vergütungspaket",
      "examples": [
        {
          "t": "[[Компенсаци+онный пак+ет]] включ+ает окл+ад и пр+емию.",
          "en": "The compensation package includes a base salary and a bonus.",
          "de": "Das Vergütungspaket umfasst Grundgehalt und Bonus."
        }
      ],
      "gender": "m",
      "plural": "компенсаци+онные пак+еты"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "med_clinical",
  "items": [
    {
      "id": "ru-content26-med-history",
      "t": "ан+амнез",
      "level": "B2",
      "pos": "noun",
      "en": "patient history",
      "de": "die Anamnese",
      "examples": [
        {
          "t": "Врач собр+ал подр+обный [[ан+амнез]].",
          "en": "The doctor took a detailed patient history.",
          "de": "Der Arzt erhob eine ausführliche Anamnese."
        }
      ],
      "gender": "m",
      "plural": "ан+амнезы"
    },
    {
      "id": "ru-content26-med-confidentiality",
      "t": "врач+ебная т+айна",
      "level": "B2",
      "pos": "noun",
      "en": "medical confidentiality",
      "de": "die ärztliche Schweigepflicht",
      "examples": [
        {
          "t": "[[Врач+ебная т+айна]] обсужд+ается на обуч+ении персон+ала.",
          "en": "Medical confidentiality is discussed during staff training.",
          "de": "Die ärztliche Schweigepflicht wird bei der Personalschulung besprochen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-med-consent",
      "t": "информ+ированное согл+асие",
      "level": "B2",
      "pos": "noun",
      "en": "informed consent",
      "de": "die informierte Einwilligung",
      "examples": [
        {
          "t": "П+еред процед+урой обсуд+или [[информ+ированное согл+асие]].",
          "en": "Informed consent was discussed before the procedure.",
          "de": "Vor dem Eingriff wurde die informierte Einwilligung besprochen."
        }
      ],
      "gender": "n",
      "plural": "информ+ированные согл+асия"
    },
    {
      "id": "ru-content26-med-contraindication",
      "t": "противопоказ+ание",
      "level": "B2",
      "pos": "noun",
      "en": "contraindication",
      "de": "die Gegenanzeige",
      "examples": [
        {
          "t": "Врач пров+ерит к+аждое [[противопоказ+ание]].",
          "en": "The doctor will check each contraindication.",
          "de": "Der Arzt prüft jede Gegenanzeige."
        }
      ],
      "gender": "n",
      "plural": "противопоказ+ания"
    },
    {
      "id": "ru-content26-med-dosage",
      "t": "дозир+овка",
      "level": "B2",
      "pos": "noun",
      "en": "dosage",
      "de": "die Dosierung",
      "examples": [
        {
          "t": "[[Дозир+овка]] ук+азана в назнач+ении врач+а.",
          "en": "The dosage is stated in the doctor's prescription.",
          "de": "Die Dosierung steht in der ärztlichen Verordnung."
        }
      ],
      "gender": "f",
      "plural": "дозир+овки"
    },
    {
      "id": "ru-content26-med-summary",
      "t": "выписн+ой эпикр+из",
      "level": "C1",
      "pos": "noun",
      "en": "discharge summary",
      "de": "der Entlassungsbericht",
      "examples": [
        {
          "t": "Паци+ент получ+ил [[выписн+ой эпикр+из]] п+еред ух+одом.",
          "en": "The patient received the discharge summary before leaving.",
          "de": "Der Patient erhielt vor dem Verlassen der Klinik den Entlassungsbericht."
        }
      ],
      "gender": "m",
      "plural": "выписн+ые эпикр+изы"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "ops_logistics",
  "items": [
    {
      "id": "ru-content26-log-supply",
      "t": "цеп+очка пост+авок",
      "level": "B2",
      "pos": "noun",
      "en": "supply chain",
      "de": "die Lieferkette",
      "examples": [
        {
          "t": "Сбой у поставщик+а повли+ял на всю [[цеп+очку пост+авок]].",
          "en": "A supplier failure affected the entire supply chain.",
          "de": "Ein Ausfall beim Lieferanten beeinträchtigte die gesamte Lieferkette."
        }
      ],
      "gender": "f",
      "plural": "цеп+очки пост+авок"
    },
    {
      "id": "ru-content26-log-customs",
      "t": "там+оженное оформл+ение",
      "level": "B2",
      "pos": "noun",
      "en": "customs clearance",
      "de": "die Zollabfertigung",
      "examples": [
        {
          "t": "[[Там+оженное оформл+ение]] гр+уза ещё не завершен+о.",
          "en": "Customs clearance for the shipment is not yet complete.",
          "de": "Die Zollabfertigung der Sendung ist noch nicht abgeschlossen."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-log-consignment",
      "t": "тр+анспортная накладн+ая",
      "level": "B2",
      "pos": "noun",
      "en": "consignment note",
      "de": "der Frachtbrief",
      "examples": [
        {
          "t": "Вод+итель предъяв+ил [[тр+анспортную накладн+ую]].",
          "en": "The driver presented the consignment note.",
          "de": "Der Fahrer legte den Frachtbrief vor."
        }
      ],
      "gender": "f",
      "plural": "тр+анспортные накладн+ые"
    },
    {
      "id": "ru-content26-log-picking",
      "t": "комплект+ация зак+аза",
      "level": "B2",
      "pos": "noun",
      "en": "order picking",
      "de": "die Kommissionierung",
      "examples": [
        {
          "t": "[[Комплект+ация зак+аза]] начнётся п+осле опл+аты.",
          "en": "Order picking will begin after payment.",
          "de": "Die Kommissionierung beginnt nach der Zahlung."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-log-cold",
      "t": "холодов+ая цепь",
      "level": "C1",
      "pos": "noun",
      "en": "cold chain",
      "de": "die Kühlkette",
      "examples": [
        {
          "t": "При перев+озке нельз+я наруш+ать [[холодов+ую цепь]].",
          "en": "The cold chain must not be broken during transport.",
          "de": "Beim Transport darf die Kühlkette nicht unterbrochen werden."
        }
      ],
      "gender": "f",
      "plural": "холодов+ые ц+епи"
    },
    {
      "id": "ru-content26-log-tracking",
      "t": "отсл+еживание отправл+ения",
      "level": "B2",
      "pos": "noun",
      "en": "shipment tracking",
      "de": "die Sendungsverfolgung",
      "examples": [
        {
          "t": "[[Отсл+еживание отправл+ения]] дост+упно по н+омеру накладн+ой.",
          "en": "Shipment tracking is available using the consignment note number.",
          "de": "Die Sendungsverfolgung ist über die Frachtbriefnummer verfügbar."
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
  "tab": "it",
  "topic": "ops_trades",
  "items": [
    {
      "id": "ru-content26-trade-blueprint",
      "t": "чертёж",
      "level": "B2",
      "pos": "noun",
      "en": "blueprint",
      "de": "die Bauzeichnung",
      "examples": [
        {
          "t": "Инжен+ер пров+ерил [[чертёж]] п+еред нач+алом раб+от.",
          "en": "The engineer checked the blueprint before work began.",
          "de": "Der Ingenieur prüfte die Bauzeichnung vor Beginn der Arbeiten."
        }
      ],
      "gender": "m",
      "plural": "чертеж+и"
    },
    {
      "id": "ru-content26-trade-commissioning",
      "t": "ввод в эксплуат+ацию",
      "level": "B2",
      "pos": "noun",
      "en": "commissioning",
      "de": "die Inbetriebnahme",
      "examples": [
        {
          "t": "[[Ввод в эксплуат+ацию]] назн+ачен на понед+ельник.",
          "en": "Commissioning is scheduled for Monday.",
          "de": "Die Inbetriebnahme ist für Montag geplant."
        }
      ],
      "gender": "m",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-trade-safety",
      "t": "охр+ана труд+а",
      "level": "B2",
      "pos": "noun",
      "en": "occupational safety",
      "de": "die Arbeitssicherheit",
      "examples": [
        {
          "t": "[[Охр+ана труд+а]] обсужд+ается на вв+одном инструкт+аже.",
          "en": "Occupational safety is discussed during the induction briefing.",
          "de": "Die Arbeitssicherheit wird bei der Einführung besprochen."
        }
      ],
      "gender": "f",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-trade-ppe",
      "t": "ср+едства индивиду+альной защ+иты",
      "level": "B2",
      "pos": "noun",
      "en": "personal protective equipment",
      "de": "die Schutzausrüstung",
      "examples": [
        {
          "t": "На объ+екте н+ужно нос+ить [[ср+едства индивиду+альной защ+иты]].",
          "en": "Personal protective equipment must be worn on site.",
          "de": "Auf der Baustelle muss Schutzausrüstung getragen werden."
        }
      ],
      "gender": "pl",
      "plural": "ср+едства индивиду+альной защ+иты",
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      }
    },
    {
      "id": "ru-content26-trade-maintenance",
      "t": "техн+ическое обсл+уживание",
      "level": "B2",
      "pos": "noun",
      "en": "maintenance",
      "de": "die Instandhaltung",
      "examples": [
        {
          "t": "Пл+ановое [[техн+ическое обсл+уживание]] сн+изило числ+о пол+омок.",
          "en": "Scheduled maintenance reduced the number of breakdowns.",
          "de": "Die planmäßige Instandhaltung verringerte die Zahl der Ausfälle."
        }
      ],
      "gender": "n",
      "note": {
        "en": "Normally used in the singular in this sense; other senses may differ.",
        "de": "In dieser Bedeutung normalerweise im Singular; bei anderen Bedeutungen kann es anders sein."
      }
    },
    {
      "id": "ru-content26-trade-defects",
      "t": "устран+ение деф+ектов",
      "level": "B2",
      "pos": "noun",
      "en": "defect rectification",
      "de": "die Mängelbeseitigung",
      "examples": [
        {
          "t": "[[Устран+ение деф+ектов]] включен+о в план раб+от.",
          "en": "Defect rectification is included in the work plan.",
          "de": "Die Mängelbeseitigung ist im Arbeitsplan enthalten."
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

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "it",
  "topic": "b2_work",
  "items": [
    {
      "id": "ru-telc26-beratung",
      "t": "консульт+ация",
      "pos": "noun",
      "gender": "f",
      "plural": "консульт+ации",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 1,
          "headword": "Beratung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "consultation",
      "de": "die Beratung",
      "examples": [
        {
          "t": "П+еред в+ыбором к+урса он+а запис+алась на [[консульт+ацию]].",
          "de": "Vor der Kurswahl vereinbarte sie eine Beratung.",
          "en": "Before choosing a course, she arranged a consultation.",
          "sense": {
            "en": "consultation",
            "de": "die Beratung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-branche",
      "t": "+отрасль",
      "pos": "noun",
      "gender": "f",
      "plural": "+отрасли",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 1,
          "headword": "Branche",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "industry",
      "de": "die Branche",
      "examples": [
        {
          "t": "В +этой [[+отрасли]] н+ужно мн+ого квалифиц+ированных сотр+удников.",
          "de": "In dieser Branche werden viele Fachkräfte gesucht.",
          "en": "Many skilled workers are needed in this industry.",
          "sense": {
            "en": "industry",
            "de": "die Branche"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-stellengesuch",
      "t": "объявл+ение о п+оиске раб+оты",
      "pos": "noun",
      "gender": "n",
      "plural": "объявл+ения о п+оиске раб+оты",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 7,
          "headword": "Stellengesuch",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "job-seeking advertisement",
      "de": "das Stellengesuch",
      "examples": [
        {
          "t": "В своём [[объявл+ении о п+оиске раб+оты]] он+а указ+ала +опыт в прод+ажах.",
          "de": "In ihrem Stellengesuch nennt sie ihre Erfahrung im Verkauf.",
          "en": "Her job-seeking advertisement mentions her sales experience.",
          "sense": {
            "en": "job-seeking advertisement",
            "de": "das Stellengesuch"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-gehaltsvorstellung",
      "t": "зарпл+атные ожид+ания",
      "pos": "noun",
      "gender": "pl",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 8,
          "headword": "Gehaltsvorstellung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "salary expectation",
      "de": "die Gehaltsvorstellung",
      "examples": [
        {
          "t": "На собес+едовании он+а объясн+ила сво+и [[зарпл+атные ожид+ания]].",
          "de": "Im Gespräch erklärte sie ihre Gehaltsvorstellung.",
          "en": "During the interview, she explained her salary expectation.",
          "sense": {
            "en": "salary expectation",
            "de": "die Gehaltsvorstellung"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "зарпл+атные ожид+ания"
    },
    {
      "id": "ru-telc26-verhandlungssicher",
      "t": "своб+одно влад+еющий язык+ом",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 7,
          "headword": "verhandlungssicher",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "business fluent",
      "de": "verhandlungssicher",
      "examples": [
        {
          "t": "Для перегов+оров нам н+ужен сотр+удник, [[своб+одно влад+еющий нем+ецким язык+ом]].",
          "de": "Für Verhandlungen brauchen wir jemanden, der verhandlungssicher Deutsch spricht.",
          "en": "For negotiations, we need someone who is business fluent in German.",
          "sense": {
            "en": "business fluent",
            "de": "verhandlungssicher"
          }
        }
      ],
      "note": {
        "de": "Die Angabe beschreibt hier Sprachkenntnisse für Geschäftsverhandlungen. Sie ist keine offizielle GER-Niveaubezeichnung.",
        "en": "A job-advertisement and CV expression for language proficiency sufficient for negotiations. It is not an official CEFR level label."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "med_clinical",
  "items": [
    {
      "id": "ru-telc26-betreuung",
      "t": "ух+од",
      "pos": "noun",
      "gender": "m",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 1,
          "headword": "Betreuung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "care",
      "de": "die Betreuung",
      "examples": [
        {
          "t": "[[Ух+од]] за паци+ентами хорош+о организ+ован.",
          "de": "Die Betreuung der Patienten ist gut organisiert.",
          "en": "The patients’ care is well organised.",
          "sense": {
            "en": "care",
            "de": "die Betreuung"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "svc_retail",
  "items": [
    {
      "id": "ru-telc26-einzelhandel",
      "t": "р+озничная торг+овля",
      "pos": "noun",
      "gender": "f",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 13,
          "headword": "Einzelhandel",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "retail",
      "de": "der Einzelhandel",
      "examples": [
        {
          "t": "Он+а получ+ает п+ервый +опыт раб+оты в [[р+озничной торг+овле]].",
          "de": "Sie sammelt erste Berufserfahrung im Einzelhandel.",
          "en": "She is gaining her first work experience in retail.",
          "sense": {
            "en": "retail",
            "de": "der Einzelhandel"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-muster",
      "t": "образ+ец",
      "pos": "noun",
      "gender": "m",
      "plural": "образц+ы",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 22,
          "headword": "Muster",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "sample",
      "de": "das Muster",
      "examples": [
        {
          "t": "П+еред зак+азом мы хот+ели бы ув+идеть [[образ+ец]].",
          "de": "Vor der Bestellung möchten wir ein Muster sehen.",
          "en": "We would like to see a sample before placing the order.",
          "sense": {
            "en": "sample",
            "de": "das Muster"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-grosshaendler",
      "t": "опт+овый продав+ец",
      "pos": "noun",
      "gender": "m",
      "plural": "опт+овые продавц+ы",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 22,
          "headword": "Großhändler",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "wholesaler",
      "de": "der Großhändler",
      "examples": [
        {
          "t": "Магаз+ин зак+азывает тов+ар у [[опт+ового продавц+а]].",
          "de": "Der Laden bestellt die Ware bei einem Großhändler.",
          "en": "The shop orders its goods from a wholesaler.",
          "sense": {
            "en": "wholesaler",
            "de": "der Großhändler"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-artikelnummer",
      "t": "арт+икул",
      "pos": "noun",
      "gender": "m",
      "plural": "арт+икулы",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "Artikelnummer",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "item number",
      "de": "die Artikelnummer",
      "examples": [
        {
          "t": "Пож+алуйста, укаж+ите [[арт+икул]] при зак+азе.",
          "de": "Bitte geben Sie bei der Bestellung die Artikelnummer an.",
          "en": "Please quote the item number when ordering.",
          "sense": {
            "en": "item number",
            "de": "die Artikelnummer"
          }
        }
      ],
      "note": {
        "de": "Im russischen Wort für die Artikelkennzeichnung liegt die Betonung auf и: арти́кул, Plural арти́кулы. Nicht mit der Bestellnummer verwechseln.",
        "en": "For the product-reference sense, Russian stress is арти́кул, plural арти́кулы. An item number is distinct from an order number."
      }
    },
    {
      "id": "ru-telc26-artikelbezeichnung",
      "t": "наименов+ание тов+ара",
      "pos": "noun",
      "gender": "n",
      "plural": "наименов+ания тов+аров",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "Artikelbezeichnung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "item description",
      "de": "die Artikelbezeichnung",
      "examples": [
        {
          "t": "[[Наименов+ание тов+ара]] в накладн+ой должн+о быть однозн+ачным.",
          "de": "Die Artikelbezeichnung muss auf dem Lieferschein eindeutig sein.",
          "en": "The item description on the delivery note must be clear.",
          "sense": {
            "en": "item description",
            "de": "die Artikelbezeichnung"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "ops_trades",
  "items": [
    {
      "id": "ru-telc26-maschinenbau",
      "t": "машиностро+ение",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 13,
          "headword": "Maschinenbau",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "mechanical engineering",
      "de": "der Maschinenbau",
      "examples": [
        {
          "t": "Предпри+ятие гот+овит специал+истов для [[машиностро+ения]].",
          "de": "Der Betrieb bildet Fachkräfte für den Maschinenbau aus.",
          "en": "The company trains skilled workers for mechanical engineering.",
          "sense": {
            "en": "mechanical engineering",
            "de": "der Maschinenbau"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-anweisung",
      "t": "указ+ание",
      "pos": "noun",
      "gender": "n",
      "plural": "указ+ания",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 9,
          "headword": "Anweisung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "instruction",
      "de": "die Anweisung",
      "examples": [
        {
          "t": "Пож+алуйста, прочит+айте [[указ+ание]] п+еред исп+ользованием приб+ора.",
          "de": "Bitte lesen Sie die Anweisung, bevor Sie das Gerät benutzen.",
          "en": "Please read the instruction before using the device.",
          "sense": {
            "en": "instruction",
            "de": "die Anweisung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-gefahrenstelle",
      "t": "оп+асный уч+асток",
      "pos": "noun",
      "gender": "m",
      "plural": "оп+асные уч+астки",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 9,
          "headword": "Gefahrenstelle",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "hazardous area",
      "de": "die Gefahrenstelle",
      "examples": [
        {
          "t": "[[Оп+асный уч+асток]] чётко обозн+ачен.",
          "de": "Die Gefahrenstelle ist deutlich gekennzeichnet.",
          "en": "The hazardous area is clearly marked.",
          "sense": {
            "en": "hazardous area",
            "de": "die Gefahrenstelle"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-stromschlag",
      "t": "уд+ар электр+ическим т+оком",
      "pos": "noun",
      "gender": "m",
      "plural": "уд+ары электр+ическим т+оком",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 10,
          "headword": "Stromschlag",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "electric shock",
      "de": "der Stromschlag",
      "examples": [
        {
          "t": "На обуч+ении обсужд+ают риск [[уд+ара электр+ическим т+оком]].",
          "de": "Die Schulung behandelt das Risiko eines Stromschlags.",
          "en": "The training covers the risk of an electric shock.",
          "sense": {
            "en": "electric shock",
            "de": "der Stromschlag"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-ersthelfer",
      "t": "сотр+удник, об+ученный п+ервой п+омощи",
      "pos": "noun",
      "gender": "m",
      "plural": "сотр+удники, об+ученные п+ервой п+омощи",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Ersthelfer",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "first aider",
      "de": "der Ersthelfer",
      "examples": [
        {
          "t": "В сп+иске ук+азан к+аждый [[сотр+удник, об+ученный п+ервой п+омощи]].",
          "de": "Auf der Liste steht, wer im Betrieb als Ersthelfer ausgebildet ist.",
          "en": "The list shows who has been trained as a first aider at the company.",
          "sense": {
            "en": "first aider",
            "de": "der Ersthelfer"
          }
        }
      ],
      "note": {
        "de": "Eine in Erster Hilfe ausgebildete Person am Arbeitsplatz; nicht automatisch ein Rettungssanitäter.",
        "en": "A workplace employee trained in first aid, not necessarily a paramedic."
      }
    },
    {
      "id": "ru-telc26-evakuierung",
      "t": "эваку+ация",
      "pos": "noun",
      "gender": "f",
      "plural": "эваку+ации",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Evakuierung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "evacuation",
      "de": "die Evakuierung",
      "examples": [
        {
          "t": "[[Эваку+ацию]] обсужд+ают во вр+емя уч+ений.",
          "de": "Die Evakuierung wird bei einer Übung besprochen.",
          "en": "The evacuation is discussed during a drill.",
          "sense": {
            "en": "evacuation",
            "de": "die Evakuierung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-fluchtweg",
      "t": "путь эваку+ации",
      "pos": "noun",
      "gender": "m",
      "plural": "пут+и эваку+ации",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Flucht-/Rettungsweg",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "escape route",
      "de": "der Fluchtweg",
      "examples": [
        {
          "t": "[[Путь эваку+ации]] отм+ечен на пл+ане зелёным цв+етом.",
          "de": "Der Fluchtweg ist auf dem Plan grün markiert.",
          "en": "The escape route is marked in green on the plan.",
          "sense": {
            "en": "escape route",
            "de": "der Fluchtweg"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-gehoerschutz",
      "t": "ср+едства защ+иты сл+уха",
      "pos": "noun",
      "gender": "pl",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Gehörschutz",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "hearing protection",
      "de": "der Gehörschutz",
      "examples": [
        {
          "t": "Для посещ+ения ш+умного ц+еха подгот+овлены [[ср+едства защ+иты сл+уха]].",
          "de": "Für den Besuch der lauten Werkhalle liegt Gehörschutz bereit.",
          "en": "Hearing protection is available for the visit to the noisy workshop.",
          "sense": {
            "en": "hearing protection",
            "de": "der Gehörschutz"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "ср+едства защ+иты сл+уха"
    },
    {
      "id": "ru-telc26-notausgang",
      "t": "авар+ийный в+ыход",
      "pos": "noun",
      "gender": "m",
      "plural": "авар+ийные в+ыходы",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Notausgang",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "emergency exit",
      "de": "der Notausgang",
      "examples": [
        {
          "t": "Табл+ичка пок+азывает путь к [[авар+ийному в+ыходу]].",
          "de": "Das Schild zeigt den Weg zum Notausgang.",
          "en": "The sign points the way to the emergency exit.",
          "sense": {
            "en": "emergency exit",
            "de": "der Notausgang"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-rutschgefahr",
      "t": "оп+асность поскользн+уться",
      "pos": "noun",
      "gender": "f",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 34,
          "headword": "Rutschgefahr",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "slip hazard",
      "de": "die Rutschgefahr",
      "examples": [
        {
          "t": "На м+окром пол+у есть [[оп+асность поскользн+уться]].",
          "de": "Auf dem nassen Boden besteht Rutschgefahr.",
          "en": "The wet floor presents a slip hazard.",
          "sense": {
            "en": "slip hazard",
            "de": "die Rutschgefahr"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-sammelstelle",
      "t": "м+есто сб+ора",
      "pos": "noun",
      "gender": "n",
      "plural": "мест+а сб+ора",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 34,
          "headword": "Sammelstelle",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "assembly point",
      "de": "die Sammelstelle",
      "examples": [
        {
          "t": "[[М+есто сб+ора]] нах+одится за парк+овкой.",
          "de": "Die Sammelstelle befindet sich hinter dem Parkplatz.",
          "en": "The assembly point is behind the car park.",
          "sense": {
            "en": "assembly point",
            "de": "die Sammelstelle"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-schutzbrille",
      "t": "защ+итные очк+и",
      "pos": "noun",
      "gender": "pl",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 34,
          "headword": "Schutzbrille",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "safety goggles",
      "de": "die Schutzbrille",
      "examples": [
        {
          "t": "[[Защ+итные очк+и]] леж+ат в шкаф+у р+ядом с перч+атками.",
          "de": "Die Schutzbrille liegt zusammen mit den Handschuhen im Schrank.",
          "en": "The safety goggles are in the cupboard with the gloves.",
          "sense": {
            "en": "safety goggles",
            "de": "die Schutzbrille"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "защ+итные очк+и"
    },
    {
      "id": "ru-telc26-schutzhelm",
      "t": "защ+итная к+аска",
      "pos": "noun",
      "gender": "f",
      "plural": "защ+итные к+аски",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 34,
          "headword": "Schutzhelm",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "hard hat",
      "de": "der Schutzhelm",
      "examples": [
        {
          "t": "На ег+о [[защ+итной к+аске]] есть логот+ип комп+ании.",
          "de": "Sein Schutzhelm trägt das Logo des Betriebs.",
          "en": "His hard hat carries the company logo.",
          "sense": {
            "en": "hard hat",
            "de": "der Schutzhelm"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-qualitaetssicherung",
      "t": "обесп+ечение к+ачества",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 20,
          "headword": "Qualitätssicherung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "quality assurance",
      "de": "die Qualitätssicherung",
      "examples": [
        {
          "t": "Сл+ужба [[обесп+ечения к+ачества]] провер+яет в+ыборку п+еред дост+авкой.",
          "de": "Die Qualitätssicherung prüft vor der Lieferung eine Stichprobe.",
          "en": "Quality assurance checks a sample before delivery.",
          "sense": {
            "en": "quality assurance",
            "de": "die Qualitätssicherung"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-richtlinie",
      "t": "руковод+ящий пр+инцип",
      "pos": "noun",
      "gender": "m",
      "plural": "руковод+ящие пр+инципы",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 20,
          "headword": "Richtlinien",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "guideline",
      "de": "die Richtlinie",
      "examples": [
        {
          "t": "Н+овый [[руковод+ящий пр+инцип]] оп+исывает раб+оту с конфиденци+альными докум+ентами.",
          "de": "Die neue Richtlinie beschreibt den Umgang mit vertraulichen Unterlagen.",
          "en": "The new guideline describes how to handle confidential documents.",
          "sense": {
            "en": "guideline",
            "de": "die Richtlinie"
          }
        }
      ],
      "note": {
        "de": "Bezeichnet im Arbeitskontext eine Richtlinie oder Vorgabe, keine geometrische Linie.",
        "en": "A workplace guideline, rule or directive."
      }
    },
    {
      "id": "ru-telc26-abdeckung",
      "t": "защ+итная кр+ышка",
      "pos": "noun",
      "gender": "f",
      "plural": "защ+итные кр+ышки",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 32,
          "headword": "Abdeckung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "protective cover",
      "de": "die Abdeckung",
      "examples": [
        {
          "t": "[[Защ+итная кр+ышка]] приб+ора поврежден+а.",
          "de": "Die Abdeckung des Geräts ist beschädigt.",
          "en": "The device’s protective cover is damaged.",
          "sense": {
            "en": "protective cover",
            "de": "die Abdeckung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-einrasten",
      "t": "защёлкиваться",
      "pos": "verb",
      "aspect": "impf",
      "forms": {
        "praes": "защёлкивается, защёлкиваются",
        "praet": "защёлкивался (-лась, -лось)",
        "perf": "pf. защёлкнуться"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "einrasten",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "click into place",
      "de": "einrasten",
      "examples": [
        {
          "t": "Кр+ышка [[защёлкивается]] с отчётливым щелчк+ом.",
          "de": "Die Abdeckung rastet mit einem hörbaren Klick ein.",
          "en": "The cover clicks into place with an audible click.",
          "sense": {
            "en": "click into place",
            "de": "einrasten"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "bureau_docs",
  "items": [
    {
      "id": "ru-telc26-beglaubigte-uebersetzung",
      "t": "зав+еренный перев+од",
      "pos": "noun",
      "gender": "m",
      "plural": "зав+еренные перев+оды",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 6,
          "headword": "beglaubigte Übersetzung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "certified translation",
      "de": "die beglaubigte Übersetzung",
      "examples": [
        {
          "t": "К заявл+ению прил+ожен [[зав+еренный перев+од]] свид+етельства.",
          "de": "Dem Antrag liegt eine beglaubigte Übersetzung des Zeugnisses bei.",
          "en": "A certified translation of the certificate is enclosed with the application.",
          "sense": {
            "en": "certified translation",
            "de": "die beglaubigte Übersetzung"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_corporate",
  "items": [
    {
      "id": "ru-telc26-einzelunternehmer",
      "t": "индивиду+альный предприним+атель",
      "pos": "noun",
      "gender": "m",
      "plural": "индивиду+альные предприним+атели",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 6,
          "headword": "Einzelunternehmer",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "sole proprietor",
      "de": "der Einzelunternehmer",
      "examples": [
        {
          "t": "Как [[индивиду+альный предприним+атель]], он сам ведёт бухг+алтерию.",
          "de": "Als Einzelunternehmer erledigt er die Buchhaltung selbst.",
          "en": "As a sole proprietor, he does the bookkeeping himself.",
          "sense": {
            "en": "sole proprietor",
            "de": "der Einzelunternehmer"
          }
        }
      ],
      "note": {
        "de": "Einzelunternehmer als natürliche Person; die konkreten Rechtsformen hängen vom jeweiligen Land ab.",
        "en": "A sole proprietor operating in their own name; exact legal registration rules depend on the country."
      }
    },
    {
      "id": "ru-telc26-verschwiegenheitspflicht",
      "t": "об+язанность сохран+ять конфиденци+альность",
      "pos": "noun",
      "gender": "f",
      "plural": "об+язанности сохран+ять конфиденци+альность",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 9,
          "headword": "Verschwiegenheitspflicht",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "duty of confidentiality",
      "de": "die Verschwiegenheitspflicht",
      "examples": [
        {
          "t": "Во вр+емя вв+одного обуч+ения объясн+яют [[об+язанность сохран+ять конфиденци+альность]].",
          "de": "Bei der Einarbeitung wird die Verschwiegenheitspflicht erklärt.",
          "en": "The duty of confidentiality is explained during induction.",
          "sense": {
            "en": "duty of confidentiality",
            "de": "die Verschwiegenheitspflicht"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_labour",
  "items": [
    {
      "id": "ru-telc26-arbeitsverhaeltnis",
      "t": "трудов+ые отнош+ения",
      "pos": "noun",
      "gender": "pl",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 8,
          "headword": "Arbeitsverhältnis",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "employment relationship",
      "de": "das Arbeitsverhältnis",
      "examples": [
        {
          "t": "[[Трудов+ые отнош+ения]] начин+аются с п+ервого дня сл+едующего м+есяца.",
          "de": "Das Arbeitsverhältnis beginnt am ersten Tag des nächsten Monats.",
          "en": "The employment relationship begins on the first day of next month.",
          "sense": {
            "en": "employment relationship",
            "de": "das Arbeitsverhältnis"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "трудов+ые отнош+ения"
    },
    {
      "id": "ru-telc26-lohnfortzahlung",
      "t": "сохран+ение з+аработной пл+аты",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 8,
          "headword": "Lohnfortzahlung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "continued payment of wages",
      "de": "die Lohnfortzahlung",
      "examples": [
        {
          "t": "Догов+ор определ+яет [[сохран+ение з+аработной пл+аты]] во вр+емя бол+езни.",
          "de": "Der Vertrag regelt die Lohnfortzahlung im Krankheitsfall.",
          "en": "The contract addresses the continued payment of wages during illness.",
          "sense": {
            "en": "continued payment of wages",
            "de": "die Lohnfortzahlung"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-kernzeit",
      "t": "обяз+ательные час+ы прис+утствия",
      "pos": "noun",
      "gender": "pl",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 19,
          "headword": "Kernzeit",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "core hours",
      "de": "die Kernzeit",
      "examples": [
        {
          "t": "[[Обяз+ательные час+ы прис+утствия]] ук+азаны в календар+е ком+анды.",
          "de": "Die Kernzeit wird im Teamkalender angezeigt.",
          "en": "The core hours are shown in the team calendar.",
          "sense": {
            "en": "core hours",
            "de": "die Kernzeit"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "обяз+ательные час+ы прис+утствия"
    },
    {
      "id": "ru-telc26-wechselschicht",
      "t": "раб+ота в черед+ующиеся см+ены",
      "pos": "noun",
      "gender": "f",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 19,
          "headword": "Wechselschicht",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "rotating shift",
      "de": "die Wechselschicht",
      "examples": [
        {
          "t": "На произв+одстве введен+а [[раб+ота в черед+ующиеся см+ены]].",
          "de": "In der Produktion wurde Wechselschicht eingeführt.",
          "en": "Production introduced a rotating shift system.",
          "sense": {
            "en": "rotating shift",
            "de": "die Wechselschicht"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-freistellung",
      "t": "освобожд+ение от раб+оты",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Freistellung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "leave of absence",
      "de": "die Freistellung",
      "examples": [
        {
          "t": "Для повыш+ения квалифик+ации он запр+ашивает [[освобожд+ение от раб+оты]].",
          "de": "Für die Fortbildung beantragt er eine Freistellung.",
          "en": "He is applying for leave of absence for the training course.",
          "sense": {
            "en": "leave of absence",
            "de": "die Freistellung"
          }
        }
      ],
      "note": {
        "de": "In dieser Bedeutung meist im Singular. Befreiung von der Arbeitspflicht, z. B. für eine Fortbildung; ob bezahlt, hängt von der Vereinbarung ab.",
        "en": "Normally singular in this sense. Release from work duties, e.g. for training; whether paid depends on the agreement."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "workcomm",
  "items": [
    {
      "id": "ru-telc26-arbeitsablauf",
      "t": "раб+очий проц+есс",
      "pos": "noun",
      "gender": "m",
      "plural": "раб+очие проц+ессы",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 5,
          "headword": "Arbeitsablauf",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "workflow",
      "de": "der Arbeitsablauf",
      "examples": [
        {
          "t": "Контр+ольный сп+исок д+елает [[раб+очий проц+есс]] пон+ятнее.",
          "de": "Eine Checkliste macht den Arbeitsablauf übersichtlicher.",
          "en": "A checklist makes the workflow easier to follow.",
          "sense": {
            "en": "workflow",
            "de": "der Arbeitsablauf"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-verbesserungsvorschlag",
      "t": "предлож+ение по улучш+ению",
      "pos": "noun",
      "gender": "n",
      "plural": "предлож+ения по улучш+ению",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 9,
          "headword": "Verbesserungsvorschlag",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "suggestion for improvement",
      "de": "der Verbesserungsvorschlag",
      "examples": [
        {
          "t": "Ком+анда обс+удит к+аждое [[предлож+ение по улучш+ению]] на сл+едующей встр+ече.",
          "de": "Das Team bespricht jeden Verbesserungsvorschlag in der nächsten Sitzung.",
          "en": "The team will discuss each suggestion for improvement at the next meeting.",
          "sense": {
            "en": "suggestion for improvement",
            "de": "der Verbesserungsvorschlag"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-vorgehen",
      "t": "пор+ядок д+ействий",
      "pos": "noun",
      "gender": "m",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 20,
          "headword": "Vorgehen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "procedure",
      "de": "das Vorgehen",
      "examples": [
        {
          "t": "Мы соглас+уем дальн+ейший [[пор+ядок д+ействий]] с кли+енткой.",
          "de": "Wir stimmen das weitere Vorgehen mit der Kundin ab.",
          "en": "We will agree on the next procedure with the client.",
          "sense": {
            "en": "procedure",
            "de": "das Vorgehen"
          }
        }
      ],
      "note": {
        "de": "In dieser Bedeutung meist im Singular. Bezeichnet ein festgelegtes Vorgehen im Arbeitsalltag.",
        "en": "Normally singular in this sense. Refers to an established procedure or sequence of steps."
      }
    },
    {
      "id": "ru-telc26-besprechungsraum",
      "t": "перегов+орная к+омната",
      "pos": "noun",
      "gender": "f",
      "plural": "перегов+орные к+омнаты",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 19,
          "headword": "Besprechungsraum",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "meeting room",
      "de": "der Besprechungsraum",
      "examples": [
        {
          "t": "[[Перегов+орная к+омната]] заброн+ирована на два час+а.",
          "de": "Der Besprechungsraum ist für zwei Stunden reserviert.",
          "en": "The meeting room is reserved for two hours.",
          "sense": {
            "en": "meeting room",
            "de": "der Besprechungsraum"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-tagesordnungspunkt",
      "t": "пункт пов+естки дня",
      "pos": "noun",
      "gender": "m",
      "plural": "п+ункты пов+естки дня",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 30,
          "headword": "Tagesordnungspunkt",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "agenda item",
      "de": "der Tagesordnungspunkt",
      "examples": [
        {
          "t": "Пробл+емы с дост+авкой — п+ервый [[пункт пов+естки дня]].",
          "de": "Die Lieferprobleme sind der erste Tagesordnungspunkt.",
          "en": "The delivery problems are the first agenda item.",
          "sense": {
            "en": "agenda item",
            "de": "der Tagesordnungspunkt"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-ergebnisprotokoll",
      "t": "проток+ол пр+инятых реш+ений",
      "pos": "noun",
      "gender": "m",
      "plural": "проток+олы пр+инятых реш+ений",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 30,
          "headword": "Ergebnisprotokoll",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "action minutes",
      "de": "das Ergebnisprotokoll",
      "examples": [
        {
          "t": "В [[проток+оле пр+инятых реш+ений]] ук+азаны ит+оги и сл+едующие зад+ачи.",
          "de": "Im Ergebnisprotokoll stehen die Beschlüsse und die nächsten Aufgaben.",
          "en": "The action minutes list the decisions and the next tasks.",
          "sense": {
            "en": "action minutes",
            "de": "das Ergebnisprotokoll"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-verlaufsprotokoll",
      "t": "проток+ол х+ода обсужд+ения",
      "pos": "noun",
      "gender": "m",
      "plural": "проток+олы х+ода обсужд+ения",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 30,
          "headword": "Verlaufsprotokoll",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "detailed minutes",
      "de": "das Verlaufsprotokoll",
      "examples": [
        {
          "t": "[[Проток+ол х+ода обсужд+ения]] фикс+ирует основн+ые выступл+ения в их посл+едовательности.",
          "de": "Das Verlaufsprotokoll hält die wichtigsten Beiträge in ihrer Reihenfolge fest.",
          "en": "The detailed minutes record the main contributions in their order.",
          "sense": {
            "en": "detailed minutes",
            "de": "das Verlaufsprotokoll"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-vorbesprechung",
      "t": "предвар+ительное обсужд+ение",
      "pos": "noun",
      "gender": "n",
      "plural": "предвар+ительные обсужд+ения",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 31,
          "headword": "Vorbesprechung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "preliminary meeting",
      "de": "die Vorbesprechung",
      "examples": [
        {
          "t": "На [[предвар+ительном обсужд+ении]] мы уточн+им р+оли для презент+ации.",
          "de": "In der Vorbesprechung klären wir die Rollen für die Präsentation.",
          "en": "In the preliminary meeting, we will clarify the roles for the presentation.",
          "sense": {
            "en": "preliminary meeting",
            "de": "die Vorbesprechung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-protokollieren",
      "t": "протокол+ировать",
      "pos": "verb",
      "aspect": "impf",
      "forms": {
        "praes": "протокол+ирую, протокол+ируешь",
        "praet": "протокол+ировал",
        "perf": "pf. запротокол+ировать"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 31,
          "headword": "protokollieren",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "take minutes",
      "de": "protokollieren",
      "examples": [
        {
          "t": "Колл+ега [[протокол+ирует]] совещ+ание.",
          "de": "Die Kollegin protokolliert die Besprechung.",
          "en": "The colleague takes minutes at the meeting.",
          "sense": {
            "en": "take minutes",
            "de": "protokollieren"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-nachvollziehen",
      "t": "пон+ять",
      "pos": "verb",
      "aspect": "pf",
      "forms": {
        "praes": "пойм+у, поймёшь",
        "praet": "п+онял (понял+а)",
        "perf": "impf. поним+ать"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 31,
          "headword": "nachvollziehen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "follow the reasoning",
      "de": "nachvollziehen",
      "examples": [
        {
          "t": "Он+а [[понял+а]] л+огику рассужд+ений, прослед+ив к+аждый шаг.",
          "de": "Sie vollzog die Argumentation Schritt für Schritt nach.",
          "en": "She followed the reasoning step by step.",
          "sense": {
            "en": "follow the reasoning",
            "de": "nachvollziehen"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-widersprechen",
      "t": "противор+ечить",
      "pos": "verb",
      "aspect": "impf",
      "forms": {
        "praes": "противор+ечу, противор+ечишь",
        "praet": "противор+ечил",
        "perf": "—"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 31,
          "headword": "widersprechen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "contradict",
      "de": "widersprechen",
      "examples": [
        {
          "t": "Н+овые д+анные [[противор+ечат]] пр+ежнему отчёту.",
          "de": "Die neuen Zahlen widersprechen dem bisherigen Bericht.",
          "en": "The new figures contradict the previous report.",
          "sense": {
            "en": "contradict",
            "de": "widersprechen"
          }
        }
      ],
      "note": {
        "de": "Im Beispiel widersprechen Daten einem Bericht. Russisch противоре́чить steht mit dem Dativ.",
        "en": "Here the figures contradict a report. Russian противоре́чить takes the dative case."
      }
    },
    {
      "id": "ru-telc26-zustimmen",
      "t": "соглаш+аться",
      "pos": "verb",
      "aspect": "impf",
      "forms": {
        "praes": "соглаш+аюсь, соглаш+аешься",
        "praet": "соглаш+ался",
        "perf": "pf. соглас+иться"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 31,
          "headword": "zustimmen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "agree",
      "de": "zustimmen",
      "examples": [
        {
          "t": "Он+а [[соглаш+ается]] с предл+оженным гр+афиком.",
          "de": "Sie stimmt dem vorgeschlagenen Zeitplan zu.",
          "en": "She agrees to the proposed schedule.",
          "sense": {
            "en": "agree",
            "de": "zustimmen"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "dev",
  "items": [
    {
      "id": "ru-telc26-datenblatt",
      "t": "техн+ическое опис+ание",
      "pos": "noun",
      "gender": "n",
      "plural": "техн+ические опис+ания",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 21,
          "headword": "Datenblatt",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "datasheet",
      "de": "das Datenblatt",
      "examples": [
        {
          "t": "Техн+ические разм+еры ук+азаны в [[техн+ическом опис+ании]].",
          "de": "Die technischen Maße stehen im Datenblatt.",
          "en": "The technical dimensions are listed in the datasheet.",
          "sense": {
            "en": "datasheet",
            "de": "das Datenblatt"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-fehlerhaft",
      "t": "ош+ибочный",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 28,
          "headword": "fehlerhaft",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "faulty",
      "de": "fehlerhaft",
      "examples": [
        {
          "t": "[[Ош+ибочный]] расчёт привёл к нев+ерной +общей с+умме.",
          "de": "Eine fehlerhafte Berechnung führte zum falschen Gesamtpreis.",
          "en": "A faulty calculation produced an incorrect total price.",
          "sense": {
            "en": "faulty",
            "de": "fehlerhaft"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "fin_marketing",
  "items": [
    {
      "id": "ru-telc26-aussteller",
      "t": "уч+астник в+ыставки",
      "pos": "noun",
      "gender": "m",
      "plural": "уч+астники в+ыставки",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 21,
          "headword": "Aussteller",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "exhibitor",
      "de": "der Aussteller",
      "examples": [
        {
          "t": "К+аждый [[уч+астник в+ыставки]] получ+ает отд+ельный стенд.",
          "de": "Jeder Aussteller bekommt einen eigenen Stand.",
          "en": "Each exhibitor gets a separate stand.",
          "sense": {
            "en": "exhibitor",
            "de": "der Aussteller"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-wettbewerber",
      "t": "конкур+ент",
      "pos": "noun",
      "gender": "m",
      "plural": "конкур+енты",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 22,
          "headword": "Wettbewerber",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "competitor",
      "de": "der Wettbewerber",
      "examples": [
        {
          "t": "[[Конкур+ент]] предлаг+ает пох+ожую усл+угу.",
          "de": "Ein Wettbewerber bietet einen ähnlichen Service an.",
          "en": "A competitor offers a similar service.",
          "sense": {
            "en": "competitor",
            "de": "der Wettbewerber"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "clients",
  "items": [
    {
      "id": "ru-telc26-preisnachlass",
      "t": "сниж+ение цен+ы",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 11,
          "headword": "Preisnachlass",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "price reduction",
      "de": "der Preisnachlass",
      "examples": [
        {
          "t": "Для б+олее кр+упного зак+аза согласов+али [[сниж+ение цен+ы]].",
          "de": "Für die größere Bestellung wurde ein Preisnachlass vereinbart.",
          "en": "A price reduction was agreed for the larger order.",
          "sense": {
            "en": "price reduction",
            "de": "der Preisnachlass"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-sonderwunsch",
      "t": "ос+обое пожел+ание",
      "pos": "noun",
      "gender": "n",
      "plural": "ос+обые пожел+ания",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 24,
          "headword": "Sonderwunsch",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "special request",
      "de": "der Sonderwunsch",
      "examples": [
        {
          "t": "Пож+алуйста, сообщ+ите нам своё [[ос+обое пожел+ание]] п+еред зак+азом.",
          "de": "Bitte teilen Sie uns Ihren Sonderwunsch vor der Bestellung mit.",
          "en": "Please tell us your special request before placing the order.",
          "sense": {
            "en": "special request",
            "de": "der Sonderwunsch"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-bestandskunde",
      "t": "д+ействующий кли+ент",
      "pos": "noun",
      "gender": "m",
      "plural": "д+ействующие кли+енты",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "Bestandskunde",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "existing customer",
      "de": "der Bestandskunde",
      "examples": [
        {
          "t": "Как [[д+ействующий кли+ент]], он уж+е им+еет н+омер кли+ента.",
          "de": "Als Bestandskunde hat er bereits eine Kundennummer.",
          "en": "As an existing customer, he already has a customer number.",
          "sense": {
            "en": "existing customer",
            "de": "der Bestandskunde"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-kundennummer",
      "t": "н+омер кли+ента",
      "pos": "noun",
      "gender": "m",
      "plural": "номер+а кли+ентов",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "Kundennummer",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "customer number",
      "de": "die Kundennummer",
      "examples": [
        {
          "t": "Ваш [[н+омер кли+ента]] ук+азан в в+ерхней ч+асти счёта.",
          "de": "Ihre Kundennummer steht oben auf der Rechnung.",
          "en": "Your customer number is at the top of the invoice.",
          "sense": {
            "en": "customer number",
            "de": "die Kundennummer"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-neukunde",
      "t": "н+овый кли+ент",
      "pos": "noun",
      "gender": "m",
      "plural": "н+овые кли+енты",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "Neukunde",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "new customer",
      "de": "der Neukunde",
      "examples": [
        {
          "t": "К+аждый [[н+овый кли+ент]] получ+ает кор+откое введ+ение в раб+оту с порт+алом.",
          "de": "Jeder Neukunde erhält eine kurze Einführung in das Portal.",
          "en": "Each new customer receives a short introduction to the portal.",
          "sense": {
            "en": "new customer",
            "de": "der Neukunde"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-entgegenkommen",
      "t": "гот+овность пойт+и навстр+ечу",
      "pos": "noun",
      "gender": "f",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 18,
          "headword": "Entgegenkommen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "goodwill",
      "de": "das Entgegenkommen",
      "examples": [
        {
          "t": "Спас+ибо за в+ашу [[гот+овность пойт+и навстр+ечу]] при измен+ении д+аты.",
          "de": "Vielen Dank für Ihr Entgegenkommen bei der Terminänderung.",
          "en": "Thank you for your goodwill in accommodating the change of date.",
          "sense": {
            "en": "goodwill",
            "de": "das Entgegenkommen"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "ops_logistics",
  "items": [
    {
      "id": "ru-telc26-eilzuschlag",
      "t": "допл+ата за ср+очность",
      "pos": "noun",
      "gender": "f",
      "plural": "допл+аты за ср+очность",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 24,
          "headword": "Eilzuschlag",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "express surcharge",
      "de": "der Eilzuschlag",
      "examples": [
        {
          "t": "В предлож+ении ук+азана [[допл+ата за ср+очность]] дост+авки.",
          "de": "Für die schnellere Lieferung steht ein Eilzuschlag im Angebot.",
          "en": "The quote includes an express surcharge for faster delivery.",
          "sense": {
            "en": "express surcharge",
            "de": "der Eilzuschlag"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-versand",
      "t": "отпр+авка",
      "pos": "noun",
      "gender": "f",
      "plural": "отпр+авки",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 25,
          "headword": "Versand",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "dispatch",
      "de": "der Versand",
      "examples": [
        {
          "t": "П+осле пров+ерки тов+ар гот+ов к [[отпр+авке]].",
          "de": "Nach der Prüfung ist die Ware für den Versand bereit.",
          "en": "After inspection, the goods are ready for dispatch.",
          "sense": {
            "en": "dispatch",
            "de": "der Versand"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-gewerbegebiet",
      "t": "пром+ышленная з+она",
      "pos": "noun",
      "gender": "f",
      "plural": "пром+ышленные з+оны",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 20,
          "headword": "Gewerbegebiet",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "industrial estate",
      "de": "das Gewerbegebiet",
      "examples": [
        {
          "t": "Н+овый склад нах+одится в [[пром+ышленной з+оне]].",
          "de": "Das neue Lager liegt in einem Gewerbegebiet.",
          "en": "The new warehouse is on an industrial estate.",
          "sense": {
            "en": "industrial estate",
            "de": "das Gewerbegebiet"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "fin_accounting",
  "items": [
    {
      "id": "ru-telc26-nettopreis",
      "t": "цен+а без НДС",
      "pos": "noun",
      "gender": "f",
      "plural": "ц+ены без НДС",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 24,
          "headword": "Nettopreis",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "net price",
      "de": "der Nettopreis",
      "examples": [
        {
          "t": "В предлож+ении снач+ала ук+азана [[цен+а без НДС]], а нал+ог приведён отд+ельно.",
          "de": "Im Angebot steht zuerst der Nettopreis, die Mehrwertsteuer folgt separat.",
          "en": "The quote lists the net price first, with VAT shown separately.",
          "sense": {
            "en": "net price",
            "de": "der Nettopreis"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-bruttopreis",
      "t": "цен+а с НДС",
      "pos": "noun",
      "gender": "f",
      "plural": "ц+ены с НДС",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 24,
          "headword": "Bruttopreis",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "gross price",
      "de": "der Bruttopreis",
      "examples": [
        {
          "t": "Пож+алуйста, сравн+ите [[ц+ену с НДС]].",
          "de": "Bitte vergleichen Sie den Bruttopreis einschließlich Mehrwertsteuer.",
          "en": "Please compare the gross price including VAT.",
          "sense": {
            "en": "gross price",
            "de": "der Bruttopreis"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-skonto",
      "t": "ск+идка за доср+очную опл+ату",
      "pos": "noun",
      "gender": "f",
      "plural": "ск+идки за доср+очную опл+ату",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 24,
          "headword": "Skonto",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "early payment discount",
      "de": "das Skonto",
      "examples": [
        {
          "t": "В предлож+ении есть [[ск+идка за доср+очную опл+ату]] в соглас+ованный срок.",
          "de": "Das Angebot nennt ein Skonto bei Zahlung innerhalb der vereinbarten Frist.",
          "en": "The quote offers an early payment discount for payment within the agreed period.",
          "sense": {
            "en": "early payment discount",
            "de": "das Skonto"
          }
        }
      ],
      "note": {
        "de": "Preisnachlass bei Zahlung innerhalb einer kurzen vereinbarten Frist.",
        "en": "A discount for paying within a short agreed period."
      }
    },
    {
      "id": "ru-telc26-mahnung",
      "t": "тр+ебование об опл+ате",
      "pos": "noun",
      "gender": "n",
      "plural": "тр+ебования об опл+ате",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "Mahnung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "payment demand",
      "de": "die Mahnung",
      "examples": [
        {
          "t": "[[Тр+ебование об опл+ате]] отн+осится к ещё не опл+аченному счёту.",
          "de": "Die Mahnung bezieht sich auf die noch offene Rechnung.",
          "en": "The payment demand concerns the outstanding invoice.",
          "sense": {
            "en": "payment demand",
            "de": "die Mahnung"
          }
        }
      ],
      "note": {
        "de": "Zahlungsaufforderung für eine überfällige Rechnung, keine arbeitsrechtliche Abmahnung.",
        "en": "A formal request to pay an overdue invoice, not a disciplinary warning."
      }
    },
    {
      "id": "ru-telc26-lastschrift",
      "t": "прям+ое спис+ание",
      "pos": "noun",
      "gender": "n",
      "plural": "прям+ые спис+ания",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 27,
          "headword": "per Lastschrift",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "direct debit",
      "de": "die Lastschrift",
      "examples": [
        {
          "t": "Счёт опл+ачивается ч+ерез [[прям+ое спис+ание]] согл+асно соглас+ованному сп+особу опл+аты.",
          "de": "Die Rechnung wird nach der vereinbarten Zahlungsart per Lastschrift bezahlt.",
          "en": "The invoice is paid by direct debit under the agreed payment arrangement.",
          "sense": {
            "en": "direct debit",
            "de": "die Lastschrift"
          }
        }
      ],
      "note": {
        "de": "Bei einer Lastschrift veranlasst der Zahlungsempfänger den Einzug auf Grundlage des vereinbarten Mandats.",
        "en": "A direct debit is a payee-initiated collection under an agreed mandate; distinguish it from a transfer sent by the payer."
      }
    },
    {
      "id": "ru-telc26-zahlungserinnerung",
      "t": "напомин+ание об опл+ате",
      "pos": "noun",
      "gender": "n",
      "plural": "напомин+ания об опл+ате",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 27,
          "headword": "Zahlungserinnerung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "payment reminder",
      "de": "die Zahlungserinnerung",
      "examples": [
        {
          "t": "П+еред звонк+ом бухг+алтерия отпр+авила [[напомин+ание об опл+ате]].",
          "de": "Vor dem Anruf schickte die Buchhaltung eine Zahlungserinnerung.",
          "en": "Before calling, the accounts team sent a payment reminder.",
          "sense": {
            "en": "payment reminder",
            "de": "die Zahlungserinnerung"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-faellig",
      "t": "подлеж+ащий опл+ате",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "der Betrag ist fällig zum",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "due",
      "de": "fällig",
      "examples": [
        {
          "t": "У нас есть счёт, [[подлеж+ащий опл+ате]] в п+ятницу.",
          "de": "Uns liegt eine Rechnung vor, die am Freitag fällig ist.",
          "en": "We have an invoice that is due on Friday.",
          "sense": {
            "en": "due",
            "de": "fällig"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-abbuchen",
      "t": "сп+исывать со счёта",
      "pos": "verb",
      "aspect": "impf",
      "forms": {
        "praes": "сп+исываю, сп+исываешь",
        "praet": "сп+исывал",
        "perf": "pf. спис+ать со счёта"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 27,
          "headword": "abbuchen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "debit",
      "de": "abbuchen",
      "examples": [
        {
          "t": "Банк [[сп+исывает]] с+умму [[со счёта]].",
          "de": "Die Bank bucht den Betrag vom Konto ab.",
          "en": "The bank debits the amount from the account.",
          "sense": {
            "en": "debit",
            "de": "abbuchen"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-begleichen",
      "t": "оплат+ить",
      "pos": "verb",
      "aspect": "pf",
      "forms": {
        "praes": "оплач+у, опл+атишь",
        "praet": "оплат+ил",
        "perf": "impf. опл+ачивать"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 27,
          "headword": "eine Rechnung begleichen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "settle",
      "de": "begleichen",
      "examples": [
        {
          "t": "Кли+ент [[оплат+ил]] счёт вчер+а.",
          "de": "Der Kunde beglich die Rechnung gestern.",
          "en": "The customer settled the invoice yesterday.",
          "sense": {
            "en": "settle",
            "de": "begleichen"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "bureau_tax",
  "items": [
    {
      "id": "ru-telc26-nettoverdienst",
      "t": "з+аработок п+осле в+ычетов",
      "pos": "noun",
      "gender": "m",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 36,
          "headword": "Nettoverdienst",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "net earnings",
      "de": "der Nettoverdienst",
      "examples": [
        {
          "t": "Расчётный лист+ок пок+азывает [[з+аработок п+осле в+ычетов]].",
          "de": "Die Abrechnung zeigt den Nettoverdienst nach den Abzügen.",
          "en": "The payslip shows the net earnings after deductions.",
          "sense": {
            "en": "net earnings",
            "de": "der Nettoverdienst"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-bruttoverguetung",
      "t": "вознагражд+ение до в+ычетов",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 36,
          "headword": "Bruttovergütung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "gross remuneration",
      "de": "die Bruttovergütung",
      "examples": [
        {
          "t": "В про+екте догов+ора ук+азано ежем+есячное [[вознагражд+ение до в+ычетов]].",
          "de": "Im Entwurf des Vertrags ist die monatliche Bruttovergütung angegeben.",
          "en": "The draft contract states the monthly gross remuneration.",
          "sense": {
            "en": "gross remuneration",
            "de": "die Bruttovergütung"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-rentenversicherung",
      "t": "пенси+онное страхов+ание",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 36,
          "headword": "Rentenversicherung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "pension insurance",
      "de": "die Rentenversicherung",
      "examples": [
        {
          "t": "В расчётном листк+е ук+азан взнос на [[пенси+онное страхов+ание]].",
          "de": "Auf der Abrechnung ist ein Beitrag zur Rentenversicherung aufgeführt.",
          "en": "The payslip lists a contribution to pension insurance.",
          "sense": {
            "en": "pension insurance",
            "de": "die Rentenversicherung"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    },
    {
      "id": "ru-telc26-pflegeversicherung",
      "t": "страхов+ание на сл+учай потр+ебности в ух+оде",
      "pos": "noun",
      "gender": "n",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 36,
          "headword": "Pflegeversicherung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "long-term care insurance",
      "de": "die Pflegeversicherung",
      "examples": [
        {
          "t": "В докум+ентах есть информ+ация о [[страхов+ании на сл+учай потр+ебности в ух+оде]].",
          "de": "Die Unterlagen enthalten Informationen zur Pflegeversicherung.",
          "en": "The documents contain information about long-term care insurance.",
          "sense": {
            "en": "long-term care insurance",
            "de": "die Pflegeversicherung"
          }
        }
      ],
      "note": {
        "en": "Normally singular in this sense.",
        "de": "In dieser Bedeutung meist im Singular."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_contracts",
  "items": [
    {
      "id": "ru-telc26-werkvertrag",
      "t": "догов+ор подр+яда",
      "pos": "noun",
      "gender": "m",
      "plural": "догов+оры подр+яда",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 35,
          "headword": "Werkvertrag",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "contract for work and services",
      "de": "der Werkvertrag",
      "examples": [
        {
          "t": "[[Догов+ор подр+яда]] оп+исывает соглас+ованный результ+ат раб+оты.",
          "de": "Der Werkvertrag beschreibt das vereinbarte Arbeitsergebnis.",
          "en": "The contract for work and services describes the agreed result.",
          "sense": {
            "en": "contract for work and services",
            "de": "der Werkvertrag"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-bedingungen",
      "t": "усл+овия пост+авки и опл+аты",
      "pos": "noun",
      "gender": "pl",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 23,
          "headword": "Liefer- und Zahlungsbedingungen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "terms of delivery and payment",
      "de": "die Liefer- und Zahlungsbedingungen",
      "examples": [
        {
          "t": "Пож+алуйста, пров+ерьте [[усл+овия пост+авки и опл+аты]] п+еред зак+азом.",
          "de": "Bitte prüfen Sie die Liefer- und Zahlungsbedingungen vor der Bestellung.",
          "en": "Please check the terms of delivery and payment before placing the order.",
          "sense": {
            "en": "terms of delivery and payment",
            "de": "die Liefer- und Zahlungsbedingungen"
          }
        }
      ],
      "note": {
        "en": "Plural-only expression in this sense.",
        "de": "In dieser Bedeutung nur im Plural gebräuchlich."
      },
      "plural": "усл+овия пост+авки и опл+аты"
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "infra",
  "items": [
    {
      "id": "ru-telc26-usb-anschluss",
      "t": "USB-порт",
      "pos": "noun",
      "gender": "m",
      "plural": "USB-п+орты",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 32,
          "headword": "USB-Anschluss",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "USB port",
      "de": "der USB-Anschluss",
      "examples": [
        {
          "t": "[[USB-порт]] на пер+едней пан+ели своб+оден.",
          "de": "Der USB-Anschluss an der Vorderseite ist frei.",
          "en": "The USB port on the front is available.",
          "sense": {
            "en": "USB port",
            "de": "der USB-Anschluss"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "fin_hr",
  "items": [
    {
      "id": "ru-telc26-teamfaehig",
      "t": "ум+еющий раб+отать в ком+анде",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 4,
          "headword": "teamfähig",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "able to work in a team",
      "de": "teamfähig",
      "examples": [
        {
          "t": "Для +этой р+оли н+ужен сотр+удник, [[ум+еющий раб+отать в ком+анде]].",
          "de": "Für diese Aufgabe sollte man teamfähig sein.",
          "en": "For this role, you need to be able to work in a team.",
          "sense": {
            "en": "able to work in a team",
            "de": "teamfähig"
          }
        }
      ]
    },
    {
      "id": "ru-telc26-gewissenhaft",
      "t": "доброс+овестный",
      "pos": "adj",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 16,
          "headword": "gewissenhaft",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "en": "conscientious",
      "de": "gewissenhaft",
      "examples": [
        {
          "t": "[[Доброс+овестная]] пров+ерка помог+ает избеж+ать мн+огих дополн+ительных вопр+осов.",
          "de": "Eine gewissenhafte Prüfung verhindert viele Rückfragen.",
          "en": "A conscientious review prevents many follow-up questions.",
          "sense": {
            "en": "conscientious",
            "de": "gewissenhaft"
          }
        }
      ]
    }
  ]
});

/* === Content expansion 2026-11-27 (RU Professional) === */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function N(id, t, gender, plural, level, en, de, e) {
    var o = { id: 'ru-x27-pro-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e] };
    if (plural) o.plural = plural;
    return o;
  }
  function A(id, pos, t, level, en, de, e) {
    return { id: 'ru-x27-pro-' + id, pos: pos, level: level, t: t, en: en, de: de, examples: [e] };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('bureau_offices', [
    N('razreshenie-rabota', 'разреш+ение на раб+оту', 'n', 'разреш+ения на раб+оту', 'B2', 'work permit', 'die Arbeitserlaubnis',
      ex('Без действующего [[разреш+ения на раб+оту]] отдел кадров не подпишет договор.', 'Without a valid work permit, HR will not sign the contract.', 'Ohne gültige Arbeitserlaubnis unterschreibt die Personalabteilung den Vertrag nicht.')),
    N('munitsipalitet', 'муниципалит+ет', 'm', 'муниципалит+еты', 'B2', 'municipality, local council', 'die Gemeinde, Stadtverwaltung',
      ex('Профильный [[муниципалит+ет]] рассматривает подобные заявления в течение месяца.', 'The relevant municipality processes such applications within a month.', 'Die zuständige Gemeinde bearbeitet solche Anträge innerhalb eines Monats.')),
    N('registratsiya-adresa', 'регистр+ация по м+есту ж+ительства', 'f', '', 'B1', 'address registration', 'die Anmeldung (Wohnsitz)',
      ex('После переезда [[регистр+ация по м+есту ж+ительства]] оформляется в течение двух недель.', 'After moving, address registration is completed within two weeks.', 'Nach dem Umzug erfolgt die Wohnsitzanmeldung innerhalb von zwei Wochen.')),
    N('priem-grazhdan', 'приём гр+аждан', 'm', '', 'B2', 'public office hours / citizen reception', 'die Sprechzeit, Bürgersprechstunde',
      ex('[[Приём гр+аждан]] по записи ведётся по вторникам и четвергам.', 'Citizen reception by appointment takes place on Tuesdays and Thursdays.', 'Die Sprechzeit nach Termin findet dienstags und donnerstags statt.'))
  ]);

  reg('bureau_docs', [
    N('svidetelstvo-brake', 'свид+етельство о бр+аке', 'n', 'свид+етельства о бр+аке', 'B1', 'marriage certificate', 'die Eheurkunde',
      ex('Для смены фамилии приложите к+опию [[свид+етельства о бр+аке]].', 'To change your surname, attach a copy of the marriage certificate.', 'Für die Namensänderung fügen Sie eine Kopie der Eheurkunde bei.')),
    N('apostil', 'апост+иль', 'm', 'апост+или', 'C1', 'apostille (official authentication stamp)', 'die Apostille',
      ex('Для признания диплома за границей нужен [[апост+иль]] на оригинале.', 'To have your degree recognised abroad, you need an apostille on the original.', 'Für die Anerkennung des Diploms im Ausland ist eine Apostille auf dem Original nötig.')),
    N('arkhivnaya-spravka', 'арх+ивная спр+авка', 'f', 'арх+ивные спр+авки', 'B2', 'archival certificate, record extract', 'der Archivauszug, die Bescheinigung',
      ex('Запрос на [[арх+ивную спр+авку]] можно подать через портал госуслуг.', 'A request for an archival record extract can be submitted via the public portal.', 'Der Antrag auf eine Archivbescheinigung kann über das Portal gestellt werden.')),
    N('blank', 'бланк', 'm', 'бл+анки', 'B1', 'official form', 'das Formular, der Vordruck',
      ex('Заполните стандартный [[бланк]] синей ручкой без исправлений.', 'Fill out the standard form in blue ink without corrections.', 'Füllen Sie das Standardformular mit blauem Stift ohne Korrekturen aus.'))
  ]);

  reg('legal_ip', [
    N('tovarnaya-marka', 'тов+арная м+арка', 'f', 'тов+арные м+арки', 'B2', 'brand, trademark', 'die Handelsmarke',
      ex('Юристы зарегистрировали [[тов+арную м+арку]] до выхода продукта на рынок.', 'The lawyers registered the brand before the product launched on the market.', 'Die Juristen meldeten die Handelsmarke vor dem Marktstart an.')),
    N('litsenzionnoe-voznagrazhdenie', 'лицензи+онное вознагражд+ение', 'n', 'лицензи+онные вознагражд+ения', 'C1', 'licensing fee, royalty', 'die Lizenzgebühr',
      ex('Иллюстратор получает [[лицензи+онное вознагражд+ение]] с каждого коммерческого тиража.', 'The illustrator receives a licensing fee from each commercial print run.', 'Die Illustratorin erhält eine Lizenzgebühr für jede kommerzielle Auflage.')),
    N('litsenzionnyy-dogovor', 'лицензи+онный догов+ор', 'm', 'лицензи+онные догов+оры', 'C1', 'licence agreement', 'der Lizenzvertrag',
      ex('В [[лицензи+онном догов+оре]] прописаны границы использования шрифта.', 'The licence agreement specifies the limits on how the font may be used.', 'Im Lizenzvertrag sind die Nutzungsgrenzen der Schriftart festgelegt.')),
    N('narushenie-patent', 'наруш+ение исключ+ительных пр+ав', 'n', 'наруш+ения', 'C1', 'infringement of exclusive rights', 'die Schutzrechtsverletzung',
      ex('Ответчик получил претензию о [[наруш+ении исключ+ительных пр+ав]].', 'The defendant received a formal notice for infringement of exclusive rights.', 'Der Beklagte erhielt eine Abmahnung wegen Schutzrechtsverletzung.'))
  ]);

  reg('legal_criminal', [
    N('prigovor', 'пригов+ор', 'm', 'пригов+оры', 'B2', 'verdict, sentence', 'das Urteil, Strafmaß',
      ex('Защита обжаловала [[пригов+ор]] в апелляционном суде.', 'The defence appealed the verdict in the appellate court.', 'Die Verteidigung legte gegen das Urteil Berufung ein.')),
    N('alibi', '+алиби', 'n', '', 'B2', 'alibi', 'das Alibi',
      ex('Записи с проходной подтвердили [[+алиби]] подозреваемого.', 'Gatehouse logs confirmed the suspect’s alibi.', 'Die Zugangsdaten der Pforte bestätigten das Alibi des Verdächtigen.')),
    N('apellyatsionnaya-zhaloba', 'апелляци+онная ж+алоба', 'f', 'апелляци+онные ж+алобы', 'C1', 'appeal brief, notice of appeal', 'die Berufungsschrift',
      ex('Адвок+ат п+одал [[апелляци+онную ж+алобу]] в установленный законом срок.', 'The lawyer filed the notice of appeal within the statutory deadline.', 'Der Anwalt reichte die Berufungsschrift innerhalb der gesetzlichen Frist ein.')),
    N('svidetel', 'свид+етель', 'm', 'свид+етели', 'B2', 'witness', 'der Zeuge',
      ex('Ключевой [[свид+етель]] дал показания по видеосвязи.', 'The key witness gave testimony via video link.', 'Der Hauptzeuge sagte per Videoschalte aus.'))
  ]);

  reg('legal_corporate', [
    N('audit-riskov', 'ауд+ит р+исков', 'm', 'ауд+иты р+исков', 'C1', 'risk audit', 'die Risikoprüfung',
      ex('Ежегодный [[ауд+ит р+исков]] выявил пробелы в хранении паролей.', 'The annual risk audit uncovered gaps in password storage.', 'Die jährliche Risikoprüfung deckte Lücken bei der Passwortspeicherung auf.')),
    N('sanktsii', 'с+анкции', 'pl', 'с+анкции', 'B2', 'sanctions, penalties', 'die Sanktionen',
      ex('Проверка контрагентов помогает вовремя учесть действующие [[с+анкции]].', 'Screening business partners helps account for current sanctions in time.', 'Die Prüfung von Geschäftspartnern hilft, geltende Sanktionen rechtzeitig zu berücksichtigen.')),
    N('korporativnyy-kodeks', 'корпорат+ивный к+одекс', 'm', 'корпорат+ивные к+одексы', 'C1', 'corporate code of conduct', 'der Unternehmenskodex',
      ex('Правила предотвращения конфликта интересов закреплены в [[корпорат+ивном к+одексе]].', 'Rules for preventing conflicts of interest are laid down in the corporate code of conduct.', 'Regeln zur Vermeidung von Interessenkonflikten sind im Unternehmenskodex festgelegt.'))
  ]);

  reg('svc_hotel', [
    N('registratsiya-zaezda', 'регистр+ация за+езда', 'f', '', 'B1', 'check-in', 'der Check-in',
      ex('Онлайн-[[регистр+ация за+езда]] ускоряет получение ключа на стойке.', 'Online check-in speeds up picking up your key at the desk.', 'Der Online-Check-in beschleunigt die Schlüsselausgabe an der Rezeption.')),
    N('kategoriya-nomera', 'катег+ория н+омера', 'f', 'катег+ории номер+ов', 'B2', 'room category', 'die Zimmerkategorie',
      ex('При овербукинге гостю бесплатно повышают [[катег+орию н+омера]].', 'In case of overbooking, the guest gets a free room category upgrade.', 'Bei Überbuchung erhält der Gast ein kostenloses Upgrade der Zimmerkategorie.')),
    N('seif-nomere', 'с+ейф в н+омере', 'm', 'с+ейфы', 'B1', 'in-room safe', 'der Zimmersafe',
      ex('Паспорт и билеты удобнее всего оставить в [[с+ейфе в н+омере]].', 'It’s safest to leave your passport and tickets in the in-room safe.', 'Reisepass und Tickets lässt man am besten im Zimmersafe.')),
    N('zalog-hotel', 'депоз+ит при засел+ении', 'm', 'депоз+иты', 'B2', 'check-in security deposit', 'die Kaution beim Check-in',
      ex('При выезде [[депоз+ит при засел+ении]] автоматически возвращается на карту.', 'At check-out, the security deposit is automatically refunded to the card.', 'Beim Check-out wird die Kaution automatisch auf die Karte zurückgebucht.'))
  ]);

  reg('svc_gastro', [
    N('allergen', 'аллерг+ен', 'm', 'аллерг+ены', 'B2', 'allergen', 'das Allergen',
      ex('В карточке каждого блюда указаны основные [[аллерг+ены]].', 'The main allergens are listed on each dish’s card.', 'Auf jeder Speisekarte sind die wichtigsten Allergene angegeben.')),
    N('sanitarnye-normy', 'санит+арные н+ормы', 'pl', 'санит+арные н+ормы', 'B2', 'hygiene / sanitary regulations', 'die Hygienevorschriften',
      ex('На кухне строго соблюдаются [[санит+арные н+ормы]] хранения продуктов.', 'Hygiene regulations for food storage are strictly followed in the kitchen.', 'In der Küche werden die Hygienevorschriften zur Lagerung streng eingehalten.')),
    N('banket', 'банк+ет', 'm', 'банк+еты', 'B1', 'banquet, catered function', 'das Bankett',
      ex('Команда официантов заранее накрыла зал к вечернему [[банк+ету]].', 'The waitstaff set up the hall in advance for the evening banquet.', 'Das Serviceteam deckte den Saal vorab für das Abendbankett ein.')),
    N('beznalichnyy-raschet', 'безнал+ичный расчёт', 'm', '', 'B1', 'cashless payment', 'die bargeldlose Zahlung',
      ex('В зале принимается как наличный, так и [[безнал+ичный расчёт]].', 'Both cash and cashless payment are accepted in the dining room.', 'Im Restaurant werden sowohl Barzahlung als auch bargeldlose Zahlung akzeptiert.'))
  ]);

  reg('fin_marketing', [
    N('prezentatsiya', 'презент+ация', 'f', 'презент+ации', 'B1', 'presentation, pitch deck', 'die Präsentation',
      ex('Перед встречей проверьте, открывается ли [[презент+ация]] на проекторе.', 'Before the meeting, check whether the presentation opens on the projector.', 'Prüfen Sie vor dem Termin, ob sich die Präsentation auf dem Beamer öffnet.')),
    N('lid', 'лид', 'm', 'л+иды', 'B2', 'sales lead', 'der Lead, Interessent',
      ex('После вебинара отдел продаж получил сорок новых [[л+идов]].', 'After the webinar, sales received forty new leads.', 'Nach dem Webinar erhielt der Vertrieb vierzig neue Leads.')),
    N('pozitsionirovanie', 'позицион+ирование', 'n', '', 'B2', 'brand positioning', 'die Positionierung',
      ex('Обновлённое [[позицион+ирование]] помогло выделить продукт среди конкурентов.', 'Updated positioning helped set the product apart from competitors.', 'Die überarbeitete Positionierung hob das Produkt von der Konkurrenz ab.')),
    N('tsennostnoe-predlozhenie', 'ц+енностное предлож+ение', 'n', 'ц+енностные предлож+ения', 'C1', 'value proposition', 'das Wertversprechen',
      ex('На первом слайде важно чётко сформулировать [[ц+енностное предлож+ение]].', 'On the first slide, it’s important to state the value proposition clearly.', 'Auf der ersten Folie sollte das Wertversprechen klar formuliert werden.'))
  ]);

  reg('fin_hr', [
    N('karyernyy-rost', 'карь+ерный рост', 'm', '', 'B1', 'career progression', 'der berufliche Aufstieg',
      ex('Прозрачная система грейдов делает [[карь+ерный рост]] понятным для сотрудников.', 'A clear grading system makes career progression transparent to staff.', 'Ein klares Stufensystem macht den beruflichen Aufstieg für Mitarbeitende nachvollziehbar.')),
    N('preemnik', 'пре+емник', 'm', 'пре+емники', 'B2', 'successor', 'der Nachfolger',
      ex('Руководитель передал дела своему [[пре+емнику]] за месяц до перехода.', 'The manager handed over duties to his successor a month before moving on.', 'Der Leiter übergab die Aufgaben einen Monat vor seinem Wechsel an seinen Nachfolger.')),
    N('stazher', 'стажёр', 'm', 'стажёры', 'B1', 'intern, trainee', 'der Praktikant',
      ex('Наш [[стажёр]] подготовил аналитический обзор за две недели.', 'Our intern prepared the analytical overview in two weeks.', 'Unser Praktikant erstellte den Analyseüberblick in zwei Wochen.')),
    N('vigovor', 'в+ыговор', 'm', 'в+ыговоры', 'B2', 'formal reprimand', 'die Abmahnung, Verwarnung',
      ex('За систематическое нарушение сроков сотруднику объявили [[в+ыговор]].', 'For systematically missing deadlines, the employee was given a formal reprimand.', 'Wegen systematischer Terminverstöße erhielt der Mitarbeiter eine Verwarnung.'))
  ]);

  reg('med_clinical', [
    N('napravlenie-vrach', 'направл+ение к специал+исту', 'n', 'направл+ения', 'B1', 'specialist referral', 'die Überweisung',
      ex('Терапевт выписал [[направл+ение к специал+исту]] для точной диагностики.', 'The GP issued a specialist referral for an accurate diagnosis.', 'Die Hausärztin stellte eine Überweisung zum Facharzt aus.')),
    N('triaj', 'медс+естринская сортир+овка', 'f', '', 'C1', 'triage (emergency assessment)', 'die Triage, Ersteinschätzung',
      ex('В приёмном отделении [[медс+естринская сортир+овка]] определяет срочность помощи.', 'In the emergency ward, triage determines the urgency of care.', 'In der Notaufnahme legt die Triage die Dringlichkeit der Behandlung fest.')),
    A('ambulatornyy', 'adj', 'амбулат+орный', 'B2', 'outpatient', 'ambulant',
      ex('Небольшую операцию провели в [[амбулат+орном]] режиме без госпитализации.', 'The minor procedure was carried out on an outpatient basis without admission.', 'Der kleine Eingriff erfolgte ambulant ohne stationäre Aufnahme.')),
    A('statsionarnyy', 'adj', 'стацион+арный', 'B2', 'inpatient', 'stationär',
      ex('После травмы спортсмен три дня находился на [[стацион+арном]] лечении.', 'After the injury, the athlete stayed on inpatient treatment for three days.', 'Nach der Verletzung befand sich der Sportler drei Tage in stationärer Behandlung.'))
  ]);

  reg('bureau_tax', [
    N('nalogovaya-inspektsiya', 'нал+оговая инсп+екция', 'f', 'нал+оговые инсп+екции', 'B1', 'tax office', 'das Finanzamt',
      ex('[[Нал+оговая инсп+екция]] прислала уведомление о проверке вычетов.', 'The tax office sent a notice about reviewing the deductions.', 'Das Finanzamt schickte einen Bescheid zur Prüfung der Abzüge.')),
    N('inn', 'ИНН', 'm', '', 'B2', 'taxpayer identification number', 'die Steuernummer',
      ex('Укажите ваш [[ИНН]] в реквизитах договора с заказчиком.', 'Enter your taxpayer ID number in the contract details with the client.', 'Geben Sie Ihre Steuernummer in den Vertragsdaten für den Auftraggeber an.')),
    N('vypiska-scheta', 'в+ыписка со счёта', 'f', 'в+ыписки со счёта', 'B1', 'bank statement', 'der Kontoauszug',
      ex('Для бухгалтерии нужна свежая [[в+ыписка со счёта]] за прошлый месяц.', 'Accounting needs a fresh bank statement for last month.', 'Für die Buchhaltung wird ein aktueller Kontoauszug vom letzten Monat benötigt.')),
    N('raschetnyy-listok', 'расчётный лист+ок', 'm', 'расчётные листк+и', 'B2', 'payslip', 'die Gehaltsabrechnung',
      ex('В [[расчётном листк+е]] подробно видны начисления и налоги.', 'Earnings and taxes are shown in detail on the payslip.', 'Auf der Gehaltsabrechnung sind Vergütung und Abzüge im Detail aufgeführt.'))
  ]);
})();

/* === Content expansion Wave 2 (2026-11-27): +95 RU Pro terms (8 thinnest Pro topics) === */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function N(id, t, gender, plural, level, en, de, e) {
    var o = { id: 'ru-w2-pro-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e] };
    if (plural) o.plural = plural;
    return o;
  }
  function V(id, t, aspect, level, forms, en, de, e) {
    return { id: 'ru-w2-pro-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e] };
  }
  function A(id, pos, t, level, en, de, e) {
    return { id: 'ru-w2-pro-' + id, pos: pos, level: level, t: t, en: en, de: de, examples: [e] };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  // 1. legal_contracts (+14 -> 22)
  reg('legal_contracts', [
    N('punkt-dogovora', 'пункт догов+ора', 'm', 'п+ункты догов+ора', 'B2', 'contract clause', 'die Vertragsklausel',
      ex('Перечит+айте седьмой [[пункт догов+ора]] перед подписанием.', 'Re-read the seventh contract clause before signing.', 'Lesen Sie die siebte Vertragsklausel vor der Unterschrift erneut.')),
    N('storona-sdelki', 'сторона догов+ора', 'f', 'ст+ороны догов+ора', 'B2', 'contracting party', 'die Vertragspartei',
      ex('К+аждая [[сторона догов+ора]] получает один подписанный экземпляр.', 'Each contracting party receives one signed copy.', 'Jede Vertragspartei erhält ein unterschriebenes Exemplar.')),
    N('rastorzhenie', 'расторж+ение догов+ора', 'n', '', 'C1', 'contract termination', 'die Vertragsauflösung',
      ex('Уведомление о [[расторж+ении догов+ора]] направляется за тридцать дней.', 'Notice of contract termination is sent thirty days ahead.', 'Die Mitteilung zur Vertragsauflösung erfolgt dreißig Tage im Voraus.')),
    N('fors-mazhor', 'форс-маж+ор', 'm', '', 'B2', 'force majeure', 'die höhere Gewalt',
      ex('Стихийное бедствие считается обстоятельством [[форс-маж+ора]].', 'A natural disaster counts as force majeure.', 'Eine Naturkatastrophe gilt als höhere Gewalt.')),
    N('dopolnitelnoe-soglashenie', 'дополн+ительное соглаш+ение', 'n', 'дополн+ительные соглаш+ения', 'B2', 'addendum, amendment', 'der Nachtrag, die Zusatzvereinbarung',
      ex('Изменения цены оформили через [[дополн+ительное соглаш+ение]].', 'The price changes were formalised via an addendum.', 'Die Preisänderungen wurden per Zusatzvereinbarung festgehalten.')),
    N('garantiynyy-srok', 'гарант+ийный срок', 'm', 'гарант+ийные ср+оки', 'B2', 'warranty period', 'die Gewährleistungsfrist',
      ex('На промышленное оборудование действует [[гарант+ийный срок]] два г+ода.', 'Industrial equipment carries a two-year warranty period.', 'Für Industrieanlagen gilt eine zweijährige Gewährleistungsfrist.')),
    N('mirovoe-soglashenie', 'миров+ое соглаш+ение', 'n', 'миров+ые соглаш+ения', 'C1', 'settlement agreement', 'der Vergleich',
      ex('До начала суда стороны заключили [[миров+ое соглаш+ение]].', 'Before trial, the parties concluded a settlement agreement.', 'Vor Prozessbeginn schlossen die Parteien einen Vergleich.')),
    N('konfidentsialnost', 'обяз+ательство о неразглаш+ении', 'n', 'обяз+ательства о неразглаш+ении', 'B2', 'non-disclosure undertaking', 'die Verschwiegenheitsverpflichtung',
      ex('Перед обменом макетами партнёры подписали [[обяз+ательство о неразглаш+ении]].', 'Before exchanging mockups, the partners signed a non-disclosure undertaking.', 'Vor dem Austausch der Entwürfe unterzeichneten die Partner eine Verschwiegenheitsverpflichtung.')),
    N('subpodryadchik', 'субподр+ядчик', 'm', 'субподр+ядчики', 'B2', 'subcontractor', 'der Subunternehmer',
      ex('Привлечение [[субподр+ядчика]] требует согласия заказчика.', 'Engaging a subcontractor requires the client’s consent.', 'Die Beauftragung eines Subunternehmers bedarf der Zustimmung des Kunden.')),
    N('predmet-dogovora', 'предм+ет догов+ора', 'm', '', 'B2', 'subject matter of a contract', 'der Vertragsgegenstand',
      ex('В первой главе чётко сформулирован [[предм+ет догов+ора]].', 'The first chapter clearly defines the subject matter of the contract.', 'Im ersten Abschnitt ist der Vertragsgegenstand klar formuliert.')),
    V('prolongirovat', 'пролонг+ировать', 'impf', 'C1', ['пролонг+ирую, пролонг+ируешь', 'пролонг+ировал', 'pf. пролонг+ировать'], 'to extend, roll over (a term/contract)', 'verlängern, prolongieren',
      ex('Аренду офиса решили [[пролонг+ировать]] ещё на двенадцать м+есяцев.', 'They decided to roll over the office lease for another twelve months.', 'Man beschloss, den Büromietvertrag um weitere zwölf Monate zu verlängern.')),
    V('obyazyvatsya', 'об+язываться', 'impf', 'C1', ['обяз+уюсь, обяз+уешься', 'об+язывался', 'pf. обяз+аться'], 'to undertake, commit legally', 'sich verpflichten',
      ex('Поставщик [[обяз+уется]] заменить бракованную партию за свой счёт.', 'The supplier undertakes to replace the faulty batch at its own expense.', 'Der Lieferant verpflichtet sich, die fehlerhafte Charge auf eigene Kosten zu ersetzen.')),
    A('yuridicheski-obyazyvayushchiy', 'adj', 'юрид+ически об+язывающий', 'C1', 'legally binding', 'rechtsverbindlich',
      ex('Электронная подпись придаёт документу [[юрид+ически об+язывающую]] с+илу.', 'An electronic signature gives the document legally binding force.', 'Eine elektronische Signatur verleiht dem Dokument rechtsverbindliche Kraft.')),
    A('deystvitelnyy', 'adj', 'неоспор+имый', 'C1', 'indisputable, legally sound', 'unumstößlich, unanfechtbar',
      ex('Нотариально заверенный акт имеет [[неоспор+имую]] доказательную силу.', 'A notarised deed carries indisputable evidential weight.', 'Eine notarielle Urkunde hat unanfechtbare Beweiskraft.'))
  ]);

  // 2. ops_logistics (+12 -> 21)
  reg('ops_logistics', [
    N('gruzoperevozchik', 'перев+озчик', 'm', 'перев+озчики', 'B2', 'carrier, haulage firm', 'der Frachtführer, Spediteur',
      ex('Логисты уже выбрали надёжного [[перев+озчика]] для северного маршрута.', 'Logistics staff already picked a reliable carrier for the northern route.', 'Die Logistik hat bereits einen zuverlässigen Spediteur für die Nordroute gewählt.')),
    N('nakladnaya-tovarnaya', 'тов+арная накладн+ая', 'f', 'тов+арные накладн+ые', 'B2', 'consignment note, shipping manifest', 'der Frachtbrief, Lieferschein',
      ex('Водитель предъявил [[тов+арную накладн+ую]] на въ+езде на склад.', 'The driver presented the shipping manifest at the warehouse gate.', 'Der Fahrer legte den Lieferschein am Lagertor vor.')),
    N('rastamozhka', 'там+оженная оч+истка', 'f', '', 'C1', 'customs clearance', 'die Verzollung, Zollabfertigung',
      ex('[[Там+оженная оч+истка]] груза заняла двое суток.', 'Customs clearance of the cargo took forty-eight hours.', 'Die Zollabfertigung der Fracht dauerte zwei Tage.')),
    N('pallet', 'подд+он', 'm', 'подд+оны', 'B2', 'pallet', 'die Palette',
      ex('На одном [[подд+оне]] помещается двадцать четыре стандартные коробки.', 'Twenty-four standard boxes fit onto a single pallet.', 'Auf eine Palette passen vierundzwanzig Standardkartons.')),
    N('tsupochka-postavok', 'цепь пост+авок', 'f', 'ц+епи пост+авок', 'B2', 'supply network', 'das Liefernetzwerk',
      ex('Сбой на заводе нарушил всю [[цепь пост+авок]].', 'A factory outage disrupted the entire supply network.', 'Ein Ausfall im Werk störte das gesamte Liefernetzwerk.')),
    N('partiya-tovara', 'п+артия тов+ара', 'f', 'п+артии тов+аров', 'B2', 'consignment, batch of goods', 'die Warencharge, Sendung',
      ex('Новая [[п+артия тов+ара]] поступит на распределительный центр в среду.', 'The new batch of goods reaches the distribution centre on Wednesday.', 'Die neue Warencharge trifft am Mittwoch im Verteilzentrum ein.')),
    N('otgruzka', 'отгр+узка', 'f', 'отгр+узки', 'B2', 'dispatch, shipment release', 'der Versand, die Auslieferung',
      ex('Утренняя [[отгр+узка]] начинается ровно в семь тридцать.', 'Morning dispatch begins at seven thirty sharp.', 'Der morgendliche Versand beginnt pünktlich um sieben Uhr dreißig.')),
    N('khrupkiy-gruz', 'хр+упкий груз', 'm', '', 'B2', 'fragile cargo', 'zerbrechliche Fracht',
      ex('Коробки с отметкой «[[хр+упкий груз]]» размещают наверху.', 'Boxes marked “fragile cargo” are placed on top.', 'Kartons mit der Kennzeichnung „zerbrechliche Fracht“ stehen ganz oben.')),
    N('srok-khraneniya', 'срок реализ+ации', 'm', 'ср+оки реализ+ации', 'B2', 'sell-by period, shelf life', 'die Verkaufsfrist, Haltbarkeitsfrist',
      ex('Складская программа отслеживает [[срок реализ+ации]] каждой партии.', 'Warehouse software tracks the sell-by period of every batch.', 'Die Lagersoftware überwacht die Verkaufsfrist jeder Charge.')),
    N('vozvrat-tovara', 'возвр+атная логистика', 'f', '', 'C1', 'reverse logistics, returns handling', 'die Retourenabwicklung',
      ex('Отдел [[возвр+атной логистики]] проверяет сохранность возвращённой техники.', 'Returns handling checks the condition of returned equipment.', 'Die Retourenabwicklung prüft den Zustand zurückgesandter Geräte.')),
    V('upakovyvat', 'упак+овывать', 'impf', 'B1', ['упак+овываю, упак+овываешь', 'упак+овывал', 'pf. упак+овать'], 'to pack, wrap', 'verpacken',
      ex('Стекло нужно [[упак+овывать]] в плотный пузырчатый мат+ериал.', 'Glass needs to be packed in thick bubble wrap.', 'Glas muss in dicke Luftpolsterfolie verpackt werden.')),
    V('otslezhivat', 'отсл+еживать', 'impf', 'B2', ['отсл+еживаю, отсл+еживаешь', 'отсл+еживал', 'pf. отслед+ить'], 'to track (a parcel, fleet)', 'verfolgen, tracken',
      ex('Клиент может [[отсл+еживать]] посылку по трек-номеру в реальном времени.', 'The client can track the parcel via tracking number in real time.', 'Der Kunde kann das Paket per Sendungsnummer in Echtzeit verfolgen.'))
  ]);

  // 3. bureau_offices (+12 -> 22)
  reg('bureau_offices', [
    N('vedomstvo', 'инст+анция', 'f', 'инст+анции', 'C1', 'official authority / tier of appeal', 'die Instanz, Behörde',
      ex('Вышестоящая [[инст+анция]] пересмотрела прежнее решение за неделю.', 'The higher authority reviewed the prior ruling within a week.', 'Die übergeordnete Instanz überprüfte den früheren Bescheid binnen einer Woche.')),
    N('vid-na-zhitelstvo', 'разреш+ение на прожив+ание', 'n', 'разреш+ения на прожив+ание', 'B2', 'residence authorisation', 'die Aufenthaltsgenehmigung',
      ex('Заявление на [[разреш+ение на прожив+ание]] подаётся за два м+есяца.', 'The residence authorisation application is filed two months ahead.', 'Der Antrag auf Aufenthaltsgenehmigung wird zwei Monate vorher gestellt.')),
    N('poshlina', 'госпошл+ина', 'f', 'госпошл+ины', 'B2', 'administrative / state fee', 'die Verwaltungsgebühr',
      ex('Квитанция об оплате [[госпошл+ины]] прикладывается к анкете.', 'The receipt for paying the state fee is attached to the form.', 'Der Zahlungsbeleg über die Verwaltungsgebühr wird dem Formular beigelegt.')),
    N('zapis-na-priem', 'предвар+ительная з+апись', 'f', '', 'B1', 'prior appointment booking', 'die Terminvereinbarung',
      ex('Приём в окне паспортного стола идёт только по [[предвар+ительной з+аписи]].', 'Passport desk visits operate strictly by prior appointment.', 'Termine in der Passstelle gibt es nur nach vorheriger Vereinbarung.')),
    N('srok-deystviya', 'срок д+ействия', 'm', 'ср+оки д+ействия', 'B2', 'validity period', 'die Gültigkeitsdauer',
      ex('Проверьте [[срок д+ействия]] загранпаспорта перед покупкой билетов.', 'Check the passport’s validity period before buying tickets.', 'Prüfen Sie vor dem Ticketkauf die Gültigkeitsdauer des Reisepasses.')),
    N('reshenie-otkaz', 'письм+енный отк+аз', 'm', 'письм+енные отк+азы', 'B2', 'written refusal / rejection notice', 'der Ablehnungsbescheid',
      ex('На [[письм+енный отк+аз]] можно подать возражение в течение месяца.', 'You can file an objection against a written refusal within one month.', 'Gegen einen Ablehnungsbescheid kann binnen eines Monats Widerspruch eingelegt werden.')),
    N('khodataystvo', 'ходат+айство', 'n', 'ходат+айства', 'C1', 'formal petition / motion', 'der Antrag, das Gesuch',
      ex('Работодатель приложил [[ходат+айство]] об ускоренном рассмотрении дела.', 'The employer attached a petition for expedited review.', 'Der Arbeitgeber fügte ein Gesuch auf beschleunigte Bearbeitung bei.')),
    N('konsultatsiya-okno', 'спр+авочное окн+о', 'n', 'спр+авочные +окна', 'B1', 'information desk / counter', 'der Informationsschalter',
      ex('На входе работает [[спр+авочное окн+о]], где подсказывают номер кабинета.', 'There is an information counter at the entrance giving room numbers.', 'Am Eingang hilft der Informationsschalter bei der Raumnummer.')),
    N('podvedomstvennost', 'юрисд+икция', 'f', '', 'C1', 'jurisdiction', 'die Zuständigkeit',
      ex('Этот спор относится к [[юрисд+икции]] городского административного суда.', 'This dispute falls under the city administrative court’s jurisdiction.', 'Dieser Streit fällt in die Zuständigkeit des Verwaltungsgerichts.')),
    N('elektronnyy-portal', 'госуд+арственный порт+ал', 'm', 'госуд+арственные порт+алы', 'B2', 'public e-services portal', 'das Bürgerportal',
      ex('Справку о доходах теперь удобно скачать через [[госуд+арственный порт+ал]].', 'Income statements can now easily be downloaded via the citizen portal.', 'Einkommensbescheinigungen lassen sich bequem über das Bürgerportal abrufen.')),
    V('udostoveryat', 'удостовер+ять', 'impf', 'B2', ['удостовер+яю, удостовер+яешь', 'удостовер+ял', 'pf. удостовер+ить'], 'to certify, verify identity/copy', 'beglaubigen, bescheinigen',
      ex('Чиновник уполномочен [[удостовер+ять]] подлинность подписи гражданина.', 'The official is authorised to certify the authenticity of a citizen’s signature.', 'Der Beamte ist befugt, die Echtheit einer Unterschrift zu beglaubigen.')),
    V('obzhalovat', 'обж+аловать', 'pf', 'C1', ['обж+алую, обж+алуешь', 'обж+аловал', 'impf. обж+аловать'], 'to appeal (a ruling)', 'anfechten, Beschwerde einlegen',
      ex('Заявитель вправе [[обж+аловать]] постановление в вышестоящей инстанции.', 'The applicant has the right to appeal the ruling to a higher body.', 'Der Antragsteller darf den Bescheid bei der nächsthöheren Stelle anfechten.'))
  ]);

  // 4. svc_gastro (+12 -> 22)
  reg('svc_gastro', [
    N('zakaz-na-vynos', 'зак+аз навынос', 'm', 'зак+азы навынос', 'B1', 'takeaway order', 'die Bestellung zum Mitnehmen',
      ex('Стойка для [[зак+азов навынос]] расположена слева от кассы.', 'The counter for takeaway orders sits to the left of the till.', 'Die Theke für Bestellungen zum Mitnehmen liegt links neben der Kasse.')),
    N('sezonna-karta', 'сез+онное мен+ю', 'n', '', 'B2', 'seasonal menu', 'die Saisonkarte',
      ex('Весной ресторан полностью обновляет [[сез+онное мен+ю]].', 'In spring the restaurant completely refreshes its seasonal menu.', 'Im Frühjahr erneuert das Restaurant seine Saisonkarte vollständig.')),
    N('napitki-karta', 'в+инная к+арта', 'f', 'в+инные к+арты', 'B2', 'wine list', 'die Weinkarte',
      ex('Сомелье помог гостям подобрать напиток по [[в+инной к+арте]].', 'The sommelier helped guests choose from the wine list.', 'Der Sommelier beriet die Gäste anhand der Weinkarte.')),
    N('dieticheskiy-zapros', 'особ+ые тр+ебования к пит+анию', 'n', '', 'B2', 'dietary requirements', 'die Ernährungsbesonderheiten',
      ex('Просим гостей указывать [[особ+ые тр+ебования к пит+анию]] при бронировании.', 'We ask guests to note dietary requirements when booking.', 'Bitte geben Sie Ernährungsbesonderheiten bereits bei der Buchung an.')),
    N('komanda-zala', 'обсл+уживающий персон+ал', 'm', '', 'B2', 'waiting / service staff', 'das Servicepersonal',
      ex('Перед банкетом [[обсл+уживающий персон+ал]] проходит инструктаж по подаче.', 'Before the banquet, service staff receive a briefing on plating and flow.', 'Vor dem Bankett erhält das Servicepersonal eine Einweisung.')),
    N('zakupka-produktov', 'свеж+айшие прод+укты', 'pl', '', 'B1', 'fresh produce, ingredients', 'frische Zutaten',
      ex('Шеф-повар каждое утро принимает [[свеж+айшие прод+укты]] с рынка.', 'Every morning the chef receives fresh produce from the market.', 'Der Küchenchef nimmt jeden Morgen frische Zutaten vom Markt entgegen.')),
    N('chayovye', 'чаев+ые', 'pl', '', 'B1', 'tip, gratuity', 'das Trinkgeld',
      ex('[[Чаев+ые]] можно добавить прямо на экране терминала картой.', 'A tip can be added directly on the card terminal screen.', 'Trinkgeld kann direkt am Kartenterminal hinzugefügt werden.')),
    N('razdelnyy-schet', 'разд+ельный счёт', 'm', 'разд+ельные счет+а', 'B1', 'split bill', 'getrennte Rechnung',
      ex('Компания попросила официанта принести [[разд+ельный счёт]] на четверых.', 'The group asked the waiter to bring split bills for four.', 'Die Gruppe bat den Kellner um getrennte Rechnungen für vier Personen.')),
    N('vremya-ozhidaniya-bluda', 'вр+емя под+ачи', 'n', '', 'B2', 'serving time, kitchen wait time', 'die Wartezeit auf das Essen',
      ex('При полной посадке предупреждайте гостей о [[вр+емени под+ачи]].', 'When the dining room is full, warn guests about the kitchen wait time.', 'Bei vollem Haus sollte man Gäste über die Wartezeit informieren.')),
    N('sanitarnaya-knizhka', 'медиц+инская кн+ижка', 'f', 'медиц+инские кн+ижки', 'B2', 'food-handler health certificate', 'das Gesundheitszeugnis',
      ex('Каждый повар обязан иметь действующую [[медиц+инскую кн+ижку]].', 'Every cook must hold a valid food-handler health certificate.', 'Jeder Koch muss ein gültiges Gesundheitszeugnis besitzen.')),
    V('servirovat', 'сервиров+ать', 'impf', 'B2', ['сервир+ую, сервир+уешь', 'сервиров+ал', 'pf. отсервиров+ать'], 'to lay/set the table; plate/serve', 'den Tisch decken; anrichten',
      ex('Столы в банкетном зале начинают [[сервиров+ать]] за два ч+аса до гостей.', 'Staff begin laying tables in the banquet hall two hours before guests arrive.', 'Die Tische im Bankettsaal werden zwei Stunden vor Eintreffen der Gäste gedeckt.')),
    V('predlagat-alternativu', 'коррект+ировать', 'impf', 'B2', ['коррект+ирую, коррект+ируешь', 'коррект+ировал', 'pf. скоррект+ировать'], 'to adjust (a dish/recipe)', 'anpassen, korrigieren',
      ex('По запросу кухня может [[коррект+ировать]] соус и убрать лишние специи.', 'On request the kitchen can adjust the sauce and omit extra spices.', 'Auf Wunsch kann die Küche die Soße anpassen und scharfe Gewürze weglassen.'))
  ]);

  // 5. bureau_docs (+11 -> 22)
  reg('bureau_docs', [
    N('zakaznoe-pismo', 'ц+енное письм+о', 'n', 'ц+енные п+исьма', 'B2', 'insured / registered post with declared value', 'der Wertbrief',
      ex('Оригинал контракта отправили [[ц+енным письм+ом]] с описью вложения.', 'The original contract was sent by insured registered post with inventory.', 'Das Original des Vertrags wurde per Wertbrief mit Inhaltsverzeichnis verschickt.')),
    N('doverennost-doc', 'нотари+альная дов+еренность', 'f', 'нотари+альные дов+еренности', 'B2', 'notarised power of attorney', 'die notarielle Vollmacht',
      ex('Для получения ключей представителю нужна [[нотари+альная дов+еренность]].', 'To collect the keys, a representative needs notarised power of attorney.', 'Zur Schlüsselabholung braucht ein Vertreter eine notarielle Vollmacht.')),
    N('zaverennaya-kopiya', 'дублик+ат докум+ента', 'm', 'дублик+аты докум+ентов', 'B2', 'official duplicate document', 'das Duplikat',
      ex('При утрате оригинала архив выдал [[дублик+ат докум+ента]].', 'When the original was lost, the archive issued an official duplicate.', 'Bei Verlust des Originals stellte das Archiv ein Duplikat aus.')),
    N('zaverennyy-perevod', 'нотари+альное удостовер+ение', 'n', '', 'C1', 'notarial certification / authentication', 'die notarielle Beglaubigung',
      ex('Перевод подаётся после [[нотари+ального удостовер+ения]] подписи переводчика.', 'The translation is filed after notarial certification of the translator’s signature.', 'Die Übersetzung wird nach notarieller Beglaubigung der Unterschrift eingereicht.')),
    N('akt-priema', 'проток+ол перед+ачи', 'm', 'проток+олы перед+ачи', 'B2', 'handover record / minutes', 'das Übergabeprotokoll',
      ex('Показания счётчиков зафиксировали в [[проток+оле перед+ачи]].', 'Meter readings were recorded in the handover minutes.', 'Die Zählerstände wurden im Protokoll festgehalten.')),
    N('srok-khraneniya-dok', 'срок хран+ения докум+ентов', 'm', 'ср+оки хран+ения докум+ентов', 'C1', 'statutory retention period', 'die Aufbewahrungsfrist',
      ex('Бухгалтерские счета подлежат [[ср+оку хран+ения]] в десять лет.', 'Accounting invoices are subject to a ten-year statutory retention period.', 'Buchhaltungsbelege unterliegen einer zehnjährigen Aufbewahrungsfrist.')),
    N('pretenzionnoe-pismo', 'досуд+ебная прет+ензия', 'f', 'досуд+ебные прет+ензии', 'C1', 'formal dunning / demand letter', 'das Mahnschreiben',
      ex('После двух напоминаний юристы направили [[досуд+ебную прет+ензию]].', 'After two reminders, legal counsel sent a formal dunning letter.', 'Nach zwei Erinnerungen verschickte die Rechtsabteilung ein Mahnschreiben.')),
    N('vkhodyashchiy-nomer', 'вход+ящий н+омер', 'm', 'вход+ящие номер+а', 'B2', 'incoming registration / docket number', 'die Eingangsnummer',
      ex('В переписке с ведомством обязательно указывайте [[вход+ящий н+омер]] обращения.', 'Always quote the incoming registration number when writing to the agency.', 'Geben Sie im Schriftverkehr mit dem Amt stets die Eingangsnummer an.')),
    N('oprosnyy-list', 'офици+альный запр+ос', 'm', 'офици+альные запр+осы', 'B2', 'official written enquiry', 'die amtliche Anfrage',
      ex('Ответ на [[офици+альный запр+ос]] готовится в десятидневный срок.', 'A reply to an official written enquiry is prepared within ten days.', 'Die Antwort auf eine amtliche Anfrage wird binnen zehn Tagen erstellt.')),
    V('podshivat', 'приобщ+ать к д+елу', 'impf', 'C1', ['приобщ+аю, приобщ+аешь', 'приобщ+ал', 'pf. приобщ+ить'], 'to place on file', 'zu den Akten nehmen',
      ex('Все приложенные справки сотрудники обязаны [[приобщ+ать к д+елу]].', 'Staff must place all attached certificates on file.', 'Mitarbeitende müssen alle beigefügten Bescheinigungen zu den Akten nehmen.')),
    A('deystvuyushchiy-obrazets', 'adj', 'установл+енного образц+а', 'C1', 'in prescribed official format', 'vorgeschriebener Form',
      ex('Справка должна быть оформлена на бланке [[установл+енного образц+а]].', 'The certificate must be issued on a form in the prescribed official format.', 'Die Bescheinigung muss auf einem Vordruck in vorgeschriebener Form ausgestellt sein.'))
  ]);

  // 6. legal_criminal (+11 -> 22)
  reg('legal_criminal', [
    N('sledovatel', 'сл+едователь', 'm', 'сл+едователи', 'B2', 'investigator, detective', 'der Ermittler',
      ex('[[Сл+едователь]] опросил трёх очевидцев происшествия.', 'The investigator questioned three eyewitnesses to the incident.', 'Der Ermittler befragte drei Augenzeugen des Vorfalls.')),
    N('zashchitnik', 'адвок+ат по угол+овным дел+ам', 'm', 'адвок+аты по угол+овным дел+ам', 'B2', 'criminal defence counsel', 'der Strafverteidiger',
      ex('[[Адвок+ат по угол+овным дел+ам]] заявил ходатайство о приобщении записей.', 'Defence counsel moved to admit the recordings into evidence.', 'Der Strafverteidiger beantragte die Aufnahme der Aufzeichnungen als Beweismittel.')),
    N('uslovnyy-srok', 'усл+овный срок', 'm', 'усл+овные ср+оки', 'C1', 'suspended sentence', 'die Bewährungsstrafe',
      ex('С учётом смягчающих обстоятельств суд назначил [[усл+овный срок]].', 'Given mitigating circumstances, the court imposed a suspended sentence.', 'Unter Berücksichtigung mildernder Umstände verhängte das Gericht eine Bewährungsstrafe.')),
    N('soderzhanie-pod-strazhey', 'заключ+ение под стр+ажу', 'n', '', 'C1', 'pre-trial detention, remand', 'die Untersuchungshaft',
      ex('Мера в виде [[заключ+ения под стр+ажу]] применяется при риске скрыться.', 'Pre-trial detention is ordered when there is a flight risk.', 'Untersuchungshaft wird bei Fluchtgefahr angeordnet.')),
    N('ulika', 'ул+ика', 'f', 'ул+ики', 'B2', 'piece of physical evidence', 'das Indiz, Beweisstück',
      ex('Криминалисты изъ+яли ключевую [[ул+ику]] для лабораторной экспертизы.', 'Forensics seized a key piece of evidence for lab analysis.', 'Die Spurensicherung beschlagnahmte ein wichtiges Beweisstück zur Laboranalyse.')),
    N('sudimost', 'суд+имость', 'f', 'суд+имости', 'B2', 'criminal record / conviction', 'die Vorstrafe',
      ex('Для работы в школе требуется справка об отсутствии [[суд+имости]].', 'Working at a school requires a certificate showing no criminal record.', 'Für eine Stelle an einer Schule ist ein Führungszeugnis ohne Vorstrafen nötig.')),
    N('zalog-sud', 'освобожд+ение под зал+ог', 'n', '', 'C1', 'release on bail', 'die Freilassung gegen Kaution',
      ex('Защита ходатайствовала об [[освобожд+ении под зал+ог]].', 'The defence applied for release on bail.', 'Die Verteidigung beantragte die Freilassung gegen Kaution.')),
    N('poterpevshiy', 'потерп+евший', 'm', 'потерп+евшие', 'B2', 'injured party, victim', 'der Geschädigte',
      ex('В ходе заседания суд выслушал заявления [[потерп+евших]].', 'During the hearing, the court heard statements from the injured parties.', 'In der Verhandlung hörte das Gericht die Aussagen der Geschädigten.')),
    N('obyvsk', '+обыск', 'm', '+обыски', 'B2', 'search (of premises, by warrant)', 'die Durchsuchung',
      ex('[[+Обыск]] офиса прошёл строго на основании судебного ордера.', 'The office search took place strictly under a court warrant.', 'Die Durchsuchung des Büros erfolgte streng aufgrund eines richterlichen Beschlusses.')),
    V('rassledovat', 'рассл+едовать', 'impf', 'B2', ['рассл+едую, рассл+едуешь', 'рассл+едовал', 'pf. рассл+едовать'], 'to investigate (a crime/case)', 'ermitteln, untersuchen',
      ex('Специальная комиссия продолжает [[рассл+едовать]] финансовые махинации.', 'A special committee continues to investigate the financial irregularities.', 'Eine Sonderkommission untersucht weiterhin die finanziellen Unregelmäßigkeiten.')),
    V('opravdat', 'опр+авдывать', 'impf', 'B2', ['опр+авдываю, опр+авдываешь', 'опр+авдывал', 'pf. оправд+ать'], 'to acquit (in court)', 'freisprechen',
      ex('Присяжные могут [[оправд+ать]] подсудимого при недостатке доказательств.', 'The jury may acquit the defendant when proof is insufficient.', 'Die Geschworenen können den Angeklagten mangels Beweisen freisprechen.'))
  ]);

  // 7. legal_ip (+11 -> 22)
  reg('legal_ip', [
    N('soavtorstvo', 'со+авторство', 'n', '', 'B2', 'co-authorship', 'die Miturheberschaft',
      ex('Доли [[со+авторства]] исследователи закрепили до публикации статьи.', 'Researchers recorded co-authorship shares before publishing the paper.', 'Die Anteile an der Miturheberschaft hielten die Forschenden vorab fest.')),
    N('pretenziya-ip', 'тр+ебование о прекращ+ении наруш+ения', 'n', '', 'C1', 'cease-and-desist demand', 'die Unterlassungsaufforderung',
      ex('Правообладатель направил [[тр+ебование о прекращ+ении наруш+ения]] в издательство.', 'The rights holder sent a cease-and-desist demand to the publisher.', 'Der Rechteinhaber schickte eine Unterlassungsaufforderung an den Verlag.')),
    N('kontrafakt', 'контраф+актная прод+укция', 'f', '', 'C1', 'counterfeit goods', 'gefälschte Ware, Produktpiraterie',
      ex('Таможня задержала партию [[контраф+актной прод+укции]] без маркировки.', 'Customs intercepted a batch of counterfeit goods lacking official marks.', 'Der Zoll hielt eine Sendung gefälschter Ware ohne Kennzeichnung zurück.')),
    N('isklyuchitelnaya-litsenziya', 'исключ+ительная лиц+ензия', 'f', 'исключ+ительные лиц+ензии', 'C1', 'exclusive licence', 'die ausschließliche Lizenz',
      ex('Издатель получил [[исключ+ительную лиц+ензию]] на перевод книги.', 'The publisher acquired an exclusive licence to translate the book.', 'Der Verlag erwarb eine ausschließliche Lizenz für die Übersetzung.')),
    N('avtorskoe-otchislenie', '+авторский гонор+ар', 'm', '+авторские гонор+ары', 'B2', 'royalty payment', 'das Autorenhonorar',
      ex('Издательство выплачивает [[+авторский гонор+ар]] раз в полгода.', 'The publisher pays out royalty payments twice a year.', 'Der Verlag zahlt das Autorenhonorar halbjährlich aus.')),
    N('tsitirovanie', 'правом+ерное цит+ирование', 'n', '', 'C1', 'fair quotation / citation', 'das Zitatrecht',
      ex('Короткая выдержка со ссылкой подпадает под [[правом+ерное цит+ирование]].', 'A brief excerpt with attribution falls under fair quotation.', 'Ein kurzes Zitat mit Quellenangabe fällt unter das Zitatrecht.')),
    N('otkrytaya-litsenziya', 'откр+ытая лиц+ензия', 'f', 'откр+ытые лиц+ензии', 'B2', 'open-source / open licence', 'die freie Lizenz',
      ex('Библиотека публикуется под [[откр+ытой лиц+ензией]] с указанием автора.', 'The library is published under an open licence requiring attribution.', 'Die Bibliothek erscheint unter einer freien Lizenz mit Namensnennung.')),
    N('registratsiya-patenta', 'пат+ентный п+оиск', 'm', 'пат+ентные п+оиски', 'C1', 'patent search, prior-art search', 'die Patentrecherche',
      ex('[[Пат+ентный п+оиск]] проводят до подачи заявки в ведомство.', 'A patent search is carried out before filing an application.', 'Eine Patentrecherche erfolgt vor der Anmeldung beim Amt.')),
    V('zashchishchat-prava', 'патентов+ать', 'impf', 'B2', ['патент+ую, патент+уешь', 'патентов+ал', 'pf. запатентов+ать'], 'to patent', 'patentieren lassen',
      ex('Стартап решил [[патентов+ать]] ключевой алгоритм сжатия данных.', 'The startup decided to patent its core compression algorithm.', 'Das Start-up beschloss, den zentralen Kompressionsalgorithmus patentieren zu lassen.')),
    V('narushat-avtorskoe', 'присв+аивать', 'impf', 'C1', ['присв+аиваю, присв+аиваешь', 'присв+аивал', 'pf. присв+оить'], 'to misappropriate, claim credit falsely', 'sich aneignen',
      ex('Недопустимо [[присв+аивать]] чужие иллюстрации без разрешения.', 'It is unacceptable to misappropriate someone else’s artwork without permission.', 'Es ist unzulässig, sich fremde Illustrationen ohne Erlaubnis anzueignen.')),
    A('okhranyaemyy-zakonom', 'adj', 'проприет+арный', 'C1', 'proprietary, closed-source', 'proprietär',
      ex('Не загружайте [[проприет+арный]] код компании в публичные сервисы.', 'Do not upload the company’s proprietary code to public tools.', 'Laden Sie keinen proprietären Firmencode in öffentliche Dienste hoch.'))
  ]);

  // 8. svc_hotel (+12 -> 19)
  reg('svc_hotel', [
    N('overbuking', 'избыт+очное брон+ирование', 'n', '', 'B2', 'overbooking', 'die Überbuchung',
      ex('При [[избыт+очном брон+ировании]] администратор переселяет гостя в партнерский отель.', 'During overbooking, reception moves the guest to a partner hotel.', 'Bei einer Überbuchung bringt der Empfang den Gast in einem Partnerhotel unter.')),
    N('kompliment-otelya', 'беспл+атное повыш+ение катег+ории', 'n', '', 'B2', 'complimentary room upgrade', 'das kostenlose Zimmer-Upgrade',
      ex('В честь юбилея гостям предложили [[беспл+атное повыш+ение катег+ории]].', 'To mark their anniversary, guests received a complimentary upgrade.', 'Zum Jubiläum erhielten die Gäste ein kostenloses Zimmer-Upgrade.')),
    N('turisticheskiy-sbor', 'кур+ортный сбор', 'm', 'кур+ортные сб+оры', 'B1', 'tourist / city tax', 'die Kurtaxe',
      ex('Городской [[кур+ортный сбор]] оплачивается отдельно при выезде.', 'The city tourist tax is settled separately on departure.', 'Die städtische Kurtaxe wird bei Abreise separat bezahlt.')),
    N('otmena-broni-shtraf', 'штраф за отм+ену бр+они', 'm', 'штр+афы за отм+ену', 'B2', 'cancellation fee', 'die Stornogebühr',
      ex('При отмене менее чем за сутки взимается [[штраф за отм+ену бр+они]].', 'Cancelling under 24 hours ahead incurs a cancellation fee.', 'Bei Stornierung unter 24 Stunden fällt eine Stornogebühr an.')),
    N('kamera-khraneniya-hotel', 'к+омната хран+ения багаж+а', 'f', '', 'B1', 'luggage storage room', 'die Gepäckaufbewahrung',
      ex('До заселения чемоданы можно оставить в [[к+омнате хран+ения багаж+а]].', 'Before check-in, suitcases can stay in the luggage storage room.', 'Vor dem Einchecken können Koffer in der Gepäckaufbewahrung bleiben.')),
    N('peredacha-smeny', 'перед+ача см+ены', 'f', '', 'B2', 'shift handover', 'die Schichtübergabe',
      ex('На [[перед+аче см+ены]] ночной портье отмечает все ранние выезды.', 'At shift handover, the night clerk notes all early departures.', 'Bei der Schichtübergabe vermerkt der Nachtportier alle Frühabreisen.')),
    N('rannee-zaselenie', 'р+анний за+езд', 'm', 'р+анние за+езды', 'B1', 'early check-in', 'der frühe Check-in',
      ex('[[Р+анний за+езд]] с девяти утра возможен при наличии свободных номеров.', 'Early check-in from 9 a.m. is available subject to room readiness.', 'Früher Check-in ab neun Uhr ist je nach Verfügbarkeit möglich.')),
    N('klyuch-karta', 'электронная к+арта-кл+юч', 'f', 'электронные к+арты-ключ+и', 'B1', 'keycard', 'die Schlüsselkarte',
      ex('Если [[электронная к+арта-кл+юч]] размагнитилась, мы заменим её на стойке.', 'If a keycard gets demagnetised, we replace it at the front desk.', 'Wenn eine Schlüsselkarte entmagnetisiert ist, tauschen wir sie am Empfang.')),
    N('minibar', 'мини-б+ар', 'm', 'мини-б+ары', 'B1', 'minibar', 'die Minibar',
      ex('Сотрудники пополняют [[мини-б+ар]] во время дневной уборки.', 'Staff restock the minibar during daytime housekeeping.', 'Mitarbeitende füllen die Minibar bei der täglichen Reinigung auf.')),
    N('zavtrak-shvedskiy-stol', 'шв+едский ст+ол', 'm', '', 'B1', 'breakfast buffet', 'das Frühstücksbuffet',
      ex('Завтрак «[[шв+едский ст+ол]]» сервируют в зимнем саду с шести тридцати.', 'The breakfast buffet is served in the conservatory from 6:30.', 'Das Frühstücksbuffet wird ab sechs Uhr dreißig im Wintergarten serviert.')),
    V('vyselyatsya', 'высел+яться', 'impf', 'B1', ['высел+яюсь, высел+яешься', 'высел+ялся', 'pf. в+ыселиться'], 'to check out (of a hotel)', 'auschecken',
      ex('Гости обычно начинают [[высел+яться]] после десяти утра.', 'Guests usually begin checking out after ten in the morning.', 'Gäste checken gewöhnlich ab zehn Uhr morgens aus.')),
    A('svobodnyy-nomer', 'adj', 'звукоизол+ированный', 'B2', 'soundproofed', 'schallisoliert',
      ex('Окна номеров со стороны трамвая полностью [[звукоизол+ированы]].', 'Rooms facing the tramway have fully soundproofed windows.', 'Die Zimmer zur Straßenbahn hin sind vollständig schallisoliert.'))
  ]);
})();
