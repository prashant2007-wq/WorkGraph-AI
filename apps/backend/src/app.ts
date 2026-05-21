import express from "express";
import cors from "cors";
import { env } from "./config/env";

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

export default app;
