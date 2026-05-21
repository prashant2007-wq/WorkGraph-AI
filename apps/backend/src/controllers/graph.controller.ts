import { Request, Response } from "express";
import { getWorkGraph } from "../services/graph.service";

export function getGraphController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: getWorkGraph()
  });
}
