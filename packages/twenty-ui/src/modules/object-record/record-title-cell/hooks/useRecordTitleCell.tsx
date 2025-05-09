import { useInitDraftValueV2 } from '@twenty-modules/object-record/record-field/hooks/useInitDraftValueV2';
import { recordIndexFieldDefinitionsState } from '@twenty-modules/object-record/record-index/states/recordIndexFieldDefinitionsState';
import { INLINE_CELL_HOTKEY_SCOPE_MEMOIZE_KEY } from '@twenty-modules/object-record/record-inline-cell/constants/InlineCellHotkeyScopeMemoizeKey';
import { isInlineCellInEditModeScopedState } from '@twenty-modules/object-record/record-inline-cell/states/isInlineCellInEditModeScopedState';
import { RecordTitleCellContainerType } from '@twenty-modules/object-record/record-title-cell/types/RecordTitleCellContainerType';
import { getRecordTitleCellId } from '@twenty-modules/object-record/record-title-cell/utils/getRecordTitleCellId';
import { TitleInputHotkeyScope } from '@twenty-modules/ui/input/types/TitleInputHotkeyScope';
import { useGoBackToPreviousDropdownFocusId } from '@twenty-modules/ui/layout/dropdown/hooks/useGoBackToPreviousDropdownFocusId';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { HotkeyScope } from '@twenty-modules/ui/utilities/hotkey/types/HotkeyScope';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useRecordTitleCell = () => {
  const { goBackToPreviousDropdownFocusId } =
    useGoBackToPreviousDropdownFocusId();

  const {
    setHotkeyScopeAndMemorizePreviousScope,
    goBackToPreviousHotkeyScope,
  } = usePreviousHotkeyScope(INLINE_CELL_HOTKEY_SCOPE_MEMOIZE_KEY);

  const closeRecordTitleCell = useRecoilCallback(
    ({ set }) =>
      ({
        recordId,
        fieldMetadataId,
        containerType,
      }: {
        recordId: string;
        fieldMetadataId: string;
        containerType: RecordTitleCellContainerType;
      }) => {
        set(
          isInlineCellInEditModeScopedState(
            getRecordTitleCellId(recordId, fieldMetadataId, containerType),
          ),
          false,
        );

        goBackToPreviousHotkeyScope();

        goBackToPreviousDropdownFocusId();
      },
    [goBackToPreviousDropdownFocusId, goBackToPreviousHotkeyScope],
  );

  const initFieldInputDraftValue = useInitDraftValueV2();

  const openRecordTitleCell = useRecoilCallback(
    ({ set, snapshot }) =>
      ({
        recordId,
        fieldMetadataId,
        containerType,
        customEditHotkeyScopeForField,
      }: {
        recordId: string;
        fieldMetadataId: string;
        containerType: RecordTitleCellContainerType;
        customEditHotkeyScopeForField?: HotkeyScope;
      }) => {
        if (isDefined(customEditHotkeyScopeForField)) {
          setHotkeyScopeAndMemorizePreviousScope(
            customEditHotkeyScopeForField.scope,
            customEditHotkeyScopeForField.customScopes,
          );
        } else {
          setHotkeyScopeAndMemorizePreviousScope(
            TitleInputHotkeyScope.TitleInput,
          );
        }

        const recordTitleCellId = getRecordTitleCellId(
          recordId,
          fieldMetadataId,
          containerType,
        );
        set(isInlineCellInEditModeScopedState(recordTitleCellId), true);

        const recordIndexFieldDefinitions = snapshot
          .getLoadable(recordIndexFieldDefinitionsState)
          .getValue();

        const fieldDefinition = recordIndexFieldDefinitions.find(
          (field) => field.fieldMetadataId === fieldMetadataId,
        );

        if (!fieldDefinition) {
          return;
        }

        initFieldInputDraftValue({
          recordId,
          fieldDefinition,
          fieldComponentInstanceId: recordTitleCellId,
        });
      },
    [initFieldInputDraftValue, setHotkeyScopeAndMemorizePreviousScope],
  );

  return {
    closeRecordTitleCell,
    openRecordTitleCell,
  };
};
