import { FIELD_TYPES_AVAILABLE_FOR_NON_STANDARD_AGGREGATE_OPERATION } from '@twenty-modules/object-record/record-table/constants/FieldTypesAvailableForNonStandardAggregateOperation';
import { AggregateOperationsOmittingStandardOperations } from '@twenty-modules/object-record/types/AggregateOperationsOmittingStandardOperations';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export const isFieldTypeValidForAggregateOperation = (
  fieldType: FieldMetadataType,
  aggregateOperation: AggregateOperationsOmittingStandardOperations,
): boolean => {
  return FIELD_TYPES_AVAILABLE_FOR_NON_STANDARD_AGGREGATE_OPERATION[
    aggregateOperation
  ].includes(fieldType);
};
