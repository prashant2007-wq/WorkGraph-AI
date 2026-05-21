import { Request, Response } from "express";
import { answerWorkQuestion, generateDailyPlan } from "../services/ai.service";

export function getDailyPlanController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: generateDailyPlan()
  });
}

export function askAIController(req: Request, res: Response) {
  const prompt = req.body?.prompt || "";

  res.json({
    success: true,
    data: {
      prompt,
      answer: answerWorkQuestion(prompt)
    }
  });
}
