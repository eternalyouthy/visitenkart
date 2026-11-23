# ETRNL / English — independent module contract

Status: standalone preview, designed before content authoring. No German or shared file is an integration point yet.

## Boundaries

- Everything lives under `english/`. The entry point is `english/index.html`.
- Classic scripts in a fixed order; no fetch, ES modules, build step, CDN dependency, or service-worker registration. Designed for `file://` and static HTTP; execution checks are recorded separately in VALIDATION.md.
- Own namespace `ETEnglish`, own storage key `etrnl.english.progress.v1`. Never read or write `GT`, `gt.*`, or German progress.
- Copy the established colour and type conventions into local CSS. Do not import German CSS or modify the parent manifest, shell, service worker, navigation or data loader.

## Canonical data

`entries` contains stable, sense-specific vocabulary IDs: `en:<headword>:<pos>:<sense>`. Family, category, classical-root and exercise records reference these IDs. Never renumber IDs or store independent vocabulary copies in categories.

Entry: `id, headword, pos, sense, ru, courseLevel, cefr{level,status,scope,source,ratings[],conflict}, audit, examples[{en,ru}], morphology{parts,parentId,relation,note}, transparency, usage, categories[], sources[]`.

- `scope: sense` requires an observed label matching the selected meaning and POS. `lexeme-pos` is a separately displayed Oxford word/POS label, not exact sense evidence. An unrated entry has `level: null, status: unrated`; `courseLevel` is a separate teaching target. Input files may contain draft targets; the full load order applies evidence/review layers before UI and exercises run.
- `ratings[]` retains source levels with their scopes. Never choose the lowest rating to force a sense into B2. `audit` separates meaning/construction checks from original-example and morphology editorial review.
- Observed C1/C2 labels are retained on a few explicit contrasts/extensions and excluded from ordinary new-practice pools. They are not counted toward the A2–B2 distribution or relabelled B2 to satisfy a target.
- A1 foundations keep their actual level, and are outside the A2–B2 distribution. Do not relabel them A2 to manufacture the target ratio.
- Examples are independently authored, not copied from dictionaries. `[[target]]` supplies the exact accepted surface form for cloze; a lemma is not automatically an acceptable inflected answer.
- `parentId` is the teaching relationship; `relation` distinguishes derivation, prefixation, conversion, lexical family and spelling alternation. A family graph is not a historical genealogy.
- Morphological `parts` describe an analysis, not syllables. Lexicalised or borrowed formations explicitly note that segmentation does not license free word creation.
- `transparency`: `transparent | figurative | opaque`. Mnemonics, if introduced, must be labelled separately and never substitute for etymology.

Family: `id,label,base{kind,entryId,ru},ru,note,related[],entryIds[],coverage`. `kind` is `modern-base` or `historical-root`. Cross-family links express learning connections, not necessarily shared ancestry. Selected families include useful nouns, verbs, adjectives and adverbs without a fixed word-count limit.

Affix: `id,label,kind,ru,pattern,posChange,spelling,exceptions,limitations,productivity,examples[],exercise,sources[]`. Negative `in-/im-/il-/ir-` is one allomorphic set, not four unrelated productive prefixes.

Classical root: `id,label,origin,ru,history,limitations,entryIds[],examples[],sources[]`. This collection is separate from families and productive affixes. Do not infer that `log`, `-logy`, and `logo` are interchangeable modern morphemes.

## Content workflow

Current catalogue: 45 families, including the initial two files of 20 and a third batch of five; evidence/review layers and 15 appended common senses; 19 prefixes, 19 suffixes and a classical-root reference. Family completeness and independent linguistic validation remain separate milestones. The current balanced expansion adds a smaller five-family batch alongside topical vocabulary and six grammar lessons. Architecture has no family-count maximum; 200 is a capacity test, not a content claim.

Target teaching allocation: A2 10%, B1 45%, B2 45%. This does not license changing dictionary levels. The UI reports actual levels, evidence scopes and unrated entries. Default maps use core flags and in-scope levels, preserve the base and can expand to every recorded sense.

Validation has separate layers: structure and referential integrity; linguistic editorial checks; dictionary evidence and sense-level CEFR verification. Automated checks cannot certify language correctness. `SOURCES.md` records what was actually checked, unresolved evidence, and the next audit requirements.

## Learning and progress

Topic navigation additionally supports `#/<section>/<topic>/learn`, `/browse` and `/item/<encoded-entry-id>`. The original topic URL now opens the compact overview; Browse retains search and level filtering. Existing Practice and Review URLs still use the same topic keys.

