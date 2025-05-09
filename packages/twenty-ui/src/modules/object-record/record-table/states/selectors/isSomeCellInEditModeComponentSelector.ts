import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { recordTableCellEditModePositionComponentState } from '@twenty-modules/object-record/record-table/states/recordTableCellEditModePositionComponentState';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const isSomeCellInEditModeComponentSelector = createComponentSelectorV2({
  key: 'isSomeCellInEditModeComponentSelector',
  componentInstanceContext: RecordTableComponentInstanceContext,
  get:
    ({ instanceId }) =>
    ({ get }) => {
      const currentTableCellInEditModePosition = get(
        recordTableCellEditModePositionComponentState.atomFamily({
          instanceId,
        }),
      );

      return isDefined(currentTableCellInEditModePosition);
    },
});
