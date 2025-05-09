import { SORTABLE_FIELD_METADATA_TYPES } from '@twenty-modules/object-metadata/constants/SortableFieldMetadataTypes';
import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';

export const filterSortableFieldMetadataItems = (field: FieldMetadataItem) => {
  const isSystemField = field.isSystem;
  const isFieldActive = field.isActive;

  const isFieldTypeSortable = SORTABLE_FIELD_METADATA_TYPES.includes(
    field.type,
  );

  return !isSystemField && isFieldActive && isFieldTypeSortable;
};
