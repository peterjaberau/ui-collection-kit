import { Meta, StoryObj } from '@storybook/react';
import {
  CatalogDecorator,
  CatalogStory,
  ComponentDecorator,
} from '../../../../testing';
import { ThemeColor, MAIN_COLOR_NAMES } from '../../../../theme';

import { Status } from '../Status';

const meta: Meta<typeof Status> = {
  title: 'Twenty UI/Display/Status/Status',
  component: Status,
  args: {
    text: 'Urgent',
    weight: 'medium',
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

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

export const Catalog: CatalogStory<Story, typeof Status> = {
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
