import { useRecoilCallback, useRecoilValue } from 'recoil';

import { CurrentUser, currentUserState } from '@twenty-modules/auth/states/currentUserState';
import {
  CurrentWorkspace,
  currentWorkspaceState,
} from '@twenty-modules/auth/states/currentWorkspaceState';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { OnboardingStatus } from '@twenty-ui/front/generated/graphql';

const getNextOnboardingStatus = (
  currentUser: CurrentUser | null,
  currentWorkspace: CurrentWorkspace | null,
) => {
  if (currentUser?.onboardingStatus === OnboardingStatus.WORKSPACE_ACTIVATION) {
    return OnboardingStatus.PROFILE_CREATION;
  }

  if (currentUser?.onboardingStatus === OnboardingStatus.PROFILE_CREATION) {
    return OnboardingStatus.SYNC_EMAIL;
  }
  if (
    currentUser?.onboardingStatus === OnboardingStatus.SYNC_EMAIL &&
    currentWorkspace?.workspaceMembersCount === 1
  ) {
    return OnboardingStatus.INVITE_TEAM;
  }
  return OnboardingStatus.COMPLETED;
};

export const useSetNextOnboardingStatus = () => {
  const currentUser = useRecoilValue(currentUserState);
  const currentWorkspace = useRecoilValue(currentWorkspaceState);

  return useRecoilCallback(
    ({ set }) =>
      () => {
        const nextOnboardingStatus = getNextOnboardingStatus(
          currentUser,
          currentWorkspace,
        );
        set(currentUserState, (current) => {
          if (isDefined(current)) {
            return {
              ...current,
              onboardingStatus: nextOnboardingStatus,
            };
          }
          return current;
        });
      },
    [currentWorkspace, currentUser],
  );
};
