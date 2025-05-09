import { SelectableListComponentInstanceContext } from '@twenty-modules/ui/layout/selectable-list/states/contexts/SelectableListComponentInstanceContext';
import { selectedItemIdComponentState } from '@twenty-modules/ui/layout/selectable-list/states/selectedItemIdComponentState';
import { useScopedHotkeys } from '@twenty-modules/ui/utilities/hotkey/hooks/useScopedHotkeys';
import { getSnapshotValue } from '@twenty-modules/ui/utilities/recoil-scope/utils/getSnapshotValue';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { isNonEmptyString } from '@sniptt/guards';
import { useRecoilCallback } from 'recoil';
import { Key } from 'ts-key-enum';

export const useSelectableListListenToEnterHotkeyOnItem = ({
  hotkeyScope,
  itemId,
  onEnter,
}: {
  hotkeyScope: string;
  itemId: string;
  onEnter: () => void;
}) => {
  const instanceId = useAvailableComponentInstanceIdOrThrow(
    SelectableListComponentInstanceContext,
  );
  useScopedHotkeys(
    Key.Enter,
    useRecoilCallback(
      ({ snapshot }) =>
        () => {
          const selectedItemId = getSnapshotValue(
            snapshot,
            selectedItemIdComponentState.atomFamily({
              instanceId,
            }),
          );

          if (isNonEmptyString(selectedItemId) && selectedItemId === itemId) {
            onEnter?.();
          }
        },
      [instanceId, itemId, onEnter],
    ),
    hotkeyScope,
    [itemId, onEnter],
  );
};
