import { FieldMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { ColumnDefinition } from '@twenty-modules/object-record/record-table/types/ColumnDefinition';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const availableFieldDefinitionsComponentState = createComponentStateV2<
  ColumnDefinition<FieldMetadata>[]
>({
  key: 'availableFieldDefinitionsComponentState',
  defaultValue: [],
  componentInstanceContext: ViewComponentInstanceContext,
});
