/* German GRAMMAR · Zweiteilige Konnektoren: sowohl … als auch, weder … noch, entweder … oder, nicht nur … sondern auch, zwar … aber, je … desto.
 * Explanations ru + en inline, original examples, 8 drills. */
GT.registerGrammar({
  id: 'konnektoren',
  title: { ru: 'Двойные союзы · Zweiteilige Konnektoren', en: 'Two-part connectors · Zweiteilige Konnektoren' },
  summary: {
    ru: 'Парные союзы («и … и», «ни … ни», «или … или», «чем … тем») связывают два аргумента — основа речи и эссе на B1–B2.',
    en: 'Paired connectors (“both … and”, “neither … nor”, “either … or”, “the … the”) link two ideas cleanly for B1–B2 speaking and writing.'
  },
  explanation: {
    ru: '<p>Двойные союзы состоят из двух частей, которые стоят перед сравниваемыми словами или частями предложения. Они делают аргументацию чёткой и структурированной.</p>' +
      '<p><b>1. Перечисление и отрицание:</b><br>' +
      '• <b>sowohl … als auch</b> («как …, так и …»): <em>Sie spricht sowohl Deutsch als auch Englisch.</em> Глагол во множественном числе, если соединяются два подлежащих: <em>Sowohl Tim als auch Mia sind da.</em><br>' +
      '• <b>nicht nur … sondern auch</b> («не только …, но и …»): усиливает вторую часть.<br>' +
      '• <b>weder … noch</b> («ни …, ни …»): <b>отрицание уже внутри!</b> Слово <em>nicht / kein</em> больше не добавляется: <em>Ich habe weder Zeit noch Lust</em> (не «keine Lust»!).</p>' +
      '<p><b>2. Выбор и уступка:</b><br>' +
      '• <b>entweder … oder</b> («либо …, либо …»): только один из двух вариантов.<br>' +
      '• <b>zwar … aber</b> («хотя / правда …, но …»): сначала признаём плюс или факт, потом даём ограничение. После <em>zwar</em> порядок обычный (или инверсия, если <em>zwar</em> в начале), перед <em>aber</em> запятая.</p>' +
      '<p><b>3. Пропорция (внимание на порядок слов!):</b><br>' +
      '• <b>je + сравнительная степень …, desto / umso + сравнительная степень …</b> («чем …, тем …»).<br>' +
      'Часть с <b>je</b> — это придаточное (глагол в <b>конце</b>!), часть с <b>desto / umso</b> — главное (глагол стоит <b>сразу после</b> прилагательного на месте 2): <em><b>Je</b> länger ich lerne, <b>desto</b> besser verstehe ich es.</em></p>',
    en: '<p>Two-part connectors pair two elements or clauses and make your speaking and B1–B2 writing much clearer.</p>' +
      '<p><b>1. Addition & negation:</b><br>' +
      '• <b>sowohl … als auch</b> (“both … and”): <em>Sie spricht sowohl Deutsch als auch Englisch.</em><br>' +
      '• <b>nicht nur … sondern auch</b> (“not only … but also”): puts extra focus on the second part.<br>' +
      '• <b>weder … noch</b> (“neither … nor”): <b>already negative</b> — never add <em>nicht</em> or <em>kein</em>: <em>Ich habe weder Zeit noch Lust.</em></p>' +
      '<p><b>2. Choice & concession:</b><br>' +
      '• <b>entweder … oder</b> (“either … or”).<br>' +
      '• <b>zwar … aber</b> (“admittedly …, but …” / “indeed …, however …”): concedes one point before contrasting it.</p>' +
      '<p><b>3. Proportional comparison (watch the word order!):</b><br>' +
      '• <b>je + comparative …, desto / umso + comparative …</b> (“the more …, the more …”).<br>' +
      'The <b>je</b>-clause is subordinate (verb at the <b>end</b>); in the <b>desto / umso</b>-clause the verb comes <b>immediately after</b> the comparative adjective: <em><b>Je</b> länger ich lerne, <b>desto</b> besser verstehe ich es.</em></p>'
  },
  tables: [
    {
      caption: { ru: 'Шесть главных двойных союзов', en: 'The six core two-part connectors' },
      head: { ru: ['Пара', 'Значение', 'Пример'], en: ['Pair', 'Meaning', 'Example'] },
      deCols: [0, 2],
      rows: {
        ru: [
          ['sowohl … als auch', 'как …, так и … (оба)', 'Wir bieten sowohl Kurse als auch Prüfungen an.'],
          ['nicht nur … sondern auch', 'не только …, но и …', 'Das Tool ist nicht nur schnell, sondern auch sicher.'],
          ['weder … noch', 'ни …, ни … (ни один)', 'Er trinkt weder Kaffee noch Tee.'],
          ['entweder … oder', 'либо …, либо … (один из двух)', 'Wir fahren entweder heute oder morgen ab.'],
          ['zwar … aber', 'правда / хотя …, но …', 'Die Wohnung ist zwar klein, aber sehr hell.'],
          ['je … desto (umso)', 'чем …, тем …', 'Je früher wir starten, desto schneller sind wir fertig.']
        ],
        en: [
          ['sowohl … als auch', 'both … and', 'Wir bieten sowohl Kurse als auch Prüfungen an.'],
          ['nicht nur … sondern auch', 'not only … but also', 'Das Tool ist nicht nur schnell, sondern auch sicher.'],
          ['weder … noch', 'neither … nor', 'Er trinkt weder Kaffee noch Tee.'],
          ['entweder … oder', 'either … or', 'Wir fahren entweder heute oder morgen ab.'],
          ['zwar … aber', 'admittedly …, but', 'Die Wohnung ist zwar klein, aber sehr hell.'],
          ['je … desto (umso)', 'the [comparative] …, the [comparative]', 'Je früher wir starten, desto schneller sind wir fertig.']
        ]
      }
    }
  ],
  examples: [
    { de: 'Im Homeoffice spart man [[sowohl]] Zeit [[als auch]] Fahrtkosten.', ru: 'На удалёнке экономишь как время, так и расходы на дорогу.', en: 'Working from home saves both time and commuting costs.' },
    { de: 'Der Zug hatte [[weder]] WLAN [[noch]] funktionierende Steckdosen.', ru: 'В поезде не было ни Wi-Fi, ни работающих розеток.', en: 'The train had neither Wi-Fi nor working power sockets.' },
    { de: 'Wir können [[entweder]] telefonieren [[oder]] uns kurz im Büro treffen.', ru: 'Мы можем либо созвониться, либо коротко встретиться в офисе.', en: 'We can either talk on the phone or meet briefly at the office.' },
    { de: 'Das Gerät war [[zwar]] günstig, [[aber]] die Batterie hält nicht lange.', ru: 'Устройство, правда, было дешёвым, но батарея держит недолго.', en: 'The device was admittedly cheap, but the battery doesn’t last long.' },
    { de: '[[Je]] mehr man spricht, [[desto]] sicherer wird man.', ru: 'Чем больше говоришь, тем увереннее становишься.', en: 'The more you speak, the more confident you become.' }
  ],
  pitfalls: [
    {
      title: { ru: 'Никакого nicht или kein при weder … noch', en: 'No nicht or kein with weder … noch' },
      html: {
        ru: 'В русском мы говорим «у меня нет ни времени, ни денег». В немецком двойное отрицание — ошибка: <span class="right">Ich habe weder Zeit noch Geld</span>, не <span class="wrong">keine Zeit</span>.',
        en: 'Since <em>weder … noch</em> is already negative, never add <em>nicht</em> or <em>kein</em>: <span class="right">Ich habe weder Zeit noch Geld</span>, not <span class="wrong">keine Zeit</span>.'
      }
    },
    {
      title: { ru: 'В je … desto глагол меняет место в каждой части', en: 'Verb position switches between je and desto' },
      html: {
        ru: 'В первой части (<em>je</em>) глагол <b>в конце</b>: <span class="right">Je mehr ich übe</span>. Во второй (<em>desto</em>) глагол <b>сразу после прилагательного</b>: <span class="right">desto leichter fällt es mir</span> (не <span class="wrong">desto leichter es mir fällt</span>).',
        en: 'In the <em>je</em>-part the verb goes at the <b>end</b>: <span class="right">Je mehr ich übe</span>. In the <em>desto</em>-part it comes <b>right after the comparative</b>: <span class="right">desto leichter fällt es mir</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-kon-d1', kind: 'choice',
      q: 'Ich habe leider ___ Zeit ___ Geld für eine lange Reise.',
      options: ['sowohl … als auch', 'weder … noch', 'entweder … oder'],
      answer: 1,
      explain: { ru: '«К сожалению, ни времени, ни денег» → weder … noch.', en: '“Unfortunately neither time nor money” → weder … noch.' }
    },
    {
      id: 'g-kon-d2', kind: 'choice',
      q: 'Das Hotel liegt nicht nur zentral, ___ ist auch sehr ruhig.',
      options: ['sondern', 'als auch', 'aber'],
      answer: 0,
      explain: { ru: 'Вторая часть пары nicht nur … — это sondern auch (здесь глагол сразу после sondern, или sondern es ist…).', en: 'The second half of nicht nur … is sondern (auch).' }
    },
    {
      id: 'g-kon-d3', kind: 'choice',
      q: 'Der Kurs ist ___ anstrengend, ___ er macht mir viel Spaß.',
      options: ['weder … noch', 'zwar … aber', 'je … desto'],
      answer: 1,
      explain: { ru: 'Уступка + контраст: «хотя и утомительный, но приносит радость» → zwar … aber.', en: 'Concession + contrast: “admittedly tiring, but fun” → zwar … aber.' }
    },
    {
      id: 'g-kon-d4', kind: 'choice',
      q: 'Wir brauchen ___ ein neues Passwort ___ eine Zwei-Faktor-App — beides zusammen schützt am besten.',
      options: ['weder … noch', 'entweder … oder', 'sowohl … als auch'],
      answer: 2,
      explain: { ru: 'Оба элемента вместе → sowohl … als auch.', en: 'Both items together → sowohl … als auch.' }
    },
    {
      id: 'g-kon-d5', kind: 'choice',
      q: 'Je kälter es draußen wird, ___.',
      options: ['desto länger ich schlafe gern', 'desto lieber bleibe ich zu Hause', 'umso ich bleibe lieber zu Hause'],
      answer: 1,
      explain: { ru: 'После desto стоит сравнительная степень (lieber), а сразу за ней — спрягаемый глагол (bleibe).', en: 'desto is followed by the comparative (lieber) and then immediately by the verb (bleibe).' }
    },
    {
      id: 'g-kon-d6', kind: 'gap',
      q: 'Wir können ___ mit dem Zug fahren oder das Auto nehmen.',
      hint: { ru: 'Первый элемент пары «либо …, либо …»', en: 'First part of “either … or”' },
      answer: 'entweder',
      explain: { ru: 'Пара выбора: entweder … oder.', en: 'Choice pair: entweder … oder.' }
    },
    {
      id: 'g-kon-d7', kind: 'gap',
      q: 'Sie arbeitet sowohl im Büro ___ auch manchmal im Café.',
      hint: { ru: 'Первое слово второй части: ... auch', en: 'First word of the second half: ... auch' },
      answer: 'als',
      explain: { ru: 'Устойчивая пара: sowohl … als auch.', en: 'Fixed pair: sowohl … als auch.' }
    },
    {
      id: 'g-kon-d8', kind: 'reorder',
      q: { ru: 'Соберите фразу. «Чем дольше мы ждём, тем дороже становятся билеты».', en: 'Build the sentence. “The longer we wait, the more expensive the tickets get.”' },
      tokens: ['Je länger wir warten,', 'desto teurer', 'werden', 'die Tickets.'],
      answer: 'Je länger wir warten, desto teurer werden die Tickets.',
      explain: { ru: 'В первой части глагол в конце (warten), во второй — сразу после desto teurer (werden).', en: 'Verb at the end of the je-clause (warten), and immediately after desto teurer in the second clause (werden).' }
    }
  ]
});
