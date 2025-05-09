import { Ref, RefCallback } from 'react';
import { combineRefs } from '@twenty-ui/front/utils/combineRefs';

export const useCombinedRefs = <T>(
  ...refs: (Ref<T> | undefined)[]
): RefCallback<T> => combineRefs<T>(...refs);
