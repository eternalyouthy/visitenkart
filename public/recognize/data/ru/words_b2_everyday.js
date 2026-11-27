/* RUSSIAN vocabulary · B2 everyday topics (modelled on the German "B2 everyday topics"):
 * Housing, Relationships, Health, Travel — 10 cards each.
 * Stress marked with "+" before the stressed vowel (ё needs none). Glosses en / de. Original examples. */
(function () {
  'use strict';
  function ex(t, en, de) { return { t: t, en: en, de: de }; }
  function nt(note) { return note ? { en: note[0], de: note[1] } : undefined; }
  function N(id, t, gender, level, en, de, e, note) { return { id: 'ru-w-b2e-' + id, pos: 'noun', t: t, gender: gender, level: level, en: en, de: de, examples: [e], note: nt(note) }; }
  function V(id, t, aspect, level, forms, en, de, e, note) { return { id: 'ru-w-b2e-' + id, pos: 'verb', t: t, aspect: aspect, level: level, forms: { praes: forms[0], praet: forms[1], perf: forms[2] }, en: en, de: de, examples: [e], note: nt(note) }; }
  function A(id, pos, t, level, en, de, e, note) { return { id: 'ru-w-b2e-' + id, pos: pos, t: t, level: level, en: en, de: de, examples: [e], note: nt(note) }; }
  function reg(topic, items) { GT.register({ tab: 'words', topic: topic, items: items }); }

  reg('b2_housing', [
    N('ipoteka', 'ип+отека', 'f', 'B2', 'mortgage', 'die Hypothek, der Immobilienkredit',
      ex('Мы взял+и [[ип+отеку]] на дв+адцать лет.', 'We took out a twenty-year mortgage.', 'Wir haben eine Hypothek über zwanzig Jahre aufgenommen.')),
    N('kommunalka', 'коммун+альные усл+уги', 'pl', 'B1', 'utilities (water, heating, rubbish)', 'die Nebenkosten',
      ex('Зим+ой за [[коммун+альные усл+уги]] пл+атим б+ольше.', 'In winter we pay more for utilities.', 'Im Winter zahlen wir mehr Nebenkosten.'),
      ['Colloquially: коммуналка — also a communal flat shared by several families.', 'Umgangssprachlich: коммуналка — auch eine Gemeinschaftswohnung mehrerer Familien.']),
    N('arendodatel', 'арендод+атель', 'm', 'B2', 'landlord', 'der Vermieter',
      ex('[[Арендод+атель]] обещ+ал почин+ить кран до п+ятницы.', 'The landlord promised to fix the tap by Friday.', 'Der Vermieter hat versprochen, den Wasserhahn bis Freitag zu reparieren.'),
      ['The tenant is арендатор (formal) or жилец; in speech people often say хозяин / хозяйка квартиры.', 'Der Mieter heißt арендатор (formell) oder жилец; im Alltag sagt man oft хозяин / хозяйка квартиры.']),
    A('syomny', 'adj', 'съёмный', 'B2', 'rented', 'gemietet, Miet-',
      ex('Пок+а мы живём в [[съёмной]] кварт+ире.', 'For now we live in a rented flat.', 'Vorerst wohnen wir in einer Mietwohnung.')),
    N('novostroyka', 'новостр+ойка', 'f', 'B2', 'new-build (flat or block)', 'der Neubau',
      ex('Мы пере+ехали в [[новостр+ойку]] на окр+аине.', 'We moved into a new-build on the edge of town.', 'Wir sind in einen Neubau am Stadtrand gezogen.')),
    N('propiska', 'проп+иска', 'f', 'B2', 'registered address, residence registration', 'die Meldeadresse, die Anmeldung',
      ex('Без [[проп+иски]] тр+удно запис+аться к врач+у.', 'Without a registered address it’s hard to get a doctor’s appointment.', 'Ohne Meldeadresse ist es schwer, einen Arzttermin zu bekommen.'),
      ['Officially now регистрация по месту жительства, but прописка is what everyone says.', 'Offiziell heißt es heute регистрация по месту жительства, aber alle sagen прописка.']),
    V('zaselyatsya', 'засел+яться', 'impf', 'B2', ['засел+яюсь, засел+яешься', 'засел+ялся', 'pf. засел+иться'], 'to move in (to a flat, hotel)', 'einziehen; einchecken',
      ex('Нов+ые жильц+ы [[засел+ятся]] в конц+е м+есяца.', 'The new tenants will move in at the end of the month.', 'Die neuen Mieter ziehen Ende des Monats ein.')),
    A('uyutny', 'adj', 'у+ютный', 'B1', 'cosy', 'gemütlich',
      ex('У них м+аленькая, но +очень [[у+ютная]] кварт+ира.', 'They have a small but very cosy flat.', 'Sie haben eine kleine, aber sehr gemütliche Wohnung.')),
    N('schyotchik', 'счётчик', 'm', 'B2', 'meter (water, gas, electricity)', 'der Zähler',
      ex('Не заб+удь перед+ать показ+ания [[счётчиков]] до дв+адцать п+ятого.', 'Don’t forget to send the meter readings by the 25th.', 'Vergiss nicht, die Zählerstände bis zum 25. durchzugeben.'),
      ['Показания счётчика — meter reading; in Russia tenants send them themselves every month.', 'Показания счётчика — Zählerstand; in Russland gibt man ihn jeden Monat selbst durch.']),
    N('uk', 'управл+яющая комп+ания', 'f', 'B2', 'property management company', 'die Hausverwaltung',
      ex('Позвон+и в [[управл+яющую комп+анию]], у нас оп+ять нет гор+ячей вод+ы.', 'Call the management company — we’ve got no hot water again.', 'Ruf die Hausverwaltung an, wir haben schon wieder kein warmes Wasser.'),
      ['Often shortened to УК (у-к+а).', 'Oft abgekürzt: УК.'])
  ]);

  reg('b2_relations', [
    N('doverie', 'дов+ерие', 'n', 'B2', 'trust', 'das Vertrauen',
      ex('Без [[дов+ерия]] отнош+ения не раб+отают.', 'Relationships don’t work without trust.', 'Ohne Vertrauen funktionieren Beziehungen nicht.')),
    V('ssoritsya', 'с+ориться', 'impf', 'B1', ['с+орюсь, с+оришься', 'с+орился', 'pf. посс+ориться'], 'to quarrel, to fall out', 'sich streiten',
      ex('Он+и ч+асто [[с+орятся]] из-за д+енег.', 'They often argue about money.', 'Sie streiten sich oft wegen Geld.'),
      ['With someone: ссориться с + Instr. (с братом).', 'Mit jemandem: ссориться с + Instr. (с братом).']),
    V('miritsya', 'мир+иться', 'impf', 'B2', ['мир+юсь, мир+ишься', 'мир+ился', 'pf. помир+иться'], 'to make up, to make peace', 'sich versöhnen',
      ex('П+осле сс+оры он+и б+ыстро [[помир+ились]].', 'After the quarrel they quickly made up.', 'Nach dem Streit haben sie sich schnell versöhnt.'),
      ['From мир (peace). Second meaning: мириться с чем-то — to put up with something.', 'Von мир (Frieden). Zweite Bedeutung: мириться с чем-то — sich mit etwas abfinden.']),
    N('razvod', 'разв+од', 'm', 'B2', 'divorce', 'die Scheidung',
      ex('П+осле [[разв+ода]] д+ети жив+ут с м+амой.', 'Since the divorce the children have lived with their mum.', 'Nach der Scheidung leben die Kinder bei der Mutter.')),
    A('zamuzhem', 'adv', 'зам+ужем', 'B1', 'married (of a woman)', 'verheiratet (von einer Frau)',
      ex('Мо+я сестр+а [[зам+ужем]] уж+е пять лет.', 'My sister has been married for five years.', 'Meine Schwester ist seit fünf Jahren verheiratet.'),
      ['Literally “behind a husband”. Of a man: жен+ат. Both: они женаты.', 'Wörtlich „hinter dem Mann“. Von einem Mann: жен+ат. Beide: они женаты.']),
    V('revnovat', 'ревнов+ать', 'impf', 'B2', ['ревн+ую, ревн+уешь', 'ревнов+ал', 'pf. приревнов+ать'], 'to be jealous', 'eifersüchtig sein',
      ex('Он [[ревн+ует]] жен+у к к+аждому колл+еге.', 'He’s jealous of every colleague his wife has.', 'Er ist auf jeden Kollegen seiner Frau eifersüchtig.'),
      ['Ревновать кого-то к кому-то: the person you love goes in the Akk., the rival after к + Dat.', 'Ревновать кого-то к кому-то: die geliebte Person im Akk., der Rivale nach к + Dat.']),
    N('obida', 'об+ида', 'f', 'B2', 'resentment, hurt feelings; offence', 'die Kränkung, der Groll',
      ex('Он д+олго держ+ал [[об+иду]] на др+уга.', 'He held a grudge against his friend for a long time.', 'Er war lange gekränkt und trug es seinem Freund nach.'),
      ['Verb: обижаться / обидеться на + Akk. — to take offence.', 'Verb: обижаться / обидеться на + Akk. — gekränkt sein.']),
    N('ponimanie', 'поним+ание', 'n', 'B1', 'understanding', 'das Verständnis',
      ex('Спас+ибо за [[поним+ание]]!', 'Thank you for your understanding!', 'Vielen Dank für Ihr Verständnis!')),
    V('rasstavatsya', 'расстав+аться', 'impf', 'B2', ['расста+юсь, расстаёшься', 'расстав+ался', 'pf. расст+аться'], 'to split up; to part', 'sich trennen; auseinandergehen',
      ex('Он+и [[расст+ались]] друзь+ями.', 'They split up as friends.', 'Sie haben sich als Freunde getrennt.')),
    N('svekrov', 'свекр+овь', 'f', 'B2', 'mother-in-law (husband’s mother)', 'die Schwiegermutter (Mutter des Mannes)',
      ex('Со [[свекр+овью]] у неё отл+ичные отнош+ения.', 'She gets on really well with her mother-in-law.', 'Sie versteht sich sehr gut mit ihrer Schwiegermutter.'),
      ['Russian distinguishes: свекровь — the husband’s mother, тёща — the wife’s mother.', 'Russisch unterscheidet: свекровь — Mutter des Mannes, тёща — Mutter der Frau.'])
  ]);

  reg('b2_health', [
    N('privivka', 'прив+ивка', 'f', 'B1', 'vaccination, jab', 'die Impfung',
      ex('П+еред по+ездкой н+ужно сд+елать [[прив+ивку]].', 'You need to get vaccinated before the trip.', 'Vor der Reise muss man sich impfen lassen.')),
    A('hronichesky', 'adj', 'хрон+ический', 'B2', 'chronic', 'chronisch',
      ex('У нег+о [[хрон+ический]] бронх+ит.', 'He has chronic bronchitis.', 'Er hat chronische Bronchitis.')),
    N('obsledovanie', 'обсл+едование', 'n', 'B2', 'medical examination, check-up', 'die Untersuchung',
      ex('Врач напр+авил мен+я на п+олное [[обсл+едование]].', 'The doctor sent me for a full check-up.', 'Der Arzt hat mich zu einer umfassenden Untersuchung überwiesen.')),
    N('pobochny', 'поб+очный эфф+ект', 'm', 'B2', 'side effect', 'die Nebenwirkung',
      ex('У +этого лек+арства почт+и нет [[поб+очных эфф+ектов]].', 'This medicine has hardly any side effects.', 'Dieses Medikament hat kaum Nebenwirkungen.')),
    N('bessonnitsa', 'бесс+онница', 'f', 'B2', 'insomnia', 'die Schlaflosigkeit',
      ex('Из-за стр+есса у мен+я начал+ась [[бесс+онница]].', 'Stress has given me insomnia.', 'Wegen des Stresses leide ich unter Schlaflosigkeit.'),
      ['бес- (without) + сон (sleep): the same build as German schlaf-los.', 'бес- (ohne) + сон (Schlaf): genauso gebaut wie schlaf-los.']),
    N('napravlenie', 'направл+ение', 'n', 'B2', 'referral (to a specialist); direction', 'die Überweisung; die Richtung',
      ex('Без [[направл+ения]] к кардиол+огу не зап+ишут.', 'They won’t give you an appointment with the cardiologist without a referral.', 'Ohne Überweisung bekommt man keinen Termin beim Kardiologen.')),
    N('reabilitatsiya', 'реабилит+ация', 'f', 'B2', 'rehabilitation, rehab', 'die Reha, die Rehabilitation',
      ex('П+осле тр+авмы ем+у нужн+а д+олгая [[реабилит+ация]].', 'After the injury he needs a long period of rehab.', 'Nach der Verletzung braucht er eine lange Reha.')),
    A('zozh', 'phrase', 'здор+овый +образ ж+изни', 'B2', 'healthy lifestyle', 'gesunder Lebensstil',
      ex('Он ведёт [[здор+овый +образ ж+изни]]: не к+урит и мн+ого гул+яет.', 'He lives a healthy life: he doesn’t smoke and walks a lot.', 'Er lebt gesund: Er raucht nicht und geht viel spazieren.'),
      ['Often abbreviated ЗОЖ (зож).', 'Oft abgekürzt: ЗОЖ.'])
  ]);

  reg('b2_travel', [
    N('zagranpasport', 'загранп+аспорт', 'm', 'B2', 'international passport', 'der Reisepass',
      ex('Не заб+удь продл+ить [[загранп+аспорт]]!', 'Don’t forget to renew your passport!', 'Vergiss nicht, deinen Reisepass zu verlängern!'),
      ['Russians have two: an internal паспорт (ID) and a загранпаспорт for travel abroad.', 'In Russland gibt es zwei: den Inlandspass (паспорт) und den загранпаспорт für Auslandsreisen.']),
    N('vylet', 'в+ылет', 'm', 'B1', 'departure (of a flight)', 'der Abflug',
      ex('[[В+ылет]] перенесл+и на шесть утр+а.', 'The departure was moved to six in the morning.', 'Der Abflug wurde auf sechs Uhr morgens verlegt.'),
      ['Opposite: прилёт — arrival. Both from лететь (to fly).', 'Gegenteil: прилёт — Ankunft. Beide von лететь (fliegen).']),
    A('registratsiya-reys', 'phrase', 'регистр+ация на рейс', 'B2', 'check-in (for a flight)', 'der Check-in',
      ex('[[Регистр+ация на рейс]] закрыв+ается за с+орок мин+ут до в+ылета.', 'Check-in closes forty minutes before departure.', 'Der Check-in schließt vierzig Minuten vor Abflug.')),
    N('ruchnaya-klad', 'ручн+ая кладь', 'f', 'B2', 'hand luggage', 'das Handgepäck',
      ex('В [[ручн+ую кладь]] нельз+я брать ж+идкости.', 'You can’t take liquids in your hand luggage.', 'Im Handgepäck darf man keine Flüssigkeiten mitnehmen.')),
    N('putyovka', 'путёвка', 'f', 'B2', 'package holiday; voucher (for a holiday)', 'die Pauschalreise',
      ex('Мы куп+или [[путёвку]] в Т+урцию.', 'We bought a package holiday to Turkey.', 'Wir haben eine Pauschalreise in die Türkei gebucht.')),
    V('bronirovat', 'брон+ировать', 'impf', 'B1', ['брон+ирую, брон+ируешь', 'брон+ировал', 'pf. заброн+ировать'], 'to book, to reserve', 'buchen, reservieren',
      ex('Я уж+е [[заброн+ировал]] гост+иницу.', 'I’ve already booked the hotel.', 'Ich habe das Hotel schon gebucht.'),
      ['Noun: бронь (colloq.) / бронирование — a booking.', 'Substantiv: бронь (ugs.) / бронирование — Buchung.']),
    N('dostoprimechatelnost', 'достопримеч+ательность', 'f', 'B1', 'sight, place of interest', 'die Sehenswürdigkeit',
      ex('Гл+авная [[достопримеч+ательность]] г+орода — ст+арый мост.', 'The town’s main sight is the old bridge.', 'Die wichtigste Sehenswürdigkeit der Stadt ist die alte Brücke.')),
    N('obmennik', 'обм+енник', 'm', 'B2', 'bureau de change (colloquial)', 'die Wechselstube',
      ex('[[Обм+енник]] в аэроп+орту берёт б+ольшую ком+иссию.', 'The exchange office at the airport charges a big commission.', 'Die Wechselstube am Flughafen verlangt eine hohe Gebühr.'),
      ['Neutral: пункт обмена валюты.', 'Neutral: пункт обмена валюты.']),
    N('zaderzhka', 'зад+ержка', 'f', 'B1', 'delay', 'die Verspätung, die Verzögerung',
      ex('Из-за тум+ана был+а [[зад+ержка]] на три час+а.', 'Because of the fog there was a three-hour delay.', 'Wegen Nebels gab es drei Stunden Verspätung.')),
    N('poputchik', 'поп+утчик', 'm', 'B2', 'fellow traveller', 'der Mitreisende, der Reisegefährte',
      ex('Мой [[поп+утчик]] в п+оезде всю дор+огу расск+азывал о сво+ей семь+е.', 'My fellow passenger on the train talked about his family the whole way.', 'Mein Mitreisender im Zug hat die ganze Fahrt über von seiner Familie erzählt.'),
      ['From по + путь (the way): someone going the same way. Попутка — a lift with a passing car.', 'Von по + путь (Weg): jemand mit demselben Weg. Попутка — Mitfahrgelegenheit.'])
  ]);
})();
