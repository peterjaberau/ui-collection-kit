import { Meta, StoryObj } from '@storybook/react';
import { IconArrowRight } from '../../../../display';
import { ComponentDecorator } from '../../../../testing';
import { RoundedIconButton } from '../RoundedIconButton';

const meta: Meta<typeof RoundedIconButton> = {
  title: 'Twenty UI/Input/Button/RoundedIconButton',
  component: RoundedIconButton,
};

export default meta;
type Story = StoryObj<typeof RoundedIconButton>;

export const Default: Story = {
  decorators: [ComponentDecorator],
  argTypes: { Icon: { control: false } },
  args: { Icon: IconArrowRight },
};
