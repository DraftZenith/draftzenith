import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";
import { SERVICES } from "@/data/services";

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = SERVICES.find((item) => slugify(item.category) === params.slug);
    return { meta: [
      { title: service ? `${service.category} | Draft Zenith` : "Author Services | Draft Zenith" },
      { name: "description", content: service ? service.intro : "Explore author and book visibility services from Draft Zenith." },
    ] };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = SERVICES.find((item) => slugify(item.category) === slug);

  if (!service) {
    return <SiteLayout>
      <section className="container-luxe py-40">
        <SectionEyebrow>Service not found</SectionEyebrow>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">We could not find that service.</h1>
        <Link to="/services" className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-2 text-sm">View all services <ArrowRight size={15}/></Link>
      </section>
    </SiteLayout>;
  }

  const isMedia = service.category === "Media & Professional Recognition";
  const isPinterest = service.category === "Pinterest Marketing & Book Visibility";
  const isMonthly = service.category === "Ongoing Author Visibility Management";
  const isTrailer = service.category === "Book Trailers & Visual Promotion";
  const isBranding = service.category === "Author Branding & Digital Presence";
  const faqs = [
    ["Can I commission this service on its own?", "Yes. You can ask for this service on its own. If another service would usefully support the same goal, we can explain that option without requiring you to add it."],
    ["How is the project scoped?", "We begin by learning about your book, current materials and objectives. The proposal confirms the agreed deliverables, fees and timing before work starts."],
    ["Do you guarantee sales, rankings or coverage?", isMedia ? "No. Publications make their own editorial decisions. We can prepare materials, research suitable outlets and manage submissions, but cannot guarantee publication, reviews or interviews. Paid placements are identified as sponsored." : "No. Results depend on factors outside our control, including reader behaviour and third-party platforms. We agree on the work and reporting in advance rather than promise a particular sales or visibility outcome."],
    ...(isPinterest ? [
      ["What is the difference between Pinterest Foundation and the campaigns?", "Foundation covers account setup or optimisation and the initial organisation of the account. It is not a managed campaign. Visibility Campaign includes 15 custom pins and 30 days of management; Growth Campaign includes 30 or more pins and 60 days of management."],
      ["Do Pinterest impressions mean book sales?", "No. Impressions, saves and outbound clicks measure different kinds of activity. We report available indicators and do not treat them as guaranteed sales or reader conversions."],
    ] : []),
    ...(isMedia ? [
      ["Are publication fees included in the service price?", "No. The listed fee is for Draft Zenith's press, research or outreach work. External publication charges and sponsored placement fees are separate and must be disclosed before you decide."],
      ["Can you guarantee a review, interview or feature?", "No. Earned editorial coverage is decided by each publication. Paid sponsored placements are a separate option and are identified as paid."],
    ] : []),
    ...(isMonthly ? [
      ["What is included each month?", "The monthly programme includes a visibility plan, 12 original Pinterest pins, publishing and scheduling, keyword and board optimisation, monitoring, recommendations and a monthly report. The selected level determines whether agreed Goodreads research and promotional content coordination are also included."],
      ["When is the monthly fee due?", "Monthly management is paid in full in advance. Additional books, extra content, other platforms, video production and separate campaigns are scoped and quoted independently."],
    ] : []),
    ...(isTrailer ? [
      ["How long is the finished trailer and how many revisions are included?", "Video duration, revision arrangements and delivery timing are confirmed in the written project scope. They are not fixed in the introductory price listing."],
      ["Are voice talent and premium music licences included?", "Appropriately licensed music or sound is selected as part of production. Actors, voice talent, premium licences and other external production costs are separate where applicable unless expressly included."],
    ] : []),
    ...(isBranding ? [
      ["What materials should I provide for an author website or landing page?", "Please provide accurate biography information, book descriptions, book covers, photographs, awards, testimonials and any other approved content relevant to the project."],
      ["Are domain registration and hosting included?", "Domain registration, hosting subscriptions, premium software and other third-party expenses are separate unless the written project agreement expressly includes them."],
    ] : []),
  ] as [string, string][];

  return <SiteLayout>
    <section className="bg-[#001220] text-[#fdf6e6]">
      <div className="container-luxe pb-16 pt-36 md:pb-24 md:pt-48">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[#e8ddc7] hover:text-[#c08848]"><ArrowLeft size={15}/> All services</Link>
        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionEyebrow tone="light">Draft Zenith services</SectionEyebrow>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.04] sm:text-5xl md:text-7xl">{service.category}</h1>
          </div>
          <p className="text-base leading-relaxed text-[#e8ddc7] md:col-span-4">{service.intro}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/get-started" search={{ service: service.category }} className="inline-flex min-h-12 items-center gap-3 bg-[#c08848] px-6 py-3 text-sm font-semibold text-[#001220]">Discuss this service <ArrowRight size={16}/></Link>
          <a href="#what-is-included" className="inline-flex min-h-12 items-center border border-[#c08848] px-6 py-3 text-sm">See what's included</a>
        </div>
      </div>
    </section>



<section className="bg-[#fdf6e6]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>The need</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Work that has a clear purpose.</h2></div>
        <div className="md:col-span-8"><p className="max-w-3xl text-lg leading-relaxed text-[#65584a]">{service.benefit}</p></div>
      </div>
    </section>

    <section id="what-is-included" className="bg-[#f4e8d0]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>What we can deliver</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">The work, set out clearly.</h2></div>
        <ul className="grid gap-5 sm:grid-cols-2 md:col-span-8">
          {service.deliverables.map((item) => <li key={item} className="flex gap-3 border-t border-[#c08848]/40 pt-4 text-sm leading-relaxed text-[#001220]"><Check size={17} className="mt-0.5 shrink-0 text-[#a8752d]"/>{item}</li>)}
        </ul>
      </div>
    </section>

    <section className="bg-[#fdf6e6]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>How the project works</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">A clear brief before the work begins.</h2></div>
        <ol className="md:col-span-8">
          {[
            ["Tell us about the project", "Share your book, current materials and what you want this service to address."],
            ["Review and recommendation", "We assess the request and clarify the most useful scope for the work."],
            ["Agree on deliverables", "You receive the agreed work, fee and timeline before deciding whether to proceed."],
            ["Production and handover", "The team completes the agreed work and provides the relevant files, links or report."],
          ].map(([title, body], i) => <li key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-[#c08848]/40 py-5"><span className="font-serif text-2xl text-[#a8752d]">0{i + 1}</span><div><h3 className="font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[#65584a]">{body}</p></div></li>)}
        </ol>
      </div>
    </section>

    <section className="bg-[#001220] text-[#fdf6e6]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-5"><SectionEyebrow tone="light">Who this is for</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Support shaped around the stage you're at.</h2></div>
        <div className="space-y-4 text-sm leading-relaxed text-[#e8ddc7] md:col-span-7">
          <p>This service may suit authors who have a specific need in this area, whether they are preparing a new book, improving an existing author presence or reviewing how their work is currently presented.</p>
          <p>You do not need to commission every Draft Zenith service. We can work on this requirement alone or coordinate it with other services when there is a practical reason to do so.</p>
          {isPinterest && <p>For Pinterest projects, the agreed scope will clarify the account work, creative, publishing activity and reporting included in the selected package.</p>}
          {isMedia && <p>Earned editorial coverage remains the publication's decision. Any paid feature or sponsored placement will be described transparently as paid content.</p>}
        </div>
      </div>
    </section>

    <section className="bg-[#f4e8d0]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-14 md:py-20">
        <div className="md:col-span-4"><SectionEyebrow>{isTrailer || isMedia || isMonthly ? "Introductory package pricing" : "Pricing"}</SectionEyebrow><h2 className="mt-4 font-serif text-3xl">Know the price before work begins.</h2></div>
        <div className="md:col-span-8">
          {service.packages.length > 0 ? <div className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              {service.packages.map((item) => <article key={item.name} className={`flex flex-col border p-5 ${item.featured ? "border-[#a8752d] bg-[#fffaf0] shadow-sm" : "border-[#c08848]/40 bg-[#fdf6e6]"}`}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl">{item.name}</h3>
                  {item.featured && <span className="shrink-0 bg-[#203a36] px-2 py-1 text-[10px] uppercase tracking-wider text-[#fff8e9]">Recommended starting point</span>}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#65584a]">{item.description}</p>
                <p className="mt-4 font-serif text-3xl text-[#a8752d]">${item.price}<span className="ml-2 font-sans text-xs uppercase tracking-wider text-[#65584a]">{item.billing === "monthly" ? "/ month" : "one-time"}</span></p>
                <div className="mt-5 border-t border-[#c08848]/30 pt-4">
                  <p className="text-xs uppercase tracking-wider text-[#65584a]">Included</p>
                  <ul className="mt-3 space-y-2">
                    {item.inclusions.map((inclusion) => <li key={inclusion} className="flex gap-2 text-sm leading-relaxed text-[#3d403b]"><Check size={15} className="mt-0.5 shrink-0 text-[#a8752d]"/><span>{inclusion}</span></li>)}
                  </ul>
                </div>
                <Link to="/get-started" search={{ service: item.name }} className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-[#a8752d] px-4 py-2 text-sm font-semibold text-[#203a36] hover:bg-[#f4e8d0]">Enquire about {item.name} <ArrowRight size={15}/></Link>
              </article>)}
            </div>
          </div> : <p className="text-lg leading-relaxed text-[#65584a]">{service.quote}</p>}
          <p className="mt-5 text-sm leading-relaxed text-[#65584a]">{service.quote}</p>
          {service.notes && <ul className="mt-5 space-y-2 border-t border-[#c08848]/30 pt-4">{service.notes.map((note) => <li key={note} className="text-sm leading-relaxed text-[#65584a]">• {note}</li>)}</ul>}
        </div>
      </div>
    </section>

    <section className="bg-[#e8ddc7]">
      <div className="container-luxe grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-16">
        <div className="md:col-span-4"><SectionEyebrow>Project and payment terms</SectionEyebrow><h2 className="mt-3 font-serif text-2xl md:text-3xl">Clear costs before we begin.</h2></div>
        <div className="space-y-3 text-sm leading-relaxed text-[#4f5d53] md:col-span-8">
          <p>For one-time projects, 50% is paid upfront and the remaining 50% is due before final delivery or handover. Monthly management fees are paid in full in advance for each service month.</p>
          <p>Work outside the agreed scope is quoted separately. Domain registration, hosting, premium software, advertising spend, external publication charges, actors, voice talent and other third-party expenses are separate where applicable unless expressly included in the written agreement.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#fdf6e6]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-14 md:py-20">
        <div className="md:col-span-4"><SectionEyebrow>Questions</SectionEyebrow><h2 className="mt-4 font-serif text-3xl">Before you get in touch.</h2></div>
        <div className="md:col-span-8">{faqs.map(([question, answer]) => <details key={question} className="border-t border-[#c08848]/40 py-5"><summary className="cursor-pointer font-medium">{question}</summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#65584a]">{answer}</p></details>)}</div>
      </div>
    </section>
    <AssessmentCta title={service.cta}/>
  </SiteLayout>;
}
