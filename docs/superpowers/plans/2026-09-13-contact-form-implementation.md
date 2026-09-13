# Contact Form Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a real MERN portfolio contact form that validates submissions, persists them to MongoDB, sends an owner email notification, and gives truthful loading/success/error feedback without changing the approved Contact section design.

**Architecture:** The React frontend submits `name`, `email`, `subject`, and `message` to `POST /api/contact`. The Express backend validates and rate-limits the request, stores the message in MongoDB as the source of truth, then attempts an owner notification email using server-side credentials and the visitor email as `Reply-To`.

**Tech Stack:** React, Vite, Express, Node.js, MongoDB/Mongoose, server-side validation, rate limiting, SMTP or provider-backed email service, Vitest/React Testing Library, Supertest/Jest or the project’s existing backend test runner.

**Spec:** `docs/superpowers/specs/2026-09-13-contact-form-design.md`

## Global Constraints

- Preserve the currently approved Contact section visual design.
- MongoDB persistence is the source of truth; email is notification only.
- Frontend must never display success unless the API confirms the message was accepted.
- `name`: required, trimmed, 2-80 characters.
- `email`: required, trimmed, valid email format, maximum 254 characters.
- `subject`: required, trimmed, 3-150 characters.
- `message`: required, trimmed, 10-5000 characters.
- Reject non-string fields and oversized payloads.
- Contact route must have IP-based rate limiting.
- CORS must be restricted to configured production frontend origins.
- Database and email credentials must remain environment-only and must never be committed.
- Visitor email must be used as `Reply-To`, not as the authenticated sender.
- If MongoDB save succeeds but email notification fails, keep the stored message and return success to the visitor while logging the notification failure server-side.
- No CAPTCHA, admin inbox, visitor auto-reply, attachments, or live chat in the first release.

---

## File Structure

Final React/Express project should contain the following responsibilities. If equivalent files already exist, modify those instead of duplicating responsibility.

```text
client/
  src/
    components/
      Contact.jsx              # contact form UI and submit states
    services/
      contactApi.js            # POST /api/contact client helper
    components/__tests__/
      Contact.test.jsx         # form behavior tests

server/
  src/
    app.js                     # JSON limit, CORS, route registration
    models/
      ContactMessage.js        # Mongoose schema/model
    validators/
      contactValidator.js      # pure request validation/normalization
    services/
      emailService.js          # owner notification abstraction
    controllers/
      contactController.js     # persist then notify workflow
    middleware/
      contactRateLimit.js      # per-IP limiter for contact endpoint
    routes/
      contactRoutes.js         # POST /api/contact
    __tests__/
      contactValidator.test.js
      contactRoute.test.js
```

---

### Task 1: Contact Message Model and Validation Contract

**Files:**
- Create: `server/src/models/ContactMessage.js`
- Create: `server/src/validators/contactValidator.js`
- Test: `server/src/__tests__/contactValidator.test.js`

**Interfaces:**
- Consumes: raw `req.body` object.
- Produces: `validateContactPayload(payload)` returning either `{ ok: true, value: { name, email, subject, message } }` or `{ ok: false, errors }`.
- Produces: Mongoose model `ContactMessage` with `name`, `email`, `subject`, `message`, `status`, timestamps.

- [ ] **Step 1: Write failing validator tests**

```js
import { describe, expect, it } from 'vitest';
import { validateContactPayload } from '../validators/contactValidator.js';

describe('validateContactPayload', () => {
  it('accepts and trims a valid payload', () => {
    const result = validateContactPayload({
      name: '  Faisal Visitor  ',
      email: '  Visitor@Example.com  ',
      subject: '  Website project  ',
      message: '  I would like to discuss a new web application.  ',
    });

    expect(result).toEqual({
      ok: true,
      value: {
        name: 'Faisal Visitor',
        email: 'visitor@example.com',
        subject: 'Website project',
        message: 'I would like to discuss a new web application.',
      },
    });
  });

  it('rejects non-string and invalid fields', () => {
    const result = validateContactPayload({
      name: 123,
      email: 'not-an-email',
      subject: 'x',
      message: 'short',
    });

    expect(result.ok).toBe(false);
    expect(result.errors).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
      subject: expect.any(String),
      message: expect.any(String),
    });
  });
});
```

