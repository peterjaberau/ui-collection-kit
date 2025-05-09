import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { FormLinksFieldInput } from '../FormLinksFieldInput';

const meta: Meta<typeof FormLinksFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormLinksFieldInput',
  component: FormLinksFieldInput,
  args: {},
  argTypes: {},
  decorators: [WorkflowStepDecorator, I18nFrontDecorator],
};

export default meta;

type Story = StoryObj<typeof FormLinksFieldInput>;

export const Default: Story = {
  args: {
    label: 'Domain Name',
    defaultValue: {
      primaryLinkLabel: 'Google',
      primaryLinkUrl: 'https://www.google.com',
    },
  },

};

export const WithVariables: Story = {
  args: {
    label: 'Domain Name',
    defaultValue: {
      primaryLinkLabel: '{{04d5f3bf-9714-400d-ba27-644006a5fb1b.name}}',
      primaryLinkUrl: '{{04d5f3bf-9714-400d-ba27-644006a5fb1b.stage}}',
    },
    VariablePicker: () => <div>VariablePicker</div>,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Domain Name',
    readonly: true,

    VariablePicker: () => <div>VariablePicker</div>,
    defaultValue: {
      primaryLinkLabel: 'Google',
      primaryLinkUrl: 'https://www.google.com',
    },
  },
};
