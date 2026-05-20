export function getPriorityBadge(priority: string) {
  if (priority === "URGENT") return "bg-red-500/10 text-red-300 border-red-500/20";
  if (priority === "HIGH") return "bg-orange-500/10 text-orange-300 border-orange-500/20";
  if (priority === "MEDIUM") return "bg-blue-500/10 text-blue-300 border-blue-500/20";
  return "bg-slate-500/10 text-slate-300 border-slate-500/20";
}

export function getStatusBadge(status: string) {
  if (status === "BLOCKED") return "bg-red-500/10 text-red-300 border-red-500/20";
  if (status === "DONE") return "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
  if (status === "REVIEW") return "bg-purple-500/10 text-purple-300 border-purple-500/20";
  if (status === "IN_PROGRESS") return "bg-blue-500/10 text-blue-300 border-blue-500/20";
  return "bg-slate-500/10 text-slate-300 border-slate-500/20";
}
