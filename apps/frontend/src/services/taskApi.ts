import { api } from "./api";

export async function getTasks() {
  const response = await api.get("/tasks");
  return response.data;
}

export async function getBlockers() {
  const response = await api.get("/blockers");
  return response.data;
}
