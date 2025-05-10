import { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from '../../../../testing/decorators/ComponentDecorator';

import { H3Title } from '../H3Title';

const meta: Meta<typeof H3Title> = {
  title: 'Refactor UI/Display/Typography/Title/H3Title',
  component: H3Title,
  decorators: [ComponentDecorator],
  args: {
    title: 'H3 title',
  },
};

export default meta;

type Story = StoryObj<typeof H3Title>;

export const Default: Story = {
  decorators: [ComponentDecorator],
};
