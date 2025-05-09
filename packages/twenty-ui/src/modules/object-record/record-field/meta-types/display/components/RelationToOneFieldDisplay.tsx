import { CoreObjectNameSingular } from '@twenty-modules/object-metadata/types/CoreObjectNameSingular';
import { RecordChip } from '@twenty-modules/object-record/components/RecordChip';
import { FieldContext } from '@twenty-modules/object-record/record-field/contexts/FieldContext';
import { useRelationToOneFieldDisplay } from '@twenty-modules/object-record/record-field/meta-types/hooks/useRelationToOneFieldDisplay';
import { useContext } from 'react';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RelationToOneFieldDisplay = () => {
  const { fieldValue, fieldDefinition, generateRecordChipData } =
    useRelationToOneFieldDisplay();

  const { disableChipClick } = useContext(FieldContext);

  if (
    !isDefined(fieldValue) ||
    !isDefined(fieldDefinition?.metadata.relationObjectMetadataNameSingular)
  ) {
    return null;
  }

  const isWorkspaceMemberFieldMetadataRelation =
    fieldDefinition.metadata.relationObjectMetadataNameSingular ===
    CoreObjectNameSingular.WorkspaceMember;
  const recordChipData = generateRecordChipData(fieldValue);

  return (
    <RecordChip
      key={recordChipData.recordId}
      objectNameSingular={recordChipData.objectNameSingular}
      record={fieldValue}
      forceDisableClick={
        isWorkspaceMemberFieldMetadataRelation || disableChipClick
      }
    />
  );
};
