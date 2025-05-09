import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { RecordChip } from '@twenty-modules/object-record/components/RecordChip';
import { useFindDuplicateRecords } from '@twenty-modules/object-record/hooks/useFindDuplicateRecords';
import { RecordDetailRecordsList } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailRecordsList';
import { RecordDetailRecordsListItem } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailRecordsListItem';
import { RecordDetailSection } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailSection';
import { RecordDetailSectionHeader } from '@twenty-modules/object-record/record-show/record-detail-section/components/RecordDetailSectionHeader';
import { isDefined } from '@ui-collection-kit/twenty-shared/src/utils';

export const RecordDetailDuplicatesSection = ({
  objectRecordId,
  objectNameSingular,
}: {
  objectRecordId: string;
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const { results: queryResults } = useFindDuplicateRecords({
    objectRecordIds: [objectRecordId],
    objectNameSingular,
    skip: !isDefined(objectMetadataItem.duplicateCriteria),
  });

  if (!queryResults || !queryResults[0] || queryResults[0].length === 0)
    return null;

  return (
    <RecordDetailSection>
      <RecordDetailSectionHeader title="Duplicates" />
      <RecordDetailRecordsList>
        {queryResults[0].slice(0, 5).map((duplicateRecord) => (
          <RecordDetailRecordsListItem key={duplicateRecord.id}>
            <RecordChip
              record={duplicateRecord}
              objectNameSingular={objectNameSingular}
            />
          </RecordDetailRecordsListItem>
        ))}
      </RecordDetailRecordsList>
    </RecordDetailSection>
  );
};
