import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  showArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", showArrow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-foreground px-6 py-3 text-base font-bold transition-all",
          "active:translate-x-0 active:translate-y-0 active:shadow-pop-active",
          variant === "primary" && [
            "bg-accent text-accent-foreground shadow-pop",
            "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-pop-hover",
          ],
          variant === "secondary" && [
            "bg-transparent text-foreground",
            "hover:bg-tertiary",
          ],
          className
        )}
        style={{
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          transitionDuration: "300ms",
        }}
        {...props}
      >
        {children}
        {showArrow && variant === "primary" && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-accent">
            <ArrowRight className="h-4 w-4" />
          </span>
        )}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
