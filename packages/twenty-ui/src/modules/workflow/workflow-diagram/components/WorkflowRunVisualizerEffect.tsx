import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useStepsOutputSchema } from '@twenty-modules/workflow/hooks/useStepsOutputSchema';
import { useWorkflowRun } from '@twenty-modules/workflow/hooks/useWorkflowRun';
import { useWorkflowVersion } from '@twenty-modules/workflow/hooks/useWorkflowVersion';
import { flowComponentState } from '@twenty-modules/workflow/states/flowComponentState';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { workflowVisualizerWorkflowRunIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowRunIdComponentState';
import { WorkflowRunOutput } from '@twenty-modules/workflow/types/Workflow';
import { workflowDiagramComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowDiagramComponentState';
import { workflowDiagramStatusComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowDiagramStatusComponentState';
import { workflowRunStepToOpenByDefaultComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowRunStepToOpenByDefaultComponentState';
import { generateWorkflowRunDiagram } from '@twenty-modules/workflow/workflow-diagram/utils/generateWorkflowRunDiagram';
import { selectWorkflowDiagramNode } from '@twenty-modules/workflow/workflow-diagram/utils/selectWorkflowDiagramNode';
import { useContext, useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const WorkflowRunVisualizerEffect = ({
  workflowRunId,
}: {
  workflowRunId: string;
}) => {
  const workflowRun = useWorkflowRun({ workflowRunId });
  const workflowVersion = useWorkflowVersion(workflowRun?.workflowVersionId);

  const setWorkflowRunId = useSetRecoilComponentStateV2(
    workflowVisualizerWorkflowRunIdComponentState,
  );
  const setWorkflowVisualizerWorkflowId = useSetRecoilComponentStateV2(
    workflowVisualizerWorkflowIdComponentState,
  );

  const flowState = useRecoilComponentCallbackStateV2(flowComponentState);
  const workflowDiagramState = useRecoilComponentCallbackStateV2(
    workflowDiagramComponentState,
  );
  const workflowDiagramStatusState = useRecoilComponentCallbackStateV2(
    workflowDiagramStatusComponentState,
  );
  const workflowRunStepToOpenByDefaultState = useRecoilComponentCallbackStateV2(
    workflowRunStepToOpenByDefaultComponentState,
  );

  const { populateStepsOutputSchema } = useStepsOutputSchema();

  const { isInRightDrawer } = useContext(ActionMenuContext);

  useEffect(() => {
    setWorkflowRunId(workflowRunId);
  }, [setWorkflowRunId, workflowRunId]);

  useEffect(() => {
    if (!isDefined(workflowRun)) {
      return;
    }

    setWorkflowVisualizerWorkflowId(workflowRun.workflowId);
  }, [setWorkflowVisualizerWorkflowId, workflowRun]);

  const handleWorkflowRunDiagramGeneration = useRecoilCallback(
    ({ snapshot, set }) =>
      ({
        workflowRunOutput,
        workflowVersionId,
        skipNodeSelection,
      }: {
        workflowRunOutput: WorkflowRunOutput | undefined;
        workflowVersionId: string | undefined;
        skipNodeSelection: boolean;
      }) => {
        if (!(isDefined(workflowRunOutput) && isDefined(workflowVersionId))) {
          set(flowState, undefined);
          set(workflowDiagramState, undefined);

          return;
        }

        const workflowDiagramStatus = getSnapshotValue(
          snapshot,
          workflowDiagramStatusState,
        );

        if (workflowDiagramStatus !== 'done') {
          set(workflowDiagramStatusState, 'computing-diagram');
        }

        set(flowState, {
          workflowVersionId,
          trigger: workflowRunOutput.flow.trigger,
          steps: workflowRunOutput.flow.steps,
        });

        const { diagram: baseWorkflowRunDiagram, stepToOpenByDefault } =
          generateWorkflowRunDiagram({
            trigger: workflowRunOutput.flow.trigger,
            steps: workflowRunOutput.flow.steps,
            stepsOutput: workflowRunOutput.stepsOutput,
          });

        if (isDefined(stepToOpenByDefault) && !skipNodeSelection) {
          const workflowRunDiagram = selectWorkflowDiagramNode({
            diagram: baseWorkflowRunDiagram,
            nodeIdToSelect: stepToOpenByDefault.id,
          });

          set(workflowDiagramState, workflowRunDiagram);
          set(workflowRunStepToOpenByDefaultState, {
            id: stepToOpenByDefault.id,
            data: stepToOpenByDefault.data,
          });
        } else {
          set(workflowDiagramState, baseWorkflowRunDiagram);
        }

        if (workflowDiagramStatus !== 'done') {
          set(workflowDiagramStatusState, 'computing-dimensions');
        }
      },
    [
      flowState,
      workflowDiagramState,
      workflowDiagramStatusState,
      workflowRunStepToOpenByDefaultState,
    ],
  );

  useEffect(() => {
    handleWorkflowRunDiagramGeneration({
      workflowRunOutput: workflowRun?.output ?? undefined,
      workflowVersionId: workflowRun?.workflowVersionId,
      skipNodeSelection: isInRightDrawer,
    });
  }, [
    handleWorkflowRunDiagramGeneration,
    isInRightDrawer,
    workflowRun?.output,
    workflowRun?.workflowVersionId,
  ]);

  useEffect(() => {
    if (!isDefined(workflowVersion)) {
      return;
    }

    populateStepsOutputSchema(workflowVersion);
  }, [populateStepsOutputSchema, workflowVersion]);

  return null;
};
