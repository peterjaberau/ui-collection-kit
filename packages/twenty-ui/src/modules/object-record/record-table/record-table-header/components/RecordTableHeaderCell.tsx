import styled from '@emotion/styled';
import { useCallback, useMemo, useState } from 'react';
import { useRecoilCallback } from 'recoil';

import { isObjectMetadataReadOnly } from '@twenty-modules/object-metadata/utils/isObjectMetadataReadOnly';
import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useCreateNewIndexRecord } from '@twenty-modules/object-record/record-table/hooks/useCreateNewIndexRecord';
import { useTableColumns } from '@twenty-modules/object-record/record-table/hooks/useTableColumns';
import { RecordTableColumnHeadWithDropdown } from '@twenty-modules/object-record/record-table/record-table-header/components/RecordTableColumnHeadWithDropdown';
import { isRecordTableScrolledLeftComponentState } from '@twenty-modules/object-record/record-table/states/isRecordTableScrolledLeftComponentState';
import { resizeFieldOffsetComponentState } from '@twenty-modules/object-record/record-table/states/resizeFieldOffsetComponentState';
import { tableColumnsComponentState } from '@twenty-modules/object-record/record-table/states/tableColumnsComponentState';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { useTrackPointer } from '@twenty-modules/ui/utilities/pointer-event/hooks/useTrackPointer';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useIsMobile } from '@twenty-modules/ui/utilities/responsive/hooks/useIsMobile';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { mapArrayToObject } from '@twenty-ui/front/utils/array/mapArrayToObject';
import { IconPlus } from '@twenty-ui/display';
import { LightIconButton } from '@twenty-ui/input';

const COLUMN_MIN_WIDTH = 104;

const StyledColumnHeaderCell = styled.th<{
  columnWidth: number;
  isResizing?: boolean;
}>`
  border-bottom: 1px solid ${({ theme }) => theme.border.color.light};
  color: ${({ theme }) => theme.font.color.tertiary};
  padding: 0;
  text-align: left;
  transition: 0.3s ease;

  background-color: ${({ theme }) => theme.background.primary};
  border-right: 1px solid ${({ theme }) => theme.border.color.light};
  ${({ columnWidth }) => `
      min-width: ${columnWidth}px;
      width: ${columnWidth}px;
      `}
  position: relative;
  user-select: none;
  ${({ theme }) => {
    return `
    &:hover {
      background: ${theme.background.secondary};
    };
    &:active {
      background: ${theme.background.tertiary};
    };
    `;
  }};
  ${({ isResizing, theme }) => {
    if (isResizing === true) {
      return `&:after {
        background-color: ${theme.color.blue};
        bottom: 0;
        content: '';
        display: block;
        position: absolute;
        right: -1px;
        top: 0;
        width: 2px;
      }`;
    }
  }};

  // TODO: refactor this, each component should own its CSS
  div {
    overflow: hidden;
  }
`;

const StyledResizeHandler = styled.div`
  bottom: 0;
  cursor: col-resize;
  padding: 0 ${({ theme }) => theme.spacing(2)};
  position: absolute;
  right: -9px;
  top: 0;
  width: 3px;
  z-index: 1;
`;

const StyledColumnHeadContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  & > :first-of-type {
    flex: 1;
  }
`;

const StyledHeaderIcon = styled.div`
  margin: ${({ theme }) => theme.spacing(1, 1, 1, 1.5)};
