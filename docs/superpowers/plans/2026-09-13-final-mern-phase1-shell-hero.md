# Final MERN Phase 1 Shell + Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the final MERN monorepo scaffold and reproduce the approved Navbar + Hero in React without changing the current `main` static preview.

**Architecture:** Keep the existing root static files as migration references while adding a `client/` Vite React application and a `server/` Express application on `feature/final-mern-portfolio`. The first visual checkpoint renders only Navbar + Hero, uses Tailwind CSS + daisyUI for normal layout/states, and a small custom stylesheet for the approved orbit/atmosphere effects. Express exposes only `/api/health` in this phase.

**Tech Stack:** Node.js 24-compatible npm workspaces, React, Vite, Tailwind CSS 4, daisyUI 5, Vitest, React Testing Library, Node.js, Express.

**Spec:** `docs/superpowers/specs/2026-09-13-final-mern-portfolio-design.md`

## Global Constraints

- Work only on `feature/final-mern-portfolio`; do not modify `main`.
- Do not delete or rewrite the current root static preview during this checkpoint.
- Preserve the approved signature Navbar and Hero visual composition/copy.
- Preserve existing Cloudinary URLs for the portrait, signature logo, and MERN icons.
- At `<=900px`, use the approved `Logo + Faisal Kader | Let's Talk | hamburger` mobile Navbar.
- Mobile menu closes on navigation, outside click, Escape, and resize above 900px.
- Anchor scrolling must account for sticky Navbar height.
- Do not convert What I Do, About, Skills, Journey, Featured Project, Contact, or Footer yet.
- Do not add MongoDB/email/contact backend in Phase 1.
- No secrets are committed.
- First checkpoint must be reviewed at 1440, 1024, 768, 430 and 390 CSS-pixel widths before Phase 2/3 work continues.

---

## File Structure for This Checkpoint

```text
package.json
.gitignore
client/
  package.json
  vite.config.js
  index.html
  src/
    main.jsx
    App.jsx
    data/
      portfolioData.js
    components/
      Navbar.jsx
      Hero.jsx
    components/__tests__/
      Navbar.test.jsx
      Hero.test.jsx
    styles/
      index.css
      atmosphere.css
    test/
      setup.js
server/
  package.json
  src/
    app.js
    server.js
  src/__tests__/
    health.test.js
```

Root legacy files such as `index.html`, `base.css`, `brand-shell.css`, `mobile-nav.css`, and `mobile-nav.js` remain untouched as visual references.

---

### Task 1: Monorepo Scaffold and Root Scripts

**Files:**
- Create: `package.json`
- Create or modify: `.gitignore`
- Create: `client/package.json`
- Create: `server/package.json`

**Interfaces:**
- Produces root commands `npm run dev`, `npm run build`, `npm run test`, `npm run start`.
- Produces npm workspaces named `client` and `server`.

- [ ] **Step 1: Add the root workspace manifest**

Create `package.json`:

```json
{
  "name": "faisal-kader-portfolio",
  "private": true,
  "workspaces": ["client", "server"],
  "scripts": {
    "dev": "concurrently \"npm run dev --workspace client\" \"npm run dev --workspace server\"",
    "build": "npm run build --workspace client",
    "test": "npm run test --workspace client && npm run test --workspace server",
    "start": "npm run start --workspace server"
  },
  "devDependencies": {
    "concurrently": "^9.2.1"
  }
}
```

- [ ] **Step 2: Add ignore rules without hiding migration reference files**

Ensure `.gitignore` contains:

```gitignore
node_modules/
client/dist/
.env
.env.*
!.env.example
coverage/
.DS_Store
```

Do not ignore the root static preview files.

- [ ] **Step 3: Add client package manifest**

Create `client/package.json`:

