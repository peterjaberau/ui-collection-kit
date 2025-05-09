import { isNonEmptyString, isUndefined } from '@sniptt/guards';
import { useRef } from 'react';
import { Key } from 'ts-key-enum';

import { DropdownMenuSkeletonItem } from '@twenty-modules/ui/input/relation-picker/components/skeletons/DropdownMenuSkeletonItem';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { SelectableList } from '@twenty-modules/ui/layout/selectable-list/components/SelectableList';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';

import { SingleRecordPickerMenuItem } from '@twenty-modules/object-record/record-picker/single-record-picker/components/SingleRecordPickerMenuItem';
import { SingleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/single-record-picker/states/contexts/SingleRecordPickerComponentInstanceContext';
import { singleRecordPickerSelectedIdComponentState } from '@twenty-modules/object-record/record-picker/single-record-picker/states/singleRecordPickerSelectedIdComponentState';
import { SingleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerHotkeyScope';
import { SingleRecordPickerRecord } from '@twenty-modules/object-record/record-picker/single-record-picker/types/SingleRecordPickerRecord';
import { getSingleRecordPickerSelectableListId } from '@twenty-modules/object-record/record-picker/single-record-picker/utils/getSingleRecordPickerSelectableListId';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { isSelectedItemIdComponentFamilySelector } from '@twenty-modules/ui/layout/selectable-list/states/selectors/isSelectedItemIdComponentFamilySelector';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentFamilyValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentFamilyValueV2';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import styled from '@emotion/styled';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconComponent } from '@twenty-ui/display';
import { MenuItemSelect } from '@twenty-ui/navigation';

export type SingleRecordPickerMenuItemsProps = {
  EmptyIcon?: IconComponent;
  emptyLabel?: string;
  recordsToSelect: SingleRecordPickerRecord[];
  loading?: boolean;
  onCancel?: () => void;
  onRecordSelected: (entity?: SingleRecordPickerRecord) => void;
  selectedRecord?: SingleRecordPickerRecord;
  hotkeyScope?: string;
  isFiltered: boolean;
};

const StyledContainer = styled.div`
  display: flex;
`;

export const SingleRecordPickerMenuItems = ({
  EmptyIcon,
  emptyLabel,
  recordsToSelect,
  loading,
  onCancel,
  onRecordSelected,
  selectedRecord,
  hotkeyScope = SingleRecordPickerHotkeyScope.SingleRecordPicker,
  isFiltered,
}: SingleRecordPickerMenuItemsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const selectNone = emptyLabel
    ? {
        __typename: '',
        id: 'select-none',
        name: emptyLabel,
      }
    : null;

  const recordsInDropdown = [
    selectNone,
    selectedRecord,
    ...recordsToSelect,
  ].filter(
    (entity): entity is SingleRecordPickerRecord =>
      isDefined(entity) && isNonEmptyString(entity.name),
  );

  const recordPickerComponentInstanceId =
    useAvailableComponentInstanceIdOrThrow(
      SingleRecordPickerComponentInstanceContext,
    );

  const selectableListComponentInstanceId =
    getSingleRecordPickerSelectableListId(recordPickerComponentInstanceId);

  const { resetSelectedItem } = useSelectableList(
    selectableListComponentInstanceId,
  );

  const isSelectedSelectNoneButton = useRecoilComponentFamilyValueV2(
    isSelectedItemIdComponentFamilySelector,
    selectableListComponentInstanceId,
    'select-none',
  );

  useScopedHotkeys(
    [Key.Escape],
    () => {
      resetSelectedItem();
      onCancel?.();
    },
    hotkeyScope,
    [onCancel, resetSelectedItem],
  );

  const selectableItemIds = recordsInDropdown.map((entity) => entity.id);
  const [selectedRecordId, setSelectedRecordId] = useRecoilComponentStateV2(
    singleRecordPickerSelectedIdComponentState,
  );

  return (
    <StyledContainer ref={containerRef}>
      <SelectableList
        selectableListInstanceId={selectableListComponentInstanceId}
        selectableItemIdArray={selectableItemIds}
        hotkeyScope={hotkeyScope}
      >
        <DropdownMenuItemsContainer hasMaxHeight>
          {loading && !isFiltered ? (
            <DropdownMenuSkeletonItem />
          ) : recordsInDropdown.length === 0 && !loading ? (
            <></>
          ) : (
            recordsInDropdown?.map((record) => {
              switch (record.id) {
                case 'select-none': {
                  return (
                    emptyLabel && (
                      <SelectableListItem
                        key={record.id}
                        itemId={record.id}
                        onEnter={() => {
                          setSelectedRecordId(undefined);
                          onRecordSelected();
                        }}
                      >
                        <MenuItemSelect
                          onClick={() => {
                            setSelectedRecordId(undefined);
                            onRecordSelected();
                          }}
                          LeftIcon={EmptyIcon}
                          text={emptyLabel}
                          selected={isUndefined(selectedRecordId)}
                          focused={isSelectedSelectNoneButton}
                        />
                      </SelectableListItem>
                    )
                  );
                }
                default: {
                  return (
                    <SingleRecordPickerMenuItem
                      key={record.id}
                      record={record}
                      onRecordSelected={onRecordSelected}
                      selectedRecord={selectedRecord}
                    />
                  );
                }
              }
            })
          )}
        </DropdownMenuItemsContainer>
      </SelectableList>
    </StyledContainer>
  );
};
