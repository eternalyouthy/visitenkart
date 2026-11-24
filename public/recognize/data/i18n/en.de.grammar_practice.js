/* DE translations for the additional EN grammar lessons and drills. */
(function () {
  'use strict';
  function translate(id, fields, examples) {
    var page = GT._target.grammar[id];
    page.i18n = page.i18n || {};
    page.i18n.de = fields;
    examples.forEach(function (translation, i) { page.examples[i].de = translation; });
  }

  translate("frequency-position", {
    title: "Wo stehen usually und never?",
    summary: "Vergleiche die Stellung des Adverbs bei Vollverb, be und Hilfsverb.",
    explanation: "<p>In einer neutralen Aussage stehen <b>usually, often, never</b> gewöhnlich vor dem Vollverb, aber hinter einer finiten Form von <b>be</b>. Bei einem Hilfs- oder Modalverb folgt das Adverb häufig direkt darauf.</p><p><em>I usually walk. I am usually early. I have never driven there.</em> Das Wort <em>never</em> drückt die Verneinung bereits aus.</p>"
  }, ["Die Nachbarn teilen sich oft ein Taxi.","Der letzte Zug ist meistens leer."]);
  translate("duration-for-since", {
    title: "Dauer mit for und since",
    summary: "Unterscheide die Länge eines Zeitraums von seinem Anfang.",
    explanation: "<p><b>For</b> gibt eine Zeitdauer an, <b>since</b> den Beginn oder einen Nebensatz zum Beginn. Dauert der Zustand bis heute an, steht normalerweise das Present Perfect.</p><p><em>I have known Mira since we were children.</em> Das Zustandsverb <em>know</em> steht hier in der einfachen Form. Für einen abgeschlossenen Zeitraum eignet sich das Simple Past mit <em>for</em>.</p>"
  }, ["Wir wohnen seit September eine Etage höher.","Bevor wir hierherzogen, wohnten wir ein Jahr lang eine Etage höher."]);
  translate("past-habitual", {
    title: "Frühere Gewohnheiten mit would",
    summary: "Unterscheide wiederkehrende Handlungen von länger andauernden Zuständen.",
    explanation: "<p>Ist der frühere Zeitraum bereits klar, kann <b>would + Infinitiv</b> wiederholte Handlungen ausdrücken. <em>When we were children, we would race home after school.</em></p><p><b>Used to</b> eignet sich für frühere Gewohnheiten und inzwischen veränderte Zustände. Für früheren Hausbesitz passt <em>used to own</em>. Ein einzelnes datiertes Ereignis steht im Simple Past.</p>"
  }, ["In jenen Sommerferien las uns Opa jeden Abend vor.","Früher gehörte uns ein kleines Boot."]);

  GT.localize('de', {
    "en-g-perfect-practice": { explain: "Last Tuesday bezeichnet einen abgeschlossenen Zeitpunkt. Das regelmäßige Verb view erhält -ed." },
    "en-g-conditionals-practice": { explain: "Lived beschreibt eine gedachte Situation in der Gegenwart. Im Hauptsatz folgt would mit Infinitiv." },
    "en-g-passive-practice": { explain: "Nach were steht das Partizip. Bei take lautet es taken." },
    "en-g-modals-practice": { explain: "Der Eintritt ist frei. Don’t have to hebt die Pflicht auf." },
    "en-g-patterns-practice": { explain: "Auf mind folgt die -ing-Form." },
    "en-g-relative-practice": { explain: "Im Nebensatz fehlt eine Ortsangabe. Where entspricht hier at which." },
    "en-g-deduction-practice": { explain: "Might have mit Partizip drückt eine Vermutung über Vergangenes aus." },
    "en-g-hedging-practice": { explain: "May kennzeichnet den Grund als Vermutung." },
    "en-g-perfect-continuous-practice": { explain: "Have been painting verbindet die jüngste Tätigkeit mit ihren sichtbaren Spuren." },
    "en-g-past-perfect-practice": { explain: "Nach had steht das Partizip. Die Türen waren bei unserer Ankunft bereits zu." },
    "en-g-future-perfect-practice": { explain: "Will have packed beschreibt das bis zum künftigen Zeitpunkt erreichte Ergebnis." },
    "en-g-third-conditional-practice": { explain: "Für die ausgebliebene Folge in der Vergangenheit steht would have mit Partizip." },
    "en-g-wish-practice": { explain: "Bei Bedauern über Vergangenes steht nach wish das Past Perfect." },
    "en-g-reported-statements-practice": { explain: "Beim Rückbezug wird aus am die Form was und aus I das Pronomen she." },
    "en-g-reported-questions-practice": { explain: "Nach asked where steht das Subjekt vor dem Verb." },
    "en-g-relative-nondefining-practice": { explain: "Im ergänzenden Relativsatz zwischen Kommas steht für eine Sache which." },
    "en-g-deduction-present-practice": { explain: "Die Information über den Flug schließt Nina aus. Dafür steht can’t." },
    "en-g-past-ability-practice": { explain: "Managed to mit Infinitiv bezeichnet hier einen konkreten Erfolg." },
    "en-g-used-to-practice": { explain: "In be used to ist to eine Präposition. Darauf folgt hier die -ing-Form." },
    "en-g-articles-practice": { explain: "Der Hase wurde bereits erwähnt und ist eindeutig zuzuordnen." },
    "en-g-quantifiers-practice": { explain: "Flour ist ein Stoffname. Very little bedeutet „sehr wenig“." },
    "en-g-ed-ing-practice": { explain: "Die Anleitung löst die Verwirrung aus. Dafür steht die -ing-Form." },
    "en-g-contrast-practice": { explain: "The heavy rain ist eine Nominalgruppe. Davor passt despite." },
    "en-g-zero-conditional-practice": { explain: "Es geht um die reguläre Funktion des Geräts. In beiden Teilsätzen steht das Simple Present." },
    "en-g-polite-indirect-practice": { explain: "In der eingebetteten Frage steht the shop vor closes." },
    "en-g-future-time-clauses-practice": { explain: "Nach as soon as steht bei Zukunftsbezug das Simple Present." },
    "en-g-causative-have-practice": { explain: "Had mit Objekt und Partizip drückt aus, dass jemand anderes die Arbeit erledigt hat." },
    "en-g-so-such-practice": { explain: "In such a long queue bezieht sich such auf die ganze Nominalgruppe." },
    "en-g-preposition-ing-practice": { explain: "Nach der Präposition for steht das Verb in der -ing-Form." },
    "en-g-modified-comparatives-practice": { explain: "Much verstärkt den Komparativ shorter." },
    "en-g-frequency-position-walk": { explain: "In dieser neutralen Aussage steht often vor cycle." },
    "en-g-frequency-position-be": { explain: "Bei be steht usually gewöhnlich nach is." },
    "en-g-frequency-position-never": { explain: "Es ist der erste Flug. Never steht zwischen have und flown." },
    "en-g-frequency-position-modal": { explain: "Always kann zwischen can und dem Vollverb leave stehen." },
    "en-g-duration-for-since-start": { explain: "2019 ist ein Anfangszeitpunkt." },
    "en-g-duration-for-since-span": { explain: "Eine halbe Stunde ist eine Dauer." },
    "en-g-duration-for-since-clause": { explain: "Der Nebensatz nennt das Ereignis, mit dem der Zeitraum begann." },
    "en-g-duration-for-since-state": { explain: "Know bezeichnet einen Zustand. Nach have steht das Partizip known." },
    "en-g-past-habitual-action": { explain: "Nach would steht der Infinitiv ohne to." },
    "en-g-past-habitual-state": { explain: "Der Besitz war ein Zustand. Used to own bezeichnet die frühere Situation." },
    "en-g-past-habitual-single": { explain: "Es ist ein einmaliges, datiertes Ereignis. Dafür steht das Simple Past." },
    "en-g-past-habitual-did": { explain: "In der Frage trägt did die Vergangenheitsmarkierung. Üblich ist die Schreibweise use to." }
  });
})();
