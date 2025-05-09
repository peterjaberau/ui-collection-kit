import { useNavigateCommandMenu } from '@twenty-modules/command-menu/hooks/useNavigateCommandMenu';
import { commandMenuWorkflowIdComponentState } from '@twenty-modules/command-menu/pages/workflow/states/commandMenuWorkflowIdComponentState';
import { commandMenuWorkflowRunIdComponentState } from '@twenty-modules/command-menu/pages/workflow/states/commandMenuWorkflowRunIdComponentState';
import { commandMenuWorkflowVersionIdComponentState } from '@twenty-modules/command-menu/pages/workflow/states/commandMenuWorkflowVersionIdComponentState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { useSetInitialWorkflowRunRightDrawerTab } from '@twenty-modules/workflow/workflow-diagram/hooks/useSetInitialWorkflowRunRightDrawerTab';
import { WorkflowDiagramRunStatus } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';
import { t } from '@lingui/core/macro';
import { useRecoilCallback } from 'recoil';
import {
  IconBolt,
  IconComponent,
  IconSettingsAutomation,
} from '@twenty-ui/display';
import { v4 } from 'uuid';

export const useWorkflowCommandMenu = () => {
  const { navigateCommandMenu } = useNavigateCommandMenu();
  const { setInitialWorkflowRunRightDrawerTab } =
    useSetInitialWorkflowRunRightDrawerTab();

  const openWorkflowTriggerTypeInCommandMenu = useRecoilCallback(
    ({ set }) => {
      return (workflowId: string) => {
        const pageId = v4();

        set(
          commandMenuWorkflowIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowId,
        );

        navigateCommandMenu({
          page: CommandMenuPages.WorkflowStepSelectTriggerType,
          pageTitle: t`Trigger Type`,
          pageIcon: IconBolt,
          pageId,
        });
      };
    },
    [navigateCommandMenu],
  );

  const openStepSelectInCommandMenu = useRecoilCallback(
    ({ set }) => {
      return (workflowId: string) => {
        const pageId = v4();

        set(
          commandMenuWorkflowIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowId,
        );

        navigateCommandMenu({
          page: CommandMenuPages.WorkflowStepSelectAction,
          pageTitle: t`Select Action`,
          pageIcon: IconSettingsAutomation,
          pageId,
        });
      };
    },
    [navigateCommandMenu],
  );

  const openWorkflowEditStepInCommandMenu = useRecoilCallback(
    ({ set }) => {
      return (workflowId: string, title: string, icon: IconComponent) => {
        const pageId = v4();

        set(
          commandMenuWorkflowIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowId,
        );

        navigateCommandMenu({
          page: CommandMenuPages.WorkflowStepEdit,
          pageTitle: title,
          pageIcon: icon,
          pageId,
        });
      };
    },
    [navigateCommandMenu],
  );

  const openWorkflowViewStepInCommandMenu = useRecoilCallback(
    ({ set }) => {
      return ({
        workflowId,
        workflowVersionId,
        title,
        icon,
      }: {
        workflowId: string;
        workflowVersionId: string;
        title: string;
        icon: IconComponent;
      }) => {
        const pageId = v4();

        set(
          commandMenuWorkflowIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowId,
        );
        set(
          commandMenuWorkflowVersionIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowVersionId,
        );

        navigateCommandMenu({
          page: CommandMenuPages.WorkflowStepView,
          pageTitle: title,
          pageIcon: icon,
          pageId,
        });
      };
    },
    [navigateCommandMenu],
  );

  const openWorkflowRunViewStepInCommandMenu = useRecoilCallback(
    ({ set }) => {
      return ({
        workflowId,
        workflowRunId,
        title,
        icon,
        workflowSelectedNode,
        stepExecutionStatus,
      }: {
        workflowId: string;
        workflowRunId: string;
        title: string;
        icon: IconComponent;
        workflowSelectedNode: string;
        stepExecutionStatus: WorkflowDiagramRunStatus;
      }) => {
        const pageId = v4();

        set(
          commandMenuWorkflowIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowId,
        );
        set(
          commandMenuWorkflowRunIdComponentState.atomFamily({
            instanceId: pageId,
          }),
          workflowRunId,
        );

        navigateCommandMenu({
          page: CommandMenuPages.WorkflowRunStepView,
          pageTitle: title,
          pageIcon: icon,
          pageId,
        });

        setInitialWorkflowRunRightDrawerTab({
          workflowSelectedNode,
          stepExecutionStatus,
        });
      };
    },
    [navigateCommandMenu, setInitialWorkflowRunRightDrawerTab],
  );

  return {
    openWorkflowTriggerTypeInCommandMenu,
    openStepSelectInCommandMenu,
    openWorkflowEditStepInCommandMenu,
    openWorkflowViewStepInCommandMenu,
    openWorkflowRunViewStepInCommandMenu,
  };
};
