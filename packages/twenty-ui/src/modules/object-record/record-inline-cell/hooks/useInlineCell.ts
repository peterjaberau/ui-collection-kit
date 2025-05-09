import { useContext } from 'react';
import { useRecoilState } from 'recoil';

import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';

import { useInitDraftValueV2 } from '@twenty-modules/object-record/record-field/hooks/useInitDraftValueV2';
import { RecordFieldComponentInstanceContext } from '@twenty-modules/object-record/record-field/states/contexts/RecordFieldComponentInstanceContext';
import { useRecordInlineCellContext } from '@twenty-modules/object-record/record-inline-cell/components/RecordInlineCellContext';
import { INLINE_CELL_HOTKEY_SCOPE_MEMOIZE_KEY } from '@twenty-modules/object-record/record-inline-cell/constants/InlineCellHotkeyScopeMemoizeKey';
import { getDropdownFocusIdForRecordField } from '@twenty-modules/object-record/utils/getDropdownFocusIdForRecordField';
import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { useSetActiveDropdownFocusIdAndMemorizePrevious } from '@twenty-modules/ui/layout/dropdown/hooks/useSetFocusedDropdownIdAndMemorizePrevious';
import { useAvailableComponentInstanceIdOrThrow } from '@twenty-modules/ui/utilities/state/component-state/hooks/useAvailableComponentInstanceIdOrThrow';
import { isInlineCellInEditModeScopedState } from '../states/isInlineCellInEditModeScopedState';

export const useInlineCell = (
  recordFieldComponentInstanceIdFromProps?: string,
) => {
  const { recordId, fieldDefinition } = useContext(FieldContext);

  const recordFieldComponentInstanceId = useAvailableComponentInstanceIdOrThrow(
    RecordFieldComponentInstanceContext,
    recordFieldComponentInstanceIdFromProps,
  );

  const [isInlineCellInEditMode, setIsInlineCellInEditMode] = useRecoilState(
    isInlineCellInEditModeScopedState(recordFieldComponentInstanceId),
  );

  const { onOpenEditMode, onCloseEditMode } = useRecordInlineCellContext();

  const { setActiveDropdownFocusIdAndMemorizePrevious } =
    useSetActiveDropdownFocusIdAndMemorizePrevious();
  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  const { goBackToPreviousHotkeyScope } = usePreviousHotkeyScope(
    INLINE_CELL_HOTKEY_SCOPE_MEMOIZE_KEY,
  );

  const initFieldInputDraftValue = useInitDraftValueV2();

  const closeInlineCell = () => {
    onCloseEditMode?.();
    setIsInlineCellInEditMode(false);

    goBackToPreviousHotkeyScope();

    goBackToPreviousDropdownFocusId();
  };

  const openInlineCell = () => {
    onOpenEditMode?.();
    setIsInlineCellInEditMode(true);
    initFieldInputDraftValue({
      recordId,
      fieldDefinition,
      fieldComponentInstanceId: recordFieldComponentInstanceId,
    });

    setActiveDropdownFocusIdAndMemorizePrevious(
      getDropdownFocusIdForRecordField(
        recordId,
        fieldDefinition.fieldMetadataId,
        'inline-cell',
      ),
    );
  };

  return {
    isInlineCellInEditMode,
    closeInlineCell,
    openInlineCell,
  };
};
