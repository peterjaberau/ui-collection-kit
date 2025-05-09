import { useOpenActivityTargetCellEditMode } from '@twenty-modules/activities/inline-cell/hooks/useOpenActivityTargetCellEditMode';
import { Note } from '@twenty-modules/activities/types/Note';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { Task } from '@twenty-modules/activities/types/Task';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { getActivityTargetObjectRecords } from '@twenty-modules/activities/utils/getActivityTargetObjectRecords';
import { objectMetadataItemsState } from '@twenty-modules/object-metadata/states/objectMetadataItemsState';
import { useOpenRelationFromManyFieldInput } from '@twenty-modules/object-record/record-field/meta-types/input/hooks/useOpenRelationFromManyFieldInput';
import { useOpenRelationToOneFieldInput } from '@twenty-modules/object-record/record-field/meta-types/input/hooks/useOpenRelationToOneFieldInput';
import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import {
  FieldMetadata,
  FieldRelationFromManyValue,
  FieldRelationValue,
} from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { isFieldRelationFromManyObjects } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelationFromManyObjects';
import { isFieldRelationToOneObject } from '@twenty-modules/object-record/record-field/types/guards/isFieldRelationToOneObject';
import { INLINE_CELL_HOTKEY_SCOPE_MEMOIZE_KEY } from '@twenty-modules/object-record/record-inline-cell/constants/InlineCellHotkeyScopeMemoizeKey';
import { recordStoreFamilyState } from '@twenty-modules/object-record/record-store/states/recordStoreFamilyState';
import { recordStoreFamilySelector } from '@twenty-modules/object-record/record-store/states/selectors/recordStoreFamilySelector';
import { DEFAULT_CELL_SCOPE } from '@twenty-modules/object-record/record-table/record-table-cell/hooks/useOpenRecordTableCellV2';
import { usePreviousHotkeyScope } from '@twenty-modules/ui/utilities/hotkey/hooks/usePreviousHotkeyScope';
import { useRecoilCallback } from 'recoil';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const useOpenFieldInputEditMode = () => {
  const { openRelationToOneFieldInput } = useOpenRelationToOneFieldInput();
  const { openRelationFromManyFieldInput } =
    useOpenRelationFromManyFieldInput();

  const { openActivityTargetCellEditMode } =
    useOpenActivityTargetCellEditMode();

  const { setHotkeyScopeAndMemorizePreviousScope } = usePreviousHotkeyScope(
    INLINE_CELL_HOTKEY_SCOPE_MEMOIZE_KEY,
  );

  const openFieldInput = useRecoilCallback(
    ({ snapshot }) =>
      ({
        fieldDefinition,
        recordId,
      }: {
        fieldDefinition: FieldDefinition<FieldMetadata>;
        recordId: string;
      }) => {
        if (
          isFieldRelationFromManyObjects(fieldDefinition) &&
          ['taskTarget', 'noteTarget'].includes(
            fieldDefinition.metadata.relationObjectMetadataNameSingular,
          )
        ) {
          const fieldValue = snapshot
            .getLoadable<FieldRelationValue<FieldRelationFromManyValue>>(
              recordStoreFamilySelector({
                recordId,
                fieldName: fieldDefinition.metadata.fieldName,
              }),
            )
            .getValue();

          const activity = snapshot
            .getLoadable(recordStoreFamilyState(recordId))
            .getValue();

          const objectMetadataItems = snapshot
            .getLoadable(objectMetadataItemsState)
            .getValue();

          const activityTargetObjectRecords = getActivityTargetObjectRecords({
            activityRecord: activity as Task | Note,
            objectMetadataItems,
            activityTargets: fieldValue as NoteTarget[] | TaskTarget[],
          });

          openActivityTargetCellEditMode({
            recordPickerInstanceId: `relation-from-many-field-input-${recordId}`,
            activityTargetObjectRecords,
          });
          return;
        }

        if (isFieldRelationToOneObject(fieldDefinition)) {
          openRelationToOneFieldInput({
            fieldName: fieldDefinition.metadata.fieldName,
            recordId: recordId,
          });

          return;
        }

        if (isFieldRelationFromManyObjects(fieldDefinition)) {
          if (
            isDefined(
              fieldDefinition.metadata.relationObjectMetadataNameSingular,
            )
          ) {
            openRelationFromManyFieldInput({
              fieldName: fieldDefinition.metadata.fieldName,
              objectNameSingular:
                fieldDefinition.metadata.relationObjectMetadataNameSingular,
              recordId: recordId,
            });
            return;
          }
        }

        setHotkeyScopeAndMemorizePreviousScope(
          DEFAULT_CELL_SCOPE.scope,
          DEFAULT_CELL_SCOPE.customScopes,
        );
      },
    [
      openActivityTargetCellEditMode,
      openRelationFromManyFieldInput,
      openRelationToOneFieldInput,
      setHotkeyScopeAndMemorizePreviousScope,
    ],
  );

  return {
    openFieldInput: openFieldInput,
    closeFieldInput: () => {},
  };
};
