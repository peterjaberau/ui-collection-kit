import { createComponentFamilyStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentFamilyStateV2';
import { ViewComponentInstanceContext } from '@twenty-modules/views/states/contexts/ViewComponentInstanceContext';
import { ViewType } from '@twenty-modules/views/types/ViewType';

export const recordIndexRecordGroupHideComponentFamilyState =
  createComponentFamilyStateV2<boolean, ViewType>({
    key: 'recordIndexRecordGroupHideComponentFamilyState',
    defaultValue: ({ familyKey }) => {
      switch (familyKey) {
        case ViewType.Kanban:
          return false;
        case ViewType.Table:
          return false;
        default:
          return false;
      }
    },
    componentInstanceContext: ViewComponentInstanceContext,
  });
