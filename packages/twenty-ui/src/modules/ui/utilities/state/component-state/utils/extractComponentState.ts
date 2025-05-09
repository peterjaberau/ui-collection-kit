import { RecoilState } from 'recoil';

import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';

export const extractComponentState = <StateType>(
  componentState: (
    componentStateKey: RecoilComponentStateKey,
  ) => RecoilState<StateType>,
  scopeId: string,
) => {
  return componentState({ scopeId });
};
