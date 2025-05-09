import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { AvailableFieldsForAggregateOperation } from '@twenty-modules/object-record/types/AvailableFieldsForAggregateOperation';
import { getAvailableAggregationsFromObjectFields } from '@twenty-modules/object-record/utils/getAvailableAggregationsFromObjectFields';
import { initializeAvailableFieldsForAggregateOperationMap } from '@twenty-modules/object-record/utils/initializeAvailableFieldsForAggregateOperationMap';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getAvailableFieldsIdsForAggregationFromObjectFields = (
  fields: FieldMetadataItem[],
  targetAggregateOperations: ExtendedAggregateOperations[],
): AvailableFieldsForAggregateOperation => {
  const aggregationMap = initializeAvailableFieldsForAggregateOperationMap(
    targetAggregateOperations,
  );

  const allAggregations = getAvailableAggregationsFromObjectFields(fields);

  return fields.reduce((acc, field) => {
    if (isDefined(allAggregations[field.name])) {
      Object.keys(allAggregations[field.name]).forEach((aggregation) => {
        const typedAggregation = aggregation as ExtendedAggregateOperations;
        if (targetAggregateOperations.includes(typedAggregation)) {
          if (!isDefined(acc[typedAggregation])) {
            acc[typedAggregation] = [];
          }
          (acc[typedAggregation] as string[]).push(field.id);
        }
      });
    }
    return acc;
  }, aggregationMap);
};
