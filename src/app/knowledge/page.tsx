"use client";

import { useState } from "react"
import { KnowledgeFilters } from "@/components/knowledge-filters"
import { StructuredTemplate } from "@/components/structured-template"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, Filter, Plus, FileText, Share2, Sparkles, X } from "lucide-react"

export default function KnowledgePage() {
    const [showTemplate, setShowTemplate] = useState(false)

    return (
        <div className="p-8 space-y-8">
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">My Knowledge</h1>
                    <p className="text-slate-500">Welcome back, Manish. Access and manage your plant knowledge and shared insights.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                        <Plus className="h-4 w-4" />
                        Add Knowledge
                    </Button>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
                {/* Left Column - Vertical Filters */}
                <div className="lg:col-span-1">
                    <KnowledgeFilters onShowInsights={() => setShowTemplate(true)} />

                    <div className="mt-8 space-y-4">
                        <Card className="border-none shadow-sm bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                            <CardContent className="p-6">
                                <Sparkles className="h-8 w-8 text-blue-200" />
                                <h3 className="mt-4 font-bold">Knowledge Score</h3>
                                <p className="text-sm text-blue-100 opacity-80">You've contributed 12 insights this month.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-2xl font-bold">850</span>
                                    <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded-full">+12%</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Right Column - Results Area */}
                <div className="lg:col-span-3 space-y-6">
                    <div className="flex items-center gap-4 rounded-xl border bg-white p-2 shadow-sm">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search within filtered results..."
                                className="h-10 w-full rounded-lg bg-slate-50 pl-10 pr-4 text-sm outline-none focus:bg-white"
                            />
                        </div>
                        <Button variant="outline" size="sm" className="h-10 gap-2">
                            <Filter className="h-4 w-4" />
                            Sort
                        </Button>
                    </div>

                    {showTemplate && (
                        <div className="relative">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-4 top-4 z-10 text-slate-400 hover:text-red-500"
                                onClick={() => setShowTemplate(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                            <StructuredTemplate />
                        </div>
                    )}

                    {!showTemplate && (
                        <div className="grid gap-4 sm:grid-cols-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Card key={i} className="border-none shadow-sm transition-all hover:ring-2 hover:ring-blue-100 group">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex flex-1 gap-4">
                                                <div className="mt-1 rounded-xl bg-blue-50 p-3 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    <FileText className="h-6 w-6" />
                                                </div>
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-bold text-slate-900">Standard Operating Procedure: Blast Furnace Maintenance #{i}</h3>
                                                    <p className="text-sm text-slate-500 line-clamp-2">Detailed guide on maintenance protocols for the primary blast furnace unit at Bokaro Plant...</p>
                                                    <div className="flex items-center gap-4 pt-2">
                                                        <span className="text-xs font-medium text-slate-400">Modified: Feb 12 2024</span>
                                                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Plant Operation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Button variant="ghost" size="icon"><Share2 className="h-4 w-4 text-slate-400" /></Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
