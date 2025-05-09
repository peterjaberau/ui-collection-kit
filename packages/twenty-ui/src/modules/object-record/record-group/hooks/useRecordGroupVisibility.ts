import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { recordIndexRecordGroupHideComponentFamilyState } from '@twenty-modules/object-record/record-index/states/recordIndexRecordGroupHideComponentFamilyState';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useSaveCurrentViewGroups } from '@twenty-modules/views/hooks/useSaveCurrentViewGroups';
import { ViewType } from '@twenty-modules/views/types/ViewType';
import { recordGroupDefinitionToViewGroup } from '@twenty-modules/views/utils/recordGroupDefinitionToViewGroup';
import { useRecoilCallback } from 'recoil';

type UseRecordGroupVisibilityParams = {
  viewType: ViewType;
};

export const useRecordGroupVisibility = ({
  viewType,
}: UseRecordGroupVisibilityParams) => {
  const objectOptionsDropdownRecordGroupHideFamilyState =
    useRecoilComponentCallbackStateV2(
      recordIndexRecordGroupHideComponentFamilyState,
    );

  const { saveViewGroup } = useSaveCurrentViewGroups();

  const handleVisibilityChange = useRecoilCallback(
    ({ set }) =>
      async (updatedRecordGroup: RecordGroupDefinition) => {
        set(
          recordGroupDefinitionFamilyState(updatedRecordGroup.id),
          updatedRecordGroup,
        );

        saveViewGroup(recordGroupDefinitionToViewGroup(updatedRecordGroup));
      },
    [saveViewGroup],
  );

  const handleHideEmptyRecordGroupChange = useRecoilCallback(
    ({ set }) =>
      async () => {
        set(
          objectOptionsDropdownRecordGroupHideFamilyState(viewType),
          (currentHideState) => !currentHideState,
        );
      },
    [viewType, objectOptionsDropdownRecordGroupHideFamilyState],
  );

  return {
    handleVisibilityChange,
    handleHideEmptyRecordGroupChange,
  };
};
