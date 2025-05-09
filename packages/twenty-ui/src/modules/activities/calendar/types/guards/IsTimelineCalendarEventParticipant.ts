import { CalendarEventParticipant } from '@twenty-modules/activities/calendar/types/CalendarEventParticipant';
import { TimelineCalendarEventParticipant } from '@twenty-ui/front/generated-metadata/graphql';

export const isTimelineCalendarEventParticipant = (
  participant: CalendarEventParticipant | TimelineCalendarEventParticipant,
): participant is TimelineCalendarEventParticipant => {
  return 'avatarUrl' in participant;
};
