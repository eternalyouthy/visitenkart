/* German GRAMMAR · B1 · Indefinite pronouns: man, jemand / niemand, etwas / nichts (+ Neues), einer / keiner / welche.
 * Explanations ru + en inline, original examples. */
GT.registerGrammar({
  id: 'indefinitpronomen',
  level: 'B1',
  title: { ru: 'Неопределённые местоимения: man, jemand, etwas, einer', en: 'Indefinite pronouns: man, jemand, etwas, einer' },
  summary: {
    ru: 'man, jemand / niemand, etwas / nichts, einer / keiner / welche — и почему «никто ничего не знает» по-немецки с одним отрицанием.',
    en: 'man, jemand / niemand, etwas / nichts, einer / keiner / welche — and how German says “one”, “some” and “I have one”.'
  },
  explanation: {
    ru: '<p><b>man</b> — обобщённое лицо, как русское безличное «говорят, делают»: <em>In Deutschland <b>trennt man</b> den Müll</em> = «в Германии сортируют мусор». Глагол — в 3-м лице ед. ч. Пишется с одной n (<em>der Mann</em> — мужчина!). man есть только в Nominativ; в других падежах — <em>einen</em> (Akk) и <em>einem</em> (Dat): <em>Das kann <b>einem</b> helfen.</em> Повторяется снова <em>man</em>, а не <em>er</em>.</p>' +
      '<p><b>jemand / niemand</b> = кто-то / никто, <b>etwas / nichts</b> = что-то / ничего. etwas и nichts не склоняются. В разговоре <em>etwas</em> часто сокращают до <em>was</em>.</p>' +
      '<p><b>etwas / nichts / viel / wenig + прилагательное</b>: прилагательное пишется с заглавной и получает <b>-es</b>: <em>etwas <b>Neues</b>, nichts <b>Besonderes</b>, viel <b>Gutes</b></em> = «что-то новое, ничего особенного».</p>' +
      '<p><b>Одно отрицание.</b> По-русски «никто ничего не сказал» — три отрицания. По-немецки — одно: <em><b>Niemand</b> hat etwas gesagt.</em> / <em>Ich habe <b>nichts</b> gehört.</em></p>' +
      '<p><b>einer / eine / eins</b> заменяют существительное с ein: «есть у тебя ручка? — есть (одна)» → <em>Hast du einen Kuli? — Ja, ich habe <b>einen</b>.</em> Род и падеж — как у заменённого слова: <em>der Kuli → einen, die Tasche → eine, das Ladekabel → eins</em>. Отрицание — <b>keiner / keine / keins</b>. Для множественного числа и неисчисляемого — <b>welche</b>: <em>Brauchen wir Eier? — Nein, wir haben noch <b>welche</b>.</em></p>',
    en: '<p><b>man</b> is the general “you / one / people”: <em>In Deutschland <b>trennt man</b> den Müll</em> — “In Germany you separate your rubbish.” It takes the 3rd person singular verb and is spelt with one n (<em>der Mann</em> is “the man”!). It exists only in the Nominativ; other cases use <em>einen</em> (Akk) and <em>einem</em> (Dat): <em>Das kann <b>einem</b> helfen.</em> Refer back with <em>man</em> again, never <em>er</em> (English “one … he” doesn’t work).</p>' +
      '<p><b>jemand / niemand</b> = somebody / nobody, <b>etwas / nichts</b> = something / nothing. etwas and nichts never change. In speech <em>etwas</em> is often shortened to <em>was</em>.</p>' +
      '<p><b>etwas / nichts / viel / wenig + adjective</b>: the adjective is capitalised and takes <b>-es</b>: <em>etwas <b>Neues</b>, nichts <b>Besonderes</b>, viel <b>Gutes</b></em> = “something new, nothing special”.</p>' +
      '<p><b>einer / eine / eins</b> replace a noun with ein, like English “one”: <em>Hast du einen Kuli? — Ja, ich habe <b>einen</b>.</em> But German “one” agrees with the noun it replaces: <em>der Kuli → einen, die Tasche → eine, das Ladekabel → eins</em>. The negative is <b>keiner / keine / keins</b> (“none”). For plurals and uncountables, “some” is <b>welche</b>: <em>Brauchen wir Eier? — Nein, wir haben noch <b>welche</b>.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Обзор', en: 'Overview' },
      head: { ru: ['Слово', 'Значение', 'Пример'], en: ['Word', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['man (einen, einem)', 'обобщённое лицо', 'Hier darf man nicht rauchen.'],
          ['jemand / niemand', 'кто-то / никто', 'Hat jemand angerufen?'],
          ['etwas / nichts', 'что-то / ничего', 'Ich habe nichts gegessen.'],
          ['etwas / nichts + Adj. -es', 'что-то / ничего + прил.', 'Gibt es etwas Neues?'],
          ['einer / eine / eins', 'один (из), «есть»', 'Ich brauche einen Stift. Hast du einen?'],
          ['keiner / keine / keins', 'ни одного', 'Ich habe leider keinen.'],
          ['welche', 'какие-то, немного (мн. ч.)', 'Wir haben noch welche.']
        ],
        en: [
          ['man (einen, einem)', 'one, you, people', 'Hier darf man nicht rauchen.'],
          ['jemand / niemand', 'somebody / nobody', 'Hat jemand angerufen?'],
          ['etwas / nichts', 'something / nothing', 'Ich habe nichts gegessen.'],
          ['etwas / nichts + adj. -es', 'something / nothing + adj.', 'Gibt es etwas Neues?'],
          ['einer / eine / eins', 'one', 'Ich brauche einen Stift. Hast du einen?'],
          ['keiner / keine / keins', 'none, not one', 'Ich habe leider keinen.'],
          ['welche', 'some (plural / uncountable)', 'Wir haben noch welche.']
        ]
      }
    },
    {
      caption: { ru: 'einer / keiner по падежам', en: 'einer / keiner by case' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч.'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'] },
      deCols: [1, 2, 3, 4],
      rows: [
        ['Nominativ', 'einer / keiner', 'eine / keine', 'eins / keins', 'welche / keine'],
        ['Akkusativ', 'einen / keinen', 'eine / keine', 'eins / keins', 'welche / keine'],
        ['Dativ', 'einem / keinem', 'einer / keiner', 'einem / keinem', 'welchen / keinen']
      ]
    }
  ],
  examples: [
    { de: 'Wie sagt [[man]] das auf Deutsch?', ru: 'Как это сказать по-немецки?', en: 'How do you say that in German?' },
    { de: 'Hat [[jemand]] meinen Regenschirm gesehen?', ru: 'Кто-нибудь видел мой зонт?', en: 'Has anyone seen my umbrella?' },
    { de: '[[Niemand]] hat mir etwas gesagt.', ru: 'Никто мне ничего не сказал.', en: 'Nobody told me anything.' },
    { de: 'Im Fernsehen kommt heute [[nichts Interessantes]].', ru: 'По телевизору сегодня ничего интересного.', en: 'There’s nothing interesting on TV today.' },
    { de: 'Ich brauche ein Ladekabel. Hast du [[eins]]?', ru: 'Мне нужна зарядка. У тебя есть?', en: 'I need a charging cable. Have you got one?' },
    { de: 'Brauchen wir Tomaten? — Nein, wir haben noch [[welche]].', ru: 'Нам нужны помидоры? — Нет, у нас ещё есть.', en: 'Do we need tomatoes? — No, we’ve still got some.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Одно отрицание вместо трёх', en: 'man … man, not man … er' },
      html: {
        ru: '«Никто ничего не знает» → <span class="right">Niemand weiß etwas.</span> <span class="wrong">Niemand weiß nichts</span> — двойное отрицание, по-немецки это ошибка (или означает обратное). Так же: <span class="right">Ich habe nie etwas gesagt.</span>',
        en: 'English can say “if one is ill, he should stay at home”. German repeats man: <span class="right">Wenn man krank ist, bleibt man zu Hause.</span> Not <span class="wrong">…, bleibt er zu Hause.</span>'
      }
    },
    {
      title: { ru: '«Есть» в ответе = einen / eine / eins', en: '“one” must agree' },
      html: {
        ru: '«Есть у тебя ручка? — Есть» нельзя сказать одним глаголом: <span class="wrong">Ja, ich habe.</span> Нужно местоимение по роду: <span class="right">Ja, ich habe einen</span> (der Kuli), <span class="right">Ja, ich habe eine</span> (die Tasche), <span class="right">Ja, ich habe eins</span> (das Kabel).',
        en: '“Have you got a pen? — Yes, I have one.” German “one” takes the gender and case of the noun: <span class="right">Ja, ich habe einen</span> (der Kuli), <span class="right">eine</span> (die Tasche), <span class="right">eins</span> (das Kabel). <span class="wrong">Ja, ich habe ein</span> is wrong.'
      }
    },
    {
      title: { ru: 'etwas Neues — с заглавной и -es', en: 'etwas Neues — capital letter and -es' },
      html: {
        ru: '<span class="wrong">etwas neu</span>, <span class="wrong">nichts besonderes</span> → <span class="right">etwas Neues</span>, <span class="right">nichts Besonderes</span>. Прилагательное здесь становится существительным среднего рода.',
        en: '<span class="wrong">something new = etwas neu</span> → <span class="right">etwas Neues</span>; <span class="right">nichts Besonderes</span>. The adjective becomes a neuter noun, so it is capitalised and ends in -es.'
      }
    }
  ],
  drills: [
    {
      id: 'g-idf-d1', kind: 'choice',
      q: 'In Deutschland ___ man den Müll.',
      options: ['trennt', 'trennen', 'trennst'],
      answer: 0,
      explain: { ru: 'man + глагол в 3-м лице ед. ч.: man trennt.', en: 'man + 3rd person singular verb: man trennt.' }
    },
    {
      id: 'g-idf-d2', kind: 'choice',
      q: 'Hat ___ meinen Regenschirm gesehen?',
      options: ['jemand', 'man', 'etwas'],
      answer: 0,
      explain: { ru: '«Кто-нибудь видел?» — о конкретном неизвестном человеке → jemand.', en: '“Has anybody seen…?” — an unknown person → jemand.' }
    },
    {
      id: 'g-idf-d3', kind: 'choice',
      q: 'Ich habe meinen Kuli vergessen. Hast du ___?',
      options: ['einen', 'eins', 'eine'],
      answer: 0,
      explain: { ru: 'der Kuli, Akkusativ → einen.', en: 'der Kuli, Akkusativ → einen.' }
    },
    {
      id: 'g-idf-d4', kind: 'choice',
      q: 'Brauchen wir noch Eier? — Nein, wir haben noch ___.',
      options: ['welche', 'einen', 'eins'],
      answer: 0,
      explain: { ru: 'Множественное число (Eier) → welche.', en: 'Plural (Eier) → welche (“some”).' }
    },
    {
      id: 'g-idf-d5', kind: 'gap',
      q: 'Im Fernsehen kommt heute nichts ___. (interessant)',
      answer: 'Interessantes',
      explain: { ru: 'nichts + прилагательное с заглавной и -es: nichts Interessantes.', en: 'nichts + capitalised adjective with -es: nichts Interessantes.' }
    },
    {
      id: 'g-idf-d6', kind: 'choice',
      q: { ru: 'Выберите правильное предложение. «Никто ничего не сказал».', en: 'Choose the correct sentence. “Nobody said anything.”' },
      options: ['Niemand hat etwas gesagt.', 'Niemand hat nichts gesagt.', 'Niemand hat nicht etwas gesagt.'],
      answer: 0,
      explain: { ru: 'В немецком одно отрицание: niemand + etwas.', en: 'German uses one negation: niemand + etwas.' }
    },
    {
      id: 'g-idf-d7', kind: 'choice',
      q: 'Ich suche ein Ladekabel. Hast du ___?',
      options: ['eins', 'einen', 'eine'],
      answer: 0,
      explain: { ru: 'das Ladekabel → eins.', en: 'das Ladekabel → eins.' }
    },
    {
      id: 'g-idf-d8', kind: 'choice',
      q: 'Wenn ___ krank ist, bleibt ___ besser zu Hause.',
      options: ['man … man', 'man … er', 'jemand … man'],
      answer: 0,
      explain: { ru: 'man повторяется как man, его нельзя заменить на er.', en: 'man is repeated as man; it can’t be picked up by er.' }
    },
    {
      id: 'g-idf-d9', kind: 'choice',
      q: 'So eine App kann ___ im Alltag sehr helfen.',
      options: ['einem', 'man', 'einen'],
      answer: 0,
      explain: { ru: 'helfen + Dativ; Dativ от man → einem.', en: 'helfen + Dativ; the Dativ of man is einem.' }
    },
    {
      id: 'g-idf-d10', kind: 'choice',
      q: 'Ich habe geklingelt, aber es war ___ zu Hause.',
      options: ['niemand', 'nichts', 'man'],
      answer: 0,
      explain: { ru: 'О людях → niemand. nichts — о вещах.', en: 'For people → niemand. nichts is for things.' }
    },
    {
      id: 'g-idf-d11', kind: 'choice',
      q: 'Sind hier noch Plätze frei? — Nein, leider ist ___ mehr frei.',
      options: ['keiner', 'keins', 'keine'],
      answer: 0,
      explain: { ru: 'der Platz, Nominativ, глагол ist в ед. ч. → keiner.', en: 'der Platz, Nominativ, singular verb ist → keiner.' }
    },
    {
      id: 'g-idf-d12', kind: 'choice',
      q: 'Es war ganz still. Ich habe ___ gehört.',
      options: ['nichts', 'niemand', 'kein'],
      answer: 0,
      explain: { ru: '«Ничего не слышал» → nichts; kein нужно существительное после себя.', en: '“Heard nothing” → nichts; kein needs a noun after it.' }
    },
    {
      id: 'g-idf-d13', kind: 'reorder',
      q: { ru: 'Соберите вопрос. «Кто-нибудь что-нибудь для меня оставил?»', en: 'Build the question. “Has anyone dropped something off for me?”' },
      tokens: ['Hat', 'jemand', 'etwas', 'für mich', 'abgegeben?'],
      answer: 'Hat jemand etwas für mich abgegeben?',
      explain: { ru: 'Вопрос да/нет: глагол первым, Partizip II в конце.', en: 'Yes/no question: verb first, Partizip II at the end.' }
    }
  ]
});
