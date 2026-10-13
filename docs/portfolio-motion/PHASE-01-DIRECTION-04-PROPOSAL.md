# Phase 01 — Direction 04 Proposal: THE BUILD TRACE

**Status:** PROPOSED — AWAITING OWNER DIRECTION APPROVAL  
**Date:** 2026-10-13  
**Scope:** Hero-level creative direction only; implementation and release NOT APPROVED  
**Branch:** `docs/portfolio-motion-master-plan-v2` (documentation only)

## 1. Research input (actual three prototype source + desktop/mobile images)

The source inspected was the attached `faisal-hero-motion-directions.html` and six `faisal-direction-{1,2,3}-{1440,390}.png` screenshots, not a simulated recollection.

| Prior concept | Evidence-backed strength | Specific weakness / limit | Contribution to new direction |
| --- | --- | --- | --- |
| Signal | `data-stage` five-step workflow with selective explanation and play sequence; easy mental model | Five separate generic stages and a large boxed diagram; a user may not see a working application result; on 390px, comparison picker overlays prototype card | User-controlled **one-flow trace**, not broad abstract timeline; no forced autoplay |
| Atlas | Selectable `data-node` architecture layers; reveals why UI/API/business rules/database exist | Large editorial hero makes architecture mostly below fold; dotted map is descriptive but does not show real cause/effect | Let a single user action trigger a **causal, inspectable** architecture path |
| Studio | `data-product` concept-switcher changes app viewport and shows plausible operational UI | Preview includes illustrative counts and bars, which can be mistaken for real customer data; selects a product *type*, not how it works | Visual **before/after application state**, grounded in real code, not fake analytics |

The screenshots demonstrate layout directions, not empirical performance. The previous local prototype interaction tests were on isolated pages, not the deployed portfolio.

## 2. Original fourth direction

**Name:** THE BUILD TRACE  
**Signature thought:** *"One request. A complete system behind it."*  
**Narrative:** A potential client chooses one familiar business need (e.g., a service inquiry) and sees a single concrete journey from user action to implementation responsibility to the management view, with source-code evidence at each step.

**Why different from mixing three sections:** The hero is **one interactive product trace**, not a process widget + architecture diagram + fake dashboard. The visitor's **same sample request** persists as the focal object while the view changes; every visible UI layer exists because a prior step made it necessary. The interaction's purpose is explaining engineering, not decorative delight.

**Canonical scenario for initial prototype:** "A business visitor submits a service inquiry" (SIMULATED IN THE PORTFOLIO ONLY; never sends a real message). A single sample inquiry with obviously sample data illuminates:
1. **Customer interface**: what user sees and enters;
2. **API request**: which endpoint accepts it;
3. **Validation and rules**: where the input is checked;
4. **Database record**: what schema/state is represented;
5. **Admin review**: how an authorized team can view inquiry records.

**One interaction:** Click `Explore how it works`; the sample UI updates, a highlighted path travels across one diagram, and a proof drawer shows concrete verified repo files. Visitors can click any stage to inspect it, pause/restart the explanation and open the **real portfolio case study**. No live backend is called.

## 3. Real code evidence found (separate business project)

All references are in `faisalkader45trash-netizen/think-different-automation-mern`, connected GitHub repository **as source files only**:

