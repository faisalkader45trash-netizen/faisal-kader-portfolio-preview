# Portfolio Motion — Phase Tracker

- **Last initialized:** 2026-10-13 (Asia/Dhaka)
- **Documentation branch:** `docs/portfolio-motion-master-plan-v2`
- **Production branch:** `main` — read-only for this work
- **Baseline main commit:** `1198882ba38ec50a81551be03b7f7de7ee68aa23`
- **Plan approval:** Master Plan v2.0 approved; Direction 04 concept and isolated prototype visual direction approved by owner; current permission is **integration planning only**, not production code.
- **Allowed activity now:** documentation/planning for Direction 04 integration, with remaining Phase 00 live-browser tests still BLOCKED.
- **Production code changes:** NOT AUTHORIZED
- **Publish/merge/deploy:** NOT AUTHORIZED

## Status meanings

`TODO` = not started; `IN PROGRESS` = activity underway; `IMPLEMENTED` = source change committed; `TESTED` = executed tests with outcomes recorded; `VERIFIED` = outcomes independently corroborated; `APPROVED` = owner explicitly signed off; `CLOSED` = accepted and handed off. `BLOCKED` records missing access/evidence.

| ID | Phase | Scope / result | Status | Evidence / dependencies | Next action |
| --- | --- | --- | --- | --- | --- |
| DOC-01 | Documentation | Plan, research, tracker and decisions saved and read back on docs-only branch | VERIFIED | GitHub readback of four files; main-vs-branch diff contains docs only | Keep docs branch isolated; no merge |
| P00-01 | 00 | GitHub/Render static preview source and live deploy mapping | VERIFIED | `PHASE-00-BASELINE.md` sections A/B; commit `1198882` matches Render latest live deploy | Re-check on future release |
| P00-02 | 00 | Historical React/Vite implementation (separate from current live site) | NOT REQUIRED | Verified current Render target is static repo; local React snapshot is historical only | Revisit only for explicitly proposed migration or if a reachable source is discovered independently |
| P00-03 | 00 | Source-level audit of HTML/CSS/JS, theme, motion, links and claims | VERIFIED | `PHASE-00-BASELINE.md` B/C and follow-up: labels, 15 image alts, all anchor IDs, contrast token pairs | A11Y-01/A11Y-02/FUNC-01 documented in baseline; complete live visual/browser checks under P00-04 |
| P00-04 | 00 | Desktop/mobile browser visual, interaction, accessibility and performance baseline | BLOCKED | Live remote content extraction VERIFIED; Python Playwright local synthetic page works but live domain DNS blocked; no live screenshots/metrics | Retry only when a supported browser path is available; do not invent results |
| P00-05 | 00 | Close Phase 00 baseline for owner's current deployed portfolio | BLOCKED | Operational canonical live site VERIFIED via GitHub+Render; P00-04 true browser QA pending | Finish visual/interaction baseline; no unrelated local ZIP prerequisite |
| P01-00 | 01 (exploration only) | Three isolated Hero concept directions: Signal, Atlas, Studio | TESTED (LOCAL PROTOTYPE ONLY) | `PHASE-01-CONCEPT-STUDIES.md`; 1440px/390px browser tests; no production changes | Owner selects/revises a direction; do not promote to code |
| P01-02 | 01 (isolated prototype only) | The Build Trace: editable sample → API → validation → MongoDB model → admin view | APPROVED VISUAL DIRECTION / TESTED LOCALLY | [PHASE-01-DIRECTION-04-PROTOTYPE-QA.md](./PHASE-01-DIRECTION-04-PROTOTYPE-QA.md); owner explicitly approved visual direction 2026-10-13 | Integration plan only authorized; code changes still require a new approval |
| P01-03 | 01 (planning only) | Build Trace live integration implementation plan, risk assessment and P0 test matrix | DOCUMENTED / OWNER SCOPE REVIEW PENDING | [Implementation Plan](./PHASE-01-DIRECTION-04-INTEGRATION-PLAN.md), [Risks](./PHASE-01-DIRECTION-04-INTEGRATION-RISKS.md), [Tests](./PHASE-01-DIRECTION-04-INTEGRATION-TESTS.md) | Owner reviews and separately authorizes code scope; no changes now |
| BT-01 | 03 integration | Guard source/asset contracts and tests | NOT STARTED | Implementation plan Task 1; Gate A required | Wait for explicit code approval |
| BT-02 | 03 integration | Static scoped markup and CSS with original assets | NOT STARTED | Implementation plan Task 2; approved Hero placement + Gate A | Do not edit now |
| BT-03 | 03 integration | Local-only trace JS and valid/invalid sample behavior | NOT STARTED | Implementation plan Task 3; browser P0 tests | Do not edit now |
| BT-04 | 03 integration | Accessible motion, keyboard and reduced-motion | NOT STARTED | Implementation plan Task 4; QA | Do not edit now |
| BT-05 | QA | Responsive/integrity/performance regression evidence | NOT STARTED | Implementation plan Task 5; Phase 00 baseline | Do not mark verified until executed |
| BT-06 | Release | Explicitly approved merge, Render smoke and rollback record | NOT STARTED / RELEASE AUTHORIZATION NOT GRANTED | Implementation plan Task 6, separate release approval | Do not merge or deploy |
| P01-04 | 01 (placement planning only) | Preserve original Hero portrait/MERN cards with Build Trace composition | LOCAL PLACEMENT TESTED / OWNER LAYOUT REVIEW PENDING | [Placement QA](./PHASE-01-DIRECTION-04-HERO-PLACEMENT-REVIEW.md): 1440, 1024, 768, 390, 320px, no overflow/pageerror/POST in tested flows | Owner approves/revises layout and exact future file scope; no implementation now |
| P01-01 | 01 | Build Trace direction + real-Hero placement study | DIRECTION APPROVED / ISOLATED PLACEMENT TESTED / LAYOUT APPROVAL PENDING | [Hero Placement Review](./PHASE-01-DIRECTION-04-HERO-PLACEMENT-REVIEW.md): source-derived layout, 5 local viewport screenshots; original Cloudinary images offline unavailable | Owner reviews proposed positioning, file allowlist and separate theme gate before code authorization |
| P02-01 | 02 | Theme/CSS consolidation and accessible light-first palette | TODO — SEPARATE APPROVAL REQUIRED | Approved Phase 01 | Small isolated implementation + regression QA |
| P03-01 | 03 | Signature interactive Hero concept | TODO | Approved theme/hero storyboard | Accessible motion prototype and measure |
| P04-01 | 04 | Service cards and MERN stack interactions | TODO | Verified hero style and approach | Review purposeful interaction |
| P05-01 | 05 | Journey and fact-checked case studies | TODO | Flagship project evidence check | Show evidence, never planned products as completed |
| P06-01 | 06 | Contact/navigation/touch micro-interactions | TODO | Verified behavior and contact handling | Functional and accessibility testing |
| P07-01 | 07 | Whole-page QA and controlled release | TODO | All approved implementation phases | Owner authorizes production merge/deploy separately |

