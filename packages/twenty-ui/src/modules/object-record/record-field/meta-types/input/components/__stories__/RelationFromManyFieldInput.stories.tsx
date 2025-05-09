import { Meta, StoryObj } from '@storybook/react';
import { useEffect, useMemo } from 'react';
import { useSetRecoilState } from 'recoil';

import { currentWorkspaceMemberState } from '@twenty-modules/auth/states/currentWorkspaceMemberState';
import { currentWorkspaceState } from '@twenty-modules/auth/states/currentWorkspaceState';
import { RelationFromManyFieldInput } from '@twenty-modules/object-record/record-field/meta-types/input/components/RelationFromManyFieldInput';
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
import { useOpenFieldInputEditMode } from '@twenty-modules/object-record/record-field/hooks/useOpenFieldInputEditMode';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { MultipleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/multiple-record-picker/types/MultipleRecordPickerHotkeyScope';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@ui-collection-kit/twenty-shared/src/types';
import { RelationDefinitionType } from '@twenty-ui/front/generated-metadata/graphql';

const RelationWorkspaceSetterEffect = () => {
  const setCurrentWorkspace = useSetRecoilState(currentWorkspaceState);
  const setCurrentWorkspaceMember = useSetRecoilState(
    currentWorkspaceMemberState,
  );

  useEffect(() => {
    setCurrentWorkspace(mockCurrentWorkspace);
    setCurrentWorkspaceMember(mockedWorkspaceMemberData);
  }, [setCurrentWorkspace, setCurrentWorkspaceMember]);

  return <></>;
};

const RelationManyFieldInputWithContext = () => {
  const setHotKeyScope = useSetHotkeyScope();

  const fieldDefinition = useMemo(
    () => ({
      fieldMetadataId: 'relation',
      label: 'People',
      type: FieldMetadataType.RELATION,
      iconName: 'IconLink',
      metadata: {
        fieldName: 'people',
        relationType: RelationDefinitionType.ONE_TO_MANY,
        relationObjectMetadataNamePlural: 'companies',
        relationObjectMetadataNameSingular: CoreObjectNameSingular.Company,
        objectMetadataNameSingular: 'company',
        relationFieldMetadataId: '20202020-8c37-4163-ba06-1dada334ce3e',
      },
    }),
    [],
  );

  const setRecordStoreFieldValue = useSetRecoilState(
    recordStoreFamilySelector({
      fieldName: 'people',
      recordId: 'recordId',
    }),
  );

  const { openFieldInput } = useOpenFieldInputEditMode();

  useEffect(() => {
    setRecordStoreFieldValue([]);

    setHotKeyScope(MultipleRecordPickerHotkeyScope.MultipleRecordPicker);
    openFieldInput({
      fieldDefinition,
      recordId: 'recordId',
    });
  }, [
    fieldDefinition,
    openFieldInput,
    setHotKeyScope,
    setRecordStoreFieldValue,
  ]);

  return (
    <div>
      <RecordFieldComponentInstanceContext.Provider
        value={{
          instanceId: 'relation-from-many-field-record-id-people',
        }}
      >
        <FieldContext.Provider
          value={{
            fieldDefinition,
            recordId: 'recordId',
            isLabelIdentifier: false,
            isReadOnly: false,
          }}
        >
          <RelationWorkspaceSetterEffect />
          <RelationFromManyFieldInput />
        </FieldContext.Provider>
      </RecordFieldComponentInstanceContext.Provider>
      <div data-testid="data-field-input-click-outside-div" />
    </div>
  );
};
const meta: Meta = {
  title: 'Refactor UI/Data/Field/Input/RelationManyFieldInput',
  component: RelationManyFieldInputWithContext,
  args: {},
  decorators: [ObjectMetadataItemsDecorator, SnackBarDecorator],
  parameters: {
    clearMocks: true,
    msw: graphqlMocks,
  },
};

export default meta;

type Story = StoryObj<typeof RelationManyFieldInputWithContext>;

export const Default: Story = {
  decorators: [ComponentWithRecoilScopeDecorator],
};
