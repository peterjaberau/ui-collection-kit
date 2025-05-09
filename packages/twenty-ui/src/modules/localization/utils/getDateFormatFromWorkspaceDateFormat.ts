import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { detectDateFormat } from '@twenty-modules/localization/utils/detectDateFormat';
import { WorkspaceMemberDateFormatEnum } from '@twenty-ui/front/generated/graphql';

export const getDateFormatFromWorkspaceDateFormat = (
  workspaceDateFormat: WorkspaceMemberDateFormatEnum,
) => {
  switch (workspaceDateFormat) {
    case WorkspaceMemberDateFormatEnum.SYSTEM:
      return DateFormat[detectDateFormat()];
    case WorkspaceMemberDateFormatEnum.MONTH_FIRST:
      return DateFormat.MONTH_FIRST;
    case WorkspaceMemberDateFormatEnum.DAY_FIRST:
      return DateFormat.DAY_FIRST;
    case WorkspaceMemberDateFormatEnum.YEAR_FIRST:
      return DateFormat.YEAR_FIRST;
    default:
      return DateFormat.MONTH_FIRST;
  }
};
