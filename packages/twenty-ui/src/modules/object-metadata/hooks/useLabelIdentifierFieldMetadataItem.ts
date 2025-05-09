import { useObjectMetadataItem } from '@twenty-modules/object-metadata/hooks/useObjectMetadataItem';
import { getLabelIdentifierFieldMetadataItem } from '@twenty-modules/object-metadata/utils/getLabelIdentifierFieldMetadataItem';

export const useLabelIdentifierFieldMetadataItem = ({
  objectNameSingular,
}: {
  objectNameSingular: string;
}) => {
  const { objectMetadataItem } = useObjectMetadataItem({
    objectNameSingular,
  });

  const labelIdentifierFieldMetadataItem =
    getLabelIdentifierFieldMetadataItem(objectMetadataItem);

  return { labelIdentifierFieldMetadataItem };
};
