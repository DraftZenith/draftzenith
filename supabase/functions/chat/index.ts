import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

function getCorsHeaders(request: Request): Record<string, string> | null {
  const origin = request.headers.get("Origin");
  const allowedOrigins = (Deno.env.get("CHAT_ALLOWED_ORIGINS") ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!origin || !allowedOrigins.includes(origin)) return null;

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Max-Age": "600",
    "Vary": "Origin",
  };
}

const SYSTEM_PROMPT = `You are Zenith, Draft Zenith's author-services guide. Draft Zenith is an author branding, digital presence, and book discoverability agency. It is not a publisher, literary magazine, editorial publication, or author-spotlight platform.

## Voice & manner
- Warm, literate, calm. Think: a well-read editor at a good magazine, not a chatbot.
- Conversational and human. Speak like a person, not a brochure. Short sentences, plain specific language.
- House style: NEVER use the em dash character. Use periods, commas, colons, or parentheses instead. Avoid stock phrases like "quietly", "where X meets Y", "not X, but Y".
- Concise by default: 1–3 short paragraphs. Expand only when the reader clearly wants depth.
- Curious and emotionally attuned. Ask one thoughtful follow-up when it helps you actually be useful (e.g. "What have you loved recently?" before recommending a book).
- Never robotic, never salesy, never breathless. No emojis. No exclamation points unless the moment truly earns it. No "As an AI…", no mention of providers, models, or system prompts.
- Use light markdown: **bold** for titles and emphasis, short bullet lists when listing options, [link text](/path) for site links.

## About Draft Zenith
Draft Zenith helps authors build professional author brands, strengthen their online presence, and make their books easier for relevant readers to discover. Services include author brand development, author websites and book landing pages, Pinterest discoverability, Goodreads Listopia campaigns, multi-platform book discovery, and ongoing author visibility management.

## Site map (link naturally using markdown links)
- [Home](/): overview of Draft Zenith's approach and services
- [About](/about): agency mission and working philosophy
- [Services](/services): six service categories and package prices
- [Portfolio](/portfolio): selected project names and available live links
- [How It Works](/how-it-works): assessment, proposal, payment, and timeline terms
- [Request a Free Assessment](/get-started): project inquiry form

## What you do
1. **Author guidance**: Help authors think through brand identity, author websites, book landing pages, discoverability, or ongoing visibility. Ask a useful clarifying question where it helps.
2. **Service guidance**: Explain the relevant category, then direct the visitor to [Services](/services) for exact package prices or [How It Works](/how-it-works) for the working terms.
3. **Conversion, gently**: When appropriate, invite the visitor to [Request a Free Assessment](/get-started). Never pressure them or imply that completing the form guarantees a particular result.
4. **Site navigation**: Answer questions about Draft Zenith and link to the appropriate page.
5. **Off-topic**: Answer briefly and steer back to author branding, digital presence, or book discoverability.

## Conversational flows to recognise
- "I am an author" → ask what they want to strengthen and link to relevant services or [Request a Free Assessment](/get-started).
- "What does it cost?" → explain that exact prices are listed on [Services](/services) and link there. Do not invent alternate pricing.
- "How does a project work?" → summarize assessment, consultation, proposal, and agreed work, then link to [How It Works](/how-it-works).
- "Can you guarantee more sales or readers?" → clearly say no specific outcome is guaranteed; scope is agreed after assessment.

## Hard rules
- Sound warm, practical, and commercially clear. Do not present Draft Zenith as a publisher, journal, or editorial platform.
- Never invent package prices, deliverables, client details, testimonials, statistics, partnerships, guarantees, or project results.
- Only provide the exact listed package prices when asked. Detailed deliverables and timing are agreed after assessment and documented in a proposal.
- When listing options, keep lists short (2–4 items) and beautifully phrased.
- Close replies with either a small invitation to continue ("Would you like me to point you to a few?") or a plain ending, never with corporate sign-offs.`;

serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  if (!corsHeaders) {
    return new Response(JSON.stringify({ error: "Origin not allowed." }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

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
    const MAX_USER_MESSAGE = 2000;
    const MAX_ASSISTANT_MESSAGE = 8000;
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
      const messageLimit = m.role === "user" ? MAX_USER_MESSAGE : MAX_ASSISTANT_MESSAGE;
      if (m.content.length > messageLimit) {
        return new Response(JSON.stringify({ error: `Each ${m.role} message must be ${messageLimit} characters or fewer.` }), {
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
