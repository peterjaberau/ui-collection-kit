import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { RecordFilterOperand } from '@twenty-modules/object-record/record-filter/types/RecordFilterOperand';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const isRecordFilterConsideredEmpty = (
  recordFilter: RecordFilter,
): boolean => {
  const { value, operand } = recordFilter;

  if (
    (!isDefined(value) || value === '' || value === '[]') &&
    ![
      RecordFilterOperand.IsEmpty,
      RecordFilterOperand.IsNotEmpty,
      RecordFilterOperand.IsInPast,
      RecordFilterOperand.IsInFuture,
      RecordFilterOperand.IsToday,
    ].includes(operand)
  ) {
    return true;
  }

  return false;
};
