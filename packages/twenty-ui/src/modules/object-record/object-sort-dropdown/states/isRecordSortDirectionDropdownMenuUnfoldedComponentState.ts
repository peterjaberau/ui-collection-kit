import { ObjectSortDropdownComponentInstanceContext } from '@twenty-modules/object-record/object-sort-dropdown/states/context/ObjectSortDropdownComponentInstanceContext';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const isRecordSortDirectionDropdownMenuUnfoldedComponentState =
  createComponentStateV2<boolean>({
    key: 'isRecordSortDirectionDropdownMenuUnfoldedComponentState',
    defaultValue: false,
    componentInstanceContext: ObjectSortDropdownComponentInstanceContext,
  });
