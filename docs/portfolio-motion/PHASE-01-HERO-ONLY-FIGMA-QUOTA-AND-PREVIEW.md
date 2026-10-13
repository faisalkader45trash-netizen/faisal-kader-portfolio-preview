# Hero-Only Design Study — Hybrid Direction (Figma Starter Blocker)

**Date:** 2026-10-13
**Status:** STANDALONE HTML HERO TESTED / Figma editable Hero NOT CREATED / OWNER REVIEW PENDING
**Live code change:** NONE

## Authorized scope

Owner asked to build **only the first Hero/home screen** of the approved hybrid portfolio, before creating lower sections. Previous Figma-first workflow and five-color palette remain the goal. Do not implement full site or deploy from this study.

## Verified assets and content

GitHub current public static repo `faisalkader45trash-netizen/faisal-kader-portfolio-preview/main` was read. Hero carries actual site URLs:
- Original portrait `https://res.cloudinary.com/yqhqtpgv/image/upload/v1789209763/Hero_image.png`; Cloudinary `public_id=Hero_image` verified as a 1254×1254 PNG.
- Original logo `https://res.cloudinary.com/yqhqtpgv/image/upload/v1789235486/Logo_FK.png`; Cloudinary `public_id=Logo_FK` verified as a 1254×1254 PNG.
- Original React, Node.js, Express, MongoDB SVG URLs from current Hero markup.
- Original GitHub, LinkedIn, Email and `#projects` / `#contact` destinations.
- Approved brand tokens `#162536`, `#F6F8F7`, `#08786F`, `#E1F3EF`, `#FFFFFF`. Manrope/Inter/Noto Sans Bengali requested. Existing featured work `Think Different Automation` is shown as `In development`, not as completed work.

## Figma Starter Free limit: actual error

The user's connected Figma account has `Starter` tier and `View` seat. An earlier call successfully created Figma Draft `https://www.figma.com/design/PqGbQ237xUVFsbQQbZIukw`, five editable swatches and five bound color variables, proving limited Figma editing was possible.

**While starting the Hero**, the `use_figma` tool returned the exact failure:

> You've reached the Figma MCP tool call limit on the Starter plan. Upgrade your plan for more tool calls.

Thus **no editable Figma Hero frames were created**. Do not claim Figma Hero exists or request paid upgrade without owner decision. The pre-existing Figma file contains only the palette test/foundation.

## Actual fallback deliverable (conversation attachments only)

To keep work moving without using paid credits, a **standalone HTML/CSS/JS Hero-only preview** was created at `/mnt/data/faisal-hero-figma-target-v1.html` (SHA-256 `28e3fb0648bcc7afcda69f19d9d3e4839ff80b51ba5128a396e16e5e33614770`).

Design: dark-luxury midnight-ink Hero, oversized Manrope editorial title, white/Mist contrast, small authentic case-study strip, user's portrait from exact Cloudinary URL, original four logos as orbit chips, restrained intro and floating motion, responsive nav.

**The approved full-page AI mockup is a visual reference, not embedded/flattened into the HTML deliverable.** No extra services, fake testimonials, invented client numbers or non-existent resume CTA included. Only Hero/top navigation created.

## Reproducible local checks

Local Chromium/Playwright `page.set_content` loaded the same standalone HTML with external Google Fonts import removed **in screenshot test memory only**, and network image requests blocked. Recorded screenshots and JSON in this conversation: `faisal-hero-figma-target-v1-{1440,1024,768,390,320}.png`, `faisal-hero-figma-target-v1-qa.json`.

- Five viewport widths 1440, 1024, 768, 390 and 320: **no horizontal overflow**.
- `main.hero` exists once; four orbit tech chips exist.
- Mobile menu opens with updated `aria-expanded`, closes on Escape.
- No observed browser `pageerror` or POST requests in these checks.
- Reduced-motion setting suppresses CSS entrance/floating animation.
- Verified the primary/secondary links point to actual live portfolio anchors.

**Limitations:** All screenshot tests use fallback font and fallback FK portrait/tech marks. They **do not prove actual Cloudinary image decoding, true user portrait crop, Google Fonts loaded, mobile touch device behavior, Figma visual fidelity, or production performance**. The HTML retains the original URLs for viewers with internet access; whether they load from the user's client was not tested. No real live website screenshot captured.

## Next gate

Owner inspects the standalone Hero before Figma import or site implementation. Once Figma MCP tool calls are available again, re-create this *approved* Hero as editable Figma layers/components and compare with the approved full-page hybrid mockup; do not claim conversion done yet.

**No `main` merge, production code edit, Render deploy, paid Figma AI call or upgrade.**
