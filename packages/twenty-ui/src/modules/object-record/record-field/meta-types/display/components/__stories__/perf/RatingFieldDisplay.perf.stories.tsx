import { Meta, StoryObj } from '@storybook/react';

import { RatingFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/RatingFieldDisplay';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'UI/Data/Field/Display/RatingFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('person', 'performanceRating'),
    ComponentDecorator,
  ],
  component: RatingFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof RatingFieldDisplay>;

export const Default: Story = {};

export const Performance = getProfilingStory({
  componentName: 'RatingFieldDisplay',
  averageThresholdInMs: 0.5,
  numberOfRuns: 30,
  numberOfTestsPerRun: 30,
});
