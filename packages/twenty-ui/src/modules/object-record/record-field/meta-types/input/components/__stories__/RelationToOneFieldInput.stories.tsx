import { Decorator, Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, waitFor, within } from '@storybook/test';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { useSetHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/useSetHotkeyScope';
import { ComponentWithRecoilScopeDecorator } from '@twenty-ui/front/testing/decorators/ComponentWithRecoilScopeDecorator';
import { ObjectMetadataItemsDecorator } from '@twenty-ui/front/testing/decorators/ObjectMetadataItemsDecorator';
import { SnackBarDecorator } from '@twenty-ui/front/testing/decorators/SnackBarDecorator';
import { graphqlMocks } from '@twenty-ui/front/testing/graphqlMocks';
import {
  mockCurrentWorkspace,
  mockedWorkspaceMemberData,
} from '@twenty-ui/front/testing/mock-data/users';

import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { recordFieldInputLayoutDirectionLoadingComponentState } from '@twenty-modules/object-record/record-field/states/recordFieldInputLayoutDirectionLoadingComponentState';
import { SingleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerHotkeyScope';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { getCanvasElementForDropdownTesting } from '@twenty-ui/testing';
import {
  RelationToOneFieldInput,
  RelationToOneFieldInputProps,
} from '../RelationToOneFieldInput';

const RelationWorkspaceSetterEffect = () => {
  const setCurrentWorkspace = useSetRecoilState(currentWorkspaceState);
  const setCurrentWorkspaceMember = useSetRecoilState(
    currentWorkspaceMemberState,
  );
  const setRecordFieldInputLayoutDirectionLoading =
    useSetRecoilComponentStateV2(
      recordFieldInputLayoutDirectionLoadingComponentState,
      'relation-to-one-field-input-123-Relation',
    );

  useEffect(() => {
    setCurrentWorkspace(mockCurrentWorkspace);
    setCurrentWorkspaceMember(mockedWorkspaceMemberData);
    setRecordFieldInputLayoutDirectionLoading(false);
  }, [
    setCurrentWorkspace,
    setCurrentWorkspaceMember,
    setRecordFieldInputLayoutDirectionLoading,
  ]);

  return <></>;
};

type RelationToOneFieldInputWithContextProps = RelationToOneFieldInputProps & {
  value: number;
  recordId: string;
};

const RelationToOneFieldInputWithContext = ({
  recordId,
  onSubmit,
  onCancel,
}: RelationToOneFieldInputWithContextProps) => {
  const setHotKeyScope = useSetHotkeyScope();

  useEffect(() => {
    setHotKeyScope(SingleRecordPickerHotkeyScope.SingleRecordPicker);
  }, [setHotKeyScope]);

  return (
    <div>
      <FieldContext.Provider
        value={{
          fieldDefinition: {
            fieldMetadataId: 'relation',
            label: 'Relation',
            type: FieldMetadataType.RELATION,
            iconName: 'IconLink',
            metadata: {
              fieldName: 'Relation',
              relationObjectMetadataNamePlural: 'companies',
              relationObjectMetadataNameSingular:
                CoreObjectNameSingular.Company,
              objectMetadataNameSingular: 'person',
              relationFieldMetadataId: '20202020-8c37-4163-ba06-1dada334ce3e',
            },
          },
          recordId: recordId,
          isLabelIdentifier: false,
          isReadOnly: false,
        }}
      >
        <RecordFieldComponentInstanceContext.Provider
          value={{
            instanceId: 'relation-to-one-field-input-123-Relation',
          }}
        >
          <RelationWorkspaceSetterEffect />
          <RelationToOneFieldInput onSubmit={onSubmit} onCancel={onCancel} />
        </RecordFieldComponentInstanceContext.Provider>
      </FieldContext.Provider>
      <div data-testid="data-field-input-click-outside-div" />
    </div>
  );
};

const submitJestFn = () => console.log('fn');
const cancelJestFn = () => console.log('fn');

const clearMocksDecorator: Decorator = (Story, context) => {
  if (context.parameters.clearMocks === true) {
  }
  return <Story />;
};

const meta: Meta = {
  title: 'UI/Data/Field/Input/RelationToOneFieldInput',
  component: RelationToOneFieldInputWithContext,
  args: {
    useEditButton: true,
  },
  argTypes: {
    onSubmit: { control: false },
    onCancel: { control: false },
  },
  decorators: [
    clearMocksDecorator,
    ObjectMetadataItemsDecorator,
    SnackBarDecorator,
  ],
  parameters: {
    clearMocks: true,
    msw: graphqlMocks,
  },
};

export default meta;

type Story = StoryObj<typeof RelationToOneFieldInputWithContext>;

export const Default: Story = {
  decorators: [ComponentWithRecoilScopeDecorator],
};

export const Submit: Story = {
  decorators: [ComponentWithRecoilScopeDecorator],

};

export const Cancel: Story = {
  decorators: [ComponentWithRecoilScopeDecorator],

};
