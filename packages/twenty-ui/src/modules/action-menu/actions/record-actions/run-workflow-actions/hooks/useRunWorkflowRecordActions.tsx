import { Action } from '@twenty-modules/action-menu/actions/components/Action';
import { ActionScope } from '@twenty-modules/action-menu/actions/types/ActionScope';
import { ActionType } from '@twenty-modules/action-menu/actions/types/ActionType';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useActiveWorkflowVersionsWithManualTrigger } from '@twenty-modules/workflow/hooks/useActiveWorkflowVersionsWithManualTrigger';
import { useRunWorkflowVersion } from '@twenty-modules/workflow/hooks/useRunWorkflowVersion';
import { msg } from '@lingui/core/macro';

import { useRecoilValue } from 'recoil';
import { capitalize, isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconSettingsAutomation } from '@twenty-ui/display';

export const useRunWorkflowRecordActions = ({
  objectMetadataItem,
  skip,
}: {
  objectMetadataItem: ObjectMetadataItem;
  skip?: boolean;
}) => {
  const contextStoreTargetedRecordsRule = useRecoilComponentValueV2(
    contextStoreTargetedRecordsRuleComponentState,
  );

  const selectedRecordId =
    contextStoreTargetedRecordsRule.mode === 'selection'
      ? contextStoreTargetedRecordsRule.selectedRecordIds[0]
      : undefined;

  const selectedRecord = useRecoilValue(
    recordStoreFamilyState(selectedRecordId ?? ''),
  );

  const { records: activeWorkflowVersions } =
    useActiveWorkflowVersionsWithManualTrigger({
      objectMetadataItem,
      skip,
    });

  const { runWorkflowVersion } = useRunWorkflowVersion();

  return activeWorkflowVersions
    .filter((activeWorkflowVersion) =>
      isDefined(activeWorkflowVersion.workflow),
    )
    .map((activeWorkflowVersion, index) => {
      const name = capitalize(activeWorkflowVersion.workflow.name);

      return {
        type: ActionType.WorkflowRun,
        key: `workflow-run-${activeWorkflowVersion.id}`,
        scope: ActionScope.RecordSelection,
        label: msg`${name}`,
        position: index,
        Icon: IconSettingsAutomation,
        shouldBeRegistered: () => true,
        component: (
          <Action
            onClick={async () => {
              if (!isDefined(selectedRecord)) {
                return;
              }

              await runWorkflowVersion({
                workflowVersionId: activeWorkflowVersion.id,
                payload: selectedRecord,
              });
            }}
          />
        ),
      };
    });
};
