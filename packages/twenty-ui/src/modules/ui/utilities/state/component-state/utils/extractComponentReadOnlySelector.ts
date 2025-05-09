import { RecoilValueReadOnly } from 'recoil';

import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';

export const extractComponentReadOnlySelector = <StateType>(
  componentSelector: (
    componentStateKey: RecoilComponentStateKey,
  ) => RecoilValueReadOnly<StateType>,
  scopeId: string,
) => {
  return () => componentSelector({ scopeId });
};
