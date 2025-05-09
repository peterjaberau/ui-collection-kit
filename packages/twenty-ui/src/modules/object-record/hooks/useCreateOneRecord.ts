import { useApolloClient } from '@apollo/client';
import { useState } from 'react';
import { v4 } from 'uuid';

import { triggerCreateRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerCreateRecordsOptimisticEffect';
import { triggerDestroyRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerDestroyRecordsOptimisticEffect';
import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { useCreateOneRecordInCache } from '@twenty-modules/object-record/cache/hooks/useCreateOneRecordInCache';
import { deleteRecordFromCache } from '@twenty-modules/object-record/cache/utils/deleteRecordFromCache';
import { getObjectTypename } from '@twenty-modules/object-record/cache/utils/getObjectTypename';
import { getRecordNodeFromRecord } from '@twenty-modules/object-record/cache/utils/getRecordNodeFromRecord';
import { RecordGqlOperationGqlRecordFields } from '@twenty-modules/object-record/graphql/types/RecordGqlOperationGqlRecordFields';
import { generateDepthOneRecordGqlFields } from '@twenty-modules/object-record/graphql/utils/generateDepthOneRecordGqlFields';
import { useCreateOneRecordMutation } from '@twenty-modules/object-record/hooks/useCreateOneRecordMutation';
import { useRefetchAggregateQueries } from '@twenty-modules/object-record/hooks/useRefetchAggregateQueries';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { computeOptimisticCreateRecordBaseRecordInput } from '@twenty-modules/object-record/utils/computeOptimisticCreateRecordBaseRecordInput';
import { computeOptimisticRecordFromInput } from '@twenty-modules/object-record/utils/computeOptimisticRecordFromInput';
import { getCreateOneRecordMutationResponseField } from '@twenty-modules/object-record/utils/getCreateOneRecordMutationResponseField';
import { sanitizeRecordInput } from '@twenty-modules/object-record/utils/sanitizeRecordInput';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type useCreateOneRecordProps = {
  objectNameSingular: string;
  recordGqlFields?: RecordGqlOperationGqlRecordFields;
  skipPostOptimisticEffect?: boolean;
  shouldMatchRootQueryFilter?: boolean;
};

export const useCreateOneRecord = <
  CreatedObjectRecord extends ObjectRecord = ObjectRecord,
>({
  objectNameSingular,
  recordGqlFields,
  skipPostOptimisticEffect = false,
  shouldMatchRootQueryFilter,
}: useCreateOneRecordProps) => {
  const apolloClient = useApolloClient();
  const [loading, setLoading] = useState(false);

  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const computedRecordGqlFields =
    recordGqlFields ?? generateDepthOneRecordGqlFields({ objectMetadataItem });

  const { createOneRecordMutation } = useCreateOneRecordMutation({
    objectNameSingular,
    recordGqlFields: computedRecordGqlFields,
  });

  const currentWorkspaceMember = useRecoilValue(currentWorkspaceMemberState);

  const createOneRecordInCache = useCreateOneRecordInCache<CreatedObjectRecord>(
    {
      objectMetadataItem,
    },
  );

  const { objectMetadataItems } = useObjectMetadataItems();

  const { refetchAggregateQueries } = useRefetchAggregateQueries({
    objectMetadataNamePlural: objectMetadataItem.namePlural,
  });

  const createOneRecord = async (recordInput: Partial<CreatedObjectRecord>) => {
    setLoading(true);

    const idForCreation = recordInput.id ?? v4();

    const sanitizedInput = {
      ...sanitizeRecordInput({
        objectMetadataItem,
        recordInput,
      }),
      id: idForCreation,
    };

    const optimisticRecordInput = computeOptimisticRecordFromInput({
      cache: apolloClient.cache,
      currentWorkspaceMember: currentWorkspaceMember,
      objectMetadataItem,
      objectMetadataItems,
      recordInput: {
        ...computeOptimisticCreateRecordBaseRecordInput(objectMetadataItem),
        ...recordInput,
        id: idForCreation,
      },
    });
    const recordCreatedInCache = createOneRecordInCache({
      ...optimisticRecordInput,
      id: idForCreation,
      __typename: getObjectTypename(objectMetadataItem.nameSingular),
    });

    if (isDefined(recordCreatedInCache)) {
      const optimisticRecordNode = getRecordNodeFromRecord({
        objectMetadataItem,
        objectMetadataItems,
        record: recordCreatedInCache,
        recordGqlFields: computedRecordGqlFields,
        computeReferences: false,
      });

      if (skipPostOptimisticEffect === false && optimisticRecordNode !== null) {
        triggerCreateRecordsOptimisticEffect({
          cache: apolloClient.cache,
          objectMetadataItem,
          recordsToCreate: [optimisticRecordNode],
          objectMetadataItems,
          shouldMatchRootQueryFilter,
        });
      }
    }

    const mutationResponseField =
      getCreateOneRecordMutationResponseField(objectNameSingular);

    const createdObject = await apolloClient
      .mutate({
        mutation: createOneRecordMutation,
        variables: {
          input: sanitizedInput,
        },
        update: (cache, { data }) => {
          const record = data?.[mutationResponseField];
          if (skipPostOptimisticEffect === false && isDefined(record)) {
            triggerCreateRecordsOptimisticEffect({
              cache,
              objectMetadataItem,
              recordsToCreate: [record],
              objectMetadataItems,
              shouldMatchRootQueryFilter,
              checkForRecordInCache: true,
            });
          }

          setLoading(false);
        },
      })
      .catch((error: Error) => {
        if (!recordCreatedInCache) {
          throw error;
        }

        deleteRecordFromCache({
          objectMetadataItems,
          objectMetadataItem,
          cache: apolloClient.cache,
          recordToDestroy: recordCreatedInCache,
        });

        triggerDestroyRecordsOptimisticEffect({
          cache: apolloClient.cache,
          objectMetadataItem,
          recordsToDestroy: [recordCreatedInCache],
          objectMetadataItems,
        });

        throw error;
      });

    await refetchAggregateQueries();
    return createdObject.data?.[mutationResponseField] ?? null;
  };

  return {
    createOneRecord,
    loading,
  };
};
