/* OVERLAY · English versions of the German GRAMMAR pages (Konjunktiv II, Nebensätze, Passiv).
 * page.i18n.en.{summary, explanation}, tables[i].i18n.en.{caption, head, rows}, examples[i].en,
 * pitfalls[i].i18n.en.{title, html}, drills: i18n.en.{q, explain} (q only where the base contains Russian). */
(function () {
  var P = GT._target;
  function page(id, o) {
    var g = P.grammar[id];
    if (!g) return;
    g.i18n = g.i18n || {};
    g.i18n.en = Object.assign(g.i18n.en || {}, { summary: o.summary, explanation: o.explanation });
    (o.tables || []).forEach(function (t, i) { var tb = g.tables[i]; if (tb) { tb.i18n = tb.i18n || {}; tb.i18n.en = t; } });
    (o.examples || []).forEach(function (s, i) { if (g.examples[i]) g.examples[i].en = s; });
    (o.pitfalls || []).forEach(function (p, i) { var x = g.pitfalls[i]; if (x) { x.i18n = x.i18n || {}; x.i18n.en = p; } });
    Object.keys(o.drills || {}).forEach(function (did) {
      var d = g.drills.filter(function (x) { return x.id === did; })[0];
      if (d) { d.i18n = d.i18n || {}; d.i18n.en = o.drills[did]; }
    });
  }

  page('konjunktiv2', {
    summary: 'Wishes, advice, polite requests and unreal conditions: würde, hätte, wäre, könnte.',
    explanation:
      '<p>Konjunktiv II is the German subjunctive — the equivalent of English “would / could / if I were”. At B1 you need it for four things:</p>' +
      '<ul>' +
      '<li><b>Polite requests:</b> <em>Könnten Sie mir helfen?</em> <em>Ich hätte gern einen Kaffee.</em></li>' +
      '<li><b>Wishes:</b> <em>Ich hätte gern mehr Zeit.</em> <em>Wenn ich doch schon B2 wäre!</em></li>' +
      '<li><b>Advice:</b> <em>Du solltest …</em> <em>An deiner Stelle würde ich …</em></li>' +
      '<li><b>Unreal conditions:</b> <em>Wenn ich Zeit hätte, würde ich mitkommen.</em></li>' +
      '</ul>' +
      '<p><b>Formation:</b> most verbs use <b>würde + infinitive</b> (<em>ich würde fahren</em>). But <b>haben, sein, werden</b> and the <b>modal verbs</b> have their own short forms: hätte, wäre, würde, könnte, müsste, dürfte, sollte, wollte. Use them instead of “würde haben”. Also common in speech: <em>wüsste, käme, gäbe, ginge</em>.</p>' +
      '<p><b>Past (unreal past):</b> hätte/wäre + past participle: <em>Wenn ich das gewusst hätte, wäre ich früher gekommen.</em> — If I had known that, I would have come earlier.</p>',
    tables: [{ caption: 'Main forms', head: ['', 'haben', 'sein', 'werden', 'können'] }],
    examples: [
      'I’d like an appointment in the morning.',
      'Could you please send me the invoice again?',
      'If I had more time, I would do a Python course.',
      'If I were you, I’d change the password immediately.',
      'You should check the logs before you restart the server.',
      'It would be great if we managed it by Friday.',
      'If the backup had worked, we wouldn’t have lost any data.'
    ],
    pitfalls: [
      { title: 'hatte ≠ hätte, war ≠ wäre', html: 'English “if I had time” uses a past-looking form, so it is tempting to use the Präteritum: <span class="wrong">Wenn ich Zeit hatte, …</span> — that means “when I had time” (real past). Unreal = umlaut: <span class="right">Wenn ich Zeit hätte, …</span>. One umlaut changes the meaning.' },
      { title: 'Konjunktiv in both clauses', html: 'German needs the subjunctive in both parts: <span class="right">Wenn ich Zeit hätte, würde ich kommen.</span> Not <span class="wrong">Wenn ich Zeit hätte, ich komme.</span> Note also: after a wenn-clause <b>the verb comes first</b>: “…, würde ich”, not “…, ich würde”.' },
      { title: 'No “würde” with haben / sein / modals', html: '<span class="wrong">Ich würde gern mehr Geld haben.</span> sounds clumsy. Use the short forms: <span class="right">Ich hätte gern mehr Geld.</span> <span class="right">Ich könnte morgen kommen.</span>' },
      { title: '“Ich will” in a shop sounds rude', html: 'German “Ich will …” sounds like a demand to a waiter (like “I want …” in English, only stronger). Say <span class="right">Ich hätte gern …</span> or <span class="right">Ich möchte …</span>.' }
    ],
    drills: {
      'g-k2-d1': { explain: 'Unreal condition → Konjunktiv II of haben: hätte (not hatte).' },
      'g-k2-d2': { q: '___ Sie mir bitte helfen? (können, polite)', explain: 'Polite request: Könnten Sie …?' },
      'g-k2-d3': { explain: 'Advice → würde + infinitive. “wurde” is the Präteritum of werden.' },
      'g-k2-d4': { explain: 'Unreal: wäre. “Wenn ich du wäre” — if I were you.' },
      'g-k2-d5': { q: 'Build: “If I had time, I would come.”', explain: 'Verb at the end of the wenn-clause; the main clause starts with the verb.' },
      'g-k2-d6': { q: 'Du ___ die Schwachstelle sofort melden. (sollen, advice)', explain: 'Advice: du solltest …' },
      'g-k2-d7': { q: 'In a café: “___ einen Cappuccino, bitte.”', explain: '“Ich hätte gern …” is the polite standard for ordering.' },
      'g-k2-d8': { explain: 'Wish / unreality: es wäre schön, wenn …' }
    }
  });

  page('nebensaetze', {
    summary: 'weil, dass, obwohl, wenn vs als, damit vs um … zu, indirect questions with ob and W-words.',
    explanation:
      '<p>In a subordinate clause (Nebensatz) <b>the conjugated verb goes to the end</b>:</p>' +
      '<ul>' +
      '<li><em>Ich bleibe zu Hause, weil ich krank bin.</em></li>' +
      '<li>Separable verbs are joined up again: <em>…, dass er morgen anruft.</em></li>' +
      '<li>With a modal verb or the Perfekt, the conjugated verb comes last: <em>…, weil ich arbeiten muss.</em> / <em>…, dass ich ihn gesehen habe.</em></li>' +
      '</ul>' +
      '<p>If the subordinate clause comes <b>first</b>, it takes position one and the main clause starts straight with the verb: <em>Weil ich krank bin, bleibe ich zu Hause.</em></p>' +
      '<p>There is always a comma between the main and the subordinate clause.</p>' +
      '<p>See <a href="#/grammar/wortstellung">Wortstellung</a> for verb placement in main clauses and <a href="#/grammar/perfekt">Perfekt vs Präteritum</a> for the past tenses.</p>',
    tables: [{ caption: 'Conjunctions', head: ['Conjunction', 'Meaning', 'Example'], rows: [
      ['weil', 'because', 'Ich bleibe zu Hause, weil ich krank bin.'],
      ['dass', 'that', 'Ich glaube, dass das Update fertig ist.'],
      ['obwohl', 'although', 'Obwohl es regnet, fahre ich mit dem Rad.'],
      ['wenn', 'if; when (repeated, also in the past)', 'Wenn ich Zeit habe, rufe ich dich an.'],
      ['als', 'when (a single event in the past)', 'Als ich nach Deutschland kam, sprach ich kaum Deutsch.'],
      ['damit', 'so that (subjects may differ)', 'Ich erkläre es langsam, damit alle es verstehen.'],
      ['um … zu', 'in order to (same subject)', 'Ich lerne Deutsch, um im Job besser zu kommunizieren.'],
      ['ob', 'whether (yes/no question)', 'Weißt du, ob der Server läuft?'],
      ['W-word', 'indirect W-question', 'Kannst du mir sagen, wann das Meeting anfängt?']
    ] }],
    examples: [
      'I can’t come today because I have a doctor’s appointment.',
      'The boss said that we’re postponing the project.',
      'When I got home yesterday, the power was off.',
      'I’m writing a guide so that colleagues can use the tool themselves.',
      'I’m doing the course in order to develop professionally.',
      'Do you know whether the backup ran last night?',
      'Can you tell me who is responsible for the firewall?'
    ],
    pitfalls: [
      { title: 'Verb at the end, not in second position', html: 'In English the word order after “because” doesn’t change. In German it does: <span class="wrong">…, weil ich bin krank.</span> → <span class="right">…, weil ich krank bin.</span> (In casual speech Germans sometimes say “weil ich bin …”, but in writing and in exams it is a mistake.)' },
      { title: '“When” = wenn OR als', html: 'A single event in the past → <span class="right">als</span>: “Als ich Kind war, …”. Present, future or repeated (also in the past: “whenever”) → <span class="right">wenn</span>: “Immer wenn ich ihn besuchte, …”.' },
      { title: '“Whether / if” → ob (not wenn)', html: '“I don’t know if the server is running” → <span class="right">Ich weiß nicht, ob der Server läuft.</span> Not <span class="wrong">…, wenn der Server läuft</span> — English “if” pulls you towards wenn.' },
      { title: 'No question word order in indirect questions', html: '<span class="wrong">Kannst du mir sagen, wo ist der Bahnhof?</span> → <span class="right">Kannst du mir sagen, wo der Bahnhof ist?</span>' },
      { title: '“To / so that” = um … zu or damit', html: 'Same subject → <span class="right">um … zu</span> + infinitive: “Ich spare, um ein Auto zu kaufen”. Different subjects → <span class="right">damit</span>: “Ich spare, damit meine Kinder studieren können”.' }
    ],
    drills: {
      'g-ns-d1': { explain: 'The conjugated modal verb goes right at the end.' },
      'g-ns-d2': { q: 'Build: “I don’t know whether the server is running.”', explain: 'ob = whether; the verb (läuft) at the end.' },
      'g-ns-d3': { explain: 'A single event in the past → als.' },
      'g-ns-d4': { explain: 'Same subject + infinitive with zu → um … zu.' },
      'g-ns-d5': { explain: 'Different subject (die Kollegen) → damit.' },
      'g-ns-d6': { explain: 'Indirect question: the separable verb is joined up at the end.' },
      'g-ns-d7': { q: 'Build: “Although it was late, we kept working.”', explain: 'Subordinate clause first → main clause starts with the verb (haben).' },
      'g-ns-d8': { explain: 'Repeated situation → wenn.' }
    }
  });

  page('passiv', {
    summary: 'werden + past participle in the present, past, perfect and with modal verbs.',
    explanation:
      '<p>The passive puts the <b>action</b> in focus, not the person doing it. That is why it is very common in work emails, reports, instructions and the news.</p>' +
      '<p><b>Formation:</b> <b>werden</b> (conjugated) + <b>past participle</b> at the end: <em>Die Daten werden gesichert.</em> — The data is being backed up.</p>' +
      '<ul>' +
      '<li>By whom: <b>von + dative</b> (a person or agent): <em>von einer Kollegin</em></li>' +
      '<li>By what means / for what reason: <b>durch + accusative</b>: <em>durch ein Update</em></li>' +
      '<li>In the Perfekt — <b>worden</b> (not geworden): <em>Das Paket ist geliefert worden.</em></li>' +
      '<li>With a modal verb: modal + past participle + <b>werden</b>: <em>Das muss repariert werden.</em></li>' +
      '</ul>' +
      '<p>Careful: <b>sein + past participle</b> describes a <b>state</b> (Zustandspassiv): <em>Die Tür ist geschlossen</em> (the door is closed) vs <em>Die Tür wird geschlossen</em> (the door is being closed).</p>',
    tables: [{ caption: 'Tenses', head: ['Tense', 'Form', 'Example'], rows: [
      ['Präsens', 'wird + Partizip II', 'Der Server wird neu gestartet.'],
      ['Präteritum', 'wurde + Partizip II', 'Der Server wurde neu gestartet.'],
      ['Perfekt', 'ist + Partizip II + worden', 'Der Server ist neu gestartet worden.'],
      ['With a modal (Präsens)', 'muss + Partizip II + werden', 'Der Server muss neu gestartet werden.'],
      ['With a modal (Präteritum)', 'musste + Partizip II + werden', 'Der Server musste neu gestartet werden.']
    ] }],
    examples: [
      'The data is backed up automatically every night.',
      'The town hall was built in 1890.',
      'The error was discovered by a colleague.',
      'The vulnerability must be closed immediately.',
      'Smoking is not allowed here.',
      'Unfortunately your application can only be processed next week.',
      'People cycle a lot in Germany.'
    ],
    pitfalls: [
      { title: 'No reflexive “sich” for the passive', html: 'Some languages express the passive with a reflexive verb (Russian “Дом строится”). German doesn’t: <span class="wrong">Das Haus baut sich.</span> → <span class="right">Das Haus wird gebaut.</span> or with “man”: <span class="right">Man baut hier ein Haus.</span>' },
      { title: '“was built” ≠ “war gebaut”', html: 'For an event in the past use <span class="right">wurde gebaut</span>. <span class="wrong">war gebaut</span> describes a state (“had already been built”) — usually not what you mean.' },
      { title: '“worden”, not “geworden”', html: 'Passive Perfekt: <span class="right">Das Paket ist geliefert worden.</span> Not <span class="wrong">… geliefert geworden</span>. “Geworden” is only for werden as a full verb: “Er ist Arzt geworden”.' },
      { title: 'By whom — von, not mit', html: 'The agent is not expressed with “mit”: <span class="right">von meinem Kollegen</span> (a person), <span class="right">durch das Update</span> (means/cause).' },
      { title: 'Modal + passive: “werden”, not “sein”', html: '“Must be repaired” → <span class="right">muss repariert werden</span>. <span class="wrong">muss repariert sein</span> means it must already be in a repaired state.' }
    ],
    drills: {
      'g-pa-d1': { explain: 'Plural subject → werden + past participle.' },
      'g-pa-d2': { explain: 'Passive Präteritum: wurde + past participle.' },
      'g-pa-d3': { explain: 'The passive Perfekt is formed with worden.' },
      'g-pa-d4': { explain: 'Modal + past participle + werden.' },
      'g-pa-d5': { q: 'Build: “The server has to be restarted.”', explain: 'Modal in second position, past participle + werden at the end.' },
      'g-pa-d6': { explain: 'Means / tool → durch + accusative.' },
      'g-pa-d7': { q: '“No smoking here.” → Hier ___ nicht geraucht.', explain: 'Impersonal passive: Hier wird nicht geraucht.' },
      'g-pa-d8': { explain: 'Active with “man” → passive with werden + past participle.' }
    }
  });
})();
