/* RUSSIAN Professional · third batch (4 per topic × 5 topics = 20 cards; B1, B2 and C1).
 * Stress marked with "+" before the stressed vowel (never before ё). Checked against inventory for zero duplicates.
 * Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(n) { return n ? { en: n[0], de: n[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) {
    return { id: 'ru-pro3-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) };
  }
  function reg(topic, items) { GT.register({ tab: 'it', topic: topic, items: items }); }

  reg('workcomm', [
    N('eskalatsiya', 'эскал+ация', 'f', 'C1', 'escalation', 'die Eskalation',
      ex('+Если подр+ядчик не отвеч+ает нед+елю, н+ужна [[эскал+ация]] руков+одству.', 'If the contractor doesn’t reply for a week, escalation to management is needed.', 'Wenn der Dienstleister eine Woche nicht antwortet, ist eine Eskalation nötig.'),
      ['Usually paired with Dative for recipient: эскалация на руководителя / руководству.', 'Meist mit Dativ für den Empfänger: эскалация руководству (= an die Leitung).']),
    N('osushestvimost', 'осуществ+имость', 'f', 'C1', 'feasibility', 'die Machbarkeit',
      ex('Перед з+апуском мы провер+яем техн+ическую [[осуществ+имость]] про+екта.', 'Before launch we check the project’s technical feasibility.', 'Vor dem Start prüfen wir die technische Machbarkeit des Projekts.'),
      ['From осуществ+ить (“realise/implement”); matches German Machbarkeit.', 'Zu осуществ+ить („umsetzen“); entspricht genau dt. Machbarkeit.']),
    N('avtootvetchik', 'автоотв+етчик', 'm', 'B1', 'answering machine; out-of-office auto-reply', 'der Anrufbeantworter; die Abwesenheitsnotiz',
      ex('Перед +отпуском не заб+удь включ+ить [[автоотв+етчик]] в п+очте.', 'Don’t forget to turn on your email out-of-office auto-reply before your holiday.', 'Vergiss nicht, vor dem Urlaub die Abwesenheitsnotiz einzuschalten.'),
      ['Used for both phone voicemail and email OOO auto-responder.', 'Steht sowohl für den Anrufbeantworter am Telefon als auch für die E-Mail-Abwesenheitsnotiz.']),
    N('konsensus', 'конс+енсус', 'm', 'C1', 'consensus', 'der Konsens',
      ex('П+осле ч+аса сп+оров ком+анда пришл+а к [[конс+енсусу]].', 'After an hour of debate, the team reached a consensus.', 'Nach einer Stunde Diskussion fand das Team einen Konsens.'),
      ['Typical verb: прийти к консенсусу (+ Dat.) = reach a consensus.', 'Typische Verbindung: прийт+и к конс+енсусу (+ Dat.) = einen Konsens finden.'])
  ]);

  reg('dev', [
    N('kodovaya-baza', 'к+одовая б+аза', 'f', 'B2', 'codebase', 'die Codebasis',
      ex('В ст+арой [[к+одовой б+азе]] пок+а не хват+ает автот+естов.', 'The legacy codebase still lacks automated tests.', 'In der alten Codebasis fehlen noch automatisierte Tests.'),
      ['Standard calm written term; developers also say про+ект / репозит+орий.', 'Sachlicher Schriftbegriff (parallel zu Codebasis / codebase).']),
    N('obratnaya-sovmestimost', 'обр+атная совмест+имость', 'f', 'C1', 'backward compatibility', 'die Abwärtskompatibilität',
      ex('При обновл+ении API в+ажно сохран+ить [[обр+атную совмест+имость]].', 'When updating the API, it is important to maintain backward compatibility.', 'Beim API-Update ist es wichtig, die Abwärtskompatibilität zu wahren.'),
      ['Literally “reverse compatibility”; breaking it is ломающее обновление.', 'Wörtlich „rückwärtige Verträglichkeit“; Adjektiv: совмест+имый (= kompatibel).']),
    N('avtomatizatsiya', 'автоматиз+ация', 'f', 'B2', 'automation', 'die Automatisierung',
      ex('[[Автоматиз+ация]] сб+орки экон+омит нам час+ы перед рел+изом.', 'Build automation saves us hours before a release.', 'Die Build-Automatisierung spart uns vor dem Release Stunden.'),
      ['Takes Genitive for what is automated: автоматизация процессов / тестов.', 'Folgt mit Genitiv: автоматиз+ация тест+ирования (= Testautomatisierung).']),
    N('tekhnicheskiy-dolg', 'техн+ический долг', 'm', 'C1', 'technical debt', 'die technischen Schulden',
      ex('Если всё время откл+адывать рефакт+оринг, растёт [[техн+ический долг]].', 'If we keep putting off refactoring, technical debt grows.', 'Wenn wir das Refactoring ständig aufschieben, wachsen die technischen Schulden.'),
      ['Singular in Russian (like English tech debt; compare German plural technische Schulden).', 'Im Russischen Singular (anders als der deutsche Plural technische Schulden).'])
  ]);

  reg('infra', [
    N('otkazoustoychivost', 'отказоуст+ойчивость', 'f', 'C1', 'resilience, fault tolerance', 'die Ausfallsicherheit',
      ex('Для платёжных с+ервисов нужн+а выс+окая [[отказоуст+ойчивость]].', 'Payment services require high fault tolerance.', 'Für Zahlungsdienste ist hohe Ausfallsicherheit nötig.'),
      ['Compound of отк+аз (“failure”) + уст+ойчивость (“stability”); directly mirrors Ausfallsicherheit.', 'Zusammensetzung aus отк+аз („Ausfall“) + уст+ойчивость („Standfestigkeit“).']),
    N('masshtabiruemost', 'масштаб+ируемость', 'f', 'C1', 'scalability', 'die Skalierbarkeit',
      ex('Облачная архитект+ура улучш+ает [[масштаб+ируемость]] при п+иковых нагр+узках.', 'Cloud architecture improves scalability during peak loads.', 'Cloud-Architektur verbessert die Skalierbarkeit bei Lastspitzen.'),
      ['From масшт+аб (“scale”, borrowed via German der Maßstab); verb: масштабировать.', 'Zu масшт+аб (Lehnwort aus dt. Maßstab!); Verb: масштаб+ировать.']),
    N('okno-obsluzhivaniya', 'окн+о обсл+уживания', 'n', 'B2', 'maintenance window', 'das Wartungsfenster',
      ex('Обновл+ение б+азы пройдёт н+очью в [[окн+е обсл+уживания]].', 'The database upgrade will happen overnight during the maintenance window.', 'Das Datenbank-Update läuft nachts im Wartungsfenster.'),
      ['Uses the same “window” metaphor as English and German; informal: техн+ическое окн+о.', 'Gleiche Metapher wie Wartungsfenster / maintenance window; kurz auch техн+ическое окн+о.']),
    N('klaster', 'кл+астер', 'm', 'B2', 'cluster', 'der Cluster',
      ex('Мы доб+авили ещё дв+а узл+а в [[кл+астер]] Kubernetes.', 'We added two more nodes to the Kubernetes cluster.', 'Wir haben zwei weitere Knoten zum Kubernetes-Cluster hinzugefügt.'),
      ['Stress on first syllable (кл+астер); plural: кл+астеры (nodes = узл+ы).', 'Betonung auf a (кл+астер); einzelne Rechner heißen узл+ы (Nodes).'])
  ]);

  reg('security', [
    N('poverhnost-ataki', 'пов+ерхность ат+аки', 'f', 'C1', 'attack surface', 'die Angriffsfläche',
      ex('Лишние откр+ытые п+орты расшир+яют [[пов+ерхность ат+аки]].', 'Unnecessary open ports widen the attack surface.', 'Unnötig offene Ports vergrößern die Angriffsfläche.'),
      ['Literally “surface of attack”; typical verbs: сокр+атить / расшир+ять поверхность атаки.', 'Typische Verben: сокр+атить (= verringern) / минимиз+ировать пов+ерхность ат+аки.']),
    N('tselostnost', 'ц+елостность', 'f', 'C1', 'integrity (of data, systems)', 'die Integrität',
      ex('Контр+ольные с+уммы провер+яют [[ц+елостность]] ск+ачанного ф+айла.', 'Checksums verify the integrity of the downloaded file.', 'Prüfsummen prüfen die Integrität der heruntergeladenen Datei.'),
      ['From ц+елый (“whole/intact”); second pillar of the CIA triad after конфиденциальность.', 'Zu ц+елый („ganz / unversehrt“); eine der drei Säulen der IT-Sicherheit.']),
    N('konfidentsialnost', 'конфиденци+альность', 'f', 'B2', 'confidentiality', 'die Vertraulichkeit',
      ex('Шифров+ание защищ+ает [[конфиденци+альность]] п+исем.', 'Encryption protects the confidentiality of emails.', 'Verschlüsselung schützt die Vertraulichkeit von E-Mails.'),
      ['Also appears in NDA agreements (соглашение о конфиденциальности); adj: конфиденциальный.', 'Zentral im Datenschutz und bei NDAs (соглаш+ение о конфиденци+альности).']),
    N('pentest', 'пент+ест', 'm', 'C1', 'penetration test, pentest', 'der Penetrationstest, der Pentest',
      ex('П+еред з+апуском вн+ешние эксперт+ы провед+ут [[пент+ест]].', 'Before launch, external experts will run a pentest.', 'Vor dem Start führen externe Experten einen Pentest durch.'),
      ['Short for тестирование на проникновение.', 'Kurz für тестирование на проникновение.'])
  ]);

  reg('b2_work', [
    N('dolzhnostnaya', 'должностн+ая инстр+укция', 'f', 'B2', 'job description', 'die Stellenbeschreibung',
      ex('Мо+и ре+альные зад+ачи вых+одят за р+амки [[должностн+ой инстр+укции]].', 'My actual tasks go beyond the job description.', 'Meine tatsächlichen Aufgaben gehen über die Stellenbeschreibung hinaus.'),
      ['Formal HR document in Russian companies; from д+олжность (“post/role”).', 'Fester HR-Begriff für den Aufgabenkatalog einer Stelle (von д+олжность).']),
    N('ispytatelny', 'испыт+ательный срок', 'm', 'B2', 'probation period', 'die Probezeit',
      ex('[[Испыт+ательный срок]] в н+ашей комп+ании длится три м+есяца.', 'The probation period at our company lasts three months.', 'Die Probezeit in unserer Firma dauert drei Monate.'),
      ['Standard 3 months under Russian labour law; passing it = пройт+и испыт+ательный срок.', 'Regulär meist drei Monate; bestehen = пройт+и испыт+ательный срок.']),
    N('tekuchest', 'тек+учесть к+адров', 'f', 'C1', 'staff turnover', 'die Personalfluktuation',
      ex('Из-за перераб+оток в отд+еле выс+окая [[тек+учесть к+адров]].', 'Because of overtime, staff turnover in the department is high.', 'Wegen Überstunden ist die Fluktuation in der Abteilung hoch.'),
      ['In speech also текучка кадров.', 'Umgangssprachlich auch текучка кадров.']),
    N('samostoyatelnost', 'самосто+ятельность', 'f', 'B2', 'autonomy, independence', 'die Eigenständigkeit, die Eigenverantwortung',
      ex('В удалённой ком+анде цен+ят [[самосто+ятельность]] сотр+удников.', 'In a remote team, employee autonomy is valued.', 'Im Remote-Team schätzt man die Eigenständigkeit der Mitarbeitenden.'),
      ['Built from сам (“self”) + сто+ять (“stand”), literally “standing on one’s own” like Eigenständigkeit!', 'Wörtlich „Selbst-ständigkeit“ (сам + сто+ять) — parallele Bildung zu dt. Eigenständigkeit.'])
  ]);
})();
