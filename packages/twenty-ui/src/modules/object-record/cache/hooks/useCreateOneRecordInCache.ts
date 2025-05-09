import { useApolloClient } from '@apollo/client';
import gql from 'graphql-tag';
import { useRecoilValue } from 'recoil';

import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { computeDepthOneRecordGqlFieldsFromRecord } from '@twenty-modules/object-record/graphql/utils/computeDepthOneRecordGqlFieldsFromRecord';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { prefillRecord } from '@twenty-modules/object-record/utils/prefillRecord';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';

export const useCreateOneRecordInCache = <T extends ObjectRecord>({
  objectMetadataItem,
}: {
  objectMetadataItem: ObjectMetadataItem;
}) => {
  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular: objectMetadataItem.nameSingular,
  });
  const objectMetadataItems = useRecoilValue(objectMetadataItemsState);
  const apolloClient = useApolloClient();

  return (record: ObjectRecord) => {
    const prefilledRecord = prefillRecord({
      objectMetadataItem,
      input: record,
    });
    const recordGqlFields = computeDepthOneRecordGqlFieldsFromRecord({
      objectMetadataItem,
      record: prefilledRecord,
    });
    const fragment = gql`
          fragment Create${capitalize(
            objectMetadataItem.nameSingular,
          )}InCache on ${capitalize(
            objectMetadataItem.nameSingular,
          )} ${mapObjectMetadataToGraphQLQuery({
            objectMetadataItems,
            objectMetadataItem,
            computeReferences: true,
            recordGqlFields,
          })}
        `;

    const recordToCreateWithNestedConnections = getRecordNodeFromRecord({
      record: prefilledRecord,
      objectMetadataItem,
      objectMetadataItems,
    });

    const cachedObjectRecord = {
      __typename: `${capitalize(objectMetadataItem.nameSingular)}`,
      ...recordToCreateWithNestedConnections,
    };

    apolloClient.writeFragment({
      id: `${capitalize(objectMetadataItem.nameSingular)}:${record.id}`,
      fragment,
      data: cachedObjectRecord,
    });
    return getRecordFromCache(record.id) as T;
  };
};
