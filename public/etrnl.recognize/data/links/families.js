/* Cross-language links between the verb FAMILIES of the three packs (German roots r-*, English verb + particle
 * families en:vf:*, Russian roots ru-r-*). Only pairs whose sense really matches are linked; a verb that
 * has no counterpart family in one language is linked between the other two only.
 * Same format as data/links/cross.js. */
GT.link([
  // ---- base verbs: the same core idea in three languages
  { de: ['r-nehmen-nehmen', 'nehmen'], en: ['en:vf:take', 'take'], ru: ['ru-r-br-brat', 'бр+ать'],
    note: { ru: 'Одна идея — «взять». Сравните семьи: aufnehmen / take in, übernehmen / take over, mitnehmen / забирать.', en: 'One core idea, “to take”. Compare the families: aufnehmen / take in, übernehmen / take over, mitnehmen / забирать.', de: 'Eine Grundidee, „nehmen“. Vergleiche die Familien: aufnehmen / take in, übernehmen / take over, mitnehmen / забирать.' } },
  { de: ['r-geben-geben', 'geben'], en: ['en:vf:give', 'give'], ru: ['ru-r-da-davat', 'дав+ать'],
    note: { ru: 'Корень да- (давать, дать) родствен латинскому dare; ср. aufgeben / give up, weitergeben / передавать.', en: 'The Russian root да- is related to Latin dare. Compare aufgeben / give up, weitergeben / передавать.', de: 'Die russische Wurzel да- ist mit lat. dare verwandt. Vergleiche aufgeben / give up, weitergeben / передавать.' } },
  { de: ['r-legen-legen', 'legen'], en: ['en:vf:put', 'put'], ru: ['ru-r-lozh-klast', 'кл+асть'],
    note: { ru: 'Немецкий и русский различают «положить» (legen, класть) и «поставить» (stellen, ставить); английский обходится одним put.', en: 'German and Russian distinguish laying flat (legen, класть) from standing upright (stellen, ставить); English uses put for both.', de: 'Deutsch und Russisch unterscheiden legen/класть und stellen/ставить; das Englische sagt für beides put.' } },
  { de: ['r-stellen-stellen', 'stellen'], en: ['en:vf:put', 'put'], ru: ['ru-r-stav-stavit', 'ст+авить'],
    note: { ru: 'Stellen и ставить — «поставить вертикально»; по-английски тоже put.', en: 'Stellen and ставить mean putting something upright; English again says put.', de: 'Stellen und ставить bedeuten „aufrecht hinstellen“; im Englischen wieder put.' } },
  { de: ['r-sprechen-sprechen', 'sprechen'], ru: ['ru-r-govor-govorit', 'говор+ить'],
    note: { ru: 'Обе семьи строят «договориться»: sich absprechen / договариваться.', en: 'Both families build “to agree”: sich absprechen / договариваться.', de: 'Beide Familien bilden „sich einigen“: sich absprechen / договариваться.' } },
  { de: ['r-gehen-gehen', 'gehen'], en: ['en:vf:go', 'go'], ru: ['ru-r-hod-hodit', 'ход+ить'],
    note: { ru: 'Gehen и ходить — пешком; на транспорте немецкий говорит fahren, русский — ездить / ехать. Английское go покрывает оба.', en: 'Gehen and ходить mean going on foot; by vehicle German says fahren and Russian ездить / ехать. English go covers both.', de: 'Gehen und ходить meinen zu Fuß; mit Fahrzeug sagt man fahren bzw. ездить / ехать. Engl. go deckt beides ab.' } },
  { de: ['r-kommen-kommen', 'kommen'], en: ['en:vf:come', 'come'], ru: ['ru-r-hod-prihodit', 'приход+ить'] },
  { de: ['r-sehen-ansehen', 'ansehen'], en: ['en:vf:look', 'look'], ru: ['ru-r-smotr-smotret', 'смотр+еть'] },
  { de: ['r-fallen-fallen', 'fallen'], en: ['en:vf:fall', 'fall'],
    note: { ru: 'Fallen и fall — родственные слова, как и семьи: zerfallen / fall apart, fehlschlagen / fall through.', en: 'Fallen and fall are cognates, and so are many family members: zerfallen / fall apart.', de: 'Fallen und fall sind verwandt, ebenso viele Ableitungen: zerfallen / fall apart.' } },
  { de: ['r-halten-halten', 'halten'], en: ['en:vf:hold', 'hold'],
    note: { ru: 'Halten и hold — родственные слова: aufhalten / hold up, sich festhalten / hold on.', en: 'Halten and hold are cognates: aufhalten / hold up, sich festhalten / hold on.', de: 'Halten und hold sind verwandt: aufhalten / hold up, sich festhalten / hold on.' } },
  { de: ['r-brechen-brechen', 'brechen'], en: ['en:vf:break', 'break'],
    note: { ru: 'Brechen и break — родственные слова: abbrechen / break off, einbrechen / break into, ausbrechen / break out.', en: 'Brechen and break are cognates: abbrechen / break off, einbrechen / break into, ausbrechen / break out.', de: 'Brechen und break sind verwandt: abbrechen / break off, einbrechen / break into, ausbrechen / break out.' } },
  { de: ['r-tragen-tragen', 'tragen'], en: ['en:vf:carry', 'carry'], ru: ['ru-r-nos-nesti', 'нест+и'] },
  { de: ['r-tragen-tragen', 'tragen'], ru: ['ru-r-nos-nosit', 'нос+ить'],
    note: { ru: 'Второе значение: tragen / носить — «носить одежду, очки».', en: 'Second sense: tragen / носить — to wear clothes or glasses.', de: 'Zweite Bedeutung: tragen / носить — Kleidung oder eine Brille tragen.' } },
  { de: ['r-laufen-laufen', 'laufen'], en: ['en:vf:run', 'run'] },
  { de: ['r-schreiben-schreiben', 'schreiben'], ru: ['ru-r-pis-pisat', 'пис+ать'] },
  { de: ['r-fuehren-fuehren', 'führen'], ru: ['ru-r-vod-vesti', 'вест+и'] },
  { en: ['en:vf:make', 'make'], ru: ['ru-r-del-delat', 'д+елать'],
    note: { ru: 'Делать соответствует и make, и do.', en: 'Делать covers both make and do.', de: 'Делать entspricht sowohl make als auch do (machen, tun).' } },
  { en: ['en:vf:bring', 'bring'], ru: ['ru-r-nos-prinosit', 'принос+ить'] },
  { de: ['r-halten-behalten', 'behalten'], en: ['en:vf:keep', 'keep'] },
  { de: ['r-kommen-bekommen', 'bekommen'], en: ['en:vf:get', 'get'],
    note: { ru: 'Ложный друг: bekommen = «получать», а не become (= werden).', en: 'False friend: bekommen means “to get”, not “become” (= werden).', de: 'Falscher Freund: bekommen heißt „get“, nicht „become“ (= werden).' } },

  // ---- nehmen / take / брать
  { de: ['r-nehmen-aufnehmen', 'aufnehmen'], en: ['en:vf:take-in', 'take in'] },
  { de: ['r-nehmen-uebernehmen', 'übernehmen'], en: ['en:vf:take-over', 'take over'] },
  { de: ['r-nehmen-uebernehmen', 'übernehmen'], en: ['en:vf:take-on', 'take on'],
    note: { ru: 'Übernehmen (eine Aufgabe) = take on: «взять на себя».', en: 'Übernehmen (eine Aufgabe) = take on a task.', de: 'Eine Aufgabe übernehmen = take on a task.' } },
  { de: ['r-nehmen-mitnehmen', 'mitnehmen'], ru: ['ru-r-br-zabirat', 'забир+ать'] },

  // ---- geben / give / давать
  { de: ['r-geben-aufgeben', 'aufgeben'], en: ['en:vf:give-up', 'give up'],
    note: { ru: 'Auf- и up здесь совпадают: «бросить, сдаться».', en: 'Auf- and up match here: to quit, to surrender.', de: 'Auf- und up entsprechen sich hier: aufhören, sich geschlagen geben.' } },
  { de: ['r-geben-weitergeben', 'weitergeben'], ru: ['ru-r-da-peredavat', 'передав+ать'] },
  { de: ['r-geben-abgeben', 'abgeben'], ru: ['ru-r-da-sdavat', 'сдав+ать'] },
  { en: ['en:vf:give-back', 'give back'], ru: ['ru-r-da-otdavat', 'отдав+ать'] },
  { en: ['en:vf:give-out', 'give out'], ru: ['ru-r-da-razdavat', 'раздав+ать'] },

  // ---- legen, stellen / put / класть, ставить
  { en: ['en:put-off:phr:main', 'put off'], ru: ['ru-r-lozh-otkladyvat', 'откл+адывать'] },
  { de: ['r-legen-verlegen', 'verlegen'], ru: ['ru-r-nos-perenosit', 'перенос+ить'],
    note: { ru: 'Перенести встречу: einen Termin verlegen / перенести.', en: 'Moving an appointment: einen Termin verlegen / перенести.', de: 'Einen Termin verlegen / перенести.' } },
  { de: ['r-schlagen-vorschlagen', 'vorschlagen'], ru: ['ru-r-lozh-predlagat', 'предлаг+ать'],
    note: { ru: 'Вор- и пред- значат «перед»: предложить = «положить перед».', en: 'Vor- and пред- both mean “before, in front”: to put forward.', de: 'Vor- und пред- bedeuten beide „vor“: etwas vorlegen.' } },
  { de: ['r-stellen-vorstellen', 'vorstellen'], ru: ['ru-r-stav-predstavlyat', 'представл+ять'],
    note: { ru: 'Точная калька: vor + stellen = пред + ставить.', en: 'An exact calque: vor + stellen = пред + ставить.', de: 'Eine genaue Lehnübersetzung: vor + stellen = пред + ставить.' } },
  { de: ['r-stellen-ausstellen', 'ausstellen'], ru: ['ru-r-stav-vystavlyat', 'выставл+ять'],
    note: { ru: 'Aus- = вы-: выставить картину, eine Bilderausstellung.', en: 'Aus- = вы-: to exhibit pictures.', de: 'Aus- = вы-: Bilder ausstellen.' } },
  { de: ['r-stellen-zustellen', 'zustellen'], ru: ['ru-r-stav-dostavlyat', 'доставл+ять'] },

  // ---- sprechen / говорить
  { de: ['r-sprechen-absprechen', 'absprechen'], ru: ['ru-r-govor-dogovarivatsya', 'догов+ариваться'] },
  { de: ['r-sprechen-aussprechen', 'aussprechen'], ru: ['ru-r-govor-vygovarivat', 'выгов+аривать'],
    note: { ru: 'Aus- = вы-: «выговорить» = aussprechen.', en: 'Aus- = вы-: to get the word out, to pronounce.', de: 'Aus- = вы-: das Wort herausbringen.' } },
  { de: ['r-halten-unterhalten', 'unterhalten'], ru: ['ru-r-govor-razgovarivat', 'разгов+аривать'],
    note: { ru: 'Только в значении sich unterhalten — «разговаривать».', en: 'Only in the sense sich unterhalten — to have a conversation.', de: 'Nur im Sinne von sich unterhalten.' } },
  { de: ['r-sprechen-durchsprechen', 'durchsprechen'], en: ['en:vf:go-over', 'go over'] },

  // ---- gehen, kommen / go, come / ходить
  { de: ['r-gehen-ausgehen', 'ausgehen'], en: ['en:vf:go-out', 'go out'] },
  { en: ['en:vf:go-away', 'go away'], ru: ['ru-r-hod-uhodit', 'уход+ить'] },
  { de: ['r-kommen-zurueckkommen', 'zurückkommen'], en: ['en:vf:come-back', 'come back'] },
  { de: ['r-kommen-reinkommen', 'reinkommen'], en: ['en:vf:come-in', 'come in'], ru: ['ru-r-hod-vhodit', 'вход+ить'],
    note: { ru: 'Rein-, in и в- — одно направление «внутрь».', en: 'Rein-, in and в- all point inside.', de: 'Rein-, in und в- zeigen alle nach innen.' } },
  { en: ['en:vf:come-over', 'come over'], ru: ['ru-r-hod-zahodit', 'заход+ить'] },
  { de: ['r-kommen-ankommen', 'ankommen'], ru: ['ru-r-ezd-priezzhat', 'приезж+ать'] },
  { de: ['r-ziehen-umziehen', 'umziehen'], ru: ['ru-r-ezd-pereezzhat', 'переезж+ать'] },

  // ---- sehen / look / смотреть
  { de: ['r-schlagen-nachschlagen', 'nachschlagen'], en: ['en:vf:look-up', 'look up'] },
  { en: ['en:vf:look-through', 'look through'], ru: ['ru-r-smotr-prosmatrivat', 'просм+атривать'],
    note: { ru: 'Through и про- — «насквозь»: просмотреть = пройтись глазами по всему.', en: 'Through and про- both mean “all the way through”.', de: 'Through und про- bedeuten beide „durch“: etwas durchsehen.' } },

  // ---- fallen, halten, brechen
  { de: ['r-fallen-umfallen', 'umfallen'], en: ['en:vf:fall-down', 'fall down'] },
  { de: ['r-fallen-zerfallen', 'zerfallen'], en: ['en:vf:fall-apart', 'fall apart'] },
  { de: ['r-schlagen-fehlschlagen', 'fehlschlagen'], en: ['en:vf:fall-through', 'fall through'] },
  { de: ['r-halten-aufhalten', 'aufhalten'], en: ['en:vf:hold-up', 'hold up'] },
  { de: ['r-halten-festhalten', 'festhalten'], en: ['en:vf:hold-on', 'hold on'] },
  { de: ['r-halten-aushalten', 'aushalten'], en: ['en:vf:put-up-with', 'put up with'] },
  { de: ['r-brechen-abbrechen', 'abbrechen'], en: ['en:vf:break-off', 'break off'] },
  { de: ['r-brechen-einbrechen', 'einbrechen'], en: ['en:vf:break-into', 'break into'] },
  { de: ['r-brechen-ausbrechen', 'ausbrechen'], en: ['en:vf:break-out', 'break out'] },
  { de: ['r-brechen-durchbrechen', 'durchbrechen'], en: ['en:vf:break-through', 'break through'] },

  // ---- other matching pairs
  { de: ['r-stehen-aufstehen', 'aufstehen'], en: ['en:vf:get-up', 'get up'] },
  { de: ['r-ziehen-anziehen', 'anziehen'], en: ['en:vf:put-on', 'put on'] },
  { de: ['r-setzen-fortsetzen', 'fortsetzen'], en: ['en:vf:carry-on', 'carry on'] },
  { de: ['r-bauen-aufbauen', 'aufbauen'], en: ['en:set-up:phr:main', 'set up'] },
  { de: ['r-setzen-uebersetzen', 'übersetzen'], ru: ['ru-r-vod-perevodit', 'перевод+ить'],
    note: { ru: 'Über-/пере- = «через»: перевести текст с одного языка на другой.', en: 'Über- and пере- both mean “across”: carrying a text over into another language.', de: 'Über- und пере- bedeuten „hinüber“: einen Text in eine andere Sprache übertragen.' } },
  { de: ['r-fuehren-einfuehren', 'einführen'], en: ['en:vf:bring-in', 'bring in'], ru: ['ru-r-vod-vvodit', 'ввод+ить'],
    note: { ru: 'Ein-, in и в- — «внутрь»: ввести новые правила.', en: 'Ein-, in and в- all mean “into”: introducing new rules.', de: 'Ein-, in und в- bedeuten „hinein“: neue Regeln einführen.' } },
  { en: ['en:vf:pick-up', 'pick up'], ru: ['ru-r-br-zabirat', 'забир+ать'],
    note: { ru: 'В значении «забрать кого-то»: pick up the kids / забрать детей.', en: 'In the sense of collecting someone: pick up the kids / забрать детей.', de: 'Im Sinne von abholen: pick up the kids / забрать детей.' } },
  { en: ['en:vf:pick-out', 'pick out'], ru: ['ru-r-br-vybirat', 'выбир+ать'],
    note: { ru: 'Out и вы- — «наружу»: выбрать = взять из множества.', en: 'Out and вы- both mean “out”: to take one out of many.', de: 'Out und вы- bedeuten „heraus“: eines aus vielen heraussuchen.' } },
  { en: ['en:find-out:phr:main', 'find out'], ru: ['ru-r-zna-uznavat', 'узнав+ать'] },
  { de: ['r-schreiben-aufschreiben', 'aufschreiben'], ru: ['ru-r-pis-zapisyvat', 'зап+исывать'] },
  { de: ['r-schreiben-unterschreiben', 'unterschreiben'], ru: ['ru-r-pis-podpisyvat', 'подп+исывать'],
    note: { ru: 'Точная калька: unter + schreiben = под + писать.', en: 'An exact calque: unter + schreiben = под + писать (“write under”).', de: 'Eine genaue Lehnübersetzung: unter + schreiben = под + писать.' } },
  { de: ['r-schreiben-beschreiben', 'beschreiben'], ru: ['ru-r-pis-opisyvat', 'оп+исывать'] },
  { de: ['r-schreiben-umschreiben', 'umschreiben'], ru: ['ru-r-pis-perepisyvat', 'переп+исывать'] },
  { de: ['r-schreiben-zuschreiben', 'zuschreiben'], ru: ['ru-r-pis-pripisyvat', 'прип+исывать'] }
]);
