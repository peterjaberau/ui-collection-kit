import { MultipleRecordPickerMenuItems } from '@twenty-modules/object-record/record-picker/multiple-record-picker/components/MultipleRecordPickerMenuItems';
import { MultipleRecordPickerOnClickOutsideEffect } from '@twenty-modules/object-record/record-picker/multiple-record-picker/components/MultipleRecordPickerOnClickOutsideEffect';
import { MultipleRecordPickerSearchInput } from '@twenty-modules/object-record/record-picker/multiple-record-picker/components/MultipleRecordPickerSearchInput';
import { MultipleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/contexts/MultipleRecordPickerComponentInstanceContext';
import { multipleRecordPickerIsLoadingComponentState } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/multipleRecordPickerIsLoadingComponentState';
import { multipleRecordPickerSearchFilterComponentState } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/multipleRecordPickerSearchFilterComponentState';
import { multipleRecordPickerPickableMorphItemsLengthComponentSelector } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/selectors/multipleRecordPickerPickableMorphItemsLengthComponentSelector';
import { MultipleRecordPickerHotkeyScope } from '@twenty-modules/object-record/record-picker/multiple-record-picker/types/MultipleRecordPickerHotkeyScope';
import { getMultipleRecordPickerSelectableListId } from '@twenty-modules/object-record/record-picker/multiple-record-picker/utils/getMultipleRecordPickerSelectableListId';
import { RecordPickerLayoutDirection } from '@twenty-modules/object-record/record-picker/types/RecordPickerLayoutDirection';
import { RecordPickerPickableMorphItem } from '@twenty-modules/object-record/record-picker/types/RecordPickerPickableMorphItem';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { CreateNewButton } from '@twenty-modules/ui/input/relation-picker/components/CreateNewButton';
import { DropdownMenuSkeletonItem } from '@twenty-modules/ui/input/relation-picker/components/skeletons/DropdownMenuSkeletonItem';
import { DropdownMenu } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenu';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { DropdownMenuSeparator } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSeparator';
import { SelectableListItem } from '@twenty-modules/ui/layout/selectable-list/components/SelectableListItem';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import styled from '@emotion/styled';
import { useRef } from 'react';
import { useRecoilCallback } from 'recoil';
import { Key } from 'ts-key-enum';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { IconPlus } from '@twenty-ui/display';

export const StyledSelectableItem = styled(SelectableListItem)`
  height: 100%;
  width: 100%;
`;

type MultipleRecordPickerProps = {
  onChange?: (morphItem: RecordPickerPickableMorphItem) => void;
  onSubmit?: () => void;
  onCreate?: ((searchInput?: string) => void) | (() => void);
  layoutDirection?: RecordPickerLayoutDirection;
  componentInstanceId: string;
  onClickOutside: () => void;
};

export const MultipleRecordPicker = ({
  onChange,
  onSubmit,
  onCreate,
  onClickOutside,
  layoutDirection = 'search-bar-on-bottom',
  componentInstanceId,
}: MultipleRecordPickerProps) => {
  const { goBackToPreviousHotkeyScope } = usePreviousHotkeyScope();

  const selectableListComponentInstanceId =
    getMultipleRecordPickerSelectableListId(componentInstanceId);

  const { resetSelectedItem } = useSelectableList(
    selectableListComponentInstanceId,
  );

  const multipleRecordPickerIsLoading = useRecoilComponentValueV2(
    multipleRecordPickerIsLoadingComponentState,
    componentInstanceId,
  );

  const itemsLength = useRecoilComponentValueV2(
    multipleRecordPickerPickableMorphItemsLengthComponentSelector,
    componentInstanceId,
  );

  const multipleRecordPickerSearchFilterState =
    useRecoilComponentCallbackStateV2(
      multipleRecordPickerSearchFilterComponentState,
      componentInstanceId,
    );

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const handleSubmit = () => {
    onSubmit?.();
    goBackToPreviousHotkeyScope();
    resetSelectedItem();
  };

  useScopedHotkeys(
    Key.Escape,
    () => {
      handleSubmit();
    },
    MultipleRecordPickerHotkeyScope.MultipleRecordPicker,
    [handleSubmit],
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const handleCreateNewButtonClick = useRecoilCallback(
    ({ snapshot }) => {
      return () => {
        const recordPickerSearchFilter = snapshot
          .getLoadable(multipleRecordPickerSearchFilterState)
          .getValue();
        onCreate?.(recordPickerSearchFilter);
      };
    },
    [multipleRecordPickerSearchFilterState, onCreate],
  );

  const createNewButton = isDefined(onCreate) && (
    <CreateNewButton
      onClick={handleCreateNewButtonClick}
      LeftIcon={IconPlus}
      text="Add New"
    />
  );

  return (
    <MultipleRecordPickerComponentInstanceContext.Provider
      value={{ instanceId: componentInstanceId }}
    >
      <MultipleRecordPickerOnClickOutsideEffect
        containerRef={containerRef}
        onClickOutside={onClickOutside}
      />
      <DropdownMenu ref={containerRef} data-select-disable width={200}>
        {layoutDirection === 'search-bar-on-bottom' && (
          <>
            {isDefined(onCreate) && !hasObjectReadOnlyPermission && (
              <DropdownMenuItemsContainer scrollable={false}>
                {createNewButton}
              </DropdownMenuItemsContainer>
            )}
            <DropdownMenuSeparator />
            {itemsLength > 0 && (
              <MultipleRecordPickerMenuItems onChange={onChange} />
            )}
            {multipleRecordPickerIsLoading && (
              <>
                <DropdownMenuSkeletonItem />
                <DropdownMenuSeparator />
              </>
            )}
            {itemsLength > 0 && <DropdownMenuSeparator />}
          </>
        )}
        <MultipleRecordPickerSearchInput />
        {layoutDirection === 'search-bar-on-top' && (
          <>
            <DropdownMenuSeparator />
            {multipleRecordPickerIsLoading && (
              <>
                <DropdownMenuSkeletonItem />
                <DropdownMenuSeparator />
              </>
            )}
            {itemsLength > 0 && (
              <MultipleRecordPickerMenuItems onChange={onChange} />
            )}
            {itemsLength > 0 && <DropdownMenuSeparator />}
            {isDefined(onCreate) && (
              <DropdownMenuItemsContainer scrollable={false}>
                {createNewButton}
              </DropdownMenuItemsContainer>
            )}
          </>
        )}
      </DropdownMenu>
    </MultipleRecordPickerComponentInstanceContext.Provider>
  );
};
