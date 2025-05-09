import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { useDeleteOneRecord } from '@twenty-modules/object-record/hooks/useDeleteOneRecord';
import { Workflow, WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';
import { useApolloClient } from '@apollo/client';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useDeleteOneWorkflowVersion = () => {
  const apolloClient = useApolloClient();
  const { deleteOneRecord } = useDeleteOneRecord({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
  });
  const getWorkflowVersionFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
  });
  const getWorkflowFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.Workflow,
  });

  const deleteOneWorkflowVersion = async ({
    workflowVersionId,
  }: {
    workflowVersionId: string;
  }) => {
    await deleteOneRecord(workflowVersionId);

    const cachedWorkflowVersion =
      getWorkflowVersionFromCache<WorkflowVersion>(workflowVersionId);

    if (!isDefined(cachedWorkflowVersion)) {
      return;
    }

    const cachedWorkflow = getWorkflowFromCache<Workflow>(
      cachedWorkflowVersion.workflowId,
    );

    if (!isDefined(cachedWorkflow)) {
      return;
    }

    apolloClient.cache.modify({
      id: apolloClient.cache.identify(cachedWorkflow),
      fields: {
        versions: () => {
          return cachedWorkflow.versions.filter(
            (version) => version.id !== workflowVersionId,
          );
        },
      },
    });
  };

  return { deleteOneWorkflowVersion };
};
