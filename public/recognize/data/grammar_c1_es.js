/* German GRAMMAR · C1 · Uses of "es": impersonal subject, placeholder (Vorfeld-es), correlate (es … dass), fixed phrases.
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'es_gebrauch',
  level: 'C1',
  title: { ru: 'Употребление es', en: 'The many uses of es' },
  summary: {
    ru: 'Es regnet. Es kamen viele Gäste. Ich finde es gut, dass… — когда es обязателен, а когда исчезает.',
    en: 'Es regnet. Es kamen viele Gäste. Ich finde es gut, dass… — when es is required and when it disappears.'
  },
  explanation: {
    ru: '<p>У <em>es</em> несколько разных функций. Главное на C1 — понимать, <b>когда es пропадает</b> при перестановке слов.</p>' +
      '<ul>' +
      '<li><b>Безличное подлежащее</b> — всегда остаётся: погода и время (<em>Es regnet. Es ist spät.</em>), устойчивые выражения (<em>Es gibt…, Es geht mir gut, Es handelt sich um…, Es kommt darauf an</em>). <em>Heute regnet <b>es</b>.</em></li>' +
      '<li><b>Заполнитель первого места</b> (Platzhalter-es) — когда настоящее подлежащее хотят поставить ближе к концу (как новое). Глагол согласуется с настоящим подлежащим. <b>Исчезает</b>, если первое место занято чем-то другим: <em><b>Es</b> warten draußen drei Leute.</em> → <em>Draußen warten drei Leute.</em></li>' +
      '<li><b>Коррелят</b> — указывает вперёд на придаточное или инфинитив: <em>Ich finde <b>es</b> wichtig, dass du kommst.</em> <em><b>Es</b> freut mich, dich zu sehen.</em> Если придаточное стоит первым, es обычно исчезает: <em>Dass du kommst, finde ich wichtig.</em></li>' +
      '<li><b>Безличный пассив</b>: <em><b>Es</b> wird hier nicht geraucht.</em> → <em>Hier wird nicht geraucht.</em></li>' +
      '</ul>',
    en: '<p><em>es</em> has several different jobs. The key C1 point is knowing <b>when es disappears</b> if you reorder the sentence.</p>' +
      '<ul>' +
      '<li><b>Impersonal subject</b> — always stays: weather and time (<em>Es regnet. Es ist spät.</em>), fixed phrases (<em>Es gibt…, Es geht mir gut, Es handelt sich um…, Es kommt darauf an</em>). <em>Heute regnet <b>es</b>.</em></li>' +
      '<li><b>Placeholder in position 1</b> (Platzhalter-es) — used to push the real subject towards the end (as new information), like English “there”. The verb agrees with the real subject. It <b>disappears</b> when something else takes position 1: <em><b>Es</b> warten draußen drei Leute.</em> → <em>Draußen warten drei Leute.</em></li>' +
      '<li><b>Correlate</b> — points ahead to a clause or infinitive, like English “it”: <em>Ich finde <b>es</b> wichtig, dass du kommst.</em> <em><b>Es</b> freut mich, dich zu sehen.</em> If the clause comes first, es usually disappears: <em>Dass du kommst, finde ich wichtig.</em></li>' +
      '<li><b>Impersonal passive</b>: <em><b>Es</b> wird hier nicht geraucht.</em> → <em>Hier wird nicht geraucht.</em></li>' +
      '</ul>'
  },
  tables: [
    {
      caption: { ru: 'Остаётся или исчезает', en: 'Stays or disappears' },
      head: { ru: ['Тип', 'es на 1-м месте', 'Другое на 1-м месте'], en: ['Type', 'es in position 1', 'Something else in position 1'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['безличное подлежащее', 'Es schneit seit Tagen.', 'Seit Tagen schneit es.'],
          ['заполнитель', 'Es fehlen noch zwei Unterlagen.', 'Noch fehlen zwei Unterlagen.'],
          ['безличный пассив', 'Es wird viel gelacht.', 'Bei uns wird viel gelacht.'],
          ['коррелят', 'Es ist schade, dass du gehst.', 'Schade ist (es), dass du gehst.']
        ],
        en: [
          ['impersonal subject', 'Es schneit seit Tagen.', 'Seit Tagen schneit es.'],
          ['placeholder', 'Es fehlen noch zwei Unterlagen.', 'Noch fehlen zwei Unterlagen.'],
          ['impersonal passive', 'Es wird viel gelacht.', 'Bei uns wird viel gelacht.'],
          ['correlate', 'Es ist schade, dass du gehst.', 'Schade ist (es), dass du gehst.']
        ]
      }
    }
  ],
  examples: [
    { de: '[[Es]] kamen mehr Gäste als erwartet.', ru: 'Пришло больше гостей, чем ожидалось.', en: 'More guests came than expected.' },
    { de: 'Gestern kamen mehr Gäste als erwartet.', ru: 'Вчера пришло больше гостей, чем ожидалось.', en: 'Yesterday more guests came than expected.' },
    { de: 'Ich halte [[es]] für sinnvoll, früher anzufangen.', ru: 'Я считаю разумным начать раньше.', en: 'I think it makes sense to start earlier.' },
    { de: 'In dem Artikel handelt [[es]] sich um Datenschutz.', ru: 'В статье речь идёт о защите данных.', en: 'The article is about data protection.' },
    { de: 'Mir geht [[es]] heute viel besser.', ru: 'Мне сегодня намного лучше.', en: 'I feel much better today.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Глагол — по настоящему подлежащему', en: 'The verb agrees with the real subject' },
      html: {
        ru: '<span class="wrong">Es wartet drei Leute draußen.</span> → <span class="right">Es warten drei Leute draußen.</span>',
        en: '<span class="wrong">Es wartet drei Leute draußen.</span> → <span class="right">Es warten drei Leute draußen.</span> Compare English “There are three people…”.'
      }
    },
    {
      title: { ru: 'es gibt не исчезает', en: 'es gibt never drops es' },
      html: {
        ru: '<span class="wrong">Hier gibt viele Cafés.</span> → <span class="right">Hier gibt es viele Cafés.</span> Это безличное подлежащее, а не заполнитель.',
        en: '<span class="wrong">Hier gibt viele Cafés.</span> → <span class="right">Hier gibt es viele Cafés.</span> This is an impersonal subject, not a placeholder.'
      }
    }
  ],
  drills: [
    {
      id: 'g-es-d1', kind: 'choice',
      q: 'Im Park ___ viele Kinder.',
      options: ['spielen', 'spielen es', 'spielt es'],
      answer: 0,
      explain: { ru: 'Заполнитель es исчезает, если 1-е место занято (Im Park).', en: 'The placeholder es disappears when position 1 is taken (Im Park).' }
    },
    {
      id: 'g-es-d2', kind: 'choice',
      q: 'In der Altstadt gibt ___ viele kleine Läden.',
      options: ['es', '—', 'sie'],
      answer: 0,
      explain: { ru: 'es gibt — es всегда остаётся.', en: 'es gibt — es always stays.' }
    },
    {
      id: 'g-es-d3', kind: 'choice',
      q: '___ fehlen noch zwei Unterschriften.',
      options: ['Es', 'Sie', 'Das'],
      answer: 0,
      explain: { ru: 'Заполнитель на 1-м месте; глагол fehlen — по Unterschriften.', en: 'Placeholder in position 1; fehlen agrees with Unterschriften.' }
    },
    {
      id: 'g-es-d4', kind: 'choice',
      q: 'Dass du so schnell geantwortet hast, freut ___ sehr.',
      options: ['mich', 'es mich', 'mich es'],
      answer: 0,
      explain: { ru: 'Придаточное уже на 1-м месте → коррелят es не нужен.', en: 'The clause is already in position 1 → no correlate es.' }
    },
    {
      id: 'g-es-d5', kind: 'gap',
      q: 'Bei der Besprechung handelte ___ sich um das neue Budget.',
      answer: 'es',
      explain: { ru: 'Es handelt sich um — es всегда остаётся.', en: 'Es handelt sich um — es always stays.' }
    }
  ]
});
