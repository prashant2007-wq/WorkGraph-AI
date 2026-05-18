import { CalendarDays, CheckCircle2 } from "lucide-react";
import { mockMeetings } from "../../data/mockMeetings";

export default function Meetings() {
  return (
    <section>
      <div>
        <p className="text-blue-400 font-medium">Meeting Intelligence</p>
        <h1 className="text-4xl font-bold mt-2">Meetings to action items</h1>
        <p className="text-slate-400 mt-3">
          Convert meeting discussions into clear summaries, decisions, owners, and deadlines.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockMeetings.map((meeting) => (
          <div key={meeting.id} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-blue-400" />
              <div>
                <h2 className="text-xl font-bold">{meeting.title}</h2>
                <p className="text-slate-500 text-sm">{meeting.time} • {meeting.project}</p>
              </div>
            </div>

            <p className="text-slate-300 mt-5">{meeting.summary}</p>

            <div className="mt-6">
              <h3 className="font-semibold">Action Items</h3>
              <div className="mt-3 space-y-3">
                {meeting.actionItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-950 border border-slate-800 p-3">
                    <CheckCircle2 className="text-emerald-400" size={18} />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
