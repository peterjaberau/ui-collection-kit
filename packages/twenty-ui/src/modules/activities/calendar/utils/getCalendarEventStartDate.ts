import { CalendarEvent } from '@twenty-modules/activities/calendar/types/CalendarEvent';

export const getCalendarEventStartDate = (
  calendarEvent: Pick<CalendarEvent, 'startsAt'>,
) => new Date(calendarEvent.startsAt);
