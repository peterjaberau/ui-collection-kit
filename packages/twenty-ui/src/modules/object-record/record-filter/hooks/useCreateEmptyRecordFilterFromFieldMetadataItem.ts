import { FieldMetadataItem } from '@twenty-modules/object-metadata/types/FieldMetadataItem';
import { getFilterTypeFromFieldType } from '@twenty-modules/object-metadata/utils/formatFieldMetadataItemsAsFilterDefinitions';
import { RecordFilter } from '@twenty-modules/object-record/record-filter/types/RecordFilter';
import { getDefaultSubFieldNameForCompositeFilterableFieldType } from '@twenty-modules/object-record/record-filter/utils/getDefaultSubFieldNameForCompositeFilterableFieldType';
import { getRecordFilterOperands } from '@twenty-modules/object-record/record-filter/utils/getRecordFilterOperands';
import { v4 } from 'uuid';

export const useCreateEmptyRecordFilterFromFieldMetadataItem = () => {
  const createEmptyRecordFilterFromFieldMetadataItem = (
    fieldMetadataItem: FieldMetadataItem,
  ) => {
    const filterType = getFilterTypeFromFieldType(fieldMetadataItem.type);

    const availableOperandsForFilter = getRecordFilterOperands({
      filterType,
    });

    const defaultOperand = availableOperandsForFilter[0];

    const defaultSubFieldName =
      getDefaultSubFieldNameForCompositeFilterableFieldType(filterType);

    const newRecordFilter: RecordFilter = {
      id: v4(),
      fieldMetadataId: fieldMetadataItem.id,
      operand: defaultOperand,
      displayValue: '',
      label: fieldMetadataItem.label,
      type: filterType,
      value: '',
      subFieldName: defaultSubFieldName,
    };

    return { newRecordFilter };
  };

  return {
    createEmptyRecordFilterFromFieldMetadataItem,
  };
};
