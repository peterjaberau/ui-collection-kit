import { Meta, StoryObj } from '@storybook/react';
import { AvatarChip } from '../../avatar-chip/AvatarChip';

import {
  ComponentDecorator,
  RecoilRootDecorator,
  RouterDecorator,
} from '../../../testing';


const meta: Meta<typeof AvatarChip> = {
  title: 'Refactor UI/Display/Chip/AvatarChip',
  component: AvatarChip,
  decorators: [RouterDecorator, ComponentDecorator, RecoilRootDecorator],

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
