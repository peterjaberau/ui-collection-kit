import { SingleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/single-record-picker/states/contexts/SingleRecordPickerComponentInstanceContext';
import { RecordPickerSearchQuery } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerSearchQuery';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const singleRecordPickerSearchQueryComponentState =
  createComponentStateV2<RecordPickerSearchQuery | null>({
    key: 'singleRecordPickerSearchQueryComponentState',
    defaultValue: null,
    componentInstanceContext: SingleRecordPickerComponentInstanceContext,
  });
