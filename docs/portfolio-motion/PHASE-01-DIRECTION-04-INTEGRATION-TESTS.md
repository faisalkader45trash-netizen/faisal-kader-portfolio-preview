# Build Trace — Integration Test Matrix

**Status: NOT RUN — integration code is NOT implemented.** The prior 5-viewport PASS concerns only the isolated standalone prototype. It is **not** a live or integrated site test. **User's new approval to edit production code is REQUIRED.**

### Proposed future commands (after code approval only)

```bash
python3 -m unittest discover -s qa/build_trace -p 'test_*.py' -v
python3 -m http.server 8765
# second shell, with dev-only Python Playwright installed:
python3 qa/build_trace/browser_smoke.py --url http://127.0.0.1:8765
```

Test files/commands are *planned*, not yet present in the repository. Capture browser/OS version, viewport, reduced-motion settings, test output, screenshots, network/console logs, exact commit and executed date.

| ID | Priority | Reproducible scenario and expected result | Evidence type |
| --- | --- | --- | --- |
| T01 | P0 | Exactly one `#build-trace` under `#home`; original sections `#home/#about/#skills/#journey/#projects/#case/#contact` and CTA targets preserved | Source DOM + anchor click |
| T02 | P0 | Cloudinary original logo, portrait, four MERN icon URLs retained **and visible** in owner-approved layout | URL diff + screenshots |
| T03 | P0 | Five stage buttons (UI/API/Validation/Model/Admin), one selected `aria-pressed=true`, stage text/proof updated | Browser stage sequence |
| T04 | P0 | Local name/phone/message values propagate accurately to sample JSON/schema/admin example; Reset restores original sample | DOM/JSON assertions |
| T05 | P0 | Invalid name <2, phone <7, message <10 blocks `Simulate inquiry`; valid values progress to API preview | Invalid/valid matrix |
| T06 | P0 | Values `<img src=x onerror=alert(1)>`, quotes, brackets render inert; no script execution | XSS adversarial test |
| T07 | P0 | Interacting with entire explorer sends **zero** API POST/fetch/beacons, especially `/api/inquiries`; page displays `Conceptual demo — nothing is sent or stored` | Network intercept + static grep |
| T08 | P0 | Proof hrefs reach verified GitHub files: `InquiryForm.jsx`, `routes/index.js`, `inquiryController.js`, `Inquiry.js`, `admin/App.jsx` | Href/source check |
| T09 | P0 | With JS disabled, core content, sample-only explanation and existing social/CTA links remain visible | JS-disabled screenshot/DOM |
| T10 | P0 | Existing mobile menu opens/closes, Escape returns focus; global shortcuts do not steal arrow keys in text inputs | Keyboard navigation sequence |
| T11 | P0 | `prefers-reduced-motion: reduce` disables autoplay; manual stage buttons remain available and readable | Emulation + computed styles |
| T12 | P0 | Run, Pause, Reset, manual interruption, final-stage restart, repeated rapid clicks leave valid state with no leaked timers | Browser timed actions |
| T13 | P0 | Explorer fields have accessible labels; errors/announcements are useful and not noisy; focus visible and logical | Accessibility tree/manual |
| T14 | P0 | Every rendered relevant text pair meets >=4.5:1 normal / >=3:1 large; indicators >=3:1 where applicable | Computed contrast record |
| T15 | P0 | No horizontal overflow at 1440×900, 1024×768, 768×1024, 390×844 and 320×720; content usable at 200% zoom | Screenshots + scrollWidth/clientWidth |
| T16 | P0 | No mutations outside approved Hero CSS/JS/index and QA files; `mobile-nav.js`, contact form, project content intact | Git diff and regression snapshots |
| T17 | P0 | Before authorized release `main` and Render SHA are recorded; no merge/deploy without distinct approval | Repo/Render provider read |
| T18 | P0 | **After** separately approved release, actual Render page loads assets, stage controls work, no data POST, correct anchor links and reduced motion | Live browser + provider deploy SHA |
| V01 | Review | Desktop/mobile Hero retains brand portrait, MERN imagery, headline and existing CTA with approved exact placement | Owner visual sign-off |
| V02 | Review | Only five brand colors; original font roles (Manrope, Inter, Bengali where needed) verified with computed fonts | Screenshot/font load data |
| V03 | Review | Native transform/opacity transitions restrained, no forced auto-start, screen-reader motion equivalent | Motion review/profiling |
| V04 | Review | Google fonts and Cloudinary assets load or documented fallback; failures not hidden | Browser network and screenshots |
| P01 | Performance | Original live page baseline and integrated local version measured under comparable browser/devices | Lighthouse/traces; report UNKNOWN if not measured |
| P02 | Performance | Animated frame pacing/long tasks/CLS measured; reject obvious jank or regression | Browser profiler/real phone when available |
| P03 | Performance | Field Core Web Vitals goals (not measured results): LCP <=2.5s, INP <=200ms, CLS <=0.1 at p75 | Field analytics if available |
| QA01 | Release | Implementation PR compare is limited to approved files; image, typography, nav, case studies preserved | PR compare + checklist |

### Release gates

**Gate A — before code:** owner separately approves the exact modified-file list, original asset layout, Phase 02 theme dependency and test obligations. **No approval => no implementation branch/code edits.**

**Gate B — before merge:** every P0 integrated-build test run with observed PASS, or a documented failure/exception explicitly approved by owner; no hidden FAIL or invented browser PASS.

**Gate C — before deployment:** owner separately approves a *specific reviewed commit/PR* merge to `main` and acknowledges Render auto-deploy. Record the rollback SHA.

**Gate D — after approved release:** verify actual Render deployment commit and public site in browser; never call live VERIFIED if browser/test evidence unavailable.

### Existing unrelated issues are not resolved by this feature

Current published contact `Send Message` has no evident handler, contact form labels lack ID/for associations, and current page lacks main/skip-to-content landmarks. These are separate Phase 00/06 tasks requiring scope review; do not silently add fixes to this integration.

### Evidence package at each gate

Task ID + code commit, exact command/output, original site vs integrated screenshots at five sizes, no-POST network log, keyboard/reduced-motion record, source-proof URL check, computed text contrasts, console/asset loads, bug/unknown list and owner sign-off. Record **SOURCE VERIFIED**, **LOCAL TESTED**, **LIVE VERIFIED** distinctly.
