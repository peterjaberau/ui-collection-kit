import { RecordBoardComponentInstanceContext } from '@twenty-modules/object-record/record-board/states/contexts/RecordBoardComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const isRecordBoardCompactModeActiveComponentState =
  createComponentStateV2<boolean>({
    key: 'isRecordBoardCompactModeActiveComponentState',
    defaultValue: false,
    componentInstanceContext: RecordBoardComponentInstanceContext,
  });
