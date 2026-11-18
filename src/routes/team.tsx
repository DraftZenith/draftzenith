import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Our Team | Draft Zenith" },
    { name: "description", content: "Meet the people behind Draft Zenith's author branding, book services, and digital presence work." },
    { property: "og:title", content: "Our Team | Draft Zenith" },
    { property: "og:description", content: "A distributed team supporting authors and their books." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ] }),
  component: TeamPage,
});

const funmiPortrait = "data:image/jpeg;base64,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";

const members = [
  { name: "Robert Robin Henry", email: "robertrobinhenry@gmail.com", note: "Draft Zenith team" },
  { name: "Elowen Harper-Reed", email: "elowenharperreed@gmail.com", note: "Draft Zenith team" },
  { name: "Elowen Maris", email: "imelowenmaris@gmail.com", note: "Draft Zenith team" },
  { name: "Melissa Moore", email: "immelissamoore@gmail.com", note: "Draft Zenith team" },
];

function TeamPage() {
  return <SiteLayout>
    <section className="container-luxe pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="max-w-3xl space-y-6">
        <SectionEyebrow>People behind the work</SectionEyebrow>
        <h1 className="font-serif text-4xl leading-[1.05] text-balance md:text-6xl">Meet the Draft Zenith Team.</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">Draft Zenith brings together a distributed team supporting authors with their brand presence, book services and digital projects. Connect directly with a team member below.</p>
      </div>
    </section>
    <section className="border-y border-[#c5d0c3] bg-[#e1e9df]">
      <div className="container-luxe bg-[#f1dfd5] py-16 md:py-24">
        <div className="mb-10 space-y-3"><SectionEyebrow>Our people</SectionEyebrow><h2 className="font-serif text-3xl md:text-4xl">A team working across author services.</h2></div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.slice(0,2).map((member) => <article key={member.email} className="flex min-h-64 flex-col justify-between border border-[#c5d0c3] bg-[#fffaf1] p-7">
            <div><span className="text-xs uppercase tracking-[0.2em] text-primary">Draft Zenith</span><h3 className="mt-4 font-serif text-2xl">{member.name}</h3><p className="mt-2 text-sm text-muted-foreground">{member.note}</p></div>
            <a href={`mailto:${member.email}`} className="mt-8 inline-flex items-center gap-2 self-start border-b border-primary pb-1 text-sm hover:text-primary"><Mail size={15}/> Get in touch <ArrowUpRight size={14}/></a>
          </article>)}
          <article className="overflow-hidden border border-[#c5d0c3] bg-[#fffaf1]">
            <img src={funmiPortrait} alt="Portrait of Funmi K." width="240" height="240" loading="lazy" className="aspect-[4/3] w-full object-cover object-center"/>
            <div className="flex min-h-48 flex-col justify-between p-7">
              <div><span className="text-xs uppercase tracking-[0.2em] text-primary">Book services specialist</span><h3 className="mt-3 font-serif text-2xl">Funmi K.</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">A book services specialist and Fiverr service provider.</p></div>
              <a href="mailto:hello.funmilayork@gmail.com" className="mt-6 inline-flex items-center gap-2 self-start border-b border-primary pb-1 text-sm hover:text-primary"><Mail size={15}/> Get in touch <ArrowUpRight size={14}/></a>
            </div>
          </article>
          {members.slice(2).map((member) => <article key={member.email} className="flex min-h-64 flex-col justify-between border border-border bg-background p-7">
            <div><span className="text-xs uppercase tracking-[0.2em] text-primary">Draft Zenith</span><h3 className="mt-4 font-serif text-2xl">{member.name}</h3><p className="mt-2 text-sm text-muted-foreground">{member.note}</p></div>
            <a href={`mailto:${member.email}`} className="mt-8 inline-flex items-center gap-2 self-start border-b border-primary pb-1 text-sm hover:text-primary"><Mail size={15}/> Get in touch <ArrowUpRight size={14}/></a>
          </article>)}
        </div>
      </div>
    </section>
    <section className="container-luxe py-16 md:py-24">
      <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-12">
        <div className="md:col-span-4"><SectionEyebrow>Work with us</SectionEyebrow></div>
        <div className="space-y-4 md:col-span-8"><h2 className="font-serif text-3xl md:text-4xl">Let&apos;s talk about your book and your next steps.</h2><p className="max-w-2xl leading-relaxed text-muted-foreground">If you are an author looking to strengthen your brand, digital presence or book discoverability, tell us what you are working towards.</p><a href="/get-started" className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Request a Free Assessment <ArrowUpRight size={15}/></a></div>
      </div></section>
  </SiteLayout>;
}
