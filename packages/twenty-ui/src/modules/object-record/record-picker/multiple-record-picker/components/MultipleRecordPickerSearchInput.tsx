import { useMultipleRecordPickerPerformSearch } from '@twenty-modules/object-record/record-picker/multiple-record-picker/hooks/useMultipleRecordPickerPerformSearch';
import { MultipleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/contexts/MultipleRecordPickerComponentInstanceContext';
import { multipleRecordPickerSearchFilterComponentState } from '@twenty-modules/object-record/record-picker/multiple-record-picker/states/multipleRecordPickerSearchFilterComponentState';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { useCallback } from 'react';

export const MultipleRecordPickerSearchInput = () => {
  const componentInstanceId = useAvailableComponentInstanceIdOrThrow(
    MultipleRecordPickerComponentInstanceContext,
  );

  const [recordPickerSearchFilter, setRecordPickerSearchFilter] =
    useRecoilComponentStateV2(multipleRecordPickerSearchFilterComponentState);

  const { performSearch } = useMultipleRecordPickerPerformSearch();

  const handleFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRecordPickerSearchFilter(event.currentTarget.value);
      performSearch({
        multipleRecordPickerInstanceId: componentInstanceId,
        forceSearchFilter: event.currentTarget.value,
      });
    },
    [componentInstanceId, performSearch, setRecordPickerSearchFilter],
  );

  return (
    <DropdownMenuSearchInput
      value={recordPickerSearchFilter}
      onChange={handleFilterChange}
      autoFocus
    />
  );
};
