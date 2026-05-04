"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { RESULTS, STATS } from "@/data/content"
import Link from "next/link"

export function ResultsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Select a subset of stats for the mini pills
  const miniStats = STATS.filter(s => s.value === "50+" || s.value === "3" || s.value === "6+")

  return (
    <section className="py-32 relative overflow-hidden bg-background" id="results-detail">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl absolute -left-40 top-0" />
        <div className="w-[500px] h-[500px] bg-tertiary/20 rounded-full blur-3xl absolute -right-20 bottom-0" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#1E293B 2px, transparent 2px)",
            backgroundSize: "32px 32px",
            opacity: 0.05,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[120px] md:text-[180px] font-heading font-black text-accent leading-none tracking-tighter drop-shadow-md"
          >
            {RESULTS.stat}
          </motion.div>
          
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-4xl font-bold text-foreground mt-4 mb-10"
          >
            {RESULTS.subline}
          </motion.h3>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {miniStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white border-2 border-foreground rounded-full px-6 py-2 shadow-[2px_2px_0px_0px_#1E293B] font-bold text-sm md:text-base flex items-center gap-2"
              >
                <span className={`w-3 h-3 rounded-full bg-${stat.color === 'violet' ? 'accent' : stat.color === 'pink' ? 'secondary' : stat.color === 'yellow' ? 'tertiary' : 'quaternary'}`} />
                {stat.value} {stat.label.split(" (")[0]}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link href={RESULTS.cta.url}>
              <Button variant="primary" showArrow className="text-lg px-8 py-4">
                {RESULTS.cta.label}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
