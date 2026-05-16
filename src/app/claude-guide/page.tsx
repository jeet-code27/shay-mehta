import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "What is Claude? Free Guide",
  description:
    "A free guide for people who are done being left behind. ChatGPT had its moment — Claude is what came next. Eight pages. Fifteen minutes. Zero fluff.",
  alternates: {
    canonical: "https://www.shaymehta.com/claude-guide",
  },
  openGraph: {
    title: "What is Claude? Free Guide — @sayitlikeshay",
    description: "A free guide for people who are done being left behind. ChatGPT had its moment — Claude is what came next.",
    url: "https://www.shaymehta.com/claude-guide",
    type: "website",
    images: [
      {
        url: "/images/claude-guide-ebook-cover.png",
        width: 800,
        height: 600,
        alt: "Claude AI Free Guide by Shay Mehta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is Claude? Free Guide — @sayitlikeshay",
    description: "A free guide for people who are done being left behind. ChatGPT had its moment — Claude is what came next.",
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
