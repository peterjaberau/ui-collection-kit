import { useDropdown } from '@twenty-modules/dropdown/hooks/useDropdown';
import { RecordBoardColumnHeaderAggregateDropdownContext } from '@twenty-modules/object-record/record-board/record-board-column/components/RecordBoardColumnHeaderAggregateDropdownContext';
import { aggregateOperationComponentState } from '@twenty-modules/object-record/record-board/record-board-column/states/aggregateOperationComponentState';
import { availableFieldIdsForAggregateOperationComponentState } from '@twenty-modules/object-record/record-board/record-board-column/states/availableFieldIdsForAggregateOperationComponentState';
import { getAggregateOperationLabel } from '@twenty-modules/object-record/record-board/record-board-column/utils/getAggregateOperationLabel';
import { recordIndexKanbanAggregateOperationState } from '@twenty-modules/object-record/record-index/states/recordIndexKanbanAggregateOperationState';
import { DropdownMenuHeader } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/DropdownMenuHeader';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useUpdateViewAggregate } from '@twenty-modules/views/hooks/useUpdateViewAggregate';
import { useRecoilValue } from 'recoil';
import { DropdownMenuHeaderLeftComponent } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuHeader/internal/DropdownMenuHeaderLeftComponent';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import {
  Icon123,
  IconCheck,
  IconChevronLeft,
  useIcons,
} from '@twenty-ui/display';
import { MenuItem } from '@twenty-ui/navigation';

export const RecordBoardColumnHeaderAggregateDropdownFieldsContent = () => {
  const {
    closeDropdown,
    objectMetadataItem,
    onContentChange,
    resetContent,
    previousContentId,
  } = useDropdown({
    context: RecordBoardColumnHeaderAggregateDropdownContext,
  });

  const { updateViewAggregate } = useUpdateViewAggregate();

  const { getIcon } = useIcons();

  const aggregateOperation = useRecoilComponentValueV2(
    aggregateOperationComponentState,
  );

  const availableFieldsIdsForAggregateOperation = useRecoilComponentValueV2(
    availableFieldIdsForAggregateOperationComponentState,
  );

  const recordIndexKanbanAggregateOperation = useRecoilValue(
    recordIndexKanbanAggregateOperationState,
  );

  if (!isDefined(aggregateOperation)) return <></>;
  return (
    <>
      <DropdownMenuHeader
        StartComponent={
          <DropdownMenuHeaderLeftComponent
            onClick={() =>
              previousContentId
                ? onContentChange(previousContentId)
                : resetContent()
            }
            Icon={IconChevronLeft}
          />
        }
      >
        {getAggregateOperationLabel(aggregateOperation)}
      </DropdownMenuHeader>
      <DropdownMenuItemsContainer>
        {availableFieldsIdsForAggregateOperation.map((fieldId) => {
          const fieldMetadata = objectMetadataItem.fields.find(
            (field) => field.id === fieldId,
          );

          if (!fieldMetadata) return null;
          return (
            <MenuItem
              key={fieldId}
              onClick={() => {
                updateViewAggregate({
                  kanbanAggregateOperationFieldMetadataId: fieldId,
                  kanbanAggregateOperation: aggregateOperation,
                });
                closeDropdown();
              }}
              LeftIcon={getIcon(fieldMetadata.icon) ?? Icon123}
              text={fieldMetadata.label}
              RightIcon={
                recordIndexKanbanAggregateOperation?.fieldMetadataId ===
                  fieldId &&
                recordIndexKanbanAggregateOperation?.operation ===
                  aggregateOperation
                  ? IconCheck
                  : undefined
              }
            />
          );
        })}
      </DropdownMenuItemsContainer>
    </>
  );
};
