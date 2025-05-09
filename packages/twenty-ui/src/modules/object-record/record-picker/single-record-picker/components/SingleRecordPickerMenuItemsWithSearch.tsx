import {
  SingleRecordPickerMenuItems,
  SingleRecordPickerMenuItemsProps,
} from '@twenty-modules/object-record/record-picker/single-record-picker/components/SingleRecordPickerMenuItems';
import { useSingleRecordPickerRecords } from '@twenty-modules/object-record/record-picker/single-record-picker/hooks/useSingleRecordPickerRecords';
import { useSingleRecordPickerSearch } from '@twenty-modules/object-record/record-picker/single-record-picker/hooks/useSingleRecordPickerSearch';
import { SingleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/single-record-picker/states/contexts/SingleRecordPickerComponentInstanceContext';
import { singleRecordPickerSearchFilterComponentState } from '@twenty-modules/object-record/record-picker/single-record-picker/states/singleRecordPickerSearchFilterComponentState';
import { RecordPickerLayoutDirection } from '@twenty-modules/object-record/record-picker/types/RecordPickerLayoutDirection';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { CreateNewButton } from '@twenty-modules/ui/input/relation-picker/components/CreateNewButton';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconPlus } from '@twenty-ui/display';

export type SingleRecordPickerMenuItemsWithSearchProps = {
  excludedRecordIds?: string[];
  onCreate?: ((searchInput?: string) => void) | (() => void);
  objectNameSingular: string;
  recordPickerInstanceId?: string;
  layoutDirection?: RecordPickerLayoutDirection;
} & Pick<
  SingleRecordPickerMenuItemsProps,
  | 'EmptyIcon'
  | 'emptyLabel'
  | 'onCancel'
  | 'onRecordSelected'
  | 'selectedRecord'
>;

export const SingleRecordPickerMenuItemsWithSearch = ({
  EmptyIcon,
  emptyLabel,
  excludedRecordIds,
  onCancel,
  onCreate,
  onRecordSelected,
  objectNameSingular,
  layoutDirection = 'search-bar-on-top',
}: SingleRecordPickerMenuItemsWithSearchProps) => {
  const { handleSearchFilterChange } = useSingleRecordPickerSearch();

  const recordPickerInstanceId = useAvailableComponentInstanceIdOrThrow(
    SingleRecordPickerComponentInstanceContext,
  );

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const recordPickerSearchFilter = useRecoilComponentValueV2(
    singleRecordPickerSearchFilterComponentState,
    recordPickerInstanceId,
  );

  const { records } = useSingleRecordPickerRecords({
    objectNameSingular,
    excludedRecordIds,
  });

  const createNewButton = isDefined(onCreate) && (
    <CreateNewButton
      onClick={() => onCreate?.(recordPickerSearchFilter)}
      LeftIcon={IconPlus}
      text="Add New"
    />
  );

  return (
    <>
      {layoutDirection === 'search-bar-on-bottom' && (
        <>
          {isDefined(onCreate) && !hasObjectReadOnlyPermission && (
            <DropdownMenuItemsContainer scrollable={false}>
              {createNewButton}
            </DropdownMenuItemsContainer>
          )}
          {records.recordsToSelect.length > 0 && <DropdownMenuSeparator />}
          <SingleRecordPickerMenuItems
            recordsToSelect={records.recordsToSelect}
            loading={records.loading}
            selectedRecord={records.selectedRecords?.[0]}
            isFiltered={!!recordPickerSearchFilter}
            {...{
              EmptyIcon,
              emptyLabel,
              onCancel,
              onRecordSelected,
            }}
          />
          <DropdownMenuSeparator />
        </>
      )}
      <DropdownMenuSearchInput
        onChange={handleSearchFilterChange}
        autoFocus
        role="combobox"
      />
      {layoutDirection === 'search-bar-on-top' && (
        <>
          <DropdownMenuSeparator />
          <SingleRecordPickerMenuItems
            recordsToSelect={records.recordsToSelect}
            loading={records.loading}
            selectedRecord={records.selectedRecords?.[0]}
            isFiltered={!!recordPickerSearchFilter}
            {...{
              EmptyIcon,
              emptyLabel,
              onCancel,
              onRecordSelected,
            }}
          />
          {records.recordsToSelect.length > 0 && isDefined(onCreate) && (
            <DropdownMenuSeparator />
          )}
          {isDefined(onCreate) && !hasObjectReadOnlyPermission && (
            <DropdownMenuItemsContainer scrollable={false}>
              {createNewButton}
            </DropdownMenuItemsContainer>
          )}
        </>
      )}
    </>
  );
};
