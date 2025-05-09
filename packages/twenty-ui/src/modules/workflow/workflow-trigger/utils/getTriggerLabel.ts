import { WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { splitWorkflowTriggerEventName } from '@twenty-modules/workflow/utils/splitWorkflowTriggerEventName';
import { DATABASE_TRIGGER_TYPES } from '@twenty-modules/workflow/workflow-trigger/constants/DatabaseTriggerTypes';
import { OTHER_TRIGGER_TYPES } from '@twenty-modules/workflow/workflow-trigger/constants/OtherTriggerTypes';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getTriggerDefaultLabel = (trigger: WorkflowTrigger): string => {
  if (trigger.type === 'DATABASE_EVENT') {
    const triggerEvent = splitWorkflowTriggerEventName(
      trigger.settings.eventName,
    );

    const label = DATABASE_TRIGGER_TYPES.find(
      (type) => type.event === triggerEvent.event,
    )?.defaultLabel;

    if (!isDefined(label)) {
      throw new Error('Unknown trigger event');
    }

    return label;
  }

  const label = OTHER_TRIGGER_TYPES.find(
    (item) => item.type === trigger.type,
  )?.defaultLabel;

  if (!isDefined(label)) {
    throw new Error('Unknown trigger type');
  }

  return label;
};
