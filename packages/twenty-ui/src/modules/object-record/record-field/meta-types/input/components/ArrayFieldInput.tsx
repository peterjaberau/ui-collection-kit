import { useArrayField } from '@twenty-modules/object-record/record-field/meta-types/hooks/useArrayField';
import { ArrayFieldMenuItem } from '@twenty-modules/object-record/record-field/meta-types/input/components/ArrayFieldMenuItem';
import { MultiItemFieldInput } from '@twenty-modules/object-record/record-field/meta-types/input/components/MultiItemFieldInput';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { useMemo } from 'react';
import { FieldMetadataType } from '@twenty-ui/front/generated-metadata/graphql';

type ArrayFieldInputProps = {
  onCancel?: () => void;
  onClickOutside?: (event: MouseEvent | TouchEvent) => void;
};

export const ArrayFieldInput = ({
  onCancel,
  onClickOutside,
}: ArrayFieldInputProps) => {
  const { persistArrayField, fieldValue, fieldDefinition } = useArrayField();

  const arrayItems = useMemo<Array<string>>(
    () => (Array.isArray(fieldValue) ? fieldValue : []),
    [fieldValue],
  );

  return (
    <MultiItemFieldInput
      hotkeyScope={DEFAULT_CELL_SCOPE.scope}
      newItemLabel="Add Item"
      items={arrayItems}
      onPersist={persistArrayField}
      onCancel={onCancel}
      onClickOutside={(persist, event) => {
        onClickOutside?.(event);
        persist();
      }}
      placeholder="Enter value"
      fieldMetadataType={FieldMetadataType.ARRAY}
      renderItem={({ value, index, handleEdit, handleDelete }) => (
        <ArrayFieldMenuItem
          key={index}
          dropdownId={`array-field-input-${fieldDefinition.metadata.fieldName}-${index}`}
          value={value}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    ></MultiItemFieldInput>
  );
};
