import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';

import { RecordTableComponentInstanceContext } from '@twenty-modules/object-record/record-table/states/context/RecordTableComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ColumnDefinition } from '../types/ColumnDefinition';

export const availableTableColumnsComponentState = createComponentStateV2<
  ColumnDefinition<FieldMetadata>[]
>({
  key: 'availableTableColumnsComponentState',
  defaultValue: [],
  componentInstanceContext: RecordTableComponentInstanceContext,
});
