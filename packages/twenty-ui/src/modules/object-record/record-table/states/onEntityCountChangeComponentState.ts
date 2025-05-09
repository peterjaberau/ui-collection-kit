import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const onEntityCountChangeComponentState = createComponentStateV2<
  ((entityCount?: number, currentRecordGroupId?: string) => void) | undefined
>({
  key: 'onEntityCountChangeComponentState',
  defaultValue: undefined,
  componentInstanceContext: RecordTableComponentInstanceContext,
});
