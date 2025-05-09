import { useRecoilValue } from 'recoil';

import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';

export const useIsWorkspaceActivationStatusEqualsTo = (
  activationStatus: WorkspaceActivationStatus,
): boolean => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  return currentWorkspace?.activationStatus === activationStatus;
};
