import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ArrowRight, ArrowUpRight, Clock, BookOpen } from "lucide-react";
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

  const isFiltered = Boolean(activeCat) || Boolean(q);
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const editorial = POSTS.filter((p) => p.slug !== featured.slug).slice(0, 2);
  const restOfFeed = POSTS.filter((p) => p.slug !== featured.slug && !editorial.some((e) => e.slug === p.slug));

  return (
    <SiteLayout>
      {/* Editorial masthead */}
      <section className="pt-40 pb-12 container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 border-b border-border pb-12">
          <div className="max-w-3xl space-y-6">
            <SectionEyebrow>The Journal · Issue No. 27</SectionEyebrow>
            <h1 className="font-serif text-5xl md:text-7xl text-balance leading-[0.95]">
              Essays for readers who think <em className="gold-text-gradient not-italic">about</em> reading.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Long-form criticism, craft notes, and quiet recommendations from working editors. New issues every Tuesday morning.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-8 text-center lg:text-right shrink-0">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Essays</dt>
              <dd className="font-serif text-3xl gold-text-gradient mt-1">{POSTS.length * 24}</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Editors</dt>
              <dd className="font-serif text-3xl gold-text-gradient mt-1">07</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Readers</dt>
              <dd className="font-serif text-3xl gold-text-gradient mt-1">480K</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* COVER STORY — only when not filtered */}
      {!isFiltered && (
        <section className="container-luxe pb-20">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid lg:grid-cols-12 gap-10 items-end"
          >
            <div className="lg:col-span-8 relative overflow-hidden aspect-[16/10]">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
              <div className="absolute top-5 left-5 bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-primary border border-border">
                Cover Story
              </div>
            </div>
            <div className="lg:col-span-4 space-y-5">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                {featured.category} · {featured.readMinutes} min read
              </div>
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] text-balance group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <div className="text-sm text-muted-foreground">By {featured.author} · {featured.date}</div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] border-b border-primary pb-1 text-foreground group-hover:text-primary transition">
                Read the essay <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* EDITORIAL PAIR — only when not filtered */}
      {!isFiltered && editorial.length === 2 && (
        <section className="bg-card border-y border-border py-20">
          <div className="container-luxe">
            <div className="flex items-end justify-between mb-10">
              <SectionEyebrow>Editor's Selection</SectionEyebrow>
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">Hand-picked this week</span>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {editorial.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block hover-lift"
                >
                  <div className="overflow-hidden aspect-[5/4] mb-6 relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-primary border border-border">
                      {p.category}
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight text-balance group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mt-4">
                    <span>{p.author}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span className="inline-flex items-center gap-1"><Clock size={11} /> {p.readMinutes} min</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FILTER BAR */}
      <section className="container-luxe pt-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between border-b border-border pb-8">
          <div className="space-y-2">
            <SectionEyebrow>{isFiltered ? "Filtered" : "The Archive"}</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-4xl">
              {activeCat ? `Essays in ${activeCat}` : "Every dispatch, in order."}
            </h2>
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

        <div className="mt-8 flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
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
        </div>
      </section>

      <section className="container-luxe py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          {filtered.length === 0 && (
            <p className="text-muted-foreground">No essays match that filter — yet.</p>
          )}
          {(isFiltered ? filtered : restOfFeed).map((p) => (
            <Link
              to="/blog/$slug"
              params={{ slug: p.slug }}
              key={p.slug}
              className="group grid md:grid-cols-12 gap-8 border-b border-border pb-12 hover-lift"
            >
              <div className="md:col-span-5 overflow-hidden aspect-[4/3] relative">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-primary border border-border">
                  {p.category}
                </div>
              </div>
              <div className="md:col-span-7 flex flex-col justify-center space-y-4">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary inline-flex items-center gap-2">
                  <Clock size={11} /> {p.readMinutes} min read
                </div>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors">{p.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{p.excerpt}</p>
                <div className="flex items-center justify-between pt-1">
                  <div className="text-sm text-muted-foreground">{p.author} · {p.date}</div>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <aside className="lg:col-span-4 space-y-10 lg:sticky lg:top-28 self-start">
          <div className="border border-border p-8 bg-card/40">
            <SectionEyebrow>The Letter</SectionEyebrow>
            <h3 className="font-serif text-2xl mt-4">Saturday mornings, in your inbox.</h3>
            <p className="text-sm text-muted-foreground mt-3">One essay, three book recommendations, zero noise.</p>
            <form className="mt-5 flex border border-border focus-within:border-primary">
              <input type="email" placeholder="email" aria-label="Email address for newsletter" className="bg-transparent px-3 py-2.5 text-sm flex-1 outline-none" />
              <button type="submit" className="bg-primary text-primary-foreground px-4 text-xs uppercase tracking-wider">Join</button>
            </form>
          </div>
          <div>
            <SectionEyebrow><BookOpen size={11} className="inline mr-1" /> Most Read This Month</SectionEyebrow>
            <ul className="mt-5 space-y-5">
              {POSTS.slice(0, 4).map((p, i) => (
                <li key={p.slug}>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex gap-4 border-b border-border/60 pb-5">
                    <span className="font-serif text-3xl gold-text-gradient leading-none shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <p className="font-serif text-lg leading-snug group-hover:text-primary transition-colors">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{p.category} · {p.readMinutes} min</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border p-8 bg-gradient-to-br from-card to-background">
            <SectionEyebrow>Categories</SectionEyebrow>
            <div className="flex flex-wrap gap-2 mt-5">
              {CATEGORIES.slice(0, 8).map((c) => (
                <Link
                  key={c}
                  to="/blog"
                  search={{ category: c }}
                  className="text-[10px] uppercase tracking-wider px-2.5 py-1.5 border border-border hover:border-primary hover:text-primary transition"
                >
                  {c}
                </Link>
              ))}
            </div>
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
