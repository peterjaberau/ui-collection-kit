import { useRecoilValue } from 'recoil';

import { useIsLogged } from '@twenty-modules/auth/hooks/useIsLogged';
import { currentUserState } from '@twenty-modules/auth/states/currentUserState';
import { OnboardingStatus } from '@twenty-ui/front/generated/graphql';

export const useOnboardingStatus = (): OnboardingStatus | null | undefined => {
  const currentUser = useRecoilValue(currentUserState);
  const isLoggedIn = useIsLogged();
  return isLoggedIn ? currentUser?.onboardingStatus : undefined;
};
