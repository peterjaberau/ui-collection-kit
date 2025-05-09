import { useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { usePersistField } from '@twenty-modules/object-record/record-field/hooks/usePersistField';
import { useRecordFieldInput } from '@twenty-modules/object-record/record-field/hooks/useRecordFieldInput';
import { FieldLinksValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isFieldLinks } from '@twenty-modules/object-record/record-field/types/guards/isFieldLinks';
import { linksSchema } from '@twenty-modules/object-record/record-field/types/guards/isFieldLinksValue';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

import { FieldContext } from '../../contexts/FieldContext';
import { assertFieldMetadata } from '../../types/guards/assertFieldMetadata';

export const useLinksField = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata(FieldMetadataType.LINKS, isFieldLinks, fieldDefinition);

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldLinksValue>(
    recordStoreFamilySelector({
      recordId,
      fieldName: fieldName,
    }),
  );

  const { setDraftValue, getDraftValueSelector } =
    useRecordFieldInput<FieldLinksValue>();

  const draftValue = useRecoilValue(getDraftValueSelector());

  const persistField = usePersistField();

  const persistLinksField = (nextValue: FieldLinksValue) => {
    try {
      persistField(linksSchema.parse(nextValue));
    } catch {
      return;
    }
  };

  return {
    fieldDefinition,
    fieldValue,
    draftValue,
    setDraftValue,
    setFieldValue,
    persistLinksField,
  };
};
