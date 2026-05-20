export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export type TaskStatus = "TODO" | "IN_PROGRESS" | "REVIEW" | "BLOCKED" | "DONE";

export type InboxSource = "Slack" | "GitHub" | "Gmail" | "Calendar" | "System";

export type InboxCategory =
  | "Urgent"
  | "Waiting on you"
  | "Waiting on others"
  | "FYI"
  | "Meeting";

export type UserRole = "EMPLOYEE" | "MANAGER" | "ADMIN";

export interface WorkTask {
  id: string;
  title: string;
  project: string;
  status: TaskStatus;
  priority: Priority;
  assignee: string;
  dueDate: string;
  blocker: string | null;
}

export interface InboxItem {
  id: string;
  source: InboxSource;
  title: string;
  message: string;
  category: InboxCategory;
  time: string;
}

export interface MeetingItem {
  id: string;
  title: string;
  time: string;
  project: string;
  summary: string;
  actionItems: string[];
}

export interface ProjectHealth {
  name: string;
  score: number;
  status: "Healthy" | "Needs Attention" | "At Risk" | "Critical";
}
