import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const recordGroupIdsComponentState = createComponentStateV2<
  RecordGroupDefinition['id'][]
>({
  key: 'recordGroupIdsComponentState',
  defaultValue: [],
  componentInstanceContext: ViewComponentInstanceContext,
});
