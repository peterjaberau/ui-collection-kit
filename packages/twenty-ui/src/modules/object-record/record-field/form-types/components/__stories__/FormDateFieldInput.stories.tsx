import { MAX_DATE } from '@twenty-modules/ui/input/components/internal/date/constants/MaxDate';
import { MIN_DATE } from '@twenty-modules/ui/input/components/internal/date/constants/MinDate';
import { parseDateToString } from '@twenty-modules/ui/input/components/internal/date/utils/parseDateToString';
import { Meta, StoryObj } from '@storybook/react';
import {
  expect,
  fn,
  userEvent,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from '@storybook/test';
import { DateTime } from 'luxon';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { MOCKED_STEP_ID } from '@twenty-ui/front/testing/mock-data/workflow';
import { FormDateFieldInput } from '../FormDateFieldInput';

const meta: Meta<typeof FormDateFieldInput> = {
  title: 'Refactor UI/Data/Field/Form/Input/FormDateFieldInput',
  component: FormDateFieldInput,
  args: {},
  argTypes: {},
  decorators: [I18nFrontDecorator, WorkflowStepDecorator],
};

export default meta;

type Story = StoryObj<typeof FormDateFieldInput>;

const currentYear = new Date().getFullYear();

export const Default: Story = {
  args: {
    label: 'Created At',
    defaultValue: `${currentYear}-12-09T13:20:19.631Z`,
  },

};

export const WithDefaultEmptyValue: Story = {
  args: {
    label: 'Created At',
    defaultValue: undefined,
  },

};

export const SetsDateWithInput: Story = {
  args: {
    label: 'Created At',
    defaultValue: undefined,

  },

};

export const SetsDateWithDatePicker: Story = {
  args: {
    label: 'Created At',
    defaultValue: `2024-12-09T13:20:19.631Z`,

  },

};

export const ResetsDateByClickingButton: Story = {
  args: {
    label: 'Created At',
    defaultValue: `${currentYear}-12-09T13:20:19.631Z`,

  },
};

export const ResetsDateByErasingInputContent: Story = {
  args: {
    label: 'Created At',
    defaultValue: `${currentYear}-12-09T13:20:19.631Z`,

  },
};

export const DefaultsToMinValueWhenTypingReallyOldDate: Story = {
  args: {
    label: 'Created At',
    defaultValue: undefined,

  },
};

export const DefaultsToMaxValueWhenTypingReallyFarDate: Story = {
  args: {
    label: 'Created At',
    defaultValue: undefined,

  },
};

export const SwitchesToStandaloneVariable: Story = {
  args: {
    label: 'Created At',
    defaultValue: undefined,

    VariablePicker: ({ onVariableSelect }) => {
      return (
        <button
          onClick={() => {
            onVariableSelect(`{{${MOCKED_STEP_ID}.createdAt}}`);
          }}
        >
          Add variable
        </button>
      );
    },
  },
};

export const ClickingOutsideDoesNotResetInputState: Story = {
  args: {
    label: 'Created At',
    defaultValue: `${currentYear}-12-09T13:20:19.631Z`,

  },
};

export const Disabled: Story = {
  args: {
    label: 'Created At',
    defaultValue: `${currentYear}-12-09T13:20:19.631Z`,

    readonly: true,
  },
};

export const DisabledWithVariable: Story = {
  args: {
    label: 'Created At',
    defaultValue: `{{${MOCKED_STEP_ID}.createdAt}}`,

    readonly: true,
    VariablePicker: ({ onVariableSelect }) => {
      return (
        <button
          onClick={() => {
            onVariableSelect(`{{${MOCKED_STEP_ID}.createdAt}}`);
          }}
        >
          Add variable
        </button>
      );
    },
  },
  decorators: [WorkflowStepDecorator],
};
