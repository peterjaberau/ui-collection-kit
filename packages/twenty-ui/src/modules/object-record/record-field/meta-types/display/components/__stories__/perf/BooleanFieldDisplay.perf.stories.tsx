import { Meta, StoryObj } from '@storybook/react';

import { BooleanFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/BooleanFieldDisplay';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'UI/Data/Field/Display/BooleanFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('company', 'idealCustomerProfile'),
    ComponentDecorator,
  ],
  component: BooleanFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof BooleanFieldDisplay>;

export const Default: Story = {};

export const Performance = getProfilingStory({
  componentName: 'BooleanFieldDisplay',
  averageThresholdInMs: 0.15,
  numberOfRuns: 50,
  numberOfTestsPerRun: 100,
});
