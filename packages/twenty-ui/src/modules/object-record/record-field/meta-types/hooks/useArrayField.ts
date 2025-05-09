import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { usePersistField } from '@twenty-modules/object-record/record-field/hooks/usePersistField';
import { FieldArrayValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldArray } from '@twenty-modules/object-record/record-field/types/guards/isFieldArray';
import { arraySchema } from '@twenty-modules/object-record/record-field/types/guards/isFieldArrayValue';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { useContext } from 'react';
import { useRecoilState } from 'recoil';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export const useArrayField = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata(FieldMetadataType.ARRAY, isFieldArray, fieldDefinition);

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldArrayValue>(
    recordStoreFamilySelector({
      recordId,
      fieldName,
    }),
  );

  const persistField = usePersistField();

  const persistArrayField = (nextValue: string[]) => {
    if (!nextValue) persistField(null);

    try {
      persistField(arraySchema.parse(nextValue));
    } catch {
      return;
    }
  };

  return {
    fieldValue,
    fieldDefinition,
    setFieldValue,
    persistArrayField,
  };
};
