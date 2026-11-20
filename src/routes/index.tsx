import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { useState } from "react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { SERVICES, PORTFOLIO_PROJECTS } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Draft Zenith | Author Branding, Book Visibility and Creative Services" },
    { name: "description", content: "Draft Zenith helps authors and artists strengthen their professional presence through branding, websites, visual promotion, audience discovery and targeted visibility support." },
    { property: "og:title", content: "Draft Zenith | A Stronger Presence for Your Work" },
    { property: "og:description", content: "Author branding, digital presentation, reader discovery and creative visibility support." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const serviceDescriptions = [
  "Build a recognisable author identity and a polished online home where readers and professional contacts can explore your work.",
  "Create a purposeful Pinterest presence with relevant research, custom pin design and campaign publishing.",
  "Introduce your book through considered visual storytelling shaped around its genre, themes and tone.",
  "Research relevant readers, communities and discovery channels so promotional effort has a clear direction.",
  "Prepare professional press materials and coordinate carefully researched editorial outreach.",
  "Keep agreed visibility activity consistent through content planning, publishing, monitoring and review.",
];

const serviceVisuals = [
  { kicker: "01 / Identity", heading: "An online home for your work", note: "Author profile · Website · Book pages", style: "bg-[#e9e2d5]" },
  { kicker: "02 / Discovery", heading: "A visual route to readers", note: "Keywords · Boards · Custom pins", style: "bg-[#e5e7df]" },
  { kicker: "03 / Storytelling", heading: "Your book, in motion", note: "Creative direction · Trailer · Video", style: "bg-[#e9e1dc]" },
  { kicker: "04 / Audience", heading: "Find the right places to begin", note: "Reader research · Communities · Lists", style: "bg-[#e3e7e9]" },
  { kicker: "05 / Recognition", heading: "A professional story to share", note: "Press kit · Editorial research · Outreach", style: "bg-[#e9e4d8]" },
  { kicker: "06 / Continuity", heading: "A presence with a plan", note: "Content · Publishing · Reporting", style: "bg-[#e2e6df]" },
];

const faqs = [
  { q: "What types of authors and artists do you work with?", a: "We support published and self-published authors, independent writers and artists who want to strengthen how their books or creative work are presented and found. We look at the project, its audience and your priorities before recommending a service." },
  { q: "Can I choose just one service?", a: "Yes. You can commission an individual service, such as a book landing page, Pinterest setup or press kit. We will only recommend combining services when there is a clear reason to do so." },
  { q: "Do you create websites from scratch?", a: "Yes. We design and develop author websites and dedicated book landing pages. The agreed scope can include structure, copywriting, content arrangement, responsive design, basic on-page SEO and testing. Domain, hosting and premium third-party costs are discussed separately." },
  { q: "Can you manage my Pinterest account?", a: "Yes. Support ranges from account setup and optimisation to managed 30-day and 60-day campaigns. The exact publishing period, creative deliverables and reporting are set out in the selected package." },
  { q: "What do I need to provide?", a: "Usually your book or project details, an accurate biography, cover and approved photographs, retailer or website links, and any existing brand materials or testimonials you want included. We will confirm the materials needed for your particular service." },
  { q: "How do your visibility campaigns work?", a: "We begin with an assessment, research relevant audiences and channels, agree on the content and activity, then carry out the work within the approved scope. Where available, we report measures such as impressions, saves, clicks or outreach activity. These are not guarantees of sales or audience growth." },
  { q: "Can you help with reviews and media coverage?", a: "We can research relevant publications, prepare professional submissions and coordinate editorial outreach. Reviewers and publications make their own independent decisions, so reviews, positive coverage, interviews and placements cannot be guaranteed. We do not sell or present paid endorsements as independent opinion." },
  { q: "How do I get started?", a: "Send us a few details about your book or creative project through the assessment form. We will review your current position and discuss practical next steps, including scope, fees and timing, before any work begins." },
];

function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <SiteLayout>
    <main>
      {/* 01 — Hero */}
      <section className="relative overflow-hidden bg-[#f5f2eb] text-[#20221f]">
        <div className="container-luxe grid gap-12 pb-16 pt-32 md:min-h-[690px] md:grid-cols-12 md:items-center md:gap-8 md:pb-24 md:pt-36">
          <div className="relative z-10 md:col-span-6">
            <SectionEyebrow>Author services · Creative visibility</SectionEyebrow>
            <h1 className="mt-7 max-w-3xl font-serif text-[clamp(3.15rem,6vw,5.8rem)] leading-[0.98] tracking-[-0.045em] text-balance">Build a Stronger Presence Around Your Book and Your Work.</h1>
            <p className="mt-7 max-w-xl text-base leading-[1.85] text-[#5d605b] md:text-lg">Draft Zenith helps authors and artists strengthen their professional presence through thoughtful branding, digital presentation, audience discovery and targeted visibility campaigns.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/services" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#20221f] px-6 py-3 text-sm font-medium text-[#f8f6f0] transition hover:bg-[#454840]">Explore Our Services <ArrowRight size={16}/></Link>
              <Link to="/get-started" className="inline-flex min-h-12 items-center justify-center border border-[#aaa69b] px-6 py-3 text-sm font-medium text-[#20221f] transition hover:border-[#96784f] hover:text-[#80633e]">Request a Free Assessment</Link>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.16em] text-[#77776e]">Thoughtful strategy · Coordinated creative support · Clear scope</p>
          </div>
          <div className="relative md:col-span-6">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -right-2 top-4 h-[82%] w-[88%] border border-[#b6a98f] sm:right-0"/>
              <div className="relative grid min-h-[440px] grid-cols-[1.04fr_.96fr] gap-3 bg-[#e8e2d7] p-4 sm:min-h-[510px] sm:gap-4 sm:p-6">
                <div className="flex flex-col justify-between border border-[#c6bdad] bg-[#f5f2eb] p-5 sm:p-7">
                  <div><p className="text-[9px] uppercase tracking-[0.22em] text-[#96784f]">Draft Zenith / Editorial</p><div className="mt-5 h-px bg-[#c9c1b3]"/></div>
                  <div><p className="font-serif text-[clamp(2rem,4vw,3.4rem)] leading-[0.98] tracking-[-0.04em]">The work deserves a thoughtful presentation.</p><p className="mt-5 max-w-[14rem] text-xs leading-[1.7] text-[#686a63]">A considered identity. A clear digital home. A route to the right audience.</p></div>
                  <div className="flex items-end justify-between"><span className="text-[9px] uppercase tracking-[0.18em] text-[#77776e]">Author / Artist</span><span className="font-serif text-3xl text-[#96784f]">DZ.</span></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex-1 bg-[#d2d7cf] p-4 sm:p-5"><p className="text-[9px] uppercase tracking-[0.18em] text-[#596357]">01 / Presence</p><div className="mt-8 border-y border-[#aeb7aa] py-4"><span className="font-serif text-3xl leading-none text-[#303a32]">A place<br/>to begin.</span></div><div className="mt-4 flex gap-2"><span className="h-2 w-10 bg-[#8b987f]"/><span className="h-2 w-6 bg-[#aeb7aa]"/></div></div>
                  <div className="flex-1 bg-[#d8c9b6] p-4 sm:p-5"><p className="text-[9px] uppercase tracking-[0.18em] text-[#78674e]">02 / Discovery</p><div className="mt-6 grid grid-cols-2 gap-2"><div className="aspect-[3/4] bg-[#f1ede4] p-2"><div className="h-full border border-[#c7b9a5] p-2"><span className="font-serif text-lg leading-none text-[#49453d]">Find<br/>your<br/>readers.</span></div></div><div className="mt-5 aspect-[3/4] bg-[#b9c1b7] p-2"><div className="h-full border border-[#8e9a8d] p-2"><span className="font-serif text-lg leading-none text-[#39443b]">Make<br/>it clear.</span></div></div></div></div>
                </div>
                <div className="absolute -bottom-5 -left-4 bg-[#20221f] px-5 py-4 text-[#f5f2eb] shadow-lg sm:-left-6"><p className="text-[9px] uppercase tracking-[0.2em] text-[#c5a77b]">A coordinated approach</p><p className="mt-1 font-serif text-xl">Built around your goals.</p></div>
              </div>
            </div>
            <p className="mt-10 text-center text-[9px] uppercase tracking-[0.2em] text-[#77776e]">A visual expression of the Draft Zenith approach</p>
          </div>
        </div>
        <div className="h-[3px] bg-[#96784f]"/>
      </section>

      {/* 02 — Trust introduction */}
      <section className="bg-[#20221f] text-[#f5f2eb]">
        <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:items-center md:gap-14 md:py-20">
          <div className="md:col-span-5"><SectionEyebrow tone="light">Who we are</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-5xl">More Than Book Promotion. A Stronger Professional Presence.</h2></div>
          <div className="md:col-span-7"><p className="text-lg leading-[1.85] text-[#e1ddd3]">Draft Zenith brings together coordinated creative and strategic support for authors and artists. Our work connects digital presentation, reader discovery, visual storytelling and professional recognition so the different parts of your public presence can work together.</p><p className="mt-5 text-sm leading-[1.85] text-[#bcbcb3]">We start by understanding what you have already built, what you want to achieve and which practical steps are right for your work. You can engage us for one focused service or a coordinated programme.</p></div>
        </div>
      </section>

      {/* 03 — Services */}
      <section className="bg-[#eeece5]">
        <div className="container-luxe py-20 md:py-28">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8"><SectionEyebrow>What we do</SectionEyebrow><h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl">Everything Your Work Needs to Build a Stronger Presence.</h2></div>
            <p className="text-sm leading-[1.8] text-[#62655d] md:col-span-4">Choose the support that matches your current priorities. Each service is shaped around your book, your audience and the outcome you want to work towards.</p>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service,i)=><article key={service.category} className="group min-w-0">
              <div className={`relative flex aspect-[5/3] flex-col justify-between overflow-hidden p-5 sm:p-6 ${serviceVisuals[i].style}`}>
                <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.2em] text-[#766f62]">{serviceVisuals[i].kicker}</span><span className="font-serif text-2xl text-[#96784f]">0{i+1}</span></div>
                <div className="relative z-10 max-w-[17rem]"><p className="font-serif text-3xl leading-[1.04] tracking-[-0.025em] text-[#292b27] sm:text-4xl">{serviceVisuals[i].heading}</p><p className="mt-4 text-[9px] uppercase tracking-[0.13em] text-[#6e6c62]">{serviceVisuals[i].note}</p></div>
                <div className="absolute -bottom-16 -right-8 h-48 w-48 rounded-full border border-[#a99b82]/50"/><div className="absolute -bottom-10 -right-2 h-32 w-32 rounded-full border border-[#a99b82]/50"/>
              </div>
              <div className="pt-5"><h3 className="font-serif text-2xl leading-tight text-[#20221f]">{service.category.replace(/ & /g, " and ")}</h3><p className="mt-3 min-h-[5.5rem] text-sm leading-[1.8] text-[#62655d]">{serviceDescriptions[i]}</p><Link to="/services/$slug" params={{slug:slugify(service.category)}} className="mt-4 inline-flex items-center gap-2 border-b border-[#96784f] pb-1 text-sm font-medium text-[#20221f] transition hover:text-[#80633e]">Learn More <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></Link></div>
            </article>)}
          </div>
        </div>
      </section>

      {/* 04 — Why Draft Zenith */}
      <section className="bg-[#f8f6f0]">
        <div className="container-luxe grid gap-12 py-20 md:grid-cols-12 md:items-center md:gap-16 md:py-28">
          <div className="md:col-span-5"><SectionEyebrow>Why Draft Zenith</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.035em] md:text-5xl">A Team Behind Your Book's Next Stage of Growth.</h2><p className="mt-6 text-base leading-[1.85] text-[#62655d]">A strong author presence takes more than a single promotional post. It calls for connected thinking across the way your work looks, reads, appears online and reaches relevant audiences.</p><p className="mt-4 text-sm leading-[1.85] text-[#62655d]">Our team brings creative production and strategic coordination together, with the work and responsibilities agreed clearly before each project begins.</p></div>
          <div className="md:col-span-7">
            <div className="border-y border-[#c9c3b7]">
              {[
                "Coordinated creative and strategic support",
                "Professional website and landing-page development",
                "Custom visual content shaped around your work",
                "Research-led audience and reader discovery",
                "Personalised publicity and editorial outreach",
                "Ongoing visibility planning and management",
              ].map((item,i)=><div key={item} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[#d8d2c7] py-5 last:border-0 sm:grid-cols-[3rem_1fr]"><span className="font-serif text-xl text-[#96784f]">0{i+1}</span><p className="font-serif text-xl leading-snug text-[#292b27] sm:text-2xl">{item}</p></div>)}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#77776e]">Support is coordinated across the people and skills required for the agreed project. We do not rely on inflated team-size or experience claims.</p>
          </div>
        </div>
      </section>

      {/* 05 — How it works */}
      <section className="bg-[#e7e2d8]">
        <div className="container-luxe py-20 md:py-28">
          <div className="max-w-3xl"><SectionEyebrow>How it works</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl">A Clear Process. Work Built Around Your Goals.</h2></div>
          <ol className="mt-14 grid gap-0 border-y border-[#c4bcad] md:grid-cols-4">
            {[
              ["01","Tell Us About Your Work","Share your book or project, your current presence and what you want to improve."],
              ["02","Receive Your Assessment","We review the information and identify the needs and priorities that matter."],
              ["03","Get Your Recommended Plan","You receive a suitable scope, deliverables, fees and timing before work begins."],
              ["04","Our Team Gets to Work","We carry out the agreed work and provide the relevant updates, handover or report."],
            ].map(([n,title,desc],i)=><li key={n} className="relative grid grid-cols-[3rem_1fr] gap-4 border-b border-[#c4bcad] py-7 last:border-0 md:grid-cols-1 md:border-b-0 md:border-r md:px-6 md:py-8 md:first:pl-0 md:last:border-r-0"><span className="font-serif text-3xl text-[#96784f]">{n}</span><div><h3 className="font-serif text-2xl leading-tight text-[#20221f]">{title}</h3><p className="mt-3 text-sm leading-[1.8] text-[#62655d]">{desc}</p></div>{i<3&&<span className="absolute -bottom-2 right-4 z-10 hidden size-4 rotate-45 border-r border-t border-[#96784f] bg-[#e7e2d8] md:-right-2 md:bottom-auto md:top-10 md:block"/>}</li>)}
          </ol>
        </div>
      </section>

      {/* 06 — Portfolio */}
      <section className="bg-[#f8f6f0]">
        <div className="container-luxe py-20 md:py-28">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><SectionEyebrow>Selected projects</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.035em] md:text-6xl">See the Work Behind the Results.</h2><p className="mt-4 max-w-2xl text-sm leading-[1.8] text-[#62655d]">A selection of real digital, reader-discovery and brand-presentation projects.</p></div><Link to="/portfolio" className="inline-flex items-center gap-2 self-start border-b border-[#96784f] pb-2 text-sm font-medium text-[#20221f]">Explore the portfolio <ArrowRight size={15}/></Link></div>
          <div className="grid gap-6 md:grid-cols-2">
            {PORTFOLIO_PROJECTS.map((project,i)=><article key={project.name} className="group border border-[#d4cec2] bg-[#eeece5]">
              <div className={`relative flex aspect-[16/9] items-end overflow-hidden p-6 sm:p-8 ${["bg-[#d8d4c9]","bg-[#dce1d9]","bg-[#e1d8cf]","bg-[#d9dfe0]"][i%4]}`}>
                <div className="absolute inset-5 border border-[#a99f8e]/60"/><div className="relative max-w-[80%]"><p className="text-[9px] uppercase tracking-[0.2em] text-[#766f62]">Draft Zenith / Project 0{i+1}</p><p className="mt-3 font-serif text-3xl leading-[1.02] tracking-[-0.03em] text-[#292b27] sm:text-4xl">{project.name}</p></div><span className="absolute right-8 top-8 font-serif text-5xl text-[#96784f]/70">0{i+1}</span>
              </div>
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-7"><div><h3 className="font-serif text-2xl text-[#20221f]">{project.name}</h3><p className="mt-2 max-w-lg text-sm leading-[1.8] text-[#62655d]">{project.description}</p></div>{project.href&&<a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 self-start border-b border-[#96784f] pb-1 text-sm font-medium text-[#20221f] transition hover:text-[#80633e]">View project <ArrowUpRight size={15}/></a>}</div>
            </article>)}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[#77776e]">Project links lead to the referenced work. Any performance figures or outcomes are specific to the individual project and are not promises of future results.</p>
        </div>
      </section>

      {/* 07 — Value of presence */}
      <section className="bg-[#20221f] text-[#f5f2eb]">
        <div className="container-luxe grid gap-12 py-20 md:grid-cols-12 md:items-center md:gap-16 md:py-28">
          <div className="md:col-span-6"><SectionEyebrow tone="light">The value of a connected presence</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.035em] md:text-5xl">Your Online Presence Should Work as Hard as Your Work Does.</h2><p className="mt-6 text-base leading-[1.85] text-[#d4d1c8]">Readers, media contacts and professional partners often look online before deciding what to explore next. A clear, coordinated presence makes that journey easier to understand.</p></div>
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-px bg-[#55574f]">
              {[
                ["01","Present your work professionally","A consistent identity and clear information help people understand what you create."],
                ["02","Give readers a place to explore","A well-structured website or book page brings essential details and links together."],
                ["03","Improve routes to discovery","Relevant content and audience research create more ways for people to encounter your work."],
                ["04","Build a professional record","Press materials and verified coverage can support your website, proposals and portfolio."],
              ].map(([n,title,desc])=><div key={n} className="bg-[#292b27] p-5 sm:p-7"><span className="font-serif text-2xl text-[#c5a77b]">{n}</span><h3 className="mt-5 font-serif text-xl leading-tight sm:text-2xl">{title}</h3><p className="mt-3 text-xs leading-[1.8] text-[#c5c4bb] sm:text-sm">{desc}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      {/* 08 — FAQ */}
      <section className="bg-[#eeece5]">
        <div className="container-luxe grid gap-10 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-4"><SectionEyebrow>Questions, answered</SectionEyebrow><h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.035em] md:text-5xl">A Few Things You May Want to Know.</h2><p className="mt-5 text-sm leading-[1.8] text-[#62655d]">If you have a question about a particular book, service or project, you can include it in your assessment request.</p><Link to="/get-started" className="mt-6 inline-flex items-center gap-2 border-b border-[#96784f] pb-2 text-sm font-medium">Ask us about your project <ArrowRight size={15}/></Link></div>
          <div className="md:col-span-8">
            {faqs.map((faq,i)=><div key={faq.q} className="border-t border-[#c9c3b7] last:border-b"><button type="button" aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)} className="flex w-full items-center justify-between gap-6 py-5 text-left"><span className="font-serif text-xl leading-snug text-[#20221f] sm:text-2xl">{faq.q}</span><span className="grid size-8 shrink-0 place-items-center border border-[#b8ad9c] text-[#80633e]">{openFaq===i?<Plus size={16} className="rotate-45"/>:<Plus size={16}/>}</span></button>{openFaq===i&&<p className="max-w-3xl pb-6 pr-10 text-sm leading-[1.9] text-[#62655d]">{faq.a}</p>}</div>)}
          </div>
        </div>
      </section>

      {/* 09 — Final CTA */}
      <section className="bg-[#e5ded1]">
        <div className="container-luxe py-20 text-center md:py-28">
          <SectionEyebrow>Start with a conversation</SectionEyebrow>
          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.04em] text-[#20221f] md:text-6xl">Your Work Deserves More Than an Online Presence. It Deserves a Clear Direction.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.85] text-[#62655d]">Tell us about your book or creative project. We'll assess your current position and help identify practical ways to strengthen its presentation, visibility and professional presence.</p>
          <Link to="/get-started" className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 bg-[#20221f] px-7 py-4 text-sm font-medium text-[#f8f6f0] transition hover:bg-[#454840]">Request Your Free Assessment <ArrowRight size={16}/></Link>
        </div>
      </section>
    </main>
  </SiteLayout>;
}
