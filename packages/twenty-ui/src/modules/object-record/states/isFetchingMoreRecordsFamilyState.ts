import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const isFetchingMoreRecordsFamilyState = createFamilyState<
  boolean,
  string | undefined
>({
  key: 'isFetchingMoreRecordsFamilyState',
  defaultValue: false,
});
