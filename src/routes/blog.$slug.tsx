import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Facebook, Link2, Mail, Bookmark, Clock, ArrowUpRight } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { POSTS, AUTHORS } from "@/data/content";

const PinterestIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.087-.79-.166-2.003.035-2.866.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.547 2.14-.83 3.33-.236.995.499 1.807 1.481 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.846 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281.082.099.094.186.069.287-.075.312-.243.985-.276 1.123-.043.179-.142.218-.327.131-1.22-.568-1.984-2.352-1.984-3.786 0-3.082 2.239-5.913 6.456-5.913 3.39 0 6.024 2.415 6.024 5.643 0 3.367-2.124 6.078-5.072 6.078-.99 0-1.923-.515-2.241-1.122l-.609 2.323c-.221.85-.816 1.913-1.215 2.561.916.283 1.886.436 2.892.436 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
  </svg>
);

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    const fullTitle = `${p.title} — Draft Zenith`;
    const title = fullTitle.length > 60 ? p.title.slice(0, 57).trimEnd() + "…" : fullTitle;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            image: p.image,
            datePublished: p.date,
            author: { "@type": "Person", name: p.author },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-luxe py-40 text-center">
        <h1 className="font-serif text-5xl">Article not found</h1>
        <Link to="/blog" className="inline-block mt-6 underline-gold">Back to the journal</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => {
    console.error("blog route error:", error);
    return (
    <SiteLayout>
      <div className="container-luxe py-40 text-center">
        <h1 className="font-serif text-3xl">Something broke.</h1>
        <p className="mt-4 text-muted-foreground">We couldn't load this article. Please try again or head back to the journal.</p>
      </div>
    </SiteLayout>
    );
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const related = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const author = AUTHORS.find((a) => a.slug === post.authorSlug);
  const pullQuoteIndex = Math.min(1, post.body.length - 1);
  const pullQuote = post.body[pullQuoteIndex]?.split(". ")[0] + ".";

  return (
    <SiteLayout>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <article>
        {/* Cinematic hero */}
        <header className="relative min-h-[85vh] flex items-end overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="container-luxe relative z-10 pb-16 pt-40">
            <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition mb-10">
              <ArrowLeft size={14} /> Back to the journal
            </Link>
            <div className="max-w-4xl space-y-6 animate-fade-up">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary inline-flex items-center gap-3">
                <span>{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-primary" />
                <span className="inline-flex items-center gap-1.5"><Clock size={11} /> {post.readMinutes} min read</span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">{post.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-serif italic">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                {author && (
                  <img src={author.image} alt={author.name} className="w-10 h-10 rounded-full object-cover border border-border" loading="lazy" />
                )}
                <div>
                  <div className="text-foreground">By <Link to="/authors/$slug" params={{ slug: post.authorSlug }} className="underline-gold">{post.author}</Link></div>
                  <div className="text-xs text-muted-foreground">{post.date}</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container-luxe grid lg:grid-cols-12 gap-12 pb-24 pt-20">
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Share</p>
                <div className="space-y-3">
                  <a href="#" aria-label="Share on Pinterest" className="block w-9 h-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                    <PinterestIcon />
                  </a>
                  <a href="#" aria-label="Share on Facebook" className="block w-9 h-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                    <Facebook size={14} />
                  </a>
                  <a href="#" aria-label="Share by email" className="block w-9 h-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                    <Mail size={14} />
                  </a>
                  <a href="#" aria-label="Copy link" className="block w-9 h-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                    <Link2 size={14} />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Save</p>
                <button aria-label="Bookmark" className="block w-9 h-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                  <Bookmark size={14} />
                </button>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7 space-y-7 font-serif text-xl leading-[1.75] text-foreground/90">
            {post.body.map((para: string, i: number) => (
              <div key={i}>
                <p className={i === 0 ? "first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-primary" : ""}>
                  {para}
                </p>
                {i === pullQuoteIndex && pullQuote && post.body.length > 2 && (
                  <blockquote className="my-12 border-l-2 border-primary pl-8 py-2">
                    <p className="font-serif text-3xl md:text-4xl leading-tight italic text-foreground text-balance">
                      "{pullQuote}"
                    </p>
                    <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-primary not-italic font-sans">
                      — {post.author}
                    </footer>
                  </blockquote>
                )}
              </div>
            ))}

            {/* Newsletter inline CTA */}
            <div className="not-prose my-16 border border-border bg-card/40 p-8 md:p-10 font-sans">
              <SectionEyebrow>The Letter</SectionEyebrow>
              <h3 className="font-serif text-2xl md:text-3xl mt-3">If you finished this, you'll love what comes next Saturday.</h3>
              <p className="text-sm text-muted-foreground mt-3 max-w-md">One essay, three book recommendations, zero noise.</p>
              <form className="mt-5 flex border border-border focus-within:border-primary max-w-md">
                <input type="email" placeholder="your@email.com" aria-label="Email" className="bg-transparent px-3 py-2.5 text-sm flex-1 outline-none" />
                <button type="submit" className="bg-primary text-primary-foreground px-5 text-xs uppercase tracking-wider">Subscribe</button>
              </form>
            </div>

            <hr className="border-border my-10" />
            <p className="text-base font-sans text-muted-foreground italic">
              Draft Zenith publishes one essay every Tuesday. <Link to="/blog" className="underline-gold text-foreground">Read the archive</Link> or <Link to="/submit" className="underline-gold text-foreground">submit your work</Link>.
            </p>
          </div>

          <aside className="lg:col-span-3 space-y-10">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="border border-border p-6 bg-card/40">
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">About the author</p>
                {author && (
                  <div className="flex items-start gap-4">
                    <img src={author.image} alt={author.name} loading="lazy" className="w-16 h-16 rounded-full object-cover border border-border shrink-0" />
                    <div className="min-w-0">
                      <p className="font-serif text-xl leading-tight">{author.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{author.role}</p>
                    </div>
                  </div>
                )}
                {author?.bio && (
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-4">{author.bio}</p>
                )}
                <Link to="/authors/$slug" params={{ slug: post.authorSlug }} className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-wider underline-gold">
                  View profile <ArrowUpRight size={12} />
                </Link>
              </div>

              <div className="border border-border p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">More from the journal</p>
                <ul className="space-y-4">
                  {POSTS.filter((p) => p.slug !== post.slug).slice(0, 3).map((p) => (
                    <li key={p.slug}>
                      <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block">
                        <p className="font-serif text-base leading-snug group-hover:text-primary transition-colors text-balance">{p.title}</p>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1.5">{p.category} · {p.readMinutes} min</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="bg-card border-t border-border py-24">
            <div className="container-luxe">
              <SectionEyebrow>Keep reading</SectionEyebrow>
              <h2 className="font-serif text-4xl mt-3 mb-12">Related essays</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {related.map((p) => (
                  <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group block hover-lift">
                    <div className="overflow-hidden aspect-[4/5] mb-5 relative">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-2.5 py-1 text-[10px] uppercase tracking-[0.25em] text-primary border border-border">
                        {p.category}
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl leading-tight text-balance group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2">{p.author} · {p.readMinutes} min</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </SiteLayout>
  );
}
