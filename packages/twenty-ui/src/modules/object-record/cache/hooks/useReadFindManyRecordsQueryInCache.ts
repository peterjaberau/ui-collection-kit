import { useApolloClient } from '@apollo/client';

import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getRecordsFromRecordConnection } from '@twenty-modules/object-record/cache/utils/getRecordsFromRecordConnection';
import { RecordGqlOperationFindManyResult } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationFindManyResult';
import { RecordGqlOperationVariables } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationVariables';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { generateFindManyRecordsQuery } from '@twenty-modules/object-record/utils/generateFindManyRecordsQuery';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useReadFindManyRecordsQueryInCache = ({
  objectMetadataItem,
}: {
  objectMetadataItem: ObjectMetadataItem;
}) => {
  const apolloClient = useApolloClient();

  const { objectMetadataItems } = useObjectMetadataItems();

  const readFindManyRecordsQueryInCache = <
    T extends ObjectRecord = ObjectRecord,
  >({
    queryVariables,
    recordGqlFields,
  }: {
    queryVariables: RecordGqlOperationVariables;
    recordGqlFields?: Record<string, any>;
  }) => {
    const findManyRecordsQueryForCacheRead = generateFindManyRecordsQuery({
      objectMetadataItem,
      objectMetadataItems,
      recordGqlFields,
    });

    const existingRecordsQueryResult =
      apolloClient.readQuery<RecordGqlOperationFindManyResult>({
        query: findManyRecordsQueryForCacheRead,
        variables: queryVariables,
      });

    const existingRecordConnection =
      existingRecordsQueryResult?.[objectMetadataItem.namePlural];

    const existingObjectRecords = isDefined(existingRecordConnection)
      ? getRecordsFromRecordConnection<T>({
          recordConnection: existingRecordConnection,
        })
      : [];

    return existingObjectRecords;
  };

  return {
    readFindManyRecordsQueryInCache,
  };
};
