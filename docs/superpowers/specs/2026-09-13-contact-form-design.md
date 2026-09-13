# Contact Form Architecture Design

Date: 2026-09-13
Project: Faisal Kader MERN Portfolio
Status: Approved design direction, implementation pending

## Goal

Turn the portfolio contact form into a real MERN feature that accepts visitor messages, validates them on the server, stores them in MongoDB, and sends an email notification to Faisal Kader.

The implementation must preserve the current approved visual design. The form should gain real behavior without redesigning the Contact section.

## Selected Approach

Use both MongoDB persistence and email notification.

Flow:

1. Visitor enters Name, Email, Subject and Message.
2. Frontend validates obvious missing/invalid values for immediate feedback.
3. Frontend sends `POST /api/contact` to the Express backend.
4. Backend performs authoritative validation and sanitization.
5. Backend stores the valid message in MongoDB.
6. Backend sends an email notification to the portfolio owner.
7. Frontend shows success or failure state.
8. On success, the form is cleared.

MongoDB remains the source of truth. Email is a notification layer, not the only copy of the message.

## Frontend Requirements

Fields:

- `name`
- `email`
- `subject`
- `message`

Behavior:

- Keep the current Contact section layout and styling.
- Convert the current decorative form into a real submit form.
- Prevent duplicate submission while a request is in progress.
- Button text changes from `Send Message` to `Sending...` during submission.
- Show clear field-level validation where practical.
- Show a concise success message after a successful submission.
- Show a friendly error message if the server request fails.
- Clear fields only after confirmed success.
- Do not display fake success if the API fails.

Accessibility:

- Inputs must have associated labels.
- Validation messages should be understandable without relying only on color.
- Submission state should be accessible to keyboard and screen-reader users.

## API Contract

Endpoint:

`POST /api/contact`

Request body:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "subject": "Project enquiry",
  "message": "Message body"
}
```

Success response:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

Validation failure:

```json
{
  "success": false,
  "message": "Please check the submitted information.",
  "errors": {
    "email": "Enter a valid email address."
  }
}
```

Unexpected server failure:

```json
{
  "success": false,
  "message": "Unable to send your message right now. Please try again later."
}
```

Do not expose stack traces, database errors, mail credentials, or internal exception details to the client.

## Server Validation

The backend is authoritative even if frontend validation passes.

Recommended validation rules:

- `name`: required, trimmed, 2-80 characters.
- `email`: required, trimmed, normalized to lowercase where appropriate, valid email format, maximum 254 characters.
- `subject`: required, trimmed, 3-150 characters.
- `message`: required, trimmed, 10-5000 characters.
- Reject unexpected large payloads.
- Reject fields that are not strings.

Do not render submitted content as trusted HTML.

## MongoDB Model

Collection/model: `ContactMessage`

Suggested fields:

```text
name        String   required
email       String   required
subject     String   required
message     String   required
status      String   default: "new"
createdAt   Date     automatic
updatedAt   Date     automatic
```

Initial allowed status values:

- `new`
- `read`
- `replied`
- `archived`

Only `new` is needed for the first public form implementation, but the status field is included so a future admin inbox can be added without migrating the data model.

## Email Notification

After the MongoDB write succeeds, send a notification email to the portfolio owner.

Recommended notification content:

- Subject: `New Portfolio Contact Message — <visitor subject>`
- Visitor name
- Visitor email
- Visitor subject
- Visitor message
- Submission timestamp

The mail sender must be a server-controlled verified account. The visitor email must be used as `Reply-To`, not as the authenticated sender.

This prevents spoofing problems and improves deliverability.

## Failure Handling

### Database save fails

- Return server error.
- Do not report success.
- Do not attempt to treat email as the primary storage path.

### Database save succeeds but email notification fails

- Keep the saved MongoDB message.
- Log the notification failure on the server.
- The public request may still return success because the visitor message was safely received and persisted.
- Email notification can be retried or reviewed later.

This avoids losing a valid enquiry only because the mail provider was temporarily unavailable.

## Security and Abuse Protection

Required baseline controls:

- Server-side validation.
- Express JSON body-size limit.
- Contact-route rate limiting by IP.
- CORS limited to approved frontend origins in production.
- Environment variables for database connection and mail credentials.
- No secrets committed to GitHub.
- Generic public error responses for unexpected errors.

Do not add CAPTCHA in the first implementation unless spam becomes a real problem. The first layer should be validation + rate limiting.

## Environment Variables

Expected server configuration, naming can be finalized during implementation:

```text
MONGODB_URI=
CLIENT_ORIGIN=
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASS=
MAIL_FROM=
CONTACT_TO_EMAIL=
```

If the selected mail provider uses API keys instead of SMTP, the email service may use provider-specific variables while keeping the same application-level interface.

## Proposed Final MERN Structure

```text
client/
  src/
    components/
      Contact.jsx
    services/
      contactApi.js

server/
  src/
    models/
      ContactMessage.js
    routes/
      contactRoutes.js
    controllers/
      contactController.js
    validators/
      contactValidator.js
    services/
      emailService.js
    middleware/
      contactRateLimit.js
```

Exact folders may be adjusted to match the final React/Express repository structure, but responsibilities should stay separated.

## Testing Strategy

Backend tests should cover:

- valid submission creates one MongoDB message.
- missing required fields return validation failure.
- malformed email is rejected.
- oversized input is rejected.
- rate limiting blocks excessive submissions.
- database failure returns an error.
- email notification is attempted after persistence.
- email failure does not delete the stored MongoDB message.

Frontend tests should cover:

- submit button enters loading state.
- duplicate clicks cannot submit twice while pending.
- validation errors are displayed.
- confirmed success clears the form.
- API failure preserves the entered message and displays an error.

## Non-Goals for First Release

Do not include these in the first Contact Form implementation:

- admin inbox UI.
- authentication for reading contact messages.
- CAPTCHA unless abuse requires it.
- automatic reply emails to visitors.
- attachments.
- chat or live messaging.

These can be separate future features.

## Acceptance Criteria

The feature is complete only when:

1. A valid visitor submission reaches the Express API.
2. The message is saved in MongoDB.
3. The owner notification email is attempted using server-side credentials.
4. The frontend gives truthful loading/success/error feedback.
5. Invalid submissions are rejected server-side.
6. Basic rate limiting is active.
7. Secrets are environment-only.
8. Existing approved Contact section visual design remains materially unchanged.
9. Desktop and mobile layouts remain responsive.
10. Production build and end-to-end submission are verified before claiming completion.
