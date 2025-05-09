import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export type SortedFieldByTableFamilyStateKey = {
  objectMetadataItemId: string;
};

export const settingsObjectFieldsFamilyState = createFamilyState<
  FieldMetadataItem[] | null,
  SortedFieldByTableFamilyStateKey
>({
  key: 'settingsObjectFieldsFamilyState',
  defaultValue: null,
});
