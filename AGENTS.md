# Project Architecture Rules

- Public assessment inquiries are validated in a TanStack server function and inserted with the privileged client; keep RLS enabled, deny direct anonymous access, and use a honeypot to reduce spam because no public insert policy or form destination is needed in the browser.