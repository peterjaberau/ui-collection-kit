import { recordGroupIdsComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupIdsComponentState';

import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const hasRecordGroupsComponentSelector =
  createComponentSelectorV2<boolean>({
    key: 'hasRecordGroupsComponentSelector',
    componentInstanceContext: ViewComponentInstanceContext,
    get:
      ({ instanceId }) =>
      ({ get }) => {
        const recordGroupIds = get(
          recordGroupIdsComponentState.atomFamily({
            instanceId,
          }),
        );

        return recordGroupIds.length > 0;
      },
  });
