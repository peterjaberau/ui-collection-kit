import { useContext } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useGetButtonIcon } from '@twenty-modules/object-record/record-field/hooks/useGetButtonIcon';
import { useRecordFieldInput } from '@twenty-modules/object-record/record-field/hooks/useRecordFieldInput';
import { FieldRelationValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const useRelationField = <T extends ObjectRecord | ObjectRecord[]>() => {
  const { recordId, fieldDefinition, maxWidth } = useContext(FieldContext);
  const button = useGetButtonIcon();

  assertFieldMetadata(
    FieldMetadataType.RELATION,
    isFieldRelation,
    fieldDefinition,
  );

  const fieldName = fieldDefinition.metadata.fieldName;

  const [fieldValue, setFieldValue] = useRecoilState<FieldRelationValue<T>>(
    recordStoreFamilySelector({ recordId, fieldName }),
  );

  const { getDraftValueSelector } =
    useRecordFieldInput<FieldRelationValue<T>>();
  const draftValue = useRecoilValue(getDraftValueSelector());

  const initialSearchValue = draftValue;

  return {
    fieldDefinition,
    fieldValue,
    initialSearchValue,
    setFieldValue,
    maxWidth: button && maxWidth ? maxWidth - 28 : maxWidth,
    recordId,
  };
};
