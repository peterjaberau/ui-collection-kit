import { Meta, StoryObj } from '@storybook/react';
import { IconPlus } from '@twenty-ui/display';
import { ComponentDecorator } from '@twenty-ui/testing';
import { THEME_LIGHT } from '@twenty-ui/theme';
import { WorkflowStepHeader } from '../WorkflowStepHeader';

const meta: Meta<typeof WorkflowStepHeader> = {
  title: 'Modules/Workflow/WorkflowStepHeader',
  component: WorkflowStepHeader,
  args: {

  },
  argTypes: {},
  decorators: [ComponentDecorator],
  parameters: {
    disableHotkeyInitialization: true,
  },
};

export default meta;

type Story = StoryObj<typeof WorkflowStepHeader>;

export const Default: Story = {
  args: {
    headerType: 'Action',
    iconColor: THEME_LIGHT.font.color.tertiary,
    initialTitle: 'Create Record',
    Icon: IconPlus,
  },
};

export const EditableTitle: Story = {
  args: {
    headerType: 'Action',
    iconColor: THEME_LIGHT.font.color.tertiary,
    initialTitle: 'Create Record',
    Icon: IconPlus,

  },
};

export const Disabled: Story = {
  args: {
    headerType: 'Action',
    iconColor: THEME_LIGHT.font.color.tertiary,
    initialTitle: 'Create Record',
    Icon: IconPlus,
    disabled: true,

  },
};
