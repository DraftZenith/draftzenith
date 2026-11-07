import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionEyebrow } from "@/components/site/Layout";

export function AgencyPageIntro({ eyebrow, title, description }: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="container-luxe pb-14 pt-36 md:pb-20 md:pt-44">
      <div className="max-w-4xl space-y-6">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="font-serif text-4xl leading-[1.05] text-balance sm:text-5xl md:text-7xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function AssessmentCta({ title = "Ready to build a stronger author presence?" }: { title?: string }) {
  return (
    <section className="border-t border-border bg-foreground text-background">
      <div className="container-luxe flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-24">
        <div className="max-w-3xl space-y-4">
          <SectionEyebrow>Start with an assessment</SectionEyebrow>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">{title}</h2>
          <p className="max-w-2xl leading-relaxed text-background/75">
            Tell us where you are now and what you want to strengthen. We’ll review your request and discuss possible next steps.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
          <Link to="/get-started">Request a Free Assessment <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}