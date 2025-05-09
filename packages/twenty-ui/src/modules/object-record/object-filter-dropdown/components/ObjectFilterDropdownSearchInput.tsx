import { ChangeEvent, useCallback, useState } from 'react';

import { fieldMetadataItemUsedInDropdownComponentSelector } from '@twenty-modules/object-record/object-filter-dropdown/states/fieldMetadataItemUsedInDropdownComponentSelector';
import { objectFilterDropdownSearchInputComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/objectFilterDropdownSearchInputComponentState';
import { selectedOperandInDropdownComponentState } from '@twenty-modules/object-record/object-filter-dropdown/states/selectedOperandInDropdownComponentState';
import { DropdownMenuSearchInput } from '@twenty-modules/ui/layout/dropdown/components/DropdownMenuSearchInput';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';

export const ObjectFilterDropdownSearchInput = () => {
  const fieldMetadataItemUsedInDropdown = useRecoilComponentValueV2(
    fieldMetadataItemUsedInDropdownComponentSelector,
  );

  const selectedOperandInDropdown = useRecoilComponentValueV2(
    selectedOperandInDropdownComponentState,
  );

  const objectFilterDropdownSearchInput = useRecoilComponentValueV2(
    objectFilterDropdownSearchInputComponentState,
  );

  const setObjectFilterDropdownSearchInput = useSetRecoilComponentStateV2(
    objectFilterDropdownSearchInputComponentState,
  );

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
  return (
    fieldMetadataItemUsedInDropdown &&
    selectedOperandInDropdown && (
      <DropdownMenuSearchInput
        ref={handleInputRef}
        autoFocus
        type="text"
        value={objectFilterDropdownSearchInput}
        placeholder={fieldMetadataItemUsedInDropdown.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setObjectFilterDropdownSearchInput(event.target.value);
        }}
      />
    )
  );
};
