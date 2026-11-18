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
    <section className="bg-[#203a36] text-[#f7f1e7]">
      <div className="container-luxe pb-16 pt-36 md:pb-20 md:pt-48">
        <div className="max-w-4xl space-y-6">
          <SectionEyebrow tone="light">{eyebrow}</SectionEyebrow>
          <h1 className="font-serif text-4xl leading-[1.05] text-balance sm:text-5xl md:text-7xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-[#dce4dc] md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}

export function AssessmentCta({ title = "Tell us what you want to improve." }: { title?: string }) {
  return (
    <section className="bg-[#243c39] text-[#f7f1e7]">
      <div className="container-luxe flex flex-col items-start justify-between gap-8 py-16 md:flex-row md:items-end md:py-20">
        <div className="max-w-3xl space-y-4">
          <SectionEyebrow tone="light">Start a conversation</SectionEyebrow>
          <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">{title}</h2>
          <p className="max-w-2xl leading-relaxed text-[#dce4dc]">
            Tell us about your book, what is already in place and where you would like help. We will review your request and discuss sensible next steps.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0 bg-[#d9b477] text-[#203a36] hover:bg-[#e8c994]">
          <Link to="/get-started">Request an assessment <ArrowRight /></Link>
        </Button>
      </div>
    </section>
  );
}
