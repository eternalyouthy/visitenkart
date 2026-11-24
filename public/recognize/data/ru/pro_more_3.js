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
