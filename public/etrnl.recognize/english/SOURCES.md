# English content evidence and audit status

Audit date: 2026-11-23. Status: source/editorial pass; family completeness and independent language review remain open.

The first navigation/content expansion, `expressions-professional.js`, added 66 editorial records. The balanced expansion in `content-expansion-01.js` and `families-grammar-03.js` adds another 128: 20 everyday words, 50 professional items, 30 expressions and 28 senses in five new families. Current totals are 741 records and 372 unrated entries. Dictionary links for these 194 expansion records are lookup references, not observed CEFR evidence. B1/B2 study targets remain separate. The source-audited baseline below remains 547 records; examples and variations are original, with no literary quotations.

The six new grammar lessons use original explanations and exercises. Reference excerpts/search-index text were consulted for [indirect questions (BBC)](https://downloads.bbc.co.uk/worldservice/learningenglish/grammarchallenge/pdfs/gc_36_indirect_questions_explanation.pdf), [future time clauses (British Council)](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/verbs-time-clauses-if-clauses), [have something done (Cambridge)](https://dictionary.cambridge.org/grammar/british-grammar/have-something-), [so/such (Cambridge)](https://dictionary.cambridge.org/grammar/british-grammar/such-or-so), [-ing forms (British Council)](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/ing-forms), and [modifying comparatives (British Council)](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modifying-comparatives). Direct Cambridge fetches returned HTTP 403; this is not a full-page source audit or exact CEFR verification.

## What the evidence means

`data/evidence.js` preserves the original 63 sense-level observations. `reviewed-content.js` adds 216 matched sense ratings and corrects meanings, examples and spelling analyses. `additional-senses.js` adds 15 common missing meanings with their own evidence and stable IDs. `topics-vocabulary.js` adds 64 word/sense records with 50 observed sense labels; `topics-chunks.js` adds 38 original composed conversational patterns. Final totals: **344 sense-level labels, 25 primary word/POS labels, 178 unrated entries**, across 547 records. Of the sense labels, 131 are B2. No final loaded entry keeps an estimated CEFR label.

`referenced` requires an observed label and a scope: Cambridge `sense` or Oxford `lexeme-pos`. The latter does not certify every meaning of the word. Unrated entries have a null CEFR level and a separately displayed editorial `courseLevel`. This distinction prevents a study goal from becoming a fabricated dictionary classification.

`dictionary-lookups.js` records 324 matching headword lookups from the wider lookup pass. A lookup alone is not sense-level CEFR evidence. Explicit evidence notes select the intended meaning/POS; extra usage sources cover collocations and professional meanings. The 547 records received a reference/editorial pass; 46 composed expressions were checked through their constituents and grammar, rather than treated as separately rated dictionary units. Examples and translations are original editorial material, not independently certified language content.

All observed ratings are retained. In 149 records source levels differ, often alongside evidence scope. The UI preserves Cambridge's exact sense label when available, rather than choosing the lower Oxford word-list level. See [COVERAGE.md](COVERAGE.md) for the actual distribution and remaining curriculum gaps.

## Learner sources actually consulted

- [Cambridge: word formation](https://dictionary.cambridge.org/grammar/british-grammar/word-formation_2): distinction between prefixation, suffixation, conversion, compounding and other formation processes.
- [Cambridge: prefixes](https://dictionary.cambridge.org/grammar/british-grammar/prefixes): common prefix meanings and the need to verify spelling and lexical choices.
- [Cambridge: suffixes](https://dictionary.cambridge.org/grammar/british-grammar/suffixes): word-class patterns and spelling changes. [Adjective forms](https://dictionary.cambridge.org/us/grammar/british-grammar/-ing-and-ed-adjectives) and [verb formation](https://dictionary.cambridge.org/us/grammar/british-grammar/verbs-formation) were also consulted.
- [Cambridge: spelling](https://dictionary.cambridge.org/grammar/british-grammar/e): preservation/change of letters around affixes. A spelling tendency does not make an affix freely productive.
- [Cambridge: explain](https://dictionary.cambridge.org/grammar/british-grammar/explain), [inform](https://dictionary.cambridge.org/grammar/british-grammar/word-patterns-inform), [afford](https://dictionary.cambridge.org/grammar/british-grammar/word-patterns-afford): verb patterns and usage constraints.
- [Oxford: word lists](https://www.oxfordlearnersdictionaries.com/about/wordlists/index.html): scope of Oxford 3000/5000. The official [Oxford 3000 by CEFR](https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_3000_by_CEFR_level.pdf) and [Oxford 5000 by CEFR](https://www.oxfordlearnersdictionaries.com/external/pdf/wordlists/oxford-3000-5000/The_Oxford_5000_by_CEFR_level.pdf) were successfully downloaded in this pass, extracted with pypdf and compared by exact headword/POS. The first Oxford 5000 page was rendered and inspected. Only matching lexical facts and page references are retained in `oxford-ratings.js`; the full source PDFs are not bundled with the preview.
- [Oxford: evaluate](https://www.oxfordlearnersdictionaries.com/definition/english/evaluate): the page lists B2 topics. The preview does **not** treat a topic tag as an observed sense-level CEFR label; Cambridge's explicit C1 label is preserved for this sense.

Dictionary page content was available through indexed search results when direct requests returned HTTP 403. Evidence is recorded only for a sense and level actually present in the retrieved material. Example sentences and Russian explanations in the application are independently authored; dictionary examples/definitions have not been copied into a bulk corpus.

## Thematic section expansion

`topics.js` mirrors the topic structure observed in the German `js/topics.js` on 2026-11-23, adapting labels and scenarios to English. German content and progress are not imported. English-only topic keys reference canonical vocabulary IDs.

The 64 new lexical records use their selected Cambridge senses; examples and Russian explanations are original. Source selection preserves distinctions such as refundable rental deposit versus down payment, bank statement versus public statement, software release versus musical release, and a noun permit (C1) versus a verb permit (B1). An absent explicit level remains null. The two observed new C1 items remain labelled extensions, excluded from ordinary new practice.

Professional repository usage is supported by [GitHub: about repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories). Software deployment uses [Microsoft: first look at deployment](https://learn.microsoft.com/visualstudio/deployment/deploying-applications-services-and-components). Technical headword/POS labels are not inherited from unrelated everyday meanings.

The 38 new chunks are authored constructions, not a copied phrasebook and not independently CEFR-rated units. References cover their grammar, lexical parts and communicative functions: [British Council agreeing/disagreeing](https://learnenglish.britishcouncil.org/free-resources/speaking/b1/agreeing-disagreeing), [leaving a message](https://learnenglish.britishcouncil.org/comment/220523), [starting/finishing emails](https://learnenglish.britishcouncil.org/comment/218544), [Cambridge would](https://dictionary.cambridge.org/grammar/british-grammar/would), [look forward to](https://dictionary.cambridge.org/us/grammar/british-grammar/look-forward-to), [put through](https://dictionary.cambridge.org/dictionary/english/put-through), [give a hand](https://dictionary.cambridge.org/dictionary/english/give-a-hand) and [walk through](https://dictionary.cambridge.org/dictionary/english/walk-through). Per-record references are retained in the data. Topic study targets are not claimed as dictionary labels for every phrase.

## Oxford extraction provenance

`tests/extract-wordlists.py` extracts matches for the original catalogue; appended senses reuse a word/POS observation only when both match. To reproduce, download the two official PDFs to `tests/oxford-3000.pdf` and `tests/oxford-5000.pdf`, install pypdf if necessary and run the script. It writes `data/oxford-ratings.js`. The runtime never downloads a dictionary.

Downloaded PDF SHA-256 values, in the same order:

```text
Oxford 3000  441AA79B39A720AFBE78BF944F8DF49BCE9F61977C8AC2BE9FBCBC81CD94046F
Oxford 5000  41BB14648657BB5B6E0AC64FA6172B6C1F91B1960C5C282746470745DE560A20
```

These are word/POS list ratings, not definitions or a complete sense inventory.

## Grammar references

`grammar-expanded.js` records checked URLs, source bands and editorial teaching targets. Its 24 topics have original Russian explanations and two original questions each. Most pattern references are [British Council B1–B2 grammar](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2), with [present perfect](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect), [verb -ing patterns](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/verbs-followed-ing-form), [reported speech](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/reported-speech) and [quantifiers](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/quantifiers) in its general reference. Foundation articles and -ed/-ing adjectives use A1–A2 pages. [Manchester Academic Phrasebank](https://www.phrasebank.manchester.ac.uk/using-cautious-language/) supports cautious claims; no exact CEFR level is attributed to Phrasebank.

Where direct retrieval failed, the indexed primary-source page or its comment permalink exposed the lesson text. A broad B1–B2 page band is never claimed as an exact level for every construction. Two questions per topic are initial practice, not a comprehensive grammar assessment.

## Corrections made from sense-level evidence

- [Connection](https://dictionary.cambridge.org/dictionary/english/connection): JOIN B1; RELATION B2. These have different canonical IDs and examples.
- [Action](https://dictionary.cambridge.org/dictionary/english/action): measures to solve a problem B2; story/events B1.
- [Active](https://dictionary.cambridge.org/dictionary/english/active): active participation/role B2, distinct from the B1 busy sense.
- [Interactive](https://dictionary.cambridge.org/dictionary/english/interactive): B2 for a user-interactive system/exhibit; interpersonal teaching-method usage is not silently treated as the same sense.
- [Perform](https://dictionary.cambridge.org/dictionary/english/perform): doing a task B2; entertaining on stage B1.
- [Security](https://dictionary.cambridge.org/dictionary/english/security): protection B1; certainty/confidence senses have different levels and were not inherited by the IT sense.
- [Activity](https://dictionary.cambridge.org/dictionary/english/activity): the selected leisure activity sense is A2, rather than automatically inheriting a level from active or act.
- [Responsibility](https://dictionary.cambridge.org/dictionary/english/responsibility): duty B2; the adjective responsible for a duty is B1.
- [Comfort](https://dictionary.cambridge.org/dictionary/english/comfort): physical comfort B1; the verb meaning to console is explicitly C2 in Cambridge. This verb is retained only as a labelled contrast and excluded from ordinary new practice.
- [Evaluate](https://dictionary.cambridge.org/dictionary/english/evaluate), [invaluable](https://dictionary.cambridge.org/dictionary/english/invaluable), [apply: USE](https://dictionary.cambridge.org/dictionary/english/apply) and [relate to](https://dictionary.cambridge.org/dictionary/english/relate-to) retain observed C1 labels. No forced B2 conversion was made to fit the target curriculum.

## Historical reference sources

Historical notes are intentionally short. They state only the documented Latin/Greek connection, without reconstructed stories about how speakers must have thought.

- `spect`: [American Heritage: spectator](https://www.ahdictionary.com/word/search.html?q=spectator) gives the Latin spectare connection.
- `struct`: [Etymonline: structure](https://www.etymonline.com/word/structure) gives structura/structus/struere.
- `dict`: [Etymonline: dictate](https://www.etymonline.com/word/dictate) documents dictatus/dictare and the relationship to dicere. [Reading Rockets: root words](https://www.readingrockets.org/topics/spelling-and-word-study/articles/root-words-suffixes-and-prefixes) and the [ERIC-hosted root reference, Appendix G](https://files.eric.ed.gov/fulltext/ED585172.pdf) also support the Latin meaning and classroom examples.
- `port`: [Etymonline: portable](https://www.etymonline.com/word/portable) documents portare. Network ports are not grouped with carrying merely because their spelling matches.
- `scrib/script`: [Etymonline: script](https://www.etymonline.com/word/script) documents scriptum/scribere.
- `cred`: [Etymonline: credible](https://www.etymonline.com/word/credible) documents credibilis/credere.
- `graph`: [Etymonline: -graph](https://www.etymonline.com/word/-graph) documents the Greek writing/drawing connection.
- `phon`: [ERIC-hosted Appendix G](https://files.eric.ed.gov/fulltext/ED585172.pdf) and [Reading Rockets](https://www.readingrockets.org/topics/spelling-and-word-study/articles/root-words-suffixes-and-prefixes) support the Greek sound connection and examples.
- `log/-logy`: [Etymonline: -logy](https://www.etymonline.com/word/-logy) and [Australian National University: word formation](https://history.cass.anu.edu.au/centres/andc/word-formation-exercises) support the classical combining form. English log meaning an event journal is not asserted to descend from logos.

Modern family-map lines are teaching relationships, not historical ancestry. Parts shown in the morphology panel are teaching analyses of modern forms; lexicalised stem changes are labelled rather than presented as universally productive rules. No learning mnemonic is presented as etymological evidence.

## Remaining work before calling the initial milestone complete

1. Recheck family completeness, frequency and register against wider learner evidence. Fifteen added senses address observed omissions; they do not prove every selected family is exhaustive.
2. Seek further explicit evidence for 178 unrated entries where available. Preserve null levels if no appropriate label exists; never manufacture a label to satisfy a count.
3. Independently review original examples, Russian translations and morphological interpretation. Spelling reconstruction is now mechanically checked; it does not establish historical derivation or productivity.
4. Expand per-affix evidence for individual exceptions and productivity limits. A general table does not prove every usage note. Classical examples link out unless they have canonical entries.
5. Broaden grammar exercises and curriculum sequencing; do not interpret 24 short topics as full B1–B2 mastery.
6. Follow the exact remaining software QA scope in [VALIDATION.md](VALIDATION.md), separately from language-content review.

Subsequent batches should add approximately 20–25 reviewed families with stable IDs and no artificial maximum. This pass substantially improves evidence, but does not declare the 40-family completeness milestone achieved.
