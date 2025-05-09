import { RecordGroupDefinition } from '@twenty-modules/object-record/record-group/types/RecordGroupDefinition';
import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';

export const isRecordGroupTableSectionToggledComponentState =
  createComponentFamilyStateV2<boolean, RecordGroupDefinition['id']>({
    key: 'isRecordGroupTableSectionToggledComponentState',
    defaultValue: true,
    componentInstanceContext: ViewComponentInstanceContext,
  });
