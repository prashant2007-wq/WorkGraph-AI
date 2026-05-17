# WorkGraph AI

WorkGraph AI is an AI-powered enterprise productivity platform that unifies tasks, messages, meetings, pull requests, blockers, and project updates into a single intelligent work graph.

It helps employees prioritize their day, detect blocked work, convert meetings into action items, and gives managers real-time visibility into team workload and project health.

## Tech Stack

- React · TypeScript · Vite · Tailwind CSS
- Node.js · Express.js · TypeScript
- PostgreSQL · Prisma
- React Flow · Recharts · Framer Motion
- JWT Auth · Zustand · TanStack Query

---

## Folder Structure

```
workgraph-ai/
│
├── README.md
├── package.json
├── .gitignore
├── .env.example
│
├── apps/
│   │
│   ├── frontend/
│   │   ├── package.json
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   │
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── App.tsx
│   │       ├── index.css
│   │       │
│   │       ├── routes/
│   │       │   ├── AppRoutes.tsx
│   │       │   ├── ProtectedRoute.tsx
│   │       │   └── RoleRoute.tsx
│   │       │
│   │       ├── layouts/
│   │       │   ├── AuthLayout.tsx
│   │       │   ├── DashboardLayout.tsx
│   │       │   ├── ManagerLayout.tsx
│   │       │   └── AdminLayout.tsx
│   │       │
│   │       ├── pages/
│   │       │   ├── auth/
│   │       │   │   ├── Login.tsx
│   │       │   │   └── Register.tsx
│   │       │   │
│   │       │   ├── employee/
│   │       │   │   ├── Dashboard.tsx
│   │       │   │   ├── Inbox.tsx
│   │       │   │   ├── Tasks.tsx
│   │       │   │   ├── Blockers.tsx
│   │       │   │   ├── Meetings.tsx
│   │       │   │   ├── WorkGraph.tsx
│   │       │   │   ├── AIAssistant.tsx
│   │       │   │   └── Profile.tsx
│   │       │   │
│   │       │   ├── manager/
│   │       │   │   ├── ManagerDashboard.tsx
│   │       │   │   ├── Team.tsx
│   │       │   │   ├── Projects.tsx
│   │       │   │   ├── ManagerBlockers.tsx
│   │       │   │   └── Analytics.tsx
│   │       │   │
│   │       │   └── admin/
│   │       │       ├── Users.tsx
│   │       │       ├── Integrations.tsx
│   │       │       └── AdminSettings.tsx
│   │       │
│   │       ├── components/
│   │       │   ├── common/
│   │       │   │   ├── Navbar.tsx
│   │       │   │   ├── Sidebar.tsx
│   │       │   │   ├── PageHeader.tsx
│   │       │   │   ├── EmptyState.tsx
│   │       │   │   └── Loader.tsx
│   │       │   │
│   │       │   ├── dashboard/
│   │       │   │   ├── PriorityCard.tsx
│   │       │   │   ├── WorkHealthScore.tsx
│   │       │   │   ├── TodayPlan.tsx
│   │       │   │   ├── UpcomingMeetings.tsx
│   │       │   │   └── BlockerSummary.tsx
│   │       │   │
│   │       │   ├── inbox/
│   │       │   │   ├── InboxItem.tsx
│   │       │   │   ├── InboxFilters.tsx
│   │       │   │   └── MessagePriorityBadge.tsx
│   │       │   │
│   │       │   ├── tasks/
│   │       │   │   ├── TaskCard.tsx
│   │       │   │   ├── TaskTable.tsx
│   │       │   │   └── TaskStatusBadge.tsx
│   │       │   │
│   │       │   ├── blockers/
│   │       │   │   ├── BlockerCard.tsx
│   │       │   │   └── BlockerTimeline.tsx
│   │       │   │
│   │       │   ├── meetings/
│   │       │   │   ├── MeetingCard.tsx
│   │       │   │   ├── ActionItemList.tsx
│   │       │   │   └── MeetingSummary.tsx
│   │       │   │
│   │       │   ├── graph/
│   │       │   │   ├── WorkGraphCanvas.tsx
│   │       │   │   ├── GraphNode.tsx
│   │       │   │   └── GraphEdge.tsx
│   │       │   │
│   │       │   ├── ai/
│   │       │   │   ├── ChatBox.tsx
│   │       │   │   ├── AIMessage.tsx
│   │       │   │   └── PromptSuggestions.tsx
│   │       │   │
│   │       │   └── ui/
│   │       │       └── (shadcn components)
│   │       │
│   │       ├── hooks/
│   │       │   ├── useAuth.ts
│   │       │   ├── useTasks.ts
│   │       │   ├── useInbox.ts
│   │       │   ├── useBlockers.ts
│   │       │   └── useAI.ts
│   │       │
│   │       ├── services/
│   │       │   ├── api.ts
│   │       │   ├── authApi.ts
│   │       │   ├── taskApi.ts
│   │       │   ├── inboxApi.ts
│   │       │   ├── blockerApi.ts
│   │       │   ├── meetingApi.ts
│   │       │   ├── graphApi.ts
│   │       │   └── aiApi.ts
│   │       │
│   │       ├── store/
│   │       │   ├── authStore.ts
│   │       │   ├── uiStore.ts
│   │       │   └── workspaceStore.ts
│   │       │
│   │       ├── types/
│   │       │   ├── auth.types.ts
│   │       │   ├── user.types.ts
│   │       │   ├── task.types.ts
│   │       │   ├── inbox.types.ts
│   │       │   ├── blocker.types.ts
│   │       │   ├── meeting.types.ts
│   │       │   └── graph.types.ts
│   │       │
│   │       ├── data/
│   │       │   ├── mockUsers.ts
│   │       │   ├── mockTasks.ts
│   │       │   ├── mockMessages.ts
│   │       │   ├── mockMeetings.ts
│   │       │   └── mockGraph.ts
│   │       │
│   │       ├── utils/
│   │       │   ├── formatDate.ts
│   │       │   ├── priorityScore.ts
│   │       │   ├── calculateHealthScore.ts
│   │       │   └── constants.ts
│   │       │
│   │       └── assets/
│   │           ├── logo.svg
│   │           └── illustrations/
│   │
│   └── backend/
│       ├── package.json
│       ├── tsconfig.json
│       ├── nodemon.json
│       ├── .env
│       │
│       ├── prisma/
│       │   ├── schema.prisma
│       │   └── seed.ts
│       │
│       └── src/
│           ├── server.ts
│           ├── app.ts
│           │
│           ├── config/
│           │   ├── env.ts
│           │   ├── db.ts
│           │   └── cors.ts
│           │
│           ├── routes/
│           │   ├── auth.routes.ts
│           │   ├── user.routes.ts
│           │   ├── task.routes.ts
│           │   ├── inbox.routes.ts
│           │   ├── blocker.routes.ts
│           │   ├── meeting.routes.ts
│           │   ├── graph.routes.ts
│           │   ├── ai.routes.ts
│           │   └── analytics.routes.ts
│           │
│           ├── controllers/
│           │   ├── auth.controller.ts
│           │   ├── user.controller.ts
│           │   ├── task.controller.ts
│           │   ├── inbox.controller.ts
│           │   ├── blocker.controller.ts
│           │   ├── meeting.controller.ts
│           │   ├── graph.controller.ts
│           │   ├── ai.controller.ts
│           │   └── analytics.controller.ts
│           │
│           ├── services/
│           │   ├── auth.service.ts
│           │   ├── user.service.ts
│           │   ├── task.service.ts
│           │   ├── inbox.service.ts
│           │   ├── blocker.service.ts
│           │   ├── meeting.service.ts
│           │   ├── graph.service.ts
│           │   ├── ai.service.ts
│           │   └── analytics.service.ts
│           │
│           ├── middlewares/
│           │   ├── auth.middleware.ts
│           │   ├── role.middleware.ts
│           │   ├── error.middleware.ts
│           │   └── validate.middleware.ts
│           │
│           ├── validators/
│           │   ├── auth.validator.ts
│           │   ├── task.validator.ts
│           │   ├── meeting.validator.ts
│           │   └── ai.validator.ts
│           │
│           ├── types/
│           │   ├── express.d.ts
│           │   ├── auth.types.ts
│           │   ├── task.types.ts
│           │   └── graph.types.ts
│           │
│           ├── utils/
│           │   ├── generateToken.ts
│           │   ├── hashPassword.ts
│           │   ├── calculatePriority.ts
│           │   ├── calculateHealthScore.ts
│           │   └── ApiError.ts
│           │
│           └── integrations/
│               ├── github.integration.ts
│               ├── slack.integration.ts
│               ├── gmail.integration.ts
│               ├── jira.integration.ts
│               └── calendar.integration.ts
│
├── packages/
│   └── shared/
│       ├── package.json
│       └── src/
│           ├── types/
│           ├── constants/
│           └── utils/
│
└── docs/
    ├── project-plan.md
    ├── api-routes.md
    ├── database-schema.md
    └── ui-flow.md
```

---

## Features

- 🧠 **AI Daily Work Plan** — Personalized daily priorities
- 📥 **Unified Work Inbox** — Slack, Gmail, Jira, GitHub in one place
- 🚧 **Blocker Detection** — Automatically surfaces blocked tasks
- 📋 **Meeting Action Items** — Auto-generate action items from meetings
- 🕸️ **Work Graph** — Visual map of Project → Task → PR → Blocker connections
- 🤖 **AI Assistant** — Ask anything about your work
- 📊 **Manager Analytics** — Team workload, project health, blocker trends

---

## Getting Started

### Frontend
```bash
cd apps/frontend
npm install
npm run dev
```

### Backend
```bash
cd apps/backend
npm install
npm run dev
```
