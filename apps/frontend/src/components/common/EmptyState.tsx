import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center">
      <div className="mx-auto h-14 w-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center">
        <Inbox className="text-slate-400" />
      </div>
      <h2 className="text-xl font-bold mt-5">{title}</h2>
      <p className="text-slate-400 mt-2">{description}</p>
    </div>
  );
}
