import { Decorator, Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { useSetRecoilState } from 'recoil';

import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { ComponentWithRouterDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRouterDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import {
  mockCurrentWorkspace,
  mockedWorkspaceMemberData,
} from '@twenty-ui/front/testing/mock-data/users';
import { sleep } from '@twenty-ui/front/utils/sleep';

import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { CommandMenuRouter } from '@twenty-modules/command-menu/components/CommandMenuRouter';
import { COMMAND_MENU_COMPONENT_INSTANCE_ID } from '@twenty-modules/command-menu/constants/CommandMenuComponentInstanceId';
import { commandMenuNavigationStackState } from '@twenty-modules/command-menu/states/commandMenuNavigationStackState';
import { isCommandMenuOpenedState } from '@twenty-modules/command-menu/states/isCommandMenuOpenedState';
import { CommandMenuPages } from '@twenty-modules/command-menu/types/CommandMenuPages';
import { ContextStoreComponentInstanceContext } from '@twenty-modules/context-store/states/contexts/ContextStoreComponentInstanceContext';
import { ContextStoreViewType } from '@twenty-modules/context-store/types/ContextStoreViewType';
import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { RecordSortsComponentInstanceContext } from '@twenty-modules/object-record/record-sort/states/context/RecordSortsComponentInstanceContext';
import { HttpResponse, graphql } from 'msw';
import { IconDotsVertical } from '@twenty-ui/display';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { JestContextStoreSetter } from '@twenty-ui/front/testing/jest/JestContextStoreSetter';
import { CommandMenu } from '../CommandMenu';

const openTimeout = 50;

const ContextStoreDecorator: Decorator = (Story) => {
  return (
    <RecordFilterGroupsComponentInstanceContext.Provider
      value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
    >
      <RecordFiltersComponentInstanceContext.Provider
        value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
      >
        <RecordSortsComponentInstanceContext.Provider
          value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
        >
          <ContextStoreComponentInstanceContext.Provider
            value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
          >
            <ActionMenuComponentInstanceContext.Provider
              value={{ instanceId: COMMAND_MENU_COMPONENT_INSTANCE_ID }}
            >
              <JestContextStoreSetter
                contextStoreCurrentObjectMetadataNameSingular="company"
                contextStoreCurrentViewId="1"
                contextStoreCurrentViewType={ContextStoreViewType.Table}
              >
                <Story />
              </JestContextStoreSetter>
            </ActionMenuComponentInstanceContext.Provider>
          </ContextStoreComponentInstanceContext.Provider>
        </RecordSortsComponentInstanceContext.Provider>
      </RecordFiltersComponentInstanceContext.Provider>
    </RecordFilterGroupsComponentInstanceContext.Provider>
  );
};

const meta: Meta<typeof CommandMenu> = {
  title: 'Refactor Modules/CommandMenu/CommandMenu',
  component: CommandMenuRouter,
  decorators: [
    I18nFrontDecorator,
    (Story) => {
      const setCurrentWorkspace = useSetRecoilState(currentWorkspaceState);
      const setCurrentWorkspaceMember = useSetRecoilState(
        currentWorkspaceMemberState,
      );
      const setIsCommandMenuOpened = useSetRecoilState(
        isCommandMenuOpenedState,
      );
      const setCommandMenuNavigationStack = useSetRecoilState(
        commandMenuNavigationStackState,
      );

      setCurrentWorkspace(mockCurrentWorkspace);
      setCurrentWorkspaceMember(mockedWorkspaceMemberData);
      setIsCommandMenuOpened(true);
      setCommandMenuNavigationStack([
        {
          page: CommandMenuPages.Root,
          pageTitle: 'Command Menu',
          pageIcon: IconDotsVertical,
          pageId: '1',
        },
      ]);

      return <Story />;
    },
    ContextStoreDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    ComponentWithRouterDecorator,
    I18nFrontDecorator,
  ],
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;
type Story = StoryObj<typeof CommandMenu>;

export const DefaultWithoutSearch: Story = {
};

export const MatchingNavigate: Story = {

};

export const MatchingNavigateShortcuts: Story = {

};

export const SearchRecordsAction: Story = {

};

export const NoResultsSearchFallback: Story = {

  parameters: {
    msw: {
      handlers: [
        graphql.query('Search', () => {
          return HttpResponse.json({
            data: {
              search: [],
            },
          });
        }),
      ],
    },
  },
};

export const ClickOnSearchRecordsAndGoBack: Story = {

};
