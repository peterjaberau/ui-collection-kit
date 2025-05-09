import { useContext } from 'react';
import { useRecoilCallback } from 'recoil';

import { useAttachRelatedRecordFromRecord } from '@twenty-modules/object-record/hooks/useAttachRelatedRecordFromRecord';
import { useDetachRelatedRecordFromRecord } from '@twenty-modules/object-record/hooks/useDetachRelatedRecordFromRecord';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { assertFieldMetadata } from '@twenty-modules/object-record/record-field/types/guards/assertFieldMetadata';
import { isFieldRelation } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelation';
import { RecordPickerPickableMorphItem } from '@twenty-modules/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

export const useUpdateRelationFromManyFieldInput = () => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  assertFieldMetadata(
    FieldMetadataType.RELATION,
    isFieldRelation,
    fieldDefinition,
  );

  if (!fieldDefinition.metadata.objectMetadataNameSingular) {
    throw new Error('ObjectMetadataNameSingular is required');
  }

  const { updateOneRecordAndDetachRelations } =
    useDetachRelatedRecordFromRecord({
      recordObjectNameSingular:
        fieldDefinition.metadata.objectMetadataNameSingular,
      fieldNameOnRecordObject: fieldDefinition.metadata.fieldName,
    });

  const { updateOneRecordAndAttachRelations } =
    useAttachRelatedRecordFromRecord({
      recordObjectNameSingular:
        fieldDefinition.metadata.objectMetadataNameSingular,
      fieldNameOnRecordObject: fieldDefinition.metadata.fieldName,
    });

  const updateRelation = useRecoilCallback(
    () => async (morphItem: RecordPickerPickableMorphItem) => {
      if (morphItem.isSelected) {
        await updateOneRecordAndAttachRelations({
          recordId,
          relatedRecordId: morphItem.recordId,
        });
      } else {
        await updateOneRecordAndDetachRelations({
          recordId,
          relatedRecordId: morphItem.recordId,
        });
      }
    },
    [
      recordId,
      updateOneRecordAndAttachRelations,
      updateOneRecordAndDetachRelations,
    ],
  );

  return { updateRelation };
};
