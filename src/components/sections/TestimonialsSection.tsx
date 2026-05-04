"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { TESTIMONIALS } from "@/data/content"
import { Card } from "@/components/ui/Card"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden bg-muted" id="testimonials">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel color="violet">Client Stories</SectionLabel>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground">
            {TESTIMONIALS.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {TESTIMONIALS.subtext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.list.map((testimonial, index) => {
            const colors = ["violet", "pink", "yellow", "mint"]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card shadowColor={colors[index % colors.length] as any} className="h-full flex flex-col relative pt-10">
                  <div className={`absolute -top-6 right-6 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center bg-${colors[index % colors.length] === 'violet' ? 'accent text-white' : colors[index % colors.length] === 'pink' ? 'secondary text-foreground' : colors[index % colors.length] === 'yellow' ? 'tertiary text-foreground' : 'quaternary text-foreground'}`}>
                    <Quote className="w-5 h-5 fill-current" />
                  </div>
                  
                  <p className="italic text-foreground/80 leading-relaxed flex-grow text-lg mb-6">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="mt-auto border-t-2 border-foreground/10 pt-4">
                    <p className="font-heading font-bold text-lg text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
