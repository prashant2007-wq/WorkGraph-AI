import { mockMeetings } from "../data/mockMeetings";

export function useMockMeetings() {
  const actionItemCount = mockMeetings.reduce((total, meeting) => {
    return total + meeting.actionItems.length;
  }, 0);

  return {
    meetings: mockMeetings,
    totalMeetings: mockMeetings.length,
    actionItemCount
  };
}
