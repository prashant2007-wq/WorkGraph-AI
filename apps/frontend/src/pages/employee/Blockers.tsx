import { AlertTriangle } from "lucide-react";
import { mockTasks } from "../../data/mockTasks";

const blockedTasks = mockTasks.filter((task) => task.blocker);

export default function Blockers() {
  return (
    <section>
      <div>
        <p className="text-red-400 font-medium">Blocker Detection</p>
        <h1 className="text-4xl font-bold mt-2">Work that needs attention</h1>
        <p className="text-slate-400 mt-3">
          WorkGraph AI identifies tasks that are stuck because of dependencies, approvals, or missing information.
        </p>
      </div>

      <div className="mt-8 space-y-5">
        {blockedTasks.map((task) => (
          <div key={task.id} className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="text-red-400" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-6">
                  <h2 className="text-xl font-bold">{task.title}</h2>
                  <span className="rounded-full bg-red-500/20 text-red-200 px-3 py-1 text-sm">
                    {task.status}
                  </span>
                </div>

                <p className="text-slate-300 mt-3">{task.blocker}</p>

                <div className="mt-5 rounded-2xl bg-slate-950 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400">Suggested action</p>
                  <p className="mt-1">Send reminder to backend team and ask for final API contract.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
