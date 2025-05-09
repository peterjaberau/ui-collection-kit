import { Meta, StoryObj } from '@storybook/react';

import { RecordIndexPage } from '@twenty-ui/front/pages/object-record/RecordIndexPage';
import {
  PageDecorator,
  PageDecoratorArgs,
} from '@twenty-ui/front/testing/decorators/PageDecorator';
import { PrefetchLoadingDecorator } from '@twenty-ui/front/testing/decorators/PrefetchLoadingDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';

const meta: Meta<PageDecoratorArgs> = {
  title: 'App/Loading/PrefetchLoading',
  component: RecordIndexPage,
  args: {
    routePath: '/objects/:objectNamePlural',
    routeParams: {
      ':objectNamePlural': 'companies',
    },
  },
  parameters: {
    msw: graphqlMocks,
    prefetchLoadingSetDelay: 1000,
  },
};

export default meta;

export type Story = StoryObj<typeof RecordIndexPage>;

export const Default: Story = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  decorators: [PrefetchLoadingDecorator, PageDecorator],

};
