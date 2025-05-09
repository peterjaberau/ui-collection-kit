import { currentUserWorkspaceState } from '@twenty-modules/auth/states/currentUserWorkspaceState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { useRecoilValue } from 'recoil';
import { WorkspaceActivationStatus } from '@ui-collection-kit/twenty-shared/src/workspace';
import { SettingPermissionType } from '@twenty-ui/front/generated/graphql';

export const useHasSettingsPermission = (
  settingsPermission?: SettingPermissionType,
) => {
  const currentWorkspace = useRecoilValue(currentWorkspaceState);
  const currentUserWorkspace = useRecoilValue(currentUserWorkspaceState);

  if (!settingsPermission) {
    return true;
  }

  if (
    settingsPermission === SettingPermissionType.WORKSPACE &&
    currentWorkspace?.activationStatus ===
      WorkspaceActivationStatus.PENDING_CREATION
  ) {
    return true;
  }

  const currentUserWorkspaceSetting = currentUserWorkspace?.settingsPermissions;

  if (!currentUserWorkspaceSetting) {
    return false;
  }

  return currentUserWorkspaceSetting.includes(settingsPermission);
};
