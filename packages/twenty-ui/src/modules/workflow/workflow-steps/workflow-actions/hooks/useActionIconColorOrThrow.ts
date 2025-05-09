import { WorkflowActionType } from '@twenty-modules/workflow/types/Workflow';
import { getActionIconColorOrThrow } from '@twenty-modules/workflow/workflow-steps/workflow-actions/utils/getActionIconColorOrThrow';
import { useTheme } from '@emotion/react';

export const useActionIconColorOrThrow = (actionType: WorkflowActionType) => {
  const theme = useTheme();

  return getActionIconColorOrThrow({ theme, actionType });
};
