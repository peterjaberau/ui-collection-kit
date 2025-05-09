import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { DATE_AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/DateAggregateOperations';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { isFieldMetadataDateKind } from '@ui-collection-kit/twenty-shared/src/utils';

export const convertAggregateOperationToExtendedAggregateOperation = (
  aggregateOperation: AGGREGATE_OPERATIONS,
  fieldType?: FieldMetadataType,
): ExtendedAggregateOperations => {
  if (isFieldMetadataDateKind(fieldType) === true) {
    if (aggregateOperation === AGGREGATE_OPERATIONS.min) {
      return DATE_AGGREGATE_OPERATIONS.earliest;
    }
    if (aggregateOperation === AGGREGATE_OPERATIONS.max) {
      return DATE_AGGREGATE_OPERATIONS.latest;
    }
  }
  return aggregateOperation;
};
