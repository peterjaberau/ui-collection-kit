import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { isWorkflowSubObjectMetadata } from '@twenty-modules/object-metadata/utils/isWorkflowSubObjectMetadata';

export const isObjectMetadataReadOnly = (
  objectMetadataItem: Pick<ObjectMetadataItem, 'isRemote' | 'nameSingular'>,
) =>
  objectMetadataItem.isRemote ||
  isWorkflowSubObjectMetadata(objectMetadataItem.nameSingular);
