import { WorkflowFormAction } from '@twenty-modules/workflow/types/Workflow';
import { Meta, StoryObj } from '@storybook/react';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { WorkflowStepActionDrawerDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepActionDrawerDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { WorkspaceDecorator } from '@twenty-ui/front/testing/decorators/WorkspaceDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { WorkflowEditActionFormFiller } from '../WorkflowEditActionFormFiller';

const meta: Meta<typeof WorkflowEditActionFormFiller> = {
  title: 'Modules/Workflow/Actions/Form/WorkflowEditActionFormFiller',
  component: WorkflowEditActionFormFiller,
  parameters: {
    msw: graphqlMocks,
  },
  decorators: [
    WorkflowStepActionDrawerDecorator,
    ComponentDecorator,
    I18nFrontDecorator,
    WorkflowStepDecorator,
    RouterDecorator,
    ObjectMetadataItemsDecorator,
    WorkspaceDecorator,
  ],
};

export default meta;
type Story = StoryObj<typeof WorkflowEditActionFormFiller>;

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
      {
        id: 'field-2',
        name: 'number',
        label: 'Number Field',
        type: FieldMetadataType.NUMBER,
        placeholder: 'Enter number',
        settings: {},
      },
      {
        id: 'field-3',
        name: 'record',
        label: 'Record',
        type: 'RECORD',
        placeholder: 'Select a record',
        settings: {
          objectName: 'company',
        },
      },
      {
        id: 'field-4',
        name: 'date',
        label: 'Date',
        type: FieldMetadataType.DATE,
        placeholder: 'mm/dd/yyyy',
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

export const Default: Story = {
  args: {
    action: mockAction,
    actionOptions: {
      readonly: false,
    },
  },
};

export const ReadonlyMode: Story = {
  args: {
    action: mockAction,
    actionOptions: {
      readonly: true,
    },
  },
};