```json
{
  "name": "portfolio-client",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.1.13",
    "daisyui": "^5.1.10",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.13"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.8.0",
    "@testing-library/react": "^16.3.0",
    "@testing-library/user-event": "^14.6.1",
    "@vitejs/plugin-react": "^5.0.2",
    "jsdom": "^26.1.0",
    "vite": "^7.1.5",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 4: Add server package manifest**

Create `server/package.json`:

```json
{
  "name": "portfolio-server",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "node --watch src/server.js",
    "start": "node src/server.js",
    "test": "vitest run"
  },
  "dependencies": {
    "dotenv": "^17.2.2",
    "express": "^5.1.0"
  },
  "devDependencies": {
    "supertest": "^7.1.4",
    "vitest": "^3.2.4"
  }
}
```

- [ ] **Step 5: Install dependencies and verify workspace resolution**

Run from repository root:

```bash
npm install
npm ls --workspaces --depth=0
```

Expected: both `portfolio-client` and `portfolio-server` are discovered with no missing dependency errors.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json .gitignore client/package.json server/package.json
git commit -m "chore: scaffold MERN portfolio workspaces"
```

---

### Task 2: React/Vite + Tailwind/daisyUI Boot

**Files:**
- Create: `client/index.html`
- Create: `client/vite.config.js`
- Create: `client/src/main.jsx`
- Create: `client/src/App.jsx`
- Create: `client/src/styles/index.css`
- Create: `client/src/test/setup.js`

**Interfaces:**
- Produces React root rendering `<App />`.
- Produces Vite dev server and production build.
- Produces Tailwind/daisyUI styling pipeline.

- [ ] **Step 1: Write the initial app smoke test**

Create `client/src/App.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

it('renders the phase one portfolio shell', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});
```

- [ ] **Step 2: Configure Vitest and Vite**

Create `client/vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
});
```

Create `client/src/test/setup.js`:

```js
import '@testing-library/jest-dom/vitest';
```

- [ ] **Step 3: Run smoke test and confirm RED**

```bash
npm run test --workspace client -- App.test.jsx
```

Expected: FAIL because `App.jsx` is not implemented yet.

- [ ] **Step 4: Add React boot files**

Create `client/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Faisal Kader — MERN Full Stack Developer portfolio." />
    <title>Faisal Kader — MERN Full Stack Developer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

Create `client/src/main.jsx`:

```jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Create `client/src/App.jsx`:

```jsx
export default function App() {
  return <main className="min-h-screen bg-[#061321] text-slate-100" />;
}
```

- [ ] **Step 5: Add Tailwind + daisyUI base stylesheet**

Create `client/src/styles/index.css`:

```css
@import "tailwindcss";
@plugin "daisyui" {
  themes: false;
}

:root {
  color-scheme: dark;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #061321;
  color: #eaf4ff;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 92px;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #061321;
}

* {
  box-sizing: border-box;
}
```

- [ ] **Step 6: Run tests and production build**

```bash
npm run test --workspace client -- App.test.jsx
npm run build --workspace client
```

Expected: PASS and Vite writes `client/dist`.

- [ ] **Step 7: Commit**

```bash
git add client
 git commit -m "feat: boot React portfolio client"
```

---

### Task 3: Express Health API Shell

**Files:**
- Create: `server/src/app.js`
- Create: `server/src/server.js`
- Create: `server/src/__tests__/health.test.js`

**Interfaces:**
- Produces `GET /api/health` -> HTTP 200 `{ "ok": true }`.
- Produces Express app export for later route tests.

- [ ] **Step 1: Write failing health endpoint test**

Create `server/src/__tests__/health.test.js`:

```js
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from '../app.js';

describe('GET /api/health', () => {
  it('returns an OK health payload', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });
});
```

- [ ] **Step 2: Run test and confirm RED**

```bash
npm run test --workspace server -- health.test.js
```

Expected: FAIL because `app.js` does not exist.

- [ ] **Step 3: Implement Express app and server entrypoint**

Create `server/src/app.js`:

```js
import express from 'express';

export const app = express();

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.status(200).json({ ok: true });
});
```

Create `server/src/server.js`:

