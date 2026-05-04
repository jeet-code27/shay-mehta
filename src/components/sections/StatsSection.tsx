"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { StatCard } from "@/components/ui/StatCard"
import { STATS, MARQUEE_TEXT } from "@/data/content"

function AnimatedNumber({ value }: { value: string }) {
  // Simple extraction for numeric prefix, but since values are strings like "50+",
  // we just do a quick reveal or keep it simple. A true count-up requires parsing.
  // For now, we'll just animate the container.
  return <span>{value}</span>
}

export function StatsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 overflow-hidden border-y-2 border-foreground bg-muted/30" id="results">
      <div className="container mx-auto px-4 md:px-6 mb-16" ref={ref}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard
                value={stat.value}
                label={stat.label}
                color={stat.color as any}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="relative flex overflow-x-hidden border-y-2 border-foreground bg-white py-4 shadow-pop">
        <motion.div
          className="whitespace-nowrap flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* We duplicate the text multiple times to ensure seamless infinite scroll */}
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-heading font-bold text-muted-foreground uppercase tracking-wider mx-4"
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
