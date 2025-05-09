import { useSelectableListListenToEnterHotkeyOnItem } from '@twenty-modules/ui/layout/selectable-list/hooks/useSelectableListListenToEnterHotkeyOnItem';
import { useSelectableListContextOrThrow } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListContext';

export const SelectableListItemHotkeyEffect = ({
  itemId,
  onEnter,
}: {
  itemId: string;
  onEnter: () => void;
}) => {
  const { hotkeyScope } = useSelectableListContextOrThrow();

  useSelectableListListenToEnterHotkeyOnItem({
    hotkeyScope,
    itemId,
    onEnter,
  });
  return null;
};
