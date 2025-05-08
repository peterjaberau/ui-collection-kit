import { Meta, StoryObj } from '@storybook/react';

import { ComponentDecorator } from '../../../../testing';
import { Banner } from '../Banner';

const meta: Meta<typeof Banner> = {
  title: 'Refactor UI/Layout/Banner/Banner',
  component: Banner,
  decorators: [ComponentDecorator],
  render: (args) => (
    <Banner {...args}>
      Sync lost with mailbox hello@twenty.com. Please reconnect for updates:
    </Banner>
  ),
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {};
