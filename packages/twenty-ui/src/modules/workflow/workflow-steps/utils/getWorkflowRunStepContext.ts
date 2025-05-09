import { WorkflowRunContext, WorkflowRunFlow } from '@twenty-modules/workflow/types/Workflow';
import { getPreviousSteps } from '@twenty-modules/workflow/workflow-steps/utils/getWorkflowPreviousSteps';
import { TRIGGER_STEP_ID } from '@twenty-modules/workflow/workflow-trigger/constants/TriggerStepId';

export const getWorkflowRunStepContext = ({
  stepId,
  flow,
  context,
}: {
  stepId: string;
  context: WorkflowRunContext;
  flow: WorkflowRunFlow;
}) => {
  if (stepId === TRIGGER_STEP_ID) {
    return [];
  }

  const previousSteps = getPreviousSteps(flow.steps, stepId);

  const previousStepsContext = previousSteps.map((step) => {
    return {
      id: step.id,
      name: step.name,
      context: context[step.id],
    };
  });

  return [
    {
      id: TRIGGER_STEP_ID,
      name: flow.trigger.name ?? 'Trigger',
      context: context[TRIGGER_STEP_ID],
    },
    ...previousStepsContext,
  ];
};
