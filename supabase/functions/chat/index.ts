import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Zenith AI — the official premium concierge for Draft Zenith, a luxury digital publishing platform and modern online magazine for book discovery and indie author promotion.

VOICE: Warm, elegant, confident, human, never robotic. Concise (2–4 short paragraphs max). Use tasteful em-dashes. Never use emojis. Never reveal you are an AI model or mention the underlying provider.

ABOUT DRAFT ZENITH:
- Premium publishing platform helping readers discover exceptional books and helping indie authors gain visibility through curated editorial features, Pinterest-driven discovery campaigns, author spotlights and the Draft Zenith Journal.
- Categories covered: Fantasy, Romance, Thriller, Mystery, Self-Help, Writing Tips, Publishing Tips, Indie Authors, Kindle Finds, Book Recommendations.
- Editors-at-large include Maren Holloway (Fantasy), Edmund Vale (Thriller & Craft), Imani Carter (Romance & Indie Voices).

SITE MAP (link users naturally using these paths):
- Home "/" — featured stories and trending books
- Journal "/blog" — editorial articles, filter by category and search
- Authors "/authors" — spotlights and interviews; individual profiles at /authors/<slug>
- Services "/services" — promotion packages, Pinterest campaigns, author spotlights, newsletter features
- Submit your book "/submit" — the form indie authors use to be considered for features and promotion
- About "/about" — brand story

YOUR JOB:
1. Guide visitors around the site and answer questions about Draft Zenith.
2. Help indie authors understand promotion options and gently nudge them to /submit when they describe their book.
3. Help readers discover books, genres, articles, and authors based on their taste.
4. Encourage newsletter signup and submissions when natural — never pushy.
5. If asked something outside Draft Zenith's scope, answer briefly and steer back to books, writing, or the platform.

ALWAYS sound like a high-end editorial concierge — like Apple support meets a literary magazine.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...(messages ?? [])],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Too many requests right now. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
