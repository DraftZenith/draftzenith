import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AUTHORS } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "Authors — Draft Zenith" },
      { name: "description", content: "Meet the writers, editors, and indie voices shaping the next chapter of publishing." },
      { property: "og:title", content: "Authors — Draft Zenith" },
      { property: "og:description", content: "The writers and editors at the heart of Draft Zenith." },
    ],
  }),
  component: AuthorsPage,
});

function AuthorsPage() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20 container-luxe">
        <div className="max-w-3xl space-y-6">
          <SectionEyebrow>The Voices</SectionEyebrow>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
            Writers we'd hand-deliver to a friend.
          </h1>
          <p className="text-lg text-muted-foreground">
            A growing collective of indie authors, editors, and craftspeople. Each one selected, championed, and quietly amplified by Draft Zenith.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-28 space-y-24">
        {AUTHORS.map((a, i) => (
          <Link
            to="/authors/$slug"
            params={{ slug: a.slug }}
            key={a.slug}
            className={`grid md:grid-cols-12 gap-10 items-center group ${i % 2 === 1 ? "md:[&>div:first-child]:order-last" : ""}`}
          >
            <div className="md:col-span-5 overflow-hidden">
              <img src={a.image} alt={a.name} loading="lazy" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
            </div>
            <div className="md:col-span-7 space-y-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{a.role}</div>
              <h2 className="font-serif text-4xl md:text-6xl leading-tight group-hover:text-primary transition-colors">{a.name}</h2>
              <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">{a.bio}</p>
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider underline-gold">
                Read profile <ArrowUpRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </SiteLayout>
  );
}
