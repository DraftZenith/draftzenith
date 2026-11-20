import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";
import { PORTFOLIO_PROJECTS, SERVICES } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Draft Zenith | Author Services and Creative Visibility" },
    { name: "description", content: "Draft Zenith helps authors and artists strengthen their professional presence through branding, websites, visual promotion, reader discovery and ongoing visibility support." },
    { property: "og:title", content: "Draft Zenith | Author Services and Creative Visibility" },
    { property: "og:description", content: "Thoughtful author branding, book presentation, audience development and creative visibility services." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const serviceSummaries = [
  "Author identity, websites and book pages that bring the essential information together.",
  "Pinterest account strategy, keyword research, custom pins and managed publishing.",
  "Creative direction and video production shaped around the book's story and tone.",
  "Reader research, relevant communities, Goodreads activity and discussion development.",
  "Press kits, professional profiles, editorial research and carefully managed outreach.",
  "Planned content, publishing, monitoring and reporting across agreed visibility channels.",
];

function HomePage() {
  return <SiteLayout>
    <section className="relative overflow-hidden bg-[#f5f2eb] text-[#20221f]">
      <div className="container-luxe grid min-h-[660px] gap-12 pb-20 pt-36 md:grid-cols-12 md:items-center md:gap-8 md:pb-24 md:pt-40">
        <div className="relative z-10 md:col-span-7">
          <SectionEyebrow>Author services · Creative visibility</SectionEyebrow>
          <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.3rem,6.4vw,6.3rem)] leading-[0.98] tracking-[-0.045em] text-balance">A considered presence for the work you've put into your book.</h1>
          <p className="mt-7 max-w-xl text-base leading-[1.8] text-[#5d605b] md:text-lg">Draft Zenith helps authors and artists present their work with clarity, build a professional digital presence and create thoughtful routes to reader discovery and recognition.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/get-started" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#20221f] px-6 py-3 text-sm font-medium text-[#f8f6f0] transition hover:bg-[#4a4d46]">Tell us about your project <ArrowRight size={16}/></Link>
            <Link to="/services" className="inline-flex min-h-12 items-center justify-center border border-[#aaa69b] px-6 py-3 text-sm font-medium text-[#20221f] transition hover:border-[#96784f] hover:text-[#80633e]">Explore our services</Link>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.16em] text-[#77776e]">One service or a coordinated plan · Scope agreed before work begins</p>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative mx-auto max-w-[470px] border border-[#c9c2b4] bg-[#e8e3d8] p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-[#c5bdaf] pb-4 text-[10px] uppercase tracking-[0.2em] text-[#77766d]"><span>Draft Zenith</span><span>Our approach / 01</span></div>
            <div className="py-8 sm:py-10">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#96784f]">The work around the work</p>
              <p className="mt-4 max-w-xs font-serif text-4xl leading-[1.02] text-[#20221f] sm:text-5xl">Present it well. Make the next step clear.</p>
            </div>
            <div className="border-t border-[#c5bdaf]">
              {[
                ["01","Your identity","A professional author presence"],
                ["02","Your book","A clear and engaging presentation"],
                ["03","Your audience","Relevant discovery and connection"],
              ].map(([n,title,desc])=><div key={n} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[#c5bdaf] py-4 last:border-0">
                <span className="font-serif text-xl text-[#96784f]">{n}</span><div><p className="text-sm font-medium text-[#20221f]">{title}</p><p className="mt-1 text-xs leading-relaxed text-[#686a63]">{desc}</p></div>
              </div>)}
            </div>
            <div className="absolute -bottom-4 -right-4 -z-0 h-20 w-20 border border-[#96784f] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28"/>
          </div>
          <p className="mt-7 text-center text-[10px] uppercase tracking-[0.2em] text-[#77776e]">A connected approach to author visibility</p>
        </div>
      </div>
      <div className="h-[3px] bg-[#96784f]"/>
    </section>

    <section className="bg-[#20221f] text-[#f5f2eb]">
      <div className="container-luxe grid gap-8 py-10 md:grid-cols-3 md:gap-12 md:py-12">
        <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a77b]">What we are</p><p className="mt-3 font-serif text-2xl">An author-services partner</p></div>
        <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a77b]">How we work</p><p className="mt-3 font-serif text-2xl">Assessment-led and collaborative</p></div>
        <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a77b]">What to expect</p><p className="mt-3 font-serif text-2xl">Clear scope, honest reporting</p></div>
      </div>
    </section>

    <section className="bg-[#fbfaf6]">
      <div className="container-luxe grid gap-10 py-20 md:grid-cols-12 md:gap-14 md:py-28">
        <div className="md:col-span-4">
          <SectionEyebrow>What authors need</SectionEyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">Good work deserves a clear way to be seen.</h2>
        </div>
        <div className="space-y-6 md:col-span-8">
          <p className="max-w-3xl text-lg leading-[1.8] text-[#555951]">A book can be ready for readers while its wider presence still needs attention. An author website may need a clearer structure. Promotional material may not yet reflect the book. Reader communities and relevant media may need careful research.</p>
          <p className="max-w-3xl leading-[1.8] text-[#66685f]">Draft Zenith brings these practical services together. We look at what is already in place, understand what you want to improve and agree on the work that makes sense for your project.</p>
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-[#96784f] pb-2 text-sm font-medium text-[#20221f] hover:text-[#80633e]">Get to know Draft Zenith <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#eeece5]">
      <div className="container-luxe py-20 md:py-28">
        <div className="grid gap-6 border-b border-[#c9c5ba] pb-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8"><SectionEyebrow>Our services</SectionEyebrow><h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.04] tracking-[-0.03em] md:text-6xl">The right support for each part of your author presence.</h2></div>
          <p className="text-sm leading-[1.8] text-[#62655d] md:col-span-4">Commission a single service or bring several together when they serve the same purpose. Every project begins with an understanding of your needs.</p>
        </div>
        <div className="mt-4">
          {SERVICES.map((service,i)=><Link key={service.category} to="/services/$slug" params={{slug:slugify(service.category)}} className="group grid gap-4 border-b border-[#c9c5ba] py-7 transition-colors hover:bg-[#f5f2eb] md:grid-cols-12 md:gap-8 md:px-5">
            <div className="flex items-start gap-5 md:col-span-4"><span className="pt-1 font-serif text-2xl text-[#96784f]">0{i+1}</span><h3 className="max-w-sm font-serif text-2xl leading-tight text-[#20221f] md:text-3xl">{service.category}</h3></div>
            <p className="text-sm leading-[1.8] text-[#62655d] md:col-span-6">{serviceSummaries[i]}</p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#80633e] md:col-span-2 md:justify-self-end">Explore <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></span>
          </Link>)}
        </div>
        <div className="mt-8"><Link to="/services" className="inline-flex items-center gap-2 border-b border-[#96784f] pb-2 text-sm font-medium text-[#20221f]">View all services <ArrowRight size={15}/></Link></div>
      </div>
    </section>

    <section className="bg-[#fbfaf6]">
      <div className="container-luxe grid gap-12 py-20 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-4"><SectionEyebrow>How we work</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">A thoughtful process, from first conversation to handover.</h2><Link to="/how-it-works" className="mt-7 inline-flex items-center gap-2 border-b border-[#96784f] pb-2 text-sm font-medium">See how it works <ArrowRight size={15}/></Link></div>
        <ol className="border-t border-[#c9c5ba] md:col-span-8">
          {[
            ["01","Understand","We learn about your book, your current presence and what you would like to improve."],
            ["02","Assess","We review the information and identify suitable priorities and services."],
            ["03","Agree","You receive the proposed scope, deliverables, fees and timing before work begins."],
            ["04","Deliver","We complete the agreed work and share the relevant handover or reporting."],
          ].map(([n,title,desc])=><li key={n} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#c9c5ba] py-6 sm:grid-cols-[4rem_10rem_1fr] sm:gap-5"><span className="font-serif text-2xl text-[#96784f]">{n}</span><h3 className="font-serif text-2xl">{title}</h3><p className="text-sm leading-[1.8] text-[#62655d] sm:pt-1">{desc}</p></li>)}
        </ol>
      </div>
    </section>

    <section className="bg-[#e4dfd4]">
      <div className="container-luxe py-20 md:py-28">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><SectionEyebrow>Selected work</SectionEyebrow><h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] md:text-5xl">A look at projects we've worked on.</h2></div><Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-[#80633e]">Visit the portfolio <ArrowRight size={15}/></Link></div>
        <div className="grid gap-x-10 md:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project,i)=><article key={project.name} className="flex min-h-[190px] flex-col justify-between border-t border-[#bdb6a8] py-6">
            <div><p className="text-[10px] uppercase tracking-[0.2em] text-[#96784f]">Project 0{i+1}</p><h3 className="mt-3 font-serif text-2xl text-[#20221f]">{project.name}</h3><p className="mt-3 max-w-md text-sm leading-[1.8] text-[#62655d]">{project.description}</p></div>
            {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 self-start border-b border-[#96784f] pb-1 text-sm font-medium text-[#20221f] hover:text-[#80633e]">View project <ArrowUpRight size={15}/></a>}
          </article>)}
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-relaxed text-[#6d6e65]">Project examples are provided to show selected work. Outcomes and activity are specific to each project and are not guarantees of future results.</p>
      </div>
    </section>

    <section className="bg-[#20221f] text-[#f5f2eb]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-8"><SectionEyebrow tone="light">Start with your priorities</SectionEyebrow><h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">Tell us what your book or author presence needs.</h2><p className="mt-5 max-w-2xl leading-[1.8] text-[#d6d2c8]">Share a little about your work and what you want to strengthen. We'll review your request and discuss a suitable next step.</p></div>
        <div className="md:col-span-4 md:justify-self-end"><Link to="/get-started" className="inline-flex min-h-12 items-center gap-3 bg-[#c5a77b] px-6 py-3 text-sm font-medium text-[#20221f] transition hover:bg-[#d6bd98]">Request an assessment <ArrowRight size={16}/></Link></div>
      </div>
    </section>
  </SiteLayout>;
}
