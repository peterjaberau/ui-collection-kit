import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';

export type AvailableFieldsForAggregateOperation = {
  [T in ExtendedAggregateOperations]?: string[];
};
