import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const assessmentInputSchema = z.object({
  full_name: z.string().trim().min(1, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  country: z.string().trim().min(1, "Enter your country.").max(100),
  author_website: z.string().trim().max(2048).optional().or(z.literal("")),
  book_title: z.string().trim().max(200).optional().or(z.literal("")),
  service_of_interest: z.string().trim().min(1, "Choose a service of interest.").max(150),
  project_description: z.string().trim().min(1, "Tell us briefly about your project.").max(3000),
  main_goal: z.string().trim().min(1, "Tell us your main goal.").max(500),
  budget_range: z.string().trim().max(80).optional().or(z.literal("")),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to be contacted about this request." }) }),
  company_website: z.string().max(300).optional(),
});

export type AssessmentInput = z.infer<typeof assessmentInputSchema>;

export const submitAssessmentRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => assessmentInputSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.company_website?.trim()) return { ok: true };

    try {
      const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
      const { error } = await supabaseAdmin.from("assessment_requests").insert({
        full_name: data.full_name,
        email: data.email,
        country: data.country,
        author_website: data.author_website || null,
        book_title: data.book_title || null,
        service_of_interest: data.service_of_interest,
        project_description: data.project_description,
        main_goal: data.main_goal,
        budget_range: data.budget_range || null,
        consent: data.consent,
      });
      if (error) throw new Error("Assessment request could not be saved.");
      return { ok: true };
    } catch {
      throw new Error("We could not submit your request. Please try again.");
    }
  });