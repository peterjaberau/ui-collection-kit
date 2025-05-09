import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { tableColumnsComponentState } from '@twenty-modules/object-record/record-table/states/tableColumnsComponentState';
import { createComponentSelectorV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentSelectorV2';

export const numberOfTableColumnsComponentSelector = createComponentSelectorV2({
  key: 'numberOfTableColumnsComponentSelector',
  componentInstanceContext: RecordTableComponentInstanceContext,
  get:
    ({ instanceId }) =>
    ({ get }) =>
      get(tableColumnsComponentState.atomFamily({ instanceId })).length,
});
