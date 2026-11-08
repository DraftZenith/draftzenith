import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";
import { PORTFOLIO_PROJECTS } from "@/data/services";

export const Route = createFileRoute("/portfolio")({
  head: () => ({ meta: [
    { title: "Portfolio | Draft Zenith Author Services" },
    { name: "description", content: "Explore selected Draft Zenith digital presence and reader-discovery projects." },
    { property: "og:title", content: "Portfolio | Draft Zenith" },
    { property: "og:description", content: "Selected author-branding, digital-presence, and reader-discovery project links." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return <SiteLayout>
    <AgencyPageIntro eyebrow="Selected work" title="Digital projects and reader-discovery work." description="Explore the selected projects below. We have kept this page to project names and links supplied for this portfolio, without adding unverified client claims or outcomes." />
    <section className="container-luxe pb-20 md:pb-28">
      <ol className="border-t border-border">{PORTFOLIO_PROJECTS.map((project, i) => <li key={project.name} className="grid gap-4 border-b border-border py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-7 sm:py-9">
        <span className="font-serif text-2xl text-primary">0{i + 1}</span>
        <h2 className="font-serif text-2xl md:text-3xl">{project.name}</h2>
        {project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-self-start text-sm underline underline-offset-4 hover:text-primary sm:justify-self-end">View Project <ArrowUpRight size={15} /></a> : <span className="text-sm text-muted-foreground sm:text-right">Project link not provided</span>}
      </li>)}</ol>
    </section>
    <AssessmentCta title="Have a project in mind?" />
  </SiteLayout>;
}