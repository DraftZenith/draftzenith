import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";
import { PORTFOLIO_PROJECTS } from "@/data/services";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Selected Work | Draft Zenith" },
    { name: "description", content: "Explore Draft Zenith author websites, Pinterest campaign work and Goodreads reader discussions." },
    { property: "og:title", content: "Selected Work | Draft Zenith" },
    { property: "og:description", content: "Examples of author presentation, book visibility and reader engagement work." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return <SiteLayout>
    <AgencyPageIntro eyebrow="Selected work" title="Selected project work." description="These examples show campaign design, Pinterest activity and reader discussion from selected projects. Results vary by book, audience and timing." />

    <section className="bg-[#f2ecdf]">
      <div className="container-luxe grid gap-6 py-14 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-4"><SectionEyebrow>Pinterest campaign</SectionEyebrow><h2 className="mt-4 font-serif text-3xl md:text-4xl">Outback Odyssey</h2><p className="mt-3 text-sm text-[#65675f]">Paul Rushworth-Brown</p></div>
        <div className="md:col-span-8">
          <p className="max-w-2xl leading-relaxed text-[#555f59]">The campaign used visual content built around the novel’s Australian setting, migration story and themes of identity and belonging. The figures below are the activity recorded in the supplied campaign screenshots.</p>
          <div className="mt-7 grid grid-cols-2 gap-px bg-[#d7cbb7] sm:grid-cols-4">
            {[
              ["541","Views on first pin"],["266","Saves on first pin"],["468","Views on second pin"],["257","Saves on second pin"],
            ].map(([value,label])=><div key={label} className="bg-[#fffaf1] p-5"><p className="font-serif text-3xl text-[#a45d47] tabular-nums">{value}</p><p className="mt-2 text-xs leading-relaxed text-[#626660]">{label}</p></div>)}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#626660]">Campaign figures are taken from the supplied analytics screenshots. Activity varies with content, audience and timing.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#e4e9df]">
      <div className="container-luxe grid gap-6 py-14 md:grid-cols-12 md:gap-10 md:py-20">
        <div className="md:col-span-4"><SectionEyebrow>Goodreads discussion</SectionEyebrow><h2 className="mt-4 font-serif text-3xl leading-tight md:text-4xl">The Land Doesn’t Know You. How Do You Learn to Belong?</h2><p className="mt-3 text-sm text-[#5c675e]">Outback Odyssey · Novique Reading Challenge</p></div>
        <div className="md:col-span-8">
          <p className="max-w-2xl leading-relaxed text-[#536056]">A discussion prompt invited readers to consider migration, identity and what makes a place feel like home. The supplied Goodreads screenshot recorded 13 comments on the topic.</p>
          <div className="mt-7 flex flex-col justify-between gap-5 border-y border-[#c7d0c4] py-5 sm:flex-row sm:items-center">
            <div><p className="font-serif text-5xl text-[#607961] tabular-nums">13</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#5c675e]">Comments shown in the screenshot</p></div>
            <a href="https://www.goodreads.com/topic/show/24779734-the-land-doesn-t-know-you-how-do-you-learn-to-belong" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 self-start border-b border-[#607961] pb-1 text-sm font-medium text-[#263d36] hover:text-[#607961]">Read the discussion <ArrowUpRight size={15}/></a>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#5c675e]">The public comment count may change as readers add to the conversation.</p>
        </div>
      </div>
    </section>

    <section className="bg-[#f1dfd5]">
      <div className="container-luxe py-14 md:py-20">
        <div className="mb-8"><SectionEyebrow>Other projects</SectionEyebrow><h2 className="mt-3 font-serif text-3xl md:text-4xl">More projects.</h2></div>
        <ol className="border-t border-[#d6b9aa]">
          {PORTFOLIO_PROJECTS.map((project,i)=><li key={project.name} className="grid gap-3 border-b border-[#d6b9aa] py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-6">
            <span className="font-serif text-2xl text-[#a45d47]">0{i+1}</span>
            <div><h3 className="font-serif text-2xl md:text-3xl">{project.name}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#715b53]">{project.description}</p></div>
            {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-self-start text-sm font-medium text-[#4a302b] underline underline-offset-4 hover:text-[#a45d47] sm:justify-self-end">Open project <ArrowUpRight size={15}/></a>}
          </li>)}
        </ol>
      </div>
    </section>
    <AssessmentCta title="Have a project you would like us to look at?"/>
  </SiteLayout>;
}