- [ ] **Step 2: Run the validator test and confirm RED**

Run the project’s backend test command scoped to `contactValidator.test.js`, for example:

```bash
npm test -- contactValidator.test.js
```

Expected: FAIL because `validateContactPayload` does not exist yet.

- [ ] **Step 3: Implement minimal validator**

```js
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactPayload(payload) {
  const errors = {};

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { ok: false, errors: { form: 'Invalid request body.' } };
  }

  const raw = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
  };

  for (const [key, value] of Object.entries(raw)) {
    if (typeof value !== 'string') errors[key] = `${key} must be text.`;
  }

  if (Object.keys(errors).length) return { ok: false, errors };

  const value = {
    name: raw.name.trim(),
    email: raw.email.trim().toLowerCase(),
    subject: raw.subject.trim(),
    message: raw.message.trim(),
  };

  if (value.name.length < 2 || value.name.length > 80) errors.name = 'Name must be 2-80 characters.';
  if (!EMAIL_RE.test(value.email) || value.email.length > 254) errors.email = 'Enter a valid email address.';
  if (value.subject.length < 3 || value.subject.length > 150) errors.subject = 'Subject must be 3-150 characters.';
  if (value.message.length < 10 || value.message.length > 5000) errors.message = 'Message must be 10-5000 characters.';

  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, value };
}
```

- [ ] **Step 4: Run validator tests and confirm GREEN**

```bash
npm test -- contactValidator.test.js
```

Expected: PASS.

- [ ] **Step 5: Add the Mongoose model**

```js
import mongoose from 'mongoose';

const contactMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
```

- [ ] **Step 6: Commit**

```bash
git add server/src/models/ContactMessage.js server/src/validators/contactValidator.js server/src/__tests__/contactValidator.test.js
git commit -m "feat: add contact message model and validation"
```

---

### Task 2: Email Notification Service

**Files:**
- Create: `server/src/services/emailService.js`
- Test: `server/src/__tests__/emailService.test.js`

**Interfaces:**
- Consumes: `{ name, email, subject, message, createdAt }`.
- Produces: `sendContactNotification(message)` resolving on successful provider handoff and rejecting on provider failure.
- Reads: `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, `MAIL_FROM`, `CONTACT_TO_EMAIL`.

- [ ] **Step 1: Write a failing email-service test using dependency injection**

```js
import { describe, expect, it, vi } from 'vitest';
import { createEmailService } from '../services/emailService.js';

it('uses the visitor email as reply-to and server account as sender', async () => {
  const sendMail = vi.fn().mockResolvedValue({ messageId: 'abc' });
  const service = createEmailService({
    sendMail,
    from: 'portfolio@example.com',
    to: 'faisalkader45trash@gmail.com',
  });

  await service.sendContactNotification({
    name: 'Visitor',
    email: 'visitor@example.com',
    subject: 'Website project',
    message: 'I would like to discuss a project.',
    createdAt: new Date('2026-09-13T00:00:00Z'),
  });

  expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({
    from: 'portfolio@example.com',
    to: 'faisalkader45trash@gmail.com',
    replyTo: 'visitor@example.com',
  }));
});
```

- [ ] **Step 2: Run the test and confirm RED**

```bash
npm test -- emailService.test.js
```

Expected: FAIL because `createEmailService` does not exist.

- [ ] **Step 3: Implement the service boundary**

```js
export function createEmailService({ sendMail, from, to }) {
  return {
    async sendContactNotification(contact) {
      return sendMail({
        from,
        to,
        replyTo: contact.email,
        subject: `New Portfolio Contact Message - ${contact.subject}`,
        text: [
          `Name: ${contact.name}`,
          `Email: ${contact.email}`,
          `Subject: ${contact.subject}`,
          `Submitted: ${contact.createdAt.toISOString()}`,
          '',
          contact.message,
        ].join('\n'),
      });
    },
  };
}
```

At application composition time, bind `sendMail` to the chosen SMTP/provider transport. Keep provider setup out of the controller.

- [ ] **Step 4: Run test and confirm GREEN**

```bash
npm test -- emailService.test.js
```

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/src/services/emailService.js server/src/__tests__/emailService.test.js
git commit -m "feat: add contact email notification service"
```

