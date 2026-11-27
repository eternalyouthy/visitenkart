/* RUSSIAN GRAMMAR · Verb aspect. Explanations in English and German; drill sentences in Russian. */
GT.registerGrammar({
  id: 'aspect',
  title: { en: 'Verb aspect: imperfective vs perfective', de: 'Verbaspekt: imperfektiv vs. perfektiv' },
  summary: { en: 'Almost every Russian verb comes as a pair: process / repetition (impf.) vs one completed result (pf.).', de: 'Fast jedes russische Verb hat ein Paar: Vorgang / Wiederholung (ipf.) vs. ein abgeschlossenes Ergebnis (pf.).' },
  explanation: {
    en: '<p>Russian has only three tenses, but every verb also has an <b>aspect</b>. The <b>imperfective</b> (НСВ) looks at the action as a process, a habit or a repeated event: <em>Я писа́л письмо́</em> — I was writing a letter. The <b>perfective</b> (СВ) presents one complete action with a result: <em>Я написа́л письмо́</em> — I wrote (finished) the letter.</p>' +
      '<ul><li><b>Present</b> exists only for imperfective verbs: <em>пишу́</em> — I write / am writing.</li>' +
      '<li>The “present” forms of a <b>perfective</b> verb mean the <b>future</b>: <em>напишу́</em> — I will write (and finish).</li>' +
      '<li>Imperfective future: <b>буду + infinitive</b>: <em>бу́ду писа́ть</em> — I will be writing / will write (regularly).</li></ul>' +
      '<p>Pairs are formed with a prefix (писать → <b>на</b>писать), a suffix (решить → реш<b>а</b>ть, записать → запис<b>ыва</b>ть) or are different words (говорить → сказать, брать → взять).</p>',
    de: '<p>Das Russische hat nur drei Zeiten, aber jedes Verb hat zusätzlich einen <b>Aspekt</b>. Der <b>imperfektive</b> Aspekt (НСВ) zeigt die Handlung als Vorgang, Gewohnheit oder Wiederholung: <em>Я писа́л письмо́</em> — ich schrieb (gerade) einen Brief. Der <b>perfektive</b> Aspekt (СВ) zeigt eine abgeschlossene Handlung mit Ergebnis: <em>Я написа́л письмо́</em> — ich habe den Brief (fertig) geschrieben.</p>' +
      '<ul><li>Ein <b>Präsens</b> haben nur imperfektive Verben: <em>пишу́</em> — ich schreibe.</li>' +
      '<li>Die „Präsens“-Formen eines <b>perfektiven</b> Verbs bedeuten <b>Zukunft</b>: <em>напишу́</em> — ich werde (fertig) schreiben.</li>' +
      '<li>Imperfektives Futur: <b>буду + Infinitiv</b>: <em>бу́ду писа́ть</em> — ich werde (regelmäßig) schreiben.</li></ul>' +
      '<p>Paare entstehen durch ein Präfix (писать → <b>на</b>писать), ein Suffix (решить → реш<b>а</b>ть, записать → запис<b>ыва</b>ть) oder sind verschiedene Wörter (говорить → сказать, брать → взять).</p>'
  },
  tables: [
    { caption: { en: 'Tenses of an aspect pair', de: 'Zeiten eines Aspektpaars' },
      head: { en: ['', 'Imperfective (process)', 'Perfective (result)'], de: ['', 'Imperfektiv (Vorgang)', 'Perfektiv (Ergebnis)'] },
      deCols: [1, 2],
      rows: { en: [['Past', 'я писа́л(а)', 'я написа́л(а)'], ['Present', 'я пишу́', '—'], ['Future', 'я бу́ду писа́ть', 'я напишу́']],
              de: [['Vergangenheit', 'я писа́л(а)', 'я написа́л(а)'], ['Gegenwart', 'я пишу́', '—'], ['Zukunft', 'я бу́ду писа́ть', 'я напишу́']] } },
    { caption: { en: 'Typical signals', de: 'Typische Signale' },
      head: { en: ['Imperfective', 'Perfective'], de: ['Imperfektiv', 'Perfektiv'] },
      deCols: [0, 1],
      rows: {
        en: [['ка́ждый день, обы́чно, ча́сто, всегда́', 'вдруг, сра́зу, уже́ (+ result), наконе́ц'], ['до́лго, весь день, два часа́', 'за два часа́ (within)'], ['не на́до / нельзя́ (+ impf: don’t)', 'на́до (+ pf: get it done)']],
        de: [['ка́ждый день, обы́чно, ча́сто, всегда́', 'вдруг, сра́зу, уже́ (+ Ergebnis), наконе́ц'], ['до́лго, весь день, два часа́', 'за два часа́ (innerhalb von)'], ['не на́до / нельзя́ (+ ipf.: nicht tun)', 'на́до (+ pf.: erledigen)']]
      } }
  ],
  examples: [
    { t: 'Я [[чита́л]] докуме́нтацию весь ве́чер.', en: 'I was reading the documentation all evening.', de: 'Ich habe den ganzen Abend die Doku gelesen.' },
    { t: 'Я [[прочита́л]] докуме́нтацию и всё по́нял.', en: 'I read (through) the documentation and understood everything.', de: 'Ich habe die Doku durchgelesen und alles verstanden.' },
    { t: 'За́втра я [[позвоню́]] вам.', en: 'I’ll call you tomorrow.', de: 'Ich rufe Sie morgen an.' }
  ],
  pitfalls: [
    { title: { en: 'A perfective “present” is the future', de: 'Perfektives „Präsens“ ist Zukunft' },
      html: { en: '<em>Я сде́лаю</em> = I <b>will</b> do it, not “I am doing it”. For “I’m doing it right now” use the imperfective: <em>Я де́лаю</em>.', de: '<em>Я сде́лаю</em> = ich <b>werde</b> es machen, nicht „ich mache es gerade“. Für „ich mache es gerade“: <em>Я де́лаю</em> (ipf.).' } },
    { title: { en: 'No буду with perfective verbs', de: 'Kein буду bei perfektiven Verben' },
      html: { en: '<em>✗ Я бу́ду сде́лать</em>. Either <em>я сде́лаю</em> (pf.) or <em>я бу́ду де́лать</em> (impf.).', de: '<em>✗ Я бу́ду сде́лать</em>. Entweder <em>я сде́лаю</em> (pf.) oder <em>я бу́ду де́лать</em> (ipf.).' } },
    { title: { en: 'Negated commands use the imperfective', de: 'Verneinte Aufforderungen: Imperfektiv' },
      html: { en: '<em>Не открыва́йте э́то письмо́!</em> (don’t open). <em>Не откро́йте</em> sounds like a warning “mind you don’t accidentally open”.', de: '<em>Не открыва́йте э́то письмо́!</em> (öffnen Sie nicht). <em>Не откро́йте</em> klingt wie eine Warnung „dass Sie es bloß nicht versehentlich öffnen“.' } }
  ],
  drills: [
    { id: 'ru-g-aspect-1', kind: 'choice', q: 'Я ___ отчёт два часа́, но не зако́нчил.', options: ['писа́л', 'написа́л'], answer: 0,
      explain: { en: '“For two hours … but didn’t finish”: a process without result → imperfective писал.', de: '„Zwei Stunden … aber nicht fertig“: Vorgang ohne Ergebnis → imperfektiv писал.' } },
    { id: 'ru-g-aspect-2', kind: 'choice', q: 'Я уже́ ___ отчёт, мо́жешь посмотре́ть.', options: ['писа́л', 'написа́л'], answer: 1,
      explain: { en: 'The report is ready and can be read: a completed result → perfective написал.', de: 'Der Bericht ist fertig: abgeschlossenes Ergebnis → perfektiv написал.' } },
    { id: 'ru-g-aspect-3', kind: 'choice', q: 'Ка́ждое у́тро я ___ по́чту.', options: ['проверя́ю', 'прове́рю'], answer: 0,
      explain: { en: '“Every morning” = a habit → imperfective present проверяю.', de: '„Jeden Morgen“ = Gewohnheit → imperfektives Präsens проверяю.' } },
    { id: 'ru-g-aspect-4', kind: 'choice', q: 'Не волну́йтесь, я ___ э́то за́втра.', options: ['бу́ду сде́лать', 'сде́лаю'], answer: 1,
      explain: { en: 'One concrete task finished tomorrow → perfective future сделаю. «Буду» never combines with a perfective infinitive.', de: 'Eine konkrete Aufgabe, morgen erledigt → perfektives Futur сделаю. «Буду» nie mit perfektivem Infinitiv.' } },
    { id: 'ru-g-aspect-5', kind: 'choice', q: 'Пожа́луйста, не ___ э́ту ссы́лку — э́то фи́шинг!', options: ['открыва́йте', 'откро́йте'], answer: 0,
      explain: { en: 'A negated instruction (“don’t do it”) normally uses the imperfective imperative.', de: 'Ein verneinter Hinweis („tun Sie es nicht“) steht normalerweise im imperfektiven Imperativ.' } },
    { id: 'ru-g-aspect-6', kind: 'gap', q: { en: 'Я ___ тебе́ за́втра у́тром. (позвони́ть, pf., я-form)', de: 'Я ___ тебе́ за́втра у́тром. (позвони́ть, pf., я-Form)' }, answer: 'позвоню́',
      hint: { en: 'Put the perfective verb into the form that means “I will …”.', de: 'Setze das perfektive Verb in die Form für „ich werde …“.' },
      explain: { en: 'Perfective “present” = future: позвонить → (я) позвоню́ — I will call.', de: 'Perfektives „Präsens“ = Zukunft: позвонить → (я) позвоню́ — ich werde anrufen.' } },
    { id: 'ru-g-aspect-7', kind: 'gap', q: { en: 'Мы ___ рабо́тать над прое́ктом весь ме́сяц. (быть + infinitive, мы-form)', de: 'Мы ___ рабо́тать над прое́ктом весь ме́сяц. (быть + Infinitiv, мы-Form)' }, answer: 'бу́дем',
      hint: { en: 'Imperfective future = form of быть + infinitive.', de: 'Imperfektives Futur = Form von быть + Infinitiv.' },
      explain: { en: '“All month” = a process → imperfective future: (мы) бу́дем рабо́тать.', de: '„Den ganzen Monat“ = Vorgang → imperfektives Futur: (мы) бу́дем рабо́тать.' } },
    { id: 'ru-g-aspect-8', kind: 'choice', q: 'Вдруг се́рвер ___.', options: ['па́дал', 'упа́л'], answer: 1,
      explain: { en: '«Вдруг» (suddenly) marks a single completed event → perfective упал.', de: '«Вдруг» (plötzlich) markiert ein einmaliges abgeschlossenes Ereignis → perfektiv упал.' } }
  ]
});
