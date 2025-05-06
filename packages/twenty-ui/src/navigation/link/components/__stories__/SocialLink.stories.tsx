import { Meta, StoryObj } from '@storybook/react';

import { ComponentWithRouterDecorator } from '../../../../testing';
import { LinkType, SocialLink } from '../SocialLink';

const meta: Meta<typeof SocialLink> = {
  title: 'Twenty UI/Navigation/Link/SocialLink',
  component: SocialLink,
  decorators: [ComponentWithRouterDecorator],
  args: {
    href: '/test',
    label: 'Social Link',
  },
};

export default meta;
type Story = StoryObj<typeof SocialLink>;

const linkedin: LinkType = LinkType.LinkedIn;
const twitter: LinkType = LinkType.Twitter;

export const LinkedIn: Story = {
  args: {
    href: '/LinkedIn',
    label: 'LinkedIn',
    type: linkedin,
  },
};

export const Twitter: Story = {
  args: {
    href: '/Twitter',
    label: 'Twitter',
    type: twitter,
  },
};
