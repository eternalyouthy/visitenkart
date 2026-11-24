/* RUSSIAN pack — configuration. Loaded first (see data/manifest.js → GT_PACKS.ru).
 *
 * Data conventions for Russian files:
 *   t            Russian text. Mark stress with "+" BEFORE the stressed vowel: "говор+ить", "[[пришл+а]]".
 *                (ё is always stressed and needs no mark.) Converted to a combining acute (говори́ть) on load;
 *                speech and answer checking ignore stress marks, so typed answers need none.
 *   en / de      short meaning in English / German (glosses). Example translations likewise.
 *   note, sense, meaningExplanation, explain …   { en: '…', de: '…' }
 *   gender       'm' | 'f' | 'n' (nouns) · aspect 'impf' | 'pf' (verbs) · forms { praes, praet, perf }
 *   level        'A2' | 'B1' | 'B2' (editorial study target, not a dictionary label)
 * Methodology: same as German/English — topic vocabulary, chunks/idioms, grammar pages with drills,
 * word families (roots) with prefix meanings, suffixes and classical elements; etymology only when certain.
 * IDs are permanent: ru-w-*, ru-pro-*, ru-ch-*, ru-ex-*, ru-r-*, ru-g-*. */
(function () {
  'use strict';
  var VOWELS = 'аеиоуыэюяАЕИОУЫЭЮЯ';   // ё is always stressed: no mark
  var RE = new RegExp('\\+([' + VOWELS + '])', 'g');
  function stressDeep(o, depth, seen) {
    if (!o || typeof o !== 'object' || depth > 7 || seen.indexOf(o) >= 0) return;
    seen.push(o);
    Object.keys(o).forEach(function (k) {
      var v = o[k];
      if (typeof v === 'string') { if (v.indexOf('+') >= 0) o[k] = v.replace(RE, '$1́'); }
      else if (v && typeof v === 'object') stressDeep(v, depth + 1, seen);
    });
  }

  GT.definePack('ru', {
    baseKnown: 'en',
    levelName: 'A2–B2',
    nounHint: 'noun · note the gender',
    features: { rootMapVerbs: true, prefixDrill: true, goetheB1: false, ruLink: false },
    prefixMatchTitle: 'Compare',
    afterLoad: [function (pack) {
      var seen = [];
      Object.keys(pack.byId).forEach(function (id) { stressDeep(pack.byId[id], 0, seen); });
      ['roots', 'prefixes', 'suffixes', 'classical', 'grammar'].forEach(function (k) { stressDeep(pack[k], 0, seen); });
    }],
    TOPICS: {
      words: [
        { id: 'everyday', name: 'Everyday Core', desc: 'High-frequency verbs, nouns and connectors for daily life.', level: 'b1',
          scenario: { en: 'a chat with a neighbour on the stairs about the past week and plans. You are the neighbour.', de: 'ein Gespräch mit einem Nachbarn im Treppenhaus über die letzte Woche und Pläne. Du bist der Nachbar.' } },
        { id: 'people', name: 'People & Relationships', desc: 'Family, friends, character, feelings.', level: 'b1',
          scenario: { en: 'a birthday party where I meet my friend’s family. You are my friend’s talkative aunt.', de: 'eine Geburtstagsfeier, auf der ich die Familie eines Freundes kennenlerne. Du bist seine gesprächige Tante.' } },
        { id: 'home', name: 'Home & Living', desc: 'Flat, rent, repairs, neighbours.', level: 'b1',
          scenario: { en: 'a flat viewing in Moscow. You are the landlord; I ask about rent, utilities and the contract.', de: 'eine Wohnungsbesichtigung. Du bist der Vermieter; ich frage nach Miete, Nebenkosten und Vertrag.' } },
        { id: 'food', name: 'Food, Shopping & Money', desc: 'Shops, cafés, prices, payment.', level: 'b1',
          scenario: { en: 'I order in a café and then return a faulty item in a shop. You are the waiter, then the shop assistant.', de: 'ich bestelle im Café und gebe danach im Laden etwas Defektes zurück. Du bist Kellner, dann Verkäufer.' } },
        { id: 'health', name: 'Health & Doctor', desc: 'Symptoms, doctor visits, pharmacy, sick leave.', level: 'b1',
          scenario: { en: 'an appointment with a GP. You are the doctor; I describe my symptoms and need a sick note.', de: 'ein Termin beim Hausarzt. Du bist die Ärztin; ich beschreibe Symptome und brauche eine Krankschreibung.' } },
        { id: 'travel', name: 'Travel & Transport', desc: 'Trains, tickets, directions, hotels.', level: 'b1',
          scenario: { en: 'my train is delayed and I ask at the station how to continue. You are the station employee.', de: 'mein Zug hat Verspätung und ich frage am Bahnhof nach einer Alternative. Du bist der Mitarbeiter.' } },
        { id: 'work', name: 'Work & Career', desc: 'Jobs, colleagues, applications, office life.', level: 'b1',
          scenario: { en: 'a job interview at a Russian-speaking IT company. You are the team lead.', de: 'ein Vorstellungsgespräch in einer russischsprachigen IT-Firma. Du bist der Teamleiter.' } },
        { id: 'authorities', name: 'Authorities & Documents', desc: 'Forms, documents, banks, official letters.', level: 'b1',
          scenario: { en: 'a visit to an office (МФЦ) to get a document. You are the clerk.', de: 'ein Behördenbesuch (МФЦ), um ein Dokument zu beantragen. Du bist der Sachbearbeiter.' } },
        { id: 'b2_media', name: 'Media & Digital Life', desc: 'News, social media, privacy, disinformation.', level: 'b2',
          scenario: { en: 'a journalist interviews me as a security expert about fake news and data protection.', de: 'eine Journalistin interviewt mich als Sicherheitsexperten zu Fake News und Datenschutz.' } },
        { id: 'b2_society', name: 'Society & Environment', desc: 'Environment, public debate, values.', level: 'b2',
          scenario: { en: 'a residents’ meeting about a new climate project in the district. You are the organiser.', de: 'eine Anwohnerversammlung zu einem neuen Klimaprojekt im Viertel. Du bist die Organisatorin.' } },
        { id: 'b2_housing', name: 'Housing', desc: 'Mortgage, rent, utilities, management company.', level: 'b2', set: 'everyday',
          scenario: { en: 'I call the management company because the heating has failed again. You are the dispatcher.', de: 'ich rufe die Hausverwaltung an, weil die Heizung schon wieder ausgefallen ist. Du bist die Disponentin.' } },
        { id: 'b2_relations', name: 'Relationships', desc: 'Trust, quarrels, making up, family by marriage.', level: 'b2', set: 'everyday',
          scenario: { en: 'a friend tells me about a quarrel with her partner and asks for advice. You are the friend.', de: 'eine Freundin erzählt mir von einem Streit mit ihrem Partner und bittet um Rat. Du bist die Freundin.' } },
        { id: 'b2_health', name: 'Health', desc: 'Check-ups, vaccinations, side effects, recovery.', level: 'b2', set: 'everyday',
          scenario: { en: 'a follow-up appointment after a check-up. You are the doctor explaining the results and the treatment.', de: 'ein Folgetermin nach einer Untersuchung. Du bist die Ärztin und erklärst Ergebnisse und Behandlung.' } },
        { id: 'b2_travel', name: 'Travel', desc: 'Passport, check-in, connections, booking.', level: 'b2', set: 'everyday',
          scenario: { en: 'my flight is delayed and I may miss my connection. You are the airline employee at the desk.', de: 'mein Flug hat Verspätung und ich verpasse vielleicht den Anschluss. Du bist die Mitarbeiterin der Airline am Schalter.' } }
      ],
      it: [
        { id: 'workcomm', name: 'Work & Office', desc: 'Meetings, emails, deadlines, tasks and coordination.',
          scenario: { en: 'a daily stand-up and then agreeing deadlines with a colleague from another department. You are the colleague.', de: 'ein Daily und danach eine Terminabstimmung mit einer Kollegin aus einer anderen Abteilung. Du bist die Kollegin.' } },
        { id: 'dev', name: 'IT & Development', desc: 'Code, releases, bugs, testing.',
          scenario: { en: 'sprint planning with a Russian-speaking development team. You are the product owner.', de: 'eine Sprintplanung mit einem russischsprachigen Entwicklerteam. Du bist die Product Ownerin.' } },
        { id: 'infra', name: 'Infrastructure', desc: 'Servers, networks, outages, backups.',
          scenario: { en: 'a call because a server is down. You are the on-call admin.', de: 'ein Anruf, weil ein Server ausgefallen ist. Du bist der Admin in Bereitschaft.' } },
        { id: 'security', name: 'Security', desc: 'Attacks, vulnerabilities, access, incidents, SOC.',
          scenario: { en: 'I explain a security incident to a non-technical manager. You are that manager and ask simple but persistent questions.', de: 'ich erkläre einer nichttechnischen Abteilungsleiterin einen Sicherheitsvorfall. Du bist sie und fragst einfach, aber hartnäckig.' } },
        { id: 'design', name: 'Design, UX & Visuals', desc: 'Graphic design, typography, layout, contrast, branding and mockups.',
          scenario: { en: 'a design review of a new website mockup and visual identity. You are the client; I explain the typography, grid and contrast.', de: 'ein Design-Review eines neuen Website-Mockups und Brandings. Du bist der Kunde; ich erkläre Typografie, Raster und Kontrast.' } },
        { id: 'ai_data', name: 'AI, Data & Analytics', desc: 'Prompts, models, datasets, metrics, dashboards and automation.',
          scenario: { en: 'a discussion about adding an AI assistant and analytics dashboards. You are a manager asking about data quality and metrics.', de: 'ein Gespräch über den Einsatz eines KI-Assistenten und neuer Dashboards. Du bist der Manager und fragst nach Datenqualität und Kennzahlen.' } },
        { id: 'product', name: 'Product & Agile', desc: 'Roadmaps, backlogs, sprints, user stories, prototypes and launches.',
          scenario: { en: 'discussing the product roadmap, MVP scope and sprint retrospective. You are the product manager.', de: 'ein Gespräch über Produkt-Roadmap, MVP und Sprint-Retrospektive. Du bist die Produktmanagerin.' } },
        { id: 'clients', name: 'Clients & Freelance', desc: 'Briefs, quotes, invoices, scope, retainers and client talks.',
          scenario: { en: 'a freelance client call about a project brief, quote, revisions and invoice. You are the client.', de: 'ein Gespräch mit einem Freelance-Kunden über Briefing, Angebot, Korrekturschleifen und Rechnung. Du bist der Kunde.' } },
        { id: 'presentations', name: 'Presentations & Pitching', desc: 'Slide decks, structure, charts, transitions and handling Q&A.',
          scenario: { en: 'rehearsing a project presentation and Q&A session. You are the audience asking follow-up questions.', de: 'die Generalprobe einer Projektpräsentation mit anschließender Fragerunde. Du bist das Publikum.' } },
        { id: 'b2_work', name: 'B2 World of Work', desc: 'Remote work, digitalisation, careers.', level: 'b2',
          scenario: { en: 'a discussion about remote work and the future of work. You are a sceptical HR manager.', de: 'eine Diskussion über Homeoffice und die Zukunft der Arbeit. Du bist eine skeptische HR-Managerin.' } },
        { id: 'bureau_offices', level: 'b2', name: 'Public Offices & Permits', desc: 'Authorities, permits, official decisions, appeals, jurisdiction and administrative procedures.',
          scenario: { en: 'at a municipal office or licensing agency clarifying a formal decision and how to appeal within the statutory deadline. You are the case officer.', de: 'bei einer Behörde zur Klärung eines Bescheids und einer fristgerechten Beschwerde. Du bist der Sachbearbeiter.' } },
        { id: 'bureau_tax', level: 'b2', name: 'Taxes, Payroll & Social Security', desc: 'Tax assessments, withholding, deductions, social contributions, payroll and fiscal audits.',
          scenario: { en: 'reviewing a tax assessment, payroll deductions and a tax audit query with a tax adviser. You are the adviser.', de: 'mit der Steuerberatung über Steuerbescheid, Lohnabzüge und eine Betriebsprüfung. Du bist die Beraterin.' } },
        { id: 'bureau_docs', level: 'b2', name: 'Official Correspondence & Records', desc: 'Formal letters, registered mail, power of attorney, notarisation, dunning and statutory retention.',
          scenario: { en: 'submitting a notarised power of attorney and responding to a formal dunning notice with proof of delivery. You are the registrar.', de: 'Einreichung einer beglaubigten Vollmacht und Antwort auf eine offizielle Mahnung. Du bist die Sachbearbeiterin.' } },
        { id: 'legal_contracts', level: 'b2', name: 'Contracts & Civil Law', desc: 'Clauses, breach, liability, indemnification, force majeure, limitation periods and settlements.',
          scenario: { en: 'renegotiating liability caps, warranty clauses and termination terms in a commercial contract. You are opposing counsel.', de: 'Nachverhandlung von Haftung, Gewährleistung und Kündigungsklauseln in einem Vertrag. Du bist die Gegenseite.' } },
        { id: 'legal_ip', level: 'b2', name: 'Copyright & Intellectual Property', desc: 'Copyright, licensing, trademarks, patents, infringement, cease-and-desist letters and trade secrets.',
          scenario: { en: 'responding to a cease-and-desist claim over software licensing, trademarks and copyrighted media. You are IP counsel.', de: 'Gespräch über eine Abmahnung wegen Marken-, Lizenz- und Urheberrechten. Du bist Fachanwältin für IP.' } },
        { id: 'legal_criminal', level: 'b2', name: 'Criminal Law & Courts', desc: 'Indictment, prosecution, defence, remand, fraud, verdicts, sentencing and appeals.',
          scenario: { en: 'discussing a commercial fraud indictment, witness testimony and mitigating circumstances with defence counsel. You are the defence lawyer.', de: 'Besprechung einer Anklage, Zeugenaussage und mildernder Umstände mit der Verteidigung. Du bist der Strafverteidiger.' } },
        { id: 'legal_labour', level: 'b2', name: 'Employment & Labour Law', desc: 'Unfair dismissal, non-compete clauses, works councils, tribunals, severance and workplace rights.',
          scenario: { en: 'negotiating a mutual termination agreement, severance and a post-termination non-compete clause. You are an employment lawyer.', de: 'Verhandlung über Aufhebungsvertrag, Abfindung und Wettbewerbsverbot. Du bist Fachanwalt für Arbeitsrecht.' } },
        { id: 'legal_corporate', level: 'b2', name: 'Compliance, Privacy & Corporate', desc: 'GDPR/data protection, due diligence, anti-money laundering, whistleblowing, governance and insolvency.',
          scenario: { en: 'a compliance audit covering data protection, conflicts of interest and anti-money-laundering controls. You are the compliance officer.', de: 'ein Compliance-Audit zu Datenschutz, Interessenkonflikten und Geldwäscheprävention. Du bist Compliance Officer.' } },
        { id: 'svc_hotel', level: 'b2', name: 'Hotels & Front Desk', desc: 'Reception, overbooking, upgrades, deposits, housekeeping, concierge and shift handovers.',
          scenario: { en: 'handling an overbooked arrival and negotiating a complimentary upgrade or partner hotel transfer. You are an upset guest.', de: 'eine Überbuchung an der Rezeption lösen und ein Upgrade oder Ersatzhotel anbieten. Du bist der verärgerte Gast.' } },
        { id: 'svc_gastro', level: 'b2', name: 'Gastronomy & Catering', desc: 'Allergens, food hygiene, dietary requests, kitchen brigade, service flow and billing.',
          scenario: { en: 'explaining severe allergen precautions and banquet catering timing during a dinner rush. You are a guest with allergies.', de: 'Allergene, Hygieneregeln und Menüfolge beim Service im Restaurant erklären. Du bist ein Gast mit Allergien.' } },
        { id: 'svc_retail', level: 'b2', name: 'Retail, Sales & Customer Support', desc: 'Stocktake, warranty claims, goodwill gestures, de-escalation, SLA and cash reconciliation.',
          scenario: { en: 'de-escalating a warranty dispute and offering a credit note or goodwill gesture under SLA rules. You are a dissatisfied customer.', de: 'Deeskalation bei einer Reklamation: Gewährleistung, Gutschrift oder Kulanz klären. Du bist ein unzufriedener Kunde.' } },
        { id: 'fin_accounting', level: 'b2', name: 'Accounting & Finance', desc: 'Balance sheets, receivables/payables, accruals, depreciation, liquidity, VAT and audit trails.',
          scenario: { en: 'a quarter-end close review with the auditor covering accruals, overdue receivables and liquidity. You are the external auditor.', de: 'Quartalsabschluss mit dem Wirtschaftsprüfer zu Rückstellungen, Forderungen und Liquidität. Du bist der Prüfer.' } },
        { id: 'fin_marketing', level: 'b2', name: 'Sales, Marketing & PR', desc: 'Lead generation, sales funnels, press releases, crisis PR, brand positioning and market share.',
          scenario: { en: 'preparing a crisis PR response and reviewing brand positioning and conversion funnels. You are the head of PR.', de: 'Krisen-PR und Neupositionierung der Marke mit dem Team planen. Du bist die PR-Leiterin.' } },
        { id: 'fin_hr', level: 'b2', name: 'HR & Recruiting', desc: 'Talent acquisition, screening, employer branding, succession planning, retention and appraisals.',
          scenario: { en: 'shortlisting candidates, structuring a compensation package and planning retention after an exit interview. You are a hiring director.', de: 'Kandidatenauswahl, Vergütungspaket und Mitarbeiterbindung nach einem Exit-Interview besprechen. Du bist Fachbereichsleiter.' } },
        { id: 'med_clinical', level: 'b2', name: 'Healthcare & Clinical Work', desc: 'Triage, patient history, ward rounds, discharge notes, informed consent, dosage and confidentiality.',
          scenario: { en: 'handing over a patient during ward rounds and obtaining informed consent before treatment. You are the senior consultant.', de: 'Übergabe bei der Visite und Aufklärung vor einem Eingriff. Du bist der Oberarzt.' } },
        { id: 'ops_logistics', level: 'b2', name: 'Logistics & Supply Chain', desc: 'Freight, customs clearance, dispatch, order picking, cold chain, lead times and inventory.',
          scenario: { en: 'resolving a customs clearance delay on a temperature-controlled consignment. You are the customs broker.', de: 'eine Verzögerung bei der Zollabfertigung einer Kühlkette klären. Du bist der Spediteur.' } },
        { id: 'ops_trades', level: 'b2', name: 'Engineering, Construction & Trades', desc: 'Blueprints, commissioning, site safety, defect liability, tolerances, maintenance and retrofits.',
          scenario: { en: 'a final site inspection reviewing blueprint tolerances and snag-list defect liability before commissioning. You are the site engineer.', de: 'Bauabnahme mit Prüfung von Toleranzen, Mängelhaftung und Inbetriebnahme. Du bist der Bauleiter.' } },
      ],
      chunks: [
        { id: 'opinion', name: 'Giving your opinion', group: 'Everyday',
          scenario: { en: 'a discussion in which I give my opinion on everyday topics. You are a curious colleague.', de: 'eine Diskussion, in der ich meine Meinung zu Alltagsthemen sage. Du bist ein neugieriger Kollege.' } },
        { id: 'agree', name: 'Agreeing & disagreeing', group: 'Everyday',
          scenario: { en: 'a friendly argument about office vs. home office. You hold the opposite view.', de: 'ein freundlicher Streit über Büro oder Homeoffice. Du vertrittst die Gegenposition.' } },
        { id: 'clarify', name: 'Asking for clarification', group: 'Everyday',
          scenario: { en: 'an official explains a complicated form too fast. I keep asking back.', de: 'ein Beamter erklärt zu schnell ein kompliziertes Formular. Ich frage nach.' } },
        { id: 'phone', name: 'Phone calls', group: 'Everyday',
          scenario: { en: 'I call a company and need to be put through to the right person. You are the secretary.', de: 'ich rufe eine Firma an und muss zur richtigen Person durchgestellt werden. Du bist die Sekretärin.' } },
        { id: 'complain', name: 'Complaining', group: 'Everyday',
          scenario: { en: 'I complain to the management company about broken heating and noise. You are the manager.', de: 'ich beschwere mich bei der Hausverwaltung über die kaputte Heizung und Lärm. Du bist der Verwalter.' } },
        { id: 'problem', name: 'Describing a problem', group: 'Everyday',
          scenario: { en: 'I call a hotline because something I bought doesn’t work. You are the support agent.', de: 'ich rufe eine Hotline an, weil etwas Gekauftes nicht funktioniert. Du bist der Support-Mitarbeiter.' } },
        { id: 'appointments', name: 'Making & changing appointments', group: 'Everyday',
          scenario: { en: 'I call a clinic to book and then move an appointment. You are the receptionist.', de: 'ich rufe in einer Praxis an, um einen Termin zu machen und dann zu verschieben. Du bist die Empfangskraft.' } },
        { id: 'email', name: 'Formal emails', group: 'Everyday',
          scenario: { en: 'we write a formal email together: you give the situation, I write, you reply as the recipient.', de: 'wir schreiben zusammen eine formelle E-Mail: du gibst die Situation vor, ich schreibe, du antwortest als Empfänger.' } },
        { id: 'smalltalk', name: 'Small talk', group: 'Everyday',
          scenario: { en: 'Monday-morning small talk in the office kitchen. You are a colleague.', de: 'Smalltalk am Montagmorgen in der Büroküche. Du bist ein Kollege.' } },
        { id: 'it_standup', name: 'Stand-up & tasks', group: 'IT',
          scenario: { en: 'a daily stand-up. You are the scrum master asking follow-up questions.', de: 'ein Daily Stand-up. Du bist der Scrum Master und fragst nach.' } },
        { id: 'it_bug', name: 'Explaining a bug', group: 'IT',
          scenario: { en: 'I report a bug to a developer. You are the developer asking precise questions.', de: 'ich melde einem Entwickler einen Bug. Du bist der Entwickler und fragst genau nach.' } },
        { id: 'it_help', name: 'Asking for help', group: 'IT',
          scenario: { en: 'I’m stuck on a task and ask an experienced colleague for help. You are that colleague.', de: 'ich komme bei einer Aufgabe nicht weiter und bitte einen erfahrenen Kollegen um Hilfe. Du bist dieser Kollege.' } },
        { id: 'it_meeting', name: 'Disagreeing politely in meetings', group: 'IT',
          scenario: { en: 'an architecture meeting where I disagree with the proposed solution. You are the team lead.', de: 'ein Architektur-Meeting, in dem ich mit der vorgeschlagenen Lösung nicht einverstanden bin. Du bist der Teamleiter.' } }
      ],
      expressions: [
        { id: 'idioms', name: 'Idioms', group: 'Expressions', desc: 'Common Russian idioms with literal vs real meaning.',
          scenario: { en: 'an informal chat over coffee with a Russian colleague, full of idioms. You are the colleague.', de: 'ein lockeres Gespräch beim Kaffee mit einem russischen Kollegen voller Redewendungen. Du bist der Kollege.' } },
        { id: 'everyday', name: 'Everyday Phrases', group: 'Expressions', desc: 'Short high-frequency replies: Ничего страшного, Как скажешь, Посмотрим.',
          scenario: { en: 'quick everyday and work dialogue in the office and in chat. You are a colleague.', de: 'schnelle Alltags- und Arbeitsdialoge im Büro und im Chat. Du bist ein Kollege.' } }
      ],
      literature: [
        { id: 'love', name: 'Love & Devotion', group: 'Literary themes', desc: 'Affection, infatuation, quiet tenderness and the sharp edge of passion.',
          scenario: { en: 'a candid conversation with a well-read Russian friend about love and relationships where classic literary lines come up naturally without melodrama. You are that friend.', de: 'ein offenes Gespräch mit einem belesenen russischen Freund über Liebe und Beziehungen, in dem klassische Literaturzitate ganz natürlich fallen. Du bist dieser Freund.' } },
        { id: 'longing', name: 'Longing & Melancholy', group: 'Literary themes', desc: 'Restlessness, solitude, homesickness and quiet inner ache.',
          scenario: { en: 'a late-night kitchen talk with a Russian friend about restlessness, spleen, nostalgia and inertia. You are the friend.', de: 'ein spätes Küchengespräch mit einem russischen Freund über Schwermut, Rastlosigkeit und Fernweh. Du bist der Freund.' } },
        { id: 'atmosphere', name: 'Atmosphere & Description', group: 'Literary themes', desc: 'Vivid ways to describe weather, light, rooms, silence, faces and moods.',
          scenario: { en: 'discussing a novel, film or striking winter morning and describing the atmosphere and sharp details. You are my conversation partner.', de: 'wir sprechen über einen Roman, Film oder einen klaren Wintermorgen und beschreiben Atmosphäre und Details. Du bist mein Gesprächspartner.' } },
        { id: 'irony', name: 'Irony & Human Nature', group: 'Literary themes', desc: 'Dry wit, social satire and sharp observations on vanity, habit and absurdity.',
          scenario: { en: 'a wry conversation about everyday absurdity, human vanity and social habits where classic Russian satire fits right in. You are a sharp-tongued friend.', de: 'ein ironisches Gespräch über alltägliche Absurdität, Eitelkeit und menschliche Gewohnheiten, zu dem klassische russische Satire passt. Du bist ein schlagfertiger Freund.' } },
        { id: 'fate', name: 'Time, Fate & Turning Points', group: 'Literary themes', desc: 'Memory, passing time, illusions, resolve and moments that change everything.',
          scenario: { en: 'a conversation about turning points, endurance, memory and the price of choices. You are a close friend.', de: 'ein Gespräch über Wendepunkte, Erinnerung und den Preis von Entscheidungen. Du bist ein enger Freund.' } }
      ],
      grammar: [
        { id: 'aspect', name: 'Verb aspect: imperfective vs perfective', group: 'Core grammar' },
        { id: 'cases', name: 'Cases: prepositional & accusative after в / на', group: 'Core grammar' },
        { id: 'motion', name: 'Verbs of motion: идти / ходить, ехать / ездить', group: 'Core grammar' },
        { id: 'genitive', name: 'Genitive: absence, quantity and origin', group: 'Core grammar' },
        { id: 'dative', name: 'Dative: recipients and experiencers', group: 'Core grammar' },
        { id: 'instrumental', name: 'Instrumental: tools, company and roles', group: 'Core grammar' },
        { id: 'adjectives', name: 'Adjective agreement and declension', group: 'Core grammar' },
        { id: 'reflexive', name: 'Verbs in -ся / -сь', group: 'Core grammar' }
      ],
      roots: []
    },
    ROOT_PLAN: ['ход', 'пис', 'вод', 'став', 'воз', 'нос', 'да', 'зна', 'бр'],
    PREFIX_PLAN: ['при', 'у', 'вы', 'в', 'пере', 'за', 'под', 'от'],
    NAV: [
      { id: 'language', label: 'Language', short: 'Lang', icon: 'book', href: '#/words',
        items: [{ label: 'Words', href: '#/words', match: ['words'] }, { label: 'Roots', href: '#/roots', match: ['roots'] }, { label: 'Grammar', href: '#/grammar', match: ['grammar'] }] },
      { id: 'professional', label: 'Professional', short: 'Pro', icon: 'shield', href: '#/professional',
        items: [
          { label: 'Work & Office', href: '#/it/workcomm', tab: 'it', topic: 'workcomm' },
          { label: 'IT & Development', href: '#/it/dev', tab: 'it', topic: 'dev' },
          { label: 'Infrastructure', href: '#/it/infra', tab: 'it', topic: 'infra' },
          { label: 'Security', href: '#/it/security', tab: 'it', topic: 'security' },
          { label: 'Design, UX & Visuals', href: '#/it/design', tab: 'it', topic: 'design' },
          { label: 'AI, Data & Analytics', href: '#/it/ai_data', tab: 'it', topic: 'ai_data' },
          { label: 'Product & Agile', href: '#/it/product', tab: 'it', topic: 'product' },
          { label: 'Clients & Freelance', href: '#/it/clients', tab: 'it', topic: 'clients' },
          { label: 'Presentations & Pitching', href: '#/it/presentations', tab: 'it', topic: 'presentations' },
          { label: 'B2 World of Work', href: '#/it/b2_work', tab: 'it', topic: 'b2_work' }
        ] },
      { id: 'expressions', label: 'Expressions', short: 'Phrases', icon: 'quote', href: '#/expressions',
        items: [
          { label: 'Chunks', href: '#/chunks', match: ['chunks'] },
          { label: 'Idioms', href: '#/expressions/idioms', tab: 'expressions', topic: 'idioms' },
          { label: 'Everyday Phrases', href: '#/expressions/everyday', tab: 'expressions', topic: 'everyday' },
          { label: 'Literary Phrases', href: '#/literature', match: ['literature'] }
        ] },
      { id: 'practice', label: 'Practice', short: 'Practice', icon: 'spark', href: '#/practice' }
    ],
    PRO_GROUPS: [
      { key: 'for-everyone', title: 'For Everyone', badge: 'Start here', desc: 'Essential for every profession: office communication, meetings, clients, presentations, careers and modern work. Complete this track first, then pick your field below.' },
      { key: 'it', title: 'IT Professions', desc: 'Software engineering, cloud infrastructure, cybersecurity, UX design, AI/data and agile product work.' },
      { key: 'bureaucracy', title: 'Bureaucracy & Administration', desc: 'Public offices, permits, taxes, payroll, social security, official notices and formal records (B2–C2).' },
      { key: 'legal', title: 'Legal & Law', desc: 'Contracts, intellectual property, criminal law & courts, labour law and corporate compliance (B2–C2).' },
      { key: 'service', title: 'Service, Hospitality & Retail', desc: 'Hotels & front desk, gastronomy & catering, retail sales and customer support (B2–C1).' },
      { key: 'business', title: 'Finance, HR & Marketing', desc: 'Accounting & finance, sales, marketing & PR, recruiting and HR operations (B2–C2).' },
      { key: 'operations', title: 'Healthcare, Logistics & Trades', desc: 'Clinical healthcare, logistics & supply chain, engineering, construction and technical trades (B2–C2).' }
    ],
    PRO_SUBS: [
      // 01 · For Everyone
      { id: 'workcomm', group: 'for-everyone', tab: 'it', topic: 'workcomm', name: 'Work & Office', desc: 'Meetings, emails, deadlines, tasks and coordination.' },
      { id: 'clients', group: 'for-everyone', tab: 'it', topic: 'clients', name: 'Clients & Freelance', desc: 'Briefs, quotes, invoices, scope, retainers and client talks.' },
      { id: 'presentations', group: 'for-everyone', tab: 'it', topic: 'presentations', name: 'Presentations & Pitching', desc: 'Slide decks, structure, charts, transitions and handling Q&A.' },
      { id: 'b2_work', group: 'for-everyone', tab: 'it', topic: 'b2_work', name: 'B2 World of Work', desc: 'Remote work, digitalisation, careers.' },
      // 02 · IT Professions
      { id: 'dev', group: 'it', tab: 'it', topic: 'dev', name: 'IT & Development', desc: 'Code, releases, bugs, testing.' },
      { id: 'infra', group: 'it', tab: 'it', topic: 'infra', name: 'Infrastructure', desc: 'Servers, networks, outages, backups.' },
      { id: 'security', group: 'it', tab: 'it', topic: 'security', name: 'Security', desc: 'Attacks, vulnerabilities, access, incidents, SOC.' },
      { id: 'design', group: 'it', tab: 'it', topic: 'design', name: 'Design, UX & Visuals', desc: 'Graphic design, typography, layout, contrast, branding and mockups.' },
      { id: 'ai_data', group: 'it', tab: 'it', topic: 'ai_data', name: 'AI, Data & Analytics', desc: 'Prompts, models, datasets, metrics, dashboards and automation.' },
      { id: 'product', group: 'it', tab: 'it', topic: 'product', name: 'Product & Agile', desc: 'Roadmaps, backlogs, sprints, user stories, prototypes and launches.' },
      // 03 · Bureaucracy & Administration
      { id: 'bureau_offices', group: 'bureaucracy', tab: 'it', topic: 'bureau_offices', name: 'Public Offices & Permits', desc: 'Authorities, permits, official decisions, appeals, jurisdiction and administrative procedures.' },
      { id: 'bureau_tax', group: 'bureaucracy', tab: 'it', topic: 'bureau_tax', name: 'Taxes, Payroll & Social Security', desc: 'Tax assessments, withholding, deductions, social contributions, payroll and fiscal audits.' },
      { id: 'bureau_docs', group: 'bureaucracy', tab: 'it', topic: 'bureau_docs', name: 'Official Correspondence & Records', desc: 'Formal letters, registered mail, power of attorney, notarisation, dunning and statutory retention.' },
      // 04 · Legal & Law
      { id: 'legal_contracts', group: 'legal', tab: 'it', topic: 'legal_contracts', name: 'Contracts & Civil Law', desc: 'Clauses, breach, liability, indemnification, force majeure, limitation periods and settlements.' },
      { id: 'legal_ip', group: 'legal', tab: 'it', topic: 'legal_ip', name: 'Copyright & Intellectual Property', desc: 'Copyright, licensing, trademarks, patents, infringement, cease-and-desist letters and trade secrets.' },
      { id: 'legal_criminal', group: 'legal', tab: 'it', topic: 'legal_criminal', name: 'Criminal Law & Courts', desc: 'Indictment, prosecution, defence, remand, fraud, verdicts, sentencing and appeals.' },
      { id: 'legal_labour', group: 'legal', tab: 'it', topic: 'legal_labour', name: 'Employment & Labour Law', desc: 'Unfair dismissal, non-compete clauses, works councils, tribunals, severance and workplace rights.' },
      { id: 'legal_corporate', group: 'legal', tab: 'it', topic: 'legal_corporate', name: 'Compliance, Privacy & Corporate', desc: 'GDPR/data protection, due diligence, anti-money laundering, whistleblowing, governance and insolvency.' },
      // 05 · Service, Hospitality & Retail
      { id: 'svc_hotel', group: 'service', tab: 'it', topic: 'svc_hotel', name: 'Hotels & Front Desk', desc: 'Reception, overbooking, upgrades, deposits, housekeeping, concierge and shift handovers.' },
      { id: 'svc_gastro', group: 'service', tab: 'it', topic: 'svc_gastro', name: 'Gastronomy & Catering', desc: 'Allergens, food hygiene, dietary requests, kitchen brigade, service flow and billing.' },
      { id: 'svc_retail', group: 'service', tab: 'it', topic: 'svc_retail', name: 'Retail, Sales & Customer Support', desc: 'Stocktake, warranty claims, goodwill gestures, de-escalation, SLA and cash reconciliation.' },
      // 06 · Finance, HR & Marketing
      { id: 'fin_accounting', group: 'business', tab: 'it', topic: 'fin_accounting', name: 'Accounting & Finance', desc: 'Balance sheets, receivables/payables, accruals, depreciation, liquidity, VAT and audit trails.' },
      { id: 'fin_marketing', group: 'business', tab: 'it', topic: 'fin_marketing', name: 'Sales, Marketing & PR', desc: 'Lead generation, sales funnels, press releases, crisis PR, brand positioning and market share.' },
      { id: 'fin_hr', group: 'business', tab: 'it', topic: 'fin_hr', name: 'HR & Recruiting', desc: 'Talent acquisition, screening, employer branding, succession planning, retention and appraisals.' },
      // 07 · Healthcare, Logistics & Trades
      { id: 'med_clinical', group: 'operations', tab: 'it', topic: 'med_clinical', name: 'Healthcare & Clinical Work', desc: 'Triage, patient history, ward rounds, discharge notes, informed consent, dosage and confidentiality.' },
      { id: 'ops_logistics', group: 'operations', tab: 'it', topic: 'ops_logistics', name: 'Logistics & Supply Chain', desc: 'Freight, customs clearance, dispatch, order picking, cold chain, lead times and inventory.' },
      { id: 'ops_trades', group: 'operations', tab: 'it', topic: 'ops_trades', name: 'Engineering, Construction & Trades', desc: 'Blueprints, commissioning, site safety, defect liability, tolerances, maintenance and retrofits.' }
    ],
    intro: {
      words: 'A2–B2 Russian for everyday life, work and discussion. Stress is marked with an accent (говори́ть); you never need to type it.',
      it: 'Professional Russian (B1–C2) across 7 tracks: universal workplace basics first, followed by IT, bureaucracy, law, hospitality, finance, healthcare and trades.',
      chunks: 'Ready-made phrases for speaking and writing, organised by communicative function.',
      expressions: 'Idioms, youth slang, short everyday phrases, chunks and classic literary lines for natural Russian.',
      literature: 'Lines from Russian literature with a short explanation of their meaning and examples.',
      grammar: 'The core of Russian grammar for learners: aspect, cases after в / на, and verbs of motion — with tables, pitfalls and drills.',
      roots: 'Russian word families built from one root with prefixes (при-, вы-, пере- …), noun and adjective suffixes, and international classical elements.'
    }
  });
  GT.packs.ru.config.TOPICS.words.forEach(function (t) { t.group = t.level !== 'b2' ? 'A2–B1 topics' : t.set === 'everyday' ? 'B2 everyday topics' : 'B2 themes'; });
  GT.packs.ru.config.TOPICS.it.forEach(function (t) { t.group = 'Professional'; });
})();