---

### Task 3: Contact Controller and Persistence Workflow

**Files:**
- Create: `server/src/controllers/contactController.js`
- Test: `server/src/__tests__/contactController.test.js`

**Interfaces:**
- Consumes: `validateContactPayload`, `ContactMessage.create`, `emailService.sendContactNotification`.
- Produces: Express handler `createContactMessage(req, res)`.

- [ ] **Step 1: Write failing controller tests**

```js
import { describe, expect, it, vi } from 'vitest';
import { createContactController } from '../controllers/contactController.js';

it('persists before sending notification and returns success', async () => {
  const create = vi.fn().mockResolvedValue({
    name: 'Visitor', email: 'visitor@example.com', subject: 'Project',
    message: 'A sufficiently long project enquiry.', createdAt: new Date(),
  });
  const sendContactNotification = vi.fn().mockResolvedValue();
  const validate = vi.fn().mockReturnValue({
    ok: true,
    value: { name: 'Visitor', email: 'visitor@example.com', subject: 'Project', message: 'A sufficiently long project enquiry.' },
  });

  const handler = createContactController({ create, validate, sendContactNotification, logger: console });
  const req = { body: {} };
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };

  await handler(req, res);

  expect(create).toHaveBeenCalledBefore(sendContactNotification);
  expect(res.status).toHaveBeenCalledWith(201);
  expect(res.json).toHaveBeenCalledWith({ success: true, message: 'Message sent successfully.' });
});

it('still returns success when email notification fails after persistence', async () => {
  const create = vi.fn().mockResolvedValue({
    name: 'Visitor', email: 'visitor@example.com', subject: 'Project',
    message: 'A sufficiently long project enquiry.', createdAt: new Date(),
  });
  const sendContactNotification = vi.fn().mockRejectedValue(new Error('mail down'));
  const validate = vi.fn().mockReturnValue({
    ok: true,
    value: { name: 'Visitor', email: 'visitor@example.com', subject: 'Project', message: 'A sufficiently long project enquiry.' },
  });
  const logger = { error: vi.fn() };

  const handler = createContactController({ create, validate, sendContactNotification, logger });
  const req = { body: {} };
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn() };

  await handler(req, res);

  expect(logger.error).toHaveBeenCalled();
  expect(res.status).toHaveBeenCalledWith(201);
});
```

- [ ] **Step 2: Run and confirm RED**

```bash
npm test -- contactController.test.js
```

- [ ] **Step 3: Implement the controller factory**

```js
export function createContactController({ create, validate, sendContactNotification, logger }) {
  return async function createContactMessage(req, res) {
    const result = validate(req.body);

    if (!result.ok) {
      return res.status(400).json({
        success: false,
        message: 'Please check the submitted information.',
        errors: result.errors,
      });
    }

    try {
      const saved = await create(result.value);

      try {
        await sendContactNotification(saved);
      } catch (error) {
        logger.error('Contact email notification failed', error);
      }

      return res.status(201).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
      logger.error('Contact persistence failed', error);
      return res.status(500).json({
        success: false,
        message: 'Unable to send your message right now. Please try again later.',
      });
    }
  };
}
```

- [ ] **Step 4: Run and confirm GREEN**

```bash
npm test -- contactController.test.js
```

