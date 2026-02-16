import * as React from "react"
import { BookOpen, User, Calendar } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const items = [
    {
        id: 1,
        title: "Optimizing Blast Furnace Maintenance",
        author: "Amit Singh",
        date: "Feb 12 2024",
        tags: ["Maintenance", "Bokaro"],
    },
    {
        id: 2,
        title: "New Safety Protocols for Casting Plant",
        author: "Priya Sharma",
        date: "Feb 10 2024",
        tags: ["Safety", "Protocols"],
    },
]

export function KnowledgeFeed() {
    return (
        <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-lg font-bold">Knowledge Feed</CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    Discover
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {items.map((item) => (
                    <div key={item.id} className="space-y-2 rounded-xl border border-slate-50 p-4 transition-colors hover:bg-slate-50/50">
                        <div className="flex items-center gap-2">
                            <div className="rounded-lg bg-blue-50 p-1.5">
                                <BookOpen className="h-4 w-4 text-blue-600" />
                            </div>
                            <h4 className="text-sm font-semibold text-slate-900 leading-tight">{item.title}</h4>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-xs text-slate-500">
                                    <User className="h-3 w-3" />
                                    {item.author}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-slate-400">
                                    <Calendar className="h-3 w-3" />
                                    {item.date}
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
