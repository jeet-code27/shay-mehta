"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { BIZBOX_STORY } from "@/data/content"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import Image from "next/image"

export function AgencyStorySection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden" id="agency">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <SectionLabel color="violet">My Agency</SectionLabel>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
              {BIZBOX_STORY.heading}
            </h2>
            
            <div className="flex flex-col gap-4 text-lg text-foreground/80 leading-relaxed">
              {BIZBOX_STORY.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-4">
              <Link href={BIZBOX_STORY.cta.url} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" showArrow>{BIZBOX_STORY.cta.label}</Button>
              </Link>
            </div>

            <div className="mt-10 relative w-full max-w-[280px] aspect-[4/5] rounded-2xl border-4 border-foreground shadow-pop overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/shay-mehta-about.jpeg" 
                alt="Shay Mehta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border-2 border-foreground rounded-2xl p-8 lg:p-10 shadow-pop-pink"
          >
            <h3 className="font-heading text-2xl font-bold mb-8 text-foreground">
              The BizBox 5-Layer Growth Engine
            </h3>
            
            <div className="flex flex-col gap-8 relative">
              {/* Connecting line */}
              <div className="absolute left-4 top-4 bottom-4 w-1 bg-foreground/10" />
              
              {BIZBOX_STORY.engine.map((step, index) => (
                <div key={index} className="relative flex gap-6 items-start">
                  <div className="w-9 h-9 rounded-full bg-accent border-2 border-foreground flex items-center justify-center font-bold text-white shrink-0 z-10 shadow-sm relative -ml-[18px] left-[18px]">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
