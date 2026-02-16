import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors",
                {
                    "bg-slate-900 text-slate-50 hover:bg-slate-900/80": variant === "default",
                    "bg-slate-100 text-slate-900 hover:bg-slate-100/80": variant === "secondary",
                    "border border-slate-200 text-slate-900": variant === "outline",
                },
                className
            )}
            {...props}
        />
    )
}

export { Badge }
