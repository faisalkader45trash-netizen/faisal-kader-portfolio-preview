# Build Trace — Placement Rejection & Visual Critique

**Date:** 2026-10-13  
**Scope:** The **isolated placement composition** `faisal-build-trace-hero-placement-review.html`, NOT the approved underlying Build Trace concept, and NOT the deployed Render portfolio.  
**User feedback:** "আমার টোটাল সেটআপটাই পছন্দ হয় নাই ... মনে হইতেছে না এটা কোন ল্যান্ডিং পেজ টাইপের কিছু ... আজব টাইপের ফিল" — user explicitly rejects the current setup/layout.  
**Status:** **REJECTED — DO NOT IMPLEMENT THIS PLACEMENT**. Direction 04's narrative may be revisited; the previous hero placement is not approved. No production changes authorized.

## Direct visual evidence inspected in this review

- Local screenshot `/mnt/data/build-trace-placement-1440.png` (1440 desktop) was viewed, not just its QA summary.
- Local screenshot `/mnt/data/build-trace-placement-390.png` (390 mobile) was viewed.
- Source inspected: `/mnt/data/faisal-build-trace-hero-placement-review.html`, plus `03_PROJECT_RULES.md` and verified actual published `index.html` from earlier repository audit.
- These are **isolated offline local screenshots**, not the live Render website; original Cloudinary portrait/icon files and fonts could not load in the offline screenshot. Their actual visual fidelity is unverified.
- The Impeccable design critique engine was attempted but could not download/execute in the restricted runtime. This is a **manual screenshot/source critique**, not a deterministic automated detector pass.

## Important failures (observed, not invented)

| Priority | Visual problem | Desktop/mobile evidence | Why it undermines a professional developer portfolio |
| --- | --- | --- | --- |
| P1 | **An admin form becomes the dominant hero** | On desktop the right ~60% of the first view is a window showing sample inquiry inputs, a five-stage stepper and documentation inspector. Mobile has a long form following the opening copy | Visitors encounter an interactive tool/test screen rather than an emotionally clear professional identity, result and CTA |
| P1 | **Portrait/identity relegated below the workbench** | Desktop portrait appears in a narrow later band; mobile original-photo placeholder occurs after a tall demo section | Developer credibility and human connection are absent from the opening moment. The offline placeholder further degrades the screenshot, but the placement problem remains even if the photo loads |
| P1 | **Debug/QA copy leaked into the visual hierarchy** | `Original hero assets retained`, `Existing Cloudinary source`, `Unavailable in offline test`, `Source in verified repository`, `Local simulation`, `No data leaves this page`, repeated status labels | The surface reads like an internal QA/control panel rather than client-facing personal branding. Truthfulness should remain, but one plain disclaimer and unobtrusive evidence links suffice |
| P1 | **Too many competing actions and micro-elements** | `View My Work`, `Let's Talk`, `Run the trace`, `Simulate inquiry`, five stage buttons, `Next layer`, `Reset`, `Previous`, GitHub links visible concurrently | Breaks first-viewport focus and forces visitors to decode the demo before learning who builds what |
| P1 | **Flat repeated UI language instead of an authored landing visual** | White rectangular app window, many similarly bordered mini cards, tiny explanatory type and a uniform gray surface; motion is not apparent from static screenshots | Even though code interactions passed, the overall art direction feels generic tool-dashboard, not a signature visual story or strong portfolio brand |

### Honest credit for what worked

Source URLs, conceptual/demo truth labels and user-controllable stage changes were technically tested in the isolated prototype. These tests **do not establish visual approval** and cannot reverse the user's rejection of the placement. No fabricated backend submission was made. The approved five-color palette is not inherently the failure; hierarchy and placement are.

## Correction: redesign the *landing-page composition*, not polish this layout

1. **First viewport is a portfolio, not an inquiry app**: unmistakable Faisal Kader identity, visually dominant portrait (when asset loads), confidence-building developer statement and one primary action. Preserve existing original logo/CTAs/socials.
2. **Make the signature motion illustrative and lightweight:** concise original idea-to-application story, with one controlled visual moment that communicates engineering ability, rather than showing data-entry fields immediately.
3. **Move the full five-step, editable Build Trace** into a later opt-in interactive case-study/exploration surface, rather than requiring it to dominate the hero; its story remains useful. Exact section placement and possible structure changes require review/approval.
4. **Remove internal inspection artifacts from consumer-facing UI**. Keep a short truth notice if a conceptual demo is entered, and offer real source/evidence links in the case study.
5. **Art-direct typography, portrait, large-scale visual composition, motion beats and rhythm for desktop and mobile as separate compositions.** Do not just reorder the same panels.
6. **Before any other mockup,** write a one-viewport composition spec, compare against user goals (professional/modern/unique, full-stack capability), and review visual screenshots as a landing page; verify original image/font fidelity if network access permits. Keep local technical tests separate from aesthetic approval.

## Decision and gates

- **Placement P01-04 = REJECTED BY OWNER; no code integration allowed.**
- Existing approved visual-story idea (Build Trace) is not automatically rejected: only the **current packaging** is explicitly rejected. Ask for separate acceptance of a new hero direction after a genuinely different concept preview.
- Current integration plan, risk/test matrix remain historical planning references but **should not be executed unchanged** until a redesigned placement is approved.
- `main` and Render stay unchanged; documentation branch only may record this decision.
