import { api } from "./api";

export async function getDailyPlan() {
  const response = await api.post("/ai/daily-plan");
  return response.data;
}

export async function askAI(prompt: string) {
  const response = await api.post("/ai/chat", { prompt });
  return response.data;
}
