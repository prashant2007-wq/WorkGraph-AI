import { mockInbox } from "../data/mockInbox";

export function useMockInbox() {
  const urgentItems = mockInbox.filter((item) => item.category === "Urgent");

  return {
    inbox: mockInbox,
    urgentItems,
    totalInbox: mockInbox.length,
    urgentCount: urgentItems.length
  };
}
