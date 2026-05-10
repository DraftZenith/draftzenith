import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { CATEGORIES } from "@/data/content";

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
            {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 grid place-items-center border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/blog" className="underline-gold">Journal</Link></li>
            <li><Link to="/authors" className="underline-gold">Authors</Link></li>
            <li><Link to="/services" className="underline-gold">Services</Link></li>
            <li><Link to="/submit" className="underline-gold">Submit</Link></li>
            <li><Link to="/about" className="underline-gold">About</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary">Categories</h4>
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
          <h4 className="text-xs uppercase tracking-[0.2em] text-primary">The Letter</h4>
          <p className="text-sm text-muted-foreground">
            Saturday mornings. One essay, three books, zero noise.
          </p>
          <form className="flex border border-border focus-within:border-primary transition">
            <input
              type="email"
              placeholder="you@inbox.com"
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