- [ ] **Step 5: Commit**

```bash
git add server/src/controllers/contactController.js server/src/__tests__/contactController.test.js
git commit -m "feat: add contact submission workflow"
```

---

### Task 4: Route, Rate Limiting, JSON Limit, and CORS

**Files:**
- Create: `server/src/middleware/contactRateLimit.js`
- Create: `server/src/routes/contactRoutes.js`
- Modify: `server/src/app.js`
- Test: `server/src/__tests__/contactRoute.test.js`

**Interfaces:**
- Produces: `POST /api/contact`.
- Contact route uses the Task 3 handler.
- App reads `CLIENT_ORIGIN` and applies JSON body limit before routes.

- [ ] **Step 1: Write failing route integration tests**

```js
import request from 'supertest';
import { app } from '../app.js';

it('rejects malformed contact input with 400', async () => {
  const response = await request(app)
    .post('/api/contact')
    .send({ name: '', email: 'bad', subject: '', message: '' });

  expect(response.status).toBe(400);
  expect(response.body.success).toBe(false);
});
```

Add a rate-limit test using the limiter’s configured test-friendly threshold or an injected limiter configuration. Do not make production limits artificially low just to simplify testing.

- [ ] **Step 2: Run integration test and confirm RED**

```bash
npm test -- contactRoute.test.js
```

- [ ] **Step 3: Add contact-specific limiter**

Use the project’s standard Express rate-limit package. Production default:

```js
windowMs: 15 * 60 * 1000
limit: 5
standardHeaders: true
legacyHeaders: false
```

Public response when blocked:

```json
{
  "success": false,
  "message": "Too many messages sent. Please try again later."
}
```

- [ ] **Step 4: Register route and app protections**

App-level JSON limit:

```js
app.use(express.json({ limit: '16kb' }));
```

Production CORS must derive allowed origins from `CLIENT_ORIGIN`; do not use unrestricted `*` when credentials or sensitive endpoints are introduced.

Route composition:

```js
router.post('/', contactRateLimit, createContactMessage);
app.use('/api/contact', contactRoutes);
```

- [ ] **Step 5: Run route tests and confirm GREEN**

```bash
npm test -- contactRoute.test.js
```

- [ ] **Step 6: Commit**

```bash
git add server/src/middleware/contactRateLimit.js server/src/routes/contactRoutes.js server/src/app.js server/src/__tests__/contactRoute.test.js
git commit -m "feat: expose protected contact API"
```

---

### Task 5: Environment Configuration and Mail Transport Composition

**Files:**
- Modify: `server/src/app.js` or server bootstrap/composition file
- Modify: `.env.example`
- Verify: `.gitignore`

**Interfaces:**
- Reads `MONGODB_URI`, `CLIENT_ORIGIN`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, `MAIL_FROM`, `CONTACT_TO_EMAIL`.
- Provides configured mail transport to `createEmailService`.

- [ ] **Step 1: Add environment validation test or startup assertion test**

Test that production startup refuses to silently run with missing mandatory database/mail configuration. If the project already has a config module, extend that module instead of adding a second config system.

- [ ] **Step 2: Run and confirm RED**

Use the existing backend test runner scoped to the config test.

- [ ] **Step 3: Add explicit config loading**

Expose only parsed values needed by the application. Convert `MAIL_PORT` to a number and fail startup with a clear server-side error when required variables are absent in production.

- [ ] **Step 4: Add `.env.example` keys without secrets**

```text
MONGODB_URI=
CLIENT_ORIGIN=
MAIL_HOST=
MAIL_PORT=587
MAIL_USER=
MAIL_PASS=
MAIL_FROM=
CONTACT_TO_EMAIL=faisalkader45trash@gmail.com
```

- [ ] **Step 5: Verify secrets remain ignored**

Confirm `.env`, `.env.local`, and equivalent local secret files are ignored. Do not add real credentials to GitHub history.

- [ ] **Step 6: Run tests and commit**

