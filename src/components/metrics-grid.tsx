import * as React from "react"
import {
    FileText,
    AlertCircle,
    TrendingUp,
    CheckCircle2,
    Clock
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const metrics = [
    {
        title: "Open Challenges",
        value: "12",
        description: "New tasks this week",
        icon: FileText,
        color: "text-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Critical Alerts",
        value: "05",
        description: "Requires immediate action",
        icon: AlertCircle,
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        title: "Replications Active",
        value: "28",
        description: "Across all plants",
        icon: TrendingUp,
        color: "text-green-600",
        bg: "bg-green-50",
    },
    {
        title: "K-Objects Shared",
        value: "154",
        description: "Knowledge items",
        icon: CheckCircle2,
        color: "text-purple-600",
        bg: "bg-purple-50",
    },
]

export function MetricsGrid() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
                <Card key={metric.title} className="border-none shadow-sm">
                    <CardContent className="flex items-center p-6">
                        <div className={cn("mr-4 rounded-xl p-3", metric.bg)}>
                            <metric.icon className={cn("h-6 w-6", metric.color)} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">{metric.title}</p>
                            <h3 className="text-2xl font-bold text-slate-900">{metric.value}</h3>
                            <p className="text-xs text-slate-400">{metric.description}</p>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
