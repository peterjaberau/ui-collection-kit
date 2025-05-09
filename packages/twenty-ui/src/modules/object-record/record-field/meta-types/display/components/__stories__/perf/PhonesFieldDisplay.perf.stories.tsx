import { Meta, StoryObj } from '@storybook/react';

import { PhonesFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/PhonesFieldDisplay';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'Refactor UI/Data/Field/Display/PhonesFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('person', 'phones'),
    ComponentDecorator,
    I18nFrontDecorator,
    SnackBarDecorator,
  ],
  component: PhonesFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof PhonesFieldDisplay>;

export const Default: Story = {};

export const Elipsis: Story = {
  parameters: {
    container: { width: 50 },
  },
};

export const WrongNumber: Story = {
  decorators: [
    getFieldDecorator('person', 'phones', {
      primaryPhoneNumber: '123-456-7890',
      primaryPhoneCountryCode: '+1',
      additionalPhones: null,
    }),
  ],
};

export const Performance = getProfilingStory({
  componentName: 'PhonesFieldDisplay',
  averageThresholdInMs: 0.5,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
