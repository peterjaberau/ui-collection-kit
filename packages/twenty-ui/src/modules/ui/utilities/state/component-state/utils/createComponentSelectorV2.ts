/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { selectorFamily } from 'recoil';

import { ComponentInstanceStateContext } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentInstanceStateContext';
import { ComponentReadOnlySelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentReadOnlySelectorV2';
import { ComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentSelectorV2';
import { ComponentStateKeyV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentStateKeyV2';
import { globalComponentInstanceContextMap } from '@twenty-modules/ui/utilities/state/component-state/utils/globalComponentInstanceContextMap';
import { SelectorGetter } from '@twenty-modules/ui/utilities/state/types/SelectorGetter';
import { SelectorSetter } from '@twenty-modules/ui/utilities/state/types/SelectorSetter';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export function createComponentSelectorV2<ValueType>(options: {
  key: string;
  get: SelectorGetter<ValueType, ComponentStateKeyV2>;
  set?: never;
  componentInstanceContext: ComponentInstanceStateContext<any> | null;
}): ComponentReadOnlySelectorV2<ValueType>;

export function createComponentSelectorV2<ValueType>(options: {
  key: string;
  get: SelectorGetter<ValueType, ComponentStateKeyV2>;
  set: SelectorSetter<ValueType, ComponentStateKeyV2>;
  componentInstanceContext: ComponentInstanceStateContext<any> | null;
}): ComponentSelectorV2<ValueType>;

export function createComponentSelectorV2<ValueType>({
  key,
  get,
  set,
  componentInstanceContext,
}: {
  key: string;
  get: SelectorGetter<ValueType, ComponentStateKeyV2>;
  set?: SelectorSetter<ValueType, ComponentStateKeyV2>;
  componentInstanceContext: ComponentInstanceStateContext<any> | null;
}): ComponentSelectorV2<ValueType> | ComponentReadOnlySelectorV2<ValueType> {
  if (isDefined(componentInstanceContext)) {
    globalComponentInstanceContextMap.set(key, componentInstanceContext);
  }

  if (isDefined(set)) {
    return {
      type: 'ComponentSelector',
      key,
      selectorFamily: selectorFamily<ValueType, ComponentStateKeyV2>({
        key,
        get,
        set,
      }),
    } satisfies ComponentSelectorV2<ValueType>;
  } else {
    return {
      type: 'ComponentReadOnlySelector',
      key,
      selectorFamily: selectorFamily<ValueType, ComponentStateKeyV2>({
        key,
        get,
      }),
    } satisfies ComponentReadOnlySelectorV2<ValueType>;
  }
}
