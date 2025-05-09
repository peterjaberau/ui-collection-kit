import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { SubscriptionStatus } from '@twenty-ui/front/generated/graphql';

export const useSubscriptionStatus = (): SubscriptionStatus | undefined => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  return currentWorkspace?.currentBillingSubscription?.status;
};
