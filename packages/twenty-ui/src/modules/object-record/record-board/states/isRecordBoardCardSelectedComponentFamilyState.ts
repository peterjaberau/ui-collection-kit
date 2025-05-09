import { RecordBoardComponentInstanceContext } from '@twenty-modules/object-record/record-board/states/contexts/RecordBoardComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const isRecordBoardCardSelectedComponentFamilyState =
  createComponentFamilyStateV2<boolean, string>({
    key: 'isRecordBoardCardSelectedComponentFamilyState',
    defaultValue: false,
    componentInstanceContext: RecordBoardComponentInstanceContext,
  });
