# Final MERN Portfolio Architecture Design

Date: 2026-09-13
Branch: `feature/final-mern-portfolio`
Status: Design approved in principle; implementation pending plan checkpoint

## Goal

Convert the approved static portfolio preview into the final MERN portfolio application without redesigning the approved visual identity.

The existing `main` branch and current Render static preview remain untouched until the final MERN version is visually and functionally approved.

## Core Decisions

- Keep the same GitHub repository.
- Build the final application on `feature/final-mern-portfolio`.
- Use a monorepo layout with `client/` and `server/`.
- Frontend: React + Vite + Tailwind CSS + daisyUI.
- Backend: Node.js + Express.
- Database: MongoDB Atlas.
- Media: existing Cloudinary assets remain the source for logo, portrait, and technology icons.
- Contact form: Express API -> MongoDB persistence -> owner email notification.
- Preserve the current approved desktop/mobile visual design; do not invent a new design during conversion.

## Repository Strategy

Current root static files remain available as the visual reference during migration.

New application structure:

```text
client/
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    components/
    data/
    services/
    styles/

server/
  package.json
  src/
    server.js
    app.js
    config/
    routes/
    controllers/
    models/
    middleware/
    services/
    validators/

package.json            # root convenience scripts
README.md
```

The static preview files are not deleted during the migration branch. Cleanup happens only after the final React version is approved.

## Frontend Component Architecture

`App.jsx` composes the landing page in this order:

1. `Navbar`
2. `Hero`
3. `WhatIDo`
4. `About`
5. `Skills`
6. `Journey`
7. `FeaturedProject`
8. `Contact`
9. `Footer`

Reusable supporting components may include:

- `SectionHeading`
- `SocialLinks`
- `TechBadge`
- `PrimaryButton`
- `Tag`

Content that repeats or is easier to maintain as data should live in `src/data/portfolioData.js`, including navigation links, services, skill groups, journey items, technology metadata, and social links.

## Visual Fidelity Rules

The static preview is the visual baseline.

The following are frozen unless the user explicitly requests a change:

- signature-led Navbar branding
- Hero composition and copy
- portrait image, pose, and placement concept
- MERN floating cards
- `Code / Build / Grow`
- `Web Solutions for a Better Tomorrow`
- section order
- dark navy + electric blue visual identity
- card proportions and hierarchy
- Precision Tech Atmosphere background language
- Featured Project content structure
- Contact layout
- Footer branding
- mobile hamburger interaction

Tailwind should handle normal layout, spacing, typography, sizing, borders, responsive rules, and states.

A small custom stylesheet is allowed for visuals that Tailwind utilities do not express cleanly, especially pseudo-elements, orbit arcs, atmospheric halos, and complex background effects. Do not force those effects into unreadable utility strings.

Use daisyUI selectively for accessible primitives where it does not visually alter the approved design. The portfolio should not look like default daisyUI.

## Responsive Behavior

Target checkpoints:

- 1440px desktop
- 1280px desktop
- 1024px tablet/desktop transition
- 768px tablet
- 430px mobile
- 390px mobile

Desktop navigation remains inline.

At `<=900px`, navigation becomes the approved mobile state:

`Logo + Faisal Kader | Let's Talk | hamburger`

Hamburger opens a dark dropdown containing:

- Home
- About
- Skills
- Journey
- Projects
- Contact

The menu closes on navigation, outside click, Escape, and desktop resize.

Anchor scrolling must account for the sticky Navbar height.

## Backend Architecture

Express responsibilities:

- `/api/health` health check
- `/api/contact` contact submission
- JSON body limit
- server-side validation
- contact route rate limiting
- MongoDB connection
- email notification service
- production static serving of `client/dist`
- generic production error handling

MongoDB is used only where the product requires persistence. The first persisted feature is Contact Messages.

## Contact Form

The approved Contact Form architecture is defined in:

`docs/superpowers/specs/2026-09-13-contact-form-design.md`

