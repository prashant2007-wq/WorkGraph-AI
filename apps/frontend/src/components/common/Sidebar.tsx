interface SidebarProps {
  role?: 'employee' | 'manager' | 'admin'
}

export default function Sidebar({ role = 'employee' }: SidebarProps) {
  return (
    <aside className="w-64 bg-[#111827] border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h2 className="text-xl font-bold text-white">WorkGraph <span className="text-indigo-400">AI</span></h2>
      </div>
      <nav className="flex-1 p-4">
        <p className="text-slate-400 text-sm">role: {role}</p>
      </nav>
    </aside>
  )
}
