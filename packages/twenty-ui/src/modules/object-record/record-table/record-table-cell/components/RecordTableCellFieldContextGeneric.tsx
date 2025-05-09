import { isLabelIdentifierField } from '@twenty-modules/object-metadata/utils/isLabelIdentifierField';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { useIsFieldValueReadOnly } from '@twenty-modules/object-record/record-field/hooks/useIsFieldValueReadOnly';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';
import { RecordUpdateContext } from '@twenty-modules/object-record/record-table/contexts/EntityUpdateMutationHookContext';
import { RecordTableCellContext } from '@twenty-modules/object-record/record-table/contexts/RecordTableCellContext';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useRecordTableRowContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableRowContext';
import { ReactNode, useContext } from 'react';

type RecordTableCellFieldContextGenericProps = {
  children: ReactNode;
};

export const RecordTableCellFieldContextGeneric = ({
  children,
}: RecordTableCellFieldContextGenericProps) => {
  const { recordId, isReadOnly: isTableRowReadOnly } =
    useRecordTableRowContextOrThrow();

  const { objectMetadataItem } = useRecordTableContextOrThrow();
  const { indexIdentifierUrl } = useRecordIndexContextOrThrow();
  const { columnDefinition } = useContext(RecordTableCellContext);

  const isFieldReadOnly = useIsFieldValueReadOnly({
    fieldDefinition: columnDefinition,
    isRecordReadOnly: isTableRowReadOnly ?? false,
  });

  const updateRecord = useContext(RecordUpdateContext);

  return (
    <FieldContext.Provider
      value={{
        recordId,
        fieldDefinition: columnDefinition,
        useUpdateRecord: () => [updateRecord, {}],
        labelIdentifierLink: indexIdentifierUrl(recordId),
        isLabelIdentifier: isLabelIdentifierField({
          fieldMetadataItem: {
            id: columnDefinition.fieldMetadataId,
            name: columnDefinition.metadata.fieldName,
          },
          objectMetadataItem,
        }),
        displayedMaxRows: 1,
        isReadOnly: isFieldReadOnly,
      }}
    >
      {children}
    </FieldContext.Provider>
  );
};
