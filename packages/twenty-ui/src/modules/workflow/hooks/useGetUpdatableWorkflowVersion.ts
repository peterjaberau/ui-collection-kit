import { WorkflowWithCurrentVersion } from '@twenty-modules/workflow/types/Workflow';
import { useCreateDraftFromWorkflowVersion } from '@twenty-modules/workflow/hooks/useCreateDraftFromWorkflowVersion';

export const useGetUpdatableWorkflowVersion = () => {
  const { createDraftFromWorkflowVersion } =
    useCreateDraftFromWorkflowVersion();
  const getUpdatableWorkflowVersion = async (
    workflow: WorkflowWithCurrentVersion,
  ) => {
    if (workflow.currentVersion.status === 'DRAFT') {
      return workflow.currentVersion.id;
    }
    return await createDraftFromWorkflowVersion({
      workflowId: workflow.id,
      workflowVersionIdToCopy: workflow.currentVersion.id,
    });
  };

  return { getUpdatableWorkflowVersion };
};
