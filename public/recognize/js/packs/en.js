/* English pack adapter.
 * The English catalogue in english/ (ETEnglish: canonical entries, families, affixes, classical roots, grammar,
 * sections/topics) is loaded unchanged, then mapped here into the shared engine. Entry IDs are kept exactly
 * (en:<headword>:<pos>:<sense>), so progress keys stay <id>#rec / <id>#prod. Grammar keeps 'grammar:<id>' (recognition)
 * and adds 'grammar:<id>~prod' (production); affix exercises keep 'affix:<id>' (recognition only).
 * English content agents keep editing english/data/*.js exactly as before. */
(function () {
  'use strict';
  var E = self.ETEnglish;
  if (!E) { GT._target && GT._target.loadErrors.push('ETEnglish catalogue missing'); return; }
  try { E.validate(); } catch (e) { /* validation errors are reported in Settings → Data */ }

  var POS = { v: 'verb', n: 'noun', adj: 'adj', adv: 'adv', phr: 'phrasal verb', chunk: 'phrase' };
  function sentenceOne(s) { var m = /^(.+?[.!?])(\s|$)/.exec(String(s || '')); return m ? m[1] : String(s || ''); }
  function escHTML(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* ---- topic layout (interface names/descriptions English; scenarios are Russian learning content) ---- */
  var DESC = {
    'words.everyday': 'Errands, decisions, options and explaining everyday situations.',
    'words.people': 'Family, friends, character, feelings, relationships.',
    'words.home': 'Renting, neighbours, repairs and sharing a flat.',
    'words.food': 'Food, shopping, prices and returns.',
    'words.health': 'Appointments, symptoms and medical services.',
    'words.work': 'Applications, contracts, colleagues, office life.',
    'words.authorities': 'Offices, forms, banks, insurance and official letters.',
    'words.travel': 'Trains, delays, tickets, hotels, directions.',
    'words.leisure': 'Hobbies, sport, films, music, events.',
    'words.society': 'Environment, politics, school, news.',
    'it.career-paths': 'Career changes, training, promotion, salary talks.',
    'it.world-of-work': 'Remote work, digitalisation, skills shortage.',
    'words.wellbeing': 'Stress, burnout, emotions, habits, motivation.',
    'words.digital-life': 'News, social media, privacy, disinformation.',
    'words.environment': 'Climate, energy, consumption, mobility.',
    'words.economy': 'Companies, markets, prices, consumer rights.',
    'words.society-politics': 'Participation, values, public debate.',
    'words.education': 'Lifelong learning, studies, certificates, skills.',
    'it.work': 'Meetings, emails, deadlines, tickets and office communication.',
    'it.dev': 'Code, releases, requirements, version control.',
    'it.infra': 'Servers, networks, outages, cloud.',
    'it.security': 'Vulnerabilities, attacks, access, SOC, incidents.',
    'it.design': 'Graphic design, typography, layout, contrast, branding and mockups.',
    'it.ai_data': 'Prompts, models, datasets, metrics, dashboards and automation.',
    'it.product': 'Roadmaps, backlogs, sprints, user stories, prototypes and launches.',
    'it.clients': 'Briefs, quotes, invoices, scope, retainers and client talks.',
    'it.presentations': 'Slide decks, structure, charts, transitions and handling Q&A.',
    'it.business': 'Negotiation, clients, budgets and business correspondence (B2).',
    'it.bureau_offices': 'Authorities, permits, official decisions, appeals, jurisdiction and administrative procedures.',
    'it.bureau_tax': 'Tax assessments, withholding, deductions, social contributions, payroll and fiscal audits.',
    'it.bureau_docs': 'Formal letters, registered mail, power of attorney, notarisation, dunning and statutory retention.',
    'it.legal_contracts': 'Clauses, breach, liability, indemnification, force majeure, limitation periods and settlements.',
    'it.legal_ip': 'Copyright, licensing, trademarks, patents, infringement, cease-and-desist letters and trade secrets.',
    'it.legal_criminal': 'Indictment, prosecution, defence, remand, fraud, verdicts, sentencing and appeals.',
    'it.legal_labour': 'Unfair dismissal, non-compete clauses, works councils, tribunals, severance and workplace rights.',
    'it.legal_corporate': 'GDPR/data protection, due diligence, anti-money laundering, whistleblowing, governance and insolvency.',
    'it.svc_hotel': 'Reception, overbooking, upgrades, deposits, housekeeping, concierge and shift handovers.',
    'it.svc_gastro': 'Allergens, food hygiene, dietary requests, kitchen brigade, service flow and billing.',
    'it.svc_retail': 'Stocktake, warranty claims, goodwill gestures, de-escalation, SLA and cash reconciliation.',
    'it.fin_accounting': 'Balance sheets, receivables/payables, accruals, depreciation, liquidity, VAT and audit trails.',
    'it.fin_marketing': 'Lead generation, sales funnels, press releases, crisis PR, brand positioning and market share.',
    'it.fin_hr': 'Talent acquisition, screening, employer branding, succession planning, retention and appraisals.',
    'it.med_clinical': 'Triage, patient history, ward rounds, discharge notes, informed consent, dosage and confidentiality.',
    'it.ops_logistics': 'Freight, customs clearance, dispatch, order picking, cold chain, lead times and inventory.',
    'it.ops_trades': 'Blueprints, commissioning, site safety, defect liability, tolerances, maintenance and retrofits.',
    'expressions.idioms': 'Common B1–B2 English idioms with literal vs real meaning.',
    'expressions.everyday': 'High-frequency conversational phrases for quick replies and arrangements.'
  };
  var SECTION_TAB = { words: 'words', professional: 'it', chunks: 'chunks', idioms: 'expressions', 'everyday-phrases': 'expressions', it: 'it' };
  var LEGACY_IT = { dev: 'dev', infra: 'infra', security: 'security', workcomm: 'work' };
  var WORK_B2 = { 'career-paths': true, 'world-of-work': true };
  function topicId(sectionId, t) {
    if (sectionId === 'idioms') return 'idioms-' + t.id;
    if (sectionId === 'everyday-phrases') return 'everyday-' + t.id;
    if (sectionId === 'it') return LEGACY_IT[t.id] || t.id;
    return t.id;
  }

  var TOPICS = { words: [], it: [], chunks: [], expressions: [], literature: [], grammar: [], roots: [] };
  var membership = {};   // entry id -> [[tab, topic], ...]
  E.sections.forEach(function (sec) {
    var secTab = SECTION_TAB[sec.id];
    if (!secTab) return;
    sec.topics.forEach(function (t) {
      var id = topicId(sec.id, t);
      // Work-related B2 study themes are shown under Professional, not Language → Words.
      var tab = secTab === 'words' && WORK_B2[id] ? 'it' : secTab;
      if (sec.id !== 'it') {
        var group = tab === 'words' ? (t.group === 'B2 study themes' ? 'B2 themes' : 'B1–B2 core topics')
          : tab === 'chunks' ? (t.group === 'IT communication' ? 'IT' : 'Everyday')
          : tab === 'it' ? (WORK_B2[id] ? 'B2 career themes' : 'Professional')
          : sec.id === 'idioms' ? 'Idioms' : 'Everyday Phrases';
        TOPICS[tab].push({
          id: id, name: t.label, desc: DESC[tab + '.' + id] || '', scenario: t.scenario, group: group,
          level: t.group === 'B2 study themes' || id === 'business' ? 'b2' : 'b1', key: t.key
        });
      }
      t.entryIds.forEach(function (eid) { (membership[eid] || (membership[eid] = [])).push([tab, id]); });
    });
  });
  // Union topics behind the Idioms / Everyday Phrases menu entries (hidden from lists; sub-topics stay visible).
  TOPICS.expressions.push({ id: 'idioms', name: 'Idioms', desc: DESC['expressions.idioms'], hidden: true, group: 'Idioms',
    scenario: 'неформальный разговор с коллегой за кофе, где естественно звучат идиомы. Ты — коллега.' });
  TOPICS.expressions.push({ id: 'everyday', name: 'Everyday Phrases', desc: DESC['expressions.everyday'], hidden: true, group: 'Everyday Phrases',
    scenario: 'быстрый рабочий и бытовой диалог с коллегами, где нужны живые короткие реплики. Ты — коллега.' });
  TOPICS.literature = [
    { id: 'love', name: 'Love & Devotion', group: 'Literary themes', desc: 'Affection, infatuation, quiet tenderness and the sharp edge of passion.',
      scenario: { ru: 'откровенный разговор с начитанным другом из Великобритании о любви и близости, где литературные обороты звучат естественно, без наигранности. Ты — друг.', de: 'ein offenes Gespräch mit einem belesenen englischsprachigen Freund über Liebe und Nähe, in dem literarische Wendungen ganz natürlich klingen. Du bist dieser Freund.' } },
    { id: 'longing', name: 'Longing & Melancholy', group: 'Literary themes', desc: 'Restlessness, solitude, homesickness and quiet inner ache.',
      scenario: { ru: 'вечерний разговор с другом в кафе об усталости, ностальгии и ощущении времени. Ты — друг.', de: 'ein ruhiges Café-Gespräch über Fernweh, Müdigkeit, Nostalgie und das Gefühl vergehender Zeit. Du bist ein Freund.' } },
    { id: 'atmosphere', name: 'Atmosphere & Description', group: 'Literary themes', desc: 'Vivid ways to describe weather, light, rooms, silence, faces and moods.',
      scenario: { ru: 'обсуждаем книгу или странный дождливый вечер в городе, точно описывая атмосферу и детали. Ты — собеседник.', de: 'wir sprechen über ein Buch oder einen seltsamen grauen Abend und beschreiben Atmosphäre und Details. Du bist mein Gesprächspartner.' } },
    { id: 'irony', name: 'Irony & Human Nature', group: 'Literary themes', desc: 'Dry wit, social satire and sharp observations on vanity, habit and absurdity.',
      scenario: { ru: 'ироничная беседа о бюрократии, светских привычках и парадоксах повседневной жизни. Ты — собеседник с сухим британским юмором.', de: 'ein ironisches Gespräch über Bürokratie, Eitelkeit und Absurditäten des Alltags. Du bist ein Gesprächspartner mit trockenem Humor.' } },
    { id: 'fate', name: 'Time, Fate & Turning Points', group: 'Literary themes', desc: 'Memory, passing time, illusions, resolve and moments that change everything.',
      scenario: { ru: 'разговор о поворотном моменте, памяти и решениях, после которых назад дороги нет. Ты — близкий друг.', de: 'ein Gespräch über Wendepunkte, Erinnerung und Entscheidungen, die alles verändern. Du bist ein enger Freund.' } }
  ];
  TOPICS.words.push({ id: 'catalogue', name: 'Other catalogue entries', desc: 'Entries that belong only to a word family.', hidden: true, group: 'Catalogue' });

  /* ---- entries ---- */
  function cefrInfo(w) {
    var c = w.cefr || {};
    var lvl = c.level ? 'CEFR ' + c.level + ' (' + (c.status || 'estimate') + (c.scope ? ', ' + c.scope : '') + ')' : 'No dictionary CEFR label';
    var target = w.courseLevel ? ' · study target ' + w.courseLevel : '';
    var src = [];
    (c.ratings || []).forEach(function (r) { src.push({ title: (r.provider || r.title || 'Source') + ': ' + r.level + (r.scope ? ' (' + r.scope + ')' : ''), url: r.url }); });
    (w.sources || []).forEach(function (s) { src.push({ title: s.title, url: s.url }); });
    return { summary: lvl + target + (c.conflict ? ' · sources disagree' : ''), sources: src };
  }
  var conv = {};
  Object.keys(E.entries).forEach(function (id) {
    var w = E.entries[id], m = w.morphology || {};
    var note = w.usage || '';
    if (typeof w.why === 'string' && w.why && w.why !== w.usage) note = note ? note + ' ' + w.why : w.why;
    var it = {
      id: id, pos: POS[w.pos] || w.pos, t: w.headword, ru: w.ru,
      type: w.pos === 'chunk' ? 'chunk' : 'word',
      examples: (w.examples || []).map(function (e) { return { t: e.en, ru: e.ru }; }),
      note: note,
      structNote: m.note && m.note !== w.usage && m.relation !== 'lexical-chunk' ? m.note : '',
      parts: m.parts && m.parts.length > 1 ? m.parts.map(function (p) { return [p, '']; }) : null,
      transparency: w.transparency,
      level: (w.cefr && w.cefr.level) || w.courseLevel || null,
      learnable: E.isCoreLevel ? E.isCoreLevel(w) : true,
      derivFrom: m.parentId || null,
      core: !!w.core,
      cefrInfo: cefrInfo(w),
      sense: w.sense
    };
    if (w.variations) it.variations = w.variations.map(function (v) { return { t: v.en, ru: v.ru }; });
    if (w.pos === 'chunk') it.register = w.register || 'neutral';
    conv[id] = it;
  });

  var placed = {};
  Object.keys(conv).forEach(function (id) {
    var ms = membership[id];
    if (!ms || !ms.length) return;
    var it = conv[id];
    it.tab = ms[0][0]; it.topic = ms[0][1];
    it.alsoIn = ms.slice(1);
    placed[id] = true;
  });
  // Register by topic order so Browse lists follow the original topic order.
  var order = [];
  E.sections.forEach(function (sec) { sec.topics.forEach(function (t) { t.entryIds.forEach(function (eid) { if (placed[eid] && order.indexOf(eid) < 0) order.push(eid); }); }); });
  GT.register({ items: order.map(function (id) { return conv[id]; }) });
  // Union memberships for the menu topics.
  order.forEach(function (id) {
    (membership[id] || []).forEach(function (m) {
      if (m[0] === 'expressions') GT.addMember(id, 'expressions', /^idioms-/.test(m[1]) ? 'idioms' : 'everyday');
    });
  });

  /* ---- word families -> roots ---- */
  var ROOT_PLAN = [];
  E.families.forEach(function (f) {
    var base = E.entries[f.base.entryId];
    var words = f.entryIds.map(function (id) {
      var it = conv[id];
      if (!placed[id]) { it.tab = 'roots'; it.topic = f.id; }
      it.base = id === f.base.entryId;
      return it;
    });
    GT.registerRoot({ id: f.id, verb: base ? base.headword : f.id, t: base ? base.headword : f.id, label: f.label, ru: f.ru, note: f.note, words: words, group: 'Word-building families' });
    ROOT_PLAN.push(f.id);
  });
  // Anything not in a topic or family (rare) stays browsable in the catalogue.
  var rest = Object.keys(conv).filter(function (id) { return !GT.packs.en.byId[id]; }).map(function (id) { var it = conv[id]; it.tab = 'words'; it.topic = 'catalogue'; return it; });
  if (rest.length) GT.register({ items: rest });

  /* ---- affixes ---- */
  var PREFIX_PLAN = [];
  function exampleFromEntry(x) {
    var w = x.entryId && E.entries[x.entryId];
    return w ? { t: w.headword, ru: w.ru, entryId: x.entryId } : { t: x.headword || '', url: x.url };
  }
  E.affixes.forEach(function (a) {
    var id = a.id.replace(/^affix:/, '');
    var ref = {
      id: id, label: a.label, kind: a.kind, ru: a.ru, pattern: a.pattern, posChange: a.posChange, spelling: a.spelling,
      exceptions: a.exceptions, limitations: a.limitations, productivity: a.productivity,
      examples: (a.examples || []).map(exampleFromEntry), exercise: a.exercise, drillId: a.id
    };
    if (a.exercise) {
      GT.registerDrill({ id: a.id, kind: 'choice', q: a.exercise.question, options: a.exercise.options.slice(),
        answer: a.exercise.options.indexOf(a.exercise.answer), explain: a.exercise.explain }, 'roots', 'affixes');
    }
    if (a.kind === 'prefix') { GT.registerPrefix(ref); PREFIX_PLAN.push(id); }
    else GT.registerSuffix(ref);
  });

  /* ---- classical roots ---- */
  E.classical.forEach(function (c) {
    var src = (c.sources || [])[0];
    GT.registerClassical({
      id: c.id.replace(/^classical:/, ''), label: c.label, origin: c.origin, ru: c.ru, history: c.history, limitations: c.limitations,
      examples: (c.examples || []).map(function (x) {
        var hit = Object.keys(E.entries).filter(function (k) { return E.entries[k].headword === x.headword; })[0];
        return hit ? { t: x.headword, ru: E.entries[hit].ru, entryId: hit } : { t: x.headword, url: x.url };
      }),
      source: src ? src.title + (src.url ? ' — ' + src.url : '') : ''
    });
  });

  /* ---- grammar: one page per English grammar exercise, recognition + production drills ---- */
  E.grammar.forEach(function (g) {
    var id = g.id.replace(/^grammar:/, '');
    var drills = [{ id: g.id, kind: 'choice', q: g.question, options: g.options.slice(), answer: g.options.indexOf(g.answer), explain: g.explain }];
    if (g.production) {
      drills.push({ id: g.id + '~prod', kind: 'gap', q: g.production.question, answer: g.production.answer,
        accepted: (g.production.acceptedAnswers || []).concat(E.accepted ? E.accepted(g.production.answer) : []), explain: g.production.explain });
    }
    var srcHref = g.source && /^https?:\/\//i.test(String(g.source).trim()) ? String(g.source).trim() : '';
    GT.registerGrammar({
      id: id, title: g.label, level: g.level, summary: sentenceOne(g.ru),
      explanation: '<p>' + escHTML(g.ru) + '</p>' + (g.source ? '<p class="mono-muted" style="font-size:12px">Reference: ' + (srcHref ? '<a href="' + escHTML(srcHref) + '" target="_blank" rel="noopener noreferrer">' + escHTML(srcHref.replace(/^https?:\/\//i, '').split('/')[0]) + '</a>' : escHTML(g.source)) + '</p>' : ''),
      examples: g.example ? [{ t: g.example, ru: g.translation }] : [],
      drills: drills
    });
    TOPICS.grammar.push({ id: id, name: g.label, level: g.level });
  });

  // Cross-disciplinary, domain & advanced (B2–C2) Professional topics
  [
    { id: 'design', name: 'Design, UX & Visuals', scenario: 'дизайн-ревью макета и фирменного стиля с заказчиком. Ты — заказчик, я объясняю выбор типографики, сетки, контраста и макета.' },
    { id: 'ai_data', name: 'AI, Data & Analytics', scenario: 'обсуждение внедрения ИИ-инструмента и аналитики данных. Ты — менеджер, спрашиваешь про промпты, точность модели, смещение данных и метрики.' },
    { id: 'product', name: 'Product & Agile', scenario: 'обсуждение дорожной карты продукта, MVP и ретроспективы спринта. Ты — продакт-менеджер.' },
    { id: 'clients', name: 'Clients & Freelance', scenario: 'переговоры с клиентом на фрилансе по брифу, смете, правкам и счёту. Ты — клиент.' },
    { id: 'presentations', name: 'Presentations & Pitching', scenario: 'тренировка презентации проекта и секции вопросов и ответов (Q&A). Ты — аудитория.' },
    { id: 'bureau_offices', level: 'b2', name: 'Public Offices & Permits', scenario: 'приём в ведомстве по поводу официального решения, исключения и подачи апелляции в срок. Ты — инспектор.' },
    { id: 'bureau_tax', level: 'b2', name: 'Taxes, Payroll & Social Security', scenario: 'разбор налогового уведомления, вычетов и налоговой проверки с консультантом. Ты — налоговый консультант.' },
    { id: 'bureau_docs', level: 'b2', name: 'Official Correspondence & Records', scenario: 'оформление доверенности, заказной корреспонденции и ответ на официальное напоминание об оплате. Ты — сотрудник канцелярии.' },
    { id: 'legal_contracts', level: 'b2', name: 'Contracts & Civil Law', scenario: 'переговоры по коммерческому договору: нарушение условий, ответственность, гарантия и форс-мажор. Ты — юрист второй стороны.' },
    { id: 'legal_ip', level: 'b2', name: 'Copyright & Intellectual Property', scenario: 'разбор претензии о нарушении авторских прав, лицензий и товарного знака. Ты — юрист по IP.' },
    { id: 'legal_criminal', level: 'b2', name: 'Criminal Law & Courts', scenario: 'консультация с адвокатом по обвинительному акту, показаниям свидетелей и смягчающим обстоятельствам. Ты — адвокат.' },
    { id: 'legal_labour', level: 'b2', name: 'Employment & Labour Law', scenario: 'обсуждение незаконного увольнения, соглашения о расторжении и запрета на конкуренцию. Ты — юрист по трудовому праву.' },
    { id: 'legal_corporate', level: 'b2', name: 'Compliance, Privacy & Corporate', scenario: 'аудит комплаенса: защита данных, конфликт интересов, противодействие отмыванию средств и управление рисками. Ты — аудитор.' },
    { id: 'svc_hotel', level: 'b2', name: 'Hotels & Front Desk', scenario: 'решение ситуации овербукинга на стойке регистрации отеля и согласование апгрейда. Ты — гость отеля.' },
    { id: 'svc_gastro', level: 'b2', name: 'Gastronomy & Catering', scenario: 'обсуждение пищевых аллергенов, гигиены и координации зала с кухней в час пик. Ты — гость с аллергией.' },
    { id: 'svc_retail', level: 'b2', name: 'Retail, Sales & Customer Support', scenario: 'деэскалация претензии клиента по гарантии и согласование компенсации. Ты — недовольный покупатель.' },
    { id: 'fin_accounting', level: 'b2', name: 'Accounting & Finance', scenario: 'закрытие финансового квартала с аудитором: баланс, дебиторская задолженность и ликвидность. Ты — аудитор.' },
    { id: 'fin_marketing', level: 'b2', name: 'Sales, Marketing & PR', scenario: 'подготовка антикризисного пресс-релиза, позиционирования бренда и воронки лидов. Ты — директор по PR.' },
    { id: 'fin_hr', level: 'b2', name: 'HR & Recruiting', scenario: 'обсуждение шорт-листа кандидатов, компенсационного пакета и причин текучести кадров. Ты — нанимающий руководитель.' },
    { id: 'med_clinical', level: 'b2', name: 'Healthcare & Clinical Work', scenario: 'передача пациента на обходе и получение информированного согласия. Ты — старший врач.' },
    { id: 'ops_logistics', level: 'b2', name: 'Logistics & Supply Chain', scenario: 'разбор задержки рефрижераторного груза на таможенном оформлении. Ты — таможенный брокер.' },
    { id: 'ops_trades', level: 'b2', name: 'Engineering, Construction & Trades', scenario: 'техническая приёмка объекта: чертежи, допуски, гарантия на дефекты и ввод в эксплуатацию. Ты — главный инженер.' }
  ].forEach(function (t) {
    TOPICS.it.push({ id: t.id, name: t.name, desc: DESC['it.' + t.id], scenario: t.scenario, group: 'Professional', level: t.level || 'b1' });
  });

  // Keep the moved B2 career themes after the core Professional topics (stable sort).
  TOPICS.it.sort(function (a, b) { return (WORK_B2[a.id] ? 1 : 0) - (WORK_B2[b.id] ? 1 : 0); });

  GT.definePack('en', {
    baseKnown: 'ru',
    grammarFold: { A1: 'B1', A2: 'B1' },
    TOPICS: TOPICS,
    ROOT_PLAN: ROOT_PLAN,
    PREFIX_PLAN: PREFIX_PLAN,
    levelName: 'B1–B2',
    nounHint: 'noun',
    features: { rootMapVerbs: true, prefixDrill: true, rootRoulette: true, goetheB1: false, ruLink: false },
    prefixWord: 'Particle',
    prefixTab: 'Particles & Prefixes',
    prefixMatchTitle: { ru: 'Parallels in Russian', de: 'Parallels in German', en: 'Parallels & pitfalls' },
    rootGroupIntro: {
      'Verbs + particles': { ru: 'Глагольная основа английского: один частый глагол + частица (up, off, out…) дают десятки значений — как nehmen → annehmen, aufnehmen в немецком.', de: 'Das verbale Grundgerüst des Englischen: ein häufiges Verb + Partikel (up, off, out …) ergibt Dutzende Bedeutungen — wie nehmen → annehmen, aufnehmen im Deutschen.' },
      'Word-building families': { ru: 'Словообразование: от одной основы — существительные, прилагательные, наречия (act → action, active, actor).', de: 'Wortbildung: von einem Stamm zu Substantiven, Adjektiven, Adverbien (act → action, active, actor).' }
    },
    NAV: [
      { id: 'language', label: 'Language', short: 'Lang', icon: 'book', href: '#/words',
        items: [{ label: 'Words', href: '#/words', match: ['words'] }, { label: 'Roots', href: '#/roots', match: ['roots'] }, { label: 'Grammar', href: '#/grammar', match: ['grammar'] }] },
      { id: 'professional', label: 'Professional', short: 'Job', icon: 'shield', href: '#/professional',
        items: [
          { label: 'Work & Office', href: '#/it/work', tab: 'it', topic: 'work' },
          { label: 'IT & Development', href: '#/it/dev', tab: 'it', topic: 'dev' },
          { label: 'Infrastructure', href: '#/it/infra', tab: 'it', topic: 'infra' },
          { label: 'Security', href: '#/it/security', tab: 'it', topic: 'security' },
          { label: 'Design, UX & Visuals', href: '#/it/design', tab: 'it', topic: 'design' },
          { label: 'AI, Data & Analytics', href: '#/it/ai_data', tab: 'it', topic: 'ai_data' },
          { label: 'Product & Agile', href: '#/it/product', tab: 'it', topic: 'product' },
          { label: 'Clients & Freelance', href: '#/it/clients', tab: 'it', topic: 'clients' },
          { label: 'Presentations & Pitching', href: '#/it/presentations', tab: 'it', topic: 'presentations' },
          { label: 'B2 Business English', href: '#/it/business', tab: 'it', topic: 'business' },
          { label: 'B2 Career Paths', href: '#/it/career-paths', tab: 'it', topic: 'career-paths' },
          { label: 'B2 World of Work', href: '#/it/world-of-work', tab: 'it', topic: 'world-of-work' }
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
      { key: 'legal', title: 'Legal & Law', desc: 'Contracts, intellectual property, criminal law & courts, labour law and corporate compliance (B2–C2).' },
      { key: 'bureaucracy', title: 'Bureaucracy & Administration', desc: 'Public offices, permits, taxes, payroll, social security, official notices and formal records (B2–C2).' },
      { key: 'service', title: 'Service, Hospitality & Retail', desc: 'Hotels & front desk, gastronomy & catering, retail sales and customer support (B2–C1).' },
      { key: 'business', title: 'Finance, HR & Marketing', desc: 'Accounting & finance, sales, marketing & PR, recruiting and HR operations (B2–C2).' },
      { key: 'operations', title: 'Healthcare, Logistics & Trades', desc: 'Clinical healthcare, logistics & supply chain, engineering, construction and technical trades (B2–C2).' }
    ],
    PRO_SUBS: [
      // 01 · For Everyone
      { id: 'work', group: 'for-everyone', tab: 'it', topic: 'work', name: 'Work & Office', desc: DESC['it.work'] },
      { id: 'clients', group: 'for-everyone', tab: 'it', topic: 'clients', name: 'Clients & Freelance', desc: DESC['it.clients'] },
      { id: 'presentations', group: 'for-everyone', tab: 'it', topic: 'presentations', name: 'Presentations & Pitching', desc: DESC['it.presentations'] },
      { id: 'business', group: 'for-everyone', tab: 'it', topic: 'business', name: 'B2 Business English', desc: DESC['it.business'] },
      { id: 'career-paths', group: 'for-everyone', tab: 'it', topic: 'career-paths', name: 'B2 Career Paths', desc: DESC['it.career-paths'] },
      { id: 'world-of-work', group: 'for-everyone', tab: 'it', topic: 'world-of-work', name: 'B2 World of Work', desc: DESC['it.world-of-work'] },
      // 02 · IT Professions
      { id: 'dev', group: 'it', tab: 'it', topic: 'dev', name: 'IT & Development', desc: DESC['it.dev'] },
      { id: 'infra', group: 'it', tab: 'it', topic: 'infra', name: 'Infrastructure', desc: DESC['it.infra'] },
      { id: 'security', group: 'it', tab: 'it', topic: 'security', name: 'Security', desc: DESC['it.security'] },
      { id: 'design', group: 'it', tab: 'it', topic: 'design', name: 'Design, UX & Visuals', desc: DESC['it.design'] },
      { id: 'ai_data', group: 'it', tab: 'it', topic: 'ai_data', name: 'AI, Data & Analytics', desc: DESC['it.ai_data'] },
      { id: 'product', group: 'it', tab: 'it', topic: 'product', name: 'Product & Agile', desc: DESC['it.product'] },
      // 03 · Bureaucracy & Administration
      { id: 'bureau_offices', group: 'bureaucracy', tab: 'it', topic: 'bureau_offices', name: 'Public Offices & Permits', desc: DESC['it.bureau_offices'] },
      { id: 'bureau_tax', group: 'bureaucracy', tab: 'it', topic: 'bureau_tax', name: 'Taxes, Payroll & Social Security', desc: DESC['it.bureau_tax'] },
      { id: 'bureau_docs', group: 'bureaucracy', tab: 'it', topic: 'bureau_docs', name: 'Official Correspondence & Records', desc: DESC['it.bureau_docs'] },
      // 04 · Legal & Law
      { id: 'legal_contracts', group: 'legal', tab: 'it', topic: 'legal_contracts', name: 'Contracts & Civil Law', desc: DESC['it.legal_contracts'] },
      { id: 'legal_ip', group: 'legal', tab: 'it', topic: 'legal_ip', name: 'Copyright & Intellectual Property', desc: DESC['it.legal_ip'] },
      { id: 'legal_criminal', group: 'legal', tab: 'it', topic: 'legal_criminal', name: 'Criminal Law & Courts', desc: DESC['it.legal_criminal'] },
      { id: 'legal_labour', group: 'legal', tab: 'it', topic: 'legal_labour', name: 'Employment & Labour Law', desc: DESC['it.legal_labour'] },
      { id: 'legal_corporate', group: 'legal', tab: 'it', topic: 'legal_corporate', name: 'Compliance, Privacy & Corporate', desc: DESC['it.legal_corporate'] },
      // 05 · Service, Hospitality & Retail
      { id: 'svc_hotel', group: 'service', tab: 'it', topic: 'svc_hotel', name: 'Hotels & Front Desk', desc: DESC['it.svc_hotel'] },
      { id: 'svc_gastro', group: 'service', tab: 'it', topic: 'svc_gastro', name: 'Gastronomy & Catering', desc: DESC['it.svc_gastro'] },
      { id: 'svc_retail', group: 'service', tab: 'it', topic: 'svc_retail', name: 'Retail, Sales & Customer Support', desc: DESC['it.svc_retail'] },
      // 06 · Finance, HR & Marketing
      { id: 'fin_accounting', group: 'business', tab: 'it', topic: 'fin_accounting', name: 'Accounting & Finance', desc: DESC['it.fin_accounting'] },
      { id: 'fin_marketing', group: 'business', tab: 'it', topic: 'fin_marketing', name: 'Sales, Marketing & PR', desc: DESC['it.fin_marketing'] },
      { id: 'fin_hr', group: 'business', tab: 'it', topic: 'fin_hr', name: 'HR & Recruiting', desc: DESC['it.fin_hr'] },
      // 07 · Healthcare, Logistics & Trades
      { id: 'med_clinical', group: 'operations', tab: 'it', topic: 'med_clinical', name: 'Healthcare & Clinical Work', desc: DESC['it.med_clinical'] },
      { id: 'ops_logistics', group: 'operations', tab: 'it', topic: 'ops_logistics', name: 'Logistics & Supply Chain', desc: DESC['it.ops_logistics'] },
      { id: 'ops_trades', group: 'operations', tab: 'it', topic: 'ops_trades', name: 'Engineering, Construction & Trades', desc: DESC['it.ops_trades'] }
    ],
    intro: {
      words: 'A2–B2 English for everyday life and B2 discussion topics. Levels shown are dictionary CEFR labels where verified, otherwise study targets.',
      it: 'Professional English (B1–C2) across 7 tracks: universal workplace basics first, followed by IT, bureaucracy, law, hospitality, finance, healthcare and trades.',
      chunks: 'Ready-made phrases for speaking and writing, organised by communicative function.',
      expressions: 'Idioms, American street slang, everyday conversational phrases, ready-made chunks and classic literary expressions for natural English.',
      literature: 'Lines from English-language literature with a short explanation of their meaning and examples.',
      grammar: 'English grammar by level — B1, B2 and C1: explanations, examples, pitfalls, and recognition and typed drills you can add to Review.',
      roots: 'Start with verbs + particles (take up, take off, take over): the core of everyday English. Then word-building families, prefixes, suffixes and classical Latin/Greek roots.'
    },
    afterLoad: [function (pack) {
      pack.items.forEach(function (it) {
        if (!it.structNote || (it.i18n && it.i18n.de && it.i18n.de.structNote)) return;
        if (!/[А-Яа-яЁё]/.test(it.structNote)) return;
        var s = it.structNote;
        var deNote = it.i18n && it.i18n.de && it.i18n.de.note;
        if (it.note && deNote && s.indexOf(it.note) >= 0) s = s.replace(it.note, deNote);
        s = s
          .replace(/Показаны части написанной формы; изменения основы и продуктивность рассматриваются отдельно\./g,
            'Gezeigt werden die Teile der geschriebenen Form; Stammänderungen und Produktivität werden separat betrachtet.')
          .replace(/Самостоятельная современная основа\./g, 'Eigenständiger moderner Stamm.')
          .replace(/Учебная связь: ([^.]+)\./g, 'Lernverbindung: $1.')
          .replace(/Лексическая связь; свободное словообразовательное правило не утверждается\./g,
            'Lexikalische Verbindung; es wird keine freie Wortbildungsregel behauptet.')
          .replace(/Отдельное значение слова ([^.]+)\./g, 'Eigene Bedeutung des Wortes $1.')
          .replace(/Разбор написания не устанавливает историческое происхождение\./g,
            'Die Zerlegung der Schreibung behauptet keine historische Herkunft.')
          .replace('Неисчисляемое; take care of — заботиться.', 'Nicht zählbar; take care of — sich kümmern um.');
        if (!/[А-Яа-яЁё]/.test(s)) {
          it.i18n = it.i18n || {};
          it.i18n.de = it.i18n.de || {};
          it.i18n.de.structNote = s;
        }
      });
    }]
  });
})();
