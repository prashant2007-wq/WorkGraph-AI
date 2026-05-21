import { Router } from "express";
import {
  getInboxController,
  getPriorityInboxController
} from "../controllers/inbox.controller";

const router = Router();

router.get("/", getInboxController);
router.get("/priority", getPriorityInboxController);

export default router;
