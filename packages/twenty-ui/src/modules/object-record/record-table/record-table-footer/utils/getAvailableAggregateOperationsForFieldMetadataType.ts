import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { FIELD_TYPES_AVAILABLE_FOR_NON_STANDARD_AGGREGATE_OPERATION } from '@twenty-modules/object-record/record-table/constants/FieldTypesAvailableForNonStandardAggregateOperation';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { AggregateOperationsOmittingStandardOperations } from '@twenty-modules/object-record/types/AggregateOperationsOmittingStandardOperations';
import { isFieldTypeValidForAggregateOperation } from '@twenty-modules/object-record/utils/isFieldTypeValidForAggregateOperation';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getAvailableAggregateOperationsForFieldMetadataType = ({
  fieldMetadataType,
}: {
  fieldMetadataType?: FieldMetadataType;
}) => {
  if (fieldMetadataType === FieldMetadataType.RELATION) {
    return [AGGREGATE_OPERATIONS.count];
  }

  const availableAggregateOperations = new Set<ExtendedAggregateOperations>([
    AGGREGATE_OPERATIONS.count,
    AGGREGATE_OPERATIONS.countEmpty,
    AGGREGATE_OPERATIONS.countNotEmpty,
    AGGREGATE_OPERATIONS.countUniqueValues,
    AGGREGATE_OPERATIONS.percentageEmpty,
    AGGREGATE_OPERATIONS.percentageNotEmpty,
  ]);

  if (!isDefined(fieldMetadataType)) {
    return Array.from(availableAggregateOperations);
  }

  Object.keys(FIELD_TYPES_AVAILABLE_FOR_NON_STANDARD_AGGREGATE_OPERATION)
    .filter((operation) =>
      isFieldTypeValidForAggregateOperation(
        fieldMetadataType,
        operation as AggregateOperationsOmittingStandardOperations,
      ),
    )
    .forEach((operation) =>
      availableAggregateOperations.add(
        operation as ExtendedAggregateOperations,
      ),
    );

  return Array.from(availableAggregateOperations);
};
