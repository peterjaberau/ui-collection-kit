import { useWorkflowCommandMenu } from '@twenty-modules/command-menu/hooks/useWorkflowCommandMenu';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { workflowVisualizerWorkflowVersionIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowVersionIdComponentState';
import { useTriggerNodeSelection } from '@twenty-modules/workflow/workflow-diagram/hooks/useTriggerNodeSelection';
import { workflowSelectedNodeComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowSelectedNodeComponentState';
import {
  WorkflowDiagramNode,
  WorkflowDiagramStepNodeData,
} from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { getWorkflowNodeIconKey } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowNodeIconKey';
import { OnSelectionChangeParams, useOnSelectionChange } from '@xyflow/react';
import { useCallback } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useIcons } from '@twenty-ui/display';

export const WorkflowDiagramCanvasReadonlyEffect = () => {
  const { getIcon } = useIcons();
  const setWorkflowSelectedNode = useSetRecoilComponentStateV2(
    workflowSelectedNodeComponentState,
  );
  const { openWorkflowViewStepInCommandMenu } = useWorkflowCommandMenu();

  const workflowVisualizerWorkflowId = useRecoilComponentValueV2(
    workflowVisualizerWorkflowIdComponentState,
  );
  const workflowVisualizerWorkflowVersionId = useRecoilComponentValueV2(
    workflowVisualizerWorkflowVersionIdComponentState,
  );

  const handleSelectionChange = useCallback(
    ({ nodes }: OnSelectionChangeParams) => {
      if (
        !(
          isDefined(workflowVisualizerWorkflowId) &&
          isDefined(workflowVisualizerWorkflowVersionId)
        )
      ) {
        return;
      }

      const selectedNode = nodes[0] as WorkflowDiagramNode | undefined;

      if (!isDefined(selectedNode)) {
        return;
      }

      setWorkflowSelectedNode(selectedNode.id);

      const selectedNodeData = selectedNode.data as WorkflowDiagramStepNodeData;

      openWorkflowViewStepInCommandMenu({
        workflowId: workflowVisualizerWorkflowId,
        workflowVersionId: workflowVisualizerWorkflowVersionId,
        title: selectedNodeData.name,
        icon: getIcon(getWorkflowNodeIconKey(selectedNodeData)),
      });
    },
    [
      setWorkflowSelectedNode,
      openWorkflowViewStepInCommandMenu,
      workflowVisualizerWorkflowId,
      workflowVisualizerWorkflowVersionId,
      getIcon,
    ],
  );

  useOnSelectionChange({
    onChange: handleSelectionChange,
  });

  useTriggerNodeSelection();

  return null;
};
