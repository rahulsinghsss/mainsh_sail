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
    Download,
    X,
    Smartphone,
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
    const [showDownloadPopup, setShowDownloadPopup] = React.useState(false);

    return (
        <div className={cn("flex h-screen w-64 flex-col border-r bg-white", className)}>
            <div className="flex h-16 items-center border-b px-6">
                <div className="flex items-center gap-2">
                    <Image
                        src="/sail_logo-removebg-preview.png"
                        alt="SAIL Logo"
                        width={52}
                        height={52}
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
            <div className="flex items-center justify-start border-t py-4 px-4">
                <button
                    onClick={() => setShowDownloadPopup(true)}
                    className="focus:outline-none cursor-pointer"
                    title="Download Sail Samvad App"
                >
                    <Image
                        src="/sail_logo-removebg-preview.png"
                        alt="SAIL Logo"
                        width={80}
                        height={80}
                        className="object-contain hover:opacity-80 transition-opacity"
                    />
                </button>
            </div>

            {/* Download Popup */}
            {showDownloadPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 relative">
                        <button
                            onClick={() => setShowDownloadPopup(false)}
                            className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <div className="flex flex-col items-center gap-4">
                            <div className="bg-blue-50 rounded-full p-4">
                                <Smartphone className="h-10 w-10 text-blue-600" />
                            </div>
                            <div className="text-center">
                                <h2 className="text-lg font-bold text-slate-900">Sail Samvad</h2>
                                <p className="text-sm text-slate-500 mt-1">Download the mobile app for Android</p>
                            </div>
                            <a
                                href="/Sail Samvad .apk"
                                download="Sail Samvad.apk"
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full justify-center"
                                onClick={() => setShowDownloadPopup(false)}
                            >
                                <Download className="h-5 w-5" />
                                Download APK
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
