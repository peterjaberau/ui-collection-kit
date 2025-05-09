import { ChangeEvent, useCallback, useState } from 'react';

import { useApplyObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useApplyObjectFilterDropdownFilterValue';
import { useObjectFilterDropdownFilterValue } from '@twenty-modules/object-record/object-filter-dropdown/hooks/useObjectFilterDropdownFilterValue';
import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { DropdownMenuInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuInput';
import { DropdownMenuItemsContainer } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuItemsContainer';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

export const ObjectFilterDropdownNumberInput = () => {
  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const { objectFilterDropdownFilterValue } =
    useObjectFilterDropdownFilterValue();

  const { applyObjectFilterDropdownFilterValue } =
    useApplyObjectFilterDropdownFilterValue();

  const [hasFocused, setHasFocused] = useState(false);

  const handleInputRef = useCallback(
    (node: HTMLInputElement | null) => {
      if (Boolean(node) && !hasFocused) {
        node?.focus();
        node?.select();
        setHasFocused(true);
      }
    },
    [hasFocused],
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    applyObjectFilterDropdownFilterValue(newValue);
  };

  return (
    <DropdownMenuItemsContainer>
      <DropdownMenuInput
        ref={handleInputRef}
        value={objectFilterDropdownFilterValue}
        autoFocus
        type="number"
        placeholder={fieldMetadataItemUsedInDropdown?.label}
        onChange={handleInputChange}
      />
    </DropdownMenuItemsContainer>
  );
};
