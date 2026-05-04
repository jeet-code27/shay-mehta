import * as React from "react"
import Link from "next/link"
import { LINKS, FOOTER } from "@/data/content"

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

export function Footer() {
  return (
    <footer className="bg-background py-8 border-t-2 border-foreground relative overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4 bg-tertiary rounded-full opacity-50" />
      <div className="absolute right-20 top-1/3 w-3 h-3 bg-secondary transform rotate-45 opacity-50" />
      <div className="absolute left-1/3 bottom-2 w-2 h-2 bg-accent opacity-50" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-sm">
            <p className="font-bold text-foreground text-lg">
              {FOOTER.tagline}
            </p>
            <p className="font-bold text-foreground/60 text-sm">
              © {new Date().getFullYear()} Shay Mehta. Built with purpose.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="#" className="font-bold text-sm text-foreground/80 hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <a href={LINKS.bizbox} target="_blank" rel="noopener noreferrer" className="font-bold text-sm text-foreground/80 hover:text-accent transition-colors">
              BizBox Story
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-accent transition-colors">
              <InstagramIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
