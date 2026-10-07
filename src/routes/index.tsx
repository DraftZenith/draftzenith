import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { POSTS, TRENDING_BOOKS } from "@/data/content";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Draft Zenith | Where Stories Rise" },
      { name: "description", content: "Draft Zenith helps books find the readers they were written for, through research-led discovery and genuine reader engagement." },
      { property: "og:title", content: "Draft Zenith | Where Stories Rise" },
      { property: "og:description", content: "Research-led reader discovery and engagement for authors and their books." },
    ],
  }),
  component: Index,
});



function Index() {
  const featured = POSTS.find((p) => p.featured) ?? POSTS[0];
  const others = POSTS.filter((p) => p.slug !== featured.slug);
  const journalLead = others[0];
  const journalRest = others.slice(1, 3);

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
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="container-luxe relative z-10 pb-20 md:pb-24 pt-36 md:pt-40 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8 space-y-7 animate-fade-up">
            <SectionEyebrow>Draft Zenith · Reader Discovery</SectionEyebrow>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance max-w-3xl">
              Where the right readers discover the right <em className="text-primary">books</em>.
            </h1>
            <p className="text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              Draft Zenith connects books with the readers most likely to care about them, through research-led discovery, reader engagement, and thoughtful editorial storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link to="/blog" className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition">
                Explore Draft Zenith <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
              </Link>
              <Link to="/services" className="inline-flex items-center justify-center gap-3 border border-foreground/30 hover:border-primary hover:text-primary px-6 py-3.5 text-sm uppercase tracking-wider font-medium transition">
                For Authors
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="ml-auto max-w-xs border-l border-primary/40 pl-5 space-y-3">
              <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Featured in the Journal</div>
              <Link to="/blog/$slug" params={{ slug: featured.slug }} className="block font-serif text-xl leading-snug text-foreground/90 hover:text-primary transition">
                {featured.title}
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* PRINCIPLES */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-5 space-y-6">
            <SectionEyebrow>Our Principles</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.1] text-balance">
              Reader discovery starts with research.
            </h2>
            <p className="text-foreground/80 leading-relaxed max-w-md">
              Every book has a particular audience. Draft Zenith researches the themes, communities, conversations, and interests surrounding a book before creating paths for readers to discover and engage with it.
            </p>
          </div>
          <ol className="md:col-span-6 md:col-start-7 border-t border-border">
            {[
              ["Research first", "Reader acquisition begins with understanding where relevant readers already gather."],
              ["Real engagement", "Create opportunities for genuine discovery, discussion, and reader response rather than simply placing promotional links."],
              ["Lasting connection", "Give interested readers a way to stay connected with a book and discover an author's future work."],
            ].map(([title, text], i) => (
              <li key={title} className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 py-8 border-b border-border">
                <span className="font-serif text-2xl sm:text-3xl text-primary tabular-nums leading-none">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground">{title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>


      {/* HOW DRAFT ZENITH WORKS */}
      <section className="bg-card border-y border-border">
        <div className="container-luxe py-24 md:py-32">
          <div className="max-w-2xl space-y-5 mb-16">
            <SectionEyebrow>How Draft Zenith Works</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance">
              Three stages, built around the reader.
            </h2>
          </div>
          <ol className="grid md:grid-cols-3 border-t border-border">
            {[
              ["Find the right readers", "Research where relevant readers are already discussing the themes, subjects and interests connected to a book."],
              ["Start genuine conversations", "Introduce the book in relevant reader spaces and create opportunities for discussion and discovery rather than generic promotion."],
              ["Build lasting reader interest", "Turn genuine reader interest into meaningful feedback, recommendations and an audience the author can continue to reach."],
            ].map(([title, text], i) => (
              <li key={title} className={`pt-8 pb-10 md:pr-10 ${i > 0 ? "border-t md:border-t-0 md:border-l border-border md:pl-10" : ""}`}>
                <span className="font-serif text-sm text-primary tabular-nums">Stage {String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug mt-4">{title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EDITORIAL FEATURE */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-7 overflow-hidden">
            <img src={featured.image} alt={featured.title} loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </div>
          <div className="md:col-span-5 space-y-6 md:pb-4">
            <SectionEyebrow>The Feature</SectionEyebrow>
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.08] text-balance">{featured.title}</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{featured.excerpt}</p>
            <p className="text-sm text-muted-foreground">By {featured.author} · {featured.readMinutes} min read · {featured.category}</p>
            <Link to="/blog/$slug" params={{ slug: featured.slug }} className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition underline-gold">
              Read the feature <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* THE JOURNAL */}
      <section className="border-t border-border">
        <div className="container-luxe py-24 md:py-28">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <SectionEyebrow>The Journal</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl">Recent writing</h2>
            </div>
            <Link to="/blog" className="hidden sm:inline-flex items-center gap-2 text-sm underline-gold">
              All articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid md:grid-cols-12 gap-10 md:gap-14">
            {journalLead && (
              <Link to="/blog/$slug" params={{ slug: journalLead.slug }} className="group md:col-span-7 block">
                <div className="overflow-hidden mb-6">
                  <img src={journalLead.image} alt={journalLead.title} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                </div>
                <p className="text-xs text-primary mb-3">{journalLead.category}</p>
                <h3 className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-primary transition-colors">{journalLead.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">{journalLead.excerpt}</p>
              </Link>
            )}
            <div className="md:col-span-5 border-t border-border md:border-t-0">
              {journalRest.map((p) => (
                <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block py-8 border-b border-border first:md:pt-0">
                  <p className="text-xs text-primary mb-3">{p.category}</p>
                  <h3 className="font-serif text-xl md:text-2xl leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{p.author} · {p.readMinutes} min read</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED BOOKS */}
      <section className="bg-card border-y border-border">
        <div className="container-luxe py-24 md:py-28">
          <div className="grid md:grid-cols-12 gap-10 mb-14">
            <div className="md:col-span-5 space-y-3">
              <SectionEyebrow>Selected Books</SectionEyebrow>
              <h2 className="font-serif text-3xl md:text-4xl">On our desk</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {TRENDING_BOOKS.map((b) => (
              <div key={b.title}>
                <div className="aspect-[3/4] overflow-hidden mb-4">
                  <img src={b.image} alt={`${b.title} cover`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-lg leading-tight">{b.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{b.author} · {b.genre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR AUTHORS */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-7 space-y-7">
            <SectionEyebrow>For Authors</SectionEyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] text-balance">
              Bring your book to the readers who are already looking for it.
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-xl">
              We help authors identify the reader communities where their book belongs, create genuine engagement around it, and build reader interest that lasts beyond launch week.
            </p>
            <Link to="/services" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition">
              Work with Draft Zenith <ArrowRight size={16} />
            </Link>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-14">
            <p className="font-serif italic text-muted-foreground mb-4">What working together looks like</p>
            <ul className="border-t border-border divide-y divide-border text-foreground/90">
              <li className="py-4">Research into where your book's readers gather</li>
              <li className="py-4">Introductions in relevant reader spaces</li>
              <li className="py-4">Feedback and conversation from real readers</li>
              <li className="py-4">An audience you can reach again</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL AUTHOR CTA */}
      <section className="border-t border-border">
        <div className="container-luxe py-24 md:py-32 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] text-balance">
            Your book already has readers. Let's find them.
          </h2>
          <p className="mt-6 text-foreground/80 leading-relaxed max-w-xl mx-auto">
            Tell us about your book and who you wrote it for. We'll reply personally with how we would approach it.
          </p>
          <Link to="/submit" className="mt-10 inline-flex items-center gap-3 border border-foreground/30 hover:border-primary hover:text-primary px-7 py-4 text-sm uppercase tracking-wider font-medium transition">
            Talk to Draft Zenith <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="bg-card border-t border-border scroll-mt-24">
        <div className="container-luxe py-16 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-6 space-y-3">
            <SectionEyebrow>The Letter</SectionEyebrow>
            <h2 className="font-serif text-2xl md:text-3xl text-balance">A Saturday letter on books worth finding.</h2>
            <p className="text-muted-foreground">One essay and a few recommendations on reading, discovery and publishing.</p>
          </div>
          <form className="md:col-span-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex border-b border-foreground/30 focus-within:border-primary transition">
              <input type="email" aria-label="Email address" placeholder="Your email address" className="bg-transparent py-4 flex-1 min-w-0 outline-none" />
              <button className="text-sm uppercase tracking-wider text-primary pl-4">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

