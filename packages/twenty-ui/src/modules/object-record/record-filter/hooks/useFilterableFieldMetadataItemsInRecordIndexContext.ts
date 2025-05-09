import { useFilterableFieldMetadataItems } from '@twenty-modules/object-record/record-filter/hooks/useFilterableFieldMetadataItems';
import { useRecordIndexContextOrThrow } from '@twenty-modules/object-record/record-index/contexts/RecordIndexContext';

export const useFilterableFieldMetadataItemsInRecordIndexContext = () => {
  const { objectMetadataItem } = useRecordIndexContextOrThrow();

  const { filterableFieldMetadataItems } = useFilterableFieldMetadataItems(
    objectMetadataItem.id,
  );

  return { filterableFieldMetadataItems };
};
