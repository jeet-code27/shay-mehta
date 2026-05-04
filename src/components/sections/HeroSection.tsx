"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { HERO } from "@/data/content"
import Link from "next/link"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
}

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full pointer-events-none opacity-50 md:opacity-100">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-tertiary/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-[40%] w-16 h-16 bg-accent rounded-full" />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#1E293B 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.05,
          }}
        />
        {/* Small scattered shapes could go here */}
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start gap-6 max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <Badge color="pink">{HERO.badge}</Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              {HERO.h1}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold text-muted-foreground"
            >
              {HERO.h2}
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-4 text-lg text-foreground/80 leading-relaxed"
            >
              {HERO.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href={HERO.cta_primary.url} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" showArrow>{HERO.cta_primary.label}</Button>
              </Link>
              <Link href={HERO.cta_secondary.url}>
                <Button variant="secondary">{HERO.cta_secondary.label}</Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="pt-6 border-t-2 border-foreground/10 w-full mt-4"
            >
              <p className="font-bold text-sm text-muted-foreground uppercase tracking-wider">
                <a
                  href={HERO.instagram.startsWith("http") ? HERO.instagram : `https://instagram.com/${HERO.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {HERO.instagram}
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="relative justify-self-center lg:justify-self-end w-full max-w-md aspect-square"
          >
            {/* Layer 1: Blob Background with Overflow Hidden (Clips the bottom curve) */}
            <div className="absolute inset-0 bg-secondary rounded-[40%_60%_70%_30%/40%_50%_60%_50%] border-4 border-foreground shadow-pop-pink overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-[115%]">
                <Image 
                  src="/images/shay-mehta-hero-section.png" 
                  alt="Shay Mehta - India's Most Trusted Digital Marketing Consultant for SMEs & Startups"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
            
            {/* Layer 2: Pop-out Image (Clipped at the bottom so it only overflows at the top) */}
            <div className="absolute inset-x-0 bottom-0 h-[115%] z-10 pointer-events-none" style={{ clipPath: "inset(0 0 35% 0)" }}>
              <Image 
                src="/images/shay-mehta-hero-section.png" 
                alt="Shay Mehta - India's Most Trusted Digital Marketing Consultant for SMEs & Startups"
                fill
                className="object-contain object-bottom drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 lg:-left-12 bg-tertiary border-2 border-foreground rounded-xl p-4 shadow-pop-yellow rotate-[-5deg] z-10"
            >
              <p className="font-bold text-foreground max-w-[200px] text-sm leading-tight">
                {HERO.social_proof}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

