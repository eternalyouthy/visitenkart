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
