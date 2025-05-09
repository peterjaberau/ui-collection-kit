import { DraggableProvidedDragHandleProps } from '@hello-pangea/dnd';
import { createRequiredContext } from '@twenty-ui/front/utils/createRequiredContext';

export type RecordTableRowDraggableContextValue = {
  isDragging: boolean;
  dragHandleProps: DraggableProvidedDragHandleProps | null;
};

export const [
  RecordTableRowDraggableContextProvider,
  useRecordTableRowDraggableContextOrThrow,
] = createRequiredContext<RecordTableRowDraggableContextValue>(
  'RecordTableRowDraggableContext',
);
