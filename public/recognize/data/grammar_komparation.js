/* German GRAMMAR · B1 · Comparison: Komparativ, Superlativ, als / wie, je … desto. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'komparation',
  level: 'B1',
  title: { ru: 'Сравнение: Komparativ и Superlativ', en: 'Comparison: comparative and superlative' },
  summary: {
    ru: 'schnell → schneller → am schnellsten; als vs wie; окончания перед существительным.',
    en: 'schnell → schneller → am schnellsten; als vs wie; endings before a noun.'
  },
  explanation: {
    ru: '<p><b>Komparativ</b> = прилагательное + <b>-er</b>: <em>schnell → schneller</em>. <b>Superlativ</b> = <b>am …-sten</b> после глагола (<em>Er läuft am schnellsten</em>) или <b>der/die/das …-ste</b> перед существительным (<em>der schnellste Läufer</em>).</p>' +
      '<ul>' +
      '<li>Многие короткие слова получают умлаут: <em>alt → älter → am ältesten, groß → größer, jung → jünger, kalt → kälter</em>.</li>' +
      '<li>После -d, -t, -s, -ß, -z в превосходной степени вставляется <b>-e-</b>: <em>am ältesten, am kürzesten</em>.</li>' +
      '<li>Неправильные: <em>gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten, hoch → höher, nah → näher → am nächsten</em>.</li>' +
      '</ul>' +
      '<p><b>Сравнение:</b> неравенство — <b>als</b> (<em>größer als ich</em>), равенство — <b>(genau)so … wie</b> (<em>so groß wie ich</em>). <b>je + Komparativ, desto + Komparativ</b> — «чем …, тем …».</p>' +
      '<p>Перед существительным Komparativ и Superlativ склоняются как обычные прилагательные: <em>ein größer<b>es</b> Zimmer, mit dem best<b>en</b> Freund</em>.</p>',
    en: '<p><b>Comparative</b> = adjective + <b>-er</b>: <em>schnell → schneller</em>. <b>Superlative</b> = <b>am …-sten</b> after a verb (<em>Er läuft am schnellsten</em>) or <b>der/die/das …-ste</b> before a noun (<em>der schnellste Läufer</em>).</p>' +
      '<ul>' +
      '<li>Many short adjectives take an umlaut: <em>alt → älter → am ältesten, groß → größer, jung → jünger, kalt → kälter</em>.</li>' +
      '<li>After -d, -t, -s, -ß, -z the superlative adds <b>-e-</b>: <em>am ältesten, am kürzesten</em>.</li>' +
      '<li>Irregular: <em>gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten, hoch → höher, nah → näher → am nächsten</em>.</li>' +
      '</ul>' +
      '<p><b>Comparing:</b> unequal — <b>als</b> (<em>größer als ich</em>), equal — <b>(genau)so … wie</b> (<em>so groß wie ich</em>). <b>je + comparative, desto + comparative</b> — “the more …, the more …”.</p>' +
      '<p>Before a noun, comparatives and superlatives take normal adjective endings: <em>ein größer<b>es</b> Zimmer, mit dem best<b>en</b> Freund</em>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Важные формы', en: 'Key forms' },
      head: { ru: ['Положительная', 'Komparativ', 'Superlativ'], en: ['Base', 'Comparative', 'Superlative'] },
      deCols: [0, 1, 2],
      rows: [
        ['schnell', 'schneller', 'am schnellsten'],
        ['alt', 'älter', 'am ältesten'],
        ['groß', 'größer', 'am größten'],
        ['gut', 'besser', 'am besten'],
        ['viel', 'mehr', 'am meisten'],
        ['gern', 'lieber', 'am liebsten'],
        ['hoch', 'höher', 'am höchsten'],
        ['nah', 'näher', 'am nächsten']
      ]
    }
  ],
  examples: [
    { de: 'Die neue Wohnung ist [[größer als]] die alte.', ru: 'Новая квартира больше старой.', en: 'The new flat is bigger than the old one.' },
    { de: 'Mein Bruder ist [[genauso alt wie]] ich — wir sind Zwillinge.', ru: 'Брат такого же возраста, как я, — мы близнецы.', en: 'My brother is just as old as me — we’re twins.' },
    { de: 'Im Winter fahre ich [[lieber]] mit der Bahn.', ru: 'Зимой я предпочитаю ездить на поезде.', en: 'In winter I prefer to go by train.' },
    { de: 'Das ist das [[beste]] Restaurant der Stadt.', ru: 'Это лучший ресторан в городе.', en: 'This is the best restaurant in town.' },
    { de: '[[Je]] mehr ich übe, [[desto]] sicherer werde ich.', ru: 'Чем больше я тренируюсь, тем увереннее становлюсь.', en: 'The more I practise, the more confident I get.' },
    { de: 'Wir suchen eine [[günstigere]] Lösung.', ru: 'Мы ищем более дешёвое решение.', en: 'We’re looking for a cheaper solution.' }
  ],
  pitfalls: [
    {
      title: { ru: 'als ≠ wie', en: 'als ≠ wie' },
      html: {
        ru: 'После Komparativ — <span class="right">als</span>: <span class="right">besser als</span>, не <span class="wrong">besser wie</span> (так говорят в диалектах, но это ошибка в письме). <span class="right">wie</span> — только с равенством: <em>so gut wie</em>.',
        en: 'After a comparative use <span class="right">als</span>: <span class="right">besser als</span>, not <span class="wrong">besser wie</span> (heard in dialects, wrong in writing). <span class="right">wie</span> is for equality only: <em>so gut wie</em>.'
      }
    },
    {
      title: { ru: '«более» не переводится mehr', en: 'Don’t build it with mehr' },
      html: {
        ru: '«более интересный» = <span class="right">interessanter</span>, не <span class="wrong">mehr interessant</span>. Даже длинные прилагательные просто получают -er.',
        en: '“more interesting” = <span class="right">interessanter</span>, not <span class="wrong">mehr interessant</span>. Even long adjectives simply add -er.'
      }
    },
    {
      title: { ru: 'Superlativ: am или der?', en: 'Superlative: am or der?' },
      html: {
        ru: 'После глагола — <span class="right">Dieses Handy ist am teuersten</span>. Перед существительным — <span class="right">das teuerste Handy</span>. Нельзя <span class="wrong">das am teuersten Handy</span>.',
        en: 'After a verb: <span class="right">Dieses Handy ist am teuersten</span>. Before a noun: <span class="right">das teuerste Handy</span>. Never <span class="wrong">das am teuersten Handy</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-km-d1', kind: 'choice',
      q: 'Berlin ist größer ___ München.',
      options: ['als', 'wie', 'wenn'],
      answer: 0,
      explain: { ru: 'Komparativ + als.', en: 'Comparative + als.' }
    },
    {
      id: 'g-km-d2', kind: 'gap',
      q: 'Tee trinke ich gern, aber Kaffee trinke ich ___. (gern, Komparativ)',
      answer: 'lieber',
      explain: { ru: 'gern → lieber → am liebsten.', en: 'gern → lieber → am liebsten.' }
    },
    {
      id: 'g-km-d3', kind: 'gap',
      q: 'Im Juli ist es hier am ___. (warm)',
      answer: 'wärmsten',
      explain: { ru: 'warm получает умлаут: am wärmsten.', en: 'warm takes an umlaut: am wärmsten.' }
    },
    {
      id: 'g-km-d4', kind: 'choice',
      q: 'Mein Laptop ist genauso schnell ___ deiner.',
      options: ['als', 'wie', 'so'],
      answer: 1,
      explain: { ru: 'Равенство: genauso … wie.', en: 'Equality: genauso … wie.' }
    },
    {
      id: 'g-km-d5', kind: 'choice',
      q: 'Das war der ___ Tag meines Lebens.',
      options: ['schönste', 'am schönsten', 'schöner'],
      answer: 0,
      explain: { ru: 'Перед существительным: der schönste Tag.', en: 'Before a noun: der schönste Tag.' }
    },
    {
      id: 'g-km-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Чем раньше мы начнём, тем быстрее закончим».', en: 'Build the sentence. “The earlier we start, the sooner we finish.”' },
      tokens: ['Je', 'früher', 'wir', 'anfangen,', 'desto', 'schneller', 'sind', 'wir', 'fertig.'],
      answer: 'Je früher wir anfangen, desto schneller sind wir fertig.',
      explain: { ru: 'je-часть — придаточное (глагол в конце), после desto + Komparativ идёт глагол.', en: 'The je part is a subordinate clause (verb last); after desto + comparative comes the verb.' }
    }
  ]
});
