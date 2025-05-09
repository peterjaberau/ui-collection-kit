import { AtomEffect, atomFamily } from 'recoil';

import { ScopeInternalContext } from '@twenty-modules/ui/utilities/recoil-scope/scopes-internal/types/ScopeInternalContext';

import { RecoilComponentState } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentState';
import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

type CreateComponentStateV2Type<ValueType> = {
  key: string;
  defaultValue: ValueType;
  componentContext?: ScopeInternalContext<any> | null;
  effects?: AtomEffect<ValueType>[];
};

export const createComponentStateV2_alpha = <ValueType>({
  key,
  defaultValue,
  componentContext,
  effects,
}: CreateComponentStateV2Type<ValueType>): RecoilComponentState<ValueType> => {
  if (isDefined(componentContext)) {
    if (!isDefined((window as any).componentContextStateMap)) {
      (window as any).componentContextStateMap = new Map();
    }

    (window as any).componentContextStateMap.set(key, componentContext);
  }

  return {
    key,
    atomFamily: atomFamily<ValueType, RecoilComponentStateKey>({
      key,
      default: defaultValue,
      effects: effects,
    }),
  };
};
