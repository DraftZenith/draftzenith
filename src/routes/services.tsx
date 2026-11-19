import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";
import { SERVICES, PROJECT_TERMS } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services for Authors | Draft Zenith" },
    { name: "description", content: "Author websites and branding, Pinterest marketing, book trailers, audience research and ongoing book visibility support." },
    { property: "og:title", content: "Services for Authors | Draft Zenith" },
    { property: "og:description", content: "Choose one author service or bring several together in a project shaped around your book." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: ServicesPage,
});

const tones = [
  { wrap: "bg-[#f3ecdf] text-[#263440]", muted: "text-[#626660]", line: "border-[#d7cbb7]", number: "text-[#a45d47]", price: "bg-[#fffaf1]" },
  { wrap: "bg-[#e4e9df] text-[#263d36]", muted: "text-[#5c675e]", line: "border-[#c7d0c4]", number: "text-[#607961]", price: "bg-[#f6f8f1]" },
  { wrap: "bg-[#f1dfd5] text-[#4a302b]", muted: "text-[#715b53]", line: "border-[#dfbfb0]", number: "text-[#a45d47]", price: "bg-[#fbf2ec]" },
  { wrap: "bg-[#e0e8ed] text-[#263744]", muted: "text-[#5d6870]", line: "border-[#c4d0d7]", number: "text-[#344e62]", price: "bg-[#f3f7f9]" },
  { wrap: "bg-[#243c39] text-[#f7f1e7]", muted: "text-[#d3dfd6]", line: "border-[#59736a]", number: "text-[#e1bd83]", price: "bg-[#304b46]" },
  { wrap: "bg-[#001220] text-[#fdf6e6]", muted: "text-[#e8ddc7]", line: "border-[#c08848]", number: "text-[#c08848]", price: "bg-[#142c40]" },
];

