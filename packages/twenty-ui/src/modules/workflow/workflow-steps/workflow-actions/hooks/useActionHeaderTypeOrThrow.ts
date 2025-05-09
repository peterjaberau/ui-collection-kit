import { WorkflowActionType } from '@twenty-modules/workflow/types/Workflow';
import { getActionHeaderTypeOrThrow } from '@twenty-modules/workflow/workflow-steps/workflow-actions/utils/getActionHeaderTypeOrThrow';
import { useLingui } from '@lingui/react';

export const useActionHeaderTypeOrThrow = (actionType: WorkflowActionType) => {
  const { _ } = useLingui();

  return _(getActionHeaderTypeOrThrow(actionType));
};
