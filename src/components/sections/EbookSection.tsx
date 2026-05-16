"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, ArrowRight, Download, Star, Users, Clock } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import Image from "next/image"
import Link from "next/link"

const guideHighlights = [
  { icon: "📖", title: "The Honest History", desc: "How ChatGPT started it all — and why serious people moved to Claude next." },
  { icon: "🎯", title: "What Claude Actually Does", desc: "Real use cases for real life. Things you can do today, not theory." },
  { icon: "⚖️", title: "ChatGPT vs Claude", desc: "Side-by-side comparison. No brand loyalty. Just what's actually better and why." },
  { icon: "🚀", title: "How to Start Right Now", desc: "Four steps. Ten minutes. No tech background needed. No excuses left." },
]

export function EbookSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden bg-foreground" id="free-guide" ref={ref}>
      {/* Background dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.04,
        }}
      />

      {/* Blobs */}
      <div className="absolute top-10 left-[5%] w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[5%] w-72 h-72 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <SectionLabel color="yellow">Free Resource</SectionLabel>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            Shay's Free Guide on{" "}
            <span className="text-secondary">Claude AI</span>{" "}
            is Now Live
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl">
            Eight pages. Fifteen minutes. Zero fluff. Written for real people — not tech enthusiasts.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Ebook Cover + badges */}
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -5 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -40, rotate: -5 }}
            transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.15 }}
            className="relative flex justify-center"
          >
            {/* Book wrapper — tilted card */}
            <div className="relative w-72 sm:w-80">
              {/* Stack shadow layers */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-secondary/40 rounded-2xl border-2 border-white/20" />
              <div className="absolute inset-0 translate-x-6 translate-y-6 bg-accent/30 rounded-2xl border-2 border-white/10" />

              {/* Main book */}
              <div className="relative rounded-2xl border-4 border-white overflow-hidden shadow-[8px_8px_0px_0px_#F472B6]">
                <Image
                  src="/images/claude-guide-ebook-cover.png"
                  alt="What is Claude? Free Guide by Shay Mehta (@sayitlikeshay)"
                  width={400}
                  height={533}
                  className="w-full object-cover"
                  priority
                />
              </div>

              {/* FREE badge floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -top-5 -right-5 bg-tertiary border-2 border-foreground rounded-xl px-4 py-2 shadow-pop-yellow rotate-6 z-10"
              >
                <p className="font-heading font-extrabold text-foreground text-sm">100% FREE 🎁</p>
              </motion.div>

              {/* Instant Access badge */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-5 -left-5 bg-white border-2 border-foreground rounded-xl px-4 py-2 shadow-pop z-10"
              >
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-accent" />
                  <p className="font-bold text-foreground text-sm">Instant Access</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Badges row */}
            <div className="flex flex-wrap gap-3">
              <Badge color="pink">2026 Edition</Badge>
              <Badge color="yellow">Plain English</Badge>
              <Badge color="mint">No Spam</Badge>
            </div>

            {/* Title + desc */}
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                "What is <span className="text-secondary">Claude</span>?"
              </h3>
              <p className="mt-3 text-white/70 text-lg leading-relaxed">
                ChatGPT had its moment. <strong className="text-white">Claude is what came next.</strong> Most people have never heard of it — this guide changes that. In plain English, no tech degree required.
              </p>
            </div>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-4 py-2">
              {[
                { icon: BookOpen, label: "8 Pages" },
                { icon: Clock, label: "15 Min Read" },
                { icon: Users, label: "For 40, 50, 60+" },
                { icon: Star, label: "Zero Fluff" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-white/80">
                  <stat.icon className="w-4 h-4 text-tertiary" />
                  <span className="font-bold text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* What's inside highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {guideHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-white text-sm">{item.title}</p>
                    <p className="text-white/50 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Shay's quote */}
            <div className="border-l-4 border-secondary pl-4 py-1">
              <p className="text-white/80 italic leading-relaxed">
                "The people who get left behind by technology aren't left behind because they're not smart enough.
                They're left behind because nobody thought to explain it to them properly."
              </p>
              <p className="mt-2 font-bold text-secondary text-sm">— Shay, @sayitlikeshay</p>
            </div>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-start">
              <Link href="/claude-guide">
                <button
                  className="group inline-flex items-center gap-3 bg-secondary border-2 border-white text-foreground font-bold text-base px-8 py-4 rounded-full shadow-[4px_4px_0px_0px_#FBBF24] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#FBBF24] active:shadow-[2px_2px_0px_0px_#FBBF24] active:translate-x-0 active:translate-y-0 transition-all"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)", transitionDuration: "300ms" }}
                >
                  <Download className="w-5 h-5" />
                  Get the Free Guide
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <p className="text-white/40 text-sm self-center">No credit card. No spam. Just the guide.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
