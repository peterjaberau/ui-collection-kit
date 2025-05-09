import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { formatInTimeZone } from 'date-fns-tz';

export const formatDateISOStringToDate = (
  date: string,
  timeZone: string,
  dateFormat: DateFormat,
) => {
  return formatInTimeZone(new Date(date), timeZone, dateFormat);
};
