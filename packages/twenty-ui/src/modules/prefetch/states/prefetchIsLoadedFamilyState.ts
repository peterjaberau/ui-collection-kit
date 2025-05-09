import { PrefetchKey } from '@twenty-modules/prefetch/types/PrefetchKey';
import { createFamilyState } from '@twenty-modules/ui/utilities/state/utils/createFamilyState';

export const prefetchIsLoadedFamilyState = createFamilyState<
  boolean,
  PrefetchKey
>({
  key: 'prefetchIsLoadedFamilyState',
  defaultValue: false,
});
