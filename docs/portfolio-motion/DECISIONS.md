# Portfolio Motion — Decisions and Approval Log

## 2026-10-13 — D-001: Final Master Plan v2.0

**Decision:** Owner approved the plan and authorized saving plan/research/tracker documents to an isolated GitHub documentation branch, then starting **read-only Phase 00**.

**Allowed:** create documentation branch, add planning/evidence/tracker files, read current GitHub/Render and available local files, inspect external technical documentation, write findings on documentation branch.

**Not allowed without separate explicit approval:** edit production app/source, install app dependencies, merge a branch into `main`, trigger Render deployment, publish an interactive site, modify separate business repositories, present proposed assets as existing, initiate paid external operations.

## 2026-10-13 — D-002: Documentation location

**Decision:** Use `faisalkader45trash-netizen/faisal-kader-portfolio-preview`, branch `docs/portfolio-motion-master-plan-v2`, directory `docs/portfolio-motion/`.

**Reason:** Current public portfolio repo and deployment are verified. Documentation only; may later be copied/linked to the canonical React repo if verified and approved. This does **not** declare the static preview the canonical long-term implementation.

**Verification:** GitHub branch/file readback and compare to `main` showing documentation files only. Do not open/merge PR automatically.

## 2026-10-13 — D-003: Motion architecture

**Provisional decision:** Native CSS/SVG/WAAPI first; vanilla Motion or GSAP ScrollTrigger only after prototype, framework compatibility, performance and accessibility evidence. No blanket React migration, no default React-only Magic UI/shadcn packages, WebGL or particle effects.

**Status:** PROPOSED technical approach, NOT implementation approval.

## 2026-10-13 — D-004: Brand and truth

**Decision:** Client-first full-stack developer portfolio; proof hierarchy real implemented business work > verified coded/deployed work > learning work. Do not misrepresent static preview, contact form, performance or planned products.

**Palette:** Current five-color Lerventia reference and typography remain a provisional constraint; the approved design work prioritizes **light-first distribution** over changing colors. Owner approval required to revise palette, content, structural layout or logo.

## Open questions before implementation

1. Is current local `faisal-portfolio` React/Vite work accessible, and is it the canonical source?
2. Which repo/branch will host the implementation after Phase 00 comparison?
3. What specific reference devices/browsers can be used for actual visual and performance tests?
4. Are contact delivery and real case-study features currently verified by their own systems?
5. Which of the two Phase 01 prototype directions will the owner select?

## Update rules

Append a dated, numbered entry for each future change in direction, rejected alternative, dependency adoption, accepted performance tradeoff and owner sign-off. Link task IDs and commit/PR evidence. A written decision is not evidence that a test passed.

## 2026-10-13 — D-005: Phase 00 partial audit boundary

**Verified:** `main` SHA `1198882ba38ec50a81551be03b7f7de7ee68aa23` is the source of the Render public static preview. Read-only audit of 14 linked CSS files, index.html and mobile-nav.js completed; findings are in [PHASE-00-BASELINE.md](./PHASE-00-BASELINE.md). GitHub source and provider live status were confirmed.

**Unverified / blocked:** Current historical local React/Vite worktree is not available here; connected GitHub account list has no separate `faisal-portfolio` repo. Container's live-site DNS resolution fails and no Playwright CLI/package is installed; a remote extractor confirmed text/links but not screenshots or interaction. Therefore Phase 00 remains **PARTIAL**, canonical long-term codebase remains **UNRESOLVED**, and no feature implementation is permitted yet.

**Next decision owner input:** Provide access to current local React source or explicitly identify intended target; enable a permissible browser visual baseline. Do not infer the locally historical failure or current CSS visual outcome without evidence.

## 2026-10-13 — D-006: No unnecessary source-upload requirement

**Decision:** The user's explicitly named, currently deployed Render website is the operational target. Live GitHub `main` and Render metadata independently identify its public source. The existence or availability of a historical local React/Vite experiment is **not a prerequisite** to continuing the approved Phase 00 audit of the public website. Do not ask the owner to find or zip a folder already unnecessary for the target task.

**Evidence:** GitHub `main` SHA `1198882...`; Render service `srv-daih6ntg1s2s73favnt0` auto-deploys `main`; read-only remote live-content fetch succeeded. Browser screenshots/performance are still unverified due to execution-tool/network constraints. The source-level findings are appended to `PHASE-00-BASELINE.md`.

**Approval boundary:** No authorization to change production implementation, merge, deploy or start Phase 01; continue evidence gathering only.

## 2026-10-13 — D-007: QA evidence boundary and source correction

**Decision:** Continue Phase 00 source audits only. The local Chromium/Playwright smoke check confirms synthetic pages can render, **not** the real Render site. Live hostname DNS resolution is unavailable here. Do not mark visual, responsive, functional, accessibility-tree or performance checks completed. Do not spend credits on the unavailable metered browser account.

**Source correction:** Mobile menu Escape handler actually calls `button.focus()`; don't claim it has no focus handling. Contact form's absent delivery handler and unassociated labels, no `<main>` landmark or skip link, and structurally valid fragment hrefs are documented in the baseline report.

**Status:** P00-04 blocked on actual live browser recording. Main and Render unchanged. Phase 01 design/implementation not authorized.

## 2026-10-13 — D-008: Isolated Hero design exploration, no production implementation

**Context:** After the Phase 00 source audit, user asked to continue work. Three genuinely different **isolated local Hero prototypes** were created and browser-tested: Signal (idea-to-application sequence), Atlas (connected stack architecture), Studio (conceptual business-app canvas). The preview and six local screenshots were shared through the conversation, not deployed or committed to `main`.

