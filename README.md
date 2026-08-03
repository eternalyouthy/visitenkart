Personal Website
================

A simple digital business card focused on my background, current work, and projects in Identity & Access Management. The website was built with AI assistance. I reviewed and implemented the security-sensitive parts myself, including server-side email handling, Cloudflare Turnstile verification, and secure secret management.

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
