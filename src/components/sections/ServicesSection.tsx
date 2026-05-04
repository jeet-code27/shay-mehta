"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { Search, MousePointerClick, Share2, PenTool, Briefcase, Users } from "lucide-react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { SERVICES } from "@/data/content"

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-6 h-6 text-white" />,
  MousePointerClick: <MousePointerClick className="w-6 h-6 text-white" />,
  Share2: <Share2 className="w-6 h-6 text-foreground" />,
  PenTool: <PenTool className="w-6 h-6 text-white" />,
  Briefcase: <Briefcase className="w-6 h-6 text-foreground" />,
  Users: <Users className="w-6 h-6 text-foreground" />,
}

export function ServicesSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-muted relative" id="services">
      {/* Background SVG connections pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='none' stroke='%231E293B' stroke-width='1' stroke-dasharray='4 4'/%3E%3C/svg%3E\")",
      }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16 flex flex-col items-center">
          <SectionLabel color="mint">What We Do</SectionLabel>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-extrabold text-foreground">
            {SERVICES.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {SERVICES.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
          {SERVICES.list.map((service, index) => {
            const shadowColor = {
              violet: "shadow-pop",
              pink: "shadow-pop-pink",
              yellow: "shadow-pop-yellow",
            }[service.color] || "shadow-pop"

            const bgColor = {
              violet: "bg-accent",
              pink: "bg-secondary",
              yellow: "bg-tertiary",
              mint: "bg-quaternary"
            }[service.color]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Floating Icon */}
                <div className={`absolute -top-8 left-6 w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center z-20 ${bgColor} shadow-[2px_2px_0px_0px_#1E293B] transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  {iconMap[service.icon]}
                </div>

                {/* Card Body */}
                <div className={`bg-card border-2 border-foreground rounded-xl p-8 pt-12 h-full transition-all duration-300 ${shadowColor} group-hover:-translate-y-2`}>
                  <h3 className="font-heading text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
