import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';

import { triggerCreateRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerCreateRecordsOptimisticEffect';
import { triggerDestroyRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerDestroyRecordsOptimisticEffect';
import { triggerUpdateRecordOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffect';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { useCreateOneRecordMutation } from '@twenty-modules/object-record/hooks/useCreateOneRecordMutation';
import { useDestroyOneRecordMutation } from '@twenty-modules/object-record/hooks/useDestroyOneRecordMutation';
import { useUpdateOneRecordMutation } from '@twenty-modules/object-record/hooks/useUpdateOneRecordMutation';
import { GraphQLView } from '@twenty-modules/views/types/GraphQLView';
import { ViewFilter } from '@twenty-modules/views/types/ViewFilter';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const usePersistViewFilterRecords = () => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.ViewFilter,
  });

  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.ViewFilter,
  });

  const { destroyOneRecordMutation } = useDestroyOneRecordMutation({
    objectNameSingular: CoreObjectNameSingular.ViewFilter,
  });

  const { createOneRecordMutation } = useCreateOneRecordMutation({
    objectNameSingular: CoreObjectNameSingular.ViewFilter,
  });

  const { updateOneRecordMutation } = useUpdateOneRecordMutation({
    objectNameSingular: CoreObjectNameSingular.ViewFilter,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const apolloClient = useApolloClient();

  const createViewFilterRecords = useCallback(
    (viewFiltersToCreate: ViewFilter[], view: GraphQLView) => {
      if (viewFiltersToCreate.length === 0) return;

      return Promise.all(
        viewFiltersToCreate.map((viewFilter) =>
          apolloClient.mutate({
            mutation: createOneRecordMutation,
            variables: {
              input: {
                id: viewFilter.id,
                fieldMetadataId: viewFilter.fieldMetadataId,
                viewId: view.id,
                value: viewFilter.value,
                displayValue: viewFilter.displayValue,
                operand: viewFilter.operand,
                viewFilterGroupId: viewFilter.viewFilterGroupId,
                positionInViewFilterGroup: viewFilter.positionInViewFilterGroup,
                subFieldName: viewFilter.subFieldName ?? null,
              } satisfies Partial<ViewFilter>,
            },
            update: (cache, { data }) => {
              const record = data?.['createViewFilter'];
              if (!isDefined(record)) return;

              triggerCreateRecordsOptimisticEffect({
                cache,
                objectMetadataItem,
                recordsToCreate: [record],
                objectMetadataItems,
              });
            },
          }),
        ),
      );
    },
    [
      apolloClient,
      createOneRecordMutation,
      objectMetadataItem,
      objectMetadataItems,
    ],
  );

  const updateViewFilterRecords = useCallback(
    (viewFiltersToUpdate: ViewFilter[]) => {
      if (!viewFiltersToUpdate.length) return;
      return Promise.all(
        viewFiltersToUpdate.map((viewFilter) =>
          apolloClient.mutate({
            mutation: updateOneRecordMutation,
            variables: {
              idToUpdate: viewFilter.id,
              input: {
                value: viewFilter.value,
                displayValue: viewFilter.displayValue,
                operand: viewFilter.operand,
                positionInViewFilterGroup: viewFilter.positionInViewFilterGroup,
                viewFilterGroupId: viewFilter.viewFilterGroupId,
                subFieldName: viewFilter.subFieldName ?? null,
              } satisfies Partial<ViewFilter>,
            },
            update: (cache, { data }) => {
              const record = data?.['updateViewFilter'];
              if (!isDefined(record)) return;

              const cachedRecord = getRecordFromCache<ViewFilter>(
                record.id,
                cache,
              );
              if (!isDefined(cachedRecord)) return;

              triggerUpdateRecordOptimisticEffect({
                cache,
                objectMetadataItem,
                currentRecord: cachedRecord,
                updatedRecord: record,
                objectMetadataItems,
              });
            },
          }),
        ),
      );
    },
    [
      apolloClient,
      getRecordFromCache,
      objectMetadataItem,
      objectMetadataItems,
      updateOneRecordMutation,
    ],
  );

  const deleteViewFilterRecords = useCallback(
    (viewFilterIdsToDelete: string[]) => {
      if (!viewFilterIdsToDelete.length) return;
      return Promise.all(
        viewFilterIdsToDelete.map((viewFilterId) =>
          apolloClient.mutate({
            mutation: destroyOneRecordMutation,
            variables: {
              idToDestroy: viewFilterId,
            },
            update: (cache, { data }) => {
              const record = data?.['destroyViewFilter'];
              if (!isDefined(record)) return;

              const cachedRecord = getRecordFromCache<ViewFilter>(
                record.id,
                cache,
              );
              if (!isDefined(cachedRecord)) return;

              triggerDestroyRecordsOptimisticEffect({
                cache,
                objectMetadataItem,
                recordsToDestroy: [cachedRecord],
                objectMetadataItems,
              });
            },
          }),
        ),
      );
    },
    [
      apolloClient,
      destroyOneRecordMutation,
      getRecordFromCache,
      objectMetadataItem,
      objectMetadataItems,
    ],
  );

  return {
    createViewFilterRecords,
    updateViewFilterRecords,
    deleteViewFilterRecords,
  };
};
