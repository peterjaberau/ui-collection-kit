import { ReactNode, useEffect } from 'react';

import { useSelectableListHotKeys } from '@twenty-modules/ui/layout/selectable-list/hooks/internal/useSelectableListHotKeys';
import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { SelectableListContextProvider } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListContext';
import { selectableItemIdsComponentState } from '@twenty-modules/ui/layout/selectable-list/states/selectableItemIdsComponentState';
import { useSetRecoilComponentStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useSetRecoilComponentStateV2';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';
import { arrayToChunks } from '@twenty-ui/front/utils/array/arrayToChunks';

type SelectableListProps = {
  children: ReactNode;
  selectableItemIdArray?: string[];
  selectableItemIdMatrix?: string[][];
  onSelect?: (selected: string) => void;
  hotkeyScope: string;
  selectableListInstanceId: string;
};

export const SelectableList = ({
  children,
  hotkeyScope,
  selectableItemIdArray,
  selectableItemIdMatrix,
  selectableListInstanceId,
  onSelect,
}: SelectableListProps) => {
  useSelectableListHotKeys(selectableListInstanceId, hotkeyScope, onSelect);

  const setSelectableItemIds = useSetRecoilComponentStateV2(
    selectableItemIdsComponentState,
    selectableListInstanceId,
  );

  useEffect(() => {
    if (!selectableItemIdArray && !selectableItemIdMatrix) {
      throw new Error(
        'Either selectableItemIdArray or selectableItemIdsMatrix must be provided',
      );
    }

    if (isDefined(selectableItemIdMatrix)) {
      setSelectableItemIds(selectableItemIdMatrix);
    }

    if (isDefined(selectableItemIdArray)) {
      setSelectableItemIds(arrayToChunks(selectableItemIdArray, 1));
    }
  }, [selectableItemIdArray, selectableItemIdMatrix, setSelectableItemIds]);

  return (
    <SelectableListComponentInstanceContext.Provider
      value={{
        instanceId: selectableListInstanceId,
      }}
    >
      <SelectableListContextProvider value={{ hotkeyScope }}>
        {children}
      </SelectableListContextProvider>
    </SelectableListComponentInstanceContext.Provider>
  );
};
