"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const INSTA_POSTS = [
  {
    src: "/images/insta1.png",
    alt: "Instagram Post 1",
    rotation: "-rotate-3",
    color: "bg-tertiary",
  },
  {
    src: "/images/insta2.png",
    alt: "Instagram Post 2",
    rotation: "rotate-2",
    color: "bg-secondary",
  },
  {
    src: "/images/insta3.png",
    alt: "Instagram Post 3",
    rotation: "-rotate-2",
    color: "bg-accent",
  },
]

export function InstagramSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="instagram" ref={ref}>
      {/* Background Decor */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1E293B 2px, transparent 2px)",
          backgroundSize: "32px 32px",
          opacity: 0.05,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <SectionLabel color="pink">Community</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mt-4 mb-4 leading-tight">
              Join the conversation on <span className="text-secondary">Instagram</span>
            </h2>
            <p className="text-lg md:text-xl font-medium text-foreground/80 font-body">
              Daily insights on sales, marketing, and navigating the digital growth landscape. No fluff, just straight talk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <a href="https://www.instagram.com/sayitlikeshay/" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" showArrow className="bg-foreground text-white border-foreground hover:bg-foreground/90">
                <InstagramIcon className="w-5 h-5 mr-2" />
                Follow @sayitlikeshay
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Instagram Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {INSTA_POSTS.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/sayitlikeshay/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, type: "spring" }}
              className={`block relative group ${post.rotation} hover:rotate-0 hover:z-10 transition-all duration-300`}
            >
              {/* Neo-brutalist Shadow Background */}
              <div className={`absolute inset-0 translate-x-3 translate-y-3 border-2 border-foreground rounded-2xl ${post.color} transition-transform group-hover:translate-x-4 group-hover:translate-y-4`} />
              
              {/* Card Content */}
              <div className="relative bg-white border-2 border-foreground rounded-2xl overflow-hidden aspect-[4/5] flex flex-col group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform duration-300">
                {/* Header like instagram */}
                <div className="flex items-center gap-3 p-4 border-b-2 border-foreground bg-white">
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-foreground flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <span className="font-bold text-xs">SM</span>
                  </div>
                  <span className="font-bold text-sm">sayitlikeshay</span>
                </div>
                
                {/* Image Placeholder or Actual Image */}
                <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={post.src} 
                    alt={post.alt}
                    className="w-full h-full object-contain object-top"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* Fallback pattern if image fails to load */}
                  <div className="hidden absolute inset-0 flex items-center justify-center font-bold text-foreground/40 text-xl text-center px-4 bg-quaternary">
                    Screenshot<br/>{post.src.split('/').pop()}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
