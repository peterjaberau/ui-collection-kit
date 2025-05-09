import { Meta, StoryObj } from '@storybook/react';

import { EmailsFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/EmailsFieldDisplay';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'UI/Data/Field/Display/EmailsFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('person', 'emails', {
      primaryEmail: 'test@test.com',
      additionalEmails: ['toto@test.com'],
    }),
    ComponentDecorator,
  ],
  component: EmailsFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof EmailsFieldDisplay>;

export const Default: Story = {};

export const Elipsis: Story = {
  parameters: {
    container: { width: 100 },
  },
  decorators: [
    getFieldDecorator('person', 'emails', {
      primaryEmail:
        'asdasdasdaksjdhkajshdkajhasmdkamskdsd@asdkjhaksjdhaksjd.com',
      additionalEmails: [],
    }),
  ],
};

export const Performance = getProfilingStory({
  componentName: 'EmailsFieldDisplay',
  averageThresholdInMs: 0.5,
  numberOfRuns: 50,
  numberOfTestsPerRun: 100,
});
