import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const resizeFieldOffsetComponentState = createComponentStateV2<number>({
  key: 'resizeFieldOffsetComponentState',
  defaultValue: 0,
  componentInstanceContext: RecordTableComponentInstanceContext,
});
