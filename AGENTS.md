# Project Architecture Rules

- Public assessment inquiries are validated in a TanStack server function and inserted with the privileged client; keep RLS enabled, deny direct anonymous access, and use a honeypot to reduce spam because no public insert policy or form destination is needed in the browser.
- Keep the verified service catalog in one shared data module so page and intake prices and labels stay consistent.
- Keep agreed payment and project-timing terms centralized and tested so they stay consistent across agency pages.