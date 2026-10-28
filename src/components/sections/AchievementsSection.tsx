"use client"

import * as React from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { Badge } from "@/components/ui/Badge"
import { ACHIEVEMENTS, CERTIFICATION } from "@/data/content"
import {
  CheckCircle2,
  Award,
  ExternalLink,
  Download,
  Eye,
  X,
  Sparkles,
  ShieldCheck,
  Calendar,
} from "lucide-react"
import Image from "next/image"

export function AchievementsSection() {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isModalOpen, setIsModalOpen] = React.useState(false)

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false)
      }
    }
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isModalOpen])

  return (
    <section className="py-24 bg-muted border-y-2 border-foreground relative overflow-hidden" id="achievements">
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        {/* Top Grid: Track Record & Achievements */}
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

        {/* ═══ FEATURED CERTIFICATION SPOTLIGHT ═══ */}
        <motion.div
          id="certifications"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-card border-4 border-foreground rounded-3xl p-6 sm:p-8 lg:p-12 shadow-[8px_8px_0px_0px_#8B5CF6] relative overflow-hidden"
        >
          {/* Decorative background shape */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-foreground/10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge color="yellow" className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs sm:text-sm">
                <Sparkles className="w-4 h-4 text-foreground" />
                Official Certification
              </Badge>
              <Badge color="mint" className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-foreground" />
                be10X Verified
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-foreground/10">
              <Calendar className="w-4 h-4 text-accent" />
              Issued: {CERTIFICATION.issuedDate}
            </div>
          </div>

          {/* Main content grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Certificate Preview Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                onClick={() => setIsModalOpen(true)}
                className="group relative w-full aspect-[770/501] max-w-md bg-white border-3 border-foreground rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_#1E293B] cursor-pointer hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#F472B6] transition-all duration-300"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setIsModalOpen(true)
                  }
                }}
                aria-label="Click to enlarge certificate preview"
              >
                <Image
                  src={CERTIFICATION.imageUrl}
                  alt={`${CERTIFICATION.title} awarded to ${CERTIFICATION.recipient}`}
                  fill
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center border-2 border-white shadow-pop">
                    <Eye className="w-6 h-6" />
                  </div>
                  <span className="font-heading font-bold text-sm tracking-wide bg-foreground/80 px-3 py-1 rounded-full">
                    Click to Enlarge
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-muted-foreground">
                <Eye className="w-3.5 h-3.5 text-accent" />
                <span>Tap or click preview to view full certificate</span>
              </div>
            </div>

            {/* Right: Details & Certified Competencies */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Credential of Completion</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-tight">
                  {CERTIFICATION.title}
                </h3>
                <p className="mt-2 text-base sm:text-lg text-foreground/80 font-medium leading-relaxed">
                  Awarded to <strong className="text-foreground font-extrabold">{CERTIFICATION.recipient}</strong> (Shay) by{" "}
                  <strong className="text-accent font-extrabold">{CERTIFICATION.issuer}</strong> for mastery in cutting-edge AI productivity, prompt workflows, and automated intelligence.
                </p>
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="flex flex-col gap-3">
                <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">
                  Certified Competencies:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CERTIFICATION.capabilities.map((cap, i) => {
                    const bgColors = ["bg-tertiary/20", "bg-secondary/20", "bg-quaternary/20"]
                    const borderColors = ["border-tertiary", "border-secondary", "border-quaternary"]
                    return (
                      <div
                        key={i}
                        className={`p-3.5 rounded-xl border-2 ${borderColors[i % 3]} ${bgColors[i % 3]} flex flex-col gap-1`}
                      >
                        <span className="font-heading font-extrabold text-sm text-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                          {cap.title}
                        </span>
                        <p className="text-xs text-foreground/75 leading-snug">
                          {cap.desc}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CERTIFICATION.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold text-sm sm:text-base px-6 py-3 rounded-full border-2 border-foreground shadow-[4px_4px_0px_0px_#1E293B] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#1E293B] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#1E293B] transition-all"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Official PDF
                </a>

                <a
                  href={CERTIFICATION.pdfUrl}
                  download="Shailesh-Mehta-AI-Tool-Certificate.pdf"
                  className="inline-flex items-center gap-2 bg-white text-foreground font-bold text-sm sm:text-base px-5 py-3 rounded-full border-2 border-foreground shadow-[3px_3px_0px_0px_#1E293B] hover:bg-tertiary hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#1E293B] active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#1E293B] transition-all"
                  style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-muted text-foreground/80 hover:text-foreground font-bold text-sm sm:text-base px-5 py-3 rounded-full border-2 border-foreground/30 hover:border-foreground hover:bg-white transition-all"
                >
                  <Eye className="w-4 h-4" />
                  Interactive Preview
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══ INTERACTIVE CERTIFICATE LIGHTBOX MODAL ═══ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-foreground/85 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label="Certificate Preview Modal"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-background border-4 border-foreground rounded-3xl p-4 sm:p-6 shadow-[10px_10px_0px_0px_#F472B6] overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-foreground/10 gap-3">
                <div className="flex items-center gap-2">
                  <Badge color="yellow">be10X Certified</Badge>
                  <h4 className="font-heading font-extrabold text-base sm:text-lg text-foreground truncate">
                    {CERTIFICATION.title} — {CERTIFICATION.recipient}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl border-2 border-foreground bg-white hover:bg-secondary text-foreground hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Certificate Image */}
              <div className="relative my-4 w-full aspect-[770/501] bg-white border-2 border-foreground rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                <Image
                  src={CERTIFICATION.imageUrl}
                  alt={`${CERTIFICATION.title} - ${CERTIFICATION.recipient}`}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 900px"
                  priority
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-3 border-t-2 border-foreground/10 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
                <div className="text-muted-foreground font-medium">
                  Verified by <strong className="text-foreground">be10X</strong> • Issued on{" "}
                  <strong className="text-foreground">{CERTIFICATION.issuedDate}</strong>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={CERTIFICATION.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-accent text-white font-bold px-4 py-2 rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B] hover:-translate-y-0.5 transition-transform"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open PDF in New Tab
                  </a>
                  <a
                    href={CERTIFICATION.pdfUrl}
                    download="Shailesh-Mehta-AI-Tool-Certificate.pdf"
                    className="inline-flex items-center gap-1.5 bg-white text-foreground font-bold px-4 py-2 rounded-full border-2 border-foreground shadow-[2px_2px_0px_0px_#1E293B] hover:bg-tertiary hover:-translate-y-0.5 transition-transform"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
