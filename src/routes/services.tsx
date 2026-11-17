import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";
import { SERVICES, PROJECT_TERMS } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Author Services | Draft Zenith" },
    { name: "description", content: "Explore author branding and websites, Pinterest marketing, book trailers, book discovery and ongoing author visibility support from Draft Zenith." },
    { property: "og:title", content: "Author Services | Draft Zenith" },
    { property: "og:description", content: "Flexible author services, available individually or as a coordinated plan shaped around your goals." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: ServicesPage,
});

function ServicesPage() {
  return <SiteLayout>
    <AgencyPageIntro
      eyebrow="Services"
      title="The right support for your book and author presence."
      description="From a clearer author website to a coordinated visibility plan, Draft Zenith brings together the people and skills to plan and deliver the work. Choose one service or combine several around what you want to achieve."
    />

    <section className="container-luxe pb-16 md:pb-20">
      <div className="grid gap-5 border-y border-border py-7 md:grid-cols-3 md:gap-8 md:py-9">
        <div><SectionEyebrow>Flexible by design</SectionEyebrow><h2 className="mt-3 font-serif text-2xl">Start where you need us.</h2></div>
        <p className="text-sm leading-relaxed text-muted-foreground">You can commission an individual service, or ask us to coordinate several parts of a project. We shape the scope around your book, current presence, audience and priorities.</p>
        <p className="text-sm leading-relaxed text-muted-foreground">Our team can take work from research and planning through creative production, implementation and ongoing management. You receive an agreed scope, deliverables and timeline before work begins.</p>
      </div>
    </section>

    <section className="container-luxe pb-20 md:pb-28">
      <div className="mb-10 max-w-3xl space-y-3">
        <SectionEyebrow>What we can do</SectionEyebrow>
        <h2 className="font-serif text-3xl leading-tight md:text-5xl">Five connected areas of author support.</h2>
        <p className="leading-relaxed text-muted-foreground">Each service is available on its own. Where it makes sense, we can connect the work so your author brand, book presentation and discovery activity support one another.</p>
      </div>
      <div className="space-y-6">
        {SERVICES.map((service, i) => <article key={service.category} id={`service-${i + 1}`} className="scroll-mt-28 border border-border bg-card">
          <div className="grid gap-7 p-6 md:grid-cols-12 md:gap-10 md:p-9">
            <div className="md:col-span-4">
              <span className="text-xs uppercase tracking-[0.22em] text-primary">Service 0{i + 1}</span>
              <h3 className="mt-3 font-serif text-2xl leading-tight md:text-3xl">{service.category}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.intro}</p>
              <div className="mt-6 border-l-2 border-primary pl-4">
                <p className="text-xs uppercase tracking-wider text-primary">Why it matters</p>
                <p className="mt-2 text-sm leading-relaxed">{service.benefit}</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What the work can include</h4>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true"/><span>{item}</span></li>)}
              </ul>
              {service.packages.length > 0 && <div className="mt-7 border-t border-border pt-5">
                <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Published packages</h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {service.packages.map((offer) => <div key={offer.name} className="border border-border bg-background p-4">
                    <p className="text-sm font-medium">{offer.name}</p>
                    <p className="mt-2 font-serif text-2xl text-primary">${offer.price.toLocaleString("en-US")}</p>
                  </div>)}
                </div>
              </div>}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{service.quote}</p>
              <Link to="/get-started" search={{ service: service.packages[0]?.name ?? service.category }} className="mt-5 inline-flex min-h-11 items-center gap-2 border-b border-primary pb-1 text-sm font-medium hover:text-primary">
                {service.cta} <ArrowRight size={15}/>
              </Link>
            </div>
          </div>
        </article>)}
      </div>
    </section>

    <section className="border-y border-border bg-secondary/50">
      <div className="container-luxe py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-4"><SectionEyebrow>How services connect</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">One clear journey, with the right pieces working together.</h2></div>
          <div className="md:col-span-8">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">For example, a book trailer can introduce the story visually. Pinterest content can extend its reach through relevant searches and browsing. A dedicated book page gives visitors a useful place to learn more, follow retailer links or sign up for updates.</p>
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["01", "Introduce", "A book trailer and supporting graphics give the book a visual introduction."],
                ["02", "Extend", "Pinterest strategy, keyword research and content create additional discovery routes."],
                ["03", "Connect", "A book landing page brings key information, purchase links and reader sign-up together."],
              ].map(([number, title, body]) => <li key={number} className="border-t border-primary pt-4"><span className="text-xs text-primary">{number}</span><h3 className="mt-2 font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p></li>)}
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="container-luxe py-16 md:py-20">
      <div className="grid gap-8 border-b border-border pb-9 md:grid-cols-12">
        <div className="md:col-span-4"><SectionEyebrow>Pricing & project terms</SectionEyebrow><h2 className="mt-3 font-serif text-2xl md:text-3xl">Clear scope before work begins.</h2></div>
        <div className="space-y-4 md:col-span-8">
          <p className="leading-relaxed text-muted-foreground">The four published prices shown above are fixed as listed. Book trailers, broader website and branding projects, research and ongoing management are scoped to your requirements and quoted after assessment. You do not need to purchase a bundle to work with us.</p>
          <p className="text-sm leading-relaxed text-muted-foreground">One-time projects are paid {PROJECT_TERMS.oneTimeDepositPercent}% upfront, with the remaining {PROJECT_TERMS.oneTimeBalancePercent}% due after agreed deliverables and before handover. Monthly retainers are due {PROJECT_TERMS.monthlyRetainerDue}. Timelines start {PROJECT_TERMS.timelineStarts}. {PROJECT_TERMS.separateCosts.join(", ")} are quoted separately where applicable.</p>
        </div>
      </div>
    </section>

    <AssessmentCta title="Tell us what you want to strengthen."/>
  </SiteLayout>;
}
