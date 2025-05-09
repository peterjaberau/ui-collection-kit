import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { IconsProviderDecorator } from '@twenty-ui/front/testing/decorators/IconsProviderDecorator';
import { sleep } from '@twenty-ui/front/utils/sleep';

import { ComponentDecorator } from '@twenty-ui/testing';
import { IconPicker, IconPickerProps } from '../IconPicker';

type RenderProps = IconPickerProps;
const Render = (args: RenderProps) => {
  const [{ selectedIconKey }, updateArgs] = useArgs();

  return (
    <IconPicker
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...args}
      onChange={({ iconKey }) => {
        updateArgs({ selectedIconKey: iconKey });
      }}
      selectedIconKey={selectedIconKey}
    />
  );
};

const meta: Meta<typeof IconPicker> = {
  title: 'Refactor UI/Input/IconPicker/IconPicker',
  component: IconPicker,
  decorators: [IconsProviderDecorator, ComponentDecorator],
  render: Render,
};

export default meta;
type Story = StoryObj<typeof IconPicker>;

export const Default: Story = {};

export const WithOpen: Story = {
};

export const WithSelectedIcon: Story = {
  args: { selectedIconKey: 'IconCalendarEvent' },
};

export const WithOpenAndSelectedIcon: Story = {
  ...WithSelectedIcon,
};

export const WithSearch: Story = {
  ...WithSelectedIcon,
};

export const WithSearchAndClose: Story = {
  ...WithSelectedIcon,
};
