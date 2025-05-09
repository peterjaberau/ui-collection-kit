import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { COMPOSITE_FIELD_IMPORT_LABELS } from '@twenty-modules/object-record/spreadsheet-import/constants/CompositeFieldImportLabels';

export const getSubFieldOptionKey = (
  fieldMetadataItem: FieldMetadataItem,
  subFieldName: string,
) => {
  const subFieldNameLabelKey = `${subFieldName}Label`;

  const subFieldLabel = (
    (COMPOSITE_FIELD_IMPORT_LABELS as any)[fieldMetadataItem.type] as any
  )[subFieldNameLabelKey];

  const subFieldKey = `${subFieldLabel} (${fieldMetadataItem.name})`;

  return subFieldKey;
};
