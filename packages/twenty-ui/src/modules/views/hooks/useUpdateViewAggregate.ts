import { contextStoreCurrentViewIdComponentState } from '@twenty-modules/context-store/states/contextStoreCurrentViewIdComponentState';
import { recordIndexKanbanAggregateOperationState } from '@twenty-modules/object-record/record-index/states/recordIndexKanbanAggregateOperationState';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { convertExtendedAggregateOperationToAggregateOperation } from '@twenty-modules/object-record/utils/convertExtendedAggregateOperationToAggregateOperation';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useUpdateView } from '@twenty-modules/views/hooks/useUpdateView';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

export const useUpdateViewAggregate = () => {
  const currentViewId = useRecoilComponentValueV2(
    contextStoreCurrentViewIdComponentState,
  );
  const { updateView } = useUpdateView();

  const setRecordIndexKanbanAggregateOperationState = useSetRecoilState(
    recordIndexKanbanAggregateOperationState,
  );

  const updateViewAggregate = useCallback(
    ({
      kanbanAggregateOperationFieldMetadataId,
      kanbanAggregateOperation,
    }: {
      kanbanAggregateOperationFieldMetadataId: string | null;
      kanbanAggregateOperation: ExtendedAggregateOperations | null;
    }) => {
      const convertedKanbanAggregateOperation =
        convertExtendedAggregateOperationToAggregateOperation(
          kanbanAggregateOperation,
        );
      updateView({
        id: currentViewId,
        kanbanAggregateOperationFieldMetadataId,
        kanbanAggregateOperation: convertedKanbanAggregateOperation,
      });

      setRecordIndexKanbanAggregateOperationState({
        operation: convertedKanbanAggregateOperation,
        fieldMetadataId: kanbanAggregateOperationFieldMetadataId,
      });
    },
    [currentViewId, updateView, setRecordIndexKanbanAggregateOperationState],
  );

  return {
    updateViewAggregate,
  };
};
