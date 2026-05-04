"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ACHIEVEMENTS } from "@/data/content"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function AchievementsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted border-y-2 border-foreground relative overflow-hidden" id="achievements">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <SectionLabel color="pink">Track Record</SectionLabel>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
              {ACHIEVEMENTS.heading}
            </h2>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed mb-8">
              {ACHIEVEMENTS.intro}
            </p>
            <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-xl border-4 border-foreground shadow-pop-yellow overflow-hidden bg-white rotate-2 hover:rotate-0 transition-transform duration-300 hidden lg:block">
              <Image 
                src="/images/shay-mehta-digital-marketing.png" 
                alt="Shay Mehta Digital Marketing Track Record"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {ACHIEVEMENTS.list.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border-2 border-foreground rounded-xl p-6 shadow-[4px_4px_0px_0px_#1E293B] flex gap-4 items-start hover:-translate-y-1 transition-transform"
              >
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
