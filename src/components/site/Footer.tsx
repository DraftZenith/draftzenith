import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

const serviceLinks = [
  ["Author Branding", "/services/author-branding-and-digital-presence"],
  ["Pinterest Marketing", "/services/pinterest-marketing-and-book-visibility"],
  ["Book Trailers", "/services/book-trailers-and-visual-promotion"],
  ["Book Discovery", "/services/book-discovery-and-audience-development"],
  ["Media & Recognition", "/services/media-and-professional-recognition"],
  ["Visibility Management", "/services/ongoing-author-visibility-management"],
] as const;

export function Footer() {
  return <footer className="border-t border-[#4a4c45] bg-[#20221f] text-[#f5f2eb]">
    <div className="container-luxe grid gap-12 py-14 md:grid-cols-12 md:py-20">
      <div className="space-y-5 md:col-span-4">
        <Link to="/" className="inline-flex items-center gap-3">
          <img src="/draft-zenith-logo.jpg" alt="Draft Zenith" width="54" height="54" className="h-12 w-12 object-contain" />
          <span className="font-serif text-2xl tracking-tight">Draft Zenith</span>
        </Link>
        <p className="max-w-sm text-sm leading-[1.85] text-[#c7c5bc]">Author services and creative visibility support for authors and artists. We bring branding, digital presentation, audience discovery and professional outreach together around your goals.</p>
        <Link to="/get-started" className="inline-flex items-center gap-2 border border-[#96784f] px-4 py-3 text-sm text-[#f5f2eb] transition hover:bg-[#96784f]">Request an assessment <ArrowUpRight size={15}/></Link>
      </div>
      <div className="md:col-span-3">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a77b]">Explore</h2>
        <ul className="mt-5 space-y-3 text-sm text-[#c7c5bc]">
          {[[ "Home", "/" ],[ "About", "/about" ],[ "Services", "/services" ],[ "Portfolio", "/portfolio" ],[ "How It Works", "/how-it-works" ],[ "Contact", "/get-started" ]].map(([label,href])=><li key={href}><Link to={href} className="transition hover:text-[#c5a77b]">{label}</Link></li>)}
        </ul>
      </div>
      <div className="md:col-span-3">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a77b]">Our services</h2>
        <ul className="mt-5 space-y-3 text-sm text-[#c7c5bc]">
          {serviceLinks.map(([label,href])=><li key={href}><Link to={href} className="transition hover:text-[#c5a77b]">{label}</Link></li>)}
        </ul>
      </div>
      <div className="space-y-4 md:col-span-2">
        <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#c5a77b]">Contact</h2>
        <p className="text-sm leading-[1.8] text-[#c7c5bc]">Tell us about your book, author brand or creative project.</p>
        <Link to="/get-started" className="inline-flex items-center gap-2 text-sm text-[#f5f2eb] transition hover:text-[#c5a77b]">Contact Draft Zenith <ArrowUpRight size={14}/></Link>
        <a href="https://www.pinterest.com/Draftzenith/" target="_blank" rel="noopener noreferrer" className="block text-sm text-[#c7c5bc] transition hover:text-[#c5a77b]">Pinterest</a>
        <a href="mailto:DraftZenith@gmail.com" className="inline-flex items-center gap-2 text-sm text-[#c7c5bc] transition hover:text-[#c5a77b]"><Mail size={15}/> DraftZenith@gmail.com</a>
      </div>
    </div>
    <div className="border-t border-[#4a4c45]">
      <div className="container-luxe flex flex-col gap-3 py-5 text-xs text-[#aead a4] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Draft Zenith. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5"><Link to="/privacy" className="transition hover:text-[#c5a77b]">Privacy Notice</Link><span>Author services · Book visibility · Creative presence</span></div>
      </div>
    </div>
  </footer>;
}
