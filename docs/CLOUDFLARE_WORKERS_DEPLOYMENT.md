# Cloudflare Workers deployment notes

This project uses TanStack Start with server-side rendering and server functions. Cloudflare Workers is the intended production runtime.

## Current status

The project uses the direct Cloudflare Vite plugin integration. GitHub Actions CI runs #72 and #74 passed on earlier commits; no GitHub Actions run is currently reported for the latest portfolio commit `4facd79` by the connector's pull-request-run query. The latest Cloudflare Worker preview build for `4facd79` completed successfully. Netlify's deploy preview also reports success for that commit. The CI workflow validates TypeScript, ESLint, the production build, Wrangler packaging, and local Worker smoke tests for public pages, the assessment form, sitemap, and robots.txt.

Cloudflare Pages and Workers Builds are separate integrations in this account. The Pages project is currently configured as a static-site deployment of `dist/client`; that directory does not contain a root `index.html` for this SSR application, so a successful Pages asset upload is not proof that the application is served correctly. Do not use the Pages `pages.dev` preview as the authoritative application preview.

The Cloudflare Workers Builds project is linked to this repository. On 12 November 2026, its legacy non-production trigger was migrated to the current Worker Previews model. Preview builds are enabled and use `npx wrangler preview`; production remains configured with `npx wrangler deploy`. The migration did not deploy or change the production Worker. Preview builds succeeded for commits `be0e765` and `4facd79`. The branch preview URL is `https://codex-cloudflare-pages-hardening-draftzenith.authorbloomcircle.workers.dev`.

CI and preview builds do not verify Supabase, email, chat deployment, origin configuration, privacy terms, or production secrets. Do not deploy to production until the application-service checks have passed and explicit approval has been given.

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

Do not run a real production deploy as part of validation. Use `npx wrangler preview` for a branch preview.

## Required configuration

Keep public build values separate from server-side secrets. Never commit secret values.

| Variable | Configure in | Exposure | Purpose |
| --- | --- | --- | --- |
| `VITE_SUPABASE_URL` | Production build environment | Public | Browser Supabase endpoint |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Production build environment | Public | Browser-safe Supabase publishable key |
| `SUPABASE_URL` | Cloudflare Worker runtime | Runtime variable | Server-side Supabase endpoint |
| `SUPABASE_SERVICE_ROLE_KEY` | Cloudflare Worker secret | Secret only | Server-side assessment inserts; bypasses RLS |
| `LOVABLE_API_KEY` | Supabase Edge Function secrets | Secret only | Chat function's Lovable AI Gateway credential |
| `CHAT_ALLOWED_ORIGINS` | Supabase Edge Function environment | Non-secret allowlist | Comma-separated exact origins permitted to call the chat endpoint, including the final HTTPS site origin |

The service-role key and Lovable API key must never use a `VITE_` prefix or be exposed to browser code.

The assessment handler reads server values from `process.env`. The chat function runs separately as a Supabase Edge Function, so its provider key belongs in that function's Supabase secrets, not in the Cloudflare Worker.

## Still required before launch

