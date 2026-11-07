import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Globe2, PenTool, SearchCheck } from "lucide-react";
import hero from "@/assets/agency-hero.jpg";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";
import { PORTFOLIO_PROJECTS, PROCESS_STEPS, SERVICES } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Draft Zenith | Author Branding & Book Discoverability" },
      { name: "description", content: "Draft Zenith helps authors build professional brands, strengthen their digital presence, and improve book discoverability." },
      { property: "og:title", content: "Draft Zenith | Author Branding & Book Discoverability" },
      { property: "og:description", content: "Build your author brand, strengthen your digital presence, and connect your book with relevant readers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const serviceSummaries = [
  { title: "Author Brand Development", icon: PenTool, text: "Establish a clear, professional author identity across your reader-facing presence." },
  { title: "Author Websites & Book Landing Pages", icon: Globe2, text: "Present your author story and books through a purposeful digital home." },
  { title: "Book Discoverability", icon: SearchCheck, text: "Make it easier for relevant readers to encounter your books online." },
  { title: "Author Visibility Management", icon: Compass, text: "Keep selected digital visibility work moving with an agreed monthly scope." },
];

const approach = [
  ["Author-led", "Work begins with your author identity, book, and intended audience."],
  ["Connected services", "Brand, digital presence, and book discoverability can be considered together."],
  ["Agreed scope", "Deliverables and timelines are discussed in an assessment and proposal."],
  ["Clear terms", "Project payments, timing, and third-party expenses are stated before work begins."],
  ["Digital-first", "Services focus on author brands, websites, landing pages, and online discovery."],
  ["No outcome promises", "Recommendations and costs are discussed without guaranteeing audience results."],
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative flex min-h-[780px] items-end overflow-hidden bg-foreground md:min-h-[820px]">
        <img src={hero} alt="Author-brand moodboard, open book, and website layouts in a creative studio" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/10" />
        <div className="container-luxe relative z-10 grid items-end gap-12 pb-16 pt-40 md:grid-cols-12 md:pb-24">
          <div className="space-y-7 md:col-span-9 lg:col-span-8">
            <SectionEyebrow>Author branding · Digital presence · Book discoverability</SectionEyebrow>
            <h1 className="max-w-5xl font-serif text-4xl leading-[1.06] text-balance text-background sm:text-5xl md:text-6xl lg:text-7xl">
              Build Your Author Brand. Strengthen Your Digital Presence. Expand Your Book&apos;s Discoverability.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-background/85 md:text-lg">
              Your book deserves more than a listing on a retailer&apos;s website. Draft Zenith helps authors establish professional brands, create engaging digital experiences and improve their books&apos; discoverability through strategic online campaigns.
            </p>
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Link to="/get-started" className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">
                Request a Free Assessment <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex min-h-12 items-center justify-center border border-background/60 px-6 py-3 text-sm font-medium text-background transition hover:border-primary hover:text-primary">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hidden border-l border-primary/70 pl-5 text-sm text-background/80 md:col-span-3 md:block lg:col-span-4 lg:col-start-9">
            <p className="mb-2 text-xs uppercase text-background/65">A focused agency for authors</p>
            <p className="font-serif text-xl leading-snug text-background">Brand clarity, digital experiences, and thoughtful book discovery.</p>
          </div>
        </div>
      </section>

      <section className="container-luxe grid gap-8 py-20 md:grid-cols-12 md:gap-12 md:py-28">
        <div className="md:col-span-5">
          <SectionEyebrow>The Draft Zenith Approach</SectionEyebrow>
        </div>
        <div className="space-y-6 md:col-span-7">
          <h2 className="max-w-3xl font-serif text-3xl leading-tight text-balance md:text-5xl">More Than a Published Book. A Stronger Author Presence.</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            An author&apos;s work deserves a clear identity and a thoughtful place online. We bring author branding, digital presence, and book discoverability into one considered plan, shaped around your work and goals.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm hover:text-primary">About Draft Zenith <ArrowRight size={15} /></Link>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-luxe py-20 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
            <div className="space-y-3"><SectionEyebrow>Services</SectionEyebrow><h2 className="font-serif text-3xl md:text-5xl">A stronger author presence, built with intention.</h2></div>
            <Link to="/services" className="inline-flex shrink-0 items-center gap-2 text-sm hover:text-primary">View all services <ArrowRight size={15} /></Link>
          </div>
          <div className="grid md:grid-cols-2">
            {serviceSummaries.map((service, i) => (
              <Link to="/services" key={service.title} className={`group flex gap-5 border-b border-border py-7 sm:py-9 ${i % 2 === 0 ? "md:mr-8 md:pr-8" : "md:ml-8 md:border-l md:pl-8"}`}>
                <service.icon className="mt-1 shrink-0 text-primary" size={22} aria-hidden="true" />
                <span><span className="font-serif text-xl sm:text-2xl group-hover:text-primary">{service.title}</span><span className="mt-2 block max-w-lg text-sm leading-relaxed text-muted-foreground">{service.text}</span></span>
                <ArrowRight className="ml-auto mt-1 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <div className="mb-10 flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3"><SectionEyebrow>Selected projects</SectionEyebrow><h2 className="font-serif text-3xl md:text-5xl">Work in the world</h2></div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">A selection of digital projects and reader-discovery work. Explore each available project directly.</p>
        </div>
        <ol className="border-t border-border">
          {PORTFOLIO_PROJECTS.map((project, i) => (
            <li key={project.name} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-5 sm:py-8">
              <span className="font-serif text-xl text-primary">0{i + 1}</span>
              <h3 className="font-serif text-2xl sm:text-3xl">{project.name}</h3>
              {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-self-start text-sm underline underline-offset-4 hover:text-primary sm:justify-self-end">View Project <ArrowRight size={15} /></a> : <span className="text-sm text-muted-foreground sm:text-right">Project link not provided</span>}
            </li>
          ))}
        </ol>
        <Link to="/portfolio" className="mt-7 inline-flex items-center gap-2 text-sm hover:text-primary">Explore portfolio <ArrowRight size={15} /></Link>
      </section>

      <section className="border-y border-border bg-secondary/60">
        <div className="container-luxe grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4"><SectionEyebrow>Why Draft Zenith</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">A clear, considered way to build your presence.</h2></div>
          <ol className="grid gap-x-10 md:col-span-8 md:grid-cols-2">
            {approach.map(([title, text], i) => <li key={title} className="border-t border-border py-5"><span className="text-xs text-primary">0{i + 1}</span><h3 className="mt-2 font-serif text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <div className="mb-12 max-w-3xl space-y-4"><SectionEyebrow>How it works</SectionEyebrow><h2 className="font-serif text-3xl md:text-5xl">A thoughtful process, from first conversation to handover.</h2></div>
        <ol className="grid border-t border-border md:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => <li key={step.title} className={`border-b border-border py-7 md:py-8 ${i > 0 ? "md:border-l md:pl-6" : "md:pr-6"} ${i < 3 ? "md:pr-6" : ""}`}><span className="font-serif text-sm text-primary">0{i + 1}</span><h3 className="mt-3 font-serif text-2xl">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></li>)}
        </ol>
        <Link to="/how-it-works" className="mt-7 inline-flex items-center gap-2 text-sm hover:text-primary">See how the process works <ArrowRight size={15} /></Link>
      </section>
      <AssessmentCta />
    </SiteLayout>
  );
}