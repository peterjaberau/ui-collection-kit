import { RecordBoardContext } from '@twenty-modules/object-record/record-board/contexts/RecordBoardContext';
import { RecordBoardCardBodyContainer } from '@twenty-modules/object-record/record-board/record-board-card/components/RecordBoardCardBodyContainer';
import { StopPropagationContainer } from '@twenty-modules/object-record/record-board/record-board-card/components/StopPropagationContainer';
import { RecordBoardCardContext } from '@twenty-modules/object-record/record-board/record-board-card/contexts/RecordBoardCardContext';
import { RecordBoardFieldDefinition } from '@twenty-modules/object-record/record-board/types/RecordBoardFieldDefinition';
import {
  FieldContext,
  RecordUpdateHook,
  RecordUpdateHookParams,
} from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { getFieldButtonIcon } from '@twenty-modules/object-record/record-field/utils/getFieldButtonIcon';
import { isFieldValueReadOnly } from '@twenty-modules/object-record/record-field/utils/isFieldValueReadOnly';
import { RecordInlineCell } from '@twenty-modules/object-record/record-inline-cell/components/RecordInlineCell';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import { useContext } from 'react';

export const RecordBoardCardBody = ({
  fieldDefinitions,
}: {
  fieldDefinitions: RecordBoardFieldDefinition<FieldMetadata>[];
}) => {
  const { recordId, isRecordReadOnly } = useContext(RecordBoardCardContext);

  const { updateOneRecord } = useContext(RecordBoardContext);

  const useUpdateOneRecordHook: RecordUpdateHook = () => {
    const updateEntity = ({ variables }: RecordUpdateHookParams) => {
      updateOneRecord?.({
        idToUpdate: variables.where.id as string,
        updateOneRecordInput: variables.updateOneRecordInput,
      });
    };

    return [updateEntity, { loading: false }];
  };

  return (
    <RecordBoardCardBodyContainer>
      {fieldDefinitions.map((fieldDefinition) => (
        <StopPropagationContainer key={fieldDefinition.fieldMetadataId}>
          <FieldContext.Provider
            value={{
              recordId,
              maxWidth: 156,
              isLabelIdentifier: false,
              isReadOnly: isFieldValueReadOnly({
                objectNameSingular:
                  fieldDefinition.metadata.objectMetadataNameSingular,
                fieldName: fieldDefinition.metadata.fieldName,
                fieldType: fieldDefinition.type,
                isRecordReadOnly,
              }),
              fieldDefinition: {
                disableTooltip: false,
                fieldMetadataId: fieldDefinition.fieldMetadataId,
                label: fieldDefinition.label,
                iconName: fieldDefinition.iconName,
                type: fieldDefinition.type,
                metadata: fieldDefinition.metadata,
                defaultValue: fieldDefinition.defaultValue,
                editButtonIcon: getFieldButtonIcon({
                  metadata: fieldDefinition.metadata,
                  type: fieldDefinition.type,
                }),
              },
              useUpdateRecord: useUpdateOneRecordHook,
              isDisplayModeFixHeight: true,
            }}
          >
            <RecordFieldComponentInstanceContext.Provider
              value={{
                instanceId: getRecordFieldInputId(
                  recordId,
                  fieldDefinition.metadata.fieldName,
                  'record-board-card',
                ),
              }}
            >
              <RecordInlineCell />
            </RecordFieldComponentInstanceContext.Provider>
          </FieldContext.Provider>
        </StopPropagationContainer>
      ))}
    </RecordBoardCardBodyContainer>
  );
};
