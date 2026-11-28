/* ENGLISH verb & word-building families, batch 3:
 *   Verbs + particles: move, pass, pay, play, fill, catch, drop, back
 *   Word-building families: solve, press
 * Loaded at the end of GT_PACKS.en.files so every catalogue / words_more / it_more item is already registered
 * and reused cleanly (zero duplicate headwords, permanent IDs, shared progress). Glosses in ru / de. */
(function () {
  'use strict';
  var P = GT.packs.en;
  if (!P) return;
  var NEW_ORDER = [];

  function ex(t, ru, de) { return { t: t, ru: ru, de: de }; }
  function samePos(a, b) {
    if (!a || !b) return true;
    var va = a === 'verb' || a === 'phrasal verb';
    var vb = b === 'verb' || b === 'phrasal verb';
    if (va || vb) return va && vb;
    return a === b;
  }
  function existing(t, pos) {
    var k = String(t || '').trim().toLowerCase();
    for (var i = 0; i < P.items.length; i++) {
      var x = P.items[i];
      if (samePos(x.pos, pos) && String(x.t || '').trim().toLowerCase() === k) return x;
    }
    return null;
  }
  function base(verb, forms, level, ru, de, examples, note) {
    var exst = existing(verb, 'verb');
    if (exst) {
      if (!exst.rootId) exst.base = true;
      exst.core = true;
      if (!exst.forms) exst.forms = { praes: forms[0], praet: forms[1], perf: forms[2] };
      return exst;
    }
    return {
      id: 'en:vf3:' + verb, base: true, core: true, pos: 'verb', t: verb, level: level, learnable: true,
      forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, ru: ru, de: de, examples: examples,
      note: note ? { ru: note[0], de: note[1] } : null
    };
  }
  function pv(t, pfx, m, level, ru, de, examples, par, expl, opts) {
    opts = opts || {};
    var w = existing(t, 'phrasal verb');
    if (!w) {
      w = {
        id: 'en:vf3:' + t.replace(/ /g, '-'), t: t, pos: 'phrasal verb', level: level,
        ru: ru, de: de, examples: examples, learnable: true
      };
    }
    if (pfx && !w.prefix) { w.prefix = 'pv-' + pfx; w.particle = true; }
    w.core = opts.core !== false;
    if (!w.transparency) w.transparency = opts.tr || (pfx ? 'transparent' : 'figurative');
    if (par && !w.parallel) w.parallel = { ru: par[0], de: par[1] };
    if (pfx && expl && m != null && !w.prefixDrill && w.examples && w.examples.length) {
      w.prefixDrill = { ex: 0, meaning: m, explain: { ru: expl[0], de: expl[1] } };
    }
    if (opts.note && !w.note) w.note = { ru: opts.note[0], de: opts.note[1] };
    return w;
  }
  function word(id, pos, t, level, ru, de, examples, opts) {
    opts = opts || {};
    var exst = existing(t, pos);
    if (exst) {
      if (opts.base && !exst.rootId) exst.base = true;
      if (opts.core !== false) exst.core = true;
      return exst;
    }
    var o = {
      id: 'en:vf3:w:' + id, pos: pos, t: t, level: level,
      ru: ru, de: de, examples: examples, learnable: true
    };
    if (opts.base) o.base = true;
    if (opts.core !== false) o.core = true;
    if (opts.plural) o.plural = opts.plural;
    if (opts.note) o.note = { ru: opts.note[0], de: opts.note[1] };
    return o;
  }
  function family(verb, ru, de, note, words) {
    var id = 'vf-' + verb;
    if (P.roots[id]) return;
    words = words.filter(function (w) { return w && w.examples && w.examples.length; });
    GT.registerRoot({
      id: id, verb: verb, t: verb, label: verb.toUpperCase(), ru: ru, de: de,
      note: { ru: note[0], de: note[1] }, words: words, group: 'Verbs + particles', mapVerbs: true
    });
    NEW_ORDER.push(id);
  }
  function wbFamily(id, baseWord, ru, de, note, words) {
    if (P.roots[id]) return;
    words = words.filter(function (w) { return w && w.examples && w.examples.length; });
    GT.registerRoot({
      id: id, verb: baseWord, t: baseWord, label: baseWord.toUpperCase(), ru: ru, de: de,
      note: { ru: note[0], de: note[1] }, words: words, group: 'Word-building families', mapVerbs: false
    });
    NEW_ORDER.push(id);
  }

  /* 1. MOVE */
  family('move', 'двигаться; переезжать', 'sich bewegen; umziehen', [
    'Правильный глагол: move — moved — moved. С частицами описывает переезд и движение вперёд: move in (въехать), move out (съехать), move on (двигаться дальше / перейти к следующему пункту), move up (подвинуться / пойти на повышение), move away (уехать жить в другое место).',
    'Regelmäßiges Verb: move — moved — moved. Mit Partikeln für Umzug und Fortschritt: move in (einziehen), move out (ausziehen), move on (weiterziehen / zum nächsten Punkt gehen), move up (aufrücken), move away (wegziehen).'
  ], [
    base('move', ['moves', 'moved', 'moved'], 'A1', 'двигаться; переезжать; трогать (эмоционально)', 'bewegen; umziehen; berühren', [
      ex('We plan to [[move]] closer to the city centre next autumn.', 'Следующей осенью мы планируем переехать поближе к центру города.', 'Wir planen, nächsten Herbst näher ins Stadtzentrum zu ziehen.')
    ]),
    pv('move in', 'in', 0, 'A2', 'въезжать, заселяться', 'einziehen', [
      ex('Our new neighbours [[moved in]] over the weekend.', 'Наши новые соседи въехали на выходных.', 'Unsere neuen Nachbarn sind am Wochenende eingezogen.')
    ], ['ВЪехать', 'EINziehen'], ['in = внутрь нового жилья.', 'in = in die neue Wohnung hinein.']),
    pv('move out', 'out', 0, 'A2', 'съезжать, выезжать (из квартиры)', 'ausziehen', [
      ex('We have to [[move out]] of the flat before the end of May.', 'Мы должны съехать из квартиры до конца мая.', 'Wir müssen vor Ende Mai aus der Wohnung ausziehen.')
    ], ['ВЫехать, съехать', 'AUSziehen'], ['out = наружу из прежнего жилья.', 'out = aus der bisherigen Wohnung hinaus.']),
    pv('move on', 'on', 1, 'B1', 'двигаться дальше; перейти к следующему пункту повестки', 'weitergehen; zum nächsten Punkt übergehen', [
      ex('If there are no more questions, let’s [[move on]] to the budget.', 'Если вопросов больше нет, давайте перейдём к бюджету.', 'Wenn es keine Fragen mehr gibt, gehen wir zum Budget über.')
    ], ['перейти ДАЛЬШЕ', 'WEITERgehen'], ['on = продолжение движения к следующему этапу.', 'on = weiter zum nächsten Punkt.']),
    pv('move up', 'up', 0, 'B2', 'передвинуть на более ранний срок; продвинуться по службе', 'vorverlegen; aufsteigen', [
      ex('Could we [[move]] the review meeting [[up]] to Tuesday morning?', 'Можем ли мы перенести встречу по ревью пораньше, на утро вторника?', 'Könnten wir das Review-Meeting auf Dienstagmorgen vorverlegen?')
    ], ['ПОДвинуть вверх/раньше', 'AUFsteigen; vorverlegen'], ['up = вверх по шкале, карьере или календарю.', 'up = nach oben auf der Skala oder im Kalender.']),
    pv('move away', 'away', 0, 'B1', 'уехать жить в другое место, переехать далеко', 'wegziehen', [
      ex('Several childhood friends [[moved away]] after university.', 'Несколько друзей детства уехали жить в другие города после университета.', 'Mehrere Jugendfreunde sind nach dem Studium weggezogen.')
    ], ['Уехать прочь', 'WEGziehen'], ['away = прочь от прежнего города.', 'away = weg vom früheren Wohnort.']),
    pv('move over', 'over', 0, 'B1', 'подвинуться, уступить место', 'zur Seite rücken, Platz machen', [
      ex('Could you [[move over]] a little so Sarah can sit down?', 'Можешь чуть подвинуться, чтобы Сара могла сесть?', 'Könntest du ein bisschen rücken, damit Sarah sitzen kann?')
    ], ['ПОДвинуться в сторону', 'RÜBERrücken'], ['over = сместиться чуть в сторону.', 'over = etwas zur Seite rücken.']),
    word('movement', 'noun', 'movement', 'B1', 'движение, перемещение; общественное движение', 'die Bewegung', [
      ex('The sensor detects any [[movement]] near the back entrance.', 'Датчик фиксирует любое движение возле заднего входа.', 'Der Sensor erkennt jede Bewegung am Hintereingang.')
    ], { plural: 'movements' })
  ]);

  /* 2. PASS */
  family('pass', 'проходить мимо; передавать; сдавать (экзамен)', 'vorbeigehen; weitergeben; bestehen', [
    'Правильный глагол: pass — passed — passed. С частицами: pass on (передать дальше / отказаться), pass out (потерять сознание), pass away (скончаться), pass through (проезжать транзитом), pass up (упустить шанс), pass over (обойти при повышении).',
    'Regelmäßiges Verb: pass — passed — passed. Mit Partikeln: pass on (weitergeben), pass out (ohnmächtig werden), pass away (versterben), pass through (durchreisen), pass up (verstreichen lassen), pass over (übergehen).'
  ], [
    base('pass', ['passes', 'passed', 'passed'], 'A2', 'проходить мимо; передавать; сдавать экзамен', 'vorbeigehen; reichen; bestehen', [
      ex('She worked hard and [[passed]] the driving test on her first try.', 'Она усердно готовилась и сдала экзамен по вождению с первой попытки.', 'Sie hat fleißig geübt und die Fahrprüfung beim ersten Versuch bestanden.')
    ]),
    pv('pass on', 'on', 1, 'B1', 'передавать дальше (сообщение, опыт); вежливо отказаться', 'weitergeben; dankend ablehnen', [
      ex('Could you [[pass]] this message [[on]] to the front desk?', 'Можешь передать это сообщение на ресепшен?', 'Könntest du diese Nachricht an den Empfang weitergeben?')
    ], ['ПЕРЕдать дальше', 'WEITERgeben'], ['on = дальше по цепочке к следующему человеку.', 'on = weiter an die nächste Person.']),
    pv('pass out', 'out', 2, 'B2', 'потерять сознание, упасть в обморок; раздать (амер.)', 'ohnmächtig werden; (US) austeilen', [
      ex('It was so hot in the hall that one spectator nearly [[passed out]].', 'В зале было так жарко, что один зритель чуть не потерял сознание.', 'Im Saal war es so heiß, dass ein Zuschauer fast ohnmächtig wurde.')
    ], ['отключиться', 'WEGtreten, ohnmächtig werden'], ['out = отключение сознания.', 'out = das Bewusstsein verlieren.'], { tr: 'figurative' }),
    pv('pass away', 'away', 0, 'B1', 'скончаться, уйти из жизни (вежливый эвфемизм)', 'versterben, entschlafen', [
      ex('Her grandfather [[passed away]] peacefully at the age of ninety.', 'Её дедушка мирно скончался в возрасте девяноста лет.', 'Ihr Großvater ist im Alter von neunzig Jahren friedlich verstorben.')
    ], ['Уйти из жизни', 'dahinscheiden, versterben'], ['away = мягкий образ ухода прочь.', 'away = höfliches Bild für das Fortgehen.'], { tr: 'figurative' }),
    pv('pass through', 'through', 0, 'B1', 'проезжать через, быть проездом', 'durchfahren, auf der Durchreise sein', [
      ex('We are only [[passing through]] Zurich on our way to Milan.', 'Мы в Цюрихе лишь проездом по пути в Милан.', 'Wir fahren auf dem Weg nach Mailand nur durch Zürich durch.')
    ], ['ПРОезжать через', 'DURCHfahren'], ['through = насквозь, не задерживаясь надолго.', 'through = hindurch ohne langen Aufenthalt.']),
    pv('pass up', 'up', null, 'B2', 'упустить, отказаться от (хорошего шанса, предложения)', 'sich entgehen lassen, ausschlagen', [
      ex('A paid training placement like that is too good to [[pass up]].', 'Такую оплачиваемую стажировку слишком жаль упускать.', 'Ein so bezahltes Praktikum ist zu gut, um es auszuschlagen.')
    ], ['Упустить', 'sich entgehen lassen'], null, { tr: 'figurative' }),
    pv('pass over', 'over', 0, 'C1', 'обойти вниманием, не выбрать (при повышении)', 'übergehen (bei einer Beförderung)', [
      ex('He felt frustrated after being [[passed over]] for team lead twice.', 'Он был расстроен после того, как его дважды обошли при назначении тимлида.', 'Er war frustriert, nachdem er zweimal für die Teamleitung übergangen worden war.')
    ], ['ОБойти стороной', 'ÜBERgehen'], ['over = перешагнуть поверх, мимо человека.', 'over = jemanden übergehen.'], { tr: 'figurative' }),
    word('bypass', 'verb', 'bypass', 'C1', 'обходить (пробку, проверку, правило)', 'umgehen, umfahren', [
      ex('Never [[bypass]] two-factor authentication even during urgent tests.', 'Никогда не обходите двухфакторную аутентификацию даже при срочных тестах.', 'Umgehen Sie niemals die Zwei-Faktor-Authentifizierung, selbst bei dringenden Tests.')
    ])
  ]);

  /* 3. PAY */
  family('pay', 'платить', 'bezahlen, zahlen', [
    'Неправильный глагол: pay — paid — paid. Финансовые и бытовые связки: pay back (вернуть долг), pay off (полностью выплатить / окупиться!), pay out (выплатить страховку/дивиденды), pay up (раскошелиться, заплатить полностью), pay down (сократить долг).',
    'Unregelmäßiges Verb: pay — paid — paid. Alltag & Finanzen: pay back (zurückzahlen), pay off (abbezahlen / sich auszahlen!), pay out (auszahlen), pay up (endlich zahlen), pay down (tilgen).'
  ], [
    base('pay', ['pays', 'paid', 'paid'], 'A1', 'платить, оплачивать', 'bezahlen, zahlen', [
      ex('Can I [[pay]] by contactless card here?', 'Я могу здесь оплатить бесконтактной картой?', 'Kann ich hier kontaktlos mit Karte zahlen?')
    ]),
    pv('pay back', 'back', 0, 'B1', 'вернуть деньги, отдать долг', 'zurückzahlen', [
      ex('Thanks for covering lunch — I’ll [[pay]] you [[back]] tonight.', 'Спасибо, что заплатил за обед — я верну тебе деньги сегодня вечером.', 'Danke fürs Auslegen beim Mittagessen — ich zahle es dir heute Abend zurück.')
    ], ['ВЕРнуть долг', 'ZURÜCKzahlen'], ['back = обратно кредитору.', 'back = zurück an den Gläubiger.']),
    pv('pay off', 'off', 1, 'B2', 'полностью выплатить (кредит); окупиться, принести плоды', 'abbezahlen; sich auszahlen', [
      ex('All those months of evening German classes finally [[paid off]].', 'Все эти месяцы вечерних занятий немецким наконец окупились.', 'All die Monate Abendkurs Deutsch haben sich endlich ausgezahlt.')
    ], ['ВЫплатить; окупиться', 'ABbezahlen; sich AUSzahlen'], ['off = снять долг целиком или получить отдачу от усилий.', 'off = eine Schuld tilgen oder Ertrag bringen.'], { tr: 'figurative' }),
    pv('pay out', 'out', 3, 'B2', 'выплачивать (крупную сумму, страховку, компенсацию)', 'auszahlen (Versicherung, Prämie)', [
      ex('The insurer [[paid out]] the full repair cost within ten days.', 'Страховая компания выплатила полную стоимость ремонта в течение десяти дней.', 'Die Versicherung zahlte die vollen Reparaturkosten innerhalb von zehn Tagen aus.')
    ], ['ВЫплатить', 'AUSzahlen'], ['out = выдача денег наружу из фонда или банка.', 'out = Geld auszahlen.']),
    pv('pay up', 'up', 3, 'B2', 'выложить деньги, заплатить полностью (особенно неохотно / в срок)', 'zahlen, blechen (endlich bezahlen)', [
      ex('After two reminders, the client finally [[paid up]].', 'После двух напоминаний клиент наконец оплатил счёт.', 'Nach zwei Mahnungen hat der Kunde endlich gezahlt.')
    ], ['РАСплатиться до конца', 'endlich ZAHLEN'], ['up = полностью, закрыв остаток долга.', 'up = vollständig begleichen.']),
    pv('pay down', 'down', 0, 'C1', 'постепенно уменьшать (долг, ипотеку)', 'tilgen, reduzieren (Schulden)', [
      ex('They used the bonus to [[pay down]] their mortgage faster.', 'Они использовали премию, чтобы быстрее уменьшить ипотечный долг.', 'Sie nutzten den Bonus, um ihre Hypothek schneller zu tilgen.')
    ], ['Снижать долг', 'HERUNTERzahlen, tilgen'], ['down = снижать сумму задолженности вниз.', 'down = die Schuldenhöhe nach unten drücken.']),
    word('payout', 'noun', 'payout', 'B2', 'выплата (страховая, компенсационная)', 'die Auszahlung', [
      ex('Passengers received a quick [[payout]] for the cancelled flight.', 'Пассажиры получили быструю выплату за отменённый рейс.', 'Passagiere erhielten eine schnelle Auszahlung für den gestrichenen Flug.')
    ], { plural: 'payouts' }),
    word('payback', 'noun', 'payback', 'C1', 'окупаемость; расплата, отместка', 'die Amortisation; die Revanche', [
      ex('With lower energy bills, the solar panels have a five-year [[payback]] period.', 'При снижении счетов за свет солнечные панели окупаются за пять лет.', 'Mit niedrigeren Stromrechnungen haben die Solarmodule eine Amortisationszeit von fünf Jahren.')
    ])
  ]);

  /* 4. PLAY */
  family('play', 'играть; воспроизводить', 'spielen; abspielen', [
    'Правильный глагол: play — played — played. В новостях и деловых разговорах очень часты: play down (преуменьшать значение), play up (раздувать / барахлить о технике), play out (разворачиваться о событиях), play along (подыгрывать), play back (воспроизводить запись).',
    'Regelmäßiges Verb: play — played — played. Sehr häufig in Medien und Beruf: play down (herunterspielen), play up (aufbauschen / spinnen), play out (sich abspielen), play along (mitspielen), play back (wiedergeben).'
  ], [
    base('play', ['plays', 'played', 'played'], 'A1', 'играть; проигрывать (аудио/видео)', 'spielen; abspielen', [
      ex('Clear communication [[plays]] a key role in remote teams.', 'Чёткая коммуникация играет ключевую роль в удалённых командах.', 'Klare Kommunikation spielt in Remote-Teams eine Schlüsselrolle.')
    ]),
    pv('play down', 'down', 0, 'B2', 'преуменьшать значение, занижать серьёзность', 'herunterspielen', [
      ex('The spokesperson tried to [[play down]] the impact of the outage.', 'Пресс-секретарь попытался преуменьшить последствия сбоя.', 'Die Sprecherin versuchte, die Folgen des Ausfalls herunterzuspielen.')
    ], ['ПРИуменьшать', 'HERUNTERspielen'], ['down = сбивать значимость вниз.', 'down = die Bedeutung nach unten drücken.'], { tr: 'figurative' }),
    pv('play up', 'up', 0, 'C1', 'подчёркивать, раздувать; (брит., о технике/колене) барахлить, шалить', 'hervorheben, aufbauschen; (Gerät) spinnen', [
      ex('My laptop fan started [[playing up]] right before the presentation.', 'Вентилятор ноутбука начал барахлить прямо перед презентацией.', 'Mein Laptop-Lüfter fing direkt vor der Präsentation an zu spinnen.')
    ], ['раздувать; барахлить', 'AUFbauschen; spinnen'], ['up = выпячивать вверх / выходить из нормы.', 'up = übertreiben / Ärger machen.'], { tr: 'figurative' }),
    pv('play out', 'out', 1, 'C1', 'разворачиваться, развиваться (о сценарии, конфликте)', 'sich abspielen, verlaufen', [
      ex('It will take months to see how the new regulation [[plays out]].', 'Понадобятся месяцы, чтобы увидеть, как сработает новое правило на практике.', 'Es wird Monate dauern zu sehen, wie sich die neue Regelung auswirkt.')
    ], ['РАЗворачиваться', 'sich ABspielen'], ['out = развернуться до видимого финала.', 'out = sich bis zum Ergebnis entfalten.'], { tr: 'figurative' }),
    pv('play along', null, null, 'B2', 'подыгрывать, соглашаться ради вида (with)', 'mitspielen (zum Schein)', [
      ex('She wasn’t convinced by the joke, but she politely [[played along]].', 'Шутка её не впечатлила, но она вежливо подыграла.', 'Sie war von dem Witz nicht überzeugt, spielte aber höflich mit.')
    ], ['ПОДыгрывать', 'MITspielen'], null, { tr: 'figurative' }),
    pv('play back', 'back', 0, 'B2', 'воспроизводить, проигрывать запись повторно', 'abspielen, wiedergeben', [
      ex('Let’s [[play back]] the voice note to double-check the address.', 'Давай переслушаем голосовое сообщение, чтобы перепроверить адрес.', 'Lass uns die Sprachnachricht noch einmal abspielen, um die Adresse zu prüfen.')
    ], ['воспроизвести СНОВА', 'noch einmal ABspielen'], ['back = вернуть запись назад и прослушать.', 'back = zurückspulen und abspielen.']),
    pv('play around', 'around', 1, 'B2', 'возиться, экспериментировать (с настройками), дурачиться', 'herumspielen, ausprobieren', [
      ex('Spend ten minutes [[playing around]] with the layout before saving.', 'Потрать десять минут, чтобы поэкспериментировать с макетом перед сохранением.', 'Spiel zehn Minuten mit dem Layout herum, bevor du speicherst.')
    ], ['поиграться, повозиться', 'HERUMspielen'], ['around = без строгой цели, пробуя варианты.', 'around = ohne festes Ziel herumprobieren.']),
    word('playback', 'noun', 'playback', 'B2', 'воспроизведение (аудио/видео)', 'die Wiedergabe', [
      ex('The audio [[playback]] paused automatically when the headphones disconnected.', 'Воспроизведение аудио автоматически встало на паузу, когда отключились наушники.', 'Die Audiowiedergabe pausierte automatisch, als die Kopfhörer getrennt wurden.')
    ])
  ]);

  /* 5. FILL */
  family('fill', 'наполнять, заполнять', 'füllen, ausfüllen', [
    'Правильный глагол: fill — filled — filled. Ключевой глагол для анкет, документов и повседневных дел: fill in (заполнить форму / ввести в курс дела), fill out (заполнить анкету полностью), fill up (наполнить доверху / заправить бак), fill in for (подменить коллегу).',
    'Regelmäßiges Verb: fill — filled — filled. Zentral für Formulare und Alltag: fill in (ausfüllen / einweihen), fill out (vollständig ausfüllen), fill up (vollmachen / volltanken), fill in for (vertreten).'
  ], [
    base('fill', ['fills', 'filled', 'filled'], 'A2', 'наполнять; занимать (должность, пространство)', 'füllen; besetzen (Stelle)', [
      ex('They hope to [[fill]] the senior analyst role by early September.', 'Они надеются закрыть вакансию старшего аналитика к началу сентября.', 'Sie hoffen, die Stelle der Senior-Analystin bis Anfang September zu besetzen.')
    ]),
    pv('fill in', 'in', 0, 'A2', 'заполнять (бланк, пропуски); ввести в курс дела (fill sb. in)', 'ausfüllen; auf den neuesten Stand bringen', [
      ex('Please [[fill in]] this form in block capitals.', 'Пожалуйста, заполните анкету печатными буквами.', 'Bitte füllen Sie dieses Formular in Druckbuchstaben aus.')
    ], ['ЗАполнить', 'AUSfüllen'], ['in = вписать данные внутрь полей.', 'in = Daten in Felder eintragen.']),
    pv('fill out', 'out', 0, 'B1', 'заполнять (анкету, заявку целиком)', 'vollständig ausfüllen', [
      ex('Every visitor must [[fill out]] a short registration card at reception.', 'Каждый посетитель должен заполнить короткую регистрационную карточку на ресепшене.', 'Jeder Besucher muss am Empfang eine kurze Anmeldekarte ausfüllen.')
    ], ['ЗАполнить полностью', 'AUSfüllen'], ['out = оформить документ целиком.', 'out = das ganze Formular fertig ausfüllen.']),
    pv('fill up', 'up', 3, 'B1', 'наполнять доверху; заправлять (бак); заполняться (о зале)', 'vollmachen, volltanken; sich füllen', [
      ex('Let’s [[fill up]] the tank before we get onto the motorway.', 'Давай заправим полный бак, прежде чем выехать на автобан.', 'Lass uns volltanken, bevor wir auf die Autobahn fahren.')
    ], ['НАполнить доверху', 'VOLLtanken, auffüllen'], ['up = до самого верха, до предела.', 'up = bis ganz nach oben, voll.']),
    pv('fill in for', 'in', 0, 'B2', 'временно подменить (коллегу на работе)', 'vertreten, einspringen für', [
      ex('Could you [[fill in for]] me at Thursday’s client call?', 'Сможешь подменить меня на созвоне с клиентом в четверг?', 'Könntest du am Donnerstag beim Kundengespräch für mich einspringen?')
    ], ['подменить', 'EINSPRINGEN für'], ['in = занять чьё-то место на время.', 'in = vorübergehend an jemandes Stelle treten.'], { tr: 'figurative' }),
    word('refill', 'noun', 'refill', 'B1', 'повторное наполнение, добавка (напитка); сменный блок', 'das Nachfüllen; die Nachfüllpackung', [
      ex('The café offers a free [[refill]] of filter coffee before noon.', 'До полудня кафе предлагает бесплатную добавку фильтр-кофе.', 'Das Café bietet vor Mittag kostenloses Nachfüllen von Filterkaffee an.')
    ], { plural: 'refills' })
  ]);

  /* 6. CATCH */
  family('catch', 'ловить; успевать (на транспорт)', 'fangen; erwischen (Zug)', [
    'Неправильный глагол: catch — caught — caught. В живой речи и офисе постоянно звучат: catch up (догнать / наверстать / поболтать и обменяться новостями!), catch on (прижиться, стать популярным / сообразить), catch out (подловить на ошибке).',
    'Unregelmäßiges Verb: catch — caught — caught. Im Alltag und Büro unverzichtbar: catch up (aufholen / sich auf den neuesten Stand bringen!), catch on (sich durchsetzen / kapieren), catch out (ertappen).'
  ], [
    base('catch', ['catches', 'caught', 'caught'], 'A2', 'ловить; успевать (на поезд); подхватить (простуду)', 'fangen; erwischen; sich einfangen', [
      ex('We left ten minutes early to [[catch]] the express train.', 'Мы вышли на десять минут раньше, чтобы успеть на экспресс.', 'Wir gingen zehn Minuten früher los, um den Schnellzug zu erwischen.')
    ]),
    pv('catch up', 'up', 0, 'B1', 'догнать; наверстать упущенное; встретиться и обменяться новостями', 'aufholen; sich mal wieder austauschen', [
      ex('Let’s grab coffee next week to [[catch up]] properly.', 'Давай выпьем кофе на следующей неделе и спокойно обменяемся новостями.', 'Lass uns nächste Woche auf einen Kaffee treffen und uns in Ruhe austauschen.')
    ], ['ДОгнать; наверстать', 'AUFholen; sich austauschen'], ['up = подняться до общего уровня / текущего момента.', 'up = wieder auf denselben Stand kommen.'], { tr: 'figurative' }),
    pv('catch up with', 'up', 0, 'B1', 'догнать кого-то; настигнуть (о последствиях, усталости)', 'einholen', [
      ex('Walk ahead — I’ll tie my shoelace and [[catch up with]] you.', 'Иди вперёд — я завяжу шнурок и догоню тебя.', 'Geh schon vor — ich binde mir den Schuh und hole dich ein.')
    ], ['ДОгнать', 'EINholen'], ['up = добраться до уровня идущего впереди.', 'up = jemanden einholen.']),
    pv('catch on', 'on', 1, 'B2', 'стать популярным, прижиться; сообразить, понять суть', 'sich durchsetzen; kapieren', [
      ex('Contactless payments [[caught on]] remarkably quickly across Europe.', 'Бесконтактные платежи прижились по всей Европе удивительно быстро.', 'Kontaktloses Bezahlen hat sich in Europa bemerkenswert schnell durchgesetzt.')
    ], ['ПРИжиться; догадаться', 'sich DURCHsetzen; kapieren'], ['on = закрепиться и пойти дальше.', 'on = Fuß fassen und weiterlaufen.'], { tr: 'figurative' }),
    pv('catch out', 'out', 1, 'C1', 'подловить на ошибке, застать врасплох', 'ertappen, kalt erwischen', [
      ex('The unexpected frost [[caught]] many gardeners [[out]] in late April.', 'Неожиданный заморозок застал многих садоводов врасплох в конце апреля.', 'Der unerwartete Frost erwischte Ende April viele Gärtner kalt.')
    ], ['ПОДловить', 'ERTAPPEN, kalt erwischen'], ['out = вывести промах наружу.', 'out = jemanden bloßstellen / überraschen.'], { tr: 'figurative' }),
    word('catchphrase', 'noun', 'catchphrase', 'C1', 'крылатая фраза, фирменный слоган', 'das Schlagwort, der Kultspruch', [
      ex('That short line from the advert quickly became a popular [[catchphrase]].', 'Эта короткая реплика из рекламы быстро стала популярной крылатой фразой.', 'Diese kurze Zeile aus der Werbung wurde schnell zu einem bekannten Schlagwort.')
    ], { plural: 'catchphrases' })
  ]);

  /* 7. DROP */
  family('drop', 'ронять; снижаться; капля', 'fallen lassen; sinken; Tropfen', [
    'Правильный глагол с удвоением: drop — dropped — dropped. Очень живые разговорные связки: drop off (подвезти и высадить / занести по пути / задремать), drop out (бросить учёбу / выбыть), drop by / drop in (заглянуть ненадолго), drop back (отстать).',
    'Regelmäßiges Verb (mit Verdopplung): drop — dropped — dropped. Lebendige Alltagsverben: drop off (absetzen / abgeben / einnicken), drop out (abbrechen / aussteigen), drop by / drop in (kurz vorbeischauen), drop back (zurückfallen).'
  ], [
    base('drop', ['drops', 'dropped', 'dropped'], 'B1', 'ронять; снижаться (о температуре, цене); бросить (тему)', 'fallen lassen; sinken; fallen lassen (Thema)', [
      ex('Temperatures are expected to [[drop]] below zero overnight.', 'Ожидается, что ночью температура опустится ниже нуля.', 'Die Temperaturen sollen über Nacht unter null sinken.')
    ]),
    pv('drop off', 'off', 0, 'B1', 'подвезти и высадить; занести по пути (посылку); задремать', 'absetzen, abgeben; einnicken', [
      ex('I can [[drop]] the signed forms [[off]] at the office on my way home.', 'Я могу занести подписанные бланки в офис по дороге домой.', 'Ich kann die unterschriebenen Formulare auf dem Heimweg im Büro abgeben.')
    ], ['ЗАнести / высадить', 'ABgeben / ABsetzen'], ['off = оставить по пути и поехать дальше.', 'off = unterwegs abgeben/absetzen.']),
    pv('drop out', 'out', 0, 'B2', 'бросить (учёбу, курс), выбыть (из гонки, проекта)', 'abbrechen (Studium), ausscheiden', [
      ex('Two participants had to [[drop out]] of the workshop due to illness.', 'Двое участников были вынуждены выбыть из воркшопа из-за болезни.', 'Zwei Teilnehmende mussten den Workshop krankheitsbedingt abbrechen.')
    ], ['ВЫбыть, бросить', 'AUSsteigen, abbrechen'], ['out = выпасть наружу из группы или программы.', 'out = aus einem Kurs oder Team ausscheiden.']),
    pv('drop by', null, null, 'B1', 'заглянуть, зайти ненадолго без долгой подготовки', 'kurz vorbeischauen', [
      ex('Feel free to [[drop by]] my desk if you have any questions about the brief.', 'Смело заглядывай ко мне за стол, если будут вопросы по брифу.', 'Schau gern kurz an meinem Schreibtisch vorbei, wenn du Fragen zum Brief hast.')
    ], ['ЗАглянуть', 'VORBEIschauen'], null, { tr: 'figurative' }),
    pv('drop in', 'in', 0, 'B1', 'заскочить, заглянуть в гости / на встречу', 'kurz hereinschauen, vorbeikommen', [
      ex('My sister [[dropped in]] for tea while she was in the neighbourhood.', 'Сестра заскочила на чай, пока была в нашем районе.', 'Meine Schwester schaute kurz auf einen Tee vorbei, als sie in der Nähe war.')
    ], ['ЗАскочить', 'HEREINschauen'], ['in = ненадолго зайти внутрь.', 'in = kurz hereinkommen.']),
    pv('drop back', 'back', 1, 'B2', 'отстать, откатиться назад (в гонке, рейтинге)', 'zurückfallen', [
      ex('After the steep hill, two runners [[dropped back]] from the lead group.', 'После крутого подъёма двое бегунов отстали от лидирующей группы.', 'Nach dem steilen Anstieg fielen zwei Läufer aus der Spitzengruppe zurück.')
    ], ['ОТстать', 'ZURÜCKfallen'], ['back = отойти назад от прежней позиции.', 'back = hinter die bisherige Position fallen.']),
    word('dropout', 'noun', 'dropout', 'B2', 'отчисленный / бросивший учёбу; выбывание', 'der Studienabbrecher; der Ausfall', [
      ex('Better mentoring significantly reduced the [[dropout]] rate on the online course.', 'Более качественное наставничество заметно снизило отсев на онлайн-курсе.', 'Besseres Mentoring senkte die Abbruchquote im Online-Kurs deutlich.')
    ], { plural: 'dropouts' })
  ]);

  /* 8. BACK */
  family('back', 'поддерживать; сдавать назад; спина', 'unterstützen; zurücksetzen; Rücken', [
    'Глагол back и его связки незаменимы в IT и переговорах: back up (делать резервную копию / поддержать аргументами), back down (уступить в споре), back out (отказаться от сделки в последний момент), back off (отступить, отвязаться).',
    'Das Verb back ist zentral in IT und Verhandlungen: back up (sichern / stützen), back down (nachgeben), back out (einen Rückzieher machen), back off (zurückweichen).'
  ], [
    base('back', ['backs', 'backed', 'backed'], 'B2', 'поддерживать (проект, кандидата); сдавать назад (на машине)', 'unterstützen; rückwärtsfahren', [
      ex('Three local investors agreed to [[back]] the clean-energy startup.', 'Трое местных инвесторов согласились поддержать стартап в сфере чистой энергии.', 'Drei lokale Investoren sagten zu, das Clean-Energy-Startup zu unterstützen.')
    ]),
    pv('back up', 'up', 0, 'B1', 'делать резервную копию (данных); подкреплять (доказательствами), поддерживать', 'sichern (Daten); stützen, belegen', [
      ex('Always [[back up]] your project files before running a major system upgrade.', 'Всегда делайте резервную копию проектных файлов перед крупным обновлением системы.', 'Sichern Sie Ihre Projektdateien immer vor einem größeren Systemupdate.')
    ], ['сделать БЭКАП; подкрепить', 'SICHERN; UNTERMAUERN'], ['up = создать опору / страховку.', 'up = Absicherung schaffen.'], { tr: 'figurative' }),
    pv('back down', 'down', 0, 'B2', 'уступить, пойти на попятную (в споре, требовании)', 'nachgeben, einlenken', [
      ex('Neither side wanted to [[back down]] during the first hour of talks.', 'В первый час переговоров ни одна сторона не хотела уступать.', 'In der ersten Stunde der Gespräche wollte keine Seite nachgeben.')
    ], ['ОТступить, уступить', 'NACHgeben'], ['down = снизить напор, отойти от жёсткой позиции.', 'down = von einer harten Forderung abrücken.'], { tr: 'figurative' }),
    pv('back out', 'out', 0, 'B2', 'выйти из сделки/обещания в последний момент (of)', 'einen Rückzieher machen, abspringen', [
      ex('The supplier [[backed out]] of the contract two days before delivery.', 'Поставщик отказался от контракта за два дня до поставки.', 'Der Lieferant sprang zwei Tage vor der Lieferung vom Vertrag ab.')
    ], ['ВЫйти из сделки', 'ABspringen'], ['out = вытянуться наружу из договорённости.', 'out = aus einer Abmachung aussteigen.'], { tr: 'figurative' }),
    pv('back off', 'off', 0, 'B2', 'отступить, отойти, перестать давить', 'zurückweichen, Abstand nehmen', [
      ex('When the regulator raised concerns, the firm decided to [[back off]].', 'Когда регулятор высказал опасения, компания решила отступить.', 'Als die Aufsichtsbehörde Bedenken äußerte, beschloss die Firma zurückzuweichen.')
    ], ['ОТступить', 'ZURÜCKweichen'], ['off = отойти в сторону от конфликта.', 'off = Abstand gewinnen.'], { tr: 'figurative' }),
    word('backup', 'noun', 'backup', 'B1', 'резервная копия; подстраховка, замена', 'das Backup, die Sicherung; Ersatz', [
      ex('An automated nightly [[backup]] saved the team after the disk failed.', 'Автоматическая ночная резервная копия спасла команду после отказа диска.', 'Ein automatisches nächtliches Backup rettete das Team nach dem Festplattenausfall.')
    ], { plural: 'backups' }),
    word('backlash', 'noun', 'backlash', 'C1', 'резкая негативная реакция (общества, клиентов)', 'die heftige Gegenreaktion, der Gegenwind', [
      ex('The sudden price hike triggered an immediate [[backlash]] from subscribers.', 'Резкое повышение цен вызвало немедленную волну негодования среди подписчиков.', 'Die plötzliche Preiserhöhung löste sofort heftigen Gegenwind bei den Abonnenten aus.')
    ])
  ]);

  /* 9. SOLVE (Word-building family) */
  wbFamily('solve', 'solve', 'решать (проблему, задачу)', 'lösen (ein Problem)', [
    'Латинский корень solvere («развязывать, решать») связывает solve (решать), solution (решение / раствор), resolve (разрешать конфликт / твёрдо решить), resolution (резолюция / разрешение экрана) и dissolve (растворяться).',
    'Die lateinische Wurzel solvere („lösen“) verbindet solve (lösen), solution (Lösung), resolve (beilegen / beschließen), resolution (Beschluss / Auflösung) und dissolve (auflösen).'
  ], [
    word('solve', 'verb', 'solve', 'B1', 'решать (задачу, проблему, загадку)', 'lösen', [
      ex('Updating the driver quickly [[solved]] the audio problem.', 'Обновление драйвера быстро решило проблему со звуком.', 'Das Aktualisieren des Treibers löste das Audioproblem schnell.')
    ], { base: true }),
    word('solution', 'noun', 'solution', 'B1', 'решение (проблемы); раствор', 'die Lösung', [
      ex('We need a practical [[solution]] that works on mobile devices too.', 'Нам нужно практичное решение, которое работает и на мобильных устройствах.', 'Wir brauchen eine praktische Lösung, die auch auf Mobilgeräten funktioniert.')
    ], { plural: 'solutions' }),
    word('solvable', 'adj', 'solvable', 'B2', 'решаемый, разрешимый', 'lösbar', [
      ex('Once we split the bug into smaller parts, it looked completely [[solvable]].', 'Как только мы разбили баг на мелкие части, он стал выглядеть вполне решаемым.', 'Sobald wir den Fehler in kleinere Teile zerlegten, wirkte er völlig lösbar.')
    ]),
    word('unsolved', 'adj', 'unsolved', 'B2', 'нерешённый, нераскрытый', 'ungelöst', [
      ex('Several technical questions remained [[unsolved]] at the end of the sprint.', 'В конце спринта несколько технических вопросов остались нерешёнными.', 'Am Ende des Sprints blieben mehrere technische Fragen ungelöst.')
    ]),
    word('resolve', 'verb', 'resolve', 'B2', 'урегулировать (спор, инцидент), разрешить проблему', 'beilegen, klären, lösen', [
      ex('Support managed to [[resolve]] the billing ticket within two hours.', 'Поддержка сумела урегулировать тикет по оплате в течение двух часов.', 'Der Support konnte das Abrechnungsticket innerhalb von zwei Stunden klären.')
    ]),
    word('resolution', 'noun', 'resolution', 'B2', 'урегулирование; резолюция; разрешение (экрана)', 'die Lösung, Beilegung; der Beschluss; die Auflösung', [
      ex('Export the diagram at high [[resolution]] so the labels stay crisp.', 'Экспортируй схему в высоком разрешении, чтобы подписи остались чёткими.', 'Exportiere das Diagramm in hoher Auflösung, damit die Beschriftungen scharf bleiben.')
    ], { plural: 'resolutions' }),
    word('dissolve', 'verb', 'dissolve', 'C1', 'растворять(ся); распускать (организацию, парламент)', 'auflösen, sich auflösen', [
      ex('Stir the warm water until the salt [[dissolves]] completely.', 'Помешивайте тёплую воду, пока соль полностью не растворится.', 'Rühren Sie das warme Wasser um, bis sich das Salz vollständig auflöst.')
    ])
  ]);

  /* 10. PRESS (Word-building family) */
  wbFamily('press', 'press', 'давить, нажимать; пресса', 'drücken; Presse', [
    'Латинский корень press- («давить») даёт точные параллели к немецкому drücken: pressure (давление — Druck), impress / impression (произвести впечатление — Eindruck), suppress (подавлять — unterdrücken), compress (сжимать).',
    'Die lateinische Wurzel press- („drücken“) bildet direkte Parallelen zu deutsch drücken: pressure (Druck), impress / impression (Eindruck), suppress (unterdrücken), compress (komprimieren).'
  ], [
    word('press-v', 'verb', 'press', 'B1', 'нажимать (кнопку), давить; настаивать', 'drücken; drängen', [
      ex('[[Press]] the green button once to confirm your ticket.', 'Нажмите зелёную кнопку один раз, чтобы подтвердить билет.', 'Drücken Sie einmal die grüne Taste, um Ihr Ticket zu bestätigen.')
    ], { base: true }),
    word('pressure', 'noun', 'pressure', 'B1', 'давление (физическое, рабочее, психологическое)', 'der Druck', [
      ex('She stays remarkably calm even under tight deadline [[pressure]].', 'Она остаётся удивительно спокойной даже под жёстким давлением сроков.', 'Sie bleibt selbst unter starkem Termindruck bemerkenswert ruhig.')
    ], { plural: 'pressures' }),
    word('impress', 'verb', 'impress', 'B2', 'производить впечатление, впечатлять', 'beeindrucken', [
      ex('Her honest answers managed to [[impress]] even the most critical listeners.', 'Её честные ответы впечатлили даже самых критичных слушателей.', 'Ihre ehrlichen Antworten beeindruckten selbst die kritischsten Zuhörer.')
    ]),
    word('impression', 'noun', 'impression', 'B1', 'впечатление (make a good impression)', 'der Eindruck', [
      ex('A clear, well-structured portfolio leaves a strong first [[impression]].', 'Чёткое, хорошо структурированное портфолио оставляет сильное первое впечатление.', 'Ein klares, gut strukturiertes Portfolio hinterlässt einen starken ersten Eindruck.')
    ], { plural: 'impressions' }),
    word('impressive', 'adj', 'impressive', 'B1', 'впечатляющий, внушительный', 'beeindruckend', [
      ex('The team achieved an [[impressive]] reduction in response time.', 'Команда добилась впечатляющего сокращения времени отклика.', 'Das Team erreichte eine beeindruckende Verkürzung der Antwortzeit.')
    ]),
    word('suppress', 'verb', 'suppress', 'C1', 'подавлять, сдерживать (эмоцию, симптомы, информацию)', 'unterdrücken', [
      ex('The medicine helps [[suppress]] the cough at night.', 'Это лекарство помогает подавить кашель ночью.', 'Das Medikament hilft, den Husten nachts zu unterdrücken.')
    ]),
    word('compress', 'verb', 'compress', 'B2', 'сжимать (файл, изображение, газ)', 'komprimieren, zusammendrücken', [
      ex('Please [[compress]] the screenshots into a single ZIP file before sending.', 'Пожалуйста, сожмите скриншоты в один ZIP-файл перед отправкой.', 'Bitte komprimieren Sie die Screenshots vor dem Versand in eine ZIP-Datei.')
    ])
  ]);

  /* Sync particle pages & ROOT_PLAN order (verb families grouped first, word-building families after) */
  P.items.forEach(function (w) {
    if (!w.particle || !w.prefixDrill || !P.prefixes[w.prefix]) return;
    var m = P.prefixes[w.prefix].meanings[w.prefixDrill.meaning];
    if (!m || m.examples.some(function (e) { return e.t === w.t; })) return;
    var first = function (s) { return String(s || '').split(';')[0].trim(); };
    m.examples.push(ex(w.t, first(w.ru), first(w.de)));
  });

  P.config.ROOT_PLAN = P.config.ROOT_PLAN.filter(function (id) { return /^vf-/.test(id) && NEW_ORDER.indexOf(id) < 0; })
    .concat(NEW_ORDER.filter(function (id) { return /^vf-/.test(id); }),
      P.config.ROOT_PLAN.filter(function (id) { return !/^vf-/.test(id) && NEW_ORDER.indexOf(id) < 0; }),
      NEW_ORDER.filter(function (id) { return !/^vf-/.test(id); }));
})();
