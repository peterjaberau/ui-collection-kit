import { CalendarEvent } from '@twenty-modules/activities/calendar/types/CalendarEvent';
import { useUpsertRecordsInStore } from '@twenty-modules/object-record/record-store/hooks/useUpsertRecordsInStore';
import { useEffect } from 'react';

type CalendarEventDetailsEffectProps = {
  record: CalendarEvent;
};

export const CalendarEventDetailsEffect = ({
  record,
}: CalendarEventDetailsEffectProps) => {
  const { upsertRecords } = useUpsertRecordsInStore();

  useEffect(() => {
    if (!record) {
      return;
    }

    upsertRecords([record]);
  }, [record, upsertRecords]);

  return <></>;
};