- Configure the Supabase public build values `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` for production builds.
- Configure the server runtime variable `SUPABASE_URL` and secret `SUPABASE_SERVICE_ROLE_KEY` on the Cloudflare Worker.
- The assessment_requests table is now created on the verified Draft Zenith Supabase project (`ytypvumtxbmpszorbcqd`, EU West) with RLS enabled and no public/anonymous/authenticated table grants. The service_role has insert access. The applied database migrations are `create_assessment_requests` and `lock_down_assessment_requests`; keep the Drizzle migration source aligned with the applied SQL.
- Test a real assessment submission, validation rejection, honeypot handling, and database failure.
- Choose an email provider and verified sender, then implement and test assessment email notifications to the agency inbox.
- Publish a privacy notice before collecting assessment data. The user has confirmed the responsible identity as **Funmi K., trading as Draft Zenith** (not Christine Mackay). The contact email is `DraftZenith@gmail.com`. Unsuccessful assessment enquiries may be retained for up to 12 months after last meaningful contact; a returning person may reopen an enquiry before deletion, or submit a new enquiry after deletion. Still confirm the business/contact address, analytics and cookie use, service providers, separate retention schedules, and how data requests will be handled before publishing the notice.
- Decide whether launch will use the existing `authorbloomcircle.workers.dev` subdomain temporarily or a purchased custom domain. No custom Worker domain is currently attached to the account.
- Add and test server-side abuse protection/rate limiting before opening the public assessment and chat endpoints. The chat origin allowlist is a browser-origin control, not rate limiting or bot protection.
- Verify the Supabase `chat` Edge Function is deployed, its `LOVABLE_API_KEY` secret is configured, and `CHAT_ALLOWED_ORIGINS` contains the exact production HTTPS origin. The function now rejects requests without an explicitly allowed `Origin` and returns CORS headers only for allowlisted origins. The repository contains the function source, but deployment and secret state have not been verified.
- Review note: the two historical `.env` versions were checked. They contained Supabase project identifiers, URLs, and publishable keys only; no service-role key or private credential was found in those files. This was a targeted `.env` history check, not a complete repository-wide secret audit.

## Deployment approval

A successful preview or CI build is not production approval. Production deployment and domain changes require explicit approval after the checks above pass. The latest preview confirms build and deployment success only; it has not been independently visually inspected on desktop and mobile.


## Supabase project setup (13 November 2026)

A new project named **Draft Zenith Production** was created in the verified `DraftZenith's Org` organization after the user approved the $0/month quote. Project reference: `ytypvumtxbmpszorbcqd`; region: `eu-west-1` (EU West, Ireland); database: PostgreSQL 17.

The `public.assessment_requests` table was created to match the server function's insert payload. RLS is enabled. All table privileges were revoked from `anon`, `authenticated`, and `PUBLIC`; `service_role` retains the privileges needed for trusted server-side inserts. Read-only verification confirmed anonymous and authenticated roles cannot SELECT or INSERT, while service_role can INSERT. The security advisor reports only the informational `rls_enabled_no_policy` notice, which is expected for a server-only table with no public policies. No assessment records have been inserted.

The Cloudflare Workers **branch preview build configuration only** now has the public `VITE_SUPABASE_URL`, `VITE_SUPABASE_PROJECT_ID`, and `VITE_SUPABASE_PUBLISHABLE_KEY` values configured. The assessment form remains explicitly disabled (`VITE_ASSESSMENT_FORM_ENABLED=false`) and the privacy URL remains blank. These values were not added to production build settings.

Still required: configure `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` as server-only secrets for the preview Worker, implement/verify rate limiting and Turnstile before opening public write paths, deploy and configure the chat Edge Function only after its provider secret and abuse controls are ready, and test a real form submission end-to-end. Do not place the service-role key in GitHub, VITE variables, or browser code.


### Assessment endpoint server-side launch gate

The assessment server function now independently checks runtime `ASSESSMENT_FORM_ENABLED=true` and a non-empty `ASSESSMENT_PRIVACY_NOTICE_URL` before inserting a record. This mirrors the frontend gate and prevents direct invocation of the server function from bypassing the disabled form.

The Cloudflare **branch preview** build configuration has both runtime-named values explicitly set to disabled/blank as a defensive configuration measure. The public `VITE_*` values remain configured only for the branch preview. Do not enable assessment submissions until the privacy notice is reviewed and published, Turnstile or equivalent abuse controls are deployed and verified, and server-only `SUPABASE_URL` plus `SUPABASE_SERVICE_ROLE_KEY` are configured as Worker secrets. The Supabase connector does not expose the service-role secret value, so it must be obtained and set directly by the project owner in the Supabase/Cloudflare dashboards. Never put it in source control, build-time `VITE_*` variables, or browser code.
