import { useWorkflowCommandMenu } from '@twenty-modules/command-menu/hooks/useWorkflowCommandMenu';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { getRecordFromCache } from '@twenty-modules/object-record/cache/utils/getRecordFromCache';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/state/utils/getSnapshotValue';
import { flowComponentState } from '@twenty-modules/workflow/states/flowComponentState';
import { workflowVisualizerWorkflowIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowIdComponentState';
import { workflowVisualizerWorkflowRunIdComponentState } from '@twenty-modules/workflow/states/workflowVisualizerWorkflowRunIdComponentState';
import { WorkflowRun } from '@twenty-modules/workflow/types/Workflow';
import { getWorkflowVisualizerComponentInstanceId } from '@twenty-modules/workflow/utils/getWorkflowVisualizerComponentInstanceId';
import { workflowSelectedNodeComponentState } from '@twenty-modules/workflow/workflow-diagram/states/workflowSelectedNodeComponentState';
import { generateWorkflowRunDiagram } from '@twenty-modules/workflow/workflow-diagram/utils/generateWorkflowRunDiagram';
import { getWorkflowNodeIconKey } from '@twenty-modules/workflow/workflow-diagram/utils/getWorkflowNodeIconKey';
import { useApolloClient } from '@apollo/client';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { useIcons } from '@twenty-ui/display';

export const useRunWorkflowRunOpeningInCommandMenuSideEffects = () => {
  const apolloClient = useApolloClient();
  const { openWorkflowRunViewStepInCommandMenu } = useWorkflowCommandMenu();
  const { getIcon } = useIcons();

  const runWorkflowRunOpeningInCommandMenuSideEffects = useRecoilCallback(
    ({ snapshot, set }) =>
      ({
        objectMetadataItem,
        recordId,
      }: {
        objectMetadataItem: ObjectMetadataItem;
        recordId: string;
      }) => {
        const objectMetadataItems = getSnapshotValue(
          snapshot,
          objectMetadataItemsState,
        );

        const workflowRunRecord = getRecordFromCache<WorkflowRun>({
          objectMetadataItem,
          cache: apolloClient.cache,
          recordId,
          objectMetadataItems,
        });
        if (
          !(isDefined(workflowRunRecord) && isDefined(workflowRunRecord.output))
        ) {
          throw new Error(
            `No workflow run record found for record ID ${recordId}`,
          );
        }

        const { stepToOpenByDefault } = generateWorkflowRunDiagram({
          steps: workflowRunRecord.output.flow.steps,
          stepsOutput: workflowRunRecord.output.stepsOutput,
          trigger: workflowRunRecord.output.flow.trigger,
        });

        if (!isDefined(stepToOpenByDefault)) {
          return;
        }

        set(
          workflowVisualizerWorkflowRunIdComponentState.atomFamily({
            instanceId: getWorkflowVisualizerComponentInstanceId({
              recordId,
            }),
          }),
          workflowRunRecord.id,
        );
        set(
          workflowVisualizerWorkflowIdComponentState.atomFamily({
            instanceId: getWorkflowVisualizerComponentInstanceId({
              recordId,
            }),
          }),
          workflowRunRecord.workflowId,
        );
        set(
          flowComponentState.atomFamily({
            instanceId: getWorkflowVisualizerComponentInstanceId({
              recordId,
            }),
          }),
          {
            workflowVersionId: workflowRunRecord.workflowVersionId,
            trigger: workflowRunRecord.output.flow.trigger,
            steps: workflowRunRecord.output.flow.steps,
          },
        );
        set(
          workflowSelectedNodeComponentState.atomFamily({
            instanceId: getWorkflowVisualizerComponentInstanceId({
              recordId,
            }),
          }),
          stepToOpenByDefault.id,
        );

        openWorkflowRunViewStepInCommandMenu({
          workflowId: workflowRunRecord.workflowId,
          workflowRunId: workflowRunRecord.id,
          title: stepToOpenByDefault.data.name,
          icon: getIcon(getWorkflowNodeIconKey(stepToOpenByDefault.data)),
          workflowSelectedNode: stepToOpenByDefault.id,
          stepExecutionStatus: stepToOpenByDefault.data.runStatus,
        });
      },
    [apolloClient.cache, getIcon, openWorkflowRunViewStepInCommandMenu],
  );

  return {
    runWorkflowRunOpeningInCommandMenuSideEffects,
  };
};
