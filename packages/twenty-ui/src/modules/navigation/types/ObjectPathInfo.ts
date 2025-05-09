import { ObjectMetadataItem } from '@twenty-modules/object-metadata/types/ObjectMetadataItem';
import { View } from '@twenty-modules/views/types/View';

export type ObjectPathInfo = {
  objectMetadataItem: ObjectMetadataItem;
  view: View | undefined;
};
