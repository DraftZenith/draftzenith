import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Globe, Instagram, Twitter } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AUTHORS, POSTS } from "@/data/content";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = AUTHORS.find((a) => a.slug === params.slug);
    if (!author) throw notFound();
    return { author };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.author;
    if (!a) return {};
    const desc = a.bio.length > 155 ? a.bio.slice(0, 152).trimEnd() + "…" : a.bio;
    return {
      meta: [
        { title: `${a.name} — Draft Zenith` },
        { name: "description", content: desc },
        { property: "og:title", content: a.name },
        { property: "og:description", content: desc },
        { property: "og:image", content: a.image },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: a.name,
            jobTitle: a.role,
            description: desc,
            image: a.image,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: a.interview.map((qa: { q: string; a: string }) => ({
              "@type": "Question",
              name: qa.q,
              acceptedAnswer: { "@type": "Answer", text: qa.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-luxe py-40 text-center">
        <h1 className="font-serif text-5xl">Author not found</h1>
        <Link to="/authors" className="inline-block mt-6 underline-gold">All authors</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout><div className="container-luxe py-40 text-center"><p>{error.message}</p></div></SiteLayout>
  ),
  component: AuthorPage,
});

function AuthorPage() {
  const { author } = Route.useLoaderData();
  const articles = POSTS.filter((p) => p.authorSlug === author.slug);

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 container-luxe">
        <Link to="/authors" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary mb-10">
          <ArrowLeft size={14} /> All authors
        </Link>
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5 overflow-hidden">
            <img src={author.image} alt={author.name} className="w-full aspect-[4/5] object-cover" />
          </div>
          <div className="md:col-span-7 space-y-6">
            <SectionEyebrow>{author.role}</SectionEyebrow>
            <h1 className="font-serif text-5xl md:text-7xl leading-[0.95]">{author.name}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">{author.bio}</p>
            <div className="flex gap-3 pt-2">
              {author.social.twitter && <a href={author.social.twitter} aria-label={`${author.name} on Twitter`} className="w-10 h-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition"><Twitter size={14} /></a>}
              {author.social.instagram && <a href={author.social.instagram} aria-label={`${author.name} on Instagram`} className="w-10 h-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition"><Instagram size={14} /></a>}
              {author.social.website && <a href={author.social.website} aria-label={`${author.name} website`} className="w-10 h-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition"><Globe size={14} /></a>}
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 grid md:grid-cols-2 gap-16">
        <div>
          <SectionEyebrow>Featured Books</SectionEyebrow>
          <ul className="mt-8 space-y-6">
            {author.books.map((b: { title: string; year: string }, i: number) => (
              <li key={i} className="flex items-baseline justify-between border-b border-border pb-4">
                <span className="font-serif text-2xl">{b.title}</span>
                <span className="text-sm text-muted-foreground">{b.year}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionEyebrow>The Interview</SectionEyebrow>
          <div className="mt-8 space-y-8">
            {author.interview.map((qa: { q: string; a: string }, i: number) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Q.</p>
                <p className="font-serif text-xl mb-4">{qa.q}</p>
                <p className="text-muted-foreground leading-relaxed">{qa.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {articles.length > 0 && (
        <section className="bg-card border-t border-border py-24">
          <div className="container-luxe">
            <SectionEyebrow>Related Articles</SectionEyebrow>
            <h2 className="font-serif text-4xl mt-3 mb-12">By {author.name}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((p) => (
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
    </SiteLayout>
  );
}
