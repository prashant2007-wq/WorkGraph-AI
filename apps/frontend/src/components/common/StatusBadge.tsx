import { getStatusBadge, getPriorityBadge } from "../../utils/badgeStyles";

interface StatusBadgeProps {
  label: string;
  type?: "status" | "priority";
}

export default function StatusBadge({ label, type = "status" }: StatusBadgeProps) {
  const style = type === "priority" ? getPriorityBadge(label) : getStatusBadge(label);

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${style}`}>
      {label}
    </span>
  );
}
