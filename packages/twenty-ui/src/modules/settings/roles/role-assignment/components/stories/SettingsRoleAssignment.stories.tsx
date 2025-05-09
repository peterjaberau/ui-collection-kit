import { SettingsRoleAssignment } from '@twenty-modules/settings/roles/role-assignment/components/SettingsRoleAssignment';
import { settingsDraftRoleFamilyState } from '@twenty-modules/settings/roles/states/settingsDraftRoleFamilyState';
import { Meta, StoryObj } from '@storybook/react';
import { useSetRecoilState } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { PENDING_ROLE_ID } from '@twenty-ui/front/pages/settings/roles/SettingsRoleCreate';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { getRolesMock } from '@twenty-ui/front/testing/mock-data/roles';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';

const SettingsRoleAssignmentWrapper = (
  args: React.ComponentProps<typeof SettingsRoleAssignment>,
) => {
  const setDraftRole = useSetRecoilState(
    settingsDraftRoleFamilyState(args.roleId),
  );

  const role = getRolesMock().find((role) => role.id === args.roleId);

  if (isDefined(role)) {
    setDraftRole(role);
  }

  return <SettingsRoleAssignment roleId={args.roleId} />;
};

const meta: Meta<typeof SettingsRoleAssignmentWrapper> = {
  title: 'Refactor Modules/Settings/Roles/RoleAssignment/SettingsRoleAssignment',
  component: SettingsRoleAssignmentWrapper,
  decorators: [RouterDecorator, ComponentDecorator, I18nFrontDecorator],
};

export default meta;
type Story = StoryObj<typeof SettingsRoleAssignmentWrapper>;

export const Default: Story = {
  args: {
    roleId: '1',
  },
};

export const PendingRole: Story = {
  args: {
    roleId: PENDING_ROLE_ID,
  },
};
