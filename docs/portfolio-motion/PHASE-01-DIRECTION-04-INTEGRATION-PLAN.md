# The Build Trace — Live Portfolio Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrate the approved Direction 04 visual experience into the existing public static portfolio as an accessible, evidence-linked **local-only inquiry simulation**, without pretending to process real inquiries or degrading the rest of the portfolio.

**Architecture:** Keep the current Render-backed static HTML/CSS/JS stack. Add one scoped Hero explorer component with declarative HTML, scoped CSS and vanilla-JS state/interaction, driven by a frozen source-link list and a locally validated sample. Do not import the standalone prototype's global `body`, `:root`, `main` or `nav` rules. Preserve existing Hero image/identity/CTAs through a reviewed placement, and require an independent baseline/theme gate before integration.

**Tech Stack:** Existing `index.html`, CSS, vanilla JavaScript, SVG, browser APIs; Python stdlib plus **dev-only** Playwright for QA when installed. No React migration, GSAP dependency, WebGL, added network backend, analytics, user data collection or paid service required.

**Spec:** [Direction 04 Proposal](./PHASE-01-DIRECTION-04-PROPOSAL.md); [Approved Isolated Prototype QA](./PHASE-01-DIRECTION-04-PROTOTYPE-QA.md); [Phase 00 Baseline](./PHASE-00-BASELINE.md); [Risk Register](./PHASE-01-DIRECTION-04-INTEGRATION-RISKS.md); [Test Matrix](./PHASE-01-DIRECTION-04-INTEGRATION-TESTS.md).

**Status:** PLAN DRAFTED — **OWNER CODE-CHANGE APPROVAL REQUIRED BEFORE ANY IMPLEMENTATION**. User has approved Direction 04's **visual direction only** and requested this integration plan. No implementation branch, production code change, merge or Render deployment is authorized in the current turn.

**Source verified:** GitHub `faisalkader45trash-netizen/faisal-kader-portfolio-preview` `main` SHA `1198882ba38ec50a81551be03b7f7de7ee68aa23`; its `index.html` source contains `#home.hero > .shell.heroin`, `.heroart`, `floatcard fc1..fc4`, `.heroimg`, `.actions`, `#projects`, `#contact`; the page links **14 CSS stylesheets**, then `mobile-nav.js`. Render follows `main` with auto-deploy enabled. **No live browser screenshot or performance baseline has passed yet**.

## Global Constraints

1. **Before code changes:** obtain a new explicit approval naming task scope, affected files, branch and acceptance gates. Visual direction approval and approval of this document alone do not authorize edits.
2. **Before release:** obtain a separate explicit merge/deployment approval; Render `main` auto-deploys and PR previews are disabled. A local proof or doc commit is never a live pass.
3. Preserve existing Faisal Kader identity, Cloudinary `Logo_FK.png`, `Hero_image.png`, four MERN logo assets, existing `#home/#about/#skills/#journey/#projects/#case/#contact` targets, external links, CTA routes and content. **Do not silently delete or hide** portrait/floating assets: show owner a specific placement before markup changes.
4. Current five brand colors **only**: Ink `#162536`, Paper `#F6F8F7`, Teal `#08786F`, Mist `#E1F3EF`, White `#FFFFFF`. Roles: Manrope 600 headings; Inter 400 body / 500 UI; Noto Sans Bengali where appropriate. No added code-font/decorative color without separately recorded approval.
5. Meaningful static state remains when JS fails; a working-looking `Send Message` never appears in the explorer. The existing contact form's non-functional submit is separate known debt and **must not be represented as fixed** by this Hero work.
6. The original separate Think Different MERN repository demonstrates source for inquiry form, `POST /api/inquiries`, Zod controller, Mongoose `Inquiry`, and authenticated admin inquiry listing. **Code structure verified; live end-to-end delivery not verified.** The explainer always says `Conceptual demo — nothing is sent or stored`.
7. **No user-data networking:** no `fetch`, `XMLHttpRequest`, beacon, service worker, API submission or external form action from the explainer; sample values stay in memory only; text from sample displayed via `textContent`/escaped attributes, never untrusted `innerHTML`.
8. All events, keyboard commands, CSS selectors and state changes are scoped under `#build-trace`. Do not attach document-wide number/arrow shortcuts copied from standalone prototype; preserve `mobile-nav.js` Escape behavior. Under `prefers-reduced-motion: reduce` there must be no automatically advancing journey.
9. Keyboard, visible focus, form labels/error description, touch, contrast and link behavior require testing; CSS motion primarily `transform`/`opacity`, with control feedback <=300ms. Run/Pause story timing is a **candidate**, not a verified device-performance metric.
10. Each task is an independent tested commit on a separately approved **implementation branch**; never develop directly on `main`. Review report and user sign-off gate between tasks. Update `PHASE-TRACKER.md` **after evidence exists**.
11. Historical local React/Vite folder is a separate artifact; do not request ZIP or silently swap the deployed static source. The verified current **live** source is the static GitHub/Render repo.

