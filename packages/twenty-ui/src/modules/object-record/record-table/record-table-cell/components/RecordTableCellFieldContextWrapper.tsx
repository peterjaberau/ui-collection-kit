import { isLabelIdentifierField } from '@twenty-modules/object-metadata/utils/isLabelIdentifierField';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { RecordTableCellContext } from '@twenty-modules/object-record/record-table/contexts/RecordTableCellContext';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useRecordTableRowContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowContext';
import { RecordTableCellFieldContextGeneric } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellFieldContextGeneric';
import { RecordTableCellFieldContextLabelIdentifier } from '@twenty-modules/object-record/record-table/record-table-cell/components/RecordTableCellFieldContextLabelIdentifier';
import { getRecordFieldInputId } from '@twenty-modules/object-record/utils/getRecordFieldInputId';
import { ReactNode, useContext } from 'react';
import { isUndefinedOrNull } from '@twenty-ui/front/utils/isUndefinedOrNull';

type RecordTableCellFieldContextWrapperProps = {
  children: ReactNode;
};

export const RecordTableCellFieldContextWrapper = ({
  children,
}: RecordTableCellFieldContextWrapperProps) => {
  const { columnDefinition } = useContext(RecordTableCellContext);
  const { recordId } = useRecordTableRowContextOrThrow();
  const { objectMetadataItem } = useRecordTableContextOrThrow();

  if (isUndefinedOrNull(columnDefinition)) {
    return null;
  }

  const instanceId = getRecordFieldInputId(
    recordId,
    columnDefinition.metadata.fieldName,
    'record-table-cell',
  );

  const isLabelIdentifier = isLabelIdentifierField({
    fieldMetadataItem: {
      id: columnDefinition.fieldMetadataId,
      name: columnDefinition.metadata.fieldName,
    },
    objectMetadataItem,
  });

  return (
    <RecordFieldComponentInstanceContext.Provider value={{ instanceId }}>
      {isLabelIdentifier ? (
        <RecordTableCellFieldContextLabelIdentifier key={instanceId}>
          {children}
        </RecordTableCellFieldContextLabelIdentifier>
      ) : (
        <RecordTableCellFieldContextGeneric key={instanceId}>
          {children}
        </RecordTableCellFieldContextGeneric>
      )}
    </RecordFieldComponentInstanceContext.Provider>
  );
};
