/* Professional -> Work & Office (workplace communication, meetings, emails, deadlines). Curated. */
GT.register({ tab: 'it', topic: 'workcomm', items: [
{
  id: 'pro-office-frist', pos: 'noun',
  alsoIn: [['words', 'authorities']], // Wortliste p. 42
  de: 'Frist', article: 'die', plural: 'die Fristen',
  ru: 'срок, дедлайн (официальный)',
  usage: { says: 'both', note: 'В договорах, у аудиторов и в письмах — «die Frist» («die Frist einhalten»). В командах также часто «die Deadline».' },
  examples: [
    { de: 'Wir müssen die [[Frist]] bis Freitag unbedingt einhalten.', ru: 'Нам обязательно нужно уложиться в срок до пятницы.' },
    { de: 'Die [[Frist]] für die Meldung nach DSGVO beträgt 72 Stunden.', ru: 'Срок уведомления по DSGVO составляет 72 часа.' }
  ],
  morph: 'Frist',
  family: ['befristet', 'unbefristet', 'die Kündigungsfrist', 'fristgerecht', 'die Deadline'],
  note: 'Устойчивые глаголы: «eine Frist einhalten» (уложиться в срок), «eine Frist setzen» (установить срок), «eine Frist verlängern» (продлить). «Fristgerecht» — в срок.',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное существительное (мн. ч. die Fristen).\nПроисхождение: др.-в.-нем. frist значило «отрезок времени, отсрочка»; закрепилось в деловом и юридическом языке как установленный предельный срок (отсюда befristet «срочный», Kündigungsfrist «срок уведомления об увольнении»).\nПрозрачность: базовый корень делового немецкого.',
    source: 'DWDS (Pfeifer), s.v. Frist',
    evidence: 'Др.-в.-нем. frist «промежуток времени, отсрочка» → деловое «срок».'
  },
  ru_link: null
},
{
  id: 'pro-office-zustaendig', pos: 'adjective',
  de: 'zuständig', gov: 'für + Akk.',
  ru: 'компетентный, отвечающий (за участок работы)',
  usage: { says: 'german', note: 'Главное офисное слово для «кто этим занимается?»: «Wer ist dafür zuständig?». Намного нейтральнее, чем «verantwortlich».' },
  examples: [
    { de: 'Für das Thema VPN ist die Netzwerkabteilung [[zuständig]].', ru: 'За тему VPN отвечает сетевой отдел.' },
    { de: 'Bin ich dafür [[zuständig]], oder liegt das beim Helpdesk?', ru: 'Это в моей зоне ответственности, или этим занимается хелпдеск?' }
  ],
  morph: 'zu-ständ-ig', root: 'stehen',
  parts: [['zu-', 'к, при'], ['ständ', 'от stehen / Stand — стоять'], ['-ig', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['die Zuständigkeit', 'verantwortlich', 'stehen', 'der Stand'],
  note: '«Zuständig für + Akk.» — «в чью компетенцию входит». «Die Zuständigkeit» — зона ответственности / компетенция («Zuständigkeiten klären» — распределить зоны ответственности).',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола zustehen («причитаться, относиться к компетенции») с основой ständ- (к stehen) + -ig.\nПроисхождение: юридико-административное образование XVIII–XIX вв. со значением «тот, к чьей компетенции относится дело».\nПрозрачность: закреплённый деловой термин.',
    source: 'DWDS (Pfeifer), s.v. zuständig / zustehen',
    evidence: 'От zustehen («причитаться, подлежать ведению») + -ig; административный термин с XVIII–XIX вв.'
  },
  ru_link: null
},
{
  id: 'pro-office-vertretung', pos: 'noun',
  de: 'Vertretung', article: 'die', plural: 'die Vertretungen',
  ru: 'замена, замещение (на время отпуска или болезни); представитель',
  usage: { says: 'german', note: 'В автоответах Out-of-Office всегда пишут: «Meine Vertretung übernimmt …» или «In dringenden Fällen wenden Sie sich an meine Vertretung».' },
  examples: [
    { de: 'Wer macht während deines Urlaubs deine [[Vertretung]]?', ru: 'Кто тебя заменяет во время отпуска?' },
    { de: 'Ich bin heute die [[Vertretung]] für Anna, sie ist im Urlaub.', ru: 'Сегодня я замещаю Анну, она в отпуске.' }
  ],
  morph: 'Ver-tret-ung', root: 'treten',
  parts: [['ver-', 'неотделяемая приставка'], ['tret', 'основа treten — ступать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['vertreten', 'der Vertreter', 'die Urlaubsvertretung', 'treten'],
  note: 'Глагол: «jdn. vertreten» (vertritt, vertrat, hat vertreten) — замещать кого-то. «Die Urlaubsvertretung» — замещение на время отпуска. «Die Krankheitsvertretung» — на время болезни.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола vertreten (ver- + treten «ступать») + -ung.\nПроисхождение: др.-в.-нем. firtretan («заступить на чьё-то место, встать вместо кого-то»); отсюда «замещать, представлять интересы» и die Vertretung.\nПрозрачность: образ «встать на место другого» легко запоминается.',
    source: 'DWDS (Pfeifer), s.v. vertreten / Vertretung',
    evidence: 'От vertreten («встать на чьё-то место», ver- + treten) + -ung.'
  },
  ru_link: null
},
{
  id: 'pro-office-absprache', pos: 'noun',
  de: 'Absprache', article: 'die', plural: 'die Absprachen',
  ru: 'договорённость, согласование',
  usage: { says: 'german', note: 'Очень часто в деловой почте: «nach Absprache mit …» — по согласованию с …, «wie abgesprochen» — как договорились.' },
  examples: [
    { de: 'Nach [[Absprache]] mit dem Teamleiter verschieben wir das Update.', ru: 'По согласованию с тимлидом мы переносим обновление.' },
    { de: 'Bitte keine Änderungen in Produktion ohne vorherige [[Absprache]]!', ru: 'Пожалуйста, никаких изменений в проде без предварительного согласования!' }
  ],
  morph: 'Ab-sprache', root: 'sprechen',
  parts: [['Ab-', 'приставка (от absprechen — договариваться)'], ['Sprache', 'die Sprache — речь, язык']],
  transparency: 'transparent',
  family: ['absprechen', 'sprechen', 'die Rücksprache', 'die Besprechung', 'wie abgesprochen'],
  note: '«Wie abgesprochen» — золотая фраза для начала письма («Wie gestern abgesprochen schicke ich Ihnen…»). «Ohne Absprache» — без согласования.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола absprechen («договариваться, уславливаться», ab- + sprechen «говорить»).\nПроисхождение: отглагольное имя, закрепившееся в деловом языке для предварительной договорённости.\nПрозрачность: прозрачно относительно absprechen / sprechen.',
    source: 'DWDS (Pfeifer), s.v. Absprache / absprechen',
    evidence: 'От absprechen (ab- + sprechen): «устная/деловая договорённость».'
  },
  ru_link: null
},
{
  id: 'pro-office-ruecksprache', pos: 'noun',
  de: 'Rücksprache', article: 'die', plural: 'die Rücksprachen',
  ru: 'консультация, уточнение, согласование (с руководством или коллегой)',
  usage: { says: 'german', note: 'Стандартная формула вежливой паузы: «Ich halte kurz Rücksprache mit meinem Chef und melde mich dann.»' },
  examples: [
    { de: 'Nach [[Rücksprache]] mit der Rechtsabteilung dürfen wir die Daten löschen.', ru: 'После консультации с юротделом нам разрешили удалить данные.' },
    { de: 'Ich muss dazu kurz [[Rücksprache]] halten.', ru: 'Мне нужно коротко уточнить это (согласовать с руководством/коллегой).' }
  ],
  morph: 'Rück-sprache', root: 'sprechen',
  parts: [['Rück-', 'обратно, назад'], ['Sprache', 'die Sprache — речь']],
  transparency: 'transparent',
  family: ['zurück', 'sprechen', 'die Absprache', 'die Rückmeldung'],
  note: 'Устойчивый глагол: «mit jdm. Rücksprache halten» — посоветоваться / согласовать с кем-то. Очень вежливый способ не говорить «да» сгоряча.',
  why: {
    confidence: 'high',
    text: 'Состав: rück- («обратно») + die Sprache («речь», к sprechen).\nПроисхождение: канцелярское сложение XVIII в. — буквально «обратный разговор, повторное обсуждение» перед принятием решения.\nПрозрачность: прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Rücksprache',
    evidence: 'Сложение rück- + Sprache (XVIII в.): «обсуждение и согласование перед решением».'
  },
  ru_link: null
},
{
  id: 'pro-office-abstimmen', pos: 'verb',
  de: 'abstimmen', forms: { praes: 'stimmt ab', praet: 'stimmte ab', perf: 'hat abgestimmt' }, gov: 'etw. mit + Dat. / sich mit + Dat. / über + Akk.',
  ru: 'согласовывать (планы, действия); голосовать (über + Akk.)',
  usage: { says: 'both', note: 'В офисе — «Wir müssen uns kurz abstimmen» (синхронизироваться, согласовать). В IT-командах также «syncen».' },
  examples: [
    { sense: 'согласовывать, синхронизироваться', de: 'Lass uns das Vorgehen kurz mit dem Infra-Team [[abstimmen]].', ru: 'Давай коротко согласуем план действий с командой инфраструктуры.' },
    { sense: 'голосовать (über + Akk.)', de: 'Am Ende der Sitzung [[stimmen]] wir über den Vorschlag [[ab]].', ru: 'В конце заседания мы проголосуем по предложению.' }
  ],
  morph: 'ab-stimm-en', root: 'Stimme',
  parts: [['ab-', 'отделяемая приставка'], ['stimm', 'основа stimmen — настраивать, голосовать (от die Stimme)'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['die Abstimmung', 'die Stimme', 'zustimmen', 'bestimmen'],
  meaningType: 'polysemous',
  meaningExplanation: 'У abstimmen два разных деловых значения: «согласовывать / синхронизировать» (mit + Dat.) и «голосовать» (über + Akk.).',
  meaningExamples: [{ de: 'sich mit dem Team abstimmen', ru: 'согласовать действия с командой' }, { de: 'über einen Antrag abstimmen', ru: 'проголосовать по заявке' }],
  note: '«Die Abstimmung» — и «согласование / синк» («kurze Abstimmung»), и «голосование». Отделяемый глагол: «Wir stimmen uns ab».',
  why: {
    confidence: 'high',
    text: 'Состав: ab- + stimmen (от die Stimme «голос»).\nПроисхождение: stimmen развило два значения — «подавать голос (голосовать)» и «настраивать инструмент в тон»; от обоих развились значения abstimmen — «проголосовать» и «привести в соответствие, согласовать».\nПрозрачность: переносная от музыкального «настроить в унисон» и «голос».',
    source: 'DWDS (Pfeifer), s.v. abstimmen / stimmen',
    evidence: 'ab- + stimmen (< Stimme): 1) голосовать; 2) приводить в соответствие, согласовывать.'
  },
  ru_link: null
},
{
  id: 'pro-office-kapazitaet', pos: 'noun',
  de: 'Kapazität', article: 'die', plural: 'die Kapazitäten',
  ru: 'свободный ресурс / время (в команде); мощность, ёмкость (сервера)',
  usage: { says: 'both', note: 'И про людей («Ich habe diese Woche keine Kapazität mehr»), и про железо («Speicherkapazität»). В IT-чатах также «Kapa».' },
  examples: [
    { sense: 'свободный ресурс / время сотрудника', de: 'Diese Woche habe ich leider keine [[Kapazität]] für ein neues Projekt.', ru: 'На этой неделе у меня, к сожалению, нет ресурса на новый проект.' },
    { sense: 'техническая мощность, ёмкость', de: 'Die [[Kapazität]] des Servers ist fast vollständig ausgelastet.', ru: 'Мощность сервера почти полностью загружена.' }
  ],
  morph: 'Kapaz-ität',
  family: ['die Speicherkapazität', 'ausgelastet', 'die Auslastung'],
  meaningType: 'polysemous',
  meaningExplanation: 'В офисе die Kapazität — вежливый способ сказать «у меня есть/нет свободного времени и ресурса», а в технике — «ёмкость, мощность, пропускная способность».',
  meaningExamples: [{ de: 'Hast du nächste Woche Kapazität?', ru: 'У тебя на следующей неделе есть ресурс/время?' }, { de: 'die Kapazität der Festplatte', ru: 'ёмкость жёсткого диска' }],
  note: 'Всегда женского рода (суффикс -tät → die). Отличная деловая формулировка, чтобы вежливо отказаться от лишней задачи: «Aktuell habe ich dafür leider keine Kapazitäten».',
  why: {
    confidence: 'high',
    text: 'Состав: латинская основа kapaz- + суффикс -ität (всегда die).\nПроисхождение: заимствовано из латинского capācitās («вместимость, способность вмещать», от capere «брать, вмещать»). Сначала в физике и технике, затем в экономике и менеджменте («рабочая нагрузка, ресурс»).\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Kapazität',
    evidence: 'От лат. capācitās («вместимость», от capere); в XX в. расширилось на производственную и рабочую мощность.'
  },
  ru_link: null
},
{
  id: 'pro-office-prioritaet', pos: 'noun',
  de: 'Priorität', article: 'die', plural: 'die Prioritäten',
  ru: 'приоритет',
  usage: { says: 'both', note: '«Hohe Priorität» / «Prioritäten setzen». В тикетах и чатах сокращают до «Prio»: «Das hat Prio 1».' },
  examples: [
    { de: 'Dieser Sicherheitsvorfall hat heute höchste [[Priorität]].', ru: 'У этого инцидента безопасности сегодня наивысший приоритет.' },
    { de: 'Wir müssen klare [[Prioritäten]] setzen, sonst schaffen wir nichts.', ru: 'Нам нужно расставить чёткие приоритеты, иначе мы ничего не успеем.' }
  ],
  morph: 'Prior-ität',
  family: ['priorisieren', 'die Priorisierung', 'Prio 1'],
  note: 'Всегда die (не der, несмотря на русское «приоритет»!). «Prioritäten setzen» — расставлять приоритеты. Глагол: «priorisieren» — приоритизировать.',
  why: {
    confidence: 'high',
    text: 'Состав: латинская основа prior- + суффикс -ität (всегда die).\nПроисхождение: из средневековой латыни priōritās («первенство», от лат. prior «первый из двух, предыдущий»).\nПрозрачность: международный термин; обратите внимание на женский род die.',
    source: 'DWDS (Pfeifer), s.v. Priorität',
    evidence: 'Из ср.-лат. priōritās (< лат. prior «первый, более ранний»).'
  },
  ru_link: { type: 'internationalism', text: 'приоритет: общий латинский источник (prior). Внимание на род: по-русски «он», по-немецки — die Priorität.' }
},
{
  id: 'pro-office-schnittstelle', pos: 'noun',
  de: 'Schnittstelle', article: 'die', plural: 'die Schnittstellen',
  ru: 'интерфейс (API); связующее звено между отделами',
  usage: { says: 'both', note: 'В IT — и программный интерфейс (API), и точка стыка двух команд («die Schnittstelle zwischen SOC und IT-Betrieb»).' },
  examples: [
    { sense: 'программный интерфейс (API)', de: 'Die Daten werden über eine verschlüsselte [[Schnittstelle]] übertragen.', ru: 'Данные передаются через зашифрованный интерфейс.' },
    { sense: 'связующее звено между отделами', de: 'Unser Team arbeitet an der [[Schnittstelle]] zwischen IT und Fachabteilungen.', ru: 'Наша команда работает на стыке IT и бизнес-отделов.' }
  ],
  morph: 'Schnitt-stelle', root: 'schneiden · stellen',
  parts: [['Schnitt', 'der Schnitt — разрез, стык (от schneiden)'], ['Stelle', 'die Stelle — место']],
  transparency: 'figurative',
  family: ['schneiden', 'der Schnitt', 'die Stelle', 'das Interface', 'die API'],
  meaningType: 'polysemous',
  meaningExplanation: 'Schnittstelle обозначает и программный интерфейс (API) в IT, и организационную «точку стыка» / связующее звено между двумя отделами компании.',
  meaningExamples: [{ de: 'eine API-Schnittstelle dokumentieren', ru: 'задокументировать API-интерфейс' }, { de: 'an der Schnittstelle zwischen zwei Teams arbeiten', ru: 'работать на стыке двух команд' }],
  note: 'Очень частое слово и в вакансиях («Schnittstellenfunktion»), и в технической документации.',
  why: {
    confidence: 'high',
    root: 'stellen',
    text: 'Состав: der Schnitt («разрез, стык», от schneiden) + die Stelle («место»).\nПроисхождение: немецкий технический термин XX века, созданный как эквивалент английского interface — «место стыка двух систем».\nПрозрачность: переносная, образ стыка хорошо понятен.',
    source: 'DWDS, s.v. Schnittstelle',
    evidence: 'Техническое сложение Schnitt + Stelle (XX в.) как немецкий аналог англ. interface.'
  },
  ru_link: null
},
{
  id: 'pro-office-urlaubsantrag', pos: 'noun',
  de: 'Urlaubsantrag', article: 'der', plural: 'die Urlaubsanträge',
  ru: 'заявление на отпуск',
  usage: { says: 'german', note: 'Всегда по-немецки: «einen Urlaubsantrag stellen / einreichen / genehmigen».' },
  examples: [
    { de: 'Ich habe meinen [[Urlaubsantrag]] für August schon im System eingereicht.', ru: 'Я уже подал в системе заявление на отпуск на август.' },
    { de: 'Mein [[Urlaubsantrag]] wurde gestern vom Teamleiter genehmigt.', ru: 'Моё заявление на отпуск вчера одобрил тимлид.' }
  ],
  morph: 'Urlaub-s-antrag', root: 'tragen',
  parts: [['Urlaub', 'der Urlaub — отпуск'], ['-s-', 'соединительный элемент (Fugen-s)'], ['Antrag', 'der Antrag — заявление, заявка']],
  transparency: 'transparent',
  family: ['der Urlaub', 'der Antrag', 'beantragen', 'genehmigen', 'die Genehmigung'],
  note: 'Умлаут во мн. ч.: die Urlaubsanträge. «Genehmigen» — одобрить (официально), «ablehnen» — отклонить. Глагол: «Urlaub beantragen» — подать на отпуск.',
  why: {
    confidence: 'high',
    text: 'Состав: der Urlaub («отпуск») + -s- + der Antrag («заявление, заявка»).\nПроисхождение: der Urlaub восходит к др.-в.-нем. urloub («разрешение уйти», родственно erlauben «разрешать»); der Antrag — от antragen («вносить предложение, подавать прошение»).\nПрозрачность: полностью прозрачное деловое сложение.',
    source: 'DWDS (Pfeifer), s.v. Urlaub / Antrag',
    evidence: 'Urlaub (< др.-в.-нем. urloub «разрешение», к erlauben) + Fugen-s + Antrag.'
  },
  ru_link: null
},
{
  id: 'pro-office-protokoll', pos: 'noun',
  de: 'Protokoll', article: 'das', plural: 'die Protokolle',
  ru: 'протокол (встречи); сетевой протокол; журнал логов',
  usage: { says: 'both', note: 'В офисе — «Protokoll schreiben / führen» (вести протокол совещания). В IT — и сетевой протокол (HTTPS), и официальное название логов.' },
  examples: [
    { sense: 'протокол совещания', de: 'Ich schicke das [[Protokoll]] vom Meeting gleich per Mail herum.', ru: 'Я сейчас разошлю протокол встречи по почте.' },
    { sense: 'сетевой протокол (IT)', de: 'Dieses veraltete [[Protokoll]] müssen wir dringend abschalten.', ru: 'Этот устаревший протокол нам нужно срочно отключить.' }
  ],
  morph: 'Protokoll',
  family: ['protokollieren', 'die Protokollierung', 'das Sitzungsprotokoll', 'das Netzwerkprotokoll'],
  meaningType: 'polysemous',
  meaningExplanation: 'das Protokoll объединяет три разных значения: запись итогов совещания, сетевой протокол обмена данными (HTTP/TLS) и журнал событий (лог).',
  meaningExamples: [{ de: 'Protokoll im Meeting führen', ru: 'вести протокол на встрече' }, { de: 'ein sicheres Netzwerkprotokoll', ru: 'безопасный сетевой протокол' }],
  note: '«Protokoll führen» — вести протокол. «Zu Protokoll geben» — заявить под протокол.',
  why: {
    confidence: 'high',
    text: 'Состав: заимствованное существительное (мн. ч. die Protokolle).\nПроисхождение: через средневековую латынь из греческого prōtókollon («первый подклеенный лист папирусного свитка с оглавлением и датой»), откуда «официальная запись», а затем и «свод правил обмена данными».\nПрозрачность: международный термин.',
    source: 'DWDS (Pfeifer), s.v. Protokoll',
    evidence: 'Из ср.-лат. prōtocollum < греч. prōtókollon («первый лист свитка»).'
  },
  ru_link: { type: 'internationalism', text: 'протокол: общее греческое происхождение; значения совпадают (плюс в немецком официально используется и для логов).' }
},
{
  id: 'pro-office-zeitnah', pos: 'adjective',
  de: 'zeitnah',
  ru: 'в ближайшее время, оперативно, в сжатые сроки',
  usage: { says: 'german', note: 'Классическое немецкое офисное слово (и любимый предмет шуток: «zeitnah» может означать и «через час», и «через две недели»).' },
  examples: [
    { de: 'Wir brauchen dafür eine [[zeitnahe]] Lösung.', ru: 'Нам нужно оперативное решение для этой задачи.' },
    { de: 'Bitte geben Sie mir [[zeitnah]] eine Rückmeldung.', ru: 'Пожалуйста, дайте мне обратную связь в ближайшее время.' }
  ],
  morph: 'Zeit-nah', root: 'Zeit · nah',
  parts: [['Zeit', 'die Zeit — время'], ['nah', 'близкий']],
  transparency: 'transparent',
  family: ['die Zeit', 'nah', 'kurzfristig', 'baldmöglichst'],
  note: 'Если нужна конкретная дата, лучше уточнить («Was meinen Sie genau mit „zeitnah“? Reicht Freitag?»). «Kurzfristig» — в короткий срок / в последний момент.',
  why: {
    confidence: 'high',
    text: 'Состав: die Zeit («время») + прилагательное nah («близкий»).\nПроисхождение: современное деловое сложение второй половины XX века — буквально «близко по времени» (без указания точной даты).\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. zeitnah',
    evidence: 'Современное деловое сложение Zeit + nah («в близкие сроки»).'
  },
  ru_link: null
},
{
  id: 'pro-office-abstimmung', pos: 'noun',
  de: 'Abstimmung', article: 'die', plural: 'die Abstimmungen',
  ru: 'согласование, синк (в команде); голосование',
  usage: { says: 'both', note: '«Eine kurze Abstimmung» — короткий синк/созвон на 15 минут. Также «голосование».' },
  examples: [
    { sense: 'согласование, короткий синк', de: 'Sollen wir morgen eine kurze [[Abstimmung]] zu dem Incident machen?', ru: 'Сделаем завтра короткий синк по этому инциденту?' },
    { sense: 'голосование', de: 'Die [[Abstimmung]] im Team war einstimmig.', ru: 'Голосование в команде было единогласным.' }
  ],
  morph: 'Ab-stimm-ung', root: 'Stimme',
  parts: [['ab-', 'отделяемая приставка'], ['stimm', 'основа stimmen — согласовывать, голосовать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'figurative',
  family: ['abstimmen', 'die Stimme', 'einstimmig', 'die Absprache'],
  meaningType: 'polysemous',
  meaningExplanation: 'die Abstimmung обозначает и деловое согласование (короткую встречу-синк), и процедуру голосования.',
  meaningExamples: [{ de: 'eine kurze Abstimmung per Teams', ru: 'короткий синк в Teams' }, { de: 'eine geheime Abstimmung', ru: 'тайное голосование' }],
  note: '«In Abstimmung mit …» — по согласованию с … Очень часто встречается в теме писем и приглашениях в календарь.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола abstimmen (ab- + stimmen) + суффикс -ung (всегда die).\nПроисхождение: наследует оба значения глагола abstimmen — «голосование» и «приведение действий в соответствие».\nПрозрачность: прозрачно относительно глагола abstimmen.',
    source: 'DWDS (Pfeifer), s.v. Abstimmung / abstimmen',
    evidence: 'Отглагольное имя от abstimmen + -ung.'
  },
  ru_link: null
},
{
  id: 'pro-office-auslastung', pos: 'noun',
  de: 'Auslastung', article: 'die', plural: 'die Auslastungen',
  ru: 'загрузка (команды или сервера)',
  usage: { says: 'both', note: 'И про CPU («CPU-Auslastung bei 95 %»), и про занятость людей («Hohe Auslastung im Team»).' },
  examples: [
    { sense: 'загрузка сервера / системы (IT)', de: 'Die CPU-[[Auslastung]] liegt seit einer Stunde bei 100 Prozent.', ru: 'Загрузка процессора уже час держится на 100 процентах.' },
    { sense: 'загруженность команды работой', de: 'Wegen der hohen [[Auslastung]] können wir das erst nächste Woche prüfen.', ru: 'Из-за высокой загрузки мы сможем проверить это только на следующей неделе.' }
  ],
  morph: 'Aus-last-ung', root: 'Last',
  parts: [['aus-', 'полностью, до предела'], ['Last', 'die Last — груз, нагрузка'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['die Last', 'auslasten', 'ausgelastet', 'belasten', 'entlasten', 'überlasten'],
  meaningType: 'polysemous',
  meaningExplanation: 'die Auslastung одинаково используется в IT для нагрузки на железо (CPU, память) и в офисе для загруженности сотрудников задачами.',
  meaningExamples: [{ de: 'die Auslastung der Server überwachen', ru: 'мониторить загрузку серверов' }, { de: 'volle Auslastung im Team', ru: 'полная загрузка в команде' }],
  note: 'Прилагательное/причастие: «Ich bin diese Woche voll ausgelastet» — я на этой неделе полностью загружен.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола auslasten (aus- «полностью» + die Last «груз, нагрузка») + -ung.\nПроисхождение: экономико-техническое образование XX в. — степень использования доступной мощности (оборудования или персонала).\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS, s.v. Auslastung / auslasten',
    evidence: 'От auslasten (aus- + Last «нагрузка») + -ung.'
  },
  ru_link: null
}
]});
