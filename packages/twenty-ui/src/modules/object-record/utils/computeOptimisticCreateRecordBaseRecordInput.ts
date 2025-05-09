import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { hasObjectMetadataItemFieldCreatedBy } from '@twenty-modules/object-metadata/utils/hasObjectMetadataItemFieldCreatedBy';
import { hasObjectMetadataItemPositionField } from '@twenty-modules/object-metadata/utils/hasObjectMetadataItemPositionField';
import { FieldActorForInputValue } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const computeOptimisticCreateRecordBaseRecordInput = (
  objectMetadataItem: ObjectMetadataItem,
) => {
  const baseRecordInput: Partial<ObjectRecord> = {};

  if (hasObjectMetadataItemFieldCreatedBy(objectMetadataItem)) {
    baseRecordInput.createdBy = {
      source: 'MANUAL',
      context: {},
    } satisfies FieldActorForInputValue;
  }

  if (hasObjectMetadataItemPositionField(objectMetadataItem)) {
    baseRecordInput.position = Number.NEGATIVE_INFINITY;
  }

  return baseRecordInput;
};
