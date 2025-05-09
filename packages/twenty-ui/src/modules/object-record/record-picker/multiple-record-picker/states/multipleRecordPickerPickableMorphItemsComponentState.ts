import { MultipleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/contexts/MultipleRecordPickerComponentInstanceContext';
import { RecordPickerPickableMorphItem } from '@twenty-modules/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const multipleRecordPickerPickableMorphItemsComponentState =
  createComponentStateV2<RecordPickerPickableMorphItem[]>({
    key: 'multipleRecordPickerPickableMorphItemsComponentState',
    defaultValue: [],
    componentInstanceContext: MultipleRecordPickerComponentInstanceContext,
  });
