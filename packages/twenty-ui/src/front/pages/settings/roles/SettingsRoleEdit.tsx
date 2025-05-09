import { SettingsRolesQueryEffect } from '@twenty-modules/settings/roles/components/SettingsRolesQueryEffect';
import { SettingsRole } from '@twenty-modules/settings/roles/role/components/SettingsRole';
import { SettingsRoleEditEffect } from '@twenty-modules/settings/roles/role/components/SettingsRoleEditEffect';
import { Navigate, useParams } from 'react-router-dom';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const SettingsRoleEdit = () => {
  const { roleId } = useParams();

  if (!isDefined(roleId)) {
    return <Navigate to="/settings/roles" />;
  }

  return (
    <>
      <SettingsRolesQueryEffect />
      <SettingsRoleEditEffect roleId={roleId} />
      <SettingsRole roleId={roleId} isCreateMode={false} />
    </>
  );
};
