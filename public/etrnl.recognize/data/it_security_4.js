/* Cybersecurity, batch 4: governance, protection & recovery. Curated (no official list for IT). */
GT.register({ tab: 'it', topic: 'security', items: [
{
  id: 'it-sec-datenschutz', pos: 'noun',
  de: 'Datenschutz', article: 'der',
  ru: 'защита (персональных) данных',
  usage: { says: 'german', note: 'Всегда по-немецки: «Datenschutz», «der/die Datenschutzbeauftragte», «DSGVO». «Privacy» почти не говорят.' },
  examples: [
    { de: 'Das dürfen wir aus Gründen des [[Datenschutzes]] nicht speichern.', ru: 'Это мы не имеем права хранить из соображений защиты данных.' },
    { de: 'Bei Fragen zum [[Datenschutz]] wenden Sie sich an unsere Datenschutzbeauftragte.', ru: 'По вопросам защиты данных обращайтесь к нашему уполномоченному по защите данных.' }
  ],
  morph: 'Daten-schutz', root: 'schützen',
  parts: [['Daten-', 'die Daten — данные'], ['Schutz', 'der Schutz — защита (от schützen)']],
  transparency: 'transparent',
  family: ['der Schutz', 'schützen', 'der/die Datenschutzbeauftragte', 'die DSGVO', 'die Datensicherheit'],
  note: 'Различайте: «Datenschutz» — защита персональных данных людей (право, DSGVO), «Datensicherheit / IT-Sicherheit» — техническая защита любых данных. «Die DSGVO» (Datenschutz-Grundverordnung) = GDPR.',
  why: {
    confidence: 'high',
    text: 'Состав: die Daten («данные») + der Schutz («защита», к schützen).\nПроисхождение: юридический термин закрепился в Германии с 1970 года, когда в земле Гессен приняли первый в мире закон о защите данных (Hessisches Datenschutzgesetz).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Datenschutz / Schutz',
    evidence: 'Daten + Schutz; термин вошёл в правовой оборот в ФРГ с 1970 г. (первый закон — Гессен, 1970).'
  },
  ru_link: null
},
{
  id: 'it-sec-personenbezogen', pos: 'phrase',
  de: 'personenbezogene Daten',
  ru: 'персональные данные',
  usage: { says: 'german', note: 'Юридический термин из DSGVO — используется всегда. В разговоре проще: «persönliche Daten».' },
  examples: [
    { de: 'In der Datei stehen [[personenbezogene Daten]] von über 2000 Kunden.', ru: 'В файле содержатся персональные данные более 2000 клиентов.' },
    { de: 'E-Mail-Adressen sind auch [[personenbezogene Daten]].', ru: 'Адреса электронной почты — тоже персональные данные.' }
  ],
  morph: 'personen-bezogen', root: 'ziehen',
  parts: [['Personen-', 'die Person(en) — лицо, человек'], ['bezogen', 'причастие от beziehen (auf) — относящийся к']],
  transparency: 'transparent',
  family: ['die Person', 'sich beziehen auf', 'der Bezug', 'die Daten', 'der Datenschutz'],
  note: 'Прилагательное склоняется: «personenbezogene Daten», но «die Verarbeitung personenbezogener Daten» (Genitiv). «Besondere Kategorien» — особые категории (здоровье, религия и т. п.).',
  why: {
    confidence: 'high',
    root: 'ziehen',
    text: 'Состав: die Person(en) («лицо») + bezogen (причастие II от beziehen auf «относить к»).\nПроисхождение: die Person восходит к латинскому persōna («актёрская маска → роль → человек, правовое лицо»). Сочетание буквально значит «данные, относящиеся к конкретному лицу».\nПрозрачность: прозрачно, если знать оборот sich beziehen auf.',
    source: 'DWDS (Pfeifer), s.v. Person / beziehen',
    evidence: 'Person (< лат. persōna «маска, роль, лицо») + причастие bezogen (от beziehen auf).'
  },
  ru_link: null
},
{
  id: 'it-sec-vertraulich', pos: 'adjective',
  de: 'vertraulich',
  ru: 'конфиденциальный',
  usage: { says: 'german', note: '«Vertraulich», «streng vertraulich» — гриф и обычная речь. «Confidential» — только в англоязычных шаблонах.' },
  examples: [
    { de: 'Dieses Dokument ist [[vertraulich]] und darf nicht weitergeleitet werden.', ru: 'Этот документ конфиденциален, его нельзя пересылать.' },
    { de: 'Bitte behandeln Sie die Informationen [[vertraulich]].', ru: 'Пожалуйста, обращайтесь с информацией конфиденциально.' }
  ],
  morph: 'ver-trau-lich', root: 'trauen',
  parts: [['ver-', 'неотделяемая приставка (vertrauen — доверять)'], ['trau', 'основа trauen — доверять'], ['-lich', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['vertrauen', 'das Vertrauen', 'die Vertraulichkeit', 'trauen', 'misstrauen'],
  note: 'Буквально «доверительный». Типичные грифы: «öffentlich, intern, vertraulich, streng vertraulich». «Die Vertraulichkeit» — конфиденциальность (одна из целей защиты).',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола vertrauen (ver- + trauen «доверять») + суффикс -lich.\nПроисхождение: trauen родственно прилагательному treu («верный») и английскому true («истинный, верный»). vertraulich — буквально «доверительный, переданный под доверие» → «конфиденциальный» (ср. лат. cōnfīdere → confidential).\nПрозрачность: переносная, связь с Vertrauen («доверие») хорошо видна.',
    source: 'DWDS (Pfeifer), s.v. trauen / vertrauen / vertraulich',
    evidence: 'От vertrauen (к trauen / treu, родственно англ. true) + -lich: «доверительный → конфиденциальный».'
  },
  ru_link: null
},
{
  id: 'it-sec-schutzziel', pos: 'noun',
  de: 'Schutzziel', article: 'das', plural: 'die Schutzziele',
  ru: 'цель защиты (информационной безопасности)',
  usage: { says: 'german', note: 'Термин BSI и ISO-документации: «die drei Schutzziele». В англ. материалах — «CIA Triad».' },
  examples: [
    { de: 'Die drei klassischen [[Schutzziele]] sind Vertraulichkeit, Integrität und Verfügbarkeit.', ru: 'Три классические цели защиты — конфиденциальность, целостность и доступность.' },
    { de: 'Welches [[Schutzziel]] ist bei diesem Vorfall betroffen?', ru: 'Какая цель защиты затронута в этом инциденте?' }
  ],
  morph: 'Schutz-ziel', root: 'Schutz · Ziel',
  parts: [['Schutz-', 'der Schutz — защита'], ['Ziel', 'das Ziel — цель']],
  transparency: 'transparent',
  family: ['der Schutz', 'das Ziel', 'die Integrität', 'die Vertraulichkeit', 'die Verfügbarkeit'],
  note: 'Средний род из-за «das Ziel». «Betroffen sein» — быть затронутым (очень частое слово в отчётах об инцидентах).',
  why: {
    confidence: 'high',
    text: 'Состав: der Schutz («защита») + das Ziel («цель»).\nПроисхождение: das Ziel (др.-в.-нем. zil) первоначально значило «предел, граница, отметка, в которую метятся». Сложное слово Schutzziel закрепилось в немецком праве, охране труда и стандартах BSI.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Ziel / Schutz',
    evidence: 'Schutz + Ziel (< др.-в.-нем. zil «граница, предел, мишень»).'
  },
  ru_link: null
},
{
  id: 'it-sec-verfuegbarkeit', pos: 'noun',
  de: 'Verfügbarkeit', article: 'die',
  ru: 'доступность (системы, сервиса)',
  usage: { says: 'both', note: '«Verfügbarkeit» — стандарт (в SLA: «Verfügbarkeit von 99,9 %»). В эксплуатации также «Availability», «Uptime».' },
  examples: [
    { de: 'Der Vertrag garantiert eine [[Verfügbarkeit]] von 99,9 Prozent.', ru: 'Договор гарантирует доступность 99,9 процента.' },
    { de: 'Die DDoS-Attacke hat die [[Verfügbarkeit]] des Shops stark eingeschränkt.', ru: 'DDoS-атака сильно ограничила доступность магазина.' }
  ],
  morph: 'ver-füg-bar-keit', root: 'fügen',
  parts: [['ver-', 'неотделяемая приставка'], ['füg', 'основа verfügen — располагать'], ['-bar', '«можно…»'], ['-keit', 'прилагательное → существительное, всегда die']],
  transparency: 'figurative',
  family: ['verfügbar', 'verfügen über', 'die Verfügung', 'zur Verfügung stehen', 'nicht verfügbar'],
  note: '«Verfügbar» — доступный, имеющийся. «Zur Verfügung stehen» — быть в распоряжении («Ich stehe für Fragen zur Verfügung»). «Über etw. verfügen» — располагать чем-то.',
  why: {
    confidence: 'high',
    text: 'Состав: прилагательное verfügbar (от verfügen + -bar) + суффикс -keit.\nПроисхождение: verfügen образовано от fügen («складывать, прилаживать, устраивать»): «распорядиться, иметь в распоряжении». Отсюда verfügbar — «то, чем можно распоряжаться, доступный», и существительное Verfügbarkeit.\nПрозрачность: прозрачно относительно глагола verfügen über и выражения zur Verfügung stehen.',
    source: 'DWDS (Pfeifer), s.v. verfügen / fügen',
    evidence: 'От verfügbar < verfügen («распоряжаться», от fügen «соединять, устраивать») + -keit.'
  },
  ru_link: null
},
{
  id: 'it-sec-richtlinie', pos: 'noun',
  de: 'Richtlinie', article: 'die', plural: 'die Richtlinien',
  ru: 'политика, правило, директива',
  usage: { says: 'both', note: '«Richtlinie», «Sicherheitsrichtlinie» — стандарт в компаниях. Говорят и «Policy» (die Policy), особенно о технических политиках (Gruppenrichtlinie = GPO).' },
  examples: [
    { de: 'Laut [[Richtlinie]] müssen Passwörter mindestens 12 Zeichen haben.', ru: 'Согласно политике пароли должны быть не короче 12 символов.' },
    { de: 'Die neue [[Richtlinie]] zum Homeoffice gilt ab Januar.', ru: 'Новое правило о работе из дома действует с января.' }
  ],
  morph: 'Richt-linie', root: 'richten',
  parts: [['Richt-', 'основа richten — направлять, выравнивать'], ['Linie', 'die Linie — линия']],
  transparency: 'figurative',
  family: ['richten', 'die Richtung', 'die Gruppenrichtlinie', 'die Linie', 'die Vorgabe'],
  note: '«Eine Richtlinie gilt / tritt in Kraft» — правило действует / вступает в силу. «Gegen die Richtlinie verstoßen» — нарушить политику. Также директива ЕС: «die NIS-2-Richtlinie».',
  why: {
    confidence: 'high',
    text: 'Состав: основа глагола richten («направлять, выравнивать») + die Linie («линия»).\nПроисхождение: die Linie заимствовано из латинского līnea («льняная нить, строительный шнур, прямая линия»). Richtlinie буквально значило «направляющая линия, ориентир», откуда с XIX–XX вв. — «руководящее правило, директива».\nПрозрачность: переносная, образ «направляющей линии» очень наглядный.',
    source: 'DWDS (Pfeifer), s.v. Richtlinie / Linie',
    evidence: 'richten («направлять») + Linie (< лат. līnea «льняная нить, шнур, линия»): «ориентир → правило, директива».'
  },
  ru_link: null
},
{
  id: 'it-sec-vorgabe', pos: 'noun',
  de: 'Vorgabe', article: 'die', plural: 'die Vorgaben',
  ru: 'требование, установка, норматив',
  usage: { says: 'german', note: '«Vorgaben» — очень частое офисное слово: «gesetzliche Vorgaben», «die Vorgaben vom Kunden». Английского аналога в речи нет.' },
  examples: [
    { de: 'Wir müssen die [[Vorgaben]] des BSI umsetzen.', ru: 'Нам нужно выполнить требования BSI.' },
    { de: 'Gibt es eine [[Vorgabe]], wie lange wir die Logs speichern?', ru: 'Есть ли норматив, сколько хранить логи?' }
  ],
  morph: 'Vor-gabe', root: 'geben',
  parts: [['Vor-', 'вперёд, заранее (vorgeben — задавать)'], ['Gabe', 'от geben — давать']],
  transparency: 'figurative',
  family: ['vorgeben', 'geben', 'die Angabe', 'die Richtlinie', 'die Anforderung'],
  note: '«Vorgaben umsetzen / einhalten» — выполнять / соблюдать требования. «Vorgeben» — задавать заранее; ещё и «притворяться» («Er gibt vor, vom Support zu sein»).',
  why: {
    confidence: 'high',
    root: 'geben',
    text: 'Состав: от глагола vorgeben (vor- «заранее, вперёд» + geben «давать»).\nПроисхождение: буквально «то, что задано заранее (как рамка или норма)»; сначала встречалось и в спорте («фора»), затем закрепилось в деловом и техническом языке как «норматив, требование».\nПрозрачность: переносная, хорошо связывается с vorgeben.',
    source: 'DWDS, s.v. Vorgabe / vorgeben',
    evidence: 'Отглагольное имя от vorgeben (vor- + geben «задавать заранее»): «заданная норма, требование».'
  },
  ru_link: null
},
{
  id: 'it-sec-massnahme', pos: 'noun',
  de: 'Maßnahme', article: 'die', plural: 'die Maßnahmen',
  ru: 'мера, мероприятие',
  usage: { says: 'german', note: 'Ключевое слово отчётов и аудитов: «technische und organisatorische Maßnahmen (TOM)». «Controls» — в англоязычных стандартах.' },
  examples: [
    { de: 'Welche [[Maßnahmen]] haben wir nach dem Vorfall ergriffen?', ru: 'Какие меры мы приняли после инцидента?' },
    { de: 'Als erste [[Maßnahme]] haben wir alle Passwörter zurückgesetzt.', ru: 'В качестве первой меры мы сбросили все пароли.' }
  ],
  morph: 'Maß-nahme', root: 'nehmen',
  parts: [['Maß-', 'das Maß — мера'], ['Nahme', 'отглагольное от nehmen — брать']],
  transparency: 'figurative',
  family: ['das Maß', 'nehmen', 'die TOM', 'die Gegenmaßnahme', 'die Sofortmaßnahme'],
  note: '«Maßnahmen ergreifen / treffen / umsetzen» — принимать / осуществлять меры. «Die Sofortmaßnahme» — срочная мера, «die Gegenmaßnahme» — контрмера. Пишется с ß.',
  why: {
    confidence: 'high',
    root: 'nehmen',
    text: 'Состав: das Maß («мера») + -nahme (отглагольная основа от nehmen «брать»).\nПроисхождение: сложение появилось в XIX в. в деловом и административном языке — буквально «принятие меры» (часто сопоставляют с французским оборотом prendre des mesures «принимать меры»).\nПрозрачность: переносная, обе части легко узнаются.',
    source: 'DWDS (Pfeifer), s.v. Maßnahme',
    evidence: 'Сложение XIX в. из Maß («мера») + -nahme (от nehmen «брать»); сопоставляется с фр. prendre des mesures.'
  },
  ru_link: null
},
{
  id: 'it-sec-risiko', pos: 'noun',
  de: 'Risiko', article: 'das', plural: 'die Risiken',
  ru: 'риск',
  usage: { says: 'german', note: '«Risiko», «Risikoanalyse», «Restrisiko» — стандарт. «Risk» — только в англоязычных инструментах.' },
  examples: [
    { de: 'Das [[Risiko]] ist gering, aber wir sollten trotzdem patchen.', ru: 'Риск невелик, но пропатчить всё равно стоит.' },
    { de: 'Die größten [[Risiken]] sehen wir bei alten Systemen.', ru: 'Самые большие риски мы видим в старых системах.' }
  ],
  morph: 'Risiko',
  family: ['riskieren', 'riskant', 'die Risikoanalyse', 'das Restrisiko', 'die Risikobewertung'],
  note: 'Средний род; мн. ч. «die Risiken». «Ein Risiko eingehen / tragen / akzeptieren» — пойти на риск / нести / принять риск. «Das Restrisiko» — остаточный риск.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Risiken).\nПроисхождение: заимствовано в XVI в. в языке торговли и морского страхования из итальянского risico / rischio (оттуда же пришло и русское «риск»). Происхождение самого итальянского слова спорное (выдвигают версии от греческого rhíza «утёс, скала» и от арабского rizq).\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Risiko; Vasmer: риск',
    evidence: 'В XVI в. из итал. risico/rischio (торговое и морское право); более ранняя этимология спорная.'
  },
  ru_link: { type: 'internationalism', text: 'риск: оба пришли из итальянского risico / rischio.' }
},
{
  id: 'it-sec-bewerten', pos: 'verb',
  de: 'bewerten', forms: { praes: 'bewertet', praet: 'bewertete', perf: 'hat bewertet' }, gov: '+ Akk.',
  ru: 'оценивать',
  usage: { says: 'german', note: '«Bewerten», «die Bewertung», «Risikobewertung» — стандарт. «Assessment» — в англоязычных рамках.' },
  examples: [
    { de: 'Wir müssen das Risiko neu [[bewerten]].', ru: 'Нам нужно заново оценить риск.' },
    { de: 'Die Schwachstelle wurde als kritisch [[bewertet]].', ru: 'Уязвимость оценили как критическую.' }
  ],
  morph: 'be-wert-en', root: 'Wert',
  parts: [['be-', 'неотделяемая приставка (делает переходным)'], ['Wert', 'der Wert — ценность'], ['-en', 'окончание инфинитива']],
  transparency: 'transparent',
  family: ['der Wert', 'die Bewertung', 'auswerten', 'die Risikobewertung', 'wertvoll'],
  note: '«Etw. als … bewerten» — оценить как … Не путать с «auswerten» (анализировать данные). «Die Bewertung» — оценка; ещё и отзыв (в интернет-магазине).',
  why: {
    confidence: 'high',
    text: 'Состав: неотделяемая приставка be- + werten (от der Wert «ценность, цена»).\nПроисхождение: буквально «наделить оценкой, определить ценность или значимость» (аналогично русскому «о-ценить» от «цена»).\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. Wert / bewerten',
    evidence: 'be- + werten (от der Wert «ценность, цена»): «определять ценность, оценивать».'
  },
  ru_link: null
},
{
  id: 'it-sec-audit', pos: 'noun',
  de: 'Audit', article: 'das', plural: 'die Audits',
  ru: 'аудит, проверка',
  usage: { says: 'both', note: '«Das Audit» — стандарт (иногда «der Audit»). По-немецки также «die Prüfung», «die Revision» (внутренний аудит).' },
  examples: [
    { de: 'Nächste Woche ist das [[Audit]] für die ISO-Zertifizierung.', ru: 'На следующей неделе аудит для сертификации ISO.' },
    { de: 'Beim letzten [[Audit]] gab es drei Abweichungen.', ru: 'На последнем аудите было три несоответствия.' }
  ],
  morph: 'Audit',
  family: ['der Auditor', 'die Auditorin', 'auditieren', 'die Prüfung', 'die Revision'],
  note: '«Die Abweichung» — несоответствие (findings). «Ein Audit bestehen» — пройти аудит. «Die Revision» в компании — внутренний аудит, а не «ревизия» в русском бытовом смысле.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: английское audit восходит к латинскому audītus («слушание», от audīre «слушать»): в Средние века финансовые отчёты проверяли, заслушивая их вслух перед проверяющими. Позже термин расширился на проверки качества и ИБ.\nПрозрачность: историческая связь со «слушанием» (ср. «аудио») в современном языке скрыта.',
    source: 'OED / DWDS, s.v. Audit / audit',
    evidence: 'Из англ. audit < лат. audītus («слушание», от audīre): средневековая устная проверка счетов.'
  },
  ru_link: { type: 'internationalism', text: 'аудит: оба из английского audit (от латинского audire — «слушать»).' }
},
{
  id: 'it-sec-zertifizierung', pos: 'noun',
  de: 'Zertifizierung', article: 'die', plural: 'die Zertifizierungen',
  ru: 'сертификация',
  usage: { says: 'german', note: '«Zertifizierung nach ISO 27001», «zertifiziert sein» — стандарт.' },
  examples: [
    { de: 'Die [[Zertifizierung]] nach ISO 27001 ist für unsere Kunden sehr wichtig.', ru: 'Сертификация по ISO 27001 очень важна для наших клиентов.' },
    { de: 'Ich mache gerade eine [[Zertifizierung]] als Security Analyst.', ru: 'Я сейчас прохожу сертификацию как security-аналитик.' }
  ],
  morph: 'Zertifiz-ier-ung', root: 'Zertifikat',
  parts: [['Zertifiz', 'основа от das Zertifikat — сертификат'], ['-ier', 'суффикс глаголов из иностранных слов'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['das Zertifikat', 'zertifizieren', 'zertifiziert', 'die Rezertifizierung'],
  note: '«Nach + Dat. zertifiziert sein» — быть сертифицированным по … Для людей тоже: «eine Zertifizierung machen / ablegen» — сдать сертификацию.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола zertifizieren + суффикс -ung.\nПроисхождение: средневековое латинское certificāre («удостоверять, делать достоверным») сложено из certus («верный, надёжный») + facere («делать»). В немецком оформлено продуктивной цепочкой -ier- + -ung.\nПрозрачность: международный корень.',
    source: 'DWDS (Pfeifer), s.v. Zertifikat / zertifizieren',
    evidence: 'От zertifizieren < ср.-лат. certificāre (certus «верный» + facere «делать») + -ung.'
  },
  ru_link: { type: 'internationalism', text: 'сертификация: тот же латинский корень (certus — «верный, определённый»).' }
},
{
  id: 'it-sec-nachweis', pos: 'noun',
  de: 'Nachweis', article: 'der', plural: 'die Nachweise',
  ru: 'доказательство, подтверждение (документальное)',
  usage: { says: 'german', note: 'На аудитах — «Nachweise» (evidence). Очень частое слово в немецкой бюрократии вообще.' },
  examples: [
    { de: 'Für das Audit brauchen wir [[Nachweise]], dass alle Mitarbeiter geschult wurden.', ru: 'Для аудита нам нужны подтверждения, что все сотрудники прошли обучение.' },
    { de: 'Bitte schicken Sie uns einen [[Nachweis]] über Ihre Qualifikation.', ru: 'Пожалуйста, пришлите нам подтверждение вашей квалификации.' }
  ],
  morph: 'Nach-weis', root: 'weisen',
  parts: [['Nach-', 'после, вслед (nachweisen — доказывать)'], ['weis', 'основа weisen — указывать']],
  transparency: 'figurative',
  family: ['nachweisen', 'der Beweis', 'der Hinweis', 'der Ausweis', 'die Überweisung'],
  note: '«Einen Nachweis erbringen / vorlegen» — предоставить подтверждение. Глагол «nachweisen» — доказать. «Der Beweis» — доказательство (в суде), «der Nachweis» — скорее документ-подтверждение.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола nachweisen (nach- «вслед, по следам» + weisen «указывать»).\nПроисхождение: nachweisen («проследить и показать достоверно → доказать») дало в XVIII–XIX вв. существительное der Nachweis для документального подтверждения. Вся семья weisen (Ausweis, Beweis, Hinweis, Nachweis) строится вокруг идеи «указывать».\nПрозрачность: переносная, хорошо запоминается в семье -weis.',
    source: 'DWDS (Pfeifer), s.v. nachweisen / weisen',
    evidence: 'Отглагольное имя от nachweisen (nach- + weisen «указывать, удостоверять»).'
  },
  ru_link: null
},
{
  id: 'it-sec-schulung', pos: 'noun',
  de: 'Schulung', article: 'die', plural: 'die Schulungen',
  ru: 'обучение, тренинг (для сотрудников)',
  usage: { says: 'both', note: '«Schulung» — стандарт в компаниях. «Training» тоже говорят; «Awareness-Schulung» — смесь.' },
  examples: [
    { de: 'Die [[Schulung]] zur IT-Sicherheit ist für alle Pflicht.', ru: 'Обучение по IT-безопасности обязательно для всех.' },
    { de: 'Nach der [[Schulung]] klicken deutlich weniger Kollegen auf Phishing-Links.', ru: 'После обучения на фишинговые ссылки нажимает заметно меньше коллег.' }
  ],
  morph: 'Schul-ung', root: 'Schule',
  parts: [['Schul', 'основа schulen (от die Schule — школа)'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['die Schule', 'schulen', 'geschult', 'die Weiterbildung', 'das Training'],
  note: 'Глагол «schulen» — обучать сотрудников: «Die Mitarbeiter werden regelmäßig geschult». «Die Weiterbildung» — повышение квалификации (шире).',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола schulen («обучать», к die Schule) + -ung.\nПроисхождение: die Schule заимствовано рано (др.-в.-нем. scuola) из латинского schola < греческого scholḗ, которое изначально значило «досуг, свободное время для бесед и занятий науками» (оттуда же и русское «школа»).\nПрозрачность: полностью прозрачное образование от Schule.',
    source: 'DWDS (Pfeifer), s.v. Schule / schulen',
    evidence: 'От schulen < Schule (< лат. schola < греч. scholḗ «досуг, занятие науками») + -ung.'
  },
  ru_link: null
},
{
  id: 'it-sec-sensibilisierung', pos: 'noun',
  de: 'Sensibilisierung', article: 'die',
  ru: 'повышение осведомлённости (awareness)',
  usage: { says: 'both', note: 'Официально — «Sensibilisierung der Mitarbeiter». В командах безопасности чаще «Awareness», «Security Awareness».' },
  examples: [
    { de: 'Die [[Sensibilisierung]] der Mitarbeiter ist genauso wichtig wie die Technik.', ru: 'Повышение осведомлённости сотрудников так же важно, как техника.' },
    { de: 'Mit dieser Kampagne wollen wir die [[Sensibilisierung]] für Phishing erhöhen.', ru: 'Этой кампанией мы хотим повысить осведомлённость о фишинге.' }
  ],
  morph: 'Sensibilisierung',
  family: ['sensibilisieren', 'sensibel', 'die Awareness', 'die Schulung'],
  note: '«Jdn. für etw. sensibilisieren» — обратить чьё-то внимание на проблему. «Sensibel» — чувствительный; «sensible Daten» — чувствительные (конфиденциальные) данные — а не «разумные»!',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола sensibilisieren (к sensibel «чувствительный») + -ung.\nПроисхождение: sensibel пришло из французского sensible (< лат. sēnsibilis «восприимчивый, чувствительный», от sentīre «чувствовать»). Сделать сотрудников «чувствительными» к угрозам — буквально повысить их бдительность (awareness).\nПрозрачность: объясняет, почему sensibel значит «чувствительный», а не английское sensible («разумный»).',
    source: 'DWDS (Pfeifer), s.v. sensibel',
    evidence: 'От sensibilisieren < sensibel (< фр. sensible < лат. sēnsibilis «чувствительный», к sentīre).'
  },
  ru_link: null
},
{
  id: 'it-sec-zertifikat', pos: 'noun',
  de: 'Zertifikat', article: 'das', plural: 'die Zertifikate',
  ru: 'сертификат (в т. ч. TLS-сертификат)',
  usage: { says: 'german', note: '«Das Zertifikat», «das TLS-Zertifikat» — стандарт. «Cert» — сленг в техкомандах.' },
  examples: [
    { de: 'Das [[Zertifikat]] für die Webseite läuft nächste Woche ab.', ru: 'Сертификат сайта истекает на следующей неделе.' },
    { de: 'Der Browser zeigt eine Warnung, weil das [[Zertifikat]] ungültig ist.', ru: 'Браузер показывает предупреждение, потому что сертификат недействителен.' }
  ],
  morph: 'Zertifikat',
  family: ['zertifizieren', 'die Zertifizierung', 'gültig', 'ungültig', 'ablaufen'],
  note: '«Ein Zertifikat ausstellen / erneuern / widerrufen» — выпустить / обновить / отозвать. «Gültig / ungültig» — действительный / недействительный. Также сертификат об окончании курса.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Zertifikate).\nПроисхождение: из средневекового латинского certificātum («удостоверение, подтверждённый документ», от certus «верный, достоверный» + facere «делать»). В криптографии и TLS — цифровой документ, подтверждающий подлинность ключа.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Zertifikat',
    evidence: 'Из ср.-лат. certificātum («удостоверенное», от certus + facere).'
  },
  ru_link: { type: 'internationalism', text: 'сертификат: оба от средневекового латинского certificatum.' }
},
{
  id: 'it-sec-ablaufen', pos: 'verb',
  de: 'ablaufen', forms: { praes: 'läuft ab', praet: 'lief ab', perf: 'ist abgelaufen' },
  ru: 'истекать (о сроке); проходить, протекать (о процессе)',
  usage: { says: 'german', note: '«Das Zertifikat / Passwort läuft ab» — стандарт. «Expiren» — сленг, редкость.' },
  examples: [
    { sense: 'истекать (о сроке)', de: 'Dein Passwort [[läuft]] in drei Tagen [[ab]].', ru: 'Твой пароль истекает через три дня.' },
    { sense: 'протекать, проходить (о процессе)', de: 'Wie ist der Angriff genau [[abgelaufen]]?', ru: 'Как именно протекала атака?' }
  ],
  morph: 'ab-lauf-en', root: 'laufen',
  parts: [['ab-', 'прочь, до конца (отделяемая)'], ['lauf', 'основа laufen — бежать, идти'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['laufen', 'der Ablauf', 'das Ablaufdatum', 'abgelaufen', 'verlaufen'],
  meaningType: 'polysemous',
  meaningExplanation: 'У ablaufen два частых словарных значения: «истекать» (о сроке действия сертификата, договора) и «протекать, проходить» (о процессе, встрече).',
  meaningExamples: [{ de: 'Das Zertifikat läuft morgen ab.', ru: 'Сертификат истекает завтра.' }, { de: 'Wie ist das Audit abgelaufen?', ru: 'Как прошёл аудит?' }],
  note: 'Perfekt с sein: «Das Zertifikat ist abgelaufen». «Der Ablauf» — процесс, последовательность действий («der Ablauf eines Incidents»). «Das Ablaufdatum» — срок годности / истечения.',
  why: {
    confidence: 'high',
    text: 'Состав: отделяемая приставка ab- («вниз, до конца») + laufen («бежать, течь»).\nПроисхождение: от физического «стекать вниз до конца» (как песок в песочных часах или вода) развились два значения: «протекать» (о процессе) и «истечь» (о сроке действия, ср. русское «срок истёк»).\nПрозрачность: переносная, метафора часов делает смысл наглядным.',
    source: 'DWDS (Pfeifer), s.v. ablaufen / laufen',
    evidence: 'ab- + laufen («стекать, пробегать до конца»): образ песочных/водяных часов → «истечь (о сроке)».'
  },
  ru_link: null
},
{
  id: 'it-sec-signatur', pos: 'noun',
  de: 'Signatur', article: 'die', plural: 'die Signaturen',
  ru: 'подпись (электронная); сигнатура (в антивирусе)',
  usage: { says: 'german', note: '«Signatur» — и электронная подпись, и сигнатура вредоноса, и подпись в конце письма. «Signieren» — подписывать.' },
  examples: [
    { sense: 'электронная подпись', de: 'Die Mail hat eine gültige digitale [[Signatur]].', ru: 'У письма действительная цифровая подпись.' },
    { sense: 'сигнатура вредоносного ПО', de: 'Für diese neue Malware gibt es noch keine [[Signatur]].', ru: 'Для этой новой малвари ещё нет сигнатуры.' }
  ],
  morph: 'Signatur',
  family: ['signieren', 'die Unterschrift', 'die E-Mail-Signatur', 'signaturbasiert'],
  meaningType: 'polysemous',
  meaningExplanation: 'Signatur означает электронную подпись (или блок подписи в письме), а в антивирусах и IDS — сигнатуру (шаблон) известной угрозы.',
  meaningExamples: [{ de: 'eine digitale Signatur prüfen', ru: 'проверить цифровую подпись' }, { de: 'neue Signaturen im Virenscanner', ru: 'новые сигнатуры в антивирусе' }],
  note: 'Подпись от руки — «die Unterschrift». «Signaturbasierte Erkennung» — сигнатурное обнаружение. «Die E-Mail-Signatur» — подпись в конце письма.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Signaturen).\nПроисхождение: из средневекового латинского signātūra («отметка, знак, подпись», от signāre «помечать» < signum «знак»). В IT объединяет цифровую подпись и характерный «отпечаток» вредоносной программы.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Signatur',
    evidence: 'Из ср.-лат. signātūra («отметка, подпись», от signāre < signum «знак»).'
  },
  ru_link: { type: 'internationalism', text: 'сигнатура: оба от латинского signatura (signare — «отмечать»).' }
},
{
  id: 'it-sec-segmentierung', pos: 'noun',
  de: 'Segmentierung', article: 'die', plural: 'die Segmentierungen',
  ru: 'сегментация (сети)',
  usage: { says: 'both', note: '«Netzsegmentierung», «Segmentierung» — стандарт. Говорят и «Netzwerk-Segmente», «Zonen».' },
  examples: [
    { de: 'Dank der [[Segmentierung]] konnte sich die Schadsoftware nicht weiter ausbreiten.', ru: 'Благодаря сегментации вредоносное ПО не смогло распространиться дальше.' },
    { de: 'Die Produktionsanlagen brauchen eine strikte [[Segmentierung]].', ru: 'Производственным установкам нужна строгая сегментация.' }
  ],
  morph: 'Segment-ier-ung', root: 'Segment',
  parts: [['Segment', 'das Segment — сегмент, отрезок'], ['-ier', 'суффикс глаголов из иностранных слов'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['das Segment', 'segmentieren', 'die Netzsegmentierung', 'die Zone'],
  note: '«Sich ausbreiten» — распространяться (о малвари, эпидемии). «Lateral Movement» в SOC говорят по-английски; по-немецки описательно — «seitliche Bewegung im Netz».',
  why: {
    confidence: 'high',
    text: 'Состав: существительное das Segment + глагольный суффикс -ier- + -ung.\nПроисхождение: Segment заимствовано из латинского segmentum («отрезок, отрезанный кусок», от secāre «резать», того же корня «сектор» и «секция»). В сетях — разбиение сети на изолированные участки.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Segment',
    evidence: 'От das Segment (< лат. segmentum «отрезок», к secāre «резать») + -ier- + -ung.'
  },
  ru_link: { type: 'internationalism', text: 'сегментация: от латинского segmentum («отрезок»).' }
},
{
  id: 'it-sec-aktualisieren', pos: 'verb',
  de: 'aktualisieren', forms: { praes: 'aktualisiert', praet: 'aktualisierte', perf: 'hat aktualisiert' }, gov: '+ Akk.',
  ru: 'обновлять (ПО, данные)',
  usage: { says: 'both', note: 'В интерфейсах и инструкциях — «aktualisieren», «die Aktualisierung». В разговоре — «updaten» (hat geupdatet) и «das Update».' },
  examples: [
    { de: 'Bitte [[aktualisieren]] Sie Ihren Browser auf die neueste Version.', ru: 'Пожалуйста, обновите браузер до последней версии.' },
    { de: 'Die Virensignaturen werden stündlich [[aktualisiert]].', ru: 'Антивирусные сигнатуры обновляются каждый час.' }
  ],
  morph: 'aktual-isier-en', root: 'aktuell',
  parts: [['aktual', 'основа от aktuell — текущий'], ['-isier', 'суффикс глаголов из иностранных слов'], ['-en', 'окончание инфинитива']],
  transparency: 'transparent',
  family: ['aktuell', 'die Aktualisierung', 'das Update', 'updaten', 'veraltet'],
  note: 'Partizip без ge-: aktualisiert. «Die Seite aktualisieren» — обновить страницу (F5). Внимание: «aktuell» = текущий, а не «актуальный, важный».',
  why: {
    confidence: 'high',
    text: 'Состав: основа от aktuell + суффикс -isieren.\nПроисхождение: aktuell заимствовано в XIX в. из французского actuel (< позднелат. āctuālis «действенный, наличный сейчас»). Поэтому aktualisieren — «привести к текущему состоянию, обновить».\nПрозрачность: объясняет, почему aktuell = «текущий», а не русское «важный».',
    source: 'DWDS (Pfeifer), s.v. aktuell / aktualisieren',
    evidence: 'От aktuell (< фр. actuel < позднелат. āctuālis «действующий сейчас, текущий») + -isieren.'
  },
  ru_link: { type: 'false_friend', text: '«aktuell» значит «текущий, последний» («die aktuelle Version»), а русское «актуальный» чаще «важный, своевременный». Отсюда легко ошибиться.' }
},
{
  id: 'it-sec-veraltet', pos: 'adjective',
  de: 'veraltet',
  ru: 'устаревший',
  usage: { says: 'german', note: '«Veraltet» — стандарт для ПО и систем. «Legacy» — в техкомандах («Legacy-System»). «End of Life» — тоже английский.' },
  examples: [
    { de: 'Auf dem Server läuft noch ein [[veraltetes]] Betriebssystem.', ru: 'На сервере всё ещё стоит устаревшая операционная система.' },
    { de: 'Die Dokumentation ist leider [[veraltet]].', ru: 'Документация, к сожалению, устарела.' }
  ],
  morph: 'ver-alt-et', root: 'alt',
  parts: [['ver-', 'неотделяемая приставка (изменение состояния)'], ['alt', 'alt — старый'], ['-et', 'окончание причастия II']],
  transparency: 'transparent',
  family: ['alt', 'veralten', 'das Alter', 'aktuell', 'nicht mehr unterstützt'],
  note: 'Причастие от «veralten» — устаревать. Для ПО без поддержки: «wird nicht mehr unterstützt» — больше не поддерживается.',
  why: {
    confidence: 'high',
    text: 'Состав: причастие II от veralten (ver- + alt «старый»).\nПроисхождение: продуктивная модель ver- + прилагательное («стать каким-либо», ср. verbessern, verlängern): veralten — «состариться, выйти из употребления».\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. veralten / alt',
    evidence: 'Причастие от veralten (ver- «изменение состояния» + alt «старый»).'
  },
  ru_link: null
},
{
  id: 'it-sec-konfiguration', pos: 'noun',
  de: 'Konfiguration', article: 'die', plural: 'die Konfigurationen',
  ru: 'конфигурация, настройка',
  usage: { says: 'both', note: '«Konfiguration», «falsch konfiguriert», «die Fehlkonfiguration» — стандарт. Разговорно — «die Config», «die Einstellungen».' },
  examples: [
    { de: 'Die Ursache war eine fehlerhafte [[Konfiguration]] der Firewall.', ru: 'Причиной была ошибочная конфигурация файрвола.' },
    { de: 'Bevor du etwas änderst, sichere bitte die alte [[Konfiguration]].', ru: 'Прежде чем что-то менять, сохрани, пожалуйста, старую конфигурацию.' }
  ],
  morph: 'Konfiguration',
  family: ['konfigurieren', 'die Fehlkonfiguration', 'die Einstellung', 'einstellen', 'die Config'],
  note: '«Konfigurieren» — настраивать (Partizip: konfiguriert). Для обычных пользователей понятнее «die Einstellungen» — настройки.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование (мн. ч. die Konfigurationen).\nПроисхождение: из латинского cōnfigūrātio («придание формы, взаимное расположение», от con- «вместе» + figūra «форма»). Сначала термин астрономии и химии, с XX в. — настройка состава и параметров IT-систем.\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Konfiguration',
    evidence: 'Из лат. cōnfigūrātio («взаимное расположение, оформление», к figūra).'
  },
  ru_link: { type: 'internationalism', text: 'конфигурация: оба от латинского configuratio.' }
},
{
  id: 'it-sec-haerten', pos: 'verb',
  de: 'härten', forms: { praes: 'härtet', praet: 'härtete', perf: 'hat gehärtet' }, gov: '+ Akk.',
  ru: 'укреплять защиту (харденинг), закалять',
  usage: { says: 'both', note: '«Ein System härten», «die Härtung» — стандарт у BSI. В техкомандах также «Hardening».' },
  examples: [
    { de: 'Bevor der Server online geht, müssen wir ihn [[härten]].', ru: 'Прежде чем сервер выйдет в сеть, его нужно захарденить.' },
    { de: 'Die Clients werden nach dem CIS-Benchmark [[gehärtet]].', ru: 'Клиенты укрепляются по CIS Benchmark.' }
  ],
  morph: 'härt-en', root: 'hart',
  family: ['hart', 'die Härte', 'die Härtung', 'abhärten'],
  note: 'От «hart» — твёрдый. Вставное -e-: er härtet. «Die Härtung» — харденинг (отключение лишних сервисов, настройки безопасности). В быту «sich abhärten» — закаляться.',
  why: {
    confidence: 'high',
    text: 'Состав: от прилагательного hart («твёрдый, жёсткий», англ. hard) с умлаутом + -en.\nПроисхождение: др.-в.-нем. herten значило «делать твёрдым», особенно в кузнечном деле («закаливать металл»). В кибербезопасности перенесено как прямой немецкий эквивалент английского hardening («укреплять защиту системы»).\nПрозрачность: метафора «закаливания» полностью понятна.',
    source: 'DWDS (Pfeifer), s.v. hart / härten',
    evidence: 'Др.-в.-нем. herten («делать твёрдым, закалять», к hart); в ИБ — эквивалент англ. hardening.'
  },
  ru_link: null
},
{
  id: 'it-sec-pentest', pos: 'noun',
  de: 'Pentest', article: 'der', plural: 'die Pentests',
  ru: 'пентест, тест на проникновение',
  usage: { says: 'english', note: 'Все говорят «Pentest», «Pentester». Официально полностью — «Penetrationstest».' },
  examples: [
    { de: 'Beim letzten [[Pentest]] wurden zwei kritische Lücken gefunden.', ru: 'На последнем пентесте нашли две критические уязвимости.' },
    { de: 'Wir beauftragen einmal im Jahr einen externen [[Pentest]].', ru: 'Раз в год мы заказываем внешний пентест.' }
  ],
  morph: 'Pen-test', root: 'Test',
  parts: [['Pen-', 'сокращение от Penetration — проникновение'], ['Test', 'der Test — тест']],
  transparency: 'transparent',
  family: ['der Penetrationstest', 'der Pentester', 'der Test', 'beauftragen'],
  note: 'Мужской род из-за «der Test». «Einen Pentest beauftragen / durchführen» — заказать / провести пентест. «Der Auftraggeber» — заказчик.',
  why: {
    confidence: 'high',
    text: 'Состав: сокращение от Penetrationstest (Pen- + Test).\nПроисхождение: калька и сокращение английского penetration test (от латинского penetrāre «проникать внутрь» + test): контролируемая проверка, может ли атакующий проникнуть в систему.\nПрозрачность: прозрачное техническое сокращение.',
    source: 'OED / Wiktionary, s.v. penetration test / pen test',
    evidence: 'Сокращение англ. penetration test (< лат. penetrāre «проникать» + test).'
  },
  ru_link: null
},
{
  id: 'it-sec-lieferkette', pos: 'noun',
  de: 'Lieferkette', article: 'die', plural: 'die Lieferketten',
  ru: 'цепочка поставок',
  usage: { says: 'both', note: '«Lieferkette» — общее слово (экономика, новости). В безопасности — и «Supply Chain», «Supply-Chain-Angriff».' },
  examples: [
    { de: 'Der Angriff kam über die [[Lieferkette]]: Ein Update des Herstellers war manipuliert.', ru: 'Атака пришла через цепочку поставок: обновление от производителя было подменено.' },
    { de: 'NIS2 verlangt, dass wir auch die Sicherheit der [[Lieferkette]] prüfen.', ru: 'NIS2 требует, чтобы мы проверяли и безопасность цепочки поставок.' }
  ],
  morph: 'Liefer-kette', root: 'liefern',
  parts: [['Liefer-', 'основа liefern — поставлять'], ['Kette', 'die Kette — цепь']],
  transparency: 'figurative',
  family: ['liefern', 'der Lieferant', 'die Lieferung', 'die Kette', 'der Hersteller'],
  meaningType: 'figurative',
  meaningExplanation: 'Образ звеньев цепи (die Kette), перенесённый на связанную последовательность поставщиков и подрядчиков (если сломано одно звено — страдают остальные).',
  meaningExamples: [{ de: 'ein Angriff über die Lieferkette', ru: 'атака через цепочку поставок' }],
  note: '«Der Lieferant» — поставщик (n-склонение: den Lieferanten). «Der Hersteller» — производитель. Слово стало очень частым в новостях после 2020 года.',
  why: {
    confidence: 'high',
    text: 'Состав: основа глагола liefern («поставлять») + die Kette («цепь»).\nПроисхождение: liefern заимствовано в XV в. из французского livrer (< лат. līberāre «освобождать, передавать»), а Kette — раннее заимствование из латинского catēna («цепь»). Сложение Lieferkette соответствует английскому supply chain.\nПрозрачность: переносная (образ звеньев цепи), обе части полностью ясны.',
    source: 'DWDS (Pfeifer), s.v. liefern / Kette',
    evidence: 'liefern (< фр. livrer < лат. līberāre) + Kette (< лат. catēna); эквивалент англ. supply chain.'
  },
  ru_link: null
},
{
  id: 'it-sec-wiederherstellen', pos: 'verb',
  de: 'wiederherstellen', forms: { praes: 'stellt wieder her', praet: 'stellte wieder her', perf: 'hat wiederhergestellt' }, gov: '+ Akk.',
  ru: 'восстанавливать',
  usage: { says: 'both', note: '«Wiederherstellen», «die Wiederherstellung» — стандарт в интерфейсах и планах. В эксплуатации также «Restore», «Recovery».' },
  examples: [
    { de: 'Wir konnten alle Daten aus dem Backup [[wiederherstellen]].', ru: 'Нам удалось восстановить все данные из бэкапа.' },
    { de: 'Der Dienst ist seit 10 Uhr [[wiederhergestellt]].', ru: 'Сервис восстановлен с 10 часов.' }
  ],
  morph: 'wieder-her-stell-en', root: 'stellen',
  parts: [['wieder-', 'снова'], ['her-', 'сюда (herstellen — изготавливать)'], ['stell', 'основа stellen — ставить'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['herstellen', 'stellen', 'die Wiederherstellung', 'der Wiederherstellungspunkt', 'der Hersteller'],
  note: 'Отделяемая часть «wieder her»: «Wir stellen die Daten wieder her». Partizip — одним словом: wiederhergestellt. «Die Wiederherstellung» — восстановление (последняя фаза реагирования на инцидент).',
  why: {
    confidence: 'high',
    root: 'stellen',
    text: 'Состав: wieder («снова») + herstellen («создавать, устанавливать», her- + stellen).\nПроисхождение: буквально «снова поставить в рабочее/исходное положение» — закрепилось в медицине («выздоровление»), реставрации и IT (восстановление из бэкапа, Recovery).\nПрозрачность: переносная, состав «снова + создать» хорошо считывается.',
    source: 'DWDS, s.v. wiederherstellen / herstellen',
    evidence: 'wieder («снова») + herstellen («изготавливать, приводить в исходное состояние», к stellen).'
  },
  ru_link: null
},
{
  id: 'it-sec-datensicherung', pos: 'noun',
  de: 'Datensicherung', article: 'die', plural: 'die Datensicherungen',
  ru: 'резервное копирование, бэкап',
  usage: { says: 'both', note: 'Официально — «Datensicherung». В IT все говорят «das Backup» (мн. ч. die Backups).' },
  examples: [
    { de: 'Die [[Datensicherung]] läuft jede Nacht um zwei Uhr.', ru: 'Резервное копирование запускается каждую ночь в два часа.' },
    { de: 'Wann wurde die letzte [[Datensicherung]] getestet?', ru: 'Когда в последний раз проверяли бэкап?' }
  ],
  morph: 'Daten-sicher-ung', root: 'sicher',
  parts: [['Daten-', 'die Daten — данные'], ['sicher', 'основа sichern — сохранять, обеспечивать сохранность'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['sichern', 'sicher', 'das Backup', 'die Sicherheitskopie', 'die Datensicherheit'],
  note: '«Daten sichern» — сделать резервную копию (а также «сохранить» вообще). Не путать: «Datensicherung» — бэкап, «Datensicherheit» — защищённость данных.',
  why: {
    confidence: 'high',
    text: 'Состав: die Daten («данные») + die Sicherung («обеспечение сохранности», от sichern + -ung).\nПроисхождение: sichern образовано от sicher (< лат. sēcūrus «беззаботный, надёжный»). В IT-терминологии Datensicherung («процесс сохранения копий») отличают от Datensicherheit («защищённость данных»).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. sichern / sicher',
    evidence: 'Daten + Sicherung (от sichern < sicher < лат. sēcūrus).'
  },
  ru_link: null
},
{
  id: 'it-sec-notfallplan', pos: 'noun',
  de: 'Notfallplan', article: 'der', plural: 'die Notfallpläne',
  ru: 'план действий в чрезвычайной ситуации, аварийный план',
  usage: { says: 'both', note: '«Notfallplan», «Notfallhandbuch», «Notfallmanagement» (BSI-Standard 200-4). В англ. рамках — «Incident Response Plan», «BCM».' },
  examples: [
    { de: 'Laut [[Notfallplan]] müssen wir zuerst die Geschäftsführung informieren.', ru: 'Согласно аварийному плану сначала нужно проинформировать руководство.' },
    { de: 'Wir testen den [[Notfallplan]] zweimal im Jahr.', ru: 'Мы тестируем план действий при ЧС два раза в год.' }
  ],
  morph: 'Notfall-plan', root: 'Notfall',
  parts: [['Notfall-', 'der Notfall — экстренный случай'], ['Plan', 'der Plan — план']],
  transparency: 'transparent',
  family: ['der Notfall', 'der Plan', 'das Notfallhandbuch', 'das Notfallmanagement', 'planen'],
  note: 'Мн. ч. с умлаутом: die Notfallpläne. «Die Geschäftsführung» — руководство компании. «Den Notfallplan auslösen» — запустить аварийный план.',
  why: {
    confidence: 'high',
    text: 'Состав: der Notfall («экстренный случай») + der Plan («план»).\nПроисхождение: der Plan заимствовано в XVII–XVIII вв. из французского plan (< лат. plānus «ровный, плоский»): сначала «плоский чертёж, набросок на листе», затем «план действий».\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Plan / Notfall',
    evidence: 'Notfall + Plan (< фр. plan < лат. plānus «плоский» → «чертёж, план»).'
  },
  ru_link: null
},
{
  id: 'it-sec-dienstleister', pos: 'noun',
  de: 'Dienstleister', article: 'der', plural: 'die Dienstleister',
  ru: 'поставщик услуг, подрядчик',
  usage: { says: 'both', note: '«Dienstleister», «IT-Dienstleister», «externer Dienstleister» — стандарт. В SOC также «MSSP», «Provider».' },
  examples: [
    { de: 'Den SOC betreiben wir zusammen mit einem externen [[Dienstleister]].', ru: 'SOC мы ведём вместе с внешним подрядчиком.' },
    { de: 'Der [[Dienstleister]] hat Fernzugriff auf unsere Server.', ru: 'У подрядчика есть удалённый доступ к нашим серверам.' }
  ],
  morph: 'Dienst-leist-er', root: 'dienen',
  parts: [['Dienst-', 'der Dienst — служба, услуга'], ['leist', 'основа leisten — оказывать, выполнять'], ['-er', 'тот, кто делает']],
  transparency: 'transparent',
  family: ['die Dienstleistung', 'der Dienst', 'leisten', 'dienen', 'der Auftragsverarbeiter'],
  note: '«Die Dienstleistung» — услуга. «Der Auftragsverarbeiter» — обработчик данных по DSGVO (с ним нужен договор AVV). Мн. ч. не меняется.',
  why: {
    confidence: 'high',
    text: 'Состав: der Dienst («служба, услуга», от dienen «служить») + основа leisten («выполнять, оказывать») + -er.\nПроисхождение: глагол leisten восходит к др.-в.-нем. leistan («следовать по следу → исполнять обязательство, выполнять»). Сложение Dienstleister закрепилось в конце XX в. для компаний, оказывающих услуги (ср. die Dienstleistung).\nПрозрачность: прозрачно для современного носителя.',
    source: 'DWDS (Pfeifer), s.v. leisten / Dienst',
    evidence: 'Dienst (к dienen) + leisten (< др.-в.-нем. leistan «исполнять») + -er.'
  },
  ru_link: null
}
]});
