/* ENGLISH Professional · fourth batch (72 new cards + 3 reused memberships across all 12 Pro topics; B1, B2 and C1).
 * Checked against full English pack inventory for zero duplicates. Original examples and bilingual notes (ru + de). */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };
    return {
      id: 'en:it4:' + id, pos: pos, t: t, level: level,
      ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null
    };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'it', topic); });
    GT.register({ tab: 'it', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  /* ── 01 · Design, UX & Visuals (8 new + 1 reused) ────────────────────────── */
  GT.addMember('en:usability:n:main', 'it', 'design');
  reg('design', [
    W('user-interface', 'noun', 'user interface', 'B2', 'пользовательский интерфейс (UI)', 'Benutzeroberfläche (UI)',
      ex('Simplifying the [[user interface]] cut onboarding questions in half.', 'Упрощение пользовательского интерфейса вдвое сократило число вопросов на онбординге.', 'Die Vereinfachung der Benutzeroberfläche halbierte die Fragen beim Onboarding.'),
      ['Обычно сокращается до UI; в отличие от UX (общего опыта), UI — именно экраны и элементы управления.', 'Meist als UI abgekürzt; bezeichnet die sichtbaren Bedienelemente im Unterschied zu UX.']),
    W('line-height', 'noun', 'line height', 'B2', 'межстрочный интервал (интерлиньяж)', 'Zeilenabstand, Zeilenhöhe',
      ex('Slightly more [[line height]] makes dense help articles much easier to scan.', 'Чуть больший межстрочный интервал делает плотные справочные статьи гораздо легче для беглого чтения.', 'Ein etwas größerer Zeilenabstand macht dichte Hilfeartikel deutlich leichter lesbar.'),
      ['Стандартный термин в веб-дизайне и CSS; в печатной типографике также leading.', 'Standardbegriff im Webdesign und CSS; im Drucksatz auch Durchschuss (leading).']),
    W('visual-hierarchy', 'noun', 'visual hierarchy', 'B2', 'визуальная иерархия', 'visuelle Hierarchie',
      ex('Clear [[visual hierarchy]] guides the reader’s eye straight to the main action.', 'Чёткая визуальная иерархия сразу ведёт взгляд читателя к главному действию.', 'Eine klare visuelle Hierarchie lenkt den Blick sofort auf die wichtigste Aktion.'),
      ['Выстраивается за счёт размера, контраста, толщины шрифта и отступов.', 'Entsteht durch Größe, Kontrast, Schriftstärke und Abstände im Layout.']),
    W('mockup', 'noun', 'mockup', 'B2', 'макет (детализированный визуальный прототип)', 'Mockup, Entwurf',
      ex('We walked the client through the desktop [[mockup]] before handing anything to developers.', 'Мы провели клиента по десктопному макету, прежде чем передавать что-либо разработчикам.', 'Wir gingen mit dem Kunden das Desktop-Mockup durch, bevor etwas an die Entwicklung ging.'),
      ['В отличие от чернового wireframe, mockup уже показывает цвета, шрифты и стиль, но обычно не кликабелен.', 'Im Unterschied zum groben Wireframe zeigt ein Mockup bereits Farben und Schriften, ist aber meist statisch.']),
    W('design-system', 'noun', 'design system', 'B2', 'дизайн-система', 'Designsystem',
      ex('Our shared [[design system]] keeps web and mobile screens consistent across teams.', 'Наша общая дизайн-система сохраняет единство веб- и мобильных экранов во всех командах.', 'Unser gemeinsames Designsystem hält Web- und Mobilansichten teamübergreifend einheitlich.'),
      ['Включает библиотеку компонентов, токены цветов/отступов и гайдлайны.', 'Umfasst Komponentenbibliothek, Design-Tokens und verbindliche Gestaltungsregeln.']),
    W('responsive-design', 'noun', 'responsive design', 'B2', 'адаптивный дизайн', 'responsives Design',
      ex('Good [[responsive design]] ensures tables stay readable on a 375-pixel phone screen.', 'Хороший адаптивный дизайн гарантирует, что таблицы останутся читаемыми на экране телефона 375 пикселей.', 'Gutes responsives Design sorgt dafür, dass Tabellen auch auf einem 375-Pixel-Handy lesbar bleiben.'),
      ['В веб-разработке описывает автоматическую подстройку макета под ширину экрана.', 'Beschreibt Layouts, die sich automatisch an unterschiedliche Bildschirmbreiten anpassen.']),
    W('user-flow', 'noun', 'user flow', 'B2', 'пользовательский сценарий, путь по экранам', 'Nutzerführung, User Flow',
      ex('Removing two extra steps from the signup [[user flow]] boosted completions right away.', 'Удаление двух лишних шагов из сценария регистрации сразу повысило завершаемость.', 'Das Streichen zweier Schritte im Anmelde-User-Flow steigerte die Abschlüsse sofort.'),
      ['Пошаговая схема переходов пользователя внутри интерфейса для решения конкретной задачи.', 'Schritt-für-Schritt-Ablauf, über den Nutzer eine konkrete Aufgabe im Produkt erledigen.']),
    W('cluttered', 'adj', 'cluttered', 'B2', 'перегруженный, загромождённый (об интерфейсе)', 'überladen, unübersichtlich',
      ex('Too many banners and badges make the home screen feel [[cluttered]].', 'Слишком много баннеров и плашек делают главный экран перегруженным.', 'Zu viele Banner und Badges lassen den Startbildschirm überladen wirken.'),
      ['Антоним в дизайн-ревью — clean / uncluttered (чистый, воздушный).', 'Gegenteil im Design-Review: clean oder uncluttered (= aufgeräumt, übersichtlich).'])
  ]);

  /* ── 02 · AI, Data & Analytics (8 new) ───────────────────────────────────── */
  reg('ai_data', [
    W('data-quality', 'noun', 'data quality', 'B2', 'качество данных', 'Datenqualität',
      ex('Poor [[data quality]] will undermine even the most expensive analytics platform.', 'Низкое качество данных сведёт на нет даже самую дорогую аналитическую платформу.', 'Schlechte Datenqualität untergräbt selbst die teuerste Analyseplattform.'),
      ['Неисчисляемое; оценивается по полноте, точности, актуальности и отсутствию дублей.', 'Unzählbar; bewertet Vollständigkeit, Genauigkeit und Konsistenz eines Datenbestands.']),
    W('use-case', 'noun', 'use case', 'B2', 'сценарий применения, кейс', 'Anwendungsfall',
      ex('Before buying any AI tool, write down two concrete [[use cases]] it should solve.', 'Прежде чем покупать любой ИИ-инструмент, запиши два конкретных сценария, которые он должен решать.', 'Bevor du ein KI-Tool kaufst, formuliere zwei konkrete Anwendungsfälle, die es lösen soll.'),
      ['Чрезвычайно частое выражение в ИИ, продукте и IT; прямой эквивалент нем. Anwendungsfall.', 'Sehr häufig in KI, Produkt und IT; entspricht genau dt. Anwendungsfall.']),
    W('error-rate', 'noun', 'error rate', 'B2', 'доля / процент ошибок', 'Fehlerquote',
      ex('After retraining on cleaner labels, the classifier’s [[error rate]] fell below two percent.', 'После переобучения на более чистой разметке доля ошибок классификатора упала ниже двух процентов.', 'Nach dem Nachtraining auf saubereren Labels fiel die Fehlerquote unter zwei Prozent.'),
      ['Устойчивые глаголы: lower / reduce / track the error rate.', 'Typische Verben: lower / reduce / monitor the error rate (= die Fehlerquote senken).']),
    W('data-cleaning', 'noun', 'data cleaning', 'B2', 'очистка данных', 'Datenbereinigung',
      ex('Most analysts spend more time on [[data cleaning]] than on building charts.', 'Большинство аналитиков тратит больше времени на очистку данных, чем на построение графиков.', 'Die meisten Analysten verbringen mehr Zeit mit Datenbereinigung als mit Diagrammen.'),
      ['Также встречается data cleansing; включает удаление дублей, пропусков и битых форматов.', 'Auch data cleansing genannt; umfasst das Entfernen von Duplikaten und fehlerhaften Einträgen.']),
    W('sample-size', 'noun', 'sample size', 'B2', 'размер выборки', 'Stichprobengröße',
      ex('Our [[sample size]] is still too small to declare a winner in this A/B test.', 'Размер нашей выборки пока слишком мал, чтобы объявлять победителя в этом A/B-тесте.', 'Unsere Stichprobengröße ist noch zu klein, um in diesem A/B-Test einen Sieger zu bestimmen.'),
      ['Ключевое понятие в A/B-тестах и исследованиях: small / sufficient sample size.', 'Zentral bei A/B-Tests und Umfragen: sufficient sample size (= ausreichende Stichprobe).']),
    W('overfitting', 'noun', 'overfitting', 'C1', 'переобучение (модели на обучающей выборке)', 'Überanpassung (Overfitting)',
      ex('High training scores and weak test scores are a classic sign of [[overfitting]].', 'Высокие метрики на обучении и слабые на тесте — классический признак переобучения.', 'Hohe Trainingswerte bei schwachen Testwerten sind ein klassisches Zeichen für Overfitting.'),
      ['Модель «зазубрила» шум обучающих данных и плохо обобщает новые; противоположность — underfitting.', 'Das Modell lernt Zufallsmuster auswendig und versagt bei neuen Daten; Gegenteil: underfitting.']),
    W('anonymise', 'verb', 'anonymise', 'B2', 'обезличивать, анонимизировать (данные)', 'anonymisieren',
      ex('We [[anonymise]] customer records before sharing logs with external researchers.', 'Мы обезличиваем записи клиентов, прежде чем передавать логи внешним исследователям.', 'Wir anonymisieren Kundendatensätze, bevor wir Logs an externe Forscher weitergeben.'),
      ['Амер. написание — anonymize; существительное — anonymisation / anonymization.', 'US-Schreibweise: anonymize; Substantiv: anonymisation (= Anonymisierung).']),
    W('classify', 'verb', 'classify', 'B2', 'классифицировать, относить к категории', 'klassifizieren, einordnen',
      ex('The model can automatically [[classify]] support emails by urgency and topic.', 'Модель может автоматически классифицировать письма в поддержку по срочности и теме.', 'Das Modell kann Support-E-Mails automatisch nach Dringlichkeit und Thema klassifizieren.'),
      ['Типичный предлог — classify into categories / classify by topic; сущ. — classification.', 'Typische Präpositionen: classify into / by; das Nomen heißt classification.'])
  ]);

  /* ── 03 · Product & Agile (8 new) ────────────────────────────────────────── */
  reg('product', [
    W('roadmap', 'noun', 'roadmap', 'B2', 'дорожная карта продукта', 'Roadmap, Produktfahrplan',
      ex('Let’s review the quarterly [[roadmap]] and move low-impact ideas to next half.', 'Давай пересмотрим квартальную дорожную карту и перенесём менее важные идеи на следующее полугодие.', 'Lass uns die Quartals-Roadmap durchgehen und Ideen mit wenig Effekt verschieben.'),
      ['Обычно пишется в одно слово (product roadmap); глагол — put something on the roadmap.', 'Meist zusammengeschrieben (product roadmap); Wendung: on the roadmap stehen.']),
    W('backlog', 'noun', 'backlog', 'B2', 'бэклог (список предстоящих задач продукта)', 'Backlog, Arbeitsvorrat',
      ex('Every Friday we groom the [[backlog]] so the top ten tickets are ready for development.', 'Каждую пятницу мы приводим в порядок бэклог, чтобы верхние десять тикетов были готовы к разработке.', 'Jeden Freitag pflegen wir das Backlog, damit die obersten zehn Tickets bereit sind.'),
      ['В Agile — приоритизированный список задач; вне IT также означает накопившуюся очередь неразобранных дел.', 'Im Agile-Kontext die priorisierte Aufgabenliste; allgemein auch ein aufgestauter Rückstand.']),
    W('retrospective', 'noun', 'retrospective', 'B2', 'ретроспектива (разбор итогов спринта)', 'Retrospektive',
      ex('In the sprint [[retrospective]], we agreed to cap work in progress at three tasks.', 'На ретроспективе спринта мы договорились ограничить число параллельных задач тремя.', 'In der Sprint-Retrospektive einigten wir uns darauf, laufende Aufgaben auf drei zu begrenzen.'),
      ['В повседневной речи команд обычно сокращается до retro (run a retro).', 'Im Teamalltag meist kurz retro; feste Verbindung: hold / run a retrospective.']),
    W('user-adoption', 'noun', 'user adoption', 'C1', 'принятие и освоение продукта пользователями', 'Nutzerakzeptanz',
      ex('Launch day is only step one — real success depends on steady [[user adoption]].', 'День запуска — только первый шаг: настоящий успех зависит от устойчивого принятия пользователями.', 'Der Launch-Tag ist erst der Anfang — echter Erfolg hängt von stetiger Nutzerakzeptanz ab.'),
      ['Показывает, действительно ли люди начали регулярно пользоваться новой функцией.', 'Misst, ob Nutzer ein neues Produkt oder Feature dauerhaft in ihren Alltag übernehmen.']),
    W('minimum-viable-product', 'noun', 'minimum viable product', 'B2', 'минимально жизнеспособный продукт (MVP)', 'minimal funktionsfähiges Produkt (MVP)',
      ex('Shipping a [[minimum viable product]] in four weeks taught us more than six months of slides.', 'Запуск MVP за четыре недели научил нас большему, чем шесть месяцев презентаций.', 'Ein Minimum Viable Product in vier Wochen zu liefern lehrte uns mehr als sechs Monate Folien.'),
      ['Почти всегда сокращается до MVP: самая простая рабочая версия для проверки гипотезы на реальных пользователях.', 'Fast immer als MVP abgekürzt: kleinste nutzbare Version, um Annahmen am Markt zu testen.']),
    W('user-story', 'noun', 'user story', 'B2', 'пользовательская история (формат описания задачи)', 'User Story',
      ex('Every [[user story]] starts with who the user is and what outcome they need.', 'Каждая пользовательская история начинается с того, кто пользователь и какой результат ему нужен.', 'Jede User Story beginnt damit, wer die nutzende Person ist und welches Ziel sie verfolgt.'),
      ['Классический шаблон: “As a [role], I want [action] so that [benefit].”', 'Klassisches Format: „As a …, I want …, so that …“; konkretisiert durch acceptance criteria.']),
    W('trade-off', 'noun', 'trade-off', 'B2', 'компромисс (выбор между двумя плюсами/минусами)', 'Kompromiss, Zielkonflikt',
      ex('Choosing speed over customisation was a deliberate [[trade-off]] for our first release.', 'Выбор скорости в ущерб гибкости был осознанным компромиссом для первого релиза.', 'Geschwindigkeit statt Anpassbarkeit war ein bewusster Kompromiss für das erste Release.'),
      ['Сочетание: make / weigh a trade-off between A and B; пишется с дефисом или слитно (tradeoff).', 'Wendung: weigh a trade-off between A and B (= Vorteile und Nachteile gegeneinander abwägen).']),
    W('ship', 'verb', 'ship', 'B2', 'выпустить в продакшен, выкатить релиз', 'ausliefern, live stellen',
      ex('Let’s fix these two blockers and [[ship]] the update on Tuesday morning.', 'Давай закроем эти два блокера и выпустим обновление во вторник утром.', 'Lass uns diese beiden Blocker lösen und das Update am Dienstagmorgen ausliefern.'),
      ['В IT-речи шире, чем «отгрузить посылку»: доставить готовую фичу пользователям (ship fast, ship to production).', 'In Produkt- und Dev-Teams Standard für das Ausliefern von Features an echte Nutzer.'])
  ]);

  /* ── 04 · Clients & Freelance (8 new + 2 reused) ─────────────────────────── */
  GT.addMember('en:deliverable:n:main', 'it', 'clients');
  GT.addMember('en:invoice:n:main', 'it', 'clients');
  reg('clients', [
    W('flat-fee', 'noun', 'flat fee', 'B2', 'фиксированная оплата (за проект целиком)', 'Pauschale, Pauschalpreis',
      ex('We agreed on a [[flat fee]] for the audit instead of tracking hours.', 'Мы договорились о фиксированной оплате за аудит вместо почасового учёта.', 'Wir vereinbarten eine Pauschale für das Audit, statt Stunden abzurechnen.'),
      ['Синоним — fixed fee / lump sum; удобно при чётко ограниченном объёме работ (scope).', 'Synonym: fixed fee; entspricht dt. Pauschale bei klar abgegrenztem Leistungsumfang.']),
    W('non-disclosure-agreement', 'noun', 'non-disclosure agreement', 'C1', 'соглашение о неразглашении (NDA)', 'Geheimhaltungsvereinbarung (NDA)',
      ex('Both parties signed a [[non-disclosure agreement]] before we accessed the codebase.', 'Обе стороны подписали соглашение о неразглашении до того, как мы получили доступ к кодовой базе.', 'Beide Parteien unterschrieben eine Geheimhaltungsvereinbarung vor dem Zugriff auf den Code.'),
      ['В устной речи и письмах почти всегда сокращают до NDA (sign an NDA).', 'Im Alltag fast immer NDA abgekürzt (sign an NDA = eine Geheimhaltungsvereinbarung unterschreiben).']),
    W('timesheet', 'noun', 'timesheet', 'B2', 'табель учёта рабочего времени', 'Leistungsnachweis, Stundenzettel',
      ex('Please submit your approved [[timesheet]] by the last Friday of the month.', 'Пожалуйста, отправь утверждённый табель рабочего времени до последней пятницы месяца.', 'Bitte reiche deinen freigegebenen Stundenzettel bis zum letzten Freitag des Monats ein.'),
      ['Ведётся почасовыми подрядчиками и фрилансерами для выставления счёта (fill in / submit a timesheet).', 'Grundlage für die Stundenabrechnung bei Freelancern und Agenturen (submit a timesheet).']),
    W('usage-rights', 'noun', 'usage rights', 'C1', 'права на использование (результата работы)', 'Nutzungsrechte',
      ex('Full commercial [[usage rights]] transfer to the client once the final invoice is settled.', 'Полные коммерческие права на использование переходят к клиенту после оплаты финального счёта.', 'Die vollen kommerziellen Nutzungsrechte gehen nach Zahlung der Schlussrechnung an den Kunden über.'),
      ['Обычно во множественном числе; ключевой пункт договоров с дизайнерами, копирайтерами и разработчиками.', 'Meist im Plural; zentraler Vertragspunkt im Design- und Freelance-Bereich.']),
    W('rework', 'noun', 'rework', 'B2', 'переделка, доработка', 'Nachbesserung, Nacharbeit',
      ex('Getting the brief clear upfront saved us days of avoidable [[rework]].', 'Чёткое согласование брифа на старте сэкономило нам дни лишних переделок.', 'Ein klares Briefing am Anfang ersparte uns Tage unnötiger Nacharbeit.'),
      ['Как существительное неисчисляемое; также употребляется как глагол (rework a section).', 'Als Nomen unzählbar; auch als Verb gebräuchlich (rework a draft = überarbeiten).']),
    W('turnaround-time', 'noun', 'turnaround time', 'B2', 'срок выполнения (от запроса до выдачи результата)', 'Bearbeitungszeit, Durchlaufzeit',
      ex('Our standard [[turnaround time]] for minor copy updates is two business days.', 'Наш стандартный срок выполнения мелких текстовых правок — два рабочих дня.', 'Unsere reguläre Bearbeitungszeit für kleine Textänderungen beträgt zwei Werktage.'),
      ['Очень естественный клиентский термин: quick / fast turnaround (быстрая отдача результата).', 'Sehr gängig im Kundenkontakt; oft auch kurz quick turnaround (= schnelle Lieferung).']),
    W('overdue', 'adj', 'overdue', 'B2', 'просроченный (о счёте, платеже или задаче)', 'überfällig',
      ex('We sent a polite reminder because the March invoice is two weeks [[overdue]].', 'Мы отправили вежливое напоминание, так как мартовский счёт просрочен на две недели.', 'Wir schickten eine höfliche Erinnerung, weil die Märzrechnung zwei Wochen überfällig ist.'),
      ['Применяется к платежам (overdue invoice), задачам (overdue task) и даже поездам/книгам.', 'Gilt für Rechnungen (overdue invoice), Aufgaben und Fristen; wörtlich „überfällig“.']),
    W('non-binding', 'adj', 'non-binding', 'B2', 'необязывающий (ориентировочный, без юр. силы)', 'unverbindlich',
      ex('This rough figure is a [[non-binding]] estimate until we see the full specification.', 'Эта ориентировочная цифра — необязывающая оценка, пока мы не увидим полную спецификацию.', 'Diese grobe Zahl ist eine unverbindliche Schätzung, bis wir die volle Spezifikation sehen.'),
      ['Антоним к binding (юридически обязывающий); прямой аналог нем. unverbindlich.', 'Gegenteil von binding (= verbindlich); entspricht genau dt. unverbindlich.'])
  ]);

  /* ── 05 · Presentations & Pitching (8 new) ───────────────────────────────── */
  reg('presentations', [
    W('outline', 'noun', 'outline', 'B2', 'план, структура (выступления, документа)', 'Gliederung, Überblick',
      ex('Slide two gives a quick [[outline]] of the three areas I’ll cover today.', 'Второй слайд даёт краткий план трёх тем, которые я сегодня разберу.', 'Folie zwei gibt eine kurze Gliederung der drei Punkte, die ich heute vorstelle.'),
      ['Также глагол to outline (кратко обрисовать план или основные тезисы).', 'Auch als Verb gebräuchlich: outline the main points (= die Kernpunkte umreißen).']),
    W('body-language', 'noun', 'body language', 'B2', 'язык тела', 'Körpersprache',
      ex('Relaxed [[body language]] helps speakers come across as confident during tough questions.', 'Спокойный язык тела помогает спикерам выглядеть уверенно во время сложных вопросов.', 'Entspannte Körpersprache hilft Rednern, bei schwierigen Fragen souverän zu wirken.'),
      ['Неисчисляемое существительное; сочетания: open / defensive body language, read someone’s body language.', 'Unzählbar; typische Verbindungen: open body language, read someone’s body language.']),
    W('eye-contact', 'noun', 'eye contact', 'B1', 'зрительный контакт', 'Blickkontakt',
      ex('Try to keep [[eye contact]] with the room instead of reading straight off your slides.', 'Старайся держать зрительный контакт с залом, а не читать прямо со слайдов.', 'Versuche Blickkontakt mit dem Publikum zu halten, statt direkt von den Folien abzulesen.'),
      ['Неисчисляемое; устойчивые глаголы: make / keep / maintain eye contact with someone.', 'Unzählbar; feste Verben: make / keep / maintain eye contact (= Blickkontakt halten).']),
    W('qa-session', 'noun', 'Q&A session', 'B1', 'сессия вопросов и ответов', 'Fragerunde',
      ex('We kept ten minutes at the end for an open [[Q&A session]].', 'Мы оставили десять минут в конце для открытой сессии вопросов и ответов.', 'Wir ließen am Ende zehn Minuten für eine offene Fragerunde frei.'),
      ['Расшифровывается как Questions and Answers; в речи часто просто “during the Q&A”.', 'Kurz für Questions and Answers; im Gespräch oft einfach „in the Q&A“.']),
    W('handout', 'noun', 'handout', 'B2', 'раздаточный материал', 'Handout, Tischvorlage',
      ex('Put the dense data tables in the [[handout]] and keep your slides visual.', 'Вынеси плотные таблицы с данными в раздаточный материал, а слайды оставь наглядными.', 'Packe die dichten Datentabellen ins Handout und halte die Folien visuell.'),
      ['Существительное пишется слитно (handout); фразовый глагол «раздавать» — раздельно (hand out).', 'Als Nomen zusammengeschrieben; das Verb „austeilen“ schreibt man getrennt (hand out).']),
    W('transition', 'noun', 'transition', 'B2', 'переход, связка (между разделами/слайдами)', 'Überleitung, Übergang',
      ex('A clean [[transition]] links the customer feedback directly to our next quarter’s goals.', 'Удачный переход напрямую связывает отзывы клиентов с целями следующего квартала.', 'Eine saubere Überleitung verbindet das Kundenfeedback direkt mit den Zielen fürs nächste Quartal.'),
      ['В выступлениях — логический мостик между блоками; также «переход на новую систему» (transition to).', 'In Vorträgen der gedankliche Brückenschlag; allgemein auch Übergang / Umstellung (transition to).']),
    W('highlight', 'verb', 'highlight', 'B2', 'выделять, подчёркивать (ключевую мысль)', 'hervorheben, betonen',
      ex('Before wrapping up, I’d like to [[highlight]] the two numbers that matter most.', 'Перед завершением я хотел бы выделить две самые важные цифры.', 'Vor dem Abschluss möchte ich die beiden wichtigsten Zahlen hervorheben.'),
      ['Также означает «выделить маркером/курсором»; как существительное — главный яркий момент (the highlight of).', 'Bedeutet auch farblich markieren; als Nomen „Höhepunkt“ (the highlight of the talk).']),
    W('recap', 'verb', 'recap', 'B2', 'кратко подвести итог, повторить главное', 'kurz zusammenfassen, rekapitulieren',
      ex('Let’s quickly [[recap]] the decisions we made before everyone leaves the call.', 'Давай быстро повторим принятые решения, прежде чем все отключатся от звонка.', 'Lass uns kurz die getroffenen Entscheidungen zusammenfassen, bevor alle den Call verlassen.'),
      ['Удваивает -p в прошедшем времени: recapped, recapping; как существительное — a quick recap.', 'Verdoppelt das p: recapped, recapping; als Nomen sehr gängig: a quick recap.'])
  ]);

  /* ── 06 · Work & Office (5 new) ──────────────────────────────────────────── */
  reg('work', [
    W('mailing-list', 'noun', 'mailing list', 'B1', 'список рассылки', 'Verteiler, E-Mail-Verteiler',
      ex('Could you add me to the [[mailing list]] for the weekly incident summaries?', 'Можешь добавить меня в список рассылки еженедельных сводок по инцидентам?', 'Kannst du mich in den Verteiler für die wöchentlichen Vorfallszusammenfassungen aufnehmen?'),
      ['В корпоративной почте также говорят distribution list; предлог — on / add to a mailing list.', 'In Firmen auch distribution list; Präposition: on the mailing list (= im Verteiler stehen).']),
    W('scheduling-conflict', 'noun', 'scheduling conflict', 'B2', 'накладка в расписании, совпадение встреч', 'Terminkollision, Terminkonflikt',
      ex('Sorry, I have a [[scheduling conflict]] at two — could we move our sync to three?', 'Извини, у меня накладка в расписании в два — можем перенести синк на три?', 'Entschuldigung, um zwei habe ich eine Terminkollision — können wir auf drei verschieben?'),
      ['В британском английском также говорят diary clash (в амер. calendar conflict).', 'Im britischen Englisch auch diary clash; im Amerikanischen auch calendar conflict.']),
    W('delegate', 'verb', 'delegate', 'B2', 'делегировать (задачи, полномочия)', 'delegieren, übertragen',
      ex('As the team grew, she had to learn to [[delegate]] routine reviews instead of doing them all herself.', 'По мере роста команды ей пришлось научиться делегировать рутинные проверки, а не делать всё самой.', 'Als das Team wuchs, musste sie lernen, Routineprüfungen zu delegieren statt alles selbst zu tun.'),
      ['Конструкция: delegate a task to someone; внимание на произношение глагола /-geɪt/ и сущ. delegate /-gət/.', 'Konstruktion: delegate something to someone; Aussprache: Verb /-geɪt/, Substantiv /-gət/.']),
    W('chase-up', 'verb', 'chase up', 'B2', 'напомнить о себе, поторопить ответ / выполнение', 'nachhaken, nachfassen',
      ex('If the supplier hasn’t replied by Thursday, I’ll [[chase up]] their account manager.', 'Если поставщик не ответит до четверга, я напомню их аккаунт-менеджеру.', 'Wenn der Anbieter bis Donnerstag nicht antwortet, hake ich beim Account-Manager nach.'),
      ['Очень живой офисный глагол (особенно в брит. английском): chase up someone / chase up an invoice.', 'Sehr gebräuchlich im britischen Büroalltag: chase up someone / something (= dt. nachhaken).']),
    W('forward', 'verb', 'forward', 'B1', 'пересылать (письмо, запрос)', 'weiterleiten',
      ex('I’ll [[forward]] the client’s message to legal so they can check the wording.', 'Я перешлю письмо клиента юристам, чтобы они проверили формулировку.', 'Ich leite die Nachricht des Kunden an die Rechtsabteilung weiter, damit sie den Wortlaut prüft.'),
      ['Конструкция: forward an email to someone (не путать с наречием look forward to).', 'Konstruktion: forward something to someone (= an jemanden weiterleiten).'])
  ]);

  /* ── 07 · IT & Development (5 new) ───────────────────────────────────────── */
  reg('dev', [
    W('error-message', 'noun', 'error message', 'B1', 'сообщение об ошибке', 'Fehlermeldung',
      ex('Please copy the exact [[error message]] into the ticket rather than paraphrasing it.', 'Пожалуйста, скопируй точный текст сообщения об ошибке в тикет вместо пересказа.', 'Bitte kopiere die genaue Fehlermeldung ins Ticket, statt sie umzuschreiben.'),
      ['В тикетах всегда просят exact / full error message; прямой эквивалент нем. Fehlermeldung.', 'In Bug-Tickets immer gefragt: exact / full error message (= genaue Fehlermeldung).']),
    W('config-file', 'noun', 'config file', 'B2', 'файл конфигурации (конфиг)', 'Konfigurationsdatei',
      ex('Never commit API keys directly inside a [[config file]].', 'Никогда не коммить API-ключи напрямую внутри файла конфигурации.', 'Committe niemals API-Schlüssel direkt in einer Konfigurationsdatei.'),
      ['Разговорное сокращение от configuration file, повсеместно используемое разработчиками.', 'Alltagsübliche Kurzform von configuration file (= dt. Konfigurationsdatei).']),
    W('hotfix', 'noun', 'hotfix', 'B2', 'срочное исправление (хотфикс)', 'Hotfix, dringender Patch',
      ex('We shipped an emergency [[hotfix]] within twenty minutes to restore checkout.', 'Мы выкатили экстренный хотфикс за двадцать минут, чтобы восстановить оплату.', 'Wir lieferten innerhalb von zwanzig Minuten einen Notfall-Hotfix aus, um den Checkout zu retten.'),
      ['Срочный патч, который выкатывают в прод вне обычного цикла релизов.', 'Schnelle Fehlerbehebung direkt für die Produktion außerhalb des normalen Release-Zyklus.']),
    W('edge-case', 'noun', 'edge case', 'B2', 'крайний / нестандартный случай (в логике или тестах)', 'Grenzfall, Sonderfall',
      ex('The form works fine for normal names, but leap-year dates triggered an [[edge case]].', 'Форма отлично работает для обычных данных, но даты високосного года задели крайний случай.', 'Das Formular klappt im Normalfall, aber Schaltjahresdaten lösten einen Grenzfall aus.'),
      ['Ситуация на границе допустимых значений (пустая строка, 0, часовой пояс, очень длинное имя).', 'Seltener Sonderfall an extremen Grenzen (leeres Feld, Zeitzone, sehr lange Eingabe).']),
    W('compile', 'verb', 'compile', 'B2', 'компилировать', 'kompilieren',
      ex('After upgrading the library, the project failed to [[compile]] due to a type mismatch.', 'После обновления библиотеки проект не скомпилировался из-за несовпадения типов.', 'Nach dem Update der Bibliothek ließ sich das Projekt wegen eines Typfehlers nicht kompilieren.'),
      ['Вне программирования также значит «составить подборку / отчёт» (compile a report).', 'Außerhalb der IT auch „zusammenstellen“ (compile a report / list).'])
  ]);

  /* ── 08 · Infrastructure (5 new) ─────────────────────────────────────────── */
  reg('infra', [
    W('throughput', 'noun', 'throughput', 'C1', 'пропускная способность (фактическая)', 'Durchsatz',
      ex('Tuning database indexes doubled our request [[throughput]] per second.', 'Настройка индексов базы данных удвоила нашу фактическую пропускную способность в секунду.', 'Das Optimieren der Datenbankindizes verdoppelte unseren Durchsatz pro Sekunde.'),
      ['В отличие от bandwidth (ширина канала), throughput — сколько запросов/данных реально проходит за единицу времени.', 'Im Unterschied zu bandwidth (Kapazität) misst throughput die tatsächlich verarbeitete Menge pro Zeit.']),
    W('data-loss', 'noun', 'data loss', 'B2', 'потеря данных', 'Datenverlust',
      ex('Tested off-site backups are the only reliable defence against [[data loss]].', 'Проверенные резервные копии на отдельной площадке — единственная надёжная защита от потери данных.', 'Getestete externe Backups sind der einzige verlässliche Schutz vor Datenverlust.'),
      ['Обычно неисчисляемое; устойчивая пара — prevent / suffer data loss.', 'Meist unzählbar; typische Verben: prevent / avoid / suffer data loss.']),
    W('redundancy', 'noun', 'redundancy', 'C1', 'резервирование (дублирование систем для отказоустойчивости)', 'Redundanz, Ausfallsicherheit',
      ex('Building [[redundancy]] across two regions keeps the service online if one data centre fails.', 'Резервирование в двух регионах сохраняет сервис в сети при отказе одного дата-центра.', 'Redundanz über zwei Regionen hält den Dienst online, wenn ein Rechenzentrum ausfällt.'),
      ['Внимание на второе значение в HR (брит.): redundancy также значит «сокращение штата»!', 'Achtung Doppelbedeutung: Im britischen HR bedeutet redundancy auch „betriebsbedingte Entlassung“!']),
    W('spin-up', 'verb', 'spin up', 'B2', 'быстро поднять / развернуть (сервер, контейнер, стенд)', 'hochfahren, schnell bereitstellen',
      ex('With our Terraform scripts, anyone can [[spin up]] a test environment in five minutes.', 'С нашими скриптами Terraform любой может поднять тестовое окружение за пять минут.', 'Mit unseren Terraform-Skripten kann jeder in fünf Minuten eine Testumgebung hochfahren.'),
      ['Живой DevOps-глагол (от раскручивания диска); антоним — spin down / tear down (погасить/удалить).', 'Gängiges DevOps-Verb (spin up a container / instance); Gegenteil: spin down / tear down.']),
    W('reroute', 'verb', 'reroute', 'B2', 'перенаправлять (трафик, запросы)', 'umleiten',
      ex('When the Frankfurt node degraded, DNS automatically [[rerouted]] traffic to Amsterdam.', 'Когда узел во Франкфурте начал сбоить, DNS автоматически перенаправил трафик на Амстердам.', 'Als der Knoten in Frankfurt nachließ, leitete DNS den Verkehr automatisch nach Amsterdam um.'),
      ['Также используется для рейсов и дорог; приставка re- + route.', 'Gilt ebenso für Flüge und Straßenverkehr (= umleiten); Präfix re- + route.'])
  ]);

  /* ── 09 · Security (5 new) ───────────────────────────────────────────────── */
  reg('security', [
    W('misconfiguration', 'noun', 'misconfiguration', 'C1', 'ошибочная конфигурация', 'Fehlkonfiguration',
      ex('Most cloud leaks stem from a simple [[misconfiguration]] like a public storage bucket.', 'Большинство утечек в облаке возникает из-за простой ошибки конфигурации вроде открытого бакета.', 'Die meisten Cloud-Lecks entstehen durch eine einfache Fehlkonfiguration wie einen offenen Speicher-Bucket.'),
      ['В отчётах OWASP одна из главных категорий рисков: security misconfiguration.', 'Zählt laut OWASP zu den häufigsten Sicherheitsrisiken in Cloud- und Websystemen.']),
    W('data-minimisation', 'noun', 'data minimisation', 'C1', 'минимизация данных (принцип GDPR)', 'Datenminimierung',
      ex('Under [[data minimisation]], we only collect fields strictly required for the account.', 'По принципу минимизации данных мы собираем только поля, строго необходимые для аккаунта.', 'Nach dem Prinzip der Datenminimierung erheben wir nur zwingend erforderliche Angaben.'),
      ['Амер. написание — data minimization; базовый принцип европейского GDPR / DSGVO.', 'US-Schreibweise: data minimization; Grundprinzip der europäischen DSGVO.']),
    W('hardening', 'noun', 'hardening', 'C1', 'усиление защиты системы (харденинг)', 'Härtung (von Systemen)',
      ex('Server [[hardening]] includes disabling root SSH logins and removing unused packages.', 'Усиление защиты сервера включает отключение входа по SSH под root и удаление лишних пакетов.', 'Zur Server-Härtung gehören das Deaktivieren von Root-SSH-Logins und das Entfernen unnötiger Pakete.'),
      ['От глагола harden (сделать систему «твёрже», сократив поверхность атаки).', 'Vom Verb harden („abhärten“); umfasst alle Schritte zur Verringerung der Angriffsfläche.']),
    W('false-positive', 'noun', 'false positive', 'B2', 'ложное срабатывание (ложноположительный алерт)', 'Fehlalarm, Falsch-Positiv',
      ex('Tuning the detection rules cut daily [[false positives]] in the SOC by sixty percent.', 'Тюнинг правил детектирования сократил ежедневные ложные срабатывания в SOC на шестьдесят процентов.', 'Das Anpassen der Erkennungsregeln senkte tägliche Fehlalarme im SOC um sechzig Prozent.'),
      ['Система подняла тревогу зря; противоположность — false negative (пропущенная реальная атака).', 'Alarm ohne echte Bedrohung; Gegenteil: false negative (= übersehener echter Angriff).']),
    W('zero-day', 'noun', 'zero-day', 'C1', 'уязвимость нулевого дня (ещё без патча)', 'Zero-Day-Schwachstelle',
      ex('Attackers exploited a [[zero-day]] in the browser before the vendor even knew it existed.', 'Злоумышленники проэксплуатировали уязвимость нулевого дня в браузере ещё до того, как вендор узнал о ней.', 'Angreifer nutzten eine Zero-Day-Lücke im Browser aus, bevor der Hersteller davon wusste.'),
      ['Полная форма — zero-day vulnerability / exploit: у разработчика было «ноль дней» на выпуск патча.', 'Vollform: zero-day vulnerability; der Hersteller hatte „null Tage“ Zeit für einen Patch.'])
  ]);

  /* ── 10 · B2 Business English (4 new) ────────────────────────────────────── */
  reg('business', [
    W('overhead', 'noun', 'overhead', 'C1', 'накладные расходы (аренда, администрирование)', 'Gemeinkosten, laufende Fixkosten',
      ex('Moving to a smaller studio lowered our monthly [[overhead]] significantly.', 'Переезд в меньшую студию заметно снизил наши ежемесячные накладные расходы.', 'Der Umzug in ein kleineres Studio senkte unsere monatlichen Gemeinkosten deutlich.'),
      ['В британском английском часто во мн. ч. overheads, в американском обычно неисчисляемое overhead.', 'Im britischen Englisch oft im Plural (overheads), im amerikanischen meist Singular overhead.']),
    W('supply-chain', 'noun', 'supply chain', 'B2', 'цепочка поставок', 'Lieferkette',
      ex('A port strike disrupted the entire hardware [[supply chain]] for three weeks.', 'Забастовка в порту нарушила всю цепочку поставок оборудования на три недели.', 'Ein Hafenstreik unterbrach die gesamte Hardware-Lieferkette für drei Wochen.'),
      ['В ИБ также критичен термин supply-chain attack (атака через поставщика / зависимости).', 'In der IT-Sicherheit auch supply-chain attack (= Lieferkettenangriff).']),
    W('cash-flow', 'noun', 'cash flow', 'B2', 'денежный поток', 'Cashflow, Zahlungsstrom',
      ex('Even a profitable agency can struggle if late client payments squeeze its [[cash flow]].', 'Даже прибыльное агентство может столкнуться с трудностями, если задержки оплат сжимают денежный поток.', 'Selbst eine rentable Agentur gerät unter Druck, wenn späte Zahlungen den Cashflow belasten.'),
      ['Разница между реальными поступлениями и расходами денег на счёте (positive / tight cash flow).', 'Bewegung von Ein- und Auszahlungen; wichtig für laufende Liquidität (positive / tight cash flow).']),
    W('outsource', 'verb', 'outsource', 'B2', 'отдавать на аутсорс (внешнему подрядчику)', 'auslagern, outsourcen',
      ex('We decided to [[outsource]] payroll accounting so the small team can focus on product.', 'Мы решили отдать расчёт зарплат на аутсорс, чтобы маленькая команда сосредоточилась на продукте.', 'Wir lagern die Lohnbuchhaltung aus, damit sich das kleine Team auf das Produkt konzentrieren kann.'),
      ['Конструкция: outsource something to a vendor; антоним — keep in-house (делать своими силами).', 'Konstruktion: outsource something to someone; Gegenteil: keep in-house (= intern behalten).'])
  ]);

  /* ── 11 · B2 Career Paths (4 new) ────────────────────────────────────────── */
  reg('career-paths', [
    W('salary-expectation', 'noun', 'salary expectation', 'B2', 'зарплатные ожидания', 'Gehaltsvorstellung',
      ex('Research local market rates before stating your [[salary expectation]] in an interview.', 'Изучи местные рыночные вилки, прежде чем называть свои зарплатные ожидания на собеседовании.', 'Recherchiere marktübliche Gehälter, bevor du im Gespräch deine Gehaltsvorstellung nennst.'),
      ['Часто употребляется во множественном числе: What are your salary expectations?', 'Oft im Plural verwendet: What are your salary expectations? (= Gehaltsvorstellungen).']),
    W('job-posting', 'noun', 'job posting', 'B2', 'объявление о вакансии', 'Stellenausschreibung',
      ex('Read the [[job posting]] closely to see which skills are mandatory and which are nice to have.', 'Внимательно прочитай объявление о вакансии, чтобы понять, какие навыки обязательны, а какие желательны.', 'Lies die Stellenausschreibung genau, um Pflichtanforderungen von Pluspunkten zu unterscheiden.'),
      ['Близкие синонимы — job ad / job listing / vacancy.', 'Gängige Synonyme: job ad, job listing oder vacancy (= freie Stelle).']),
    W('career-switch', 'noun', 'career switch', 'B2', 'смена профессии / сферы деятельности', 'Berufswechsel, Branchenwechsel',
      ex('Making a [[career switch]] from finance to UX research took her a year of evening courses.', 'Переход из финансов в UX-исследования занял у неё год вечерних курсов.', 'Der Berufswechsel von der Finanzbranche ins UX-Research dauerte ein Jahr Abendkurse.'),
      ['Синоним — career change; человек, сменивший профессию — career switcher (ср. нем. Quereinsteiger).', 'Auch career change; wer wechselt, heißt career switcher (vgl. dt. Quereinsteiger).']),
    W('cover-letter', 'noun', 'cover letter', 'B1', 'сопроводительное письмо (к резюме)', 'Anschreiben, Bewerbungsschreiben',
      ex('Keep your [[cover letter]] to one page and explain why this specific team interests you.', 'Уложи сопроводительное письмо в одну страницу и объясни, чем тебя привлекает именно эта команда.', 'Halte dein Anschreiben auf einer Seite und erkläre, warum dich genau dieses Team reizt.'),
      ['В британском английском также covering letter; подаётся вместе с CV / résumé.', 'Im britischen Englisch auch covering letter; ergänzt den Lebenslauf (CV / résumé).'])
  ]);

  /* ── 12 · B2 World of Work (4 new) ───────────────────────────────────────── */
  reg('world-of-work', [
    W('time-tracking', 'noun', 'time tracking', 'B2', 'учёт рабочего времени', 'Zeiterfassung',
      ex('Lightweight [[time tracking]] helps agencies see which projects quietly go over budget.', 'Простой учёт рабочего времени помогает агентствам видеть, какие проекты незаметно выходят за бюджет.', 'Einfache Zeiterfassung hilft Agenturen zu erkennen, welche Projekte still das Budget sprengen.'),
      ['Неисчисляемое; применяется как для соблюдения трудового права, так и для биллинга клиентов.', 'Unzählbar; dient sowohl der gesetzlichen Arbeitszeiterfassung als auch der Kundenabrechnung.']),
    W('collective-agreement', 'noun', 'collective agreement', 'C1', 'коллективный трудовой договор / тарифное соглашение', 'Tarifvertrag',
      ex('Pay grades and holiday allowances are set by the sector’s [[collective agreement]].', 'Грейды зарплат и нормы отпуска установлены отраслевым коллективным договором.', 'Gehaltsstufen und Urlaubsansprüche sind im branchenweiten Tarifvertrag geregelt.'),
      ['Полная форма — collective bargaining agreement (CBA); соответствует нем. Tarifvertrag.', 'Vollform: collective bargaining agreement (CBA); entspricht dt. Tarifvertrag.']),
    W('workplace-culture', 'noun', 'workplace culture', 'B2', 'корпоративная / рабочая культура, климат в компании', 'Arbeitskultur, Unternehmenskultur',
      ex('A healthy [[workplace culture]] makes it safe to admit mistakes early.', 'Здоровая рабочая культура позволяет безопасно признавать ошибки на раннем этапе.', 'Eine gesunde Arbeitskultur macht es sicher, Fehler frühzeitig anzusprechen.'),
      ['Также company culture; описывает неписаные нормы общения, доверия и обратной связи.', 'Auch company culture; beschreibt gelebte Werte, Kommunikation und Umgang mit Fehlern.']),
    W('asynchronous-work', 'noun', 'asynchronous work', 'B2', 'асинхронная работа (без обязательного одновременного онлайна)', 'asynchrones Arbeiten',
      ex('Strong written updates make [[asynchronous work]] smooth across three time zones.', 'Чёткие письменные апдейты делают асинхронную работу комфортной в трёх часовых поясах.', 'Klare schriftliche Updates machen asynchrones Arbeiten über drei Zeitzonen hinweg reibungslos.'),
      ['В распределённых командах часто сокращают до async work / async communication.', 'In verteilten Teams oft kurz async work; Gegensatz zu synchronous (= Echtzeit-Meetings).'])
  ]);
})();

