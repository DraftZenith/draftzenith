# Cloudflare Workers deployment notes

This project uses TanStack Start with server-side rendering and server functions. Cloudflare Workers is the intended production runtime.

## Current status

The project uses the direct Cloudflare Vite plugin integration. CI has passed TypeScript checking, ESLint, the production build, Wrangler packaging dry-run, and local Worker smoke tests for the homepage and sitemap. This does not verify Supabase, email, chat, or production secrets. Do not deploy until the application-service checks have passed.

## Local validation

Install the pinned dependencies and run the repository checks:

```sh
bun install --frozen-lockfile
bun run check
```

The check script runs TypeScript checking, ESLint, and the production Vite build.

After the build, validate the generated Worker package and run a local Worker smoke test with Wrangler:

```sh
npx --yes --package=wrangler@4.160.0 wrangler deploy --dry-run
npx --yes --package=wrangler@4.160.0 wrangler dev --local --ip 127.0.0.1 --port 8787
```

Do not run a real deploy as part of validation.

## Required runtime configuration

Configure these values in the Cloudflare Worker environment. Never commit secret values.

| Variable | Visibility | Purpose |
| --- | --- | --- |
| `SUPABASE_URL` | Runtime variable | Server-side Supabase endpoint |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret only | Server-side assessment inserts; bypasses RLS |
| `VITE_SUPABASE_URL` | Public build variable | Browser Supabase endpoint |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public build variable | Browser-safe Supabase publishable key |

The service-role key must never use a `VITE_` prefix or be exposed to browser code.

The current application reads Supabase server values from `process.env`. The Worker compatibility configuration and actual deployed runtime must be tested to confirm the configured variables and secrets are available to the request handler.

## Still required before launch

- Configure the Supabase public build values `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for production builds.
- Configure the server runtime variable `SUPABASE_URL` and secret `SUPABASE_SERVICE_ROLE_KEY` on the Cloudflare Worker.
- Confirm the `assessment_requests` table migration has been applied to the intended Supabase project. The current SQL is in `drizzle/migrations/0000_create_assessment_requests.sql`; it has not been verified as applied.
- Confirm the Supabase assessment table and migration exist in the intended project.
- Test a real assessment submission, validation rejection, honeypot handling, and database failure.
- Implement and test assessment email notifications to the agency inbox.
- Add and test server-side abuse protection/rate limiting before opening the public assessment and chat endpoints.
- Verify the Supabase `chat` Edge Function is deployed and its `LOVABLE_API_KEY` secret is configured. The repository contains the function source, but deployment and secret state have not been verified.
- Review Git history for previously committed credentials and rotate any private credentials found.

## Deployment approval

A successful preview or CI build is not production approval. Production deployment and domain changes require explicit approval after the checks above pass.
