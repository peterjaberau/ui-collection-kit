import { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from '../../../testing';

import { OverflowingTextWithTooltip } from '../OverflowingTextWithTooltip';

const placeholderText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus diam, rhoncus nec consequat quis, dapibus quis massa. Praesent tincidunt augue at ex bibendum, non finibus augue faucibus. In at gravida orci. Nulla facilisi. Proin ut augue ut nisi pellentesque tristique. Proin sodales libero id turpis tincidunt posuere.';

const meta: Meta<typeof OverflowingTextWithTooltip> = {
  title: 'Twenty UI/Display/Tooltip/OverflowingTextWithTooltip',
  component: OverflowingTextWithTooltip,
};

export default meta;
type Story = StoryObj<typeof OverflowingTextWithTooltip>;

export const Default: Story = {
  args: {
    text: placeholderText,
  },
  decorators: [ComponentDecorator],

};
