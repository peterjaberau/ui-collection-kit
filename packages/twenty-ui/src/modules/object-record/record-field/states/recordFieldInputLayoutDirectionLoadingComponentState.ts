import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const recordFieldInputLayoutDirectionLoadingComponentState =
  createComponentStateV2<boolean>({
    key: 'recordFieldInputLayoutDirectionLoadingComponentState',
    defaultValue: true,
    componentInstanceContext: RecordFieldComponentInstanceContext,
  });
