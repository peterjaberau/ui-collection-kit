import { WorkflowFindRecordsAction } from '@twenty-modules/workflow/types/Workflow';
import { WorkflowEditActionFindRecords } from '@twenty-modules/workflow/workflow-steps/workflow-actions/components/WorkflowEditActionFindRecords';
import { Meta, StoryObj } from '@storybook/react';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { WorkflowStepActionDrawerDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepActionDrawerDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { WorkspaceDecorator } from '@twenty-ui/front/testing/decorators/WorkspaceDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { getWorkflowNodeIdMock } from '@twenty-ui/front/testing/mock-data/workflow';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';

const DEFAULT_ACTION = {
  id: getWorkflowNodeIdMock(),
  name: 'Search Records',
  type: 'FIND_RECORDS',
  valid: false,
  settings: {
    input: {
      objectName: 'person',
      limit: 1,
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
} satisfies WorkflowFindRecordsAction;

const meta: Meta<typeof WorkflowEditActionFindRecords> = {
  title: 'Modules/Workflow/WorkflowEditActionFindRecords',
  component: WorkflowEditActionFindRecords,
  parameters: {
    msw: graphqlMocks,
  },
  args: {
    action: DEFAULT_ACTION,
  },
  decorators: [
    WorkflowStepActionDrawerDecorator,
    WorkflowStepDecorator,
    ComponentDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
    RouterDecorator,
    WorkspaceDecorator,
    I18nFrontDecorator,
  ],
};

export default meta;

type Story = StoryObj<typeof WorkflowEditActionFindRecords>;

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
