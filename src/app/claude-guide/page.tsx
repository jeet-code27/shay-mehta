import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "What is Claude? Free 8-Page Guide for Entrepreneurs & Leaders",
  description:
    "Free Claude AI guide by Shay Mehta (@sayitlikeshay). Discover how Claude transforms business workflows, sales copywriting, and research in 15 minutes. Zero fluff.",
  keywords: [
    "Claude AI Guide",
    "What is Claude",
    "Shay Mehta Claude Guide",
    "Anthropic Claude Tutorial",
    "AI for Business",
    "sayitlikeshay",
  ],
  alternates: {
    canonical: "/claude-guide",
  },
  openGraph: {
    title: "What is Claude? Free Guide by Shay Mehta (@sayitlikeshay)",
    description:
      "A free, zero-fluff 8-page guide on Claude AI. Discover how entrepreneurs and leaders are using Claude to save hours every single week.",
    url: "https://shaymehta.com/claude-guide",
    type: "article",
    images: [
      {
        url: "/images/claude-guide-ebook-cover.png",
        width: 800,
        height: 600,
        alt: "What is Claude AI - Free Guide by Shay Mehta (@sayitlikeshay)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Claude? Free Guide by Shay Mehta (@sayitlikeshay)",
    description:
      "A free, zero-fluff 8-page guide on Claude AI. Eight pages. Fifteen minutes. Real business use-cases.",
    creator: "@sayitlikeshay",
    images: ["/images/claude-guide-ebook-cover.png"],
  },
}

const ClaudeGuidePage = dynamic(
  () => import("./ClaudeGuidePage").then((mod) => mod.ClaudeGuidePage),
  { ssr: true }
)

export default function Page() {
  return <ClaudeGuidePage />
}
