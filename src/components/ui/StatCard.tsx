import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  label: string
  color?: "violet" | "pink" | "yellow" | "mint"
}

export function StatCard({ value, label, color = "violet", className, ...props }: StatCardProps) {
  const borderColor = {
    violet: "border-l-accent",
    pink: "border-l-secondary",
    yellow: "border-l-tertiary",
    mint: "border-l-quaternary",
  }[color]

  return (
    <div
      className={cn(
        "bg-card border-2 border-foreground border-l-[8px] rounded-xl p-6 shadow-pop transition-all hover:-translate-y-1 hover:shadow-pop-hover",
        borderColor,
        className
      )}
      {...props}
    >
      <div className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
        {value}
      </div>
      <div className="mt-2 text-muted-foreground font-medium">{label}</div>
    </div>
  )
}
