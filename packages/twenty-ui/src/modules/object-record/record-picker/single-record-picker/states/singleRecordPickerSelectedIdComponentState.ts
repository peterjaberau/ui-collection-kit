import { SingleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/single-record-picker/states/contexts/SingleRecordPickerComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const singleRecordPickerSelectedIdComponentState =
  createComponentStateV2<string | undefined>({
    key: 'singleRecordPickerSelectedIdComponentState',
    defaultValue: undefined,
    componentInstanceContext: SingleRecordPickerComponentInstanceContext,
  });
