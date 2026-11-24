/* German GRAMMAR · B2 · Konjunktiv II in the past: hätte/wäre + Partizip II, double infinitive (hätte machen sollen),
 * regrets and reproaches. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'konj2_vergangenheit',
  level: 'B2',
  title: { ru: 'Konjunktiv II прошедшего: hätte … sollen', en: 'Past Konjunktiv II: hätte … sollen' },
  summary: {
    ru: 'Wenn ich das gewusst hätte … Du hättest anrufen sollen! Сожаление, упрёк и нереальное прошлое.',
    en: 'Wenn ich das gewusst hätte … Du hättest anrufen sollen! Regret, reproach and the unreal past.'
  },
  explanation: {
    ru: '<p>Konjunktiv II прошедшего описывает то, что <b>могло бы случиться, но не случилось</b>. Форма: <b>hätte / wäre + Partizip II</b> (выбор как в Perfekt):</p>' +
      '<p><em>Wenn ich früher losgefahren <b>wäre</b>, <b>hätte</b> ich den Zug nicht <b>verpasst</b>.</em> — Если бы я выехал раньше, я бы не опоздал на поезд.</p>' +
      '<ul>' +
      '<li><b>Сожаление:</b> <em>Hätte ich doch mehr gelernt!</em> / <em>Wenn ich nur nicht so viel gegessen hätte!</em></li>' +
      '<li><b>С модальным — двойной инфинитив:</b> <b>hätte + инфинитив + модальный инфинитив</b>: <em>Du <b>hättest</b> mich <b>anrufen sollen</b>.</em> (Тебе следовало мне позвонить.) <em>Wir <b>hätten</b> das <b>verhindern können</b>.</em></li>' +
      '<li>В придаточном <b>hätte</b> стоит <b>перед</b> двумя инфинитивами: <em>…, weil ich ihn <b>hätte</b> fragen müssen.</em></li>' +
      '</ul>' +
      '<p>Смешанные условия: прошлое условие → результат сейчас: <em>Wenn ich damals Informatik studiert hätte, <b>wäre</b> ich jetzt Programmierer.</em></p>',
    en: '<p>The past Konjunktiv II describes what <b>could have happened but didn’t</b>. Form: <b>hätte / wäre + Partizip II</b> (choose as in the Perfekt):</p>' +
      '<p><em>Wenn ich früher losgefahren <b>wäre</b>, <b>hätte</b> ich den Zug nicht <b>verpasst</b>.</em> — If I had left earlier, I wouldn’t have missed the train.</p>' +
      '<ul>' +
      '<li><b>Regret:</b> <em>Hätte ich doch mehr gelernt!</em> / <em>Wenn ich nur nicht so viel gegessen hätte!</em> (“If only …”)</li>' +
      '<li><b>With a modal — double infinitive:</b> <b>hätte + infinitive + modal infinitive</b>: <em>Du <b>hättest</b> mich <b>anrufen sollen</b>.</em> (You should have called me.) <em>Wir <b>hätten</b> das <b>verhindern können</b>.</em> (We could have prevented it.)</li>' +
      '<li>In a subordinate clause <b>hätte</b> goes <b>before</b> the two infinitives: <em>…, weil ich ihn <b>hätte</b> fragen müssen.</em></li>' +
      '</ul>' +
      '<p>Mixed conditionals: past condition → present result: <em>Wenn ich damals Informatik studiert hätte, <b>wäre</b> ich jetzt Programmierer.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Формы', en: 'Forms' },
      head: { ru: ['Смысл', 'Немецкий', 'Перевод'], en: ['Meaning', 'German', 'English'] },
      deCols: [1],
      rows: {
        ru: [
          ['нереальное прошлое', 'Ich hätte es gemacht.', 'Я бы это сделал.'],
          ['с sein', 'Ich wäre gekommen.', 'Я бы пришёл.'],
          ['упрёк', 'Du hättest fragen sollen.', 'Тебе следовало спросить.'],
          ['упущенная возможность', 'Wir hätten gewinnen können.', 'Мы могли бы выиграть.'],
          ['необходимость', 'Ich hätte früher gehen müssen.', 'Мне надо было уйти раньше.']
        ],
        en: [
          ['unreal past', 'Ich hätte es gemacht.', 'I would have done it.'],
          ['with sein', 'Ich wäre gekommen.', 'I would have come.'],
          ['reproach', 'Du hättest fragen sollen.', 'You should have asked.'],
          ['missed chance', 'Wir hätten gewinnen können.', 'We could have won.'],
          ['necessity', 'Ich hätte früher gehen müssen.', 'I should have left earlier.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Wenn du mir Bescheid gesagt [[hättest]], [[wäre]] ich mitgekommen.', ru: 'Если бы ты мне сказал, я бы пошёл с тобой.', en: 'If you had told me, I would have come along.' },
    { de: 'Du [[hättest]] das Backup früher [[machen sollen]].', ru: 'Тебе следовало сделать бэкап раньше.', en: 'You should have made the backup earlier.' },
    { de: '[[Hätte]] ich das bloß nicht gesagt!', ru: 'Зря я это сказал!', en: 'If only I hadn’t said that!' },
    { de: 'Wir [[hätten]] den Fehler leicht [[finden können]].', ru: 'Мы могли бы легко найти ошибку.', en: 'We could easily have found the bug.' },
    { de: 'Ohne deine Hilfe [[hätte]] ich es nicht [[geschafft]].', ru: 'Без твоей помощи я бы не справился.', en: 'Without your help I wouldn’t have managed.' },
    { de: 'Wenn ich das Angebot angenommen hätte, [[wäre]] ich jetzt in Wien.', ru: 'Если бы я принял предложение, я был бы сейчас в Вене.', en: 'If I had taken the offer, I would be in Vienna now.' }
  ],
  pitfalls: [
    {
      title: { ru: '«следовало» = hätte … sollen', en: '“should have” = hätte … sollen' },
      html: {
        ru: '<span class="wrong">Du solltest anrufen</span> — это совет на будущее. Упрёк о прошлом: <span class="right">Du hättest anrufen sollen</span>. Не <span class="wrong">Du hättest anrufen gesollt</span> — второй глагол в инфинитиве.',
        en: '<span class="wrong">Du solltest anrufen</span> is advice for now. A reproach about the past: <span class="right">Du hättest anrufen sollen</span>. Not <span class="wrong">Du hättest anrufen gesollt</span> — the modal stays an infinitive.'
      }
    },
    {
      title: { ru: 'hätte или wäre', en: 'hätte or wäre' },
      html: {
        ru: 'Как в Perfekt: движение и смена состояния — <span class="right">wäre gefahren, wäre geblieben</span>; остальное — <span class="right">hätte gemacht</span>. С модальным всегда <span class="right">hätte</span>: <em>Ich hätte fahren sollen.</em>',
        en: 'As in the Perfekt: movement and change of state take <span class="right">wäre gefahren, wäre geblieben</span>; the rest take <span class="right">hätte gemacht</span>. With a modal it is always <span class="right">hätte</span>: <em>Ich hätte fahren sollen.</em>'
      }
    },
    {
      title: { ru: 'Не würde + hätte', en: 'Not würde + hätte' },
      html: {
        ru: 'В прошедшем <span class="wrong">würde gemacht haben</span> возможно, но тяжеловесно. Стандарт: <span class="right">hätte gemacht</span>.',
        en: 'In the past, <span class="wrong">würde gemacht haben</span> exists but is clumsy. The standard is <span class="right">hätte gemacht</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-kv-d1', kind: 'choice',
      q: 'Wenn ich den Wecker gehört ___, wäre ich pünktlich gewesen.',
      options: ['hätte', 'wäre', 'würde'],
      answer: 0,
      explain: { ru: 'hören → haben: hätte gehört.', en: 'hören takes haben: hätte gehört.' }
    },
    {
      id: 'g-kv-d2', kind: 'choice',
      q: 'Wenn wir früher losgegangen ___, hätten wir den Bus erwischt.',
      options: ['hätten', 'wären', 'würden'],
      answer: 1,
      explain: { ru: 'losgehen — движение → wären.', en: 'losgehen is movement → wären.' }
    },
    {
      id: 'g-kv-d3', kind: 'gap',
      q: 'Du hättest mir das früher sagen ___. (sollen)',
      answer: 'sollen',
      explain: { ru: 'Двойной инфинитив: sagen sollen.', en: 'Double infinitive: sagen sollen.' }
    },
    {
      id: 'g-kv-d4', kind: 'choice',
      q: 'Schade! Wir ___ das Spiel gewinnen können.',
      options: ['hätten', 'wären', 'haben'],
      answer: 0,
      explain: { ru: 'Модальный в прошедшем KII → hätten.', en: 'Modal in past KII → hätten.' }
    },
    {
      id: 'g-kv-d5', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Мне надо было раньше спросить».', en: 'Build the sentence. “I should have asked earlier.”' },
      tokens: ['Ich', 'hätte', 'früher', 'fragen', 'müssen.'],
      answer: 'Ich hätte früher fragen müssen.',
      explain: { ru: 'hätte + инфинитив + müssen.', en: 'hätte + infinitive + müssen.' }
    },
    {
      id: 'g-kv-d6', kind: 'choice',
      q: 'Er ärgert sich, weil er das Angebot ___.',
      options: ['hätte annehmen sollen', 'annehmen sollen hätte', 'sollen annehmen hätte'],
      answer: 0,
      explain: { ru: 'В придаточном hätte стоит перед двумя инфинитивами.', en: 'In a subordinate clause hätte comes before the two infinitives.' }
    }
  ]
});
