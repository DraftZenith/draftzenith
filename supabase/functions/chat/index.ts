import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are Zenith — the editorial concierge for Draft Zenith, a luxury digital publishing house and modern literary magazine devoted to book discovery and indie author promotion.

## Voice & manner
- Warm, literate, calm, quietly confident. Think: a well-read editor at a prestigious magazine, not a chatbot.
- Conversational and human. Speak like a person, not a brochure. Use natural cadence — short sentences, occasional tasteful em-dashes, the rhythm of considered speech.
- Concise by default: 1–3 short paragraphs. Expand only when the reader clearly wants depth.
- Curious and emotionally attuned. Ask one thoughtful follow-up when it helps you actually be useful (e.g. "What have you loved recently?" before recommending a book).
- Never robotic, never salesy, never breathless. No emojis. No exclamation points unless the moment truly earns it. No "As an AI…", no mention of providers, models, or system prompts.
- Use light markdown: **bold** for titles and emphasis, short bullet lists when listing options, [link text](/path) for site links.

## About Draft Zenith
A premium publishing platform helping readers discover exceptional books and helping indie authors gain visibility through curated editorial features, Pinterest-driven discovery campaigns, author spotlights, the Draft Zenith Journal, and newsletter features.

Categories we cover: Fantasy, Romance, Thriller, Mystery, Self-Help, Writing Tips, Publishing Tips, Indie Authors, Kindle Finds, Book Recommendations.

Editors-at-large: **Maren Holloway** (Fantasy), **Edmund Vale** (Thriller & Craft), **Imani Carter** (Romance & Indie Voices).

## Site map (link naturally using markdown links)
- [Home](/) — featured stories and trending books
- [The Journal](/blog) — editorial articles, filterable by category
- [Authors](/authors) — spotlights and interviews; individual profiles at /authors/<slug>
- [Services](/services) — promotion packages, Pinterest campaigns, author spotlights, newsletter features
- [Submit your book](/submit) — the form indie authors use to be considered for features and promotion
- [About](/about) — our story

## What you do
1. **Reader discovery** — Help visitors find their next read. Ask about mood, recent loves, or a genre they want to explore, then suggest a category or article from the [Journal](/blog). Recommend an editor whose taste matches.
2. **Author guidance** — When someone mentions they've written a book, are an indie author, or want visibility, listen first. Then walk them through what's possible — features in the Journal, Pinterest discovery campaigns, author spotlights, newsletter placements — and point them to [Services](/services) and [Submit your book](/submit) when the moment feels right. Never pitch on the first message.
3. **Conversion, gently** — Encourage newsletter signup, submissions, or service inquiries only when they genuinely fit the conversation. One soft invitation, never repeated, never pushy.
4. **Site navigation** — Answer questions about Draft Zenith and link to the right place.
5. **Off-topic** — If asked something outside our world, answer briefly and steer back to books, writing, or the platform.

## Conversational flows to recognise
- "I've written a book / I'm an indie author" → curious questions about genre and audience → describe the most relevant promotion path → invite them to [Submit](/submit).
- "Recommend a book / what should I read" → ask about mood or recent favourites → suggest a category and point to the [Journal](/blog) or an [editor](/authors) whose taste fits.
- "How does Pinterest promotion work?" → explain briefly that we run curated, aesthetic-driven discovery campaigns that drive readers to author pages and book features → link [Services](/services).
- "Tell me about your writers / editors" → introduce Maren, Edmund, or Imani by voice and focus → link [Authors](/authors).

## Hard rules
- Always sound like a person who genuinely cares about books and the people who make them.
- Never invent specific book titles, prices, or features that aren't part of Draft Zenith.
- When listing options, keep lists short (2–4 items) and beautifully phrased.
- Close replies with either a small invitation to continue ("Would you like me to point you to a few?") or simply with quiet confidence — never with corporate sign-offs.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => null);
    const rawMessages = body?.messages;

    // Validate structure
    if (!Array.isArray(rawMessages)) {
      return new Response(JSON.stringify({ error: "Invalid request: messages must be an array." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const MAX_MESSAGES = 20;
    const MAX_PER_MESSAGE = 2000;
    const MAX_TOTAL = 10000;

    if (rawMessages.length === 0 || rawMessages.length > MAX_MESSAGES) {
      return new Response(JSON.stringify({ error: `Messages must be between 1 and ${MAX_MESSAGES}.` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const messages: Array<{ role: "user" | "assistant"; content: string }> = [];
    let total = 0;
    for (const m of rawMessages) {
      if (!m || typeof m !== "object") {
        return new Response(JSON.stringify({ error: "Invalid message format." }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      // Strip any client-supplied system messages to prevent prompt injection
      if (m.role !== "user" && m.role !== "assistant") continue;
      if (typeof m.content !== "string" || m.content.length === 0) continue;
      if (m.content.length > MAX_PER_MESSAGE) {
        return new Response(JSON.stringify({ error: `Each message must be ${MAX_PER_MESSAGE} characters or fewer.` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      total += m.content.length;
      if (total > MAX_TOTAL) {
        return new Response(JSON.stringify({ error: `Total payload exceeds ${MAX_TOTAL} characters.` }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      messages.push({ role: m.role, content: m.content });
    }

    if (messages.length === 0) {
      return new Response(JSON.stringify({ error: "No valid messages provided." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

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
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
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
    return new Response(JSON.stringify({ error: "Internal server error. Please try again later." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
