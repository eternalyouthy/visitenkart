/* ENGLISH particles (Roots → Particles). The English counterpart of German verb prefixes:
 * take + up / off / over … works like nehmen + auf- / ab- / über-. Meaning indices are used by
 * prefixDrill.meaning in data/en/verbs_families.js. Glosses: ru / de (the "I know" languages of the English pack).
 *   up:   0 upward/increase · 1 appear/come to attention · 2 start/create · 3 completely/stop
 *   down: 0 downward/decrease · 1 refuse/criticise · 2 put on paper
 *   out:  0 out of/remove · 1 become known/released · 2 end/stop working · 3 hand out
 *   off:  0 departure/start · 1 remove/switch off · 2 postpone/cancel · 3 go off/emit
 *   on:   0 onto/on the body · 1 continue · 2 switch on · 3 take on/accept
 *   over: 0 across/visit · 1 transfer of control · 2 review · 3 overcome
 *   back: 0 return · 1 delay · 2 into the past
 *   away: 0 away/leave · 1 put in its place · 2 give to others
 *   in:   0 into/absorb · 1 introduce/begin · 2 yield */
(function () {
  'use strict';
  var P = GT.packs.en;
  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function M(ru, de, ruPrefix, dePrefix, examples, note) {
    return { ru: ru, de: de, ruPrefix: ruPrefix, dePrefix: dePrefix, examples: examples, note: note || null };
  }
  function particle(id, label, ru, de, meanings, match) {
    GT.registerPrefix({ id: 'pv-' + id, label: '… ' + label, kind: 'particle', ru: ru, de: de, meanings: meanings, match: match });
    P.config.PREFIX_PLAN.unshift('pv-' + id);
  }
  // Registered in reverse so that unshift() leaves them in this order: up, down, out, off, on, over, back, away, in.
  particle('in', 'in', 'внутрь; ввести; уступить', 'hinein; einführen; nachgeben', [
    M('внутрь, вобрать в себя', 'hinein, in sich aufnehmen', 'В-', 'ein-, herein-', [ex('come in', 'войти', 'hereinkommen'), ex('take in', 'воспринять, усвоить', 'aufnehmen, verarbeiten')]),
    M('ввести, начаться', 'einführen, einsetzen', 'В-', 'ein-', [ex('bring in', 'ввести (правило)', 'einführen'), ex('set in', 'наступить (о погоде, болезни)', 'einsetzen')]),
    M('уступить, сдаться', 'nachgeben', 'С-, У-', 'nach-', [ex('give in', 'уступить, сдаться', 'nachgeben')])
  ], { ru: '<p><b>in</b> ≈ русское <b>в-</b>: come in — войти. Не путайте с <b>into</b>: turn into — превратиться в.</p>', de: '<p><b>in</b> ≈ deutsch <b>ein-/herein-</b>: come in — hereinkommen. Nicht verwechseln mit <b>into</b>: turn into — sich verwandeln in.</p>' });
  particle('away', 'away', 'прочь; на место; отдать', 'weg', [
    M('прочь, уйти', 'weg, fort', 'У-', 'weg-', [ex('go away', 'уйти, пройти', 'weggehen'), ex('get away', 'сбежать, вырваться', 'entkommen, wegkommen')]),
    M('убрать на место', 'wegräumen', 'У-', 'weg-', [ex('put away', 'убрать на место', 'wegräumen')]),
    M('отдать другим', 'weggeben', 'ОТ-, РАЗ-', 'weg-, ver-', [ex('give away', 'отдать даром; выдать (секрет)', 'verschenken; verraten')])
  ], { ru: '<p><b>away</b> почти всегда = русское <b>у-</b>: go away — уйти, put away — убрать.</p>', de: '<p><b>away</b> ist fast immer deutsch <b>weg-</b>: go away — weggehen, put away — wegräumen, give away — weggeben.</p>' });
  particle('back', 'back', 'назад, обратно', 'zurück', [
    M('назад, возврат', 'zurück an den Ausgangspunkt', 'ВОЗ-, ВЕР- (вернуть)', 'zurück-', [ex('come back', 'вернуться', 'zurückkommen'), ex('give back', 'вернуть, отдать', 'zurückgeben'), ex('take back', 'вернуть; взять назад (слова)', 'zurückbringen; zurücknehmen'), ex('bring back', 'вернуть; напомнить', 'zurückbringen; wachrufen')]),
    M('задержка, отбросить назад', 'zurückwerfen, verzögern', 'ОТ-', 'zurück-', [ex('set back', 'задержать, отбросить назад', 'zurückwerfen')]),
    M('в прошлое', 'in die Vergangenheit', '—', 'zurück-', [ex('look back', 'оглядываться назад, вспоминать', 'zurückblicken')])
  ], { ru: '<p><b>back</b> ≈ «обратно». В русском обычно глагол «вернуть(ся)»: come back — вернуться, give back — вернуть.</p>', de: '<p><b>back</b> entspricht fast genau deutsch <b>zurück-</b>: come back — zurückkommen, give back — zurückgeben, look back — zurückblicken.</p>' });
  particle('over', 'over', 'через; передача; просмотр; преодоление', 'über', [
    M('через, к кому-то в гости', 'herüber, vorbei', 'ЗА-, ПЕРЕ-', 'rüber-, vorbei-', [ex('come over', 'зайти, заглянуть в гости', 'vorbeikommen')]),
    M('передача контроля', 'Übergabe der Kontrolle', 'ПЕРЕ-', 'über-', [ex('take over', 'взять на себя, перенять', 'übernehmen')]),
    M('просмотреть, проверить', 'durchsehen, prüfen', 'ПРО-, ПЕРЕ-', 'durch-', [ex('go over', 'просмотреть, разобрать', 'durchgehen'), ex('look over', 'бегло просмотреть', 'durchsehen')]),
    M('преодолеть', 'überwinden', 'ПЕРЕ-', 'über-, hinweg-', [ex('get over', 'пережить, оправиться', 'überwinden, hinwegkommen')])
  ], { ru: '<p><b>over</b> часто = русское <b>пере-</b>: take over — перенять, get over — пережить.</p>', de: '<p><b>over</b> ≈ deutsch <b>über-</b>: take over — übernehmen, get over — überwinden. Achtung: go over — durchgehen, nicht „übergehen“.</p>' });
  particle('on', 'on', 'на; дальше; включение; взять на себя', 'an, weiter', [
    M('на поверхность, на себя', 'auf, an (den Körper)', 'НА-', 'an-, auf-', [ex('put on', 'надеть', 'anziehen'), ex('get on', 'сесть (в автобус)', 'einsteigen')]),
    M('продолжение', 'Fortsetzung', 'ПРО-', 'weiter-', [ex('go on', 'продолжать; происходить', 'weitermachen; los sein')]),
    M('включение', 'Einschalten', 'В-', 'an-, ein-', [ex('turn on', 'включить', 'einschalten, anmachen')]),
    M('взять на себя', 'auf sich nehmen', 'НА-, В-', 'an-, über-', [ex('take on', 'взяться за; нанять', 'übernehmen; einstellen')])
  ], { ru: '<p><b>on</b> ↔ <b>off</b> — пара противоположностей: turn on / turn off, put on / take off.</p>', de: '<p><b>on</b> ↔ <b>off</b> sind Gegensätze wie <b>an</b> ↔ <b>aus/ab</b>: turn on / turn off — anmachen / ausmachen, put on / take off — anziehen / ausziehen.</p>' });
  particle('off', 'off', 'от-; снятие; отмена; срабатывание', 'ab, los, aus', [
    M('отъезд, старт', 'Abfahrt, Start', 'ОТ-, ВЗ-', 'ab-, los-', [ex('take off', 'взлететь', 'abheben'), ex('set off', 'отправиться в путь', 'aufbrechen, losfahren'), ex('get off', 'выйти (из автобуса)', 'aussteigen')]),
    M('снять, выключить', 'abnehmen, ausschalten', 'С-, ВЫ-', 'ab-, aus-', [ex('take off', 'снять (одежду)', 'ausziehen'), ex('turn off', 'выключить', 'ausschalten')]),
    M('отложить, отменить', 'aufschieben, absagen', 'ОТ-', 'ab-, auf-', [ex('put off', 'откладывать', 'aufschieben')]),
    M('срабатывать, выделять', 'losgehen, abgeben', 'ЗА-, ИС-', 'los-, ab-', [ex('go off', 'сработать (будильник); испортиться', 'losgehen; schlecht werden'), ex('give off', 'испускать (запах, тепло)', 'abgeben, verströmen')])
  ], { ru: '<p><b>off</b> — «прочь от поверхности или от исходного состояния». Ближе всего русские <b>от-</b> и <b>с-</b>: take off — снять, put off — отложить.</p>', de: '<p><b>off</b> deckt deutsch <b>ab-</b>, <b>los-</b> und <b>aus-</b>: take off — abheben/ausziehen, set off — losfahren, turn off — ausschalten.</p>' });
  particle('out', 'out', 'наружу; становится известным; конец', 'aus, heraus', [
    M('наружу, изъять', 'hinaus, herausnehmen', 'ВЫ-', 'aus-, raus-', [ex('take out', 'вынуть; сводить куда-то', 'herausnehmen; ausführen'), ex('get out', 'выйти, выбраться', 'aussteigen, rauskommen'), ex('go out', 'выйти (развлечься)', 'ausgehen')]),
    M('стать известным, выйти в свет', 'bekannt werden, erscheinen', 'ВЫ-', 'heraus-', [ex('come out', 'выйти (о книге); стать известным', 'erscheinen; herauskommen'), ex('bring out', 'выпустить (продукт)', 'herausbringen'), ex('turn out', 'оказаться', 'sich herausstellen')]),
    M('прекращение, угасание', 'Ende, Ausgehen', 'ПО-, ВЫ-', 'aus-', [ex('put out', 'потушить', 'löschen, ausmachen'), ex('go out', 'погаснуть', 'ausgehen')]),
    M('раздать', 'austeilen', 'РАЗ-', 'aus-, ver-', [ex('give out', 'раздавать', 'austeilen, verteilen')])
  ], { ru: '<p><b>out</b> в первом значении = русское <b>вы-</b>: take out — вынуть, go out — выйти. Значение «стать известным» тоже есть в русском: книга <b>вы</b>шла.</p>', de: '<p><b>out</b> ≈ deutsch <b>aus-/heraus-</b>: go out — ausgehen, bring out — herausbringen, put out — ausmachen (Feuer).</p>' });
  particle('down', 'down', 'вниз; отказ; на бумагу', 'runter, ab', [
    M('вниз, снижение', 'nach unten, Rückgang', 'С-, ПО-', 'runter-, ab-, sinken', [ex('go down', 'снижаться, падать', 'sinken, zurückgehen'), ex('bring down', 'снизить (цены)', 'senken'), ex('turn down', 'сделать тише', 'leiser stellen')]),
    M('отказ, пренебрежение', 'Ablehnung, Herabsetzung', '—', 'ab-, herab-', [ex('turn down', 'отклонить (предложение)', 'ablehnen'), ex('look down on', 'смотреть свысока', 'herabsehen auf')]),
    M('записать', 'aufschreiben', 'ЗА-', 'auf-', [ex('put down', 'записать', 'aufschreiben, notieren')])
  ], { ru: '<p><b>down</b> ↔ <b>up</b>: go down / go up — снижаться / расти, turn down / turn up — тише / громче.</p>', de: '<p><b>down</b> ↔ <b>up</b>: go down / go up — sinken / steigen, turn down / turn up — leiser / lauter.</p>' });
  particle('up', 'up', 'вверх; появление; начало; до конца', 'auf, hoch', [
    M('вверх, рост', 'nach oben, Anstieg', 'ВЗ-, ПОД-', 'auf-, hoch-', [ex('get up', 'вставать', 'aufstehen'), ex('go up', 'расти (о ценах)', 'steigen'), ex('turn up', 'сделать громче', 'lauter stellen')]),
    M('появиться, оказаться на виду', 'auftauchen, zur Sprache kommen', 'ВЫ-, ПО-', 'auf-', [ex('come up', 'возникнуть (о вопросе)', 'aufkommen'), ex('bring up', 'поднять (тему)', 'ansprechen'), ex('turn up', 'появиться, прийти', 'auftauchen'), ex('look up', 'найти (в словаре)', 'nachschlagen')]),
    M('начать, создать', 'beginnen, einrichten', 'ЗА-, НА-', 'auf-, ein-', [ex('take up', 'заняться (хобби)', 'anfangen mit'), ex('set up', 'настроить, создать', 'einrichten, gründen')]),
    M('до конца, прекратить', 'ganz, bis zum Ende', 'С- (сдаться), ДО-', 'auf-', [ex('give up', 'бросить, сдаться', 'aufgeben')])
  ], { ru: '<p><b>up</b> — самая частая частица. Кроме «вверх» она часто значит «появиться» (come up) и «довести до результата» (give up, set up). Прямого русского соответствия нет — учите вместе с глаголом.</p>', de: '<p><b>up</b> entspricht oft deutsch <b>auf-</b>: get up — aufstehen, give up — aufgeben, come up — aufkommen. Dieselbe Bild-Logik: nach oben → sichtbar → fertig.</p>' });
})();
