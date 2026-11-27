GT.register({ tab: 'words', topic: 'everyday', items: [
{
  id: 'b1-everyday-obwohl', pos: 'conjunction',
  de: 'obwohl', gov: 'глагол в конце',
  ru: 'хотя, несмотря на то что',
  examples: [
    { de: '[[Obwohl]] ich krank war, bin ich zur Arbeit gegangen.', ru: 'Хотя я был болен, я пошёл на работу.' },
    { de: 'Das Update ist fehlgeschlagen, [[obwohl]] alle Tests grün waren.', ru: 'Обновление не прошло, хотя все тесты были зелёными.' }
  ],
  morph: 'ob-wohl',
  parts: [['ob', '«если» (старое значение; сегодня — «ли»)'], ['wohl', '«правда, хоть и» (уступительная частица)']],
  transparency: 'opaque',
  family: ['obgleich', 'obschon', 'trotzdem', 'trotz + Gen.'],
  note: 'Подчинительный союз: спрягаемый глагол уходит в КОНЕЦ («…, obwohl alle Tests grün waren»). Если придаточное с obwohl стоит первым, главное начинается с глагола: «Obwohl es regnet, gehe ich spazieren». Смысл тот же, что у trotzdem, но порядок слов другой: «Es regnet. Trotzdem gehe ich spazieren».',
  why: {
    confidence: 'medium',
    text: 'Состав: сращение ob + wohl.\nПроисхождение: в старом языке ob значило «если» (как англ. if — и «если», и «ли»), а wohl — «правда, действительно» (ср. сегодня: «Er ist wohl reich, aber nicht glücklich» — «Он, правда, богат, но не счастлив»). Слова стояли раздельно: «ob er wohl reich ist…» ≈ «если он и вправду богат…». Отсюда уступка «допустим, так — и всё же», и в XVI–XVII вв. пара срослась в союз «хотя». Так же устроены obgleich и obschon.\nПрозрачность: из современных значений ob («ли») и wohl («наверное») смысл «хотя» напрямую не выводится.',
    source: 'DWDS (Pfeifer), s.v. obwohl',
    evidence: 'Фиксирует сращение ob («если») + уступительного wohl в XVI–XVII вв.; детали ранней грамматикализации трактуются по-разному.'
  },
  ru_link: null
},
{
  id: 'b1-everyday-trotzdem', pos: 'adverb',
  de: 'trotzdem',
  ru: 'тем не менее, всё равно',
  examples: [
    { de: 'Der Zug hatte Verspätung. [[Trotzdem]] war ich pünktlich im Büro.', ru: 'Поезд опоздал. Тем не менее я пришёл в офис вовремя.' },
    { de: 'Es gibt ein kleines Risiko, aber wir spielen das Update [[trotzdem]] heute ein.', ru: 'Есть небольшой риск, но мы всё равно ставим обновление сегодня.' }
  ],
  morph: 'trotz-dem', root: 'trotz',
  parts: [['trotz', 'вопреки, несмотря на'], ['dem', '«этому» (Dativ): несмотря на это']],
  transparency: 'transparent',
  family: ['trotz + Gen.', 'der Trotz', 'trotzig', 'obwohl'],
  note: 'Наречие, а не союз: на первом месте за ним сразу идёт глагол («Trotzdem war ich pünktlich»), а не «Trotzdem ich war …». Может стоять и в середине («Wir machen es trotzdem»). Разговорно: «Trotzdem danke!» — всё равно спасибо.',
  why: {
    confidence: 'high',
    text: 'Состав: предлог trotz + указательное местоимение dem («этому»).\nПроисхождение: предлог trotz развился из существительного der Trotz («упрямство, вызов, сопротивление»); буквально trotzdem — «вопреки этому».\nПрозрачность: состав прозрачен — обе части живы в современном языке.',
    source: 'DWDS (Pfeifer), s.v. trotzdem / Trotz',
    evidence: 'Сращение предлога trotz (от существительного der Trotz «упрямство, сопротивление») с дативом dem.'
  },
  ru_link: null
},
{
  id: 'b1-everyday-erledigen', pos: 'verb',
  de: 'erledigen', forms: { praes: 'erledigt', praet: 'erledigte', perf: 'hat erledigt' }, gov: '+ Akk.',
  ru: 'сделать, выполнить, уладить',
  examples: [
    { de: 'Ich muss heute noch ein paar Sachen [[erledigen]].', ru: 'Мне сегодня ещё нужно сделать пару дел.' },
    { de: 'Das Ticket ist [[erledigt]], ich habe es gerade geschlossen.', ru: 'Тикет готов, я его только что закрыл.' }
  ],
  morph: 'er-ledig-en', root: 'ledig',
  parts: [['er-', 'достижение результата'], ['ledig', 'свободный (устар.; сегодня: холостой)'], ['-en', 'окончание инфинитива']],
  transparency: 'figurative',
  family: ['ledig', 'die Erledigung', 'unerledigt'],
  note: 'Очень частое слово на работе и в быту: «Einkäufe / Behördengänge erledigen», «Das ist erledigt» — готово. Разговорно «Ich bin völlig erledigt» — я совершенно вымотан.',
  why: {
    confidence: 'high',
    text: 'Состав: er- + ledig + -en.\nПроисхождение: средневерхненемецкое erledegen значило «освобождать» — от старого значения прилагательного ledig «свободный, необременённый» (сегодня сузилось до «холостой»). Отсюда «освободить(ся) от дела» → выполнить.\nПрозрачность: переносная — по современному значению ledig («холостой») смысл глагола уже не угадать.',
    source: 'DWDS (Pfeifer), s.v. erledigen / ledig',
    evidence: 'Ср.-в.-нем. erledegen «освобождать», от ledig «свободный, незанятый, свободный от обязательств».'
  },
  ru_link: null
}
]});
