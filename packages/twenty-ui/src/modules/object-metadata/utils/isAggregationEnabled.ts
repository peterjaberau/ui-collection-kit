import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';

export const isAggregationEnabled = (objectMetadataItem: ObjectMetadataItem) =>
  !objectMetadataItem.isRemote;
