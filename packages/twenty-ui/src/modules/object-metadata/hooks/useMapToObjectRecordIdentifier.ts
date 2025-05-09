import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { getObjectRecordIdentifier } from '@twenty-modules/object-metadata/utils/getObjectRecordIdentifier';
import { ObjectRecord } from '@twenty-modules/object-record/types/ObjectRecord';

export const useMapToObjectRecordIdentifier = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const mapToObjectRecordIdentifier = (record: ObjectRecord) => {
    return getObjectRecordIdentifier({ objectMetadataItem, record });
  };

  return { mapToObjectRecordIdentifier };
};
