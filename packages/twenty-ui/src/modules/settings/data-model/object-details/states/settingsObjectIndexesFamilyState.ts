import { IndexMetadataItem } from '@twenty-modules/object-metadata/types/IndexMetadataItem';
import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export type SortedIndexByTableFamilyStateKey = {
  objectMetadataItemId: string;
};

export const settingsObjectIndexesFamilyState = createFamilyState<
  IndexMetadataItem[] | null,
  SortedIndexByTableFamilyStateKey
>({
  key: 'settingsObjectIndexesFamilyState',
  defaultValue: null,
});
