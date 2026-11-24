/* German Professional · extra batch (4 per topic × 6 topics = 24 cards).
 * Checked against existing pack inventory for zero duplicates. Original examples and translations (ru + en). */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(id, o, note, b2) {
    o.id = 'pro-m2-' + id;
    if (b2) o.level = 'b2';
    if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; }
    return o;
  }
  function N(id, article, de, plural, ru, en, e, note, b2) {
    return W(id, { pos: 'noun', de: de, article: article, plural: plural || undefined, ru: ru, en: en, examples: [e] }, note, b2);
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('workcomm', [
    N('rueckfrage', 'die', 'Rückfrage', 'die Rückfragen', 'уточняющий вопрос', 'follow-up question, query',
      ex('Bei [[Rückfragen]] melden Sie sich gern per E-Mail.', 'Если появятся уточняющие вопросы, смело пишите на почту.', 'If you have any questions, feel free to get in touch by email.')),
    N('freigabe', 'die', 'Freigabe', 'die Freigaben', 'согласование, одобрение (допуска, релиза)', 'approval, sign-off, release',
      ex('Ohne die [[Freigabe]] des Teams darf das Update nicht live gehen.', 'Без одобрения команды обновление не может выйти в прод.', 'Without the team’s sign-off, the update cannot go live.')),
    N('statusmeldung', 'die', 'Statusmeldung', 'die Statusmeldungen', 'сообщение о статусе (задачи, системы)', 'status update, status message',
      ex('Schreib bitte vor Feierabend eine kurze [[Statusmeldung]] ins Ticket.', 'Напиши, пожалуйста, перед концом рабочего дня короткий статус в тикет.', 'Please write a short status update in the ticket before knocking off.')),
    N('tagesordnungspunkt', 'der', 'Tagesordnungspunkt', 'die Tagesordnungspunkte', 'пункт повестки дня', 'agenda item',
      ex('Den letzten [[Tagesordnungspunkt]] verschieben wir auf nächste Woche.', 'Последний пункт повестки перенесём на следующую неделю.', 'We’ll move the last agenda item to next week.'))
  ]);

  reg('dev', [
    N('quellcode', 'der', 'Quellcode', '', 'исходный код', 'source code',
      ex('Der [[Quellcode]] liegt in einem privaten Git-Repository.', 'Исходный код хранится в приватном Git-репозитории.', 'The source code lives in a private Git repository.')),
    N('versionskontrolle', 'die', 'Versionskontrolle', '', 'контроль версий', 'version control',
      ex('Mit [[Versionskontrolle]] lässt sich jede Änderung nachvollziehen.', 'С контролем версий можно отследить каждое изменение.', 'With version control every change can be traced.')),
    N('fehlerbehebung', 'die', 'Fehlerbehebung', 'die Fehlerbehebungen', 'исправление ошибок (багфикс)', 'bug fixing, troubleshooting',
      ex('Die [[Fehlerbehebung]] hat den ganzen Nachmittag gedauert.', 'Исправление ошибки заняло всю вторую половину дня.', 'Fixing the bug took the whole afternoon.')),
    N('testabdeckung', 'die', 'Testabdeckung', '', 'покрытие тестами', 'test coverage',
      ex('Unsere [[Testabdeckung]] liegt inzwischen bei über achtzig Prozent.', 'Наше покрытие тестами уже превышает восемьдесят процентов.', 'Our test coverage is now over eighty per cent.'))
  ]);

  reg('infra', [
    N('lastverteilung', 'die', 'Lastverteilung', '', 'балансировка нагрузки', 'load balancing',
      ex('Die [[Lastverteilung]] schickt Anfragen automatisch an freie Server.', 'Балансировка нагрузки автоматически направляет запросы на свободные серверы.', 'Load balancing automatically sends requests to available servers.')),
    N('sicherungskopie', 'die', 'Sicherungskopie', 'die Sicherungskopien', 'резервная копия', 'backup copy',
      ex('Vor jedem Upgrade legen wir eine frische [[Sicherungskopie]] an.', 'Перед каждым обновлением мы делаем свежую резервную копию.', 'Before every upgrade we create a fresh backup copy.')),
    N('festplattenspeicher', 'der', 'Festplattenspeicher', '', 'дисковое пространство', 'disk space',
      ex('Auf dem Log-Server wird langsam der [[Festplattenspeicher]] knapp.', 'На сервере логов постепенно заканчивается место на диске.', 'Disk space is starting to run low on the log server.')),
    N('netzwerkstoerung', 'die', 'Netzwerkstörung', 'die Netzwerkstörungen', 'сетевой сбой', 'network outage, network disruption',
      ex('Wegen einer [[Netzwerkstörung]] waren drei Standorte offline.', 'Из-за сетевого сбоя три офиса оказались офлайн.', 'Because of a network disruption, three sites were offline.'))
  ]);

  reg('security', [
    N('zugriffskontrolle', 'die', 'Zugriffskontrolle', 'die Zugriffskontrollen', 'контроль доступа', 'access control',
      ex('Eine strenge [[Zugriffskontrolle]] verhindert unbefugtes Mitlesen.', 'Строгий контроль доступа предотвращает несанкционированный просмотр.', 'Strict access control prevents unauthorised reading.')),
    N('schadprogramm', 'das', 'Schadprogramm', 'die Schadprogramme', 'вредоносная программа', 'malware, malicious program',
      ex('Der Scanner hat ein verdächtiges [[Schadprogramm]] im Anhang blockiert.', 'Сканер заблокировал подозрительную вредоносную программу во вложении.', 'The scanner blocked a suspicious malicious program in the attachment.')),
    N('sicherheitsrichtlinie', 'die', 'Sicherheitsrichtlinie', 'die Sicherheitsrichtlinien', 'политика безопасности', 'security policy',
      ex('Laut unserer [[Sicherheitsrichtlinie]] müssen Passwörter alle zwölf Zeichen lang sein.', 'Согласно нашей политике безопасности пароли должны быть длиной минимум 12 символов.', 'According to our security policy, passwords must be at least twelve characters long.')),
    N('meldepflicht', 'die', 'Meldepflicht', 'die Meldepflichten', 'обязанность уведомления (об инциденте)', 'reporting obligation',
      ex('Bei einem Datenverlust greift oft eine gesetzliche [[Meldepflicht]].', 'При потере данных часто действует установленная законом обязанность сообщить о нарушении.', 'When data is lost, a statutory reporting obligation often applies.')),
  ]);

  reg('b2_beruf', [
    N('karriereschritt', 'der', 'Karriereschritt', 'die Karriereschritte', 'карьерный шаг', 'career move, career step',
      ex('Der Wechsel ins Sicherheitsteam war für mich der richtige [[Karriereschritt]].', 'Переход в команду безопасности стал для меня правильным карьерным шагом.', 'Moving into the security team was the right career step for me.'), null, true),
    N('gehaltsspanne', 'die', 'Gehaltsspanne', 'die Gehaltsspannen', 'вилка зарплаты', 'salary range',
      ex('Die [[Gehaltsspanne]] stand direkt in der Stellenanzeige.', 'Вилка зарплаты была указана прямо в объявлении о вакансии.', 'The salary range was stated right in the job advert.'), null, true),
    N('initiativbewerbung', 'die', 'Initiativbewerbung', 'die Initiativbewerbungen', 'инициативное резюме (без открытой вакансии)', 'speculative application',
      ex('Auch ohne offene Stelle lohnt sich manchmal eine [[Initiativbewerbung]].', 'Даже без открытой вакансии иногда стоит отправить резюме по собственной инициативе.', 'Even with no open position, a speculative application is sometimes worthwhile.'), null, true),
    N('entwicklungsgespraech', 'das', 'Entwicklungsgespräch', 'die Entwicklungsgespräche', 'встреча по развитию и итогам (1-on-1 / review)', 'appraisal, development review',
      ex('Im jährlichen [[Entwicklungsgespräch]] legen wir neue Lernziele fest.', 'На ежегодной встрече по развитию мы ставим новые учебные цели.', 'In the annual development review we set new learning goals.'), null, true)
  ]);

  reg('b2_arbeitswelt', [
    N('digitalisierungsschub', 'der', 'Digitalisierungsschub', 'die Digitalisierungsschübe', 'рывок в цифровизации', 'digitalisation push',
      ex('Die letzten Jahre brachten vielen Behörden einen [[Digitalisierungsschub]].', 'Последние годы принесли многим ведомствам заметный рывок в цифровизации.', 'Recent years brought a real digitalisation push for many authorities.'), null, true),
    N('arbeitskraeftemangel', 'der', 'Arbeitskräftemangel', '', 'дефицит рабочей силы', 'labour shortage',
      ex('Durch den [[Arbeitskräftemangel]] bleiben viele Ausbildungsplätze unbesetzt.', 'Из-за дефицита кадров многие учебные места остаются незанятыми.', 'Because of the labour shortage, many apprenticeship places remain unfilled.'), null, true),
    N('teilzeitmodell', 'das', 'Teilzeitmodell', 'die Teilzeitmodelle', 'формат частичной занятости', 'part-time work model',
      ex('Immer mehr Eltern wünschen sich ein flexibles [[Teilzeitmodell]].', 'Всё больше родителей хотят гибкий формат неполного рабочего дня.', 'More and more parents want a flexible part-time work model.'), null, true),
    N('schichtdienst', 'der', 'Schichtdienst', 'die Schichtdienste', 'посменная работа', 'shift work',
      ex('Im Krankenhaus gehört [[Schichtdienst]] am Wochenende zum Alltag.', 'В больнице посменная работа по выходным — обычное дело.', 'At the hospital, shift work at weekends is part of everyday life.'), null, true)
  ]);
})();
