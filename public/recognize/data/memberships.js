/* Extra topic memberships for cards defined in files that load late (roots). Loaded last in the German pack,
 * so every id exists. One card, shared progress — no duplicate headwords. */
GT.addMember('r-setzen-umsetzen', 'it', 'dev');           // umsetzen — to implement
GT.addMember('r-halten-aufenthalt', 'words', 'b2_reisen'); // der Aufenthalt — stay
GT.addMember('pro-office-schnittstelle', 'it', 'dev');    // die Schnittstelle — API / interface
GT.addMember('b2-wiss-stichprobe', 'it', 'ai_data');      // die Stichprobe — statistical sample

// Batch 7 · Cross-topic memberships reusing existing German B1–B2 cards in new Professional tracks
GT.addMember('b1-m2-auslaenderbehoerde', 'it', 'bureau_offices');
GT.addMember('b2-m2-einbuergerung', 'it', 'bureau_offices');
GT.addMember('b2-recht-aufenthaltstitel', 'it', 'bureau_offices');
GT.addMember('pro-m4-zustaendigkeit', 'it', 'bureau_offices');

GT.addMember('b1-authorities-bescheid', 'it', 'bureau_docs');
GT.addMember('b2-recht-vollmacht', 'it', 'bureau_docs');
GT.addMember('b2-recht-beglaubigung', 'it', 'bureau_docs');
GT.addMember('b2-recht-einspruch', 'it', 'bureau_docs');
GT.addMember('it-sec-nachweis', 'it', 'bureau_docs');

GT.addMember('b2-m2-schadensersatz', 'it', 'legal_contracts');
GT.addMember('b2-wirtschaft-gewaehrleistung', 'it', 'legal_contracts');

GT.addMember('b2-recht-bussgeld', 'it', 'legal_criminal');

GT.addMember('b2-beruf-arbeitszeugnis', 'it', 'legal_labour');
GT.addMember('b2-beruf-betriebsrat', 'it', 'legal_labour');
GT.addMember('b2-beruf-kuendigungsfrist', 'it', 'legal_labour');
GT.addMember('pro-m4-kurzarbeit', 'it', 'legal_labour');
GT.addMember('pro-m3-befristung', 'it', 'legal_labour');
GT.addMember('pro-b5-abmahnung', 'it', 'legal_labour');

GT.addMember('it-sec-datenschutz', 'it', 'legal_corporate');
GT.addMember('b2-gesellschaft-interessenkonflikt', 'it', 'legal_corporate');

GT.addMember('b2-reisen-ueberbucht', 'it', 'svc_hotel');

GT.addMember('b1-m2-umtausch', 'it', 'svc_retail');
GT.addMember('b2-wirtschaft-rueckerstattung', 'it', 'svc_retail');

GT.addMember('pro-new-zielgruppe', 'it', 'fin_marketing');
GT.addMember('pro-m4-kundenbindung', 'it', 'fin_marketing');
GT.addMember('b2-medien-reichweite', 'it', 'fin_marketing');

GT.addMember('pro-m3-stellenbeschreibung', 'it', 'fin_hr');
GT.addMember('pro-m3-mitarbeiterbindung', 'it', 'fin_hr');
GT.addMember('pro-m3-fluktuation', 'it', 'fin_hr');
GT.addMember('pro-m4-stellenausschreibung', 'it', 'fin_hr');
GT.addMember('b2-beruf-gehaltsverhandlung', 'it', 'fin_hr');

GT.addMember('b2-ges-vorsorgeuntersuchung', 'it', 'med_clinical');

GT.addMember('it-sec-lieferkette', 'it', 'ops_logistics');

GT.addMember('pro-new-kostenvoranschlag', 'it', 'ops_trades');
