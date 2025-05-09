import { RecoilValueReadOnly } from 'recoil';

import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';

export type RecoilScopedSelector<StateType> = (
  scopedKey: RecoilComponentStateKey,
) => RecoilValueReadOnly<StateType>;
