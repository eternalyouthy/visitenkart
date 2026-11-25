/* OVERLAY · English notes, etymologies (WHY?), senses & topic scenarios for GERMAN Words (B1 + B2). */
(function () {
  GT.localize('en', {
    // Words · Everyday Core (B1)
    'b1-everyday-obwohl': {
      note: 'Subordinating conjunction: the conjugated verb moves to the END (“…, obwohl alle Tests grün waren”). If the obwohl-clause comes first, the main clause starts with the verb: “Obwohl es regnet, gehe ich spazieren”. The meaning is the same as trotzdem, but the word order differs: “Es regnet. Trotzdem gehe ich spazieren”.',
      why: {
        text: 'Composition: fusion of ob + wohl.\nOrigin: in older German, ob meant “if” (like English if, which means both “if” and “whether”), and wohl meant “indeed, admittedly” (still today: “Er ist wohl reich, aber nicht glücklich” — “He is admittedly rich, but not happy”). The words stood apart: “ob er wohl reich ist…” ≈ “if he is indeed rich…”. From this came the concession “granted, and yet”, and in the 16th–17th centuries the pair fused into the conjunction “although”. Obgleich and obschon are built the same way.\nTransparency: the meaning “although” cannot be deduced directly from the modern meanings of ob (“whether”) and wohl (“probably”).',
        evidence: 'Records the fusion of ob (“if”) + concessive wohl in the 16th–17th centuries; details of the early grammaticalisation are interpreted variously.'
      },
      parts: ['“if” (old meaning; today “whether”)', '“admittedly, indeed” (concessive particle)']
    },
    'b1-everyday-trotzdem': {
      note: 'An adverb, not a conjunction: in first position it is immediately followed by the verb (“Trotzdem war ich pünktlich”), never “Trotzdem ich war …”. It can also stand inside the clause (“Wir machen es trotzdem”). Colloquially: “Trotzdem danke!” — thanks anyway.',
      why: {
        text: 'Composition: preposition trotz + demonstrative pronoun dem (“that”).\nOrigin: the preposition trotz developed from the noun der Trotz (“defiance, resistance”); literally trotzdem means “in spite of that”.\nTransparency: transparent — both parts are alive in the modern language.',
        evidence: 'Fusion of the preposition trotz (from the noun der Trotz “defiance, resistance”) with the dative dem.'
      },
      parts: ['in spite of, despite', '“that” (dative): despite that']
    },
    'b1-everyday-erledigen': {
      note: 'A very common word at work and in daily life: “Einkäufe / Behördengänge erledigen”, “Das ist erledigt” — that’s done. Colloquially “Ich bin völlig erledigt” — I’m completely wiped out.',
      why: {
        text: 'Composition: er- + ledig + -en.\nOrigin: Middle High German erledegen meant “to set free” — from the old meaning of the adjective ledig “free, unencumbered” (today narrowed to “single, unmarried”). Hence “to free oneself of a task” → to get it done.\nTransparency: figurative — from the modern sense of ledig (“single, unmarried”), the meaning of the verb can no longer be guessed.',
        evidence: 'MHG erledegen “to set free”, from ledig “free, unoccupied, free of obligations”.'
      },
      parts: ['achieving a result', 'free (archaic; today: single, unmarried)', 'infinitive ending']
    },

    // Words · Work & Career (B1)
    'b1-work-bewerben': {
      note: 'Three prepositions: sich um eine Stelle (acc.) bei einer Firma (dat.) als Entwickler bewerben. Typical mistake: “sich für eine Stelle bewerben” (calqued from English apply for) — heard in speech, but the standard is “um”. Strong verb with e→i: du bewirbst, er bewirbt. “Das Bewerbungsgespräch” — job interview.',
      why: {
        text: 'Composition: be- + werben + -en.\nOrigin: Old High German (h)werban meant “to turn, to busy oneself, to be occupied with something”, hence “to court, to strive for (a hand in marriage, a post)” (cf. werben um) and sich bewerben (“to apply for a position”).\nTransparency: figurative — the connection to the modern meaning of werben (“to advertise”) is only indirect.',
        evidence: 'OHG (h)werban “to turn, to busy oneself” → “to strive for”, giving sich bewerben um and Werbung.'
      },
      parts: ['inseparable prefix', 'stem of werben — to court, to advertise', 'infinitive ending']
    },
    'b1-work-erfahrung': {
      note: '“Erfahrung (mit etw.) haben / sammeln”, “gute/schlechte Erfahrungen machen” (in the plural!). The verb “erfahren” means to find out, to learn (“Ich habe es erst gestern erfahren”); the adjective “erfahren” means experienced. A single memorable event is “ein Erlebnis”, not “eine Erfahrung”.',
      why: {
        text: 'Composition: from the verb erfahren (er- + fahren) + -ung.\nOrigin: Old High German irfaran meant “to travel through, to traverse, to reach”, and later “to experience, to come to know”. The verbal noun Erfahrung became established in the sense of “experience”.\nTransparency: opaque — modern fahren (“to go by vehicle”) does not by itself suggest “experience”.',
        evidence: 'OHG irfaran “to pass through, travel around, reach” → “to experience, find out”; Erfahrung is the verbal noun from erfahren.'
      },
      parts: ['achieving a result', 'stem of fahren — to travel, drive', 'verb → noun, always die']
    },
    'b1-work-besprechung': {
      note: 'A classic office word. In IT teams people often simply say “das Meeting”; “die Sitzung” is more formal. Watch out: “besprechen” takes a direct object without “über”: “Wir besprechen das Problem”, whereas “Wir sprechen über das Problem”.',
      why: {
        text: 'Composition: from the verb besprechen (be- + sprechen) + -ung.\nOrigin: the prefix be- makes the verb sprechen transitive — “to discuss something” (without the preposition über). The verbal noun Besprechung denotes the discussion or meeting itself.\nTransparency: completely transparent formation.',
        evidence: 'Transitive verb besprechen (be- + sprechen “to talk over”) + verbal noun suffix -ung.'
      },
      parts: ['makes the verb transitive (+ acc.)', 'stem of sprechen — to speak', 'verb → noun, always die']
    },
    'b1-work-kuendigen': {
      note: 'Works both ways: “Ich kündige” — I resign; “Die Firma kündigt mir” — the company dismisses me (dative!). Passive: “Mir wurde gekündigt” (standard), not “Ich wurde gekündigt” (heard in speech, but non-standard). For contracts: “den Handyvertrag / die Wohnung kündigen”. “Die Kündigungsfrist” — notice period.',
      why: {
        text: 'Composition: stem künd- (from archaic kund) + -ig- + -en.\nOrigin: derived from the old adjective kund (“known”, related to kennen), the verb kündigen originally meant “to give notice, to announce” (cf. ankündigen — “to announce”). In business and legal usage the meaning narrowed to “to give notice of termination of a contract”.\nTransparency: opaque — without knowing archaic kund, the root is not recognisable.',
        evidence: 'OHG kund “known” (from the root of kennen/können); kündigen originally “to notify”, narrowed in law to “to terminate a contract”.'
      },
      meaningExplanation: 'The verb kündigen works in three directions: resigning from a job yourself, dismissing an employee (jdm. dat.), and cancelling any contract (acc.).',
      meaningExamples: [
        'I quit my job.',
        'The company dismissed him.',
        'to cancel the internet contract'
      ],
      senses: [
        'to resign',
        'to dismiss someone (dat.)',
        'to terminate a contract (acc.)'
      ],
      parts: ['from archaic kund — known', 'verbal suffix', 'infinitive ending']
    },
    'b1-work-abteilung': {
      note: '“Die Personalabteilung” — HR department, “die IT-Abteilung”, “der Abteilungsleiter / die Abteilungsleiterin” — head of department. A ward in a hospital is usually “die Station”.',
      why: {
        text: 'Composition: from the verb abteilen (ab- + teilen) + -ung.\nOrigin: a verbal noun from abteilen (“to divide off, to partition”), used since the 18th century for a distinct division of an organisation.\nTransparency: completely transparent.',
        evidence: 'Verbal noun from abteilen (“to partition off”); used for organizational divisions since the 18th century.'
      },
      parts: ['off, separation', 'stem of teilen — to divide', 'verb → noun, always die']
    },
    'b1-work-vertrag': {
      note: 'Collocations: einen Vertrag unterschreiben / abschließen / verlängern / kündigen. “Befristet” — fixed-term, “unbefristet” — permanent (open-ended). Umlaut in the plural: die Verträge. Related reflexive verb “sich vertragen” — to get along (“Wir vertragen uns gut”).',
      why: {
        text: 'Composition: prefix Ver- + stem of the verb tragen.\nOrigin: Middle High German vertrac (“agreement, reconciliation”) was formed from the reflexive verb sich vertragen (“to come to terms, to get along”, historically from tragen “to carry, to bear”).\nTransparency: opaque — the meaning “contract” cannot be deduced from literal “to carry” today.',
        evidence: 'MHG vertrac “agreement, reconciliation”, from sich vertragen “to come to an agreement, get along” (from tragen).'
      },
      parts: ['inseparable prefix', 'stem of tragen — to carry']
    },
    'b1-work-ueberstunde': {
      note: 'Almost always in the plural: “Überstunden machen”. “Überstunden abbauen” (colloq. “abfeiern”) — to take time off in lieu; “ausbezahlt bekommen” — to have overtime paid out. “Die Gleitzeit” — flexitime.',
      why: {
        text: 'Composition: über- (“over, in excess”) + die Stunde (“hour”).\nOrigin: an industrial compound of the 19th century — literally “an hour beyond the norm” (cf. English overtime).\nTransparency: completely transparent compound.',
        evidence: 'Compound of über- (“in excess of the norm”) + Stunde (“hour”); attested since the 19th century.'
      },
      parts: ['over, in excess', 'die Stunde — hour']
    },
    'b1-work-verantwortlich': {
      note: '“Für etw. verantwortlich sein”, “die Verantwortung übernehmen / tragen”. At work you will hear “zuständig für” even more often — “who handles this, who to contact” (“Wer ist dafür zuständig?”); “verantwortlich” includes accountability for the outcome and potential blame.',
      why: {
        text: 'Composition: from the verb verantworten (ver- + Antwort) + -lich.\nOrigin: die Antwort is an ancient compound of ant- (“against, in reply”) + Wort (“word”). The verb verantworten was originally a legal term meaning “to answer before a court”, which gave rise to the adjective verantwortlich (cf. English answerable).\nTransparency: figurative — the word Antwort is visible, but the shift to “bearing responsibility” is a legal metaphor.',
        evidence: 'OHG antwurti < ant- (“in reply”) + Wort; verantworten originally in law “to answer before a court”.'
      },
      parts: ['inseparable prefix', 'die Antwort — answer', 'adjective suffix']
    },

    // Words · B2 Beruf
    'b2-beruf-werdegang': {
      note: 'A standard prompt at a job interview: “Erzählen Sie etwas über Ihren Werdegang”. Usually combined with “beruflich”. More formal than “Karriere”; on a CV the section is often titled “Beruflicher Werdegang”.',
      why: {
        text: 'Composition: stem of the verb werden (“to become”) + der Gang (“course, path”).\nOrigin: a 19th-century compound — literally “path of becoming”, established in the meaning “course of development, professional background”.\nTransparency: figurative, though the image of a “course of becoming” is easy to read.',
        evidence: 'Compound of the stem of werden (“to become”) + der Gang (“course, path”); attested since the 19th century.'
      },
      meaningExplanation: 'The word literally means “path of becoming” (werden + Gang) — an image of a path transferred to a person’s professional biography.',
      meaningExamples: [
        'professional background / career path'
      ],
      parts: ['stem of werden — to become', 'der Gang — course, path (from gehen)']
    },
    'b2-beruf-laufbahn': {
      note: '“Eine Laufbahn einschlagen” — to embark on a career path (set phrase). Slightly formal; in everyday speech people say “Karriere” or “mein Weg”. Literally — “running track”.',
      why: {
        text: 'Composition: der Lauf (“run”) + die Bahn (“track, path”).\nOrigin: from the 17th century it denoted a running track or racecourse; in the 18th century the figurative meaning “course of life or service” developed (parallel to French carrière, which also originally meant “racecourse, road”).\nTransparency: figurative — the literal image of a running track is clearly visible.',
        evidence: 'From the 17th century “running track”; in the 18th century the figurative transfer to a professional path and career became established.'
      },
      meaningExplanation: 'Literally Laufbahn means “running track”, but in professional language the word became established figuratively in the sense of “career, professional path”.',
      meaningExamples: [
        'the running track in the stadium (literal)',
        'to embark on a professional career (figurative)'
      ],
      parts: ['der Lauf — run (from laufen)', 'die Bahn — track, path']
    },
    'b2-beruf-quereinsteiger': {
      note: 'Formal qualifications have traditionally mattered a great deal in Germany, so this word comes up often — especially in IT: “Quereinstieg in die IT”. “Quer” means across / sideways. Feminine form: die Quereinsteigerin.',
      why: {
        text: 'Composition: quer (“across, sideways”) + Einsteiger (from einsteigen “to board, to get in”).\nOrigin: a modern German coinage from the second half of the 20th century — the image of someone who “boards the train” of a profession not at the starting station, but from the side, coming from another field.\nTransparency: figurative, with a vivid and clear metaphor.',
        evidence: 'Modern compound quer + Einsteiger (late 20th century) denoting entry into a profession without standard initial training.'
      },
      meaningExplanation: 'Literally “someone who boards sideways” (quer + einsteigen): the image of entering a profession not along a straight training track, but from another field.',
      meaningExamples: [
        'to move into IT as a career changer from another profession'
      ],
      parts: ['across, sideways', 'in, into (einsteigen — to board, enter)', 'stem of steigen — to climb, step', 'agent suffix (“person who does”)']
    },
    'b2-beruf-weiterentwickeln': {
      note: 'A key word for job interviews and annual appraisal talks (“Wo sehen Sie sich in fünf Jahren?”). Separable: “Ich entwickle mich weiter”; with zu: “weiterzuentwickeln” (zu goes inside). “Fachlich” — professionally/technically, “persönlich” — personally.',
      why: {
        text: 'Composition: weiter- (“further”) + ent- (“un-”) + wickeln (“to wrap, wind”) + -n.\nOrigin: entwickeln literally meant “to unwrap something rolled up”. The figurative meaning “to develop” became established in the 18th century, often cited as a calque of French développer (“to unwrap, unfold”).\nTransparency: figurative — in everyday speech the link to wickeln (“to wrap”) is barely felt.',
        evidence: 'Literally “to unwrap” (ent- + wickeln); the 18th-century figurative sense “to develop” is linked to the influence of French développer and Latin explicare.'
      },
      parts: ['further (separable part)', 'un-, unfolding', 'stem of wickeln — to wrap, wind', 'infinitive ending']
    },
    'b2-beruf-aufstiegsmoeglichkeit': {
      note: 'Usually in the plural. Related verbs: “beruflich aufsteigen” — to advance in one’s career, “befördert werden” — to get promoted. The -s- in the middle is a linking sound (Fugen-s), common after -stieg, -ung, -heit, -keit.',
      why: {
        text: 'Composition: der Aufstieg (“ascent”) + linking -s- + die Möglichkeit (“possibility, opportunity”).\nOrigin: Aufstieg is a verbal noun from aufsteigen (“to climb up”), figuratively denoting career advancement; -s- is a linking element without independent meaning.\nTransparency: figurative (the metaphor of climbing upwards), but the structure is completely clear.',
        evidence: 'Compound of Aufstieg (from aufsteigen “to ascend”) + Fugen-s + Möglichkeit (from möglich, related to mögen).'
      },
      meaningExplanation: 'The spatial image of “climbing upwards” (Aufstieg — ascent), transferred to moving up the career ladder.',
      meaningExamples: [
        'good promotion prospects in the company'
      ],
      parts: ['der Aufstieg — ascent (from aufsteigen)', 'linking element (Fugen-s)', 'possible', 'adjective → noun, always die']
    },
    'b2-beruf-gehaltsverhandlung': {
      note: '“Das Gehalt” (pl. Gehälter) — monthly salary in an office job; “der Lohn” — wages, often hourly. In Germany people negotiate the gross annual figure: “Jahresgehalt brutto”. Watch out: “der Gehalt” (masculine) means content, e.g. “der Alkoholgehalt”.',
      why: {
        text: 'Composition: das Gehalt (“salary”) + -s- + die Verhandlung (“negotiation”).\nOrigin: Gehalt was historically formed from the verb halten (“to hold, to maintain”): first “content” (cf. der Gehalt “content of a substance”), then from the 18th century in the neuter gender — “monetary upkeep, salary”. verhandeln comes from handeln (“to do business”).\nTransparency: the compound is transparent, though the historical link between Gehalt and halten is no longer obvious today.',
        evidence: 'Gehalt < halten/behalten (“content” → “salary” in the neuter since the 18th century); verhandeln from handeln.'
      },
      parts: ['das Gehalt — salary', 'linking element (Fugen-s)', 'stem of verhandeln — to negotiate', 'verb → noun, always die']
    },
    'b2-beruf-fachkraft': {
      note: 'Always feminine (die Fachkraft), even when referring to a man. “Der Fachkräftemangel” — shortage of skilled workers — is a constant topic in German news and politics. In job ads: “Fachkraft für …”.',
      why: {
        text: 'Composition: das Fach (“speciality, field”) + die Kraft (“power, force”; in compounds — “worker”).\nOrigin: das Fach originally meant “compartment, shelf, bay” and came to denote a specific branch of knowledge or speciality figuratively. The second element -kraft in compounds (Arbeitskraft, Lehrkraft, Fachkraft) refers metonymically to the worker.\nTransparency: figurative — both parts are used in developed figurative senses.',
        evidence: 'Fach “compartment, shelf” → “speciality”; -kraft is a metonymy “labour force → worker”.'
      },
      parts: ['das Fach — subject, speciality', 'die Kraft — force; here: worker']
    },
    'b2-beruf-selbststaendig': {
      note: 'Also spelled “selbständig”. In job ads “selbstständig arbeiten” means “to work independently”, not “to be self-employed”! “Der Freiberufler” — freelancer in a liberal profession (a special tax status in Germany).',
      why: {
        text: 'Composition: selbst (“self”) + -ständig (from stehen “to stand”) + -ig.\nOrigin: the adjective became established in the 18th century in the meaning “standing on one’s own feet, independent”; hence the business phrase sich selbstständig machen (“to start one’s own business”).\nTransparency: figurative — the image of “standing by oneself” is easy to see.',
        evidence: '18th-century formation from selbst + -ständig (from stehen/Stand) meaning “independent, self-reliant”.'
      },
      parts: ['self', 'from stehen / Stand — to stand', 'adjective suffix']
    },
    'b2-beruf-einarbeitung': {
      note: 'Verb: “sich in etw. (acc.) einarbeiten” — to familiarise oneself with a new task/role; “jdn. einarbeiten” — to train a new colleague. In IT people also say “das Onboarding”.',
      why: {
        text: 'Composition: from the verb einarbeiten (ein- “into” + arbeiten “to work”) + -ung.\nOrigin: literally “working oneself into a job” — the standard German term for the induction and training period of a new employee.\nTransparency: completely transparent formation.',
        evidence: 'From einarbeiten (ein- + arbeiten) + -ung.'
      },
      parts: ['in, into', 'stem of arbeiten — to work', 'verb → noun, always die']
    },
    'b2-beruf-probezeit': {
      note: '“Die Probezeit bestehen” — to pass the probation period. Under German employment law, during the Probezeit either side can terminate the contract with 2 weeks’ notice (without giving a reason).',
      why: {
        text: 'Composition: die Probe (“trial, test”) + die Zeit (“time”).\nOrigin: Probe entered German in the 15th century from Medieval Latin proba (“test, proof”, from probāre); the compound Probezeit became established in employment law and for driving licences (2 years for new drivers).\nTransparency: completely transparent compound.',
        evidence: 'Probe (< Med. Lat. proba “test”) + Zeit (“time”).'
      },
      parts: ['die Probe — trial, test', 'die Zeit — time']
    },
    'b2-beruf-befoerderung': {
      note: 'Passive: “Er wurde zum Teamleiter befördert” — he was promoted to team lead.',
      why: {
        text: 'Composition: from the verb befördern (be- + fördern “to move forward, promote”) + -ung.\nOrigin: fördern is formed from vorder (“front, forward”) — literally “to move forward”; hence both physical “transport / carriage” (conveying forward) and career “advancement / promotion”.\nTransparency: both meanings go back to the idea of “moving forward”.',
        evidence: 'From befördern (be- + fördern < vorder “forward”): 1) to transport; 2) to promote in rank.'
      },
      meaningExplanation: 'die Beförderung has two distinct formal meanings: “promotion at work” and “transport/carriage of passengers or goods” (in public transport and DB regulations).',
      meaningExamples: [
        'to get a promotion',
        'the carriage of luggage'
      ],
      senses: [
        'promotion at work',
        'transport, carriage (formal)'
      ],
      parts: ['inseparable prefix', 'stem of fördern — to promote, move forward', 'verb → noun, always die']
    },
    'b2-beruf-arbeitszeugnis': {
      note: 'In Germany an employer is legally required to issue an Arbeitszeugnis. It is always written in a polite “secret code”: “stets zu unserer vollsten Zufriedenheit” = grade 1 (“excellent”), whereas “zu unserer Zufriedenheit” = grade 3! “Das Zwischenzeugnis” — interim reference (useful to request when your manager changes).',
      why: {
        text: 'Composition: die Arbeit (“work”) + -s- + das Zeugnis (“certificate, reference”).\nOrigin: Zeugnis is formed from the verb zeugen (“to testify, bear witness”) + suffix -nis (plural with double s: -nisse).\nTransparency: completely transparent compound.',
        evidence: 'Arbeit + Fugen-s + Zeugnis (from zeugen “to bear witness” + -nis).'
      },
      parts: ['die Arbeit — work', 'linking element (Fugen-s)', 'das Zeugnis — certificate, reference']
    },
    'b2-beruf-betriebsrat': {
      note: 'In German companies (especially in IT security!) the Betriebsrat has a real right of veto (Mitbestimmung) over any system capable of monitoring employee behaviour (EDR, logs, DLP).',
      why: {
        text: 'Composition: der Betrieb (“company, plant, operation”) + -s- + der Rat (“council”).\nOrigin: a legal term established in Germany by the Works Councils Act of 1920 (Betriebsrätegesetz); der Rat goes back to OHG rāt (“advice, deliberative body”).\nTransparency: completely transparent compound.',
        evidence: 'Betrieb + Fugen-s + Rat (“council”); anchored in German labour law since 1920.'
      },
      parts: ['der Betrieb — company, establishment', 'linking element (Fugen-s)', 'der Rat — council']
    },
    'b2-beruf-weiterbildung': {
      note: 'Distinguish: “die Ausbildung” — initial vocational training; “die Weiterbildung / Fortbildung” — further training and courses once you are already in a profession. “Der Bildungsurlaub” — paid educational leave (5 days a year in most German states!).',
      why: {
        text: 'Composition: weiter (“further”) + die Bildung (“education”, from bilden + -ung).\nOrigin: die Bildung became established in the 18th century in the meaning “education, personal formation”; the 20th-century compound Weiterbildung denotes training undertaken after completing initial professional qualifications.\nTransparency: completely transparent compound.',
        evidence: 'weiter + Bildung (from bilden + -ung); term of continuing professional education.'
      },
      parts: ['further', 'stem of bilden — to form, educate', 'verb → noun, always die']
    },
    'b2-beruf-kuendigungsfrist': {
      note: '“Drei Monate zum Monatsende / zum Quartalsende” is a very common clause in German IT contracts (you have to resign well in advance!). Also applies to rental and internet contracts.',
      why: {
        text: 'Composition: die Kündigung (“termination / resignation”) + -s- + die Frist (“period, deadline”).\nOrigin: a legal determinative compound — the mandatory period between giving notice (Kündigung) and the date the contract ends.\nTransparency: completely transparent compound.',
        evidence: 'Kündigung + Fugen-s + Frist (“notice period for termination”).'
      },
      parts: ['die Kündigung — resignation, termination', 'linking element (Fugen-s)', 'die Frist — time limit, period']
    },
    'b2-beruf-eigeninitiative': {
      note: 'Usually no plural. “Aus Eigeninitiative” / “Eigeninitiative zeigen” — to show initiative. A staple buzzword in German job ads and employer references (Arbeitszeugnis).',
      why: {
        text: 'Composition: adjective eigen (“own”) + die Initiative (“initiative”).\nOrigin: Initiative entered German in the 19th century via French from Latin initium (“beginning”); the compound Eigeninitiative emphasises independent action taken without being told from above.\nTransparency: completely transparent compound.',
        evidence: 'eigen + Initiative (< Fr. initiative < Lat. initium “beginning”).'
      },
      parts: ['own', 'die Initiative — initiative']
    },
    'b2-beruf-belastbarkeit': {
      note: 'Adjective: “belastbar” (“Ich bin auch unter Zeitdruck belastbar”). In German job ads “hohe Belastbarkeit” can sometimes be a hint at frequent firefighting — worth clarifying at the interview.',
      why: {
        text: 'Composition: adjective belastbar (from belasten “to load, burden”, from die Last “load” + -bar) + suffix -keit (always die).\nOrigin: originally an engineering term for the maximum load capacity of a component or bridge; transferred in the 20th century to psychology and HR in the sense of “resilience under pressure”.\nTransparency: figurative, but all morphemes are completely readable.',
        evidence: 'From belastbar (be- + Last + -bar) + -keit; transfer from mechanical load capacity to psychological resilience.'
      },
      meaningExplanation: 'An engineering image of the permissible mechanical load on a structure (belastbar — “able to bear a load”), transferred to a person’s psychological resilience under stress.',
      meaningExamples: [
        'the load capacity of a bridge (literal)',
        'high resilience under pressure at work (figurative)'
      ],
      parts: ['inseparable prefix', 'die Last — load, burden', '“capable of bearing”', 'adjective → noun, always die']
    },
    'b2-beruf-teamfaehigkeit': {
      note: 'Usually no plural. Adjective: “teamfähig”. Follows the productive pattern “X-fähigkeit”: Kritikfähigkeit (ability to take criticism), Kommunikationsfähigkeit (communication skills).',
      why: {
        text: 'Composition: das Team (“team”, from English) + fähig (“capable”) + -keit (always die).\nOrigin: a late-20th-century hybrid HR compound formed on the productive German pattern -fähigkeit (like Kommunikationsfähigkeit, Kritikfähigkeit).\nTransparency: completely transparent compound.',
        evidence: 'Team (< Eng.) + fähig + -keit; modern formation on the -fähigkeit pattern.'
      },
      parts: ['das Team — team', 'capable', 'adjective → noun, always die']
    },
    'b2-beruf-arbeitsmarkt': {
      note: 'Preposition: “auf dem Arbeitsmarkt” (dative). Useful expression: “gefragt sein” — to be in demand.',
      why: {
        text: 'Composition: die Arbeit (“work, labour”) + -s- + der Markt (“market”).\nOrigin: a 19th-century economic compound; der Markt is an early borrowing from Latin mercātus (“trade, market”).\nTransparency: completely transparent compound.',
        evidence: 'Arbeit + Fugen-s + Markt (< Lat. mercātus); economic term since the 19th century.'
      },
      parts: ['die Arbeit — work, labour', 'linking element (Fugen-s)', 'der Markt — market']
    },
    'b2-beruf-bewerbungsunterlagen': {
      note: 'Used in the plural (die Bewerbungsunterlagen). In Germany the standard package is: “der Lebenslauf” (CV), “das Anschreiben” (cover letter — increasingly optional in IT), and “Arbeitszeugnisse” / certificates.',
      why: {
        text: 'Composition: die Bewerbung (“job application”) + -s- + die Unterlagen (“documents, supporting papers”).\nOrigin: Unterlagen (plural of Unterlage “underlay, base”, from unter + liegen/legen) became established in business usage as “documents serving as the basis for examining a case”.\nTransparency: transparent with respect to Bewerbung + Unterlagen.',
        evidence: 'Bewerbung + Fugen-s + Unterlagen (“official documents, supporting materials”).'
      },
      parts: ['die Bewerbung — job application', 'linking element (Fugen-s)', 'die Unterlagen — documents, papers (pl.)']
    },

    // Words · Health & Doctor (B1)
    'b1-health-sprechstunde': {
      note: 'The hours when a doctor sees patients. “Offene Sprechstunde” — walk-in clinic without an appointment; “Videosprechstunde” — video consultation. On surgery doors you often see “Sprechzeiten” — it means the same thing. Teachers and university professors also have their own Sprechstunde (office hours).',
      why: {
        text: 'Composition: stem of the verb sprechen (“to speak”) + die Stunde (“hour”).\nOrigin: a 19th-century compound — literally “speaking hour”, the time when a doctor, lecturer or official receives people for consultation.\nTransparency: completely transparent compound.',
        evidence: 'Determinative compound Sprech- (from sprechen) + Stunde; attested since the 19th century for fixed consultation hours.'
      },
      parts: ['stem of sprechen — to speak', 'die Stunde — hour']
    },
    'b1-health-praxis': {
      note: 'Two meanings: a doctor’s premises and business (“Die Praxis ist heute geschlossen”) and practical experience (“Mir fehlt noch die Praxis”). Plural: die Praxen (never “Praxisse”). “To practise” a skill is üben, not Praxis. Note on floors: der zweite Stock in Germany is the British second floor / US third floor (ground floor = Erdgeschoss).',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Praxen).\nOrigin: entered German in the 16th century via Latin from Greek prâxis (“action, activity”). By metonymy, the meaning “medical practice” also came to denote the premises where a doctor sees patients — the surgery/office.\nTransparency: the two meanings are linked by metonymic transfer (activity → place).',
        evidence: 'Borrowed in the 16th century from Lat. praxis < Gk. prâxis “action, performance”; metonymic transfer to a doctor’s premises.'
      },
      meaningExplanation: 'The word Praxis has two distinct meanings: a doctor’s office/surgery (private practice) and practical experience (as opposed to theory).',
      meaningExamples: [
        'The doctor’s surgery is closed today.',
        'In practice, it works differently.'
      ],
      senses: [
        'doctor’s office / surgery',
        'practice (as opposed to theory)'
      ]
    },
    'b1-health-untersuchung': {
      note: 'At the doctor’s: “sich untersuchen lassen” — to have a medical check-up, “die Vorsorgeuntersuchung” — preventive screening. It also means an investigation by the police, a company or researchers — in cybersecurity: “die forensische Untersuchung”.',
      why: {
        text: 'Composition: from the verb untersuchen (unter- + suchen) + suffix -ung.\nOrigin: Middle High German undersuochen already meant “to test, examine, investigate” (from suchen “to seek, search”).\nTransparency: figurative — the root suchen is visible, but the modern spatial meaning of unter- (“under”) does not apply here.',
        evidence: 'MHG undersuochen “to test, examine”; the prefix unter- does not carry its literal meaning “under” here.'
      },
      meaningExplanation: 'Untersuchung denotes both a medical examination/check-up and an official or police investigation — both are standard dictionary meanings, not metaphors.',
      meaningExamples: [
        'a medical examination',
        'an internal investigation after the incident'
      ],
      senses: [
        'medical examination',
        'investigation'
      ],
      parts: ['inseparable prefix', 'stem of suchen — to search', 'verb → noun, always die']
    },
    'b1-health-behandeln': {
      note: 'Medicine: “Der Arzt behandelt den Patienten”, “sich behandeln lassen”, “die Behandlung” — treatment. Also how you treat people (“Er behandelt mich wie ein Kind”) and covering a topic in a meeting (“Heute behandeln wir nur Punkt 3”). Weak verb: behandelte, hat behandelt.',
      why: {
        text: 'Composition: be- + handeln + -n.\nOrigin: the verb handeln goes back to Old High German hantalōn “to take in one’s hands, touch, handle” (from die Hand). The prefixed verb behandeln became established in the sense “to deal with someone/something” and later broadened to “to treat medically” and “to cover a topic”.\nTransparency: figurative — modern handeln (“to act, trade”) does not directly suggest “to treat a patient”.',
        evidence: 'OHG hantalōn “to touch with the hands, handle” (from Hand); behandeln from the 15th–16th centuries “to deal with someone/something”, then “to treat medically”.'
      },
      meaningExplanation: 'The verb behandeln has three distinct dictionary meanings: to treat a patient medically, to treat/deal with someone or something, and to cover a topic.',
      meaningExamples: [
        'to treat a patient',
        'to cover a topic in the meeting',
        'to treat data confidentially'
      ],
      senses: [
        'to treat (medically)',
        'to treat, deal with (something / someone)',
        'to cover, discuss (a topic)'
      ],
      parts: ['inseparable prefix, makes the verb transitive (+ acc.)', 'stem of handeln — to act (historically from Hand)', 'infinitive ending']
    },
    'b1-health-verschreiben': {
      note: 'Two meanings. With a reflexive verb the prefix ver- often means “to do wrongly by mistake”: sich verschreiben (to make a slip of the pen / typo), sich versprechen (to misspeak), sich verhören (to mishear), sich verlaufen (to get lost). “Verschreibungspflichtig” — prescription-only.',
      why: {
        text: 'Composition: ver- + schreiben + -en.\nOrigin: schreiben is an early borrowing from Latin scribere (“to write”). In Middle High German verschrīben meant “to assign or commit in writing”, whence the medical sense “to write a prescription”. Reflexive sich verschreiben (“to make a slip of the pen”) follows the productive ver- pattern of error.\nTransparency: sich verschreiben is transparent, while “to prescribe medicine” is figurative.',
        evidence: 'schreiben < Lat. scribere; MHG verschrīben “to assign in writing”; sich verschreiben follows the error pattern of ver-.'
      },
      meaningExplanation: 'Without reflexive sich the verb means “to prescribe medication”, whereas with sich (sich verschreiben) it means “to make a slip of the pen or a typo”.',
      meaningExamples: [
        'The doctor prescribes an antibiotic.',
        'Sorry, I made a typo.'
      ],
      senses: [
        'to prescribe (medicine)',
        'to make a slip of the pen / typo (sich)'
      ],
      parts: ['inseparable prefix (assign / error with sich)', 'stem of schreiben — to write', 'infinitive ending']
    },
    'b1-health-rezept': {
      note: 'Covers both a medical prescription and a cooking recipe! “Rezeptfrei” — over-the-counter; “rezeptpflichtig” — prescription-only. Today doctors usually issue an “E-Rezept”, which the pharmacy reads directly from your insurance card. At the pharmacy: “ein Rezept einlösen” — to fill a prescription.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Rezepte).\nOrigin: from Latin receptum (“something taken”, from recipere “to take, receive”): medical prescriptions traditionally began with the Latin imperative recipe — “take!” (whence the symbol ℞). Later the word spread to culinary recipes as well.\nTransparency: uncompounded stem; combines the meanings of English “prescription” and “recipe”.',
        evidence: 'From Lat. receptum (from recipere “to take”) and the opening formula of medical prescriptions recipe! (“take!”).'
      },
      meaningExplanation: 'In German, das Rezept denotes both a doctor’s prescription for medication and a culinary recipe for a dish.',
      meaningExamples: [
        'a prescription from the GP',
        'an easy soup recipe'
      ],
      senses: [
        'doctor’s prescription',
        'cooking recipe'
      ]
    },
    'b1-health-erkaeltung': {
      note: 'Verb: “sich erkälten” (Ich habe mich erkältet). Adjective/participle: “Ich bin erkältet” — I have a cold. An Erkältung is milder than “die Grippe” (flu). Doctors often write “grippaler Infekt” on sick notes — that is simply a heavy cold, not the flu.',
      why: {
        text: 'Composition: from the verb sich erkälten (er- + kalt with umlaut) + -ung.\nOrigin: sich erkälten literally meant “to grow cold, to chill” (er- transition into a state + kalt “cold”) and became established in the 16th century in the meaning “to catch a cold”.\nTransparency: transparent — the root kalt is easy to recognise.',
        evidence: 'From reflexive sich erkälten (“to become chilled, catch a cold”), derived from kalt with the prefix er- (16th century).'
      },
      parts: ['transition into a state', 'kalt — cold (umlaut in erkälten)', 'verb → noun, always die']
    },
    'b1-health-verletzen': {
      note: 'Watch the case: “Ich habe mich verletzt” (acc.), but when a body part is named, the reflexive pronoun is dative and the body part takes the definite article rather than a possessive: “Ich habe mir den Arm verletzt”, not “meinen Arm”. Figuratively: “Regeln / den Datenschutz verletzen” — to violate. In security: “die Datenschutzverletzung” — data breach.',
      why: {
        text: 'Composition: ver- + bound root -letz- + -en.\nOrigin: Middle High German verletzen was formed from the now extinct verb letzen (“to delay, hinder, harm”). The simple verb disappeared from the language, leaving verletzen and die Verletzung.\nTransparency: opaque — the root -letz- no longer exists on its own in modern German.',
        evidence: 'MHG verletzen “to damage, wound”, from the lost verb letzen “to hinder, harm”.'
      },
      meaningExplanation: 'Reflexive sich verletzen means “to get injured, hurt oneself”, while transitive verletzen also means “to violate rules, rights or policies”.',
      meaningExamples: [
        'He injured himself playing sports.',
        'to violate a security policy'
      ],
      senses: [
        'to hurt oneself (sich acc.)',
        'to injure a body part (sich dat. + acc.)',
        'to violate, breach (rules, rights)'
      ],
      parts: ['inseparable prefix', 'bound root (not used on its own)', 'infinitive ending']
    },
    'b1-health-notfall': {
      note: '“Im Notfall” also means “in an emergency / if worst comes to worst”. In Germany: 112 — ambulance and fire brigade, 110 — police, 116 117 — on-call medical service when it is not life-threatening and surgeries are closed. Emergency department — “die Notaufnahme”. In IT: “der Notfallplan”, “das Notfallmanagement”.',
      why: {
        text: 'Composition: die Not (“distress, need”) + der Fall (“case”).\nOrigin: a 17th-century determinative compound — literally “case of distress or acute need”. The same stem Not appears in notwendig (“necessary”).\nTransparency: completely transparent compound.',
        evidence: 'Compound of die Not (“need, distress”) + der Fall (“case”); attested since the 17th century.'
      },
      parts: ['die Not — distress, need', 'der Fall — case']
    },
    'b1-health-krankenkasse': {
      note: 'Statutory health insurance funds (TK, AOK, Barmer …). “Gesetzlich versichert” vs “privat versichert” (private insurance is usually called “Krankenversicherung”). Colloquially: “Das zahlt die Kasse”. On your first visit each quarter you present your “Versichertenkarte” (Gesundheitskarte).',
      why: {
        text: 'Composition: die Kranken (“sick people”) + die Kasse (“fund, cash box”).\nOrigin: in Middle High German kranc meant “weak, feeble”; the meaning “sick, ill” became primary in the 15th–16th centuries, displacing older siech. Kasse entered German in the 16th century from Italian cassa (“chest, cash box”).\nTransparency: completely transparent compound — “fund for the sick”.',
        evidence: 'MHG kranc “weak” → “sick” (15th–16th centuries); Kasse < Ital. cassa (16th century).'
      },
      parts: ['die Kranken — sick people', 'die Kasse — fund, cash office']
    },
    'b1-health-ueberweisung': {
      note: 'Context decides the meaning: at the doctor’s it is a referral to a specialist; at the bank it is a bank transfer. Verb: “jdn. zum Facharzt überweisen” / “Geld auf ein Konto überweisen”. All nouns ending in -ung are feminine, so you never have to guess the article.',
      why: {
        text: 'Composition: from the verb überweisen (über- “across, over” + weisen “to point, direct”) + -ung.\nOrigin: literally “to direct or transfer over to another party”; from the 18th–19th centuries it became established both in banking (transferring money to another account) and in medicine (referring a patient to another doctor).\nTransparency: figurative — the root weisen is visible, but both specialised meanings need to be known from context.',
        evidence: 'über- + weisen (“to direct, hand over to another”); the financial and medical meanings both developed from the idea of transferring to a recipient.'
      },
      meaningExplanation: 'In everyday life in Germany, Überweisung regularly appears in two very different domains: a referral to a medical specialist and a bank transfer.',
      meaningExamples: [
        'a referral to a specialist',
        'a bank transfer via online banking'
      ],
      senses: [
        'referral to a specialist',
        'bank transfer'
      ],
      parts: ['over, across (“pass on”)', 'stem of weisen — to point, direct', 'verb → noun, always die']
    },
    'b1-health-notaufnahme': {
      note: 'Only for genuine emergencies. If it can wait and your GP’s surgery is closed, call 116 117 (on-call medical service). “Aufnehmen” means to admit (a patient), as well as to record (audio/video).',
      why: {
        text: 'Composition: die Not (“distress, emergency”) + die Aufnahme (“admission, reception”, from aufnehmen).\nOrigin: a modern medical compound — literally “emergency admission (to hospital)”, from the sense of aufnehmen “to admit a patient to inpatient care”.\nTransparency: completely transparent compound.',
        evidence: 'Compound of Not (“emergency need”) + Aufnahme (“admission to an institution”, from aufnehmen).'
      },
      parts: ['die Not — distress, emergency', 'die Aufnahme — admission, reception (from aufnehmen)']
    },
    'b1-health-krankenwagen': {
      note: 'Professionals and news reports also say “der Rettungswagen” (RTW). Emergency number: 112. The plural is unchanged: die Krankenwagen (in southern Germany also “Krankenwägen”).',
      why: {
        text: 'Composition: die Kranken (“sick people”) + der Wagen (“wagon, vehicle, car”).\nOrigin: a 19th-century compound — literally “vehicle for transporting the sick”. German der Wagen goes back to the Indo-European root *weǵʰ- (“to convey in a vehicle”), cognate with English wagon and way.\nTransparency: completely transparent compound.',
        evidence: 'Kranken + Wagen (OHG wagan < IE *weǵʰ- “to convey”, cognate with Eng. wagon).'
      },
      parts: ['die Kranken — sick people', 'der Wagen — vehicle, car, wagon']
    },
    'b1-health-unfall': {
      note: '“Einen Unfall haben / bauen (colloq.) / verursachen” (to cause an accident). “Der Arbeitsunfall” — workplace or commuting accident: always tell the doctor, because a different insurance scheme pays (the Berufsgenossenschaft).',
      why: {
        text: 'Composition: prefix un- (here “bad, unfortunate”) + der Fall (“case, fall”, from fallen “to fall”).\nOrigin: Middle High German unval meant “misfortune, calamity, bad lot”. As in Unwetter (“severe weather”) or Unkraut (“weeds”), the prefix un- here expresses a negative, pejorative sense rather than simple negation.\nTransparency: figurative — “a bad event/fall” is easy to read.',
        evidence: 'MHG unval “misfortune, calamity” from pejorative un- + Fall (“case, lot” from fallen).'
      },
      parts: ['negative prefix: “bad, mis-”', 'der Fall — case, fall (from fallen)']
    },
    'b1-health-wunde': {
      note: 'A wound heals: “Die Wunde heilt”. Typical verbs: reinigen (to clean), desinfizieren (to disinfect), verbinden (to bandage), nähen (to stitch). Adjective “wund” — sore, chafed, raw.',
      why: {
        text: 'Composition: uncompounded stem Wunde (from the same root as the adjective wund “wounded, sore”).\nOrigin: a Common Germanic word (OHG wunta, cognate with English wound).\nTransparency: basic root (cf. verwunden “to wound”).',
        evidence: 'OHG wunta < Gmc. *wundō (cognate with Eng. wound), alongside the adjective wund.'
      }
    },
    'b1-health-pflaster': {
      note: 'Neuter: das Pflaster, plural unchanged. Its second meaning is pavement/cobbles (“Kopfsteinpflaster” — cobblestones). A larger dressing or bandage is “der Verband”.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Pflaster).\nOrigin: an early borrowing (OHG pflastar) via Latin emplastrum from Greek émplastron (“something spread on”). The word originally denoted both a medicinal plaster/salve and mortar or floor paving, whence the second meaning — “pavement, cobblestones”.\nTransparency: the two meanings (sticking plaster and cobblestone pavement) are connected by the history of the loanword, but are felt to be separate today.',
        evidence: 'OHG pflastar < Lat. emplastrum < Gk. émplastron; from the sense “building mortar, surfacing” developed “pavement, cobblestones”.'
      },
      meaningExplanation: 'The word das Pflaster has two meanings unrelated in modern usage: a sticking plaster (band-aid) and pavement (cobblestones).',
      meaningExamples: [
        'to stick a plaster on the wound',
        'to walk on the old cobblestones'
      ],
      senses: [
        'sticking plaster, band-aid',
        'paving, cobblestones'
      ]
    },
    'b1-health-salbe': {
      note: 'Verb: “die Salbe auftragen” — to apply the ointment. Everyday cosmetic cream is “die Creme”; “Salbe” sounds medical.',
      why: {
        text: 'Composition: uncompounded noun (plural die Salben).\nOrigin: a Common Germanic word (OHG salba “ointment, unguent”, cognate with English salve), going back to the Indo-European root *selp- meaning “fat, oil”.\nTransparency: basic root.',
        evidence: 'OHG salba < Gmc. *salbō < IE *selp- “fat, oil” (cognate with Eng. salve).'
      }
    },
    'b1-health-spritze': {
      note: 'In German you “receive” an injection: “eine Spritze bekommen”; the doctor “gibt” it. “Spritzen” also means to squirt or splash: “Das Auto hat mich nass gespritzt”.',
      why: {
        text: 'Composition: derived from the verb spritzen (“to squirt, spray, inject”).\nOrigin: from the 16th–17th centuries Spritze denoted a device for squirting liquids (including a fire pump), then a medical syringe, and by metonymy the injection itself.\nTransparency: the link to the verb spritzen is clearly visible.',
        evidence: 'From spritzen (“to squirt”); first “device for injecting”, then a syringe and by metonymy the injection itself.'
      },
      meaningExplanation: 'die Spritze denotes both the instrument itself (syringe) and the medical procedure (injection, shot).',
      meaningExamples: [
        'to get a painkilling injection',
        'to use a sterile syringe'
      ]
    },
    'b1-health-tablette': {
      note: 'You “nehmen” or (more formally, on package leaflets) “einnehmen” a tablet: “vor / nach dem Essen”. Not to be confused with “das Tablett” (tray) or “das Tablet” (tablet computer).',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Tabletten).\nOrigin: borrowed in the 19th century from French tablette (“small board, slab”, diminutive of table < Latin tabula “board”). In pharmacy it came to denote a compressed dosage form.\nTransparency: uncompounded loanword, cognate with English tablet.',
        evidence: 'Borrowed in the 19th century from Fr. tablette (“little slab”, dim. of table < Lat. tabula).'
      }
    },
    'b1-health-tropfen': {
      note: 'As medication, almost always in the plural: “Nasentropfen, Augentropfen, Ohrentropfen”. “Der Tropf” — IV drip (“am Tropf hängen”). Verb “tropfen” — to drip.',
      why: {
        text: 'Composition: noun der Tropfen (plural identical), alongside the verb tropfen (“to drip”).\nOrigin: a Common Germanic word (OHG tropfo, cognate with English drop), related to the strong verb triefen (“to drip, ooze”).\nTransparency: basic root.',
        evidence: 'OHG tropfo < Gmc. *drupōn- (cognate with Eng. drop and Ger. triefen).'
      }
    },
    'b1-health-pille': {
      note: 'With the definite article, “die Pille” usually means the contraceptive pill. For ordinary medication in tablet form people more often say “Tablette”.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Pillen).\nOrigin: borrowed in the 14th–15th centuries from Latin pilula (“little ball”, diminutive of pila “ball”) — named after the round shape of old apothecary pills. Since the 1960s “die Pille” has referred specifically to the oral contraceptive pill.\nTransparency: uncompounded loanword.',
        evidence: 'From Lat. pilula (“little ball”, dim. of pila) in the 14th–15th centuries.'
      },
      meaningExplanation: 'With the indefinite article, eine Pille is any pill, whereas with the definite article die Pille usually refers specifically to the contraceptive pill.',
      meaningExamples: [
        'to swallow a bitter pill',
        'to take the contraceptive pill'
      ],
      senses: [
        'pill, tablet',
        'the contraceptive pill (die Pille)'
      ]
    },
    'b1-health-schmerzmittel': {
      note: 'Neuter because of “das Mittel” (remedy, means, agent): Waschmittel, Lebensmittel, Verkehrsmittel. “Ein Mittel gegen + acc.”: ein Mittel gegen Husten — a cough remedy.',
      why: {
        text: 'Composition: der Schmerz (“pain”) + das Mittel (“remedy, means”).\nOrigin: das Mittel goes back to die Mitte (“middle”): that which lies “in the middle” and connects aim and result → “intermediary, means, remedy” (cf. English medium / means).\nTransparency: completely transparent compound.',
        evidence: 'Mittel is a nominalisation of MHG mittel (“middle”, from Mitte): “that which mediates” → “means, remedy”.'
      },
      parts: ['der Schmerz — pain', 'das Mittel — means, remedy']
    },
    'b1-health-therapie': {
      note: '“Eine Therapie machen” often refers to psychotherapy. “Die Therapie schlägt an” — the treatment is working. Stress falls on the final syllable: Thera-PIE.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Therapien).\nOrigin: borrowed in the 18th century via Medical Latin from Greek therapeía (“care, attendance, medical treatment”).\nTransparency: international medical term.',
        evidence: '18th century from Gk. therapeía (“care, service, treatment”).'
      }
    },
    'b1-health-operation': {
      note: 'The verb is most often used in the passive: “Ich werde am Knie operiert” — I’m having knee surgery. Colloquially shortened to “die OP” (pronounced “oh-peh”). Also denotes a military or police operation.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Operationen).\nOrigin: from Latin operātio (“action, work, labour”, from opus “work”). In the 16th–17th centuries the term became established for surgical procedures, and later also for military or financial operations.\nTransparency: international term.',
        evidence: 'From Lat. operātio (“action, work”, from operārī / opus); surgical meaning since the 16th–17th centuries.'
      }
    },
    'b1-health-station': {
      note: 'In a hospital: “auf Station liegen” (without an article). “Stationär” — inpatient; “ambulant” — outpatient (home the same day). “Die Intensivstation” — intensive care unit (ICU).',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Stationen).\nOrigin: from Latin statio (“standing, post, station”, from stāre “to stand”). From the idea of a “standing post / stopping place” branched out both “public transport station/stop” and “hospital ward” (a nursing post for patients).\nTransparency: shares its Latin root with English “station”, though the hospital sense “ward” should be noted.',
        evidence: 'From Lat. statio (“standing, post, stopping place”, from stāre); in a hospital — “ward, nursing unit”.'
      },
      meaningExplanation: 'In a hospital die Station means a ward (surgery, intensive care), whereas in town it means a train/underground station or stop.',
      meaningExamples: [
        'She is on Ward 3.',
        'to get off at the next station'
      ],
      senses: [
        'hospital ward',
        'station, stop'
      ]
    },
    'b1-health-klinik': {
      note: 'Often a synonym of Krankenhaus, especially for specialised and university hospitals (“Uniklinik”). A small private doctor’s office in German is a Praxis rather than a Klinik.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Kliniken).\nOrigin: borrowed in the 18th century via French clinique from Greek klinikḗ (téchnē) — literally “the art of healing at the sickbed” (from klínē “couch, bed”).\nTransparency: international term.',
        evidence: 'Via Fr. clinique (18th century) < Gk. klinikḗ (from klínē “couch, bed”).'
      }
    },
    'b1-health-patient': {
      note: 'Weak masculine noun (n-declension)! Takes -en in all cases except the nominative singular: den / dem / des Patienten. Feminine form: die Patientin. “Die Patientenakte” — medical record.',
      why: {
        text: 'Composition: uncompounded borrowing (n-declension).\nOrigin: borrowed in the 16th century from Latin patiēns (“enduring, suffering”, participle of patī “to suffer, endure”). The English adjective patient comes from the same Latin root.\nTransparency: international term.',
        evidence: 'Borrowed in the 16th century from Lat. patiēns (“suffering, enduring”, from patī).'
      }
    },
    'b1-health-krankenpfleger': {
      note: '“Krankenschwester” is the traditional word for a female nurse and is still common in everyday speech. Officially the profession is now called “Pflegefachfrau / Pflegefachmann”. “Die Visite” — doctors’ ward round.',
      why: {
        text: 'Composition: die Kranken (“sick people”) + der Pfleger (“carer”, from pflegen + -er).\nOrigin: in Old High German the verb pflegen (pflegan) meant “to take care of, vouch for, tend”. The compound Krankenpfleger literally means “one who cares for the sick”.\nTransparency: completely transparent compound.',
        evidence: 'Kranken + Pfleger (from pflegen < OHG pflegan “to care for, tend”).'
      },
      parts: ['die Kranken — sick people', 'stem of pflegen — to care for, nurse', 'agent suffix (“person who does”)']
    },
    'b1-health-versichertenkarte': {
      note: 'The very first question at any doctor’s reception desk. Also called “Gesundheitskarte” or “Krankenkassenkarte”. You need to show it once a quarter.',
      why: {
        text: 'Composition: der/die Versicherte (“insured person”, from versichern) + die Karte (“card”).\nOrigin: versichern (“to make secure, to insure”) is formed from sicher (< Latin sēcūrus “safe, secure”); die Karte was borrowed via French carte from Latin charta (“sheet of papyrus or paper”).\nTransparency: completely transparent compound.',
        evidence: 'Versicherte (from versichern < sicher < Lat. sēcūrus) + Karte (< Fr. carte < Lat. charta).'
      },
      parts: ['der/die Versicherte — insured person', 'die Karte — card']
    },
    'b1-health-altenheim': {
      note: 'Neuter because of “das Heim”. Nowadays people more often say “das Seniorenheim” or “das Pflegeheim” (with nursing care); “Altenheim” sounds slightly dated, though everyone understands it.',
      why: {
        text: 'Composition: die Alten (“elderly people”) + das Heim (“home”).\nOrigin: das Heim is an ancient Common Germanic word (“dwelling, home”, cognate with English home); in 20th-century compounds (Altenheim, Studentenwohnheim, Pflegeheim) it often denotes a residential institution.\nTransparency: completely transparent compound.',
        evidence: 'Alten + das Heim (< OHG heim “dwelling, home”, cognate with Eng. home).'
      },
      parts: ['die Alten — elderly people', 'das Heim — home, residence']
    },
    'b1-health-ergebnis': {
      note: 'In the plural the s is doubled: die Ergebnisse. Common both at the doctor’s and in IT reports: “das Ergebnis liegt vor” (the result is in), “zu einem Ergebnis kommen” (to reach a result).',
      why: {
        text: 'Composition: from the verb ergeben (er- + geben) + suffix -nis.\nOrigin: formed in the 18th century from reflexive “sich ergeben” (“to follow, turn out as an outcome”); became established as the native German equivalent of Latin Resultat.\nTransparency: figurative — the root geben is visible, and the meaning is clear via ergeben (“to yield a result”).',
        evidence: '18th-century formation from (sich) ergeben (“to follow, result”) + suffix -nis.'
      },
      parts: ['achieving an outcome (sich ergeben — to result)', 'stem of geben — to give', 'noun suffix (das or die)']
    },
    'b1-health-temperatur': {
      note: '“Temperatur haben / erhöhte Temperatur” — a slight temperature (subfebrile). From roughly 38 °C upwards Germans call it “Fieber”. To take one’s temperature: “Fieber / Temperatur messen”.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Temperaturen).\nOrigin: from Latin temperātūra (“due mixture, proper proportion”, from temperāre “to mix in due proportion”); became established in physics and medicine from the 17th century as “degree of heat”.\nTransparency: international term.',
        evidence: 'From Lat. temperātūra (“proper measure, mixture”); physical sense “degree of heat” since the 17th century.'
      }
    },
    'b1-health-medizin': {
      note: 'As an academic subject: “Medizin studieren”. In the sense of “medication” it is colloquial; the standard medical term is “das Medikament” (pl. Medikamente).',
      why: {
        text: 'Composition: uncompounded borrowing.\nOrigin: from Latin (ars) medicīna (“the art of healing, and also a healing remedy”, from medicus “physician”). Like English medicine, German preserves both senses: the science and (colloquially) medication.\nTransparency: international term.',
        evidence: 'From Lat. medicīna (“healing art; remedy”, from medicus).'
      },
      meaningExplanation: 'Its primary meaning is the field of “medical science”, but in everyday conversation die Medizin also frequently means “medicine, medication”.',
      meaningExamples: [
        'She is studying medicine.',
        'Have you taken your medicine? (colloq.)'
      ],
      senses: [
        'medicine (science)',
        'medicine, medication (colloq.)'
      ]
    },
    'b1-health-zustand': {
      note: 'Of health: “Sein Zustand hat sich verbessert / verschlechtert”. Of objects: “Das Auto ist in gutem Zustand”. The plural “Zustände” often carries a negative tone: “Das sind ja Zustände hier!” — what a state of affairs / what chaos!',
      why: {
        text: 'Composition: prefix Zu- + der Stand (“standing, state”, from stehen “to stand”).\nOrigin: became established in the 17th century as the German equivalent of Latin status (“state of affairs, condition”, from stāre “to stand”).\nTransparency: figurative — the root Stand/stehen is easy to recognise.',
        evidence: '17th-century formation (zu + Stand, from stehen) as a German equivalent of Lat. status.'
      },
      parts: ['prefix', 'der Stand — standing, position (from stehen — to stand)']
    },
    'b1-health-krankheit': {
      note: '“An einer Krankheit leiden” (dative) — to suffer from an illness. “Chronisch” — chronic, “ansteckend” — contagious. Nouns ending in -heit / -keit are always feminine.',
      why: {
        text: 'Composition: adjective krank (“sick, ill”) + suffix -heit.\nOrigin: the suffix -heit (originally an independent OHG noun heit “state, nature, rank”, cognate with English -hood) turns adjectives into feminine abstract nouns. The older meaning of krank was “weak, feeble”.\nTransparency: completely transparent formation.',
        evidence: 'krank + suffix -heit (< OHG heit “state, manner”).'
      },
      parts: ['sick, ill', 'adjective → noun, always die']
    },
    'b1-health-grippe': {
      note: 'Feminine in German: die Grippe. “Die Grippewelle” — flu wave / epidemic. On a sick note doctors often write “grippaler Infekt” — that is simply a heavy cold (flu-like infection), not actual influenza.',
      why: {
        text: 'Composition: uncompounded borrowing (feminine in German: die Grippe).\nOrigin: borrowed in the second half of the 18th century from French grippe. The further origin of the French word is debated (connected either with French gripper “to seize” or with Russian khrip “hoarseness”).\nTransparency: international term.',
        evidence: 'Borrowed in the 18th century from Fr. grippe; further etymology of the French word is disputed.'
      }
    },
    'b1-health-schnupfen': {
      note: 'Usually used without an article: “Ich habe Schnupfen”. Typical phrases: “Meine Nase läuft” — my nose is running; “Meine Nase ist zu” — my nose is blocked.',
      why: {
        text: 'Composition: noun der Schnupfen (alongside the verb schnupfen “to sniff, draw up through the nose”).\nOrigin: from Middle High German snupfen (“to draw air through the nose, snuffle, sniff”, cognate with English snuff/sniffle) — an expressive formation naming the main symptom of a head cold.\nTransparency: the connection to “sniffing” is visible through the verb schnupfen.',
        evidence: 'From MHG snupfen (“to draw air through the nose, snuffle”), an expressive-onomatopoeic formation.'
      }
    },
    'b1-health-husten': {
      note: 'Used without an article in “Ich habe Husten”. The verb is identical: “husten” (hustet, hustete, hat gehustet). “Der Hustensaft” — cough syrup.',
      why: {
        text: 'Composition: the noun der Husten and the verb husten share the same stem.\nOrigin: Old High German huosto goes back to an Indo-European onomatopoeic root *kʷās- imitating the sound of coughing.\nTransparency: basic root.',
        evidence: 'OHG huosto < IE onomatopoeic *kʷās-.'
      }
    },
    'b1-health-infektion': {
      note: 'Used both in medicine and in IT: “Der Rechner ist infiziert”. In everyday speech “to catch an infection (from someone)” is “sich anstecken (bei jdm.)”. “Die Entzündung” — inflammation.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Infektionen).\nOrigin: from Late Latin īnfectio (“dyeing, staining, tainting”, from īnficere “to steep, taint, infect”). Established in medicine for contagion, and transferred to computer security in the late 20th century.\nTransparency: international term.',
        evidence: 'From Late Lat. īnfectio (“steeping, infection”, from īnficere).'
      }
    },
    'b1-health-virus': {
      note: 'Both genders occur: in the Goethe word list and everyday speech — “der Virus”; in medical usage and Duden — “das Virus”. Both are accepted as correct. Plural: die Viren.',
      why: {
        text: 'Composition: Latin borrowing (plural die Viren).\nOrigin: Latin vīrus meant “slime, plant juice, poison”. In the 19th century the word was adopted into biology for infectious agents, and in the 1980s transferred to IT for self-replicating malicious code.\nTransparency: international term.',
        evidence: 'From Lat. vīrus (“slime, poison”); biological sense since the 19th century, computing sense since the 1980s.'
      }
    },
    'b1-health-haut': {
      note: '“Der Hautarzt” — dermatologist. “Der Ausschlag” — rash. Idiom: “Ich fühle mich nicht wohl in meiner Haut” — I feel uneasy / uncomfortable. The plural “Häute” is rare (used mainly for animal hides/skins).',
      why: {
        text: 'Composition: uncompounded stem (plural die Häute).\nOrigin: a Common Germanic word (OHG hūt, cognate with English hide “animal skin”), going back to an Indo-European root meaning “to cover” (whence also Latin cutis “skin”).\nTransparency: basic root.',
        evidence: 'OHG hūt < Gmc. *hūdiz “skin, hide” (cognate with Eng. hide and Lat. cutis).'
      }
    },
    'b1-health-knochen': {
      note: '“Der Knochenbruch” — bone fracture. Plural unchanged: die Knochen. Colloquially: “Ich bin bis auf die Knochen nass” — I’m soaked to the bone.',
      why: {
        text: 'Composition: uncompounded noun (plural die Knochen).\nOrigin: Middle High German knoche is related to Knöchel (“ankle, knuckle”, cognate with English knuckle) and gradually replaced the older German word das Bein in the sense of “bone”.\nTransparency: basic root.',
        evidence: 'MHG knoche, related to Knöchel (cognate with Eng. knuckle).'
      }
    },
    'b1-health-magen': {
      note: '“Der Magen” is the internal organ (stomach); “der Bauch” is the belly/tummy as a whole. “Magenschmerzen” — stomach ache; “Magen-Darm” — stomach bug (gastroenteritis). Plural: Mägen (also Magen).',
      why: {
        text: 'Composition: uncompounded noun (plural die Mägen).\nOrigin: a Common Germanic word for the stomach (OHG mago, cognate with dialectal English maw).\nTransparency: basic root.',
        evidence: 'OHG mago < Gmc. *magōn- “stomach” (cognate with Eng. maw).'
      }
    },
    'b1-health-herz': {
      note: 'Irregular declension: das Herz, des Herzens, dem Herzen, das Herz (acc.). “Der Herzinfarkt” — heart attack. “Herzlich” — warm, cordial (“Herzliche Grüße”).',
      why: {
        text: 'Composition: uncompounded stem (irregular declension: des Herzens, dem Herzen).\nOrigin: Old High German herza (cognate with English heart) goes back to the Indo-European root *ḱḗr(d)- (“heart”), from which Latin cor, cordis and Greek kardía also derive.\nTransparency: basic root.',
        evidence: 'OHG herza < Gmc. *hertōn- < IE *ḱḗr(d)- (cognate with Eng. heart and Lat. cor).'
      }
    },
    'b1-health-koerper': {
      note: 'Adjective “körperlich” — physical (“körperlich anstrengend”). Legal term: “die Körperverletzung” — bodily harm / assault. Plural unchanged: die Körper.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Körper).\nOrigin: borrowed in the 13th century from Latin corpus (“body”, oblique stem corpor-; whence English corpse, corps, corporation). It gradually displaced native German der Leib in neutral speech.\nTransparency: the link to Latin corpus is clearly visible.',
        evidence: 'MHG korper (13th century) < Lat. corpus (corpor- “body”).'
      }
    },
    'b1-health-atem': {
      note: '“Außer Atem sein” — to be out of breath. “Den Atem anhalten” — to hold one’s breath. “Die Atemnot” — shortness of breath (an important symptom to mention to a doctor!).',
      why: {
        text: 'Composition: uncompounded stem (alongside the verb atmen “to breathe”).\nOrigin: Old High German ātum (“breath, spirit”) goes back to the Indo-European stem *ētmén- (cognate with Sanskrit ātmán- “breath, soul”).\nTransparency: basic root.',
        evidence: 'OHG ātum < Gmc. *ēþmaz < IE *ētmén- (cognate with Skt. ātmán-).'
      }
    },
    'b1-health-gesundheit': {
      note: 'When someone sneezes — “Gesundheit!”, answered with “Danke!”. “Aus gesundheitlichen Gründen” — for health reasons (polite and discreet — very handy for work emails).',
      why: {
        text: 'Composition: adjective gesund (“healthy”) + suffix -heit.\nOrigin: gesund (OHG gisunt, cognate with English sound in “safe and sound”) originally meant “strong, unharmed”.\nTransparency: completely transparent formation.',
        evidence: 'gesund (< OHG gisunt “unharmed, strong”, cognate with Eng. sound) + -heit.'
      },
      meaningExplanation: 'The noun Gesundheit means “health”, and is also used on its own as the polite exclamation “Bless you!” when someone sneezes.',
      meaningExamples: [
        'Health is the most important thing.',
        'Achoo! — Bless you!'
      ],
      senses: [
        'health',
        '“Bless you!”'
      ],
      parts: ['healthy', 'adjective → noun, always die']
    },
    'b1-health-ernaehrung': {
      note: '“Die Ernährung” — how a person eats in general (diet/nutrition); “die Diät” — a special medical diet or weight-loss diet. Verb: “sich gesund ernähren” — to eat healthily.',
      why: {
        text: 'Composition: from the verb ernähren (er- + nähren “to nourish”) + -ung.\nOrigin: the verb nähren (OHG nerien) originally meant “to save, keep alive” (causative of genesen “to survive, recover”), from which developed the meaning “to sustain life with food → to feed, nourish”.\nTransparency: transparent via modern nähren and die Nahrung (“food, nourishment”).',
        evidence: 'nähren < OHG nerien “to save, keep alive” (causative of genesen) → “to nourish, feed”.'
      },
      parts: ['achieving a result', 'stem of nähren — to feed, nourish', 'verb → noun, always die']
    },
    'b1-health-diaet': {
      note: '“Eine Diät machen” — to be on a diet. Fun fact: in the plural, “die Diäten” also denotes the parliamentary allowance paid to MPs.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Diäten).\nOrigin: “diet” (regimen of food) was borrowed via Latin from Greek díaita (“way of life, regimen”). The homonym die Diäten (“MPs’ daily allowance/remuneration”) is historically a separate word, from Medieval Latin diēta (“daily pay”, from diēs “day”).\nTransparency: international term.',
        evidence: 'Diät “dietary regimen” < Gk. díaita; Diäten “parliamentary allowance” is a separate homonym from Med. Lat. diēta (< diēs “day”).'
      }
    },
    'b1-health-gewicht': {
      note: 'Neuter. “Das Übergewicht” — excess weight / being overweight. “Ich wiege 80 Kilo” (wiegen, wog, gewogen). “Wichtig” (important) comes from the same root: that which carries weight.',
      why: {
        text: 'Composition: prefix Ge- + stem -wicht (related to the verb wiegen / wägen “to weigh”).\nOrigin: Middle High German gewiht was formed from wegen/wiegen (“to weigh”, cognate with English weight). The adjective wichtig comes from the same base — literally “having weight → weighty, important”.\nTransparency: figurative — the g/ch alternation makes the link to wiegen less obvious at first glance.',
        evidence: 'MHG gewiht (from wiegen/wägen “to weigh”); from the same base comes wichtig (“weighty → important”).'
      },
      meaningExplanation: 'Alongside the physical weight of a body or object, das Gewicht is often used figuratively for the “weight” or importance of an argument or opinion.',
      meaningExamples: [
        'to check one’s weight (literal)',
        'His opinion carries great weight (figurative).'
      ],
      senses: [
        'weight (body mass)',
        'weight, importance (fig.)'
      ],
      parts: ['nominal prefix', 'from wiegen / wägen — to weigh']
    },
    'b1-health-vitamin': {
      note: 'Neuter: das Vitamin. Stress on the final syllable: Vita-MIN. Humorous idiom: “Vitamin B” — personal connections / strings pulled (B = Beziehungen): “Den Job hat er nur durch Vitamin B bekommen”.',
      why: {
        text: 'Composition: scientific term (Latin vīta + Amin).\nOrigin: coined in 1912 by the biochemist Casimir Funk (English vitamine) from Latin vīta (“life”) and the chemical term amine, because the first such substances he identified were thought to be amines.\nTransparency: international scientific term.',
        evidence: 'Coined by C. Funk in 1912 from Lat. vīta (“life”) + amine.'
      }
    },
    'b1-health-stress': {
      note: '“Stress haben”, “gestresst sein”, “Das ist stressig”. “Mach dir keinen Stress!” — don’t stress / take your time. “Stress mit jdm. haben” — to have trouble/hassle with someone.',
      why: {
        text: 'Composition: uncompounded borrowing from English.\nOrigin: borrowed in the mid-20th century from English stress (“pressure, strain”, popularised in medicine by Hans Selye). The English word itself is a shortening of distress (from Old French destrece < Latin distringere “to draw tight, strain”).\nTransparency: international term.',
        evidence: 'Borrowed in the 20th century from Eng. stress (< distress < OFr. destrece < Lat. distringere).'
      }
    },
    'b1-health-sucht': {
      note: 'Not from “suchen” (to look for), despite the resemblance: it is related to archaic “siech” (sick). “Süchtig nach + dat.” — addicted to. The same element appears in “Eifersucht” (jealousy) and “Sehnsucht” (longing).',
      why: {
        text: 'Composition: uncompounded noun (plural die Süchte).\nOrigin: despite the surface similarity, Sucht does NOT come from suchen (“to seek”). Old High German suht meant “illness, disease” and is related to archaic siech (“sick”, cognate with English sick). From “sickness” developed the sense “morbid craving, addiction” (cf. Eifersucht “jealousy”, Sehnsucht “longing”).\nTransparency: opaque — the resemblance to suchen is deceptive.',
        evidence: 'OHG suht “sickness, disease”, related to siech (“sick”, Eng. sick); etymologically unrelated to the verb suchen.'
      }
    },
    'b1-health-droge': {
      note: 'Refers to illicit/recreational drugs! Medical drugs/medication are “ein Medikament”. And “die Drogerie” (dm, Rossmann) sells toiletries, cosmetics and household goods — neither illicit drugs nor prescription medicines, for which you go to “die Apotheke”.',
      why: {
        text: 'Composition: uncompounded borrowing (plural die Drogen).\nOrigin: borrowed in the 17th century from French drogue, which goes back to Middle Dutch droge (vate) — literally “dry (barrels / wares)”, i.e. dried spices and medicinal herbs. In the second half of the 20th century German Droge narrowed to “narcotic / illicit drug”, while die Drogerie kept the older commercial meaning.\nTransparency: explains why a German Drogerie (dm, Rossmann) sells toiletries rather than drugs.',
        evidence: 'Via Fr. drogue < MDu. droge (vate) “dry goods, herbs”; narrowed to “narcotic” in the 20th century.'
      }
    },
    'b1-health-nichtraucher': {
      note: 'After “sein”, roles take no article: “Ich bin Nichtraucher”. Feminine form: Nichtraucherin. “Mit dem Rauchen aufhören” — to quit smoking.',
      why: {
        text: 'Composition: negation nicht + der Raucher (from rauchen “to smoke” + -er).\nOrigin: rauchen is formed from der Rauch (“smoke”); the meaning “to smoke tobacco” became established in the 17th century (at first people said Tabak trinken — literally “to drink tobacco”!).\nTransparency: completely transparent compound.',
        evidence: 'rauchen (from Rauch “smoke”); meaning “to smoke tobacco” since the 17th century; Nichtraucher is a 19th–20th-century compound.'
      },
      parts: ['non-, not', 'stem of rauchen — to smoke', 'agent suffix (“person who does”)']
    },
    'b1-health-schwangerschaft': {
      note: 'At work: “der Mutterschutz” — statutory maternity protection (roughly 6 weeks before and 8 weeks after childbirth), “die Elternzeit” — parental leave (available to both parents).',
      why: {
        text: 'Composition: adjective schwanger (“pregnant”) + abstract noun suffix -schaft (always die).\nOrigin: formed from schwanger with the productive suffix -schaft denoting a state or condition.\nTransparency: completely transparent formation.',
        evidence: 'schwanger + suffix -schaft.'
      },
      parts: ['pregnant', 'noun suffix, always die']
    },
    'b1-health-geburt': {
      note: '“Ich bin 1990 geboren” (from “gebären” — to give birth). Documents: “die Geburtsurkunde” — birth certificate, “der Geburtsort” — place of birth. On a card: “Herzlichen Glückwunsch zur Geburt!”',
      why: {
        text: 'Composition: noun die Geburt (alongside the verb gebären “to give birth”, participle geboren).\nOrigin: Old High German giburt was formed from the verb beran (“to carry, bear”, cognate with English bear and birth), from the Indo-European root *bʰer- (“to carry, bear”).\nTransparency: the link to geboren is clearly visible.',
        evidence: 'OHG giburt from beran (“to carry, give birth”) < IE *bʰer- (cognate with Eng. bear / birth).'
      },
      meaningExplanation: 'The noun die Geburt denotes both the event of coming into the world (“birth”) and the medical process of delivery (“childbirth, labour”).',
      meaningExamples: [
        'Congratulations on the birth of your baby!',
        'The delivery lasted six hours.'
      ],
      senses: [
        'birth',
        'childbirth, delivery'
      ]
    },
    'b1-health-tod': {
      note: 'Spelling: “der Tod” (noun, with d), “tot” (adjective, with t): “Er ist tot”. Condolences: “Mein herzliches Beileid”. Colloquially: “todmüde” — dead tired.',
      why: {
        text: 'Composition: uncompounded noun der Tod (alongside the adjective tot “dead”).\nOrigin: a Common Germanic noun (OHG tōd, cognate with English death), formed from the same root as the adjective tot (English dead). The spelling difference d/t became fixed to distinguish the parts of speech.\nTransparency: basic root.',
        evidence: 'OHG tōd < Gmc. *dauþuz (cognate with Eng. death), alongside the adjective tot (< *daudaz, Eng. dead).'
      }
    },
    'b1-health-ausruhen': {
      note: 'Separable and reflexive: “Ich ruhe mich aus”. Refers to a short physical rest. Longer recovery (after an illness or on holiday) is “sich erholen”. “Lass mich in Ruhe!” — leave me in peace / leave me alone!',
      why: {
        text: 'Composition: separable prefix aus- (“thoroughly, to the full”) + verb ruhen (from die Ruhe “rest, quiet”).\nOrigin: die Ruhe (OHG ruowa “rest, peace”) gave rise to the verb ruhen; with aus- it means “to rest thoroughly”.\nTransparency: completely transparent formation.',
        evidence: 'aus- (“thoroughly”) + ruhen (from OHG ruowa “rest, peace”).'
      },
      parts: ['thoroughly (separable)', 'stem of ruhen / die Ruhe — rest, quiet', 'infinitive ending']
    },
    'b1-health-erholen': {
      note: '“Sich von + dat. erholen”: von einer Krankheit, vom Stress. Noun: “die Erholung”; “Gute Erholung!” — get well soon / enjoy your rest. “Erholsam” — restful, restorative.',
      why: {
        text: 'Composition: inseparable prefix er- + stem of the verb holen (“to fetch, bring”).\nOrigin: Middle High German sich erholn meant “to make up for, recover what was lost, replenish one’s strength” (from holen “to obtain, bring back”), whence modern “to recover, recuperate, rest”.\nTransparency: opaque — from modern holen (“to go and fetch”), the meaning “to recover” cannot be guessed.',
        evidence: 'MHG sich erholn “to make up for, replenish one’s strength” (from holen) → “to recover, rest”.'
      },
      senses: [
        'to recover from an illness',
        'to rest, recharge one’s batteries'
      ],
      parts: ['achieving a result', 'stem of holen — to fetch, bring', 'infinitive ending']
    },
    'b1-health-atmen': {
      note: 'The stem ends in consonant + m, so an -e- is inserted: du atmest, er atmet, geatmet. At the doctor’s: “Tief einatmen – ausatmen”.',
      why: {
        text: 'Composition: from the noun der Atem (“breath”) + -en (the unstressed e drops in the infinitive).\nOrigin: OHG ātumōn was formed from ātum (“breath, spirit”).\nTransparency: transparent pair Atem ↔ atmen.',
        evidence: 'From OHG ātum (“breath”) → ātumōn “to breathe”.'
      }
    },
    'b1-health-bluten': {
      note: 'Inserted -e- after -t: du blutest, er blutet. At the doctor’s: “eine Blutprobe abnehmen” — to take a blood sample; “den Blutdruck messen” — to take someone’s blood pressure.',
      why: {
        text: 'Composition: stem of das Blut (“blood”) + -en.\nOrigin: Common Germanic noun Blut (OHG bluot, cognate with English blood), from which the denominative verb bluten (English bleed) is derived.\nTransparency: completely transparent connection to das Blut.',
        evidence: 'Denominative verb from das Blut (< Gmc. *blōþą, cognate with Eng. blood / bleed).'
      }
    },
    'b1-health-brechen': {
      note: 'Transitive “to break something” → haben: “Ich habe mir den Arm gebrochen” (dative reflexive + body part). Intransitive “something breaks” → sein: “Das Eis ist gebrochen”. In medicine “brechen / sich erbrechen” also means “to vomit”. Strong verb: e→i, brach, gebrochen.',
      why: {
        text: 'Composition: strong root verb brech- + -en.\nOrigin: a Common Germanic verb (OHG brehhan, cognate with English break), going back to the Indo-European root *bʰreg- (“to break”), to which Latin frangere (whence fragment, fraction) also belongs.\nTransparency: basic root (the medical sense “to vomit” developed from the image of a sudden violent expulsion).',
        evidence: 'OHG brehhan < Gmc. *brekaną (Eng. break) < IE *bʰreg- (cognate with Lat. frangere).'
      },
      meaningExplanation: 'The verb brechen combines several dictionary meanings: transitive “to break” (with haben), intransitive “to break” (with sein), and medical “to vomit, throw up”.',
      meaningExamples: [
        'He broke his arm.',
        'The child was vomiting all night.'
      ],
      senses: [
        'to break something (with haben)',
        'to break, snap (with sein)',
        'to vomit, throw up (med.)'
      ]
    },
    'b1-health-einnehmen': {
      note: 'A formal word used on package leaflets and by doctors; in everyday speech people simply say “nehmen”. “Die Einnahme” — taking (of medication); “die Einnahmen” (plural) — revenue, income. Strong verb: nimmt ein, nahm ein, eingenommen.',
      why: {
        text: 'Composition: separable prefix ein- (“in, inward”) + nehmen (“to take”).\nOrigin: literal “to take in” gave rise both to the medical sense (taking medication internally) and to the financial sense (taking money into the till → earning revenue, whence die Einnahmen).\nTransparency: figurative, though the logic of “in + take” is easy to follow.',
        evidence: 'ein- (“inward”) + nehmen (“to take”): “to take internally” and “to take in money / earn revenue”.'
      },
      meaningExplanation: 'In medicine einnehmen means “to take medication internally”, while in economics and general usage it means “to earn revenue/takings” or “to occupy a place/role”.',
      meaningExamples: [
        'to take tablets before meals',
        'The company took in more money.'
      ],
      senses: [
        'to take medication',
        'to take a course of medication',
        'to earn revenue, take in money'
      ],
      parts: ['in, inward (separable)', 'stem of nehmen — to take', 'infinitive ending']
    },
    'b1-health-leiden': {
      note: '“An + dat.” — to suffer from an illness (an Migräne leiden); “unter + dat.” — to suffer under a situation (unter der Hitze, unter Stress). “Ich kann ihn nicht leiden” — I can’t stand him. Strong verb: litt, gelitten.',
      why: {
        text: 'Composition: strong root verb leid- + -en (litt, gelitten).\nOrigin: Old High German līdan originally meant “to go, travel, pass through”, then “to endure, go through hardship” → “to suffer”. The verb leiten (“to lead, guide” — literally “to cause to go”) comes from the same root.\nTransparency: the modern meaning “to suffer” has drifted far from the ancient verb of motion.',
        evidence: 'OHG līdan “to go, pass through” → “to endure, suffer”; its causative is leiten (“to lead”).'
      },
      senses: [
        'to suffer from an illness (an + dat.)',
        'to suffer from a situation (unter + dat.)'
      ]
    },
    'b1-health-pflegen': {
      note: 'Used of people (“einen Kranken pflegen”), of things (garden, skin) and in IT: “Daten / ein System pflegen” — to maintain, keep up to date. “Gepflegt” — well-groomed, well-maintained. “Ein Pflegefall” — a person requiring long-term nursing care.',
      why: {
        text: 'Composition: root verb pfleg- + -en.\nOrigin: Old High German pflegan meant “to vouch for, bear responsibility, care for”. From “to care for and keep in good order” came both medical nursing care and the IT sense “to maintain documentation or data”.\nTransparency: both meanings are united by the idea of careful maintenance.',
        evidence: 'OHG pflegan “to vouch for, care for, tend”.'
      },
      meaningExplanation: 'In medicine and home life pflegen means “to care for / nurse a person”, while at work and in IT it means “to maintain and keep up to date” data, documentation or a system.',
      meaningExamples: [
        'to care for a sick relative',
        'to maintain the documentation cleanly'
      ],
      senses: [
        'to care for, nurse a person',
        'to maintain, keep up to date (data, documentation)'
      ]
    },
    'b1-health-abnehmen': {
      note: 'Has many meanings depending on context: to lose weight, to pick up the phone, to take off (a lid, glasses), and also “Blut abnehmen” — to take a blood sample. In IT: “die Abnahme” — acceptance testing / sign-off.',
      why: {
        text: 'Composition: separable prefix ab- (“off, down, decrease”) + nehmen (“to take”).\nOrigin: from literal “to take off from the top” developed “to lift the telephone receiver off its hook → to answer a call” and intransitive “to diminish, decrease” → “to lose weight”.\nTransparency: figurative — some senses are transparent (“to take off one’s glasses”), while “to lose weight” and “to answer the phone” are best learned through examples.',
        evidence: 'ab- + nehmen: “to take off from above” → “to pick up the receiver”; intransitive “to decrease” → “to lose weight”.'
      },
      meaningExplanation: 'abnehmen has several distinct dictionary meanings: to lose weight, to remove/take off an object, to pick up the phone, to take a blood sample, and to decrease.',
      meaningExamples: [
        'to lose five kilos',
        'to pick up the receiver',
        'to take a blood sample'
      ],
      senses: [
        'to lose weight',
        'to pick up the phone',
        'to take off (a lid, glasses)',
        'to take (a blood sample)'
      ],
      parts: ['off, down, decrease (separable)', 'stem of nehmen — to take', 'infinitive ending']
    },
    'b1-health-zunehmen': {
      note: 'Used both for body weight and for numbers: “Die Zahl der Fälle nimmt zu”. “Zunehmend” — increasingly (a very common word in reports). Opposite: abnehmen.',
      why: {
        text: 'Composition: separable prefix zu- (“addition, towards”) + nehmen (“to take”).\nOrigin: already in Middle High German zuonemen meant “to grow, increase, wax” — the direct antonym pair to abnehmen (“to wane, decrease”).\nTransparency: figurative, easily remembered as the pair abnehmen ↔ zunehmen.',
        evidence: 'MHG zuonemen “to grow, increase” (zu- + nehmen), antonym of abnehmen.'
      },
      meaningExplanation: 'zunehmen denotes both gaining body weight and an increase in the number or intensity of a phenomenon (attacks, complaints, workload).',
      meaningExamples: [
        'to put on two kilos on holiday',
        'Phishing attacks are constantly increasing.'
      ],
      senses: [
        'to gain weight',
        'to increase, grow (in number)'
      ],
      parts: ['to, addition (separable)', 'stem of nehmen — to take', 'infinitive ending']
    },
    'b1-health-schwitzen': {
      note: '“Der Schweiß” — sweat. “Verschwitzt” — sweaty. “Ich bin schweißgebadet” — I’m drenched in sweat. Night sweats (Nachtschweiß) are worth mentioning to a doctor.',
      why: {
        text: 'Composition: root verb schwitz- + -en (alongside the noun der Schweiß “sweat”).\nOrigin: from the Common Germanic root *swait- (cognate with English sweat and Latin sūdor < IE *sweyd-).\nTransparency: basic root (Schweiß ↔ schwitzen).',
        evidence: 'Related to der Schweiß (< OHG sweiz < IE *sweyd-, cognate with Eng. sweat).'
      }
    },
    'b1-health-frieren': {
      note: '“Ich friere” = “Mir ist kalt” (the second is more common in everyday speech — note the dative). Water “friert” / “ist gefroren” (with sein) — freezes into ice. Strong verb: fror, gefroren.',
      why: {
        text: 'Composition: strong verb frier- + -en (fror, gefroren).\nOrigin: OHG friosan (cognate with English freeze). The historical -s- in the root changed to -r- in the verb frieren, but survived in the related noun der Frost (“frost”).\nTransparency: basic root (frieren ↔ Frost).',
        evidence: 'OHG friosan (Eng. freeze); the s/r alternation (rhotacism) explains the pair frieren — Frost.'
      },
      senses: [
        'to feel cold (with haben)',
        'to be freezing cold (of a person)',
        'to freeze, turn to ice (with sein)'
      ]
    },
    'b1-health-sterben': {
      note: 'Perfekt with sein: “Er ist gestorben”. “An + dat.” — to die of: an Krebs, an einer Krankheit. Polite/formal: “verstorben”; “ums Leben kommen” — to lose one’s life (in an accident). Strong verb: e→i, starb, gestorben.',
      why: {
        text: 'Composition: strong root verb sterb- + -en (stirbt, starb, ist gestorben).\nOrigin: Old High German sterban goes back to a West Germanic stem meaning “to stiffen, grow rigid, die”. English starve comes from the same root (originally “to die”, later narrowed to “to die of hunger”).\nTransparency: basic root.',
        evidence: 'OHG sterban < West Gmc. *sterbaną “to stiffen, die” (cognate with Eng. starve).'
      }
    },
    'b1-health-stuerzen': {
      note: 'Stronger than “fallen”: a sudden, heavy fall. Perfekt with sein. In IT: “Das Programm ist abgestürzt” — the program crashed; “der Absturz” — crash, plunge.',
      why: {
        text: 'Composition: root verb stürz- + -en (alongside der Sturz “heavy fall, plunge”).\nOrigin: Old High German sturzen meant “to plunge, topple, fall headlong”.\nTransparency: basic root (cf. der Sturz, abstürzen).',
        evidence: 'OHG sturzen “to plunge, overturn, fall heavily”.'
      }
    },
    'b1-health-retten': {
      note: '“Jdm. das Leben retten” — to save someone’s life. “Der Rettungsdienst” — emergency medical services. In IT: “Daten retten” — to recover data. Inserted -e-: du rettest, er rettet.',
      why: {
        text: 'Composition: root verb rett- + -en.\nOrigin: Old High German retten originally meant “to snatch away (from an enemy), deliver from danger”, whence “to save, rescue”.\nTransparency: basic root (cf. die Rettung, der Rettungswagen).',
        evidence: 'OHG retten “to snatch away from danger → to rescue, save”.'
      }
    },
    'b1-health-schaden': {
      note: 'Takes the dative: “Das schadet dir / der Gesundheit”. Common phrase: “Das kann nicht schaden” — it can’t hurt. “Schade!” — what a pity!',
      why: {
        text: 'Composition: root verb schad- + -en (alongside der Schaden “harm, damage”).\nOrigin: a Common Germanic root (OHG scadōn “to harm”, scado “damage”, cognate with English unscathed). The conversational exclamation “Schade!” (“what a pity!”) comes from the same noun — literally “what a loss!”.\nTransparency: basic root (Schaden, schädlich, Schadsoftware).',
        evidence: 'OHG scadōn “to harm” / scado “damage”; whence also predicative schade (“a pity”).'
      }
    },
    'b1-health-fuehlen': {
      note: 'Used directly with an adjective (no “wie”): “Ich fühle mich müde”. Without “sich”, fühlen means to feel or palpate something physically: “Ich fühle einen Knoten”. “Sich wohlfühlen” — to feel comfortable/well.',
      why: {
        text: 'Composition: root verb fühl- + -en (alongside das Gefühl “feeling”).\nOrigin: Old High German fuolen (cognate with English feel) originally referred to the physical sense of touch (“to touch, palpate”), and later shifted to inner sensation and wellbeing.\nTransparency: basic root.',
        evidence: 'OHG fuolen “to touch, perceive by touch” → “to feel” (cognate with Eng. feel).'
      }
    },
    'b1-health-erschoepft': {
      note: 'Stronger than “müde”. Colloquially: “Ich bin total kaputt / fertig”. “Die Erschöpfung” — exhaustion; chronic work-related exhaustion is also called “der Burnout” in German.',
      why: {
        text: 'Composition: past participle of erschöpfen (er- “to the end, completely” + schöpfen “to ladle, draw water”).\nOrigin: literally “ladled/drawn dry to the bottom” — whence the figurative sense “having drained all one’s strength, exhausted”.\nTransparency: figurative; the image of being “drained dry” is easy to remember.',
        evidence: 'er- + schöpfen (“to draw water, ladle”): literally “to drain to the bottom” → “to exhaust one’s strength”.'
      },
      meaningExplanation: 'Past participle of erschöpfen (literally “to scoop/draw dry to the bottom”, from schöpfen — to ladle): figuratively describes someone whose strength has been completely drained.',
      meaningExamples: [
        'After the night shift I was completely exhausted.',
        'our resources are exhausted'
      ],
      parts: ['to the end, exhaustion', 'stem of schöpfen — to draw, ladle', 'participle ending']
    },
    'b1-health-blass': {
      note: 'Comparison: blass, blasser / blässer, am blassesten. “Bleich” is even stronger (“white as a sheet”). Figuratively: “keine blasse Ahnung haben” — not to have the faintest idea.',
      why: {
        text: 'Composition: uncompounded adjective.\nOrigin: Old High German blas originally meant “whitish, shining, pale” (originally used of animals with a white blaze on the forehead).\nTransparency: basic root.',
        evidence: 'OHG blas “whitish, pale”.'
      }
    },
    'b1-health-schwanger': {
      note: 'A standard question at the doctor’s and on medication leaflets. “Im ... Monat schwanger sein”; a gentler phrasing is “ein Kind erwarten” (to be expecting a child).',
      why: {
        text: 'Composition: uncompounded adjective.\nOrigin: Old High German swangar originally meant “heavy, moving heavily with a burden” and specialised early to “pregnant”.\nTransparency: basic root (cf. die Schwangerschaft).',
        evidence: 'OHG swangar “heavy, pregnant”.'
      }
    },
    'b1-health-koerperlich': {
      note: 'Contrasts: “psychisch” — psychological/mental, “geistig” — intellectual/mental. “Körperliche Arbeit” — physical labour.',
      why: {
        text: 'Composition: noun der Körper (“body”) + adjective suffix -lich.\nOrigin: formed in the 16th century from Körper (borrowed in the 13th century from Latin corpus “body”) to denote anything relating to the body.\nTransparency: completely transparent formation.',
        evidence: 'Körper (< Lat. corpus) + suffix -lich (since the 16th century).'
      },
      parts: ['der Körper — body', 'adjective suffix']
    },
    'b1-health-nervoes': {
      note: '“Du nervst!” / “Das nervt!” — you’re getting on my nerves / that’s annoying (very common in everyday speech). “Die Nerven verlieren” — to lose one’s nerve / temper.',
      why: {
        text: 'Composition: borrowed adjective (stem Nerv + Romance suffix -ös).\nOrigin: entered German in the 18th century from French nerveux / Latin nervōsus (from nervus “sinew, tendon, nerve”). It first meant “sinewy, vigorous”, and in the 19th century became established in the sense “anxious, nervous”.\nTransparency: international root.',
        evidence: '18th century from Fr. nerveux / Lat. nervōsus (< nervus “sinew, nerve”); psychological sense since the 19th century.'
      }
    },
    'b1-health-schwach': {
      note: 'Comparison with umlaut: schwach, schwächer, am schwächsten. “Eine Schwäche für etw. haben” — to have a weakness / soft spot for something. In IT: “ein schwaches Passwort”, “die Schwachstelle” (vulnerability).',
      why: {
        text: 'Composition: root adjective (comparative with umlaut: schwächer).\nOrigin: Middle High German swach meant “insignificant, poor, powerless”, and gradually became established as the main antonym of stark (“strong”).\nTransparency: basic root (die Schwäche, die Schwachstelle).',
        evidence: 'MHG swach “insignificant, feeble, weak”.'
      }
    },
    'b1-health-schaedlich': {
      note: '“Schädlich für + acc.”. Compounds: “gesundheitsschädlich” (harmful to health), “umweltschädlich” (harmful to the environment). “Unschädlich” — harmless.',
      why: {
        text: 'Composition: stem of der Schaden (“harm, damage”, with umlaut) + adjective suffix -lich.\nOrigin: Middle High German schedelich was formed from schaden (“harm, damage”) — literally “bringing damage”.\nTransparency: completely transparent formation.',
        evidence: 'MHG schedelich, derived from Schaden (“harm, damage”) + -lich.'
      },
      parts: ['der Schaden — harm, damage (with umlaut)', 'adjective suffix']
    },
    'b1-health-abhaengig': {
      note: '“Von + dat.”: von Drogen, vom Wetter. In conversation people more often use the verb: “Das hängt davon ab, ob …” — that depends on whether … “Unabhängig” — independent. In IT: “die Abhängigkeiten” — dependencies.',
      why: {
        text: 'Composition: from the verb abhängen (ab- “down, from” + hängen “to hang”) + -ig.\nOrigin: the 18th-century figurative meaning “to depend” is a calque of Latin dēpendere (dē- “down” + pendere “to hang”, whence English depend).\nTransparency: figurative — the root hängen is clearly visible, and the metaphor of “hanging from something” is easy to grasp.',
        evidence: 'ab- + hängen; in its figurative sense (18th century) modelled as a calque on Lat. dēpendere (“to hang down” → “to depend”).'
      },
      parts: ['from, down', 'stem of hängen — to hang', 'adjective suffix']
    },
    'b1-health-vorsichtig': {
      note: 'Literally “looking ahead”. Warning sign: “Vorsicht!” — caution / watch out! “Vorsicht, Stufe!” — mind the step.',
      why: {
        text: 'Composition: from die Vorsicht (vor- “ahead, beforehand” + Sicht from sehen “to see, look”) + -ig.\nOrigin: Middle High German vorsiht (“foresight, circumspection”) — literally “looking ahead” (cf. Latin prōvidentia).\nTransparency: figurative, with both parts clearly readable.',
        evidence: 'From die Vorsicht (vor- + Sicht from sehen): “looking ahead, foresight” → “careful, cautious”.'
      },
      parts: ['ahead, beforehand', 'die Sicht — view, sight (from sehen)', 'adjective suffix']
    },
    'b1-health-fit': {
      note: 'Borrowed from English, but in German it also means “recovered / back on one’s feet”: “Ich bin wieder fit”. “Sich fit halten” — to keep fit. “Das Fitnessstudio” — gym (spelled with three s’s in a row).',
      why: {
        text: 'Composition: uncompounded borrowing from English.\nOrigin: entered German in the early 20th century from English sports terminology (fit “well-suited, in good physical condition for competition”), and later broadened to everyday “alert, recovered, back on one’s feet”.\nTransparency: loanword.',
        evidence: 'Borrowed in the early 20th century from Eng. fit (sports usage: “in good shape”).'
      },
      meaningExplanation: 'A short everyday adjective: in spoken German people use fit not only for sports, but also in the sense of “recovered from illness, alert, ready for work”.',
      meaningExamples: [
        'Are you feeling better / back on your feet again?',
        'I’m not quite at my best today.'
      ],
      senses: [
        'in good physical shape',
        'recovered, back on one’s feet'
      ]
    }
  }, {
    // Topic scenarios · Words (B1 + B2)
    'words.everyday': { scenario: 'a chat with a neighbour on the stairs about the past week, plans, and errands that still need to get done. You are the neighbour.' },
    'words.people': { scenario: 'a birthday party where I am meeting a friend’s family for the first time. You are my friend’s talkative aunt.' },
    'words.home': { scenario: 'a flat viewing (Wohnungsbesichtigung). You are the landlord; I ask questions about the rent, utility costs (Nebenkosten), and the tenancy agreement.' },
    'words.food': { scenario: 'I return a faulty item to a shop and then order a meal in a restaurant. You play the shop assistant first, and then the waiter.' },
    'words.health': { scenario: 'an appointment with a GP (Hausarzt). You are the doctor; I am a patient with symptoms and need a sick note (Krankschreibung) for work.' },
    'words.work': { scenario: 'a job interview at a German IT security company. You are the team lead conducting the interview.' },
    'words.authorities': { scenario: 'an appointment at the citizens’ office (Bürgeramt) or at a bank. You are the clerk; I need to register or apply for something and explain my situation.' },
    'words.travel': { scenario: 'my train has been cancelled and I go to the Deutsche Bahn service desk. You are the DB staff member.' },
    'words.leisure': { scenario: 'planning the weekend with a friend: cinema, concert, or sports. You are a friend with different preferences.' },
    'words.society': { scenario: 'a lunchtime discussion with a colleague about a current topic (environment, education, or digitalisation). You are a colleague with a different opinion.' },
    'it.b2_beruf': { scenario: 'a career consultation (Karriereberatung). You are the coach; I talk about my background, wanting to grow in cybersecurity, and a possible salary negotiation.' },
    'it.b2_arbeitswelt': { scenario: 'a negotiation about the team’s hybrid schedule. You are the HR manager. I propose rules for on-site days and availability after hours. Ask me to weigh the interests of the team and the business and propose a compromise.' },
    'words.b2_psyche': { scenario: 'a conversation with a friend after a demanding week at work. I explain what is creating pressure and compare two ways to recover. Ask me to name one boundary I could discuss with my team.' },
    'words.b2_medien': { scenario: 'an interview about a widely shared post with a doubtful source. You are a journalist. Ask me to assess its credibility, explain what evidence is still missing and suggest how the newsroom could correct the post.' },
    'words.b2_umwelt': { scenario: 'a neighbourhood residents’ meeting. You chair a discussion about two proposals for the community centre, insulating the building and introducing reusable packaging in the café. Ask me to compare the impact of the proposals and explain which to put first.' },
    'words.b2_wirtschaft': { scenario: 'a conversation about buying a home printer. You are a consumer adviser. I compare the price, supplies and repairs for two models. Ask me which makes more financial sense in the long term and why.' },
    'words.b2_gesellschaft': { scenario: 'an open meeting about the future of the neighbourhood centre. You represent the city. I explain whose interests should be considered and propose ways to involve residents and negotiate how to use the space.' },
    'words.b2_bildung': { scenario: 'an advisory session on two continuing education programmes. I compare the admission requirements, workload and options for receiving credit for previous study. Ask me to choose one programme and state a specific learning goal.' },
    'words.b2_wohnen': { scenario: 'a conversation with my landlord: the utility statement demands a large extra payment, and the building is about to be renovated with a rent increase. You are the landlord. Ask me to explain what I disagree with and to negotiate a solution.' },
    'words.b2_beziehungen': { scenario: 'a conversation with a close friend after an argument caused by a misunderstanding. You are that friend and feel a little hurt. Ask me to explain my side, admit my part of the blame and suggest how we can make up.' },
    'words.b2_wissenschaft': { scenario: 'a lunchtime discussion with a colleague about a science news story on artificial intelligence. You are a sceptical colleague. Ask me to summarise the study’s findings, assess their impact on everyday life and name one ethical risk.' },
    'words.b2_gesundheit': { scenario: 'an appointment with a specialist. You are the doctor. I describe chronic symptoms and ask about the side effects of a medication. Ask me to describe the symptoms precisely and agree on next steps, including a sick note.' },
    'words.b2_reisen': { scenario: 'a service desk at the station: my train has been cancelled because of a line closure and I will miss my connection. You are the staff member. Ask me to explain the situation, choose an alternative route and find out about compensation.' },
    'words.b2_kultur': { scenario: 'a conversation with a friend after a theatre premiere. You are the friend who didn’t like the production. Ask me to describe the performance, disagree with reasons and tell you about what I do in my free time.' },
    'words.b2_recht': { scenario: 'an appointment at a free legal advice centre (Rechtsberatung). You are the adviser. I have received a fine and a letter from an authority with a short deadline. Ask me to describe the situation, find out what I am entitled to and decide whether to lodge an objection.' },

    // Topic scenarios · Professional / IT
    'it.workcomm': { scenario: 'a daily stand-up followed by a quick alignment on tasks and deadlines with a colleague from another department. You are the colleague and scrum master.' },
    'it.dev': { scenario: 'a sprint planning session / code review in a German development team. You are the product owner and developer.' },
    'it.infra': { scenario: 'an incident call during an outage: a server has gone down. You are the on-call operations colleague; we decide what to check and how to inform users.' },
    'it.security': { scenario: 'I explain a security incident to a non-technical department head. You are that manager and ask simple but persistent questions.' },
    'it.design': { scenario: 'a design review of a new website mockup and logo with the client. You are the client; I am the graphic and UX designer explaining the choice of fonts, grid and contrast.' },
    'it.ai_data': { scenario: 'a discussion about introducing an AI assistant and dashboards on the team. You are the manager asking questions about data quality, model hallucinations and metrics.' },
    'it.product': { scenario: 'discussing the product roadmap and a post-launch retrospective. You are the product manager; we align on priorities and the MVP.' },
    'it.clients': { scenario: 'a call with a prospective freelance client: we discuss the brief, estimate, revisions and deadlines. You are the client wanting to add more tasks within the original budget.' },
    'it.presentations': { scenario: 'rehearsing a project presentation for management (Q&A). You are a listener asking tricky questions about the charts and results.' },
    'it.bureau_offices': { scenario: 'an appointment at a German public office (Amt / Behörde): we discuss an official decision (Bescheid), an exception to the rules and filing an objection on time. You are the case officer.' },
    'it.bureau_tax': { scenario: 'a conversation with a tax adviser about a tax assessment notice, deductions, payroll accounting and a tax audit. You are the tax adviser.' },
    'it.bureau_docs': { scenario: 'submitting a notarised power of attorney and replying to a formal payment reminder by registered mail. You are the records clerk.' },
    'it.legal_contracts': { scenario: 'negotiating a commercial contract: we discuss liability, contractual penalties, warranty, force majeure and an out-of-court settlement. You are opposing counsel.' },
    'it.legal_ip': { scenario: 'responding to a claim over copyright infringement and software or content licensing. You are an intellectual property lawyer.' },
    'it.legal_criminal': { scenario: 'a consultation with a defence lawyer in a white-collar case: the indictment, witness statements, mitigating circumstances and sentencing. You are the lawyer.' },
    'it.legal_labour': { scenario: 'negotiating a mutual termination agreement, severance pay and a non-compete clause. You are an employment lawyer.' },
    'it.legal_corporate': { scenario: 'a compliance audit covering personal data protection, conflicts of interest and due diligence. You are the compliance officer.' },
    'it.svc_hotel': { scenario: 'an overbooking situation at the hotel reception: I offer the guest an upgrade or accommodation at a partner hotel. You are the dissatisfied guest.' },
    'it.svc_gastro': { scenario: 'serving a guest with a severe allergy and coordinating a banquet with the kitchen. You are the guest or shift supervisor.' },
    'it.svc_retail': { scenario: 'de-escalating a warranty dispute with a customer and arranging a refund or goodwill gesture. You are the dissatisfied customer.' },
    'it.fin_accounting': { scenario: 'a quarter-end close with the auditor: we discuss the balance sheet, accounts receivable, accruals and liquidity. You are the external auditor.' },
    'it.fin_marketing': { scenario: 'planning a crisis PR press release, brand positioning and the sales funnel. You are the head of PR.' },
    'it.fin_hr': { scenario: 'discussing a shortlist of candidates, a compensation package and exit-interview findings with the hiring director. You are the director.' },
    'it.med_clinical': { scenario: 'a patient handover on ward rounds and obtaining informed consent before a procedure. You are the senior consultant.' },
    'it.ops_logistics': { scenario: 'resolving a customs delay on a temperature-controlled shipment. You are the customs broker or freight forwarder.' },
    'it.ops_trades': { scenario: 'a site acceptance inspection: checking tolerances against blueprints, rectifying defects and commissioning equipment. You are the acceptance engineer.' },

    // Topic scenarios · Expressions
    'expressions.idioms': { scenario: 'an informal coffee chat with a German colleague where idioms and figurative expressions naturally come up. You are the colleague.' },
    'expressions.everyday': { scenario: 'a fast-paced workplace and everyday dialogue with colleagues in the office and in chat where natural short replies are needed. You are the colleague.' },

    // Topic scenarios · Chunks
    'chunks.opinion': { scenario: 'a discussion in which I need to express my opinion on various everyday topics. You are a curious colleague.' },
    'chunks.agree': { scenario: 'a friendly debate about which is better — working from home or working in the office. You are a colleague with the opposite view.' },
    'chunks.clarify': { scenario: 'a clerk at a public office quickly explains a complicated form to me. You are the clerk; I need to ask follow-up questions and clarify details.' },
    'chunks.complain': { scenario: 'a complaint to the property management company (Hausverwaltung) about broken heating and noise. You are the property manager.' },
    'chunks.problem': { scenario: 'a call to a customer support hotline: something I bought is not working. You are the support agent.' },
    'chunks.appointments': { scenario: 'a phone call to a doctor’s surgery to book and then reschedule an appointment. You are the receptionist.' },
    'chunks.phone': { scenario: 'a phone call to a company where I need to be put through to the right person. You play the receptionist first, and then that person.' },
    'chunks.email': { scenario: 'writing a formal email together: you give me a scenario, I draft the email, and you reply in role as the recipient.' },
    'chunks.smalltalk': { scenario: 'Monday morning small talk in the office kitchen. You are a colleague.' },
    'chunks.it_standup': { scenario: 'a daily stand-up meeting. You are the scrum master and ask follow-up questions.' },
    'chunks.it_bug': { scenario: 'I report a bug to a developer colleague. You are the developer and ask precise questions to reproduce it.' },
    'chunks.it_help': { scenario: 'I am stuck on a task and ask an experienced colleague for help. You are that colleague.' },
    'chunks.it_meeting': { scenario: 'an architecture meeting where I politely disagree with a proposed solution. You are the team lead.' }
  });
})();
