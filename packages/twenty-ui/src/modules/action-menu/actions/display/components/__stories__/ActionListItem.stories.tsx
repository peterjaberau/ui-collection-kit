import { NoSelectionRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/no-selection/types/NoSelectionRecordActionsKeys';
import { SingleRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/single-record/types/SingleRecordActionsKey';
import { createMockActionMenuActions } from '@twenty-modules/action-menu/mock/action-menu-actions.mock';
import { getActionLabel } from '@twenty-modules/action-menu/utils/getActionLabel';
import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { ActionListItem } from '../ActionListItem';

type Story = StoryObj<typeof ActionListItem>;



const mockActions = createMockActionMenuActions({
});

const addToFavoritesAction = mockActions.find(
  (action) => action.key === SingleRecordActionKeys.ADD_TO_FAVORITES,
);

const goToPeopleAction = mockActions.find(
  (action) => action.key === NoSelectionRecordActionKeys.GO_TO_PEOPLE,
);

const meta: Meta<typeof ActionListItem> = {
  title: 'Refactor Modules/ActionMenu/Actions/Display/ActionListItem',
  component: ActionListItem,
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
