import { useApolloClient } from '@apollo/client';

import { triggerUpdateRecordOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffect';
import { apiConfigState } from '@twenty-modules/client-config/states/apiConfigState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { DEFAULT_MUTATION_BATCH_SIZE } from '@twenty-modules/object-record/constants/DefaultMutationBatchSize';
import { useRestoreManyRecordsMutation } from '@twenty-modules/object-record/hooks/useRestoreManyRecordsMutation';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { getRestoreManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getRestoreManyRecordsMutationResponseField';
import { useRecoilValue } from 'recoil';
import { sleep } from '@twenty-ui/front/utils/sleep';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type useRestoreManyRecordProps = {
  objectNameSingular: string;
  refetchFindManyQuery?: boolean;
};

type RestoreManyRecordsProps = {
  idsToRestore: string[];
  skipOptimisticEffect?: boolean;
  delayInMsBetweenRequests?: number;
};

export const useRestoreManyRecords = ({
  objectNameSingular,
}: useRestoreManyRecordProps) => {
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

  const { restoreManyRecordsMutation } = useRestoreManyRecordsMutation({
    objectNameSingular,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const mutationResponseField = getRestoreManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const restoreManyRecords = async ({
    idsToRestore,
    delayInMsBetweenRequests,
    skipOptimisticEffect = false,
  }: RestoreManyRecordsProps) => {
    const numberOfBatches = Math.ceil(idsToRestore.length / mutationPageSize);

    const restoredRecords = [];

    for (let batchIndex = 0; batchIndex < numberOfBatches; batchIndex++) {
      const batchedIdsToRestore = idsToRestore.slice(
        batchIndex * mutationPageSize,
        (batchIndex + 1) * mutationPageSize,
      );

      const cachedRecords = batchedIdsToRestore
        .map((idToRestore) =>
          getRecordFromCache(idToRestore, apolloClient.cache),
        )
        .filter(isDefined);

      if (!skipOptimisticEffect) {
        cachedRecords.forEach((cachedRecord) => {
          const cachedRecordWithConnection =
            getRecordNodeFromRecord<ObjectRecord>({
              record: cachedRecord,
              objectMetadataItem,
              objectMetadataItems,
              computeReferences: true,
            });
          const computedOptimisticRecord = {
            ...cachedRecord,
            deletedAt: null,
            __typename: getObjectTypename(objectMetadataItem.nameSingular),
          };
          const optimisticRecordWithConnection =
            getRecordNodeFromRecord<ObjectRecord>({
              record: computedOptimisticRecord,
              objectMetadataItem,
              objectMetadataItems,
              computeReferences: true,
            });

          if (
            isDefined(optimisticRecordWithConnection) &&
            isDefined(cachedRecordWithConnection)
          ) {
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
              currentRecord: cachedRecordWithConnection,
              updatedRecord: optimisticRecordWithConnection,
              objectMetadataItems,
            });
          }
        });
      }

      const restoredRecordsResponse = await apolloClient
        .mutate({
          mutation: restoreManyRecordsMutation,
          variables: {
            filter: { id: { in: batchedIdsToRestore } },
          },
        })
        .catch((error: Error) => {
          if (skipOptimisticEffect) {
            throw error;
          }
          cachedRecords.forEach((cachedRecord) => {
            const cachedRecordWithConnection =
              getRecordNodeFromRecord<ObjectRecord>({
                record: cachedRecord,
                objectMetadataItem,
                objectMetadataItems,
                computeReferences: true,
              });

            const computedOptimisticRecord = {
              ...cachedRecord,
              ...{ id: cachedRecord.id, deletedAt: null },
              ...{ __typename: capitalize(objectMetadataItem.nameSingular) },
            };
            const optimisticRecordWithConnection =
              getRecordNodeFromRecord<ObjectRecord>({
                record: computedOptimisticRecord,
                objectMetadataItem,
                objectMetadataItems,
                computeReferences: true,
              });

            if (
              isDefined(optimisticRecordWithConnection) &&
              isDefined(cachedRecordWithConnection)
            ) {
              const recordGqlFields = {
                deletedAt: true,
              };
              updateRecordFromCache({
                objectMetadataItems,
                objectMetadataItem,
                cache: apolloClient.cache,
                record: cachedRecord,
                recordGqlFields,
              });

              triggerUpdateRecordOptimisticEffect({
                cache: apolloClient.cache,
                objectMetadataItem,
                currentRecord: optimisticRecordWithConnection,
                updatedRecord: cachedRecordWithConnection,
                objectMetadataItems,
              });
            }
          });

          throw error;
        });

      const restoredRecordsForThisBatch =
        restoredRecordsResponse.data?.[mutationResponseField] ?? [];

      restoredRecords.push(...restoredRecordsForThisBatch);

      if (isDefined(delayInMsBetweenRequests)) {
        await sleep(delayInMsBetweenRequests);
      }
    }

    return restoredRecords;
  };

  return { restoreManyRecords };
};
