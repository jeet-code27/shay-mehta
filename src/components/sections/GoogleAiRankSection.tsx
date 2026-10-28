"use client"

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Badge } from "@/components/ui/Badge"
import { GOOGLE_AI_RANK } from "@/data/content"
import {
  Sparkles,
  Search,
  CheckCircle2,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function GoogleAiRankSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeModalIndex, setActiveModalIndex] = React.useState<number | null>(null)

  // Keyboard navigation for modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalIndex === null) return
      if (e.key === "Escape") {
        setActiveModalIndex(null)
      } else if (e.key === "ArrowRight") {
        setActiveModalIndex((prev) =>
          prev !== null ? (prev + 1) % GOOGLE_AI_RANK.screenshots.length : 0
        )
      } else if (e.key === "ArrowLeft") {
        setActiveModalIndex((prev) =>
          prev !== null
            ? (prev - 1 + GOOGLE_AI_RANK.screenshots.length) % GOOGLE_AI_RANK.screenshots.length
            : 0
        )
      }
    }

    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeModalIndex])

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t-2 border-foreground" id="ai-ranking">
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1E293B 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          opacity: 0.04,
        }}
      />

      {/* Decorative ambient gradients */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-tertiary/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel color="yellow">{GOOGLE_AI_RANK.badge}</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.15]"
          >
            Ranked <span className="text-accent underline decoration-secondary decoration-wavy decoration-4 underline-offset-8">#1 on Google AI</span> Search
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl font-medium text-foreground/80 leading-relaxed"
          >
            We don't just talk about AI SEO and Generative Engine Optimization (GEO).{" "}
            <strong className="text-foreground font-extrabold">
              When users query Google AI for top commentators in Gurgaon, Shay Mehta is the first name it serves.
            </strong>
          </motion.p>
        </div>

        {/* Mock Search Prompt Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-card border-3 border-foreground rounded-2xl p-4 sm:p-5 shadow-pop flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shrink-0 border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B]">
                <Sparkles className="w-5 h-5 text-tertiary fill-tertiary" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                  <Search className="w-3 h-3" /> Live Search Query
                </span>
                <span className="font-heading font-extrabold text-lg sm:text-xl text-foreground">
                  "{GOOGLE_AI_RANK.searchQuery}"
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto flex justify-end">
              <Badge color="mint" className="py-1 px-3 text-xs sm:text-sm font-extrabold">
                ✓ Google AI Top Result
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Featured Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16 bg-tertiary border-3 border-foreground rounded-3xl p-6 sm:p-10 shadow-pop-yellow relative overflow-hidden rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300"
        >
          <span className="absolute top-2 right-6 font-heading text-8xl text-foreground/10 select-none pointer-events-none">
            "
          </span>
          <div className="relative z-10 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest bg-foreground text-tertiary px-3 py-1 rounded-full">
                Google AI Overview Verdict
              </span>
            </div>
            <p className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground leading-snug">
              "{GOOGLE_AI_RANK.googleAiQuote}"
            </p>
            <p className="text-base sm:text-lg text-foreground/85 font-medium leading-relaxed">
              {GOOGLE_AI_RANK.googleAiSubtext}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-foreground/80">
              <span>Sourced by Google Gemini via:</span>
              <span className="bg-white/80 border border-foreground/20 px-2.5 py-1 rounded-md">Instagram @sayitlikeshay</span>
              <span className="bg-white/80 border border-foreground/20 px-2.5 py-1 rounded-md">LinkedIn India</span>
              <span className="bg-white/80 border border-foreground/20 px-2.5 py-1 rounded-md">YouTube Podcasts</span>
            </div>
          </div>
        </motion.div>

        {/* ═══ SCREENSHOT SHOWCASE GRID ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          {GOOGLE_AI_RANK.screenshots.map((screen, idx) => {
            const rotClass = idx === 0 ? "lg:-rotate-1" : "lg:rotate-1"
            const shadowClass = idx === 0 ? "shadow-pop-pink" : "shadow-pop-yellow"
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.35 + idx * 0.15 }}
                className="flex flex-col items-center"
              >
                {/* Phone mockup container */}
                <div
                  onClick={() => setActiveModalIndex(idx)}
                  className={`group relative w-full max-w-[340px] sm:max-w-[360px] aspect-[472/1024] bg-foreground rounded-[40px] p-3 sm:p-4 border-4 border-foreground ${shadowClass} ${rotClass} hover:rotate-0 hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setActiveModalIndex(idx)
                    }
                  }}
                  aria-label={`Enlarge ${screen.title}`}
                >
                  {/* Phone Speaker Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-foreground rounded-full z-20 flex items-center justify-center">
                    <div className="w-10 h-1 bg-white/30 rounded-full" />
                  </div>

                  {/* Screenshot Image Frame */}
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-background border-2 border-foreground/30 shadow-inner">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 360px"
                      priority
                    />

                    {/* Hover hint overlay */}
                    <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 text-white p-4 text-center">
                      <div className="w-14 h-14 rounded-full bg-accent border-2 border-white flex items-center justify-center shadow-pop">
                        <Eye className="w-7 h-7 text-white" />
                      </div>
                      <span className="font-heading font-extrabold text-base tracking-wide bg-foreground/90 px-4 py-1.5 rounded-full border border-white/20">
                        Click to Read Full Screen
                      </span>
                    </div>
                  </div>
                </div>

                {/* Caption below screenshot */}
                <div className="mt-4 text-center">
                  <h4 className="font-heading font-extrabold text-lg text-foreground">
                    {screen.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-muted-foreground mt-0.5">
                    {screen.caption}
                  </p>
                  <button
                    type="button"
                    onClick={() => setActiveModalIndex(idx)}
                    className="mt-2 text-xs font-extrabold text-accent hover:text-accent/80 underline decoration-2 inline-flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> Enlarge Screenshot
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ═══ 3 TAKEAWAY HIGHLIGHT CARDS ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-20">
          {GOOGLE_AI_RANK.highlights.map((item, idx) => {
            const shadowStyle =
              item.color === "yellow"
                ? "shadow-pop-yellow"
                : item.color === "pink"
                ? "shadow-pop-pink"
                : "shadow-pop"
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                className={`bg-card border-2 border-foreground rounded-2xl p-6 ${shadowStyle} flex flex-col gap-3 hover:-translate-y-1 transition-transform`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-16 text-center flex flex-col items-center gap-4"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 text-sm font-extrabold text-foreground bg-muted px-4 py-2 rounded-full border border-foreground/15">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span>Want your brand recommended on Google AI, ChatGPT & Perplexity?</span>
          </div>

          <Link href="/#contact">
            <button
              className="group inline-flex items-center gap-3 bg-accent text-white font-heading font-extrabold text-base sm:text-lg px-8 py-4 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_#1E293B] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1E293B] transition-all"
              style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
            >
              Build Your AI SEO Growth Engine
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* ═══ SCREENSHOT LIGHTBOX MODAL ═══ */}
      <AnimatePresence>
        {activeModalIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-foreground/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Google AI Search Screenshot Lightbox"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-background border-4 border-foreground rounded-3xl p-4 sm:p-6 shadow-[10px_10px_0px_0px_#FBBF24] max-h-[95vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-foreground/10 gap-2">
                <div className="flex items-center gap-2">
                  <Badge color="yellow">Google AI Rank #1</Badge>
                  <span className="font-heading font-extrabold text-sm sm:text-base text-foreground">
                    {GOOGLE_AI_RANK.screenshots[activeModalIndex].title} ({activeModalIndex + 1}/
                    {GOOGLE_AI_RANK.screenshots.length})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalIndex(null)}
                  className="p-1.5 rounded-xl border-2 border-foreground bg-white hover:bg-secondary text-foreground hover:text-white transition-colors cursor-pointer"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Box */}
              <div className="relative my-3 w-full aspect-[472/1024] max-h-[70vh] bg-foreground/5 rounded-2xl overflow-hidden border-2 border-foreground flex items-center justify-center">
                <Image
                  src={GOOGLE_AI_RANK.screenshots[activeModalIndex].src}
                  alt={GOOGLE_AI_RANK.screenshots[activeModalIndex].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>

              {/* Modal Bottom Bar with Navigation Controls */}
              <div className="pt-2 border-t-2 border-foreground/10 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveModalIndex((prev) =>
                      prev !== null
                        ? (prev - 1 + GOOGLE_AI_RANK.screenshots.length) %
                          GOOGLE_AI_RANK.screenshots.length
                        : 0
                    )
                  }
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border-2 border-foreground bg-white text-foreground hover:bg-tertiary text-xs font-extrabold transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <span className="text-xs font-bold text-muted-foreground hidden sm:inline">
                  {GOOGLE_AI_RANK.screenshots[activeModalIndex].caption}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setActiveModalIndex((prev) =>
                      prev !== null
                        ? (prev + 1) % GOOGLE_AI_RANK.screenshots.length
                        : 0
                    )
                  }
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border-2 border-foreground bg-white text-foreground hover:bg-tertiary text-xs font-extrabold transition-colors cursor-pointer"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

