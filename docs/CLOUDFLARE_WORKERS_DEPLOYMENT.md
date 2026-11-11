# Cloudflare Workers deployment notes

This project uses TanStack Start with server-side rendering and server functions. Cloudflare Workers is the intended production runtime.

## Current status

The project uses the direct Cloudflare Vite plugin integration. CI run #54 has passed TypeScript checking, ESLint, the production build, Wrangler packaging dry-run, and local Worker smoke tests for the homepage, sitemap, and dynamic robots.txt sitemap URL. This does not verify Supabase, email, chat, or production secrets. Do not deploy until the application-service checks have passed.

## Local validation

Install the pinned dependencies and run the repository checks:

```sh
bun install --frozen-lockfile
bun run check
```

The check script runs TypeScript checking, ESLint, and the production Vite build. The local Worker smoke test also confirms that robots.txt advertises the sitemap using the request's current origin.

After the build, validate the generated Worker package and run a local Worker smoke test with Wrangler:

```sh
npx --yes --package=wrangler@4.160.0 wrangler deploy --dry-run
npx --yes --package=wrangler@4.160.0 wrangler dev --local --ip 127.0.0.1 --port 8787
```

Do not run a real deploy as part of validation.

## Required configuration

Keep public build values separate from server-side secrets. Never commit secret values.

| Variable | Configure in | Exposure | Purpose |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | Production build environment | Public | Browser Supabase endpoint |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Production build environment | Public | Browser-safe Supabase publishable key |
| `SUPABASE_URL` | Cloudflare Worker runtime | Runtime variable | Server-side Supabase endpoint |
| `SUPABASE_SERVICE_ROLE_KEY` | Cloudflare Worker secret | Secret only | Server-side assessment inserts; bypasses RLS |
| `LOVABLE_API_KEY` | Supabase Edge Function secrets | Secret only | Chat function's Lovable AI Gateway credential |

The service-role key and Lovable API key must never use a `VITE_` prefix or be exposed to browser code.

The assessment handler reads server values from `process.env`. The chat function runs separately as a Supabase Edge Function, so its provider key belongs in that function's Supabase secrets, not in the Cloudflare Worker.

## Still required before launch

- Configure the Supabase public build values `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for production builds.
- Configure the server runtime variable `SUPABASE_URL` and secret `SUPABASE_SERVICE_ROLE_KEY` on the Cloudflare Worker.
- Confirm the `assessment_requests` table migration has been applied to the intended Supabase project. The current SQL is in `drizzle/migrations/0000_create_assessment_requests.sql`; it has not been verified as applied.
- Test a real assessment submission, validation rejection, honeypot handling, and database failure.
- Implement and test assessment email notifications to the agency inbox.
- Add and test server-side abuse protection/rate limiting before opening the public assessment and chat endpoints.
- Verify the Supabase `chat` Edge Function is deployed and its `LOVABLE_API_KEY` secret is configured. The repository contains the function source, but deployment and secret state have not been verified.
- Review note: the two historical `.env` versions were checked. They contained Supabase project identifiers, URLs, and publishable keys only; no service-role key or private credential was found in those files. This was a targeted `.env` history check, not a complete repository-wide secret audit.

## Deployment approval

A successful preview or CI build is not production approval. Production deployment and domain changes require explicit approval after the checks above pass.
