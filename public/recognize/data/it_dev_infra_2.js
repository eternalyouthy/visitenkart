/* Professional · IT & Development and Infrastructure — second batch (9 each). Everyday team vocabulary:
 * how German developers and admins actually talk (many English loans with German grammar). Original examples. */
(function () {
  'use strict';
  function ex(de, ru, en) { return { de: de, ru: ru, en: en }; }
  function W(o, note) { if (note) { o.note = note[0]; o.i18n = { en: { note: note[1] } }; } return o; }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('dev', [
    W({ id: 'it-dev-branch', pos: 'noun', de: 'Branch', article: 'der', plural: 'die Branches', ru: 'ветка (в Git)', en: 'branch',
      examples: [ex('Leg für das Feature bitte einen eigenen [[Branch]] an.', 'Заведи, пожалуйста, для этой фичи отдельную ветку.', 'Please create a separate branch for the feature.')] },
      ['Род колеблется: der / die Branch; в командах чаще der. Глагол: einen Branch anlegen / abzweigen.', 'Gender varies (der / die Branch); teams mostly say der. Verb: einen Branch anlegen.']),
    W({ id: 'it-dev-mergen', pos: 'verb', de: 'mergen', forms: { praes: 'mergt', praet: 'mergte', perf: 'hat gemergt' }, gov: '+ Akk.', ru: 'мёржить, сливать (ветки)', en: 'to merge',
      examples: [ex('Nach dem Review kannst du den Branch in main [[mergen]].', 'После ревью можешь слить ветку в main.', 'After the review you can merge the branch into main.')] },
      ['Партицип по-немецки: hat gemergt. Официально: zusammenführen.', 'German participle: hat gemergt. Formal: zusammenführen.']),
    W({ id: 'it-dev-code-review', pos: 'noun', de: 'Code-Review', article: 'das', plural: 'die Code-Reviews', ru: 'код-ревью, проверка кода', en: 'code review',
      examples: [ex('Beim [[Code-Review]] ist uns eine Sicherheitslücke aufgefallen.', 'На код-ревью мы заметили уязвимость.', 'We spotted a security hole during the code review.')] },
      ['Встречается и der Code-Review; чаще das.', 'Der Code-Review also occurs; das is more common.']),
    W({ id: 'it-dev-datenbank', pos: 'noun', de: 'Datenbank', article: 'die', plural: 'die Datenbanken', ru: 'база данных', en: 'database',
      examples: [ex('Die Kundendaten liegen in einer separaten [[Datenbank]].', 'Данные клиентов лежат в отдельной базе данных.', 'The customer data is stored in a separate database.')] }),
    W({ id: 'it-dev-testumgebung', pos: 'noun', de: 'Testumgebung', article: 'die', plural: 'die Testumgebungen', ru: 'тестовая среда', en: 'test environment, staging',
      examples: [ex('In der [[Testumgebung]] läuft alles, nur in Produktion nicht.', 'На тестовом стенде всё работает, только в проде нет.', 'Everything works in the test environment, just not in production.')] },
      ['Ср. die Entwicklungsumgebung — среда разработки (IDE), die Produktivumgebung / Produktion — прод.', 'Compare die Entwicklungsumgebung (IDE) and die Produktivumgebung / Produktion (production).']),
    W({ id: 'it-dev-refactoren', pos: 'verb', de: 'refactoren', forms: { praes: 'refactort', praet: 'refactorte', perf: 'hat refactort' }, gov: '+ Akk.', ru: 'рефакторить', en: 'to refactor',
      examples: [ex('Bevor wir neue Features bauen, sollten wir das Modul [[refactoren]].', 'Прежде чем делать новые фичи, стоит отрефакторить модуль.', 'Before we build new features, we should refactor the module.')] },
      ['Встречается и refaktorisieren / refaktorieren. Сущ.: das Refactoring.', 'Also refaktorisieren / refaktorieren. Noun: das Refactoring.']),
    W({ id: 'it-dev-schaetzen', pos: 'verb', de: 'schätzen', forms: { praes: 'schätzt', praet: 'schätzte', perf: 'hat geschätzt' }, gov: '+ Akk.', ru: 'оценивать (трудоёмкость); ценить', en: 'to estimate; to value',
      examples: [ex('Wie lange [[schätzt]] du für das Ticket? — Etwa zwei Tage.', 'Сколько ты закладываешь на этот тикет? — Примерно два дня.', 'How long do you estimate for the ticket? — About two days.')] },
      ['Сущ.: die Schätzung — оценка. Второе значение: Ich schätze deine Hilfe — я ценю твою помощь.', 'Noun: die Schätzung. Second meaning: Ich schätze deine Hilfe — I value your help.'])
  ]);

  reg('infra', [
    W({ id: 'it-infra-rechenzentrum', pos: 'noun', de: 'Rechenzentrum', article: 'das', plural: 'die Rechenzentren', ru: 'дата-центр, вычислительный центр', en: 'data centre',
      examples: [ex('Unsere Server stehen in einem [[Rechenzentrum]] in Frankfurt.', 'Наши серверы стоят в дата-центре во Франкфурте.', 'Our servers are in a data centre in Frankfurt.')] },
      ['Сокращение: das RZ.', 'Abbreviation: das RZ.']),
    W({ id: 'it-infra-ausfallzeit', pos: 'noun', de: 'Ausfallzeit', article: 'die', plural: 'die Ausfallzeiten', ru: 'время простоя', en: 'downtime',
      examples: [ex('Die Migration soll ohne [[Ausfallzeit]] laufen.', 'Миграция должна пройти без простоя.', 'The migration should run without downtime.')] }),
    W({ id: 'it-infra-wartung', pos: 'noun', de: 'Wartung', article: 'die', plural: 'die Wartungen', ru: 'техобслуживание, профилактика', en: 'maintenance',
      examples: [ex('Wegen [[Wartung]] ist das Portal am Sonntag von 2 bis 4 Uhr nicht erreichbar.', 'Из-за профилактических работ портал недоступен в воскресенье с 2 до 4 часов.', 'Due to maintenance, the portal will be unavailable on Sunday from 2 to 4 a.m.')] },
      ['Wartungsfenster — окно для работ; Wartungsarbeiten — профилактические работы.', 'Wartungsfenster — maintenance window; Wartungsarbeiten — maintenance work.']),
    W({ id: 'it-infra-skalieren', pos: 'verb', de: 'skalieren', forms: { praes: 'skaliert', praet: 'skalierte', perf: 'hat skaliert' }, ru: 'масштабировать(ся)', en: 'to scale',
      examples: [ex('Bei hoher Last [[skaliert]] der Dienst automatisch auf zehn Instanzen.', 'При высокой нагрузке сервис автоматически масштабируется до десяти инстансов.', 'Under high load the service automatically scales to ten instances.')] }),
    W({ id: 'it-infra-speicherplatz', pos: 'noun', de: 'Speicherplatz', article: 'der', ru: 'место на диске, объём памяти', en: 'storage space, disk space',
      examples: [ex('Auf dem Server ist kaum noch [[Speicherplatz]] frei.', 'На сервере почти не осталось места.', 'There’s hardly any disk space left on the server.')] }),
    W({ id: 'it-infra-neustarten', pos: 'verb', de: 'neu starten', forms: { praes: 'startet neu', praet: 'startete neu', perf: 'hat neu gestartet' }, gov: '+ Akk.', ru: 'перезапустить, перезагрузить', en: 'to restart, to reboot',
      examples: [ex('Hast du den Router schon [[neu gestartet]]?', 'Ты уже перезагрузил роутер?', 'Have you restarted the router yet?')] },
      ['Пишется раздельно: neu starten; сущ. der Neustart.', 'Written as two words: neu starten; noun der Neustart.']),
    W({ id: 'it-infra-bandbreite', pos: 'noun', de: 'Bandbreite', article: 'die', ru: 'пропускная способность; диапазон', en: 'bandwidth; range',
      examples: [ex('Für Videokonferenzen reicht die [[Bandbreite]] im Büro nicht aus.', 'Для видеоконференций пропускной способности в офисе не хватает.', 'The office bandwidth isn’t enough for video conferences.')] },
      ['Вне IT: «диапазон» — eine große Bandbreite an Themen.', 'Outside IT: a range — eine große Bandbreite an Themen.']),
    W({ id: 'it-infra-cloud', pos: 'noun', de: 'Cloud', article: 'die', plural: 'die Clouds', ru: 'облако (облачная инфраструктура)', en: 'cloud',
      examples: [ex('Wir ziehen die Anwendung bis Jahresende in die [[Cloud]] um.', 'До конца года мы переносим приложение в облако.', 'We’re moving the application to the cloud by the end of the year.')] },
      ['Род женский: die Cloud (как die Wolke).', 'Feminine: die Cloud (like die Wolke).'])
  ]);
  // Words that already exist elsewhere: share the existing card in this topic instead of duplicating it.
  GT.addMember('b2-wiss-abhaengigkeit', 'it', 'dev');
  GT.addMember('it-sec-konfiguration', 'it', 'infra');
})();
