/* German Professional · 5 new cross-discipline & modern tech topics (16 per topic × 5 topics = 80 cards; B1, B2 and C1).
 * Topics: design, ai_data, product, clients, presentations.
 * Checked against existing inventory for zero duplicates. Original examples and translations (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(id, o, note, lvl) {
    o.id = 'pro-new-' + id;
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

  /* ── 05 · Design, UX & Visuals ───────────────────────────────────────────── */
  reg('design', [
    N('typografie', 'die', 'Typografie', '', 'типографика, искусство оформления шрифта', 'typography',
      ex('Eine klare [[Typografie]] macht lange Artikel auch auf dem Handy gut lesbar.', 'Чёткая типографика делает длинные статьи удобными для чтения даже на телефоне.', 'Clear typography keeps long articles readable even on a phone.'),
      ['Охватывает подбор гарнитур, интерлиньяж и визуальную иерархию текста.', 'Covers typeface pairing, line height, and typographic hierarchy.'], 'b2'),
    N('farbpalette', 'die', 'Farbpalette', 'die Farbpaletten', 'цветовая палитра', 'colour palette',
      ex('Für das Rebranding haben wir eine ruhige [[Farbpalette]] mit zwei Akzenttönen gewählt.', 'Для ребрендинга мы выбрали спокойную цветовую палитру с двумя акцентными оттенками.', 'For the rebrand we chose a calm colour palette with two accent tones.'), null, 'b1'),
    N('kontrast', 'der', 'Kontrast', 'die Kontraste', 'контраст, контрастность', 'contrast',
      ex('Zwischen Text und Hintergrund braucht jeder Button ausreichend [[Kontrast]].', 'Между текстом и фоном у каждой кнопки должен быть достаточный контраст.', 'Every button needs sufficient contrast between text and background.'), null, 'b1'),
    N('layout', 'das', 'Layout', 'die Layouts', 'макет, компоновка, вёрстка', 'layout',
      ex('Das neue [[Layout]] passt sich automatisch an breite und schmale Bildschirme an.', 'Новый макет автоматически подстраивается под широкие и узкие экраны.', 'The new layout adapts automatically to wide and narrow screens.'), null, 'b1'),
    N('weissraum', 'der', 'Weißraum', '', 'негативное пространство, «воздух» в макете', 'whitespace',
      ex('Mehr [[Weißraum]] rund um die Überschrift gibt der Seite sofort mehr Ruhe.', 'Больше «воздуха» вокруг заголовка сразу делает страницу спокойнее.', 'More whitespace around the heading immediately gives the page breathing room.'),
      ['Синоним в профессиональной среде — der negative Raum.', 'Literally “white space”; ensures visual clarity even on dark themes.'], 'b2'),
    N('schriftart', 'die', 'Schriftart', 'die Schriftarten', 'шрифт, гарнитура шрифта', 'typeface, font',
      ex('Welche [[Schriftart]] nutzt ihr in der App für Zahlen und Tabellen?', 'Какой шрифт вы используете в приложении для чисел и таблиц?', 'Which font do you use in the app for numbers and tables?'), null, 'b1'),
    N('raster', 'das', 'Raster', 'die Raster', 'модульная сетка (grid)', 'grid',
      ex('Alle Karten richten sich sauber an unserem zwölfspaltigen [[Raster]] aus.', 'Все карточки аккуратно выровнены по нашей двенадцатиколоночной сетке.', 'All cards align cleanly to our twelve-column grid.'),
      ['В IT и графическом дизайне также часто говорят das Grid.', 'In digital design, the English loan “das Grid” is also common.'], 'b2'),
    N('vektorgrafik', 'die', 'Vektorgrafik', 'die Vektorgrafiken', 'векторная графика', 'vector graphic',
      ex('Exportiere das Logo als [[Vektorgrafik]], damit es auf Plakaten scharf bleibt.', 'Экспортируй логотип как векторную графику, чтобы на плакатах он оставался чётким.', 'Export the logo as a vector graphic so it stays crisp on posters.'), null, 'b2'),
    N('prototyp', 'der', 'Prototyp', 'die Prototypen', 'прототип, интерактивный макет', 'prototype',
      ex('Vor der Entwicklung testen wir einen klickbaren [[Prototyp]] mit fünf Nutzerinnen.', 'Перед разработкой мы тестируем кликабельный прототип с пятью пользователями.', 'Before development we test a clickable prototype with five users.'),
      ['Слабое склонение существительных: des Prototypen / dem Prototypen (также допустимо ohne -en в разговоре).', 'Weak masculine noun: genitive/dative/accusative “des/dem/den Prototypen”.'], 'b2'),
    N('barrierefreiheit', 'die', 'Barrierefreiheit', '', 'доступность интерфейса (accessibility / a11y)', 'accessibility',
      ex('Digitale [[Barrierefreiheit]] hilft nicht nur Menschen mit Sehbehinderung, sondern allen.', 'Цифровая доступность помогает не только людям с нарушением зрения, но и всем.', 'Digital accessibility helps not only visually impaired users, but everyone.'),
      ['Включает контрастность, клавиатурную навигацию и тексты для скринридеров.', 'Covers colour contrast, keyboard navigation, and screen-reader labels.'], 'c1'),
    N('lesbarkeit', 'die', 'Lesbarkeit', '', 'читаемость, удобочитаемость', 'readability, legibility',
      ex('Zu kleine Zeilenabstände verschlechtern die [[Lesbarkeit]] deutlich.', 'Слишком маленькие межстрочные интервалы заметно ухудшают читаемость.', 'Line spacing that is too tight clearly reduces readability.'), null, 'b2'),
    N('wiedererkennungswert', 'der', 'Wiedererkennungswert', 'die Wiedererkennungswerte', 'узнаваемость (бренда, стиля)', 'brand recognition value',
      ex('Das reduzierte Symbol hat einen hohen [[Wiedererkennungswert]].', 'Минималистичный символ обладает высокой узнаваемостью.', 'The minimalist symbol has high recognition value.'), null, 'c1'),
    V('entwerfen', 'entwerfen', ['entwirft', 'entwarf', 'hat entworfen'], '+ Akk.', 'проектировать, создавать дизайн / эскиз', 'to design, draft',
      ex('Unser Studio soll die komplette visuelle Identität für das Festival [[entwerfen]].', 'Наша студия должна разработать всю визуальную айдентику для фестиваля.', 'Our studio is tasked with designing the entire visual identity for the festival.'), null, 'b1'),
    V('skizzieren', 'skizzieren', ['skizziert', 'skizzierte', 'hat skizziert'], '+ Akk.', 'делать набросок, набрасывать (идею, экран)', 'to sketch, outline',
      ex('Lass uns drei grobe Ideen auf Papier [[skizzieren]], bevor wir Figma öffnen.', 'Давай набросаем три черновые идеи на бумаге, прежде чем открывать Figma.', 'Let’s sketch three rough ideas on paper before opening Figma.'), null, 'b2'),
    A('uebersichtlich', 'adj', 'übersichtlich', 'наглядный, понятный, хорошо структурированный', 'clear, well-structured, easy to scan',
      ex('Das Dashboard wirkt jetzt viel [[übersichtlich]]er als in der alten Version.', 'Дашборд теперь выглядит намного нагляднее, чем в старой версии.', 'The dashboard looks much clearer and easier to scan than in the old version.'), null, 'b1'),
    A('stimmig', 'adj', 'stimmig', 'целостный, гармоничный, логически согласованный', 'cohesive, consistent, harmonious',
      ex('Farben, Icons und Tonfall ergeben zusammen ein [[stimmig]]es Gesamtbild.', 'Цвета, иконки и тон коммуникации вместе создают гармоничную общую картину.', 'Colours, icons, and tone of voice form a cohesive overall impression.'),
      ['Означает, что все детали подходят друг другу и не спорят между собой.', 'Describes a design or concept where every element fits seamlessly together.'], 'b2')
  ]);

  /* ── 06 · AI, Data & Analytics ───────────────────────────────────────────── */
  reg('ai_data', [
    N('sprachmodell', 'das', 'Sprachmodell', 'die Sprachmodelle', 'языковая модель (LLM)', 'language model',
      ex('Ein großes [[Sprachmodell]] kann lange Verträge in Sekunden zusammenfassen.', 'Большая языковая модель может суммировать длинные договоры за секунды.', 'A large language model can summarise long contracts in seconds.'), null, 'b2'),
    N('datensatz', 'der', 'Datensatz', 'die Datensätze', 'набор данных, датасет; запись в базе', 'dataset, data record',
      ex('Vor dem Training müssen wir den [[Datensatz]] von Duplikaten bereinigen.', 'Перед обучением нам нужно очистить датасет от дубликатов.', 'Before training we have to clean the dataset of duplicates.'),
      ['Может означать как одну строку таблицы (record), так и целый массив (dataset).', 'Can refer to either a single database record or a full dataset depending on context.'], 'b2'),
    N('datenauswertung', 'die', 'Datenauswertung', 'die Datenauswertungen', 'анализ / обработка данных', 'data evaluation, data analysis',
      ex('Die [[Datenauswertung]] zeigt, dass die meisten Abbrüche auf Schritt drei passieren.', 'Анализ данных показывает, что большинство отказов происходит на третьем шаге.', 'The data analysis shows that most drop-offs happen at step three.'), null, 'b2'),
    N('kennzahl', 'die', 'Kennzahl', 'die Kennzahlen', 'ключевой показатель, метрика (KPI)', 'metric, key figure (KPI)',
      ex('Welche [[Kennzahl]] beweist, dass die neue Suche wirklich besser funktioniert?', 'Какая метрика доказывает, что новый поиск действительно работает лучше?', 'Which metric proves that the new search actually works better?'), null, 'b2'),
    N('mustererkennung', 'die', 'Mustererkennung', '', 'распознавание образов / паттернов', 'pattern recognition',
      ex('Bei der Betrugsprüfung verlässt sich das System auf automatische [[Mustererkennung]].', 'При проверке мошенничества система опирается на автоматическое распознавание паттернов.', 'For fraud detection the system relies on automated pattern recognition.'), null, 'c1'),
    N('algorithmus', 'der', 'Algorithmus', 'die Algorithmen', 'алгоритм', 'algorithm',
      ex('Der [[Algorithmus]] sortiert Suchergebnisse nach Relevanz und Aktualität.', 'Алгоритм сортирует результаты поиска по релевантности и свежести.', 'The algorithm ranks search results by relevance and freshness.'),
      ['Обратите внимание на множественное число: die Algorithmen.', 'Note the irregular plural: die Algorithmen.'], 'b2'),
    N('trainingsmaterial', 'das', 'Trainingsmaterial', 'die Trainingsmaterialien', 'обучающие данные / материалы для модели', 'training data, training material',
      ex('Vertrauliche Kundendaten gehören niemals ins [[Trainingsmaterial]].', 'Конфиденциальные данные клиентов никогда не должны попадать в обучающие данные.', 'Confidential customer data must never go into the training data.'), null, 'b2'),
    N('voreingenommenheit', 'die', 'Voreingenommenheit', '', 'предвзятость, смещение данных (bias)', 'bias, prejudice',
      ex('Einseitige Daten führen leicht zu [[Voreingenommenheit]] in den Empfehlungen.', 'Однобокие данные легко приводят к предвзятости в рекомендациях.', 'One-sided data easily leads to bias in the recommendations.'),
      ['Часто переводится как AI bias в контексте машинного обучения.', 'Used for algorithmic or cognitive bias in AI and research.'], 'c1'),
    N('halluzination', 'die', 'Halluzination', 'die Halluzinationen', 'галлюцинация (выдуманный факт модели ИИ)', 'hallucination (AI)',
      ex('Quellenangaben helfen dem Team, eine [[Halluzination]] des Modells sofort zu erkennen.', 'Ссылки на источники помогают команде сразу распознать галлюцинацию модели.', 'Source citations help the team spot an AI hallucination immediately.'), null, 'c1'),
    N('eingabeaufforderung', 'die', 'Eingabeaufforderung', 'die Eingabeaufforderungen', 'промпт, приглашение ко вводу', 'prompt',
      ex('Mit einer präzisen [[Eingabeaufforderung]] liefert das Tool deutlich bessere Entwürfe.', 'С точным промптом инструмент выдаёт заметно лучшие черновики.', 'With a precise prompt the tool delivers significantly better drafts.'),
      ['Немецкий эквивалент слова Prompt.', 'Formal German term for a prompt (often just “der Prompt” in everyday tech talk).'], 'b2'),
    N('vorhersage', 'die', 'Vorhersage', 'die Vorhersagen', 'прогноз, предсказание (модели)', 'prediction, forecast',
      ex('Die [[Vorhersage]] der Nachfrage spart im Lager viel Geld.', 'Прогнозирование спроса экономит на складе много денег.', 'Demand forecasting saves a lot of money in the warehouse.'), null, 'b2'),
    N('schwellenwert', 'der', 'Schwellenwert', 'die Schwellenwerte', 'пороговое значение (threshold)', 'threshold value',
      ex('Erst ab einem [[Schwellenwert]] von 90 Prozent übernimmt die Automatik den Fall.', 'Только начиная с порога в 90 процентов автоматика берёт кейс на себя.', 'Automation only takes over the case above a threshold of 90 percent.'), null, 'c1'),
    V('trainieren', 'trainieren', ['trainiert', 'trainierte', 'hat trainiert'], '+ Akk. (+ auf)', 'обучать (модель), тренировать', 'to train (a model)',
      ex('Wir [[trainieren]] das Modell auf anonymisierten Support-Tickets aus zwei Jahren.', 'Мы обучаем модель на обезличенных тикетах поддержки за два года.', 'We train the model on anonymised support tickets from two years.'), null, 'b1'),
    V('generieren', 'generieren', ['generiert', 'generierte', 'hat generiert'], '+ Akk.', 'генерировать, порождать', 'to generate',
      ex('Das Werkzeug kann aus Stichpunkten automatisch erste Textvorschläge [[generieren]].', 'Инструмент может автоматически генерировать первые варианты текста из тезисов.', 'The tool can automatically generate initial text drafts from bullet points.'), null, 'b2'),
    A('datengestuetzt', 'adj', 'datengestützt', 'основанный на данных (data-driven)', 'data-driven, data-backed',
      ex('Statt auf Bauchgefühl setzen wir auf [[datengestützt]]e Entscheidungen.', 'Вместо интуиции мы делаем ставку на решения, основанные на данных.', 'Instead of gut feeling we rely on data-driven decisions.'), null, 'c1'),
    A('reproduzierbar', 'adj', 'reproduzierbar', 'воспроизводимый', 'reproducible',
      ex('Jedes Experiment braucht [[reproduzierbar]]e Ergebnisse und klare Parameter.', 'Каждому эксперименту нужны воспроизводимые результаты и чёткие параметры.', 'Every experiment needs reproducible results and clear parameters.'), null, 'c1')
  ]);

  /* ── 07 · Product & Agile ────────────────────────────────────────────────── */
  reg('product', [
    N('produktvision', 'die', 'Produktvision', 'die Produktvisionen', 'продуктовое видение (product vision)', 'product vision',
      ex('Eine klare [[Produktvision]] hilft dem Team, schlechte Ideen höflich abzulehnen.', 'Ясное продуктовое видение помогает команде вежливо отклонять неподходящие идеи.', 'A clear product vision helps the team politely decline off-track ideas.'), null, 'b2'),
    N('zielgruppe', 'die', 'Zielgruppe', 'die Zielgruppen', 'целевая аудитория', 'target group, target audience',
      ex('Für welche [[Zielgruppe]] bauen wir diese Funktion eigentlich zuerst?', 'Для какой целевой аудитории мы вообще строим эту функцию в первую очередь?', 'Which target audience are we actually building this feature for first?'), null, 'b1'),
    N('mehrwert', 'der', 'Mehrwert', 'die Mehrwerte', 'добавленная ценность, реальная польза', 'added value',
      ex('Ein neues Feature ohne erkennbaren [[Mehrwert]] landet nicht auf dem Fahrplan.', 'Новая фича без ощутимой пользы не попадёт в дорожную карту.', 'A new feature without discernible added value won’t make the roadmap.'), null, 'b2'),
    N('nutzerbeduerfnis', 'das', 'Nutzerbedürfnis', 'die Nutzerbedürfnisse', 'потребность пользователя', 'user need',
      ex('Jede Entscheidung beginnt bei einem konkreten [[Nutzerbedürfnis]].', 'Любое решение начинается с конкретной потребности пользователя.', 'Every decision starts with a concrete user need.'), null, 'b2'),
    N('engpass', 'der', 'Engpass', 'die Engpässe', 'узкое место, «бутылочное горлышко» (bottleneck)', 'bottleneck, shortage',
      ex('Aktuell liegt unser größter [[Engpass]] bei den manuellen Freigaben.', 'Сейчас наше главное узкое место — ручные согласования.', 'Right now our biggest bottleneck is manual approvals.'),
      ['Также означает дефицит ресурсов или кадров (Fachkräfteengpass).', 'Also used for supply or talent shortages.'], 'b2'),
    N('priorisierung', 'die', 'Priorisierung', 'die Priorisierungen', 'приоритизация, расстановка приоритетов', 'prioritisation',
      ex('Ohne strenge [[Priorisierung]] verzettelt sich das Team in zehn Baustellen.', 'Без жёсткой приоритизации команда распыляется на десять задач сразу.', 'Without strict prioritisation the team gets bogged down in ten areas at once.'), null, 'b2'),
    N('funktionsumfang', 'der', 'Funktionsumfang', 'die Funktionsumfänge', 'функциональность, объём функций (scope)', 'feature scope, feature set',
      ex('Für Version eins reduzieren wir den [[Funktionsumfang]] auf das Wesentliche.', 'Для первой версии мы сократим объём функций до самого главного.', 'For version one we’ll cut the feature scope down to the essentials.'), null, 'c1'),
    N('markteinfuehrung', 'die', 'Markteinführung', 'die Markteinführungen', 'вывод на рынок, запуск продукта (launch)', 'market launch, go-live',
      ex('Kurz vor der [[Markteinführung]] testen wir noch die Zahlungsabwicklung.', 'Незадолго до выхода на рынок мы ещё протестируем обработку платежей.', 'Shortly before the market launch we’ll test payment processing once more.'), null, 'b2'),
    N('abwanderungsrate', 'die', 'Abwanderungsrate', 'die Abwanderungsraten', 'отток пользователей / клиентов (churn rate)', 'churn rate',
      ex('Ein besseres Onboarding hat unsere [[Abwanderungsrate]] im ersten Monat halbiert.', 'Более удачный онбординг вдвое снизил наш отток в первый месяц.', 'Better onboarding halved our churn rate in the first month.'), null, 'c1'),
    N('wettbewerbsvorteil', 'der', 'Wettbewerbsvorteil', 'die Wettbewerbsvorteile', 'конкурентное преимущество', 'competitive advantage',
      ex('Die Offline-Synchronisierung ist unser stärkster [[Wettbewerbsvorteil]].', 'Офлайн-синхронизация — наше сильнейшее конкурентное преимущество.', 'Offline synchronisation is our strongest competitive advantage.'), null, 'b2'),
    N('iterationsschleife', 'die', 'Iterationsschleife', 'die Iterationsschleifen', 'итерационный цикл, цикл доработок', 'iteration loop',
      ex('Kurze [[Iterationsschleife]]n verhindern, dass wir monatelang am Markt vorbei entwickeln.', 'Короткие циклы итераций не дают нам месяцами разрабатывать не то, что нужно рынку.', 'Short iteration loops stop us from spending months building the wrong thing.'), null, 'c1'),
    V('ueberarbeiten', 'überarbeiten', ['überarbeitet', 'überarbeitete', 'hat überarbeitet'], '+ Akk.', 'перерабатывать, дорабатывать (неотделяемая!)', 'to rework, revise',
      ex('Nach den Interviews mussten wir den Anmeldeprozess komplett [[überarbeiten]].', 'После интервью нам пришлось полностью переработать процесс регистрации.', 'After the interviews we had to completely rework the sign-up flow.'),
      ['В значении «переделать заново» приставка über- безударная и неотделяемая: hat überarbeitet.', 'Inseparable prefix in this sense (stress on “ar”): past participle “überarbeitet”.'], 'b1'),
    V('verwerfen', 'verwerfen', ['verwirft', 'verwarf', 'hat verworfen'], '+ Akk.', 'отвергать, отказываться от (идеи, варианта)', 'to discard, reject (an idea)',
      ex('Manchmal muss man einen schönen Entwurf [[verwerfen]], weil er nicht konvertiert.', 'Иногда красивый макет приходится отбросить, потому что он не даёт конверсии.', 'Sometimes you have to discard a nice design because it doesn’t convert.'), null, 'c1'),
    V('validieren', 'validieren', ['validiert', 'validierte', 'hat validiert'], '+ Akk.', 'валидировать, проверять гипотезу на практике', 'to validate',
      ex('Wir wollen die Zahlungsbereitschaft zuerst mit einer Warteliste [[validieren]].', 'Мы хотим сначала проверить готовность платить с помощью листа ожидания.', 'We want to validate willingness to pay with a waitlist first.'), null, 'b2'),
    A('schlank', 'adj', 'schlank', 'бережливый, лёгкий, без лишнего (lean)', 'lean, streamlined',
      ex('Ein [[schlank]]er Prozess spart uns jede Woche zwei überflüssige Meetings.', 'Лаконичный процесс экономит нам каждую неделю две лишние встречи.', 'A lean process saves us two unnecessary meetings every week.'),
      ['Аналог английского “lean” (Lean Startup, lean processes).', 'Used for “lean” workflows and organisations, alongside physical “slim”.'], 'b2'),
    A('marktreif', 'adj', 'marktreif', 'готовый к выходу на рынок', 'market-ready',
      ex('Erst wenn alle Basisfehler behoben sind, ist das Produkt wirklich [[marktreif]].', 'Только когда исправлены все базовые ошибки, продукт действительно готов к рынку.', 'Only once all basic bugs are fixed is the product truly market-ready.'), null, 'c1')
  ]);

  /* ── 08 · Clients & Freelance ────────────────────────────────────────────── */
  reg('clients', [
    N('auftraggeber', 'der', 'Auftraggeber', 'die Auftraggeber', 'заказчик, клиент', 'client, contracting party',
      ex('Unser [[Auftraggeber]] wünscht sich wöchentlich ein kurzes Status-Update.', 'Наш заказчик хочет получать короткий статус-апдейт каждую неделю.', 'Our client wants a brief status update every week.'), null, 'b1'),
    N('ausschreibung', 'die', 'Ausschreibung', 'die Ausschreibungen', 'тендер, конкурс; публикация вакансии / заказа', 'tender, call for bids',
      ex('Die Agentur hat sich auf eine öffentliche [[Ausschreibung]] für die neue Website beworben.', 'Агентство подало заявку на открытый тендер на разработку нового сайта.', 'The agency applied to a public tender for the new website.'), null, 'b2'),
    N('kostenvoranschlag', 'der', 'Kostenvoranschlag', 'die Kostenvoranschläge', 'предварительная смета, оценка стоимости', 'cost estimate, quote',
      ex('Vor Projektbeginn schicke ich immer einen schriftlichen [[Kostenvoranschlag]].', 'Перед началом проекта я всегда отправляю письменную смету.', 'Before a project starts I always send a written cost estimate.'),
      ['Сокращённо часто пишут KVA.', 'Often abbreviated to KVA in business correspondence.'], 'b2'),
    N('leistungspaket', 'das', 'Leistungspaket', 'die Leistungspakete', 'пакет услуг, объём работ по тарифу', 'service package, deliverables bundle',
      ex('In diesem [[Leistungspaket]] sind Konzept, Design und drei Revisionen enthalten.', 'В этот пакет услуг входят концепция, дизайн и три раунда правок.', 'Concept, design, and three revisions are included in this service package.'), null, 'b2'),
    N('korrekturschleife', 'die', 'Korrekturschleife', 'die Korrekturschleifen', 'круг / раунд правок', 'revision round',
      ex('Unser Vertrag deckt zwei [[Korrekturschleife]]n ab; jede weitere rechnen wir extra ab.', 'Наш договор покрывает два раунда правок; каждый следующий мы считаем отдельно.', 'Our contract covers two revision rounds; any further ones are billed extra.'),
      ['Незаменимое слово для дизайнеров, копирайтеров и разработчиков на фрилансе.', 'Essential term for designers and agencies when limiting feedback cycles.'], 'b2'),
    N('auftragsbestaetigung', 'die', 'Auftragsbestätigung', 'die Auftragsbestätigungen', 'подтверждение заказа', 'order confirmation',
      ex('Erst nach der [[Auftragsbestätigung]] reservieren wir die Zeit im Kalender.', 'Только после подтверждения заказа мы бронируем время в календаре.', 'We only block time in the calendar once the order confirmation arrives.'), null, 'b2'),
    N('vorauszahlung', 'die', 'Vorauszahlung', 'die Vorauszahlungen', 'предоплата, аванс', 'advance payment, upfront deposit',
      ex('Bei Neukunden ist eine [[Vorauszahlung]] von dreißig Prozent üblich.', 'Для новых клиентов обычной практикой является предоплата в тридцать процентов.', 'With new clients, an advance payment of thirty percent is standard.'), null, 'b1'),
    N('zahlungsfrist', 'die', 'Zahlungsfrist', 'die Zahlungsfristen', 'срок оплаты (счёта)', 'payment term, payment deadline',
      ex('Bitte beachten Sie die [[Zahlungsfrist]] von vierzehn Tagen ohne Abzug.', 'Пожалуйста, обратите внимание на срок оплаты — четырнадцать дней без скидок.', 'Please note the fourteen-day payment term without deductions.'), null, 'b2'),
    N('stundensatz', 'der', 'Stundensatz', 'die Stundensätze', 'почасовая ставка', 'hourly rate',
      ex('Mit wachsender Erfahrung solltest du deinen [[Stundensatz]] regelmäßig prüfen.', 'С ростом опыта стоит регулярно пересматривать свою почасовую ставку.', 'With growing experience you should review your hourly rate regularly.'),
      ['Для крупных проектов в Германии часто считают по Tagessatz (дневной ставке).', 'For longer engagements, freelancers often quote a Tagessatz (day rate) instead.'], 'b1'),
    N('mehraufwand', 'der', 'Mehraufwand', 'die Mehraufwände', 'дополнительные трудозатраты / перерасход времени', 'additional effort, extra workload',
      ex('Späte Änderungswünsche verursachen erheblichen [[Mehraufwand]] im Team.', 'Поздние пожелания об изменениях вызывают значительные допзатраты в команде.', 'Late change requests cause considerable extra effort for the team.'), null, 'c1'),
    N('erwartungshaltung', 'die', 'Erwartungshaltung', 'die Erwartungshaltungen', 'ожидания (клиента, руководства)', 'expectations, mindset',
      ex('Ein gutes Kick-off klärt die gegenseitige [[Erwartungshaltung]] von Anfang an.', 'Хороший кик-офф с самого начала проясняет взаимные ожидания.', 'A good kick-off clarifies mutual expectations right from the start.'), null, 'c1'),
    N('freiberuflichkeit', 'die', 'Freiberuflichkeit', '', 'фриланс, работа свободным специалистом', 'freelancing, self-employment (liberal professions)',
      ex('Die [[Freiberuflichkeit]] bietet Freiheit, verlangt aber auch Disziplin bei Steuern.', 'Фриланс даёт свободу, но требует также дисциплины с налогами.', 'Freelancing offers freedom, yet demands discipline when it comes to taxes.'),
      ['В Германии Freiberufler (дизайнеры, IT-консультанты, переводчики) освобождены от промыслового налога.', 'In Germany, qualifying “Freiberufler” are exempt from trade tax (Gewerbesteuer).'], 'b2'),
    V('abrechnen', 'abrechnen', ['rechnet ab', 'rechnete ab', 'hat abgerechnet'], '+ Akk. (+ nach)', 'выставлять счёт, рассчитываться, учитывать к оплате', 'to bill, invoice, settle',
      ex('Wir dürfen geleistete Stunden transparent am Monatsende [[abrechnen]].', 'Мы можем прозрачно выставлять счёт за отработанные часы в конце месяца.', 'We can transparently bill worked hours at the end of the month.'), null, 'b1'),
    V('anpassen', 'anpassen', ['passt an', 'passte an', 'hat angepasst'], '+ Akk. (+ an + Akk.)', 'корректировать, адаптировать, подгонять', 'to adjust, adapt, tailor',
      ex('Falls sich der Zeitplan ändert, müssen wir auch den Preis [[anpassen]].', 'Если график изменится, нам придётся скорректировать и цену.', 'If the schedule changes, we’ll have to adjust the price as well.'), null, 'b1'),
    A('verbindlich', 'adj', 'verbindlich', 'обязательный, имеющий юридическую силу; твёрдый', 'binding, firm',
      ex('Nach der Freigabe gilt das Angebot als [[verbindlich]].', 'После утверждения предложение считается юридически обязывающим.', 'Once approved, the quote is considered binding.'),
      ['Антоним: unverbindlich (ориентировочный, без обязательств).', 'Opposite: unverbindlich (non-binding / indicative).'], 'b2'),
    A('termingerecht', 'adj', 'termingerecht', 'вовремя, точно в срок', 'on schedule, on time',
      ex('Dank klarer Meilensteine liefern wir die finale Datei [[termingerecht]] ab.', 'Благодаря чётким вехам мы сдаём финальный файл точно в срок.', 'Thanks to clear milestones we deliver the final file on schedule.'), null, 'b2')
  ]);

  /* ── 09 · Presentations & Pitching ───────────────────────────────────────── */
  reg('presentations', [
    N('folie', 'die', 'Folie', 'die Folien', 'слайд (презентации)', 'slide (presentation)',
      ex('Jede [[Folie]] sollte genau eine Aussage transportieren, keinen ganzen Roman.', 'Каждый слайд должен нести ровно одну мысль, а не целый роман.', 'Each slide should convey one single message, not an entire novel.'),
      ['В переговорке часто используют engl. Slide, но die Folie — стандарт в бизнес-немецком.', 'Standard German term alongside the loanword “der Slide”.'], 'b1'),
    N('leitfaden', 'der', 'Leitfaden', 'die Leitfäden', 'руководство, шпаргалка, ориентир', 'guide, playbook, guideline',
      ex('Ein kurzer [[Leitfaden]] hilft moderierenden Personen bei schwierigen Runden.', 'Краткое руководство помогает модераторам на сложных встречах.', 'A short guide helps moderators navigate tough sessions.'), null, 'b2'),
    N('einstieg', 'der', 'Einstieg', 'die Einstiege', 'вступление, заход в тему (hook)', 'opening, entry point',
      ex('Eine konkrete Kundenfrage ist ein stärkerer [[Einstieg]] als „Hallo, wir fangen an“.', 'Конкретный вопрос клиента — более сильное начало, чем «Привет, начинаем».', 'A concrete customer question is a stronger opening than “Hi, let’s start”.'), null, 'b1'),
    N('kernaussage', 'die', 'Kernaussage', 'die Kernaussagen', 'ключевой тезис, главная мысль', 'key message, core takeaway',
      ex('Was bleibt als [[Kernaussage]] übrig, wenn jemand nur drei Minuten zuhört?', 'Что останется в качестве главной мысли, если человек слушает всего три минуты?', 'What remains as the key message if someone only listens for three minutes?'), null, 'b2'),
    N('schaubild', 'das', 'Schaubild', 'die Schaubilder', 'диаграмма, график, наглядная схема', 'chart, diagram, visual',
      ex('Dieses [[Schaubild]] erklärt den Kostenvorteil schneller als zehn Absätze.', 'Эта диаграмма объясняет экономию быстрее, чем десять абзацев текста.', 'This chart explains the cost advantage faster than ten paragraphs.'), null, 'b2'),
    N('gegenfrage', 'die', 'Gegenfrage', 'die Gegenfragen', 'встречный вопрос', 'counter-question',
      ex('Mit einer ruhigen [[Gegenfrage]] gewinnst du Zeit zum Nachdenken.', 'Спокойным встречным вопросом ты выигрываешь время на раздумье.', 'With a calm counter-question you buy time to think.'), null, 'b2'),
    N('einwand', 'der', 'Einwand', 'die Einwände', 'возражение, контраргумент', 'objection',
      ex('Bereite auf den häufigsten [[Einwand]] beim Preis gleich eine Zahl vor.', 'На самое частое возражение по цене сразу подготовь цифру.', 'Prepare a concrete figure right away for the most common objection on price.'), null, 'b2'),
    N('lampenfieber', 'das', 'Lampenfieber', '', 'волнение перед выступлением, страх сцены', 'stage fright',
      ex('Gegen [[Lampenfieber]] hilft einmal lautes Durchsprechen am Vorabend.', 'От волнения перед выступлением помогает один раз проговорить текст вслух накануне.', 'Speaking the pitch aloud once the night before really helps with stage fright.'), null, 'b2'),
    N('ueberzeugungskraft', 'die', 'Überzeugungskraft', '', 'убедительность, сила аргументации', 'persuasiveness, power of persuasion',
      ex('Echte Beispiele geben einem Pitch deutlich mehr [[Überzeugungskraft]].', 'Живые примеры придают питчу заметно больше убедительности.', 'Real examples give a pitch much greater persuasiveness.'), null, 'c1'),
    N('zeitvorgabe', 'die', 'Zeitvorgabe', 'die Zeitvorgaben', 'временной регламент, отведённое время', 'time limit, time allocation',
      ex('Bei einer [[Zeitvorgabe]] von zehn Minuten reichen zwölf Folien völlig aus.', 'При регламенте в десять минут двенадцати слайдов вполне достаточно.', 'With a ten-minute time limit, twelve slides are more than enough.'), null, 'b2'),
    N('fazit', 'das', 'Fazit', 'die Fazits', 'итог, вывод, резюме', 'conclusion, bottom line, takeaway',
      ex('Mein [[Fazit]] lautet: Wir starten klein und messen ab Tag eins.', 'Мой итог таков: мы стартуем с малого и измеряем с первого дня.', 'My takeaway is: we start small and measure from day one.'), null, 'b1'),
    V('veranschaulichen', 'veranschaulichen', ['veranschaulicht', 'veranschaulichte', 'hat veranschaulicht'], '+ Akk.', 'наглядно иллюстрировать, показывать на примере', 'to illustrate, demonstrate visually',
      ex('Lass uns den Zeitgewinn direkt mit einem Vorher-nachher-Vergleich [[veranschaulichen]].', 'Давай наглядно покажем экономию времени прямо на сравнении «до и после».', 'Let’s illustrate the time savings directly with a before-and-after comparison.'), null, 'b2'),
    V('zusammenfassen', 'zusammenfassen', ['fasst zusammen', 'fasste zusammen', 'hat zusammengefasst'], '+ Akk.', 'подводить итог, кратко резюмировать', 'to summarise',
      ex('Am Ende kannst du die drei nächsten Schritte knapp [[zusammenfassen]].', 'В конце ты можешь кратко подытожить три следующих шага.', 'At the end you can briefly summarise the next three steps.'), null, 'b1'),
    V('entkraeften', 'entkräften', ['entkräftet', 'entkräftete', 'hat entkräftet'], '+ Akk.', 'развеивать, опровергать (сомнения, аргумент)', 'to refute, dispel (a concern)',
      ex('Zwei Kundenbeispiele konnten alle Bedenken zur Sicherheit [[entkräften]].', 'Два кейса клиентов смогли развеять все сомнения насчёт безопасности.', 'Two client case studies managed to dispel all concerns about security.'), null, 'c1'),
    A('auf_den_punkt', 'phrase', 'auf den Punkt bringen', 'сформулировать чётко, попасть в самую точку', 'to get straight to the point, sum up crisply',
      ex('Kannst du unseren Nutzen für die Geschäftsführung in einem Satz [[auf den Punkt bringen]]?', 'Можешь сформулировать нашу пользу для руководства одним ёмким предложением?', 'Can you sum up our value for leadership in one crisp sentence?'),
      ['Устойчивое выражение с аккузативом: etwas auf den Punkt bringen.', 'Fixed idiom: “to put something into a nutshell”.'], 'b2'),
    A('praegnant', 'adj', 'prägnant', 'лаконичный и выразительный, ёмкий', 'concise, punchy, pithy',
      ex('Eine [[prägnant]]e Überschrift bleibt dem Publikum auch nach der Pause im Kopf.', 'Ёмкий заголовок остаётся в памяти аудитории даже после перерыва.', 'A punchy headline stays in the audience’s mind even after the break.'), null, 'c1')
  ]);
})();
