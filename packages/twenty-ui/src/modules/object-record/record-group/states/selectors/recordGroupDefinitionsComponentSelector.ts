import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { recordGroupIdsComponentState } from '@twenty-modules/object-record/record-group/states/recordGroupIdsComponentState';
import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';

import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const recordGroupDefinitionsComponentSelector =
  createComponentSelectorV2<RecordGroupDefinition[]>({
    key: 'recordGroupDefinitionsComponentSelector',
    componentInstanceContext: ViewComponentInstanceContext,
    get:
      ({ instanceId }) =>
      ({ get }) => {
        const recordGroupIds = get(
          recordGroupIdsComponentState.atomFamily({
            instanceId,
          }),
        );

        return recordGroupIds.reduce<RecordGroupDefinition[]>(
          (acc, recordGroupId) => {
            const recordGroupDefinition = get(
              recordGroupDefinitionFamilyState(recordGroupId),
            );

            if (!isDefined(recordGroupDefinition)) {
              return acc;
            }

            return [...acc, recordGroupDefinition];
          },
          [],
        );
      },
  });
