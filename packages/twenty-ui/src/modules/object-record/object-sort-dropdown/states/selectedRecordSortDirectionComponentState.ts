import { ObjectSortDropdownComponentInstanceContext } from '@twenty-modules/object-record/object-sort-dropdown/states/context/ObjectSortDropdownComponentInstanceContext';
import { RecordSortDirection } from '@twenty-modules/object-record/record-sort/types/RecordSortDirection';
import { createComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/utils/createComponentStateV2';

export const selectedRecordSortDirectionComponentState =
  createComponentStateV2<RecordSortDirection>({
    key: 'selectedRecordSortDirectionComponentState',
    defaultValue: 'asc',
    componentInstanceContext: ObjectSortDropdownComponentInstanceContext,
  });
