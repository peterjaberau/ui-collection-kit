import { ActorFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/ActorFieldDisplay';
import { Meta, StoryObj } from '@storybook/react';

import { ChipGeneratorsDecorator } from '@twenty-ui/front/testing/decorators/ChipGeneratorsDecorator';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'UI/Data/Field/Display/ActorFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    ChipGeneratorsDecorator,
    getFieldDecorator('company', 'createdBy', {
      id: '1',
      name: 'John Doe',
    }),
    ComponentDecorator,
  ],
  component: ActorFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof ActorFieldDisplay>;

export const Default: Story = {};

export const Performance = getProfilingStory({
  componentName: 'ActorFieldDisplay',
  averageThresholdInMs: 0.2,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
