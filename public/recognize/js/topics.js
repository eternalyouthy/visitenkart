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
    { id: 'stats', label: 'Stats', short: 'Stats', icon: 'chart' },
    { id: 'literature', label: 'Literary Phrases', short: 'Literature', icon: 'book' }
  ];

  /* Main navigation: top tabs with hover/focus dropdowns (`items` for Language & Expressions; Professional uses proGroups()). */
  GT.NAV = [
    {
      id: 'language', label: 'Language', short: 'Grund', icon: 'book', href: '#/words',
      items: [
        { label: 'Words', href: '#/words', match: ['words'] },
        { label: 'Roots', href: '#/roots', match: ['roots'] },
        { label: 'Grammar', href: '#/grammar', match: ['grammar'] }
        // 4th item (Articles) comes from the shared "Which form?" engine: js/whichform.js + js/forms/de.js
      ]
    },
    {
      id: 'professional', label: 'Professional', short: 'Job', icon: 'shield', href: '#/professional',
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
        { label: 'B2 Career Paths', href: '#/it/b2_beruf', tab: 'it', topic: 'b2_beruf' },
        { label: 'B2 World of Work', href: '#/it/b2_arbeitswelt', tab: 'it', topic: 'b2_arbeitswelt' }
      ]
    },
    {
      id: 'expressions', label: 'Expressions', short: 'Phrases', icon: 'quote', href: '#/expressions',
      items: [
        { label: 'Chunks', href: '#/chunks', match: ['chunks'] },
        { label: 'Idioms', href: '#/expressions/idioms', tab: 'expressions', topic: 'idioms' },
        { label: 'Everyday Phrases', href: '#/expressions/everyday', tab: 'expressions', topic: 'everyday' },
        { label: 'Literary Phrases', href: '#/literature', match: ['literature'] }
      ]
    },
    { id: 'practice', label: 'Practice', short: 'Practice', icon: 'spark', href: '#/practice' }
  ];

  GT.PRO_SUBS = [
    // 01 · For Everyone
    { id: 'workcomm', group: 'for-everyone', tab: 'it', topic: 'workcomm', name: 'Work & Office', desc: 'Meetings, emails, deadlines, coordination, tickets and office communication.' },
    { id: 'clients', group: 'for-everyone', tab: 'it', topic: 'clients', name: 'Clients & Freelance', desc: 'Briefs, quotes, invoices, scope, retainers and client talks.' },
    { id: 'presentations', group: 'for-everyone', tab: 'it', topic: 'presentations', name: 'Presentations & Pitching', desc: 'Slide decks, structure, charts, transitions and handling Q&A.' },
    { id: 'b2_beruf', group: 'for-everyone', tab: 'it', topic: 'b2_beruf', name: 'B2 Career Paths', desc: 'Career changes, further training, promotion, salary talks, self-employment.' },
    { id: 'b2_arbeitswelt', group: 'for-everyone', tab: 'it', topic: 'b2_arbeitswelt', name: 'B2 World of Work', desc: 'Remote work, digitalisation, work-life balance, skills shortage.' },
    // 02 · IT Professions
    { id: 'dev', group: 'it', tab: 'it', topic: 'dev', name: 'IT & Development', desc: 'Code, releases, requirements, version control.' },
    { id: 'infra', group: 'it', tab: 'it', topic: 'infra', name: 'Infrastructure', desc: 'Servers, networks, outages, cloud.' },
    { id: 'security', group: 'it', tab: 'it', topic: 'security', name: 'Security', desc: 'Vulnerabilities, attacks, access, SOC, incidents.' },
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
      { id: 'design', name: 'Design, UX & Visuals', desc: 'Graphic design, typography, layout, contrast, branding and mockups.',
        scenario: 'дизайн-ревью макета нового сайта и логотипа с заказчиком. Ты — заказчик, я — графический и UX-дизайнер, который объясняет выбор шрифтов, сетки и контраста.' },
      { id: 'ai_data', name: 'AI, Data & Analytics', desc: 'Prompts, models, datasets, metrics, dashboards and automation.',
        scenario: 'обсуждение внедрения ИИ-ассистента и дашбордов в команде. Ты — менеджер, задаёшь вопросы о качестве данных, галлюцинациях модели и метриках.' },
      { id: 'product', name: 'Product & Agile', desc: 'Roadmaps, backlogs, sprints, user stories, prototypes and launches.',
        scenario: 'обсуждение дорожной карты продукта (Roadmap) и ретроспектива после запуска. Ты — продакт-менеджер, мы согласуем приоритеты и MVP.' },
      { id: 'clients', name: 'Clients & Freelance', desc: 'Briefs, quotes, invoices, scope, retainers and client talks.',
        scenario: 'звонок с потенциальным клиентом на фрилансе: обсуждаем бриф, смету, правки и сроки. Ты — клиент, который хочет добавить больше задач в исходный бюджет.' },
      { id: 'presentations', name: 'Presentations & Pitching', desc: 'Slide decks, structure, charts, transitions and handling Q&A.',
        scenario: 'репетиция презентации проекта перед руководством (Q&A). Ты — слушатель, задаёшь каверзные вопросы по графикам и итогам.' },
      // B2 career themes (were under Words until v38; ids kept so progress stays attached).
      { id: 'b2_beruf', level: 'b2', name: 'Career Paths (Berufswege)', desc: 'Career changes, further training, promotion, salary talks, self-employment.',
        scenario: 'карьерная консультация (Karriereberatung). Ты — коуч; я рассказываю о своём пути, о желании расти в кибербезопасности и о возможных переговорах о зарплате.' },
      { id: 'b2_arbeitswelt', level: 'b2', name: 'Changing World of Work', desc: 'Remote work, digitalisation, work-life balance, skills shortage.',
        scenario: 'переговоры о гибридном графике команды. Ты — HR-менеджер. Я предлагаю правила присутствия и доступности после работы. Попроси меня взвесить интересы команды и бизнеса и предложить компромисс.' },
      { id: 'bureau_offices', level: 'b2', name: 'Public Offices & Permits', desc: 'Authorities, permits, official decisions, appeals, jurisdiction and administrative procedures.',
        scenario: 'приём в ведомстве (Amt / Behörde): обсуждаем официальное решение (Bescheid), исключение из правил и подачу возражения в срок. Ты — сотрудник ведомства.' },
      { id: 'bureau_tax', level: 'b2', name: 'Taxes, Payroll & Social Security', desc: 'Tax assessments, withholding, deductions, social contributions, payroll and fiscal audits.',
        scenario: 'разговор с налоговым консультантом о налоговом уведомлении, вычетах, расчёте зарплаты и налоговой проверке. Ты — налоговый консультант.' },
      { id: 'bureau_docs', level: 'b2', name: 'Official Correspondence & Records', desc: 'Formal letters, registered mail, power of attorney, notarisation, dunning and statutory retention.',
        scenario: 'подача нотариальной доверенности и ответ на официальное предупреждение об оплате с заказным письмом. Ты — делопроизводитель.' },
      { id: 'legal_contracts', level: 'b2', name: 'Contracts & Civil Law', desc: 'Clauses, breach, liability, indemnification, force majeure, limitation periods and settlements.',
        scenario: 'согласование коммерческого договора: обсуждаем ответственность, неустойку, гарантию, форс-мажор и досудебное урегулирование. Ты — юрист контрагента.' },
      { id: 'legal_ip', level: 'b2', name: 'Copyright & Intellectual Property', desc: 'Copyright, licensing, trademarks, patents, infringement, cease-and-desist letters and trade secrets.',
        scenario: 'ответ на претензию о нарушении авторских прав и лицензии на ПО/контент. Ты — юрист по интеллектуальной собственности.' },
      { id: 'legal_criminal', level: 'b2', name: 'Criminal Law & Courts', desc: 'Indictment, prosecution, defence, remand, fraud, verdicts, sentencing and appeals.',
        scenario: 'консультация с адвокатом по делу об экономическом правонарушении: обвинение, показания свидетелей, смягчающие обстоятельства и приговор. Ты — адвокат.' },
      { id: 'legal_labour', level: 'b2', name: 'Employment & Labour Law', desc: 'Unfair dismissal, non-compete clauses, works councils, tribunals, severance and workplace rights.',
        scenario: 'переговоры о соглашении сторон при увольнении, выходном пособии и пункте о неконкуренции. Ты — юрист по трудовому праву.' },
      { id: 'legal_corporate', level: 'b2', name: 'Compliance, Privacy & Corporate', desc: 'GDPR/data protection, due diligence, anti-money laundering, whistleblowing, governance and insolvency.',
        scenario: 'аудит комплаенса: защита персональных данных, конфликт интересов и проверка благонадёжности. Ты — комплаенс-офицер.' },
      { id: 'svc_hotel', level: 'b2', name: 'Hotels & Front Desk', desc: 'Reception, overbooking, upgrades, deposits, housekeeping, concierge and shift handovers.',
        scenario: 'ситуация овербукинга на ресепшене отеля: предлагаю гостю апгрейд или размещение в партнёрском отеле. Ты — недовольный гость.' },
      { id: 'svc_gastro', level: 'b2', name: 'Gastronomy & Catering', desc: 'Allergens, food hygiene, dietary requests, kitchen brigade, service flow and billing.',
        scenario: 'обслуживание гостя с тяжёлой аллергией и согласование банкета на кухне. Ты — гость или старший смены.' },
      { id: 'svc_retail', level: 'b2', name: 'Retail, Sales & Customer Support', desc: 'Stocktake, warranty claims, goodwill gestures, de-escalation, SLA and cash reconciliation.',
        scenario: 'деэскалация конфликта с покупателем по гарантии и оформление возврата или жеста доброй воли. Ты — недовольный клиент.' },
      { id: 'fin_accounting', level: 'b2', name: 'Accounting & Finance', desc: 'Balance sheets, receivables/payables, accruals, depreciation, liquidity, VAT and audit trails.',
        scenario: 'закрытие квартала с аудитором: обсуждаем баланс, дебиторскую задолженность, начисления и ликвидность. Ты — внешний аудитор.' },
      { id: 'fin_marketing', level: 'b2', name: 'Sales, Marketing & PR', desc: 'Lead generation, sales funnels, press releases, crisis PR, brand positioning and market share.',
        scenario: 'планирование антикризисного пресс-релиза, позиционирования бренда и воронки продаж. Ты — руководитель PR-отдела.' },
      { id: 'fin_hr', level: 'b2', name: 'HR & Recruiting', desc: 'Talent acquisition, screening, employer branding, succession planning, retention and appraisals.',
        scenario: 'обсуждение шорт-листа кандидатов, компенсационного пакета и итогов exit-интервью с нанимающим директором. Ты — директор.' },
      { id: 'med_clinical', level: 'b2', name: 'Healthcare & Clinical Work', desc: 'Triage, patient history, ward rounds, discharge notes, informed consent, dosage and confidentiality.',
        scenario: 'передача пациента на обходе и получение информированного согласия перед процедурой. Ты — старший врач.' },
      { id: 'ops_logistics', level: 'b2', name: 'Logistics & Supply Chain', desc: 'Freight, customs clearance, dispatch, order picking, cold chain, lead times and inventory.',
        scenario: 'разбор задержки партии с температурным режимом на таможне. Ты — таможенный брокер или экспедитор.' },
      { id: 'ops_trades', level: 'b2', name: 'Engineering, Construction & Trades', desc: 'Blueprints, commissioning, site safety, defect liability, tolerances, maintenance and retrofits.',
        scenario: 'приёмка объекта: проверка допусков по чертежам, устранение дефектов и ввод оборудования в эксплуатацию. Ты — инженер-приёмщик.' }
    ],
    expressions: [
      { id: 'idioms', name: 'Idioms', group: 'Expressions', desc: 'Common B1–B2 German idioms and figurative expressions with literal vs real meaning.',
        scenario: 'неформальный разговор с немецким коллегой за кофе, где естественно звучат идиомы и образные выражения. Ты — коллега.' },
      { id: 'everyday', name: 'Everyday Phrases', group: 'Expressions', desc: 'High-frequency conversational phrases: Das kommt darauf an, Mal sehen, Das kriegen wir hin.',
        scenario: 'быстрый рабочий и бытовой диалог с коллегами в офисе и чате, где нужны живые короткие реплики. Ты — коллега.' }
    ],
    literature: [
      { id: 'love', name: 'Love & Devotion', group: 'Literary themes', desc: 'Affection, infatuation, quiet tenderness and the sharp edge of passion.',
        scenario: { ru: 'откровенный разговор с начитанным немецким другом о чувствах и отношениях, где уместны точные литературные обороты без пафоса. Ты — этот друг.', en: 'a candid conversation with a well-read German friend about love and relationships where literary turns of phrase fit naturally without melodrama. You are that friend.' } },
      { id: 'longing', name: 'Longing & Melancholy', group: 'Literary themes', desc: 'Restlessness, solitude, homesickness and quiet inner ache.',
        scenario: { ru: 'поздний разговор с другом в кафе о переменах, усталости, ностальгии и поисках себя. Ты — друг.', en: 'a late-evening café talk with a friend about restlessness, fatigue, nostalgia and searching for direction. You are the friend.' } },
      { id: 'atmosphere', name: 'Atmosphere & Description', group: 'Literary themes', desc: 'Vivid ways to describe weather, light, rooms, silence, faces and moods.',
        scenario: { ru: 'обсуждаем книгу, фильм или странный дождливый вечер в городе, описывая атмосферу и детали. Ты — собеседник.', en: 'talking about a book, film or strange rainy evening in the city, describing atmosphere and small details. You are my conversation partner.' } },
      { id: 'irony', name: 'Irony & Human Nature', group: 'Literary themes', desc: 'Dry wit, social satire and sharp observations on vanity, habit and absurdity.',
        scenario: { ru: 'ироничный обмен мнениями с коллегой или другом о бюрократии, людских привычках и нелепых ситуациях. Ты — собеседник.', en: 'a wry exchange with a friend or colleague about bureaucracy, human vanity and everyday absurdity. You are my conversation partner.' } },
      { id: 'fate', name: 'Time, Fate & Turning Points', group: 'Literary themes', desc: 'Memory, passing time, illusions, resolve and moments that change everything.',
        scenario: { ru: 'разговор о решении, которое меняет жизнь, о прошлом и о том, что нельзя вернуть назад. Ты — близкий друг.', en: 'a conversation about a turning point, memory and choices that cannot be undone. You are a close friend.' } }
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
    PRO_GROUPS: [
      { key: 'for-everyone', title: 'For Everyone', badge: 'Start here', desc: 'Essential for every profession: office communication, meetings, clients, presentations, careers and modern work. Complete this track first, then pick your field below.' },
      { key: 'it', title: 'IT Professions', desc: 'Software engineering, cloud infrastructure, cybersecurity, UX design, AI/data and agile product work.' },
      { key: 'bureaucracy', title: 'Bureaucracy & Administration', desc: 'Public offices, permits, taxes, payroll, social security, official notices and formal records (B2–C2).' },
      { key: 'legal', title: 'Legal & Law', desc: 'Contracts, intellectual property, criminal law & courts, labour law and corporate compliance (B2–C2).' },
      { key: 'service', title: 'Service, Hospitality & Retail', desc: 'Hotels & front desk, gastronomy & catering, retail sales and customer support (B2–C1).' },
      { key: 'business', title: 'Finance, HR & Marketing', desc: 'Accounting & finance, sales, marketing & PR, recruiting and HR operations (B2–C2).' },
      { key: 'operations', title: 'Healthcare, Logistics & Trades', desc: 'Clinical healthcare, logistics & supply chain, engineering, construction and technical trades (B2–C2).' }
    ],
    proExtra: { group: 'for-everyone', label: 'B1 Workplace', tab: 'words', topic: 'work', name: 'Work & Career (B1)', desc: 'Applications, contracts, colleagues and core B1 workplace vocabulary.' },
    nounHint: 'noun · with article',
    levelName: 'B1',
    intro: {
      words: 'B1 topics follow the official Goethe B1 Wortliste. B2 themes train discussion and argument; B2 everyday topics take the B1 life situations one step deeper. Work-related B2 themes are under Professional.',
      it: 'Professional German (B1–C2) across 7 tracks: universal workplace basics first, followed by IT, bureaucracy, law, hospitality, finance, healthcare and trades.',
      chunks: 'Ready-made phrases (Redemittel) for speaking and writing. Use the filter to get phrases for a specific situation.',
      expressions: 'Idioms, Berlin street slang, everyday conversational phrases, ready-made Redemittel and classic literary expressions.',
      literature: 'Lines from German literature with a short explanation of their meaning and examples.',
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
    var tabs = ['words', 'it', 'chunks', 'expressions', 'literature', 'grammar', 'roots'];
    for (var i = 0; i < tabs.length; i++) {
      var t = GT.topic(tabs[i], id);
      if (t) return { tab: tabs[i], topic: t };
    }
    return null;
  };
})();