## Review Focus: high-impact edge cases

- **R-F1:** Sample name `<img src=x onerror=alert(1)>` must appear only as inert text, never execute; test in Task 3.
- **R-F2:** Arrow keys while typing a message must move the caret, not change a stage; test in Task 3/4.
- **R-F3:** JS absent or a source-link request blocked must still leave an understandable five-stage summary and existing portfolio CTAs; test in Task 2/4.
- **R-F4:** Browser Back, fragment anchors, mobile menu Escape and modal-less focus must retain their original behavior; test in Task 4.
- **R-F5:** 320px mobile + browser zoom to 200% + slow external fonts/images must not hide the explorer or cause horizontal scrolling; test in Task 4/5.

## Planned file map — NOT CHANGED YET

| File | Action after future authorization | Reason |
| --- | --- | --- |
| `index.html` | Modify only Hero `#home` subtree and append scoped stylesheet/script links. Keep all existing sections, CTA hrefs, brand assets and external links | Integrate without page rewrite |
| `build-trace.css` | **Create**; every component rule rooted in `#build-trace`. Light-first approved palette and responsive styling; no global `body`, `header`, `nav`, `:root` overrides | Avoid current global CSS cascade |
| `build-trace.js` | **Create**; an IIFE limited to `initBuildTrace(root)` and tiny state/render helpers, no network calls | Accessible UI, local-only proof trace |
| `qa/build_trace/test_structure.py` | **Create** standard-library source/static invariants | Prevent accidental logo/content/link/script changes |
| `qa/build_trace/browser_smoke.py` | **Create** optional developer-only Playwright browser check; run on local HTTP server | Responsive, keyboard, motion, simulation safety |
| `qa/build_trace/README.md` | **Create** instructions, browser versions, local commands, expected evidence artifacts | Reproducible QA for future sessions |
| `base.css`, `mobile-nav.js`, existing page sections | **No change planned** | Explicitly protect behavior; any necessity opens a new approved task |
| `lerventia-typography-palette-a.css`, `...-b.css` | **No modification in Hero integration task**. Existing approx. 94,708 characters of duplicated overrides need separate Phase 02 design/theme gate | Avoid a large unrelated CSS refactor |

**Critical layout approval before code:** current `.heroart` contains existing 4 `.floatcard` assets and `.heroimg`. Plan a desktop trace canvas adjacent to the unchanged hero intro with a **small supporting portrait and factual MERN icon strip** in the Hero context; mobile puts readable intro/CTA first, then trace, then portrait/icon strip without horizontal scroll. No portrait/icon removal or hide-on-mobile assumption until owner has reviewed an exact before/after full Hero sketch.

## Separate prerequisite: Phase 02 styling and real browser baseline

This is a **dependency gate**, not permission to combine theme refactoring into the Hero branch:

- [ ] **G0.1:** confirm `main` SHA, `#home` anchor, all assets and Render service branch with source reads; record evidence.
- [ ] **G0.2:** obtain a real browser rendering of current portfolio at 1440/1024/768/390/320 (not the standalone prototype); collect computed hero/navbar/footer backgrounds, text contrast, fonts and network failures. If runtime cannot access live URL, retain BLOCKED and use local exact-source browser snapshot **clearly labeled local reproduction**, subject to owner review before production.
- [ ] **G0.3:** review Phase 02 five-color light-first foundation separately. Keep the substantial global CSS cleanup outside Build Trace integration; a `#build-trace`-scoped CSS layer may be tested against current styles without removing the duplicate overrides.
- [ ] **G0.4:** owner confirms full-Hero placement showing retained portrait/MERN assets and exact copy/CTA impact; record selected positioning in decisions.

Do **not** start Task 1 until owner explicitly approves implementation and the necessary G0 gates are satisfied/exception is documented.

---

### Task 1: Guard the existing page and define static Hero contract

**Files:**
- Create: `qa/build_trace/test_structure.py`
- Test read-only source: `index.html`, `mobile-nav.js`

**Interfaces:**
- Consumes: deployed `main` HTML and existing anchor/asset baselines.
- Produces: source tests named `test_existing_links_and_assets_unchanged`, `test_trace_scripts_scoped`, `test_conceptual_disclaimer_present`.

