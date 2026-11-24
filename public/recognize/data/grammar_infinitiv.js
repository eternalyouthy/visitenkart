/* German GRAMMAR · zu-Infinitiv, lassen, reflexive Verben, n-Deklination, Futur I.
 * Explanations ru + en inline, original examples, 8 drills. */
GT.registerGrammar({
  id: 'infinitiv',
  title: { ru: 'Инфинитив с zu, lassen, sich, n-склонение, Futur I · Infinitiv & Co.', en: 'zu-infinitive, lassen, reflexive, n-declension, Futur I' },
  summary: {
    ru: 'Пять важных тем B1: когда нужен инфинитив с zu, конструкции с lassen, возвратные глаголы, n-склонение и будущее время.',
    en: 'Five key B1 patterns: when to use zu before an infinitive, lassen, reflexive verbs, n-declension nouns and Futur I.'
  },
  explanation: {
    ru: '<p><b>1. Инфинитив с zu (и без него).</b> Если к глаголу (<em>versuchen, vergessen, beginnen, vorhaben, es ist wichtig</em>) добавляется второй глагол в инфинитиве, перед ним ставится <b>zu</b> в самом конце: <em>Ich versuche, pünktlich <b>zu kommen</b>.</em> В отделяемых глаголах <b>zu</b> встаёт внутрь: <em>Ich habe vergessen, dich <b>anzurufen</b></em>.<br>' +
      '<b>Три союза с инфинитивом:</b> <b>um … zu</b> (чтобы — только при одном подлежащем!), <b>ohne … zu</b> (не сделав чего-то), <b>(an)statt … zu</b> (вместо того чтобы).<br>' +
      '<b>Без zu</b> идут модальные глаголы (<em>können, müssen</em>), <em>werden, lassen, gehen, bleiben, sehen, hören</em>: <em>Ich muss heute arbeiten.</em></p>' +
      '<p><b>2. Глагол lassen</b> (<em>lässt, ließ, hat gelassen</em>): три частых значения — «оставлять» (<em>Ich lasse die Tasche hier</em>), «разрешать/позволять» (<em>Lass mich kurz schauen</em>) и «поручать / делать не своими руками» (<em>Ich lasse mein Fahrrad reparieren</em> — отдаю в ремонт).</p>' +
      '<p><b>3. Возвратные глаголы (sich).</b> В 3-м лице всегда <b>sich</b>, но в 1-м и 2-м различайте Akkusativ (обычно: <em>ich freue <b>mich</b>, du ärgerst <b>dich</b></em>) и Dativ (если уже есть прямое дополнение: <em>ich wasche <b>mir</b> die Hände, ich merke <b>mir</b> das Wort</em>).</p>' +
      '<p><b>4. n-склонение (n-Deklination).</b> Группа существительных <b>мужского рода</b> (часто одушевлённые на <em>-e, -ent, -ant, -ist, -oge</em>: <em>der Kollege, der Kunde, der Student, der Nachbar, der Mensch, der Name</em>) добавляет <b>-n / -en</b> во всех падежах, кроме Nominativ ед. ч.: <em>Ich frage <b>den Kollegen</b>. Ich helfe <b>dem Kunden</b>.</em></p>' +
      '<p><b>5. Futur I: werden + Infinitiv.</b> Для обычных планов на будущее с указанием времени немцы чаще используют Präsens (<em>Morgen fliege ich nach Berlin</em>). <b>Futur I</b> (<em>Es wird bald regnen</em>) нужен для прогнозов, обещаний и предположений.</p>',
    en: '<p><b>1. Infinitive with zu (and without).</b> After verbs and phrases like <em>versuchen, vergessen, vorhaben, es ist wichtig</em>, put <b>zu</b> before the final infinitive: <em>Ich versuche, pünktlich <b>zu kommen</b>.</em> With separable verbs, <b>zu</b> goes inside: <em><b>anzurufen</b></em>.<br>' +
      '<b>Three infinitive clauses:</b> <b>um … zu</b> (in order to — same subject only!), <b>ohne … zu</b> (without doing), <b>(an)statt … zu</b> (instead of).<br>' +
      '<b>No zu</b> after modals (<em>können, müssen</em>), <em>werden, lassen, gehen, bleiben, sehen, hören</em>: <em>Ich muss heute arbeiten.</em></p>' +
      '<p><b>2. lassen</b> (<em>lässt, ließ, hat gelassen</em>): “leave behind” (<em>die Tasche hier lassen</em>), “let / allow” (<em>Lass mich schauen</em>) and “have something done” (<em>Ich lasse das Auto reparieren</em>).</p>' +
      '<p><b>3. Reflexive verbs.</b> Usually Akkusativ (<em>ich freue <b>mich</b>, du beeilst <b>dich</b></em>), but Dativ (<em><b>mir / dir</b></em>) when there is already another direct object: <em>Ich wasche <b>mir</b> die Hände.</em></p>' +
      '<p><b>4. n-declension.</b> A group of <b>masculine</b> nouns (often people ending in <em>-e, -ent, -ant, -ist</em>, plus <em>der Mensch, der Nachbar, der Name</em>) add <b>-n / -en</b> in every case except Nominativ singular: <em>Ich frage <b>den Kollegen</b>. Ich spreche mit <b>dem Kunden</b>.</em></p>' +
      '<p><b>5. Futur I: werden + infinitive.</b> For scheduled plans Germans usually use Präsens (<em>Morgen fliege ich nach Berlin</em>). Use <b>Futur I</b> for predictions, promises and assumptions: <em>Das wird bestimmt klappen.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Инфинитивные обороты и n-склонение', en: 'Infinitive clauses & n-declension' },
      head: { ru: ['Тема', 'Модель', 'Пример'], en: ['Pattern', 'Structure', 'Example'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['Цель (одно подлежащее)', 'um … zu + Inf.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.'],
          ['Отсутствие действия', 'ohne … zu + Inf.', 'Er ging raus, ohne Tschüss zu sagen.'],
          ['Альтернатива', 'statt … zu + Inf.', 'Statt zu lernen, schaut er Serien.'],
          ['Отделяемый глагол + zu', 'Präfix + zu + Verb', 'Vergiss nicht, die Tür abzuschließen!'],
          ['Отдать в сервис (lassen)', 'lassen + Akk. + Inf.', 'Sie lässt sich die Haare schneiden.'],
          ['n-склонение (м. р.)', 'Nom. der Kollege → den/dem/des Kollegen', 'Ich habe dem Kollegen eine Mail geschickt.']
        ],
        en: [
          ['Purpose (same subject)', 'um … zu + Inf.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.'],
          ['Without doing', 'ohne … zu + Inf.', 'Er ging raus, ohne Tschüss zu sagen.'],
          ['Instead of doing', 'statt … zu + Inf.', 'Statt zu lernen, schaut er Serien.'],
          ['Separable verb + zu', 'prefix + zu + verb', 'Vergiss nicht, die Tür abzuschließen!'],
          ['Have something done', 'lassen + Akk. + Inf.', 'Sie lässt sich die Haare schneiden.'],
          ['n-declension (masc.)', 'Nom. der Kollege → den/dem/des Kollegen', 'Ich habe dem Kollegen eine Mail geschickt.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Es ist wichtig, regelmäßige Pausen [[zu machen]].', ru: 'Важно делать регулярные перерывы.', en: 'It’s important to take regular breaks.' },
    { de: 'Ich fahre mit dem Rad, [[um]] Geld [[zu sparen]].', ru: 'Я езжу на велосипеде, чтобы сэкономить деньги.', en: 'I cycle in order to save money.' },
    { de: 'Wir [[lassen]] den Vertrag von einer Anwältin [[prüfen]].', ru: 'Мы отдадим договор на проверку юристу.', en: 'We’re having the contract checked by a lawyer.' },
    { de: 'Kannst du [[dir]] diese Nummer leicht merken?', ru: 'Ты легко запоминаешь этот номер?', en: 'Can you remember this number easily?' },
    { de: 'Wir haben gestern mit [[dem neuen Kunden]] gesprochen.', ru: 'Мы вчера поговорили с новым клиентом.', en: 'We spoke with the new client yesterday.' },
    { de: 'Keine Sorge, das [[wird]] schon gut [[gehen]].', ru: 'Не переживай, всё пройдёт хорошо.', en: 'Don’t worry, it will turn out fine.' }
  ],
  pitfalls: [
    {
      title: { ru: 'um … zu только при одном подлежащем!', en: 'um … zu only with the same subject!' },
      html: {
        ru: 'Если субъекты разные («я звоню, чтобы <b>ты</b> не переживал»), нужен союз <b>damit</b>, а не <em>um … zu</em>: <span class="right">Ich rufe an, damit du dir keine Sorgen machst</span>.',
        en: 'When the subjects differ (“I’m calling so that <b>you</b> don’t worry”), use <b>damit</b> instead of <em>um … zu</em>: <span class="right">Ich rufe an, damit du dir keine Sorgen machst</span>.'
      }
    },
    {
      title: { ru: 'Никакого zu после модальных глаголов и lassen', en: 'No zu after modal verbs or lassen' },
      html: {
        ru: 'Правильно: <span class="right">Ich kann heute nicht kommen</span> и <span class="right">Ich lasse das Gerät reparieren</span> — не <span class="wrong">zu kommen</span> / <span class="wrong">zu reparieren</span>.',
        en: 'Always <span class="right">Ich kann heute nicht kommen</span> and <span class="right">Ich lasse das Gerät reparieren</span> — never <span class="wrong">zu kommen</span> / <span class="wrong">zu reparieren</span>.'
      }
    },
    {
      title: { ru: 'Помните про -n у der Kollege / der Kunde / der Student', en: 'Remember the -n on der Kollege / der Kunde / der Student' },
      html: {
        ru: 'После предлога или как прямое дополнение эти слова получают <em>-n</em>: <span class="right">Ich sehe den Studenten</span>, <span class="right">mit dem Kollegen</span> (не <span class="wrong">mit dem Kollege</span>).',
        en: 'In every case except Nominativ singular, these nouns add <em>-n</em>: <span class="right">Ich sehe den Studenten</span>, <span class="right">mit dem Kollegen</span> (not <span class="wrong">mit dem Kollege</span>).'
      }
    }
  ],
  drills: [
    {
      id: 'g-inf-d1', kind: 'choice',
      q: 'Ich habe leider vergessen, das Licht ___. (ausmachen)',
      options: ['zu ausmachen', 'auszumachen', 'ausmachen'],
      answer: 1,
      explain: { ru: 'ausmachen — отделяемый глагол, поэтому zu встаёт между приставкой и корнем: auszumachen.', en: 'ausmachen is separable, so zu goes between the prefix and the stem: auszumachen.' }
    },
    {
      id: 'g-inf-d2', kind: 'choice',
      q: 'Er lernt jeden Tag Vokabeln, ___ die Prüfung zu bestehen.',
      options: ['damit', 'um', 'ohne'],
      answer: 1,
      explain: { ru: 'Цель при одном подлежащем (он учит, чтобы он же сдал) → um … zu.', en: 'Purpose with the same subject → um … zu.' }
    },
    {
      id: 'g-inf-d3', kind: 'choice',
      q: 'Mein Laptop ist kaputt. Ich muss ihn morgen ___.',
      options: ['zu reparieren lassen', 'reparieren lassen', 'lassen zu reparieren'],
      answer: 1,
      explain: { ru: 'После модального глагола muss и после lassen частица zu не ставится.', en: 'Neither modal verbs (muss) nor lassen take zu.' }
    },
    {
      id: 'g-inf-d4', kind: 'choice',
      q: 'Ich muss ___ die neue Adresse unbedingt aufschreiben.',
      options: ['mich', 'mir', 'sich'],
      answer: 1,
      explain: { ru: 'Прямое дополнение уже есть (die neue Adresse), поэтому возвратное местоимение в Dativ: mir.', en: 'There is already a direct object (die neue Adresse), so use Dativ reflexive: mir.' }
    },
    {
      id: 'g-inf-d5', kind: 'choice',
      q: 'Das Team hat lange mit dem neuen ___ über die Anforderungen gesprochen.',
      options: ['Kunde', 'Kunden', 'Kundes'],
      answer: 1,
      explain: { ru: 'der Kunde относится к n-склонению: в Dativ (после mit) получаем -n → dem Kunden.', en: 'der Kunde is an n-declension noun: in Dativ (after mit) it adds -n → dem Kunden.' }
    },
    {
      id: 'g-inf-d6', kind: 'gap',
      q: 'Sie ist aus dem Büro gegangen, ___ sich zu verabschieden. (не попрощавшись)',
      hint: { ru: 'оборот «не сделав чего-то»: ... zu + Inf.', en: '“without doing”: ... zu + Inf.' },
      answer: 'ohne',
      explain: { ru: 'Отсутствие действия → ohne … zu.', en: 'Without doing something → ohne … zu.' }
    },
    {
      id: 'g-inf-d7', kind: 'gap',
      q: 'Der Himmel ist ganz grau — es ___ bald regnen. (Futur I)',
      hint: { ru: 'Форма werden для es', en: 'Form of werden for es' },
      answer: 'wird',
      explain: { ru: 'Прогноз в Futur I: es wird + Infinitiv (regnen).', en: 'Prediction in Futur I: es wird + infinitive (regnen).' }
    },
    {
      id: 'g-inf-d8', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Я помогаю коллеге с презентацией». (der Kollege → n-склонение)', en: 'Build the sentence. “I am helping the colleague with the presentation.”' },
      tokens: ['Ich', 'helfe', 'dem Kollegen', 'bei der', 'Präsentation.'],
      answer: 'Ich helfe dem Kollegen bei der Präsentation.',
      explain: { ru: 'helfen + Dativ, der Kollege получает окончание -n → dem Kollegen.', en: 'helfen + Dativ, and der Kollege adds -n → dem Kollegen.' }
    }
  ]
});
