import {
  Workflow,
  WorkflowVersion,
  WorkflowWithCurrentVersion,
} from '@twenty-modules/workflow/types/Workflow';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function assertWorkflowWithCurrentVersionIsDefined(
  workflow: WorkflowWithCurrentVersion | undefined,
): asserts workflow is Workflow & { currentVersion: WorkflowVersion } {
  if (!isDefined(workflow) || !isDefined(workflow.currentVersion)) {
    throw new Error('Expected workflow and its current version to be defined');
  }
}
