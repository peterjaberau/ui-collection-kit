import { ApolloCache } from '@apollo/client/cache';
import gql from 'graphql-tag';

import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { mapObjectMetadataToGraphQLQuery } from '@twenty-modules/object-metadata/utils/mapObjectMetadataToGraphQLQuery';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { capitalize } from '@ui-collection-kit/twenty-shared/src/utils';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

export const updateRecordFromCache = <T extends ObjectRecord>({
  objectMetadataItems,
  objectMetadataItem,
  cache,
  recordGqlFields,
  record,
}: {
  objectMetadataItems: ObjectMetadataItem[];
  objectMetadataItem: ObjectMetadataItem;
  cache: ApolloCache<object>;
  recordGqlFields: Record<string, boolean>;
  record: T;
}) => {
  if (isUndefinedOrNull(objectMetadataItem)) {
    return null;
  }

  const capitalizedObjectName = capitalize(objectMetadataItem.nameSingular);

  const cacheWriteFragment = gql`
      fragment ${capitalizedObjectName}Fragment on ${capitalizedObjectName} ${mapObjectMetadataToGraphQLQuery(
        {
          objectMetadataItems,
          objectMetadataItem,
          computeReferences: true,
          recordGqlFields,
        },
      )}
    `;

  const cachedRecordId = cache.identify({
    __typename: capitalize(objectMetadataItem.nameSingular),
    id: record.id,
  });

  const recordWithConnection = getRecordNodeFromRecord<T>({
    objectMetadataItems,
    objectMetadataItem,
    record,
  });

  if (isUndefinedOrNull(recordWithConnection)) {
    return;
  }

  cache.writeFragment<RecordGqlNode>({
    id: cachedRecordId,
    fragment: cacheWriteFragment,
    data: recordWithConnection,
  });
};
