# Phase 00 — Source-of-Truth and Baseline Audit (read-only findings)

- **Audit date:** 2026-10-13 (Asia/Dhaka)
- **Audit status:** PARTIAL — current public-preview source and Render metadata verified; local React and visual/performance baseline blocked.
- **Public repository:** https://github.com/faisalkader45trash-netizen/faisal-kader-portfolio-preview
- **Main SHA during audit:** `1198882ba38ec50a81551be03b7f7de7ee68aa23`
- **Documentation branch:** `docs/portfolio-motion-master-plan-v2` (no production source edits authorized)
- **Explicit stop:** No design/implementation, no merge, no deploy without another approval.

## Method and provenance

1. Read the six historical handoff markdown files (snapshots dated 2026-10-06); used as historical evidence only.
2. Read current GitHub repository metadata, commit `main`, complete root tree, `index.html`, `mobile-nav.js` and the full set of 14 linked CSS stylesheets using connected GitHub API.
3. Read Render service metadata and latest deploy status (not just guessed URL).
4. Read current public URL through a remote content extractor: title and textual links/images extracted successfully; this is **not** a screenshot or interactive test.
5. Inspected current runtime: Chromium executable available; Playwright CLI and Node `playwright` module not installed. Direct network to live `onrender.com` failed DNS lookup (`curl: (6) Could not resolve host`). No screenshot, trace or Lighthouse/field data was obtained.
6. Checked connected GitHub user's available eight repositories; no distinct current `faisal-portfolio` repository was listed. This does not prove the historical Windows local project no longer exists.

## A. Canonical implementation — decision gate

| Artifact | Current evidence | Classification | Decision |
| --- | --- | --- | --- |
| **Published static preview** | `main` `1198882...`, repo `faisal-kader-portfolio-preview`, index.html, mobile-nav.js, 14 linked CSS files | VERIFIED | **Canonical for current Render public site only** |
| **Render deployment** | `faisal-kader-portfolio-preview` static site ID `srv-daih6ntg1s2s73favnt0`; tracks branch `main`, `autoDeploy=yes`; latest deploy `dep-db6vsm3m8hqs73f4n65g` reports `live`, matching `1198882...` | VERIFIED provider state | No deploy triggered |
| **Historical local React/Vite** | Historical path `F:\Adobe Stock\Mern Stack Developer\Faisal Kader MERN Full Stack Developer Portfolio Landing Page\faisal-portfolio` | HISTORICAL ONLY | BLOCKED until user supplies current worktree/repo and tests |
| **Creative/static other repo** | `endless-creativity-portfolio` is a distinct user repo | VERIFIED repository listing only | Not interchangeable with either canonical candidate |

**Operational target for this audit:** The owner's directly named and verified live Render website is the current target, with `faisal-kader-portfolio-preview/main` its proven deployed source. The historical local React/Vite version remains an unverified *separate* artifact, not a reason to ask the owner for a ZIP or hold up auditing the current live website. Any future framework migration or replacing the deployed source is a separate owner decision. The static preview is not a MERN runtime.

## B. Source-level UI and motion baseline

| Check | Confirmed observation | Result/interpretation |
| --- | --- | --- |
| HTML sections | 7 `<section>` elements: Hero, What I Do, About, Skills, Journey, Projects, Contact; Navbar and Footer outside section tags | VERIFIED from `index.html` |
| Stylesheet links | 14 active CSS links, including `lerventia-typography-palette-a.css` and `...-b.css` | VERIFIED |
| Added theme override sizes | `50,987 + 43,721 = 94,708` characters (~95k CSS text chars, **not compressed network KB**) | VERIFIED file contents; production gzip size UNKNOWN |
| Keyframes | Zero `@keyframes` declarations across the 14 linked CSS files | VERIFIED source scan |
| Existing interactions | CSS transitions in cards/buttons/navigation; mobile menu click/open/close handlers in `mobile-nav.js` | VERIFIED source; actual browser responsiveness not tested |
| JS assets | Only linked external script is `mobile-nav.js`; no project-specific animation engine script in HTML | VERIFIED source |
| Theme evidence | `.hero` dark gradient uses repeated `#162536` stops in palette overrides; a `#F6F8F7` token is present but limited in mapped overrides | VERIFIED code. Viewer experience requires screenshot |
| Fonts | Google Fonts import in palette overrides for Manrope, Inter, Noto Sans Bengali | VERIFIED code; actual browser font downloads/load status untested |
| Section content | Public copy includes "scalable" and "Database-driven" mentions; project badge states "In Development" | VERIFIED copy; real project technical status unverified |

