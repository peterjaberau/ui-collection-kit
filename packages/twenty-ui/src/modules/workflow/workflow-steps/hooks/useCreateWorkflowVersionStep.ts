import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { useObjectMetadataItems } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItems';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { useGetRecordFromCache } from '@twenty-modules/object-record/cache/hooks/useGetRecordFromCache';
import { updateRecordFromCache } from '@twenty-modules/object-record/cache/utils/updateRecordFromCache';
import { CREATE_WORKFLOW_VERSION_STEP } from '@twenty-modules/workflow/graphql/mutations/createWorkflowVersionStep';
import { WorkflowVersion } from '@twenty-modules/workflow/types/Workflow';
import { useApolloClient, useMutation } from '@apollo/client';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import {
  CreateWorkflowVersionStepInput,
  CreateWorkflowVersionStepMutation,
  CreateWorkflowVersionStepMutationVariables,
} from '@twenty-ui/front/generated/graphql';

export const useCreateWorkflowVersionStep = () => {
  const apolloClient = useApolloClient();
  const { objectMetadataItems } = useObjectMetadataItems();
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
  });
  const getRecordFromCache = useGetRecordFromCache({
    objectNameSingular: CoreObjectNameSingular.WorkflowVersion,
  });
  const [mutate] = useMutation<
    CreateWorkflowVersionStepMutation,
    CreateWorkflowVersionStepMutationVariables
  >(CREATE_WORKFLOW_VERSION_STEP, {
    client: apolloClient,
  });
  const createWorkflowVersionStep = async (
    input: CreateWorkflowVersionStepInput,
  ) => {
    const result = await mutate({
      variables: { input },
    });

    const createdStep = result?.data?.createWorkflowVersionStep;
    if (!isDefined(createdStep)) {
      return;
    }

    const cachedRecord = getRecordFromCache<WorkflowVersion>(
      input.workflowVersionId,
    );

    if (!isDefined(cachedRecord)) {
      return;
    }

    const updatedExistingSteps =
      cachedRecord.steps?.map((step) => {
        if (step.id === input.parentStepId) {
          return {
            ...step,
            nextStepIds: [...(step.nextStepIds || []), createdStep.id],
          };
        }
        return step;
      }) ?? [];

    const newCachedRecord = {
      ...cachedRecord,
      steps: [...updatedExistingSteps, createdStep],
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

  return { createWorkflowVersionStep };
};
