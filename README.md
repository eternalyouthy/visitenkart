Personal Website
================

A personal site with my background, current work, and projects. It also hosts ETRNL, my multilingual vocabulary trainer. The website was built with AI assistance. I reviewed and implemented the security-sensitive parts myself, including server-side email handling, Cloudflare Turnstile verification, and secure secret management.

## Run and deploy

- `/` serves the personal site from `public/index.html`.
- `/etrnl.recognize/` serves the language trainer from `public/etrnl.recognize/`. The app, its language packs, and its offline assets are included in this repository.
- `/api/email` remains the Turnstile-gated contact endpoint.

Run `npm install`, then `npx wrangler dev` and open the HTTP URL that Wrangler prints. One Cloudflare Workers deployment serves the portfolio and trainer from the same `public/` directory.

ETRNL progress is stored by browser origin. To move progress from another hostname, use **User → Sync & Backup → Export** there and **Import & merge** on this site. For Google Drive sync, authorize the site's HTTPS origin in the Google OAuth client configuration.

* * *

Security

* The email address is stored server-side and is only returned after successful Turnstile verification.

* Cloudflare Turnstile is used to reduce automated requests.

* Secrets are stored in Cloudflare Worker environment variables and are never included in the client-side bundle.

Stack

* HTML, CSS and JavaScript

* Cloudflare Turnstile

* Cloudflare Workers

* Wrangler
