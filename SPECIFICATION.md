# Ethan Claybourn Portfolio — Specification

Version: 1.0  
Date: September 15, 2026  
Scope: Current portfolio implementation and acceptance criteria.

## 1. Purpose

Present Ethan Claybourn’s background, software projects, education, and experience to recruiters and collaborators. Visitors should be able to explore projects, download a resume, and send a message to ec036824@ohio.edu.

## 2. Architecture

The portfolio is a single-page website built with HTML, CSS, and vanilla JavaScript. Vite builds the production assets. React and other technologies listed on the page describe Ethan’s skills and projects; they are not dependencies of this portfolio.

| File | Responsibility |
| --- | --- |
| `index.html` | Navigation, hero, About, Resume, Contact, and email dialog |
| `src/main.js` | Loads styles and initializes project and contact components |
| `src/style.css` | Theme, layout, responsive rules, and dialog styling |
| `src/components/project-entry/project-entry.js` | Project card markup and mounting logic |
| `src/components/contact/contact.js` | Dialog interaction, email submission, and error handling |
| `public/contents/Ethan-Claybourn-Resume.pdf` | Downloadable resume included in the build |
| `dist/` | Generated production output; regenerate instead of editing directly |

There is no application database or custom server. FormSubmit handles email delivery. Google Fonts provides Space Mono and Syne.

## 3. Page Structure

### Navigation

Provide anchor links to About, Projects, Resume, and Contact. The destination sections use the IDs `about`, `projects`, `resume`, and `contact`.

### Hero

- Display Ethan Claybourn’s name, Ohio University CS and AI student title, and a brief full-stack development introduction.
- Display “Available for opportunities” with a cyan status dot, aligned left and without a decorative leading line.
- Stack View Projects, Get In Touch, and Download Resume PDF vertically, aligned left, with 18px spacing.
- View Projects navigates to Projects; Get In Touch navigates to Contact.
- Download Resume PDF targets `contents/Ethan-Claybourn-Resume.pdf` using the download attribute.
- Omit the former terminal/profile block.
- Size the hero to its content rather than imposing a full-viewport minimum height.

### About

Show a personal introduction, development interests, skill tags, and summary statistics. Keep this content editable in `index.html`.

### Projects

Render project cards from the project-entry component into the `projects-mount` placeholder.

| Project | Links |
| --- | --- |
| Codenames Turing Test | GitHub repository |
| SkillTape App | GitHub repository |
| OU Dining Tracker | Local preview image |
| Focus Timer App | GitHub repository and live demo |

Each card contains a project number, title, description, technology tags, and links. Include a separate “More coming soon” card.

**Alignment requirement:** Technology tags and links must line up across cards in the same visual row despite different description lengths. CSS subgrid shares five content rows across adjacent cards, including space for wrapped tags. A flex-column fallback places tags toward the bottom on browsers without subgrid; exact alignment with differently wrapped tags is not guaranteed in that fallback.

Do not truncate descriptions or impose fixed description heights to obtain alignment.

### Resume

Show education, technical skills, work experience, club membership, and project/research experience. Current entries include Ohio University with expected graduation in May 2029, Rite Rug, Software Development Club and AI Club, AI Codenames Research Platform, SkillTape, and OU Dining Tracker.

Use the supplied resume PDF as the content reference. The page and PDF are maintained separately; changes to one do not automatically update the other.

### Contact

Provide Email, GitHub, and LinkedIn links. Email opens the in-page dialog when JavaScript is active; its underlying `mailto:` link provides a fallback.

## 4. Email Dialog

### Fields

| Field | Validation |
| --- | --- |
| Name | Required; maximum 100 characters |
| Email | Required; browser email validation; maximum 254 characters |
| Subject | Required; maximum 150 characters |
| Message | Required; maximum 2,000 characters |

Reject whitespace-only fields. Trim values before submission.

### Interaction

- Open a native modal dialog from the contact Email link.
- Support the close button, Escape, and clicking outside the dialog.
- Return focus to the Email link after closing.
- Provide labels, a dialog title and description, visible focus indicators, and an announced status message.
- Keep the dialog scrollable within the viewport and prevent background scrolling while it is open.

### Delivery

Submit JSON using `POST https://formsubmit.co/ajax/ec036824@ohio.edu` with these values:

```json
{
  "name": "Visitor name",
  "email": "visitor@example.com",
  "message": "Message text",
  "_subject": "Portfolio: Visitor subject",
  "_replyto": "visitor@example.com"
}
```

The recipient is fixed in the contact component. No Outlook login or mailbox credentials are embedded in the site. Visitor-entered information is transmitted to FormSubmit for processing.

### Submission States

| State | Behavior |
| --- | --- |
| Sending | Disable the submit button, show “Sending…”, and mark the form busy |
| Accepted | Require an OK HTTP response and `success` equal to boolean `true` or string `"true"`; show confirmation and clear the form |
| Rejected | Display the service message, limited to 500 characters, or an HTTP-status error |
| Invalid response | Explain that the service returned an unexpected response |
| Connection failure | Suggest checking connectivity or browser blocking; provide the email-link alternative |
| Timeout | Abort after 20 seconds and report that delivery is unconfirmed |
| Direct file access | Explain that the page must run through a web server |

After failure, retain field values in the current form and re-enable submission. Drafts are not saved across page refreshes. Render errors as text rather than HTML. Service acceptance does not independently prove inbox delivery.

The inbox owner must complete FormSubmit activation. An activation email was received during setup; completed activation and live delivery have not been verified in this workspace.

## 5. Visual and Responsive Requirements

- Use a dark background with cyan accents, muted secondary text, and bordered cards.
- Use Space Mono for monospaced text and Syne for display text.
- Set hero padding to `120px 56px 40px` and shared section padding to `64px 56px`.
- Leave 40px between section headings and their content.
- Use an automatically wrapping project grid with a current minimum column width of 310px.
- Collapse the About and Resume grids to one column at widths of 768px or less.
- Keep the contact dialog within the viewport using responsive width and height limits.

The existing 56px horizontal page padding and 310px project minimum need narrow-screen verification; these rules alone do not guarantee a layout without horizontal overflow on small phones.

## 6. Development and Build

```sh
npm install
npm run dev
npm run build
npm run preview
```

Use the development server for local work. Build before publishing and deploy the contents of `dist/` to a static web host. Vite copies files from `public/` into the build. Verify base paths separately if hosting under a URL subdirectory.

## 7. Acceptance Checklist

- Navigation reaches each section without hiding its heading behind navigation.
- Hero buttons appear in the specified vertical order; the status dot remains visible.
- About begins below the shortened hero with the reduced section spacing.
- Project tags and links align within each row when descriptions differ and tags wrap.
- All project links resolve, including the local dining preview asset.
- Resume download returns the supplied PDF from the production build.
- Contact dialog supports keyboard navigation, Escape, backdrop close, and focus return.
- Empty, invalid-email, and whitespace-only submissions are rejected.
- Sending prevents duplicate submission; success clears the form; failure retains the draft.
- Timeout, network, non-JSON, and service-rejection states display useful messages.
- After inbox activation, a real submission arrives at ec036824@ohio.edu and Reply targets the visitor’s address.
- Layout remains usable on desktop and narrow mobile viewports.
- `npm run build` completes successfully.

These are acceptance criteria, not a statement that every browser, link, or delivery check has already passed. Build and mocked submission/error checks have passed during development; full visual and live-delivery verification remain separate checks.