## Rules for updating

Update the row **after** observing real evidence. For completed tasks, link the commit/PR, desktop/mobile screenshots or traces, test result, independent review and approval record. Never mark TESTED because a command was issued; confirm its outcome. Do not move to the next phase solely because a file was written. No reopening or duplicating completed tasks without a documented regression.

## Phase 00 read-only audit evidence

- [PHASE-00-BASELINE.md](./PHASE-00-BASELINE.md) — GitHub/Render mapping, static source findings, page extraction and blocked browser/local checks.
- The current Render/GitHub static portfolio is the **verified operational live target**. The historical local React folder remains unverified but is **not needed** for baseline audit of the live site.
- No source edits, production merge or Render deploy authorized or performed.

## Additional 2026-10-13 baseline verification

- The 7 existing section/anchor IDs match their internal href targets in HTML source; 15 images have alt attributes. Form label associations are absent, and the send button lacks an apparent handler.
- Exact opaque-token contrast includes Teal-on-Ink **2.90:1** (a theoretical pair needing actual computed-style verification). See [PHASE-00-BASELINE.md](./PHASE-00-BASELINE.md).
- Visual/interaction browser testing is still **BLOCKED**; remote text extraction is not a screenshot or functional test.

## Browser and semantic evidence follow-up

- Local Chromium + Python Playwright ran a **synthetic** HTML page; direct live navigation failed DNS, so no live screenshot or responsive evidence exists.
- Actual source confirms no main landmark or skip link, four unassociated form labels, and unimplemented contact submission. Internal fragment IDs match and 15 images declare alt attributes.
- Correction: mobile menu **does** call `button.focus()` on Escape; prior generic assertion about missing focus management was incomplete. See [Phase 00 follow-up](./PHASE-00-BASELINE.md).

