import { isFunction } from '@sniptt/guards';
import { MutableRefObject, Ref } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const combineRefs = <T>(...refs: (Ref<T> | undefined)[]) => {
  return (node: T) => {
    for (const ref of refs) {
      if (isFunction(ref)) {
        ref(node);
      } else if (isDefined(ref) && 'current' in ref) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    }
  };
};
