import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';

import { triggerUpdateRecordOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffect';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { useDeleteOneRecordMutation } from '@twenty-modules/object-record/hooks/useDeleteOneRecordMutation';
import { useRefetchAggregateQueries } from '@twenty-modules/object-record/hooks/useRefetchAggregateQueries';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { getDeleteOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getDeleteOneRecordMutationResponseField';
import { isNull } from '@sniptt/guards';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type useDeleteOneRecordProps = {
  objectNameSingular: string;
};

export const useDeleteOneRecord = ({
  objectNameSingular,
}: useDeleteOneRecordProps) => {
  const apolloClient = useApolloClient();

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular,
  });

  const { deleteOneRecordMutation } = useDeleteOneRecordMutation({
    objectNameSingular,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const { refetchAggregateQueries } = useRefetchAggregateQueries({
    objectMetadataNamePlural: objectMetadataItem.namePlural,
  });

  const mutationResponseField =
    getDeleteOneRecordMutationResponseField(objectNameSingular);

  const deleteOneRecord = useCallback(
    async (idToDelete: string) => {
      const cachedRecord = getRecordFromCache(idToDelete, apolloClient.cache);
      const cachedRecordNode = getRecordNodeFromRecord<ObjectRecord>({
        record: cachedRecord,
        objectMetadataItem,
        objectMetadataItems,
        computeReferences: false,
      });

      const currentTimestamp = new Date().toISOString();
      const computedOptimisticRecord = {
        ...cachedRecord,
        id: idToDelete,
        deletedAt: currentTimestamp,
        __typename: getObjectTypename(objectMetadataItem.nameSingular),
      };
      const optimisticRecordNode = getRecordNodeFromRecord<ObjectRecord>({
        record: computedOptimisticRecord,
        objectMetadataItem,
        objectMetadataItems,
        computeReferences: false,
      });

      const shouldHandleOptimisticCache =
        !isNull(cachedRecord) &&
        isDefined(optimisticRecordNode) &&
        isDefined(cachedRecordNode);

      if (shouldHandleOptimisticCache) {
        const recordGqlFields = {
          deletedAt: true,
        };
        updateRecordFromCache({
          objectMetadataItems,
          objectMetadataItem,
          cache: apolloClient.cache,
          record: computedOptimisticRecord,
          recordGqlFields,
        });

        triggerUpdateRecordOptimisticEffect({
          cache: apolloClient.cache,
          objectMetadataItem,
          currentRecord: cachedRecordNode,
          updatedRecord: optimisticRecordNode,
          objectMetadataItems,
        });
      }

      const deletedRecord = await apolloClient
        .mutate({
          mutation: deleteOneRecordMutation,
          variables: {
            idToDelete: idToDelete,
          },
          update: (cache, { data }) => {
            const record = data?.[mutationResponseField];
            if (!isDefined(record) || !shouldHandleOptimisticCache) {
              return;
            }

            triggerUpdateRecordOptimisticEffect({
              cache,
              objectMetadataItem,
              currentRecord: optimisticRecordNode,
              updatedRecord: record,
              objectMetadataItems,
            });
          },
        })
        .catch((error: Error) => {
          if (!shouldHandleOptimisticCache) {
            throw error;
          }

          const recordGqlFields = {
            deletedAt: true,
          };
          updateRecordFromCache({
            objectMetadataItems,
            objectMetadataItem,
            cache: apolloClient.cache,
            record: {
              ...cachedRecord,
              deletedAt: null,
            },
            recordGqlFields,
          });

          triggerUpdateRecordOptimisticEffect({
            cache: apolloClient.cache,
            objectMetadataItem,
            currentRecord: optimisticRecordNode,
            updatedRecord: cachedRecordNode,
            objectMetadataItems,
          });

          throw error;
        });

      await refetchAggregateQueries();
      return deletedRecord.data?.[mutationResponseField] ?? null;
    },
    [
      apolloClient,
      deleteOneRecordMutation,
      getRecordFromCache,
      mutationResponseField,
      objectMetadataItem,
      objectMetadataItems,
      refetchAggregateQueries,
    ],
  );

  return {
    deleteOneRecord,
  };
};
