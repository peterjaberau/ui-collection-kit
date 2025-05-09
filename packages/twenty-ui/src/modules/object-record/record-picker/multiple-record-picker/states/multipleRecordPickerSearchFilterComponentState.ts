import { MultipleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/contexts/MultipleRecordPickerComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const multipleRecordPickerSearchFilterComponentState =
  createComponentStateV2<string>({
    key: 'multipleRecordPickerSearchFilterComponentState',
    defaultValue: '',
    componentInstanceContext: MultipleRecordPickerComponentInstanceContext,
  });
