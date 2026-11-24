/* English GRAMMAR · expansion part 4: polite-indirect, future-time-clauses, causative-have, so-such, preposition-ing,
 * modified-comparatives, frequency-position, duration-for-since, past-habitual. Uses GT.enrichGrammar. */
(function () {
  'use strict';
  var X = GT.enrichGrammar, P = GT._target;

  X('polite-indirect', {
    summary: { ru: 'Could you tell me where the station is? — после вежливого начала порядок утверждения.', de: 'Could you tell me where the station is? — nach der höflichen Einleitung steht die Aussagesatz-Stellung.' },
    ru: '<p>Косвенный вопрос звучит вежливее прямого. Вопросительная форма остаётся только в <b>начале</b>, а внутри — <b>порядок утверждения</b>, без do/does/did:</p><ul>' +
      '<li><em>Where <b>is</b> the station?</em> → <em>Could you tell me where the station <b>is</b>?</em></li>' +
      '<li><em>What time <b>does</b> it <b>start</b>?</em> → <em>Do you know what time it <b>starts</b>?</em></li>' +
      '<li>Да/нет-вопрос → <b>if / whether</b>: <em>Can you tell me <b>if</b> this seat is free?</em></li>' +
      '<li>Вежливые начала: <em>Could you tell me…? Do you know…? I was wondering… Would you mind telling me…? I’d like to know…</em> (после последних двух — точка).</li></ul>',
    de: '<p>Indirekte Fragen klingen höflicher. Die Frageform bleibt nur am <b>Anfang</b>; danach <b>Aussagestellung</b>, ohne do/does/did — wie im deutschen Nebensatz „…, wo der Bahnhof ist“:</p><ul>' +
      '<li><em>Where <b>is</b> the station?</em> → <em>Could you tell me where the station <b>is</b>?</em></li>' +
      '<li><em>What time <b>does</b> it <b>start</b>?</em> → <em>Do you know what time it <b>starts</b>?</em></li>' +
      '<li>Ja/Nein-Frage → <b>if / whether</b> (= ob).</li>' +
      '<li>Höfliche Einleitungen: <em>Could you tell me…? Do you know…? I was wondering… I’d like to know…</em></li></ul>',
    examples: [
      { t: 'Do you know [[what time the shop opens]]?', ru: 'Вы не знаете, во сколько открывается магазин?', de: 'Wissen Sie, wann der Laden öffnet?' },
      { t: 'I was wondering [[if you could help]] me.', ru: 'Не могли бы вы мне помочь?', de: 'Ich wollte fragen, ob Sie mir helfen könnten.' }
    ],
    pitfalls: [
      { title: { ru: 'Двойной вопрос', de: 'Doppelte Frage' },
        html: { ru: '<span class="wrong">Do you know where does she live?</span> → <span class="right">Do you know where she lives?</span>', de: '<span class="wrong">Do you know where does she live?</span> → <span class="right">Do you know where she lives?</span>' } }
    ],
    drills: [
      { id: 'en-gx-pi-1', kind: 'choice', q: 'Could you tell me ___?', options: ['how much this costs', 'how much does this cost', 'how much costs this'], answer: 0,
        explain: { ru: 'Порядок утверждения, без does.', de: 'Aussagestellung, ohne does.' } },
      { id: 'en-gx-pi-2', kind: 'gap', q: 'Do you know ___ the museum is open on Mondays? (yes/no question)', answer: 'if', accepted: ['whether'],
        explain: { ru: 'Да/нет → if / whether.', de: 'Ja/Nein → if / whether.' } }
    ]
  });

  X('future-time-clauses', {
    summary: { ru: 'После when, as soon as, before, after, until — Present вместо will.', de: 'Nach when, as soon as, before, after, until steht Present statt will.' },
    ru: '<ul><li>В придаточных времени, которые относятся к будущему, используется <b>Present Simple</b>, а <b>will — только в главной части</b>: <em>I’ll call you <b>when</b> I <b>get</b> home.</em></li>' +
      '<li>Союзы: <em>when, as soon as, before, after, until / till, once, by the time</em>; то же после <em>if, unless, in case</em>.</li>' +
      '<li>Для завершённости — <b>Present Perfect</b>: <em>I’ll send it <b>after</b> I<b>’ve checked</b> it.</em></li>' +
      '<li>Не путайте с косвенным вопросом: <em>I don’t know <b>when</b> he <b>will</b> come</em> — тут when = «когда?», и will нужен.</li></ul>',
    de: '<ul><li>In Zeitsätzen über die Zukunft steht <b>Present Simple</b>, <b>will nur im Hauptsatz</b> — wie das deutsche Präsens: <em>I’ll call you <b>when</b> I <b>get</b> home.</em></li>' +
      '<li>Konjunktionen: <em>when, as soon as, before, after, until, once, by the time</em>; ebenso nach <em>if, unless, in case</em>.</li>' +
      '<li>Für Abgeschlossenes: <b>Present Perfect</b>: <em>I’ll send it <b>after</b> I<b>’ve checked</b> it.</em></li>' +
      '<li>Nicht verwechseln mit indirekter Frage: <em>I don’t know <b>when</b> he <b>will</b> come</em> — hier ist will nötig.</li></ul>',
    examples: [
      { t: 'We’ll start [[as soon as]] everyone [[arrives]].', ru: 'Начнём, как только все придут.', de: 'Wir fangen an, sobald alle da sind.' },
      { t: 'Don’t leave [[until]] I [[get]] back.', ru: 'Не уходи, пока я не вернусь.', de: 'Geh nicht, bevor ich zurück bin.' },
      { t: 'I’ll lend you the book [[after]] I[[’ve finished]] it.', ru: 'Я дам тебе книгу, когда дочитаю.', de: 'Ich leihe dir das Buch, wenn ich es ausgelesen habe.' }
    ],
    pitfalls: [
      { title: { ru: 'will после when', de: 'will nach when' },
        html: { ru: '<span class="wrong">When I will be in Paris, I’ll visit you.</span> → <span class="right">When I am in Paris, …</span>', de: '<span class="wrong">When I will be in Paris, I’ll visit you.</span> → <span class="right">When I am in Paris, …</span>' } }
    ],
    drills: [
      { id: 'en-gx-ftc-1', kind: 'choice', q: 'Text me before you ___ the house.', options: ['leave', 'will leave', 'are going to leave'], answer: 0,
        explain: { ru: 'После before → Present.', de: 'Nach before → Present.' } },
      { id: 'en-gx-ftc-2', kind: 'choice', q: 'I’m not sure when the results ___ published.', options: ['will be', 'are', 'be'], answer: 0,
        explain: { ru: 'Косвенный вопрос «когда?» → will возможен.', de: 'Indirekte Frage „wann?“ → will ist richtig.' } },
      { id: 'en-gx-ftc-3', kind: 'gap', q: 'I’ll pay you back once I ___ (get) my salary.', answer: 'get',
        explain: { ru: 'once + Present.', de: 'once + Present.' } }
    ]
  });

  X('causative-have', {
    summary: { ru: 'have / get + объект + V3 — кто-то делает это для вас.', de: 'have / get + Objekt + 3. Form — jemand macht es für Sie (= etwas machen lassen).' },
    ru: '<ul><li><b>have + объект + V3</b> — услугу выполняет кто-то другой: <em>I <b>had my hair cut</b>.</em> (меня подстригли, а не я сам)</li>' +
      '<li><b>get + объект + V3</b> — то же, разговорнее: <em>We need to <b>get the car repaired</b>.</em></li>' +
      '<li>Время показывает <b>have</b>: <em>I’m having / I’ve had / I’ll have my flat painted.</em></li>' +
      '<li>Также о неприятностях: <em>She <b>had her bag stolen</b>.</em> — у неё украли сумку.</li>' +
      '<li>Активная форма с человеком: <b>have someone do</b> / <b>get someone to do</b>: <em>I’ll have the assistant send it. I got my brother to help.</em></li></ul>',
    de: '<ul><li><b>have + Objekt + 3. Form</b> = etwas machen lassen: <em>I <b>had my hair cut</b>.</em> (Ich habe mir die Haare schneiden lassen.)</li>' +
      '<li><b>get + Objekt + 3. Form</b> — dasselbe, umgangssprachlicher.</li>' +
      '<li>Die Zeit zeigt <b>have</b>: <em>I’m having / I’ve had / I’ll have my flat painted.</em></li>' +
      '<li>Auch für Unangenehmes: <em>She <b>had her bag stolen</b>.</em> — Ihr wurde die Tasche gestohlen.</li>' +
      '<li>Mit Person: <b>have someone do</b> / <b>get someone to do</b>: <em>I got my brother to help.</em></li></ul>' +
      '<p>Achtung: Nicht <em>I let cut my hair</em> — „lassen“ ist hier <b>have</b>, nicht <em>let</em>.</p>',
    examples: [
      { t: 'We[[’re having]] solar panels [[installed]] next week.', ru: 'На следующей неделе нам устанавливают солнечные панели.', de: 'Nächste Woche lassen wir Solarmodule installieren.' },
      { t: 'You should [[get]] your eyes [[tested]].', ru: 'Тебе стоит проверить зрение.', de: 'Du solltest deine Augen testen lassen.' }
    ],
    pitfalls: [
      { title: { ru: 'Порядок слов', de: 'Wortstellung' },
        html: { ru: '<span class="wrong">I had cut my hair.</span> (= я сам подстригся раньше) → <span class="right">I had my hair cut.</span>', de: '<span class="wrong">I had cut my hair.</span> (= ich hatte mir selbst die Haare geschnitten) → <span class="right">I had my hair cut.</span>' } }
    ],
    drills: [
      { id: 'en-gx-ch-1', kind: 'choice', q: 'Our roof was damaged in the storm, so we ___.', options: ['had it repaired', 'had repaired it', 'repaired it had'], answer: 0,
        explain: { ru: 'have + объект + V3.', de: 'have + Objekt + 3. Form.' } },
      { id: 'en-gx-ch-2', kind: 'gap', q: 'He had his phone ___ (steal) on the train.', answer: 'stolen',
        explain: { ru: 'Неприятность: had + объект + V3.', de: 'Unangenehmes: had + Objekt + 3. Form.' } },
      { id: 'en-gx-ch-3', kind: 'choice', q: 'I finally got my neighbour ___ his music down.', options: ['to turn', 'turn', 'turned'], answer: 0,
        explain: { ru: 'get someone to do.', de: 'get someone to do.' } }
    ]
  });

  X('so-such', {
    summary: { ru: 'so + прилагательное / наречие; such (a) + (прилагательное) + существительное.', de: 'so + Adjektiv / Adverb; such (a) + (Adjektiv) + Nomen.' },
    ru: '<ul><li><b>so</b> + прилагательное или наречие: <em>so tired, so quickly</em>.</li>' +
      '<li><b>such a / an</b> + (прилаг.) + исчисляемое в ед. ч.: <em>such a nice day</em>.</li>' +
      '<li><b>such</b> + (прилаг.) + мн. ч. или неисчисляемое: <em>such nice people, such good weather</em>.</li>' +
      '<li><b>so much / so many / so few / so little</b> + сущ.: <em>so many problems</em>.</li>' +
      '<li>Следствие с <b>that</b>: <em>It was <b>so</b> cold <b>that</b> the lake froze. It was <b>such</b> a cold winter <b>that</b>…</em></li></ul>',
    de: '<ul><li><b>so</b> + Adjektiv oder Adverb: <em>so tired, so quickly</em>.</li>' +
      '<li><b>such a / an</b> + (Adjektiv) + zählbares Nomen im Singular: <em>such a nice day</em> (= so ein schöner Tag).</li>' +
      '<li><b>such</b> + (Adjektiv) + Plural oder Unzählbares: <em>such nice people, such good weather</em>.</li>' +
      '<li><b>so much / so many</b> + Nomen: <em>so many problems</em>.</li>' +
      '<li>Folge mit <b>that</b> (= so … dass): <em>It was <b>so</b> cold <b>that</b> the lake froze.</em></li></ul>',
    examples: [
      { t: 'She speaks [[so]] fast that I can’t follow.', ru: 'Она говорит так быстро, что я не успеваю.', de: 'Sie spricht so schnell, dass ich nicht mitkomme.' },
      { t: 'They’re [[such]] kind people.', ru: 'Они такие добрые люди.', de: 'Das sind so nette Leute.' },
      { t: 'There were [[so many]] tourists that we left.', ru: 'Было столько туристов, что мы ушли.', de: 'Es waren so viele Touristen da, dass wir gegangen sind.' }
    ],
    pitfalls: [
      { title: { ru: 'such a, а не a such', de: 'such a, nicht a such' },
        html: { ru: '<span class="wrong">a such good idea</span> / <span class="wrong">so a good idea</span> → <span class="right">such a good idea</span>.', de: 'Deutsch „so eine gute Idee“: <span class="wrong">a such good idea</span> → <span class="right">such a good idea</span>.' } }
    ],
    drills: [
      { id: 'en-gx-ss-1', kind: 'choice', q: 'I’ve never seen ___ beautiful sunset.', options: ['such a', 'so', 'so a'], answer: 0,
        explain: { ru: 'Сущ. в ед. ч. → such a.', de: 'Nomen im Singular → such a.' } },
      { id: 'en-gx-ss-2', kind: 'choice', q: 'We had ___ fun at the party!', options: ['so much', 'such a', 'so many'], answer: 0,
        explain: { ru: 'fun — неисчисляемое → so much (или such fun).', de: 'fun ist unzählbar → so much (oder such fun).' } },
      { id: 'en-gx-ss-3', kind: 'gap', q: 'The film was ___ long that I fell asleep.', answer: 'so',
        explain: { ru: 'Прилагательное без сущ. → so.', de: 'Adjektiv ohne Nomen → so.' } }
    ]
  });

  X('preposition-ing', {
    summary: { ru: 'После предлога глагол всегда в форме -ing: without asking, interested in learning, look forward to seeing.', de: 'Nach einer Präposition steht das Verb immer mit -ing: without asking, interested in learning, look forward to seeing.' },
    ru: '<ul><li>После любого <b>предлога</b> глагол — в форме <b>-ing</b>: <em>before leaving, after eating, without saying, by working, instead of waiting</em>.</li>' +
      '<li>После прилагательное + предлог: <em>good at cooking, interested in learning, afraid of flying, tired of waiting, responsible for organising</em>.</li>' +
      '<li>После глагол + предлог: <em>think about moving, apologise for being late, insist on paying, succeed in finding</em>.</li>' +
      '<li><b>to как предлог</b> (не частица инфинитива): <em>look forward to, be used to, get used to, object to, when it comes to, in addition to</em> → <em>I look forward to <b>hearing</b> from you.</em></li>' +
      '<li>Русскому деепричастию («не спросив», «прежде чем уйти») часто соответствует предлог + -ing.</li></ul>',
    de: '<ul><li>Nach jeder <b>Präposition</b> steht das Verb mit <b>-ing</b>: <em>before leaving, after eating, without saying, by working, instead of waiting</em> (≈ deutsche Infinitive mit „ohne … zu“, „anstatt … zu“).</li>' +
      '<li>Nach Adjektiv + Präposition: <em>good at cooking, interested in learning, afraid of flying</em>.</li>' +
      '<li>Nach Verb + Präposition: <em>think about moving, apologise for being late, insist on paying</em>.</li>' +
      '<li><b>to als Präposition</b>: <em>look forward to, be used to, get used to, object to</em> → <em>I look forward to <b>hearing</b> from you.</em> (Ich freue mich darauf, von Ihnen zu hören.)</li></ul>',
    examples: [
      { t: 'She left [[without saying]] goodbye.', ru: 'Она ушла, не попрощавшись.', de: 'Sie ging, ohne sich zu verabschieden.' },
      { t: 'I’m not very good [[at remembering]] names.', ru: 'Я плохо запоминаю имена.', de: 'Ich kann mir Namen nicht gut merken.' },
      { t: '[[Instead of complaining]], let’s find a solution.', ru: 'Вместо того чтобы жаловаться, давайте найдём решение.', de: 'Anstatt uns zu beschweren, lasst uns eine Lösung finden.' }
    ],
    pitfalls: [
      { title: { ru: 'look forward to + -ing', de: 'look forward to + -ing' },
        html: { ru: '<span class="wrong">I look forward to see you.</span> → <span class="right">I look forward to seeing you.</span>', de: '<span class="wrong">I look forward to see you.</span> → <span class="right">I look forward to seeing you.</span>' } }
    ],
    drills: [
      { id: 'en-gx-prep-1', kind: 'choice', q: 'He apologised for ___ so late.', options: ['being', 'be', 'to be'], answer: 0,
        explain: { ru: 'for + -ing.', de: 'for + -ing.' } },
      { id: 'en-gx-prep-2', kind: 'gap', q: 'You can save money by ___ (cook) at home.', answer: 'cooking',
        explain: { ru: 'by + -ing = способ.', de: 'by + -ing = Art und Weise.' } },
      { id: 'en-gx-prep-3', kind: 'choice', q: 'I object to ___ treated like a child.', options: ['being', 'be', 'been'], answer: 0,
        explain: { ru: 'object to — to предлог → -ing.', de: 'object to — to ist Präposition → -ing.' } }
    ]
  });

  X('modified-comparatives', {
    summary: { ru: 'much / far / a lot + сравнительная — намного; slightly / a bit — чуть-чуть; not as … as — не такой, как.', de: 'much / far / a lot + Komparativ — viel; slightly / a bit — etwas; not as … as — nicht so … wie.' },
    ru: '<ul><li><b>Большая разница</b>: <em>much, far, a lot, considerably</em> + сравнительная степень: <em>far <b>better</b>, a lot <b>cheaper</b>, much <b>more</b> expensive</em>.</li>' +
      '<li><b>Маленькая разница</b>: <em>slightly, a bit, a little</em>: <em>slightly <b>older</b></em>.</li>' +
      '<li><b>Равенство</b>: <em>as … as</em>; <b>почти</b>: <em>nearly / almost as … as</em>; <b>совсем не</b>: <em>not nearly as … as, nowhere near as … as</em>.</li>' +
      '<li><b>Кратность</b>: <em>twice as big as, three times more expensive than</em>.</li>' +
      '<li><b>the + comparative, the + comparative</b>: <em>The sooner, the better.</em></li>' +
      '<li>Нельзя: <em>very + сравнительная</em>, <em>more + -er</em>.</li></ul>',
    de: '<ul><li><b>Großer Unterschied</b>: <em>much, far, a lot</em> + Komparativ (= viel, weit): <em>far <b>better</b>, a lot <b>cheaper</b></em>.</li>' +
      '<li><b>Kleiner Unterschied</b>: <em>slightly, a bit, a little</em> (= etwas, ein bisschen).</li>' +
      '<li><b>Gleichheit</b>: <em>as … as</em> (= so … wie); <em>not nearly as … as</em> (= längst nicht so … wie).</li>' +
      '<li><b>Vielfaches</b>: <em>twice as big as</em> (= doppelt so groß wie).</li>' +
      '<li><b>the … the</b> = je … desto: <em>The sooner, the better.</em></li>' +
      '<li>Nicht: <em>very + Komparativ</em>, nicht <em>more + -er</em>.</li></ul>',
    examples: [
      { t: 'The train is [[far]] faster than the bus.', ru: 'Поезд намного быстрее автобуса.', de: 'Der Zug ist viel schneller als der Bus.' },
      { t: 'This flat is [[twice as]] big as our old one.', ru: 'Эта квартира в два раза больше нашей старой.', de: 'Diese Wohnung ist doppelt so groß wie unsere alte.' },
      { t: '[[The more]] you practise, [[the easier]] it gets.', ru: 'Чем больше практикуешься, тем легче.', de: 'Je mehr du übst, desto leichter wird es.' }
    ],
    pitfalls: [
      { title: { ru: 'than ≠ that', de: 'than ≠ then' },
        html: { ru: '<span class="wrong">bigger that</span> / <span class="wrong">bigger then</span> → <span class="right">bigger than</span>.', de: 'Deutsch „als“: <span class="wrong">bigger as</span> / <span class="wrong">bigger then</span> → <span class="right">bigger than</span>.' } }
    ],
    drills: [
      { id: 'en-gx-mc-1', kind: 'choice', q: 'My new job is ___ less stressful than my old one.', options: ['a lot', 'very', 'more'], answer: 0,
        explain: { ru: 'Усиление сравнения → a lot.', de: 'Verstärkung → a lot.' } },
      { id: 'en-gx-mc-2', kind: 'gap', q: 'The sooner we leave, ___ better.', answer: 'the',
        explain: { ru: 'the …, the … = чем…, тем…', de: 'the …, the … = je …, desto …' } },
      { id: 'en-gx-mc-3', kind: 'choice', q: 'The sequel is not nearly ___ good as the original.', options: ['as', 'so much', 'than'], answer: 0,
        explain: { ru: 'not nearly as … as.', de: 'not nearly as … as.' } }
    ]
  });

  /* Three practice lessons: give them English titles like the rest and a full ru + de explanation. */
  [['frequency-position', 'Frequency adverbs: where they go'], ['duration-for-since', 'Duration: for and since'], ['past-habitual', 'Past habits with would']].forEach(function (p) {
    if (P.grammar[p[0]]) P.grammar[p[0]].title = p[1];
  });

  X('frequency-position', {
    summary: { ru: 'always, usually, often, sometimes, never — перед смысловым глаголом, но после be и вспомогательного.', de: 'always, usually, often, sometimes, never — vor dem Vollverb, aber nach be und Hilfsverben.' },
    ru: '<ul><li><b>Перед смысловым глаголом</b>: <em>I <b>usually</b> walk to work.</em></li>' +
      '<li><b>После be</b>: <em>She is <b>always</b> late.</em></li>' +
      '<li><b>После вспомогательного / модального</b>: <em>I have <b>never</b> been there. You can <b>always</b> call me.</em></li>' +
      '<li>В вопросе — после подлежащего: <em>Do you <b>often</b> cook?</em></li>' +
      '<li><b>sometimes, usually, often</b> могут стоять и в начале для акцента: <em>Sometimes I work from home.</em> <b>Never, always</b> — обычно нет.</li>' +
      '<li>Выражения <em>every day, once a week, twice a month</em> — в <b>конце</b>.</li></ul>',
    de: '<ul><li><b>Vor dem Vollverb</b>: <em>I <b>usually</b> walk to work.</em> — anders als im Deutschen („Ich gehe normalerweise …“)!</li>' +
      '<li><b>Nach be</b>: <em>She is <b>always</b> late.</em></li>' +
      '<li><b>Nach Hilfs-/Modalverb</b>: <em>I have <b>never</b> been there.</em></li>' +
      '<li>In Fragen nach dem Subjekt: <em>Do you <b>often</b> cook?</em></li>' +
      '<li><b>sometimes, usually, often</b> auch am Satzanfang möglich; <b>never, always</b> meist nicht.</li>' +
      '<li><em>every day, once a week</em> stehen am <b>Ende</b>.</li></ul>',
    pitfalls: [
      { title: { ru: 'Не после смыслового глагола', de: 'Nicht nach dem Vollverb' },
        html: { ru: '<span class="wrong">I drink often coffee.</span> → <span class="right">I often drink coffee.</span>', de: '<span class="wrong">I drink often coffee.</span> (deutsche Wortstellung) → <span class="right">I often drink coffee.</span>' } }
    ]
  });

  X('duration-for-since', {
    summary: { ru: 'for + отрезок времени, since + начальная точка; обычно с Present Perfect.', de: 'for + Zeitraum, since + Zeitpunkt; meist mit Present Perfect.' },
    ru: '<ul><li><b>for</b> + <b>длительность</b>: <em>for ten minutes, for three years, for ages</em>.</li>' +
      '<li><b>since</b> + <b>начальная точка</b>: <em>since Monday, since 2020, since I was a child</em>.</li>' +
      '<li>Если ситуация длится до сейчас — <b>Present Perfect (Continuous)</b>: <em>I’ve lived here <b>for</b> two years / <b>since</b> 2023.</em></li>' +
      '<li><b>for</b> возможен с любым временем: <em>I lived there for two years</em> (закончено).</li>' +
      '<li>Вопрос: <em>How long have you…?</em> Ответ: <em>For…/Since…</em></li>' +
      '<li><b>It’s been</b> + отрезок + <b>since</b> + Past: <em>It’s been ages since we met.</em></li></ul>',
    de: '<ul><li><b>for</b> + <b>Dauer</b>: <em>for ten minutes, for three years</em>.</li>' +
      '<li><b>since</b> + <b>Anfangspunkt</b>: <em>since Monday, since 2020, since I was a child</em>.</li>' +
      '<li>Dauert es bis jetzt — <b>Present Perfect (Continuous)</b>, nicht Present: <em>I’ve lived here <b>for</b> two years.</em> (Ich wohne seit zwei Jahren hier.)</li>' +
      '<li><b>for</b> geht auch mit anderen Zeiten: <em>I lived there for two years</em> (abgeschlossen).</li>' +
      '<li><b>It’s been</b> + Zeitraum + <b>since</b>: <em>It’s been ages since we met.</em></li></ul>',
    pitfalls: [
      { title: { ru: '«уже два года» ≠ since', de: '„seit zwei Jahren“ ≠ since' },
        html: { ru: '<span class="wrong">since two years</span> → <span class="right">for two years</span>.', de: '„seit“ + Zeitraum: <span class="wrong">since two years</span> → <span class="right">for two years</span>.' } }
    ]
  });

  X('past-habitual', {
    summary: { ru: 'would + V — повторяющиеся действия в прошлом (не состояния); used to — и действия, и состояния.', de: 'would + Verb — wiederholte Handlungen in der Vergangenheit (keine Zustände); used to — beides.' },
    ru: '<ul><li><b>would + V</b> — повторяющиеся действия в прошлом, обычно когда период уже назван; звучит ностальгически: <em>Every Sunday we <b>would visit</b> Grandma.</em></li>' +
      '<li>Только <b>действия</b>, не состояния: <span class="wrong">I would have a dog</span> → <span class="right">I used to have a dog</span>.</li>' +
      '<li><b>used to</b> — и действия, и состояния: <em>I used to live / used to play</em>.</li>' +
      '<li>Для разового события ни то ни другое не подходит — Past Simple: <em>We visited Rome in 2010.</em></li></ul>',
    de: '<ul><li><b>would + Verb</b> — wiederholte Handlungen in der Vergangenheit (= pflegte zu), oft erzählend: <em>Every Sunday we <b>would visit</b> Grandma.</em></li>' +
      '<li>Nur <b>Handlungen</b>, keine Zustände: <span class="wrong">I would have a dog</span> → <span class="right">I used to have a dog</span>.</li>' +
      '<li><b>used to</b> — Handlungen und Zustände.</li>' +
      '<li>Einmalige Ereignisse: Past Simple.</li></ul>',
    pitfalls: [
      { title: { ru: 'would для состояний', de: 'would für Zustände' },
        html: { ru: '<span class="wrong">We would live in a small flat.</span> → <span class="right">We used to live in a small flat.</span> live — состояние.', de: '<span class="wrong">We would live in a small flat.</span> → <span class="right">We used to live in a small flat.</span> live ist ein Zustand.' } }
    ]
  });
})();
