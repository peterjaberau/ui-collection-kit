import { WorkflowAction, WorkflowTrigger } from '@twenty-modules/workflow/types/Workflow';
import { assertUnreachable } from '@twenty-modules/workflow/utils/assertUnreachable';
import { getStepDefinitionOrThrow } from '@twenty-modules/workflow/utils/getStepDefinitionOrThrow';
import { WorkflowDiagramRunStatus } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { WorkflowActionServerlessFunction } from '@twenty-modules/workflow/workflow-steps/workflow-actions/code-action/components/WorkflowActionServerlessFunction';
import { WorkflowEditActionCreateRecord } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionCreateRecord';
import { WorkflowEditActionDeleteRecord } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionDeleteRecord';
import { WorkflowEditActionFindRecords } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionFindRecords';
import { WorkflowEditActionSendEmail } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionSendEmail';
import { WorkflowEditActionUpdateRecord } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionUpdateRecord';
import { WorkflowEditActionFormFiller } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/components/WorkflowEditActionFormFiller';
import { WorkflowEditTriggerCronForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerCronForm';
import { WorkflowEditTriggerDatabaseEventForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerDatabaseEventForm';
import { WorkflowEditTriggerManualForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerManualForm';
import { WorkflowEditTriggerWebhookForm } from '@twenty-modules/workflow/workflow-trigger/components/WorkflowEditTriggerWebhookForm';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type WorkflowRunStepNodeDetailProps = {
  stepId: string;
  trigger: WorkflowTrigger | null;
  steps: Array<WorkflowAction> | null;
  stepExecutionStatus?: WorkflowDiagramRunStatus;
};

export const WorkflowRunStepNodeDetail = ({
  stepId,
  trigger,
  steps,
  stepExecutionStatus,
}: WorkflowRunStepNodeDetailProps) => {
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
              triggerOptions={{
                readonly: true,
              }}
            />
          );
        }
        case 'MANUAL': {
          return (
            <WorkflowEditTriggerManualForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={{
                readonly: true,
              }}
            />
          );
        }
        case 'WEBHOOK': {
          return (
            <WorkflowEditTriggerWebhookForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={{
                readonly: true,
              }}
            />
          );
        }
        case 'CRON': {
          return (
            <WorkflowEditTriggerCronForm
              key={stepId}
              trigger={stepDefinition.definition}
              triggerOptions={{
                readonly: true,
              }}
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
              actionOptions={{
                readonly: true,
              }}
            />
          );
        }
        case 'SEND_EMAIL': {
          return (
            <WorkflowEditActionSendEmail
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={{
                readonly: true,
              }}
            />
          );
        }
        case 'CREATE_RECORD': {
          return (
            <WorkflowEditActionCreateRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={{
                readonly: true,
              }}
            />
          );
        }

        case 'UPDATE_RECORD': {
          return (
            <WorkflowEditActionUpdateRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={{
                readonly: true,
              }}
            />
          );
        }

        case 'DELETE_RECORD': {
          return (
            <WorkflowEditActionDeleteRecord
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={{
                readonly: true,
              }}
            />
          );
        }

        case 'FIND_RECORDS': {
          return (
            <WorkflowEditActionFindRecords
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={{
                readonly: true,
              }}
            />
          );
        }

        case 'FORM': {
          return (
            <WorkflowEditActionFormFiller
              key={stepId}
              action={stepDefinition.definition}
              actionOptions={{
                readonly: stepExecutionStatus !== 'running',
              }}
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
