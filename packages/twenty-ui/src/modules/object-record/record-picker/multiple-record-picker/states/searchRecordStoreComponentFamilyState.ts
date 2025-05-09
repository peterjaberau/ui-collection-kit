import { MultipleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/contexts/MultipleRecordPickerComponentInstanceContext';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';
import { SearchRecord } from '@twenty-ui/front/generated-metadata/graphql';

export const searchRecordStoreComponentFamilyState =
  createComponentFamilyStateV2<
    (SearchRecord & { record?: ObjectRecord }) | undefined,
    string
  >({
    key: 'searchRecordStoreComponentFamilyState',
    defaultValue: undefined,
    componentInstanceContext: MultipleRecordPickerComponentInstanceContext,
  });
