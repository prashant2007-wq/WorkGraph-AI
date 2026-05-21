import express from "express";
import cors from "cors";
import { env } from "./config/env";
import taskRoutes from "./routes/task.routes";
import inboxRoutes from "./routes/inbox.routes";
import meetingRoutes from "./routes/meeting.routes";
import graphRoutes from "./routes/graph.routes";

const app = express();

app.use(
  cors({
    origin: env.frontendUrl,
    credentials: true
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "WorkGraph AI backend is running",
    status: "ok"
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "healthy",
    service: "workgraph-ai-backend",
    timestamp: new Date().toISOString()
  });
});

app.use("/api/tasks", taskRoutes);
app.use("/api/inbox", inboxRoutes);
app.use("/api/meetings", meetingRoutes);
app.use("/api/graph", graphRoutes);

export default app;
