import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const hasNextPageFamilyState = createFamilyState<
  boolean,
  string | undefined
>({
  key: 'hasNextPageFamilyState',
  defaultValue: false,
});