```js
import 'dotenv/config';
import { app } from './app.js';

const port = Number(process.env.PORT || 5000);

app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`);
});
```

- [ ] **Step 4: Run server test**

```bash
npm run test --workspace server -- health.test.js
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/src
git commit -m "feat: add Express health API shell"
```

---

### Task 4: Lock Portfolio Content and Asset Data

**Files:**
- Create: `client/src/data/portfolioData.js`
- Test: `client/src/data/portfolioData.test.js`

**Interfaces:**
- Produces `navLinks`, `socialLinks`, `heroTech`, `brand`, `heroContent`.
- Navbar/Hero components consume these exports so copy and URLs stay centralized.

- [ ] **Step 1: Write failing data-contract test**

Create `client/src/data/portfolioData.test.js`:

```js
import { describe, expect, it } from 'vitest';
import { brand, heroContent, heroTech, navLinks, socialLinks } from './portfolioData.js';

it('preserves the approved hero and navigation content', () => {
  expect(brand.name).toBe('Faisal Kader');
  expect(brand.title).toBe('MERN Full Stack Developer');
  expect(heroContent.titleLead).toBe('Modern Web Applications for');
  expect(heroContent.titleAccent).toBe('Real Impact');
  expect(navLinks.map((item) => item.label)).toEqual(['Home', 'About', 'Skills', 'Journey', 'Projects', 'Contact']);
  expect(heroTech.map((item) => item.label)).toEqual(['React', 'Node.js', 'Express.js', 'MongoDB']);
  expect(socialLinks.find((item) => item.label === 'GitHub')?.href).toContain('faisalkader45trash-netizen');
});
```

- [ ] **Step 2: Run test and confirm RED**

```bash
npm run test --workspace client -- portfolioData.test.js
```

- [ ] **Step 3: Implement approved data**

Create `client/src/data/portfolioData.js` with these exact values:

```js
export const brand = {
  name: 'Faisal Kader',
  title: 'MERN Full Stack Developer',
  logo: 'https://res.cloudinary.com/yqhqtpgv/image/upload/v1789235486/Logo_FK.png',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/faisalkader45trash-netizen', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/faisal-kader-a79297396/', external: true },
  { label: 'Email', href: 'mailto:faisalkader45trash@gmail.com', external: false },
];

export const heroContent = {
  eyebrow: 'Turning Ideas Into Solutions',
  titleLead: 'Modern Web Applications for',
  titleAccent: 'Real Impact',
  description: "I'm Faisal Kader, a MERN Full Stack Developer. I build modern, responsive and scalable websites and web applications for real business needs.",
  portrait: 'https://res.cloudinary.com/yqhqtpgv/image/upload/Hero_image.png',
  rightLabel: 'Web Solutions for a Better Tomorrow',
  scribble: ['Code', 'Build', 'Grow'],
};

export const heroTech = [
  { label: 'React', icon: 'https://res.cloudinary.com/yqhqtpgv/image/upload/v1789215520/react-icon.svg' },
  { label: 'Node.js', icon: 'https://res.cloudinary.com/yqhqtpgv/image/upload/v1789215520/node-js-icon.svg' },
  { label: 'Express.js', icon: 'https://res.cloudinary.com/yqhqtpgv/image/upload/v1789215520/express-js-icon.svg' },
  { label: 'MongoDB', icon: 'https://res.cloudinary.com/yqhqtpgv/image/upload/v1789215520/mongodb-icon.svg' },
];
```

- [ ] **Step 4: Run data test**

```bash
npm run test --workspace client -- portfolioData.test.js
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add client/src/data
git commit -m "feat: lock approved portfolio content data"
```

---

### Task 5: Convert Approved Navbar to React

**Files:**
- Create: `client/src/components/Navbar.jsx`
- Create: `client/src/components/__tests__/Navbar.test.jsx`
- Modify: `client/src/App.jsx`
- Modify: `client/src/styles/index.css`

**Interfaces:**
- Consumes `brand`, `navLinks` from `portfolioData.js`.
- Produces sticky responsive Navbar and controlled mobile menu.

- [ ] **Step 1: Write behavior tests before component code**

Create `client/src/components/__tests__/Navbar.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Navbar from '../Navbar.jsx';

