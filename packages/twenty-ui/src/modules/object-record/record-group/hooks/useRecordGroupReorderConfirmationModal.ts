import { useRecordGroupReorder } from '@twenty-modules/object-record/record-group/hooks/useRecordGroupReorder';
import { isRecordGroupReorderConfirmationModalVisibleState } from '@twenty-modules/object-record/record-group/states/isRecordGroupReorderConfirmationModalVisibleState';
import { RecordGroupSort } from '@twenty-modules/object-record/record-group/types/RecordGroupSort';
import { recordIndexRecordGroupSortComponentState } from '@twenty-modules/object-record/record-index/states/recordIndexRecordGroupSortComponentState';
import { recordIndexRecordGroupIsDraggableSortComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexRecordGroupIsDraggableSortComponentSelector';
import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { useSetActiveDropdownFocusIdAndMemorizePrevious } from '@twenty-modules/ui/layout/dropdown/hooks/useSetFocusedDropdownIdAndMemorizePrevious';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { OnDragEndResponder } from '@hello-pangea/dnd';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

type UseRecordGroupReorderConfirmationModalParams = {
  recordIndexId: string;
  viewType: ViewType;
};

export const useRecordGroupReorderConfirmationModal = ({
  recordIndexId,
  viewType,
}: UseRecordGroupReorderConfirmationModalParams) => {
  const { setActiveDropdownFocusIdAndMemorizePrevious } =
    useSetActiveDropdownFocusIdAndMemorizePrevious();
  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  const setIsRecordGroupReorderConfirmationModalVisible = useSetRecoilState(
    isRecordGroupReorderConfirmationModalVisibleState,
  );

  const [pendingDragEndReorder, setPendingDragEndReorder] =
    useState<Parameters<OnDragEndResponder> | null>(null);

  const { handleOrderChange: handleRecordGroupOrderChange } =
    useRecordGroupReorder({
      viewBarId: recordIndexId,
      viewType,
    });

  const isDragableSortRecordGroup = useRecoilComponentValueV2(
    recordIndexRecordGroupIsDraggableSortComponentSelector,
  );

  const setRecordGroupSort = useSetRecoilComponentStateV2(
    recordIndexRecordGroupSortComponentState,
  );

  const handleRecordGroupOrderChangeWithModal: OnDragEndResponder = (
    result,
    provided,
  ) => {
    if (!isDragableSortRecordGroup) {
      setIsRecordGroupReorderConfirmationModalVisible(true);
      setActiveDropdownFocusIdAndMemorizePrevious(null);
      setPendingDragEndReorder([result, provided]);
    } else {
      handleRecordGroupOrderChange(result, provided);
    }
  };

  const handleConfirmClick = () => {
    if (!pendingDragEndReorder) {
      throw new Error('pendingDragEndReorder is not set');
    }

    setRecordGroupSort(RecordGroupSort.Manual);
    setPendingDragEndReorder(null);
    handleRecordGroupOrderChange(...pendingDragEndReorder);
    goBackToPreviousDropdownFocusId();
  };

  return {
    handleRecordGroupOrderChangeWithModal,
    handleRecordGroupReorderConfirmClick: handleConfirmClick,
  };
};
