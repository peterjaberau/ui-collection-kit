import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { detectTimeZone } from '@twenty-modules/localization/utils/detectTimeZone';
import { createState } from '@twenty-ui/utilities';

export const dateTimeFormatState = createState<{
  timeZone: string;
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
}>({
  key: 'dateTimeFormatState',
  defaultValue: {
    timeZone: detectTimeZone(),
    dateFormat: DateFormat.MONTH_FIRST,
    timeFormat: TimeFormat['HOUR_24'],
  },
});
