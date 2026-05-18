import { Inbox as InboxIcon } from "lucide-react";
import { mockInbox } from "../../data/mockInbox";

export default function Inbox() {
  return (
    <section>
      <div>
        <p className="text-blue-400 font-medium">Unified Work Inbox</p>
        <h1 className="text-4xl font-bold mt-2">Important updates in one place</h1>
        <p className="text-slate-400 mt-3">
          Messages from Slack, GitHub, Calendar, Gmail, and project tools are classified by priority.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {mockInbox.map((item) => (
          <div key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 flex items-start justify-between gap-6">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                <InboxIcon className="text-blue-400" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <span className="text-xs rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                    {item.source}
                  </span>
                </div>
                <p className="text-slate-400 mt-2">{item.message}</p>
              </div>
            </div>

            <div className="text-right">
              <span className="rounded-full bg-blue-500/10 text-blue-300 px-3 py-1 text-sm">
                {item.category}
              </span>
              <p className="text-slate-500 text-sm mt-3">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
