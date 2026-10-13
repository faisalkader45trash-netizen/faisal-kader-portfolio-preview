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
