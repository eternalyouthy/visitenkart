/* OVERLAY · German metadata for the ENGLISH pack ("I know: German · I learn: English").
 * Covers topic scenarios, word families, affixes (+ drills), classical roots, and all 30 grammar pages (+ drills). */
(function () {
  'use strict';
  var P = GT._target;
  if (!P) return;

  /* ---- 1. Topic scenarios (43) ---- */
  GT.localize('de', {}, {
    // Words · B1–B2 core topics
    'words.everyday': { scenario: 'Du bist mein Nachbar. Sprich mit mir über die letzte Woche, Pläne und unerledigte Dinge.' },
    'words.people': { scenario: 'Du bist ein Freund, der mir seine Familie vorstellt. Sprich mit mir über Beziehungen, Charakter und jüngste Ereignisse.' },
    'words.home': { scenario: 'Du bist der Vermieter. Ich besichtige die Wohnung und frage nach Miete, Kaution, Heizung und Reparaturen.' },
    'words.food': { scenario: 'Du bist zuerst Verkäufer im Laden, dann Kellner. Ich erkläre ein Problem mit einem Einkauf und frage nach den Zutaten eines Gerichts.' },
    'words.health': { scenario: 'Du bist zuerst Praxisrezeptionist, dann Arzt in einem Übungsrollenspiel. Hilf mir, Symptome zu beschreiben und Fragen zur Terminvereinbarung zu üben.' },
    'words.work': { scenario: 'Du bist Teamleiter in einem Vorstellungsgespräch für IT-Sicherheit. Frage nach Erfahrung, Aufgaben und Zusammenarbeit im Team.' },
    'words.authorities': { scenario: 'Du bist Mitarbeiter einer Bank oder Behörde. Ich frage nach der Dokumentenliste, dem Ausfüllen des Formulars und dem Ablauf der Terminvergabe.' },
    'words.travel': { scenario: 'Du bist Mitarbeiter am Bahnhof. Mein Zug wurde gestrichen; hilf mir, Umstiege, Preis und eine alternative Route zu besprechen.' },
    'words.leisure': { scenario: 'Du bist ein Freund mit anderen Vorlieben. Einige dich mit mir auf ein Konzert, eine Ausstellung oder eine andere Aktivität am Wochenende.' },
    'words.society': { scenario: 'Du bist ein Kollege mit einer anderen Meinung. Diskutiere mit mir über eine lokale Initiative in Bildung oder Naturschutz.' },
    // Words · B2 themes
    'it.career-paths': { scenario: 'Du bist Karriereberater. Sprich mit mir über Entwicklungsmöglichkeiten in der Cybersicherheit, Weiterbildung und Gehaltsvorstellungen.' },
    'it.world-of-work': { scenario: 'Du bist HR-Manager und stehst Remote-Arbeit skeptisch gegenüber. Diskutiere mit mir über Vorteile, Nachteile und Regeln.' },
    'words.wellbeing': { scenario: 'Du bist ein Freund. Sprich mit mir über Arbeitsbelastung, Gewohnheiten und Möglichkeiten, um Unterstützung zu bitten.' },
    'words.digital-life': { scenario: 'Du bist Interviewer. Frage nach meiner Meinung zu sozialen Medien, Falschinformationen und dem Schutz der Privatsphäre.' },
    'words.environment': { scenario: 'Du bist Organisator einer Anwohnerversammlung. Sprich mit mir über Abfallvermeidung und umweltfreundlicheren Verkehr.' },
    'words.economy': { scenario: 'Du bist Diskussionsleiter. Sprich mit mir über den Einfluss von Preisen auf Einkäufe und die Wahl zwischen Reparatur und Neukauf.' },
    'words.society-politics': { scenario: 'Du bist Teilnehmer einer lokalen Diskussion. Höre dir meine Meinung zu einer gesellschaftlichen Initiative an und biete eine andere Perspektive.' },
    'words.education': { scenario: 'Du bist Bildungsberater. Hilf mir, zwei Kurse zu vergleichen und zu erklären, welche Fähigkeiten ich entwickeln möchte.' },
    // Professional (IT & Business)
    'it.work': { scenario: 'Du bist ein Kollege. Besprich mit mir die Tagesordnung eines Meetings, eine Aufgabenübergabe und die nächsten Schritte danach.' },
    'it.dev': { scenario: 'Du bist Entwickler bei einem Code-Review. Kläre Anforderungen, Tests und den Rollback-Plan.' },
    'it.infra': { scenario: 'Du bist Bereitschaftsingenieur. Besprich mit mir einen Serviceausfall, Netzwerkprüfungen und die Wiederherstellung.' },
    'it.security': { scenario: 'Du bist Teamleiter. Frage nach Zugriffsprüfung, Sicherheitsvorfall und Vertrauensgrenzen.' },
    'it.business': { scenario: 'Du bist Projektpartner. Verhandle mit mir über Fristen, ein Gegenangebot und einen Kompromiss; bitte mich danach um eine kurze Zusammenfassungs-E-Mail.' },
    // Chunks · Everyday & IT
    'chunks.opinion': { scenario: 'Du bist ein neugieriger Kollege. Frage nach meiner Meinung zu verschiedenen Alltagsfragen.' },
    'chunks.agree': { scenario: 'Du bist ein Kollege mit einer anderen Meinung zu Remote-Arbeit. Diskutiere mit mir die Argumente beider Seiten.' },
    'chunks.clarify': { scenario: 'Du bist ein Mitarbeiter, der ein Verfahren schnell erklärt. Ich soll unklare Begriffe nachfragen und mein Verständnis absichern.' },
    'chunks.complain': { scenario: 'Du bist Mitarbeiter in einem Geschäft. Ich erkläre ein Problem mit einer Bestellung und bitte um eine Lösung.' },
    'chunks.problem': { scenario: 'Du bist Support-Mitarbeiter. Frage nach, was nicht funktioniert, wann es angefangen hat und was ich bereits ausprobiert habe.' },
    'chunks.appointments': { scenario: 'Du bist Praxisrezeptionist. Vereinbare zuerst einen Termin mit mir und hilf mir dann, ihn auf einen anderen Tag zu verschieben.' },
    'chunks.phone': { scenario: 'Du bist zuerst Sekretär, dann Support-Mitarbeiter. Ich bitte darum, durchgestellt zu werden, und hinterlasse eine Nachricht.' },
    'chunks.email': { scenario: 'Gib mir eine berufliche Situation vor. Ich schreibe eine E-Mail, und du antwortest als Empfänger und schlägst sprachliche Verbesserungen vor.' },
    'chunks.smalltalk': { scenario: 'Du bist ein Kollege am Montag in der Büroküche. Plaudere mit mir über das Wochenende und aktuelle Neuigkeiten.' },
    'chunks.it-standup': { scenario: 'Du moderierst das Stand-up. Frage nach der aktuellen Aufgabe, Blockern und dem nächsten Schritt.' },
    'chunks.it-bug': { scenario: 'Du bist Entwickler. Bitte mich, die Schritte zur Reproduktion eines Fehlers und das erwartete Verhalten zu erklären.' },
    'chunks.it-help': { scenario: 'Du bist ein erfahrener Kollege. Ich bitte um Hilfe bei einer Aufgabe und erkläre, was ich bereits geprüft habe.' },
    'chunks.it-meeting': { scenario: 'Du bist Teamleiter in einem Architektur-Meeting. Ich widerspreche höflich einer Entscheidung und schlage eine Alternative vor.' },
    // Expressions · Idioms & Everyday Phrases
    'expressions.idioms': { scenario: 'Ein lockeres Gespräch mit einem Kollegen beim Kaffee, in dem Idiome ganz natürlich vorkommen. Du bist der Kollege.' },
    'expressions.everyday': { scenario: 'Ein kurzer Berufs- und Alltagsdialog mit Kollegen, in dem lebendige, kurze Antworten gefragt sind. Du bist der Kollege.' },
    'expressions.idioms-people': { scenario: 'Du bist eine neue Bekanntschaft. Sprich mit mir über Interessen und Eindrücke und nutze dabei Idiome im passenden Kontext.' },
    'expressions.idioms-situations': { scenario: 'Du bist ein Freund. Sprich mit mir über Pläne, Einkäufe und Hilfe bei alltäglichen Aufgaben.' },
    'expressions.idioms-decisions': { scenario: 'Du bist ein Kollege. Sprich mit mir über die Einarbeitung in einen neuen Job, Verzögerungen und die Qualität der Ergebnisse.' },
    'expressions.everyday-respond': { scenario: 'Du bist ein Freund. Schlage Pläne vor und erzähle von kleinen Schwierigkeiten; ich antworte mit natürlichen Wendungen.' },
    'expressions.everyday-arrange': { scenario: 'Du bist ein Bekannter. Vereinbare mit mir ein Treffen und kläre die Details zur Anreise.' }
  });

  /* ---- 2. Word families (45) ---- */
  function fam(id, de, note) {
    var r = P.roots && P.roots[id];
    if (!r) return;
    r.de = de;
    r.i18n = r.i18n || {};
    r.i18n.de = { note: note };
  }

  fam('act', 'handeln; die Handlung', 'ACT ist die moderne Grundlage act; Formen auf -ion und -ive gehören zur etablierten Wortfamilie. React bedeutet hier „reagieren“, nicht „eine Rolle erneut spielen“.');
  fam('form', 'die Form; formen', 'Form, formal und transform lassen sich gut gemeinsam lernen, aber es gibt keine freie Regel für beliebige lateinische Präfixe. Inform gehört zu einer eigenen modernen Wortfamilie.');
  fam('connect', 'verbinden', 'Physische Verbindung, Netzwerk und inhaltlicher Zusammenhang sind unterschiedliche Bedeutungen. Für connection sind sie auf separate Karten aufgeteilt.');
  fam('employ', 'beschäftigen; das Arbeitsverhältnis', 'Employer gibt Arbeit, employee arbeitet im Angestelltenverhältnis. Unemployed (arbeitslos) und self-employed (selbstständig) sind keine bloßen Gegenteile über ein einzelnes Suffix.');
  fam('develop', 'entwickeln; erarbeiten', 'Develop kann „sich entwickeln“, „entwickeln“ oder „mit der Zeit erwerben“ bedeuten. Im Fokus stehen hier Produkt- und Berufsentwicklung.');
  fam('manage', 'leiten; bewältigen', 'Manage a team heißt „leiten“, manage to do heißt „schaffen“. Manageable beschreibt eine bewältigbare Aufgabe, keinen Vorgesetzten.');
  fam('decide', 'entscheiden, eine Entscheidung treffen', 'Bei decide → decision ändert sich der Stamm. Decisive kann „entscheidend“ oder „entschlossen“ bedeuten; indecisive heißt „unentschlossen“.');
  fam('inform', 'informieren, mitteilen', 'Die moderne Grundlage inform wird getrennt von form gelernt. Information ist im normalen Gebrauch unzählbar; informative ist nicht gleichbedeutend mit informed.');
  fam('communicate', 'kommunizieren, übermitteln', 'Communicate with heißt „mit jemandem kommunizieren“; communicate something to someone heißt „jemandem etwas mitteilen“. Community entsteht nicht einfach durch Anhängen von -ity an communicate.');
  fam('create', 'erschaffen, erstellen', 'Creative (kreativ), creation (Schöpfung/Ergebnis) und creativity (Kreativität) haben unterschiedliche Rollen. Der Bindestrich in re-create unterscheidet „neu erschaffen“ von recreation (Erholung).');
  fam('educate', 'ausbilden, bilden', 'Education bezeichnet das Bildungssystem und den Prozess; educated bedeutet „gebildet“, educational „pädagogisch/lehrreich“. Verwechsle -ed und -al nicht.');
  fam('organize', 'organisieren', 'Im Katalog wird durchgehend die Schreibweise -ize verwendet. Die britischen Formen organise/organisation sind ebenfalls korrekt und werden in Übungen akzeptiert.');
  fam('apply', 'sich bewerben; anwenden', 'Apply for a job und apply a rule folgen unterschiedlichen Mustern. Application kann Bewerbung, Anwendung oder Software-Anwendung bedeuten; die Karten trennen diese Bedeutungen.');
  fam('agree', 'zustimmen, sich einigen', 'Agree with a person, agree on a plan, agree to a proposal. Agreement heißt Vereinbarung oder Zustimmung; disagree bedeutet keinen aggressiven Streit.');
  fam('differ', 'sich unterscheiden', 'Different heißt „anders/unterschiedlich“, indifferent bedeutet „gleichgültig“ — nicht einfach „nicht unterschiedlich“. Differently ist das Adverb der Art und Weise.');
  fam('depend', 'abhängen', 'Depend on heißt „abhängen von“ oder „sich verlassen auf“. Dependable bedeutet „zuverlässig“, dependent „abhängig“. Unabhängigkeit ist nicht gleich Zuverlässigkeit.');
  fam('relate', 'in Beziehung setzen; sich beziehen', 'Relation beschreibt eine Beziehung oder einen Zusammenhang, relationship eine zwischenmenschliche Beziehung oder die Art der Verbindung. Relative als Adjektiv und als Substantiv („Verwandter“) haben eigene Bedeutungen.');
  fam('protect', 'schützen', 'Protect from/against; protection (Schutz), protective (schützend). Overprotective bezeichnet übermäßige Fürsorge, nicht bloß starken Schutz.');
  fam('secure', 'sicher; absichern', 'Secure als Adjektiv und als Verb sind verschiedene Wortarten. Security heißt Sicherheit, insecurity kann auch innere Unsicherheit bedeuten; der Kontext entscheidet.');
  fam('respond', 'antworten, reagieren', 'Respond to a request heißt „auf eine Anfrage antworten“. Response (Antwort/Reaktion), responsive (schnell reagierend). Responsible gehört zu einer eigenen modernen Wortfamilie.');
  fam('prepare', 'vorbereiten', 'Prepare ist eine eigenständige moderne Grundlage. Leite seine Bedeutung nicht aus modernem pre- und einem nicht existierenden freien Verb pare im Sinne von „bereiten“ ab.');
  fam('succeed', 'Erfolg haben, gelingen', 'Succeed → success ist eine Verbindung innerhalb einer etablierten Familie mit Stammwechsel. Success entsteht nicht durch mechanisches Anhängen von -s an succeed.');
  fam('perform', 'ausführen; auftreten', 'Perform a task und perform on stage haben unterschiedliche Bedeutungen. Performance kann Ausführung, Auftritt oder Systemleistung bedeuten.');
  fam('support', 'unterstützen', 'Support ist eine eigenständige Grundlage, kein modernes Muster aus sup- + port. Supportive heißt „unterstützend“, supported „unterstützt“.');
  fam('produce', 'produzieren, erzeugen', 'Bei produce → product ändert sich der Stamm. Productive (produktiv), production (Produktion); reproduce bedeutet nicht einfach, irgendeinen neuen Gegenstand herzustellen.');
  fam('construct', 'bauen, konstruieren', 'Construct ist ein modernes Verb. Die historische Wurzel struct wird separat behandelt; instruct und destroy sind keine freien Ableitungen von construct.');
  fam('define', 'definieren, bestimmen', 'Define → definition beinhaltet einen Stammwechsel. Definite heißt „eindeutig/bestimmt“, definitely „definitiv“ — das ist nicht dasselbe wie ein genau definierter Fachbegriff.');
  fam('explain', 'erklären', 'Man sagt explain something to someone, nicht explain someone something. Explanation verändert den Stamm; explanatory heißt „erklärend“, und unexplained sowie inexplicable haben verschiedene Nuancen.');
  fam('express', 'ausdrücken', 'Expression kann Gedankenausdruck, Gesichtsausdruck oder feste Wendung bedeuten. Expressive (ausdrucksstark) und expressly (ausdrücklich) sind nicht austauschbar.');
  fam('consider', 'erwägen; berücksichtigen', 'Considerable heißt „beträchtlich“, considerate „rücksichtsvoll“. Trotz ähnlicher Schreibweise dürfen sie nicht verwechselt werden.');
  fam('evaluate', 'bewerten, auswerten', 'Evaluate ist ein modernes Verb, evaluation der Bewertungsprozess. Value bildet eine eigene Familie; die Verbindung ist hier rein didaktisch und inhaltlich, kein mechanisches Weglassen von Buchstaben.');
  fam('use', 'benutzen; der Nutzen', 'Useful (nützlich) vs. usable (brauchbar/benutzbar). Used to do und be used to doing sind unterschiedliche Grammatikstrukturen und lassen sich nicht aus einer einzigen Übersetzung von „benutzen“ ableiten.');
  fam('care', 'die Fürsorge; die Sorgfalt', 'Careful (sorgfältig), caring (fürsorglich), careless (unachtsam), carefree (sorglos). Careless und carefree haben ganz unterschiedliche Wertungen.');
  fam('comfort', 'der Komfort; trösten', 'Comfortable kann einen Sessel, das körperliche Befinden oder eine Situation beschreiben. Comforting heißt „tröstlich“; discomfort bedeutet „Unbehagen“, nicht das Fehlen eines Trösters.');
  fam('responsible', 'verantwortlich', 'Responsible ist eine moderne Lerngrundlage. Die historische Verbindung zu respond ergibt kein freies Bildungsmodell respond + -ible.');
  fam('possible', 'möglich', 'Possible (möglich), possibly (möglicherweise). Possibility bezeichnet eine Möglichkeit oder Wahrscheinlichkeit; die Fähigkeit einer Person heißt meist ability.');
  fam('regular', 'regelmäßig; regelmäßig (Grammatik)', 'Regular kann „regelmäßig“, „üblich“ oder „regelkonform“ bedeuten. Irregular verb ist ein unregelmäßiges Verb, nicht bloß ein selten benutztes.');
  fam('help', 'helfen; die Hilfe', 'Helpful (hilfreich/hilfsbereit) vs. helpless (hilflos). Helpless bedeutet nicht „nutzlos“ — dafür steht normalerweise useless.');
  fam('value', 'der Wert; schätzen', 'Valuable (wertvoll); invaluable bedeutet „von unschätzbarem Wert“, nicht „wertlos“. Für „wertlos“ steht valueless.');
  fam('respect', 'respektieren; der Respekt', 'Respectful (respektvoll), respectable (achtbar/anständig), respective (jeweilig), respectively (jeweils). Ähnliche Formen bedeuten nicht dasselbe.');
  fam('observe', 'beobachten, bemerken', 'Observe kann „beobachten“, „bemerken“ oder „eine Regel einhalten“ bedeuten; hier steht „beobachten“ im Vordergrund. Observant (aufmerksam) und observable (beobachtbar) sind nicht austauschbar.');
  fam('compare', 'vergleichen', 'Compare → comparison hat eine feste Endungsänderung: Das ist eine Lernverbindung, keine produktive Regel für jedes Verb. Comparative (vergleichend), comparable (vergleichbar); comparatively bedeutet „vergleichsweise/relativ“.');
  fam('predict', 'vorhersagen, prognostizieren', 'Prediction ist eine Vorhersage, kein Versprechen. Predictable und unpredictable sagen nur aus, ob ein Ergebnis vorhersehbar ist, nicht ob es gut oder schlecht ist. Bei predictably/unpredictably wird -able zu -ably.');
  fam('maintain', 'instand halten, pflegen', 'Bei maintain → maintenance ändert sich der Stamm zu mainten-. Maintenance entsteht nicht durch einfaches Anhängen von -ance an maintain. In der IT ist ein maintainer der Betreuer eines Projekts, nicht zwingend dessen ursprünglicher Autor.');
  fam('adapt', 'anpassen, sich anpassen', 'Adapt to a situation (sich an eine Situation anpassen); adapt something for a purpose (etwas für einen Zweck umgestalten). Adaptable beschreibt Anpassungsfähigkeit, adaptive die Funktionsweise eines Mechanismus oder Ansatzes.');

  /* ---- 3. Affixes (38) ---- */
  function aff(id, o) {
    var a = (P.prefixes && P.prefixes[id]) || (P.suffixes && P.suffixes[id]);
    if (!a) return;
    a.de = o.de;
    a.i18n = a.i18n || {};
    a.i18n.de = {
      posChange: o.posChange,
      pattern: o.pattern,
      spelling: o.spelling,
      exceptions: o.exceptions,
      limitations: o.limitations,
      productivity: o.productivity
    };
    (a.examples || []).forEach(function (ex) {
      if (ex.entryId && P.byId && P.byId[ex.entryId] && P.byId[ex.entryId].de) {
        ex.de = P.byId[ex.entryId].de;
      }
    });
    if (a.exercise && o.ex) {
      a.exercise.i18n = a.exercise.i18n || {};
      a.exercise.i18n.de = {
        question: o.ex.q,
        answer: o.ex.answer,
        options: o.ex.options.slice(),
        explain: o.ex.explain
      };
    }
    var d = P.byId && P.byId['affix:' + id];
    if (d && o.ex) {
      d.i18n = d.i18n || {};
      d.i18n.de = {
        q: o.ex.q,
        options: o.ex.options.slice(),
        explain: o.ex.explain
      };
    }
  }

  aff('un', {
    de: 'un-, nicht-; Rückgängigmachen, Aufhebung eines Zustands',
    pattern: 'un- + Adjektiv; un- + ausgewählte Verben',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Der Stamm bleibt meist unverändert: unnecessary, undo.',
    exceptions: 'Unravel und einige andere Wörter sind lexikalisiert; unhappy entspricht nicht in jedem Kontext sad.',
    limitations: 'Wähle un- nicht allein anhand der deutschen Übersetzung statt in-/dis-; prüfe das konkrete Wort.',
    productivity: 'Produktiv zur Verneinung von Adjektiven; das Rückgängigmachen ist auf passende Verben beschränkt.',
    ex: {
      q: 'Was fügt un- zu comfortable hinzu?',
      answer: 'Fehlen einer Eigenschaft',
      options: ['Fehlen einer Eigenschaft', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'übermäßiger Grad'],
      explain: 'Uncomfortable bedeutet fehlenden Komfort. Un- macht aus dem Adjektiv kein Substantiv.'
    }
  });
  aff('re', {
    de: 'wieder-, erneut, zurück-',
    pattern: 're- + Verb',
    posChange: 'Ein Verb bleibt normalerweise ein Verb.',
    spelling: 'Re-evaluate/reevaluate; ein Bindestrich wie in re-create kann die Bedeutung klären.',
    exceptions: 'React und receive lassen sich nicht mechanisch als „etwas noch einmal tun“ übersetzen.',
    limitations: 'Die Handlung muss wiederholbar sein; nicht jedes anlautende re- ist ein produktives Präfix.',
    productivity: 'Sehr produktiv in der Bedeutung der Wiederholung.',
    ex: {
      q: 'Was fügt re- zu connect hinzu?',
      answer: 'Wiederholung einer Handlung',
      options: ['Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft', 'übermäßiger Grad'],
      explain: 'Reconnect heißt nach einer Trennung wieder verbinden. React ist ein eigener lexikalischer Fall.'
    }
  });
  aff('dis', {
    de: 'un-, nicht-; Trennung; entgegengesetzte Handlung',
    pattern: 'dis- + ausgewählte Verben/Adjektive/Substantive',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Konsonanten bleiben erhalten: dis + satisfied = dissatisfied.',
    exceptions: 'Disinformation hat die spezielle Bedeutung gezielt falscher Informationen.',
    limitations: 'Nicht austauschbar mit un-; dislike und unlike folgen verschiedenen Mustern.',
    productivity: 'Die Produktivität ist auf lexikalische Muster beschränkt.',
    ex: {
      q: 'Was drückt dis- in disconnect aus?',
      answer: 'Trennung',
      options: ['Trennung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Disconnect bedeutet eine Verbindung trennen; dis- bezeichnet hier die gegenteilige Handlung.'
    }
  });
  aff('mis', {
    de: 'falsch, fehlerhaft, schlecht',
    pattern: 'mis- + Verb; mis- + ausgewählte Substantive',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Mis + spell = misspell: beide s bleiben erhalten.',
    exceptions: 'Misinformation kann ohne Täuschungsabsicht entstehen.',
    limitations: 'Mis- verneint nicht einfach das Geschehen: mismanage heißt schlecht verwalten, nicht gar nicht verwalten.',
    productivity: 'Produktiv zur Beschreibung von Fehlern und falschem Handeln.',
    ex: {
      q: 'Was drückt mis- in misuse aus?',
      answer: 'fehlerhafte Handlung',
      options: ['fehlerhafte Handlung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Misuse heißt falsch oder missbräuchlich verwenden; die Handlung findet statt, aber auf negativ bewertete Weise.'
    }
  });
  aff('over', {
    de: 'über-; übermäßig; darüber',
    pattern: 'over- + Verb/Adjektiv',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Overvalue, overprotective werden zusammengeschrieben.',
    exceptions: 'Overlook kann „übersehen“ bedeuten; reduziere nicht alle Wörter auf Übermaß.',
    limitations: 'Die Gradbedeutung passt nicht zu allen Verben.',
    productivity: 'Produktiv für ein Übermaß.',
    ex: {
      q: 'Was fügt over- zu value hinzu?',
      answer: 'übermäßiger Grad',
      options: ['übermäßiger Grad', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Overvalue heißt zu hoch bewerten. Das Gegenteil ist undervalue.'
    }
  });
  aff('under', {
    de: 'unter-; unzureichend; unterhalb',
    pattern: 'under- + Verb/Adjektiv/Substantiv',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Underperform und undervalue werden zusammengeschrieben.',
    exceptions: 'Understand bedeutet nicht „darunter stehen“; es ist kein modernes zerlegbares Muster.',
    limitations: 'Unterscheide zwischen unzureichendem Grad und räumlicher Lage.',
    productivity: 'Produktiv in der Bedeutung von Unzulänglichkeit.',
    ex: {
      q: 'Was fügt under- zu perform hinzu?',
      answer: 'Ergebnis unter den Erwartungen',
      options: ['Ergebnis unter den Erwartungen', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Underperform heißt hinter den Erwartungen zurückbleiben, nicht etwas erneut ausführen.'
    }
  });
  aff('pre', {
    de: 'vor-, im Voraus',
    pattern: 'pre- + Substantiv/Verb/Adjektiv',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Pre-war mit Bindestrich; prepay und preview meist zusammen.',
    exceptions: 'Prepare lässt sich nicht als modernes pre- + pare im Sinne von „vorbereiten“ zerlegen.',
    limitations: 'Prüfe, ob das Wort ein eigenständiges zeitliches Muster zulässt.',
    productivity: 'Produktiv für zeitliche Vorzeitigkeit.',
    ex: {
      q: 'Was bedeutet pre- in prepay?',
      answer: 'Handlung im Voraus',
      options: ['Handlung im Voraus', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Prepay heißt im Voraus bezahlen, vor Erhalt der Leistung oder vor Fälligkeit.'
    }
  });
  aff('post', {
    de: 'nach-, Nach-',
    pattern: 'post- + Substantiv/Adjektiv',
    posChange: 'Die Wortart bleibt meist gleich; das Muster hängt vom Stamm ab.',
    spelling: 'Post-war mit Bindestrich; postgraduate zusammen.',
    exceptions: 'Postpone lässt sich nicht frei aus post- + modernem pone bilden.',
    limitations: 'Post- bedeutet nicht „per Post schicken“; das ist ein anderes Wort post.',
    productivity: 'Produktiv in zeitlichen Bezeichnungen.',
    ex: {
      q: 'Was bedeutet post- in post-war?',
      answer: 'nach einem Ereignis',
      options: ['nach einem Ereignis', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Post-war bezieht sich auf die Zeit nach dem Krieg; pre-war auf die Zeit davor.'
    }
  });
  aff('inter', {
    de: 'zwischen-; gegenseitig',
    pattern: 'inter- + Substantiv/Adjektiv/ausgewählte Verben',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'International und interact werden meist zusammengeschrieben.',
    exceptions: 'Interest ist im modernen Englisch nicht frei aus inter- + est zusammengesetzt.',
    limitations: 'Nicht jede Beziehung zwischen Dingen erlaubt ein neues Wort mit inter-.',
    productivity: 'Produktiv bei Wechselwirkungen und Beziehungen zwischen Gruppen.',
    ex: {
      q: 'Was bedeutet inter- in interact?',
      answer: 'gegenseitige Handlung',
      options: ['gegenseitige Handlung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Interact heißt aufeinander einwirken oder interagieren. Nicht zu verwechseln mit der Wiederholung re-.'
    }
  });
  aff('trans', {
    de: 'durch, hinüber, jenseits; Veränderung',
    pattern: 'trans- + ausgewählte Stämme',
    posChange: 'Die Wortart hängt vom jeweiligen Wort ab.',
    spelling: 'Transatlantic zusammen; ein Bindestrich hängt vom Wort ab.',
    exceptions: 'Transform ist ein fest etabliertes Wort; trans- bezeichnet nicht überall eine physische Bewegung.',
    limitations: 'Viele Bildungen sind historisch entlehnt; konstruiere keine beliebigen Verben.',
    productivity: 'Begrenzt produktiv; ein Teil der Formen ist historischer Wortschatz.',
    ex: {
      q: 'Was drückt trans- in transatlantic aus?',
      answer: 'über den Atlantik',
      options: ['über den Atlantik', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Transatlantic bezieht sich auf das Überqueren des Atlantiks oder Beziehungen zwischen beiden Seiten.'
    }
  });
  aff('sub', {
    de: 'unter-; niedrigeres Niveau; Untergruppe',
    pattern: 'sub- + Substantiv/Adjektiv',
    posChange: 'Oft bleibt ein Substantiv ein Substantiv.',
    spelling: 'Subgroup und substandard werden zusammengeschrieben.',
    exceptions: 'Subject ist kein freies modernes sub- + ject.',
    limitations: 'In subnet bedeutet es Teilnetz, nicht ein Netz physisch unter einem anderen.',
    productivity: 'Produktiv für Unterteilungen und Ebenen.',
    ex: {
      q: 'Was bedeutet sub- in subgroup?',
      answer: 'Unterteilung eines Ganzen',
      options: ['Unterteilung eines Ganzen', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Subgroup ist eine Gruppe innerhalb einer größeren Gruppe; es drückt Zugehörigkeit/Einschluss aus.'
    }
  });
  aff('super', {
    de: 'über-; höher; sehr groß',
    pattern: 'super- + Substantiv/Adjektiv',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Supermarket und superhuman werden zusammengeschrieben.',
    exceptions: 'Supervise sollte nicht als freies super- + modernes vise gelernt werden.',
    limitations: 'Kann umgangssprachlich verstärkend wirken; in Geschäftsbriefen nicht überall einsetzen.',
    productivity: 'Produktiv, besonders zur Verstärkung und in Bezeichnungen.',
    ex: {
      q: 'Was bedeutet super- in superhuman?',
      answer: 'jenseits normaler menschlicher Fähigkeiten',
      options: ['jenseits normaler menschlicher Fähigkeiten', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Superhuman übersteigt normale menschliche Möglichkeiten und ist keine Berufsbezeichnung.'
    }
  });
  aff('anti', {
    de: 'gegen-; entgegenwirkend',
    pattern: 'anti- + Substantiv/Adjektiv',
    posChange: 'Bildet oft eine Bestimmung zu einem Substantiv.',
    spelling: 'Anti-war mit Bindestrich, antivirus zusammen.',
    exceptions: 'Anticipate bedeutet nicht „gegen-zipieren“; gleiche Buchstaben beweisen kein Morphem.',
    limitations: 'Anti- kann eine Haltung oder eine Schutzfunktion ausdrücken; der Kontext entscheidet.',
    productivity: 'Produktiv in Politik, Medizin und Technik.',
    ex: {
      q: 'Was bedeutet anti- in antivirus?',
      answer: 'Gegenwirkung / Abwehr',
      options: ['Gegenwirkung / Abwehr', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Antivirus ist ein Mittel gegen Schadsoftware; das Präfix drückt eine schützende Ausrichtung aus.'
    }
  });
  aff('non', {
    de: 'nicht-, Nicht-; fehlende Zugehörigkeit zu einer Klasse',
    pattern: 'non- + Substantiv/Adjektiv',
    posChange: 'Bildet oft ein Attribut oder ein verneintes Substantiv.',
    spelling: 'Non-smoking und non-payment meist mit Bindestrich.',
    exceptions: 'Nonplussed ist eine lexikalische Ausnahme, kein freies non- + plussed.',
    limitations: 'Non- schließt oft neutral aus einer Kategorie aus; un- kann eine wertende Gegenüberstellung tragen.',
    productivity: 'Hohe Produktivität zur Klassifizierung.',
    ex: {
      q: 'Was bedeutet non- in non-payment?',
      answer: 'Ausbleiben einer Zahlung',
      options: ['Ausbleiben einer Zahlung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Non-payment bezeichnet die Nichtzahlung; es ist weder eine falsche noch eine wiederholte Zahlung.'
    }
  });
  aff('in', {
    de: 'un-, nicht-; Gruppe negativer Varianten',
    pattern: 'in- + ausgewählte Adjektive',
    posChange: 'Ein Adjektiv bleibt normalerweise ein Adjektiv.',
    spelling: 'Im- vor p/b/m, il- vor l, ir- vor r in entsprechenden etablierten Wörtern.',
    exceptions: 'Invaluable heißt „unschätzbar“, also sehr wertvoll. Inflammable bedeutet nicht „unbrennbar“.',
    limitations: 'Die Wahl des negativen Präfixes ist lexikalisch; nicht alle Adjektive auf p nehmen im-. In- im Sinne von „innen“ ist ein anderes Element.',
    productivity: 'Begrenzte Produktivität; viele Wörter müssen einzeln gelernt werden.',
    ex: {
      q: 'Warum bildet responsible die Form irresponsible?',
      answer: 'Verneinung mit ir- vor r',
      options: ['Verneinung mit ir- vor r', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Ir- ist in diesem Wort die Variante des negativen in- vor r. Daher irresponsible = unverantwortlich.'
    }
  });
  aff('co', {
    de: 'mit-, gemeinsam',
    pattern: 'co- + Substantiv/Verb',
    posChange: 'Die Wortart bleibt normalerweise gleich.',
    spelling: 'Co-worker/coworker und co-operate/cooperate sind gängige Varianten.',
    exceptions: 'Nicht jedes anlautende co- trägt diese Bedeutung: cost ist kein Beispiel.',
    limitations: 'Gemeinsamkeit bedeutet keine Unterordnung; co-author ist ein Mitautor.',
    productivity: 'Produktiv in Bezeichnungen gemeinsamer Tätigkeiten.',
    ex: {
      q: 'Was bedeutet co- in co-author?',
      answer: 'gemeinsame Beteiligung',
      options: ['gemeinsame Beteiligung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Co-author ist einer von mehreren gemeinsamen Autoren.'
    }
  });
  aff('de', {
    de: 'de-, ent-; Aufhebung, Entfernung, Umkehrprozess',
    pattern: 'de- + ausgewählte Verben',
    posChange: 'Ein Verb bleibt normalerweise ein Verb.',
    spelling: 'Deactivate und devalue werden meist zusammengeschrieben.',
    exceptions: 'Decide heißt nicht, ein modernes cide rückgängig zu machen; nicht buchstabenweise zerlegen.',
    limitations: 'Decrypt und decode bezeichnen unterschiedliche Vorgänge; das Präfix macht sie nicht zu Synonymen.',
    productivity: 'Produktiv in technischen Mustern zur Aufhebung eines Zustands.',
    ex: {
      q: 'Was bedeutet de- in deactivate?',
      answer: 'Aufhebung eines aktiven Zustands',
      options: ['Aufhebung eines aktiven Zustands', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Deactivate heißt inaktiv machen; es ist die entgegengesetzte Handlung zu activate.'
    }
  });
  aff('out', {
    de: 'übertreffen; hinausgehen über',
    pattern: 'out- + ausgewählte Verben',
    posChange: 'Ein Verb bleibt normalerweise ein Verb.',
    spelling: 'Outperform und outnumber werden zusammengeschrieben.',
    exceptions: 'Output ist ein festes Substantiv und Verb, kein beliebiges Vergleichsmuster.',
    limitations: 'Outperform vergleicht mit einem anderen Teilnehmer; underperform oft mit einer Erwartung.',
    productivity: 'Produktiv beim Vergleich von Ergebnissen.',
    ex: {
      q: 'Was drückt out- in outperform aus?',
      answer: 'Überlegenheit bei den Ergebnissen',
      options: ['Überlegenheit bei den Ergebnissen', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Outperform a competitor heißt, ein besseres Ergebnis erzielen als ein Konkurrent.'
    }
  });
  aff('multi', {
    de: 'viel-, mehr-; mehrere',
    pattern: 'multi- + Substantiv/Adjektiv',
    posChange: 'Bildet häufig ein Adjektiv.',
    spelling: 'Multilingual und multicultural werden meist zusammengeschrieben.',
    exceptions: 'Multiple ist ein eigenes etabliertes Wort, kein freies multi- + ple.',
    limitations: 'Gibt keine exakte Zahl an; bi- bedeutet zwei, multi- mehrere oder viele.',
    productivity: 'Produktiv im technischen und gesellschaftlichen Wortschatz.',
    ex: {
      q: 'Was bedeutet multi- in multilingual?',
      answer: 'mehrere Sprachen',
      options: ['mehrere Sprachen', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Multilingual bezieht sich auf mehrere Sprachen oder jemanden, der sie beherrscht.'
    }
  });
  aff('tion', {
    de: 'Vorgang, Handlung, Ergebnis',
    pattern: 'ausgewählter Verbstamm + -ion/-ation',
    posChange: 'Oft Verb → Substantiv.',
    spelling: 'Create → creation; apply → application verändert den Stamm.',
    exceptions: 'Nicht jedes Verb bildet ein Substantiv auf -tion: develop → development.',
    limitations: 'Es handelt sich um etablierte Muster; hänge -tion nicht an beliebige Verben.',
    productivity: 'Begrenzt produktiv; besonders wichtig im entlehnten Wortschatz.',
    ex: {
      q: 'Welche Wortart ist protection?',
      answer: 'Substantiv für einen Vorgang oder Zustand',
      options: ['Substantiv für einen Vorgang oder Zustand', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Protect ist ein Verb; protection ist das Substantiv, das den Schutz bezeichnet.'
    }
  });
  aff('sion', {
    de: 'Handlung, Vorgang, Zustand',
    pattern: 'ausgewählter Stamm auf s/ss + -ion',
    posChange: 'Oft Verb → Substantiv.',
    spelling: 'Decide → decision, express → expression; s oder ss hängt vom Wort ab.',
    exceptions: 'Man kann -sion nicht allein nach der Aussprache statt -tion wählen.',
    limitations: 'Keine frei austauschbare Endung für beliebige Verben.',
    productivity: 'Überwiegend lexikalisch begrenztes Muster.',
    ex: {
      q: 'Welche Substantivform gehört zu decide?',
      answer: 'decision',
      options: ['decision', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Die richtige Form ist decision: der Stamm wechselt von decid- zu decis-, nicht einfach decide + sion.'
    }
  });
  aff('ment', {
    de: 'Handlung, Vorgang, Ergebnis',
    pattern: 'ausgewähltes Verb + -ment',
    posChange: 'Verb → Substantiv.',
    spelling: 'Manage → management behält das e; argue → argument verliert das e.',
    exceptions: 'Nicht jedes Verb nimmt -ment; apply → application.',
    limitations: 'Die Substantive können je nach Bedeutung zählbar oder unzählbar sein.',
    productivity: 'Begrenzt produktiv.',
    ex: {
      q: 'Was bezeichnet development?',
      answer: 'Ergebnis oder Vorgang',
      options: ['Ergebnis oder Vorgang', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Development bedeutet Entwicklung, das Substantiv zu develop.'
    }
  });
  aff('ness', {
    de: 'Eigenschaft, Zustand (-heit, -keit)',
    pattern: 'Adjektiv + -ness',
    posChange: 'Adjektiv → Substantiv.',
    spelling: 'Happy → happiness: Konsonant + y wird zu i.',
    exceptions: 'Kein mechanischer Ersatz für alle -ity-Formen: responsibility ist die übliche Form.',
    limitations: 'Verwende in formeller Sprache die etablierte Form.',
    productivity: 'Produktiv mit Adjektiven.',
    ex: {
      q: 'Was bezeichnet carelessness?',
      answer: 'Zustand oder Eigenschaft',
      options: ['Zustand oder Eigenschaft', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Careless bedeutet unachtsam; carelessness bedeutet Unachtsamkeit.'
    }
  });
  aff('ity', {
    de: 'Eigenschaft, Zustand (-ität, -keit)',
    pattern: 'ausgewählter Adjektivstamm + -ity',
    posChange: 'Adjektiv → Substantiv.',
    spelling: 'Active → activity; possible → possibility; productive → productivity.',
    exceptions: 'Nicht jedes Adjektiv nimmt -ity; careful → carefulness, nicht carefulity.',
    limitations: 'Stamm und Betonung können sich ändern; die Form prüft man im Wörterbuch.',
    productivity: 'Lexikalisch begrenzt.',
    ex: {
      q: 'Welche Substantivform gehört zu responsible?',
      answer: 'responsibility',
      options: ['responsibility', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Responsible → responsibility: -ible wird zu -ibility.'
    }
  });
  aff('able', {
    de: '-bar; geeignet für eine Handlung; mit einer Eigenschaft versehen',
    pattern: 'Verb/Substantiv + -able',
    posChange: 'Oft Verb → Adjektiv.',
    spelling: 'Use → usable; manage → manageable behält das e für das weiche g.',
    exceptions: 'Considerable heißt „beträchtlich“, nicht wörtlich „betrachtbar“.',
    limitations: 'Nicht alle Formen tragen eine wörtliche Möglichkeitsbedeutung; prüfe das Wörterbuch.',
    productivity: 'Produktiv, besonders bei transitiven Verben.',
    ex: {
      q: 'Wodurch unterscheidet sich usable von useful?',
      answer: 'Brauchbarkeit / Verwendbarkeit',
      options: ['Brauchbarkeit / Verwendbarkeit', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Usable heißt „kann benutzt werden“; useful heißt „bringt Nutzen“.'
    }
  });
  aff('ible', {
    de: '-bar, -lich; Möglichkeit, Eignung, Eigenschaft',
    pattern: 'ausgewählter gelehrter Stamm + -ible',
    posChange: 'Oft Adjektiv; ein modernes freies Verb kann fehlen.',
    spelling: 'Possible → possibly/possibility; responsible → responsibly.',
    exceptions: 'Ersetze -able nicht nach Gehör durch -ible.',
    limitations: 'Weniger produktiv als -able; meist lernt man feste Wörter.',
    productivity: 'Überwiegend feste Bildungen.',
    ex: {
      q: 'Kann man -able frei durch -ible ersetzen?',
      answer: 'nein: die Schreibung hängt vom Wort ab',
      options: ['nein: die Schreibung hängt vom Wort ab', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Usable, aber possible: Die Suffixvariante ist durch das jeweilige Wort festgelegt, nicht frei wählbar.'
    }
  });
  aff('ive', {
    de: '-iv; mit einer Handlung verbunden; dazu neigend',
    pattern: 'ausgewählter Verbstamm + -ive',
    posChange: 'Oft Verb → Adjektiv.',
    spelling: 'Create → creative, respond → responsive: Stammänderungen sind möglich.',
    exceptions: 'Respective bedeutet nicht „respektvoll“ — das ist respectful.',
    limitations: 'Garantiert keine wörtliche Fähigkeit zur Handlung.',
    productivity: 'Begrenzt produktiv.',
    ex: {
      q: 'Warum ist supportive nicht gleich supported?',
      answer: 'leistet Unterstützung',
      options: ['leistet Unterstützung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Supportive beschreibt jemanden, der Unterstützung gibt; supported jemanden oder etwas, das unterstützt wird.'
    }
  });
  aff('ous', {
    de: '-ös, -haft; eine Eigenschaft besitzend, dadurch gekennzeichnet',
    pattern: 'ausgewähltes Substantiv/Stamm + -ous',
    posChange: 'Normalerweise Substantiv → Adjektiv.',
    spelling: 'Danger → dangerous; fame → famous; ambition → ambitious.',
    exceptions: 'Nicht jedes Substantiv lässt -ous zu; help → helpful.',
    limitations: 'Formen und Stammänderungen sind lexikalisch festgelegt.',
    productivity: 'Begrenzt produktiv.',
    ex: {
      q: 'Welche Wortart ist dangerous?',
      answer: 'Adjektiv',
      options: ['Adjektiv', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Danger heißt Gefahr; dangerous heißt gefährlich — eine Eigenschaft von Dingen oder Situationen.'
    }
  });
  aff('ful', {
    de: '-voll, -reich; eine Eigenschaft besitzend; eine Wirkung erzeugend',
    pattern: 'Substantiv + -ful',
    posChange: 'Oft Substantiv → Adjektiv.',
    spelling: 'Ein l: helpful; zwei l bei helpful + -ly = helpfully.',
    exceptions: 'Awful lässt sich in normaler heutiger Sprache nicht mechanisch mit „voller Ehrfurcht“ übersetzen.',
    limitations: 'Die Kombinierbarkeit ist lexikalisch; nicht an jedes Substantiv anhängbar.',
    productivity: 'Mäßig produktiv.',
    ex: {
      q: 'Wie viele l stehen in helpful?',
      answer: 'eines',
      options: ['eines', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Das Suffix -ful hat ein l. In helpfully stehen zwei l wegen des zusätzlichen -ly.'
    }
  });
  aff('less', {
    de: '-los; ohne, frei von',
    pattern: 'Substantiv + -less',
    posChange: 'Oft Substantiv → Adjektiv.',
    spelling: 'Care + -less = careless, value + -less = valueless.',
    exceptions: 'Helpless heißt „hilflos“, nicht „nutzlos“.',
    limitations: 'Die negative Bedeutung kann wertend sein und nicht nur das wörtliche Fehlen einer Sache meinen.',
    productivity: 'Produktiv.',
    ex: {
      q: 'Was bedeutet helpless?',
      answer: 'hilflos',
      options: ['hilflos', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Helpless bedeutet, sich nicht selbst helfen zu können; useless heißt nutzlos.'
    }
  });
  aff('ize', {
    de: '-isieren; machen, verwandeln in; eine Handlung organisieren',
    pattern: 'ausgewähltes Substantiv/Adjektiv + -ize',
    posChange: 'Oft Substantiv/Adjektiv → Verb.',
    spelling: 'Modern → modernize; vor -ation fällt das e weg.',
    exceptions: 'Advertise und surprise haben in der modernen Norm keine freien Varianten advertize/surprize.',
    limitations: 'Nicht jedes Verb auf -ise lässt -ize zu. Bleibe bei der gewählten Variante konsequent.',
    productivity: 'Produktiv; -ise und -ize bestehen bei vielen Wörtern nebeneinander.',
    ex: {
      q: 'Welche Wortart bildet -ize normalerweise?',
      answer: 'Verb',
      options: ['Verb', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Modernize heißt modernisieren: eine Handlung zur Veränderung eines Zustands.'
    }
  });
  aff('ify', {
    de: '-ifizieren; machen, verwandeln in',
    pattern: 'ausgewählter Adjektiv-/Substantivstamm + -ify',
    posChange: 'Oft Adjektiv/Substantiv → Verb.',
    spelling: 'Simple → simplify; clear → clarify: Stammänderungen sind möglich.',
    exceptions: 'Nicht alle Adjektive erlauben -ify; wide → widen.',
    limitations: 'Es ist die Wörterbuchform nötig; man kann nicht beliebige Wörter frei bilden.',
    productivity: 'Begrenzt produktiv.',
    ex: {
      q: 'Welche Form gehört zu simple?',
      answer: 'simplify',
      options: ['simplify', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Simplify heißt vereinfachen. Der Stamm ändert sich: simple → simpl-.'
    }
  });
  aff('er', {
    de: '-er, -or; handelnde Person; Gerät',
    pattern: 'Verb + -er; ausgewählter Stamm + -or',
    posChange: 'Verb → Substantiv.',
    spelling: 'Manage → manager; act → actor; write → writer.',
    exceptions: 'Employer gibt Arbeit, employee erhält sie. -er ist auch Komparativendung: faster.',
    limitations: 'Die Wahl zwischen -er und -or ist lexikalisch festgelegt; es sind keine freien Varianten.',
    productivity: 'Produktiv ist vor allem -er.',
    ex: {
      q: 'Wer ist ein employer?',
      answer: 'Arbeitgeber',
      options: ['Arbeitgeber', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Employer stellt ein; employee arbeitet im Angestelltenverhältnis. Beide sind Substantive, aber mit verschiedenen Rollen.'
    }
  });
  aff('ist', {
    de: '-ist; Fachperson; Anhänger; Ausübender',
    pattern: 'Substantiv/ausgewählter Stamm + -ist',
    posChange: 'Meist Substantiv → Substantiv.',
    spelling: 'Art → artist; science → scientist ändert den Stamm.',
    exceptions: 'Nicht jeder Beruf endet auf -ist: developer, teacher.',
    limitations: 'Das Suffix allein sagt nichts über politische Ansichten oder Qualifikationen aus.',
    productivity: 'Produktiv bei Bezeichnungen von Tätigkeiten und Richtungen.',
    ex: {
      q: 'Was bezeichnet -ist in artist?',
      answer: 'Bezeichnung einer Person',
      options: ['Bezeichnung einer Person', 'Wiederholung einer Handlung', 'Fehlen einer Eigenschaft', 'übermäßiger Grad'],
      explain: 'Artist ist eine Person, die Kunst ausübt; das Suffix bildet ein Substantiv.'
    }
  });
  aff('ly', {
    de: 'Art und Weise; manchmal Regelmäßigkeit oder Eigenschaft',
    pattern: 'Adjektiv + -ly',
    posChange: 'Meist Adjektiv → Adverb.',
    spelling: 'Careful → carefully; comfortable → comfortably; happy → happily.',
    exceptions: 'Friendly ist ein Adjektiv; hard und hardly haben unterschiedliche Bedeutungen.',
    limitations: 'Nicht jedes Wort auf -ly ist ein Adverb, und nicht alle Adverbien enden auf -ly.',
    productivity: 'Produktiv mit Adjektiven.',
    ex: {
      q: 'Wodurch unterscheidet sich carefully von careful?',
      answer: 'Art und Weise der Handlung',
      options: ['Art und Weise der Handlung', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Careful beschreibt eine Person oder Handlung als Eigenschaft; carefully beschreibt, wie die Handlung ausgeführt wird.'
    }
  });
  aff('al', {
    de: '-al, -ell; zu etwas gehörend; in einem anderen Muster: Handlung',
    pattern: 'ausgewähltes Substantiv + -al; ausgewähltes Verb + -al',
    posChange: 'Oft Substantiv → Adjektiv; manchmal Verb → Substantiv.',
    spelling: 'Education → educational; arrive → arrival mit Wegfall des e.',
    exceptions: 'Refusal und arrival sind Substantive; nicht alle Wörter auf -al sind Adjektive.',
    limitations: 'Unterschiedliche Muster dürfen nicht allein wegen derselben Endung vermischt werden.',
    productivity: 'Begrenzt produktiv.',
    ex: {
      q: 'Welche Rolle spielt -al in educational?',
      answer: 'bildet ein Beziehungsadjektiv',
      options: ['bildet ein Beziehungsadjektiv', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Education heißt Bildung; educational heißt „die Bildung betreffend / lehrreich“.'
    }
  });
  aff('ance', {
    de: '-anz, -enz; Zustand, Handlung, Eigenschaft',
    pattern: 'ausgewählter Verb-/Adjektivstamm + -ance/-ence',
    posChange: 'Oft Verb/Adjektiv → Substantiv.',
    spelling: 'Perform → performance; different → difference: Wechsel -ent/-ence.',
    exceptions: 'Die Schreibung mit a oder e ergibt sich nicht aus der deutschen Übersetzung.',
    limitations: 'Lexikalisch begrenztes Muster; manchmal verändert sich der Stamm.',
    productivity: 'Begrenzt produktiv.',
    ex: {
      q: 'Welche Substantivform gehört zu different?',
      answer: 'difference',
      options: ['difference', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Different → difference: Die Endung -ent wird zu -ence, Bedeutung: Unterschied.'
    }
  });
  aff('ee', {
    de: 'Empfänger einer Handlung; Person in einer bestimmten Rolle',
    pattern: 'ausgewähltes Verb + -ee',
    posChange: 'Meist Verb → Personenbezeichnung (Substantiv).',
    spelling: 'Employ → employee; train → trainee.',
    exceptions: 'Refugee und retiree lassen sich nicht auf das bloße Objekt einer fremden Handlung reduzieren.',
    limitations: 'Nicht von jedem Verb bildbar; die Betonung liegt oft auf -ee.',
    productivity: 'Begrenzt produktiv bei Personenrollen.',
    ex: {
      q: 'Wer ist ein employee?',
      answer: 'Angestellter / Arbeitnehmer',
      options: ['Angestellter / Arbeitnehmer', 'Wiederholung einer Handlung', 'Bezeichnung einer Person', 'Fehlen einer Eigenschaft'],
      explain: 'Employee erhält Arbeit vom employer. Das Suffix -ee kennzeichnet in diesem Muster die Empfängerrolle.'
    }
  });

  /* ---- 4. Classical roots (9) ---- */
  function cls(id, de, history, limitations) {
    var c = P.classical && P.classical[id];
    if (!c) return;
    c.de = de;
    c.i18n = c.i18n || {};
    c.i18n.de = { history: history, limitations: limitations };
    (c.examples || []).forEach(function (ex) {
      if (ex.entryId && P.byId && P.byId[ex.entryId] && P.byId[ex.entryId].de) {
        ex.de = P.byId[ex.entryId].de;
      }
    });
  }

  cls('spect', 'sehen, beobachten', 'Lateinisch spectare („beobachten“) und verwandte Formen des Sehens erklären spectator und inspect.', 'Kein eigenständiges modernes englisches Wort. Respect gehört historisch dazu, doch seine Bedeutung lässt sich nicht wörtlich als „erneutes Hinsehen“ ableiten.');
  cls('struct', 'bauen, zusammenfügen', 'Structure geht auf lateinisch structura und structus zurück, verwandt mit struere („schichten, bauen“).', 'Historischer Stamm, getrennt vom modernen construct. Instruct entsteht im heutigen Sprachgebrauch nicht durch freies Voranstellen von in- vor struct.');
  cls('dict', 'sprechen, sagen', 'Dictate geht auf lateinisch dictare zurück, verwandt mit dicere („sprechen, sagen“).', 'Predict heißt „vorhersagen“, dictionary „Wörterbuch“. Das ist eine historische Verwandtschaft, keine Regel zum bloßen Addieren von Teilbedeutungen.');
  cls('port', 'tragen, befördern', 'Portable ist über das Französische und Lateinische mit portare („tragen“) verbunden.', 'Netzwerk-port und Hafen-port darf man nicht ungeprüft aus „tragen“ herleiten. Gleiche Buchstaben bedeuten nicht immer dieselbe Wurzel.');
  cls('script', 'schreiben', 'Script geht auf lateinisch scriptum („das Geschriebene“) zurück, eine Form von scribere („schreiben“). Scrib- und script- spiegeln verschiedene lateinische Stämme wider.', 'Describe und manuscript enthalten historisch verwandte Elemente; scrib und script lassen sich in neuen Wörtern nicht beliebig austauschen.');
  cls('cred', 'glauben, vertrauen', 'Credible geht auf lateinisch credibilis zurück, verwandt mit credere („glauben“).', 'Incredible bedeutet meist „unglaublich“, nicht einfach „unzuverlässig“. Credential hat eine spezielle moderne Bedeutung.');
  cls('graph', 'schreiben; darstellen', 'Griechisch graphein („schreiben, zeichnen“) und abgeleitete Formen stehen hinter -graph und -graphy.', 'Das eigenständige graph bedeutet Diagramm oder Graph und ist kein produktives Verbmuster. Biography und photograph haben feste Eigenbedeutungen.');
  cls('phon', 'Laut, Stimme', 'Das klassische Element phon gehört zu griechisch phone („Laut, Stimme“) und erscheint in Bezeichnungen für Tongeräte und Klangphänomene.', 'Phone als Kurzform von telephone ist ein modernes Wort. Nicht jede Buchstabenfolge phon ist ein eigenes freies Morphem.');
  cls('logy', 'Wort, Rede; Wissensgebiet', 'Das Element -logy stammt aus griechischen Bildungen auf -logia und ist historisch mit logos und legein („Wort, Überlegung, Rede“) verbunden.', 'Biology ist eine Wissenschaft, aber apology ist keine „Wissenschaft der Entschuldigungen“. Das englische log („Protokoll/Baumstamm“) sollte nicht automatisch mit logos verknüpft werden.');

  /* ---- 5. Grammar pages (30) ---- */
  function gram(id, o) {
    var pg = P.grammar && P.grammar[id];
    if (!pg) return;
    var m = pg.explanation && pg.explanation.match(/<p class="mono-muted"[\s\S]*?<\/p>/);
    var ref = m ? m[0] : '';
    pg.i18n = pg.i18n || {};
    pg.i18n.de = {
      summary: o.summary,
      explanation: '<p>' + o.explanation + '</p>' + ref
    };
    if (pg.examples && pg.examples[0] && o.example) {
      pg.examples[0].de = o.example;
    }
    if (pg.drills && pg.drills[0] && o.d0) {
      pg.drills[0].i18n = pg.drills[0].i18n || {};
      pg.drills[0].i18n.de = o.d0;
    }
    if (pg.drills && pg.drills[1] && o.d1) {
      pg.drills[1].i18n = pg.drills[1].i18n || {};
      pg.drills[1].i18n.de = o.d1;
    }
  }

  gram('perfect', {
    summary: 'Das Past Simple bindet ein Ereignis an eine abgeschlossene Vergangenheit: I updated it yesterday.',
    explanation: 'Das Past Simple bindet ein Ereignis an eine abgeschlossene Vergangenheit: I updated it yesterday. Das Present Perfect verknüpft die Vergangenheit mit einem gegenwärtigen Ergebnis oder einem noch nicht abgeschlossenen Zeitraum: I have updated it, so it is ready now. Mit yesterday verwendet man normalerweise kein Present Perfect.',
    example: 'Ich habe den Server aktualisiert, sodass du ihn jetzt nutzen kannst.',
    d0: { explain: 'Yesterday markiert eine abgeschlossene Vergangenheit: hier ist Past Simple nötig.' },
    d1: { q: 'Setze das Present Perfect von update ein: I ___ the server, so it is ready now.', explain: 'Present Perfect: have + Past Participle. Das Ergebnis ist jetzt relevant.' }
  });
  gram('conditionals', {
    summary: 'First Conditional: if + Present Simple, will + Infinitiv für eine reale zukünftige Möglichkeit.',
    explanation: 'First Conditional: if + Present Simple, will + Infinitiv für eine reale zukünftige Möglichkeit. Second Conditional: if + Past Simple, would + Infinitiv für eine hypothetische Situation. Die Vergangenheitsform im zweiten Typ drückt Distanz zur Realität aus, nicht zwingend Vergangenheit.',
    example: 'Wenn wir mehr Zeit hätten, würden wir eine weitere Option testen.',
    d0: { explain: 'Hypothetische Situation: if + Past Simple verbindet sich mit would + Infinitiv.' },
    d1: { q: 'Ergänze das Ergebnis im Second Conditional mit test: If we had more time, we ___ another option.', explain: 'Hypothetisches Ergebnis: would + Infinitiv.' }
  });
  gram('passive', {
    summary: 'Das Passiv besteht aus be in der passenden Zeitform und dem Past Participle.',
    explanation: 'Das Passiv besteht aus be in der passenden Zeitform und dem Past Participle. Es stellt das Ziel der Handlung in den Vordergrund: The account was disabled. Der Handelnde kann bei Bedarf mit by genannt werden. Nicht jede Form be + -ed ist eindeutig Passiv: Sie kann auch einen Zustand beschreiben.',
    example: 'Das Benutzerkonto wurde vom Administrator deaktiviert.',
    d0: { explain: 'Das Objekt erfährt die Handlung: nötig ist was + Past Participle disabled.' },
    d1: { q: 'Setze disable ins Past Simple Passive: The account ___ yesterday.', explain: 'Singular und Vergangenheit: was + disabled.' }
  });
  gram('modals', {
    summary: 'Must not drückt ein Verbot aus, do not have to das Fehlen einer Notwendigkeit.',
    explanation: 'Must not drückt ein Verbot aus, do not have to das Fehlen einer Notwendigkeit. Should gibt normalerweise einen Rat. Nach einem Modalverb steht der Infinitiv ohne to: must check, should wait.',
    example: 'Du darfst dein Passwort nicht weitergeben.',
    d0: { q: 'Welche Wendung bedeutet „es besteht keine Notwendigkeit“?', explain: 'Do not have to hebt eine Pflicht auf. Must not verbietet eine Handlung.' },
    d1: { q: 'Trage vier Wörter mit der Bedeutung „nicht müssen“ ein (mit have, ohne Kurzform): You ___ attend this optional meeting.', explain: 'Do not have to bedeutet fehlende Pflicht; must not bedeutet Verbot.' }
  });
  gram('patterns', {
    summary: 'Die Ergänzung wird vom jeweiligen Verb bestimmt: avoid doing, consider doing, decide to do, manage to do.',
    explanation: 'Die Ergänzung wird vom jeweiligen Verb bestimmt: avoid doing, consider doing, decide to do, manage to do. Allein aus der deutschen Übersetzung lässt sich das Muster nicht ableiten. Help erlaubt sowohl help someone do als auch help someone to do.',
    example: 'Wir haben beschlossen, das Update zu verschieben.',
    d0: { explain: 'Nach avoid steht die -ing-Form: avoid opening.' },
    d1: { q: 'Setze die passende Form von open nach avoid ein: Please avoid ___ untrusted attachments.', explain: 'Avoid verlangt eine Ergänzung in der -ing-Form.' }
  });
  gram('relative', {
    summary: 'Ein bestimmender Relativsatz (defining relative clause) grenzt ein, um welches Objekt es geht.',
    explanation: 'Ein bestimmender Relativsatz (defining relative clause) grenzt ein, um welches Objekt es geht. Who bezieht sich meist auf Personen, which auf Dinge; that ist in defining clauses in beiden Fällen möglich. Das Objektpronomen kann manchmal wegfallen: the tool we use. Das Subjektpronomen darf nicht wegfallen.',
    example: 'Der Kollege, der das Problem gemeldet hat, ist im Urlaub.',
    d0: { explain: 'Ein Kollege ist eine Person; who übernimmt die Rolle des Subjekts im Relativsatz.' },
    d1: { q: 'Setze das besitzanzeigende Relativpronomen ein: The colleague ___ laptop was stolen has reported it.', explain: 'Whose verbindet den Kollegen mit dem ihm gehörenden Laptop.' }
  });
  gram('deduction', {
    summary: 'Must kann eine starke Schlussfolgerung aus Hinweisen ausdrücken, keinen Befehl.',
    explanation: 'Must kann eine starke Schlussfolgerung aus Hinweisen ausdrücken, keinen Befehl. Might/could stehen für Möglichkeit, cannot für die Schlussfolgerung der Unmöglichkeit. Für die Vergangenheit gilt: must have + Past Participle. Der Sicherheitsgrad richtet sich nach den Belegen, nicht nur nach der Grammatik.',
    example: 'Der Dienst könnte während des Updates angehalten haben.',
    d0: { explain: 'Might have + Past Participle drückt eine unsichere Vermutung über die Vergangenheit aus.' },
    d1: { q: 'Drücke eine unsichere Vermutung über die Vergangenheit mit might + stop aus: The service ___ during the update.', explain: 'Might have + Past Participle bezieht sich auf ein mögliches vergangenes Ereignis.' }
  });
  gram('hedging', {
    summary: 'In der Fachsprache helfen may/might/could, appears to und evidence suggests, Beobachtung und Schlussfolgerung zu trennen.',
    explanation: 'In der Fachsprache helfen may/might/could, appears to und evidence suggests, Beobachtung und Schlussfolgerung zu trennen. This proves ist stärker als this suggests. Wähle den Grad an Sicherheit, den die Daten tatsächlich tragen.',
    example: 'Die Protokolle deuten darauf hin, dass das Konto möglicherweise kompromittiert wurde.',
    d0: { explain: 'Suggests und possible markieren eine vorsichtige Schlussfolgerung; proves und definitely behaupten Gewissheit.' },
    d1: { q: 'Setze suggest im Present Simple ein: The evidence ___ that the account may be compromised.', explain: 'Evidence ist ein unzählbares Substantiv und steht mit der Singularform des Verbs. Suggests behauptet keinen endgültigen Beweis.' }
  });
  gram('perfect-continuous', {
    summary: 'Das Present Perfect Simple betont Ergebnis oder Anzahl: have checked five files.',
    explanation: 'Das Present Perfect Simple betont Ergebnis oder Anzahl: have checked five files. Continuous betont Verlauf oder Dauer: have been checking files for an hour. Der Vorgang kann noch andauern oder gerade beendet sein. Zustandsverben wie know werden normalerweise nicht im Continuous verwendet.',
    example: 'Ich prüfe die Protokolle schon seit einer Stunde und bin noch immer nicht fertig.',
    d0: { explain: 'Have been + -ing verbindet einen früher begonnenen Vorgang mit der Gegenwart.' },
    d1: { q: 'Verwende das Present Perfect Continuous von check: I ___ the logs for an hour and I am still working.', explain: 'Have been checking betont die Dauer der noch andauernden Arbeit.' }
  });
  gram('past-perfect', {
    summary: 'Past Perfect: had + Past Participle zeigt ein Ereignis vor einem anderen Zeitpunkt in der Vergangenheit.',
    explanation: 'Past Perfect: had + Past Participle. Es zeigt ein Ereignis vor einem anderen Punkt in der Vergangenheit. Es bedeutet nicht einfach „sehr weit zurückliegende Vergangenheit“. Wenn die Reihenfolge durch before/after bereits klar ist, ist oft auch Past Simple möglich; die Wahl hängt vom Schwerpunkt ab.',
    example: 'Das Meeting war bereits zu Ende, als ich ankam.',
    d0: { explain: 'Had ended verortet das Ende des Meetings zeitlich vor meiner Ankunft.' },
    d1: { q: 'Setze leave ins Past Perfect: When I reached the platform, the train ___.', explain: 'Had + left: Der Zug fuhr vor dem anderen vergangenen Ereignis ab.' }
  });
  gram('future-perfect', {
    summary: 'Will be + -ing zeigt einen laufenden Vorgang zu einem bestimmten zukünftigen Zeitpunkt.',
    explanation: 'Will be + -ing zeigt einen laufenden Vorgang zu einem bestimmten zukünftigen Zeitpunkt. Will have + Past Participle blickt von einem zukünftigen Punkt auf ein abgeschlossenes Ergebnis zurück. By Friday nennt den spätesten Abschlusszeitpunkt, nicht die Dauer.',
    example: 'Bis Freitag werden wir jedes Backup getestet haben.',
    d0: { explain: 'Um zehn Uhr läuft der Testvorgang gerade: will be + testing.' },
    d1: { q: 'Verwende das Future Perfect von finish: By Friday, we ___ the review.', explain: 'Will have + finished drückt den Abschluss bis zu einer künftigen Frist aus.' }
  });
  gram('third-conditional', {
    summary: 'Das Third Conditional verändert eine vorgestellte Vergangenheit: if + had done, would have done.',
    explanation: 'Das Third Conditional verändert eine vorgestellte Vergangenheit: if + had done, would have done. Ein Mixed Conditional kann eine vergangene Bedingung mit einem gegenwärtigen Ergebnis verbinden: If I had saved the key, I would have access now. Bestimme zuerst die Zeit von Bedingung und Ergebnis und wähle dann die Formen.',
    example: 'Wenn wir ein Backup behalten hätten, hätten wir die Dateien wiederhergestellt.',
    d0: { explain: 'Die Bedingung liegt in der Vergangenheit, das gedachte Ergebnis in der Gegenwart: Mixed Conditional.' },
    d1: { q: 'Ergänze das Ergebnis im Third Conditional mit recover: If we had kept a backup, we ___ the files.', explain: 'Alternatives Ergebnis in der Vergangenheit: would have + Past Participle.' }
  });
  gram('wish', {
    summary: 'Wish + Past Simple beschreibt einen gewünschten Unterschied zur Gegenwart; wish + Past Perfect Bedauern über die Vergangenheit.',
    explanation: 'Wish + Past Simple beschreibt einen gewünschten Unterschied zur Gegenwart; wish + Past Perfect drückt Bedauern über die Vergangenheit aus. Wish + would zeigt oft Unzufriedenheit über wiederholtes Verhalten oder den Wunsch nach Veränderung. Wish ersetzt nicht hope für eine normale Zukunftserwartung.',
    example: 'Ich wünschte, ich hätte die Adresse vor dem Absenden der Nachricht geprüft.',
    d0: { explain: 'Had checked nach wish entwirft eine Alternative zur Vergangenheit.' },
    d1: { q: 'Verwende das Past Perfect von check: I wish I ___ the address before sending the message.', explain: 'Wish + had checked drückt Bedauern über eine unterlassene Prüfung aus.' }
  });
  gram('reported-statements', {
    summary: 'In der indirekten Rede verschieben sich Verbformen nach said/told häufig nach hinten (Backshift).',
    explanation: 'In der indirekten Rede nach said/told verschieben sich Formen oft zurück: am → was, have done → had done, will → would. Pronomen und Zeitangaben werden der realen Situation angepasst. Gilt die Aussage noch, ist Backshift nicht immer zwingend. Say something; tell someone something.',
    example: 'Mia sagte, sie warte auf eine Antwort.',
    d0: { explain: 'Tell verlangt einen Adressaten; say steht nicht direkt mit me ohne to.' },
    d1: { q: 'Gib den Satz mit Backshift wieder (nur die Verbform eintragen): Mia said, “I am waiting.” → Mia said that she ___.', explain: 'Bei dem vorgegebenen Backshift wird am waiting zu was waiting.' }
  });
  gram('reported-questions', {
    summary: 'Eine indirekte Frage hat die Wortstellung eines Aussagesatzes: asked where I lived, ohne did I live.',
    explanation: 'Eine indirekte Frage hat die Wortstellung eines Aussagesatzes: asked where I lived, ohne did I live. Für Ja/Nein-Fragen braucht man if oder whether. Ask someone to do gibt meist eine Bitte wieder, keine Sachfrage.',
    example: 'Sie fragte, ob ich die Einladung erhalten hätte.',
    d0: { explain: 'Im Nebensatz gibt es keine Frage-Inversion und kein Hilfsverb did.' },
    d1: { q: 'Ergänze die indirekte Frage mit Zeitverschiebung (mit work): “Where do you work?” → She asked where I ___.', explain: 'Wortstellung I worked; do entfällt, und durch Backshift wird work zu worked.' }
  });
  gram('relative-nondefining', {
    summary: 'Ein nicht-bestimmender Relativsatz (non-defining) liefert Zusatzinformationen zu etwas bereits Bestimmtem und steht zwischen Kommas.',
    explanation: 'Ein nicht-bestimmender Relativsatz fügt Zusatzinformationen über ein bereits eindeutig bestimmtes Objekt hinzu und wird durch Kommas abgetrennt. Verwendet werden who, which, whose und Relativadverbien, aber nicht that. Das Pronomen fällt hier nicht weg; which kann auch einen ganzen vorherigen Satz kommentieren.',
    example: 'Mein Laptop, den ich letztes Jahr gekauft habe, braucht einen neuen Akku.',
    d0: { explain: 'Zusatzinformation zwischen Kommas erfordert which; that ist hier nicht zulässig.' },
    d1: { q: 'Setze das Relativpronomen ein: Nora, ___ works in support, will call you.', explain: 'Es geht um eine Person in einem Zusatzsatz; who kann nicht durch that ersetzt werden.' }
  });
  gram('deduction-present', {
    summary: 'Must + Infinitiv drückt eine sichere Schlussfolgerung aus, might/may/could eine Möglichkeit, cannot eine sichere Verneinung.',
    explanation: 'Must + Infinitiv kann eine sichere Schlussfolgerung ausdrücken, might/may/could eine Möglichkeit, cannot eine sichere negative Schlussfolgerung. Must not bedeutet meist ein Verbot; für „das kann nicht sein“ braucht man daher cannot, nicht must not.',
    example: 'Das kann nicht die richtige Adresse sein: In diesem Gebäude gibt es keine Büros.',
    d0: { explain: 'Cannot be schließt eine Möglichkeit aus; must not enter verbietet eine Handlung.' },
    d1: { q: 'Verwende must + be für eine sichere Schlussfolgerung: Her coat is here, so she ___ nearby.', explain: 'Must be ist hier eine Schlussfolgerung aus einem Hinweis, keine Pflicht.' }
  });
  gram('past-ability', {
    summary: 'Could beschreibt meist eine allgemeine Fähigkeit in der Vergangenheit; für einen einzelnen Erfolg stehen was/were able to oder managed to.',
    explanation: 'Could beschreibt meist eine allgemeine frühere Fähigkeit. Für eine einzelne erfolgreich ausgeführte Handlung braucht man eher was/were able to oder managed to. Managed to betont die Schwierigkeit. In der Verneinung passt couldn’t auch für ein einzelnes Scheitern; bei Wahrnehmungsverben ist could auch konkret möglich.',
    example: 'Nach mehreren Versuchen gelang es uns, die Verbindung wiederherzustellen.',
    d0: { explain: 'Managed to zeigt ein konkret erreichtes Ergebnis trotz Schwierigkeit.' },
    d1: { q: 'Ergänze mit manage im Past Simple (einschließlich to): After several attempts, we ___ restore the connection.', explain: 'Muster managed to + Infinitiv; restore steht bereits nach der Lücke.' }
  });
  gram('used-to', {
    summary: 'Used to + Infinitiv beschreibt eine frühere Gewohnheit; be used to / get used to + -ing das Gewohntsein oder Sich-Gewöhnen.',
    explanation: 'Used to + Infinitiv beschreibt einen früheren Zustand oder eine frühere Gewohnheit, die sich geändert hat. Be used to + Substantiv/-ing bedeutet „an etwas gewöhnt sein“. Get used to bedeutet „sich gewöhnen“. In den letzten beiden Mustern ist to eine Präposition, daher steht danach working, nicht work.',
    example: 'Ich gewöhne mich daran, mit einem neuen Team zu arbeiten.',
    d0: { q: 'Welche Wendung bedeutet „ich bin es gewohnt, nachts zu arbeiten“?', explain: 'Be used to working beschreibt gegenwärtige Gewohnheit; used to work eine frühere Gewohnheit.' },
    d1: { q: 'Setze die passende Form von work ein: I am getting used to ___ with a new team.', explain: 'Nach der Präposition to in get used to steht die -ing-Form.' }
  });
  gram('articles', {
    summary: 'A/an führt einen unbestimmten Gegenstand ein; the verweist auf etwas bereits Bestimmbares.',
    explanation: 'A/an führt einen einzelnen unbestimmten Gegenstand ein; the verweist auf einen Gegenstand, den der Gesprächspartner identifizieren kann. A/an richtet sich nach dem Laut: a user, an hour. Bei unzählbaren und Plural-Substantiven im allgemeinen Sinn steht oft der Nullartikel. Das ist die Grundlage, nicht das gesamte Artikelregelwerk.',
    example: 'Ich habe eine Nachricht erhalten. Die Nachricht enthielt einen Meeting-Link.',
    d0: { explain: 'Hour beginnt mit einem Vokallaut: an hour.' },
    d1: { q: 'Setze a, an oder the ein: I bought a router yesterday. ___ router is still in its box.', explain: 'Bei der zweiten Erwähnung ist der Gegenstand durch den ersten Satz bereits bestimmt.' }
  });
  gram('quantifiers', {
    summary: 'Few/a few stehen bei zählbaren Plural-Substantiven, little/a little bei unzählbaren.',
    explanation: 'Few/a few verbinden sich mit zählbaren Plural-Substantiven; little/a little mit unzählbaren. Ohne a ist die Bedeutung meist negativ („kaum etwas“). Mit a bedeutet es „eine gewisse Menge ist vorhanden“. Many gehört zu zählbaren, much zu unzählbaren Substantiven; a lot of passt zu beiden.',
    example: 'Wir haben noch etwas Zeit, sodass wir eine weitere Datei prüfen können.',
    d0: { q: 'Welche Wendung bedeutet „etwas Zeit ist vorhanden“?', explain: 'Time ist hier unzählbar; a little betont, dass noch etwas Zeit vorhanden ist.' },
    d1: { q: 'Setze a few oder a little ein: We still have ___ questions to discuss.', explain: 'Questions ist ein zählbares Substantiv im Plural.' }
  });
  gram('ed-ing', {
    summary: 'Bei vielen Adjektivpaaren auf -ed/-ing beschreibt -ed das empfundene Gefühl und -ing dessen Auslöser.',
    explanation: 'Bei vielen Adjektivpaaren auf -ed/-ing beschreibt die erste Form das erlebte Gefühl, die zweite das, was es auslöst: interested in an interesting topic. Die Regel gilt für solche Paare, nicht für alle Wörter auf -ed oder -ing. Auch eine Person kann interesting sein.',
    example: 'Der Vortrag war interessant, und ich war an den Beispielen interessiert.',
    d0: { explain: 'Das empfundene Gefühl ist confused; die verwirrenden Anweisungen sind confusing.' },
    d1: { q: 'Verwende die passende Form von interest: The topic kept my attention; it was ___.', explain: 'Das Thema weckt Interesse, daher interesting.' }
  });
  gram('contrast', {
    summary: 'Although/even though leiten einen Nebensatz mit Subjekt und Verb ein; despite/in spite of stehen vor Substantiv oder -ing.',
    explanation: 'Although/even though leiten einen Nebensatz mit Subjekt und Prädikat ein. Despite/in spite of stehen normalerweise vor einem Substantiv oder einer -ing-Form. Für einen vollständigen Nebensatz nutzt man danach the fact that. Despite steht ohne of; in in spite of ist of zwingend.',
    example: 'Trotz der Verzögerung haben wir die Prüfung rechtzeitig abgeschlossen.',
    d0: { explain: 'Although leitet it was late ein; nach despite braucht man ein Objekt oder the fact that + Nebensatz.' },
    d1: { q: 'Setze although oder despite ein: ___ the delay, we finished on time.', explain: 'Nach der Lücke steht die Nominalgruppe the delay, daher despite.' }
  });
  gram('zero-conditional', {
    summary: 'Das Zero Conditional verbindet if/when + Present Simple mit Present Simple für allgemeine Gesetzmäßigkeiten.',
    explanation: 'Das Zero Conditional verbindet meist if/when + Present Simple mit Present Simple und beschreibt allgemeine Gesetzmäßigkeiten. Das First Conditional bezieht sich eher auf eine konkrete zukünftige Möglichkeit. Das sind Lernmodelle: Reale Bedingungssätze erlauben je nach Bedeutung auch andere Zeitkombinationen.',
    example: 'Wenn ein Passwort abläuft, fordert das System den Benutzer auf, es zu ändern.',
    d0: { explain: 'Present Simple in beiden Teilen beschreibt ein sich wiederholendes allgemeines Verhalten.' },
    d1: { q: 'Verwende das Present Simple von ask: If a password expires, the system ___ the user to change it.', explain: 'Allgemeine Regel; bei system braucht das Verb die Endung -s.' }
  });
  gram('polite-indirect', {
    summary: 'Nach Could you tell me oder Do you know steht in der eingebetteten Frage die Wortstellung des Aussagesatzes.',
    explanation: 'Nach Could you tell me oder Do you know verwendet die eingebettete Frage die Wortstellung eines Aussagesatzes: where the station is. Die Inversion bleibt nur im äußeren Frageteil. Bei Fragen ohne Fragewort passen if oder whether: Do you know if it is open? Das ist nicht zwingend indirekte Rede.',
    example: 'Könnten Sie mir sagen, wo die nächste Apotheke ist?',
    d0: { explain: 'In der eingebetteten Frage gilt die Aussagesatz-Wortstellung: the station + is; ein zusätzliches do entfällt.' },
    d1: { q: 'Füge den eingebetteten Teil aus „Where is the nearest pharmacy?“ ein: Could you tell me ___?', explain: 'Eingebettete Frage: where + Subjekt + is; das äußere Could you markiert bereits die Frageform.' }
  });
  gram('future-time-clauses', {
    summary: 'In zeitlichen Nebensätzen nach when, after, before, until und as soon as steht für die Zukunft meist Present Simple.',
    explanation: 'In zeitlichen Nebensätzen nach when, after, before, until und as soon as drückt man Zukünftiges meist mit dem Präsens aus: I will call when I arrive. Für Abgeschlossenheit vor der nächsten Handlung ist when I have finished möglich. Die Regel gilt für Zeitnebensätze: In einer eingebetteten Frage wie I do not know when he will arrive ist will möglich.',
    example: 'Ich sende die Datei, sobald ich deine Bestätigung erhalte.',
    d0: { explain: 'When leitet den Zeitpunkt des zukünftigen Anrufs ein; danach steht meist Present Simple, obwohl das Ereignis noch bevorsteht.' },
    d1: { q: 'Setze receive ins Present Simple: I will reply as soon as I ___ the report.', explain: 'Nach as soon as im Zeitnebensatz genügt receive; will bleibt im Hauptsatz.' }
  });
  gram('causative-have', {
    summary: 'Have + Objekt + Past Participle bedeutet, dass man etwas von jemand anderem erledigen lässt.',
    explanation: 'Have + Objekt + Past Participle: I had my laptop repaired bedeutet, dass jemand anderes die Reparatur in meinem Auftrag ausgeführt hat. Die Zeitform trägt have: have, had, will have. Dieselbe Struktur kann auch ein ungewolltes Ereignis beschreiben: have something stolen; der Kontext entscheidet.',
    example: 'Nach dem Umzug haben wir die Büroschlösser austauschen lassen.',
    d0: { explain: 'Das Objekt my laptop steht zwischen had und repaired; das ist have something done, kein Past Perfect.' },
    d1: { q: 'Setze have / my laptop / repair im Past Simple ein (eine Fachkraft führte die Reparatur aus): I ___ yesterday.', explain: 'Had markiert die Vergangenheit, my laptop das Objekt, repaired das Past Participle der von jemand anderem ausgeführten Handlung.' }
  });
  gram('so-such', {
    summary: 'So verstärkt Adjektive oder Adverbien (so clear); such bezieht sich auf eine Nominalgruppe (such a clear explanation).',
    explanation: 'So verstärkt ein Adjektiv oder Adverb: so clear, so quickly. Such bezieht sich auf eine Nominalgruppe: such a clear explanation, such useful advice. Vor einem zählbaren Substantiv im Singular braucht man a/an. Beide Muster können eine Folge mit that anschließen: so clear that everyone understood.',
    example: 'Es war eine so nützliche Erklärung, dass ich sie mir aufgeschrieben habe.',
    d0: { explain: 'Suggestion ist ein zählbares Substantiv im Singular; nötig ist such + a + Adjektiv + Substantiv.' },
    d1: { q: 'Setze so oder such ein: The instructions were ___ clear that nobody needed help.', explain: 'Nach der Lücke steht direkt das Adjektiv clear ohne Substantiv: so clear.' }
  });
  gram('preposition-ing', {
    summary: 'Folgt auf eine Präposition ein Verb, steht es normalerweise in der -ing-Form: before leaving, without checking.',
    explanation: 'Wenn nach einer Präposition ein Verb steht, ist die übliche Form -ing: before leaving, without checking, interested in learning. In look forward to und be used to ist to eine Präposition, weshalb danach ebenfalls -ing steht. Das unterscheidet sich vom Infinitiv-to in want to learn.',
    example: 'Bitte prüfe die Adresse vor dem Absenden des Pakets.',
    d0: { explain: 'Nach der Präposition for steht das Verb in der -ing-Form: for helping.' },
    d1: { q: 'Setze die passende Form von meet ein: I look forward to ___ the team.', explain: 'To ist in look forward to eine Präposition; danach steht meeting, nicht meet.' }
  });
  gram('modified-comparatives', {
    summary: 'Much, far und a lot verstärken den Komparativ: much cheaper, far more reliable.',
    explanation: 'Much, far und a lot verstärken den Komparativ: much cheaper, far more reliable. A little und slightly zeigen einen kleinen Unterschied. Setze nicht very direkt vor den Komparativ und verdopple ihn nicht: much easier, nicht more easier. Für Gleichheit verwendet man as + Grundform des Adjektivs + as.',
    example: 'Die neue Verbindung ist viel zuverlässiger als die alte.',
    d0: { explain: 'Much verstärkt den Komparativ shorter; very und ein zusätzliches more passen hier nicht.' },
    d1: { q: 'Verwende much und den Komparativ von reliable: This option is ___ than the previous one.', explain: 'Reliable bildet den Komparativ mit more; much verstärkt diese Vergleichsform.' }
  });
})();
