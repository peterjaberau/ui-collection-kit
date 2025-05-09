import { useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { usePersistField } from '@twenty-modules/object-record/record-field/hooks/usePersistField';
import { useRecordFieldInput } from '@twenty-modules/object-record/record-field/hooks/useRecordFieldInput';
import { FieldMultiSelectValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldMultiSelect } from '@twenty-modules/object-record/record-field/types/guards/isFieldMultiSelect';
import { isFieldMultiSelectValue } from '@twenty-modules/object-record/record-field/types/guards/isFieldMultiSelectValue';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@twenty-ui/front/generated/graphql';

export const useMultiSelectField = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata(
    FieldMetadataType.MULTI_SELECT,
    isFieldMultiSelect,
    fieldDefinition,
  );

  const { fieldName } = fieldDefinition.metadata;

  const [fieldValues, setFieldValue] = useRecoilState<FieldMultiSelectValue>(
    recordStoreFamilySelector({
      recordId,
      fieldName: fieldName,
    }),
  );

  const fieldMultiSelectValues = isFieldMultiSelectValue(fieldValues)
    ? fieldValues
    : null;
  const persistField = usePersistField();

  const { setDraftValue, getDraftValueSelector } =
    useRecordFieldInput<FieldMultiSelectValue>();
  const draftValue = useRecoilValue(getDraftValueSelector());

  return {
    fieldDefinition,
    persistField,
    fieldValues: fieldMultiSelectValues,
    draftValue,
    setDraftValue,
    setFieldValue,
  };
};
