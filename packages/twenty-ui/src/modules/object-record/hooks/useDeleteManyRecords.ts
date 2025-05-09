import { useApolloClient } from '@apollo/client';

import { triggerUpdateRecordOptimisticEffectByBatch } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffectByBatch';
import { apiConfigState } from '@twenty-modules/client-config/states/apiConfigState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { DEFAULT_MUTATION_BATCH_SIZE } from '@twenty-modules/object-record/constants/DefaultMutationBatchSize';
import { RecordGqlNode } from '@twenty-modules/object-record/graphql/types/RecordGqlNode';
import { useDeleteManyRecordsMutation } from '@twenty-modules/object-record/hooks/useDeleteManyRecordsMutation';
import { useRefetchAggregateQueries } from '@twenty-modules/object-record/hooks/useRefetchAggregateQueries';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { getDeleteManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getDeleteManyRecordsMutationResponseField';
import { useRecoilValue } from 'recoil';
import { sleep } from '@twenty-ui/front/utils/sleep';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type useDeleteManyRecordProps = {
  objectNameSingular: string;
  refetchFindManyQuery?: boolean;
};

export type DeleteManyRecordsProps = {
  recordIdsToDelete: string[];
  skipOptimisticEffect?: boolean;
  delayInMsBetweenRequests?: number;
};

export const useDeleteManyRecords = ({
  objectNameSingular,
}: useDeleteManyRecordProps) => {
  const apiConfig = useRecoilValue(apiConfigState);

  const mutationPageSize =
    apiConfig?.mutationMaximumAffectedRecords ?? DEFAULT_MUTATION_BATCH_SIZE;

  const apolloClient = useApolloClient();

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular,
  });

  const { deleteManyRecordsMutation } = useDeleteManyRecordsMutation({
    objectNameSingular,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const { refetchAggregateQueries } = useRefetchAggregateQueries({
    objectMetadataNamePlural: objectMetadataItem.namePlural,
  });

  const mutationResponseField = getDeleteManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const deleteManyRecords = async ({
    recordIdsToDelete,
    delayInMsBetweenRequests,
    skipOptimisticEffect = false,
  }: DeleteManyRecordsProps) => {
    const numberOfBatches = Math.ceil(
      recordIdsToDelete.length / mutationPageSize,
    );
    const deletedRecords = [];

    for (let batchIndex = 0; batchIndex < numberOfBatches; batchIndex++) {
      const batchedIdsToDelete = recordIdsToDelete.slice(
        batchIndex * mutationPageSize,
        (batchIndex + 1) * mutationPageSize,
      );

      const cachedRecords = batchedIdsToDelete
        .map((idToDelete) => getRecordFromCache(idToDelete, apolloClient.cache))
        .filter(isDefined);
      const currentTimestamp = new Date().toISOString();
      if (!skipOptimisticEffect) {
        const cachedRecordsNode: RecordGqlNode[] = [];
        const computedOptimisticRecordsNode: RecordGqlNode[] = [];

        const recordGqlFields = {
          deletedAt: true,
        };
        cachedRecords.forEach((cachedRecord) => {
          const cachedRecordNode = getRecordNodeFromRecord<ObjectRecord>({
            record: cachedRecord,
            objectMetadataItem,
            objectMetadataItems,
            computeReferences: false,
          });

          const computedOptimisticRecord = {
            ...cachedRecord,
            deletedAt: currentTimestamp,
            __typename: getObjectTypename(objectMetadataItem.nameSingular),
          };
          const optimisticRecordNode = getRecordNodeFromRecord<ObjectRecord>({
            record: computedOptimisticRecord,
            objectMetadataItem,
            objectMetadataItems,
            computeReferences: false,
          });

          if (isDefined(optimisticRecordNode) && isDefined(cachedRecordNode)) {
            updateRecordFromCache({
              objectMetadataItems,
              objectMetadataItem,
              cache: apolloClient.cache,
              record: computedOptimisticRecord,
              recordGqlFields,
            });

            computedOptimisticRecordsNode.push(optimisticRecordNode);
            cachedRecordsNode.push(cachedRecordNode);
          }
        });

        triggerUpdateRecordOptimisticEffectByBatch({
          cache: apolloClient.cache,
          objectMetadataItem,
          currentRecords: cachedRecordsNode,
          updatedRecords: computedOptimisticRecordsNode,
          objectMetadataItems,
        });
      }

      const deletedRecordsResponse = await apolloClient
        .mutate<Record<string, ObjectRecord[]>>({
          mutation: deleteManyRecordsMutation,
          variables: {
            filter: { id: { in: batchedIdsToDelete } },
          },
        })
        .catch((error: Error) => {
          if (skipOptimisticEffect) {
            throw error;
          }

          const cachedRecordsNode: RecordGqlNode[] = [];
          const computedOptimisticRecordsNode: RecordGqlNode[] = [];

          const recordGqlFields = {
            deletedAt: true,
          };
          cachedRecords.forEach((cachedRecord) => {
            updateRecordFromCache({
              objectMetadataItems,
              objectMetadataItem,
              cache: apolloClient.cache,
              record: { ...cachedRecord, deletedAt: null },
              recordGqlFields,
            });

            const cachedRecordWithConnection =
              getRecordNodeFromRecord<ObjectRecord>({
                record: cachedRecord,
                objectMetadataItem,
                objectMetadataItems,
                computeReferences: false,
              });

            const computedOptimisticRecord = {
              ...cachedRecord,
              deletedAt: currentTimestamp,
              __typename: getObjectTypename(objectMetadataItem.nameSingular),
            };

            const optimisticRecordWithConnection =
              getRecordNodeFromRecord<ObjectRecord>({
                record: computedOptimisticRecord,
                objectMetadataItem,
                objectMetadataItems,
                computeReferences: false,
              });

            if (
              isDefined(optimisticRecordWithConnection) &&
              isDefined(cachedRecordWithConnection)
            ) {
              cachedRecordsNode.push(cachedRecordWithConnection);
              computedOptimisticRecordsNode.push(
                optimisticRecordWithConnection,
              );
            }
          });

          triggerUpdateRecordOptimisticEffectByBatch({
            cache: apolloClient.cache,
            objectMetadataItem,
            currentRecords: computedOptimisticRecordsNode,
            updatedRecords: cachedRecordsNode,
            objectMetadataItems,
          });

          throw error;
        });

      const deletedRecordsForThisBatch =
        deletedRecordsResponse.data?.[mutationResponseField] ?? [];
      deletedRecords.push(...deletedRecordsForThisBatch);

      if (isDefined(delayInMsBetweenRequests)) {
        await sleep(delayInMsBetweenRequests);
      }
    }
    await refetchAggregateQueries();
    return deletedRecords;
  };

  return { deleteManyRecords };
};
