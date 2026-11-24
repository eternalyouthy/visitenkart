/* German GRAMMAR · B2 · Adjectives and nouns with fixed prepositions (stolz auf, Angst vor, Interesse an) + da- / wo- forms.
 * Verbs with prepositions are B1: grammar_verben_praep.js. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'adj_nomen_praep',
  level: 'B2',
  title: { ru: 'Прилагательные и существительные с предлогами', en: 'Adjectives and nouns with prepositions' },
  summary: {
    ru: 'stolz auf, bekannt für, zufrieden mit, Angst vor, Interesse an — устойчивые предлоги, их падеж и формы darauf / worauf.',
    en: 'stolz auf, bekannt für, zufrieden mit, Angst vor, Interesse an — fixed prepositions, their case, and darauf / worauf.'
  },
  explanation: {
    ru: '<p>Как и глаголы (<a href="#/grammar/verben_praep">Verbs + prepositions</a>), многие прилагательные и существительные требуют <b>определённого предлога</b>. Его надо учить вместе со словом и с падежом: <em>stolz <b>auf</b> + Akk</em>, <em>zufrieden <b>mit</b> + Dat</em>, <em>Angst <b>vor</b> + Dat</em>.</p>' +
      '<p>Предлог часто <b>не совпадает с русским</b>: «гордиться <i>чем</i>» → <em>stolz <b>auf</b></em>, «интерес <i>к</i>» → <em>Interesse <b>an</b></em>, «известен <i>чем</i>» → <em>bekannt <b>für</b></em>, «женат <i>на</i>» → <em>verheiratet <b>mit</b></em>.</p>' +
      '<p>Существительное нередко берёт предлог родственного глагола: <em>sich freuen auf → die Vorfreude auf</em>, <em>fragen nach → die Frage nach</em>, <em>antworten auf → die Antwort auf</em>. Но не всегда: <em>sich interessieren <b>für</b></em>, но <em>das Interesse <b>an</b></em>.</p>' +
      '<p><b>da- / wo-формы</b> работают как у глаголов:</p>' +
      '<ul>' +
      '<li>о вещи или ситуации — <b>da(r)- + предлог</b>: <em>Ich bin stolz <b>darauf</b>.</em> Часто им предваряется придаточное или инфинитив: <em>Ich habe Angst <b>davor</b>, zu spät zu kommen. Wir sind froh <b>darüber</b>, dass alles geklappt hat.</em></li>' +
      '<li>вопрос о вещи — <b>wo(r)- + предлог</b>: <em><b>Worauf</b> bist du stolz?</em></li>' +
      '<li>о человеке — предлог + местоимение: <em>Ich bin stolz <b>auf sie</b>. <b>Auf wen</b> bist du stolz?</em></li>' +
      '</ul>',
    en: '<p>Like verbs (<a href="#/grammar/verben_praep">Verbs + prepositions</a>), many adjectives and nouns take a <b>fixed preposition</b>. Learn it with the word and with its case: <em>stolz <b>auf</b> + Akk</em>, <em>zufrieden <b>mit</b> + Dat</em>, <em>Angst <b>vor</b> + Dat</em>.</p>' +
      '<p>The preposition often <b>differs from English</b>: “proud <i>of</i>” → <em>stolz <b>auf</b></em>, “interested <i>in</i>” → <em>interessiert <b>an</b></em>, “afraid <i>of</i>” → <em>Angst <b>vor</b></em>, “married <i>to</i>” → <em>verheiratet <b>mit</b></em>, “angry <i>with</i>” → <em>böse / sauer <b>auf</b></em>.</p>' +
      '<p>Nouns often keep the preposition of the related verb: <em>sich freuen auf → die Vorfreude auf</em>, <em>fragen nach → die Frage nach</em>, <em>antworten auf → die Antwort auf</em>. Not always: <em>sich interessieren <b>für</b></em>, but <em>das Interesse <b>an</b></em>.</p>' +
      '<p><b>da- / wo- forms</b> work as with verbs:</p>' +
      '<ul>' +
      '<li>for a thing or situation — <b>da(r)- + preposition</b>: <em>Ich bin stolz <b>darauf</b>.</em> It often announces a clause or infinitive, where English just says “of / about”: <em>Ich habe Angst <b>davor</b>, zu spät zu kommen. Wir sind froh <b>darüber</b>, dass alles geklappt hat.</em></li>' +
      '<li>asking about a thing — <b>wo(r)- + preposition</b>: <em><b>Worauf</b> bist du stolz?</em> (not <em>Auf was</em> in writing)</li>' +
      '<li>for people — preposition + pronoun: <em>Ich bin stolz <b>auf sie</b>. <b>Auf wen</b> bist du stolz?</em></li>' +
      '</ul>'
  },
  tables: [
    {
      caption: { ru: 'Прилагательные с предлогами', en: 'Adjectives with prepositions' },
      head: { ru: ['Прилагательное', 'Значение', 'Пример'], en: ['Adjective', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['stolz auf + A', 'гордый (чем)', 'Wir sind stolz auf unser Team.'],
          ['bekannt für + A', 'известный (чем)', 'Die Stadt ist bekannt für ihr Bier.'],
          ['zufrieden mit + D', 'довольный (чем)', 'Bist du zufrieden mit dem Ergebnis?'],
          ['interessiert an + D', 'заинтересованный (в чём)', 'Sie ist an dem Job interessiert.'],
          ['abhängig von + D', 'зависимый (от)', 'Das ist abhängig vom Wetter.'],
          ['verantwortlich für + A', 'ответственный (за)', 'Wer ist für die Planung verantwortlich?'],
          ['gespannt auf + A', 'с нетерпением ждущий', 'Ich bin gespannt auf die Ergebnisse.'],
          ['froh über + A', 'рад (чему)', 'Ich bin froh über deine Hilfe.'],
          ['verheiratet mit + D', 'женат / замужем (за, на)', 'Sie ist mit einem Arzt verheiratet.'],
          ['böse / sauer auf + A', 'сердитый (на)', 'Bist du noch sauer auf mich?']
        ],
        en: [
          ['stolz auf + A', 'proud of', 'Wir sind stolz auf unser Team.'],
          ['bekannt für + A', 'known for', 'Die Stadt ist bekannt für ihr Bier.'],
          ['zufrieden mit + D', 'satisfied with', 'Bist du zufrieden mit dem Ergebnis?'],
          ['interessiert an + D', 'interested in', 'Sie ist an dem Job interessiert.'],
          ['abhängig von + D', 'dependent on', 'Das ist abhängig vom Wetter.'],
          ['verantwortlich für + A', 'responsible for', 'Wer ist für die Planung verantwortlich?'],
          ['gespannt auf + A', 'eager to see / curious about', 'Ich bin gespannt auf die Ergebnisse.'],
          ['froh über + A', 'glad about', 'Ich bin froh über deine Hilfe.'],
          ['verheiratet mit + D', 'married to', 'Sie ist mit einem Arzt verheiratet.'],
          ['böse / sauer auf + A', 'angry with', 'Bist du noch sauer auf mich?']
        ]
      }
    },
    {
      caption: { ru: 'Существительные с предлогами', en: 'Nouns with prepositions' },
      head: { ru: ['Существительное', 'Значение', 'Пример'], en: ['Noun', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['die Angst vor + D', 'страх (перед)', 'Er hat Angst vor Hunden.'],
          ['das Interesse an + D', 'интерес (к)', 'Hast du Interesse an dem Kurs?'],
          ['die Lust auf + A', 'желание, охота', 'Ich habe Lust auf Pizza.'],
          ['die Bitte um + A', 'просьба (о)', 'Ich habe eine Bitte um Hilfe.'],
          ['die Frage nach + D', 'вопрос (о)', 'Die Frage nach dem Preis kam sofort.'],
          ['die Antwort auf + A', 'ответ (на)', 'Ich warte auf eine Antwort auf meine Mail.'],
          ['die Erfahrung mit + D', 'опыт (с, в)', 'Wir haben Erfahrung mit solchen Projekten.'],
          ['der Grund für + A', 'причина (чего)', 'Was ist der Grund für die Verspätung?']
        ],
        en: [
          ['die Angst vor + D', 'fear of', 'Er hat Angst vor Hunden.'],
          ['das Interesse an + D', 'interest in', 'Hast du Interesse an dem Kurs?'],
          ['die Lust auf + A', 'being in the mood for', 'Ich habe Lust auf Pizza.'],
          ['die Bitte um + A', 'request for', 'Ich habe eine Bitte um Hilfe.'],
          ['die Frage nach + D', 'question about', 'Die Frage nach dem Preis kam sofort.'],
          ['die Antwort auf + A', 'answer to', 'Ich warte auf eine Antwort auf meine Mail.'],
          ['die Erfahrung mit + D', 'experience with', 'Wir haben Erfahrung mit solchen Projekten.'],
          ['der Grund für + A', 'reason for', 'Was ist der Grund für die Verspätung?']
        ]
      }
    }
  ],
  examples: [
    { de: 'Die Eltern sind sehr stolz [[auf]] ihre Tochter.', ru: 'Родители очень гордятся дочерью.', en: 'The parents are very proud of their daughter.' },
    { de: 'Mein Sohn hat Angst [[vor]] großen Hunden.', ru: 'Мой сын боится больших собак.', en: 'My son is afraid of big dogs.' },
    { de: 'Hast du Interesse [[an]] einem Sprachkurs im Sommer?', ru: 'Тебе интересен языковой курс летом?', en: 'Are you interested in a language course in the summer?' },
    { de: 'Bist du [[mit]] deiner neuen Wohnung zufrieden?', ru: 'Ты доволен новой квартирой?', en: 'Are you happy with your new flat?' },
    { de: 'Ich bin froh [[darüber]], dass du gekommen bist.', ru: 'Я рад, что ты пришёл.', en: 'I’m glad you came.' },
    { de: '[[Worauf]] bist du am meisten gespannt?', ru: 'Чего ты ждёшь с наибольшим нетерпением?', en: 'What are you most looking forward to seeing?' }
  ],
  pitfalls: [
    {
      title: { ru: 'Калька с русского предлога', en: 'Translating the English preposition' },
      html: {
        ru: '<span class="wrong">Interesse zu</span> («интерес к») → <span class="right">Interesse an</span>. <span class="wrong">verheiratet auf</span> («женат на») → <span class="right">verheiratet mit</span>. <span class="wrong">Angst von</span> → <span class="right">Angst vor</span>.',
        en: '<span class="wrong">interessiert in</span> → <span class="right">interessiert an</span>. <span class="wrong">stolz von</span> (“proud of”) → <span class="right">stolz auf</span>. <span class="wrong">Angst von</span> (“afraid of”) → <span class="right">Angst vor</span>. <span class="wrong">verheiratet zu</span> (“married to”) → <span class="right">verheiratet mit</span>.'
      }
    },
    {
      title: { ru: 'Interesse an, но sich interessieren für', en: 'Interesse an, but sich interessieren für' },
      html: {
        ru: 'Глагол и существительное могут расходиться: <span class="right">Ich interessiere mich für Kunst</span>, но <span class="right">Ich habe Interesse an Kunst</span> и <span class="right">Ich bin an Kunst interessiert</span>.',
        en: 'Verb and noun can differ: <span class="right">Ich interessiere mich für Kunst</span>, but <span class="right">Ich habe Interesse an Kunst</span> and <span class="right">Ich bin an Kunst interessiert</span>.'
      }
    },
    {
      title: { ru: 'da- перед придаточным', en: 'da- before a clause' },
      html: {
        ru: 'Если после прилагательного идёт dass-предложение или инфинитив, предлог «упаковывается» в da-: <span class="right">Ich bin stolz darauf, dass ich die Prüfung bestanden habe.</span> <span class="wrong">Ich bin stolz auf, dass …</span> невозможно.',
        en: 'A preposition can’t stand directly before a dass-clause: <span class="wrong">Ich bin stolz auf, dass …</span> → <span class="right">Ich bin stolz darauf, dass ich die Prüfung bestanden habe.</span> English just drops the preposition (“proud that…”); German packs it into da-.'
      }
    }
  ],
  drills: [
    {
      id: 'g-anp-d1', kind: 'choice',
      q: 'Die Eltern sind sehr stolz ___ ihre Tochter.',
      options: ['auf', 'von', 'über'],
      answer: 0,
      explain: { ru: 'stolz auf + Akk.', en: 'stolz auf + Akk (not “von” for “of”).' }
    },
    {
      id: 'g-anp-d2', kind: 'choice',
      q: 'Heidelberg ist bekannt ___ seine alte Universität.',
      options: ['für', 'an', 'auf'],
      answer: 0,
      explain: { ru: 'bekannt für + Akk.', en: 'bekannt für + Akk.' }
    },
    {
      id: 'g-anp-d3', kind: 'choice',
      q: 'Mein Sohn hat Angst ___ Hunden.',
      options: ['vor', 'von', 'für'],
      answer: 0,
      explain: { ru: 'Angst vor + Dat (Hunden — Dativ мн. ч.).', en: 'Angst vor + Dat (Hunden is Dativ plural).' }
    },
    {
      id: 'g-anp-d4', kind: 'gap',
      q: 'Hast du Interesse ___ einem Sprachkurs?',
      hint: { ru: 'Предлог (не «к»!)', en: 'Preposition (not “in”!)' },
      answer: 'an',
      explain: { ru: 'das Interesse an + Dat.', en: 'das Interesse an + Dat.' }
    },
    {
      id: 'g-anp-d5', kind: 'choice',
      q: 'Bist du zufrieden ___ deiner neuen Wohnung?',
      options: ['mit', 'über', 'von'],
      answer: 0,
      explain: { ru: 'zufrieden mit + Dat.', en: 'zufrieden mit + Dat.' }
    },
    {
      id: 'g-anp-d6', kind: 'choice',
      q: 'Heute habe ich überhaupt keine Lust ___ Hausarbeit.',
      options: ['auf', 'an', 'für'],
      answer: 0,
      explain: { ru: 'die Lust auf + Akk.', en: 'die Lust auf + Akk.' }
    },
    {
      id: 'g-anp-d7', kind: 'gap',
      q: 'Morgen ist die Prüfung. Ich habe ein bisschen Angst ___. (da- + vor)',
      answer: 'davor',
      explain: { ru: 'Angst vor + ситуация → davor.', en: 'Angst vor + a situation → davor.' }
    },
    {
      id: 'g-anp-d8', kind: 'choice',
      q: '___ bist du so stolz? — Auf meinen neuen Job.',
      options: ['Worauf', 'Wofür', 'Wovon'],
      answer: 0,
      explain: { ru: 'stolz auf + вещь → вопрос worauf.', en: 'stolz auf + a thing → question word worauf.' }
    },
    {
      id: 'g-anp-d9', kind: 'choice',
      q: '___ ist Lisa verheiratet? — Mit einem Schweizer.',
      options: ['Mit wem', 'Womit', 'Mit wen'],
      answer: 0,
      explain: { ru: 'О человеке: предлог + wem (mit + Dat).', en: 'About a person: preposition + wem (mit + Dat).' }
    },
    {
      id: 'g-anp-d10', kind: 'choice',
      q: 'Wir sind alle gespannt ___, wie das Spiel ausgeht.',
      options: ['darauf', 'dafür', 'davon'],
      answer: 0,
      explain: { ru: 'gespannt auf → darauf перед придаточным.', en: 'gespannt auf → darauf before the clause.' }
    },
    {
      id: 'g-anp-d11', kind: 'choice',
      q: 'Wer ist ___ die Organisation der Feier verantwortlich?',
      options: ['für', 'über', 'an'],
      answer: 0,
      explain: { ru: 'verantwortlich für + Akk.', en: 'verantwortlich für + Akk.' }
    },
    {
      id: 'g-anp-d12', kind: 'gap',
      q: 'Viele junge Leute sind finanziell noch abhängig ___ ihren Eltern.',
      hint: { ru: 'Предлог', en: 'Preposition' },
      answer: 'von',
      explain: { ru: 'abhängig von + Dat.', en: 'abhängig von + Dat.' }
    },
    {
      id: 'g-anp-d13', kind: 'choice',
      q: 'Unsere Firma hat viel Erfahrung ___ solchen Projekten.',
      options: ['mit', 'von', 'über'],
      answer: 0,
      explain: { ru: 'die Erfahrung mit + Dat.', en: 'die Erfahrung mit + Dat.' }
    },
    {
      id: 'g-anp-d14', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я очень рад, что ты пришёл».', en: 'Build the sentence. “I’m very glad that you came.”' },
      tokens: ['Ich', 'bin', 'sehr', 'froh', 'darüber,', 'dass', 'du', 'gekommen', 'bist.'],
      answer: 'Ich bin sehr froh darüber, dass du gekommen bist.',
      explain: { ru: 'froh über → darüber перед dass-предложением; в придаточном bist в конце.', en: 'froh über → darüber before the dass-clause; bist goes last in the clause.' }
    }
  ]
});
