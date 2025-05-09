import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
export const getRecordFieldInputId = (
  recordId: string,
  fieldName?: string,
  prefix?: string,
): string => {
  if (isDefined(prefix)) {
    return `${prefix}-${recordId}-${fieldName}`;
  }

  return `${recordId}-${fieldName}`;
};
