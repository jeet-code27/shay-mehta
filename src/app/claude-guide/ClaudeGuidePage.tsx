"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Download, ArrowLeft, CheckCircle2, BookOpen, Clock, Users, Star, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Navbar } from "@/components/layout/Navbar"
import Image from "next/image"
import Link from "next/link"

/* ─── What's Inside data ─── */
const insideCards = [
  { icon: "📖", title: "The Honest History", desc: "How ChatGPT started it all — and why Claude is what serious people moved to next." },
  { icon: "🎯", title: "What Claude Actually Does", desc: "Real use cases for real life. Not theory. Things you can do today." },
  { icon: "⚖️", title: "ChatGPT vs Claude", desc: "Side-by-side comparison. No brand loyalty. Just what is actually better and why." },
  { icon: "🚀", title: "How to Start — Right Now", desc: "Four steps. Takes ten minutes. No tech background needed. No excuses left." },
  { icon: "🔥", title: "The Hard Truth", desc: "Why the window to get ahead of this is still open — and how quickly it closes." },
  { icon: "🎁", title: "A Surprise on the Last Page", desc: "For when you are ready to go from understanding Claude to actually mastering it." },
]

/* ─── For Who data ─── */
const forWhoItems = [
  "You have heard of ChatGPT but never really used it — and now you are hearing about Claude and feel even more behind.",
  "You are 40, 50, 60+ and tired of tech guides that assume you already know everything.",
  "You have thought this is not for me — and some part of you suspects that is not actually true.",
  "You want to understand AI without being sold a course, a subscription, or a tech-bro lifestyle.",
  <>You follow <a href="https://www.instagram.com/sayitlikeshay/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline decoration-2 underline-offset-2 font-bold text-foreground">@sayitlikeshay</a> because you trust straight talk — and you want the same from your information about AI.</>,
]
const forWhoStrong = [null, "40, 50, 60+", null, null, null]

/* ─── Small animated section wrapper ─── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─── Email Form ─── */
function GuideForm({ dark = false }: { dark?: boolean }) {
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle")
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")

  async function handleSubmit() {
    if (!email) return;
    setState("loading")
    
    try {
      const params = new URLSearchParams()
      params.append("name", name)
      params.append("email", email)
      params.append("source", "Hero Form")
      
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        })
      } else {
        // Fallback delay if no URL is set yet
        await new Promise(r => setTimeout(r, 1400))
      }
    } catch (err) {
      console.error(err)
    }
    
    setState("done")
  }

  const inputBase = "w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors font-body text-base"
  const inputDark = "bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-secondary"
  const inputLight = "bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-accent"

  return (
    <div className="flex flex-col gap-3 w-full max-w-md">
      <p className={`text-sm font-medium ${dark ? "text-white/60" : "text-muted-foreground"}`}>
        Drop your details below. Your free guide arrives instantly.
      </p>
      <input
        type="text"
        placeholder="First name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={`${inputBase} ${dark ? inputDark : inputLight}`}
        disabled={state !== "idle"}
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`${inputBase} ${dark ? inputDark : inputLight}`}
        disabled={state !== "idle"}
      />
      <button
        onClick={handleSubmit}
        disabled={state !== "idle"}
        className={[
          "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-foreground font-bold text-base transition-all",
          state === "done"
            ? "bg-quaternary text-foreground shadow-[4px_4px_0px_0px_#1E293B]"
            : "bg-secondary text-foreground shadow-pop-pink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B] active:shadow-pop-active active:translate-x-0 active:translate-y-0",
        ].join(" ")}
        style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)", transitionDuration: "300ms" }}
      >
        {state === "idle" && (
          <>
            <Download className="w-5 h-5" /> Send me the free guide →
          </>
        )}
        {state === "loading" && "Sending your guide..."}
        {state === "done" && (
          <>
            <CheckCircle2 className="w-5 h-5" /> Check your inbox! 🎉
          </>
        )}
      </button>
      <p className={`text-xs text-center font-bold mt-1 ${dark ? "text-tertiary" : "text-tertiary"}`}>
        Note: Please ensure your email is correct as the free guide will be sent there.
      </p>
      <p className={`text-xs text-center mt-1 ${dark ? "text-white/30" : "text-muted-foreground"}`}>
        No spam. No newsletter you did not ask for. Just the guide.
      </p>
    </div>
  )
}

