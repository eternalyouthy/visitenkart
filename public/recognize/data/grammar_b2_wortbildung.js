/* German GRAMMAR · B2 · Word formation with suffixes: -bar, -los, -haft, -sam (adjectives); -ung, -heit / -keit, -schaft (nouns).
 * Word families per suffix live in Roots (data/suffixes.js): this lesson is the grammar overview and links there. Explanations ru + en inline. */
GT.registerGrammar({
  id: 'wortbildung',
  level: 'B2',
  title: { ru: 'Словообразование: -bar, -los, -haft, -sam, -ung, -heit/-keit, -schaft', en: 'Word formation: -bar, -los, -haft, -sam, -ung, -heit/-keit, -schaft' },
  summary: {
    ru: 'lesbar, kostenlos, fehlerhaft, sparsam; die Lösung, die Freiheit, die Freundschaft. Что значит суффикс и почему все эти существительные — die.',
    en: 'lesbar, kostenlos, fehlerhaft, sparsam; die Lösung, die Freiheit, die Freundschaft. What each suffix means and why all these nouns are die.'
  },
  explanation: {
    ru: '<p>Суффиксы позволяют понять незнакомое слово и угадать его <b>род</b>. Подробные семьи слов для каждого суффикса — в разделе Roots: ' +
      '<a href="#/roots/s-bar">-bar</a>, <a href="#/roots/s-los">-los</a>, <a href="#/roots/s-ung">-ung</a>, <a href="#/roots/s-heit">-heit / -keit</a>, <a href="#/roots/s-schaft">-schaft</a>, <a href="#/roots/s-lich">-lich</a>.</p>' +
      '<p><b>Прилагательные:</b></p>' +
      '<ul>' +
      '<li><b>-bar</b> (от глагола) = «можно сделать», как русское «-имый / -емый»: <em>lesbar</em> (читаемый), <em>essbar</em> (съедобный), <em>erreichbar</em> (доступный, на связи), <em>machbar</em> (выполнимый).</li>' +
      '<li><b>-los</b> (от существительного) = «без», как «без-»: <em>arbeitslos</em> (безработный), <em>kostenlos</em> (бесплатный), <em>sinnlos</em> (бессмысленный), <em>hilflos</em> (беспомощный).</li>' +
      '<li><b>-haft</b> = «обладающий качеством / похожий на»: <em>fehlerhaft</em> (с ошибками), <em>ernsthaft</em> (серьёзный), <em>lebhaft</em> (оживлённый), <em>glaubhaft</em> (правдоподобный), <em>vorteilhaft</em> (выгодный).</li>' +
      '<li><b>-sam</b> = «склонный к»: <em>sparsam</em> (экономный), <em>aufmerksam</em> (внимательный), <em>wirksam</em> (действенный), <em>einsam</em> (одинокий), <em>gemeinsam</em> (совместный).</li>' +
      '</ul>' +
      '<p><b>Существительные — всегда die:</b></p>' +
      '<ul>' +
      '<li><b>-ung</b> (от глагола) ≈ «-ние»: <em>lösen → die Lösung, wohnen → die Wohnung, meinen → die Meinung</em>.</li>' +
      '<li><b>-heit / -keit</b> (от прилагательного) ≈ «-ость»: <em>frei → die Freiheit, gesund → die Gesundheit</em>; <b>-keit</b> после <em>-ig, -lich, -bar, -sam, -er</em>: <em>möglich → die Möglichkeit, sauber → die Sauberkeit, sparsam → die Sparsamkeit</em>.</li>' +
      '<li><b>-schaft</b> ≈ «-ство», группа или отношение: <em>der Freund → die Freundschaft, der Nachbar → die Nachbarschaft, die Mannschaft, die Wissenschaft</em>.</li>' +
      '</ul>' +
      '<p>Суффиксы складываются в цепочки: <em>erreichen → erreichbar → die Erreichbarkeit</em>, <em>die Arbeit → arbeitslos → die Arbeitslosigkeit</em>.</p>',
    en: '<p>Suffixes help you decode unknown words and predict their <b>gender</b>. Full word families for each suffix are in Roots: ' +
      '<a href="#/roots/s-bar">-bar</a>, <a href="#/roots/s-los">-los</a>, <a href="#/roots/s-ung">-ung</a>, <a href="#/roots/s-heit">-heit / -keit</a>, <a href="#/roots/s-schaft">-schaft</a>, <a href="#/roots/s-lich">-lich</a>.</p>' +
      '<p><b>Adjectives:</b></p>' +
      '<ul>' +
      '<li><b>-bar</b> (from a verb) ≈ English <b>-able</b>: <em>lesbar</em> (readable), <em>essbar</em> (edible), <em>erreichbar</em> (reachable), <em>machbar</em> (doable).</li>' +
      '<li><b>-los</b> (from a noun) ≈ English <b>-less</b>: <em>arbeitslos</em> (jobless), <em>hilflos</em> (helpless), <em>sinnlos</em> (pointless), <em>kostenlos</em> (free of charge).</li>' +
      '<li><b>-haft</b> = “having the quality of”: <em>fehlerhaft</em> (faulty), <em>ernsthaft</em> (serious), <em>lebhaft</em> (lively), <em>glaubhaft</em> (credible), <em>vorteilhaft</em> (advantageous). It is not English “-ful”.</li>' +
      '<li><b>-sam</b> = “tending to”, sometimes like <b>-some</b>: <em>einsam</em> (lonesome), <em>sparsam</em> (thrifty), <em>aufmerksam</em> (attentive), <em>wirksam</em> (effective), <em>gemeinsam</em> (joint).</li>' +
      '</ul>' +
      '<p><b>Nouns — always die:</b></p>' +
      '<ul>' +
      '<li><b>-ung</b> (from a verb) ≈ <b>-ing / -tion</b>: <em>lösen → die Lösung, wohnen → die Wohnung, meinen → die Meinung</em>.</li>' +
      '<li><b>-heit / -keit</b> (from an adjective) ≈ <b>-ness / -ity / -dom</b>: <em>frei → die Freiheit</em> (freedom), <em>gesund → die Gesundheit</em>; <b>-keit</b> after <em>-ig, -lich, -bar, -sam, -er</em>: <em>möglich → die Möglichkeit, sauber → die Sauberkeit</em>.</li>' +
      '<li><b>-schaft</b> ≈ <b>-ship / -hood</b>: <em>die Freundschaft</em> (friendship), <em>die Nachbarschaft</em> (neighbourhood), <em>die Mannschaft</em> (team), <em>die Wissenschaft</em> (science).</li>' +
      '</ul>' +
      '<p>Suffixes stack: <em>erreichen → erreichbar → die Erreichbarkeit</em>, <em>die Arbeit → arbeitslos → die Arbeitslosigkeit</em>.</p>'
  },
  tables: [
    {
      caption: { ru: 'Суффиксы', en: 'Suffixes' },
      head: { ru: ['Суффикс', 'Из чего', 'Значение', 'Примеры'], en: ['Suffix', 'From', 'Meaning', 'Examples'] },
      deCols: [0, 3],
      rows: {
        ru: [
          ['-bar', 'глагол', 'можно (-имый)', 'lesbar, essbar, erreichbar'],
          ['-los', 'существительное', 'без (без-)', 'arbeitslos, kostenlos, sinnlos'],
          ['-haft', 'существ. / прил.', 'с качеством, похожий', 'fehlerhaft, ernsthaft, lebhaft'],
          ['-sam', 'глагол / существ.', 'склонный к', 'sparsam, aufmerksam, wirksam'],
          ['die -ung', 'глагол', 'действие, результат (-ние)', 'die Lösung, die Meinung'],
          ['die -heit / -keit', 'прилагательное', 'качество (-ость)', 'die Freiheit, die Möglichkeit'],
          ['die -schaft', 'существительное', 'группа, отношение (-ство)', 'die Freundschaft, die Mannschaft']
        ],
        en: [
          ['-bar', 'verb', '-able', 'lesbar, essbar, erreichbar'],
          ['-los', 'noun', '-less, without', 'arbeitslos, kostenlos, sinnlos'],
          ['-haft', 'noun / adj.', 'having the quality', 'fehlerhaft, ernsthaft, lebhaft'],
          ['-sam', 'verb / noun', 'tending to', 'sparsam, aufmerksam, wirksam'],
          ['die -ung', 'verb', 'action, result (-ing, -tion)', 'die Lösung, die Meinung'],
          ['die -heit / -keit', 'adjective', 'quality (-ness, -ity)', 'die Freiheit, die Möglichkeit'],
          ['die -schaft', 'noun', 'group, relation (-ship)', 'die Freundschaft, die Mannschaft']
        ]
      }
    }
  ],
  examples: [
    { de: 'Der Eintritt ins Museum ist heute [[kostenlos]].', ru: 'Вход в музей сегодня бесплатный.', en: 'Admission to the museum is free today.' },
    { de: 'Ich bin morgen den ganzen Tag telefonisch [[erreichbar]].', ru: 'Завтра я весь день на связи по телефону.', en: 'I can be reached by phone all day tomorrow.' },
    { de: 'Die Lieferung war [[fehlerhaft]], deshalb haben wir sie zurückgeschickt.', ru: 'Поставка была с браком, поэтому мы её вернули.', en: 'The delivery was faulty, so we sent it back.' },
    { de: 'Wir müssen mit dem Wasser [[sparsam]] umgehen.', ru: 'Воду нужно расходовать экономно.', en: 'We have to use water sparingly.' },
    { de: 'Gibt es eine [[Möglichkeit]], den Termin zu verschieben?', ru: 'Есть ли возможность перенести приём?', en: 'Is there any way to move the appointment?' },
    { de: 'Wir wohnen in einer sehr ruhigen [[Nachbarschaft]].', ru: 'Мы живём в очень тихом районе.', en: 'We live in a very quiet neighbourhood.' }
  ],
  pitfalls: [
    {
      title: { ru: '-ung и -schaft — женский род, хотя «-ние» и «-ство» средний', en: 'Every -ung / -heit / -keit / -schaft noun is die' },
      html: {
        ru: 'Русские «решение», «соседство», «общество» — среднего рода, отсюда <span class="wrong">das Lösung</span>, <span class="wrong">das Nachbarschaft</span>. Правильно: <span class="right">die Lösung</span>, <span class="right">die Freundschaft</span>, <span class="right">die Möglichkeit</span> — без исключений.',
        en: 'English has no gender to help you, so learn the rule: <span class="right">die Lösung</span>, <span class="right">die Freiheit</span>, <span class="right">die Möglichkeit</span>, <span class="right">die Freundschaft</span> — no exceptions. Not <span class="wrong">das Freundschaft</span> even though der Freund is masculine.'
      }
    },
    {
      title: { ru: 'kostenlos ≠ kostbar', en: 'False friends: kostbar, -haft' },
      html: {
        ru: '<span class="right">kostenlos</span> — бесплатный, <span class="right">kostbar</span> — драгоценный. <span class="right">fehlerhaft</span> — с ошибками, а «безошибочный» — <span class="right">fehlerfrei</span>. Не путайте противоположные суффиксы.',
        en: '<span class="right">kostbar</span> is not “costable” but “precious”; “free of charge” is <span class="right">kostenlos</span>. <span class="right">fehlerhaft</span> means “faulty”, not “careful” — -haft is not “-ful”. “Flawless” is <span class="right">fehlerfrei</span>.'
      }
    },
    {
      title: { ru: '-heit или -keit', en: '-heit or -keit' },
      html: {
        ru: 'После <em>-ig, -lich, -bar, -sam, -er, -el</em> — <b>-keit</b>: <span class="right">die Sauberkeit, die Möglichkeit, die Dankbarkeit</span>. Не <span class="wrong">die Möglichheit</span>. После коротких корней — обычно -heit: <span class="right">die Freiheit, die Krankheit</span>.',
        en: 'After <em>-ig, -lich, -bar, -sam, -er, -el</em> use <b>-keit</b>: <span class="right">die Sauberkeit, die Möglichkeit, die Dankbarkeit</span>, not <span class="wrong">die Möglichheit</span>. Short stems usually take -heit: <span class="right">die Freiheit, die Krankheit</span>.'
      }
    }
  ],
  drills: [
    {
      id: 'g-wb-d1', kind: 'choice',
      q: 'Kann man diese Pilze essen? — Ja, sie sind ___.',
      options: ['essbar', 'essig', 'esslich'],
      answer: 0,
      explain: { ru: '-bar от глагола = «можно»: essbar — съедобный. Essig — уксус.', en: '-bar from a verb = “can be”: essbar — edible. Essig means vinegar.' }
    },
    {
      id: 'g-wb-d2', kind: 'gap',
      q: 'Er hat seit drei Monaten keine Arbeit. Er ist ___. (Arbeit + -los)',
      answer: 'arbeitslos',
      explain: { ru: '-los = «без»; с соединительным -s-: arbeitslos.', en: '-los = “without”; with the linking -s-: arbeitslos.' }
    },
    {
      id: 'g-wb-d3', kind: 'choice',
      q: 'Für viele Menschen ist ___ das Wichtigste im Leben.',
      options: ['die Freiheit', 'die Freiung', 'die Freischaft'],
      answer: 0,
      explain: { ru: 'Прилагательное frei → die Freiheit (-heit = «-ость / -ота»).', en: 'Adjective frei → die Freiheit (-heit ≈ -dom / -ness).' }
    },
    {
      id: 'g-wb-d4', kind: 'choice',
      q: 'Wir haben noch keine ___ für das Problem gefunden.',
      options: ['Lösung', 'Lösheit', 'Lösschaft'],
      answer: 0,
      explain: { ru: 'Глагол lösen → die Lösung.', en: 'Verb lösen → die Lösung.' }
    },
    {
      id: 'g-wb-d5', kind: 'gap',
      q: 'Er gibt wenig Geld aus, er ist sehr ___. (sparen + -sam)',
      answer: 'sparsam',
      explain: { ru: '-sam = «склонный к»: sparsam — экономный.', en: '-sam = “tending to”: sparsam — thrifty.' }
    },
    {
      id: 'g-wb-d6', kind: 'choice',
      q: 'Die Software ist ___ — sie enthält viele Fehler.',
      options: ['fehlerhaft', 'fehlerlos', 'fehlerbar'],
      answer: 0,
      explain: { ru: 'fehlerhaft — с ошибками. fehlerlos значит обратное: без ошибок.', en: 'fehlerhaft — faulty. fehlerlos means the opposite: flawless.' }
    },
    {
      id: 'g-wb-d7', kind: 'choice',
      q: '___ Freundschaft zwischen den beiden ist sehr eng.',
      options: ['Die', 'Das', 'Der'],
      answer: 0,
      explain: { ru: '-schaft — всегда женский род: die Freundschaft.', en: '-schaft is always feminine: die Freundschaft.' }
    },
    {
      id: 'g-wb-d8', kind: 'gap',
      q: 'Gibt es eine ___, das Ticket online zu kaufen? (möglich + -keit)',
      answer: 'Möglichkeit',
      explain: { ru: 'После -lich → -keit: die Möglichkeit.', en: 'After -lich → -keit: die Möglichkeit.' }
    },
    {
      id: 'g-wb-d9', kind: 'choice',
      q: 'Das Medikament ist sehr ___ — die Schmerzen sind schon weg.',
      options: ['wirksam', 'wirkbar', 'wirkhaft'],
      answer: 0,
      explain: { ru: 'wirken → wirksam (действенный).', en: 'wirken → wirksam (effective).' }
    },
    {
      id: 'g-wb-d10', kind: 'choice',
      q: 'Der Eintritt ist ___ — man muss nichts bezahlen.',
      options: ['kostenlos', 'kostbar', 'kostsam'],
      answer: 0,
      explain: { ru: 'kostenlos — бесплатный; kostbar — драгоценный.', en: 'kostenlos — free of charge; kostbar — precious.' }
    },
    {
      id: 'g-wb-d11', kind: 'choice',
      q: 'Wir wohnen in einer ruhigen ___.',
      options: ['Nachbarschaft', 'Nachbarung', 'Nachbarheit'],
      answer: 0,
      explain: { ru: 'der Nachbar → die Nachbarschaft (окрестность, соседи).', en: 'der Nachbar → die Nachbarschaft (neighbourhood).' }
    },
    {
      id: 'g-wb-d12', kind: 'gap',
      q: 'Ich bin morgen telefonisch jederzeit ___. (erreichen + -bar)',
      answer: 'erreichbar',
      explain: { ru: 'erreichen → erreichbar: до меня можно дозвониться.', en: 'erreichen → erreichbar: I can be reached.' }
    },
    {
      id: 'g-wb-d13', kind: 'choice',
      q: 'Seine Geschichte ist nicht sehr ___ — niemand glaubt ihm.',
      options: ['glaubhaft', 'glaubsam', 'glaublos'],
      answer: 0,
      explain: { ru: 'glaubhaft — правдоподобный, внушающий доверие.', en: 'glaubhaft — credible.' }
    },
    {
      id: 'g-wb-d14', kind: 'choice',
      q: 'Bitte seien Sie ___ und lesen Sie die Anweisungen genau.',
      options: ['aufmerksam', 'aufmerkbar', 'aufmerkhaft'],
      answer: 0,
      explain: { ru: 'aufmerksam — внимательный.', en: 'aufmerksam — attentive.' }
    },
    {
      id: 'g-wb-d15', kind: 'choice',
      q: 'In der Küche ist ___ sehr wichtig.',
      options: ['Sauberkeit', 'Sauberheit', 'Saubernis'],
      answer: 0,
      explain: { ru: 'После -er → -keit: sauber → die Sauberkeit.', en: 'After -er → -keit: sauber → die Sauberkeit.' }
    }
  ]
});
