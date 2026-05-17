import { AlertTriangle, CalendarDays, CheckCircle2, GitPullRequest, Inbox, Zap } from "lucide-react";

const priorities = [
  {
    title: "Fix checkout payment bug",
    meta: "Billing Platform • Due today",
    tag: "Urgent"
  },
  {
    title: "Review onboarding PR #48",
    meta: "Employee Portal • Waiting 2 days",
    tag: "Review"
  },
  {
    title: "Prepare notes for 4 PM sync",
    meta: "Growth Analytics Project",
    tag: "Meeting"
  }
];

const blockers = [
  "Backend API response format not finalized",
  "Design assets pending from product team",
  "PR #48 waiting for reviewer approval"
];

export default function Dashboard() {
  return (
    <section>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-blue-400 font-medium">Good morning, Prashant</p>
          <h1 className="text-4xl font-bold mt-2">Your AI work command center</h1>
          <p className="text-slate-400 mt-3 max-w-2xl">
            WorkGraph AI has prioritized your day based on deadlines, blockers, meetings, inbox signals, and project health.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4">
          <p className="text-sm text-emerald-300">Project Health</p>
          <p className="text-3xl font-bold mt-1">78/100</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
        <StatCard icon={Zap} label="Today Priorities" value="6" />
        <StatCard icon={AlertTriangle} label="Active Blockers" value="3" />
        <StatCard icon={Inbox} label="Important Updates" value="12" />
        <StatCard icon={GitPullRequest} label="Pending PRs" value="4" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">
        <div className="xl:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">AI Daily Plan</h2>
          <p className="text-slate-400 text-sm mt-1">Recommended focus order for today.</p>

          <div className="mt-6 space-y-4">
            {priorities.map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 flex items-center justify-between">
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-1">{item.meta}</p>
                  </div>
                </div>
                <span className="rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-sm">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">Detected Blockers</h2>
          <p className="text-slate-400 text-sm mt-1">Risks slowing execution.</p>

          <div className="mt-6 space-y-4">
            {blockers.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-red-500/10 border border-red-500/20 p-4">
                <AlertTriangle className="text-red-400 shrink-0" size={20} />
                <p className="text-sm text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CalendarDays size={21} />
            Upcoming Meetings
          </h2>

          <div className="mt-5 space-y-4">
            <Meeting time="2:30 PM" title="Product Sync" />
            <Meeting time="4:00 PM" title="Checkout Bug Review" />
            <Meeting time="5:30 PM" title="Sprint Planning" />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <CheckCircle2 size={21} />
            What WorkGraph Solved
          </h2>

          <ul className="mt-5 space-y-3 text-slate-300">
            <li>• Combined scattered work updates into one command center.</li>
            <li>• Detected blocked tasks before deadlines slip.</li>
            <li>• Converted noisy updates into clear daily priorities.</li>
            <li>• Gave managers project health visibility.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value }: any) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <Icon className="text-blue-400" />
      <p className="text-slate-400 text-sm mt-4">{label}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
  );
}

function Meeting({ time, title }: { time: string; title: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-950 border border-slate-800 p-4">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-slate-400">{time}</p>
    </div>
  );
}
