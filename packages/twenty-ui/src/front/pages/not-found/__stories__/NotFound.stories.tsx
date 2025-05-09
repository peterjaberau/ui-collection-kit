import { Meta, StoryObj } from '@storybook/react';

import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

import { NotFound } from '../NotFound';
const meta: Meta<PageDecoratorArgs> = {
  title: 'Pages/NotFound/Default',
  component: NotFound,
  decorators: [PageDecorator],
  args: {
    routePath: '/toto-not-found',
  },
  parameters: {
    msw: graphqlMocks,
  },
};

export default meta;

export type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
};
