# Direction 04 — The Build Trace: Isolated Prototype QA

**Date:** 2026-10-13  
**Authorization:** Owner approved development and verification of an **isolated interactive Hero prototype only**. Explicitly prohibited production code, `main` branch or Render deployment changes.  
**Current status:** ISOLATED PROTOTYPE IMPLEMENTED + LOCALLY TESTED / OWNER VISUAL REVIEW PENDING  
**Deploy:** NONE · **Production:** UNCHANGED · **Phase 00 live browser audit:** STILL BLOCKED

## Artifact and testing boundary

- Main artifact: `faisal-build-trace-direction-04.html`, a **32 KB standalone HTML/CSS/JavaScript file** generated in the current conversation. Shared as a conversation download artifact, not a hosted or deployed application. The file is not committed to this repo in this task.
- Captured local Chromium screenshots: `faisal-build-trace-04-1440-desktop-mobile.png`, `faisal-build-trace-04-390-desktop-mobile.png`, `faisal-build-trace-04-validation-desktop.png`, `faisal-build-trace-04-admin-mobile.png` and an additional 320px viewport review.
- Executable QA script in current container: `verify_build_trace.py`; structured local result `faisal-build-trace-04-qa.json`. Artifacts belong to the conversation runtime; do not misrepresent these filenames as files checked into the GitHub repository.
- Original HTML uses only approved theme tokens `#162536`, `#F6F8F7`, `#08786F`, `#E1F3EF`, `#FFFFFF` with transparency; Manrope 600 / Inter 400–500 / Noto Sans Bengali requested through a Google Fonts import.
- Original portfolio logo retains the actual Cloudinary logo asset URL in the prototype with text-only fallback if it cannot load; no replacement agency branding or invented logo.
- The prior approved concept proposal and reference links remain at [PHASE-01-DIRECTION-04-PROPOSAL.md](./PHASE-01-DIRECTION-04-PROPOSAL.md).

## Implemented interactions (not production)

- **Five inspectable stages:** Customer UI → API route → Zod validation → MongoDB model → Admin view.
- **User-editable sample inquiry:** name, phone and business message. No live credentials or real customer data.
- **Local simulation:** the original route `POST /api/inquiries` is **represented but NEVER called**. No submitted customer data, network POST, authentication, MongoDB operation or message delivery is performed.
- **Local validation:** name 2–100 characters, phone 7–30, message 10–3000; invalid sample prevents moving from form to payload via `Simulate inquiry`. These are source-verified required-field constraints from the actual Zod controller, but the whole Zod validation schema is not implemented or executed here.
- **Evidence links:** per-stage URLs point to real `think-different-automation-mern` code at `InquiryForm.jsx`, `routes/index.js`, `inquiryController.js`, `Inquiry.js`, `admin/App.jsx`. Verified existence via connected GitHub reads. Code existence does not prove a deployed end-to-end implementation.
- **Controls:** stage buttons, Next/Previous, Run/Pause auto story, Reset, keyboard numbers 1–5 / arrows, reduced-motion alternative. After valid form simulation keyboard focus moves to stage 02.
- **Illustrated data path:** a single user-controlled sample request is reflected in the API payload, schema-shaped JSON, and simulated admin row; invalid data never appears as a successful stored record.

## Executed browser tests

**Environment:** local Chromium through Python Playwright. The environment blocks direct `file://` and live Render navigation; source was rendered with Playwright `page.set_content`. For offline QA screenshots only, the external Google Fonts `@import` line was removed from **the test copy in memory**, not from the exported HTML. The unavailable Cloudinary image URL was aborted in offline tests; no substitute logo asset used. Screen images thus show fallback fonts and brand text, **not confirmed Google Fonts/Cloudinary loading**.

| Check | Evidence observed | Outcome |
| --- | --- | --- |
| 1440 × 900 desktop | Hero and all five stages render; scenario changes and selected node tracked | PASS, LOCAL |
| 1024 × 768 | No horizontal overflow and same stage controls respond | PASS, LOCAL |
| 768 × 1024 | No horizontal overflow and same stage controls respond | PASS, LOCAL |
| 390 × 844 mobile | Stacked layout; no horizontal overflow; app/admin panels and buttons visible | PASS, LOCAL |
| 320 × 720 small mobile | Stacked layout; no horizontal overflow; buttons and fields remain reachable | PASS, LOCAL |
| API stage | Payload preview reflects editable local sample and evidence URL points to route source | PASS, LOCAL |
| Validation | Valid default shows expected rules; deliberately short name, phone, message are blocked with visible message | PASS, LOCAL |
| Database/admin | Schema example shows `status: New` only for valid sample; user-edited name appears in illustrative admin table | PASS, LOCAL |
| Reset | Clears edits and restores original sample values + first stage | PASS, LOCAL |
| Keyboard | Number key and ArrowLeft move stages; Tab reaches skip link, navigation, stage buttons and sample form | PASS, LOCAL basic behavior |
| Run/Pause | Starts paced stage progression; pausing prevents further automatic progression | PASS, LOCAL |
| Reduced-motion | With `prefers-reduced-motion: reduce`, Run does not auto-advance; manual inspection available; CSS entrance is minimized | PASS, LOCAL |
| Runtime errors | No observed Playwright `pageerror` in five viewport tests | PASS for observed test cases |
| Network safety | Captured **zero** `POST` or `/api/inquiries` requests while interacting with sample | PASS, LOCAL |

**Bug found and corrected during QA:** The offline test harness initially removed only part of the Google Fonts import because of semicolons in its URL, causing missing theme variables and incorrect first screenshots. Changed the offline QA filter to remove the whole CSS `@import` line only in test memory, then **re-ran** all tests; computed `#162536` Ink, `#F6F8F7` Paper and `#08786F` CTA were verified. The shipped HTML retains its font import. Also ensured the original remote logo is hidden if unavailable and focus advances with a valid sample.

## Limitations / remaining gates

1. Not tested on the actual Render site, as deployment was explicitly prohibited. **This is prototype QA, not Phase 00 live website QA.**
2. Externally downloaded Manrope/Inter/Noto Sans Bengali fonts and Cloudinary logo remain unverified in local offline screenshot tests.
3. Real phone touch performance, VoiceOver/NVDA/screen-reader experience, accessibility-tree audit, and network font/image decode remain unverified.
4. No FPS, Lighthouse, Core Web Vitals, cross-browser Safari/Firefox or real device performance measurement performed. Do not claim 60 FPS or WCAG conformance.
5. The site concepts are original presentation work informed by source; no claim that the full inquiry workflow works on production has been made.
6. Do not import into current preview, start Phase 02, alter existing sections, merge, or trigger Render until owner separately reviews and approves implementation scope.

## Next decision

Ask owner to review the **isolated fourth-direction interactive file** and choose: **approve the visual/story direction**, **request specific revisions**, or **reject**. A positive review is not permission to merge/deploy or modify the current portfolio's source. If approval occurs, document a minimal integration spec and separate tests, then request explicit implementation authorization.

**Git safety invariant:** all GitHub activity in this task is documentation-only under `docs/portfolio-motion-master-plan-v2`. No changes to `main`.
