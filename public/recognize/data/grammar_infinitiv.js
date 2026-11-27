/* German GRAMMAR · zu-Infinitiv, lassen, Futur I.
 * Reflexive verbs → grammar_reflexiv.js (drill g-inf-d4 moved there), n-Deklination → grammar_ndeklination.js
 * (g-inf-d5, g-inf-d8 moved there). Drill ids are permanent. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'infinitiv',
  title: { ru: 'Инфинитив с zu, lassen, Futur I · Infinitiv & Co.', en: 'zu-infinitive, lassen, Futur I' },
  summary: {
    ru: 'Когда перед инфинитивом нужно zu (и когда нет), um / ohne / statt … zu, три значения lassen и будущее время Futur I.',
    en: 'When to put zu before an infinitive (and when not), um / ohne / statt … zu, the three meanings of lassen, and Futur I.'
  },
  explanation: {
    ru: '<p><b>1. Инфинитив с zu (и без него).</b> Если к глаголу (<em>versuchen, vergessen, beginnen, vorhaben, es ist wichtig, Lust haben</em>) добавляется второй глагол в инфинитиве, перед ним ставится <b>zu</b> в самом конце: <em>Ich versuche, pünktlich <b>zu kommen</b>.</em> В отделяемых глаголах <b>zu</b> встаёт внутрь: <em>Ich habe vergessen, dich <b>anzurufen</b></em>.<br>' +
      '<b>Три союза с инфинитивом:</b> <b>um … zu</b> (чтобы — только при одном подлежащем!), <b>ohne … zu</b> (не сделав чего-то), <b>(an)statt … zu</b> (вместо того чтобы).<br>' +
      '<b>Без zu</b> идут модальные глаголы (<em>können, müssen</em>), <em>werden, lassen, gehen, bleiben, sehen, hören</em>: <em>Ich muss heute arbeiten.</em></p>' +
      '<p><b>2. Глагол lassen</b> (<em>lässt, ließ, hat gelassen</em>): три частых значения — «оставлять» (<em>Ich lasse die Tasche hier</em>), «разрешать / позволять» (<em>Lass mich kurz schauen</em>) и «поручать / делать не своими руками» (<em>Ich lasse mein Fahrrad reparieren</em> — отдаю в ремонт). Если делают «для себя» — с <em>sich</em> в Dativ: <em>Sie lässt <b>sich</b> die Haare schneiden.</em></p>' +
      '<p><b>3. Futur I: werden + Infinitiv.</b> Для обычных планов с указанием времени немцы чаще используют Präsens (<em>Morgen fliege ich nach Berlin</em>). <b>Futur I</b> (<em>Es wird bald regnen</em>) нужен для прогнозов, обещаний и предположений о настоящем (<em>Er wird wohl im Büro sein</em>). Завершённое будущее и предположения о прошлом — <a href="#/grammar/futur2">Futur II</a>.</p>' +
      '<p>Возвратные глаголы (<em>sich</em>) — в уроке <a href="#/grammar/reflexiv">Reflexive verbs</a>, n-склонение (<em>den Kollegen</em>) — в <a href="#/grammar/ndeklination">n-declension</a>. Инфинитив прошедшего времени (<em>getroffen zu haben</em>) — <a href="#/grammar/infinitiv_perfekt">Past infinitive</a> (B2).</p>',
    en: '<p><b>1. Infinitive with zu (and without).</b> After verbs and phrases like <em>versuchen, vergessen, vorhaben, es ist wichtig, Lust haben</em>, put <b>zu</b> before the final infinitive: <em>Ich versuche, pünktlich <b>zu kommen</b>.</em> With separable verbs, <b>zu</b> goes inside: <em><b>anzurufen</b></em>.<br>' +
      '<b>Three infinitive clauses:</b> <b>um … zu</b> (in order to — same subject only!), <b>ohne … zu</b> (without doing), <b>(an)statt … zu</b> (instead of).<br>' +
      '<b>No zu</b> after modals (<em>können, müssen</em>), <em>werden, lassen, gehen, bleiben, sehen, hören</em>: <em>Ich muss heute arbeiten.</em> English “to” after “want”, “have to” does not carry over.</p>' +
      '<p><b>2. lassen</b> (<em>lässt, ließ, hat gelassen</em>): “leave behind” (<em>die Tasche hier lassen</em>), “let / allow” (<em>Lass mich schauen</em>) and “have something done” (<em>Ich lasse das Auto reparieren</em>). For yourself, add a Dativ <em>sich</em>: <em>Sie lässt <b>sich</b> die Haare schneiden</em> — she has her hair cut.</p>' +
      '<p><b>3. Futur I: werden + infinitive.</b> For scheduled plans Germans usually use Präsens (<em>Morgen fliege ich nach Berlin</em>), where English uses “will” or “going to”. Use <b>Futur I</b> for predictions, promises and assumptions about the present: <em>Das wird bestimmt klappen. Er wird wohl im Büro sein.</em> “Will have done” is <a href="#/grammar/futur2">Futur II</a>.</p>' +
      '<p>Reflexive verbs (<em>sich</em>) are in <a href="#/grammar/reflexiv">Reflexive verbs</a>, the n-declension (<em>den Kollegen</em>) in <a href="#/grammar/ndeklination">n-declension</a>. The past infinitive (<em>getroffen zu haben</em>) is in <a href="#/grammar/infinitiv_perfekt">Past infinitive</a> (B2).</p>'
  },
  tables: [
    {
      caption: { ru: 'Инфинитивные обороты, lassen, Futur I', en: 'Infinitive clauses, lassen, Futur I' },
      head: { ru: ['Тема', 'Модель', 'Пример'], en: ['Pattern', 'Structure', 'Example'] },
      deCols: [1, 2],
      rows: {
        ru: [
          ['Цель (одно подлежащее)', 'um … zu + Inf.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.'],
          ['Отсутствие действия', 'ohne … zu + Inf.', 'Er ging raus, ohne Tschüss zu sagen.'],
          ['Альтернатива', 'statt … zu + Inf.', 'Statt zu lernen, schaut er Serien.'],
          ['Отделяемый глагол + zu', 'Präfix + zu + Verb', 'Vergiss nicht, die Tür abzuschließen!'],
          ['Отдать в сервис (lassen)', 'lassen + Akk. + Inf.', 'Ich lasse das Auto reparieren.'],
          ['Для себя (lassen + sich)', 'sich (Dat.) + Akk. + Inf. + lassen', 'Sie lässt sich die Haare schneiden.'],
          ['Прогноз, обещание', 'werden + Inf.', 'Ich werde dich morgen anrufen.']
        ],
        en: [
          ['Purpose (same subject)', 'um … zu + Inf.', 'Ich lerne Deutsch, um in Berlin zu arbeiten.'],
          ['Without doing', 'ohne … zu + Inf.', 'Er ging raus, ohne Tschüss zu sagen.'],
          ['Instead of doing', 'statt … zu + Inf.', 'Statt zu lernen, schaut er Serien.'],
          ['Separable verb + zu', 'prefix + zu + verb', 'Vergiss nicht, die Tür abzuschließen!'],
          ['Have something done', 'lassen + Akk. + Inf.', 'Ich lasse das Auto reparieren.'],
          ['Have something done to yourself', 'sich (Dat.) + Akk. + Inf. + lassen', 'Sie lässt sich die Haare schneiden.'],
          ['Prediction, promise', 'werden + Inf.', 'Ich werde dich morgen anrufen.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Es ist wichtig, regelmäßige Pausen [[zu machen]].', ru: 'Важно делать регулярные перерывы.', en: 'It’s important to take regular breaks.' },
    { de: 'Ich fahre mit dem Rad, [[um]] Geld [[zu sparen]].', ru: 'Я езжу на велосипеде, чтобы сэкономить деньги.', en: 'I cycle in order to save money.' },
    { de: 'Wir [[lassen]] den Vertrag von einer Anwältin [[prüfen]].', ru: 'Мы отдадим договор на проверку юристу.', en: 'We’re having the contract checked by a lawyer.' },
    { de: 'Hast du Lust, am Samstag ins Kino [[zu gehen]]?', ru: 'Хочешь в субботу пойти в кино?', en: 'Do you fancy going to the cinema on Saturday?' },
    { de: 'Er hat den Raum verlassen, [[ohne]] ein Wort [[zu sagen]].', ru: 'Он вышел из комнаты, не сказав ни слова.', en: 'He left the room without saying a word.' },
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
        en: 'Always <span class="right">Ich kann heute nicht kommen</span> and <span class="right">Ich lasse das Gerät reparieren</span> — never <span class="wrong">zu kommen</span> / <span class="wrong">zu reparieren</span>, even though English says “have to come”.'
      }
    },
    {
      title: { ru: 'zu внутри отделяемого глагола', en: 'zu goes inside separable verbs' },
      html: {
        ru: '<span class="wrong">zu anrufen</span>, <span class="wrong">zu aufräumen</span> → <span class="right">anzurufen</span>, <span class="right">aufzuräumen</span> — одним словом. У неотделяемых (<em>be-, ver-, er-</em>) zu стоит отдельно: <span class="right">zu verstehen</span>.',
        en: '<span class="wrong">zu anrufen</span>, <span class="wrong">zu aufräumen</span> → <span class="right">anzurufen</span>, <span class="right">aufzuräumen</span> — one word. With inseparable prefixes (<em>be-, ver-, er-</em>) zu stays separate: <span class="right">zu verstehen</span>.'
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
      id: 'g-inf-d6', kind: 'gap',
      q: { ru: 'Sie ist aus dem Büro gegangen, ___ sich zu verabschieden. (не попрощавшись)', en: 'Sie ist aus dem Büro gegangen, ___ sich zu verabschieden. (without saying goodbye)' },
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
      id: 'g-inf-d9', kind: 'choice',
      q: 'Hast du Lust, heute Abend ins Kino ___?',
      options: ['zu gehen', 'gehen', 'zu gehst'],
      answer: 0,
      explain: { ru: 'Lust haben + zu + инфинитив: zu gehen.', en: 'Lust haben + zu + infinitive: zu gehen.' }
    },
    {
      id: 'g-inf-d10', kind: 'choice',
      q: 'Ich lasse mir morgen beim Friseur die Haare ___.',
      options: ['schneiden', 'zu schneiden', 'geschnitten'],
      answer: 0,
      explain: { ru: 'lassen + инфинитив без zu: schneiden lassen.', en: 'lassen + infinitive without zu: schneiden lassen.' }
    },
    {
      id: 'g-inf-d11', kind: 'choice',
      q: '___ selbst zu kochen, bestellen wir heute Pizza.',
      options: ['Statt', 'Ohne', 'Um'],
      answer: 0,
      explain: { ru: '«Вместо того чтобы» → statt … zu.', en: '“Instead of” → statt … zu.' }
    },
    {
      id: 'g-inf-d12', kind: 'gap',
      q: 'Vergiss nicht, morgen den Müll ___! (rausbringen)',
      answer: 'rauszubringen',
      explain: { ru: 'Отделяемый глагол: raus + zu + bringen → rauszubringen.', en: 'Separable verb: raus + zu + bringen → rauszubringen.' }
    },
    {
      id: 'g-inf-d13', kind: 'choice',
      q: 'Keine Sorge, ich ___ dich morgen früh anrufen. Versprochen!',
      options: ['werde', 'wird', 'würde'],
      answer: 0,
      explain: { ru: 'Обещание → Futur I: ich werde + Infinitiv. würde — Konjunktiv II («позвонил бы»).', en: 'A promise → Futur I: ich werde + infinitive. würde is Konjunktiv II (“would call”).' }
    },
    {
      id: 'g-inf-d14', kind: 'reorder',
      q: { ru: 'Соберите фразу. «У меня нет времени убрать квартиру».', en: 'Build the sentence. “I have no time to tidy up the flat.”' },
      tokens: ['Ich', 'habe', 'keine Zeit,', 'die Wohnung', 'aufzuräumen.'],
      answer: 'Ich habe keine Zeit, die Wohnung aufzuräumen.',
      explain: { ru: 'Zeit haben + zu-инфинитив в конце; aufräumen отделяемый → aufzuräumen.', en: 'Zeit haben + zu-infinitive at the end; aufräumen is separable → aufzuräumen.' }
    }
  ]
});
