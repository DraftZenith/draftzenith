import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Mail } from "lucide-react";

export function Footer() {
  return <footer className="mt-20 border-t border-border bg-foreground text-background">
    <div className="container-luxe grid gap-12 py-14 md:grid-cols-12 md:py-20">
      <div className="space-y-5 md:col-span-5">
        <Link to="/" className="font-serif text-3xl">Draft<span className="text-primary">·</span>Zenith</Link>
        <p className="max-w-md leading-relaxed text-background/70">Author branding, digital presence, and book discoverability for authors building a stronger presence around their work.</p>
        <Link to="/get-started" className="inline-flex items-center gap-2 border border-primary px-4 py-3 text-sm text-background transition hover:bg-primary hover:text-primary-foreground">Request a Free Assessment <ArrowUpRight size={15} /></Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-4">
        <FooterColumn title="Explore" links={[["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"]]} />
        <FooterColumn title="Work with us" links={[["How It Works", "/how-it-works"], ["Get Started", "/get-started"]]} />
      </div>
      <div className="space-y-4 md:col-span-3">
        <h2 className="text-xs uppercase text-primary">Connect</h2>
        <p className="text-sm leading-relaxed text-background/70">Questions about your author brand, digital presence, or book discoverability?</p>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/draft.zenith/" target="_blank" rel="noopener noreferrer" aria-label="Draft Zenith on Instagram" className="grid size-10 place-items-center border border-background/25 text-background/80 transition hover:border-primary hover:text-primary"><Instagram size={17} /></a>
          <a href="https://www.pinterest.com/Draftzenith/" target="_blank" rel="noopener noreferrer" aria-label="Draft Zenith on Pinterest" className="grid size-10 place-items-center border border-background/25 font-serif text-xl text-background/80 transition hover:border-primary hover:text-primary">P</a>
          <Link to="/get-started" aria-label="Contact Draft Zenith" className="grid size-10 place-items-center border border-background/25 text-background/80 transition hover:border-primary hover:text-primary"><Mail size={17} /></Link>
        </div>
      </div>
    </div>
    <div className="border-t border-background/15">
      <div className="container-luxe flex flex-col gap-2 py-5 text-xs text-background/55 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Draft Zenith. All rights reserved.</p>
        <p>Author Branding · Digital Presence · Book Discoverability</p>
      </div>
    </div>
  </footer>;
}

function FooterColumn({ title, links }: { title: string; links: [string, "/about" | "/services" | "/portfolio" | "/how-it-works" | "/get-started"][] }) {
  return <div className="space-y-4"><h2 className="text-xs uppercase text-primary">{title}</h2><ul className="space-y-3 text-sm text-background/70">{links.map(([label, href]) => <li key={href}><Link to={href} className="transition hover:text-primary">{label}</Link></li>)}</ul></div>;
}