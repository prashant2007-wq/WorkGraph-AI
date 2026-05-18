import { mockTasks } from "../../data/mockTasks";

export default function Tasks() {
  return (
    <section>
      <div>
        <p className="text-blue-400 font-medium">Task Board</p>
        <h1 className="text-4xl font-bold mt-2">Your work queue</h1>
        <p className="text-slate-400 mt-3">
          Track tasks by priority, status, deadline, project, and blocker state.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
        {mockTasks.map((task) => (
          <div key={task.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">{task.id}</span>
              <span className="rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-xs">
                {task.priority}
              </span>
            </div>

            <h2 className="text-xl font-bold mt-4">{task.title}</h2>
            <p className="text-slate-400 mt-2">{task.project}</p>

            <div className="mt-5 space-y-2 text-sm">
              <p><span className="text-slate-500">Status:</span> {task.status}</p>
              <p><span className="text-slate-500">Assignee:</span> {task.assignee}</p>
              <p><span className="text-slate-500">Due:</span> {task.dueDate}</p>
            </div>

            {task.blocker && (
              <div className="mt-5 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                Blocker: {task.blocker}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
