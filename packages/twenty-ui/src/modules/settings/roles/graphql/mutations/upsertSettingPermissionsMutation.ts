import { SETTING_PERMISSION_FRAGMENT } from '@twenty-modules/settings/roles/graphql/fragments/settingPermissionFragment';
import { gql } from '@apollo/client';

export const UPSERT_SETTING_PERMISSIONS = gql`
  ${SETTING_PERMISSION_FRAGMENT}
  mutation UpsertSettingPermissions(
    $upsertSettingPermissionsInput: UpsertSettingPermissionsInput!
  ) {
    upsertSettingPermissions(
      upsertSettingPermissionsInput: $upsertSettingPermissionsInput
    ) {
      ...SettingPermissionFragment
    }
  }
`;
