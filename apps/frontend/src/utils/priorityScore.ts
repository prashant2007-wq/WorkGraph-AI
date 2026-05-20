import type { WorkTask } from "../types/work.types";

export function getPriorityScore(task: WorkTask) {
  let score = 0;

  if (task.priority === "URGENT") score += 50;
  if (task.priority === "HIGH") score += 35;
  if (task.priority === "MEDIUM") score += 20;
  if (task.priority === "LOW") score += 10;

  if (task.status === "BLOCKED") score += 30;
  if (task.status === "REVIEW") score += 15;
  if (task.blocker) score += 25;

  return score;
}

export function sortTasksByPriority(tasks: WorkTask[]) {
  return [...tasks].sort((a, b) => getPriorityScore(b) - getPriorityScore(a));
}
