import { useApolloClient } from '@apollo/client';

import { triggerCreateRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerCreateRecordsOptimisticEffect';
import { triggerDestroyRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerDestroyRecordsOptimisticEffect';
import { apiConfigState } from '@twenty-modules/client-config/states/apiConfigState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { DEFAULT_MUTATION_BATCH_SIZE } from '@twenty-modules/object-record/constants/DefaultMutationBatchSize';
import { useDestroyManyRecordsMutation } from '@twenty-modules/object-record/hooks/useDestroyManyRecordsMutation';
import { useRefetchAggregateQueries } from '@twenty-modules/object-record/hooks/useRefetchAggregateQueries';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { getDestroyManyRecordsMutationResponseField } from '@twenty-modules/object-record/utils/getDestroyManyRecordsMutationResponseField';
import { useRecoilValue } from 'recoil';
import { sleep } from '@twenty-ui/front/utils/sleep';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type useDestroyManyRecordProps = {
  objectNameSingular: string;
  refetchFindManyQuery?: boolean;
};

export type DestroyManyRecordsProps = {
  recordIdsToDestroy: string[];
  skipOptimisticEffect?: boolean;
  delayInMsBetweenRequests?: number;
};

export const useDestroyManyRecords = ({
  objectNameSingular,
}: useDestroyManyRecordProps) => {
  const apiConfig = useRecoilValue(apiConfigState);

  const mutationPageSize =
    apiConfig?.mutationMaximumAffectedRecords ?? DEFAULT_MUTATION_BATCH_SIZE;

  const apolloClient = useApolloClient();

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const getRecordFromCache = useGetRecordFromCache({ objectNameSingular });

  const { destroyManyRecordsMutation } = useDestroyManyRecordsMutation({
    objectNameSingular,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const { refetchAggregateQueries } = useRefetchAggregateQueries({
    objectMetadataNamePlural: objectMetadataItem.namePlural,
  });

  const mutationResponseField = getDestroyManyRecordsMutationResponseField(
    objectMetadataItem.namePlural,
  );

  const destroyManyRecords = async ({
    recordIdsToDestroy,
    delayInMsBetweenRequests,
    skipOptimisticEffect = false,
  }: DestroyManyRecordsProps) => {
    const numberOfBatches = Math.ceil(
      recordIdsToDestroy.length / mutationPageSize,
    );

    const destroyedRecords = [];

    for (let batchIndex = 0; batchIndex < numberOfBatches; batchIndex++) {
      const batchedIdToDestroy = recordIdsToDestroy.slice(
        batchIndex * mutationPageSize,
        (batchIndex + 1) * mutationPageSize,
      );

      const cachedRecords = batchedIdToDestroy
        .map((recordId) => getRecordFromCache(recordId, apolloClient.cache))
        .filter(isDefined);

      const destroyedRecordsResponse = await apolloClient
        .mutate<Record<string, ObjectRecord[]>>({
          mutation: destroyManyRecordsMutation,
          variables: {
            filter: { id: { in: batchedIdToDestroy } },
          },
          optimisticResponse: skipOptimisticEffect
            ? undefined
            : {
                [mutationResponseField]: batchedIdToDestroy.map(
                  (idToDestroy) => ({
                    __typename: capitalize(objectNameSingular),
                    id: idToDestroy,
                  }),
                ),
              },
          update: (cache, { data }) => {
            if (skipOptimisticEffect) {
              return;
            }
            const records = data?.[mutationResponseField];

            if (!isDefined(records) || records.length === 0) return;

            const cachedRecords = records
              .map((record) => getRecordFromCache(record.id, cache))
              .filter(isDefined);

            triggerDestroyRecordsOptimisticEffect({
              cache,
              objectMetadataItem,
              recordsToDestroy: cachedRecords,
              objectMetadataItems,
            });
          },
        })
        .catch((error: Error) => {
          if (cachedRecords.length > 0 && !skipOptimisticEffect) {
            triggerCreateRecordsOptimisticEffect({
              cache: apolloClient.cache,
              objectMetadataItem,
              recordsToCreate: cachedRecords,
              objectMetadataItems,
            });
          }
          throw error;
        });

      const destroyedRecordsForThisBatch =
        destroyedRecordsResponse.data?.[mutationResponseField] ?? [];

      destroyedRecords.push(...destroyedRecordsForThisBatch);

      if (isDefined(delayInMsBetweenRequests)) {
        await sleep(delayInMsBetweenRequests);
      }
    }

    await refetchAggregateQueries();
    return destroyedRecords;
  };

  return { destroyManyRecords };
};