**Evidence:** [PHASE-01-CONCEPT-STUDIES.md](./PHASE-01-CONCEPT-STUDIES.md). Local Chromium/Playwright verified user clicks at 1440px and 390px, keyboard variant shortcut and reduced-motion duration with no observed runtime errors/overflow in tested cases; original external fonts/logo and the current live site's performance could not be verified in the isolated runtime.

**Decision status:** THREE CANDIDATES / OWNER CHOICE PENDING. No direction selected, no implementation phase approved, Phase 00 visual gate still blocked. Absolutely no merge, production edits or Render deployment.

## 2026-10-13 — D-009: The Build Trace proposed (not approved)

**Status:** PROPOSED / OWNER DECISION PENDING. Source-driven analysis of Signal, Atlas and Studio led to a single creative direction: "The Build Trace" — a conceptual service-inquiry request traces UI, API, validation, MongoDB record and admin view, with inspectable source links. This is a **proposal**, not a fourth rendered prototype, selected design, implementation approval or production result.

**Evidence:** [PHASE-01-DIRECTION-04-PROPOSAL.md](./PHASE-01-DIRECTION-04-PROPOSAL.md) and code fetched read-only from `think-different-automation-mern`. Files prove relevant implementation structure exists, but no real backend submission, deployment or integration tests were executed.

**Controls:** Remain on docs branch. Phase 00 live browser verification blocked. Wait for owner to approve/revise this visual direction before producing an isolated prototype; any production merge or deployment requires its own explicit approval.

## 2026-10-13 — D-010: Direction 04 concept approved for isolated prototype; browser QA recorded

**Owner authorization:** The Build Trace Direction 04 proposal approved for isolated interactive Hero prototype build and verification. Explicit: **do not change production code, GitHub `main`, or Render deployment**.

**Executed:** Created self-contained HTML concept in chat artifact, with editable local sample form, five-step architecture inspection, GitHub source evidence links, simulated validation and admin view, Run/Pause/Reset and reduced-motion alternative. Tested five viewport widths (1440/1024/768/390/320), keyboard navigation, valid/invalid inputs, sample value propagation, and confirmed no observed API POST request. Visual screenshots captured locally using Chromium/Playwright with offline font fallback; see [PHASE-01-DIRECTION-04-PROTOTYPE-QA.md](./PHASE-01-DIRECTION-04-PROTOTYPE-QA.md).

**Status:** LOCAL PROTOTYPE TESTED; owner visual/design approval of the actual prototype is **pending**. This does not satisfy the separate blocked Phase 00 live-website browser audit and does not authorize merging/deployment or implementing live features.

## 2026-10-13 — D-011: Owner approves prototype visual direction; integration plan permitted, code NOT permitted

**User authorization:** "The Build Trace Direction 04 isolated prototype-এর visual direction অনুমোদন করছি। এখন live portfolio integration-এর detailed implementation plan, risk assessment ও test requirements তৈরি করো। production code পরিবর্তনের আগে আবার অনুমোদন নেবে।"

**Interpretation:** Approved design direction and documentation planning only. Does **not** approve actual integration, any existing CSS refactor, merge, Render deployment, React migration, unrelated contact form changes or alterations to separate Think Different MERN codebase.

**Planning documents:** [Integration Plan](./PHASE-01-DIRECTION-04-INTEGRATION-PLAN.md), [Risk Register](./PHASE-01-DIRECTION-04-INTEGRATION-RISKS.md), [Test Matrix](./PHASE-01-DIRECTION-04-INTEGRATION-TESTS.md).

**Verified current target:** `main` `1198882ba38ec50a81551be03b7f7de7ee68aa23`, static `index.html` Hero with `.heroart` original portrait and four MERN floating cards, 14 CSS stylesheets and standalone `mobile-nav.js`. Planned new files `build-trace.css`, `build-trace.js`, `qa/build_trace/*` are **NOT CREATED** in production. Current `P00-04` real live-site browser baseline remains BLOCKED; isolated prototype QA is not a production pass.

**Separate pending approvals:** (1) exact file-level implementation scope, image/card placement and test conditions; (2) after implementation tests, a separate specific PR-to-main merge/deploy release authorization. Owner review gate applies at both stages. Document-only branch stays isolated.

## 2026-10-13 — D-012: Isolated real-Hero placement proposal ready; no production edits

**Authorization interpretation:** User requested the planned next task ("ok koro") after a status indicating the next step is verifying placement of existing portrait/MERN floating cards and obtaining separate production implementation approval. Per explicit prior user boundary, this authorizes **placement study and planning**, **not** code edits, merging or Render deployment.

**Verified evidence:** GitHub current published `main` `1198882ba38ec50a81551be03b7f7de7ee68aa23` contains original `#home` copy, exact CTA/social targets, existing portrait and four MERN floating cards. Created `faisal-build-trace-hero-placement-review.html` in conversation only, with desktop left intro/right trace/lower original-asset band and mobile intro → trace → portrait/cards. Ran offline Playwright at 1440, 1024, 768, 390, 320px without horizontal overflow/page errors/POST in tested interactions; source image URLs preserved but Cloudinary and Google Fonts not loaded in that sandbox. See [placement review/QA](./PHASE-01-DIRECTION-04-HERO-PLACEMENT-REVIEW.md).

**Status:** LOCAL PLACEMENT TESTED / OWNER LAYOUT & EXACT CODE-SCOPE APPROVAL PENDING. No integration branch or production changes; later merge/deploy separately gated.
