import { hasUserSelectedCommandState } from '@twenty-modules/command-menu/states/hasUserSelectedCommandState';
import { useSelectableList } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableList';
import { selectedItemIdComponentState } from '@twenty-modules/ui/layout/selectable-list/states/selectedItemIdComponentState';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const CommandMenuDefaultSelectionEffect = ({
  selectableItemIds,
}: {
  selectableItemIds: string[];
}) => {
  const { setSelectedItemId } = useSelectableList('command-menu-list');

  const selectedItemId = useRecoilComponentValueV2(
    selectedItemIdComponentState,
    'command-menu-list',
  );

  const hasUserSelectedCommand = useRecoilValue(hasUserSelectedCommandState);

  useEffect(() => {
    if (
      isDefined(selectedItemId) &&
      selectableItemIds.includes(selectedItemId) &&
      hasUserSelectedCommand
    ) {
      return;
    }

    if (selectableItemIds.length > 0) {
      setSelectedItemId(selectableItemIds[0]);
    }
  }, [
    hasUserSelectedCommand,
    selectableItemIds,
    selectedItemId,
    setSelectedItemId,
  ]);

  return null;
};
