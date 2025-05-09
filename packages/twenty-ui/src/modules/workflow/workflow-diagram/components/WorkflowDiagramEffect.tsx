import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { useStepsOutputSchema } from '@twenty-modules/workflow/hooks/useStepsOutputSchema';
import { flowComponentState } from '@twenty-modules/workflow/states/flowComponentState';
import { workflowLastCreatedStepIdComponentState } from '@twenty-modules/workflow/states/workflowLastCreatedStepIdComponentState';
import {
  WorkflowVersion,
  WorkflowWithCurrentVersion,
} from '@twenty-modules/workflow/types/Workflow';
import { workflowDiagramComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowDiagramComponentState';

import { addCreateStepNodes } from '@twenty-modules/workflow/workflow-diagram/utils/addCreateStepNodes';
import { getWorkflowVersionDiagram } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowVersionDiagram';
import { mergeWorkflowDiagrams } from '@twenty-modules/workflow/workflow-diagram/utils/mergeWorkflowDiagrams';
import { useEffect } from 'react';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const WorkflowDiagramEffect = ({
  workflowWithCurrentVersion,
}: {
  workflowWithCurrentVersion: WorkflowWithCurrentVersion | undefined;
}) => {
  const workflowDiagramState = useRecoilComponentCallbackStateV2(
    workflowDiagramComponentState,
  );
  const setWorkflowDiagram = useSetRecoilComponentStateV2(
    workflowDiagramComponentState,
  );
  const setFlow = useSetRecoilComponentStateV2(flowComponentState);
  const { populateStepsOutputSchema } = useStepsOutputSchema();

  const workflowLastCreatedStepIdState = useRecoilComponentCallbackStateV2(
    workflowLastCreatedStepIdComponentState,
  );

  const computeAndMergeNewWorkflowDiagram = useRecoilCallback(
    ({ snapshot, set }) => {
      return (currentVersion: WorkflowVersion) => {
        const previousWorkflowDiagram = getSnapshotValue(
          snapshot,
          workflowDiagramState,
        );

        const nextWorkflowDiagram = addCreateStepNodes(
          getWorkflowVersionDiagram(currentVersion),
        );

        let mergedWorkflowDiagram = nextWorkflowDiagram;
        if (isDefined(previousWorkflowDiagram)) {
          mergedWorkflowDiagram = mergeWorkflowDiagrams(
            previousWorkflowDiagram,
            nextWorkflowDiagram,
          );
        }

        const lastCreatedStepId = getSnapshotValue(
          snapshot,
          workflowLastCreatedStepIdState,
        );
        if (isDefined(lastCreatedStepId)) {
          mergedWorkflowDiagram.nodes = mergedWorkflowDiagram.nodes.map(
            (node) => {
              return {
                ...node,
                selected: node.id === lastCreatedStepId,
              };
            },
          );

          set(workflowLastCreatedStepIdState, undefined);
        }

        set(workflowDiagramState, mergedWorkflowDiagram);
      };
    },
    [workflowLastCreatedStepIdState, workflowDiagramState],
  );

  const currentVersion = workflowWithCurrentVersion?.currentVersion;
  useEffect(() => {
    if (!isDefined(currentVersion)) {
      setFlow(undefined);
      setWorkflowDiagram(undefined);

      return;
    }

    setFlow({
      workflowVersionId: currentVersion.id,
      trigger: currentVersion.trigger,
      steps: currentVersion.steps,
    });

    computeAndMergeNewWorkflowDiagram(currentVersion);
  }, [
    computeAndMergeNewWorkflowDiagram,
    setFlow,
    setWorkflowDiagram,
    currentVersion,
  ]);

  useEffect(() => {
    if (!isDefined(currentVersion)) {
      return;
    }

    populateStepsOutputSchema(currentVersion);
  }, [currentVersion, populateStepsOutputSchema]);

  return null;
};
