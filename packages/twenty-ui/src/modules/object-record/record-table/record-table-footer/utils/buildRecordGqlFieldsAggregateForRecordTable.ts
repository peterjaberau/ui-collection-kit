import { RecordGqlFieldsAggregate } from '@twenty-modules/object-record/graphql/types/RecordGqlFieldsAggregate';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';

export const buildRecordGqlFieldsAggregateForRecordTable = ({
  aggregateOperation,
  fieldName,
}: {
  fieldName: string;
  aggregateOperation?: AGGREGATE_OPERATIONS | null;
}): RecordGqlFieldsAggregate => {
  return {
    [fieldName]: [aggregateOperation ?? AGGREGATE_OPERATIONS.count],
  };
};
