/* RUSSIAN · Expressions categories (Idioms, Everyday Phrases). Sections and category names: GT.EXP_SECTIONS
 * in js/core.js. Slang cards (data/ru/slang.js) carry their category as topic. */
(function () {
  'use strict';
  function ids(prefix, list) { return list.map(function (s) { return prefix + s; }); }
  var I = 'ru-ex-idiom-', E = 'ru-ex-ev-';
  GT.classifyExpressions({
    'idioms-people': ids(I, ['tarelka', 'dve-kapli', 'sedmoe-nebo', 's-gusya-voda', 'derzhat-kulaki', 'ni-pukha', 'ni-ryba']),
    'idioms-talk': ids(I, ['lapsha', 'vodit-za-nos', 'kitayskaya-gramota', 'popast-v-tochku', 'pyat-kopeek', 'svoimi-imenami', 'chitat-mezhdu-strok', 'zarubit']),
    'idioms-work': ids(I, ['bit-baklushi', 'ruki-ne-dokhodyat', 'tyanut-kota', 'bez-truda', 'belka-v-kolese', 'zasuchiv-rukava', 'izobretat-velosiped', 'ubits-dvuh-zaytsev']),
    'idioms-situations': ids(I, ['sest-v-luzhu', 'popast-vprosak', 'sobaka-zaryta', 'za-derevyami-les', 'podlivat-masla', 'delo-v-shlyape', 'kot-naplakal']),
    'idioms-decisions': ids(I, ['rak-svistnet', 'vilami', 'deshevo-serdito', 'kot-v-meshke', 'igrat-s-ognyom', 'mukha-slon']),

    'everyday-respond': ids(E, ['ser-ezno', 'ponyatno', 'vot-imenno', 'tochno', 'bez-ponyatiya', 'ponyatya-ne-imeyu', 'nichego-sebe', 'da-ladno', 'tak-sebe']),
    'everyday-opinion': ids(E, ['kak-skazhesh', 'vsyo-ravno', 'pochemu-by-i-net', 'ni-za-chto', 'kak-by-to-ni-bylo', 'samo-soboy']),
    'everyday-arrange': ids(E, ['posmotrim', 'dogovorilis', 'bez-problem', 'poka', 'davno-ne-videlis']),
    'everyday-comfort': ids(E, ['nichego-strashnogo', 'vsyo-normalno', 'ne-volnuysya', 'ne-perezhivay', 'poka-vsyo-horosho', 'bez-obid', 'kamen-s-dushi']),
    'everyday-social': ids(E, ['ne-za-chto', 'udachi', 'pozdravlyayu', 'kak-zhal', 'priyatno-provesti', 'bud-zdorov', 'pozhaluysta-reply'])
  }, {
    slang: {
      desc: 'Russian youth and street slang: братан, жиза, кринж, бабки — how friends really talk.',
      scenario: {
        en: 'a Friday evening in Moscow: we hang out in a courtyard with friends and chat in youth slang. You are a local guy who says “братан”, “жиза”, “капец”, but explains when I don’t get it.',
        de: 'ein Freitagabend in Moskau: wir hängen mit Freunden im Hof ab und reden in Jugendsprache. Du bist ein Typ von hier, der „братан“, „жиза“, „капец“ sagt, aber erklärt, wenn ich etwas nicht verstehe.'
      }
    }
  });
})();

/* === Content expansion 2026-11-27 === */
(function () {
  'use strict';
  function ids(prefix, list) { return list.map(function (s) { return prefix + s; }); }
  var I = 'ru-ex-idiom-x27-', E = 'ru-ex-ev-x27-';
  GT.classifyExpressions({
    'idioms-people': ids(I, ['dusha-v-dushu', 'ne-razley-voda', 'vyyti-iz-sebya', 'vstat-ne-s-toy-nogi', 'dusha-naraspashku', 'soyti-s-uma', 'ne-v-duhe', 'obvesti-vokrug-paltsa', 'priyatno-po-dushe']),
    'idioms-talk': ids(I, ['na-chistotu', 'vertitsya-na-yazyke', 'slovo-za-slovo', 'govorit-na-raznyh-yazykah', 'pereyti-k-delu', 's-poluslova', 'ne-lezet-za-slovom', 'derzhat-yazyk-za-zubami', 'sarafannoe-radio']),
    'idioms-work': ids(I, ['sdvinut-s-mertvoy', 'ruka-ob-ruku', 'shag-za-shagom', 'na-polnuyu-katushku', 'ne-pokladaya-ruk', 'peregibat-palku', 'delat-na-sovest', 'master-na-vse-ruki', 'sidet-slozha-ruki']),
    'idioms-situations': ids(I, ['net-huda-bez-dobra', 'na-voloske', 'kak-grom-sredi', 'chuvstvovat-kak-ryba', 'brodit-v-potemkah', 'vyshel-suhim', 'kaplya-v-more', 'ni-sveta-ni-zari', 'kak-na-igolkah']),
    'idioms-decisions': ids(I, ['na-svoy-strah', 'sem-raz-otmer', 'zakryt-glaza', 'vzyat-byka-za-roga', 'idti-na-ustupki', 'podstrakhovatsya', 'vzvesit-vse-za', 'splyasat-ot-pechki', 'rubit-s-plecha']),

    'everyday-respond': ids(E, ['i-ne-govori', 'trudno-poverit', 'ya-tak-i-dumal', 'podozhdi-sekundu', 'ne-mozhet-byt', 'kak-raz-vovremya', 'kstati-govorya', 'slushayu-tebya']),
    'everyday-opinion': ids(E, ['na-moy-vzglyad', 'polnostyu-soglasen', 'somnevayus', 'vpolne-logichno', 'delo-vkusa', 'zavisit-ot-situatsii', 'chestno-govorya', 'ni-v-koem-sluchae']),
    'everyday-arrange': ids(E, ['ya-uzhe-v-puti', 'derzhi-v-kurse', 'kogda-tebe-udobno', 'mne-eto-podhodit', 'ya-zaderzhivayus', 'day-znat', 'do-zavtra', 'ya-na-sekundu-vyshla']),
    'everyday-comfort': ids(E, ['ne-berite-v-golovu', 'vsyo-budet-horosho', 'ne-toropis', 'net-povoda-dlya', 'derzhis', 'byvaet-huzhe', 'povezet-v-sleduyushchiy', 'pustyak']),
    'everyday-social': ids(E, ['horoshih-vyhodnyh', 'priyatnogo-appetita', 'beregi-sebya', 'vyzdoravlivay', 'dobro-pozhalovat', 'spokoynoy-nochi', 'schastlivogo-puti', 'spasibo-bolshoe'])
  });
})();
