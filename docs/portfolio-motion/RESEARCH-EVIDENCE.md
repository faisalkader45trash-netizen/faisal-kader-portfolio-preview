# Portfolio Motion — Research and Evidence Register

**Evidence recorded:** 2026-10-13; sourced from GitHub/Render read-only connector responses, historical project handoff files and official public documentation. **This is not a completed visual benchmark or an empirical speed test.**

## 1. Primary project systems (verified on 2026-10-13)

| Evidence | Result | Provenance and confidence |
| --- | --- | --- |
| Public repository | `faisalkader45trash-netizen/faisal-kader-portfolio-preview`; default `main` | GitHub `get_repo` — VERIFIED |
| Baseline `main` commit | `1198882ba38ec50a81551be03b7f7de7ee68aa23` | GitHub commits API — VERIFIED |
| Deployment service | Render static site `srv-daih6ntg1s2s73favnt0`, source repo above, branch `main`, `autoDeploy=yes` | Render `get_service` — VERIFIED |
| Preview URL | https://faisal-kader-portfolio-preview.onrender.com | Render service metadata — VERIFIED service URL, not substitute for browser smoke-test |
| Latest deployment | `dep-db6vsm3m8hqs73f4n65g`, status `live`, commit `1198882` | Render `list_deploys` — VERIFIED provider status |
| Public preview stack | `index.html`, `mobile-nav.js`, CSS stylesheets; no app/backend entrypoint in this repo tree | GitHub root tree / file inspection — VERIFIED for this public repo |
| Historical React/Vite app | Windows path in `01_PROJECT_MASTER.md`, `05_SOURCES_ASSETS.md` | Historical reference ONLY; currently inaccessible here — UNKNOWN |
| Public preview identity | Static marketing portfolio presenting MERN skills | VERIFIED from source; **not proof the preview is a MERN application** |

### Source hierarchy / reconciliation rule

Current accessible code, Git provider state and Render deployment take precedence over 2026-10-06 backup snapshots. The snapshots describe a separate local React/Vite application which may be the intended canonical implementation. Do not suppress that ambiguity: investigate access to the local repo first. Source-level findings below apply to the **public preview** only.

## 2. Animation, visual and accessibility research (source-backed guidance; applicability proposed)

| Source | What was verified | Potential use | Limitations |
| --- | --- | --- | --- |
| GSAP official ScrollTrigger docs: https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | API supports triggered/scrubbed/pinned animation; guidance on pinning and measuring | Phase 03/05 coordinated explanatory scroll story **if simpler native solution insufficient** | No library installed or live performance measured in this audit |
| Motion official vanilla quick start: https://motion.dev/docs/quick-start | Motion supports vanilla HTML/SVG via `animate`, `scroll` and module imports | Conditional spring/interruptible gesture in static stack | Pin version and test dependency cost before use |
| Motion animate API: https://motion.dev/docs/animate | `animate` supports native HTML/SVG including small mini option | Compare WAAPI-based implementation vs library | Not proof that a specific motion works on our page |
| Core Web Vitals official guidance: https://web.dev/articles/vitals | LCP 2.5 s; INP 200 ms; CLS 0.1, 75th percentile | Performance budgets/verification | Goals only. No measured current values |
| MDN `prefers-reduced-motion`: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion | CSS query for user reduced motion preferences | Every phase of motion | Must test actual rendered fallback |
| W3C WCAG understanding page: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html | Contrast text minimum guidelines | Theme and states | Actual computed contrast not tested yet |
| Eduard Bodak published implementation walkthrough: https://tympanus.net/codrops/2025/07/29/built-to-move-a-closer-look-at-the-animations-behind-eduard-bodaks-portfolio/ | Article details scroll-driven 3D flip cards, pointer cards, circular scroll choreography and tradeoffs | Inspiration for **original** floating MERN cards | Example is not a drop-in component; do not copy visuals/code |
| Codrops typography inspiration: https://tympanus.net/codrops/2023/01/18/on-scroll-typography-animations/ | Text animation techniques demonstrated in editorial examples | Phase 03 headline; carefully limit animated words | Marketing inspiration, not performance evidence for our site |
| 21st.dev catalog: https://21st.dev/ | Search returned metadata for floating-card gallery, animated stepper, 3D card carousel | Concept comparison / interaction inventories | React/shadcn-centric examples; metadata is **not** proof of accessibility, performance, compatibility or licensing; no paid component source fetched |

## 3. Available skills read or identified (not all executed)

- `skills://plugins/superpowers/writing-plans` — approved scope to actionable plan/tracker tasks.
- `skills://improve-animations` and `skills://find-animation-opportunities` — **read-only** motion reconnaissance and opportunity filter.
- `skills://ui-ux-pro-max` — accessibility, interaction and icon/motion catalog checks; dataset counts are catalog metadata, not usability validation.
- `skills://design-motion-principles`, `skills://review-animations`, `skills://apple-design`, `skills://emil-design-eng` — craft, physics, reduced motion and intentional-motion review.
- `skills://frontend-design`, `skills://impeccable`, `skills://gpt-taste` — challenge generic visuals and verify design direction.
- `skills://motion`, `skills://animate`, `skills://animation-performance` — choose minimum suitable implementation engine and profile real device.
- `skills://mobile-native`, `skills://playwright-cli`, `skills://break-ui`, `skills://plugins/gstack-workflows/qa-only` — responsive, browser and edge-case testing **when runtime supports it**.
- `skills://magic-ui`, `skills://shadcn` and 21st.dev catalog — **reference-only** until canonical framework is verified. Avoid unnecessary React dependency.
- `skills://archify` — optional architecture-diagram reasoning for case study; not a required build dependency.
- Figma integration and 21st.dev MCP were available; a user-approved Figma file and actual production adapter are separate tasks.

**No MotionScore result, Lighthouse score, Playwright trace, real-device recording, final screenshot comparison, or component installation has been generated by this research.** Explicitly request/record those in Phase 00 or release testing.

## 4. Hypotheses needing actual tests

1. **Heavy dark treatment:** The 2026-10-13 public preview has cascading dark backgrounds even though a light-paper token exists. Inspect computed styles and representative screenshots before choosing precise remediation. Source-only evidence supports the concern but cannot measure user perception.
2. **Duplicated CSS rules:** Original stylesheets plus two `lerventia-typography-palette-*.css` overrides may cause cascade complexity and brittle styles. Diff/coverage and computed style test needed before deleting anything.
3. **Animations missing:** A source sweep found no `@keyframes` in sampled CSS; transitions exist, especially hover/mobile menu. Classify as *limited on-scroll choreography*, not literally "no motion"; check JS/browser before concluding.
4. **Contact form:** Public `index.html` has a `Send Message` button with `type="button"` and `mobile-nav.js` as only external script; no submit handler is evident from this source. Do not claim send delivery until verified.
5. **Portfolio claims:** Text such as "scalable" and project database claims need evidence against relevant code/tests/deployment before approved content changes.

## 5. Rejection checklist / originality

- Reject arbitrary sparkles, particle overload, automatic repeating animated text, excessive tilt on every card, scroll hijacking, fake code typing implying a deployed backend, copied project demos.
- Reject unmeasured performance claims ("60 fps everywhere", "award-winning", "best of the best") or source-marketing claims ("production-ready") without executing tests.
- Prefer one bespoke transformation motif, meaningful controlled interaction, progressive enhancement, and direct evidence of real work.
