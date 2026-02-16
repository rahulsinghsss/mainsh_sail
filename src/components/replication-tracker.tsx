import * as React from "react"
import { ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const data = [
    { id: 1, plant: "Bokaro", efficiency: "94.2%", status: "up", savings: "₹12.5L" },
    { id: 2, plant: "Bhilai", efficiency: "89.5%", status: "down", savings: "₹8.2L" },
    { id: 3, plant: "Rourkela", efficiency: "92.1%", status: "up", savings: "₹10.8L" },
]

export function ReplicationTracker() {
    return (
        <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-lg font-bold">Replication Tracker</CardTitle>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5 text-slate-400" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b text-slate-400 font-medium">
                                <th className="pb-3 pr-4">Plant Name</th>
                                <th className="pb-3 pr-4">Efficiency</th>
                                <th className="pb-3 pr-4">Savings</th>
                                <th className="pb-3 text-right">Trend</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {data.map((row) => (
                                <tr key={row.id} className="group">
                                    <td className="py-3 pr-4 font-semibold text-slate-900">{row.plant}</td>
                                    <td className="py-3 pr-4 text-slate-600">{row.efficiency}</td>
                                    <td className="py-3 pr-4 text-slate-600">{row.savings}</td>
                                    <td className="py-3 text-right">
                                        <div className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 ${row.status === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                            {row.status === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                                            <span className="text-[10px] font-bold">4.2%</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    )
}
