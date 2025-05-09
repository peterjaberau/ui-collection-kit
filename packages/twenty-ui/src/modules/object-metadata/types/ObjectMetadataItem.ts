import { Object as GeneratedObject } from '@twenty-ui/front/generated-metadata/graphql';

import { IndexMetadataItem } from '@twenty-modules/object-metadata/types/IndexMetadataItem';
import { FieldMetadataItem } from './FieldMetadataItem';

export type ObjectMetadataItem = Omit<
  GeneratedObject,
  | '__typename'
  | 'fields'
  | 'dataSourceId'
  | 'indexMetadatas'
  | 'labelIdentifierFieldMetadataId'
  | 'fieldsList'
> & {
  __typename?: string;
  fields: FieldMetadataItem[];
  labelIdentifierFieldMetadataId: string;
  indexMetadatas: IndexMetadataItem[];
};
