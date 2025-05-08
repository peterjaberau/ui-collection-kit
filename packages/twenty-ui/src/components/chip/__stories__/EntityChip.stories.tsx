import { Meta, StoryObj } from '@storybook/react';
import { AvatarChip } from '../../avatar-chip/AvatarChip';



const meta: Meta<typeof AvatarChip> = {
  title: 'Refactor UI/Display/Chip/AvatarChip',
  component: AvatarChip,
  args: {
    name: 'Entity name',
    avatarType: 'squared',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarChip>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    name: '',
  },
};
