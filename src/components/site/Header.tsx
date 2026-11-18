import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Our Team" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/get-started", label: "Get Started" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#f7f0e2]/95 shadow-sm backdrop-blur-md" : "bg-[#f7f0e2]"}`}>
      <div className="container-luxe flex h-[76px] items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img src="/draft-zenith-seal.svg" alt="Draft Zenith" width="58" height="58" className="h-14 w-14 shrink-0 object-contain" />
          <span className="font-serif text-[1.55rem] leading-none tracking-tight text-[#0b1d32]">Draft Zenith</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-4 text-sm 2xl:gap-6">
          {NAV.map((n) => <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-[#a8752d]" }} className="text-[#24354a] transition-colors hover:text-[#a8752d]">{n.label}</Link>)}
        </nav>
        <div className="hidden xl:block">
          <Link to="/get-started" className="inline-flex items-center gap-2 bg-[#0b1d32] px-5 py-2.5 text-sm font-medium text-[#fff8e9] transition hover:bg-[#183653]">Start a Conversation</Link>
        </div>
        <button ref={menuButtonRef} type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-primary-navigation" className="p-2 text-[#0b1d32] xl:hidden" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div id="mobile-primary-navigation" className="border-t border-[#d9c8a8] bg-[#f7f0e2] xl:hidden">
        <nav aria-label="Mobile navigation" className="container-luxe flex flex-col gap-5 py-6 text-sm">
          {NAV.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeProps={{ className: "text-[#a8752d]" }} className="text-[#24354a]">{n.label}</Link>)}
          <Link to="/get-started" onClick={() => setOpen(false)} className="inline-flex items-center justify-center bg-[#0b1d32] px-5 py-3 text-sm font-medium text-[#fff8e9]">Start a Conversation</Link>
        </nav>
      </div>}
    </header>
  );
}
