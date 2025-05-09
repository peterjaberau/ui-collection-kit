import { IndexFieldMetadataItem } from '@twenty-modules/object-metadata/types/IndexFieldMetadataItem';
import { Index as GeneratedIndex } from '@twenty-ui/front/generated-metadata/graphql';

export type IndexMetadataItem = Omit<
  GeneratedIndex,
  '__typename' | 'indexFieldMetadatas' | 'objectMetadata'
> & {
  __typename?: string;
  indexFieldMetadatas: IndexFieldMetadataItem[];
};
