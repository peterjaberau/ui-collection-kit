import { WorkflowDeleteRecordAction } from '@twenty-modules/workflow/types/Workflow';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentDecorator, RouterDecorator } from '@twenty-ui/testing';
import { I18nFrontDecorator } from '@twenty-ui/front/testing/decorators/I18nFrontDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { WorkflowStepActionDrawerDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepActionDrawerDecorator';
import { WorkflowStepDecorator } from '@twenty-ui/front/testing/decorators/WorkflowStepDecorator';
import { WorkspaceDecorator } from '@twenty-ui/front/testing/decorators/WorkspaceDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import { allMockPersonRecords } from '@twenty-ui/front/testing/mock-data/people';
import { getWorkflowNodeIdMock } from '@twenty-ui/front/testing/mock-data/workflow';
import { WorkflowEditActionDeleteRecord } from '../WorkflowEditActionDeleteRecord';

const DEFAULT_ACTION = {
  id: getWorkflowNodeIdMock(),
  name: 'Delete Record',
  type: 'DELETE_RECORD',
  valid: false,
  settings: {
    input: {
      objectName: 'person',
      objectRecordId: '',
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
} satisfies WorkflowDeleteRecordAction;

const meta: Meta<typeof WorkflowEditActionDeleteRecord> = {
  title: 'Refactor Modules/Workflow/WorkflowEditActionDeleteRecord',
  component: WorkflowEditActionDeleteRecord,
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

type Story = StoryObj<typeof WorkflowEditActionDeleteRecord>;

export const Default: Story = {
  args: {
    actionOptions: {} as any,
  },
};

export const DisabledWithEmptyValues: Story = {
  args: {
    actionOptions: {
      readonly: true,
    },
  },
};

const peopleMock = allMockPersonRecords[0];

export const DisabledWithDefaultStaticValues: Story = {
  args: {
    action: {
      ...DEFAULT_ACTION,
      settings: {
        ...DEFAULT_ACTION.settings,
        input: {
          ...DEFAULT_ACTION.settings.input,
          objectRecordId: peopleMock.id,
        },
      },
    },
    actionOptions: {
      readonly: true,
    },
  },
};

export const DisabledWithDefaultVariableValues: Story = {
  args: {
    action: {
      ...DEFAULT_ACTION,
      settings: {
        ...DEFAULT_ACTION.settings,
        input: {
          ...DEFAULT_ACTION.settings.input,
          objectRecordId: '{{trigger.recordId}}',
        },
      },
    },
    actionOptions: {
      readonly: true,
    },
  },
};
