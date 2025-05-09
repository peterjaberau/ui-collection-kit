import { useApolloClient } from '@apollo/client';

import { triggerUpdateRecordOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffect';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { computeDepthOneRecordGqlFieldsFromRecord } from '@twenty-modules/object-record/graphql/utils/computeDepthOneRecordGqlFieldsFromRecord';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useRefetchAggregateQueries } from '@twenty-modules/object-record/hooks/useRefetchAggregateQueries';
import { useUpdateOneRecordMutation } from '@twenty-modules/object-record/hooks/useUpdateOneRecordMutation';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { computeOptimisticRecordFromInput } from '@twenty-modules/object-record/utils/computeOptimisticRecordFromInput';
import { getUpdateOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getUpdateOneRecordMutationResponseField';
import { sanitizeRecordInput } from '@twenty-modules/object-record/utils/sanitizeRecordInput';
import { isNull } from '@sniptt/guards';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { buildRecordFromKeysWithSameValue } from '@twenty-ui/front/utils/array/buildRecordFromKeysWithSameValue';

type useUpdateOneRecordProps = {
  objectNameSingular: string;
  recordGqlFields?: Record<string, any>;
};
type UpdateOneRecordArgs<UpdatedObjectRecord> = {
  idToUpdate: string;
  updateOneRecordInput: Partial<Omit<UpdatedObjectRecord, 'id'>>;
  optimisticRecord?: Partial<ObjectRecord>;
};
export const useUpdateOneRecord = <
  UpdatedObjectRecord extends ObjectRecord = ObjectRecord,
>({
  objectNameSingular,
  recordGqlFields,
}: useUpdateOneRecordProps) => {
  const apolloClient = useApolloClient();

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const computedRecordGqlFields =
    recordGqlFields ?? generateDepthOneRecordGqlFields({ objectMetadataItem });

  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular,
  });

  const { updateOneRecordMutation } = useUpdateOneRecordMutation({
    objectNameSingular,
    recordGqlFields: computedRecordGqlFields,
  });

  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);

  const { objectMetadataItems } = useObjectMetadataItems();

  const { refetchAggregateQueries } = useRefetchAggregateQueries({
    objectMetadataNamePlural: objectMetadataItem.namePlural,
  });

  const updateOneRecord = async ({
    idToUpdate,
    updateOneRecordInput,
    optimisticRecord,
  }: UpdateOneRecordArgs<UpdatedObjectRecord>) => {
    const optimisticRecordInput =
      optimisticRecord ??
      computeOptimisticRecordFromInput({
        objectMetadataItem,
        currentWorkspaceMember: currentWorkspaceMember,
        recordInput: updateOneRecordInput,
        cache: apolloClient.cache,
        objectMetadataItems,
      });
    const cachedRecord = getRecordFromCache<ObjectRecord>(idToUpdate);
    const cachedRecordWithConnection = getRecordNodeFromRecord<ObjectRecord>({
      record: cachedRecord,
      objectMetadataItem,
      objectMetadataItems,
      recordGqlFields: computedRecordGqlFields,
      computeReferences: false,
    });

    const computedOptimisticRecord = {
      ...cachedRecord,
      ...optimisticRecordInput,
      id: idToUpdate,
      __typename: getObjectTypename(objectMetadataItem.nameSingular),
    };

    const optimisticRecordWithConnection =
      getRecordNodeFromRecord<ObjectRecord>({
        record: computedOptimisticRecord,
        objectMetadataItem,
        objectMetadataItems,
        recordGqlFields: computedRecordGqlFields,
        computeReferences: false,
      });

    const shouldHandleOptimisticCache =
      !isNull(cachedRecord) &&
      isDefined(optimisticRecordWithConnection) &&
      isDefined(cachedRecordWithConnection);

    if (shouldHandleOptimisticCache) {
      const recordGqlFields = computeDepthOneRecordGqlFieldsFromRecord({
        objectMetadataItem,
        record: optimisticRecordInput,
      });

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

    const mutationResponseField =
      getUpdateOneRecordMutationResponseField(objectNameSingular);

    const sanitizedInput = {
      ...sanitizeRecordInput({
        objectMetadataItem,
        recordInput: updateOneRecordInput,
      }),
    };
    const updatedRecord = await apolloClient
      .mutate({
        mutation: updateOneRecordMutation,
        variables: {
          idToUpdate,
          input: sanitizedInput,
        },
        update: (cache, { data }) => {
          const record = data?.[mutationResponseField];
          if (!isDefined(record)) return;

          triggerUpdateRecordOptimisticEffect({
            cache,
            objectMetadataItem,
            currentRecord: computedOptimisticRecord,
            updatedRecord: record,
            objectMetadataItems,
          });
        },
      })
      .catch((error: Error) => {
        if (!shouldHandleOptimisticCache) {
          throw error;
        }
        const cachedRecordKeys = new Set(Object.keys(cachedRecord));
        const recordKeysAddedByOptimisticCache = Object.keys(
          optimisticRecordInput,
        ).filter((diffKey) => !cachedRecordKeys.has(diffKey));

        const recordGqlFields = {
          ...computeDepthOneRecordGqlFieldsFromRecord({
            objectMetadataItem,
            record: cachedRecord,
          }),
          ...buildRecordFromKeysWithSameValue(
            recordKeysAddedByOptimisticCache,
            true,
          ),
        };

        updateRecordFromCache({
          objectMetadataItems,
          objectMetadataItem,
          cache: apolloClient.cache,
          record: {
            ...cachedRecord,
            ...buildRecordFromKeysWithSameValue(
              recordKeysAddedByOptimisticCache,
              null,
            ),
          },
          recordGqlFields,
        });

        triggerUpdateRecordOptimisticEffect({
          cache: apolloClient.cache,
          objectMetadataItem,
          currentRecord: optimisticRecordWithConnection,
          updatedRecord: cachedRecordWithConnection,
          objectMetadataItems,
        });

        throw error;
      });

    await refetchAggregateQueries();
    return updatedRecord?.data?.[mutationResponseField] ?? null;
  };

  return {
    updateOneRecord,
  };
};