it('renders the approved navigation links and CTA', () => {
  render(<Navbar />);
  expect(screen.getByRole('link', { name: 'Faisal Kader' })).toHaveAttribute('href', '#home');
  expect(screen.getByRole('link', { name: "Let's Talk" })).toHaveAttribute('href', '#contact');
  expect(screen.getAllByRole('link', { name: 'Projects' }).length).toBeGreaterThan(0);
});

it('opens and closes the mobile menu with the hamburger button', async () => {
  const user = userEvent.setup();
  render(<Navbar />);
  const button = screen.getByRole('button', { name: 'Open navigation menu' });
  await user.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await user.click(screen.getByRole('link', { name: 'About', hidden: false }));
  expect(button).toHaveAttribute('aria-expanded', 'false');
});
```

- [ ] **Step 2: Run Navbar tests and confirm RED**

```bash
npm run test --workspace client -- Navbar.test.jsx
```

- [ ] **Step 3: Implement controlled Navbar behavior**

Implement `Navbar.jsx` with React state and effects:

- `isOpen` state defaults false.
- Hamburger `aria-expanded` mirrors state.
- `Escape` closes menu.
- document pointer/click outside the Navbar closes menu.
- `resize` above 900px closes menu.
- any mobile navigation link click closes menu.
- desktop `.links` remain inline above 900px.
- CTA remains visible in both desktop/mobile layouts.

Use the approved signature logo and copy from `portfolioData.js`; do not add new labels or icons.

- [ ] **Step 4: Add only Navbar layout/states to Tailwind classes plus minimal CSS**

Maintain the approved navy/glass shell, thin blue borders, signature plate, compact CTA, and mobile dropdown. Do not copy root static CSS wholesale; translate normal layout to Tailwind and keep custom CSS only for effects/pseudo-elements that are clearer there.

At `<=900px`, the horizontal link rail must be absent and the hamburger must be visible.

- [ ] **Step 5: Render Navbar in `App.jsx`**

```jsx
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <main className="min-h-screen bg-[#061321] text-slate-100">
      <Navbar />
    </main>
  );
}
```

- [ ] **Step 6: Run Navbar + app tests**

```bash
npm run test --workspace client -- Navbar.test.jsx App.test.jsx
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add client/src/components/Navbar.jsx client/src/components/__tests__/Navbar.test.jsx client/src/App.jsx client/src/styles/index.css
git commit -m "feat: convert approved navbar to React"
```

---

### Task 6: Convert Approved Hero to React

**Files:**
- Create: `client/src/components/Hero.jsx`
- Create: `client/src/components/__tests__/Hero.test.jsx`
- Create: `client/src/styles/atmosphere.css`
- Modify: `client/src/styles/index.css`
- Modify: `client/src/App.jsx`

**Interfaces:**
- Consumes `heroContent`, `heroTech`, `socialLinks`.
- Produces `#home` Hero section matching the approved static composition.

- [ ] **Step 1: Write Hero content test**

Create `client/src/components/__tests__/Hero.test.jsx`:

