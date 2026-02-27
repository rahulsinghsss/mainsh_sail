"use client";

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
    BarChart3,
    BookOpen,
    FileText,
    Home,
    Layers,
    Settings,
    Users,
    Search,
    Bell,
    Box,
    Cpu,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarItems = [
    { name: "Executive View", icon: Home, href: "/dashboard" },
    { name: "Knowledge transfer", icon: BookOpen, href: "/knowledge" },
    { name: "Subject Matter Expert", icon: Cpu, href: "/twins" },
    { name: "Challenges", icon: FileText, href: "/challenges" },
    { name: "Ideation", icon: Layers, href: "/ideation" },
    { name: "Replication", icon: Box, href: "/replication" },
    { name: "Analytics", icon: BarChart3, href: "/analytics" },
]

export function Sidebar({ className }: { className?: string }) {
    const pathname = usePathname();

    return (
        <div className={cn("flex h-screen w-64 flex-col border-r bg-white", className)}>
            <div className="flex h-16 items-center border-b px-6">
                <div className="flex items-center gap-2">
                    <Image
                        src="/sail_logo-removebg-preview.png"
                        alt="SAIL Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                    <span className="text-xl font-bold tracking-tight text-slate-900">SAIL</span>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto py-4 px-3">
                <nav className="space-y-1">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-blue-50 text-blue-700"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                )}
                            >
                                <item.icon className={cn(
                                    "mr-3 h-5 w-5",
                                    isActive ? "text-blue-700" : "text-slate-400 group-hover:text-slate-600"
                                )} />
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}
