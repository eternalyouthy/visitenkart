/* German GRAMMAR · Relativsätze: relative pronouns (der/die/das/den/dem/dessen/deren) and verb-final order.
 * Explanations ru + en inline, original examples, 8 drills. */
GT.registerGrammar({
  id: 'relativsaetze',
  title: { ru: 'Придаточные определительные · Relativsätze', en: 'Relative clauses · Relativsätze' },
  summary: {
    ru: '«Который» в немецком — это дер/ди/дас по роду и числу главного слова и по падежу внутри придаточного. Глагол уходит в конец.',
    en: 'Relative pronouns match the noun’s gender/number and take their case from the relative clause. The verb goes to the end.'
  },
  explanation: {
    ru: '<p><b>Определительное придаточное</b> отвечает на вопрос «какой? который?» и всегда выделяется запятыми: <em>Das ist der Kollege, <b>der</b> mir geholfen hat.</em> Спрягаемый глагол уходит в <b>конец</b> придаточного.</p>' +
      '<p><b>Как выбрать форму (два шага):</b><br>' +
      '1. <b>Род и число</b> берём от слова, которое описываем (<em>der Kollege</em> → м. р. ед. ч.; <em>die Kollegen</em> → мн. ч.).<br>' +
      '2. <b>Падеж</b> зависит от роли внутри самого придаточного (кто делает действие? кому? с каким предлогом?).</p>' +
      '<p><b>Отличие от обычного артикля</b> только в двух строчках: <b>Dativ мн. ч. = denen</b> (вместо <em>den</em>) и весь <b>Genitiv = dessen / deren</b> («чей, которого, которой»): <em>die Kollegin, <b>deren</b> Laptop kaputt ist</em>; <em>der Mann, mit <b>dem</b> ich spreche</em>.</p>' +
      '<p><b>Предлог всегда стоит перед относительным местоимением:</b> <em>Das ist das Projekt, <b>an dem</b> wir arbeiten</em> (не «das Projekt, dem wir arbeiten an» — в конец, как в английском, предлог не уходит).</p>' +
      '<p><b>was вместо das:</b> после слов <em>alles, etwas, nichts, viel, das</em> и после целого предложения ставится <b>was</b>: <em>Alles, <b>was</b> du sagst, stimmt.</em></p>',
    en: '<p>A <b>relative clause</b> describes a noun, is always set off by commas, and sends the conjugated verb to the <b>end</b>: <em>Das ist der Kollege, <b>der</b> mir geholfen hat.</em></p>' +
      '<p><b>Two steps to pick the right pronoun:</b><br>' +
      '1. Take <b>gender and number</b> from the noun it refers to (<em>der Kollege</em> → masc. sg.; <em>die Kollegen</em> → plural).<br>' +
      '2. Take the <b>case</b> from the role of the pronoun inside the relative clause itself.</p>' +
      '<p>The forms look like the definite article, except for <b>Dativ plural = denen</b> and the entire <b>Genitiv = dessen / deren</b> (“whose”): <em>die Kollegin, <b>deren</b> Laptop kaputt ist</em>.</p>' +
      '<p><b>Prepositions always go directly before the relative pronoun</b> (never stranded at the end as in English): <em>das Projekt, <b>an dem</b> wir arbeiten</em>.</p>' +
      '<p>After <em>alles, etwas, nichts, viel</em> or a whole clause, use <b>was</b>: <em>Alles, <b>was</b> du sagst, stimmt.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Относительные местоимения', en: 'Relative pronouns' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч.'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'] },
      deCols: [1, 2, 3, 4],
      rows: {
        ru: [
          ['Nominativ (кто/что)', 'der', 'die', 'das', 'die'],
          ['Akkusativ (кого/что)', 'den', 'die', 'das', 'die'],
          ['Dativ (кому/с кем)', 'dem', 'der', 'dem', 'denen'],
          ['Genitiv (чей)', 'dessen', 'deren', 'dessen', 'deren']
        ],
        en: [
          ['Nominativ', 'der', 'die', 'das', 'die'],
          ['Akkusativ', 'den', 'die', 'das', 'die'],
          ['Dativ', 'dem', 'der', 'dem', 'denen'],
          ['Genitiv', 'dessen', 'deren', 'dessen', 'deren']
        ]
      }
    }
  ],
  examples: [
    { de: 'Der Zug, [[der]] um 8:15 Uhr fährt, hat heute Verspätung.', ru: 'Поезд, который отправляется в 8:15, сегодня опаздывает.', en: 'The train that leaves at 8:15 is delayed today.' },
    { de: 'Das ist der Kollege, [[den]] wir gestern kennengelernt haben.', ru: 'Это коллега, с которым мы вчера познакомились.', en: 'That’s the colleague whom we met yesterday.' },
    { de: 'Die Firma, [[bei der]] ich arbeite, sucht Entwickler.', ru: 'Фирма, в которой я работаю, ищет разработчиков.', en: 'The company I work at is looking for developers.' },
    { de: 'Die Leute, mit [[denen]] ich zusammenarbeite, sind sehr nett.', ru: 'Люди, с которыми я работаю вместе, очень приятные.', en: 'The people I work with are very nice.' },
    { de: 'Das ist mein Nachbar, [[dessen]] Hund immer bellt.', ru: 'Это мой сосед, чья собака всё время лает.', en: 'That’s my neighbour whose dog always barks.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Dativ мн. ч. — denen, а не den', en: 'Dativ plural is denen, not den' },
      html: {
        ru: 'Обычный артикль — <em>mit den Kollegen</em>, но относительное местоимение — <span class="right">die Kollegen, mit denen ich arbeite</span> (не <span class="wrong">mit den</span>).',
        en: 'The ordinary article is <em>mit den Kollegen</em>, but the relative pronoun is <span class="right">die Kollegen, mit denen ich arbeite</span> (not <span class="wrong">mit den</span>).'
      }
    },
    {
      title: { ru: 'Род dessen / deren зависит от владельца, не от вещи', en: 'dessen / deren agrees with the owner, not the noun after it' },
      html: {
        ru: '<em>die Kollegin (ж. р.), <b>deren</b> Computer (м. р.)</em> — выбираем <em>deren</em> по слову <em>Kollegin</em>, а не по слову <em>Computer</em>.',
        en: '<em>die Kollegin (fem.), <b>deren</b> Computer (masc.)</em> — pick <em>deren</em> for <em>Kollegin</em>, not for <em>Computer</em>.'
      }
    },
    {
      title: { ru: 'Нельзя пропускать местоимение и уносить предлог в конец', en: 'Don’t omit the pronoun or strand the preposition' },
      html: {
        ru: 'По-английски можно «the book I bought» и «the team I work with». По-немецки местоимение обязательно, а предлог идёт перед ним: <span class="right">das Buch, das ich gekauft habe</span>; <span class="right">das Team, mit dem ich arbeite</span>.',
        en: 'Unlike English (“the book I bought”, “the team I work with”), German never drops the pronoun and puts the preposition first: <span class="right">das Buch, das ich gekauft habe</span>; <span class="right">das Team, mit dem ich arbeite</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-rel-d1', kind: 'choice',
      q: 'Das ist die Datei, ___ ich dir geschickt habe.',
      options: ['der', 'die', 'das'],
      answer: 1,
      explain: { ru: 'die Datei (ж. р.) — в придаточном Akkusativ (schicken + Akk.) → die.', en: 'die Datei (fem.) — Akkusativ in the clause → die.' }
    },
    {
      id: 'g-rel-d2', kind: 'choice',
      q: 'Der Film, ___ wir gestern gesehen haben, war spannend.',
      options: ['der', 'den', 'dem'],
      answer: 1,
      explain: { ru: 'der Film (м. р.), внутри придаточного «мы видели (кого? что?) фильм» → Akkusativ → den.', en: 'der Film (masc.), object of gesehen → Akkusativ → den.' }
    },
    {
      id: 'g-rel-d3', kind: 'choice',
      q: 'Das sind die Freunde, mit ___ ich in den Urlaub fahre.',
      options: ['den', 'die', 'denen'],
      answer: 2,
      explain: { ru: 'die Freunde (мн. ч.) + предлог mit (Dativ) → Dativ мн. ч. = denen.', en: 'die Freunde (plural) + mit (Dativ) → Dativ plural = denen.' }
    },
    {
      id: 'g-rel-d4', kind: 'choice',
      q: 'Die Nachbarin, ___ Fahrrad im Flur steht, ist im Urlaub.',
      options: ['dessen', 'deren', 'der'],
      answer: 1,
      explain: { ru: 'Владелец — die Nachbarin (ж. р.) → Genitiv ж. р. = deren.', en: 'Owner is die Nachbarin (fem.) → Genitiv fem. = deren.' }
    },
    {
      id: 'g-rel-d5', kind: 'choice',
      q: 'Alles, ___ auf dem Zettel steht, ist wichtig.',
      options: ['das', 'was', 'welches'],
      answer: 1,
      explain: { ru: 'После alles, etwas, nichts всегда ставится was.', en: 'After alles, etwas, nichts, always use was.' }
    },
    {
      id: 'g-rel-d6', kind: 'gap',
      q: 'Das Büro, in ___ ich arbeite, liegt im Zentrum. (das Büro)',
      hint: { ru: 'wo? → Dativ от das', en: 'wo? → Dativ of das' },
      answer: 'dem',
      explain: { ru: 'das Büro (ср. р.), в придаточном положение (wo?) → in + Dativ → dem.', en: 'das Büro (neuter), location (wo?) → in + Dativ → dem.' }
    },
    {
      id: 'g-rel-d7', kind: 'gap',
      q: 'Kennst du den Mann, ___ Auto vor der Tür parkt? (der Mann)',
      hint: { ru: 'Чья машина? Genitiv м. р.', en: 'Whose car? Genitiv masc.' },
      answer: 'dessen',
      explain: { ru: 'Владелец — der Mann (м. р.) → Genitiv м. р. = dessen.', en: 'Owner is der Mann (masc.) → Genitiv masc. = dessen.' }
    },
    {
      id: 'g-rel-d8', kind: 'reorder',
      q: { ru: 'Соберите предложение. «Вот коллега, с которой я вчера говорил».', en: 'Build the sentence. “Here is the colleague I spoke with yesterday.”' },
      tokens: ['Hier ist die Kollegin,', 'mit der', 'ich', 'gestern', 'gesprochen habe.'],
      answer: 'Hier ist die Kollegin, mit der ich gestern gesprochen habe.',
      explain: { ru: 'Предлог mit перед местоимением der (Dativ ж. р.), вспомогательный глагол habe — самый последний.', en: 'Preposition mit goes before der (Dativ fem.), and the conjugated verb habe goes last.' }
    }
  ]
});
