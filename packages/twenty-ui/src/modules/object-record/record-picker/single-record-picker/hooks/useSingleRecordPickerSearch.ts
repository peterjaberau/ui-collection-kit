import { SingleRecordPickerComponentInstanceContext } from '@twenty-modules/object-record/record-picker/single-record-picker/states/contexts/SingleRecordPickerComponentInstanceContext';
import { singleRecordPickerSearchFilterComponentState } from '@twenty-modules/object-record/record-picker/single-record-picker/states/singleRecordPickerSearchFilterComponentState';
import { singleRecordPickerSelectedIdComponentState } from '@twenty-modules/object-record/record-picker/single-record-picker/states/singleRecordPickerSelectedIdComponentState';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { useDebouncedCallback } from 'use-debounce';

export const useSingleRecordPickerSearch = (
  recordPickerComponentInstanceIdFromProps?: string,
) => {
  const recordPickerComponentInstanceId =
    useAvailableComponentInstanceIdOrThrow(
      SingleRecordPickerComponentInstanceContext,
      recordPickerComponentInstanceIdFromProps,
    );

  const setRecordPickerSearchFilter = useSetRecoilComponentStateV2(
    singleRecordPickerSearchFilterComponentState,
    recordPickerComponentInstanceId,
  );

  const setRecordPickerSelectedId = useSetRecoilComponentStateV2(
    singleRecordPickerSelectedIdComponentState,
    recordPickerComponentInstanceId,
  );
  const debouncedSetSearchFilter = useDebouncedCallback(
    setRecordPickerSearchFilter,
    100,
    {
      leading: true,
    },
  );

  const resetSearchFilter = () => {
    debouncedSetSearchFilter('');
    setRecordPickerSelectedId(undefined);
  };

  const handleSearchFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    debouncedSetSearchFilter(event.currentTarget.value);
    setRecordPickerSelectedId(undefined);
  };

  return {
    handleSearchFilterChange,
    resetSearchFilter,
  };
};
