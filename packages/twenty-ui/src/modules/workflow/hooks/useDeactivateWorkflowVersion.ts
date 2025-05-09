import { useApolloClient, useMutation } from '@apollo/client';

import { triggerUpdateRecordOptimisticEffect } from '@twenty-modules/apollo/optimistic-effect/utils/triggerUpdateRecordOptimisticEffect';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { modifyRecordFromCache } from '@twenty-modules/object-record/cache/utils/modifyRecordFromCache';
import { DEACTIVATE_WORKFLOW_VERSION } from '@twenty-modules/workflow/graphql/mutations/deactivateWorkflowVersion';
import { WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';
import {
  DeactivateWorkflowVersionMutation,
  DeactivateWorkflowVersionMutationVariables,
} from '@twenty-ui/front/generated/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDeactivateWorkflowVersion = () => {
  const apolloClient = useApolloClient();
  const [mutate] = useMutation<
    DeactivateWorkflowVersionMutation,
    DeactivateWorkflowVersionMutationVariables
  >(DEACTIVATE_WORKFLOW_VERSION, {
    client: apolloClient,
  });

  const { objectMetadataItem: objectMetadataItemWorkflowVersion } =
    useObjectMetadataItem({
      objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
    });

  const deactivateWorkflowVersion = async ({
    workflowVersionId,
  }: {
    workflowVersionId: string;
  }) => {
    await mutate({
      variables: {
        workflowVersionId,
      },
      update: () => {
        modifyRecordFromCache({
          cache: apolloClient.cache,
          recordId: workflowVersionId,
          objectMetadataItem: objectMetadataItemWorkflowVersion,
          fieldModifiers: {
            status: () => 'DEACTIVATED',
          },
        });

        const cacheSnapshot = apolloClient.cache.extract();
        const workflowVersion: WorkflowVersion | undefined = Object.values(
          cacheSnapshot,
        ).find(
          (item) =>
            item.__typename === 'WorkflowVersion' &&
            item.id === workflowVersionId,
        );

        if (!isDefined(workflowVersion)) {
          return;
        }

        triggerUpdateRecordOptimisticEffect({
          cache: apolloClient.cache,
          objectMetadataItem: objectMetadataItemWorkflowVersion,
          currentRecord: workflowVersion,
          updatedRecord: {
            ...workflowVersion,
            status: 'DEACTIVATED',
          },
          objectMetadataItems: [objectMetadataItemWorkflowVersion],
        });
      },
    });
  };

  return { deactivateWorkflowVersion };
};
