/* English GRAMMAR · full lessons by level (B2: past modals, linking words, preferences & advice; C1 starter: inversion).
 * Explanations ru + de inline (English can be learnt from Russian or German). */
(function () {
  'use strict';
  var pack = GT._target;
  function lesson(topicName, page) {
    pack.config.TOPICS.grammar.push({ id: page.id, name: topicName, level: page.level });
    GT.registerGrammar(page);
  }

  /* ---------- B2 · Past modals ---------- */
  lesson('Should have, could have, needn’t have', {
    id: 'past-modals', level: 'B2',
    title: 'Past modals: should have, could have, needn’t have',
    summary: {
      ru: 'Упрёк, упущенная возможность и лишнее действие в прошлом: modal + have + V3.',
      de: 'Vorwurf, verpasste Möglichkeit und unnötige Handlung in der Vergangenheit: Modalverb + have + Partizip.'
    },
    explanation: {
      ru: '<p>Модальный глагол + <b>have + V3</b> оценивает прошлое, которое уже не изменить:</p>' +
        '<ul>' +
        '<li><b>should have done</b> — следовало сделать (но не сделал): <em>You <b>should have told</b> me.</em></li>' +
        '<li><b>shouldn’t have done</b> — не стоило (а сделал): <em>I <b>shouldn’t have eaten</b> so much.</em></li>' +
        '<li><b>could have done</b> — мог бы (была возможность): <em>We <b>could have won</b>.</em></li>' +
        '<li><b>needn’t have done</b> — сделал зря, не было нужды: <em>You <b>needn’t have brought</b> food — there was plenty.</em></li>' +
        '<li>Сравните: <b>didn’t need to do</b> — не нужно было, и обычно <b>не делал</b>.</li>' +
        '</ul>' +
        '<p>Выводы о прошлом (must / might / can’t have) — см. урок «Modals of deduction».</p>',
      de: '<p>Modalverb + <b>have + Partizip</b> bewertet Vergangenes, das sich nicht mehr ändern lässt (≈ Konjunktiv II der Vergangenheit):</p>' +
        '<ul>' +
        '<li><b>should have done</b> — hätte tun sollen: <em>You <b>should have told</b> me.</em> (Du hättest es mir sagen sollen.)</li>' +
        '<li><b>shouldn’t have done</b> — hätte nicht tun sollen: <em>I <b>shouldn’t have eaten</b> so much.</em></li>' +
        '<li><b>could have done</b> — hätte tun können: <em>We <b>could have won</b>.</em></li>' +
        '<li><b>needn’t have done</b> — hätte nicht tun müssen (hat es aber getan): <em>You <b>needn’t have brought</b> food.</em></li>' +
        '<li>Vergleiche: <b>didn’t need to do</b> — musste nicht, und hat es meist <b>nicht</b> getan.</li>' +
        '</ul>' +
        '<p>Schlussfolgerungen über die Vergangenheit (must / might / can’t have) — siehe „Modals of deduction“.</p>'
    },
    tables: [{
      caption: { ru: 'Значения', de: 'Bedeutungen' },
      head: { ru: ['Форма', 'Смысл', 'Пример'], de: ['Form', 'Bedeutung', 'Beispiel'] },
      deCols: [2],
      rows: {
        ru: [['should have + V3', 'упрёк / сожаление', 'I should have saved the file.'], ['could have + V3', 'упущенная возможность', 'You could have asked me.'], ['needn’t have + V3', 'сделал зря', 'I needn’t have hurried.'], ['didn’t need to', 'не было нужды (и не делал)', 'I didn’t need to hurry.']],
        de: [['should have + Partizip', 'Vorwurf / Bedauern', 'I should have saved the file.'], ['could have + Partizip', 'verpasste Chance', 'You could have asked me.'], ['needn’t have + Partizip', 'unnötig getan', 'I needn’t have hurried.'], ['didn’t need to', 'war nicht nötig (nicht getan)', 'I didn’t need to hurry.']]
      }
    }],
    examples: [
      { t: 'I [[should have backed up]] my files.', ru: 'Надо было сделать резервную копию.', de: 'Ich hätte meine Dateien sichern sollen.' },
      { t: 'You [[could have called]] — I was worried!', ru: 'Мог бы и позвонить — я волновалась!', de: 'Du hättest anrufen können — ich habe mir Sorgen gemacht!' },
      { t: 'We [[needn’t have booked]]; the restaurant was empty.', ru: 'Зря мы бронировали — ресторан был пуст.', de: 'Wir hätten nicht reservieren müssen; das Restaurant war leer.' },
      { t: 'He [[shouldn’t have said]] that in the meeting.', ru: 'Не стоило ему этого говорить на совещании.', de: 'Das hätte er im Meeting nicht sagen sollen.' }
    ],
    pitfalls: [
      { title: { ru: 'have, а не had', de: 'have, nicht had' },
        html: { ru: '<span class="wrong">should had done</span> → <span class="right">should have done</span>. После модального — всегда base form have.', de: '<span class="wrong">should had done</span> → <span class="right">should have done</span>. Nach dem Modalverb steht immer die Grundform have.' } },
      { title: { ru: 'Произношение', de: 'Aussprache' },
        html: { ru: 'В речи <em>should’ve, could’ve</em> звучат как «шудэв», поэтому люди пишут <span class="wrong">should of</span>. Пишите <span class="right">should have</span>.', de: 'Gesprochen klingt <em>should’ve</em> wie „should of“ — geschrieben aber immer <span class="right">should have</span>.' } }
    ],
    drills: [
      { id: 'en-g-pm-1', kind: 'choice', q: 'I failed the test. I ___ more.', options: ['should have studied', 'should study', 'must have studied'], answer: 0,
        explain: { ru: 'Сожаление о прошлом → should have + V3.', de: 'Bedauern über Vergangenes → should have + Partizip.' } },
      { id: 'en-g-pm-2', kind: 'choice', q: 'You ___ a taxi — I could have picked you up!', options: ['needn’t have taken', 'didn’t need take', 'mustn’t have taken'], answer: 0,
        explain: { ru: 'Сделал, но зря → needn’t have.', de: 'Getan, aber unnötig → needn’t have.' } },
      { id: 'en-g-pm-3', kind: 'gap', q: 'Why didn’t you ask? I ___ (could / help) you.', answer: 'could have helped',
        explain: { ru: 'Упущенная возможность → could have helped.', de: 'Verpasste Chance → could have helped.' } },
      { id: 'en-g-pm-4', kind: 'gap', q: 'He ___ (shouldn’t / drive) so fast. Now he has a fine.', answer: 'shouldn’t have driven', accepted: ["shouldn't have driven", 'should not have driven'],
        explain: { ru: 'Упрёк → shouldn’t have driven.', de: 'Vorwurf → shouldn’t have driven.' } }
    ]
  });

  /* ---------- B2 · Linking: contrast, condition, result ---------- */
  lesson('Linking: whereas, unless, provided that, therefore', {
    id: 'linking-b2', level: 'B2',
    title: 'Linking words for argument',
    summary: {
      ru: 'whereas, nevertheless, unless, provided that, as long as, otherwise, therefore, as a result — связный текст уровня B2.',
      de: 'whereas, nevertheless, unless, provided that, as long as, otherwise, therefore, as a result — zusammenhängende Texte auf B2.'
    },
    explanation: {
      ru: '<p>На B2 оценивают не только слова, но и <b>связность</b>. Важно знать, какое слово <b>соединяет два предложения</b> (союз) и какое <b>начинает новое</b> (наречие, обычно с запятой).</p>' +
        '<ul>' +
        '<li><b>Контраст:</b> <em>whereas / while</em> (союзы: сравнение двух фактов); <em>however, nevertheless</em> (наречия: «тем не менее»).</li>' +
        '<li><b>Условие:</b> <em>unless</em> = if … not; <em>provided (that) / as long as</em> = только при условии; <em>otherwise</em> = иначе.</li>' +
        '<li><b>Результат:</b> <em>so</em> (союз); <em>therefore, as a result, consequently</em> (наречия, формальнее).</li>' +
        '<li><b>Добавление:</b> <em>moreover, furthermore, in addition</em>; <em>besides</em> (разговорнее).</li>' +
        '</ul>',
      de: '<p>Auf B2 zählt nicht nur der Wortschatz, sondern auch der <b>Textzusammenhang</b>. Wichtig: Welches Wort <b>verbindet zwei Sätze</b> (Konjunktion) und welches <b>beginnt einen neuen Satz</b> (Adverb, meist mit Komma)?</p>' +
        '<ul>' +
        '<li><b>Gegensatz:</b> <em>whereas / while</em> (Konjunktionen: „während, wohingegen“); <em>however, nevertheless</em> (Adverbien: „jedoch, trotzdem“).</li>' +
        '<li><b>Bedingung:</b> <em>unless</em> = if … not („es sei denn“); <em>provided (that) / as long as</em> = „sofern, solange“; <em>otherwise</em> = „sonst“.</li>' +
        '<li><b>Folge:</b> <em>so</em> (Konjunktion); <em>therefore, as a result, consequently</em> („deshalb, folglich“).</li>' +
        '<li><b>Ergänzung:</b> <em>moreover, furthermore, in addition</em> („außerdem, zudem“).</li>' +
        '</ul>'
    },
    tables: [{
      caption: { ru: 'Союз или наречие', de: 'Konjunktion oder Adverb' },
      head: { ru: ['Значение', 'Соединяет (союз)', 'Новое предложение (наречие)'], de: ['Bedeutung', 'Verbindet (Konjunktion)', 'Neuer Satz (Adverb)'] },
      deCols: [1, 2],
      rows: {
        ru: [['контраст', 'whereas, while, although', 'However, Nevertheless,'], ['результат', 'so, so that', 'Therefore, As a result,'], ['условие', 'unless, provided that, as long as', 'Otherwise,'], ['добавление', 'and, as well as', 'Moreover, Furthermore,']],
        de: [['Gegensatz', 'whereas, while, although', 'However, Nevertheless,'], ['Folge', 'so, so that', 'Therefore, As a result,'], ['Bedingung', 'unless, provided that, as long as', 'Otherwise,'], ['Ergänzung', 'and, as well as', 'Moreover, Furthermore,']]
      }
    }],
    examples: [
      { t: 'Tom loves the city, [[whereas]] his wife prefers the countryside.', ru: 'Том любит город, тогда как его жена предпочитает деревню.', de: 'Tom liebt die Stadt, während seine Frau das Land vorzieht.' },
      { t: 'The plan was risky. [[Nevertheless]], we decided to try.', ru: 'План был рискованным. Тем не менее мы решили попробовать.', de: 'Der Plan war riskant. Trotzdem beschlossen wir, es zu versuchen.' },
      { t: 'You can borrow my car [[as long as]] you drive carefully.', ru: 'Можешь взять мою машину, если будешь ездить осторожно.', de: 'Du kannst mein Auto leihen, solange du vorsichtig fährst.' },
      { t: '[[Unless]] we leave now, we’ll miss the train.', ru: 'Если мы не выйдем сейчас, опоздаем на поезд.', de: 'Wenn wir nicht jetzt losgehen, verpassen wir den Zug.' },
      { t: 'Demand fell sharply. [[As a result]], the factory closed.', ru: 'Спрос резко упал. В результате завод закрылся.', de: 'Die Nachfrage sank stark. Infolgedessen schloss die Fabrik.' }
    ],
    pitfalls: [
      { title: { ru: 'unless уже содержит «не»', de: 'unless enthält schon „nicht“' },
        html: { ru: '<span class="wrong">Unless you don’t hurry, …</span> → <span class="right">Unless you hurry, …</span> = If you don’t hurry.', de: '<span class="wrong">Unless you don’t hurry, …</span> → <span class="right">Unless you hurry, …</span> = If you don’t hurry.' } },
      { title: { ru: 'however не соединяет', de: 'however verbindet keine Sätze' },
        html: { ru: '<span class="wrong">It was cheap, however it broke.</span> → <span class="right">It was cheap. However, it broke.</span> или <span class="right">It was cheap, but it broke.</span>', de: '<span class="wrong">It was cheap, however it broke.</span> → <span class="right">It was cheap. However, it broke.</span> oder <span class="right">It was cheap, but it broke.</span>' } }
    ],
    drills: [
      { id: 'en-g-lk-1', kind: 'choice', q: 'I’ll come to the party ___ I finish work early.', options: ['provided that', 'whereas', 'therefore'], answer: 0,
        explain: { ru: 'Условие → provided that.', de: 'Bedingung → provided that.' } },
      { id: 'en-g-lk-2', kind: 'choice', q: '___ you apologise, she won’t speak to you again.', options: ['Unless', 'Otherwise', 'Whereas'], answer: 0,
        explain: { ru: 'unless = if … not.', de: 'unless = if … not.' } },
      { id: 'en-g-lk-3', kind: 'choice', q: 'Save your work regularly. ___, you might lose everything.', options: ['Otherwise', 'Unless', 'Whereas'], answer: 0,
        explain: { ru: '«Иначе» в начале предложения → Otherwise.', de: '„Sonst“ am Satzanfang → Otherwise.' } },
      { id: 'en-g-lk-4', kind: 'choice', q: 'My sister is very organised, ___ I’m quite chaotic.', options: ['whereas', 'however', 'therefore'], answer: 0,
        explain: { ru: 'Сопоставление внутри одного предложения → whereas.', de: 'Gegenüberstellung im selben Satz → whereas.' } }
    ]
  });

  /* ---------- B2 · Preferences & advice ---------- */
  lesson('Would rather, had better, it’s time', {
    id: 'rather-better-time', level: 'B2',
    title: 'Would rather, had better, it’s (high) time',
    summary: {
      ru: 'I’d rather stay. I’d rather you stayed. You’d better go. It’s time we left. — после них особые формы.',
      de: 'I’d rather stay. I’d rather you stayed. You’d better go. It’s time we left. — danach stehen besondere Formen.'
    },
    explanation: {
      ru: '<ul>' +
        '<li><b>would rather + V</b> (то же лицо) — «я бы предпочёл»: <em>I’d rather <b>walk</b>.</em> Сравнение — <b>than</b>: <em>I’d rather walk than take the bus.</em></li>' +
        '<li><b>would rather + другое лицо + Past Simple</b> — «я бы хотел, чтобы ты…»: <em>I’d rather you <b>didn’t</b> smoke here.</em></li>' +
        '<li><b>had better + V</b> — настойчивый совет с намёком на последствия: <em>You’d better <b>leave</b> now, or you’ll be late.</em> Отрицание: <em>You’d better not.</em></li>' +
        '<li><b>It’s (high/about) time + подлежащее + Past Simple</b> — «давно пора»: <em>It’s time we <b>went</b> home.</em> Или <b>It’s time to + V</b>.</li>' +
        '</ul><p>Past Simple здесь не про прошлое — это «нереальное» настоящее, как в second conditional.</p>',
      de: '<ul>' +
        '<li><b>would rather + Verb</b> (gleiche Person) — „ich würde lieber“: <em>I’d rather <b>walk</b>.</em> Vergleich mit <b>than</b>: <em>I’d rather walk than take the bus.</em></li>' +
        '<li><b>would rather + andere Person + Past Simple</b> — „mir wäre lieber, du …“: <em>I’d rather you <b>didn’t</b> smoke here.</em></li>' +
        '<li><b>had better + Verb</b> — dringender Rat mit Folgen („du solltest lieber“): <em>You’d better <b>leave</b> now, or you’ll be late.</em> Verneint: <em>You’d better not.</em></li>' +
        '<li><b>It’s (high/about) time + Subjekt + Past Simple</b> — „es wird Zeit, dass …“: <em>It’s time we <b>went</b> home.</em> Oder <b>It’s time to + Verb</b>.</li>' +
        '</ul><p>Das Past Simple bezeichnet hier keine Vergangenheit, sondern Irrealität — wie der Konjunktiv II.</p>'
    },
    examples: [
      { t: 'I[[’d rather]] stay in tonight.', ru: 'Я бы лучше остался сегодня дома.', de: 'Ich bleibe heute Abend lieber zu Hause.' },
      { t: 'I’d rather you [[didn’t]] tell anyone.', ru: 'Я бы предпочёл, чтобы ты никому не говорил.', de: 'Mir wäre lieber, du würdest es niemandem sagen.' },
      { t: 'You[[’d better]] take an umbrella.', ru: 'Ты бы лучше взял зонт.', de: 'Du nimmst besser einen Schirm mit.' },
      { t: 'It’s high time we [[updated]] the website.', ru: 'Давно пора обновить сайт.', de: 'Es wird höchste Zeit, dass wir die Website aktualisieren.' }
    ],
    pitfalls: [
      { title: { ru: 'Без to', de: 'Ohne to' },
        html: { ru: '<span class="wrong">I’d rather to go</span>, <span class="wrong">You’d better to go</span> → <span class="right">I’d rather go</span>, <span class="right">You’d better go</span>.', de: '<span class="wrong">I’d rather to go</span>, <span class="wrong">You’d better to go</span> → <span class="right">I’d rather go</span>, <span class="right">You’d better go</span>.' } },
      { title: { ru: '’d = had в had better', de: '’d = had bei had better' },
        html: { ru: '<em>You’d better</em> = You <b>had</b> better (а не would). Отрицание — <span class="right">You’d better not</span>, не <span class="wrong">You hadn’t better</span>.', de: '<em>You’d better</em> = You <b>had</b> better (nicht would). Verneint: <span class="right">You’d better not</span>, nicht <span class="wrong">You hadn’t better</span>.' } }
    ],
    drills: [
      { id: 'en-g-rb-1', kind: 'choice', q: 'I’d rather you ___ me before coming.', options: ['called', 'call', 'to call'], answer: 0,
        explain: { ru: 'Другое лицо → Past Simple.', de: 'Andere Person → Past Simple.' } },
      { id: 'en-g-rb-2', kind: 'choice', q: 'You’d better ___ late again, or you’ll lose your job.', options: ['not be', 'not to be', 'don’t be'], answer: 0,
        explain: { ru: 'had better not + V.', de: 'had better not + Verb.' } },
      { id: 'en-g-rb-3', kind: 'gap', q: 'It’s time we ___ (go) — it’s nearly midnight.', answer: 'went',
        explain: { ru: 'It’s time + подлежащее + Past Simple.', de: 'It’s time + Subjekt + Past Simple.' } },
      { id: 'en-g-rb-4', kind: 'choice', q: 'I’d rather walk ___ wait for the bus.', options: ['than', 'that', 'to'], answer: 0,
        explain: { ru: 'Сравнение после would rather → than.', de: 'Vergleich nach would rather → than.' } }
    ]
  });

  /* ---------- C1 (starter) · Inversion ---------- */
  lesson('Inversion: Never have I …, Not only …', {
    id: 'inversion', level: 'C1',
    title: 'Inversion after negative and limiting adverbials',
    summary: {
      ru: 'Never have I seen… / Not only did she… / Hardly had we… — эмфатический порядок слов письменной и ораторской речи.',
      de: 'Never have I seen … / Not only did she … / Hardly had we … — betonte Wortstellung in Schrift und Rede.'
    },
    explanation: {
      ru: '<p>Если предложение начинается с <b>отрицательного или ограничительного</b> наречия, вспомогательный глагол встаёт <b>перед</b> подлежащим — как в вопросе. Это звучит торжественно и усиливает высказывание.</p>' +
        '<ul>' +
        '<li><b>Never / Rarely / Seldom</b>: <em><b>Never have I</b> seen such chaos.</em></li>' +
        '<li><b>Not only … but also</b>: <em><b>Not only did he</b> lie, but he also blamed me.</em></li>' +
        '<li><b>Hardly / Scarcely … when; No sooner … than</b>: <em><b>No sooner had we</b> arrived <b>than</b> it started to rain.</em></li>' +
        '<li><b>Only then / Only when / Not until</b>: <em><b>Only when</b> I got home <b>did I</b> realise.</em></li>' +
        '<li><b>Under no circumstances / On no account</b>: <em><b>Under no circumstances should you</b> share your password.</em></li>' +
        '</ul><p>Если вспомогательного нет — добавьте <b>do / does / did</b>.</p>',
      de: '<p>Beginnt ein Satz mit einem <b>verneinenden oder einschränkenden</b> Adverbial, steht das Hilfsverb <b>vor</b> dem Subjekt — wie in einer Frage. Das klingt gehoben und betont die Aussage. (Im Deutschen ist Inversion nach dem Vorfeld normal; im Englischen ist sie hier markiert.)</p>' +
        '<ul>' +
        '<li><b>Never / Rarely / Seldom</b>: <em><b>Never have I</b> seen such chaos.</em></li>' +
        '<li><b>Not only … but also</b>: <em><b>Not only did he</b> lie, but he also blamed me.</em></li>' +
        '<li><b>Hardly / Scarcely … when; No sooner … than</b>: <em><b>No sooner had we</b> arrived <b>than</b> it started to rain.</em></li>' +
        '<li><b>Only then / Only when / Not until</b>: <em><b>Only when</b> I got home <b>did I</b> realise.</em></li>' +
        '<li><b>Under no circumstances / On no account</b>: <em><b>Under no circumstances should you</b> share your password.</em></li>' +
        '</ul><p>Ohne Hilfsverb setzt man <b>do / does / did</b> ein.</p>'
    },
    examples: [
      { t: '[[Never have I]] heard such nonsense.', ru: 'Никогда я не слышал такой ерунды.', de: 'Noch nie habe ich so einen Unsinn gehört.' },
      { t: '[[Not only did]] she finish early, but she also helped the others.', ru: 'Она не только закончила раньше, но и помогла остальным.', de: 'Sie wurde nicht nur früher fertig, sondern half auch den anderen.' },
      { t: '[[No sooner had]] I sat down than the phone rang.', ru: 'Не успел я сесть, как зазвонил телефон.', de: 'Kaum hatte ich mich hingesetzt, klingelte das Telefon.' },
      { t: '[[Under no circumstances should]] you open this door.', ru: 'Ни при каких обстоятельствах не открывайте эту дверь.', de: 'Unter keinen Umständen sollten Sie diese Tür öffnen.' }
    ],
    pitfalls: [
      { title: { ru: 'Не забудьте do/did', de: 'do/did nicht vergessen' },
        html: { ru: '<span class="wrong">Not only he lied …</span> → <span class="right">Not only did he lie …</span>', de: '<span class="wrong">Not only he lied …</span> → <span class="right">Not only did he lie …</span>' } }
    ],
    drills: [
      { id: 'en-g-inv-1', kind: 'choice', q: 'Rarely ___ such a talented student.', options: ['have I met', 'I have met', 'I met'], answer: 0,
        explain: { ru: 'Rarely в начале → инверсия.', de: 'Rarely am Satzanfang → Inversion.' } },
      { id: 'en-g-inv-2', kind: 'choice', q: 'Not until the next day ___ the truth.', options: ['did we learn', 'we learned', 'we did learn'], answer: 0,
        explain: { ru: 'Not until … → did + подлежащее + V.', de: 'Not until … → did + Subjekt + Verb.' } },
      { id: 'en-g-inv-3', kind: 'gap', q: 'Hardly ___ we left the house when it began to snow. (have, past)', answer: 'had',
        explain: { ru: 'Hardly had + подлежащее + V3 … when.', de: 'Hardly had + Subjekt + Partizip … when.' } }
    ]
  });
})();
