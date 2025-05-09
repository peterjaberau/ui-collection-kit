/* eslint-disable react-hooks/rules-of-hooks */
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { ComponentFamilyReadOnlySelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentFamilyReadOnlySelectorV2';
import { ComponentFamilySelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentFamilySelectorV2';
import { ComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentFamilyStateV2';
import { globalComponentInstanceContextMap } from '@twenty-modules/ui/utilities/state/component-state/utils/globalComponentInstanceContextMap';
import { SerializableParam, useRecoilValue } from 'recoil';

export const useRecoilComponentFamilyValueV2 = <
  StateType,
  FamilyKey extends SerializableParam,
>(
  componentStateV2:
    | ComponentFamilyStateV2<StateType, FamilyKey>
    | ComponentFamilySelectorV2<StateType, FamilyKey>
    | ComponentFamilyReadOnlySelectorV2<StateType, FamilyKey>,
  familyKey: FamilyKey,
  instanceIdFromProps?: string,
): StateType => {
  const instanceContext = globalComponentInstanceContextMap.get(
    componentStateV2.key,
  );

  if (!instanceContext) {
    throw new Error(
      `Instance context for key "${componentStateV2.key}" is not defined`,
    );
  }

  const instanceId = useAvailableComponentInstanceIdOrThrow(
    instanceContext,
    instanceIdFromProps,
  );

  switch (componentStateV2.type) {
    case 'ComponentFamilyState': {
      return useRecoilValue(
        componentStateV2.atomFamily({ familyKey, instanceId }),
      );
    }
    case 'ComponentFamilySelector': {
      return useRecoilValue(
        componentStateV2.selectorFamily({ familyKey, instanceId }),
      );
    }
    case 'ComponentFamilyReadOnlySelector': {
      return useRecoilValue(
        componentStateV2.selectorFamily({ familyKey, instanceId }),
      );
    }
  }
};
