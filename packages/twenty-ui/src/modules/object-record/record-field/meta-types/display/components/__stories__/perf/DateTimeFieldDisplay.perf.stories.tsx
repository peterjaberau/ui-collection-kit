import { Meta, StoryObj } from '@storybook/react';

import { DateFormat } from '@twenty-modules/localization/constants/DateFormat';
import { TimeFormat } from '@twenty-modules/localization/constants/TimeFormat';
import { DateTimeFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/DateTimeFieldDisplay';
import { UserContext } from '@twenty-modules/users/contexts/UserContext';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Display/DateTimeFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('person', 'createdAt'),
    ComponentDecorator,
    (Story) => {
      return (
        <UserContext.Provider
          value={{
            dateFormat: DateFormat.SYSTEM,
            timeFormat: TimeFormat.SYSTEM,
            timeZone: 'UTC',
          }}
        >
          <Story />
        </UserContext.Provider>
      );
    },
  ],
  component: DateTimeFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof DateTimeFieldDisplay>;

export const Default: Story = {};

export const Elipsis: Story = {
  parameters: {
    container: { width: 50 },
  },
};

export const Performance = getProfilingStory({
  componentName: 'DateTimeFieldDisplay',
  averageThresholdInMs: 0.1,
  numberOfRuns: 30,
  numberOfTestsPerRun: 30,
});
