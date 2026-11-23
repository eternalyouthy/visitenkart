/* ENGLISH vocabulary · extra batch for the thinnest topics (People, Food, Authorities, Society, Environment).
 * Glosses ru / de inline; examples with [[…]]; editorial CEFR study targets. Original examples. */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function W(id, pos, t, level, ru, de, e, note) {
    if (P.items.some(function (x) { return x.t === t; })) return null;   // never duplicate a catalogue headword
    return { id: 'en:more:' + id, pos: pos, t: t, level: level, ru: ru, de: de, examples: [e], learnable: true,
      note: note ? { ru: note[0], de: note[1] } : null };
  }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items.filter(Boolean) }); }

  reg('people', [
    W('acquaintance', 'noun', 'acquaintance', 'B2', 'знакомый, знакомая', 'Bekannte(r)',
      ex('She’s not really a friend, more an [[acquaintance]] from work.', 'Она мне не то чтобы подруга, скорее знакомая с работы.', 'Sie ist nicht wirklich eine Freundin, eher eine Bekannte von der Arbeit.')),
    W('reliable', 'adj', 'reliable', 'B1', 'надёжный', 'zuverlässig',
      ex('Tom is very [[reliable]] — he always does what he promises.', 'Том очень надёжный — всегда делает то, что обещал.', 'Tom ist sehr zuverlässig — er tut immer, was er verspricht.')),
    W('generous', 'adj', 'generous', 'B1', 'щедрый', 'großzügig',
      ex('It was very [[generous]] of you to pay for everyone.', 'Очень щедро с твоей стороны заплатить за всех.', 'Es war sehr großzügig von dir, für alle zu bezahlen.')),
    W('argument', 'noun', 'argument', 'B1', 'ссора, спор; довод', 'Streit; Argument',
      ex('We had an [[argument]] about who should do the dishes.', 'Мы поругались из-за того, кто будет мыть посуду.', 'Wir hatten einen Streit darüber, wer abwaschen soll.'),
      ['Have an argument — поссориться. Второе значение — довод: a strong argument.', 'Have an argument — sich streiten. Zweite Bedeutung: Argument — a strong argument.']),
    W('apologise', 'verb', 'apologise', 'B1', 'извиняться', 'sich entschuldigen',
      ex('He [[apologised]] for being late.', 'Он извинился за опоздание.', 'Er hat sich für die Verspätung entschuldigt.'),
      ['Apologise to someone for something. Амер. написание — apologize.', 'Apologise to someone for something. US spelling: apologize.']),
    W('get-along', 'phrasal verb', 'get along with', 'B1', 'ладить (с кем-то)', 'sich verstehen mit',
      ex('I [[get along with]] my flatmates really well.', 'Я очень хорошо лажу с соседями по квартире.', 'Ich verstehe mich richtig gut mit meinen Mitbewohnern.'))
  ]);

  reg('food', [
    W('recipe', 'noun', 'recipe', 'A2', 'рецепт (блюда)', 'Rezept (Kochen)',
      ex('Can you send me the [[recipe]] for this soup?', 'Пришлёшь мне рецепт этого супа?', 'Kannst du mir das Rezept für diese Suppe schicken?'),
      ['Рецепт врача — prescription, не recipe.', 'Ein ärztliches Rezept heißt prescription, nicht recipe.']),
    W('meal', 'noun', 'meal', 'A2', 'приём пищи, еда', 'Mahlzeit, Essen',
      ex('Lunch is usually my biggest [[meal]] of the day.', 'Обед обычно мой самый плотный приём пищи за день.', 'Das Mittagessen ist meist meine größte Mahlzeit des Tages.')),
    W('spicy', 'adj', 'spicy', 'A2', 'острый, пряный', 'scharf, würzig',
      ex('This curry is too [[spicy]] for me.', 'Это карри для меня слишком острое.', 'Dieses Curry ist mir zu scharf.')),
    W('leftovers', 'noun', 'leftovers', 'B1', 'остатки еды', 'Reste (vom Essen)',
      ex('We had the [[leftovers]] from the party for lunch.', 'На обед мы доели остатки с вечеринки.', 'Zum Mittagessen gab es die Reste von der Party.')),
    W('vegetarian', 'adj', 'vegetarian', 'A2', 'вегетарианский', 'vegetarisch',
      ex('Is there a [[vegetarian]] option on the menu?', 'В меню есть вегетарианское блюдо?', 'Gibt es auf der Karte eine vegetarische Option?')),
    W('order', 'verb', 'order', 'A2', 'заказывать', 'bestellen',
      ex('Are you ready to [[order]]?', 'Вы готовы сделать заказ?', 'Möchten Sie bestellen?'))
  ]);

  reg('authorities', [
    W('registration', 'noun', 'registration', 'B1', 'регистрация', 'Anmeldung, Registrierung',
      ex('[[Registration]] closes on Friday.', 'Регистрация заканчивается в пятницу.', 'Die Anmeldung endet am Freitag.')),
    W('residence-permit', 'noun', 'residence permit', 'B2', 'вид на жительство', 'Aufenthaltserlaubnis',
      ex('My [[residence permit]] expires in March.', 'Мой вид на жительство истекает в марте.', 'Meine Aufenthaltserlaubnis läuft im März ab.')),
    W('id-card', 'noun', 'ID card', 'A2', 'удостоверение личности', 'Personalausweis',
      ex('Please bring your [[ID card]] to the appointment.', 'Пожалуйста, возьмите на приём удостоверение личности.', 'Bitte bringen Sie Ihren Personalausweis zum Termin mit.')),
    W('fee', 'noun', 'fee', 'B1', 'сбор, плата (за услугу)', 'Gebühr',
      ex('There’s a small [[fee]] for a new passport.', 'За новый паспорт берут небольшой сбор.', 'Für einen neuen Pass fällt eine kleine Gebühr an.')),
    W('fill-in', 'phrasal verb', 'fill in', 'A2', 'заполнить (анкету)', 'ausfüllen',
      ex('Please [[fill in]] this form in block capitals.', 'Пожалуйста, заполните анкету печатными буквами.', 'Bitte füllen Sie dieses Formular in Druckbuchstaben aus.'),
      ['Брит. fill in, амер. чаще fill out.', 'Brit. fill in, US more often fill out.']),
    W('submit', 'verb', 'submit', 'B2', 'подавать, представлять (документы)', 'einreichen',
      ex('You must [[submit]] the application by 31 May.', 'Заявление нужно подать до 31 мая.', 'Sie müssen den Antrag bis zum 31. Mai einreichen.'))
  ]);

  reg('society', [
    W('citizen', 'noun', 'citizen', 'B1', 'гражданин, гражданка', 'Bürger(in), Staatsbürger(in)',
      ex('Every [[citizen]] over eighteen can vote.', 'Голосовать может каждый гражданин старше восемнадцати.', 'Jeder Bürger über achtzehn darf wählen.')),
    W('government', 'noun', 'government', 'B1', 'правительство', 'Regierung',
      ex('The [[government]] has announced new tax rules.', 'Правительство объявило новые налоговые правила.', 'Die Regierung hat neue Steuerregeln angekündigt.')),
    W('election', 'noun', 'election', 'B1', 'выборы', 'Wahl',
      ex('The next [[election]] is in two years.', 'Следующие выборы через два года.', 'Die nächste Wahl ist in zwei Jahren.')),
    W('vote', 'verb', 'vote', 'B1', 'голосовать', 'wählen, abstimmen',
      ex('Most residents [[voted]] for the new park.', 'Большинство жителей проголосовало за новый парк.', 'Die meisten Anwohner stimmten für den neuen Park.')),
    W('equality', 'noun', 'equality', 'B2', 'равенство, равноправие', 'Gleichberechtigung, Gleichheit',
      ex('The law guarantees [[equality]] between men and women.', 'Закон гарантирует равноправие мужчин и женщин.', 'Das Gesetz garantiert die Gleichberechtigung von Männern und Frauen.')),
    W('volunteer', 'noun', 'volunteer', 'B1', 'волонтёр, доброволец', 'Freiwillige(r), Ehrenamtliche(r)',
      ex('The festival is run entirely by [[volunteers]].', 'Фестиваль полностью организуют волонтёры.', 'Das Festival wird komplett von Freiwilligen organisiert.'))
  ]);

  reg('environment', [
    W('climate-change', 'noun', 'climate change', 'B1', 'изменение климата', 'Klimawandel',
      ex('[[Climate change]] is making summers hotter and drier.', 'Из-за изменения климата лето становится жарче и суше.', 'Der Klimawandel macht die Sommer heißer und trockener.')),
    W('pollution', 'noun', 'pollution', 'B1', 'загрязнение', 'Verschmutzung',
      ex('Air [[pollution]] in the city centre is still too high.', 'Загрязнение воздуха в центре города всё ещё слишком высокое.', 'Die Luftverschmutzung in der Innenstadt ist immer noch zu hoch.')),
    W('renewable', 'adj', 'renewable', 'B2', 'возобновляемый', 'erneuerbar',
      ex('The town gets most of its power from [[renewable]] sources.', 'Город получает большую часть энергии из возобновляемых источников.', 'Die Stadt bezieht den Großteil ihres Stroms aus erneuerbaren Quellen.')),
    W('recycle', 'verb', 'recycle', 'B1', 'перерабатывать (отходы)', 'recyceln, wiederverwerten',
      ex('We [[recycle]] all our glass and paper.', 'Мы сдаём на переработку всё стекло и бумагу.', 'Wir recyceln unser ganzes Glas und Papier.')),
    W('carbon-footprint', 'noun', 'carbon footprint', 'B2', 'углеродный след', 'CO₂-Fußabdruck',
      ex('Flying less is the easiest way to reduce your [[carbon footprint]].', 'Меньше летать — самый простой способ сократить углеродный след.', 'Weniger zu fliegen ist der einfachste Weg, den eigenen CO₂-Fußabdruck zu verkleinern.')),
    W('public-transport', 'noun', 'public transport', 'A2', 'общественный транспорт', 'öffentliche Verkehrsmittel',
      ex('I use [[public transport]] to get to work.', 'Я езжу на работу на общественном транспорте.', 'Ich fahre mit öffentlichen Verkehrsmitteln zur Arbeit.')),
    W('drought', 'noun', 'drought', 'B2', 'засуха', 'Dürre, Trockenheit',
      ex('The long [[drought]] destroyed much of the harvest.', 'Долгая засуха уничтожила большую часть урожая.', 'Die lange Dürre hat einen Großteil der Ernte zerstört.'))
  ]);
})();
