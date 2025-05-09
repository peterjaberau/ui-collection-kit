import { DATE_FORMAT_WITHOUT_YEAR } from '@twenty-modules/localization/constants/DateFormatWithoutYear';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { detectDateFormat } from '@twenty-modules/localization/utils/detectDateFormat';
import { formatInTimeZone } from 'date-fns-tz';

export const formatDateISOStringToDateTimeSimplified = (
  date: Date,
  timeZone: string,
  timeFormat: TimeFormat,
) => {
  const simplifiedDateFormat = DATE_FORMAT_WITHOUT_YEAR[detectDateFormat()];

  return formatInTimeZone(
    date,
    timeZone,
    `${simplifiedDateFormat} · ${timeFormat}`,
  );
};
