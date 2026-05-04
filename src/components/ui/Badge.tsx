import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "accent" | "secondary" | "tertiary" | "quaternary" | "violet" | "pink" | "yellow" | "mint"
}

export function Badge({ className, color = "accent", children, ...props }: BadgeProps) {
  // Map friendly color names to variables if needed
  const bgColorClass = {
    accent: "bg-accent text-white",
    violet: "bg-accent text-white",
    secondary: "bg-secondary text-foreground",
    pink: "bg-secondary text-foreground",
    tertiary: "bg-tertiary text-foreground",
    yellow: "bg-tertiary text-foreground",
    quaternary: "bg-quaternary text-foreground",
    mint: "bg-quaternary text-foreground",
  }[color]

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border-2 border-foreground px-3 py-1 text-xs font-bold shadow-[2px_2px_0px_0px_#1E293B]",
        bgColorClass,
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
