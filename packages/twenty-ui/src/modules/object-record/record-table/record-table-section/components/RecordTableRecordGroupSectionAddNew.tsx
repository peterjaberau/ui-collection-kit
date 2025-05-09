import { useCurrentRecordGroupId } from '@twenty-modules/object-record/record-group/hooks/useCurrentRecordGroupId';
import { recordGroupDefinitionFamilyState } from '@twenty-modules/object-record/record-group/states/recordGroupDefinitionFamilyState';
import { recordIndexAllRecordIdsComponentSelector } from '@twenty-modules/object-record/record-index/states/selectors/recordIndexAllRecordIdsComponentSelector';
import { useRecordTableContextOrThrow } from '@twenty-modules/object-record/record-table/contexts/RecordTableContext';
import { useCreateNewIndexRecord } from '@twenty-modules/object-record/record-table/hooks/useCreateNewIndexRecord';
import { RecordTableActionRow } from '@twenty-modules/object-record/record-table/record-table-row/components/RecordTableActionRow';
import { useHasObjectReadOnlyPermission } from '@twenty-modules/settings/roles/hooks/useHasObjectReadOnlyPermission';
import { useRecoilComponentValueV2 } from '@twenty-modules/ui/utilities/state/component-state/hooks/useRecoilComponentValueV2';
import { t } from '@lingui/core/macro';
import { useRecoilValue } from 'recoil';
import { IconPlus } from '@twenty-ui/display';

export const RecordTableRecordGroupSectionAddNew = () => {
  const { objectMetadataItem } = useRecordTableContextOrThrow();

  const currentRecordGroupId = useCurrentRecordGroupId();

  const recordIds = useRecoilComponentValueV2(
    recordIndexAllRecordIdsComponentSelector,
  );

  const recordGroup = useRecoilValue(
    recordGroupDefinitionFamilyState(currentRecordGroupId),
  );

  const hasObjectReadOnlyPermission = useHasObjectReadOnlyPermission();

  const { createNewIndexRecord } = useCreateNewIndexRecord({
    objectMetadataItem,
  });

  const fieldMetadataItem = objectMetadataItem.fields.find(
    (field) => field.id === recordGroup?.fieldMetadataId,
  );

  if (hasObjectReadOnlyPermission) {
    return null;
  }

  return (
    <RecordTableActionRow
      draggableId={`add-new-record-${currentRecordGroupId}`}
      draggableIndex={recordIds.length + 2}
      LeftIcon={IconPlus}
      text={t`Add new`}
      onClick={() => {
        if (!fieldMetadataItem) {
          return;
        }

        createNewIndexRecord({
          position: 'last',
          [fieldMetadataItem.name]: recordGroup?.value,
        });
      }}
    />
  );
};
