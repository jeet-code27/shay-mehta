"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { WHY_HIRE_ME } from "@/data/content"
import { Card } from "@/components/ui/Card"

export function WhySection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden bg-background" id="why-hire-me">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center">
          <SectionLabel color="yellow">Why Work With Shay</SectionLabel>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground">
            {WHY_HIRE_ME.heading}
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            {WHY_HIRE_ME.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_HIRE_ME.cards.map((card, index) => {
            const shadowColor = {
              violet: "shadow-pop",
              pink: "shadow-pop-pink",
              yellow: "shadow-pop-yellow",
            }[card.color] || "shadow-pop"

            const bgColor = {
              violet: "bg-accent",
              pink: "bg-secondary",
              yellow: "bg-tertiary",
              mint: "bg-quaternary"
            }[card.color]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card shadowColor={card.color as any} className="h-full flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center font-bold text-lg shadow-[2px_2px_0px_0px_#1E293B] ${bgColor} ${card.color === 'violet' ? 'text-white' : 'text-foreground'}`}>
                    {index + 1}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
