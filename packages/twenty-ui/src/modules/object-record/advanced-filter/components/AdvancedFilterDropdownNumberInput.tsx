import { useApplyObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useApplyObjectFilterDropdownFilterValue';
import { useObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useObjectFilterDropdownFilterValue';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { TextInputV2 } from '@twenty-modules/ui/input/components/TextInputV2';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const AdvancedFilterDropdownNumberInput = () => {
  const selectedOperandInDropdown = useRecoilComponentValueV2(
    selectedOperandInDropdownComponentState,
  );

  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const { objectFilterDropdownFilterValue } =
    useObjectFilterDropdownFilterValue();

  const { applyObjectFilterDropdownFilterValue } =
    useApplyObjectFilterDropdownFilterValue();

  const handleChange = (newValue: string) => {
    applyObjectFilterDropdownFilterValue(newValue);
  };

  if (!selectedOperandInDropdown || !fieldMetadataItemUsedInDropdown) {
    return null;
  }

  return (
    <TextInputV2
      value={objectFilterDropdownFilterValue}
      onChange={handleChange}
      placeholder="Enter value"
      fullWidth
      type="number"
    />
  );
};
