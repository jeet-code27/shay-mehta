"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ABOUT } from "@/data/content"
import { Card } from "@/components/ui/Card"
import Image from "next/image"

export function AboutSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden" id="about">
      {/* Background Decors */}
      <div className="absolute top-40 right-20 w-32 h-32 bg-quaternary/30 rounded-full blur-2xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <SectionLabel color="violet">About Me</SectionLabel>
            
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
              {ABOUT.heading}
            </h2>
            
            <div className="flex flex-col gap-4 text-lg text-foreground/80 leading-relaxed">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-4 p-6 bg-tertiary border-2 border-foreground border-l-[8px] border-l-accent shadow-pop-yellow rounded-xl transform -rotate-1 hover:rotate-0 transition-transform">
              <p className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                "{ABOUT.pullquote}"
              </p>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex flex-col items-center gap-12 py-10"
          >
            {/* Image of Shay */}
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl border-4 border-foreground shadow-pop-pink overflow-hidden bg-secondary rotate-2 hover:rotate-0 transition-transform duration-300">
              <Image 
                src="/images/shay-mehta-digital-growth.png" 
                alt="Shay Mehta - Digital Marketing Consultant & Founder of BizBox Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <div className="relative flex justify-center w-full">
              {/* Dashed line connecting badges */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 border-l-4 border-dashed border-foreground/20 -z-10" />

              <div className="flex flex-col gap-6 w-full max-w-sm">
                {ABOUT.skills.map((skill, index) => {
                  const colors = ["violet", "pink", "yellow", "mint"]

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card
                      className="flex items-center gap-4 py-4 px-6 rotate-even-odd"
                      shadowColor={colors[index % colors.length] as any}
                    >
                      <span className="font-bold text-lg">{skill}</span>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
