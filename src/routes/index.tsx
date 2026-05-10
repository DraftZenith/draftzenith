import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Star } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { POSTS, AUTHORS, TRENDING_BOOKS, TESTIMONIALS } from "@/data/content";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Draft Zenith — Where Stories Rise" },
      { name: "description", content: "Premium book discovery, indie author spotlights, and modern publishing essays for readers who care about craft." },
      { property: "og:title", content: "Draft Zenith — Where Stories Rise" },
      { property: "og:description", content: "Premium book discovery, indie author spotlights, and modern publishing essays." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const recent = POSTS.filter((p) => p.slug !== featured.slug).slice(0, 4);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src={hero}
          alt="An open book lit by a brass lamp"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="container-luxe relative z-10 pb-24 pt-40 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8 space-y-8 animate-fade-up">
            <SectionEyebrow>Issue No. 27 · A Modern Publishing Company</SectionEyebrow>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
              Where the next great <em className="gold-text-gradient not-italic">storytellers</em> are read first.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Draft Zenith is an editorial home for indie authors, ambitious readers, and the quiet revolution rebuilding publishing from the inside out.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/blog" className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition">
                Explore Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/submit" className="inline-flex items-center gap-3 border border-border hover:border-primary px-6 py-3.5 text-sm uppercase tracking-wider font-medium transition">
                Submit Your Book
              </Link>
              <Link to="/authors" className="inline-flex items-center gap-3 px-2 py-3.5 text-sm uppercase tracking-wider font-medium text-foreground/80 hover:text-primary transition underline-gold">
                Discover Authors
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:flex flex-col items-end gap-4 text-right">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Featured this week</div>
            <div className="font-serif text-2xl leading-tight max-w-xs">
              "{featured.title}"
            </div>
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary underline-gold">
              Read the essay <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE-LIKE BAR */}
      <div className="border-y border-border bg-card/40">
        <div className="container-luxe py-5 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span>As read by editors at</span>
          <span className="font-serif text-foreground/70 normal-case tracking-tight text-base">Penumbra Press</span>
          <span className="font-serif text-foreground/70 normal-case tracking-tight text-base">North Atlantic Books</span>
          <span className="font-serif text-foreground/70 normal-case tracking-tight text-base">The Atelier Review</span>
          <span className="font-serif text-foreground/70 normal-case tracking-tight text-base">Lantern House</span>
          <span className="font-serif text-foreground/70 normal-case tracking-tight text-base">Quill & Quire</span>
        </div>
      </div>

      {/* FEATURED ESSAY */}
      <section className="container-luxe py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 relative group overflow-hidden">
            <img src={featured.image} alt={featured.title} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" />
          </div>
          <div className="md:col-span-5 space-y-6">
            <SectionEyebrow>The Cover Story</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">{featured.title}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{featured.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{featured.author}</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{featured.readMinutes} min read</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{featured.category}</span>
            </div>
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-3 border-b border-primary pb-1 text-sm uppercase tracking-wider hover:text-primary transition">
              Continue reading <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT POSTS GRID */}
      <section className="container-luxe pb-28">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <SectionEyebrow>From the Journal</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl">Latest dispatches</h2>
          </div>
          <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-wider text-foreground/80 hover:text-primary underline-gold">
            All articles <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recent.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group block hover-lift"
            >
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{p.category}</div>
              <h3 className="font-serif text-2xl leading-tight mb-3 text-balance group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              <div className="text-xs text-muted-foreground mt-4">{p.author} · {p.readMinutes} min</div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING BOOKS */}
      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-3">
              <SectionEyebrow>Trending Now</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl">Books our editors are passing around</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRENDING_BOOKS.map((b, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-4 relative">
                  <img src={b.image} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute top-3 left-3 bg-background/80 backdrop-blur px-2 py-1 text-[10px] uppercase tracking-wider text-primary">
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="font-serif text-xl leading-tight">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.author}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mt-2">{b.genre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED AUTHORS */}
      <section className="container-luxe py-28">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <SectionEyebrow>The Voices</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl">Authors in residence</h2>
          </div>
          <Link to="/authors" className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-wider underline-gold">
            All authors <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {AUTHORS.map((a) => (
            <Link
              to="/authors/$slug"
              params={{ slug: a.slug }}
              key={a.slug}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden mb-5">
                <img src={a.image} alt={a.name} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">{a.role.split(" · ")[0]}</div>
              <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.bio}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PINTEREST GRID */}
      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe">
          <div className="space-y-3 mb-12 max-w-2xl">
            <SectionEyebrow>Visual Diary</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl">A library, in pictures</h2>
            <p className="text-muted-foreground">A curated mood board from our editors and photographers — saved, reblogged, and pinned by readers around the world.</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {POSTS.concat(POSTS).map((p, i) => (
              <div key={i} className="mb-4 break-inside-avoid overflow-hidden group">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/5" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-luxe py-28">
        <div className="space-y-3 mb-12">
          <SectionEyebrow>The Word</SectionEyebrow>
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">From booksellers, editors, and authors we admire</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="border border-border p-8 bg-card/40 hover-lift">
              <div className="flex gap-1 text-primary mb-5">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <blockquote className="font-serif text-xl leading-snug text-balance">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-luxe pb-28">
        <div className="relative overflow-hidden bg-card border border-border p-10 md:p-20 noise-bg">
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <SectionEyebrow>The Letter</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">A weekly love letter to readers and writers.</h2>
              <p className="text-muted-foreground">One essay, three book recommendations, zero noise. Saturday mornings, in your inbox.</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground pt-2">
                <BookOpen size={16} className="text-primary" /> Joined by 24,000+ readers
              </div>
            </div>
            <form className="space-y-3">
              <div className="flex border border-border bg-background focus-within:border-primary transition">
                <input
                  type="email"
                  placeholder="your.address@email.com"
                  className="bg-transparent px-5 py-4 flex-1 outline-none"
                />
                <button className="bg-primary text-primary-foreground px-6 text-sm uppercase tracking-wider">Subscribe</button>
              </div>
              <p className="text-xs text-muted-foreground">Unsubscribe in one click. We never share your address.</p>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
