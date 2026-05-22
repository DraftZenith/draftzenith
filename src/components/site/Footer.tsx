import { Link } from "@tanstack/react-router";
import { Instagram, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { CATEGORIES } from "@/data/content";

function PinterestIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.09 2.46 7.61 5.97 9.16-.08-.78-.16-1.97.03-2.82.18-.77 1.17-4.91 1.17-4.91s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24.99.5 1.8 1.48 1.8 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.33 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.28c-.08.31-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15 0 0-.5 1.92-.63 2.39-.23.86-.83 1.94-1.24 2.6.93.29 1.92.44 2.94.44 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-card overflow-hidden">
      {/* atmospheric gold wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 50% at 85% 0%, oklch(0.78 0.12 80 / 0.10), transparent 60%), radial-gradient(45% 40% at 10% 100%, oklch(0.78 0.12 80 / 0.06), transparent 70%)",
        }}
      />
      <div aria-hidden className="gold-line absolute top-0 inset-x-0 opacity-60" />

      {/* Editorial masthead */}
      <div className="relative container-luxe pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-b border-border/60 pb-12">
          <div className="max-w-xl space-y-5">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-primary">
              <span className="w-8 h-px bg-primary" />
              The Publishing House
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
              Where stories rise <span className="italic text-primary/90">— quietly, and on purpose.</span>
            </h2>
          </div>
          <Link
            to="/submit"
            className="group inline-flex items-center gap-3 self-start md:self-end border border-primary/70 text-primary px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-primary-foreground transition-colors duration-500"
          >
            Submit your manuscript
            <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main columns */}
      <div className="relative container-luxe pb-16 grid gap-14 md:gap-10 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="font-serif text-3xl inline-block">
            Draft<span className="text-primary">·</span>Zenith
          </Link>
          <p className="text-muted-foreground max-w-sm leading-[1.75] text-[15px]">
            A modern publishing company for the next generation of readers and authors. Premium discovery, editorial care, and quiet excellence — issued from our studio to your nightstand.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/80">
            <MapPin size={12} className="text-primary/70" />
            <span className="tracking-wide">Studio · Lisbon &amp; New York</span>
          </div>
          <div className="flex gap-3 pt-2">
            {[
              {
                Icon: Instagram,
                label: "Instagram",
                href: "https://www.instagram.com/draft.zenith/",
                external: true,
              },
              {
                Icon: PinterestIcon,
                label: "Pinterest",
                href: "https://www.pinterest.com/Draftzenith/",
                external: true,
              },
              {
                Icon: Mail,
                label: "Join the Letter",
                href: "/#newsletter",
                external: false,
              },
            ].map(({ Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={
                  external ? `Draft Zenith on ${label}` : "Join the Draft Zenith newsletter"
                }
                className="w-10 h-10 grid place-items-center border border-border/80 text-muted-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all duration-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-10">
          <FooterColumn
            eyebrow="01"
            title="The House"
            links={[
              { label: "Journal", to: "/blog" },
              { label: "Authors", to: "/authors" },
              { label: "Services", to: "/services" },
              { label: "About", to: "/about" },
              { label: "Submit", to: "/submit" },
            ]}
          />
          <FooterColumn
            eyebrow="02"
            title="For Readers"
            links={[
              { label: "Cover Stories", to: "/blog" },
              { label: "Kindle Finds", to: "/blog", search: { category: "Kindle Finds" } },
              { label: "Book Recommendations", to: "/blog", search: { category: "Book Recommendations" } },
              { label: "Authors in Residence", to: "/authors" },
              { label: "The Letter", to: "/#newsletter", external: true },
            ]}
          />
          <FooterColumn
            eyebrow="03"
            title="For Authors"
            links={[
              { label: "Editorial Services", to: "/services" },
              { label: "Submit a Manuscript", to: "/submit" },
              { label: "Writing Tips", to: "/blog", search: { category: "Writing Tips" } },
              { label: "Publishing Tips", to: "/blog", search: { category: "Publishing Tips" } },
              { label: "Indie Authors", to: "/blog", search: { category: "Indie Authors" } },
            ]}
          />
        </div>

        {/* Newsletter */}
        <div className="md:col-span-3 space-y-5 md:pl-6 md:border-l md:border-border/60">
          <div className="space-y-2">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Issue 24 · Saturdays</div>
            <h3 className="font-serif text-2xl leading-tight">The Letter</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            One essay, three books, zero noise — delivered with the morning light.
          </p>
          <form className="group flex border border-border/80 focus-within:border-primary transition-colors duration-500">
            <input
              type="email"
              placeholder="you@inbox.com"
              aria-label="Email address for newsletter"
              className="bg-transparent px-3.5 py-3 text-sm flex-1 outline-none placeholder:text-muted-foreground/60"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-5 text-[11px] uppercase tracking-[0.25em] hover:bg-primary/90 transition"
            >
              Join
            </button>
          </form>
          <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
            By subscribing you agree to our editorial terms. Unsubscribe in one click.
          </p>
        </div>
      </div>

      {/* Genres rail */}
      <div className="relative container-luxe pb-14">
        <div className="border-t border-border/60 pt-10 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/80">Featured Genres</div>
          </div>
          <div className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                to="/blog"
                search={{ category: c }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {c}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="relative container-luxe pb-10 select-none">
        <div className="font-serif italic leading-none text-foreground/[0.04] tracking-tighter text-[18vw] md:text-[14vw]">
          Draft·Zenith
        </div>
      </div>

      {/* Legal bar */}
      <div className="relative border-t border-border/60">
        <div className="container-luxe py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/80">
          <p>© {new Date().getFullYear()} Draft Zenith Publishing · All rights reserved</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Editorial Code</a>
            <span className="font-serif italic normal-case tracking-normal text-muted-foreground/70">Where stories rise.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  to: string;
  search?: Record<string, string>;
  external?: boolean;
};

function FooterColumn({
  eyebrow,
  title,
  links,
}: {
  eyebrow: string;
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <div className="text-[10px] uppercase tracking-[0.3em] text-primary/70 font-serif italic">
          {eyebrow}
        </div>
        <h3 className="text-xs uppercase tracking-[0.25em] text-foreground/90">
          {title}
        </h3>
      </div>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) =>
          l.external ? (
            <li key={l.label}>
              <a
                href={l.to}
                className="text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {l.label}
              </a>
            </li>
          ) : (
            <li key={l.label}>
              <Link
                to={l.to}
                search={l.search as never}
                className="text-muted-foreground hover:text-primary transition-colors duration-500"
              >
                {l.label}
              </Link>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}