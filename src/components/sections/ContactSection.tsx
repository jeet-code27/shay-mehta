"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { LINKS, CONTACT } from "@/data/content"
import { Globe, Link as LinkIcon, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export function ContactSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [status, setStatus] = React.useState<"idle" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("success")
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <section className="py-24 bg-tertiary/10 border-t-2 border-foreground relative overflow-hidden" id="contact">
      <div className="container mx-auto px-4 md:px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel color="pink">Let's Talk</SectionLabel>
            <h2 className="mt-4 font-heading text-4xl font-extrabold text-foreground mb-4">
              {CONTACT.heading}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {CONTACT.intro}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-sm">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="bg-white border-2 border-foreground rounded-lg px-4 py-3 outline-none transition-all focus:-translate-y-1 focus:shadow-pop-pink"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-bold text-sm">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="bg-white border-2 border-foreground rounded-lg px-4 py-3 outline-none transition-all focus:-translate-y-1 focus:shadow-pop-yellow"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-bold text-sm">Company / Business Name (Optional)</label>
                <input
                  type="text"
                  id="company"
                  className="bg-white border-2 border-foreground rounded-lg px-4 py-3 outline-none transition-all focus:-translate-y-1 focus:shadow-pop"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-bold text-sm">What are you looking to achieve?</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="bg-white border-2 border-foreground rounded-lg px-4 py-3 outline-none transition-all focus:-translate-y-1 focus:shadow-pop-active resize-none"
                ></textarea>
              </div>

              <div className="mt-2">
                <Button type="submit" variant="primary" className="w-full sm:w-auto" showArrow>
                  {status === "success" ? "Message Sent!" : "Send Message"}
                </Button>
                <p className="mt-3 text-sm font-bold text-muted-foreground">
                  Free 30-minute strategy session. No obligation.
                </p>
                {status === "success" && (
                  <p className="mt-2 text-sm font-bold text-quaternary">
                    Thanks for reaching out. We'll be in touch soon!
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="relative mt-8">
              <Badge color="mint" className="absolute -top-6 -left-4 transform -rotate-12 z-10 text-base py-2 px-4 shadow-pop">
                Let's grow together 🌱
              </Badge>
              <div className="bg-white border-2 border-foreground rounded-xl p-8 shadow-pop">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full border-2 border-foreground overflow-hidden bg-quaternary">
                    <Image
                      src="/images/shay-mehta.jpeg"
                      alt="Contact Shay Mehta"
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold">Connect with me</h3>
                </div>
                <ul className="flex flex-col gap-6">
                  <li>
                    <a href={LINKS.bizbox} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center border-2 border-foreground group-hover:scale-110 transition-transform">
                        <Globe className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-base group-hover:text-accent transition-colors">bizboxstory.com</span>
                    </a>
                  </li>
                  <li>
                    <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-2 border-foreground group-hover:scale-110 transition-transform">
                        <InstagramIcon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-base group-hover:text-accent transition-colors">@sayitlikeshay</span>
                    </a>
                  </li>
                </ul>

                <hr className="my-6 border-foreground/10 border-2 border-dashed" />

                <ul className="flex flex-col gap-4">
                  {CONTACT.phones.map((phone, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{phone}</span>
                    </li>
                  ))}
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="font-medium text-foreground">{CONTACT.email}</span>
                  </li>
                </ul>

                <hr className="my-6 border-foreground/10 border-2 border-dashed" />
                
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Office Locations</h4>
                <ul className="flex flex-col gap-4">
                  {CONTACT.offices.map((office, i) => {
                    const [country, address] = office.split(" — ")
                    return (
                      <li key={i} className="flex gap-4 items-start">
                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-foreground">{country}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{address}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="bg-foreground text-background rounded-xl p-6 transform rotate-1 mt-auto">
              <p className="font-bold text-center text-lg leading-relaxed">
                "{CONTACT.trustLine}"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
