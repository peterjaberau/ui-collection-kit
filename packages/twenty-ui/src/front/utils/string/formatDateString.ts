import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { formatDateISOStringToCustomUnicodeFormat } from '@twenty-modules/localization/utils/formatDateISOStringToCustomUnicodeFormat';
import { formatDateISOStringToDate } from '@twenty-modules/localization/utils/formatDateISOStringToDate';
import { formatDateISOStringToRelativeDate } from '@twenty-modules/localization/utils/formatDateISOStringToRelativeDate';
import {
  FieldDateDisplayFormat,
  FieldDateMetadataSettings,
} from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const formatDateString = ({
  value,
  timeZone,
  dateFormat,
  dateFieldSettings,
}: {
  timeZone: string;
  dateFormat: DateFormat;
  value?: string | null;
  dateFieldSettings?: FieldDateMetadataSettings;
}): string => {
  if (!isDefined(value)) {
    return '';
  }

  switch (dateFieldSettings?.displayFormat) {
    case FieldDateDisplayFormat.RELATIVE:
      return formatDateISOStringToRelativeDate(value);
    case FieldDateDisplayFormat.USER_SETTINGS:
      return formatDateISOStringToDate(value, timeZone, dateFormat);
    case FieldDateDisplayFormat.CUSTOM:
      return formatDateISOStringToCustomUnicodeFormat(
        value,
        timeZone,
        dateFieldSettings.customUnicodeDateFormat,
      );
    default:
      return formatDateISOStringToDate(value, timeZone, dateFormat);
  }
};
