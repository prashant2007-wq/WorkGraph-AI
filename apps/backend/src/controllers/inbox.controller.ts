import { Request, Response } from "express";
import { getAllInboxItems, getPriorityInboxItems } from "../services/inbox.service";

export function getInboxController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: getAllInboxItems()
  });
}

export function getPriorityInboxController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: getPriorityInboxItems()
  });
}
