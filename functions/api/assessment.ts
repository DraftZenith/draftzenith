interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  ASSESSMENT_FORM_ENABLED: string;
  ASSESSMENT_PRIVACY_NOTICE_URL: string;
  ASSESSMENT_ALLOWED_ORIGINS?: string;
}

const allowedServices = new Set([
  "Author Brand Essentials",
  "Complete Author Brand",
  "Author Brand & Digital Presence",
  "Book Landing Page",
  "Complete Author Website",
  "Premium Author Digital Platform",
  "Pinterest Foundation",
  "Pinterest Visibility Campaign",
  "Pinterest Growth Campaign",
  "Listopia Starter",
  "Listopia Visibility",
  "Listopia Extended Campaign",
  "Essential Book Discovery",
  "Multi-Platform Visibility",
  "Complete Book Discovery Campaign",
  "Pinterest Management",
  "Multi-Platform Management",
  "Comprehensive Visibility Management",
  "Not sure yet",
]);

const allowedBudgets = new Set([
  "", "Under $500", "$500–$1,000", "$1,001–$2,500",
  "$2,501–$5,000", "Over $5,000", "Not sure yet",
]);

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
    },
  });
}

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  const requestOrigin = request.headers.get("origin");
  if (requestOrigin) {
    try {
      const origin = new URL(requestOrigin).origin;
      const sameOrigin = new URL(request.url).origin;
      const configuredOrigins = (env.ASSESSMENT_ALLOWED_ORIGINS || "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
      const allowedOrigins = new Set([sameOrigin, ...configuredOrigins]);
      if (!allowedOrigins.has(origin)) {
        return json({ ok: false, error: "This request could not be verified. Please refresh the page and try again." }, 403);
      }
    } catch {
      return json({ ok: false, error: "This request could not be verified." }, 403);
    }
  }

  if (env.ASSESSMENT_FORM_ENABLED !== "true" || !env.ASSESSMENT_PRIVACY_NOTICE_URL?.trim()) {
    return json({ ok: false, error: "Assessment requests are temporarily unavailable. Please email DraftZenith@gmail.com." }, 503);
  }
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
    return json({ ok: false, error: "The secure submission service is not configured yet. Please email DraftZenith@gmail.com." }, 503);
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    return json({ ok: false, error: "Please submit the form using the website." }, 415);
  }

  const raw = await request.text();
  if (raw.length > 12_000) return json({ ok: false, error: "Your request is too large. Please shorten the project description." }, 413);

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(raw);
    if (!data || Array.isArray(data) || typeof data !== "object") throw new Error("Invalid body");
  } catch {
    return json({ ok: false, error: "The form details could not be read. Please try again." }, 400);
  }

  // Quietly discard automated submissions caught by the honeypot.
  if (typeof data.company_website === "string" && data.company_website.trim()) return json({ ok: true });

  const fullName = typeof data.full_name === "string" ? data.full_name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const emailConfirm = typeof data.email_confirm === "string" ? data.email_confirm.trim() : "";
  const country = typeof data.country === "string" ? data.country.trim() : "";
  const service = typeof data.service_of_interest === "string" ? data.service_of_interest : "";
  const description = typeof data.project_description === "string" ? data.project_description.trim() : "";
  const goal = typeof data.main_goal === "string" ? data.main_goal.trim() : "";
  const consent = data.consent === true;
  const website = typeof data.author_website === "string" ? data.author_website.trim() : "";
  const bookTitle = typeof data.book_title === "string" ? data.book_title.trim() : "";
  const budget = typeof data.budget_range === "string" ? data.budget_range : "";

  if (!fullName || fullName.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
      emailConfirm.toLowerCase() !== email.toLowerCase() ||
      !country || country.length > 100 || !allowedServices.has(service) ||
      !description || description.length > 3000 || !goal || goal.length > 500 || !consent ||
      (website && (website.length > 2048 || !/^https?:\/\//i.test(website))) ||
      bookTitle.length > 200 || !allowedBudgets.has(budget)) {
    return json({ ok: false, error: "Please check the required fields and try again." }, 400);
  }

  const supabaseUrl = env.SUPABASE_URL.replace(/\/$/, "");
  let endpoint: URL;
  try {
    endpoint = new URL("/rest/v1/assessment_requests", supabaseUrl);
    if (endpoint.protocol !== "https:") throw new Error("HTTPS required");
  } catch {
    return json({ ok: false, error: "The secure submission service is unavailable. Please email DraftZenith@gmail.com." }, 503);
  }

  try {
    const saved = await fetch(endpoint, {
      method: "POST",
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        "content-type": "application/json",
        prefer: "return=minimal",
      },
      body: JSON.stringify({
        full_name: fullName,
        email,
        country,
        author_website: website || null,
        book_title: bookTitle || null,
        service_of_interest: service,
        project_description: description,
        main_goal: goal,
        budget_range: budget || null,
        consent: true,
      }),
    });
    if (!saved.ok) {
      console.error("Assessment request insert failed with status", saved.status);
      return json({ ok: false, error: "We could not save your request. Please try again or email DraftZenith@gmail.com." }, 502);
    }
    return json({ ok: true });
  } catch (error) {
    console.error("Assessment request submission failed", error);
    return json({ ok: false, error: "We could not submit your request. Please try again or email DraftZenith@gmail.com." }, 502);
  }
};
