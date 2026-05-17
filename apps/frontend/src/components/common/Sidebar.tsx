import {
  BarChart3,
  Brain,
  CalendarDays,
  GitBranch,
  Inbox,
  LayoutDashboard,
  ListTodo,
  Settings,
  ShieldAlert
} from "lucide-react";

const items = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Inbox", icon: Inbox },
  { label: "Tasks", icon: ListTodo },
  { label: "Blockers", icon: ShieldAlert },
  { label: "Meetings", icon: CalendarDays },
  { label: "Work Graph", icon: GitBranch },
  { label: "AI Assistant", icon: Brain },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings }
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-slate-800 bg-slate-950 text-white p-5">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">WorkGraph AI</h1>
        <p className="text-sm text-slate-500 mt-1">Enterprise command center</p>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-900 hover:text-white transition"
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