```bash
git add server .env.example .gitignore
git commit -m "chore: configure contact service environment"
```

---

### Task 6: Frontend API Client

**Files:**
- Create: `client/src/services/contactApi.js`
- Test: `client/src/services/contactApi.test.js`

**Interfaces:**
- Produces: `submitContactMessage(payload)`.
- Resolves with parsed success response.
- Throws an error object carrying `message` and optional `errors` on non-2xx responses.

- [ ] **Step 1: Write failing API-client tests**

```js
import { describe, expect, it, vi } from 'vitest';
import { submitContactMessage } from './contactApi.js';

it('posts JSON contact data to the API', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: true, message: 'Message sent successfully.' }),
  });

  const payload = {
    name: 'Visitor',
    email: 'visitor@example.com',
    subject: 'Project enquiry',
    message: 'I would like to discuss a new website project.',
  };

  await submitContactMessage(payload);

  expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/api/contact'), expect.objectContaining({
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }));
});
```

- [ ] **Step 2: Run and confirm RED**

```bash
npm test -- contactApi.test.js
```

- [ ] **Step 3: Implement API client**

Use `VITE_API_BASE_URL` if frontend/backend are deployed separately; otherwise allow relative `/api/contact` in same-origin deployments.

- [ ] **Step 4: Run and confirm GREEN**

```bash
npm test -- contactApi.test.js
```

- [ ] **Step 5: Commit**

```bash
git add client/src/services/contactApi.js client/src/services/contactApi.test.js
git commit -m "feat: add portfolio contact API client"
```

---

### Task 7: React Contact Form Behavior Without Visual Redesign

**Files:**
- Modify: `client/src/components/Contact.jsx`
- Test: `client/src/components/__tests__/Contact.test.jsx`

**Interfaces:**
- Consumes: `submitContactMessage(payload)`.
- Maintains: form values, `isSubmitting`, field errors, form status.

- [ ] **Step 1: Write failing form behavior tests**

Cover these exact behaviors:

```js
it('disables the submit button and shows Sending while pending');
it('does not submit a second time while a request is pending');
it('shows server validation errors without clearing entered values');
it('clears all fields only after confirmed success');
it('preserves the message and shows an error when the API fails');
```

At least one success test should resemble:

```js
userEvent.type(screen.getByLabelText(/name/i), 'Visitor');
userEvent.type(screen.getByLabelText(/email/i), 'visitor@example.com');
userEvent.type(screen.getByLabelText(/subject/i), 'Project enquiry');
userEvent.type(screen.getByLabelText(/message/i), 'I would like to discuss a full stack website project.');
await userEvent.click(screen.getByRole('button', { name: /send message/i }));
await screen.findByText(/message sent successfully/i);
expect(screen.getByLabelText(/name/i)).toHaveValue('');
```

- [ ] **Step 2: Run and confirm RED**

```bash
npm test -- Contact.test.jsx
```

- [ ] **Step 3: Convert the form to controlled React inputs**

Keep the approved form markup/classes wherever possible. Add only behavior-related attributes/classes needed for validation and status states.

- [ ] **Step 4: Add frontend validation matching the server contract**

Frontend validation improves UX but must not replace backend validation. Use the same length boundaries as the server.

- [ ] **Step 5: Add truthful submission states**

During request:

```text
button disabled
button label: Sending...
```

On success:

```text
Message sent successfully.
```

On unexpected failure:

```text
Unable to send your message right now. Please try again later.
```

- [ ] **Step 6: Run tests and confirm GREEN**

```bash
npm test -- Contact.test.jsx
```

- [ ] **Step 7: Commit**

```bash
git add client/src/components/Contact.jsx client/src/components/__tests__/Contact.test.jsx
git commit -m "feat: connect portfolio contact form"
```

---

### Task 8: Accessibility and Responsive Regression Check

