import { ApolloCache, StoreObject } from '@apollo/client';

import { triggerUpdateRelationsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRelationsOptimisticEffect';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { RecordGqlRefEdge } from '@twenty-modules/object-record/cache/types/RecordGqlRefEdge';
import { isObjectRecordConnectionWithRefs } from '@twenty-modules/object-record/cache/utils/isObjectRecordConnectionWithRefs';
import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const triggerDestroyRecordsOptimisticEffect = ({
  cache,
  objectMetadataItem,
  recordsToDestroy,
  objectMetadataItems,
}: {
  cache: ApolloCache<unknown>;
  objectMetadataItem: ObjectMetadataItem;
  recordsToDestroy: RecordGqlNode[];
  objectMetadataItems: ObjectMetadataItem[];
}) => {
  cache.modify<StoreObject>({
    fields: {
      [objectMetadataItem.namePlural]: (
        rootQueryCachedResponse,
        { readField },
      ) => {
        const rootQueryCachedResponseIsNotACachedObjectRecordConnection =
          !isObjectRecordConnectionWithRefs(
            objectMetadataItem.nameSingular,
            rootQueryCachedResponse,
          );

        if (rootQueryCachedResponseIsNotACachedObjectRecordConnection) {
          return rootQueryCachedResponse;
        }

        const rootQueryCachedObjectRecordConnection = rootQueryCachedResponse;

        const recordIdsToDestroy = recordsToDestroy.map(({ id }) => id);
        const cachedEdges = readField<RecordGqlRefEdge[]>(
          'edges',
          rootQueryCachedObjectRecordConnection,
        );

        const totalCount = readField<number | undefined>(
          'totalCount',
          rootQueryCachedObjectRecordConnection,
        );

        const nextCachedEdges =
          cachedEdges?.filter((cachedEdge) => {
            const nodeId = readField<string>('id', cachedEdge.node);

            return nodeId && !recordIdsToDestroy.includes(nodeId);
          }) || [];

        if (nextCachedEdges.length === cachedEdges?.length)
          return rootQueryCachedObjectRecordConnection;

        return {
          ...rootQueryCachedObjectRecordConnection,
          edges: nextCachedEdges,
          totalCount: isDefined(totalCount)
            ? totalCount - recordIdsToDestroy.length
            : undefined,
        };
      },
    },
  });

  recordsToDestroy.forEach((recordToDestroy) => {
    triggerUpdateRelationsOptimisticEffect({
      cache,
      sourceObjectMetadataItem: objectMetadataItem,
      currentSourceRecord: recordToDestroy,
      updatedSourceRecord: null,
      objectMetadataItems,
    });

    cache.evict({ id: cache.identify(recordToDestroy) });
  });
};
