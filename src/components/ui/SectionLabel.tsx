import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "violet" | "pink" | "yellow" | "mint"
}

export function SectionLabel({ children, className, color = "violet", ...props }: SectionLabelProps) {
  const svgColor = {
    violet: "#8B5CF6",
    pink: "#F472B6",
    yellow: "#FBBF24",
    mint: "#34D399",
  }[color]

  return (
    <div className={cn("inline-flex flex-col items-start gap-1", className)} {...props}>
      <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
        {children}
      </span>
      <svg
        width="48"
        height="6"
        viewBox="0 0 48 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12"
      >
        <path
          d="M1 4.5C2.5 4.5 4 1.5 6 1.5C8 1.5 9.5 4.5 11 4.5C12.5 4.5 14 1.5 16 1.5C18 1.5 19.5 4.5 21 4.5C22.5 4.5 24 1.5 26 1.5C28 1.5 29.5 4.5 31 4.5C32.5 4.5 34 1.5 36 1.5C38 1.5 39.5 4.5 41 4.5C42.5 4.5 44 1.5 46 1.5"
          stroke={svgColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
