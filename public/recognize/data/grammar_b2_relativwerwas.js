/* German GRAMMAR · B2 · Relative clauses with wer / was / wo(r)-: Wer zu spät kommt, …; alles, was …; das Beste, was …; worüber.
 * B1 relative pronouns der / die / das are in grammar_relativsaetze.js. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'relativ_wer_was',
  level: 'B2',
  title: { ru: 'Относительные wer, was, wo(r)-', en: 'Relative clauses with wer, was, wo(r)-' },
  summary: {
    ru: 'Wer zu spät kommt, (der) …; alles, was …; das Beste, was …; …, worüber ich mich freue. Когда вместо der / die / das нужны wer, was и wo-.',
    en: 'Wer zu spät kommt, (der) …; alles, was …; das Beste, was …; …, worüber ich mich freue. When wer, was and wo- replace der / die / das.'
  },
  explanation: {
    ru: '<p>Обычные относительные местоимения <em>der / die / das</em> (<a href="#/grammar/relativsaetze">Relative clauses</a>) относятся к конкретному существительному. Если такого существительного нет или оно «размыто», нужны <b>wer</b>, <b>was</b> и <b>wo(r)- + предлог</b>.</p>' +
      '<p><b>wer … , (der) …</b> = «кто …, тот …»: <em><b>Wer</b> zu spät kommt, (<b>der</b>) muss draußen warten.</em> Если падежи разные, второе местоимение обязательно и стоит в своём падеже: <em><b>Wer</b> mir hilft, <b>dem</b> helfe ich auch.</em> <em><b>Wem</b> das nicht gefällt, <b>der</b> kann gehen.</em></p>' +
      '<p><b>was</b> = «что» (то, что / всё, что). Ставится после:</p>' +
      '<ul>' +
      '<li><em>alles, nichts, vieles, einiges, weniges, manches</em>: <em>Das ist <b>alles, was</b> ich weiß.</em></li>' +
      '<li>субстантивированных превосходных и порядковых: <em>das Beste, das Schönste, das Erste, das Einzige</em>: <em>Das ist <b>das Beste, was</b> mir passieren konnte.</em></li>' +
      '<li>указательного <em>das</em> (часто опускается): <em>(Das,) <b>was</b> du sagst, stimmt nicht.</em></li>' +
      '<li><b>всего предложения</b> («что меня удивило»): <em>Er kam pünktlich, <b>was</b> mich überraschte.</em></li>' +
      '</ul>' +
      '<p><b>wo(r)- + предлог</b> заменяет «предлог + was»: <em>Das ist <b>alles, worüber</b> wir gesprochen haben.</em> <em>Sie hat angerufen, <b>worüber</b> ich mich sehr gefreut habe.</em></p>' +
      '<p><b>wo</b> для места: <em>die Stadt, <b>wo</b> ich wohne</em> = <em>die Stadt, in der ich wohne</em>.</p>',
    en: '<p>The ordinary relative pronouns <em>der / die / das</em> (<a href="#/grammar/relativsaetze">Relative clauses</a>) refer back to a specific noun. When there is no such noun, or it is vague, German uses <b>wer</b>, <b>was</b> and <b>wo(r)- + preposition</b>.</p>' +
      '<p><b>wer …, (der) …</b> = “whoever …” / “anyone who …”: <em><b>Wer</b> zu spät kommt, (<b>der</b>) muss draußen warten.</em> When the cases differ, the second pronoun is required and takes its own case: <em><b>Wer</b> mir hilft, <b>dem</b> helfe ich auch.</em> <em><b>Wem</b> das nicht gefällt, <b>der</b> kann gehen.</em></p>' +
      '<p><b>was</b> = “that / which / what”. Use it after:</p>' +
      '<ul>' +
      '<li><em>alles, nichts, vieles, einiges, weniges, manches</em>: <em>Das ist <b>alles, was</b> ich weiß</em> — “everything (that) I know”.</li>' +
      '<li>neuter superlatives and ordinals used as nouns: <em>das Beste, das Schönste, das Erste, das Einzige</em>: <em>Das ist <b>das Beste, was</b> mir passieren konnte.</em></li>' +
      '<li>demonstrative <em>das</em> (often dropped) — English “what”: <em>(Das,) <b>was</b> du sagst, stimmt nicht.</em></li>' +
      '<li><b>a whole clause</b> — English “which”: <em>Er kam pünktlich, <b>was</b> mich überraschte.</em></li>' +
      '</ul>' +
      '<p><b>wo(r)- + preposition</b> replaces “preposition + was”: <em>Das ist <b>alles, worüber</b> wir gesprochen haben</em> — “everything we talked about”.</p>' +
      '<p><b>wo</b> for places: <em>die Stadt, <b>wo</b> ich wohne</em> = <em>die Stadt, in der ich wohne</em>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Когда что', en: 'Which word when' },
      head: { ru: ['После', 'Слово', 'Пример'], en: ['After', 'Word', 'Example'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['нет слова-опоры (о людях)', 'wer … (der)', 'Wer Hunger hat, kann jetzt essen.'],
          ['alles, nichts, vieles, einiges', 'was', 'Ich glaube nicht alles, was in der Zeitung steht.'],
          ['das Beste, das Einzige, das Erste', 'was', 'Das Einzige, was fehlt, ist Zeit.'],
          ['целое предложение', 'was', 'Der Zug war pünktlich, was selten ist.'],
          ['то же + предлог', 'wo(r)- + Präp.', 'Es gibt nichts, wofür ich mich schäme.'],
          ['место', 'wo', 'Das ist das Café, wo wir uns kennengelernt haben.']
        ],
        en: [
          ['no noun (people)', 'wer … (der)', 'Wer Hunger hat, kann jetzt essen.'],
          ['alles, nichts, vieles, einiges', 'was', 'Ich glaube nicht alles, was in der Zeitung steht.'],
          ['das Beste, das Einzige, das Erste', 'was', 'Das Einzige, was fehlt, ist Zeit.'],
          ['a whole clause', 'was', 'Der Zug war pünktlich, was selten ist.'],
          ['same + preposition', 'wo(r)- + prep.', 'Es gibt nichts, wofür ich mich schäme.'],
          ['a place', 'wo', 'Das ist das Café, wo wir uns kennengelernt haben.']
        ]
      }
    }
  ],
  examples: [
    { de: '[[Wer]] zu spät kommt, muss draußen warten.', ru: 'Кто опоздает, будет ждать снаружи.', en: 'Anyone who’s late has to wait outside.' },
    { de: 'Das ist alles, [[was]] ich dazu sagen kann.', ru: 'Это всё, что я могу об этом сказать.', en: 'That’s all I can say about it.' },
    { de: 'Das war das Schönste, [[was]] ich je erlebt habe.', ru: 'Это было самое прекрасное, что я когда-либо переживал.', en: 'That was the most wonderful thing I’ve ever experienced.' },
    { de: 'Er hat die Prüfung bestanden, [[was]] niemand erwartet hatte.', ru: 'Он сдал экзамен, чего никто не ожидал.', en: 'He passed the exam, which nobody had expected.' },
    { de: 'Sie hat sich entschuldigt, [[worüber]] ich mich sehr gefreut habe.', ru: 'Она извинилась, чему я очень обрадовался.', en: 'She apologised, which made me very happy.' }
  ],
  pitfalls: [
    {
      title: { ru: 'alles, was — не alles, das', en: 'alles, was — not alles, das / dass' },
      html: {
        ru: '«Всё, что» → <span class="right">alles, was</span>. <span class="wrong">alles, das</span> и <span class="wrong">alles, dass</span> — ошибки. Так же «то, что»: <span class="right">das, was</span>.',
        en: 'English “everything that” tempts <span class="wrong">alles, das</span> or <span class="wrong">alles, dass</span>. German uses <span class="right">alles, was</span>. Also “what you said” = <span class="right">das, was du gesagt hast</span>, not <span class="wrong">das, das</span>.'
      }
    },
    {
      title: { ru: '«что» про всё предложение → was', en: '“which” for a whole clause → was' },
      html: {
        ru: '«Он пришёл вовремя, что меня удивило» → <span class="right">…, was mich überraschte.</span> Не <span class="wrong">…, das mich überraschte</span> и не <span class="wrong">…, dass mich überraschte</span>.',
        en: '“He came on time, which surprised me” → <span class="right">…, was mich überraschte.</span> Not <span class="wrong">…, welches mich überraschte</span> or <span class="wrong">…, das mich überraschte</span>.'
      }
    },
    {
      title: { ru: 'Wer …, dem / den …: падеж второй части', en: 'Wer …, dem / den …: case of the second part' },
      html: {
        ru: 'Как «кто …, тому …»: <span class="right">Wer mich fragt, dem antworte ich.</span> <span class="wrong">Wer mich fragt, der antworte ich</span> — ошибка: antworten требует Dativ.',
        en: 'Like “whoever …, to him …”: <span class="right">Wer mich fragt, dem antworte ich.</span> <span class="wrong">Wer mich fragt, der antworte ich</span> is wrong — antworten takes the Dativ.'
      }
    }
  ],
  drills: [
    {
      id: 'g-rww-d1', kind: 'choice',
      q: '___ zu spät kommt, muss draußen warten.',
      options: ['Wer', 'Der', 'Was'],
      answer: 0,
      explain: { ru: 'Нет конкретного человека («кто бы ни») → Wer.', en: 'No specific person (“whoever”) → Wer.' }
    },
    {
      id: 'g-rww-d2', kind: 'choice',
      q: 'Das ist alles, ___ ich weiß.',
      options: ['was', 'das', 'dass'],
      answer: 0,
      explain: { ru: 'После alles → was.', en: 'After alles → was.' }
    },
    {
      id: 'g-rww-d3', kind: 'choice',
      q: 'Das war das Schönste, ___ ich je erlebt habe.',
      options: ['was', 'dass', 'wo'],
      answer: 0,
      explain: { ru: 'После субстантивированной превосходной степени (das Schönste) → was.', en: 'After a neuter superlative used as a noun (das Schönste) → was.' }
    },
    {
      id: 'g-rww-d4', kind: 'choice',
      q: 'Er hat die Prüfung bestanden, ___ alle überrascht hat.',
      options: ['was', 'das', 'der'],
      answer: 0,
      explain: { ru: 'Относится ко всему предложению → was.', en: 'Refers to the whole clause → was.' }
    },
    {
      id: 'g-rww-d5', kind: 'gap',
      q: 'Es gibt nichts, ___ ich mich mehr freue als auf den Urlaub.',
      hint: { ru: 'sich freuen auf → wo(r)- + auf', en: 'sich freuen auf → wo(r)- + auf' },
      answer: 'worauf',
      explain: { ru: 'nichts + предлог auf → worauf.', en: 'nichts + the preposition auf → worauf.' }
    },
    {
      id: 'g-rww-d6', kind: 'choice',
      q: '___ mir hilft, dem helfe ich auch.',
      options: ['Wer', 'Wem', 'Was'],
      answer: 0,
      explain: { ru: 'В придаточном «кто» — подлежащее → Wer (Nominativ).', en: 'In the clause “who” is the subject → Wer (Nominativ).' }
    },
    {
      id: 'g-rww-d7', kind: 'choice',
      q: 'Wer viel arbeitet, ___ braucht auch Pausen.',
      options: ['der', 'den', 'dem'],
      answer: 0,
      explain: { ru: 'В главном предложении «тот» — подлежащее → der (Nominativ).', en: 'In the main clause the pronoun is the subject → der (Nominativ).' }
    },
    {
      id: 'g-rww-d8', kind: 'choice',
      q: 'Wem das Essen nicht schmeckt, ___ kann sich etwas anderes bestellen.',
      options: ['der', 'dem', 'wer'],
      answer: 0,
      explain: { ru: 'Wem — Dativ для schmecken; во второй части подлежащее → der.', en: 'Wem is Dativ for schmecken; in the second part the subject → der.' }
    },
    {
      id: 'g-rww-d9', kind: 'gap',
      q: 'Sie hat endlich angerufen, ___ ich sehr froh bin.',
      hint: { ru: 'froh über → wo(r)- + über', en: 'froh über → wo(r)- + über' },
      answer: 'worüber',
      explain: { ru: 'Относится ко всему предложению + предлог über → worüber.', en: 'Refers to the whole clause + the preposition über → worüber.' }
    },
    {
      id: 'g-rww-d10', kind: 'choice',
      q: 'Das ist die Stadt, ___ ich aufgewachsen bin.',
      options: ['wo', 'was', 'wer'],
      answer: 0,
      explain: { ru: 'Место → wo (= in der).', en: 'A place → wo (= in der).' }
    },
    {
      id: 'g-rww-d11', kind: 'choice',
      q: '___ du gestern gesagt hast, stimmt leider nicht.',
      options: ['Was', 'Das', 'Dass'],
      answer: 0,
      explain: { ru: '«То, что ты сказал» без слова-опоры → Was.', en: '“What you said” with no noun to refer to → Was.' }
    },
    {
      id: 'g-rww-d12', kind: 'choice',
      q: 'Das Einzige, ___ mich hier stört, ist der Lärm.',
      options: ['was', 'dass', 'wo'],
      answer: 0,
      explain: { ru: 'После das Einzige → was.', en: 'After das Einzige → was.' }
    },
    {
      id: 'g-rww-d13', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Многое из того, что пишут в газете, преувеличено».', en: 'Build the sentence. “A lot of what is in the newspaper is exaggerated.”' },
      tokens: ['Vieles,', 'was', 'in der Zeitung', 'steht,', 'ist', 'übertrieben.'],
      answer: 'Vieles, was in der Zeitung steht, ist übertrieben.',
      explain: { ru: 'vieles → was; придаточное с глаголом в конце, затем ist.', en: 'vieles → was; verb at the end of the clause, then ist.' }
    }
  ]
});
