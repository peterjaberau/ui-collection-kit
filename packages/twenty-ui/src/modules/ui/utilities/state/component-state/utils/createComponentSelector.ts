import { selectorFamily } from 'recoil';

import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';
import { SelectorGetter } from '@twenty-modules/ui/utilities/state/types/SelectorGetter';
import { SelectorSetter } from '@twenty-modules/ui/utilities/state/types/SelectorSetter';

export const createComponentSelector = <ValueType>({
  key,
  get,
  set,
}: {
  key: string;
  get: SelectorGetter<ValueType, RecoilComponentStateKey>;
  set: SelectorSetter<ValueType, RecoilComponentStateKey>;
}) => {
  return selectorFamily<ValueType, RecoilComponentStateKey>({
    key,
    get,
    set,
  });
};