**Important:** CSS transition presence means it is inaccurate to call the site completely unanimated. The gap is a lack of choreographed explanatory motion and verified interaction craft, not a total absence of transitions.

## C. Functionality and content risks

- **Contact UI risk:** `index.html` has a button labeled `Send Message` with `type="button"`, a form without an observed delivery target/submit handler, and only `mobile-nav.js` loaded. Source inspection provides **no evidence** that form delivery works. Do not test by sending a real message without user authorization.
- **Accessibility of mobile navigation:** `mobile-nav.js` creates a button with accessible label and `aria-expanded`, has document click and Escape-related close handling. Actual focus behavior, screen-reader labels and mobile tap behavior need live browser verification.
- **Claims:** any "scalable", "real business" or "database-driven" assertions require independent evidence from `think-different-automation-mern` and deployment/tests before publishing changed wording.
- **Images:** HTML references Cloudinary hero image/logo and technology logos. URLs were extracted from live page, but successful image decoding, sizing, CLS and CORS need browser checks.
- **Sections and links:** anchor routes include home/about/skills/journey/projects/contact and case study. Text extraction confirms appearance; clicking/focus/scroll offsets remain untested.

## D. Baseline QA matrix

| Test | Current state | Next evidence required |
| --- | --- | --- |
| Current GitHub main, root tree and docs isolation | VERIFIED | Commit & compare URLs |
| Render source branch, URL, latest live status | VERIFIED | Re-check immediately before any future release |
| Live HTML title/text/link extraction | VERIFIED (text-only) | Recorded success via remote content extraction |
| Desktop 1440px visual screenshot | BLOCKED | Accessible browser/DevTools screenshot with recorded viewport |
| Tablet 768px and mobile 390px screenshot | BLOCKED | Browser screenshots; check clipping, menu, text wrap |
| Browser console, CSS requests, asset failures | BLOCKED | Browser Network/Console recording |
| Keyboard navigation and focus after sticky menu | BLOCKED | Keyboard walkthrough/axe/manual review |
| Reduced-motion experience | BLOCKED | Toggle media query and verify non-motion equivalent |
| Core Web Vitals (field) | UNKNOWN | CrUX or actual real-user instrumentation; no guessed numbers |
| Lab measurements (Lighthouse) | BLOCKED | Device/conditions + report; do not confuse with CrUX field data |
| Actual local React/Vite repo, Git status, build/tests | BLOCKED | Obtain current local working tree and run test/build read-only or with safe build-output handling |
| Public contact message delivery | UNVERIFIED | Separate authorization to test actual send/failure behavior |

## E. Priorities and recommended next actions — no implementation permission

1. **P00-02:** Treat the verified Render/GitHub static preview as the operational source for the owner's *current live website*. Independently investigate any other accessible React version only if it becomes relevant to a future migration; **do not ask the owner for ZIP files as a default requirement**.
2. **P00-04:** Use a permitted browser runtime to capture desktop/mobile screenshots, inspect computed CSS and font loading, test navigation (without sending email), and record performance/console data. Retain measured results.
3. **P00-03 detail:** Build minimal visual/style inventory after screenshot: dark-surface coverage, heading contrast, duplicate CSS origin, hover behavior and mobile states. This is diagnostic only.
4. **P00-05:** Close the current-live-preview baseline when real browser visual/interaction evidence becomes available. Record local React/Vite as a separate optional source, not a prerequisite for auditing the live preview. Seek Phase 01 approval separately.

## Stop condition

