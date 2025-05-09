import { Meta, StoryObj } from '@storybook/react';
import { fn, userEvent, within } from '@storybook/test';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { WorkflowStepActionDrawerDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepActionDrawerDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { WorkspaceDecorator } from '@twenty-ui/front/testing/decorators/WorkspaceDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getWorkflowNodeIdMock } from '@twenty-ui/front/testing/mock-data/workflow';
import { WorkflowEditActionCreateRecord } from '../WorkflowEditActionCreateRecord';
import { ComponentDecorator } from '@twenty-ui/testing';

const meta: Meta<typeof WorkflowEditActionCreateRecord> = {
  title: 'Modules/Workflow/WorkflowEditActionCreateRecord',
  component: WorkflowEditActionCreateRecord,
  parameters: {
    msw: graphqlMocks,
  },
  args: {
    action: {
      id: getWorkflowNodeIdMock(),
      name: 'Create Record',
      type: 'CREATE_RECORD',
      valid: false,
      settings: {
        input: {
          objectName: 'person',
          objectRecord: {},
        },
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
    },
  },
  decorators: [
    WorkflowStepActionDrawerDecorator,
    WorkflowStepDecorator,
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    WorkspaceDecorator,
    I18nFrontDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof WorkflowEditActionCreateRecord>;

export const Default: Story = {
  args: {
    actionOptions: {
      onActionUpdate: () => console.log('fn'),
    },
  },
};

export const Disabled: Story = {
  args: {
    actionOptions: {
      readonly: true,
    },
  },
};
