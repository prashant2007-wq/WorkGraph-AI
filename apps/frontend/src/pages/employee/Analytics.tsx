import { BarChart3, TrendingUp, AlertTriangle, Users } from "lucide-react";

export default function Analytics() {
  return (
    <section>
      <div>
        <p className="text-blue-400 font-medium">Manager Analytics</p>
        <h1 className="text-4xl font-bold mt-2">Team and project visibility</h1>
        <p className="text-slate-400 mt-3">
          Understand workload, blockers, overdue tasks, and project health from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
        <Card icon={Users} label="Team Members" value="12" />
        <Card icon={AlertTriangle} label="Open Blockers" value="7" />
        <Card icon={TrendingUp} label="Avg Health Score" value="78" />
        <Card icon={BarChart3} label="Tasks Completed" value="42" />
      </div>

      <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-bold">Project Health Overview</h2>

        <div className="mt-6 space-y-5">
          <Health name="Billing Platform" score={68} />
          <Health name="Employee Portal" score={82} />
          <Health name="Growth Analytics" score={74} />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, label, value }: any) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <Icon className="text-blue-400" />
      <p className="text-slate-400 text-sm mt-4">{label}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
}

function Health({ name, score }: { name: string; score: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <p>{name}</p>
        <p className="text-slate-400">{score}/100</p>
      </div>
      <div className="h-3 bg-slate-950 rounded-full mt-2 overflow-hidden">
        <div className="h-full bg-blue-600 rounded-full" style={{ width: `${score}%` }} />
      </div>
    </div>
  );
}
