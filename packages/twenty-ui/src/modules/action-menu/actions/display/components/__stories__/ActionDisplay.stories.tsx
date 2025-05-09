import { SingleRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/single-record/types/SingleRecordActionsKey';
import { ActionConfigContext } from '@twenty-modules/action-menu/contexts/ActionConfigContext';
import { ActionMenuContext } from '@twenty-modules/action-menu/contexts/ActionMenuContext';
import { createMockActionMenuActions } from '@twenty-modules/action-menu/mock/action-menu-actions.mock';
import { getActionLabel } from '@twenty-modules/action-menu/utils/getActionLabel';
import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { ActionDisplay } from '../ActionDisplay';

type Story = StoryObj<typeof ActionDisplay>;



const mockActions = createMockActionMenuActions({
});

const addToFavoritesAction = mockActions.find(
  (action) => action.key === SingleRecordActionKeys.ADD_TO_FAVORITES,
);

if (!addToFavoritesAction) {
  throw new Error('addToFavoritesAction not found');
}

const meta: Meta<typeof ActionDisplay> = {
  title: 'Modules/ActionMenu/Actions/Display/ActionDisplay',
  component: ActionDisplay,
  decorators: [
    (Story) => (
      <ActionConfigContext.Provider value={addToFavoritesAction}>
        <Story />
      </ActionConfigContext.Provider>
    ),
    ComponentDecorator,
    RouterDecorator,
  ],
};

export default meta;

export const AsButton: Story = {
  args: {
  },
  decorators: [
    (Story) => (
      <ActionMenuContext.Provider
        value={{
          isInRightDrawer: false,
          actionMenuType: 'command-menu',
          displayType: 'button',
          actions: [],
        }}
      >
        <Story />
      </ActionMenuContext.Provider>
    ),
  ],

};

export const AsListItem: Story = {
  args: {
  },
  decorators: [
    (Story) => (
      <SelectableListComponentInstanceContext.Provider
        value={{ instanceId: 'story' }}
      >
        <Story />
      </SelectableListComponentInstanceContext.Provider>
    ),
    (Story) => (
      <ActionMenuContext.Provider
        value={{
          isInRightDrawer: false,
          actionMenuType: 'command-menu',
          displayType: 'listItem',
          actions: [],
        }}
      >
        <Story />
      </ActionMenuContext.Provider>
    ),
  ],

};

export const AsDropdownItem: Story = {
  args: {
  },
  decorators: [
    (Story) => (
      <SelectableListComponentInstanceContext.Provider
        value={{ instanceId: 'story' }}
      >
        <Story />
      </SelectableListComponentInstanceContext.Provider>
    ),
    (Story) => (
      <ActionMenuContext.Provider
        value={{
          isInRightDrawer: false,
          actionMenuType: 'command-menu',
          displayType: 'dropdownItem',
          actions: [],
        }}
      >
        <Story />
      </ActionMenuContext.Provider>
    ),
  ],

};
