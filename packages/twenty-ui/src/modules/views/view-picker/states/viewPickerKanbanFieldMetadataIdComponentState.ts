import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const viewPickerKanbanFieldMetadataIdComponentState =
  createComponentStateV2<string>({
    key: 'viewPickerKanbanFieldMetadataIdComponentState',
    defaultValue: '',
    componentInstanceContext: ViewComponentInstanceContext,
  });
