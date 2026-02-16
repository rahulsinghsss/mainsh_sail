import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { label: string; value: string }[];
}

export function Select({ label, options, className, ...props }: SelectProps) {
    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">
                {label}
            </label>
            <div className="relative">
                <select
                    className={cn(
                        "h-10 w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
                        className
                    )}
                    {...props}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
        </div>
    )
}
