import { Meta, StoryObj } from '@storybook/react';

import { CatalogDecorator } from '../../../../testing/decorators/CatalogDecorator';
import { ComponentDecorator } from '../../../../testing/decorators/ComponentDecorator';
import { CatalogStory } from '../../../../testing/types/CatalogStory';

import { Label, LabelVariant } from '../Label';

const meta: Meta<typeof Label> = {
  title: 'Refactor UI/Display/Typography/Label',
  component: Label,
  decorators: [ComponentDecorator],
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  decorators: [ComponentDecorator],
  args: {
    children: 'Label',
  },
};

export const Catalog: CatalogStory<Story, typeof Label> = {
  decorators: [CatalogDecorator],
  args: {
    children: 'Label',
  },
  parameters: {
    catalog: {
      dimensions: [
        {
          name: 'Variant',
          values: ['default', 'small'] satisfies LabelVariant[],
          props: (variant: LabelVariant) => ({ variant }),
        },
      ],
    },
  },
};
