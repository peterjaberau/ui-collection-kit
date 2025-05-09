import { Meta, StoryObj } from '@storybook/react';

import { FullNameFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/FullNameFieldDisplay';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Display/FullNameFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('person', 'name'),
    ComponentDecorator,
  ],
  component: FullNameFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof FullNameFieldDisplay>;

export const Default: Story = {};

export const Elipsis: Story = {
  parameters: {
    container: { width: 50 },
  },
};

export const Performance = getProfilingStory({
  componentName: 'FullNameFieldDisplay',
  averageThresholdInMs: 0.5,
  numberOfRuns: 50,
  numberOfTestsPerRun: 100,
});
