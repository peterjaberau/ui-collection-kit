import { CommandMenuContextChip } from '@twenty-modules/command-menu/components/CommandMenuContextChip';
import { CommandMenuContextRecordChipAvatars } from '@twenty-modules/command-menu/components/CommandMenuContextRecordChipAvatars';
import { getSelectedRecordsContextText } from '@twenty-modules/command-menu/utils/getRecordContextText';
import { useFindManyRecordsSelectedInContextStore } from '@twenty-modules/context-store/hooks/useFindManyRecordsSelectedInContextStore';
import { useObjectMetadataItemById } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItemById';

export const CommandMenuContextRecordsChip = ({
  objectMetadataItemId,
  instanceId,
}: {
  objectMetadataItemId: string;
  instanceId?: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItemById({
    objectId: objectMetadataItemId,
  });

  const { records, loading, totalCount } =
    useFindManyRecordsSelectedInContextStore({
      limit: 3,
      instanceId,
    });

  if (loading || !totalCount || records.length === 0) {
    return null;
  }

  const Avatars = records.map((record) => (
    <CommandMenuContextRecordChipAvatars
      objectMetadataItem={objectMetadataItem}
      key={record.id}
      record={record}
    />
  ));

  return (
    <CommandMenuContextChip
      text={getSelectedRecordsContextText(
        objectMetadataItem,
        records,
        totalCount,
      )}
      Icons={Avatars}
    />
  );
};
