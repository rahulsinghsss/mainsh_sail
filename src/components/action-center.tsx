import * as React from "react"
import {
    Plus,
    Share2,
    Download,
    MessageSquare,
    Database,
    Lightbulb
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const actions = [
    { title: "New Challenge", icon: Plus, color: "bg-blue-600", text: "text-white" },
    { title: "Share Knowledge", icon: Share2, color: "bg-slate-100", text: "text-slate-900" },
    { title: "Report Issue", icon: MessageSquare, color: "bg-slate-100", text: "text-slate-900" },
    { title: "New Ideation", icon: Lightbulb, color: "bg-slate-100", text: "text-slate-900" },
]

export function ActionCenter() {
    return (
        <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-3">
                    {actions.map((action) => (
                        <Button
                            key={action.title}
                            variant="ghost"
                            className={cn(
                                "flex h-24 flex-col items-center justify-center gap-2 rounded-xl border border-slate-100 transition-all hover:border-blue-200 hover:bg-blue-50/50",
                                action.color.startsWith("bg-blue") && "border-blue-100 bg-blue-50/30"
                            )}
                        >
                            <div className={cn("rounded-lg p-2", action.color, action.text)}>
                                <action.icon className="h-5 w-5" />
                            </div>
                            <span className="text-xs font-semibold text-slate-700">{action.title}</span>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
