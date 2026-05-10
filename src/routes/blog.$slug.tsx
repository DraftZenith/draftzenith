import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { POSTS } from "@/data/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Draft Zenith` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
        { property: "og:type", content: "article" },
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
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-luxe py-40 text-center">
        <h1 className="font-serif text-3xl">Something broke.</h1>
        <p className="mt-4 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
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

  return (
    <SiteLayout>
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent">
        <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <article>
        <header className="relative pt-40 pb-16 container-luxe">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition mb-10">
            <ArrowLeft size={14} /> Back to the journal
          </Link>
          <div className="max-w-4xl space-y-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{post.category} · {post.readMinutes} min read</div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">{post.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
              <span>By <Link to="/authors/$slug" params={{ slug: post.authorSlug }} className="text-foreground underline-gold">{post.author}</Link></span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{post.date}</span>
            </div>
          </div>
        </header>

        <div className="container-luxe">
          <div className="overflow-hidden mb-16">
            <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
          </div>
        </div>

        <div className="container-luxe grid lg:grid-cols-12 gap-12 pb-24">
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-32 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Share</p>
              {[Twitter, Facebook, Linkedin, Link2].map((Icon, i) => (
                <a key={i} href="#" aria-label="share" className="block w-9 h-9 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </aside>

          <div className="lg:col-span-7 space-y-7 font-serif text-xl leading-relaxed text-foreground/90">
            {post.body.map((para, i) => (
              <p key={i} className={i === 0 ? "first-letter:font-serif first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-primary" : ""}>{para}</p>
            ))}
            <hr className="border-border my-10" />
            <p className="text-base font-sans text-muted-foreground italic">
              Draft Zenith publishes one essay every Tuesday. <Link to="/blog" className="underline-gold text-foreground">Read the archive</Link> or <Link to="/submit" className="underline-gold text-foreground">submit your work</Link>.
            </p>
          </div>

          <aside className="lg:col-span-3 space-y-10">
            <div className="border border-border p-6 bg-card/40">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">About the author</p>
              <p className="font-serif text-xl">{post.author}</p>
              <Link to="/authors/$slug" params={{ slug: post.authorSlug }} className="inline-block mt-3 text-sm underline-gold">View profile</Link>
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
                    <div className="overflow-hidden aspect-[4/5] mb-5">
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{p.category}</div>
                    <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">{p.title}</h3>
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
