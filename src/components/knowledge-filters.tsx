"use client";

import React from "react"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const filterData = {
    plant: [
        { label: "Bokaro Steel Plant", value: "bokaro" },
        { label: "Bhilai Steel Plant", value: "bhilai" },
        { label: "Rourkela Steel Plant", value: "rourkela" },
        { label: "Durgapur Steel Plant", value: "durgapur" },
    ],
    dept: [
        { label: "Blast Furnace", value: "bf" },
        { label: "Steel Melting Shop", value: "sms" },
        { label: "Hot Strip Mill", value: "hsm" },
        { label: "Sinter Plant", value: "sinter" },
    ],
    area: [
        { label: "Production", value: "production" },
        { label: "Maintenance", value: "maintenance" },
        { label: "Quality Control", value: "quality" },
        { label: "Safety", value: "safety" },
    ],
    person: [
        { label: "Manish Singh", value: "manish" },
        { label: "Gowtham Krishna", value: "gowtham" },
        { label: "Sachin Kumar", value: "sachin" },
    ]
}

export function KnowledgeFilters({ onShowInsights }: { onShowInsights?: () => void }) {
    return (
        <Card className="border-none shadow-sm">
            <CardHeader className="pb-3 px-4">
                <CardTitle className="text-sm font-bold text-slate-900 uppercase tracking-tight">Search Filters</CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4 space-y-4">
                <Select label="Plant" options={filterData.plant} defaultValue="bokaro" />
                <Select label="Department" options={filterData.dept} defaultValue="bf" />
                <Select label="Area" options={filterData.area} defaultValue="production" />
                <Select label="Person" options={filterData.person} defaultValue="manish" />

                <div className="pt-2 border-t">
                    <Button
                        onClick={onShowInsights}
                        className="w-full bg-slate-900 hover:bg-black text-white rounded-lg py-6 font-bold flex flex-col items-center justify-center gap-1 shadow-md transition-all active:scale-95"
                    >
                        <span className="text-sm tracking-wide">Manish Insights</span>
                        <span className="text-[10px] opacity-60 font-normal">Click to see KT Template</span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
