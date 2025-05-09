import { expect, jest } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { RecoilRoot } from 'recoil';

import { RecordIndexActionMenuDropdown } from '@twenty-modules/action-menu/components/RecordIndexActionMenuDropdown';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { createMockActionMenuActions } from '@twenty-modules/action-menu/mock/action-menu-actions.mock';
import { ActionMenuComponentInstanceContext } from '@twenty-modules/action-menu/states/contexts/ActionMenuComponentInstanceContext';
import { recordIndexActionMenuDropdownPositionComponentState } from '@twenty-modules/action-menu/states/recordIndexActionMenuDropdownPositionComponentState';
import { isDropdownOpenComponentState } from '@twenty-modules/ui/layout/dropdown/states/isDropdownOpenComponentState';
import { extractComponentState } from '@twenty-modules/ui/utilities/state/component-state/utils/extractComponentState';
import {
  RouterDecorator,
  getCanvasElementForDropdownTesting,
} from '@twenty-ui/testing';
import { ContextStoreDecorator } from '@twenty-ui/front/testing/decorators/ContextStoreDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';



const meta: Meta<typeof RecordIndexActionMenuDropdown> = {
  title: 'Refactor Modules/ActionMenu/RecordIndexActionMenuDropdown',
  component: RecordIndexActionMenuDropdown,
  decorators: [
    I18nFrontDecorator,
    (Story) => (
      <RecoilRoot
        initializeState={({ set }) => {
          set(
            extractComponentState(
              recordIndexActionMenuDropdownPositionComponentState,
              'action-menu-dropdown-story',
            ),
            { x: 10, y: 10 },
          );

          set(
            extractComponentState(
              isDropdownOpenComponentState,
              'action-menu-dropdown-story-action-menu',
            ),
            true,
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
              actionMenuType: 'index-page-action-menu-dropdown',
              actions: createMockActionMenuActions({
              }),
            }}
          >
            <Story />
          </ActionMenuContext.Provider>
        </ActionMenuComponentInstanceContext.Provider>
      </RecoilRoot>
    ),
    ContextStoreDecorator,
    RouterDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof RecordIndexActionMenuDropdown>;

export const Default: Story = {
  args: {
    actionMenuId: 'story',
  },
};

export const WithInteractions: Story = {
  args: {
    actionMenuId: 'story',
  },
};
