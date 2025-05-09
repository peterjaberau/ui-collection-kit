import { useContext } from 'react';

import { useRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';

import { FieldRichTextV2Value } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldRichTextV2 } from '@twenty-modules/object-record/record-field/types/guards/isFieldRichTextV2';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';
import { FieldContext } from '../../contexts/FieldContext';

export const useRichTextV2FieldDisplay = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata(
    FieldMetadataType.RICH_TEXT_V2,
    isFieldRichTextV2,
    fieldDefinition,
  );

  const fieldName = fieldDefinition.metadata.fieldName;

  const fieldValue = useRecordFieldValue<FieldRichTextV2Value | undefined>(
    recordId,
    fieldName,
  );

  return {
    fieldDefinition,
    fieldValue,
  };
};
