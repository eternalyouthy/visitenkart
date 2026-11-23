GT.registerGrammar({
  id: 'konjunktiv2',
  title: 'Konjunktiv II',
  summary: 'Желания, советы, вежливые просьбы и нереальные условия: würde, hätte, wäre, könnte.',
  explanation:
    '<p>Konjunktiv II — это немецкое сослагательное наклонение, аналог русского «бы». На B1 он нужен для четырёх вещей:</p>' +
    '<ul>' +
    '<li><b>Вежливые просьбы:</b> <em>Könnten Sie mir helfen?</em> <em>Ich hätte gern einen Kaffee.</em></li>' +
    '<li><b>Желания:</b> <em>Ich hätte gern mehr Zeit.</em> <em>Wenn ich doch schon B2 wäre!</em></li>' +
    '<li><b>Советы:</b> <em>Du solltest …</em> <em>An deiner Stelle würde ich …</em></li>' +
    '<li><b>Нереальные условия:</b> <em>Wenn ich Zeit hätte, würde ich mitkommen.</em></li>' +
    '</ul>' +
    '<p><b>Образование:</b> большинство глаголов — <b>würde + инфинитив</b> (<em>ich würde fahren</em>). Но у <b>haben, sein, werden</b> и <b>модальных глаголов</b> есть свои короткие формы: hätte, wäre, würde, könnte, müsste, dürfte, sollte, wollte. Используйте их вместо «würde haben». В речи часты ещё: <em>wüsste, käme, gäbe, ginge</em>.</p>' +
    '<p><b>Прошедшее (нереальное прошлое):</b> hätte/wäre + Partizip II: <em>Wenn ich das gewusst hätte, wäre ich früher gekommen.</em> — Если бы я это знал, я бы пришёл раньше.</p>',
  tables: [
    {
      caption: 'Основные формы',
      head: ['', 'haben', 'sein', 'werden', 'können'],
      deCols: [1, 2, 3, 4],
      rows: [
        ['ich', 'hätte', 'wäre', 'würde', 'könnte'],
        ['du', 'hättest', 'wärst', 'würdest', 'könntest'],
        ['er / sie / es', 'hätte', 'wäre', 'würde', 'könnte'],
        ['wir', 'hätten', 'wären', 'würden', 'könnten'],
        ['ihr', 'hättet', 'wärt', 'würdet', 'könntet'],
        ['sie / Sie', 'hätten', 'wären', 'würden', 'könnten']
      ]
    }
  ],
  examples: [
    { de: 'Ich [[hätte]] gern einen Termin am Vormittag.', ru: 'Я хотел бы записаться на утро.' },
    { de: '[[Könnten]] Sie mir bitte die Rechnung noch einmal schicken?', ru: 'Не могли бы вы ещё раз прислать мне счёт?' },
    { de: 'Wenn ich mehr Zeit [[hätte]], [[würde]] ich einen Python-Kurs machen.', ru: 'Если бы у меня было больше времени, я бы прошёл курс по Python.' },
    { de: 'An deiner Stelle [[würde]] ich das Passwort sofort ändern.', ru: 'На твоём месте я бы сразу сменил пароль.' },
    { de: 'Du [[solltest]] die Logs prüfen, bevor du den Server neu startest.', ru: 'Тебе стоит проверить логи, прежде чем перезапускать сервер.' },
    { de: 'Es [[wäre]] toll, wenn wir das bis Freitag schaffen [[würden]].', ru: 'Было бы здорово, если бы мы успели это к пятнице.' },
    { de: 'Wenn das Backup funktioniert [[hätte]], [[hätten]] wir keine Daten verloren.', ru: 'Если бы бэкап сработал, мы бы не потеряли данные.' }
  ],
  pitfalls: [
    { title: 'hatte ≠ hätte, war ≠ wäre', html: 'В русском «если бы у меня было время» стоит форма прошедшего времени, поэтому рука тянется к Präteritum: <span class="wrong">Wenn ich Zeit hatte, …</span> — это «когда у меня было время» (реальное прошлое). Нереальность = умлаут: <span class="right">Wenn ich Zeit hätte, …</span>. Один умлаут меняет смысл.' },
    { title: 'Konjunktiv нужен в обеих частях', html: 'В русском «бы» можно поставить один раз. В немецком сослагательное нужно в обеих частях: <span class="right">Wenn ich Zeit hätte, würde ich kommen.</span> А не <span class="wrong">Wenn ich Zeit hätte, ich komme.</span> И обратите внимание: после придаточного с wenn <b>глагол идёт первым</b>: «…, würde ich», а не «…, ich würde».' },
    { title: 'Без «würde» с haben / sein / модальными', html: '<span class="wrong">Ich würde gern mehr Geld haben.</span> звучит неуклюже. Используйте короткие формы: <span class="right">Ich hätte gern mehr Geld.</span> <span class="right">Ich könnte morgen kommen.</span>' },
    { title: '«Ich will» в магазине звучит грубо', html: 'Русское «я хочу» нейтрально, а немецкое «Ich will …» звучит для официанта как требование. Говорите <span class="right">Ich hätte gern …</span> или <span class="right">Ich möchte …</span>.' }
  ],
  drills: [
    { id: 'g-k2-d1', kind: 'gap', q: 'Wenn ich mehr Geld ___, würde ich eine größere Wohnung mieten. (haben)', answer: 'hätte', explain: 'Нереальное условие → Konjunktiv II от haben: hätte (не hatte).' },
    { id: 'g-k2-d2', kind: 'gap', q: '___ Sie mir bitte helfen? (können, вежливо)', answer: 'Könnten', explain: 'Вежливая просьба: Könnten Sie …?' },
    { id: 'g-k2-d3', kind: 'choice', q: 'An deiner Stelle ___ ich zum Arzt gehen.', options: ['würde', 'werde', 'wurde'], answer: 0, explain: 'Совет → würde + инфинитив. «wurde» — это Präteritum от werden.' },
    { id: 'g-k2-d4', kind: 'choice', q: 'Wenn ich du ___, würde ich kündigen.', options: ['war', 'wäre', 'bin'], answer: 1, explain: 'Нереальное: wäre. «Wenn ich du wäre» — будь я на твоём месте.' },
    { id: 'g-k2-d5', kind: 'reorder', q: 'Составьте: «Если бы у меня было время, я бы пришёл».', tokens: ['Wenn', 'ich', 'Zeit', 'hätte,', 'würde', 'ich', 'kommen.'], answer: 'Wenn ich Zeit hätte, würde ich kommen.', explain: 'Глагол в конце придаточного с wenn; главное предложение начинается с глагола.' },
    { id: 'g-k2-d6', kind: 'gap', q: 'Du ___ die Schwachstelle sofort melden. (sollen, совет)', answer: 'solltest', explain: 'Совет: du solltest …' },
    { id: 'g-k2-d7', kind: 'choice', q: 'В кафе: «___ einen Cappuccino, bitte.»', options: ['Ich will', 'Ich hätte gern', 'Ich habe'], answer: 1, explain: '«Ich hätte gern …» — вежливый стандарт для заказа.' },
    { id: 'g-k2-d8', kind: 'gap', q: 'Es ___ schön, wenn du am Wochenende kommen könntest. (sein)', answer: 'wäre', explain: 'Желание / нереальность: es wäre schön, wenn …' }
  ]
});