/* ─── Bottom CTA Form ─── */
function BottomForm() {
  const [state, setState] = React.useState<"idle" | "loading" | "done">("idle")
  const [email, setEmail] = React.useState("")

  async function handleSubmit() {
    if (!email) return;
    setState("loading")
    
    try {
      const params = new URLSearchParams()
      params.append("name", "") // No name in bottom form
      params.append("email", email)
      params.append("source", "Bottom CTA Form")
      
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || ""
      if (scriptUrl) {
        await fetch(scriptUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: params.toString(),
        })
      } else {
        await new Promise(r => setTimeout(r, 1400))
      }
    } catch (err) {
      console.error(err)
    }
    
    setState("done")
  }

  if (state === "done") {
    return (
      <div className="flex items-center justify-center gap-3 bg-quaternary border-2 border-foreground rounded-full px-6 py-4 shadow-[4px_4px_0px_0px_#1E293B] font-bold text-foreground">
        <CheckCircle2 className="w-5 h-5" /> Check your inbox! 🎉
      </div>
    )
  }

  return (
    <div className="flex gap-0">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === "loading"}
        className="flex-1 px-5 py-4 rounded-l-full border-2 border-r-0 border-foreground bg-white text-foreground text-base outline-none font-body placeholder:text-muted-foreground disabled:opacity-70"
      />
      <button 
        onClick={handleSubmit}
        disabled={state === "loading" || !email}
        className="px-6 py-4 rounded-r-full border-2 border-foreground bg-foreground text-white font-bold text-base whitespace-nowrap hover:bg-foreground/80 transition-colors flex items-center gap-2 disabled:opacity-70"
      >
        {state === "loading" ? "Sending..." : <>Send it <ArrowRight className="w-4 h-4" /></>}
      </button>
    </div>
  )
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export function ClaudeGuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 mt-20">

        {/* ═══ HERO ═══ */}
        <section className="relative pt-20 pb-24 overflow-hidden bg-foreground" id="top">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.04,
            }}
          />
          <div className="absolute top-0 right-[15%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Left: Text + Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-wrap gap-3">
                  <Badge color="pink">Free Guide · 2026 Edition</Badge>
                  <a href="https://www.instagram.com/sayitlikeshay/" target="_blank" rel="noopener noreferrer" className="inline-block hover:-translate-y-1 transition-transform">
                    <Badge color="yellow">@sayitlikeshay</Badge>
                  </a>
                </div>

                <h1 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                  What is{" "}
                  <span className="text-secondary">Claude</span>?<br />
                  <span className="text-white/70 text-4xl sm:text-5xl">
                    A guide for people who are done being left behind.
                  </span>
                </h1>

                <p className="text-xl text-white/60 leading-relaxed">
                  ChatGPT had its moment.{" "}
                  <strong className="text-white">Claude is what came next.</strong>{" "}
                  And most people over 40 have never heard of it. This free guide changes that — in plain English, no tech degree required.
                </p>

                <div className="flex flex-wrap gap-6 py-1">
                  {[
                    { icon: BookOpen, label: "8 Pages" },
                    { icon: Clock, label: "15 Min Read" },
                    { icon: Users, label: "For 40, 50, 60+" },
                    { icon: Star, label: "Zero Fluff" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/60">
                      <s.icon className="w-4 h-4 text-tertiary" />
                      <span className="font-bold text-sm">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div id="get-guide" className="mt-2">
                  <GuideForm dark />
                </div>
              </motion.div>

              {/* Right: Book Cover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.25 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-72 sm:w-80 lg:w-96">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-secondary/40 rounded-2xl border-2 border-white/20" />
                  <div className="absolute inset-0 translate-x-6 translate-y-6 bg-accent/30 rounded-2xl border-2 border-white/10" />
                  <div className="relative rounded-2xl border-4 border-white overflow-hidden shadow-[8px_8px_0px_0px_#F472B6]">
                    <Image
                      src="/images/claude-guide-ebook-cover.png"
                      alt="What is Claude? Free Guide by Shay Mehta"
                      width={400}
                      height={533}
                      className="w-full object-cover"
                      priority
                    />
                  </div>
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-tertiary border-2 border-foreground rounded-xl px-4 py-2 shadow-pop-yellow rotate-6 z-10"
                  >
                    <p className="font-heading font-extrabold text-foreground text-sm">100% FREE 🎁</p>
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Proof Bar ── */}
        <div className="bg-secondary border-y-2 border-foreground py-4 text-center">
          <p className="font-bold text-foreground text-sm tracking-wide">
            <strong>Free. Instant. No credit card.</strong>{" "}
            — Written by <a href="https://www.instagram.com/sayitlikeshay/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors underline decoration-2 underline-offset-4">@sayitlikeshay</a> for real people, not tech enthusiasts.
          </p>
        </div>

        {/* ═══ WHAT IS INSIDE ═══ */}
        <section className="py-24 bg-background" id="whats-inside">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="flex flex-col items-center text-center mb-16">
              <SectionLabel color="violet">What is Inside</SectionLabel>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                Eight pages. Fifteen minutes.<br />
                <span className="text-muted-foreground">Zero fluff.</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                This guide was written for people who want the truth about AI — without the hype, without the condescension,
                and without being made to feel like they are already behind.{" "}
                <strong className="text-foreground">You are not. You are right on time.</strong>
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {insideCards.map((card, i) => {
                const shadows = ["shadow-pop", "shadow-pop-pink", "shadow-pop-yellow", "shadow-pop", "shadow-pop-pink", "shadow-pop-yellow"]
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div
                      className={`bg-card border-2 border-foreground rounded-2xl p-6 h-full ${shadows[i]} hover:-translate-y-1 transition-transform duration-300`}
                      style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
                    >
                      <span className="text-3xl mb-4 block">{card.icon}</span>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-2">{card.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══ FOR WHO ═══ */}
        <section className="py-24 bg-foreground" id="for-who">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="flex flex-col items-center text-center mb-16">
              <SectionLabel color="pink">This Guide is For You If...</SectionLabel>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                You have been watching from<br />the sidelines long enough.
              </h2>
            </FadeIn>

            <div className="max-w-3xl mx-auto flex flex-col gap-4">
              {forWhoItems.map((item, i) => {
                const colors = ["bg-accent", "bg-secondary", "bg-tertiary", "bg-quaternary", "bg-secondary"]
                const strongWord = forWhoStrong[i]
                let displayText: React.ReactNode = item
                if (strongWord && typeof item === "string") {
                  const parts = item.split(strongWord)
                  displayText = (
                    <>
                      {parts[0]}
                      <strong className="text-white">{strongWord}</strong>
                      {parts[1]}
                    </>
                  )
                }
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                      <div
                        className={`min-w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-sm font-bold text-foreground flex-shrink-0 mt-0.5 ${colors[i]}`}
                      >
                        ✓
                      </div>
                      <p className="text-white/75 text-base leading-relaxed">{displayText}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══ SHAY QUOTE ═══ */}
        <section className="py-24 bg-muted/40" id="why-i-made-this">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <SectionLabel color="yellow">Why I Made This</SectionLabel>
                <div
                  className="mt-8 bg-tertiary border-2 border-foreground rounded-2xl shadow-pop-yellow p-8 relative overflow-hidden rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}
                >
                  <span className="absolute top-4 right-6 font-heading text-8xl text-foreground/10 leading-none select-none">"</span>
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-foreground leading-snug relative z-10">
                    "The people who get left behind by technology are not left behind because they are not smart enough.
                    They are left behind because nobody thought to explain it to them properly. I made this guide to fix that —
                    for my audience, in my voice, with no patience for unnecessary complexity."
                  </p>
                  <p className="mt-6 font-bold text-foreground/70 text-base relative z-10">— Shay, <a href="https://www.instagram.com/sayitlikeshay/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline decoration-2 underline-offset-2">@sayitlikeshay</a></p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══ PREMIUM BUNDLE UPSELL ═══ */}
        <section className="py-24 bg-background" id="premium-bundle">
          <div className="container mx-auto px-4 md:px-6">
            <FadeIn className="flex flex-col items-center text-center mb-16">
              <SectionLabel color="mint">Level Up</SectionLabel>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                Want to build faster with AI?<br />
                <span className="text-muted-foreground">Get the Premium Bundle.</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                If you are interested in taking things to the next level, our premium bundle is built for people who actually want to save time, automate better, and stop guessing what prompts work.
              </p>
            </FadeIn>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-card border-2 border-foreground rounded-3xl shadow-pop p-8 md:p-12 hover:-translate-y-1 transition-transform duration-300" style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)" }}>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-heading text-3xl font-extrabold text-foreground mb-2">Claude Prompt Pack</h3>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="font-heading text-3xl font-extrabold text-accent">₹499</span>
                    <span className="text-muted-foreground line-through text-lg font-bold">₹1499</span>
                    <Badge color="pink">Special Offer</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-4 mt-2">
                  {[
                    "200+ high-performing Claude prompts",
                    "Advanced Claude workflow guides",
                    "Claude Artifacts guide",
                    "Ready-to-use prompt library for creators, marketers & builders"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="min-w-6 h-6 rounded-full bg-mint border-2 border-foreground flex items-center justify-center text-xs font-bold text-foreground mt-0.5">✓</div>
                      <p className="font-bold text-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <a 
                    href="https://swagcentralindia.myshopify.com/products/claude-prompt-pack-200-premium-ai-prompts-latest-2026-edition-ready-to-use-claude-ai-prompt-collection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-secondary border-2 border-foreground text-foreground font-bold text-base px-8 py-4 rounded-full shadow-pop-pink hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B] active:shadow-pop-active active:translate-x-0 active:translate-y-0 transition-all"
                    style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)", transitionDuration: "250ms" }}
                  >
                    Get the Bundle Now <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="relative w-full aspect-square md:aspect-auto md:h-full bg-muted border-2 border-foreground rounded-2xl overflow-hidden shadow-inner flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-accent/20 transition-opacity duration-500 group-hover:opacity-70" />
                <div className="text-center z-10 p-6 flex flex-col items-center">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">🚀</div>
                  <h4 className="font-heading text-2xl font-extrabold text-foreground bg-white px-4 py-2 border-2 border-foreground rounded-xl shadow-pop-yellow rotate-[-2deg]">2026 Edition</h4>
                  <p className="text-foreground font-bold text-sm mt-4 bg-white/80 px-4 py-1.5 rounded-full border border-foreground/10">Instant Access • Lifetime Updates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section className="py-24 bg-accent relative overflow-hidden" id="bottom-cta">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              opacity: 0.06,
            }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <FadeIn className="flex flex-col items-center text-center">
              <h2 className="font-heading text-5xl sm:text-6xl font-extrabold text-white leading-tight max-w-2xl">
                Still reading?<br />Go get the guide.
              </h2>
              <p className="mt-4 text-xl text-white/70 max-w-lg">
                It is free. It is instant. And it is the most useful fifteen minutes you will spend this week.
              </p>

              <div className="mt-10 w-full max-w-md flex flex-col gap-3">
                <BottomForm />
                <p className="text-xs text-center font-bold text-tertiary mt-1">
                  Note: Please ensure your email is correct as the free guide will be sent there.
                </p>
                <p className="text-white/40 text-xs text-center">Free forever. No credit card. Unsubscribe any time.</p>
              </div>

              <div className="mt-10">
                <Link href="/">
                  <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Shay Portfolio
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-foreground border-t-2 border-white/10 py-8 text-center">
        <p className="text-white/40 text-sm">
          2026 <a href="https://www.instagram.com/sayitlikeshay/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@sayitlikeshay</a> ·{" "}
          <a
            href="https://instagram.com/sayitlikeshay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            Instagram
          </a>
          {" "}· Questions? DM me on Instagram.
        </p>
      </footer>
    </div>
  )
}
