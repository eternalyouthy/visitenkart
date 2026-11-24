/* German GRAMMAR · B2 · Connectors: indem, sodass / so … dass, falls / sofern, (an)statt dass / zu, ohne dass / zu,
 * als ob, es sei denn. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'konnektoren_b2',
  level: 'B2',
  title: { ru: 'Союзы B2: способ, следствие, условие', en: 'B2 connectors: manner, result, condition' },
  summary: {
    ru: 'indem, sodass, falls, sofern, anstatt … zu, ohne dass, als ob, es sei denn — связная аргументация уровня B2.',
    en: 'indem, sodass, falls, sofern, anstatt … zu, ohne dass, als ob, es sei denn — linking ideas at B2.'
  },
  explanation: {
    ru: '<p>Все эти союзы открывают <b>придаточное</b> (глагол в конце). Они делают текст точнее, чем простые <em>weil / wenn / und</em>.</p>' +
      '<ul>' +
      '<li><b>indem</b> — способ («тем, что / путём»): <em>Man spart Energie, <b>indem</b> man das Licht ausschaltet.</em> Вопрос: <em>wie?</em></li>' +
      '<li><b>sodass / so …, dass</b> — следствие: <em>Es regnete stark, <b>sodass</b> das Spiel ausfiel.</em> / <em>Ich war <b>so</b> müde, <b>dass</b> ich einschlief.</em></li>' +
      '<li><b>falls / sofern</b> — условие («если вдруг / при условии что»): <em><b>Falls</b> du Hilfe brauchst, ruf an.</em></li>' +
      '<li><b>(an)statt … zu / (an)statt dass</b> — «вместо того чтобы»; <b>ohne … zu / ohne dass</b> — «не делая / без того чтобы». Конструкция с <em>zu</em> — если подлежащее то же, с <em>dass</em> — если разное.</li>' +
      '<li><b>als ob / als wenn</b> + Konjunktiv II — «как будто»: <em>Er tut so, <b>als ob</b> er nichts wüsste.</em></li>' +
      '<li><b>es sei denn</b> — «разве что / если только не»: <em>Wir fahren morgen, <b>es sei denn</b>, es regnet.</em> (после него обычный порядок слов)</li>' +
      '</ul>',
    en: '<p>All of these open a <b>subordinate clause</b> (verb last). They make writing more precise than plain <em>weil / wenn / und</em>.</p>' +
      '<ul>' +
      '<li><b>indem</b> — manner (“by doing”): <em>Man spart Energie, <b>indem</b> man das Licht ausschaltet.</em> It answers <em>wie?</em></li>' +
      '<li><b>sodass / so …, dass</b> — result: <em>Es regnete stark, <b>sodass</b> das Spiel ausfiel.</em> / <em>Ich war <b>so</b> müde, <b>dass</b> ich einschlief.</em></li>' +
      '<li><b>falls / sofern</b> — condition (“in case / provided that”): <em><b>Falls</b> du Hilfe brauchst, ruf an.</em></li>' +
      '<li><b>(an)statt … zu / (an)statt dass</b> — “instead of”; <b>ohne … zu / ohne dass</b> — “without”. Use the <em>zu</em> form when the subject is the same, <em>dass</em> when it changes.</li>' +
      '<li><b>als ob / als wenn</b> + Konjunktiv II — “as if”: <em>Er tut so, <b>als ob</b> er nichts wüsste.</em></li>' +
      '<li><b>es sei denn</b> — “unless”: <em>Wir fahren morgen, <b>es sei denn</b>, es regnet.</em> (normal word order after it)</li>' +
      '</ul>'
  },
  tables: [
    {
      caption: { ru: 'Обзор', en: 'Overview' },
      head: { ru: ['Союз', 'Значение', 'Пример'], en: ['Connector', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['indem', 'способ', 'Er lernt, indem er Podcasts hört.'],
          ['sodass', 'следствие', 'Der Zug fiel aus, sodass ich zu spät kam.'],
          ['falls / sofern', 'условие', 'Sofern nichts dazwischenkommt, bin ich da.'],
          ['anstatt … zu', 'вместо (то же подлежащее)', 'Anstatt zu lernen, spielt er.'],
          ['ohne dass', 'без того чтобы (другое подлежащее)', 'Er ging, ohne dass ich es merkte.'],
          ['als ob + KII', 'как будто', 'Sie tut, als ob sie krank wäre.'],
          ['es sei denn', 'если только не', 'Ich komme, es sei denn, ich bin krank.']
        ],
        en: [
          ['indem', 'manner', 'Er lernt, indem er Podcasts hört.'],
          ['sodass', 'result', 'Der Zug fiel aus, sodass ich zu spät kam.'],
          ['falls / sofern', 'condition', 'Sofern nichts dazwischenkommt, bin ich da.'],
          ['anstatt … zu', 'instead of (same subject)', 'Anstatt zu lernen, spielt er.'],
          ['ohne dass', 'without (different subject)', 'Er ging, ohne dass ich es merkte.'],
          ['als ob + KII', 'as if', 'Sie tut, als ob sie krank wäre.'],
          ['es sei denn', 'unless', 'Ich komme, es sei denn, ich bin krank.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Sie hat ihr Deutsch verbessert, [[indem]] sie jeden Tag Zeitung las.', ru: 'Она улучшила немецкий, читая каждый день газету.', en: 'She improved her German by reading the paper every day.' },
    { de: 'Der Server war überlastet, [[sodass]] die Seite nicht lud.', ru: 'Сервер был перегружен, так что страница не загружалась.', en: 'The server was overloaded, so the page didn’t load.' },
    { de: '[[Falls]] es Probleme gibt, melden Sie sich bitte.', ru: 'Если возникнут проблемы, свяжитесь, пожалуйста, с нами.', en: 'If there are any problems, please get in touch.' },
    { de: '[[Anstatt]] anzurufen, schrieb er eine lange Mail.', ru: 'Вместо того чтобы позвонить, он написал длинное письмо.', en: 'Instead of calling, he wrote a long email.' },
    { de: 'Er nahm das Geld, [[ohne]] zu fragen.', ru: 'Он взял деньги, не спросив.', en: 'He took the money without asking.' },
    { de: 'Du siehst aus, [[als ob]] du nicht geschlafen hättest.', ru: 'Ты выглядишь так, будто не спал.', en: 'You look as if you hadn’t slept.' }
  ],
  pitfalls: [
    {
      title: { ru: 'indem или dadurch, dass', en: 'indem vs dadurch, dass' },
      html: {
        ru: 'Оба передают способ. <span class="right">indem</span> — короче и частотнее. <span class="right">dadurch, dass</span> позволяет поставить акцент: <em>Dadurch, dass er half, ging es schneller.</em> Не путайте с <span class="wrong">damit</span> — это цель («чтобы»).',
        en: 'Both express manner. <span class="right">indem</span> is shorter and more common; <span class="right">dadurch, dass</span> adds emphasis: <em>Dadurch, dass er half, ging es schneller.</em> Don’t confuse either with <span class="wrong">damit</span> — that is purpose (“so that”).'
      }
    },
    {
      title: { ru: 'ohne zu / ohne dass', en: 'ohne zu vs ohne dass' },
      html: {
        ru: 'Одно подлежащее: <span class="right">Er ging, ohne sich zu verabschieden.</span> Разные: <span class="right">Er ging, ohne dass wir es merkten.</span> Нельзя <span class="wrong">ohne dass er sich verabschieden</span>.',
        en: 'Same subject: <span class="right">Er ging, ohne sich zu verabschieden.</span> Different subjects: <span class="right">Er ging, ohne dass wir es merkten.</span> Not <span class="wrong">ohne dass er sich verabschieden</span>.'
      }
    },
    {
      title: { ru: 'als ob требует Konjunktiv II', en: 'als ob takes Konjunktiv II' },
      html: {
        ru: '<span class="wrong">Er tut, als ob er krank ist.</span> (разговорно) → <span class="right">Er tut, als ob er krank wäre.</span> Вариант без ob: <span class="right">Er tut, als wäre er krank.</span> — глагол сразу после als.',
        en: '<span class="wrong">Er tut, als ob er krank ist.</span> (colloquial) → <span class="right">Er tut, als ob er krank wäre.</span> Without ob the verb comes right after als: <span class="right">Er tut, als wäre er krank.</span>'
      }
    }
  ],
  drills: [
    {
      id: 'g-kb-d1', kind: 'choice',
      q: 'Man kann Geld sparen, ___ man öfter selbst kocht.',
      options: ['indem', 'damit', 'sodass'],
      answer: 0,
      explain: { ru: 'Каким образом? → indem.', en: 'How? → indem.' }
    },
    {
      id: 'g-kb-d2', kind: 'choice',
      q: 'Es schneite stark, ___ viele Flüge gestrichen wurden.',
      options: ['indem', 'sodass', 'falls'],
      answer: 1,
      explain: { ru: 'Следствие → sodass.', en: 'Result → sodass.' }
    },
    {
      id: 'g-kb-d3', kind: 'choice',
      q: 'Er verließ den Raum, ___ ein Wort zu sagen.',
      options: ['ohne', 'ohne dass', 'anstatt dass'],
      answer: 0,
      explain: { ru: 'Одно подлежащее + zu → ohne … zu.', en: 'Same subject + zu → ohne … zu.' }
    },
    {
      id: 'g-kb-d4', kind: 'gap',
      q: 'Sie redet, als ob sie alles ___. (wissen, Konjunktiv II)',
      answer: 'wüsste',
      explain: { ru: 'als ob + Konjunktiv II: wüsste.', en: 'als ob + Konjunktiv II: wüsste.' }
    },
    {
      id: 'g-kb-d5', kind: 'choice',
      q: 'Wir grillen am Samstag, ___ es regnet.',
      options: ['es sei denn', 'sofern', 'indem'],
      answer: 0,
      explain: { ru: '«если только не пойдёт дождь» → es sei denn.', en: '“unless it rains” → es sei denn.' }
    },
    {
      id: 'g-kb-d6', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Вместо того чтобы учиться, он смотрит сериалы».', en: 'Build the sentence. “Instead of studying, he watches series.”' },
      tokens: ['Anstatt', 'zu', 'lernen,', 'schaut', 'er', 'Serien.'],
      answer: 'Anstatt zu lernen, schaut er Serien.',
      explain: { ru: 'Инфинитивная группа первой → главное начинается с глагола.', en: 'Infinitive clause first → main clause starts with the verb.' }
    }
  ]
});
