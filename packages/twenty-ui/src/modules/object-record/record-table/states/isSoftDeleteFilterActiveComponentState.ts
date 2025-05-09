import { RecordFiltersComponentInstanceContext } from '@twenty-modules/object-record/record-filter/states/context/RecordFiltersComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const isSoftDeleteFilterActiveComponentState =
  createComponentStateV2<boolean>({
    key: 'isSoftDeleteFilterActiveComponentState',
    defaultValue: false,
    componentInstanceContext: RecordFiltersComponentInstanceContext,
  });
