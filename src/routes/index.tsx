import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, BookOpen, Star, TrendingUp, Award, Users, Sparkles, Quote, Feather, Library, Bookmark, Globe } from "lucide-react";
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

const STATS = [
  { value: "1,200+", label: "Books Featured", sub: "Across ten genres", icon: BookOpen },
  { value: "480K", label: "Readers Reached", sub: "In 64 countries", icon: Globe },
  { value: "320+", label: "Authors Spotlighted", sub: "Indie & emerging voices", icon: Feather },
  { value: "24K", label: "Subscribers", sub: "Saturday morning readers", icon: Users },
];

const POPULAR_GENRES = ["Fantasy", "Romance", "Thriller", "Mystery", "Self-Help", "Writing Tips"] as const;

const SUCCESS_STORIES = [
  {
    name: "Theodore Reyes",
    book: "Northwater",
    quote: "After our spotlight, Northwater hit #3 in literary fiction on Kindle. Draft Zenith readers don't just click — they finish the book and tell their friends.",
    metric: "12,400 copies sold in 30 days",
  },
  {
    name: "Hana Okafor",
    book: "The Salt House",
    quote: "I'd been writing for nine years before Draft Zenith found me. The week of the feature changed the trajectory of my career — and my mortgage.",
    metric: "4 publishing offers received",
  },
  {
    name: "Clara Bishop",
    book: "Penumbra Press",
    quote: "We've worked with every major literary site. None send the kind of attentive, paying readers Draft Zenith does. It's not even close.",
    metric: "3.2× ROI on co-published titles",
  },
];

