import { Meta, StoryObj } from '@storybook/react';
import { IconSearch } from '../../../../display';
import {
  CatalogDecorator,
  CatalogStory,
  ComponentDecorator,
} from '../../../../testing';
import {
  IconButton,
  IconButtonAccent,
  IconButtonPosition,
  IconButtonSize,
  IconButtonVariant,
} from '../IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Refactor UI/Input/Button/IconButton',
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    size: 'small',
    variant: 'primary',
    accent: 'danger',
    disabled: false,
    focus: false,
    position: 'standalone',
    Icon: IconSearch,
  },
  decorators: [ComponentDecorator],
};

export const Catalog: CatalogStory<Story, typeof IconButton> = {
  args: { Icon: IconSearch },
  argTypes: {
    size: { control: false },
    variant: { control: false },
    focus: { control: false },
    accent: { control: false },
    disabled: { control: false },
    Icon: { control: false },
    position: { control: false },
  },
  parameters: {
    pseudo: { hover: ['.hover'], active: ['.pressed'] },
    catalog: {
      dimensions: [
        {
          name: 'sizes',
          values: ['small', 'medium'] satisfies IconButtonSize[],
          props: (size: IconButtonSize) => ({ size }),
        },
        {
          name: 'states',
          values: [
            'default',
            'hover',
            'pressed',
            'disabled',
            'focus',
            'disabled+focus',
          ],
          props: (state: string) => {
            switch (state) {
              case 'default':
                return {};
              case 'hover':
              case 'pressed':
                return { className: state };
              case 'focus':
                return { focus: true };
              case 'disabled':
                return { disabled: true };
              case 'active':
                return { active: true };
              case 'disabled+focus':
                return { focus: true, disabled: true };
              default:
                return {};
            }
          },
        },
        {
          name: 'accents',
          values: ['default', 'blue', 'danger'] satisfies IconButtonAccent[],
          props: (accent: IconButtonAccent) => ({ accent }),
        },
        {
          name: 'variants',
          values: [
            'primary',
            'secondary',
            'tertiary',
          ] satisfies IconButtonVariant[],
          props: (variant: IconButtonVariant) => ({ variant }),
        },
      ],
    },
  },
  decorators: [CatalogDecorator],
};

export const PositionCatalog: CatalogStory<Story, typeof IconButton> = {
  args: { Icon: IconSearch },
  argTypes: {
    size: { control: false },
    variant: { control: false },
    focus: { control: false },
    accent: { control: false },
    disabled: { control: false },
    position: { control: false },
    Icon: { control: false },
  },
  parameters: {
    pseudo: { hover: ['.hover'], active: ['.pressed'] },
    catalog: {
      dimensions: [
        {
          name: 'positions',
          values: [
            'standalone',
            'left',
            'middle',
            'right',
          ] satisfies IconButtonPosition[],
          props: (position: IconButtonPosition) => ({ position }),
        },
        {
          name: 'states',
          values: [
            'default',
            'hover',
            'pressed',
            'disabled',
            'focus',
            'disabled+focus',
          ],
          props: (state: string) => {
            switch (state) {
              case 'default':
                return {};
              case 'hover':
              case 'pressed':
                return { className: state };
              case 'focus':
                return { focus: true };
              case 'disabled':
                return { disabled: true };
              case 'active':
                return { active: true };
              case 'disabled+focus':
                return { focus: true, disabled: true };
              default:
                return {};
            }
          },
        },
        {
          name: 'sizes',
          values: ['small', 'medium'] satisfies IconButtonSize[],
          props: (size: IconButtonSize) => ({ size }),
        },
        {
          name: 'variants',
          values: [
            'primary',
            'secondary',
            'tertiary',
          ] satisfies IconButtonVariant[],
          props: (variant: IconButtonVariant) => ({ variant }),
        },
      ],
    },
  },
  decorators: [CatalogDecorator],
};
