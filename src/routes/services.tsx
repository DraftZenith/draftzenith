import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";
import { PROJECT_TERMS, SERVICES } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Author Services & Packages | Draft Zenith" },
    { name: "description", content: "Explore author branding, website, Pinterest, Goodreads Listopia, book discovery, and visibility management services." },
    { property: "og:title", content: "Author Services & Packages | Draft Zenith" },
    { property: "og:description", content: "Author branding, digital presence, and book discoverability services, with clear package pricing." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: ServicesPage,
});

function ServicesPage() {
  return <SiteLayout>
    <AgencyPageIntro eyebrow="Services" title="Practical services for a stronger author presence." description="Explore the available packages across author branding, digital presence, and book discoverability. Prices are starting points; final scope, deliverables, and timing are confirmed in a proposal after assessment." />
    <section className="container-luxe pb-20 md:pb-28">
      <div className="border-t border-border">
        {SERVICES.map((service, i) => <article key={service.category} className="grid gap-6 border-b border-border py-9 md:grid-cols-12 md:gap-10 md:py-12">
          <div className="md:col-span-4"><span className="text-xs text-primary">SERVICE 0{i + 1}</span><h2 className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{service.category}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.intro}</p></div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-t border-border">
              {service.packages.map((offer) => <li key={offer.name} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center"><h3 className="font-medium">{offer.name}</h3><span className="font-serif text-xl text-primary">${offer.price.toLocaleString("en-US")}{"monthly" in offer && offer.monthly ? "/month" : ""}</span></li>)}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Specific deliverables and timelines are agreed after assessment and documented in your proposal.</p>
            <Link to="/get-started" search={{ service: service.packages[0].name }} className="mt-5 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-primary">Ask about this service <ArrowRight size={15} /></Link>
          </div>
        </article>)}
      </div>
      <div className="mt-12 grid gap-7 border-t border-border pt-8 md:grid-cols-3">
        <div><SectionEyebrow>Payment terms</SectionEyebrow></div>
        <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">One-time work is paid {PROJECT_TERMS.oneTimeDepositPercent}% upfront, with the remaining {PROJECT_TERMS.oneTimeBalancePercent}% due after agreed deliverables and before handover. Monthly retainers are due {PROJECT_TERMS.monthlyRetainerDue}. Timelines start {PROJECT_TERMS.timelineStarts}. {PROJECT_TERMS.separateCosts.join(", ")} are quoted separately where applicable.</p>
      </div>
    </section>
    <AssessmentCta title="Find the right scope for your project." />
  </SiteLayout>;
}