**Phase 00 cannot be CLOSED** without a meaningful visual/interaction baseline of the verified *current live* portfolio. The optional local React/Vite artifact does not block treating the verified GitHub/Render preview as the target. Current code-only tasks may be marked VERIFIED within their limited scope. No production code was changed, and no Render deploy was initiated by this audit.

## 2026-10-13 — Follow-up verification (read-only, source-based)

**Purpose:** Continue without requesting user-controlled files that are unnecessary to audit the verified live portfolio. No product code, production branch or Render configuration was changed.

### Refreshed external evidence

- GitHub `main` is still `1198882ba38ec50a81551be03b7f7de7ee68aa23`.
- Render service `srv-daih6ntg1s2s73favnt0` still tracks `main`; latest reported deployment remains `dep-db6vsm3m8hqs73f4n65g` with provider status `live` at that commit.
- Read-only remote content fetch of the public Render URL **succeeded** and returned document title `Faisal Kader — MERN Full Stack Developer`, navigation/text and six unique image asset URLs. This proves readable public content through that fetch provider, not screenshot correctness, working links, decoded images or Core Web Vitals.
- Current local sandbox can run Chromium and has Python `playwright` installed, but local DNS lookups for the live site and GitHub fail; Playwright CLI is not installed. The remote browser automation connector's current state does not permit a run. Thus screenshots, computed styles, keyboard/touch interaction and performance recordings **remain untested**, rather than declared passed.

### Current source-level assertions verified from `main/index.html` and `main/mobile-nav.js`

| Check | Actual result | Classification |
| --- | --- | --- |
| Anchor IDs / fragment hrefs | IDs `home/about/skills/journey/projects/case/contact` exist; every internal fragment href has a matching ID in the same HTML | VERIFIED source structure; actual click/scroll behavior NOT TESTED |
| Image alt attributes | All 15 `<img>` tags declare `alt` | VERIFIED presence; alt *quality* and actual loading not evaluated |
| Contact form delivery | One `<form class="form">`, 4 form controls (3 input + textarea), button `type="button"`, no visible submission JS apart from unrelated `mobile-nav.js` | VERIFIED **no apparent submit path** in this published source; actual delivery NOT VERIFIED |
| Form labels | Four `<label>` tags, none with `for`; form controls have no names. Inputs have no verified label-ID association | VERIFIED source-level accessibility/collection defect; test accessibility tree before choosing repair |
| Mobile navigation | Creates accessible toggle with `aria-label` / `aria-expanded`; supports Escape and outside click | VERIFIED source; keyboard focus handling not found, should be tested |
| Motion | CSS transitions are present, but linked stylesheets have no `@keyframes`; no GSAP/ScrollTrigger or Motion script linked | VERIFIED source-level classification, not proof of visual experience |
| Typography/theme | Two large palette overrides follow original linked CSS; assess computed cascade and contrast in actual browser before rewrite | VERIFIED source structure; measured dark-pixel coverage UNKNOWN |

**Color contrast calculations for token pairs (theoretical opaque text/background, not measured use in page):**

- Teal `#08786F` on Midnight Ink `#162536`: **2.90:1**; **fails normal-text WCAG 4.5:1** and is below 3:1 large-text threshold.
- Mist Teal `#E1F3EF` on Ink: **13.51:1**.
- White `#FFFFFF` on Teal: **5.35:1**.
- Teal on Paper `#F6F8F7`: **5.01:1**.
- Ink on Paper: **14.56:1**.

Do **not** claim a site-level WCAG failure solely from a theoretical palette pair: identify where that exact pair is actually used in computed browser styles. These ratios inform the review gate, not a finished audit verdict.

### Phase 00 next read-only task

Obtain a true browser-level screenshot/interactive check using already available capabilities when they work. Do **not** buy credits, install third-party apps in production, ask for irrelevant ZIPs, or pretend a screenshot was captured. If browser capability remains unavailable, keep visual/performance gates `BLOCKED` with the exact limitation. Audit can continue from GitHub, Render and source data, but a full visual QA pass cannot be asserted.
