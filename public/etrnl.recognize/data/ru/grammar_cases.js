/* RUSSIAN GRAMMAR · в / на: location (prepositional) vs direction (accusative). */
GT.registerGrammar({
  id: 'cases',
  title: { en: 'в / на: where? (prepositional) vs where to? (accusative)', de: 'в / на: wo? (Präpositiv) vs. wohin? (Akkusativ)' },
  summary: { en: 'Like German in/auf + Dativ/Akkusativ: location takes the prepositional, direction the accusative.', de: 'Wie in/auf + Dativ/Akkusativ: Ort → Präpositiv, Richtung → Akkusativ.' },
  explanation: {
    en: '<p>The prepositions <b>в</b> (in) and <b>на</b> (on, at) take two different cases:</p>' +
      '<ul><li><b>Где?</b> (where?) → <b>prepositional</b>: <em>Я в о́фисе. Я на рабо́те.</em></li>' +
      '<li><b>Куда́?</b> (where to?) → <b>accusative</b>: <em>Я иду́ в о́фис. Я иду́ на рабо́ту.</em></li></ul>' +
      '<p>With в and на, use the accusative for a destination and the prepositional for the place where an action happens. Compare <em>е́ду в па́рк</em> (heading to the park) and <em>гуля́ю в па́рке</em> (walking around in the park).</p>' +
      '<p>Which preposition? <b>в</b> for enclosed spaces, cities and countries (в Москве́, в Герма́нии); <b>на</b> for open areas, events and some fixed words: на рабо́те, на у́лице, на конфере́нции, на вокза́ле, на Кавка́зе. These must be learned.</p>' +
      '<p>Prepositional ending: mostly <b>-е</b> (в о́фисе, на у́лице); feminine in -ь and nouns in -ия/-ие → <b>-и</b> (в Герма́нии, в сети́).</p>',
    de: '<p>Die Präpositionen <b>в</b> (in) und <b>на</b> (auf, an) verlangen zwei Fälle:</p>' +
      '<ul><li><b>Где?</b> (wo?) → <b>Präpositiv</b>: <em>Я в о́фисе. Я на рабо́те.</em></li>' +
      '<li><b>Куда́?</b> (wohin?) → <b>Akkusativ</b>: <em>Я иду́ в о́фис. Я иду́ на рабо́ту.</em></li></ul>' +
      '<p>Bei в und на steht das Ziel im Akkusativ, der Ort der Handlung im Präpositiv. Vergleiche <em>е́ду в па́рк</em> (ich fahre in den Park) und <em>гуля́ю в па́рке</em> (ich gehe im Park spazieren).</p>' +
      '<p>Welche Präposition? <b>в</b> für geschlossene Räume, Städte und Länder (в Москве́, в Герма́нии); <b>на</b> für offene Flächen, Veranstaltungen und feste Wörter: на рабо́те, на у́лице, на конфере́нции, на вокза́ле. Diese muss man lernen.</p>' +
      '<p>Präpositiv-Endung: meist <b>-е</b> (в о́фисе, на у́лице); Feminina auf -ь und Wörter auf -ия/-ие → <b>-и</b> (в Герма́нии, в сети́).</p>'
  },
  tables: [
    { caption: { en: 'Where? vs where to?', de: 'Wo? vs. wohin?' },
      head: { en: ['', 'Где? (prepositional)', 'Куда́? (accusative)'], de: ['', 'Где? (Präpositiv)', 'Куда́? (Akkusativ)'] },
      deCols: [1, 2],
      rows: { en: [['office (m)', 'в о́фисе', 'в о́фис'], ['work (f)', 'на рабо́те', 'на рабо́ту'], ['Germany (f, -ия)', 'в Герма́нии', 'в Герма́нию'], ['meeting (n)', 'на совеща́нии', 'на совеща́ние']],
              de: [['Büro (m)', 'в о́фисе', 'в о́фис'], ['Arbeit (f)', 'на рабо́те', 'на рабо́ту'], ['Deutschland (f, -ия)', 'в Герма́нии', 'в Герма́нию'], ['Besprechung (n)', 'на совеща́нии', 'на совеща́ние']] } }
  ],
  examples: [
    { t: 'Сейча́с я [[на совеща́нии]].', en: 'I’m in a meeting right now.', de: 'Ich bin gerade in einer Besprechung.' },
    { t: 'Я иду́ [[на совеща́ние]].', en: 'I’m going to a meeting.', de: 'Ich gehe zu einer Besprechung.' },
    { t: 'Мы живём [[в Герма́нии]].', en: 'We live in Germany.', de: 'Wir leben in Deutschland.' }
  ],
  pitfalls: [
    { title: { en: 'на работе, not *в работе', de: 'на работе, nicht *в работе' },
      html: { en: '“At work” is <em>на рабо́те</em>. An example with a different meaning is <em>зада́ча в рабо́те</em> (the task is in progress).', de: '„Bei der Arbeit“ heißt <em>на рабо́те</em>. Eine andere Bedeutung hat <em>зада́ча в рабо́те</em> (die Aufgabe ist in Bearbeitung).' } },
    { title: { en: 'Feminine nouns in -ь / -ия take -и', de: 'Feminina auf -ь / -ия: Endung -и' },
      html: { en: '<em>в сети́</em> (not *в сете), <em>в Росси́и</em>, <em>в компа́нии</em>.', de: '<em>в сети́</em> (nicht *в сете), <em>в Росси́и</em>, <em>в компа́нии</em>.' } },
    { title: { en: 'The accusative marks the destination', de: 'Der Akkusativ bezeichnet das Ziel' },
      html: { en: 'Compare <em>положи́ в па́пку</em> (put it into the folder) and <em>лежи́т в па́пке</em> (it’s in the folder). Ask whether the phrase describes the destination or the location.', de: 'Vergleiche <em>положи́ в па́пку</em> (leg es in den Ordner) und <em>лежи́т в па́пке</em> (es liegt im Ordner). Frage, ob die Wendung das Ziel oder den Ort bezeichnet.' } }
  ],
  drills: [
    { id: 'ru-g-cases-1', kind: 'choice', q: 'Я сейча́с ___, перезвоню́ по́зже.', options: ['на совеща́нии', 'на совеща́ние'], answer: 0,
      explain: { en: 'Where am I? → location → prepositional: на совещании.', de: 'Wo bin ich? → Ort → Präpositiv: на совещании.' } },
    { id: 'ru-g-cases-2', kind: 'choice', q: 'За́втра я е́ду ___.', options: ['в Берли́не', 'в Берли́н'], answer: 1,
      explain: { en: 'Where to? (е́ду = movement) → accusative: в Берлин.', de: 'Wohin? (е́ду = Bewegung) → Akkusativ: в Берлин.' } },
    { id: 'ru-g-cases-3', kind: 'choice', q: 'Она́ рабо́тает ___ IT-компа́нии.', options: ['в', 'на'], answer: 0,
      explain: { en: 'A company is an organisation you are “inside”: в компании.', de: 'Eine Firma ist eine Organisation, in der man ist: в компании.' } },
    { id: 'ru-g-cases-4', kind: 'choice', q: 'Мы встре́тились ___ конфере́нции.', options: ['в', 'на'], answer: 1,
      explain: { en: 'Events take на: на конференции, на совещании, на концерте.', de: 'Veranstaltungen nehmen на: на конференции, на совещании, на концерте.' } },
    { id: 'ru-g-cases-5', kind: 'gap', q: 'Файл лежи́т в ___. (па́пка)', answer: 'па́пке',
      hint: { en: 'Where is it? Put the noun into the prepositional.', de: 'Wo liegt sie? Setze das Substantiv in den Präpositiv.' },
      explain: { en: 'Location → prepositional: па́пка → в па́пке.', de: 'Ort → Präpositiv: па́пка → в па́пке.' } },
    { id: 'ru-g-cases-6', kind: 'gap', q: 'Положи́ файл в ___. (па́пка)', answer: 'па́пку',
      hint: { en: 'Where to? Put the noun into the accusative.', de: 'Wohin? Setze das Substantiv in den Akkusativ.' },
      explain: { en: 'Direction (положи́ = put) → accusative: в па́пку.', de: 'Richtung (положи́ = leg) → Akkusativ: в па́пку.' } },
    { id: 'ru-g-cases-7', kind: 'gap', q: 'Пробле́ма в ___. (сеть)', answer: 'сети́',
      hint: { en: 'Feminine noun in -ь, prepositional.', de: 'Femininum auf -ь, Präpositiv.' },
      explain: { en: 'Feminine nouns in -ь take -и in the prepositional (and сеть is stressed on the ending after в): в сети́.', de: 'Feminina auf -ь haben im Präpositiv -и (сеть ist nach в endbetont): в сети́.' } },
    { id: 'ru-g-cases-8', kind: 'choice', q: 'Я жду тебя́ ___ у́лице.', options: ['в', 'на'], answer: 1,
      explain: { en: 'Street = open space → на улице.', de: 'Straße = offener Raum → на улице.' } }
  ]
});
