# Build Trace — Live Integration Risk Register

**2026-10-13 · STATUS: PROPOSED, NOT MITIGATED · production approval: NOT GRANTED**

**Evidence:** [Phase 00 source audit](./PHASE-00-BASELINE.md); [isolated prototype QA](./PHASE-01-DIRECTION-04-PROTOTYPE-QA.md); verified GitHub `main` at `1198882ba38ec50a81551be03b7f7de7ee68aa23`. Risks are forecasts, **not measured current user impact**.

Severity = CRITICAL / HIGH / MEDIUM. Probability is an estimate (HIGH/MEDIUM/LOW). **BLOCKER** means stop until tested mitigation or explicit accepted exception.

| ID | Risk and verified basis | Severity / likelihood | Proposed mitigation | Acceptance gate |
| --- | --- | --- | --- | --- |
| R01 | CSS cascade conflict: 14 linked sheets, two palette override files totalling 94,708 source characters; global `.hero/.heroart` styles | HIGH/HIGH | `#build-trace`-scoped CSS, no global `body`/`:root`/generic `.card` selectors; separate theme refactor | Real computed style + five-width screenshots, unchanged non-Hero styling — BLOCKER |
| R02 | Branding lost: existing `.heroart` contains Cloudinary `Hero_image.png` + four MERN floatcards | HIGH/MEDIUM | Owner approves detailed placement preserving original portrait, card/icon assets, headline/CTAs | Before/after owner visual approval, URL inventory — BLOCKER |
| R03 | False backend claim: concept resembles a working form/database | CRITICAL/MEDIUM | Visible sample-only disclaimer, no form `action`, no fetch/POST/beacon; source links describe code existence, not live integration | Network log zero submissions, inspected copy — BLOCKER |
| R04 | Global shortcut conflict: standalone prototype listens on `document`, existing `mobile-nav.js` handles Escape | HIGH/HIGH if copied verbatim | Component-only keyboard handler, no arrows/1–5 while editing; preserve existing nav script | Input caret + Escape/mobile navigation regression — BLOCKER |
| R05 | Small-screen overflow: interactive five-stage graphic plus old portrait/cards | HIGH/MEDIUM | Mobile single-column and no fixed chooser, 44px tap goals, safe 200% zoom | 1440/1024/768/390/320 and zoom screenshots; no overflow — BLOCKER |
| R06 | Involuntary/distracting motion | HIGH/MEDIUM | No initial autoplay; Run/Pause/Reset; reduced-motion static alternative, transform/opacity only | Browser reduce emulation; all meaning available manually — BLOCKER |
| R07 | New keyboard/accessibility regression on a site with pre-existing semantic gaps | HIGH/MEDIUM | Accessible stage names/aria, labeled demo fields, visible focus; track pre-existing contact/skip link separately | Explorer keyboard and accessibility-tree test — BLOCKER |
| R08 | Added JS/CSS slows existing site; no live baseline available | HIGH/MEDIUM | Minimal native CSS/JS, no GSAP/WebGL, long-task/CLS baseline-before-after | Lab data in same browser/device; unresolved baseline labelled BLOCKED — release BLOCKER |
| R09 | Source link/code claim drift from Think Different MERN repo | MEDIUM/MEDIUM | Restrict proof to five verified actual files, re-check SHA/links before integration and release | URLs 200 and route/controller/schema/admin assertions — BLOCKER for core proof |
| R10 | Color contrast failure: Teal on Ink is ~2.90:1 for opaque pair | HIGH/MEDIUM | Light-first Ink/Paper, Teal/Paper or White/Teal for text; test computed usage | WCAG thresholds 4.5:1 normal, 3:1 large/control where applicable — BLOCKER |
| R11 | Render auto-deploy of `main` commits, PR previews off | CRITICAL/MEDIUM | Implementation branch only; merge/deploy requires new **separate** owner approval + rollback SHA | Diff and deploy SHA inspected, release gate approved — BLOCKER |
| R12 | User sample reflected into JSON/admin preview could lead to XSS | HIGH/MEDIUM | `textContent`/escaped attributes, no untrusted `innerHTML`, no localStorage | Script-string adversarial input remains inert — BLOCKER |
| R13 | External Google Fonts/Cloudinary unavailable in offline QA | MEDIUM/HIGH in current tool runtime | Keep existing URLs, fallback text, image intrinsic sizing; verify on reachable browser | Font/image requests and screenshots; UNKNOWN if unreachable |
| R14 | Scope creep into site-wide theme, contact form, React migration | HIGH/MEDIUM | Exact touched-file allowlist, independent approved Phase 02/06 tasks | Git diff review; no unrelated edits — BLOCKER |
| R15 | Architecture story obscures business outcomes for clients | MEDIUM/MEDIUM | Lead with visitor/business outcome, optional 5-stage exploration and verifiable case study CTA | Owner comprehension/visual review — APPROVAL GATE |

## Decision and verification protocol

1. **Before any code:** visual placement showing retained images/cards + test matrix approval + separate scope authorization. Direction 04 *design approval* is not code approval.
2. **Before merge:** block on all CRITICAL/HIGH unresolved gates. Record executed test results, source SHA, browser version, screenshots and owner's review; no guessed PASS.
3. **Before live VERIFIED:** separately approved merge, Render deploy SHA confirmation and live public browser smoke test. If blocked, state `DEPLOYED / LIVE QA PENDING`, not `VERIFIED`.
4. **Rollback:** main commit auto-publishes. Preserve pre-merge SHA, revert plan and owner rollback authority. The explorer performs no database migration or writes.
5. **Separate debt:** pre-existing contact-form delivery/labels and global CSS consolidation do not become "fixed" merely because this Hero plan is implemented.
