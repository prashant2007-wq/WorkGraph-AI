import { Request, Response } from "express";
import { getAllTasks, getBlockedTasks, getTaskById } from "../services/task.service";

export function getTasksController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: getAllTasks()
  });
}

export function getTaskByIdController(req: Request, res: Response) {
  const task = getTaskById(req.params.id);

  if (!task) {
    res.status(404).json({
      success: false,
      message: "Task not found"
    });
    return;
  }

  res.json({
    success: true,
    data: task
  });
}

export function getBlockersController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: getBlockedTasks()
  });
}