function Index() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const recent = POSTS.filter((p) => p.slug !== featured.slug).slice(0, 4);
  const trendingWeek = POSTS.slice(0, 5);
  const editorPicks = POSTS.slice(1, 4);

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

      {/* AUTHORITY / STATS */}
      <section className="container-luxe py-24">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7 space-y-4">
            <SectionEyebrow>Trusted by modern indie authors</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">
              A quietly powerful platform for the books that deserve to be read.
            </h2>
          </div>
          <p className="md:col-span-5 text-muted-foreground leading-relaxed">
            Three years in, Draft Zenith has become the editorial layer between extraordinary indie work and the readers who care enough to finish it. The numbers tell part of the story.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {STATS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-background p-8 md:p-10 group hover:bg-card transition-colors duration-500">
                <Icon size={20} className="text-primary mb-6 transition-transform duration-500 group-hover:-translate-y-1" />
                <div className="font-serif text-4xl md:text-5xl gold-text-gradient mb-3">{s.value}</div>
                <div className="text-sm uppercase tracking-[0.2em] text-foreground/90">{s.label}</div>
                <div className="text-xs text-muted-foreground mt-2">{s.sub}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED ESSAY (Cover Story) */}
      <section className="container-luxe pb-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 relative group overflow-hidden">
            <img src={featured.image} alt={featured.title} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute top-5 left-5 bg-background/80 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-primary border border-border">
              Cover Story
            </div>
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

      {/* TRENDING THIS WEEK — editorial ranked list */}
      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8 space-y-3">
              <SectionEyebrow><TrendingUp size={12} className="mr-1 inline" /> Trending This Week</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl">The essays our readers can't stop sending</h2>
            </div>
            <Link to="/blog" className="md:col-span-4 md:text-right inline-flex md:justify-end items-center gap-2 text-sm uppercase tracking-wider underline-gold">
              See the full ranking <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Lead trending */}
            <Link
              to="/blog/$slug"
              params={{ slug: trendingWeek[0].slug }}
              className="lg:col-span-7 group block hover-lift"
            >
              <div className="relative overflow-hidden mb-6 aspect-[5/4]">
                <img src={trendingWeek[0].image} alt={trendingWeek[0].title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute top-5 left-5 bg-primary text-primary-foreground px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] font-medium">
                  No. 01 This Week
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{trendingWeek[0].category}</div>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors mb-3">{trendingWeek[0].title}</h3>
              <p className="text-muted-foreground line-clamp-2">{trendingWeek[0].excerpt}</p>
            </Link>
            {/* Ranked list */}
            <ol className="lg:col-span-5 space-y-px bg-border border border-border">
              {trendingWeek.slice(1).map((p, i) => (
                <li key={p.slug} className="bg-card hover:bg-background transition-colors duration-500">
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex gap-5 p-5 items-start">
                    <div className="font-serif text-3xl gold-text-gradient w-10 shrink-0">{String(i + 2).padStart(2, "0")}</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1.5">{p.category}</div>
                      <div className="font-serif text-lg md:text-xl leading-snug group-hover:text-primary transition-colors text-balance">{p.title}</div>
                      <div className="text-xs text-muted-foreground mt-2">{p.author} · {p.readMinutes} min</div>
                    </div>
                    <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LATEST DISPATCHES */}
      <section className="container-luxe py-28">
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

      {/* POPULAR GENRES */}
      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-7 space-y-3">
              <SectionEyebrow>Browse by Craft</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl">Popular genres our editors are reading</h2>
            </div>
            <p className="md:col-span-5 text-muted-foreground">Each genre is curated by a working editor who actually reads in it. No algorithms, no sponsored slots.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
            {POPULAR_GENRES.map((g, i) => {
              const sample = POSTS.find((p) => p.category === g) ?? POSTS[i % POSTS.length];
              return (
                <Link
                  key={g}
                  to="/blog"
                  search={{ category: g }}
                  className="group relative block bg-background overflow-hidden aspect-[4/5]"
                >
                  <img src={sample.image} alt={g} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 opacity-80">Genre</div>
                    <div className="font-serif text-2xl leading-tight group-hover:text-primary transition-colors">{g}</div>
                    <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                      Explore <ArrowUpRight size={12} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRENDING BOOKS */}
      <section className="container-luxe py-28">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-3">
            <SectionEyebrow><Bookmark size={12} className="mr-1 inline" /> On Our Nightstand</SectionEyebrow>
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
      </section>

      {/* EDITOR'S PICKS / CURATED COLLECTIONS */}
      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8 space-y-3">
              <SectionEyebrow><Award size={12} className="mr-1 inline" /> Editor's Picks</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl">Three quiet collections, hand-curated this season</h2>
            </div>
            <p className="md:col-span-4 text-muted-foreground">Six titles each, gathered around a single thread. Updated quarterly by our editors-at-large.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: "Winter Reading", title: "Books to read by lamp light", count: "6 titles · 1,840 pages", img: editorPicks[0].image, slug: editorPicks[0].slug },
              { tag: "Debut Voices", title: "First novels worth your weekend", count: "6 titles · 1,612 pages", img: editorPicks[1].image, slug: editorPicks[1].slug },
              { tag: "Modern Romance", title: "Love stories with grown-up stakes", count: "6 titles · 1,944 pages", img: editorPicks[2].image, slug: editorPicks[2].slug },
            ].map((c) => (
              <Link
                key={c.title}
                to="/blog/$slug"
                params={{ slug: c.slug }}
                className="group block hover-lift bg-background border border-border overflow-hidden"
              >
                <div className="aspect-[5/4] overflow-hidden relative">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-2.5 py-1 text-[10px] uppercase tracking-[0.25em]">
                    {c.tag}
                  </div>
                </div>
                <div className="p-7 space-y-3">
                  <h3 className="font-serif text-2xl leading-tight text-balance group-hover:text-primary transition-colors">{c.title}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.count}</p>
                  <div className="flex items-center gap-2 text-sm text-foreground/90 underline-gold pt-1">
                    Open the collection <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
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

      {/* SUCCESS STORIES */}
      <section className="bg-card border-y border-border py-28 relative overflow-hidden noise-bg">
        <div className="container-luxe relative">
          <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
            <div className="md:col-span-8 space-y-3">
              <SectionEyebrow><Sparkles size={12} className="mr-1 inline" /> Author Success Stories</SectionEyebrow>
              <h2 className="font-serif text-4xl md:text-5xl text-balance">When the right readers find a book, careers change.</h2>
            </div>
            <p className="md:col-span-4 text-muted-foreground">Three indie authors, three months after their Draft Zenith spotlight.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SUCCESS_STORIES.map((s) => (
              <figure key={s.name} className="bg-background border border-border p-8 hover-lift relative">
                <Quote size={28} className="text-primary mb-5 opacity-80" />
                <blockquote className="font-serif text-lg leading-snug text-balance">"{s.quote}"</blockquote>
                <figcaption className="mt-7 pt-6 border-t border-border space-y-1">
                  <div className="font-medium">{s.name}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Author of {s.book}</div>
                  <div className="text-xs text-primary mt-3">{s.metric}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PINTEREST GRID */}
      <section className="container-luxe py-28">
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
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-card border-y border-border py-28">
        <div className="container-luxe">
          <div className="space-y-3 mb-12">
            <SectionEyebrow>The Word</SectionEyebrow>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl">From booksellers, editors, and authors we admire</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="border border-border p-8 bg-background hover-lift">
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
        </div>
      </section>

      {/* DUAL CTA BANNER */}
      <section className="container-luxe py-28">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          <div className="bg-background p-10 md:p-14 group hover:bg-card transition-colors duration-500 flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <Feather size={22} className="text-primary" />
              <SectionEyebrow>For Authors</SectionEyebrow>
              <h3 className="font-serif text-3xl md:text-4xl text-balance leading-tight">Get your book in front of readers who finish what they start.</h3>
              <p className="text-muted-foreground">Our editors review every submission personally. If your book is right for our audience, we'll tell you within ten days.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/submit" className="group/btn inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition">
                Submit your book <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-3 px-2 py-3.5 text-sm uppercase tracking-wider underline-gold">
                Get featured
              </Link>
            </div>
          </div>
          <div className="bg-background p-10 md:p-14 group hover:bg-card transition-colors duration-500 flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <Library size={22} className="text-primary" />
              <SectionEyebrow>For Readers</SectionEyebrow>
              <h3 className="font-serif text-3xl md:text-4xl text-balance leading-tight">Join a community that takes books — and readers — seriously.</h3>
              <p className="text-muted-foreground">Editor-curated reading lists, member-only essays, and quiet conversations with the authors you love.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/authors" className="group/btn inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition">
                Discover authors <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition" />
              </Link>
              <Link to="/blog" className="inline-flex items-center gap-3 px-2 py-3.5 text-sm uppercase tracking-wider underline-gold">
                Explore articles
              </Link>
            </div>
          </div>
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
