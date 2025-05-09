import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { CommandMenuActionMenuDropdown } from '@twenty-modules/action-menu/components/CommandMenuActionMenuDropdown';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { createMockActionMenuActions } from '@twenty-modules/action-menu/mock/action-menu-actions.mock';
import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { contextStoreNumberOfSelectedRecordsComponentState } from '@twenty-modules/context-store/states/contextStoreNumberOfSelectedRecordsComponentState';
import { contextStoreTargetedRecordsRuleComponentState } from '@twenty-modules/context-store/states/contextStoreTargetedRecordsRuleComponentState';
import { userEvent, waitFor, within } from '@storybook/test';
import {
  ComponentDecorator,
  RouterDecorator,
  getCanvasElementForDropdownTesting,
} from '@twenty-ui/testing';
import { ContextStoreDecorator } from '@twenty-ui/front/testing/decorators/ContextStoreDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';


const meta: Meta<typeof CommandMenuActionMenuDropdown> = {
  title: 'Refactor Modules/ActionMenu/CommandMenuActionMenuDropdown',
  component: CommandMenuActionMenuDropdown,
  decorators: [
    I18nFrontDecorator,
    (Story) => (
      <RecoilRoot
        initializeState={({ set }) => {
          set(
            contextStoreTargetedRecordsRuleComponentState.atomFamily({
              instanceId: 'story-action-menu',
            }),
            {
              mode: 'selection',
              selectedRecordIds: ['1'],
            },
          );
          set(
            contextStoreNumberOfSelectedRecordsComponentState.atomFamily({
              instanceId: 'story-action-menu',
            }),
            1,
          );
        }}
      >
        <ActionMenuComponentInstanceContext.Provider
          value={{ instanceId: 'story-action-menu' }}
        >
          <ActionMenuContext.Provider
            value={{
              isInRightDrawer: true,
              displayType: 'dropdownItem',
              actionMenuType: 'command-menu-show-page-action-menu-dropdown',
              actions: createMockActionMenuActions({
              }),
            }}
          >
            <Story />
          </ActionMenuContext.Provider>
        </ActionMenuComponentInstanceContext.Provider>
      </RecoilRoot>
    ),
    ComponentDecorator,
    ContextStoreDecorator,
    RouterDecorator,
  ],
  args: {
    actionMenuId: 'story-action-menu',
  },
};

export default meta;

type Story = StoryObj<typeof CommandMenuActionMenuDropdown>;

export const Default: Story = {
  args: {
    actionMenuId: 'story-action-menu',
  },
};

export const WithButtonClicks: Story = {
  args: {
    actionMenuId: 'story-action-menu',
  },
};
