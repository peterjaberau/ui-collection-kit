import { useContext } from 'react';

import { FieldPhonesValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useRecordFieldValue } from '@twenty-modules/object-record/record-store/contexts/RecordFieldValueSelectorContext';

import { FieldContext } from '../../contexts/FieldContext';

export const usePhonesFieldDisplay = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  const fieldName = fieldDefinition.metadata.fieldName;

  const fieldValue = useRecordFieldValue<FieldPhonesValue | undefined>(
    recordId,
    fieldName,
  );

  return {
    fieldDefinition,
    fieldValue,
  };
};
