import { tasks } from "../data/tasks.data";

export function getAllTasks() {
  return tasks;
}

export function getTaskById(id: string) {
  return tasks.find((task) => task.id === id);
}

export function getBlockedTasks() {
  return tasks.filter((task) => task.blocker || task.status === "BLOCKED");
}
