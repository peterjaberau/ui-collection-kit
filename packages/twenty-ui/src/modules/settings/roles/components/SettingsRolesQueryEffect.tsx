import { settingsDraftRoleFamilyState } from '@twenty-modules/settings/roles/states/settingsDraftRoleFamilyState';
import { settingsPersistedRoleFamilyState } from '@twenty-modules/settings/roles/states/settingsPersistedRoleFamilyState';
import { settingsRoleIdsState } from '@twenty-modules/settings/roles/states/settingsRoleIdsState';
import { settingsRolesIsLoadingState } from '@twenty-modules/settings/roles/states/settingsRolesIsLoadingState';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useEffect } from 'react';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { Role, useGetRolesQuery } from '@twenty-ui/front/generated/graphql';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

export const SettingsRolesQueryEffect = () => {
  const { data, loading } = useGetRolesQuery({
    fetchPolicy: 'network-only',
  });

  const setSettingsRolesIsLoading = useSetRecoilState(
    settingsRolesIsLoadingState,
  );

  const populateRoles = useRecoilCallback(
    ({ set, snapshot }) =>
      (roles: Role[]) => {
        const roleIds = roles.map((role) => role.id);
        set(settingsRoleIdsState, roleIds);
        roles.forEach((role) => {
          const persistedRole = getSnapshotValue(
            snapshot,
            settingsPersistedRoleFamilyState(role.id),
          );
          if (isDeeplyEqual(role, persistedRole)) {
            return;
          }
          set(settingsDraftRoleFamilyState(role.id), role);
          set(settingsPersistedRoleFamilyState(role.id), role);
        });
      },
    [],
  );

  useEffect(() => {
    setSettingsRolesIsLoading(loading);
    if (!loading) {
      const roles = data?.getRoles;
      if (!isDefined(roles)) {
        return;
      }

      populateRoles(roles);
    }
  }, [data, loading, populateRoles, setSettingsRolesIsLoading]);

  return null;
};
