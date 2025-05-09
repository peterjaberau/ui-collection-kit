import { WorkflowFormAction } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowEditActionFormBuilder } from '@twenty-modules/workflow/workflow-steps/workflow-actions/form-action/components/WorkflowEditActionFormBuilder';
import { Meta, StoryObj } from '@storybook/react';
import { userEvent } from '@storybook/testing-library';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { WorkflowStepActionDrawerDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepActionDrawerDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getWorkflowNodeIdMock } from '@twenty-ui/front/testing/mock-data/workflow';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';

const DEFAULT_ACTION = {
  id: getWorkflowNodeIdMock(),
  name: 'Form',
  type: 'FORM',
  valid: false,
  settings: {
    input: [
      {
        id: 'ed00b897-519f-44cd-8201-a6502a3a9dc8',
        name: 'company',
        type: FieldMetadataType.TEXT,
        label: 'Company',
        placeholder: 'Select a company',
        settings: {},
      },
      {
        id: 'ed00b897-519f-44cd-8201-a6502a3a9dc9',
        name: 'number',
        type: FieldMetadataType.NUMBER,
        label: 'Number',
        placeholder: '1000',
        settings: {},
      },
    ],
    outputSchema: {},
    errorHandlingOptions: {
      retryOnFailure: {
        value: false,
      },
      continueOnFailure: {
        value: false,
      },
    },
  },
} satisfies WorkflowFormAction;

const meta: Meta<typeof WorkflowEditActionFormBuilder> = {
  title: 'Refactor Modules/Workflow/Actions/Form/WorkflowEditActionFormBuilder',
  component: WorkflowEditActionFormBuilder,
  parameters: {
    msw: graphqlMocks,
  },
  args: {
    action: DEFAULT_ACTION,
  },
  decorators: [
    WorkflowStepActionDrawerDecorator,
    ComponentDecorator,
    RouterDecorator,
    I18nFrontDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof WorkflowEditActionFormBuilder>;

export const Default: Story = {
  args: {
    actionOptions: {
      onActionUpdate: () => console.log('fn'),
    },
  },
};

export const DisabledWithEmptyValues: Story = {
  args: {
    actionOptions: {
      readonly: true,
    },
  },
};
