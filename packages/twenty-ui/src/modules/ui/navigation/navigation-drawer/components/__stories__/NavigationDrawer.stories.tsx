import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { SettingsPath } from '@twenty-modules/types/SettingsPath';
import { ComponentWithRouterDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRouterDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { PrefetchLoadedDecorator } from '@twenty-ui/front/testing/decorators/PrefetchLoadedDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { generatedMockObjectMetadataItems } from '@twenty-ui/front/testing/mock-data/generatedMockObjectMetadataItems';
import { mockedWorkspaceMemberData } from '@twenty-ui/front/testing/mock-data/users';

import { CurrentWorkspaceMemberFavoritesFolders } from '@twenty-modules/favorites/components/CurrentWorkspaceMemberFavoritesFolders';
import { NavigationDrawerFixedContent } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerFixedContent';
import { NavigationDrawerSubItem } from '@twenty-modules/ui/navigation/navigation-drawer/components/NavigationDrawerSubItem';
import {
  IconAt,
  IconBell,
  IconBuildingSkyscraper,
  IconCalendarEvent,
  IconCheckbox,
  IconColorSwatch,
  IconMail,
  IconSearch,
  IconServer,
  IconSettings,
  IconTargetArrow,
  IconUser,
  IconUserCircle,
  IconUsers,
} from '@twenty-ui/display';
import { AdvancedSettingsToggle } from '@twenty-ui/navigation';
import { getOsControlSymbol } from '@twenty-ui/utilities';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { getSettingsPath } from '@twenty-ui/front/utils/navigation/getSettingsPath';
import { NavigationDrawer } from '../NavigationDrawer';
import { NavigationDrawerItem } from '../NavigationDrawerItem';
import { NavigationDrawerItemGroup } from '../NavigationDrawerItemGroup';
import { NavigationDrawerSection } from '../NavigationDrawerSection';
import { NavigationDrawerSectionTitle } from '../NavigationDrawerSectionTitle';

const meta: Meta<typeof NavigationDrawer> = {
  title: 'Refactor UI/Navigation/NavigationDrawer/NavigationDrawer',
  component: NavigationDrawer,
  decorators: [
    ComponentWithRouterDecorator,
    SnackBarDecorator,
    ObjectMetadataItemsDecorator,
    PrefetchLoadedDecorator,
    I18nFrontDecorator,
    (Story) => {
      const setCurrentWorkspaceMember = useSetRecoilState(
        currentWorkspaceMemberState,
      );
      const setObjectMetadataItems = useSetRecoilState(
        objectMetadataItemsState,
      );
      useEffect(() => {
        setObjectMetadataItems(generatedMockObjectMetadataItems);
        setCurrentWorkspaceMember(mockedWorkspaceMemberData);
      }, [setObjectMetadataItems, setCurrentWorkspaceMember]);
      return <Story />;
    },
  ],
  parameters: {
    layout: 'fullscreen',
    msw: graphqlMocks,
  },
  argTypes: { children: { control: false } },
};

export default meta;
type Story = StoryObj<typeof NavigationDrawer>;

export const Default: Story = {
  args: {
    title: 'Default',
    children: (
      <>
        <NavigationDrawerSection>
          <NavigationDrawerItem label="Search" Icon={IconSearch} active />
          <NavigationDrawerItem
            label="Notifications"
            to="/inbox"
            Icon={IconBell}
            soon={true}
          />
          <NavigationDrawerItem
            label="Search"
            Icon={IconSearch}
            keyboard={[`${getOsControlSymbol()}`, 'K']}
          />
          <NavigationDrawerItem
            label="Settings"
            to="/settings/profile"
            Icon={IconSettings}
          />
          <NavigationDrawerItem
            label="Tasks"
            to="/tasks"
            Icon={IconCheckbox}
            count={2}
          />
        </NavigationDrawerSection>

        <CurrentWorkspaceMemberFavoritesFolders />

        <NavigationDrawerSection>
          <NavigationDrawerSectionTitle label="Workspace" />
          <NavigationDrawerItem
            label="Companies"
            to="/companies"
            Icon={IconBuildingSkyscraper}
          />
          <NavigationDrawerItem label="People" to="/people" Icon={IconUser} />
          <NavigationDrawerItem label="Opportunities" Icon={IconTargetArrow} />
        </NavigationDrawerSection>
      </>
    ),
  },
};

export const Settings: Story = {
  args: {
    title: 'Settings',
    children: (
      <>
        <NavigationDrawerSection>
          <NavigationDrawerSectionTitle label="User" />
          <NavigationDrawerItem
            label="Profile"
            to={getSettingsPath(SettingsPath.ProfilePage)}
            Icon={IconUserCircle}
            active
          />
          <NavigationDrawerItem
            label="Appearance"
            to={getSettingsPath(SettingsPath.Experience)}
            Icon={IconColorSwatch}
          />
          <NavigationDrawerItemGroup>
            <NavigationDrawerItem
              label="Accounts"
              to={getSettingsPath(SettingsPath.Accounts)}
              Icon={IconAt}
            />
            <NavigationDrawerSubItem
              label="Emails"
              to={getSettingsPath(SettingsPath.AccountsEmails)}
              Icon={IconMail}
              subItemState="intermediate-before-selected"
            />
            <NavigationDrawerSubItem
              label="Calendar"
              to={getSettingsPath(SettingsPath.AccountsCalendars)}
              Icon={IconCalendarEvent}
              subItemState="last-selected"
            />
          </NavigationDrawerItemGroup>
        </NavigationDrawerSection>

        <NavigationDrawerSection>
          <NavigationDrawerSectionTitle label="Workspace" />
          <NavigationDrawerItem
            label="General"
            to={getSettingsPath(SettingsPath.Workspace)}
            Icon={IconSettings}
          />
          <NavigationDrawerItem
            label="Members"
            to={getSettingsPath(SettingsPath.WorkspaceMembersPage)}
            Icon={IconUsers}
          />
        </NavigationDrawerSection>

        <NavigationDrawerSection>
          <NavigationDrawerSectionTitle label="Other" />
          <NavigationDrawerItem
            label="Admin Panel"
            to={getSettingsPath(SettingsPath.AdminPanel)}
            Icon={IconServer}
          />
        </NavigationDrawerSection>

        <NavigationDrawerFixedContent>
          <AdvancedSettingsToggle
            isAdvancedModeEnabled={false}
            setIsAdvancedModeEnabled={() => {}}
            label="Advanced:"
          />
        </NavigationDrawerFixedContent>
      </>
    ),
  },
};
