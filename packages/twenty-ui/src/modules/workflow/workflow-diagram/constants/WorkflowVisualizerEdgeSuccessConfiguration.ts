import { EDGE_GREEN_CIRCLE_MARKED_ID } from '@twenty-modules/workflow/workflow-diagram/constants/EdgeGreenCircleMarkedId';
import { EDGE_GREEN_ROUNDED_ARROW_MARKER_ID } from '@twenty-modules/workflow/workflow-diagram/constants/EdgeGreenRoundedArrowMarkerId';
import { WORKFLOW_DIAGRAM_SUCCESS_EDGE_TYPE } from '@twenty-modules/workflow/workflow-diagram/constants/WorkflowDiagramSuccessEdgeType';
import { WorkflowDiagramEdge } from '@twenty-modules/workflow/workflow-diagram/types/WorkflowDiagram';

export const WORKFLOW_VISUALIZER_EDGE_SUCCESS_CONFIGURATION = {
  type: WORKFLOW_DIAGRAM_SUCCESS_EDGE_TYPE,
  markerStart: EDGE_GREEN_CIRCLE_MARKED_ID,
  markerEnd: EDGE_GREEN_ROUNDED_ARROW_MARKER_ID,
  deletable: false,
  selectable: false,
} satisfies Partial<WorkflowDiagramEdge>;
