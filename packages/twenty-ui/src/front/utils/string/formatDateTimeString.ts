import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { formatDateISOStringToCustomUnicodeFormat } from '@twenty-modules/localization/utils/formatDateISOStringToCustomUnicodeFormat';
import { formatDateISOStringToDateTime } from '@twenty-modules/localization/utils/formatDateISOStringToDateTime';
import { formatDateISOStringToRelativeDate } from '@twenty-modules/localization/utils/formatDateISOStringToRelativeDate';
import {
  FieldDateDisplayFormat,
  FieldDateMetadataSettings,
} from '@twenty-modules/object-record/record-field/types/FieldMetadata';

export const formatDateTimeString = ({
  value,
  timeZone,
  dateFormat,
  timeFormat,
  dateFieldSettings,
}: {
  timeZone: string;
  dateFormat: DateFormat;
  timeFormat: TimeFormat;
  value?: string | null;
  dateFieldSettings?: FieldDateMetadataSettings;
}) => {
  if (!value) {
    return '';
  }

  switch (dateFieldSettings?.displayFormat) {
    case FieldDateDisplayFormat.RELATIVE:
      return formatDateISOStringToRelativeDate(value);
    case FieldDateDisplayFormat.USER_SETTINGS:
      return formatDateISOStringToDateTime(
        value,
        timeZone,
        dateFormat,
        timeFormat,
      );
    case FieldDateDisplayFormat.CUSTOM:
      return formatDateISOStringToCustomUnicodeFormat(
        value,
        timeZone,
        dateFieldSettings.customUnicodeDateFormat,
      );
    default:
      return formatDateISOStringToDateTime(
        value,
        timeZone,
        dateFormat,
        timeFormat,
      );
  }
};
