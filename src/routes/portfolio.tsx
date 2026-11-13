import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";
import { PORTFOLIO_PROJECTS } from "@/data/services";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio | Draft Zenith Author Services" },
    { name: "description", content: "Explore selected Draft Zenith author visibility, Pinterest, and Goodreads reader-discovery work." },
    { property: "og:title", content: "Portfolio | Draft Zenith" },
    { property: "og:description", content: "Selected author-branding, digital-presence, and reader-discovery project links." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return <SiteLayout>
    <AgencyPageIntro
      eyebrow="Selected work"
      title="Real projects. Measurable activity. Clear evidence."
      description="A selection of author visibility and digital-presence work. The examples below show campaign activity and public discussion, not guarantees of future results."
    />

    <section className="container-luxe grid gap-6 pb-16 md:grid-cols-2 md:gap-8 md:pb-20">
      <article className="flex h-full flex-col border border-border bg-card">
        <div className="border-b border-border p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Pinterest campaign</p>
          <h2 className="mt-3 font-serif text-3xl">Outback Odyssey</h2>
          <p className="mt-2 text-sm text-muted-foreground">Paul Rushworth-Brown</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A visual book-discovery campaign built around the novel’s Australian setting, migration story, and themes of identity and belonging.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-px bg-border">
          <div className="bg-background p-5 md:p-6">
            <p className="font-serif text-3xl tabular-nums">541</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Pin views</p>
          </div>
          <div className="bg-background p-5 md:p-6">
            <p className="font-serif text-3xl tabular-nums">266</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Saves</p>
          </div>
          <div className="bg-background p-5 md:p-6">
            <p className="font-serif text-3xl tabular-nums">468</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Views on second pin</p>
          </div>
          <div className="bg-background p-5 md:p-6">
            <p className="font-serif text-3xl tabular-nums">257</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Saves on second pin</p>
          </div>
        </div>
        <p className="mt-auto p-6 text-xs leading-relaxed text-muted-foreground md:px-8">
          Pinterest figures shown are the results visible in the supplied campaign analytics screenshots. Performance varies by content, audience, and timing.
        </p>
      </article>

      <article className="flex h-full flex-col border border-border bg-card">
        <div className="border-b border-border p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Goodreads reader discussion</p>
          <h2 className="mt-3 font-serif text-3xl">The Land Doesn’t Know You. How Do You Learn to Belong?</h2>
          <p className="mt-2 text-sm text-muted-foreground">Outback Odyssey · Novique Reading Challenge</p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            A discussion prompt connected the novel’s themes of migration, identity, and belonging with an open question about what makes a place feel like home.
          </p>
        </div>
        <div className="p-6 md:p-8">
          <p className="font-serif text-5xl tabular-nums">13</p>
          <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">Comments in the discussion</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The supplied Goodreads screenshot shows 13 comments on the topic. The discussion remains publicly viewable.
          </p>
          <a
            href="https://www.goodreads.com/topic/show/24779734-the-land-doesn-t-know-you-how-do-you-learn-to-belong"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:text-primary"
          >
            View Goodreads discussion <ArrowUpRight size={15} />
          </a>
        </div>
        <p className="mt-auto px-6 pb-6 text-xs leading-relaxed text-muted-foreground md:px-8">
          Comment count is taken from the supplied screenshot and may change as readers add to the conversation.
        </p>
      </article>
    </section>

    <section className="container-luxe pb-20 md:pb-28">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">More selected projects</p>
        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Explore other work</h2>
      </div>
      <ol className="border-t border-border">{PORTFOLIO_PROJECTS.map((project, i) => <li key={project.name} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-7 sm:py-9">
        <span className="font-serif text-2xl text-primary">0{i + 1}</span>
        <h3 className="font-serif text-2xl md:text-3xl">{project.name}</h3>
        {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-self-start text-sm underline underline-offset-4 hover:text-primary sm:justify-self-end">View Project <ArrowUpRight size={15} /></a> : <span className="text-sm text-muted-foreground sm:text-right">Project link not provided</span>}
      </li>)}</ol>
    </section>
    <AssessmentCta title="Have a project in mind?" />
  </SiteLayout>;
}
