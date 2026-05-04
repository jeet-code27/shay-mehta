"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { CLIENTS } from "@/data/content"

export function ClientsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-tertiary/20 relative overflow-hidden" id="clients">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel color="mint">Trusted By</SectionLabel>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground">
            {CLIENTS.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {CLIENTS.subtext}
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {CLIENTS.list.map((client, index) => {
            const colors = ["bg-accent", "bg-secondary", "bg-tertiary", "bg-quaternary"]
            const isDark = index % 4 === 0 || index % 4 === 1
            const textColor = isDark ? "text-white" : "text-foreground"
            
            return (
              <div 
                key={index}
                className={`px-6 py-3 rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B] font-bold text-lg hover:-translate-y-1 transition-transform ${colors[index % colors.length]} ${textColor}`}
              >
                {client}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