**Files:**
- Modify only if needed: `client/src/components/Contact.jsx`
- Modify only if needed: existing Contact CSS file
- Test: `client/src/components/__tests__/Contact.test.jsx`

**Interfaces:**
- No new API interface.
- Ensures labels/status/error associations and existing layout are preserved.

- [ ] **Step 1: Add accessibility assertions**

Verify each field is reachable by associated label and form status is announced using an appropriate live region such as:

```jsx
<p role="status" aria-live="polite">{statusMessage}</p>
```

For field errors, use `aria-invalid` and `aria-describedby` when an error exists.

- [ ] **Step 2: Run tests and confirm RED if markup is incomplete**

```bash
npm test -- Contact.test.jsx
```

- [ ] **Step 3: Add the minimum accessible markup**

Do not redesign cards, spacing, typography, backgrounds, or button styling.

- [ ] **Step 4: Verify responsive layouts**

Manually inspect at minimum:

```text
1440px
1024px
768px
430px
390px
```

Confirm no new horizontal overflow, label clipping, button overflow, or success/error text collision.

- [ ] **Step 5: Commit only if changes were required**

```bash
git add client/src/components/Contact.jsx client/src/components/__tests__/Contact.test.jsx
# add the existing Contact CSS file only if it was actually changed
git commit -m "fix: preserve accessible responsive contact states"
```

---

### Task 9: End-to-End Production Verification

**Files:**
- No feature code unless verification exposes a defect.
- Deployment environment configuration only through the hosting provider’s secret/env system.

**Interfaces:**
- Verifies complete chain: Browser → frontend → Express → MongoDB → mail provider.

- [ ] **Step 1: Run the full frontend test suite**

```bash
npm test
```

Expected: all frontend tests pass.

- [ ] **Step 2: Run the full backend test suite**

```bash
npm test
```

Run from the backend package/workspace. Expected: all backend tests pass.

- [ ] **Step 3: Build the frontend production bundle**

```bash
npm run build
```

Expected: build exits successfully with no unresolved imports.

- [ ] **Step 4: Configure production environment secrets**

Set real values only in hosting provider environment settings:

```text
MONGODB_URI
CLIENT_ORIGIN
MAIL_HOST
MAIL_PORT
MAIL_USER
MAIL_PASS
MAIL_FROM
CONTACT_TO_EMAIL
```

- [ ] **Step 5: Deploy backend and frontend**

Verify the frontend points to the correct production API origin.

- [ ] **Step 6: Submit one real end-to-end test message**

Confirm all of the following before claiming completion:

```text
HTTP success returned
MongoDB contains exactly one new ContactMessage row for the test
status is "new"
email notification arrives or provider logs a successful handoff
frontend displays success and clears the form
```

- [ ] **Step 7: Verify failure behavior**

Submit deliberately invalid data and confirm the API rejects it without creating a MongoDB record.

- [ ] **Step 8: Verify rate limiting in a controlled environment**

Confirm excessive contact submissions receive HTTP 429 and the public friendly rate-limit message.

- [ ] **Step 9: Final regression check**

Verify desktop and iPhone-class mobile layouts still match the approved design. Specifically confirm the Contact section and mobile Navbar have not regressed.

- [ ] **Step 10: Final commit for any verification-driven fixes**

Only commit if verification required changes. Do not create a meaningless empty commit.

---

## Self-Review Results

- Spec coverage: persistence, email notification, validation, payload limit, rate limiting, CORS, environment secrets, failure semantics, frontend states, accessibility, responsive preservation, and end-to-end verification are all mapped to tasks.
- Placeholder scan: no implementation step relies on `TBD`, `TODO`, or unspecified generic error handling.
- Interface consistency: `validateContactPayload`, `createEmailService`, `sendContactNotification`, `createContactController`, `POST /api/contact`, and `submitContactMessage` use consistent names throughout.
- Scope: no admin inbox, CAPTCHA, visitor auto-reply, attachment upload, or unrelated portfolio redesign is included.
