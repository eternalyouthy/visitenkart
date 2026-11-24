/* Curated list of elementary / obvious words and transparent IT loanwords for the "Hide basics" toggle (Russian pack).
 * A1–A2 entries are also hidden automatically by isBasicItem(). */
(function () {
  'use strict';
  var p = GT._target || GT.packs.ru;
  if (!p) return;
  var IDS = [
    // Words (obvious B1 basics & transparent internationalisms)
    'ru-w-vsyo-ravno', 'ru-w-hotya', 'ru-w-remont', 'ru-w-schyot', 'ru-w-skidka',
    'ru-w-recept', 'ru-w-opyt', 'ru-w-rezyume', 'ru-w-marshrut', 'ru-w-otnosheniya',
    'ru-w-grafik', 'ru-w-feyk', 'ru-w-miting', 'ru-w-poliklinika', 'ru-w-polis',
    'ru-w-premiya', 'ru-w-registraciya', 'ru-w-kommentariy', 'ru-w-volonter',
    'ru-w-reputaciya', 'ru-w-cenzura', 'ru-w2-viza', 'ru-w3-allergiya', 'ru-w3-angina',
    'ru-w3-punktuallnost', 'ru-w3-algoritm', 'ru-w3-redaktsiya', 'ru-w3-reportazh',
    'ru-w3-petitsiya', 'ru-w3-migratsiya', 'ru-w3-kompromiss', 'ru-w3-diagnoz',
    'ru-w3-profilaktika', 'ru-w3-kompensatsiya', 'ru-w-b2e-bronirovat', 'ru-w-b2e-reabilitatsiya',
    'ru-w-b2e-hronichesky', 'ru-w-b2e-ipoteka', 'ru-w2-rieltor', 'ru-w2-travma',
    // Professional / IT (obvious basics & transparent English/international loanwords)
    'ru-w2-dedlayn', 'ru-w2-protokol', 'ru-w2-ficha', 'ru-w2-baza-dannyh',
    'ru-w2-kod-revyu', 'ru-w2-virtualka', 'ru-w2-data-tsentr', 'ru-w2-monitoring',
    'ru-w2-2fa', 'ru-w2-log',
    'ru-pro-reliz', 'ru-pro-testirovat', 'ru-pro-server', 'ru-pro-set',
    'ru-pro-ataka', 'ru-pro-dostup', 'ru-pro-fishing', 'ru-pro-incident',
    'ru-pro2-bloker', 'ru-pro2-refaktoring', 'ru-pro2-testirovanie', 'ru-pro2-patch',
    'ru-pro2-audit', 'ru-pro2-gibridny-format',
    'ru-pro3-eskalatsiya', 'ru-pro3-konsensus', 'ru-pro3-avtomatizatsiya',
    'ru-pro3-klaster', 'ru-pro3-konfidentsialnost', 'ru-pro3-pentest',
    'ru-pro4-tipografika', 'ru-pro4-palitra', 'ru-pro4-kontrast', 'ru-pro4-maket',
    'ru-pro4-prototip', 'ru-pro4-metrika', 'ru-pro4-gallyutsinatsiya', 'ru-pro4-prognoz',
    'ru-pro4-generirovat', 'ru-pro4-auditoriya', 'ru-pro4-konversiya', 'ru-pro4-prioritet',
    'ru-pro4-iteratsiya', 'ru-pro4-tender', 'ru-pro4-slayd', 'ru-pro4-tezis',
    'ru-pro4-diagramma', 'ru-pro4-reglament', 'ru-pro4-illyustrirovat', 'ru-pro4-intuitivny',
    'ru-pro5-interfeys', 'ru-pro5-shrift', 'ru-pro5-ierarhiya', 'ru-pro5-komponent',
    'ru-pro5-adaptivnost', 'ru-pro5-navigatsiya', 'ru-pro5-dataset', 'ru-pro5-dashbord',
    'ru-pro5-analitika', 'ru-pro5-klassifitsirovat', 'ru-pro5-beklog', 'ru-pro5-retrospektiva',
    'ru-pro5-gipoteza', 'ru-pro5-funktsional', 'ru-pro5-brif', 'ru-pro5-struktura',
    'ru-pro5-repetitsiya', 'ru-pro5-argument', 'ru-pro5-delegirovat', 'ru-pro5-konfiguratsiya',
    'ru-pro5-dokumentatsiya', 'ru-pro5-kompilirovat', 'ru-pro5-kesh', 'ru-pro5-trafik',
    'ru-pro5-blokirovat', 'ru-pro5-fiksirovanny'
  ];
  IDS.forEach(function (id) {
    if (p.byId[id]) p.byId[id].basic = true;
    else p.loadErrors.push('data/ru/basics.js: unknown id ' + id);
  });
})();
