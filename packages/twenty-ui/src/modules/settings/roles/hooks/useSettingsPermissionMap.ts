import { currentUserWorkspaceState } from '@twenty-modules/auth/states/currentUserWorkspaceState';
import { useRecoilValue } from 'recoil';
import { SettingPermissionType } from '@twenty-ui/front/generated/graphql';
import { buildRecordFromKeysWithSameValue } from '@twenty-ui/front/utils/array/buildRecordFromKeysWithSameValue';

export const useSettingsPermissionMap = (): Record<
  SettingPermissionType,
  boolean
> => {
  const currentUserWorkspace = useRecoilValue(currentUserWorkspaceState);

  const currentUserWorkspaceSettingsPermissions =
    currentUserWorkspace?.settingsPermissions;

  const initialPermissions = buildRecordFromKeysWithSameValue(
    Object.values(SettingPermissionType),
    false,
  );

  if (!currentUserWorkspaceSettingsPermissions) {
    return initialPermissions;
  }

  return currentUserWorkspaceSettingsPermissions.reduce((acc, permission) => {
    acc[permission] = true;
    return acc;
  }, initialPermissions);
};
