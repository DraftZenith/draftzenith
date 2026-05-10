import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_PROMPTS = [
  "What is Draft Zenith?",
  "How do I submit my book?",
  "Recommend a fantasy read",
  "How does Pinterest promotion work?",
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Welcome to Draft Zenith. I'm Zenith AI — your concierge for book discovery, author promotion, and everything in our editorial world. How can I help you today?",
};

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    const userMsg: Msg = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ANON}`,
          apikey: ANON,
        },
        body: JSON.stringify({
          messages: next.filter((m) => m !== GREETING).map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!resp.ok || !resp.body) {
        let msg = "Something went wrong. Please try again.";
        try {
          const j = await resp.json();
          if (j?.error) msg = j.error;
        } catch {}
        setMessages((m) => [...m, { role: "assistant", content: msg }]);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistantSoFar = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      let done = false;

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;
          const payload = line.slice(6).trim();
          if (payload === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(payload);
            const delta = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (delta) {
              assistantSoFar += delta;
              setMessages((m) => {
                const copy = m.slice();
                copy[copy.length - 1] = { role: "assistant", content: assistantSoFar };
                return copy;
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (err) {
      console.error(err);
      setMessages((m) => [...m, { role: "assistant", content: "Connection issue. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[60] group"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl opacity-70 group-hover:opacity-100 transition" />
        <span className="relative flex items-center gap-2 bg-gradient-to-br from-primary to-[oklch(0.68_0.13_70)] text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-2xl border border-primary/40 hover:scale-[1.03] transition-transform">
          {open ? <X size={18} /> : <Sparkles size={18} />}
          <span className="text-xs uppercase tracking-[0.25em] font-medium">
            {open ? "Close" : "Zenith AI"}
          </span>
        </span>
      </button>

      {/* Panel */}
      <div
        className={`fixed z-[60] right-4 sm:right-6 bottom-24 w-[calc(100vw-2rem)] sm:w-[400px] max-w-[400px] origin-bottom-right transition-all duration-500 ${
          open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-background/80 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
          <div className="absolute inset-0 noise-bg pointer-events-none" />

          {/* Header */}
          <div className="relative flex items-center gap-3 px-5 py-4 border-b border-border/60 bg-card/40">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[oklch(0.6_0.12_60)] grid place-items-center text-primary-foreground">
              <Sparkles size={16} />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-serif text-lg leading-tight">Zenith AI</p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Editorial concierge</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="p-1.5 text-muted-foreground hover:text-foreground transition">
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="relative h-[420px] overflow-y-auto px-4 py-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap rounded-2xl ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card/70 border border-border/60 text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content || (loading && i === messages.length - 1 ? <TypingDots /> : null)}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-card/70 border border-border/60 rounded-2xl rounded-bl-sm px-4 py-3">
                  <TypingDots />
                </div>
              </div>
            )}

            {messages.length <= 1 && (
              <div className="pt-2 space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground px-1">Try asking</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => send(p)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border/70 hover:border-primary hover:text-primary text-muted-foreground transition"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="relative flex items-center gap-2 p-3 border-t border-border/60 bg-card/40"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about books, authors, submissions…"
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none px-3 py-2"
              disabled={loading}
              maxLength={500}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="w-9 h-9 grid place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <Send size={14} />
            </button>
          </form>
          <p className="relative text-[10px] text-center text-muted-foreground pb-2 tracking-wide">
            Powered by Draft Zenith · Concierge replies in seconds
          </p>
        </div>
      </div>
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce" />
    </span>
  );
}