- [ ] Step 1: Write source tests asserting original `#home/#about/#skills/#journey/#projects/#case/#contact` IDs remain, original logo/hero/technology image URLs appear, and `#projects`, `#contact` CTA targets persist.
- [ ] Step 2: Execute `python3 -m unittest discover -s qa/build_trace -p 'test_*.py' -v`; tests requiring the new `#build-trace` must first fail because component is absent; baseline-only tests must pass.
- [ ] Step 3: Document immutable element contract and the owner-approved placement in `qa/build_trace/README.md`; do not change markup in this task.
- [ ] Step 4: Re-run the same command and verify baseline invariants; record expected component-test failures as **RED**, not PASS.
- [ ] Step 5: Commit tests/docs only to newly approved implementation branch; record SHA/evidence.

### Task 2: Add static-first scoped Hero component

**Files:**
- Modify: `index.html` **only inside** `<section id="home" class="hero">…</section>`, plus new CSS/JS resource tags when corresponding files exist.
- Create: `build-trace.css`

**Interfaces:**
- Produces: `#build-trace` root; `[data-bt-stage]` buttons with indices `0..4`, `#bt-screen`, `#bt-status`, `#bt-proof`, and visible `Conceptual demo — nothing is sent or stored` statement; original Hero external assets remain present.

- [ ] Step 1: Add test assertions: unique `#build-trace` root, five accessible stage buttons, static explanations, disclaimer, owner-approved image locations, and no new global CSS selectors.
- [ ] Step 2: Run structure tests and confirm FAIL on missing root/component.
- [ ] Step 3: Add minimal static markup and scoped CSS, link `build-trace.css` after current CSS; review specificity against existing `.hero`, `.heroin`, `.heroart` and duplicated override rules. Scope the CSS to `#build-trace`, not `body`, `nav`, `main`, `.card` or `.btn`. Preserve original hero CTAs/socials and Cloudinary references.
- [ ] Step 4: Run structure tests to PASS. Capture **local** screenshots at 1440, 390 and 320 with JS disabled and reduced motion; verify complete text, portrait, branding and no clipping.
- [ ] Step 5: Commit one isolated static HTML/CSS change; update tracker with screenshots and commit.

### Task 3: Add source-backed local-only trace behavior

**Files:**
- Create: `build-trace.js`; modify `index.html` only for its closing script tag.
- Test: `qa/build_trace/browser_smoke.py`

**Interfaces:**
- `initBuildTrace(root: HTMLElement): void`
- `validateDemo(sample: {name: string, phone: string, message: string}): {name: boolean, phone: boolean, message: boolean}`
- `renderStage(index: 0|1|2|3|4): void`
- `stopAutoTrace(): void`
- Internal local state only; proof file hrefs whitelisted to **five verified paths** in `think-different-automation-mern` (`InquiryForm.jsx`, `routes/index.js`, `inquiryController.js`, `Inquiry.js`, `admin/src/App.jsx`).

- [ ] Step 1: Write browser tests: each stage changes selected `aria-pressed` state, proof href and explanation; sample fields propagate into illustrative payload/schema/admin row; incorrect name (0/1 chars), phone (<7), message (<10) block progression; reset restores sample; adversarial HTML input renders inert; no POST/navigation to an API endpoint.
- [ ] Step 2: Serve implementation branch root with `python3 -m http.server 8765`, then `python3 qa/build_trace/browser_smoke.py --url http://127.0.0.1:8765`; verify new tests FAIL while JS is absent.
- [ ] Step 3: Implement scoped IIFE helpers, escaped/static templates and `textContent` for user fields; no external request/send path. Do not copy document-global `1..5`/arrow keyboard handler from standalone prototype: attach keyboard shortcuts to focused explorer only.
- [ ] Step 4: Re-run browser test, verify sample safety, source links, non-submit contract, stage state and no console errors.
- [ ] Step 5: Commit only scoped JS/script link and QA tests; record evidence.

### Task 4: Motion, accessibility and input-state gate

**Files:** Modify `build-trace.css` and `build-trace.js`; test `qa/build_trace/browser_smoke.py`.

**Interfaces:** `runAutoTrace()` starts user-triggered sequence; `stopAutoTrace()` stops timers; `resetDemo()` clears local-only sample edits. Animation never dictates access to explanatory content.

