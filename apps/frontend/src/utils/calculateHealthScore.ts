import type { WorkTask } from "../types/work.types";

export function calculateHealthScore(tasks: WorkTask[]) {
  let score = 100;

  tasks.forEach((task) => {
    if (task.status === "BLOCKED") score -= 12;
    if (task.priority === "URGENT") score -= 8;
    if (task.priority === "HIGH") score -= 5;
    if (task.blocker) score -= 10;
  });

  if (score < 0) return 0;
  return score;
}

export function getHealthStatus(score: number) {
  if (score >= 80) return "Healthy";
  if (score >= 60) return "Needs Attention";
  if (score >= 40) return "At Risk";
  return "Critical";
}
