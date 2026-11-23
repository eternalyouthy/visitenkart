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
        { id: 'b2_work', name: 'B2 World of Work', desc: 'Remote work, digitalisation, careers.', level: 'b2',
          scenario: { en: 'a discussion about remote work and the future of work. You are a sceptical HR manager.', de: 'eine Diskussion über Homeoffice und die Zukunft der Arbeit. Du bist eine skeptische HR-Managerin.' } },
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
        items: [{ label: 'Words', href: '#/words', match: ['words'] }, { label: 'Grammar', href: '#/grammar', match: ['grammar'] }, { label: 'Roots', href: '#/roots', match: ['roots'] }] },
      { id: 'professional', label: 'Professional', short: 'Pro', icon: 'shield', href: '#/professional',
        items: [
          { label: 'Work & Office', href: '#/it/workcomm', tab: 'it', topic: 'workcomm' },
          { label: 'IT & Development', href: '#/it/dev', tab: 'it', topic: 'dev' },
          { label: 'Infrastructure', href: '#/it/infra', tab: 'it', topic: 'infra' },
          { label: 'Security', href: '#/it/security', tab: 'it', topic: 'security' },
          { label: 'B2 World of Work', href: '#/it/b2_work', tab: 'it', topic: 'b2_work' }
        ] },
      { id: 'expressions', label: 'Expressions', short: 'Phrases', icon: 'quote', href: '#/expressions',
        items: [
          { label: 'Chunks', href: '#/chunks', match: ['chunks'] },
          { label: 'Idioms', href: '#/expressions/idioms', tab: 'expressions', topic: 'idioms' },
          { label: 'Everyday Phrases', href: '#/expressions/everyday', tab: 'expressions', topic: 'everyday' }
        ] },
      { id: 'practice', label: 'Practice', short: 'Practice', icon: 'spark', href: '#/practice' },
      { id: 'user', label: 'User', short: 'User', icon: 'user', href: '#/user',
        items: [
          { label: 'Sync & Backup', href: '#/user', match: ['user'] },
          { label: 'Review', href: '#/review', match: ['review'] },
          { label: 'Stats', href: '#/stats', match: ['stats'] }
        ] }
    ],
    PRO_SUBS: [
      { id: 'workcomm', tab: 'it', topic: 'workcomm', name: 'Work & Office', desc: 'Meetings, emails, deadlines, tasks and coordination.' },
      { id: 'dev', tab: 'it', topic: 'dev', name: 'IT & Development', desc: 'Code, releases, bugs, testing.' },
      { id: 'infra', tab: 'it', topic: 'infra', name: 'Infrastructure', desc: 'Servers, networks, outages, backups.' },
      { id: 'security', tab: 'it', topic: 'security', name: 'Security', desc: 'Attacks, vulnerabilities, access, incidents, SOC.' },
      { id: 'b2_work', tab: 'it', topic: 'b2_work', name: 'B2 World of Work', desc: 'Remote work, digitalisation, careers.' }
    ],
    intro: {
      words: 'A2–B2 Russian for everyday life, work and discussion. Stress is marked with an accent (говори́ть); you never need to type it.',
      it: 'Professional Russian for IT work: office communication, development, infrastructure and security.',
      chunks: 'Ready-made phrases for speaking and writing, organised by communicative function.',
      expressions: 'Idioms and short everyday phrases for natural Russian.',
      grammar: 'The core of Russian grammar for learners: aspect, cases after в / на, and verbs of motion — with tables, pitfalls and drills.',
      roots: 'Russian word families built from one root with prefixes (при-, вы-, пере- …), noun and adjective suffixes, and international classical elements.'
    }
  });
  GT.packs.ru.config.TOPICS.words.forEach(function (t) { t.group = t.level !== 'b2' ? 'A2–B1 topics' : t.set === 'everyday' ? 'B2 everyday topics' : 'B2 themes'; });
  GT.packs.ru.config.TOPICS.it.forEach(function (t) { t.group = 'Professional'; });
})();
