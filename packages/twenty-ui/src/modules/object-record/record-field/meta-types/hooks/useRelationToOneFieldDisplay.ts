import { isNonEmptyString } from '@sniptt/guards';
import { useContext } from 'react';

import { PreComputedChipGeneratorsContext } from '@twenty-modules/object-metadata/contexts/PreComputedChipGeneratorsContext';
import { useRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';
import { FIELD_EDIT_BUTTON_WIDTH } from '@twenty-modules/ui/field/display/constants/FieldEditButtonWidth';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

import { generateDefaultRecordChipData } from '@twenty-modules/object-metadata/utils/generateDefaultRecordChipData';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useRelationToOneFieldDisplay = () => {
  const { recordId, fieldDefinition, maxWidth } = useContext(FieldContext);

  const { chipGeneratorPerObjectPerField } = useContext(
    PreComputedChipGeneratorsContext,
  );

  if (!isDefined(chipGeneratorPerObjectPerField)) {
    throw new Error('Chip generator per object per field is not defined');
  }

  assertFieldMetadata(
    FieldMetadataType.RELATION,
    isFieldRelation,
    fieldDefinition,
  );

  const button = fieldDefinition.editButtonIcon;

  const fieldName = fieldDefinition.metadata.fieldName;

  const fieldValue = useRecordFieldValue<ObjectRecord | undefined>(
    recordId,
    fieldName,
  );

  const maxWidthForField =
    isDefined(button) && isDefined(maxWidth)
      ? maxWidth - FIELD_EDIT_BUTTON_WIDTH
      : maxWidth;

  if (
    !isDefined(fieldDefinition.metadata.objectMetadataNameSingular) ||
    !isNonEmptyString(fieldDefinition.metadata.objectMetadataNameSingular)
  ) {
    throw new Error('Object metadata name singular is not a non-empty string');
  }

  const fieldChipGenerator =
    chipGeneratorPerObjectPerField[
      fieldDefinition.metadata.objectMetadataNameSingular
    ]?.[fieldDefinition.metadata.fieldName];
  const generateRecordChipData = isDefined(fieldChipGenerator)
    ? fieldChipGenerator
    : (record: ObjectRecord) =>
        generateDefaultRecordChipData({
          record,
          objectNameSingular:
            fieldDefinition.metadata.relationObjectMetadataNameSingular,
        });

  return {
    fieldDefinition,
    fieldValue,
    maxWidth: maxWidthForField,
    recordId,
    generateRecordChipData,
  };
};
