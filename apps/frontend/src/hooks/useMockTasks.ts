import { mockTasks } from "../data/mockTasks";
import { sortTasksByPriority } from "../utils/priorityScore";

export function useMockTasks() {
  const tasks = mockTasks;
  const sortedTasks = sortTasksByPriority(tasks);
  const blockedTasks = tasks.filter((task) => task.blocker);

  return {
    tasks,
    sortedTasks,
    blockedTasks,
    totalTasks: tasks.length,
    blockerCount: blockedTasks.length
  };
}
