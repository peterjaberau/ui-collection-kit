import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const onColumnsChangeComponentState = createComponentStateV2<
  ((columns: ColumnDefinition<FieldMetadata>[]) => void) | undefined
>({
  key: 'onColumnsChangeComponentState',
  defaultValue: undefined,
  componentInstanceContext: RecordTableComponentInstanceContext,
});
