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
