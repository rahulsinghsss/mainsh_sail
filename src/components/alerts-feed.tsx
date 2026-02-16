import * as React from "react"
import { AlertTriangle, Clock, ChevronRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const alerts = [
    {
        id: 1,
        title: "Bokaro-Plant #3 Downtime",
        type: "Critical",
        time: "10 mins ago",
        status: "High",
    },
    {
        id: 2,
        title: "Stock shortage for spare part-ID #28",
        type: "Inventory",
        time: "45 mins ago",
        status: "Medium",
    },
    {
        id: 3,
        title: "Unresolved safety audit at Plant #2",
        type: "Safety",
        time: "2 hours ago",
        status: "High",
    },
]

export function AlertsFeed() {
    return (
        <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-lg font-bold">Critical Alerts</CardTitle>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                    View all
                </Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-4 rounded-xl border border-slate-50 p-3 transition-colors hover:bg-slate-50/50">
                        <div className={`mt-1 rounded-full p-1.5 ${alert.status === 'High' ? 'bg-red-100 text-red-600' : 'bg-amber-100 text-amber-600'}`}>
                            <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                            <p className="text-sm font-semibold text-slate-900">{alert.title}</p>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-slate-500">{alert.type}</span>
                                <span className="flex items-center gap-1 text-xs text-slate-400">
                                    <Clock className="h-3 w-3" />
                                    {alert.time}
                                </span>
                            </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300" />
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}

// Badge mock for now since shadcn CLI failed
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>{children}</span>
}
