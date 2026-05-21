import { inboxItems } from "../data/inbox.data";

export function getAllInboxItems() {
  return inboxItems;
}

export function getPriorityInboxItems() {
  return inboxItems.filter((item) => {
    return item.category === "Urgent" || item.category === "Waiting on you";
  });
}