- [client/src/components/contact/InquiryForm.jsx](https://github.com/faisalkader45trash-netizen/think-different-automation-mern/blob/main/client/src/components/contact/InquiryForm.jsx): React inquiry form; `fetch` POST to `/inquiries`, supports error fallback.
- [server/src/routes/index.js](https://github.com/faisalkader45trash-netizen/think-different-automation-mern/blob/main/server/src/routes/index.js): `POST /inquiries` and authenticated `GET /inquiries` routes.
- [server/src/controllers/inquiryController.js](https://github.com/faisalkader45trash-netizen/think-different-automation-mern/blob/main/server/src/controllers/inquiryController.js): Zod validation and `Inquiry.create`; no runtime execution verified.
- [server/src/models/Inquiry.js](https://github.com/faisalkader45trash-netizen/think-different-automation-mern/blob/main/server/src/models/Inquiry.js): Mongoose Inquiry schema; `New`, `In Progress`, `Closed` states.
- [admin/src/App.jsx](https://github.com/faisalkader45trash-netizen/think-different-automation-mern/blob/main/admin/src/App.jsx): `Inquiries` admin data table reading `/inquiries`.
- [README.md](https://github.com/faisalkader45trash-netizen/think-different-automation-mern/blob/main/README.md): documents local server/MongoDB requirements and public/admin setup.

**Verification classification:** FILES/ROUTES EXIST IN THE CURRENT REPOSITORY. Not evidence that full production request-to-admin data delivery has passed integration tests or a deployed live test. No real inquiry is submitted by a portfolio animation.

## 4. Visual system proposal

- **Light-first field:** Soft Paper `#F6F8F7` page background; Pure White `#FFFFFF` simulation canvas; Mist Teal `#E1F3EF` state highlight; Ink `#162536` type and ONE restrained inner technical surface; Teal `#08786F` active links and traced request path. Do not change existing brand logo.
- **Typography:** Manrope 600 for headline/title and Inter 400/500 for explanation/action. Use monospace only in real code labels *after* separate review; not a full neon fake terminal.
- **Desktop hierarchy:** Left editorial copy + one useful CTA (roughly 40%); right interactive architecture/application viewport (roughly 60%); slim proof strip below displaying `Source verified` with links and `Live integration unverified` label.
- **Mobile:** Headline and CTA above; one stage at a time in a single column; state indicator and static step buttons remain reachable. No fixed picker covering meaningful content. No horizontal overflow or mandatory drag.
- **Cards:** Cards represent actual information stages (front-end, API, validation, storage, admin). They don't float randomly; the motion follows the sample request. Use one subtle depth change on active stage, not global 3D tilts.

### Interaction/storyboard

| Trigger | Visible motion / state | User benefit | Verification needed |
| --- | --- | --- | --- |
| Initial visit | A very brief reveal of title then stopped, no infinite loops | Readability and calm brand tone | Measured first paint, reduced motion |
| `Explore how it works` | A request token moves `Customer UI → API → Validation → Database → Admin` while details update | Understand end-to-end development | All stages follow correct code references |
| Choose a layer | Instant accurate new detail with 180–260ms local opacity/transform transition | Control the explanation | Keyboard/touch/reduced-motion/aria state |
| `View source` | Opens a real link to the selected GitHub source file | Ability claims supported by inspectable code | Open URL/link checks |
| `View case study` | Anchor to current `#case` / projects content; no fake deploy claim | Business evidence, not just visual effects | Anchor and project facts verified |
| Reduced motion | No moving token; selected stage changes immediately with persistent visual indicator | Accessible equivalent | CSS media query and real browser |

**Motion budget:** Interaction feedback generally 160–260ms with compositor `transform` and `opacity`; at most one user-triggered explanatory sequence of approximately 1.4–2.2s with pause/replay, no continuous auto-run. Final timing and frame quality are hypotheses until prototype recordings/real-device verification.

## 5. Originality and truth constraints

- Reject another SaaS hero with 5 isolated floating cards. Instead, build one visible *causal data journey* whose nodes change because the user chose a business action.
- Do not show simulated chart values as analytics from real clients. Sample scenario and sample records must be labeled `Conceptual interactive demonstration`.
- Existing case study remains separate and honest: source-verifiable code does not imply production deployment, business adoption or real customer submissions.
- Do not change the portfolio's current logo, published content or section structure during the concept approval stage.
- This approach can be implemented in static HTML/CSS/JS as an isolated progressive enhancement; GSAP/WAAPI only after the actual interaction budget is tested.

## 6. Acceptance gate and next step

**Current decision required:** Owner reviews the single new direction and decides **APPROVE CONCEPT**, **REQUEST REVISIONS**, or **REJECT**.

If approved: build an **isolated standalone clickable Direction 04 prototype** and test desktop/mobile, keyboard, reduced motion, sample-data labelling, source links and browser errors. This is distinct from approval to modify production code. The existing Phase 00 live-site browser baseline remains unverified and must be completed before actual release decisions.

**Do not implement on `main`; do not merge, deploy, purchase assets, install a React-only library or submit a real inquiry.**
