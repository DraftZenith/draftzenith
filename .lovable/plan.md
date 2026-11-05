# Draft Zenith agency repositioning

## Build
- Reposition the shared navigation, footer, site-wide metadata, assistant copy, and visual tokens around Draft Zenith as an author-branding, digital-presence, and book-discoverability agency.
- Rebuild the home page as a cohesive conversion journey: requested hero, introduction, four service summaries, four genuine portfolio projects, agency differentiators, four-step process, and assessment CTA. Reuse existing assets only as abstract design imagery, never as client proof.
- Create About, Services, Portfolio, How It Works, and Get Started pages with the exact supplied positioning, project links, package names/prices, and payment terms. Keep unspecified package deliverables and timing factual: describe only scope provided, and state timing/scope are agreed after assessment where not provided. Redirect retired editorial/author pages and legacy submission paths to relevant agency pages.
- Replace the book-submission form with an accessible, validated assessment inquiry form using the supplied fields, consent checkbox, honeypot spam check, clear error/success states, and a real Lovable Cloud submission table with anonymous insert-only access. Do not claim email delivery; submissions are accessible in Lovable Cloud.

## Technical approach
- Preserve TanStack Start and the existing shared site shell. Use distinct file routes for Portfolio and How It Works, and `/get-started` for inquiries while redirecting `/submit` for compatibility.
- Store service packages in a shared data module, and use responsive semantic layouts and existing design-system tokens recolored to deep navy, warm ivory, and restrained gold.
- Add route-specific SEO metadata and update the sitemap for current agency pages. Use the current configured Cloud database and validate requests on both client and server.

## Verification
- Apply the additive database migration with explicit grants, RLS, and insert-only anonymous policy.
- Run a real test assessment through the form, confirm it is stored, remove only that test row, then verify desktop/mobile layouts and build diagnostics.
