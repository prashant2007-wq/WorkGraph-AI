import { Brain, Send } from "lucide-react";

const suggestions = [
  "What should I focus on today?",
  "Which tasks are blocked?",
  "Summarize my unread work updates.",
  "Which project is at risk?"
];

export default function AIAssistant() {
  return (
    <section>
      <div>
        <p className="text-purple-400 font-medium">AI Assistant</p>
        <h1 className="text-4xl font-bold mt-2">Ask your work context</h1>
        <p className="text-slate-400 mt-3">
          A secure assistant that answers using your tasks, meetings, inbox, blockers, and work graph.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-6 min-h-[560px] flex flex-col">
          <div className="flex-1 space-y-5">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                <Brain className="text-purple-400" size={20} />
              </div>
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 max-w-xl">
                <p className="text-slate-200">
                  Your top focus today should be fixing the checkout payment bug because it is urgent, blocked by backend API details, and affects the release.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <input
              className="flex-1 rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 outline-none focus:border-purple-500"
              placeholder="Ask WorkGraph AI..."
            />
            <button className="rounded-xl bg-purple-600 hover:bg-purple-500 px-5 flex items-center gap-2">
              <Send size={18} />
              Send
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="text-xl font-bold">Prompt Suggestions</h2>
          <div className="mt-5 space-y-3">
            {suggestions.map((item) => (
              <button key={item} className="w-full text-left rounded-2xl bg-slate-950 border border-slate-800 p-4 text-slate-300 hover:border-purple-500">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
