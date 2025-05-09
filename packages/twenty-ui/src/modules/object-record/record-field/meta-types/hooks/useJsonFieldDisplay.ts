import { useContext } from 'react';

import { FieldJsonValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';

import { useFormattedJsonFieldValue } from '@twenty-modules/object-record/record-field/meta-types/hooks/useFormattedJsonFieldValue';
import { FieldContext } from '../../contexts/FieldContext';

export const useJsonFieldDisplay = () => {
  const { recordId, fieldDefinition, maxWidth } = useContext(FieldContext);

  const fieldName = fieldDefinition.metadata.fieldName;

  const fieldValue = useRecordFieldValue<FieldJsonValue | undefined>(
    recordId,
    fieldName,
  );

  const formattedFieldValue = useFormattedJsonFieldValue({
    fieldValue,
  });

  return {
    maxWidth,
    fieldDefinition,
    fieldValue: formattedFieldValue,
  };
};
