import { WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';
import { splitWorkflowTriggerEventName } from '@twenty-modules/workflow/utils/splitWorkflowTriggerEventName';
import { WorkflowDiagramStepNodeData } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { DATABASE_TRIGGER_TYPES } from '@twenty-modules/workflow/workflow-trigger/constants/DatabaseTriggerTypes';
import { TRIGGER_STEP_ID } from '@twenty-modules/workflow/workflow-trigger/constants/TriggerStepId';
import { getTriggerIcon } from '@twenty-modules/workflow/workflow-trigger/utils/getTriggerIcon';
import { Node } from '@xyflow/react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getWorkflowDiagramTriggerNode = ({
  trigger,
}: {
  trigger: WorkflowTrigger;
}): Node<WorkflowDiagramStepNodeData> => {
  let triggerDefaultLabel: string;
  let triggerIcon: string | undefined;

  switch (trigger.type) {
    case 'MANUAL': {
      triggerDefaultLabel = 'Manual Trigger';
      triggerIcon = getTriggerIcon(trigger);

      break;
    }
    case 'CRON': {
      triggerDefaultLabel = 'On a Schedule';
      triggerIcon = getTriggerIcon(trigger);

      break;
    }
    case 'WEBHOOK': {
      triggerDefaultLabel = 'Webhook';
      triggerIcon = getTriggerIcon(trigger);

      break;
    }
    case 'DATABASE_EVENT': {
      const triggerEvent = splitWorkflowTriggerEventName(
        trigger.settings.eventName,
      );

      triggerDefaultLabel =
        DATABASE_TRIGGER_TYPES.find((item) => item.event === triggerEvent.event)
          ?.defaultLabel ?? '';

      triggerIcon = getTriggerIcon(trigger);

      break;
    }
    default: {
      return assertUnreachable(
        trigger,
        `Expected the trigger "${JSON.stringify(trigger)}" to be supported.`,
      );
    }
  }

  return {
    id: TRIGGER_STEP_ID,
    data: {
      nodeType: 'trigger',
      triggerType: trigger.type,
      name: isDefined(trigger.name) ? trigger.name : triggerDefaultLabel,
      icon: triggerIcon,
    } satisfies WorkflowDiagramStepNodeData,
    position: {
      x: 0,
      y: 0,
    },
  };
};
