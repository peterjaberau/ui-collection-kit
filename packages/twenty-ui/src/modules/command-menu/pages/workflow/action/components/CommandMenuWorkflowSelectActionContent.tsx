import { WorkflowWithCurrentVersion } from '@twenty-modules/workflow/types/Workflow';
import { RightDrawerStepListContainer } from '@twenty-modules/workflow/workflow-steps/components/RightDrawerWorkflowSelectStepContainer';
import { RightDrawerWorkflowSelectStepTitle } from '@twenty-modules/workflow/workflow-steps/components/RightDrawerWorkflowSelectStepTitle';
import { useCreateStep } from '@twenty-modules/workflow/workflow-steps/hooks/useCreateStep';
import { OTHER_ACTIONS } from '@twenty-modules/workflow/workflow-steps/workflow-actions/constants/OtherActions';
import { RECORD_ACTIONS } from '@twenty-modules/workflow/workflow-steps/workflow-actions/constants/RecordActions';
import { MenuItemCommand } from '@twenty-ui/navigation';
import { useIcons } from '@twenty-ui/display';

export const CommandMenuWorkflowSelectActionContent = ({
  workflow,
}: {
  workflow: WorkflowWithCurrentVersion;
}) => {
  const { getIcon } = useIcons();
  const { createStep } = useCreateStep({
    workflow,
  });

  return (
    <RightDrawerStepListContainer>
      <RightDrawerWorkflowSelectStepTitle>
        Records
      </RightDrawerWorkflowSelectStepTitle>
      {RECORD_ACTIONS.map((action) => (
        <MenuItemCommand
          key={action.type}
          LeftIcon={getIcon(action.icon)}
          text={action.label}
          onClick={() => createStep(action.type)}
        />
      ))}
      <RightDrawerWorkflowSelectStepTitle>
        Other
      </RightDrawerWorkflowSelectStepTitle>
      {OTHER_ACTIONS.map((action) => (
        <MenuItemCommand
          key={action.type}
          LeftIcon={getIcon(action.icon)}
          text={action.label}
          onClick={() => createStep(action.type)}
        />
      ))}
    </RightDrawerStepListContainer>
  );
};
