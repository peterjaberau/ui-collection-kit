import { useQuery } from '@apollo/client';

import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { RecordGqlFieldsAggregate } from '@twenty-modules/object-record/graphql/types/RecordGqlFieldsAggregate';
import { RecordGqlOperationFilter } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFilter';
import { RecordGqlOperationFindManyResult } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFindManyResult';
import { useAggregateRecordsQuery } from '@twenty-modules/object-record/hooks/useAggregateRecordsQuery';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import isEmpty from 'lodash.isempty';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export type AggregateRecordsData = {
  [fieldName: string]: {
    [operation in ExtendedAggregateOperations]?: string | number | undefined;
  };
};

export const useAggregateRecords = <T extends AggregateRecordsData>({
  objectNameSingular,
  filter,
  recordGqlFieldsAggregate,
  skip,
}: {
  objectNameSingular: string;
  recordGqlFieldsAggregate: RecordGqlFieldsAggregate;
  filter?: RecordGqlOperationFilter;
  skip?: boolean;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { aggregateQuery, gqlFieldToFieldMap } = useAggregateRecordsQuery({
    objectNameSingular,
    recordGqlFieldsAggregate,
  });

  const { data, loading, error } = useQuery<RecordGqlOperationFindManyResult>(
    aggregateQuery,
    {
      skip: skip || !objectMetadataItem,
      variables: {
        filter,
      },
    },
  );

  const formattedData: AggregateRecordsData = {};

  if (!isEmpty(data)) {
    Object.entries(data?.[objectMetadataItem.namePlural] ?? {})?.forEach(
      ([gqlField, result]) => {
        if (isDefined(gqlFieldToFieldMap[gqlField])) {
          const [fieldName, aggregateOperation] = gqlFieldToFieldMap[gqlField];
          formattedData[fieldName] = {
            ...(formattedData[fieldName] ?? {}),
            [aggregateOperation]: result,
          };
        }
      },
    );
  }

  return {
    objectMetadataItem,
    data: formattedData as T,
    loading,
    error,
  };
};
