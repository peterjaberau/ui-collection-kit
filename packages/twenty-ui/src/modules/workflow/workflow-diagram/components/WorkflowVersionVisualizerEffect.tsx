import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useStepsOutputSchema } from '@twenty-modules/workflow/hooks/useStepsOutputSchema';
import { useWorkflowVersion } from '@twenty-modules/workflow/hooks/useWorkflowVersion';
import { flowComponentState } from '@twenty-modules/workflow/states/flowComponentState';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { workflowVisualizerWorkflowVersionIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowVersionIdComponentState';
import { workflowDiagramComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowDiagramComponentState';
import { getWorkflowVersionDiagram } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowVersionDiagram';
import { useEffect } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const WorkflowVersionVisualizerEffect = ({
  workflowVersionId,
}: {
  workflowVersionId: string;
}) => {
  const workflowVersion = useWorkflowVersion(workflowVersionId);

  const setFlow = useSetRecoilComponentStateV2(flowComponentState);
  const setWorkflowDiagram = useSetRecoilComponentStateV2(
    workflowDiagramComponentState,
  );
  const setWorkflowVisualizerWorkflowId = useSetRecoilComponentStateV2(
    workflowVisualizerWorkflowIdComponentState,
  );
  const setWorkflowVisualizerWorkflowVersionId = useSetRecoilComponentStateV2(
    workflowVisualizerWorkflowVersionIdComponentState,
  );

  const { populateStepsOutputSchema } = useStepsOutputSchema();

  useEffect(() => {
    if (!isDefined(workflowVersion)) {
      setFlow(undefined);

      return;
    }

    setFlow({
      workflowVersionId: workflowVersion.id,
      trigger: workflowVersion.trigger,
      steps: workflowVersion.steps,
    });

    setWorkflowVisualizerWorkflowId(workflowVersion.workflowId);
    setWorkflowVisualizerWorkflowVersionId(workflowVersion.id);
  }, [
    setFlow,
    setWorkflowVisualizerWorkflowId,
    setWorkflowVisualizerWorkflowVersionId,
    workflowVersion,
  ]);

  useEffect(() => {
    if (!isDefined(workflowVersion)) {
      setWorkflowDiagram(undefined);

      return;
    }

    const nextWorkflowDiagram = getWorkflowVersionDiagram(workflowVersion);

    setWorkflowDiagram(nextWorkflowDiagram);
  }, [setWorkflowDiagram, workflowVersion]);

  useEffect(() => {
    if (!isDefined(workflowVersion)) {
      return;
    }

    populateStepsOutputSchema(workflowVersion);
  }, [populateStepsOutputSchema, workflowVersion]);

  return null;
};
