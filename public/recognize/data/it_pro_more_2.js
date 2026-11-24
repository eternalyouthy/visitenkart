/* German Professional · third batch (10 per topic × 6 Pro topics = 60 cards; B1, B2 and C1).
 * Checked against existing inventory for zero duplicates. Original examples and translations (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(id, o, note, lvl) {
    o.id = 'pro-m3-' + id;
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

  reg('workcomm', [
    N('meilenstein', 'der', 'Meilenstein', 'die Meilensteine', 'веха, ключевой этап проекта', 'milestone',
      ex('Den ersten [[Meilenstein]] erreichen wir planmäßig am Monatsende.', 'Первого ключевого этапа мы достигнем по плану в конце месяца.', 'We’ll reach the first milestone on schedule at the end of the month.'), null, 'b2'),
    N('eskalation', 'die', 'Eskalation', 'die Eskalationen', 'эскалация (передача проблемы на уровень выше)', 'escalation',
      ex('Ohne Antwort vom Anbieter bleibt nur die [[Eskalation]] an die Teamleitung.', 'Без ответа от поставщика остаётся только эскалация на уровень тимлида.', 'Without a reply from the vendor, the only option is escalation to team management.'), null, 'c1'),
    N('machbarkeit', 'die', 'Machbarkeit', '', 'осуществимость, техническая реализуемость', 'feasibility',
      ex('Vor dem Kick-off prüfen wir die technische [[Machbarkeit]].', 'Перед кик-оффом мы проверим техническую реализуемость.', 'Before kick-off we’ll check the technical feasibility.'), null, 'b2'),
    N('abwesenheitsnotiz', 'die', 'Abwesenheitsnotiz', 'die Abwesenheitsnotizen', 'автоответ об отсутствии («out of office»)', 'out-of-office reply',
      ex('Vergiss nicht, vor dem Urlaub deine [[Abwesenheitsnotiz]] einzuschalten.', 'Не забудь включить автоответ перед отпуском.', 'Don’t forget to turn on your out-of-office reply before going on holiday.'), null, 'b1'),
    N('aufwandsschaetzung', 'die', 'Aufwandsschätzung', 'die Aufwandsschätzungen', 'оценка трудозатрат', 'effort estimate',
      ex('Für die [[Aufwandsschätzung]] fehlen uns noch die genauen Anforderungen.', 'Для оценки трудозатрат нам пока не хватает точных требований.', 'We still lack exact requirements for the effort estimate.'), null, 'c1'),
    N('handlungsbedarf', 'der', 'Handlungsbedarf', '', 'необходимость срочных действий', 'need for action',
      ex('Der Auditbericht zeigt klaren [[Handlungsbedarf]] beim Rechtemanagement.', 'Отчёт об аудите показывает явную необходимость действий в управлении правами.', 'The audit report shows a clear need for action in access management.'), null, 'c1'),
    N('entscheidungstraeger', 'der', 'Entscheidungsträger', 'die Entscheidungsträger', 'лицо, принимающее решения', 'decision-maker',
      ex('Bei diesem Termin sitzen alle wichtigen [[Entscheidungsträger]] mit am Tisch.', 'На этой встрече за столом сидят все ключевые лица, принимающие решения.', 'All key decision-makers are at the table for this meeting.'), null, 'c1'),
    N('vorgehensweise', 'die', 'Vorgehensweise', 'die Vorgehensweisen', 'порядок действий, подход к решению', 'approach, procedure',
      ex('Unsere gemeinsame [[Vorgehensweise]] halten wir kurz schriftlich fest.', 'Наш общий порядок действий мы коротко зафиксируем письменно.', 'We’ll briefly record our joint approach in writing.'), null, 'b2'),
    N('klaerungsbedarf', 'der', 'Klärungsbedarf', '', 'необходимость уточнений / прояснения', 'need for clarification',
      ex('Bei den Lieferfristen besteht noch [[Klärungsbedarf]].', 'По срокам поставки ещё требуются уточнения.', 'There is still a need for clarification regarding delivery deadlines.'), null, 'c1'),
    V('priorisieren', 'priorisieren', ['priorisiert', 'priorisierte', 'hat priorisiert'], '+ Akk.', 'расставлять приоритеты', 'to prioritise',
      ex('Wir müssen die offenen Sicherheitsaufgaben neu [[priorisieren]].', 'Нам нужно заново расставить приоритеты по открытым задачам безопасности.', 'We need to reprioritise the open security tasks.'), null, 'b2')
  ]);

  reg('dev', [
    N('laufzeitfehler', 'der', 'Laufzeitfehler', 'die Laufzeitfehler', 'ошибка времени выполнения (runtime error)', 'runtime error',
      ex('Der Code kompiliert sauber, wirft aber im Betrieb einen [[Laufzeitfehler]].', 'Код компилируется чисто, но в работе выбрасывает ошибку выполнения.', 'The code compiles cleanly, but throws a runtime error in operation.'), null, 'b2'),
    N('speicherleck', 'das', 'Speicherleck', 'die Speicherlecks', 'утечка памяти (memory leak)', 'memory leak',
      ex('Ein [[Speicherleck]] im Worker-Prozess ließ den Dienst jede Nacht abstürzen.', 'Утечка памяти в фоновом процессе приводила к падению сервиса каждую ночь.', 'A memory leak in the worker process made the service crash every night.'), null, 'b2'),
    N('datenstruktur', 'die', 'Datenstruktur', 'die Datenstrukturen', 'структура данных', 'data structure',
      ex('Die Wahl der richtigen [[Datenstruktur]] halbierte die Antwortzeit.', 'Выбор правильной структуры данных вдвое сократил время отклика.', 'Choosing the right data structure halved the response time.'), null, 'b2'),
    N('wartbarkeit', 'die', 'Wartbarkeit', '', 'сопровождаемость, удобство поддержки (кода)', 'maintainability',
      ex('Klare Module verbessern die [[Wartbarkeit]] des gesamten Systems.', 'Чёткие модули повышают удобство поддержки всей системы.', 'Clear modules improve the maintainability of the whole system.'), null, 'c1'),
    N('abwaertskompatibilitaet', 'die', 'Abwärtskompatibilität', '', 'обратная совместимость', 'backward compatibility',
      ex('Beim API-Update müssen wir die [[Abwärtskompatibilität]] wahren.', 'При обновлении API мы должны сохранить обратную совместимость.', 'When updating the API, we must preserve backward compatibility.'), null, 'c1'),
    N('codebasis', 'die', 'Codebasis', '', 'кодовая база', 'codebase',
      ex('In der älteren [[Codebasis]] fehlen an vielen Stellen Unit-Tests.', 'В более старой кодовой базе во многих местах не хватает юнит-тестов.', 'In the older codebase, unit tests are missing in many places.'), null, 'b2'),
    N('ausnahmebehandlung', 'die', 'Ausnahmebehandlung', 'die Ausnahmebehandlungen', 'обработка исключений (try/catch)', 'exception handling',
      ex('Ohne saubere [[Ausnahmebehandlung]] stürzt die App bei Netzwerkfehlern ab.', 'Без аккуратной обработки исключений приложение падает при сетевых сбоях.', 'Without clean exception handling, the app crashes on network errors.'), null, 'c1'),
    N('automatisierung', 'die', 'Automatisierung', 'die Automatisierungen', 'автоматизация', 'automation',
      ex('Durch [[Automatisierung]] sparen wir vor jedem Release mehrere Stunden.', 'Благодаря автоматизации мы экономим несколько часов перед каждым релизом.', 'Through automation we save several hours before every release.'), null, 'b2'),
    N('schaltflaeche', 'die', 'Schaltfläche', 'die Schaltflächen', 'кнопка (в интерфейсе UI)', 'button (UI)',
      ex('Klicken Sie unten rechts auf die blaue [[Schaltfläche]] „Speichern“.', 'Нажмите внизу справа на синюю кнопку «Сохранить».', 'Click the blue “Save” button at the bottom right.'),
      ['В разговорной IT-речи часто просто der Button.', 'In everyday IT speech often simply der Button.'], 'b1'),
    N('abfrage', 'die', 'Abfrage', 'die Abfragen', 'запрос (к базе данных, API)', 'query',
      ex('Eine langsame SQL-[[Abfrage]] blockierte die Startseite.', 'Медленный SQL-запрос заблокировал стартовую страницу.', 'A slow SQL query blocked the start page.'), null, 'b2')
  ]);

  reg('infra', [
    N('ausfallsicherheit', 'die', 'Ausfallsicherheit', '', 'отказоустойчивость', 'resilience, fault tolerance',
      ex('Für kritische Dienste brauchen wir höhere [[Ausfallsicherheit]] über zwei Zonen.', 'Для критичных сервисов нам нужна более высокая отказоустойчивость в двух зонах.', 'For critical services we need higher resilience across two zones.'), null, 'c1'),
    N('rechenleistung', 'die', 'Rechenleistung', '', 'вычислительная мощность', 'computing power',
      ex('Für das Training des Modells reicht unsere aktuelle [[Rechenleistung]] nicht aus.', 'Для обучения модели нашей текущей вычислительной мощности не хватает.', 'Our current computing power is not enough to train the model.'), null, 'b2'),
    N('betriebszeit', 'die', 'Betriebszeit', 'die Betriebszeiten', 'время безотказной работы (uptime); часы работы', 'uptime; operating hours',
      ex('Unser Vertrag garantiert eine [[Betriebszeit]] von 99,9 Prozent.', 'Наш договор гарантирует время работы 99,9 процента.', 'Our contract guarantees an uptime of 99.9 per cent.'), null, 'b2'),
    N('notfallwiederherstellung', 'die', 'Notfallwiederherstellung', '', 'аварийное восстановление (disaster recovery)', 'disaster recovery',
      ex('Einmal im Jahr testen wir den Plan zur [[Notfallwiederherstellung]].', 'Раз в год мы тестируем план аварийного восстановления.', 'Once a year we test our disaster recovery plan.'), null, 'c1'),
    N('zwischenspeicher', 'der', 'Zwischenspeicher', 'die Zwischenspeicher', 'кэш, буфер обмена / промежуточная память', 'cache, buffer',
      ex('Nach dem Leeren des [[Zwischenspeichers]] lud die Seite sofort.', 'После очистки кэша страница загрузилась мгновенно.', 'After clearing the cache, the page loaded immediately.'),
      ['На практике часто говорят просто der Cache.', 'In practice teams often simply say der Cache.'], 'b2'),
    N('datenverkehr', 'der', 'Datenverkehr', '', 'сетевой трафик', 'network traffic',
      ex('Der gesamte [[Datenverkehr]] wird verschlüsselt durch den Tunnel geleitet.', 'Весь трафик передаётся в зашифрованном виде через туннель.', 'All network traffic is routed encrypted through the tunnel.'), null, 'b2'),
    N('skalierbarkeit', 'die', 'Skalierbarkeit', '', 'масштабируемость', 'scalability',
      ex('Die neue Architektur bietet deutlich bessere [[Skalierbarkeit]] bei Lastspitzen.', 'Новая архитектура даёт гораздо лучшую масштабируемость при пиковых нагрузках.', 'The new architecture offers much better scalability during load spikes.'), null, 'c1'),
    N('wartungsfenster', 'das', 'Wartungsfenster', 'die Wartungsfenster', 'окно обслуживания (плановые работы)', 'maintenance window',
      ex('Das [[Wartungsfenster]] findet am Sonntag zwischen 2 und 4 Uhr statt.', 'Окно обслуживания запланировано на воскресенье с 2 до 4 часов.', 'The maintenance window takes place on Sunday between 2 and 4 a.m.'), null, 'b2'),
    N('hochverfuegbarkeit', 'die', 'Hochverfügbarkeit', '', 'высокая доступность (HA)', 'high availability',
      ex('Der Cluster läuft im Modus für [[Hochverfügbarkeit]].', 'Кластер работает в режиме высокой доступности.', 'The cluster runs in high-availability mode.'), null, 'c1'),
    N('auslastungsspitze', 'die', 'Auslastungsspitze', 'die Auslastungsspitzen', 'пик нагрузки', 'load spike, peak load',
      ex('Beim Verkaufsstart gab es eine enorme [[Auslastungsspitze]].', 'На старте продаж произошёл огромный пик нагрузки.', 'At the start of the sale there was an enormous load spike.'), null, 'c1')
  ]);

  reg('security', [
    N('angriffsflaeche', 'die', 'Angriffsfläche', 'die Angriffsflächen', 'поверхность атаки', 'attack surface',
      ex('Jeder offene Port vergrößert unnötig die [[Angriffsfläche]].', 'Каждый открытый порт без нужды увеличивает поверхность атаки.', 'Every open port unnecessarily increases the attack surface.'), null, 'c1'),
    N('berechtigungskonzept', 'das', 'Berechtigungskonzept', 'die Berechtigungskonzepte', 'концепция / матрица прав доступа', 'access control concept, permissions model',
      ex('Ein sauberes [[Berechtigungskonzept]] folgt dem Prinzip der minimalen Rechte.', 'Грамотная модель прав строится по принципу минимальных привилегий.', 'A clean permissions concept follows the principle of least privilege.'), null, 'c1'),
    N('schadensbegrenzung', 'die', 'Schadensbegrenzung', '', 'локализация и минимизация ущерба', 'damage limitation, containment',
      ex('In den ersten Minuten nach dem Vorfall zählt schnelle [[Schadensbegrenzung]].', 'В первые минуты после инцидента важна быстрая локализация ущерба.', 'In the first minutes after an incident, fast damage limitation counts.'), null, 'c1'),
    N('vertraulichkeit', 'die', 'Vertraulichkeit', '', 'конфиденциальность', 'confidentiality',
      ex('Die drei Grundziele sind [[Vertraulichkeit]], Integrität und Verfügbarkeit.', 'Три базовые цели — конфиденциальность, целостность и доступность.', 'The three core goals are confidentiality, integrity and availability.'),
      ['Классическая триада CIA (CIA-Triade).', 'The classic CIA triad.'], 'b2'),
    N('integritaet', 'die', 'Integrität', '', 'целостность (данных, системы)', 'integrity',
      ex('Prüfsummen sichern die [[Integrität]] der heruntergeladenen Dateien.', 'Контрольные суммы обеспечивают целостность скачанных файлов.', 'Checksums ensure the integrity of downloaded files.'), null, 'c1'),
    N('erpressungstrojaner', 'der', 'Erpressungstrojaner', 'die Erpressungstrojaner', 'программа-вымогатель (ransomware)', 'ransomware',
      ex('Ein [[Erpressungstrojaner]] verschlüsselte alle Netzlaufwerke der Klinik.', 'Программа-вымогатель зашифровала все сетевые диски клиники.', 'Ransomware encrypted all the clinic’s network drives.'),
      ['На практике также говорят Ransomware.', 'In practice teams also say Ransomware.'], 'c1'),
    N('schwachstellenanalyse', 'die', 'Schwachstellenanalyse', 'die Schwachstellenanalysen', 'анализ уязвимостей', 'vulnerability analysis',
      ex('Vor jedem großen Release läuft eine automatische [[Schwachstellenanalyse]].', 'Перед каждым крупным релизом запускается автоматический анализ уязвимостей.', 'Before every major release, an automated vulnerability scan runs.'), null, 'c1'),
    N('protokollauswertung', 'die', 'Protokollauswertung', 'die Protokollauswertungen', 'анализ логов / журналов событий', 'log analysis',
      ex('Die [[Protokollauswertung]] zeigte verdächtige Anmeldeversuche aus dem Ausland.', 'Анализ логов показал подозрительные попытки входа из-за рубежа.', 'Log analysis revealed suspicious login attempts from abroad.'), null, 'c1'),
    N('datenpanne', 'die', 'Datenpanne', 'die Datenpannen', 'утечка или инцидент с персональными данными', 'data breach, data incident',
      ex('Jede ernste [[Datenpanne]] muss binnen 72 Stunden gemeldet werden.', 'О каждом серьёзном инциденте с данными нужно сообщить в течение 72 часов.', 'Every serious data breach must be reported within 72 hours.'), null, 'b2'),
    N('penetrationstest', 'der', 'Penetrationstest', 'die Penetrationstests', 'тест на проникновение (пентест)', 'penetration test, pentest',
      ex('Ein externer [[Penetrationstest]] deckte zwei kritische Lücken auf.', 'Внешний пентест выявил две критические уязвимости.', 'An external penetration test uncovered two critical flaws.'),
      ['Кратко: der Pentest.', 'Short form: der Pentest.'], 'c1')
  ]);

  reg('b2_beruf', [
    N('aufstieg', 'der', 'Aufstieg', 'die Aufstiege', 'карьерный рост, подъём', 'advancement, promotion',
      ex('Für den beruflichen [[Aufstieg]] lohnt sich manchmal ein Firmenwechsel.', 'Для карьерного роста иногда стоит сменить компанию.', 'For career advancement, switching companies is sometimes worthwhile.'), null, 'b2'),
    N('weiterentwicklung', 'die', 'Weiterentwicklung', 'die Weiterentwicklungen', 'профессиональное развитие, рост', 'professional development',
      ex('Persönliche [[Weiterentwicklung]] ist mir wichtiger als ein Firmenwagen.', 'Профессиональное развитие для меня важнее служебной машины.', 'Professional development matters more to me than a company car.'), null, 'b2'),
    N('fortbildungsbudget', 'das', 'Fortbildungsbudget', 'die Fortbildungsbudgets', 'бюджет на обучение и курсы', 'training budget',
      ex('Jedes Teammitglied hat ein jährliches [[Fortbildungsbudget]] von 1.500 Euro.', 'У каждого участника команды есть годовой бюджет на обучение 1500 евро.', 'Every team member has an annual training budget of 1,500 euros.'), null, 'b2'),
    N('befristung', 'die', 'Befristung', 'die Befristungen', 'срочный характер договора (ограничение срока)', 'fixed-term limit (contract)',
      ex('Nach zwei Jahren wurde die [[Befristung]] meines Vertrags aufgehoben.', 'Через два года ограничение срока моего договора сняли.', 'After two years the fixed-term limit on my contract was lifted.'), null, 'c1'),
    N('stellenbeschreibung', 'die', 'Stellenbeschreibung', 'die Stellenbeschreibungen', 'должностная инструкция, описание вакансии', 'job description',
      ex('In der [[Stellenbeschreibung]] standen ganz andere Aufgaben als im Alltag.', 'В описании должности значились совсем другие задачи, чем в повседневной работе.', 'The job description listed quite different tasks from day-to-day work.'), null, 'b2'),
    N('berufserfahrung', 'die', 'Berufserfahrung', 'die Berufserfahrungen', 'профессиональный опыт, стаж', 'work experience',
      ex('Für diese Position braucht man mindestens drei Jahre [[Berufserfahrung]].', 'Для этой позиции требуется минимум три года профессионального опыта.', 'For this role you need at least three years of work experience.'), null, 'b1'),
    N('nebentaetigkeit', 'die', 'Nebentätigkeit', 'die Nebentätigkeiten', 'подработка, совместительство', 'secondary employment, side job',
      ex('Eine bezahlte [[Nebentätigkeit]] muss im Vertrag oft angezeigt werden.', 'Об оплачиваемой подработке по договору часто нужно уведомлять работодателя.', 'Paid secondary employment often has to be declared under the contract.'), null, 'c1'),
    N('abfindung', 'die', 'Abfindung', 'die Abfindungen', 'выходное пособие, компенсация при увольнении', 'severance pay',
      ex('Bei der einvernehmlichen Trennung erhielt er eine faire [[Abfindung]].', 'При расторжении по соглашению сторон он получил справедливую компенсацию.', 'In the mutual termination he received fair severance pay.'), null, 'c1'),
    N('kuendigungsschutz', 'der', 'Kündigungsschutz', '', 'защита от увольнения (по трудовому праву)', 'protection against dismissal',
      ex('Nach der Probezeit greift in Deutschland der gesetzliche [[Kündigungsschutz]].', 'После испытательного срока в Германии начинает действовать защита от увольнения.', 'After the probation period, statutory protection against dismissal applies in Germany.'), null, 'c1'),
    N('fuehrungsposition', 'die', 'Führungsposition', 'die Führungspositionen', 'руководящая должность', 'management position, leadership role',
      ex('Sie strebt in den nächsten Jahren eine [[Führungsposition]] im Bereich Security an.', 'В ближайшие годы она стремится занять руководящую должность в сфере безопасности.', 'She is aiming for a leadership role in security over the next few years.'), null, 'b2')
  ]);

  reg('b2_arbeitswelt', [
    N('ueberlastungsanzeige', 'die', 'Überlastungsanzeige', 'die Überlastungsanzeigen', 'официальное уведомление о перегрузке (на работе)', 'formal overload notice',
      ex('Nach monatelangem Personalmangel stellte das Team eine [[Überlastungsanzeige]].', 'После нескольких месяцев нехватки людей команда подала уведомление о перегрузке.', 'After months of understaffing, the team filed a formal overload notice.'), null, 'c1'),
    N('telearbeit', 'die', 'Telearbeit', '', 'удалённая работа (юридический термин)', 'telework, remote work',
      ex('Für feste [[Telearbeit]] gelten genaue Regeln zum Arbeitsschutz.', 'Для постоянной удалённой работы действуют строгие правила охраны труда.', 'Strict occupational safety rules apply to formal telework.'), null, 'c1'),
    N('personalmangel', 'der', 'Personalmangel', '', 'нехватка персонала', 'staff shortage',
      ex('Wegen des akuten [[Personalmangels]] bleiben einige Schichten unbesetzt.', 'Из-за острой нехватки персонала часть смен остаётся незакрытой.', 'Because of the acute staff shortage, several shifts remain unfilled.'), null, 'b2'),
    N('fluktuation', 'die', 'Fluktuation', 'die Fluktuationen', 'текучесть кадров', 'staff turnover',
      ex('Hoher Druck und schlechte Bezahlung führen oft zu hoher [[Fluktuation]].', 'Высокое давление и низкая оплата часто приводят к высокой текучести кадров.', 'High pressure and poor pay often lead to high staff turnover.'), null, 'c1'),
    N('arbeitsklima', 'das', 'Arbeitsklima', '', 'атмосфера на рабочем месте', 'working atmosphere',
      ex('Ein offenes [[Arbeitsklima]] ist für mich wichtiger als ein Großraumbüro.', 'Открытая атмосфера в коллективе для меня важнее опенспейса.', 'An open working atmosphere is more important to me than an open-plan office.'), null, 'b2'),
    N('mitarbeiterbindung', 'die', 'Mitarbeiterbindung', '', 'удержание сотрудников', 'employee retention',
      ex('Gute Weiterbildung und Flexibilität stärken die [[Mitarbeiterbindung]].', 'Хорошее обучение и гибкость укрепляют удержание сотрудников.', 'Good training and flexibility strengthen employee retention.'), null, 'c1'),
    N('eigenverantwortung', 'die', 'Eigenverantwortung', '', 'личная ответственность, самостоятельность', 'personal responsibility, ownership',
      ex('Im agilen Team arbeiten alle mit viel [[Eigenverantwortung]].', 'В agile-команде все работают с высокой личной ответственностью.', 'In an agile team everyone works with a high degree of ownership.'), null, 'b2'),
    N('flexibilisierung', 'die', 'Flexibilisierung', '', 'повышение гибкости (графика, занятости)', 'flexibilisation',
      ex('Die [[Flexibilisierung]] der Arbeitszeiten hilft besonders jungen Eltern.', 'Гибкость рабочего времени особенно помогает молодым родителям.', 'Making working hours more flexible especially helps young parents.'), null, 'c1'),
    N('work-life-balance', 'die', 'Work-Life-Balance', '', 'баланс работы и личной жизни', 'work-life balance',
      ex('Eine gesunde [[Work-Life-Balance]] schützt langfristig vor Erschöpfung.', 'Здоровый баланс между работой и жизнью в долгосрочной перспективе защищает от истощения.', 'A healthy work-life balance protects against exhaustion in the long run.'), null, 'b2'),
    N('burnout-praevention', 'die', 'Burn-out-Prävention', '', 'профилактика выгорания', 'burnout prevention',
      ex('Klare Grenzen nach Feierabend sind ein wichtiger Teil der [[Burn-out-Prävention]].', 'Чёткие границы после конца рабочего дня — важная часть профилактики выгорания.', 'Clear boundaries after work are an important part of burnout prevention.'), null, 'c1')
  ]);
})();
