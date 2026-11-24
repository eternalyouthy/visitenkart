/* German GRAMMAR · B2 · Konjunktiv I and reported speech (indirekte Rede). Explanations ru + en inline. */
GT.registerGrammar({
  id: 'konjunktiv1',
  level: 'B2',
  title: { ru: 'Konjunktiv I и косвенная речь', en: 'Konjunktiv I and reported speech' },
  summary: {
    ru: 'Er sagt, er habe keine Zeit. Как газеты и официальные тексты передают чужие слова, не беря за них ответственность.',
    en: 'Er sagt, er habe keine Zeit. How news and official texts report other people’s words without vouching for them.'
  },
  explanation: {
    ru: '<p><b>Konjunktiv I</b> — форма косвенной речи. Он сигнализирует: «это сказал кто-то другой, я лишь передаю». Типичен для новостей, протоколов, научных и деловых текстов. В разговоре вместо него обычно используют индикатив или Konjunktiv II.</p>' +
      '<p><b>Образование:</b> основа инфинитива + <b>-e</b>: <em>er komm<b>e</b>, sie hab<b>e</b>, er könn<b>e</b>, man müss<b>e</b></em>. Практически нужен только <b>3-е лицо ед. ч.</b> и <b>sein</b> во всех лицах: <em>ich sei, er sei, wir seien, sie seien</em>.</p>' +
      '<ul>' +
      '<li><b>Прошлое:</b> habe / sei + Partizip II: <em>Er sagt, er <b>habe</b> die Mail nicht <b>bekommen</b>.</em></li>' +
      '<li><b>Будущее:</b> werde + инфинитив: <em>Sie sagt, sie <b>werde</b> morgen <b>anrufen</b>.</em></li>' +
      '<li><b>Замена:</b> если форма Konjunktiv I совпадает с индикативом (<em>sie haben → sie haben</em>), берут Konjunktiv II: <em>Sie sagen, sie <b>hätten</b> keine Zeit.</em></li>' +
      '</ul>' +
      '<p>Местоимения и указания времени сдвигаются, как в русском: <em>«Ich komme morgen» → Er sagte, <b>er</b> komme <b>am nächsten Tag</b>.</em> Вопросы — через <em>ob</em> / W-слово, просьбы — через <em>sollen / mögen</em>.</p>',
    en: '<p><b>Konjunktiv I</b> is the reported-speech form. It signals “someone else said this; I’m only passing it on”. It is typical of news, minutes, academic and business writing. In conversation people usually use the indicative or Konjunktiv II instead.</p>' +
      '<p><b>Formation:</b> infinitive stem + <b>-e</b>: <em>er komm<b>e</b>, sie hab<b>e</b>, er könn<b>e</b>, man müss<b>e</b></em>. In practice you need only the <b>3rd person singular</b> and <b>sein</b> in all persons: <em>ich sei, er sei, wir seien, sie seien</em>.</p>' +
      '<ul>' +
      '<li><b>Past:</b> habe / sei + Partizip II: <em>Er sagt, er <b>habe</b> die Mail nicht <b>bekommen</b>.</em></li>' +
      '<li><b>Future:</b> werde + infinitive: <em>Sie sagt, sie <b>werde</b> morgen <b>anrufen</b>.</em></li>' +
      '<li><b>Substitution:</b> when the Konjunktiv I form looks like the indicative (<em>sie haben → sie haben</em>), use Konjunktiv II: <em>Sie sagen, sie <b>hätten</b> keine Zeit.</em></li>' +
      '</ul>' +
      '<p>Pronouns and time words shift as in English: <em>“Ich komme morgen” → Er sagte, <b>er</b> komme <b>am nächsten Tag</b>.</em> Questions use <em>ob</em> / a W-word, requests use <em>sollen / mögen</em>. Unlike English, there is no tense backshift.</p>'
  },
  tables: [
    {
      caption: { ru: 'Формы Konjunktiv I', en: 'Konjunktiv I forms' },
      head: { ru: ['', 'sein', 'haben', 'werden', 'können', 'kommen'], en: ['', 'sein', 'haben', 'werden', 'können', 'kommen'] },
      deCols: [1, 2, 3, 4, 5],
      rows: [
        ['ich', 'sei', '(hätte)', '(würde)', 'könne', '(käme)'],
        ['du', 'sei(e)st', 'habest', 'werdest', 'könnest', 'kommest'],
        ['er / sie / es', 'sei', 'habe', 'werde', 'könne', 'komme'],
        ['wir', 'seien', '(hätten)', '(würden)', '(könnten)', '(kämen)'],
        ['sie / Sie', 'seien', '(hätten)', '(würden)', '(könnten)', '(kämen)']
      ]
    }
  ],
  examples: [
    { de: 'Der Minister sagte, die Lage [[sei]] unter Kontrolle.', ru: 'Министр сказал, что ситуация под контролем.', en: 'The minister said the situation was under control.' },
    { de: 'Laut Polizei [[sei]] der Fahrer zu schnell [[gefahren]].', ru: 'По данным полиции, водитель ехал слишком быстро.', en: 'According to the police, the driver was going too fast.' },
    { de: 'Die Firma teilt mit, das Update [[werde]] nächste Woche [[veröffentlicht]].', ru: 'Компания сообщает, что обновление выйдет на следующей неделе.', en: 'The company says the update will be released next week.' },
    { de: 'Die Kunden behaupten, sie [[hätten]] keine Rechnung bekommen.', ru: 'Клиенты утверждают, что не получали счёта.', en: 'The customers claim they did not receive an invoice.' },
    { de: 'Sie fragte, ob ich morgen Zeit [[hätte]].', ru: 'Она спросила, есть ли у меня завтра время.', en: 'She asked whether I had time tomorrow.' },
    { de: 'Er bat mich, ich [[solle]] ihn zurückrufen.', ru: 'Он попросил меня перезвонить ему.', en: 'He asked me to call him back.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Konjunktiv I ≠ сомнение', en: 'Konjunktiv I is not doubt' },
      html: {
        ru: 'Konjunktiv I нейтрален: он лишь показывает, что слова чужие. Сомнение выражает скорее Konjunktiv II или <em>angeblich / soll</em>: <span class="right">Er soll das gesagt haben</span> — «говорят, он это сказал».',
        en: 'Konjunktiv I is neutral: it only marks the words as someone else’s. Doubt is expressed by Konjunktiv II or <em>angeblich / soll</em>: <span class="right">Er soll das gesagt haben</span> — “he is said to have said that”.'
      }
    },
    {
      title: { ru: 'Без сдвига времени', en: 'No tense backshift' },
      html: {
        ru: 'В отличие от английского, время в косвенной речи не «сдвигается». Настоящее остаётся настоящим: «Ich bin müde» → <span class="right">Er sagte, er sei müde</span>, а не <span class="wrong">er sei müde gewesen</span> (это значило бы «был усталым раньше»).',
        en: 'Unlike English, German does not backshift. Present stays present: “Ich bin müde” → <span class="right">Er sagte, er sei müde</span>, not <span class="wrong">er sei müde gewesen</span> (that would mean he had been tired earlier).'
      }
    },
    {
      title: { ru: 'Прошлое — только habe/sei + Partizip', en: 'Past = habe/sei + participle only' },
      html: {
        ru: 'Особой формы Präteritum в Konjunktiv I нет. «Он сказал, что работал» → <span class="right">er habe gearbeitet</span>, не <span class="wrong">er arbeite</span>.',
        en: 'There is no separate Präteritum in Konjunktiv I. “He said he had worked” → <span class="right">er habe gearbeitet</span>, not <span class="wrong">er arbeite</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-k1-d1', kind: 'choice',
      q: 'Die Sprecherin sagte, das Unternehmen ___ keine Probleme.',
      options: ['habe', 'hat', 'hätte gehabt'],
      answer: 0,
      explain: { ru: '3-е лицо ед. ч. → Konjunktiv I habe.', en: '3rd person singular → Konjunktiv I habe.' }
    },
    {
      id: 'g-k1-d2', kind: 'gap',
      q: 'Er behauptet, er ___ krank gewesen. (sein, Konjunktiv I)',
      answer: 'sei',
      explain: { ru: 'Прошлое: sei + gewesen.', en: 'Past: sei + gewesen.' }
    },
    {
      id: 'g-k1-d3', kind: 'choice',
      q: 'Die Mitarbeiter sagen, sie ___ zu viele Überstunden.',
      options: ['haben', 'hätten', 'habe'],
      answer: 1,
      explain: { ru: 'sie haben = индикатив → замена на Konjunktiv II hätten.', en: 'sie haben looks like the indicative → use Konjunktiv II hätten.' }
    },
    {
      id: 'g-k1-d4', kind: 'gap',
      q: 'Laut Bericht ___ die Preise nächstes Jahr steigen. (werden, 3. Pl. → Ersatz)',
      answer: 'würden',
      explain: { ru: 'sie werden совпадает с индикативом → würden.', en: 'sie werden matches the indicative → würden.' }
    },
    {
      id: 'g-k1-d5', kind: 'choice',
      q: '„Rufen Sie mich bitte an!“ → Sie bat mich, ich ___ sie anrufen.',
      options: ['solle', 'werde', 'sei'],
      answer: 0,
      explain: { ru: 'Просьба в косвенной речи → sollen (Konjunktiv I solle).', en: 'A request in reported speech → sollen (Konjunktiv I solle).' }
    },
    {
      id: 'g-k1-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Он сказал, что не получил письмо».', en: 'Build the sentence. “He said he hadn’t received the email.”' },
      tokens: ['Er', 'sagte,', 'er', 'habe', 'die', 'Mail', 'nicht', 'bekommen.'],
      answer: 'Er sagte, er habe die Mail nicht bekommen.',
      explain: { ru: 'Косвенная речь без dass: порядок главного предложения, habe на 2-м месте.', en: 'Reported speech without dass keeps main-clause order: habe in position 2.' }
    }
  ]
});
