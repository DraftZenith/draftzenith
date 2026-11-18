import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AssessmentCta } from "@/components/site/AgencyPage";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Draft Zenith | Author Services Team" },
    { name: "description", content: "Meet Draft Zenith, an author services team working across websites, branding, visual promotion and book discovery." },
    { property: "og:title", content: "About Draft Zenith" },
    { property: "og:description", content: "A team for the work that helps authors present their books and reach readers." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <SiteLayout>
    <section className="bg-[#203a36] text-[#f7f1e7]">
      <div className="container-luxe grid gap-8 pb-16 pt-36 md:grid-cols-12 md:items-end md:pb-20 md:pt-48">
        <div className="space-y-5 md:col-span-8">
          <SectionEyebrow tone="light">About Draft Zenith</SectionEyebrow>
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.04] text-balance sm:text-5xl md:text-7xl">A team helping authors present and promote their books.</h1>
        </div>
        <p className="max-w-xl leading-relaxed text-[#dce4dc] md:col-span-4">Draft Zenith is an author and book visibility partner. We help authors present their work clearly, build useful digital homes and create more ways for readers to encounter their books.</p>
      </div>
    </section>
    <section className="bg-[#f2ecdf]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>Why we exist</SectionEyebrow></div>
        <div className="space-y-6 md:col-span-8">
          <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-5xl">Readers need a clear way to find out more about your book.</h2>
          <p className="max-w-3xl text-lg leading-relaxed text-[#5d625e]">An author may need a website that reflects their work. Another may need campaign artwork, a book trailer or a clearer route from a social post to a purchase page. Some need help identifying platforms and communities that are relevant to their readers. These are the practical services we provide.</p>
        </div>
      </div>
    </section>
    <section className="bg-[#e4e9df]">
      <div className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>How the team works</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">The people and skills behind each project.</h2></div>
        <div className="md:col-span-8">
          <p className="max-w-2xl leading-relaxed text-[#536056]">Draft Zenith is supported by a team with different skills and responsibilities. Depending on the project, we bring in website development, graphic design, brand direction, Pinterest management, book trailer production or audience research. We coordinate the work against an agreed brief, so you have one point of contact instead of managing several providers.</p>
          <ol className="mt-8 border-t border-[#c7d0c4]">
            {[
              ["We learn about your book", "We look at your book, your existing presence and the result you are working towards."],
              ["We agree on the right services", "We recommend only the services that fit the brief. A single service is fine. A combined project is also possible."],
              ["We confirm the deliverables", "You receive the scope, deliverables, price and timing before work begins."],
            ].map(([title,body],i)=><li key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#c7d0c4] py-6"><span className="font-serif text-2xl text-[#a45d47]">0{i+1}</span><div><h3 className="font-serif text-xl md:text-2xl">{title}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#5d625e]">{body}</p></div></li>)}
          </ol>
        </div>
      </div>
    </section>
    <section className="bg-[#f1dfd5]">
      <div className="container-luxe flex flex-col gap-5 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div><SectionEyebrow>Meet the people</SectionEyebrow><h2 className="mt-3 font-serif text-3xl">Get to know the team behind the work.</h2></div>
        <Link to="/team" className="inline-flex items-center gap-3 border-b border-[#a45d47] pb-1 text-sm font-medium text-[#4a302b]">Meet our team <ArrowRight size={15}/></Link>
      </div>
    </section>
    <AssessmentCta title="Tell us about the book you are working on."/>
  </SiteLayout>;
}
