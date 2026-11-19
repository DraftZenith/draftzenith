import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";
import { PROJECT_TERMS, SERVICES } from "@/data/services";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [
    { title: "Pricing and Packages | Draft Zenith" },
    { name: "description", content: "Review Draft Zenith's author branding, Pinterest, book trailer, media and monthly visibility package prices and inclusions." },
    { property: "og:title", content: "Pricing and Packages | Draft Zenith" },
    { property: "og:description", content: "Clear package prices and inclusions for author and book visibility services." },
    { property: "og:type", content: "website" },
  ] }),
  component: PricingPage,
});

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function PricingPage() {
  const pricedServices = SERVICES.filter((service) => service.packages.length > 0);
  const customServices = SERVICES.filter((service) => service.packages.length === 0 || service.packages.some((item) => item.name === "Book Landing Page"));

  return <SiteLayout>
    <section className="bg-[#001220] text-[#fdf6e6]">
      <div className="container-luxe pb-16 pt-36 md:pb-24 md:pt-48">
        <SectionEyebrow tone="light">Pricing and packages</SectionEyebrow>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.04] text-balance sm:text-5xl md:text-7xl">Know what each service includes before you enquire.</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#e8ddc7] md:text-lg">These prices show Draft Zenith's service fees and the work included in each package. One-time projects and monthly management are labelled separately. Where a service needs a custom scope, we explain that below.</p>
      </div>
    </section>

    <section className="bg-[#f7f0e2]">
      <div className="container-luxe grid gap-5 py-10 md:grid-cols-3 md:gap-10 md:py-14">
        <div><SectionEyebrow>How to read the prices</SectionEyebrow><h2 className="mt-3 font-serif text-2xl">The fee and the scope go together.</h2></div>
        <p className="text-sm leading-relaxed text-[#566170]">One-time prices are project fees. Monthly prices are recurring management fees paid in advance. The written proposal confirms the final scope, materials, timing and any separate costs before work begins.</p>
        <p className="text-sm leading-relaxed text-[#566170]">You can commission a single service or combine services through Author Brand Elevation. There is no compulsory bundle or requirement to buy more than your project needs.</p>
      </div>
    </section>

    <section className="bg-[#fffaf0]">
      <div className="container-luxe space-y-16 py-14 md:space-y-20 md:py-20">
        {pricedServices.map((service, index) => <section key={service.category} className="scroll-mt-24 border-t border-[#d9c8a8] pt-8">
          <div className="grid gap-7 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#a8752d]">0{index + 1} / Service pricing</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">{service.category}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#566170]">{service.intro}</p>
              <Link to="/services/$slug" params={{ slug: slugify(service.category) }} className="mt-6 inline-flex items-center gap-2 border-b border-[#a8752d] pb-1 text-sm font-semibold text-[#0b1d32]">View service details <ArrowRight size={15}/></Link>
            </div>
            <div className="grid gap-4 md:col-span-8 lg:grid-cols-2">
              {service.packages.map((offer) => <article key={offer.name} className={`flex flex-col border p-6 ${offer.featured ? "border-[#a8752d] bg-[#f4e8d0]" : "border-[#d9c8a8] bg-white"}`}>
                <div className="flex items-start justify-between gap-3">
                  <div><h3 className="font-serif text-2xl">{offer.name}</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">{offer.description}</p></div>
                  {offer.featured && <span className="shrink-0 bg-[#203a36] px-2 py-1 text-[10px] uppercase tracking-wider text-[#fff8e9]">Recommended starting point</span>}
                </div>
                <p className="mt-6 font-serif text-4xl text-[#8d5e29] tabular-nums">${offer.price}<span className="ml-2 font-sans text-xs uppercase tracking-wide text-[#566170]">{offer.billing === "monthly" ? "/ month" : "one-time"}</span></p>
                <div className="mt-6 border-t border-[#d9c8a8] pt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#566170]">Package includes</h4>
                  <ul className="mt-4 space-y-3">
                    {offer.inclusions.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#394651]"><Check size={15} className="mt-0.5 shrink-0 text-[#a8752d]"/><span>{item}</span></li>)}
                  </ul>
                </div>
                <Link to="/get-started" search={{ service: offer.name }} className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 border border-[#0b1d32] px-4 py-3 text-sm font-semibold text-[#0b1d32] transition hover:bg-[#0b1d32] hover:text-white">Enquire about this package <ArrowRight size={15}/></Link>
              </article>)}
            </div>
          </div>
          <p className="mt-7 max-w-4xl text-sm leading-relaxed text-[#566170]">{service.quote}</p>
        </section>)}
      </div>
    </section>

    <section className="bg-[#e4e9df]">
      <div className="container-luxe grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-4"><SectionEyebrow>Custom quotations</SectionEyebrow><h2 className="mt-3 font-serif text-3xl leading-tight">Some projects need a tailored scope.</h2></div>
        <div className="space-y-5 md:col-span-8">
          <p className="leading-relaxed text-[#536056]">Full author branding, logo and visual identity development, complete author websites, website improvements, book discovery research and Goodreads engagement are scoped to the work required. Book trailer, media and monthly packages have the introductory prices shown above; any extra work is agreed separately.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border-t border-[#71856f] pt-4"><h3 className="font-serif text-xl">Book Landing Page</h3><p className="mt-2 text-sm text-[#536056]">A dedicated book page is a one-time project priced at <strong>$450</strong>.</p></div>
            <div className="border-t border-[#71856f] pt-4"><h3 className="font-serif text-xl">Book discovery and audience research</h3><p className="mt-2 text-sm text-[#536056]">Research depth and any agreed engagement activity are quoted to the book and campaign scope.</p></div>
          </div>
          <Link to="/get-started" search={{ service: "Author Brand Elevation" }} className="inline-flex items-center gap-2 border-b border-[#71856f] pb-1 text-sm font-semibold text-[#203a36]">Request a tailored assessment <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#f4e8d0]">
      <div className="container-luxe grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-16">
        <div className="md:col-span-4"><SectionEyebrow>Payment and additional costs</SectionEyebrow><h2 className="mt-3 font-serif text-2xl md:text-3xl">The terms are clear before work begins.</h2></div>
        <div className="space-y-4 md:col-span-8">
          <p className="leading-relaxed text-[#65584a]">One-time projects are paid {PROJECT_TERMS.oneTimeDepositPercent}% upfront and {PROJECT_TERMS.oneTimeBalancePercent}% before final delivery or handover. Monthly management is paid {PROJECT_TERMS.monthlyRetainerDue}. Work outside the agreed scope is quoted separately.</p>
          <p className="text-sm leading-relaxed text-[#65584a]">Domain registration, hosting, premium software licences, advertising spend, actors, voice talent, external publication charges and other third-party costs are separate where applicable unless expressly included in the written agreement.</p>
          <p className="text-sm leading-relaxed text-[#65584a]">For media work, Draft Zenith's fee covers the agreed press, research and outreach work. A publication independently decides whether to accept or feature a submission. Sponsored placements are identified as paid, and publication fees are disclosed separately.</p>
        </div>
      </div>
    </section>
    <AssessmentCta title="Not sure which service fits? Tell us what you need."/>
  </SiteLayout>;
}
