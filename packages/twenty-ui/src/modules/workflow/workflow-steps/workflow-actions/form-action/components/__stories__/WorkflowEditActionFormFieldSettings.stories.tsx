import { WorkflowFormAction } from '@twenty-modules/workflow/types/Workflow';
import { Meta, StoryObj } from '@storybook/react';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { ComponentDecorator } from '@twenty-ui/testing';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { WorkflowStepActionDrawerDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepActionDrawerDecorator';
import { WorkflowEditActionFormFieldSettings } from '../WorkflowEditActionFormFieldSettings';

const meta: Meta<typeof WorkflowEditActionFormFieldSettings> = {
  title: 'Refactor Modules/Workflow/Actions/Form/WorkflowEditActionFormFieldSettings',
  component: WorkflowEditActionFormFieldSettings,
  decorators: [
    WorkflowStepActionDrawerDecorator,
    ComponentDecorator,
    I18nFrontDecorator,
    ObjectMetadataItemsDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof WorkflowEditActionFormFieldSettings>;

const mockAction: WorkflowFormAction = {
  id: 'form-action-1',
  type: 'FORM',
  name: 'Test Form',
  valid: true,
  settings: {
    input: [
      {
        id: 'field-1',
        name: 'text',
        label: 'Text Field',
        type: FieldMetadataType.TEXT,
        placeholder: 'Enter text',
        settings: {},
      },
    ],
    outputSchema: {},
    errorHandlingOptions: {
      retryOnFailure: { value: false },
      continueOnFailure: { value: false },
    },
  },
};

export const TextFieldSettings: Story = {
  args: {
    field: mockAction.settings.input[0],
  },
};

export const NumberFieldSettings: Story = {
  args: {
    field: {
      id: 'field-2',
      name: 'number',
      label: 'Number Field',
      type: FieldMetadataType.NUMBER,
      placeholder: 'Enter number',
      settings: {},
    },

  },
};

export const SingleRecordFieldSettings: Story = {
  args: {
    field: {
      id: 'field-3',
      name: 'company',
      label: 'Company',
      type: 'RECORD',
      settings: {
        objectName: 'company',
      },
    },

  },

};

export const DateFieldSettings: Story = {
  args: {
    field: {
      id: 'field-4',
      name: 'date',
      label: 'Date Field',
      type: FieldMetadataType.DATE,
      placeholder: 'Enter date',
      settings: {},
    },
  },
};
