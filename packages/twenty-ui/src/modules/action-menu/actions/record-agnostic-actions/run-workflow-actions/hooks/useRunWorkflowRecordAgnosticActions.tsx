import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { ActionScope } from '@twenty-modules/action-menu/actions/types/ActionScope';
import { ActionType } from '@twenty-modules/action-menu/actions/types/ActionType';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { useActiveWorkflowVersionsWithManualTrigger } from '@twenty-modules/workflow/hooks/useActiveWorkflowVersionsWithManualTrigger';
import { useRunWorkflowVersion } from '@twenty-modules/workflow/hooks/useRunWorkflowVersion';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import { msg } from '@lingui/core/macro';
import { useContext } from 'react';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconSettingsAutomation } from '@twenty-ui/display';
import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';

export const useRunWorkflowRecordAgnosticActions = () => {
  const isWorkflowEnabled = useIsFeatureEnabled(
    FeatureFlagKey.IsWorkflowEnabled,
  );

  const { actionMenuType } = useContext(ActionMenuContext);

  const { records: activeWorkflowVersions } =
    useActiveWorkflowVersionsWithManualTrigger({
      skip:
        actionMenuType !== 'command-menu' &&
        actionMenuType !== 'command-menu-show-page-action-menu-dropdown',
    });

  const { runWorkflowVersion } = useRunWorkflowVersion();

  if (!isWorkflowEnabled) {
    return [];
  }

  return activeWorkflowVersions
    .map((activeWorkflowVersion, index) => {
      if (!isDefined(activeWorkflowVersion.workflow)) {
        return undefined;
      }

      const name = capitalize(activeWorkflowVersion.workflow.name);

      return {
        type: ActionType.WorkflowRun,
        key: `workflow-run-${activeWorkflowVersion.id}`,
        scope: ActionScope.Global,
        label: msg`${name}`,
        position: index,
        Icon: IconSettingsAutomation,
        shouldBeRegistered: () => true,
        component: (
          <Action
            onClick={() => {
              runWorkflowVersion({
                workflowVersionId: activeWorkflowVersion.id,
              });
            }}
          />
        ),
      };
    })
    .filter(isDefined);
};
