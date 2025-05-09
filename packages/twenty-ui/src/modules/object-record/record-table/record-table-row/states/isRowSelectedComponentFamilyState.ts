import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';

export const isRowSelectedComponentFamilyState = createComponentFamilyStateV2<
  boolean,
  string
>({
  key: 'isRowSelectedComponentFamilyState',
  defaultValue: false,
  componentInstanceContext: RecordTableComponentInstanceContext,
});
