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
