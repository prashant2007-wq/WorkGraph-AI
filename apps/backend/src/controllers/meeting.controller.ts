import { Request, Response } from "express";
import { getAllMeetings, getMeetingById } from "../services/meeting.service";

export function getMeetingsController(_req: Request, res: Response) {
  res.json({
    success: true,
    data: getAllMeetings()
  });
}

export function getMeetingByIdController(req: Request, res: Response) {
  const meeting = getMeetingById(req.params.id);

  if (!meeting) {
    res.status(404).json({
      success: false,
      message: "Meeting not found"
    });
    return;
  }

  res.json({
    success: true,
    data: meeting
  });
}