/* TELC B2 source expansion 2026-11-26 — data only.
 * Source: Einfach besser! 500, B2, English word list; original examples.
 * Permanent IDs; existing cards reused by lemma, part of speech and sense. */
GT.register({
  "tab": "it",
  "topic": "career-paths",
  "items": [
    {
      "id": "en:telc26:beratung",
      "t": "consultation",
      "pos": "noun",
      "plural": "consultations",
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
      "ru": "консультация",
      "de": "die Beratung",
      "examples": [
        {
          "t": "Before choosing a course, she arranged a [[consultation]].",
          "de": "Vor der Kurswahl vereinbarte sie eine Beratung.",
          "ru": "Перед выбором курса она записалась на консультацию.",
          "sense": {
            "ru": "консультация",
            "de": "die Beratung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:branche",
      "t": "industry",
      "pos": "noun",
      "plural": "industries",
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
      "ru": "отрасль",
      "de": "die Branche",
      "examples": [
        {
          "t": "Many skilled workers are needed in this [[industry]].",
          "de": "In dieser Branche werden viele Fachkräfte gesucht.",
          "ru": "В этой отрасли нужно много квалифицированных сотрудников.",
          "sense": {
            "ru": "отрасль",
            "de": "die Branche"
          }
        }
      ]
    },
    {
      "id": "en:telc26:stellengesuch",
      "t": "job-seeking advertisement",
      "pos": "noun",
      "plural": "job-seeking advertisements",
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
      "ru": "объявление о поиске работы",
      "de": "das Stellengesuch",
      "examples": [
        {
          "t": "Her [[job-seeking advertisement]] mentions her sales experience.",
          "de": "In ihrem Stellengesuch nennt sie ihre Erfahrung im Verkauf.",
          "ru": "В своём объявлении о поиске работы она указала опыт в продажах.",
          "sense": {
            "ru": "объявление о поиске работы",
            "de": "das Stellengesuch"
          }
        }
      ]
    },
    {
      "id": "en:telc26:verhandlungssicher",
      "t": "business fluent",
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
      "ru": "свободно владеющий языком",
      "de": "verhandlungssicher",
      "examples": [
        {
          "t": "For negotiations, we need someone who is [[business fluent]] in German.",
          "de": "Für Verhandlungen brauchen wir jemanden, der verhandlungssicher Deutsch spricht.",
          "ru": "Для переговоров нам нужен сотрудник, свободно владеющий немецким языком.",
          "sense": {
            "ru": "свободно владеющий языком",
            "de": "verhandlungssicher"
          }
        }
      ],
      "note": {
        "de": "Die Angabe beschreibt hier Sprachkenntnisse für Geschäftsverhandlungen. Sie ist keine offizielle GER-Niveaubezeichnung.",
        "ru": "Здесь речь о владении языком, достаточном для деловых переговоров. Это формулировка вакансий и резюме, а не название официального уровня CEFR."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "svc_retail",
  "items": [
    {
      "id": "en:telc26:einzelhandel",
      "t": "retail",
      "pos": "noun",
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
      "ru": "розничная торговля",
      "de": "der Einzelhandel",
      "examples": [
        {
          "t": "She is gaining her first work experience in [[retail]].",
          "de": "Sie sammelt erste Berufserfahrung im Einzelhandel.",
          "ru": "Она получает первый опыт работы в розничной торговле.",
          "sense": {
            "ru": "розничная торговля",
            "de": "der Einzelhandel"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:muster",
      "t": "sample",
      "pos": "noun",
      "plural": "samples",
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
      "ru": "образец",
      "de": "das Muster",
      "examples": [
        {
          "t": "We would like to see a [[sample]] before placing the order.",
          "de": "Vor der Bestellung möchten wir ein Muster sehen.",
          "ru": "Перед заказом мы хотели бы увидеть образец.",
          "sense": {
            "ru": "образец",
            "de": "das Muster"
          }
        }
      ]
    },
    {
      "id": "en:telc26:grosshaendler",
      "t": "wholesaler",
      "pos": "noun",
      "plural": "wholesalers",
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
      "ru": "оптовый продавец",
      "de": "der Großhändler",
      "examples": [
        {
          "t": "The shop orders its goods from a [[wholesaler]].",
          "de": "Der Laden bestellt die Ware bei einem Großhändler.",
          "ru": "Магазин заказывает товар у оптового продавца.",
          "sense": {
            "ru": "оптовый продавец",
            "de": "der Großhändler"
          }
        }
      ]
    },
    {
      "id": "en:telc26:artikelnummer",
      "t": "item number",
      "pos": "noun",
      "plural": "item numbers",
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
      "ru": "артикул",
      "de": "die Artikelnummer",
      "examples": [
        {
          "t": "Please quote the [[item number]] when ordering.",
          "de": "Bitte geben Sie bei der Bestellung die Artikelnummer an.",
          "ru": "Пожалуйста, укажите артикул при заказе.",
          "sense": {
            "ru": "артикул",
            "de": "die Artikelnummer"
          }
        }
      ],
      "note": {
        "de": "Eindeutige Kennnummer eines Produkts; nicht mit der Bestellnummer verwechseln.",
        "ru": "Уникальный код товара; не путать с номером отдельного заказа."
      }
    },
    {
      "id": "en:telc26:artikelbezeichnung",
      "t": "item description",
      "pos": "noun",
      "plural": "item descriptions",
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
      "ru": "наименование товара",
      "de": "die Artikelbezeichnung",
      "examples": [
        {
          "t": "The [[item description]] on the delivery note must be clear.",
          "de": "Die Artikelbezeichnung muss auf dem Lieferschein eindeutig sein.",
          "ru": "Наименование товара в накладной должно быть однозначным.",
          "sense": {
            "ru": "наименование товара",
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
      "id": "en:telc26:maschinenbau",
      "t": "mechanical engineering",
      "pos": "noun",
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
      "ru": "машиностроение",
      "de": "der Maschinenbau",
      "examples": [
        {
          "t": "The company trains skilled workers for [[mechanical engineering]].",
          "de": "Der Betrieb bildet Fachkräfte für den Maschinenbau aus.",
          "ru": "Предприятие готовит специалистов для машиностроения.",
          "sense": {
            "ru": "машиностроение",
            "de": "der Maschinenbau"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:anweisung",
      "t": "instruction",
      "pos": "noun",
      "plural": "instructions",
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
      "ru": "указание",
      "de": "die Anweisung",
      "examples": [
        {
          "t": "Please read the [[instruction]] before using the device.",
          "de": "Bitte lesen Sie die Anweisung, bevor Sie das Gerät benutzen.",
          "ru": "Пожалуйста, прочитайте указание перед использованием прибора.",
          "sense": {
            "ru": "указание",
            "de": "die Anweisung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:gefahrenstelle",
      "t": "hazardous area",
      "pos": "noun",
      "plural": "hazardous areas",
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
      "ru": "опасный участок",
      "de": "die Gefahrenstelle",
      "examples": [
        {
          "t": "The [[hazardous area]] is clearly marked.",
          "de": "Die Gefahrenstelle ist deutlich gekennzeichnet.",
          "ru": "Опасный участок чётко обозначен.",
          "sense": {
            "ru": "опасный участок",
            "de": "die Gefahrenstelle"
          }
        }
      ]
    },
    {
      "id": "en:telc26:stromschlag",
      "t": "electric shock",
      "pos": "noun",
      "plural": "electric shocks",
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
      "ru": "удар электрическим током",
      "de": "der Stromschlag",
      "examples": [
        {
          "t": "The training covers the risk of an [[electric shock]].",
          "de": "Die Schulung behandelt das Risiko eines Stromschlags.",
          "ru": "На обучении обсуждают риск удара электрическим током.",
          "sense": {
            "ru": "удар электрическим током",
            "de": "der Stromschlag"
          }
        }
      ]
    },
    {
      "id": "en:telc26:ersthelfer",
      "t": "first aider",
      "pos": "noun",
      "plural": "first aiders",
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
      "ru": "сотрудник, обученный первой помощи",
      "de": "der Ersthelfer",
      "examples": [
        {
          "t": "The list shows who has been trained as a [[first aider]] at the company.",
          "de": "Auf der Liste steht, wer im Betrieb als Ersthelfer ausgebildet ist.",
          "ru": "В списке указан каждый сотрудник, обученный первой помощи.",
          "sense": {
            "ru": "сотрудник, обученный первой помощи",
            "de": "der Ersthelfer"
          }
        }
      ],
      "note": {
        "de": "Eine in Erster Hilfe ausgebildete Person am Arbeitsplatz; nicht automatisch ein Rettungssanitäter.",
        "ru": "Человек, обученный оказывать первую помощь на рабочем месте; это не обязательно врач или фельдшер."
      }
    },
    {
      "id": "en:telc26:evakuierung",
      "t": "evacuation",
      "pos": "noun",
      "plural": "evacuations",
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
      "ru": "эвакуация",
      "de": "die Evakuierung",
      "examples": [
        {
          "t": "The [[evacuation]] is discussed during a drill.",
          "de": "Die Evakuierung wird bei einer Übung besprochen.",
          "ru": "Эвакуацию обсуждают во время учений.",
          "sense": {
            "ru": "эвакуация",
            "de": "die Evakuierung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:fluchtweg",
      "t": "escape route",
      "pos": "noun",
      "plural": "escape routes",
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
      "ru": "путь эвакуации",
      "de": "der Fluchtweg",
      "examples": [
        {
          "t": "The [[escape route]] is marked in green on the plan.",
          "de": "Der Fluchtweg ist auf dem Plan grün markiert.",
          "ru": "Путь эвакуации отмечен на плане зелёным цветом.",
          "sense": {
            "ru": "путь эвакуации",
            "de": "der Fluchtweg"
          }
        }
      ]
    },
    {
      "id": "en:telc26:gehoerschutz",
      "t": "hearing protection",
      "pos": "noun",
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
      "ru": "средства защиты слуха",
      "de": "der Gehörschutz",
      "examples": [
        {
          "t": "[[Hearing protection]] is available for the visit to the noisy workshop.",
          "de": "Für den Besuch der lauten Werkhalle liegt Gehörschutz bereit.",
          "ru": "Для посещения шумного цеха подготовлены средства защиты слуха.",
          "sense": {
            "ru": "средства защиты слуха",
            "de": "der Gehörschutz"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:notausgang",
      "t": "emergency exit",
      "pos": "noun",
      "plural": "emergency exits",
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
      "ru": "аварийный выход",
      "de": "der Notausgang",
      "examples": [
        {
          "t": "The sign points the way to the [[emergency exit]].",
          "de": "Das Schild zeigt den Weg zum Notausgang.",
          "ru": "Табличка показывает путь к аварийному выходу.",
          "sense": {
            "ru": "аварийный выход",
            "de": "der Notausgang"
          }
        }
      ]
    },
    {
      "id": "en:telc26:rutschgefahr",
      "t": "slip hazard",
      "pos": "noun",
      "plural": "slip hazards",
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
      "ru": "опасность поскользнуться",
      "de": "die Rutschgefahr",
      "examples": [
        {
          "t": "The wet floor presents a [[slip hazard]].",
          "de": "Auf dem nassen Boden besteht Rutschgefahr.",
          "ru": "На мокром полу есть опасность поскользнуться.",
          "sense": {
            "ru": "опасность поскользнуться",
            "de": "die Rutschgefahr"
          }
        }
      ]
    },
    {
      "id": "en:telc26:sammelstelle",
      "t": "assembly point",
      "pos": "noun",
      "plural": "assembly points",
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
      "ru": "место сбора",
      "de": "die Sammelstelle",
      "examples": [
        {
          "t": "The [[assembly point]] is behind the car park.",
          "de": "Die Sammelstelle befindet sich hinter dem Parkplatz.",
          "ru": "Место сбора находится за парковкой.",
          "sense": {
            "ru": "место сбора",
            "de": "die Sammelstelle"
          }
        }
      ]
    },
    {
      "id": "en:telc26:schutzbrille",
      "t": "safety goggles",
      "pos": "noun",
      "plural": "safety goggles",
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
      "ru": "защитные очки",
      "de": "die Schutzbrille",
      "examples": [
        {
          "t": "The [[safety goggles]] are in the cupboard with the gloves.",
          "de": "Die Schutzbrille liegt zusammen mit den Handschuhen im Schrank.",
          "ru": "Защитные очки лежат в шкафу рядом с перчатками.",
          "sense": {
            "ru": "защитные очки",
            "de": "die Schutzbrille"
          }
        }
      ]
    },
    {
      "id": "en:telc26:schutzhelm",
      "t": "hard hat",
      "pos": "noun",
      "plural": "hard hats",
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
      "ru": "защитная каска",
      "de": "der Schutzhelm",
      "examples": [
        {
          "t": "His [[hard hat]] carries the company logo.",
          "de": "Sein Schutzhelm trägt das Logo des Betriebs.",
          "ru": "На его защитной каске есть логотип компании.",
          "sense": {
            "ru": "защитная каска",
            "de": "der Schutzhelm"
          }
        }
      ]
    },
    {
      "id": "en:telc26:qualitaetssicherung",
      "t": "quality assurance",
      "pos": "noun",
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
      "ru": "обеспечение качества",
      "de": "die Qualitätssicherung",
      "examples": [
        {
          "t": "[[Quality assurance]] checks a sample before delivery.",
          "de": "Die Qualitätssicherung prüft vor der Lieferung eine Stichprobe.",
          "ru": "Служба обеспечения качества проверяет выборку перед доставкой.",
          "sense": {
            "ru": "обеспечение качества",
            "de": "die Qualitätssicherung"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:richtlinie",
      "t": "guideline",
      "pos": "noun",
      "plural": "guidelines",
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
      "ru": "руководящий принцип",
      "de": "die Richtlinie",
      "examples": [
        {
          "t": "The new [[guideline]] describes how to handle confidential documents.",
          "de": "Die neue Richtlinie beschreibt den Umgang mit vertraulichen Unterlagen.",
          "ru": "Новый руководящий принцип описывает работу с конфиденциальными документами.",
          "sense": {
            "ru": "руководящий принцип",
            "de": "die Richtlinie"
          }
        }
      ],
      "note": {
        "de": "Bezeichnet hier eine Arbeitsrichtlinie oder Vorgabe, keine geometrische Linie.",
        "ru": "В рабочем контексте: руководство, правило или директива, а не геометрическая линия."
      }
    },
    {
      "id": "en:telc26:abdeckung",
      "t": "protective cover",
      "pos": "noun",
      "plural": "protective covers",
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
      "ru": "защитная крышка",
      "de": "die Abdeckung",
      "examples": [
        {
          "t": "The device’s [[protective cover]] is damaged.",
          "de": "Die Abdeckung des Geräts ist beschädigt.",
          "ru": "Защитная крышка прибора повреждена.",
          "sense": {
            "ru": "защитная крышка",
            "de": "die Abdeckung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:einrasten",
      "t": "click into place",
      "pos": "verb",
      "forms": {
        "praes": "clicks into place",
        "praet": "clicked into place",
        "perf": "has clicked into place"
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
      "ru": "защёлкиваться",
      "de": "einrasten",
      "examples": [
        {
          "t": "The cover [[clicks into place]] with an audible click.",
          "de": "Die Abdeckung rastet mit einem hörbaren Klick ein.",
          "ru": "Крышка защёлкивается со слышимым щелчком.",
          "sense": {
            "ru": "защёлкиваться",
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
      "id": "en:telc26:beglaubigte-uebersetzung",
      "t": "certified translation",
      "pos": "noun",
      "plural": "certified translations",
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
      "ru": "заверенный перевод",
      "de": "die beglaubigte Übersetzung",
      "examples": [
        {
          "t": "A [[certified translation]] of the certificate is enclosed with the application.",
          "de": "Dem Antrag liegt eine beglaubigte Übersetzung des Zeugnisses bei.",
          "ru": "К заявлению приложен заверенный перевод свидетельства.",
          "sense": {
            "ru": "заверенный перевод",
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
      "id": "en:telc26:einzelunternehmer",
      "t": "sole proprietor",
      "pos": "noun",
      "plural": "sole proprietors",
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
      "ru": "индивидуальный предприниматель",
      "de": "der Einzelunternehmer",
      "examples": [
        {
          "t": "As a [[sole proprietor]], he does the bookkeeping himself.",
          "de": "Als Einzelunternehmer erledigt er die Buchhaltung selbst.",
          "ru": "Как индивидуальный предприниматель, он сам ведёт бухгалтерию.",
          "sense": {
            "ru": "индивидуальный предприниматель",
            "de": "der Einzelunternehmer"
          }
        }
      ],
      "note": {
        "de": "Bezeichnet eine natürliche Person, die ein Unternehmen allein auf eigene Rechnung führt; die konkreten Rechtsformen hängen vom jeweiligen Land ab.",
        "ru": "Предприниматель, ведущий дело самостоятельно от своего имени; конкретные правовые формы зависят от страны."
      }
    },
    {
      "id": "en:telc26:verschwiegenheitspflicht",
      "t": "duty of confidentiality",
      "pos": "noun",
      "plural": "duties of confidentiality",
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
      "ru": "обязанность сохранять конфиденциальность",
      "de": "die Verschwiegenheitspflicht",
      "examples": [
        {
          "t": "The [[duty of confidentiality]] is explained during induction.",
          "de": "Bei der Einarbeitung wird die Verschwiegenheitspflicht erklärt.",
          "ru": "Во время вводного обучения объясняют обязанность сохранять конфиденциальность.",
          "sense": {
            "ru": "обязанность сохранять конфиденциальность",
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
      "id": "en:telc26:arbeitsverhaeltnis",
      "t": "employment relationship",
      "pos": "noun",
      "plural": "employment relationships",
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
      "ru": "трудовые отношения",
      "de": "das Arbeitsverhältnis",
      "examples": [
        {
          "t": "The [[employment relationship]] begins on the first day of next month.",
          "de": "Das Arbeitsverhältnis beginnt am ersten Tag des nächsten Monats.",
          "ru": "Трудовые отношения начинаются с первого дня следующего месяца.",
          "sense": {
            "ru": "трудовые отношения",
            "de": "das Arbeitsverhältnis"
          }
        }
      ]
    },
    {
      "id": "en:telc26:lohnfortzahlung",
      "t": "continued payment of wages",
      "pos": "noun",
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
      "ru": "сохранение заработной платы",
      "de": "die Lohnfortzahlung",
      "examples": [
        {
          "t": "The contract addresses the [[continued payment of wages]] during illness.",
          "de": "Der Vertrag regelt die Lohnfortzahlung im Krankheitsfall.",
          "ru": "Договор определяет сохранение заработной платы во время болезни.",
          "sense": {
            "ru": "сохранение заработной платы",
            "de": "die Lohnfortzahlung"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:wechselschicht",
      "t": "rotating shift",
      "pos": "noun",
      "plural": "rotating shifts",
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
      "ru": "работа в чередующиеся смены",
      "de": "die Wechselschicht",
      "examples": [
        {
          "t": "Production introduced a [[rotating shift]] system.",
          "de": "In der Produktion wurde Wechselschicht eingeführt.",
          "ru": "На производстве введена работа в чередующиеся смены.",
          "sense": {
            "ru": "работа в чередующиеся смены",
            "de": "die Wechselschicht"
          }
        }
      ]
    },
    {
      "id": "en:telc26:freistellung",
      "t": "leave of absence",
      "pos": "noun",
      "plural": "leaves of absence",
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
      "ru": "освобождение от работы",
      "de": "die Freistellung",
      "examples": [
        {
          "t": "He is applying for [[leave of absence]] for the training course.",
          "de": "Für die Fortbildung beantragt er eine Freistellung.",
          "ru": "Для повышения квалификации он запрашивает освобождение от работы.",
          "sense": {
            "ru": "освобождение от работы",
            "de": "die Freistellung"
          }
        }
      ],
      "note": {
        "de": "Befreiung von der Arbeitspflicht, z. B. für eine Fortbildung; ob sie bezahlt ist, hängt von der Vereinbarung ab.",
        "ru": "Временное освобождение от работы, например для обучения; оплата зависит от конкретной договорённости."
      }
    },
    {
      "id": "en:telc26:freizeitausgleich",
      "t": "time off in lieu",
      "pos": "noun",
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
      "ru": "отгул",
      "de": "der Freizeitausgleich",
      "examples": [
        {
          "t": "The plan accounts for the overtime as [[time off in lieu]].",
          "de": "Die geleisteten Überstunden werden im Plan als Freizeitausgleich berücksichtigt.",
          "ru": "В плане учтён отгул за отработанные сверхурочные часы.",
          "sense": {
            "ru": "отгул",
            "de": "der Freizeitausgleich"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:nebentaetigkeit",
      "t": "secondary employment",
      "pos": "noun",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 35,
          "headword": "Nebentätigkeit",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "подработка",
      "de": "die Nebentätigkeit",
      "examples": [
        {
          "t": "She is discussing her planned [[secondary employment]] with HR.",
          "de": "Sie bespricht ihre geplante Nebentätigkeit mit der Personalabteilung.",
          "ru": "Она обсуждает планируемую подработку с отделом кадров.",
          "sense": {
            "ru": "подработка",
            "de": "die Nebentätigkeit"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "work",
  "items": [
    {
      "id": "en:telc26:arbeitsablauf",
      "t": "workflow",
      "pos": "noun",
      "plural": "workflows",
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
      "ru": "рабочий процесс",
      "de": "der Arbeitsablauf",
      "examples": [
        {
          "t": "A checklist makes the [[workflow]] easier to follow.",
          "de": "Eine Checkliste macht den Arbeitsablauf übersichtlicher.",
          "ru": "Контрольный список делает рабочий процесс понятнее.",
          "sense": {
            "ru": "рабочий процесс",
            "de": "der Arbeitsablauf"
          }
        }
      ]
    },
    {
      "id": "en:telc26:verbesserungsvorschlag",
      "t": "suggestion for improvement",
      "pos": "noun",
      "plural": "suggestions for improvement",
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
      "ru": "предложение по улучшению",
      "de": "der Verbesserungsvorschlag",
      "examples": [
        {
          "t": "The team will discuss each [[suggestion for improvement]] at the next meeting.",
          "de": "Das Team bespricht jeden Verbesserungsvorschlag in der nächsten Sitzung.",
          "ru": "Команда обсудит каждое предложение по улучшению на следующей встрече.",
          "sense": {
            "ru": "предложение по улучшению",
            "de": "der Verbesserungsvorschlag"
          }
        }
      ]
    },
    {
      "id": "en:telc26:vorgehen",
      "t": "procedure",
      "pos": "noun",
      "plural": "procedures",
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
      "ru": "порядок действий",
      "de": "das Vorgehen",
      "examples": [
        {
          "t": "We will agree on the next [[procedure]] with the client.",
          "de": "Wir stimmen das weitere Vorgehen mit der Kundin ab.",
          "ru": "Мы согласуем дальнейший порядок действий с клиенткой.",
          "sense": {
            "ru": "порядок действий",
            "de": "das Vorgehen"
          }
        }
      ],
      "note": {
        "de": "Bezeichnet hier ein festgelegtes Verfahren oder Vorgehen im Arbeitsalltag.",
        "ru": "Установленный порядок действий или процедура в работе."
      }
    },
    {
      "id": "en:telc26:besprechungsraum",
      "t": "meeting room",
      "pos": "noun",
      "plural": "meeting rooms",
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
      "ru": "переговорная комната",
      "de": "der Besprechungsraum",
      "examples": [
        {
          "t": "The [[meeting room]] is reserved for two hours.",
          "de": "Der Besprechungsraum ist für zwei Stunden reserviert.",
          "ru": "Переговорная комната забронирована на два часа.",
          "sense": {
            "ru": "переговорная комната",
            "de": "der Besprechungsraum"
          }
        }
      ]
    },
    {
      "id": "en:telc26:ergebnisprotokoll",
      "t": "action minutes",
      "pos": "noun",
      "plural": "action minutes",
      "note": {
        "ru": "Minutes — протокол; в этом значении употребляется во множественном числе. Action minutes фиксируют принятые решения.",
        "de": "Minutes steht in dieser Bedeutung im Plural. Action minutes halten die gefassten Beschlüsse fest."
      },
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
      "ru": "протокол принятых решений",
      "de": "das Ergebnisprotokoll",
      "examples": [
        {
          "t": "The [[action minutes]] list the decisions and the next tasks.",
          "de": "Im Ergebnisprotokoll stehen die Beschlüsse und die nächsten Aufgaben.",
          "ru": "В протоколе принятых решений указаны решения и следующие задачи.",
          "sense": {
            "ru": "протокол принятых решений",
            "de": "das Ergebnisprotokoll"
          }
        }
      ]
    },
    {
      "id": "en:telc26:verlaufsprotokoll",
      "t": "detailed minutes",
      "pos": "noun",
      "plural": "detailed minutes",
      "note": {
        "ru": "Minutes — протокол; в этом значении употребляется во множественном числе. Здесь подробно отражается ход обсуждения.",
        "de": "Minutes steht in dieser Bedeutung im Plural. Hier wird der Verlauf der Besprechung ausführlicher festgehalten."
      },
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
      "ru": "протокол хода обсуждения",
      "de": "das Verlaufsprotokoll",
      "examples": [
        {
          "t": "The [[detailed minutes]] record the main contributions in their order.",
          "de": "Das Verlaufsprotokoll hält die wichtigsten Beiträge in ihrer Reihenfolge fest.",
          "ru": "Протокол хода обсуждения сохраняет основные выступления в их последовательности.",
          "sense": {
            "ru": "протокол хода обсуждения",
            "de": "das Verlaufsprotokoll"
          }
        }
      ]
    },
    {
      "id": "en:telc26:vorbesprechung",
      "t": "preliminary meeting",
      "pos": "noun",
      "plural": "preliminary meetings",
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
      "ru": "предварительное обсуждение",
      "de": "die Vorbesprechung",
      "examples": [
        {
          "t": "In the [[preliminary meeting]], we will clarify the roles for the presentation.",
          "de": "In der Vorbesprechung klären wir die Rollen für die Präsentation.",
          "ru": "На предварительном обсуждении мы уточним роли для презентации.",
          "sense": {
            "ru": "предварительное обсуждение",
            "de": "die Vorbesprechung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:protokollieren",
      "t": "take minutes",
      "pos": "verb",
      "forms": {
        "praes": "takes minutes",
        "praet": "took minutes",
        "perf": "has taken minutes"
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
      "ru": "протоколировать",
      "de": "protokollieren",
      "examples": [
        {
          "t": "The colleague [[takes minutes]] at the meeting.",
          "de": "Die Kollegin protokolliert die Besprechung.",
          "ru": "Коллега протоколирует совещание.",
          "sense": {
            "ru": "протоколировать",
            "de": "protokollieren"
          }
        }
      ]
    },
    {
      "id": "en:telc26:nachvollziehen",
      "t": "follow the reasoning",
      "pos": "verb",
      "forms": {
        "praes": "follows the reasoning",
        "praet": "followed the reasoning",
        "perf": "has followed the reasoning"
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
      "ru": "понять",
      "de": "nachvollziehen",
      "examples": [
        {
          "t": "She [[followed the reasoning]] step by step.",
          "de": "Sie vollzog die Argumentation Schritt für Schritt nach.",
          "ru": "Она поняла логику рассуждений, проследив каждый шаг.",
          "sense": {
            "ru": "понять",
            "de": "nachvollziehen"
          }
        }
      ]
    },
    {
      "id": "en:telc26:widersprechen",
      "t": "contradict",
      "pos": "verb",
      "forms": {
        "praes": "contradicts",
        "praet": "contradicted",
        "perf": "has contradicted"
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
      "ru": "противоречить",
      "de": "widersprechen",
      "examples": [
        {
          "t": "The new figures [[contradict]] the previous report.",
          "de": "Die neuen Zahlen widersprechen dem bisherigen Bericht.",
          "ru": "Новые данные противоречат прежнему отчёту.",
          "sense": {
            "ru": "противоречить",
            "de": "widersprechen"
          }
        }
      ],
      "note": {
        "de": "Im Beispiel stehen Zahlen im Widerspruch zu einem Bericht; im Englischen folgt ein direktes Objekt (contradict something).",
        "ru": "В этом примере данные противоречат отчёту; в английском используется без предлога (contradict something)."
      }
    },
    {
      "id": "en:telc26:ausrichten",
      "t": "pass on",
      "pos": "verb",
      "forms": {
        "praes": "passes on",
        "praet": "passed on",
        "perf": "has passed on"
      },
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
      "ru": "передавать",
      "de": "ausrichten",
      "examples": [
        {
          "t": "The colleague [[passes on]] your message.",
          "de": "Die Kollegin richtet Ihre Nachricht aus.",
          "ru": "Коллега передаёт ваше сообщение.",
          "sense": {
            "ru": "передавать",
            "de": "ausrichten"
          }
        }
      ],
      "note": {
        "de": "Bedeutet hier, jemandem eine Nachricht weiterzugeben (pass a message on).",
        "ru": "Здесь означает передать кому-либо сообщение (pass a message on)."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "dev",
  "items": [
    {
      "id": "en:telc26:datenblatt",
      "t": "datasheet",
      "pos": "noun",
      "plural": "datasheets",
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
      "ru": "техническое описание",
      "de": "das Datenblatt",
      "examples": [
        {
          "t": "The technical dimensions are listed in the [[datasheet]].",
          "de": "Die technischen Maße stehen im Datenblatt.",
          "ru": "Технические размеры указаны в техническом описании.",
          "sense": {
            "ru": "техническое описание",
            "de": "das Datenblatt"
          }
        }
      ]
    },
    {
      "id": "en:telc26:fehlerhaft",
      "t": "faulty",
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
      "ru": "ошибочный",
      "de": "fehlerhaft",
      "examples": [
        {
          "t": "A [[faulty]] calculation produced an incorrect total price.",
          "de": "Eine fehlerhafte Berechnung führte zum falschen Gesamtpreis.",
          "ru": "Ошибочный расчёт привёл к неверной общей сумме.",
          "sense": {
            "ru": "ошибочный",
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
      "id": "en:telc26:aussteller",
      "t": "exhibitor",
      "pos": "noun",
      "plural": "exhibitors",
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
      "ru": "участник выставки",
      "de": "der Aussteller",
      "examples": [
        {
          "t": "Each [[exhibitor]] gets a separate stand.",
          "de": "Jeder Aussteller bekommt einen eigenen Stand.",
          "ru": "Каждый участник выставки получает отдельный стенд.",
          "sense": {
            "ru": "участник выставки",
            "de": "der Aussteller"
          }
        }
      ]
    },
    {
      "id": "en:telc26:wettbewerber",
      "t": "competitor",
      "pos": "noun",
      "plural": "competitors",
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
      "ru": "конкурент",
      "de": "der Wettbewerber",
      "examples": [
        {
          "t": "A [[competitor]] offers a similar service.",
          "de": "Ein Wettbewerber bietet einen ähnlichen Service an.",
          "ru": "Конкурент предлагает похожую услугу.",
          "sense": {
            "ru": "конкурент",
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
      "id": "en:telc26:preisnachlass",
      "t": "price reduction",
      "pos": "noun",
      "plural": "price reductions",
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
      "ru": "снижение цены",
      "de": "der Preisnachlass",
      "examples": [
        {
          "t": "A [[price reduction]] was agreed for the larger order.",
          "de": "Für die größere Bestellung wurde ein Preisnachlass vereinbart.",
          "ru": "Для более крупного заказа согласовали снижение цены.",
          "sense": {
            "ru": "снижение цены",
            "de": "der Preisnachlass"
          }
        }
      ]
    },
    {
      "id": "en:telc26:sonderwunsch",
      "t": "special request",
      "pos": "noun",
      "plural": "special requests",
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
      "ru": "особое пожелание",
      "de": "der Sonderwunsch",
      "examples": [
        {
          "t": "Please tell us your [[special request]] before placing the order.",
          "de": "Bitte teilen Sie uns Ihren Sonderwunsch vor der Bestellung mit.",
          "ru": "Пожалуйста, сообщите нам своё особое пожелание перед заказом.",
          "sense": {
            "ru": "особое пожелание",
            "de": "der Sonderwunsch"
          }
        }
      ]
    },
    {
      "id": "en:telc26:bestandskunde",
      "t": "existing customer",
      "pos": "noun",
      "plural": "existing customers",
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
      "ru": "действующий клиент",
      "de": "der Bestandskunde",
      "examples": [
        {
          "t": "As an [[existing customer]], he already has a customer number.",
          "de": "Als Bestandskunde hat er bereits eine Kundennummer.",
          "ru": "Как действующий клиент, он уже имеет номер клиента.",
          "sense": {
            "ru": "действующий клиент",
            "de": "der Bestandskunde"
          }
        }
      ]
    },
    {
      "id": "en:telc26:kundennummer",
      "t": "customer number",
      "pos": "noun",
      "plural": "customer numbers",
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
      "ru": "номер клиента",
      "de": "die Kundennummer",
      "examples": [
        {
          "t": "Your [[customer number]] is at the top of the invoice.",
          "de": "Ihre Kundennummer steht oben auf der Rechnung.",
          "ru": "Ваш номер клиента указан в верхней части счёта.",
          "sense": {
            "ru": "номер клиента",
            "de": "die Kundennummer"
          }
        }
      ]
    },
    {
      "id": "en:telc26:neukunde",
      "t": "new customer",
      "pos": "noun",
      "plural": "new customers",
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
      "ru": "новый клиент",
      "de": "der Neukunde",
      "examples": [
        {
          "t": "Each [[new customer]] receives a short introduction to the portal.",
          "de": "Jeder Neukunde erhält eine kurze Einführung in das Portal.",
          "ru": "Каждый новый клиент получает короткое введение в работу с порталом.",
          "sense": {
            "ru": "новый клиент",
            "de": "der Neukunde"
          }
        }
      ]
    },
    {
      "id": "en:telc26:entgegenkommen",
      "t": "goodwill",
      "pos": "noun",
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
      "ru": "готовность пойти навстречу",
      "de": "das Entgegenkommen",
      "examples": [
        {
          "t": "Thank you for your [[goodwill]] in accommodating the change of date.",
          "de": "Vielen Dank für Ihr Entgegenkommen bei der Terminänderung.",
          "ru": "Спасибо за вашу готовность пойти навстречу при изменении даты.",
          "sense": {
            "ru": "готовность пойти навстречу",
            "de": "das Entgegenkommen"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    }
  ]
});

GT.register({
  "tab": "it",
  "topic": "ops_logistics",
  "items": [
    {
      "id": "en:telc26:eilzuschlag",
      "t": "express surcharge",
      "pos": "noun",
      "plural": "express surcharges",
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
      "ru": "доплата за срочность",
      "de": "der Eilzuschlag",
      "examples": [
        {
          "t": "The quote includes an [[express surcharge]] for faster delivery.",
          "de": "Für die schnellere Lieferung steht ein Eilzuschlag im Angebot.",
          "ru": "В предложении указана доплата за срочность доставки.",
          "sense": {
            "ru": "доплата за срочность",
            "de": "der Eilzuschlag"
          }
        }
      ]
    },
    {
      "id": "en:telc26:werktag",
      "t": "working day",
      "pos": "noun",
      "plural": "working days",
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
      "ru": "рабочий день",
      "de": "der Werktag",
      "examples": [
        {
          "t": "The quote states the delivery time in [[working days]].",
          "de": "Die Lieferzeit wird im Angebot in Werktagen angegeben.",
          "ru": "В предложении срок доставки указан в рабочих днях.",
          "sense": {
            "ru": "рабочий день",
            "de": "der Werktag"
          }
        }
      ],
      "note": {
        "de": "Hier bezeichnet Werktag eine Einheit der Lieferfrist, nicht die Dauer einer Schicht. Welche Tage zählen, ergibt sich aus den konkreten Bedingungen.",
        "ru": "Здесь рабочий день — единица срока доставки, а не продолжительность смены. Какие дни учитываются, нужно читать в конкретных условиях."
      }
    },
    {
      "id": "en:telc26:gewerbegebiet",
      "t": "industrial estate",
      "pos": "noun",
      "plural": "industrial estates",
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
      "ru": "промышленная зона",
      "de": "das Gewerbegebiet",
      "examples": [
        {
          "t": "The new warehouse is on an [[industrial estate]].",
          "de": "Das neue Lager liegt in einem Gewerbegebiet.",
          "ru": "Новый склад находится в промышленной зоне.",
          "sense": {
            "ru": "промышленная зона",
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
      "id": "en:telc26:nettopreis",
      "t": "net price",
      "pos": "noun",
      "plural": "net prices",
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
      "ru": "цена без НДС",
      "de": "der Nettopreis",
      "examples": [
        {
          "t": "The quote lists the [[net price]] first, with VAT shown separately.",
          "de": "Im Angebot steht zuerst der Nettopreis, die Mehrwertsteuer folgt separat.",
          "ru": "В предложении сначала указана цена без НДС, а налог приведён отдельно.",
          "sense": {
            "ru": "цена без НДС",
            "de": "der Nettopreis"
          }
        }
      ]
    },
    {
      "id": "en:telc26:bruttopreis",
      "t": "gross price",
      "pos": "noun",
      "plural": "gross prices",
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
      "ru": "цена с НДС",
      "de": "der Bruttopreis",
      "examples": [
        {
          "t": "Please compare the [[gross price]] including VAT.",
          "de": "Bitte vergleichen Sie den Bruttopreis einschließlich Mehrwertsteuer.",
          "ru": "Пожалуйста, сравните цену с НДС.",
          "sense": {
            "ru": "цена с НДС",
            "de": "der Bruttopreis"
          }
        }
      ]
    },
    {
      "id": "en:telc26:skonto",
      "t": "early payment discount",
      "pos": "noun",
      "plural": "early payment discounts",
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
      "ru": "скидка за досрочную оплату",
      "de": "das Skonto",
      "examples": [
        {
          "t": "The quote offers an [[early payment discount]] for payment within the agreed period.",
          "de": "Das Angebot nennt ein Skonto bei Zahlung innerhalb der vereinbarten Frist.",
          "ru": "В предложении есть скидка за досрочную оплату в согласованный срок.",
          "sense": {
            "ru": "скидка за досрочную оплату",
            "de": "das Skonto"
          }
        }
      ],
      "note": {
        "de": "Ein Preisnachlass bei Zahlung innerhalb einer kurzen vereinbarten Frist.",
        "ru": "Скидка за быструю оплату в короткий согласованный срок."
      }
    },
    {
      "id": "en:telc26:vorauszahlung",
      "t": "advance payment",
      "pos": "noun",
      "plural": "advance payments",
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 25,
          "headword": "Vorauszahlung",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "предоплата",
      "de": "die Vorauszahlung",
      "examples": [
        {
          "t": "The [[advance payment]] will be offset against the final invoice.",
          "de": "Die Vorauszahlung wird mit der Schlussrechnung verrechnet.",
          "ru": "Предоплата будет учтена в окончательном счёте.",
          "sense": {
            "ru": "предоплата",
            "de": "die Vorauszahlung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:mahnung",
      "t": "payment demand",
      "pos": "noun",
      "plural": "payment demands",
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
      "ru": "требование об оплате",
      "de": "die Mahnung",
      "examples": [
        {
          "t": "The [[payment demand]] concerns the outstanding invoice.",
          "de": "Die Mahnung bezieht sich auf die noch offene Rechnung.",
          "ru": "Требование об оплате относится к ещё не оплаченному счёту.",
          "sense": {
            "ru": "требование об оплате",
            "de": "die Mahnung"
          }
        }
      ],
      "note": {
        "de": "Formelle Zahlungsaufforderung für eine überfällige Rechnung, keine arbeitsrechtliche Abmahnung.",
        "ru": "Официальное требование оплатить просроченный счёт, а не дисциплинарное предупреждение."
      }
    },
    {
      "id": "en:telc26:lastschrift",
      "t": "direct debit",
      "pos": "noun",
      "plural": "direct debits",
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
      "ru": "прямое списание",
      "de": "die Lastschrift",
      "examples": [
        {
          "t": "The invoice is paid by [[direct debit]] under the agreed payment arrangement.",
          "de": "Die Rechnung wird nach der vereinbarten Zahlungsart per Lastschrift bezahlt.",
          "ru": "Счёт оплачивается через прямое списание согласно согласованному способу оплаты.",
          "sense": {
            "ru": "прямое списание",
            "de": "die Lastschrift"
          }
        }
      ],
      "note": {
        "de": "Bei einer Lastschrift veranlasst der Zahlungsempfänger den Einzug auf Grundlage des vereinbarten Mandats.",
        "ru": "Прямое списание: платёж инициирует получатель по согласованному поручению. Здесь не имеется в виду перевод, который плательщик вручную отправляет сам."
      }
    },
    {
      "id": "en:telc26:zahlungserinnerung",
      "t": "payment reminder",
      "pos": "noun",
      "plural": "payment reminders",
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
      "ru": "напоминание об оплате",
      "de": "die Zahlungserinnerung",
      "examples": [
        {
          "t": "Before calling, the accounts team sent a [[payment reminder]].",
          "de": "Vor dem Anruf schickte die Buchhaltung eine Zahlungserinnerung.",
          "ru": "Перед звонком бухгалтерия отправила напоминание об оплате.",
          "sense": {
            "ru": "напоминание об оплате",
            "de": "die Zahlungserinnerung"
          }
        }
      ]
    },
    {
      "id": "en:telc26:faellig",
      "t": "due",
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
      "ru": "подлежащий оплате",
      "de": "fällig",
      "examples": [
        {
          "t": "We have an invoice that is [[due]] on Friday.",
          "de": "Uns liegt eine Rechnung vor, die am Freitag fällig ist.",
          "ru": "У нас есть счёт, подлежащий оплате в пятницу.",
          "sense": {
            "ru": "подлежащий оплате",
            "de": "fällig"
          }
        }
      ]
    },
    {
      "id": "en:telc26:abbuchen",
      "t": "debit",
      "pos": "verb",
      "forms": {
        "praes": "debits",
        "praet": "debited",
        "perf": "has debited"
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
      "ru": "списывать со счёта",
      "de": "abbuchen",
      "examples": [
        {
          "t": "The bank [[debits]] the amount from the account.",
          "de": "Die Bank bucht den Betrag vom Konto ab.",
          "ru": "Банк списывает сумму со счёта.",
          "sense": {
            "ru": "списывать со счёта",
            "de": "abbuchen"
          }
        }
      ]
    },
    {
      "id": "en:telc26:begleichen",
      "t": "settle",
      "pos": "verb",
      "forms": {
        "praes": "settles",
        "praet": "settled",
        "perf": "has settled"
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
      "ru": "оплатить",
      "de": "begleichen",
      "examples": [
        {
          "t": "The customer [[settled]] the invoice yesterday.",
          "de": "Der Kunde beglich die Rechnung gestern.",
          "ru": "Клиент оплатил счёт вчера.",
          "sense": {
            "ru": "оплатить",
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
      "id": "en:telc26:nettoverdienst",
      "t": "net earnings",
      "pos": "noun",
      "plural": "net earnings",
      "note": {
        "ru": "Earnings в этом значении употребляется во множественном числе.",
        "de": "Earnings steht in dieser Bedeutung im Plural."
      },
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
      "ru": "заработок после вычетов",
      "de": "der Nettoverdienst",
      "examples": [
        {
          "t": "The payslip shows the [[net earnings]] after deductions.",
          "de": "Die Abrechnung zeigt den Nettoverdienst nach den Abzügen.",
          "ru": "Расчётный листок показывает заработок после вычетов.",
          "sense": {
            "ru": "заработок после вычетов",
            "de": "der Nettoverdienst"
          }
        }
      ]
    },
    {
      "id": "en:telc26:bruttoverguetung",
      "t": "gross remuneration",
      "pos": "noun",
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
      "ru": "вознаграждение до вычетов",
      "de": "die Bruttovergütung",
      "examples": [
        {
          "t": "The draft contract states the monthly [[gross remuneration]].",
          "de": "Im Entwurf des Vertrags ist die monatliche Bruttovergütung angegeben.",
          "ru": "В проекте договора указано ежемесячное вознаграждение до вычетов.",
          "sense": {
            "ru": "вознаграждение до вычетов",
            "de": "die Bruttovergütung"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:rentenversicherung",
      "t": "pension insurance",
      "pos": "noun",
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
      "ru": "пенсионное страхование",
      "de": "die Rentenversicherung",
      "examples": [
        {
          "t": "The payslip lists a contribution to [[pension insurance]].",
          "de": "Auf der Abrechnung ist ein Beitrag zur Rentenversicherung aufgeführt.",
          "ru": "В расчётном листке указан взнос на пенсионное страхование.",
          "sense": {
            "ru": "пенсионное страхование",
            "de": "die Rentenversicherung"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:pflegeversicherung",
      "t": "long-term care insurance",
      "pos": "noun",
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
      "ru": "страхование на случай потребности в уходе",
      "de": "die Pflegeversicherung",
      "examples": [
        {
          "t": "The documents contain information about [[long-term care insurance]].",
          "de": "Die Unterlagen enthalten Informationen zur Pflegeversicherung.",
          "ru": "В документах есть информация про страхование на случай потребности в уходе.",
          "sense": {
            "ru": "страхование на случай потребности в уходе",
            "de": "die Pflegeversicherung"
          }
        }
      ],
      "note": {
        "ru": "В этом значении обычно неисчисляемое.",
        "de": "In dieser Bedeutung meist unzählbar."
      }
    },
    {
      "id": "en:telc26:einbehalten",
      "t": "withhold",
      "pos": "verb",
      "forms": {
        "praes": "withholds",
        "praet": "withheld",
        "perf": "has withheld"
      },
      "level": "B2",
      "sourceRefs": [
        {
          "title": "Einfach besser! 500 Deutsch für Berufssprachkurse B2",
          "file": "Einfach_besser_500_Wortschatzliste_Englisch.pdf",
          "page": 36,
          "headword": "einbehalten",
          "selection": "telc-b2-2026-11-26"
        }
      ],
      "ru": "удержать",
      "de": "einbehalten",
      "examples": [
        {
          "t": "The bank [[withheld]] a fee.",
          "de": "Die Bank behielt eine Gebühr ein.",
          "ru": "Банк удержал комиссию.",
          "sense": {
            "ru": "удержать",
            "de": "einbehalten"
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
      "id": "en:telc26:werkvertrag",
      "t": "contract for work and services",
      "pos": "noun",
      "plural": "contracts for work and services",
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
      "ru": "договор подряда",
      "de": "der Werkvertrag",
      "examples": [
        {
          "t": "The [[contract for work and services]] describes the agreed result.",
          "de": "Der Werkvertrag beschreibt das vereinbarte Arbeitsergebnis.",
          "ru": "Договор подряда описывает согласованный результат работы.",
          "sense": {
            "ru": "договор подряда",
            "de": "der Werkvertrag"
          }
        }
      ]
    },
    {
      "id": "en:telc26:bedingungen",
      "t": "terms of delivery and payment",
      "pos": "noun",
      "plural": "terms of delivery and payment",
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
      "ru": "условия поставки и оплаты",
      "de": "die Liefer- und Zahlungsbedingungen",
      "examples": [
        {
          "t": "Please check the [[terms of delivery and payment]] before placing the order.",
          "de": "Bitte prüfen Sie die Liefer- und Zahlungsbedingungen vor der Bestellung.",
          "ru": "Пожалуйста, проверьте условия поставки и оплаты перед заказом.",
          "sense": {
            "ru": "условия поставки и оплаты",
            "de": "die Liefer- und Zahlungsbedingungen"
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
      "id": "en:telc26:usb-anschluss",
      "t": "USB port",
      "pos": "noun",
      "plural": "USB ports",
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
      "ru": "USB-порт",
      "de": "der USB-Anschluss",
      "examples": [
        {
          "t": "The [[USB port]] on the front is available.",
          "de": "Der USB-Anschluss an der Vorderseite ist frei.",
          "ru": "USB-порт на передней панели свободен.",
          "sense": {
            "ru": "USB-порт",
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
      "id": "en:telc26:teamfaehig",
      "t": "able to work in a team",
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
      "ru": "умеющий работать в команде",
      "de": "teamfähig",
      "examples": [
        {
          "t": "For this role, you need to be [[able to work in a team]].",
          "de": "Für diese Aufgabe sollte man teamfähig sein.",
          "ru": "Для этой роли нужен сотрудник, умеющий работать в команде.",
          "sense": {
            "ru": "умеющий работать в команде",
            "de": "teamfähig"
          }
        }
      ]
    },
    {
      "id": "en:telc26:gewissenhaft",
      "t": "conscientious",
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
      "ru": "добросовестный",
      "de": "gewissenhaft",
      "examples": [
        {
          "t": "A [[conscientious]] review prevents many follow-up questions.",
          "de": "Eine gewissenhafte Prüfung verhindert viele Rückfragen.",
          "ru": "Добросовестная проверка помогает избежать многих дополнительных вопросов.",
          "sense": {
            "ru": "добросовестный",
            "de": "gewissenhaft"
          }
        }
      ]
    }
  ]
});

/* === Content expansion 2026-11-27 (EN Professional) === */
(function () {
  'use strict';
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, plural) {
    var o = { id: 'en:x27:pro:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true };
    if (plural) o.plural = plural;
    return o;
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('bureau_offices', [
    W('advice-centre', 'noun', 'advice centre', 'B1', 'консультационный центр', 'die Beratungsstelle',
      ex('The municipal [[advice centre]] helps newcomers sort out permit paperwork.', 'Муниципальный консультационный центр помогает приезжим разобраться с бумагами на разрешение.', 'Die städtische Beratungsstelle hilft Neuzugezogenen bei den Anträgen.'), 'advice centres'),
    W('work-permit', 'noun', 'work permit', 'B1', 'разрешение на работу', 'die Arbeitserlaubnis',
      ex('HR cannot activate the contract until your [[work permit]] arrives.', 'Отдел кадров не сможет активировать договор, пока не придёт разрешение на работу.', 'Die Personalabteilung kann den Vertrag erst nach Vorlage der Arbeitserlaubnis freigeben.'), 'work permits'),
    W('case-officer', 'noun', 'case officer', 'B2', 'специалист ведомства, ведущий дело', 'der Sachbearbeiter',
      ex('The [[case officer]] asked for one more stamped copy before final approval.', 'Сотрудник ведомства запросил ещё одну заверенную копию перед финальным одобрением.', 'Der Sachbearbeiter bat vor der endgültigen Genehmigung um eine weitere beglaubigte Kopie.'), 'case officers')
  ]);

  reg('bureau_docs', [
    W('marriage-certificate', 'noun', 'marriage certificate', 'B1', 'свидетельство о браке', 'die Eheurkunde',
      ex('Attach a certified translation of your [[marriage certificate]] to the file.', 'Приложите к пакету документов заверенный перевод свидетельства о браке.', 'Fügen Sie der Akte eine beglaubigte Übersetzung Ihrer Eheurkunde bei.'), 'marriage certificates'),
    W('tax-number', 'noun', 'tax number', 'B1', 'налоговый номер', 'die Steuernummer',
      ex('Every freelance invoice must show your official [[tax number]].', 'Каждый счёт от фрилансера должен содержать ваш официальный налоговый номер.', 'Jede Freelancer-Rechnung muss Ihre amtliche Steuernummer enthalten.'), 'tax numbers'),
    W('bank-statement', 'noun', 'bank statement', 'B1', 'банковская выписка', 'der Kontoauszug',
      ex('Download the latest [[bank statement]] as proof of the paid deposit.', 'Скачайте свежую банковскую выписку как подтверждение оплаты залога.', 'Laden Sie den aktuellen Kontoauszug als Nachweis für die gezahlte Kaution herunter.'), 'bank statements')
  ]);

  reg('bureau_tax', [
    W('tax-office', 'noun', 'tax office', 'B1', 'налоговая инспекция', 'das Finanzamt',
      ex('The [[tax office]] sends annual assessments by post unless you opt in online.', 'Налоговая отправляет ежегодные уведомления почтой, если вы не выбрали онлайн-формат.', 'Das Finanzamt verschickt jährliche Bescheide per Post, sofern man nicht online zustimmt.'), 'tax offices'),
    W('gross-salary', 'noun', 'gross salary', 'B2', 'зарплата до вычета налогов (брутто)', 'das Bruttogehalt',
      ex('Job adverts usually quote the annual [[gross salary]] before deductions.', 'В вакансиях обычно указывают годовую зарплату брутто до вычетов.', 'Stellenanzeigen nennen meist das jährliche Bruttogehalt vor Abzügen.')),
    W('net-salary', 'noun', 'net salary', 'B2', 'зарплата на руки (нетто)', 'das Nettogehalt',
      ex('After taxes and health contributions, his [[net salary]] is easier to budget with.', 'После налогов и медвзносов бюджет проще планировать по зарплате нетто.', 'Nach Steuern und Krankenkassenbeiträgen lässt sich mit dem Nettogehalt leichter planen.')),
    W('hourly-wage', 'noun', 'hourly wage', 'B1', 'почасовая оплата', 'der Stundenlohn',
      ex('Part-time staff are paid an agreed [[hourly wage]] plus weekend extras.', 'Сотрудникам на неполной ставке платят согласованную почасовую ставку плюс доплату за выходные.', 'Teilzeitkräfte erhalten einen vereinbarten Stundenlohn plus Wochenendzuschläge.'), 'hourly wages')
  ]);

  reg('legal_ip', [
    W('trademark-infringement', 'noun', 'trademark infringement', 'C1', 'нарушение прав на товарный знак', 'die Markenrechtsverletzung',
      ex('Using a lookalike logo triggered a claim for [[trademark infringement]].', 'Использование похожего логотипа привело к претензии о нарушении прав на товарный знак.', 'Die Nutzung eines ähnlichen Logos löste eine Klage wegen Markenrechtsverletzung aus.')),
    W('licensing-fee', 'noun', 'licensing fee', 'B2', 'лицензионный сбор, плата за лицензию', 'die Lizenzgebühr',
      ex('The illustrator receives a [[licensing fee]] for each commercial print run.', 'Иллюстратор получает лицензионный сбор за каждый коммерческий тираж.', 'Die Illustratorin erhält eine Lizenzgebühr für jede kommerzielle Auflage.'), 'licensing fees'),
    W('prior-art', 'noun', 'prior art', 'C1', 'уровень техники, более ранние аналоги (патентное право)', 'der Stand der Technik',
      ex('Patent examiners search [[prior art]] before granting exclusive rights.', 'Патентные эксперты проверяют уже известные аналоги перед выдачей исключительных прав.', 'Patentprüfer sichten den Stand der Technik, bevor sie Schutzrechte erteilen.'))
  ]);

  reg('legal_criminal', [
    W('court-summons', 'noun', 'court summons', 'C1', 'судебная повестка', 'die gerichtliche Vorladung',
      ex('The witness received an official [[court summons]] two weeks before the trial.', 'Свидетель получил официальную судебную повестку за две недели до процесса.', 'Der Zeuge erhielt zwei Wochen vor dem Prozess eine gerichtliche Vorladung.'), 'court summonses'),
    W('plea', 'noun', 'plea', 'C1', 'заявление подсудимого о виновности/невиновности; ходатайство', 'das Plädoyer; das Schuldbekenntnis',
      ex('His lawyer entered a not-guilty [[plea]] at the start of the hearing.', 'Его адвокат заявил о невиновности в начале слушания.', 'Sein Anwalt plädierte zu Beginn der Verhandlung auf nicht schuldig.'), 'pleas'),
    W('alibi', 'noun', 'alibi', 'B2', 'алиби', 'das Alibi',
      ex('Badge records from the office confirmed her [[alibi]] for that evening.', 'Записи пропусков в офисе подтвердили её алиби на тот вечер.', 'Zugangsdaten aus dem Büro bestätigten ihr Alibi für jenen Abend.'), 'alibis')
  ]);

  reg('legal_labour', [
    W('parental-leave', 'noun', 'parental leave', 'B2', 'отпуск по уходу за ребёнком', 'die Elternzeit',
      ex('Both parents are entitled to take [[parental leave]] during the first year.', 'Оба родителя имеют право взять отпуск по уходу за ребёнком в первый год.', 'Beide Elternteile haben Anspruch auf Elternzeit im ersten Jahr.')),
    W('reprimand', 'noun', 'reprimand', 'B2', 'выговор, официальное предупреждение', 'die Abmahnung, Verwarnung',
      ex('Repeatedly ignoring safety gear leads to a formal written [[reprimand]].', 'Систематическое игнорирование защитной экипировки ведёт к официальному выговору.', 'Wiederholtes Ignorieren von Schutzkleidung führt zu einer schriftlichen Abmahnung.'), 'reprimands'),
    W('misconduct', 'noun', 'misconduct', 'B2', 'должностной проступок, нарушение дисциплины', 'das Fehlverhalten',
      ex('Sharing client records externally counts as gross [[misconduct]].', 'Передача клиентских данных вовне считается грубым должностным проступком.', 'Die Weitergabe von Kundendaten nach außen gilt als grobes Fehlverhalten.'))
  ]);

  reg('fin_hr', [
    W('supervisor', 'noun', 'supervisor', 'B1', 'непосредственный руководитель, супервайзер', 'der Vorgesetzte',
      ex('Let your [[supervisor]] know early if a task blocks the rest of the shift.', 'Заранее предупредите руководителя, если задача тормозит остальную смену.', 'Informieren Sie Ihre Vorgesetzte frühzeitig, falls eine Aufgabe den Schichtablauf blockiert.'), 'supervisors'),
    W('successor', 'noun', 'successor', 'B2', 'преемник', 'der Nachfolger',
      ex('She spent two months training her [[successor]] before moving abroad.', 'Она два месяца готовила своего преемника перед переездом за границу.', 'Sie arbeitete ihren Nachfolger zwei Monate lang ein, bevor sie ins Ausland ging.'), 'successors'),
    W('intern', 'noun', 'intern', 'B1', 'стажёр', 'der Praktikant',
      ex('Our summer [[intern]] helped automate the weekly test report.', 'Наш летний стажёр помог автоматизировать еженедельный отчёт по тестам.', 'Unser Sommerpraktikant half dabei, den wöchentlichen Testbericht zu automatisieren.'), 'interns')
  ]);

  reg('fin_marketing', [
    W('brochure', 'noun', 'brochure', 'B1', 'брошюра, буклет', 'die Broschüre',
      ex('Pick up a printed [[brochure]] with full pricing at our stand.', 'Возьмите на нашем стенде печатную брошюру с полным прайс-листом.', 'Nehmen Sie an unserem Stand eine gedruckte Broschüre mit allen Preisen mit.'), 'brochures'),
    W('press-kit', 'noun', 'press kit', 'B2', 'пресс-кит (материалы для СМИ)', 'die Pressemappe',
      ex('Journalists can download logos and photos from our online [[press kit]].', 'Журналисты могут скачать логотипы и фото из нашего онлайн-пресс-кита.', 'Journalisten können Logos und Fotos aus unserer Online-Pressemappe herunterladen.'), 'press kits'),
    W('brand-awareness', 'noun', 'brand awareness', 'B2', 'узнаваемость бренда', 'die Markenbekanntheit',
      ex('Sponsoring local workshops steadily grew [[brand awareness]].', 'Спонсорство локальных воркшопов постепенно повысило узнаваемость бренда.', 'Das Sponsoring lokaler Workshops steigerte die Markenbekanntheit stetig.'))
  ]);

  reg('svc_hotel', [
    W('front-desk', 'noun', 'front desk', 'B1', 'стойка регистрации, ресепшен', 'die Rezeption',
      ex('Leave your room key at the [[front desk]] if you check out before seven.', 'Оставьте ключ от номера на ресепшене, если выезжаете до семи утра.', 'Geben Sie Ihren Zimmerschlüssel an der Rezeption ab, wenn Sie vor sieben Uhr auschecken.'), 'front desks'),
    W('check-in', 'noun', 'check-in', 'B1', 'регистрация заезда', 'der Check-in, die Anmeldung',
      ex('Online [[check-in]] cuts waiting time at the reception desk in half.', 'Онлайн-регистрация заезда вдвое сокращает ожидание на стойке.', 'Der Online-Check-in halbiert die Wartezeit an der Rezeption.'), 'check-ins'),
    W('room-upgrade', 'noun', 'room upgrade', 'B2', 'повышение категории номера', 'das Zimmer-Upgrade',
      ex('To resolve the overbooking, the clerk offered a free [[room upgrade]].', 'Чтобы решить проблему овербукинга, администратор предложил бесплатное повышение категории номера.', 'Um die Überbuchung zu lösen, bot der Mitarbeiter ein kostenloses Zimmer-Upgrade an.'), 'room upgrades')
  ]);

  reg('svc_gastro', [
    W('food-allergen', 'noun', 'food allergen', 'B2', 'пищевой аллерген', 'das Lebensmittelallergen',
      ex('Staff must list every [[food allergen]] clearly on the banquet card.', 'Персонал должен чётко указать каждый пищевой аллерген в банкетном меню.', 'Das Personal muss jedes Lebensmittelallergen deutlich auf der Menükarte vermerken.'), 'food allergens'),
    W('table-service', 'noun', 'table service', 'B1', 'обслуживание за столиками', 'der Tischservice',
      ex('After five p.m. the bistro switches from counter orders to full [[table service]].', 'После пяти вечера бистро переходит от заказов у стойки к полному обслуживанию за столиками.', 'Ab siebzehn Uhr stellt das Bistro von Thekenbestellung auf vollen Tischservice um.')),
    W('catering-order', 'noun', 'catering order', 'B2', 'заказ на кейтеринг', 'der Catering-Auftrag',
      ex('Confirm guest numbers forty-eight hours before a large [[catering order]].', 'Подтверждайте число гостей за сорок восемь часов до крупного заказа на кейтеринг.', 'Bestätigen Sie die Gästezahl achtundvierzig Stunden vor einem großen Catering-Auftrag.'), 'catering orders')
  ]);

  reg('med_clinical', [
    W('outpatient', 'adj', 'outpatient', 'B2', 'амбулаторный', 'ambulant',
      ex('The minor procedure is handled on an [[outpatient]] basis without a hospital stay.', 'Небольшая процедура проводится амбулаторно, без госпитализации.', 'Der kleine Eingriff erfolgt ambulant ohne Krankenhausaufenthalt.')),
    W('inpatient', 'adj', 'inpatient', 'B2', 'стационарный (с госпитализацией)', 'stationär',
      ex('Patients recovering from surgery stay under [[inpatient]] observation for three days.', 'Пациенты после операции остаются под стационарным наблюдением три дня.', 'Patienten bleiben nach der Operation drei Tage zur stationären Beobachtung.')),
    W('emergency-service', 'noun', 'emergency service', 'B1', 'служба экстренной помощи', 'der Rettungsdienst, Notdienst',
      ex('Call the [[emergency service]] immediately if a colleague shows signs of shock.', 'Немедленно вызывайте скорую помощь, если у коллеги признаки шока.', 'Rufen Sie sofort den Rettungsdienst, wenn ein Kollege Anzeichen eines Schocks zeigt.'), 'emergency services')
  ]);
})();

/* === Content expansion Wave 2 (2026-11-27): +36 EN Pro terms (thin legal & service topics) === */
(function () {
  'use strict';
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, plural) {
    var o = { id: 'en:w2:pro:' + id, pos: pos, t: t, level: level, learnable: true, ru: ru, de: de, examples: [e] };
    if (plural) o.plural = plural;
    return o;
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('legal_corporate', [
    W('articles-of-association', 'noun', 'bylaws', 'C1', 'внутренний устав, регламент организации', 'die Satzung, Geschäftsordnung',
      ex('Any change to the corporate [[bylaws]] requires a two-thirds vote.', 'Любое изменение корпоративного регламента требует двух третей голосов.', 'Jede Änderung der Geschäftsordnung bedarf einer Zweidrittelmehrheit.')),
    W('managing-director', 'noun', 'managing director', 'B2', 'управляющий директор', 'der Geschäftsführer',
      ex('The [[managing director]] signs all leases above fifty thousand euros.', 'Управляющий директор подписывает все договоры аренды свыше пятидесяти тысяч евро.', 'Der Geschäftsführer unterzeichnet alle Mietverträge über fünfzigtausend Euro.'), 'managing directors'),
    W('commercial-register', 'noun', 'commercial register', 'B2', 'торговый реестр', 'das Handelsregister',
      ex('Newly appointed board members appear in the [[commercial register]].', 'Новые члены правления вносятся в торговый реестр.', 'Neu bestellte Vorstände erscheinen im Handelsregister.'), 'commercial registers'),
    W('fiduciary-duty', 'noun', 'shareholding', 'C1', 'доля акций, долевое участие в компании', 'die Beteiligung, der Aktienanteil',
      ex('The founders retained a majority [[shareholding]] after the second funding round.', 'Основатели сохранили контрольную долю участия после второго раунда инвестиций.', 'Die Gründer behielten nach der zweiten Finanzierungsrunde eine Mehrheitsbeteiligung.'), 'shareholdings'),
    W('whistleblower', 'noun', 'audit committee', 'C1', 'комитет по внутреннему аудиту', 'der Prüfungsausschuss',
      ex('The independent [[audit committee]] reviews quarterly risk reports.', 'Независимый комитет по аудиту проверяет квартальные отчёты о рисках.', 'Der unabhängige Prüfungsausschuss prüft die vierteljährlichen Risikoberichte.'), 'audit committees'),
    W('merger', 'noun', 'merger', 'B2', 'слияние (компаний)', 'die Fusion, der Zusammenschluss',
      ex('Competition authorities reviewed the proposed bank [[merger]].', 'Антимонопольные органы рассмотрели планируемое слияние банков.', 'Die Wettbewerbsbehörden prüften die geplante Bankenfusion.'), 'mergers')
  ]);

  reg('legal_contracts', [
    W('force-majeure', 'noun', 'rescission', 'C1', 'расторжение договора с возвратом сторон в исходное положение', 'der Rücktritt vom Vertrag, die Aufhebung',
      ex('Material misrepresentation entitles the buyer to contract [[rescission]].', 'Существенное искажение фактов даёт покупателю право на расторжение договора.', 'Wesentliche Täuschung berechtigt den Käufer zum Vertragsrücktritt.')),
    W('contractual-penalty', 'noun', 'contractual penalty', 'C1', 'договорная неустойка, штраф', 'die Vertragsstrafe',
      ex('Delays exceeding ten days trigger a daily [[contractual penalty]].', 'Задержка более десяти дней включает ежедневную договорную неустойку.', 'Verzögerungen von über zehn Tagen lösen eine tägliche Vertragsstrafe aus.'), 'contractual penalties'),
    W('severability-clause', 'noun', 'retention clause', 'C1', 'оговорка о сохранении права собственности до полной оплаты', 'die Eigentumsvorbehaltsklausel',
      ex('Under the [[retention clause]], goods remain seller property until settled in full.', 'Согласно оговорке о сохранении права собственности, товар остаётся у продавца до полной оплаты.', 'Nach der Vorbehaltsklausel bleibt die Ware bis zur vollständigen Zahlung Eigentum des Verkäufers.'), 'retention clauses'),
    W('indemnify', 'verb', 'assign', 'C1', 'переуступать, передавать права или обязанности по договору', 'abtreten, übertragen',
      ex('Neither party may [[assign]] its payment rights without written approval.', 'Ни одна из сторон не вправе уступать свои права требования без письменного согласия.', 'Keine Partei darf Forderungen ohne schriftliche Zustimmung abtreten.')),
    W('waive', 'verb', 'waive', 'C1', 'добровольно отказываться от права / требования', 'verzichten auf',
      ex('The bank agreed to [[waive]] the late fee as a goodwill gesture.', 'Банк согласился отменить комиссию за просрочку в качестве жеста доброй воли.', 'Die Bank verzichtete aus Kulanz auf die Verzugsgebühr.')),
    W('binding', 'adj', 'legally binding', 'B2', 'юридически обязывающий', 'rechtsverbindlich',
      ex('Verbal quotes are advisory; only a signed order is [[legally binding]].', 'Устные оценки носят предварительный характер; обязывает только подписанный заказ.', 'Mündliche Preise sind unverbindlich; nur ein unterschriebener Auftrag ist rechtsverbindlich.'))
  ]);

  reg('legal_ip', [
    W('licensing-agreement', 'noun', 'licensing agreement', 'B2', 'лицензионное соглашение', 'der Lizenzvertrag',
      ex('Our [[licensing agreement]] covers commercial deployment across Europe.', 'Наше лицензионное соглашение охватывает коммерческое внедрение в Европе.', 'Unser Lizenzvertrag deckt die kommerzielle Nutzung in Europa ab.'), 'licensing agreements'),
    W('cease-and-desist', 'noun', 'injunction', 'C1', 'судебный запрет (обеспечительная мера)', 'die einstweilige Verfügung',
      ex('The court issued an urgent [[injunction]] halting sales of the copied device.', 'Суд вынес срочный запрет, остановивший продажи скопированного прибора.', 'Das Gericht erließ eine einstweilige Verfügung gegen den Verkauf des kopierten Geräts.'), 'injunctions'),
    W('infringement', 'noun', 'infringement', 'C1', 'нарушение (прав, патента)', 'die Rechtsverletzung, der Verstoß',
      ex('Selling counterfeit parts constitutes a clear trademark [[infringement]].', 'Продажа поддельных деталей является прямым нарушением прав на товарный знак.', 'Der Verkauf gefälschter Teile stellt eine klare Markenrechtsverletzung dar.'), 'infringements'),
    W('public-domain', 'noun', 'royalty fee', 'B2', 'роялти, лицензионный платёж автору', 'die Lizenzgebühr, Tantieme',
      ex('Each textbook reprint earns the illustrator a small [[royalty fee]].', 'С каждого переиздания учебника иллюстратор получает небольшое роялти.', 'Bei jeder Neuauflage erhält der Illustrator eine kleine Lizenzgebühr.'), 'royalty fees'),
    W('proprietary', 'adj', 'proprietary', 'C1', 'запатентованный, проприетарный, принадлежащий компании', 'urheberrechtlich geschützt, proprietär',
      ex('Never upload [[proprietary]] source code to unapproved external tools.', 'Никогда не загружайте закрытый исходный код в несогласованные внешние сервисы.', 'Laden Sie niemals proprietären Quellcode in ungeprüfte externe Tools hoch.')),
    W('plagiarise', 'verb', 'plagiarise', 'B2', 'заниматься плагиатом, присваивать чужой текст', 'plagiieren',
      ex('Training manuals must cite sources rather than [[plagiarise]] competitor guides.', 'Учебные пособия должны указывать источники, а не копировать чужие инструкции.', 'Handbücher müssen Quellen nennen statt Konkurrenztexte zu plagiieren.'))
  ]);

  reg('legal_criminal', [
    W('prosecutor', 'noun', 'public prosecutor', 'B2', 'прокурор, государственный обвинитель', 'der Staatsanwalt',
      ex('The [[public prosecutor]] presented bank transfers from three shell firms.', 'Прокурор представил банковские переводы с трёх подставных фирм.', 'Die Staatsanwaltschaft legte Überweisungen dreier Briefkastenfirmen vor.'), 'public prosecutors'),
    W('acquittal', 'noun', 'parole', 'C1', 'условно-досрочное освобождение', 'die vorzeitige Haftentlassung auf Bewährung',
      ex('The inmate became eligible for supervised [[parole]] after completing rehabilitation.', 'Заключённый получил право на условно-досрочное освобождение после программы реабилитации.', 'Der Häftling erfüllte nach der Resozialisierung die Voraussetzungen für Haftentlassung auf Bewährung.')),
    W('suspended-sentence', 'noun', 'suspended sentence', 'C1', 'условный срок', 'die Bewährungsstrafe',
      ex('First-time tax offenders often receive a [[suspended sentence]] plus a fine.', 'При первом налоговом нарушении часто назначают условный срок и штраф.', 'Ersttäter bei Steuervergehen erhalten oft eine Bewährungsstrafe plus Geldstrafe.'), 'suspended sentences'),
    W('plea', 'noun', 'testimony', 'B2', 'свидетельские показания', 'die Zeugenaussage',
      ex('Eyewitness [[testimony]] matched the timestamp on the security footage.', 'Показания очевидца совпали со временем на записи камеры наблюдения.', 'Die Zeugenaussage deckte sich mit dem Zeitstempel der Überwachungskamera.'), 'testimonies'),
    W('custody', 'noun', 'subpoena', 'C1', 'судебная повестка / требование о предоставлении документов', 'die gerichtliche Vorladung',
      ex('Accounting received a formal [[subpoena]] to produce five years of ledgers.', 'Бухгалтерия получила судебную повестку с требованием предоставить книги за пять лет.', 'Die Buchhaltung erhielt eine gerichtliche Vorladung zur Vorlage von fünf Jahresbüchern.'), 'subpoenas'),
    W('embezzle', 'verb', 'embezzle', 'C1', 'присваивать / растрачивать (вверенные деньги)', 'veruntreuen, unterschlagen',
      ex('Internal audit rules make it much harder to [[embezzle]] petty cash.', 'Правила внутреннего аудита значительно усложняют растрату наличных средств.', 'Interne Revisionsregeln erschweren es erheblich, Kassenmittel zu veruntreuen.'))
  ]);

  reg('svc_hotel', [
    W('overbooking', 'noun', 'express checkout', 'B1', 'экспресс-выезд (без очереди на ресепшене)', 'der Express-Check-out',
      ex('Guests with an emailed invoice can use the lobby [[express checkout]] box.', 'Гости с электронным счётом могут воспользоваться ящиком экспресс-выезда в холле.', 'Gäste mit elektronischer Rechnung können den Express-Check-out nutzen.')),
    W('concierge', 'noun', 'valet parking', 'B2', 'услуга парковки автомобиля сотрудником отеля', 'der Parkservice',
      ex('Hotel [[valet parking]] drops your car back at the entrance within five minutes.', 'Парковщик отеля подаст вашу машину ко входу за пять минут.', 'Der Parkservice des Hotels bringt Ihr Auto binnen fünf Minuten zum Eingang.')),
    W('late-checkout', 'noun', 'luggage storage', 'B1', 'камера хранения багажа', 'die Gepäckaufbewahrung',
      ex('Free [[luggage storage]] lets early arrivals explore the old town hands-free.', 'Бесплатная камера хранения позволяет приехавшим пораньше гулять по городу налегке.', 'Kostenlose Gepäckaufbewahrung lässt Frühankommende unbeschwert die Altstadt erkunden.')),
    W('housekeeping', 'noun', 'bed and breakfast', 'B1', 'мини-отель / тариф «ночлег и завтрак»', 'Übernachtung mit Frühstück',
      ex('We booked a quiet family-run [[bed and breakfast]] near the harbour.', 'Мы забронировали тихий семейный мини-отель типа «ночлег и завтрак» у гавани.', 'Wir buchten eine ruhige Pension mit Frühstück nahe dem Hafen.')),
    W('no-show', 'noun', 'doorman', 'B1', 'швейцар, портье у входа', 'der Portier, Türsteher',
      ex('The evening [[doorman]] hailed a licensed taxi during the downpour.', 'Вечерний швейцар поймал официальное такси во время ливня.', 'Der Abendportier rief während des Platzregens ein lizenziertes Taxi.'), 'doormen'),
    W('tourist-tax', 'noun', 'tourist tax', 'B1', 'туристический / курортный налог', 'die Kurtaxe',
      ex('The municipal [[tourist tax]] is payable at reception upon departure.', 'Муниципальный туристический сбор оплачивается на ресепшене при выезде.', 'Die städtische Kurtaxe wird bei Abreise an der Rezeption gezahlt.'), 'tourist taxes')
  ]);

  reg('svc_gastro', [
    W('dietary-requirement', 'noun', 'side dish', 'B1', 'гарнир', 'die Beilage',
      ex('Roasted greens come as a complimentary [[side dish]] with every main course.', 'Запечённые овощи подаются как бесплатный гарнир к каждому горячему блюду.', 'Ofengemüse gibt es als kostenlose Beilage zu jedem Hauptgericht.'), 'side dishes'),
    W('food-intolerance', 'noun', 'food intolerance', 'B2', 'пищевая непереносимость', 'die Lebensmittelunverträglichkeit',
      ex('Lactose [[food intolerance]] is flagged clearly beside each cream sauce.', 'Непереносимость лактозы чётко отмечена рядом с каждым сливочным соусом.', 'Laktose-Unverträglichkeit ist neben jeder Sahnesoße deutlich vermerkt.'), 'food intolerances'),
    W('daily-special', 'noun', 'daily special', 'B1', 'блюдо дня', 'das Tagesgericht',
      ex('The waiter wrote three seasonal [[daily specials]] on the chalkboard.', 'Официант написал мелом на доске три сезонных блюда дня.', 'Der Kellner schrieb drei saisonale Tagesgerichte auf die Kreidetafel.'), 'daily specials'),
    W('waiting-staff', 'noun', 'waiting staff', 'B2', 'обслуживающий персонал (официанты)', 'das Servicepersonal',
      ex('Brief [[waiting staff]] on new menu ingredients before the lunch rush.', 'Проведите инструктаж официантов по составу новых блюд до обеденного наплыва.', 'Unterweisen Sie das Servicepersonal vor dem Mittagsandrang über neue Zutaten.')),
    W('corkage-fee', 'noun', 'set menu', 'B2', 'комплексное меню, сет из нескольких перемен', 'das Festmenü, Tagesmenü',
      ex('On Sundays the kitchen offers a three-course [[set menu]] at a fixed price.', 'По воскресеньям кухня предлагает сет-меню из трёх блюд по фиксированной цене.', 'Sonntags bietet die Küche ein dreigängiges Festmenü zum Festpreis.'), 'set menus'),
    W('settle-the-bill', 'verb', 'settle the bill', 'B1', 'оплатить счёт, рассчитаться', 'die Rechnung begleichen',
      ex('Can we [[settle the bill]] at the bar before our taxi arrives?', 'Можно оплатить счёт у стойки до того, как приедет такси?', 'Können wir die Rechnung an der Bar begleichen, bevor das Taxi kommt?'))
  ]);
})();
