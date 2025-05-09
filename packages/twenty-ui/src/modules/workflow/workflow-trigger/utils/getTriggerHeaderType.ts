import { WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { getTriggerDefaultLabel } from '@twenty-modules/workflow/workflow-trigger/utils/getTriggerLabel';
import { assertUnreachable } from '@ui-collection-kit/twenty-shared/src/utils';

export const getTriggerHeaderType = (trigger: WorkflowTrigger) => {
  switch (trigger.type) {
    case 'CRON': {
      return 'Trigger';
    }
    case 'WEBHOOK': {
      return 'Trigger · Webhook';
    }
    case 'MANUAL': {
      return 'Trigger · Manual';
    }
    case 'DATABASE_EVENT': {
      const defaultLabel = getTriggerDefaultLabel(trigger);

      return `Trigger · ${defaultLabel}`;
    }
    default: {
      assertUnreachable(trigger, 'Unknown trigger type');
    }
  }
};
