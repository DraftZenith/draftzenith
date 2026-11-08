import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Draft Zenith | Author Services Agency" },
    { name: "description", content: "Learn about Draft Zenith's author-branding, digital-presence, and book-discoverability work." },
    { property: "og:title", content: "About Draft Zenith" },
    { property: "og:description", content: "A focused author-services agency for branding, digital presence, and book discoverability." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: AboutPage,
});

function AboutPage() {
  return <SiteLayout>
    <AgencyPageIntro eyebrow="About Draft Zenith" title="Helping authors build a stronger presence around their work." description="Draft Zenith is an author branding, digital presence, and book discoverability agency. We help authors create professional brands, engaging digital experiences, and clearer paths for relevant readers to find their books." />
    <section className="border-y border-border bg-card">
      <div className="container-luxe grid gap-10 py-16 md:grid-cols-12 md:gap-16 md:py-24">
        <div className="md:col-span-4"><SectionEyebrow>Our mission</SectionEyebrow></div>
        <div className="space-y-6 md:col-span-8"><h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">An author&apos;s digital presence should make their work easier to understand and discover.</h2><p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">We bring together author-brand development, websites and book landing pages, and online discoverability services. Each project begins by understanding the author, their work, and what they want to improve.</p></div>
      </div>
    </section>
    <section className="container-luxe grid gap-8 py-16 md:grid-cols-12 md:gap-12 md:py-24">
      <div className="md:col-span-4"><SectionEyebrow>How we work</SectionEyebrow></div>
      <div className="md:col-span-8"><ol className="border-t border-border">{[
        ["Listen before recommending", "We start with your current presence, your book, and your goals."],
        ["Agree on the work", "The proposal sets out scope, deliverables, costs, and timing before the project begins."],
        ["Build with clarity", "We focus on the agreed work and keep expectations grounded in what is included."],
      ].map(([title, text], i) => <li key={title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-6"><span className="font-serif text-2xl text-primary">0{i + 1}</span><div><h3 className="font-serif text-xl md:text-2xl">{title}</h3><p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">{text}</p></div></li>)}</ol></div>
    </section>
    <AssessmentCta />
  </SiteLayout>;
}