function ServicesPage() {
  return <SiteLayout>
    <section className="bg-[#203a36] text-[#f7f1e7]">
      <div className="container-luxe grid gap-8 pb-16 pt-36 md:grid-cols-12 md:items-end md:pb-20 md:pt-48">
        <div className="space-y-5 md:col-span-8">
          <SectionEyebrow tone="light">Our services</SectionEyebrow>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.04] text-balance sm:text-5xl md:text-7xl">Services to help authors present and promote their books.</h1>
        </div>
        <p className="max-w-xl leading-relaxed text-[#dce4dc] md:col-span-4">Our team works on author websites, brand design, book trailers, Pinterest campaigns and reader research. You can hire us for one service or combine several.</p>
      </div>
    </section>

    <section className="bg-[#f2ecdf]">
      <div className="container-luxe grid gap-5 py-10 md:grid-cols-3 md:gap-10 md:py-14">
        <div><SectionEyebrow>How to work with us</SectionEyebrow><h2 className="mt-3 font-serif text-2xl">Start with one clear need.</h2></div>
        <p className="text-sm leading-relaxed text-[#5d625e]">You might need a book page, a Pinterest campaign or a trailer. Each can be commissioned on its own, with its own agreed scope and delivery plan.</p>
        <p className="text-sm leading-relaxed text-[#5d625e]">You can also connect services when they support the same goal. Our team can plan, design, produce and manage the agreed work across the project.</p>
      </div>
    </section>

    <section className="space-y-0">
      {SERVICES.map((service,i)=>{
        const tone=tones[i];
        return <article key={service.category} id={`service-${i+1}`} className={`scroll-mt-24 ${tone.wrap}`}>
          <div className="container-luxe grid gap-8 py-12 md:grid-cols-12 md:gap-12 md:py-16 lg:py-20">
            <div className="md:col-span-4">
              <p className={`text-xs uppercase tracking-[0.22em] ${tone.number}`}>0{i+1} / What we do</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-balance md:text-4xl">{service.category}</h2>
              <p className={`mt-5 text-sm leading-relaxed ${tone.muted}`}>{service.intro}</p>
              <div className={`mt-7 border-l-2 pl-4 ${tone.line}`}>
                <p className={`text-xs uppercase tracking-[0.16em] ${tone.number}`}>What this helps with</p>
                <p className="mt-2 text-sm leading-relaxed">{service.benefit}</p>
              </div>
            </div>
            <div className="md:col-span-8">
              <h3 className="text-xs uppercase tracking-[0.2em] opacity-75">What we can deliver</h3>
              <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {service.deliverables.map(item=><li key={item} className="flex gap-3 text-sm leading-relaxed"><Check size={16} className={`mt-0.5 shrink-0 ${tone.number}`} aria-hidden="true"/><span>{item}</span></li>)}
              </ul>
              {service.packages.length>0 && <div className={`mt-8 border-t pt-6 ${tone.line}`}>
                <h3 className="text-xs uppercase tracking-[0.2em] opacity-75">Published package prices</h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {service.packages.map(offer=><div key={offer.name} className={`flex min-h-32 flex-col justify-between p-4 ${tone.price}`}>
                    <div>
                      <p className="text-sm font-medium">{offer.name}</p>
                      {offer.featured && <p className={`mt-2 text-[10px] font-semibold uppercase tracking-wider ${tone.number}`}>Recommended starting point</p>}
                    </div>
                    <p className={`mt-4 font-serif text-3xl ${tone.number}`}>${offer.price}<span className="ml-2 font-sans text-xs uppercase tracking-wide opacity-70">{offer.billing === "monthly" ? "/ month" : "one-time"}</span></p>
                  </div>)}
                </div>
              </div>}
              <p className={`mt-6 max-w-2xl text-sm leading-relaxed ${tone.muted}`}>{service.quote}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a href={`/services/${service.category.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} className={`inline-flex min-h-11 items-center gap-3 border-b pb-1 text-sm font-semibold transition hover:opacity-70 ${tone.line}`}>
                  Service details <ArrowRight size={15}/>
                </a>
                <Link to="/get-started" search={{ service: service.packages[0]?.name ?? service.category }} className={`inline-flex min-h-11 items-center gap-3 border-b pb-1 text-sm font-semibold transition hover:opacity-70 ${tone.line}`}>
                  {service.cta} <ArrowRight size={15}/>
                </Link>
              </div>
            </div>
          </div>
        </article>;
      })}
    </section>

    <section className="bg-[#f2ecdf]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>When services connect</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Some services work well together.</h2></div>
        <div className="md:col-span-8">
          <p className="max-w-2xl leading-relaxed text-[#5d625e]">A trailer introduces your book. Pinterest content gives people another way to come across it. A book page gives visitors the information and links they need. We can provide all three, or work on any one of them.</p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
            <li className="border-t-2 border-[#a45d47] pt-4"><span className="text-xs uppercase tracking-wider text-[#a45d47]">01 / Introduce</span><h3 className="mt-2 font-serif text-xl">Book trailer</h3><p className="mt-2 text-sm leading-relaxed text-[#5d625e]">A visual introduction for your website and social channels.</p></li>
            <li className="border-t-2 border-[#71856f] pt-4"><span className="text-xs uppercase tracking-wider text-[#607961]">02 / Reach</span><h3 className="mt-2 font-serif text-xl">Pinterest campaign</h3><p className="mt-2 text-sm leading-relaxed text-[#5d625e]">Branded content shaped by reader and keyword research.</p></li>
            <li className="border-t-2 border-[#344e62] pt-4"><span className="text-xs uppercase tracking-wider text-[#344e62]">03 / Connect</span><h3 className="mt-2 font-serif text-xl">Book page</h3><p className="mt-2 text-sm leading-relaxed text-[#5d625e]">Book details, retailer links and a reader sign-up destination.</p></li>
          </ol>
        </div>
      </div>
    </section>

    <section className="bg-[#e5e9df]">
      <div className="container-luxe grid gap-8 py-14 md:grid-cols-12 md:gap-12 md:py-16">
        <div className="md:col-span-4"><SectionEyebrow>Pricing and project terms</SectionEyebrow><h2 className="mt-3 font-serif text-2xl md:text-3xl">We agree on the work before it begins.</h2></div>
        <div className="space-y-4 md:col-span-8">
          <p className="leading-relaxed text-[#4f5d53]">Prices are shown with each service, including one-time project fees and recurring monthly management fees. Package cards on the individual service pages set out the inclusions before you enquire. You can commission one service on its own or combine relevant work through an Author Brand Elevation plan.</p>
          <p className="text-sm leading-relaxed text-[#5d625e]">One-time projects are paid {PROJECT_TERMS.oneTimeDepositPercent}% upfront, with the remaining {PROJECT_TERMS.oneTimeBalancePercent}% due before final delivery or handover. Monthly management fees are paid {PROJECT_TERMS.monthlyRetainerDue}. Work begins {PROJECT_TERMS.timelineStarts}. Work outside the agreed scope is quoted separately. Domain registration, hosting, premium software, advertising spend, external publication charges and other third-party costs are separate where applicable unless expressly included in the agreement.</p>
        </div>
      </div>
    </section>
    <AssessmentCta title="Tell us what you would like us to work on."/>
  </SiteLayout>;
}
