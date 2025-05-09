import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { AvailableFieldsForAggregateOperation } from '@twenty-modules/object-record/types/AvailableFieldsForAggregateOperation';

export const initializeAvailableFieldsForAggregateOperationMap = (
  aggregateOperations: ExtendedAggregateOperations[],
): AvailableFieldsForAggregateOperation => {
  return aggregateOperations.reduce(
    (acc, operation) => ({
      ...acc,
      [operation]: [],
    }),
    {},
  );
};