Requirements remain:

- fields: name, email, subject, message
- server-authoritative validation
- MongoDB as source of truth
- owner email notification after persistence
- visitor address used as Reply-To, not authenticated sender
- loading, success, validation, and server-error states
- rate limiting
- no fake success state
- no CAPTCHA in the first release

## Production Deployment Architecture

Recommended production model: one Render Node web service for the final MERN application.

Build flow:

1. install server dependencies
2. install/build Vite client
3. Express serves `client/dist`
4. `/api/*` routes are handled by Express

Benefits:

- one public origin
- no production CORS complexity for the browser
- simpler environment-variable management
- one deploy represents the full portfolio
- frontend and API versions cannot drift independently

The existing Render static service remains live during development. A new final MERN web service should be created only after the feature branch passes build, responsive, and functional review. The existing static service is not removed until the user approves the replacement.

## Environment Variables

Server-side only:

```text
NODE_ENV=
PORT=
MONGODB_URI=
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
MAIL_FROM=
CONTACT_TO_EMAIL=
```

No credentials or secrets are committed.

If SMTP is replaced with a provider API, provider-specific secret names may replace the mail variables while preserving the same email-service interface.

## Testing Strategy

Frontend:

- component rendering for Navbar/Hero/Contact
- mobile menu interaction
- contact loading/success/error states
- navigation targets

Backend:

- contact validator
- contact persistence workflow
- email-service contract
- rate limiting
- route response behavior
- health endpoint

Build verification:

- client production build succeeds
- server starts with valid environment configuration
- root route serves the React application in production mode
- `/api/health` responds successfully

Visual verification:

- compare React implementation against approved static preview at all target widths
- no horizontal overflow
- no section-heading clipping below sticky Navbar
- no material regressions to frozen sections

## Migration Phases

### Phase 1 - Scaffold and Shell

Create the monorepo packages, Vite React frontend, Tailwind/daisyUI configuration, Express server shell, and root scripts. No visual redesign.

### Phase 2 - Navbar + Hero Conversion

Convert only Navbar and Hero first. Match the approved desktop and mobile screenshots before continuing.

### Phase 3 - Main Sections

Convert What I Do, About, Skills, Journey, Featured Project, Contact shell, and Footer section-by-section.

### Phase 4 - Contact Backend

Implement the approved MongoDB + email notification contact flow and wire the React Contact component to it.

### Phase 5 - Quality Pass

Accessibility, responsive verification, link behavior, asset loading, server errors, production build, and end-to-end Contact submission.

### Phase 6 - Deployment Review

Create a new Render web service for the final MERN branch/build only after verification. Compare it with the existing static preview. Replace/retire the static preview only after explicit user approval.

## Non-Goals During Conversion

Do not add these unless separately approved:

- admin panel
- blog
- authentication
- extra portfolio projects fabricated for visual fill
- analytics
- theme switcher
- new visual redesign
- new animations that materially change the frozen design
- contact-message admin inbox

## First Implementation Checkpoint

The first code-producing checkpoint contains only:

1. monorepo scaffold
2. React/Vite boot
3. Tailwind/daisyUI setup
4. Express health API shell
5. Navbar conversion
6. Hero conversion
7. responsive verification at desktop + iPhone 12 Pro Max width

Do not convert the remaining sections until this checkpoint is reviewed against the approved static preview.

## Acceptance Criteria

The final MERN migration is complete only when:

1. The portfolio runs from React rather than the static root HTML.
2. The approved visual design is materially preserved on desktop/tablet/mobile.
3. Mobile navigation matches the approved hamburger behavior.
4. All section navigation and social/contact links work.
5. Contact submissions are validated, stored in MongoDB, and trigger the owner notification attempt.
6. No secrets are committed.
7. Production client build succeeds.
8. Express production server serves the built client and API.
9. Responsive and functional audits pass.
10. The existing static production preview remains untouched until the user explicitly approves replacement.
