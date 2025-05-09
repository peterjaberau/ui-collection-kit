import { SettingsRolesQueryEffect } from '@twenty-modules/settings/roles/components/SettingsRolesQueryEffect';
import { SettingsRole } from '@twenty-modules/settings/roles/role/components/SettingsRole';
import { SettingsRoleCreateEffect } from '@twenty-modules/settings/roles/role/components/SettingsRoleCreateEffect';

export const PENDING_ROLE_ID = 'pending-role-id';

export const SettingsRoleCreate = () => {
  return (
    <>
      <SettingsRolesQueryEffect />
      <SettingsRoleCreateEffect roleId={PENDING_ROLE_ID} />
      <SettingsRole roleId={PENDING_ROLE_ID} isCreateMode={true} />
    </>
  );
};
