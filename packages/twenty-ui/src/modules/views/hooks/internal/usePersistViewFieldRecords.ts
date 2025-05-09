import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { v4 } from 'uuid';

import { triggerCreateRecordsOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerCreateRecordsOptimisticEffect';
import { triggerUpdateRecordOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffect';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { useCreateOneRecordMutation } from '@twenty-modules/object-record/hooks/useCreateOneRecordMutation';
import { useUpdateOneRecordMutation } from '@twenty-modules/object-record/hooks/useUpdateOneRecordMutation';
import { GraphQLView } from '@twenty-modules/views/types/GraphQLView';
import { ViewField } from '@twenty-modules/views/types/ViewField';
import { isNull } from '@sniptt/guards';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const usePersistViewFieldRecords = () => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.ViewField,
  });

  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.ViewField,
  });

  const { createOneRecordMutation } = useCreateOneRecordMutation({
    objectNameSingular: CoreObjectNameSingular.ViewField,
  });

  const { updateOneRecordMutation } = useUpdateOneRecordMutation({
    objectNameSingular: CoreObjectNameSingular.ViewField,
  });

  const { objectMetadataItems } = useObjectMetadataItems();

  const apolloClient = useApolloClient();

  const createViewFieldRecords = useCallback(
    (viewFieldsToCreate: ViewField[], view: GraphQLView) => {
      if (!viewFieldsToCreate.length) return;
      return Promise.all(
        viewFieldsToCreate.map((viewField) =>
          apolloClient.mutate({
            mutation: createOneRecordMutation,
            variables: {
              input: {
                fieldMetadataId: viewField.fieldMetadataId,
                viewId: view.id,
                isVisible: viewField.isVisible,
                position: viewField.position,
                size: viewField.size,
                id: v4(),
              },
            },
            update: (cache, { data }) => {
              const record = data?.['createViewField'];
              if (!record) return;

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

  const updateViewFieldRecords = useCallback(
    (viewFieldsToUpdate: ViewField[]) => {
      if (!viewFieldsToUpdate.length) return;

      return Promise.all(
        viewFieldsToUpdate.map((viewField) =>
          apolloClient.mutate({
            mutation: updateOneRecordMutation,
            variables: {
              idToUpdate: viewField.id,
              input: {
                isVisible: viewField.isVisible,
                position: viewField.position,
                size: viewField.size,
                aggregateOperation: viewField.aggregateOperation,
              },
            },
            update: (cache, { data }) => {
              const record = data?.['updateViewField'];
              if (!isDefined(record)) return;

              const cachedRecord = getRecordFromCache<ViewField>(
                record.id,
                cache,
              );
              if (isNull(cachedRecord)) return;

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

  return {
    createViewFieldRecords,
    updateViewFieldRecords,
  };
};
