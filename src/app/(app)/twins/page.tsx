"use client";

import { useState } from "react";
import { ExpertProfiles } from "@/components/expert-profiles";
import { SmeFilters } from "@/components/sme-filters";

export default function TwinsPage() {
    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

    const handleFilterChange = (filters: { levels: string[] }) => {
        setSelectedLevels(filters.levels);
    };

    return (
        <div className="flex-1 overflow-auto">
            <div className="p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Subject Matter Experts</h1>
                    <p className="mt-2 text-slate-600">Connect with domain experts across different specializations</p>
                </div>

                {/* Layout: Filters sidebar + Expert cards */}
                <div className="flex gap-6 items-start">
                    <SmeFilters onFilterChange={handleFilterChange} />
                    <div className="flex-1">
                        <ExpertProfiles selectedLevels={selectedLevels} />
                    </div>
                </div>
            </div>
        </div>
    );
}
