import { useContext } from 'react';

import { CalendarDayCardContent } from '@twenty-modules/activities/calendar/components/CalendarDayCardContent';
import { CalendarContext } from '@twenty-modules/activities/calendar/contexts/CalendarContext';
import { Card } from '@twenty-ui/layout';

type CalendarMonthCardProps = {
  dayTimes: number[];
};

export const CalendarMonthCard = ({ dayTimes }: CalendarMonthCardProps) => {
  const { calendarEventsByDayTime } = useContext(CalendarContext);

  return (
    <Card fullWidth>
      {dayTimes.map((dayTime, index) => {
        const dayCalendarEvents = calendarEventsByDayTime[dayTime] || [];

        return (
          <CalendarDayCardContent
            key={dayTime}
            calendarEvents={dayCalendarEvents}
            divider={index < dayTimes.length - 1}
          />
        );
      })}
    </Card>
  );
};
