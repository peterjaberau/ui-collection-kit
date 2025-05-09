import { NoSelectionRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/no-selection/types/NoSelectionRecordActionsKeys';
import { SingleRecordActionKeys } from '@twenty-modules/action-menu/actions/record-actions/single-record/types/SingleRecordActionsKey';
import { createMockActionMenuActions } from '@twenty-modules/action-menu/mock/action-menu-actions.mock';
import { getActionLabel } from '@twenty-modules/action-menu/utils/getActionLabel';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { ActionButton } from '../ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'Modules/ActionMenu/Actions/Display/ActionButton',
  component: ActionButton,
  decorators: [ComponentDecorator, RouterDecorator],
};

export default meta;

type Story = StoryObj<typeof ActionButton>;



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
