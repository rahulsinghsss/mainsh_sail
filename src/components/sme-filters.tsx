"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const filterGroups = [
    { label: "Domain", hasDropdown: false },
    { label: "Sub-Domain", hasDropdown: true },
    { label: "Equipment", hasDropdown: true },
    { label: "Plant Experience", hasDropdown: true },
    { label: "Certification", hasDropdown: true },
    { label: "Shift Exposure", hasDropdown: true },
    { label: "Language", hasDropdown: true },
];

const smeLevels = [
    { label: "L1 Practitioner", value: "L1" },
    { label: "L2 Advanced", value: "L2" },
    { label: "L3 Master", value: "L3" },
];

interface SmeFiltersProps {
    onFilterChange?: (filters: { levels: string[] }) => void;
}

export function SmeFilters({ onFilterChange }: SmeFiltersProps) {
    const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
    const [checkedFilters, setCheckedFilters] = useState<Record<string, boolean>>({});
    const [selectedLevels, setSelectedLevels] = useState<Record<string, boolean>>({});

    const toggleDropdown = (label: string) => {
        setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const toggleFilter = (label: string) => {
        setCheckedFilters((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const toggleLevel = (value: string) => {
        const updated = { ...selectedLevels, [value]: !selectedLevels[value] };
        setSelectedLevels(updated);
        onFilterChange?.({ levels: Object.keys(updated).filter((k) => updated[k]) });
    };

    return (
        <div className="w-56 shrink-0">
            <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                {/* Filters Header */}
                <div className="px-4 py-3 border-b border-slate-100">
                    <h3 className="text-sm font-semibold text-slate-800">Filters</h3>
                </div>

                <div className="px-4 py-3 space-y-1">
                    {filterGroups.map(({ label, hasDropdown }) => (
                        <div key={label}>
                            <div
                                className="flex items-center justify-between py-2 cursor-pointer group"
                                onClick={() => hasDropdown && toggleDropdown(label)}
                            >
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id={`filter-${label}`}
                                        checked={!!checkedFilters[label]}
                                        onChange={() => toggleFilter(label)}
                                        onClick={(e) => e.stopPropagation()}
                                        className="h-4 w-4 rounded border-slate-300 text-blue-600 accent-blue-600 cursor-pointer"
                                    />
                                    <label
                                        htmlFor={`filter-${label}`}
                                        className="text-sm text-slate-700 cursor-pointer select-none group-hover:text-slate-900"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        {label}
                                    </label>
                                </div>
                                {hasDropdown && (
                                    <span className="text-slate-400">
                                        {openDropdowns[label] ? (
                                            <ChevronUp className="h-4 w-4" />
                                        ) : (
                                            <ChevronDown className="h-4 w-4" />
                                        )}
                                    </span>
                                )}
                            </div>

                            {/* Dropdown placeholder */}
                            {hasDropdown && openDropdowns[label] && (
                                <div className="ml-6 mb-1 border border-slate-100 rounded-md bg-slate-50 px-3 py-2">
                                    <p className="text-xs text-slate-400 italic">No options available</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-100" />

                {/* SME Level */}
                <div className="px-4 py-3">
                    <h3 className="text-sm font-semibold text-slate-800 mb-2">SME Level</h3>
                    <div className="space-y-2">
                        {smeLevels.map(({ label, value }) => (
                            <div key={value} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id={`level-${value}`}
                                    checked={!!selectedLevels[value]}
                                    onChange={() => toggleLevel(value)}
                                    className="h-4 w-4 rounded border-slate-300 text-blue-600 accent-blue-600 cursor-pointer"
                                />
                                <label
                                    htmlFor={`level-${value}`}
                                    className="text-sm text-slate-700 cursor-pointer select-none hover:text-slate-900"
                                >
                                    <span className="font-semibold">{value}</span> {label.replace(value + " ", "")}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
