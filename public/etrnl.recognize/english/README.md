# ETRNL / ENGLISH

Independent vanilla-JavaScript preview aimed at A2–B2, with English controls, Russian teaching content and local dark styling. All task changes are under `english/`.

## Open

Open `index.html` directly, or run from the parent project:

```powershell
node english/tests/serve.cjs
```

Visit http://127.0.0.1:8766 and stop the server with Ctrl+C. It binds only to loopback. Classic local scripts require no build, fetch, CDN or shared German infrastructure. Static hosting can serve this directory independently; publication/integration has not been performed.

## Implemented

- 45 word families: 353 family senses, including 15 additional common senses added during review.
- 741 canonical words, senses and expressions. The original six vocabulary categories remain available in Vocabulary explorer.
- Hover/click dropdown navigation: Language (Words, Grammar, Roots), Professional (five contexts), Expressions (Chunks, Idioms, Everyday Phrases), plus separate Practice, Review and Stats tabs. Keyboard support includes Tab, Enter, Arrow Down and Escape. Mobile exposes the same menus while retaining the sidebar toggle.
- Professional reuses all four legacy IT topics and adds Work & Office, IT & Development, Infrastructure, Security and B2 Business English scopes, with 217 unique items across its five contexts.
- Expressions retains all 13 Chunks topics (66 items), plus 25 idioms and 22 everyday phrases, with Russian explanations, original examples, variations and expandable WHY? notes. Listen uses available English browser speech voices; voice availability depends on the browser/OS.
- Topic-specific sessions, add-a-topic review and copyable speaking scenarios. Topics reference the shared catalogue, so the same sense keeps one progress record.
- German-style topic workflow: contextual topic sidebar; New / Learning / Known / Due overview; Learn up to 10 new items; a compact Browse list; and a one-word lesson with pronunciation, WHY?, examples, notes, structure and available family links.
- Know it marks both directions as known without adding review grades. Learn it enrols both directions in Review. Later defers an unseen item to the end of future lesson queues. These choices survive reload and English backups; older version-one backups remain importable.
- Interactive maps, expandable core/extended views, Russian meanings, original examples, spelling-aware morphological analyses, usage notes and evidence links.
- 19 prefixes, 19 suffixes and 9 separately presented classical roots.
- 30 grammar topics: 30 recognition and 30 typed production questions.
- Contextual meaning, Russian to English, base to derivative, word-formation cloze and affix practice.
- Separate recognition/production progress, due review, validated JSON import/export and a storage-failure memory fallback.

## Evidence and limits

This is **a vocabulary/word-formation trainer with grammar practice, not a complete B2 course**. The source/editorial pass has 344 sense-level CEFR labels, 25 primary Oxford word/POS labels and 372 entries without an observed CEFR label. Of the sense-level labels, 131 are B2. Unrated entries retain a visibly separate study target; they are not counted as verified B2.

Cambridge sense labels and Oxford word/POS ratings have different scope. Both are preserved, including 149 records where their levels differ. Known C1/C2 extensions are excluded from ordinary new-practice sessions, but remain inspectable and reviewable after deliberate enrolment. Existing IDs and progress keys are unchanged.

Meanings and original examples received a reference/editorial pass. Forty-six expressions were reviewed through their grammar and constituents, rather than claimed as independently CEFR-rated dictionary units. Family completeness, affix exceptions/productivity and an independent language review remain open. See [COVERAGE.md](COVERAGE.md) and [SOURCES.md](SOURCES.md).

The scheduler is a simple interval scheduler, **not FSRS**. Checking never schedules a card; grading affects only that direction. Words and grammar have both directions; affix questions use recognition.

## Checks

```powershell
node --test english/tests/validate.cjs
node english/tests/summarize.cjs
```

Twenty-one tests cover structure, stable IDs, unchanged legacy entries, graph references/cycles, scoped CEFR, contextual answers, spelling, grammar production, separate progress, topic/due scopes, Learn decisions, known/deferred backup compatibility, import validation, storage failure, escaping and a synthetic 200-family registry. The expansion checks also preserve every previous record and exercise the new family/grammar review and backup paths. These do not establish linguistic completeness.

Browser verification is recorded in [VALIDATION.md](VALIDATION.md). Parent-file drift from concurrent German work is reported without reverting it. See [ARCHITECTURE.md](ARCHITECTURE.md) for future integration boundaries.
