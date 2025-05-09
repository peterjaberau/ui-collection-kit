import { useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { usePersistField } from '@twenty-modules/object-record/record-field/hooks/usePersistField';
import { useRecordFieldInput } from '@twenty-modules/object-record/record-field/hooks/useRecordFieldInput';
import { FieldJsonValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

import { usePrecomputedJsonDraftValue } from '@twenty-modules/object-record/record-field/meta-types/hooks/usePrecomputedJsonDraftValue';
import { FieldContext } from '../../contexts/FieldContext';
import { assertFieldMetadata } from '../../types/guards/assertFieldMetadata';
import { isFieldRawJson } from '../../types/guards/isFieldRawJson';

export const useJsonField = () => {
  const { recordId, fieldDefinition, maxWidth } = useContext(FieldContext);

  assertFieldMetadata(
    FieldMetadataType.RAW_JSON,
    isFieldRawJson,
    fieldDefinition,
  );

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldJsonValue>(
    recordStoreFamilySelector({
      recordId,
      fieldName: fieldName,
    }),
  );

  const persistField = usePersistField();

  const persistJsonField = (nextValue: string) => {
    if (!nextValue) persistField(null);

    try {
      persistField(JSON.parse(nextValue));
    } catch {
      // Do nothing
    }
  };

  const { setDraftValue, getDraftValueSelector } =
    useRecordFieldInput<FieldJsonValue>();

  const draftValue = useRecoilValue(getDraftValueSelector());

  const precomputedDraftValue = usePrecomputedJsonDraftValue({
    draftValue,
  });

  return {
    draftValue,
    precomputedDraftValue,
    setDraftValue,
    maxWidth,
    fieldDefinition,
    fieldValue,
    setFieldValue,
    persistJsonField,
  };
};
