import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { UPDATE_WORKFLOW_RUN_STEP } from '@twenty-modules/workflow/graphql/mutations/updateWorkflowRunStep';
import { WorkflowRun } from '@twenty-modules/workflow/types/Workflow';
import { useApolloClient, useMutation } from '@apollo/client';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import {
  UpdateWorkflowRunStepInput,
  UpdateWorkflowRunStepMutation,
  UpdateWorkflowRunStepMutationVariables,
  WorkflowAction,
} from '@twenty-ui/front/generated/graphql';

export const useUpdateWorkflowRunStep = () => {
  const apolloClient = useApolloClient();
  const { objectMetadataItems } = useObjectMetadataItems();
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.WorkflowRun,
  });

  const [mutate] = useMutation<
    UpdateWorkflowRunStepMutation,
    UpdateWorkflowRunStepMutationVariables
  >(UPDATE_WORKFLOW_RUN_STEP, {
    client: apolloClient,
  });

  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.WorkflowRun,
  });

  const updateWorkflowRunStep = async (input: UpdateWorkflowRunStepInput) => {
    const result = await mutate({
      variables: {
        input: { workflowRunId: input.workflowRunId, step: input.step },
      },
    });
    const updatedStep = result?.data?.updateWorkflowRunStep;
    if (!isDefined(updatedStep)) {
      return;
    }

    const cachedRecord = getRecordFromCache<WorkflowRun>(input.workflowRunId);

    if (
      !isDefined(cachedRecord) ||
      !isDefined(cachedRecord?.output?.flow?.steps)
    ) {
      return;
    }

    const newCachedRecord = {
      ...cachedRecord,
      output: {
        ...cachedRecord.output,
        flow: {
          ...cachedRecord.output.flow,
          steps: cachedRecord.output.flow.steps.map((step: WorkflowAction) => {
            if (step.id === updatedStep.id) {
              return updatedStep;
            }
            return step;
          }),
        },
      },
    };

    const recordGqlFields = {
      output: true,
    };
    updateRecordFromCache({
      objectMetadataItems,
      objectMetadataItem,
      cache: apolloClient.cache,
      record: newCachedRecord,
      recordGqlFields,
    });

    return updatedStep;
  };

  return { updateWorkflowRunStep };
};
