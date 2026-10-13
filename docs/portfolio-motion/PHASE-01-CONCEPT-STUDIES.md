# Phase 01 — Hero Motion Direction Studies (isolated design exploration)

- **Date:** 2026-10-13
- **Authorization:** User asked to proceed with next work (`ok koro`) after Phase 00 read-only source findings. This was interpreted as permission to explore **non-production design prototypes**, NOT approval to implement, merge or deploy.
- **Status:** THREE LOCALLY TESTED CANDIDATES / AWAITING OWNER SELECTION
- **Production branch:** `main` at `1198882ba38ec50a81551be03b7f7de7ee68aa23`; not modified
- **Deployed website:** https://faisal-kader-portfolio-preview.onrender.com — the prototype is NOT this deployed website
- **Current audit gate:** Phase 00 live responsive/accessibility/performance baseline remains BLOCKED; these mockups do not close Phase 00 or authorize Phase 02.

## Grounded starting brief

Creative aim: A full-stack developer portfolio that explains ability to turn business requirements into a working application, with a distinctive but credible experience rather than a generic card-animation theme. Base `index.html` provided brand name, position, portfolio narrative and link targets; Render confirms current live version is a static HTML/CSS/JS preview, not an operating MERN backend.

Use original five approved brand tokens:
- Midnight Ink `#162536`, Soft Paper `#F6F8F7`, Signal Teal `#08786F`, Mist Teal `#E1F3EF`, White `#FFFFFF`
- Manrope 600 headings; Inter 400 body and Inter 500 interactions when font files load.
- Original Cloudinary `Logo_FK.png` URL retained as optional preview asset; fallback is existing plain-text name in restricted/offline browser. There is **no invented replacement logo**.
- Links go to existing live anchors. Demonstrated app UIs and architecture are labeled conceptual, not working backends or finished client apps.

## Three genuinely different design directions

| Candidate | Distinct interaction architecture | Intended visitor understanding | Benefit | Tradeoff |
| --- | --- | --- | --- | --- |
| **Signal** / Signal to System | Five-stage interactive idea-to-delivery workflow; user can select any stage or play the sequence; a right-side explain-it panel responds | Structured thinking from business idea to UI, API and data | Clearest developer-process narrative with first-click comprehension | Less expansive art direction; relies on strong typography and sequence |
| **Atlas** / Architecture Atlas | Large editorial typography + selectable relational map (Interface, API Layer, Business Rules, Database, Release); contextual explanation follows choice | How frontend/backend/database responsibilities form a connected system | Strong architecture/information-design identity | Tall hero; needs improved small-screen testing and accurate data-flow treatment |
| **Studio** / Product Studio | Choice of three business needs triggers a realistic-but-conceptual app canvas with service-specific headings/cards/charts | Capability range: business website, operations app and analytics UI | Strongest immediate product-interface demonstration | Synthetic UI must remain clearly conceptual; live-data claims prohibited |

No production-ready React/shadcn components, purchased assets, or externally copied templates were incorporated. The demos use self-contained HTML/CSS/JavaScript + CSS transforms/opacity, with no GSAP, WebGL or third-party animation library.

## Verification performed on *local isolated prototypes*

- **Artifact:** `faisal-hero-motion-directions.html` (standalone, user-visible chat attachment; not pushed to `main` or to this repository's docs branch).
- **Runtime:** local Python Playwright with system Chromium; loaded the standalone prototype through `page.set_content` because this runtime blocks direct `file://` and live-site navigation.
- **Screenshots captured:** each variant at `1440x900` and `390x844`; 6 real screenshots of the LOCAL PROTOTYPES, not screenshots of the deployed live site.
- **Interaction checks:** selected stage 3 updates to `Frontend interface`; selected map node 3 updates to `Business Rules`; selected product 3 updates to `Business insights`. All six desktop/mobile cases rendered exactly one variant and one selected picker control, with **zero observed browser page errors and zero detected horizontal overflow** at the tested viewports.
- **Accessibility/motion probes:** setting `prefers-reduced-motion: reduce` produced computed entrance duration `1e-05s`; keyboard shortcut `2` selected `Atlas`; button states use `aria-pressed`. This does not replace full keyboard/screen-reader/manual touch tests.
- **Offline test limitation:** removed only the external Google Fonts CSS `@import` from the browser **test copy** so rendering would not wait for inaccessible network assets; original standalone preview file still contains font imports. Screenshots show system fallback font, not confirmed Manrope/Inter rendering. Original Cloudinary logo also could not be loaded in this offline browser. All dependencies/source URLs would require a real deployed/browser asset check.
- **Performance:** No FPS, Core Web Vitals, field/lab performance score, real-device smoothness, or live deployment behavior has been measured.

## Required next gate (before any implementation)

1. Owner opens the three-way preview and selects **Signal**, **Atlas**, **Studio**, or requests a revision/composite.
2. Document chosen direction and reason in `DECISIONS.md` with a formal task; rejected candidates remain rejected, not silently merged.
3. Obtain a true live-site visual baseline when browser access is available (Phase 00 remains open), and compare selected direction to current portfolio structure, content and original assets.
4. Prepare small, independently testable implementation specifications for the canonical verified deployed static source. Do **not** start work on source files until the phase/task scope has explicit owner approval.
5. After owner approvals: isolated implementation branch, build/test/visual verification, review, separate authorization to merge/deploy, tracker update. No live website is changed as a side effect of choosing a concept.

## Evidence standard

Statements `TESTED` here refer ONLY to executable behaviors observed in the **isolated local prototype**. They are not production QA passes, not a promise that complex animations will achieve 60 FPS, and not proof of backend functionality. A concept card is not evidence of an application shipped.
