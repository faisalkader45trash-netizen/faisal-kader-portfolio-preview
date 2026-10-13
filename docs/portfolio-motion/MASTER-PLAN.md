# Faisal Kader — Signature Interactive Portfolio
## Final Master Plan v2.0 (approved for documentation and Phase 00 read-only audit)

- **Approved by owner:** 2026-10-13 (Asia/Dhaka)
- **Scope of current authorization:** save documentation on a separate branch; begin Phase 00 inspection only
- **Implementation approval:** NOT GRANTED
- **Production change / merge / deploy approval:** NOT GRANTED
- **Baseline GitHub `main` at approval:** `1198882ba38ec50a81551be03b7f7de7ee68aa23`
- **Public preview:** https://faisal-kader-portfolio-preview.onrender.com
- **Public preview source:** https://github.com/faisalkader45trash-netizen/faisal-kader-portfolio-preview
- **Status:** PLAN APPROVED / PHASE 00 IN PROGRESS

> The public portfolio is static HTML/CSS/JS, **not a MERN application**. The historical local `faisal-portfolio` React/Vite project is a distinct possible canonical implementation. Its latest source, tests and build must be verified before choosing an implementation target. Until resolved, do not implement animation or migrate stacks.

### Objective and target audience

Build a distinctive professional, accessible, responsive **full-stack developer portfolio** that explains business-problem-to-working-application thinking through a coherent interactive experience, and backs professional claims with implemented evidence. Primary audience: freelance clients; secondary audience: recruiters. Positioning: **MERN Full Stack Developer — Building Modern Web Applications**.

Success is not "maximum effects"; success is a memorable, credible experience with usable navigation, verified case studies and acceptable measured performance. Uniqueness is a proposed creative goal, not something that can be verified until alternatives are prototyped and reviewed.

### Non-negotiable boundaries

1. No unsolicited modification to the logo, identities, existing business-project repositories or external assets. Separate any proposed content change for explicit review.
2. Never present practice/tutorial work as professional client work; never present a planned application as shipped.
3. Never imply the static preview is a MERN app or its contact form delivers messages without actual send-path verification.
4. Preserve existing navigation and contact alternatives until a separately approved and tested change.
5. Keep a restrained modern developer aesthetic, not gaming/cyberpunk, particle spam, infinite glowing CTAs, text constantly moving or generic copied templates.
6. Use source-of-truth hierarchy: current local React source if accessible and current, current GitHub source, verified deployment/build/tests, then historical project documents. Do not assume the local React version is current.
7. Existing Lerventia five-color tokens are the current starting constraint: Ink `#162536`, Paper `#F6F8F7`, Teal `#08786F`, Mist `#E1F3EF`, White `#FFFFFF`. Change distribution first; any new palette requires another explicit approval.
8. Typography baseline: Manrope 600 headings; Inter 400 body; Inter 500 UI; Noto Sans Bengali for Bengali. Any monospace/code typography addition requires visual-direction approval.
9. Prefer CSS/SVG/IntersectionObserver/WAAPI for simple effects. Justify and verify added GSAP ScrollTrigger or vanilla Motion before adding dependencies. Do not migrate the static portfolio to React merely to install animated component kits.
10. All keyboard routes must stay usable; respect reduced-motion preferences; preserve meaningful content without animation; animation cannot obscure text or imply backend execution.
11. Every implementation phase requires **separate approval**, tracked branch/PR, measurable tests, visual review and rollout decision. No code merge or deployment without specific authorization.

### Execution and skills by phase

