import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SiteLayout, SectionEyebrow } from "@/components/site/Layout";
import { SERVICE_OPTIONS } from "@/data/services";
import { assessmentInputSchema, submitAssessmentRequest, type AssessmentFormInput } from "@/lib/assessment.functions";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/get-started")({
  validateSearch: searchSchema,
  head: () => ({ meta: [
    { title: "Request a Free Assessment | Draft Zenith" },
    { name: "description", content: "Tell Draft Zenith about your author brand, digital presence, and book-discoverability goals." },
    { property: "og:title", content: "Request a Free Assessment | Draft Zenith" },
    { property: "og:description", content: "Share your project and goals to begin a free initial assessment." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: GetStartedPage,
});

const initialService = (value: string | undefined) => SERVICE_OPTIONS.includes(value as (typeof SERVICE_OPTIONS)[number]) ? value ?? "" : "";

function GetStartedPage() {
  const search = Route.useSearch();
  const sendRequest = useServerFn(submitAssessmentRequest);
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setBusy(true);
    const form = new FormData(event.currentTarget);
    const input: AssessmentFormInput = {
      full_name: String(form.get("full_name") ?? ""),
      email: String(form.get("email") ?? ""),
      country: String(form.get("country") ?? ""),
      author_website: String(form.get("author_website") ?? ""),
      book_title: String(form.get("book_title") ?? ""),
      service_of_interest: String(form.get("service_of_interest") ?? ""),
      project_description: String(form.get("project_description") ?? ""),
      main_goal: String(form.get("main_goal") ?? ""),
      budget_range: String(form.get("budget_range") ?? ""),
      consent: form.get("consent") === "on",
      company_website: String(form.get("company_website") ?? ""),
    };

    const parsed = assessmentInputSchema.safeParse(input);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Check the information and try again.");
      setBusy(false);
      return;
    }

    try {
      const result = await sendRequest({ data: parsed.data });
      if (result.ok) {
        setSuccess(true);
      } else {
        setError("We could not confirm that your request was saved. Please try again.");
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "We could not submit your request. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return <SiteLayout>
    <section className="container-luxe grid gap-12 pb-20 pt-36 md:grid-cols-12 md:gap-16 md:pb-28 md:pt-44">
      <div className="space-y-6 md:col-span-5 md:sticky md:top-32 md:self-start">
        <SectionEyebrow>Get started</SectionEyebrow>
        <h1 className="font-serif text-4xl leading-[1.05] text-balance md:text-6xl">Request a Free Assessment.</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">Tell us where you are now and what you would like to strengthen. This is an initial conversation, not a commitment to proceed.</p>
        <p className="border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">Your details are submitted so we can review your request and contact you about it. This form does not send an email confirmation.</p>
      </div>
      <div className="md:col-span-7">
        {success ? <div role="status" className="border border-primary/50 bg-card p-8 sm:p-12">
          <CheckCircle2 className="text-primary" size={36} aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl">Your request has been received.</h2>
          <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">Thank you for sharing your project. Your information has been recorded for review. This confirmation does not mean an email has been sent.</p>
        </div> : <form onSubmit={handleSubmit} className="space-y-7" noValidate>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field name="full_name" label="Full name" required maxLength={120} autoComplete="name" />
            <Field name="email" label="Email address" type="email" required maxLength={254} autoComplete="email" />
            <Field name="country" label="Country" required maxLength={100} autoComplete="country-name" />
            <Field name="author_website" label="Author website (optional)" type="url" maxLength={2048} placeholder="https://" />
            <Field name="book_title" label="Book title (optional)" maxLength={200} />
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="service_of_interest" className="text-sm font-medium">Service of interest <span className="text-destructive">*</span></label>
              <select id="service_of_interest" name="service_of_interest" required defaultValue={initialService(search.service)} className="min-h-12 w-full border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="" disabled>Select a service</option>
                {SERVICE_OPTIONS.map((name) => <option key={name} value={name}>{name}</option>)}
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
            <TextField name="project_description" label="Brief project description" required maxLength={3000} rows={4} placeholder="What would you like us to know about the project?" />
            <TextField name="main_goal" label="Main goal" required maxLength={500} rows={3} placeholder="What would you most like to improve?" />
            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="budget_range" className="text-sm font-medium">Budget range (optional)</label>
              <select id="budget_range" name="budget_range" defaultValue="" className="min-h-12 w-full border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Prefer not to say</option>
                <option value="Under $500">Under $500</option><option value="$500–$1,000">$500–$1,000</option><option value="$1,001–$2,500">$1,001–$2,500</option><option value="$2,501–$5,000">$2,501–$5,000</option><option value="Over $5,000">Over $5,000</option><option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>

          <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"><label htmlFor="company_website">Company website</label><input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" /></div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"><input type="checkbox" name="consent" required className="mt-1 size-4 shrink-0 accent-primary" /><span>I agree that Draft Zenith may contact me about this assessment request. <span className="text-destructive">*</span></span></label>
          {error && <p role="alert" className="border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">{error}</p>}
          <Button type="submit" size="lg" disabled={busy} className="min-h-12 w-full sm:w-auto">
            {busy && <LoaderCircle size={16} className="animate-spin" aria-hidden="true" />}{busy ? "Sending request…" : "Submit Assessment Request"}
          </Button>
        </form>}
      </div>
    </section>
  </SiteLayout>;
}

function Field({ name, label, type = "text", required = false, maxLength, autoComplete, placeholder }: { name: string; label: string; type?: string; required?: boolean; maxLength: number; autoComplete?: string; placeholder?: string }) {
  return <div className="space-y-2"><label htmlFor={name} className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label><input id={name} name={name} type={type} required={required} maxLength={maxLength} autoComplete={autoComplete} placeholder={placeholder} className="min-h-12 w-full border border-input bg-background px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring" /></div>;
}

function TextField({ name, label, required = false, maxLength, rows, placeholder }: { name: string; label: string; required?: boolean; maxLength: number; rows: number; placeholder?: string }) {
  return <div className="space-y-2 sm:col-span-2"><label htmlFor={name} className="text-sm font-medium">{label}{required && <span className="text-destructive"> *</span>}</label><textarea id={name} name={name} required={required} maxLength={maxLength} rows={rows} placeholder={placeholder} className="w-full resize-y border border-input bg-background px-3 py-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring" /></div>;
}
