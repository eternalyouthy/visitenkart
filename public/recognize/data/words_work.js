GT.register({ tab: 'words', topic: 'work', items: [
{
  id: 'b1-work-bewerben', pos: 'verb',
  de: 'sich bewerben', forms: { praes: 'bewirbt sich', praet: 'bewarb sich', perf: 'hat sich beworben' }, gov: 'um + Akk. / bei + Dat. / als + Nom.',
  ru: 'подавать заявку (на работу), откликаться на вакансию',
  examples: [
    { de: 'Ich habe mich bei einer Bank als Security Analyst [[beworben]].', ru: 'Я подал заявку в банк на должность security-аналитика.' },
    { de: '[[Bewirb]] dich doch einfach um die Stelle. Mehr als eine Absage kann nicht passieren.', ru: 'Да просто откликнись на эту вакансию. Хуже отказа ничего не будет.' }
  ],
  morph: 'be-werb-en', root: 'werben',
  parts: [['be-', 'неотделяемая приставка'], ['werb', 'основа werben — добиваться, рекламировать'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['werben', 'die Werbung', 'die Bewerbung', 'der Bewerber', 'die Bewerberin', 'das Bewerbungsgespräch'],
  note: 'Три предлога: sich um eine Stelle (Akk.) bei einer Firma (Dat.) als Entwickler bewerben. Типичная ошибка: «sich für eine Stelle bewerben» (калька с английского apply for) — встречается, но норма — «um». Сильный глагол с e→i: du bewirbst, er bewirbt. «Das Bewerbungsgespräch» — собеседование.',
  why: {
    confidence: 'high',
    text: 'Состав: be- + werben + -en.\nПроисхождение: древневерхненемецкое (h)werban значило «вращаться, хлопотать, быть занятым делом», откуда «добиваться (руки, должности)» (ср. werben um) и sich bewerben («добиваться места»).\nПрозрачность: переносная — связь с современным значением werben («рекламировать») лишь опосредованная.',
    source: 'DWDS (Pfeifer), s.v. bewerben / werben',
    evidence: 'Др.-в.-нем. (h)werban «вращаться, хлопотать» → «добиваться», откуда sich bewerben um и Werbung.'
  },
  ru_link: null
},
{
  id: 'b1-work-erfahrung', pos: 'noun',
  de: 'Erfahrung', article: 'die', plural: 'die Erfahrungen',
  ru: 'опыт',
  examples: [
    { de: 'Ich habe fünf Jahre [[Erfahrung]] im Bereich Netzwerksicherheit.', ru: 'У меня пять лет опыта в сетевой безопасности.' },
    { de: 'Mit unserem alten Vermieter haben wir schlechte [[Erfahrungen]] gemacht.', ru: 'С нашим прежним арендодателем у нас был плохой опыт.' }
  ],
  morph: 'Er-fahr-ung', root: 'fahren',
  parts: [['er-', 'достижение результата'], ['fahr', 'основа fahren — ехать'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'opaque',
  family: ['fahren', 'die Fahrt', 'der Fahrer', 'erfahren', 'die Erfahrung', 'die Vorfahrt'],
  note: '«Erfahrung (mit etw.) haben / sammeln», «gute/schlechte Erfahrungen machen» (во мн. ч.!). Глагол «erfahren» — узнать («Ich habe es erst gestern erfahren»); прилагательное «erfahren» — опытный. Одно яркое событие — это «ein Erlebnis», а не «eine Erfahrung».',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола erfahren (er- + fahren) + -ung.\nПроисхождение: древневерхненемецкое irfaran значило «проехать, пройти, достичь», затем — «испытать, узнать». Отглагольное Erfahrung закрепилось в значении «опыт».\nПрозрачность: непрозрачное — современное fahren («ехать на транспорте») само по себе не подсказывает значение «опыт».',
    source: 'DWDS (Pfeifer), s.v. erfahren / Erfahrung',
    evidence: 'Др.-в.-нем. irfaran «пройти, объехать, достичь» → «испытать, узнать»; Erfahrung — отглагольное имя от erfahren.'
  },
  ru_link: null
},
{
  id: 'b1-work-besprechung', pos: 'noun',
  de: 'Besprechung', article: 'die', plural: 'die Besprechungen',
  ru: 'совещание, обсуждение',
  examples: [
    { de: 'Herr Schulz ist gerade in einer [[Besprechung]]. Kann er Sie zurückrufen?', ru: 'Господин Шульц сейчас на совещании. Он может вам перезвонить?' },
    { de: 'In der [[Besprechung]] haben wir die Release-Planung durchgesprochen.', ru: 'На совещании мы обсудили план релиза.' }
  ],
  morph: 'Be-sprech-ung', root: 'sprechen',
  parts: [['be-', 'делает глагол переходным (+ Akk.)'], ['sprech', 'основа sprechen — говорить'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['sprechen', 'besprechen', 'das Gespräch', 'die Sprache', 'versprechen', 'ansprechen'],
  note: 'Классическое офисное слово. В IT-командах часто просто «das Meeting»; «die Sitzung» — официальнее. Ловушка: «besprechen» — с прямым дополнением, без «über»: «Wir besprechen das Problem», но «Wir sprechen über das Problem».',
  why: {
    confidence: 'high',
    root: 'sprechen',
    text: 'Состав: от глагола besprechen (be- + sprechen) + -ung.\nПроисхождение: приставка be- делает глагол sprechen переходным — «обговаривать что-то» (без предлога über). Отглагольное Besprechung называет само обсуждение и совещание.\nПрозрачность: полностью прозрачное образование.',
    source: 'DWDS (Pfeifer), s.v. besprechen',
    evidence: 'Транзитивный глагол besprechen (be- + sprechen «обговаривать») + отглагольный суффикс -ung.'
  },
  ru_link: null
},
{
  id: 'b1-work-kuendigen', pos: 'verb',
  de: 'kündigen', forms: { praes: 'kündigt', praet: 'kündigte', perf: 'hat gekündigt' }, gov: 'etw. (Akk.) / jdm. (Dat.)',
  ru: 'увольняться; увольнять (кого-то); расторгать (договор)',
  examples: [
    { sense: 'увольняться', de: 'Ich habe zum Ende des Monats [[gekündigt]].', ru: 'Я уволился с конца месяца.' },
    { sense: 'увольнять кого-то (Dat.)', de: 'Die Firma hat ihm nach der Probezeit [[gekündigt]].', ru: 'Фирма уволила его после испытательного срока.' },
    { sense: 'расторгать договор (Akk.)', de: 'Ich möchte meinen alten Handyvertrag [[kündigen]].', ru: 'Я хочу расторгнуть свой старый договор на мобильную связь.' }
  ],
  morph: 'künd-ig-en', root: 'kund',
  parts: [['künd', 'от устар. kund — известный'], ['-ig', 'суффикс глагола'], ['-en', 'окончание инфинитива']],
  transparency: 'opaque',
  family: ['die Kündigung', 'die Kündigungsfrist', 'ankündigen', 'die Ankündigung'],
  meaningType: 'polysemous',
  meaningExplanation: 'Глагол kündigen работает в трёх направлениях: увольняться самому, увольнять сотрудника (jdm. Dat.) и расторгать любой договор (Akk.).',
  meaningExamples: [{ de: 'Ich habe meinen Job gekündigt.', ru: 'Я уволился с работы.' }, { de: 'Die Firma hat ihm gekündigt.', ru: 'Компания его уволила.' }, { de: 'den Internetvertrag kündigen', ru: 'расторгнуть договор на интернет' }],
  note: 'Работает в обе стороны: «Ich kündige» — я увольняюсь; «Die Firma kündigt mir» — меня увольняют (Dativ!). Пассив: «Mir wurde gekündigt» (норма), а не «Ich wurde gekündigt» (встречается, но ненормативно). О договорах: «den Handyvertrag / die Wohnung kündigen». «Die Kündigungsfrist» — срок уведомления.',
  why: {
    confidence: 'high',
    text: 'Состав: основа künd- (от устар. kund) + -ig- + -en.\nПроисхождение: от старого прилагательного kund («известный», родственного kennen) глагол kündigen первоначально значил «извещать, объявлять» (ср. ankündigen — «анонсировать»). В деловой и юридической речи значение сузилось до «объявить о расторжении договора».\nПрозрачность: непрозрачное — без знания устаревшего kund корень не считывается.',
    source: 'DWDS (Pfeifer), s.v. kündigen / kund',
    evidence: 'Др.-в.-нем. kund «известный» (к корню kennen/können); kündigen изначально «извещать», юридически сузилось до «расторгать договор».'
  },
  ru_link: null
},
{
  id: 'b1-work-abteilung', pos: 'noun',
  de: 'Abteilung', article: 'die', plural: 'die Abteilungen',
  ru: 'отдел, отделение',
  examples: [
    { de: 'Ich arbeite in der [[Abteilung]] für IT-Sicherheit.', ru: 'Я работаю в отделе IT-безопасности.' },
    { de: 'Welche [[Abteilung]] ist für die Laptops zuständig?', ru: 'Какой отдел отвечает за ноутбуки?' }
  ],
  morph: 'Ab-teil-ung', root: 'teilen',
  parts: [['ab-', 'от, отделение'], ['teil', 'основа teilen — делить'], ['-ung', 'глагол → существительное, всегда die']],
  transparency: 'transparent',
  family: ['teilen', 'der Teil', 'verteilen', 'mitteilen', 'die Mitteilung', 'teilnehmen'],
  note: '«Die Personalabteilung» — отдел кадров (HR), «die IT-Abteilung», «der Abteilungsleiter / die Abteilungsleiterin» — начальник отдела. Отделение в больнице обычно — «die Station».',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола abteilen (ab- + teilen) + -ung.\nПроисхождение: отглагольное существительное от abteilen («отделять») с XVIII в. обозначает выделенное подразделение организации. Русское «отдел» (от «отделять») устроено по той же модели.\nПрозрачность: полностью прозрачное.',
    source: 'DWDS (Pfeifer), s.v. Abteilung / abteilen',
    evidence: 'Отглагольное существительное от abteilen («отделять»); с XVIII в. используется для подразделений учреждений.'
  },
  ru_link: null
},
{
  id: 'b1-work-vertrag', pos: 'noun',
  de: 'Vertrag', article: 'der', plural: 'die Verträge',
  ru: 'договор, контракт',
  examples: [
    { de: 'Mein [[Vertrag]] ist zunächst auf zwei Jahre befristet.', ru: 'Мой контракт пока заключён на два года.' },
    { de: 'Lies dir den [[Vertrag]] genau durch, bevor du unterschreibst.', ru: 'Внимательно прочитай договор, прежде чем подписывать.' }
  ],
  morph: 'Ver-trag', root: 'tragen',
  parts: [['Ver-', 'неотделяемая приставка'], ['trag', 'основа tragen — нести']],
  transparency: 'opaque',
  family: ['tragen', 'sich vertragen', 'der Auftrag', 'der Antrag', 'beantragen', 'der Arbeitsvertrag', 'der Mietvertrag'],
  note: 'Сочетания: einen Vertrag unterschreiben / abschließen / verlängern / kündigen. «Befristet» — срочный, «unbefristet» — бессрочный. Умлаут во мн. ч.: die Verträge. Родственное «sich vertragen» — ладить («Wir vertragen uns gut»).',
  why: {
    confidence: 'high',
    root: 'tragen',
    text: 'Состав: приставка Ver- + основа глагола tragen.\nПроисхождение: средневерхненемецкое vertrac («соглашение, примирение») образовано от возвратного глагола sich vertragen («прийти к согласию, ужиться», исторически к tragen «нести, выносить»).\nПрозрачность: непрозрачное — из буквального «нести» значение «договор» сегодня не выводится.',
    source: 'DWDS (Pfeifer), s.v. Vertrag / vertragen',
    evidence: 'Ср.-в.-нем. vertrac «соглашение, примирение», от sich vertragen «договориться, ужиться» (к tragen).'
  },
  ru_link: null
},
{
  id: 'b1-work-ueberstunde', pos: 'noun',
  de: 'Überstunde', article: 'die', plural: 'die Überstunden',
  ru: 'сверхурочный час, переработка',
  examples: [
    { de: 'Diese Woche habe ich schon zehn [[Überstunden]] gemacht.', ru: 'На этой неделе я уже переработал десять часов.' },
    { de: 'Kann ich meine [[Überstunden]] im Dezember abbauen?', ru: 'Можно мне отгулять переработки в декабре?' }
  ],
  morph: 'Über-stunde', root: 'Stunde',
  parts: [['Über-', 'сверх'], ['Stunde', 'die Stunde — час']],
  transparency: 'transparent',
  family: ['die Stunde', 'stündlich', 'stundenlang', 'die Gleitzeit'],
  note: 'Почти всегда во мн. ч.: «Überstunden machen». «Überstunden abbauen» (разг. «abfeiern») — отгулять; «ausbezahlt bekommen» — получить деньгами. «Die Gleitzeit» — гибкий график.',
  why: {
    confidence: 'high',
    text: 'Состав: über- («сверх») + die Stunde («час»).\nПроисхождение: промышленное сложение XIX века — буквально «час сверх нормы». Русское «сверхурочный» построено по той же модели.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS (Pfeifer), s.v. Überstunde',
    evidence: 'Сложение über- («сверх нормы») + Stunde («час»); засвидетельствовано с XIX в.'
  },
  ru_link: null
},
{
  id: 'b1-work-verantwortlich', pos: 'adjective',
  de: 'verantwortlich', gov: 'für + Akk.',
  ru: 'ответственный (за)',
  examples: [
    { de: 'Wer ist für die Backups [[verantwortlich]]?', ru: 'Кто отвечает за бэкапы?' },
    { de: 'Im Team bin ich für die Firewall-Regeln [[verantwortlich]].', ru: 'В команде я отвечаю за правила файрвола.' }
  ],
  morph: 'ver-antwort-lich', root: 'Antwort',
  parts: [['ver-', 'неотделяемая приставка'], ['Antwort', 'die Antwort — ответ'], ['-lich', 'суффикс прилагательного']],
  transparency: 'figurative',
  family: ['die Antwort', 'antworten', 'beantworten', 'verantworten', 'die Verantwortung'],
  note: '«Für etw. verantwortlich sein», «die Verantwortung übernehmen / tragen». На работе ещё чаще слышно «zuständig für» — «кто этим занимается, к кому обращаться» («Wer ist dafür zuständig?»); «verantwortlich» включает и ответственность за результат, и вину.',
  why: {
    confidence: 'high',
    text: 'Состав: от глагола verantworten (ver- + Antwort) + -lich.\nПроисхождение: die Antwort — древнее сложение ant- («против, в ответ») + Wort («слово»). Глагол verantworten первоначально был юридическим термином «держать ответ перед судом», откуда и прилагательное verantwortlich. Русское «ответственный» развилось из «ответ» по сходной логике.\nПрозрачность: переносная — слово Antwort видно, но переход к «нести ответственность» юридически-метафорический.',
    source: 'DWDS (Pfeifer), s.v. verantworten / Antwort',
    evidence: 'Др.-в.-нем. antwurti < ant- («в ответ») + Wort; verantworten изначально в праве «отвечать перед судом».'
  },
  ru_link: null
}
]});
