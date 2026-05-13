import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { CATEGORIES } from "@/data/content";

export const Route = createFileRoute("/submit")({
  head: () => ({
    meta: [
      { title: "Submit Your Book — Draft Zenith" },
      { name: "description", content: "Share your work with our editors. Indie authors welcome — we read every submission personally." },
      { property: "og:title", content: "Submit Your Book — Draft Zenith" },
      { property: "og:description", content: "Submit your book to our editors for spotlight consideration." },
    ],
  }),
  component: SubmitPage,
});

function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="pt-40 pb-16 container-luxe">
        <div className="max-w-3xl space-y-6">
          <SectionEyebrow>Submissions Open</SectionEyebrow>
          <h1 className="font-serif text-5xl md:text-7xl leading-[0.95] text-balance">
            Tell us about your book.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Every submission is read by a real editor — usually within seven days. We respond either way.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          {submitted ? (
            <div className="border border-primary/40 bg-card p-12 text-center space-y-5 noise-bg relative">
              <div className="relative inline-flex"><CheckCircle2 size={56} className="text-primary" /></div>
              <h2 className="font-serif text-3xl">Received with care.</h2>
              <p className="text-muted-foreground max-w-md mx-auto">An editor will be in touch within seven days. Thank you for trusting us with your work.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-8"
            >
              <Field label="Book title" name="title" required />
              <Field label="Author name" name="author" required />
              <Field label="Email" name="email" type="email" required />

              <div className="space-y-3">
                <label htmlFor="submit-genre" className="block text-xs uppercase tracking-[0.3em] text-primary">Genre</label>
                <select id="submit-genre" name="genre" className="w-full bg-transparent border border-border focus:border-primary outline-none px-4 py-3.5 transition">
                  {CATEGORIES.map((c) => <option key={c} className="bg-background">{c}</option>)}
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="submit-synopsis" className="block text-xs uppercase tracking-[0.3em] text-primary">Synopsis</label>
                <textarea id="submit-synopsis" name="synopsis" rows={6} placeholder="Tell us, in your own voice, what this book is about." className="w-full bg-transparent border border-border focus:border-primary outline-none px-4 py-3.5 transition resize-none" />
              </div>

              <Field label="Amazon / Kindle link" name="amazon" placeholder="https://" />

              <div className="space-y-3">
                <label htmlFor="submit-cover" className="block text-xs uppercase tracking-[0.3em] text-primary">Book cover</label>
                <label htmlFor="submit-cover" className="flex flex-col items-center justify-center border border-dashed border-border hover:border-primary cursor-pointer py-12 transition group">
                  <Upload size={28} className="text-muted-foreground group-hover:text-primary transition" />
                  <span className="mt-3 text-sm text-muted-foreground">Click to upload (JPG / PNG, max 5MB)</span>
                  <input id="submit-cover" name="cover" type="file" aria-label="Book cover file" className="hidden" />
                </label>
              </div>

              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary/90 transition">
                Submit your book
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="border border-border p-8 bg-card/40">
            <SectionEyebrow>What happens next</SectionEyebrow>
            <ol className="mt-6 space-y-5 text-sm text-muted-foreground">
              {["A real editor reads your submission.", "We respond within seven days — yes or no.", "Selected titles are featured across the journal, newsletter, and social.", "We help you reach the readers who'll love your work."].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-serif text-2xl text-primary leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-border p-8">
            <SectionEyebrow>Already published?</SectionEyebrow>
            <p className="mt-4 text-muted-foreground">We work with indie, hybrid, and traditionally published authors alike. Send what you've got.</p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false, placeholder = "" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div className="space-y-3">
      <label htmlFor={name} className="block text-xs uppercase tracking-[0.3em] text-primary">{label}{required && <span className="text-primary"> *</span>}</label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className="w-full bg-transparent border border-border focus:border-primary outline-none px-4 py-3.5 transition" />
    </div>
  );
}
