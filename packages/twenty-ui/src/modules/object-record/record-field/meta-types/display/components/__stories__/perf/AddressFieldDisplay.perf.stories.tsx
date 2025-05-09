import { Meta, StoryObj } from '@storybook/react';

import { AddressFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/display/components/AddressFieldDisplay';
import { FieldAddressValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { getFieldDecorator } from '@twenty-ui/front/testing/decorators/getFieldDecorator';
import { MemoryRouterDecorator } from '@twenty-ui/front/testing/decorators/MemoryRouterDecorator';
import { getProfilingStory } from '@twenty-ui/front/testing/profiling/utils/getProfilingStory';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta = {
  title: 'UI/Data/Field/Display/AddressFieldDisplay',
  decorators: [
    MemoryRouterDecorator,
    getFieldDecorator('company', 'address', {
      addressCity: 'San Francisco',
      addressCountry: 'United States',
      addressStreet1: '1234 Elm Street',
      addressStreet2: 'Apt 1234',
      addressLat: 0,
      addressLng: 0,
      addressPostcode: '12345',
      addressState: 'CA',
    } as FieldAddressValue),
    ComponentDecorator,
  ],
  component: AddressFieldDisplay,
  args: {},
  parameters: {
    chromatic: { disableSnapshot: true },
  },
};

export default meta;

type Story = StoryObj<typeof AddressFieldDisplay>;

export const Default: Story = {};

export const Elipsis: Story = {
  parameters: {
    container: { width: 100 },
  },
  decorators: [
    getFieldDecorator('company', 'address', {
      addressCity:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam',
      addressCountry: 'United States',
      addressStreet1: '1234 Elm Street',
      addressStreet2: 'Apt 1234',
      addressLat: 0,
      addressLng: 0,
      addressPostcode: '12345',
      addressState: 'CA',
    } as FieldAddressValue),
  ],
};

export const Performance = getProfilingStory({
  componentName: 'AddressFieldDisplay',
  averageThresholdInMs: 0.15,
  numberOfRuns: 20,
  numberOfTestsPerRun: 100,
});
