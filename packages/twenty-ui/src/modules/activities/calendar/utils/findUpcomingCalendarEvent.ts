import { CalendarEvent } from '@twenty-modules/activities/calendar/types/CalendarEvent';
import { hasCalendarEventEnded } from '@twenty-modules/activities/calendar/utils/hasCalendarEventEnded';
import { sortCalendarEventsAsc } from '@twenty-modules/activities/calendar/utils/sortCalendarEvents';

export const findUpcomingCalendarEvent = <
  T extends Pick<CalendarEvent, 'startsAt' | 'endsAt' | 'isFullDay'>,
>(
  calendarEvents: T[],
) =>
  [...calendarEvents]
    .sort(sortCalendarEventsAsc)
    .find((calendarEvent) => !hasCalendarEventEnded(calendarEvent));
