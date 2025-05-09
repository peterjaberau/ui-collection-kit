import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const recordIndexRecordIdsByGroupComponentFamilyState =
  createComponentFamilyStateV2<string[], RecordGroupDefinition['id']>({
    key: 'recordIndexRecordIdsByGroupComponentFamilyState',
    defaultValue: [],
    componentInstanceContext: ViewComponentInstanceContext,
  });