## Isolated design prototype status (not a phase advance)

- [PHASE-01-CONCEPT-STUDIES.md](./PHASE-01-CONCEPT-STUDIES.md) — Three working local Hero directions, two viewport sizes, reduced-motion/keyboard test outcomes, limitations and user selection gate.
- Standalone HTML and 6 screenshots were delivered as chat artifacts only; **not production code** and **not a live-site visual baseline**.
- P01-00 design exploration has been TESTED locally but P01-01 remains TODO. Phase 00 live browser QA remains BLOCKED.

## Direction 04 proposal (not implementation)

- [The Build Trace — Phase 01 fourth direction](./PHASE-01-DIRECTION-04-PROPOSAL.md): a source-backed, one-scenario interactive request trace. Status **PROPOSED / OWNER REVIEW**, not tested as a fourth prototype.
- GitHub Think Different code paths inspected: inquiry UI, route, Zod validation, Mongoose model and admin table. Code existence does **not** establish live app functionality.
- No production edits, no merge, no Render deploy.

## Direction 04 — prototype QA completed (2026-10-13)

- Owner authorized an **isolated** animated prototype, explicitly not production changes.
- [Direction 04 QA Evidence](./PHASE-01-DIRECTION-04-PROTOTYPE-QA.md) documents 1440, 1024, 768, 390, 320px browser tests, valid/invalid sample, reset, source links, focus, keyboard, reduced motion, Run/Pause and zero observed simulated API POSTs.
- The standalone prototype HTML and screenshot artifacts exist in the current conversation, **not in the production repo**. External logo/font loading and production responsiveness remain unverified.
- **P01-02 locally TESTED + visual direction APPROVED by owner**; Phase 00 live browser baseline remains BLOCKED. No merge/deploy.

## Direction 04 — detailed integration planning (2026-10-13)

- Owner approved **visual direction** and explicitly asked for detailed file-by-file integration planning, risk assessment and tests; **not production code authorization**.
- [Implementation Plan](./PHASE-01-DIRECTION-04-INTEGRATION-PLAN.md) — scoped implementation tasks BT-01…BT-06, file responsibilities, rollback/approval boundaries.
- [Risk Register](./PHASE-01-DIRECTION-04-INTEGRATION-RISKS.md) — severity/likelihood estimates, tests and release blockers.
- [Test Matrix](./PHASE-01-DIRECTION-04-INTEGRATION-TESTS.md) — proposed browser, accessibility, privacy, responsive, performance and release gates; **none run on integration**.
- Pending separate authorization for code-change scope, placement of the existing Hero portrait and MERN cards, and before/after visual baseline.

## Exact Hero placement prepared — 2026-10-13

- [Hero Placement Review](./PHASE-01-DIRECTION-04-HERO-PLACEMENT-REVIEW.md) records source-derived original Hero copy/CTA, original Cloudinary image URLs and all four floating-card assets, desktop split + lower asset band, mobile intro → trace → asset band.
- Standalone review HTML and five **local** screenshots shared in conversation, NOT stored in GitHub `main`. Offline screenshot font/photo/icons cannot be judged as final source rendering.
- P01-04 tested LOCALLY; **user layout/code-scope approval pending**. BT-01…BT-06 remain NOT STARTED. Phase 00 true live browser baseline still BLOCKED.

## Current stop condition

**Current stop:** Documentation/planning work only. Do not edit production code, create an implementation commit, merge the docs branch, trigger a Render deploy or start Theme/Hero implementation without a new explicit code-scope approval. The separate Phase 00 live browser baseline remains BLOCKED.
