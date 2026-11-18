import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";
import { PORTFOLIO_PROJECTS, SERVICES } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Draft Zenith | Author and Book Visibility Partner" },
    { name: "description", content: "Draft Zenith helps authors build a clear online presence, present their books well and reach readers through websites, visual promotion and audience research." },
    { property: "og:title", content: "Draft Zenith | Author and Book Visibility Partner" },
    { property: "og:description", content: "Author websites, book promotion, visual content and reader discovery, brought together by one team." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const serviceTones = [
  "bg-[#f3ecdf] text-[#263440]",
  "bg-[#e4e9df] text-[#263d36]",
  "bg-[#f1dfd5] text-[#4a302b]",
  "bg-[#e0e8ed] text-[#263744]",
  "bg-[#243c39] text-[#f7f1e7]",
];

function HomePage() {
  return <SiteLayout>
    <section className="overflow-hidden bg-[#203a36] text-[#f7f1e7]">
      <div className="container-luxe grid gap-12 pb-20 pt-36 md:grid-cols-12 md:items-center md:gap-10 md:pb-28 md:pt-48">
        <div className="space-y-7 md:col-span-7">
          <p className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-[#d9b477]"><span className="h-px w-9 bg-[#d9b477]"/>Author and book visibility partner</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-balance sm:text-6xl md:text-7xl">Give your book a stronger place in the world.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#e3e7df] md:text-lg">Draft Zenith helps authors shape how their work appears online, where readers can encounter it and what happens when someone wants to learn more. Our team brings website development, design, visual promotion and audience research together around your goals.</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link to="/get-started" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#d9b477] px-6 py-3 text-sm font-semibold text-[#203a36] transition hover:bg-[#e8c994]">Tell us about your book <ArrowRight size={16}/></Link>
            <Link to="/services" className="inline-flex min-h-12 items-center justify-center border border-[#aabcb2] px-6 py-3 text-sm text-[#f7f1e7] transition hover:border-[#d9b477] hover:text-[#e8c994]">Explore our services</Link>
          </div>
        </div>
        <div className="relative md:col-span-5">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#b9694f] opacity-90"/>
          <div className="relative border border-[#d9b477]/60 bg-[#f2eadb] p-6 text-[#243641] shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[#cfc3ae] pb-4 text-[10px] uppercase tracking-[0.22em]"><span>Draft Zenith</span><span>Field notes 01</span></div>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#a45d47]">The work around the book</p>
            <h2 className="mt-3 max-w-sm font-serif text-4xl leading-[1.04] sm:text-5xl">A good first impression. A clear next step.</h2>
            <div className="mt-9 space-y-0 border-t border-[#cfc3ae]">
              <div className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#cfc3ae] py-4"><span className="font-serif text-xl text-[#a45d47]">01</span><div><p className="text-xs uppercase tracking-[0.16em]">Present the author</p><p className="mt-1 text-sm text-[#59646a]">Brand, website and book pages</p></div></div>
              <div className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#cfc3ae] py-4"><span className="font-serif text-xl text-[#a45d47]">02</span><div><p className="text-xs uppercase tracking-[0.16em]">Introduce the book</p><p className="mt-1 text-sm text-[#59646a]">Trailers and promotional design</p></div></div>
              <div className="grid grid-cols-[3rem_1fr] gap-3 py-4"><span className="font-serif text-xl text-[#a45d47]">03</span><div><p className="text-xs uppercase tracking-[0.16em]">Reach likely readers</p><p className="mt-1 text-sm text-[#59646a]">Audience research and visibility work</p></div></div>
            </div>
          </div>
          <p className="relative mt-4 text-right text-xs uppercase tracking-[0.18em] text-[#b9c9bd]">Planned around your book, not a template</p>
        </div>
      </div>
    </section>

    <section className="bg-[#f2ecdf]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>Why authors come to us</SectionEyebrow></div>
        <div className="space-y-6 md:col-span-8">
          <h2 className="max-w-4xl font-serif text-3xl leading-tight text-balance md:text-5xl">The book is ready. The rest of its public life still needs attention.</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#5d625e]">A reader may meet your work through a search, a pin, a conversation or a recommendation. When they look you up, your website and book pages should give them somewhere useful to go. We help join those parts together, whether you need one piece of the work or support across the whole picture.</p>
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-[#a45d47] pb-1 text-sm font-medium text-[#263440] hover:text-[#a45d47]">How Draft Zenith works <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#e6e9e0]">
      <div className="container-luxe py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#c9d0c5] pb-7 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3"><SectionEyebrow>What we do</SectionEyebrow><h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">Different skills. One team around your book.</h2></div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#9b543f]">All services <ArrowRight size={15}/></Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {SERVICES.map((service,i)=><Link key={service.category} to="/services" className={`group flex min-h-56 flex-col justify-between p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8 ${serviceTones[i]}`}>
            <div className="flex items-start justify-between gap-4"><span className="text-xs uppercase tracking-[0.2em] opacity-70">0{i+1}</span><ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
            <div><h3 className="max-w-md font-serif text-2xl leading-tight sm:text-3xl">{service.category}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed opacity-75">{service.intro}</p></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f7f3eb]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>One service or a joined-up plan</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Make each part work harder with the others.</h2></div>
        <div className="md:col-span-8">
          <p className="max-w-2xl leading-relaxed text-[#5d625e]">A book trailer can give your story a visual introduction. Pinterest content can put that introduction in front of people browsing related subjects. A dedicated book page can then give visitors the details, retailer links and sign-up options they need. Each piece has a job, and the project can include only the parts that make sense for you.</p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
            <li className="border-t-2 border-[#a45d47] pt-4"><span className="text-xs uppercase tracking-[0.15em] text-[#a45d47]">First</span><h3 className="mt-2 font-serif text-xl">Introduce</h3><p className="mt-2 text-sm leading-relaxed text-[#5d625e]">Video and visual assets help present the book.</p></li>
            <li className="border-t-2 border-[#778b73] pt-4"><span className="text-xs uppercase tracking-[0.15em] text-[#667d66]">Next</span><h3 className="mt-2 font-serif text-xl">Bring people in</h3><p className="mt-2 text-sm leading-relaxed text-[#5d625e]">Research and content create relevant discovery routes.</p></li>
            <li className="border-t-2 border-[#344e62] pt-4"><span className="text-xs uppercase tracking-[0.15em] text-[#344e62]">Then</span><h3 className="mt-2 font-serif text-xl">Give them a place to go</h3><p className="mt-2 text-sm leading-relaxed text-[#5d625e]">A book page brings information and next steps together.</p></li>
          </ol>
        </div>
      </div>
    </section>

    <section className="bg-[#f0e1d8]">
      <div className="container-luxe py-16 md:py-24">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div className="space-y-3"><SectionEyebrow>Selected work</SectionEyebrow><h2 className="font-serif text-3xl md:text-5xl">A few projects from the studio.</h2></div><Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#9b543f]">See the portfolio <ArrowRight size={15}/></Link></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project,i)=><div key={project.name} className="flex min-h-32 items-center justify-between gap-5 border-b border-[#d6b9aa] py-5">
            <div><span className="text-xs text-[#9b543f]">PROJECT 0{i+1}</span><h3 className="mt-2 font-serif text-xl sm:text-2xl">{project.name}</h3></div>
            {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}`} className="grid size-11 shrink-0 place-items-center rounded-full border border-[#a45d47] text-[#753e31] transition hover:bg-[#a45d47] hover:text-white"><ArrowUpRight size={18}/></a>}
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-[#243c39] text-[#f7f1e7]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-8"><SectionEyebrow>Start with the conversation</SectionEyebrow><h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">Tell us where your book needs support.</h2><p className="mt-4 max-w-2xl leading-relaxed text-[#dce4dc]">You do not need to arrive with a complete marketing plan. Tell us about the book, what is already in place and what you would like to improve.</p></div>
        <div className="md:col-span-4 md:justify-self-end"><Link to="/get-started" className="inline-flex min-h-12 items-center gap-3 bg-[#d9b477] px-6 py-3 text-sm font-semibold text-[#203a36] transition hover:bg-[#e8c994]">Request an assessment <ArrowRight size={16}/></Link></div>
      </div>
    </section>
  </SiteLayout>;
}
