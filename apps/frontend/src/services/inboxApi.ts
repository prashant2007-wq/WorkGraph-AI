import { api } from "./api";

export async function getInboxItems() {
  const response = await api.get("/inbox");
  return response.data;
}
