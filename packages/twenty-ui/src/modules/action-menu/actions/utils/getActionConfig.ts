import { DEFAULT_RECORD_ACTIONS_CONFIG } from '@twenty-modules/action-menu/actions/record-actions/constants/DefaultRecordActionsConfig';
import { WORKFLOW_ACTIONS_CONFIG } from '@twenty-modules/action-menu/actions/record-actions/constants/WorkflowActionsConfig';
import { WORKFLOW_RUNS_ACTIONS_CONFIG } from '@twenty-modules/action-menu/actions/record-actions/constants/WorkflowRunsActionsConfig';
import { WORKFLOW_VERSIONS_ACTIONS_CONFIG } from '@twenty-modules/action-menu/actions/record-actions/constants/WorkflowVersionsActionsConfig';
import { ActionConfig } from '@twenty-modules/action-menu/actions/types/ActionConfig';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const getActionConfig = (
  objectMetadataItem?: ObjectMetadataItem,
): Record<string, ActionConfig> => {
  if (!isDefined(objectMetadataItem)) {
    return {};
  }

  switch (objectMetadataItem.nameSingular) {
    case CoreObjectNameSingular.Workflow:
      return WORKFLOW_ACTIONS_CONFIG;
    case CoreObjectNameSingular.WorkflowVersion:
      return WORKFLOW_VERSIONS_ACTIONS_CONFIG;
    case CoreObjectNameSingular.WorkflowRun:
      return WORKFLOW_RUNS_ACTIONS_CONFIG;
    default:
      return DEFAULT_RECORD_ACTIONS_CONFIG;
  }
};
