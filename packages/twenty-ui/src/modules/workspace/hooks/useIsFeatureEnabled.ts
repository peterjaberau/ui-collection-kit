import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { FeatureFlagKey } from '@twenty-ui/front/generated/graphql';

export const useIsFeatureEnabled = (featureKey: FeatureFlagKey | null) => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  if (!featureKey) {
    return false;
  }

  const featureFlag = currentWorkspace?.featureFlags?.find(
    (flag) => flag.key === featureKey,
  );

  return !!featureFlag?.value;
};
