import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { UPDATE_WORKFLOW_VERSION_STEP } from '@twenty-modules/workflow/graphql/mutations/updateWorkflowVersionStep';
import { WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';
import { useApolloClient, useMutation } from '@apollo/client';
import {
  UpdateWorkflowVersionStepInput,
  UpdateWorkflowVersionStepMutation,
  UpdateWorkflowVersionStepMutationVariables,
  WorkflowAction,
} from '@twenty-ui/front/generated/graphql';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useUpdateWorkflowVersionStep = () => {
  const apolloClient = useApolloClient();
  const { objectMetadataItems } = useObjectMetadataItems();
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
  });
  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
  });
  const [mutate] = useMutation<
    UpdateWorkflowVersionStepMutation,
    UpdateWorkflowVersionStepMutationVariables
  >(UPDATE_WORKFLOW_VERSION_STEP, {
    client: apolloClient,
  });

  const updateWorkflowVersionStep = async (
    input: UpdateWorkflowVersionStepInput,
  ) => {
    const result = await mutate({ variables: { input } });
    const updatedStep = result?.data?.updateWorkflowVersionStep;
    if (!isDefined(updatedStep)) {
      return;
    }

    const cachedRecord = getRecordFromCache<WorkflowVersion>(
      input.workflowVersionId,
    );
    if (!isDefined(cachedRecord)) {
      return;
    }

    const newCachedRecord = {
      ...cachedRecord,
      steps: (cachedRecord.steps || []).map((step: WorkflowAction) => {
        if (step.id === updatedStep.id) {
          return updatedStep;
        }
        return step;
      }),
    };

    const recordGqlFields = {
      steps: true,
    };
    updateRecordFromCache({
      objectMetadataItems,
      objectMetadataItem,
      cache: apolloClient.cache,
      record: newCachedRecord,
      recordGqlFields,
    });
    return result;
  };

  return { updateWorkflowVersionStep };
};
