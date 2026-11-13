import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SERVICE_OPTIONS } from "@/data/services";

const validServiceNames = new Set<string>([...SERVICE_OPTIONS, "Not sure yet"]);
const serviceSchema = z.string().refine((value) => validServiceNames.has(value), "Choose a service from the list.");
const optionalUrlSchema = z.string().trim().max(2048).optional().or(z.literal("")).refine(
  (value) => !value || z.string().url().safeParse(value).success,
  "Enter a complete website URL, including https://.",
);

export const assessmentInputSchema = z.object({
  full_name: z.string().trim().min(1, "Enter your full name.").max(120),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  country: z.string().trim().min(1, "Enter your country.").max(100),
  author_website: optionalUrlSchema,
  book_title: z.string().trim().max(200).optional().or(z.literal("")),
  service_of_interest: serviceSchema,
  project_description: z.string().trim().min(1, "Tell us briefly about your project.").max(3000),
  main_goal: z.string().trim().min(1, "Tell us your main goal.").max(500),
  budget_range: z.enum(["", "Under $500", "$500–$1,000", "$1,001–$2,500", "$2,501–$5,000", "Over $5,000", "Not sure yet"]).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to be contacted about this request." }) }),
  company_website: z.string().max(300).optional(),
});

export type AssessmentInput = z.input<typeof assessmentInputSchema>;
export type AssessmentFormInput = Omit<AssessmentInput, "consent" | "budget_range"> & {
  consent: boolean;
  budget_range: string;
};

export const submitAssessmentRequest = createServerFn({ method: "POST" })
  .validator((input: unknown) => assessmentInputSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.company_website?.trim()) return { ok: true };

    // Enforce the launch gate on the server as well as in the UI. A caller
    // must not be able to bypass the disabled form by invoking the server
    // function directly.
    const assessmentEnabled = process.env.ASSESSMENT_FORM_ENABLED === "true";
    const privacyNoticeUrl = process.env.ASSESSMENT_PRIVACY_NOTICE_URL?.trim();
    if (!assessmentEnabled || !privacyNoticeUrl) {
      throw new Error("Assessment requests are not currently being accepted.");
    }

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
