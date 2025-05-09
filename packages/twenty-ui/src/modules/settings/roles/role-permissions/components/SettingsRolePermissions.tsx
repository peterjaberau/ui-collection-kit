import { SettingsRolePermissionsObjectLevelSection } from '@twenty-modules/settings/roles/role-permissions/object-level-permissions/components/SettingsRolePermissionsObjectLevelSection';
import { SettingsRolePermissionsObjectsSection } from '@twenty-modules/settings/roles/role-permissions/objects-permissions/components/SettingsRolePermissionsObjectsSection';
import { SettingsRolePermissionsSettingsSection } from '@twenty-modules/settings/roles/role-permissions/settings-permissions/components/SettingsRolePermissionsSettingsSection';
import { useIsFeatureEnabled } from '@twenty-modules/workspace/hooks/useIsFeatureEnabled';
import styled from '@emotion/styled';
import { FeatureFlagKey } from '@twenty-ui/front/generated-metadata/graphql';

const StyledRolePermissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
`;

type SettingsRolePermissionsProps = {
  roleId: string;
  isEditable: boolean;
  isCreateMode: boolean;
};

export const SettingsRolePermissions = ({
  roleId,
  isEditable,
  isCreateMode,
}: SettingsRolePermissionsProps) => {
  const isPermissionsV2Enabled = useIsFeatureEnabled(
    FeatureFlagKey.IsPermissionsV2Enabled,
  );

  return (
    <StyledRolePermissionsContainer>
      <SettingsRolePermissionsObjectsSection
        roleId={roleId}
        isEditable={isEditable}
      />
      {isPermissionsV2Enabled && !isCreateMode && (
        <SettingsRolePermissionsObjectLevelSection
          roleId={roleId}
          isEditable={isEditable}
        />
      )}
      <SettingsRolePermissionsSettingsSection
        roleId={roleId}
        isEditable={isEditable}
      />
    </StyledRolePermissionsContainer>
  );
};
