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

const slugify = (value: string) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const serviceTones = [
  "bg-[#fffaf0] text-[#0b1d32]",
  "bg-[#eee5d5] text-[#0b1d32]",
  "bg-[#e8ddc7] text-[#0b1d32]",
  "bg-[#e1e6e9] text-[#0b1d32]",
  "bg-[#102943] text-[#fff8e9]",
  "bg-[#001220] text-[#fdf6e6]",
];

function HomePage() {
  return <SiteLayout>
    <section className="overflow-hidden bg-[#0b1d32] text-[#fff8e9]">
      <div className="container-luxe grid gap-12 pb-20 pt-36 md:grid-cols-12 md:items-center md:gap-10 md:pb-28 md:pt-48">
        <div className="space-y-7 md:col-span-7">
          <p className="text-xs uppercase tracking-[0.24em] text-[#c99a4d]">Author and book visibility partner</p>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.02] text-balance sm:text-6xl md:text-7xl">Websites, book promotion and reader discovery, handled by one team.</h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#e8ddc7] md:text-lg">Draft Zenith helps authors with the practical work involved in presenting and promoting a book. We build and improve author websites, design campaign materials, produce trailers and research ways to reach readers. You can hire us for one service or ask us to coordinate several.</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link to="/get-started" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#c99a4d] px-6 py-3 text-sm font-semibold text-[#0b1d32] transition hover:bg-[#dfbd79]">Tell us about your book <ArrowRight size={16}/></Link>
            <Link to="/services" className="inline-flex min-h-12 items-center justify-center border border-[#d9c8a8] px-6 py-3 text-sm text-[#fff8e9] transition hover:border-[#c99a4d] hover:text-[#dfbd79]">Explore our services</Link>
          </div>
        </div>
        <div className="relative md:col-span-5">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#b9694f] opacity-90"/>
          <div className="relative border border-[#c99a4d]/60 bg-[#f2eadb] p-6 text-[#243641] shadow-2xl sm:p-8">
            <div className="flex items-center justify-between border-b border-[#d9c8a8] pb-4 text-[10px] uppercase tracking-[0.22em]"><span>Draft Zenith</span><span>Field notes 01</span></div>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#a8752d]">The work around the book</p>
            <h2 className="mt-3 max-w-sm font-serif text-4xl leading-[1.04] sm:text-5xl">A reader should know where to go next.</h2>
            <div className="mt-9 space-y-0 border-t border-[#d9c8a8]">
              <div className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#d9c8a8] py-4"><span className="font-serif text-xl text-[#a8752d]">01</span><div><p className="text-xs uppercase tracking-[0.16em]">Present the author</p><p className="mt-1 text-sm text-[#5d6875]">Brand, website and book pages</p></div></div>
              <div className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[#d9c8a8] py-4"><span className="font-serif text-xl text-[#a8752d]">02</span><div><p className="text-xs uppercase tracking-[0.16em]">Introduce the book</p><p className="mt-1 text-sm text-[#5d6875]">Trailers and promotional design</p></div></div>
              <div className="grid grid-cols-[3rem_1fr] gap-3 py-4"><span className="font-serif text-xl text-[#a8752d]">03</span><div><p className="text-xs uppercase tracking-[0.16em]">Reach likely readers</p><p className="mt-1 text-sm text-[#5d6875]">Audience research and visibility work</p></div></div>
            </div>
          </div>
          <p className="relative mt-4 text-right text-xs uppercase tracking-[0.18em] text-[#e8ddc7]">Start with the support you need.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#001220] text-[#fdf6e6]"><div className="container-luxe py-12 md:py-20"><div className="mb-8 max-w-3xl"><p className="text-xs uppercase tracking-[0.22em] text-[#c08848]">The work, in pictures</p><h2 className="mt-4 font-serif text-3xl md:text-5xl">Six ways to build a stronger book presence.</h2></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[["Author branding","A considered digital home for your books and identity.","photo-1517841905240-472988babdf9","author-branding-and-digital-presence"],["Pinterest","Visual discovery shaped around readers and search.","photo-1618005182384-a83a8bd57fbe","pinterest-marketing-and-book-visibility"],["Book trailers","A cinematic introduction to the story.","photo-1485846234645-a62644f84728","book-trailers-and-visual-promotion"],["Reader discovery","Research and routes into relevant reader communities.","photo-1519682337058-a94d519337bc","book-discovery-and-audience-development"],["Media and recognition","Professional materials and carefully researched outreach.","photo-1455390582262-044cdead277a","media-and-professional-recognition"],["Ongoing visibility","Consistent publishing and coordinated promotion.","photo-1499750310107-5fef28a66643","ongoing-author-visibility-management"]].map(([name,desc,img,slug],i)=><Link key={slug} to="/services/$slug" params={{slug}} className="group relative overflow-hidden"><img loading="lazy" src={`https://images.unsplash.com/${img}?auto=format&fit=crop&w=1200&q=85`} alt={name} className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.04] md:h-80"/><div className="absolute inset-0 bg-gradient-to-t from-[#001220]/95 via-[#001220]/15 to-transparent"/><div className="absolute bottom-0 p-6 md:p-7"><p className="text-xs uppercase tracking-[0.18em] text-[#c08848]">0{i+1}</p><h3 className="mt-2 font-serif text-2xl md:text-3xl">{name}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-[#e8ddc7]">{desc}</p></div></Link>)}</div></div></section>

<section className="bg-[#f7f0e2]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>Why authors come to us</SectionEyebrow></div>
        <div className="space-y-6 md:col-span-8">
          <h2 className="max-w-4xl font-serif text-3xl leading-tight text-balance md:text-5xl">Publishing the book is one part. Helping readers find it is another.</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#566170]">A reader may first see your book in a search, on Pinterest or in a conversation. When they look for more information, your website and book pages should make it easy to learn about the book and decide what to do next. We help put those pieces in place.</p>
          <Link to="/about" className="inline-flex items-center gap-2 border-b border-[#a8752d] pb-1 text-sm font-medium text-[#0b1d32] hover:text-[#a8752d]">How Draft Zenith works <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#eee5d5]">
      <div className="container-luxe py-16 md:py-24">
        <div className="mb-10 flex flex-col gap-4 border-b border-[#c9d0c5] pb-7 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3"><SectionEyebrow>What we do</SectionEyebrow><h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">A team with the skills your project needs.</h2></div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#956a2e]">All services <ArrowRight size={15}/></Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {SERVICES.map((service,i)=><Link key={service.category} to="/services/$slug" params={{ slug: slugify(service.category) }} className={`group flex min-h-56 flex-col justify-between p-6 transition hover:-translate-y-1 hover:shadow-lg sm:p-8 ${serviceTones[i]}`}>
            <div className="flex items-start justify-between gap-4"><span className="text-xs uppercase tracking-[0.2em] opacity-70">0{i+1}</span><ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
            <div><h3 className="max-w-md font-serif text-2xl leading-tight sm:text-3xl">{service.category}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed opacity-75">{service.intro}</p></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#fffaf0]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>One service, or several that work together</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Bring the pieces together when it makes sense.</h2></div>
        <div className="md:col-span-8">
          <p className="max-w-2xl leading-relaxed text-[#566170]">A trailer can introduce your book. Pinterest content can help people browsing related subjects come across it. A book page gives them somewhere to read more, follow retailer links or sign up for updates. We can provide all three services or just the parts you need.</p>
          <ol className="mt-8 grid gap-5 sm:grid-cols-3">
            <li className="border-t-2 border-[#a8752d] pt-4"><span className="text-xs uppercase tracking-[0.15em] text-[#a8752d]">First</span><h3 className="mt-2 font-serif text-xl">Introduce</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Video and visual assets help present the book.</p></li>
            <li className="border-t-2 border-[#bd8b3e] pt-4"><span className="text-xs uppercase tracking-[0.15em] text-[#9a702f]">Next</span><h3 className="mt-2 font-serif text-xl">Bring people in</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Research and content create relevant discovery routes.</p></li>
            <li className="border-t-2 border-[#0b1d32] pt-4"><span className="text-xs uppercase tracking-[0.15em] text-[#0b1d32]">Then</span><h3 className="mt-2 font-serif text-xl">Give them a place to go</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">A book page brings information and next steps together.</p></li>
          </ol>
        </div>
      </div>
    </section>


    <section className="bg-[#f7f0e2]">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-14 md:py-24">
        <div className="md:col-span-4">
          <SectionEyebrow>Author Brand Elevation</SectionEyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">A plan shaped around what your author brand needs next.</h2>
        </div>
        <div className="space-y-6 md:col-span-8">
          <p className="max-w-3xl text-lg leading-relaxed text-[#566170]">Author Brand Elevation is our assessment-led way of bringing the right services together. We look at your current presence, your book and your priorities, then recommend individual services or a coordinated plan. There is no requirement to buy a bundle.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="border-t border-[#bd8b3e] pt-4"><h3 className="font-serif text-xl">A stronger online home</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Author branding, website development and a book landing page.</p></div>
            <div className="border-t border-[#bd8b3e] pt-4"><h3 className="font-serif text-xl">More routes to book discovery</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Pinterest marketing, audience research and Goodreads discovery work.</p></div>
            <div className="border-t border-[#bd8b3e] pt-4"><h3 className="font-serif text-xl">A stronger visual presentation</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Book trailer production, promotional graphics and a dedicated book page.</p></div>
            <div className="border-t border-[#bd8b3e] pt-4"><h3 className="font-serif text-xl">A professional media record</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Press-kit development, editorial outreach and a professional recognition page.</p></div>
            <div className="border-t border-[#bd8b3e] pt-4 sm:col-span-2"><h3 className="font-serif text-xl">Continuing visibility support</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Monthly Pinterest publishing, promotional coordination, discovery research and performance reporting.</p></div>
          </div>
          <Link to="/get-started" className="inline-flex items-center gap-2 border-b border-[#a8752d] pb-1 text-sm font-semibold text-[#0b1d32] hover:text-[#a8752d]">Request an assessment <ArrowRight size={15}/></Link>
        </div>
      </div>
    </section>

    <section className="bg-[#001220] text-[#fdf6e6]">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionEyebrow tone="light">Clear starting prices</SectionEyebrow>
            <h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">Choose the service that fits the work.</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-[#e8ddc7]">Our prices include established one-time services and introductory rates for book trailers, media support and monthly management. Each service page explains what is included and what may be quoted separately.</p>
          </div>
          <Link to="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[#dfbd79] hover:text-white">See all package prices <ArrowRight size={15}/></Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="border border-[#c08848]/60 bg-[#142c40] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#dfbd79]">Recommended starting point · Book trailers</p>
            <h3 className="mt-3 font-serif text-2xl">Standard Book Trailer</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#e8ddc7]">A developed visual introduction shaped around your book's genre, tone and themes.</p>
            <p className="mt-5 font-serif text-4xl text-[#dfbd79]">$450 <span className="font-sans text-xs uppercase tracking-wider text-[#e8ddc7]">one-time</span></p>
          </div>
          <div className="border border-[#c08848]/60 bg-[#142c40] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#dfbd79]">Recommended starting point · Media</p>
            <h3 className="mt-3 font-serif text-2xl">Media Outreach Campaign</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#e8ddc7]">Publication research, tailored editorial pitches, submission coordination and appropriate follow-up.</p>
            <p className="mt-5 font-serif text-4xl text-[#dfbd79]">$450 <span className="font-sans text-xs uppercase tracking-wider text-[#e8ddc7]">one-time</span></p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[#e8ddc7]">Editorial decisions remain with each publication. Sponsored placements are identified as paid, and external publication charges are separate. Monthly management is priced separately from one-time projects.</p>
      </div>
    </section>

    <section className="bg-[#e8ddc7]">
      <div className="container-luxe py-16 md:py-24">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div className="space-y-3"><SectionEyebrow>Selected work</SectionEyebrow><h2 className="font-serif text-3xl md:text-5xl">A few examples of our work.</h2></div><Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#956a2e]">See the portfolio <ArrowRight size={15}/></Link></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {PORTFOLIO_PROJECTS.map((project,i)=><div key={project.name} className="flex min-h-32 items-center justify-between gap-5 border-b border-[#d9c8a8] py-5">
            <div><span className="text-xs text-[#956a2e]">PROJECT 0{i+1}</span><h3 className="mt-2 font-serif text-xl sm:text-2xl">{project.name}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-[#566170]">{project.description}</p></div>
            {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}`} className="grid size-11 shrink-0 place-items-center rounded-full border border-[#a8752d] text-[#753e31] transition hover:bg-[#a8752d] hover:text-white"><ArrowUpRight size={18}/></a>}
          </div>)}
        </div>
      </div>
    </section>

    <section className="bg-[#f7f0e2]">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid gap-8 border-t border-[#d7cbb7] pt-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <SectionEyebrow>How we work</SectionEyebrow>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">Clear expectations before a project starts.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:col-span-8">
            <div><h3 className="font-serif text-xl">Agreed deliverables</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">You see the proposed work, price and timing before you decide to proceed.</p></div>
            <div><h3 className="font-serif text-xl">One point of contact</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">Our distributed team coordinates the agreed work, so you are not left managing separate providers.</p></div>
            <div><h3 className="font-serif text-xl">Services that fit the brief</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">You can commission one service or combine relevant work. There is no compulsory bundle.</p></div>
            <div><h3 className="font-serif text-xl">Honest reporting</h3><p className="mt-2 text-sm leading-relaxed text-[#566170]">We report available activity and outcomes without promising sales, rankings, reviews or editorial coverage.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#fffaf0]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-20">
        <div className="md:col-span-4">
          <SectionEyebrow>Questions authors ask</SectionEyebrow>
          <h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">A few useful things to know.</h2>
          <Link to="/how-it-works" className="mt-6 inline-flex items-center gap-2 border-b border-[#a8752d] pb-1 text-sm font-medium text-[#0b1d32]">Read how it works <ArrowRight size={15}/></Link>
        </div>
        <div className="md:col-span-8">
          <div className="border-t border-[#d9c8a8]">
            {[
              ["Do I have to purchase a complete package of services?", "No. You can commission an individual service. If combining services would help with your stated goals, we can explain the options in your assessment."],
              ["What happens during the free assessment?", "We review the information you share about your book, current online presence and priorities. It gives us a starting point for discussing suitable services; it does not commit you to a purchase."],
              ["What do I need to provide?", "Depending on the project, you may need to supply accurate book information, biography, cover files, photographs, approved testimonials and other materials. We confirm the requirements before work begins."],
              ["Are third-party costs included in the listed prices?", "Not automatically. Domain registration, hosting, premium software, advertising, actors, voice talent, premium licences and external publication charges are separate where applicable unless your written agreement says otherwise."],
              ["Can Draft Zenith guarantee book sales, reviews or media coverage?", "No. We can carry out the agreed design, research, publishing and outreach work, but reader behaviour and independent publication decisions are outside our control. Sponsored placements are identified as paid."],
              ["How are projects paid for?", "One-time projects use a 50% upfront payment and a 50% balance before final delivery or handover. Monthly management is paid in full in advance. Any different arrangement must be confirmed in the written agreement."],
            ].map(([question,answer])=><details key={question} className="group border-b border-[#d9c8a8] py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-medium text-[#0b1d32] marker:hidden">
                <span>{question}</span><span aria-hidden="true" className="text-xl leading-none text-[#a8752d] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-3xl pr-8 text-sm leading-relaxed text-[#566170]">{answer}</p>
            </details>)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#102943] text-[#fff8e9]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:items-center md:py-20">
        <div className="md:col-span-8"><SectionEyebrow>Start with the conversation</SectionEyebrow><h2 className="mt-4 max-w-3xl font-serif text-3xl leading-tight md:text-5xl">Tell us where your book needs support.</h2><p className="mt-4 max-w-2xl leading-relaxed text-[#e8ddc7]">You do not need to arrive with a complete marketing plan. Tell us about the book, what is already in place and what you would like to improve.</p></div>
        <div className="md:col-span-4 md:justify-self-end"><Link to="/get-started" className="inline-flex min-h-12 items-center gap-3 bg-[#c99a4d] px-6 py-3 text-sm font-semibold text-[#0b1d32] transition hover:bg-[#dfbd79]">Request an assessment <ArrowRight size={16}/></Link></div>
      </div>
    </section>
  </SiteLayout>;
}
