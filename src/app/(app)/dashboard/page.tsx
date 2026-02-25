import { MetricsGrid } from "@/components/metrics-grid";
import { ActionCenter } from "@/components/action-center";
import { AlertsFeed } from "@/components/alerts-feed";
import { KnowledgeFeed } from "@/components/knowledge-feed";
import { ReplicationTracker } from "@/components/replication-tracker";
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Executive View</h1>
          <p className="text-slate-500">Welcome back, Manish. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Metrics Row */}
      <MetricsGrid />

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Column - Alerts & Replication */}
        <div className="space-y-8 lg:col-span-2">
          <AlertsFeed />
          <ReplicationTracker />
        </div>

        {/* Right Column - Actions & Knowledge */}
        <div className="space-y-8">
          <ActionCenter />
          <KnowledgeFeed />
        </div>
      </div>
    </div>
  );
}
