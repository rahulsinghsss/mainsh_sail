import { ExpertProfiles } from "@/components/expert-profiles"

export default function TwinsPage() {
    return (
        <div className="flex-1 overflow-auto">
            <div className="p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900">Subject Matter Experts</h1>
                    <p className="mt-2 text-slate-600">Connect with domain experts across different specializations</p>
                </div>
                <ExpertProfiles />
            </div>
        </div>
    )
}
