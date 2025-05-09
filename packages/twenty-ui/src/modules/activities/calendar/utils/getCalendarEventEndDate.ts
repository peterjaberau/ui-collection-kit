import { endOfDay } from 'date-fns';

import { CalendarEvent } from '@twenty-modules/activities/calendar/types/CalendarEvent';
import { getCalendarEventStartDate } from '@twenty-modules/activities/calendar/utils/getCalendarEventStartDate';

export const getCalendarEventEndDate = (
  calendarEvent: Pick<CalendarEvent, 'endsAt' | 'isFullDay' | 'startsAt'>,
) =>
  calendarEvent.endsAt
    ? new Date(calendarEvent.endsAt)
    : endOfDay(getCalendarEventStartDate(calendarEvent));
