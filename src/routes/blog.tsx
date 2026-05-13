import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { z } from "zod";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { POSTS, CATEGORIES } from "@/data/content";

const searchSchema = z.object({
  category: z.string().optional(),
  q: z.string().optional(),
});

export const Route = createFileRoute("/blog")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "The Journal — Draft Zenith" },
      { name: "description", content: "Essays, reviews, and craft notes on books, authors, writing, and modern publishing." },
      { property: "og:title", content: "The Journal — Draft Zenith" },
      { property: "og:description", content: "Essays, reviews, and craft notes for readers and writers." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const search = Route.useSearch();
  const [q, setQ] = useState(search.q ?? "");
  const activeCat = search.category;

  const filtered = POSTS.filter((p) => {
    const matchCat = !activeCat || p.category === activeCat;
    const text = (p.title + p.excerpt + p.author).toLowerCase();
    const matchQ = !q || text.includes(q.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 container-luxe">
        <div className="max-w-3xl space-y-6">
          <SectionEyebrow>The Journal</SectionEyebrow>
          <h1 className="font-serif text-5xl md:text-7xl text-balance leading-[0.95]">
            Essays for readers who think <em className="gold-text-gradient not-italic">about</em> reading.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Long-form criticism, craft notes, and quiet recommendations. New issues every Tuesday.
          </p>
        </div>

        <div className="mt-14 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            <Link
              to="/blog"
              search={{}}
              className={`px-4 py-2 text-xs uppercase tracking-wider border transition ${
                !activeCat ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                to="/blog"
                search={{ category: c }}
                className={`px-4 py-2 text-xs uppercase tracking-wider border transition ${
                  activeCat === c ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </Link>
            ))}
          </div>
          <div className="flex items-center border border-border focus-within:border-primary px-3 max-w-sm">
            <Search size={16} className="text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles…"
              aria-label="Search articles"
              className="bg-transparent px-3 py-2.5 flex-1 outline-none text-sm"
            />
          </div>
        </div>
      </section>

      <section className="container-luxe pb-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {filtered.length === 0 && (
            <p className="text-muted-foreground">No essays match that filter — yet.</p>
          )}
          {filtered.map((p) => (
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              key={p.slug}
              className="group grid md:grid-cols-12 gap-6 border-b border-border pb-12 hover-lift"
            >
              <div className="md:col-span-5 overflow-hidden aspect-[4/3]">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="md:col-span-7 flex flex-col justify-center space-y-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.category} · {p.readMinutes} min read</div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="text-sm text-muted-foreground">{p.author} · {p.date}</div>
              </div>
            </Link>
          ))}
        </div>

        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-28 self-start">
          <div className="border border-border p-8 bg-card/40">
            <SectionEyebrow>The Letter</SectionEyebrow>
            <h3 className="font-serif text-2xl mt-4">Saturday mornings, in your inbox.</h3>
            <form className="mt-5 flex border border-border focus-within:border-primary">
              <input type="email" placeholder="email" aria-label="Email address for newsletter" className="bg-transparent px-3 py-2.5 text-sm flex-1 outline-none" />
              <button type="submit" className="bg-primary text-primary-foreground px-4 text-xs uppercase tracking-wider">Join</button>
            </form>
          </div>
          <div>
            <SectionEyebrow>Most read</SectionEyebrow>
            <ul className="mt-5 space-y-5">
              {POSTS.slice(0, 4).map((p, i) => (
                <li key={p.slug}>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex gap-4">
                    <span className="font-serif text-3xl text-primary/60 leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{p.category} · {p.readMinutes} min</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-8">
            <SectionEyebrow>Submit</SectionEyebrow>
            <h3 className="font-serif text-2xl mt-4">Are you the next voice we should read?</h3>
            <Link to="/submit" className="inline-flex items-center gap-2 mt-5 text-sm uppercase tracking-wider underline-gold">
              Submit your book <ArrowRight size={14} />
            </Link>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}
