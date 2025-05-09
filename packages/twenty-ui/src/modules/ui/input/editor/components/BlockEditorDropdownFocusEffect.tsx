import { BLOCK_SCHEMA } from '@twenty-modules/activities/blocks/constants/Schema';
import { isSlashMenuOpenComponentState } from '@twenty-modules/ui/input/editor/states/isSlashMenuOpenComponentState';
import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { useSetActiveDropdownFocusIdAndMemorizePrevious } from '@twenty-modules/ui/layout/dropdown/hooks/useSetFocusedDropdownIdAndMemorizePrevious';
import { useRecoilComponentCallbackStateV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentCallbackStateV2';
import { useRecoilCallback } from 'recoil';

export type BlockEditorDropdownFocusEffectProps = {
  editor: typeof BLOCK_SCHEMA.BlockNoteEditor;
};

export const BlockEditorDropdownFocusEffect = ({
  editor,
}: BlockEditorDropdownFocusEffectProps) => {
  const isSlashMenuOpenState = useRecoilComponentCallbackStateV2(
    isSlashMenuOpenComponentState,
  );

  const { setActiveDropdownFocusIdAndMemorizePrevious } =
    useSetActiveDropdownFocusIdAndMemorizePrevious();

  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  const updateCallBack = useRecoilCallback(
    ({ snapshot, set }) =>
      (event: any) => {
        // TODO: This triggers before the onClick event of the slash menu item, so the click outside of the editor dropdown is triggered and everything closes.
        // This is due to useRecoilCallback being executed before the onClick event of the slash menu item.
        const eventWantsToOpen = event.show === true;

        const isAlreadyOpen = snapshot
          .getLoadable(isSlashMenuOpenState)
          .getValue();

        const shouldOpen = eventWantsToOpen && !isAlreadyOpen;

        if (shouldOpen) {
          setActiveDropdownFocusIdAndMemorizePrevious('custom-slash-menu');
          set(isSlashMenuOpenState, true);
          return;
        }

        const eventWantsToClose = event.show === false;

        const isAlreadyClosed = !isAlreadyOpen;

        const shouldClose = eventWantsToClose && !isAlreadyClosed;

        if (shouldClose) {
          goBackToPreviousDropdownFocusId();
          set(isSlashMenuOpenState, false);
          return;
        }
      },
    [
      isSlashMenuOpenState,
      setActiveDropdownFocusIdAndMemorizePrevious,
      goBackToPreviousDropdownFocusId,
    ],
  );

  editor.suggestionMenus.on('update /', updateCallBack);

  return <></>;
};
