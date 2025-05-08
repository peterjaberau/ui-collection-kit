import { Meta, StoryObj } from '@storybook/react';

import { IconBell } from '../../../../display';
import {
  CatalogDecorator,
  CatalogDimension,
  CatalogOptions,
  CatalogStory,
  ComponentDecorator,
} from '../../../../testing';
import { MenuItemToggle } from '../MenuItemToggle';

const meta: Meta<typeof MenuItemToggle> = {
  title: 'Refactor UI/Navigation/MenuItem/MenuItemToggle',
  component: MenuItemToggle,
};

export default meta;

type Story = StoryObj<typeof MenuItemToggle>;

export const Default: Story = {
  args: {
    text: 'First option',
  },
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof MenuItemToggle> = {
  args: { LeftIcon: IconBell, text: 'Menu item' },
  argTypes: {
    className: { control: false },
  },
  parameters: {
    pseudo: { hover: ['.hover'], active: ['.pressed'], focus: ['.focus'] },
    catalog: {
      dimensions: [
        {
          name: 'withIcon',
          values: [true, false],
          props: (withIcon: boolean) => ({
            LeftIcon: withIcon ? IconBell : undefined,
          }),
          labels: (withIcon: boolean) =>
            withIcon ? 'With left icon' : 'Without left icon',
        },
        {
          name: 'toggled',
          values: [true, false],
          props: (toggled: boolean) => ({ toggled }),
          labels: (toggled: boolean) => (toggled ? 'Toggled' : 'Not toggled'),
        },
        {
          name: 'states',
          values: ['default', 'hover'],
          props: (state: string) => {
            switch (state) {
              case 'default':
                return {};
              case 'hover':
                return { className: state };
              default:
                return {};
            }
          },
        },
      ] satisfies CatalogDimension[],
      options: {
        elementContainer: {
          width: 200,
        },
      } satisfies CatalogOptions,
    },
  },
  decorators: [CatalogDecorator],
};
