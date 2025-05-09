import { ObjectFilterDropdownSubFieldSelect } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterDropdownSubFieldSelect';
import { ObjectFilterOperandSelectAndInput } from '@twenty-modules/object-record/object-filter-dropdown/components/ObjectFilterOperandSelectAndInput';
import { objectFilterDropdownFilterIsSelectedComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownFilterIsSelectedComponentState';
import { objectFilterDropdownIsSelectingCompositeFieldComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownIsSelectingCompositeFieldComponentState';
import { useRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentStateV2';
import { ViewBarFilterDropdownAdvancedFilterButton } from '@twenty-modules/views/components/ViewBarFilterDropdownAdvancedFilterButton';
import { VIEW_BAR_FILTER_DROPDOWN_ID } from '@twenty-modules/views/constants/ViewBarFilterDropdownId';
import { ObjectFilterDropdownFieldSelect } from '../../object-record/object-filter-dropdown/components/ObjectFilterDropdownFieldSelect';

export const ViewBarFilterDropdownContent = () => {
  const [objectFilterDropdownIsSelectingCompositeField] =
    useRecoilComponentStateV2(
      objectFilterDropdownIsSelectingCompositeFieldComponentState,
      VIEW_BAR_FILTER_DROPDOWN_ID,
    );

  const [objectFilterDropdownFilterIsSelected] = useRecoilComponentStateV2(
    objectFilterDropdownFilterIsSelectedComponentState,
    VIEW_BAR_FILTER_DROPDOWN_ID,
  );

  const shouldShowCompositeSelectionSubMenu =
    objectFilterDropdownIsSelectingCompositeField;

  const shouldShowFilterInput = objectFilterDropdownFilterIsSelected;

  return (
    <>
      {shouldShowFilterInput ? (
        <ObjectFilterOperandSelectAndInput
          filterDropdownId={VIEW_BAR_FILTER_DROPDOWN_ID}
        />
      ) : shouldShowCompositeSelectionSubMenu ? (
        <ObjectFilterDropdownSubFieldSelect />
      ) : (
        <>
          <ObjectFilterDropdownFieldSelect />
          <ViewBarFilterDropdownAdvancedFilterButton />
        </>
      )}
    </>
  );
};
