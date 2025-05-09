import { StyledHandle } from '@twenty-modules/workflow/workflow-diagram/components/WorkflowDiagramStepNodeBase';
import { NODE_BORDER_WIDTH } from '@twenty-modules/workflow/workflow-diagram/constants/NodeBorderWidth';
import { NODE_ICON_LEFT_MARGIN } from '@twenty-modules/workflow/workflow-diagram/constants/NodeIconLeftMargin';
import { NODE_ICON_WIDTH } from '@twenty-modules/workflow/workflow-diagram/constants/NodeIconWidth';
import styled from '@emotion/styled';
import { Position } from '@xyflow/react';
import { IconButton } from '@twenty-ui/input';
import { IconPlus } from '@twenty-ui/display';

const StyledContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing(3)};
  transform: translateX(-50%);
  position: relative;
  left: ${NODE_ICON_WIDTH + NODE_ICON_LEFT_MARGIN + NODE_BORDER_WIDTH}px;
`;

const StyledTargetHandle = styled(StyledHandle)`
  visibility: hidden;
`;

export const WorkflowDiagramCreateStepNode = () => {
  return (
    <StyledContainer>
      <StyledTargetHandle type="target" position={Position.Top} />

      <IconButton Icon={IconPlus} size="medium" ariaLabel="Add a step" />
    </StyledContainer>
  );
};
