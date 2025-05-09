import { isPast } from 'date-fns';

import { CalendarEvent } from '@twenty-modules/activities/calendar/types/CalendarEvent';
import { getCalendarEventEndDate } from '@twenty-modules/activities/calendar/utils/getCalendarEventEndDate';

export const hasCalendarEventEnded = (
  calendarEvent: Pick<CalendarEvent, 'endsAt' | 'isFullDay' | 'startsAt'>,
) => isPast(getCalendarEventEndDate(calendarEvent));
