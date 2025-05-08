import { Meta, StoryObj } from '@storybook/react';
import { IconBrandGoogle } from '../../../../display';
import { ComponentDecorator } from '../../../../testing';
import { MainButton } from '../MainButton';


const meta: Meta<typeof MainButton> = {
  title: 'Refactor UI/Input/Button/MainButton',
  component: MainButton,
  decorators: [ComponentDecorator],
  args: { title: 'A primary Button' },
};

export default meta;
type Story = StoryObj<typeof MainButton>;

export const Default: Story = {
};

export const WithIcon: Story = {
  args: { Icon: IconBrandGoogle },
};

export const DisabledWithIcon: Story = {
  args: { ...WithIcon.args, disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
};

export const Width: Story = {
  args: { width: 200 },
};

export const Secondary: Story = {
  args: { title: 'A secondary Button', variant: 'secondary' },
};

export const SecondaryWithIcon: Story = {
  args: { ...Secondary.args, ...WithIcon.args },
};

export const SecondaryDisabledWithIcon: Story = {
  args: { ...SecondaryWithIcon.args, disabled: true },
};

export const SecondaryFullWidth: Story = {
  args: { ...Secondary.args, ...FullWidth.args },
};
