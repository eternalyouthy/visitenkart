/* German GRAMMAR · C1 · The middle field: order of objects, pronouns, adverbials (TeKaMoLo) and the position of nicht.
 * Explanations ru + en inline. */
GT.registerGrammar({
  id: 'mittelfeld',
  level: 'C1',
  title: { ru: 'Середина предложения и место nicht', en: 'The middle field and where nicht goes' },
  summary: {
    ru: 'Что стоит между глаголом и концом рамки: местоимения раньше существительных, Dativ перед Akkusativ, te-ka-mo-lo, и куда ставить nicht.',
    en: 'What goes between the verb and the end of the bracket: pronouns before nouns, Dativ before Akkusativ, te-ka-mo-lo, and where nicht goes.'
  },
  explanation: {
    ru: '<p>Между спрягаемым глаголом и концом рамки (Mittelfeld) порядок не свободный. Основные правила:</p>' +
      '<ul>' +
      '<li><b>Местоимения — сразу после глагола</b>, в порядке Nom → Akk → Dat: <em>Ich gebe <b>es ihm</b> morgen.</em></li>' +
      '<li><b>Два существительных: Dativ → Akkusativ</b>: <em>Ich gebe <b>dem Kollegen den Schlüssel</b>.</em> Если одно из них местоимение — оно первое: <em>Ich gebe <b>ihn dem Kollegen</b>.</em></li>' +
      '<li><b>Обстоятельства: te – ka – mo – lo</b> (temporal – kausal – modal – lokal): <em>Ich fahre <b>morgen wegen der Konferenz mit dem Zug nach Wien</b>.</em></li>' +
      '<li><b>Известное раньше, новое позже</b>: самое важное, новое — ближе к концу. <em>Ich habe das Buch <b>gestern</b> gekauft</em> (ответ на «когда?»).</li>' +
      '</ul>' +
      '<p><b>nicht</b>:</p>' +
      '<ul>' +
      '<li>Отрицание <b>всего предложения</b> — nicht как можно ближе к концу, но <b>перед</b> второй частью сказуемого, предложным дополнением, направлением и предикативом: <em>Ich habe ihn <b>nicht</b> angerufen. Ich warte <b>nicht</b> auf dich. Er ist <b>nicht</b> nach Hause gefahren. Sie ist <b>nicht</b> krank.</em></li>' +
      '<li>nicht стоит <b>после</b> прямого дополнения с артиклем и после наречий времени: <em>Ich kenne den Mann <b>nicht</b>. Er kommt heute <b>nicht</b>.</em></li>' +
      '<li>Отрицание <b>одного члена</b> — nicht прямо перед ним, часто с <em>sondern</em>: <em>Ich fahre <b>nicht morgen</b>, sondern übermorgen.</em></li>' +
      '</ul>',
    en: '<p>Between the finite verb and the end of the bracket (the Mittelfeld), word order is not free. The main rules:</p>' +
      '<ul>' +
      '<li><b>Pronouns come right after the verb</b>, in the order Nom → Akk → Dat: <em>Ich gebe <b>es ihm</b> morgen.</em></li>' +
      '<li><b>Two nouns: Dativ → Akkusativ</b>: <em>Ich gebe <b>dem Kollegen den Schlüssel</b>.</em> If one is a pronoun, it comes first: <em>Ich gebe <b>ihn dem Kollegen</b>.</em></li>' +
      '<li><b>Adverbials: te – ka – mo – lo</b> (time – cause – manner – place): <em>Ich fahre <b>morgen wegen der Konferenz mit dem Zug nach Wien</b>.</em> English usually has the reverse: place before time.</li>' +
      '<li><b>Known first, new later</b>: the most important, new information goes towards the end.</li>' +
      '</ul>' +
      '<p><b>nicht</b>:</p>' +
      '<ul>' +
      '<li>Negating the <b>whole clause</b>: nicht goes as late as possible, but <b>before</b> the second part of the verb, a prepositional object, a direction and a predicative: <em>Ich habe ihn <b>nicht</b> angerufen. Ich warte <b>nicht</b> auf dich. Er ist <b>nicht</b> nach Hause gefahren. Sie ist <b>nicht</b> krank.</em></li>' +
      '<li>nicht comes <b>after</b> a definite direct object and after time adverbs: <em>Ich kenne den Mann <b>nicht</b>. Er kommt heute <b>nicht</b>.</em></li>' +
      '<li>Negating <b>one element</b>: nicht goes right before it, often with <em>sondern</em>: <em>Ich fahre <b>nicht morgen</b>, sondern übermorgen.</em></li>' +
      '</ul>'
  },
  tables: [
    {
      caption: { ru: 'Порядок в середине', en: 'Order in the middle field' },
      head: { ru: ['Правило', 'Пример'], en: ['Rule', 'Example'] },
      deCols: [1],
      rows: {
        ru: [
          ['местоимения: Akk → Dat', 'Ich schicke es dir.'],
          ['сущ.: Dat → Akk', 'Ich schicke dem Kunden das Angebot.'],
          ['местоимение раньше сущ.', 'Ich schicke es dem Kunden.'],
          ['te – ka – mo – lo', 'Wir treffen uns heute wegen des Projekts kurz im Büro.'],
          ['nicht перед 2-й частью глагола', 'Ich habe es nicht verstanden.'],
          ['nicht перед предлогом', 'Er denkt nicht an mich.'],
          ['nicht после определённого объекта', 'Ich finde den Schlüssel nicht.']
        ],
        en: [
          ['pronouns: Akk → Dat', 'Ich schicke es dir.'],
          ['nouns: Dat → Akk', 'Ich schicke dem Kunden das Angebot.'],
          ['pronoun before noun', 'Ich schicke es dem Kunden.'],
          ['te – ka – mo – lo', 'Wir treffen uns heute wegen des Projekts kurz im Büro.'],
          ['nicht before 2nd verb part', 'Ich habe es nicht verstanden.'],
          ['nicht before a preposition', 'Er denkt nicht an mich.'],
          ['nicht after a definite object', 'Ich finde den Schlüssel nicht.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Kannst du [[es mir]] bis Freitag schicken?', ru: 'Можешь прислать мне это до пятницы?', en: 'Can you send it to me by Friday?' },
    { de: 'Wir fahren [[am Wochenende mit Freunden in die Berge]].', ru: 'На выходных мы едем с друзьями в горы.', en: 'We’re going to the mountains with friends at the weekend.' },
    { de: 'Ich habe die Mail leider [[nicht]] gelesen.', ru: 'К сожалению, я не прочитал письмо.', en: 'Unfortunately I didn’t read the email.' },
    { de: 'Er wohnt [[nicht]] in Berlin, sondern in Potsdam.', ru: 'Он живёт не в Берлине, а в Потсдаме.', en: 'He doesn’t live in Berlin but in Potsdam.' },
    { de: 'Sie hat ihrem Chef die Wahrheit [[nicht]] gesagt.', ru: 'Она не сказала начальнику правду.', en: 'She didn’t tell her boss the truth.' }
  ],
  pitfalls: [
    {
      title: { ru: 'nicht ≠ kein', en: 'nicht ≠ kein' },
      html: {
        ru: 'Существительное с неопределённым артиклем или без артикля отрицается через <span class="right">kein</span>: <span class="wrong">Ich habe nicht Zeit.</span> → <span class="right">Ich habe keine Zeit.</span>',
        en: 'A noun with an indefinite article or no article is negated with <span class="right">kein</span>: <span class="wrong">Ich habe nicht Zeit.</span> → <span class="right">Ich habe keine Zeit.</span>'
      }
    },
    {
      title: { ru: 'Русская привычка «не» перед глаголом', en: 'English habit: not before the verb' },
      html: {
        ru: '«Я не понял тебя» — <span class="wrong">Ich habe nicht dich verstanden.</span> → <span class="right">Ich habe dich nicht verstanden.</span>',
        en: '“I didn’t understand you” — <span class="wrong">Ich habe nicht dich verstanden.</span> → <span class="right">Ich habe dich nicht verstanden.</span>'
      }
    },
    {
      title: { ru: 'Место раньше времени — по-английски', en: 'Place before time is English order' },
      html: {
        ru: '<span class="wrong">Ich gehe ins Kino heute.</span> → <span class="right">Ich gehe heute ins Kino.</span>',
        en: '<span class="wrong">Ich gehe ins Kino heute.</span> (= “I’m going to the cinema today”) → <span class="right">Ich gehe heute ins Kino.</span>'
      }
    }
  ],
  drills: [
    {
      id: 'g-mf-d1', kind: 'choice',
      q: 'Hast du Anna das Buch schon zurückgegeben? — Ja, ich habe ___ gestern zurückgegeben.',
      options: ['es ihr', 'ihr es', 'es sie'],
      answer: 0,
      explain: { ru: 'Два местоимения: Akk (es) → Dat (ihr).', en: 'Two pronouns: Akk (es) → Dat (ihr).' }
    },
    {
      id: 'g-mf-d2', kind: 'choice',
      q: 'Ich habe ___ erklärt.',
      options: ['dem Praktikanten die Aufgabe', 'die Aufgabe dem Praktikanten', 'die Aufgabe den Praktikanten'],
      answer: 0,
      explain: { ru: 'Два существительных: Dat → Akk.', en: 'Two nouns: Dat → Akk.' }
    },
    {
      id: 'g-mf-d3', kind: 'choice',
      q: { ru: 'Wo ist „nicht“ richtig? (Я не жду автобус)', en: 'Wo ist „nicht“ richtig? (I’m not waiting for the bus)' },
      options: ['Ich warte nicht auf den Bus.', 'Ich warte auf den Bus nicht.', 'Ich nicht warte auf den Bus.'],
      answer: 0,
      explain: { ru: 'nicht перед предложным дополнением.', en: 'nicht goes before a prepositional object.' }
    },
    {
      id: 'g-mf-d4', kind: 'choice',
      q: { ru: 'Wo ist „nicht“ richtig? (Я не знаю этого человека)', en: 'Wo ist „nicht“ richtig? (I don’t know this man)' },
      options: ['Ich kenne diesen Mann nicht.', 'Ich kenne nicht diesen Mann.', 'Ich nicht kenne diesen Mann.'],
      answer: 0,
      explain: { ru: 'После определённого прямого дополнения.', en: 'After a definite direct object.' }
    },
    {
      id: 'g-mf-d5', kind: 'reorder',
      q: { ru: 'Соберите фразу по te-ka-mo-lo. «Завтра я из-за забастовки еду на машине в офис».', en: 'Build the sentence (te-ka-mo-lo). “Tomorrow I’m driving to the office because of the strike.”' },
      tokens: ['Morgen', 'fahre', 'ich', 'wegen des Streiks', 'mit dem Auto', 'ins Büro.'],
      answer: 'Morgen fahre ich wegen des Streiks mit dem Auto ins Büro.',
      explain: { ru: 'Время (на 1-м месте) → причина → способ → место.', en: 'Time (in position 1) → cause → manner → place.' }
    },
    {
      id: 'g-mf-d6', kind: 'choice',
      q: 'Ich komme ___, sondern am Dienstag.',
      options: ['nicht am Montag', 'am Montag nicht', 'kein Montag'],
      answer: 0,
      explain: { ru: 'Отрицание одного члена + sondern → nicht прямо перед ним.', en: 'Negating one element + sondern → nicht right before it.' }
    }
  ]
});
