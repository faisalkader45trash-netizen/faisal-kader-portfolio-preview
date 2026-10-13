# Phase 01 — New Landing-First Hero v2 (Isolated Visual Reset)

**Date:** 2026-10-13  
**Status:** NEW ISOLATED PROTOTYPE BUILT / LOCAL BROWSER-TESTED / OWNER VISUAL REVIEW PENDING  
**Production status:** NO CHANGE TO `main` OR RENDER. Existing rejected P01-04 placement remains REJECTED.

## Why this reset was necessary

Owner pointed out the screenshot still looked exactly like the old design. That was correct: the previous turn updated a *critique/tracker*, not any visual file. Apologize and be explicit; do not claim a completed redesign when only documentation was written. This new prototype is an actually different HTML file, not the old dashboard with different text.

### Previous design — rejected
- A sample inquiry form, 5-step inspector and many buttons occupied the main Hero; portrait and identity were below.
- The first viewport read as an internal tool/dashboard, not a developer's public landing page.
- QA copy (“Source verified”, “Original hero assets retained”, “Local simulation”) polluted client-facing presentation.

### New design — created and inspected
- A light-first editorial landing composition with oversized display typography grounded in current Hero headline (“Modern Web Applications for Real Impact”), strong CTAs and original profile/portrait URL **in the first viewport**.
- Right hero: one flowing orbit/portrait art direction with four terse MERN technology labels, not a multi-field dashboard.
- Build Trace five-layer interaction moved to a **separate below-Hero section**, with one action-controlled story, source links and a compact conceptual-only disclaimer.
- No editable inquiry form, fabricated analytics, backend calls or unverified “live app” claim.
- Preserves current logo URL, original portrait URL, verified original GitHub/LinkedIn/email and public portfolio CTA destinations; no other production section/source changes.
- Uses the five established palette hex values and Manrope/Inter roles. Offline QA fonts displayed via fallbacks; Google Fonts and actual Cloudinary portrait/logo rendering not verified in the restricted browser.

## Actual new local artifact (not in GitHub)

`/mnt/data/faisal-portfolio-new-hero-v2.html` — standalone 27 KB HTML/CSS/JS with local-only stage switching. Created in conversation runtime **after** owner criticism. Screenshots `/mnt/data/faisal-new-hero-v2-{1440,1024,768,390,320}.png`. QA result `/mnt/data/faisal-new-hero-v2-qa.json`. These paths are LOCAL chat artifacts, not URLs under this repository. Do not describe the local prototype as a deployed change.

## Bounded verification

- Browser: locally available Chromium via Playwright `page.set_content`, external Google Fonts stylesheet removed **in offline screenshot copy only**, remote image loads blocked to avoid DNS errors; source HTML retains original URLs and font import.
- Five viewport initial run: 1440×900, 1024×768, 768×1024, 390×844, 320×720; **no horizontal overflow**, **no observed page errors**, **no observed POST**. Stage 4 (database) then stage 5 (admin) updated text/selected state in each.
- Mobile hamburger opening and Escape closing passed at 390px. Reduced-motion test showed only one manual stage progression rather than auto-playing the sequence.
- Screenshot critique revealed floating labels were cut at right edge. Updated positions and rechecked DOM bounding boxes at 1440/390/320: rightmost label ends at x=1403, 363, 302 respectively (all within viewport) and no horizontal overflow.
- Static post-change invariants checked: original logo and portrait URLs, case/social CTA hrefs, separate trace section, reduced-motion CSS, no form or POST-capable code path.
- The screenshot set is a **prototype** visualization, not a real portrait/font proof; production browser, field metrics, original page baseline and cross-browser testing remain BLOCKED/UNKNOWN.

## Review gate

**Do not implement in public repo yet.** Owner should open the *new* HTML and screenshots and decide whether the landing-first art direction is acceptable. If approved, update the previously written integration plan so Build Trace is a below-Hero section rather than dominant Hero form; seek **new separate code-change scope approval** and a later separate merge/deploy approval. The original P01-04 layout must never be reintroduced automatically.