```jsx
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Hero from '../Hero.jsx';

it('renders the approved Hero copy, actions, social links, and MERN technologies', () => {
  render(<Hero />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Modern Web Applications for Real Impact');
  expect(screen.getByRole('link', { name: /View My Work/i })).toHaveAttribute('href', '#projects');
  expect(screen.getByRole('link', { name: /Let\'s Talk/i })).toHaveAttribute('href', '#contact');
  expect(screen.getByRole('img', { name: /Faisal Kader, MERN Full Stack Developer/i })).toBeInTheDocument();
  expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  expect(screen.getAllByText('MongoDB').length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Run Hero test and confirm RED**

```bash
npm run test --workspace client -- Hero.test.jsx
```

- [ ] **Step 3: Implement semantic Hero markup**

Build `Hero.jsx` with:

- section `id="home"`.
- left: eyebrow, H1, description, primary/ghost CTAs, social links, four technology pills.
- right: four floating MERN cards, `Code / Build / Grow`, approved portrait.
- decorative `Web Solutions for a Better Tomorrow` rendered via CSS pseudo-element or aria-hidden decorative element so it is not repeated by screen readers.

Do not change copy or Cloudinary URLs.

- [ ] **Step 4: Add approved atmosphere stylesheet**

Create `client/src/styles/atmosphere.css` for only the difficult visual effects:

- hero orbit circle/arcs.
- subtle node/halo background.
- floating card absolute-position offsets.
- right-side decorative label.
- desktop blue stripe accents if present in approved preview.

Import it from `index.css`:

```css
@import "./atmosphere.css";
```

Normal grid/flex/padding/typography stays in Tailwind classes inside `Hero.jsx`.

- [ ] **Step 5: Add mobile responsive behavior matching the approved iPhone screenshot**

At 430/390 widths:

- text column renders before portrait.
- CTAs can span the available width without overflow.
- social buttons fit without horizontal page overflow.
- technology pills wrap naturally.
- portrait remains below the primary content.
- floating technical cards do not create horizontal scrolling.

- [ ] **Step 6: Render Hero beneath Navbar**

Update `App.jsx`:

```jsx
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

export default function App() {
  return (
    <main className="min-h-screen bg-[#061321] text-slate-100">
      <Navbar />
      <Hero />
    </main>
  );
}
```

- [ ] **Step 7: Run component tests and build**

```bash
npm run test --workspace client -- Navbar.test.jsx Hero.test.jsx App.test.jsx
npm run build --workspace client
```

Expected: all tests PASS; Vite production build succeeds.

- [ ] **Step 8: Commit**

```bash
git add client/src/components/Hero.jsx client/src/components/__tests__/Hero.test.jsx client/src/styles/atmosphere.css client/src/styles/index.css client/src/App.jsx
git commit -m "feat: convert approved hero to React"
```

---

### Task 7: Phase 1 Verification Checkpoint

**Files:**
- No production source change unless verification reveals a regression.
- If a fix is required, modify only the component/style directly responsible for that verified defect.

**Interfaces:**
- Verifies the first implementation checkpoint before remaining sections are converted.

- [ ] **Step 1: Run the full test suite**

```bash
npm test
```

Expected: client and server tests PASS with 0 failures.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: successful Vite build with no unresolved imports.

- [ ] **Step 3: Start both apps locally**

```bash
npm run dev
```

Verify client loads and `GET http://localhost:5000/api/health` returns:

```json
{"ok":true}
```

- [ ] **Step 4: Compare visual checkpoint against the frozen static preview**

Inspect at these CSS viewport widths:

```text
1440
1024
768
430
390
```

Verify all of the following:

```text
Navbar branding matches the approved signature-led design.
Desktop links remain inline above 900px.
At <=900px, hamburger replaces the desktop link row.
Let's Talk remains visible beside the hamburger.
Mobile dropdown contains all six links.
Hero copy is unchanged.
Portrait URL and visual concept are unchanged.
React/Node/Express/MongoDB floating elements remain recognizable and positioned without overflow.
Code / Build / Grow is present.
Web Solutions for a Better Tomorrow is present as decorative content.
No horizontal page overflow exists.
```

- [ ] **Step 5: Verify mobile menu behavior manually**

Confirm:

```text
hamburger opens menu
same button closes menu
navigation link closes menu
outside click closes menu
Escape closes menu
resize above 900px closes menu
```

- [ ] **Step 6: Check branch diff scope**

```bash
git status --short
git diff main...HEAD --stat
git diff main...HEAD --name-only
```

Expected: root static preview files are unchanged except any explicitly approved documentation/root scaffold files. No deletion of the legacy preview.

- [ ] **Step 7: Stop for user visual review**

Do not convert the remaining sections until the user reviews the Navbar + Hero checkpoint against the approved static preview.
