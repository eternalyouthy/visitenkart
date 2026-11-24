/* ENGLISH Professional · extra batch (5 per topic × 7 Pro topics = 35 cards).
 * Note: in js/packs/en.js, Work & Office has topic id 'work' (not 'workcomm').
 * Checked against existing pack inventory for zero duplicates. Original examples (ru + de). */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    var have = P.items.filter(function (x) { return x.t === t; })[0];
    if (have) return { _member: have.id };
    return { id: 'en:it2:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function reg(topic, items) {
    items.forEach(function (x) { if (x && x._member) GT.addMember(x._member, 'it', topic); });
    GT.register({ tab: 'it', topic: topic, items: items.filter(function (x) { return x && !x._member; }) });
  }

  reg('work', [
    W('sign-off', 'noun', 'sign-off', 'B2', 'официальное одобрение, согласование', 'Freigabe, Genehmigung',
      ex('We need the manager’s [[sign-off]] before publishing the report.', 'Нам нужно одобрение менеджера перед публикацией отчёта.', 'Wir brauchen die Freigabe der Leitung, bevor wir den Bericht veröffentlichen.'),
      ['Глагол — sign off on something (подписать/утвердить проект или релиз).', 'Dazugehöriges Verb: sign off on something (= etwas abnehmen / freigeben).']),
    W('status-update', 'noun', 'status update', 'B1', 'обновление статуса (по задаче)', 'Statusmeldung, Statusupdate',
      ex('Please post a short [[status update]] in the channel before five.', 'Пожалуйста, напиши короткий статус в канал до пяти.', 'Bitte schreib vor fünf Uhr ein kurzes Statusupdate in den Kanal.'),
      ['Короткий отчёт о прогрессе в Slack/Teams или на стендапе.', 'Kurzer Fortschrittsbericht im Team-Chat oder Stand-up.']),
    W('blocker', 'noun', 'blocker', 'B2', 'блокер, препятствие в работе', 'Blocker, Hindernis',
      ex('Does anyone have a [[blocker]] that stops them from testing?', 'У кого-нибудь есть блокер, мешающий тестированию?', 'Hat jemand einen Blocker, der das Testen verhindert?'),
      ['Стандартный вопрос на daily stand-up: Any blockers? Снять блокер — unblock.', 'Typische Frage im Daily: Any blockers? Einen Blocker beseitigen = unblock.']),
    W('agenda-item', 'noun', 'agenda item', 'B2', 'пункт повестки дня', 'Tagesordnungspunkt',
      ex('We had to move the last [[agenda item]] to Friday.', 'Последний пункт повестки пришлось перенести на пятницу.', 'Wir mussten den letzten Tagesordnungspunkt auf Freitag verschieben.'),
      ['На совещании также: item one on the agenda, move on to the next item.', 'In Meetings auch: item one on the agenda, next item (= nächster TOP).']),
    W('out-of-office', 'phrase', 'out of office', 'B1', 'вне офиса, в отъезде / автоответ', 'abwesend, außer Haus',
      ex('Remember to set your [[out of office]] reply before your holiday.', 'Не забудь включить автоответ «вне офиса» перед отпуском.', 'Vergiss nicht, vor dem Urlaub deine Abwesenheitsnotiz einzustellen.'),
      ['В письмах и статусах часто сокращают до OOO (I’m OOO until Monday).', 'In Mails und Chat-Status oft abgekürzt als OOO (= I’m out of office).'])
  ]);

  reg('dev', [
    W('version-control', 'noun', 'version control', 'B2', 'контроль версий', 'Versionskontrolle',
      ex('Every config file should live under [[version control]].', 'Каждый конфиг должен храниться под контролем версий.', 'Jede Konfigurationsdatei sollte unter Versionskontrolle stehen.'),
      ['Неисчисляемое; предлог — under version control (Git, SVN и т.д.).', 'Unzählbar; übliche Präposition: under version control (z. B. Git).']),
    W('bug-fix', 'noun', 'bug fix', 'B1', 'исправление ошибки', 'Fehlerbehebung, Bugfix',
      ex('The [[bug fix]] is ready for review.', 'Исправление ошибки готово к проверке.', 'Der Bugfix ist bereit für das Review.'),
      ['Часто пишется слитно (bugfix); срочное исправление в продакшене — hotfix.', 'Auch zusammengeschrieben (bugfix); ein Eil-Fix im Live-System heißt hotfix.']),
    W('refactoring', 'noun', 'refactoring', 'B2', 'рефакторинг', 'Refactoring',
      ex('After some [[refactoring]], the function became half as long.', 'После рефакторинга функция стала вдвое короче.', 'Nach etwas Refactoring war die Funktion nur noch halb so lang.'),
      ['Улучшение структуры кода без изменения его поведения; глагол — refactor.', 'Code-Bereinigung ohne Änderung des Verhaltens; Verb: refactor.']),
    W('runtime-error', 'noun', 'runtime error', 'B2', 'ошибка времени выполнения', 'Laufzeitfehler',
      ex('The code compiles fine, but throws a [[runtime error]] on null input.', 'Код компилируется нормально, но при пустом вводе даёт ошибку выполнения.', 'Der Code kompiliert sauber, wirft aber bei Null-Eingabe einen Laufzeitfehler.'),
      ['Глагол для ошибки/исключения — throw an error (выбросить ошибку), поймать — catch.', 'Typisches Verb: throw / raise a runtime error; im Deutschen auch „einen Fehler werfen“.']),
    W('merge-conflict', 'noun', 'merge conflict', 'B2', 'конфликт слияния (в Git)', 'Merge-Konflikt',
      ex('Two branches edited the same lines, causing a [[merge conflict]].', 'Две ветки правили одни и те же строки, что вызвало конфликт слияния.', 'Zwei Branches haben dieselben Zeilen geändert, was einen Merge-Konflikt ausgelöst hat.'),
      ['Разрешить конфликт в Git — resolve a merge conflict.', 'Einen Konflikt beheben = resolve a merge conflict.'])
  ]);

  reg('infra', [
    W('load-balancing', 'noun', 'load balancing', 'B2', 'балансировка нагрузки', 'Lastverteilung',
      ex('[[Load balancing]] distributes incoming traffic across three servers.', 'Балансировка нагрузки распределяет входящий трафик между тремя серверами.', 'Lastverteilung verteilt den eingehenden Datenverkehr auf drei Server.'),
      ['Сам сервис или устройство называется load balancer.', 'Der Dienst oder das Gerät dazu heißt load balancer.']),
    W('disk-space', 'noun', 'disk space', 'B1', 'дисковое пространство', 'Festplattenspeicher',
      ex('The alert fired because [[disk space]] dropped below ten per cent.', 'Сработал алерт, потому что свободного места на диске осталось меньше 10%.', 'Der Alarm ging los, weil der Festplattenspeicher unter zehn Prozent sank.'),
      ['Неисчисляемое (free disk space, run out of disk space — не «space of disk»).', 'Unzählbar (run out of disk space = der Speicherplatz wird knapp).']),
    W('memory-leak', 'noun', 'memory leak', 'B2', 'утечка памяти', 'Speicherleck',
      ex('A [[memory leak]] caused the service to crash every night.', 'Утечка памяти приводила к падению сервиса каждую ночь.', 'Ein Speicherleck ließ den Dienst jede Nacht abstürzen.'),
      ['Буквально «утечка памяти»; ср. нем. das Speicherleck.', 'Direkte Parallele zu dt. das Speicherleck (RAM wird nicht mehr freigegeben).']),
    W('downtime', 'noun', 'downtime', 'B2', 'время простоя', 'Ausfallzeit',
      ex('The migration took place at night to minimise [[downtime]].', 'Миграцию провели ночью, чтобы свести простой к минимуму.', 'Die Migration fand nachts statt, um die Ausfallzeit zu minimieren.'),
      ['Плановый простой — planned / scheduled downtime; сбойный — unplanned downtime.', 'Unterschied: scheduled downtime (Wartung) vs. unplanned downtime (Ausfall).']),
    W('uptime', 'noun', 'uptime', 'B2', 'время безотказной работы', 'Betriebszeit, Verfügbarkeit',
      ex('Our SLA promises 99.9% [[uptime]].', 'Наш SLA обещает 99,9% времени безотказной работы.', 'Unser SLA verspricht 99,9 % Verfügbarkeit.'),
      ['Антоним — downtime; измеряется в процентах (three nines = 99,9%) и проверяется uptime monitor.', 'Gegenteil: downtime; oft in Prozent im SLA angegeben (z. B. 99,9 % Verfügbarkeit).'])
  ]);

  reg('security', [
    W('malware', 'noun', 'malware', 'B2', 'вредоносное ПО', 'Schadsoftware, Malware',
      ex('Never open unknown attachments that might contain [[malware]].', 'Никогда не открывайте незнакомые вложения, которые могут содержать вредоносное ПО.', 'Öffnen Sie nie unbekannte Anhänge, die Schadsoftware enthalten könnten.'),
      ['От malicious software; неисчисляемое (без артикля a и без мн. ч. «malwares»).', 'Aus malicious software; unzählbar (kein Artikel, kein Plural „malwares“).']),
    W('security-policy', 'noun', 'security policy', 'B2', 'политика безопасности', 'Sicherheitsrichtlinie',
      ex('According to our [[security policy]], USB drives are blocked.', 'Согласно нашей политике безопасности, USB-накопители заблокированы.', 'Laut unserer Sicherheitsrichtlinie sind USB-Sticks gesperrt.'),
      ['Регламент организации: enforce a security policy (соблюдать/обеспечивать выполнение правил).', 'Interne Vorgabe: comply with / enforce a security policy (= durchsetzen).']),
    W('patch', 'noun', 'patch', 'B2', 'патч, исправление безопасности', 'Patch, Sicherheitsupdate',
      ex('Install the critical [[patch]] before the end of the day.', 'Установите критический патч до конца дня.', 'Installieren Sie den kritischen Patch noch vor Feierabend.'),
      ['Также глагол: patch a vulnerability (закрыть уязвимость); день обновлений — Patch Tuesday.', 'Auch als Verb: patch a system / vulnerability (eine Sicherheitslücke schließen).']),
    W('two-factor-auth', 'noun', 'two-factor authentication', 'B2', 'двухфакторная аутентификация', 'Zwei-Faktor-Authentifizierung',
      ex('[[Two-factor authentication]] stops most stolen-password logins.', 'Двухфакторная аутентификация блокирует большинство входов по украденному паролю.', 'Zwei-Faktor-Authentifizierung stoppt die meisten Logins mit gestohlenem Passwort.'),
      ['Аббревиатура — 2FA; более широкое понятие (с 2 и более факторами) — MFA.', 'Kurz 2FA; der Oberbegriff für zwei oder mehr Faktoren ist MFA (multi-factor).']),
    W('ransomware', 'noun', 'ransomware', 'B2', 'программа-вымогатель', 'Ransomware, Erpressungstrojaner',
      ex('Offline backups are the safest defence against [[ransomware]].', 'Офлайн-бэкапы — самая надёжная защита от программ-вымогателей.', 'Offline-Backups sind der sicherste Schutz gegen Ransomware.'),
      ['От ransom (выкуп) + software; неисчисляемое существительное.', 'Aus ransom („Lösegeld“) + software; unzählbar (kein Plural).'])
  ]);

  reg('business', [
    W('quote', 'noun', 'quote', 'B2', 'коммерческое предложение, смета (цена)', 'Angebot, Kostenvoranschlag',
      ex('We asked three suppliers for a [[quote]] before choosing one.', 'Мы запросили смету у трёх поставщиков, прежде чем выбрать одного.', 'Wir haben drei Anbieter um ein Angebot gebeten, bevor wir uns entschieden haben.'),
      ['В бизнесе — ценовое предложение (request a quote, RFQ); в речи также — цитата.', 'Im Einkauf: Kostenvoranschlag (request a quote); allgemein auch „Zitat“.']),
    W('client', 'noun', 'client', 'B1', 'клиент (услуг, компании)', 'Kunde, Auftraggeber',
      ex('Our biggest [[client]] extended the contract for two years.', 'Наш крупнейший клиент продлил контракт на два года.', 'Unser größter Kunde hat den Vertrag um zwei Jahre verlängert.'),
      ['Client — покупатель профессиональных услуг (IT, дизайн, право); customer — покупатель в магазине или SaaS.', 'Client kauft Dienstleistungen/Beratung (B2B, Agentur); customer kauft Waren im Handel.']),
    W('turnover', 'noun', 'turnover', 'B2', 'оборот (финансовый); текучесть кадров', 'Umsatz; Fluktuation',
      ex('Annual [[turnover]] grew by twelve per cent last year.', 'Годовой оборот в прошлом году вырос на двенадцать процентов.', 'Der Jahresumsatz ist letztes Jahr um zwölf Prozent gestiegen.'),
      ['В Британии annual turnover = выручка (в США чаще revenue); staff turnover = текучесть кадров.', 'In UK oft „Jahresumsatz“ (US eher revenue); staff turnover = Personalfluktuation.']),
    W('contractual', 'adj', 'contractual', 'B2', 'договорной, контрактный', 'vertraglich',
      ex('Meeting the deadline is a [[contractual]] obligation.', 'Соблюдение срока — это договорное обязательство.', 'Die Frist einzuhalten ist eine vertragliche Pflicht.'),
      ['Частые пары: contractual obligation (обязательство), contractual terms (условия договора).', 'Typische Nomen: contractual obligation (Pflicht), contractual agreement (Vereinbarung).']),
    W('follow-up-email', 'noun', 'follow-up email', 'B2', 'письмо с подведением итогов / напоминанием', 'Nachfass-E-Mail, Zusammenfassung',
      ex('Send a brief [[follow-up email]] listing what we agreed.', 'Отправь короткое письмо по итогам, перечислив договорённости.', 'Schick eine kurze Nachfass-E-Mail mit dem, was wir vereinbart haben.'),
      ['Прилагательное с дефисом (a follow-up call / meeting), а глагол — раздельно: follow up on something.', 'Als Adjektiv mit Bindestrich (follow-up call); als Verb getrennt: follow up on something.'])
  ]);

  reg('career-paths', [
    W('career-move', 'noun', 'career move', 'B2', 'карьерный шаг', 'Karriereschritt',
      ex('Joining the security team was a smart [[career move]].', 'Переход в команду безопасности стал удачным карьерным шагом.', 'Der Wechsel ins Security-Team war ein kluger Karriereschritt.'),
      ['Обычные эпитеты: a smart / bold / strategic career move.', 'Typische Adjektive: a smart / bold / lateral career move.']),
    W('salary-range', 'noun', 'salary range', 'B2', 'вилка зарплаты', 'Gehaltsspanne',
      ex('The job advert clearly stated the [[salary range]].', 'В вакансии была чётко указана вилка зарплаты.', 'In der Stellenanzeige stand klar die Gehaltsspanne.'),
      ['Также salary bracket / pay band; ср. нем. Gehaltsspanne.', 'Synonyme: salary band / pay range; entspricht genau dt. Gehaltsspanne.']),
    W('appraisal', 'noun', 'appraisal', 'B2', 'оценка работы, встреча по развитию', 'Beurteilungsgespräch, Entwicklungsgespräch',
      ex('During her annual [[appraisal]], she asked for training budget.', 'На ежегодной оценке работы она попросила бюджет на обучение.', 'Beim jährlichen Entwicklungsgespräch bat sie um ein Weiterbildungsbudget.'),
      ['В Британии annual appraisal = встреча 1-на-1 по итогам года; в США чаще performance review.', 'In UK üblich (annual appraisal), in den USA meist performance review.']),
    W('mentor', 'noun', 'mentor', 'B2', 'наставник, ментор', 'Mentor(in)',
      ex('Having an experienced [[mentor]] sped up my onboarding.', 'Наличие опытного наставника ускорило мой онбординг.', 'Ein erfahrener Mentor hat meine Einarbeitung beschleunigt.'),
      ['Также глагол: mentor junior engineers (быть наставником, менторить).', 'Auch als Verb gebräuchlich: mentor someone (= als Mentor begleiten).']),
    W('networking', 'noun', 'networking', 'B2', 'нетворкинг, деловые знакомства', 'Netzwerken, Networking',
      ex('Good [[networking]] at conferences often leads to new roles.', 'Полезные знакомства на конференциях часто приводят к новым предложениям о работе.', 'Gutes Netzwerken auf Konferenzen führt oft zu neuen Jobangeboten.'),
      ['Сочетание: build your network; в IT также обозначает сетевую инфраструктуру (computer networking).', 'Für Kontakte auf Konferenzen — im IT-Kontext aber auch Netzwerktechnik (network engineering).'])
  ]);

  reg('world-of-work', [
    W('labour-shortage', 'noun', 'labour shortage', 'B2', 'дефицит рабочей силы', 'Arbeitskräftemangel',
      ex('The [[labour shortage]] makes it hard to fill nursing roles.', 'Из-за нехватки кадров трудно закрывать вакансии медсестёр.', 'Der Arbeitskräftemangel macht es schwer, Pflegekräfte zu finden.'),
      ['Амер. написание — labor shortage; дефицит именно квалифицированных специалистов — skills shortage.', 'US-Schreibweise: labor shortage; Fachkräftemangel speziell = skills shortage.']),
    W('shift-work', 'noun', 'shift work', 'B2', 'посменная работа', 'Schichtdienst',
      ex('Long-term [[shift work]] can disrupt your sleep pattern.', 'Длительная посменная работа может сбить режим сна.', 'Längerer Schichtdienst kann den Schlafrhythmus stören.'),
      ['Неисчисляемое (без артикля a); ночная смена — night shift.', 'Unzählbar (ohne Artikel); einzelne Schicht = day / night shift.']),
    W('part-time', 'adj', 'part-time', 'B1', 'с частичной занятостью', 'Teilzeit-',
      ex('He works [[part-time]] three days a week.', 'Он работает на неполную ставку три дня в неделю.', 'Er arbeitet Teilzeit an drei Tagen pro Woche.'),
      ['И прилагательное (a part-time job), и наречие (work part-time); антоним — full-time.', 'Sowohl Adjektiv (part-time job) als auch Adverb (work part-time); Gegenteil: full-time.']),
    W('hybrid-work', 'noun', 'hybrid work', 'B2', 'гибридный формат работы', 'hybrides Arbeiten',
      ex('Our company switched to [[hybrid work]]: two days in the office.', 'Наша компания перешла на гибрид: два дня в офисе.', 'Unsere Firma ist auf hybrides Arbeiten umgestiegen: zwei Tage im Büro.'),
      ['Полная удалёнка — remote work / working from home (WFH).', 'Reines Homeoffice = remote work / working from home (WFH).']),
    W('core-hours', 'noun', 'core hours', 'B2', 'обязательные рабочие часы (ядро графика)', 'Kernarbeitszeit',
      ex('Our [[core hours]] are ten to three; the rest is flexible.', 'Обязательные часы присутствия — с десяти до трёх, остальное гибко.', 'Unsere Kernarbeitszeit ist von zehn bis drei; der Rest ist flexibel.'),
      ['Во множественном числе (в отличие от нем. ед. ч. Kernarbeitszeit); гибкий график — flexitime.', 'Immer Plural (anders als dt. Singular Kernarbeitszeit); Gleitzeit = flexitime.'])
  ]);
})();
