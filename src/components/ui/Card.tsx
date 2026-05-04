import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  shadowColor?: "slate" | "pink" | "yellow"
}

export function Card({ className, shadowColor = "slate", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border-2 border-foreground rounded-xl p-6 transition-all duration-300",
        shadowColor === "slate" && "shadow-pop",
        shadowColor === "pink" && "shadow-pop-pink",
        shadowColor === "yellow" && "shadow-pop-yellow",
        "hover:-rotate-1 hover:scale-[1.02]",
        className
      )}
      style={{
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
      {...props}
    >
      {children}
    </div>
  )
}
