import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/get-started", label: "Get Started" },
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

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-background/95 border-b border-border/60"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight">
            Draft<span className="text-primary">·</span>Zenith
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-4 text-xs tracking-wide uppercase 2xl:gap-6">
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

        <div className="hidden xl:block">
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm tracking-wide uppercase font-medium hover:bg-primary/90 transition"
          >
            Request a Free Assessment
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-primary-navigation"
          className="xl:hidden p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-primary-navigation" className="xl:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav aria-label="Mobile navigation" className="container-luxe flex flex-col py-6 gap-5 text-sm uppercase tracking-wide">
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
              to="/get-started"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-5 py-3 text-sm tracking-wide uppercase font-medium"
            >
              Request a Free Assessment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
