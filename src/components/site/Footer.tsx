import { Link } from "@tanstack/react-router";
import { Instagram, Mail } from "lucide-react";
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
    <footer className="relative mt-32 border-t border-border bg-card">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="font-serif text-3xl">
            Draft<span className="text-primary">·</span>Zenith
          </Link>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            A modern publishing company for the next generation of readers and authors. Premium discovery, editorial care, and quiet excellence.
          </p>
          <div className="flex gap-3">
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
                className="w-10 h-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/blog" className="underline-gold">Journal</Link></li>
            <li><Link to="/authors" className="underline-gold">Authors</Link></li>
            <li><Link to="/services" className="underline-gold">Services</Link></li>
            <li><Link to="/submit" className="underline-gold">Submit</Link></li>
            <li><Link to="/about" className="underline-gold">About</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-primary">Categories</h3>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
            {CATEGORIES.slice(0, 8).map((c) => (
              <li key={c}>
                <Link to="/blog" search={{ category: c }} className="underline-gold">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h3 className="text-xs uppercase tracking-[0.2em] text-primary">The Letter</h3>
          <p className="text-sm text-muted-foreground">
            Saturday mornings. One essay, three books, zero noise.
          </p>
          <form className="flex border border-border focus-within:border-primary transition">
            <input
              type="email"
              placeholder="you@inbox.com"
              aria-label="Email address for newsletter"
              className="bg-transparent px-3 py-2.5 text-sm flex-1 outline-none"
            />
            <button type="submit" className="bg-primary text-primary-foreground px-4 text-xs uppercase tracking-wider">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Draft Zenith Publishing. All rights reserved.</p>
          <p className="font-serif italic">Where stories rise.</p>
        </div>
      </div>
    </footer>
  );
}