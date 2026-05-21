import { Router } from "express";
import {
  askAIController,
  getDailyPlanController
} from "../controllers/ai.controller";

const router = Router();

router.post("/daily-plan", getDailyPlanController);
router.post("/chat", askAIController);

export default router;
