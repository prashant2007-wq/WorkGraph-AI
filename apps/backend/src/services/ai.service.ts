import { tasks } from "../data/tasks.data";
import { inboxItems } from "../data/inbox.data";
import { meetings } from "../data/meetings.data";

export function generateDailyPlan() {
  const urgentTasks = tasks.filter((task) => {
    return task.priority === "URGENT" || task.status === "BLOCKED";
  });

  const priorityInbox = inboxItems.filter((item) => {
    return item.category === "Urgent" || item.category === "Waiting on you";
  });

  return {
    summary: "Your highest priority is to unblock the checkout payment bug and review pending PRs.",
    focusItems: [
      ...urgentTasks.map((task) => ({
        type: "task",
        title: task.title,
        reason: `${task.priority} priority in ${task.project}`
      })),
      ...priorityInbox.map((item) => ({
        type: "message",
        title: item.title,
        reason: `${item.source} update marked as ${item.category}`
      }))
    ],
    upcomingMeetings: meetings.slice(0, 2)
  };
}

export function answerWorkQuestion(prompt: string) {
  const lowerPrompt = prompt.toLowerCase();

  if (lowerPrompt.includes("blocked") || lowerPrompt.includes("blocker")) {
    return "The checkout payment bug is currently blocked because the backend API response format is not finalized.";
  }

  if (lowerPrompt.includes("focus") || lowerPrompt.includes("today")) {
    return "Today, focus on fixing the checkout payment bug, reviewing PR #48, and preparing for the checkout bug review meeting.";
  }

  if (lowerPrompt.includes("meeting")) {
    return "You have Product Sync at 2:30 PM, Checkout Bug Review at 4 PM, and Sprint Planning at 5:30 PM.";
  }

  if (lowerPrompt.includes("risk")) {
    return "Billing Platform is the highest risk project because it has an urgent blocked task connected to the release.";
  }

  return "WorkGraph AI found tasks, inbox updates, meetings, and blockers connected to your current projects.";
}
