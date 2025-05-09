import { useContext } from 'react';
import { useRecoilState } from 'recoil';

import { useRecordFieldInput } from '@twenty-modules/object-record/record-field/hooks/useRecordFieldInput';
import { FieldDateValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isFieldDate } from '@twenty-modules/object-record/record-field/types/guards/isFieldDate';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

import { FieldContext } from '../../contexts/FieldContext';
import { assertFieldMetadata } from '../../types/guards/assertFieldMetadata';

export const useDateField = () => {
  const { recordId, fieldDefinition, clearable } = useContext(FieldContext);

  assertFieldMetadata(FieldMetadataType.DATE, isFieldDate, fieldDefinition);

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<string>(
    recordStoreFamilySelector({
      recordId,
      fieldName: fieldName,
    }),
  );

  const { setDraftValue } = useRecordFieldInput<FieldDateValue>();

  return {
    fieldDefinition,
    fieldValue,
    setDraftValue,
    setFieldValue,
    clearable,
  };
};
