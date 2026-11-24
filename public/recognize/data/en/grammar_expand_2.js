/* English GRAMMAR · expansion part 2: perfect-continuous, past-perfect, future-perfect, third-conditional, wish,
 * reported-statements, reported-questions, relative-nondefining. Uses GT.enrichGrammar from grammar_expand_1.js. */
(function () {
  'use strict';
  var X = GT.enrichGrammar;

  X('perfect-continuous', {
    summary: { ru: 'have done — результат и количество; have been doing — процесс и длительность до сейчас.', de: 'have done — Ergebnis und Menge; have been doing — Vorgang und Dauer bis jetzt.' },
    ru: '<ul><li><b>Present Perfect Simple</b> (have + V3) — <b>результат</b>, сколько сделано: <em>I’ve written <b>three</b> emails.</em> <em>I’ve painted the room</em> (готово).</li>' +
      '<li><b>Present Perfect Continuous</b> (have been + -ing) — <b>процесс, длительность</b>, часто с <em>for / since / all day / how long</em>: <em>I’ve been writing emails <b>all morning</b>.</em> <em>I’ve been painting</em> (может быть не закончено; видны следы — краска на руках).</li>' +
      '<li><b>for</b> + отрезок (<em>for two hours</em>), <b>since</b> + начальная точка (<em>since 9 o’clock, since Monday</em>).</li>' +
      '<li>Глаголы состояния (<em>know, be, have</em> = владеть, <em>like, believe</em>) — только Simple: <em>I’ve known her for years.</em></li></ul>' +
      '<p>Русский переводит это настоящим временем («я работаю здесь три года»), но английский требует Perfect: <em>I’ve been working here for three years.</em></p>',
    de: '<ul><li><b>Present Perfect Simple</b> (have + 3. Form) — <b>Ergebnis</b>, Menge: <em>I’ve written <b>three</b> emails.</em></li>' +
      '<li><b>Present Perfect Continuous</b> (have been + -ing) — <b>Vorgang, Dauer</b>, oft mit <em>for / since / all day / how long</em>: <em>I’ve been writing emails <b>all morning</b>.</em></li>' +
      '<li><b>for</b> + Zeitraum (<em>for two hours</em>), <b>since</b> + Zeitpunkt (<em>since 9 o’clock</em>) — beide = „seit“.</li>' +
      '<li>Zustandsverben (<em>know, be, like, believe</em>) — nur Simple: <em>I’ve known her for years.</em></li></ul>' +
      '<p><b>Achtung:</b> Deutsch nimmt hier das Präsens („Ich arbeite seit drei Jahren hier“), Englisch nicht: <em>I’ve been working here for three years</em>, nicht <em>I work here since three years</em>.</p>',
    tables: [{ caption: { ru: 'Сравнение', de: 'Vergleich' }, head: { ru: ['Simple: результат', 'Continuous: процесс'], de: ['Simple: Ergebnis', 'Continuous: Vorgang'] }, deCols: [0, 1],
      rows: [['I’ve read 50 pages.', 'I’ve been reading for two hours.'], ['She’s fixed the bug.', 'She’s been fixing bugs all day.'], ['How many calls have you made?', 'How long have you been waiting?']] }],
    examples: [
      { t: 'How long [[have]] you [[been learning]] English?', ru: 'Как долго ты учишь английский?', de: 'Wie lange lernst du schon Englisch?' },
      { t: 'I[[’ve known]] him since school.', ru: 'Я знаю его со школы.', de: 'Ich kenne ihn seit der Schulzeit.' },
      { t: 'Your eyes are red. [[Have]] you [[been crying]]?', ru: 'У тебя красные глаза. Ты плакала?', de: 'Deine Augen sind rot. Hast du geweint?' }
    ],
    pitfalls: [
      { title: { ru: 'Настоящее вместо Perfect', de: 'Präsens statt Perfect' },
        html: { ru: '<span class="wrong">I live here for five years.</span> → <span class="right">I’ve lived / I’ve been living here for five years.</span>', de: '<span class="wrong">I live here since five years.</span> → <span class="right">I’ve lived here for five years.</span>' } },
      { title: { ru: 'for или since', de: 'for oder since' },
        html: { ru: '<span class="wrong">since two years</span> → <span class="right">for two years</span>; <span class="right">since 2022</span>.', de: '<span class="wrong">since two years</span> → <span class="right">for two years</span>; <span class="right">since 2022</span>.' } }
    ],
    drills: [
      { id: 'en-gx-ppc-1', kind: 'choice', q: 'I ___ this book three times.', options: ['have read', 'have been reading', 'am reading'], answer: 0,
        explain: { ru: 'Количество раз → Simple.', de: 'Anzahl → Simple.' } },
      { id: 'en-gx-ppc-2', kind: 'gap', q: 'We ___ (wait) for the bus for twenty minutes.', answer: 'have been waiting', accepted: ['’ve been waiting', "'ve been waiting"],
        explain: { ru: 'Длительность до сейчас → have been + -ing.', de: 'Dauer bis jetzt → have been + -ing.' } },
      { id: 'en-gx-ppc-3', kind: 'choice', q: 'She has worked here ___ 2019.', options: ['since', 'for', 'from'], answer: 0,
        explain: { ru: 'Начальная точка → since.', de: 'Zeitpunkt → since.' } }
    ]
  });

  X('past-perfect', {
    summary: { ru: 'had + V3 — событие, которое произошло раньше другого прошедшего.', de: 'had + 3. Form — ein Ereignis vor einem anderen vergangenen Ereignis (= Plusquamperfekt).' },
    ru: '<p><b>Past Perfect</b> (had + V3) переносит точку отсчёта в прошлое: «к тому моменту уже…».</p><ul>' +
      '<li><em>When I got to the station, the train <b>had left</b>.</em> — поезд ушёл раньше.</li>' +
      '<li>Сравните: <em>When I got to the station, the train <b>left</b>.</em> — поезд ушёл, когда я пришёл (сразу после).</li>' +
      '<li>Частые сигналы: <em>already, just, never… before, by the time, after, before</em>.</li>' +
      '<li>Также в косвенной речи (<em>She said she had seen it</em>) и в Third Conditional (<em>If I had known…</em>).</li>' +
      '<li><b>Past Perfect Continuous</b> (had been + -ing) — длительность до момента в прошлом: <em>I <b>had been waiting</b> for an hour when he arrived.</em></li></ul>',
    de: '<p><b>Past Perfect</b> (had + 3. Form) entspricht dem Plusquamperfekt: „war schon …/hatte schon …“.</p><ul>' +
      '<li><em>When I got to the station, the train <b>had left</b>.</em> — Der Zug war schon abgefahren.</li>' +
      '<li>Vergleich: <em>When I got to the station, the train <b>left</b>.</em> — Der Zug fuhr ab, als ich ankam.</li>' +
      '<li>Signale: <em>already, just, never… before, by the time, after, before</em>.</li>' +
      '<li>Auch in indirekter Rede und im Third Conditional (<em>If I had known…</em>).</li>' +
      '<li><b>Past Perfect Continuous</b> (had been + -ing) — Dauer bis zu einem Punkt in der Vergangenheit: <em>I <b>had been waiting</b> for an hour when he arrived.</em></li></ul>' +
      '<p>Anders als im Deutschen braucht Englisch immer <b>had</b> — auch bei Bewegungsverben (<em>had gone</em>, nicht „was gone“).</p>',
    examples: [
      { t: 'I [[had]] never [[flown]] before that trip.', ru: 'До той поездки я никогда не летал.', de: 'Vor dieser Reise war ich noch nie geflogen.' },
      { t: 'By the time we arrived, the guests [[had gone]] home.', ru: 'К нашему приезду гости уже разошлись.', de: 'Als wir ankamen, waren die Gäste schon nach Hause gegangen.' },
      { t: 'She was tired because she [[had been working]] all night.', ru: 'Она устала, потому что работала всю ночь.', de: 'Sie war müde, weil sie die ganze Nacht gearbeitet hatte.' }
    ],
    pitfalls: [
      { title: { ru: 'had, а не was', de: 'had, nicht was' },
        html: { ru: '<span class="wrong">The train was left.</span> → <span class="right">The train had left.</span> Past Perfect всегда строится с had, даже для глаголов движения.', de: '<span class="wrong">The train was left.</span> → <span class="right">The train had left.</span> Im Englischen immer had, auch wo Deutsch „war“ nimmt.' } }
    ],
    drills: [
      { id: 'en-gx-pp-1', kind: 'choice', q: 'I didn’t recognise the town because it ___ so much.', options: ['had changed', 'has changed', 'was changing'], answer: 0,
        explain: { ru: 'Изменился раньше, чем я приехал → had changed.', de: 'Vorher verändert → had changed.' } },
      { id: 'en-gx-pp-2', kind: 'gap', q: 'When I got home, I realised I ___ (leave) my keys at work.', answer: 'had left', accepted: ['’d left', "'d left"],
        explain: { ru: 'Оставил раньше, чем понял → had left.', de: 'Vorher liegen lassen → had left.' } },
      { id: 'en-gx-pp-3', kind: 'gap', q: 'They ___ (wait) for two hours when the doctor finally came.', answer: 'had been waiting',
        explain: { ru: 'Длительность до момента в прошлом → had been + -ing.', de: 'Dauer bis zu einem Zeitpunkt → had been + -ing.' } }
    ]
  });

  X('future-perfect', {
    summary: { ru: 'will be doing — процесс в момент будущего; will have done — завершится к моменту будущего.', de: 'will be doing — Vorgang zu einem Zeitpunkt in der Zukunft; will have done — bis dahin abgeschlossen.' },
    ru: '<ul><li><b>Future Continuous</b> (will be + -ing) — действие <b>будет идти</b> в определённый момент: <em>This time tomorrow I<b>’ll be lying</b> on a beach.</em> Также вежливый вопрос о планах: <em><b>Will</b> you <b>be using</b> the car tonight?</em></li>' +
      '<li><b>Future Perfect</b> (will have + V3) — действие <b>завершится к</b> моменту в будущем; сигнал — <b>by</b>: <em><b>By</b> 2030, we <b>will have finished</b> the project.</em></li>' +
      '<li><b>Future Perfect Continuous</b> (will have been + -ing) — сколько будет длиться к моменту: <em>In June I<b>’ll have been working</b> here for ten years.</em></li></ul>' +
      '<p><b>by</b> = «не позже чем», <b>until</b> = «до (всё это время)».</p>',
    de: '<ul><li><b>Future Continuous</b> (will be + -ing) — etwas <b>wird gerade ablaufen</b>: <em>This time tomorrow I<b>’ll be lying</b> on a beach.</em> Auch höfliche Frage nach Plänen: <em><b>Will</b> you <b>be using</b> the car tonight?</em></li>' +
      '<li><b>Future Perfect</b> (will have + 3. Form) = Futur II — <b>bis</b> zu einem Zeitpunkt abgeschlossen; Signal <b>by</b>: <em><b>By</b> 2030, we <b>will have finished</b> the project.</em></li>' +
      '<li><b>Future Perfect Continuous</b> — Dauer bis zu einem Zeitpunkt: <em>In June I<b>’ll have been working</b> here for ten years.</em></li></ul>' +
      '<p><b>by</b> = „bis spätestens“, <b>until</b> = „bis (die ganze Zeit)“.</p>',
    examples: [
      { t: 'Don’t call at eight — I[[’ll be having]] dinner.', ru: 'Не звони в восемь — я буду ужинать.', de: 'Ruf nicht um acht an — da esse ich gerade zu Abend.' },
      { t: 'By the end of the year, I [[will have saved]] €5,000.', ru: 'К концу года я накоплю 5000 евро.', de: 'Bis Ende des Jahres werde ich 5000 € gespart haben.' }
    ],
    pitfalls: [
      { title: { ru: 'by ≠ until', de: 'by ≠ until' },
        html: { ru: '<span class="right">Finish it by Friday</span> — не позже пятницы. <span class="right">Wait until Friday</span> — ждать всё время до пятницы.', de: '<span class="right">Finish it by Friday</span> — bis spätestens Freitag. <span class="right">Wait until Friday</span> — bis Freitag (die ganze Zeit).' } }
    ],
    drills: [
      { id: 'en-gx-fp-1', kind: 'choice', q: 'By the time you get here, I ___ dinner.', options: ['will have cooked', 'will cook', 'am cooking'], answer: 0,
        explain: { ru: 'Завершится к моменту → will have + V3.', de: 'Bis dahin fertig → will have + 3. Form.' } },
      { id: 'en-gx-fp-2', kind: 'choice', q: 'The report must be ready ___ Monday morning.', options: ['by', 'until', 'since'], answer: 0,
        explain: { ru: 'Крайний срок → by.', de: 'Frist → by.' } },
      { id: 'en-gx-fp-3', kind: 'gap', q: 'This time next week we ___ (fly) to Tokyo.', answer: 'will be flying', accepted: ['’ll be flying', "'ll be flying"],
        explain: { ru: 'Процесс в момент будущего → will be + -ing.', de: 'Vorgang zu einem Zeitpunkt → will be + -ing.' } }
    ]
  });

  X('third-conditional', {
    summary: { ru: 'If + had done, would have done — нереальное прошлое; смешанные: прошлое условие → результат сейчас.', de: 'If + had done, would have done — irreale Vergangenheit; gemischt: vergangene Bedingung → Folge jetzt.' },
    ru: '<ul><li><b>Third Conditional</b>: <b>if + Past Perfect, would have + V3</b>. Прошлое, которое уже не изменить: <em>If I <b>had left</b> earlier, I <b>wouldn’t have missed</b> the train.</em></li>' +
      '<li>Вместо would: <b>could have / might have</b> — <em>We could have won if…</em></li>' +
      '<li><b>Mixed</b> (прошлое → настоящее): <em>If I <b>had taken</b> that job, I <b>would be</b> rich now.</em></li>' +
      '<li><b>Mixed</b> (настоящее → прошлое): <em>If I <b>were</b> more organised, I <b>wouldn’t have lost</b> the file.</em> (я в целом неорганизован)</li>' +
      '<li>Официальная инверсия без if: <em><b>Had I known</b>, I would have helped.</em></li></ul>',
    de: '<ul><li><b>Third Conditional</b>: <b>if + Past Perfect, would have + 3. Form</b> = Konjunktiv II der Vergangenheit: <em>If I <b>had left</b> earlier, I <b>wouldn’t have missed</b> the train.</em> (Wenn ich früher losgegangen wäre, …)</li>' +
      '<li>Statt would: <b>could have / might have</b> — <em>We could have won if…</em></li>' +
      '<li><b>Mixed</b> (Vergangenheit → Gegenwart): <em>If I <b>had taken</b> that job, I <b>would be</b> rich now.</em></li>' +
      '<li><b>Mixed</b> (Gegenwart → Vergangenheit): <em>If I <b>were</b> more organised, I <b>wouldn’t have lost</b> the file.</em></li>' +
      '<li>Formell ohne if: <em><b>Had I known</b>, I would have helped.</em> (Hätte ich das gewusst, …)</li></ul>',
    examples: [
      { t: 'If you [[had told]] me, I [[would have helped]].', ru: 'Если бы ты мне сказал, я бы помог.', de: 'Wenn du es mir gesagt hättest, hätte ich geholfen.' },
      { t: 'If she [[hadn’t missed]] the flight, she [[would be]] here now.', ru: 'Если бы она не опоздала на рейс, она была бы сейчас здесь.', de: 'Wenn sie den Flug nicht verpasst hätte, wäre sie jetzt hier.' }
    ],
    pitfalls: [
      { title: { ru: 'would have в if-части', de: 'would have im if-Satz' },
        html: { ru: '<span class="wrong">If I would have known, …</span> → <span class="right">If I had known, …</span>', de: '<span class="wrong">If I would have known, …</span> → <span class="right">If I had known, …</span> (trotz „wenn ich gewusst hätte“)' } }
    ],
    drills: [
      { id: 'en-gx-tc-1', kind: 'choice', q: 'If we ___ the map, we wouldn’t have got lost.', options: ['had checked', 'would have checked', 'checked'], answer: 0,
        explain: { ru: 'if + Past Perfect.', de: 'if + Past Perfect.' } },
      { id: 'en-gx-tc-2', kind: 'gap', q: 'If I had studied medicine, I ___ (be) a doctor now.', answer: 'would be', accepted: ['’d be', "'d be"],
        explain: { ru: 'Прошлое условие → результат сейчас: would be.', de: 'Vergangene Bedingung → Folge jetzt: would be.' } },
      { id: 'en-gx-tc-3', kind: 'gap', q: 'She ___ (could / win) if she hadn’t fallen.', answer: 'could have won',
        explain: { ru: 'could have + V3.', de: 'could have + 3. Form.' } }
    ]
  });

  X('wish', {
    summary: { ru: 'wish + Past — жаль, что сейчас не так; wish + Past Perfect — жаль, что тогда; wish + would — раздражение.', de: 'wish + Past — schade, dass es jetzt nicht so ist; wish + Past Perfect — schade, dass es damals …; wish + would — Ärger.' },
    ru: '<ul><li><b>wish + Past Simple</b> — сожаление о <b>настоящем</b>: <em>I wish I <b>knew</b> the answer.</em> (жаль, что не знаю) С be — <b>were</b>: <em>I wish I were taller.</em></li>' +
      '<li><b>wish + Past Perfect</b> — сожаление о <b>прошлом</b>: <em>I wish I <b>hadn’t said</b> that.</em></li>' +
      '<li><b>wish + would</b> — раздражение чужим поведением, желание перемен: <em>I wish you <b>would stop</b> interrupting.</em> О себе так не говорят: вместо «I wish I would…» — <em>I wish I could…</em> или <em>I wish I had…</em>.</li>' +
      '<li><b>wish + could</b> — о способности: <em>I wish I <b>could</b> swim.</em></li>' +
      '<li><b>If only</b> — то же, но эмоциональнее: <em>If only I had listened!</em></li></ul>' +
      '<p>Для реальных надежд — <b>hope</b>: <em>I hope you <b>feel</b> better soon.</em></p>',
    de: '<ul><li><b>wish + Past Simple</b> — Bedauern über die <b>Gegenwart</b> (= ich wünschte, …): <em>I wish I <b>knew</b> the answer.</em> Mit be: <b>were</b>.</li>' +
      '<li><b>wish + Past Perfect</b> — Bedauern über die <b>Vergangenheit</b>: <em>I wish I <b>hadn’t said</b> that.</em> (Hätte ich das bloß nicht gesagt.)</li>' +
      '<li><b>wish + would</b> — Ärger über andere: <em>I wish you <b>would stop</b> interrupting.</em> Nicht über sich selbst.</li>' +
      '<li><b>wish + could</b> — Fähigkeit: <em>I wish I <b>could</b> swim.</em></li>' +
      '<li><b>If only</b> = „wenn … doch nur“.</li></ul>' +
      '<p>Reale Hoffnung: <b>hope</b>: <em>I hope you feel better soon.</em> (Nicht <em>I wish you feel better</em>.)</p>',
    tables: [{ caption: { ru: 'Формы', de: 'Formen' }, head: { ru: ['О чём', 'Форма', 'Пример'], de: ['Worüber', 'Form', 'Beispiel'] }, deCols: [2],
      rows: { ru: [['настоящее', 'wish + Past', 'I wish I had a car.'], ['прошлое', 'wish + Past Perfect', 'I wish I had studied harder.'], ['чужое поведение', 'wish + would', 'I wish he would call.'], ['способность', 'wish + could', 'I wish I could come.']],
              de: [['Gegenwart', 'wish + Past', 'I wish I had a car.'], ['Vergangenheit', 'wish + Past Perfect', 'I wish I had studied harder.'], ['Verhalten anderer', 'wish + would', 'I wish he would call.'], ['Fähigkeit', 'wish + could', 'I wish I could come.']] } }],
    examples: [
      { t: 'I wish I [[lived]] closer to the sea.', ru: 'Жаль, что я не живу ближе к морю.', de: 'Ich wünschte, ich würde näher am Meer wohnen.' },
      { t: 'If only we [[had booked]] earlier!', ru: 'Если бы мы только забронировали раньше!', de: 'Hätten wir doch nur früher gebucht!' },
      { t: 'I wish it [[would]] stop raining.', ru: 'Хоть бы дождь перестал.', de: 'Wenn es doch nur aufhören würde zu regnen.' }
    ],
    pitfalls: [
      { title: { ru: 'wish ≠ hope', de: 'wish ≠ hope' },
        html: { ru: '<span class="wrong">I wish you have a nice trip.</span> → <span class="right">I hope you have a nice trip.</span> (Но: <em>I wish you a nice trip</em> — пожелание с существительным.)', de: '<span class="wrong">I wish you have a nice trip.</span> → <span class="right">I hope you have a nice trip.</span> (Aber: <em>I wish you a nice trip</em>.)' } }
    ],
    drills: [
      { id: 'en-gx-wish-1', kind: 'choice', q: 'I wish I ___ more time to read.', options: ['had', 'have', 'would have'], answer: 0,
        explain: { ru: 'Настоящее → Past Simple.', de: 'Gegenwart → Past Simple.' } },
      { id: 'en-gx-wish-2', kind: 'gap', q: 'I wish I ___ (not / eat) so much last night.', answer: 'hadn’t eaten', accepted: ["hadn't eaten", 'had not eaten'],
        explain: { ru: 'Прошлое → Past Perfect.', de: 'Vergangenheit → Past Perfect.' } },
      { id: 'en-gx-wish-3', kind: 'choice', q: 'I ___ you get the job!', options: ['hope', 'wish'], answer: 0,
        explain: { ru: 'Реальная надежда → hope.', de: 'Reale Hoffnung → hope.' } }
    ]
  });

  X('reported-statements', {
    summary: { ru: 'После said/told время сдвигается назад; say something, tell someone.', de: 'Nach said/told rückt die Zeit zurück; say something, tell someone.' },
    ru: '<p>Если глагол сообщения в прошлом (<em>said, told</em>), время в придаточном обычно <b>сдвигается на шаг назад</b> (backshift):</p>' +
      '<ul><li>Present → Past: <em>“I’m tired.” → She said she <b>was</b> tired.</em></li>' +
      '<li>Past / Present Perfect → Past Perfect: <em>“I saw it.” → He said he <b>had seen</b> it.</em></li>' +
      '<li>will → would, can → could, may → might, must → had to (или must).</li>' +
      '<li>Местоимения и время: <em>today → that day, tomorrow → the next day, here → there, ago → before</em>.</li></ul>' +
      '<p><b>say</b> + что-то (<em>said that…</em>, <em>said to me</em>); <b>tell</b> + кому (<em>told me that…</em>). Если сказанное всё ещё верно, сдвиг можно не делать: <em>He said he <b>lives</b> in Berlin.</em></p>',
    de: '<p>Steht das Redeverb in der Vergangenheit (<em>said, told</em>), rückt die Zeit im Nebensatz <b>einen Schritt zurück</b> (backshift) — im Deutschen nimmt man dafür den Konjunktiv I:</p>' +
      '<ul><li>Present → Past: <em>“I’m tired.” → She said she <b>was</b> tired.</em> (Sie sagte, sie sei müde.)</li>' +
      '<li>Past / Present Perfect → Past Perfect: <em>He said he <b>had seen</b> it.</em></li>' +
      '<li>will → would, can → could, may → might, must → had to.</li>' +
      '<li>Zeitangaben: <em>today → that day, tomorrow → the next day, here → there, ago → before</em>.</li></ul>' +
      '<p><b>say</b> + etwas (<em>said that…</em>, <em>said to me</em>); <b>tell</b> + Person (<em>told me that…</em>). Ist die Aussage noch wahr, darf der Backshift fehlen: <em>He said he <b>lives</b> in Berlin.</em></p>',
    tables: [{ caption: { ru: 'Сдвиг времён', de: 'Zeitverschiebung' }, head: { ru: ['Прямая речь', 'Косвенная речь'], de: ['Direkte Rede', 'Indirekte Rede'] }, deCols: [0, 1],
      rows: [['“I work here.”', 'He said he worked there.'], ['“I’m leaving.”', 'She said she was leaving.'], ['“I’ve finished.”', 'He said he had finished.'], ['“I’ll call you.”', 'She said she would call me.'], ['“I can help.”', 'He said he could help.']] }],
    examples: [
      { t: 'She told me she [[would]] be late.', ru: 'Она сказала мне, что опоздает.', de: 'Sie sagte mir, sie würde sich verspäten.' },
      { t: 'He said he [[had lost]] his wallet the day before.', ru: 'Он сказал, что накануне потерял кошелёк.', de: 'Er sagte, er habe am Vortag seine Brieftasche verloren.' }
    ],
    pitfalls: [
      { title: { ru: 'say me → tell me', de: 'say me → tell me' },
        html: { ru: '<span class="wrong">She said me…</span> → <span class="right">She told me…</span> / <span class="right">She said to me…</span>', de: '<span class="wrong">She said me…</span> → <span class="right">She told me…</span> / <span class="right">She said to me…</span>' } }
    ],
    drills: [
      { id: 'en-gx-rs-1', kind: 'choice', q: '“I can’t come.” → He said he ___ come.', options: ['couldn’t', 'can’t', 'won’t'], answer: 0,
        explain: { ru: 'can → could.', de: 'can → could.' } },
      { id: 'en-gx-rs-2', kind: 'gap', q: '“We’ll finish tomorrow.” → They said they would finish ___. (2 words)', answer: 'the next day', accepted: ['the following day'],
        explain: { ru: 'tomorrow → the next day.', de: 'tomorrow → the next day.' } },
      { id: 'en-gx-rs-3', kind: 'choice', q: 'She ___ me that the meeting was cancelled.', options: ['told', 'said', 'spoke'], answer: 0,
        explain: { ru: 'С адресатом без to → told.', de: 'Mit Person ohne to → told.' } }
    ]
  });

  X('reported-questions', {
    summary: { ru: 'asked + where/if + порядок утверждения; ask/tell someone to do — просьбы и приказы.', de: 'asked + where/if + Aussagesatz-Stellung; ask/tell someone to do — Bitten und Aufforderungen.' },
    ru: '<ul><li><b>Wh-вопрос</b>: вопросительное слово + <b>подлежащее + глагол</b> (без do/did): <em>“Where do you live?” → She asked where I <b>lived</b>.</em></li>' +
      '<li><b>Да/нет-вопрос</b>: <b>if / whether</b>: <em>“Are you ready?” → He asked <b>if</b> I was ready.</em></li>' +
      '<li>Сдвиг времён — как в косвенных утверждениях.</li>' +
      '<li>В конце — точка, не вопросительный знак.</li>' +
      '<li><b>Просьбы / приказы</b>: <b>ask / tell + объект + to + V</b>: <em>“Please wait.” → She asked me <b>to wait</b>.</em> Отрицание: <em>told me <b>not to</b> touch it</em>.</li></ul>',
    de: '<ul><li><b>W-Frage</b>: Fragewort + <b>Subjekt + Verb</b> (ohne do/did) — wie im deutschen Nebensatz: <em>She asked where I <b>lived</b>.</em> (… wo ich wohne.)</li>' +
      '<li><b>Ja/Nein-Frage</b>: <b>if / whether</b> (= ob): <em>He asked <b>if</b> I was ready.</em></li>' +
      '<li>Zeitverschiebung wie bei Aussagen.</li>' +
      '<li>Am Ende Punkt, kein Fragezeichen.</li>' +
      '<li><b>Bitten / Aufforderungen</b>: <b>ask / tell + Objekt + to + Verb</b>: <em>She asked me <b>to wait</b>.</em> Verneint: <em>told me <b>not to</b> touch it</em>.</li></ul>',
    examples: [
      { t: 'He asked me [[whether]] I had a car.', ru: 'Он спросил, есть ли у меня машина.', de: 'Er fragte mich, ob ich ein Auto habe.' },
      { t: 'The doctor told me [[not to]] lift anything heavy.', ru: 'Врач сказал мне не поднимать ничего тяжёлого.', de: 'Der Arzt sagte mir, ich solle nichts Schweres heben.' },
      { t: 'They wanted to know [[how much]] it cost.', ru: 'Они хотели знать, сколько это стоит.', de: 'Sie wollten wissen, wie viel es kostet.' }
    ],
    pitfalls: [
      { title: { ru: 'Без did и инверсии', de: 'Ohne did und Inversion' },
        html: { ru: '<span class="wrong">She asked where did I go.</span> → <span class="right">She asked where I went.</span>', de: '<span class="wrong">She asked where did I go.</span> → <span class="right">She asked where I went.</span>' } }
    ],
    drills: [
      { id: 'en-gx-rq-1', kind: 'choice', q: '“Do you speak French?” → She asked ___.', options: ['if I spoke French', 'do I speak French', 'did I speak French'], answer: 0,
        explain: { ru: 'Да/нет → if + порядок утверждения.', de: 'Ja/Nein → if + Aussagestellung.' } },
      { id: 'en-gx-rq-2', kind: 'gap', q: '“Please close the door.” → He asked me ___ the door.', answer: 'to close',
        explain: { ru: 'Просьба → ask + объект + to + V.', de: 'Bitte → ask + Objekt + to + Verb.' } },
      { id: 'en-gx-rq-3', kind: 'gap', q: '“Don’t be late!” → She told us ___ late.', answer: 'not to be',
        explain: { ru: 'Отрицательная просьба → not to + V.', de: 'Verneinte Aufforderung → not to + Verb.' } }
    ]
  });

  X('relative-nondefining', {
    summary: { ru: 'Дополнительная информация в запятых: who / which / whose, но не that; местоимение не опускается.', de: 'Zusatzinformation in Kommas: who / which / whose, aber nicht that; Pronomen fällt nie weg.' },
    ru: '<ul><li>Неопределительное придаточное (non-defining) даёт <b>дополнительную</b> информацию о том, что уже понятно. Без него предложение не теряет смысла. Выделяется <b>запятыми</b> (в речи — паузами).</li>' +
      '<li><b>who</b> (люди), <b>which</b> (вещи), <b>whose</b>, <b>where</b>, <b>when</b>. <b>that нельзя</b>.</li>' +
      '<li>Местоимение <b>нельзя опустить</b>, даже если оно объект.</li>' +
      '<li><b>which</b> может относиться ко всему предыдущему предложению: <em>He was late, <b>which</b> annoyed everyone.</em></li>' +
      '<li>С количеством: <em>some of which, most of whom, both of them</em>.</li></ul>' +
      '<p>Сравните: <em>My brother <b>who lives in Paris</b></em> (у меня несколько братьев) — <em>My brother<b>, who lives in Paris,</b></em> (брат один).</p>',
    de: '<ul><li>Der nicht-bestimmende Relativsatz gibt <b>zusätzliche</b> Information über etwas schon Bekanntes und steht in <b>Kommas</b>.</li>' +
      '<li><b>who</b> (Personen), <b>which</b> (Dinge), <b>whose</b>, <b>where</b>, <b>when</b>. <b>Kein that</b>.</li>' +
      '<li>Das Pronomen <b>fällt nie weg</b>.</li>' +
      '<li><b>which</b> kann sich auf den ganzen Satz beziehen (= was): <em>He was late, <b>which</b> annoyed everyone.</em> (…, was alle ärgerte.)</li>' +
      '<li>Mit Mengen: <em>some of which, most of whom</em> (= von denen einige/die meisten).</li></ul>' +
      '<p>Im Deutschen hat jeder Relativsatz ein Komma; im Englischen zeigt das Komma die Bedeutung: <em>My brother who lives in Paris</em> (ich habe mehrere Brüder) vs <em>My brother, who lives in Paris,</em> (nur ein Bruder).</p>',
    examples: [
      { t: 'Berlin, [[which]] is the capital, has 3.7 million people.', ru: 'В Берлине, столице страны, 3,7 млн жителей.', de: 'Berlin, das die Hauptstadt ist, hat 3,7 Millionen Einwohner.' },
      { t: 'She passed the exam, [[which]] surprised everyone.', ru: 'Она сдала экзамен, что всех удивило.', de: 'Sie hat die Prüfung bestanden, was alle überraschte.' },
      { t: 'I have two sisters, both of [[whom]] are teachers.', ru: 'У меня две сестры, обе учительницы.', de: 'Ich habe zwei Schwestern, die beide Lehrerinnen sind.' }
    ],
    pitfalls: [
      { title: { ru: 'which, а не what', de: 'which, nicht what' },
        html: { ru: '<span class="wrong">It rained all day, what ruined the picnic.</span> → <span class="right">…, which ruined the picnic.</span>', de: 'Deutsches „was“ ≠ what: <span class="wrong">…, what ruined the picnic.</span> → <span class="right">…, which ruined the picnic.</span>' } }
    ],
    drills: [
      { id: 'en-gx-rnd-1', kind: 'choice', q: 'He forgot my birthday, ___ really upset me.', options: ['which', 'what', 'that'], answer: 0,
        explain: { ru: 'Отсылка ко всему предложению → which.', de: 'Bezug auf den ganzen Satz → which.' } },
      { id: 'en-gx-rnd-2', kind: 'choice', q: 'Which sentence has the correct punctuation for “I have only one father”?', options: ['My father, who is 70, still works.', 'My father who is 70 still works.', 'My father, that is 70, still works.'], answer: 0,
        explain: { ru: 'Отец один → дополнительная информация в запятых, who.', de: 'Nur ein Vater → Zusatzinfo in Kommas, who.' } },
      { id: 'en-gx-rnd-3', kind: 'gap', q: 'I met fifty people, most of ___ were students.', answer: 'whom',
        explain: { ru: 'После предлога о людях → whom.', de: 'Nach Präposition, Personen → whom.' } }
    ]
  });
})();