- [ ] Step 1: Test Run/Pause/Reset, last-stage restart, manual override cancelling autoplay, `prefers-reduced-motion: reduce` disabling auto-advance, visible selected state, keyboard Tab/Shift+Tab/Enter/Space/Escape, focus after valid sample simulation, screen-reader-friendly labels/error status, input arrow-caret behavior, global nav unchanged.
- [ ] Step 2: Run browser smoke tests; note expected unmet behaviors as FAIL.
- [ ] Step 3: Implement controlled 160–260 ms `transform`/`opacity` interactions; sample stage pacing candidate 1100 ms, with explicit pause and reduced-motion fallback; use `aria-live` only for concise user-triggered status and avoid continuous screen-reader noise. The existing mobile menu remains untouched.
- [ ] Step 4: Re-run QA including reduced-motion and 200% browser zoom; record actual render outcomes and keyboard/focus flow.
- [ ] Step 5: Commit scoped interactions and test updates, with owner review gate before next task.

### Task 5: Visual/performance and integrity regression

**Files:** Test `qa/build_trace/browser_smoke.py` and `qa/build_trace/README.md`; only fix files within approved scope.

- [ ] Step 1: Run original page behavior tests and compare screenshots for all untouched sections/anchors, portraits, logo, original mobile navigation and external links. Confirm missing existing contact delivery was **not** represented as repaired.
- [ ] Step 2: Run Playwright checks at `1440x900`, `1024x768`, `768x1024`, `390x844`, `320x720`; assert no horizontal overflow, stage panel reachable, readable text, correct computed brand colors and contrast; capture initial, intermediate, final, invalid-input and reduced-motion screenshots.
- [ ] Step 3: Run browser console/network checks with font/logo access when possible; verify zero unexpected API POSTs, source links remain correct, no unhandled exceptions. Record exactly which assets are verified versus blocked.
- [ ] Step 4: Record reproducible browser lab report (Lighthouse, long tasks, layout shifts, animation frames if tooling exists) and compare with G0 baseline under the **same conditions**. Targets: text contrast >=4.5:1 normal / >=3:1 large, LCP <=2.5s / INP <=200ms / CLS <=0.1 **field goals** when actual field data exists. An unavailable field metric is UNKNOWN, not PASS.
- [ ] Step 5: Review risk register and documented exceptions; no release until all blocker rows are resolved, owner approves exact visual screenshots and separate production release authority is granted.

### Task 6: Explicitly authorized production release ONLY

**Files:** approved implementation branch + documentation tracker; `main` only through separately authorized PR merge.

- [ ] Step 1: Obtain specific owner **merge/deploy** approval referencing implementation commit SHA, unchanged-asset report, test evidence, rollback plan and remaining known limitations. **Without approval: STOP.**
- [ ] Step 2: Compare PR against current `main`; if `main` changed, rebase/re-test before merge.
- [ ] Step 3: Only if approved, merge PR and let Render auto-deploy `main`; inspect provider status and deployed SHA.
- [ ] Step 4: Browser smoke test public Render page (not local prototype) at desktop/mobile, internal links, source evidence, reduced motion, zero sample submissions. An unverified live browser blocks calling release `VERIFIED`.
- [ ] Step 5: If critical regression, request rollback authority or use pre-approved rollback procedure; record reverted commit/deploy. Mark tracker VERIFIED/CLOSED only after observed results and owner sign-off.

## Scope and rollback strategy

- Isolated implementation commits can be reverted without removing other sections; keep `mobile-nav.js` untouched.
- Stage code uses static browser state and no DB changes, so no data migration/secret/back-end rollback exists.
- Back up the exact `index.html` SHA and prior Render deployment/commit ID before any authorized merge. `main` is auto-deployed, so **commit merging equals a production publish**, never treat as harmless bookkeeping.
- Move separate global CSS consolidation and pre-existing contact functionality remediation to their respective Phase 02/06 plans; avoid conflating defects/fixes.

## Self-review / unresolved gates

- **Spec coverage:** Five stages, editable example, truthful sample, Run/Pause/Reset, proof links, reduced motion, mobile, preserved identity and unchanged existing navigation are each assigned to Tasks 1–5.
- **Type consistency:** `validateDemo(sample)` supplies booleans to `renderStage`; `stopAutoTrace` and `runAutoTrace` are isolated to explorer; no API calls.
- **Evidence gap:** Phase 00 production visual/metrics still blocked. The earlier five-viewport PASS belongs only to the isolated prototype; do not promote those results to live or integrated PASS.
- **Human gate:** Full-Hero image/portrait layout, baseline availability and any icon repositioning require owner confirmation before implementation. This plan alone is **NOT AUTHORIZATION TO EDIT CODE**.

## Execution handoff

**Current outcome: PLAN READY FOR OWNER REVIEW.** After approval of the implementation *scope*, implement in isolated reviewed tasks and seek **a separate merge/deploy authorization**. Updating a Markdown plan or selecting a direction does not deploy anything.
