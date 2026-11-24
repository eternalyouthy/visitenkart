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
      ex('She’s not really a friend, more an [[acquaintance]] from work.', 'Она мне не то чтобы подруга, скорее знакомая с работы.', 'Sie ist nicht wirklich eine Freundin, eher eine Bekannte von der Arbeit.'),
      ['Осторожно со спеллингом: ac-quaint-ance. Ближе по смыслу к нем. Bekannte(r), чем к friend.', 'Schreibweise beachten: ac-quaint-ance; entspricht genau dt. Bekannte(r) (nicht friend).']),
    W('reliable', 'adj', 'reliable', 'B1', 'надёжный', 'zuverlässig',
      ex('Tom is very [[reliable]] — he always does what he promises.', 'Том очень надёжный — всегда делает то, что обещал.', 'Tom ist sehr zuverlässig — er tut immer, was er verspricht.'),
      ['От глагола rely on («полагаться на»); антоним — unreliable.', 'Abgeleitet von rely on („sich verlassen auf“); Gegenteil: unreliable.']),
    W('generous', 'adj', 'generous', 'B1', 'щедрый', 'großzügig',
      ex('It was very [[generous]] of you to pay for everyone.', 'Очень щедро с твоей стороны заплатить за всех.', 'Es war sehr großzügig von dir, für alle zu bezahlen.'),
      ['Конструкция: It was generous of somebody to do something.', 'Typische Struktur: It was generous of somebody to do something.']),
    W('argument', 'noun', 'argument', 'B1', 'ссора, спор; довод', 'Streit; Argument',
      ex('We had an [[argument]] about who should do the dishes.', 'Мы поругались из-за того, кто будет мыть посуду.', 'Wir hatten einen Streit darüber, wer abwaschen soll.'),
      ['Have an argument — поссориться. Второе значение — довод: a strong argument.', 'Have an argument — sich streiten. Zweite Bedeutung: Argument — a strong argument.']),
    W('apologise', 'verb', 'apologise', 'B1', 'извиняться', 'sich entschuldigen',
      ex('He [[apologised]] for being late.', 'Он извинился за опоздание.', 'Er hat sich für die Verspätung entschuldigt.'),
      ['Apologise to someone for something. Амер. написание — apologize.', 'Apologise to someone for something. US spelling: apologize.']),
    W('get-along', 'phrasal verb', 'get along with', 'B1', 'ладить (с кем-то)', 'sich verstehen mit',
      ex('I [[get along with]] my flatmates really well.', 'Я очень хорошо лажу с соседями по квартире.', 'Ich verstehe mich richtig gut mit meinen Mitbewohnern.'),
      ['В британском также очень часто говорят get on with somebody.', 'Im britischen Englisch hört man ebenso häufig get on with somebody.'])
  ]);

  reg('food', [
    W('recipe', 'noun', 'recipe', 'A2', 'рецепт (блюда)', 'Rezept (Kochen)',
      ex('Can you send me the [[recipe]] for this soup?', 'Пришлёшь мне рецепт этого супа?', 'Kannst du mir das Rezept für diese Suppe schicken?'),
      ['Рецепт врача — prescription, не recipe.', 'Ein ärztliches Rezept heißt prescription, nicht recipe.']),
    W('meal', 'noun', 'meal', 'A2', 'приём пищи, еда', 'Mahlzeit, Essen',
      ex('Lunch is usually my biggest [[meal]] of the day.', 'Обед обычно мой самый плотный приём пищи за день.', 'Das Mittagessen ist meist meine größte Mahlzeit des Tages.'),
      ['Исчисляемое (a meal, three meals a day), в отличие от неисчисляемого food.', 'Zählbar (three meals a day), anders als das unzählbare food.']),
    W('spicy', 'adj', 'spicy', 'A2', 'острый, пряный', 'scharf, würzig',
      ex('This curry is too [[spicy]] for me.', 'Это карри для меня слишком острое.', 'Dieses Curry ist mir zu scharf.'),
      ['Острый вкус — spicy / hot; острый нож — sharp (не путать с нем. scharf!).', 'Für Essen: spicy / hot; ein scharfes Messer heißt sharp (Achtung bei dt. scharf!).']),
    W('leftovers', 'noun', 'leftovers', 'B1', 'остатки еды', 'Reste (vom Essen)',
      ex('We had the [[leftovers]] from the party for lunch.', 'На обед мы доели остатки с вечеринки.', 'Zum Mittagessen gab es die Reste von der Party.'),
      ['Всегда во множественном числе: leftovers (глагол — to be left over).', 'Steht immer im Plural: leftovers (zu be left over „übrig bleiben“).']),
    W('vegetarian', 'adj', 'vegetarian', 'A2', 'вегетарианский', 'vegetarisch',
      ex('Is there a [[vegetarian]] option on the menu?', 'В меню есть вегетарианское блюдо?', 'Gibt es auf der Karte eine vegetarische Option?'),
      ['Также употребляется как существительное: I’m a vegetarian.', 'Auch als Substantiv gebräuchlich: I’m a vegetarian.']),
    W('order', 'verb', 'order', 'A2', 'заказывать', 'bestellen',
      ex('Are you ready to [[order]]?', 'Вы готовы сделать заказ?', 'Möchten Sie bestellen?'),
      ['Заказать еду/доставку — order (без предлога: order a pizza).', 'Ohne Präposition: order a pizza; für Gäste im Restaurant: take someone’s order.'])
  ]);

  reg('authorities', [
    W('registration', 'noun', 'registration', 'B1', 'регистрация', 'Anmeldung, Registrierung',
      ex('[[Registration]] closes on Friday.', 'Регистрация заканчивается в пятницу.', 'Die Anmeldung endet am Freitag.'),
      ['В госорганах и на курсах; форма для заполнения — registration form.', 'Für Behörden, Kurse und Veranstaltungen; Anmeldeformular = registration form.']),
    W('residence-permit', 'noun', 'residence permit', 'B2', 'вид на жительство', 'Aufenthaltserlaubnis',
      ex('My [[residence permit]] expires in March.', 'Мой вид на жительство истекает в марте.', 'Meine Aufenthaltserlaubnis läuft im März ab.'),
      ['Продлить ВНЖ — renew a residence permit; ср. нем. Aufenthaltserlaubnis.', 'Verlängern = renew a residence permit; vgl. dt. Aufenthaltserlaubnis.']),
    W('id-card', 'noun', 'ID card', 'A2', 'удостоверение личности', 'Personalausweis',
      ex('Please bring your [[ID card]] to the appointment.', 'Пожалуйста, возьмите на приём удостоверение личности.', 'Bitte bringen Sie Ihren Personalausweis zum Termin mit.'),
      ['В разговорной речи часто просто ID (photo ID — документ с фото).', 'Im Alltag oft kurz ID (photo ID = Ausweis mit Lichtbild).']),
    W('fee', 'noun', 'fee', 'B1', 'сбор, плата (за услугу)', 'Gebühr',
      ex('There’s a small [[fee]] for a new passport.', 'За новый паспорт берут небольшой сбор.', 'Für einen neuen Pass fällt eine kleine Gebühr an.'),
      ['Госпошлина, обучение (tuition fee) или гонорар — не путать с fine (штраф).', 'Für Behörden-, Studiengebühren oder Honorare — nicht mit fine (Bußgeld) verwechseln.']),
    W('fill-in', 'phrasal verb', 'fill in', 'A2', 'заполнить (анкету)', 'ausfüllen',
      ex('Please [[fill in]] this form in block capitals.', 'Пожалуйста, заполните анкету печатными буквами.', 'Bitte füllen Sie dieses Formular in Druckbuchstaben aus.'),
      ['Брит. fill in, амер. чаще fill out.', 'Brit. fill in, US more often fill out.']),
    W('submit', 'verb', 'submit', 'B2', 'подавать, представлять (документы)', 'einreichen',
      ex('You must [[submit]] the application by 31 May.', 'Заявление нужно подать до 31 мая.', 'Sie müssen den Antrag bis zum 31. Mai einreichen.'),
      ['Официальнее, чем hand in или send; удвоение -tt- в submitted / submitting.', 'Formeller als hand in / send; Verdopplung des t: submitted, submitting.'])
  ]);

  reg('society', [
    W('citizen', 'noun', 'citizen', 'B1', 'гражданин, гражданка', 'Bürger(in), Staatsbürger(in)',
      ex('Every [[citizen]] over eighteen can vote.', 'Голосовать может каждый гражданин старше восемнадцати.', 'Jeder Bürger über achtzehn darf wählen.'),
      ['Гражданство — citizenship; житель города — resident или inhabitant.', 'Staatsbürgerschaft = citizenship; Stadtbewohner(in) = resident.']),
    W('government', 'noun', 'government', 'B1', 'правительство', 'Regierung',
      ex('The [[government]] has announced new tax rules.', 'Правительство объявило новые налоговые правила.', 'Die Regierung hat neue Steuerregeln angekündigt.'),
      ['В брит. английском может согласоваться с глаголом во мн. ч. (the government are), в амер. — обычно в ед. ч.', 'Im britischen Englisch oft mit Pluralverb möglich; im US-Englisch meist Singular.']),
    W('election', 'noun', 'election', 'B1', 'выборы', 'Wahl',
      ex('The next [[election]] is in two years.', 'Следующие выборы через два года.', 'Die nächste Wahl ist in zwei Jahren.'),
      ['В отличие от рус. «выборы», в англ. это единственное число (an election; всеобщие выборы — general election).', 'Anders als im Russischen steht election oft im Singular (general election = Parlamentswahl).']),
    W('vote', 'verb', 'vote', 'B1', 'голосовать', 'wählen, abstimmen',
      ex('Most residents [[voted]] for the new park.', 'Большинство жителей проголосовало за новый парк.', 'Die meisten Anwohner stimmten für den neuen Park.'),
      ['Голосовать за / против — vote for / against; право голоса — the right to vote.', 'Für/gegen etwas stimmen: vote for / against; Wahlrecht: right to vote.']),
    W('equality', 'noun', 'equality', 'B2', 'равенство, равноправие', 'Gleichberechtigung, Gleichheit',
      ex('The law guarantees [[equality]] between men and women.', 'Закон гарантирует равноправие мужчин и женщин.', 'Das Gesetz garantiert die Gleichberechtigung von Männern und Frauen.'),
      ['Сочетания: gender equality, equal opportunities (равные возможности).', 'Häufige Verbindungen: gender equality, equal opportunities (Chancengleichheit).']),
    W('volunteer', 'noun', 'volunteer', 'B1', 'волонтёр, доброволец', 'Freiwillige(r), Ehrenamtliche(r)',
      ex('The festival is run entirely by [[volunteers]].', 'Фестиваль полностью организуют волонтёры.', 'Das Festival wird komplett von Freiwilligen organisiert.'),
      ['Также глагол: volunteer to help (вызваться помочь добровольно).', 'Auch als Verb gebräuchlich: volunteer to help (sich freiwillig melden).'])
  ]);

  reg('environment', [
    W('climate-change', 'noun', 'climate change', 'B1', 'изменение климата', 'Klimawandel',
      ex('[[Climate change]] is making summers hotter and drier.', 'Из-за изменения климата лето становится жарче и суше.', 'Der Klimawandel macht die Sommer heißer und trockener.'),
      ['Употребляется без артикля (неисчисляемое); бороться с ним — tackle climate change.', 'Steht ohne Artikel; gängige Kollokation: tackle climate change (= bekämpfen).']),
    W('pollution', 'noun', 'pollution', 'B1', 'загрязнение', 'Verschmutzung',
      ex('Air [[pollution]] in the city centre is still too high.', 'Загрязнение воздуха в центре города всё ещё слишком высокое.', 'Die Luftverschmutzung in der Innenstadt ist immer noch zu hoch.'),
      ['Неисчисляемое существительное: air / water / noise pollution; глагол — pollute.', 'Unzählbares Nomen: air / water / noise pollution; Verb: pollute.']),
    W('renewable', 'adj', 'renewable', 'B2', 'возобновляемый', 'erneuerbar',
      ex('The town gets most of its power from [[renewable]] sources.', 'Город получает большую часть энергии из возобновляемых источников.', 'Die Stadt bezieht den Großteil ihres Stroms aus erneuerbaren Quellen.'),
      ['Часто во множественном числе как существительное: renewables (ВИЭ).', 'Oft auch verkürzt im Plural: renewables (= erneuerbare Energien).']),
    W('recycle', 'verb', 'recycle', 'B1', 'перерабатывать (отходы)', 'recyceln, wiederverwerten',
      ex('We [[recycle]] all our glass and paper.', 'Мы сдаём на переработку всё стекло и бумагу.', 'Wir recyceln unser ganzes Glas und Papier.'),
      ['Существительное — recycling; мусорный бак для переработки — recycling bin.', 'Nomen: recycling; Mülltonne für Wertstoffe: recycling bin.']),
    W('carbon-footprint', 'noun', 'carbon footprint', 'B2', 'углеродный след', 'CO₂-Fußabdruck',
      ex('Flying less is the easiest way to reduce your [[carbon footprint]].', 'Меньше летать — самый простой способ сократить углеродный след.', 'Weniger zu fliegen ist der einfachste Weg, den eigenen CO₂-Fußabdruck zu verkleinern.'),
      ['Устойчивое сочетание: reduce / offset your carbon footprint (ср. нем. CO₂-Fußabdruck).', 'Feste Kollokation: reduce / offset your carbon footprint (den CO₂-Fußabdruck verringern / ausgleichen).']),
    W('public-transport', 'noun', 'public transport', 'A2', 'общественный транспорт', 'öffentliche Verkehrsmittel',
      ex('I use [[public transport]] to get to work.', 'Я езжу на работу на общественном транспорте.', 'Ich fahre mit öffentlichen Verkehrsmitteln zur Arbeit.'),
      ['В США чаще говорят public transit; неисчисляемое (без артикля и без -s).', 'US-Variante: public transit; unzählbar (ohne Artikel und Plural).']),
    W('drought', 'noun', 'drought', 'B2', 'засуха', 'Dürre, Trockenheit',
      ex('The long [[drought]] destroyed much of the harvest.', 'Долгая засуха уничтожила большую часть урожая.', 'Die lange Dürre hat einen Großteil der Ernte zerstört.'),
      ['Произносится /draʊt/ (как out), не путать с draught (/drɑːft/ — сквозняк, разливное).', 'Aussprache /draʊt/ (wie „out“), nicht zu verwechseln mit draught (/drɑːft/ „Zugluft“).'])
  ]);
})();
