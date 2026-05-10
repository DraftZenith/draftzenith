import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import hero from "@/assets/post-3.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Draft Zenith" },
      { name: "description", content: "Draft Zenith is a modern publishing company connecting indie authors with the readers who'll love them most." },
      { property: "og:title", content: "About Draft Zenith" },
      { property: "og:description", content: "A modern publishing company built for the next generation of readers and writers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 container-luxe">
        <div className="max-w-4xl space-y-6">
          <SectionEyebrow>Our Story</SectionEyebrow>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
            A modern publishing company for readers who still believe in books.
          </h1>
        </div>
      </section>

      <section className="container-luxe pb-20">
        <img src={hero} alt="A reading library" className="w-full aspect-[16/7] object-cover" />
      </section>

      <section className="container-luxe pb-28 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-4">
          <SectionEyebrow>Mission</SectionEyebrow>
        </div>
        <div className="md:col-span-8 space-y-6 font-serif text-2xl md:text-3xl leading-snug text-balance">
          <p>We exist to connect serious readers with the indie authors writing the books that should be on their shelves.</p>
          <p className="text-muted-foreground text-xl leading-relaxed font-sans">
            Draft Zenith began as a Saturday newsletter for friends. Today it is a small, fully independent publishing company — a journal, an author platform, and a marketing studio in one.
          </p>
        </div>
      </section>

      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe grid md:grid-cols-3 gap-16">
          {[
            { n: "01", t: "Help authors grow", d: "Indie writers deserve the same craft, design, and editorial care as anyone published in New York." },
            { n: "02", t: "Connect readers with quality", d: "We curate ruthlessly so our readers can trust every recommendation. Quiet excellence over noise." },
            { n: "03", t: "Modern, media-driven visibility", d: "From Pinterest to print, we build the editorial infrastructure indie books have always needed." },
          ].map((v) => (
            <div key={v.n} className="space-y-4">
              <div className="font-serif text-5xl text-primary">{v.n}</div>
              <h3 className="font-serif text-2xl">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-28 text-center max-w-3xl space-y-6">
        <SectionEyebrow>Join us</SectionEyebrow>
        <h2 className="font-serif text-4xl md:text-6xl text-balance">Whether you read or write — there's a chair for you here.</h2>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link to="/submit" className="bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-wider hover:bg-primary/90 transition">Submit your book</Link>
          <Link to="/blog" className="border border-border hover:border-primary px-6 py-3.5 text-sm uppercase tracking-wider transition">Read the journal</Link>
        </div>
      </section>
    </SiteLayout>
  );
}
