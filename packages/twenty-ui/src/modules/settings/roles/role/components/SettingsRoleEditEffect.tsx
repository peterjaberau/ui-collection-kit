import { SETTINGS_ROLE_DETAIL_TABS } from '@twenty-modules/settings/roles/role/constants/SettingsRoleDetailTabs';
import { settingsDraftRoleFamilyState } from '@twenty-modules/settings/roles/states/settingsDraftRoleFamilyState';
import { settingsPersistedRoleFamilyState } from '@twenty-modules/settings/roles/states/settingsPersistedRoleFamilyState';
import { activeTabIdComponentState } from '@twenty-modules/ui/layout/tab/states/activeTabIdComponentState';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useEffect, useState } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { Role } from '@twenty-ui/front/generated/graphql';
import { isDeeplyEqual } from '@twenty-ui/front/utils/isDeeplyEqual';

type SettingsRoleEditEffectProps = {
  roleId: string;
};

export const SettingsRoleEditEffect = ({
  roleId,
}: SettingsRoleEditEffectProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  const role = useRecoilValue(settingsPersistedRoleFamilyState(roleId));
  const setActiveTabId = useSetRecoilComponentStateV2(
    activeTabIdComponentState,
    SETTINGS_ROLE_DETAIL_TABS.COMPONENT_INSTANCE_ID,
  );

  const updateDraftRoleIfNeeded = useRecoilCallback(
    ({ set, snapshot }) =>
      (newRole: Role) => {
        const currentPersistedRole = getSnapshotValue(
          snapshot,
          settingsPersistedRoleFamilyState(newRole.id),
        );

        if (!isDeeplyEqual(newRole, currentPersistedRole)) {
          set(settingsDraftRoleFamilyState(newRole.id), newRole);
        }
      },
    [],
  );

  useEffect(() => {
    if (isInitialized || !isDefined(role)) {
      return;
    }

    setActiveTabId(SETTINGS_ROLE_DETAIL_TABS.TABS_IDS.ASSIGNMENT);
    updateDraftRoleIfNeeded(role);
    setIsInitialized(true);
  }, [isInitialized, role, setActiveTabId, updateDraftRoleIfNeeded]);

  return <></>;
};
