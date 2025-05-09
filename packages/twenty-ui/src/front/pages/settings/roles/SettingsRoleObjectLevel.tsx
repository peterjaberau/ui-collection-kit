import { Navigate, useParams } from 'react-router-dom';

import { SettingsRolesQueryEffect } from '@twenty-modules/settings/roles/components/SettingsRolesQueryEffect';
import { SettingsRolePermissionsObjectLevelObjectForm } from '@twenty-modules/settings/roles/role-permissions/object-level-permissions/object-form/components/SettingsRolePermissionsObjectLevelObjectForm';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const SettingsRoleObjectLevel = () => {
  const { roleId, objectMetadataId } = useParams();

  if (!isDefined(roleId)) {
    return <Navigate to="/settings/roles" />;
  }

  if (!isDefined(objectMetadataId)) {
    return <Navigate to={`/settings/roles/${roleId}`} />;
  }

  return (
    <>
      <SettingsRolesQueryEffect />
      <SettingsRolePermissionsObjectLevelObjectForm
        roleId={roleId}
        objectMetadataId={objectMetadataId}
      />
    </>
  );
};