The optional vocabulary-card flag `known: true` excludes that direction from due queues without altering its past grades, repetitions or scheduling fields. `markKnown()` sets it on both directions and does not increment the rating count. Explicit enrolment clears the flag for the requested direction and makes it due; grading replaces it with a normal scheduled card. Version-one imports preserve this optional flag and accept older exports without it. `later` is an optional version-one map of canonical entry IDs to deferral timestamps; its values are validated atomically. Missing maps default to empty. Deferred words remain new, are not enrolled and sort after other unseen words. Lessons include only in-scope levels, while Browse retains all entries.

Exercises: contextual meaning (recognition), Russian meaning to English, base to derivative, word-formation cloze (production), and affix meaning (recognition). Every answer has a Russian explanation. Family-specific and catalogue-wide sessions share the same canonical items.

Cards are `<entry-or-exercise-id>#rec` and `#prod`. Grades and due dates are independent. Preview scheduling is a small documented interval scheduler, not FSRS. The future multilingual host should provide a scheduler adapter and preserve both directions. Answers do not update a card until graded; skipped or abandoned questions do not count as success.

Grammar has recognition choices and a separate typed `production{question,answer,explain,acceptedAnswers?}`. The topic level is a teaching target; the reference's band is separate. New `#prod` keys preserve existing grammar IDs and version-1 backup shapes. Older recognition-only backups remain importable. Affixes accept only `#rec`. Due mixed sessions include both grammar directions and affix recognition; vocabulary level/family filters restrict sessions to vocabulary.

Storage failure falls back to memory with a visible notice. Export/import is versioned, language-scoped and validated before mutation. UI only renders escaped text. No imported HTML or executable content.

## Integration after German architecture stabilises

1. Agree a language-neutral registry API; map canonical English entries without changing IDs.
2. Add an English navigation entry in the host only after the German agent finishes its shell changes.
3. Inject storage, speech and scheduler adapters; maintain `rec` and `prod` independently. Do not import English backups into German storage.
4. Register English assets in the host's offline manifest and bump the host cache version in a separate integration change. The standalone preview does not claim PWA offline caching.
5. Reconcile theme tokens and category routing. Keep Russian teaching content and English controls.
6. Verify both static HTTP and direct-file operation, plus import/export and direction-specific review, before merging.

## Thematic sections

Navigation update: `data/expressions-professional.js` appends canonical vocabulary and the `professional`, `idioms` and `everyday-phrases` sections. It leaves every original entry, family, grammar record, category and topic key intact. The legacy `#/it`, `#/it/<topic>` and `#/chunks` routes remain live. `navigationSections()` hides the legacy IT aggregator from the Practice selector to avoid duplicate topic choices, while `topicByKey()` continues to resolve old links. Professional topics reuse original entry IDs and add curated references; they do not copy cards or migrate storage.

New content has editorial B1/B2 study targets, unverified dictionary lookup links and original examples. No phrase-level CEFR or literary-source verification is claimed. Expression metadata (`expressionKind`, `why`, `variations[{en,ru}]`) is optional, so future batches can extend the dataset without changing learning code. WHY? expands on click or keyboard and exposes a contextual native tooltip on hover. Browser speech synthesis reads the entry or its example only when requested.

The original section contract below remains the compatibility baseline.

The navigation mirrors the German section structure: Words, IT & Security, Chunks, Grammar, Roots, Review and Stats, with English Practice retained. The default landing is Words. Existing roots/vocabulary/progress URLs remain valid; `#/stats` aliases `#/progress`.

`sections[{id,label,ru,topics[]}]` holds 18 Words topics, 4 IT topics and 13 Chunks functions. A topic has `id,key,label,description,scenario,group,studyTarget,entryIds[]`. Keys such as `words:health` and `chunks:it-bug` are English-only, with no German storage dependency. Section/topic counts derive from references to canonical records; no vocabulary copies or topic-specific review keys are created.

The data load order appends `topics-vocabulary.js`, `topics-chunks.js` and `topics.js` after the original evidence layers, followed by `expressions-professional.js`, `content-expansion-01.js` and `families-grammar-03.js`, before learning/app code. New lexical entries carry explicit source/evidence scope; composed chunks remain CEFR-unrated. Original 445 IDs are unchanged. The six original vocabulary categories and all ROOTS/grammar tools are preserved.

`makePool({topic,...})` intersects vocabulary topic/family/level/direction filters. Due topic sessions cannot leak affix or grammar questions. Affix/grammar modes ignore disabled vocabulary scopes. A topic enrolment adds the existing canonical recognition/production cards. Speaking prompts are assembled locally from the scenario and up to 12 in-scope records; copying does not send content to any external service. The read-only text field provides a manual-copy fallback when Clipboard API access fails.
