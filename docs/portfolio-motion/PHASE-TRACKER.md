# Portfolio Motion — Phase Tracker

- **Last initialized:** 2026-10-13 (Asia/Dhaka)
- **Documentation branch:** `docs/portfolio-motion-master-plan-v2`
- **Production branch:** `main` — read-only for this work
- **Baseline main commit:** `1198882ba38ec50a81551be03b7f7de7ee68aa23`
- **Plan approval:** Owner approved v2.0 for documentation and Phase 00 read-only audit ONLY.
- **Allowed phase now:** 00
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
| P01-02 | 01 (proposal only) | Fourth direction **The Build Trace**: one request → UI → API → Validation → Database → Admin, with linked code evidence | PROPOSED / OWNER REVIEW | [PHASE-01-DIRECTION-04-PROPOSAL.md](./PHASE-01-DIRECTION-04-PROPOSAL.md); 3 prototype source and 6 images + current Think Different MERN repo files inspected | Await owner concept decision; no production implementation |
| P01-01 | 01 | Approved visual direction and production-ready signature storyboards | TODO | Phase 00 live browser QA still blocked; P01-00 awaits owner choice | After owner selection and further evidence, request specific implementation approval |
| P02-01 | 02 | Theme/CSS consolidation and accessible light-first palette | TODO | Approved Phase 01 | Small isolated implementation + regression QA |
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

## Current stop condition

**After documentation verification and a read-only Phase 00 audit, STOP.** Report findings/unknowns to the owner. Do not edit production files, merge the docs branch, trigger a deploy, or start design implementation in this authorization.
