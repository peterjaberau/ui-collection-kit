import { WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { splitWorkflowTriggerEventName } from '@twenty-modules/workflow/utils/splitWorkflowTriggerEventName';
import { DATABASE_TRIGGER_TYPES } from '@twenty-modules/workflow/workflow-trigger/constants/DatabaseTriggerTypes';
import { OTHER_TRIGGER_TYPES } from '@twenty-modules/workflow/workflow-trigger/constants/OtherTriggerTypes';

export const getTriggerIcon = (
  trigger: WorkflowTrigger,
): string | undefined => {
  if (trigger.type === 'DATABASE_EVENT') {
    const eventName = splitWorkflowTriggerEventName(
      trigger.settings.eventName,
    ).event;

    return DATABASE_TRIGGER_TYPES.find((type) => type.event === eventName)
      ?.icon;
  }

  return OTHER_TRIGGER_TYPES.find((item) => item.type === trigger.type)?.icon;
};
