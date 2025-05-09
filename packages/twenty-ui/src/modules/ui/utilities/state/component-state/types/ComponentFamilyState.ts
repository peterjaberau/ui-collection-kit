import { RecoilState, SerializableParam } from 'recoil';

import { ComponentFamilyStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentFamilyStateKey';

export type ComponentFamilyState<
  StateType,
  FamilyKey extends SerializableParam,
> = {
  key: string;
  atomFamily: (
    componentStateKey: ComponentFamilyStateKey<FamilyKey>,
  ) => RecoilState<StateType>;
};
