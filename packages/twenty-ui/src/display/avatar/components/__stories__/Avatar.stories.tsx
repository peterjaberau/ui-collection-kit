
import { Meta, StoryObj } from '@storybook/react';

import {
  AVATAR_URL_MOCK,
  ComponentDecorator,
  RecoilRootDecorator,
} from '../../../../testing';

import { Avatar } from '../Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Refactor Modules/Users/Avatar',
  decorators: [ComponentDecorator, RecoilRootDecorator],
  component: Avatar,
  args: {
    avatarUrl: AVATAR_URL_MOCK,
    size: 'md',
    placeholder: 'L',
    type: 'rounded',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Rounded: Story = {
  args: {  },
};

export const Squared: Story = {
  args: { type: 'squared' },
};

export const NoAvatarPictureRounded: Story = {
  args: { avatarUrl: '' },
};

export const NoAvatarPictureSquared: Story = {
  args: {
    ...NoAvatarPictureRounded.args,
    ...Squared.args,
  },
};
