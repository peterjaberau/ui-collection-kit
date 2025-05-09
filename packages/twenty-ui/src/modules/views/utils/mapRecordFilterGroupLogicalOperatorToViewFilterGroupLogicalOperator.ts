import { RecordFilterGroupLogicalOperator } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroupLogicalOperator';
import { ViewFilterGroupLogicalOperator } from '@twenty-modules/views/types/ViewFilterGroupLogicalOperator';

export const mapRecordFilterGroupLogicalOperatorToViewFilterGroupLogicalOperator =
  ({
    recordFilterGroupLogicalOperator,
  }: {
    recordFilterGroupLogicalOperator: RecordFilterGroupLogicalOperator;
  }) => {
    return recordFilterGroupLogicalOperator ===
      RecordFilterGroupLogicalOperator.AND
      ? ViewFilterGroupLogicalOperator.AND
      : ViewFilterGroupLogicalOperator.OR;
  };
