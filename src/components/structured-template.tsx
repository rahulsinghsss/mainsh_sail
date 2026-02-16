import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const templateData = [
    {
        category: "Operational Knowledge",
        items: [
            "Start-up & shutdown nuances",
            "\"Hidden parameters\"",
            "Critical interlocks",
            "Alarm patterns",
            "Shift-wise variations"
        ]
    },
    {
        category: "Maintenance Knowledge",
        items: [
            "Recurring failure points",
            "Temporary jugaad vs permanent fix",
            "Spares sensitivity",
            "Vendor-specific issues"
        ]
    },
    {
        category: "Process Optimisation Knowledge",
        items: [
            "Fuel rate control tricks",
            "Coke rate balancing",
            "Oxygen enrichment logic",
            "Energy saving practices"
        ]
    },
    {
        category: "Risk & Safety Insights",
        items: [
            "Near-miss cases",
            "Unsafe tendencies observed",
            "Monsoon / winter special precautions"
        ]
    }
]

export function StructuredTemplate() {
    const [openSections, setOpenSections] = useState<number[]>([0, 1, 2, 3])

    const toggleSection = (idx: number) => {
        setOpenSections((prev: number[]) =>
            prev.includes(idx)
                ? prev.filter((i: number) => i !== idx)
                : [...prev, idx]
        )
    }

    return (
        <Card className="border-none shadow-sm overflow-hidden animate-in fade-in slide-in-from-top-4 duration-500">
            <CardHeader className="bg-slate-50 border-b pb-4">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">4</div>
                    <CardTitle className="text-xl font-bold text-slate-900">Structured Documentation Template (Inside Website)</CardTitle>
                </div>
                <p className="mt-2 text-sm text-slate-500 font-medium">Each KT module must follow this template:</p>
            </CardHeader>
            <CardContent className="p-6 space-y-3">
                {templateData.map((category, idx) => {
                    const isOpen = openSections.includes(idx)
                    return (
                        <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleSection(idx)}
                                className="w-full flex items-center justify-between gap-3 p-4 bg-white hover:bg-slate-50 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                                        {idx + 1}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900">{category.category}</h3>
                                </div>
                                <ChevronDown
                                    className={`h-5 w-5 text-slate-500 transition-transform duration-200 ${
                                        isOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>
                            {isOpen && (
                                <div className="px-4 pb-4 bg-slate-50">
                                    <ul className="ml-8 space-y-2 pt-2">
                                        {category.items.map((item, itemIdx) => (
                                            <li key={itemIdx} className="flex items-start gap-2 text-slate-600">
                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                                                <span className="font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </CardContent>
        </Card>
    )
}
