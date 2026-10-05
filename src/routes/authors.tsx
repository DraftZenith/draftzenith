import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { AUTHORS } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "Authors | Draft Zenith" },
      { name: "description", content: "Meet the writers, editors, and indie voices shaping the next chapter of publishing." },
      { property: "og:title", content: "Authors | Draft Zenith" },
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
            The editors and writers behind Draft Zenith, and the genres they read for.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-28">
        <ol className="border-t border-border">
          {AUTHORS.map((a, i) => (
            <li key={a.slug} className="border-b border-border">
              <Link
                to="/authors/$slug"
                params={{ slug: a.slug }}
                className="group grid grid-cols-[3rem_1fr] md:grid-cols-12 gap-x-4 md:gap-x-10 gap-y-4 py-12 md:py-16"
              >
                <span className="font-serif text-2xl text-primary tabular-nums md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="md:col-span-5 space-y-3">
                  <h2 className="font-serif text-4xl md:text-5xl leading-tight group-hover:text-primary transition-colors">{a.name}</h2>
                  <p className="text-sm text-muted-foreground">{a.role}</p>
                  {a.books.length > 0 && (
                    <p className="text-sm text-foreground/80">Books: {a.books.map((b) => b.title).join(", ")}</p>
                  )}
                </div>
                <div className="col-start-2 md:col-start-auto md:col-span-6 space-y-5">
                  <p className="text-muted-foreground text-lg leading-relaxed">{a.bio}</p>
                  <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider underline-gold">
                    Read profile <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </SiteLayout>
  );
}
