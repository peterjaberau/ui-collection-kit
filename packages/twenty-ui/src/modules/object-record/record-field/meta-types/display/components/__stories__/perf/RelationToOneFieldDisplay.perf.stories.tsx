import { Meta, StoryObj } from '@storybook/react';

import { RelationToOneFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/RelationToOneFieldDisplay';
import { ChipGeneratorsDecorator } from '@twenty-ui/front/testing/decorators/ChipGeneratorsDecorator';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'UI/Data/Field/Display/RelationFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    ChipGeneratorsDecorator,
    getFieldDecorator('person', 'company'),
    ComponentDecorator,
  ],
  component: RelationToOneFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof RelationToOneFieldDisplay>;

export const Default: Story = {};

export const Performance = getProfilingStory({
  componentName: 'RelationFieldDisplay',
  averageThresholdInMs: 0.22,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
