import { Bell, Bot, Database, Lock, Moon, PlugZap } from "lucide-react";

const settings = [
  {
    icon: Moon,
    title: "Dark Mode",
    desc: "Use dark SaaS dashboard theme.",
    enabled: true
  },
  {
    icon: Bell,
    title: "Priority Notifications",
    desc: "Notify only for urgent tasks, blockers, and reviews.",
    enabled: true
  },
  {
    icon: Bot,
    title: "AI Daily Plan",
    desc: "Generate work priorities from tasks, meetings, and messages.",
    enabled: true
  },
  {
    icon: Lock,
    title: "Secure AI Mode",
    desc: "Prevent sensitive work data from being sent to unauthorized tools.",
    enabled: true
  },
  {
    icon: PlugZap,
    title: "Mock Integrations",
    desc: "Use sample Slack, GitHub, Calendar, and Jira data.",
    enabled: true
  },
  {
    icon: Database,
    title: "Local Demo Data",
    desc: "Run frontend MVP without backend dependency.",
    enabled: true
  }
];

export default function Settings() {
  return (
    <section>
      <div>
        <p className="text-blue-400 font-medium">Settings</p>
        <h1 className="text-4xl font-bold mt-2">Workspace controls</h1>
        <p className="text-slate-400 mt-3">
          Configure how WorkGraph AI prioritizes work, handles notifications, and uses integrations.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {settings.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 flex items-start justify-between gap-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <Icon className="text-blue-400" />
                </div>

                <div>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-slate-400 mt-1">{item.desc}</p>
                </div>
              </div>

              <div className={`h-7 w-12 rounded-full p-1 ${item.enabled ? "bg-blue-600" : "bg-slate-700"}`}>
                <div className={`h-5 w-5 rounded-full bg-white transition ${item.enabled ? "ml-5" : "ml-0"}`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
