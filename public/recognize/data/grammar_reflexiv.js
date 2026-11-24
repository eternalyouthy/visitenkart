/* German GRAMMAR · B1 · Reflexive verbs: mich / mir, sich die Hände waschen, reciprocal uns / euch / sich.
 * Split out of grammar_infinitiv.js (drill g-inf-d4 moved here with its id). Explanations ru + en inline. */
GT.registerGrammar({
  id: 'reflexiv',
  level: 'B1',
  title: { ru: 'Возвратные глаголы · sich', en: 'Reflexive verbs · sich' },
  summary: {
    ru: 'mich или mir? sich waschen и sich die Hände waschen, взаимное «друг друга» и русские глаголы на -ся, которые по-немецки без sich.',
    en: 'mich or mir? sich waschen vs sich die Hände waschen, “each other”, and the many German verbs that need sich where English has none.'
  },
  explanation: {
    ru: '<p>Возвратное местоимение — это немецкое «себя / себе». Но в отличие от русского, у каждого лица своя форма: <em>ich wasche <b>mich</b>, du wäschst <b>dich</b>, er wäscht <b>sich</b></em>. Форма <b>sich</b> есть только в 3-м лице (er, sie, es, sie мн. ч.) и у вежливого <b>Sie</b>.</p>' +
      '<p><b>Akkusativ или Dativ?</b> Ровно как «себя» и «себе»:</p>' +
      '<ul>' +
      '<li>Других дополнений нет → <b>Akkusativ</b> (себя): <em>Ich wasche <b>mich</b>. Ich freue <b>mich</b>. Du beeilst <b>dich</b>.</em></li>' +
      '<li>Есть ещё прямое дополнение (что?) → <b>Dativ</b> (себе): <em>Ich wasche <b>mir</b> die Hände. Ich merke <b>mir</b> die Nummer. Kannst du <b>dir</b> das vorstellen?</em></li>' +
      '</ul>' +
      '<p>Различие видно только у <em>ich</em> и <em>du</em> (mich/mir, dich/dir). <em>uns, euch, sich</em> в обоих падежах одинаковы.</p>' +
      '<p><b>Части тела и одежда</b> — с Dativ и артиклем, без притяжательного: <em>Ich putze <b>mir die</b> Zähne</em> (не <em>meine Zähne</em>). Это та же модель, что «мыть себе руки».</p>' +
      '<p><b>Взаимное значение (друг друга):</b> во множественном числе <em>uns, euch, sich</em> часто значит «друг друга»: <em>Wir kennen <b>uns</b> seit Jahren. Die Nachbarn streiten <b>sich</b>.</em> После предлога — <em>miteinander, voneinander</em>: <em>Wir reden oft miteinander.</em></p>' +
      '<p><b>-ся ≠ sich.</b> Многие русские глаголы на -ся по-немецки без sich: <em>lernen</em> (учиться), <em>beginnen / anfangen</em> (начинаться), <em>enden</em> (заканчиваться), <em>gefallen</em> (нравиться), <em>lachen</em> (смеяться). И наоборот, у многих глаголов с sich в русском нет -ся: <em>sich ausruhen</em> (отдыхать), <em>sich setzen</em> (сесть), <em>sich beeilen</em> (спешить), <em>sich etwas merken</em> (запомнить), <em>sich erkälten</em> (простыть).</p>' +
      '<p><b>Место sich:</b> сразу после спрягаемого глагола: <em>Morgen treffen wir <b>uns</b> am Bahnhof.</em> Perfekt — с <b>haben</b>: <em>Ich habe <b>mich</b> beeilt.</em></p>',
    en: '<p>A reflexive pronoun points back to the subject, like “myself / yourself”. German uses it far more often than English, and it has a form for each person: <em>ich wasche <b>mich</b>, du wäschst <b>dich</b>, er wäscht <b>sich</b></em>. <b>sich</b> is only for the 3rd person (er, sie, es, plural sie) and polite <b>Sie</b>.</p>' +
      '<p><b>Akkusativ or Dativ?</b></p>' +
      '<ul>' +
      '<li>No other object → <b>Akkusativ</b>: <em>Ich wasche <b>mich</b>. Ich freue <b>mich</b>. Du beeilst <b>dich</b>.</em></li>' +
      '<li>There is another direct object (what?) → <b>Dativ</b>: <em>Ich wasche <b>mir</b> die Hände. Ich merke <b>mir</b> die Nummer. Kannst du <b>dir</b> das vorstellen?</em></li>' +
      '</ul>' +
      '<p>You only see the difference with <em>ich</em> and <em>du</em> (mich/mir, dich/dir). <em>uns, euch, sich</em> are the same in both cases.</p>' +
      '<p><b>Body parts and clothes:</b> German uses the Dativ reflexive + article, not a possessive: <em>Ich putze <b>mir die</b> Zähne</em> — literally “I brush to-me the teeth”, not <em>meine Zähne</em>.</p>' +
      '<p><b>Each other:</b> in the plural, <em>uns, euch, sich</em> often mean “each other”: <em>Wir kennen <b>uns</b> seit Jahren. Die Nachbarn streiten <b>sich</b>.</em> After a preposition use <em>miteinander, voneinander</em>: <em>Wir reden oft miteinander.</em></p>' +
      '<p><b>Verbs that need sich where English has none:</b> <em>sich beeilen</em> (hurry), <em>sich setzen</em> (sit down), <em>sich ausruhen / sich erholen</em> (rest, recover), <em>sich erinnern</em> (remember), <em>sich freuen</em> (be glad), <em>sich erkälten</em> (catch a cold), <em>sich entscheiden</em> (decide), <em>sich interessieren für</em> (be interested in).</p>' +
      '<p><b>Position:</b> right after the conjugated verb: <em>Morgen treffen wir <b>uns</b> am Bahnhof.</em> The Perfekt uses <b>haben</b>: <em>Ich habe <b>mich</b> beeilt.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Возвратные местоимения', en: 'Reflexive pronouns' },
      head: { ru: ['Лицо', 'Akkusativ (себя)', 'Dativ (себе)', 'Пример с Dativ'], en: ['Person', 'Akkusativ', 'Dativ', 'Dativ example'] },
      deCols: [0, 1, 2, 3],
      rows: [
        ['ich', 'mich', 'mir', 'Ich wasche mir die Hände.'],
        ['du', 'dich', 'dir', 'Merk dir die Adresse!'],
        ['er / sie / es', 'sich', 'sich', 'Er kauft sich ein Fahrrad.'],
        ['wir', 'uns', 'uns', 'Wir sehen uns den Film an.'],
        ['ihr', 'euch', 'euch', 'Habt ihr euch die Wohnung angesehen?'],
        ['sie / Sie', 'sich', 'sich', 'Nehmen Sie sich Zeit!']
      ]
    },
    {
      caption: { ru: 'Частые возвратные глаголы', en: 'Common reflexive verbs' },
      head: { ru: ['Глагол', 'Значение', 'Падеж sich'], en: ['Verb', 'Meaning', 'Case of sich'] },
      deCols: [0],
      rows: {
        ru: [
          ['sich beeilen', 'торопиться', 'Akk'],
          ['sich ausruhen / sich erholen', 'отдыхать, восстанавливаться', 'Akk'],
          ['sich freuen auf / über', 'радоваться (предстоящему / случившемуся)', 'Akk'],
          ['sich erkälten', 'простудиться', 'Akk'],
          ['sich setzen', 'сесть', 'Akk'],
          ['sich etwas merken', 'запомнить что-то', 'Dat'],
          ['sich etwas vorstellen', 'представить себе что-то', 'Dat'],
          ['sich etwas ansehen', 'посмотреть что-то (внимательно)', 'Dat'],
          ['sich etwas leisten', 'позволить себе (по деньгам)', 'Dat']
        ],
        en: [
          ['sich beeilen', 'to hurry', 'Akk'],
          ['sich ausruhen / sich erholen', 'to rest, to recover', 'Akk'],
          ['sich freuen auf / über', 'to look forward to / be glad about', 'Akk'],
          ['sich erkälten', 'to catch a cold', 'Akk'],
          ['sich setzen', 'to sit down', 'Akk'],
          ['sich etwas merken', 'to remember something (memorise)', 'Dat'],
          ['sich etwas vorstellen', 'to imagine something', 'Dat'],
          ['sich etwas ansehen', 'to have a look at something', 'Dat'],
          ['sich etwas leisten', 'to afford something', 'Dat']
        ]
      }
    }
  ],
  examples: [
    { de: 'Ich muss [[mich]] beeilen, sonst verpasse ich den Bus.', ru: 'Мне надо торопиться, иначе я опоздаю на автобус.', en: 'I have to hurry, otherwise I’ll miss the bus.' },
    { de: 'Wasch [[dir]] bitte die Hände, bevor wir essen.', ru: 'Помой, пожалуйста, руки перед едой.', en: 'Please wash your hands before we eat.' },
    { de: 'Kannst du [[dir]] diese Nummer leicht merken?', ru: 'Ты легко запомнишь этот номер?', en: 'Can you remember this number easily?' },
    { de: 'Wir kennen [[uns]] schon seit der Schulzeit.', ru: 'Мы знаем друг друга со школы.', en: 'We’ve known each other since school.' },
    { de: 'Nach der Reise haben wir [[uns]] zwei Tage erholt.', ru: 'После поездки мы два дня отдыхали.', en: 'After the trip we rested for two days.' },
    { de: 'So ein teures Auto können wir [[uns]] nicht leisten.', ru: 'Такую дорогую машину мы не можем себе позволить.', en: 'We can’t afford such an expensive car.' }
  ],
  pitfalls: [
    {
      title: { ru: '«себя» для всех лиц ≠ sich для всех лиц', en: 'sich is not for every person' },
      html: {
        ru: 'По-русски «себя» одно на всех: я мою себя, ты моешь себя. По-немецки sich — только 3-е лицо и Sie: <span class="wrong">Ich wasche sich.</span> → <span class="right">Ich wasche mich.</span> <span class="wrong">Wir treffen sich.</span> → <span class="right">Wir treffen uns.</span>',
        en: 'sich is only for er / sie / es / plural sie / Sie. With other persons use mich, dich, uns, euch: <span class="wrong">Wir treffen sich.</span> → <span class="right">Wir treffen uns.</span>'
      }
    },
    {
      title: { ru: '-ся не значит sich', en: 'German needs sich where English doesn’t' },
      html: {
        ru: '<span class="wrong">Der Film beginnt sich um acht.</span> → <span class="right">Der Film beginnt um acht.</span> <span class="wrong">Ich lerne mich Deutsch.</span> → <span class="right">Ich lerne Deutsch.</span> Проверяйте глагол по словарю, а не по русскому -ся.',
        en: 'English says “I hurry”, “I sit down”, “I remember”, “I relax”, but German needs the pronoun: <span class="wrong">Ich beeile.</span> → <span class="right">Ich beeile mich.</span> <span class="wrong">Erinnerst du an ihn?</span> → <span class="right">Erinnerst du dich an ihn?</span>'
      }
    },
    {
      title: { ru: 'Части тела: mir die Hände, не meine Hände', en: 'Body parts: mir die Hände, not meine Hände' },
      html: {
        ru: 'Как в русском «помыть себе руки»: <span class="right">Ich wasche mir die Hände.</span> <span class="wrong">Ich wasche meine Hände</span> понятно, но звучит не по-немецки, а <span class="wrong">Ich wasche mich die Hände</span> — ошибка: при прямом дополнении sich стоит в Dativ.',
        en: 'English uses a possessive (“wash my hands”), German a Dativ reflexive + article: <span class="right">Ich wasche mir die Hände.</span> <span class="right">Er putzt sich die Zähne.</span> <span class="wrong">Ich wasche meine Hände</span> is understood but sounds foreign.'
      }
    }
  ],
  drills: [
    {
      id: 'g-inf-d4', kind: 'choice',
      q: 'Ich muss ___ die neue Adresse unbedingt aufschreiben.',
      options: ['mich', 'mir', 'sich'],
      answer: 1,
      explain: { ru: 'Прямое дополнение уже есть (die neue Adresse), поэтому возвратное местоимение в Dativ: mir.', en: 'There is already a direct object (die neue Adresse), so use Dativ reflexive: mir.' }
    },
    {
      id: 'g-rf-d1', kind: 'choice',
      q: 'Beeil ___, der Zug fährt gleich ab!',
      options: ['dich', 'dir', 'sich'],
      answer: 0,
      explain: { ru: 'Императив для du, других дополнений нет → Akkusativ: dich.', en: 'Imperative for du, no other object → Akkusativ: dich.' }
    },
    {
      id: 'g-rf-d2', kind: 'choice',
      q: 'Ich wasche ___ vor dem Essen die Hände.',
      options: ['mir', 'mich', 'meine'],
      answer: 0,
      explain: { ru: 'die Hände — прямое дополнение, поэтому «себе» → Dativ mir.', en: 'die Hände is the direct object, so the reflexive is Dativ: mir.' }
    },
    {
      id: 'g-rf-d3', kind: 'choice',
      q: 'Wir kennen ___ schon seit der Schulzeit.',
      options: ['uns', 'euch', 'sich'],
      answer: 0,
      explain: { ru: 'Подлежащее wir → uns; здесь uns = «друг друга».', en: 'Subject wir → uns; here uns means “each other”.' }
    },
    {
      id: 'g-rf-d4', kind: 'gap',
      q: 'Bitte setzen Sie ___! (Sie, formal)',
      answer: 'sich',
      explain: { ru: 'Вежливое Sie получает sich (со строчной буквы).', en: 'Polite Sie takes sich (lower case).' }
    },
    {
      id: 'g-rf-d5', kind: 'choice',
      q: 'Kannst du ___ vorstellen, in Berlin zu wohnen?',
      options: ['dir', 'dich', 'sich'],
      answer: 0,
      explain: { ru: 'sich etwas vorstellen: «что» — это инфинитивная часть, поэтому «себе» → Dativ dir.', en: 'sich etwas vorstellen: the infinitive clause is the “what”, so the reflexive is Dativ: dir.' }
    },
    {
      id: 'g-rf-d6', kind: 'choice',
      q: 'Der Kurs ___ um 18 Uhr.',
      options: ['beginnt', 'beginnt sich', 'sich beginnt'],
      answer: 0,
      explain: { ru: 'Русское «начинается» с -ся, но beginnen не возвратный: Der Kurs beginnt.', en: 'beginnen is not reflexive: Der Kurs beginnt.' }
    },
    {
      id: 'g-rf-d7', kind: 'gap',
      q: 'Ich habe ___ gestern stark erkältet.',
      answer: 'mich',
      explain: { ru: 'sich erkälten, подлежащее ich, других дополнений нет → mich. Perfekt с haben.', en: 'sich erkälten with ich and no other object → mich. The Perfekt uses haben.' }
    },
    {
      id: 'g-rf-d8', kind: 'choice',
      q: 'Nach der langen Reise müsst ihr ___ gut erholen.',
      options: ['euch', 'sich', 'uns'],
      answer: 0,
      explain: { ru: 'Подлежащее ihr → euch.', en: 'Subject ihr → euch.' }
    },
    {
      id: 'g-rf-d9', kind: 'choice',
      q: 'Hast du ___ die Wohnung schon angesehen?',
      options: ['dir', 'dich', 'sich'],
      answer: 0,
      explain: { ru: 'die Wohnung — прямое дополнение (Akk), поэтому возвратное — Dativ: dir.', en: 'die Wohnung is the direct object, so the reflexive is Dativ: dir.' }
    },
    {
      id: 'g-rf-d10', kind: 'choice',
      q: 'Die Nachbarn streiten ___ schon wieder.',
      options: ['sich', 'ihnen', 'sie'],
      answer: 0,
      explain: { ru: 'Взаимное действие в 3-м лице мн. ч. → sich («друг с другом»).', en: 'Reciprocal action, 3rd person plural → sich (“with each other”).' }
    },
    {
      id: 'g-rf-d11', kind: 'choice',
      q: 'Meine Tochter ___ Deutsch an der Volkshochschule.',
      options: ['lernt', 'lernt sich', 'lehrt sich'],
      answer: 0,
      explain: { ru: '«Учится» — с -ся, но lernen не возвратный. lehren = «преподавать».', en: 'lernen is not reflexive. lehren means “to teach”.' }
    },
    {
      id: 'g-rf-d12', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я очень интересуюсь историей».', en: 'Build the sentence. “I’m very interested in history.”' },
      tokens: ['Ich', 'interessiere', 'mich', 'sehr', 'für Geschichte.'],
      answer: 'Ich interessiere mich sehr für Geschichte.',
      explain: { ru: 'sich interessieren für + Akk; mich стоит сразу после спрягаемого глагола.', en: 'sich interessieren für + Akk; mich comes right after the conjugated verb.' }
    }
  ]
});
