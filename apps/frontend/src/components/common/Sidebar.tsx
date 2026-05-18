import { NavLink } from "react-router-dom";
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
  { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Inbox", icon: Inbox, path: "/inbox" },
  { label: "Tasks", icon: ListTodo, path: "/tasks" },
  { label: "Blockers", icon: ShieldAlert, path: "/blockers" },
  { label: "Meetings", icon: CalendarDays, path: "/meetings" },
  { label: "Work Graph", icon: GitBranch, path: "/work-graph" },
  { label: "AI Assistant", icon: Brain, path: "/ai-assistant" },
  { label: "Analytics", icon: BarChart3, path: "/analytics" },
  { label: "Settings", icon: Settings, path: "/settings" }
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
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-900 hover:text-white"
                }`
              }
            >
              <Icon size={19} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
