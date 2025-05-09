import styled from '@emotion/styled';
import { useRecoilCallback } from 'recoil';

import { useDeleteOneRecord } from '@twenty-modules/object-record/hooks/useDeleteOneRecord';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { RecordTable } from '@twenty-modules/object-record/record-table/components/RecordTable';
import { EntityDeleteContext } from '@twenty-modules/object-record/record-table/contexts/EntityDeleteHookContext';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { ScrollWrapper } from '@twenty-modules/ui/utilities/scroll/components/ScrollWrapper';
import { useSaveCurrentViewFields } from '@twenty-modules/views/hooks/useSaveCurrentViewFields';
import { mapColumnDefinitionsToViewFields } from '@twenty-modules/views/utils/mapColumnDefinitionToViewField';

import { RecordTableComponentInstance } from '@twenty-modules/object-record/record-table/components/RecordTableComponentInstance';
import { RecordTableContextProvider } from '@twenty-modules/object-record/record-table/components/RecordTableContextProvider';
import { TableHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableHotkeyScope';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { RecordUpdateContext } from '../contexts/EntityUpdateMutationHookContext';
import { useRecordTable } from '../hooks/useRecordTable';

const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
`;

type RecordTableWithWrappersProps = {
  objectNameSingular: string;
  recordTableId: string;
  viewBarId: string;
  updateRecordMutation: (params: any) => void;
};

export const RecordTableWithWrappers = ({
  updateRecordMutation,
  objectNameSingular,
  recordTableId,
  viewBarId,
}: RecordTableWithWrappersProps) => {
  const { selectAllRows, setHasUserSelectedAllRows } = useRecordTable({
    recordTableId,
  });

  const handleSelectAllRows = () => {
    setHasUserSelectedAllRows(true);
    selectAllRows();
  };

  useScopedHotkeys(
    'ctrl+a,meta+a',
    handleSelectAllRows,
    TableHotkeyScope.Table,
    [],
    {
      enableOnFormTags: false,
    },
  );

  const { saveViewFields } = useSaveCurrentViewFields();

  const { deleteOneRecord } = useDeleteOneRecord({ objectNameSingular });

  const handleColumnsChange = useRecoilCallback(
    () => (columns) => {
      saveViewFields(
        mapColumnDefinitionsToViewFields(
          columns as ColumnDefinition<FieldMetadata>[],
        ),
      );
    },
    [saveViewFields],
  );

  return (
    <RecordTableComponentInstance
      recordTableId={recordTableId}
      onColumnsChange={handleColumnsChange}
    >
      <RecordTableContextProvider
        recordTableId={recordTableId}
        viewBarId={viewBarId}
        objectNameSingular={objectNameSingular}
      >
        <EntityDeleteContext.Provider value={deleteOneRecord}>
          <ScrollWrapper
            componentInstanceId={`record-table-scroll-${recordTableId}`}
          >
            <RecordUpdateContext.Provider value={updateRecordMutation}>
              <StyledTableContainer>
                <RecordTable />
              </StyledTableContainer>
            </RecordUpdateContext.Provider>
          </ScrollWrapper>
        </EntityDeleteContext.Provider>
      </RecordTableContextProvider>
    </RecordTableComponentInstance>
  );
};
