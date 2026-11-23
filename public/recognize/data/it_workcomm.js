GT.register({ tab: 'it', topic: 'workcomm', items: [
{
  id: 'it-comm-ticket', pos: 'noun',
  de: 'Ticket', article: 'das', plural: 'die Tickets',
  ru: 'тикет, заявка',
  usage: { says: 'english', note: '«Das Ticket» везде (Jira, ServiceNow). Немецкие глаголы вокруг: aufmachen, anlegen, zuweisen, schließen.' },
  examples: [
    { de: 'Kannst du dafür bitte ein [[Ticket]] aufmachen?', ru: 'Можешь, пожалуйста, завести на это тикет?' },
    { de: 'Das [[Ticket]] liegt bei mir, ich kümmere mich darum.', ru: 'Тикет на мне, я им займусь.' }
  ],
  morph: 'Ticket',
  family: ['das Ticketsystem', 'aufmachen', 'anlegen', 'zuweisen', 'schließen'],
  meaningType: 'polysemous',
  meaningExplanation: 'В IT das Ticket — это заявка в Jira или ServiceNow, а в повседневной жизни — билет на транспорт, концерт или самолёт.',
  meaningExamples: [{ de: 'ein Ticket in Jira aufmachen', ru: 'завести тикет в Jira' }, { de: 'ein Ticket für den ICE kaufen', ru: 'купить билет на поезд ICE' }],
  note: '«Ein Ticket aufmachen / anlegen / erstellen» — завести, «jdm. ein Ticket zuweisen» — назначить, «Das Ticket liegt bei X» — тикет на X. В быту ещё и билет (= die Fahrkarte).',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: английское ticket восходит к старофранцузскому estiquet(te) («записка, ярлык»). Из того же французского слова étiquette пришло русское «этикетка», так что тикет и этикетка — исторические родственники.\nПрозрачность: непроизводное заимствование.',
    source: 'DWDS (Pfeifer), s.v. Ticket; OED: ticket; Vasmer: этикетка',
    evidence: 'Англ. ticket < ст.-фр. estiquet(te) «ярлык, записка» (тот же источник, что у фр. étiquette → рус. «этикетка»).'
  },
  ru_link: null
},
{
  id: 'it-comm-meeting', pos: 'noun',
  de: 'Meeting', article: 'das', plural: 'die Meetings',
  ru: 'встреча, совещание, митинг',
  usage: { says: 'both', note: 'В IT и стартапах — «das Meeting», «das Daily», «die Retro». В традиционных фирмах и учреждениях — «die Besprechung», официально — «die Sitzung».' },
  examples: [
    { de: 'Ich bin gleich im [[Meeting]], lass uns danach telefonieren.', ru: 'Я сейчас иду на встречу, давай созвонимся после.' },
    { de: 'Das [[Meeting]] wurde auf 14 Uhr verschoben.', ru: 'Встречу перенесли на 14:00.' }
  ],
  morph: 'Meeting',
  family: ['die Besprechung', 'die Sitzung', 'das Daily', 'die Retro', 'einladen', 'die Einladung'],
  note: '«Im Meeting sein», «ein Meeting ansetzen» — назначить, «verschieben» — перенести, «absagen» — отменить. В скрам-командах: «Das klären wir im Daily».',
  why: {
    confidence: 'high',
    text: 'Состав: непроизводное заимствование из английского.\nПроисхождение: английское meeting (от глагола to meet «встречаться») вошло в немецкий в XIX в. (сначала о политических и спортивных собраниях), а в конце XX в. закрепилось в деловой среде как «деловая встреча, совещание».\nПрозрачность: непроизводное заимствование (род — средний: das Meeting).',
    source: 'DWDS (Pfeifer), s.v. Meeting',
    evidence: 'Заимствовано в XIX в. из англ. meeting (< to meet «встречаться»); в деловом значении «совещание» — с XX в.'
  },
  ru_link: null
},
{
  id: 'it-comm-fehler', pos: 'noun',
  de: 'Fehler', article: 'der', plural: 'die Fehler',
  ru: 'ошибка; баг',
  usage: { says: 'both', note: 'Разработчики говорят «der Bug» об ошибках в коде; «der Fehler» — общее слово и единственное для не-айтишников. «Die Fehlermeldung» — сообщение об ошибке.' },
  examples: [
    { de: 'Ich glaube, der [[Fehler]] liegt in der Datenbankabfrage.', ru: 'Думаю, ошибка в запросе к базе данных.' },
    { de: 'Kein Problem, jeder macht mal [[Fehler]].', ru: 'Ничего страшного, все ошибаются.' }
  ],
  morph: 'Fehl-er', root: 'fehlen',
  parts: [['fehl', 'основа fehlen — промахиваться, недоставать'], ['-er', 'суффикс существительного']],
  transparency: 'figurative',
  family: ['fehlen', 'fehlerhaft', 'fehlerfrei', 'die Fehlermeldung', 'der Bug'],
  note: '«Einen Fehler machen» — ошибиться, «ein Fehler tritt auf» — возникает ошибка, «Der Fehler liegt an/in …» — причина в … Мн. ч. совпадает с ед.: die Fehler.',
  why: {
    confidence: 'high',
    text: 'Состав: основа глагола fehlen + суффикс -er.\nПроисхождение: глагол fehlen заимствован в средневерхненемецком (vælen) из старофранцузского faillir («промахиваться, ошибаться, недоставать», восходящего к латинскому fallere «обманывать»). От него в XVI в. образовалось существительное der Fehler («промах, ошибка»).\nПрозрачность: переносная — в современном языке fehlen чаще значит «отсутствовать», чем «промахиваться».',
    source: 'DWDS (Pfeifer), s.v. fehlen / Fehler',
    evidence: 'Ср.-в.-нем. vælen < ст.-фр. faillir (< лат. fallere); Fehler образовано от fehlen в XVI в. со значением «промах, ошибка».'
  },
  ru_link: null
},
{
  id: 'it-comm-beheben', pos: 'verb',
  de: 'beheben', forms: { praes: 'behebt', praet: 'behob', perf: 'hat behoben' }, gov: '+ Akk.',
  ru: 'устранить, исправить (проблему, ошибку)',
  usage: { says: 'both', note: 'Норма и на письме — «beheben». Среди разработчиков — «fixen» («Ich fixe das gleich», «hab’s gefixt»).' },
  examples: [
    { de: 'Wir haben den Fehler im letzten Release [[behoben]].', ru: 'Мы исправили ошибку в последнем релизе.' },
    { de: 'Wie lange dauert es, das Problem zu [[beheben]]?', ru: 'Сколько времени займёт устранить проблему?' }
  ],
  morph: 'be-heb-en', root: 'heben',
  parts: [['be-', 'неотделяемая приставка'], ['heb', 'основа heben — поднимать'], ['-en', 'окончание инфинитива']],
  transparency: 'opaque',
  family: ['heben', 'aufheben', 'anheben', 'der Fix', 'fixen'],
  note: 'Сочетается с Fehler, Problem, Störung, Schwachstelle, Schaden. Сильный глагол: behob, hat behoben. В статусах: «Der Fehler ist behoben» — исправлено.',
  why: {
    confidence: 'high',
    text: 'Состав: неотделяемая приставка be- + сильный глагол heben («поднимать», hob, gehoben).\nПроисхождение: в XVIII–XIX вв. от буквального «поднять и убрать с пути» (ср. abheben, aufheben) развилось переносное значение «устранить препятствие, неполадку, ошибку».\nПрозрачность: непрозрачное — современное heben («поднимать») само по себе не подсказывает смысл «починить», но объясняет сильные формы behob / behoben.',
    source: 'DWDS (Pfeifer), s.v. beheben / heben',
    evidence: 'be- + heben («поднимать»): «убрать с пути» → «устранить неполадку, ошибку» (XVIII–XIX вв.).'
  },
  ru_link: null
},
{
  id: 'it-comm-rueckmeldung', pos: 'noun',
  de: 'Rückmeldung', article: 'die', plural: 'die Rückmeldungen',
  ru: 'ответ, обратная связь',
  usage: { says: 'both', note: '«Rückmeldung» — очень часто в письмах; «Feedback» (das Feedback) — об оценке и ревью.' },
  examples: [
    { de: 'Danke für die schnelle [[Rückmeldung]]!', ru: 'Спасибо за быстрый ответ!' },
    { de: 'Kannst du mir bis Freitag eine kurze [[Rückmeldung]] geben?', ru: 'Можешь дать мне короткую обратную связь до пятницы?' }
  ],
  morph: 'Rück-meldung', root: 'melden',
  parts: [['Rück-', 'обратно, назад'], ['Meldung', 'die Meldung — сообщение (от melden)']],
  transparency: 'transparent',
  family: ['zurück', 'melden', 'sich melden', 'die Meldung', 'das Feedback'],
  note: 'Концовка письма: «Ich freue mich auf Ihre Rückmeldung». Также: «Ich melde mich zurück» — я вам отпишусь / перезвоню.',
  why: {
    confidence: 'high',
    text: 'Состав: основа rück- («обратно, назад») + die Meldung («сообщение», от melden).\nПроисхождение: немецкое определительное сложение — буквально «обратное сообщение, ответное уведомление», закрепившееся в деловой переписке и технике.\nПрозрачность: полностью прозрачное сложение.',
    source: 'DWDS, s.v. Rückmeldung',
    evidence: 'Сложение rück- («обратно») + Meldung («сообщение»), букв. «ответное сообщение».'
  },
  ru_link: null
}
]});
