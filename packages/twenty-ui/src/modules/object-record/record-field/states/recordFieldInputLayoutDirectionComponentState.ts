import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { FieldInputLayoutDirection } from '@twenty-modules/object-record/record-field/types/FieldInputLayoutDirection';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const recordFieldInputLayoutDirectionComponentState =
  createComponentStateV2<FieldInputLayoutDirection>({
    key: 'recordFieldInputLayoutDirectionComponentState',
    defaultValue: 'upward',
    componentInstanceContext: RecordFieldComponentInstanceContext,
  });
