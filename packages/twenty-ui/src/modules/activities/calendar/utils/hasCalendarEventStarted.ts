import { isPast } from 'date-fns';

import { CalendarEvent } from '@twenty-modules/activities/calendar/types/CalendarEvent';
import { getCalendarEventStartDate } from '@twenty-modules/activities/calendar/utils/getCalendarEventStartDate';

export const hasCalendarEventStarted = (
  calendarEvent: Pick<CalendarEvent, 'startsAt'>,
) => isPast(getCalendarEventStartDate(calendarEvent));
