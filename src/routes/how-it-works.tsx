import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { AgencyPageIntro, AssessmentCta } from "@/components/site/AgencyPage";
import { PROCESS_STEPS, PROJECT_TERMS } from "@/data/services";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({ meta: [
    { title: "How It Works | Draft Zenith" },
    { name: "description", content: "Learn how Draft Zenith's assessment, consultation, proposal, and delivery process works." },
    { property: "og:title", content: "How It Works | Draft Zenith" },
    { property: "og:description", content: "A clear process for author branding, digital-presence, and book-discoverability projects." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: HowItWorksPage,
});

const terms = [
  ["Free initial assessment", "Share your current author presence, project, and goals. We review your request as the starting point for a conversation."],
  ["Consultation and goals", "Discuss your needs and priorities so the proposed work addresses the project you have in mind."],
  ["Recommendation and proposal", "The proposal records agreed scope, deliverables, fees, and timing before work begins."],
  ["Project and handover", `One-time projects are paid ${PROJECT_TERMS.oneTimeDepositPercent}% upfront. The remaining ${PROJECT_TERMS.oneTimeBalancePercent}% is due after agreed deliverables and before handover.`],
  ["Monthly services", `Monthly retainers are due ${PROJECT_TERMS.monthlyRetainerDue}.`],
  ["Timing and additional costs", `Timelines begin ${PROJECT_TERMS.timelineStarts}. ${PROJECT_TERMS.separateCosts.join(", ")} are quoted separately where applicable.`],
];

function HowItWorksPage() {
  return <SiteLayout>
    <AgencyPageIntro eyebrow="How it works" title="Clear steps. Agreed scope. No surprises about the terms." description="Start with an assessment, talk through your goals, and review a proposal before deciding how to proceed." />
    <section className="container-luxe pb-20 md:pb-28">
      <ol className="grid border-t border-border md:grid-cols-4">{PROCESS_STEPS.map((step, i) => <li key={step.title} className={`border-b border-border py-7 md:py-9 ${i ? "md:border-l md:pl-7" : "md:pr-7"}`}><span className="font-serif text-3xl text-primary">0{i + 1}</span><h2 className="mt-4 font-serif text-2xl">{step.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p></li>)}</ol>
      <div className="mt-16 grid gap-8 md:grid-cols-12 md:gap-12"><h2 className="font-serif text-3xl md:col-span-4">Working terms</h2><dl className="border-t border-border md:col-span-8">{terms.map(([title, text]) => <div key={title} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[12rem_1fr]"><dt className="font-medium">{title}</dt><dd className="text-sm leading-relaxed text-muted-foreground">{text}</dd></div>)}</dl></div>
    </section>
    <AssessmentCta />
  </SiteLayout>;
}