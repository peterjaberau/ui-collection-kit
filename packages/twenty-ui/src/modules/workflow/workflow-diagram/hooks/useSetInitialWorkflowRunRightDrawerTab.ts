import { getIsInputTabDisabled } from '@twenty-modules/command-menu/pages/workflow/step/view-run/utils/getIsInputTabDisabled';
import { getIsOutputTabDisabled } from '@twenty-modules/command-menu/pages/workflow/step/view-run/utils/getIsOutputTabDisabled';
import { commandMenuPageInfoState } from '@twenty-modules/command-menu/states/commandMenuPageInfoState';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { WorkflowDiagramRunStatus } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { WorkflowRunTabId } from '@twenty-modules/workflow/workflow-steps/types/WorkflowRunTabId';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useSetInitialWorkflowRunRightDrawerTab = () => {
  const setInitialWorkflowRunRightDrawerTab = useRecoilCallback(
    ({ snapshot, set }) =>
      ({
        workflowSelectedNode,
        stepExecutionStatus,
      }: {
        workflowSelectedNode: string;
        stepExecutionStatus: WorkflowDiagramRunStatus;
      }) => {
        const commandMenuPageInfo = getSnapshotValue(
          snapshot,
          commandMenuPageInfoState,
        );

        const activeWorkflowRunRightDrawerTab = getSnapshotValue(
          snapshot,
          activeTabIdComponentState.atomFamily({
            instanceId: commandMenuPageInfo.instanceId,
          }),
        ) as WorkflowRunTabId | null;

        const isInputTabDisabled = getIsInputTabDisabled({
          stepExecutionStatus,
          workflowSelectedNode,
        });
        const isOutputTabDisabled = getIsOutputTabDisabled({
          stepExecutionStatus,
        });

        if (!isDefined(activeWorkflowRunRightDrawerTab)) {
          const defaultTabId = isOutputTabDisabled
            ? WorkflowRunTabId.NODE
            : WorkflowRunTabId.OUTPUT;

          set(
            activeTabIdComponentState.atomFamily({
              instanceId: commandMenuPageInfo.instanceId,
            }),
            defaultTabId,
          );

          return;
        }

        if (
          (isInputTabDisabled &&
            activeWorkflowRunRightDrawerTab === WorkflowRunTabId.INPUT) ||
          (isOutputTabDisabled &&
            activeWorkflowRunRightDrawerTab === WorkflowRunTabId.OUTPUT)
        ) {
          set(
            activeTabIdComponentState.atomFamily({
              instanceId: commandMenuPageInfo.instanceId,
            }),
            WorkflowRunTabId.NODE,
          );
        }
      },
    [],
  );

  return {
    setInitialWorkflowRunRightDrawerTab,
  };
};
