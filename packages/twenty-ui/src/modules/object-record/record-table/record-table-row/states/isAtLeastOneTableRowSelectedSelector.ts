import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { isRowSelectedComponentFamilyState } from '@twenty-modules/object-record/record-table/record-table-row/states/isRowSelectedComponentFamilyState';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';

export const isAtLeastOneTableRowSelectedSelector =
  createComponentSelectorV2<boolean>({
    key: 'isAtLeastOneTableRowSelectedSelector',
    componentInstanceContext: RecordTableComponentInstanceContext,
    get:
      ({ instanceId }) =>
      ({ get }) => {
        const allRecordIds = get(
          recordIndexAllRecordIdsComponentSelector.selectorFamily({
            instanceId,
          }),
        );

        const isAnyRecordSelected = allRecordIds.some((recordId) =>
          get(
            isRowSelectedComponentFamilyState.atomFamily({
              instanceId,
              familyKey: recordId,
            }),
          ),
        );

        return isAnyRecordSelected;
      },
  });
