import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Megaphone, Telescope, Users, TrendingUp } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";

const SERVICES = [
  { icon: Sparkles, title: "Book Promotion", desc: "Editorial features, social storytelling, and a hand-built rollout calendar tuned to your launch.", price: "From $1,200" },
  { icon: Telescope, title: "Pinterest Marketing", desc: "Pinterest is where readers go to plan their next book. We design pins that move them.", price: "From $850" },
  { icon: Users, title: "Author Spotlight", desc: "A dedicated long-form profile, photo direction, and Q&A across our owned channels.", price: "From $1,800" },
  { icon: Megaphone, title: "Visibility Campaigns", desc: "A 30, 60, or 90-day editorial campaign engineered to compound your reach week after week.", price: "From $3,400" },
  { icon: TrendingUp, title: "Reader Reach Growth", desc: "Audience growth strategy, newsletter design, and audience research grounded in real data.", price: "From $2,200" },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Draft Zenith" },
      { name: "description", content: "Premium publishing services for serious indie authors: book promotion, Pinterest marketing, spotlights, and visibility campaigns." },
      { property: "og:title", content: "Services — Draft Zenith" },
      { property: "og:description", content: "Premium publishing services for serious indie authors." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-16 container-luxe">
        <div className="max-w-3xl space-y-6">
          <SectionEyebrow>For Authors</SectionEyebrow>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
            The kind of marketing your book actually deserves.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            We don't run ads. We build audiences. Editorial-grade campaigns for indie authors who refuse to be invisible.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-24 grid md:grid-cols-2 gap-px bg-border">
        {SERVICES.map((s, i) => (
          <div key={i} className="bg-background p-10 hover-lift group">
            <s.icon size={28} className="text-primary mb-6" />
            <h2 className="font-serif text-3xl mb-4 group-hover:text-primary transition-colors">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
              <span className="text-sm text-primary tracking-wider">{s.price}</span>
              <Link to="/submit" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider underline-gold">
                Begin <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="container-luxe pb-28">
        <div className="bg-card border border-border p-12 md:p-20 noise-bg relative grid md:grid-cols-2 gap-10 items-center">
          <div className="relative space-y-5">
            <SectionEyebrow>Bespoke</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">A campaign designed entirely around your book.</h2>
            <p className="text-muted-foreground">For debut authors, returning novelists, and small presses ready to invest in the long game. We'll build a private proposal in seven days.</p>
          </div>
          <div className="relative">
            <Link to="/submit" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition">
              Request a proposal <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
