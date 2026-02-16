import * as React from "react"
import { Search, Bell, Menu, User, Factory, Building2, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header({ className }: { className?: string }) {
    return (
        <header className={cn("flex h-16 items-center justify-between border-b bg-white px-6", className)}>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                </Button>
                <div className="flex items-center gap-3 rounded-lg border bg-slate-50 px-3 py-1.5 text-sm font-medium">
                    <Building2 className="h-4 w-4 text-slate-500" />
                    <span>Bokaro Steel Plant</span>
                    <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
            </div>

            <div className="flex flex-1 items-center justify-center px-6 max-w-xl">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search knowledge, challenges, twins..."
                        className="h-10 w-full rounded-full border bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-slate-600" />
                    <span className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full bg-red-500 border-2 border-white" />
                </Button>
                <div className="ml-2 flex items-center gap-3">
                    <div className="hidden text-right lg:block">
                        <p className="text-sm font-semibold text-slate-900 leading-tight">Manish Singh</p>
                        <p className="text-xs text-slate-500">Operation Head</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center border border-slate-300">
                        <User className="h-5 w-5 text-slate-600" />
                    </div>
                </div>
            </div>
        </header>
    )
}
