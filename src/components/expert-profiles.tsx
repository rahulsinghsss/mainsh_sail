import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, Wrench, Settings } from "lucide-react"

interface Expert {
    id: number
    name: string
    image: string
    level: "L1" | "L2" | "L3" | "OEM"
    title: string
    department: string
    experience: string
    skills: Array<{ name: string; value?: string }>
    badges?: Array<{ icon: any; text: string }>
}

const experts: Expert[] = [
    {
        id: 1,
        name: "Rajesh Kumar",
        image: "/experts/rajesh.jpg",
        level: "L1",
        title: "Maintenance Specialist",
        department: "Hot Strip Mill",
        experience: "8 Years Experience",
        skills: [
            { name: "Troubleshooting", value: "50%" }
        ]
    },
    {
        id: 2,
        name: "Anita Sharma",
        image: "/experts/anita.jpg",
        level: "L2",
        title: "Process Optimization Expert",
        department: "Cold Rolling",
        experience: "12 Years Experience",
        skills: [
            { name: "RCA Projects" },
            { name: "Lean Six Sigma" }
        ]
    },
    {
        id: 3,
        name: "Vikram Singh",
        image: "/experts/vikram.jpg",
        level: "L3",
        title: "Chief Metallurgist",
        department: "Steelmaking",
        experience: "20+ Years Experience",
        skills: [],
        badges: [
            { icon: CheckCircle2, text: "Shutdowns | Standards Authored" }
        ]
    },
    {
        id: 4,
        name: "OEM Specialist",
        image: "/experts/oem.jpg",
        level: "OEM",
        title: "External Expert",
        department: "Automation Systems (Vendor)",
        experience: "",
        skills: [
            { name: "PLC" },
            { name: "Robotics Specialist" }
        ],
        badges: [
            { icon: AlertCircle, text: "NDA Required" }
        ]
    }
]

const levelConfig = {
    L1: { color: "bg-green-600", text: "L1 Practitioner" },
    L2: { color: "bg-blue-600", text: "L2 Advanced" },
    L3: { color: "bg-orange-500", text: "L3 Master" },
    OEM: { color: "bg-slate-500", text: "OEM" }
}

export function ExpertProfiles() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experts.map((expert) => (
                <Card key={expert.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4 mb-4">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                                {expert.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            {expert.level === "OEM" && (
                                <div className="absolute -bottom-1 -right-1 bg-slate-600 rounded-full p-1.5">
                                    <Settings className="h-3 w-3 text-white" />
                                </div>
                            )}
                        </div>

                        {/* Name and Level */}
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-lg font-bold text-slate-900">{expert.name}</h3>
                                <Badge className={`${levelConfig[expert.level].color} text-white hover:${levelConfig[expert.level].color}`}>
                                    {levelConfig[expert.level].text}
                                </Badge>
                            </div>
                            <p className="text-sm font-semibold text-slate-700">{expert.title}</p>
                            <p className="text-xs text-slate-500 mt-0.5">
                                {expert.department}
                                {expert.experience && ` | ${expert.experience}`}
                            </p>
                        </div>
                    </div>

                    {/* Skills/Attributes */}
                    <div className="mb-4 min-h-[32px]">
                        {expert.badges && expert.badges.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-2">
                                {expert.badges.map((badge, idx) => (
                                    <div key={idx} className="flex items-center gap-1 text-xs text-slate-600">
                                        <badge.icon className="h-4 w-4" />
                                        <span className="font-medium">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                        {expert.skills && expert.skills.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {expert.skills.map((skill, idx) => (
                                    <div key={idx} className="flex items-center gap-1 text-xs text-slate-600">
                                        {idx === 0 && <Wrench className="h-3.5 w-3.5" />}
                                        {idx > 0 && <Settings className="h-3.5 w-3.5" />}
                                        <span className="font-medium">
                                            {skill.name}
                                            {skill.value && ` | ${skill.value}`}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* View Profile Button */}
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        View Profile
                    </Button>
                </Card>
            ))}
        </div>
    )
}
