/* German GRAMMAR · C1 · Connectors for argument: zumal, wohingegen, insofern (als), geschweige denn, ungeachtet,
 * sei es … sei es, nichtsdestotrotz, demzufolge. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'konnektoren_c1',
  level: 'C1',
  title: { ru: 'Союзы C1: zumal, wohingegen, geschweige denn…', en: 'C1 connectors: zumal, wohingegen, geschweige denn…' },
  summary: {
    ru: 'Точные связки для аргументации и письма: добавочная причина, противопоставление, ограничение, усиление.',
    en: 'Precise links for argument and writing: extra reason, contrast, restriction, escalation.'
  },
  explanation: {
    ru: '<p>На C1 важно не только «что», но и <b>как</b> связаны мысли. Эти союзы и наречия делают текст плотным и точным. Обращайте внимание на <b>порядок слов</b>: союз придаточного → глагол в конце; наречие на 1-м месте → глагол сразу после него.</p>' +
      '<ul>' +
      '<li><b>zumal</b> (придаточное) — «тем более что», добавочная, усиливающая причина: <em>Ich bleibe zu Hause, <b>zumal</b> ich erkältet bin.</em></li>' +
      '<li><b>wohingegen</b> (придаточное) — «тогда как», противопоставление двух фактов: <em>Er liebt Jazz, <b>wohingegen</b> sie Klassik bevorzugt.</em></li>' +
      '<li><b>insofern (als)</b> / <b>insoweit</b> — «в той мере, в какой; поскольку»: <em>Das Projekt war erfolgreich, <b>insofern als</b> alle Ziele erreicht wurden.</em></li>' +
      '<li><b>geschweige denn</b> — «не говоря уже о», после отрицания: <em>Er kann kaum Englisch, <b>geschweige denn</b> Chinesisch.</em></li>' +
      '<li><b>ungeachtet</b> + Gen. / <b>ungeachtet dessen</b> — «несмотря на (это)», официально: <em><b>Ungeachtet</b> der Kritik hielt er an seinem Plan fest.</em></li>' +
      '<li><b>sei es …, sei es …</b> — «будь то… или…»: <em>Jede Hilfe ist willkommen, <b>sei es</b> Geld <b>oder</b> Zeit.</em></li>' +
      '<li>Наречия на 1-м месте: <b>nichtsdestotrotz</b> (тем не менее), <b>demzufolge / folglich</b> (следовательно), <b>hingegen</b> (напротив), <b>allerdings</b> (впрочем).</li>' +
      '</ul>',
    en: '<p>At C1 it matters not only what you say but <b>how</b> ideas are linked. These conjunctions and adverbs make writing dense and precise. Watch the <b>word order</b>: a subordinating conjunction sends the verb to the end; an adverb in position 1 is followed directly by the verb.</p>' +
      '<ul>' +
      '<li><b>zumal</b> (clause) — “especially since”, an extra, reinforcing reason: <em>Ich bleibe zu Hause, <b>zumal</b> ich erkältet bin.</em></li>' +
      '<li><b>wohingegen</b> (clause) — “whereas”: <em>Er liebt Jazz, <b>wohingegen</b> sie Klassik bevorzugt.</em></li>' +
      '<li><b>insofern (als)</b> / <b>insoweit</b> — “in that, insofar as”: <em>Das Projekt war erfolgreich, <b>insofern als</b> alle Ziele erreicht wurden.</em></li>' +
      '<li><b>geschweige denn</b> — “let alone”, after a negative: <em>Er kann kaum Englisch, <b>geschweige denn</b> Chinesisch.</em></li>' +
      '<li><b>ungeachtet</b> + Gen. / <b>ungeachtet dessen</b> — “regardless of / notwithstanding”, formal: <em><b>Ungeachtet</b> der Kritik hielt er an seinem Plan fest.</em></li>' +
      '<li><b>sei es …, sei es …</b> — “be it … or …”: <em>Jede Hilfe ist willkommen, <b>sei es</b> Geld <b>oder</b> Zeit.</em></li>' +
      '<li>Adverbs in position 1: <b>nichtsdestotrotz</b> (nevertheless), <b>demzufolge / folglich</b> (consequently), <b>hingegen</b> (on the other hand), <b>allerdings</b> (however, admittedly).</li>' +
      '</ul>'
  },
  tables: [
    {
      caption: { ru: 'Тип и порядок слов', en: 'Type and word order' },
      head: { ru: ['Слово', 'Значение', 'Порядок слов'], en: ['Word', 'Meaning', 'Word order'] },
      deCols: [0],
      rows: {
        ru: [
          ['zumal', 'тем более что', 'придаточное, глагол в конце'],
          ['wohingegen', 'тогда как', 'придаточное, глагол в конце'],
          ['insofern als', 'в той мере, как', 'придаточное, глагол в конце'],
          ['geschweige denn', 'не говоря уже о', 'после отрицания, часто без глагола'],
          ['ungeachtet', 'несмотря на', 'предлог + Genitiv'],
          ['nichtsdestotrotz', 'тем не менее', 'наречие: место 1, затем глагол'],
          ['demzufolge', 'следовательно', 'наречие: место 1, затем глагол']
        ],
        en: [
          ['zumal', 'especially since', 'clause, verb last'],
          ['wohingegen', 'whereas', 'clause, verb last'],
          ['insofern als', 'insofar as', 'clause, verb last'],
          ['geschweige denn', 'let alone', 'after a negative, often no verb'],
          ['ungeachtet', 'regardless of', 'preposition + Genitiv'],
          ['nichtsdestotrotz', 'nevertheless', 'adverb: position 1, then verb'],
          ['demzufolge', 'consequently', 'adverb: position 1, then verb']
        ]
      }
    }
  ],
  examples: [
    { de: 'Wir sollten das Angebot annehmen, [[zumal]] der Preis sehr fair ist.', ru: 'Нам стоит принять предложение, тем более что цена очень честная.', en: 'We should accept the offer, especially since the price is very fair.' },
    { de: 'Im Norden regnet es oft, [[wohingegen]] der Süden mehr Sonne hat.', ru: 'На севере часто идут дожди, тогда как на юге больше солнца.', en: 'It often rains in the north, whereas the south gets more sun.' },
    { de: 'Ich habe keine Zeit für einen Kaffee, [[geschweige denn]] für ein Abendessen.', ru: 'У меня нет времени даже на кофе, не говоря уже об ужине.', en: 'I don’t have time for a coffee, let alone dinner.' },
    { de: 'Die Zahlen sind schlecht. [[Nichtsdestotrotz]] bleibt das Team optimistisch.', ru: 'Цифры плохие. Тем не менее команда сохраняет оптимизм.', en: 'The figures are bad. Nevertheless, the team remains optimistic.' },
    { de: 'Der Umsatz ist gesunken. [[Demzufolge]] werden Stellen gestrichen.', ru: 'Выручка упала. Следовательно, сокращают рабочие места.', en: 'Revenue has fallen. Consequently, jobs are being cut.' }
  ],
  pitfalls: [
    {
      title: { ru: 'geschweige denn — только после отрицания', en: 'geschweige denn needs a negative' },
      html: {
        ru: '<span class="wrong">Er spricht gut Deutsch, geschweige denn Englisch.</span> Нужен отрицательный или ограничительный контекст: <span class="right">Er spricht kaum Deutsch, geschweige denn …</span>',
        en: '<span class="wrong">Er spricht gut Deutsch, geschweige denn Englisch.</span> It needs a negative or restrictive context: <span class="right">Er spricht kaum Deutsch, geschweige denn …</span>'
      }
    },
    {
      title: { ru: 'Наречие ≠ союз', en: 'Adverb ≠ conjunction' },
      html: {
        ru: '<span class="wrong">Nichtsdestotrotz er bleibt optimistisch.</span> → <span class="right">Nichtsdestotrotz bleibt er optimistisch.</span> Наречие занимает 1-е место, глагол — второе.',
        en: '<span class="wrong">Nichtsdestotrotz er bleibt optimistisch.</span> → <span class="right">Nichtsdestotrotz bleibt er optimistisch.</span> The adverb takes position 1, the verb position 2.'
      }
    }
  ],
  drills: [
    {
      id: 'g-kc-d1', kind: 'choice',
      q: 'Ich nehme das Taxi, ___ es schon spät ist und es regnet.',
      options: ['zumal', 'wohingegen', 'geschweige denn'],
      answer: 0,
      explain: { ru: 'Дополнительная причина → zumal.', en: 'An extra reason → zumal.' }
    },
    {
      id: 'g-kc-d2', kind: 'choice',
      q: 'Mein Bruder isst gern Fleisch, ___ ich Vegetarier bin.',
      options: ['wohingegen', 'zumal', 'insofern'],
      answer: 0,
      explain: { ru: 'Противопоставление двух фактов → wohingegen.', en: 'Contrast of two facts → wohingegen.' }
    },
    {
      id: 'g-kc-d3', kind: 'choice',
      q: 'Sie hat noch nie einen Kuchen gebacken, ___ eine Hochzeitstorte.',
      options: ['geschweige denn', 'zumal', 'sei es'],
      answer: 0,
      explain: { ru: '«не говоря уже о» после отрицания → geschweige denn.', en: '“let alone” after a negative → geschweige denn.' }
    },
    {
      id: 'g-kc-d4', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Тем не менее проект продолжится».', en: 'Build the sentence. “Nevertheless, the project will continue.”' },
      tokens: ['Nichtsdestotrotz', 'wird', 'das Projekt', 'fortgesetzt.'],
      answer: 'Nichtsdestotrotz wird das Projekt fortgesetzt.',
      explain: { ru: 'Наречие на 1-м месте → глагол wird на 2-м.', en: 'Adverb in position 1 → wird in position 2.' }
    },
    {
      id: 'g-kc-d5', kind: 'gap',
      q: { ru: '___ der hohen Kosten wurde das Stadion gebaut. (несмотря на, формально)', en: '___ der hohen Kosten wurde das Stadion gebaut. (regardless of, formal)' },
      answer: 'Ungeachtet',
      explain: { ru: 'ungeachtet + Genitiv.', en: 'ungeachtet + Genitiv.' }
    }
  ]
});
