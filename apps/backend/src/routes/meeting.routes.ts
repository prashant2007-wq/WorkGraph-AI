import { Router } from "express";
import {
  getMeetingByIdController,
  getMeetingsController
} from "../controllers/meeting.controller";

const router = Router();

router.get("/", getMeetingsController);
router.get("/:id", getMeetingByIdController);

export default router;
