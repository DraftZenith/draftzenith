# Cloudflare Workers deployment notes

This project uses TanStack Start with server-side rendering and server functions. Cloudflare Workers is the intended production runtime.

## Current status

The Workers deployment configuration is being validated. Do not deploy until the Cloudflare Vite adapter, generated Worker entrypoint, production build, and Wrangler dry-run have all been verified.

## Local validation

Install the pinned dependencies and run the repository checks:

```sh
bun install --frozen-lockfile
bun run check
```

The check script runs TypeScript checking, ESLint, and the production Vite build.

After the build and adapter configuration have been confirmed, validate the generated Worker with Wrangler:

```sh
bunx wrangler deploy --dry-run
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

- Verify the Cloudflare Vite plugin is actually registered by the project's Vite configuration wrapper.
- Confirm the generated TanStack Start server entry is compatible with `src/server.ts` and `wrangler.jsonc`.
- Run type checking, lint, production build, and Wrangler dry-run successfully.
- Confirm the Supabase assessment table and migration exist in the intended project.
- Test a real assessment submission, validation rejection, honeypot handling, and database failure.
- Implement and test assessment email notifications to the agency inbox.
- Add and test server-side abuse protection/rate limiting.
- Verify the chat Supabase Edge Function and its provider secret, or remove/replace the chat launcher if it is not part of the launch scope.
- Review Git history for previously committed credentials and rotate any private credentials found.

## Deployment approval

A successful preview or CI build is not production approval. Production deployment and domain changes require explicit approval after the checks above pass.
