import { meetings } from "../data/meetings.data";

export function getAllMeetings() {
  return meetings;
}

export function getMeetingById(id: string) {
  return meetings.find((meeting) => meeting.id === id);
}
