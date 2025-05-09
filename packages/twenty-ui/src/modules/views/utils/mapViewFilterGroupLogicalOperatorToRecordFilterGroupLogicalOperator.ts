import { RecordFilterGroupLogicalOperator } from '@twenty-modules/object-record/record-filter-group/types/RecordFilterGroupLogicalOperator';
import { ViewFilterGroupLogicalOperator } from '@twenty-modules/views/types/ViewFilterGroupLogicalOperator';

export const mapViewFilterGroupLogicalOperatorToRecordFilterGroupLogicalOperator =
  ({
    viewFilterGroupLogicalOperator,
  }: {
    viewFilterGroupLogicalOperator: ViewFilterGroupLogicalOperator;
  }) => {
    return viewFilterGroupLogicalOperator === ViewFilterGroupLogicalOperator.AND
      ? RecordFilterGroupLogicalOperator.AND
      : RecordFilterGroupLogicalOperator.OR;
  };
