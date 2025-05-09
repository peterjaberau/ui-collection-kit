import { RecoilState, useRecoilState } from 'recoil';

import { RecoilComponentStateKey } from '@twenty-modules/ui/utilities/state/component-state/types/RecoilComponentStateKey';

export const useRecoilScopedStateV2 = <StateType>(
  recoilState: (scopedKey: RecoilComponentStateKey) => RecoilState<StateType>,
  scopeId: string,
) => {
  return useRecoilState<StateType>(
    recoilState({
      scopeId,
    }),
  );
};
