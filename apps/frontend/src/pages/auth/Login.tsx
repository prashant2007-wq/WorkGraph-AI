import { useNavigate } from "react-router-dom";
import { ArrowRight, Brain, Building2, ShieldCheck } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <section>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-6">
            <Brain size={16} />
            Enterprise AI Command Center
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            WorkGraph AI
            <span className="block text-blue-400">for modern teams.</span>
          </h1>

          <p className="mt-5 text-slate-400 text-lg max-w-xl">
            Unify tasks, messages, meetings, pull requests, blockers, and project updates into one intelligent workplace dashboard.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <Building2 className="text-blue-400 mb-3" />
              <p className="font-semibold">Unified Work</p>
              <p className="text-sm text-slate-400 mt-1">Tasks, inbox, meetings and PRs together.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <Brain className="text-purple-400 mb-3" />
              <p className="font-semibold">AI Daily Plan</p>
              <p className="text-sm text-slate-400 mt-1">Know what to work on first.</p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <ShieldCheck className="text-emerald-400 mb-3" />
              <p className="font-semibold">Blocker Detection</p>
              <p className="text-sm text-slate-400 mt-1">Catch delayed work before it hurts.</p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-slate-400 mt-2">Use demo login to explore the MVP.</p>

          <div className="mt-8 space-y-4">
            <input
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Email"
              defaultValue="employee@workgraph.ai"
            />

            <input
              className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 outline-none focus:border-blue-500"
              placeholder="Password"
              type="password"
              defaultValue="password"
            />

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-3 font-semibold flex items-center justify-center gap-2 transition"
            >
              Continue as Employee
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full rounded-xl border border-slate-700 hover:bg-slate-800 px-4 py-3 font-semibold transition"
            >
              Demo Manager Login
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
