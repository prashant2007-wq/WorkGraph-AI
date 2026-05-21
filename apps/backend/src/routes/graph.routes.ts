import { Router } from "express";
import { getGraphController } from "../controllers/graph.controller";

const router = Router();

router.get("/", getGraphController);

export default router;
