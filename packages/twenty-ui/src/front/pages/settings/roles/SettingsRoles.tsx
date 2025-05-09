import { SettingsRolesContainer } from '@twenty-modules/settings/roles/components/SettingsRolesContainer';
import { SettingsRolesQueryEffect } from '@twenty-modules/settings/roles/components/SettingsRolesQueryEffect';

export const SettingsRoles = () => {
  return (
    <>
      <SettingsRolesQueryEffect />
      <SettingsRolesContainer />
    </>
  );
};
