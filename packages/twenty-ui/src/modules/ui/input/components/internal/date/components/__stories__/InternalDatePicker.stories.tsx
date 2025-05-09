import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { DateTimePicker } from '../InternalDatePicker';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Refactor UI/Input/Internal/InternalDatePicker',
  component: DateTimePicker,
  decorators: [ComponentDecorator],
  argTypes: {
    date: { control: 'date' },
  },
  render: ({ date }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, updateArgs] = useArgs();
    return (
      <DateTimePicker
        date={isDefined(date) ? new Date(date) : new Date()}
        onChange={(newDate) => updateArgs({ date: newDate })}
      />
    );
  },
  args: { date: new Date('January 1, 2023 02:00:00') },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {};

export const WithOpenMonthSelect: Story = {
};

export const WithOpenYearSelect: Story = {
};
