# WorkGraph AI

WorkGraph AI is an AI-powered enterprise productivity platform that unifies tasks, messages, meetings, pull requests, blockers, and project updates into a single intelligent work graph.

It helps employees prioritize their day, detect blocked work, convert meetings into action items, and gives managers real-time visibility into team workload and project health.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Node.js
- Express.js
- PostgreSQL
- Prisma
- React Flow
- Recharts
- JWT Auth

## Monorepo Structure

```
workgraph-ai/
├── apps/
│   ├── frontend/     # React + TypeScript + Vite + Tailwind
│   └── backend/      # Node.js + Express + TypeScript + Prisma
├── packages/
│   └── shared/       # Shared types, constants, utils
└── docs/             # Project documentation
```

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

## Features

- 🧠 **AI Daily Work Plan** — Personalized daily priorities powered by AI
- 📥 **Unified Work Inbox** — Slack, Gmail, Jira, GitHub in one place
- 🚧 **Blocker Detection** — Automatically surfaces blocked tasks
- 📋 **Meeting Action Items** — Auto-generate action items from meetings
- 🕸️ **Work Graph** — Visual map of project → task → PR → blocker connections
- 🤖 **AI Assistant** — Ask anything about your work
- 📊 **Manager Analytics** — Team workload, project health, blocker trends
