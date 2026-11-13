import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

function PinterestIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.09 2.46 7.61 5.97 9.16-.08-.78-.16-1.97.03-2.82.18-.77 1.17-4.91 1.17-4.91s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24.99.5 1.8 1.48 1.8 1.78 0 3.14-1.87 3.14-4.57 0-2.39-1.72-4.06-4.17-4.06-2.84 0-4.51 2.13-4.51 4.33 0 .86.33 1.78.74 2.28a.3.3 0 0 1 .07.28c-.08.31-.25 1-.28 1.14-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.97-.53-2.29-1.15 0 0-.5 1.92-.63 2.39-.23.86-.83 1.94-1.24 2.6.93.29 1.92.44 2.94.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" /></svg>;
}

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
        <div className="flex flex-col items-start gap-3">
          <a href="https://www.pinterest.com/Draftzenith/" target="_blank" rel="noopener noreferrer" aria-label="Draft Zenith on Pinterest" className="grid size-10 place-items-center border border-background/25 text-background/80 transition hover:border-primary hover:text-primary"><PinterestIcon /></a>
          <a href="mailto:DraftZenith@gmail.com" className="inline-flex items-center gap-2 text-sm text-background/80 transition hover:text-primary">
            <Mail size={16} aria-hidden="true" /> DraftZenith@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div className="border-t border-background/15">
      <div className="container-luxe flex flex-col gap-2 py-5 text-xs text-background/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Draft Zenith. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link to="/privacy" className="transition hover:text-primary">Privacy Notice</Link>
          <p>Author Branding · Digital Presence · Book Discoverability</p>
        </div>
      </div>
    </div>
  </footer>;
}

function FooterColumn({ title, links }: { title: string; links: [string, "/about" | "/services" | "/portfolio" | "/how-it-works" | "/get-started"][] }) {
  return <div className="space-y-4"><h2 className="text-xs uppercase text-primary">{title}</h2><ul className="space-y-3 text-sm text-background/70">{links.map(([label, href]) => <li key={href}><Link to={href} className="transition hover:text-primary">{label}</Link></li>)}</ul></div>;
}