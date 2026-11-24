/* English GRAMMAR · expansion of the short catalogue lessons (part 1: perfect, conditionals, passive, modals,
 * patterns, relative, deduction, hedging). Keeps existing drill ids (progress) and the source link; adds a full
 * explanation in ru + de, tables, examples, pitfalls and extra drills. Loaded after the German overlays. */
(function () {
  'use strict';
  var P = GT._target;
  GT.enrichGrammar = GT.enrichGrammar || function (id, o) {
    var pg = P.grammar[id];
    if (!pg) { P.loadErrors.push('enrichGrammar: no page ' + id); return; }
    var m = typeof pg.explanation === 'string' && pg.explanation.match(/<p class="mono-muted"[\s\S]*?<\/p>/);
    var ref = m ? m[0] : '';
    if (o.summary) pg.summary = o.summary;
    pg.explanation = { ru: o.ru + ref, de: o.de + ref };
    if (o.tables) pg.tables = o.tables;
    if (o.examples) pg.examples = (pg.examples || []).concat(o.examples);
    if (o.pitfalls) pg.pitfalls = o.pitfalls;
    pg.drills = pg.drills || [];
    (o.drills || []).forEach(function (d) { GT.registerDrill(d, 'grammar', id); pg.drills.push(d); });
  };
  var X = GT.enrichGrammar;

  X('perfect', {
    summary: { ru: 'Past Simple — законченное прошлое с указанием когда; Present Perfect — прошлое, важное сейчас.', de: 'Past Simple für abgeschlossene Vergangenheit mit Zeitangabe; Present Perfect für Vergangenes mit Bezug zur Gegenwart.' },
    ru: '<p>Оба времени говорят о прошлом, но с разной «точкой зрения»:</p><ul>' +
      '<li><b>Past Simple</b> (V2 / -ed) — действие закончилось в <b>прошлом периоде</b>, который уже завершён или назван: <em>yesterday, last week, in 2020, ago, when I was a child</em>. <em>I <b>sent</b> the report yesterday.</em></li>' +
      '<li><b>Present Perfect</b> (have/has + V3) — прошлое действие связано с <b>настоящим</b>: результат виден сейчас (<em>I’ve lost my keys</em> — их нет), опыт за жизнь (<em>Have you ever been to Japan?</em>), период ещё не закончился (<em>this week, today, so far</em>), новости (<em>The minister has resigned</em>).</li>' +
      '<li>Маркеры Present Perfect: <em>just, already, yet, ever, never, so far, recently, since, for</em>.</li></ul>' +
      '<p>Русский и немецкий в этом месте часто используют одно прошедшее время, поэтому решайте не по переводу, а по вопросу: «назван ли законченный момент в прошлом?» Если да — Past Simple.</p>',
    de: '<p>Beide Zeiten sprechen über Vergangenes, aber aus verschiedenem Blickwinkel:</p><ul>' +
      '<li><b>Past Simple</b> (2. Form / -ed) — die Handlung liegt in einem <b>abgeschlossenen, genannten Zeitraum</b>: <em>yesterday, last week, in 2020, ago</em>. <em>I <b>sent</b> the report yesterday.</em></li>' +
      '<li><b>Present Perfect</b> (have/has + 3. Form) — Vergangenes mit <b>Bezug zur Gegenwart</b>: sichtbares Ergebnis (<em>I’ve lost my keys</em>), Lebenserfahrung (<em>Have you ever been to Japan?</em>), noch offener Zeitraum (<em>this week, today, so far</em>), Neuigkeiten.</li>' +
      '<li>Signalwörter: <em>just, already, yet, ever, never, so far, recently, since, for</em>.</li></ul>' +
      '<p><b>Achtung:</b> Das deutsche Perfekt ist kein Present Perfect. „Ich habe ihn gestern gesehen“ = <em>I saw him yesterday</em>, nicht <em>I have seen him yesterday</em>.</p>',
    tables: [{ caption: { ru: 'Сигналы', de: 'Signale' }, head: { ru: ['Past Simple', 'Present Perfect'], de: ['Past Simple', 'Present Perfect'] }, deCols: [0, 1],
      rows: [['yesterday, last year, in May', 'today, this week, so far'], ['two days ago', 'just, already, yet, recently'], ['When did you …?', 'Have you ever …?'], ['I lived there in 2019. (finished)', 'I have lived here since 2019. (still)']] }],
    examples: [
      { t: 'I [[have]] never [[tried]] sushi.', ru: 'Я никогда не пробовал суши.', de: 'Ich habe noch nie Sushi probiert.' },
      { t: 'She [[moved]] to London two years ago.', ru: 'Она переехала в Лондон два года назад.', de: 'Sie ist vor zwei Jahren nach London gezogen.' },
      { t: 'Have you finished the report [[yet]]?', ru: 'Ты уже закончил отчёт?', de: 'Bist du schon mit dem Bericht fertig?' }
    ],
    pitfalls: [
      { title: { ru: 'Present Perfect + ago / yesterday', de: 'Present Perfect + ago / yesterday' },
        html: { ru: '<span class="wrong">I have seen him two days ago.</span> → <span class="right">I saw him two days ago.</span>', de: '<span class="wrong">I have seen him two days ago.</span> → <span class="right">I saw him two days ago.</span> Das deutsche Perfekt verleitet zu diesem Fehler.' } },
      { title: { ru: 'Вопрос с When', de: 'Fragen mit When' },
        html: { ru: '<span class="wrong">When have you arrived?</span> → <span class="right">When did you arrive?</span> — вопрос «когда» спрашивает о точке в прошлом.', de: '<span class="wrong">When have you arrived?</span> → <span class="right">When did you arrive?</span> — „wann“ fragt nach einem Zeitpunkt.' } }
    ],
    drills: [
      { id: 'en-gx-perfect-1', kind: 'choice', q: '___ you ever ___ to Canada?', options: ['Have … been', 'Did … go', 'Were … being'], answer: 0,
        explain: { ru: 'Опыт за жизнь, ever → Present Perfect.', de: 'Lebenserfahrung mit ever → Present Perfect.' } },
      { id: 'en-gx-perfect-2', kind: 'gap', q: 'We ___ (meet) last Monday at the conference.', answer: 'met',
        explain: { ru: 'last Monday — законченный момент → Past Simple.', de: 'last Monday ist abgeschlossen → Past Simple.' } },
      { id: 'en-gx-perfect-3', kind: 'gap', q: 'I can’t open the door — I ___ (lose) my key.', answer: 'have lost', accepted: ['’ve lost', "'ve lost"],
        explain: { ru: 'Результат сейчас → have lost.', de: 'Ergebnis jetzt sichtbar → have lost.' } }
    ]
  });

  X('conditionals', {
    summary: { ru: 'First — реальная будущая возможность (will), Second — воображаемая ситуация (would).', de: 'First — reale Möglichkeit in der Zukunft (will), Second — vorgestellte Situation (would).' },
    ru: '<ul><li><b>First Conditional</b>: <b>if + Present Simple, will + V</b>. Реальная возможность: <em>If it <b>rains</b>, we<b>’ll stay</b> home.</em></li>' +
      '<li><b>Second Conditional</b>: <b>if + Past Simple, would + V</b>. Нереальное или маловероятное настоящее/будущее: <em>If I <b>had</b> more money, I <b>would buy</b> a house.</em> Past здесь означает «нереально», а не «прошлое».</li>' +
      '<li>С <b>be</b> во втором типе часто <b>were</b> для всех лиц: <em>If I were you, I’d accept.</em> (was — разговорно)</li>' +
      '<li>Вместо will/would возможны модальные: <em>can, might, could</em>.</li></ul>' +
      '<p>Выбор между типами — это ваша оценка вероятности: <em>If I win the lottery…</em> (я правда участвую) vs <em>If I won the lottery…</em> (мечта).</p>',
    de: '<ul><li><b>First Conditional</b>: <b>if + Present Simple, will + Verb</b>. Reale Möglichkeit: <em>If it <b>rains</b>, we<b>’ll stay</b> home.</em></li>' +
      '<li><b>Second Conditional</b>: <b>if + Past Simple, would + Verb</b>. Irreale oder unwahrscheinliche Gegenwart/Zukunft (= Konjunktiv II): <em>If I <b>had</b> more money, I <b>would buy</b> a house.</em></li>' +
      '<li>Bei <b>be</b> steht oft <b>were</b> für alle Personen: <em>If I were you, I’d accept.</em> (= An deiner Stelle …)</li>' +
      '<li>Statt will/would gehen auch Modalverben: <em>can, might, could</em>.</li></ul>' +
      '<p><b>Achtung:</b> Kein <em>would</em> im if-Teil, obwohl man im Deutschen „wenn ich … würde“ sagen kann.</p>',
    tables: [{ caption: { ru: 'Формы', de: 'Formen' }, head: { ru: ['Тип', 'if-часть', 'Результат'], de: ['Typ', 'if-Satz', 'Hauptsatz'] }, deCols: [1, 2],
      rows: [['First', 'If you leave now,', 'you’ll catch the bus.'], ['Second', 'If you left now,', 'you would catch the bus.'], ['Second + be', 'If I were taller,', 'I could reach it.']] }],
    examples: [
      { t: 'If you [[need]] help, I[[’ll]] be in my office.', ru: 'Если понадобится помощь, я буду у себя в кабинете.', de: 'Wenn du Hilfe brauchst, bin ich in meinem Büro.' },
      { t: 'If I [[were]] you, I [[would]] ask for a raise.', ru: 'На твоём месте я бы попросил повышения.', de: 'An deiner Stelle würde ich um eine Gehaltserhöhung bitten.' },
      { t: 'What [[would]] you do if you [[lost]] your job?', ru: 'Что бы ты сделал, если бы потерял работу?', de: 'Was würdest du tun, wenn du deinen Job verlieren würdest?' }
    ],
    pitfalls: [
      { title: { ru: 'Без will / would в if-части', de: 'Kein will / would im if-Satz' },
        html: { ru: '<span class="wrong">If it will rain, …</span> → <span class="right">If it rains, …</span>; <span class="wrong">If I would have time, …</span> → <span class="right">If I had time, …</span>', de: '<span class="wrong">If it will rain, …</span> → <span class="right">If it rains, …</span>; <span class="wrong">If I would have time, …</span> → <span class="right">If I had time, …</span>' } },
      { title: { ru: 'Не смешивайте типы', de: 'Typen nicht mischen' },
        html: { ru: '<span class="wrong">If I had time, I will help.</span> → <span class="right">If I had time, I would help.</span>', de: '<span class="wrong">If I had time, I will help.</span> → <span class="right">If I had time, I would help.</span>' } }
    ],
    drills: [
      { id: 'en-gx-cond-1', kind: 'choice', q: 'If I ___ you, I’d talk to her.', options: ['were', 'am', 'would be'], answer: 0,
        explain: { ru: 'Совет «на твоём месте» → If I were you.', de: 'Ratschlag „an deiner Stelle“ → If I were you.' } },
      { id: 'en-gx-cond-2', kind: 'gap', q: 'If the train is late, we ___ (miss) the start of the film.', answer: 'will miss', accepted: ['’ll miss', "'ll miss"],
        explain: { ru: 'Реальная возможность → will + V.', de: 'Reale Möglichkeit → will + Verb.' } },
      { id: 'en-gx-cond-3', kind: 'gap', q: 'She would travel more if she ___ (have) more free time.', answer: 'had',
        explain: { ru: 'Second Conditional: if + Past Simple.', de: 'Second Conditional: if + Past Simple.' } }
    ]
  });

  X('passive', {
    summary: { ru: 'be (в нужном времени) + V3: важен объект и действие, а не исполнитель.', de: 'be (in der passenden Zeit) + 3. Form: wichtig sind Objekt und Handlung, nicht der Handelnde.' },
    ru: '<p>Пассив = <b>be</b> в нужном времени + <b>past participle (V3)</b>. Время показывает только <b>be</b>:</p>' +
      '<ul><li>Present: <em>is made</em> · Past: <em>was made</em> · Present Perfect: <em>has been made</em> · Continuous: <em>is being made</em> · с модальным: <em>must be made</em> · Future: <em>will be made</em></li>' +
      '<li>Исполнитель — через <b>by</b>, и только если он важен: <em>The app was developed <b>by</b> a small team.</em></li>' +
      '<li>Пассив обычен, когда исполнитель неизвестен, очевиден или неважен — в новостях, инструкциях, отчётах.</li></ul>' +
      '<p>Русские конструкции «строится», «говорят, что…» и неопределённо-личные «мне сказали» часто переводятся пассивом: <em>I was told…</em></p>',
    de: '<p>Passiv = <b>be</b> in der passenden Zeit + <b>Past Participle (3. Form)</b>. Die Zeit zeigt nur <b>be</b> — wie das deutsche <em>werden</em>:</p>' +
      '<ul><li>Present: <em>is made</em> · Past: <em>was made</em> · Present Perfect: <em>has been made</em> · Continuous: <em>is being made</em> · Modal: <em>must be made</em> · Future: <em>will be made</em></li>' +
      '<li>Der Handelnde mit <b>by</b> (= von): <em>The app was developed <b>by</b> a small team.</em></li>' +
      '<li>Deutsches „man“ wird oft zum Passiv: <em>Man hat mir gesagt</em> → <em>I was told</em>.</li></ul>' +
      '<p><b>Achtung:</b> Englisches Passiv bildet man mit <b>be</b>, nicht mit become: <em>become</em> = „werden“ im Sinne von „sich verändern“.</p>',
    tables: [{ caption: { ru: 'Времена пассива', de: 'Zeiten im Passiv' }, head: { ru: ['Время', 'Пример'], de: ['Zeit', 'Beispiel'] }, deCols: [1],
      rows: [['Present Simple', 'Emails are checked every hour.'], ['Past Simple', 'The bridge was built in 1890.'], ['Present Perfect', 'Your order has been shipped.'], ['Present Continuous', 'The road is being repaired.'], ['Modal', 'The form must be signed.'], ['Future', 'You will be contacted soon.']] }],
    examples: [
      { t: 'Your password [[has been changed]].', ru: 'Ваш пароль был изменён.', de: 'Ihr Passwort wurde geändert.' },
      { t: 'The office [[is being cleaned]] right now.', ru: 'Офис сейчас убирают.', de: 'Das Büro wird gerade geputzt.' },
      { t: 'I [[was told]] to wait here.', ru: 'Мне сказали подождать здесь.', de: 'Man hat mir gesagt, ich soll hier warten.' }
    ],
    pitfalls: [
      { title: { ru: 'be обязательно', de: 'be ist Pflicht' },
        html: { ru: '<span class="wrong">The report written yesterday.</span> → <span class="right">The report was written yesterday.</span>', de: '<span class="wrong">The report written yesterday.</span> → <span class="right">The report was written yesterday.</span>' } },
      { title: { ru: 'by, а не from', de: 'by, nicht from' },
        html: { ru: '<span class="wrong">The book was written from Tolstoy.</span> → <span class="right">… by Tolstoy.</span>', de: 'Deutsch „von“ → <span class="right">by</span>: <span class="wrong">written from Goethe</span> → <span class="right">written by Goethe</span>.' } }
    ],
    drills: [
      { id: 'en-gx-pass-1', kind: 'choice', q: 'The new hospital ___ next year.', options: ['will be opened', 'will open by', 'is opening by'], answer: 0,
        explain: { ru: 'Future passive: will be + V3.', de: 'Future Passiv: will be + 3. Form.' } },
      { id: 'en-gx-pass-2', kind: 'gap', q: 'Sorry for the noise — the kitchen ___ (renovate) at the moment.', answer: 'is being renovated',
        explain: { ru: 'Процесс сейчас: is being + V3.', de: 'Gerade im Gange: is being + 3. Form.' } },
      { id: 'en-gx-pass-3', kind: 'gap', q: 'The contract must ___ (sign) by both parties.', answer: 'be signed',
        explain: { ru: 'Модальный + be + V3.', de: 'Modalverb + be + 3. Form.' } }
    ]
  });

  X('modals', {
    summary: { ru: 'must / have to — нужно; mustn’t — нельзя; don’t have to — не обязательно; should — совет.', de: 'must / have to — müssen; mustn’t — nicht dürfen; don’t have to — nicht müssen; should — sollte.' },
    ru: '<ul><li><b>must</b> — обязанность, которую чувствует говорящий, или правило на табличке: <em>I must call Mum.</em> <b>have to</b> — внешняя необходимость: <em>I have to wear a uniform at work.</em></li>' +
      '<li><b>mustn’t</b> — <b>запрет</b>: <em>You mustn’t smoke here.</em></li>' +
      '<li><b>don’t have to</b> / <b>needn’t</b> — <b>нет необходимости</b>: <em>You don’t have to come.</em></li>' +
      '<li><b>should / ought to</b> — совет, мнение: <em>You should see a doctor.</em></li>' +
      '<li>У must нет прошедшего: «пришлось» = <b>had to</b>. Будущее — <b>will have to</b>.</li></ul>',
    de: '<ul><li><b>must</b> — Pflicht aus Sicht des Sprechers oder Regel: <em>I must call Mum.</em> <b>have to</b> — Notwendigkeit von außen: <em>I have to wear a uniform.</em></li>' +
      '<li><b>mustn’t</b> — <b>Verbot</b> = <em>nicht dürfen</em>: <em>You mustn’t smoke here.</em></li>' +
      '<li><b>don’t have to</b> / <b>needn’t</b> — <b>nicht müssen</b>: <em>You don’t have to come.</em></li>' +
      '<li><b>should / ought to</b> — Rat = <em>sollte</em>: <em>You should see a doctor.</em></li>' +
      '<li>must hat keine Vergangenheit: „musste“ = <b>had to</b>.</li></ul>' +
      '<p><b>Die große Falle für Deutschsprachige:</b> <em>Du musst nicht kommen</em> = <b>You don’t have to come</b>, nicht <em>You mustn’t come</em> (= Du darfst nicht kommen).</p>',
    tables: [{ caption: { ru: 'Значения', de: 'Bedeutungen' }, head: { ru: ['Форма', 'Значение'], de: ['Form', 'Bedeutung'] }, deCols: [0],
      rows: { ru: [['must / have to', 'нужно'], ['mustn’t', 'нельзя'], ['don’t have to / needn’t', 'не обязательно'], ['should', 'стоит, следует'], ['had to', 'пришлось']],
              de: [['must / have to', 'müssen'], ['mustn’t', 'nicht dürfen'], ['don’t have to / needn’t', 'nicht müssen'], ['should', 'sollte'], ['had to', 'musste']] } }],
    examples: [
      { t: 'You [[don’t have to]] bring anything — we have everything.', ru: 'Ничего не нужно приносить — у нас всё есть.', de: 'Du musst nichts mitbringen — wir haben alles.' },
      { t: 'Passengers [[must not]] leave bags unattended.', ru: 'Пассажирам запрещено оставлять сумки без присмотра.', de: 'Fahrgäste dürfen Taschen nicht unbeaufsichtigt lassen.' },
      { t: 'I [[had to]] work late yesterday.', ru: 'Вчера мне пришлось работать допоздна.', de: 'Ich musste gestern lange arbeiten.' }
    ],
    pitfalls: [
      { title: { ru: 'mustn’t ≠ не обязательно', de: 'mustn’t ≠ nicht müssen' },
        html: { ru: '<span class="right">You mustn’t tell anyone</span> — никому нельзя говорить. <span class="right">You don’t have to tell anyone</span> — можно не говорить.', de: '<span class="right">You mustn’t tell anyone</span> = du darfst es niemandem sagen. <span class="right">You don’t have to tell anyone</span> = du musst es niemandem sagen.' } },
      { title: { ru: 'Без to после must / should', de: 'Kein to nach must / should' },
        html: { ru: '<span class="wrong">You must to go.</span> → <span class="right">You must go.</span> Но <span class="right">have to go</span>, <span class="right">ought to go</span>.', de: '<span class="wrong">You must to go.</span> → <span class="right">You must go.</span> Aber <span class="right">have to go</span>, <span class="right">ought to go</span>.' } }
    ],
    drills: [
      { id: 'en-gx-mod-1', kind: 'choice', q: 'It’s a holiday tomorrow, so I ___ get up early.', options: ['don’t have to', 'mustn’t', 'shouldn’t to'], answer: 0,
        explain: { ru: 'Нет необходимости → don’t have to.', de: 'Keine Notwendigkeit → don’t have to.' } },
      { id: 'en-gx-mod-2', kind: 'choice', q: 'You ___ touch that wire — it’s dangerous!', options: ['mustn’t', 'don’t have to', 'needn’t'], answer: 0,
        explain: { ru: 'Запрет → mustn’t.', de: 'Verbot → mustn’t.' } },
      { id: 'en-gx-mod-3', kind: 'gap', q: 'The bus didn’t come, so we ___ (have to) walk.', answer: 'had to',
        explain: { ru: 'Прошлое must → had to.', de: 'Vergangenheit von must → had to.' } }
    ]
  });

  X('patterns', {
    summary: { ru: 'После одних глаголов -ing (enjoy, avoid), после других to + V (decide, want), после третьих объект + to.', de: 'Nach manchen Verben -ing (enjoy, avoid), nach anderen to + Verb (decide, want), nach weiteren Objekt + to.' },
    ru: '<p>Форму второго глагола определяет <b>первый глагол</b> — это надо учить вместе с ним:</p><ul>' +
      '<li><b>+ -ing</b>: <em>enjoy, avoid, finish, mind, suggest, consider, keep, practise, deny, risk, can’t stand</em>: <em>I enjoy <b>cooking</b>.</em></li>' +
      '<li><b>+ to + V</b>: <em>want, decide, hope, plan, agree, refuse, promise, manage, afford, offer, seem</em>: <em>We decided <b>to stay</b>.</em></li>' +
      '<li><b>+ объект + to + V</b>: <em>ask, tell, want, expect, allow, encourage, remind</em>: <em>She asked <b>me to help</b>.</em></li>' +
      '<li><b>+ объект + V</b> (без to): <em>make, let</em>: <em>They made <b>me wait</b>. Let <b>me know</b>.</em> <em>help</em> — с to и без.</li>' +
      '<li><b>like, love, hate, start, begin</b> — обе формы почти без разницы. У <em>remember, stop, try</em> смысл меняется (см. B2).</li></ul>',
    de: '<p>Die Form des zweiten Verbs hängt vom <b>ersten Verb</b> ab — man lernt sie zusammen:</p><ul>' +
      '<li><b>+ -ing</b>: <em>enjoy, avoid, finish, mind, suggest, consider, keep, practise, deny, risk</em>: <em>I enjoy <b>cooking</b>.</em></li>' +
      '<li><b>+ to + Verb</b>: <em>want, decide, hope, plan, agree, refuse, promise, manage, afford, offer</em>: <em>We decided <b>to stay</b>.</em></li>' +
      '<li><b>+ Objekt + to + Verb</b>: <em>ask, tell, want, expect, allow, remind</em>: <em>She asked <b>me to help</b>.</em> (Nicht <em>wanted that I help</em>!)</li>' +
      '<li><b>+ Objekt + Verb</b> (ohne to): <em>make, let</em> (= lassen): <em>They made <b>me wait</b>. Let <b>me know</b>.</em></li>' +
      '<li><b>like, love, hate, start, begin</b> — beides möglich. Bei <em>remember, stop, try</em> ändert sich die Bedeutung (siehe B2).</li></ul>',
    tables: [{ caption: { ru: 'Частые глаголы', de: 'Häufige Verben' }, head: { ru: ['+ -ing', '+ to', '+ объект + to'], de: ['+ -ing', '+ to', '+ Objekt + to'] }, deCols: [0, 1, 2],
      rows: [['enjoy, finish, avoid', 'want, need, hope', 'ask, tell, want'], ['suggest, consider, mind', 'decide, plan, agree', 'expect, allow, remind'], ['keep, practise, risk', 'refuse, promise, manage', 'encourage, advise, warn']] }],
    examples: [
      { t: 'Would you mind [[closing]] the window?', ru: 'Не могли бы вы закрыть окно?', de: 'Würden Sie bitte das Fenster schließen?' },
      { t: 'They refused [[to pay]] the bill.', ru: 'Они отказались оплатить счёт.', de: 'Sie weigerten sich, die Rechnung zu bezahlen.' },
      { t: 'My boss wants [[me to lead]] the project.', ru: 'Начальник хочет, чтобы я руководил проектом.', de: 'Mein Chef möchte, dass ich das Projekt leite.' }
    ],
    pitfalls: [
      { title: { ru: 'want that — нельзя', de: 'Kein want that' },
        html: { ru: '<span class="wrong">I want that you come.</span> → <span class="right">I want you to come.</span>', de: '„Ich will, dass du kommst“: <span class="wrong">I want that you come.</span> → <span class="right">I want you to come.</span>' } },
      { title: { ru: 'suggest', de: 'suggest' },
        html: { ru: '<span class="wrong">He suggested me to go.</span> → <span class="right">He suggested going.</span> / <span class="right">He suggested that I go.</span>', de: '<span class="wrong">He suggested me to go.</span> → <span class="right">He suggested going.</span> / <span class="right">He suggested that I go.</span>' } }
    ],
    drills: [
      { id: 'en-gx-pat-1', kind: 'choice', q: 'Have you finished ___ the report?', options: ['writing', 'to write', 'write'], answer: 0,
        explain: { ru: 'finish + -ing.', de: 'finish + -ing.' } },
      { id: 'en-gx-pat-2', kind: 'choice', q: 'My parents wouldn’t let me ___ out late.', options: ['stay', 'to stay', 'staying'], answer: 0,
        explain: { ru: 'let + объект + V без to.', de: 'let + Objekt + Verb ohne to.' } },
      { id: 'en-gx-pat-3', kind: 'gap', q: 'Can you remind me ___ (buy) milk?', answer: 'to buy',
        explain: { ru: 'remind + объект + to + V.', de: 'remind + Objekt + to + Verb.' } }
    ]
  });

  X('relative', {
    summary: { ru: 'who — люди, which — вещи, that — оба; whose — чей; объектное местоимение можно опустить.', de: 'who für Personen, which für Dinge, that für beides; whose = dessen/deren; Objektpronomen kann wegfallen.' },
    ru: '<p>Определительное придаточное (defining) отвечает на «какой именно?» и <b>не выделяется запятыми</b>.</p><ul>' +
      '<li><b>who</b> — люди, <b>which</b> — предметы и животные, <b>that</b> — и то и другое (в разговоре чаще всего).</li>' +
      '<li><b>whose</b> — принадлежность: <em>the woman <b>whose</b> car was stolen</em>.</li>' +
      '<li><b>where</b> (место), <b>when</b> (время): <em>the café <b>where</b> we met</em>.</li>' +
      '<li>Если местоимение — <b>объект</b> придаточного, его можно опустить: <em>the film (that) I saw</em>. Если <b>подлежащее</b> — нельзя: <em>the man <b>who</b> called</em>.</li>' +
      '<li>Предлог обычно в конце: <em>the person I spoke <b>to</b></em> (официально: <em>to whom I spoke</em>).</li></ul>',
    de: '<p>Der bestimmende Relativsatz (defining) sagt, <b>welche Person/Sache</b> gemeint ist, und steht <b>ohne Komma</b> — anders als im Deutschen!</p><ul>' +
      '<li><b>who</b> — Personen, <b>which</b> — Dinge und Tiere, <b>that</b> — beides.</li>' +
      '<li><b>whose</b> = dessen/deren: <em>the woman <b>whose</b> car was stolen</em>.</li>' +
      '<li><b>where</b> (Ort), <b>when</b> (Zeit): <em>the café <b>where</b> we met</em>.</li>' +
      '<li>Ist das Pronomen <b>Objekt</b>, kann es wegfallen: <em>the film (that) I saw</em>. Als <b>Subjekt</b> nicht: <em>the man <b>who</b> called</em>.</li>' +
      '<li>Die Präposition steht meist am Ende: <em>the person I spoke <b>to</b></em> (= mit der ich sprach).</li></ul>',
    examples: [
      { t: 'The woman [[whose]] bag was stolen called the police.', ru: 'Женщина, у которой украли сумку, вызвала полицию.', de: 'Die Frau, deren Tasche gestohlen wurde, rief die Polizei.' },
      { t: 'This is the restaurant [[where]] we had our first date.', ru: 'Это ресторан, где у нас было первое свидание.', de: 'Das ist das Restaurant, in dem wir unser erstes Date hatten.' },
      { t: 'The book I’m reading is about climate change.', ru: 'Книга, которую я читаю, — об изменении климата.', de: 'Das Buch, das ich lese, handelt vom Klimawandel.' }
    ],
    pitfalls: [
      { title: { ru: 'what ≠ который', de: 'what ≠ das/was' },
        html: { ru: '<span class="wrong">The film what I saw</span> → <span class="right">The film that/which I saw</span>. what = «то, что»: <em>I know what you mean.</em>', de: '<span class="wrong">The film what I saw</span> → <span class="right">The film that I saw</span>. what = „das, was“: <em>I know what you mean.</em>' } },
      { title: { ru: 'Без лишнего местоимения', de: 'Kein zusätzliches Pronomen' },
        html: { ru: '<span class="wrong">The car which I bought it</span> → <span class="right">The car which I bought</span>.', de: '<span class="wrong">The car which I bought it</span> → <span class="right">The car which I bought</span>.' } }
    ],
    drills: [
      { id: 'en-gx-rel-1', kind: 'choice', q: 'Is this the hotel ___ you stayed last year?', options: ['where', 'which', 'who'], answer: 0,
        explain: { ru: 'Место + полное придаточное → where.', de: 'Ort + vollständiger Satz → where.' } },
      { id: 'en-gx-rel-2', kind: 'choice', q: 'Which sentence is correct?', options: ['The man who lives next door is a pilot.', 'The man lives next door is a pilot.', 'The man which lives next door is a pilot.'], answer: 0,
        explain: { ru: 'Подлежащее нельзя опустить; человек → who.', de: 'Subjekt darf nicht fehlen; Person → who.' } },
      { id: 'en-gx-rel-3', kind: 'gap', q: 'I have a friend ___ brother plays for Arsenal.', answer: 'whose',
        explain: { ru: 'Принадлежность → whose.', de: 'Besitz → whose.' } }
    ]
  });

  X('deduction', {
    summary: { ru: 'must have / might have / can’t have + V3 — выводы о прошлом по имеющимся признакам.', de: 'must have / might have / can’t have + 3. Form — Schlussfolgerungen über die Vergangenheit.' },
    ru: '<p>Модальный + <b>have + V3</b> — вывод о <b>прошлом</b> на основе фактов:</p><ul>' +
      '<li><b>must have done</b> — почти уверен, что да: <em>The ground is wet. It <b>must have rained</b>.</em></li>' +
      '<li><b>might / may / could have done</b> — возможно: <em>He <b>might have missed</b> the bus.</em></li>' +
      '<li><b>can’t / couldn’t have done</b> — уверен, что нет: <em>She <b>can’t have seen</b> us — she was looking the other way.</em></li></ul>' +
      '<p>Отрицательный вывод — <b>can’t have</b>, а не <em>mustn’t have</em>. Сравните также <b>should have</b> (упрёк) — это не вывод.</p>',
    de: '<p>Modalverb + <b>have + 3. Form</b> — Schlussfolgerung über die <b>Vergangenheit</b> (≈ <em>muss … haben, könnte … haben</em>):</p><ul>' +
      '<li><b>must have done</b> — fast sicher ja: <em>It <b>must have rained</b>.</em> = Es muss geregnet haben.</li>' +
      '<li><b>might / may / could have done</b> — vielleicht: <em>He <b>might have missed</b> the bus.</em></li>' +
      '<li><b>can’t / couldn’t have done</b> — sicher nicht: <em>She <b>can’t have seen</b> us.</em> = Sie kann uns nicht gesehen haben.</li></ul>' +
      '<p>Verneinte Schlussfolgerung: <b>can’t have</b>, nicht <em>mustn’t have</em>.</p>',
    tables: [{ caption: { ru: 'Шкала уверенности', de: 'Sicherheitsskala' }, head: { ru: ['Форма', 'Уверенность'], de: ['Form', 'Sicherheit'] }, deCols: [0],
      rows: { ru: [['must have left', '≈ 95 % да'], ['may / might / could have left', '≈ 50 %'], ['can’t / couldn’t have left', '≈ 95 % нет']], de: [['must have left', '≈ 95 % ja'], ['may / might / could have left', '≈ 50 %'], ['can’t / couldn’t have left', '≈ 95 % nein']] } }],
    examples: [
      { t: 'You [[must have been]] exhausted after the flight.', ru: 'Ты, наверное, был без сил после перелёта.', de: 'Du musst nach dem Flug erschöpft gewesen sein.' },
      { t: 'He [[can’t have forgotten]] — I reminded him twice.', ru: 'Не может быть, чтобы он забыл — я дважды напомнил.', de: 'Er kann es nicht vergessen haben — ich habe ihn zweimal erinnert.' }
    ],
    pitfalls: [
      { title: { ru: 'mustn’t have → can’t have', de: 'mustn’t have → can’t have' },
        html: { ru: '<span class="wrong">He mustn’t have known.</span> → <span class="right">He can’t have known.</span>', de: '<span class="wrong">He mustn’t have known.</span> → <span class="right">He can’t have known.</span>' } }
    ],
    drills: [
      { id: 'en-gx-ded-1', kind: 'choice', q: 'The lights are off. They ___ to bed already.', options: ['must have gone', 'can’t have gone', 'must go'], answer: 0,
        explain: { ru: 'Уверенный вывод о прошлом → must have gone.', de: 'Sichere Schlussfolgerung → must have gone.' } },
      { id: 'en-gx-ded-2', kind: 'choice', q: 'She ___ the email — she replied to it an hour ago.', options: ['must have read', 'can’t have read', 'might read'], answer: 0,
        explain: { ru: 'Факт доказывает, что прочитала.', de: 'Die Antwort beweist es → must have read.' } },
      { id: 'en-gx-ded-3', kind: 'gap', q: 'I’m not sure where my phone is. I ___ (might / leave) it in the car.', answer: 'might have left',
        explain: { ru: 'Возможно → might have + V3.', de: 'Vielleicht → might have + 3. Form.' } }
    ]
  });

  X('hedging', {
    summary: { ru: 'Смягчение утверждений: may, appear to, tend to, it seems, suggest — точность вместо категоричности.', de: 'Vorsichtige Aussagen: may, appear to, tend to, it seems, suggest — Präzision statt Absolutheit.' },
    ru: '<p>В деловых и академических текстах важно не утверждать больше, чем позволяют данные. Средства «смягчения»:</p><ul>' +
      '<li><b>модальные</b>: <em>may, might, could</em> — <em>This <b>may</b> explain the delay.</em></li>' +
      '<li><b>глаголы</b>: <em>appear to, seem to, tend to, suggest, indicate</em> — <em>Users <b>tend to</b> skip long forms.</em></li>' +
      '<li><b>наречия</b>: <em>possibly, probably, likely, apparently, generally</em>.</li>' +
      '<li><b>безличные обороты</b>: <em>It seems that…, It is likely that…, There is some evidence that…</em></li>' +
      '<li><b>ограничители</b>: <em>in most cases, to some extent, as far as we know</em>.</li></ul>' +
      '<p>Шкала: <em>proves</em> &gt; <em>shows</em> &gt; <em>indicates</em> &gt; <em>suggests</em>.</p>',
    de: '<p>In Berichten und wissenschaftlichen Texten sollte man nicht mehr behaupten, als die Daten erlauben. Mittel der Abschwächung:</p><ul>' +
      '<li><b>Modalverben</b>: <em>may, might, could</em> (= könnte, dürfte).</li>' +
      '<li><b>Verben</b>: <em>appear to, seem to, tend to, suggest, indicate</em> — <em>Users <b>tend to</b> skip long forms.</em> (Nutzer neigen dazu …)</li>' +
      '<li><b>Adverbien</b>: <em>possibly, probably, likely, apparently, generally</em>.</li>' +
      '<li><b>Unpersönlich</b>: <em>It seems that…, It is likely that…</em> (≈ es scheint, dass …)</li>' +
      '<li><b>Einschränkungen</b>: <em>in most cases, to some extent, as far as we know</em>.</li></ul>' +
      '<p>Skala: <em>proves</em> &gt; <em>shows</em> &gt; <em>indicates</em> &gt; <em>suggests</em>.</p>',
    examples: [
      { t: 'The results [[appear to]] confirm our hypothesis.', ru: 'Результаты, по-видимому, подтверждают нашу гипотезу.', de: 'Die Ergebnisse scheinen unsere Hypothese zu bestätigen.' },
      { t: 'Remote workers [[tend to]] report higher satisfaction.', ru: 'Удалённые сотрудники, как правило, более удовлетворены.', de: 'Mitarbeiter im Homeoffice berichten tendenziell von höherer Zufriedenheit.' },
      { t: '[[It is likely that]] costs will rise.', ru: 'Вероятно, расходы вырастут.', de: 'Es ist wahrscheinlich, dass die Kosten steigen.' }
    ],
    pitfalls: [
      { title: { ru: 'Не перегружайте', de: 'Nicht übertreiben' },
        html: { ru: '<span class="wrong">It might possibly seem to perhaps suggest…</span> — слишком много. Одного-двух средств достаточно.', de: '<span class="wrong">It might possibly seem to perhaps suggest…</span> — zu viel. Ein bis zwei Mittel reichen.' } }
    ],
    drills: [
      { id: 'en-gx-hedge-1', kind: 'choice', q: 'Which is the most cautious claim?', options: ['The data suggests a link.', 'The data proves a link.', 'There is definitely a link.'], answer: 0,
        explain: { ru: 'suggests — самый осторожный глагол.', de: 'suggests ist am vorsichtigsten.' } },
      { id: 'en-gx-hedge-2', kind: 'gap', q: 'Younger users ___ to prefer the mobile app. (tend, Present Simple)', answer: 'tend',
        explain: { ru: 'tend to + V = как правило.', de: 'tend to + Verb = neigen dazu.' } }
    ]
  });
})();
