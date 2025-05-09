import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { ComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentStateV2';
import { globalComponentInstanceContextMap } from '@twenty-modules/ui/utilities/state/component-state/utils/globalComponentInstanceContextMap';
import { useRecoilState } from 'recoil';

export const useRecoilComponentStateV2 = <StateType>(
  componentState: ComponentStateV2<StateType>,
  instanceIdFromProps?: string,
) => {
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

  return useRecoilState(componentState.atomFamily({ instanceId }));
};
