import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const recordStoreFamilyState = createFamilyState<
  ObjectRecord | null,
  string
>({
  key: 'recordStoreFamilyState',
  defaultValue: null,
});
