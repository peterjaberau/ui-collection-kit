import { RecordBoardComponentInstanceContext } from '@twenty-modules/object-record/record-board/states/contexts/RecordBoardComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const recordBoardShouldFetchMoreInColumnComponentFamilyState =
  createComponentFamilyStateV2<boolean, string>({
    key: 'recordBoardShouldFetchMoreInColumnComponentFamilyState',
    defaultValue: false,
    componentInstanceContext: RecordBoardComponentInstanceContext,
  });
