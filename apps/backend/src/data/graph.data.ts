export const graph = {
  nodes: [
    { id: "1", label: "Billing Platform", type: "project" },
    { id: "2", label: "Fix checkout bug", type: "task" },
    { id: "3", label: "PR #48", type: "pull_request" },
    { id: "4", label: "Backend API Blocker", type: "blocker" },
    { id: "5", label: "Release Risk", type: "risk" },
    { id: "6", label: "Prashant Bisht", type: "user" }
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", relation: "has task" },
    { id: "e2-3", source: "2", target: "3", relation: "linked PR" },
    { id: "e2-4", source: "2", target: "4", relation: "blocked by" },
    { id: "e3-5", source: "3", target: "5", relation: "waiting review" },
    { id: "e4-5", source: "4", target: "5", relation: "creates risk" },
    { id: "e6-2", source: "6", target: "2", relation: "assigned to" }
  ]
};
