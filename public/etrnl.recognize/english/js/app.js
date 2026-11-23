(function (E) {
  'use strict';
  const $ = s => document.querySelector(s), h = E.escape, main = $('#main');
  const ui = { family: '', selected: null, expanded: false, search: '', level: 'all', page: 0, session: null, lesson: null, toastTimer: null };
  const posName = { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb', phr: 'phrasal verb', chunk: 'expression' };
  const modeName = { mixed: 'Mixed practice', recognition: 'Meaning in context', translation: 'Russian to English', derivative: 'Base to derivative', cloze: 'Word formation cloze', affix: 'Affix meanings', grammar: 'Grammar in context' };
  const external = (url, label) => `<a class="source-link" target="_blank" rel="noopener noreferrer" href="${h(url)}">${h(label)}</a>`;
  const example = ex => `<div class="example"><p lang="en">${h(ex.en).replace(/\[\[([^\]]+)\]\]/g, '<mark>$1</mark>')}</p><p lang="ru">${h(ex.ru)}</p></div>`;
  const levelTag = w => {
    const rated = !!w.cefr.level;
    const scope = w.cefr.scope === 'sense' ? 'sense' : 'word/POS';
    const title = rated ? `Подтверждённая метка ${scope === 'sense' ? 'конкретного значения' : 'слова и части речи в списке Oxford'}; источники могут различаться.` : 'В проверенных источниках нет явной метки CEFR для этой единицы. Учебная цель указана отдельно.';
    return `<span class="tag ${rated ? '' : 'estimate'}" title="${h(title)}">${rated ? h(w.cefr.level) + ' · ' + scope : 'CEFR unrated'}</span>${!rated ? `<span class="tag subtle">${h(w.courseLevel)} study target</span>` : ''}${w.cefr.conflict ? '<span class="tag subtle" title="Сравните уровни и область разметки в разделе Sources & evidence.">Source levels differ</span>' : ''}`;
  };
  function wordEvidence(w) {
    const ratings = (w.cefr.ratings || []).map(r => `<p class="small" lang="ru">${h(r.provider)} ${h(r.level)} · ${r.scope === 'sense' ? 'конкретное значение' : 'слово и часть речи'}. ${h(r.evidence)} ${external(r.url, 'Source')}</p>`).join('');
    return `<div class="detail-section"><span class="eyebrow">SOURCES & EVIDENCE</span><p class="small" lang="ru">${h(w.audit?.evidence || w.usage)}</p>${external(w.audit?.source || w.sources[0].url, 'Usage reference')}${ratings || '<p class="small" lang="ru">Подтверждённого CEFR-уровня нет. Study target — редакционная учебная цель, а не словарная классификация.</p>'}${w.cefr.conflict ? '<p class="small muted" lang="ru">Разметка значения в Cambridge и уровня слова в Oxford имеет разную область действия. Обе оценки сохранены; минимум из них не объявляется уровнем каждого значения.</p>' : ''}</div>`;
  }
  function toast(text) { $('#toast').textContent = text; $('#toast').classList.add('visible'); clearTimeout(ui.toastTimer); ui.toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 2600); }
  function chrome() {
    const stats = E.store.stats(); $('#due-count').textContent = stats.dueRec + stats.dueProd; $('#side-due').textContent = stats.dueRec + stats.dueProd;
    $('#family-count').textContent = E.families.length;
    $('#storage-notice').hidden = !E.store.warning; $('#storage-notice').textContent = E.store.warning;
    const section = location.hash.slice(2).split(/[/?]/)[0] || 'words';
    const group = section === 'family' ? 'roots' : section === 'stats' ? 'progress' : section === 'affix' ? E.affixes.find(a => a.id === current().parts[1])?.kind === 'suffix' ? 'suffixes' : 'prefixes' : section;
    document.querySelectorAll('[data-route]').forEach(el => { const active = el.dataset.route === group; el.classList.toggle('active', active); if (active) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current'); });
    document.querySelectorAll('[data-section]').forEach(el => { const active = el.dataset.section === group || el.dataset.section === `${section}/${current().parts[1]}` || el.dataset.section === 'roots' && ['prefixes', 'suffixes', 'classical', 'root'].includes(group) || el.dataset.section === 'stats' && group === 'progress'; el.classList.toggle('active', active); if (active) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current'); });
    document.querySelectorAll('.nav-dropdown').forEach(el => {
      const active = el.dataset.navGroup === 'language' ? ['words', 'grammar', 'roots', 'prefixes', 'suffixes', 'classical', 'root', 'vocabulary'].includes(group) : el.dataset.navGroup === 'professional' ? ['professional', 'it'].includes(group) : ['chunks', 'idioms', 'everyday-phrases'].includes(group);
      el.querySelector('.nav-trigger').classList.toggle('active', active);
    });
    familyList();
  }
  function familyList() {
    const query = E.normalize($('#family-search').value || '');
    const section = E.sections.find(s => s.id === current().parts[0]);
    $('#topic-sidebar').hidden = !section;
    $('#reference-sidebar').hidden = !!section;
    $('#sidebar').classList.toggle('topic-mode', !!section);
    document.querySelector('label[for="family-search"]').textContent = section ? 'FIND A TOPIC' : 'FIND A FAMILY';
    $('#family-search').placeholder = section ? 'Search topics…' : 'Search word or meaning…';
    if (section) {
      const groups = [...new Set(section.topics.map(t => t.group))];
      $('#topic-sidebar').innerHTML = groups.map(group => `<div class="topic-side-label">${h(section.id === 'words' ? group === 'B2 study themes' ? 'B2 THEMES' : 'B1 TOPICS' : section.label)}</div>${section.topics.filter(t => t.group === group).map((t, i) => {
        const active = current().parts[1] === t.id, counts = E.topicStats(t.key);
        return `<a class="topic-side-link ${active ? 'active' : ''}" href="#/${h(section.id)}/${h(t.id)}" ${active ? 'aria-current="page"' : ''}><span class="topic-side-number">${String(i + 1).padStart(2, '0')}</span><span>${h(t.label)}</span><span class="topic-side-count">${counts.known}/${counts.total}</span></a>`;
      }).join('')}`).join('') + `<a class="topic-side-overview" href="#/${h(section.id)}">All ${h(section.label)} topics</a>`;
      return;
    }
    const matches = E.families.filter(f => E.normalize(f.label + ' ' + f.ru + ' ' + f.entryIds.map(id => E.entries[id].headword + ' ' + E.entries[id].ru).join(' ')).includes(query));
    $('#family-list').innerHTML = matches.length ? matches.map(f => `<a href="#/family/${h(f.id)}" class="${ui.family === f.id ? 'active' : ''}">${h(f.label)}<span>${f.entryIds.length}</span></a>`).join('') : '<p class="small muted">No matching families.</p>';
  }
  const header = (overline, title, description, action = '') => `<div class="breadcrumb eyebrow">ENGLISH / ${h(overline)}</div><div class="hero"><div><span class="eyebrow ice">${h(overline)}</span><h1>${title}</h1>${description ? `<p lang="ru">${h(description)}</p>` : ''}${action ? `<div class="actions">${action}</div>` : ''}</div><div class="hero-stamp" aria-hidden="true"><strong>A2–B2</strong><span>CONNECTED LEARNING</span></div></div>`;
  function evidenceNotice() {
    const s = E.contentSummary();
    return `<div class="notice"><span class="eyebrow">CONTENT EVIDENCE</span><p lang="ru">${s.senseRated} меток конкретных значений · ${s.wordRated} меток слова и части речи · ${s.unrated} единиц без явного CEFR. Study target обозначает учебную цель. Наличие материала B2 не означает полного покрытия программы B2.</p><p lang="ru">Исторические корни, современная морфология и смысловые связи рассматриваются отдельно. <a href="SOURCES.md">Source audit</a> · <a href="#/progress">Coverage & progress</a></p></div>`;
  }
  function familyTile(f) {
    const words = f.entryIds.map(id => E.entries[id]);
    return `<a class="family-tile" href="#/family/${h(f.id)}"><div class="tile-top"><h3>${h(f.label)}</h3><span class="tag subtle">${words.length} senses</span></div><p lang="ru">${h(f.ru)}</p><div class="tile-words">${h([...new Set(words.slice(1).map(w => w.headword))].slice(0, 5).join(' · '))}</div></a>`;
  }
  function roots() {
    ui.family = '';
    main.innerHTML = header('WORD FAMILIES', 'One word.<br><em>A whole network.</em>', 'Увидеть связь между словами — первый шаг. Вспомнить и использовать нужное слово — следующий.', '<a class="button primary" href="#/family/act">Explore ACT</a><a class="button" href="#/practice">Start practising</a>') +
      `<div class="metrics"><div class="metric"><strong>${E.families.length}</strong><span>WORD FAMILIES</span></div><div class="metric"><strong>${Object.keys(E.entries).length}</strong><span>WORDS & SENSES</span></div><div class="metric"><strong>${E.affixes.length}</strong><span>PREFIXES & SUFFIXES</span></div><div class="metric"><strong>02</strong><span>RECALL DIRECTIONS</span></div></div><div class="section-head"><h2>Explore the connections</h2><span class="eyebrow">EXPANDABLE BY DESIGN</span></div><label class="eyebrow" for="root-query">SEARCH FAMILIES</label><div class="toolbar"><input id="root-query" type="search" placeholder="Try employment, usable, связь…" value="${h(ui.search)}"></div><div class="grid" id="root-grid">${filteredFamilies().map(familyTile).join('')}</div>` + evidenceNotice();
  }
  function filteredFamilies() { const query = E.normalize(ui.search); return E.families.filter(f => E.normalize([f.label, f.ru, ...f.entryIds.map(id => E.entries[id].headword + ' ' + E.entries[id].ru)].join(' ')).includes(query)); }
  function detail(w) {
    const parent = E.entries[w.morphology.parentId];
    const transparencyText = {
      transparent: 'Связь формы и значения понятна в этом контексте.',
      figurative: 'Связь с семейством сохраняется, но значение переносное или расширенное.',
      opaque: 'Современное значение нельзя надёжно вывести из частей. Это не утверждение об отсутствии исторической связи.'
    };
    return `<div class="tags">${levelTag(w)}<span class="tag subtle">${h(posName[w.pos])}</span><span class="tag ${h(w.transparency)}">${h(w.transparency)}</span></div>
      <h2>${h(w.headword)}</h2><p class="meaning" lang="ru">${h(w.ru)}</p>${example(w.examples[0])}
      <div class="detail-section"><span class="eyebrow">WORD FORMATION</span>
      <div class="morphemes">${w.morphology.parts.map(part => `<span>${h(part)}</span>`).join('<i>+</i>')}</div>
      ${parent ? `<p class="small muted" lang="ru">Учебная основа: ${h(parent.headword)} — ${h(parent.ru)}.</p>` : ''}
      <p lang="ru">${h(w.morphology.note)}</p></div>
      <div class="detail-section"><span class="eyebrow">MEANING & USAGE</span>
      <p lang="ru">${h(w.semantic)}</p><p lang="ru">${h(transparencyText[w.transparency])}</p><p lang="ru">${h(w.usage)}</p></div>
      <div class="detail-actions"><button type="button" class="primary" data-action="enroll" data-id="${h(w.id)}">Add to review · both</button>
      <a class="button" href="#/practice?entry=${encodeURIComponent(w.id)}">Practise this sense</a></div>${wordEvidence(w)}`;
  }
  function family(id, entryId) {
    const f = E.families.find(f => f.id === id); if (!f) return notFound();
    if (ui.family !== id) { ui.expanded = false; ui.selected = null; }
    ui.family = id;
    if (entryId && f.entryIds.includes(entryId)) { ui.selected = entryId; ui.expanded = true; }
    const core = f.entryIds.filter(id => id === f.base.entryId || E.entries[id].core && E.isCoreLevel(E.entries[id]));
    if (!ui.selected || !f.entryIds.includes(ui.selected)) ui.selected = core[1] || core[0];
    if (!ui.expanded && !core.includes(ui.selected)) ui.selected = core[1] || core[0];
    const shown = ui.expanded ? f.entryIds : core;
    main.innerHTML = header('WORD FAMILIES / ' + f.label, h(f.label), f.ru, `<a class="button primary" href="#/practice?family=${h(f.id)}">Practise this family</a><a class="button" href="#/roots">All families</a>`) +
      `<div class="family-layout"><section class="map-panel" aria-label="Word formation map"><div class="map-head"><span class="eyebrow">WORD FORMATION MAP</span><span class="tag subtle">${f.entryIds.length} senses</span></div><div class="word-map" id="word-map"><svg class="map-lines" aria-hidden="true"></svg>${shown.map(id => {
        const w = E.entries[id]; return `<button type="button" class="word-node ${id === ui.selected ? 'selected' : ''}" data-action="select-word" data-id="${h(id)}" data-parent="${h(w.morphology.parentId || '')}" aria-pressed="${id === ui.selected}"><strong>${h(w.headword)}</strong><small lang="ru">${h(w.ru)}</small><small class="node-pos">${h(w.pos)} · ${h(w.cefr.level || 'unrated')}${w.cefr.scope === 'lexeme-pos' ? ' word' : ''}</small></button>`;
      }).join('')}</div><div class="map-foot"><span class="eyebrow">${shown.length} OF ${f.entryIds.length} SENSES</span>${f.entryIds.length > core.length ? `<button type="button" data-action="expand-family" aria-expanded="${ui.expanded}">${ui.expanded ? 'Show core words' : `Show all (${f.entryIds.length})`}</button>` : ''}</div><div class="notice" lang="ru">${h(f.note)}<p>Линии показывают учебные связи между видимыми формами, а не историческое родословное дерево.</p></div></section><section class="detail" id="word-detail" aria-label="Selected word">${detail(E.entries[ui.selected])}</section></div><div class="section-head"><h2>Related families</h2><span class="eyebrow">KEEP EXPLORING</span></div><p class="small muted" lang="ru">Ссылки объединяют полезные для сравнения семейства; общий исторический корень из этого не следует.</p><div class="related">${f.related.map(id => `<a href="#/family/${h(id)}">${h(id.toUpperCase())}</a>`).join('')}</div>` + evidenceNotice();
    requestAnimationFrame(drawMap);
  }
  function drawMap() {
    const map = $('#word-map'); if (!map) return;
    const rect = map.getBoundingClientRect(), nodes = [...map.querySelectorAll('[data-id]')];
    const svg = map.querySelector('svg'); svg.setAttribute('viewBox', `0 0 ${rect.width} ${rect.height}`);
    svg.innerHTML = nodes.map(node => {
      const parent = nodes.find(other => other.dataset.id === node.dataset.parent); if (!parent || parent === node) return '';
      const a = parent.getBoundingClientRect(), b = node.getBoundingClientRect();
      const x1 = a.left + a.width / 2 - rect.left, y1 = a.bottom - rect.top, x2 = b.left + b.width / 2 - rect.left, y2 = b.top - rect.top;
      return `<path d="M${x1},${y1} C${x1},${(y1 + y2) / 2} ${x2},${(y1 + y2) / 2} ${x2},${y2}"/>`;
    }).join('');
  }
  function references(kind, id) {
    ui.family = '';
    const items = kind === 'classical' ? E.classical : E.affixes.filter(a => a.kind === (kind === 'suffixes' ? 'suffix' : 'prefix'));
    const selected = id ? items.filter(a => a.id === id) : items;
    if (!selected.length) return notFound();
    main.innerHTML = header(kind.toUpperCase(), kind === 'classical' ? 'Older roots.<br><em>Clearer distinctions.</em>' : kind === 'prefixes' ? 'Small beginnings.<br><em>Different meanings.</em>' : 'Recognise the ending.<br><em>Find the function.</em>', kind === 'classical' ? 'Исторические связи помогают понимать лексику. Они не заменяют анализ современного слова и не разрешают придумывать новые производные.' : 'Значение, словообразовательная модель, изменения написания и границы применимости — вместе с практикой.', kind === 'classical' ? '' : '<a class="button primary" href="#/practice?kind=affix">Practise affix meanings</a>') +
      `<div class="toolbar">${id ? `<a class="button" href="#/${kind}">All ${h(kind)}</a>` : `<span class="eyebrow">${selected.length} ENTRIES</span>`}</div><div class="reference-list">${selected.map(a => kind === 'classical' ? classicalCard(a) : affixCard(a)).join('')}</div>`;
  }
  function refExamples(examples) {
    return `<div class="reference-examples">${examples.map(ex => {
      const w = ex.entryId && E.entries[ex.entryId];
      if (w?.familyId) return `<a href="#/family/${h(w.familyId)}/${encodeURIComponent(w.id)}" title="${h(w.ru)}">${h(w.headword)}</a>`;
      return `<a target="_blank" rel="noopener noreferrer" href="${h(ex.url || E.dictionary(w?.headword || ex.headword))}">${h(w?.headword || ex.headword)}</a>`;
    }).join('')}</div>`;
  }
  function affixCard(a) {
    return `<section class="reference-tile"><div class="tags"><span class="tag subtle">${h(a.kind)}</span><span class="tag subtle">${h(a.productivity.includes('Огранич') || a.productivity.includes('огранич') || a.productivity.includes('закрепл') ? 'restricted' : 'productive pattern')}</span></div><h2>${h(a.label)}</h2><p class="meaning" lang="ru">${h(a.ru)}</p>${refExamples(a.examples)}<div class="reference-fields">${[['PATTERN', a.pattern], ['WORD CLASS', a.posChange], ['SPELLING', a.spelling], ['EXCEPTIONS', a.exceptions], ['LIMITATIONS', a.limitations], ['PRODUCTIVITY', a.productivity]].map(([label, text]) => `<div><span class="eyebrow">${label}</span><p lang="ru">${h(text)}</p></div>`).join('')}</div><div class="actions"><button data-action="quick-question" data-id="${h(a.id)}" type="button">Practise this affix</button><button data-action="enroll" data-id="${h(a.id)}" type="button">Add to review · recognition</button>${external(a.sources[0].url, a.sources[0].title)}</div></section>`;
  }
  function classicalCard(a) {
    return `<section class="reference-tile"><div class="tags"><span class="tag subtle">${h(a.origin)}</span><span class="tag subtle">historical / combining form</span></div><h2>${h(a.label)}</h2><p lang="ru">${h(a.ru)}</p>${refExamples(a.examples)}<div class="reference-fields"><div><span class="eyebrow">HISTORICAL EVIDENCE</span><p lang="ru">${h(a.history)}</p></div><div><span class="eyebrow">LIMITATIONS</span><p lang="ru">${h(a.limitations)}</p></div></div>${a.entryIds.length ? `<div class="related">${[...new Set(a.entryIds.map(id => E.entries[id].familyId))].map(id => `<a href="#/family/${h(id)}">${h(id.toUpperCase())}</a>`).join('')}</div>` : ''}<div class="detail-section">${external(a.sources[0].url, a.sources[0].title)}</div></section>`;
  }
  function vocabularyControls() {
    return `<div class="toolbar"><input id="vocab-search" type="search" placeholder="Search English or Russian…" value="${h(ui.search)}" aria-label="Search vocabulary"><label for="vocab-level">Level</label><select id="vocab-level">${['all', 'A2', 'B1', 'B2', 'A1', 'C1', 'C2', 'unrated'].map(level => `<option value="${level}" ${level === ui.level ? 'selected' : ''}>${level === 'all' ? 'All levels' : level === 'unrated' ? 'CEFR unrated' : level}</option>`).join('')}</select></div><div id="vocab-results"></div>`;
  }
  function topicTile(section, t) {
    const enrolled = E.topicStats(t.key).learning;
    return `<a class="category-tile topic-tile" href="#/${h(section.id)}/${h(t.id)}"><div class="tags"><span class="tag subtle">${h(t.studyTarget)} study target</span></div><h3>${h(t.label)}</h3><p lang="ru">${h(t.description)}</p><div class="topic-count"><strong>${t.entryIds.length} <span class="eyebrow">SENSES & PATTERNS</span></strong><span class="small muted">${enrolled} in review</span></div></a>`;
  }
  function sectionPage(sectionId, topicId) {
    ui.family = '';
    const section = E.sections.find(s => s.id === sectionId);
    const t = topicId ? E.topicByKey(sectionId + ':' + topicId) : null;
    if (!section || topicId && !t) return notFound();
    if (t) {
      topicOverview(section, t);
    } else {
      const groups = [...new Set(section.topics.map(t => t.group))];
      main.innerHTML = header(section.label, section.id === 'words' ? 'Words for life.<br><em>Ideas for discussion.</em>' : section.id === 'it' ? 'Explain the system.<br><em>Work with the team.</em>' : 'Know what to say.<br><em>When it matters.</em>', section.ru,
        '<a class="button" href="#/vocabulary">Open vocabulary explorer</a><a class="button" href="#/roots">Explore word families</a>') +
        `<div class="metrics"><div class="metric"><strong>${section.topics.length}</strong><span>TOPICS</span></div><div class="metric"><strong>${E.sectionEntries(section.id).length}</strong><span>UNIQUE ITEMS</span></div><div class="metric"><strong>02</strong><span>RECALL DIRECTIONS</span></div></div>` +
        groups.map(group => `<div class="section-head"><h2>${h(group)}</h2></div><div class="grid topic-grid">${section.topics.filter(t => t.group === group).map(t => topicTile(section, t)).join('')}</div>`).join('') +
        '<div class="notice" lang="ru">Темы задают ситуации применения. B2 study target — учебная цель темы; конкретные значения сохраняют собственные словарные уровни. Если одно значение встречается в нескольких темах, его прогресс общий.</div>';
    }
  }
  const topicPath = t => '#/' + t.key.replace(':', '/');
  function topicCrumbs(section, t, extra = '', percentage = null) {
    const band = section.id === 'words' ? t.group === 'B2 study themes' ? 'B2' : 'B1' : section.label;
    return `<div class="topic-crumbs"><div class="eyebrow"><a href="#/${h(section.id)}">${h(band)}</a> · <a href="${h(topicPath(t))}">${h(t.label)}</a>${extra ? ' · ' + h(extra) : ''}</div>${percentage === null ? '' : `<div class="topic-progress"><progress max="100" value="${percentage}" aria-label="Progress"></progress><span>${percentage}%</span></div>`}</div>`;
  }
  function topicOverview(section, t) {
    const c = E.topicStats(t.key), pct = c.total ? Math.round(c.known / c.total * 100) : 0;
    main.innerHTML = `<div class="topic-home">${topicCrumbs(section, t, '', pct)}<header class="topic-heading"><h1>${h(t.label)}</h1><p lang="ru">${h(t.description)}</p></header><div class="topic-stats">${[['new', 'NEW'], ['learning', 'LEARNING'], ['known', 'KNOWN'], ['due', 'DUE TODAY']].map(([key, label]) => `<div><strong>${c[key]}</strong><span>${label}</span></div>`).join('')}</div>${c.learnable ? `<a class="button primary topic-learn-button" href="${h(topicPath(t))}/learn">Learn ${Math.min(10, c.learnable)} new</a>` : `<p class="topic-empty" lang="ru">${c.new ? 'Оставшиеся новые значения выходят за основной диапазон A1–B2. Они доступны в Browse all.' : 'Все слова этой темы уже отмечены. Можно перейти к практике или повторению.'}</p>`}<div class="topic-actions"><a class="button" href="${h(topicPath(t))}/browse">Browse all (${c.total})</a><a class="button" href="#/practice?topic=${encodeURIComponent(t.key)}">Practice now</a>${c.due ? `<a class="button" href="#/review?topic=${encodeURIComponent(t.key)}">Review ${c.due} due</a>` : ''}</div><details class="topic-speaking speaking-panel"><summary>Speaking practice</summary><p lang="ru">${h(t.scenario)}</p><label class="eyebrow" for="speaking-prompt">SPEAKING PROMPT</label><textarea id="speaking-prompt" readonly rows="9" lang="ru">${h(E.speakingPrompt(t.key))}</textarea><button type="button" data-action="copy-prompt">Copy speaking prompt</button></details></div>`;
  }
  function topicBrowse(section, t) {
    main.innerHTML = `<div class="topic-home">${topicCrumbs(section, t, 'Browse')}<header class="topic-heading"><h1>${h(t.label)}</h1></header>${vocabularyControls()}</div>`;
    renderVocabulary();
  }
  const speakerIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4V5Zm4 3a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/></svg>';
  const speakButton = (w, index) => `<button type="button" class="lesson-speak" data-action="pronounce" data-id="${h(w.id)}" ${index === undefined ? '' : `data-example="true" data-example-index="${index}"`} aria-label="${index === undefined ? 'Pronounce ' + h(w.headword) : 'Listen to example ' + (index + 1)}">${speakerIcon}</button>`;
  function startLesson(t) {
    ui.lesson = { key: t.key, ids: E.learnQueue(t.key), index: 0, known: 0, learned: 0, later: 0 };
    drawLesson();
  }
  function drawLesson() {
    const lesson = ui.lesson, t = lesson && E.topicByKey(lesson.key);
    if (!t) return notFound();
    const section = E.sections.find(s => s.id === t.key.split(':')[0]);
    if (lesson.index >= lesson.ids.length) {
      main.innerHTML = `<div class="topic-home">${topicCrumbs(section, t, 'Session done', 100)}<header class="topic-heading"><h1>${lesson.ids.length ? 'Session done' : 'Nothing new here'}</h1><p>${lesson.known} known · ${lesson.learned} added to review · ${lesson.later} for later</p></header><div class="topic-actions"><a class="button primary" href="#/review?topic=${encodeURIComponent(t.key)}">Review now</a><button type="button" data-action="learn-more">Learn more</button><a class="button" href="${h(topicPath(t))}">Back to topic</a></div></div>`;
    } else {
      const w = E.entries[lesson.ids[lesson.index]];
      main.innerHTML = lessonCard(section, t, w, `Learn · ${lesson.index + 1} / ${lesson.ids.length}`, Math.round(lesson.index / lesson.ids.length * 100), true);
    }
    chrome(); window.scrollTo(0, 0); main.focus({ preventScroll: true });
  }
  function lessonCard(section, t, w, crumb, pct, learning) {
    const f = E.families.find(f => f.id === w.familyId);
    const actions = learning ? [['lesson-know', 'Know it', 'primary'], ['lesson-learn', 'Learn it', 'outline'], ['lesson-later', 'Later', 'ghost']] : [['item-know', 'Know it', 'primary'], ['enroll', 'Learn it', 'outline']];
    return `<div class="lesson-page">${topicCrumbs(section, t, crumb, pct)}<div class="lesson-layout"><section class="lesson-main"><div class="lesson-pos eyebrow">${h(posName[w.pos] || w.pos)}</div><div class="lesson-word-row"><h1 class="${w.pos === 'chunk' || w.headword.length > 22 ? 'phrase' : ''}" lang="en">${h(w.headword)}</h1>${speakButton(w)}<button type="button" class="lesson-why-button" data-action="lesson-why" aria-expanded="false" aria-controls="lesson-why">WHY?</button></div><p class="lesson-meaning" lang="ru">${h(w.ru)}</p><div id="lesson-why" hidden class="lesson-why"><p lang="ru">${h(w.why || w.morphology.note)}</p>${wordEvidence(w)}</div><div class="lesson-section"><span class="eyebrow">EXAMPLES</span>${w.examples.map((ex, i) => `<div class="lesson-example">${example(ex)}${speakButton(w, i)}</div>`).join('')}</div><div class="lesson-section"><span class="eyebrow">NOTE</span><p lang="ru">${h(w.usage)}</p></div><div class="topic-actions lesson-actions">${actions.map(([action, label, style]) => `<button type="button" class="${style}" data-action="${action}" data-id="${h(w.id)}">${label}</button>`).join('')}${learning ? '' : `<a class="button" href="${h(topicPath(t))}/browse">Back to list</a>`}</div>${learning ? '<p class="lesson-shortcuts">1 Know it · 2 Learn it · 3 Later · P pronounce · Esc end</p>' : `<p class="lesson-shortcuts">${h(E.itemState(w.id))}</p>`}</section><aside class="lesson-side"><section class="lesson-box"><span class="eyebrow">${w.pos === 'chunk' ? 'EXPRESSION' : 'STRUCTURE'}</span><div class="lesson-parts">${w.morphology.parts.map(part => `<span>${h(part)}</span>`).join('')}</div><p lang="ru">${h(w.morphology.note)}</p></section>${f ? `<section class="lesson-box"><span class="eyebrow">WORD FAMILY · ${h(f.label)}</span><div class="lesson-family">${f.entryIds.filter(id => id !== w.id).slice(0, 8).map(id => `<a href="#/family/${h(f.id)}/${encodeURIComponent(id)}" title="${h(E.entries[id].ru)}">${h(E.entries[id].headword)}</a>`).join('')}</div></section>` : ''}${w.variations?.length ? `<section class="lesson-box"><span class="eyebrow">VARIATIONS</span>${w.variations.map(example).join('')}</section>` : ''}<details class="lesson-box lesson-evidence"><summary>Level & references</summary><div class="tags">${levelTag(w)}</div>${wordEvidence(w)}</details></aside></div></div>`;
  }
  function lessonChoice(choice) {
    const lesson = ui.lesson;
    if (!lesson || current().parts[2] !== 'learn' || lesson.index >= lesson.ids.length) return;
    const id = lesson.ids[lesson.index];
    if (choice === 'know') { E.store.markKnown(id); lesson.known++; }
    else if (choice === 'learn') { E.store.enroll(id); lesson.learned++; }
    else if (choice === 'later') { E.store.defer(id); lesson.later++; }
    else return;
    lesson.index++; drawLesson();
  }
  function vocabulary(category = 'all') {
    ui.family = '';
    const cat = E.categories.find(c => c.id === category);
    if (category !== 'all' && !cat) return notFound();
    main.innerHTML = header('CURRICULUM', cat ? h(cat.label) : 'Words you can<br><em>actually use.</em>', cat ? cat.description : 'Повседневная жизнь, работа и технологии. Категории используют общий каталог: прогресс одного значения сохраняется везде.') +
      (category === 'all' ? `<div class="section-head"><h2>Choose a context</h2></div><div class="grid">${E.categories.map(c => `<a class="category-tile" href="#/vocabulary/${h(c.id)}"><h3>${h(c.label)}</h3><p lang="ru">${h(c.description)}</p><strong>${E.categoryEntries(c.id).length} <span class="eyebrow">SENSES</span></strong></a>`).join('')}</div>` : '<div class="toolbar"><a class="button" href="#/vocabulary">All categories</a></div>') +
      `<div class="section-head"><h2>Browse vocabulary</h2></div><div class="toolbar"><input id="vocab-search" type="search" placeholder="Search English or Russian…" value="${h(ui.search)}" aria-label="Search vocabulary"><label for="vocab-level">Level</label><select id="vocab-level">${['all', 'A2', 'B1', 'B2', 'A1', 'C1', 'C2', 'unrated'].map(level => `<option value="${level}" ${level === ui.level ? 'selected' : ''}>${level === 'all' ? 'All levels' : level === 'A1' ? 'A1 · foundations' : level === 'unrated' ? 'CEFR unrated' : level}</option>`).join('')}</select></div><div id="vocab-results"></div>` + evidenceNotice();
    renderVocabulary(category);
  }
  function renderVocabulary(category) {
    const { parts } = current(), section = E.sections.find(s => s.id === parts[0]);
    const source = section ? (parts[1] ? E.topicEntries(section.id + ':' + parts[1]) : E.sectionEntries(section.id)) : Object.values(E.entries).filter(w => !category || category === 'all' || w.categories.includes(category));
    const query = E.normalize(ui.search), entries = source.filter(w => (ui.level === 'all' || (ui.level === 'unrated' ? !w.cefr.level : w.cefr.level === ui.level)) && E.normalize(w.headword + ' ' + w.ru).includes(query));
    const pages = Math.ceil(entries.length / 12); ui.page = Math.max(0, Math.min(ui.page, pages - 1));
    if (section && parts[2] === 'browse') {
      $('#vocab-results').innerHTML = entries.length ? `<div class="topic-browse-list">${entries.slice(ui.page * 12, ui.page * 12 + 12).map((w, i) => `<div class="topic-browse-row"><span class="topic-side-number">${String(ui.page * 12 + i + 1).padStart(2, '0')}</span><a href="#/${h(section.id)}/${h(parts[1])}/item/${encodeURIComponent(w.id)}"><strong lang="en">${h(w.headword)}</strong><span lang="ru">${h(w.ru)}</span></a>${speakButton(w)}<span class="item-state ${E.itemState(w.id)}">${E.itemState(w.id)}</span></div>`).join('')}</div><div class="pager"><button data-action="page-prev" type="button" ${ui.page === 0 ? 'disabled' : ''}>Previous</button><span class="eyebrow">${ui.page + 1} / ${pages}</span><button data-action="page-next" type="button" ${ui.page >= pages - 1 ? 'disabled' : ''}>Next</button></div>` : '<div class="empty">No matching entries.</div>';
      return;
    }
    $('#vocab-results').innerHTML = entries.length ? `<p class="eyebrow">${entries.length} MATCHING SENSES</p><div class="vocabulary-list">${entries.slice(ui.page * 12, ui.page * 12 + 12).map(w => `<article class="vocabulary-row"><div><div class="tags">${levelTag(w)}<span class="tag subtle">${h(posName[w.pos])}</span></div><h3>${w.familyId ? `<a href="#/family/${h(w.familyId)}/${encodeURIComponent(w.id)}">${h(w.headword)}</a>` : h(w.headword)}</h3><p lang="ru">${h(w.ru)}</p>${example(w.examples[0])}<p lang="ru">${h(w.usage)}</p>${contextDetails(w)}<p>${external(w.sources[0].url, 'Usage reference')}</p></div><div class="actions">${w.pos === 'chunk' ? `<button data-action="pronounce" data-id="${h(w.id)}" type="button" aria-label="Listen to ${h(w.headword)}">Listen</button>` : ''}<button data-action="enroll" data-id="${h(w.id)}" type="button">Add to review</button><a class="button" href="#/practice?entry=${encodeURIComponent(w.id)}">Practise this sense</a></div></article>`).join('')}</div><div class="pager"><button data-action="page-prev" type="button" ${ui.page === 0 ? 'disabled' : ''}>Previous</button><span class="eyebrow">${ui.page + 1} / ${pages}</span><button data-action="page-next" type="button" ${ui.page >= pages - 1 ? 'disabled' : ''}>Next</button></div>` : '<div class="empty">No matching entries. Try another search or level.</div>';
  }
  function contextDetails(w) {
    if (w.pos !== 'chunk' && !['professional', 'it'].includes(current().parts[0])) return '';
    const why = w.why || w.usage;
    return `<details class="context-details"><summary title="${h(why + ' ' + E.plain(w.examples[0].en))}">WHY?</summary><p lang="ru">${h(why)}</p>${w.variations?.length ? `<div class="detail-section"><span class="eyebrow">VARIATIONS</span>${w.variations.map(v => example(v)).join('')}</div>` : ''}<button type="button" data-action="pronounce" data-id="${h(w.id)}" data-example="true">Listen to example</button></details>`;
  }
  function grammar() {
    ui.family = '';
    main.innerHTML = header('ESSENTIAL GRAMMAR', 'The structure<br><em>behind the sentence.</em>', 'Краткие объяснения на русском, выбор формы и самостоятельный ввод: от времён и управления до осторожных профессиональных формулировок.', '<a class="button primary" href="#/practice?kind=grammar">Practise grammar</a>') +
      `<div class="section-head"><h2>Core patterns</h2><span class="eyebrow">${E.grammar.length} TOPICS</span></div><div class="reference-list">${E.grammar.map(g => `<section class="reference-tile"><div class="tags"><span class="tag">${h(g.level)} study target</span><span class="tag subtle">${h(g.sourceBand)}</span></div><h2>${h(g.label)}</h2><p lang="ru">${h(g.ru)}</p>${example({ en: g.example, ru: g.translation })}<div class="actions"><button data-action="quick-question" data-id="${h(g.id)}" type="button">Practise both directions</button><button data-action="enroll" data-id="${h(g.id)}" type="button">Add to review · both</button>${external(g.source, 'Grammar reference')}</div></section>`).join('')}</div>`;
  }
  function practice(params, isReview) {
    ui.family = '';
    if (ui.session) return drawQuestion();
    const stats = E.store.stats(), requestedEntry = E.entries[params.get('entry')];
    const family = params.get('family') || 'all', mode = params.get('kind') || 'mixed';
    const requestedTopic = E.topicByKey(params.get('topic'));
    main.innerHTML = `<div class="study-layout">${header(isReview ? 'REVIEW' : 'LEARNING STUDIO', isReview ? 'Bring it<br><em>back to mind.</em>' : 'Make the<br><em>connection yourself.</em>', isReview ? 'Повторяются только добавленные карточки, у которых наступил срок. Узнавание и воспроизведение учитываются отдельно.' : 'Выберите формат. Сначала ответьте самостоятельно, затем разберите объяснение и оцените, насколько легко было вспомнить.')}
      ${isReview ? `<div class="direction-cards"><div class="direction-card"><span class="eyebrow">RECOGNITION</span><strong>${stats.dueRec}</strong><p lang="ru">Английский контекст → значение</p></div><div class="direction-card"><span class="eyebrow">PRODUCTION</span><strong>${stats.dueProd}</strong><p lang="ru">Значение или пропуск → английский</p></div></div>` : ''}
      <form id="session-form" class="study-controls"><span class="eyebrow">SESSION SETTINGS</span>${requestedEntry ? `<p class="context">${h(requestedEntry.headword)} <span class="muted" lang="ru">— ${h(requestedEntry.ru)}</span></p>` : ''}<div class="form-grid"><label>Exercise type<select name="kind" id="exercise-kind">${Object.entries(modeName).map(([id, label]) => `<option value="${id}" ${id === mode ? 'selected' : ''}>${label}</option>`).join('')}</select></label><label>Learning direction<select name="direction" id="exercise-direction"><option value="both">Both directions</option><option value="rec">Recognition</option><option value="prod">Production</option></select></label><label class="topic-scope">Topic scope<select name="topic" ${requestedEntry ? 'disabled' : ''}><option value="all">Whole catalogue</option>${requestedTopic?.key.startsWith('it:') ? `<option value="${h(requestedTopic.key)}" selected>${h(requestedTopic.label)} (legacy scope)</option>` : ''}${E.navigationSections().map(section => `<optgroup label="${h(section.label)}">${section.topics.map(t => `<option value="${h(t.key)}" ${t.key === requestedTopic?.key ? 'selected' : ''}>${h(t.label)}</option>`).join('')}</optgroup>`).join('')}</select></label><label>Family scope<select name="family" ${requestedEntry ? 'disabled' : ''}><option value="all">Whole catalogue</option>${E.families.map(f => `<option value="${h(f.id)}" ${f.id === family ? 'selected' : ''}>${h(f.label)}</option>`).join('')}</select></label><label>Word level<select name="level" ${requestedEntry ? 'disabled' : ''}><option value="all">All levels</option><option>A2</option><option>B1</option><option>B2</option><option>A1</option></select></label></div><p class="small muted" id="mode-help" lang="ru"></p><div class="actions"><button type="submit" class="primary">${isReview ? 'Start due review' : 'Start session'}</button><span class="eyebrow">UP TO 12 QUESTIONS</span></div></form><div class="notice" lang="ru">Ответ проверяется до оценки. Прогресс меняется только после выбора Again / Hard / Good / Easy. Здесь используется простой интервальный планировщик; интеграция с FSRS отложена до объединения модулей.</div><div id="session-message" role="status"></div></div>`;
    modeHelp();
  }
  function modeHelp() {
    const input = $('#exercise-kind'); if (!input) return;
    const kind = input.value, dir = $('#exercise-direction');
    if (['recognition', 'affix'].includes(kind)) { dir.value = 'rec'; dir.disabled = true; }
    else if (['translation', 'derivative', 'cloze'].includes(kind)) { dir.value = 'prod'; dir.disabled = true; }
    else { dir.disabled = false; }
    const isReference = ['affix', 'grammar'].includes(kind);
    for (const name of ['family', 'level', 'topic']) { const el = document.querySelector(`[name="${name}"]`); if (el) el.disabled = isReference || !!E.entries[current().params.get('entry')]; }
    $('#mode-help').textContent = kind === 'affix' ? 'Задания по всему справочнику аффиксов; фильтры семейств и уровней здесь не применяются.' : kind === 'grammar' ? 'Для каждой темы есть выбор ответа и самостоятельный ввод. Учебная цель темы не является точной CEFR-меткой всех конструкций.' : kind === 'derivative' ? 'Показываются только слова с учебной основой; контекст уточняет нужное значение.' : 'В mixed-режиме встречаются оба направления. Метки sense и word/POS имеют разную область действия; CEFR unrated не означает B2. All levels включает учебные цели A1–B2, а известные C1/C2 доступны через конкретное значение или повторение.';
  }
  function startSession(form) {
    const read = name => form.elements.namedItem(name).value;
    const opts = { kind: read('kind'), direction: read('direction'), family: read('family'), topic: read('topic'), level: read('level'), dueOnly: current().parts[0] === 'review', limit: 12 };
    const entry = E.entries[current().params.get('entry')];
    let questions;
    if (entry && !['affix', 'grammar'].includes(opts.kind)) {
      const types = opts.kind === 'mixed' ? ['recognition', entry.morphology.parentId ? 'derivative' : 'cloze'] : [opts.kind];
      questions = types.filter(t => opts.kind !== 'derivative' || entry.morphology.parentId).map(t => E.question(entry, t)).filter(q => opts.direction === 'both' || q.direction === opts.direction);
    } else questions = E.makePool(opts);
    if (!questions.length) { $('#session-message').innerHTML = '<div class="empty">No matching cards. Change the filters or add words to review.</div>'; return; }
    ui.session = { questions, index: 0, correct: 0, graded: 0, checked: false, isCorrect: false, input: '', done: false }; drawQuestion();
  }
  function drawQuestion() {
    const s = ui.session;
    if (s.index >= s.questions.length) {
      main.innerHTML = `<div class="study-layout">${header('SESSION COMPLETE', 'A little more<br><em>connected.</em>', '')}<div class="metrics"><div class="metric"><strong>${s.correct}/${s.questions.length}</strong><span>CORRECT ANSWERS</span></div><div class="metric"><strong>${s.graded}</strong><span>CARDS SCHEDULED</span></div></div><p class="muted" lang="ru">Каждая оценка сохранена только для своего направления. Ошибки — повод разобрать форму и вернуться к ней ещё раз.</p><div class="actions"><button type="button" data-action="end-session" class="primary">Choose another session</button><a class="button" href="#/progress">View progress</a></div></div>`; chrome(); return;
    }
    const q = s.questions[s.index];
    main.innerHTML = `<div class="study-layout"><div class="breadcrumb eyebrow">ENGLISH / ACTIVE RECALL</div><div class="quiz-head"><span class="eyebrow">QUESTION ${s.index + 1} / ${s.questions.length}</span><button type="button" data-action="end-session">End session</button></div><div class="progress-track"><div class="progress-fill" id="session-fill"></div></div><section class="quiz"><div class="tags"><span class="tag">${q.direction === 'rec' ? 'RECOGNITION' : 'PRODUCTION'}</span><span class="tag subtle">${h(modeName[q.kind] || q.kind)}</span></div>${q.base ? `<div class="base-word">BASE: ${h(q.base.toUpperCase())}</div>` : ''}<h2 lang="${q.kind === 'recognition' ? 'en' : 'ru'}">${h(q.prompt)}</h2>${q.context ? `<p class="context" lang="en">${h(q.context)}</p>` : ''}${q.translation ? `<p class="muted" lang="ru">${h(q.translation)}</p>` : ''}
      ${q.options ? `<div class="options">${q.options.map(option => `<button type="button" data-action="answer-choice" data-value="${h(option)}" ${s.checked ? 'disabled' : ''} class="${s.checked && E.normalize(option) === E.normalize(q.answer) ? 'correct' : s.checked && option === s.input ? 'incorrect' : ''}">${h(option)}</button>`).join('')}</div>` : `<form id="answer-form" class="answer-form"><label for="typed-answer" class="eyebrow">RECALL THE STUDIED WORD OR EXPRESSION</label><input id="typed-answer" type="text" autocomplete="off" autocapitalize="none" spellcheck="false" value="${h(s.input)}" ${s.checked ? 'disabled' : ''} placeholder="Type the English word or expression…" required><button class="primary" type="submit" ${s.checked ? 'disabled' : ''}>Check answer</button></form>`}
      ${s.checked ? `<div class="feedback ${s.isCorrect ? '' : 'wrong'}" role="status"><h3>${s.isCorrect ? 'Correct' : 'Keep this connection'}</h3><div class="answer">${h(q.answer)}</div><p lang="ru">${h(q.explain)}</p>${q.entryId ? example(E.entries[q.entryId].examples[0]) : ''}<div class="grades" aria-label="Schedule this direction"><button data-action="grade" data-grade="1" type="button">Again<small>1 minute</small></button><button data-action="grade" data-grade="2" type="button">Hard<small>short interval</small></button><button data-action="grade" data-grade="3" type="button" ${!s.isCorrect ? 'disabled' : ''}>Good<small>normal interval</small></button><button data-action="grade" data-grade="4" type="button" ${!s.isCorrect ? 'disabled' : ''}>Easy<small>longer interval</small></button></div></div>` : '<p class="small muted" lang="ru">Сначала вспомните ответ. Разбор появится после проверки.</p>'}</section></div>`;
    $('#session-fill').style.width = `${s.index / s.questions.length * 100}%`;
    if (!s.checked) $('#typed-answer')?.focus({ preventScroll: true }); else $('.feedback')?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    chrome();
  }
  function answer(value) {
    const s = ui.session; if (!s || s.checked || !String(value).trim()) return;
    s.input = value; s.isCorrect = E.checkAnswer(s.questions[s.index], value); s.checked = true; if (s.isCorrect) s.correct++; drawQuestion();
  }
  function progress() {
    ui.family = '';
    const stats = E.store.stats(), summary = E.contentSummary(), entries = Object.values(E.entries);
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const rows = levels.map(level => {
      const sense = entries.filter(w => w.cefr.level === level && w.cefr.scope === 'sense').length;
      const word = entries.filter(w => w.cefr.level === level && w.cefr.scope === 'lexeme-pos').length;
      return `<tr><td>${level}</td><td>${sense}</td><td>${word}</td><td>${E.target[level] ? E.target[level] + '%' : 'outside main target'}</td></tr>`;
    }).join('');
    main.innerHTML = header('PROGRESS & DATA', 'Two directions.<br><em>Evidence you can inspect.</em>', 'Узнавание и самостоятельное воспроизведение учитываются раздельно. Метки источников описывают материал, а не ваш достигнутый уровень языка.') +
      `<div class="direction-cards"><div class="direction-card"><span class="eyebrow">RECOGNITION</span><strong>${stats.rec}</strong><h3>${stats.dueRec} due now</h3><p lang="ru">Английский контекст → значение</p></div>
      <div class="direction-card"><span class="eyebrow">PRODUCTION</span><strong>${stats.prod}</strong><h3>${stats.dueProd} due now</h3><p lang="ru">Значение или пропуск → английский</p></div></div><p class="eyebrow">${stats.completed} TOTAL RATINGS</p>
      <div class="section-head"><h2>Content evidence</h2></div>
      <div class="metrics"><div class="metric"><strong>${summary.meaningsChecked}/${summary.total}</strong><span>MEANINGS REVIEWED</span></div><div class="metric"><strong>${summary.senseRated}</strong><span>SENSE CEFR LABELS</span></div><div class="metric"><strong>${summary.wordRated}</strong><span>WORD/POS LABELS</span></div><div class="metric"><strong>${summary.unrated}</strong><span>CEFR UNRATED</span></div></div>
      <p class="small muted" lang="ru">Проверка значения и редактура примера не создают отсутствующую метку CEFR. Для ${summary.constructedReviewed} речевых блоков проверены составляющие и грамматическая модель; это не отдельные словарные CEFR-единицы.</p>
      <div class="section-head"><h2>Levels & scope</h2></div>
      <p class="small muted" lang="ru">Основная метка взята из Cambridge для конкретного значения; при её отсутствии может использоваться Oxford для слова с частью речи. Все дополнительные оценки сохранены в карточке. В ${summary.conflicts} записях уровни источников различаются; область разметки также различается.</p>
      <table class="distribution"><thead><tr><th>Primary level</th><th>Sense-rated</th><th>Word/POS-rated</th><th>Curriculum target</th></tr></thead><tbody>${rows}</tbody></table>
      <div class="notice"><p lang="ru">Подтверждённых меток B2 для конкретных значений: ${summary.b2SenseRated}. Это материал для изучения, а не доказательство полного покрытия B2. Единицы без уровня и учебные цели не включены в подтверждённые B2.</p><p>${external('SOURCES.md', 'Source audit')} · ${external('COVERAGE.md', 'Curriculum coverage')}</p></div>
      <div class="section-head"><h2>Keep your progress</h2></div>
      <p class="small muted" lang="ru">Локальный файл и опубликованный сайт могут иметь отдельные хранилища. Экспортируйте прогресс перед переносом. Импорт заменяет только прогресс English после проверки файла. Идентификаторы существующих карточек сохранены.</p>
      <div class="actions toolbar"><button type="button" class="primary" data-action="export">Export progress</button><button type="button" data-action="pick-import">Import English progress</button><input type="file" id="import-file" class="file-input" accept="application/json,.json"></div>
      <div class="section-head"><h2>Module health</h2><span class="tag ${E.errors.length ? 'opaque' : ''}">${E.errors.length ? 'Check needed' : 'Structure validated'}</span></div>
      <p class="small muted">${E.families.length} families · ${E.affixes.length} affixes · ${E.classical.length} classical roots · ${E.grammar.length} grammar topics</p>
      <div class="related"><a href="ARCHITECTURE.md">Architecture</a><a href="README.md">Preview guide</a><a href="SOURCES.md">Sources</a><a href="COVERAGE.md">Coverage</a></div>`;
  }
  function notFound() { main.innerHTML = header('PAGE NOT FOUND', 'No entry here.', '', '<a class="button primary" href="#/roots">Open word families</a>'); }
  function current() {
    const [path, query = ''] = location.hash.replace(/^#\/?/, '').split('?');
    try { return { parts: (path || 'words').split('/').map(decodeURIComponent), params: new URLSearchParams(query) }; }
    catch (err) { return { parts: ['unknown'], params: new URLSearchParams() }; }
  }
  function route() {
    ui.session = null; closeMenu(); closeDropdowns();
    const { parts, params } = current();
    main.classList.toggle('topic-screen', E.sections.some(s => s.id === parts[0]));
    if (parts[2] !== 'learn') ui.lesson = null;
    ui.search = ''; ui.level = 'all'; ui.page = 0; $('#family-search').value = '';
    if (E.sections.some(s => s.id === parts[0])) {
      const section = E.sections.find(s => s.id === parts[0]), t = E.topicByKey(parts[0] + ':' + parts[1]);
      if (!parts[2]) sectionPage(parts[0], parts[1]);
      else if (!t) notFound();
      else if (parts[2] === 'browse') topicBrowse(section, t);
      else if (parts[2] === 'learn') startLesson(t);
      else if (parts[2] === 'item' && t.entryIds.includes(parts[3])) main.innerHTML = lessonCard(section, t, E.entries[parts[3]], 'Browse', null, false);
      else notFound();
    }
    else if (parts[0] === 'roots') roots();
    else if (parts[0] === 'family') family(parts[1], parts[2]);
    else if (['prefixes', 'suffixes', 'classical'].includes(parts[0])) references(parts[0], parts[1]);
    else if (parts[0] === 'affix') { const a = E.affixes.find(a => a.id === parts[1]); a ? references(a.kind === 'prefix' ? 'prefixes' : 'suffixes', a.id) : notFound(); }
    else if (parts[0] === 'vocabulary') vocabulary(parts[1] || 'all');
    else if (parts[0] === 'grammar') grammar();
    else if (parts[0] === 'practice' || parts[0] === 'review') practice(params, parts[0] === 'review');
    else if (['progress', 'stats'].includes(parts[0])) progress();
    else notFound();
    chrome(); window.scrollTo(0, 0); main.focus({ preventScroll: true });
  }
  function closeMenu() { $('#sidebar').classList.remove('open'); $('#sidebar-scrim').hidden = true; $('#menu-button').setAttribute('aria-expanded', 'false'); }
  function setDropdown(menu, open) {
    menu.querySelector('.nav-trigger').setAttribute('aria-expanded', String(open));
    menu.querySelector('.nav-menu').hidden = !open;
  }
  function closeDropdowns(except) { document.querySelectorAll('.nav-dropdown').forEach(menu => { if (menu !== except) setDropdown(menu, false); }); }
  document.querySelectorAll('.nav-dropdown').forEach(menu => {
    const trigger = menu.querySelector('.nav-trigger');
    menu.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse' && matchMedia('(hover: hover)').matches) { closeDropdowns(menu); setDropdown(menu, true); } });
    menu.addEventListener('pointerleave', event => { if (event.pointerType === 'mouse' && !menu.contains(document.activeElement)) setDropdown(menu, false); });
    trigger.addEventListener('click', () => { const open = trigger.getAttribute('aria-expanded') !== 'true'; closeDropdowns(); setDropdown(menu, open); });
    menu.addEventListener('focusout', event => { if (!menu.contains(event.relatedTarget)) setDropdown(menu, false); });
    menu.addEventListener('keydown', event => {
      if (event.key === 'Escape') { event.preventDefault(); trigger.focus(); setDropdown(menu, false); }
      if (event.key === 'ArrowDown' && event.target === trigger) { event.preventDefault(); closeDropdowns(menu); setDropdown(menu, true); menu.querySelector('a').focus(); }
    });
  });
  document.addEventListener('click', event => { if (!event.target.closest('.nav-dropdown')) closeDropdowns(); });
  document.addEventListener('click', event => {
    const el = event.target.closest('[data-action]'); if (!el || el.disabled) return;
    const action = el.dataset.action;
    if (action.startsWith('lesson-') && ['lesson-know', 'lesson-learn', 'lesson-later'].includes(action)) lessonChoice(action.slice(7));
    else if (action === 'learn-more') { const t = ui.lesson && E.topicByKey(ui.lesson.key); if (t) startLesson(t); }
    else if (action === 'item-know') { E.store.markKnown(el.dataset.id); route(); }
    else if (action === 'lesson-why') { const panel = $('#lesson-why'); panel.hidden = !panel.hidden; el.setAttribute('aria-expanded', String(!panel.hidden)); }
    else if (action === 'select-word') { ui.selected = el.dataset.id; document.querySelectorAll('.word-node').forEach(n => { const selected = n.dataset.id === ui.selected; n.classList.toggle('selected', selected); n.setAttribute('aria-pressed', String(selected)); }); $('#word-detail').innerHTML = detail(E.entries[ui.selected]); }
    else if (action === 'expand-family') { ui.expanded = !ui.expanded; family(ui.family); }
    else if (action === 'enroll-topic') { const t = E.topicByKey(el.dataset.topic); if (t) { t.entryIds.forEach(id => E.store.enroll(id)); chrome(); toast('Topic added to review · both directions'); } }
    else if (action === 'copy-prompt') { const input = $('#speaking-prompt'); if (input) { const fallback = () => { input.focus(); input.select(); toast('Prompt selected. Press Ctrl+C to copy.'); }; if (navigator.clipboard?.writeText) navigator.clipboard.writeText(input.value).then(() => toast('Speaking prompt copied')).catch(fallback); else fallback(); } }
    else if (action === 'enroll') { E.store.enroll(el.dataset.id); if (current().parts[2] === 'item') route(); else chrome(); toast('Added to review'); }
    else if (action === 'pronounce') {
      const w = E.entries[el.dataset.id]; if (!w) return;
      if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) { toast('Pronunciation is unavailable in this browser.'); return; }
      const utterance = new SpeechSynthesisUtterance(el.dataset.example ? E.plain(w.examples[Number(el.dataset.exampleIndex) || 0]?.en || w.examples[0].en) : w.headword);
      utterance.lang = 'en-GB'; utterance.rate = 0.9;
      const voice = speechSynthesis.getVoices().find(v => /^en-GB/i.test(v.lang)) || speechSynthesis.getVoices().find(v => /^en/i.test(v.lang));
      if (voice) utterance.voice = voice;
      utterance.onerror = event => { if (!['interrupted', 'canceled'].includes(event.error)) toast('Pronunciation is unavailable. Check your English speech voices.'); };
      speechSynthesis.cancel(); speechSynthesis.speak(utterance);
    }
    else if (action === 'answer-choice') answer(el.dataset.value);
    else if (action === 'grade') {
      const s = ui.session; if (!s || !s.checked || s.index >= s.questions.length) return;
      const grade = Number(el.dataset.grade); if (!s.isCorrect && grade > 2) return;
      E.store.grade(s.questions[s.index].cardKey, grade); s.index++; s.graded++; s.checked = false; s.input = ''; drawQuestion();
    } else if (action === 'end-session') { ui.session = null; const r = current(); if (['practice', 'review'].includes(r.parts[0])) practice(r.params, r.parts[0] === 'review'); else route(); }
    else if (action === 'quick-question') { const item = E.affixes.concat(E.grammar).find(x => x.id === el.dataset.id); if (item) { ui.session = { questions: item.production ? [E.referenceQuestion(item), E.referenceQuestion(item, 'prod')] : [E.referenceQuestion(item)], index: 0, correct: 0, graded: 0, checked: false, isCorrect: false, input: '' }; drawQuestion(); main.scrollIntoView({ block: 'start' }); } }
    else if (action === 'page-prev' || action === 'page-next') { ui.page += action === 'page-next' ? 1 : -1; renderVocabulary(current().parts[1] || 'all'); $('#vocab-search').scrollIntoView({ block: 'start' }); }
    else if (action === 'export') { const blob = new Blob([E.store.export()], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = `etrnl-english-${new Date().toISOString().slice(0, 10)}.json`; document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000); toast('English progress exported'); }
    else if (action === 'pick-import') $('#import-file').click();
  });
  document.addEventListener('submit', event => {
    if (event.target.id === 'session-form') { event.preventDefault(); startSession(event.target); }
    else if (event.target.id === 'answer-form') { event.preventDefault(); answer($('#typed-answer').value); }
  });
  document.addEventListener('input', event => {
    if (event.target.id === 'family-search') familyList();
    if (event.target.id === 'root-query') { ui.search = event.target.value; $('#root-grid').innerHTML = filteredFamilies().map(familyTile).join('') || '<p class="muted">No matching families.</p>'; }
    if (event.target.id === 'vocab-search') { ui.search = event.target.value; ui.page = 0; renderVocabulary(current().parts[1] || 'all'); }
  });
  document.addEventListener('change', async event => {
    if (event.target.id === 'vocab-level') { ui.level = event.target.value; ui.page = 0; renderVocabulary(current().parts[1] || 'all'); }
    if (event.target.id === 'exercise-kind') modeHelp();
    if (event.target.id === 'import-file') {
      const file = event.target.files[0]; if (!file) return;
      try { if (file.size > 2000000) throw new Error('File exceeds 2 MB.'); E.store.import(await file.text()); progress(); chrome(); toast('English progress imported'); }
      catch (err) { toast('Import failed: ' + err.message); }
      finally { if ($('#import-file')) $('#import-file').value = ''; }
    }
  });
  $('#menu-button').addEventListener('click', () => { const open = !$('#sidebar').classList.contains('open'); $('#sidebar').classList.toggle('open', open); $('#sidebar-scrim').hidden = !open; $('#menu-button').setAttribute('aria-expanded', String(open)); if (open) ($('#topic-sidebar').hidden ? $('#family-search') : $('#topic-sidebar a[aria-current="page"]') || $('#topic-sidebar a'))?.focus(); });
  $('#sidebar-scrim').addEventListener('click', closeMenu);
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); closeDropdowns(); } });
  document.addEventListener('keydown', event => {
    const lesson = ui.lesson;
    if (!lesson || current().parts[2] !== 'learn' || event.repeat || event.ctrlKey || event.altKey || event.metaKey || event.defaultPrevented || event.target.closest('input,select,textarea,[contenteditable="true"]')) return;
    if (event.key === 'Escape') { event.preventDefault(); location.hash = topicPath(E.topicByKey(lesson.key)); }
    else if (['1', '2', '3'].includes(event.key)) { event.preventDefault(); lessonChoice({ 1: 'know', 2: 'learn', 3: 'later' }[event.key]); }
    else if (event.key.toLowerCase() === 'p') { event.preventDefault(); main.querySelector('.lesson-word-row [data-action="pronounce"]')?.click(); }
  });
  window.addEventListener('hashchange', route); window.addEventListener('resize', drawMap);
  try {
    const errors = E.validate();
    if (errors.length) { main.innerHTML = `<div class="empty"><h1>Catalogue check failed</h1><p>${h(errors.slice(0, 10).join('; '))}</p></div>`; }
    else route();
  } catch (err) { main.innerHTML = `<div class="empty"><h1>English could not start</h1><p>${h(err.message)}</p></div>`; }
})(ETEnglish);
