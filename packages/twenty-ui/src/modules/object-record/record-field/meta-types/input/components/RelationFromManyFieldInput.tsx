import { useContext } from 'react';

import { useActivityTargetObjectRecords } from '@twenty-modules/activities/hooks/useActivityTargetObjectRecords';
import { useUpdateActivityTargetFromCell } from '@twenty-modules/activities/inline-cell/hooks/useUpdateActivityTargetFromCell';
import { NoteTarget } from '@twenty-modules/activities/types/NoteTarget';
import { TaskTarget } from '@twenty-modules/activities/types/TaskTarget';
import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { useRelationField } from '@twenty-modules/object-record/record-field/meta-types/hooks/useRelationField';
import { useAddNewRecordAndOpenRightDrawer } from '@twenty-modules/object-record/record-field/meta-types/input/hooks/useAddNewRecordAndOpenRightDrawer';
import { useUpdateRelationFromManyFieldInput } from '@twenty-modules/object-record/record-field/meta-types/input/hooks/useUpdateRelationFromManyFieldInput';
import { recordFieldInputLayoutDirectionComponentState } from '@twenty-modules/object-record/record-field/states/recordFieldInputLayoutDirectionComponentState';
import { FieldDefinition } from '@twenty-modules/object-record/record-field/types/FieldDefinition';
import { FieldInputEvent } from '@twenty-modules/object-record/record-field/types/FieldInputEvent';
import { FieldRelationMetadata } from '@twenty-modules/object-record/record-field/types/FieldMetadata';
import { MultipleRecordPicker } from '@twenty-modules/object-record/record-picker/multiple-record-picker/components/MultipleRecordPicker';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';

type RelationFromManyFieldInputProps = {
  onSubmit?: FieldInputEvent;
};

export const RelationFromManyFieldInput = ({
  onSubmit,
}: RelationFromManyFieldInputProps) => {
  const { fieldDefinition, recordId } = useContext(FieldContext);
  const recordPickerInstanceId = `relation-from-many-field-input-${recordId}`;

  const { updateRelation } = useUpdateRelationFromManyFieldInput();
  const fieldName = fieldDefinition.metadata.fieldName;
  const objectMetadataNameSingular =
    fieldDefinition.metadata.objectMetadataNameSingular;

  const { updateActivityTargetFromCell } = useUpdateActivityTargetFromCell({
    activityObjectNameSingular: objectMetadataNameSingular as
      | CoreObjectNameSingular.Note
      | CoreObjectNameSingular.Task,
    activityId: recordId,
  });

  const { fieldValue } = useRelationField();

  const handleSubmit = () => {
    onSubmit?.(() => {});
  };

  const isRelationFromActivityTargets =
    (fieldName === 'noteTargets' &&
      objectMetadataNameSingular === CoreObjectNameSingular.Note) ||
    (fieldName === 'taskTargets' &&
      objectMetadataNameSingular === CoreObjectNameSingular.Task);

  const { activityTargetObjectRecords } = useActivityTargetObjectRecords(
    recordId,
    fieldValue as NoteTarget[] | TaskTarget[],
  );

  const relationFieldDefinition =
    fieldDefinition as FieldDefinition<FieldRelationMetadata>;

  const { objectMetadataItem: relationObjectMetadataItem } =
    useObjectMetadataItem({
      objectNameSingular:
        relationFieldDefinition.metadata.relationObjectMetadataNameSingular,
    });

  const relationFieldMetadataItem = relationObjectMetadataItem.fields.find(
    ({ id }) => id === relationFieldDefinition.metadata.relationFieldMetadataId,
  );

  const { createNewRecordAndOpenRightDrawer } =
    useAddNewRecordAndOpenRightDrawer({
      relationObjectMetadataNameSingular:
        relationFieldDefinition.metadata.relationObjectMetadataNameSingular,
      relationObjectMetadataItem,
      relationFieldMetadataItem,
      recordId,
    });

  const layoutDirection = useRecoilComponentValueV2(
    recordFieldInputLayoutDirectionComponentState,
  );

  return (
    <MultipleRecordPicker
      componentInstanceId={recordPickerInstanceId}
      onSubmit={handleSubmit}
      onChange={(morphItem) => {
        if (isRelationFromActivityTargets) {
          updateActivityTargetFromCell({
            morphItem,
            activityTargetWithTargetRecords: activityTargetObjectRecords,
            recordPickerInstanceId,
          });
        } else {
          updateRelation(morphItem);
        }
      }}
      onCreate={
        !isRelationFromActivityTargets
          ? createNewRecordAndOpenRightDrawer
          : undefined
      }
      onClickOutside={handleSubmit}
      layoutDirection={
        layoutDirection === 'downward'
          ? 'search-bar-on-top'
          : 'search-bar-on-bottom'
      }
    />
  );
};