`;

type RecordTableHeaderCellProps = {
  column: ColumnDefinition<FieldMetadata>;
};

export const RecordTableHeaderCell = ({
  column,
}: RecordTableHeaderCellProps) => {
  const { objectMetadataItem } = useRecordTableContextOrThrow();

  const resizeFieldOffsetState = useRecoilComponentCallbackStateV2(
    resizeFieldOffsetComponentState,
  );

  const [resizeFieldOffset, setResizeFieldOffset] = useRecoilComponentStateV2(
    resizeFieldOffsetComponentState,
  );

  const tableColumns = useRecoilComponentValueV2(tableColumnsComponentState);
  const tableColumnsByKey = useMemo(
    () =>
      mapArrayToObject(tableColumns, ({ fieldMetadataId }) => fieldMetadataId),
    [tableColumns],
  );

  const [initialPointerPositionX, setInitialPointerPositionX] = useState<
    number | null
  >(null);
  const [resizedFieldKey, setResizedFieldKey] = useState<string | null>(null);

  const { handleColumnsChange } = useTableColumns();

  const handleResizeHandlerStart = useCallback((positionX: number) => {
    setInitialPointerPositionX(positionX);
  }, []);

  const [iconVisibility, setIconVisibility] = useState(false);

  const handleResizeHandlerMove = useCallback(
    (positionX: number) => {
      if (!initialPointerPositionX) return;
      setResizeFieldOffset(positionX - initialPointerPositionX);
    },
    [setResizeFieldOffset, initialPointerPositionX],
  );

  const handleResizeHandlerEnd = useRecoilCallback(
    ({ snapshot, set }) =>
      async () => {
        if (!resizedFieldKey) return;

        const resizeFieldOffset = getSnapshotValue(
          snapshot,
          resizeFieldOffsetState,
        );

        const nextWidth = Math.round(
          Math.max(
            tableColumnsByKey[resizedFieldKey].size + resizeFieldOffset,
            COLUMN_MIN_WIDTH,
          ),
        );

        set(resizeFieldOffsetState, 0);
        setInitialPointerPositionX(null);
        setResizedFieldKey(null);

        if (nextWidth !== tableColumnsByKey[resizedFieldKey].size) {
          const nextColumns = tableColumns.map((column) =>
            column.fieldMetadataId === resizedFieldKey
              ? { ...column, size: nextWidth }
              : column,
          );

          await handleColumnsChange(nextColumns);
        }
      },
    [
      resizedFieldKey,
      resizeFieldOffsetState,
      tableColumnsByKey,
      setResizedFieldKey,
      tableColumns,
      handleColumnsChange,
    ],
  );

  useTrackPointer({
    shouldTrackPointer: resizedFieldKey !== null,
    onMouseDown: handleResizeHandlerStart,
    onMouseMove: handleResizeHandlerMove,
    onMouseUp: handleResizeHandlerEnd,
  });

  const isRecordTableScrolledLeft = useRecoilComponentValueV2(
    isRecordTableScrolledLeftComponentState,
  );

  const isMobile = useIsMobile();

  const disableColumnResize =
    column.isLabelIdentifier && isMobile && !isRecordTableScrolledLeft;

  const { createNewIndexRecord } = useCreateNewIndexRecord({
    objectMetadataItem,
  });

  const handlePlusButtonClick = () => {
    createNewIndexRecord();
  };

  const isReadOnly = isObjectMetadataReadOnly(objectMetadataItem);

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  return (
    <StyledColumnHeaderCell
      key={column.fieldMetadataId}
      isResizing={resizedFieldKey === column.fieldMetadataId}
      columnWidth={Math.max(
        tableColumnsByKey[column.fieldMetadataId].size +
          (resizedFieldKey === column.fieldMetadataId ? resizeFieldOffset : 0) +
          24,
        COLUMN_MIN_WIDTH,
      )}
      onMouseEnter={() => setIconVisibility(true)}
      onMouseLeave={() => setIconVisibility(false)}
    >
      <StyledColumnHeadContainer>
        <RecordTableColumnHeadWithDropdown column={column} />
        {(useIsMobile() || iconVisibility) &&
          !!column.isLabelIdentifier &&
          !isReadOnly &&
          !hasObjectReadOnlyPermission && (
            <StyledHeaderIcon>
              <LightIconButton
                Icon={IconPlus}
                size="small"
                accent="tertiary"
                onClick={handlePlusButtonClick}
              />
            </StyledHeaderIcon>
          )}
      </StyledColumnHeadContainer>
      {!disableColumnResize && (
        <StyledResizeHandler
          className="cursor-col-resize"
          role="separator"
          onPointerDown={() => {
            setResizedFieldKey(column.fieldMetadataId);
          }}
        />
      )}
    </StyledColumnHeaderCell>
  );
};
