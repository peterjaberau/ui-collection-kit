import { NoSelectionRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/no-selection/types/NoSelectionRecordActionsKeys';
import { SingleRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/single-record/types/SingleRecordActionsKey';
import { createMockActionMenuActions } from '@twenty-modules/action-menu/mock/action-menu-actions.mock';
import { getActionLabel } from '@twenty-modules/action-menu/utils/getActionLabel';
import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { ActionDropdownItem } from '../ActionDropdownItem';

const meta: Meta<typeof ActionDropdownItem> = {
  title: 'Refactor Modules/ActionMenu/Actions/Display/ActionDropdownItem',
  component: ActionDropdownItem,
  decorators: [
    (Story) => (
      <SelectableListComponentInstanceContext.Provider
        value={{ instanceId: 'story' }}
      >
        <Story />
      </SelectableListComponentInstanceContext.Provider>
    ),
    ComponentDecorator,
    RouterDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof ActionDropdownItem>;



const mockActions = createMockActionMenuActions({
});

const addToFavoritesAction = mockActions.find(
  (action) => action.key === SingleRecordActionKeys.ADD_TO_FAVORITES,
);

const goToPeopleAction = mockActions.find(
  (action) => action.key === NoSelectionRecordActionKeys.GO_TO_PEOPLE,
);

export const Default: Story = {
  args: {
    action: addToFavoritesAction,
  },

};

export const WithLink: Story = {
  args: {
    action: goToPeopleAction,
    to: '/objects/people',
  },

};
