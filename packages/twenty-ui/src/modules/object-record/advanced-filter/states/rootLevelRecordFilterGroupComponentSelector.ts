import { RecordFilterGroupsComponentInstanceContext } from '@twenty-modules/object-record/record-filter-group/states/context/RecordFilterGroupsComponentInstanceContext';
import { currentRecordFilterGroupsComponentState } from '@twenty-modules/object-record/record-filter-group/states/currentRecordFilterGroupsComponentState';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const rootLevelRecordFilterGroupComponentSelector =
  createComponentSelectorV2({
    key: 'rootLevelRecordFilterGroupComponentSelector',
    get:
      ({ instanceId }) =>
      ({ get }) => {
        const currentRecordFilterGroups = get(
          currentRecordFilterGroupsComponentState.atomFamily({ instanceId }),
        );

        const rootLevelRecordFilterGroup = currentRecordFilterGroups.find(
          (recordFilterGroup) =>
            !isDefined(recordFilterGroup.parentRecordFilterGroupId),
        );

        return rootLevelRecordFilterGroup;
      },
    componentInstanceContext: RecordFilterGroupsComponentInstanceContext,
  });
