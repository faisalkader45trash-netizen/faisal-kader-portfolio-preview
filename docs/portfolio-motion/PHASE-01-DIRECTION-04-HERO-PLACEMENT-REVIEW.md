# Direction 04 — Real-Hero Placement Review & Integration Scope

**Status:** LOCAL PLACEMENT REVIEW TESTED / OWNER LAYOUT & CODE-SCOPE APPROVAL PENDING  
**Date:** 2026-10-13  
**Authorization boundary:** Owner's "ok koro" followed the proposal to **prepare and verify real-Hero placement**, then request separate implementation permission. This is a standalone review artifact, NOT an actual change to the public portfolio.

## Evidence checked before designing

- Live source GitHub `faisalkader45trash-netizen/faisal-kader-portfolio-preview/main` at `1198882ba38ec50a81551be03b7f7de7ee68aa23`. Render latest published deployment matches this commit (service `srv-daih6ntg1s2s73favnt0`).
- Original `index.html#home` includes unchanged eyebrow `Turning Ideas Into Solutions`, headline `Modern Web Applications for Real Impact`, existing introduction/description, anchors `#projects` (`View My Work →`) and `#contact` (`Let's Talk`), GitHub/LinkedIn/email links, and original four technology-pill images.
- Original `.heroart` contains exactly four image-bearing `.floatcard` nodes (React, Node, Express, MongoDB) and `Hero_image.png`. The original navbar uses `Logo_FK.png`.
- The Build Trace local prototype code and browser results were verified in [Prototype QA](./PHASE-01-DIRECTION-04-PROTOTYPE-QA.md).
- The project already loads fourteen CSS files, including two theme overrides. Replacing CSS globally is **not** approved as part of this proposal.

## Selected placement to review — not approved for implementation yet

**Desktop (approximately >=1051px)**
1. Existing name/logo and nav remain at top with the same link destinations.
2. Hero main row becomes a weighted **left introductory column** (existing headline, description, CTAs, socials) and **right Build Trace panel** (conceptual, user-operated, five stages, source link).
3. Separate support band immediately below: original portrait at left alongside "Faisal Kader — MERN Full Stack Developer", and four familiar MERN **floatcard** assets to the right; retain the original technology-pill strip. This is placement, **not** an asset deletion or logo redesign.
4. A single extra `Run the trace` button opens/plays the entirely local sample; no direct API request.

**Tablet/mobile (<=1050px, including 390px and 320px)**
1. Existing intro and CTAs first, Build Trace second, original portrait and technology cards third.
2. Inside the trace panel, stage navigation remains accessible; inspector stacks beneath sample form; original portrait/cards appear afterwards in a 2-column small-card grid.
3. No sticky prototype picker, unexpected global keyboard shortcuts or horizontal scroll. Final live mobile hamburger must remain from the existing `mobile-nav.js` rather than this isolated review's simplified preview topbar.

**What this deliberately does not do:** add new business projects, change published claims, alter existing portfolio sections/footer, create a real inquiry backend, move the logo asset to a new URL, deploy a website, remove the existing portrait or auto-play looping motion.

## Actual standalone review artifact (only in conversation filesystem)

- `faisal-build-trace-hero-placement-review.html` — self-contained HTML/CSS/JS local visual exploration, SHA-256 `f33d8e640d6cf33ec0d761fbff7a580f86c16c6d172902695ae73dc14dbe4eb3`.
- Local Chromium screenshots: `build-trace-placement-1440.png`, `build-trace-placement-1024.png`, `build-trace-placement-768.png`, `build-trace-placement-390.png`, `build-trace-placement-320.png`.
- Browser QA metadata: `build-trace-placement-review-qa.json`; test helper `verify_hero_placement.py`. These artifacts are in the **current conversation workspace only**, NOT in GitHub or Render.

