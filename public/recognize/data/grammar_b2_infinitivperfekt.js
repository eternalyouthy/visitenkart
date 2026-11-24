/* German GRAMMAR · B2 · Past infinitive: froh, dich getroffen zu haben; es tut mir leid, zu spät gekommen zu sein.
 * Includes the nachdem trap (no infinitive clause after nachdem). Explanations ru + en inline. */
GT.registerGrammar({
  id: 'infinitiv_perfekt',
  level: 'B2',
  title: { ru: 'Инфинитив прошедшего времени · getan zu haben', en: 'Past infinitive · getan zu haben' },
  summary: {
    ru: 'Ich bin froh, dich getroffen zu haben: действие в инфинитиве случилось раньше. И почему «nachdem … gegessen zu haben» — ошибка.',
    en: 'Ich bin froh, dich getroffen zu haben: the infinitive action happened earlier. And why “nachdem … gegessen zu haben” is wrong.'
  },
  explanation: {
    ru: '<p>Обычный инфинитив с zu (<a href="#/grammar/infinitiv">zu-infinitive</a>) описывает действие <b>одновременное</b> с главным или будущее: <em>Ich freue mich, dich <b>zu sehen</b></em> — рад тебя видеть (сейчас).</p>' +
      '<p>Если действие <b>уже произошло</b> до момента главного глагола, нужен <b>инфинитив прошедшего времени</b>: <b>Partizip II + zu + haben / sein</b>. Выбор haben / sein — как в Perfekt:</p>' +
      '<ul>' +
      '<li><em>Ich bin froh, dich <b>getroffen zu haben</b>.</em> — Рад, что встретил тебя.</li>' +
      '<li><em>Es tut mir leid, zu spät <b>gekommen zu sein</b>.</em> — Извините, что опоздал.</li>' +
      '<li><em>Er behauptet, die Mail nie <b>bekommen zu haben</b>.</em> — Он утверждает, что не получал письмо.</li>' +
      '</ul>' +
      '<p>Порядок в конце всегда: <b>Partizip II → zu → haben/sein</b>. Подлежащее у обоих глаголов одно и то же (как при обычном zu-инфинитиве), иначе нужно <em>dass</em>: <em>Ich bin froh, dass <b>du</b> gekommen bist.</em></p>' +
      '<p>Типичные «пусковые» слова: <em>froh / stolz sein, sich freuen, es tut mir leid, sich erinnern, behaupten, zugeben, bereuen, sich schämen</em>.</p>' +
      '<p><b>Главная ловушка — nachdem.</b> Русское деепричастие «пообедав» тянет к конструкции <span class="wrong">Nachdem gegessen zu haben, …</span>. Её в немецком нет: <em>nachdem</em> — союз, после него только полное придаточное. Правильно: <em><b>Nachdem</b> wir <b>gegessen hatten</b>, …</em> или проще: <em><b>Nach dem Essen</b> …</em> С <em>ohne</em> и <em>statt</em> инфинитив прошедшего времени возможен: <em>Er ging, ohne bezahlt zu haben.</em></p>',
    en: '<p>The ordinary zu-infinitive (<a href="#/grammar/infinitiv">zu-infinitive</a>) describes an action <b>at the same time</b> as the main verb or later: <em>Ich freue mich, dich <b>zu sehen</b></em> — glad to see you (now).</p>' +
      '<p>If the action <b>happened before</b> the main verb, use the <b>past infinitive</b>: <b>Partizip II + zu + haben / sein</b>, with haben / sein chosen as in the Perfekt. English has the same structure (“to have met”):</p>' +
      '<ul>' +
      '<li><em>Ich bin froh, dich <b>getroffen zu haben</b>.</em> — I’m glad to have met you.</li>' +
      '<li><em>Es tut mir leid, zu spät <b>gekommen zu sein</b>.</em> — I’m sorry to have come late.</li>' +
      '<li><em>Er behauptet, die Mail nie <b>bekommen zu haben</b>.</em> — He claims never to have received the email.</li>' +
      '</ul>' +
      '<p>The word order at the end is always <b>Partizip II → zu → haben/sein</b> — the reverse of English “to have met”. Both verbs must share the same subject; otherwise use <em>dass</em>: <em>Ich bin froh, dass <b>du</b> gekommen bist.</em></p>' +
      '<p>Typical triggers: <em>froh / stolz sein, sich freuen, es tut mir leid, sich erinnern, behaupten, zugeben, bereuen, sich schämen</em>.</p>' +
      '<p><b>The big trap — nachdem.</b> English “after having eaten” suggests <span class="wrong">Nachdem gegessen zu haben, …</span>. German has no such structure: <em>nachdem</em> is a conjunction and needs a full clause. Say <em><b>Nachdem</b> wir <b>gegessen hatten</b>, …</em> or simply <em><b>Nach dem Essen</b> …</em> With <em>ohne</em> and <em>statt</em> the past infinitive is fine: <em>Er ging, ohne bezahlt zu haben.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Одновременно или раньше?', en: 'Same time or earlier?' },
      head: { ru: ['Время действия', 'Форма', 'Пример'], en: ['Timing', 'Form', 'Example'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['одновременно / позже', 'zu + Infinitiv', 'Ich freue mich, dich zu sehen.'],
          ['раньше (haben)', 'Partizip II + zu haben', 'Ich freue mich, dich gesehen zu haben.'],
          ['раньше (sein)', 'Partizip II + zu sein', 'Ich bin froh, hier gewesen zu sein.'],
          ['«после того как» — не инфинитив!', 'nachdem + Plusquamperfekt', 'Nachdem wir gegessen hatten, gingen wir spazieren.'],
          ['короче', 'nach + Nomen', 'Nach dem Essen gingen wir spazieren.']
        ],
        en: [
          ['same time / later', 'zu + infinitive', 'Ich freue mich, dich zu sehen.'],
          ['earlier (haben)', 'Partizip II + zu haben', 'Ich freue mich, dich gesehen zu haben.'],
          ['earlier (sein)', 'Partizip II + zu sein', 'Ich bin froh, hier gewesen zu sein.'],
          ['“after having …” — no infinitive!', 'nachdem + Plusquamperfekt', 'Nachdem wir gegessen hatten, gingen wir spazieren.'],
          ['shorter', 'nach + noun', 'Nach dem Essen gingen wir spazieren.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Ich bin wirklich froh, dich endlich [[kennengelernt zu haben]].', ru: 'Я очень рад, что наконец познакомился с тобой.', en: 'I’m really glad to have finally met you.' },
    { de: 'Es tut mir leid, so spät [[angerufen zu haben]].', ru: 'Простите, что позвонил так поздно.', en: 'I’m sorry to have called so late.' },
    { de: 'Er gibt zu, einen Fehler [[gemacht zu haben]].', ru: 'Он признаёт, что совершил ошибку.', en: 'He admits to having made a mistake.' },
    { de: 'Ich kann mich nicht erinnern, schon einmal hier [[gewesen zu sein]].', ru: 'Не помню, чтобы я уже здесь бывал.', en: 'I can’t remember having been here before.' },
    { de: '[[Nach dem Essen]] haben wir einen Spaziergang gemacht.', ru: 'Пообедав, мы пошли гулять.', en: 'After eating, we went for a walk.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Не «nachdem … zu haben»', en: 'No “nachdem … zu haben”' },
      html: {
        ru: 'Деепричастие «сделав» нельзя перевести через nachdem + инфинитив: <span class="wrong">Nachdem die Rechnung bezahlt zu haben, ging er.</span> → <span class="right">Nachdem er die Rechnung bezahlt hatte, ging er.</span> или <span class="right">Nach dem Bezahlen ging er.</span>',
        en: '“After having paid” is not <span class="wrong">Nachdem die Rechnung bezahlt zu haben, …</span>. Use a clause: <span class="right">Nachdem er die Rechnung bezahlt hatte, ging er.</span> or a noun: <span class="right">Nach dem Bezahlen ging er.</span>'
      }
    },
    {
      title: { ru: 'haben или sein — как в Perfekt', en: 'haben or sein — as in the Perfekt' },
      html: {
        ru: '<span class="wrong">zu spät gekommen zu haben</span> → <span class="right">zu spät gekommen zu sein</span> (ich bin gekommen). <span class="wrong">dort gewesen zu haben</span> → <span class="right">dort gewesen zu sein</span>.',
        en: 'English always says “to have”: “to have come”, “to have been”. German follows the Perfekt: <span class="wrong">gekommen zu haben</span> → <span class="right">gekommen zu sein</span>; <span class="wrong">gewesen zu haben</span> → <span class="right">gewesen zu sein</span>.'
      }
    },
    {
      title: { ru: 'Порядок: Partizip II → zu → haben', en: 'Order: Partizip II → zu → haben' },
      html: {
        ru: '<span class="wrong">zu haben getroffen</span>, <span class="wrong">haben zu getroffen</span> → <span class="right">getroffen zu haben</span>. zu всегда перед вспомогательным глаголом.',
        en: 'English “to have met” runs the other way. German: <span class="wrong">zu haben getroffen</span> → <span class="right">getroffen zu haben</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-pinf-d1', kind: 'choice',
      q: 'Ich bin froh, dich endlich ___.',
      options: ['kennengelernt zu haben', 'zu haben kennengelernt', 'kennenzulernen haben'],
      answer: 0,
      explain: { ru: 'Partizip II + zu + haben, именно в этом порядке.', en: 'Partizip II + zu + haben, in exactly this order.' }
    },
    {
      id: 'g-pinf-d2', kind: 'choice',
      q: 'Entschuldigung, es tut mir leid, zu spät ___.',
      options: ['gekommen zu sein', 'gekommen zu haben', 'zu kommen sein'],
      answer: 0,
      explain: { ru: 'kommen → Perfekt с sein: ich bin gekommen → gekommen zu sein.', en: 'kommen takes sein in the Perfekt → gekommen zu sein.' }
    },
    {
      id: 'g-pinf-d3', kind: 'gap',
      q: 'Er behauptet, die E-Mail nie ___ zu haben. (lesen)',
      answer: 'gelesen',
      explain: { ru: 'Partizip II от lesen — gelesen.', en: 'The Partizip II of lesen is gelesen.' }
    },
    {
      id: 'g-pinf-d4', kind: 'choice',
      q: 'Sie ist stolz darauf, die Prüfung beim ersten Versuch ___.',
      options: ['bestanden zu haben', 'bestanden zu sein', 'zu bestehen haben'],
      answer: 0,
      explain: { ru: 'bestehen — Perfekt с haben → bestanden zu haben.', en: 'bestehen takes haben → bestanden zu haben.' }
    },
    {
      id: 'g-pinf-d5', kind: 'choice',
      q: 'Ich kann mich nicht erinnern, schon einmal hier ___.',
      options: ['gewesen zu sein', 'gewesen zu haben', 'zu sein gewesen'],
      answer: 0,
      explain: { ru: 'sein → ich bin gewesen → gewesen zu sein.', en: 'sein → ich bin gewesen → gewesen zu sein.' }
    },
    {
      id: 'g-pinf-d6', kind: 'choice',
      q: { ru: 'Выберите правильное предложение. «Пообедав, мы пошли гулять».', en: 'Choose the correct sentence. “After eating, we went for a walk.”' },
      options: ['Nach dem Essen sind wir spazieren gegangen.', 'Nachdem gegessen zu haben, sind wir spazieren gegangen.', 'Nach gegessen zu haben, sind wir spazieren gegangen.'],
      answer: 0,
      explain: { ru: 'После nachdem / nach инфинитивного оборота не бывает. nach + существительное — правильно.', en: 'German has no infinitive clause with nachdem / nach. nach + noun is correct.' }
    },
    {
      id: 'g-pinf-d7', kind: 'choice',
      q: 'Nachdem wir ___, sind wir spazieren gegangen.',
      options: ['gegessen hatten', 'gegessen zu haben', 'zu essen'],
      answer: 0,
      explain: { ru: 'nachdem — союз: полное придаточное с подлежащим, Plusquamperfekt.', en: 'nachdem is a conjunction: a full clause with a subject, Plusquamperfekt.' }
    },
    {
      id: 'g-pinf-d8', kind: 'gap',
      q: 'Er bereut, nicht früher nach Hause ___ zu sein. (fahren)',
      answer: 'gefahren',
      explain: { ru: 'fahren (движение) → ist gefahren → gefahren zu sein.', en: 'fahren (movement) → ist gefahren → gefahren zu sein.' }
    },
    {
      id: 'g-pinf-d9', kind: 'choice',
      q: 'Ich freue mich, gestern ___ — es war ein toller Abend.',
      options: ['dabei gewesen zu sein', 'dabei zu sein', 'dabei gewesen zu haben'],
      answer: 0,
      explain: { ru: 'gestern → действие раньше → прошедший инфинитив; sein → zu sein.', en: 'gestern → earlier action → past infinitive; sein → zu sein.' }
    },
    {
      id: 'g-pinf-d10', kind: 'choice',
      q: 'Ich bin froh, jetzt endlich hier ___.',
      options: ['zu sein', 'gewesen zu sein', 'gewesen zu haben'],
      answer: 0,
      explain: { ru: 'jetzt → одновременно → обычный инфинитив zu sein.', en: 'jetzt → same time → ordinary infinitive zu sein.' }
    },
    {
      id: 'g-pinf-d11', kind: 'gap',
      q: 'Sie gibt offen zu, einen Fehler ___ zu haben. (machen)',
      answer: 'gemacht',
      explain: { ru: 'Partizip II от machen — gemacht.', en: 'The Partizip II of machen is gemacht.' }
    },
    {
      id: 'g-pinf-d12', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я рад, что вовремя расторг договор аренды квартиры».', en: 'Build the sentence. “I’m glad to have given notice on the flat in time.”' },
      tokens: ['Ich', 'bin', 'froh,', 'die Wohnung', 'rechtzeitig', 'gekündigt', 'zu', 'haben.'],
      answer: 'Ich bin froh, die Wohnung rechtzeitig gekündigt zu haben.',
      explain: { ru: 'В конце: Partizip II (gekündigt) → zu → haben.', en: 'At the end: Partizip II (gekündigt) → zu → haben.' }
    }
  ]
});
