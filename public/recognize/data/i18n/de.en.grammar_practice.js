/* EN translations for the additional DE grammar lessons and drills. */
(function () {
  'use strict';
  function translate(id, fields, examples) {
    var page = GT._target.grammar[id];
    page.i18n = page.i18n || {};
    page.i18n.en = fields;
    examples.forEach(function (translation, i) { page.examples[i].en = translation; });
  }

  translate("zeit-seit-vor", {
    title: "How long and how long ago",
    summary: "Use seit for an ongoing situation and vor to date a past event.",
    explanation: "<p><b>Seit</b> gives the starting point or duration of an ongoing situation. German normally uses the present where English uses the present perfect. <em>Seit März wohne ich hier.</em></p><p><b>Vor</b> with a duration dates an event in the past. Both prepositions take the dative. Compare <em>seit einem Monat</em> with <em>vor einem Monat</em>.</p>"
  }, ["I've been working in the shop for a week.","I signed the contract a week ago."]);
  translate("ob-oder-wann", {
    title: "Embedded questions with ob and wann",
    summary: "Decide whether the answer should be yes or no, or a time.",
    explanation: "<p>Use <b>ob</b> for an embedded yes/no question. Keep <b>wann</b> when the missing information is a time. In both clauses the finite verb comes last.</p><p><em>Kommt sie? → Weißt du, ob sie kommt?</em> The question <em>Wann kommt sie?</em> already has a question word.</p>"
  }, ["I don't yet know whether the shop will open today.","Do you know what time the shop opens? At nine."]);
  translate("vorvergangenheit", {
    title: "Earlier past events · Plusquamperfekt",
    summary: "Put two past events in order.",
    explanation: "<p>The past perfect looks back from a past reference point. Mark the earlier event with <b>hatte/war + past participle</b>. Use the same auxiliary as in the perfect.</p><p><em>Als wir ankamen, hatte der Film schon begonnen.</em> The film started first. In a subordinate clause the auxiliary follows the participle.</p>"
  }, ["When I called, the technician had already left.","After Lea had saved the file, she closed the application."]);

  GT.localize('en', {
    "de-g-wortstellung-practice": { explain: "After Morgen the finite verb comes second. The prefix an belongs at the end of the clause." },
    "de-g-perfekt-practice": { explain: "The participle of separable abfahren puts ge between ab and fahren." },
    "de-g-nebensaetze-practice": { explain: "After bis the finite verb comes last and keeps its prefix." },
    "de-g-relativsaetze-practice": { explain: "Mit takes the dative. The antecedent Kollegin is feminine singular, giving der." },
    "de-g-konnektoren-practice": { explain: "Entweder … oder links two alternatives." },
    "de-g-konjunktiv2-practice": { explain: "An unreal past condition uses the participle and wäre because losgehen takes sein." },
    "de-g-passiv-practice": { explain: "The perfect passive uses the special participle worden." },
    "de-g-adjektive-practice": { explain: "Ein has no ending in the neuter accusative, so the adjective carries -es." },
    "de-g-kasus-practice": { explain: "The wall is the destination of the calendar. An takes the accusative here." },
    "de-g-verben_praep-practice": { explain: "For a thing, the auf in warten auf gives the question word worauf." },
    "de-g-infinitiv-practice": { explain: "With separable ausmachen, zu goes between aus and machen." },
    "de-g-zeit-seit-vor-dauer": { explain: "I still live here. Seit measures the time up to now." },
    "de-g-zeit-seit-vor-punkt": { explain: "Moving here was a single event three years ago." },
    "de-g-zeit-seit-vor-monat": { explain: "Monat is masculine. Seit takes the dative." },
    "de-g-zeit-seit-vor-woche": { explain: "Woche is feminine, giving dative einer Woche." },
    "de-g-ob-oder-wann-ja": { explain: "The reply confirms that she is coming. The question takes ob." },
    "de-g-ob-oder-wann-zeit": { explain: "The reply gives the start time, so use wann." },
    "de-g-ob-oder-wann-verb": { explain: "In an embedded question the separable prefix stays attached." },
    "de-g-ob-oder-wann-ist": { explain: "The singular subject Zimmer takes ist at the end of the clause." },
    "de-g-vorvergangenheit-sein": { explain: "Abfahren takes sein in the perfect and war in the past perfect." },
    "de-g-vorvergangenheit-haben": { explain: "Kochen takes haben. The subject wir gives hatten." },
    "de-g-vorvergangenheit-ende": { explain: "Bezahlen takes haben. Hatte follows bezahlt in the subordinate clause." },
    "de-g-vorvergangenheit-part": { explain: "Sunrise preceded my waking up. The participle of aufgehen is aufgegangen." }
  });
})();
