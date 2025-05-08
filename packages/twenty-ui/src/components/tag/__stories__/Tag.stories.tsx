import { Meta, StoryObj } from '@storybook/react';

import { IconUser } from '../../../display/icon/components/TablerIcons';
import {
  CatalogDecorator,
  CatalogStory,
  ComponentDecorator,
} from '../../../testing';
import { MAIN_COLOR_NAMES, ThemeColor } from '../../../theme';

import { Tag } from '../Tag';

const meta: Meta<typeof Tag> = {
  title: 'Refactor UI/Display/Tag/Tag',
  component: Tag,
  args: {
    text: 'Urgent',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    color: 'red',
  },
  decorators: [ComponentDecorator],
};

export const WithLongText: Story = {
  decorators: [ComponentDecorator],
  args: {
    color: 'green',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  parameters: {
    container: { width: 100 },
  },
};

export const WithIcon: Story = {
  decorators: [ComponentDecorator],
  args: {
    color: 'green',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    Icon: IconUser,
  },
  parameters: {
    container: { width: 100 },
  },
};

export const DontShrink: Story = {
  decorators: [ComponentDecorator],
  args: {
    color: 'green',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    preventShrink: true,
  },
  parameters: {
    container: { width: 100 },
  },
};

export const Catalog: CatalogStory<Story, typeof Tag> = {
  argTypes: {
    color: { control: false },
  },
  parameters: {
    catalog: {
      dimensions: [
        {
          name: 'colors',
          values: MAIN_COLOR_NAMES,
          props: (color: ThemeColor) => ({ color }),
        },
      ],
    },
  },
  decorators: [CatalogDecorator],
};

export const EmptyTag: Story = {
  decorators: [ComponentDecorator],
  args: {
    color: 'transparent',
    text: 'No Value',
    variant: 'outline',
    weight: 'medium',
  },
  parameters: {
    container: { width: 'auto' },
  },
};
