/* German Professional · fourth batch (70 cards across all 11 Pro topics; B1, B2 and C1).
 * Checked against existing pack inventory for zero duplicates. Original examples and translations (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(id, o, note, lvl) {
    o.id = 'pro-m4-' + id;
    if (lvl) o.level = lvl;
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }
  function N(id, article, de, plural, ru, en, e, note, lvl) {
    return W(id, { pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note, lvl);
  }
  function V(id, de, forms, gov, ru, en, e, note, lvl) {
    return W(id, { pos: 'verb', de: de, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, gov: gov || undefined, ru: ru, en: en, examples: [e] }, note, lvl);
  }
  function A(id, pos, de, ru, en, e, note, lvl) {
    return W(id, { pos: pos, de: de, ru: ru, en: en, examples: [e] }, note, lvl);
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  /* ── 01 · Design, UX & Visuals (8) ───────────────────────────────────────── */
  reg('design', [
    N('benutzerfreundlichkeit', 'die', 'Benutzerfreundlichkeit', '', 'удобство использования, юзабилити', 'usability, user-friendliness',
      ex('Nach dem Umbau hat sich die [[Benutzerfreundlichkeit]] der mobilen App spürbar verbessert.', 'После переработки удобство использования мобильного приложения ощутимо выросло.', 'After the redesign, the usability of the mobile app improved noticeably.'),
      ['В UX-командах часто говорят также die Usability; прил. — benutzerfreundlich.', 'UX teams also use die Usability; adjective: benutzerfreundlich.'], 'b2'),
    N('benutzeroberflaeche', 'die', 'Benutzeroberfläche', 'die Benutzeroberflächen', 'пользовательский интерфейс (UI)', 'user interface (UI)',
      ex('Eine aufgeräumte [[Benutzeroberfläche]] reduziert Rückfragen beim Support.', 'Аккуратный пользовательский интерфейс сокращает число обращений в поддержку.', 'A clean user interface reduces support inquiries.'),
      ['Коротко часто говорят die Oberfläche или das UI.', 'Often shortened to die Oberfläche or das UI.'], 'b2'),
    N('zeilenabstand', 'der', 'Zeilenabstand', 'die Zeilenabstände', 'межстрочный интервал (интерлиньяж)', 'line spacing, line height',
      ex('Mit etwas größerem [[Zeilenabstand]] wirken längere Textblöcke viel ruhiger.', 'С чуть большим межстрочным интервалом длинные блоки текста выглядят гораздо спокойнее.', 'With slightly wider line spacing, longer blocks of text look much calmer.'),
      ['В CSS — line-height; род определяется по der Abstand.', 'Corresponds to line-height in CSS; masculine because of der Abstand.'], 'b2'),
    N('erscheinungsbild', 'das', 'Erscheinungsbild', 'die Erscheinungsbilder', 'визуальный облик, фирменный стиль', 'visual identity, look and feel',
      ex('Alle Kanäle sollen nach dem Relaunch ein einheitliches [[Erscheinungsbild]] haben.', 'После перезапуска у всех каналов должен быть единый визуальный облик.', 'After the relaunch, all channels should have a consistent visual identity.'),
      ['Немецкий аналог Corporate Design / Look-and-Feel.', 'German equivalent of corporate design or look and feel.'], 'b2'),
    N('bildsprache', 'die', 'Bildsprache', 'die Bildsprachen', 'визуальный язык, стилистика изображений', 'visual language, imagery',
      ex('Unsere neue [[Bildsprache]] setzt auf echte Teamfotos statt generischer Stockbilder.', 'Наш новый визуальный язык делает ставку на живые фото команды вместо шаблонных стоков.', 'Our new visual language relies on real team photos instead of generic stock images.'), null, 'c1'),
    N('nutzerfuehrung', 'die', 'Nutzerführung', 'die Nutzerführungen', 'навигация и ведение пользователя (UX-сценарий)', 'user guidance, user flow',
      ex('Die [[Nutzerführung]] beim Bestellvorgang muss auch ohne Anleitung klar sein.', 'Ведение пользователя при оформлении заказа должно быть понятным без инструкции.', 'The user flow during checkout must be clear without instructions.'),
      ['Также встречается die Benutzerführung; буквально «ведение пользователя».', 'Also die Benutzerführung; covers navigation cues, onboarding steps, and flow.'], 'b2'),
    N('feinschliff', 'der', 'Feinschliff', '', 'финальная шлифовка, доводка деталей', 'finishing touches, polish',
      ex('Der Entwurf steht — morgen geben wir Abständen und Icons den letzten [[Feinschliff]].', 'Макет готов — завтра сделаем финальную шлифовку отступов и иконок.', 'The draft is ready — tomorrow we’ll put the finishing touches on spacing and icons.'),
      ['Устойчивое выражение: einer Sache (Dat.) den letzten Feinschliff geben.', 'Common idiom: einer Sache (dat.) den letzten Feinschliff geben (“give something a final polish”).'], 'c1'),
    A('barrierefrei', 'adj', 'barrierefrei', 'доступный (без барьеров, с поддержкой a11y)', 'accessible, barrier-free',
      ex('Alle Formulare auf der Website müssen [[barrierefrei]] bedienbar sein.', 'Все формы на сайте должны быть доступны для управления без барьеров.', 'All forms on the website must be accessible to operate.'),
      ['Используется и для городской среды (безбарьерный доступ), и для веб-интерфейсов.', 'Used for both physical wheelchair access and digital web accessibility.'], 'b2')
  ]);

  /* ── 02 · AI, Data & Analytics (8) ───────────────────────────────────────── */
  reg('ai_data', [
    N('datenqualitaet', 'die', 'Datenqualität', '', 'качество данных', 'data quality',
      ex('Ohne hohe [[Datenqualität]] liefert selbst das modernste Modell falsche Schlüsse.', 'Без высокого качества данных даже самая современная модель даёт неверные выводы.', 'Without high data quality, even the latest model produces wrong conclusions.'), null, 'b2'),
    N('ausreisser', 'der', 'Ausreißer', 'die Ausreißer', 'выброс (аномальное значение в данных)', 'outlier',
      ex('Ein einzelner [[Ausreißer]] im Dezember hat den Jahresdurchschnitt stark verzerrt.', 'Один-единственный выброс в декабре сильно исказил годовое среднее.', 'A single outlier in December heavily skewed the annual average.'),
      ['Буквально «беглец» (от ausreißen); в статистике — резко выбивающееся значение.', 'Literally “runaway” (from ausreißen); in statistics, an anomalous data point.'], 'c1'),
    N('datenbereinigung', 'die', 'Datenbereinigung', 'die Datenbereinigungen', 'очистка данных (data cleaning)', 'data cleaning, data cleansing',
      ex('Die [[Datenbereinigung]] nimmt in vielen Projekten mehr Zeit ein als das eigentliche Training.', 'Очистка данных во многих проектах занимает больше времени, чем само обучение.', 'Data cleaning takes more time in many projects than the actual training.'), null, 'c1'),
    N('anwendungsfall', 'der', 'Anwendungsfall', 'die Anwendungsfälle', 'сценарий применения, кейс (use case)', 'use case',
      ex('Bevor wir ein KI-Tool kaufen, definieren wir zwei konkrete [[Anwendungsfälle]].', 'Прежде чем покупать ИИ-инструмент, мы определим два конкретных сценария применения.', 'Before we buy an AI tool, we’ll define two concrete use cases.'),
      ['Немецкий стандартный эквивалент англ. use case; встречается в ИИ, продукте и разработке.', 'Standard German equivalent of “use case” across AI, product, and engineering.'], 'b2'),
    N('fehlerquote', 'die', 'Fehlerquote', 'die Fehlerquoten', 'доля / процент ошибок (error rate)', 'error rate',
      ex('Nach dem Feintuning sank die [[Fehlerquote]] bei der Rechnungserkennung unter zwei Prozent.', 'После дообучения процент ошибок при распознавании счетов упал ниже двух процентов.', 'After fine-tuning, the error rate in invoice recognition dropped below two percent.'), null, 'b2'),
    N('nachvollziehbarkeit', 'die', 'Nachvollziehbarkeit', '', 'прослеживаемость, объяснимость (решений модели)', 'traceability, explainability, auditability',
      ex('Bei automatischen Kreditprüfungen verlangt das Gesetz volle [[Nachvollziehbarkeit]].', 'При автоматической проверке кредитов закон требует полной объяснимости решений.', 'For automated credit checks, the law requires full traceability.'),
      ['От nachvollziehen («проследить логику»); ключевой термин в регулировании ИИ.', 'From nachvollziehen (“to follow someone’s reasoning”); a key term in EU AI governance.'], 'c1'),
    V('anonymisieren', 'anonymisieren', ['anonymisiert', 'anonymisierte', 'hat anonymisiert'], '+ Akk.', 'обезличивать, анонимизировать (данные)', 'to anonymise',
      ex('Wir [[anonymisieren]] alle Kundenprofile, bevor die Daten ins Analyse-Team gehen.', 'Мы обезличиваем все профили клиентов, прежде чем данные попадают к команде аналитики.', 'We anonymise all customer profiles before the data goes to the analytics team.'),
      ['Глаголы на -ieren образуют Partizip II без ge-: anonymisiert.', 'Verbs in -ieren form their past participle without ge-: hat anonymisiert.'], 'b2'),
    V('klassifizieren', 'klassifizieren', ['klassifiziert', 'klassifizierte', 'hat klassifiziert'], '+ Akk.', 'классифицировать, относить к категории', 'to classify',
      ex('Das Modell kann eingehende Support-Anfragen automatisch nach Dringlichkeit [[klassifizieren]].', 'Модель может автоматически классифицировать входящие запросы в поддержку по срочности.', 'The model can automatically classify incoming support requests by urgency.'), null, 'b2')
  ]);

  /* ── 03 · Product & Agile (8) ────────────────────────────────────────────── */
  reg('product', [
    N('kundenbindung', 'die', 'Kundenbindung', '', 'удержание клиентов (retention)', 'customer retention, customer loyalty',
      ex('Ein guter Kundenservice stärkt die langfristige [[Kundenbindung]] mehr als Rabatte.', 'Хорошая поддержка укрепляет долгосрочное удержание клиентов сильнее, чем скидки.', 'Good customer service strengthens long-term customer retention more than discounts.'), null, 'b2'),
    N('konversionsrate', 'die', 'Konversionsrate', 'die Konversionsraten', 'коэффициент конверсии', 'conversion rate',
      ex('Durch das kürzere Anmeldeformular stieg unsere [[Konversionsrate]] um fünf Prozent.', 'Благодаря более короткой форме регистрации наша конверсия выросла на пять процентов.', 'With the shorter sign-up form, our conversion rate rose by five percent.'),
      ['В маркетинге и продукте часто говорят просто die Conversion Rate.', 'Often called die Conversion Rate in product and marketing teams.'], 'b2'),
    N('produktstrategie', 'die', 'Produktstrategie', 'die Produktstrategien', 'продуктовая стратегия', 'product strategy',
      ex('Im nächsten Quartal richten wir unsere [[Produktstrategie]] stärker auf Geschäftskunden aus.', 'В следующем квартале мы сильнее ориентируем нашу продуктовую стратегию на корпоративных клиентов.', 'Next quarter we’re aligning our product strategy more closely with business customers.'), null, 'b2'),
    N('retrospektive', 'die', 'Retrospektive', 'die Retrospektiven', 'ретроспектива (итоговый разбор спринта)', 'retrospective (sprint retro)',
      ex('In der [[Retrospektive]] besprechen wir offen, was im Sprint gut lief und was gehakt hat.', 'На ретроспективе мы открыто обсуждаем, что в спринте сработало хорошо, а что буксовало.', 'In the retrospective we openly discuss what went well in the sprint and what got stuck.'),
      ['В разговорной речи команд — просто die Retro.', 'In daily agile speech usually shortened to die Retro.'], 'b2'),
    N('nutzerbefragung', 'die', 'Nutzerbefragung', 'die Nutzerbefragungen', 'опрос / интервьюирование пользователей', 'user survey, user interview',
      ex('Die [[Nutzerbefragung]] hat gezeigt, dass kaum jemand die alte Filterleiste gefunden hat.', 'Опрос пользователей показал, что почти никто не находил старую панель фильтров.', 'The user survey showed that hardly anyone found the old filter bar.'), null, 'b2'),
    N('nutzerakzeptanz', 'die', 'Nutzerakzeptanz', '', 'принятие (продукта/функции) пользователями', 'user adoption, user acceptance',
      ex('Ohne frühe Tests riskieren wir eine geringe [[Nutzerakzeptanz]] nach dem Start.', 'Без раннего тестирования мы рискуем получить низкое принятие пользователями после запуска.', 'Without early testing we risk low user adoption after launch.'), null, 'c1'),
    V('ausrollen', 'ausrollen', ['rollt aus', 'rollte aus', 'hat ausgerollt'], '+ Akk.', 'выкатывать, постепенно запускать (функцию/обновление)', 'to roll out',
      ex('Wir [[rollen]] das neue Design schrittweise für zehn Prozent der Konten [[aus]].', 'Мы выкатываем новый дизайн поэтапно для десяти процентов аккаунтов.', 'We’re rolling out the new design gradually to ten percent of accounts.'),
      ['Отделяемая приставка aus-: rollt … aus, ausgerollt; стандартный IT-глагол для поэтапного релиза.', 'Separable verb (rollt … aus, hat ausgerollt); standard German tech term for phased releases.'], 'b2'),
    V('abbilden', 'abbilden', ['bildet ab', 'bildete ab', 'hat abgebildet'], '+ Akk.', 'моделировать, отображать (процесс в системе)', 'to map, model, represent (in software)',
      ex('Lässt sich unser gesamter Freigabeprozess direkt im neuen Tool [[abbilden]]?', 'Можно ли отобразить весь наш процесс согласования прямо в новом инструменте?', 'Can our entire approval workflow be mapped directly in the new tool?'),
      ['Чрезвычайно частый немецкий глагол в B2B/IT: «отразить бизнес-процесс в софте».', 'Very common German IT/product verb meaning “to represent a real-world workflow in software”.'], 'c1')
  ]);

  /* ── 04 · Clients & Freelance (8) ────────────────────────────────────────── */
  reg('clients', [
    N('honorar', 'das', 'Honorar', 'die Honorare', 'гонорар (оплата фрилансера/эксперта)', 'fee, remuneration (freelance/consulting)',
      ex('Das vereinbarte [[Honorar]] wird zur Hälfte nach Abnahme der ersten Phase fällig.', 'Согласованный гонорар подлежит оплате наполовину после приёмки первого этапа.', 'Half of the agreed fee falls due after sign-off of the first phase.'),
      ['Для штатных сотрудников — das Gehalt; для фрилансеров, консультантов и спикеров — das Honorar.', 'Use das Gehalt for salaried staff and das Honorar for freelancers, consultants, and speakers.'], 'b2'),
    N('tagessatz', 'der', 'Tagessatz', 'die Tagessätze', 'дневная ставка (фрилансера/консультанта)', 'day rate, daily rate',
      ex('Für ein längeres Projekt gewähre ich bei meinem [[Tagessatz]] einen kleinen Rabatt.', 'Для более долгого проекта я делаю небольшую скидку на свою дневную ставку.', 'For a longer project I offer a small discount on my day rate.'), null, 'b2'),
    N('pauschale', 'die', 'Pauschale', 'die Pauschalen', 'фиксированная сумма, паушальная оплата (flat fee)', 'flat fee, lump sum',
      ex('Statt nach Stunden abzurechnen, vereinbaren wir für das Audit eine feste [[Pauschale]].', 'Вместо почасовой оплаты мы договоримся о фиксированной сумме за аудит.', 'Instead of billing by the hour, we’ll agree on a fixed flat fee for the audit.'),
      ['Также der Pauschalpreis (фиксированная цена) и наречие pauschal.', 'Also der Pauschalpreis (fixed price) and pauschal (flat-rate, across the board).'], 'b2'),
    N('nachbesserung', 'die', 'Nachbesserung', 'die Nachbesserungen', 'доработка, устранение недочётов по договору', 'rework, rectification, subsequent improvement',
      ex('Im Vertrag sind zwei Runden zur [[Nachbesserung]] ohne Aufpreis enthalten.', 'В договор включены два раунда доработок без доплаты.', 'Two rounds of rework at no extra charge are included in the contract.'), null, 'c1'),
    N('nutzungsrecht', 'das', 'Nutzungsrecht', 'die Nutzungsrechte', 'право использования (лицензия на результат работы)', 'usage right, right of use',
      ex('Die zeitlich unbegrenzten [[Nutzungsrechte]] gehen erst nach vollständiger Zahlung an den Kunden über.', 'Бессрочные права использования переходят к клиенту только после полной оплаты.', 'The perpetual usage rights only transfer to the client once payment is complete.'),
      ['В договорах почти всегда во множественном числе: die Nutzungsrechte übertragen.', 'Almost always plural in freelance contracts: die Nutzungsrechte übertragen (“transfer usage rights”).'], 'c1'),
    N('leistungsnachweis', 'der', 'Leistungsnachweis', 'die Leistungsnachweise', 'акт / табель выполненных работ (timesheet)', 'timesheet, proof of work performed',
      ex('Am Monatsende schicke ich die Rechnung zusammen mit dem unterschriebenen [[Leistungsnachweis]].', 'В конце месяца я отправляю счёт вместе с подписанным табелем выполненных работ.', 'At the end of the month I send the invoice together with the signed timesheet.'), null, 'c1'),
    N('geheimhaltungsvereinbarung', 'die', 'Geheimhaltungsvereinbarung', 'die Geheimhaltungsvereinbarungen', 'соглашение о неразглашении (NDA)', 'non-disclosure agreement (NDA)',
      ex('Bevor wir Einblick in den Code bekommen, unterschreiben beide Seiten eine [[Geheimhaltungsvereinbarung]].', 'Прежде чем мы получим доступ к коду, обе стороны подписывают соглашение о неразглашении.', 'Before we get access to the code, both sides sign a non-disclosure agreement.'),
      ['В обиходе часто говорят просто das NDA.', 'In everyday business German, das NDA is also widely used.'], 'c1'),
    V('kalkulieren', 'kalkulieren', ['kalkuliert', 'kalkulierte', 'hat kalkuliert'], '+ Akk.', 'просчитывать (бюджет, затраты), калькулировать', 'to calculate, price out, budget',
      ex('Für das neue Angebot müssen wir den Zeitaufwand realistisch [[kalkulieren]].', 'Для нового коммерческого предложения нам нужно реалистично просчитать затраты времени.', 'For the new quote we need to calculate the time required realistically.'), null, 'b2')
  ]);

  /* ── 05 · Presentations & Pitching (8) ───────────────────────────────────── */
  reg('presentations', [
    N('gliederung', 'die', 'Gliederung', 'die Gliederungen', 'структура, план (доклада, текста)', 'outline, structure (of a talk or document)',
      ex('Auf der zweiten Folie zeige ich kurz die [[Gliederung]] meines Vortrags.', 'На втором слайде я коротко показываю структуру своего доклада.', 'On the second slide I briefly show the outline of my talk.'), null, 'b2'),
    N('ueberleitung', 'die', 'Überleitung', 'die Überleitungen', 'переход, связка (между темами/слайдами)', 'transition, segue',
      ex('Eine gute [[Überleitung]] verbindet die Zahlen elegant mit dem nächsten Abschnitt.', 'Удачная связка изящно соединяет цифры со следующим разделом.', 'A good transition smoothly connects the figures to the next section.'), null, 'b2'),
    N('fragerunde', 'die', 'Fragerunde', 'die Fragerunden', 'сессия вопросов и ответов (Q&A)', 'Q&A session, question round',
      ex('Nach zwanzig Minuten Vortrag bleiben uns noch zehn Minuten für die [[Fragerunde]].', 'После двадцати минут выступления у нас остаётся ещё десять минут на сессию вопросов и ответов.', 'After a twenty-minute talk we still have ten minutes left for the Q&A session.'), null, 'b1'),
    N('koerpersprache', 'die', 'Körpersprache', '', 'язык тела', 'body language',
      ex('Eine offene [[Körpersprache]] wirkt auf der Bühne ruhiger als ständiges Auf-und-ab-Gehen.', 'Открытый язык тела на сцене производит более спокойное впечатление, чем постоянное хождение туда-сюда.', 'Open body language looks calmer on stage than pacing back and forth.'), null, 'b2'),
    N('blickkontakt', 'der', 'Blickkontakt', '', 'зрительный контакт', 'eye contact',
      ex('Halte während des Pitches [[Blickkontakt]] mit dem Publikum, statt nur auf die Folien zu schauen.', 'Во время питча держи зрительный контакт с аудиторией, а не смотри только на слайды.', 'Keep eye contact with the audience during the pitch instead of just looking at the slides.'),
      ['Устойчивое сочетание: Blickkontakt halten / suchen (mit + Dat.).', 'Common collocation: Blickkontakt halten / suchen (mit + dat.).'], 'b1'),
    N('stichpunkt', 'der', 'Stichpunkt', 'die Stichpunkte', 'тезис, пункт списка (bullet point)', 'bullet point, talking point',
      ex('Schreib lieber drei kurze [[Stichpunkte]] auf die Folie statt eines ganzen Absatzes.', 'Лучше напиши на слайде три коротких тезиса вместо целого абзаца.', 'Better put three short bullet points on the slide instead of a whole paragraph.'),
      ['Близко к das Stichwort (ключевое слово); «тезисно» — stichpunktartig.', 'Close to das Stichwort (“cue/keyword”); adverb: stichpunktartig (“in bullet points”).'], 'b1'),
    V('hervorheben', 'hervorheben', ['hebt hervor', 'hob hervor', 'hat hervorgehoben'], '+ Akk.', 'выделять, подчёркивать (ключевую мысль)', 'to highlight, emphasise',
      ex('In der Zusammenfassung [[hebt]] sie vor allem die Zeitersparnis [[hervor]].', 'В резюме она прежде всего подчёркивает экономию времени.', 'In the summary she especially highlights the time savings.'),
      ['Сильный глагол с отделяемой приставкой hervor- (heben → hob → gehoben).', 'Strong separable verb (like heben → hob → gehoben): hebt … hervor, hat hervorgehoben.'], 'b2'),
    A('anschaulich', 'adj', 'anschaulich', 'наглядный, образный, доходчивый', 'vivid, illustrative, easy to picture',
      ex('An einem kurzen Beispiel erklärte er die Architektur sehr [[anschaulich]].', 'На коротком примере он объяснил архитектуру очень наглядно.', 'He explained the architecture very vividly using a short example.'),
      ['Родственно глаголу veranschaulichen («наглядно показать»); частый комплимент хорошему докладу.', 'Related to veranschaulichen (“to illustrate”); a common compliment for a clear presentation.'], 'b2')
  ]);

  /* ── 06 · IT & Development (6) ───────────────────────────────────────────── */
  reg('dev', [
    N('fehlermeldung', 'die', 'Fehlermeldung', 'die Fehlermeldungen', 'сообщение об ошибке', 'error message',
      ex('Schick mir bitte den genauen Wortlaut der [[Fehlermeldung]] als Screenshot.', 'Пришли мне, пожалуйста, точную формулировку сообщения об ошибке скриншотом.', 'Please send me a screenshot with the exact wording of the error message.'), null, 'b1'),
    N('entwicklungsumgebung', 'die', 'Entwicklungsumgebung', 'die Entwicklungsumgebungen', 'среда разработки (IDE / dev-окружение)', 'development environment (IDE)',
      ex('Die Einrichtung der lokalen [[Entwicklungsumgebung]] dauert dank Docker nur fünf Minuten.', 'Настройка локальной среды разработки благодаря Docker занимает всего пять минут.', 'Setting up the local development environment takes only five minutes thanks to Docker.'), null, 'b2'),
    N('konfigurationsdatei', 'die', 'Konfigurationsdatei', 'die Konfigurationsdateien', 'файл конфигурации (конфиг)', 'configuration file, config file',
      ex('Passwörter gehören niemals direkt in eine [[Konfigurationsdatei]] im Repository.', 'Пароли никогда не должны храниться напрямую в файле конфигурации в репозитории.', 'Passwords should never be stored directly in a configuration file in the repository.'), null, 'b2'),
    V('reproduzieren', 'reproduzieren', ['reproduziert', 'reproduzierte', 'hat reproduziert'], '+ Akk.', 'воспроизводить (ошибку, баг)', 'to reproduce (a bug, result)',
      ex('Erst mit den genauen Testdaten konnten wir den Fehler lokal [[reproduzieren]].', 'Только с точными тестовыми данными нам удалось воспроизвести ошибку локально.', 'Only with the exact test data were we able to reproduce the bug locally.'), null, 'b2'),
    V('kompilieren', 'kompilieren', ['kompiliert', 'kompilierte', 'hat kompiliert'], '+ Akk.', 'компилировать', 'to compile',
      ex('Nach dem Update der Bibliothek lässt sich das Projekt nicht mehr fehlerfrei [[kompilieren]].', 'После обновления библиотеки проект больше не компилируется без ошибок.', 'After updating the library, the project no longer compiles without errors.'), null, 'b2'),
    V('einspielen', 'einspielen', ['spielt ein', 'spielte ein', 'hat eingespielt'], '+ Akk.', 'устанавливать, накатывать (обновление, патч, бэкап)', 'to apply, install (a patch, update, backup)',
      ex('Die Admins [[spielen]] das Sicherheitsupdate heute Nacht um zwei [[ein]].', 'Админы накатят обновление безопасности сегодня ночью в два часа.', 'The admins are installing the security update tonight at two.'),
      ['Очень типичный немецкий IT-глагол: ein Update / einen Patch / ein Backup einspielen.', 'Idiomatic German IT verb: ein Update / einen Patch / ein Backup einspielen (“roll in / apply”).'], 'b2')
  ]);

  /* ── 07 · Infrastructure (6) ─────────────────────────────────────────────── */
  reg('infra', [
    N('latenz', 'die', 'Latenz', 'die Latenzen', 'задержка (сети/отклика), латентность', 'latency',
      ex('Durch einen näheren Serverstandort sank die [[Latenz]] von 120 auf 25 Millisekunden.', 'Благодаря более близкому расположению сервера задержка упала со 120 до 25 миллисекунд.', 'Using a closer server location cut latency from 120 to 25 milliseconds.'),
      ['Также die Latenzzeit (время задержки).', 'Also die Latenzzeit (“latency time”).'], 'b2'),
    N('durchsatz', 'der', 'Durchsatz', 'die Durchsätze', 'пропускная способность (фактическая, throughput)', 'throughput',
      ex('Nach der Datenbank-Optimierung hat sich der [[Durchsatz]] pro Sekunde verdoppelt.', 'После оптимизации базы данных пропускная способность в секунду удвоилась.', 'After the database optimisation, throughput per second doubled.'),
      ['В отличие от die Bandbreite (теоретическая ширина канала), der Durchsatz — реально обработанный объём.', 'Unlike die Bandbreite (channel capacity), der Durchsatz measures actual volume processed per unit time.'], 'c1'),
    N('ueberlastung', 'die', 'Überlastung', 'die Überlastungen', 'перегрузка (системы, сети; также сотрудника)', 'overload, congestion',
      ex('Wegen einer plötzlichen [[Überlastung]] nahm der Dienst keine neuen Anfragen mehr an.', 'Из-за внезапной перегрузки сервис перестал принимать новые запросы.', 'Because of a sudden overload, the service stopped accepting new requests.'),
      ['Применяется и к серверам (Systemüberlastung), и к людям на работе.', 'Used for both server/network overload and employee burnout/overload.'], 'b2'),
    N('datenverlust', 'der', 'Datenverlust', 'die Datenverluste', 'потеря данных', 'data loss',
      ex('Automatische Backups alle sechs Stunden schützen vor schwerem [[Datenverlust]].', 'Автоматические бэкапы каждые шесть часов защищают от серьёзной потери данных.', 'Automatic backups every six hours protect against severe data loss.'), null, 'b2'),
    V('hochfahren', 'hochfahren', ['fährt hoch', 'fuhr hoch', 'hat/ist hochgefahren'], '+ Akk.', 'запускать (сервер, систему), загружаться', 'to boot up, spin up, start up',
      ex('Nach den Wartungsarbeiten [[fahren]] wir die Knoten nacheinander wieder [[hoch]].', 'После технических работ мы по очереди снова запускаем узлы.', 'After maintenance we spin the nodes back up one by one.'),
      ['С дополнением Perfekt с haben (hat den Server hochgefahren), без — с sein (ist hochgefahren). Антоним: herunterfahren.', 'Transitive uses haben (“hat den Server hochgefahren”), intransitive uses sein (“ist hochgefahren”). Opposite: herunterfahren.'], 'b1'),
    V('umleiten', 'umleiten', ['leitet um', 'leitete um', 'hat umgeleitet'], '+ Akk.', 'перенаправлять (трафик, запросы)', 'to reroute, redirect (traffic, requests)',
      ex('Bei einem Ausfall [[leitet]] der Loadbalancer den Verkehr automatisch auf ein anderes Rechenzentrum [[um]].', 'При сбое балансировщик автоматически перенаправляет трафик на другой дата-центр.', 'During an outage, the load balancer automatically reroutes traffic to another data centre.'),
      ['Используется и для дорог (die Umleitung — объезд), и для сетевого трафика / HTTP-редиректов.', 'Used both for road detours (die Umleitung) and for network traffic or HTTP redirects.'], 'b2')
  ]);

  /* ── 08 · Work & Office (5) ──────────────────────────────────────────────── */
  reg('workcomm', [
    N('zustaendigkeit', 'die', 'Zuständigkeit', 'die Zuständigkeiten', 'зона ответственности, компетенция', 'responsibility, remit, jurisdiction',
      ex('Klären wir zuerst die [[Zuständigkeiten]], damit keine Aufgabe zwischen zwei Teams liegen bleibt.', 'Давай сначала проясним зоны ответственности, чтобы ни одна задача не зависла между двумя командами.', 'Let’s clarify responsibilities first so no task falls between two teams.'),
      ['От прилагательного zuständig («ответственный за что-то»).', 'Derived from zuständig (“responsible / in charge”).'], 'b2'),
    N('verteiler', 'der', 'Verteiler', 'die Verteiler', 'список рассылки (mailing list)', 'mailing list, distribution list',
      ex('Kannst du mich bitte in den [[Verteiler]] für die wöchentlichen Statusberichte aufnehmen?', 'Можешь, пожалуйста, добавить меня в список рассылки для еженедельных статусных отчётов?', 'Could you please add me to the distribution list for the weekly status reports?'),
      ['Офисное выражение: jemanden in den Verteiler aufnehmen / vom Verteiler nehmen.', 'Office phrase: jemanden in den Verteiler aufnehmen (“add someone to the mailing list”).'], 'b2'),
    N('nachbereitung', 'die', 'Nachbereitung', 'die Nachbereitungen', 'пост-обработка, работа по итогам (встречи)', 'follow-up, wrap-up (after a meeting)',
      ex('Planen wir für die [[Nachbereitung]] des Kundenworkshops mindestens eine Stunde ein.', 'Давай заложим хотя бы час на разбор итогов воркшопа с клиентом.', 'Let’s schedule at least an hour for following up on the client workshop.'),
      ['Пара: die Vorbereitung (подготовка до) ↔ die Nachbereitung (фиксация итогов после).', 'Counterpart to die Vorbereitung (preparation): turning meeting notes into concrete follow-ups.'], 'b2'),
    V('nachhaken', 'nachhaken', ['hakt nach', 'hakte nach', 'hat nachgehakt'], 'bei + Dat.', 'дожимать, переспрашивать, вежливо напоминать', 'to follow up, chase up, probe further',
      ex('Wenn bis Donnerstag keine Antwort kommt, [[hake]] ich telefonisch beim Anbieter [[nach]].', 'Если до четверга ответа не будет, я позвоню поставщику и переспрошу.', 'If no reply arrives by Thursday, I’ll follow up with the vendor by phone.'),
      ['Живой офисный глагол (букв. «подцепить крючком»): напомнить о себе или задать уточняющий вопрос.', 'Very natural workplace verb (lit. “hook back in”): chasing replies or asking probing follow-up questions.'], 'b2'),
    V('weiterleiten', 'weiterleiten', ['leitet weiter', 'leitete weiter', 'hat weitergeleitet'], '+ Akk. (+ an + Akk.)', 'пересылать (письмо), передавать дальше (запрос)', 'to forward (an email, request)',
      ex('Ich [[leite]] deine Anfrage direkt an die Buchhaltung [[weiter]].', 'Я сразу пересылаю твой запрос в бухгалтерию.', 'I’m forwarding your request straight to accounting.'), null, 'b1')
  ]);

  /* ── 09 · B2 Career Paths (5) ────────────────────────────────────────────── */
  reg('b2_beruf', [
    N('gehaltsvorstellung', 'die', 'Gehaltsvorstellung', 'die Gehaltsvorstellungen', 'зарплатные ожидания', 'salary expectation',
      ex('Bitte nennen Sie im Anschreiben Ihren möglichen Eintrittstermin und Ihre [[Gehaltsvorstellung]].', 'Пожалуйста, укажите в сопроводительном письме возможную дату выхода и ваши зарплатные ожидания.', 'Please state your earliest start date and salary expectation in your cover letter.'),
      ['В немецких вакансиях обычно имеется в виду годовая сумма брутто (Jahresbrutto).', 'In German job ads this refers to gross annual salary (Jahresbrutto); often plural.'], 'b2'),
    N('stellenausschreibung', 'die', 'Stellenausschreibung', 'die Stellenausschreibungen', 'объявление о вакансии', 'job posting, job advertisement',
      ex('Die [[Stellenausschreibung]] beschreibt zwar viele Tools, betont aber vor allem Lernbereitschaft.', 'Хотя в объявлении о вакансии указано много инструментов, главный акцент сделан на готовности учиться.', 'Although the job posting lists many tools, it mainly emphasises willingness to learn.'), null, 'b2'),
    N('branchenwechsel', 'der', 'Branchenwechsel', 'die Branchenwechsel', 'смена отрасли / сферы деятельности', 'industry switch, sector change',
      ex('Ein [[Branchenwechsel]] in die IT gelingt oft leichter über verwandte Rollen wie Projektmanagement.', 'Смена отрасли на IT часто проходит легче через смежные роли вроде проектного менеджмента.', 'Switching industries into IT is often easier via adjacent roles such as project management.'), null, 'b2'),
    N('festanstellung', 'die', 'Festanstellung', 'die Festanstellungen', 'постоянная работа в штате', 'permanent employment, staff position',
      ex('Nach drei Jahren als Freelancer sucht er nun wieder eine [[Festanstellung]] in einem festen Team.', 'После трёх лет на фрилансе он снова ищет постоянную работу в штате в стабильной команде.', 'After three years freelancing, he is now looking for permanent employment in a steady team again.'),
      ['Противопоставляется временному контракту (befristete Stelle) и фрилансу.', 'Contrasts with fixed-term contracts (befristet) and freelancing (freiberuflich).'], 'b2'),
    N('berufseinstieg', 'der', 'Berufseinstieg', 'die Berufseinstiege', 'старт карьеры, выход на первую работу', 'career entry, starting one’s first job',
      ex('Ein Traineeprogramm bietet vielen Absolventen einen strukturierten [[Berufseinstieg]].', 'Программа стажировки даёт многим выпускникам структурированный старт карьеры.', 'A graduate trainee programme offers many graduates a structured career entry.'),
      ['Начинающий специалист — der Berufseinsteiger / die Berufseinsteigerin.', 'Someone starting out is der Berufseinsteiger / die Berufseinsteigerin.'], 'b2')
  ]);

  /* ── 10 · B2 World of Work (5) ───────────────────────────────────────────── */
  reg('b2_arbeitswelt', [
    N('gleitzeit', 'die', 'Gleitzeit', '', 'гибкий (скользящий) график рабочего времени', 'flexitime, flexible working hours',
      ex('Dank [[Gleitzeit]] kann ich morgens um sieben anfangen und nachmittags mein Kind abholen.', 'Благодаря гибкому графику я могу начинать утром в семь и днём забирать ребёнка.', 'Thanks to flexitime I can start at seven in the morning and pick up my child in the afternoon.'),
      ['Часто сочетается с die Kernarbeitszeit (обязательные часы) и das Gleitzeitkonto.', 'Often paired with die Kernarbeitszeit (core hours) and das Gleitzeitkonto (flexitime balance).'], 'b2'),
    N('kurzarbeit', 'die', 'Kurzarbeit', '', 'сокращённый рабочий день (антикризисная мера)', 'short-time work',
      ex('Bei schwacher Auftragslage beantragt der Betrieb [[Kurzarbeit]], um Entlassungen zu vermeiden.', 'При слабом потоке заказов предприятие оформляет сокращённый график, чтобы избежать увольнений.', 'When orders drop, the company applies for short-time work to avoid layoffs.'),
      ['Государство частично компенсирует потерю дохода через das Kurzarbeitergeld.', 'In Germany, the state partially offsets lost pay via das Kurzarbeitergeld.'], 'b2'),
    N('tarifvertrag', 'der', 'Tarifvertrag', 'die Tarifverträge', 'тарифное соглашение, коллективный договор', 'collective bargaining agreement',
      ex('Unser Unternehmen ist an einen [[Tarifvertrag]] gebunden, der Gehaltsstufen und Urlaubstage regelt.', 'Наша компания привязана к тарифному соглашению, которое регулирует грейды зарплат и отпуск.', 'Our company is bound by a collective agreement that regulates pay grades and holiday entitlement.'),
      ['Зарплата сверх тарифной сетки называется außertariflich (AT).', 'Pay above the union scale is called außertariflich (AT).'], 'b2'),
    N('zeiterfassung', 'die', 'Zeiterfassung', 'die Zeiterfassungen', 'учёт рабочего времени', 'time tracking, time recording',
      ex('Seit dem neuen Gesetz ist die tägliche [[Zeiterfassung]] in allen Abteilungen Pflicht.', 'После нового закона ежедневный учёт рабочего времени стал обязательным во всех отделах.', 'Since the new law, daily time tracking has been mandatory in all departments.'), null, 'b2'),
    N('mitbestimmung', 'die', 'Mitbestimmung', '', 'участие работников в управлении предприятием', 'co-determination, employee participation',
      ex('Betriebliche [[Mitbestimmung]] gibt dem Betriebsrat bei wichtigen Umstrukturierungen ein Mitspracherecht.', 'Участие работников в управлении даёт производственному совету право голоса при реструктуризациях.', 'Workplace co-determination gives the works council a say in major restructurings.'),
      ['Ключевое понятие немецкого трудового права (Mitbestimmungsgesetz).', 'Key concept in German labour law (Mitbestimmungsgesetz) giving employees institutional representation.'], 'c1')
  ]);

  /* ── 11 · Security (3) ───────────────────────────────────────────────────── */
  reg('security', [
    N('fehlkonfiguration', 'die', 'Fehlkonfiguration', 'die Fehlkonfigurationen', 'ошибочная конфигурация (misconfiguration)', 'misconfiguration',
      ex('Die meisten Datenlecks in der Cloud entstehen nicht durch Hacker, sondern durch eine simple [[Fehlkonfiguration]].', 'Большинство утечек данных в облаке происходит не из-за хакеров, а из-за простой ошибки конфигурации.', 'Most cloud data leaks happen not because of hackers, but because of a simple misconfiguration.'), null, 'c1'),
    N('rechteausweitung', 'die', 'Rechteausweitung', 'die Rechteausweitungen', 'повышение привилегий (privilege escalation)', 'privilege escalation',
      ex('Durch eine lokale [[Rechteausweitung]] erlangte der Angreifer Administratorzugriff auf den Server.', 'Через локальное повышение привилегий злоумышленник получил доступ администратора к серверу.', 'Through a local privilege escalation, the attacker gained administrator access to the server.'),
      ['В отчётах SOC — privilege escalation; защита: Prinzip der minimalen Rechte.', 'German term for “privilege escalation”; countered by the principle of least privilege.'], 'c1'),
    N('datenminimierung', 'die', 'Datenminimierung', '', 'минимизация данных (принцип DSGVO/GDPR)', 'data minimisation',
      ex('Nach dem Grundsatz der [[Datenminimierung]] erheben wir nur Angaben, die für den Dienst wirklich nötig sind.', 'По принципу минимизации данных мы собираем только те сведения, которые действительно нужны для работы сервиса.', 'Under the principle of data minimisation, we only collect details that are genuinely needed for the service.'),
      ['Один из базовых принципов европейского регламента DSGVO (ст. 5).', 'One of the core principles of the GDPR (DSGVO, Art. 5).'], 'c1')
  ]);
})();

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "it",
  "topic": "b2_beruf",
  "items": [
    {
      "id": "telc26-beratung",
      "t": "Beratung",
      "pos": "noun",
      "article": "die",
      "plural": "die Beratungen",
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
      "de": "Beratung",
      "ru": "консультация",
      "en": "consultation",
      "examples": [
        {
          "t": "Vor der Kurswahl vereinbarte sie eine [[Beratung]].",
          "en": "Before choosing a course, she arranged a consultation.",
          "ru": "Перед выбором курса она записалась на консультацию.",
          "de": "Vor der Kurswahl vereinbarte sie eine [[Beratung]].",
          "sense": {
            "ru": "консультация",
            "en": "consultation"
          }
        }
      ]
    },
    {
      "id": "telc26-branche",
      "t": "Branche",
      "pos": "noun",
      "article": "die",
      "plural": "die Branchen",
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
      "de": "Branche",
      "ru": "отрасль",
      "en": "industry",
      "examples": [
        {
          "t": "In dieser [[Branche]] werden viele Fachkräfte gesucht.",
          "en": "Many skilled workers are needed in this industry.",
          "ru": "В этой отрасли нужно много квалифицированных сотрудников.",
          "de": "In dieser [[Branche]] werden viele Fachkräfte gesucht.",
          "sense": {
            "ru": "отрасль",
            "en": "industry"
          }
        }
      ]
    },
    {
      "id": "telc26-stellengesuch",
      "t": "Stellengesuch",
      "pos": "noun",
      "article": "das",
      "plural": "die Stellengesuche",
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
      "de": "Stellengesuch",
      "ru": "объявление о поиске работы",
      "en": "job-seeking advertisement",
      "examples": [
        {
          "t": "In ihrem [[Stellengesuch]] nennt sie ihre Erfahrung im Verkauf.",
          "en": "Her job-seeking advertisement mentions her sales experience.",
          "ru": "В своём объявлении о поиске работы она указала опыт в продажах.",
          "de": "In ihrem [[Stellengesuch]] nennt sie ihre Erfahrung im Verkauf.",
          "sense": {
            "ru": "объявление о поиске работы",
            "en": "job-seeking advertisement"
          }
        }
      ]
    },
    {
      "id": "telc26-verhandlungssicher",
      "t": "verhandlungssicher",
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
      "de": "verhandlungssicher",
      "ru": "свободно владеющий языком",
      "en": "business fluent",
      "examples": [
        {
          "t": "Für Verhandlungen brauchen wir jemanden, der [[verhandlungssicher]] Deutsch spricht.",
          "en": "For negotiations, we need someone who is business fluent in German.",
          "ru": "Для переговоров нам нужен сотрудник, свободно владеющий немецким языком.",
          "de": "Für Verhandlungen brauchen wir jemanden, der [[verhandlungssicher]] Deutsch spricht.",
          "sense": {
            "ru": "свободно владеющий языком",
            "en": "business fluent"
          }
        }
      ],
      "note": {
        "en": "A job-advertisement and CV expression for language proficiency sufficient for negotiations. It is not an official CEFR level label.",
        "ru": "Здесь речь о владении языком, достаточном для деловых переговоров. Это формулировка вакансий и резюме, а не название официального уровня CEFR."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "med_clinical",
  "items": [
    {
      "id": "telc26-betreuung",
      "t": "Betreuung",
      "pos": "noun",
      "article": "die",
      "plural": "die Betreuungen",
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
      "de": "Betreuung",
      "ru": "уход",
      "en": "care",
      "examples": [
        {
          "t": "Die [[Betreuung]] der Patienten ist gut organisiert.",
          "en": "The patients’ care is well organised.",
          "ru": "Уход за пациентами хорошо организован.",
          "de": "Die [[Betreuung]] der Patienten ist gut organisiert.",
          "sense": {
            "ru": "уход",
            "en": "care"
          }
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
      "id": "telc26-einzelhandel",
      "t": "Einzelhandel",
      "pos": "noun",
      "article": "der",
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
      "de": "Einzelhandel",
      "ru": "розничная торговля",
      "en": "retail",
      "examples": [
        {
          "t": "Sie sammelt erste Berufserfahrung im [[Einzelhandel]].",
          "en": "She is gaining her first work experience in retail.",
          "ru": "Она получает первый опыт работы в розничной торговле.",
          "de": "Sie sammelt erste Berufserfahrung im [[Einzelhandel]].",
          "sense": {
            "ru": "розничная торговля",
            "en": "retail"
          }
        }
      ],
      "note": {
        "ru": "В данном значении обычно употребляется в единственном числе.",
        "en": "Normally singular in this sense."
      }
    },
    {
      "id": "telc26-muster",
      "t": "Muster",
      "pos": "noun",
      "article": "das",
      "plural": "die Muster",
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
      "de": "Muster",
      "ru": "образец",
      "en": "sample",
      "examples": [
        {
          "t": "Vor der Bestellung möchten wir ein [[Muster]] sehen.",
          "en": "We would like to see a sample before placing the order.",
          "ru": "Перед заказом мы хотели бы увидеть образец.",
          "de": "Vor der Bestellung möchten wir ein [[Muster]] sehen.",
          "sense": {
            "ru": "образец",
            "en": "sample"
          }
        }
      ]
    },
    {
      "id": "telc26-grosshaendler",
      "t": "Großhändler",
      "pos": "noun",
      "article": "der",
      "plural": "die Großhändler",
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
      "de": "Großhändler",
      "ru": "оптовый продавец",
      "en": "wholesaler",
      "examples": [
        {
          "t": "Der Laden bestellt die Ware bei einem [[Großhändler]].",
          "en": "The shop orders its goods from a wholesaler.",
          "ru": "Магазин заказывает товар у оптового продавца.",
          "de": "Der Laden bestellt die Ware bei einem [[Großhändler]].",
          "sense": {
            "ru": "оптовый продавец",
            "en": "wholesaler"
          }
        }
      ]
    },
    {
      "id": "telc26-artikelnummer",
      "t": "Artikelnummer",
      "pos": "noun",
      "article": "die",
      "plural": "die Artikelnummern",
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
      "de": "Artikelnummer",
      "ru": "артикул",
      "en": "item number",
      "examples": [
        {
          "t": "Bitte geben Sie bei der Bestellung die [[Artikelnummer]] an.",
          "en": "Please quote the item number when ordering.",
          "ru": "Пожалуйста, укажите артикул при заказе.",
          "de": "Bitte geben Sie bei der Bestellung die [[Artikelnummer]] an.",
          "sense": {
            "ru": "артикул",
            "en": "item number"
          }
        }
      ],
      "note": {
        "en": "An item number identifies a product; it is distinct from an order number.",
        "ru": "Артикул обозначает конкретный товар; его не стоит путать с номером отдельного заказа."
      }
    },
    {
      "id": "telc26-artikelbezeichnung",
      "t": "Artikelbezeichnung",
      "pos": "noun",
      "article": "die",
      "plural": "die Artikelbezeichnungen",
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
      "de": "Artikelbezeichnung",
      "ru": "наименование товара",
      "en": "item description",
      "examples": [
        {
          "t": "Die [[Artikelbezeichnung]] muss auf dem Lieferschein eindeutig sein.",
          "en": "The item description on the delivery note must be clear.",
          "ru": "Наименование товара в накладной должно быть однозначным.",
          "de": "Die [[Artikelbezeichnung]] muss auf dem Lieferschein eindeutig sein.",
          "sense": {
            "ru": "наименование товара",
            "en": "item description"
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
      "id": "telc26-maschinenbau",
      "t": "Maschinenbau",
      "pos": "noun",
      "article": "der",
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
      "de": "Maschinenbau",
      "ru": "машиностроение",
      "en": "mechanical engineering",
      "examples": [
        {
          "t": "Der Betrieb bildet Fachkräfte für den [[Maschinenbau]] aus.",
          "en": "The company trains skilled workers for mechanical engineering.",
          "ru": "Предприятие готовит специалистов для машиностроения.",
          "de": "Der Betrieb bildet Fachkräfte für den [[Maschinenbau]] aus.",
          "sense": {
            "ru": "машиностроение",
            "en": "mechanical engineering"
          }
        }
      ],
      "note": {
        "ru": "В данном значении обычно употребляется в единственном числе.",
        "en": "Normally singular in this sense."
      }
    },
    {
      "id": "telc26-anweisung",
      "t": "Anweisung",
      "pos": "noun",
      "article": "die",
      "plural": "die Anweisungen",
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
      "de": "Anweisung",
      "ru": "указание",
      "en": "instruction",
      "examples": [
        {
          "t": "Bitte lesen Sie die [[Anweisung]], bevor Sie das Gerät benutzen.",
          "en": "Please read the instruction before using the device.",
          "ru": "Пожалуйста, прочитайте указание перед использованием прибора.",
          "de": "Bitte lesen Sie die [[Anweisung]], bevor Sie das Gerät benutzen.",
          "sense": {
            "ru": "указание",
            "en": "instruction"
          }
        }
      ]
    },
    {
      "id": "telc26-gefahrenstelle",
      "t": "Gefahrenstelle",
      "pos": "noun",
      "article": "die",
      "plural": "die Gefahrenstellen",
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
      "de": "Gefahrenstelle",
      "ru": "опасный участок",
      "en": "hazardous area",
      "examples": [
        {
          "t": "Die [[Gefahrenstelle]] ist deutlich gekennzeichnet.",
          "en": "The hazardous area is clearly marked.",
          "ru": "Опасный участок чётко обозначен.",
          "de": "Die [[Gefahrenstelle]] ist deutlich gekennzeichnet.",
          "sense": {
            "ru": "опасный участок",
            "en": "hazardous area"
          }
        }
      ]
    },
    {
      "id": "telc26-stromschlag",
      "t": "Stromschlag",
      "pos": "noun",
      "article": "der",
      "plural": "die Stromschläge",
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
      "de": "Stromschlag",
      "ru": "удар электрическим током",
      "en": "electric shock",
      "examples": [
        {
          "t": "Die Schulung behandelt das Risiko eines [[Stromschlags]].",
          "en": "The training covers the risk of an electric shock.",
          "ru": "На обучении обсуждают риск удара электрическим током.",
          "de": "Die Schulung behandelt das Risiko eines [[Stromschlags]].",
          "sense": {
            "ru": "удар электрическим током",
            "en": "electric shock"
          }
        }
      ]
    },
    {
      "id": "telc26-ersthelfer",
      "t": "Ersthelfer",
      "pos": "noun",
      "article": "der",
      "plural": "die Ersthelfer",
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
      "de": "Ersthelfer",
      "ru": "сотрудник, обученный первой помощи",
      "en": "first aider",
      "examples": [
        {
          "t": "Auf der Liste steht, wer im Betrieb als [[Ersthelfer]] ausgebildet ist.",
          "en": "The list shows who has been trained as a first aider at the company.",
          "ru": "В списке указан каждый сотрудник, обученный первой помощи.",
          "de": "Auf der Liste steht, wer im Betrieb als [[Ersthelfer]] ausgebildet ist.",
          "sense": {
            "ru": "сотрудник, обученный первой помощи",
            "en": "first aider"
          }
        }
      ],
      "note": {
        "en": "Feminine: die Ersthelferin. A person trained in first aid, not necessarily a paramedic.",
        "ru": "Женская форма: die Ersthelferin. Сотрудник, обученный первой помощи; это не обязательно фельдшер или парамедик."
      }
    },
    {
      "id": "telc26-evakuierung",
      "t": "Evakuierung",
      "pos": "noun",
      "article": "die",
      "plural": "die Evakuierungen",
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
      "de": "Evakuierung",
      "ru": "эвакуация",
      "en": "evacuation",
      "examples": [
        {
          "t": "Die [[Evakuierung]] wird bei einer Übung besprochen.",
          "en": "The evacuation is discussed during a drill.",
          "ru": "Эвакуацию обсуждают во время учений.",
          "de": "Die [[Evakuierung]] wird bei einer Übung besprochen.",
          "sense": {
            "ru": "эвакуация",
            "en": "evacuation"
          }
        }
      ]
    },
    {
      "id": "telc26-fluchtweg",
      "t": "Fluchtweg",
      "pos": "noun",
      "article": "der",
      "plural": "die Fluchtwege",
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
      "de": "Fluchtweg",
      "ru": "путь эвакуации",
      "en": "escape route",
      "examples": [
        {
          "t": "Der [[Fluchtweg]] ist auf dem Plan grün markiert.",
          "en": "The escape route is marked in green on the plan.",
          "ru": "Путь эвакуации отмечен на плане зелёным цветом.",
          "de": "Der [[Fluchtweg]] ist auf dem Plan grün markiert.",
          "sense": {
            "ru": "путь эвакуации",
            "en": "escape route"
          }
        }
      ]
    },
    {
      "id": "telc26-notausgang",
      "t": "Notausgang",
      "pos": "noun",
      "article": "der",
      "plural": "die Notausgänge",
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
      "de": "Notausgang",
      "ru": "аварийный выход",
      "en": "emergency exit",
      "examples": [
        {
          "t": "Das Schild zeigt den Weg zum [[Notausgang]].",
          "en": "The sign points the way to the emergency exit.",
          "ru": "Табличка показывает путь к аварийному выходу.",
          "de": "Das Schild zeigt den Weg zum [[Notausgang]].",
          "sense": {
            "ru": "аварийный выход",
            "en": "emergency exit"
          }
        }
      ]
    },
    {
      "id": "telc26-rutschgefahr",
      "t": "Rutschgefahr",
      "pos": "noun",
      "article": "die",
      "plural": "die Rutschgefahren",
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
      "de": "Rutschgefahr",
      "ru": "опасность поскользнуться",
      "en": "slip hazard",
      "examples": [
        {
          "t": "Auf dem nassen Boden besteht [[Rutschgefahr]].",
          "en": "The wet floor presents a slip hazard.",
          "ru": "На мокром полу есть опасность поскользнуться.",
          "de": "Auf dem nassen Boden besteht [[Rutschgefahr]].",
          "sense": {
            "ru": "опасность поскользнуться",
            "en": "slip hazard"
          }
        }
      ]
    },
    {
      "id": "telc26-sammelstelle",
      "t": "Sammelstelle",
      "pos": "noun",
      "article": "die",
      "plural": "die Sammelstellen",
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
      "de": "Sammelstelle",
      "ru": "место сбора",
      "en": "assembly point",
      "examples": [
        {
          "t": "Die [[Sammelstelle]] befindet sich hinter dem Parkplatz.",
          "en": "The assembly point is behind the car park.",
          "ru": "Место сбора находится за парковкой.",
          "de": "Die [[Sammelstelle]] befindet sich hinter dem Parkplatz.",
          "sense": {
            "ru": "место сбора",
            "en": "assembly point"
          }
        }
      ]
    },
    {
      "id": "telc26-schutzbrille",
      "t": "Schutzbrille",
      "pos": "noun",
      "article": "die",
      "plural": "die Schutzbrillen",
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
      "de": "Schutzbrille",
      "ru": "защитные очки",
      "en": "safety goggles",
      "examples": [
        {
          "t": "Die [[Schutzbrille]] liegt zusammen mit den Handschuhen im Schrank.",
          "en": "The safety goggles are in the cupboard with the gloves.",
          "ru": "Защитные очки лежат в шкафу рядом с перчатками.",
          "de": "Die [[Schutzbrille]] liegt zusammen mit den Handschuhen im Schrank.",
          "sense": {
            "ru": "защитные очки",
            "en": "safety goggles"
          }
        }
      ]
    },
    {
      "id": "telc26-schutzhelm",
      "t": "Schutzhelm",
      "pos": "noun",
      "article": "der",
      "plural": "die Schutzhelme",
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
      "de": "Schutzhelm",
      "ru": "защитная каска",
      "en": "hard hat",
      "examples": [
        {
          "t": "Sein [[Schutzhelm]] trägt das Logo des Betriebs.",
          "en": "His hard hat carries the company logo.",
          "ru": "На его защитной каске есть логотип компании.",
          "de": "Sein [[Schutzhelm]] trägt das Logo des Betriebs.",
          "sense": {
            "ru": "защитная каска",
            "en": "hard hat"
          }
        }
      ]
    },
    {
      "id": "telc26-qualitaetssicherung",
      "t": "Qualitätssicherung",
      "pos": "noun",
      "article": "die",
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
      "de": "Qualitätssicherung",
      "ru": "обеспечение качества",
      "en": "quality assurance",
      "examples": [
        {
          "t": "Die [[Qualitätssicherung]] prüft vor der Lieferung eine Stichprobe.",
          "en": "Quality assurance checks a sample before delivery.",
          "ru": "Служба обеспечения качества проверяет выборку перед доставкой.",
          "de": "Die [[Qualitätssicherung]] prüft vor der Lieferung eine Stichprobe.",
          "sense": {
            "ru": "обеспечение качества",
            "en": "quality assurance"
          }
        }
      ],
      "note": {
        "ru": "В данном значении обычно употребляется в единственном числе.",
        "en": "Normally singular in this sense."
      }
    },
    {
      "id": "telc26-abdeckung",
      "t": "Abdeckung",
      "pos": "noun",
      "article": "die",
      "plural": "die Abdeckungen",
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
      "de": "Abdeckung",
      "ru": "защитная крышка",
      "en": "protective cover",
      "examples": [
        {
          "t": "Die [[Abdeckung]] des Geräts ist beschädigt.",
          "en": "The device’s protective cover is damaged.",
          "ru": "Защитная крышка прибора повреждена.",
          "de": "Die [[Abdeckung]] des Geräts ist beschädigt.",
          "sense": {
            "ru": "защитная крышка",
            "en": "protective cover"
          }
        }
      ]
    },
    {
      "id": "telc26-einrasten",
      "t": "einrasten",
      "pos": "verb",
      "forms": {
        "praes": "rastet ein",
        "praet": "rastete ein",
        "perf": "ist eingerastet"
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
      "de": "einrasten",
      "ru": "защёлкиваться",
      "en": "click into place",
      "examples": [
        {
          "t": "Die Abdeckung [[rastet]] mit einem hörbaren Klick [[ein]].",
          "en": "The cover clicks into place with an audible click.",
          "ru": "Крышка защёлкивается со слышимым щелчком.",
          "de": "Die Abdeckung [[rastet]] mit einem hörbaren Klick [[ein]].",
          "sense": {
            "ru": "защёлкиваться",
            "en": "click into place"
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
      "id": "telc26-beglaubigte-uebersetzung",
      "t": "beglaubigte Übersetzung",
      "pos": "noun",
      "article": "die",
      "plural": "die beglaubigten Übersetzungen",
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
      "de": "beglaubigte Übersetzung",
      "ru": "заверенный перевод",
      "en": "certified translation",
      "examples": [
        {
          "t": "Dem Antrag liegt eine [[beglaubigte Übersetzung]] des Zeugnisses bei.",
          "en": "A certified translation of the certificate is enclosed with the application.",
          "ru": "К заявлению приложен заверенный перевод свидетельства.",
          "de": "Dem Antrag liegt eine [[beglaubigte Übersetzung]] des Zeugnisses bei.",
          "sense": {
            "ru": "заверенный перевод",
            "en": "certified translation"
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
      "id": "telc26-einzelunternehmer",
      "t": "Einzelunternehmer",
      "pos": "noun",
      "article": "der",
      "plural": "die Einzelunternehmer",
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
      "de": "Einzelunternehmer",
      "ru": "индивидуальный предприниматель",
      "en": "sole proprietor",
      "examples": [
        {
          "t": "Als [[Einzelunternehmer]] erledigt er die Buchhaltung selbst.",
          "en": "As a sole proprietor, he does the bookkeeping himself.",
          "ru": "Как индивидуальный предприниматель, он сам ведёт бухгалтерию.",
          "de": "Als [[Einzelunternehmer]] erledigt er die Buchhaltung selbst.",
          "sense": {
            "ru": "индивидуальный предприниматель",
            "en": "sole proprietor"
          }
        }
      ],
      "note": {
        "en": "Feminine German form: die Einzelunternehmerin. Business-form vocabulary; do not infer identical registration rules across countries.",
        "ru": "Женская форма: die Einzelunternehmerin. Здесь обозначается предприниматель, работающий от своего имени; конкретные правовые формы зависят от страны."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_labour",
  "items": [
    {
      "id": "telc26-arbeitsverhaeltnis",
      "t": "Arbeitsverhältnis",
      "pos": "noun",
      "article": "das",
      "plural": "die Arbeitsverhältnisse",
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
      "de": "Arbeitsverhältnis",
      "ru": "трудовые отношения",
      "en": "employment relationship",
      "examples": [
        {
          "t": "Das [[Arbeitsverhältnis]] beginnt am ersten Tag des nächsten Monats.",
          "en": "The employment relationship begins on the first day of next month.",
          "ru": "Трудовые отношения начинаются с первого дня следующего месяца.",
          "de": "Das [[Arbeitsverhältnis]] beginnt am ersten Tag des nächsten Monats.",
          "sense": {
            "ru": "трудовые отношения",
            "en": "employment relationship"
          }
        }
      ]
    },
    {
      "id": "telc26-lohnfortzahlung",
      "t": "Lohnfortzahlung",
      "pos": "noun",
      "article": "die",
      "plural": "die Lohnfortzahlungen",
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
      "de": "Lohnfortzahlung",
      "ru": "сохранение заработной платы",
      "en": "continued payment of wages",
      "examples": [
        {
          "t": "Der Vertrag regelt die [[Lohnfortzahlung]] im Krankheitsfall.",
          "en": "The contract addresses the continued payment of wages during illness.",
          "ru": "Договор определяет сохранение заработной платы во время болезни.",
          "de": "Der Vertrag regelt die [[Lohnfortzahlung]] im Krankheitsfall.",
          "sense": {
            "ru": "сохранение заработной платы",
            "en": "continued payment of wages"
          }
        }
      ]
    },
    {
      "id": "telc26-kernzeit",
      "t": "Kernzeit",
      "pos": "noun",
      "article": "die",
      "plural": "die Kernzeiten",
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
      "de": "Kernzeit",
      "ru": "обязательные часы присутствия",
      "en": "core hours",
      "examples": [
        {
          "t": "Die [[Kernzeit]] wird im Teamkalender angezeigt.",
          "en": "The core hours are shown in the team calendar.",
          "ru": "Обязательные часы присутствия указаны в календаре команды.",
          "de": "Die [[Kernzeit]] wird im Teamkalender angezeigt.",
          "sense": {
            "ru": "обязательные часы присутствия",
            "en": "core hours"
          }
        }
      ]
    },
    {
      "id": "telc26-wechselschicht",
      "t": "Wechselschicht",
      "pos": "noun",
      "article": "die",
      "plural": "die Wechselschichten",
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
      "de": "Wechselschicht",
      "ru": "работа в чередующиеся смены",
      "en": "rotating shift",
      "examples": [
        {
          "t": "In der Produktion wurde [[Wechselschicht]] eingeführt.",
          "en": "Production introduced a rotating shift system.",
          "ru": "На производстве введена работа в чередующиеся смены.",
          "de": "In der Produktion wurde [[Wechselschicht]] eingeführt.",
          "sense": {
            "ru": "работа в чередующиеся смены",
            "en": "rotating shift"
          }
        }
      ]
    },
    {
      "id": "telc26-freistellung",
      "t": "Freistellung",
      "pos": "noun",
      "article": "die",
      "plural": "die Freistellungen",
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
      "de": "Freistellung",
      "ru": "освобождение от работы",
      "en": "leave of absence",
      "examples": [
        {
          "t": "Für die Fortbildung beantragt er eine [[Freistellung]].",
          "en": "He is applying for leave of absence for the training course.",
          "ru": "Для повышения квалификации он запрашивает освобождение от работы.",
          "de": "Für die Fortbildung beantragt er eine [[Freistellung]].",
          "sense": {
            "ru": "освобождение от работы",
            "en": "leave of absence"
          }
        }
      ],
      "note": {
        "en": "Freistellung means release from work duties, here for training. The word alone does not specify whether it is paid and does not mean dismissal.",
        "ru": "Freistellung — освобождение от обязанности работать, например для обучения. Само слово не сообщает, оплачивается ли этот период, и не означает увольнение."
      }
    },
    {
      "id": "telc26-freizeitausgleich",
      "t": "Freizeitausgleich",
      "pos": "noun",
      "article": "der",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 33,
          "headword": "Freizeitausgleich",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Freizeitausgleich",
      "ru": "отгул",
      "en": "time off in lieu",
      "examples": [
        {
          "t": "Die geleisteten Überstunden werden im Plan als [[Freizeitausgleich]] berücksichtigt.",
          "en": "The plan accounts for the overtime as time off in lieu.",
          "ru": "В плане учтён отгул за отработанные сверхурочные часы.",
          "de": "Die geleisteten Überstunden werden im Plan als [[Freizeitausgleich]] berücksichtigt.",
          "sense": {
            "ru": "отгул",
            "en": "time off in lieu"
          }
        }
      ],
      "note": {
        "ru": "В данном значении обычно употребляется в единственном числе.",
        "en": "Normally singular in this sense."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "workcomm",
  "items": [
    {
      "id": "telc26-arbeitsablauf",
      "t": "Arbeitsablauf",
      "pos": "noun",
      "article": "der",
      "plural": "die Arbeitsabläufe",
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
      "de": "Arbeitsablauf",
      "ru": "рабочий процесс",
      "en": "workflow",
      "examples": [
        {
          "t": "Eine Checkliste macht den [[Arbeitsablauf]] übersichtlicher.",
          "en": "A checklist makes the workflow easier to follow.",
          "ru": "Контрольный список делает рабочий процесс понятнее.",
          "de": "Eine Checkliste macht den [[Arbeitsablauf]] übersichtlicher.",
          "sense": {
            "ru": "рабочий процесс",
            "en": "workflow"
          }
        }
      ]
    },
    {
      "id": "telc26-verbesserungsvorschlag",
      "t": "Verbesserungsvorschlag",
      "pos": "noun",
      "article": "der",
      "plural": "die Verbesserungsvorschläge",
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
      "de": "Verbesserungsvorschlag",
      "ru": "предложение по улучшению",
      "en": "suggestion for improvement",
      "examples": [
        {
          "t": "Das Team bespricht jeden [[Verbesserungsvorschlag]] in der nächsten Sitzung.",
          "en": "The team will discuss each suggestion for improvement at the next meeting.",
          "ru": "Команда обсудит каждое предложение по улучшению на следующей встрече.",
          "de": "Das Team bespricht jeden [[Verbesserungsvorschlag]] in der nächsten Sitzung.",
          "sense": {
            "ru": "предложение по улучшению",
            "en": "suggestion for improvement"
          }
        }
      ]
    },
    {
      "id": "telc26-vorgehen",
      "t": "Vorgehen",
      "pos": "noun",
      "article": "das",
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
      "de": "Vorgehen",
      "ru": "порядок действий",
      "en": "procedure",
      "examples": [
        {
          "t": "Wir stimmen das weitere [[Vorgehen]] mit der Kundin ab.",
          "en": "We will agree on the next procedure with the client.",
          "ru": "Мы согласуем дальнейший порядок действий с клиенткой.",
          "de": "Wir stimmen das weitere [[Vorgehen]] mit der Kundin ab.",
          "sense": {
            "ru": "порядок действий",
            "en": "procedure"
          }
        }
      ],
      "note": {
        "ru": "Das Vorgehen — существительное среднего рода: порядок действий. Глагол vorgehen в семье gehen — отдельная часть речи.",
        "en": "Das Vorgehen is a neuter noun meaning procedure or approach. The lower-case verb vorgehen is a different part of speech."
      }
    },
    {
      "id": "telc26-anliegen",
      "t": "Anliegen",
      "pos": "noun",
      "article": "das",
      "plural": "die Anliegen",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 16,
          "headword": "Anliegen",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Anliegen",
      "ru": "просьба",
      "en": "request",
      "examples": [
        {
          "t": "Er schilderte sein [[Anliegen]] höflich am Telefon.",
          "en": "He politely explained his request on the phone.",
          "ru": "Он вежливо изложил свою просьбу по телефону.",
          "de": "Er schilderte sein [[Anliegen]] höflich am Telefon.",
          "sense": {
            "ru": "просьба",
            "en": "request"
          }
        }
      ]
    },
    {
      "id": "telc26-besprechungsraum",
      "t": "Besprechungsraum",
      "pos": "noun",
      "article": "der",
      "plural": "die Besprechungsräume",
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
      "de": "Besprechungsraum",
      "ru": "переговорная комната",
      "en": "meeting room",
      "examples": [
        {
          "t": "Der [[Besprechungsraum]] ist für zwei Stunden reserviert.",
          "en": "The meeting room is reserved for two hours.",
          "ru": "Переговорная комната забронирована на два часа.",
          "de": "Der [[Besprechungsraum]] ist für zwei Stunden reserviert.",
          "sense": {
            "ru": "переговорная комната",
            "en": "meeting room"
          }
        }
      ]
    },
    {
      "id": "telc26-ergebnisprotokoll",
      "t": "Ergebnisprotokoll",
      "pos": "noun",
      "article": "das",
      "plural": "die Ergebnisprotokolle",
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
      "de": "Ergebnisprotokoll",
      "ru": "протокол принятых решений",
      "en": "action minutes",
      "examples": [
        {
          "t": "Im [[Ergebnisprotokoll]] stehen die Beschlüsse und die nächsten Aufgaben.",
          "en": "The action minutes list the decisions and the next tasks.",
          "ru": "В протоколе принятых решений указаны решения и следующие задачи.",
          "de": "Im [[Ergebnisprotokoll]] stehen die Beschlüsse und die nächsten Aufgaben.",
          "sense": {
            "ru": "протокол принятых решений",
            "en": "action minutes"
          }
        }
      ]
    },
    {
      "id": "telc26-verlaufsprotokoll",
      "t": "Verlaufsprotokoll",
      "pos": "noun",
      "article": "das",
      "plural": "die Verlaufsprotokolle",
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
      "de": "Verlaufsprotokoll",
      "ru": "протокол хода обсуждения",
      "en": "detailed minutes",
      "examples": [
        {
          "t": "Das [[Verlaufsprotokoll]] hält die wichtigsten Beiträge in ihrer Reihenfolge fest.",
          "en": "The detailed minutes record the main contributions in their order.",
          "ru": "Протокол хода обсуждения сохраняет основные выступления в их последовательности.",
          "de": "Das [[Verlaufsprotokoll]] hält die wichtigsten Beiträge in ihrer Reihenfolge fest.",
          "sense": {
            "ru": "протокол хода обсуждения",
            "en": "detailed minutes"
          }
        }
      ]
    },
    {
      "id": "telc26-vorbesprechung",
      "t": "Vorbesprechung",
      "pos": "noun",
      "article": "die",
      "plural": "die Vorbesprechungen",
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
      "de": "Vorbesprechung",
      "ru": "предварительное обсуждение",
      "en": "preliminary meeting",
      "examples": [
        {
          "t": "In der [[Vorbesprechung]] klären wir die Rollen für die Präsentation.",
          "en": "In the preliminary meeting, we will clarify the roles for the presentation.",
          "ru": "На предварительном обсуждении мы уточним роли для презентации.",
          "de": "In der [[Vorbesprechung]] klären wir die Rollen für die Präsentation.",
          "sense": {
            "ru": "предварительное обсуждение",
            "en": "preliminary meeting"
          }
        }
      ]
    },
    {
      "id": "telc26-ausrichten",
      "t": "ausrichten",
      "pos": "verb",
      "forms": {
        "praes": "richtet aus",
        "praet": "richtete aus",
        "perf": "hat ausgerichtet"
      },
      "gov": "jdm. (Dat.) eine Nachricht (Akk.) ausrichten",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 26,
          "headword": "ausrichten",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "ausrichten",
      "ru": "передавать",
      "en": "pass on",
      "examples": [
        {
          "t": "Die Kollegin [[richtet]] Ihre Nachricht [[aus]].",
          "en": "The colleague passes on your message.",
          "ru": "Коллега передаёт ваше сообщение.",
          "de": "Die Kollegin [[richtet]] Ihre Nachricht [[aus]].",
          "sense": {
            "ru": "передавать",
            "en": "pass on"
          }
        }
      ],
      "note": {
        "en": "Here ausrichten means to pass a message on to someone.",
        "ru": "Здесь ausrichten означает передать сообщение кому-либо. Пример тренирует именно передачу сообщения, а не организацию мероприятия."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "fin_marketing",
  "items": [
    {
      "id": "telc26-aussteller",
      "t": "Aussteller",
      "pos": "noun",
      "article": "der",
      "plural": "die Aussteller",
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
      "de": "Aussteller",
      "ru": "участник выставки",
      "en": "exhibitor",
      "examples": [
        {
          "t": "Jeder [[Aussteller]] bekommt einen eigenen Stand.",
          "en": "Each exhibitor gets a separate stand.",
          "ru": "Каждый участник выставки получает отдельный стенд.",
          "de": "Jeder [[Aussteller]] bekommt einen eigenen Stand.",
          "sense": {
            "ru": "участник выставки",
            "en": "exhibitor"
          }
        }
      ]
    },
    {
      "id": "telc26-wettbewerber",
      "t": "Wettbewerber",
      "pos": "noun",
      "article": "der",
      "plural": "die Wettbewerber",
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
      "de": "Wettbewerber",
      "ru": "конкурент",
      "en": "competitor",
      "examples": [
        {
          "t": "Ein [[Wettbewerber]] bietet einen ähnlichen Service an.",
          "en": "A competitor offers a similar service.",
          "ru": "Конкурент предлагает похожую услугу.",
          "de": "Ein [[Wettbewerber]] bietet einen ähnlichen Service an.",
          "sense": {
            "ru": "конкурент",
            "en": "competitor"
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
      "id": "telc26-nettopreis",
      "t": "Nettopreis",
      "pos": "noun",
      "article": "der",
      "plural": "die Nettopreise",
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
      "de": "Nettopreis",
      "ru": "цена без НДС",
      "en": "net price",
      "examples": [
        {
          "t": "Im Angebot steht zuerst der [[Nettopreis]], die Mehrwertsteuer folgt separat.",
          "en": "The quote lists the net price first, with VAT shown separately.",
          "ru": "В предложении сначала указана цена без НДС, а налог приведён отдельно.",
          "de": "Im Angebot steht zuerst der [[Nettopreis]], die Mehrwertsteuer folgt separat.",
          "sense": {
            "ru": "цена без НДС",
            "en": "net price"
          }
        }
      ]
    },
    {
      "id": "telc26-bruttopreis",
      "t": "Bruttopreis",
      "pos": "noun",
      "article": "der",
      "plural": "die Bruttopreise",
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
      "de": "Bruttopreis",
      "ru": "цена с НДС",
      "en": "gross price",
      "examples": [
        {
          "t": "Bitte vergleichen Sie den [[Bruttopreis]] einschließlich Mehrwertsteuer.",
          "en": "Please compare the gross price including VAT.",
          "ru": "Пожалуйста, сравните цену с НДС.",
          "de": "Bitte vergleichen Sie den [[Bruttopreis]] einschließlich Mehrwertsteuer.",
          "sense": {
            "ru": "цена с НДС",
            "en": "gross price"
          }
        }
      ]
    },
    {
      "id": "telc26-skonto",
      "t": "Skonto",
      "pos": "noun",
      "article": "das",
      "plural": "die Skonti",
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
      "de": "Skonto",
      "ru": "скидка за досрочную оплату",
      "en": "early payment discount",
      "examples": [
        {
          "t": "Das Angebot nennt ein [[Skonto]] bei Zahlung innerhalb der vereinbarten Frist.",
          "en": "The quote offers an early payment discount for payment within the agreed period.",
          "ru": "В предложении есть скидка за досрочную оплату в согласованный срок.",
          "de": "Das Angebot nennt ein [[Skonto]] bei Zahlung innerhalb der vereinbarten Frist.",
          "sense": {
            "ru": "скидка за досрочную оплату",
            "en": "early payment discount"
          }
        }
      ],
      "note": {
        "en": "Usually das Skonto (der Skonto is also accepted). Plural: die Skonti or die Skontos. A discount for payment within a short agreed period.",
        "ru": "Обычно das Skonto (допустимо также der Skonto). Множественное число: die Skonti или die Skontos. Скидка за оплату в короткий согласованный срок."
      }
    },
    {
      "id": "telc26-lastschrift",
      "t": "Lastschrift",
      "pos": "noun",
      "article": "die",
      "plural": "die Lastschriften",
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
      "de": "Lastschrift",
      "ru": "прямое списание",
      "en": "direct debit",
      "examples": [
        {
          "t": "Die Rechnung wird nach der vereinbarten Zahlungsart per [[Lastschrift]] bezahlt.",
          "en": "The invoice is paid by direct debit under the agreed payment arrangement.",
          "ru": "Счёт оплачивается через прямое списание согласно согласованному способу оплаты.",
          "de": "Die Rechnung wird nach der vereinbarten Zahlungsart per [[Lastschrift]] bezahlt.",
          "sense": {
            "ru": "прямое списание",
            "en": "direct debit"
          }
        }
      ],
      "note": {
        "en": "A direct debit is a payee-initiated collection under an agreed mandate; distinguish it from a transfer sent by the payer.",
        "ru": "Прямое списание: платёж инициирует получатель по согласованному поручению. Здесь не имеется в виду перевод, который плательщик вручную отправляет сам."
      }
    },
    {
      "id": "telc26-zahlungserinnerung",
      "t": "Zahlungserinnerung",
      "pos": "noun",
      "article": "die",
      "plural": "die Zahlungserinnerungen",
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
      "de": "Zahlungserinnerung",
      "ru": "напоминание об оплате",
      "en": "payment reminder",
      "examples": [
        {
          "t": "Vor dem Anruf schickte die Buchhaltung eine [[Zahlungserinnerung]].",
          "en": "Before calling, the accounts team sent a payment reminder.",
          "ru": "Перед звонком бухгалтерия отправила напоминание об оплате.",
          "de": "Vor dem Anruf schickte die Buchhaltung eine [[Zahlungserinnerung]].",
          "sense": {
            "ru": "напоминание об оплате",
            "en": "payment reminder"
          }
        }
      ]
    },
    {
      "id": "telc26-faellig",
      "t": "fällig",
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
      "de": "fällig",
      "ru": "подлежащий оплате",
      "en": "due",
      "examples": [
        {
          "t": "Uns liegt eine Rechnung vor, die am Freitag [[fällig]] ist.",
          "en": "We have an invoice that is due on Friday.",
          "ru": "У нас есть счёт, подлежащий оплате в пятницу.",
          "de": "Uns liegt eine Rechnung vor, die am Freitag [[fällig]] ist.",
          "sense": {
            "ru": "подлежащий оплате",
            "en": "due"
          }
        }
      ]
    },
    {
      "id": "telc26-abbuchen",
      "t": "abbuchen",
      "pos": "verb",
      "forms": {
        "praes": "bucht ab",
        "praet": "buchte ab",
        "perf": "hat abgebucht"
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
      "de": "abbuchen",
      "ru": "списывать со счёта",
      "en": "debit",
      "examples": [
        {
          "t": "Die Bank [[bucht]] den Betrag vom Konto [[ab]].",
          "en": "The bank debits the amount from the account.",
          "ru": "Банк списывает сумму со счёта.",
          "de": "Die Bank [[bucht]] den Betrag vom Konto [[ab]].",
          "sense": {
            "ru": "списывать со счёта",
            "en": "debit"
          }
        }
      ]
    },
    {
      "id": "telc26-begleichen",
      "t": "begleichen",
      "pos": "verb",
      "forms": {
        "praes": "begleicht",
        "praet": "beglich",
        "perf": "hat beglichen"
      },
      "gov": "+ Akk.; eine Rechnung begleichen",
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
      "de": "begleichen",
      "ru": "оплатить",
      "en": "settle",
      "examples": [
        {
          "t": "Der Kunde [[beglich]] die Rechnung gestern.",
          "en": "The customer settled the invoice yesterday.",
          "ru": "Клиент оплатил счёт вчера.",
          "de": "Der Kunde [[beglich]] die Rechnung gestern.",
          "sense": {
            "ru": "оплатить",
            "en": "settle"
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
      "id": "telc26-sonderwunsch",
      "t": "Sonderwunsch",
      "pos": "noun",
      "article": "der",
      "plural": "die Sonderwünsche",
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
      "de": "Sonderwunsch",
      "ru": "особое пожелание",
      "en": "special request",
      "examples": [
        {
          "t": "Bitte teilen Sie uns Ihren [[Sonderwunsch]] vor der Bestellung mit.",
          "en": "Please tell us your special request before placing the order.",
          "ru": "Пожалуйста, сообщите нам своё особое пожелание перед заказом.",
          "de": "Bitte teilen Sie uns Ihren [[Sonderwunsch]] vor der Bestellung mit.",
          "sense": {
            "ru": "особое пожелание",
            "en": "special request"
          }
        }
      ]
    },
    {
      "id": "telc26-bestandskunde",
      "t": "Bestandskunde",
      "pos": "noun",
      "article": "der",
      "plural": "die Bestandskunden",
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
      "de": "Bestandskunde",
      "ru": "действующий клиент",
      "en": "existing customer",
      "examples": [
        {
          "t": "Als [[Bestandskunde]] hat er bereits eine Kundennummer.",
          "en": "As an existing customer, he already has a customer number.",
          "ru": "Как действующий клиент, он уже имеет номер клиента.",
          "de": "Als [[Bestandskunde]] hat er bereits eine Kundennummer.",
          "sense": {
            "ru": "действующий клиент",
            "en": "existing customer"
          }
        }
      ]
    },
    {
      "id": "telc26-kundennummer",
      "t": "Kundennummer",
      "pos": "noun",
      "article": "die",
      "plural": "die Kundennummern",
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
      "de": "Kundennummer",
      "ru": "номер клиента",
      "en": "customer number",
      "examples": [
        {
          "t": "Ihre [[Kundennummer]] steht oben auf der Rechnung.",
          "en": "Your customer number is at the top of the invoice.",
          "ru": "Ваш номер клиента указан в верхней части счёта.",
          "de": "Ihre [[Kundennummer]] steht oben auf der Rechnung.",
          "sense": {
            "ru": "номер клиента",
            "en": "customer number"
          }
        }
      ]
    },
    {
      "id": "telc26-neukunde",
      "t": "Neukunde",
      "pos": "noun",
      "article": "der",
      "plural": "die Neukunden",
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
      "de": "Neukunde",
      "ru": "новый клиент",
      "en": "new customer",
      "examples": [
        {
          "t": "Jeder [[Neukunde]] erhält eine kurze Einführung in das Portal.",
          "en": "Each new customer receives a short introduction to the portal.",
          "ru": "Каждый новый клиент получает короткое введение в работу с порталом.",
          "de": "Jeder [[Neukunde]] erhält eine kurze Einführung in das Portal.",
          "sense": {
            "ru": "новый клиент",
            "en": "new customer"
          }
        }
      ]
    },
    {
      "id": "telc26-entgegenkommen",
      "t": "Entgegenkommen",
      "pos": "noun",
      "article": "das",
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
      "de": "Entgegenkommen",
      "ru": "готовность пойти навстречу",
      "en": "goodwill",
      "examples": [
        {
          "t": "Vielen Dank für Ihr [[Entgegenkommen]] bei der Terminänderung.",
          "en": "Thank you for your goodwill in accommodating the change of date.",
          "ru": "Спасибо за вашу готовность пойти навстречу при изменении даты.",
          "de": "Vielen Dank für Ihr [[Entgegenkommen]] bei der Terminänderung.",
          "sense": {
            "ru": "готовность пойти навстречу",
            "en": "goodwill"
          }
        }
      ],
      "note": {
        "ru": "В данном значении обычно употребляется в единственном числе.",
        "en": "Normally singular in this sense."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "ops_logistics",
  "items": [
    {
      "id": "telc26-werktag",
      "t": "Werktag",
      "pos": "noun",
      "article": "der",
      "plural": "die Werktage",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 25,
          "headword": "Werktag",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "de": "Werktag",
      "ru": "рабочий день",
      "en": "working day",
      "examples": [
        {
          "t": "Die Lieferzeit wird im Angebot in [[Werktagen]] angegeben.",
          "en": "The quote states the delivery time in working days.",
          "ru": "В предложении срок доставки указан в рабочих днях.",
          "de": "Die Lieferzeit wird im Angebot in [[Werktagen]] angegeben.",
          "sense": {
            "ru": "рабочий день",
            "en": "working day"
          }
        }
      ],
      "note": {
        "en": "Here a working day is used to state a delivery period, not the length of a shift. Read the actual terms for which days count.",
        "ru": "Здесь рабочий день — единица срока доставки, а не продолжительность смены. Какие дни учитываются, нужно читать в конкретных условиях."
      }
    },
    {
      "id": "telc26-versand",
      "t": "Versand",
      "pos": "noun",
      "article": "der",
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
      "de": "Versand",
      "ru": "отправка",
      "en": "dispatch",
      "examples": [
        {
          "t": "Nach der Prüfung ist die Ware für den [[Versand]] bereit.",
          "en": "After inspection, the goods are ready for dispatch.",
          "ru": "После проверки товар готов к отправке.",
          "de": "Nach der Prüfung ist die Ware für den [[Versand]] bereit.",
          "sense": {
            "ru": "отправка",
            "en": "dispatch"
          }
        }
      ],
      "note": {
        "ru": "В данном значении обычно употребляется в единственном числе.",
        "en": "Normally singular in this sense."
      }
    },
    {
      "id": "telc26-gewerbegebiet",
      "t": "Gewerbegebiet",
      "pos": "noun",
      "article": "das",
      "plural": "die Gewerbegebiete",
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
      "de": "Gewerbegebiet",
      "ru": "промышленная зона",
      "en": "industrial estate",
      "examples": [
        {
          "t": "Das neue Lager liegt in einem [[Gewerbegebiet]].",
          "en": "The new warehouse is on an industrial estate.",
          "ru": "Новый склад находится в промышленной зоне.",
          "de": "Das neue Lager liegt in einem [[Gewerbegebiet]].",
          "sense": {
            "ru": "промышленная зона",
            "en": "industrial estate"
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
      "id": "telc26-nettoverdienst",
      "t": "Nettoverdienst",
      "pos": "noun",
      "article": "der",
      "plural": "die Nettoverdienste",
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
      "de": "Nettoverdienst",
      "ru": "заработок после вычетов",
      "en": "net earnings",
      "examples": [
        {
          "t": "Die Abrechnung zeigt den [[Nettoverdienst]] nach den Abzügen.",
          "en": "The payslip shows the net earnings after deductions.",
          "ru": "Расчётный листок показывает заработок после вычетов.",
          "de": "Die Abrechnung zeigt den [[Nettoverdienst]] nach den Abzügen.",
          "sense": {
            "ru": "заработок после вычетов",
            "en": "net earnings"
          }
        }
      ]
    },
    {
      "id": "telc26-bruttoverguetung",
      "t": "Bruttovergütung",
      "pos": "noun",
      "article": "die",
      "plural": "die Bruttovergütungen",
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
      "de": "Bruttovergütung",
      "ru": "вознаграждение до вычетов",
      "en": "gross remuneration",
      "examples": [
        {
          "t": "Im Entwurf des Vertrags ist die monatliche [[Bruttovergütung]] angegeben.",
          "en": "The draft contract states the monthly gross remuneration.",
          "ru": "В проекте договора указано ежемесячное вознаграждение до вычетов.",
          "de": "Im Entwurf des Vertrags ist die monatliche [[Bruttovergütung]] angegeben.",
          "sense": {
            "ru": "вознаграждение до вычетов",
            "en": "gross remuneration"
          }
        }
      ]
    },
    {
      "id": "telc26-rentenversicherung",
      "t": "Rentenversicherung",
      "pos": "noun",
      "article": "die",
      "plural": "die Rentenversicherungen",
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
      "de": "Rentenversicherung",
      "ru": "пенсионное страхование",
      "en": "pension insurance",
      "examples": [
        {
          "t": "Auf der Abrechnung ist ein Beitrag zur [[Rentenversicherung]] aufgeführt.",
          "en": "The payslip lists a contribution to pension insurance.",
          "ru": "В расчётном листке указан взнос на пенсионное страхование.",
          "de": "Auf der Abrechnung ist ein Beitrag zur [[Rentenversicherung]] aufgeführt.",
          "sense": {
            "ru": "пенсионное страхование",
            "en": "pension insurance"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "infra",
  "items": [
    {
      "id": "telc26-usb-anschluss",
      "t": "USB-Anschluss",
      "pos": "noun",
      "article": "der",
      "plural": "die USB-Anschlüsse",
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
      "de": "USB-Anschluss",
      "ru": "USB-порт",
      "en": "USB port",
      "examples": [
        {
          "t": "Der [[USB-Anschluss]] an der Vorderseite ist frei.",
          "en": "The USB port on the front is available.",
          "ru": "USB-порт на передней панели свободен.",
          "de": "Der [[USB-Anschluss]] an der Vorderseite ist frei.",
          "sense": {
            "ru": "USB-порт",
            "en": "USB port"
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
      "id": "telc26-teamfaehig",
      "t": "teamfähig",
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
      "de": "teamfähig",
      "ru": "умеющий работать в команде",
      "en": "able to work in a team",
      "examples": [
        {
          "t": "Für diese Aufgabe sollte man [[teamfähig]] sein.",
          "en": "For this role, you need to be able to work in a team.",
          "ru": "Для этой роли нужен сотрудник, умеющий работать в команде.",
          "de": "Für diese Aufgabe sollte man [[teamfähig]] sein.",
          "sense": {
            "ru": "умеющий работать в команде",
            "en": "able to work in a team"
          }
        }
      ]
    },
    {
      "id": "telc26-gewissenhaft",
      "t": "gewissenhaft",
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
      "de": "gewissenhaft",
      "ru": "добросовестный",
      "en": "conscientious",
      "examples": [
        {
          "t": "Eine [[gewissenhafte]] Prüfung verhindert viele Rückfragen.",
          "en": "A conscientious review prevents many follow-up questions.",
          "ru": "Добросовестная проверка помогает избежать многих дополнительных вопросов.",
          "de": "Eine [[gewissenhafte]] Prüfung verhindert viele Rückfragen.",
          "sense": {
            "ru": "добросовестный",
            "en": "conscientious"
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
      "id": "telc26-fehlerhaft",
      "t": "fehlerhaft",
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
      "de": "fehlerhaft",
      "ru": "ошибочный",
      "en": "faulty",
      "examples": [
        {
          "t": "Eine [[fehlerhafte]] Berechnung führte zum falschen Gesamtpreis.",
          "en": "A faulty calculation produced an incorrect total price.",
          "ru": "Ошибочный расчёт привёл к неверной общей сумме.",
          "de": "Eine [[fehlerhafte]] Berechnung führte zum falschen Gesamtpreis.",
          "sense": {
            "ru": "ошибочный",
            "en": "faulty"
          }
        }
      ]
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "legal_contracts",
  "items": [
    {
      "id": "telc26-bedingungen",
      "t": "Liefer- und Zahlungsbedingungen",
      "pos": "noun",
      "article": "die",
      "plural": "die Liefer- und Zahlungsbedingungen",
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
      "de": "Liefer- und Zahlungsbedingungen",
      "ru": "условия поставки и оплаты",
      "en": "terms of delivery and payment",
      "examples": [
        {
          "t": "Bitte prüfen Sie die [[Liefer- und Zahlungsbedingungen]] vor der Bestellung.",
          "en": "Please check the terms of delivery and payment before placing the order.",
          "ru": "Пожалуйста, проверьте условия поставки и оплаты перед заказом.",
          "de": "Bitte prüfen Sie die [[Liefer- und Zahlungsbedingungen]] vor der Bestellung.",
          "sense": {
            "ru": "условия поставки и оплаты",
            "en": "terms of delivery and payment"
          }
        }
      ]
    }
  ]
});

/* === Content expansion 2026-11-27 (DE Professional from bw_b1_wort_en.pdf & Einfach_besser_500) === */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function N(id, article, de, plural, ru, en, e, lvl) {
    return { id: 'pro-x27-' + id, pos: 'noun', level: lvl || 'B2', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] };
  }
  function V(id, de, forms, ru, en, e, lvl) {
    return { id: 'pro-x27-' + id, pos: 'verb', level: lvl || 'B2', de: de, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, en: en, examples: [e] };
  }
  function A(id, pos, de, ru, en, e, lvl) {
    return { id: 'pro-x27-' + id, pos: pos, level: lvl || 'B2', de: de, ru: ru, en: en, examples: [e] };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('bureau_offices', [
    N('beratungsstelle', 'die', 'Beratungsstelle', 'die Beratungsstellen', 'консультационный центр, приёмная', 'advice centre',
      ex('Bei Fragen zur Anerkennung hilft Ihnen die zuständige [[Beratungsstelle]] weiter.', 'По вопросам признания диплома вам поможет профильный консультационный центр.', 'For questions about recognition, the relevant advice centre will help you.')),
    N('behoerdengang', 'der', 'Behördengang', 'die Behördengänge', 'визит в учреждение, поход по инстанциям', 'visit to an authority',
      ex('Viele [[Behördengänge]] lassen sich heute schon online vorbereiten.', 'Многие походы в ведомства сегодня уже можно подготовить онлайн.', 'Many visits to public offices can now be prepared online.')),
    N('arbeitserlaubnis', 'die', 'Arbeitserlaubnis', '', 'разрешение на работу', 'work permit',
      ex('Ohne gültige [[Arbeitserlaubnis]] darf der Vertrag nicht beginnen.', 'Без действующего разрешения на работу договор не может вступить в силу.', 'Without a valid work permit, the contract cannot start.')),
    N('genehmigung', 'die', 'Genehmigung', 'die Genehmigungen', 'официальное разрешение, согласование', 'approval, permit',
      ex('Für den Umbau liegt die schriftliche [[Genehmigung]] des Bauamts bereits vor.', 'Письменное разрешение строительного ведомства на перепланировку уже получено.', 'Written approval from the building authority for the conversion is already in place.')),
    V('einreichen', 'einreichen', ['reicht ein', 'reichte ein', 'hat eingereicht'], 'подавать (документы, заявление)', 'to submit, file',
      ex('Bitte [[reichen]] Sie alle Nachweise bis Ende der Woche beim Amt [[ein]].', 'Пожалуйста, подайте все подтверждающие документы в ведомство до конца недели.', 'Please submit all supporting documents to the office by the end of the week.'))
  ]);

  reg('bureau_docs', [
    N('eheurkunde', 'die', 'Eheurkunde', 'die Eheurkunden', 'свидетельство о браке', 'marriage certificate',
      ex('Für den Antrag benötigen Sie eine beglaubigte Kopie der [[Eheurkunde]].', 'Для заявления вам понадобится заверенная копия свидетельства о браке.', 'For the application you need a certified copy of the marriage certificate.')),
    V('nachreichen', 'nachreichen', ['reicht nach', 'reichte nach', 'hat nachgereicht'], 'донести, дослать документ позже', 'to submit later',
      ex('Das fehlende Zeugnis können Sie innerhalb von zehn Tagen [[nachreichen]].', 'Недостающую справку вы можете донести в течение десяти дней.', 'You can submit the missing certificate within ten days.')),
    A('beglaubigt', 'adj', 'beglaubigt', 'нотариально / официально заверенный', 'certified, notarised',
      ex('Die Behörde verlangt eine [[beglaubigte]] Übersetzung des Abschlusszeugnisses.', 'Ведомство требует заверенный перевод диплома.', 'The authority requires a certified translation of the degree certificate.')),
    A('handschriftlich', 'adj', 'handschriftlich', 'рукописный, от руки', 'handwritten, by hand',
      ex('Bitte unterschreiben Sie die Erklärung [[handschriftlich]] mit Datum.', 'Пожалуйста, подпишите заявление от руки и поставьте дату.', 'Please sign the declaration by hand and add the date.'))
  ]);

  reg('bureau_tax', [
    N('finanzamt', 'das', 'Finanzamt', 'die Finanzämter', 'налоговая инспекция', 'tax office',
      ex('Das [[Finanzamt]] hat den Bescheid bereits letzte Woche verschickt.', 'Налоговая инспекция отправила уведомление ещё на прошлой неделе.', 'The tax office already sent the assessment last week.')),
    N('steuernummer', 'die', 'Steuernummer', 'die Steuernummern', 'налоговый номер', 'tax number',
      ex('Auf jeder Rechnung muss Ihre gültige [[Steuernummer]] angegeben sein.', 'На каждом счёте должен быть указан ваш действующий налоговый номер.', 'Your valid tax number must be stated on every invoice.')),
    N('kirchensteuer', 'die', 'Kirchensteuer', '', 'церковный налог', 'church tax',
      ex('Die [[Kirchensteuer]] wird in Deutschland direkt über das Gehalt abgeführt.', 'Церковный налог в Германии удерживается напрямую с зарплаты.', 'In Germany, church tax is deducted directly from one’s salary.')),
    N('sozialversicherung', 'die', 'Sozialversicherung', 'die Sozialversicherungen', 'социальное страхование', 'social insurance',
      ex('Beiträge zur [[Sozialversicherung]] teilen sich Arbeitgeber und Beschäftigte.', 'Взносы на социальное страхование делятся между работодателем и работником.', 'Social insurance contributions are shared between employer and employee.')),
    N('gehaltsabrechnung', 'die', 'Gehaltsabrechnung', 'die Gehaltsabrechnungen', 'расчётный лист по зарплате', 'payslip, payroll statement',
      ex('Auf der monatlichen [[Gehaltsabrechnung]] stehen alle Abzüge einzeln aufgelistet.', 'В ежемесячном расчётном листе отдельно указаны все удержания.', 'On the monthly payslip, all deductions are listed individually.')),
    N('stundenlohn', 'der', 'Stundenlohn', 'die Stundenlöhne', 'почасовая оплата', 'hourly wage',
      ex('Im Minijob wird meist ein fester [[Stundenlohn]] vereinbart.', 'На мини-работе обычно договариваются о фиксированной почасовой оплате.', 'In a mini-job, a fixed hourly wage is usually agreed.'))
  ]);

  reg('fin_accounting', [
    N('abrechnung', 'die', 'Abrechnung', 'die Abrechnungen', 'расчёт, ведомость, расчётный отчёт', 'statement, billing',
      ex('Die [[Abrechnung]] der Reisekosten muss bis Monatsende vorliegen.', 'Расчёт командировочных расходов должен быть сдан до конца месяца.', 'The travel expense statement must be submitted by the end of the month.')),
    N('kontoauszug', 'der', 'Kontoauszug', 'die Kontoauszüge', 'выписка по банковскому счёту', 'bank statement',
      ex('Auf dem aktuellen [[Kontoauszug]] ist die Überweisung bereits verbucht.', 'В свежей выписке по счёту перевод уже отражён.', 'The transfer is already posted on the latest bank statement.')),
    N('barzahlung', 'die', 'Barzahlung', 'die Barzahlungen', 'оплата наличными', 'cash payment',
      ex('Bei [[Barzahlung]] erhalten Sie sofort eine abgestempelte Quittung.', 'При оплате наличными вы сразу получаете квитанцию с печатью.', 'When paying in cash, you immediately receive a stamped receipt.')),
    N('vorkasse', 'die', 'Vorkasse', '', 'предоплата', 'advance payment',
      ex('Bei Neukunden liefert der Händler größere Bestellungen nur gegen [[Vorkasse]].', 'Новым клиентам продавец отгружает крупные заказы только по предоплате.', 'For new customers, the dealer ships larger orders only against advance payment.'))
  ]);

  reg('legal_labour', [
    N('betriebsgeheimnis', 'das', 'Betriebsgeheimnis', 'die Betriebsgeheimnisse', 'коммерческая / производственная тайна', 'trade secret',
      ex('Kundendaten und interne Kalkulationen gelten als strenges [[Betriebsgeheimnis]].', 'Данные клиентов и внутренние расчёты считаются строгой коммерческой тайной.', 'Customer data and internal calculations count as a strict trade secret.')),
    N('mutterschutz', 'der', 'Mutterschutz', '', 'охрана материнства (декретный период)', 'maternity protection / leave',
      ex('Während des [[Mutterschutzes]] besteht ein besonderer Kündigungsschutz.', 'В период декрета по охране материнства действует особая защита от увольнения.', 'During maternity protection, special protection against dismissal applies.')),
    N('sperrzeit', 'die', 'Sperrzeit', 'die Sperrzeiten', 'период блокировки выплаты пособия', 'blocking period (benefits)',
      ex('Bei einer Eigenkündigung ohne wichtigen Grund droht eine [[Sperrzeit]] beim Arbeitslosengeld.', 'При увольнении по собственному желанию без уважительной причины грозит приостановка выплаты пособия.', 'Resigning without good cause can trigger a blocking period for unemployment benefit.')),
    N('verwarnung', 'die', 'Verwarnung', 'die Verwarnungen', 'выговор, предупреждение', 'reprimand, warning',
      ex('Wegen wiederholter Verspätung erhielt der Mitarbeiter eine schriftliche [[Verwarnung]].', 'Из-за повторных опозданий сотрудник получил письменное предупреждение.', 'Because of repeated lateness, the employee received a written reprimand.')),
    N('fehlverhalten', 'das', 'Fehlverhalten', '', 'проступок, ненадлежащее поведение', 'misconduct',
      ex('Schweres [[Fehlverhalten]] am Arbeitsplatz kann zu einer sofortigen Kündigung führen.', 'Грубое нарушение дисциплины на рабочем месте может привести к немедленному увольнению.', 'Serious misconduct in the workplace can lead to immediate dismissal.')),
    A('befristet', 'adj', 'befristet', 'срочный, ограниченный по сроку', 'fixed-term, temporary',
      ex('Ihr erster Arbeitsvertrag war zunächst auf zwölf Monate [[befristet]].', 'Её первый трудовой договор был изначально ограничен двенадцатью месяцами.', 'Her first employment contract was initially fixed-term for twelve months.'))
  ]);

  reg('fin_hr', [
    N('aufstiegschance', 'die', 'Aufstiegschance', 'die Aufstiegschancen', 'шанс карьерного роста', 'promotion prospect',
      ex('In diesem Unternehmen gibt es gute [[Aufstiegschancen]] für engagierte Fachkräfte.', 'В этой компании есть хорошие возможности карьерного роста для мотивированных специалистов.', 'In this company there are good promotion prospects for committed specialists.')),
    N('vorgesetzte', 'der', 'Vorgesetzte', 'die Vorgesetzten', 'руководитель, непосредственный начальник', 'supervisor, line manager',
      ex('Sprechen Sie bei Urlaubswünschen zuerst mit Ihrer direkten [[Vorgesetzten]].', 'По поводу дат отпуска сначала поговорите со своим непосредственным руководителем.', 'When requesting leave, speak with your direct supervisor first.')),
    N('nachfolger', 'der', 'Nachfolger', 'die Nachfolger', 'преемник', 'successor',
      ex('Vor seinem Ruhestand arbeitete er seinen [[Nachfolger]] drei Monate lang ein.', 'Перед выходом на пенсию он три месяца вводил в курс дела своего преемника.', 'Before retiring, he trained his successor for three months.')),
    N('praktikant', 'der', 'Praktikant', 'die Praktikanten', 'стажёр, практикант', 'intern, trainee',
      ex('Unser neuer [[Praktikant]] unterstützt das Team bis Ende Juli bei Recherchen.', 'Наш новый стажёр помогает команде с исследованиями до конца июля.', 'Our new intern is supporting the team with research until the end of July.'))
  ]);

  reg('fin_marketing', [
    N('broschuere', 'die', 'Broschüre', 'die Broschüren', 'брошюра, буклет', 'brochure',
      ex('Alle technischen Daten finden Sie übersichtlich in unserer neuen [[Broschüre]].', 'Все технические характеристики наглядно собраны в нашей новой брошюре.', 'All technical data can be found clearly laid out in our new brochure.')),
    N('visitenkarte', 'die', 'Visitenkarte', 'die Visitenkarten', 'визитная карточка', 'business card',
      ex('Nach dem Gespräch auf der Messe tauschten beide ihre [[Visitenkarten]] aus.', 'После разговора на выставке оба обменялись визитками.', 'After talking at the trade fair, both exchanged business cards.')),
    N('veranstalter', 'der', 'Veranstalter', 'die Veranstalter', 'организатор (мероприятия)', 'organiser',
      ex('Der [[Veranstalter]] rechnet in diesem Jahr mit über tausend Gästen.', 'Организатор рассчитывает в этом году более чем на тысячу гостей.', 'The organiser expects over a thousand guests this year.'))
  ]);

  reg('workcomm', [
    N('sitzung', 'die', 'Sitzung', 'die Sitzungen', 'заседание, совещание', 'meeting, session',
      ex('Die wöchentliche [[Sitzung]] des Teams beginnt pünktlich um neun Uhr.', 'Еженедельное совещание команды начинается ровно в девять часов.', 'The team’s weekly meeting starts promptly at nine o’clock.')),
    N('rueckruf', 'der', 'Rückruf', 'die Rückrufe', 'обратный звонок', 'callback, return call',
      ex('Vielen Dank für Ihren [[Rückruf]], wir können die Details jetzt kurz klären.', 'Спасибо за обратный звонок, теперь мы можем быстро уточнить детали.', 'Thank you for returning my call; we can quickly clarify the details now.')),
    N('beamer', 'der', 'Beamer', 'die Beamer', 'проектор', 'projector',
      ex('Im Konferenzraum müssen wir vor der Präsentation noch den [[Beamer]] anschließen.', 'В переговорной перед презентацией нам ещё нужно подключить проектор.', 'In the conference room we still need to connect the projector before the presentation.')),
    A('umgehend', 'adj', 'umgehend', 'незамедлительно, немедленно', 'immediately, promptly',
      ex('Sobald die Prüfung abgeschlossen ist, informieren wir Sie [[umgehend]].', 'Как только проверка завершится, мы незамедлительно сообщим вам.', 'As soon as the review is complete, we will inform you immediately.'))
  ]);

  reg('svc_hotel', [
    N('rezeption', 'die', 'Rezeption', 'die Rezeptionen', 'стойка регистрации, ресепшен', 'reception, front desk',
      ex('Den Zimmerschlüssel erhalten Sie ab vierzehn Uhr an der [[Rezeption]].', 'Ключ от номера вы получите с четырнадцати часов на ресепшене.', 'You can pick up your room key from two o’clock at reception.')),
    V('einchecken', 'einchecken', ['checkt ein', 'checkte ein', 'hat eingecheckt'], 'зарегистрироваться (в отеле / на рейс)', 'to check in',
      ex('Gäste können am Automaten bereits vorab schnell [[einchecken]].', 'Гости могут заранее быстро зарегистрироваться через терминал.', 'Guests can already check in quickly in advance at the kiosk.'))
  ]);

  reg('med_clinical', [
    N('rettungsdienst', 'der', 'Rettungsdienst', 'die Rettungsdienste', 'служба скорой помощи / спасения', 'emergency medical service',
      ex('Nach dem Arbeitsunfall traf der [[Rettungsdienst]] nach wenigen Minuten ein.', 'После несчастного случая на производстве скорая помощь прибыла через несколько минут.', 'After the workplace accident, the emergency medical service arrived within a few minutes.')),
    A('ambulant', 'adj', 'ambulant', 'амбулаторный', 'outpatient',
      ex('Der kleine Eingriff konnte zum Glück [[ambulant]] durchgeführt werden.', 'Небольшое вмешательство, к счастью, удалось провести амбулаторно.', 'Fortunately, the minor procedure could be performed on an outpatient basis.')),
    A('stationaer', 'adj', 'stationär', 'стационарный (с госпитализацией)', 'inpatient',
      ex('Nach der Operation muss der Patient noch drei Tage [[stationär]] bleiben.', 'После операции пациенту нужно ещё три дня оставаться в стационаре.', 'After the operation, the patient has to stay as an inpatient for another three days.'))
  ]);

  reg('ops_trades', [
    N('schutzmassnahme', 'die', 'Schutzmaßnahme', 'die Schutzmaßnahmen', 'защитная мера, мера безопасности', 'protective measure',
      ex('Alle [[Schutzmaßnahmen]] auf der Baustelle müssen täglich kontrolliert werden.', 'Все меры безопасности на стройплощадке должны проверяться ежедневно.', 'All protective measures on the construction site must be checked daily.')),
    N('unterweisung', 'die', 'Unterweisung', 'die Unterweisungen', 'инструктаж по технике безопасности', 'safety briefing, instruction',
      ex('Vor der Arbeit an der neuen Anlage erhält jede Kraft eine [[Unterweisung]].', 'Перед работой на новой установке каждый сотрудник проходит инструктаж.', 'Before working on the new system, every worker receives a safety briefing.'))
  ]);
})();

/* === Content expansion Wave 2 (2026-11-27): +36 DE Pro terms (thin legal & service topics) === */
(function () {
  'use strict';
  function ex(t, ru, en) { return { t: t, de: t, ru: ru, en: en }; }
  function N(id, article, t, plural, ru, en, e, level) {
    var o = { id: 'pro-w2-' + id, pos: 'noun', article: article, t: t, de: t, ru: ru, en: en, level: level || 'B2', examples: [e] };
    if (plural) o.plural = plural;
    return o;
  }
  function V(id, t, forms, ru, en, e, level) {
    return { id: 'pro-w2-' + id, pos: 'verb', t: t, de: t, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, en: en, level: level || 'B2', examples: [e] };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('legal_contracts', [
    N('salvatorische-klausel', 'die', 'Vertragsbruch', 'die Vertragsbrüche', 'нарушение условий договора', 'breach of contract',
      ex('Die nicht erfolgte Lieferung gilt als wesentlicher [[Vertragsbruch]].', 'Несостоявшаяся поставка считается существенным нарушением договора.', 'Failure to deliver counts as a material breach of contract.')),
    N('haftungsausschluss', 'der', 'Haftungsausschluss', 'die Haftungsausschlüsse', 'исключение / ограничение ответственности', 'disclaimer, exclusion of liability',
      ex('Ein pauschaler [[Haftungsausschluss]] bei grober Fahrlässigkeit ist unwirksam.', 'Общее исключение ответственности при грубой неосторожности недействительно.', 'A blanket exclusion of liability for gross negligence is invalid.'), 'C1'),
    N('schadenersatz', 'das', 'Vorkaufsrecht', 'die Vorkaufsrechte', 'право преимущественной покупки', 'right of first refusal, pre-emption right',
      ex('Die Gemeinde machte bei dem Eckgrundstück ihr [[Vorkaufsrecht]] geltend.', 'Муниципалитет воспользовался своим правом преимущественной покупки углового участка.', 'The municipality exercised its pre-emption right on the corner plot.')),
    N('hoehere-gewalt', 'die', 'Abtretung', 'die Abtretungen', 'уступка требования, передача прав по договору', 'assignment (of a claim)',
      ex('Eine [[Abtretung]] der Forderung bedarf der schriftlichen Zustimmung.', 'Уступка требования требует письменного согласия стороны.', 'An assignment of the claim requires written consent.'), 'C1'),
    N('vertragsstrafe', 'die', 'Bürgschaft', 'die Bürgschaften', 'поручительство, финансовая гарантия третьего лица', 'suretyship, guarantee',
      ex('Ohne eine selbstschuldnerische [[Bürgschaft]] vergibt die Bank keinen Kredit.', 'Без прямого поручительства банк не выдаёт такой кредит.', 'Without an absolute guarantee, the bank will not grant the loan.')),
    N('verjaehrungsfrist', 'die', 'Verjährungsfrist', 'die Verjährungsfristen', 'срок исковой давности', 'limitation period',
      ex('Die gesetzliche [[Verjährungsfrist]] beginnt am Ende des Jahres zu laufen.', 'Законный срок исковой давности начинает течь в конце года.', 'The statutory limitation period begins at the end of the year.'), 'C1')
  ]);

  reg('legal_ip', [
    N('urheberrecht', 'das', 'Gebrauchsmuster', 'die Gebrauchsmuster', 'полезная модель (регистрируемая техническая охрана)', 'utility model',
      ex('Für kleinere Werkzeugverbesserungen reicht oft ein eingetragenes [[Gebrauchsmuster]].', 'Для небольших улучшений инструмента часто достаточно зарегистрировать полезную модель.', 'For minor tool improvements, a registered utility model often suffices.'), 'C1'),
    N('schutzrecht', 'das', 'Geschmacksmuster', 'die Geschmacksmuster', 'промышленный образец (охрана дизайна)', 'registered design',
      ex('Die markante Gehäuseform wurde europaweit als [[Geschmacksmuster]] geschützt.', 'Узнаваемая форма корпуса была защищена в Европе как промышленный образец.', 'The distinctive casing shape was protected across Europe as a registered design.'), 'C1'),
    N('lizenzvertrag', 'der', 'Lizenzvertrag', 'die Lizenzverträge', 'лицензионный договор', 'licence agreement',
      ex('Der [[Lizenzvertrag]] regelt genau die zulässige Nutzerzahl.', 'Лицензионный договор точно определяет допустимое число пользователей.', 'The licence agreement specifies the exact permitted number of users.')),
    N('abmahnung-ip', 'die', 'Vervielfältigung', 'die Vervielfältigungen', 'воспроизведение, тиражирование (материала)', 'reproduction, copying',
      ex('Ohne Erlaubnis ist jede gewerbliche [[Vervielfältigung]] des Handbuchs untersagt.', 'Без разрешения любое коммерческое воспроизведение руководства запрещено.', 'Without permission, any commercial reproduction of the manual is prohibited.')),
    N('patentanmeldung', 'die', 'Patentanmeldung', 'die Patentanmeldungen', 'патентная заявка', 'patent application',
      ex('Die [[Patentanmeldung]] muss vor jeder öffentlichen Vorstellung erfolgen.', 'Подача патентной заявки должна состояться до любой публичной презентации.', 'The patent application must be filed before any public presentation.')),
    N('plagiat', 'die', 'Zweitverwertung', 'die Zweitverwertungen', 'вторичное использование / переиздание (прав, контента)', 'secondary exploitation',
      ex('Der Verlagsvertrag regelt auch die Vergütung für jede digitale [[Zweitverwertung]].', 'Издательский договор регулирует и вознаграждение за любое вторичное цифровое использование.', 'The publishing contract also regulates royalties for any secondary digital use.'), 'C1')
  ]);

  reg('legal_criminal', [
    N('anklageschrift', 'die', 'Strafanzeige', 'die Strafanzeigen', 'заявление о преступлении (в полицию / прокуратуру)', 'criminal complaint',
      ex('Nach dem Datendiebstahl erstattete das Unternehmen umgehend [[Strafanzeige]].', 'После кражи данных компания немедленно подала заявление в полицию.', 'After the data theft, the company immediately filed a criminal complaint.')),
    N('unschuldsvermutung', 'das', 'Geständnis', 'die Geständnisse', 'признание (вины на следствии или в суде)', 'confession, admission',
      ex('Ein frühes [[Geständnis]] kann sich strafmildernd auf das Urteil auswirken.', 'Раннее признание вины может смягчить приговор суда.', 'An early confession can act as a mitigating factor in sentencing.')),
    N('freispruch', 'das', 'Strafmaß', 'die Strafmaße', 'мера наказания, размер санкции', 'sentence, level of penalty',
      ex('Bei der Festlegung des [[Strafmaßes]] wog das Gericht alle Umstände ab.', 'При определении меры наказания суд взвесил все обстоятельства.', 'When setting the sentence, the court weighed all the circumstances.'), 'C1'),
    N('strafverteidiger', 'der', 'Strafverteidiger', 'die Strafverteidiger', 'адвокат по уголовным делам, защитник', 'criminal defence lawyer',
      ex('Der [[Strafverteidiger]] beantragte Einsicht in die vollständigen Ermittlungsakten.', 'Адвокат по уголовным делам запросил доступ ко всем материалам следствия.', 'The defence lawyer requested access to the complete investigation files.'), 'C1'),
    N('berufung', 'die', 'Nebenklage', 'die Nebenklagen', 'присоединение потерпевшего к обвинению (частное соучастие)', 'joint prosecution (by victim)',
      ex('Die Angehörigen schlossen sich dem Verfahren als Vertreter der [[Nebenklage]] an.', 'Родственники присоединились к процессу в качестве представителей потерпевшей стороны.', 'The relatives joined the proceedings as joint prosecutors.'), 'C1'),
    N('untersuchungshaft', 'die', 'Vollstreckung', 'die Vollstreckungen', 'приведение решения / приговора в исполнение', 'enforcement, execution (of ruling)',
      ex('Mit Eintritt der Rechtskraft beginnt die [[Vollstreckung]] des Urteils.', 'После вступления в законную силу начинается исполнение приговора.', 'Once the judgment becomes final, enforcement begins.'), 'C1')
  ]);

  reg('legal_corporate', [
    N('satzung', 'der', 'Vorstand', 'die Vorstände', 'правление (акционерного общества / союза)', 'executive board',
      ex('Der [[Vorstand]] legt dem Aufsichtsrat vierteljährlich den Risikobericht vor.', 'Правление ежеквартально представляет наблюдательному совету отчёт о рисках.', 'The executive board submits the risk report to the supervisory board quarterly.')),
    N('gesellschafter', 'der', 'Gesellschafter', 'die Gesellschafter', 'участник / соучредитель общества', 'shareholder, partner',
      ex('Alle [[Gesellschafter]] stimmten dem Jahresabschluss einstimmig zu.', 'Все соучредители единогласно утвердили годовой отчёт.', 'All partners approved the annual financial statements unanimously.'), 'C1'),
    N('handelsregister', 'das', 'Stammkapital', 'die Stammkapitale', 'уставный капитал (общества с огр. ответственностью)', 'share capital',
      ex('Zur Gründung einer GmbH muss das gesetzliche [[Stammkapital]] nachgewiesen werden.', 'Для учреждения GmbH необходимо подтвердить установленный уставный капитал.', 'To establish a GmbH, the statutory share capital must be documented.'), 'C1'),
    N('sorgfaltspflicht', 'die', 'Hauptversammlung', 'die Hauptversammlungen', 'общее собрание акционеров', 'annual general meeting',
      ex('Auf der ordentlichen [[Hauptversammlung]] stimmen Aktionäre über die Dividende ab.', 'На очередном общем собрании акционеры голосуют по размеру дивидендов.', 'At the annual general meeting, shareholders vote on the dividend.'), 'C1'),
    N('hinweisgeber', 'der', 'Hinweisgeber', 'die Hinweisgeber', 'информатор о нарушениях (в компании)', 'whistleblower',
      ex('Das neue Gesetz schützt interne [[Hinweisgeber]] vor beruflichen Nachteilen.', 'Новый закон защищает внутренних информаторов от преследования на работе.', 'The new law protects internal whistleblowers against workplace retaliation.'), 'C1'),
    N('geschaeftsfuehrer', 'der', 'Geschäftsführer', 'die Geschäftsführer', 'управляющий директор', 'managing director',
      ex('Nur der [[Geschäftsführer]] darf Verträge über hunderttausend Euro zeichnen.', 'Только управляющий директор вправе подписывать договоры свыше 100 тысяч евро.', 'Only the managing director may sign contracts above one hundred thousand euros.'))
  ]);

  reg('svc_hotel', [
    N('ueberbuchung', 'die', 'Überbuchung', 'die Überbuchungen', 'овербукинг, избыточное бронирование', 'overbooking',
      ex('Bei einer [[Überbuchung]] organisiert das Hotel ein gleichwertiges Partnerzimmer.', 'При овербукинге отель организует равноценный номер в партнёрской гостинице.', 'In an overbooking, the hotel arranges an equivalent room at a partner hotel.')),
    N('kurtaxe', 'der', 'Pauschalpreis', 'die Pauschalpreise', 'фиксированная пакетная цена', 'flat rate, package price',
      ex('Der [[Pauschalpreis]] für drei Nächte enthält Frühstück und Tiefgarage.', 'Фиксированная цена пакета за три ночи включает завтрак и подземную парковку.', 'The package price for three nights includes breakfast and underground parking.')),
    N('zimmerkategorie', 'die', 'Schlüsselkarte', 'die Schlüsselkarten', 'электронный ключ-карта (от номера)', 'key card',
      ex('Bitte halten Sie die [[Schlüsselkarte]] am Aufzug kurz an das Lesegerät.', 'Пожалуйста, приложите ключ-карту к считывателю у лифта.', 'Please hold the key card briefly against the reader by the lift.')),
    N('stornogebuehr', 'die', 'Stornogebühr', 'die Stornogebühren', 'штраф / комиссия за отмену брони', 'cancellation fee',
      ex('Bis vierundzwanzig Stunden vor Anreise entfällt die [[Stornogebühr]].', 'До 24 часов до заезда комиссия за отмену не взимается.', 'Up to twenty-four hours before arrival, no cancellation fee applies.')),
    N('kaution-hotel', 'die', 'Kofferwaage', 'die Kofferwaagen', 'весы для багажа', 'luggage scale',
      ex('An der Rezeption können Gäste vor dem Rückflug kostenlos die [[Kofferwaage]] nutzen.', 'На стойке регистрации гости могут бесплатно воспользоваться багажными весами перед вылетом.', 'At reception, guests can freely use the luggage scale before their return flight.')),
    N('schichtuebergabe', 'der', 'Weckruf', 'die Weckrufe', 'услуга «будильник», утренний звонок по заказу', 'wake-up call',
      ex('Für den frühen Zug bestellte er an der Rezeption einen [[Weckruf]] um fünf.', 'К раннему поезду он заказал на ресепшене утренний звонок-будильник на пять утра.', 'For the early train, he ordered a five a.m. wake-up call at reception.'))
  ]);

  reg('svc_gastro', [
    N('tagesgericht', 'das', 'Tagesmenü', 'die Tagesmenüs', 'меню дня, комплексный обед дня', 'menu of the day',
      ex('Zum [[Tagesmenü]] gehören heute eine Kürbissuppe und ein Fischfilet.', 'В меню дня сегодня входят тыквенный суп и филе рыбы.', 'Today’s menu of the day includes pumpkin soup and a fish fillet.')),
    N('unvertraeglichkeit', 'die', 'Beilage', 'die Beilagen', 'гарнир', 'side dish',
      ex('Als [[Beilage]] können Sie zwischen Rosmarinkartoffeln und Salat wählen.', 'В качестве гарнира можно выбрать картофель с розмарином или салат.', 'As a side dish you can choose between rosemary potatoes and salad.')),
    N('trinkgeld-svc', 'die', 'Allergenkarte', 'die Allergenkarten', 'карта / перечень аллергенов', 'allergen menu',
      ex('Auf Wunsch bringt Ihnen das Serviceteam sofort die ausführliche [[Allergenkarte]].', 'По запросу официант сразу принесёт подробную карту аллергенов.', 'On request, the waiting staff will immediately bring the detailed allergen menu.')),
    N('tischreservierung', 'die', 'Vorbestellung', 'die Vorbestellungen', 'предварительный заказ', 'advance order',
      ex('Festtagsbraten für zwölf Personen bereitet die Küche nur auf [[Vorbestellung]] zu.', 'Праздничное жаркое на двенадцать человек кухня готовит только по предзаказу.', 'The kitchen prepares festive roasts for twelve people by advance order only.')),
    N('kuechenbrigade', 'die', 'Küchenbrigade', 'die Küchenbrigaden', 'кухонная бригада, поварской состав', 'kitchen brigade',
      ex('Die [[Küchenbrigade]] bereitet vor Eröffnung alle Soßen frisch vor.', 'Кухонная бригада заранее готовит все соусы перед открытием.', 'The kitchen brigade preps all sauces fresh before opening.'), 'C1'),
    V('abkassieren', 'abkassieren', ['kassiert ab', 'kassierte ab', 'hat abkassiert'], 'принять оплату / рассчитать (столик)', 'to take payment, settle the bill',
      ex('Sobald der Tisch bereit ist zum Zahlen, geht der Kellner [[abkassieren]].', 'Как только гости готовы платить, официант подходит рассчитать столик.', 'As soon as the table is ready to pay, the waiter goes to settle the bill.'))
  ]);
})();
