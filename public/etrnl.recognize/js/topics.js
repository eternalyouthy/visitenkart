/* Tabs, topics and practice scenarios. Topic ids are used in data files and progress. Don't rename ids.
 * Names/descriptions are interface text (English); scenarios go into the Russian practice prompt. */
(function () {
  'use strict';
  /* German pack config. Legacy data files write the German text into `de` (aliased to `t`); explanations are Russian. */
  GT.definePack('de', { targetKey: 'de', baseKnown: 'ru' });
  GT._target = GT.packs.de;
  GT.B1_TOTAL = 2400; // approximate size of the official Goethe B1 Wortliste

  GT.TABS = [
    { id: 'words', label: 'Words', short: 'Words', icon: 'book' },
    { id: 'it', label: 'Professional', short: 'Pro', icon: 'shield' },
    { id: 'chunks', label: 'Chunks', short: 'Chunks', icon: 'quote' },
    { id: 'expressions', label: 'Expressions', short: 'Phrases', icon: 'quote' },
    { id: 'grammar', label: 'Grammar', short: 'Grammar', icon: 'layers' },
    { id: 'roots', label: 'Roots', short: 'Roots', icon: 'roots' },
    { id: 'practice', label: 'Practice', short: 'Practice', icon: 'spark' },
    { id: 'review', label: 'Review', short: 'Review', icon: 'repeat' },
    { id: 'stats', label: 'Stats', short: 'Stats', icon: 'chart' }
  ];

  /* Top-level navigation: 3 dropdown menus + 3 direct tabs (matching German dark 1px-line design). */
  GT.NAV = [
    {
      id: 'language', label: 'Language', short: 'Lang', icon: 'book', href: '#/words',
      items: [
        { label: 'Words', href: '#/words', match: ['words'] },
        { label: 'Grammar', href: '#/grammar', match: ['grammar'] },
        { label: 'Roots', href: '#/roots', match: ['roots'] }
      ]
    },
    {
      id: 'professional', label: 'Professional', short: 'Pro', icon: 'shield', href: '#/professional',
      items: [
        { label: 'Work & Office', href: '#/it/workcomm', tab: 'it', topic: 'workcomm' },
        { label: 'IT & Development', href: '#/it/dev', tab: 'it', topic: 'dev' },
        { label: 'Infrastructure', href: '#/it/infra', tab: 'it', topic: 'infra' },
        { label: 'Security', href: '#/it/security', tab: 'it', topic: 'security' },
        { label: 'B2 Career Paths', href: '#/it/b2_beruf', tab: 'it', topic: 'b2_beruf' },
        { label: 'B2 World of Work', href: '#/it/b2_arbeitswelt', tab: 'it', topic: 'b2_arbeitswelt' }
      ]
    },
    {
      id: 'expressions', label: 'Expressions', short: 'Phrases', icon: 'quote', href: '#/expressions',
      items: [
        { label: 'Chunks', href: '#/chunks', match: ['chunks'] },
        { label: 'Idioms', href: '#/expressions/idioms', tab: 'expressions', topic: 'idioms' },
        { label: 'Everyday Phrases', href: '#/expressions/everyday', tab: 'expressions', topic: 'everyday' }
      ]
    },
    { id: 'practice', label: 'Practice', short: 'Practice', icon: 'spark', href: '#/practice' },
    {
      id: 'user', label: 'User', short: 'User', icon: 'user', href: '#/user',
      items: [
        { label: 'Sync & Backup', href: '#/user', match: ['user'] },
        { label: 'Review', href: '#/review', match: ['review'] },
        { label: 'Stats', href: '#/stats', match: ['stats'] }
      ]
    }
  ];

  GT.PRO_SUBS = [
    { id: 'workcomm', tab: 'it', topic: 'workcomm', name: 'Work & Office', desc: 'Meetings, emails, deadlines, coordination, tickets and office communication.' },
    { id: 'dev', tab: 'it', topic: 'dev', name: 'IT & Development', desc: 'Code, releases, requirements, version control.' },
    { id: 'infra', tab: 'it', topic: 'infra', name: 'Infrastructure', desc: 'Servers, networks, outages, cloud.' },
    { id: 'security', tab: 'it', topic: 'security', name: 'Security', desc: 'Vulnerabilities, attacks, access, SOC, incidents.' },
    { id: 'b2_beruf', tab: 'it', topic: 'b2_beruf', name: 'B2 Career Paths', desc: 'Career changes, further training, promotion, salary talks, self-employment.' },
    { id: 'b2_arbeitswelt', tab: 'it', topic: 'b2_arbeitswelt', name: 'B2 World of Work', desc: 'Remote work, digitalisation, work-life balance, skills shortage.' }
  ];

  // scenario = what the AI should role-play in "Practice now" (Russian, goes into the prompt)
  GT.TOPICS = {
    words: [
      { id: 'everyday', name: 'Everyday Core', desc: 'High-frequency verbs, adjectives and connectors: obwohl, trotzdem, erledigen.',
        scenario: 'разговор с соседом на лестнице о прошедшей неделе, планах и делах, которые ещё нужно сделать. Ты — сосед.' },
      { id: 'people', name: 'People, Family & Relationships', desc: 'Family, friends, character, feelings, life events.',
        scenario: 'день рождения, где я впервые знакомлюсь с семьёй друга. Ты — разговорчивая тётя моего друга.' },
      { id: 'home', name: 'Home & Living', desc: 'Flat, furniture, household, neighbours, moving.',
        scenario: 'просмотр квартиры (Wohnungsbesichtigung). Ты — арендодатель, я задаю вопросы об аренде, Nebenkosten и договоре.' },
      { id: 'food', name: 'Food, Shopping & Money', desc: 'Cooking, restaurants, shopping, prices, returns.',
        scenario: 'я возвращаю бракованный товар в магазин, а потом заказываю в ресторане. Ты — продавец, потом официант.' },
      { id: 'health', name: 'Health & Doctor', desc: 'Symptoms, doctor visits, pharmacy, insurance, sick leave.',
        scenario: 'приём у семейного врача (Hausarzt). Ты — врач; я пациент с симптомами, и мне нужен больничный (Krankschreibung) для работы.' },
      { id: 'work', name: 'Work & Career', desc: 'Applications, contracts, colleagues, office life.',
        scenario: 'собеседование в немецкой компании по IT-безопасности. Ты — тимлид, который проводит собеседование.' },
      { id: 'authorities', name: 'Authorities, Bank & Bureaucracy', desc: 'Bürgeramt, forms, bank, insurance, letters.',
        scenario: 'приём в Bürgeramt или в банке. Ты — сотрудник; мне нужно что-то оформить, и я объясняю свою ситуацию.' },
      { id: 'travel', name: 'Travel & Transport', desc: 'Trains, delays, tickets, hotels, directions.',
        scenario: 'мой поезд отменили, и я иду в сервисный центр Deutsche Bahn. Ты — сотрудник DB.' },
      { id: 'leisure', name: 'Leisure, Media & Culture', desc: 'Hobbies, sport, films, music, media, events.',
        scenario: 'планируем выходные с другом: кино, концерт или спорт. Ты — друг с другими предпочтениями.' },
      { id: 'society', name: 'Society, Nature & Education', desc: 'Environment, politics, school, studies, news.',
        scenario: 'обсуждение в обеденный перерыв с коллегой актуальной темы (экология, образование или цифровизация). Ты — коллега с другим мнением.' },

      // Curated B2 study themes for discussion and argumentation (work-related B2 themes live under `it`).
      { id: 'b2_psyche', level: 'b2', name: 'Wellbeing & Psychology', desc: 'Stress, burnout, emotions, habits, motivation.',
        scenario: 'разговор с другом после напряжённой рабочей недели. Я объясняю, что создаёт нагрузку, и сравниваю два способа восстановиться. Попроси меня сформулировать одну границу, которую можно обсудить с командой.' },
      { id: 'b2_medien', level: 'b2', name: 'Media & Digital Life', desc: 'News, social media, data privacy, disinformation.',
        scenario: 'интервью о публикации с большим охватом и сомнительным источником. Ты — журналист. Попроси меня оценить достоверность, объяснить, чего пока не хватает для вывода, и предложить, как редакция может исправить публикацию.' },
      { id: 'b2_umwelt', level: 'b2', name: 'Environment & Sustainability', desc: 'Climate, energy, consumption, mobility.',
        scenario: 'собрание жителей района. Ты ведёшь обсуждение двух вариантов для общественного центра — утеплить здание или запустить систему многоразовой упаковки в кафе. Попроси меня сравнить ожидаемый эффект и обосновать, какой вариант выбрать первым.' },
      { id: 'b2_wirtschaft', level: 'b2', name: 'Economy & Consumption', desc: 'Companies, markets, inflation, consumer rights.',
        scenario: 'разговор о покупке домашнего принтера. Ты консультант по потребительским вопросам. Я сравниваю цену, расходники и ремонт для двух моделей. Попроси меня объяснить, какая покупка выгоднее в долгосрочной перспективе.' },
      { id: 'b2_gesellschaft', level: 'b2', name: 'Society & Politics', desc: 'Integration, participation, values, debates.',
        scenario: 'открытая встреча о будущем районного центра. Ты представляешь город. Я объясняю, чьи интересы стоит учесть, и предлагаю, как вовлечь жителей в обсуждение и согласовать условия использования помещения.' },
      { id: 'b2_bildung', level: 'b2', name: 'Learning & Education', desc: 'Lifelong learning, studies, certificates, skills.',
        scenario: 'консультация по двум программам повышения квалификации. Я сравниваю условия поступления, учебную нагрузку и возможность зачесть прежние результаты. Попроси меня выбрать программу и назвать конкретную учебную цель.' },

      // B2 everyday topics: the B1 life situations taken one step deeper (contracts, conflicts, rights, science news).
      { id: 'b2_wohnen', level: 'b2', set: 'everyday', name: 'Housing & Neighbourhood', desc: 'Deposits, utility statements, rent increases, renovation, house rules and noise.',
        scenario: 'разговор с арендодателем: пришёл расчёт коммунальных платежей с большой доплатой, а ещё планируется ремонт дома и повышение аренды. Ты — арендодатель. Попроси меня объяснить, с чем я не согласен, и договориться о решении.' },
      { id: 'b2_beziehungen', level: 'b2', set: 'everyday', name: 'Relationships & Conflicts', desc: 'Misunderstandings, reproaches, consideration, making up and drifting apart.',
        scenario: 'разговор с близким другом после ссоры из-за недоразумения. Ты — этот друг, немного обижен. Попроси меня объяснить мою точку зрения, признать свою часть вины и предложить, как помириться.' },
      { id: 'b2_wissenschaft', level: 'b2', set: 'everyday', name: 'Science & Technology', desc: 'Research, studies, findings, AI, breakthroughs and their impact.',
        scenario: 'обсуждение научной новости об искусственном интеллекте с коллегой за обедом. Ты — коллега-скептик. Попроси меня пересказать результаты исследования, оценить их влияние на повседневную жизнь и назвать один этический риск.' },
      { id: 'b2_recht', level: 'b2', set: 'everyday', name: 'Rights & Paperwork', desc: 'Entitlements, deadlines, objections, residence permits, fines and liability.',
        scenario: 'консультация в бесплатной юридической приёмной (Rechtsberatung). Ты — консультант. Я получил штраф и письмо из ведомства с коротким сроком. Попроси меня описать ситуацию, выяснить, на что я имею право, и решить, стоит ли подавать возражение.' },
      { id: 'b2_gesundheit', level: 'b2', set: 'everyday', name: 'Health & Care', desc: 'Check-ups, specialists, side effects, sick notes, prevention and rehab.',
        scenario: 'приём у врача-специалиста. Ты — врач. Я описываю хронические жалобы и спрашиваю о побочных действиях лекарства. Попроси меня точно описать симптомы и договориться о дальнейших шагах, включая больничный.' },
      { id: 'b2_reisen', level: 'b2', set: 'everyday', name: 'Travel & Getting Around', desc: 'Connections, reductions, cancellations, diversions, compensation and entry rules.',
        scenario: 'стойка сервиса на вокзале: мой поезд отменили из-за перекрытия пути, а пересадку я уже не успею. Ты — сотрудник. Попроси меня объяснить ситуацию, выбрать альтернативный маршрут и узнать о компенсации.' },
      { id: 'b2_kultur', level: 'b2', set: 'everyday', name: 'Culture & Free Time', desc: 'Performances, reviews, audiences, volunteering, memberships and passions.',
        scenario: 'разговор с другом после театральной премьеры. Ты — друг, которому постановка не понравилась. Попроси меня описать спектакль, аргументированно возразить и рассказать, чем я сам увлекаюсь в свободное время.' }
    ],
    it: [
      { id: 'workcomm', name: 'Work & Office', desc: 'Meetings, emails, deadlines, tickets, feedback and office communication.',
        scenario: 'дейли-стендап, а потом короткое согласование задач и сроков с коллегой из другого отдела. Ты — коллега и скрам-мастер.' },
      { id: 'dev', name: 'IT & Development', desc: 'Code, releases, requirements, version control.',
        scenario: 'планирование спринта / код-ревью в немецкой команде разработки. Ты — product owner и разработчик.' },
      { id: 'infra', name: 'Infrastructure', desc: 'Servers, networks, outages, cloud.',
        scenario: 'созвон из-за сбоя: сервер упал. Ты — дежурный коллега из эксплуатации; мы решаем, что проверить и как сообщить пользователям.' },
      { id: 'security', name: 'Security', desc: 'Vulnerabilities, attacks, access, SOC, incidents.',
        scenario: 'я объясняю инцидент безопасности руководителю нетехнического отдела. Ты — этот руководитель, задаёшь простые, но настойчивые вопросы.' },
      // B2 career themes (were under Words until v38; ids kept so progress stays attached).
      { id: 'b2_beruf', level: 'b2', name: 'Career Paths (Berufswege)', desc: 'Career changes, further training, promotion, salary talks, self-employment.',
        scenario: 'карьерная консультация (Karriereberatung). Ты — коуч; я рассказываю о своём пути, о желании расти в кибербезопасности и о возможных переговорах о зарплате.' },
      { id: 'b2_arbeitswelt', level: 'b2', name: 'Changing World of Work', desc: 'Remote work, digitalisation, work-life balance, skills shortage.',
        scenario: 'переговоры о гибридном графике команды. Ты — HR-менеджер. Я предлагаю правила присутствия и доступности после работы. Попроси меня взвесить интересы команды и бизнеса и предложить компромисс.' }
    ],
    expressions: [
      { id: 'idioms', name: 'Idioms', group: 'Expressions', desc: 'Common B1–B2 German idioms and figurative expressions with literal vs real meaning.',
        scenario: 'неформальный разговор с немецким коллегой за кофе, где естественно звучат идиомы и образные выражения. Ты — коллега.' },
      { id: 'everyday', name: 'Everyday Phrases', group: 'Expressions', desc: 'High-frequency conversational phrases: Das kommt darauf an, Mal sehen, Das kriegen wir hin.',
        scenario: 'быстрый рабочий и бытовой диалог с коллегами в офисе и чате, где нужны живые короткие реплики. Ты — коллега.' }
    ],
    chunks: [
      { id: 'opinion', name: 'Giving your opinion', group: 'Everyday', scenario: 'дискуссия, в которой мне нужно высказать мнение на разные бытовые темы. Ты — любопытный коллега.' },
      { id: 'agree', name: 'Agreeing & disagreeing', group: 'Everyday', scenario: 'дружеский спор о том, что лучше — хоумофис или офис. Ты — коллега с противоположным мнением.' },
      { id: 'clarify', name: 'Asking for clarification', group: 'Everyday', scenario: 'сотрудник учреждения быстро объясняет мне сложный формуляр. Ты — сотрудник; мне нужно переспрашивать и уточнять.' },
      { id: 'complain', name: 'Complaining', group: 'Everyday', scenario: 'жалоба в управляющую компанию (Hausverwaltung) на сломанное отопление и шум. Ты — управляющий.' },
      { id: 'problem', name: 'Describing a problem', group: 'Everyday', scenario: 'звонок на горячую линию: купленная вещь не работает. Ты — сотрудник поддержки.' },
      { id: 'appointments', name: 'Making & changing appointments', group: 'Everyday', scenario: 'звонок в кабинет врача: записаться, а потом перенести приём. Ты — администратор.' },
      { id: 'phone', name: 'Phone calls', group: 'Everyday', scenario: 'звонок в фирму, где меня нужно соединить с нужным человеком. Ты — секретарь, потом этот человек.' },
      { id: 'email', name: 'Formal emails', group: 'Everyday', scenario: 'пишем вместе официальное письмо: ты даёшь ситуацию, я пишу письмо, ты отвечаешь как получатель.' },
      { id: 'smalltalk', name: 'Small talk', group: 'Everyday', scenario: 'смолтолк в понедельник утром на офисной кухне. Ты — коллега.' },
      { id: 'it_standup', name: 'Stand-up', group: 'IT', scenario: 'дейли-стендап. Ты — скрам-мастер и задаёшь уточняющие вопросы.' },
      { id: 'it_bug', name: 'Explaining a bug', group: 'IT', scenario: 'я сообщаю коллеге-разработчику о баге. Ты — разработчик, задаёшь точные вопросы.' },
      { id: 'it_help', name: 'Asking for help', group: 'IT', scenario: 'я застрял(а) на задаче и прошу помощи у опытного коллеги. Ты — этот коллега.' },
      { id: 'it_meeting', name: 'Disagreeing politely in meetings', group: 'IT', scenario: 'архитектурная встреча, где я не согласен(на) с предложенным решением. Ты — тимлид.' }
    ],
    grammar: [
      { id: 'wortstellung', name: 'Word order' },
      { id: 'perfekt', name: 'Perfekt vs Präteritum' },
      { id: 'nebensaetze', name: 'Subordinate clauses' },
      { id: 'relativsaetze', name: 'Relative clauses' },
      { id: 'konnektoren', name: 'Two-part connectors' },
      { id: 'konjunktiv2', name: 'Konjunktiv II' },
      { id: 'passiv', name: 'Passive' },
      { id: 'adjektive', name: 'Adjective declension' },
      { id: 'kasus', name: 'Cases & prepositions' },
      { id: 'verben_praep', name: 'Verbs + prepositions, da-/wo-' },
      { id: 'infinitiv', name: 'zu-infinitive, lassen, reflexive, n-declension, Futur I' }
    ]
  };

  // ROOTS tab: planned roots and prefixes (shown greyed until their data file exists).
  GT.ROOT_PLAN = ['bauen', 'stellen', 'ziehen', 'setzen', 'legen', 'nehmen', 'geben', 'halten', 'kommen', 'gehen',
    'schlagen', 'sprechen', 'sehen', 'fallen', 'stehen', 'tragen', 'führen', 'schreiben', 'brechen', 'laufen'];
  GT.PREFIX_PLAN = ['ab', 'auf', 'an', 'ver', 'aus', 'ein', 'mit', 'nach', 'vor', 'zu', 'um', 'über', 'durch',
    'be', 'er', 'ent', 'zer', 'ge', 'miss'];
  GT.TOPICS.roots = []; // filled at start-up from registered roots (for review filters / labels)

  GT.TOPICS.words.forEach(function (t) {
    t.level = t.level || 'b1';
    t.group = t.level !== 'b2' ? 'B1 · Goethe list' : t.set === 'everyday' ? 'B2 everyday topics' : 'B2 themes';
  });
  GT.TOPICS.it.forEach(function (t) { t.group = t.level === 'b2' ? 'B2 career themes' : 'Professional'; });
  GT.TOPICS.expressions.forEach(function (t) { t.group = 'Expressions'; });
  GT.TOPICS.grammar.forEach(function (t) { t.group = 'B1 grammar'; });

  GT.definePack('de', {
    features: { goetheB1: true, prefixDrill: true, ruLink: true, rootMapVerbs: true, stressPairs: true },
    proExtra: { label: 'B1 Workplace', tab: 'words', topic: 'work', name: 'Work & Career (B1)' },
    nounHint: 'noun · with article',
    levelName: 'B1',
    intro: {
      words: 'B1 topics follow the official Goethe B1 Wortliste. B2 themes train discussion and argument; B2 everyday topics take the B1 life situations one step deeper. Work-related B2 themes are under Professional.',
      it: 'Professional German for your job: Work & Office, IT & Development, Infrastructure, Security, and B2 career themes.',
      chunks: 'Ready-made phrases (Redemittel) for speaking and writing. Use the filter to get phrases for a specific situation.',
      expressions: 'Idioms, everyday conversational phrases, and ready-made Redemittel for natural German.',
      grammar: 'A compact B1 reference: short explanations, tables, examples, pitfalls, and quick drills you can add to Review.',
      roots: 'German word families, separable/inseparable prefixes, gender-determining suffixes, and classical Latin/Greek roots.'
    }
  });

  /* Topic helpers work on the ACTIVE pack (GT.TOPICS is a getter). */
  GT.topic = function (tab, id) {
    return (GT.TOPICS[tab] || []).find(function (t) { return t.id === id; }) || null;
  };
  // Find a topic by id in any tab (used for chunk topic tags like 'health').
  GT.anyTopic = function (id) {
    var tabs = ['words', 'it', 'chunks', 'expressions', 'grammar', 'roots'];
    for (var i = 0; i < tabs.length; i++) {
      var t = GT.topic(tabs[i], id);
      if (t) return { tab: tabs[i], topic: t };
    }
    return null;
  };
})();