| Phase | Scope | Skills / systems to consult | Evidence & exit criteria |
| --- | --- | --- | --- |
| **00 — Baseline / source of truth** | Inspect Git state, static repo, local React access if available, current Render deploy; baseline visuals/mobile, functional paths, assets, performance, claims | GitHub/Render; `improve-animations`, `ui-ux-pro-max`, `playwright-cli`, `qa-only` when executable | Source-of-truth decision backed by access/results; baseline recorded with unknowns rather than guesses. Read-only. |
| **01 — Creative direction** | Two genuinely distinct visual prototype directions with motion storyboard; select one; document UX rationale | `frontend-design`, `impeccable`, `apple-design`, `design-motion-principles`, `ui-ux-pro-max`; Figma if needed | Approved storyboard/prototypes for desktop/mobile before coding; no copied components/assets |
| **02 — Theme foundation** | Refactor duplicated cascade with minimal change, light-first distribution of current five-color palette, typographic hierarchy, responsive surfaces | `ui-ux-pro-max`, `frontend-design`, `impeccable` | Contrast tests, before/after screenshots and no unapproved layout/content changes |
| **03 — Signature hero** | One unique interactive `Business Idea → Architecture → UI/API/DB → Working Application` explanatory motion and existing MERN cards; conceptual representation labeled as such | `animate`, `apple-design`, `find-animation-opportunities`, `animation-performance` | Meaning legible when static/reduced motion; pointer/keyboard/touch tested, smooth measured; no false live-app implication |
| **04 — Services and skills** | Selective interactive service cards and meaningful skill-stack relationship diagram; avoid decorative generic hover treatment | `emil-design-eng`, `find-animation-opportunities`, `review-animations`, reference-only 21st.dev catalog | Keyboard access, legible responsive states, no needless dependencies |
| **05 — Journey and verified case studies** | Scroll-progress development journey and accurate application architecture / evidence-led project presentations | `motion` for vanilla when justified, `design-motion-principles`, optional GSAP ScrollTrigger, `archify` for diagram reasoning | Content confirmed against separate business repository; demo vs real work distinctly labeled; scroll interaction tested |
| **06 — Contact and micro-interactions** | Mobile menu, CTA feedback, contact truthfulness and touch support | `mobile-native`, `apple-design`, `impeccable`, `review-animations` | No broken anchors; send behavior not implied unless tested; keyboard/touch/reduced motion |
| **07 — Final QA and controlled release** | Cross-browser/mobile, performance, accessibility, link/asset checks, regression and intentional rollback | `playwright-cli`, `break-ui`, `animation-performance`, `review-animations`, `qa-only`, `verification-before-completion`; Render | Explicit results for every gate; owner authorizes merge/deployment; post-deploy smoke check recorded |

### The signature narrative

A visitor can opt to explore a conceptual workflow: a business requirement is mapped to a simple architecture, then a UI, an API, and a database connect into an application preview. **It is an explanatory diagram** until backed by a specific verified application; do not show synthetic data as a production system. The hero may borrow design principles (not implementation/code/assets) from published Codrops and GSAP examples. The portfolio should not be continuously animating everywhere.

### Technology decision hierarchy

1. **Default:** native HTML/CSS/SVG + `IntersectionObserver` or Web Animations API; animate `transform` and `opacity` where possible.
2. **Conditional:** vanilla Motion when a real spring/interruptible gesture merits it; use version-pinned imports.
3. **Conditional:** GSAP ScrollTrigger when a prototype requires coordinated responsive scroll-scrubbing; assess pinning/scroll accessibility and load cost.
4. **Not a default:** React-only Magic UI/shadcn/21st.dev code, large WebGL/Three.js, Rive, autoplay video, Remotion. Need canonical-stack fit, prototype and dependency/performance review before adopting.
5. The `gpt-taste` skill may challenge template patterns; its random-layout recommendations are not binding design decisions.

### Quality gates and measurements

- A real baseline **must** be taken before optimizations. Record desktop/mobile viewport and method, route screenshots, console/network errors, touch/keyboard behavior, and asset failures.
- Test at minimum desktop (1440px), tablet (~768px), and phone (~390px); add actual-device verification for touch-sensitive interactions if hardware accessible.
- Text normal contrast at least **4.5:1**, large text **3:1**, relevant non-text control outlines **3:1** unless a justified WCAG exception; test actual computed colors, not token names alone.
- Support `prefers-reduced-motion`: do not require movement to understand content; provide static/low-motion alternative.
- Avoid animation of layout properties when a compositor-friendly technique yields equivalent result; profile with DevTools and, where possible, a mid-range device.
- Core Web Vitals goals at the 75th percentile, **not a claim of current measurements**: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1. Lab and field measurements must be labeled separately.
- For every phase, retain comparison screenshots, tests/results, verified source/commit SHA and explicit sign-off. No invented PASS statuses.

### Repeatable task cycle

1. Read tracker, decisions and current branch SHA; confirm task is not already done.
2. Verify canonical code and reproduce issue or baseline in read-only mode.
3. Write a small independent task plan with exact files, invariants, proposed motion values and tests; obtain phase/task approval before code edits.
4. Create isolated implementation branch; implement smallest testable feature. Update status to IMPLEMENTED only on actual commit.
5. Run mechanical checks and visual/interaction tests; log observed results. Mark TESTED only with evidence.
6. Independent review and owner sign-off; do not merge or deploy without separate authorization. Verify Render if authorized.
7. Update tracker and decisions, close only verified tasks; start next task **after** approved gate.

### Documentation contract

- `MASTER-PLAN.md`: approved scope, phases, constraints and acceptance gates
- `PHASE-TRACKER.md`: statuses, dependencies, evidence links and next action
- `RESEARCH-EVIDENCE.md`: official docs, external inspiration, source evidence, certainty and limitations
- `DECISIONS.md`: dated decision log, approval boundaries, unresolved questions
- Optional `PHASE-00-BASELINE.md`: read-only audit findings and verification outcomes

Documents are staged in `docs/portfolio-motion/` on the **documentation branch only**. A documentation branch is not the production branch; no merger/Render trigger is authorized by approval of this plan.
