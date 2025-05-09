import { ComponentStateKeyV2 } from '@twenty-modules/ui/utilities/state/component-state/types/ComponentStateKeyV2';
import { SerializableParam } from 'recoil';

export type ComponentFamilyStateKeyV2<FamilyKey extends SerializableParam> =
  ComponentStateKeyV2 & {
    familyKey: FamilyKey;
  };
