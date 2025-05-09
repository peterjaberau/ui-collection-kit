import { useDropdown } from '@twenty-modules/dropdown/hooks/useDropdown';
import {
  RecordBoardColumnHeaderAggregateDropdownContext,
  RecordBoardColumnHeaderAggregateDropdownContextValue,
} from '@twenty-modules/object-record/record-board/record-board-column/components/RecordBoardColumnHeaderAggregateDropdownContext';
import { RecordBoardColumnHeaderAggregateDropdownMenuItem } from '@twenty-modules/object-record/record-board/record-board-column/components/RecordBoardColumnHeaderAggregateDropdownMenuItem';
import { aggregateOperationComponentState } from '@twenty-modules/object-record/record-board/record-board-column/states/aggregateOperationComponentState';
import { availableFieldIdsForAggregateOperationComponentState } from '@twenty-modules/object-record/record-board/record-board-column/states/availableFieldIdsForAggregateOperationComponentState';
import { getAggregateOperationLabel } from '@twenty-modules/object-record/record-board/record-board-column/utils/getAggregateOperationLabel';
import { recordIndexKanbanAggregateOperationState } from '@twenty-modules/object-record/record-index/states/recordIndexKanbanAggregateOperationState';
import { AGGREGATE_OPERATIONS } from '@twenty-modules/object-record/record-table/constants/AggregateOperations';
import { ExtendedAggregateOperations } from '@twenty-modules/object-record/record-table/types/ExtendedAggregateOperations';
import { TableOptionsHotkeyScope } from '@twenty-modules/object-record/record-table/types/TableOptionsHotkeyScope';
import { AvailableFieldsForAggregateOperation } from '@twenty-modules/object-record/types/AvailableFieldsForAggregateOperation';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useUpdateViewAggregate } from '@twenty-modules/views/hooks/useUpdateViewAggregate';
import isEmpty from 'lodash.isempty';
import { useRecoilValue } from 'recoil';
import { Key } from 'ts-key-enum';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { IconCheck, IconChevronLeft } from '@twenty-ui/display';

export const RecordBoardColumnHeaderAggregateDropdownOptionsContent = ({
  availableAggregations,
  title,
}: {
  availableAggregations: AvailableFieldsForAggregateOperation;
  title: string;
}) => {
  const { onContentChange, closeDropdown, resetContent } =
    useDropdown<RecordBoardColumnHeaderAggregateDropdownContextValue>({
      context: RecordBoardColumnHeaderAggregateDropdownContext,
    });

  useScopedHotkeys(
    [Key.Escape],
    () => {
      closeDropdown();
    },
    TableOptionsHotkeyScope.Dropdown,
  );

  const setAggregateOperation = useSetRecoilComponentStateV2(
    aggregateOperationComponentState,
  );

  const setAvailableFieldsForAggregateOperation = useSetRecoilComponentStateV2(
    availableFieldIdsForAggregateOperationComponentState,
  );

  const { updateViewAggregate } = useUpdateViewAggregate();

  const recordIndexKanbanAggregateOperation = useRecoilValue(
    recordIndexKanbanAggregateOperationState,
  );

  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={resetContent}
            Icon={IconChevronLeft}
          />
        }
      >
        {title}
      </DropdownMenuHeader>
      <DropdownMenuItemsContainer>
        {Object.entries(availableAggregations)
          .filter(([, fields]) => !isEmpty(fields))
          .map(
            ([
              availableAggregationOperation,
              availableAggregationFieldsIdsForOperation,
            ]) => (
              <RecordBoardColumnHeaderAggregateDropdownMenuItem
                key={`aggregate-dropdown-menu-content-${availableAggregationOperation}`}
                onContentChange={() => {
                  if (
                    availableAggregationOperation !== AGGREGATE_OPERATIONS.count
                  ) {
                    setAggregateOperation(
                      availableAggregationOperation as ExtendedAggregateOperations,
                    );

                    setAvailableFieldsForAggregateOperation(
                      availableAggregationFieldsIdsForOperation,
                    );
                    onContentChange('aggregateFields');
                  } else {
                    updateViewAggregate({
                      kanbanAggregateOperationFieldMetadataId:
                        availableAggregationFieldsIdsForOperation[0],
                      kanbanAggregateOperation:
                        availableAggregationOperation as AGGREGATE_OPERATIONS,
                    });
                    closeDropdown();
                  }
                }}
                text={getAggregateOperationLabel(
                  availableAggregationOperation as ExtendedAggregateOperations,
                )}
                hasSubMenu={
                  availableAggregationOperation === AGGREGATE_OPERATIONS.count
                    ? false
                    : true
                }
                RightIcon={
                  availableAggregationOperation ===
                    AGGREGATE_OPERATIONS.count &&
                  recordIndexKanbanAggregateOperation?.operation ===
                    AGGREGATE_OPERATIONS.count
                    ? IconCheck
                    : undefined
                }
              />
            ),
          )}
      </DropdownMenuItemsContainer>
    </>
  );
};