**Important fidelity distinction:** this is an **isolated placement study using exact source-derived Hero copy, href destinations and existing asset URLs**. It is not a production CSS implementation or a verified screenshot of the actual Render site. The offline browser cannot load external Cloudinary/Google Fonts; the review shows original portrait URL with truthful unavailable fallback and the tech-card labels when source images fail. Real photograph, actual Manrope/Inter rendering and loaded icon fidelity require future browser verification. Do not call this a live before/after comparison.

## Executed local tests

| Area | Result | Evidence type |
| --- | --- | --- |
| 1440×900, 1024×768, 768×1024, 390×844, 320×720 | No horizontal overflow; supporting portrait/cards remain present | **LOCAL PLAYWRIGHT TESTED**, not live |
| Original headline/CTA/asset URLs | Exact headline, external destinations and ten Cloudinary image references retained in review DOM (logo, portrait, original four floatcard icons and four technology-pill icons) | **SOURCE/DOM VERIFIED** |
| Four floating cards and four icon pills | Count 4 and 4 in each viewport | **LOCAL DOM TESTED** |
| Stage selection, edited sample propagation, Reset | Five-stage selection and edit-to-API-to-admin example responsive | **LOCAL PLAYWRIGHT TESTED** |
| JavaScript exceptions and actual POST | 0 observed `pageerror` events and 0 POST requests across tested interactions | **LOCAL PLAYWRIGHT TESTED** |
| Cloudinary and Google fonts | External URLs blocked intentionally in offline test; real rendering quality **NOT VERIFIED** | **UNKNOWN** |
| Actual Render responsive/nav/photo layout & Core Web Vitals | Not loaded/tested due runtime's network restriction; cannot claim screenshot or performance PASS | **BLOCKED** |

Test procedure: `python /mnt/data/verify_hero_placement.py` executes offline Playwright Chromium `page.set_content` from the review HTML with Google Fonts CSS import removed **only in test memory** and remote image requests blocked for determinism. A real browser page linked to original fonts/images remains untested.

## Proposed exact future implementation allowlist (subject to NEW approval)

| File | Planned action | Gate |
| --- | --- | --- |
| `index.html` | Adjust `#home` Hero subtree and add `build-trace.css` and `build-trace.js` links **without deleting** portrait, four cards, logo, socials, original CTAs or other section content | Owner layout + source diff check |
| `build-trace.css` (new) | Component-only `#build-trace` scoped light-first style and responsive layout; no global theme remap | Contrast/cascade tests |
| `build-trace.js` (new) | Scoped local sample/stages, motion, source links; no API calls | Interaction/privacy tests |
| `qa/build_trace/test_structure.py` (new) | All original assets/links/header/sections and trace disclaimers invariant | Static tests |
| `qa/build_trace/browser_smoke.py` + `README.md` (new) | Local integrated browser and screenshot testing instructions | Live/source-baseline equivalent required |

**Excluded for this task:** `mobile-nav.js`, `base.css`, `responsive.css`, the two `lerventia-typography-palette-*.css` files, non-Hero sections, Think Different business repo/backend or Render settings. Any additional required file is an **approval change request**, not silent refactoring.

## Risk gates inherited

- [Risk Register](./PHASE-01-DIRECTION-04-INTEGRATION-RISKS.md): R01 cascade collision, R02 existing photo/icons, R03 simulated-backend truthfulness, R05 small-screen overflow, R07 accessibility, R11 Render auto-deploy, R12 user input safety.
- [Test Matrix](./PHASE-01-DIRECTION-04-INTEGRATION-TESTS.md): P0 T01–T18, visual V01–V04, optional measured performance P01–P03, separate release approval.
- Do not mix global light-theme consolidation into Build Trace integration. Phase 02 needs separate plan/code approval.
- Existing `main` and Render production deployment must remain at their verified commit until a separate release decision.

## Owner gate now

**Approve this layout and the bounded integration file list, or request revisions.** Even if the layout is approved, a **separate express authorization** is needed to create/edit production-source files on an implementation branch; **another independent authorization** is required later to merge into `main` and deploy via Render.
