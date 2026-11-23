/* German GRAMMAR · Kasus: the four cases, article forms and case-governing prepositions.
 * Explanations ru + en inline, original examples. */
GT.registerGrammar({
  id: 'kasus',
  title: { ru: 'Падежи и предлоги · Kasus', en: 'Cases and prepositions · Kasus' },
  summary: {
    ru: 'Четыре падежа видны прежде всего по артиклю. Предлог или глагол решает, какой падеж нужен.',
    en: 'You see the four cases mainly on the article. The preposition or the verb decides which case you need.'
  },
  explanation: {
    ru: '<p>В немецком четыре падежа: <b>Nominativ</b> (кто? что?), <b>Akkusativ</b> (кого? что?), <b>Dativ</b> (кому? где?) и <b>Genitiv</b> (чей?). Существительное само почти не меняется, поэтому падеж показывают <b>артикль</b> и окончание прилагательного. По-русски падеж слышен в конце слова, по-немецки — в начале группы: <em>der Mann → den Mann → dem Mann</em>.</p>' +
      '<p><b>Akkusativ меняет только мужской род:</b> <em>der → den</em>, <em>ein → einen</em>. Женский, средний род и множественное число в Akkusativ выглядят как в Nominativ. Поэтому <em>Ich sehe die Frau / das Kind</em>, но <em>Ich sehe den Mann</em>.</p>' +
      '<p><b>Dativ узнаётся по -m и -r:</b> <em>dem Mann, dem Kind, der Frau</em>. Во множественном числе <em>den</em>, и существительное получает <em>-n</em>: <em>mit den Kindern</em>. Dativ нужен для адресата (<em>Ich gebe dem Kollegen den Schlüssel</em>) и после многих предлогов.</p>' +
      '<p><b>Предлоги задают падеж.</b> Есть предлоги только с Akkusativ, только с Dativ и двойные (Wechselpräpositionen). Двойные отвечают на вопрос <em>wo?</em> (место, Dativ) или <em>wohin?</em> (направление, Akkusativ): <em>Das Buch liegt auf dem Tisch</em>, но <em>Ich lege das Buch auf den Tisch</em>.</p>' +
      '<p><b>Genitiv</b> в разговоре часто заменяют на <em>von + Dativ</em> (<em>das Auto von meinem Bruder</em>). В письменной речи и после <em>wegen, trotz, während, statt</em> он обычен.</p>' +
      '<p>Окончания прилагательных зависят от тех же падежей — см. урок <a href="#/grammar/adjektive">Adjective declension</a>.</p>',
    en: '<p>German has four cases: <b>Nominativ</b> (the subject), <b>Akkusativ</b> (the direct object), <b>Dativ</b> (the recipient, and location after some prepositions) and <b>Genitiv</b> (possession). The noun itself hardly changes, so the case shows on the <b>article</b> and the adjective ending: <em>der Mann → den Mann → dem Mann</em>.</p>' +
      '<p><b>Akkusativ only changes the masculine:</b> <em>der → den</em>, <em>ein → einen</em>. Feminine, neuter and plural look the same as in the Nominativ. So <em>Ich sehe die Frau / das Kind</em>, but <em>Ich sehe den Mann</em>.</p>' +
      '<p><b>Spot the Dativ by -m and -r:</b> <em>dem Mann, dem Kind, der Frau</em>. The plural is <em>den</em>, and the noun adds <em>-n</em>: <em>mit den Kindern</em>. Use the Dativ for the person who receives something (<em>Ich gebe dem Kollegen den Schlüssel</em>) and after many prepositions.</p>' +
      '<p><b>Prepositions decide the case.</b> Some always take the Akkusativ, some always the Dativ, and the two-way prepositions (Wechselpräpositionen) take either. They take the Dativ for <em>wo?</em> (location) and the Akkusativ for <em>wohin?</em> (direction): <em>Das Buch liegt auf dem Tisch</em>, but <em>Ich lege das Buch auf den Tisch</em>.</p>' +
      '<p>In speech, the <b>Genitiv</b> is often replaced by <em>von + Dativ</em> (<em>das Auto von meinem Bruder</em>). In writing and after <em>wegen, trotz, während, statt</em> it is normal.</p>' +
      '<p>Adjective endings follow the same cases — see <a href="#/grammar/adjektive">Adjective declension</a>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Определённый и неопределённый артикль', en: 'Definite and indefinite article' },
      head: { ru: ['Падеж', 'муж. р.', 'жен. р.', 'ср. р.', 'мн. ч.'], en: ['Case', 'Masculine', 'Feminine', 'Neuter', 'Plural'] },
      deCols: [1, 2, 3, 4],
      rows: {
        ru: [
          ['Nominativ', 'der / ein', 'die / eine', 'das / ein', 'die / keine'],
          ['Akkusativ', 'den / einen', 'die / eine', 'das / ein', 'die / keine'],
          ['Dativ', 'dem / einem', 'der / einer', 'dem / einem', 'den / keinen + -n'],
          ['Genitiv', 'des / eines + -(e)s', 'der / einer', 'des / eines + -(e)s', 'der / keiner']
        ],
        en: [
          ['Nominativ', 'der / ein', 'die / eine', 'das / ein', 'die / keine'],
          ['Akkusativ', 'den / einen', 'die / eine', 'das / ein', 'die / keine'],
          ['Dativ', 'dem / einem', 'der / einer', 'dem / einem', 'den / keinen + -n'],
          ['Genitiv', 'des / eines + -(e)s', 'der / einer', 'des / eines + -(e)s', 'der / keiner']
        ]
      }
    },
    {
      caption: { ru: 'Предлоги и падеж', en: 'Prepositions and their case' },
      head: { ru: ['Падеж', 'Предлоги', 'Пример'], en: ['Case', 'Prepositions', 'Example'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['Только Akkusativ', 'durch, für, gegen, ohne, um', 'Das Geschenk ist für meinen Vater.'],
          ['Только Dativ', 'aus, bei, mit, nach, seit, von, zu, gegenüber', 'Ich fahre mit dem Bus zur Arbeit.'],
          ['wo? → Dativ', 'an, auf, hinter, in, neben, über, unter, vor, zwischen', 'Der Schlüssel liegt auf dem Tisch.'],
          ['wohin? → Akkusativ', 'те же девять предлогов', 'Ich lege den Schlüssel auf den Tisch.'],
          ['Genitiv', 'wegen, trotz, während, statt', 'Wegen des Streiks fällt der Zug aus.']
        ],
        en: [
          ['Akkusativ only', 'durch, für, gegen, ohne, um', 'Das Geschenk ist für meinen Vater.'],
          ['Dativ only', 'aus, bei, mit, nach, seit, von, zu, gegenüber', 'Ich fahre mit dem Bus zur Arbeit.'],
          ['wo? → Dativ', 'an, auf, hinter, in, neben, über, unter, vor, zwischen', 'Der Schlüssel liegt auf dem Tisch.'],
          ['wohin? → Akkusativ', 'the same nine prepositions', 'Ich lege den Schlüssel auf den Tisch.'],
          ['Genitiv', 'wegen, trotz, während, statt', 'Wegen des Streiks fällt der Zug aus.']
        ]
      }
    },
    {
      caption: { ru: 'Слияния предлога и артикля', en: 'Preposition + article contractions' },
      head: { ru: ['Полная форма', 'Слияние', 'Пример'], en: ['Full form', 'Contraction', 'Example'] },
      deCols: [0, 1, 2],
      rows: {
        ru: [
          ['in dem', 'im', 'Ich bin im Büro.'],
          ['in das', 'ins', 'Wir gehen ins Kino.'],
          ['an dem', 'am', 'Wir treffen uns am Bahnhof.'],
          ['zu dem', 'zum', 'Ich muss zum Arzt.'],
          ['zu der', 'zur', 'Sie geht zur Bank.'],
          ['von dem', 'vom', 'Er kommt gerade vom Training.']
        ],
        en: [
          ['in dem', 'im', 'Ich bin im Büro.'],
          ['in das', 'ins', 'Wir gehen ins Kino.'],
          ['an dem', 'am', 'Wir treffen uns am Bahnhof.'],
          ['zu dem', 'zum', 'Ich muss zum Arzt.'],
          ['zu der', 'zur', 'Sie geht zur Bank.'],
          ['von dem', 'vom', 'Er kommt gerade vom Training.']
        ]
      }
    }
  ],
  examples: [
    { de: '[[Der]] Kollege bringt [[den]] Laptop mit.', ru: 'Коллега принесёт ноутбук.', en: 'The colleague is bringing the laptop.' },
    { de: 'Ich schenke [[meiner]] Schwester [[ein]] Buch.', ru: 'Я дарю сестре книгу.', en: 'I’m giving my sister a book.' },
    { de: 'Das Auto steht [[in der]] Garage.', ru: 'Машина стоит в гараже.', en: 'The car is in the garage.' },
    { de: 'Ich fahre das Auto [[in die]] Garage.', ru: 'Я ставлю машину в гараж.', en: 'I’m driving the car into the garage.' },
    { de: 'Seit [[einem]] Jahr wohne ich [[bei]] meinen Eltern.', ru: 'Уже год я живу у родителей.', en: 'I’ve been living with my parents for a year.' },
    { de: '[[Wegen des]] Regens bleiben wir zu Hause.', ru: 'Из-за дождя мы остаёмся дома.', en: 'We’re staying at home because of the rain.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Глаголы с Dativ и Akkusativ', en: 'Verbs that take the Dativ' },
      html: {
        ru: 'Часто совпадает с русским: <em>gefallen, helfen, danken, antworten</em> + Dativ (<span class="right">Das Kleid gefällt mir</span> — «мне нравится»). Ловушки там, где не совпадает: <em>anrufen</em> + Akkusativ (<span class="right">Ich rufe dich an</span>, не <span class="wrong">dir</span>, хотя «звоню тебе»), <em>gratulieren</em> + Dativ (<span class="right">Ich gratuliere dir</span>, хотя «поздравляю тебя»).',
        en: 'The person is in the Dativ after <em>gefallen, gehören, helfen, danken, antworten</em>: <span class="right">Das Kleid gefällt mir.</span> English uses a plain object here (“help him”), so learners often write <span class="wrong">Ich helfe ihn</span> instead of <span class="right">Ich helfe ihm</span>.'
      }
    },
    {
      title: { ru: 'Место или направление', en: 'Location or direction' },
      html: {
        ru: 'Пары глаголов подсказывают падеж: <em>liegen / legen, stehen / stellen, sitzen / setzen, hängen</em>. Первый описывает положение (Dativ), второй — действие с направлением (Akkusativ): <span class="right">Die Tasse steht auf dem Tisch</span>, <span class="right">Ich stelle die Tasse auf den Tisch</span>. Ср. русское «на столе / на стол».',
        en: 'The verb pairs help: <em>liegen / legen, stehen / stellen, sitzen / setzen, hängen</em>. The first describes a position (Dativ), the second a movement towards it (Akkusativ): <span class="right">Die Tasse steht auf dem Tisch</span>, <span class="right">Ich stelle die Tasse auf den Tisch</span>.'
      }
    },
    {
      title: { ru: 'Dativ множественного числа: -n', en: 'Dativ plural adds -n' },
      html: {
        ru: 'Во множественном числе Dativ существительное получает <em>-n</em>, если его ещё нет: <span class="right">mit den Kindern</span>, <span class="right">bei meinen Freunden</span>. Исключение — слова на <em>-s</em>: <em>mit den Autos</em>.',
        en: 'In the Dativ plural, the noun adds <em>-n</em> unless it already ends in one: <span class="right">mit den Kindern</span>, <span class="right">bei meinen Freunden</span>. Plurals in <em>-s</em> stay as they are: <em>mit den Autos</em>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-ka-d1', kind: 'choice',
      q: 'Ich sehe ___ Mann an der Haltestelle.',
      options: ['der', 'den', 'dem'],
      answer: 1,
      explain: { ru: 'Mann — прямое дополнение мужского рода, Akkusativ: den.', en: 'Mann is a masculine direct object, so Akkusativ: den.' }
    },
    {
      id: 'g-ka-d2', kind: 'choice',
      q: 'Ich fahre jeden Tag mit ___ Fahrrad.',
      options: ['das', 'dem', 'den'],
      answer: 1,
      explain: { ru: 'Mit всегда требует Dativ. Fahrrad среднего рода → dem.', en: 'Mit always takes the Dativ. Fahrrad is neuter → dem.' }
    },
    {
      id: 'g-ka-d3', kind: 'choice',
      q: 'Das Geschenk ist für ___ Mutter.',
      options: ['meine', 'meiner', 'meinem'],
      answer: 0,
      explain: { ru: 'Für требует Akkusativ. У женского рода Akkusativ совпадает с Nominativ: meine.', en: 'Für takes the Akkusativ. The feminine Akkusativ looks like the Nominativ: meine.' }
    },
    {
      id: 'g-ka-d4', kind: 'choice',
      q: 'Ich hänge das Bild an ___ Wand.',
      hint: { ru: 'Wohin или wo?', en: 'Wohin or wo?' },
      options: ['der', 'die', 'den'],
      answer: 1,
      explain: { ru: 'Hängen с дополнением — действие с направлением (wohin?), поэтому Akkusativ: an die Wand.', en: 'Hanging something somewhere is a direction (wohin?), so Akkusativ: an die Wand.' }
    },
    {
      id: 'g-ka-d5', kind: 'choice',
      q: 'Jetzt hängt das Bild an ___ Wand.',
      options: ['der', 'die', 'dem'],
      answer: 0,
      explain: { ru: 'Теперь картина висит — это положение (wo?), поэтому Dativ: an der Wand.', en: 'Now the picture is hanging there — a location (wo?), so Dativ: an der Wand.' }
    },
    {
      id: 'g-ka-d6', kind: 'gap',
      q: 'Kannst du ___ bitte helfen? (ich)',
      hint: { ru: 'Helfen требует Dativ.', en: 'Helfen takes the Dativ.' },
      answer: 'mir',
      explain: { ru: 'Helfen + Dativ: mir, dir, ihm, ihr, uns, euch, ihnen.', en: 'Helfen + Dativ: mir, dir, ihm, ihr, uns, euch, ihnen.' }
    },
    {
      id: 'g-ka-d7', kind: 'gap',
      q: 'Am Wochenende gehen wir ___ Kino. (in + das)',
      hint: { ru: 'Слейте предлог и артикль.', en: 'Contract the preposition and the article.' },
      answer: 'ins',
      explain: { ru: 'Направление (wohin?) → Akkusativ das; in + das = ins.', en: 'A direction (wohin?) → Akkusativ das; in + das = ins.' }
    },
    {
      id: 'g-ka-d8', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я дал коллеге ключ».', en: 'Build the sentence. “I gave the colleague the key.”' },
      tokens: ['Ich', 'habe', 'dem Kollegen', 'den Schlüssel', 'gegeben.'],
      answer: 'Ich habe dem Kollegen den Schlüssel gegeben.',
      explain: { ru: 'Кому? — dem Kollegen (Dativ), что? — den Schlüssel (Akkusativ). Обычный порядок: сначала Dativ, потом Akkusativ.', en: 'To whom? — dem Kollegen (Dativ); what? — den Schlüssel (Akkusativ). With two nouns, the Dativ usually comes first.' }
    }
  ]
});
