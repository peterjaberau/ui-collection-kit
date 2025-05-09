import { useEffect } from 'react';

import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useRecordTable } from '@twenty-modules/object-record/record-table/hooks/useRecordTable';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';

type RecordTableComponentInstanceEffectProps = {
  onColumnsChange: (columns: ColumnDefinition<FieldMetadata>[]) => void;
  onEntityCountChange?: (count: number) => void | Promise<void>;
};

export const RecordTableComponentInstanceEffect = ({
  onColumnsChange,
}: RecordTableComponentInstanceEffectProps) => {
  const { setOnColumnsChange } = useRecordTable();

  useEffect(() => {
    setOnColumnsChange(() => onColumnsChange);
  }, [onColumnsChange, setOnColumnsChange]);

  return <></>;
};
