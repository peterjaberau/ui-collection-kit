import { WorkflowAction, WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';
import { getStepDefinitionOrThrow } from '@twenty-modules/workflow/utils/getStepDefinitionOrThrow';
import { WorkflowActionServerlessFunction } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/components/WorkflowActionServerlessFunction';
import { WorkflowEditActionCreateRecord } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionCreateRecord';
import { WorkflowEditActionDeleteRecord } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionDeleteRecord';
import { WorkflowEditActionFindRecords } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionFindRecords';
import { WorkflowEditActionSendEmail } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionSendEmail';
import { WorkflowEditActionUpdateRecord } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionUpdateRecord';
import { WorkflowEditActionFormBuilder } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/components/WorkflowEditActionFormBuilder';
import { WorkflowEditTriggerCronForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerCronForm';
import { WorkflowEditTriggerDatabaseEventForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerDatabaseEventForm';
import { WorkflowEditTriggerManualForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerManualForm';
import { WorkflowEditTriggerWebhookForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerWebhookForm';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type WorkflowStepDetailProps = {
  stepId: string;
  trigger: WorkflowTrigger | null;
  steps: Array<WorkflowAction> | null;
} & (
  | {
      readonly: true;
      onTriggerUpdate?: undefined;
      onActionUpdate?: undefined;
    }
  | {
      stepId: string;
      readonly?: false;
      onTriggerUpdate: (trigger: WorkflowTrigger) => void;
      onActionUpdate: (action: WorkflowAction) => void;
    }
);

export const WorkflowStepDetail = ({
  stepId,
  trigger,
  steps,
  ...props
}: WorkflowStepDetailProps) => {
  const stepDefinition = getStepDefinitionOrThrow({
    stepId,
    trigger,
    steps,
  });

  if (!isDefined(stepDefinition) || !isDefined(stepDefinition.definition)) {
    return null;
  }

  switch (stepDefinition.type) {
    case 'trigger': {
      switch (stepDefinition.definition.type) {
        case 'DATABASE_EVENT': {
          return (
            <WorkflowEditTriggerDatabaseEventForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        case 'MANUAL': {
          return (
            <WorkflowEditTriggerManualForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        case 'WEBHOOK': {
          return (
            <WorkflowEditTriggerWebhookForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
        case 'CRON': {
          return (
            <WorkflowEditTriggerCronForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={props}
            />
          );
        }
      }

      return assertUnreachable(
        stepDefinition.definition,
        `Expected the step to have an handler; ${JSON.stringify(stepDefinition)}`,
      );
    }
    case 'action': {
      switch (stepDefinition.definition.type) {
        case 'CODE': {
          return (
            <WorkflowActionServerlessFunction
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
        case 'SEND_EMAIL': {
          return (
            <WorkflowEditActionSendEmail
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
        case 'CREATE_RECORD': {
          return (
            <WorkflowEditActionCreateRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'UPDATE_RECORD': {
          return (
            <WorkflowEditActionUpdateRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'DELETE_RECORD': {
          return (
            <WorkflowEditActionDeleteRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'FIND_RECORDS': {
          return (
            <WorkflowEditActionFindRecords
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }

        case 'FORM': {
          return (
            <WorkflowEditActionFormBuilder
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={props}
            />
          );
        }
      }
    }
  }

  return assertUnreachable(
    stepDefinition,
    `Expected the step to have an handler; ${JSON.stringify(stepDefinition)}`,
  );
};
