import { ReactNode } from 'react';

import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';

import { RecordTableComponentInstanceEffect } from '@twenty-modules/object-record/record-table/components/RecordTableComponentInstanceEffect';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';

type RecordTableComponentInstanceProps = {
  children: ReactNode;
  recordTableId: string;
  onColumnsChange: (columns: ColumnDefinition<FieldMetadata>[]) => void;
};

export const RecordTableComponentInstance = ({
  children,
  recordTableId,
  onColumnsChange,
}: RecordTableComponentInstanceProps) => {
  return (
    <RecordTableComponentInstanceContext.Provider
      value={{
        instanceId: recordTableId,
        onColumnsChange,
      }}
    >
      <RecordTableComponentInstanceEffect onColumnsChange={onColumnsChange} />
      {children}
    </RecordTableComponentInstanceContext.Provider>
  );
};
