import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Journal" },
  { to: "/authors", label: "Authors" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight">
            Draft<span className="text-primary">·</span>Zenith
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide uppercase">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="underline-gold text-foreground/80 hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm tracking-wide uppercase font-medium hover:bg-primary/90 transition"
          >
            Submit Your Book
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav className="container-luxe flex flex-col py-6 gap-5 text-sm uppercase tracking-wide">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/submit"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 text-sm tracking-wide uppercase font-medium"
            >
              Submit Your Book
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}