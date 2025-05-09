import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { RecordGqlFields } from '@twenty-modules/object-record/graphql/types/RecordGqlFields';
import { RecordGqlFieldsAggregate } from '@twenty-modules/object-record/graphql/types/RecordGqlFieldsAggregate';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { generateAggregateQuery } from '@twenty-modules/object-record/utils/generateAggregateQuery';
import { getAvailableAggregationsFromObjectFields } from '@twenty-modules/object-record/utils/getAvailableAggregationsFromObjectFields';
import { useMemo } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export type GqlFieldToFieldMap = {
  [gqlField: string]: [
    fieldName: string,
    aggregateOperation: ExtendedAggregateOperations,
  ];
};

export const useAggregateRecordsQuery = ({
  objectNameSingular,
  recordGqlFieldsAggregate = {},
}: {
  objectNameSingular: string;
  recordGqlFieldsAggregate: RecordGqlFieldsAggregate;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const availableAggregations = useMemo(
    () => getAvailableAggregationsFromObjectFields(objectMetadataItem.fields),
    [objectMetadataItem.fields],
  );

  const recordGqlFields: RecordGqlFields = {};
  const gqlFieldToFieldMap: GqlFieldToFieldMap = {};

  Object.entries(recordGqlFieldsAggregate).forEach(
    ([fieldName, aggregateOperations]) => {
      aggregateOperations.forEach((aggregateOperation) => {
        const fieldToQuery =
          availableAggregations[fieldName]?.[aggregateOperation];

        if (!isDefined(fieldToQuery)) {
          throw new Error(
            `Cannot query operation ${aggregateOperation} on field ${fieldName}`,
          );
        }
        gqlFieldToFieldMap[fieldToQuery] = [fieldName, aggregateOperation];

        recordGqlFields[fieldToQuery] = true;
      });
    },
  );

  const aggregateQuery = generateAggregateQuery({
    objectMetadataItem,
    recordGqlFields,
  });

  return {
    aggregateQuery,
    gqlFieldToFieldMap,
  };
};
