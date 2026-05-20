import { Mail, MapPin, ShieldCheck, UserRound } from "lucide-react";

export default function Profile() {
  return (
    <section>
      <div>
        <p className="text-blue-400 font-medium">Profile</p>
        <h1 className="text-4xl font-bold mt-2">Employee workspace identity</h1>
        <p className="text-slate-400 mt-3">
          Your profile connects tasks, messages, meetings, blockers, and approvals across WorkGraph AI.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="h-24 w-24 rounded-3xl bg-blue-600 flex items-center justify-center text-4xl font-bold">
            P
          </div>

          <h2 className="text-2xl font-bold mt-5">Prashant Bisht</h2>
          <p className="text-slate-400 mt-1">Frontend Engineer Intern</p>

          <div className="mt-6 space-y-4">
            <Info icon={Mail} label="Email" value="employee@workgraph.ai" />
            <Info icon={MapPin} label="Location" value="Sonipat, Haryana" />
            <Info icon={ShieldCheck} label="Role" value="Employee" />
          </div>
        </div>

        <div className="xl:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">Work Context</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <Metric label="Assigned Tasks" value="12" />
            <Metric label="Open Blockers" value="3" />
            <Metric label="Pending Reviews" value="4" />
          </div>

          <div className="mt-8">
            <h3 className="font-semibold">Connected Work Signals</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Signal name="Slack Messages" status="Mock connected" />
              <Signal name="GitHub PRs" status="Mock connected" />
              <Signal name="Calendar Meetings" status="Mock connected" />
              <Signal name="Jira Tasks" status="Mock connected" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }: any) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="text-blue-400" size={19} />
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-sm text-slate-200">{value}</p>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

function Signal({ name, status }: { name: string; status: string }) {
  return (
    <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4">
      <p className="font-medium">{name}</p>
      <p className="text-sm text-emerald-400 mt-1">{status}</p>
    </div>
  );
}
