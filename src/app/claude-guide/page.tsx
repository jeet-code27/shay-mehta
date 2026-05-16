import type { Metadata } from "next"
import dynamic from "next/dynamic"

export const metadata: Metadata = {
  title: "What is Claude? Free Guide — Shay Mehta (@sayitlikeshay)",
  description:
    "A free guide for people who are done being left behind. ChatGPT had its moment — Claude is what came next. Eight pages. Fifteen minutes. Zero fluff.",
}

const ClaudeGuidePage = dynamic(
  () => import("./ClaudeGuidePage").then((mod) => mod.ClaudeGuidePage),
  { ssr: true }
)

export default function Page() {
  return <ClaudeGuidePage />
}
