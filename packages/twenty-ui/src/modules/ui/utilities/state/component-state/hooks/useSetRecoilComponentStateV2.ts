import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { ComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentStateV2';
import { globalComponentInstanceContextMap } from '@twenty-modules/ui/utilities/state/component-state/utils/globalComponentInstanceContextMap';
import { SetterOrUpdater, useSetRecoilState } from 'recoil';

export const useSetRecoilComponentStateV2 = <ValueType>(
  componentState: ComponentStateV2<ValueType>,
  instanceIdFromProps?: string,
): SetterOrUpdater<ValueType> => {
  const componentInstanceContext = globalComponentInstanceContextMap.get(
    componentState.key,
  );

  if (!componentInstanceContext) {
    throw new Error(
      `Instance context for key "${componentState.key}" is not defined`,
    );
  }

  const instanceId = useAvailableComponentInstanceIdOrThrow(
    componentInstanceContext,
    instanceIdFromProps,
  );

  return useSetRecoilState(componentState.atomFamily({ instanceId }));
};
