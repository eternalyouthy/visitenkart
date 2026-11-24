/* Curated list of elementary / obvious words and transparent cognates for the "Hide basics" toggle (German pack). */
(function () {
  'use strict';
  var p = GT._target || GT.packs.de;
  if (!p) return;
  var IDS = [
    // Words B1 (A1–A2 & obvious everyday basics)
    'b1-everyday-sofort', 'b1-everyday-obwohl', 'b1-everyday-trotzdem', 'b1-everyday-deshalb',
    'b1-everyday-ausserdem', 'b1-everyday-vorher', 'b1-m2-normalerweise', 'b1-m2-ploetzlich',
    'b1-people-familie', 'b1-people-eltern', 'b1-people-geschwister', 'b1-people-nachbar',
    'b1-people-freundschaft', 'b1-people-hochzeit', 'b1-people-geburtstag', 'b1-people-einladung',
    'b1-people-geschenk', 'b1-people-freuen', 'b1-people-freundlich', 'b1-people-kontakt',
    'b1-people-paar', 'b1-home-wohnung', 'b1-home-miete', 'b1-home-schluessel',
    'b1-home-balkon', 'b1-home-mieten', 'b1-home-keller', 'b1-home-heizung',
    'b1-home-reparatur', 'b1-home-renovieren', 'b1-home-aufraeumen', 'b1-m2-kuehlschrank',
    'b1-m2-waschmaschine', 'b1-food-hunger', 'b1-food-durst', 'b1-food-speisekarte',
    'b1-food-rechnung', 'b1-food-kasse', 'b1-food-angebot', 'b1-food-rabatt',
    'b1-food-bar', 'b1-food-bezahlen', 'b1-food-portion', 'b1-food-lebensmittel',
    'b1-food-schmecken', 'b1-food-probieren', 'b1-food-sparen', 'b1-food-satt',
    'b1-food-scharf', 'b1-authorities-formular', 'b1-authorities-ausweis', 'b1-authorities-termin',
    'b1-authorities-konto', 'b1-travel-bahnhof', 'b1-travel-gleis', 'b1-travel-verspaetung',
    'b1-travel-fahrkarte', 'b1-travel-fahrplan', 'b1-travel-haltestelle', 'b1-travel-gepaeck',
    'b1-travel-flughafen', 'b1-travel-abfahren', 'b1-travel-umsteigen', 'b1-travel-verpassen',
    'b1-travel-einsteigen', 'b1-travel-aussteigen', 'b1-m2-tankstelle', 'b1-m2-tageskarte',
    'b1-work-erfahrung', 'b1-work-vertrag', 'b1-work-arbeitsplatz', 'b1-work-gehalt',
    'b1-work-kollege', 'b1-work-arbeitslos', 'b1-work-beruf', 'b1-work-mitarbeiter',
    'b1-work-kunde', 'b1-work-lohn', 'b1-m2-arbeitszeit', 'b1-m2-teamarbeit',
    'b1-leisure-freizeit', 'b1-leisure-hobby', 'b1-leisure-konzert', 'b1-leisure-wandern',
    'b1-leisure-theater', 'b1-leisure-kino', 'b1-leisure-training', 'b1-leisure-mannschaft',
    'b1-m2-schauspieler', 'b1-m2-schwimmbad', 'b1-society-umwelt', 'b1-society-klima',
    'b1-society-energie', 'b1-society-muell', 'b1-society-nachricht', 'b1-society-zeitung',
    'b1-society-unterricht', 'b1-society-pruefung', 'b1-society-studium', 'b1-society-ausbildung',
    'b1-society-partei', 'b1-health-praxis', 'b1-health-rezept', 'b1-health-erkaeltung',
    'b1-health-notfall', 'b1-health-unfall', 'b1-health-tablette', 'b1-health-pille',
    'b1-health-therapie', 'b1-health-operation', 'b1-health-klinik', 'b1-health-patient',
    'b1-health-temperatur', 'b1-health-medizin', 'b1-health-krankheit', 'b1-health-grippe',
    'b1-health-husten', 'b1-health-infektion', 'b1-health-virus', 'b1-health-haut',
    'b1-health-knochen', 'b1-health-magen', 'b1-health-herz', 'b1-health-koerper',
    'b1-health-gesundheit', 'b1-health-diaet', 'b1-health-gewicht', 'b1-health-vitamin',
    'b1-health-stress', 'b1-health-droge', 'b1-health-geburt', 'b1-health-tod',
    'b1-health-fuehlen', 'b1-health-nervoes', 'b1-health-schwach', 'b1-health-fit',
    'b1-m2-fieber', 'b1-m2-kopfschmerzen', 'b1-m2-medikament',
    // Words B2 (transparent internationalisms)
    'b2-psyche-burnout', 'b2-medien-desinformation', 'b2-medien-verifizieren',
    'b2-wirtschaft-inflation', 'b2-gesellschaft-integration', 'b2-bildung-praktikum',
    'b2-bildung-stipendium', 'b2-wiss-studie', 'b2-wiss-ki', 'b2-wiss-ethisch',
    'b2-wiss-experiment', 'b2-wiss-hypothese', 'b2-ges-chronisch', 'b2-ges-reha',
    'b2-ges-blutdruck', 'b2-ges-physiotherapie', 'b2-kultur-publikum', 'b2-kultur-abo',
    'b2-kultur-roman', 'b2-kultur-regisseur', 'b2-m2-zensur', 'b2-reisen-handgepaeck',
    // Professional / IT (obvious basics & transparent English/international cognates)
    'it-sec-patch', 'it-sec-phishing', 'it-sec-firewall', 'it-sec-2fa', 'it-sec-alert',
    'it-sec-log', 'it-sec-protokollieren', 'it-sec-isolieren', 'it-sec-eskalieren',
    'it-sec-forensik', 'it-sec-kompromittiert', 'it-sec-trojaner', 'it-sec-botnetz',
    'it-sec-social-engineering', 'it-sec-passwort', 'it-sec-benutzerkonto', 'it-sec-identitaet',
    'it-sec-quarantaene', 'it-sec-virenscanner', 'it-sec-blockieren', 'it-sec-risiko',
    'it-sec-audit', 'it-sec-zertifizierung', 'it-sec-zertifikat', 'it-sec-signatur',
    'it-sec-segmentierung', 'it-sec-aktualisieren', 'it-sec-konfiguration', 'it-sec-pentest',
    'it-comm-ticket', 'it-comm-meeting', 'it-comm-fehler', 'pro-office-kapazitaet',
    'pro-office-prioritaet', 'pro-office-protokoll',
    'it-dev-deployen', 'it-dev-commit', 'it-dev-branch', 'it-dev-mergen',
    'it-dev-code-review', 'it-dev-datenbank', 'it-dev-refactoren',
    'it-infra-server', 'it-infra-netzwerk', 'it-infra-skalieren', 'it-infra-neustarten',
    'it-infra-cloud',
    'pro-m3-eskalation', 'pro-m3-codebasis', 'pro-m3-automatisierung', 'pro-m3-integritaet',
    'pro-m3-penetrationstest', 'pro-m3-fluktuation', 'pro-m3-work-life-balance', 'pro-m3-priorisieren',
    'pro-new-typografie', 'pro-new-farbpalette', 'pro-new-kontrast', 'pro-new-layout',
    'pro-new-vektorgrafik', 'pro-new-prototyp', 'pro-new-algorithmus', 'pro-new-halluzination',
    'pro-new-produktvision', 'pro-new-priorisierung', 'pro-new-folie', 'pro-new-trainieren',
    'pro-new-generieren', 'pro-new-validieren', 'pro-new-reproduzierbar',
    'pro-m4-konversionsrate', 'pro-m4-retrospektive', 'pro-m4-honorar', 'pro-m4-latenz',
    'pro-m4-anonymisieren', 'pro-m4-klassifizieren', 'pro-m4-reproduzieren', 'pro-m4-kompilieren'
  ];
  IDS.forEach(function (id) {
    if (p.byId[id]) p.byId[id].basic = true;
    else p.loadErrors.push('basics.js: unknown id ' + id);
  });
})();
