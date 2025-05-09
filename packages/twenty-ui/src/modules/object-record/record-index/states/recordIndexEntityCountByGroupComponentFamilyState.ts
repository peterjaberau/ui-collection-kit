import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const recordIndexEntityCountByGroupComponentFamilyState =
  createComponentFamilyStateV2<number | undefined, RecordGroupDefinition['id']>(
    {
      key: 'recordIndexEntityCountByGroupComponentFamilyState',
      defaultValue: undefined,
      componentInstanceContext: ViewComponentInstanceContext,
    },
  );
