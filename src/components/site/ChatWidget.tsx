import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  X,
  Send,
  Sparkles,
  BookOpen,
  Feather,
  Compass,
  Megaphone,
  PenLine,
  Flame,
  Mail,
} from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

type QuickPrompt = {
  label: string;
  prompt: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const QUICK_PROMPTS: QuickPrompt[] = [
  { label: "Submit my book", prompt: "I'd like to submit my book for a feature — how does the process work?", icon: Feather },
  { label: "Recommend a read", prompt: "Recommend a book I'll fall in love with — ask me what I'm in the mood for.", icon: BookOpen },
  { label: "Discover authors", prompt: "Introduce me to a few indie authors I should be reading right now.", icon: Compass },
  { label: "Promotion options", prompt: "Walk me through Draft Zenith's promotion options for indie authors.", icon: Megaphone },
  { label: "Writing tips", prompt: "Share a piece of writing advice from the Draft Zenith Journal.", icon: PenLine },
  { label: "Trending now", prompt: "What's trending in the Draft Zenith Journal this week?", icon: Flame },
];

const GREETING: Msg = {
  role: "assistant",
  content:
    "Welcome to Draft Zenith. I'm **Zenith** — your editorial concierge. Whether you're hunting for your next unforgettable read or quietly building your author career, I'm here to help. Where shall we begin?",
};

const AMBIENT_NUDGES = [
  "Looking for your next unforgettable read?",
  "Want help getting your book discovered?",
  "Need a recommendation tailored to your taste?",
];

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const ANON = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [loading, setLoading] = useState(false);
  const [nudge, setNudge] = useState<string | null>(null);
  const [nudgeDismissed, setNudgeDismissed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  // Ambient greeting — appears once, gently, after the visitor has settled in
  useEffect(() => {
    if (open || nudgeDismissed) return;
    const t = setTimeout(() => {
      setNudge(AMBIENT_NUDGES[Math.floor(Math.random() * AMBIENT_NUDGES.length)]);
    }, 9000);
    return () => clearTimeout(t);
  }, [open, nudgeDismissed]);

  useEffect(() => {
    if (open) {
      setNudge(null);
      setNudgeDismissed(true);
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

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
      {/* Ambient greeting bubble */}
      <div
        className={`fixed bottom-24 right-4 sm:right-6 z-[59] max-w-[260px] transition-all duration-700 ${
          nudge && !open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {nudge && (
          <button
            onClick={() => setOpen(true)}
            className="group relative block text-left rounded-2xl rounded-br-sm border border-primary/30 bg-background/85 backdrop-blur-xl px-4 py-3 pr-9 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
          >
            <span className="absolute inset-0 rounded-2xl rounded-br-sm bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
            <p className="relative font-serif italic text-sm leading-snug text-foreground/95">{nudge}</p>
            <p className="relative mt-1 text-[10px] uppercase tracking-[0.28em] text-primary/80">Zenith — concierge</p>
            <span
              role="button"
              tabIndex={0}
              aria-label="Dismiss"
              onClick={(e) => {
                e.stopPropagation();
                setNudge(null);
                setNudgeDismissed(true);
              }}
              className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground transition"
            >
              <X size={12} />
            </span>
          </button>
        )}
      </div>

      {/* Floating launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open Zenith concierge"}
        className="fixed bottom-6 right-4 sm:right-6 z-[60] group"
      >
        <span className="absolute inset-0 rounded-full bg-primary/50 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 animate-pulse" />
        <span className="relative flex items-center gap-2.5 bg-gradient-to-br from-[oklch(0.72_0.14_75)] via-primary to-[oklch(0.55_0.12_60)] text-primary-foreground pl-3.5 pr-5 py-3 rounded-full shadow-[0_15px_45px_-10px_rgba(0,0,0,0.7)] border border-primary/50 hover:scale-[1.04] transition-transform duration-500">
          <span className="relative w-7 h-7 rounded-full bg-background/20 backdrop-blur grid place-items-center">
            {open ? <X size={14} /> : <Sparkles size={14} className="animate-pulse" />}
          </span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium">
            {open ? "Close" : "Ask Zenith"}
          </span>
        </span>
      </button>

      {/* Panel */}
      <div
        className={`fixed z-[60] right-4 sm:right-6 bottom-24 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px] origin-bottom-right transition-all duration-500 ease-out ${
          open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="relative rounded-[1.75rem] overflow-hidden border border-primary/20 bg-background/70 backdrop-blur-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.85)]">
          {/* Atmospheric gold wash */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.65 0.13 70 / 0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 100% 100%, oklch(0.55 0.1 60 / 0.12), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 noise-bg pointer-events-none" />
          {/* Gold hairline top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* Header */}
          <div className="relative flex items-center gap-3.5 px-5 py-4 border-b border-border/40 bg-card/30">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[oklch(0.72_0.14_75)] via-primary to-[oklch(0.5_0.1_55)] grid place-items-center text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.6_0.13_70_/_0.7)]">
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
              <Sparkles size={16} className="relative animate-pulse" />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background shadow-[0_0_10px_rgba(52,211,153,0.6)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-serif text-lg leading-tight tracking-tight">Zenith</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Editorial concierge · online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-card/50"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="relative h-[440px] sm:h-[480px] overflow-y-auto px-4 sm:px-5 py-5 space-y-4 scroll-smooth"
          >
            {messages.map((m, i) => {
              const isUser = m.role === "user";
              const isStreamingEmpty = !m.content && loading && i === messages.length - 1;
              return (
                <div
                  key={i}
                  className={`flex items-end gap-2 animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}
                >
                  {!isUser && (
                    <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-[oklch(0.5_0.1_55)] grid place-items-center text-primary-foreground shadow-md">
                      <Sparkles size={11} />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
                      isUser
                        ? "bg-gradient-to-br from-primary to-[oklch(0.55_0.12_60)] text-primary-foreground rounded-br-md shadow-[0_8px_20px_-8px_oklch(0.6_0.13_70_/_0.5)]"
                        : "bg-card/60 border border-border/50 text-foreground rounded-bl-md backdrop-blur-sm"
                    }`}
                  >
                    {isStreamingEmpty ? (
                      <TypingDots />
                    ) : isUser ? (
                      <p className="whitespace-pre-wrap">{m.content}</p>
                    ) : (
                      <div className="prose prose-sm prose-invert max-w-none prose-p:my-1.5 prose-p:leading-relaxed prose-strong:text-primary prose-strong:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:my-1.5 prose-ol:my-1.5 prose-li:my-0.5">
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex items-end gap-2 justify-start animate-fade-in">
                <div className="shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-primary to-[oklch(0.5_0.1_55)] grid place-items-center text-primary-foreground shadow-md">
                  <Sparkles size={11} />
                </div>
                <div className="bg-card/60 border border-border/50 rounded-2xl rounded-bl-md px-4 py-3 backdrop-blur-sm">
                  <TypingDots />
                </div>
              </div>
            )}

            {messages.length <= 1 && (
              <div className="pt-3 space-y-3 animate-fade-in">
                <div className="flex items-center gap-3 px-1">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border/60" />
                  <p className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">Where shall we begin</p>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border/60" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {QUICK_PROMPTS.map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.label}
                        onClick={() => send(p.prompt)}
                        className="group flex items-center gap-2 text-left text-xs px-3 py-2.5 rounded-xl border border-border/50 bg-card/30 hover:bg-card/60 hover:border-primary/60 text-foreground/85 hover:text-foreground transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Icon size={13} className="text-primary/80 group-hover:text-primary transition-colors shrink-0" />
                        <span className="truncate">{p.label}</span>
                      </button>
                    );
                  })}
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
            className="relative flex items-center gap-2 p-3 border-t border-border/40 bg-card/30 backdrop-blur-sm"
          >
            <Mail size={14} className="ml-2 text-muted-foreground/60 shrink-0" />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Zenith anything…"
              className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground/70 focus:outline-none px-1 py-2"
              disabled={loading}
              maxLength={500}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send"
              className="w-9 h-9 grid place-items-center rounded-full bg-gradient-to-br from-primary to-[oklch(0.55_0.12_60)] text-primary-foreground hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:scale-100 transition-all duration-300 shadow-[0_6px_16px_-6px_oklch(0.6_0.13_70_/_0.5)]"
            >
              <Send size={13} />
            </button>
          </form>
          <p className="relative text-[9px] text-center text-muted-foreground/70 pb-2.5 tracking-[0.25em] uppercase">
            Draft Zenith · Editorial Concierge
          </p>
        </div>
      </div>
    </>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1.5 py-1">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.15s]" />
      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" />
    </span>
  );
}
