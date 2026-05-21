import { Router } from "express";
import {
  getBlockersController,
  getTaskByIdController,
  getTasksController
} from "../controllers/task.controller";

const router = Router();

router.get("/", getTasksController);
router.get("/blockers", getBlockersController);
router.get("/:id", getTaskByIdController);

export default router;
